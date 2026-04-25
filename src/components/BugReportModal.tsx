// @ts-nocheck
// 기출/모의 문항 오류 제보 모달
// 제출 방식: VITE_BUG_REPORT_URL (Google Apps Script 웹앱 URL) 로 POST
// 설정 안 돼 있으면 clipboard 복사 + 안내 메시지로 fallback

import React from 'react';
import { Btn, Ic } from './Atoms';

const ENDPOINT = import.meta.env.VITE_BUG_REPORT_URL as string | undefined;

export type BugContext = {
  round?: number;
  subject?: string;
  number?: number;
  examLabel?: string;
  title?: string;
};

export const BugReportModal = ({ ctx, onClose }: { ctx: BugContext; onClose: () => void }) => {
  const [text, setText] = React.useState('');
  const [sending, setSending] = React.useState(false);
  const [status, setStatus] = React.useState<'idle' | 'ok' | 'fail' | 'copied'>('idle');
  const [errMsg, setErrMsg] = React.useState('');

  const submit = async () => {
    if (!text.trim()) return;
    setSending(true);
    setStatus('idle');
    const payload = {
      round: ctx.round,
      subject: ctx.subject,
      number: ctx.number,
      examLabel: ctx.examLabel,
      title: ctx.title,
      content: text.trim(),
      reportedAt: new Date().toISOString(),
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
    };

    if (ENDPOINT) {
      try {
        // Apps Script 웹앱은 no-cors 모드로만 호출 가능 (CORS 미지원)
        await fetch(ENDPOINT, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(payload),
        });
        setStatus('ok');
        setTimeout(onClose, 1500);
      } catch (e: any) {
        console.error('[bug-report] submit failed', e);
        setStatus('fail');
        setErrMsg(e?.message || '전송 실패');
      }
    } else {
      // fallback: clipboard 복사 + 알림
      try {
        await navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
        setStatus('copied');
      } catch {
        setStatus('fail');
        setErrMsg('클립보드 복사 실패');
      }
    }
    setSending(false);
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.45)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 200, padding: 20,
    }} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div style={{
        background: 'var(--bg-card)', borderRadius: 14, width: '100%', maxWidth: 480,
        boxShadow: 'var(--shadow-lg)', padding: '22px 24px',
        display: 'flex', flexDirection: 'column', gap: 14,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8, background: 'var(--wrong-bg)', color: 'var(--wrong-fg)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          }}>!</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--fg-1)' }}>오류 제보</div>
            <div style={{ fontSize: 12, color: 'var(--fg-3)', marginTop: 2 }}>
              문제·정답·해설의 오류를 알려주세요
            </div>
          </div>
          <button onClick={onClose} style={{
            background: 'transparent', border: 0, cursor: 'pointer', color: 'var(--fg-3)',
            padding: 4, display: 'inline-flex',
          }}><Ic.X size={18}/></button>
        </div>

        <div style={{
          background: 'var(--bg-muted)', borderRadius: 10, padding: '10px 12px',
          fontSize: 12.5, color: 'var(--fg-2)', display: 'flex', flexWrap: 'wrap', gap: 8,
        }}>
          {ctx.examLabel && <span><strong>회차</strong>: {ctx.examLabel}</span>}
          {ctx.subject && <span><strong>과목</strong>: {ctx.subject}</span>}
          {ctx.number != null && <span><strong>문항</strong>: {ctx.number}번</span>}
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="예) 정답이 ③이어야 하는데 ②로 표시됩니다. / 선택지 ④에 오타가 있어요. / ERD 도식에서 관계 선이 잘못 그려졌어요."
          rows={6}
          style={{
            width: '100%', boxSizing: 'border-box',
            border: '1px solid var(--border-default)', borderRadius: 10, padding: '12px 14px',
            fontSize: 14, fontFamily: 'inherit', color: 'var(--fg-1)',
            resize: 'vertical', outline: 'none', background: 'var(--bg-card)',
          }}
          autoFocus
        />

        {status === 'ok' && (
          <div style={{ fontSize: 13, color: 'var(--correct-fg)', textAlign: 'center' }}>
            제보 감사합니다. 검토 후 반영할게요 :)
          </div>
        )}
        {status === 'copied' && (
          <div style={{ fontSize: 12.5, color: 'var(--info-fg)', background: 'var(--info-bg)', padding: '8px 12px', borderRadius: 8 }}>
            제보 내용이 클립보드에 복사됐어요. (제보 접수 시스템 연결 전이라 관리자에게 직접 전달 부탁드려요)
          </div>
        )}
        {status === 'fail' && (
          <div style={{ fontSize: 12.5, color: 'var(--wrong-fg)' }}>전송 실패: {errMsg}</div>
        )}

        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
          <Btn variant="ghost" onClick={onClose}>취소</Btn>
          <Btn onClick={submit} disabled={!text.trim() || sending || status === 'ok'}>
            {sending ? '전송 중...' : '제출하기'}
          </Btn>
        </div>
      </div>
    </div>
  );
};
