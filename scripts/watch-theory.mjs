#!/usr/bin/env node
// watch-theory.mjs — 이론 소스 파일 변경 감지 + 자동 재빌드.
//
// 감시 대상:
//   1) Projects/SQLD 이론/*.md          → build-theory.mjs 실행
//   2) Projects/SQLD 이론/_mockups/*.html → build-theory-html.mjs 실행
//
// 사용:
//   1) 한 터미널: npm run dev   (Vite dev 서버)
//   2) 다른 터미널: npm run watch:theory
//   3) markdown 또는 mockup HTML 편집 후 저장 → 자동으로 해당 ts 파일 재생성
//      → Vite HMR 가 감지해서 브라우저 자동 새로고침
//
// 라이브 미리보기 작업 흐름 — 편집기 + 브라우저 두 창 띄우고 작업.

import { watch } from 'node:fs';
import { spawn } from 'node:child_process';

const MD_DIR = 'C:/Users/hwsyg/OneDrive/문서/Claude/Projects/SQLD 이론';
const HTML_DIR = 'C:/Users/hwsyg/OneDrive/문서/Claude/Projects/SQLD 이론/_mockups';

console.log(`[watch-theory] watching:`);
console.log(`  - ${MD_DIR}/*.md`);
console.log(`  - ${HTML_DIR}/*.html`);
console.log(`[watch-theory] save changes to trigger rebuild. Ctrl+C to stop.`);
console.log('');

// 각 빌드 종류별로 독립적으로 큐잉
const queues = {
  md: { pending: false, running: false, script: 'scripts/build-theory.mjs', label: 'markdown → theoryContent.ts' },
  html: { pending: false, running: false, script: 'scripts/build-theory-html.mjs', label: 'mockup HTML → theoryHtml.ts' },
};

function rebuild(kind, reason) {
  const q = queues[kind];
  if (q.running) {
    q.pending = true;
    return;
  }
  q.running = true;
  const start = Date.now();
  console.log(`[watch-theory:${kind}] ${reason} — ${q.label} ...`);
  const proc = spawn('node', [q.script], { stdio: 'inherit', shell: true });
  proc.on('exit', (code) => {
    const elapsed = ((Date.now() - start) / 1000).toFixed(2);
    console.log(`[watch-theory:${kind}] done in ${elapsed}s${code !== 0 ? ` (exit ${code})` : ''}`);
    console.log('');
    q.running = false;
    if (q.pending) {
      q.pending = false;
      rebuild(kind, 'queued change');
    }
  });
}

// 초기 1회 빌드 — 누적된 변경이 있을 수 있음
rebuild('md', 'initial build');
rebuild('html', 'initial build');

// markdown watcher
let mdTimer = null;
watch(MD_DIR, { recursive: false }, (event, filename) => {
  if (!filename || !filename.endsWith('.md')) return;
  if (mdTimer) clearTimeout(mdTimer);
  mdTimer = setTimeout(() => rebuild('md', `${filename} changed`), 100);
});

// mockup HTML watcher
let htmlTimer = null;
watch(HTML_DIR, { recursive: false }, (event, filename) => {
  if (!filename || !filename.endsWith('.html')) return;
  if (htmlTimer) clearTimeout(htmlTimer);
  htmlTimer = setTimeout(() => rebuild('html', `${filename} changed`), 100);
});
