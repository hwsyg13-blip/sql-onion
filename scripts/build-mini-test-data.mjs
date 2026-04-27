// 새 시안의 exam-review.html → src/data/miniTest/ox.ts 자동 생성
//
// 30개 챕터 (#ch-1-1-1 ~ #ch-2-3-4) 각각의 <div class="ox-quiz">...<div class="ox-q">...
// 패턴을 파싱.

import { readFileSync, writeFileSync } from 'node:fs';

const SRC = 'C:/Users/hwsyg/OneDrive/문서/Claude/Projects/SQLD 이론/_mockups/exam-review.html';
const OUT = 'src/data/miniTest/ox.ts';

const raw = readFileSync(SRC, 'utf8');

// section id="ch-X-Y-Z" 단위로 분할
const sectionRe = /<section class="exam-chapter" id="ch-(\d)-(\d)-(\d)">([\s\S]*?)(?=<section class="exam-chapter"|<\/main>)/g;

// 한 chapter section 안에서 ox-q 추출
function parseOxQuestions(section) {
  const out = [];
  const re = /<div class="ox-q">([\s\S]*?)<\/div>\s*(?=<div class="ox-q">|<\/div>)/g;
  let m;
  while ((m = re.exec(section)) !== null) {
    const inner = m[1];
    // q 진술문
    const qm = inner.match(/<div class="q">([\s\S]*?)<\/div>/);
    // verdict O 또는 X
    const vm = inner.match(/<span class="verdict (o|x)">[OX]<\/span>([\s\S]*?)<\/div>/);
    if (!qm || !vm) continue;
    const q = qm[1].replace(/\s+/g, ' ').trim();
    const answer = vm[1] === 'o';
    let explanation = vm[2]
      .replace(/<\/?strong>/g, '**')   // <strong>X</strong> → **X**
      .replace(/<\/?[^>]+>/g, '')       // 나머지 태그 제거
      .replace(/\s+/g, ' ')
      .trim();
    out.push({ q, answer, explanation });
  }
  return out;
}

const allChapters = {};
let totalQ = 0;
let m;
while ((m = sectionRe.exec(raw)) !== null) {
  const chapterId = `c${m[1]}${m[2]}${m[3]}`;
  const section = m[4];
  const questions = parseOxQuestions(section);
  if (questions.length === 0) {
    console.warn(`  [warn] ${chapterId} — no OX questions parsed`);
    continue;
  }
  allChapters[chapterId] = questions;
  totalQ += questions.length;
  console.log(`  [ok] ${chapterId}: ${questions.length} questions`);
}

const header = `// @ts-nocheck
// 자동 생성 — 'SQLD 이론/_mockups/exam-review.html' 30개 챕터 OX 추출.
// 다시 빌드: node scripts/build-mini-test-data.mjs
//
// 챕터별 OX 미니 퀴즈 — 챕터 페이지 우측 사이드바 MiniTestSidebar 가 사용.

export interface OxQuestion {
  /** 진술문 — O/X 판단 대상 */
  q: string;
  /** O = true, X = false */
  answer: boolean;
  /** 정답 노출 시 함께 보이는 해설 (인라인 마크다운: **bold** 사용 가능) */
  explanation: string;
}

export const OX_QUIZ: Record<string, OxQuestion[]> = {
`;
const body = Object.entries(allChapters)
  .map(([cid, qs]) => `  ${cid}: ${JSON.stringify(qs, null, 2).replace(/\n/g, '\n  ')},`)
  .join('\n');
const footer = `\n};\n`;

writeFileSync(OUT, header + body + footer, 'utf8');
console.log(`\nWrote ${Object.keys(allChapters).length} chapters / ${totalQ} OX to ${OUT}`);
