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

/** ?adsdebug=1 쿼리스트링 있을 때만 점선 placeholder 표시 (개발자 미리보기용) */
function debugMode(): boolean {
  if (typeof window === 'undefined') return false;
  return /[?&]adsdebug=1/.test(window.location.search);
}

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

  // 실제 광고 슬롯 ID 가 없으면 사용자에게는 안 보이게 처리
  // (?adsdebug=1 쿼리로 우리만 확인 가능한 점선 박스 표시)
  if (!isLive) {
    if (!debugMode()) return null;
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
        광고 영역 · {slot}
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

/**
 * AdSidebar — 우측 사이드바 광고 (PC 와이드 화면 전용)
 * - viewport ≥ 1280px 에서만 노출 (SQL양파 컨테이너 max-width 1080px + 여유)
 * - position: fixed, top: 80px (TopNav 아래)
 * - 세로형 광고 단위 (160×600 또는 300×600)
 */
export const AdSidebar = ({ slot }: { slot: string }) => {
  const pushedRef = React.useRef(false);
  const isLive = Boolean(CLIENT && isRealSlotId(slot));
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const check = () => setShow(window.innerWidth >= 1280);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  React.useEffect(() => {
    if (!isLive || !show) return;
    ensureScript();
    if (pushedRef.current) return;
    pushedRef.current = true;
    const t = setTimeout(() => {
      try {
        const w: any = window;
        w.adsbygoogle = w.adsbygoogle || [];
        w.adsbygoogle.push({});
      } catch {}
    }, 100);
    return () => clearTimeout(t);
  }, [isLive, show]);

  if (!show) return null;

  if (!isLive) {
    if (!debugMode()) return null;
    return (
      <aside
        aria-hidden
        style={{
          position: 'fixed', top: 96, right: 16, width: 160, height: 600,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'var(--bg-muted)', border: '1px dashed var(--border-default)',
          borderRadius: 10, color: 'var(--fg-4)', fontSize: 12, fontWeight: 500,
          zIndex: 30,
        }}
      >
        사이드 광고 · {slot}
      </aside>
    );
  }

  return (
    <aside style={{ position: 'fixed', top: 96, right: 16, width: 160, zIndex: 30 }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'inline-block', width: 160, height: 600 }}
        data-ad-client={CLIENT}
        data-ad-slot={slot}
      />
    </aside>
  );
};
