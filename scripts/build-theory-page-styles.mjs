// 새 시안 (SQLD 이론/_mockups/*.html) 의 head <style> 안에 정의된
// 페이지 특화 CSS (.null-flow, .ba-flow override 등) 를 한 파일로 모음.
//
// 출력: src/styles/theoryPages.css
// main.tsx 에서 import 해야 적용된다.

import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';

const MOCKUPS_DIR = 'C:/Users/hwsyg/OneDrive/문서/Claude/Projects/SQLD 이론/_mockups';
const OUT = 'src/styles/theoryPages.css';

const files = readdirSync(MOCKUPS_DIR)
  .filter(f => /^\d-\d-\d_.*\.html$/.test(f))
  .sort();

console.log(`Found ${files.length} chapter mockups`);

mkdirSync(dirname(OUT), { recursive: true });

const chunks = [
  '/* ============================================================',
  '   자동 생성: 30개 시안 head <style> 안 페이지 특화 CSS 통합.',
  '   다시 빌드: node scripts/build-theory-page-styles.mjs',
  '   ============================================================ */',
];

let total = 0;
for (const f of files) {
  const raw = readFileSync(join(MOCKUPS_DIR, f), 'utf8');
  // <head> 안의 첫 번째 <style>...</style> (페이지 특화). common.css 의 @import 는 제외.
  const m = raw.match(/<style>([\s\S]*?)<\/style>/);
  if (!m) {
    console.log(`  [skip] ${f} — no <style>`);
    continue;
  }
  let body = m[1].trim();
  if (!body) continue;
  // 시안의 inline style="grid-template-columns: ..." 가 미디어쿼리 룰을 덮어쓰는 문제 해결.
  // @media 블록 안의 grid-template-columns 에 !important 자동 부착 — balanced brace 처리.
  body = (() => {
    let out = '';
    let i = 0;
    while (i < body.length) {
      const at = body.indexOf('@media', i);
      if (at === -1) { out += body.slice(i); break; }
      out += body.slice(i, at);
      // @media 시작부터 첫 '{' 찾기
      let j = body.indexOf('{', at);
      if (j === -1) { out += body.slice(at); break; }
      // balanced brace 로 닫는 '}' 찾기
      let depth = 1; let k = j + 1;
      while (k < body.length && depth > 0) {
        if (body[k] === '{') depth++;
        else if (body[k] === '}') depth--;
        k++;
      }
      const block = body.slice(at, k);
      // grid-template-columns: <값>; 에 !important
      const patched = block.replace(
        /(grid-template-columns\s*:\s*[^;}!]+?)(\s*[;}])/g,
        (_, css, end) => `${css.trim()} !important${end}`
      );
      out += patched;
      i = k;
    }
    return out;
  })();
  chunks.push(`\n/* ===== ${f} ===== */`);
  chunks.push(body);
  total++;
  console.log(`  [ok] ${f} (${body.length} chars)`);
}

writeFileSync(OUT, chunks.join('\n'), 'utf8');
console.log(`\nWrote ${total} chapters to ${OUT}`);
