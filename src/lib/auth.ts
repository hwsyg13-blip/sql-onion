// @ts-nocheck
import React from 'react';
import { supabase, hasSupabase } from './supabase';

export type SessionUser = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  provider: 'google' | 'kakao' | 'naver' | 'email';
  plan: 'free' | 'pro';
  subscribedAt?: number | null;
};

export async function signInWithGoogle() {
  if (!hasSupabase) {
    alert('Supabase 설정이 없어 실제 로그인이 동작하지 않아요. .env.local 을 채워주세요.');
    return;
  }
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: window.location.origin },
  });
  if (error) throw error;
}

export async function signOut() {
  if (!hasSupabase) return;
  await supabase.auth.signOut();
}

/**
 * useSession — Supabase 세션 + profiles + current_plan 을 통합해서
 * 기존 프로토타입이 쓰던 user 객체 모양을 그대로 반환.
 */
export function useSession(): { user: SessionUser | null; loading: boolean } {
  const [state, setState] = React.useState({ user: null as SessionUser | null, loading: true });

  React.useEffect(() => {
    if (!hasSupabase) { setState({ user: null, loading: false }); return; }

    let cancelled = false;

    const hydrate = async (session) => {
      if (!session?.user) { if (!cancelled) setState({ user: null, loading: false }); return; }
      const authUser = session.user;

      const [{ data: profile }, { data: planRow }] = await Promise.all([
        supabase.from('profiles').select('email, name, avatar_url').eq('id', authUser.id).maybeSingle(),
        supabase.from('current_plan').select('plan, started_at').eq('user_id', authUser.id).maybeSingle(),
      ]);

      const name = profile?.name
        || authUser.user_metadata?.full_name
        || authUser.user_metadata?.name
        || authUser.email?.split('@')[0]
        || '사용자';
      const avatarUrl = profile?.avatar_url || authUser.user_metadata?.avatar_url || '';

      const merged: SessionUser = {
        id: authUser.id,
        name,
        email: profile?.email || authUser.email || '',
        avatar: avatarUrl || (name[0] || '?'),
        provider: (authUser.app_metadata?.provider as any) || 'email',
        plan: (planRow?.plan as any) || 'free',
        subscribedAt: planRow?.started_at ? new Date(planRow.started_at).getTime() : null,
      };

      if (!cancelled) setState({ user: merged, loading: false });
    };

    supabase.auth.getSession().then(({ data }) => hydrate(data.session));

    const { data: sub } = supabase.auth.onAuthStateChange((_evt, session) => {
      hydrate(session);
    });

    return () => { cancelled = true; sub.subscription.unsubscribe(); };
  }, []);

  return state;
}
