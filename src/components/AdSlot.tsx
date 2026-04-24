// @ts-nocheck
// Google AdSense — manual slot placement
// 사용: <AdSlot slot="1234567890" /> — AdSense에서 발급한 광고 단위 슬롯 ID
//
// VITE_ADSENSE_CLIENT (ca-pub-XXXXX) 가 비어있으면 렌더링하지 않음 → 승인 전에는 자동 비활성
import React from 'react';

const CLIENT = import.meta.env.VITE_ADSENSE_CLIENT as string | undefined;

// 페이지 최초 1회만 AdSense 스크립트 로드
let scriptLoaded = false;
function ensureScript() {
  if (scriptLoaded || !CLIENT || typeof document === 'undefined') return;
  if (document.querySelector('script[data-adsense="1"]')) { scriptLoaded = true; return; }
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(CLIENT)}`;
  s.crossOrigin = 'anonymous';
  s.setAttribute('data-adsense', '1');
  document.head.appendChild(s);
  scriptLoaded = true;
}

export const AdSlot = ({ slot, format = 'auto', style }: { slot: string; format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal' | 'vertical'; style?: React.CSSProperties }) => {
  const ref = React.useRef<HTMLModElement>(null);
  const pushedRef = React.useRef(false);

  React.useEffect(() => {
    if (!CLIENT) return;
    ensureScript();
    // Push after element mounts, once
    if (pushedRef.current) return;
    pushedRef.current = true;
    const t = setTimeout(() => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const w: any = window;
        w.adsbygoogle = w.adsbygoogle || [];
        w.adsbygoogle.push({});
      } catch (e) {
        console.warn('[AdSlot] push failed', e);
      }
    }, 100);
    return () => clearTimeout(t);
  }, []);

  // 환경변수 없으면 아예 렌더 안 함 (빈 공간도 안 잡음)
  if (!CLIENT) return null;

  return (
    <ins
      ref={ref as any}
      className="adsbygoogle"
      style={{ display: 'block', textAlign: 'center', minHeight: 90, ...style }}
      data-ad-client={CLIENT}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
    />
  );
};
