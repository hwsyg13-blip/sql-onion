# CS 일일 루틴 동작 명세

매일 1회 schedule routine 으로 실행되는 Claude 원격 에이전트의 동작을 코드 작성 전에 합의하기 위한 문서.

> **관련 문서**:
> - [setup-cs-routine.md](setup-cs-routine.md) — 외부 서비스 셋업 (사용자 1회 작업)
> - [runbook-error-reports.md](runbook-error-reports.md) — 사람 운영자 매뉴얼 (자동화 전 흐름)

---

## 트리거

- **방식**: `/schedule` 슬래시 스킬로 등록한 cron 루틴
- **주기**: 매일 1회, 06:00 KST (= 21:00 UTC 전날)
- **에이전트**: 헤드리스 Claude 세션 (이 채팅과 같은 권한, 사용자 응대 없음)

## 입력

- 시트: 환경 변수 `CS_SHEET_ID` 가 가리키는 Google Sheet (시트 1)
- 회차 데이터: 워크트리의 `scripts/authored/round-*.json` 전부 (현재 main 기준)
- GA4 / AdSense: 어제(KST 기준 00:00 ~ 24:00) 데이터

## 단계별 흐름

### 단계 0: 워크트리 준비

매일 새 워크트리를 만들고 작업 후 남기지 않음(완료 후 prune).

```bash
git fetch origin
git worktree add -b cs/auto-YYYY-MM-DD ../양파단-wt-cs-auto-YYYY-MM-DD origin/main
```

브랜치 명: `cs/auto-YYYY-MM-DD`. 자동 루틴 작업임을 prefix 로 식별.

### 단계 1: 시트 PENDING 행 read

```
GET /sheets/{CS_SHEET_ID}/values/Sheet1!A2:K
```

- H 열 (`상태`) 이 빈 칸이거나 `PENDING` 인 행만 수집
- 각 행의 인덱스(시트상 행 번호) 보존 → 나중에 write 할 때 사용

### 단계 2: 행마다 1차 휴리스틱 트리아지

기존 `scripts/cs-triage.mjs` 의 함수를 import 해서 사용. 출력 분류:

| 분류 | 의미 | 다음 단계 |
|------|------|-----------|
| `LIKELY_VALID_BUG` | HIGH 시그널 1개 이상 (raw markdown / 옵션 중복 등) | 단계 3 (Claude 판단) |
| `WORKING_AS_DESIGNED` | 자동 분석에서 결함 안 나옴, 제보가 오히려 어색 | 단계 4 (시트 기록만) |
| `NEEDS_HUMAN_REVIEW` | 시그널 모호, 정답 키 의심 등 | 단계 4 (시트 기록만) |
| `QUESTION_NOT_FOUND` | 회차/번호 매칭 실패 | 단계 4 (시트 기록만) |

### 단계 3: Claude 판단 (LIKELY_VALID_BUG 한정)

원격 에이전트(Claude 본체)가 휴리스틱 결과 + 원본 문항 + 제보 내용을 보고 다음 중 하나로 분류:

- **AUTO_FIX_OK**: 패치 내용 명확. 예 — raw `**` 8자 제거, 옵션 4번 누락된 마침표 추가, 옵션 1·3 중복 중 1개를 원본 의도로 판정해 다른 한쪽 텍스트 보완
- **NEEDS_REVIEW_WITH_DIRECTION**: 자동 수정 위험. 단 해결 방향은 명확 → 그 방향을 시트 처리방향 컬럼에 한 줄로 작성 (예: `R58 1과목 Q9 정답 후보가 옵션 2·3 두 개로 보임. 옵션 3의 ON 절 조건 검토 필요`)

### 단계 4: 패치 적용 + 검증 게이트 (AUTO_FIX_OK 만)

각 행마다 순차 처리. 한 행이라도 게이트 실패하면 그 행만 `AUTO_FIX_FAILED` 처리하고 다음 행 계속.

#### 게이트 순서

1. **JSON 패치 적용** — `scripts/authored/round-XX.json` 수정 (Claude 가 직접 Edit)
2. **빌드 산출물 재생성** — `node scripts/build-quiz-bank.mjs` 실행해서 `src/data/rounds/round-XX.ts` 갱신
3. **무결성 검증** — `node scripts/validate-rounds.mjs` 종료 코드 0
4. **TypeScript 빌드** — `npm run build` 종료 코드 0
5. **diff 패턴 검증** — Claude 가 적용한 diff 가 `LIKELY_VALID_BUG` 시그널과 부합하는지 후속 점검 (예: raw markdown 제거 케이스인데 옵션 텍스트가 통째로 바뀌었으면 reject)

게이트 통과한 행만 다음 단계 커밋 후보. 실패한 행은:
- 변경 사항 `git restore` 로 되돌리기
- 시트 H 열 → `AUTO_FIX_FAILED`, I 열 → 실패 사유 (어느 게이트에서 막혔는지)

### 단계 5: 묶음 commit + main push

게이트 통과한 모든 행의 변경을 **단일 커밋** 으로 묶음 (Vercel quota 절약):

```bash
git add scripts/authored/round-*.json src/data/rounds/round-*.ts
git commit -m "cs(auto): N건 자동 수정 — YYYY-MM-DD"
git push origin cs/auto-YYYY-MM-DD:main  # branch protection 없으니 직접 push
```

> **참고**: 4-채팅 워크플로우상 main 직접 push 는 배포 채팅 권한이지만, "CS 채팅의 작은 수정 main 직접 push" 예외를 자동화에 적용. 사용자 합의 완료(2026-04-28).

push 성공 시 commit SHA 를 받아서 다음 단계 시트 업데이트에 사용.

### 단계 6: 시트 업데이트

행 별로 한 번씩 `PUT /sheets/{ID}/values/Sheet1!H{row}:K{row}`:

| 분류 | H (상태) | I (처리방향) | J (해결일) | K (PR/커밋 링크) |
|------|---------|------------|----------|----------------|
| AUTO_FIX_OK 통과 | `RESOLVED` | 자동 수정 요약 (예: "raw markdown 제거") | 오늘 (KST) | 커밋 URL |
| AUTO_FIX_FAILED | `AUTO_FIX_FAILED` | 실패 사유 | 오늘 | (빈 칸) |
| NEEDS_REVIEW | `NEEDS_REVIEW` | 단계 3에서 작성한 해결 방향 | (빈 칸) | (빈 칸) |
| WORKING_AS_DESIGNED | `WORKING_AS_DESIGNED` | "원본 문제 정상 — 제보 내용이 맞지 않음" | 오늘 | (빈 칸) |
| QUESTION_NOT_FOUND | `NEEDS_REVIEW` | "회차/번호 매칭 실패 — 제목으로도 검색 안 됨" | (빈 칸) | (빈 칸) |

> **해결일 표기**: `2026-04-28` 형식 (ISO date, KST 기준 오늘).

### 단계 7: GA4 + AdSense 데이터 수집

루틴 자체와 직교한 작업. 수집 결과는 단계 8 이메일에 들어감.

#### GA4 (어제 데이터)

```javascript
// google-analytics-data 라이브러리 사용
runReport({
  property: `properties/${GA4_PROPERTY_ID}`,
  dateRanges: [{ startDate: 'yesterday', endDate: 'yesterday' }],
  metrics: [
    { name: 'activeUsers' },
    { name: 'sessions' },
    { name: 'averageSessionDuration' },
    { name: 'screenPageViews' },
  ],
  dimensions: [{ name: 'eventName' }],
})
```

CBT 완료 등 커스텀 이벤트 카운트는 dimension `eventName` + metric `eventCount` 로 별도 호출.

#### AdSense

```javascript
// googleapis 의 adsense.accounts.reports.generate
{
  account: `accounts/${ADSENSE_PUBLISHER_ID}`,
  dateRange: 'YESTERDAY',
  metrics: ['ESTIMATED_EARNINGS', 'IMPRESSIONS', 'CLICKS', 'PAGE_VIEWS'],
}
```

AdSense **승인 상태**는 별도 호출:
```javascript
adsense.accounts.list()  // state 필드: READY / NEEDS_ATTENTION / WARNING / DISABLED
```

해당 호출 실패(권한 부족, 토큰 만료 등) 시 그 섹션만 "조회 실패: 사유" 로 표시하고 계속 진행. 루틴 전체를 abort 하지 않음.

### 단계 8: 이메일 리포트 발송

Resend API 로 `hwsyg13@gmail.com` 발송. 본문 (마크다운 → HTML 변환):

```markdown
# [SQLD양파] 일일 운영 리포트 - 2026-04-28

## CS 처리 결과

- 신규 제보: 5건
- 자동 수정 + main push: 3건
  - R58 1과목 Q9 (raw markdown 제거) — [abc1234](https://github.com/.../commit/abc1234)
  - R60 2과목 Q3 (옵션 4 누락 마침표) — [abc1234](...)
  - R60 3과목 Q12 (옵션 1·3 중복 해소) — [abc1234](...)
- 검토 필요: 1건
  - R58 2과목 Q15 — 정답 후보가 옵션 2·3 두 개로 보임. ON 절 조건 검토 필요. [시트 행 #87](https://docs.google.com/.../#row-87)
- 자동 수정 실패: 1건
  - R59 3과목 Q7 — validate-rounds 실패 (옵션 개수 4 → 3). 변경 롤백됨. [시트 행 #88](...)

## Google Analytics (어제, 2026-04-27)

- 활성 사용자: 142명 (전일 대비 +12)
- 세션: 198
- CBT 완료: 47건 (`event:cbt_complete`)
- 평균 세션 시간: 4분 22초

## AdSense (어제, 2026-04-27)

- 승인 상태: **READY** ✅
- 노출: 1,240
- 클릭: 18 (CTR 1.45%)
- 추정 수익: $0.42

## 다음 실행
- 시각: 2026-04-29 06:00 KST
- routine: `cs-daily` (id: ...)
```

이메일 발송 실패해도 시트 업데이트와 main push 는 이미 완료됐으므로 routine 종료. 실패 알림은 schedule 자체의 실패 통지로 대체.

### 단계 9: 워크트리 정리

```bash
git worktree remove ../양파단-wt-cs-auto-YYYY-MM-DD --force
```

성공/실패 무관하게 정리. 누적 방지.

---

## 에러 처리 매트릭스

| 어디서 실패 | 영향 범위 | routine 동작 |
|-----------|----------|-------------|
| 시트 read | 전체 | 즉시 abort. 이메일에 "시트 read 실패" 만 보냄 |
| 휴리스틱 트리아지 (특정 행) | 그 행 | `NEEDS_REVIEW` 처리 + 다음 행 |
| Claude 판단 | 그 행 | `NEEDS_REVIEW` + 다음 행 |
| JSON 패치 | 그 행 | `AUTO_FIX_FAILED` + restore + 다음 행 |
| 빌드/검증 게이트 | 그 행 | `AUTO_FIX_FAILED` + restore + 다음 행 |
| main push | 전체 묶음 | 전체 게이트 통과 분 모두 `AUTO_FIX_FAILED` 처리 (push 안 됐으니), 시트엔 "push 실패: 사유" |
| 시트 write | 그 행 | 콘솔 로깅만, 다음 행 계속 (다음 routine 이 PENDING 으로 다시 봄) |
| GA4/AdSense | 그 섹션 | 이메일에 "조회 실패: 사유" 표기, 진행 계속 |
| 이메일 발송 | 전체 | 콘솔 로그만, routine 자체는 성공 종료 |

---

## 보안 고려

- 모든 시크릿은 schedule routine 의 환경 변수에만 보관. Git 커밋 금지.
- `service-account.json` 파일 경로는 routine 컨테이너 내부의 임시 위치.
- GitHub PAT 은 90일 만료 — 만료 전 `setup-cs-routine.md` 6번 단계 재수행.
- AdSense refresh_token 만료(6개월) 시 재발급 필요 — 루틴이 만료 감지하면 이메일에 경고 포함.

## 미해결 사항 (구현 시 결정)

- **시트 인덱스가 바뀔 때 처리**: 사용자가 행 삽입/삭제하면 우리 인덱스가 어긋남. 행 식별을 인덱스 대신 `(시각, 회차, 문항번호)` 복합키로 할지 검토.
- **다중 회차 동시 수정 시 빌드 시간**: round 30개 전부 빌드하면 수 분. 변경된 round 만 부분 빌드 가능한지 `build-quiz-bank.mjs` 확인 필요.
- **schedule routine 의 git 환경**: HEAD-less 환경에서 worktree 만들고 push 하려면 git config (user.name, user.email) 필요. routine 시작 시 자동 설정.

이 세 항목은 구현 PR 에서 별도로 다룸.
