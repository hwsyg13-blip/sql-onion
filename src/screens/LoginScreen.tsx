// @ts-nocheck
// LoginScreen — 구글 OAuth (실제) + 카카오/네이버 플레이스홀더
// Layout variants: "centered" | "split" | "minimal"

import React from 'react';
import { Btn, Ic, Mascot, MascotGuide, OnionMark } from '../components/Atoms';
import { signInWithGoogle } from '../lib/auth';

// ---------- Brand icons (원본 브랜드 자산이 아닌, 각 서비스 공식 배포 가능 단순 심볼 기반 재작성)
export const GoogleGlyph = ({size = 18}: any) => (
  <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

export const KakaoGlyph = ({size = 18}: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#191919" d="M12 3C6.48 3 2 6.58 2 11c0 2.79 1.79 5.24 4.5 6.68L5.3 21.5c-.1.3.23.55.5.38L10.55 19c.48.06.96.1 1.45.1 5.52 0 10-3.58 10-8.1S17.52 3 12 3z"/>
  </svg>
);

export const NaverGlyph = ({size = 18}: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <rect width="24" height="24" rx="4" fill="#03C75A"/>
    <path fill="#fff" d="M14.5 7v5.2L9.8 7H7v10h2.5v-5.2L14.2 17H17V7z"/>
  </svg>
);

// ---------- Mock google account picker modal
export const GoogleAccountPicker = ({onPick, onClose}: any) => {
  const accounts = [
    {email: "onion.learner@gmail.com", name: "양파 학습자", avatar: "양"},
    {email: "sqld.newbie@gmail.com",   name: "신입 개발자",  avatar: "신"},
  ];
  return (
    <div style={{
      position:"fixed", inset:0, background:"rgba(20,24,26,0.45)", zIndex:500,
      display:"flex", alignItems:"center", justifyContent:"center", padding:20,
      backdropFilter:"blur(2px)",
    }} onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} style={{
        width:"100%", maxWidth:420, background:"#fff", borderRadius:14,
        boxShadow:"0 24px 60px rgba(0,0,0,0.25)", fontFamily:"Roboto, Arial, sans-serif",
        overflow:"hidden", border:"1px solid #dadce0",
      }}>
        <div style={{padding:"28px 28px 20px", borderBottom:"1px solid #f1f3f4"}}>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:20}}>
            <GoogleGlyph size={22}/>
            <span style={{fontSize:13,color:"#5f6368",letterSpacing:"0.02em"}}>accounts.google.com</span>
          </div>
          <div style={{fontSize:22,color:"#202124",fontWeight:400,marginBottom:6}}>계정 선택</div>
          <div style={{fontSize:13,color:"#5f6368"}}><b style={{color:"#202124"}}>SQL양파</b>(으)로 이동</div>
        </div>
        <div>
          {accounts.map(a => (
            <button key={a.email} onClick={()=>onPick(a)} style={{
              width:"100%", display:"flex", alignItems:"center", gap:14,
              padding:"14px 28px", background:"transparent", border:0,
              borderBottom:"1px solid #f1f3f4", cursor:"pointer", fontFamily:"inherit",
              textAlign:"left",
            }}
            onMouseEnter={e=>e.currentTarget.style.background="#f8f9fa"}
            onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
              <div style={{
                width:36, height:36, borderRadius:"50%", background:"#1a73e8",
                color:"#fff", display:"flex", alignItems:"center", justifyContent:"center",
                fontSize:15, fontWeight:500,
              }}>{a.avatar}</div>
              <div style={{flex:1, minWidth:0}}>
                <div style={{fontSize:14,color:"#202124",fontWeight:500}}>{a.name}</div>
                <div style={{fontSize:13,color:"#5f6368",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{a.email}</div>
              </div>
            </button>
          ))}
          <button onClick={()=>onPick({email:"custom@gmail.com", name:"다른 계정", avatar:"+", custom:true})} style={{
            width:"100%", display:"flex", alignItems:"center", gap:14,
            padding:"14px 28px", background:"transparent", border:0,
            cursor:"pointer", fontFamily:"inherit", textAlign:"left",
          }}
          onMouseEnter={e=>e.currentTarget.style.background="#f8f9fa"}
          onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
            <div style={{
              width:36, height:36, borderRadius:"50%",
              border:"1px dashed #dadce0", color:"#5f6368",
              display:"flex", alignItems:"center", justifyContent:"center", fontSize:20,
            }}>+</div>
            <div style={{fontSize:14,color:"#202124"}}>다른 계정 사용</div>
          </button>
        </div>
        <div style={{padding:"16px 28px 22px", background:"#fafafa", fontSize:11, color:"#5f6368", lineHeight:1.6}}>
          계속하려면 Google에서 이름, 이메일 주소, 언어 환경설정 및 프로필 사진을 SQL양파과(와) 공유합니다. 앱을 사용하기 전에 SQL양파의 <span style={{color:"#1a73e8"}}>개인정보처리방침</span> 및 <span style={{color:"#1a73e8"}}>서비스약관</span>을 검토하세요.
        </div>
      </div>
    </div>
  );
};

// ---------- Provider button (Google / Kakao / Naver 공통)
export const ProviderBtn = ({provider, onClick, size = "lg", disabled = false}: any) => {
  const conf = {
    google: {bg:"#fff",         fg:"#3c4043", border:"1px solid #dadce0", glyph:<GoogleGlyph/>, label:"Google 계정으로 계속하기"},
    kakao:  {bg:"#FEE500",      fg:"#191919", border:"1px solid transparent", glyph:<KakaoGlyph/>, label:"카카오로 시작 (곧 지원)"},
    naver:  {bg:"#03C75A",      fg:"#fff",    border:"1px solid transparent", glyph:<NaverGlyph/>, label:"네이버로 시작 (곧 지원)"},
  }[provider];
  const h = size === "lg" ? 52 : 44;
  const dimmed = disabled ? {opacity: 0.55, cursor: "not-allowed"} : {};
  return (
    <button onClick={disabled ? undefined : onClick} disabled={disabled}
      title={disabled ? "곧 지원 예정이에요. 지금은 Google로 로그인해주세요." : undefined}
      style={{
        width:"100%", height:h, display:"flex", alignItems:"center", justifyContent:"center", gap:12,
        background:conf.bg, color:conf.fg, border:conf.border, borderRadius:12,
        fontFamily:"inherit", fontSize:15, fontWeight:600, cursor:"pointer",
        boxShadow:"0 1px 2px rgba(0,0,0,0.04)",
        transition:"transform 80ms var(--ease-standard), box-shadow 150ms",
        ...dimmed,
      }}
      onMouseDown={e=>{ if(!disabled) e.currentTarget.style.transform="scale(0.995)"; }}
      onMouseUp={e=>e.currentTarget.style.transform=""}
      onMouseLeave={e=>e.currentTarget.style.transform=""}>
      {conf.glyph}<span>{conf.label}</span>
    </button>
  );
};

// ---------- Shared: auth card content (buttons + fine print)
export const AuthBody = ({onPicker, onGuest, onKakao, onNaver, compact}: any) => (
  <div style={{display:"flex",flexDirection:"column",gap:10}}>
    <ProviderBtn provider="google" onClick={onPicker}/>
    <ProviderBtn provider="kakao" onClick={onKakao} disabled={true}/>
    <ProviderBtn provider="naver" onClick={onNaver} disabled={true}/>
    <div style={{display:"flex",alignItems:"center",gap:10,margin:"8px 0"}}>
      <div style={{flex:1,height:1,background:"var(--border-subtle)"}}/>
      <span style={{fontSize:12,color:"var(--fg-4)"}}>또는</span>
      <div style={{flex:1,height:1,background:"var(--border-subtle)"}}/>
    </div>
    <button onClick={onGuest} style={{
      width:"100%", height: 44, background:"transparent", color:"var(--fg-3)",
      border:"1px dashed var(--border-default)", borderRadius:12,
      fontFamily:"inherit", fontSize:14, fontWeight:600, cursor:"pointer",
    }}>로그인 없이 둘러보기</button>
    {!compact && (
      <p style={{fontSize:11.5,color:"var(--fg-4)",lineHeight:1.7,textAlign:"center",margin:"12px 0 0"}}>
        계속 진행하면 SQL양파의 <span style={{color:"var(--fg-3)",textDecoration:"underline"}}>서비스약관</span>과 <span style={{color:"var(--fg-3)",textDecoration:"underline"}}>개인정보처리방침</span>에 동의하는 것으로 간주합니다.
      </p>
    )}
  </div>
);

// ---------- Trust row: tiny stat chips
export const TrustRow = () => (
  <div style={{display:"flex",gap:8,flexWrap:"wrap",marginTop:16}}>
    <span style={{display:"inline-flex",alignItems:"center",gap:6,padding:"6px 10px",background:"var(--bg-muted)",borderRadius:999,fontSize:12,color:"var(--fg-3)"}}>
      <Ic.Check size={13}/> 3주 합격 루틴
    </span>
    <span style={{display:"inline-flex",alignItems:"center",gap:6,padding:"6px 10px",background:"var(--bg-muted)",borderRadius:999,fontSize:12,color:"var(--fg-3)"}}>
      <Ic.ListChecks size={13}/> 기출 10회차 CBT
    </span>
    <span style={{display:"inline-flex",alignItems:"center",gap:6,padding:"6px 10px",background:"var(--bg-muted)",borderRadius:999,fontSize:12,color:"var(--fg-3)"}}>
      <Ic.Sparkles size={13}/> AI 무한 퀴즈
    </span>
  </div>
);

// =======================================================================
// Main LoginScreen
// =======================================================================
export const LoginScreen = ({onNavigate, onLogin, layout = "centered"}: any) => {
  const [picker, setPicker] = React.useState(false);
  const [loading, setLoading] = React.useState(null); // null | "google" | "kakao" | "naver"

  const finishLogin = (user) => {
    setLoading(user.provider);
    setPicker(false);
    setTimeout(() => {
      onLogin({
        provider: user.provider,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        loggedInAt: Date.now(),
      });
      onNavigate("home");
    }, 900);
  };

  const pickGoogle = (acc) => finishLogin({
    provider:"google", name:acc.name, email:acc.email, avatar:acc.avatar,
  });
  const loginKakao = () => finishLogin({
    provider:"kakao", name:"카카오 이용자", email:"user@kakao.com", avatar:"ㅋ",
  });
  const loginNaver = () => finishLogin({
    provider:"naver", name:"네이버 이용자", email:"user@naver.com", avatar:"N",
  });
  const guest = () => { onNavigate("home"); };

  // Loading overlay
  if (loading) {
    const labels = {google:"Google 계정으로 로그인 중", kakao:"카카오 계정 연동 중", naver:"네이버 계정 연동 중"};
    return (
      <div style={{
        minHeight:"calc(100vh - 64px)", display:"flex", alignItems:"center", justifyContent:"center",
        flexDirection:"column", gap:20, padding:40,
      }}>
        <div style={{
          width:64, height:64, borderRadius:"50%",
          border:"3px solid var(--point-100)", borderTopColor:"var(--point-600)",
          animation:"spin 900ms linear infinite",
        }}/>
        <div style={{fontSize:15,color:"var(--fg-2)",fontWeight:600}}>{labels[loading]}...</div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  // Layout: CENTERED (default)
  if (layout === "centered") {
    return (
      <div style={{
        minHeight:"calc(100vh - 64px)", display:"flex", alignItems:"center", justifyContent:"center",
        padding:"48px 24px", background:"linear-gradient(180deg, var(--point-050) 0%, var(--bg-page) 40%)",
      }}>
        <div style={{
          width:"100%", maxWidth:440, background:"var(--bg-card)",
          border:"1px solid var(--border-subtle)", borderRadius:20,
          padding:"40px 36px", boxShadow:"var(--shadow-lg)",
        }}>
          <div style={{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",marginBottom:28}}>
            <Mascot size={88}/>
            <h1 style={{fontSize:26,fontWeight:800,color:"var(--fg-1)",letterSpacing:"-0.02em",margin:"16px 0 6px"}}>
              한 겹씩, <span style={{color:"var(--point-600)"}}>SQLD</span> 합격까지
            </h1>
            <p style={{fontSize:14,color:"var(--fg-3)",margin:0,lineHeight:1.6}}>
              로그인하고 내 학습 기록·오답노트를 저장하세요
            </p>
          </div>
          <AuthBody
            onPicker={() => { setLoading("google"); signInWithGoogle().catch(err => { console.error(err); setLoading(null); alert("로그인 실패: " + (err?.message || "알 수 없는 오류")); }); }}
            onGuest={guest}
            onKakao={loginKakao}
            onNaver={loginNaver}
          />
        </div>
        {/* GoogleAccountPicker: disabled in prod flow, Supabase owns consent UX */}
      </div>
    );
  }

  // Layout: SPLIT (left brand panel + right auth)
  if (layout === "split") {
    return (
      <div style={{minHeight:"calc(100vh - 64px)", display:"flex"}}>
        <div className="login-brand" style={{
          flex:"1 1 50%", background:"var(--point-600)",
          color:"#fff", padding:"64px 56px", display:"flex", flexDirection:"column",
          justifyContent:"space-between", position:"relative", overflow:"hidden",
        }}>
          <div style={{position:"absolute",right:-120,top:-80,width:420,height:420,borderRadius:"50%",background:"rgba(255,255,255,0.06)"}}/>
          <div style={{position:"absolute",right:40,bottom:-140,width:300,height:300,borderRadius:"50%",background:"rgba(255,255,255,0.04)"}}/>
          <div style={{display:"flex",alignItems:"center",gap:10,position:"relative"}}>
            <OnionMark size={26}/>
            <span style={{fontSize:18,fontWeight:700,letterSpacing:"-0.01em"}}>SQL양파</span>
          </div>
          <div style={{position:"relative"}}>
            <div style={{fontSize:13,opacity:0.75,fontWeight:600,letterSpacing:"0.08em",marginBottom:14}}>SQLD 3주 합격 루틴</div>
            <h1 style={{fontSize:42,fontWeight:800,letterSpacing:"-0.025em",lineHeight:1.15,margin:"0 0 18px"}}>
              양파처럼<br/>한 겹씩 벗겨가며<br/>합격하자
            </h1>
            <p style={{fontSize:15.5,opacity:0.85,lineHeight:1.7,maxWidth:400,margin:0}}>
              매일 1시간, 3주면 충분해요. 기출 10회차 CBT와 AI 무한 퀴즈로 실전 감각까지.
            </p>
          </div>
          <div style={{display:"flex",gap:28,position:"relative"}}>
            <div><div style={{fontSize:30,fontWeight:800}}>21일</div><div style={{fontSize:12,opacity:0.75,marginTop:2}}>합격 루틴</div></div>
            <div style={{width:1,background:"rgba(255,255,255,0.2)"}}/>
            <div><div style={{fontSize:30,fontWeight:800}}>1,200+</div><div style={{fontSize:12,opacity:0.75,marginTop:2}}>기출 문항</div></div>
            <div style={{width:1,background:"rgba(255,255,255,0.2)"}}/>
            <div><div style={{fontSize:30,fontWeight:800}}>CBT</div><div style={{fontSize:12,opacity:0.75,marginTop:2}}>실전 모드</div></div>
          </div>
        </div>
        <div style={{
          flex:"1 1 50%", display:"flex", alignItems:"center", justifyContent:"center",
          padding:"48px 32px", background:"var(--bg-page)",
        }}>
          <div style={{width:"100%", maxWidth:380}}>
            <h2 style={{fontSize:24,fontWeight:800,color:"var(--fg-1)",margin:"0 0 8px",letterSpacing:"-0.02em"}}>로그인 / 회원가입</h2>
            <p style={{fontSize:14,color:"var(--fg-3)",margin:"0 0 28px"}}>3초만에 시작 · 별도 가입 없이 소셜 로그인</p>
            <AuthBody
              onPicker={() => { setLoading("google"); signInWithGoogle().catch(err => { console.error(err); setLoading(null); alert("로그인 실패: " + (err?.message || "알 수 없는 오류")); }); }}
              onGuest={guest}
              onKakao={loginKakao}
              onNaver={loginNaver}
            />
          </div>
        </div>
        {/* GoogleAccountPicker: disabled in prod flow, Supabase owns consent UX */}
        <style>{`@media (max-width:860px){.login-brand{display:none !important;}}`}</style>
      </div>
    );
  }

  // Layout: MINIMAL (stark, type-led)
  return (
    <div style={{
      minHeight:"calc(100vh - 64px)", display:"flex", alignItems:"center", justifyContent:"center",
      padding:"64px 28px", background:"var(--bg-page)",
    }}>
      <div style={{width:"100%",maxWidth:380}}>
        <div style={{marginBottom:40}}>
          <OnionMark size={32}/>
          <h1 style={{fontSize:34,fontWeight:800,color:"var(--fg-1)",letterSpacing:"-0.03em",margin:"24px 0 10px",lineHeight:1.1}}>
            다시 만나서<br/>반가워요.
          </h1>
          <p style={{fontSize:15,color:"var(--fg-3)",margin:0,lineHeight:1.6}}>
            소셜 계정으로 로그인하고<br/>학습을 이어가세요.
          </p>
          <TrustRow/>
        </div>
        <AuthBody
          onPicker={() => { setLoading("google"); signInWithGoogle().catch(err => { console.error(err); setLoading(null); alert("로그인 실패: " + (err?.message || "알 수 없는 오류")); }); }}
          onGuest={guest}
          onKakao={loginKakao}
          onNaver={loginNaver}
        />
      </div>
      {picker && <GoogleAccountPicker onPick={pickGoogle} onClose={()=>setPicker(false)}/>}
    </div>
  );
};

// =======================================================================
// User menu (TopNav dropdown when logged in)
// =======================================================================
export const UserMenu = ({user, onLogout, onNavigate}: any) => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef();
  React.useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  const providerDot = {google:"#EA4335", kakao:"#FEE500", naver:"#03C75A"}[user.provider] || "var(--point-600)";
  return (
    <div ref={ref} style={{position:"relative"}}>
      <button onClick={()=>setOpen(o=>!o)} style={{
        display:"inline-flex", alignItems:"center", gap:8, padding:"4px 10px 4px 4px",
        background:"var(--bg-muted)", border:"1px solid var(--border-default)",
        borderRadius:999, cursor:"pointer", fontFamily:"inherit",
      }}>
        <div style={{
          width:30, height:30, borderRadius:"50%", background:"var(--point-600)",
          color:"#fff", display:"flex", alignItems:"center", justifyContent:"center",
          fontSize:13, fontWeight:700, position:"relative",
        }}>
          {user.avatar || user.name?.[0] || "?"}
          <span style={{
            position:"absolute", bottom:-2, right:-2, width:12, height:12,
            borderRadius:"50%", background:providerDot, border:"2px solid var(--bg-card)",
          }}/>
        </div>
        <span style={{fontSize:13,fontWeight:600,color:"var(--fg-2)",maxWidth:120,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
          {user.name}
        </span>
        {user.plan === "pro" && (
          <span style={{display:"inline-flex",alignItems:"center",gap:3,padding:"2px 7px",background:"var(--point-600)",color:"#fff",fontSize:10,fontWeight:700,borderRadius:999,letterSpacing:"0.04em"}}>
            <Ic.Sparkles size={10}/> PRO
          </span>
        )}
        <Ic.ChevronDown size={14}/>
      </button>
      {open && (
        <div style={{
          position:"absolute", top:"calc(100% + 8px)", right:0, width:260,
          background:"var(--bg-card)", border:"1px solid var(--border-default)",
          borderRadius:14, boxShadow:"var(--shadow-lg)", padding:8, zIndex:100,
        }}>
          <div style={{padding:"12px 12px 14px",borderBottom:"1px solid var(--border-subtle)",marginBottom:6}}>
            <div style={{fontSize:14,fontWeight:700,color:"var(--fg-1)"}}>{user.name}</div>
            <div style={{fontSize:12,color:"var(--fg-3)",marginTop:2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{user.email}</div>
            <div style={{marginTop:8, display:"inline-flex", alignItems:"center", gap:6, padding:"3px 8px", background: user.plan === "pro" ? "var(--point-600)" : "var(--bg-muted)", color: user.plan === "pro" ? "#fff" : "var(--fg-3)", borderRadius:999, fontSize:11, fontWeight:700}}>
              {user.plan === "pro"
                ? <><Ic.Sparkles size={11}/> Pro 플랜</>
                : <><span style={{width:8,height:8,borderRadius:"50%",background:providerDot}}/>무료 플랜</>
              }
            </div>
          </div>
          {[
            {icon:Ic.Target,     label:"내 학습 현황",   to:"home"},
            {icon:Ic.Calendar,   label:"3주 계획",      to:"plan"},
            {icon:Ic.Bookmark,   label:"저장한 오답",   to:"theory"},
            {icon:Ic.Sparkles,   label:user.plan === "pro" ? "요금제 (Pro)" : "요금제 · 업그레이드", to:"pricing", highlight: user.plan !== "pro"},
          ].map(it => {
            const I = it.icon;
            return (
              <button key={it.label} onClick={()=>{setOpen(false); onNavigate(it.to);}} style={{
                width:"100%", display:"flex", alignItems:"center", gap:10,
                padding:"9px 12px", background:"transparent", border:0, borderRadius:8,
                cursor:"pointer", fontFamily:"inherit", fontSize:13,
                color: it.highlight ? "var(--point-600)" : "var(--fg-2)",
                fontWeight: it.highlight ? 700 : 500,
                textAlign:"left",
              }}
              onMouseEnter={e=>e.currentTarget.style.background="var(--bg-muted)"}
              onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
                <I size={16}/> {it.label}
                {it.highlight && <span style={{marginLeft:"auto",fontSize:10,background:"var(--point-600)",color:"#fff",padding:"2px 6px",borderRadius:999,fontWeight:700}}>NEW</span>}
              </button>
            );
          })}
          <div style={{height:1,background:"var(--border-subtle)",margin:"6px 0"}}/>
          <button onClick={()=>{setOpen(false); onLogout();}} style={{
            width:"100%", display:"flex", alignItems:"center", gap:10,
            padding:"9px 12px", background:"transparent", border:0, borderRadius:8,
            cursor:"pointer", fontFamily:"inherit", fontSize:13, color:"var(--wrong-fg)", textAlign:"left",
          }}
          onMouseEnter={e=>e.currentTarget.style.background="var(--wrong-bg)"}
          onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
            <Ic.LogOut size={16}/> 로그아웃
          </button>
        </div>
      )}
    </div>
  );
};

// All exports handled inline above.
