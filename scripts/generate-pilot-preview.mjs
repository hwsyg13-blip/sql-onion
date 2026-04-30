// Generate Before/After preview page for the pilot vision conversion batch.
// - Left: original image (sqld-1140 raw PNG)
// - Right: converted refs rendered in design-system style
//   (matches src/components/QuestionReferences.tsx's RefTable/RefSql output)
//
// Output: public/pilot-vision-preview.html
// Access: /pilot-vision-preview.html (after deploy)

import fs from 'node:fs';

const SRC = 'scripts/pilot-vision-batch-1.json';
const OUT = 'public/pilot-vision-preview.html';

const data = JSON.parse(fs.readFileSync(SRC, 'utf-8'));
console.log(`Loaded ${data.items.length} pilot items from ${SRC}`);

function esc(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Render a single ref using same visual conventions as React components.
function renderRef(r) {
  if (!r || !r.type) return '';
  switch (r.type) {
    case 'sql':
      return `
        <div class="ref-block">
          ${r.caption ? `<div class="caption">${esc(r.caption)}</div>` : ''}
          <pre class="sql"><code>${esc(r.code || '')}</code></pre>
        </div>`;
    case 'table': {
      const headers = (r.headers || []).map((h) => `<th>${esc(h)}</th>`).join('');
      const rows = (r.rows || [])
        .map((row) => `<tr>${row.map((c) => `<td>${esc(c) || '<span class="muted">·</span>'}</td>`).join('')}</tr>`)
        .join('');
      return `
        <div class="ref-block">
          ${r.caption ? `<div class="caption">${esc(r.caption)}</div>` : ''}
          <div class="table-scroll">
            <table class="rt"><thead><tr>${headers}</tr></thead><tbody>${rows}</tbody></table>
          </div>
        </div>`;
    }
    case 'erd':
      // For pilot preview, render mermaid via CDN. Production uses bundled mermaid.
      return `
        <div class="ref-block">
          ${r.caption ? `<div class="caption">${esc(r.caption)}</div>` : ''}
          <div class="mermaid">${esc(r.mermaid || '')}</div>
        </div>`;
    case 'text':
      return `<div class="ref-block"><div class="ref-text">${esc(r.content || '')}</div></div>`;
    default:
      return `<pre class="ref-unknown">${esc(JSON.stringify(r, null, 2))}</pre>`;
  }
}

const cards = data.items.map((it, idx) => {
  const refsHtml = (it.convertedRefs || []).map(renderRef).join('');
  return `
    <article class="card">
      <header>
        <span class="seq">#${idx + 1}</span>
        <span class="key">${esc(it.imageKey)}</span>
      </header>
      <div class="split">
        <div class="col-left">
          <div class="col-label">Before — 원본 이미지</div>
          <div class="img-frame"><img src="${esc(it.src)}" alt="${esc(it.imageKey)}" loading="lazy"></div>
        </div>
        <div class="col-right">
          <div class="col-label">After — 디자인시스템 ref</div>
          <div class="refs-out">${refsHtml}</div>
        </div>
      </div>
    </article>`;
}).join('\n');

const html = `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<title>모던 박스 변환 파일럿 — Before/After (Plan A 1차)</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<style>
  :root {
    --bg: #fafafa;
    --card: #fff;
    --border: #e5e5e5;
    --border-subtle: #ececec;
    --border-default: #d4d4d4;
    --text: #111;
    --fg-1: #1f2937;
    --fg-2: #374151;
    --fg-3: #6b7280;
    --bg-card: #fff;
    --bg-muted: #f3f4f6;
    --bg-code: #1e293b;
    --code-fg: #e2e8f0;
    --accent: #2563eb;
    --point-100: #dcfce7;
    --point-600: #2E7D32;
  }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--bg); color: var(--text); font: 14px/1.6 -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard Variable", Pretendard, "Segoe UI", Roboto, sans-serif; }
  header.top { padding: 18px 20px 10px; max-width: 1400px; margin: 0 auto; }
  header.top h1 { margin: 0 0 6px; font-size: 18px; }
  header.top .meta { color: var(--fg-3); font-size: 12.5px; }
  main { max-width: 1400px; margin: 0 auto; padding: 12px 20px 60px; }
  .card { background: var(--card); border: 1px solid var(--border); border-radius: 12px; padding: 16px; margin-bottom: 18px; }
  .card header { display: flex; gap: 10px; align-items: center; margin-bottom: 12px; }
  .seq { font-weight: 700; font-size: 14px; color: var(--accent); }
  .key { background: var(--bg-muted); color: var(--fg-2); padding: 3px 10px; border-radius: 4px; font: 12px/1 monospace; }
  .split { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; align-items: start; }
  @media (max-width: 980px) { .split { grid-template-columns: 1fr; } }
  .col-label { font-size: 11px; font-weight: 700; color: var(--fg-3); margin-bottom: 8px; letter-spacing: 0.04em; text-transform: uppercase; }
  .img-frame { background: #fff; border: 1px solid var(--border-subtle); border-radius: 8px; padding: 12px; text-align: center; }
  .img-frame img { max-width: 100%; height: auto; }
  .refs-out { display: flex; flex-direction: column; gap: 12px; }
  .ref-block { display: flex; flex-direction: column; gap: 6px; }
  .caption { font-size: 11.5px; color: var(--fg-3); font-weight: 600; letter-spacing: 0.02em; }
  pre.sql { background: var(--bg-code); color: var(--code-fg); padding: 12px 14px; border-radius: 8px; margin: 0; overflow-x: auto; font: 12.5px/1.55 "JetBrains Mono", "SF Mono", Menlo, Consolas, monospace; }
  .table-scroll { overflow-x: auto; }
  table.rt { border-collapse: collapse; min-width: 100%; font-size: 13.5px; font-family: monospace; background: var(--bg-card); border: 1px solid var(--border-default); border-radius: 8px; overflow: hidden; }
  table.rt th { background: var(--bg-muted); padding: 8px 12px; text-align: left; border-bottom: 1px solid var(--border-default); font-weight: 700; color: var(--fg-1); white-space: nowrap; }
  table.rt td { padding: 7px 12px; border-bottom: 1px solid var(--border-subtle); color: var(--fg-2); white-space: nowrap; }
  table.rt tbody tr:last-child td { border-bottom: none; }
  table.rt .muted { color: #cbd5e1; font-style: italic; }
  .mermaid { background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 12px; min-height: 60px; }
  .ref-unknown { background: #fffbe6; padding: 8px; font: 11px/1.4 monospace; border-radius: 6px; }
  .legend { background: #fff; border: 1px solid var(--border); border-radius: 12px; padding: 14px 18px; margin-bottom: 16px; }
  .legend ul { margin: 6px 0 0; padding-left: 18px; font-size: 12.5px; color: var(--fg-2); }
  .legend li { margin-bottom: 3px; }
</style>
</head>
<body>

<header class="top">
  <h1>모던 박스 변환 파일럿 — Before/After</h1>
  <div class="meta">${esc(data.items.length)}장 (sqld-1140 의 j10XX~j13XX 영문 헤더 박스). 변환 방식: ${esc(data.method)}</div>
</header>

<main>
  <section class="legend">
    <strong style="font-size: 13px;">검수 포인트</strong>
    <ul>
      <li><b>정합성</b> — 헤더/행 순서·값이 원본과 동일한가? (특히 빈 셀과 NULL 처리)</li>
      <li><b>중복 활용</b> — 동일 콘텐츠 이미지 (예: PIVOT Source Data 가 j1071/j1079/j1087/j1117/j1357 5장) → 변환 후 동일 ref → DB 사이즈 절감</li>
      <li><b>다크모드 적합성</b> — 우리 컴포넌트는 var(--bg-code) 등 토큰 사용 → 다크모드 자동 대응 (이 프리뷰는 라이트만)</li>
      <li><b>모바일 가독성</b> — 표 가로 스크롤 자연스러운지</li>
      <li><b>ERD</b> — j1115 의 1:N 카디널리티 + PK/FK 표기가 정확한가? (mermaid erDiagram 으로 변환)</li>
    </ul>
  </section>

  ${cards}
</main>

<script type="module">
  // mermaid CDN — 프로덕션 RefErd 와 동일 themeVariables 적용
  import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
  mermaid.initialize({
    startOnLoad: true,
    theme: 'base',
    themeVariables: {
      fontFamily: 'Pretendard Variable, -apple-system, sans-serif',
      primaryColor: '#EBF5EC',
      primaryTextColor: '#1F2320',
      primaryBorderColor: '#2E7D32',
      lineColor: '#2E7D32',
      secondaryColor: '#F0F7F1',
      tertiaryColor: '#FFFFFF',
      mainBkg: '#EBF5EC',
      edgeLabelBackground: '#FFFFFF',
      attributeBackgroundColorOdd: '#FFFFFF',
      attributeBackgroundColorEven: '#F0F7F1',
    },
    securityLevel: 'loose',
  });
</script>
</body>
</html>
`;

fs.writeFileSync(OUT, html);
const sizeKb = (Buffer.byteLength(html) / 1024).toFixed(1);
console.log(`Wrote ${OUT} (${sizeKb} KB, ${data.items.length} cards)`);
