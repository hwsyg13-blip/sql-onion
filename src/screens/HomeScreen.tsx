// @ts-nocheck
import React from 'react';
import { Btn, Tag, Ic, Mascot, MascotGuide, OnionMark, Progress, Divider, CodeBlock, highlightSQL } from '../components/Atoms';
import { UsageBadge } from './PricingScreen';
import { EXAM_SETS } from '../data/quizBank';
import { AdSlot } from '../components/AdSlot';
import { useProgress } from '../lib/progress';

const EXAM_LABEL: Record<string, string> = Object.fromEntries(
  EXAM_SETS.map(s => [s.id, s.label])
);

// Home — hero + dashboard summary + quick entry to CBT / endless / plan
export const HomeScreen = ({onNavigate, user}) => {
  const { stats } = useProgress();
  const { totalAttempts, correctRate, examsDone, dayProgress, weekNum, weekDay, recentExams } = stats;

  // 최근 완료 기록 있으면 그 카드, 없으면 학습 시작용 기본 카드
  const recentCards = recentExams.slice(0, 3).map(e => ({
    tag: EXAM_LABEL[e.examSetId] || e.examSetId,
    title: `${EXAM_LABEL[e.examSetId] || e.examSetId} 결과 다시 보기 (${e.score}점)`,
    sub: '완료됨',
    route: 'cbt',
    arg: e.examSetId,
  }));
  const resumeCards = recentCards.length > 0 ? recentCards : [
    {tag: '1주차 · Day 1', title: '데이터 모델의 이해', sub: '이론부터 시작하기', route: 'theory-detail', arg: 'c11'},
    {tag: '3주 계획', title: '오늘의 학습 보기', sub: '순서대로 따라가세요', route: 'plan', arg: null},
    {tag: '제60회', title: '최신 기출 맛보기', sub: '2026년 3월 시행', route: 'cbt', arg: 'round-60'},
  ];

  return (
  <div style={{maxWidth: 1080, margin: "0 auto", padding: "32px 28px 80px"}}>
    {user && (
      <section style={{
        background:"var(--bg-card)", border:"1px solid var(--point-100)", borderRadius:14,
        padding:"14px 18px", marginBottom:16, display:"flex", alignItems:"center", gap:12,
        boxShadow:"var(--shadow-sm)",
      }}>
        <div style={{
          width:40, height:40, borderRadius:"50%", background:"var(--point-600)",
          color:"#fff", display:"flex", alignItems:"center", justifyContent:"center",
          fontSize:15, fontWeight:700, flexShrink:0,
        }}>{user.avatar || user.name?.[0]}</div>
        <div style={{flex:1, minWidth:0}}>
          <div style={{fontSize:14,fontWeight:700,color:"var(--fg-1)",display:"flex",alignItems:"center",gap:8}}>
            <span>환영합니다, <span style={{color:"var(--point-600)"}}>{user.name}</span>님 👋</span>
            {user.plan === "pro" && <span style={{fontSize:10,background:"var(--point-600)",color:"#fff",padding:"2px 7px",borderRadius:999,fontWeight:700,letterSpacing:"0.04em"}}>PRO</span>}
          </div>
          <div style={{fontSize:12,color:"var(--fg-3)",marginTop:4}}>
            <UsageBadge user={user}/>
          </div>
        </div>
        {user.plan !== "pro" && <Btn size="sm" variant="soft" onClick={()=>onNavigate("pricing")}>Pro 보기</Btn>}
        {user.plan === "pro" && <Btn size="sm" variant="soft" onClick={()=>onNavigate("plan")}>오늘의 학습</Btn>}
      </section>
    )}
    {/* Hero */}
    <section style={{
      background: "linear-gradient(180deg, var(--point-050) 0%, var(--bg-page) 100%)",
      border: "1px solid var(--point-100)", borderRadius: 20,
      padding: "44px 44px", display: "flex", gap: 36, alignItems: "center",
      flexWrap: "wrap",
    }}>
      <div style={{flex: "2 1 360px"}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12}}>
          <OnionMark size={20}/>
          <span style={{fontSize:13,color:"var(--point-600)",fontWeight:600,letterSpacing:"0.04em"}}>SQLD · 3주 합격 루틴</span>
        </div>
        <h1 style={{fontSize:44,fontWeight:800,color:"var(--fg-1)",letterSpacing:"-0.02em",lineHeight:1.15,margin:"0 0 14px"}}>
          SQLD,<br/>
          <span style={{color:"var(--point-600)"}}>양파처럼</span> 한 겹씩.
        </h1>
        <p style={{fontSize:16,color:"var(--fg-2)",lineHeight:1.7,maxWidth:460,margin:0}}>
          비전공자도 매일 1시간, 3주만에 완성하는 SQLD 자격증<br/>
          주인장이 공부하려고 만든 사이트
        </p>
        <div style={{display:"flex",gap:10,marginTop:24,flexWrap:"wrap"}}>
          <Btn size="lg" onClick={() => onNavigate("plan")} iconRight={<Ic.ArrowRight/>}>3주 계획</Btn>
          <Btn size="lg" variant="outline" onClick={() => onNavigate("theory")}>이론 보기</Btn>
        </div>
      </div>
      <div style={{flex: "1 1 220px", display:"flex", justifyContent:"center"}}>
        <Mascot size={168}/>
      </div>
    </section>

    {/* Quick entries — 3 primary paths */}
    <section style={{marginTop: 28, display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))", gap: 14}}>
      {[
        {id:"exams",   tone:"point", title:"기출문제 CBT", sub:"실제 시험처럼 OMR 답안지로", badge:"추천", icon: Ic.ListChecks, cta:"회차 선택"},
        {id:"endless", tone:"blue",  title:"무한 퀴즈",   sub:"AI가 만드는 단일 문제 · 즉시 채점", badge:"새로", icon: Ic.Shuffle, cta:"시작하기"},
        {id:"mock-exam",tone:"peach", title:"실전 모의고사", sub:"50문항 · 90분 · 합격 판정", icon: Ic.Clock, cta:"응시하기"},
      ].map(card => {
        const I = card.icon;
        const accent = card.tone === "point" ? "var(--point-600)" : card.tone === "blue" ? "var(--info-fg)" : "var(--wrong-fg)";
        const accentBg = card.tone === "point" ? "var(--point-100)" : card.tone === "blue" ? "var(--info-bg)" : "var(--wrong-bg)";
        return (
          <button key={card.id} onClick={()=>onNavigate(card.id)} style={{
            textAlign:"left", background:"var(--bg-card)", border:"1px solid var(--border-subtle)",
            borderRadius:16, padding:"22px 22px", cursor:"pointer", fontFamily:"inherit",
            boxShadow:"var(--shadow-sm)", display:"flex", flexDirection:"column", gap:14,
            transition:"border-color 150ms, transform 150ms",
          }}
          onMouseEnter={(e)=>{e.currentTarget.style.borderColor="var(--point-500)";}}
          onMouseLeave={(e)=>{e.currentTarget.style.borderColor="var(--border-subtle)";}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
              <div style={{
                width:44, height:44, borderRadius:12, background:accentBg, color:accent,
                display:"flex",alignItems:"center",justifyContent:"center",
              }}><I size={22}/></div>
              {card.badge && <Tag tone={card.tone === "point" ? "green" : card.tone === "blue" ? "blue" : "peach"} size="sm">{card.badge}</Tag>}
            </div>
            <div>
              <div style={{fontSize:17,fontWeight:700,color:"var(--fg-1)",marginBottom:4}}>{card.title}</div>
              <div style={{fontSize:13,color:"var(--fg-3)",lineHeight:1.55}}>{card.sub}</div>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:6,color:accent,fontSize:13,fontWeight:600,marginTop:"auto"}}>
              {card.cta} <Ic.ArrowRight size={14}/>
            </div>
          </button>
        );
      })}
    </section>

    {/* Dashboard — my progress */}
    <section style={{marginTop: 28, display:"grid", gridTemplateColumns:"2fr 1fr", gap: 16}} className="dashboard-grid">
      <div style={{background:"var(--bg-card)",border:"1px solid var(--border-subtle)",borderRadius:16,padding:"22px 24px",boxShadow:"var(--shadow-sm)"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:16}}>
          <h3 style={{fontSize:16,fontWeight:700,color:"var(--fg-1)",margin:0}}>회원님의 학습 현황</h3>
          <button onClick={()=>onNavigate("plan")} style={{background:"none",border:0,color:"var(--point-600)",fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>3주 계획 보기 →</button>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14}}>
          {[
            {l:"학습 진도",   v:String(dayProgress), u:"/ 21일", c:"var(--point-600)"},
            {l:"푼 문항",     v:String(stats.totalAttempts), u:"문항", c:"var(--info-fg)"},
            {l:"정답률",      v:String(stats.correctRate), u:"%",   c:"var(--point-600)"},
            {l:"완료 시험",   v:String(stats.examsDone), u:"회",   c:"var(--wrong-fg)"},
          ].map((s,i)=>(
            <div key={i}>
              <div style={{fontSize:12,color:"var(--fg-3)",fontWeight:600,marginBottom:6}}>{s.l}</div>
              <div style={{display:"flex",gap:4,alignItems:"baseline"}}>
                <div style={{fontSize:26,fontWeight:700,color:s.c,fontFamily:"var(--font-mono)",letterSpacing:"-0.02em"}}>{s.v}</div>
                <div style={{fontSize:12,color:"var(--fg-3)"}}>{s.u}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{marginTop:18}}>
          <div style={{display:"flex",justifyContent:"space-between",fontSize:12,color:"var(--fg-3)",marginBottom:6}}>
            <span>Day {dayProgress} · {weekNum}주차 {weekDay}일</span>
            <span style={{fontFamily:"var(--font-mono)"}}>{dayProgress} / 21일</span>
          </div>
          <Progress value={dayProgress} total={21}/>
        </div>
      </div>

      <div style={{background:"var(--bg-card)",border:"1px solid var(--border-subtle)",borderRadius:16,padding:"22px 24px",boxShadow:"var(--shadow-sm)"}}>
        <h3 style={{fontSize:16,fontWeight:700,color:"var(--fg-1)",margin:"0 0 14px"}}>시험 정보</h3>
        <div style={{display:"flex",flexDirection:"column",gap:12,fontSize:13.5}}>
          {[
            {l:"출제", v:"4지선다 · 50문항"},
            {l:"시간", v:"90분"},
            {l:"합격", v:"60점 이상"},
            {l:"과락", v:"과목별 40% 미만"},
          ].map((r,i)=>(
            <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <span style={{color:"var(--fg-3)"}}>{r.l}</span>
              <span style={{color:"var(--fg-1)",fontWeight:600}}>{r.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Recent activity / suggestion */}
    <section style={{marginTop: 28}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:12}}>
        <h3 style={{fontSize:16,fontWeight:700,color:"var(--fg-1)",margin:0}}>이어서 공부하기</h3>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px,1fr))",gap:12}}>
        {resumeCards.map((c,i)=>(
          <button key={i} onClick={()=>onNavigate(c.route, c.arg)} style={{
            textAlign:"left", background:"var(--bg-card)", border:"1px solid var(--border-subtle)",
            borderRadius:12, padding:"16px 18px", cursor:"pointer", fontFamily:"inherit",
            display:"flex",gap:12, alignItems:"flex-start",
          }}>
            <div style={{
              width:36,height:36,borderRadius:10,background:"var(--point-100)",color:"var(--point-600)",
              display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,
            }}><Ic.Play size={14}/></div>
            <div style={{flex:1,minWidth:0}}>
              <div style={{fontSize:11,color:"var(--fg-3)",fontWeight:600,marginBottom:3}}>{c.tag}</div>
              <div style={{fontSize:14,color:"var(--fg-1)",fontWeight:600,marginBottom:3,lineHeight:1.4}}>{c.title}</div>
              <div style={{fontSize:12,color:"var(--fg-3)"}}>{c.sub}</div>
            </div>
            <Ic.ChevronRight size={18}/>
          </button>
        ))}
      </div>
    </section>

    {/* 광고 슬롯 — 홈 하단 */}
    <div style={{marginTop: 32}}>
      <AdSlot slot="HOME_BOTTOM" format="horizontal"/>
    </div>
  </div>
  );
};

