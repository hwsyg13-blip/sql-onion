# CS 일일 자동 처리 — Claude routine prompt

> **이 문서**: schedule routine 이 매일 06:00 KST 깰 때 첫 사용자 메시지로 받는 프롬프트.
> **참조**: 동작 명세 전체는 [cs-routine-spec.md](cs-routine-spec.md). 이 prompt 는 그걸 보고 실행하라는 압축 지시.

---

## 첫 사용자 메시지 (그대로 복사해 routine 등록)

```
SQLD양파 CS 일일 자동 처리. 다음 순서로 진행:

## 1. 워크트리 준비

cd C:/Users/hwsyg/OneDrive/문서/Claude/Projects/양파단
git fetch origin
DATE=$(date +%Y-%m-%d)
git worktree add -b cs/auto-$DATE ../양파단-wt-cs-auto-$DATE origin/main
cd ../양파단-wt-cs-auto-$DATE

## 2. PENDING 행 가져오기

node scripts/cs-sync.mjs read-pending

→ 출력된 JSON 의 pending 배열을 행마다 처리.

## 3. 행마다 휴리스틱 1차 트리아지

각 행에 대해:
node scripts/cs-triage.mjs --round <회차숫자> --subject <과목숫자> --number <문항번호> --report "<제보내용>" --json

→ 출력의 verdict 필드로 분류.

## 4. 행마다 자체 판단

판단 기준:
- AUTO_FIX_OK: 휴리스틱이 명확한 시그널(raw markdown, 옵션 누락 마침표, 옵션 텍스트 일부 누락) 잡았고 패치 내용이 한 가지 명확한 방향이면 자동 수정.
- NEEDS_REVIEW: 정답 키 변경, 옵션 의미 변경, 두 가지 이상 가능성, SQL 표준 근거 필요 → 자동 수정 금지. 해결 방향 한 줄로 작성.
- WORKING_AS_DESIGNED: 휴리스틱 결과 결함 없음 + 원본 문제 정상 → 시트에만 기록.

## 5. AUTO_FIX_OK 처리 — 게이트 통과해야 commit

행 별로:
a) Edit 도구로 scripts/authored/round-XX.json 패치
b) node scripts/build-quiz-bank.mjs (또는 해당 라운드만 빌드 가능한 경우 그것만)
c) node scripts/validate-rounds.mjs → 종료 코드 0 확인
d) npm run build → 종료 코드 0 확인
e) diff 가 시그널과 부합하는지 자체 점검

게이트 어느 하나 실패 시:
- git restore -- scripts/authored/round-XX.json src/data/rounds/round-XX.ts
- 다음 단계 6에서 그 행은 AUTO_FIX_FAILED 로 시트 기록

## 6. 묶음 commit + main push

게이트 통과한 변경 모두를 단일 commit:

git add scripts/authored/round-*.json src/data/rounds/round-*.ts
git commit -m "cs(auto): N건 자동 수정 — $DATE"
git push origin HEAD:main

→ commit SHA 기록 (시트 link 컬럼에 사용).

## 7. 시트 업데이트 (행마다)

각 행 처리 결과를 시트에 기록:

# AUTO_FIX_OK 통과
node scripts/cs-sync.mjs sheet-update --row 5 --status RESOLVED --direction "raw markdown 제거" --link "https://github.com/hwsyg13-blip/sql-onion/commit/<sha>"

# AUTO_FIX_FAILED
node scripts/cs-sync.mjs sheet-update --row 6 --status AUTO_FIX_FAILED --direction "validate-rounds 실패: 옵션 개수 4→3"

# NEEDS_REVIEW
node scripts/cs-sync.mjs sheet-update --row 7 --status NEEDS_REVIEW --direction "R58 1과목 Q9 정답 후보 옵션 2·3 두 개로 보임. ON 절 조건 검토 필요"

# WORKING_AS_DESIGNED
node scripts/cs-sync.mjs sheet-update --row 8 --status WORKING_AS_DESIGNED --direction "원본 문제 정상 — 제보 내용이 맞지 않음"

## 8. GA + AdSense 통계

node scripts/cs-sync.mjs ga-stats > /tmp/ga.json
node scripts/cs-sync.mjs adsense-status > /tmp/adsense.json

조회 실패 시 이메일 본문에 "조회 실패: 사유" 로 표기, routine 자체 abort 안 함.

## 9. 이메일 리포트 작성 + 발송

다음 마크다운을 HTML 로 변환해 /tmp/report.html 작성, send-email 로 발송:

제목: [SQLD양파] 일일 운영 리포트 - $DATE

본문 구조:
- ## CS 처리 결과
  - 신규 제보: N건
  - 자동 수정 + main push: M건 (각 항목에 commit SHA 링크)
  - 검토 필요: K건 (시트 행 링크 + 해결 방향 한 줄)
  - 자동 수정 실패: F건 (시트 행 링크 + 실패 사유)
  - 원본 정상(WAD): W건
- ## Google Analytics (어제)
  - 활성 사용자 / 세션 / 페이지뷰 / 평균 세션 시간
  - (커스텀 이벤트 있으면) cbt_complete 등 카운트
- ## AdSense (어제)
  - 승인 상태 (READY/NEEDS_ATTENTION/...)
  - 노출 / 클릭 / 추정 수익 (READY일 때만)

마지막 줄에 다음 routine 실행 시각 표시.

발송:
node scripts/cs-sync.mjs send-email --subject "[SQLD양파] 일일 운영 리포트 - $DATE" --html-file /tmp/report.html

## 10. 워크트리 정리

cd C:/Users/hwsyg/OneDrive/문서/Claude/Projects/양파단
git worktree remove ../양파단-wt-cs-auto-$DATE --force

## 에러 처리 원칙

- 시트 read 실패 → 즉시 abort, "시트 read 실패" 만 이메일
- 특정 행 처리 실패 → 그 행만 AUTO_FIX_FAILED/NEEDS_REVIEW 로 마크하고 다음 행 계속
- main push 실패 → 통과 분 모두 AUTO_FIX_FAILED 시트 기록
- GA/AdSense 실패 → 그 섹션만 "조회 실패" 표기, 진행 계속
- 이메일 실패 → console 로그만, routine 정상 종료

## 4-채팅 워크플로우 준수

이 routine 은 CS 채팅 권한으로 동작. main 직접 push 가능 (사용자 사전 승인됨, 2026-04-28).
src/components/, src/screens/, src/lib/ 같은 기능 개발 영역은 절대 만지지 않음 — 자동 수정 대상은 scripts/authored/round-*.json 과 그 빌드 산출물 src/data/rounds/round-*.ts 한정.

자세한 동작 명세: docs/support/cs-routine-spec.md
```
