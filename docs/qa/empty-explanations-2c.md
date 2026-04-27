# Phase 2C — R47/R48 빈 explanation 62건 보강

- **작업 일자**: 2026-04-27
- **브랜치**: `qa/2026-04-27-empty-explanations` (PR #12 위에 stacked, base=`qa/2026-04-27-rounds-data-restoration`)
- **대상**: R47 36건 + R48 26건 = 62건 (Phase 2B의 R47 Q36 빈 해설도 동시 처리)
- **검증**: `node scripts/validate-rounds.mjs` → Errors 0, Warnings 307→245 (62건 감소)

## 배경

R47/R48이 빈 해설 비율이 비정상적으로 높음 (R47 72%, R48 52%). 학습 가치가 떨어지는 상태라 일괄 보강.

사용자 인사이트 — "MD 파일에 해설 있을 가능성 + JSON과 갭 우려". R60에서 발견한 갈라짐(Q2·Q11 옵션·title 차이) 패턴이 R47/R48에도 있을 수 있어 **MD↔JSON 일치 검증 우선**.

## 진단 결과 — 매우 깨끗

| 분류 | 건수 | 비율 |
|---|---|---|
| ✅ MD 해설 단락 그대로 채택 | 49건 | 79.0% |
| ⚠️ MD 해설 짧음/없음 → 옵션·SQL·references 기반 보강 (정답 일치) | 13건 | 21.0% |
| ❌ 불일치 (옵션 B 폴백 필요) | **0건** | 0% |

**62건 모두 JSON ↔ MD 정답 번호·텍스트 일치**. R60처럼 갈라진 케이스 0건 — 60회만 특수 사례였음.

## 처방 원칙

- **correctIndex / title / options / references 변경 0건**
- 변경 범위는 오직 `explanation` 필드
- **R47 Q36**: Phase 2B에서 references는 채워졌고 explanation만 빈 채였음. references와 일관된 해설로 보강.
- **`**bold**` raw markdown 제거**: validate 규칙(RAW_MARKDOWN ERROR)에 따라 강조 표시 제거. 사이트에서는 plain text로 렌더.

## 적용 방식 — Node 스크립트 일괄 처리

62건 Edit는 비효율. 임시 매핑 JSON에 explanation 텍스트 담아 한 번에 처리:
1. `_explanation-map.json`(임시) — 62건 매핑
2. `node -e ...` — round-47/48.json 읽어 explanation 필드만 갱신
3. 임시 파일 삭제
4. `**bold**` 패턴 일괄 strip (28건 ERROR 발생 후 폴백 처리)

## 검증 결과

```
=== Summary ===
Rounds: 16 · Questions: 800
Errors: 0 · Warnings: 245 (이전 PR #12 시점 307→245, 62건 감소 확인)
```

남은 빈 해설:
- R47: 0건 (36건 → 0건)
- R48: 0건 (26건 → 0건)

다른 회차 빈 해설은 본 PR 스코프 외 (R45 7건, R46 13건, R49 18건, R50~ ... 별도 작업).

## 정답 보존 검증

```
R47: 36 explanations updated, 0 skipped
R48: 26 explanations updated, 0 skipped
TOTAL: 62 updated, 0 skipped
```

모든 변경은 explanation 필드만. correctIndex / title / options / references 손대지 않음.

## 후속 작업

- 다른 회차 빈 해설 보강 (R45 7건, R46 13건, R49 18건, R50 21건, R51 11건, R52 19건, R53 14건, R54 12건, R55 10건, R56 8건, R57 6건, R58 2건, R59 6건, R60 16건 — 약 145건)
- Phase 3: 회차별 난이도 풍부화 (60회식 패턴)

## 메모 — `**bold**` 처리

원본 MD 해설은 `**키워드**`로 강조한 부분이 있었으나 validate 규칙에서 RAW_MARKDOWN ERROR로 잡혀 일괄 strip 처리. 향후 explanation 필드에 마크다운 렌더링을 적용하려면:

1. `QuestionReferences.tsx`의 `renderInlineMd`를 explanation 영역에도 호출
2. validate 규칙 완화 — explanation 필드만 raw markdown 허용

이는 별도 작업 (기능 개발 채팅 영역).
