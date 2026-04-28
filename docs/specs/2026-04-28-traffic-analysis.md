# SQLD양파 트래픽·CBT 이탈 원인 분석 — 2026-04-28

**대상 기간**: 2026-04-25 ~ 2026-04-27 (GA4 트래커 가동 후 3일)
**데이터 소스**: GA4 Data API (property `534530247`), CS 제보 시트, dogfood 리포트(2026-04-25), 코드 리딩
**작성**: 분석 채팅 / PO 페르소나
**기준일**: 2026-04-28

---

## 1. 요약 (TL;DR)

1. **진짜 깔때기 leak 은 CBT 이탈이 아니라 그 직전 단계다.** 7일 동안 첫 방문 49명 → CBT 시작 7명(14%) → 완료 2명. CBT 시작 안 한 86%(42명) 가 가장 큰 손실. 다음 1주 우선순위는 *완료율 끌어올리기*가 아니라 *CBT 진입율 끌어올리기*.
2. **재방문이 사실상 0이다.** 7일 누적 first_visit 49명 vs returning user 1명. retention loop 가 코드 단에서 의도적으로 꺼져 있고(BETA_NO_AUTH=true), 그걸 살린다 해도 *재방문 동기*(예약/알림/과제) 자체가 설계 안 되어 있음.
3. **이탈 지점 파악이 데이터로 불가능한 트래킹 구조다.** CBT 진행 중 이벤트가 0개 — `exam_start` 1발, `exam_finish` 1발만 있음. 즉 "5번째 문제에서 떨어졌나, 30분 후에 떨어졌나"는 GA4 만으로는 영원히 답 못 함. **분석을 가능케 하는 첫 액션은 P0 — 진행률 이벤트 추가**.

---

## 2. 현황 데이터 (raw)

### 2.1 일별 트래픽 (2026-04-25 ~ 04-27, GA4 가동 후 전체)

| 날짜 | activeUsers | sessions | pageviews | avgSessionDur |
|------|-------------|----------|-----------|---------------|
| 04-25 | 11 | 11 | 45 | 40초 |
| 04-26 | **32** | 35 | 152 | 319초 (5.3분) |
| 04-27 | 11 | 20 | 190 | **905초 (15.1분)** |

- 04-26 이 가장 활성 유저 많음(공유·외부 소개 같은 단발 spike 추정).
- 04-27 은 유저 적은데 평균 세션 15분 — 같은 사람이 오래 머문 것 (heavy user 1~2명이 시간 끌어올린 long tail).

### 2.2 7일 이벤트 카운트

| 이벤트 | count | users | 1인당 |
|--------|-------|-------|-------|
| page_view | 387 | 50 | 7.7 |
| session_start | 63 | 50 | 1.3 |
| first_visit | **49** | 49 | 1.0 |
| theory_open | 53 | **3** | **17.7** |
| exam_start | 42 | **7** | 6.0 |
| random_quiz_start | 5 | 1 | 5.0 |
| **exam_finish** | **2** | **2** | 1.0 |

- **재방문 사용자 = 50 − 49 = 1명**. 7일간 단 1명만 돌아옴.
- theory_open 1인당 17.7회 = 콘텐츠 깊이 보는 사람 3명이 끝까지 읽음. 그 외엔 안 봄.
- exam_start 7명 → exam_finish 2명 = **사용자 기준 71% 이탈, 이벤트 기준 95% 이탈**.

### 2.3 유입 채널 (7일)

| 채널 | sessions | users | events | events/session |
|------|----------|-------|--------|----------------|
| **Direct** | 46 | 45 | 225 | 4.9 |
| **Organic Search** | 17 | 6 | **506** | **29.8** |
| Unassigned | 3 | 1 | 5 | 1.7 |

- Direct = 본인·지인·북마크·utm 누락 유입. 90% 사용자지만 engagement 1/6 수준.
- Organic Search 6명이 Direct 45명의 2.2배 events 발생 — **SEO 유입 = 진성 유저**.
- Source/Medium: `(direct)/(none)`, `google/organic`, `(not set)`. SNS·referral·paid 0건.

### 2.4 디바이스 (어제, 2026-04-27)

| device | users | sessions | pageviews | avgDur |
|--------|-------|----------|-----------|--------|
| desktop | 10 | 18 | 180 | **1003초** |
| mobile | 1 | 2 | 10 | **26초** |

7일 디바이스+이벤트:

- desktop: exam_start 38 → exam_finish 2 (5.3% 완료)
- mobile: exam_start 4 → exam_finish **0** (**완료율 0%**)
- tablet: exam_start 0

→ 모바일은 들어오는 즉시 떠나거나 시험 시작했다가 못 끝낸다.

### 2.5 랜딩 페이지 (7일, sessions 내림차순)

| 랜딩 | sessions | bounceRate | engagementRate | avgDur |
|------|----------|------------|----------------|--------|
| `/home` | 53 | **75.5%** | 24.5% | 84초 |
| `/cbt?p=round-60` | 3 | 33% | 67% | 902초 |
| `/theory` | 2 | 50% | 50% | 1919초 |
| `/exams` | 1 | 0% | 100% | 8344초 |
| `/theory/c111/` | 1 | 0% | 100% | 6786초 |

- **/home 랜딩 75% 직행 이탈** = 비회원 가치 제안 약함.
- 깊은 URL 로 직행한 유저는 거의 다 engaged — 즉 콘텐츠 자체는 매력 있는데 hub(/home) 가 못 잡고 있음.

### 2.6 페이지뷰 (7일)

`/home` 111 / `/theory` 59 / `/theory-detail` 54 / `/exams` 46 / `/cbt` 41 / `/plan` 31 / `/mock` 24 / `/cbt-result` **2** (= exam_finish 2와 일치, 트래킹 정합성 확인됨).

### 2.7 AdSense (어제)

**노출 0**. 광고 임계치 미달이라기보다 `VITE_ADSENSE_CLIENT` 가 발급받은 publisher ID 가 아닌 placeholder 값(`AdSlot.tsx` 의 `isRealSlotId` 가 6+자리 숫자만 통과)으로 추정. 다만 사용자에겐 plain text 안 보임 — placeholder UI 는 `?adsdebug=1` 쿼리에서만 노출되도록 이미 fix 되어 있음. *2026-04-25 dogfood 리포트의 P0 #2 ("광고 영역 · CBT_BOTTOM 노출")는 코드상 이미 해결*. 단 노출 0 이라 수익은 0.

### 2.8 CS 제보 (PENDING 3건)

| 시각 | 회차/과목/번호 | 제보 | 디바이스 |
|------|----------------|------|----------|
| 04-25 | 58회 1과목 #1 | "테스트" | Windows Chrome (실제 제보 아님) |
| 04-26 | 58회 1과목 #3 | 옵션 1·3번 동일, 2번 주어 없음 | **Android Chrome** |
| 04-26 | 47회 1과목 #9 | 해설이 안 나옴 | **Android Chrome** |

- 진짜 제보 2건 모두 **모바일 유저 / 1과목**. 샘플 작지만 모바일 0% CBT 완료율과 맥락 일치.

---

## 3. 가설 검증

### 가설 1: "CBT 93% 이탈이 모든 KPI 망가뜨림"

| | 데이터 |
|---|---|
| **찬성** | exam_start 사용자 7명 → exam_finish 2명 = 71% 이탈 (이벤트 기준 95%); 모바일 0% 완료; CS 제보 2건 모두 콘텐츠 결함 |
| **반박** | 더 큰 leak 은 first_visit 49 → exam_start 7 = **86% drop**. CBT 도달 자체가 14%. 완료율을 5% → 30% 로 6배 끌어올려도 7명 × 0.3 = 2명 → 결과는 마찬가지 (현재도 2명). **도달 인원 늘리는 게 ROI 더 큼**. |

**판정**: 가설 부분 채택. CBT 이탈은 큰 신호지만 *최우선 액션 영역*은 아니다. 도달 → 완료율 모두 잡아야 하는데, 도달이 더 큰 깔때기.

### 가설 2: "환경변수 미설정으로 retention loop 끊김"

| | 데이터 |
|---|---|
| **찬성** | 재방문 1명/49명 = 2% (사실상 0). |
| **반박** | `BETA_NO_AUTH=true` (App.tsx:21) — Supabase 미설정이 *의도된 베타 상태*. 진도/방문/퀴즈는 `progress.ts` localStorage 로 저장 중. 즉 회원가입·서버 진도 동기화·이메일 알림이 *코드에서 꺼져 있어서* 환경변수 추가만으로는 안 살아남. 베타 종료(`BETA_NO_AUTH=false`) 후에도 재방문 hook(7일 SQLD 일정 푸시·이메일·과제 reminder) 자체가 설계 안 됨. |

**판정**: 가설 반박. **환경변수가 원인이 아니라 retention 설계가 부재한 것**이 원인. dogfood P0 #1 (env 추가) 은 수익화 unblock 용으로 의미 있지만, retention 의 직접 처방은 아님.

### 가설 3: "마케팅 채널 단일"

| | 데이터 |
|---|---|
| **찬성** | Direct 45 / Organic 6 / 기타 0. SNS·referral·paid 0. utm 가 붙은 유입도 없음. |
| **반박** | 11 DAU 면 채널 분포 자체가 결과 변수. 마케팅 활동이 0이니 Direct 만 나오는 것. **원인이 아니라 결과**. 단 Organic 6명이 Direct 45명보다 높은 engagement → SEO 한 채널이라도 이미 ROI 보임. |

**판정**: 가설 부분 채택. *분포 문제*가 아니라 *마케팅 활동 부재*가 본질. 액션은 채널 분산이 아니라 SEO 두 배 + 한 채널 신규 시작(블로그/유튜브/커뮤니티 중 1개).

---

## 4. 분석으로 새로 발견한 것 (가설 외)

### 4.1 트래킹 구조가 이탈 지점 분석을 막는다

`src/screens/CBTScreens.tsx` 확인 결과 CBT 진행 중에 발화되는 GA 이벤트는 **mount 시 `exam_start`, 제출 시 `exam_finish` 두 개뿐**. 다음 정보가 GA4 데이터로 절대 안 나온다:

- 몇 번째 문제에서 떠났나
- 첫 답 선택까지 몇 초 걸렸나
- 시간 부족 vs 의지 부족 (90분 다 채웠는지) — `exam_finish` 의 `time_used_sec` 는 있지만 *완료한 사람만*
- 답안 1~5번까지 풀고 떠나는 패턴 vs 30번 풀다가 떠나는 패턴

→ **현재 데이터로는 가설 1 의 "이탈 지점" 을 영원히 답 못 함**. 분석 도구가 부재한 상태에서 우선순위 잡으려는 시도 자체가 한계 있음.

### 4.2 /cbt 페이지 평균 세션 0.86초

7일 `/cbt` pageview 41 회, 평균 세션 0.86초. SPA 의 page_view 가 라우트 변경 시 발사되니 이건 "들어와서 즉시 다른 라우트로 이동"이 아니라 *page_view 가 먼저 발사되고 화면이 그려지는 자연스러운 SPA 패턴*으로 해석됨. 하지만 결합해서 보면 — exam_start 가 42인데 /cbt page_view 가 41 = 거의 1:1. 즉 CBT 시작 = 페이지 진입 = 한 묶음. 이탈 분석에 추가 정보 못 줌.

### 4.3 4-26 → 4-27 사이 사용자 65% 이탈

| 날짜 | 사용자 |
|------|--------|
| 04-26 | 32명 |
| 04-27 | 11명 |

04-26 의 32명 중 04-27 에 돌아온 사람은 0~1명 추정 (전체 재방문 1명). 즉 한번 와본 32명도 이튿날 재방문 거의 안 함. retention 0.

---

## 5. 액션 우선순위

### P0 — 이번 주

#### P0-1. CBT 진행 이벤트 트래킹 추가
- **무엇**: `CBTScreens.tsx` 의 `pick(opt)` / `setIdx(i)` 에서 다음 발화:
  - `exam_progress` { question_index, answered_count, elapsed_sec } — *처음 답 선택 시 1회*, 그리고 매 10문항마다
  - `exam_abandon` — `onExit` 콜백 또는 unmount 시 (answered > 0 이고 finish 안 된 경우)
- **왜**: 이탈 지점을 데이터로 보지 못하면 가설 1의 진짜 우선순위(완료율 vs 진입율) 결론을 영원히 못 냄. 분석 가능성을 만드는 게 다른 모든 액션의 전제.
- **공수**: Frontend 30분 — 이미 `trackEvent` 함수 있음(`src/lib/analytics.ts`). 코드 5~10줄.
- **측정**: 1주 후 `exam_progress.question_index` 분포 확인. 모드(mode)가 1번 근처면 "첫 문제 본 후 떠남", 25번 근처면 "절반 풀고 떠남" — 처방 완전히 다름.

#### P0-2. /home 랜딩 hero 추가
- **무엇**: 비로그인 시 `HomeScreen` 최상단에 가치 제안 + CTA 배너:
  - "SQLD 3주 합격 루틴 — 1분 진단 풀어보고 약점 파악"
  - 1차 CTA: "기출 60회 풀기" (→ `/cbt?p=round-60`), 2차 CTA: "이론 훑어보기" (→ `/theory`)
- **왜**: /home 랜딩 75% 즉시 이탈. 53 sessions 중 13명만 engaged. CBT 도달율 14% → 30% 로만 끌어올려도 완료자 2명 → 5명. **현재 가장 큰 ROI 단일 변경**.
- **공수**: PO 스펙(1시간) → Designer hero(2시간) → Frontend(1시간) = 0.5일.
- **측정**: 2주 후 `/home` bounceRate 75% → 60% 이하, exam_start 사용자 7명/주 → 12명/주 목표.

#### P0-3. 모바일 CBT 경험 진단
- **무엇**: 모바일(375px) 실기기에서 CBT 50문항 직접 처음부터 끝까지 풀어보고 막히는 지점 1줄씩 기록 (QA 채팅에 인계).
- **왜**: 모바일 CBT 완료율 0% (4 시작 / 0 완료). CS 제보 2건도 모바일. 모바일 사용자는 적지만(7일 mobile 5명) **사이트가 모바일에서 사실상 동작 안 한다**는 신호 — 이걸 못 풀면 SEO 유입 늘려도 모바일 비율 상승하면 똑같이 이탈.
- **공수**: 1시간 직접 도그푸드.
- **인계**: 결과를 QA 채팅에 보내 Frontend 수정 PR 만들게.

### P1 — 2주

#### P1-1. retention hook 1개 도입 — 이메일 미사용 진도 알림
- BETA_NO_AUTH=true 라 회원가입 없음. 그러나 localStorage progress 가 있음. 다음 옵션 중 1개:
  - (a) 진도 화면에서 "다음 학습 알림 받기" → 이메일만 입력받아 외부 메일링 SaaS(Resend, Mailchimp) 에 push, 3일 후 자동 알림
  - (b) 브라우저 push notification (Service Worker, 권한 대화 필요)
- (a) 가 비교적 쉬움. PO 스펙 → Backend(Resend 연동, 이미 cs-sync.mjs 에서 사용 중) → Frontend(작은 입력창).
- **측정**: 4주 후 재방문 사용자 1/49 → 5/100 목표 (5%).

#### P1-2. SEO 페이지 강화 — 진성 유저 채널 두 배
- Organic 6명/7일이 Direct 45명보다 engagement 높음. SEO 가 가장 ROI 높은 채널. 다음 둘 중 하나:
  - (a) `/guide/sqld-overview/` 같은 가이드 페이지 5개 추가 (랜딩 1건 등장 — 이미 작은 트래픽 있음)
  - (b) `/exam/round-XX/` URL 의 prerender 강화 (검색 결과 클릭 → 바로 풀이 화면)
- 데이터는 (a) 를 지지 — `/guide/sqld-overview/` 가 이미 1 session 0% bounce 로 들어옴.

#### P1-3. CS 제보 모바일/콘텐츠 결함 처리
- 58회 1과목 #3 옵션 중복, 47회 1과목 #9 해설 누락 — 콘텐츠 채팅 인계. 모바일 유저가 처음 만난 결함이 풀리면 콘텐츠 신뢰도 ↑.

### P2 — 한 달

- AdSense publisher ID 실 발급 + `VITE_ADSENSE_CLIENT` 환경변수 갱신 → 광고 노출 시작 (현재 0). 11 DAU 에선 매출 무의미하지만 100 DAU 까지 끌어올리면 의미 생김.
- BETA_NO_AUTH 종료 결정 — 회원·결제·DB-side 진도 켜기. Pro 전환 측정 시작 (지금은 항상 0).
- utm 캠페인 — 블로그/SNS 한 채널 시작 시 utm 표준화해서 채널 ROI 측정 가능하게.

---

## 6. 다음 1주 실험 제안 (단일 변경, 측정 가능)

가장 ROI 높은 단일 변경 1개를 1주 실험으로 진행:

**실험명**: HomeHero v0 — 비로그인 랜딩에 가치 제안 + CTA 추가
**가설**: /home 직행 이탈률 75% 의 절반은 *가치 인식 실패* 때문이다. CTA 명시 hero 가 이탈률을 60% 이하로 낮출 것이다.
**변경**: `HomeScreen.tsx` 최상단에 hero 섹션 1개 추가 (회원/비회원 분기는 이미 `BETA_NO_AUTH` 가드 있음).
**제외 변경 (혼선 방지)**: CBT 콘텐츠/이론/광고/디자인 토큰은 이번 주 건드리지 않음.
**기간**: 2026-04-29 push → 2026-05-06 결과 확인 (1주).
**성공 기준**:
- /home bounceRate **≤ 60%** (현재 75.5%)
- 주간 exam_start 사용자 **≥ 12명** (현재 7명)
- /home → /cbt 또는 /home → /exams 클릭 이벤트 추가하면 직접 측정 가능 (P0-1 의 일부로 같이 처리)
**실패 시 행동**: hero 카피·CTA 재설계 vs hero 자체 제거 (B/A 비교)

---

## 7. 분석에 사용한 GA4 쿼리 (재현용)

property: `534530247`, endpoint: `https://analyticsdata.googleapis.com/v1beta/properties/{id}:runReport`. 모든 호출 dateRanges = `{startDate: '7daysAgo', endDate: 'yesterday'}` 또는 `yesterday`. 토큰: `gcloud auth application-default print-access-token`.

| 라벨 | dimensions | metrics |
|------|------------|---------|
| events_yesterday | eventName | eventCount, totalUsers |
| daily_7d_summary | date | activeUsers, sessions, screenPageViews, averageSessionDuration |
| events_7d | eventName | eventCount, totalUsers |
| channel_7d | sessionDefaultChannelGroup | sessions, totalUsers, eventCount |
| source_medium_7d | sessionSource, sessionMedium | sessions, totalUsers |
| device_yesterday | deviceCategory | activeUsers, sessions, screenPageViews, averageSessionDuration |
| device_event_yesterday | deviceCategory, eventName | eventCount |
| landing_7d | landingPagePlusQueryString | sessions, bounceRate, engagementRate, averageSessionDuration |
| pages_7d | pagePath | screenPageViews, totalUsers, averageSessionDuration |
| exam_funnel_device_7d | deviceCategory, eventName (filter: exam_*, theory_open, first_visit, session_start, page_view) | eventCount, totalUsers |

스크립트는 `scripts/cs-sync.mjs ga-stats` 가 metric 4개만 다루므로, 분석용은 한 번만 쓸 일회성 스크립트(repo 외부)로 `runReport` 직접 호출. 정기 재실행이 필요해지면 `scripts/ga-analyze.mjs` 로 정착시키는 걸 권장.
