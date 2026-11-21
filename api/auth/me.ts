// GET /api/auth/me — 로그인 기능이 켜졌는지(enabled)와 지금 로그인한 사용자(user)를 돌려준다.
import { SESSION_COOKIE, getCookie, loginEnabled, readSessionToken } from '../_lib/session.js';

export function GET(request: Request): Response {
  const enabled = loginEnabled();
  const user = enabled ? readSessionToken(getCookie(request, SESSION_COOKIE)) : null;
  return Response.json({ enabled, user }, { headers: { 'Cache-Control': 'no-store' } });
}
