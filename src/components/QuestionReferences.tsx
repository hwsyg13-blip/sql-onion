// @ts-nocheck
// 질문의 "보기" 영역 — 지문/표/SQL/ERD 도식 같은 보조 자료
// 질문 제목(q.title) 과 선택지(q.options) 사이에 렌더
//
// 사용 예시:
//   q.references = [
//     { type: 'text', content: '다음 테이블을 보고 답하시오.' },
//     { type: 'table', headers: ['ID','VAL'], rows: [['1','A'],['2','B']] },
//     { type: 'sql', code: 'SELECT * FROM T;' },
//     { type: 'ascii', text: '[고객] ─|─<[주문]' },
//     { type: 'html', html: '<table>...</table>' }  // fallback
//   ]

import React from 'react';
import { loadMermaid, mermaidLoadFailedHtml } from '../lib/loadMermaid';
import { trackEvent } from '../lib/analytics';
import { CodeBlock } from './Atoms';

export type QuestionReference =
  | { type: 'text'; content: string; heading?: string }
  | { type: 'sql'; code: string; caption?: string }
  | { type: 'table'; headers: string[]; rows: string[][]; caption?: string }
  | { type: 'ascii'; text: string; caption?: string }
  | { type: 'html'; html: string; caption?: string }
  | { type: 'image'; src: string; alt?: string; caption?: string }
  /** @deprecated 호환성 유지용. 새 데이터는 'erd' 사용. PR #100 spec 참조. */
  | { type: 'entity-diagram'; entityName: string; preText: string; headers: string[]; rows: string[][] }
  | { type: 'erd'; mermaid: string; caption?: string; instanceTable?: { of: string; headers: string[]; rows: string[][] } };

const CAPTION_STYLE: React.CSSProperties = {
  fontSize: 11.5,
  color: 'var(--fg-3)',
  fontWeight: 600,
  letterSpacing: '0.02em',
  marginBottom: 6,
};

/** **bold** / `code` → React 노드로 변환 (XSS 방지 위해 텍스트만)
 *  *italic* 은 지원하지 않는다: SQL·수식·정규식의 `*` (SELECT *, COUNT(*), 3*3) 가
 *  두 개 이상 있으면 사이 텍스트가 기울임으로 처리되어 `*` 가 사라지던 문제가 있었음. */
export function renderInlineMd(text: string) {
  if (!text) return null;
  // 단순 토크나이저: 양식 마커 기준으로 split
  const tokens = [];
  // ** 는 여는 쪽 바로 뒤와 닫는 쪽 바로 앞이 공백이 아닐 때만 굵게 처리
  const re = /(\*\*(?=\S)([^*\n]*?\S)\*\*)|(`([^`\n]+?)`)/g;
  let last = 0, m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) tokens.push({ type: 'text', value: text.slice(last, m.index) });
    if (m[1]) tokens.push({ type: 'b', value: m[2] });
    else if (m[3]) tokens.push({ type: 'code', value: m[4] });
    last = m.index + m[0].length;
  }
  if (last < text.length) tokens.push({ type: 'text', value: text.slice(last) });
  return tokens.map((t, i) => {
    if (t.type === 'b') return <strong key={i} style={{ fontWeight: 700, color: 'var(--fg-1)' }}>{t.value}</strong>;
    if (t.type === 'code') return <code key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.92em', background: 'var(--bg-code)', padding: '1px 5px', borderRadius: 4 }}>{t.value}</code>;
    return <React.Fragment key={i}>{t.value}</React.Fragment>;
  });
}

function RefText({ heading, content }: any) {
  return (
    <div>
      {heading && <div style={CAPTION_STYLE}>{heading}</div>}
      <p style={{
        margin: 0, fontSize: 14.5, lineHeight: 1.7, color: 'var(--fg-2)',
        whiteSpace: 'pre-wrap',
      }}>{renderInlineMd(content)}</p>
    </div>
  );
}

function RefSql({ code, caption }: any) {
  return (
    <div>
      {caption && <div style={CAPTION_STYLE}>{caption}</div>}
      <CodeBlock>{code}</CodeBlock>
    </div>
  );
}

function RefTable({ headers, rows, caption }: any) {
  return (
    <div>
      {caption && <div style={CAPTION_STYLE}>{caption}</div>}
      <div style={{ overflowX: 'auto' }}>
        <table style={{
          borderCollapse: 'collapse',
          minWidth: '100%',
          fontSize: 13.5,
          fontFamily: 'var(--font-mono)',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-default)',
          borderRadius: 8,
          overflow: 'hidden',
        }}>
          <thead>
            <tr>
              {headers.map((h: string, i: number) => (
                <th key={i} style={{
                  background: 'var(--bg-muted)',
                  padding: '8px 12px',
                  textAlign: 'left',
                  borderBottom: '1px solid var(--border-default)',
                  fontWeight: 700,
                  color: 'var(--fg-1)',
                  whiteSpace: 'nowrap',
                }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r: string[], ri: number) => (
              <tr key={ri}>
                {r.map((c: string, ci: number) => (
                  <td key={ci} style={{
                    padding: '7px 12px',
                    borderBottom: ri === rows.length - 1 ? 'none' : '1px solid var(--border-subtle)',
                    color: 'var(--fg-2)',
                    whiteSpace: 'nowrap',
                  }}>{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function RefAscii({ text, caption }: any) {
  return (
    <div>
      {caption && <div style={CAPTION_STYLE}>{caption}</div>}
      <pre style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        lineHeight: 1.55,
        background: 'var(--bg-code)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 10,
        padding: '14px 18px',
        margin: 0,
        overflowX: 'auto',
        color: 'var(--fg-1)',
      }}>{text}</pre>
    </div>
  );
}

function RefEntityDiagram({ entityName, preText, headers, rows }: any) {
  return (
    <div style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 12,
      overflow: 'hidden',
    }}>
      {preText && (
        <pre style={{
          margin: 0,
          padding: '14px 18px',
          fontFamily: 'var(--font-mono)',
          fontSize: 13,
          lineHeight: 1.55,
          color: 'var(--fg-2)',
          background: 'var(--bg-surface)',
          borderBottom: '1px solid var(--border-subtle)',
          whiteSpace: 'pre',
          overflowX: 'auto',
        }}>{preText}</pre>
      )}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      gap: 20,
      alignItems: 'center',
      padding: '18px 12px',
      overflowX: 'auto',
    }}>
      {/* 왼쪽: 엔터티 라벨 + 박스 */}
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 12, color: 'var(--fg-3)', marginBottom: 10 }}>엔터티</div>
        <div style={{ fontSize: 18, color: 'var(--fg-3)', lineHeight: 1, marginBottom: 10 }}>↓</div>
        <div style={{
          display: 'inline-block',
          padding: '10px 20px',
          border: '2px solid var(--border-strong)',
          borderRadius: 8,
          fontSize: 14,
          fontWeight: 700,
          color: 'var(--fg-1)',
          background: 'var(--bg-card)',
          whiteSpace: 'nowrap',
        }}>[ {entityName || '엔터티'} ]</div>
      </div>

      {/* 중앙: 속성 라벨 + 표 */}
      <div>
        <div style={{
          textAlign: 'center',
          fontSize: 12,
          color: 'var(--fg-3)',
          marginBottom: 4,
        }}>속성</div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${headers.length}, 1fr)`,
          fontSize: 14,
          color: 'var(--fg-3)',
          marginBottom: 4,
          textAlign: 'center',
        }}>
          {headers.map((_: any, i: number) => (<span key={i}>↓</span>))}
        </div>
        <table style={{
          borderCollapse: 'separate',
          borderSpacing: 0,
          width: '100%',
          fontSize: 13.5,
          background: 'var(--bg-card)',
          border: '1px solid var(--border-default)',
          borderRadius: 8,
          overflow: 'hidden',
        }}>
          <thead>
            <tr>
              {headers.map((h: string, i: number) => (
                <th key={i} style={{
                  padding: '10px 14px',
                  background: 'var(--point-100)',
                  color: 'var(--point-600)',
                  fontWeight: 700,
                  textAlign: 'center',
                  borderBottom: '1px solid var(--border-default)',
                  borderRight: i < headers.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                  whiteSpace: 'nowrap',
                }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r: string[], ri: number) => (
              <tr key={ri}>
                {r.map((c: string, ci: number) => (
                  <td key={ci} style={{
                    padding: '10px 14px',
                    textAlign: 'center',
                    color: 'var(--fg-2)',
                    borderBottom: ri === rows.length - 1 ? 'none' : '1px solid var(--border-subtle)',
                    borderRight: ci < r.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                    whiteSpace: 'nowrap',
                  }}>{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 오른쪽: 인스턴스 화살표 */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: 44,  // 헤더와 속성 라벨 높이만큼 내려서 정렬
        gap: 0,
      }}>
        {rows.map((_: any, i: number) => (
          <div key={i} style={{
            height: 41,  // 각 행 높이 맞춤
            display: 'flex',
            alignItems: 'center',
            fontSize: 13,
            color: 'var(--fg-3)',
            whiteSpace: 'nowrap',
          }}>
            <span style={{ marginRight: 6 }}>←</span>
            인스턴스 {i + 1}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

// mermaid 가 그리지 못했을 때(2026-11-03 macOS Safari 제보 R45·R49 1과목 4번) 빈 칸이나 오류문 대신
// 표기법을 그대로 글로 보여 준다. 관계의 '뜻'(필수·선택)은 문제의 답이 될 수 있어 풀어 쓰지 않고 기호만 옮긴다.
const ERD_REL = /^\s*("?[^"\s{]+"?)\s+([|}][|o]|[|o][|{])(--|\.\.)([|o][|{]|[|}][|o])\s+("?[^"\s:]+"?)\s*(?::\s*"?([^"]*)"?)?\s*$/;
function escHtml(s: string) { return s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' } as any)[c]); }
// 배포 직후 옛 청크가 사라져 mermaid 의 erDiagram 모듈을 못 받을 때 브라우저별 메시지
// (Chrome: Failed to fetch dynamically imported module / Safari: Importing a module script failed / Firefox: error loading dynamically imported module)
export const isChunkLoadError = (msg: string) =>
  /dynamically imported module|module script failed|Loading chunk|Failed to fetch/i.test(msg);

export function erdFallbackHtml(code: string, staleChunk = false): string {
  const lines = String(code || '').split('\n');
  const rels: string[] = [];
  const ents: { name: string; attrs: string[] }[] = [];
  let cur: { name: string; attrs: string[] } | null = null;
  for (const raw of lines) {
    const line = raw.trim();
    if (!line || /^erDiagram$/i.test(line)) continue;
    if (cur) { if (line === '}') { ents.push(cur); cur = null; } else cur.attrs.push(line.replace(/\s+/g, ' ')); continue; }
    const open = line.match(/^("?[^"\s{]+"?)\s*\{$/);
    if (open) { cur = { name: open[1].replace(/"/g, ''), attrs: [] }; continue; }
    const m = line.match(ERD_REL);
    if (m) {
      const [, a, l, ln, r, b, label] = m;
      rels.push(`${escHtml(a.replace(/"/g, ''))}  ${escHtml(l)}${ln === '--' ? '────' : '┄┄┄┄'}${escHtml(r)}  ${escHtml(b.replace(/"/g, ''))}${label ? `  : ${escHtml(label)}` : ''}`);
    }
  }
  const box = (t: string) => `<div style="font-family:var(--font-mono, ui-monospace, monospace);font-size:13.5px;line-height:1.7;white-space:pre;overflow-x:auto;color:var(--fg-1);">${t}</div>`;
  const entHtml = ents.map(e => box(`[${escHtml(e.name)}]\n` + e.attrs.map(a => '  ' + escHtml(a)).join('\n'))).join('<div style="height:8px"></div>');
  return `<div style="padding:4px 6px;">`
    + (entHtml ? entHtml + '<div style="height:10px"></div>' : '')
    + (rels.length ? box(rels.join('\n')) : '')
    + `<div style="margin-top:10px;font-size:12px;line-height:1.6;color:var(--fg-3);">이 브라우저에서 다이어그램을 그리지 못해 표기를 글로 옮겼어요. `
    + `<code>|</code> 수직선, <code>o</code> 동그라미, <code>{</code> <code>}</code> 까마귀발, ──── 실선, ┄┄┄┄ 점선이에요.</div>`
    + (staleChunk
      ? `<div style="margin-top:6px;font-size:12px;line-height:1.6;color:var(--fg-3);">사이트가 방금 업데이트되어 그림을 불러오지 못했어요. `
        + `<button type="button" onclick="location.reload()" style="padding:2px 10px;border-radius:6px;border:1px solid var(--border-default);background:var(--bg-card);color:var(--fg-1);font:inherit;cursor:pointer;">새로고침</button>`
        + ` 하면 그림으로 보여요(시험 중이면 답안이 초기화될 수 있어요).</div>`
      : '')
    + `</div>`;
}

// ER 다이어그램 — mermaid erDiagram 으로 진짜 ERD SVG 렌더.
// 데이터에 mermaid 코드 그대로 박힘. 'entity-diagram' 후속 (PR #100 spec).
// 다크모드는 data-theme 감지 + themeVariables 분기. 같은 페이지 여러 ERD 도
// useId 로 ID 충돌 방지.
// ERD 원래 크기 보기 — 전체 화면 위에 띄우고 좌우·상하로 스크롤한다. Esc·닫기·바깥 영역으로 닫는다.
function ErdZoom({ svg, caption, onClose }: { svg: string; caption?: string; onClose: () => void }) {
  const box = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const el = box.current?.querySelector('svg');
    const vb = el?.viewBox?.baseVal;
    if (el && vb && vb.width > 0) {
      el.setAttribute('width', String(Math.ceil(vb.width)));
      el.setAttribute('height', String(Math.ceil(vb.height)));
      el.style.maxWidth = 'none';
      el.style.display = 'block';
      el.style.margin = '0 auto';
    }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  return (
    <div role="dialog" aria-modal="true" aria-label="ERD 크게 보기" onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.45)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 12,
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: 'var(--bg-card)', borderRadius: 12, width: '100%', maxWidth: 960, maxHeight: '100%',
        display: 'flex', flexDirection: 'column', overflow: 'hidden', border: '1px solid var(--border-subtle)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderBottom: '1px solid var(--border-subtle)' }}>
          <span style={{ fontSize: 13, color: 'var(--fg-2)', fontWeight: 600 }}>{caption || 'ERD'}</span>
          <button type="button" onClick={onClose} style={{
            padding: '4px 12px', borderRadius: 8, border: '1px solid var(--border-default)',
            background: 'var(--bg-card)', color: 'var(--fg-1)', font: 'inherit', fontSize: 13, cursor: 'pointer',
          }}>닫기</button>
        </div>
        <div ref={box} style={{ overflow: 'auto', padding: 16, WebkitOverflowScrolling: 'touch' }}
          dangerouslySetInnerHTML={{ __html: svg }} />
      </div>
    </div>
  );
}

function RefErd({ mermaid: code, caption, instanceTable }: any) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reactId = React.useId().replace(/[:]/g, '-');
  // data-theme 변경 감지 — 다크모드 전환 시 mermaid 다시 렌더
  const [theme, setTheme] = React.useState<string>(() =>
    typeof document !== 'undefined' ? (document.documentElement.dataset.theme || 'light') : 'light'
  );
  React.useEffect(() => {
    if (typeof document === 'undefined') return;
    const obs = new MutationObserver(() => {
      const t = document.documentElement.dataset.theme || 'light';
      setTheme(prev => prev !== t ? t : prev);
    });
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => obs.disconnect();
  }, []);

  // 화면 폭에 맞춰 줄어든 ERD 는 글씨가 작다(문의 1562) → '크게 보기' 로 원래 크기를 전체 화면에서 본다
  const svgMarkup = React.useRef('');
  const [scaled, setScaled] = React.useState(false);
  const [zoom, setZoom] = React.useState(false);

  React.useEffect(() => {
    if (!code) return;
    let cancelled = false;
    setScaled(false);
    loadMermaid().then(({ default: mermaid }) => {
      if (cancelled) return;
      const isDark = theme === 'dark';
      mermaid.initialize({
        startOnLoad: false,
        theme: 'base',
        themeVariables: {
          fontFamily: 'Pretendard Variable, -apple-system, sans-serif',
          // 양파 그린 (TheoryScreens.tsx 와 동일 토큰 값)
          primaryColor: isDark ? '#1F2A1F' : '#EBF5EC',
          primaryTextColor: isDark ? '#E5E7EB' : '#1F2320',
          primaryBorderColor: '#2E7D32',
          lineColor: isDark ? '#A5D6A7' : '#2E7D32',
          secondaryColor: isDark ? '#262E26' : '#F0F7F1',
          tertiaryColor: isDark ? '#1A1F1A' : '#FFFFFF',
          mainBkg: isDark ? '#1F2A1F' : '#EBF5EC',
          edgeLabelBackground: isDark ? '#262E26' : '#FFFFFF',
          attributeBackgroundColorOdd: isDark ? '#1A1F1A' : '#FFFFFF',
          attributeBackgroundColorEven: isDark ? '#262E26' : '#F0F7F1',
        },
        securityLevel: 'loose',
        // 실패해도 mermaid 가 body 맨 아래에 'Syntax error in text' 폭탄 그림을 붙이지 않게
        suppressErrorRendering: true,
      });
      const renderId = `erd-${reactId}-${isDark ? 'd' : 'l'}`;
      let settled = false;
      // 어떤 브라우저에서 렌더가 끝나지도 실패하지도 않으면 빈 상자로 남는다 (Safari 제보 "ERD 가 빈칸").
      // 8초 안에 그림이 안 나오면 표기를 글로 먼저 보여 주고, 늦게라도 그림이 오면 바꿔 끼운다.
      const watchdog = setTimeout(() => {
        if (settled || cancelled || !ref.current) return;
        trackEvent('erd_render_error', { message: 'timeout', ua: navigator.userAgent.slice(0, 100) });
        ref.current.innerHTML = erdFallbackHtml(code);
      }, 8000);
      const show = ({ svg }: { svg: string }) => {
        settled = true; clearTimeout(watchdog);
        if (cancelled || !ref.current) return;
        ref.current.innerHTML = svg;
        // mermaid 는 width="100%" + style max-width 로 크기를 주는데, Safari 의 flex 컨테이너에서는
        // 이 조합이 폭 0 으로 접혀 그림이 안 보일 수 있다. viewBox 크기를 width/height 로 박고
        // max-width:100%·height:auto 로 줄어들게만 한다 (모든 브라우저에서 같은 결과).
        const el = ref.current.querySelector('svg');
        const vb = el?.viewBox?.baseVal;
        if (el && vb && vb.width > 0 && vb.height > 0) {
          el.setAttribute('width', String(Math.ceil(vb.width)));
          el.setAttribute('height', String(Math.ceil(vb.height)));
          el.style.maxWidth = '100%';
          el.style.height = 'auto';
          el.style.flexShrink = '1';
          svgMarkup.current = svg;
          // 원래 크기의 85% 보다 작게 줄어들었을 때만 버튼을 보인다
          setScaled((ref.current.clientWidth || vb.width) < vb.width * 0.85);
        }
      };
      mermaid.render(renderId, code).then(show).catch(() =>
        // 같은 id 의 이전 렌더 잔여물 등 일시적인 실패일 수 있으니 새 id 로 한 번 더
        new Promise(r => setTimeout(r, 250)).then(() => mermaid.render(`${renderId}-r${Date.now() % 100000}`, code)).then(show)
      ).catch(err => {
        settled = true; clearTimeout(watchdog);
        // 실패한 렌더가 남긴 임시 요소 정리 (mermaid 는 id 앞에 d 를 붙인 래퍼를 body 에 만든다)
        document.querySelectorAll(`[id^="d${renderId}"]`).forEach(n => n.remove());
        const msg = String(err?.message || err).slice(0, 120);
        console.warn('[RefErd] render failed', msg);
        trackEvent('erd_render_error', { message: msg, ua: navigator.userAgent.slice(0, 100) });
        if (!cancelled && ref.current) ref.current.innerHTML = erdFallbackHtml(code, isChunkLoadError(msg));
      });
    }).catch(err => {
      console.warn('[RefErd] mermaid load failed', err);
      // 빈 상자로 두지 않고 안내 (배포 직후 옛 청크 404 등)
      if (!cancelled && ref.current) ref.current.innerHTML = mermaidLoadFailedHtml();
    });
    return () => { cancelled = true; };
  }, [code, theme, reactId]);

  return (
    <div style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 12,
      overflow: 'hidden',
      padding: '14px 12px',
    }}>
      {caption && <div style={{ ...CAPTION_STYLE, padding: '0 6px 8px' }}>{caption}</div>}
      <div ref={ref} style={{
        display: 'flex', justifyContent: 'center',
        overflowX: 'auto', minHeight: 80,
      }} aria-label="ER 다이어그램" />
      {scaled && (
        <div style={{ textAlign: 'center', marginTop: 6 }}>
          <button type="button" onClick={() => setZoom(true)} style={{
            padding: '4px 12px', borderRadius: 8, border: '1px solid var(--border-default)',
            background: 'var(--bg-card)', color: 'var(--fg-2)', font: 'inherit', fontSize: 12.5, cursor: 'pointer',
          }}>크게 보기</button>
        </div>
      )}
      {zoom && <ErdZoom svg={svgMarkup.current} caption={caption} onClose={() => setZoom(false)} />}
      {instanceTable && (
        <div style={{ marginTop: 14, padding: '0 6px' }}>
          <div style={{ fontSize: 11.5, color: 'var(--fg-3)', fontWeight: 600, marginBottom: 6, textAlign: 'center' }}>
            [ {instanceTable.of} ] 인스턴스
          </div>
          <RefTable headers={instanceTable.headers} rows={instanceTable.rows} />
        </div>
      )}
    </div>
  );
}

function RefHtml({ html, caption }: any) {
  // 주의: 이 경로는 파서가 만든 신뢰된 HTML 에만 사용 (사용자 입력 아님).
  // 그래도 script·iframe·on* 속성은 혹시 섞이면 제거.
  const sanitized = (html || '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<iframe[\s\S]*?<\/iframe>/gi, '')
    .replace(/\son\w+\s*=\s*"[^"]*"/gi, '')
    .replace(/\son\w+\s*=\s*'[^']*'/gi, '')
    .replace(/javascript:/gi, '');
  return (
    <div>
      {caption && <div style={CAPTION_STYLE}>{caption}</div>}
      <div
        style={{
          fontSize: 13.5,
          lineHeight: 1.6,
          color: 'var(--fg-2)',
          overflowX: 'auto',
        }}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: sanitized }}
      />
    </div>
  );
}

function RefImage({ src, alt, caption }: { src: string; alt?: string; caption?: string }) {
  return (
    <div>
      {caption ? <div style={CAPTION_STYLE}>{caption}</div> : null}
      <img
        src={src}
        alt={alt || '문항 이미지'}
        style={{
          maxWidth: '100%',
          height: 'auto',
          borderRadius: 6,
          border: '1px solid var(--border-subtle)',
          display: 'block',
        }}
        loading="lazy"
      />
    </div>
  );
}

function renderBlock(r: QuestionReference, i: number) {
  switch (r.type) {
    case 'text':  return <RefText  key={i} {...r as any}/>;
    case 'sql':   return <RefSql   key={i} {...r as any}/>;
    case 'table': return <RefTable key={i} {...r as any}/>;
    case 'ascii': return <RefAscii key={i} {...r as any}/>;
    case 'html':  return <RefHtml  key={i} {...r as any}/>;
    case 'image': return <RefImage key={i} {...r as any}/>;
    case 'entity-diagram': return <RefEntityDiagram key={i} {...r as any}/>;
    case 'erd':   return <RefErd   key={i} {...r as any}/>;
    default: return null;
  }
}

/** 질문용 "보기" 카드 — 제목과 선택지 사이에 렌더 */
export const QuestionReferences = ({ refs }: { refs?: QuestionReference[] }) => {
  if (!refs || refs.length === 0) return null;

  return (
    <section className="question-refs" style={{
      margin: '14px 0 0',
      padding: '16px 18px',
      background: 'var(--bg-surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
    }}>
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 11,
        fontWeight: 700,
        color: 'var(--point-600)',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
      }}>
        <span style={{
          width: 3, height: 12, background: 'var(--point-600)', borderRadius: 2, display: 'inline-block',
        }}/>
        보기
      </div>
      {refs.map(renderBlock)}
    </section>
  );
};

/** 선택지 내부 보기 — 선택지 텍스트 아래에 좀 더 작게 렌더 */
export const OptionReferences = ({ refs }: { refs?: QuestionReference[] }) => {
  if (!refs || refs.length === 0) return null;
  return (
    <div style={{
      marginTop: 10,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
    }}>
      {refs.map(renderBlock)}
    </div>
  );
};
