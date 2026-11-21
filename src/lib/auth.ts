// @ts-nocheck
// 카카오 로그인 (Vercel 서버 함수 api/auth/* 방식 — Supabase 를 쓰지 않는다)
//
// - 로그인 상태는 서버가 발급한 HttpOnly 쿠키(sqlo_session)에 있고, 브라우저 코드는 /api/auth/me 로만 확인한다.
// - 서버 환경변수(KAKAO_REST_API_KEY·KAKAO_CLIENT_SECRET·SESSION_SECRET)가 없으면 enabled=false 라 화면에 로그인 기능이 안 보인다.
// - 요금제·결제·무료 한도는 아직 없음(App.tsx BETA_NO_AUTH). user.plan 은 늘 'free'.
import React from 'react';

export type SessionUser = {
  id: string;
  name: string;
  email: string;
  avatar: string;      // 이름 첫 글자 (사진이 없을 때 동그라미 안에 표시)
  avatarUrl?: string;  // 카카오 프로필 사진
  provider: 'kakao';
  plan: 'free' | 'pro';
  subscribedAt?: number | null;
};

type AuthState = { enabled: boolean; user: SessionUser | null; loading: boolean };

const AUTH_EVENT = 'sqlo-auth-changed';
const ENABLED_CACHE = 'sqlo_login_enabled';

function readEnabledCache(): boolean {
  try { return sessionStorage.getItem(ENABLED_CACHE) === '1'; } catch { return false; }
}

function toUser(u: any): SessionUser | null {
  if (!u || !u.id) return null;
  const name = u.name || '양파학습자';
  return { id: String(u.id), name, email: u.email || '', avatar: name[0] || '?', avatarUrl: u.avatarUrl || '', provider: 'kakao', plan: 'free', subscribedAt: null };
}

async function fetchMe(): Promise<{ enabled: boolean; user: SessionUser | null }> {
  try {
    const res = await fetch('/api/auth/me', { credentials: 'same-origin', cache: 'no-store' });
    // 로컬 vite dev 처럼 서버 함수가 없으면 HTML 이 오거나 404 — 로그인 꺼짐으로 본다
    if (!res.ok || !(res.headers.get('content-type') || '').includes('application/json')) return { enabled: false, user: null };
    const data = await res.json();
    return { enabled: Boolean(data.enabled), user: toUser(data.user) };
  } catch {
    return { enabled: false, user: null };
  }
}

/** 카카오 동의 화면으로 이동 (서버가 위조 방지 값을 붙여 보낸다) */
export function signInWithKakao() {
  window.location.href = '/api/auth/kakao/start';
}

export async function signOut() {
  try { await fetch('/api/auth/logout', { method: 'POST', credentials: 'same-origin' }); } catch {}
  window.dispatchEvent(new Event(AUTH_EVENT));
}

/** 로그인 기능 켜짐 여부 + 현재 사용자. 첫 화면 깜박임을 줄이려고 '켜짐' 여부만 탭 단위로 기억한다. */
export function useSession(): AuthState {
  const [state, setState] = React.useState<AuthState>(() => ({ enabled: readEnabledCache(), user: null, loading: true }));

  React.useEffect(() => {
    let cancelled = false;
    const load = async () => {
      const me = await fetchMe();
      if (cancelled) return;
      try { sessionStorage.setItem(ENABLED_CACHE, me.enabled ? '1' : '0'); } catch {}
      setState({ enabled: me.enabled, user: me.user, loading: false });
    };
    load();
    window.addEventListener(AUTH_EVENT, load);
    return () => { cancelled = true; window.removeEventListener(AUTH_EVENT, load); };
  }, []);

  return state;
}
