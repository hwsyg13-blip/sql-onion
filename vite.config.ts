import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { spawn } from 'node:child_process';

// ───────────────────────────────────────────────────────────────────────────
// 이론 인라인 편집 dev plugin
// ───────────────────────────────────────────────────────────────────────────
// dev 서버에서 ?edit=1 모드로 본문을 contentEditable 로 편집한 뒤 저장하면
// POST /api/save-theory 로 들어오는데, 이 핸들러가:
//   1) 챕터 id(c111) → mockup 파일명(1-1-1_*.html) 매핑
//   2) mockup HTML 의 <article class="theory-md">...</article> 본문을 교체
//   3) build-theory-html.mjs 자동 재실행 → theoryHtml.ts 갱신
//   4) Vite HMR 가 감지해서 브라우저 자동 새로고침
//
// 운영 빌드(`vite build`)에는 dev 서버만 동작하는 plugin 이라 영향 없음.
const MOCKUPS_DIR = 'C:/Users/hwsyg/OneDrive/문서/Claude/Projects/SQLD 이론/_mockups';

function theoryEditPlugin() {
  return {
    name: 'theory-edit',
    configureServer(server: any) {
      server.middlewares.use('/api/save-theory', async (req: any, res: any, next: any) => {
        if (req.method !== 'POST') return next();
        const chunks: Buffer[] = [];
        try {
          for await (const chunk of req) chunks.push(chunk);
          const body = JSON.parse(Buffer.concat(chunks).toString('utf8'));
          const chapterId = String(body.chapterId || '');
          const articleHtml = String(body.articleHtml || '');
          if (!/^c\d{3}$/.test(chapterId)) {
            res.statusCode = 400;
            return res.end(JSON.stringify({ ok: false, error: 'invalid chapterId' }));
          }
          // c111 → 1-1-1
          const num = chapterId.slice(1).split('').join('-');
          if (!existsSync(MOCKUPS_DIR)) {
            res.statusCode = 500;
            return res.end(JSON.stringify({ ok: false, error: 'mockups dir missing' }));
          }
          const files = readdirSync(MOCKUPS_DIR);
          const file = files.find((f) => f.startsWith(num + '_') && f.endsWith('.html'));
          if (!file) {
            res.statusCode = 404;
            return res.end(JSON.stringify({ ok: false, error: 'chapter file not found', num }));
          }
          const fullPath = join(MOCKUPS_DIR, file);
          const raw = readFileSync(fullPath, 'utf8');
          const m = raw.match(/<article class="theory-md">[\s\S]*?<\/article>/);
          if (!m) {
            res.statusCode = 500;
            return res.end(JSON.stringify({ ok: false, error: 'article tag missing in mockup' }));
          }
          // <a href="#" data-chapter="cXYZ"> 형태(SPA 변환 후)를
          // <a href="./X-Y-Z_*.html"> 형태(원본 mockup) 로 되돌려서 저장
          const restoredLinks = articleHtml.replace(
            /<a\s+([^>]*?)href="#"\s+data-chapter="(c\d{3})"/g,
            (_full, attrs: string, cid: string) => {
              const cnum = cid.slice(1).split('').join('-');
              const target = files.find((f) => f.startsWith(cnum + '_') && f.endsWith('.html'));
              const href = target ? `./${target}` : '#';
              return `<a ${attrs}href="${href}"`;
            }
          );
          const replaced = raw.replace(
            /<article class="theory-md">[\s\S]*?<\/article>/,
            `<article class="theory-md">${restoredLinks}</article>`
          );
          writeFileSync(fullPath, replaced, 'utf8');

          // build-theory-html.mjs 비동기 실행 (응답 먼저 보내고 vite 가 HMR)
          const proc = spawn('node', ['scripts/build-theory-html.mjs'], {
            stdio: 'ignore',
            shell: true,
          });
          proc.on('error', () => {});

          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ ok: true, file }));
        } catch (e: any) {
          res.statusCode = 500;
          res.end(JSON.stringify({ ok: false, error: String(e?.message || e) }));
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), theoryEditPlugin()],
  server: { port: 5173 },
  build: {
    // manualChunks 로 메인 entry chunk 분할 — 홈/CBT 등 가벼운 화면의 LCP 보호.
    // mermaid 와 그 transitive 시각화 deps(wardley/katex/cytoscape) 는 Rollup 이
    // 자동으로 async chunk 로 분리하니 건드리지 않음 (TheoryScreens 가 mermaid 를
    // 동적 import 하기 때문).
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (!id.includes('node_modules')) return undefined;
          // 코어 react — 거의 변하지 않아 별도 chunk 로 캐시 효율 ↑
          if (
            id.includes('/react/') ||
            id.includes('/react-dom/') ||
            id.includes('/scheduler/')
          ) {
            return 'react-vendor';
          }
          // syntax highlighting (이론 본문 SQL 코드블럭)
          if (id.includes('/highlight.js/')) return 'highlight';
          if (id.includes('/marked/') || id.includes('/marked-highlight/')) return 'marked';
          // 베타 동안엔 거의 사용 X — 별도 chunk 로 떼어 메인 entry 슬림화
          if (id.includes('/@supabase/')) return 'supabase';
          if (id.includes('/@portone/')) return 'portone';
          return undefined;
        },
      },
    },
  },
});
