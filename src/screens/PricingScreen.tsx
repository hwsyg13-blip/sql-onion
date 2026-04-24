// @ts-nocheck
import React from 'react';
import { Btn, Tag, Ic, Mascot, MascotGuide, OnionMark, Progress, Divider, CodeBlock, highlightSQL } from '../components/Atoms';
import { ProviderBtn, GoogleGlyph, KakaoGlyph, NaverGlyph } from './LoginScreen';

// PricingScreen — Free vs Pro plan comparison + subscribe flow
// + Paywall modals (logged-in / not-logged-in variants)
// + Usage helpers

// ---------- Usage helpers (localStorage-backed) ---------------------------
export const USAGE_KEY = "sqlo_usage";
const todayStr = () => new Date().toISOString().slice(0,10);

export const getUsage = () => {
  try {
    const u = JSON.parse(localStorage.getItem(USAGE_KEY)) || {};
    // Reset daily counter if day changed
    if (u.day !== todayStr()) {
      u.day = todayStr();
      u.mockToday = 0;
    }
    u.examsDone = u.examsDone || [];
    return u;
  } catch { return {day: todayStr(), mockToday: 0, examsDone: []}; }
};
export const setUsage = (u) => {
  localStorage.setItem(USAGE_KEY, JSON.stringify(u));
  try { window.dispatchEvent(new Event("sqlo_usage_change")); } catch(e){}
};
export const incMock = (n = 1) => { const u = getUsage(); u.mockToday = (u.mockToday||0) + n; setUsage(u); return u.mockToday; };
export const markExamDone = (id) => { const u = getUsage(); if (!u.examsDone.includes(id)) u.examsDone.push(id); setUsage(u); };

export const LIMITS = {
  mockDaily: 10,   // 무료 플랜 하루 모의고사 문항 수
  examSets: 1,     // 무료 플랜 기출 세트 수
};

// Returns {canUse, reason, remaining}
export const checkLimit = (kind, user, examId) => {
  const isPro = user?.plan === "pro";
  if (isPro) return {canUse: true};
  const u = getUsage();
  if (kind === "mock") {
    const used = u.mockToday || 0;
    const remaining = Math.max(0, LIMITS.mockDaily - used);
    return {canUse: remaining > 0, remaining, used, reason: "daily-mock"};
  }
  if (kind === "exam") {
    // Allow first exam; block subsequent new ones.
    const done = u.examsDone || [];
    if (done.includes(examId)) return {canUse: true, resuming: true};
    return {canUse: done.length < LIMITS.examSets, remaining: LIMITS.examSets - done.length, reason: "exam-set"};
  }
  return {canUse: true};
};


// ---------- Plan constants -----------------------------------------------
export const PLANS = [
  {
    id: "free",
    name: "무료",
    price: 0,
    priceNote: "평생 무료",
    tagline: "SQLD가 나에게 맞는지 맛보기",
    features: [
      {t: "이론 전 챕터 열람", on: true},
      {t: "오늘 모의고사 10문제", on: true, hint: "하루 10문제 제한"},
      {t: "기출문제 1세트", on: true, hint: "제60회(최신) 한정"},
      {t: "AI 무한 퀴즈", on: false},
      {t: "오답 노트 · 풀이 기록 저장", on: false},
      {t: "3주 합격 플랜 커스텀", on: false},
      {t: "모바일 · 오프라인 풀이", on: false},
    ],
    ctaHint: "현재 플랜",
  },
  {
    id: "pro",
    name: "Pro",
    price: 9900,
    priceNote: "월 · 언제든 해지",
    tagline: "합격할 때까지 무제한",
    badge: "추천",
    features: [
      {t: "이론 전 챕터 열람", on: true},
      {t: "모의고사 무제한", on: true},
      {t: "기출문제 전 회차 (제45~60회 · 16회차)", on: true},
      {t: "AI 무한 퀴즈 무제한", on: true},
      {t: "오답 노트 · 풀이 기록 영구 저장", on: true},
      {t: "3주 합격 플랜 커스텀", on: true},
      {t: "모바일 · 오프라인 풀이", on: true},
    ],
    ctaHint: "시작하기",
  },
];

// ---------- PricingScreen -------------------------------------------------
export const PricingScreen = ({onNavigate, user, onSubscribe, onCancel}) => {
  const currentPlan = user?.plan || "free";
  const [showCancel, setShowCancel] = React.useState(false);

  return (
    <div style={{maxWidth:1080, margin:"0 auto", padding:"40px 28px 80px"}}>
      <div style={{textAlign:"center", marginBottom:40}}>
        <div style={{display:"inline-flex",alignItems:"center",gap:8,color:"var(--point-600)",fontSize:12,fontWeight:700,letterSpacing:"0.04em"}}>
          <Ic.Sparkles size={14}/> 요금제
        </div>
        <h1 style={{fontSize:40,fontWeight:800,color:"var(--fg-1)",margin:"10px 0 10px",letterSpacing:"-0.025em"}}>
          합격할 때까지, <span style={{color:"var(--point-600)"}}>한 겹씩</span>
        </h1>
        <p style={{fontSize:15,color:"var(--fg-3)",margin:0,lineHeight:1.6}}>
          맛보기는 무료로. 본격 합격 루틴은 Pro로.
        </p>
      </div>

      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))", gap:20, maxWidth:800, margin:"0 auto"}}>
        {PLANS.map(p => {
          const isCurrent = p.id === currentPlan;
          const isPro = p.id === "pro";
          return (
            <div key={p.id} style={{
              background:"var(--bg-card)",
              border: isPro ? "2px solid var(--point-600)" : "1px solid var(--border-subtle)",
              borderRadius: 20, padding: "32px 28px 28px",
              boxShadow: isPro ? "var(--shadow-lg)" : "var(--shadow-sm)",
              position: "relative", display:"flex", flexDirection:"column",
            }}>
              {p.badge && (
                <div style={{
                  position:"absolute", top:-12, left:"50%", transform:"translateX(-50%)",
                  background:"var(--point-600)", color:"#fff", fontSize:11, fontWeight:700,
                  letterSpacing:"0.05em", padding:"5px 12px", borderRadius:999,
                }}>{p.badge}</div>
              )}
              {isCurrent && (
                <div style={{
                  position:"absolute", top:16, right:16,
                  background:"var(--point-100)", color:"var(--point-600)", fontSize:11, fontWeight:700,
                  padding:"4px 10px", borderRadius:999, display:"inline-flex",alignItems:"center",gap:4,
                }}><Ic.Check size={12}/> 현재 플랜</div>
              )}
              <div style={{fontSize:18,fontWeight:800,color:"var(--fg-1)",marginBottom:4}}>{p.name}</div>
              <div style={{fontSize:13,color:"var(--fg-3)",marginBottom:20}}>{p.tagline}</div>
              <div style={{display:"flex",alignItems:"baseline",gap:6,marginBottom:4}}>
                <span style={{fontSize:40,fontWeight:800,color:"var(--fg-1)",letterSpacing:"-0.03em",fontFamily:"var(--font-mono)"}}>
                  {p.price === 0 ? "₩0" : `₩${p.price.toLocaleString()}`}
                </span>
              </div>
              <div style={{fontSize:12,color:"var(--fg-3)",marginBottom:22}}>{p.priceNote}</div>

              <div style={{marginBottom:22}}>
                {isCurrent ? (
                  p.id === "pro" ? (
                    <Btn variant="ghost" size="lg" style={{width:"100%"}} onClick={()=>setShowCancel(true)}>구독 해지</Btn>
                  ) : (
                    <Btn variant="ghost" size="lg" style={{width:"100%"}} disabled>{p.ctaHint}</Btn>
                  )
                ) : p.id === "pro" ? (
                  <Btn size="lg" style={{width:"100%"}} onClick={()=>onSubscribe(p.id)} iconRight={<Ic.ArrowRight size={14}/>}>
                    Pro 시작하기
                  </Btn>
                ) : (
                  <Btn variant="outline" size="lg" style={{width:"100%"}} onClick={()=>onCancel && onCancel()}>
                    무료 플랜 유지
                  </Btn>
                )}
              </div>

              <ul style={{listStyle:"none",margin:0,padding:0,display:"flex",flexDirection:"column",gap:10}}>
                {p.features.map((f,i)=>(
                  <li key={i} style={{display:"flex",gap:10,alignItems:"flex-start",fontSize:13.5,color: f.on ? "var(--fg-2)" : "var(--fg-4)",lineHeight:1.5}}>
                    <span style={{
                      flexShrink:0, width:18, height:18, borderRadius:"50%",
                      background: f.on ? "var(--point-100)" : "var(--bg-muted)",
                      color: f.on ? "var(--point-600)" : "var(--fg-4)",
                      display:"flex",alignItems:"center",justifyContent:"center",marginTop:1,
                    }}>
                      {f.on ? <Ic.Check size={12}/> : <Ic.X size={12}/>}
                    </span>
                    <span>
                      {f.t}
                      {f.hint && <span style={{color:"var(--fg-4)",fontSize:12,marginLeft:6}}>· {f.hint}</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div style={{marginTop:56, maxWidth:720, margin:"56px auto 0"}}>
        <h3 style={{fontSize:18,fontWeight:700,color:"var(--fg-1)",margin:"0 0 16px",textAlign:"center"}}>자주 묻는 질문</h3>
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {[
            {q:"언제든 해지할 수 있나요?", a:"네, 구독 페이지에서 한 번의 클릭으로 해지할 수 있어요. 해지해도 결제일까지는 Pro 혜택이 유지됩니다."},
            {q:"합격 후에도 계속 결제되나요?", a:"아니요. 합격하셨다면 해지를 권장드려요. 언제든 다시 가입할 수 있어요."},
            {q:"무료 플랜으로도 합격할 수 있나요?", a:"이론은 모두 무료로 열람할 수 있어요. 다만 실전 연습이 제한되어 기출과 모의고사를 충분히 풀기엔 부족할 수 있어요."},
            {q:"환불은 되나요?", a:"결제 후 7일 이내, 문항을 10개 미만으로 푸셨다면 전액 환불 가능합니다."},
          ].map((f,i)=>(
            <details key={i} style={{background:"var(--bg-card)",border:"1px solid var(--border-subtle)",borderRadius:12,padding:"14px 18px",cursor:"pointer"}}>
              <summary style={{fontSize:14,fontWeight:600,color:"var(--fg-1)",listStyle:"none",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <span>{f.q}</span>
                <Ic.ChevronDown size={16}/>
              </summary>
              <div style={{fontSize:13.5,color:"var(--fg-3)",marginTop:10,lineHeight:1.7}}>{f.a}</div>
            </details>
          ))}
        </div>
      </div>

      {showCancel && (
        <ConfirmModal
          title="구독을 해지할까요?"
          body="다음 결제일까지는 Pro 혜택을 계속 사용할 수 있어요. 기록한 오답 노트와 학습 데이터는 그대로 유지됩니다."
          confirmLabel="해지하기" danger
          cancelLabel="유지하기"
          onConfirm={()=>{ setShowCancel(false); onCancel && onCancel(); }}
          onClose={()=>setShowCancel(false)}
        />
      )}
    </div>
  );
};

// ---------- Subscribe flow (mock Stripe/Toss-like checkout) ---------------
export const SubscribeFlow = ({user, onComplete, onCancel}) => {
  const [step, setStep] = React.useState("checkout"); // checkout | processing | success | error
  const [card, setCard] = React.useState({number:"", name:"", expiry:"", cvc:""});
  const [method, setMethod] = React.useState("kakao");
  const [errorMsg, setErrorMsg] = React.useState("");

  const pay = async () => {
    setStep("processing");
    try {
      const { payProWithKakao, portoneConfigured } = await import('../lib/portone');
      if (!portoneConfigured) {
        throw new Error('결제가 아직 연결되지 않았어요. .env.local 의 VITE_PORTONE_* 값을 채워주세요.');
      }
      await payProWithKakao({ userId: user.id, email: user.email });
      setStep("success");
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err?.message || "결제 중 오류가 발생했어요.");
      setStep("error");
    }
  };

  if (step === "error") {
    return (
      <div style={{maxWidth:520,margin:"80px auto",padding:"0 24px",textAlign:"center"}}>
        <div style={{width:72,height:72,borderRadius:"50%",background:"var(--wrong-bg)",color:"var(--wrong-fg)",display:"inline-flex",alignItems:"center",justifyContent:"center",marginBottom:20}}>
          <Ic.X size={36}/>
        </div>
        <h1 style={{fontSize:24,fontWeight:800,color:"var(--fg-1)",margin:"0 0 10px"}}>결제 실패</h1>
        <p style={{fontSize:14,color:"var(--fg-3)",margin:"0 0 24px"}}>{errorMsg}</p>
        <Btn onClick={() => setStep("checkout")}>다시 시도</Btn>
      </div>
    );
  }

  if (step === "success") {
    return (
      <div style={{maxWidth:520,margin:"80px auto",padding:"0 24px",textAlign:"center"}}>
        <div style={{
          width:80,height:80,borderRadius:"50%",background:"var(--point-100)",color:"var(--point-600)",
          display:"inline-flex",alignItems:"center",justifyContent:"center",marginBottom:20,
        }}><Ic.Check size={40}/></div>
        <h1 style={{fontSize:30,fontWeight:800,color:"var(--fg-1)",margin:"0 0 10px",letterSpacing:"-0.02em"}}>Pro 시작!</h1>
        <p style={{fontSize:15,color:"var(--fg-3)",lineHeight:1.7,margin:"0 0 28px"}}>
          환영해요, {user?.name}님. 이제 모든 기출과 모의고사를 무제한으로 풀 수 있어요.<br/>
          다음 결제일은 <b style={{color:"var(--fg-1)"}}>{new Date(Date.now()+30*864e5).toLocaleDateString("ko")}</b>
        </p>
        <Btn size="lg" onClick={onComplete} iconRight={<Ic.ArrowRight size={14}/>}>학습 계속하기</Btn>
      </div>
    );
  }

  if (step === "processing") {
    return (
      <div style={{minHeight:"calc(100vh - 120px)",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:18}}>
        <div style={{width:52,height:52,borderRadius:"50%",border:"3px solid var(--point-100)",borderTopColor:"var(--point-600)",animation:"spin 900ms linear infinite"}}/>
        <div style={{fontSize:15,color:"var(--fg-2)",fontWeight:600}}>결제 처리 중...</div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div style={{maxWidth:960,margin:"0 auto",padding:"36px 28px 80px",display:"grid",gridTemplateColumns:"1.4fr 1fr",gap:32}} className="subscribe-grid">
      <div>
        <button onClick={onCancel} style={{background:"none",border:0,color:"var(--fg-3)",fontSize:13,fontWeight:600,cursor:"pointer",padding:0,display:"inline-flex",alignItems:"center",gap:6,marginBottom:18,fontFamily:"inherit"}}>
          <Ic.ArrowLeft size={14}/> 요금제로 돌아가기
        </button>
        <h1 style={{fontSize:28,fontWeight:800,color:"var(--fg-1)",margin:"0 0 8px",letterSpacing:"-0.02em"}}>결제 정보</h1>
        <p style={{fontSize:14,color:"var(--fg-3)",margin:"0 0 24px"}}>첫 결제 후 자동으로 갱신됩니다. 언제든 해지 가능.</p>

        <div style={{background:"var(--bg-card)",border:"1px solid var(--border-subtle)",borderRadius:14,padding:"20px 22px",marginBottom:18}}>
          <div style={{fontSize:13,fontWeight:700,color:"var(--fg-2)",marginBottom:12}}>결제 수단</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8}}>
            {[{id:"kakao",l:"카카오페이"},{id:"naver",l:"네이버페이 (곧)"},{id:"card",l:"카드 (곧)"}].map(m=>(
              <button key={m.id} disabled={m.id !== "kakao"} onClick={()=>m.id === "kakao" && setMethod(m.id)} style={{
                padding:"12px 0",borderRadius:10,fontFamily:"inherit",fontSize:13,fontWeight:600,cursor:"pointer",
                background: method===m.id ? "var(--point-100)" : "var(--bg-muted)",
                color: method===m.id ? "var(--point-600)" : "var(--fg-3)",
                border: method===m.id ? "1.5px solid var(--point-600)" : "1px solid var(--border-default)",
              }}>{m.l}</button>
            ))}
          </div>
        </div>

        <div style={{background:"var(--bg-card)",border:"1px solid var(--border-subtle)",borderRadius:14,padding:"32px 22px",textAlign:"center",color:"var(--fg-3)",fontSize:13.5}}>
          결제하기를 누르면 카카오페이 앱 또는 웹 결제창이 열려요.
        </div>
      </div>

      <aside style={{alignSelf:"start",position:"sticky",top:88}}>
        <div style={{background:"var(--bg-card)",border:"1px solid var(--border-subtle)",borderRadius:14,padding:"22px 24px",boxShadow:"var(--shadow-sm)"}}>
          <div style={{fontSize:13,fontWeight:700,color:"var(--fg-3)",letterSpacing:"0.04em",marginBottom:12}}>주문 요약</div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",padding:"12px 0",borderBottom:"1px solid var(--border-subtle)"}}>
            <div>
              <div style={{fontSize:15,fontWeight:700,color:"var(--fg-1)"}}>SQL양파 Pro</div>
              <div style={{fontSize:12,color:"var(--fg-3)",marginTop:2}}>월 구독 · 자동 갱신</div>
            </div>
            <div style={{fontSize:15,fontWeight:700,color:"var(--fg-1)",fontFamily:"var(--font-mono)"}}>₩9,900</div>
          </div>
          <div style={{display:"flex",justifyContent:"space-between",padding:"12px 0",fontSize:13,color:"var(--fg-3)"}}>
            <span>부가세</span><span style={{fontFamily:"var(--font-mono)"}}>₩0</span>
          </div>
          <div style={{display:"flex",justifyContent:"space-between",padding:"14px 0 6px",borderTop:"1px solid var(--border-subtle)"}}>
            <span style={{fontSize:14,fontWeight:700,color:"var(--fg-1)"}}>총 결제액</span>
            <span style={{fontSize:20,fontWeight:800,color:"var(--point-600)",fontFamily:"var(--font-mono)"}}>₩9,900</span>
          </div>
          <Btn size="lg" style={{width:"100%",marginTop:14}} onClick={pay}>₩9,900 결제하기</Btn>
          <p style={{fontSize:11,color:"var(--fg-4)",marginTop:12,lineHeight:1.6,textAlign:"center"}}>
            결제 진행 시 <span style={{textDecoration:"underline"}}>결제 약관</span> 및 <span style={{textDecoration:"underline"}}>정기결제 동의</span>에 동의합니다.
          </p>
        </div>
      </aside>

      <style>{`@media(max-width:820px){.subscribe-grid{grid-template-columns:1fr !important;}}`}</style>
    </div>
  );
};

export const PayInput = ({label, value, onChange, placeholder}) => (
  <label style={{display:"flex",flexDirection:"column",gap:6}}>
    <span style={{fontSize:12,color:"var(--fg-3)",fontWeight:600}}>{label}</span>
    <input value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} style={{
      height:42, padding:"0 14px", border:"1px solid var(--border-default)", borderRadius:10,
      fontFamily:"inherit", fontSize:14, background:"var(--bg-page)", color:"var(--fg-1)",
    }}/>
  </label>
);

// ---------- Generic confirm modal ----------------------------------------
export const ConfirmModal = ({title, body, confirmLabel="확인", cancelLabel="취소", danger, onConfirm, onClose}) => (
  <div onClick={onClose} style={{
    position:"fixed", inset:0, background:"rgba(20,24,26,0.5)", zIndex:600,
    display:"flex",alignItems:"center",justifyContent:"center",padding:20,backdropFilter:"blur(2px)",
  }}>
    <div onClick={e=>e.stopPropagation()} style={{
      width:"100%",maxWidth:420,background:"var(--bg-card)",borderRadius:16,
      padding:"24px 24px 20px",boxShadow:"var(--shadow-lg)",border:"1px solid var(--border-subtle)",
    }}>
      <h3 style={{fontSize:18,fontWeight:800,color:"var(--fg-1)",margin:"0 0 8px"}}>{title}</h3>
      <p style={{fontSize:14,color:"var(--fg-3)",lineHeight:1.7,margin:"0 0 20px"}}>{body}</p>
      <div style={{display:"flex",gap:8,justifyContent:"flex-end"}}>
        <Btn variant="ghost" onClick={onClose}>{cancelLabel}</Btn>
        <Btn variant={danger ? "danger" : "primary"} onClick={onConfirm}>{confirmLabel}</Btn>
      </div>
    </div>
  </div>
);

// ---------- Paywall modal (limit hit) -------------------------------------
// variant: "not-logged-in" | "free-limit"
export const Paywall = ({variant, kind, user, info, onClose, onNavigate, onLogin}) => {
  const isAnon = variant === "not-logged-in";

  const titles = {
    "mock": isAnon ? "로그인하고 오늘의 학습을 저장하세요" : "오늘의 모의고사 10문제를 다 푸셨어요",
    "exam": isAnon ? "기출문제는 로그인 후 이용할 수 있어요" : "무료 플랜은 기출 1세트까지 풀 수 있어요",
  };
  const bodies = {
    "mock": isAnon
      ? "로그인하면 풀이 기록이 자동 저장되고, 매일 10문제까지 무료로 풀 수 있어요. Pro로 업그레이드하면 무제한."
      : "무료 플랜은 하루 10문제까지 제공해요. 내일 다시 오시거나, Pro로 업그레이드하면 무제한으로 풀 수 있어요.",
    "exam": isAnon
      ? "로그인하면 최신 기출 1세트(제60회)를 무료로 풀 수 있어요. Pro는 제45~60회 전 회차 무제한."
      : "이미 1세트를 완료하셨어요. Pro로 업그레이드하면 제45~60회 전 회차를 모두 이용할 수 있어요.",
  };

  return (
    <div onClick={onClose} style={{
      position:"fixed", inset:0, background:"rgba(20,24,26,0.55)", zIndex:700,
      display:"flex",alignItems:"center",justifyContent:"center",padding:20,backdropFilter:"blur(2px)",
    }}>
      <div onClick={e=>e.stopPropagation()} style={{
        width:"100%",maxWidth:460,background:"var(--bg-card)",borderRadius:20,
        padding:"32px 32px 28px",boxShadow:"var(--shadow-lg)",border:"1px solid var(--border-subtle)",
        position:"relative",
      }}>
        <button onClick={onClose} style={{
          position:"absolute",top:14,right:14,width:32,height:32,border:0,background:"transparent",
          cursor:"pointer",color:"var(--fg-3)",borderRadius:8,display:"inline-flex",alignItems:"center",justifyContent:"center",
        }}><Ic.X size={18}/></button>

        <div style={{display:"flex",justifyContent:"center",marginBottom:18}}>
          <div style={{
            width:64,height:64,borderRadius:"50%",
            background: isAnon ? "var(--info-bg)" : "var(--point-100)",
            color: isAnon ? "var(--info-fg)" : "var(--point-600)",
            display:"flex",alignItems:"center",justifyContent:"center",
          }}>
            {isAnon ? <Ic.User size={28}/> : <Ic.Sparkles size={28}/>}
          </div>
        </div>

        <h2 style={{fontSize:20,fontWeight:800,color:"var(--fg-1)",textAlign:"center",margin:"0 0 10px",letterSpacing:"-0.01em",lineHeight:1.35}}>
          {titles[kind]}
        </h2>
        <p style={{fontSize:14,color:"var(--fg-3)",lineHeight:1.7,textAlign:"center",margin:"0 0 22px"}}>
          {bodies[kind]}
        </p>

        {!isAnon && kind === "mock" && info && (
          <div style={{background:"var(--bg-muted)",borderRadius:10,padding:"10px 14px",textAlign:"center",marginBottom:18,fontSize:12.5,color:"var(--fg-3)"}}>
            오늘 푼 문제 <span style={{color:"var(--fg-1)",fontWeight:700,fontFamily:"var(--font-mono)"}}>{info.used || LIMITS.mockDaily}</span> / {LIMITS.mockDaily} · 내일 0시에 초기화
          </div>
        )}

        <div style={{display:"flex",flexDirection:"column",gap:8}}>
          {isAnon ? (
            <>
              <Btn size="lg" style={{width:"100%"}} onClick={()=>{onClose(); onNavigate("login");}}>로그인 / 회원가입</Btn>
              <Btn variant="ghost" size="lg" style={{width:"100%"}} onClick={()=>{onClose(); onNavigate("pricing");}}>요금제 보기</Btn>
            </>
          ) : (
            <>
              <Btn size="lg" style={{width:"100%"}} onClick={()=>{onClose(); onNavigate("pricing");}} iconRight={<Ic.ArrowRight size={14}/>}>
                Pro로 업그레이드 · ₩9,900/월
              </Btn>
              <Btn variant="ghost" size="lg" style={{width:"100%"}} onClick={onClose}>나중에</Btn>
            </>
          )}
        </div>

        <div style={{display:"flex",gap:18,justifyContent:"center",marginTop:18,fontSize:11.5,color:"var(--fg-4)"}}>
          <span style={{display:"inline-flex",alignItems:"center",gap:4}}><Ic.Check size={12}/> 언제든 해지</span>
          <span style={{display:"inline-flex",alignItems:"center",gap:4}}><Ic.Check size={12}/> 7일 환불</span>
        </div>
      </div>
    </div>
  );
};

// ---------- Usage badge (for Home / mock) ---------------------------------
export const UsageBadge = ({user}) => {
  const [u, setU] = React.useState(getUsage());
  React.useEffect(() => {
    const h = () => setU(getUsage());
    window.addEventListener("sqlo_usage_change", h);
    return () => window.removeEventListener("sqlo_usage_change", h);
  }, []);
  if (user?.plan === "pro") {
    return (
      <div style={{display:"inline-flex",alignItems:"center",gap:6,padding:"5px 10px",background:"var(--point-100)",color:"var(--point-600)",borderRadius:999,fontSize:11.5,fontWeight:700}}>
        <Ic.Sparkles size={12}/> Pro · 무제한
      </div>
    );
  }
  const mockUsed = u.mockToday || 0;
  const examUsed = (u.examsDone || []).length;
  return (
    <div style={{display:"inline-flex",alignItems:"center",gap:10,fontSize:11.5,color:"var(--fg-3)"}}>
      <span>오늘 모의고사 <b style={{color:"var(--fg-1)",fontFamily:"var(--font-mono)"}}>{mockUsed}/{LIMITS.mockDaily}</b></span>
      <span style={{width:1,height:10,background:"var(--border-default)"}}/>
      <span>기출 <b style={{color:"var(--fg-1)",fontFamily:"var(--font-mono)"}}>{examUsed}/{LIMITS.examSets}</b></span>
    </div>
  );
};


export const sqloUsage = { getUsage, setUsage, incMock, markExamDone, checkLimit, LIMITS };
