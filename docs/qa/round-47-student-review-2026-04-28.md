# Round 47 학생 입장 검수 — 2026-04-28

50문항 학생 시점 풀이 검토.

## 결과

| 결과 | 건수 |
|---|---|
| ❌ 정답/풀이 노출 | **5건** (#2, #25, #31, #36, #43) |
| ✅ 정상 | 45건 |

이전 PR #74에서 round-47 #2 raw HTML 제거.
PR #105 검수에서 round-47 #46(SUBSTR), #13(트랜잭션) 의도된 본문 SQL 분류.

## 수정 내용

### #2 표 caption 풀이 노출

```diff
- "caption": "서비스이용 엔터티 (이용일자가 PK 에 포함되어 재이용 시 별도 행)"
+ "caption": "서비스이용 엔터티"
```

기존 caption이 정답 ③ "재사용할 수 없도록 제약되어 있다"가 잘못임을 직접 알려줌.

### #25 SQL 주석 정답 단서

```diff
- "code": "SELECT ... FROM ... WHERE ... ORDER BY A;  -- A 를 내림차순으로 정렬해야 함"
+ "code": "SELECT ... FROM ... WHERE ... ORDER BY A;"
```

title에 "내림차순 정렬을 수행하는" 명시되어 있어 주석 없어도 풀이 가능. SQL의 `ORDER BY A`(DESC 없음)을 보고 ④ "DESC 추가" 도출.

### #31 SQL 주석 정답 풀이

```diff
- "code": "SELECT MAX(COL1) KEEP (DENSE_RANK FIRST ORDER BY COL2 DESC)
-          FROM T;   -- COL2 기준 DESC 정렬 시 첫 값의 COL1 반환"
+ "code": "SELECT MAX(COL1) KEEP (DENSE_RANK FIRST ORDER BY COL2 DESC)
+          FROM T;"
```

### #36 옵션 + caption 분류 노출

기존: 옵션 텍스트가 "정상 쿼리" / "다중 행 반환으로 오류" 같은 분류 결과로 직접 노출. 또 SQL caption도 "가. 정상 쿼리 (...)" / "나. 다중 행 반환으로 오류" 형태로 정답 분류 직접.

수정:
```diff
  options:
-   "정상 쿼리"
-   "다중 행 반환으로 오류"
-   "컬럼 부재로 오류"
-   "정상 쿼리"
+   "가, 나"
+   "나, 다"           ← 정답
+   "다, 라"
+   "가, 나, 다, 라"

  SQL captions:
-   "가. 정상 쿼리 (단일 행 보장 스칼라 서브쿼리)"
-   "나. 다중 행 반환으로 오류"
-   "다. 컬럼 부재로 오류 (평가항목에 상품ID 컬럼이 없는 가정)"
-   "라. 정상 쿼리 (EXISTS 상관 서브쿼리)"
+   "가"
+   "나"
+   "다 (가정: 평가항목 에 상품ID 컬럼이 없음)"
+   "라"
```

학생이 SQL 가·나·다·라를 직접 분석해 오류 조합을 골라야 정답 도출.

### #43 결과 표 정답 노출

```diff
  references:
    table: T 테이블 (ID 별 행 수 요약)
    sql: SELECT COUNT(*) FROM T GROUP BY ID HAVING COUNT(*) >= 2;
-   table:
-     caption: "결과 테이블"
-     headers: ["COUNT(*)"]
-     rows: [["300"]]
```

결과 표가 정답 ③ "COUNT(*) = 300" 직접 노출. 학생은 T 테이블의 ID/행수 요약을 보고 그룹별 COUNT 분석 → A=300이 HAVING ≥ 2 통과 → 결과 행이 1건 + COUNT 값 300 도출.

## 검증

- node scripts/build-quiz-bank.mjs — 851문항 재생성
- node scripts/validate-rounds.mjs — Errors: 0
