# CS 일일 루틴 셋업 가이드

매일 1회 자동으로 도는 CS 처리 루틴이 동작하려면 외부 API 4개에 접근 권한이 필요합니다. 이 문서는 사용자가 직접 콘솔에서 수행해야 하는 1회 셋업 단계입니다.

> **소요 시간**: 처음이면 60~90분. 익숙하면 30분.
> **비용**: $0 — 모든 사용량이 각 서비스 무료 한도 안에 들어감.

---

## 셋업 결과물 체크리스트

이 문서를 끝마치면 다음이 손에 들어와야 합니다:

- [ ] `service-account.json` 파일 1개 (GCP)
- [ ] `RESEND_API_KEY` 문자열 (Resend)
- [ ] `GH_PAT` 문자열 (GitHub Personal Access Token, fine-grained)
- [ ] GA4 **Property ID** (12자리 숫자)
- [ ] AdSense **Publisher ID** (`pub-` 로 시작)
- [ ] 시트 URL: `https://docs.google.com/spreadsheets/d/1ZetajcAO8lDHTbYF0EwfKoytJnDjI-SAqk8510XOIDg/edit` (이미 있음)

마지막에 이 6개를 `.env.cs-routine` 같은 파일에 모아 schedule routine 환경 변수로 등록합니다.

---

## 1. GCP 프로젝트 만들기

GCP = Google Cloud Platform. 구글 API 호출 권한을 발급받는 곳.

### 1.1 프로젝트 생성

1. https://console.cloud.google.com/ 접속 (구글 계정 `hwsyg13@gmail.com` 으로 로그인)
2. 상단 프로젝트 선택 드롭다운 → **새 프로젝트**
3. 프로젝트 이름: `sql-onion-cs` (대시 OK, 한국어 X)
4. 위치: 조직 없음
5. **만들기** → 알림 뜨면 `sql-onion-cs` 프로젝트 선택

> **결제 계정**: GCP 가 결제 정보 등록을 요구할 수 있습니다. 등록은 해도 **무료 한도 안에서는 청구되지 않음**. 안 등록해도 우리가 쓸 API 들은 대부분 동작.

### 1.2 API 3개 활성화

상단 검색창에서 각각 검색해서 **사용** 버튼 클릭:

- [ ] `Google Sheets API`
- [ ] `Google Analytics Data API`
- [ ] `AdSense Management API`

각각 "사용 설정됨" 표시 떠야 함.

### 1.3 서비스 계정 만들기

서비스 계정 = "프로그램 전용 가짜 사용자". 이 계정 이름으로 API 호출함.

1. 좌측 메뉴 → **IAM 및 관리자** → **서비스 계정**
2. 상단 **+ 서비스 계정 만들기**
3. 이름: `cs-routine`, ID 자동 채워짐 (`cs-routine`)
4. **만들고 계속하기** → 역할 부여는 건너뛰기 → **완료**
5. 생성된 서비스 계정 이메일 복사. 형태: `cs-routine@sql-onion-cs.iam.gserviceaccount.com`
   → 이 이메일을 따로 메모해 둘 것 (시트·GA·AdSense 에 권한 줄 때 사용)

### 1.4 JSON 키 다운로드

1. 방금 만든 `cs-routine` 서비스 계정 이름 클릭
2. 상단 탭 **키** → **키 추가** → **새 키 만들기** → 유형: **JSON** → **만들기**
3. 자동으로 JSON 파일 다운로드됨. 파일명 예: `sql-onion-cs-1a2b3c4d5e.json`
4. 이 파일을 `service-account.json` 으로 이름 바꿔 안전한 곳에 보관 (Git 에 절대 커밋 금지)

> **이 JSON 분실 시**: 같은 자리에서 새 키 발급하면 됨. 옛 키는 자동 비활성화 안 되니 사용 안 하는 키는 휴지통 아이콘으로 삭제.

---

## 2. 시트에 서비스 계정 권한 부여

GCP 에서 만든 서비스 계정은 아직 우리 시트에 접근 못 함. **사람이 사용자에게 공유 권한 주듯이** 서비스 계정 이메일에도 권한을 줘야 합니다.

1. https://docs.google.com/spreadsheets/d/1ZetajcAO8lDHTbYF0EwfKoytJnDjI-SAqk8510XOIDg/edit 접속
2. 우측 상단 **공유** 버튼
3. 사용자 추가란에 서비스 계정 이메일 (`cs-routine@sql-onion-cs.iam.gserviceaccount.com`) 붙여넣기
4. 권한: **편집자** 선택 (시트에 상태 기록해야 하므로 보기 전용 X)
5. **알림 보내기** 체크 해제 → **공유**

### 2.1 시트 컬럼 추가

기존 컬럼 (`시각 / 회차 / 과목 / 문항번호 / 제보 내용 / 문제 제목 / UA`) 오른쪽에 **4개 컬럼** 추가:

| H | I | J | K |
|---|---|---|---|
| 상태 | 처리방향 | 해결일 | PR/커밋 링크 |

상태 값 종류 (루틴이 자동으로 채움):
- `PENDING` (기본값, 빈 칸 = PENDING 으로 간주)
- `RESOLVED` (자동 수정 + main push 완료)
- `NEEDS_REVIEW` (내용 문제, 사람 판단 필요)
- `AUTO_FIX_FAILED` (자동 수정 시도했으나 검증 게이트 실패)
- `WORKING_AS_DESIGNED` (제보 내용이 잘못 — 원본 문제 정상)

신규 행은 H 열을 비워두거나 `PENDING` 으로 두면 다음 루틴 실행 때 자동 처리됩니다.

---

## 3. Google Analytics 4 권한 부여

### 3.1 Property ID 확인

1. https://analytics.google.com/ 접속
2. 좌하단 **관리** (톱니바퀴 아이콘)
3. **속성 설정** → **속성 세부정보** → **속성 ID** 확인 (12자리 숫자, 예: `123456789`)
4. 메모해 둘 것

### 3.2 서비스 계정에 뷰어 권한

1. 같은 **관리** 화면에서 **속성 액세스 관리**
2. 우측 상단 **+** → **사용자 추가**
3. 이메일 주소: 서비스 계정 이메일 (`cs-routine@sql-onion-cs.iam.gserviceaccount.com`)
4. 역할: **뷰어** 만 체크 (편집자 X)
5. **추가**

---

## 4. AdSense 권한

AdSense 는 GA 와 달리 서비스 계정 이메일을 **사용자로 추가하는 기능이 없음**. 대신 **OAuth 2.0 위임** 또는 **API 키 + 호스트 URL 화이트리스트** 방식.

가장 간단한 방법은 **OAuth 토큰 1회 발급**:

1. https://www.google.com/adsense/ 로그인 (`hwsyg13@gmail.com` 동일 계정)
2. 좌측 **계정** → **계정 정보** → **고객 ID** 확인 (`pub-` 로 시작하는 16자리)
3. 메모해 둘 것

### 4.1 OAuth 동의 화면 설정 (1회)

1. GCP 콘솔 → 좌측 **API 및 서비스** → **OAuth 동의 화면**
2. 사용자 유형: **외부** → 만들기
3. 앱 이름: `SQL양파 CS 루틴`
4. 사용자 지원 이메일·개발자 연락처: `hwsyg13@gmail.com`
5. 저장 후 계속 → 범위 추가에서 **AdSense Management API → adsense.readonly** 만 체크
6. 테스트 사용자 추가: `hwsyg13@gmail.com`
7. 저장 → 게시 상태는 **테스트** 그대로 (개인용이라 게시 안 해도 OK)

### 4.2 OAuth 클라이언트 ID 생성

1. GCP 콘솔 → **API 및 서비스** → **사용자 인증 정보** → **+ 사용자 인증 정보 만들기** → **OAuth 클라이언트 ID**
2. 애플리케이션 유형: **데스크톱 앱**
3. 이름: `cs-routine-adsense`
4. 만들기 → 클라이언트 ID·비밀 다운로드 (JSON)

이 OAuth 클라이언트로 1회 인증해서 **refresh_token** 을 받아두면 그 이후 자동 갱신됨. 인증 헬퍼 스크립트는 `cs-sync.mjs` 안에 포함될 예정.

> **이 단계가 어렵게 느껴지면**: AdSense 부분만 빼고 일단 Sheets + GA + 이메일까지 가동시켜도 됩니다. AdSense 승인 상태는 일주일에 한 번 콘솔에서 확인하는 것으로 대체.

---

## 5. Resend (이메일 발송)

Resend = 개발자용 이메일 SaaS. 무료 tier 월 3000건, 도메인 인증 없이 자기 이메일로 발송 가능.

1. https://resend.com/signup → `hwsyg13@gmail.com` 으로 가입
2. 좌측 **API Keys** → **Create API Key** → 이름: `sql-onion-cs-routine`, 권한: **Sending access**
3. 발급된 키 (`re_...`) 복사. **이 화면 떠나면 다시 못 보니 즉시 메모**.
4. 가입 직후 자동으로 `onboarding@resend.dev` 발송 도메인이 활성화됨 — 이 주소로 보내면 자기 자신에게 도착함. 우리 용도엔 이걸로 충분.

---

## 6. GitHub Personal Access Token

루틴이 main 에 직접 push 하려면 토큰 필요.

1. https://github.com/settings/tokens?type=beta → **Generate new token (fine-grained)**
2. 이름: `sql-onion-cs-routine`
3. Expiration: **90 days** 권장 (만료 전 갱신 알림 옴)
4. Repository access → **Only select repositories** → `sql-onion` 선택
5. Repository permissions:
   - **Contents**: Read and write (✓)
   - **Pull requests**: Read and write (✓ — 자동 수정 실패 케이스 PR 백업용)
   - **Metadata**: Read-only (자동)
6. Generate token → `github_pat_...` 복사 메모

---

## 7. 시크릿 파일 정리

위에서 모은 6개 값을 한 파일에 모음. **Git 커밋 금지** (`.gitignore` 에 이미 `.env.*` 패턴 있음).

`<프로젝트루트>/.env.cs-routine`:

```bash
# Google Cloud (4-1.4)
GOOGLE_APPLICATION_CREDENTIALS=/absolute/path/to/service-account.json

# Google Sheet (이미 알고 있음)
CS_SHEET_ID=1ZetajcAO8lDHTbYF0EwfKoytJnDjI-SAqk8510XOIDg

# Google Analytics 4 (3-3.1)
GA4_PROPERTY_ID=123456789

# AdSense (4-4)
ADSENSE_PUBLISHER_ID=pub-XXXXXXXXXXXXXXXX
ADSENSE_OAUTH_CLIENT_JSON=/absolute/path/to/oauth-client.json
ADSENSE_REFRESH_TOKEN=  # 첫 실행 시 cs-sync 가 발급해서 여기에 자동 기록

# Resend (5)
RESEND_API_KEY=re_XXXXXXXXXXXXX
REPORT_EMAIL_TO=hwsyg13@gmail.com
REPORT_EMAIL_FROM=onboarding@resend.dev

# GitHub (6)
GH_PAT=github_pat_XXXXXXXXXXXXX
GH_REPO=hwsyg13-blip/sql-onion
```

이 파일을 schedule routine 등록 시 환경 변수로 그대로 주입.

---

## 다음 단계

이 가이드대로 셋업 끝나고 위 6개 시크릿이 손에 들어오면, [cs-routine-spec.md](cs-routine-spec.md) 명세에 따라 `scripts/cs-sync.mjs` 구현 + schedule routine 등록 단계로 넘어갑니다.

문제 생기면 어느 단계에서 막혔는지(예: "1.3 까지 했는데 1.4 에서 키 다운로드 버튼 안 보임") 알려주세요.
