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
import { CodeBlock } from './Atoms';

export type QuestionReference =
  | { type: 'text'; content: string; heading?: string }
  | { type: 'sql'; code: string; caption?: string }
  | { type: 'table'; headers: string[]; rows: string[][]; caption?: string }
  | { type: 'ascii'; text: string; caption?: string }
  | { type: 'html'; html: string; caption?: string }
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

/** **bold** / *italic* / `code` / [text](url) → React 노드로 변환 (XSS 방지 위해 텍스트만) */
export function renderInlineMd(text: string) {
  if (!text) return null;
  // 단순 토크나이저: 양식 마커 기준으로 split
  const tokens = [];
  const re = /(\*\*([^*\n]+?)\*\*)|(`([^`\n]+?)`)|(\*([^*\n]+?)\*)/g;
  let last = 0, m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) tokens.push({ type: 'text', value: text.slice(last, m.index) });
    if (m[1]) tokens.push({ type: 'b', value: m[2] });
    else if (m[3]) tokens.push({ type: 'code', value: m[4] });
    else if (m[5]) tokens.push({ type: 'i', value: m[6] });
    last = m.index + m[0].length;
  }
  if (last < text.length) tokens.push({ type: 'text', value: text.slice(last) });
  return tokens.map((t, i) => {
    if (t.type === 'b') return <strong key={i} style={{ fontWeight: 700, color: 'var(--fg-1)' }}>{t.value}</strong>;
    if (t.type === 'i') return <em key={i}>{t.value}</em>;
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

// ER 다이어그램 — mermaid erDiagram 으로 진짜 ERD SVG 렌더.
// 데이터에 mermaid 코드 그대로 박힘. 'entity-diagram' 후속 (PR #100 spec).
// 다크모드는 data-theme 감지 + themeVariables 분기. 같은 페이지 여러 ERD 도
// useId 로 ID 충돌 방지.
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

  React.useEffect(() => {
    if (!code) return;
    let cancelled = false;
    import('mermaid').then(({ default: mermaid }) => {
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
      });
      const renderId = `erd-${reactId}-${isDark ? 'd' : 'l'}`;
      mermaid.render(renderId, code).then(({ svg }) => {
        if (!cancelled && ref.current) ref.current.innerHTML = svg;
      }).catch(err => {
        if (!cancelled && ref.current) {
          ref.current.innerHTML = `<pre style="color:var(--wrong-fg);font-size:12px;white-space:pre-wrap;">ERD 렌더 실패: ${String(err?.message || err).replace(/[<>&]/g, '')}</pre>`;
        }
      });
    }).catch(err => {
      console.warn('[RefErd] mermaid load failed', err);
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

function renderBlock(r: QuestionReference, i: number) {
  switch (r.type) {
    case 'text':  return <RefText  key={i} {...r as any}/>;
    case 'sql':   return <RefSql   key={i} {...r as any}/>;
    case 'table': return <RefTable key={i} {...r as any}/>;
    case 'ascii': return <RefAscii key={i} {...r as any}/>;
    case 'html':  return <RefHtml  key={i} {...r as any}/>;
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
