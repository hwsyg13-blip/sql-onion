// @ts-nocheck
import React from 'react';
import { Btn, Ic, Mascot } from '../components/Atoms';

// 시험 전날(Day 21) 학습 자료 — 핵심 개념·함정 30초 정리.
// 콘텐츠는 추후 추가. 일단 placeholder.

export const CheatSheetScreen = ({onNavigate}: any) => (
  <div style={{maxWidth: 720, margin: '0 auto', padding: '40px 28px 80px'}}>
    <button
      onClick={() => { if (typeof window !== 'undefined' && window.history.length > 1) window.history.back(); else onNavigate('plan'); }}
      title="뒤로가기"
      style={{
        width: 36, height: 36, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: 'var(--bg-card)', border: '1px solid var(--border-default)', borderRadius: 10,
        cursor: 'pointer', color: 'var(--fg-2)', padding: 0, marginBottom: 24,
      }}
    ><Ic.ArrowLeft size={18}/></button>

    <div style={{textAlign: 'center'}}>
      <Mascot size={110} variant="smile"/>
      <div style={{display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--point-600)', fontSize: 12, fontWeight: 700, letterSpacing: '0.04em', marginTop: 18, marginBottom: 8}}>
        <Ic.Sparkles size={14}/> 시험 전날 · Day 21
      </div>
      <h1 style={{fontSize: 32, fontWeight: 800, color: 'var(--fg-1)', letterSpacing: '-0.02em', margin: '0 0 12px'}}>
        최종 암기장
      </h1>
      <p style={{fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.7, margin: 0, maxWidth: 480, marginInline: 'auto'}}>
        시험장 들어가기 직전, 30초 안에 훑어볼 수 있는<br/>
        <strong style={{color: 'var(--fg-1)'}}>핵심 개념·자주 틀리는 함정</strong> 모음.
      </p>
    </div>

    <div style={{
      marginTop: 36,
      padding: '32px 28px',
      background: 'var(--bg-card)',
      border: '1px dashed var(--border-default)',
      borderRadius: 16,
      textAlign: 'center',
    }}>
      <div style={{fontSize: 13, fontWeight: 700, color: 'var(--point-600)', letterSpacing: '0.04em', marginBottom: 10}}>
        준비 중
      </div>
      <div style={{fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.7}}>
        시험 1주 전부터 단계별로 공개됩니다.<br/>
        지금은 <button onClick={() => onNavigate('exams')} style={{background:'none',border:0,padding:0,color:'var(--point-600)',cursor:'pointer',textDecoration:'underline',fontFamily:'inherit',fontSize:14}}>기출 회독</button>으로 마무리해 주세요.
      </div>
    </div>

    <div style={{display: 'flex', justifyContent: 'center', marginTop: 28}}>
      <Btn variant="ghost" icon={<Ic.ArrowLeft/>} onClick={() => onNavigate('plan')}>3주 계획으로</Btn>
    </div>
  </div>
);
