# Round 45 학생 입장 검수 — 2026-04-29

50문항 학생 시점 풀이 검토.

## 결과

| 결과 | 건수 |
|---|---|
| ❌ 정답/풀이 노출 | **3건** (#4, #22, #47) |
| 🔧 옵션 모호 | **1건** (#35) |
| ✅ 정상 | 46건 |

## 수정 내용

### #4 ERD caption 풀이 노출

```diff
- "caption": "고객-주문 ERD (고객 측 필수 1, 주문 측 선택 0..N)"
+ "caption": "고객-주문 ERD"
```

기존 caption이 정답 ④ "주문은 고객이 없을 수도 있다"가 잘못임을 직접 알려줌.

### #22 옵션 결과 직접 표시 + SQL 주석 노출

옵션 4개 모두 "→ 'SE'" / "→ NULL" 결과가 직접 부착되어 학생이 SQL 분석 안 해도 결과 비교만으로 답 도출 가능. SQL 주석에도 동일 결과 노출.

```diff
  options:
-   "`SUBSTR('DATABASE', 7)` → 'SE'"
-   "`SUBSTR('DATABASE', -2)` → 'SE'"
-   "`SUBSTR('DATABASE', 8, -2)` → NULL/빈 문자열"
-   "`SUBSTR('DATABASE', INSTR('DATABASE','S'), 2)` → 'SE'"
+   "`SUBSTR('DATABASE', 7)`"
+   "`SUBSTR('DATABASE', -2)`"
+   "`SUBSTR('DATABASE', 8, -2)`"
+   "`SUBSTR('DATABASE', INSTR('DATABASE','S'), 2)`"

  SQL 주석:
-   "-- ① ... -- 'SE'"
-   "-- ② ... -- 'SE'"
-   "-- ③ ... -- NULL/빈 문자열"
-   "-- ④ ... -- 'SE'"
+   (결과 주석 제거, 위치 안내 주석은 유지)
```

### #35 옵션 깨짐 + 정답 직접 노출

기존 옵션 ① "①과 ④ (두 결과 모두 {A, B})" 텍스트가 깨짐. 옵션 ② "UNION ALL 사용 SQL"은 정답을 직접 명시. SQL 분석 없이 단순 지식만으로 답 도출.

```diff
  options:
-   "①과 ④ (두 결과 모두 {A, B})"
-   "UNION ALL 사용 SQL"   ← 정답 직접 명시
-   "UNION 사용 SQL"
-   "OR 조건 SQL"
+   "①"
+   "②"   ← 정답
+   "③"
+   "④"
```

학생이 references SQL ①~④를 직접 분석해 결과 다른 것 도출.

### #47 결과 표 caption 풀이 + 비표준 SQL

```diff
- "caption": "그룹별 건수 결과 (8 = 3+3+2)"   ← 정답 풀이 직접 노출
+ "caption": "그룹별 건수 결과"

- "code": "SELECT NTILE(3) OVER (ORDER BY VAL) AS GRP,
-          COUNT(*) AS CNT FROM T
-          GROUP BY NTILE(3) OVER (ORDER BY VAL);"   ← 윈도우 함수를 GROUP BY에 직접 (비표준)
+ "code": "SELECT GRP, COUNT(*) AS CNT
+          FROM ( SELECT NTILE(3) OVER (ORDER BY VAL) AS GRP FROM T )
+          GROUP BY GRP ORDER BY GRP;"   ← 인라인 뷰로 표준화
```

## 검증

- node scripts/build-quiz-bank.mjs — 851문항 재생성
- node scripts/validate-rounds.mjs — Errors: 0
