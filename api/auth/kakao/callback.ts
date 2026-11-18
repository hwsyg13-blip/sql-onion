// GET /api/auth/kakao/callback — 카카오 동의 후 돌아오는 곳 (카카오 콘솔 Redirect URI 에 이 주소를 등록).
// 1) state 비교  2) 인가 코드를 토큰으로 교환(Client Secret 은 서버에서만)  3) 사용자 정보 조회  4) 로그인 쿠키 발급
import {
  SESSION_COOKIE, STATE_COOKIE, cookie, createSessionToken, getCookie, isSecure, loginEnabled,
  redirect, redirectUri, siteOrigin,
} from '../../_lib/session.js';

export async function GET(request: Request): Promise<Response> {
  const origin = siteOrigin(request);
  const secure = isSecure(request);
  const clearState = cookie(STATE_COOKIE, '', 0, secure);
  const fail = (reason: string) => redirect(`${origin}/my?login=${reason}`, [clearState]);

  if (!loginEnabled()) return fail('off');
  const url = new URL(request.url);
  if (url.searchParams.get('error')) return fail('cancel'); // 사용자가 동의 화면에서 취소
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const savedState = getCookie(request, STATE_COOKIE);
  if (!code || !state || !savedState || state !== savedState) return fail('state');

  try {
    const tokenRes = await fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: process.env.KAKAO_REST_API_KEY as string,
        client_secret: process.env.KAKAO_CLIENT_SECRET as string,
        redirect_uri: redirectUri(request),
        code,
      }),
    });
    if (!tokenRes.ok) return fail('token');
    const token = await tokenRes.json();
    if (!token.access_token) return fail('token');

    const meRes = await fetch('https://kapi.kakao.com/v2/user/me?secure_resource=true', {
      headers: { Authorization: `Bearer ${token.access_token}` },
    });
    if (!meRes.ok) return fail('profile');
    const me = await meRes.json();
    if (!me.id) return fail('profile');

    const account = me.kakao_account || {};
    const profile = account.profile || {};
    const session = createSessionToken({
      id: String(me.id),
      name: String(profile.nickname || '양파학습자').slice(0, 40),
      avatarUrl: String(profile.thumbnail_image_url || profile.profile_image_url || ''),
      email: account.email && account.is_email_valid !== false ? String(account.email) : '',
    });
    return redirect(`${origin}/my`, [clearState, cookie(SESSION_COOKIE, session, 30 * 86400, secure)]);
  } catch {
    return fail('error');
  }
}
