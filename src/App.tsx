// @ts-nocheck
import React from 'react';
import { OnionMark, Ic } from './components/Atoms';
import { TopNav, MobileNav } from './components/TopNav';
import { Footer } from './components/Footer';
import { HomeScreen } from './screens/HomeScreen';
import { LoginScreen } from './screens/LoginScreen';
import { PricingScreen, SubscribeFlow, Paywall, sqloUsage } from './screens/PricingScreen';
import { PlanScreen } from './screens/PlanScreen';
import { TheoryListScreen, TheoryDetailScreen } from './screens/TheoryScreens';
import { MockLanding, EndlessScreen } from './screens/MockScreens';
import { ExamListScreen, CBTExam, CBTResult } from './screens/CBTScreens';
import { useSession, signOut } from './lib/auth';

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
  const [params, setParams] = React.useState<any>(null);
  const [cbtResult, setCbtResult] = React.useState<any>(null);
  const [paywall, setPaywall] = React.useState<any>(null);

  const handleLogin = () => { /* noop: Supabase OAuth redirect handles it */ };
  const handleLogout = async () => { await signOut(); setRoute('home'); };

  React.useEffect(() => { localStorage.setItem('sqlo_tweaks', JSON.stringify(tweaks)); }, [tweaks]);
  React.useEffect(() => { localStorage.setItem('sqlo_route', route); }, [route]);

  React.useEffect(() => {
    document.documentElement.dataset.theme = tweaks.theme;
    const accent = ACCENT_PRESETS[tweaks.accent] || ACCENT_PRESETS.green;
    for (const [k, v] of Object.entries(accent)) {
      document.documentElement.style.setProperty(k, v as string);
    }
  }, [tweaks.theme, tweaks.accent]);

  const navigate = (to: string, p: any = null) => {
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
    setRoute(to);
    setParams(p);
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  };

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
    case 'mock-exam':     screen = <CBTExam examId="AI-MOCK-1" mockMode={true} onNavigate={navigate} onFinish={(r: any) => { setCbtResult(r); navigate('cbt-result'); }}/>; break;
    case 'exams':         screen = <ExamListScreen onNavigate={navigate}/>; break;
    case 'cbt':           screen = <CBTExam examId={params || 'round-60'} onNavigate={navigate} onFinish={(r: any) => { setCbtResult(r); navigate('cbt-result'); }}/>; break;
    case 'cbt-result':    screen = cbtResult ? <CBTResult result={cbtResult} onNavigate={navigate}/> : <HomeScreen onNavigate={navigate} user={user}/>; break;
    default:              screen = <HomeScreen onNavigate={navigate} user={user}/>;
  }

  const hideTopBar = (route === 'cbt' || route === 'mock-exam' || route === 'login');
  const showExitHeader = (route === 'cbt' || route === 'mock-exam');

  return (
    <>
      {!hideTopBar && <TopNav route={route} onNavigate={navigate} dark={tweaks.theme === 'dark'} onToggleDark={toggleDark} user={BETA_NO_AUTH ? null : user} onLogout={handleLogout} betaNoAuth={BETA_NO_AUTH}/>}
      {showExitHeader && (
        <header style={{
          height: 56, background: 'var(--bg-card)', borderBottom: '1px solid var(--border-subtle)',
          display: 'flex', alignItems: 'center', padding: '0 20px', gap: 14, position: 'sticky', top: 0, zIndex: 50,
        }}>
          <button onClick={() => { if (confirm('진행 중인 풀이를 종료하고 홈으로 이동할까요?')) navigate('home'); }}
            style={{ background: 'var(--bg-muted)', border: '1px solid var(--border-default)', borderRadius: 10, padding: '7px 12px', fontFamily: 'inherit', fontSize: 13, cursor: 'pointer', color: 'var(--fg-2)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <Ic.ArrowLeft size={14}/> 나가기
          </button>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <OnionMark size={18}/>
            <span style={{ fontSize: 13, color: 'var(--fg-3)', fontWeight: 600 }}>SQL양파 · 시험 진행 중</span>
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
          onNavigate={(to: string) => { setPaywall(null); setRoute(to); setParams(null); window.scrollTo({ top: 0 }); }}
        />
      )}
      {!hideTopBar && !showExitHeader && <Footer/>}
      {!hideTopBar && <MobileNav route={route} onNavigate={navigate}/>}
    </>
  );
};
