// Google Analytics 4 — SPA 라우트 변경마다 page_view 직접 발사
//
// 활성 조건: VITE_GA_MEASUREMENT_ID 환경변수가 'G-' 로 시작하는 값으로 설정돼 있을 때만 동작.
// 미설정 시 모든 함수는 no-op (개발 환경·미설정 환경에서 안전).
//
// 라우트 추적: SPA 이므로 gtag 의 자동 page_view 는 끄고(send_page_view: false),
// App.tsx 의 useEffect 에서 trackPageView() 를 명시적으로 호출.

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
const ENABLED = typeof GA_ID === 'string' && /^G-[A-Z0-9]+$/.test(GA_ID);

// DebugView 모드 — 두 가지 트리거:
//   1) 개발 빌드 (npm run dev) 자동 활성
//   2) URL 에 ?gadebug=1 붙여서 임시 활성 (운영에서 디버깅할 때)
// debug_mode: true 로 보낸 이벤트는 GA4 → 관리 → DebugView 화면에서 실시간으로 확인 가능.
const DEBUG_MODE = (() => {
  if (import.meta.env.DEV) return true;
  if (typeof window !== 'undefined' && window.location?.search?.includes('gadebug=1')) return true;
  return false;
})();

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

let initialized = false;

export function initGA() {
  if (!ENABLED || initialized || typeof window === 'undefined') return;
  initialized = true;

  // gtag.js 비동기 로드
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag('js', new Date());
  // SPA 자동 page_view 비활성 — trackPageView 가 수동 발사
  window.gtag('config', GA_ID, { send_page_view: false, debug_mode: DEBUG_MODE });
}

export function trackPageView(route: string, params?: any) {
  if (!ENABLED || typeof window === 'undefined' || !window.gtag) return;
  // route 와 params 를 가상 경로로 만들어서 전송 (URL 라우팅이 아니므로)
  const path = params ? `/${route}?p=${encodeURIComponent(String(params))}` : `/${route}`;
  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: route,
    page_location: window.location.origin + path,
    ...(DEBUG_MODE ? { debug_mode: true } : {}),
  });
}

// 임의 이벤트 (예: 결제 시작, 구독 완료, 오류제보 등)
export function trackEvent(name: string, params?: Record<string, any>) {
  if (!ENABLED || typeof window === 'undefined' || !window.gtag) return;
  const payload = DEBUG_MODE ? { ...(params || {}), debug_mode: true } : (params || {});
  window.gtag('event', name, payload);
}

export const isGAEnabled = () => ENABLED;
