// sqld-quiz-1140.json 의 옵션이 모두 빈 59문항을 raw 원본에서 image 로 살림.
//
// 배경: 원래 import-sqld-1140.mjs 의 saveImage() 가 { key, dataUrl } 객체 형태만 기대.
// 실제 raw 의 q.choiceImages[i] 는 'data:image/png;base64,...' 문자열 자체 → import 시 모두 누락.
// 결과: choices = ["","","",""] + optionReferences = (없음) → 학생 화면에서 옵션 비어 보임 (59건).
//
// 이 스크립트는:
// 1. raw JSON 에서 해당 문항들의 choiceImages 추출
// 2. PNG 로 public/sqld-images/sqld-{id}-c{i+1}.png 저장
// 3. authored/sqld-quiz-1140.json 의 optionReferences 만 갱신 (다른 수정 보존)

import fs from 'node:fs';
import path from 'node:path';

const RAW = 'C:/Users/hwsyg/Downloads/sqld_quiz_with_images_1140.json';
const AUTHORED = 'scripts/authored/sqld-quiz-1140.json';
const IMG_DIR = 'public/sqld-images';

const raw = JSON.parse(fs.readFileSync(RAW, 'utf-8'));
const authored = JSON.parse(fs.readFileSync(AUTHORED, 'utf-8'));

// id → raw entry
const rawById = new Map();
for (const r of raw) rawById.set(r.id, r);

let fixedCount = 0;
let imgCount = 0;
const skipped = [];

for (const q of authored.authored) {
  if (!Array.isArray(q.options)) continue;
  const allEmpty = q.options.every(o => !o || !o.trim());
  if (!allEmpty) continue;
  const hasOptImg = (q.optionReferences || []).some(arr => Array.isArray(arr) && arr.some(r => r && r.type));
  if (hasOptImg) continue;

  // raw lookup: q._id 'sqld-0080' → raw id 80
  const m = q._id.match(/^sqld-(\d+)$/);
  if (!m) continue;
  const rawId = parseInt(m[1], 10);
  const r = rawById.get(rawId);
  if (!r) { skipped.push({ id: q._id, why: 'raw not found' }); continue; }

  const cis = r.choiceImages;
  if (!Array.isArray(cis) || cis.length === 0) {
    skipped.push({ id: q._id, why: 'raw choiceImages empty' });
    continue;
  }

  const optRefs = [];
  let hasAnyImg = false;
  for (let i = 0; i < cis.length; i++) {
    const ci = cis[i];
    if (typeof ci !== 'string') { optRefs.push([]); continue; }
    const dm = ci.match(/^data:image\/(\w+);base64,(.+)$/);
    if (!dm) { optRefs.push([]); continue; }
    const ext = dm[1] === 'jpeg' ? 'jpg' : dm[1];
    const fname = `${q._id}-c${i + 1}.${ext}`;
    const filePath = path.join(IMG_DIR, fname);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, Buffer.from(dm[2], 'base64'));
    }
    optRefs.push([{ type: 'image', src: `/sqld-images/${fname}`, alt: `보기 ${i + 1} 이미지` }]);
    hasAnyImg = true;
    imgCount++;
  }

  if (!hasAnyImg) {
    skipped.push({ id: q._id, why: 'no extractable images' });
    continue;
  }

  q.optionReferences = optRefs;
  fixedCount++;
}

fs.writeFileSync(AUTHORED, JSON.stringify(authored, null, 2) + '\n');

console.log(`\n=== Fix done ===`);
console.log(`Questions fixed:           ${fixedCount}`);
console.log(`Images extracted:          ${imgCount}`);
console.log(`Skipped:                   ${skipped.length}`);
for (const s of skipped) console.log(`  ${s.id}: ${s.why}`);
console.log(`\nWrote ${AUTHORED}`);
