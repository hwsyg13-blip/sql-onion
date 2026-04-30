// Generate Before/After preview page for the pilot vision conversion batch.
// 양파 그린 디자인 토큰 (src/index.css 기반) + 명시적 mermaid 렌더 (RefErd 와 동일 패턴).
//
// Output: public/pilot-vision-preview.html

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

// SQL 키워드 하이라이트 (Atoms.tsx::highlightSQL 와 동일 키워드 셋)
const SQL_KEYWORDS = /\b(SELECT|FROM|WHERE|GROUP BY|HAVING|ORDER BY|JOIN|INNER|LEFT|RIGHT|OUTER|ON|AS|AND|OR|NOT|IN|BETWEEN|LIKE|IS|NULL|UNION|ALL|INTERSECT|MINUS|DISTINCT|COUNT|SUM|AVG|MAX|MIN|CASE|WHEN|THEN|ELSE|END|CREATE|TABLE|VIEW|PRIMARY KEY|FOREIGN KEY|REFERENCES|NUMBER|VARCHAR2|DEFAULT|CONNECT BY|PRIOR|START WITH|OVER|PARTITION BY|RANK|DENSE_RANK|ROW_NUMBER|ROLLUP|CUBE|GROUPING SETS|GROUPING|NVL|TRUNCATE|DROP|DELETE|INSERT|UPDATE|GRANT|REVOKE|COMMIT|ROLLBACK|DESC|ASC|NULLS FIRST|NULLS LAST)\b/gi;

function highlightSql(code) {
  if (!code) return '';
  return esc(code)
    // string literals first
    .replace(/('[^'\n]*')/g, '<span class="hl-str">$1</span>')
    // numbers (4+ digits or standalone)
    .replace(/\b(\d+)\b/g, '<span class="hl-num">$1</span>')
    // keywords (uppercase regex captures both upper/lower)
    .replace(SQL_KEYWORDS, (m) => `<span class="hl-kw">${m}</span>`);
}

function renderRef(r, idx) {
  if (!r || !r.type) return '';
  switch (r.type) {
    case 'sql':
      return `
        <div class="ref-block">
          ${r.caption ? `<div class="caption">${esc(r.caption)}</div>` : ''}
          <pre class="sql-block"><code>${highlightSql(r.code || '')}</code></pre>
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
      // mermaid 코드는 본문에 raw text 로 보존. 클라이언트에서 명시적 render.
      return `
        <div class="ref-block">
          ${r.caption ? `<div class="caption">${esc(r.caption)}</div>` : ''}
          <div class="erd-frame" data-mermaid-source="${esc(r.mermaid || '')}"></div>
        </div>`;
    case 'text':
      return `<div class="ref-block"><div class="ref-text">${esc(r.content || '')}</div></div>`;
    default:
      return `<pre class="ref-unknown">${esc(JSON.stringify(r, null, 2))}</pre>`;
  }
}

const modernItems = data.items.filter((it) => !it._classic);
const classicItems = data.items.filter((it) => it._classic);

function renderCard(it, idx) {
  const refsHtml = (it.convertedRefs || []).map(renderRef).join('');
  return `
    <article class="card">
      <header>
        <span class="seq">#${idx + 1}</span>
        <span class="key">${esc(it.imageKey)}</span>
        ${it._classic ? '<span class="badge classic">클래식</span>' : '<span class="badge modern">모던</span>'}
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
}

const html = `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<title>모던/클래식 변환 파일럿 — Before/After (Plan A 1차)</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<style>
  /* 양파 그린 디자인 토큰 (src/index.css 라이트 모드) */
  :root {
    --bg-page:      #F5F7F6;
    --bg-surface:   #FAFAFA;
    --bg-card:      #FFFFFF;
    --bg-code:      #EEF1EE;   /* 라이트 그린 SQL 블록 */
    --bg-muted:     #F3F5F3;
    --point-600:    #2E7D32;   /* primary 양파 그린 */
    --point-500:    #4CAF50;
    --point-300:    #A5D6A7;
    --point-100:    #EBF5EC;
    --point-050:    #F0F7F1;
    --fg-1:         #1F2320;
    --fg-2:         #333333;
    --fg-3:         #6B7280;
    --border-subtle:  #EEF1EE;
    --border-default: #E5E7EB;
    --warn-bg:        #FEF3C7;
    --warn-fg:        #92400E;
    --code-str:       #A9562E;
    --code-num:       #2F5D80;
    --shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
  }
  * { box-sizing: border-box; }
  body {
    margin: 0; background: var(--bg-page); color: var(--fg-1);
    font: 14px/1.6 "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Segoe UI", Roboto, sans-serif;
  }
  header.top { padding: 22px 24px 12px; max-width: 1400px; margin: 0 auto; }
  header.top h1 {
    margin: 0 0 6px; font-size: 19px; color: var(--fg-1);
    display: inline-flex; align-items: center; gap: 8px;
  }
  header.top h1::before {
    content: ""; display: inline-block; width: 14px; height: 14px;
    background: var(--point-600); border-radius: 50%;
  }
  header.top .meta { color: var(--fg-3); font-size: 12.5px; line-height: 1.6; }
  main { max-width: 1400px; margin: 0 auto; padding: 8px 24px 80px; }

  .section-head {
    margin: 30px 0 16px; padding-left: 12px;
    border-left: 4px solid var(--point-600);
  }
  .section-head:first-of-type { margin-top: 12px; }
  .section-head h2 { margin: 0; font-size: 17px; color: var(--fg-1); }
  .section-head p { margin: 4px 0 0; font-size: 12.5px; color: var(--fg-3); }

  .card {
    background: var(--bg-card); border: 1px solid var(--border-subtle);
    border-radius: 14px; padding: 18px; margin-bottom: 18px;
    box-shadow: var(--shadow-sm);
  }
  .card header { display: flex; gap: 10px; align-items: center; margin-bottom: 14px; flex-wrap: wrap; }
  .seq { font-weight: 700; font-size: 14px; color: var(--point-600); }
  .key {
    background: var(--point-100); color: var(--point-600);
    padding: 3px 10px; border-radius: 999px;
    font: 12px/1 "JetBrains Mono", "SF Mono", Menlo, Consolas, monospace;
    font-weight: 600;
  }
  .badge {
    padding: 2px 8px; border-radius: 4px;
    font-size: 10.5px; font-weight: 700; letter-spacing: 0.04em;
  }
  .badge.modern  { background: var(--point-100); color: var(--point-600); }
  .badge.classic { background: var(--warn-bg);   color: var(--warn-fg); }

  .split { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; align-items: start; }
  @media (max-width: 980px) { .split { grid-template-columns: 1fr; } }
  .col-label {
    font-size: 11px; font-weight: 700; color: var(--fg-3);
    margin-bottom: 8px; letter-spacing: 0.06em; text-transform: uppercase;
  }
  .img-frame {
    background: var(--bg-card); border: 1px solid var(--border-subtle);
    border-radius: 10px; padding: 14px; text-align: center;
  }
  .img-frame img { max-width: 100%; height: auto; }

  .refs-out { display: flex; flex-direction: column; gap: 14px; }
  .ref-block { display: flex; flex-direction: column; gap: 6px; }
  .caption {
    font-size: 11.5px; color: var(--fg-3);
    font-weight: 600; letter-spacing: 0.02em;
  }

  /* SQL 코드 블록 — 양파 그린 라이트 톤 (실제 .code-block 과 동일) */
  pre.sql-block {
    background: var(--bg-code); color: var(--fg-1);
    padding: 14px 18px; border-radius: 12px;
    border: 1px solid var(--border-subtle);
    margin: 0; overflow-x: auto;
    font: 13px/1.7 "JetBrains Mono", "SF Mono", Menlo, Consolas, monospace;
    white-space: pre-wrap; word-break: break-word;
    tab-size: 2;
  }
  .hl-kw  { color: var(--point-600); font-weight: 600; }
  .hl-str { color: var(--code-str); }
  .hl-num { color: var(--code-num); }

  /* 표 — RefTable 과 동일 스타일 */
  .table-scroll { overflow-x: auto; }
  table.rt {
    border-collapse: collapse; min-width: 100%; font-size: 13.5px;
    font-family: "JetBrains Mono", "SF Mono", Menlo, Consolas, monospace;
    background: var(--bg-card);
    border: 1px solid var(--border-default); border-radius: 8px;
    overflow: hidden;
  }
  table.rt th {
    background: var(--bg-muted); padding: 8px 12px; text-align: left;
    border-bottom: 1px solid var(--border-default);
    font-weight: 700; color: var(--fg-1); white-space: nowrap;
  }
  table.rt td {
    padding: 7px 12px; border-bottom: 1px solid var(--border-subtle);
    color: var(--fg-2); white-space: nowrap;
  }
  table.rt tbody tr:last-child td { border-bottom: none; }
  table.rt .muted { color: #cbd5e1; font-style: italic; }

  .erd-frame {
    background: var(--bg-card); border: 1px solid var(--border-subtle);
    border-radius: 10px; padding: 14px; min-height: 80px;
    display: flex; justify-content: center; overflow-x: auto;
  }
  .erd-frame svg { max-width: 100%; height: auto; }
  .erd-frame.failed {
    color: #b91c1c; font-size: 12px; padding: 10px;
    background: #fef2f2; border-color: #fecaca;
  }

  .legend {
    background: var(--bg-card); border: 1px solid var(--border-subtle);
    border-radius: 14px; padding: 16px 20px; margin-bottom: 18px;
    box-shadow: var(--shadow-sm);
  }
  .legend strong { color: var(--point-600); font-size: 13px; }
  .legend ul { margin: 8px 0 0; padding-left: 20px; font-size: 12.5px; color: var(--fg-2); }
  .legend li { margin-bottom: 3px; }

  .ref-text {
    background: var(--point-050); border-left: 3px solid var(--point-300);
    padding: 10px 14px; border-radius: 0 8px 8px 0;
    font-size: 13.5px; color: var(--fg-2);
  }
</style>
</head>
<body>

<header class="top">
  <h1>모던/클래식 변환 파일럿 — Before/After</h1>
  <div class="meta">
    총 ${data.items.length}장 (모던 박스 ${modernItems.length} · 클래식 시험지 ${classicItems.length}) ·
    양파 그린 디자인 토큰 + 양산 컴포넌트와 동일 톤
  </div>
</header>

<main>
  <section class="legend">
    <strong>검수 포인트</strong>
    <ul>
      <li><b>정합성</b> — 헤더/행 순서·값이 원본과 동일한가? 빈 셀과 NULL 처리 확인</li>
      <li><b>다중 표 분리</b> — 한 이미지 안의 표 여러 개가 별개 ref 로 깔끔하게 나뉘는가? (j95: 4개, j121: 3개, j131: 3개, j128: 3개)</li>
      <li><b>SQL 하이라이트</b> — 키워드는 양파 그린, 숫자는 블루, 문자열은 갈색</li>
      <li><b>ERD</b> — j1115 (영문 모던) + j101 (클래식, 영문 alias) 두 케이스 모두 1:N + PK/FK 정확한가?</li>
      <li><b>한글 데이터</b> — 클래식 시험지의 한글 컬럼명/값 정확 추출 (특히 부서명·고객명)</li>
      <li><b>다크모드</b> — 이 프리뷰는 라이트만. 본 사이트는 토큰이 다크모드 자동 대응</li>
    </ul>
  </section>

  <div class="section-head">
    <h2>1. 모던 박스 (영문 헤더, 깔끔한 격자) · ${modernItems.length}장</h2>
    <p>OCR 자동화로도 신뢰도 높은 케이스. 표/SQL/ERD 명확 구분.</p>
  </div>
  ${modernItems.map((it, i) => renderCard(it, i)).join('\n')}

  <div class="section-head">
    <h2>2. 클래식 시험지 (한글 표 + SQL 합쳐진 케이스) · ${classicItems.length}장</h2>
    <p>한 이미지에 표 2~4개 + SQL 이 합쳐진 어려운 케이스. 사람 시각 정독 + 분할 변환.</p>
  </div>
  ${classicItems.map((it, i) => renderCard(it, modernItems.length + i)).join('\n')}
</main>

<script type="module">
  import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
  // RefErd.tsx 와 동일한 양파 그린 themeVariables
  mermaid.initialize({
    startOnLoad: false,
    theme: 'base',
    themeVariables: {
      fontFamily: '"Pretendard Variable", Pretendard, -apple-system, sans-serif',
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
  // 명시적 render — startOnLoad 의 race 회피
  const frames = document.querySelectorAll('.erd-frame[data-mermaid-source]');
  for (let i = 0; i < frames.length; i++) {
    const el = frames[i];
    const code = el.getAttribute('data-mermaid-source');
    try {
      const { svg } = await mermaid.render(\`erd-pilot-\${i}\`, code);
      el.innerHTML = svg;
    } catch (err) {
      el.classList.add('failed');
      el.innerHTML = \`<div>ERD 렌더 실패: \${(err && err.message) || err}</div><pre style="font-size:11px;color:#7f1d1d;margin-top:6px;">\${code.replace(/[<>&]/g, '')}</pre>\`;
    }
  }
</script>
</body>
</html>
`;

fs.writeFileSync(OUT, html);
const sizeKb = (Buffer.byteLength(html) / 1024).toFixed(1);
console.log(`Wrote ${OUT} (${sizeKb} KB, ${data.items.length} cards: ${modernItems.length} modern + ${classicItems.length} classic)`);
