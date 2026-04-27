# 3주 학습 계획 재구성 명세 (v2 — 분배 조정)

> **목적**: `양파단/src/screens/PlanScreen.tsx`의 `PLAN_DATA`와 30개 이론 챕터를 정확히 연동.
> v1 (이전 명세) 대비 변경: Day 14·15에 4개 챕터씩 묶었던 부담 해소 → 모든 Day가 챕터 1~2개로 균등화.

## 현황 진단

| 항목 | 현재 | 문제 |
|---|---|---|
| 챕터 ID 형식 | `theoryId: "c11"` (2자리) | 실제 챕터 ID는 `c111`~`c234` (3자리) — 매칭 안 됨 |
| 1과목 일정 | Day 1~6 + 미니테스트 | 1-2 5개 챕터를 Day 6 한 날에 압축 |
| 2과목 일정 | Day 8~14 (7일) | 20개 챕터(2-1+2-2+2-3)를 7일에 → 일부 챕터 통째 누락 |
| 챕터 클릭 → 이론 페이지 이동 | `onNavigate("theory-detail", d.theoryId)` | theoryId 미스매치로 이동 실패 |

## 챕터 ID 매핑

`양파단/src/data/theory.ts`의 `THEORY` 객체 기준:

| 챕터 번호 | 실제 ID | 제목 |
|---|---|---|
| 1-1-1 | `c111` | 데이터 모델의 이해 |
| 1-1-2 | `c112` | 엔터티 |
| 1-1-3 | `c113` | 속성 |
| 1-1-4 | `c114` | 관계 |
| 1-1-5 | `c115` | 식별자 |
| 1-2-1 | `c121` | 정규화 |
| 1-2-2 | `c122` | 관계와 조인의 이해 |
| 1-2-3 | `c123` | 모델이 표현하는 트랜잭션의 이해 |
| 1-2-4 | `c124` | NULL 속성의 이해 |
| 1-2-5 | `c125` | 본질식별자 vs 인조식별자 |
| 2-1-1 | `c211` | 관계형 데이터베이스 개요 |
| 2-1-2 | `c212` | SELECT문 |
| 2-1-3 | `c213` | 함수 |
| 2-1-4 | `c214` | WHERE절 |
| 2-1-5 | `c215` | GROUP BY/HAVING절 |
| 2-1-6 | `c216` | ORDER BY절 |
| 2-1-7 | `c217` | 조인 |
| 2-1-8 | `c218` | 표준 조인 |
| 2-2-1 | `c221` | 서브쿼리 |
| 2-2-2 | `c222` | 집합 연산자 |
| 2-2-3 | `c223` | 그룹 함수 |
| 2-2-4 | `c224` | 윈도우 함수 |
| 2-2-5 | `c225` | Top N 쿼리 |
| 2-2-6 | `c226` | 계층형 질의와 셀프 조인 |
| 2-2-7 | `c227` | PIVOT/UNPIVOT 절 |
| 2-2-8 | `c228` | 정규 표현식 |
| 2-3-1 | `c231` | DML |
| 2-3-2 | `c232` | TCL |
| 2-3-3 | `c233` | DDL |
| 2-3-4 | `c234` | DCL |

## 새 PLAN_DATA 구조 (v2 — 균등 분배)

### 핵심 변경 (v1 → v2)
1. **`theoryId` (단일) → `chapters` (배열)**
2. 30개 챕터 모두 21일 안에 분배
3. **모든 Day가 챕터 1~2개로 균등** (이전 v1의 Day 14·15 4개 묶음 해소)
4. Week 3에 시험 대비 통합 페이지(`exam-review.html`) 활용 단계

### 분배 (v2)
- Week 1 (1과목 10개) — 6일 + 미니 1일
- Week 2 (2-1 8개 + 2-2 6개 = 14개) — 7일 (일당 2개)
- Week 3 (2-2 마무리 2개 + 2-3 4개 + 기출 3 + 모의 2 + 체크) — 7일

### 새 PLAN_DATA (TypeScript)

```typescript
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
    concept:["CBT 실전","오답노트"], est:90, examId:"round-59"},
  {week:3, day:20, subj:"실전", title:"제58회 기출 + 모의고사 1회",
    concept:["기출 마무리","90분 모의 1차"], est:150, examId:"round-58", mock:true},
  {week:3, day:21, subj:"마무리", title:"모의 2회 + 시험 대비 통독 + 체크리스트",
    concept:["취약 단원 점검","함정·정리 한 번에","준비물·컨디션"], est:150, mock:true, examReview:true, final:true},
];
```

### 시각 흐름 (v2)

```
Week 1 (1과목)
  Day 1  c111                데이터 모델
  Day 2  c112 + c113          엔터티 + 속성
  Day 3  c114 + c115          관계 + 식별자
  Day 4  c121                 정규화
  Day 5  c122 + c123          관계조인 + 트랜잭션
  Day 6  c124 + c125          NULL + 본질·인조
  Day 7  미니 테스트          1과목 총평

Week 2 (2-1 + 2-2 일부)
  Day 8  c211 + c212          RDB + SELECT
  Day 9  c213 + c214          함수 + WHERE
  Day 10 c215 + c216          GROUP BY + ORDER BY
  Day 11 c217 + c218          조인 + 표준조인
  Day 12 c221 + c222          서브쿼리 + 집합
  Day 13 c223 + c224          그룹함수 + 윈도우
  Day 14 c225 + c226          TopN + 계층형

Week 3 (2-2 마무리 + 2-3 + 실전)
  Day 15 c227 + c228          PIVOT + 정규표현식
  Day 16 c231 + c232          DML + TCL
  Day 17 c233 + c234          DDL + DCL
  Day 18 60회 기출
  Day 19 59회 기출 + 오답
  Day 20 58회 기출 + 모의 1
  Day 21 모의 2 + 시험 대비 통독 + 체크
```

→ **모든 챕터 학습 Day가 1~2개로 균등** (v1 대비 Day 14·15 4개 묶음 해소).

## PlanScreen.tsx 수정 사항

### 1) `chapters` 배열 처리
```js
const openDay = (d) => {
  if (d.chapters?.length === 1) onNavigate("theory-detail", d.chapters[0]);
  else if (d.chapters?.length > 1) onNavigate("theory-day", d);
  else if (d.examId) onNavigate("cbt", d.examId);
  else if (d.mock) onNavigate("mock-exam");
  else if (d.test) onNavigate("endless");
  else if (d.examReview) onNavigate("exam-review");
  else if (d.final) onNavigate("final-checklist");
};
```

### 2) `isPlanDayDone` (`src/lib/progress.ts`) 수정
`chapters` 배열의 모든 챕터 완료 시 done.

### 3) Day 카드 UI에 여러 챕터 표시
캘린더 카드에 챕터 N개 칩 형태로.

### 4) 새 라우트
- `theory-day`: 한 Day에 여러 챕터 표시
- `exam-review`: 통합 시험 대비 페이지 (시안의 `exam-review.html` React 변환)
- `final-checklist`: 시험 전날 체크리스트

## 변경 영향 (기능 개발 채팅 인계)

| 파일 | 변경 |
|---|---|
| `src/screens/PlanScreen.tsx` | `PLAN_DATA` 교체 + `openDay`/UI 분기 추가 |
| `src/lib/progress.ts` | `isPlanDayDone`이 `chapters` 배열 처리 |
| `src/App.tsx` | 새 라우트 (`theory-day`, `exam-review`, `final-checklist`) |
| `src/screens/` | 신규 화면 (TheoryDayScreen, ExamReviewScreen, FinalChecklistScreen) |
| `src/data/theory.ts` | 매핑 그대로 유지 |

## 시간 산정 검토

- **Week 1·2 평균 60분** — 적정
- **Day 20 (기출 + 모의 1) 150분** — 빠듯하지만 모의 첫 체험은 길게 잡는 게 합리적
- **Day 21 (모의 2 + 통독 + 체크) 150분** — 시험 전날 종합 점검

각 Day의 분량이 사용자 컨디션에 따라 조정 가능. 학습자가 학습 진도를 자율 조정할 수 있게 PlanScreen에 "오늘 일정 미루기" 같은 기능 검토 권장.

---

> 이 명세는 콘텐츠/QA 채팅에서 작성. 실제 코드 수정은 **기능 개발 채팅**에서 `feat/plan-redesign` 브랜치로 진행 권장.
