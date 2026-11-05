// SEO 정적 페이지 생성기
// 빌드 후 실행: dist/ 안에 회차/이론/콘텐츠 페이지 생성 + sitemap 갱신
//
// 출력 페이지 구조:
//   /exam/                    회차 목록
//   /exam/round-NN/           회차 소개 (시행일·단원별 문항 수·많이 나온 주제 — 문제 본문은 싣지 않음)
//   /theory/cXX/              이론 챕터별 섹션 목록 (챕터 수는 src/data/theory.ts 기준)
//   /guide/sqld-overview/     SQLD 자격증 안내
//   /guide/sqld-application/  시험 응시·일정·접수 안내
//   /guide/sqld-3-week-plan/  3주 합격 학습 계획
//   /guide/sqld-tips/         단기 합격 팁
//   /guide/sqld-syllabus/     출제 범위 정리
//   sitemap.xml               전체 URL 목록으로 갱신

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs';
import { resolve, join } from 'node:path';

const DIST = 'dist';
const SITE = 'https://sqldyangpa.com';
const NOW = new Date().toISOString().slice(0, 10);

const GA_ID = 'G-NZC9ZDFT4Q';
const ADSENSE_CLIENT = 'ca-pub-4723950729614149';

// ============================================================
// 데이터 로드
// ============================================================
const ROUND_DATES = {
  45: { ko: '2022년 5월', y: 2022 }, 46: { ko: '2022년 9월', y: 2022 }, 47: { ko: '2022년 11월', y: 2022 },
  48: { ko: '2023년 3월', y: 2023 }, 49: { ko: '2023년 6월', y: 2023 }, 50: { ko: '2023년 9월', y: 2023 }, 51: { ko: '2023년 11월', y: 2023 },
  52: { ko: '2024년 3월', y: 2024 }, 53: { ko: '2024년 5월', y: 2024 }, 54: { ko: '2024년 8월', y: 2024 }, 55: { ko: '2024년 11월', y: 2024 },
  56: { ko: '2025년 3월', y: 2025 }, 57: { ko: '2025년 5월', y: 2025 }, 58: { ko: '2025년 8월', y: 2025 }, 59: { ko: '2025년 11월', y: 2025 },
  60: { ko: '2026년 3월', y: 2026 }, 61: { ko: '2026년 5월', y: 2026 }, 62: { ko: '2026년 8월', y: 2026 },
};
// 새 회차를 추가하면 ROUND_DATES 에 한 줄 추가한다 (날짜 없는 회차는 건너뛴다 — 아래 rounds 참고).

const rounds = [];
for (const n of Object.keys(ROUND_DATES).map(Number).sort((a, b) => a - b)) {
  const path = `scripts/authored/round-${n}.json`;
  if (!existsSync(path)) continue;
  rounds.push({ round: n, ...JSON.parse(readFileSync(path, 'utf8')), date: ROUND_DATES[n] });
}

const firstRound = rounds[0], lastRound = rounds[rounds.length - 1];
const totalQuestions = rounds.reduce((n, r) => n + (r.authored || r.items || r.questions || []).length, 0);
const shortDate = (ko) => ko.replace(/(\d{4})년 (\d+)월/, (_, y, m) => `${y}.${String(m).padStart(2, '0')}`);

// 시험 일정 — 앱 D-day 와 같은 원본(src/lib/examDate.ts)을 읽는다.
const EXAM_SCHEDULE = [...readFileSync('src/lib/examDate.ts', 'utf8').matchAll(/\{\s*round:\s*(\d+),\s*date:\s*'(\d{4})-(\d{2})-(\d{2})'\s*\}/g)]
  .map(([, r, y, m, d]) => ({ round: +r, y: +y, m: +m, d: +d, iso: `${y}-${m}-${d}` }));
const NEXT_EXAM = EXAM_SCHEDULE.find(e => e.iso >= NOW) || null;
const NEXT_EXAM_KO = NEXT_EXAM ? `제${NEXT_EXAM.round}회 ${NEXT_EXAM.y}년 ${NEXT_EXAM.m}월 ${NEXT_EXAM.d}일 (${'일월화수목금토'[new Date(Date.UTC(NEXT_EXAM.y, NEXT_EXAM.m - 1, NEXT_EXAM.d)).getUTCDay()]})` : '';
const scheduleItems = EXAM_SCHEDULE.slice(-5).map(e => {
  const upcoming = e.iso >= NOW ? ' <strong>다음 시험</strong>' : '';
  const wd = '일월화수목금토'[new Date(Date.UTC(e.y, e.m - 1, e.d)).getUTCDay()];
  return `<tr><td>제${e.round}회</td><td>${e.y}년 ${e.m}월 ${e.d}일 (${wd})${upcoming}</td></tr>`;
}).join('\n          ');

// 이론 본문 HTML (앱의 이론 상세 화면과 같은 원문) — 정적 페이지에 그대로 싣는다.
// 2026-11-02: 예전 정적 이론 페이지는 제목 + 섹션명 + 모든 페이지 같은 안내 문구뿐이라
// 애드센스 '가치가 별로 없는 콘텐츠' 판정의 원인이 됐다. 크롤러가 실제 본문을 읽을 수 있게 한다.
const theoryHtmlTs = readFileSync('src/data/theoryHtml.ts', 'utf8');
const THEORY_HTML = new Function(theoryHtmlTs.replace(/^\/\/.*$/mg, '').replace(/export const THEORY_HTML[^=]*=/, 'return'))();
// 앱 빌드 CSS (이론 본문의 .theory-md 스타일·디자인 토큰) — vite build 산출물에서 찾는다
const APP_CSS = (() => {
  try { const f = readdirSync(join(DIST, 'assets')).find(n => /^index-.*\.css$/.test(n)); return f ? `/assets/${f}` : null; } catch { return null; }
})();

/** 앱 전용 요소 정리: 죽은 복사 버튼 제거, mermaid(자바스크립트로 그리는 도식)는 학습 화면 안내로 대체 */
function staticTheoryBody(html) {
  return html
    .replace(/<button[^>]*class="copy-btn"[^>]*>[\s\S]*?<\/button>/g, '')
    .replace(/<div class="mermaid"[^>]*>[\s\S]*?<\/div>/g,
      '<p class="diagram-note">이 도식은 <a href="/">SQLD양파 학습 화면</a>에서 그림으로 볼 수 있어요.</p>');
}

// THEORY 메타 — eval로 객체 추출
const theoryTs = readFileSync('src/data/theory.ts', 'utf8');
const theoryCode = theoryTs.match(/export const THEORY[^=]*=\s*({[\s\S]*?});/)[1];
const THEORY = new Function('return ' + theoryCode)();

// ============================================================
// 공통 HTML 유틸
// ============================================================
const esc = (s) => String(s ?? '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

const CIRCLED = ['①', '②', '③', '④'];

function head({ title, desc, path, type = 'article', ads = false, appCss = false }) {
  const url = `${SITE}${path}`;
  const ogImg = `${SITE}/assets/og-cover.png`;
  return `<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(desc)}" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <link rel="canonical" href="${url}" />
  <link rel="icon" href="/assets/favicon-32.png" sizes="32x32" type="image/png" />
  <link rel="icon" href="/assets/favicon-96.png" sizes="96x96" type="image/png" />
  <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />

  <meta property="og:type" content="${type}" />
  <meta property="og:site_name" content="SQLD양파" />
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(desc)}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${ogImg}" />
  <meta property="og:locale" content="ko_KR" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(title)}" />
  <meta name="twitter:description" content="${esc(desc)}" />
  <meta name="twitter:image" content="${ogImg}" />
  <meta name="theme-color" content="#2E7D32" />
  <meta name="google-adsense-account" content="${ADSENSE_CLIENT}" />
${appCss && APP_CSS ? `  <link rel="stylesheet" href="${APP_CSS}" />\n` : ''}
  <style>
    :root{--bg:#F5F7F6;--surface:#FFFFFF;--fg-1:#1F2320;--fg-2:#333;--fg-3:#6B7280;--border:#EEF1EE;--accent:#2E7D32;--accent-bg:#EBF5EC;--correct-bg:#E6F3E7;--correct-fg:#256B29}
    *{box-sizing:border-box}
    html,body{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none}
    input,textarea,[contenteditable="true"]{-webkit-user-select:text!important;-moz-user-select:text!important;-ms-user-select:text!important;user-select:text!important}
    @media print{body *{display:none!important}body::after{content:"SQLD양파의 문제와 해설은 인쇄할 수 없습니다.";display:block;padding:40px;font-size:16px}}
    img,svg{-webkit-user-drag:none;user-drag:none}
    body{margin:0;background:var(--bg);color:var(--fg-2);font-family:-apple-system,"Apple SD Gothic Neo","Malgun Gothic",sans-serif;line-height:1.7;font-size:15.5px}
    .top{background:var(--surface);border-bottom:1px solid var(--border);padding:14px 24px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:10}
    .top a.brand{color:var(--accent);font-weight:800;font-size:18px;text-decoration:none;display:inline-flex;align-items:center;gap:8px}
    .top nav a{color:var(--fg-3);text-decoration:none;font-size:14px;margin-left:14px}
    .top nav a:hover{color:var(--accent)}
    main{max-width:760px;margin:0 auto;padding:32px 24px 80px}
    .crumb{font-size:13px;color:var(--fg-3);margin-bottom:8px}
    .crumb a{color:var(--fg-3);text-decoration:none}
    .crumb a:hover{color:var(--accent)}
    h1{font-size:26px;color:var(--fg-1);letter-spacing:-0.02em;margin:0 0 6px;font-weight:800}
    .lead{font-size:14.5px;color:var(--fg-3);margin:0 0 24px}
    .cta{display:inline-flex;align-items:center;gap:6px;background:var(--accent);color:#fff;padding:11px 20px;border-radius:10px;text-decoration:none;font-weight:700;font-size:14.5px;margin:8px 0 28px}
    .cta:hover{filter:brightness(1.05)}
    .cta-secondary{background:transparent;color:var(--accent);border:1px solid var(--accent)}
    h2{font-size:18px;color:var(--fg-1);margin:32px 0 12px;font-weight:700}
    h3{font-size:15.5px;color:var(--fg-1);margin:20px 0 8px;font-weight:700}
    .q{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:18px 20px;margin:14px 0}
    .q .num{display:inline-block;background:var(--accent-bg);color:var(--accent);font-weight:700;font-size:12px;padding:3px 8px;border-radius:6px;margin-right:8px}
    .q .subj{display:inline-block;color:var(--fg-3);font-size:12px;margin-right:8px}
    .q .stem{font-weight:600;color:var(--fg-1);margin:8px 0 12px}
    .q ol{padding-left:20px;margin:8px 0}
    .q ol li{margin:4px 0;color:var(--fg-2)}
    .q .answer{margin-top:12px;padding:10px 14px;background:var(--correct-bg);color:var(--correct-fg);border-radius:8px;font-size:13.5px}
    .q .expl{margin-top:8px;padding:10px 14px;background:#F8F9FA;color:var(--fg-2);border-radius:8px;font-size:13.5px;border-left:3px solid var(--accent)}
    .q .ref{margin:10px 0;padding:10px 14px;background:#F8F9FA;border-radius:8px;font-size:13.5px;color:var(--fg-2);border-left:3px solid #BFBFBF}
    .q .ref pre{margin:0;font-family:'D2Coding','Consolas',monospace;font-size:12.5px;white-space:pre-wrap;word-break:break-word}
    .q .ref table{border-collapse:collapse;margin:4px 0;font-size:13px}
    .q .ref th,.q .ref td{border:1px solid #DDD;padding:4px 8px}
    .q .ref th{background:#F0F0F0}
    ul.chapters{list-style:none;padding:0;margin:0}
    ul.chapters li{background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:14px 18px;margin:10px 0}
    ul.chapters li a{color:var(--fg-1);text-decoration:none;font-weight:700}
    ul.chapters li .sub{color:var(--fg-3);font-size:13px;margin-top:4px}
    .footer{margin-top:48px;padding-top:20px;border-top:1px solid var(--border);font-size:13px;color:var(--fg-3);text-align:center}
    .footer a{color:var(--fg-3);text-decoration:none;margin:0 8px}
    .footer a:hover{color:var(--accent)}
    p,li{font-size:14.5px}
    code{background:#F0F0F0;padding:1px 5px;border-radius:4px;font-family:'D2Coding','Consolas',monospace;font-size:0.92em}
    .static-theory .reveal{opacity:1!important;transform:none!important}
    main > table{width:100%;border-collapse:separate;border-spacing:0;margin:12px 0 20px;font-size:14px;border:1px solid var(--border);border-radius:10px;overflow:hidden}
    main > table th{background:#EBF5EC;color:#1B5E20;text-align:left;padding:10px 12px;font-weight:800;font-size:13px;border-bottom:1px solid var(--border)}
    main > table td{padding:9px 12px;border-bottom:1px solid var(--border);vertical-align:top;line-height:1.6}
    main > table tr:last-child td{border-bottom:0}
    main > table td:first-child{font-weight:700;color:var(--fg-1)}
    @media (max-width:560px){main > table{display:block;overflow-x:auto}}
    .diagram-note{background:#F8F9FA;border:1px dashed #CFD8CF;border-radius:10px;padding:12px 14px;font-size:13.5px;color:var(--fg-3)}
    .chapter-nav{display:flex;justify-content:space-between;gap:12px;margin-top:8px;font-size:14px}
    .chapter-nav a{color:var(--accent);text-decoration:none;font-weight:600}
  </style>

${ads ? `  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}" crossorigin="anonymous"></script>\n` : ''}  <script async src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"></script>
  <script>
    window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
    gtag('js',new Date());gtag('config','${GA_ID}');
    // 콘텐츠 보호 — 우클릭/복사/잘라내기/드래그 차단
    (function(){var ok=function(t){return t&&t.closest&&t.closest('input,textarea,[contenteditable="true"]');};
    var b=function(e){if(ok(e.target))return;e.preventDefault();};
    ['contextmenu','copy','cut','selectstart','dragstart'].forEach(function(n){document.addEventListener(n,b);});
    document.addEventListener('keydown',function(e){var k=(e.key||'').toLowerCase();if((e.ctrlKey||e.metaKey)&&(k==='p'||k==='s'))e.preventDefault();});})();
  </script>
</head>
<body>
  <header class="top">
    <a class="brand" href="/">SQLD양파</a>
    <nav>
      <a href="/exam/">기출문제</a>
      <a href="/theory/">이론</a>
      <a href="/guide/sqld-overview/">SQLD 안내</a>
    </nav>
  </header>
  <main>`;
}

const tail = `  </main>
  <footer class="footer">
    <p>SQLD양파 — SQLD 3주 합격 루틴 · <a href="/">홈으로</a> · <a href="/about/">소개·문의</a> · <a href="/terms.html">이용약관</a> · <a href="/privacy.html">개인정보처리방침</a></p>
  </footer>
</body>
</html>`;

function writePage(path, html) {
  const full = join(DIST, path);
  mkdirSync(full, { recursive: true });
  writeFileSync(join(full, 'index.html'), html, 'utf8');
}

// ============================================================
// 회차별 페이지
// ============================================================
function renderRef(ref) {
  if (!ref) return '';
  if (ref.type === 'text') return `<div class="ref">${esc(ref.content || '')}</div>`;
  if (ref.type === 'sql') return `<div class="ref"><pre>${esc(ref.code || '')}</pre></div>`;
  if (ref.type === 'ascii' || ref.type === 'pre') return `<div class="ref"><pre>${esc(ref.text || ref.code || '')}</pre></div>`;
  if (ref.type === 'table' && ref.headers) {
    const ths = ref.headers.map(h => `<th>${esc(h)}</th>`).join('');
    const trs = (ref.rows || []).map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join('')}</tr>`).join('');
    return `<div class="ref"><table><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table></div>`;
  }
  if (ref.type === 'html') return `<div class="ref">${ref.content || ''}</div>`;
  return '';
}

// 회차 소개 페이지 — 문제 본문·보기·해설은 싣지 않는다 (4/26 콘텐츠 보호 결정).
// 시행일·문항 구성·주제 분포(scripts/round-topics.json)와 CBT 풀이 링크만.
const ROUND_TOPICS = JSON.parse(readFileSync('scripts/round-topics.json', 'utf8')).rounds;
const CHAPTER_TITLE = Object.fromEntries(THEORY.subjects.flatMap(s => s.chapters.map(c => [c.id, c.title])));
const TOPIC_GROUPS = [
  { label: '1과목 · 데이터 모델링의 이해', test: id => /^c11/.test(id) },
  { label: '1과목 · 데이터 모델과 SQL', test: id => /^c12/.test(id) },
  { label: '2과목 · SQL 기본', test: id => /^c21/.test(id) },
  { label: '2과목 · SQL 활용', test: id => /^c22/.test(id) },
  { label: '2과목 · 관리 구문', test: id => /^c23/.test(id) },
  { label: 'SQL 최적화 (2024년 개편 전 범위)', test: id => id === 'opt' },
];
function roundExactDate(round, fallbackKo) {
  const e = EXAM_SCHEDULE.find(x => x.round === round);
  if (!e) return fallbackKo;
  const wd = '일월화수목금토'[new Date(Date.UTC(e.y, e.m - 1, e.d)).getUTCDay()];
  return `${e.y}년 ${e.m}월 ${e.d}일 (${wd})`;
}
// 문항 유형 — 문제 문장·자료로 판별 (회차 소개 페이지 출제 경향용)
const QTYPES = ['SQL 결과 계산', '개념·설명', '오류 찾기', 'SQL 고르기', '빈칸 채우기'];
function qtypeOf(q) {
  const t = q.title || '';
  const hasCode = (q.references || []).some(x => (x.code || '').trim()) || (q.options || []).some(o => /SELECT|FROM|WHERE|INSERT|UPDATE|CREATE|ALTER/.test(o));
  if (/오류|문법이 틀린|실행되지 않는/.test(t)) return '오류 찾기';
  if (/빈칸|들어갈|\(\s*[ㄱㄴ?]\s*\)/.test(t)) return '빈칸 채우기';
  if (/결과|행 ?수|건수|개수|값으로|값은|합계|출력|반환|몇/.test(t) && hasCode) return 'SQL 결과 계산';
  if (/SQL ?(로|은|문|을)|조건(으로|식)|절로|구문|쿼리/.test(t) && hasCode) return 'SQL 고르기';
  return hasCode ? 'SQL 결과 계산' : '개념·설명';
}
const isNegative = q => /옳지 않은|틀린|부적절|적절하지 않은|잘못된|아닌 것|거리가 먼/.test(q.title || '');
function roundStats(r) {
  const items = r.authored || [], tags = ROUND_TOPICS[String(r.round)] || {};
  const types = Object.fromEntries(QTYPES.map(k => [k, 0])); const chapters = {};
  for (const q of items) { types[qtypeOf(q)]++; const c = tags[String(q.number)]; if (c) chapters[c] = (chapters[c] || 0) + 1; }
  return { n: items.length, types, chapters, neg: items.filter(isNegative).length };
}
const ROUND_STATS = Object.fromEntries(rounds.map(r => [r.round, roundStats(r)]));
function avgStats(list) {
  const types = Object.fromEntries(QTYPES.map(k => [k, 0])), chapters = {}; let neg = 0;
  for (const s of list) { QTYPES.forEach(k => types[k] += s.types[k]); for (const [c, v] of Object.entries(s.chapters)) chapters[c] = (chapters[c] || 0) + v; neg += s.neg; }
  const k = list.length || 1;
  return { types: Object.fromEntries(QTYPES.map(x => [x, types[x] / k])), chapters: Object.fromEntries(Object.entries(chapters).map(([c, v]) => [c, v / k])), neg: neg / k };
}
const AVG_REFORMED = avgStats(rounds.filter(r => r.round >= 52).map(r => ROUND_STATS[r.round]));
const AVG_OLD = avgStats(rounds.filter(r => r.round < 52).map(r => ROUND_STATS[r.round]));
const pct = (v, n) => `${Math.round(v / n * 100)}%`;
const fmt1 = v => (Math.round(v * 10) / 10).toString();

function trendHtml(r, idx) {
  const s = ROUND_STATS[r.round], avg = r.round >= 52 ? AVG_REFORMED : AVG_OLD;
  const avgLabel = r.round >= 52 ? '현행 기준 평균 (52회~)' : '개편 전 평균 (45~51회)';
  const typeRows = QTYPES.filter(k => s.types[k] || avg.types[k] >= 0.5).map(k => `<tr><td>${k}</td><td>${s.types[k]}문항 (${pct(s.types[k], s.n)})</td><td>${fmt1(avg.types[k])}</td></tr>`).join('');
  const notes = [];
  const sqlShare = s.types['SQL 결과 계산'] / s.n, avgSql = avg.types['SQL 결과 계산'] / 50;
  if (Math.abs(sqlShare - avgSql) >= 0.06) notes.push(`SQL 결과를 직접 계산하는 문제가 ${pct(s.types['SQL 결과 계산'], s.n)}로 평균(${Math.round(avgSql * 100)}%)보다 ${sqlShare > avgSql ? '많다' : '적다'}.`);
  if (s.types['오류 찾기'] >= 3) notes.push(`"오류가 나는 SQL 고르기" 가 ${s.types['오류 찾기']}문항 — 문법 규칙(별칭 위치, GROUP BY 컬럼, 집합 연산 컬럼 수 등)을 묻는 유형이 평소(${fmt1(avg.types['오류 찾기'])}문항)보다 많았다.`);
  if (Math.abs(s.neg - avg.neg) >= 3) notes.push(`"옳지 않은 것" 을 고르는 부정형 문제가 ${s.neg}문항으로 평균(${fmt1(avg.neg)})보다 ${s.neg > avg.neg ? '많아 보기 하나하나를 판정해야 하는 시간이 길었다' : '적다'}.`);
  const prev = rounds[idx - 1];
  if (prev) {
    const ps = ROUND_STATS[prev.round];
    const diffs = Object.keys({ ...s.chapters, ...ps.chapters }).filter(c => CHAPTER_TITLE[c])
      .map(c => [c, (s.chapters[c] || 0) - (ps.chapters[c] || 0)]).filter(([, d]) => Math.abs(d) >= 2).sort((a, b) => Math.abs(b[1]) - Math.abs(a[1])).slice(0, 3);
    if (diffs.length) notes.push(`제${prev.round}회와 비교하면 ${diffs.map(([c, d]) => `${CHAPTER_TITLE[c]} ${d > 0 ? '+' : ''}${d}`).join(', ')}문항.`);
  }
  const rare = Object.entries(s.chapters).filter(([c, v]) => CHAPTER_TITLE[c] && v >= 1 && (avg.chapters[c] || 0) < 0.6).map(([c]) => `<a href="/theory/${c}/">${esc(CHAPTER_TITLE[c])}</a>`);
  if (rare.length) notes.push(`평소 잘 안 나오던 주제가 출제됐다: ${rare.join(', ')}.`);
  return `
    <h2>출제 경향 분석</h2>
    <table>
      <thead><tr><th>문항 유형</th><th>제${r.round}회</th><th>${avgLabel}</th></tr></thead>
      <tbody>${typeRows}<tr><td>"옳지 않은 것" 고르기 (부정형)</td><td>${s.neg}문항 (${pct(s.neg, s.n)})</td><td>${fmt1(avg.neg)}</td></tr></tbody>
    </table>
    ${notes.length ? `<ul>${notes.map(x => `<li>${x}</li>`).join('')}</ul>` : `<p>문항 유형 비율이 ${avgLabel}과 거의 같다.</p>`}`;
}

function buildRoundPage(r, idx) {
  const { round, date } = r;
  const items = r.authored || [];
  const tags = ROUND_TOPICS[String(round)] || {};
  const when = roundExactDate(round, date.ko);
  const path = `/exam/round-${round}/`;
  const reformed = round >= 52;
  const s1 = items.filter(q => q.subject === '1과목').length, s2 = items.length - s1;
  const counts = {};
  for (const q of items) { const c = tags[String(q.number)]; if (c) counts[c] = (counts[c] || 0) + 1; }
  const groupRows = TOPIC_GROUPS.map(g => [g.label, Object.entries(counts).filter(([c]) => g.test(c)).reduce((n, [, v]) => n + v, 0)]).filter(([, n]) => n > 0);
  const top = Object.entries(counts).filter(([c]) => c !== 'opt' && CHAPTER_TITLE[c]).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, 6);
  const prev = rounds[idx - 1], next = rounds[idx + 1];
  const title = `SQLD ${round}회 기출 복원문제 (${shortDate(date.ko)}) — 출제 주제·CBT 풀이`;
  const desc = `SQLD 제${round}회(${when} 시행) 기출 복원 ${items.length}문항. 1과목 ${s1} · 2과목 ${s2}문항, 단원별 출제 수와 많이 나온 주제를 정리했고 정답·해설과 함께 90분 CBT 로 풀 수 있다.`;
  const ld = {
    '@context': 'https://schema.org', '@type': 'Quiz',
    name: `SQLD 제${round}회 기출 복원문제`, about: 'SQLD (SQL Developer) 자격검정',
    inLanguage: 'ko-KR', url: SITE + path, numberOfQuestions: items.length,
  };
  return head({ title: `${title} — SQLD양파`, desc, path }) + `
    <script type="application/ld+json">${JSON.stringify(ld)}</script>
    <div class="crumb"><a href="/">홈</a> · <a href="/exam/">기출문제</a> · 제${round}회</div>
    <h1>SQLD 제${round}회 기출 복원문제</h1>
    <p class="lead">${when} 시행 · ${items.length}문항 (1과목 ${s1} · 2과목 ${s2}) · ${reformed ? '2024년 개편 후 현행 출제기준' : '2024년 개편 전 시험 — SQL 최적화 문제가 일부 섞여 있다'}</p>
    <a class="cta" href="/?cbt=round-${round}">제${round}회 50문항 CBT 로 풀기 (90분 · 정답·해설) →</a>
    <h2>단원별 문항 수</h2>
    <table>
      <thead><tr><th>단원</th><th>문항</th></tr></thead>
      <tbody>${groupRows.map(([l, n]) => `<tr><td>${esc(l)}</td><td>${n}</td></tr>`).join('')}</tbody>
    </table>
    <h2>이 회차에 많이 나온 주제</h2>
    <table>
      <thead><tr><th>주제 (이론 챕터)</th><th>문항</th></tr></thead>
      <tbody>${top.map(([c, n]) => `<tr><td><a href="/theory/${c}/">${esc(CHAPTER_TITLE[c])}</a></td><td>${n}</td></tr>`).join('')}</tbody>
    </table>
    ${trendHtml(r, idx)}
    <nav class="chapter-nav">${prev ? `<a href="/exam/round-${prev.round}/">← 제${prev.round}회</a>` : '<span></span>'}<a href="/exam/">회차 목록</a>${next ? `<a href="/exam/round-${next.round}/">제${next.round}회 →</a>` : '<span></span>'}</nav>
` + tail;
}

// ============================================================
// 회차 목록 페이지
// ============================================================
function buildExamIndexPage() {
  const path = '/exam/';
  const title = `SQLD 기출 복원문제 — 제${firstRound.round}회~${lastRound.round}회 ${totalQuestions}문항 무료 — SQLD양파`;
  const desc = `SQLD 자격증 기출 복원문제를 회차별로 정리. 제${firstRound.round}회(${shortDate(firstRound.date.ko)})부터 제${lastRound.round}회(${shortDate(lastRound.date.ko)})까지 ${rounds.length}개 회차 ${totalQuestions}문항을 회원가입 없이 무료로 풀이.`;

  const items = rounds.slice().sort((a, b) => b.round - a.round).map(r => {
    return `<li>
  <a id="round-${r.round}" href="/exam/round-${r.round}/">SQLD ${r.round}회 기출 복원문제 (${shortDate(r.date.ko)}) — 출제 주제 보기</a> · <a href="/?cbt=round-${r.round}">바로 풀기 →</a>
  <div class="sub">${r.date.ko} 시행 · 50문항 · 정답·해설 포함 · CBT 모드 (90분)</div>
</li>`;
  }).join('\n');

  return head({ title, desc, path }) + `
    <div class="crumb"><a href="/">홈</a> · 기출문제</div>
    <h1>SQLD 회차별 기출 복원문제</h1>
    <p class="lead">제${firstRound.round}회(${firstRound.date.ko})부터 제${lastRound.round}회(${lastRound.date.ko})까지 ${rounds.length}개 회차, 총 ${totalQuestions}문항.</p>
    <a class="cta" href="/">랜덤 문제 풀이 시작하기 →</a>
    <h2>어떤 회차부터 풀까</h2>
    <table>
      <thead><tr><th>구분</th><th>회차</th><th>특징</th></tr></thead>
      <tbody>
        <tr><td>현행 출제기준</td><td>제52회(2024년 3월) ~ 최신</td><td>2024년 개편 뒤 시험. 객관식 50문항(1과목 10 · 2과목 40). 시험이 가까우면 여기부터 푼다.</td></tr>
        <tr><td>개편 전</td><td>제45회 ~ 제51회 (2022~2023년)</td><td>지금은 출제 범위에서 빠진 SQL 최적화(조인 수행 원리·인덱스) 문제가 일부 섞여 있다. 개념을 넓게 복습할 때 쓴다.</td></tr>
      </tbody>
    </table>

    <h2>이렇게 풀면 좋다</h2>
    <ol>
      <li><strong>한 회차를 90분 타이머로 끊지 않고 푼다.</strong> 실제 시험처럼 시간 배분(1과목 20분 · 2과목 70분)을 연습한다.</li>
      <li><strong>제출 뒤 과목별 점수부터 본다.</strong> 1과목 10문항 중 4문항 미만이면 총점과 관계없이 과락이다.</li>
      <li><strong>틀린 문항은 해설을 읽고 해당 <a href="/theory/">이론 챕터</a>로 돌아간다.</strong> 같은 유형이 다음 회차에 숫자만 바뀌어 다시 나온다.</li>
      <li><strong>SQL 결과를 묻는 문제는 종이에 표를 그려 행을 직접 센다.</strong> 조인·GROUP BY·윈도우 함수는 눈으로만 풀면 실수가 잦다.</li>
    </ol>

    <h2>회차별 출제 경향 (현행 기준 52회~)</h2>
    <p>각 회차 50문항을 유형별로 나눠 센 표다. "SQL 결과 계산" 은 표와 SQL 을 주고 결과·행 수를 묻는 문제, "개념·설명" 은 용어·설명의 옳고 그름을 묻는 문제다.</p>
    <table>
      <thead><tr><th>회차</th><th>SQL 결과 계산</th><th>개념·설명</th><th>오류 찾기</th><th>부정형</th><th>가장 많이 나온 주제</th></tr></thead>
      <tbody>${rounds.filter(r => r.round >= 52).sort((a, b) => b.round - a.round).map(r => { const s = ROUND_STATS[r.round]; const top = Object.entries(s.chapters).filter(([c]) => CHAPTER_TITLE[c]).sort((a, b) => b[1] - a[1])[0]; return `<tr><td><a href="/exam/round-${r.round}/">${r.round}회</a></td><td>${pct(s.types['SQL 결과 계산'], s.n)}</td><td>${pct(s.types['개념·설명'], s.n)}</td><td>${s.types['오류 찾기']}</td><td>${s.neg}</td><td>${top ? `${esc(CHAPTER_TITLE[top[0]])} ${top[1]}` : ''}</td></tr>`; }).join('')}</tbody>
    </table>
    <p>현행 기준 평균은 SQL 결과 계산 ${pct(AVG_REFORMED.types['SQL 결과 계산'], 50)}, 개념·설명 ${pct(AVG_REFORMED.types['개념·설명'], 50)}, 부정형 ${fmt1(AVG_REFORMED.neg)}문항이다. 2과목 40문항 중 절반 넘게가 SQL 을 직접 읽고 계산하는 문제라, 이론을 읽는 것만으로는 부족하고 기출을 손으로 풀어 봐야 한다.</p>

    <h2>회차별 문제집 (${rounds.length}개)</h2>
    <p>회차마다 소개 페이지에 단원별 문항 수와 많이 나온 주제(문항 내용을 이론 챕터에 대응시켜 센 것)를 정리했다. 문제 본문은 학습 화면에서 푼다.</p>
    <ul class="chapters">${items}</ul>
` + tail;
}

// ============================================================
// 이론 챕터 페이지
// ============================================================
function buildTheoryChapterPage(subject, ch) {
  const path = `/theory/${ch.id}/`;
  const title = `${ch.title} — ${subject.code} ${subject.title} · SQLD 이론 — SQLD양파`;
  const body = THEORY_HTML[ch.id];
  const plain = body ? body.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : '';
  const desc = plain ? `${ch.title} — ${plain.slice(0, 110)}…` : `SQLD ${subject.code} '${ch.title}' 이론 정리.`;
  const all = THEORY.subjects.flatMap(s => s.chapters.map(c => ({ ...c, code: s.code })));
  const i = all.findIndex(c => c.id === ch.id);
  const prev = all[i - 1], next = all[i + 1];
  const nav = `<nav class="chapter-nav">${prev ? `<a href="/theory/${prev.id}/">← ${esc(prev.title)}</a>` : '<span></span>'}${next ? `<a href="/theory/${next.id}/">${esc(next.title)} →</a>` : ''}</nav>`;

  return head({ title, desc, path, ads: Boolean(body), appCss: Boolean(body) }) + `
    <div class="crumb"><a href="/">홈</a> · <a href="/theory/">이론</a> · ${esc(subject.code)} · ${esc(ch.title)}</div>
    <h1>${esc(ch.title)}</h1>
    <p class="lead">${esc(subject.code)} ${esc(subject.title)}</p>
    ${body ? `<article class="theory-md static-theory">${staticTheoryBody(body)}</article>` : `<ul>${(ch.sections || []).map(s => `<li>${esc(s)}</li>`).join('')}</ul>`}
    <a class="cta" href="/">미니테스트로 바로 확인하기 →</a>
    ${nav}
` + tail;
}

function buildTheoryIndexPage() {
  const path = '/theory/';
  const title = `SQLD 이론 정리 · 데이터모델링·SQL활용 핵심 챕터 — SQLD양파`;
  const [s1, s2] = THEORY.subjects;
  const desc = `SQLD 자격증 1과목 ${s1.title} ${s1.chapters.length}챕터 + 2과목 ${s2.title} ${s2.chapters.length}챕터를 한눈에. 회원가입 없이 무료.`;

  const subjects = THEORY.subjects.map(s => {
    const items = s.chapters.map(c => `<li>
  <a href="/theory/${c.id}/">${esc(c.title)}</a>
  <div class="sub">${(c.sections || []).join(' · ')}</div>
</li>`).join('\n');
    return `<h2>${esc(s.code)} ${esc(s.title)}</h2><ul class="chapters">${items}</ul>`;
  }).join('\n');

  return head({ title, desc, path }) + `
    <div class="crumb"><a href="/">홈</a> · 이론</div>
    <h1>SQLD 이론 — 전 범위 챕터 정리</h1>
    <p class="lead">${s1.title} ${s1.chapters.length}챕터 + ${s2.title} ${s2.chapters.length}챕터. SQLD 출제 범위를 한 페이지로 한눈에.</p>
    <a class="cta" href="/">본문 + 미니테스트 모드로 학습 시작 →</a>
    <h2>이론은 이렇게 본다</h2>
    <table>
      <thead><tr><th>영역</th><th>문항 비중</th><th>공부 포인트</th></tr></thead>
      <tbody>
        <tr><td>1과목 데이터 모델링의 이해</td><td>10문항 (20점)</td><td>용어와 분류가 그대로 나온다 — 엔터티 분류, 식별자 특성, 정규화 단계, ERD 기호 읽기</td></tr>
        <tr><td>2과목 SQL 기본</td><td rowspan="3">40문항 (80점)</td><td>WHERE·GROUP BY·조인 결과의 행 수를 손으로 세는 연습</td></tr>
        <tr><td>2과목 SQL 활용</td><td>윈도우 함수·계층형 질의·그룹 함수(ROLLUP·CUBE)는 매 회 나온다</td></tr>
        <tr><td>2과목 관리 구문</td><td>TRUNCATE·DDL 자동 커밋, SAVEPOINT 계산, 권한 회수처럼 외울 규칙이 짧다</td></tr>
      </tbody>
    </table>
    <p>챕터마다 <strong>한 줄 요약 → 꼭 외울 것(표·그림) → 시험은 이렇게 낸다(함정) → 30초 정리</strong> 순서다. 처음에는 한 줄 요약과 그림만 훑고, 기출을 풀다 틀린 챕터로 돌아와 함정까지 읽으면 된다.</p>
    ${subjects}
` + tail;
}

// ============================================================
// 정적 가이드 글 (5개)
// ============================================================

// 출제 범위 — 데이터자격검정 공식 출제기준(dataq.or.kr, 2024 개편)의 과목·주요항목·세부항목을
// 이론 챕터(THEORY)와 1:1 로 맞춰 만든다. 챕터 제목이 공식 세부항목명과 같다.
const SYLLABUS_POINTS = {
  c111: '모델링의 특징(추상화·단순화·명확화), 개념·논리·물리 모델링, 3층 스키마와 데이터 독립성, ERD',
  c112: '엔터티의 특징(업무에 필요·유일한 식별·인스턴스 2개 이상·속성·관계), 유형·무형과 기본·중심·행위 엔터티',
  c113: '기본·설계·파생 속성, 도메인, 한 인스턴스의 속성은 하나의 값',
  c114: '관계 차수(1:1·1:N·M:N)와 선택성(필수·선택), IE·바커 표기',
  c115: '주식별자의 특징(유일성·최소성·불변성·존재성), 식별·비식별 관계',
  c121: '삽입·갱신·삭제 이상, 함수 종속, 1·2·3정규형과 BCNF',
  c122: '관계를 조인으로 읽기, 계층형·상호배타 관계',
  c123: '하나의 트랜잭션으로 묶이는 엔터티, 필수 관계와 트랜잭션',
  c124: 'NULL 의 연산·비교·집계, NVL·NULLIF·COALESCE',
  c125: '본질식별자와 인조식별자의 장단점, 인조식별자를 쓸 때 생기는 문제',
  c211: '관계형 데이터베이스, SQL 의 종류(DDL·DML·DCL·TCL)',
  c212: 'SELECT·DISTINCT·별칭, 산술·연결 연산자',
  c213: '문자·숫자·날짜·변환 함수, CASE·DECODE',
  c214: '연산자 우선순위, BETWEEN·IN·LIKE·IS NULL, NOT IN 과 NULL',
  c215: '집계 함수와 NULL, WHERE 와 HAVING 의 차이',
  c216: '정렬 기준(컬럼·별칭·순번), NULL 의 정렬 위치',
  c217: 'EQUI·Non-EQUI·OUTER·CROSS·SELF 조인, 결과 행 수 계산',
  c218: 'INNER·OUTER JOIN 문법, ON·USING·NATURAL',
  c221: '단일행·다중행·다중컬럼, 스칼라 서브쿼리·인라인 뷰, ANY·ALL·EXISTS',
  c222: 'UNION·UNION ALL·INTERSECT·MINUS, 사용 규칙',
  c223: 'ROLLUP·CUBE·GROUPING SETS, GROUPING 함수',
  c224: 'RANK·DENSE_RANK·ROW_NUMBER, 집계 윈도우, LAG·LEAD, ROWS·RANGE',
  c225: 'ROWNUM, FETCH FIRST·OFFSET, TOP·WITH TIES',
  c226: 'START WITH·CONNECT BY·PRIOR·LEVEL, 셀프 조인',
  c227: 'PIVOT·UNPIVOT 문법, CASE 로 바꿔 쓰기',
  c228: '메타문자, REGEXP_LIKE·SUBSTR·REPLACE·INSTR·COUNT',
  c231: 'INSERT·UPDATE·DELETE·MERGE',
  c232: 'COMMIT·ROLLBACK·SAVEPOINT, 트랜잭션의 특성(ACID)',
  c233: 'CREATE·ALTER·DROP·TRUNCATE, 제약조건',
  c234: 'GRANT·REVOKE, 시스템·객체 권한, ROLE',
};
const SYLLABUS_SECTIONS = [
  { title: '1과목 — 데이터 모델링의 이해 (10문항 · 20점)', parts: [['데이터 모델링의 이해', 'c11'], ['데이터 모델과 SQL', 'c12']] },
  { title: '2과목 — SQL 기본 및 활용 (40문항 · 80점)', parts: [['SQL 기본', 'c21'], ['SQL 활용', 'c22'], ['관리 구문', 'c23']] },
];
function syllabusBody() {
  const chapters = THEORY.subjects.flatMap(s => s.chapters);
  const out = ['<p>데이터자격검정(dataq.or.kr)이 공개한 출제기준의 과목·주요항목·세부항목을 그대로 따랐습니다. 항목을 누르면 SQLD양파의 해당 이론 챕터로 이동합니다.</p>'];
  for (const sec of SYLLABUS_SECTIONS) {
    out.push(`<h2>${sec.title}</h2>`);
    for (const [name, prefix] of sec.parts) {
      out.push(`<h3>${name}</h3>`, '<ul>');
      for (const c of chapters.filter(c => c.id.startsWith(prefix))) {
        out.push(`  <li><a href="/theory/${c.id}/"><strong>${esc(c.title)}</strong></a> — ${esc(SYLLABUS_POINTS[c.id] || '')}</li>`);
      }
      out.push('</ul>');
    }
  }
  out.push('<p>2024년 개편 이후 반정규화·성능 모델링, 인덱스·실행 계획 같은 SQL 최적화 내용은 SQLD 출제기준에서 빠졌습니다 (SQLP 범위).</p>');
  return out.join('\n      ');
}

function buildGuide({ slug, title, desc, body, ld }) {
  const path = `/guide/${slug}/`;
  return head({ title: `${title} — SQLD양파`, desc, path }) + (ld ? `\n    <script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>` : '') + `
    <div class="crumb"><a href="/">홈</a> · 가이드 · ${esc(title)}</div>
    <h1>${esc(title)}</h1>
    <p class="lead">${esc(desc)}</p>
    ${body}
    <a class="cta" href="/">SQLD양파에서 학습 시작 →</a>
` + tail;
}

const guides = [
  {
    slug: 'sqld-overview',
    title: `SQLD 시험 일정·합격 기준·과락·응시료 (${NEXT_EXAM ? NEXT_EXAM.y : new Date().getFullYear()}) — 자격증 안내`,
    desc: `SQLD(SQL Developer) 시험 정보 한 장 정리.${NEXT_EXAM ? ` 다음 시험은 ${NEXT_EXAM_KO}.` : ''} 90분 50문항, 60점 이상·과목별 40% 이상 합격, 응시료 5만 원, 과목별 과락 기준과 출제 범위.`,
    ld: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        ['SQLD 합격 기준은 몇 점인가요?', '총점 100점 중 60점 이상이면서, 1과목(20점)과 2과목(80점) 각각 40% 이상을 맞혀야 합니다. 1과목 8점 미만이나 2과목 32점 미만이면 총점이 60점을 넘어도 과락으로 불합격입니다.'],
        ['SQLD 과락은 몇 문제부터인가요?', '1과목은 10문항 중 3문항 이하, 2과목은 40문항 중 15문항 이하로 맞히면 과락입니다.'],
        ['SQLD 시험 시간과 문항 수는?', '90분 동안 객관식 4지선다 50문항(1과목 10문항, 2과목 40문항)을 컴퓨터로 풉니다. 2024년부터 단답형은 없습니다.'],
        ['SQLD 응시료는 얼마인가요?', '50,000원입니다.'],
        ['SQLD 시험은 1년에 몇 번 있나요?', '연 4회 정기 시행합니다. 정확한 일정과 접수 기간은 한국데이터산업진흥원 데이터자격검정(dataq.or.kr) 공지에서 확인합니다.'],
      ].map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    },
    body: `
      <h2>SQLD란?</h2>
      <p>SQLD(SQL Developer)는 <strong>한국데이터산업진흥원(KDATA)</strong>이 시행하는 국가공인 데이터 자격검정으로, SQL 개발자에게 필요한 데이터 모델링과 SQL 활용 능력을 검정합니다. 정보처리기사·SQLP·ADsP와 함께 데이터 직무에서 가장 많이 취득하는 자격증 중 하나입니다.</p>

      <h2>시험 한눈에 보기</h2>
      <table>
        <thead><tr><th>항목</th><th>내용</th></tr></thead>
        <tbody>
          ${NEXT_EXAM ? `<tr><td>다음 시험</td><td><strong>${NEXT_EXAM_KO}</strong> — <a href="/guide/sqld-application/">일정·접수 안내</a></td></tr>` : ''}
          <tr><td>시험 시간</td><td>90분</td></tr>
          <tr><td>문항</td><td>50문항, 모두 4지선다 객관식 (2024년부터 단답형 없음)</td></tr>
          <tr><td>배점</td><td>한 문항 2점, 100점 만점</td></tr>
          <tr><td>합격 기준</td><td>총점 60점 이상 + 과목마다 40% 이상</td></tr>
          <tr><td>응시료</td><td>50,000원</td></tr>
          <tr><td>방식</td><td>컴퓨터로 푸는 CBT</td></tr>
          <tr><td>주관</td><td>한국데이터산업진흥원 (dataq.or.kr)</td></tr>
        </tbody>
      </table>

      <h2>과목 구성과 과락 기준</h2>
      <table>
        <thead><tr><th>과목</th><th>문항</th><th>배점</th><th>과락 (40% 미만)</th></tr></thead>
        <tbody>
          <tr><td>1과목 데이터 모델링의 이해</td><td>10</td><td>20점</td><td>8점 미만 = 3문항 이하로 맞히면 과락</td></tr>
          <tr><td>2과목 SQL 기본 및 활용</td><td>40</td><td>80점</td><td>32점 미만 = 15문항 이하로 맞히면 과락</td></tr>
        </tbody>
      </table>
      <p><strong>예:</strong> 2과목을 32문항 맞히고(64점) 1과목을 3문항만 맞히면(6점) 총점은 70점이지만 1과목 과락으로 <strong>불합격</strong>이다. 1과목은 문항이 적어 가볍게 보기 쉽지만, 최소 4문항은 꼭 챙겨야 한다.</p>

      <h3>1과목에서 다루는 것</h3>
      <ul>
        <li>데이터 모델링의 이해 — <a href="/theory/c111/">데이터 모델</a>, <a href="/theory/c112/">엔터티</a>, <a href="/theory/c113/">속성</a>, <a href="/theory/c114/">관계</a>, <a href="/theory/c115/">식별자</a></li>
        <li>데이터 모델과 SQL — <a href="/theory/c121/">정규화</a>, <a href="/theory/c122/">관계와 조인</a>, <a href="/theory/c123/">트랜잭션</a>, <a href="/theory/c124/">NULL 속성</a>, <a href="/theory/c125/">본질·인조식별자</a></li>
      </ul>

      <h3>2과목에서 다루는 것</h3>
      <ul>
        <li>SQL 기본 — <a href="/theory/c212/">SELECT</a>, <a href="/theory/c213/">함수</a>, <a href="/theory/c214/">WHERE</a>, <a href="/theory/c215/">GROUP BY·HAVING</a>, <a href="/theory/c216/">ORDER BY</a>, <a href="/theory/c217/">조인</a>, <a href="/theory/c218/">표준 조인</a></li>
        <li>SQL 활용 — <a href="/theory/c221/">서브쿼리</a>, <a href="/theory/c222/">집합 연산자</a>, <a href="/theory/c223/">그룹 함수</a>, <a href="/theory/c224/">윈도우 함수</a>, <a href="/theory/c225/">Top N</a>, <a href="/theory/c226/">계층형 질의</a>, <a href="/theory/c227/">PIVOT</a>, <a href="/theory/c228/">정규 표현식</a></li>
        <li>관리 구문 — <a href="/theory/c231/">DML</a>, <a href="/theory/c232/">TCL</a>, <a href="/theory/c233/">DDL</a>, <a href="/theory/c234/">DCL</a></li>
      </ul>

      <h2>자주 묻는 질문</h2>
      <h3>합격 기준은 몇 점인가요?</h3>
      <p>총점 60점 이상이면서 과목마다 40% 이상이어야 합니다. 1과목 8점(4문항), 2과목 32점(16문항)이 최소선입니다.</p>
      <h3>과락은 몇 문제부터인가요?</h3>
      <p>1과목은 3문항 이하, 2과목은 15문항 이하로 맞히면 과락입니다. 총점이 60점을 넘어도 불합격입니다.</p>
      <h3>시험 시간과 문항 수는?</h3>
      <p>90분, 객관식 50문항(1과목 10 · 2과목 40)입니다. 2024년부터 단답형이 없어졌습니다.</p>
      <h3>응시료와 시험 횟수는?</h3>
      <p>응시료는 50,000원, 시험은 연 4회입니다. 회차별 날짜는 <a href="/guide/sqld-application/">응시 안내</a>에 정리했습니다.</p>

      <h2>합격 전략</h2>
      <p>점수의 80%가 2과목이라 SQL 결과를 손으로 계산하는 연습에 시간을 가장 많이 쓴다. 1과목은 용어와 분류(엔터티 분류, 식별자 특성, 정규화 단계)가 그대로 반복해서 나오므로 이론을 한 번 정리한 뒤 기출로 확인하면 된다. 옛 회차에 나오던 옵티마이저·인덱스·실행 계획 같은 성능 문제는 2024년 개편 뒤로 출제 범위에서 빠졌다.</p>
    `,
  },
  {
    slug: 'sqld-application',
    title: 'SQLD 시험 응시 안내 — 일정·접수·CBT 환경',
    desc: 'SQLD 정기 시험 일정, 접수 방법, CBT 시험 환경을 정리. 데이터자격검정 사이트에서 직접 접수 가능.',
    body: `
      <h2>시험 일정</h2>
      <p>SQLD는 연 4회 정기 시행 (보통 3월·5월·8월·11월). 정확한 일정은 <a href="https://www.dataq.or.kr" target="_blank" rel="noopener">한국데이터산업진흥원 데이터자격검정</a>에서 확인할 수 있습니다.</p>

      <h3>최근·다음 회차 시험일 (참고)</h3>
      <table>
        <thead><tr><th>회차</th><th>시험일</th></tr></thead>
        <tbody>
          ${scheduleItems}
        </tbody>
      </table>
      <p>접수 기간·고사장은 회차마다 달라지므로 반드시 공식 사이트 공지를 확인하세요.</p>

      <h2>접수 방법</h2>
      <ol>
        <li>데이터자격검정 사이트 회원가입</li>
        <li>원서접수 메뉴에서 시험 회차·고사장 선택</li>
        <li>응시료 50,000원 결제</li>
        <li>접수증 출력 (시험 당일 신분증과 함께 지참)</li>
      </ol>

      <h2>CBT 시험 환경</h2>
      <p>SQLD는 <strong>컴퓨터 기반 시험(CBT)</strong>으로 진행됩니다. 시험장 PC에서 마우스 클릭으로 답안을 선택하며, 90분 내 50문항을 풀어야 합니다.</p>
      <ul>
        <li>화면 좌측: 문제 + 보기</li>
        <li>화면 우측: 문항 네비게이터 (답안 표시·플래그 가능)</li>
        <li>중간 저장 가능, 시험 종료 전 자유롭게 이동</li>
      </ul>

      <h2>시험 전 마지막 일주일 체크리스트</h2>
      <table>
        <thead><tr><th>언제</th><th>할 일</th></tr></thead>
        <tbody>
          <tr><td>D-7 ~ D-5</td><td>최근 회차(52회 이후) 두세 개를 90분 타이머로 풀고, 과목별 점수로 약한 과목 확인</td></tr>
          <tr><td>D-4 ~ D-3</td><td>틀린 문항이 몰린 챕터만 <a href="/theory/">이론</a>으로 다시 보기 — 특히 조인 결과 행 수, 윈도우 함수, 계층형 질의</td></tr>
          <tr><td>D-2</td><td><a href="/guide/sqld-tips/">자주 틀리는 함정 10가지</a> 복습, 1과목 용어(엔터티 분류·식별자 특성·정규화 단계) 정리</td></tr>
          <tr><td>D-1</td><td>새 문제보다 오답 다시 보기. 고사장 위치·입실 시간·지참물은 회차 공지에서 확인</td></tr>
        </tbody>
      </table>

      <h2>SQLD양파의 CBT 모드</h2>
      <p>SQLD양파의 CBT 모드는 실제 시험과 같은 50문항·90분 구성이다. 문항 번호판으로 오가며 풀고, 제출하면 과목별 점수와 문항별 해설을 바로 볼 수 있다. 회차별 기출이나 랜덤 모의고사로 시간 배분을 미리 연습해 두자.</p>
    `,
  },
  {
    slug: 'sqld-3-week-plan',
    title: 'SQLD 3주 단기 합격 학습 계획',
    desc: 'SQLD를 3주 안에 합격하기 위한 일자별 학습 플랜. 1주차는 이론, 2주차는 기출, 3주차는 실전 CBT.',
    body: `
      <h2>전체 로드맵</h2>
      <ul>
        <li><strong>1주차 (Day 1–7):</strong> 1·2과목 이론 빠른 1회독</li>
        <li><strong>2주차 (Day 8–14):</strong> 현행 기준 기출 풀이 (52회~${lastRound.round - 4}회)</li>
        <li><strong>3주차 (Day 15–21):</strong> 최근 4개 회차(${[0,1,2,3].map(i => lastRound.round - 3 + i).join('·')}회) + 약점 보강 + 모의고사</li>
      </ul>

      <h2>1주차 — 이론 1회독</h2>
      <p>매일 1챕터씩 핵심만 빠르게. 모든 챕터를 완벽히 외우려 하지 말고 '이런 개념이 있다'는 감만 잡습니다.</p>
      <table>
        <thead><tr><th>날짜</th><th>볼 챕터</th></tr></thead>
        <tbody>
          <tr><td>Day 1</td><td><a href="/theory/c111/">데이터 모델</a> · <a href="/theory/c112/">엔터티</a></td></tr>
          <tr><td>Day 2</td><td><a href="/theory/c113/">속성</a> · <a href="/theory/c114/">관계</a></td></tr>
          <tr><td>Day 3</td><td><a href="/theory/c115/">식별자</a> · <a href="/theory/c121/">정규화</a></td></tr>
          <tr><td>Day 4</td><td><a href="/theory/c122/">관계와 조인</a> · <a href="/theory/c123/">트랜잭션</a> · <a href="/theory/c124/">NULL</a> · <a href="/theory/c125/">본질·인조식별자</a></td></tr>
          <tr><td>Day 5</td><td><a href="/theory/c211/">관계형 DB</a> · <a href="/theory/c212/">SELECT</a> · <a href="/theory/c213/">함수</a> · <a href="/theory/c214/">WHERE</a></td></tr>
          <tr><td>Day 6</td><td><a href="/theory/c215/">GROUP BY</a> · <a href="/theory/c216/">ORDER BY</a> · <a href="/theory/c217/">조인</a> · <a href="/theory/c218/">표준 조인</a></td></tr>
          <tr><td>Day 7</td><td><a href="/theory/c221/">서브쿼리</a> · <a href="/theory/c222/">집합</a> · <a href="/theory/c223/">그룹 함수</a> · <a href="/theory/c224/">윈도우</a> · <a href="/theory/c225/">Top N</a> · <a href="/theory/c226/">계층형</a> · <a href="/theory/c227/">PIVOT</a> · <a href="/theory/c228/">정규식</a> · <a href="/theory/c231/">DML</a> · <a href="/theory/c232/">TCL</a> · <a href="/theory/c233/">DDL</a> · <a href="/theory/c234/">DCL</a></td></tr>
        </tbody>
      </table>
      <p>Day 7 은 분량이 많다. 2-3 관리 구문(DML·TCL·DDL·DCL)은 외울 것이 적으니 짧게 보고, 윈도우 함수·계층형 질의에 시간을 더 쓴다.</p>

      <h2>2주차 — 기출 풀이 (하루 한 회차)</h2>
      <p>2024년 개편 뒤 시험인 52회부터 하루 한 회차씩 푼다. 틀린 문항은 해설을 읽고 해당 이론 챕터로 돌아가 같은 유형을 다시 확인한다.</p>
      <table>
        <thead><tr><th>날짜</th><th>할 일</th></tr></thead>
        <tbody>
          <tr><td>Day 8</td><td><a href="/?cbt=round-52">제52회</a> 90분 풀이 → 채점 → 틀린 문항 해설과 이론 확인</td></tr>
          <tr><td>Day 9</td><td><a href="/?cbt=round-53">제53회</a> 90분 풀이 → 채점 → 틀린 문항 해설과 이론 확인</td></tr>
          <tr><td>Day 10</td><td><a href="/?cbt=round-54">제54회</a> 90분 풀이 → 채점 → 틀린 문항 해설과 이론 확인</td></tr>
          <tr><td>Day 11</td><td><a href="/?cbt=round-55">제55회</a> 90분 풀이 → 채점 → 틀린 문항 해설과 이론 확인</td></tr>
          <tr><td>Day 12</td><td><a href="/?cbt=round-56">제56회</a> 90분 풀이 → 채점 → 틀린 문항 해설과 이론 확인</td></tr>
          <tr><td>Day 13</td><td><a href="/?cbt=round-57">제57회</a> 90분 풀이 → 채점 → 틀린 문항 해설과 이론 확인</td></tr>
          <tr><td>Day 14</td><td><a href="/?cbt=round-58">제58회</a> 90분 풀이 → 채점 → 틀린 문항 해설과 이론 확인</td></tr>
        </tbody>
      </table>

      <h2>3주차 — 최근 회차와 실전 연습</h2>
      <table>
        <thead><tr><th>날짜</th><th>할 일</th></tr></thead>
        <tbody>
          <tr><td>Day 15–17</td><td>최근 회차를 시험 환경처럼 90분 타이머로 풀고 채점 — ${[3,2,1,0].map(i => `<a href="/exam/round-${lastRound.round - i}/">${lastRound.round - i}회</a>`).join(' · ')}. 최신 회차일수록 이번 시험과 출제 경향이 가깝다</td></tr>
          <tr><td>Day 18–19</td><td>2·3주차 오답 다시 풀기 + 틀린 문제가 몰린 챕터 이론 보강</td></tr>
          <tr><td>Day 20</td><td>랜덤 모의고사 50문항으로 마지막 점검 (1과목 4문항 이상인지 확인)</td></tr>
          <tr><td>Day 21</td><td><a href="/guide/sqld-tips/">자주 틀리는 함정</a>과 각 챕터 '30초 정리'만 훑고 충분히 쉰다</td></tr>
        </tbody>
      </table>
      <p>시간이 남으면 개편 전 회차(45~51회)로 개념을 넓게 복습한다. 다만 조인 수행 원리·인덱스 같은 최적화 문제는 지금 출제 범위가 아니니 넘어가도 된다.</p>
    `,
  },
  {
    slug: 'sqld-tips',
    title: 'SQLD 단기 합격 팁 10가지',
    desc: '실제 합격자들이 공통으로 추천하는 SQLD 단기 합격 학습 팁 모음.',
    body: `
      <h2>학습 전략</h2>
      <ol>
        <li><strong>2과목에 시간을 많이 투입</strong> — 40문항이라 점수 비중이 크다.</li>
        <li><strong>이론 완벽 암기 X, 기출 반복 풀이 O</strong> — 같은 유형이 회차마다 반복 출제.</li>
        <li><strong>오답노트 만들기</strong> — 틀린 문항을 정리하면 약점이 한눈에.</li>
        <li><strong>SQL은 직접 쳐보기</strong> — Oracle Live SQL이나 SQLite로 실습하면 암기보다 빠르게 익힘.</li>
        <li><strong>윈도우 함수·계층형 질의 집중 정리</strong> — 매 회 출제되는 단골 영역.</li>
      </ol>

      <h2>기출에서 자주 틀리는 함정 10가지</h2>
      <table>
        <thead><tr><th>문제에서 묻는 것 (누르면 이론으로)</th><th>정답 포인트</th></tr></thead>
        <tbody>
          <tr><td><a href="/theory/c214/">NOT IN 서브쿼리에 NULL 이 섞이면?</a></td><td>결과가 0건</td></tr>
          <tr><td><a href="/theory/c225/">같은 SELECT 의 ROWNUM &lt;= 3 ORDER BY</a></td><td>정렬 전에 번호가 붙어 엉뚱한 3행</td></tr>
          <tr><td><a href="/theory/c224/">RANK 와 DENSE_RANK 동점 처리</a></td><td>RANK 1·1·3, DENSE_RANK 1·1·2</td></tr>
          <tr><td><a href="/theory/c217/">LEFT JOIN 뒤 WHERE 에 오른쪽 조건</a></td><td>NULL 행이 사라져 INNER JOIN 처럼 됨</td></tr>
          <tr><td><a href="/theory/c223/">ROLLUP(A, B) 결과 행 수</a></td><td>상세 + A 소계 + 총계</td></tr>
          <tr><td><a href="/theory/c233/">TRUNCATE 뒤 ROLLBACK</a></td><td>DDL 이라 되돌릴 수 없음</td></tr>
          <tr><td><a href="/theory/c215/">GROUP BY 기준 컬럼이 NULL</a></td><td>NULL 도 한 그룹으로 나옴</td></tr>
          <tr><td><a href="/theory/c226/">CONNECT BY PRIOR 위치</a></td><td>PRIOR 가 자식 쪽 키면 위 → 아래</td></tr>
          <tr><td><a href="/theory/c232/">COMMIT 뒤 ROLLBACK TO 저장점</a></td><td>저장점이 사라져 오류</td></tr>
          <tr><td><a href="/theory/c211/">UNIQUE 컬럼에 NULL</a></td><td>여러 개 넣을 수 있음</td></tr>
        </tbody>
      </table>

      <h2>시험 당일 팁</h2>
      <ol>
        <li><strong>1과목 빠르게 → 2과목 차분히</strong> — 1과목 10문항을 20분 내로 정리하고 70분을 2과목에 배분.</li>
        <li><strong>SQL 실행 결과 문제는 손으로 추적</strong> — 헷갈릴 땐 종이에 테이블 그려가며.</li>
        <li><strong>NULL 관련 문제는 신중히</strong> — IS NULL / NOT IN / NULL 비교 함정이 자주 나옴.</li>
        <li><strong>JOIN 결과 행 수 계산 문제</strong> — 카티시안 곱부터 시작해서 매칭/미매칭 구분.</li>
        <li><strong>플래그 기능 활용</strong> — 헷갈리는 문항은 플래그 후 마지막에 재검토.</li>
      </ol>
    `,
  },
  {
    slug: 'sqld-syllabus',
    title: 'SQLD 출제 범위 정리 — 1과목·2과목 핵심 키워드',
    desc: 'SQLD 자격증 1과목 데이터 모델링의 이해 + 2과목 SQL 기본 및 활용의 핵심 출제 키워드를 한 페이지로 정리.',
    body: `
      ${syllabusBody()}
    `,
  },
];


// ============================================================
// 소개·문의 페이지
// ============================================================
function buildAboutPage() {
  const path = '/about/';
  const roundCount = rounds.length;
  return head({ title: '사이트 소개·문의 — SQLD양파', desc: 'SQLD양파는 SQLD 자격증을 준비하는 수험생을 위한 무료 학습 사이트입니다. 콘텐츠를 만드는 방식과 오류 제보·문의 방법을 안내합니다.', path, type: 'website' }) + `
    <div class="crumb"><a href="/">홈</a> · 소개·문의</div>
    <h1>SQLD양파 소개</h1>
    <p class="lead">SQLD(SQL 개발자) 자격증을 3주 안에 준비할 수 있도록 이론·기출·모의고사를 한곳에 모은 무료 학습 사이트입니다. 양파 껍질을 한 겹씩 벗기듯 기초부터 시험에 자주 나오는 함정까지 차례로 익히는 것을 목표로 합니다.</p>

    <h2>제공하는 것</h2>
    <ul>
      <li><strong>이론 30챕터</strong> — 1과목 데이터 모델링, 2과목 SQL 기본·활용·관리 구문을 시험에 나오는 핵심 위주로 정리했습니다. 각 챕터는 "꼭 외울 것 → 시험은 이렇게 낸다 → 30초 정리" 순서로 되어 있습니다.</li>
      <li><strong>기출 복원 ${roundCount}회차 CBT</strong> — 실제 시험처럼 90분 타이머와 답안 표기란으로 풀고, 제출하면 과목별 점수와 문항별 해설을 볼 수 있습니다.</li>
      <li><strong>실전 모의고사·무한 퀴즈</strong> — 실제 출제 비율(1과목 10문항, 2과목 40문항)로 구성한 모의고사와, 한 문제씩 바로 채점하는 퀴즈입니다.</li>
      <li><strong>3주 학습 계획</strong> — 하루 1시간 기준으로 무엇을 공부할지 날짜별로 안내합니다.</li>
    </ul>

    <h2>콘텐츠를 만드는 방식</h2>
    <ul>
      <li>기출 문항은 공개된 수험 후기와 복원 자료를 바탕으로 다시 구성한 것이며, 한국데이터산업진흥원의 공식 문제가 아닙니다. 원문을 알 수 없는 부분은 같은 개념을 묻는 형태로 다시 만들고, 그 사실을 해설에 적습니다.</li>
      <li>모든 문항은 보기마다 결과를 직접 계산해 정답이 하나로 나오는지 확인합니다. SQL 결과를 묻는 문항은 실제로 실행해 정답과 대조합니다.</li>
      <li>틀린 내용이 확인되면 바로 고치고, 고친 문항은 해설에 이유를 남깁니다.</li>
    </ul>

    <h2>오류 제보·문의</h2>
    <p>문제나 해설이 이상하면 각 문항 오른쪽 위의 <strong>오류 제보</strong> 버튼으로 알려 주세요. 접수된 제보는 하나씩 확인해 반영합니다. 그 밖의 문의는 아래 메일로 보내 주시면 됩니다.</p>
    <p><strong>문의 메일:</strong> <a href="mailto:sqldyangpa@gmail.com">sqldyangpa@gmail.com</a></p>

    <h2>광고 안내</h2>
    <p>사이트를 무료로 운영하기 위해 일부 학습 콘텐츠 페이지에 광고가 표시될 수 있습니다. 광고는 문제 풀이 화면에는 넣지 않습니다. 개인정보 처리에 관한 내용은 <a href="/privacy.html">개인정보처리방침</a>에서 확인할 수 있습니다.</p>

    <a class="cta" href="/">SQLD양파에서 학습 시작 →</a>
` + tail;
}

// ============================================================
// 사이트맵
// ============================================================
function buildSitemap() {
  const urls = [
    { loc: SITE + '/', priority: 1.0, changefreq: 'weekly' },
    { loc: SITE + '/exam/', priority: 0.9, changefreq: 'monthly' },
    { loc: SITE + '/theory/', priority: 0.9, changefreq: 'monthly' },
    ...rounds.map(r => ({ loc: `${SITE}/exam/round-${r.round}/`, priority: 0.8, changefreq: 'monthly' })),
    ...THEORY.subjects.flatMap(s => s.chapters.map(c => ({ loc: `${SITE}/theory/${c.id}/`, priority: 0.7, changefreq: 'monthly' }))),
    ...guides.map(g => ({ loc: `${SITE}/guide/${g.slug}/`, priority: 0.6, changefreq: 'yearly' })),
    { loc: SITE + '/about/', priority: 0.4, changefreq: 'yearly' },
    { loc: SITE + '/terms.html', priority: 0.3, changefreq: 'yearly' },
    { loc: SITE + '/privacy.html', priority: 0.3, changefreq: 'yearly' },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${NOW}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority.toFixed(1)}</priority>
  </url>`).join('\n')}
</urlset>
`;
  writeFileSync(join(DIST, 'sitemap.xml'), xml, 'utf8');
  return urls.length;
}

// ============================================================
// Main
// ============================================================
console.log('Generating static SEO pages...');

// 회차 인덱스 + 회차 소개 페이지 — 소개 페이지에는 문제 본문을 싣지 않는다(콘텐츠 보호).
writePage('/exam/', buildExamIndexPage());
rounds.forEach((r, i) => writePage(`/exam/round-${r.round}/`, buildRoundPage(r, i)));
console.log(`  exam: 1 index + ${rounds.length} round overview pages (no question text)`);

// 이론 챕터 + 인덱스
let chCnt = 0;
for (const s of THEORY.subjects) {
  for (const ch of s.chapters) {
    writePage(`/theory/${ch.id}/`, buildTheoryChapterPage(s, ch));
    chCnt++;
  }
}
writePage('/theory/', buildTheoryIndexPage());
console.log(`  theory: ${chCnt} chapter pages + 1 index`);

// 가이드
for (const g of guides) {
  writePage(`/guide/${g.slug}/`, buildGuide(g));
}
console.log(`  guide: ${guides.length} pages`);

// 소개·문의
writePage('/about/', buildAboutPage());
console.log('  about: 1 page');

// 사이트맵
const total = buildSitemap();
console.log(`  sitemap.xml: ${total} URLs`);

console.log(`Done. Total new pages: ${rounds.length + 1 + chCnt + 1 + guides.length}`);
