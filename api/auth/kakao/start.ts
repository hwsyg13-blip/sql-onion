// GET /api/auth/kakao/start — 카카오 동의 화면으로 보낸다.
// 위조 방지용 state 값을 쿠키에 넣고 같은 값을 카카오에 보냈다가, 돌아올 때(callback) 둘을 비교한다.
import { STATE_COOKIE, cookie, isSecure, loginEnabled, randomState, redirect, redirectUri, siteOrigin } from '../../_lib/session.js';

export function GET(request: Request): Response {
  if (!loginEnabled()) return redirect(`${siteOrigin(request)}/my?login=off`);
  const state = randomState();
  const url = new URL('https://kauth.kakao.com/oauth/authorize');
  url.searchParams.set('client_id', process.env.KAKAO_REST_API_KEY as string);
  url.searchParams.set('redirect_uri', redirectUri(request));
  url.searchParams.set('response_type', 'code');
  url.searchParams.set('state', state);
  return redirect(url.toString(), [cookie(STATE_COOKIE, state, 600, isSecure(request))]);
}
