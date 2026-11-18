// @ts-nocheck
// 마이페이지 — 로그인 전에는 카카오 로그인 카드만, 로그인 후에는 계정 카드 + 메뉴 + 로그아웃.
// 시안: 디자인 캔버스 ② 마이페이지·로그인 전, ③ 마이페이지(프리미엄 영역은 결제 붙일 때 추가)
import React from 'react';
import { Ic } from '../components/Atoms';
import { signInWithKakao } from '../lib/auth';

const KakaoBubble = ({ size = 20 }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 4C6.9 4 3 7.2 3 11.1c0 2.5 1.6 4.7 4.1 5.9l-1 3.6c-.1.3.3.6.6.4l4.2-2.8c.4 0 .7.1 1.1.1 5.1 0 9-3.2 9-7.2S17.1 4 12 4z" fill="#191919"/>
  </svg>
);

const LoginCard = () => {
  const [busy, setBusy] = React.useState(false);
  const [error, setError] = React.useState('');
  const start = async () => {
    setError('');
    setBusy(true);
    try {
      await signInWithKakao();
      // 성공하면 카카오 화면으로 이동하므로 여기서 더 할 일은 없다
    } catch (e: any) {
      setBusy(false);
      setError('카카오 로그인을 시작하지 못했어요. 잠시 뒤 다시 시도해 주세요.');
    }
  };
  return (
    <section aria-label="로그인" style={{
      padding: '36px 20px 24px', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
      borderRadius: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20,
    }}>
      <img src="/assets/onion-mascot.svg" alt="" width="96" height="96" style={{ display: 'block' }}/>
      <h1 style={{ margin: 0, fontSize: 21, fontWeight: 700, lineHeight: 1.45, textAlign: 'center', color: 'var(--fg-1)', wordBreak: 'keep-all' }}>
        학습 기록을 남기고<br/>합격까지 달려보세요!
      </h1>
      <button onClick={start} disabled={busy} style={{
        alignSelf: 'stretch', marginTop: 4, height: 56, border: 0, borderRadius: 12,
        background: '#FEE500', color: '#191919', fontFamily: 'inherit', fontSize: 16, fontWeight: 700,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        cursor: busy ? 'default' : 'pointer', opacity: busy ? 0.7 : 1,
      }}>
        <KakaoBubble/>{busy ? '카카오로 이동하고 있어요' : '카카오로 시작하기'}
      </button>
      {error && <p role="alert" style={{ margin: 0, fontSize: 13, color: 'var(--wrong-fg, #B42318)', textAlign: 'center' }}>{error}</p>}
    </section>
  );
};

const MenuRow = ({ icon, label, href, onClick, last }: any) => {
  const style: any = {
    minHeight: 52, padding: '0 16px', display: 'flex', alignItems: 'center', gap: 12,
    fontSize: 15, color: 'var(--fg-1)', textDecoration: 'none', background: 'none', border: 0,
    borderBottom: last ? 0 : '1px solid var(--border-subtle)', width: '100%', fontFamily: 'inherit',
    cursor: 'pointer', textAlign: 'left',
  };
  const inner = (<>{icon}<span style={{ flexGrow: 1 }}>{label}</span><Ic.ChevronRight size={16}/></>);
  return href ? <a href={href} style={style}>{inner}</a> : <button onClick={onClick} style={style}>{inner}</button>;
};

const rowIcon = (d: string) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--fg-3)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d}/></svg>
);

const AccountView = ({ user, onLogout }: any) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    <section aria-label="계정" style={{
      padding: 20, background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 16,
      display: 'flex', alignItems: 'center', gap: 12,
    }}>
      {user.avatarUrl
        ? <img src={user.avatarUrl} alt="" width="52" height="52" style={{ borderRadius: 999, objectFit: 'cover', flexShrink: 0 }}/>
        : <span style={{
            width: 52, height: 52, flexShrink: 0, borderRadius: 999, background: 'var(--point-050)', color: 'var(--point-600)',
            fontSize: 20, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>{user.avatar}</span>}
      <span style={{ flexGrow: 1, minWidth: 0 }}>
        <span style={{ display: 'block', fontSize: 17, fontWeight: 700, color: 'var(--fg-1)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.name}</span>
        {user.email && <span style={{ display: 'block', fontSize: 13, color: 'var(--fg-3)', marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.email}</span>}
      </span>
      <span aria-label="카카오 계정" title="카카오 계정" style={{
        width: 28, height: 28, borderRadius: 8, background: '#FEE500', flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}><KakaoBubble size={16}/></span>
    </section>

    <nav aria-label="메뉴" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 16, overflow: 'hidden' }}>
      <MenuRow href="/about/" label="문의·오류 제보" icon={rowIcon('M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.7M12 17h.01')}/>
      <MenuRow href="/terms.html" label="이용약관" icon={rowIcon('M7 3h8l4 4v14H7zM10 12h6M10 16h6')}/>
      <MenuRow href="/privacy.html" label="개인정보처리방침" icon={rowIcon('M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6z')} last/>
    </nav>

    <button onClick={onLogout} style={{
      alignSelf: 'flex-start', minHeight: 40, padding: '0 4px', border: 0, background: 'transparent',
      fontFamily: 'inherit', fontSize: 14, color: 'var(--fg-3)', cursor: 'pointer',
    }}>로그아웃</button>
  </div>
);

export const MyPageScreen = ({ user, loading, onLogout }: any) => (
  <div style={{ maxWidth: 480, margin: '0 auto', padding: '32px 16px 96px', minHeight: '60vh' }}>
    {loading
      ? <p style={{ textAlign: 'center', color: 'var(--fg-3)', fontSize: 14, marginTop: 80 }}>불러오는 중…</p>
      : user ? <AccountView user={user} onLogout={onLogout}/> : <LoginCard/>}
  </div>
);
