# Round 60 학생 입장 검수 — 2026-04-28

## 발단

사용자 요청: "실제 학생이 되어서 한 문제 한 문제 풀어봐. 60회차만"

체크 기준 6가지:
1. 표가 보기/선택지에 있어야 하는데 간소화/누락
2. ERD가 이상함
3. 문제에 정답 그대로 노출
4. 중복 정답
5. 표가 너무 단순/내용 빈약
6. SQL문 중략

## 검수 결과 — 50문항 전수

| 결과 | 건수 |
|---|---|
| ❌ 수정 필요 | **3건** (#26, #43, #47) |
| ⚠ 의문 (보고만) | 3건 (#4, #25, #39) |
| ✅ 정상 | 44건 |

---

## ❌ 수정 1 — #26 윈도우 절 동등 (정답 노출)

### 문제

옵션 4개가 모두 `절 (= 동등 형태 풀이)` 형태로 자가 설명. SQL 절 자체 비교가 아닌 옵션의 풀이 비교만으로 답이 도출됨.

기존 옵션:
```
① ROWS UNBOUNDED PRECEDING (= ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)
② ROWS BETWEEN UNBOUNDED PRECEDING AND 1 PRECEDING (= 현재 행 직전까지의 누적합)
③ RANGE UNBOUNDED PRECEDING (= RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)
④ RANGE BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING
```

학생이 SQL 절 의미를 알지 않아도 본 SQL의 `ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW`와 옵션 ①의 풀이가 정확히 일치함을 텍스트 매칭으로 확인 가능.

### 수정

- 옵션 텍스트에서 `(= 풀이)` 부분 모두 제거 — SQL 절만 남김
- 문제 title에 본 SQL의 윈도우 절을 명시: `"...의 ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW 절과 동등한..."`

---

## ❌ 수정 2 — #43 CHECK 제약 통과 행 수 (정답 노출)

### 문제

references 표의 caption이 정답을 미리 노출:

```json
{
  "caption": "최종 T 상태 (CHECK VAL > 0 통과 행만)",
  "headers": ["ID", "VAL"],
  "rows": [["1", "1"]]
}
```

표가 1행(`(1, 1)`)만 들어있어 학생이 SQL 분석 안 해도 답이 1임을 즉시 알 수 있음. SQL 본문에도 `-- CHECK 위반` / `-- 성공` 주석으로 풀이가 적힘.

### 수정

- references의 "최종 T 상태" 표 제거
- SQL 주석에서 `-- CHECK 위반` / `-- 성공` 풀이 부분 제거

학생은 SQL의 `CHECK (VAL > 0)` 제약과 INSERT 값(-1, 0, 1) 비교로 직접 판단해야 함.

---

## ❌ 수정 3 — #47 어느 부서에도 속하지 않는 직원 (중복 정답)

### 문제

기존 옵션:
- ② `WHERE DEPTNO IS NULL OR DEPTNO NOT IN (SELECT DEPTNO FROM DEPT)` (정답)
- ④ `LEFT JOIN DEPT D ON E.DEPTNO = D.DEPTNO WHERE D.DEPTNO IS NULL`

데이터: EMP B(DEPTNO=NULL), EMP C(DEPTNO=99). DEPT는 (10, 20)만.

옵션 ④ 분석:
- B(DEPTNO=NULL): NULL = 10 / 20 → UNKNOWN → 매칭 안 됨 → D 측 NULL → IS NULL 통과 ✓
- C(DEPTNO=99): 99 = 10 / 20 → false → 매칭 안 됨 → D 측 NULL → IS NULL 통과 ✓

→ ②와 ④ 모두 (a) NULL과 (b) 외래값 모두 잡음 → **중복 정답**

기존 explanation의 "④는 DEPTNO=99 외래값을 결과에서 누락"은 LEFT JOIN 동작과 모순. ON 조건이 false면 RIGHT 측 컬럼이 NULL로 채워지는 게 LEFT JOIN의 정의이므로 IS NULL이 정상적으로 잡음.

### 수정

옵션 ④를 LEFT JOIN + IS NULL → NOT IN 단독 형태로 변경:
```diff
- "`SELECT * FROM EMP E LEFT JOIN DEPT D ON E.DEPTNO = D.DEPTNO WHERE D.DEPTNO IS NULL;`"
+ "`SELECT * FROM EMP WHERE DEPTNO NOT IN (SELECT DEPTNO FROM DEPT);`"
```

NOT IN 단독은 (b) 외래값 99만 잡고, (a) NULL은 NULL 비교가 UNKNOWN이라 누락 → ②의 OR 조합과 변별됨.

explanation도 정확히 수정:
> ④ NOT IN 단독은 DEPTNO 값이 있는 행 중 DEPT에 없는 외래값(예: 99)은 잡지만, DEPTNO가 NULL인 행은 NULL 비교가 UNKNOWN이라 결과에서 누락된다.

---

## ⚠ 의문 — 보고만 (수정 없음)

### #4 ERD 관계 방향 의심

mermaid 코드:
```
서비스 ||--o{ 서비스이용 : "이용"
청구 ||--o{ 서비스이용 : "기준"
청구 ||--o{ 납부 : "수행"
```

"청구 ||--o{ 서비스이용"은 청구가 서비스이용의 부모. 보통은 서비스이용 → 청구 발행 → 납부 흐름이라 청구가 서비스이용의 자식이어야 자연스러움.

**다만 정답 풀이엔 영향 없음** — 옵션 ②(서비스이용=개념엔터티)는 ERD 방향과 무관하게 분류 자체로 판단 가능. SQLD 출제 의도 확인 필요.

### #25 단일 행 보장 제약

옵션: UNIQUE / NOT NULL / FOREIGN KEY / CHECK
정답: ① UNIQUE

PRIMARY KEY가 보기에 없어 UNIQUE가 차선. 사실 단일성 보장은 PK가 더 직접적. SQLD 원본 보기 확인 필요.

### #39 MERGE 결과 — V1/V2/V3 어느 행?

"TGT의 V1, V2, V3 값"이 INSERT된 새 행(2, 100, 100, 100)인지 기존 행(1, 10, 20, NULL)인지 명시 안 됨. 정답 ①(100/100/100)은 INSERT 행 기준.

문제 표현 보강 권장: "MERGE 후 TGT 테이블의 ID=2 행의 V1, V2, V3 값으로 옳은 것은?" 정도.

---

## 검증

- `node scripts/build-quiz-bank.mjs` — 851문항 재생성
- `node scripts/validate-rounds.mjs` — Errors: 0

## 변경 파일

- `scripts/authored/round-60.json` (3개 문항 수정)
- `src/data/rounds/round-60.ts` (빌드 산출물)
- `docs/qa/round-60-student-review-2026-04-28.md` (이 문서)
