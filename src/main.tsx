import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/theoryPages.css';
import './styles/examDaySummary.css';
import { App } from './App';
import { initGA } from './lib/analytics';

initGA();

// 콘텐츠 보호 — 우클릭/복사/잘라내기/드래그/선택/인쇄 차단
// (글을 써야 하는 input·textarea·contenteditable 안에서만 선택·복사 허용. SQL 코드 블록도 막는다)
(() => {
  if (typeof window === 'undefined') return;
  const isAllowed = (el: any) => {
    if (!el) return false;
    return !!el.closest?.('input, textarea, [contenteditable="true"]');
  };
  const block = (e: Event) => {
    if (isAllowed(e.target)) return;
    e.preventDefault();
  };
  document.addEventListener('contextmenu', block);
  document.addEventListener('copy', block);
  document.addEventListener('cut', block);
  document.addEventListener('selectstart', block);
  document.addEventListener('dragstart', block);
  // 인쇄(Ctrl/Cmd + P)·페이지 저장(Ctrl/Cmd + S) 단축키 차단. 메뉴로 인쇄해도 @media print 에서 내용을 숨긴다(index.css)
  document.addEventListener('keydown', (e: KeyboardEvent) => {
    const k = e.key?.toLowerCase();
    if ((e.ctrlKey || e.metaKey) && (k === 'p' || k === 's')) e.preventDefault();
  });
})();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
