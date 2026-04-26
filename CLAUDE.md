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

## 환경변수 (`.env.example` 기준)

클라이언트(빌드 시 주입):
- `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`
- `VITE_PORTONE_STORE_ID`, `VITE_PORTONE_CHANNEL_KEY_KAKAO`
- `VITE_ADSENSE_CLIENT` (선택)

서버(Vercel 함수용, 아직 일부 미사용):
- `SUPABASE_SERVICE_ROLE_KEY` (webhook 등 관리자 권한)
- `PORTONE_API_SECRET`

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
