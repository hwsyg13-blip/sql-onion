// POST /api/auth/logout — 로그인 쿠키를 지운다. (다른 사이트가 몰래 부르지 못하게 POST + 같은 출처만)
import { SESSION_COOKIE, cookie, isSecure, siteOrigin } from '../_lib/session.js';

export function POST(request: Request): Response {
  const from = request.headers.get('origin');
  if (from && from !== siteOrigin(request)) return new Response('forbidden', { status: 403 });
  return new Response(null, {
    status: 204,
    headers: { 'Set-Cookie': cookie(SESSION_COOKIE, '', 0, isSecure(request)), 'Cache-Control': 'no-store' },
  });
}
