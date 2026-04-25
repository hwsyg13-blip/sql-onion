// One-shot: SVG → PNG 변환 (Open Graph 이미지용)
// 사용: node scripts/build-og-image.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import sharp from 'sharp';

const svg = readFileSync('public/assets/og-cover.svg');
const png = await sharp(svg, { density: 144 }).resize(1200, 630).png().toBuffer();
writeFileSync('public/assets/og-cover.png', png);
console.log('wrote public/assets/og-cover.png', png.length, 'bytes');
