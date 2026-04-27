# AI 생성 모의고사 (`ai-mock.json`) 스키마 가이드

## 위치
`scripts/authored/ai-mock.json` — 기출(`round-XX.json`)과 별개 파일.

## 목적
- 기출문제 변형 문제 1000제 점진적 추가
- 향후 모의고사 모드(`mock-exam`)에서 기출 풀 + AI 변형 풀 통합 출제 가능
- 사용자가 문제를 주면 과목·챕터 분류 후 매핑하여 누적

## 데이터 구조

```json
{
  "source": "ai-mock",
  "version": 1,
  "authored": [
    {
      "subject": "2과목",
      "chapter": "윈도우 함수",
      "title": "...",
      "options": ["...", "...", "...", "..."],
      "correctIndex": 0,
      "explanation": "...",
      "references": [...]
    }
  ]
}
```

## 챕터 분류 (SQLD 표준 출제 영역)

### 1과목: 데이터 모델링의 이해 (10문항 출제)
| 챕터 | 키워드 |
|---|---|
| **데이터 모델 개념** | 데이터 모델링 정의, 모델링 관점(데이터/프로세스), 3단계 스키마(외부·개념·내부) |
| **엔터티** | 엔터티 정의, 분류(기본·중심·행위), 발생 시점, ERD 표기 |
| **속성** | 속성 분류(기본·설계·파생), 도메인, 단일·복합 속성 |
| **관계** | 관계 정의, 관계차수(1:1, 1:M, M:N), 관계 표기, M:N 해소 |
| **식별자** | 주식별자·보조식별자, 본질·인조 식별자, 식별·비식별자 관계, 외래키, 최소성·유일성 |
| **정규화** | 1NF·2NF·3NF·BCNF, 함수 종속, 부분/이행 종속 |
| **관계와 조인** | 모델 → SQL 매핑, 조인 조건의 ERD 해석 |
| **트랜잭션과 Null** | ACID, Null 속성의 의미와 처리 |
| **본질·인조 식별자** | 본질 vs 인조 비교, 선택 기준 |

### 2과목: SQL 기본 및 활용 (40문항 출제)
| 챕터 | 키워드 |
|---|---|
| **관계형 DB와 SELECT** | RDB 개념, SELECT 기본 구조, 컬럼 별칭 |
| **함수** | 단일행 함수(문자·숫자·날짜·변환), NULL 처리(NVL·NVL2·NULLIF·COALESCE), CASE/DECODE |
| **WHERE** | 비교·논리·BETWEEN·IN·LIKE·NULL 연산자 |
| **ORDER BY** | 정렬, NULLS FIRST/LAST, 컬럼 순번 정렬 |
| **GROUP BY·HAVING** | 그룹화, 그룹 함수, HAVING 조건 |
| **조인** | INNER JOIN, OUTER JOIN, NATURAL JOIN, USING, CROSS JOIN, SELF JOIN |
| **표준 조인** | ANSI SQL 조인 구문, ON/USING |
| **집합 연산자** | UNION, UNION ALL, INTERSECT, MINUS/EXCEPT |
| **계층형 질의** | START WITH, CONNECT BY, PRIOR, LEVEL, CONNECT_BY_ROOT, ORDER SIBLINGS BY |
| **서브쿼리** | 단일·다중 행, 다중 컬럼, 인라인 뷰, 스칼라 서브쿼리, EXISTS/NOT EXISTS |
| **그룹 함수** | ROLLUP, CUBE, GROUPING SETS, GROUPING() |
| **윈도우 함수** | OVER, PARTITION BY, RANK·DENSE_RANK·ROW_NUMBER·NTILE, LAG·LEAD, FIRST_VALUE·LAST_VALUE, RATIO_TO_REPORT, CUME_DIST, ROWS/RANGE 프레임 |
| **TOP N 쿼리** | ROWNUM, FETCH FIRST, 인라인 뷰 + ROWNUM 패턴 |
| **DML** | INSERT, UPDATE, DELETE, MERGE |
| **DDL** | CREATE, ALTER, DROP, TRUNCATE, RENAME |
| **DCL·TCL** | GRANT, REVOKE, COMMIT, ROLLBACK, SAVEPOINT |
| **절차형 SQL** | PL/SQL, 프로시저, 함수, 트리거 |
| **정규 표현식** | REGEXP_LIKE, REGEXP_INSTR, REGEXP_SUBSTR, REGEXP_REPLACE, REGEXP_COUNT |

## 추가 시 원칙

- `subject`는 정확히 `"1과목"` 또는 `"2과목"`
- `chapter`는 위 chapter_list에서 선택 (오타 금지)
- `correctIndex`는 0~3
- `options`는 정확히 4개
- `explanation`에 raw markdown(`**bold**`) 사용 금지 — validate ERROR 발생
- `references`는 기출 데이터(`round-XX.json`)와 동일 구조 — type: `text|sql|table|ascii|html`

## 향후 통합 (별도 작업)

`scripts/build-quiz-bank.mjs`를 확장해 `ai-mock.json`을 별도 풀로 통합:

```js
// 예시 (미구현):
export const QUIZ_BANK_AI_MOCK = AI_MOCK_DATA;
export const QUIZ_BANK_ALL = [...QUIZ_BANK, ...QUIZ_BANK_AI_MOCK];
```

모의고사 모드에서:
- `mockMode='exam'`: 기출만 (현재 동작)
- `mockMode='mixed'`: 기출 + AI 변형 통합

이는 기능 개발 채팅에서 별도 PR로 진행 예정.

## 사용 흐름 (사용자 → AI)

1. 사용자가 문제(본문·보기·정답·해설) 제공
2. AI가 적절한 `subject` + `chapter` 분류
3. `references`(표·SQL 등) 필요시 구조화
4. `ai-mock.json`의 `authored` 배열에 추가
5. validate 검증 (정답 키워드, raw markdown 금지)
6. PR
