// j101 의 상단 ERD 영역만 잘라내서 별도 이미지로 저장.
// (mermaid 변환이 불안정해서 원본을 잘라 image ref 로 사용)

import sharp from 'sharp';

const INPUTS = [
  // j101: 351x250, 상단 ~50% 가 ERD, 하단은 SQL.
  // "아래" 라벨 (top 22) 과 "[수행 SQL]" 라벨 (top 122) 모두 회피.
  { src: 'public/sqld-images/j101-1.png', out: 'public/sqld-images/j101-erd.png',
    extract: { left: 5, top: 22, width: 341, height: 100 } },
];

for (const { src, out, extract } of INPUTS) {
  await sharp(src).extract(extract).toFile(out);
  const m = await sharp(out).metadata();
  console.log(`Wrote ${out} (${m.width}x${m.height})`);
}
