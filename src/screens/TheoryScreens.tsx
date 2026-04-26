// @ts-nocheck
import React from 'react';
import { marked } from 'marked';
import { Btn, Tag, Ic } from '../components/Atoms';
import { THEORY, THEORY_BODY } from '../data/theory';
import { QUIZ_BANK } from '../data/quizBank';
import { CONCEPT_QUIZ } from '../data/conceptQuiz';
import { recordTheoryView } from '../lib/progress';
import { AdSlot } from '../components/AdSlot';
import { trackEvent } from '../lib/analytics';

// marked 옵션 — GFM(테이블·체크박스), 줄바꿈, 매끈한 헤더
marked.setOptions({ gfm: true, breaks: false });

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
                    <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--point-600)', letterSpacing: '0.04em', fontFamily: 'var(--font-mono)' }}>
                      {ch.num}
                    </div>
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
  // 각 h2 에 id 부여 (ToC 클릭용)
  const html = marked.parse(md.replace(/^##\s+(.+)$/gm, (m, t) => {
    const id = 's' + i++;
    return `<h2 id="${id}">${t}</h2>`;
  }));
  return html;
}

export const TheoryDetailScreen = ({ chapterId, onNavigate }) => {
  React.useEffect(() => {
    recordTheoryView(chapterId);
    trackEvent('theory_open', { chapter: chapterId });
  }, [chapterId]);

  const ctx = findChapter(chapterId);
  const md = THEORY_BODY[chapterId];

  if (!ctx || !md) return <TheoryStub chapterId={chapterId} onNavigate={onNavigate} />;

  const { sub, sec, ch } = ctx;
  const html = React.useMemo(() => renderMd(md), [md]);
  const toc = React.useMemo(() => buildToc(md), [md]);

  // 다음 챕터 — 평탄화된 챕터 목록에서 인덱스 +1
  const allCh = THEORY.subjects.flatMap((s) => s.sections.flatMap((x) => x.chapters));
  const idx = allCh.findIndex((c) => c.id === chapterId);
  const nextCh = idx >= 0 && idx < allCh.length - 1 ? allCh[idx + 1] : null;
  const prevCh = idx > 0 ? allCh[idx - 1] : null;

  return (
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
          <span style={{ color: 'var(--fg-1)', fontWeight: 600 }}>{ch.num} {ch.title}</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 280px', gap: 32 }} className="theory-detail-grid">
        {/* Main body */}
        <article>
          <div style={{ display: 'flex', gap: 8, marginBottom: 10, alignItems: 'center' }}>
            <Tag tone="green">{sub.code}</Tag>
            <Tag tone="neutral">{ch.num}</Tag>
            <span style={{ fontSize: 12, color: 'var(--fg-3)' }}>{sec.title}</span>
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: 'var(--fg-1)', letterSpacing: '-0.02em', margin: '0 0 8px', lineHeight: 1.2 }}>
            {ch.title}
          </h1>
          <p style={{ fontSize: 15, color: 'var(--fg-3)', margin: '0 0 24px' }}>{ch.oneLine}</p>

          {/* 마크다운 본문 — .theory-md 가 디자인 시스템 적용 */}
          <div className="theory-md" dangerouslySetInnerHTML={{ __html: html }} />

          {/* Nav footer */}
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--border-subtle)' }}>
            {prevCh ? (
              <Btn variant="ghost" icon={<Ic.ArrowLeft />} onClick={() => onNavigate('theory-detail', prevCh.id)}>이전 ({prevCh.num})</Btn>
            ) : (
              <Btn variant="ghost" icon={<Ic.ArrowLeft />} onClick={() => onNavigate('theory')}>이론 목록</Btn>
            )}
            {nextCh ? (
              <Btn onClick={() => onNavigate('theory-detail', nextCh.id)} iconRight={<Ic.ArrowRight />}>다음 ({nextCh.num})</Btn>
            ) : (
              <Btn variant="outline" onClick={() => onNavigate('endless')} iconRight={<Ic.ArrowRight />}>무한 퀴즈로 연습</Btn>
            )}
          </div>
        </article>

        {/* Right rail: ToC + 광고 */}
        <aside style={{ position: 'relative' }}>
          <div style={{ position: 'sticky', top: 80, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <TocCard toc={toc} />
            <AdSlot slot="THEORY_DETAIL_AFTER_MINITEST" format="rectangle" />
          </div>
        </aside>
      </div>
    </div>
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
