# Round 57 학생 입장 검수 — 2026-04-28

50문항 학생 시점 풀이 검토.

## 결과 요약

| 결과 | 건수 |
|---|---|
| ❌ 수정 | **9건** (#10, 20, 22, 27, 34, 37, 38, 41, 49, 50) |
| ⚠ 의문 (보고만) | 2건 (#23, #45) |
| ✅ 정상 | 39건 |

---

## ❌ 수정 내용

### #10 mermaid 오타 — 중복 정답 위험

```diff
- "상품 |o--o{ 주문 : \"주문\""
+ "상품 ||--o{ 주문 : \"주문\""
```

좌측 `|o`(0 or 1)면 한 주문이 상품 0개 가능 → 옵션 ② "주문엔 상품이 무조건 포함된다"도 false → ①·② 중복 정답. 일반 ERD 표기인 `||`(정확히 1)로 보정해 ②는 true가 되도록.

### #20 explanation 오류

```diff
- "원본 기출의 정답 표기를 보존한다. 누적 윈도우에서 특정 조건의 값 개수가 3으로 계산된다는 의미이다."
+ "윈도우 절 ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW는 첫 행부터 현재 행까지 누적 범위를 의미한다. COUNT(*)는 NULL 여부와 무관하게 행 개수를 세므로, ID 1~4까지 누적되어 1, 2, 3, 4가 된다."
```

기존은 정답 "1, 2, 3, 4"와 무관한 설명("값 개수가 3").

### #22 중복 정답

기존 옵션 ③ `PRIOR 상위 = 부서`와 ④ `부서 = PRIOR 상위`는 `=`의 교환법칙으로 같은 식 → 중복 정답.

옵션 ③을 정방향(부모 → 자식) 형태 `PRIOR 부서 = 상위`로 변경. 본 문제는 자식 → 부모 역방향(④ 정답)이라 ③과 변별됨.

```diff
  options:
-   "서브쿼리 사용, PRIOR 상위 = 부서",
-   "서브쿼리 사용, 부서 = PRIOR 상위",
-   "PRIOR 상위 = 부서",
-   "부서 = PRIOR 상위"
+   "서브쿼리 사용, PRIOR 부서 = 상위",
+   "서브쿼리 사용, PRIOR 상위 = 부서",
+   "PRIOR 부서 = 상위",
+   "PRIOR 상위 = 부서"
```

### #27 "원본 PDF 표기" 메모 노출

학습 화면에 출제 메모(`원본 PDF 표기: '...'`)가 그대로 노출. references text 제거.

### #34 풀이 단서 caption

```diff
- "caption": "TBL 테이블 (데이터가 있더라도 WHERE 1=2 로 모두 공집합)"
+ "caption": "TBL 테이블"
```

caption이 풀이 결론(공집합)을 직접 알려주던 부분 제거.

### #37 표 형식 오용

`headers: ["COL"], rows: [["70건 보유"]]` — 표 데이터가 아닌 메모. text 박스로 변경:
```diff
- type: table, rows: [["70건 보유"]]
+ type: text, content: "T 테이블에는 총 70건의 행이 저장되어 있다."
```

### #38 SQL 주석 정답 노출

```diff
- "code": "SELECT name\nFROM   NAME\nWHERE  ( ? );  -- 결과: Kim, Tim"
+ "code": "SELECT name\nFROM   NAME\nWHERE  ( ? );"
```

기대 결과 표는 별도 references로 이미 있으므로 SQL 주석의 `-- 결과: Kim, Tim` 노출 제거.

### #41 옵션 균형

```diff
- "2건 (튜터 기준 그대로 유지)",
+ "2건",
```

옵션 ①에만 풀이가 부착되어 학생이 정답을 텍스트 풍부도로 추측 가능.

### #48 "원본 PDF 표기" 메모 + SQL 주석 정리

text의 출제 메모와 SQL 주석의 풀이 도움말 제거. SQL을 (ㄱ) 빈칸 형태로 다듬음.

### #49 references SQL 정답 노출

기존 references SQL의 CASE 절이 정답 옵션 ①의 텍스트와 정확히 일치 — SQL만 봐도 정답 선택 가능.

```diff
  code: "SELECT CASE
-          WHEN GROUPING(DEPT) = 1 AND GROUPING(JOB) = 1 THEN '전체총계'
-          WHEN GROUPING(DEPT) = 1 THEN '부서별 소계'
+          ( ? )
           ELSE DEPT
         END AS DEPT_LBL, ..."
```

### #50 옵션 ②·③ 텍스트 동일

기존:
- ② "3건 반환"
- ③ "3건 반환"  ← 정답

옵션 텍스트가 동일해 학생이 텍스트만으로는 구별 불가 (optionReferences 표가 화면에 표시될 때만 풀이 가능). 사원명을 추가해 텍스트로도 구별:

```diff
- ① "2건 반환"
- ② "3건 반환"
- ③ "3건 반환"
- ④ "1건 반환"
+ ① "2건 반환 (김유신, 변사또)"
+ ② "3건 반환 (홍길동, 유학생, 박문수 — 부서별 최저 연봉)"
+ ③ "3건 반환 (강감찬, 김유신, 변사또 — 부서별 최고 연봉)"
+ ④ "1건 반환 (김유신)"
```

---

## ⚠ 의문 (보고만)

### #23 옵션 텍스트 단어 단편

옵션이 `"HAVING AVG ALL"` 같은 4단어 나열로 SQLD 표준 출제 형식과 다름. explanation은 `HAVING AVG(SAL) > ALL (SELECT ...)` 형태로 풀어 설명. 원본 출제 형식 확인 후 옵션 보강 필요.

### #45 UNPIVOT 옵션 abstract

옵션이 `"모든 값이 채워진 4행 형태의 표"` 같은 추상적 표현. 결과 표를 직접 보여주는 게 학습 친화적이지만 정답 노출 위험. 원본 출제 형식 확인 후 결정.

---

## 검증

- node scripts/build-quiz-bank.mjs — 851문항 재생성
- node scripts/validate-rounds.mjs — Errors: 0

## 변경 파일

- scripts/authored/round-57.json (10개 문항 수정)
- src/data/rounds/round-57.ts (빌드 산출물)
- docs/qa/round-57-student-review-2026-04-28.md (이 문서)
