// scripts/upscale-cbt-mock-batch.mjs
// cbt-mock-batch-1-conversions.json 의 TODO placeholder 중 지정 범위만 sharp 3x lanczos3 업스케일.
//
// Usage:
//   node scripts/upscale-cbt-mock-batch.mjs <start> <count>
//   예) node scripts/upscale-cbt-mock-batch.mjs 0 5   # 첫 5개
//
// 출력: scripts/.upscale-cbt-mock/<imageKey>.png

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const CONV = 'scripts/cbt-mock-batch-1-conversions.json';
const OUT_DIR = 'scripts/.upscale-cbt-mock';

const start = parseInt(process.argv[2] || '0', 10);
const count = parseInt(process.argv[3] || '5', 10);

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const data = JSON.parse(fs.readFileSync(CONV, 'utf-8'));
const entries = Object.entries(data.groups).filter(([, g]) =>
  g.refs.some((r) => r._todo === true) || g.name.includes('TODO')
);
console.log(`총 TODO: ${entries.length} / 처리 범위: [${start}, ${start + count})`);

const slice = entries.slice(start, start + count);
const summary = [];
for (const [hash, g] of slice) {
  const r0 = g.refs[0];
  const fp = path.join('public', r0.src.replace(/^\//, ''));
  const out = path.join(OUT_DIR, `${g.imageKey}.png`);
  if (!fs.existsSync(fp)) {
    console.warn(`  ✗ MISSING: ${fp}`);
    continue;
  }
  const meta = await sharp(fp).metadata();
  await sharp(fp)
    .resize(meta.width * 3, meta.height * 3, { kernel: sharp.kernel.lanczos3 })
    .png({ compressionLevel: 9 })
    .toFile(out);
  console.log(`  ✓ [${hash}] ${g.imageKey}.png  (${meta.width}×${meta.height} → ${meta.width * 3}×${meta.height * 3})`);
  summary.push({ hash, name: g.name, imageKey: g.imageKey, out, origQuestion: g.origQuestion });
}

fs.writeFileSync(path.join(OUT_DIR, '_summary.json'), JSON.stringify(summary, null, 2));
console.log(`\n${slice.length}개 업스케일 완료 → ${OUT_DIR}/`);
console.log(`  요약: ${path.join(OUT_DIR, '_summary.json')}`);
