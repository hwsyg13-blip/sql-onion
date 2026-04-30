// 여러 conversion 파일 (modern-box, classic batches) 을 한 번에 적용.
// scripts/authored/sqld-quiz-1140.json 의 image references 를 자동 교체.
//
// 동작:
//  1. 입력 파일들의 'groups' 를 모두 머지 (md5 hash → refs)
//  2. 각 question 의 references[] / optionReferences[][] 의 image src 를 md5 해서
//     매칭되면 conversions[hash].refs 로 spread 교체 (이미 변환된 ref 는 건너뜀)
//  3. 통계 출력 후 sqld-quiz-1140.json 덮어쓰기
//
// Usage:
//   node scripts/apply-vision-conversions.mjs \
//       scripts/modern-box-conversions.json \
//       scripts/classic-batch-1-conversions.json \
//       [scripts/classic-batch-N-conversions.json ...]

import fs from 'node:fs';
import crypto from 'node:crypto';
import path from 'node:path';

const SRC_FILE = 'scripts/authored/sqld-quiz-1140.json';

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Usage: node scripts/apply-vision-conversions.mjs <conversions1.json> [conversions2.json ...]');
  process.exit(1);
}

// Merge groups from all conversion files
const mergedGroups = {};
for (const f of args) {
  const data = JSON.parse(fs.readFileSync(f, 'utf-8'));
  if (!data.groups) {
    console.error(`File ${f} has no 'groups' key`);
    continue;
  }
  for (const [hash, g] of Object.entries(data.groups)) {
    if (mergedGroups[hash]) {
      console.warn(`Hash ${hash} already merged from another file (overwriting): ${mergedGroups[hash].name} → ${g.name}`);
    }
    mergedGroups[hash] = g;
  }
}
console.log(`Loaded ${Object.keys(mergedGroups).length} conversion groups from ${args.length} files`);

const data = JSON.parse(fs.readFileSync(SRC_FILE, 'utf-8'));
console.log(`Loaded ${data.authored.length} questions`);

const hashCache = new Map();
function hashOf(src) {
  if (hashCache.has(src)) return hashCache.get(src);
  const fp = path.join('public', src.replace(/^\//, ''));
  if (!fs.existsSync(fp)) {
    hashCache.set(src, null);
    return null;
  }
  const h = crypto.createHash('md5').update(fs.readFileSync(fp)).digest('hex').slice(0, 12);
  hashCache.set(src, h);
  return h;
}

const stats = {
  questions: 0,
  qsModified: 0,
  refReplacements: 0,
  optRefReplacements: 0,
  perGroup: {},
};
for (const h of Object.keys(mergedGroups)) stats.perGroup[h] = 0;

function transformRefs(refs) {
  if (!Array.isArray(refs)) return { changed: false, out: refs };
  const out = [];
  let changed = false;
  for (const r of refs) {
    if (r && r.type === 'image' && r.src) {
      const h = hashOf(r.src);
      if (h && mergedGroups[h]) {
        for (const cr of mergedGroups[h].refs) out.push({ ...cr });
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
const noteMark = `vision-conversions ${Object.keys(mergedGroups).length}그룹 적용 (${stats.qsModified} 문항 변환)`;
data.notes = (data.notes || '') + ` | ${noteMark}.`;

fs.writeFileSync(SRC_FILE, JSON.stringify(data, null, 2) + '\n');

console.log(`\n=== Application done ===`);
console.log(`Conversions used:                ${Object.keys(mergedGroups).length}`);
console.log(`Questions modified:              ${stats.qsModified} / ${stats.questions}`);
console.log(`Reference image→ref replaces:    ${stats.refReplacements}`);
console.log(`Option image→ref replaces:       ${stats.optRefReplacements}`);
console.log(`\nPer-group hits (>0):`);
for (const [h, count] of Object.entries(stats.perGroup).sort((a, b) => b[1] - a[1])) {
  if (count > 0) {
    const name = mergedGroups[h].name;
    console.log(`  ${count.toString().padStart(3)} × ${name} [${h}]`);
  }
}
console.log(`\nWrote ${SRC_FILE}`);
