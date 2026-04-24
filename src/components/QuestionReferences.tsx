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
  | { type: 'html'; html: string; caption?: string };

const CAPTION_STYLE: React.CSSProperties = {
  fontSize: 11.5,
  color: 'var(--fg-3)',
  fontWeight: 600,
  letterSpacing: '0.02em',
  marginBottom: 6,
};

function RefText({ heading, content }: any) {
  return (
    <div>
      {heading && <div style={CAPTION_STYLE}>{heading}</div>}
      <p style={{
        margin: 0, fontSize: 14.5, lineHeight: 1.7, color: 'var(--fg-2)',
        whiteSpace: 'pre-wrap',
      }}>{content}</p>
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
    default: return null;
  }
}

/** 질문용 "보기" 카드 — 제목과 선택지 사이에 렌더 */
export const QuestionReferences = ({ refs }: { refs?: QuestionReference[] }) => {
  if (!refs || refs.length === 0) return null;

  return (
    <section style={{
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
