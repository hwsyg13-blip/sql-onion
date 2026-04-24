// @ts-nocheck
// 사이트 푸터 — 개인정보처리방침 링크 + 간단한 저작권
import React from 'react';

export const Footer = () => (
  <footer style={{
    borderTop: '1px solid var(--border-subtle)',
    padding: '22px 28px 40px',
    marginTop: 48,
    textAlign: 'center',
    fontSize: 12,
    color: 'var(--fg-3)',
    lineHeight: 1.8,
  }}>
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
      <a href="/privacy.html" style={{ color: 'var(--fg-3)', textDecoration: 'none' }}
         onMouseEnter={e => e.currentTarget.style.color = 'var(--point-600)'}
         onMouseLeave={e => e.currentTarget.style.color = 'var(--fg-3)'}>
        개인정보처리방침
      </a>
      <span style={{ color: 'var(--border-default)' }}>|</span>
      <a href="https://github.com/hwsyg13-blip/sql-onion" target="_blank" rel="noopener"
         style={{ color: 'var(--fg-3)', textDecoration: 'none' }}
         onMouseEnter={e => e.currentTarget.style.color = 'var(--point-600)'}
         onMouseLeave={e => e.currentTarget.style.color = 'var(--fg-3)'}>
        GitHub
      </a>
    </div>
    <div style={{ marginTop: 8, fontSize: 11, color: 'var(--fg-4)' }}>
      © SQL양파 · SQLD 기출복원은 yunamom.tistory.com 등 공개 자료를 참고했습니다
    </div>
  </footer>
);
