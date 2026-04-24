// @ts-nocheck
import React from 'react';
import { Btn, Tag, Ic, CodeBlock, Mascot, MascotGuide, OnionMark, Progress, Divider, highlightSQL } from '../components/Atoms';
import { DIAGRAMS } from '../components/Diagrams';
import { THEORY, THEORY_BODY } from '../data/theory';
import { QUIZ_BANK } from '../data/quizBank';
import { CONCEPT_QUIZ } from '../data/conceptQuiz';
import { recordTheoryView } from '../lib/progress';
import { AdSlot } from '../components/AdSlot';

// Theory list + detail (2-column with mini test on the right)

export const TheoryListScreen = ({onNavigate}) => (
  <div style={{maxWidth:960,margin:"0 auto",padding:"32px 28px 80px"}}>
    <h1 style={{fontSize:32,fontWeight:800,color:"var(--fg-1)",margin:"0 0 6px",letterSpacing:"-0.02em"}}>이론</h1>
    <p style={{fontSize:14,color:"var(--fg-3)",margin:"0 0 28px"}}>과목 → 장 → 절 단위로 개념을 차근차근 익혀봐요</p>
    {THEORY.subjects.map((sub, sidx) => (
      <React.Fragment key={sub.id}>
        <section style={{marginBottom:32}}>
          <div style={{display:"flex",alignItems:"baseline",gap:10,marginBottom:14}}>
            <Tag tone="green">{sub.code}</Tag>
            <h2 style={{fontSize:20,fontWeight:700,color:"var(--fg-1)",margin:0}}>{sub.title}</h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:12}}>
            {sub.chapters.map((ch, idx) => (
              <button key={ch.id} onClick={()=>ch.detailed ? onNavigate("theory-detail", ch.id) : onNavigate("theory-detail", ch.id)} style={{
                textAlign:"left",background:"var(--bg-card)",border:"1px solid var(--border-subtle)",
                borderRadius:12,padding:"16px 18px",cursor:"pointer",fontFamily:"inherit",
                boxShadow:"var(--shadow-sm)",display:"flex",flexDirection:"column",gap:10,
              }}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <div style={{fontSize:11,fontWeight:700,color:"var(--point-600)",letterSpacing:"0.04em",fontFamily:"var(--font-mono)"}}>
                    CH {idx+1}
                  </div>
                  {ch.detailed && <Tag tone="green" size="sm">상세</Tag>}
                </div>
                <div style={{fontSize:15,fontWeight:700,color:"var(--fg-1)"}}>{ch.title}</div>
                <ul style={{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:4}}>
                  {ch.sections.map((s,i)=>(
                    <li key={i} style={{fontSize:12,color:"var(--fg-3)",lineHeight:1.5}}>· {s}</li>
                  ))}
                </ul>
              </button>
            ))}
          </div>
        </section>
        {/* 광고 슬롯 — 1과목과 2과목 사이 */}
        {sidx === 0 && (
          <div style={{marginBottom:32}}>
            <AdSlot slot="THEORY_LIST_MID" format="horizontal"/>
          </div>
        )}
      </React.Fragment>
    ))}

    {/* 광고 슬롯 — 이론 목록 하단 */}
    <div style={{marginTop:32}}>
      <AdSlot slot="THEORY_LIST_BOTTOM" format="horizontal"/>
    </div>
  </div>
);

export const TheoryDetailScreen = ({chapterId, onNavigate}) => {
  // 챕터 열람 기록
  React.useEffect(() => { recordTheoryView(chapterId); }, [chapterId]);
  const body = THEORY_BODY[chapterId];
  // Fallback if not detailed
  if (!body) {
    return <TheoryStub chapterId={chapterId} onNavigate={onNavigate}/>;
  }
  const linkedQuiz = body.linkedQuizIds
    .map(id => CONCEPT_QUIZ.find(q=>q.id===id) || QUIZ_BANK.find(q=>q.id===id))
    .filter(Boolean);

  return (
    <div style={{maxWidth:1180,margin:"0 auto",padding:"28px 28px 80px"}}>
      {/* 뒤로가기 + Breadcrumb */}
      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:18}}>
        <button
          onClick={() => { if (typeof window !== 'undefined' && window.history.length > 1) window.history.back(); else onNavigate("theory"); }}
          title="뒤로가기"
          style={{
            width:36, height:36, display:"inline-flex", alignItems:"center", justifyContent:"center",
            background:"var(--bg-card)", border:"1px solid var(--border-default)", borderRadius:10,
            cursor:"pointer", color:"var(--fg-2)", padding:0,
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-muted)'; e.currentTarget.style.borderColor = 'var(--point-500)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-card)'; e.currentTarget.style.borderColor = 'var(--border-default)'; }}
        >
          <Ic.ArrowLeft size={18}/>
        </button>
        <div style={{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"var(--fg-3)"}}>
          <button onClick={()=>onNavigate("theory")} style={{background:"none",border:0,color:"var(--fg-3)",cursor:"pointer",fontFamily:"inherit",fontSize:12,padding:0}}>이론</button>
          <Ic.ChevronRight size={12}/>
          <span>{body.subjectCode} · {body.subjectTitle}</span>
          <Ic.ChevronRight size={12}/>
          <span style={{color:"var(--fg-1)",fontWeight:600}}>{body.chapterNum} {body.title}</span>
        </div>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"minmax(0, 1fr) 340px",gap:32}} className="theory-detail-grid">
        {/* Main body */}
        <article>
          <div style={{display:"flex",gap:8,marginBottom:10}}>
            <Tag tone="green">{body.subjectCode}</Tag>
            <Tag tone="neutral">{body.chapterNum}</Tag>
          </div>
          <h1 style={{fontSize:32,fontWeight:800,color:"var(--fg-1)",letterSpacing:"-0.02em",margin:"0 0 8px",lineHeight:1.2}}>
            {body.title}
          </h1>
          <p style={{fontSize:15,color:"var(--fg-3)",margin:"0 0 28px"}}>{body.subtitle}</p>

          {body.sections.map(sec => (
            <section key={sec.id} style={{marginBottom:36}}>
              <h2 style={{fontSize:20,fontWeight:700,color:"var(--fg-1)",margin:"0 0 12px",letterSpacing:"-0.01em"}}>{sec.heading}</h2>
              {sec.paragraphs?.map((p,i)=>(
                <p key={i} style={{fontSize:15.5,color:"var(--fg-2)",lineHeight:1.75,margin:"0 0 12px",textWrap:"pretty"}}>{p}</p>
              ))}
              {sec.diagram && DIAGRAMS && DIAGRAMS[sec.diagram] && (
                React.createElement(DIAGRAMS[sec.diagram])
              )}
              {sec.bullets && (
                <ul style={{margin:"12px 0 0",padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:10}}>
                  {sec.bullets.map((b,i)=>(
                    <li key={i} style={{
                      padding:"12px 14px",background:"var(--bg-card)",border:"1px solid var(--border-subtle)",
                      borderRadius:10,fontSize:14,lineHeight:1.7,
                    }}>
                      <span style={{color:"var(--point-600)",fontWeight:700,marginRight:8}}>{b.t}</span>
                      <span style={{color:"var(--fg-2)"}}>— {b.d}</span>
                    </li>
                  ))}
                </ul>
              )}
              {sec.table && (
                <div style={{marginTop:14,overflowX:"auto",border:"1px solid var(--border-subtle)",borderRadius:10}}>
                  <table style={{width:"100%",borderCollapse:"collapse",fontSize:13.5}}>
                    <thead>
                      <tr>
                        {sec.table.headers.map((h,i)=>(
                          <th key={i} style={{textAlign:"left",padding:"10px 14px",background:"var(--bg-muted)",color:"var(--fg-1)",fontWeight:700,borderBottom:"1px solid var(--border-subtle)"}}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {sec.table.rows.map((r,ri)=>(
                        <tr key={ri}>
                          {r.map((c,ci)=>(
                            <td key={ci} style={{padding:"10px 14px",borderBottom: ri<sec.table.rows.length-1?"1px solid var(--border-subtle)":"none",color:ci===0?"var(--fg-3)":"var(--fg-2)",fontWeight:ci===1?600:400}}>{c}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {sec.example && (
                <div style={{marginTop:14}}>
                  <div style={{fontSize:12,color:"var(--fg-3)",fontWeight:600,marginBottom:6}}>{sec.example.caption}</div>
                  <CodeBlock>{sec.example.sql}</CodeBlock>
                </div>
              )}
              {sec.tip && (
                <div style={{
                  marginTop:14,padding:"12px 14px",background:"var(--point-050)",
                  border:"1px solid var(--point-100)",borderRadius:10,
                  display:"flex",gap:10,alignItems:"flex-start",
                }}>
                  <Ic.Lightbulb size={18}/>
                  <div style={{fontSize:13.5,color:"var(--fg-2)",lineHeight:1.65}}>
                    <strong style={{color:"var(--point-600)"}}>TIP</strong> — {sec.tip}
                  </div>
                </div>
              )}
            </section>
          ))}

          {/* Nav footer */}
          {(() => {
            // flatten all chapters across subjects into a single ordered list
            const all = THEORY.subjects.flatMap(s => s.chapters.map(c => c.id));
            const idx = all.indexOf(chapterId);
            const nextId = idx >= 0 && idx < all.length - 1 ? all[idx + 1] : null;
            return (
              <div style={{display:"flex",justifyContent:"space-between",gap:10,marginTop:40,paddingTop:24,borderTop:"1px solid var(--border-subtle)"}}>
                <Btn variant="ghost" icon={<Ic.ArrowLeft/>} onClick={()=>onNavigate("theory")}>이론 목록</Btn>
                {nextId ? (
                  <Btn onClick={()=>onNavigate("theory-detail", nextId)} iconRight={<Ic.ArrowRight/>}>다음</Btn>
                ) : (
                  <Btn variant="outline" onClick={()=>onNavigate("endless")} iconRight={<Ic.ArrowRight/>}>무한 퀴즈로 연습</Btn>
                )}
              </div>
            );
          })()}
        </article>

        {/* Right rail: section ToC + linked quiz + 광고 */}
        <aside style={{position:"relative"}}>
          <div style={{position:"sticky",top:80,display:"flex",flexDirection:"column",gap:14}}>
            <SectionToc sections={body.sections}/>
            {linkedQuiz.length > 0 && (
              <MiniTest key={chapterId} questions={linkedQuiz}/>
            )}
            {/* 광고 슬롯 — 미니테스트 하단 */}
            <AdSlot slot="THEORY_DETAIL_AFTER_MINITEST" format="rectangle"/>
          </div>
        </aside>
      </div>
    </div>
  );
};

export const TheoryStub = ({chapterId, onNavigate}) => {
  // Find chapter
  let ch = null, sub = null;
  for (const s of THEORY.subjects) {
    const c = s.chapters.find(cc => cc.id === chapterId);
    if (c) { ch = c; sub = s; break; }
  }
  if (!ch) return <div style={{padding:80,textAlign:"center",color:"var(--fg-3)"}}>해당 이론을 찾을 수 없습니다.</div>;
  return (
    <div style={{maxWidth:1180,margin:"0 auto",padding:"28px 28px 80px"}}>
      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:18}}>
        <button
          onClick={() => { if (typeof window !== 'undefined' && window.history.length > 1) window.history.back(); else onNavigate("theory"); }}
          title="뒤로가기"
          style={{
            width:36, height:36, display:"inline-flex", alignItems:"center", justifyContent:"center",
            background:"var(--bg-card)", border:"1px solid var(--border-default)", borderRadius:10,
            cursor:"pointer", color:"var(--fg-2)", padding:0,
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-muted)'; e.currentTarget.style.borderColor = 'var(--point-500)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-card)'; e.currentTarget.style.borderColor = 'var(--border-default)'; }}
        >
          <Ic.ArrowLeft size={18}/>
        </button>
        <div style={{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"var(--fg-3)"}}>
          <button onClick={()=>onNavigate("theory")} style={{background:"none",border:0,color:"var(--fg-3)",cursor:"pointer",fontFamily:"inherit",fontSize:12,padding:0}}>이론</button>
          <Ic.ChevronRight size={12}/>
          <span>{sub.code} · {sub.title}</span>
          <Ic.ChevronRight size={12}/>
          <span style={{color:"var(--fg-1)",fontWeight:600}}>{ch.title}</span>
        </div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"minmax(0, 1fr) 340px",gap:32}} className="theory-detail-grid">
        <article>
          <div style={{display:"flex",gap:8,marginBottom:10}}><Tag tone="green">{sub.code}</Tag></div>
          <h1 style={{fontSize:32,fontWeight:800,color:"var(--fg-1)",letterSpacing:"-0.02em",margin:"0 0 8px",lineHeight:1.2}}>{ch.title}</h1>
          <p style={{fontSize:15,color:"var(--fg-3)",margin:"0 0 28px"}}>이 장은 아래 절로 구성되어 있어요</p>
          <ul style={{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:10}}>
            {ch.sections.map((s,i)=>(
              <li key={i} style={{padding:"16px 18px",background:"var(--bg-card)",border:"1px solid var(--border-subtle)",borderRadius:12}}>
                <div style={{fontSize:11,color:"var(--fg-3)",fontWeight:700,fontFamily:"var(--font-mono)",marginBottom:4}}>SECTION</div>
                <div style={{fontSize:15,color:"var(--fg-1)",fontWeight:600}}>{s}</div>
              </li>
            ))}
          </ul>
          <div style={{marginTop:24,padding:"18px 20px",background:"var(--point-050)",border:"1px solid var(--point-100)",borderRadius:12,display:"flex",gap:14,alignItems:"center"}}>
            <Mascot size={56}/>
            <div style={{fontSize:14,color:"var(--fg-2)",lineHeight:1.6}}>
              이 장의 상세 본문은 곧 업데이트될 예정이에요.<br/>
              그동안 <strong style={{color:"var(--point-600)"}}>무한 퀴즈</strong>로 관련 문제를 풀어 볼 수 있어요.
            </div>
          </div>
        </article>
        <aside></aside>
      </div>
    </div>
  );
};

// Mini test — a single-question inline quiz using design-system flow
export const MiniTest = ({questions}) => {
  const [idx, setIdx] = React.useState(0);
  const [selected, setSelected] = React.useState(null);
  const [checked, setChecked] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  if (!questions || !questions.length) return null;
  const q = questions[idx];

  const next = () => {
    setSelected(null); setChecked(false); setOpen(false);
    setIdx((idx + 1) % questions.length);
  };

  return (
    <div style={{background:"var(--bg-card)",border:"1px solid var(--border-subtle)",borderRadius:14,boxShadow:"var(--shadow-sm)",overflow:"hidden"}}>
      <div style={{padding:"12px 16px",background:"var(--point-050)",borderBottom:"1px solid var(--point-100)",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <Ic.Target size={16}/>
          <div style={{fontSize:13,fontWeight:700,color:"var(--point-600)"}}>개념 점검 · 미니 테스트</div>
        </div>
        <div style={{fontSize:11,color:"var(--fg-3)",fontFamily:"var(--font-mono)"}}>{idx+1} / {questions.length}</div>
      </div>
      <div style={{padding:"16px 18px"}}>
        <div style={{display:"flex",gap:6,marginBottom:8}}>
          <Tag tone="neutral" size="sm">{q.concept}</Tag>
        </div>
        <div style={{fontSize:14,fontWeight:600,color:"var(--fg-1)",lineHeight:1.5,marginBottom:4}}>{q.title}</div>
        {q.body && <div style={{fontSize:12.5,color:"var(--fg-3)",lineHeight:1.55,marginTop:6}}>{q.body}</div>}
        {q.query && <CodeBlock style={{fontSize:12,padding:"10px 12px",margin:"10px 0"}}>{q.query}</CodeBlock>}
        <div style={{display:"flex",flexDirection:"column",gap:6,marginTop:12}}>
          {q.options.map((opt,i)=>{
            const sel = selected===i, ok = checked && i===q.correctIndex, bad = checked && sel && !ok;
            let bg="var(--bg-card)", br="1px solid var(--border-default)";
            if (sel && !checked) { bg="var(--point-100)"; br="2px solid var(--point-600)"; }
            if (ok) { bg="var(--correct-bg)"; br="2px solid var(--point-600)"; }
            if (bad) { bg="var(--wrong-bg)"; br="2px solid var(--wrong-border)"; }
            return (
              <button key={i} onClick={()=>!checked && setSelected(i)} disabled={checked} style={{
                textAlign:"left",display:"flex",gap:8,padding:"8px 10px",
                background:bg,border:br,borderRadius:8,alignItems:"flex-start",
                cursor:checked?"default":"pointer",fontFamily:"inherit",fontSize:12.5,lineHeight:1.5,
                color:"var(--fg-2)",
              }}>
                <span style={{fontFamily:"var(--font-mono)",fontWeight:700,fontSize:16,lineHeight:1.35,color:ok?"var(--point-600)":bad?"var(--wrong-fg)":"var(--fg-3)",flexShrink:0,minWidth:18}}>{["①","②","③","④"][i]}</span>
                <span>{opt}</span>
              </button>
            );
          })}
        </div>
        {checked && (
          <div style={{
            marginTop:10,padding:"10px 12px",
            background: selected===q.correctIndex ? "var(--correct-bg)" : "var(--wrong-bg)",
            border:`1px solid ${selected===q.correctIndex ? "var(--correct-border)" : "var(--wrong-border)"}`,
            borderRadius:8,fontSize:12.5,
          }}>
            <div style={{fontWeight:700,color:selected===q.correctIndex?"var(--correct-fg)":"var(--wrong-fg)",marginBottom:4}}>
              {selected===q.correctIndex ? "정답이에요" : `오답이에요 · 정답 ${q.correctIndex+1}번`}
            </div>
            <button onClick={()=>setOpen(!open)} style={{background:"none",border:0,color:"var(--fg-3)",fontFamily:"inherit",fontSize:11.5,padding:0,cursor:"pointer",display:"flex",alignItems:"center",gap:4}}>
              해설 {open ? "접기" : "펼치기"} <Ic.ChevronDown size={12}/>
            </button>
            {open && <div style={{marginTop:8,fontSize:12.5,color:"var(--fg-2)",lineHeight:1.65}}>{q.explanation}</div>}
          </div>
        )}
        <div style={{display:"flex",gap:8,marginTop:12,justifyContent:"flex-end"}}>
          {!checked ? (
            <Btn size="sm" disabled={selected==null} onClick={()=>{ setChecked(true); setOpen(true); }}>정답 확인</Btn>
          ) : (
            <Btn size="sm" variant="outline" onClick={next} iconRight={<Ic.ArrowRight size={12}/>}>
              다음 문제
            </Btn>
          )}
        </div>
      </div>
    </div>
  );
};

export const SectionToc = ({sections}) => (
  <div style={{background:"var(--bg-card)",border:"1px solid var(--border-subtle)",borderRadius:12,padding:"14px 16px"}}>
    <div style={{fontSize:11,color:"var(--fg-3)",fontWeight:700,letterSpacing:"0.04em",marginBottom:8}}>목차</div>
    <ul style={{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6}}>
      {sections.map((s,i)=>(
        <li key={i} style={{fontSize:13,color:"var(--fg-2)",lineHeight:1.5,paddingLeft:10,borderLeft:"2px solid var(--border-subtle)"}}>{s.heading}</li>
      ))}
    </ul>
  </div>
);

