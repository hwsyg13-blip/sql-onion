// @ts-nocheck
import React from 'react';
import { Btn, Tag, Ic, CodeBlock, Mascot, MascotGuide, OnionMark, Progress, Divider, highlightSQL } from '../components/Atoms';
import { QUIZ_BANK, EXAM_SETS } from '../data/quizBank';
import { QuestionBody } from './MockScreens';
import { AdSlot } from '../components/AdSlot';
import { recordExamComplete, recordQuizAttempt } from '../lib/progress';
import { OptionReferences } from '../components/QuestionReferences';

// CBT — Exam list, CBT exam screen (sticky OMR), and result.
// Also Mock Exam full mode (50-item with timer) reusing pieces.

export const ExamListScreen = ({onNavigate}) => {
  // Group EXAM_SETS by year (parsed from `date` field "2026년 3월" → "2026")
  const byYear: Record<string, typeof EXAM_SETS> = {};
  for (const set of EXAM_SETS) {
    const year = (set.date.match(/(\d{4})년/) || [])[1] || '기타';
    (byYear[year] = byYear[year] || []).push(set);
  }
  const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a));
  const latestRound = EXAM_SETS[0]?.round; // EXAM_SETS is sorted latest-first

  return (
    <div style={{maxWidth:1080,margin:"0 auto",padding:"32px 28px 80px"}}>
      <div style={{display:"flex",alignItems:"center",gap:8,color:"var(--point-600)",fontSize:12,fontWeight:700,letterSpacing:"0.04em"}}>
        <Ic.ListChecks size={14}/> SQLD 기출복원 · CBT
      </div>
      <h1 style={{fontSize:32,fontWeight:800,color:"var(--fg-1)",margin:"6px 0 6px",letterSpacing:"-0.02em"}}>기출문제</h1>
      <p style={{fontSize:14,color:"var(--fg-3)",margin:"0 0 28px"}}>제45회 ~ 제60회 복원문제입니다. 실제 시험처럼 4지선다 · 50문항으로 풀 수 있어요.</p>

      {years.map((yr) => (
        <section key={yr} style={{marginBottom:28}}>
          <div style={{display:"flex",alignItems:"baseline",justifyContent:"space-between",marginBottom:12}}>
            <h2 style={{fontSize:18,fontWeight:700,color:"var(--fg-1)",margin:0}}>{yr}년</h2>
            <span style={{fontSize:12,color:"var(--fg-3)"}}>{byYear[yr].length}개 회차</span>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:12}}>
            {byYear[yr].map((set) => {
              const isLatest = set.round === latestRound;
              const restored = set.count; // 몇 문항이 복원됐는가
              return (
                <button key={set.id} onClick={()=>onNavigate("cbt", set.id)} style={{
                  textAlign:"left",background:"var(--bg-card)",border:"1px solid var(--border-subtle)",borderRadius:12,
                  padding:"18px 20px",cursor:"pointer",fontFamily:"inherit",boxShadow:"var(--shadow-sm)",
                }}>
                  <div style={{display:"flex",gap:6,marginBottom:10,alignItems:"center",flexWrap:"wrap"}}>
                    <Tag tone="blue" size="sm">{set.label}</Tag>
                    <span style={{fontSize:11,color:"var(--fg-3)"}}>{set.date}</span>
                    {isLatest && <Tag tone="solid" size="sm">최신</Tag>}
                  </div>
                  <div style={{fontSize:15,fontWeight:700,color:"var(--fg-1)"}}>{set.label} 기출복원 · 50문항</div>
                  <div style={{marginTop:8,display:"flex",justifyContent:"space-between",fontSize:12,color:"var(--fg-3)"}}>
                    <span>{restored}문항 복원 {restored < 50 ? `(나머지 ${50-restored} 문항은 다른 회차에서 보충)` : ''}</span>
                  </div>
                  <div style={{marginTop:8,display:"flex",justifyContent:"flex-end",fontSize:12}}>
                    <span style={{color:"var(--point-600)",fontWeight:600,display:"inline-flex",alignItems:"center",gap:3}}>시작 <Ic.ArrowRight size={12}/></span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      ))}

      {/* 광고 슬롯 — 기출 목록 하단 */}
      <div style={{marginTop: 32}}>
        <AdSlot slot="EXAMS_BOTTOM" format="horizontal"/>
      </div>
    </div>
  );
};

// CBT exam — 2-column: left questions, right sticky OMR
// We'll show 50 "questions" — 20 real + 30 synthetic stubs — user picks an answer, submit at end.
export const CBTExam = ({examId = "round-60", onFinish, onNavigate, onExit, mockMode = false}) => {
  const totalQ = 50;
  // Build 50 questions:
  // - 기출 모드: 해당 회차(round-N)의 복원 문제를 우선 사용, 부족하면 다른 회차에서 같은 과목으로 보충
  // - 모의 모드: 전체 풀에서 섞음
  const questions = React.useMemo(() => {
    const targetRound = Number((examId || '').replace('round-', '')) || null;

    const thisRound = targetRound
      ? QUIZ_BANK.filter(q => q.round === targetRound)
      : [];
    const others = QUIZ_BANK.filter(q => q.round !== targetRound);
    const pool = mockMode ? QUIZ_BANK.slice() : [...thisRound, ...others];

    // Shuffle in mock mode
    const rng = (arr) => {
      const a = arr.slice();
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };

    const s1pool = (mockMode ? rng(pool.filter(q => q.subject === '1과목')) : pool.filter(q => q.subject === '1과목'));
    const s2pool = (mockMode ? rng(pool.filter(q => q.subject === '2과목')) : pool.filter(q => q.subject === '2과목'));

    const out = [];
    for (let i = 0; i < 10; i++) {
      const src = s1pool[i % Math.max(1, s1pool.length)] || QUIZ_BANK[0];
      out.push({...src, _seq: i + 1, number: i + 1, subject: '1과목'});
    }
    for (let i = 0; i < 40; i++) {
      const src = s2pool[i % Math.max(1, s2pool.length)] || QUIZ_BANK[0];
      out.push({...src, _seq: 11 + i, number: 11 + i, subject: '2과목'});
    }
    return out;
  }, [examId, mockMode]);

  const [idx, setIdx] = React.useState(0);
  const [answers, setAnswers] = React.useState(() => Array(totalQ).fill(null));
  const [flags, setFlags] = React.useState(() => new Set());
  const [remaining, setRemaining] = React.useState(90*60); // 90 min (used in mock mode)
  const [submitConfirm, setSubmitConfirm] = React.useState(false);

  React.useEffect(() => {
    if (!mockMode) return;
    const t = setInterval(() => setRemaining(r => Math.max(0, r-1)), 1000);
    return () => clearInterval(t);
  }, [mockMode]);

  const q = questions[idx];
  const answered = answers.filter(a=>a!=null).length;
  const toggleFlag = (i) => {
    setFlags(s => { const n = new Set(s); n.has(i) ? n.delete(i) : n.add(i); return n; });
  };
  const pick = (opt) => {
    setAnswers(a => { const n = [...a]; n[idx] = opt; return n; });
  };
  const doSubmit = () => {
    // 진도 기록 — CBT 완료(점수) + 각 문항 답안
    try {
      let correctCount = 0;
      questions.forEach((q, i) => {
        const chosen = answers[i];
        const isCorrect = chosen != null && chosen === q.correctIndex;
        if (isCorrect) correctCount++;
        recordQuizAttempt(`cbt-${examId}-q${i}`, {
          chosen: chosen ?? -1,
          correct: isCorrect,
          round: q.round,
          subject: q.subject,
          number: q.number,
          context: mockMode ? 'mock' : 'exam',
        });
      });
      const score = Math.round((correctCount / questions.length) * 100);
      if (!mockMode && examId) {
        recordExamComplete(examId, score, questions.length);
      }
    } catch (e) { console.warn('[progress] CBT 기록 실패', e); }

    onFinish({questions, answers, flags, examId, mockMode, timeUsed: mockMode ? (90*60 - remaining) : null});
  };

  const mins = Math.floor(remaining/60), secs = remaining%60;
  const timeStr = `${String(mins).padStart(2,"0")}:${String(secs).padStart(2,"0")}`;

  return (
    <div style={{background:"var(--bg-page)",minHeight:"calc(100vh - 64px)"}}>
      {/* CBT utility bar — 나가기 + 회차/과목 · 진행 · 제출 을 한 줄로, TopNav 바로 아래 고정 */}
      <div style={{
        background:"var(--bg-card)",borderBottom:"1px solid var(--border-subtle)",
        padding:"10px 20px",display:"flex",alignItems:"center",gap:12,flexWrap:"wrap",
        position:"sticky",top:64,zIndex:20,
      }}>
        {onExit && (
          <button onClick={onExit} style={{
            background:"var(--bg-muted)",border:"1px solid var(--border-default)",borderRadius:10,
            padding:"6px 11px",fontFamily:"inherit",fontSize:12.5,cursor:"pointer",color:"var(--fg-2)",
            display:"inline-flex",alignItems:"center",gap:6,
          }}>
            <Ic.ArrowLeft size={13}/> 나가기
          </button>
        )}
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <Tag tone={mockMode ? "peach" : "blue"}>{mockMode ? "AI 모의고사" : `${EXAM_SETS.find(s=>s.id===examId)?.label || examId} 기출`}</Tag>
          <span style={{fontSize:13,color:"var(--fg-3)"}}>CBT · 50문항</span>
        </div>
        <div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"}}>
          {mockMode && (
            <div style={{
              display:"inline-flex",alignItems:"center",gap:6,padding:"6px 12px",
              background: remaining < 300 ? "var(--wrong-bg)" : "var(--point-050)",
              border:`1px solid ${remaining < 300 ? "var(--wrong-border)" : "var(--point-100)"}`,
              borderRadius:8,fontFamily:"var(--font-mono)",fontWeight:700,
              color: remaining < 300 ? "var(--wrong-fg)" : "var(--point-600)",
              fontSize:15,
            }}>
              <Ic.Clock size={14}/> {timeStr}
            </div>
          )}
          <div style={{fontSize:13,color:"var(--fg-3)"}}>진행 <strong style={{color:"var(--fg-1)",fontFamily:"var(--font-mono)"}}>{answered}</strong> / {totalQ}</div>
          <Btn size="sm" variant="primary" onClick={()=>setSubmitConfirm(true)}>제출하기</Btn>
        </div>
      </div>

      <div style={{maxWidth:1280,margin:"0 auto",padding:"24px 28px 60px",display:"grid",gridTemplateColumns:"minmax(0, 1fr) 320px",gap:24}} className="cbt-grid">
        {/* Left — question */}
        <main>
          <div style={{background:"var(--bg-card)",border:"1px solid var(--border-subtle)",borderRadius:16,padding:28,boxShadow:"var(--shadow-sm)"}}>
            {/* 태그는 질문 위에 */}
            <div style={{display:"flex",gap:8,marginBottom:12}}>
              <Tag tone="green" size="sm">{q.subject}</Tag>
              <Tag tone="neutral" size="sm">문항 {idx+1}</Tag>
            </div>
            <QuestionBody q={q} noTags/>
            <ol style={{listStyle:"none",padding:0,margin:"18px 0 0",display:"flex",flexDirection:"column",gap:10}}>
              {q.options.map((opt, i) => {
                const sel = answers[idx] === i;
                let bg="var(--bg-card)", br="1px solid var(--border-default)", badgeBg="var(--bg-muted)", badgeFg="var(--fg-3)";
                if (sel) { bg="var(--point-100)"; br="2px solid var(--point-600)"; badgeBg="var(--point-600)"; badgeFg="#fff"; }
                const optRefs = q.optionReferences?.[i];
                return (
                  <li key={i}>
                    <div onClick={()=>pick(i)} style={{
                      width:"100%",textAlign:"left",display:"flex",flexDirection:"column",gap:10,padding:"14px 16px",
                      background:bg,border:br,borderRadius:12,
                      cursor:"pointer",fontFamily:"inherit",
                    }}>
                      <div style={{display:"flex",gap:12,alignItems:"flex-start"}}>
                        <span style={{
                          width:32,height:32,borderRadius:999,background:badgeBg,color:badgeFg,flexShrink:0,
                          fontSize:16,fontWeight:700,fontFamily:"var(--font-mono)",
                          display:"inline-flex",alignItems:"center",justifyContent:"center",marginTop:1,
                        }}>{i+1}</span>
                        <span style={{fontSize:14.5,color:"var(--fg-2)",lineHeight:1.65,flex:1}}>{opt}</span>
                      </div>
                      {optRefs && <OptionReferences refs={optRefs}/>}
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Question number strip — 문제 박스 아래에 (체크 좌 / 진도 중 / 이전·다음 우) */}
          <div style={{display:"flex",gap:6,marginTop:16,flexWrap:"wrap"}}>
            <Btn size="sm" variant={flags.has(idx)?"soft":"ghost"} icon={<Ic.Bookmark size={14}/>} onClick={()=>toggleFlag(idx)}>
              {flags.has(idx) ? "체크됨" : "체크"}
            </Btn>
            <div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,color:"var(--fg-3)",fontFamily:"var(--font-mono)"}}>
              문항 {idx+1} / {totalQ}
            </div>
            <Btn size="sm" variant="ghost" icon={<Ic.ArrowLeft size={14}/>} onClick={()=>setIdx(Math.max(0, idx-1))} disabled={idx===0}>이전</Btn>
            <Btn size="sm" variant="primary" iconRight={<Ic.ArrowRight size={14}/>} onClick={()=>setIdx(Math.min(totalQ-1, idx+1))} disabled={idx===totalQ-1}>다음</Btn>
          </div>
        </main>

        {/* Right — sticky OMR */}
        <aside className="cbt-omr">
          <div style={{position:"sticky",top:132,background:"var(--bg-card)",border:"1px solid var(--border-subtle)",borderRadius:14,boxShadow:"var(--shadow-sm)",overflow:"hidden"}}>
            <div style={{padding:"14px 16px",borderBottom:"1px solid var(--border-subtle)",background:"var(--bg-muted)"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div style={{fontSize:13,fontWeight:700,color:"var(--fg-1)"}}>답안지 · OMR</div>
                <div style={{fontSize:11,color:"var(--fg-3)",fontFamily:"var(--font-mono)"}}>{answered}/{totalQ}</div>
              </div>
              <div style={{display:"flex",gap:12,marginTop:8,fontSize:11,color:"var(--fg-3)"}}>
                <span style={{display:"inline-flex",alignItems:"center",gap:4}}><span style={{width:10,height:10,borderRadius:3,background:"var(--point-600)"}}/> 선택</span>
                <span style={{display:"inline-flex",alignItems:"center",gap:4}}><span style={{width:10,height:10,borderRadius:3,background:"var(--wrong-bg)",border:"1px solid var(--wrong-border)"}}/> 체크</span>
                <span style={{display:"inline-flex",alignItems:"center",gap:4}}><span style={{width:10,height:10,borderRadius:3,background:"var(--bg-muted)",border:"1px solid var(--border-default)"}}/> 미응답</span>
              </div>
            </div>
            <div style={{padding:"14px 16px",maxHeight:"calc(100vh - 260px)",overflowY:"auto"}}>
              {/* 1과목 */}
              <div style={{fontSize:11,fontWeight:700,color:"var(--point-600)",letterSpacing:"0.04em",marginBottom:8}}>1과목 · 데이터 모델링</div>
              <OMRGrid start={0} end={10} answers={answers} flags={flags} current={idx} onJump={setIdx}/>
              <div style={{fontSize:11,fontWeight:700,color:"var(--point-600)",letterSpacing:"0.04em",margin:"16px 0 8px"}}>2과목 · SQL 기본 및 활용</div>
              <OMRGrid start={10} end={50} answers={answers} flags={flags} current={idx} onJump={setIdx}/>
            </div>
            <div style={{padding:"12px 16px",borderTop:"1px solid var(--border-subtle)",background:"var(--bg-muted)"}}>
              <Btn size="sm" variant="primary" style={{width:"100%"}} onClick={()=>setSubmitConfirm(true)}>
                <Ic.Send size={12}/> 답안 제출
              </Btn>
            </div>
          </div>
        </aside>
      </div>

      {/* Submit modal */}
      {submitConfirm && (
        <div style={{position:"fixed",inset:0,background:"rgba(17,24,39,0.32)",zIndex:100,display:"flex",alignItems:"center",justifyContent:"center",padding:20}}
             onClick={()=>setSubmitConfirm(false)}>
          <div onClick={e=>e.stopPropagation()} style={{background:"var(--bg-card)",borderRadius:16,padding:28,maxWidth:440,width:"100%",boxShadow:"var(--shadow-lg)"}}>
            <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:14}}>
              <Mascot size={44} variant="surprise"/>
              <div>
                <div style={{fontSize:17,fontWeight:700,color:"var(--fg-1)"}}>답안을 제출할까요?</div>
                <div style={{fontSize:13,color:"var(--fg-3)",marginTop:2}}>미응답 {totalQ-answered}문항 · 제출 후 수정할 수 없어요.</div>
              </div>
            </div>
            <div style={{padding:"12px 14px",background:"var(--bg-muted)",borderRadius:10,fontSize:12.5,color:"var(--fg-2)",lineHeight:1.6}}>
              응답 {answered}문항 · 체크 {flags.size}문항{mockMode && ` · 사용 시간 ${Math.floor((90*60-remaining)/60)}분`}
            </div>
            <div style={{display:"flex",gap:10,marginTop:20,justifyContent:"flex-end"}}>
              <Btn variant="ghost" onClick={()=>setSubmitConfirm(false)}>계속 풀기</Btn>
              <Btn onClick={doSubmit}>제출하기</Btn>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const OMRGrid = ({start, end, answers, flags, current, onJump}) => (
  <div style={{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:4}}>
    {Array.from({length: end-start}).map((_, i) => {
      const qi = start + i;
      const a = answers[qi];
      const flagged = flags.has(qi);
      const isCurrent = qi === current;
      return (
        <button key={qi} onClick={()=>onJump(qi)} style={{
          display:"flex",flexDirection:"column",alignItems:"center",gap:2,
          padding:"6px 0",background: flagged ? "var(--wrong-bg)" : "var(--bg-card)",
          border: isCurrent ? "2px solid var(--point-600)" : flagged ? "1px solid var(--wrong-border)" : "1px solid var(--border-default)",
          borderRadius:6,cursor:"pointer",fontFamily:"inherit",
          position:"relative",
        }}>
          <span style={{fontSize:10,color:"var(--fg-3)",fontFamily:"var(--font-mono)"}}>{qi+1}</span>
          <span style={{
            fontSize:12,fontWeight:700,fontFamily:"var(--font-mono)",
            color: a!=null ? "var(--point-600)" : "var(--fg-4)",
          }}>{a!=null ? a+1 : "·"}</span>
        </button>
      );
    })}
  </div>
);

// CBT Result — scorecard
export const CBTResult = ({result, onNavigate}) => {
  const {questions, answers, examId, mockMode, timeUsed} = result;
  // Compute scores
  const s1Total = 10, s2Total = 40;
  let s1Correct = 0, s2Correct = 0;
  const perQ = questions.map((q, i) => {
    const correct = answers[i] === q.correctIndex;
    if (i < 10 && correct) s1Correct++;
    else if (i >= 10 && correct) s2Correct++;
    return {q, selected: answers[i], correct, idx: i};
  });
  const totalCorrect = s1Correct + s2Correct;
  const score = (s1Correct * 2) + (s2Correct * 2); // 2점씩 50문항 = 100점
  const s1Rate = s1Correct / s1Total * 100;
  const s2Rate = s2Correct / s2Total * 100;
  const pass = score >= 60 && s1Rate >= 40 && s2Rate >= 40;
  const fail40 = s1Rate < 40 || s2Rate < 40;

  return (
    <div style={{maxWidth:960,margin:"0 auto",padding:"32px 28px 80px"}}>
      {/* Result summary banner */}
      <div style={{
        background: pass ? "linear-gradient(180deg, var(--point-050) 0%, var(--bg-page) 100%)" : "linear-gradient(180deg, var(--wrong-bg) 0%, var(--bg-page) 100%)",
        border: `1px solid ${pass ? "var(--point-100)" : "var(--wrong-border)"}`,
        borderRadius:20,padding:"36px 36px",
        display:"flex",gap:24,alignItems:"center",flexWrap:"wrap",
      }}>
        <Mascot size={128} variant={pass ? "smile" : "sad"}/>
        <div style={{flex:"1 1 320px"}}>
          <div style={{fontSize:12,fontWeight:700,color: pass ? "var(--point-600)" : "var(--wrong-fg)",letterSpacing:"0.04em"}}>
            {mockMode ? "AI 모의고사" : `${EXAM_SETS.find(s=>s.id===examId)?.label || examId} 기출`} · 결과
          </div>
          <h1 style={{fontSize:36,fontWeight:800,color:"var(--fg-1)",margin:"6px 0 6px",letterSpacing:"-0.02em"}}>
            {pass ? "축하해요, 합격 기준 통과!" : fail40 ? "아쉬워요, 과락 발생" : "한 걸음 남았어요"}
          </h1>
          <div style={{fontSize:15,color:"var(--fg-2)",lineHeight:1.6,maxWidth:480}}>
            {pass
              ? "60점 이상 · 과목별 40% 이상을 달성했어요. 오답 해설로 약점을 다지고 다음 회차에 도전해요."
              : fail40
              ? "합격 기준(60점)에는 도달했더라도 과목별 40% 미만이 있으면 과락으로 불합격이에요. 취약 과목을 다시 학습해 보세요."
              : "조금만 더. 전체 점수를 60점까지 끌어올리면 합격이에요. 오답 노트로 약점을 좁혀가요."}
          </div>
        </div>
        <div style={{flex:"0 0 auto",textAlign:"center",padding:"14px 24px",background:"var(--bg-card)",borderRadius:14,border:"1px solid var(--border-subtle)"}}>
          <div style={{fontSize:12,color:"var(--fg-3)",fontWeight:600}}>총점</div>
          <div style={{fontSize:56,fontWeight:800,color:pass?"var(--point-600)":"var(--wrong-fg)",fontFamily:"var(--font-mono)",lineHeight:1,letterSpacing:"-0.04em",margin:"6px 0"}}>{score}</div>
          <div style={{fontSize:12,color:"var(--fg-3)"}}>/ 100점</div>
        </div>
      </div>

      {/* Breakdown */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:14,marginTop:24}}>
        <ScoreCard label="1과목 · 데이터 모델링" correct={s1Correct} total={s1Total} rate={s1Rate} fail={s1Rate < 40}/>
        <ScoreCard label="2과목 · SQL 기본 및 활용" correct={s2Correct} total={s2Total} rate={s2Rate} fail={s2Rate < 40}/>
        <ScoreCard label="전체 정답" correct={totalCorrect} total={50} rate={totalCorrect/50*100}/>
        {mockMode && (
          <div style={{background:"var(--bg-card)",border:"1px solid var(--border-subtle)",borderRadius:12,padding:"18px 20px"}}>
            <div style={{fontSize:12,color:"var(--fg-3)",fontWeight:600,marginBottom:6}}>사용 시간</div>
            <div style={{fontSize:28,fontWeight:700,color:"var(--fg-1)",fontFamily:"var(--font-mono)",letterSpacing:"-0.02em"}}>
              {Math.floor(timeUsed/60)}<span style={{fontSize:14,color:"var(--fg-3)",fontWeight:500}}>분</span> {timeUsed%60}<span style={{fontSize:14,color:"var(--fg-3)",fontWeight:500}}>초</span>
            </div>
            <div style={{fontSize:12,color:"var(--fg-3)",marginTop:2}}>제한 90분 / 평균 1.8분 per 문항</div>
          </div>
        )}
      </div>

      {/* 광고 슬롯 — 점수 직후 */}
      <div style={{marginTop: 28}}>
        <AdSlot slot="RESULT_TOP" format="horizontal"/>
      </div>

      {/* Detailed question list with explanations */}
      <section style={{marginTop:28}}>
        <h2 style={{fontSize:20,fontWeight:700,color:"var(--fg-1)",margin:"0 0 14px"}}>문항별 결과 · 해설</h2>
        <div style={{background:"var(--bg-card)",border:"1px solid var(--border-subtle)",borderRadius:12,overflow:"hidden"}}>
          {perQ.map((r, i) => <ResultRow key={i} row={r}/>)}
        </div>
      </section>

      <div style={{display:"flex",gap:10,marginTop:28,justifyContent:"center",flexWrap:"wrap"}}>
        <Btn variant="outline" icon={<Ic.Refresh/>} onClick={()=>onNavigate("cbt", examId)}>다시 풀기</Btn>
        <Btn variant="ghost" onClick={()=>onNavigate("exams")}>다른 회차</Btn>
        <Btn onClick={()=>onNavigate("home")}>홈으로</Btn>
      </div>
    </div>
  );
};

export const ScoreCard = ({label, correct, total, rate, fail}) => (
  <div style={{background:"var(--bg-card)",border:`1px solid ${fail ? "var(--wrong-border)" : "var(--border-subtle)"}`,borderRadius:12,padding:"18px 20px"}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
      <div style={{fontSize:12,color:"var(--fg-3)",fontWeight:600}}>{label}</div>
      {fail && <Tag tone="peach" size="sm">과락</Tag>}
    </div>
    <div style={{display:"flex",alignItems:"baseline",gap:6}}>
      <div style={{fontSize:28,fontWeight:700,color:fail?"var(--wrong-fg)":"var(--fg-1)",fontFamily:"var(--font-mono)",letterSpacing:"-0.02em"}}>{correct}</div>
      <div style={{fontSize:14,color:"var(--fg-3)",fontFamily:"var(--font-mono)"}}>/ {total}</div>
      <div style={{marginLeft:"auto",fontSize:14,fontWeight:700,color:fail?"var(--wrong-fg)":"var(--point-600)",fontFamily:"var(--font-mono)"}}>{rate.toFixed(0)}%</div>
    </div>
    <div style={{marginTop:10}}><Progress value={correct} total={total} color={fail?"var(--wrong-fg)":"var(--point-600)"}/></div>
  </div>
);

export const ResultRow = ({row}) => {
  const [open, setOpen] = React.useState(false);
  const {q, selected, correct, idx} = row;
  return (
    <div style={{borderBottom:"1px solid var(--bg-muted)"}}>
      <button onClick={()=>setOpen(!open)} style={{
        width:"100%",display:"flex",alignItems:"center",gap:14,padding:"14px 18px",
        background:"transparent",border:0,cursor:"pointer",fontFamily:"inherit",textAlign:"left",
      }}>
        <div style={{
          width:32,height:32,borderRadius:999,flexShrink:0,
          background: correct ? "var(--correct-bg)" : "var(--wrong-bg)",
          color: correct ? "var(--correct-fg)" : "var(--wrong-fg)",
          display:"flex",alignItems:"center",justifyContent:"center",
        }}>{correct ? <Ic.Check size={16}/> : <Ic.X size={16}/>}</div>
        <div style={{flex:1,minWidth:0}}>
          <div style={{fontSize:14,color:"var(--fg-1)",fontWeight:600,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}>
            {idx+1}번 · {q.title}
          </div>
          <div style={{fontSize:11.5,color:"var(--fg-3)",marginTop:2,display:"flex",gap:8}}>
            <span>{q.subject} · {q.concept}</span>
            {selected != null && <span>· 내 답 {selected+1}번 / 정답 {q.correctIndex+1}번</span>}
            {selected == null && <span style={{color:"var(--wrong-fg)"}}>· 미응답</span>}
          </div>
        </div>
        <span style={{color:"var(--fg-3)",transform:open?"rotate(180deg)":"none",transition:"transform 200ms"}}><Ic.ChevronDown/></span>
      </button>
      {open && (
        <div style={{padding:"0 18px 18px 64px"}}>
          {q.query && <CodeBlock style={{fontSize:12,padding:"10px 12px"}}>{q.query}</CodeBlock>}
          <div style={{marginTop:10,padding:"12px 14px",background:"var(--point-050)",borderLeft:"3px solid var(--point-500)",borderRadius:6,fontSize:13,color:"var(--fg-2)",lineHeight:1.7}}>
            <strong style={{color:"var(--point-600)"}}>해설</strong> — {q.explanation}
          </div>
          {!correct && (
            <div style={{marginTop:10,display:"flex",justifyContent:"flex-end"}}>
              <Btn size="sm" variant="soft" icon={<Ic.Bookmark size={14}/>}>오답노트 저장</Btn>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

