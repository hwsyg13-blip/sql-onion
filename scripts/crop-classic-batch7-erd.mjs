// "아래" 캡션 + 외곽 라운드 박스 제거. (batch-1/3/4 의 추가 7 장)
// 출력 파일명: -erd.png (ERD/모델 포함) 또는 -cropped.png (스키마/줄글 등)
// 좌표는 시각 정독 기반 추정. 실패 시 4x 검증 후 미세 조정.

import sharp from 'sharp';

const INPUTS = [
  // top 좌표는 tmp/probe-arae.mjs 결과로 결정 (검은 "아래" 박스 끝 + 4px 여유).

  // j68 (345x159) — 서비스_가입 (논리) ↔ SVC_JOIN (물리). 두 박스 + [논리]/[물리] 캡션 모두 유지.
  { src: 'public/sqld-images/j68-1.png', out: 'public/sqld-images/j68-model.png',
    extract: { left: 5, top: 32, width: 335, height: 122 } },

  // j87 (358x104) — 배우/영화/출연 스키마. PK 밑줄 보존 위해 이미지 유지, 외곽만 trim.
  { src: 'public/sqld-images/j87-1.png', out: 'public/sqld-images/j87-cropped.png',
    extract: { left: 5, top: 36, width: 348, height: 62 } },

  // j91 (381x136) — 제품·생산제품·생산라인 ERD.
  { src: 'public/sqld-images/j91-1.png', out: 'public/sqld-images/j91-erd.png',
    extract: { left: 5, top: 40, width: 371, height: 92 } },

  // j117 (350x366) — 회원·메일발송·이벤트 ERD + SQL (㉠~㉣ 마커). 전체 유지, 외곽만 trim.
  { src: 'public/sqld-images/j117-1.png', out: 'public/sqld-images/j117-erd.png',
    extract: { left: 5, top: 36, width: 340, height: 325 } },

  // j120 (352x179) — 품질평가항목·평가결과·평가대상상품 데이터 모델. [데이터 모델] 캡션 유지.
  { src: 'public/sqld-images/j120-1.png', out: 'public/sqld-images/j120-erd.png',
    extract: { left: 5, top: 39, width: 340, height: 135 } },

  // j125 (362x360) — 지역·이용내역 ERD 만. 표는 batch-1 에서 이미 table ref 로 분리됨.
  { src: 'public/sqld-images/j125-1.png', out: 'public/sqld-images/j125-erd.png',
    extract: { left: 5, top: 33, width: 352, height: 110 } },

  // j132 (355x424) — 게임상품·고객활동·고객 ERD 만. 결과예제 표는 별도 table ref 로 분리됨.
  { src: 'public/sqld-images/j132-1.png', out: 'public/sqld-images/j132-erd.png',
    extract: { left: 5, top: 31, width: 345, height: 100 } },
];

for (const { src, out, extract } of INPUTS) {
  await sharp(src).extract(extract).toFile(out);
  const m = await sharp(out).metadata();
  console.log(`Wrote ${out} (${m.width}x${m.height})`);
}
