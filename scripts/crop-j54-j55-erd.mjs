// j54: "아래" 캡션 + 외곽 테두리 제거 → BOARD 속성 박스만 남김
// j55: "아래" 캡션 + 외곽 테두리 제거 + ERD 부분만 추출 (테이블/SQL은 batch-2 에서 text/table ref 로 분리됨)

import sharp from 'sharp';
import path from 'path';

const ROOT = path.resolve(process.argv[2] ?? '.');

const INPUTS = [
  // j54 원본 344x134. "아래" 라벨 + 외곽 라운드 박스 안쪽 BOARD 엔터티만.
  { src: 'public/sqld-images/j54-1.png', out: 'public/sqld-images/j54-erd.png',
    extract: { left: 10, top: 26, width: 324, height: 100 } },

  // j55 원본 342x294. 상단 ERD 영역만. "아래" 검은 라벨 + "[표 : 주문 데이터]" 캡션 모두 회피. 표/SQL 은 batch-2 에서 text/table 로 분리됨.
  { src: 'public/sqld-images/j55-1.png', out: 'public/sqld-images/j55-erd.png',
    extract: { left: 6, top: 30, width: 330, height: 78 } },
].map(x => ({ ...x, src: path.join(ROOT, x.src), out: path.join(ROOT, x.out) }));

for (const { src, out, extract } of INPUTS) {
  await sharp(src).extract(extract).toFile(out);
  const m = await sharp(out).metadata();
  console.log(`Wrote ${out} (${m.width}x${m.height})`);
}
