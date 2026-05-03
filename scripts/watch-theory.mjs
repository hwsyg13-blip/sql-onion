#!/usr/bin/env node
// watch-theory.mjs — 이론 markdown 파일 변경 감지 + 자동 재빌드.
//
// 사용:
//   1) 한 터미널: npm run dev   (Vite dev 서버)
//   2) 다른 터미널: node scripts/watch-theory.mjs
//   3) Projects/SQLD 이론/*.md 편집 후 저장 → 자동으로 theoryContent.ts 재생성
//      → Vite HMR 가 감지해서 브라우저 자동 새로고침
//
// 라이브 미리보기 작업 흐름 — markdown 편집기 + 브라우저 두 창 띄우고 작업.

import { watch } from 'node:fs';
import { spawn } from 'node:child_process';
import path from 'node:path';

const SRC_DIR = 'C:/Users/hwsyg/OneDrive/문서/Claude/Projects/SQLD 이론';

console.log(`[watch-theory] watching ${SRC_DIR}/*.md`);
console.log(`[watch-theory] save markdown changes to trigger rebuild.`);
console.log(`[watch-theory] press Ctrl+C to stop.`);
console.log('');

let pending = false;
let running = false;

function rebuild(reason) {
  if (running) {
    pending = true;
    return;
  }
  running = true;
  const start = Date.now();
  console.log(`[watch-theory] ${reason} — rebuilding theoryContent.ts ...`);
  const proc = spawn('node', ['scripts/build-theory.mjs'], {
    stdio: 'inherit',
    shell: true,
  });
  proc.on('exit', (code) => {
    const elapsed = ((Date.now() - start) / 1000).toFixed(2);
    console.log(`[watch-theory] done in ${elapsed}s${code !== 0 ? ` (exit ${code})` : ''}`);
    console.log('');
    running = false;
    if (pending) {
      pending = false;
      rebuild('queued change');
    }
  });
}

// 초기 1회 빌드 (변경이 누적되어 있을 수 있음)
rebuild('initial build');

let debounceTimer = null;
watch(SRC_DIR, { recursive: false }, (event, filename) => {
  if (!filename || !filename.endsWith('.md')) return;
  // 100ms 디바운스 — 에디터가 빠르게 여러 번 트리거하는 경우 대비
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    rebuild(`${filename} changed`);
  }, 100);
});
