// Vercel Edge Middleware — 대량 스크래핑/봇 차단.
// 모든 요청이 정적 자산 서빙 전에 이 함수를 통과한다.
//
// 적용 규칙 (1단계 — 코드만, 인프라 변경 없음):
//   1) User-Agent 블랙리스트 (curl/wget/python/scrapy/headless 등)
//      — 정상 검색엔진(googlebot/bingbot/naverbot/yeti 등)은 화이트리스트로 통과
//   2) 빈 User-Agent 차단 — 정상 브라우저는 항상 UA 보냄
//   3) IP 당 best-effort rate limit (edge instance 메모리 기반)
//      — 정확한 limit 은 Cloudflare/Vercel Firewall 대시보드 권장
//      — 같은 instance 안에선 동작, cold start 시 reset
//
// 주의: Vercel Free 의 edge middleware 는 instance 별로 격리되어 있어 완벽한
// rate limit 불가능. 본격 차단은 docs/security/scraping-defense.md 참조.

export const config = {
  // _vercel(시스템 경로)·favicon 외 모든 요청 (정적 자산 포함) 검사.
  // /assets/ 도 통과하도록 해야 봇이 번들 통째 가져가는 케이스 차단됨.
  matcher: '/((?!_vercel|favicon\\.ico|robots\\.txt|sitemap\\.xml).*)',
};

// 정상 검색엔진 — SEO 보호 위해 통과
const ALLOWED_BOT = /(?:googlebot|bingbot|naverbot|yeti|daum|yandex|baiduspider|adsbot-google|google-inspectiontool|facebookexternalhit|twitterbot|slackbot|linkedinbot|telegrambot|whatsapp|discordbot|kakaotalk-scrap|kakao-)/i;

// 알려진 스크래퍼/HTTP 클라이언트 — 차단
const BLOCK_BOT = /(?:bot|crawler|spider|scraper|scrapy|curl|wget|python(?:-requests|-urllib)?|libwww-perl|httpclient|java\/|go-http|node-fetch|axios|got\/|httpie|http_request|headlesschrome|phantomjs|puppeteer|playwright|selenium|nightmare|jsdom|cheerio|beautifulsoup)/i;

// IP 별 최근 요청 timestamp (best effort — 같은 edge instance 한정)
const RATE_LIMIT_WINDOW_MS = 60_000;     // 1분
const RATE_LIMIT_MAX = 80;               // 분당 80 req — 일반 사용자는 SPA 라 수십 req 정도, 스크래퍼는 100+ req/분 패턴
const ipHits = new Map<string, number[]>();

function rateLimitExceeded(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const hits = ipHits.get(ip) || [];
  const recent = hits.filter(t => t > windowStart);
  recent.push(now);
  ipHits.set(ip, recent);
  // 1만 IP 넘으면 메모리 보호용 청소 (가장 오래된 절반 drop)
  if (ipHits.size > 10_000) {
    const sorted = [...ipHits.entries()].sort((a, b) => (a[1].at(-1) || 0) - (b[1].at(-1) || 0));
    for (let i = 0; i < sorted.length / 2; i++) ipHits.delete(sorted[i][0]);
  }
  return recent.length > RATE_LIMIT_MAX;
}

export default function middleware(req: Request): Response | undefined {
  const ua = req.headers.get('user-agent') || '';
  const url = new URL(req.url);

  // 1) UA 검사
  if (!ua) {
    return new Response('Forbidden — empty User-Agent', {
      status: 403,
      headers: { 'X-Block-Reason': 'empty-ua', 'Cache-Control': 'no-store' },
    });
  }
  // 화이트리스트 우선
  if (!ALLOWED_BOT.test(ua) && BLOCK_BOT.test(ua)) {
    return new Response('Forbidden — automated client detected', {
      status: 403,
      headers: { 'X-Block-Reason': 'bot-ua', 'Cache-Control': 'no-store' },
    });
  }

  // 2) Rate limit — 검색엔진은 면제
  if (!ALLOWED_BOT.test(ua)) {
    // Vercel Edge: x-real-ip / x-forwarded-for 우선
    const ip = req.headers.get('x-real-ip')
      || req.headers.get('x-forwarded-for')?.split(',')[0].trim()
      || 'unknown';
    if (rateLimitExceeded(ip)) {
      return new Response('Too Many Requests', {
        status: 429,
        headers: {
          'X-Block-Reason': 'rate-limit',
          'Retry-After': '60',
          'Cache-Control': 'no-store',
        },
      });
    }
  }

  // 3) 통과 — 정적 자산 / SPA index 로 fall through (return undefined)
  return undefined;
}
