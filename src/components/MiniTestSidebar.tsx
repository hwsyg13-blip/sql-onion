// @ts-nocheck
// MiniTestSidebar — 이론 챕터 우측 사이드바.
// 한 블럭 안에서 OX 문제들 → 연관 기출(MC) 들이 자연스럽게 next 로 이어진다.
// 인터랙션:
//   1) 문제 표시 → O/X 또는 ①②③④ 클릭 → 즉시 정답·해설
//   2) "다음" 버튼으로 다음 문제로 (이전 버튼은 풀이 상태 초기화)
//   3) 끝까지 풀면 결과 요약 표시
import React from 'react';
import { OX_QUIZ } from '../data/miniTest/ox';
import { EXAM_MAPPING } from '../data/miniTest/examMapping';
import { QUIZ_BANK } from '../data/quizBank';
import { Ic, Tag } from './Atoms';
import { renderInlineMd } from './QuestionReferences';

type SeqItem =
  | { type: 'ox'; data: { q: string; answer: boolean; explanation: string } }
  | { type: 'mc'; data: any /* QuizQuestion */ };

export const MiniTestSidebar = ({ chapterId }: any) => {
  // 시퀀스 빌드 — OX 먼저, 그다음 연관 기출
  const seq: SeqItem[] = React.useMemo(() => {
    const items: SeqItem[] = [];
    for (const ox of OX_QUIZ[chapterId] || []) items.push({ type: 'ox', data: ox });
    for (const ref of EXAM_MAPPING[chapterId] || []) {
      const q = QUIZ_BANK.find((x: any) => x.round === ref.round && x.number === ref.number);
      if (q) items.push({ type: 'mc', data: q });
    }
    return items;
  }, [chapterId]);

  const [idx, setIdx] = React.useState(0);
  // OX 답: boolean | null,  MC 답: number(0~3) | null
  const [answer, setAnswer] = React.useState<any>(null);
  // 풀이 누적 — 결과 요약용
  const [results, setResults] = React.useState<{ correct: number; total: number }>({ correct: 0, total: 0 });
  const [done, setDone] = React.useState(false);

  // 챕터가 바뀌면 초기화
  React.useEffect(() => {
    setIdx(0); setAnswer(null); setResults({ correct: 0, total: 0 }); setDone(false);
  }, [chapterId]);

  if (seq.length === 0) return null;

  // 결과 요약 화면
  if (done) {
    const rate = results.total ? Math.round((results.correct / results.total) * 100) : 0;
    return (
      <aside className="mt-sidebar">
        <div className="mt-block">
          <div className="mt-head">
            <span className="mt-icon"><Ic.ListChecks size={14}/></span>
            <span className="mt-title">미니 테스트 완료</span>
          </div>
          <div className="mt-summary">
            <div className="mt-summary-rate">
              <strong>{results.correct}</strong> / {results.total}
            </div>
            <div className="mt-summary-pct">{rate}%</div>
          </div>
          <button
            className="mt-btn-restart"
            onClick={() => { setIdx(0); setAnswer(null); setResults({ correct: 0, total: 0 }); setDone(false); }}
          >
            다시 풀기
          </button>
        </div>
      </aside>
    );
  }

  const cur = seq[idx];
  const isAnswered = answer !== null;
  const isCorrect = cur.type === 'ox'
    ? answer === cur.data.answer
    : answer === cur.data.correctIndex;

  const pickOx = (val: boolean) => {
    if (isAnswered) return;
    setAnswer(val);
    setResults(r => ({ correct: r.correct + (val === cur.data.answer ? 1 : 0), total: r.total + 1 }));
  };
  const pickMc = (i: number) => {
    if (isAnswered) return;
    setAnswer(i);
    setResults(r => ({ correct: r.correct + (i === cur.data.correctIndex ? 1 : 0), total: r.total + 1 }));
  };
  const goPrev = () => {
    if (idx === 0) return;
    setAnswer(null);
    setIdx(idx - 1);
    // 누적 통계는 이전으로 돌아가도 그대로 두고, 다시 풀 때만 갱신.
    // 단순화를 위해 prev 로 가도 results 는 유지.
  };
  const goNext = () => {
    setAnswer(null);
    if (idx >= seq.length - 1) { setDone(true); return; }
    setIdx(idx + 1);
  };

  return (
    <aside className="mt-sidebar">
      <div className="mt-block">
        <div className="mt-head">
          <span className="mt-icon">
            {cur.type === 'ox' ? <span className="mt-icon-ox">O✕</span> : <Ic.ListChecks size={14}/>}
          </span>
          <span className="mt-title">
            {cur.type === 'ox' ? 'OX 퀴즈' : '연관 기출'}
          </span>
          <span className="mt-progress">{idx + 1} / {seq.length}</span>
        </div>

        {cur.type === 'mc' && (
          <div className="mt-meta">
            <Tag tone="blue" size="sm">제{cur.data.round}회</Tag>
            <Tag tone="neutral" size="sm">{cur.data.number}번</Tag>
          </div>
        )}

        <div className="mt-question">
          {cur.type === 'ox' ? cur.data.q : renderInlineMd(cur.data.title)}
        </div>

        {cur.type === 'mc' && cur.data.references?.length > 0 && (
          <div className="mt-refs">
            {cur.data.references.map((r: any, i: number) => (
              r.type === 'text' ? (
                <p key={i} className="mt-refs-text">{renderInlineMd(r.content)}</p>
              ) : null
            ))}
          </div>
        )}

        {!isAnswered && cur.type === 'ox' && (
          <div className="mt-actions mt-actions-ox">
            <button className="mt-ox mt-ox-o" onClick={() => pickOx(true)} aria-label="O 답">O</button>
            <button className="mt-ox mt-ox-x" onClick={() => pickOx(false)} aria-label="X 답">X</button>
          </div>
        )}

        {!isAnswered && cur.type === 'mc' && (
          <ol className="mt-actions mt-actions-mc">
            {cur.data.options.map((opt: string, i: number) => (
              <li key={i}>
                <button className="mt-mc" onClick={() => pickMc(i)}>
                  <span className="mt-mc-num">{i + 1}</span>
                  <span className="mt-mc-text">{renderInlineMd(opt)}</span>
                </button>
              </li>
            ))}
          </ol>
        )}

        {isAnswered && (
          <div className={`mt-result ${isCorrect ? 'mt-result-correct' : 'mt-result-wrong'}`}>
            <div className="mt-result-mark">
              {isCorrect ? <><Ic.Check size={14}/> 정답</> : <><Ic.X size={14}/> 오답</>}
            </div>
            {cur.type === 'ox' ? (
              <div className="mt-result-explain">{renderInlineMd(cur.data.explanation)}</div>
            ) : (
              <>
                <div className="mt-result-correct-info">
                  정답: <strong>{cur.data.correctIndex + 1}번</strong> · {renderInlineMd(cur.data.options[cur.data.correctIndex])}
                </div>
                <div className="mt-result-explain">{renderInlineMd(cur.data.explanation)}</div>
              </>
            )}
          </div>
        )}

        <div className="mt-nav">
          <button className="mt-nav-btn" onClick={goPrev} disabled={idx === 0}>
            <Ic.ArrowLeft size={12}/> 이전
          </button>
          <span className="mt-nav-progress">{idx + 1} / {seq.length}</span>
          <button className="mt-nav-btn mt-nav-next" onClick={goNext}>
            {idx >= seq.length - 1 ? '결과 보기' : '다음'} <Ic.ArrowRight size={12}/>
          </button>
        </div>
      </div>
    </aside>
  );
};
