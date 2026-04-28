// @ts-nocheck
// 화면 단위 에러 바운더리 — 컴포넌트 throw 시 흰 화면 대신 복구 UI 노출.
// App.tsx 에서 {screen} 을 감싸도록 사용. TopNav/Footer/MobileNav 는 boundary
// 바깥에 두어 에러 시에도 네비게이션은 유지.

import React from 'react';

type Props = {
  children: React.ReactNode;
  /** route 가 바뀌면 boundary 자동 reset (다음 화면 정상 렌더 시도) */
  resetKey?: any;
};

type State = { error: Error | null };

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidUpdate(prev: Props) {
    if (prev.resetKey !== this.props.resetKey && this.state.error) {
      this.setState({ error: null });
    }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // GA 등 외부 telemetry 에 보낼 수 있는 hook. 지금은 console.error 로만.
    // eslint-disable-next-line no-console
    console.error('[ErrorBoundary]', error, info?.componentStack);
  }

  render() {
    const err = this.state.error;
    if (!err) return this.props.children;

    return (
      <div style={{
        maxWidth: 560, margin: '40px auto', padding: '32px 28px',
        background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
        borderRadius: 16, textAlign: 'center', boxShadow: 'var(--shadow-sm)',
        fontFamily: 'inherit', color: 'var(--fg-1)',
      }}>
        <div style={{
          width: 56, height: 56, margin: '0 auto 16px', borderRadius: '50%',
          background: 'var(--wrong-bg)', color: 'var(--wrong-fg)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 28, fontWeight: 800,
        }}>!</div>
        <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 8px' }}>
          화면을 불러오지 못했어요
        </h2>
        <p style={{ fontSize: 14, color: 'var(--fg-3)', lineHeight: 1.6, margin: '0 0 20px' }}>
          예기치 못한 오류가 발생했습니다. 아래 버튼으로 다시 시도하거나 홈으로 돌아가 주세요.<br/>
          문제가 반복되면 페이지 새로고침을 부탁드려요.
        </p>
        <details style={{
          textAlign: 'left', fontSize: 12, color: 'var(--fg-4)',
          background: 'var(--bg-muted)', padding: '10px 12px', borderRadius: 8,
          margin: '0 0 20px',
        }}>
          <summary style={{ cursor: 'pointer', color: 'var(--fg-3)' }}>오류 정보 (개발자용)</summary>
          <pre style={{
            margin: '8px 0 0', whiteSpace: 'pre-wrap', wordBreak: 'break-word',
            fontFamily: 'var(--font-mono)', fontSize: 11.5,
          }}>{String(err?.stack || err?.message || err)}</pre>
        </details>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
          <button onClick={() => this.setState({ error: null })} style={{
            padding: '10px 18px', borderRadius: 10, fontFamily: 'inherit', fontSize: 14, fontWeight: 700,
            background: 'var(--point-600)', color: '#fff', border: 0, cursor: 'pointer',
          }}>다시 시도</button>
          <button onClick={() => { try { sessionStorage.setItem('sqlo_route', 'home'); } catch {} window.location.assign('/'); }} style={{
            padding: '10px 18px', borderRadius: 10, fontFamily: 'inherit', fontSize: 14, fontWeight: 700,
            background: 'var(--bg-card)', color: 'var(--fg-1)', border: '1px solid var(--border-strong)', cursor: 'pointer',
          }}>홈으로</button>
        </div>
      </div>
    );
  }
}
