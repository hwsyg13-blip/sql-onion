// CBT 모의고사 (이기적 209문항) 이미지 audit 파일럿 페이지 생성기.
// 52문항 / 101 image refs (main 62 + option 39) 의 비포 → 표/sql/text ref 변환 결과 비포·애프터 시각화.
// docs/qa/cbt-mock-audit-pilot.html 단일 파일.

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const HERE = path.resolve('.');
const SRC = path.join(HERE, 'scripts/authored/cbt-mock.json');

// 단일 batch (cbt-mock-batch-1) 컨버전 파일. 같은 worktree 내부 파일.
const conversionFiles = [
  { batch: 1, file: path.join(HERE, 'scripts/cbt-mock-batch-1-conversions.json') },
];

const conversions = {}; // hash → { batch, refs[], name, scope }
for (const { batch, file } of conversionFiles) {
  if (!fs.existsSync(file)) {
    console.warn(`SKIP missing: ${file}`);
    continue;
  }
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  for (const [hash, e] of Object.entries(data.groups || {})) {
    conversions[hash] = { batch, ...e };
  }
}

function hashOf(src) {
  const fp = path.join('public', src.replace(/^\//, ''));
  if (!fs.existsSync(fp)) return null;
  return crypto.createHash('md5').update(fs.readFileSync(fp)).digest('hex').slice(0, 12);
}

// hash 매칭으로 image ref → 변환 후 refs 로 교체. 미매칭/_todo 인 경우 원본 유지.
function transformRefs(refs) {
  if (!Array.isArray(refs)) return { refs, hasPending: false, hasDone: false };
  const out = [];
  let hasPending = false, hasDone = false;
  for (const r of refs) {
    if (r && r.type === 'image' && r.src) {
      const h = hashOf(r.src);
      const conv = h ? conversions[h] : null;
      if (conv) {
        const allTodo = conv.refs.every((cr) => cr._todo === true);
        if (allTodo) {
          out.push(r);
          hasPending = true;
        } else {
          for (const cr of conv.refs) out.push(cr);
          hasDone = true;
        }
        continue;
      }
    }
    out.push(r);
  }
  return { refs: out, hasPending, hasDone };
}

// cbt-mock.json 로드 → image ref 가진 문항만 entry 화
const data = JSON.parse(fs.readFileSync(SRC, 'utf-8'));
const questions = data.authored || [];

const entries = [];
for (const q of questions) {
  const refs = q.references || [];
  const optRefs = q.optionReferences || [];
  const hasMainImg = refs.some((r) => r.type === 'image');
  const hasOptImg = optRefs.some((arr) => (arr || []).some((r) => r.type === 'image'));
  if (!hasMainImg && !hasOptImg) continue;

  const beforeRefs = refs;
  const beforeOpt = optRefs;
  const afterMain = transformRefs(refs);
  const afterOpt = optRefs.map((arr) => transformRefs(arr || []));

  const anyDone = afterMain.hasDone || afterOpt.some((x) => x.hasDone);
  const anyPending = afterMain.hasPending || afterOpt.some((x) => x.hasPending);
  let status = 'pending';
  if (anyDone && !anyPending) status = 'done';
  else if (anyDone && anyPending) status = 'partial';

  entries.push({
    id: q._id,
    origNo: q._origNo,
    subject: q.subject,
    chapter: q.chapter,
    title: q.title,
    options: q.options || [],
    correctIndex: typeof q.correctIndex === 'number' ? q.correctIndex : null,
    beforeRefs,
    beforeOpt,
    afterRefs: afterMain.refs,
    afterOpt: afterOpt.map((x) => x.refs),
    status,
    batch: 1,
  });
}

// origNo 순 정렬
entries.sort((a, b) => (a.origNo ?? 0) - (b.origNo ?? 0));

console.log(`총 ${entries.length}개 문항 (이미지 보유) 수집`);

const html = `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<title>SQLD양파 — CBT 모의고사 이미지 audit 파일럿 (${entries.length}문항)</title>
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
    --warn: #d97706;
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
  .entry-header .pending { background: rgba(217, 119, 6, 0.15); color: var(--warn); padding: 2px 8px; border-radius: 4px; font-size: 12px; font-family: monospace; }
  .entry-header .subject { color: var(--muted); font-family: monospace; font-size: 12px; }
  .entry-header .title { flex: 1; min-width: 0; color: var(--fg); font-size: 13px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
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
  pre.ref-sql { background: var(--code-bg); border: 1px solid var(--border); border-radius: 4px; padding: 10px; font-size: 12px; overflow-x: auto; margin: 0; color: #d4d4d4; white-space: pre-wrap; word-break: break-word; }
  .ref-text { font-size: 13px; line-height: 1.5; padding: 8px; background: var(--code-bg); border: 1px solid var(--border); border-radius: 4px; }
  .ref-todo { font-size: 12px; color: var(--warn); padding: 12px; background: var(--code-bg); border: 1px dashed var(--warn); border-radius: 4px; text-align: center; }
  .ref-unknown { font-size: 12px; color: var(--warn); }
  .opt-block { margin-top: 12px; padding-top: 10px; border-top: 1px dashed var(--border); }
  .opt-label { font-size: 12px; color: var(--muted); margin-bottom: 6px; font-family: monospace; }
  .opt-label.correct { color: #4ade80; font-weight: 600; }
  .entry-header .partial { background: rgba(217, 119, 6, 0.15); color: var(--warn); padding: 2px 8px; border-radius: 4px; font-size: 12px; font-family: monospace; }
  .entry-header .done { background: rgba(74, 222, 128, 0.15); color: #4ade80; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-family: monospace; }
</style>
</head>
<body>
<header>
  <h1>SQLD양파 — CBT 모의고사 (이기적 209) 이미지 audit 파일럿</h1>
  <div class="meta">${entries.length}문항 / 표 image → 표·sql·text ref 변환 결과 비포·애프터.</div>
</header>
<div class="pager" id="pager-top"></div>
<main id="content"></main>
<div class="pager" id="pager-bottom"></div>
<script>
const ENTRIES = ${JSON.stringify(entries)};
const PAGE_SIZE = 8;
const TOTAL_PAGES = Math.ceil(ENTRIES.length / PAGE_SIZE);
let currentPage = 1;

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
    // 정적 서버 (scripts/serve-audit-pilot.mjs, 5174) 가 /cbt-images/* → public/cbt-images/* 로 매핑.
    // file:// 직접 접근 시에는 ../../public 으로 자동 대체.
    const imgSrc = ref.src;
    let html = '<div class="ref">' + cap + '<img src="' + escapeHtml(imgSrc) + '" alt="' + escapeHtml(ref.alt || '') + '" data-fallback="../../public' + escapeHtml(ref.src) + '">';
    if (ref.alt) html += '<div class="ref-caption" style="margin-top:6px;font-style:italic;">alt: ' + escapeHtml(ref.alt) + '</div>';
    return html + '</div>';
  }
  return '<div class="ref"><span class="ref-unknown">unknown ref type: ' + ref.type + '</span></div>';
}

function escapeHtml(s) {
  if (s === null || s === undefined) return '';
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function renderSide(mainRefs, optRefsArr, optionLabels, correctIndex) {
  let html = (mainRefs || []).map(renderRef).join('');
  if (Array.isArray(optRefsArr) && optRefsArr.length > 0) {
    optRefsArr.forEach((arr, i) => {
      if (!arr || arr.length === 0) return;
      const isCorrect = i === correctIndex;
      const labelText = '보기 ' + (i + 1) + (isCorrect ? ' ✓' : '');
      const labelCls = 'opt-label' + (isCorrect ? ' correct' : '');
      html += '<div class="opt-block"><div class="' + labelCls + '">' + escapeHtml(labelText) + '</div>' +
        arr.map(renderRef).join('') + '</div>';
    });
  }
  return html || '<div class="ref-todo">(refs 없음)</div>';
}

function renderPage(page) {
  currentPage = page;
  const start = (page - 1) * PAGE_SIZE;
  const slice = ENTRIES.slice(start, start + PAGE_SIZE);
  const main = document.getElementById('content');
  let html = '';
  for (const e of slice) {
    const beforeHtml = renderSide(e.beforeRefs, e.beforeOpt, e.options, e.correctIndex);
    const afterHtml = renderSide(e.afterRefs, e.afterOpt, e.options, e.correctIndex);
    let statusBadge;
    if (e.status === 'done') statusBadge = '<span class="done">done</span>';
    else if (e.status === 'partial') statusBadge = '<span class="partial">partial</span>';
    else statusBadge = '<span class="pending">pending</span>';
    html += '<div class="entry">' +
      '<div class="entry-header">' +
        '<span class="key">' + escapeHtml(e.id) + '</span>' +
        statusBadge +
        '<span class="subject">' + escapeHtml(e.subject || '') + ' · ' + escapeHtml(e.chapter || '') + '</span>' +
        '<span class="title">' + escapeHtml('#' + (e.origNo ?? '') + '. ' + (e.title || '')) + '</span>' +
      '</div>' +
      '<div class="entry-body">' +
        '<div class="col"><h3>BEFORE (현재 ref)</h3>' + beforeHtml + '</div>' +
        '<div class="col"><h3>AFTER (변환 ref)</h3>' + afterHtml + '</div>' +
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

const hashMatch = location.hash.match(/page=(\\d+)/);
const initPage = hashMatch ? Math.max(1, Math.min(TOTAL_PAGES, parseInt(hashMatch[1], 10))) : 1;
renderPage(initPage);

// file:// 직접 접근 시 /cbt-images/... 로딩 실패 → ../../public/... 로 폴백.
if (location.protocol === 'file:') {
  document.addEventListener('error', (ev) => {
    const t = ev.target;
    if (t && t.tagName === 'IMG' && t.dataset.fallback && !t.dataset.fellback) {
      t.dataset.fellback = '1';
      t.src = t.dataset.fallback;
    }
  }, true);
}
</script>
</body>
</html>
`;

const outPath = path.join(HERE, 'docs/qa/cbt-mock-audit-pilot.html');
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, html);
console.log(`Wrote ${outPath}`);
console.log(`총 ${entries.length}개 entry, ${Math.ceil(entries.length / 8)} 페이지`);
