// @ts-nocheck
// 사이트 푸터 — 이용약관 + 개인정보 처리방침
import React from 'react';

const linkStyle = { color: 'var(--fg-3)', textDecoration: 'none', margin: '0 8px' };
const onHoverIn = (e) => { e.currentTarget.style.color = 'var(--point-600)'; };
const onHoverOut = (e) => { e.currentTarget.style.color = 'var(--fg-3)'; };

export const Footer = () => (
  <footer style={{
    borderTop: '1px solid var(--border-subtle)',
    padding: '20px 28px 32px',
    marginTop: 48,
    textAlign: 'center',
    fontSize: 12,
    color: 'var(--fg-3)',
  }}>
    <a href="/terms.html" style={linkStyle} onMouseEnter={onHoverIn} onMouseLeave={onHoverOut}>
      이용약관
    </a>
    ·
    <a href="/privacy.html" style={linkStyle} onMouseEnter={onHoverIn} onMouseLeave={onHoverOut}>
      개인정보 처리방침
    </a>
  </footer>
);
