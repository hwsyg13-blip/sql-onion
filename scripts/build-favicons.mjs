// 일회성 파비콘/로고 생성기 — favicon.svg(메인 로고와 같은 양파 캐릭터)를 여러 PNG 사이즈로 변환
// Google 검색 결과 favicon 표시 + Apple Touch Icon + PWA 아이콘 + Schema.org Organization.logo
//
// 사용: node scripts/build-favicons.mjs
import { copyFileSync, readFileSync, writeFileSync } from 'node:fs';
import sharp from 'sharp';

const src = readFileSync('public/assets/favicon.svg');
const targets = [
  { size: 32,  out: 'public/assets/favicon-32.png' },
  { size: 48,  out: 'public/assets/favicon-48.png' },
  { size: 96,  out: 'public/assets/favicon-96.png' },
  { size: 180, out: 'public/assets/apple-touch-icon.png', solid: true },
  { size: 192, out: 'public/assets/icon-192.png', solid: true },
  { size: 512, out: 'public/assets/icon-512.png', solid: true },
  { size: 512, out: 'public/assets/logo-512.png' }, // schema.org logo (112+ recommended)
];

for (const t of targets) {
  // density 곱 — SVG 를 충분히 큰 raster 로 먼저 만들고 resize → 선명도 확보
  const density = Math.max(72, Math.ceil(t.size / 24 * 144));
  // 홈 화면·앱 아이콘(solid)은 투명 배경이면 iOS 가 검게 채우므로 흰 바탕 + 여백(가장자리 잘림 대비)
  const bg = t.solid ? { r: 255, g: 255, b: 255, alpha: 1 } : { r: 255, g: 255, b: 255, alpha: 0 };
  const inner = t.solid ? Math.round(t.size * 0.72) : t.size;
  const art = await sharp(src, { density })
    .resize(inner, inner, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toBuffer();
  const buf = await sharp({ create: { width: t.size, height: t.size, channels: 4, background: bg } })
    .composite([{ input: art, gravity: 'center' }])
    .png()
    .toBuffer();
  writeFileSync(t.out, buf);
  console.log(`  ${t.out} — ${buf.length} bytes (${t.size}x${t.size})`);
}

// public/favicon.ico — Google 검색 결과 favicon 의 1차 lookup 경로.
// SPA fallback (vercel.json rewrites) 가 /favicon.ico 를 index.html 로 보내지 않도록
// 루트에 실제 파일이 존재해야 함. PNG 를 .ico 확장자로 두면 모든 주요 브라우저·Google 이 수용.
copyFileSync('public/assets/favicon-32.png', 'public/favicon.ico');
console.log('  public/favicon.ico — copy of favicon-32.png');

console.log('Done.');
