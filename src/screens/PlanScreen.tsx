// @ts-nocheck
import React from 'react';
import { Btn, Tag, Ic, Mascot, MascotGuide, OnionMark, Progress } from '../components/Atoms';

// 3-week plan: summary + week tabs + daily cards. Toggle viz: calendar grid <-> timeline.

export const PLAN_DATA = [
  // Week 1 — 이론 기초
  {week:1, day:1,  subj:"1과목", title:"데이터 모델의 이해",       concept:["3층 스키마","ERD 표기"], est:60, done:true,  theoryId:"c11"},
  {week:1, day:2,  subj:"1과목", title:"엔터티",                   concept:["엔터티 특징","분류"],    est:50, done:true,  theoryId:"c12"},
  {week:1, day:3,  subj:"1과목", title:"속성",                     concept:["기본·설계·파생","도메인"], est:50, done:true, theoryId:"c13"},
  {week:1, day:4,  subj:"1과목", title:"관계",                     concept:["관계차수","선택성"],     est:55, done:true,  theoryId:"c14"},
  {week:1, day:5,  subj:"1과목", title:"식별자",                   concept:["4가지 특성","식별자관계"], est:60, done:true, theoryId:"c15"},
  {week:1, day:6,  subj:"1과목", title:"정규화 · 반정규화",        concept:["1~5NF","반정규화"],      est:60, done:true,  theoryId:null},
  {week:1, day:7,  subj:"1과목", title:"1과목 미니 테스트",        concept:["1과목 총 10문항"],       est:40, done:true,  theoryId:null, test:true},
  // Week 2 — SQL 본체
  {week:2, day:8,  subj:"2과목", title:"SQL 개요 · DDL",           concept:["CREATE/ALTER/DROP"],     est:55, done:false, current:true, theoryId:"c21"},
  {week:2, day:9,  subj:"2과목", title:"SELECT · WHERE",           concept:["함수","연산자"],         est:60, done:false, theoryId:"c22"},
  {week:2, day:10, subj:"2과목", title:"GROUP BY · HAVING",        concept:["집계","ROLLUP·CUBE"],    est:60, done:false, theoryId:"c23"},
  {week:2, day:11, subj:"2과목", title:"JOIN",                     concept:["INNER","OUTER","SELF"],  est:65, done:false, theoryId:"c24"},
  {week:2, day:12, subj:"2과목", title:"서브쿼리",                 concept:["스칼라","인라인뷰"],     est:60, done:false, theoryId:"c25"},
  {week:2, day:13, subj:"2과목", title:"집합 · 계층형",            concept:["UNION","CONNECT BY"],    est:55, done:false, theoryId:"c26"},
  {week:2, day:14, subj:"2과목", title:"윈도우 함수",              concept:["RANK","PARTITION BY"],   est:60, done:false, theoryId:"c27"},
  // Week 3 — 실전
  {week:3, day:15, subj:"기출",   title:"제60회(최신) 기출",        concept:["CBT 실전"],              est:90, done:false, examId:"round-60"},
  {week:3, day:16, subj:"기출",   title:"제59회 기출",              concept:["CBT 실전"],              est:90, done:false, examId:"round-59"},
  {week:3, day:17, subj:"기출",   title:"제58회 기출 · 오답 복습",  concept:["오답노트"],               est:60, done:false, examId:"round-58"},
  {week:3, day:18, subj:"모의",   title:"AI 모의고사 1회",         concept:["90분 실전"],              est:90, done:false, mock:true},
  {week:3, day:19, subj:"모의",   title:"AI 모의고사 2회",         concept:["취약 단원 집중"],         est:90, done:false, mock:true},
  {week:3, day:20, subj:"복습",   title:"전체 오답노트 리뷰",      concept:["해설 재확인"],            est:60, done:false},
  {week:3, day:21, subj:"마무리", title:"시험 전날 체크리스트",    concept:["준비물","컨디션"],        est:30, done:false, final:true},
];

export const PlanScreen = ({onNavigate, planViz, setPlanViz}) => {
  const [week, setWeek] = React.useState(2);
  const doneCount = PLAN_DATA.filter(d => d.done).length;
  const totalMin = PLAN_DATA.reduce((a, d) => a + d.est, 0);
  const doneMin  = PLAN_DATA.filter(d=>d.done).reduce((a,d)=>a+d.est, 0);

  const openDay = (d) => {
    if (d.theoryId) onNavigate("theory-detail", d.theoryId);
    else if (d.examId) onNavigate("cbt", d.examId);
    else if (d.mock) onNavigate("mock-exam");
    else if (d.test) onNavigate("endless");
  };

  return (
    <div style={{maxWidth:1080, margin:"0 auto", padding:"32px 28px 80px"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:16,marginBottom:20}}>
        <div>
          <div style={{display:"flex",alignItems:"center",gap:8,color:"var(--point-600)",fontSize:12,fontWeight:700,letterSpacing:"0.04em"}}>
            <Ic.Calendar size={14}/> 3-WEEK ROUTINE
          </div>
          <h1 style={{fontSize:32,fontWeight:800,color:"var(--fg-1)",margin:"6px 0 4px",letterSpacing:"-0.02em"}}>3주 공부계획</h1>
          <p style={{fontSize:14,color:"var(--fg-3)",margin:0}}>하루 1시간 × 21일. 이론 → 기출 → 모의고사 순서로.</p>
        </div>
        <div style={{display:"flex",gap:6,padding:4,background:"var(--bg-muted)",borderRadius:10}}>
          <button onClick={()=>setPlanViz("calendar")} style={vizBtn(planViz==="calendar")}>
            <Ic.Calendar size={14}/> 캘린더
          </button>
          <button onClick={()=>setPlanViz("timeline")} style={vizBtn(planViz==="timeline")}>
            <Ic.ListChecks size={14}/> 타임라인
          </button>
        </div>
      </div>

      {/* Progress summary */}
      <section style={{
        background:"var(--bg-card)", border:"1px solid var(--border-subtle)", borderRadius:16,
        padding:"22px 26px", boxShadow:"var(--shadow-sm)",
      }}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:24}} className="plan-summary-grid">
          {[
            {l:"완료 일자", v:`${doneCount}`, u:"/ 21일"},
            {l:"누적 시간", v:`${Math.floor(doneMin/60)}h ${doneMin%60}m`, u:`전체 ${Math.floor(totalMin/60)}h`},
            {l:"현재 주차", v:"2주차", u:"Day 8 진행 중"},
            {l:"남은 일자", v:`${21-doneCount}`, u:"일"},
          ].map((s,i)=>(
            <div key={i}>
              <div style={{fontSize:12,color:"var(--fg-3)",fontWeight:600,marginBottom:6}}>{s.l}</div>
              <div style={{display:"flex",alignItems:"baseline",gap:6}}>
                <div style={{fontSize:28,fontWeight:700,color:"var(--fg-1)",fontFamily:"var(--font-mono)",letterSpacing:"-0.02em"}}>{s.v}</div>
                <div style={{fontSize:12,color:"var(--fg-3)"}}>{s.u}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{marginTop:20}}><Progress value={doneCount} total={21}/></div>
      </section>

      {/* Week tabs */}
      <div style={{marginTop:24,display:"flex",gap:8,borderBottom:"1px solid var(--border-subtle)"}}>
        {[1,2,3].map(w => {
          const active = week === w;
          const ws = ["이론 기초","SQL 본체","실전 모의"];
          const doneW = PLAN_DATA.filter(d=>d.week===w && d.done).length;
          const totalW = PLAN_DATA.filter(d=>d.week===w).length;
          return (
            <button key={w} onClick={()=>setWeek(w)} style={{
              padding:"12px 18px", background:"none", border:0, cursor:"pointer", fontFamily:"inherit",
              fontSize:14, fontWeight: active ? 700 : 500,
              color: active ? "var(--fg-1)" : "var(--fg-3)",
              borderBottom: active ? "2px solid var(--point-600)" : "2px solid transparent",
              marginBottom:-1, display:"flex", alignItems:"center", gap:8,
            }}>
              <span>{w}주차 · {ws[w-1]}</span>
              <Tag tone={doneW===totalW ? "green" : "neutral"} size="sm">{doneW}/{totalW}</Tag>
            </button>
          );
        })}
      </div>

      {planViz === "calendar" ? (
        <CalendarView week={week} openDay={openDay}/>
      ) : (
        <TimelineView week={week} openDay={openDay}/>
      )}

      {/* Mascot guide */}
      <div style={{marginTop:28, display:"flex", justifyContent:"flex-end"}}>
        <MascotGuide size={64} variant="smile" side="left">
          <strong style={{color:"var(--fg-1)"}}>오늘은 Day 8이에요.</strong><br/>
          DDL을 가볍게 훑고 내일 SELECT로 넘어가요.
        </MascotGuide>
      </div>
    </div>
  );
};

const vizBtn = (active) => ({
  display:"inline-flex", alignItems:"center", gap:6,
  padding:"7px 12px", fontSize:13, fontWeight:600, borderRadius:7, cursor:"pointer",
  fontFamily:"inherit", border:0,
  background: active ? "var(--bg-card)" : "transparent",
  color: active ? "var(--fg-1)" : "var(--fg-3)",
  boxShadow: active ? "var(--shadow-sm)" : "none",
});

export const CalendarView = ({week, openDay}) => {
  const days = PLAN_DATA.filter(d=>d.week===week);
  return (
    <div style={{marginTop:20, display:"grid", gridTemplateColumns:"repeat(7, 1fr)", gap:10}} className="plan-calendar">
      {days.map(d => {
        const bg = d.current ? "var(--point-050)" : d.done ? "var(--bg-card)" : "var(--bg-card)";
        const border = d.current ? "2px solid var(--point-600)" : d.done ? "1px solid var(--point-100)" : "1px solid var(--border-subtle)";
        return (
          <button key={d.day} onClick={()=>openDay(d)} style={{
            textAlign:"left", background:bg, border, borderRadius:12, padding:"14px 14px",
            cursor:"pointer", fontFamily:"inherit", minHeight:160,
            display:"flex",flexDirection:"column",gap:8,
          }}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div style={{fontSize:11,color:"var(--fg-3)",fontWeight:700}}>DAY {d.day}</div>
              {d.done ? (
                <div style={{width:18,height:18,borderRadius:999,background:"var(--point-600)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center"}}>
                  <Ic.Check size={11}/>
                </div>
              ) : d.current ? (
                <span style={{width:8,height:8,borderRadius:999,background:"var(--point-600)",boxShadow:"0 0 0 4px var(--point-100)"}}/>
              ) : (
                <span style={{width:8,height:8,borderRadius:999,background:"var(--border-strong)"}}/>
              )}
            </div>
            <Tag tone={d.subj==="1과목"||d.subj==="2과목"?"green":d.subj==="기출"?"blue":"peach"} size="sm">{d.subj}</Tag>
            <div style={{fontSize:13,fontWeight:700,color:"var(--fg-1)",lineHeight:1.35}}>{d.title}</div>
            <div style={{fontSize:11,color:"var(--fg-3)",display:"flex",flexWrap:"wrap",gap:4,marginTop:"auto"}}>
              {d.concept.map((c,i)=>(<span key={i}>{c}{i<d.concept.length-1 && " · "}</span>))}
            </div>
            <div style={{fontSize:11,color:"var(--fg-3)",fontFamily:"var(--font-mono)",display:"flex",alignItems:"center",gap:4}}>
              <Ic.Clock size={11}/> {d.est}분
            </div>
          </button>
        );
      })}
    </div>
  );
};

export const TimelineView = ({week, openDay}) => {
  const days = PLAN_DATA.filter(d=>d.week===week);
  return (
    <div style={{marginTop:20,position:"relative",paddingLeft:36}}>
      <div style={{position:"absolute",left:14,top:12,bottom:12,width:2,background:"var(--border-subtle)"}}/>
      {days.map((d,i)=>(
        <div key={d.day} style={{position:"relative",marginBottom:12}}>
          <div style={{
            position:"absolute",left:-30,top:18,width:30,height:30,borderRadius:999,
            background: d.done ? "var(--point-600)" : d.current ? "var(--bg-card)" : "var(--bg-muted)",
            border: d.current ? "2.5px solid var(--point-600)" : d.done ? "2.5px solid var(--point-600)" : "2px solid var(--border-default)",
            color: d.done ? "#fff" : d.current ? "var(--point-600)" : "var(--fg-3)",
            display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,
            fontFamily:"var(--font-mono)",
          }}>
            {d.done ? <Ic.Check size={14}/> : d.day}
          </div>
          <button onClick={()=>openDay(d)} style={{
            width:"100%",textAlign:"left",background:"var(--bg-card)",
            border: d.current ? "2px solid var(--point-600)" : "1px solid var(--border-subtle)",
            borderRadius:12,padding:"16px 20px",cursor:"pointer",fontFamily:"inherit",
            display:"flex",alignItems:"center",gap:16,
          }}>
            <div style={{flex:1,minWidth:0}}>
              <div style={{display:"flex",gap:6,marginBottom:6}}>
                <Tag tone={d.subj==="1과목"||d.subj==="2과목"?"green":d.subj==="기출"?"blue":"peach"} size="sm">{d.subj}</Tag>
                {d.current && <Tag tone="solid" size="sm">오늘</Tag>}
                {d.done && <Tag tone="neutral" size="sm">완료</Tag>}
              </div>
              <div style={{fontSize:15,fontWeight:700,color:"var(--fg-1)",marginBottom:4}}>Day {d.day} · {d.title}</div>
              <div style={{fontSize:12,color:"var(--fg-3)"}}>{d.concept.join(" · ")}</div>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:4,fontSize:12,color:"var(--fg-3)",fontFamily:"var(--font-mono)"}}>
              <Ic.Clock size={12}/> {d.est}분
            </div>
            <Ic.ChevronRight size={18}/>
          </button>
        </div>
      ))}
    </div>
  );
};

