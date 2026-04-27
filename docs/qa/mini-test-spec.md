# 챕터 미니 테스트 — 기능 개발 인계 명세

> **목적**: 이론 챕터 페이지에 학습 흐름을 끊지 않으면서 즉석 점검할 수 있는 미니 테스트(OX + 모의고사) 추가.
> 콘텐츠/QA 채팅에서 시안 시도했으나 인터랙션은 React가 자연스러워 **기능 개발 채팅으로 인계**.

## 핵심 결정

1. **위치**: 챕터 페이지 **우측 사이드바** (PC ≥ 1024px) / **본문 아래** (모바일)
2. **두 블럭으로 분리**:
   - **OX 퀴즈** — 챕터 핵심 함정 빠른 점검
   - **모의고사** — 챕터 관련 기출 4지선다
3. **인터랙션**:
   - 문제가 사이드바에 **바로 표시** (진입점 카드 X)
   - O/X 또는 ①②③④ 클릭 → 즉시 정답·오답 피드백 + 해설 노출
   - 이전/다음 navigation 으로 문제 이동
   - 모든 문제 풀면 결과 요약 (정답률 등)
4. **별도 페이지 없음** — 사이드바 안에서 모두 완료

## 화면 흐름

```
[챕터 본문]                          [사이드바]
  핵심 요약                            ┌────────────────┐
  개념 도식화                          │ 미니 테스트     │
  SQL 실전                             ├────────────────┤
  Before & After                       │ ◇ OX 퀴즈      │
  ...                                  │ Q1. 문제 본문   │
                                       │ [O] [X]        │
                                       │ ← 1/6 →        │
                                       ├────────────────┤
                                       │ ◇ 모의고사     │
                                       │ [제57회 1과목] │
                                       │ Q1. 문제 본문   │
                                       │ ① 보기1        │
                                       │ ② 보기2        │
                                       │ ③ 보기3        │
                                       │ ④ 보기4        │
                                       │ ← 1/5 →        │
                                       ├────────────────┤
                                       │ 전체 시험대비 → │
                                       └────────────────┘
                                          (sticky)
```

## 데이터 출처

### OX 데이터
**위치**: `docs/qa/theory-mockups/exam-review.html`

각 챕터마다 `<section class="exam-chapter" id="ch-X-X-X">` 안에 `<div class="ox-quiz">` 섹션 있음. 30개 챕터 × 평균 6~7문제 = **약 200문제**.

각 문제 구조:
```html
<div class="ox-q">
  <div class="num">Q1</div>
  <div class="q">진술문</div>
  <details>
    <summary>정답 보기</summary>
    <div class="a">
      <span class="verdict x">X</span>해설
    </div>
  </details>
</div>
```

→ React로 옮길 때 JSON으로 추출 권장 (HTML 파싱 또는 새로 작성):

```typescript
// src/data/miniTest/ox.ts (예시)
export const OX_QUIZ: Record<string, OxQuestion[]> = {
  c111: [ // 1-1-1 데이터모델
    { q: "물리적 모델링이 가장 먼저 진행된다.", answer: false, explanation: "개념 → 논리 → 물리 순서로 진행한다." },
    // ...
  ],
  c112: [ // 1-1-2 엔터티
    { q: "엔터티는 1개 인스턴스만 있어도 된다.", answer: false, explanation: "2개 이상의 인스턴스가 필요하다." },
    // ...
  ],
  // 30개 챕터
};

interface OxQuestion {
  q: string;          // 진술문
  answer: boolean;    // O = true, X = false
  explanation: string; // 해설
}
```

### 모의고사 데이터
**위치**: `scripts/authored/round-45.json` ~ `round-60.json` (16회차)

각 round JSON 구조:
```json
{
  "round": 60,
  "authored": [
    {
      "subject": "1과목",
      "number": 1,
      "title": "문제 본문",
      "options": ["보기1", "보기2", "보기3", "보기4"],
      "correctIndex": 0,
      "explanation": "해설"
    }
  ]
}
```

**챕터별 매핑**: 키워드 매칭으로 추출. 챕터당 5개 정도 기출 문제 매핑 (총 약 150문제).

#### 챕터별 키워드 매핑

| 챕터 ID | 키워드 |
|---|---|
| c111 데이터모델의이해 | "데이터 모델", "모델링", "3층 스키마", "스키마" |
| c112 엔터티 | "엔터티" |
| c113 속성 | "속성", "도메인", "파생속성" |
| c114 관계 | "관계", "1:1", "1:N", "M:N", "차수" |
| c115 식별자 | "식별자", "주식별자" |
| c121 정규화 | "정규화", "정규형", "1NF", "2NF", "3NF", "BCNF", "함수 종속" |
| c122 관계와조인의이해 | "관계", "조인", "FK", "외래키" |
| c123 트랜잭션 | "트랜잭션", "ACID" |
| c124 NULL | "NULL", "NVL", "COALESCE", "IS NULL" |
| c125 본질·인조 식별자 | "본질식별자", "인조식별자", "대리키" |
| c211 RDB 개요 | "관계형", "DDL", "DML", "DCL", "TCL", "TRUNCATE" |
| c212 SELECT문 | "SELECT", "FROM", "DUAL", "FWGHSO", "실행 순서" |
| c213 함수 | "UPPER", "ROUND", "TO_CHAR", "SUBSTR", "DECODE", "CASE", "함수" |
| c214 WHERE절 | "WHERE", "AND", "OR", "BETWEEN", "IN", "LIKE" |
| c215 GROUP BY/HAVING | "GROUP BY", "HAVING", "집계" |
| c216 ORDER BY | "ORDER BY", "ASC", "DESC", "NULLS" |
| c217 조인 | "조인", "JOIN", "EQUI", "OUTER", "SELF", "CROSS" |
| c218 표준 조인 | "INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER", "NATURAL", "USING" |
| c221 서브쿼리 | "서브쿼리", "스칼라", "인라인뷰", "EXISTS", "ANY", "ALL" |
| c222 집합 연산자 | "UNION", "INTERSECT", "MINUS", "EXCEPT" |
| c223 그룹 함수 | "ROLLUP", "CUBE", "GROUPING SETS", "GROUPING" |
| c224 윈도우 함수 | "RANK", "ROW_NUMBER", "DENSE_RANK", "LAG", "LEAD", "OVER", "PARTITION" |
| c225 Top N 쿼리 | "ROWNUM", "FETCH FIRST", "TOP", "TopN" |
| c226 계층형 질의 | "계층형", "CONNECT BY", "START WITH", "LEVEL", "셀프조인" |
| c227 PIVOT/UNPIVOT | "PIVOT", "UNPIVOT" |
| c228 정규 표현식 | "REGEXP_LIKE", "REGEXP_REPLACE", "REGEXP_SUBSTR", "정규표현식" |
| c231 DML | "INSERT", "UPDATE", "DELETE", "MERGE" |
| c232 TCL | "COMMIT", "ROLLBACK", "SAVEPOINT", "트랜잭션" |
| c233 DDL | "CREATE", "ALTER", "DROP", "TRUNCATE", "RENAME", "제약조건", "PRIMARY KEY", "FOREIGN KEY" |
| c234 DCL | "GRANT", "REVOKE", "ROLE", "권한" |

#### 매핑 추출 스크립트 (제안)

```typescript
// scripts/build-mini-test-mapping.mjs
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';

const KEYWORDS: Record<string, string[]> = { /* 위 표 */ };
const ROUND_DIR = 'scripts/authored';
const OUT = 'src/data/miniTest/exam-mapping.json';

const rounds = readdirSync(ROUND_DIR).filter(f => /^round-\d+\.json$/.test(f));
const mapping: Record<string, Array<{round:number, number:number}>> = {};

for (const f of rounds) {
  const data = JSON.parse(readFileSync(`${ROUND_DIR}/${f}`, 'utf8'));
  for (const q of data.authored) {
    const text = `${q.title} ${q.options?.join(' ')} ${q.explanation || ''} ${(q.references || []).map(r => r.content || '').join(' ')}`;
    for (const [chapId, kws] of Object.entries(KEYWORDS)) {
      if (kws.some(k => text.includes(k))) {
        (mapping[chapId] ||= []).push({ round: data.round, number: q.number });
      }
    }
  }
}

// 챕터당 5개로 제한
for (const k in mapping) mapping[k] = mapping[k].slice(0, 5);

writeFileSync(OUT, JSON.stringify(mapping, null, 2));
```

→ 실행: `node scripts/build-mini-test-mapping.mjs`. 출력은 `src/data/miniTest/exam-mapping.json`.

## React 컴포넌트 구조 제안

```typescript
// src/screens/TheoryDetailScreen.tsx (또는 비슷한 위치) 안에서
<div className="theory-page-grid">
  <article className="theory-md">
    {/* 챕터 본문 */}
  </article>
  <aside className="theory-mini-test">
    <MiniTestSidebar chapterId={chapterId} />
  </aside>
</div>

// src/components/MiniTestSidebar.tsx
function MiniTestSidebar({ chapterId }) {
  return (
    <>
      <div className="aside-title">미니 테스트</div>
      <OxQuizBlock chapterId={chapterId} />
      <ExamQuizBlock chapterId={chapterId} />
      <Link to="/exam-review">전체 시험 대비 통독 →</Link>
    </>
  );
}

// src/components/OxQuizBlock.tsx
function OxQuizBlock({ chapterId }) {
  const questions = OX_QUIZ[chapterId] || [];
  const [idx, setIdx] = useState(0);
  const [answer, setAnswer] = useState<boolean | null>(null); // 사용자 선택
  
  const q = questions[idx];
  const isAnswered = answer !== null;
  const isCorrect = answer === q.answer;
  
  return (
    <div className="mt-block">
      <div className="block-head">
        <div className="block-icon">O✕</div>
        <div className="block-title">OX 퀴즈</div>
        <div className="block-progress">{idx + 1} / {questions.length}</div>
      </div>
      <div className="block-question">{q.q}</div>
      
      {!isAnswered ? (
        <div className="block-actions">
          <button className="ox-btn ox-btn-o" onClick={() => setAnswer(true)}>O</button>
          <button className="ox-btn ox-btn-x" onClick={() => setAnswer(false)}>X</button>
        </div>
      ) : (
        <div className={`ox-result ${isCorrect ? 'correct' : 'wrong'}`}>
          <div className="result-mark">{isCorrect ? '정답!' : '오답'}</div>
          <div className="result-explain">{q.explanation}</div>
        </div>
      )}
      
      <div className="block-nav">
        <button onClick={() => { setIdx(i => Math.max(0, i-1)); setAnswer(null); }} disabled={idx === 0}>←</button>
        <span>{idx + 1} / {questions.length}</span>
        <button onClick={() => { setIdx(i => Math.min(questions.length - 1, i+1)); setAnswer(null); }} disabled={idx === questions.length - 1}>→</button>
      </div>
    </div>
  );
}

// src/components/ExamQuizBlock.tsx — 4지선다 (similar pattern)
```

## 시안 자산 (참고)

콘텐츠/QA 채팅에서 시도한 사이드바 정적 시안:
- ❌ 롤백됨 (인터랙션 없는 정적 표시는 사용자 의도와 안 맞음)
- 그러나 **디자인 시각·레이아웃 참고**는 가능 — `docs/qa/theory-mockups/2-1-7_조인.html` git 히스토리(브랜치 `qa/2026-04-27-theory-mini-tests` 첫 커밋)에서 확인

## 디자인 토큰

양파단 디자인 시스템(`src/index.css`) 그대로:
- 카드: `bg-card` + `border-subtle` + `radius` 14px
- 아이콘: `point-100` 배경 + `point-600`
- O 버튼 호버: `correct-bg` + `correct-fg`
- X 버튼 호버: `wrong-bg` + `wrong-fg`
- 진행도 칩: `point-100` + `point-600`, `font-mono`

## 사이드바 레이아웃 CSS (참고)

PC 1024px+ 2단 그리드:
```css
.theory-page-grid {
  max-width: 1280px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 32px;
  align-items: start;
}
.theory-mini-test {
  position: sticky;
  top: calc(var(--header-h) + 16px);
  display: flex;
  flex-direction: column;
  gap: 14px;
}
@media (max-width: 1024px) {
  .theory-page-grid { grid-template-columns: 1fr; }
  .theory-mini-test { position: static; }
}
```

## 작업 범위 (기능 개발 채팅)

**브랜치**: `feat/theory-mini-test`

**파일 영향**:
| 파일 | 변경 |
|---|---|
| `src/screens/TheoryDetailScreen.tsx` | 2단 그리드 레이아웃 + 사이드바 |
| `src/components/MiniTestSidebar.tsx` | 신규 |
| `src/components/OxQuizBlock.tsx` | 신규 |
| `src/components/ExamQuizBlock.tsx` | 신규 |
| `src/data/miniTest/ox.ts` | 신규 (또는 .json) — exam-review.html 200문제 추출 |
| `src/data/miniTest/exam-mapping.json` | 신규 — 챕터별 기출 매핑 (위 스크립트로 생성) |
| `scripts/build-mini-test-mapping.mjs` | 신규 — 기출 매핑 추출 스크립트 |
| `src/index.css` | 사이드바·블럭·OX 버튼·진행도 CSS 추가 |

**사이드바 추가 시 본문 폭이 좁아지므로** TheoryDetailScreen 콘텐츠 영역의 `max-width`도 조정 필요 (현재 720px → 1fr).

---

**관련 PR 참고**: `qa/2026-04-27-theory-content` (PR #35) — 30개 챕터 시안 + exam-review.html(OX 200문제 데이터 소스).
