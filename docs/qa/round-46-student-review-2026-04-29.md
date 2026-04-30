# Round 46 학생 입장 검수 — 2026-04-29

## 사용자 제보

> 이 문제 예시 결과가 한줄로 그냥 나올게 아니라 결과 테이블을 따로 보여줘야할 것 같아. 그리고 선택지도 검토해줘

→ round-46 #50 (GROUP BY GROUPING SETS) 문제 지적

## 결과

| 결과 | 건수 |
|---|---|
| ❌ 정답/풀이 노출 | **5건** (#7, #18, #28, #39, #50) |
| ⚠ 약한 단서 (보고만) | 5건 |
| ✅ 정상 | 40건 |

## 사용자 핵심 요청 — #50 결과 테이블화 + 선택지 검토

### 선택지 변별 분석 (모두 OK)

| 옵션 | GROUP BY | 생성 단계 |
|---|---|---|
| ① ROLLUP(GRADE, JOB) | (GRADE,JOB), (GRADE), () | 3 levels — () 총계 추가 |
| ② GROUPING SETS(GRADE, (GRADE, JOB)) | (GRADE), (GRADE,JOB) | **2 levels — 정답** |
| ③ CUBE(GRADE, JOB) | (GRADE,JOB), (GRADE), (JOB), () | 4 levels |
| ④ GRADE, JOB | (GRADE,JOB) | 1 level |

선택지 변별성 명확.

### 수정 — text → 결과 테이블

```diff
- text: "GRADE 단위 집계와 (GRADE, JOB) 단위 집계가 결합되어 나타난다."
+ table caption "기대 결과":
+   | GRADE | JOB | COUNT(*) |
+   | A | MANAGER | 1 |
+   | A | CLERK | 1 |
+   | B | MANAGER | 1 |
+   | B | CLERK | 1 |
+   | A | (NULL) | 2 |    ← (GRADE) 단위 소계
+   | B | (NULL) | 2 |
```

학생이 결과 표를 보고 다음 단서로 답 도출:
- `(NULL, NULL)` 전체 총계 행 **없음** → ROLLUP/CUBE 아님
- (JOB) 단독 소계 없음 → CUBE 아님
- (GRADE) 단위 소계 있음 → 단순 GROUP BY 아님
- → GROUPING SETS만 일치

explanation도 각 옵션별 단계 비교로 보강.

## 다른 수정 (4건)

| # | 위치 | 처리 |
|---|---|---|
| 7 | ERD caption "(마더보드 → 컴퓨터: 0..1 선택, 컴퓨터 → 마더보드: 1 필수)" | "컴퓨터-마더보드 ERD" |
| 18 | 표 caption "(어떤 데이터가 있어도 WHERE 1=2 로 모두 공집합)" | "T 테이블" |
| 28 | ERD caption "(지점 측 0..1 선택, 고객 측 0..N 선택)" | "지점-고객 ERD" |
| 39 | 표 caption "(COL2 에 NULL 포함)" | "T2 테이블" |

ERD caption에 카디널리티 풀이를 직접 적던 패턴이 반복적으로 발견됨 — 이전 round-45 #4와 동일.

## ⚠ 약한 단서 (보고만)

| # | 단서 |
|---|---|
| 2 | caption "(1:1 필수)" — mermaid 표기 \`\|\|--\|\|\` 와 중복 |
| 3 | caption "(A 의 PK 가 D 까지 순차 전파)" — 옵션 ①을 옳다고 알려줌 |
| 21 | 옵션에 RANK/DENSE_RANK/ROW_NUMBER 결과 직접 노출 (출제 의도) |
| 23 | caption "(GRP=A 그룹의 AMT 가 모두 동일)" — 표 데이터에서 보임 |
| 36 | title "(NULL은 정렬 시 가장 큰 값으로 간주)" — 출제 컨텍스트 |

모두 mermaid/표 자체에 정보 있어 caption은 부가설명. 강하지 않으나 일관성 위해 정리 가능.

## 검증

- node scripts/build-quiz-bank.mjs — 851문항 재생성
- node scripts/validate-rounds.mjs — Errors: 0
