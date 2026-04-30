// 281개 클래식 이미지 audit 비포/애프터 파일럿 페이지 생성기.
// docs/qa/classic-audit-pilot.html 단일 파일에 모든 데이터 임베딩 + 페이지네이션 JS.

import fs from 'node:fs';
import path from 'node:path';

const HERE = path.resolve('.');

// 모든 19개 batch conversion JSON 위치
const conversionFiles = [
  ...[1, 2, 3, 4, 5, 6].map((n) => ({ batch: n, file: path.join(HERE, `scripts/classic-batch-${n}-conversions.json`) })),
  { batch: 7, file: path.resolve(HERE, '../양파단-wt-cs-quiz-audit/scripts/classic-batch-7-conversions.json') },
  ...[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((n) => ({
    batch: n,
    file: path.resolve(HERE, `../양파단-wt-cs-classic-batch-${n}/scripts/classic-batch-${n}-conversions.json`),
  })),
];

// 전체 entries 모으기
const entries = [];
for (const { batch, file } of conversionFiles) {
  if (!fs.existsSync(file)) {
    console.warn(`SKIP missing: ${file}`);
    continue;
  }
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  for (const [hash, e] of Object.entries(data.groups)) {
    entries.push({ batch, hash, ...e });
  }
}

// imageKey 시퀀스순 정렬
function seqKey(jKey) {
  const m = jKey.match(/^j(\d+)(?:-(\d+))?$/);
  if (!m) return [Infinity, Infinity];
  return [parseInt(m[1], 10), m[2] ? parseInt(m[2], 10) : 0];
}
entries.sort((a, b) => {
  const [a1, a2] = seqKey(a.imageKey);
  const [b1, b2] = seqKey(b.imageKey);
  return a1 - b1 || a2 - b2;
});

console.log(`총 ${entries.length}개 entry 수집`);

// imageKey → PNG 파일 매핑 (suffix 없으면 -1.png, 있으면 그대로 .png)
function pngPath(imageKey) {
  const file = /-\d+$/.test(imageKey) ? `${imageKey}.png` : `${imageKey}-1.png`;
  return `../../public/sqld-images/${file}`;
}

// HTML 생성 — 모든 데이터를 JS 변수로 임베딩, 클라이언트 사이드 페이지네이션
const html = `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<title>SQLD양파 — 클래식 이미지 audit 파일럿 (281/281)</title>
<style>
  :root {
    --bg: #0f1419;
    --fg: #e6e6e6;
    --muted: #8b9296;
    --border: #2a3138;
    --card-bg: #161b22;
    --hl: #4a9eff;
    --hl-bg: rgba(74, 158, 255, 0.12);
    --table-header: #1f2630;
    --table-row-alt: rgba(255, 255, 255, 0.02);
    --code-bg: #0d1117;
  }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", sans-serif; margin: 0; background: var(--bg); color: var(--fg); }
  header { padding: 16px 24px; border-bottom: 1px solid var(--border); position: sticky; top: 0; background: var(--bg); z-index: 10; }
  header h1 { margin: 0 0 4px; font-size: 18px; }
  header .meta { color: var(--muted); font-size: 13px; }
  .pager { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; padding: 12px 24px; border-bottom: 1px solid var(--border); background: var(--card-bg); }
  .pager button { background: transparent; color: var(--fg); border: 1px solid var(--border); padding: 6px 10px; border-radius: 4px; cursor: pointer; font-size: 13px; min-width: 32px; }
  .pager button:hover:not(:disabled) { background: var(--hl-bg); border-color: var(--hl); }
  .pager button:disabled { opacity: 0.4; cursor: not-allowed; }
  .pager button.current { background: var(--hl); color: #fff; border-color: var(--hl); }
  .pager .info { margin-left: auto; color: var(--muted); font-size: 13px; }
  .pager .nav { display: flex; gap: 4px; }
  main { padding: 24px; max-width: 1400px; margin: 0 auto; }
  .entry { border: 1px solid var(--border); border-radius: 8px; margin-bottom: 24px; overflow: hidden; background: var(--card-bg); }
  .entry-header { padding: 12px 16px; border-bottom: 1px solid var(--border); display: flex; gap: 12px; align-items: center; flex-wrap: wrap; background: var(--table-header); }
  .entry-header .key { font-weight: 600; color: var(--hl); font-family: monospace; font-size: 14px; }
  .entry-header .batch { background: var(--hl-bg); color: var(--hl); padding: 2px 8px; border-radius: 4px; font-size: 12px; font-family: monospace; }
  .entry-header .hash { color: var(--muted); font-family: monospace; font-size: 12px; }
  .entry-header .name { flex: 1; min-width: 0; color: var(--muted); font-size: 13px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .entry-body { display: grid; grid-template-columns: 1fr 1fr; gap: 0; }
  @media (max-width: 900px) { .entry-body { grid-template-columns: 1fr; } }
  .col { padding: 16px; }
  .col + .col { border-left: 1px solid var(--border); }
  @media (max-width: 900px) { .col + .col { border-left: none; border-top: 1px solid var(--border); } }
  .col h3 { margin: 0 0 12px; font-size: 13px; color: var(--muted); font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; }
  .col img { max-width: 100%; height: auto; border: 1px solid var(--border); border-radius: 4px; image-rendering: pixelated; }
  .ref { margin-bottom: 16px; }
  .ref:last-child { margin-bottom: 0; }
  .ref-caption { font-size: 12px; color: var(--muted); margin-bottom: 6px; font-family: monospace; }
  table.ref-table { border-collapse: collapse; width: 100%; font-size: 13px; }
  table.ref-table th, table.ref-table td { border: 1px solid var(--border); padding: 6px 10px; text-align: left; }
  table.ref-table th { background: var(--table-header); color: var(--fg); font-weight: 600; font-size: 12px; }
  table.ref-table tr:nth-child(even) td { background: var(--table-row-alt); }
  table.ref-table td:empty::after { content: "(빈)"; color: var(--muted); font-style: italic; font-size: 11px; }
  pre.ref-sql { background: var(--code-bg); border: 1px solid var(--border); border-radius: 4px; padding: 10px; font-size: 12px; overflow-x: auto; margin: 0; color: #d4d4d4; }
  .ref-text { font-size: 13px; line-height: 1.5; padding: 8px; background: var(--code-bg); border: 1px solid var(--border); border-radius: 4px; }
  .ref-image-info { font-size: 12px; color: var(--muted); padding: 8px; background: var(--code-bg); border: 1px dashed var(--border); border-radius: 4px; }
  .ref-image-info strong { color: var(--fg); }
  .ref-unknown { font-size: 12px; color: #d97706; }
</style>
</head>
<body>
<header>
  <h1>SQLD양파 — 클래식 이미지 audit 파일럿</h1>
  <div class="meta">281개 singleton PNG → 텍스트 ref 변환 결과 비포/애프터. batch-1~19 누적.</div>
</header>
<div class="pager" id="pager-top"></div>
<main id="content"></main>
<div class="pager" id="pager-bottom"></div>
<script>
const ENTRIES = ${JSON.stringify(entries)};
const PAGE_SIZE = 10;
const TOTAL_PAGES = Math.ceil(ENTRIES.length / PAGE_SIZE);
let currentPage = 1;

function pngPath(imageKey) {
  const file = /-\\d+$/.test(imageKey) ? imageKey + ".png" : imageKey + "-1.png";
  return "../../public/sqld-images/" + file;
}

function renderRef(ref) {
  const cap = ref.caption ? '<div class="ref-caption">' + escapeHtml(ref.caption) + '</div>' : '';
  if (ref.type === 'table') {
    let html = cap + '<table class="ref-table"><thead><tr>';
    for (const h of ref.headers) html += '<th>' + escapeHtml(h) + '</th>';
    html += '</tr></thead><tbody>';
    for (const row of ref.rows) {
      html += '<tr>';
      for (const cell of row) html += '<td>' + escapeHtml(cell) + '</td>';
      html += '</tr>';
    }
    html += '</tbody></table>';
    return '<div class="ref">' + html + '</div>';
  }
  if (ref.type === 'sql') {
    return '<div class="ref">' + cap + '<pre class="ref-sql">' + escapeHtml(ref.code) + '</pre></div>';
  }
  if (ref.type === 'text') {
    return '<div class="ref">' + cap + '<div class="ref-text">' + escapeHtml(ref.text || '') + '</div></div>';
  }
  if (ref.type === 'image') {
    // ref.src 가 "/sqld-images/..." 형태 → docs/qa/ 기준 상대 경로 "../../public/sqld-images/..."
    const imgSrc = ref.src.startsWith('/') ? '../../public' + ref.src : ref.src;
    let html = '<div class="ref">' + cap + '<img src="' + escapeHtml(imgSrc) + '" alt="' + escapeHtml(ref.alt || '') + '">';
    if (ref.alt) html += '<div class="ref-caption" style="margin-top:6px;font-style:italic;">alt: ' + escapeHtml(ref.alt) + '</div>';
    return html + '</div>';
  }
  if (ref.type === 'erd') {
    return '<div class="ref">' + cap + '<pre class="ref-sql">' + escapeHtml(ref.mermaid || '') + '</pre></div>';
  }
  return '<div class="ref"><span class="ref-unknown">unknown ref type: ' + ref.type + '</span></div>';
}

function escapeHtml(s) {
  if (s === null || s === undefined) return '';
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function renderPage(page) {
  currentPage = page;
  const start = (page - 1) * PAGE_SIZE;
  const slice = ENTRIES.slice(start, start + PAGE_SIZE);
  const main = document.getElementById('content');
  let html = '';
  for (const e of slice) {
    const refsHtml = (e.refs || []).map(renderRef).join('');
    html += '<div class="entry">' +
      '<div class="entry-header">' +
        '<span class="key">' + escapeHtml(e.imageKey) + '</span>' +
        '<span class="batch">batch-' + e.batch + '</span>' +
        '<span class="hash">' + escapeHtml(e.hash) + '</span>' +
        '<span class="name">' + escapeHtml(e.name || '') + '</span>' +
      '</div>' +
      '<div class="entry-body">' +
        '<div class="col"><h3>BEFORE (원본 PNG)</h3>' +
          '<img src="' + pngPath(e.imageKey) + '" alt="' + escapeHtml(e.imageKey) + '">' +
        '</div>' +
        '<div class="col"><h3>AFTER (변환 ref)</h3>' + refsHtml + '</div>' +
      '</div>' +
    '</div>';
  }
  main.innerHTML = html;
  renderPager();
  window.scrollTo(0, 0);
  history.replaceState(null, '', '#page=' + page);
}

function renderPager() {
  const total = TOTAL_PAGES;
  const cur = currentPage;
  const start = (cur - 1) * PAGE_SIZE + 1;
  const end = Math.min(cur * PAGE_SIZE, ENTRIES.length);

  let pageBtns = '';
  // 이전/다음 + 페이지 번호. 최대 9개 번호 표시 (앞/뒤 4개 + 현재).
  const range = [];
  if (total <= 11) {
    for (let i = 1; i <= total; i++) range.push(i);
  } else {
    range.push(1);
    if (cur > 4) range.push('...');
    for (let i = Math.max(2, cur - 2); i <= Math.min(total - 1, cur + 2); i++) range.push(i);
    if (cur < total - 3) range.push('...');
    range.push(total);
  }
  for (const p of range) {
    if (p === '...') pageBtns += '<span style="padding: 0 4px; color: var(--muted);">…</span>';
    else pageBtns += '<button data-page="' + p + '"' + (p === cur ? ' class="current"' : '') + '>' + p + '</button>';
  }

  const pagerHtml =
    '<div class="nav">' +
      '<button data-page="1"' + (cur === 1 ? ' disabled' : '') + '>« 처음</button>' +
      '<button data-page="' + (cur - 1) + '"' + (cur === 1 ? ' disabled' : '') + '>‹ 이전</button>' +
    '</div>' +
    pageBtns +
    '<div class="nav">' +
      '<button data-page="' + (cur + 1) + '"' + (cur === total ? ' disabled' : '') + '>다음 ›</button>' +
      '<button data-page="' + total + '"' + (cur === total ? ' disabled' : '') + '>마지막 »</button>' +
    '</div>' +
    '<div class="info">' + start + '–' + end + ' / ' + ENTRIES.length + ' (페이지 ' + cur + '/' + total + ')</div>';

  document.getElementById('pager-top').innerHTML = pagerHtml;
  document.getElementById('pager-bottom').innerHTML = pagerHtml;

  for (const btn of document.querySelectorAll('.pager button[data-page]')) {
    btn.addEventListener('click', () => {
      const p = parseInt(btn.dataset.page, 10);
      if (!isNaN(p) && p >= 1 && p <= total) renderPage(p);
    });
  }
}

// 초기 페이지 (URL hash 지원)
const hashMatch = location.hash.match(/page=(\\d+)/);
const initPage = hashMatch ? Math.max(1, Math.min(TOTAL_PAGES, parseInt(hashMatch[1], 10))) : 1;
renderPage(initPage);
</script>
</body>
</html>
`;

const outPath = path.join(HERE, 'docs/qa/classic-audit-pilot.html');
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, html);
console.log(`Wrote ${outPath}`);
console.log(`총 ${entries.length}개 entry, ${Math.ceil(entries.length / 10)} 페이지`);
