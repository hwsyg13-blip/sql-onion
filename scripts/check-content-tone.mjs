// 애드센스 신청 전 콘텐츠 점검 — 크롤러가 읽는 페이지에서 '대량 생산한 티' 를 찾는다.
// 사용: npm run build && node scripts/check-content-tone.mjs   (dist/ 의 HTML 과 이론 본문을 본다)
//
// Google 은 AI 사용 여부가 아니라 '사람에게 가치 있는 글인가' 를 본다. 그래서 여기서는
//   1) 사용자에게 보이는 'AI·인공지능·생성형' 표기 (실제 동작과 다르면 신뢰를 떨어뜨린다)
//   2) 여러 페이지에 똑같이 반복되는 문장 (템플릿으로 찍어낸 페이지 신호)
//   3) 내용 없이 분량만 채우는 상투 문구
// 를 센다. 1) 이 있거나 2) 가 5개 이상이면 exit 1.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
if (!existsSync(DIST)) { console.error('dist/ 가 없다. 먼저 npm run build'); process.exit(2); }

const visible = html => html
  .replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<noscript>/gi, ' ').replace(/<\/noscript>/gi, ' ')
  .replace(/<[^>]+>/g, '\n')
  .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#39;/g, "'").replace(/&quot;/g, '"');

const pages = [];
const walk = d => { for (const n of readdirSync(d)) { const p = join(d, n); if (statSync(p).isDirectory()) { if (n !== 'assets') walk(p); } else if (n.endsWith('.html')) pages.push(p); } };
walk(DIST);

const AI_WORDS = /(\bAI\b|인공지능|생성형|챗GPT|ChatGPT|GPT|자동\s*생성된)/;
const STOCK = ['본 챕터는', '반복적으로 출제되는 핵심 영역', '에 대해 알아보', '살펴보겠습니다', '살펴보자', '다양한', '중요한 역할', '결론적으로', '요약하자면', '이처럼', '매우 중요', '필수적인', '효과적으로', '한눈에 정리'];

const aiHits = [], sentencePages = new Map(), stockCount = {};
for (const p of pages) {
  const text = visible(readFileSync(p, 'utf8'));
  const lines = text.split('\n').map(s => s.replace(/\s+/g, ' ').trim()).filter(Boolean);
  for (const l of lines) {
    const m = l.match(AI_WORDS);
    if (m) aiHits.push(`${p.replace(DIST, '')}: …${l.slice(Math.max(0, m.index - 20), m.index + 30)}…`);
    for (const s of l.split(/(?<=[.!?다요])\s+/)) {
      if (s.length < 25) continue;
      if (!sentencePages.has(s)) sentencePages.set(s, new Set());
      sentencePages.get(s).add(p);
    }
    for (const k of STOCK) if (l.includes(k)) stockCount[k] = (stockCount[k] || 0) + 1;
  }
}
// 사이트 공통 머리·꼬리(메뉴, 푸터)는 반복이 당연하므로 제외
const COMMON = /SQLD양파 — SQLD 3주 합격 루틴|이용약관|개인정보처리방침|홈으로/;
const repeated = [...sentencePages.entries()].filter(([s, set]) => set.size >= 3 && !COMMON.test(s)).sort((a, b) => b[1].size - a[1].size);

console.log(`점검 페이지 ${pages.length}개`);
console.log(`\n1) 'AI' 류 표기: ${aiHits.length}건`);
aiHits.slice(0, 20).forEach(x => console.log('  ' + x));
console.log(`\n2) 3페이지 이상 반복되는 문장: ${repeated.length}개`);
repeated.slice(0, 15).forEach(([s, set]) => console.log(`  ${set.size}페이지 · ${s.slice(0, 80)}`));
console.log('\n3) 상투 문구 (등장 줄 수)');
const st = Object.entries(stockCount).sort((a, b) => b[1] - a[1]);
console.log(st.length ? '  ' + st.map(([k, v]) => `${k} ${v}`).join(' · ') : '  없음');

process.exitCode = (aiHits.length || repeated.length >= 5) ? 1 : 0;
