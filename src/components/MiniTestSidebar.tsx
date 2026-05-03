// @ts-nocheck
// MiniTestSidebar — 이론 챕터 우측 사이드바.
// 두 개의 독립 블럭:
//   1) OX 퀴즈 블럭 — 챕터의 OX 문항 랜덤 순서
//   2) 4지선다 연관 문제 블럭 — 기출 + AI 모의고사 (랜덤 순서, 챕터별 매칭)
//
// 인터랙션 (블럭별 독립):
//   1) 문제 표시 → O/X 또는 ①②③④ 클릭 → 즉시 정답·해설
//   2) "다음" 버튼으로 다음 문제로 (이전 버튼은 풀이 상태 초기화)
//   3) 끝까지 풀면 결과 요약 표시 + "다시 풀기" 시 재셔플
import React from 'react';
import { OX_QUIZ } from '../data/miniTest/ox';
import { EXAM_MAPPING } from '../data/miniTest/examMapping';
import { MOCK_CHAPTERS_FOR } from '../data/miniTest/mockMapping';
import { QUIZ_BANK } from '../data/quizBank';
import { AI_MOCK } from '../data/rounds/ai-mock';
import { Ic, Tag } from './Atoms';
import { renderInlineMd } from './QuestionReferences';
import { BugReportModal } from './BugReportModal';

// 랜덤 셔플 — Fisher-Yates
function shuffle<T>(arr: T[]): T[] {
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

// 챕터별 4지선다 연관 문제 빌드 — 기출 + 모의고사, 랜덤 순서
function buildMcList(chapterId: string): any[] {
  const items: any[] = [];

  // 기출 매핑
  for (const ref of EXAM_MAPPING[chapterId] || []) {
    const q = QUIZ_BANK.find((x: any) => x.round === ref.round && x.number === ref.number);
    if (q) items.push(q);
  }

  // AI 모의고사 — 챕터에 해당하는 카테고리 필터링
  const mockCategories = MOCK_CHAPTERS_FOR[chapterId] || [];
  if (mockCategories.length > 0) {
    const mockItems = AI_MOCK.filter((q: any) => q.chapter && mockCategories.includes(q.chapter));
    // 챕터당 최대 5개로 제한 (기출 5 + 모의 5 = 10 정도가 적당)
    const mockSampled = shuffle(mockItems).slice(0, 5);
    items.push(...mockSampled);
  }

  return shuffle(items);
}

// ─────────────────────────────────────────────────────────────
// 단일 퀴즈 블럭 — kind: 'ox' or 'mc'
// ─────────────────────────────────────────────────────────────
const QuizBlock = ({ kind, items, chapterLabel, chapterId, blockId }: any) => {
  const [idx, setIdx] = React.useState(0);
  // OX 답: boolean | null,  MC 답: number(0~3) | null
  const [answer, setAnswer] = React.useState<any>(null);
  const [results, setResults] = React.useState<{ correct: number; total: number }>({ correct: 0, total: 0 });
  const [done, setDone] = React.useState(false);
  const [bugOpen, setBugOpen] = React.useState(false);
  // 셔플된 items 보관 — "다시 풀기" 시 재셔플
  const [list, setList] = React.useState<any[]>(items);

  // 챕터(또는 부모 items)가 바뀌면 초기화
  React.useEffect(() => {
    setList(items);
    setIdx(0); setAnswer(null); setResults({ correct: 0, total: 0 }); setDone(false);
  }, [chapterId, blockId]);

  if (list.length === 0) return null;

  const blockTitle = kind === 'ox' ? 'OX 퀴즈' : '연관 문제';
  const blockIcon = kind === 'ox'
    ? <span className="mt-icon-ox">O✕</span>
    : <Ic.ListChecks size={14}/>;

  // 결과 요약
  if (done) {
    const rate = results.total ? Math.round((results.correct / results.total) * 100) : 0;
    return (
      <div className="mt-block">
        <div className="mt-head">
          <span className="mt-icon">{blockIcon}</span>
          <span className="mt-title">{blockTitle} 완료</span>
        </div>
        <div className="mt-summary">
          <div className="mt-summary-rate">
            <strong>{results.correct}</strong> / {results.total}
          </div>
          <div className="mt-summary-pct">{rate}%</div>
        </div>
        <button
          className="mt-btn-restart"
          onClick={() => {
            // 재셔플 + 초기화
            const reshuffled = kind === 'ox'
              ? shuffle(items)
              : shuffle(items);
            setList(reshuffled);
            setIdx(0); setAnswer(null); setResults({ correct: 0, total: 0 }); setDone(false);
          }}
        >
          다시 풀기
        </button>
      </div>
    );
  }

  const cur = list[idx];
  const isAnswered = answer !== null;
  const isCorrect = kind === 'ox'
    ? answer === cur.answer
    : answer === cur.correctIndex;

  const pickOx = (val: boolean) => {
    if (isAnswered) return;
    setAnswer(val);
    setResults(r => ({ correct: r.correct + (val === cur.answer ? 1 : 0), total: r.total + 1 }));
  };
  const pickMc = (i: number) => {
    if (isAnswered) return;
    setAnswer(i);
    setResults(r => ({ correct: r.correct + (i === cur.correctIndex ? 1 : 0), total: r.total + 1 }));
  };
  const goPrev = () => {
    if (idx === 0) return;
    setAnswer(null);
    setIdx(idx - 1);
  };
  const goNext = () => {
    setAnswer(null);
    if (idx >= list.length - 1) { setDone(true); return; }
    setIdx(idx + 1);
  };

  // MC 문항의 출처 라벨 (제N회 / 모의고사)
  const mcSourceLabel = kind === 'mc' ? (
    cur.round
      ? `제${cur.round}회`
      : (cur._source === 'ai-mock' ? '모의고사' : '기출 변형')
  ) : '';
  const mcNumberLabel = kind === 'mc' && cur.round ? `${cur.number}번` : '';

  return (
    <div className="mt-block">
      <div className="mt-head">
        <span className="mt-icon">{blockIcon}</span>
        <span className="mt-title">{blockTitle}</span>
        <span className="mt-progress">{idx + 1} / {list.length}</span>
        <button
          className="mt-bug"
          onClick={() => setBugOpen(true)}
          title="이 문항의 오류를 제보"
          aria-label="오류 제보"
        >
          오류
        </button>
      </div>

      {kind === 'mc' && (
        <div className="mt-meta">
          <Tag tone={cur.round ? 'blue' : 'peach'} size="sm">{mcSourceLabel}</Tag>
          {mcNumberLabel && <Tag tone="neutral" size="sm">{mcNumberLabel}</Tag>}
          {!cur.round && cur.chapter && <Tag tone="neutral" size="sm">{cur.chapter}</Tag>}
        </div>
      )}

      <div className="mt-question">
        {kind === 'ox' ? cur.q : renderInlineMd(cur.title)}
      </div>

      {kind === 'mc' && cur.references?.length > 0 && (
        <div className="mt-refs">
          {cur.references.map((r: any, i: number) => (
            r.type === 'text' ? (
              <p key={i} className="mt-refs-text">{renderInlineMd(r.content)}</p>
            ) : null
          ))}
        </div>
      )}

      {!isAnswered && kind === 'ox' && (
        <div className="mt-actions mt-actions-ox">
          <button className="mt-ox mt-ox-o" onClick={() => pickOx(true)} aria-label="O 답">O</button>
          <button className="mt-ox mt-ox-x" onClick={() => pickOx(false)} aria-label="X 답">X</button>
        </div>
      )}

      {!isAnswered && kind === 'mc' && (
        <ol className="mt-actions mt-actions-mc">
          {cur.options.map((opt: string, i: number) => (
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
          {kind === 'ox' ? (
            <div className="mt-result-explain">{renderInlineMd(cur.explanation)}</div>
          ) : (
            <>
              <div className="mt-result-correct-info">
                정답: <strong>{cur.correctIndex + 1}번</strong> · {renderInlineMd(cur.options[cur.correctIndex])}
              </div>
              <div className="mt-result-explain">{renderInlineMd(cur.explanation)}</div>
            </>
          )}
        </div>
      )}

      <div className="mt-nav">
        <button className="mt-nav-btn" onClick={goPrev} disabled={idx === 0}>
          <Ic.ArrowLeft size={12}/> 이전
        </button>
        <span className="mt-nav-progress">{idx + 1} / {list.length}</span>
        <button className="mt-nav-btn mt-nav-next" onClick={goNext}>
          {idx >= list.length - 1 ? '결과 보기' : '다음'} <Ic.ArrowRight size={12}/>
        </button>
      </div>

      {bugOpen && (
        <BugReportModal
          ctx={
            kind === 'ox'
              ? { kind: 'OX', chapter: chapterLabel || chapterId, title: cur.q }
              : {
                  kind: '문제',
                  round: cur.round,
                  subject: cur.subject,
                  number: cur.number,
                  examLabel: cur.examLabel || (cur.round ? `제${cur.round}회` : '모의고사'),
                  title: cur.title,
                }
          }
          onClose={() => setBugOpen(false)}
        />
      )}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// 사이드바 외곽 — OX 블럭 + MC 블럭 두 개를 차례로 렌더
// ─────────────────────────────────────────────────────────────
export const MiniTestSidebar = ({ chapterId, chapterLabel }: any) => {
  // OX 리스트 (챕터 단위 셔플)
  const oxList = React.useMemo(
    () => shuffle((OX_QUIZ[chapterId] || []).slice()),
    [chapterId]
  );

  // 4지선다 리스트 (기출 + 모의 합쳐서 셔플)
  const mcList = React.useMemo(
    () => buildMcList(chapterId),
    [chapterId]
  );

  if (oxList.length === 0 && mcList.length === 0) return null;

  return (
    <aside className="mt-sidebar">
      {oxList.length > 0 && (
        <QuizBlock
          kind="ox"
          items={oxList}
          chapterLabel={chapterLabel}
          chapterId={chapterId}
          blockId="ox"
        />
      )}
      {mcList.length > 0 && (
        <QuizBlock
          kind="mc"
          items={mcList}
          chapterLabel={chapterLabel}
          chapterId={chapterId}
          blockId="mc"
        />
      )}
    </aside>
  );
};
