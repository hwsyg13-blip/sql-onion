// AdSense·BigQuery 읽기/쓰기용 리프레시 토큰을 한 번 발급받는 스크립트 (사이트 주인이 자기 컴퓨터에서 실행)
//
// 사용:
//   node scripts/adsense/auth.mjs <내려받은 OAuth 클라이언트 JSON 경로>
//
// - Google Cloud 콘솔에서 만든 'OAuth 클라이언트 ID (데스크톱 앱)' 의 JSON 을 넘긴다.
// - 브라우저가 열리면 AdSense 계정으로 로그인해 허용한다.
// - 마지막에 나오는 세 값을 GitHub 저장소 Settings → Secrets and variables → Actions 에 넣는다.
//   (채팅이나 이슈에 붙여 넣지 말 것 — 이 저장소는 공개 저장소다)
// - 외부 패키지 없이 Node 18+ 만으로 동작한다.
import { readFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { exec } from 'node:child_process';

const SCOPES = [
  'https://www.googleapis.com/auth/adsense.readonly', // 보고서 읽기
  'https://www.googleapis.com/auth/bigquery',         // sql-onion-cs.adsense 테이블에 적재
];

const file = process.argv[2];
if (!file) { console.error('사용: node scripts/adsense/auth.mjs <client_secret_....json>'); process.exit(1); }
const raw = JSON.parse(readFileSync(file, 'utf8'));
const cfg = raw.installed || raw.web;
if (!cfg?.client_id || !cfg?.client_secret) { console.error('JSON 에 client_id/client_secret 이 없습니다. "데스크톱 앱" 유형으로 만든 클라이언트인지 확인하세요.'); process.exit(1); }

const server = createServer();
server.listen(0, '127.0.0.1', () => {
  const { port } = server.address();
  const redirectUri = `http://127.0.0.1:${port}`;
  const url = 'https://accounts.google.com/o/oauth2/v2/auth?' + new URLSearchParams({
    client_id: cfg.client_id, redirect_uri: redirectUri, response_type: 'code',
    scope: SCOPES.join(' '), access_type: 'offline', prompt: 'consent',
  });
  console.log('\n아래 주소가 브라우저에서 열립니다. 안 열리면 직접 복사해 여세요:\n\n' + url + '\n');
  const opener = process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'start ""' : 'xdg-open';
  exec(`${opener} "${url}"`, () => {});

  server.on('request', async (req, res) => {
    const q = new URL(req.url, redirectUri).searchParams;
    if (!q.get('code')) { res.end(q.get('error') ? `오류: ${q.get('error')}` : ''); return; }
    try {
      const r = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ code: q.get('code'), client_id: cfg.client_id, client_secret: cfg.client_secret, redirect_uri: redirectUri, grant_type: 'authorization_code' }),
      });
      const tok = await r.json();
      if (!tok.refresh_token) throw new Error(JSON.stringify(tok));
      res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
      res.end('<p>완료했습니다. 터미널로 돌아가세요.</p>');
      console.log('완료. 아래 세 값을 GitHub → Settings → Secrets and variables → Actions → New repository secret 으로 넣으세요.\n');
      console.log('  ADSENSE_CLIENT_ID     =', cfg.client_id);
      console.log('  ADSENSE_CLIENT_SECRET =', cfg.client_secret);
      console.log('  ADSENSE_REFRESH_TOKEN =', tok.refresh_token);
      console.log('\n(이 값들은 비밀번호와 같습니다. 채팅·이슈·코드에 붙여 넣지 마세요.)');
    } catch (e) {
      res.end('토큰 교환 실패 — 터미널을 확인하세요.');
      console.error('토큰 교환 실패:', e.message);
      process.exitCode = 1;
    } finally {
      server.close();
    }
  });
});
