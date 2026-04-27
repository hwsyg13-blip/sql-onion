# Rounds R49~R59 — 표 구조 정비 일괄 PR (Phase 2A)

- **작업 일자**: 2026-04-27
- **브랜치**: `qa/2026-04-27-rounds-table-fix`
- **대상**: 9개 회차 18문항
- **검증**: `node scripts/validate-rounds.mjs` → Errors 0 (800문항 전수)

## 배경

R60 난이도 고도화(PR #6) 작업 중 발견한 표 구조 깨짐 패턴이 다른 회차에도 광범위하게 존재하는 것을 Phase 1 진단(2026-04-27)에서 확인. R49~R59 전수 스캔으로 18문항 식별.

증상은 모두 같음: **두 테이블이 한 표에 사이드-바이-사이드로 합쳐지고, 행 수가 짧은 쪽은 빈 셀(`""`)로 패딩된 잘못된 표 표현**. 사이트(`QuestionReferences.tsx`의 `RefTable`)가 `headers.length === rows[i].length`를 가정하기 때문에, 합쳐진 표는 헤더-데이터 어긋남이 그대로 노출됨.

## R60에서 검증된 처방 (이번 PR에서 18문항에 동일 적용)

1. **한 표 → 두 표(또는 N표) 분리** — 각 표의 진짜 컬럼만 유지
2. **`caption` 라벨 추가** — RefTable이 caption을 지원함 (`QuestionReferences.tsx` 라인 77~125)
3. **첫 row의 실제 헤더 → headers로 승격** (헤더가 row에 잘못 들어가 있던 케이스)
4. **빈 셀(`""`) 모두 제거** — 분리하면서 자연스럽게 사라짐
5. **SQL 블록 등 다른 references 객체는 위치·내용 보존**

## 변경 내역 (18문항)

| 회차 | 문항 | 패턴 | BEFORE 행 수 | AFTER 표 분리 |
|------|------|------|-------------|---------------|
| R49 | Q17 | T1·T2 사이드-바이-사이드 | TEAM/STADIUM 각 2행 | TEAM(2) + STADIUM(2) |
| R49 | Q25 | 헤더에 표명, row[0]이 실제 헤더 (변형) | 고객 5행 / 월별매출 15행 | 고객(5) + 월별매출(15) |
| R49 | Q36 | 사이드-바이-사이드 + 빈 셀 패딩 | TAB1 3행 / TAB2 2행 | TAB1(3) + TAB2(2) |
| R49 | Q44 | 사이드-바이-사이드 + 빈 셀 패딩 | TBL1 2행 / TBL2 4행 | TBL1(2) + TBL2(4) |
| R50 | Q13 | 사이드-바이-사이드 + 빈 셀 패딩 | TAB1 5행 / TAB2 3행 | TAB1(5) + TAB2(3) |
| R52 | Q46 | 사이드-바이-사이드 | TGT/SRC 각 2행 | TGT(2) + SRC(2) |
| R53 | Q28 | 사이드-바이-사이드 | A/B 각 1행 | A(1) + B(1) |
| R54 | Q21 | 사이드-바이-사이드 (3+3컬럼 변형) | T1 3행 / T2 2행 | T1(3) + T2(2) |
| R54 | Q22 | 사이드-바이-사이드 | EMP/DEPT_EMP 각 3행 | EMP(3) + DEPT_EMP(3) |
| R54 | Q23 | 사이드-바이-사이드 + 빈 셀 패딩 | EMP 3행 / DEPT_EMP 2행 | EMP(3) + DEPT_EMP(2) |
| R54 | Q24 | 사이드-바이-사이드 | TAB1/TAB2 각 4행 | TAB1(4) + TAB2(4) |
| R54 | Q50 | 사이드-바이-사이드 (3+2컬럼 변형) | T1 3행 / T2 2행 | T1(3) + T2(2) |
| R56 | Q32 | 사이드-바이-사이드 | TAB1/TAB2 각 3행 | TAB1(3) + TAB2(3) |
| R56 | Q36 | 사이드-바이-사이드 + 빈 셀 패딩 | TAB1 3행 / TAB2 5행 | TAB1(3) + TAB2(5) |
| R57 | Q42 | 사이드-바이-사이드 | TGT/SRC 각 2행 | TGT(2) + SRC(2) |
| R58 | Q15 | 사이드-바이-사이드 + 빈 셀 패딩 | TAB1 4행 / TAB2 3행 | TAB1(4) + TAB2(3) |
| R58 | Q25 | 헤더에 표명, row[0]이 실제 헤더 (변형) | Tbl_A 4행 / Tbl_B 3행 | Tbl_A(4) + Tbl_B(3) |
| R59 | Q17 | 사이드-바이-사이드 + 빈 셀 패딩 | STUDENT 3행 / LECTURE 2행 | STUDENT(3) + LECTURE(2) |

## 정답 보존 검증

JSON 18문항 모두 다음 필드 변경 0건:
- `title`
- `options`
- `correctIndex`
- `explanation`

변경 범위는 오직 `references` 배열 내부의 table 객체 구조(`headers` / `rows` / `caption`).

자동 검증 결과 (`node -e` 스크립트):
```
R49 Q17: correctIndex=3, tables=2, headers/rows match=OK
R49 Q25: correctIndex=0, tables=2, headers/rows match=OK
... (18문항 전부 OK)
--- overall: ALL OK
```

## 빌드 산출물

`node scripts/build-quiz-bank.mjs` 1회 실행으로 9개 회차 ts 산출물 갱신:
- 진짜 변경: `round-{49,50,52,53,54,56,57,58,59}.ts` 9개
- 부수 발견: `round-58.ts`는 이번 PR 변경분 외에도 **이전 PR #2의 빌드 누락 stale 산출물**이 함께 갱신됨 (R58 .json 변경 + 옛 .ts 사이의 누적 차이 663줄). 같은 PR 안에서 자연스럽게 정상화.
- 본 PR 스코프 외 제외: `round-60.ts`는 PR #6의 R60.json 변경분과 한 쌍이라 **`git restore`로 되돌림** (PR #6 머지 후 자동 정상화).

## 검증 결과

```
=== Summary ===
Rounds: 16 · Questions: 800
Errors: 0 · Warnings: 309 (대부분 빈 explanation — 본 PR 스코프 외)
WARNING 만 있음 — strict 가 아니면 통과 처리됨
```

**Errors 0**. 본 PR로 새로 생긴 ERROR이나 WARN 없음.

## 후속 작업

- **Phase 2B** (다음 PR): PDF 참조 데이터 누락 6건(R47 Q36, R49 Q18, R51 Q40, R53 Q33, R54 Q30, R57 Q45) — 회차별 PR 권장
- **Phase 2C**: R47/R48 빈 해설 일괄 보강 (R47 36/50, R48 26/50)
- **Phase 3**: 60회식 난이도 풍부화 — 객관적 정비가 끝난 뒤 회차별 진단·미리보기로 진행
