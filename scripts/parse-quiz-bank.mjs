// Parse sqld_text.txt (SQLD 기출복원 45-60회) → src/data/quizBank.ts
// Usage: node scripts/parse-quiz-bank.mjs  (from C:\dev\sql-onion)

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const SOURCE = resolve('C:/Users/hwsyg/AppData/Local/Temp/design/sql/project/uploads/sqld_text.txt');
const OUT    = resolve('src/data/quizBank.ts');

const raw = readFileSync(SOURCE, 'utf8');

// Strip page markers like "-- 3 of 61 --"
const lines = raw.split(/\r?\n/).filter(l => !/^-- \d+ of \d+ --\s*$/.test(l));

// Round dates (from header table)
const ROUND_DATES = {
  45: '2022년 5월', 46: '2022년 9월', 47: '2022년 11월',
  48: '2023년 3월', 49: '2023년 6월', 50: '2023년 9월', 51: '2023년 11월',
  52: '2024년 3월', 53: '2024년 5월', 54: '2024년 8월', 55: '2024년 11월',
  56: '2025년 3월', 57: '2025년 5월', 58: '2025년 8월', 59: '2025년 11월',
  60: '2026년 3월',
};

// Find round sections
const sections = [];
let current = null;
for (let i = 0; i < lines.length; i++) {
  const m = /^제(\d+)회 SQLD 기출복원$/.exec(lines[i].trim());
  if (m) {
    if (current) sections.push(current);
    current = { round: Number(m[1]), body: [] };
    continue;
  }
  if (current) current.body.push(lines[i]);
}
if (current) sections.push(current);

const circled = { '①': 0, '②': 1, '③': 2, '④': 3 };

function parseRound(section) {
  const questions = [];
  let subject = null;   // '1과목' | '2과목'
  let q = null;         // current question accumulator

  const flush = () => {
    if (!q) return;
    // Validate: must have 4 options and a correctIndex
    if (q.options.length === 4 && q.correctIndex != null) {
      questions.push(q);
    }
    q = null;
  };

  for (const rawLine of section.body) {
    const line = rawLine.trim();
    if (!line) continue;

    // Subject switch
    let m = /^\[(\d)과목\]/.exec(line);
    if (m) { flush(); subject = `${m[1]}과목`; continue; }

    // Skip the "시험일:" header line inside a round
    if (/^시험일:/.test(line)) continue;

    // Answer line: [정답: ① 행위 엔터티]
    m = /^\[정답:\s*([①②③④])/.exec(line);
    if (m && q) {
      q.correctIndex = circled[m[1]];
      // Pull the rest of the answer line as part of explanation if present
      const rest = line.replace(/^\[정답:[^\]]*\]\s*/, '');
      if (rest) q.explanation = (q.explanation ? q.explanation + ' ' : '') + rest;
      continue;
    }

    // Explanation: ※ ...
    if (/^※/.test(line) && q) {
      const text = line.replace(/^※\s*/, '');
      q.explanation = (q.explanation ? q.explanation + ' ' : '') + text;
      continue;
    }

    // Option line: ① 내용 / ② 내용 / ...
    m = /^([①②③④])\s*(.*)$/.exec(line);
    if (m && q) {
      const idx = circled[m[1]];
      q.options[idx] = m[2].trim();
      continue;
    }

    // Question start: "N. 문제 내용..."
    m = /^(\d+)\.\s+(.*)$/.exec(line);
    if (m && subject) {
      flush();
      q = {
        round: section.round,
        number: Number(m[1]),
        subject,
        title: m[2].trim(),
        options: [],
        correctIndex: null,
        explanation: '',
      };
      continue;
    }

    // Continuation of current question body (before options)
    if (q && q.options.length === 0) {
      q.title += ' ' + line;
      continue;
    }
    // Continuation of last option
    if (q && q.options.length > 0 && q.correctIndex == null) {
      q.options[q.options.length - 1] += ' ' + line;
      continue;
    }
    // Continuation of explanation
    if (q && q.explanation) {
      q.explanation += ' ' + line;
      continue;
    }
  }
  flush();
  return questions;
}

const allQuestions = [];
let nextId = 10000;
for (const section of sections) {
  const qs = parseRound(section);
  for (const q of qs) {
    allQuestions.push({
      id: nextId++,
      examSetId: `round-${section.round}`,
      examLabel: `제${section.round}회 (${ROUND_DATES[section.round] || ''})`,
      round: section.round,
      subject: q.subject,
      number: q.number,
      title: q.title,
      options: q.options,
      correctIndex: q.correctIndex,
      explanation: q.explanation || '',
    });
  }
}

// Summary
const byRound = {};
for (const q of allQuestions) {
  byRound[q.round] = (byRound[q.round] || 0) + 1;
}
console.log('Parsed questions per round:');
for (const r of Object.keys(byRound).sort((a,b) => Number(a) - Number(b))) {
  console.log(`  제${r}회 → ${byRound[r]} questions`);
}
console.log(`Total: ${allQuestions.length}`);

// Emit TS
const tsBody = `// Auto-generated from SQLD_기출복원_45-60회.pdf (text extraction)
// 회차별 기출복원 문제 — 총 ${allQuestions.length}문항, 제45회 ~ 제60회
// id: 회차 무관 고유번호 / round: 회차 / examSetId: 'round-N'

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

export const EXAM_SETS: { id: string; round: number; label: string; date: string; count: number }[] = ${JSON.stringify(
  Object.keys(byRound).sort((a,b) => Number(b) - Number(a)).map(r => ({
    id: `round-${r}`,
    round: Number(r),
    label: `제${r}회`,
    date: ROUND_DATES[r] || '',
    count: byRound[r],
  })),
  null,
  2
)};

export const QUIZ_BANK: QuizQuestion[] = ${JSON.stringify(allQuestions, null, 2)};
`;

writeFileSync(OUT, tsBody, 'utf8');
console.log(`\nWrote ${OUT}`);
