# 유지보수 도구 (임시 폴더가 사라져도 쓸 수 있게 보관)

저장소 루트(/home/user/sql-onion)에서 `node docs/maintenance/tools/<파일>` 로 실행한다. 화면 캡처 도구는 먼저 `npm run build && npx vite preview --port 4182` 를 띄운다(캡처 파일은 현재 폴더에 생기므로 임시 폴더에서 실행).

| 파일 | 용도 |
|---|---|
| `settheory.mjs <id> <file.html>` | `src/data/theoryHtml.ts` 에서 챕터 한 줄만 교체 (이론 개편) |
| `thtext.mjs <id> [글자수]` / `--stats` | 챕터 본문을 텍스트로 추출 / 챕터별 분량 |
| `th.cjs <id>` | 이론 화면 데스크톱·모바일·다크 캡처 (다크는 토글 버튼으로) |
| `th2.cjs <id>` | 모바일 캡처 + 화면 밖으로 넘치는 표 개수 |
| `run.cjs spec.json` | SQLite 로 SQL 실행해 정답 확인 (`[{id, setup, sql}]`) |
| `applyrestore.cjs spec.json` | 보기 빈 모의고사 문항 복원 적용 (보기·정답·해설·참고자료) |
| `applypool.cjs <pool> map.json` | 모의고사 풀 해설 일괄 적용 (`_id` 기준) |
| `applyexp.cjs map.json` / `checkexp.cjs map.json` | 기출 해설 일괄 적용 (`회차-과목-번호` 기준) / 해설 속 정답 번호 대조 |

이론 개편 틀: 한 줄 요약(blockquote) → 꼭 외울 것 ①~④ (각각 표 1개 + `<div class="point">` ★시험 포인트) → 시험은 이렇게 낸다(trap-grid) → 30초 정리(summary-cards). 예시는 `git show origin/main:src/data/theoryHtml.ts` 의 c111.
