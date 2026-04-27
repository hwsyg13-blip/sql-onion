// 새 시안 (SQLD 이론/_mockups/*.html) → src/data/theoryHtml.ts 생성
//
// 각 HTML 의 <article class="theory-md">...</article> 본문만 추출.
// 챕터 간 상대 링크 (./1-1-2_엔터티.html) → data-chapter="c112" 속성으로 변환,
// 외부 시험대비 링크(./exam-review.html#ch-1-1-1)는 일단 그대로.

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const MOCKUPS_DIR = 'C:/Users/hwsyg/OneDrive/문서/Claude/Projects/SQLD 이론/_mockups';
const OUT = 'src/data/theoryHtml.ts';

// 파일명 1-1-1_데이터모델의이해.html → c111
function fileToChapterId(filename) {
  const m = filename.match(/^(\d)-(\d)-(\d)_/);
  if (!m) return null;
  return `c${m[1]}${m[2]}${m[3]}`;
}

// ./X-Y-Z_xxx.html → cXYZ
function relativeToChapterId(href) {
  const m = href.match(/^\.\/(\d)-(\d)-(\d)_/);
  if (!m) return null;
  return `c${m[1]}${m[2]}${m[3]}`;
}

const files = readdirSync(MOCKUPS_DIR)
  .filter(f => /^\d-\d-\d_.*\.html$/.test(f))
  .sort();

console.log(`Found ${files.length} chapter mockups`);

const entries = [];
for (const f of files) {
  const chapterId = fileToChapterId(f);
  if (!chapterId) continue;
  const raw = readFileSync(join(MOCKUPS_DIR, f), 'utf8');

  // <article class="theory-md"> ... </article> 추출
  const m = raw.match(/<article class="theory-md">([\s\S]*?)<\/article>/);
  if (!m) {
    console.warn(`  [skip] ${f} — no <article class="theory-md">`);
    continue;
  }
  let body = m[1];

  // 상대 챕터 링크 → data-chapter 속성으로 변환 (SPA 라우팅용)
  body = body.replace(
    /href="\.\/(\d-\d-\d_[^"]*?\.html)"/g,
    (full, href) => {
      const cid = relativeToChapterId(`./${href}`);
      return cid ? `href="#" data-chapter="${cid}"` : full;
    }
  );

  // exam-review 링크는 일단 그대로 (다음 PR 에서 SPA 라우트 연결)

  entries.push({ chapterId, body: body.trim() });
  console.log(`  [ok] ${f} → ${chapterId} (${body.length} chars)`);
}

// 출력 — TS 모듈
const header = `// @ts-nocheck
// 자동 생성 — 'SQLD 이론/_mockups/*.html' 의 <article class="theory-md"> 본문 추출.
// 다시 빌드: node scripts/build-theory-html.mjs
//
// 각 챕터 HTML 은 양파단 디자인 토큰(src/index.css) 과 .theory-md 인포그래픽 스타일을 사용.

export const THEORY_HTML: Record<string, string> = {
`;
const body = entries.map(e => `  ${e.chapterId}: ${JSON.stringify(e.body)},`).join('\n');
const footer = `\n};\n`;

writeFileSync(OUT, header + body + footer, 'utf8');
console.log(`\nWrote ${entries.length} chapters to ${OUT}`);
