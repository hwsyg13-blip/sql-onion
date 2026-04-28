# SQLD양파 — Claude Code 운영 가이드

이 파일은 Claude Code가 이 프로젝트에서 자동으로 로드하는 프로젝트 컨텍스트입니다.

## 프로젝트 개요

**SQLD양파**는 SQL Developer 자격증 취득을 돕는 학습 플랫폼입니다. "양파처럼 한 겹씩 벗겨가며 깊어지는 학습"이라는 메타포를 중심으로, 기출 중심 CBT, 이론 해설, 모의고사, 결제(프리미엄)를 제공합니다.

**최상위 KPI**: SQLD 자격증 합격률
**보조 KPI**: 7일 리텐션, 일일 문제 풀이 수, CBT 완료율, Pro 전환율

## 기술 스택 (실제 프로젝트 설정)

- **빌드**: Vite 5 (`vite.config.ts`)
- **프레임워크**: React 18 + TypeScript (App Router 아님, 순수 SPA)
- **스타일**: **순수 CSS + 디자인 토큰** (`src/index.css`의 CSS 변수). Tailwind/shadcn 사용 안 함.
- **인증 & DB**: Supabase (`@supabase/supabase-js`, `src/lib/supabase.ts`, `src/lib/auth.ts`)
- **결제**: PortOne V2 (`@portone/browser-sdk`, `src/lib/portone.ts`) — 카카오페이 채널
- **라우팅**: 커스텀 스크린 전환 (`src/App.tsx` 기준, 정식 router 라이브러리 없음)
- **데이터 스크립트**: Node.js ESM (`scripts/*.mjs`) — 기출 파싱 및 `src/data/rounds/*` 생성
- **배포**: Vercel (`public/`, 환경변수 `VITE_*`)
- **테스트**: **현재 설치된 테스트 프레임워크 없음.** 추가 필요 시 Vitest + Testing Library를 전제로 한다.

> 에이전트는 코드 작성 전 반드시 `package.json` 과 기존 코드를 먼저 확인해 실제 스택을 따르세요.

## 에이전트 팀 구성

이 프로젝트는 **7인 에이전트 팀**으로 운영됩니다. 각 역할은 `.claude/agents/*.md`에 정의되어 있습니다.

| 에이전트 | 역할 | 주요 호출 시점 |
|---|---|---|
| `ceo` | 오케스트레이션 | 복잡한 요청, 여러 역할 필요 시 |
| `po` | 요구사항 정의 | 스펙 작성, 우선순위 결정 |
| `designer` | UX/UI 디자인 | 화면·컴포넌트 명세 |
| `frontend` | 프론트엔드 구현 | React(Vite) 코드 |
| `backend` | 백엔드 구현 | Supabase 스키마/RLS/엣지 함수, 결제 서버 로직 |
| `qa` | 품질 보증 | 테스트 작성, 버그 검증 |
| `cs` | 고객 지원 | 문의 응대, 피드백 분류 |

## 기본 동작 원칙 (메인 세션)

메인 Claude Code 세션은 기본적으로 **CEO 페르소나**로 동작합니다. 사용자 요청을 받으면:

1. 요청의 복잡도 판단
2. 단일 역할이면 해당 에이전트 바로 호출
3. 복수 역할이면 CEO가 계획 수립 후 순차/병렬 위임
4. 결과를 종합해 사용자에게 보고

> **명시적 호출**: 사용자가 "디자이너가 검토해줘" 같이 역할을 지정하면 해당 에이전트 직접 호출.

## 델리게이션 치트시트

```
"홈화면에 오늘 풀 문제 수 배지를 추가"
  → CEO → PO(스펙) → Designer(UX) → Frontend(구현) → QA

"1234번 문제 해설에 오타가 있대"
  → CEO → CS(문의 확인) → PO(검수) → (콘텐츠는 src/data/rounds/*.ts 수정) Frontend or 콘텐츠 스크립트 → QA

"모바일에서 CBT 타이머가 안 멈춰요"
  → CEO → QA(재현) → Frontend(수정) → QA(회귀)

"Pro 결제 흐름에 실패 알림이 부족해"
  → CEO → Designer(에러 상태) → Frontend(UI) → Backend(포트원 webhook, RLS) → QA

"기출 57회 추가"
  → CEO → PO(출처/저작권 확인) → Backend(데이터 적재 스크립트) → Frontend(UI 연결) → QA(검수)
```

## 디렉토리 관례 (실제 구조)

```
/
├── .claude/
│   └── agents/                 # 에이전트 정의
├── public/                     # 정적 자산 (폰트, privacy.html, ads.txt 등)
├── scripts/                    # 기출/블로그 파싱, 데이터 생성 (*.mjs)
│   └── authored/               # round-45 ~ round-60.json (원본 저작 JSON)
├── src/
│   ├── App.tsx                 # 라우팅 + 쉘
│   ├── main.tsx                # entry
│   ├── index.css               # 디자인 토큰 + 전역 스타일
│   ├── components/             # 공용 컴포넌트 (TopNav, Footer, AdSlot, Atoms, Diagrams, ...)
│   ├── screens/                # 화면 단위 컴포넌트 (Home, Login, CBT, Mock, Theory, Pricing, Plan)
│   ├── data/                   # 정적 콘텐츠 (이론, 퀴즈뱅크, 회차별 문제)
│   │   └── rounds/             # round-XX.ts
│   └── lib/                    # supabase, auth, portone, gating, progress, queries
├── supabase/
│   └── migrations/             # 0001_init.sql (단일 마이그레이션 현재 기준)
├── .env.example                # 환경변수 키 목록
├── CLAUDE.md                   # 이 파일
├── SETUP.md                    # 배포/연동 가이드
├── package.json
├── tsconfig.json
├── vite.config.ts
└── index.html

산출물 (에이전트가 생성):
└── docs/
    ├── specs/                  # PO 산출물
    ├── design/                 # Designer 산출물
    ├── qa/                     # QA 버그 리포트
    └── support/                # CS 산출물 (FAQ, 주간 리포트)
```

## 환경변수

### 현재 Vercel 프로덕션 (2026-04-27 기준)
실제 등록된 키:
- `VITE_GA_MEASUREMENT_ID` — Google Analytics 4
- `VITE_BUG_REPORT_URL` — 오류 제보 Google Apps Script endpoint
- `VITE_ADSENSE_CLIENT` — AdSense publisher ID

### 베타 모드 동안 미설정 (의도적)
`src/App.tsx` 의 `BETA_NO_AUTH = true` 인 동안 다음 키는 **설정 안 해도 정상 동작**:
- `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`
- `VITE_PORTONE_STORE_ID`, `VITE_PORTONE_CHANNEL_KEY_KAKAO`

근거:
- `src/lib/supabase.ts` 가 env 미설정 시 placeholder URL/key + `hasSupabase=false` 로 폴백
- `src/lib/auth.ts` 의 모든 함수가 `hasSupabase` 체크 — `useSession()` 은 즉시 `{ user: null, loading: false }` 반환, Supabase 호출 0회
- 로그인/요금제/결제 라우트는 home 으로 redirect (`App.tsx` `BETA_NO_AUTH` 가드)
- 진도/방문/퀴즈 기록은 `src/lib/progress.ts` localStorage 전용 (Supabase 의존 없음)

### 베타 종료 시 체크리스트 — `BETA_NO_AUTH = false` 로 바꾸기 직전
1. Vercel env 추가 (Production / Preview / Development 모두):
   - `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`
   - `VITE_PORTONE_STORE_ID`, `VITE_PORTONE_CHANNEL_KEY_KAKAO`
2. 서버용 env 추가 (Vercel Functions / webhook 사용 시):
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `PORTONE_API_SECRET`
3. Supabase 프로젝트 마이그레이션 적용 (`supabase/migrations/0001_init.sql` 외)
4. PortOne 콘솔에서 카카오페이 채널 발급 + 채널키 확인
5. Preview 배포에서 로그인 → 무료 사용 → Pro 결제 → 회차 풀이 E2E 검증
6. 검증 통과 후 Production 배포

**원칙**: 시크릿은 절대 커밋 금지. `.env.local` 은 `.gitignore` 확인 필수.

## 도메인 용어

| 용어 | 의미 |
|---|---|
| 단원 (Chapter) | SQLD 대분류 — 데이터 모델링, SQL 기본, SQL 활용 |
| 레이어 (Layer) | 문제 난이도 L1(기초) → L4(킬러) — 양파 메타포 |
| 회차 (Round) | 기출 시행 회차 (예: round-57) — `src/data/rounds/` 에 대응 |
| CBT | Computer-Based Test — 실제 시험 모사 화면 (`src/screens/CBTScreens.tsx`) |
| 모의고사 (Mock) | 랜덤·주제별 가상 시험 (`MockScreens.tsx`) |
| 이론 (Theory) | 해설·개념 정리 (`TheoryScreens.tsx`, `src/data/theory*.ts`) |
| 양파 레이어 | 학습 깊이의 시각적 메타포 |
| Pro | 유료 플랜 — PortOne 카카오페이 결제, `gating.ts` 에서 권한 분기 |

## 4-채팅 분리 워크플로우 (2026-04-27~)

운영 효율을 위해 작업을 4개 Claude Code 세션(채팅)으로 분리합니다. 각 채팅은 자체 브랜치·스코프·디렉토리(worktree)에서 작업합니다.

| 채팅 | 브랜치 | 스코프 | main 직접 push |
|------|--------|--------|----------------|
| **배포** | `main` | Vercel env, 프로덕션 배포 결정, PR 리뷰·머지, CLAUDE.md/`.claude/` 운영 가이드 | ✅ |
| **콘텐츠/QA** | `qa/<YYYY-MM-DD>-...`, `content/<주제>` | `scripts/authored/`, `scripts/*.mjs`, `docs/qa/`, `src/data/rounds/` | ❌ PR만 |
| **기능 개발** | `feat/<기능>` | `src/components/`, `src/screens/`, `src/lib/`, `src/App.tsx` | ❌ PR만 |
| **CS 운영** | `cs/<YYYY-MM-DD>-...` | `docs/support/`, `scripts/cs-triage.mjs` 등 | 작은 문서 수정만 직접 (사용자 승인 후) |

### 채팅별 worktree 분리 — **필수**

같은 디렉토리를 여러 채팅이 공유하면 mid-rebase 상태가 글로벌이라 한 채팅이 멈추면 다른 채팅도 잠깁니다 (2026-04-27 충돌 사례). 채팅마다 **자체 worktree**를 사용하세요.

**관례**: 메인 디렉토리 옆에 `양파단-wt-<scope>-<topic>` 형태로 worktree 생성.

```bash
# 예: 콘텐츠/QA 채팅이 round-58/60 검수 작업 시작
git fetch
git worktree add ../양파단-wt-qa-rounds-58-60 -b qa/2026-04-27-rounds-58-60 origin/main
cd ../양파단-wt-qa-rounds-58-60
# 작업 → commit → push → gh pr create

# 작업 완료 후 (PR 머지된 뒤)
cd ../양파단
git worktree remove ../양파단-wt-qa-rounds-58-60
git branch -d qa/2026-04-27-rounds-58-60   # 원격은 PR 머지 시 자동 삭제
```

**배포 채팅**은 메인 디렉토리(`양파단/`)를 단독 사용하며 항상 `main` 브랜치 위에서 동작합니다.

### 스코프 위반 처리
다른 채팅의 영역 파일을 수정 요청받으면 일단 짧게 "이거 X 채팅에서 하시는 게 맞을 것 같다"고 짚어주고 사용자 결정을 따르세요. 확인 없이 일단 작업 시작해도 OK — 도중에 스코프 어긋나면 그때 짚어줌.

## Vercel 배포 정책 (2026-04-28~)

### Preview 배포 비활성화
`vercel.json` 의 `git.deploymentEnabled: { "main": true }` 설정으로 **main 브랜치 push만 빌드**합니다. feat/qa/cs/* 브랜치 push 는 Vercel 빌드 0회.

**배경**: 2026-04-27 ~ 28 사이 일일 50+ PR 머지로 Vercel Free 일일 100 배포 한도(`api-deployments-free-per-day`) 초과 사고. PR 마다 preview + prod 합쳐 2회씩 차감되던 패턴이 직접 원인.

### 작업자에게 미치는 영향
- **PR 페이지에 Vercel Preview URL 안 뜸** — GitHub CI 체크에 Vercel 항목 부재가 정상
- **로컬 검증 의무화** — `npm run dev` 로 `localhost:5173` 에서 직접 확인 후 PR 올릴 것. UI 변경은 라이트/다크/모바일까지 본인이 사전 확인
- **머지 후에야 prod 에서 결과 확인 가능** — preview gate 사라짐. 머지 신중히
- **이론·CBT·결제 흐름 같은 큰 변경**은 PR 본문에 로컬 검증 결과(스크린샷 또는 computed style 검증) 명시 권장

### 배포 채팅 처리
- 머지된 main commit 의 prod 빌드가 rate limit 으로 실패하면 alias 우회 가능
- 가장 최근 성공한 preview/prod deployment 의 alias 를 sqldyangpa.com / www.sqldyangpa.com 으로 재할당:
  ```bash
  vercel alias set <recent-ready-deployment-url> sqldyangpa.com --scope lees-projects-fd7a21b5
  vercel alias set <recent-ready-deployment-url> www.sqldyangpa.com --scope lees-projects-fd7a21b5
  ```
- 한도 초과 빈번해지면 Vercel Pro 업그레이드 검토 (월 $20)

## 커뮤니케이션 규칙

- **에이전트 간 정보 교환**은 CEO를 통해서만. 서브에이전트끼리 직접 호출 불가 (Claude 제약).
- **공유 산출물**은 `docs/` 아래에 Markdown으로. 다음 에이전트가 읽을 수 있도록.
- **변경 사항 요약**은 각 에이전트가 작업 후 명확히 보고 (파일 목록 + 무엇을 왜 변경).

## 안전 규칙

- **Supabase 프로덕션 DB 직접 수정 금지** — 반드시 `supabase/migrations/NNNN_*.sql` 로 버전 관리.
- **RLS 정책은 항상 명시** — 새 테이블 만들 때 `ENABLE ROW LEVEL SECURITY` + 접근 정책 누락 금지.
- **시크릿/API 키 커밋 금지** — `.env.example` 에는 키명만.
- **결제(PortOne) 금액 검증은 서버에서** — 클라이언트 금액 신뢰 금지. Webhook 에서 재확인.
- **Vercel 배포 관련 명령**(`vercel --prod`, 환경변수 변경 등)은 반드시 사용자 확인 후 실행.
- **대규모 리팩토링**은 CEO가 단계별 계획 수립 후 사용자 승인 필요.

## 빠른 시작 예시

사용자가 "홈화면에 '오늘의 추천 문제 5개' 섹션을 추가해줘" 라고 요청하면:

1. **CEO**: "UI 섹션 + 추천 로직 필요. PO(무엇을 추천할지 기준 정의) → Designer(카드 레이아웃) → Frontend(`HomeScreen.tsx`) → (데이터 출처가 신규라면 Backend) → QA 순으로 진행"
2. **PO**: 유저스토리 + 추천 규칙(`docs/specs/YYYY-MM-DD-home-recommendations.md`)
3. **Designer**: 섹션 와이어 + 상태(빈/로딩/에러) 명세
4. **Frontend**: `HomeScreen.tsx` 수정, `src/lib/queries.ts` 에 추천 쿼리 추가
5. **QA**: 시나리오 (로그인/비로그인, 진도 무관), 회귀 체크리스트
6. **CEO**: 종합 보고 + 배포 여부 사용자 확인
