// @ts-nocheck
// 사이트 푸터 — 개인정보처리방침 링크만
import React from 'react';

export const Footer = () => (
  <footer style={{
    borderTop: '1px solid var(--border-subtle)',
    padding: '20px 28px 32px',
    marginTop: 48,
    textAlign: 'center',
    fontSize: 12,
    color: 'var(--fg-3)',
  }}>
    <a href="/privacy.html" style={{ color: 'var(--fg-3)', textDecoration: 'none' }}
       onMouseEnter={e => e.currentTarget.style.color = 'var(--point-600)'}
       onMouseLeave={e => e.currentTarget.style.color = 'var(--fg-3)'}>
      개인정보처리방침
    </a>
  </footer>
);
