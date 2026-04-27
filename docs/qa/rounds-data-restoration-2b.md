# Phase 2B — Rounds 데이터 누락 6건 복원

- **작업 일자**: 2026-04-27
- **브랜치**: `qa/2026-04-27-rounds-data-restoration` (PR #8 위에 stacked, base=`qa/2026-04-27-r60-q23-q37-table-fix`)
- **대상**: 6개 회차 6문항 — references 데이터 누락분
- **검증**: `node scripts/validate-rounds.mjs` → Errors 0 (16회차 800문항)

## 배경

PR #6 / PR #7 / PR #8 작업 중 진단 결과로 확인된 데이터 누락 6건 처리. JSON·MD·PDF 모두 보기 SQL 본문/결과 표가 누락되어 있었음 (시험 본 사람의 회상 정리라 정답·핵심 키워드만 메모됨).

## 시도 경로

1. **옵션 D — 외부 자료(WebSearch + WebFetch)**: 6문항 모두 시도. R54 Q30만 정답 키워드 cross-check 성공(velog @m_ngyeong에서 `GROUPING SETS((COL1,COL2), COL2)` 일치 확인), 나머지 5건은 본문 자료 없음. 한국 SQLD 기출 복원 생태계의 구조적 한계(기억 기반 요약, 정식 PDF는 유료·로그인) 확인.

2. **옵션 B — AI 보기 생성** (선택): 정답 키워드 절대 보존 + SQLD 시험 정체성 유지하며 references 재구성. 시험 빈출 함정 패턴만 사용, SQLP 유형 회피.

## 처방 원칙

- **correctIndex 변경 0건**
- **options 텍스트 변경 0건** — 메타 라벨도 그대로 유지, references에 SQL 본문 추가하는 방식
- **title 변경 0건**
- **explanation 변경 0건** (R47 Q36 빈 explanation은 Phase 2C에서 일괄 보강)
- **references 객체 type 구조 보존** (table/sql/text), caption 활용

## 변경 내역 (6문항)

### R47 Q36 — 오류 SQL 분류 (다중 행 반환)
- **정답**: ② (correctIndex=1) "다중 행 반환으로 오류"
- references: 상품 표(P001 중복 트리거) + 평가항목 표 + 가/나/다/라 4 SQL
- 시뮬레이션: 상품 P001이 두 행 → ② 스칼라 서브쿼리에서 ORA-01427 오류
- **정답 보존 ✅**

### R49 Q18 — 매니저 연봉 3,000 이하 (NOT EXISTS 의미 차이)
- **정답**: ④ (correctIndex=3) "NOT EXISTS (... B.SAL > 3000)"
- references: EMP 표 6행 (KING이 MGR_NO=NULL — 정답 함정 트리거) + 가/나/다/라 4 SQL (EXISTS / IN / INNER JOIN / NOT EXISTS)
- 시뮬레이션: KING이 ④에서만 결과 포함 → ①②③과 결과 다름
- **정답 보존 ✅**

### R51 Q40 — NULL 없는 전제 시 결과 동일
- **정답**: ④ (correctIndex=3) "모두 같다"
- references: A 표(1,2,3,4) + B 표(2,3) + 전제 텍스트 + 가/나/다 3 SQL (NOT EXISTS / NOT IN / OUTER JOIN+IS NULL)
- 시뮬레이션: NULL 없는 데이터에서 세 SQL 모두 결과 {1,4} 동일
- **정답 보존 ✅**
- ⚠️ title("NULL이 포함된 상황")과 explanation("NULL 없는 전제")의 모순은 원본 기출 표기 보존을 위해 그대로 유지. references의 전제 텍스트로 명확화.

### R53 Q33 — 오류 원인 분류 (보수적 처방)
- **정답**: ④ (correctIndex=3) "ORDER BY 에서 집계 함수를 사용했으므로 오류"
- references: 가/나/다/라 4 SQL + 참고 노트 텍스트
- ⚠️ 일반 SQL 상식상 ORDER BY에 집계 함수 사용 가능. 라 SQL을 **GROUP BY 없는 컨텍스트로 한정**해서 오류 시나리오로 작성. references 끝 text 노트로 "GROUP BY 결과집합에서는 가능"임을 보강 (원본 기출 표기 보존).
- **정답 보존 ✅**

### R54 Q30 — GROUPING SETS (외부 cross-check 성공) ⭐
- **정답**: ① (correctIndex=0) `GROUPING SETS( (COL1, COL2), COL2 )`
- references: 원본 데이터 표 T(4행) + GROUPING SETS SQL 빈칸 + 출력 결과 표(6행 — 세부 4 + COL2 별 소계 2, COL1만 NULL)
- **외부 cross-check**: velog @m_ngyeong에서 정답 동일 확인 — 신뢰도 ↑
- **정답 보존 ✅**

### R57 Q45 — UNPIVOT (단순화 처방)
- **정답**: ① (correctIndex=0) "모든 값이 채워진 4행 형태의 표"
- references: [입력] 매출 가로형 표 + UNPIVOT SQL (정답 ① 결과 표 1개만, 보기 ②③④는 options 텍스트로 풀이)
- **정답 보존 ✅**
- 사용자 결정으로 처방 단순화 (Agent 초안의 11 references → 2 references)

## 정답 보존 검증

자동 검증 (`node -e ...`):
```
R47 Q36: correctIndex=1 refs=6 (table=2, sql=4) headers/cols=OK
R49 Q18: correctIndex=3 refs=5 (table=1, sql=4) headers/cols=OK
R51 Q40: correctIndex=3 refs=6 (table=2, sql=3) headers/cols=OK
R53 Q33: correctIndex=3 refs=5 (table=0, sql=4) headers/cols=OK
R54 Q30: correctIndex=0 refs=3 (table=2, sql=1) headers/cols=OK
R57 Q45: correctIndex=0 refs=2 (table=1, sql=1) headers/cols=OK
ALL OK
```

| # | 정답 키워드 | correctIndex | options |
|---|---|---|---|
| R47 Q36 | 다중 행 반환 오류 | 1 (②) ✅ | 그대로 |
| R49 Q18 | NOT EXISTS+SAL>3000 | 3 (④) ✅ | 그대로 |
| R51 Q40 | 모두 같다 | 3 (④) ✅ | 그대로 |
| R53 Q33 | ORDER BY 집계 오류 | 3 (④) ✅ | 그대로 |
| R54 Q30 | GROUPING SETS((COL1,COL2),COL2) | 0 (①) ✅ | 그대로 |
| R57 Q45 | 모든 값 채워진 4행 | 0 (①) ✅ | 그대로 |

## 후속 작업

- **Phase 2C** (다음 stacked PR): R47/R48 빈 해설 보강 + Phase 2B의 R47 Q36 빈 explanation 동시 처리
- **Phase 3**: 회차별 난이도 풍부화

## 검증 결과

```
=== Summary ===
Rounds: 16 · Questions: 800
Errors: 0 · Warnings: 307 (대부분 본 PR 스코프 외 빈 explanation)
WARNING 만 있음 — strict 가 아니면 통과 처리됨
```

본 PR로 새로 생긴 ERROR 0건. Warnings는 PR #7 시점 309건에서 307건으로 2건 감소(R47 Q36은 빈 explanation 유지하지만 explanation은 빈 채로 남아 있어 변동 없음 — 다른 회차 변경 영향).
