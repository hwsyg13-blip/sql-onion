# SQL 양파 — 배포 준비 가이드

이 폴더에는 Claude 코딩 에이전트가 Vite + React + Supabase 로 포팅한 실서비스 버전이 들어있어요. 이제 **직접 한 번만** 거쳐야 하는 외부 설정이 몇 개 남아있습니다. 순서대로 따라해주세요.

전제: Windows 11, PowerShell 또는 명령 프롬프트에서 실행.

---

## 0. Node.js 설치

아직 Node 가 설치되어 있지 않아요. 아래 링크에서 **LTS 버전**을 받아 설치하세요.

- https://nodejs.org/ko/download  → "LTS" 다운로드 → 설치 파일 실행 → 기본값 그대로 Next

설치 후 **PowerShell을 새로 연 뒤** 확인:
```powershell
node -v
npm -v
```
두 명령이 버전 번호를 출력하면 OK.

---

## 1. 의존성 설치

```powershell
cd C:\dev\sql-onion
npm install
```

5~10분 정도 걸려요. 완료되면 `node_modules` 폴더가 생깁니다.

개발 서버 로컬 실행:
```powershell
npm run dev
```
브라우저에서 `http://localhost:5173` 으로 접속하면 **지금 당장** 디자인 그대로 홈화면이 보입니다. (로그인은 아직 설정 전이라 Google 버튼을 눌러도 동작하지 않아요.)

---

## 2. Supabase 프로젝트 만들기

1. https://supabase.com 가입 → **New project** → 프로젝트 이름 `sql-onion`, 리전은 **Northeast Asia (Seoul)**, DB 비밀번호는 기억해두기
2. 프로젝트 생성 후 좌측 **Settings → API** 페이지에서 두 값 복사:
   - **Project URL** → `VITE_SUPABASE_URL`
   - **anon public** key → `VITE_SUPABASE_ANON_KEY`
   - **service_role** key → `SUPABASE_SERVICE_ROLE_KEY` (나중에 Vercel 에만, 로컬 `.env.local` 에는 굳이 안 넣어도 됨)

3. `.env.local` 파일 만들기 (프로젝트 루트 `C:\dev\sql-onion\` 에):
   - `.env.example` 을 복사해서 `.env.local` 로 이름 바꾸고 값 채우기
   - PowerShell: `copy .env.example .env.local` 후 메모장으로 편집

4. **DB 스키마 올리기**. Supabase 대시보드 → 좌측 **SQL Editor** → **+ New query** → `supabase/migrations/0001_init.sql` 내용 전체 복사해서 붙여넣기 → **Run**. "Success" 뜨면 완료.

---

## 3. Google OAuth 연결

1. https://console.cloud.google.com 에서 프로젝트 하나 만들기 (이름 아무거나)
2. 좌측 메뉴 **API 및 서비스 → OAuth 동의 화면**
   - User Type: **외부(External)**, 앱 이름: `SQL 양파`, 지원 이메일: 본인 이메일
   - 범위(Scopes)는 기본값 그대로 Save
   - 테스트 사용자에 본인 이메일 추가
3. **사용자 인증 정보(Credentials) → + 사용자 인증 정보 만들기 → OAuth 클라이언트 ID**
   - 애플리케이션 유형: **웹 애플리케이션**
   - 이름: `SQL 양파 Web`
   - **승인된 리디렉션 URI** 에 Supabase 가 알려주는 URL 을 추가. Supabase 대시보드 → **Authentication → Providers → Google** 항목에 "Callback URL (for OAuth)" 로 뜨는 값 그대로 복사 (보통 `https://<프로젝트>.supabase.co/auth/v1/callback`)
4. 생성하면 **Client ID / Client Secret** 이 보입니다. Supabase → **Authentication → Providers → Google** 으로 돌아가서:
   - Google 활성화 토글
   - Client ID, Client Secret 붙여넣기 → Save

5. Supabase → **Authentication → URL Configuration**
   - **Site URL**: `http://localhost:5173` (로컬 테스트용). 나중에 Vercel 배포되면 `https://내-앱.vercel.app` 으로 변경
   - **Redirect URLs** 에 아래 모두 추가:
     - `http://localhost:5173`
     - `https://*.vercel.app` (Preview 배포용, 와일드카드)
     - Production URL (나중에)

6. `npm run dev` 재실행 → 홈화면에서 "로그인" 클릭 → "Google 계정으로 계속하기" → 본인 구글 계정으로 로그인 → 성공하면 TopNav 에 내 아바타가 보여야 합니다.

---

## 4. PortOne(포트원) 결제 연동 — 테스트 모드

결제는 **두 단계**로 진행해요. 지금 바로 되는 건 **테스트 모드**까지. 실제 카카오페이 결제는 사업자 등록과 가맹 심사가 끝난 뒤에 가능합니다.

### 4-1. 테스트 모드 (즉시 가능)

1. https://portone.io 가입 → 대시보드 접속
2. **상점** 생성 → **Store ID** 복사 → `.env.local` 의 `VITE_PORTONE_STORE_ID` 에 붙여넣기
3. **채널 관리 → + 채널 추가 → 카카오페이 → 테스트 모드**. 생성되면 **Channel Key** 복사 → `VITE_PORTONE_CHANNEL_KEY_KAKAO` 에 붙여넣기
4. `npm run dev` 재실행 → 로그인 → 요금제 → "Pro로 업그레이드" → 카카오페이 테스트 결제창이 뜨면 성공

### 4-2. 실결제 전환 (며칠 걸림)

PortOne 이 결제를 대신 받으려면 PG사 심사가 필요합니다:
1. **사업자등록증 발급** (홈택스 → 사업자등록 신청. 개인사업자(간이과세자) 가능)
2. PortOne 대시보드 → **계약 → 카카오페이 신청** (+ 원하면 네이버페이도)
3. 승인되면 **운영(실서비스) Channel Key** 발급됨 → Vercel 환경변수에 교체

**⚠️ 이 과정은 3~10 영업일** 걸립니다. 코드는 이미 준비되어 있으니 테스트 키로 시연하다가 승인되면 키만 바꾸면 됩니다.

---

## 5. GitHub + Vercel 배포

### 5-1. GitHub 리포지토리 만들기

```powershell
cd C:\dev\sql-onion
git init
git add .
git commit -m "chore: initial import from claude.ai design"
```

https://github.com/new 에서 **빈** 리포지토리 생성 (README, .gitignore 체크 해제). 리포지토리 URL 복사해서:
```powershell
git remote add origin https://github.com/YOUR_USERNAME/sql-onion.git
git branch -M main
git push -u origin main
```

### 5-2. Vercel 연결

1. https://vercel.com 가입 (GitHub 로 로그인)
2. **Add New → Project → Import Git Repository → sql-onion 선택**
3. 프레임워크는 자동 감지 (Vite). Build Command / Output 그대로 두기
4. **Environment Variables** 섹션에서 하나씩 붙여넣기:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `VITE_PORTONE_STORE_ID`
   - `VITE_PORTONE_CHANNEL_KEY_KAKAO`
   - `SUPABASE_SERVICE_ROLE_KEY` (아직은 안 써도 되지만 나중에 webhook 용)
   - `PORTONE_API_SECRET` (포트원 → API Keys 메뉴에서 발급)

   각 변수 체크박스에 Production / Preview / Development 모두 체크.

5. **Deploy** 클릭 → 2~3 분 후 `https://sql-onion-XXXX.vercel.app` URL 이 생깁니다. 접속해서 홈화면이 뜨면 🎉
6. Supabase → Authentication → URL Configuration 의 **Site URL** 과 **Redirect URLs** 에 이 Vercel URL 도 추가해주세요. 그래야 배포된 사이트에서 구글 로그인이 동작합니다.

### 5-3. 도메인 (선택)

원하는 도메인(예: `sqlonion.kr`)을 가비아·후이즈·Namecheap 에서 구입 → Vercel 프로젝트 **Settings → Domains** 에서 추가 → DNS 레코드 2줄 세팅. 끝.

---

## 6. 동작 확인 체크리스트

로컬(`npm run dev`) 이나 Vercel URL 에서:

- [ ] 홈화면이 디자인대로 뜬다
- [ ] 다크모드 토글이 동작한다 (TopNav 달 아이콘)
- [ ] "이론" 메뉴에서 챕터 c11~c27 이 모두 열린다
- [ ] "기출문제" 메뉴에서 2023-1 회 CBT 가 풀린다 → 제출하면 결과 화면
- [ ] CBT 풀고 나서 홈으로 돌아오면 "정답률" "완료 시험" 숫자가 반영됨
- [ ] 로그인 → 구글 실계정으로 성공, TopNav 에 내 이름·아바타
- [ ] 로그아웃 → 로그인 전 상태로
- [ ] 요금제 → "Pro로 업그레이드" → PortOne 테스트 결제창 → 승인 → TopNav 에 PRO 뱃지

---

## 7. 트러블슈팅

**"supabase 설정이 없어" 경고가 콘솔에 뜸**
→ `.env.local` 이 프로젝트 루트에 있는지 확인. 값 편집 후 `npm run dev` 재시작.

**Google 로그인 후 "redirect_uri_mismatch"**
→ Supabase 가 알려준 callback URL 이 Google Cloud Console 의 "승인된 리디렉션 URI" 에 정확히 일치해야 함. 끝의 슬래시도 맞춰야 해요.

**로컬은 되는데 Vercel 배포판에서 로그인 실패**
→ Supabase → Authentication → URL Configuration 의 **Redirect URLs** 에 Vercel URL 이 추가됐는지 확인.

**PortOne 결제창에서 "storeId 불일치"**
→ 테스트/운영 채널 키를 헷갈려 썼을 가능성. 대시보드에서 채널 상세 보고 매칭.

**`npm install` 이 계속 실패**
→ OneDrive 경로에서 설치하지 마세요. 반드시 `C:\dev\sql-onion\` 에서.

---

## 8. Google AdSense 연결

배포된 사이트에 광고를 붙이려면:

### 8-1. AdSense 가입 (승인 1~4주)
1. https://www.google.com/adsense 접속 → 가입
2. **사이트 추가**: `https://sql-onion.vercel.app` (나중에 커스텀 도메인 생기면 교체)
3. 승인 심사를 위해 Google이 요구하는 것:
   - 개인정보처리방침 페이지 ✅ 이미 있음 (`https://sql-onion.vercel.app/privacy.html`)
   - 독자적 콘텐츠 ✅ 기출 374문항
   - 일정 수준의 방문자 트래픽 (Google이 암묵적으로 요구)
4. 승인되면 퍼블리셔 ID `ca-pub-XXXXXXXXXXXXXXXX` 발급

### 8-2. ads.txt 업데이트 (승인 후 즉시)
AdSense 대시보드 → **사이트 → ads.txt 상태** 에서 안내하는 한 줄을 복사해서 `public/ads.txt` 파일에 붙여넣기. 예:

```
google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0
```

### 8-3. 광고 단위 생성 + 퍼블리셔 ID 주입
1. AdSense 대시보드 → **광고 → 광고 단위별 → 디스플레이 광고** 생성 3개
   - 이름: `HOME_BOTTOM`, `EXAMS_BOTTOM`, `RESULT_TOP`
   - 각 광고 단위의 슬롯 ID(예: `1234567890`) 기록
2. `src/components/AdSlot.tsx` 를 사용하는 3곳의 `slot="..."` 값을 각 슬롯 ID로 교체 (현재는 `"HOME_BOTTOM"` 등 플레이스홀더)
3. Vercel 환경변수에 퍼블리셔 ID 추가:
   - Vercel 대시보드 → Settings → Environment Variables
   - `VITE_ADSENSE_CLIENT = ca-pub-XXXXXXXXXXXXXXXX` (Production / Preview / Development 모두 체크)
4. 재배포: `git commit --allow-empty -m "chore: enable AdSense" && git push`

### 8-4. 자동 비활성 보호
`VITE_ADSENSE_CLIENT` 값이 없으면 `<AdSlot>` 컴포넌트가 아무것도 렌더링하지 않습니다 (스크립트 로드도 안 됨). 승인 전이나 로컬 개발 시에는 신경 안 써도 됩니다.

---

## 9. 다음에 추가할 것들 (이번 작업에는 포함 안 됨)

- 카카오·네이버 **로그인** (결제 아닌 OAuth)
- PortOne webhook 으로 결제 보안 강화 (`api/portone-webhook.ts`)
- 퀴즈 답안 제출 시 `quiz_attempts` 실제 저장 (CBTScreens/MockScreens 내부에서 supabase insert 호출 추가)
- 이론 "새로 해설" 추가 같은 콘텐츠 업데이트 흐름 (현재는 코드 수정 후 배포)
- PWA / 모바일 앱 / 다국어

필요해지면 그때 이어서 해요.
