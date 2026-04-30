// modern-box-conversions.json 의 17개 그룹 (md5 hash) 을 사용해
// scripts/authored/sqld-quiz-1140.json 의 image references 를 자동 교체.
//
// 동작:
//  1. 각 question 의 references[] 에서 type='image' 인 ref 만 검사
//  2. ref.src 파일의 md5(앞 12자리) 가 conversions.groups 에 있으면
//     해당 image ref 를 conversions[hash].refs 로 교체 (1:N spread)
//  3. optionReferences[][] 도 동일하게 처리
//  4. 통계 출력 + sqld-quiz-1140.json 덮어쓰기

import fs from 'node:fs';
import crypto from 'node:crypto';
import path from 'node:path';

const CONV_FILE = 'scripts/modern-box-conversions.json';
const SRC_FILE = 'scripts/authored/sqld-quiz-1140.json';

const conv = JSON.parse(fs.readFileSync(CONV_FILE, 'utf-8'));
const data = JSON.parse(fs.readFileSync(SRC_FILE, 'utf-8'));

console.log(`Loaded ${Object.keys(conv.groups).length} conversion groups`);
console.log(`Loaded ${data.authored.length} questions`);

// Cache: src path → md5 hash
const hashCache = new Map();
function hashOf(src) {
  if (hashCache.has(src)) return hashCache.get(src);
  // /sqld-images/jXXX-N.png → public/sqld-images/jXXX-N.png
  const fp = path.join('public', src.replace(/^\//, ''));
  if (!fs.existsSync(fp)) {
    hashCache.set(src, null);
    return null;
  }
  const hash = crypto.createHash('md5').update(fs.readFileSync(fp)).digest('hex').slice(0, 12);
  hashCache.set(src, hash);
  return hash;
}

let stats = {
  questions: 0,
  qsModified: 0,
  refReplacements: 0,
  optRefReplacements: 0,
  perGroup: {},
};
for (const h of Object.keys(conv.groups)) stats.perGroup[h] = 0;

function transformRefs(refs) {
  if (!Array.isArray(refs)) return { changed: false, out: refs };
  const out = [];
  let changed = false;
  for (const r of refs) {
    if (r && r.type === 'image' && r.src) {
      const h = hashOf(r.src);
      if (h && conv.groups[h]) {
        // Spread converted refs in place of this image
        for (const cr of conv.groups[h].refs) out.push({ ...cr });
        changed = true;
        stats.perGroup[h]++;
        continue;
      }
    }
    out.push(r);
  }
  return { changed, out };
}

for (const q of data.authored) {
  stats.questions++;
  let qChanged = false;

  if (q.references) {
    const t = transformRefs(q.references);
    if (t.changed) {
      q.references = t.out;
      stats.refReplacements++;
      qChanged = true;
    }
  }

  if (q.optionReferences && Array.isArray(q.optionReferences)) {
    for (let i = 0; i < q.optionReferences.length; i++) {
      const t = transformRefs(q.optionReferences[i]);
      if (t.changed) {
        q.optionReferences[i] = t.out;
        stats.optRefReplacements++;
        qChanged = true;
      }
    }
  }

  if (qChanged) stats.qsModified++;
}

// Update notes
data.notes = (data.notes || '') + ` | modern-box-conversions ${Object.keys(conv.groups).length}개 그룹 일괄 적용 (${stats.qsModified}/${stats.questions} 문항 변환).`;
data.version = (data.version || 1) + 1;

fs.writeFileSync(SRC_FILE, JSON.stringify(data, null, 2) + '\n');

console.log(`\n=== Conversion done ===`);
console.log(`Questions modified:           ${stats.qsModified} / ${stats.questions}`);
console.log(`Reference image→ref replaces: ${stats.refReplacements}`);
console.log(`Option image→ref replaces:    ${stats.optRefReplacements}`);
console.log(`\nPer-group hits:`);
for (const [h, count] of Object.entries(stats.perGroup).sort((a, b) => b[1] - a[1])) {
  const name = conv.groups[h].name;
  console.log(`  ${count.toString().padStart(3)} × ${name} [${h}]`);
}
console.log(`\nWrote ${SRC_FILE}`);
