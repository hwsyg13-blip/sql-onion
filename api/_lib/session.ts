// 카카오 로그인 공용 도구 — 서버 함수(api/auth/*)에서만 쓴다. 파일명이 _ 로 시작하는 폴더라 그 자체로는 함수가 아니다.
//
// 필요한 환경변수 (Vercel → Settings → Environment Variables, 브라우저에 노출되지 않게 VITE_ 접두사 없이):
//   KAKAO_REST_API_KEY   카카오 앱의 REST API 키
//   KAKAO_CLIENT_SECRET  카카오 로그인 Client Secret
//   SESSION_SECRET       로그인 쿠키 서명용 임의 문자열(32자 이상)
// 셋 중 하나라도 없으면 로그인 기능은 꺼진 것으로 본다(enabled: false).
import { createHmac, randomBytes, timingSafeEqual } from 'node:crypto';

export const SESSION_COOKIE = 'sqlo_session';
export const STATE_COOKIE = 'sqlo_kakao_state';
const SESSION_DAYS = 30;

// 카카오 콘솔에 Redirect URI 로 등록한 주소와 정확히 같아야 하므로 호스트를 아래 목록으로 제한한다
const ALLOWED_HOSTS = ['sqldyangpa.com', 'www.sqldyangpa.com', 'localhost:3000'];

export type SessionUser = { id: string; name: string; avatarUrl: string; email: string };

export function loginEnabled(): boolean {
  return Boolean(process.env.KAKAO_REST_API_KEY && process.env.KAKAO_CLIENT_SECRET && (process.env.SESSION_SECRET || '').length >= 16);
}

export function siteOrigin(request: Request): string {
  const url = new URL(request.url);
  const host = request.headers.get('x-forwarded-host') || url.host;
  const safe = ALLOWED_HOSTS.includes(host) ? host : ALLOWED_HOSTS[0];
  const proto = safe.startsWith('localhost') ? 'http' : 'https';
  return `${proto}://${safe}`;
}

export function redirectUri(request: Request): string {
  return `${siteOrigin(request)}/api/auth/kakao/callback`;
}

export function randomState(): string {
  return randomBytes(24).toString('base64url');
}

function sign(body: string): string {
  return createHmac('sha256', process.env.SESSION_SECRET || '').update(body).digest('base64url');
}

/** 로그인 쿠키 값 = base64url(JSON) + '.' + 서명. 카카오 토큰은 저장하지 않는다(필요 없음). */
export function createSessionToken(user: SessionUser, now = Date.now()): string {
  const body = Buffer.from(JSON.stringify({ ...user, exp: now + SESSION_DAYS * 86400_000 })).toString('base64url');
  return `${body}.${sign(body)}`;
}

export function readSessionToken(token: string | undefined, now = Date.now()): SessionUser | null {
  if (!token || !process.env.SESSION_SECRET) return null;
  const [body, sig] = token.split('.');
  if (!body || !sig) return null;
  const expected = Buffer.from(sign(body));
  const given = Buffer.from(sig);
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) return null;
  try {
    const data = JSON.parse(Buffer.from(body, 'base64url').toString('utf8'));
    if (typeof data.exp !== 'number' || data.exp < now || !data.id) return null;
    return { id: String(data.id), name: String(data.name || ''), avatarUrl: String(data.avatarUrl || ''), email: String(data.email || '') };
  } catch {
    return null;
  }
}

export function getCookie(request: Request, name: string): string | undefined {
  const raw = request.headers.get('cookie') || '';
  for (const part of raw.split(';')) {
    const i = part.indexOf('=');
    if (i > 0 && part.slice(0, i).trim() === name) return decodeURIComponent(part.slice(i + 1).trim());
  }
  return undefined;
}

export function cookie(name: string, value: string, maxAgeSec: number, secure: boolean): string {
  return `${name}=${encodeURIComponent(value)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAgeSec}${secure ? '; Secure' : ''}`;
}

export function isSecure(request: Request): boolean {
  return !siteOrigin(request).startsWith('http://');
}

export function redirect(location: string, cookies: string[] = []): Response {
  const headers = new Headers({ Location: location, 'Cache-Control': 'no-store' });
  for (const c of cookies) headers.append('Set-Cookie', c);
  return new Response(null, { status: 302, headers });
}
