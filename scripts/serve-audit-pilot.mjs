// 정적 파일 서버 (포트 5174). docs/qa/cbt-mock-audit-pilot.html 미리보기용.
// Vite 의 SPA fallback 을 우회해서 HTML 을 그대로 서빙.
// 이미지는 public/ 아래에 있으므로 /cbt-images/... 요청은 public/cbt-images/... 로 매핑.

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const ROOT = path.resolve('.');
const PORT = 5174;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
};

const server = http.createServer((req, res) => {
  const u = url.parse(req.url);
  let p = decodeURIComponent(u.pathname || '/');
  if (p === '/') p = '/docs/qa/cbt-mock-audit-pilot.html';
  // 이미지 src 가 /cbt-images/... 로 들어오면 public/cbt-images 로 매핑
  let fp;
  if (p.startsWith('/cbt-images/') || p.startsWith('/images/')) {
    fp = path.join(ROOT, 'public', p);
  } else {
    fp = path.join(ROOT, p);
  }
  // path traversal 방지
  if (!fp.startsWith(ROOT)) {
    res.writeHead(403); res.end('forbidden'); return;
  }
  fs.stat(fp, (err, st) => {
    if (err || !st.isFile()) {
      res.writeHead(404); res.end('not found: ' + p); return;
    }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(fp).toLowerCase()] || 'application/octet-stream' });
    fs.createReadStream(fp).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`audit-pilot 정적 서버 → http://localhost:${PORT}/`);
  console.log(`  / → docs/qa/cbt-mock-audit-pilot.html`);
  console.log(`  /cbt-images/* → public/cbt-images/*`);
});
