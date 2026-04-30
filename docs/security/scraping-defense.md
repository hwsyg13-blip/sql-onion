# 스크래핑 방어 운영 가이드

작성: 2026-04-28
적용 범위: SQLD양파 (Vite/React SPA, Vercel Free 배포)

## 한 줄 요약

SPA + 무료 접근 모델에선 **100% 차단 불가능**. 코드 + 인프라 다층 방어로 비용을 높여 보호 가치 없는 수준까지 떨어뜨리는 게 목표.

---

## 1. 현재 적용 (이 PR + Vercel Firewall)

### 1-0. Vercel Firewall (Pro plan, 대시보드/CLI) ★ 활성

3개 룰 게시됨 (`vercel firewall overview` 로 확인):

| 룰 | 조건 | 액션 |
|---|---|---|
| `general-rate-limit` | path starts with `/` | Rate limit **200 req/60s/IP** → 초과 시 challenge |
| `bundle-bombing-block` | path startsWith `/assets/` AND endsWith `.js` | Rate limit **30 req/60s/IP** → 초과 시 deny |
| `scraper-ua-deny` | User-Agent regex (curl/wget/python/scrapy/headless 등) | **Deny** |

라이브 검증 (2026-04-30):
```
curl -A "curl/8.0" sqldyangpa.com           → 403 ✓
curl -A "Mozilla Chrome 121" sqldyangpa.com → 200 ✓
curl -A "Googlebot/2.1" sqldyangpa.com      → 200 ✓
```

**관리**:
- 룰 추가/수정: `vercel firewall rules add/edit/disable <name>` → `vercel firewall publish`
- 차단 통계: Vercel 대시보드 → 프로젝트 → Firewall → Activity
- false positive 발견 시: `vercel firewall rules disable <name>` 즉시 비활성

### 1-1. `middleware.ts` (Vercel Edge)

요청이 정적 자산을 서빙받기 전에 edge 에서 가로채:

| 검사 | 조치 |
|---|---|
| 빈 User-Agent | 403 |
| 알려진 스크래퍼 UA (curl/wget/python/scrapy/headless 등) | 403 |
| 정상 검색엔진 (googlebot/bingbot/naverbot 등) | 통과 (SEO 보호) |
| IP당 분당 80req 초과 | 429 (best-effort, edge instance 별 격리) |

**한계**:
- UA 는 위조 가능 — 정상 브라우저 UA 를 흉내내면 통과
- Rate limit 은 같은 edge instance 안에서만 카운트 — 정확한 분산 카운트는 외부 store 필요

### 1-2. `public/robots.txt` 강화

알려진 SEO 봇 + AI 트레이닝 봇(`GPTBot`, `ClaudeBot`, `PerplexityBot`, `CCBot` 등) 명시적 차단.

**한계**:
- robots.txt 는 신사 협정 — 무시하는 봇은 어차피 무시
- 그래도 정상 봇(구글·네이버·OpenAI) 에는 명시적 의사 표시 가치 있음

### 1-3. 기존 자산 (이미 적용됨)

| 항목 | 위치 | 효과 |
|---|---|---|
| 우클릭/copy/cut/selectstart/dragstart 차단 | `src/main.tsx:11-27` | 일반 사용자의 ctrl+c 차단. devtools 우회 가능 |
| Security Headers (CSP/HSTS 등) | `vercel.json` | XSS / 클릭재킹 방어. 스크래핑은 무관 |

---

## 2. 권장 후속 조치 (인프라 — 사용자 작업 필요)

### A. Vercel Firewall — ✅ 이미 적용됨 (2026-04-30)

위 1-0 섹션 참조. 3개 룰 라이브.

### B. Cloudflare 앞단 — 15분 작업, 무료 ★ 추가 보호 검토 가능

Vercel 앞에 Cloudflare proxy 두면 WAF + Bot Fight Mode + 분산 rate limit 모두 무료:

1. cloudflare.com 가입 → `sqldyangpa.com` 추가 (Free plan)
2. NS 레코드를 가비아/네임칩에서 Cloudflare 가 알려준 nameservers 로 변경
3. Cloudflare 대시보드 → SSL/TLS → **Full (strict)** 모드
4. Security → **Bot Fight Mode** ON
5. Security → WAF → 사용자 정의 룰:
   ```
   (http.user_agent contains "scrapy") or (http.user_agent contains "curl") → Block
   (cf.client.bot) and not (cf.verified_bot) → Block
   ```
6. Security → Rate Limiting Rules:
   ```
   /assets/* > 100 req/min per IP → Block 1h
   * > 300 req/min per IP → Challenge
   ```

**주의**: Cloudflare 가 앞에 들어가면 Vercel `vercel.json` 의 IP 헤더(`x-real-ip`) 가 Cloudflare IP 가 됨. middleware 의 IP 추출 로직이 `cf-connecting-ip` 헤더로 변경 필요. (이번 PR 범위 외)

### C. 기타 옵션 (베타 종료 후 검토)

| 항목 | 비용 | ROI |
|---|---|---|
| `data/rounds/*` 동적 import (회차별 코드 분할) | 중 (LCP 개선 부수효과 있음) | 중 |
| 회차별 API 분리 + 인증 게이트 | 큼 (BETA_NO_AUTH 의존) | 큼 (Pro 회차만 적용 가능) |
| Watermark per user (invisible char 인코딩) | 작음 | 작음 — 차단 X, 추적용 |
| Honeypot 문제 (덫 답안) | 작음 | 작음 — 출처 식별만 |

---

## 3. 모니터링

### 차단 로그 확인

Vercel:
- 대시보드 → 프로젝트 → **Logs** → filter status=403 / 429
- middleware 의 `X-Block-Reason` 헤더로 차단 사유 분류

Cloudflare (적용 후):
- Security → Events → bot/rate-limit 차단 통계

### 의심 신호

- 단일 IP 가 분 당 100+ req 지속
- 같은 UA 패턴이 여러 IP 에서 동시 burst
- `/assets/index-*.js` 만 반복 요청 (번들 폭격)

---

## 4. 한계 인정 — 솔직한 평가

이 모든 방어가 막을 수 있는 것:
- ✅ 무성의한 자동화 스크립트 (UA 그대로, rate 제한 무시)
- ✅ AI 트레이닝 크롤러 (대부분 명시적 UA 사용)
- ✅ 일반 사용자의 우발적 ctrl+c
- ✅ SEO 정찰 봇

막지 못하는 것:
- ❌ devtools 로 직접 콘텐츠 복사하는 사용자
- ❌ 정상 브라우저 UA 흉내내고 분당 30req 이하로 천천히 긁는 봇
- ❌ Headless 브라우저 + IP rotation 조합 (Puppeteer + 프록시)
- ❌ 빌드 산출물 `index-*.js` 의 데이터 평문 추출

마지막 셋은 **회차 데이터를 클라이언트 번들에서 빼지 않는 한 구조적으로 불가능**. 베타 종료 + Pro 회차 분리 시점에 검토.

---

## 5. 변경 이력

| 일자 | 변경 | PR |
|---|---|---|
| 2026-04-28 | middleware.ts UA blocklist + 분당 80 rate limit, robots.txt 강화 | (이 PR) |
| 2026-04-30 | Vercel Firewall 3룰 라이브 — general-rate-limit / bundle-bombing-block / scraper-ua-deny | (이 PR 후속) |
