# AdSense 보고서 → BigQuery 자동 적재

매일 10:23(KST)에 GitHub Actions(`.github/workflows/adsense-report.yml`)가 AdSense 보고서를 받아 BigQuery `sql-onion-cs.adsense`에 쌓습니다.

| 테이블 | 단위 | 주요 값 |
|---|---|---|
| `daily_by_page` | 날짜 × 페이지 URL × 기기 | 페이지뷰, 광고 요청, 채워진 요청, 노출, 클릭, 예상 수익 |
| `daily_by_unit` | 날짜 × 광고 단위 | 광고 요청, 채워진 요청, 노출, 클릭, 예상 수익, 노출 가시성 |

- 최근 3일을 매번 다시 받아 날짜별로 통째로 교체합니다. AdSense 수치가 며칠에 걸쳐 확정되기 때문이고, 다시 받아도 중복되지 않습니다.
- 공개 저장소라서 Actions 로그에는 행 수만 남기고 수익 숫자는 남기지 않습니다.
- BigQuery가 결제 계정 없는 무료 모드(샌드박스)라 INSERT·DELETE 대신 로드 작업으로 적재합니다. 무료 모드에서는 파티션이 60일 뒤 자동으로 지워지니, 오래 보관하려면 결제 계정을 연결하세요.

## 처음 한 번 설정 (사이트 주인이 직접, 약 10분)

1. **API 켜기**
   - https://console.cloud.google.com/apis/library/adsense.googleapis.com?project=sql-onion-cs 에서 **사용**을 누릅니다.
2. **OAuth 동의 화면 만들기**
   - https://console.cloud.google.com/auth/overview?project=sql-onion-cs 에서 **시작하기**를 누릅니다.
   - 앱 이름은 아무거나(예: `SQLD양파 리포트`) 넣고, 지원 이메일은 본인 이메일, 대상은 **외부**를 고릅니다.
   - 만든 뒤 **대상(Audience)** 탭에서 **앱 게시**를 누릅니다. '테스트' 상태로 두면 토큰이 7일 뒤 만료되어 매주 다시 발급해야 합니다.
3. **클라이언트 만들기**
   - https://console.cloud.google.com/auth/clients?project=sql-onion-cs 에서 **클라이언트 만들기**를 누르고, 유형은 **데스크톱 앱**을 고릅니다.
   - 만든 뒤 **JSON 다운로드**를 누릅니다.
4. **토큰 발급** — 컴퓨터의 저장소 폴더에서 아래를 실행합니다.
   ```bash
   node scripts/adsense/auth.mjs ~/Downloads/client_secret_XXXX.json
   ```
   - 브라우저가 열리면 AdSense 계정으로 로그인합니다.
   - 'Google에서 확인하지 않은 앱' 화면이 나오면 **고급 → (앱 이름)(으)로 이동**을 누른 뒤 허용합니다. 본인만 쓰는 앱이라 정상입니다.
   - 터미널에 값 세 개가 출력됩니다.
5. **GitHub에 비밀값 등록**
   - https://github.com/hwsyg13-blip/sql-onion/settings/secrets/actions 에서 **New repository secret**으로 아래 세 개를 등록합니다.
   - `ADSENSE_CLIENT_ID`, `ADSENSE_CLIENT_SECRET`, `ADSENSE_REFRESH_TOKEN`
   - 채팅·이슈·코드에는 절대 붙여 넣지 마세요.
6. **첫 실행**
   - GitHub **Actions** 탭에서 **AdSense report → BigQuery**를 고르고 **Run workflow**를 누릅니다.
   - 기간을 처음부터 넓게 받으려면 days에 `30`을 넣습니다.

비밀값이 없으면 워크플로는 아무 일 없이 '건너뜀'으로 끝납니다.

## 로컬 점검

```bash
DRY_RUN_FILE=샘플.json node scripts/adsense/report-to-bq.mjs
```

API를 부르지 않고 적재할 행만 출력합니다.
