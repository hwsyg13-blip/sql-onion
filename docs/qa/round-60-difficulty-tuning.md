# Round 60 난이도 고도화 — 전후 비교 리포트

- **작업 일자**: 2026-04-27
- **브랜치**: `content/round-60-difficulty-tuning`
- **대상 파일**: `scripts/authored/round-60.json`
- **검증**: `node scripts/validate-rounds.mjs --round 60` → Errors 0, Warnings 17(전부 본 PR 스코프 외 문항의 빈 explanation 경고)

## 작업 원칙

1. **정답 보존 절대 원칙** — `correctIndex`, 정답 키워드, 보기 정답 텍스트 변경 0건.
2. **시험 정체성 보존** — 함정 보기를 끼워넣어 정답을 흐리는 변경 금지(예: `NVL(SUM(SAL),0)` 함정 같은 케이스 기각).
3. **객관적 개선 우선** — 깨진 표 구조 정비, 데이터 표 추가, 보기 결합형 강화처럼 학습자에게 명확한 가치가 있는 변경만.
4. **MD 자동 변환 금지** — `parse-restored-md.mjs` 재실행 시 도식·표 객체 구조가 깨지므로, 본 PR은 JSON을 진실의 원천으로 두고 직접 수정. `60회_복원.md` 동기화는 PR 머지 후 별개 작업.

## 진단 요약

50문제 전수 진단 후 12문항을 1차 후보로 선별, 사용자 톤 합의 후 6문항으로 좁힘. 빠진 6문항은 다음과 같이 의도적으로 제외:

| # | 제외 사유 |
|---|---|
| 5  | 기존 보기가 더 정돈됨, 추가 함정이 본문 길어지게 함 |
| 11 | 정답 ④(가나다라 모두) 구조상 보기 풍부화하면 정답 흐림 |
| 14 | 데이터 행 추가가 시험 본질에 영향 없음 |
| 22 | NVL 함정 추가가 정답(COUNT(\*))의 키워드성을 흐림 |
| 27 | 정의형 단답 — ACID 4속성 함정이 이미 충분 |
| 38 | 정답=4건 구조라 데이터 변경 시 정답 깨짐 |

## 변경 내역 (6문항)

### #12 — NOT IN + NULL

| 항목 | BEFORE | AFTER |
|---|---|---|
| references | SQL만 (데이터 표 없음) | EMP 데이터 표 추가 + SQL |
| explanation | 1줄 (NOT IN+NULL → 공집합) | 5줄 보강 — KING·JONES NULL 위치 명시, NOT NULL이라면 결과가 달라질 가능성 비교 |
| correctIndex | 2 | **2 (그대로)** |

EMP 표(EMPNO/ENAME/MGR, 5행) 추가로 학습자가 NULL 위치를 직접 짚어보며 시뮬레이션 가능.

### #15 — 튜플 IN

| 항목 | BEFORE | AFTER |
|---|---|---|
| references | SQL만 | T 데이터 표 추가 + SQL |
| explanation | 동등성 + 51회 Q32 패턴 인용 | 데이터 위에서 OR/AND/NOT 보기별 통과 행 수 시뮬레이션 |
| correctIndex | 1 | **1 (그대로)** |

T 표(사번/회원번호, 5행) 추가. AND/OR 차이가 행 단위로 체감.

### #16 — NTILE

| 항목 | BEFORE | AFTER |
|---|---|---|
| references[0].headers | `["EMPNO","1","2","3","4","5","6","7","8"]` (가로형 — 헤더에 데이터 섞임) | `["EMPNO"]` |
| references[0].rows | `[]` (비어있음 — **구조 깨짐**) | 8행 세로 데이터 |
| correctIndex | 0 | **0 (그대로)** |

**객관적 정비**: 표가 빈 채로 렌더되던 버그성 구조를 정상 표로 복원.

### #17 — FULL OUTER JOIN

| 항목 | BEFORE | AFTER |
|---|---|---|
| references | 한 표(`headers: ["T1","T2"]`, rows에 4컬럼) — **헤더-데이터 컬럼 수 불일치** | 두 표로 분리 (caption: T1 / T2, 각 ID·VAL 2컬럼) |
| explanation | 빈 문자열 | 4줄 보강 — 4개 보기별 정·오 사유 |
| correctIndex | 1 | **1 (그대로)** |

**객관적 정비**: 깨진 표 구조 복원. 매칭/비매칭 행이 시각적으로 구분.

### #33 — NOT EXISTS

| 항목 | BEFORE | AFTER |
|---|---|---|
| references | 한 표(주문/판매가 한 표 안 사이드-바이-사이드) — 빈 셀 발생 | 두 표로 분리 (caption: 주문 / 판매) |
| explanation | 1줄 | 2줄 — NOT EXISTS 동작 + 1·2 통과·3 제외 흐름 |
| correctIndex | 1 | **1 (그대로)** |

**객관적 정비**: NOT EXISTS의 "왼쪽엔 있고 오른쪽엔 없다" 구조가 시각적으로 명확.

### #47 — 어떤 부서에도 속하지 않음

| 항목 | BEFORE | AFTER |
|---|---|---|
| references | 한 표(EMP·DEPT 5컬럼, headers는 2개) — **구조 깨짐** | 두 표로 분리 (caption: EMP / DEPT) |
| options[2] | `EXISTS (SELECT 1 FROM DEPT...)` | `LEFT JOIN ... WHERE D.DEPTNO IS NOT NULL` |
| options[3] | `INNER JOIN ... USING(DEPTNO)` | `LEFT JOIN ... WHERE D.DEPTNO IS NULL` |
| explanation | 1줄 | 4줄 — 두 케이스 분리 + 각 보기 정·오 사유 (③ 정답 반대 / ④ 외래값 누락) |
| correctIndex | 1 | **1 (그대로)** |

**보기 다양화 근거**: ③④ 원본은 정답과 너무 멀어 함정 역할이 약했음. LEFT JOIN+IS NULL 패턴은 시험 빈출 함정이라 결합형으로 학습 가치 ↑. 정답 키워드(NULL OR NOT IN)는 ②에 그대로.

## 정답 보존 체크

| # | 정답 키워드 | correctIndex |
|---|---|---|
| 12 | 공집합 | 2 (③) ✅ |
| 15 | (사번=10005) AND (회원번호=2003) | 1 (②) ✅ |
| 16 | 1 1 1 2 2 2 3 3 | 0 (①) ✅ |
| 17 | NVL + FULL OUTER JOIN | 1 (②) ✅ |
| 33 | 아이템 1, 2 | 1 (②) ✅ |
| 47 | DEPTNO IS NULL OR NOT IN | 1 (②) ✅ |

**6/6 보존**. 정답 번호·키워드 모두 원본 유지.

## 후속 작업 (이번 PR 외)

- [ ] `60회_복원.md` 동기화 — JSON 변경분을 MD에도 반영(아카이브성). PR 머지 후 별도 작업.
- [ ] 빈 explanation 16건(#1·#5·#6·#11·#13·#18·#24·#26·#28·#30·#34·#35·#36·#39·#46·#49) — 별도 PR로 일괄 보강 검토.
- [ ] 다른 회차(45~59)의 표 구조 깨짐 일괄 스캔 — round-60에서 4건 발견했으므로 다른 회차도 가능성 있음.
