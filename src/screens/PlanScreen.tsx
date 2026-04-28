// @ts-nocheck
import React from 'react';
import { Btn, Tag, Ic, Mascot, MascotGuide, OnionMark, Progress } from '../components/Atoms';
import { useProgress, isPlanDayDone } from '../lib/progress';
import { AdSlot } from '../components/AdSlot';
import { NEXT_EXAM, daysUntilExam } from '../lib/examDate';

// 3-week plan v3 — actions 배열 (한 Day 안에 여러 활동 → 각각 따로 버튼).
// 명세: 사용자 요청 (2026-04-27)
//   Week 1~2 (14일): 30챕터 이론 마스터 (미니 테스트 제거)
//   Week 3 Day 15~18 (월~목): 매일 기출 3회차씩 (round-60→49 내림차순, 12회차)
//   Week 3 Day 19~20 (금~토): 모의고사 3개씩
//   Week 3 Day 21 (일): 최종 암기장

// 액션 타입:
//   { kind: 'theory', label, chapterId }
//   { kind: 'cbt',    label, examId }
//   { kind: 'mock',   label }
//   { kind: 'cheatsheet', label }

export const PLAN_DATA = [
  // ─ Week 1 Day 1~4 (4일): 1과목 10챕터 압축 — 출제 비중 10/50 으로 빠르게 보고 2과목에 시간 배분
  {week:1, day:1,  subj:"1과목", title:"데이터 모델 + 엔터티",
    actions:[{kind:'theory',label:'데이터 모델의 이해',chapterId:'c111'},{kind:'theory',label:'엔터티',chapterId:'c112'}],
    concept:["3층 스키마","엔터티 5대 특징"], est:60},
  {week:1, day:2,  subj:"1과목", title:"속성 + 관계 + 식별자",
    actions:[
      {kind:'theory',label:'속성',chapterId:'c113'},
      {kind:'theory',label:'관계',chapterId:'c114'},
      {kind:'theory',label:'식별자',chapterId:'c115'},
    ],
    concept:["기본·설계·파생","1:1·1:N·M:N","유·최·불·존"], est:75},
  {week:1, day:3,  subj:"1과목", title:"정규화 + 관계조인 + 트랜잭션",
    actions:[
      {kind:'theory',label:'정규화',chapterId:'c121'},
      {kind:'theory',label:'관계와 조인의 이해',chapterId:'c122'},
      {kind:'theory',label:'트랜잭션의 이해',chapterId:'c123'},
    ],
    concept:["1NF→2NF→3NF→BCNF","관계=FK=JOIN","ACID"], est:75},
  {week:1, day:4,  subj:"1과목", title:"NULL + 본질·인조 식별자",
    actions:[
      {kind:'theory',label:'NULL 속성의 이해',chapterId:'c124'},
      {kind:'theory',label:'본질식별자 vs 인조식별자',chapterId:'c125'},
    ],
    concept:["IS NULL만 가능","본질 vs 인조"], est:55},

  // ─ Week 1 Day 5~7 + Week 2 Day 8~14 (10일): 2과목 20챕터 — 출제 비중 40/50, 일별 2챕터 여유
  {week:1, day:5,  subj:"2과목", title:"RDB 개요 + SELECT문",
    actions:[{kind:'theory',label:'RDB 개요',chapterId:'c211'},{kind:'theory',label:'SELECT문',chapterId:'c212'}],
    concept:["DDL/DML/DCL/TCL","FWGHSO 실행 순서"], est:55},
  {week:1, day:6,  subj:"2과목", title:"함수 + WHERE절",
    actions:[{kind:'theory',label:'함수',chapterId:'c213'},{kind:'theory',label:'WHERE절',chapterId:'c214'}],
    concept:["단일행/다중행","AND/OR/IN/LIKE"], est:60},
  {week:1, day:7,  subj:"2과목", title:"GROUP BY/HAVING + ORDER BY",
    actions:[{kind:'theory',label:'GROUP BY/HAVING',chapterId:'c215'},{kind:'theory',label:'ORDER BY',chapterId:'c216'}],
    concept:["WHERE vs HAVING","NULL 정렬"], est:60},
  {week:2, day:8,  subj:"2과목", title:"조인 + 표준 조인",
    actions:[{kind:'theory',label:'조인',chapterId:'c217'},{kind:'theory',label:'표준 조인',chapterId:'c218'}],
    concept:["등가/비등가/셀프/외부/교차","INNER/OUTER/NATURAL/USING"], est:75},
  {week:2, day:9,  subj:"2과목", title:"서브쿼리 + 집합 연산자",
    actions:[
      {kind:'theory',label:'서브쿼리',chapterId:'c221'},
      {kind:'theory',label:'집합 연산자',chapterId:'c222'},
    ],
    concept:["스칼라/인라인뷰","UNION/INTERSECT/MINUS"], est:65},
  {week:2, day:10, subj:"2과목", title:"그룹 함수 + 윈도우 함수",
    actions:[
      {kind:'theory',label:'그룹 함수',chapterId:'c223'},
      {kind:'theory',label:'윈도우 함수',chapterId:'c224'},
    ],
    concept:["ROLLUP/CUBE","RANK/PARTITION BY"], est:80},
  {week:2, day:11, subj:"2과목", title:"Top N + 계층형 질의",
    actions:[
      {kind:'theory',label:'Top N 쿼리',chapterId:'c225'},
      {kind:'theory',label:'계층형 질의와 셀프 조인',chapterId:'c226'},
    ],
    concept:["ROWNUM/FETCH","CONNECT BY"], est:65},
  {week:2, day:12, subj:"2과목", title:"PIVOT/UNPIVOT + 정규 표현식",
    actions:[
      {kind:'theory',label:'PIVOT/UNPIVOT',chapterId:'c227'},
      {kind:'theory',label:'정규 표현식',chapterId:'c228'},
    ],
    concept:["세로↔가로","REGEXP_*"], est:55},
  {week:2, day:13, subj:"2과목", title:"DML + TCL",
    actions:[
      {kind:'theory',label:'DML',chapterId:'c231'},
      {kind:'theory',label:'TCL',chapterId:'c232'},
    ],
    concept:["INSERT/UPDATE/DELETE/MERGE","COMMIT/ROLLBACK"], est:55},
  {week:2, day:14, subj:"2과목", title:"DDL + DCL",
    actions:[
      {kind:'theory',label:'DDL',chapterId:'c233'},
      {kind:'theory',label:'DCL',chapterId:'c234'},
    ],
    concept:["CREATE/ALTER/DROP","GRANT/REVOKE"], est:55},

  // ─ Week 3 Day 15~18: 기출 12회차 (round-60 → round-49 내림차순)
  {week:3, day:15, subj:"기출", title:"제60·59·58회",
    actions:[
      {kind:'cbt',label:'제60회',examId:'round-60'},
      {kind:'cbt',label:'제59회',examId:'round-59'},
      {kind:'cbt',label:'제58회',examId:'round-58'},
    ],
    concept:["CBT 실전 3회"], est:270},
  {week:3, day:16, subj:"기출", title:"제57·56·55회",
    actions:[
      {kind:'cbt',label:'제57회',examId:'round-57'},
      {kind:'cbt',label:'제56회',examId:'round-56'},
      {kind:'cbt',label:'제55회',examId:'round-55'},
    ],
    concept:["CBT 실전 3회"], est:270},
  {week:3, day:17, subj:"기출", title:"제54·53·52회",
    actions:[
      {kind:'cbt',label:'제54회',examId:'round-54'},
      {kind:'cbt',label:'제53회',examId:'round-53'},
      {kind:'cbt',label:'제52회',examId:'round-52'},
    ],
    concept:["CBT 실전 3회"], est:270},
  {week:3, day:18, subj:"기출", title:"제51·50·49회",
    actions:[
      {kind:'cbt',label:'제51회',examId:'round-51'},
      {kind:'cbt',label:'제50회',examId:'round-50'},
      {kind:'cbt',label:'제49회',examId:'round-49'},
    ],
    concept:["CBT 실전 3회"], est:270},

  // ─ Week 3 Day 19~20: 모의고사 3개씩
  {week:3, day:19, subj:"모의", title:"실전 모의 3회",
    actions:[
      {kind:'mock',label:'모의 1회'},
      {kind:'mock',label:'모의 2회'},
      {kind:'mock',label:'모의 3회'},
    ],
    concept:["90분 실전 ×3"], est:270},
  {week:3, day:20, subj:"모의", title:"실전 모의 3회",
    actions:[
      {kind:'mock',label:'모의 1회'},
      {kind:'mock',label:'모의 2회'},
      {kind:'mock',label:'모의 3회'},
    ],
    concept:["90분 실전 ×3"], est:270},

  // ─ Week 3 Day 21: 최종 암기장 (시험일)
  {week:3, day:21, subj:"마무리", title:"최종 암기장",
    actions:[{kind:'cheatsheet',label:'암기장 보기'}],
    concept:["함정·정리 한 번에","준비물·컨디션"], est:60, final:true},
];

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

function actionRoute(a: any): [string, any?] {
  switch (a.kind) {
    case 'theory': return ['theory-detail', a.chapterId];
    case 'cbt':    return ['cbt', a.examId];
    case 'mock':   return ['mock-exam'];
    case 'cheatsheet': return ['final-cheatsheet'];
    default: return ['home'];
  }
}

export const PlanScreen = ({onNavigate}: any) => {
  const { progress, stats } = useProgress();

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

  // 사용자가 고른 week 는 sessionStorage 에 영속 — 기출/모의고사 들어갔다 뒤로
  // 가도 같은 주차 유지. 처음 진입 시(저장 값 없음) 진도 기반 currentWeek 으로
  // 시작. currentWeek 변경 시 자동 리셋하지 않음 (사용자 선택을 덮으면 안 됨).
  const [week, setWeek] = React.useState<number>(() => {
    try {
      const saved = sessionStorage.getItem('sqlo_plan_week');
      const n = saved != null ? Number(saved) : NaN;
      if (n === 1 || n === 2 || n === 3) return n;
    } catch {}
    return currentWeek;
  });
  React.useEffect(() => {
    try { sessionStorage.setItem('sqlo_plan_week', String(week)); } catch {}
  }, [week]);

  const dDay = daysUntilExam();
  const dDayLabel =
    dDay > 0 ? `시험까지 ${dDay}일`
    : dDay === 0 ? '시험 당일'
    : `시험 ${-dDay}일 지남`;

  const handleAction = (a: any) => {
    const [route, params] = actionRoute(a);
    onNavigate(route, params);
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
      </div>

      {/* Week tabs — 가로 1:1:1 균등 배치, 라벨 짧게 */}
      <div className="plan-week-tabs" style={{marginTop:8,display:"flex",gap:0,borderBottom:"1px solid var(--border-subtle)"}}>
        {[1,2,3].map(w => {
          const active = week === w;
          const sub = ["이론","이론","실전"][w-1];
          const doneW = planWithStatus.filter(d=>d.week===w && d.done).length;
          const totalW = planWithStatus.filter(d=>d.week===w).length;
          return (
            <button key={w} onClick={()=>setWeek(w)} className="plan-week-tab" style={{
              flex: 1,
              padding:"12px 8px", background:"none", border:0, cursor:"pointer", fontFamily:"inherit",
              fontSize:14, fontWeight: active ? 700 : 500,
              color: active ? "var(--fg-1)" : "var(--fg-3)",
              borderBottom: active ? "2px solid var(--point-600)" : "2px solid transparent",
              marginBottom:-1, display:"flex", alignItems:"center", justifyContent:"center", gap:8,
              whiteSpace: "nowrap",
            }}>
              <span>{w}주차 · {sub}</span>
              <Tag tone={doneW===totalW ? "green" : "neutral"} size="sm">{doneW}/{totalW}</Tag>
            </button>
          );
        })}
      </div>

      <TimelineView week={week} data={planWithStatus} onAction={handleAction}/>

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

// 액션 버튼 — 카드 안에 N개 나열. 카드 자체 클릭 비활성, 각 버튼만 동작.
const ActionButton = ({action, onClick, compact}: any) => {
  const icon = action.kind === 'theory' ? <Ic.Book size={12}/>
    : action.kind === 'cbt' ? <Ic.ListChecks size={12}/>
    : action.kind === 'mock' ? <Ic.Clock size={12}/>
    : <Ic.Sparkles size={12}/>;
  return (
    <button
      onClick={(e) => { e.stopPropagation(); onClick(action); }}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: compact ? '6px 9px' : '8px 11px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-default)',
        borderRadius: 8,
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: compact ? 11.5 : 12.5,
        fontWeight: 600,
        color: 'var(--fg-2)',
        textAlign: 'left',
        flex: '1 1 auto',
        minWidth: 0,
        transition: 'border-color 150ms, color 150ms',
      }}
      onMouseEnter={(e)=>{e.currentTarget.style.borderColor='var(--point-500)';e.currentTarget.style.color='var(--point-600)';}}
      onMouseLeave={(e)=>{e.currentTarget.style.borderColor='var(--border-default)';e.currentTarget.style.color='var(--fg-2)';}}
    >
      <span style={{color:'var(--point-600)',flexShrink:0,display:'inline-flex'}}>{icon}</span>
      <span style={{overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{action.label}</span>
      <Ic.ArrowRight size={11} style={{marginLeft:'auto',flexShrink:0,opacity:0.6}}/>
    </button>
  );
};

export const TimelineView = ({week, data, onAction}: any) => {
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
          <div style={{
            background:"var(--bg-card)",
            border: d.current ? "2px solid var(--point-600)" : "1px solid var(--border-subtle)",
            borderRadius:12,padding:"16px 20px",fontFamily:"inherit",
          }}>
            <div style={{display:"flex",gap:6,marginBottom:8,alignItems:'center',flexWrap:'wrap'}}>
              <Tag tone={d.subj==="1과목"||d.subj==="2과목"?"green":d.subj==="기출"?"blue":d.subj==="모의"?"peach":"neutral"} size="sm">{d.subj}</Tag>
              {d.current && <Tag tone="solid" size="sm">오늘</Tag>}
              {d.done && <Tag tone="neutral" size="sm">완료</Tag>}
              <span style={{fontSize:11,color:'var(--fg-4)',fontFamily:'var(--font-mono)'}}>{recommendedDateLabel(d.day)}</span>
              <span style={{marginLeft:'auto',display:"flex",alignItems:"center",gap:4,fontSize:12,color:"var(--fg-3)",fontFamily:"var(--font-mono)"}}>
                <Ic.Clock size={12}/> {d.est}분
              </span>
            </div>
            <div style={{fontSize:15,fontWeight:700,color:"var(--fg-1)",marginBottom:6}}>Day {d.day} · {d.title}</div>
            <div style={{fontSize:12,color:"var(--fg-3)",marginBottom:10}}>{d.concept.join(" · ")}</div>
            {/* 액션 버튼들 */}
            <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
              {(d.actions || []).map((a: any, i: number) => (
                <ActionButton key={i} action={a} onClick={onAction}/>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
