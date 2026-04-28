# Round 49 학생 입장 검수 — 2026-04-28

50문항 학생 시점 풀이 검토.

## 결과

| 결과 | 건수 |
|---|---|
| ❌ 정답/풀이 노출 | **6건** (#4, #18, #19, #22, #31, #50) |
| ⚠ 보고만 | 1건 (#48) |
| ✅ 정상 | 43건 |

이전 PR #76에서 #37 옵션 ① 텍스트 오타 수정 완료.

## 수정 내용

### #4 ERD caption 풀이 노출

```diff
- "caption": "상품-주문 ERD (상품 측 1 필수, 주문 측 0..N — 주문이 없는 상품도 가능)"
+ "caption": "상품-주문 ERD"
```

기존 caption이 정답 ③ "하나의 상품은 항상 주문을 가진다"가 잘못임을 직접 알려주는 풀이 단서.

### #18 SQL caption "라" 정답 평가 노출

```diff
- "caption": "라. NOT EXISTS — 매니저 연봉이 3,000 초과가 아닌 경우 (의미 불일치)"
+ "caption": "라"
- "caption": "가. EXISTS 조건 사용"
+ "caption": "가"
- (다른 caption도 단순화)
```

특히 "라"의 "(의미 불일치)" 평가가 정답 ④ 직접 알려줌.

### #19 표 caption 약한 단서

```diff
- "caption": "T2 테이블 (B 컬럼에 NULL 포함)"
+ "caption": "T2 테이블"
```

표 데이터에서 NULL이 직접 보이므로 caption은 부가설명 불필요.

### #22 text 정답 단서 + 표 누락

기존: text "HAVING 조건을 만족하는 그룹이 없는 상태"가 정답 ① 도출 단서.
또한 SQL이 `FROM ...`로 표 정보 없어 풀이 데이터 누락.

```diff
- text: "HAVING 조건을 만족하는 그룹이 없는 상태"
+ T 테이블 추가: ID = (A, A, B, B, C) — A·B 2건, C 1건
- "code": "SELECT COUNT(*) FROM ... GROUP BY ID HAVING COUNT(*) > 3;"
+ "code": "SELECT COUNT(*) FROM T GROUP BY ID HAVING COUNT(*) > 3;"
```

학생이 표를 보고 그룹별 카운트 분석 → HAVING > 3 만족 X 도출.

### #31 SQL 주석 단계별 풀이 (중대 노출)

5단계 풀이 주석이 정답 ② "2"를 직접 보여줌:

```diff
  "code":
-   "UPDATE T SET VAL = VAL * 10;       -- T = (10, 20)
-    DELETE FROM T WHERE VAL = 20;       -- T = (10)
-    ROLLBACK TO SAVEPOINT X;            -- T = (1, 2) 로 복원
-    INSERT INTO T VALUES (3);           -- T = (1, 2, 3)
-    SELECT AVG(VAL) FROM T;             -- (1+2+3)/3 = 2"
+   "UPDATE T SET VAL = VAL * 10;
+    DELETE FROM T WHERE VAL = 20;
+    ROLLBACK TO SAVEPOINT X;
+    INSERT INTO T VALUES (3);
+    SELECT AVG(VAL) FROM T;"
```

### #50 결과 표 caption 풀이 + 비표준 SQL

```diff
  SQL:
-   "SELECT NTILE(3) OVER (ORDER BY VAL) AS NTILE,
-           COUNT(*) AS CNT FROM T
-    GROUP BY NTILE(3) OVER (ORDER BY VAL);"   ← 윈도우 함수를 GROUP BY에 직접 사용 (비표준)
+   "SELECT GRP, COUNT(*) AS CNT
+    FROM ( SELECT NTILE(3) OVER (ORDER BY VAL) AS GRP FROM T )
+    GROUP BY GRP ORDER BY GRP;"               ← 인라인 뷰로 표준화

  결과 표 caption:
-   "NTILE 그룹별 건수 결과 (7건 = 3 + 2 + 2)"   ← 정답 풀이 직접 노출
+   "NTILE 그룹별 건수 결과"
```

## ⚠ 보고만 (수정 X)

**#48** text "COL이 NULL인 행도 함께 포함하고 싶다." — 의도 명시이지만 정답 ④ "IS NULL"과 직접 연관. 다만 출제 형식상 의도 명시는 자연스러우므로 수정 X.

## 검증

- node scripts/build-quiz-bank.mjs — 851문항 재생성
- node scripts/validate-rounds.mjs — Errors: 0
