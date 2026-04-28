# Round 51 학생 입장 검수 — 2026-04-28

50문항 학생 시점 풀이 검토.

## 결과

| 결과 | 건수 |
|---|---|
| ❌ 정답/풀이 노출 | **4건** (#2, #12, #31, #34) |
| 🔧 의문 → 수정 | **3건** (#23, #25, #29) |
| ⚠ 보고만 | 1건 (#1) |
| ✅ 정상 | 42건 |

## 수정 내용

### 정답/풀이 노출 (4건)

| # | 노출 위치 | 처리 |
|---|---|---|
| 2 | ERD caption "(고객 측 1 필수, 주문 측 0..N — 주문은 고객이 반드시 필요)" | "고객-주문 ERD" 단순화 |
| 12 | 표 caption "(2023-11-02 가 두 행 존재)" 풀이 단서 | "(일자별 매출)"만 |
| 31 | SQL 주석 `-- CHECK 위반 실패` / `-- 통과` + 결과 표 caption "T1 최종 상태" + 1행 | 주석 제거, 결과 표 제거 |
| 34 | SQL 주석 `-- T = (1, 2, 3)` / `-- T = (1, 2, 3) 로 복원` 단계별 풀이 | 주석 제거 |

### 의문 → 수정 (3건)

**#23** 표 누락 — WHERE 조건 SQL인데 데이터가 없어 풀이 불가

```diff
+ 표 추가: T 테이블 (CPG/5, CPG/20, ABC/3, XYZ/8)
+ explanation: 모든 행이 COL1='CPG'이거나 COL2≤10이라 두 조건 동시 만족 X
```

**#25** SUBSTR 인자 모순 — `SUBSTR('...의 마...', 3, 3)` 은 점·점·의 인데 정답이 '의 마'

```diff
- "code": "SELECT SUBSTR('...의 마...', 3, 3), ROUND(109, 1) FROM DUAL;"
+ "code": "SELECT SUBSTR('...의 마...', 4, 3), ROUND(109, 1) FROM DUAL;"
```

문자열의 4번째 문자부터 3글자가 '의 마'. SUBSTR 인자 보정.

**#29** 옵션 abstract + refs 누락 — RANK/DENSE_RANK 결과 다른 것 묻는데 데이터/SQL 없음

```diff
  options:
-   "RANK() 를 이용한 순위 쿼리"
-   "DENSE_RANK() 를 이용한 순위 쿼리"
-   ...
+   "RANK() OVER (ORDER BY SAL DESC)"
+   "DENSE_RANK() OVER (ORDER BY SAL DESC)"
+   "ROW_NUMBER() OVER (ORDER BY SAL DESC)"
+   "NTILE(4) OVER (ORDER BY SAL DESC)"

+ EMP 표 추가: SAL (5000, 4000, 4000, 3000) — 동률 케이스로 DENSE_RANK 변별
+ explanation: 각 함수의 결과 시퀀스를 명시
```

## ⚠ 보고만 (수정 X)

**#1** 비식별자 관계 옵션 ① "부모 테이블 생성 안 된 상태에서도 자식 생성 가능" 표현 흐릿. 다만 정답 ③ "조인 최소화" 가 명확히 잘못이므로 단일 정답 유지에 영향 없음.

## 검증

- node scripts/build-quiz-bank.mjs — 851문항 재생성
- node scripts/validate-rounds.mjs — Errors: 0
