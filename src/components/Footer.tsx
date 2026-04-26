// @ts-nocheck
// 사이트 푸터 — 법적 링크 + 연락처.
// 주의: /terms.html, /refund.html 은 아직 생성 전(PO 확정 + 본문 작성 후 public/ 에 배치).
import React from 'react';

const linkStyle: React.CSSProperties = {
  color: 'var(--fg-3)', textDecoration: 'none', transition: 'color 150ms',
};

const FooterLink = ({ href, children }: any) => (
  <a
    href={href}
    style={linkStyle}
    onMouseEnter={e => (e.currentTarget.style.color = 'var(--point-600)')}
    onMouseLeave={e => (e.currentTarget.style.color = 'var(--fg-3)')}
  >{children}</a>
);

export const Footer = () => (
  <footer style={{
    borderTop: '1px solid var(--border-subtle)',
    padding: '24px 28px 40px',
    marginTop: 48,
    fontSize: 12,
    color: 'var(--fg-3)',
    background: 'var(--bg-page)',
  }}>
    <div style={{
      maxWidth: 1080, margin: '0 auto',
      display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center', textAlign: 'center',
    }}>
      <nav style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
        <FooterLink href="/privacy.html">개인정보처리방침</FooterLink>
        <FooterLink href="/terms.html">이용약관</FooterLink>
        <FooterLink href="/refund.html">환불정책</FooterLink>
        <FooterLink href="mailto:hwsyg13@gmail.com">문의</FooterLink>
      </nav>
      <div style={{ color: 'var(--fg-4)', fontSize: 11.5, lineHeight: 1.7 }}>
        © 2026 SQL양파 · 학습용 자료이며 실제 시험 문제와 동일하지 않습니다.
      </div>
    </div>
  </footer>
);
