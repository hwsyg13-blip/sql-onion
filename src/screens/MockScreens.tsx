// @ts-nocheck
import React from 'react';
import { Btn, Tag, Ic, CodeBlock, Mascot, MascotGuide, OnionMark, Progress, Divider, highlightSQL } from '../components/Atoms';
import { QUIZ_BANK } from '../data/quizBank';
import { sqloUsage } from './PricingScreen';
import { BETA_NO_AUTH } from '../App';

// Endless Quiz — flashcard-esque: single question → grade → explanation → next
// Also hosts Mock landing & Mock exam full 50-item timer mode

export const MockLanding = ({onNavigate}) => (
  <div style={{maxWidth:820,margin:"0 auto",padding:"32px 28px 80px"}}>
    <div style={{display:"flex",alignItems:"center",gap:8,color:"var(--point-600)",fontSize:12,fontWeight:700,letterSpacing:"0.04em"}}>
      <Ic.Sparkles size={14}/> AI 생성형 모의고사
    </div>
    <h1 style={{fontSize:32,fontWeight:800,color:"var(--fg-1)",margin:"6px 0 6px",letterSpacing:"-0.02em"}}>모의고사</h1>
    <p style={{fontSize:14,color:"var(--fg-3)",margin:"0 0 28px"}}>AI가 실제 시험 출제 비율대로 새로운 문제를 만들어요.</p>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:16}}>
      {[
        {id:"mock-exam", t:"실전 모의고사 모드", s:"1과목 10 · 2과목 40, 총 50문항 · 90분 타이머 · 자동 채점", cta:"응시하기", icon:Ic.Clock, tone:"peach"},
        {id:"endless",   t:"랜덤 퀴즈 모드",   s:"한문항씩 즉시 채점 · 해설 보기 · 무한 ", cta:"시작하기", icon:Ic.Shuffle, tone:"blue"},
      ].map(c=>{
        const I = c.icon;
        const accent = c.tone==="peach"?"var(--wrong-fg)":"var(--info-fg)";
        const accentBg = c.tone==="peach"?"var(--wrong-bg)":"var(--info-bg)";
        return (
          <button key={c.id} onClick={()=>onNavigate(c.id)} style={{
            textAlign:"left",background:"var(--bg-card)",border:"1px solid var(--border-subtle)",
            borderRadius:16,padding:"24px 26px",cursor:"pointer",fontFamily:"inherit",
            boxShadow:"var(--shadow-sm)",display:"flex",flexDirection:"column",gap:16,
          }}>
            <div style={{width:48,height:48,borderRadius:12,background:accentBg,color:accent,display:"flex",alignItems:"center",justifyContent:"center"}}><I size={24}/></div>
            <div>
              <div style={{fontSize:18,fontWeight:700,color:"var(--fg-1)",marginBottom:6}}>{c.t}</div>
              <div style={{fontSize:13.5,color:"var(--fg-3)",lineHeight:1.6}}>{c.s}</div>
            </div>
            <div style={{color:accent,fontSize:13,fontWeight:700,display:"flex",alignItems:"center",gap:6}}>{c.cta} <Ic.ArrowRight size={14}/></div>
          </button>
        );
      })}
    </div>
  </div>
);

// Endless — flashcard loop through QUIZ_BANK (shuffled)
export const EndlessScreen = ({onNavigate}) => {
  const [order, setOrder] = React.useState(() => [...QUIZ_BANK].sort(()=>Math.random()-0.5));
  const [idx, setIdx] = React.useState(0);
  const [selected, setSelected] = React.useState(null);
  const [checked, setChecked] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [stats, setStats] = React.useState({correct:0, wrong:0});
  const [saved, setSaved] = React.useState(new Set());
  const [limitHit, setLimitHit] = React.useState(false);

  const q = order[idx % order.length];

  const check = () => {
    if (selected == null) return;
    setChecked(true); setOpen(true);
    setStats(s => selected === q.correctIndex ? {...s, correct: s.correct+1} : {...s, wrong: s.wrong+1});
    // Track daily mock usage (skip in beta — no plans, no limits)
    if (!BETA_NO_AUTH) {
      try {
        const user = JSON.parse(localStorage.getItem("sqlo_user") || "null");
        if (user?.plan !== "pro") {
          const newCount = sqloUsage.incMock(1);
          if (newCount >= sqloUsage.LIMITS.mockDaily) setLimitHit(true);
        }
      } catch(e){}
    }
  };
  const next = () => {
    if (limitHit) { onNavigate("pricing"); return; }
    setSelected(null); setChecked(false); setOpen(false);
    if (idx + 1 >= order.length) setOrder([...QUIZ_BANK].sort(()=>Math.random()-0.5));
    setIdx((idx + 1) % order.length);
  };
  const toggleSave = () => {
    setSaved(s => { const n = new Set(s); n.has(q.id) ? n.delete(q.id) : n.add(q.id); return n; });
  };

  const total = stats.correct + stats.wrong;
  const rate = total ? Math.round(stats.correct/total*100) : 0;

  return (
    <div style={{maxWidth:820,margin:"0 auto",padding:"28px 28px 80px"}}>
      {/* Stats strip */}
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,flexWrap:"wrap",marginBottom:18}}>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <div style={{display:"flex",alignItems:"center",gap:6,color:"var(--info-fg)",fontSize:12,fontWeight:700,letterSpacing:"0.04em"}}>
            <Ic.Shuffle size={14}/> 무한 퀴즈 · AI 생성
          </div>
          <Tag tone="blue" size="sm">{q.subject}</Tag>
          <Tag tone="neutral" size="sm">{q.concept}</Tag>
        </div>
        <div style={{display:"flex",gap:16,fontSize:12,color:"var(--fg-3)"}}>
          <span>푼 문항 <strong style={{color:"var(--fg-1)",fontFamily:"var(--font-mono)"}}>{total}</strong></span>
          <span>정답률 <strong style={{color:"var(--point-600)",fontFamily:"var(--font-mono)"}}>{rate}%</strong></span>
          <span>연속 <strong style={{color:"var(--wrong-fg)",fontFamily:"var(--font-mono)"}}><Ic.Flame size={12}/> {stats.correct > 0 && !checked ? stats.correct : 0}</strong></span>
        </div>
      </div>

      <div style={{background:"var(--bg-card)",border:"1px solid var(--border-subtle)",borderRadius:16,padding:28,boxShadow:"var(--shadow-sm)"}}>
        <QuestionBody q={q}/>
        <OptionList q={q} selected={selected} setSelected={setSelected} checked={checked}/>

        {checked && <FeedbackBanner q={q} correct={selected === q.correctIndex}/>}
        {checked && <Accordion open={open} setOpen={setOpen} explanation={q.explanation}/>}

        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:22,gap:10,flexWrap:"wrap"}}>
          <div style={{display:"flex",gap:8}}>
            <Btn variant="text" size="sm" onClick={toggleSave} icon={saved.has(q.id) ? <Ic.BookmarkFill size={14}/> : <Ic.Bookmark size={14}/>}>
              {saved.has(q.id) ? "오답노트 저장됨" : "오답노트"}
            </Btn>
            <Btn variant="text" size="sm" onClick={next}>건너뛰기</Btn>
          </div>
          <div style={{display:"flex",gap:10}}>
            {!checked ? (
              <Btn onClick={check} disabled={selected==null}>정답 확인</Btn>
            ) : (
              <Btn onClick={next} iconRight={<Ic.ArrowRight/>}>다음 문제</Btn>
            )}
          </div>
        </div>
      </div>

      {/* Mascot guide when user gets streak */}
      {checked && selected === q.correctIndex && stats.correct > 0 && stats.correct % 3 === 0 && !limitHit && (
        <div style={{marginTop:20,display:"flex",justifyContent:"center"}}>
          <MascotGuide size={56}>
            <strong style={{color:"var(--point-600)"}}>좋아요, {stats.correct}문제 연속!</strong><br/>
            이 기세로 다음 문제도 가볍게 풀어봐요.
          </MascotGuide>
        </div>
      )}

      {limitHit && (
        <div style={{marginTop:20,padding:"20px 22px",background:"var(--point-050)",border:"1.5px solid var(--point-500)",borderRadius:14,display:"flex",gap:14,alignItems:"center",flexWrap:"wrap"}}>
          <div style={{width:44,height:44,borderRadius:"50%",background:"var(--point-600)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
            <Ic.Sparkles size={22}/>
          </div>
          <div style={{flex:1,minWidth:180}}>
            <div style={{fontSize:14,fontWeight:700,color:"var(--fg-1)",marginBottom:2}}>오늘의 무료 10문제를 다 풀었어요</div>
            <div style={{fontSize:12.5,color:"var(--fg-3)"}}>Pro로 업그레이드하면 무제한으로 계속 풀 수 있어요.</div>
          </div>
          <Btn onClick={()=>onNavigate("pricing")} iconRight={<Ic.ArrowRight size={14}/>}>Pro 보기</Btn>
        </div>
      )}
    </div>
  );
};

// Shared question rendering pieces (used in Endless, MockExam, CBT)
export const QuestionBody = ({q, noTags}) => (
  <div>
    {!noTags && (
      <div style={{display:"flex",gap:8,marginBottom:12,flexWrap:"wrap"}}>
        <Tag tone="green">{q.subject}</Tag>
        <Tag tone="blue">{q.exam}</Tag>
        <Tag tone="neutral">{q.number}번</Tag>
      </div>
    )}
    <h2 style={{fontSize:20,fontWeight:700,color:"var(--fg-1)",lineHeight:1.45,margin:"0 0 4px",letterSpacing:"-0.01em"}}>{q.title}</h2>
    {q.body && <p style={{fontSize:15,lineHeight:1.7,color:"var(--fg-2)",margin:"10px 0 0"}}>{q.body}</p>}
    {q.query && <CodeBlock>{q.query}</CodeBlock>}
  </div>
);

export const OptionList = ({q, selected, setSelected, checked}) => (
  <ol style={{listStyle:"none",padding:0,margin:"18px 0 0",display:"flex",flexDirection:"column",gap:10}}>
    {q.options.map((opt, i) => {
      const sel = selected === i;
      const ok = checked && i === q.correctIndex;
      const bad = checked && sel && !ok;
      let bg="var(--bg-card)", br="1px solid var(--border-default)", badgeBg="var(--bg-muted)", badgeFg="var(--fg-3)";
      if (sel && !checked) { bg="var(--point-100)"; br="2px solid var(--point-600)"; badgeBg="var(--point-600)"; badgeFg="#fff"; }
      if (ok) { bg="var(--correct-bg)"; br="2px solid var(--point-600)"; badgeBg="var(--point-600)"; badgeFg="#fff"; }
      if (bad) { bg="var(--wrong-bg)"; br="2px solid var(--wrong-border)"; badgeBg="var(--wrong-fg)"; badgeFg="#fff"; }
      return (
        <li key={i}>
          <button onClick={()=>!checked && setSelected(i)} disabled={checked} style={{
            width:"100%",textAlign:"left",display:"flex",gap:12,padding:"14px 16px",
            background:bg,border:br,borderRadius:12,alignItems:"flex-start",
            cursor:checked?"default":"pointer",fontFamily:"inherit",
            transition:"background 150ms, border-color 150ms",
          }}>
            <span style={{
              width:32,height:32,borderRadius:999,background:badgeBg,color:badgeFg,flexShrink:0,
              fontSize:16,fontWeight:700,fontFamily:"var(--font-mono)",
              display:"inline-flex",alignItems:"center",justifyContent:"center",marginTop:1,
            }}>{i+1}</span>
            <span style={{fontSize:14.5,color:"var(--fg-2)",lineHeight:1.65}}>{opt}</span>
          </button>
        </li>
      );
    })}
  </ol>
);

export const FeedbackBanner = ({q, correct}) => (
  <div style={{
    padding:"14px 16px",
    background: correct ? "var(--correct-bg)" : "var(--wrong-bg)",
    border: `1px solid ${correct ? "var(--correct-border)" : "var(--wrong-border)"}`,
    borderRadius:12, marginTop:16,
    display:"flex",gap:12,alignItems:"center",
  }}>
    <div style={{
      width:30,height:30,borderRadius:999,flexShrink:0,
      background: correct ? "var(--point-600)" : "var(--wrong-fg)",
      color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",
    }}>{correct ? <Ic.Check size={16}/> : <Ic.X size={16}/>}</div>
    <div style={{flex:1}}>
      <div style={{fontSize:14.5,fontWeight:700,color: correct ? "var(--correct-fg)" : "var(--wrong-fg)"}}>
        {correct ? "정답입니다." : "오답이에요."}
      </div>
      <div style={{fontSize:12.5,color: correct ? "var(--correct-fg)" : "var(--wrong-fg)",opacity:.85,marginTop:2}}>
        {correct ? `핵심 개념 · ${q.concept}` : `정답은 ${q.correctIndex+1}번 · ${q.concept}`}
      </div>
    </div>
    <Mascot size={36} variant={correct ? "smile" : "sad"}/>
  </div>
);

export const Accordion = ({open, setOpen, explanation}) => (
  <div style={{marginTop:12,border:"1px solid var(--border-subtle)",borderRadius:12,background:"var(--bg-card)",overflow:"hidden"}}>
    <button onClick={()=>setOpen(!open)} style={{
      width:"100%",display:"flex",alignItems:"center",gap:10,
      padding:"14px 18px",background:"transparent",border:0,cursor:"pointer",fontFamily:"inherit",
    }}>
      <Ic.Book size={18}/>
      <span style={{fontSize:14,fontWeight:700,color:"var(--fg-1)"}}>해설 보기</span>
      <span style={{marginLeft:"auto",color:"var(--fg-3)",transform:open?"rotate(180deg)":"none",transition:"transform 200ms",display:"flex"}}><Ic.ChevronDown/></span>
    </button>
    <div style={{
      maxHeight: open ? 600 : 0, opacity: open ? 1 : 0,
      transition: "max-height 320ms var(--ease-standard), opacity 200ms",overflow:"hidden",
    }}>
      <div style={{padding:"0 18px 18px"}}>
        <div style={{padding:"14px 16px",background:"var(--point-050)",borderLeft:"3px solid var(--point-500)",borderRadius:8}}>
          <div style={{fontSize:14,color:"var(--fg-2)",lineHeight:1.75,textWrap:"pretty"}}>{explanation}</div>
        </div>
      </div>
    </div>
  </div>
);

