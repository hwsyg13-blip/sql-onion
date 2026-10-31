# 문의 시트 미처리 제보 판정표 (2026-11-01)

대상: "SQLD양파 CS" 시트에서 상태 칸이 비어 있던 제보 중, Drive 커넥터로 읽힌 범위(2026-05-19 ~ 05-29 접수분).
방법: 제보 문항의 **현재** 데이터(`scripts/authored/round-NN.json`)를 직접 풀어 정답·해설을 확인하고, 제보 이후 수정 이력(`git log`)을 대조했다.

> 커넥터가 시트 전체(1,503행) 중 앞부분 샘플만 돌려줘서, 그 뒤 행은 이 표에 없다. 남은 행은 다음 실행에서 이어서 판정한다.

## 요약

- 판정한 문항 29개 (제보 약 45건). **현재 데이터 기준으로 모두 정답·해설이 맞다.**
- 대부분 2026-09-22 일괄 수정(`130dd3b`, `1db3a06`, `8dffaf3`, `7a7c801`)과 2026-11-01 수정(#197~#205)으로 이미 반영됐다.
- 사람 확인 필요 1건: R54 2과목 15번 (아래 표).

## 시트에 옮길 상태

| 회차 | 과목 | 번호 | 제보 요지 | 현재 정답 | 판정 | 시트 상태 / 처리방향 제안 |
|---|---|---|---|---|---|---|
| 58 | 2 | 28 | 정답이 ①인데 ②로 표시 (6건) | ① | 반영됨 | WORKING_AS_DESIGNED / 9-22 수정, 현재 ① |
| 52 | 2 | 14 | PRIOR 위치 답은 ① (4건) | ① ㄱ 위치 | 반영됨 | WORKING_AS_DESIGNED / 현재 ① |
| 59 | 2 | 25 | CTAS 보기·발문 이의 (3건) | ③ (발문 "옳은 것") | 반영됨 | WORKING_AS_DESIGNED / 발문·보기 정정됨 |
| 51 | 2 | 38 | NULL 정렬 답 ④ (2건) | ② ORDER BY COL DESC | 반영됨 | WORKING_AS_DESIGNED / Oracle 기준으로 재작성 |
| 52 | 2 | 48 | PRIOR 위치 답 ④ | ④ ㄹ | 정상 | WORKING_AS_DESIGNED |
| 58 | 2 | 32 | ①·③ 복수 정답 (2건) | ① ㉠과 ㉡ | 반영됨 | WORKING_AS_DESIGNED / ㉡·㉣ 은 'X'·'Y'로 다름 |
| 58 | 2 | 44 | ②·③ 복수 정답 (2건) | ② | 반영됨 | WORKING_AS_DESIGNED / ③ 은 DENSE_RANK 가 건너뛰지 않아 틀림 |
| 57 | 2 | 14 | 정답 ②인데 ④로 표시 | ② | 반영됨 | WORKING_AS_DESIGNED |
| 54 | 2 | 12 | 정답 ①인데 다르게 표시 | ① | 반영됨 | WORKING_AS_DESIGNED |
| 58 | 2 | 26 | 정답 ①인데 ④로 표시 | ① | 반영됨 | WORKING_AS_DESIGNED |
| 55 | 2 | 28 | 4건인데 답이 없음 | ① 5건 | 정상 | WORKING_AS_DESIGNED / AND 우선 평가로 5건 |
| 55 | 2 | 33 | ④도 정답 아닌가 | ① AAB, BBA | 정상 | WORKING_AS_DESIGNED / 집합 연산은 첫 SELECT 별칭 |
| 49 | 2 | 20 | 답 ① | ① ROLLUP | 정상 | WORKING_AS_DESIGNED |
| 51 | 2 | 12 | 3이어야 하는데 2 | ② ROWS | 정상 | WORKING_AS_DESIGNED / 동일 일자 2행이라 ROWS 는 일자별 누적이 아님 |
| 52 | 2 | 20 | 복수 정답 / ② DQL 표기 | ① INSERT—DCL | 반영됨 | WORKING_AS_DESIGNED / SELECT 는 SQLD 기준 DML |
| 53 | 2 | 19 | 동순위 포함 함수 복수 정답 | ① DENSE_RANK | 반영됨 | WORKING_AS_DESIGNED / 발문에 "건너뛰지 않고" 명시 |
| 53 | 2 | 24 | ③·④ 동일 정답 | ④ | 반영됨 | WORKING_AS_DESIGNED / ③ 은 (2,3)·(2,4) 도 포함 |
| 53 | 2 | 28 | 보기가 다른 문제의 정답 | ① 공집합 | 반영됨 | WORKING_AS_DESIGNED |
| 53 | 2 | 30 | ①·③ 둘 다 정답 | ① 10, 12, 15 | 반영됨 | WORKING_AS_DESIGNED |
| 53 | 2 | 39 | 발문이 인자 선택형에 가까움 | ② abbc, bc | 반영됨 | WORKING_AS_DESIGNED / 결과 선택형으로 재작성 |
| 53 | 2 | 47 | 발문 모호 | ① 6개 | 반영됨 | WORKING_AS_DESIGNED |
| 53 | 1 | 10 | ①·② 둘 다 정답 | ① 직선 | 반영됨 | WORKING_AS_DESIGNED / 발문을 "필수 참여"로 한정 |
| 54 | 2 | 19 | 문제에 정답 힌트 | ① | 반영됨 | WORKING_AS_DESIGNED |
| 46 | 2 | 17 | 정답이 문제에 적혀 있음 | ② | 반영됨 | WORKING_AS_DESIGNED |
| 56 | 2 | 50 | 정답이 보기에 표시 | ③ 3 | 반영됨 | WORKING_AS_DESIGNED |
| 58 | 2 | 46 | 답이 나와 있음 | ② NVL(NULL, 0) | 반영됨 | WORKING_AS_DESIGNED |
| 57 | 2 | 28 | NOT NULL 은 중복과 무관 | ① | 반영됨 | WORKING_AS_DESIGNED / 보기 ③ 문구 정정됨 |
| 57 | 2 | 27 | 모두 정답이라 복원 오류 의심 | ③ Friday | 정상 | WORKING_AS_DESIGNED / Friday 만 u 가 없음 |
| 54 | 2 | 15 | 정답이 문제에 적혀 있음 | ③ 역방향 | **사람 확인 필요** | NEEDS_REVIEW / SQL 에 START WITH 가 없어 보기 ② "상위 관리자부터 조회한다" 가 맞는 설명인지 논란 여지 |

## 렌더링 제보 (별도 확인)

| 회차 | 과목 | 번호 | 제보 | 판정 |
|---|---|---|---|---|
| 47 | 1 | 9 | 해설이 안 나옴 | 9-22 수정분. 로컬 복습 화면에서 해설 정상 표시 |
| 55 | 2 | 26 | 쿼리 없음 / 아무것도 안 보임 | 9-22 수정분. 표·SQL 정상 표시 |
| 45 | 2 | 20 | 그림 안 보임 | Chromium 에서 SQL 정상 표시. 제보자는 Firefox — 이 환경에서 확인 불가 |
