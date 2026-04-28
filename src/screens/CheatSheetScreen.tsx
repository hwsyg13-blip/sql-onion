// @ts-nocheck
import React from 'react';
import { Btn, Ic, Mascot } from '../components/Atoms';
import { EXAM_DAY_SUMMARY_HTML } from '../data/examDaySummary';

// Day 21 (시험 당일) 핵심 총정리 — 챕터별 정리 + 빈출 함정 + 당일 체크리스트.
// 콘텐츠는 'SQLD 이론/_mockups/exam-day-summary.html' 에서 자동 추출.
// 페이지 스타일은 src/styles/examDaySummary.css 가 main.tsx 에서 로드.

export const CheatSheetScreen = ({onNavigate}: any) => {
  const bodyRef = React.useRef<HTMLDivElement>(null);

  // .day-toc 의 #chapters / #checklist 같은 hash 링크를 SPA 안에서도 동작시키기 위해
  // 클릭 시 native scroll 처리. (window.location 변경 없이 element.scrollIntoView)
  React.useEffect(() => {
    const root = bodyRef.current;
    if (!root) return;
    const handler = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute('href')?.slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    root.addEventListener('click', handler);
    return () => root.removeEventListener('click', handler);
  }, []);

  return (
    <div style={{maxWidth: 920, margin: '0 auto', padding: '32px 28px 80px'}}>
      <button
        onClick={() => { if (typeof window !== 'undefined' && window.history.length > 1) window.history.back(); else onNavigate('plan'); }}
        title="뒤로가기"
        style={{
          width: 36, height: 36, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          background: 'var(--bg-card)', border: '1px solid var(--border-default)', borderRadius: 10,
          cursor: 'pointer', color: 'var(--fg-2)', padding: 0, marginBottom: 24,
        }}
      ><Ic.ArrowLeft size={18}/></button>

      <header style={{textAlign: 'center', marginBottom: 24}}>
        <Mascot size={110} variant="smile"/>
        <div style={{display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--point-600)', fontSize: 12, fontWeight: 700, letterSpacing: '0.04em', marginTop: 18, marginBottom: 8}}>
          <Ic.Sparkles size={14}/> Day 21 · 시험 당일
        </div>
        <h1 style={{fontSize: 32, fontWeight: 800, color: 'var(--fg-1)', letterSpacing: '-0.02em', margin: '0 0 12px'}}>
          시험 당일 핵심 총정리
        </h1>
        <p style={{fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.7, margin: 0, maxWidth: 520, marginInline: 'auto'}}>
          시험 직전 통독용. <strong style={{color: 'var(--fg-1)'}}>챕터별 핵심 + 빈출 함정</strong> 한 묶음 · 당일 체크리스트.
        </p>
      </header>

      <article ref={bodyRef} className="theory-md" dangerouslySetInnerHTML={{ __html: EXAM_DAY_SUMMARY_HTML }} />

      <div style={{display: 'flex', justifyContent: 'center', marginTop: 36}}>
        <Btn variant="ghost" icon={<Ic.ArrowLeft/>} onClick={() => onNavigate('plan')}>3주 계획으로</Btn>
      </div>
    </div>
  );
};
