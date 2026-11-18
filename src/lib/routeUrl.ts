// 화면(route) ↔ 주소(path) 변환
//
// 예전에는 모든 화면이 sqldyangpa.com/ 한 주소였다(화면 이름만 history.state·sessionStorage 에 저장).
// 그러면 AdSense·GA·검색엔진이 모든 화면을 '홈'으로 보고, 화면별 광고 수익도 나눠 볼 수 없다.
// 이제 화면마다 영어 주소를 붙인다. vercel.json 의 '점 없는 경로 → /' 재작성 규칙 덕에 서버 설정은 그대로다.
//
// /theory/·/exam/ 은 검색엔진용 정적 페이지(dist/theory, dist/exam)가 쓰고 있어 앱 화면에는 겹치지 않는
// /learn·/exams 를 쓴다. 대신 같은 내용의 정적 페이지가 있는 화면은 canonical 로 그 정적 페이지를 가리켜
// 검색엔진이 앱 주소를 따로 색인하지 않게 한다(중복 콘텐츠 방지).

const ORIGIN = 'https://sqldyangpa.com';

/** 파라미터 없는 화면의 고정 주소. 여기에 없는 화면(login·pricing·subscribe·cbt-result)은 주소를 바꾸지 않는다. */
const ROUTE_PATHS: Record<string, string> = {
  home: '/',
  plan: '/plan',
  theory: '/learn',
  mock: '/mock',
  'mock-exam': '/mock/exam',
  endless: '/quiz',
  exams: '/exams',
  'final-cheatsheet': '/cheatsheet',
  mypage: '/my',
};

const CHAPTER_ID = /^[A-Za-z0-9_-]{1,40}$/;
const ROUND_ID = /^round-\d{1,3}$/;

/** 화면 → 주소. 주소가 없는 화면이면 null (현재 주소 유지). */
export function pathFor(route: string, params: any): string | null {
  if (route === 'theory-detail') return params && CHAPTER_ID.test(String(params)) ? `/learn/${params}` : ROUTE_PATHS.theory;
  if (route === 'cbt') return params && ROUND_ID.test(String(params)) ? `/exams/${params}` : ROUTE_PATHS.exams;
  return ROUTE_PATHS[route] ?? null;
}

/** 주소 → 화면. 모르는 주소나 '/' 면 null (기존 복원 규칙을 따른다). */
export function parsePath(pathname: string): { route: string; params: any } | null {
  const p = (pathname || '/').replace(/\/+$/, '') || '/';
  if (p === '/') return null;
  let m = p.match(/^\/learn\/([^/]+)$/);
  if (m && CHAPTER_ID.test(m[1])) return { route: 'theory-detail', params: m[1] };
  m = p.match(/^\/exams\/([^/]+)$/);
  if (m && ROUND_ID.test(m[1])) return { route: 'cbt', params: m[1] };
  for (const [route, path] of Object.entries(ROUTE_PATHS)) if (path === p) return { route, params: null };
  return null;
}

/** Vercel Analytics 의 route(동적 경로 묶음) 값 */
export function routePattern(route: string, params: any): string {
  if (route === 'theory-detail' && params) return '/learn/[id]';
  if (route === 'cbt' && params) return '/exams/[id]';
  return pathFor(route, params) ?? `/${route}`;
}

/**
 * 대표 주소. 같은 내용의 정적 페이지가 있으면 그쪽을 가리킨다.
 * (/exam/round-NN/ 은 vercel.json 에서 앱으로 영구 이동되므로 대표 주소로 쓰지 않는다)
 */
export function canonicalFor(route: string, params: any): string {
  if (route === 'theory-detail' && params && CHAPTER_ID.test(String(params))) return `${ORIGIN}/theory/${params}/`;
  if (route === 'theory') return `${ORIGIN}/theory/`;
  if (route === 'exams') return `${ORIGIN}/exam/`;
  return ORIGIN + (pathFor(route, params) ?? '/');
}
