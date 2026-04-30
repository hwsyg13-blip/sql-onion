// cbt-mock.json 의 image refs 를 md5 그룹화 → scripts/cbt-mock-image-groups.json 생성.
// classic 의 group-sqld-images.mjs 와 동일 패턴.

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const SRC = 'scripts/authored/cbt-mock.json';
const OUT = 'scripts/cbt-mock-image-groups.json';

const data = JSON.parse(fs.readFileSync(SRC, 'utf-8'));
const questions = data.authored || [];

const refsByImage = new Map(); // src → { md5, questions: [{_id, _origNo, alt, ...}] }

for (const q of questions) {
  for (const r of q.references || []) {
    if (r.type !== 'image' || !r.src) continue;
    const localPath = path.join('public', r.src.replace(/^\//, ''));
    if (!fs.existsSync(localPath)) {
      console.warn(`MISSING: ${localPath}`);
      continue;
    }
    if (!refsByImage.has(r.src)) {
      const md5 = crypto.createHash('md5').update(fs.readFileSync(localPath)).digest('hex').slice(0, 12);
      const stat = fs.statSync(localPath);
      refsByImage.set(r.src, { md5, size: stat.size, questions: [] });
    }
    refsByImage.get(r.src).questions.push({ _id: q._id, _origNo: q._origNo, alt: r.alt, caption: r.caption || null });
  }
}

// 같은 md5 끼리 묶기
const byHash = new Map();
for (const [src, info] of refsByImage) {
  if (!byHash.has(info.md5)) {
    byHash.set(info.md5, { hash: info.md5, size: info.size, srcs: [], questions: [] });
  }
  const g = byHash.get(info.md5);
  g.srcs.push(src);
  g.questions.push(...info.questions);
}

const groups = [...byHash.values()].sort((a, b) => b.questions.length - a.questions.length);
const dupes = groups.filter(g => g.questions.length > 1).length;

const out = {
  totalImages: refsByImage.size,
  uniqueGroups: groups.length,
  dupeGroups: dupes,
  groups,
};

fs.writeFileSync(OUT, JSON.stringify(out, null, 2));
console.log(`Wrote ${OUT}`);
console.log(`  total image refs: ${[...refsByImage.values()].reduce((s, x) => s + x.questions.length, 0)}`);
console.log(`  unique image src : ${refsByImage.size}`);
console.log(`  unique md5 group : ${groups.length}`);
console.log(`  duplicate groups : ${dupes}`);
