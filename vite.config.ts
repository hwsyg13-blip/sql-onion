import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
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
