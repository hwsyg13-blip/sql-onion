# 정답 노출 전수 검수 — 2026-04-28

## 발단

사용자 제보 (round-52 #22):
> 52회 22번 정답이 보기에 노출됨. 해당 부분만 () 처리하던지 해야할듯

문제: 옵션 ③ `'__L%'`가 references SQL의 `WHERE NAME LIKE '__L%';`에 그대로 박혀있어 옵션을 보지 않아도 SQL 본문만 봐도 답이 나옴.

## 검수 방법

`scripts/check-answer-leak.mjs` (이번 PR에 추가) 실행:
- 각 문제의 `options[correctIndex]`(정답 텍스트)을 정규화 (백틱·따옴표 제거)
- 각 `references` 항목의 `sql.code`/`text.content`/`ascii.text`/`html.html`을 정규화
- 정답 텍스트가 references 안에 substring으로 포함되는지 검사

총 851문항(round-45~60 + ai-mock) 검수. 17건 의심 후보 추출 후 직접 분류.

## 분류 결과

### ❌ 진짜 노출 (이 PR에서 수정 — 3건)

| 회차 | # | 문제 | 노출 | 수정 |
|---|---|---|---|---|
| **52** | **22** | LIKE 패턴 (3번째 글자가 'L') | SQL: `LIKE '__L%'` | `LIKE ( )` + caption "( ) 안에 들어갈 LIKE 패턴 고르기" |
| **59** | **16** | Oracle (+) → ANSI 변환 | SQL 주석 ANSI 표준에 `LEFT OUTER JOIN` 명시 | `( ? )` + caption "Oracle 표기를 어떤 ANSI 조인으로 바꿔야 할까?" |
| **50** | **14** | SUBSTR 결과 | 주석 풀이 단계 `LENGTH=7, 시작 위치=4` 노출 | 주석 축약 (`STR = 'abcdefg'`만 남김) |

### ✅ 의도된 본문 SQL (false positive — 14건, 수정 X)

#### 4개 옵션 SQL을 모두 보여주는 평가 비교 문제 (5건)

해설 그룹화 패턴(`①·③·④`)이 있는 비교 문제는 본문에 옵션 4개를 모두 보여주는 게 의도된 설계.

| round | # | 비고 |
|---|---|---|
| 45 | 12 | CEIL/FLOOR/TRUNC/ROUND 4개 비교 |
| 46 | 12 | NULL 함수 4개 (IFNULL/NVL/COALESCE/NULLIF) |
| 49 | 18 | EXISTS/IN/JOIN/NOT EXISTS 4개 비교 |
| 57 | 12 | SUBSTR 4가지 변형 |
| 60 | 22 | SUM/AVG/MIN/COUNT(*) 4개 동시 평가 |

#### SQL 평가 (결과 계산) 문제 (5건)

본문 SQL을 보고 학습자가 결과를 계산해야. 결과 문자열이 데이터 인자/속성 등에서 substring으로 매칭됨.

| round | # | 본문 | 정답 |
|---|---|---|---|
| 47 | 46 | `SUBSTR('ABCDE', 2)` | "BCDE" |
| 53 | 23 | `LTRIM('xxxxxxabcd', 'x')` | "abcd" |
| 54 | 28 | `IN ('A', 'B', NULL)` | "A, B" |
| 56 | 25 | `REGEXP_SUBSTR('aaaaabbbb', 'a{2,4}')` | "aaaa" |
| ai-mock | (NULLIF) | `NULLIF(COALESCE(NULL,'A','B'),'A')` | "NULL" |

#### 옵션이 SQL의 부속 단어와 매칭 (2건)

학습자가 SQL 의미를 알아야 답 도출 가능. 단어 매칭은 substring 검사의 한계.

| round | # | 사례 |
|---|---|---|
| 46 | 20 | 옵션 "TUTOR"가 LEFT OUTER JOIN의 좌측 테이블 — SQL 본문에 `FROM TUTOR T` 박힘. 학습자가 LEFT OUTER 의미 알아야 답 도출 |
| 57 | 46 | 옵션 "EMPNO"가 SQL의 `COUNT(EMPNO)`에 박힘. 정답은 "GROUP BY에 없는 컬럼이 SELECT 일반 컬럼 위치에 못 들어감"이 핵심 |

#### 보기 텍스트가 본문 (1건)

| round | # | 사례 |
|---|---|---|
| 58 | 24 | `text.content`에 `㉠~㉣` 옵션을 본문 보기로 나열. 의도된 |

#### SQL 본문에 옵션 4개를 모두 첫 인자로 평가 (1건)

| round | # | 사례 |
|---|---|---|
| 58 | 13 | REGEXP_LIKE를 옵션 4개 모두에 적용한 SQL을 본문에 표시 — "각 옵션을 평가하는 SQL"이라 의도적 |

## 빌드/검증

- `node scripts/build-quiz-bank.mjs` — 851문항 재생성
- `node scripts/validate-rounds.mjs` — Errors: 0
- 재실행한 `check-answer-leak.mjs`: 수정 3건 모두 의심 목록에서 사라짐 (round-50 #14는 STR='abcdefg'에 'defg' substring으로 잔여하지만 평가용 데이터)

## 향후 가이드

- 새 문제 작성 시 정답 옵션 텍스트가 references SQL 안에 그대로 들어가지 않도록 주의
- SQL이 정답을 직접 노출하면 빈칸 처리: `( )` / `( ? )` + caption으로 의도 명시
- 4개 옵션 비교 문제는 본문 SQL에 옵션 4개를 모두 동등하게 보여주는 게 정상 (특정 정답만 노출 X)
- `scripts/check-answer-leak.mjs`를 신규 회차 추가 시 회귀 검수에 활용
