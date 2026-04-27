// @ts-nocheck
import React from 'react';
import { Btn, Tag, Ic, Mascot, MascotGuide, OnionMark, Progress } from '../components/Atoms';
import { useProgress, isPlanDayDone } from '../lib/progress';
import { AdSlot } from '../components/AdSlot';
import { THEORY } from '../data/theory';
import { NEXT_EXAM, daysUntilExam } from '../lib/examDate';

// 3-week plan v2 — chapters 배열 + 시험일 기준 D-day.
// 명세: docs/qa/3-week-plan-redesign.md
// 시작 권장일 = 시험일 - 21일 = 5/11. Day N 권장 날짜 = 시작일 + (N-1)일.

export const PLAN_DATA = [
  // ─ Week 1: 1과목 데이터 모델링 (10개 챕터 + 미니테스트)
  {week:1, day:1,  subj:"1과목", title:"데이터 모델의 이해",
    chapters:["c111"], concept:["3층 스키마","개념→논리→물리"], est:50},
  {week:1, day:2,  subj:"1과목", title:"엔터티 + 속성",
    chapters:["c112","c113"], concept:["엔터티 5대 특징","기본·설계·파생"], est:60},
  {week:1, day:3,  subj:"1과목", title:"관계 + 식별자",
    chapters:["c114","c115"], concept:["1:1·1:N·M:N","유·최·불·존"], est:65},
  {week:1, day:4,  subj:"1과목", title:"정규화",
    chapters:["c121"], concept:["1NF→2NF→3NF→BCNF","반정규화"], est:60},
  {week:1, day:5,  subj:"1과목", title:"관계와 조인 + 트랜잭션",
    chapters:["c122","c123"], concept:["관계=FK=JOIN","ACID"], est:60},
  {week:1, day:6,  subj:"1과목", title:"NULL + 본질·인조 식별자",
    chapters:["c124","c125"], concept:["IS NULL만 가능","본질 vs 인조"], est:60},
  {week:1, day:7,  subj:"1과목", title:"1과목 미니 테스트",
    concept:["1과목 핵심 10문항"], est:40, test:true},

  // ─ Week 2: 2-1 (8개) + 2-2 일부 (6개) = 14개
  {week:2, day:8,  subj:"2과목", title:"RDB 개요 + SELECT문",
    chapters:["c211","c212"], concept:["DDL/DML/DCL/TCL","FWGHSO 실행 순서"], est:55},
  {week:2, day:9,  subj:"2과목", title:"함수 + WHERE절",
    chapters:["c213","c214"], concept:["단일행/다중행","AND/OR/IN/LIKE"], est:60},
  {week:2, day:10, subj:"2과목", title:"GROUP BY/HAVING + ORDER BY",
    chapters:["c215","c216"], concept:["WHERE vs HAVING","NULL 정렬"], est:60},
  {week:2, day:11, subj:"2과목", title:"조인 + 표준 조인",
    chapters:["c217","c218"], concept:["등가/비등가/셀프/외부/교차","INNER/OUTER/NATURAL/USING"], est:65},
  {week:2, day:12, subj:"2과목", title:"서브쿼리 + 집합 연산자",
    chapters:["c221","c222"], concept:["스칼라/인라인뷰/연관","UNION/INTERSECT/MINUS"], est:60},
  {week:2, day:13, subj:"2과목", title:"그룹 함수 + 윈도우 함수",
    chapters:["c223","c224"], concept:["ROLLUP/CUBE","RANK/PARTITION BY"], est:65},
  {week:2, day:14, subj:"2과목", title:"Top N + 계층형 질의",
    chapters:["c225","c226"], concept:["ROWNUM/FETCH","CONNECT BY"], est:60},

  // ─ Week 3: 2-2 마무리 + 2-3 + 실전
  {week:3, day:15, subj:"2과목", title:"PIVOT/UNPIVOT + 정규 표현식",
    chapters:["c227","c228"], concept:["세로↔가로","REGEXP_*"], est:55},
  {week:3, day:16, subj:"2과목", title:"DML + TCL",
    chapters:["c231","c232"], concept:["INSERT/UPDATE/DELETE/MERGE","COMMIT/ROLLBACK"], est:60},
  {week:3, day:17, subj:"2과목", title:"DDL + DCL",
    chapters:["c233","c234"], concept:["CREATE/ALTER/DROP","GRANT/REVOKE"], est:55},
  {week:3, day:18, subj:"기출", title:"제60회(최신) 기출",
    concept:["CBT 실전"], est:90, examId:"round-60"},
  {week:3, day:19, subj:"기출", title:"제59회 기출",
    concept:["CBT 실전","약점 보강"], est:90, examId:"round-59"},
  {week:3, day:20, subj:"실전", title:"제58회 기출 + 모의고사 1회",
    concept:["기출 마무리","90분 모의 1차"], est:150, examId:"round-58", mock:true},
  {week:3, day:21, subj:"마무리", title:"모의 2회 + 시험 대비 통독 + 체크리스트",
    concept:["취약 단원 점검","함정·정리 한 번에","준비물·컨디션"], est:150, mock:true, examReview:true, final:true},
];

// 챕터 ID → 제목 lookup (Day 카드의 챕터 칩에 사용)
const CHAPTER_TITLE: Record<string, string> = (() => {
  const out: Record<string, string> = {};
  for (const sub of THEORY.subjects || []) {
    for (const sec of sub.sections || []) {
      for (const ch of sec.chapters || []) {
        out[ch.id] = ch.title;
      }
    }
  }
  return out;
})();

// 권장 시작일 = 시험일 - 21일 = 2026-05-11 (월).  Day N 권장 날짜 = 시작일 + (N-1)일.
const PLAN_START = '2026-05-11';
function recommendedDateLabel(dayN: number): string {
  const start = new Date(PLAN_START + 'T00:00:00+09:00');
  const d = new Date(start);
  d.setDate(d.getDate() + (dayN - 1));
  const m = d.getMonth() + 1, dd = d.getDate();
  const wd = ['일','월','화','수','목','금','토'][d.getDay()];
  return `${m}/${dd} (${wd})`;
}

export const PlanScreen = ({onNavigate, planViz, setPlanViz}) => {
  const { progress, stats } = useProgress();

  // 컨텐츠 완료 기준으로 done 계산 → "다음 학습할 Day" 를 current 로
  const planWithStatus = React.useMemo(() => {
    const withDone = PLAN_DATA.map(d => ({
      ...d,
      done: isPlanDayDone(d, progress, stats),
    }));
    const nextDay = withDone.find(d => !d.done)?.day ?? 21;
    return withDone.map(d => ({ ...d, current: !d.done && d.day === nextDay }));
  }, [progress, stats]);

  const currentDay = planWithStatus.find(d => d.current)?.day ?? 21;
  const currentWeek = Math.min(3, Math.ceil(currentDay / 7));

  // 시작 시 현재 주차로
  const [week, setWeek] = React.useState(currentWeek);
  React.useEffect(() => { setWeek(currentWeek); }, [currentWeek]);

  // D-day
  const dDay = daysUntilExam();
  const dDayLabel =
    dDay > 0 ? `시험까지 ${dDay}일`
    : dDay === 0 ? '시험 당일'
    : `시험 ${-dDay}일 지남`;

  const openDay = (d: any) => {
    if (d.chapters?.length) {
      // 첫 챕터로 진입 (여러 챕터 묶음 보기는 다음 PR 에서 별도 라우트 추가 예정)
      onNavigate('theory-detail', d.chapters[0]);
    } else if (d.examId) onNavigate('cbt', d.examId);
    else if (d.mock) onNavigate('mock-exam');
    else if (d.test) onNavigate('endless');
  };

  return (
    <div style={{maxWidth:1080, margin:"0 auto", padding:"32px 28px 80px"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:16,marginBottom:24}}>
        <div>
          <div style={{display:"flex",alignItems:"center",gap:8,color:"var(--point-600)",fontSize:12,fontWeight:700,letterSpacing:"0.04em"}}>
            <Ic.Calendar size={14}/> 3-WEEK ROUTINE
          </div>
          <h1 style={{fontSize:32,fontWeight:800,color:"var(--fg-1)",margin:"6px 0 6px",letterSpacing:"-0.02em"}}>3주 공부계획</h1>
          <div style={{display:"flex",alignItems:"center",gap:10,fontSize:14,color:"var(--fg-3)",flexWrap:"wrap"}}>
            <span>{NEXT_EXAM.label} : {(() => { const [, m, d] = NEXT_EXAM.date.split('-'); return `${+m}월 ${+d}일`; })()}({NEXT_EXAM.weekday})</span>
            <span style={{color:'var(--border-strong)'}}>·</span>
            <strong style={{color:dDay <= 7 ? 'var(--wrong-fg)' : 'var(--point-600)',fontWeight:700,fontFamily:'var(--font-mono)'}}>{dDayLabel}</strong>
          </div>
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

      {/* Week tabs */}
      <div style={{marginTop:8,display:"flex",gap:8,borderBottom:"1px solid var(--border-subtle)"}}>
        {[1,2,3].map(w => {
          const active = week === w;
          const ws = ["이론 기초","SQL 본체","실전 모의"];
          const doneW = planWithStatus.filter(d=>d.week===w && d.done).length;
          const totalW = planWithStatus.filter(d=>d.week===w).length;
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
        <CalendarView week={week} openDay={openDay} data={planWithStatus}/>
      ) : (
        <TimelineView week={week} openDay={openDay} data={planWithStatus}/>
      )}

      {/* Mascot guide */}
      <div style={{marginTop:28, display:"flex", justifyContent:"flex-end"}}>
        {(() => {
          const today = planWithStatus.find(d => d.current);
          const msg = today
            ? <>오늘은 <strong style={{color:"var(--fg-1)"}}>Day {today.day}</strong>이에요.<br/>{today.title} 부터 시작해봐요.</>
            : <>아직 학습 기록이 없어요.<br/>Day 1 부터 차근차근 시작해봐요.</>;
          return <MascotGuide size={64} variant="smile" side="left">{msg}</MascotGuide>;
        })()}
      </div>

      {/* 광고 슬롯 — 3주 계획 하단 */}
      <div style={{marginTop:32}}>
        <AdSlot slot="PLAN_BOTTOM" format="horizontal"/>
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

// 챕터 칩 — chapters 배열을 Day 카드 안에 표시
const ChapterChips = ({chapters, max = 2}: any) => {
  if (!chapters?.length) return null;
  return (
    <div style={{display:'flex',gap:4,flexWrap:'wrap'}}>
      {chapters.slice(0, max).map((cid: string) => (
        <span key={cid} style={{
          fontSize: 10.5, fontWeight: 700, padding: '2px 7px', borderRadius: 5,
          background: 'var(--point-100)', color: 'var(--point-600)',
          fontFamily: 'var(--font-mono)', letterSpacing: '0.02em',
        }}>{cid}</span>
      ))}
      {chapters.length > max && (
        <span style={{fontSize:10.5,color:'var(--fg-3)'}}>+{chapters.length - max}</span>
      )}
    </div>
  );
};

export const CalendarView = ({week, openDay, data}) => {
  const src = data || PLAN_DATA;
  const days = src.filter(d=>d.week===week);
  return (
    <div style={{marginTop:20, display:"grid", gridTemplateColumns:"repeat(7, 1fr)", gap:10}} className="plan-calendar">
      {days.map(d => {
        const bg = d.current ? "var(--point-050)" : d.done ? "var(--bg-card)" : "var(--bg-card)";
        const border = d.current ? "2px solid var(--point-600)" : d.done ? "1px solid var(--point-100)" : "1px solid var(--border-subtle)";
        return (
          <button key={d.day} onClick={()=>openDay(d)} style={{
            textAlign:"left", background:bg, border, borderRadius:12, padding:"14px 14px",
            cursor:"pointer", fontFamily:"inherit", minHeight:170,
            display:"flex",flexDirection:"column",gap:8,
          }}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div style={{fontSize:11,color:"var(--fg-3)",fontWeight:700,fontFamily:'var(--font-mono)'}}>
                DAY {d.day} · <span style={{color:'var(--fg-4)'}}>{recommendedDateLabel(d.day)}</span>
              </div>
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
            <ChapterChips chapters={d.chapters}/>
            <div style={{fontSize:11,color:"var(--fg-3)",display:"flex",flexWrap:"wrap",gap:4}}>
              {d.concept.map((c,i)=>(<span key={i}>{c}{i<d.concept.length-1 && " · "}</span>))}
            </div>
            <div style={{fontSize:11,color:"var(--fg-3)",fontFamily:"var(--font-mono)",display:"flex",alignItems:"center",gap:4,marginTop:"auto"}}>
              <Ic.Clock size={11}/> {d.est}분
            </div>
          </button>
        );
      })}
    </div>
  );
};

export const TimelineView = ({week, openDay, data}) => {
  const src = data || PLAN_DATA;
  const days = src.filter(d=>d.week===week);
  return (
    <div style={{marginTop:20,position:"relative",paddingLeft:36}}>
      <div style={{position:"absolute",left:14,top:12,bottom:12,width:2,background:"var(--border-subtle)"}}/>
      {days.map((d) => (
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
              <div style={{display:"flex",gap:6,marginBottom:6,alignItems:'center',flexWrap:'wrap'}}>
                <Tag tone={d.subj==="1과목"||d.subj==="2과목"?"green":d.subj==="기출"?"blue":"peach"} size="sm">{d.subj}</Tag>
                {d.current && <Tag tone="solid" size="sm">오늘</Tag>}
                {d.done && <Tag tone="neutral" size="sm">완료</Tag>}
                <span style={{fontSize:11,color:'var(--fg-4)',fontFamily:'var(--font-mono)'}}>{recommendedDateLabel(d.day)}</span>
              </div>
              <div style={{fontSize:15,fontWeight:700,color:"var(--fg-1)",marginBottom:4}}>Day {d.day} · {d.title}</div>
              <div style={{fontSize:12,color:"var(--fg-3)",display:'flex',gap:8,alignItems:'center',flexWrap:'wrap'}}>
                <span>{d.concept.join(" · ")}</span>
                {d.chapters?.length > 0 && (
                  <>
                    <span style={{color:'var(--border-strong)'}}>·</span>
                    <ChapterChips chapters={d.chapters} max={3}/>
                  </>
                )}
              </div>
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
