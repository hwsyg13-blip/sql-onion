// @ts-nocheck
import React from 'react';
import { marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js/lib/core';
import sql from 'highlight.js/lib/languages/sql';
import bash from 'highlight.js/lib/languages/bash';
import { Btn, Tag, Ic } from '../components/Atoms';
import { THEORY, THEORY_BODY } from '../data/theory';
import { QUIZ_BANK } from '../data/quizBank';
import { CONCEPT_QUIZ } from '../data/conceptQuiz';
import { recordTheoryView } from '../lib/progress';
import { AdSlot } from '../components/AdSlot';
import { MiniTestSidebar } from '../components/MiniTestSidebar';
import { OX_QUIZ } from '../data/miniTest/ox';
import { EXAM_MAPPING } from '../data/miniTest/examMapping';
import { THEORY_HTML } from '../data/theoryHtml';
import { trackEvent } from '../lib/analytics';
import { BugReportModal } from '../components/BugReportModal';

// highlight.js 등록 — SQL 위주
hljs.registerLanguage('sql', sql);
hljs.registerLanguage('bash', bash);

// marked + 코드 하이라이트 (mermaid 는 패스 — 별도 렌더)
marked.use(markedHighlight({
  langPrefix: 'hljs language-',
  highlight(code, lang) {
    if (!lang || lang === 'mermaid') return code;
    if (hljs.getLanguage(lang)) {
      try { return hljs.highlight(code, { language: lang, ignoreIllegals: true }).value; }
      catch { return code; }
    }
    return code;
  },
}));
marked.setOptions({ gfm: true, breaks: true });

// 섹션 라벨 → CSS 클래스 매핑
function labelToClass(label) {
  const t = label.replace(/\s/g, '');
  if (t.includes('핵심 요약'.replace(/\s/g, ''))) return 'sec-summary';
  if (t.includes('일상비유') || t.includes('비유')) return 'sec-analogy';
  if (t.includes('개념도식화') || t.includes('도식화')) return 'sec-diagram';
  if (t.includes('SQL실전') || t.includes('SQL')) return 'sec-sql';
  if (t.includes('Before') || t.includes('After')) return 'sec-compare';
  if (t.includes('시험출제포인트') || t.includes('시험')) return 'sec-exam';
  return 'sec-other';
}

// ─────────────────────────────────────────────────────────────
// 이론 목록 화면 (과목 → 서브섹션 → 챕터)
// ─────────────────────────────────────────────────────────────
export const TheoryListScreen = ({ onNavigate }) => (
  <div style={{ maxWidth: 960, margin: '0 auto', padding: '32px 28px 80px' }}>
    <h1 style={{ fontSize: 32, fontWeight: 800, color: 'var(--fg-1)', margin: '0 0 6px', letterSpacing: '-0.02em' }}>이론</h1>
    <p style={{ fontSize: 14, color: 'var(--fg-3)', margin: '0 0 28px' }}>과목 → 장 → 절 단위로 개념을 차근차근 익혀봐요</p>

    {THEORY.subjects.map((sub, sIdx) => (
      <React.Fragment key={sub.id}>
        <section style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 18 }}>
            <Tag tone="green">{sub.code}</Tag>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: 'var(--fg-1)', margin: 0 }}>{sub.title}</h2>
          </div>

          {sub.sections.map((sec) => (
            <div key={sec.id} style={{ marginBottom: 24 }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--point-600)', margin: '0 0 10px', letterSpacing: '-0.01em' }}>
                {sec.title}
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 10 }}>
                {sec.chapters.map((ch) => (
                  <button key={ch.id} onClick={() => onNavigate('theory-detail', ch.id)} style={{
                    textAlign: 'left', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                    borderRadius: 12, padding: '14px 16px', cursor: 'pointer', fontFamily: 'inherit',
                    boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column', gap: 6,
                    transition: 'border-color 150ms',
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--point-500)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}>
                    <div style={{ fontSize: 15.5, fontWeight: 700, color: 'var(--fg-1)' }}>{ch.title}</div>
                    <div style={{ fontSize: 12, color: 'var(--fg-3)', lineHeight: 1.5 }}>{ch.oneLine}</div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* 광고 슬롯 — 1과목과 2과목 사이 */}
        {sIdx === 0 && (
          <div style={{ marginBottom: 32 }}>
            <AdSlot slot="THEORY_LIST_MID" format="horizontal" />
          </div>
        )}
      </React.Fragment>
    ))}

    {/* 광고 슬롯 — 이론 목록 하단 */}
    <div style={{ marginTop: 32 }}>
      <AdSlot slot="THEORY_LIST_BOTTOM" format="horizontal" />
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────
// 이론 상세 화면 — 마크다운 본문 렌더링
// ─────────────────────────────────────────────────────────────
function findChapter(chapterId) {
  for (const sub of THEORY.subjects) {
    for (const sec of sub.sections) {
      const ch = sec.chapters.find((c) => c.id === chapterId);
      if (ch) return { sub, sec, ch };
    }
  }
  return null;
}

function buildToc(md) {
  // h2 헤더만 골라 ToC 생성
  const re = /^##\s+(.+)$/gm;
  const items = [];
  let m;
  while ((m = re.exec(md))) {
    const title = m[1].replace(/\[|\]/g, '').trim();
    const slug = 's' + items.length;
    items.push({ slug, title });
  }
  return items;
}

function renderMd(md) {
  let i = 0;
  // 1) 각 h2 에 id 부여 + 섹션 라벨 클래스 부여 (`## [핵심 요약] ...` 같은 헤더)
  const preprocessed = md.replace(/^##\s+(.+)$/gm, (m, t) => {
    const id = 's' + i++;
    const lm = t.match(/^\[(.+?)\]\s*(.*)$/);
    if (lm) {
      const label = lm[1].trim();
      const rest = lm[2].trim();
      const cls = labelToClass(label);
      const restHtml = rest ? `<span class="label-rest">${rest}</span>` : '';
      return `<h2 id="${id}" class="section-label ${cls}"><span class="label-tag">${label}</span>${restHtml}</h2>`;
    }
    return `<h2 id="${id}">${t}</h2>`;
  });

  let html = marked.parse(preprocessed);

  // 2) 코드블록 후처리:
  //    - mermaid → <div class="mermaid"> (별도 렌더)
  //    - 언어 없는 ASCII → .diagram-card
  //    - 그 외 (sql/bash 등) → 다크 코드 카드 (이미 hljs 색칠됨)
  html = html.replace(
    /<pre><code(\s+class="(?:hljs )?language-([\w-]+)")?>([\s\S]*?)<\/code><\/pre>/g,
    (m, _langAttr, lang, content) => {
      if (lang === 'mermaid') {
        // 엔티티 디코드 (<,>,&,") — mermaid 가 원본 텍스트를 받음
        const text = content
          .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
          .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
        return `<div class="mermaid">${text}</div>`;
      }
      if (!lang) {
        return `<div class="diagram-card"><pre>${content}</pre></div>`;
      }
      return m;
    }
  );

  return html;
}

export const TheoryDetailScreen = ({ chapterId, onNavigate }) => {
  React.useEffect(() => {
    recordTheoryView(chapterId);
    trackEvent('theory_open', { chapter: chapterId });
  }, [chapterId]);

  const ctx = findChapter(chapterId);
  // 새 시안 HTML 우선, 없으면 기존 마크다운 fallback
  const newHtml = THEORY_HTML[chapterId];
  const md = THEORY_BODY[chapterId];
  const bodyRef = React.useRef<HTMLDivElement>(null);
  const [zoomedSvg, setZoomedSvg] = React.useState<string | null>(null);
  const [bugOpen, setBugOpen] = React.useState(false);

  // 모바일 레이아웃 감지 — OX 퀴즈를 hero 아래로 이동시키기 위함
  // (theory-detail-grid 의 1fr 전환 breakpoint 와 동일: 900px)
  const [isMobileLayout, setIsMobileLayout] = React.useState(false);
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(max-width: 900px)');
    setIsMobileLayout(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobileLayout(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  if (!ctx || (!newHtml && !md)) return <TheoryStub chapterId={chapterId} onNavigate={onNavigate} />;

  const { sub, sec, ch } = ctx;
  const html = React.useMemo(() => newHtml || renderMd(md), [newHtml, md]);
  const toc = React.useMemo(() => (newHtml ? [] : buildToc(md)), [newHtml, md]);

  // 새 시안 HTML 안의 <a data-chapter="cXYZ"> 클릭 → SPA 라우팅
  React.useEffect(() => {
    if (!bodyRef.current) return;
    const handler = (e: any) => {
      const a = e.target?.closest?.('a[data-chapter]');
      if (!a) return;
      const cid = a.getAttribute('data-chapter');
      if (cid && cid !== chapterId) {
        e.preventDefault();
        onNavigate('theory-detail', cid);
      }
    };
    bodyRef.current.addEventListener('click', handler);
    return () => bodyRef.current?.removeEventListener('click', handler);
  }, [chapterId, html]);

  // 시안에 미리 박힌 .copy-btn 은 onClick 없는 죽은 버튼 — 제거 (아래 effect 가 다시 부착)
  React.useEffect(() => {
    if (!bodyRef.current) return;
    bodyRef.current.querySelectorAll('button.copy-btn').forEach((b) => b.remove());
  }, [html]);

  // mermaid — 본문에 .mermaid 가 있으면 동적 로드 + 렌더 (양파 그린 테마)
  React.useEffect(() => {
    if (!bodyRef.current) return;
    const nodes = bodyRef.current.querySelectorAll('.mermaid');
    if (!nodes.length) return;
    let cancelled = false;
    import('mermaid').then(({ default: mermaid }) => {
      if (cancelled) return;
      try {
        mermaid.initialize({
          startOnLoad: false,
          theme: 'base',
          themeVariables: {
            fontFamily: 'Pretendard Variable, -apple-system, sans-serif',
            primaryColor: '#EBF5EC',
            primaryTextColor: '#1F2320',
            primaryBorderColor: '#2E7D32',
            lineColor: '#2E7D32',
            secondaryColor: '#F0F7F1',
            tertiaryColor: '#FFFFFF',
            mainBkg: '#EBF5EC',
            edgeLabelBackground: '#FFFFFF',
            clusterBkg: '#F0F7F1',
            clusterBorder: '#A5D6A7',
          },
          flowchart: { curve: 'basis', htmlLabels: true, padding: 12 },
          sequence: { actorMargin: 50 },
          securityLevel: 'loose',
        });
        mermaid.run({ nodes }).then(() => {
          // 렌더 후 각 mermaid 카드에 '확대' 버튼 부착
          if (cancelled || !bodyRef.current) return;
          bodyRef.current.querySelectorAll('.mermaid').forEach((m) => {
            if (m.querySelector('.zoom-btn')) return;
            const btn = document.createElement('button');
            btn.className = 'zoom-btn';
            btn.type = 'button';
            btn.title = '확대 보기';
            btn.innerHTML = '⛶';
            btn.onclick = (e) => {
              e.stopPropagation();
              const svg = m.querySelector('svg');
              if (svg) setZoomedSvg(svg.outerHTML);
            };
            m.appendChild(btn);
          });
        });
      } catch (e) { console.warn('[mermaid] render failed', e); }
    }).catch((e) => console.warn('[mermaid] load failed', e));
    return () => { cancelled = true; };
  }, [html]);

  // 코드 블록 — 복사 버튼 부착 (Ctrl+C 도 동작하지만 보조 UI)
  React.useEffect(() => {
    if (!bodyRef.current) return;
    const pres = bodyRef.current.querySelectorAll('.theory-md > pre, .theory-md pre:not(.diagram-card pre)');
    pres.forEach((pre) => {
      if (pre.parentElement?.classList?.contains('diagram-card')) return;
      if (pre.querySelector('.copy-btn')) return;
      const code = pre.querySelector('code');
      if (!code) return;
      const btn = document.createElement('button');
      btn.className = 'copy-btn';
      btn.type = 'button';
      btn.textContent = '복사';
      btn.onclick = async (e) => {
        e.stopPropagation();
        try {
          await navigator.clipboard.writeText(code.textContent || '');
          const orig = btn.textContent;
          btn.textContent = '✓ 복사됨';
          btn.classList.add('copied');
          setTimeout(() => { btn.textContent = orig; btn.classList.remove('copied'); }, 1500);
        } catch {
          btn.textContent = '실패';
          setTimeout(() => { btn.textContent = '복사'; }, 1500);
        }
      };
      pre.appendChild(btn);
    });
  }, [html]);

  // ESC 로 모달 닫기
  React.useEffect(() => {
    if (!zoomedSvg) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setZoomedSvg(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [zoomedSvg]);

  // 다음 챕터 — 평탄화된 챕터 목록에서 인덱스 +1
  const allCh = THEORY.subjects.flatMap((s) => s.sections.flatMap((x) => x.chapters));
  const idx = allCh.findIndex((c) => c.id === chapterId);
  const nextCh = idx >= 0 && idx < allCh.length - 1 ? allCh[idx + 1] : null;
  const prevCh = idx > 0 ? allCh[idx - 1] : null;

  return (
    <>
    {/* mermaid 확대 모달 */}
    {zoomedSvg && (
      <div
        onClick={() => setZoomedSvg(null)}
        style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.78)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 1000, padding: 24, cursor: 'zoom-out',
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            background: '#FFFFFF', borderRadius: 16, padding: 32,
            maxWidth: '92vw', maxHeight: '88vh', overflow: 'auto',
            boxShadow: '0 24px 80px rgba(0,0,0,0.5)', cursor: 'auto',
            position: 'relative',
          }}
          dangerouslySetInnerHTML={{ __html: zoomedSvg }}
        />
        <button
          onClick={() => setZoomedSvg(null)}
          style={{
            position: 'absolute', top: 20, right: 20,
            background: 'rgba(255,255,255,0.95)', color: 'var(--fg-1)',
            border: 0, borderRadius: 10, padding: '8px 14px',
            fontSize: 13, fontWeight: 700, cursor: 'pointer',
          }}
        >닫기 ✕</button>
      </div>
    )}
    <div style={{ maxWidth: 1180, margin: '0 auto', padding: '28px 28px 80px' }}>
      {/* 뒤로가기 + Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
        <button
          onClick={() => { if (typeof window !== 'undefined' && window.history.length > 1) window.history.back(); else onNavigate('theory'); }}
          title="뒤로가기"
          style={{
            width: 36, height: 36, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            background: 'var(--bg-card)', border: '1px solid var(--border-default)', borderRadius: 10,
            cursor: 'pointer', color: 'var(--fg-2)', padding: 0,
          }}
        ><Ic.ArrowLeft size={18} /></button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--fg-3)', flexWrap: 'wrap' }}>
          <button onClick={() => onNavigate('theory')} style={{ background: 'none', border: 0, color: 'var(--fg-3)', cursor: 'pointer', fontFamily: 'inherit', fontSize: 12, padding: 0 }}>이론</button>
          <Ic.ChevronRight size={12} />
          <span>{sub.code} · {sub.title}</span>
          <Ic.ChevronRight size={12} />
          <span style={{ color: 'var(--fg-1)', fontWeight: 600 }}>{ch.title}</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 320px', gap: 32 }} className="theory-detail-grid">
        {/* Main body */}
        <article>
          {/* 챕터 헤어로 — 양파 그린 그라데이션 카드 */}
          <div style={{
            background: 'linear-gradient(135deg, var(--point-050) 0%, var(--bg-card) 100%)',
            border: '1px solid var(--point-100)',
            borderRadius: 16,
            padding: '24px 28px',
            marginBottom: 28,
            position: 'relative',
            overflow: 'hidden',
          }}>
            <button
              onClick={() => setBugOpen(true)}
              title="이 이론 내용의 오류를 제보"
              style={{
                position: 'absolute', top: 14, right: 14,
                display: 'inline-flex', alignItems: 'center',
                background: 'var(--bg-card)', border: '1px solid var(--border-default)', borderRadius: 8,
                padding: '4px 10px', fontSize: 11.5, color: 'var(--fg-3)',
                cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { e.currentTarget.style.color='var(--wrong-fg)'; e.currentTarget.style.borderColor='var(--wrong-border)'; }}
              onMouseLeave={e => { e.currentTarget.style.color='var(--fg-3)'; e.currentTarget.style.borderColor='var(--border-default)'; }}
            >
              오류 제보
            </button>
            <div style={{ display: 'flex', gap: 8, marginBottom: 12, alignItems: 'center', flexWrap: 'wrap' }}>
              <Tag tone="green">{sub.code}</Tag>
              <span style={{ fontSize: 12, color: 'var(--fg-3)' }}>{sec.title}</span>
            </div>
            <h1 style={{ fontSize: 30, fontWeight: 800, color: 'var(--fg-1)', letterSpacing: '-0.02em', margin: '0 0 8px', lineHeight: 1.2, paddingRight: 84 }}>
              {ch.title}
            </h1>
            <p style={{ fontSize: 14.5, color: 'var(--fg-2)', margin: 0, lineHeight: 1.6 }}>{ch.oneLine}</p>
          </div>

          {/* 모바일 한정: hero(챕터 타이틀) 바로 아래 OX 퀴즈
              — 데스크톱은 우측 sticky aside 에서 마운트 (조건부) */}
          {isMobileLayout && (OX_QUIZ[chapterId]?.length || EXAM_MAPPING[chapterId]?.length) ? (
            <div style={{ marginBottom: 28 }}>
              <MiniTestSidebar chapterId={chapterId} chapterLabel={`${sub.code} ${ch.title}`} />
            </div>
          ) : null}

          {/* 마크다운 본문 — .theory-md 가 디자인 시스템 적용 */}
          <div ref={bodyRef} className="theory-md" dangerouslySetInnerHTML={{ __html: html }} />

          {/* Nav footer */}
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--border-subtle)' }}>
            {prevCh ? (
              <Btn variant="ghost" icon={<Ic.ArrowLeft />} onClick={() => onNavigate('theory-detail', prevCh.id)}>이전<span className="theory-nav-title"> ({prevCh.title})</span></Btn>
            ) : (
              <Btn variant="ghost" icon={<Ic.ArrowLeft />} onClick={() => onNavigate('theory')}>이론 목록</Btn>
            )}
            {nextCh ? (
              <Btn onClick={() => onNavigate('theory-detail', nextCh.id)} iconRight={<Ic.ArrowRight />}>다음<span className="theory-nav-title"> ({nextCh.title})</span></Btn>
            ) : (
              <Btn variant="outline" onClick={() => onNavigate('endless')} iconRight={<Ic.ArrowRight />}>무한 퀴즈로 연습</Btn>
            )}
          </div>
        </article>

        {/* Right rail: 미니 테스트 + ToC + 광고
            — aside 자체를 sticky 로 만들어 스크롤 시 OX 퀴즈 박스가 따라오도록 */}
        <aside style={{
          position: 'sticky',
          top: 80,
          alignSelf: 'start',                 // 그리드 stretch 대신 콘텐츠 높이만 차지 (sticky 제대로 작동)
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
          maxHeight: 'calc(100vh - 96px)',    // 헤더 + 여유 → viewport 초과 시 자체 스크롤
          overflowY: 'auto',
          overscrollBehavior: 'contain',      // 사이드바 스크롤이 페이지로 전파 X
        }}>
          {/* 데스크톱 한정: 모바일에서는 위 article 안 hero 아래에 inline 으로 마운트됨 */}
          {!isMobileLayout && (OX_QUIZ[chapterId]?.length || EXAM_MAPPING[chapterId]?.length) ? (
            <MiniTestSidebar chapterId={chapterId} chapterLabel={`${sub.code} ${ch.title}`} />
          ) : null}
          {toc.length > 0 && <TocCard toc={toc} />}
          <AdSlot slot="THEORY_DETAIL_AFTER_MINITEST" format="rectangle" />
        </aside>
      </div>
    </div>
    {bugOpen && (
      <BugReportModal
        ctx={{
          kind: '이론',
          chapter: `${sub.code} ${ch.title}`,
          title: ch.title,
        }}
        onClose={() => setBugOpen(false)}
      />
    )}
    </>
  );
};

const TocCard = ({ toc }) => (
  <nav aria-label="목차" style={{
    background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 12,
    padding: '14px 16px', boxShadow: 'var(--shadow-sm)',
  }}>
    <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--point-600)', letterSpacing: '0.04em', marginBottom: 10 }}>이 챕터에서</div>
    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
      {toc.map((t, i) => (
        <li key={i}>
          <a href={'#' + t.slug} style={{ fontSize: 13, color: 'var(--fg-2)', textDecoration: 'none', display: 'block', padding: '4px 0' }}>{t.title}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export const TheoryStub = ({ chapterId, onNavigate }) => {
  const ctx = findChapter(chapterId);
  return (
    <div style={{ maxWidth: 720, margin: '60px auto', padding: '0 24px', textAlign: 'center' }}>
      <h2 style={{ fontSize: 22, color: 'var(--fg-1)' }}>준비 중인 챕터예요</h2>
      <p style={{ color: 'var(--fg-3)', marginTop: 8 }}>{ctx ? `${ctx.ch.num} ${ctx.ch.title} 콘텐츠는 곧 추가됩니다.` : ''}</p>
      <div style={{ marginTop: 18 }}>
        <Btn onClick={() => onNavigate('theory')}>이론 목록</Btn>
      </div>
    </div>
  );
};
