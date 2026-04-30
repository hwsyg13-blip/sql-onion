// public/sqld-images/ 의 모든 PNG 를 md5 해시로 그룹핑.
// 동일 콘텐츠가 다른 imageKey 로 여러 번 등장하는 케이스를 찾아냄.
//
// 출력: scripts/sqld-image-groups.json

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const DIR = 'public/sqld-images';
const OUT = 'scripts/sqld-image-groups.json';

const files = fs.readdirSync(DIR).filter((f) => f.endsWith('.png') && !f.endsWith('-erd.png'));
console.log(`Scanning ${files.length} PNG files...`);

const groups = {}; // hash → [imageKey, ...]
for (const f of files) {
  const buf = fs.readFileSync(path.join(DIR, f));
  const hash = crypto.createHash('md5').update(buf).digest('hex').slice(0, 12);
  const key = f.replace(/\.png$/, '').replace(/-1$/, '');
  if (!groups[hash]) groups[hash] = { keys: [], size: buf.length };
  groups[hash].keys.push(key);
}

const sorted = Object.entries(groups)
  .map(([hash, { keys, size }]) => ({ hash, keys, size, count: keys.length }))
  .sort((a, b) => b.count - a.count);

const dupes = sorted.filter((g) => g.count > 1);
const uniques = sorted.filter((g) => g.count === 1);

console.log(`\n=== Summary ===`);
console.log(`Total files:        ${files.length}`);
console.log(`Unique content:     ${sorted.length}`);
console.log(`Groups with dupes:  ${dupes.length}`);
console.log(`Singletons:         ${uniques.length}`);
console.log(`\nTop 15 most duplicated groups:`);
dupes.slice(0, 15).forEach((g) => {
  console.log(`  ${g.count}× [${g.hash}] keys: ${g.keys.slice(0, 8).join(', ')}${g.keys.length > 8 ? '...' : ''}`);
});

fs.writeFileSync(OUT, JSON.stringify({
  totalFiles: files.length,
  uniqueGroups: sorted.length,
  dupeGroups: dupes.length,
  groups: sorted,
}, null, 2));
console.log(`\nWrote ${OUT}`);
