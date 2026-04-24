// Final merge:  PDF + blog-full + authored overrides  →  src/data/quizBank.ts
// Sources of truth per (round, subject, number), highest priority wins:
//   1. scripts/authored/round-NN.json  (hand-authored)
//   2. PDF extraction
//   3. Blog extraction (only questions with 4 full options)

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const PDF_TEXT = 'C:/Users/hwsyg/AppData/Local/Temp/design/sql/project/uploads/sqld_text.txt';
const BLOG_RAW = 'scripts/blog-questions-raw.json';
const AUTHORED_DIR = 'scripts/authored';

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

// Load authored overrides
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

// Merge per round
const rounds = Object.keys(ROUND_DATES).map(Number).sort((a,b)=>b-a);
const merged = {};
for (const r of rounds) {
  const map = new Map();
  // 1. PDF
  for (const q of (pdf[r] || [])) {
    map.set(`${q.subject}-${q.number}`, { ...q, source: 'pdf' });
  }
  // 2. Blog full-options (only if PDF didn't cover it)
  for (const q of (blog[r] || [])) {
    if (!q.fullOptions) continue;
    const k = `${q.subject}-${q.number}`;
    if (map.has(k)) continue;
    map.set(k, {
      round: r, subject: q.subject, number: q.number,
      title: q.title, options: q.options,
      correctIndex: q.correctIndex, explanation: q.explanation,
      source: 'blog',
    });
  }
  // 3. Authored overrides (highest priority — overwrites even PDF if number matches)
  for (const a of (authored[r] || [])) {
    map.set(`${a.subject}-${a.number}`, {
      round: r, subject: a.subject, number: a.number,
      title: a.title, options: a.options,
      correctIndex: a.correctIndex, explanation: a.explanation,
      source: 'authored',
    });
  }
  merged[r] = Array.from(map.values()).sort((a,b) => {
    if (a.subject !== b.subject) return a.subject.localeCompare(b.subject);
    return a.number - b.number;
  });
}

// Summary
let total = 0;
console.log('회차별 최종 문항 수:');
for (const r of rounds) {
  const cnt = merged[r].length;
  total += cnt;
  const bySource = merged[r].reduce((o, q) => ((o[q.source] = (o[q.source]||0)+1), o), {});
  console.log(`  제${r}회: ${cnt}문항  ${JSON.stringify(bySource)}`);
}
console.log('---');
console.log(`총 ${total}문항`);

// Emit quizBank.ts
const all = [];
let nextId = 10000;
for (const r of rounds) {
  for (const q of merged[r]) {
    all.push({
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
    });
  }
}

const examSets = rounds.map(r => ({
  id: `round-${r}`,
  round: r,
  label: `제${r}회`,
  date: ROUND_DATES[r] || '',
  count: merged[r].length,
}));

const tsBody = `// Auto-generated: PDF + yunamom.tistory.com 블로그 + scripts/authored/*
// 총 ${all.length}문항, 제45회 ~ 제60회

export type QuizQuestion = {
  id: number;
  examSetId: string;
  examLabel: string;
  round: number;
  subject: '1과목' | '2과목';
  number: number;
  title: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export const EXAM_SETS: { id: string; round: number; label: string; date: string; count: number }[] = ${JSON.stringify(examSets, null, 2)};

export const QUIZ_BANK: QuizQuestion[] = ${JSON.stringify(all, null, 2)};
`;

writeFileSync('src/data/quizBank.ts', tsBody, 'utf8');
console.log(`\nsrc/data/quizBank.ts written (${all.length} questions)`);
