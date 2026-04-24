// Parse 45~60회 복원 마크다운 파일 → scripts/authored/round-XX.json
// 포맷:
//   ## 1과목: 데이터 모델링의 이해
//   ## N. 질문내용
//   * ① 보기1
//   * ② 보기2
//   * ③ 보기3
//   * ④ 보기4
//   **정답: ① 보기1**
//   > 해설
//
//   ## N. (단답형) 질문
//   **정답: 답 텍스트**   ← 스킵 (MCQ 아님)

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

const MD_DIR = 'C:/Users/hwsyg/OneDrive/문서/Claude/Projects/SQLD 양파';
const OUT_DIR = 'scripts/authored';
if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

const CIRCLED = { '①': 0, '②': 1, '③': 2, '④': 3 };
const ROUND_DATES = {
  45: '2022년 5월', 46: '2022년 9월', 47: '2022년 11월',
  48: '2023년 3월', 49: '2023년 6월', 50: '2023년 9월', 51: '2023년 11월',
  52: '2024년 3월', 53: '2024년 5월', 54: '2024년 8월', 55: '2024년 11월',
  56: '2025년 3월', 57: '2025년 5월', 58: '2025년 8월', 59: '2025년 11월',
  60: '2026년 3월',
};

function parseRoundMd(round, text) {
  const lines = text.split(/\r?\n/);
  const mcq = [];
  const shortAnswer = [];
  let subject = null;
  let cur = null;

  // SQLD 표준: 1~10 = 1과목, 11~50 = 2과목 (파일에 과목 헤더 없을 때 사용)
  const inferSubject = (num) => (num >= 1 && num <= 10) ? '1과목' : '2과목';

  const flushCurrent = () => {
    if (!cur) return;
    const questionSubject = cur._subject || subject || '2과목';
    if (cur.isShort) {
      if (cur.answer) shortAnswer.push({ number: cur.number, title: cur.title.trim(), answer: cur.answer, explanation: cur.explanation.trim() });
    } else {
      if (cur.options.filter(Boolean).length === 4 && cur.correctIndex != null) {
        mcq.push({
          subject: questionSubject,
          number: cur.number,
          title: cur.title.trim(),
          options: cur.options,
          correctIndex: cur.correctIndex,
          explanation: cur.explanation.trim(),
        });
      }
    }
    cur = null;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Subject marker
    let m = trimmed.match(/^##\s+([12])과목[:\s]/);
    if (m) { flushCurrent(); subject = `${m[1]}과목`; continue; }

    // Question start
    m = trimmed.match(/^##\s+(\d{1,2})\.\s*(\(단답형\))?\s*(.*)$/);
    if (m) {
      flushCurrent();
      const num = Number(m[1]);
      subject = subject || inferSubject(num);
      // If subject marker exists above, keep it; but always refresh inference when crossing boundary
      if (!/[12]과목/.test(subject)) subject = inferSubject(num);
      cur = {
        number: num,
        isShort: Boolean(m[2]),
        title: m[3] || '',
        options: [],
        correctIndex: null,
        answer: null,
        explanation: '',
        _subject: inferSubject(num), // locked-in per question
      };
      continue;
    }
    if (!cur) continue;

    // Option line — "* ① ..." (bullet) or "**① ...**" (bold, used for table-result options)
    m = trimmed.match(/^\*\s+([①②③④])\s+(.*)$/);
    if (m) {
      cur.options[CIRCLED[m[1]]] = m[2].trim();
      continue;
    }
    m = trimmed.match(/^\*\*([①②③④])\s+(.+?)\*\*$/);
    if (m && cur.correctIndex == null && cur.answer == null) {
      cur.options[CIRCLED[m[1]]] = m[2].trim();
      continue;
    }

    // Answer line — "**정답: ① ...**" or "**정답: 텍스트**"
    m = trimmed.match(/^\*\*정답:\s*([①②③④])(?:\s+(.*))?\*\*$/) ||
        trimmed.match(/^\*\*정답:\s*([①②③④])(?:\s+(.*?))?\s*\*\*/);
    if (m) {
      cur.correctIndex = CIRCLED[m[1]];
      continue;
    }
    m = trimmed.match(/^\*\*정답:\s*(.+?)\*\*$/);
    if (m) {
      cur.answer = m[1].trim();
      continue;
    }

    // Explanation (blockquote)
    if (trimmed.startsWith('>') && !trimmed.startsWith('>>')) {
      const t = trimmed.replace(/^>\s?/, '');
      if (t && !/^(\[[A-Z]+\])$/.test(t)) {
        cur.explanation = (cur.explanation ? cur.explanation + ' ' : '') + t;
      }
      continue;
    }

    // Question body continuation before options
    if (cur.options.length === 0 && cur.correctIndex == null && cur.answer == null) {
      // multi-line question text
      if (trimmed && !trimmed.startsWith('##') && !trimmed.startsWith('---')) {
        // only append if looks like prose (not HTML/code)
        // keep HTML/code blocks as-is (preserve formatting)
        cur.title += '\n' + line;
      }
    }
  }
  flushCurrent();

  return { mcq, shortAnswer };
}

const summary = [];
for (const fname of readdirSync(MD_DIR)) {
  const m = fname.match(/^(\d+)회_복원\.md$/);
  if (!m) continue;
  const round = Number(m[1]);
  const text = readFileSync(resolve(MD_DIR, fname), 'utf8');
  const { mcq, shortAnswer } = parseRoundMd(round, text);

  const authored = mcq.map(q => ({
    subject: q.subject,
    number: q.number,
    title: q.title.replace(/\n+/g, '\n').trim(),
    options: q.options,
    correctIndex: q.correctIndex,
    explanation: q.explanation,
  }));

  const payload = {
    round,
    notes: `restored from ${fname} — MCQ ${mcq.length} + 단답형 ${shortAnswer.length} (단답형은 현재 UI 미지원이라 제외)`,
    authored,
    shortAnswerOmitted: shortAnswer.map(s => ({ number: s.number, answer: s.answer })),
  };

  writeFileSync(resolve(OUT_DIR, `round-${round}.json`), JSON.stringify(payload, null, 2), 'utf8');
  summary.push({ round, mcq: mcq.length, short: shortAnswer.length });
}

summary.sort((a,b) => b.round - a.round);
console.log('회차별 파싱 결과:');
for (const s of summary) {
  console.log(`  제${s.round}회: MCQ ${s.mcq} + 단답형(제외) ${s.short} → scripts/authored/round-${s.round}.json`);
}
console.log('---');
console.log('다음: node scripts/build-quiz-bank.mjs  로 round-XX.ts 갱신');
