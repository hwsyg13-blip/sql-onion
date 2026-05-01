// CBT 모의고사 (이기적 209) conversion 적용 도구.
// scripts/authored/cbt-mock.json 의 image references 를 자동 교체.
// 동작/스키마는 apply-vision-conversions.mjs 와 동일, 타겟만 cbt-mock.json.
//
// Usage:
//   node scripts/apply-cbt-mock-conversions.mjs scripts/cbt-mock-batch-1-conversions.json [...]

import fs from 'node:fs';
import crypto from 'node:crypto';
import path from 'node:path';

const SRC_FILE = 'scripts/authored/cbt-mock.json';

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Usage: node scripts/apply-cbt-mock-conversions.mjs <conversions1.json> [...]');
  process.exit(1);
}

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
const questions = data.authored || [];
console.log(`Loaded ${questions.length} questions`);

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

for (const q of questions) {
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

const noteMark = `cbt-mock-conversions ${Object.keys(mergedGroups).length}그룹 적용 (${stats.qsModified} 문항 변환)`;
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
