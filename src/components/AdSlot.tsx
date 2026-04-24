// @ts-nocheck
// Google AdSense — 매뉴얼 슬롯 배치
// 사용: <AdSlot slot="1234567890" /> — AdSense가 발급한 광고 단위 슬롯 ID
//
// VITE_ADSENSE_CLIENT 가 비어있으면 "광고 영역 (승인 후 노출)" 플레이스홀더 표시
// → 사용자가 레이아웃을 미리 확인할 수 있고, 승인 후 ID 입력하면 자동 전환
import React from 'react';

const CLIENT = import.meta.env.VITE_ADSENSE_CLIENT as string | undefined;

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

/** 실제 AdSense 슬롯 ID 는 숫자 문자열 (예: "1234567890"). 그 외 (HOME_BOTTOM 같은 라벨) 는 placeholder. */
const isRealSlotId = (s: string) => /^\d{6,}$/.test(s);

export const AdSlot = ({ slot, format = 'auto', style }: { slot: string; format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal' | 'vertical'; style?: React.CSSProperties }) => {
  const pushedRef = React.useRef(false);
  const isLive = Boolean(CLIENT && isRealSlotId(slot));

  React.useEffect(() => {
    if (!isLive) return;
    ensureScript();
    if (pushedRef.current) return;
    pushedRef.current = true;
    const t = setTimeout(() => {
      try {
        const w: any = window;
        w.adsbygoogle = w.adsbygoogle || [];
        w.adsbygoogle.push({});
      } catch (e) {
        console.warn('[AdSlot] push failed', e);
      }
    }, 100);
    return () => clearTimeout(t);
  }, [isLive]);

  // CLIENT 없거나 슬롯이 placeholder 라벨이면 점선 박스로 자리만 잡아 둔다
  if (!isLive) {
    const note = !CLIENT
      ? `광고 영역 · ${slot}`
      : `광고 영역 · ${slot} (실제 슬롯 ID 필요)`;
    return (
      <div
        aria-hidden
        data-ad-placeholder={slot}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 90,
          background: 'var(--bg-muted)',
          border: '1px dashed var(--border-default)',
          borderRadius: 10,
          color: 'var(--fg-4)',
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: '0.02em',
          ...style,
        }}
      >
        {note}
      </div>
    );
  }

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block', textAlign: 'center', minHeight: 90, ...style }}
      data-ad-client={CLIENT}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
    />
  );
};
