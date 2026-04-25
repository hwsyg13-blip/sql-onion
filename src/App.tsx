// @ts-nocheck
import React from 'react';
import { OnionMark, Ic } from './components/Atoms';
import { TopNav, MobileNav } from './components/TopNav';
import { Footer } from './components/Footer';
import { AdSidebar } from './components/AdSlot';
import { HomeScreen } from './screens/HomeScreen';
import { LoginScreen } from './screens/LoginScreen';
import { PricingScreen, SubscribeFlow, Paywall, sqloUsage } from './screens/PricingScreen';
import { PlanScreen } from './screens/PlanScreen';
import { TheoryListScreen, TheoryDetailScreen } from './screens/TheoryScreens';
import { MockLanding, EndlessScreen } from './screens/MockScreens';
import { ExamListScreen, CBTExam, CBTResult } from './screens/CBTScreens';
import { useSession, signOut } from './lib/auth';
import { recordVisit } from './lib/progress';

// 🚧 베타 모드: 로그인/결제 기능 숨김 (나중에 켤 때 false 로만 바꾸면 됨)
export const BETA_NO_AUTH = true;

const TWEAK_DEFAULTS = {
  theme: 'light',
  planViz: 'calendar',
  accent: 'green',
  loginLayout: 'centered',
  forceLogin: false,
};

const ACCENT_PRESETS: any = {
  green: { '--point-600': '#2E7D32', '--point-500': '#4CAF50', '--point-100': '#EBF5EC', '--point-050': '#F0F7F1', '--correct-fg': '#256B29', '--correct-bg': '#E6F3E7', '--correct-border': '#BFDFC2' },
  teal:  { '--point-600': '#0F766E', '--point-500': '#14B8A6', '--point-100': '#CCFBF1', '--point-050': '#F0FDFA', '--correct-fg': '#115E59', '--correct-bg': '#CCFBF1', '--correct-border': '#99F6E4' },
  warm:  { '--point-600': '#B45309', '--point-500': '#D97706', '--point-100': '#FEF3C7', '--point-050': '#FFFBEB', '--correct-fg': '#92400E', '--correct-bg': '#FEF3C7', '--correct-border': '#FDE68A' },
};

export const App = () => {
  const { user, loading: sessionLoading } = useSession();

  const [tweaks, setTweaks] = React.useState(() => {
    try { return JSON.parse(localStorage.getItem('sqlo_tweaks') || 'null') || TWEAK_DEFAULTS; }
    catch { return TWEAK_DEFAULTS; }
  });
  const [route, setRoute] = React.useState(() => {
    const saved = localStorage.getItem('sqlo_route');
    if (saved === 'login' || saved === 'subscribe') return 'home';
    return saved || 'home';
  });
  const [params, setParams] = React.useState<any>(() => {
    // route 가 cbt 로 복원되는 경우 examId 도 함께 복원
    try {
      const raw = localStorage.getItem('sqlo_params');
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  });
  const [cbtResult, setCbtResult] = React.useState<any>(null);
  const [paywall, setPaywall] = React.useState<any>(null);
  // 나가기 버튼이 돌아갈 '직전 화면' — cbt/mock-exam 진입 시 기록 (새로고침 시 복원)
  const [exitReturnRoute, setExitReturnRoute] = React.useState<string>(() => {
    try { return localStorage.getItem('sqlo_exit_return') || 'home'; } catch { return 'home'; }
  });

  const handleLogin = () => { /* noop: Supabase OAuth redirect handles it */ };
  const handleLogout = async () => { await signOut(); setRoute('home'); };

  React.useEffect(() => { localStorage.setItem('sqlo_tweaks', JSON.stringify(tweaks)); }, [tweaks]);
  React.useEffect(() => { localStorage.setItem('sqlo_route', route); }, [route]);
  React.useEffect(() => {
    if (params == null) localStorage.removeItem('sqlo_params');
    else try { localStorage.setItem('sqlo_params', JSON.stringify(params)); } catch {}
  }, [params]);
  // 나가기 복귀 라우트도 복원 (새로고침 후 나가기가 이상한 경로로 가지 않도록)
  React.useEffect(() => { localStorage.setItem('sqlo_exit_return', exitReturnRoute); }, [exitReturnRoute]);

  // 방문 기록 — 앱 마운트 시 오늘 날짜를 visitDays 에 저장 (1일 1회만)
  React.useEffect(() => { recordVisit(); }, []);

  React.useEffect(() => {
    document.documentElement.dataset.theme = tweaks.theme;
    const accent = ACCENT_PRESETS[tweaks.accent] || ACCENT_PRESETS.green;
    for (const [k, v] of Object.entries(accent)) {
      document.documentElement.style.setProperty(k, v as string);
    }
  }, [tweaks.theme, tweaks.accent]);

  // 브라우저 히스토리와 동기화 — popstate 로 돌아올 때는 pushState 하지 않도록 플래그
  const isPoppingRef = React.useRef(false);

  const navigate = (to: string, p: any = null, opts?: { skipConfirm?: boolean }) => {
    // 시험 중 이탈 방지 — cbt/mock-exam 화면에서 다른 화면으로 갈 때 확인
    const inExam = (route === 'cbt' || route === 'mock-exam');
    const naturalExits = new Set(['cbt', 'mock-exam', 'cbt-result']);
    if (inExam && !naturalExits.has(to) && !isPoppingRef.current && !opts?.skipConfirm) {
      // 답을 하나도 고르지 않은 상태면 confirm 스킵
      const answered = (typeof window !== 'undefined' && (window as any).__sqlo_cbt_answered) || 0;
      if (answered > 0) {
        const ok = window.confirm('진행 중인 풀이를 종료하고 이동할까요? 답안은 저장되지 않아요.');
        if (!ok) return;
      }
    }

    // 베타 모드: 로그인/결제 없이 모든 화면 자유 접근
    if (BETA_NO_AUTH && (to === 'login' || to === 'pricing' || to === 'subscribe')) {
      to = 'home';
      p = null;
    }
    if (!BETA_NO_AUTH) {
      if (to === 'mock-exam' || to === 'endless') {
        if (!user) { setPaywall({ kind: 'mock', variant: 'not-logged-in' }); return; }
        const chk = sqloUsage.checkLimit('mock', user);
        if (!chk.canUse) { setPaywall({ kind: 'mock', variant: 'free-limit', info: chk }); return; }
      }
      if (to === 'cbt') {
        const chk = sqloUsage.checkLimit('exam', user, p);
        if (!user && !(user?.plan === 'pro')) {
          if (p !== 'round-60') { setPaywall({ kind: 'exam', variant: 'not-logged-in' }); return; }
        } else if (!chk.canUse) {
          setPaywall({ kind: 'exam', variant: 'free-limit', info: chk }); return;
        }
      }
    }
    // CBT/모의 진입 시 '직전 화면' 기억 — 나가기 버튼이 여기로 돌아감
    if ((to === 'cbt' || to === 'mock-exam') && route !== 'cbt' && route !== 'mock-exam' && route !== 'cbt-result') {
      setExitReturnRoute(route);
    }
    // 브라우저 히스토리에 기록 — popstate 로 인해 호출된 경우는 제외
    if (!isPoppingRef.current && typeof window !== 'undefined') {
      try { window.history.pushState({ sqlo: true, route: to, params: p }, ''); } catch {}
    }
    setRoute(to);
    setParams(p);
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  };

  // 최초 마운트: 현재 route/params 를 history state 로 교체 (앱 재시작 후 뒤로가기 처리)
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!window.history.state?.sqlo) {
      try { window.history.replaceState({ sqlo: true, route, params }, ''); } catch {}
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // popstate (브라우저 뒤로가기/앞으로가기) — 시험 중 이탈 방어 후 route 복원
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const onPop = (e: PopStateEvent) => {
      const st = e.state;
      if (!st?.sqlo) return;
      // 시험 중이면 확인 요청, 거절 시 현 상태로 pushState 복구
      const inExam = (route === 'cbt' || route === 'mock-exam');
      const naturalExits = new Set(['cbt', 'mock-exam', 'cbt-result']);
      if (inExam && !naturalExits.has(st.route)) {
        const answered = ((window as any).__sqlo_cbt_answered) || 0;
        if (answered > 0) {
          const ok = window.confirm('진행 중인 풀이를 종료하고 이동할까요? 답안은 저장되지 않아요.');
          if (!ok) {
            try { window.history.pushState({ sqlo: true, route, params }, ''); } catch {}
            return;
          }
        }
      }
      isPoppingRef.current = true;
      setRoute(st.route);
      setParams(st.params ?? null);
      window.scrollTo({ top: 0, behavior: 'instant' as any });
      // reset 플래그 (다음 tick)
      setTimeout(() => { isPoppingRef.current = false; }, 0);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, [route, params]);

  const toggleDark = () => setTweaks((t: any) => ({ ...t, theme: t.theme === 'dark' ? 'light' : 'dark' }));

  let screen: any = null;
  switch (route) {
    case 'home':          screen = <HomeScreen onNavigate={navigate} user={user}/>; break;
    case 'login':         screen = <LoginScreen onNavigate={navigate} onLogin={handleLogin} layout={tweaks.loginLayout}/>; break;
    case 'pricing':       screen = <PricingScreen onNavigate={navigate} user={user} onSubscribe={() => navigate('subscribe')} onCancel={() => alert('Pro 해지는 곧 지원해요. 필요하시면 문의해주세요.')}/>; break;
    case 'subscribe':     screen = user
      ? <SubscribeFlow user={user} onComplete={() => navigate('home')} onCancel={() => navigate('pricing')}/>
      : <LoginScreen onNavigate={navigate} onLogin={handleLogin} layout={tweaks.loginLayout}/>; break;
    case 'plan':          screen = <PlanScreen onNavigate={navigate} planViz={tweaks.planViz} setPlanViz={(v: any) => setTweaks((t: any) => ({ ...t, planViz: v }))}/>; break;
    case 'theory':        screen = <TheoryListScreen onNavigate={navigate}/>; break;
    case 'theory-detail': screen = <TheoryDetailScreen chapterId={params || 'c23'} onNavigate={navigate}/>; break;
    case 'mock':          screen = <MockLanding onNavigate={navigate}/>; break;
    case 'endless':       screen = <EndlessScreen onNavigate={navigate}/>; break;
    case 'mock-exam':     screen = <CBTExam examId="AI-MOCK-1" mockMode={true} onNavigate={navigate} onExit={() => navigate(exitReturnRoute || 'home', null, { skipConfirm: true })} onFinish={(r: any) => { setCbtResult(r); navigate('cbt-result'); }}/>; break;
    case 'exams':         screen = <ExamListScreen onNavigate={navigate}/>; break;
    case 'cbt':           screen = <CBTExam examId={params || 'round-60'} onNavigate={navigate} onExit={() => navigate(exitReturnRoute || 'home', null, { skipConfirm: true })} onFinish={(r: any) => { setCbtResult(r); navigate('cbt-result'); }}/>; break;
    case 'cbt-result':    screen = cbtResult ? <CBTResult result={cbtResult} onNavigate={navigate}/> : <HomeScreen onNavigate={navigate} user={user}/>; break;
    default:              screen = <HomeScreen onNavigate={navigate} user={user}/>;
  }

  // 로그인 화면만 TopNav 숨김. CBT/모의 중 나가기는 CBTExam 내부 상단 바에 통합.
  const hideTopBar = (route === 'login');
  const showExitHeader = false;

  return (
    <>
      {!hideTopBar && <TopNav route={route} onNavigate={navigate} dark={tweaks.theme === 'dark'} onToggleDark={toggleDark} user={BETA_NO_AUTH ? null : user} onLogout={handleLogout} betaNoAuth={BETA_NO_AUTH}/>}
      {showExitHeader && (
        <header style={{
          height: 48, background: 'var(--bg-surface)', borderBottom: '1px solid var(--border-subtle)',
          display: 'flex', alignItems: 'center', padding: '0 20px', gap: 14,
          /* TopNav(64px) 바로 아래에 붙도록 */
          position: 'sticky', top: 64, zIndex: 40,
        }}>
          <button onClick={() => navigate(exitReturnRoute || 'home')}
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border-default)', borderRadius: 10, padding: '6px 11px', fontFamily: 'inherit', fontSize: 12.5, cursor: 'pointer', color: 'var(--fg-2)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <Ic.ArrowLeft size={13}/> 나가기
          </button>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--fg-3)' }}>
            <OnionMark size={14}/>
            <span style={{ fontWeight: 600 }}>시험 진행 중</span>
          </div>
        </header>
      )}
      {screen}
      {paywall && !BETA_NO_AUTH && (
        <Paywall
          kind={paywall.kind}
          variant={paywall.variant}
          info={paywall.info}
          user={user}
          onClose={() => setPaywall(null)}
          onNavigate={(to: string) => { setPaywall(null); navigate(to); }}
        />
      )}
      {!hideTopBar && !showExitHeader && <Footer/>}
      {!hideTopBar && <MobileNav route={route} onNavigate={navigate}/>}
      {/* 사이드 광고 — PC 와이드 화면 전용 (≥1280px). 시험 중·로그인 화면 제외 */}
      {!hideTopBar && route !== 'cbt' && route !== 'mock-exam' && <AdSidebar slot="SIDEBAR_RIGHT"/>}
    </>
  );
};
