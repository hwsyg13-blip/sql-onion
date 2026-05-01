// Final merge:  PDF + blog-full + authored overrides
// → src/data/rounds/round-XX.ts (one file per round)
// → src/data/quizBank.ts (index, re-exports QUIZ_BANK + EXAM_SETS)
//
// Sources per (round, subject, number), highest priority wins:
//   1. scripts/authored/round-NN.json  (hand-authored)
//   2. PDF extraction
//   3. Blog extraction (only questions with 4 full options)

import { readFileSync, writeFileSync, readdirSync, existsSync, rmSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const PDF_TEXT = 'C:/Users/hwsyg/AppData/Local/Temp/design/sql/project/uploads/sqld_text.txt';
const BLOG_RAW = 'scripts/blog-questions-raw.json';
const AUTHORED_DIR = 'scripts/authored';
const AI_MOCK_FILE = 'scripts/authored/ai-mock.json';
const CBT_MOCK_FILE = 'scripts/authored/cbt-mock.json';
const SQLD_1140_FILE = 'scripts/authored/sqld-quiz-1140.json';
const ROUNDS_DIR = 'src/data/rounds';
const INDEX_FILE = 'src/data/quizBank.ts';

const ROUND_DATES = {
  45: '2022년 5월', 46: '2022년 9월', 47: '2022년 11월',
  48: '2023년 3월', 49: '2023년 6월', 50: '2023년 9월', 51: '2023년 11월',
  52: '2024년 3월', 53: '2024년 5월', 54: '2024년 8월', 55: '2024년 11월',
  56: '2025년 3월', 57: '2025년 5월', 58: '2025년 8월', 59: '2025년 11월',
  60: '2026년 3월',
};

const CIRCLED = { '①': 0, '②': 1, '③': 2, '④': 3 };

function parsePdf() {
  const raw = readFileSync(PDF_TEXT, 'utf8');
  const lines = raw.split(/\r?\n/).filter(l => !/^-- \d+ of \d+ --\s*$/.test(l));
  const sections = [];
  let cur = null;
  for (const l of lines) {
    const m = /^제(\d+)회 SQLD 기출복원$/.exec(l.trim());
    if (m) { if (cur) sections.push(cur); cur = { round: Number(m[1]), body: [] }; continue; }
    if (cur) cur.body.push(l);
  }
  if (cur) sections.push(cur);

  const out = {};
  for (const s of sections) {
    out[s.round] = [];
    let subject = null, q = null;
    const flush = () => { if (q && q.options.length === 4 && q.correctIndex != null) out[s.round].push(q); q = null; };
    for (const raw of s.body) {
      const line = raw.trim();
      if (!line) continue;
      let m = line.match(/^\[(\d)과목\]/);
      if (m) { flush(); subject = `${m[1]}과목`; continue; }
      if (/^시험일:/.test(line)) continue;
      m = line.match(/^\[정답:\s*([①②③④])/);
      if (m && q) { q.correctIndex = CIRCLED[m[1]]; continue; }
      if (/^※/.test(line) && q) { q.explanation = (q.explanation?q.explanation+' ':'')+line.replace(/^※\s*/,''); continue; }
      m = line.match(/^([①②③④])\s*(.*)$/);
      if (m && q) { q.options[CIRCLED[m[1]]] = (m[2]||'').trim(); continue; }
      m = line.match(/^(\d+)\.\s+(.*)$/);
      if (m && subject) { flush(); q = { round: s.round, subject, number: Number(m[1]), title: m[2].trim(), options: [], correctIndex: null, explanation: '' }; continue; }
      if (q && q.options.length === 0) q.title += ' ' + line;
      else if (q && q.correctIndex == null) q.options[q.options.length-1] += ' ' + line;
      else if (q && q.explanation) q.explanation += ' ' + line;
    }
    flush();
  }
  return out;
}

const pdf = parsePdf();
const blog = JSON.parse(readFileSync(BLOG_RAW, 'utf8'));

// Authored overrides
const authored = {};
if (existsSync(AUTHORED_DIR)) {
  for (const f of readdirSync(AUTHORED_DIR)) {
    const m = f.match(/^round-(\d+)\.json$/);
    if (!m) continue;
    const round = Number(m[1]);
    const data = JSON.parse(readFileSync(resolve(AUTHORED_DIR, f), 'utf8'));
    authored[round] = data.authored || [];
  }
}

// AI mock (기출 변형) — 회차에 속하지 않는 별도 풀
let aiMock = [];
if (existsSync(AI_MOCK_FILE)) {
  const data = JSON.parse(readFileSync(AI_MOCK_FILE, 'utf8'));
  aiMock = data.authored || [];
}

// CBT mock (영진닷컴 이기적 CBT 등 외부 모의고사 PDF) — ai-mock 풀에 합쳐 노출
let cbtMock = [];
if (existsSync(CBT_MOCK_FILE)) {
  const data = JSON.parse(readFileSync(CBT_MOCK_FILE, 'utf8'));
  cbtMock = data.authored || [];
}

// SQLD 1140 외부 출처 모의고사 — ai-mock 풀에 합쳐 노출 (이미지는 public/sqld-images/ 에서 path 로 참조)
let sqld1140 = [];
if (existsSync(SQLD_1140_FILE)) {
  const data = JSON.parse(readFileSync(SQLD_1140_FILE, 'utf8'));
  sqld1140 = data.authored || [];
}

const rounds = Object.keys(ROUND_DATES).map(Number).sort((a,b)=>b-a);
const merged = {};
for (const r of rounds) {
  // authored 파일이 ≥10 문항이면 EXCLUSIVELY 사용 (PDF/blog 혼합 금지 — 번호·정답 정합성 보존)
  if (authored[r] && authored[r].length >= 10) {
    merged[r] = authored[r].map(a => ({
      round: r, subject: a.subject, number: a.number,
      title: a.title, options: a.options, correctIndex: a.correctIndex,
      explanation: a.explanation,
      references: a.references,           // 질문 보기
      optionReferences: a.optionReferences, // 선택지별 보기
      source: 'authored',
    })).sort((a,b) => a.subject.localeCompare(b.subject) || a.number - b.number);
    continue;
  }
  // 그 외 회차 — PDF + blog + 부분 authored 합집합
  const map = new Map();
  for (const q of (pdf[r] || [])) map.set(`${q.subject}-${q.number}`, { ...q, source: 'pdf' });
  for (const q of (blog[r] || [])) {
    if (!q.fullOptions) continue;
    const k = `${q.subject}-${q.number}`;
    if (map.has(k)) continue;
    map.set(k, { round: r, subject: q.subject, number: q.number, title: q.title, options: q.options, correctIndex: q.correctIndex, explanation: q.explanation, source: 'blog' });
  }
  for (const a of (authored[r] || [])) {
    map.set(`${a.subject}-${a.number}`, { round: r, subject: a.subject, number: a.number, title: a.title, options: a.options, correctIndex: a.correctIndex, explanation: a.explanation, source: 'authored' });
  }
  merged[r] = Array.from(map.values()).sort((a,b) => {
    if (a.subject !== b.subject) return a.subject.localeCompare(b.subject);
    return a.number - b.number;
  });
}

// Wipe + recreate rounds dir
rmSync(ROUNDS_DIR, { recursive: true, force: true });
mkdirSync(ROUNDS_DIR, { recursive: true });

// Write per-round file
let nextId = 10000;
const roundFileNames = [];
let totalCount = 0;
for (const r of rounds) {
  const qs = merged[r].map(q => {
    const entry = {
      id: nextId++,
      examSetId: `round-${r}`,
      examLabel: `제${r}회 (${ROUND_DATES[r] || ''})`,
      round: r,
      subject: q.subject,
      number: q.number,
      title: q.title,
      options: q.options.slice(0, 4),
      correctIndex: q.correctIndex,
      explanation: q.explanation || '',
      _source: q.source,
    };
    if (q.references && q.references.length) entry.references = q.references;
    if (q.optionReferences && q.optionReferences.some(r => r && r.length)) {
      entry.optionReferences = q.optionReferences;
    }
    return entry;
  });
  totalCount += qs.length;

  const varName = `ROUND_${r}`;
  const body = `// Auto-generated from PDF + blog + scripts/authored/round-${r}.json
// 제${r}회 — ${ROUND_DATES[r] || ''} · ${qs.length}문항
// ⚠ 직접 편집 금지. 출처별 데이터를 고친 뒤 'node scripts/build-quiz-bank.mjs' 재실행.
import type { QuizQuestion } from '../quizBank';

export const ${varName}: QuizQuestion[] = ${JSON.stringify(qs, null, 2)};
`;
  const fname = `round-${r}.ts`;
  writeFileSync(resolve(ROUNDS_DIR, fname), body, 'utf8');
  roundFileNames.push({ r, varName, fname });
}

// AI mock 풀 별도 파일 생성 (UI에서 자동 노출 — 기출 회차 시험은 round 필터로 제외, 모의고사 모드는 통합 풀에서 셔플)
// ai-mock.json + cbt-mock.json + sqld-quiz-1140.json 세 출처를 병합. UI 에서는 단일 모의고사 풀로 노출.
const combinedMockRaw = [
  ...aiMock.map(q => ({ ...q, _pool: 'ai-mock' })),
  ...cbtMock.map(q => ({ ...q, _pool: 'cbt-mock' })),
  ...sqld1140.map(q => ({ ...q, _pool: 'sqld-1140' }))
];

// 외부 출처(sqld-1140, cbt-mock) 일부에 options 가 빈 채로 import 된 항목 다수 (이미지로 옵션이 그려진 원본을
// 텍스트 추출 시 누락). 풀 수 없는 문제라 노출 단계에서 제외. 향후 vision 변환으로 복원되면 자동 복귀.
//
// 단, options 가 비어 있어도 optionReferences 에 보기 image/table 등이 있으면 학생이 보기를 볼 수 있으므로 유효.
// (cbt-002 처럼 보기 1~4 가 image refs 인 정상 패턴을 제외하지 않기 위함.)
function hasUsableOptions(q) {
  const hasTextOptions = Array.isArray(q.options) && q.options.length > 0 && q.options.every(o => typeof o === 'string' && o.trim() !== '');
  if (hasTextOptions) return true;
  const hasOptionRefs = Array.isArray(q.optionReferences) && q.optionReferences.some(arr => Array.isArray(arr) && arr.length > 0);
  return hasOptionRefs;
}
const skippedEmpty = combinedMockRaw.filter(q => !hasUsableOptions(q));
const combinedMock = combinedMockRaw.filter(hasUsableOptions);
if (skippedEmpty.length > 0) {
  console.log(`\n[빈 options 제외] ${skippedEmpty.length} 문항 (전체 ${combinedMockRaw.length} 중) — 모의고사 풀에서 누락:`);
  const byPool = {};
  for (const q of skippedEmpty) (byPool[q._pool] ||= []).push(q._id);
  for (const [pool, ids] of Object.entries(byPool)) console.log(`  ${pool}: ${ids.length}건`);
}

const aiMockEntries = combinedMock.map((q, i) => {
  const entry = {
    id: nextId++,
    examSetId: 'ai-mock',
    examLabel: '모의고사',
    subject: q.subject,
    number: i + 1,
    title: q.title,
    options: q.options.slice(0, 4),
    correctIndex: q.correctIndex,
    explanation: q.explanation || '',
    chapter: q.chapter,
    _source: q._pool || 'ai-mock',
    _origId: q._id,
  };
  if (q._pool === 'cbt-mock') {
    // 영진닷컴 license_no=73 JSON (v2) — _origNo 사용. PDF 추출 시절의 _pdf/_pdfNumber 는 폐기.
    entry._cbtOrigNo = q._origNo;
  }
  if (q._pool === 'sqld-1140') {
    entry._category = q._category;
    entry._correctRate = q._correctRate;
  }
  if (q.references && q.references.length) entry.references = q.references;
  if (q.optionReferences && q.optionReferences.some(r => r && r.length)) {
    entry.optionReferences = q.optionReferences;
  }
  return entry;
});

writeFileSync(resolve(ROUNDS_DIR, 'ai-mock.ts'), `// Auto-generated from scripts/authored/ai-mock.json
// AI 생성 모의고사 풀 (기출 변형) · ${aiMockEntries.length}문항
// ⚠ 직접 편집 금지. ai-mock.json 수정 후 'node scripts/build-quiz-bank.mjs' 재실행.
import type { QuizQuestion } from '../quizBank';

export const AI_MOCK: QuizQuestion[] = ${JSON.stringify(aiMockEntries, null, 2)};
`, 'utf8');

// Index file
const examSets = rounds.map(r => ({
  id: `round-${r}`,
  round: r,
  label: `제${r}회`,
  date: ROUND_DATES[r] || '',
  count: merged[r].length,
}));

const importLines = roundFileNames.map(({ r, varName }) => `import { ${varName} } from './rounds/round-${r}';`).join('\n')
  + `\nimport { AI_MOCK } from './rounds/ai-mock';`;
const bankJoin = roundFileNames.map(({ varName }) => `  ...${varName},`).join('\n');

const indexBody = `// Auto-generated index. Do not edit by hand — re-run scripts/build-quiz-bank.mjs.
// 총 ${totalCount}문항, 제45회 ~ 제60회

/** 문항에 딸린 보기(지문·표·SQL·ERD 도식) 블록 */
export type QuestionReference =
  | { type: 'text';  content: string; heading?: string }
  | { type: 'sql';   code: string; caption?: string }
  | { type: 'table'; headers: string[]; rows: string[][]; caption?: string }
  | { type: 'ascii'; text: string; caption?: string }
  | { type: 'html';  html: string; caption?: string }
  | { type: 'entity-diagram'; entityName: string; preText: string; headers: string[]; rows: string[][] };

export type QuizQuestion = {
  id: number;
  examSetId: string;
  examLabel: string;
  /** 기출 회차 번호. ai-mock 등 회차에 속하지 않는 풀은 undefined. */
  round?: number;
  subject: '1과목' | '2과목';
  number: number;
  title: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  /** 문항에 포함되는 보기(지문·표·SQL·도식) 블록들. 없으면 생략. */
  references?: QuestionReference[];
  /** 선택지별 보기 블록. 인덱스가 options 와 일치. 빈 배열은 보기 없음. */
  optionReferences?: (QuestionReference[] | undefined)[];
  /** SQLD 챕터 메타태그 (ai-mock 항목에 부여). UI 노출 가능. */
  chapter?: string;
  /** 내부 출처 태그 ('pdf' | 'blog' | 'authored' | 'ai-mock'). UI 에 노출하지 말 것. */
  _source?: string;
  /** AI 모의 원본 ID (ai-mock-001 등). 추적용. */
  _origId?: string;
};

${importLines}

export const EXAM_SETS: { id: string; round: number; label: string; date: string; count: number }[] = ${JSON.stringify(examSets, null, 2)};

/** 기출 회차 풀 (45회~60회) — 회차 시험·모의고사 출제 풀 */
export const QUIZ_BANK_EXAM: QuizQuestion[] = [
${bankJoin}
];

/** AI 생성 변형 풀 — 기출 회차에 속하지 않는 별도 풀 */
export const QUIZ_BANK_AI_MOCK: QuizQuestion[] = [...AI_MOCK];

/** 통합 풀 (기출 + AI 변형) — 모의고사·랜덤 퀴즈 모드 출제용. 기출 회차 CBT 는 round 필터로 ai-mock 자동 제외됨. */
export const QUIZ_BANK: QuizQuestion[] = [
  ...QUIZ_BANK_EXAM,
  ...QUIZ_BANK_AI_MOCK,
];
`;

writeFileSync(INDEX_FILE, indexBody, 'utf8');

console.log('회차별 파일:');
for (const r of rounds) {
  const bySource = merged[r].reduce((o, q) => ((o[q.source] = (o[q.source]||0)+1), o), {});
  console.log(`  ${ROUNDS_DIR}/round-${r}.ts (${merged[r].length}) ${JSON.stringify(bySource)}`);
}
console.log(`  ${ROUNDS_DIR}/ai-mock.ts (${aiMockEntries.length}) {"ai-mock":${aiMockEntries.length}}`);
console.log('---');
console.log(`total: ${totalCount + aiMockEntries.length}문항 (기출 ${totalCount} + AI 변형 ${aiMockEntries.length})`);
console.log(`wrote ${INDEX_FILE} + ${rounds.length} round files + 1 ai-mock file`);
