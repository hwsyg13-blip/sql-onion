import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/theoryPages.css';
import './styles/examDaySummary.css';
import { App } from './App';
import { initGA } from './lib/analytics';

initGA();

// 콘텐츠 보호 — 우클릭/복사/잘라내기/드래그 차단
// (input·textarea·contenteditable·pre·code·.allow-select 안에서는 허용)
(() => {
  if (typeof window === 'undefined') return;
  const isAllowed = (el: any) => {
    if (!el) return false;
    return !!el.closest?.('input, textarea, [contenteditable="true"], pre, code, .allow-select');
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
})();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
