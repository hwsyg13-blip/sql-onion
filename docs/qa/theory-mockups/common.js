// SQLD양파 이론 시안 — 공통 스크립트
// 1. 스크롤 등장 애니메이션 (.reveal)
// 2. 코드블록 복사 버튼
// 3. mermaid 동적 로드 + 양파 그린 테마 (.mermaid 요소가 있을 때만)

(function () {
  // 스크롤 등장
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  // 코드 복사
  document.querySelectorAll('.copy-btn').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const pre = btn.closest('pre');
      if (!pre) return;
      const code = pre.querySelector('code')?.innerText || pre.innerText;
      try {
        await navigator.clipboard.writeText(code);
        const original = btn.textContent;
        btn.textContent = '복사됨';
        setTimeout(() => (btn.textContent = original), 1400);
      } catch (e) {
        // ignore
      }
    });
  });

  // mermaid 동적 로드 — .mermaid 요소가 있을 때만
  if (document.querySelector('.mermaid')) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js';
    script.onload = () => {
      if (!window.mermaid) return;
      window.mermaid.initialize({
        startOnLoad: true,
        securityLevel: 'loose',
        theme: 'base',
        themeVariables: {
          primaryColor: '#EBF5EC',
          primaryTextColor: '#1F2320',
          primaryBorderColor: '#A5D6A7',
          lineColor: '#2E7D32',
          secondaryColor: '#F0F7F1',
          tertiaryColor: '#FFFFFF',
          background: '#FFFFFF',
          mainBkg: '#EBF5EC',
          secondBkg: '#F0F7F1',
          fontFamily: '"Pretendard Variable", Pretendard, -apple-system, sans-serif',
          fontSize: '13px',
          edgeLabelBackground: '#FFFFFF',
          // ER diagram
          attributeBackgroundColorEven: '#F0F7F1',
          attributeBackgroundColorOdd: '#FFFFFF',
        },
        flowchart: { curve: 'basis', padding: 12, useMaxWidth: true },
        er: { useMaxWidth: true },
        sequence: { useMaxWidth: true, mirrorActors: false },
        state: { useMaxWidth: true },
      });
      // 처리 완료 표시 (CSS placeholder 대체용)
      document.querySelectorAll('.mermaid').forEach((el) => {
        const observer = new MutationObserver(() => {
          if (el.querySelector('svg')) {
            el.setAttribute('data-processed', 'true');
            observer.disconnect();
          }
        });
        observer.observe(el, { childList: true, subtree: true });
      });
    };
    document.head.appendChild(script);
  }
})();
