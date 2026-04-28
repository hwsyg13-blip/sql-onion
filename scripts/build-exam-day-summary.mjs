// exam-day-summary.html (시험 당일 핵심 총정리) → React 통합용 자산 추출.
//
// 출력:
//   src/data/examDaySummary.ts        — <article class="theory-md"> 본문 HTML 문자열
//   src/styles/examDaySummary.css     — <head><style> 페이지 특화 CSS
//
// 다시 빌드: node scripts/build-exam-day-summary.mjs

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

const SRC = 'C:/Users/hwsyg/OneDrive/문서/Claude/Projects/SQLD 이론/_mockups/exam-day-summary.html';
const OUT_HTML = 'src/data/examDaySummary.ts';
const OUT_CSS = 'src/styles/examDaySummary.css';

const raw = readFileSync(SRC, 'utf8');

// ── article body ──
const bodyMatch = raw.match(/<article class="theory-md">([\s\S]*?)<\/article>/);
if (!bodyMatch) {
  console.error('No <article class="theory-md"> in exam-day-summary.html');
  process.exit(1);
}
let body = bodyMatch[1].trim();

// day-toc 는 article 바깥에 있는 sticky 바로가기 nav. 본문 앞에 prepend.
const tocMatch = raw.match(/<nav class="day-toc[^>]*>[\s\S]*?<\/nav>/);
if (tocMatch) {
  body = `${tocMatch[0]}\n${body}`;
}

// 챕터 토큰 (1-1-1 등) 은 시험 당일 페이지에선 외부 링크 없음 — 별도 처리 불필요.

// ── page-specific style ──
const styleMatch = raw.match(/<style>([\s\S]*?)<\/style>/);
let css = styleMatch ? styleMatch[1].trim() : '';

// .reveal 룰은 src/index.css 가 단일 출처 — 시안의 opacity:0 룰이 cascade 후행
// 우선으로 본문을 invisible 시키는 사고 방지 (PR #52 동일 처리).
css = css.replace(/\.reveal(\.is-visible)?\s*\{[^}]*\}\s*/g, '');
// .theory-md table* 베이스 룰도 src/index.css 가 단일 출처. 중복 시 모바일 @media
// (width: max-content) 가 덮여 표가 viewport 100% 로 늘어나는 PR #53 사고 재현.
css = css.replace(/\.theory-md\s+table[^{,]*\{[^}]*\}\s*/g, '');

mkdirSync(dirname(OUT_HTML), { recursive: true });
mkdirSync(dirname(OUT_CSS), { recursive: true });

writeFileSync(
  OUT_HTML,
  `// @ts-nocheck
// 자동 생성 — 'SQLD 이론/_mockups/exam-day-summary.html' 의 <article class="theory-md"> 본문.
// 다시 빌드: node scripts/build-exam-day-summary.mjs
//
// CheatSheetScreen 이 dangerouslySetInnerHTML 로 렌더. 페이지 스타일은
// src/styles/examDaySummary.css 가 main.tsx 에서 로드.

export const EXAM_DAY_SUMMARY_HTML = ${JSON.stringify(body)};
`,
  'utf8',
);

writeFileSync(
  OUT_CSS,
  `/* ============================================================
   자동 생성 — exam-day-summary.html 의 head <style> 페이지 특화 CSS.
   다시 빌드: node scripts/build-exam-day-summary.mjs
   ============================================================ */
${css}
`,
  'utf8',
);

console.log(`Wrote ${OUT_HTML} (${body.length} chars)`);
console.log(`Wrote ${OUT_CSS} (${css.length} chars)`);
