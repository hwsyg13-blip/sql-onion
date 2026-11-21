// 사용: node settheory.mjs c111 new.html  — theoryHtml.ts 의 해당 챕터 한 줄만 교체
import { readFileSync, writeFileSync } from 'node:fs';
const [id, file] = process.argv.slice(2);
const P = 'src/data/theoryHtml.ts';
const lines = readFileSync(P, 'utf8').split('\n');
const i = lines.findIndex(l => l.startsWith(`  ${id}: "`));
if (i < 0) throw new Error('not found ' + id);
const html = readFileSync(file, 'utf8').trim();
const trailing = lines[i].trimEnd().endsWith(',') ? ',' : '';
lines[i] = `  ${id}: ${JSON.stringify(html)}${trailing}`;
writeFileSync(P, lines.join('\n'));
console.log('replaced', id, 'chars', html.length);
