// Generate a self-contained HTML page that lists every mock question
// (ai-mock + cbt-mock + sqld-1140) with options, correct answer, references,
// and explanation — used for QA review only.
//
// Output: public/mock-review.html
// Access: https://sqldyangpa.com/mock-review.html (after main deploy)

import fs from 'node:fs';

const SRC_FILES = [
  { path: 'scripts/authored/ai-mock.json',       pool: 'ai-mock'   },
  { path: 'scripts/authored/cbt-mock.json',      pool: 'cbt-mock'  },
  { path: 'scripts/authored/sqld-quiz-1140.json', pool: 'sqld-1140' },
];

const OUT = 'public/mock-review.html';

function loadPool(srcPath, pool) {
  const raw = JSON.parse(fs.readFileSync(srcPath, 'utf-8'));
  return raw.authored.map((q) => ({ ...q, _pool: pool }));
}

const all = SRC_FILES.flatMap(({ path, pool }) => loadPool(path, pool));
console.log(`Loaded ${all.length} mock questions`);

// ----- HTML escaping helpers -----
function esc(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function nl2br(s) {
  return esc(s).replace(/\n/g, '<br>');
}

// ----- Reference renderers -----
function renderRef(ref) {
  if (!ref || !ref.type) return '';
  switch (ref.type) {
    case 'text':
      return `<div class="ref-text">${nl2br(ref.content || '')}</div>`;
    case 'sql':
      return `
        <div class="ref-sql">
          ${ref.caption ? `<div class="ref-caption">${esc(ref.caption)}</div>` : ''}
          <pre><code>${esc(ref.code || '')}</code></pre>
        </div>`;
    case 'table': {
      const headers = (ref.headers || []).map((h) => `<th>${esc(h)}</th>`).join('');
      const rows = (ref.rows || [])
        .map((row) => `<tr>${row.map((c) => `<td>${nl2br(c)}</td>`).join('')}</tr>`)
        .join('');
      return `
        <div class="ref-table">
          ${ref.caption ? `<div class="ref-caption">${esc(ref.caption)}</div>` : ''}
          <table><thead><tr>${headers}</tr></thead><tbody>${rows}</tbody></table>
        </div>`;
    }
    case 'image':
      return `
        <div class="ref-image">
          ${ref.caption ? `<div class="ref-caption">${esc(ref.caption)}</div>` : ''}
          <img src="${esc(ref.src)}" alt="${esc(ref.alt || '')}" loading="lazy">
        </div>`;
    case 'ascii':
      return `<pre class="ref-ascii">${esc(ref.content || '')}</pre>`;
    case 'html':
      // raw html — used carefully, strip script tags for safety
      return `<div class="ref-html">${(ref.content || '').replace(/<script/gi, '&lt;script')}</div>`;
    default:
      return `<div class="ref-unknown">[${esc(ref.type)}]<pre>${esc(JSON.stringify(ref, null, 2))}</pre></div>`;
  }
}

function renderRefs(refs) {
  if (!refs || refs.length === 0) return '';
  return `<div class="refs">${refs.map(renderRef).join('')}</div>`;
}

// ----- Question card -----
function renderCard(q, idx) {
  const correctIdx = q.correctIndex;
  const optHtml = (q.options || [])
    .map((o, i) => {
      const isCorrect = i === correctIdx;
      const optRefs = q.optionReferences && q.optionReferences[i]
        ? renderRefs(q.optionReferences[i])
        : '';
      return `
        <li class="opt ${isCorrect ? 'correct' : ''}">
          <span class="opt-num">${i + 1}</span>
          <span class="opt-text">${nl2br(o)}</span>
          ${isCorrect ? '<span class="opt-mark">✓ 정답</span>' : ''}
          ${optRefs}
        </li>`;
    })
    .join('');

  const meta = [
    q._pool,
    q._id,
    q.subject,
    q.chapter,
    q._pdf ? `${q._pdf}#${q._pdfNumber}` : null,
    q._category ? `cat: ${q._category}` : null,
    q._correctRate != null ? `정답률 ${q._correctRate}%` : null,
    q._multiAnswer ? `복수정답 (${q._multiAnswer})` : null,
  ].filter(Boolean);

  return `
    <article class="card"
             data-pool="${esc(q._pool)}"
             data-subject="${esc(q.subject || '')}"
             data-chapter="${esc(q.chapter || '')}"
             data-search="${esc((q.title || '').toLowerCase())}">
      <header class="card-head">
        <span class="seq">#${idx + 1}</span>
        ${meta.map((m) => `<span class="tag">${esc(m)}</span>`).join('')}
      </header>
      <div class="title">${nl2br(q.title)}</div>
      ${renderRefs(q.references)}
      <ol class="opts">${optHtml}</ol>
      ${q.explanation ? `<details class="explain"><summary>해설 펼치기</summary><div class="explain-body">${nl2br(q.explanation)}</div></details>` : ''}
    </article>`;
}

// ----- Filter dropdowns -----
const pools = [...new Set(all.map((q) => q._pool))].sort();
const subjects = [...new Set(all.map((q) => q.subject).filter(Boolean))].sort();
const chapters = [...new Set(all.map((q) => q.chapter).filter(Boolean))].sort();

// Per-pool counts
const poolCounts = pools.map((p) => `${p}: ${all.filter((q) => q._pool === p).length}`);

// ----- Full HTML -----
const html = `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<title>모의고사 전수 검수 — SQLD양파</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<style>
  :root {
    --bg: #fafafa;
    --card: #fff;
    --border: #e5e5e5;
    --border-strong: #bbb;
    --text: #111;
    --text-muted: #666;
    --accent: #2563eb;
    --correct-bg: #e7f8ec;
    --correct-border: #16a34a;
    --tag-bg: #eef2ff;
    --tag-text: #3730a3;
    --code-bg: #1e293b;
    --code-text: #e2e8f0;
  }
  * { box-sizing: border-box; }
  html, body { margin: 0; background: var(--bg); color: var(--text); font: 14px/1.55 -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard Variable", Pretendard, "Segoe UI", Roboto, sans-serif; }
  header.top { position: sticky; top: 0; background: #fff; border-bottom: 1px solid var(--border); padding: 12px 16px; z-index: 10; box-shadow: 0 1px 3px rgba(0,0,0,.04); }
  header.top h1 { margin: 0 0 6px; font-size: 16px; }
  header.top .summary { color: var(--text-muted); font-size: 12px; margin-bottom: 8px; }
  .filters { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
  .filters label { display: inline-flex; align-items: center; gap: 4px; font-size: 12px; color: var(--text-muted); }
  .filters select, .filters input { padding: 6px 8px; border: 1px solid var(--border-strong); border-radius: 6px; font-size: 13px; background: #fff; }
  .filters input[type=search] { min-width: 200px; }
  .filters .count { margin-left: auto; font-weight: 600; font-size: 13px; }
  main { max-width: 980px; margin: 16px auto; padding: 0 16px 60px; }
  .card { background: var(--card); border: 1px solid var(--border); border-radius: 10px; padding: 16px; margin-bottom: 14px; }
  .card-head { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 10px; align-items: center; }
  .seq { font-weight: 700; font-size: 13px; color: var(--accent); }
  .tag { background: var(--tag-bg); color: var(--tag-text); border-radius: 4px; padding: 2px 8px; font-size: 11px; font-weight: 500; }
  .title { font-size: 15px; font-weight: 500; line-height: 1.6; margin-bottom: 12px; white-space: pre-wrap; }
  .refs { margin-bottom: 12px; display: flex; flex-direction: column; gap: 10px; }
  .ref-caption { font-size: 12px; color: var(--text-muted); margin-bottom: 4px; font-weight: 500; }
  .ref-text { background: #f5f5f5; border-left: 3px solid #999; padding: 8px 12px; border-radius: 0 6px 6px 0; font-size: 13px; }
  .ref-sql pre { background: var(--code-bg); color: var(--code-text); padding: 12px; border-radius: 6px; overflow-x: auto; margin: 0; font: 12.5px/1.5 "JetBrains Mono", "SF Mono", Menlo, Consolas, monospace; }
  .ref-table table { border-collapse: collapse; font-size: 12.5px; min-width: 60%; }
  .ref-table th, .ref-table td { border: 1px solid var(--border-strong); padding: 4px 8px; text-align: left; }
  .ref-table th { background: #f1f5f9; font-weight: 600; }
  .ref-image img { max-width: 100%; height: auto; border: 1px solid var(--border); border-radius: 6px; }
  .ref-ascii { background: #f5f5f5; padding: 10px; border-radius: 6px; font: 12px/1.4 "SF Mono", Menlo, Consolas, monospace; overflow-x: auto; }
  .ref-html { font-size: 13px; }
  .ref-unknown { background: #fffbe6; border: 1px dashed #d97706; padding: 8px; border-radius: 6px; font-size: 12px; }
  .ref-unknown pre { margin: 4px 0 0; font-size: 11px; }
  .opts { list-style: none; padding: 0; margin: 0; counter-reset: optnum; }
  .opt { display: flex; align-items: flex-start; gap: 8px; padding: 8px 10px; border: 1px solid var(--border); border-radius: 6px; margin-bottom: 6px; background: #fff; flex-wrap: wrap; }
  .opt.correct { background: var(--correct-bg); border-color: var(--correct-border); }
  .opt-num { display: inline-flex; width: 22px; height: 22px; border-radius: 50%; background: #ddd; color: #333; align-items: center; justify-content: center; font-size: 12px; font-weight: 600; flex-shrink: 0; margin-top: 1px; }
  .opt.correct .opt-num { background: var(--correct-border); color: #fff; }
  .opt-text { flex: 1; min-width: 0; font-size: 13.5px; line-height: 1.5; word-break: break-word; }
  .opt-mark { font-size: 11px; font-weight: 700; color: var(--correct-border); flex-shrink: 0; align-self: center; }
  .opt .refs { flex-basis: 100%; margin: 8px 0 0; }
  .explain { margin-top: 12px; }
  .explain summary { cursor: pointer; font-size: 12.5px; color: var(--text-muted); padding: 4px 0; }
  .explain-body { background: #fff8e1; border-left: 3px solid #f59e0b; padding: 10px 12px; margin-top: 6px; border-radius: 0 6px 6px 0; font-size: 13px; line-height: 1.6; white-space: pre-wrap; }
  .empty { text-align: center; padding: 60px 20px; color: var(--text-muted); }
  @media (max-width: 640px) {
    .filters input[type=search] { min-width: 100%; }
    .filters .count { margin-left: 0; flex-basis: 100%; text-align: right; }
  }
</style>
</head>
<body>
<header class="top">
  <h1>모의고사 전수 검수 (총 ${all.length} 문항)</h1>
  <div class="summary">${esc(poolCounts.join(' · '))}</div>
  <div class="filters">
    <label>출처
      <select id="f-pool">
        <option value="">전체</option>
        ${pools.map((p) => `<option value="${esc(p)}">${esc(p)}</option>`).join('')}
      </select>
    </label>
    <label>과목
      <select id="f-subject">
        <option value="">전체</option>
        ${subjects.map((s) => `<option value="${esc(s)}">${esc(s)}</option>`).join('')}
      </select>
    </label>
    <label>챕터
      <select id="f-chapter">
        <option value="">전체</option>
        ${chapters.map((c) => `<option value="${esc(c)}">${esc(c)}</option>`).join('')}
      </select>
    </label>
    <label>검색
      <input id="f-search" type="search" placeholder="제목 검색...">
    </label>
    <span class="count" id="count">${all.length} / ${all.length}</span>
  </div>
</header>
<main id="list">
${all.map(renderCard).join('\n')}
<div class="empty" id="empty" hidden>조건에 맞는 문항이 없습니다.</div>
</main>
<script>
(function () {
  var pool = document.getElementById('f-pool');
  var subj = document.getElementById('f-subject');
  var chap = document.getElementById('f-chapter');
  var srch = document.getElementById('f-search');
  var cnt  = document.getElementById('count');
  var empty = document.getElementById('empty');
  var cards = Array.prototype.slice.call(document.querySelectorAll('.card'));
  var total = cards.length;

  function apply() {
    var p = pool.value, s = subj.value, c = chap.value;
    var q = (srch.value || '').trim().toLowerCase();
    var visible = 0;
    for (var i = 0; i < cards.length; i++) {
      var el = cards[i];
      var ok = (!p || el.dataset.pool === p)
            && (!s || el.dataset.subject === s)
            && (!c || el.dataset.chapter === c)
            && (!q || el.dataset.search.indexOf(q) !== -1);
      el.style.display = ok ? '' : 'none';
      if (ok) visible++;
    }
    cnt.textContent = visible + ' / ' + total;
    empty.hidden = visible !== 0;
  }
  [pool, subj, chap].forEach(function (el) { el.addEventListener('change', apply); });
  srch.addEventListener('input', apply);
})();
</script>
</body>
</html>
`;

fs.writeFileSync(OUT, html);
const sizeMb = (Buffer.byteLength(html) / 1024 / 1024).toFixed(2);
console.log(`Wrote ${OUT} (${sizeMb} MB, ${all.length} questions)`);
console.log(`Pools: ${poolCounts.join(', ')}`);
