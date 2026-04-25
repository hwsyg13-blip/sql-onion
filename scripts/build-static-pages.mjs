// SEO 정적 페이지 생성기
// 빌드 후 실행: dist/ 안에 회차/이론/콘텐츠 페이지 생성 + sitemap 갱신
//
// 출력 페이지 구조:
//   /exam/round-NN/           회차별 50문항 + 정답·해설 (16개)
//   /theory/cXX/              이론 챕터별 섹션 목록 + 본문 요약 (13개)
//   /guide/sqld-overview/     SQLD 자격증 안내
//   /guide/sqld-application/  시험 응시·일정·접수 안내
//   /guide/sqld-3-week-plan/  3주 합격 학습 계획
//   /guide/sqld-tips/         단기 합격 팁
//   /guide/sqld-syllabus/     출제 범위 정리
//   sitemap.xml               전체 URL 목록으로 갱신

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs';
import { resolve, join } from 'node:path';

const DIST = 'dist';
const SITE = 'https://sqldyangpa.com';
const NOW = new Date().toISOString().slice(0, 10);

const GA_ID = 'G-NZC9ZDFT4Q';
const ADSENSE_CLIENT = 'ca-pub-4723950729614149';

// ============================================================
// 데이터 로드
// ============================================================
const ROUND_DATES = {
  45: { ko: '2022년 5월', y: 2022 }, 46: { ko: '2022년 9월', y: 2022 }, 47: { ko: '2022년 11월', y: 2022 },
  48: { ko: '2023년 3월', y: 2023 }, 49: { ko: '2023년 6월', y: 2023 }, 50: { ko: '2023년 9월', y: 2023 }, 51: { ko: '2023년 11월', y: 2023 },
  52: { ko: '2024년 3월', y: 2024 }, 53: { ko: '2024년 5월', y: 2024 }, 54: { ko: '2024년 8월', y: 2024 }, 55: { ko: '2024년 11월', y: 2024 },
  56: { ko: '2025년 3월', y: 2025 }, 57: { ko: '2025년 5월', y: 2025 }, 58: { ko: '2025년 8월', y: 2025 }, 59: { ko: '2025년 11월', y: 2025 },
  60: { ko: '2026년 3월', y: 2026 },
};

const rounds = [];
for (let n = 45; n <= 60; n++) {
  const path = `scripts/authored/round-${n}.json`;
  if (!existsSync(path)) continue;
  rounds.push({ round: n, ...JSON.parse(readFileSync(path, 'utf8')), date: ROUND_DATES[n] });
}

// THEORY 메타 — eval로 객체 추출
const theoryTs = readFileSync('src/data/theory.ts', 'utf8');
const theoryCode = theoryTs.match(/export const THEORY[^=]*=\s*({[\s\S]*?});/)[1];
const THEORY = new Function('return ' + theoryCode)();

// ============================================================
// 공통 HTML 유틸
// ============================================================
const esc = (s) => String(s ?? '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

const CIRCLED = ['①', '②', '③', '④'];

function head({ title, desc, path, type = 'article' }) {
  const url = `${SITE}${path}`;
  const ogImg = `${SITE}/assets/og-cover.png`;
  return `<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(desc)}" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <link rel="canonical" href="${url}" />
  <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />

  <meta property="og:type" content="${type}" />
  <meta property="og:site_name" content="SQL양파" />
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(desc)}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${ogImg}" />
  <meta property="og:locale" content="ko_KR" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(title)}" />
  <meta name="twitter:description" content="${esc(desc)}" />
  <meta name="twitter:image" content="${ogImg}" />
  <meta name="theme-color" content="#2E7D32" />

  <style>
    :root{--bg:#F5F7F6;--surface:#FFFFFF;--fg-1:#1F2320;--fg-2:#333;--fg-3:#6B7280;--border:#EEF1EE;--accent:#2E7D32;--accent-bg:#EBF5EC;--correct-bg:#E6F3E7;--correct-fg:#256B29}
    *{box-sizing:border-box}
    body{margin:0;background:var(--bg);color:var(--fg-2);font-family:-apple-system,"Apple SD Gothic Neo","Malgun Gothic",sans-serif;line-height:1.7;font-size:15.5px}
    .top{background:var(--surface);border-bottom:1px solid var(--border);padding:14px 24px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:10}
    .top a.brand{color:var(--accent);font-weight:800;font-size:18px;text-decoration:none;display:inline-flex;align-items:center;gap:8px}
    .top nav a{color:var(--fg-3);text-decoration:none;font-size:14px;margin-left:14px}
    .top nav a:hover{color:var(--accent)}
    main{max-width:760px;margin:0 auto;padding:32px 24px 80px}
    .crumb{font-size:13px;color:var(--fg-3);margin-bottom:8px}
    .crumb a{color:var(--fg-3);text-decoration:none}
    .crumb a:hover{color:var(--accent)}
    h1{font-size:26px;color:var(--fg-1);letter-spacing:-0.02em;margin:0 0 6px;font-weight:800}
    .lead{font-size:14.5px;color:var(--fg-3);margin:0 0 24px}
    .cta{display:inline-flex;align-items:center;gap:6px;background:var(--accent);color:#fff;padding:11px 20px;border-radius:10px;text-decoration:none;font-weight:700;font-size:14.5px;margin:8px 0 28px}
    .cta:hover{filter:brightness(1.05)}
    .cta-secondary{background:transparent;color:var(--accent);border:1px solid var(--accent)}
    h2{font-size:18px;color:var(--fg-1);margin:32px 0 12px;font-weight:700}
    h3{font-size:15.5px;color:var(--fg-1);margin:20px 0 8px;font-weight:700}
    .q{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:18px 20px;margin:14px 0}
    .q .num{display:inline-block;background:var(--accent-bg);color:var(--accent);font-weight:700;font-size:12px;padding:3px 8px;border-radius:6px;margin-right:8px}
    .q .subj{display:inline-block;color:var(--fg-3);font-size:12px;margin-right:8px}
    .q .stem{font-weight:600;color:var(--fg-1);margin:8px 0 12px}
    .q ol{padding-left:20px;margin:8px 0}
    .q ol li{margin:4px 0;color:var(--fg-2)}
    .q .answer{margin-top:12px;padding:10px 14px;background:var(--correct-bg);color:var(--correct-fg);border-radius:8px;font-size:13.5px}
    .q .expl{margin-top:8px;padding:10px 14px;background:#F8F9FA;color:var(--fg-2);border-radius:8px;font-size:13.5px;border-left:3px solid var(--accent)}
    .q .ref{margin:10px 0;padding:10px 14px;background:#F8F9FA;border-radius:8px;font-size:13.5px;color:var(--fg-2);border-left:3px solid #BFBFBF}
    .q .ref pre{margin:0;font-family:'D2Coding','Consolas',monospace;font-size:12.5px;white-space:pre-wrap;word-break:break-word}
    .q .ref table{border-collapse:collapse;margin:4px 0;font-size:13px}
    .q .ref th,.q .ref td{border:1px solid #DDD;padding:4px 8px}
    .q .ref th{background:#F0F0F0}
    ul.chapters{list-style:none;padding:0;margin:0}
    ul.chapters li{background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:14px 18px;margin:10px 0}
    ul.chapters li a{color:var(--fg-1);text-decoration:none;font-weight:700}
    ul.chapters li .sub{color:var(--fg-3);font-size:13px;margin-top:4px}
    .footer{margin-top:48px;padding-top:20px;border-top:1px solid var(--border);font-size:13px;color:var(--fg-3);text-align:center}
    .footer a{color:var(--fg-3);text-decoration:none;margin:0 8px}
    .footer a:hover{color:var(--accent)}
    p,li{font-size:14.5px}
    code{background:#F0F0F0;padding:1px 5px;border-radius:4px;font-family:'D2Coding','Consolas',monospace;font-size:0.92em}
  </style>

  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}" crossorigin="anonymous"></script>
  <script async src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"></script>
  <script>
    window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
    gtag('js',new Date());gtag('config','${GA_ID}');
  </script>
</head>
<body>
  <header class="top">
    <a class="brand" href="/">SQL양파</a>
    <nav>
      <a href="/exam/">기출문제</a>
      <a href="/theory/">이론</a>
      <a href="/guide/sqld-overview/">SQLD 안내</a>
    </nav>
  </header>
  <main>`;
}

const tail = `  </main>
  <footer class="footer">
    <p>SQL양파 — SQLD 3주 합격 루틴 · <a href="/">홈으로</a> · <a href="/privacy.html">개인정보처리방침</a></p>
  </footer>
</body>
</html>`;

function writePage(path, html) {
  const full = join(DIST, path);
  mkdirSync(full, { recursive: true });
  writeFileSync(join(full, 'index.html'), html, 'utf8');
}

// ============================================================
// 회차별 페이지
// ============================================================
function renderRef(ref) {
  if (!ref) return '';
  if (ref.type === 'text') return `<div class="ref">${esc(ref.content || '')}</div>`;
  if (ref.type === 'sql') return `<div class="ref"><pre>${esc(ref.code || '')}</pre></div>`;
  if (ref.type === 'ascii' || ref.type === 'pre') return `<div class="ref"><pre>${esc(ref.text || ref.code || '')}</pre></div>`;
  if (ref.type === 'table' && ref.headers) {
    const ths = ref.headers.map(h => `<th>${esc(h)}</th>`).join('');
    const trs = (ref.rows || []).map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join('')}</tr>`).join('');
    return `<div class="ref"><table><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table></div>`;
  }
  if (ref.type === 'html') return `<div class="ref">${ref.content || ''}</div>`;
  return '';
}

function buildRoundPage(r) {
  const { round, date, authored } = r;
  const title = `SQLD 제${round}회 (${date.ko}) 기출 복원문제 50문항 · 정답·해설 — SQL양파`;
  const desc = `SQLD ${date.ko} 시행 제${round}회 기출 복원문제 50문항을 무료로 풀어보세요. 데이터모델링·SQL 활용 1·2과목 정답과 해설 포함, 회원가입 없이 즉시 풀이 가능.`;
  const path = `/exam/round-${round}/`;

  const questionsHtml = authored.map(q => {
    const refs = (q.references || []).map(renderRef).join('');
    const opts = q.options.map((o, i) => {
      const isAns = i === q.correctIndex;
      return `<li${isAns ? ' style="color:var(--correct-fg);font-weight:700"' : ''}>${CIRCLED[i]} ${esc(o)}${isAns ? ' (정답)' : ''}</li>`;
    }).join('');
    return `<article class="q" id="q${q.number}">
  <span class="num">${q.number}번</span><span class="subj">${esc(q.subject)}</span>
  <div class="stem">${esc(q.title)}</div>
  ${refs}
  <ol type="1" start="1" style="list-style:none;padding-left:0">${opts}</ol>
  <div class="answer">정답: ${CIRCLED[q.correctIndex]} ${esc(q.options[q.correctIndex])}</div>
  ${q.explanation ? `<div class="expl">${esc(q.explanation)}</div>` : ''}
</article>`;
  }).join('\n');

  // JSON-LD: Quiz schema
  const ld = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    "name": `SQLD 제${round}회 (${date.ko}) 기출 복원문제`,
    "about": "SQLD (SQL Developer) 자격검정",
    "educationalLevel": "intermediate",
    "inLanguage": "ko-KR",
    "url": SITE + path,
    "numberOfQuestions": authored.length,
    "datePublished": NOW,
  };

  return head({ title, desc, path }) + `
    <div class="crumb"><a href="/">홈</a> · <a href="/exam/">기출문제</a> · 제${round}회</div>
    <h1>SQLD 제${round}회 기출 복원문제 (${date.ko})</h1>
    <p class="lead">총 50문항 · 1과목 데이터 모델링의 이해 10문항 + 2과목 SQL 기본 및 활용 40문항. 정답과 해설 모두 포함.</p>
    <a class="cta" href="/">실전 CBT 모드로 풀어보기 →</a>
    <h2>전체 문항 (${authored.length}문항)</h2>
    ${questionsHtml}
    <script type="application/ld+json">${JSON.stringify(ld)}</script>
` + tail;
}

// ============================================================
// 회차 목록 페이지
// ============================================================
function buildExamIndexPage() {
  const path = '/exam/';
  const title = `SQLD 기출 복원문제 — 제45회~60회 800문항 무료 — SQL양파`;
  const desc = `SQLD 자격증 기출 복원문제를 회차별로 정리. 제45회(2022.05)부터 제60회(2026.03)까지 16개 회차 800문항을 회원가입 없이 무료로 풀이.`;

  const items = rounds.slice().sort((a, b) => b.round - a.round).map(r => {
    return `<li>
  <a href="/exam/round-${r.round}/">SQLD 제${r.round}회 기출 복원문제</a>
  <div class="sub">${r.date.ko} 시행 · 50문항 · 정답·해설 포함</div>
</li>`;
  }).join('\n');

  return head({ title, desc, path }) + `
    <div class="crumb"><a href="/">홈</a> · 기출문제</div>
    <h1>SQLD 회차별 기출 복원문제</h1>
    <p class="lead">제45회(2022년 5월)부터 제60회(2026년 3월)까지 16개 회차, 총 800문항.</p>
    <a class="cta" href="/">랜덤 문제 풀이 시작하기 →</a>
    <h2>회차별 문제집 (${rounds.length}개)</h2>
    <ul class="chapters">${items}</ul>
` + tail;
}

// ============================================================
// 이론 챕터 페이지
// ============================================================
function buildTheoryChapterPage(subject, ch) {
  const path = `/theory/${ch.id}/`;
  const title = `${ch.title} — ${subject.code} ${subject.title} · SQLD 이론 — SQL양파`;
  const desc = `SQLD 자격증 ${subject.code} '${subject.title}'의 핵심 챕터 '${ch.title}' 학습 노트. 출제 범위와 핵심 섹션 정리.`;
  const sectionsHtml = (ch.sections || []).map(s => `<li>${esc(s)}</li>`).join('');

  return head({ title, desc, path }) + `
    <div class="crumb"><a href="/">홈</a> · <a href="/theory/">이론</a> · ${esc(subject.code)} · ${esc(ch.title)}</div>
    <h1>${esc(ch.title)}</h1>
    <p class="lead">${esc(subject.code)} ${esc(subject.title)} · 챕터 ${ch.id.replace(/^c/, '')}</p>
    <a class="cta" href="/">전체 본문 + 미니테스트 보기 →</a>
    <h2>핵심 섹션</h2>
    <ul>${sectionsHtml}</ul>
    <h2>학습 가이드</h2>
    <p>본 챕터는 SQLD 시험에서 반복적으로 출제되는 핵심 영역입니다. SQL양파 사이트에서 본문 + 도식 + 미니 테스트로 빠르게 정리할 수 있습니다.</p>
    <a class="cta cta-secondary" href="/">SQL양파 홈에서 학습 시작 →</a>
` + tail;
}

function buildTheoryIndexPage() {
  const path = '/theory/';
  const title = `SQLD 이론 정리 · 데이터모델링·SQL활용 핵심 챕터 — SQL양파`;
  const desc = `SQLD 자격증 1과목 데이터 모델링의 이해 6챕터 + 2과목 SQL 기본 및 활용 7챕터를 한눈에. 회원가입 없이 무료.`;

  const subjects = THEORY.subjects.map(s => {
    const items = s.chapters.map(c => `<li>
  <a href="/theory/${c.id}/">${esc(c.title)}</a>
  <div class="sub">${(c.sections || []).join(' · ')}</div>
</li>`).join('\n');
    return `<h2>${esc(s.code)} ${esc(s.title)}</h2><ul class="chapters">${items}</ul>`;
  }).join('\n');

  return head({ title, desc, path }) + `
    <div class="crumb"><a href="/">홈</a> · 이론</div>
    <h1>SQLD 이론 — 전 범위 챕터 정리</h1>
    <p class="lead">데이터모델링 6챕터 + SQL 활용 7챕터. SQLD 출제 범위를 한 페이지로 한눈에.</p>
    <a class="cta" href="/">본문 + 미니테스트 모드로 학습 시작 →</a>
    ${subjects}
` + tail;
}

// ============================================================
// 정적 가이드 글 (5개)
// ============================================================
function buildGuide({ slug, title, desc, body }) {
  const path = `/guide/${slug}/`;
  return head({ title: `${title} — SQL양파`, desc, path }) + `
    <div class="crumb"><a href="/">홈</a> · 가이드 · ${esc(title)}</div>
    <h1>${esc(title)}</h1>
    <p class="lead">${esc(desc)}</p>
    ${body}
    <a class="cta" href="/">SQL양파에서 학습 시작 →</a>
` + tail;
}

const guides = [
  {
    slug: 'sqld-overview',
    title: 'SQLD 자격증 완벽 안내 — 시험 정보·출제 범위·합격 기준',
    desc: 'SQLD(SQL Developer)는 한국데이터산업진흥원이 시행하는 SQL 개발자 자격증입니다. 시험 시간·문항수·합격 기준·출제 범위를 한눈에.',
    body: `
      <h2>SQLD란?</h2>
      <p>SQLD(SQL Developer)는 <strong>한국데이터산업진흥원(KDATA)</strong>이 시행하는 국가공인 데이터 자격검정으로, SQL 개발자에게 필요한 데이터 모델링과 SQL 활용 능력을 검정합니다. 정보처리기사·SQLP·ADsP와 함께 데이터 직무에서 가장 많이 취득하는 자격증 중 하나입니다.</p>

      <h2>시험 개요</h2>
      <ul>
        <li><strong>시험 시간:</strong> 90분</li>
        <li><strong>문항 수:</strong> 50문항 (객관식 4지선다)</li>
        <li><strong>합격 기준:</strong> 100점 만점 60점 이상 (과목별 40% 이상)</li>
        <li><strong>응시료:</strong> 50,000원</li>
        <li><strong>주관:</strong> 한국데이터산업진흥원 (https://www.dataq.or.kr)</li>
      </ul>

      <h2>과목 구성</h2>
      <h3>1과목 — 데이터 모델링의 이해 (10문항)</h3>
      <ul>
        <li>데이터 모델의 이해</li>
        <li>엔터티·속성·관계·식별자</li>
        <li>정규화·반정규화</li>
      </ul>

      <h3>2과목 — SQL 기본 및 활용 (40문항)</h3>
      <ul>
        <li>SELECT·WHERE·GROUP BY·HAVING</li>
        <li>JOIN (INNER·OUTER·NATURAL·CROSS)</li>
        <li>서브쿼리·집합연산자</li>
        <li>윈도우 함수·계층형 질의·정규표현식</li>
        <li>DDL·DML·DCL·TCL</li>
      </ul>

      <h2>합격 전략</h2>
      <p>2과목이 40문항으로 비중이 크므로 SQL 실습 위주의 학습이 핵심입니다. 1과목은 개념 위주로 빠르게 정리한 뒤 기출 회차를 반복 풀이하는 것이 효율적입니다.</p>
    `,
  },
  {
    slug: 'sqld-application',
    title: 'SQLD 시험 응시 안내 — 일정·접수·CBT 환경',
    desc: 'SQLD 정기 시험 일정, 접수 방법, CBT 시험 환경을 정리. 데이터자격검정 사이트에서 직접 접수 가능.',
    body: `
      <h2>시험 일정</h2>
      <p>SQLD는 연 4회 정기 시행 (보통 3월·5월·8월·11월). 정확한 일정은 <a href="https://www.dataq.or.kr" target="_blank" rel="noopener">한국데이터산업진흥원 데이터자격검정</a>에서 확인할 수 있습니다.</p>

      <h3>최근 회차 일정 (참고)</h3>
      <ul>
        <li>제57회: 2025년 5월</li>
        <li>제58회: 2025년 8월</li>
        <li>제59회: 2025년 11월</li>
        <li>제60회: 2026년 3월</li>
      </ul>

      <h2>접수 방법</h2>
      <ol>
        <li>데이터자격검정 사이트 회원가입</li>
        <li>원서접수 메뉴에서 시험 회차·고사장 선택</li>
        <li>응시료 50,000원 결제</li>
        <li>접수증 출력 (시험 당일 신분증과 함께 지참)</li>
      </ol>

      <h2>CBT 시험 환경</h2>
      <p>SQLD는 <strong>컴퓨터 기반 시험(CBT)</strong>으로 진행됩니다. 시험장 PC에서 마우스 클릭으로 답안을 선택하며, 90분 내 50문항을 풀어야 합니다.</p>
      <ul>
        <li>화면 좌측: 문제 + 보기</li>
        <li>화면 우측: 문항 네비게이터 (답안 표시·플래그 가능)</li>
        <li>중간 저장 가능, 시험 종료 전 자유롭게 이동</li>
      </ul>

      <h2>SQL양파의 CBT 모드</h2>
      <p>SQL양파는 실제 CBT 환경과 동일한 50문항·90분 풀이 모드를 제공합니다. 회차별 기출 또는 랜덤 모의고사로 시험장 환경에 미리 적응할 수 있습니다.</p>
    `,
  },
  {
    slug: 'sqld-3-week-plan',
    title: 'SQLD 3주 단기 합격 학습 계획',
    desc: 'SQLD를 3주 안에 합격하기 위한 일자별 학습 플랜. 1주차는 이론, 2주차는 기출, 3주차는 실전 CBT.',
    body: `
      <h2>전체 로드맵</h2>
      <ul>
        <li><strong>1주차 (Day 1–7):</strong> 1·2과목 이론 빠른 1회독</li>
        <li><strong>2주차 (Day 8–14):</strong> 회차별 기출 풀이 (45회~55회)</li>
        <li><strong>3주차 (Day 15–21):</strong> 최근 회차 + 약점 보강 + CBT 모의고사</li>
      </ul>

      <h2>1주차 — 이론 1회독</h2>
      <p>매일 1챕터씩 핵심만 빠르게. 모든 챕터를 완벽히 외우려 하지 말고 '이런 개념이 있다'는 감만 잡습니다.</p>
      <ul>
        <li>Day 1: 데이터 모델·스키마·ERD 기초</li>
        <li>Day 2: 엔터티·속성</li>
        <li>Day 3: 관계·식별자</li>
        <li>Day 4: 정규화·반정규화</li>
        <li>Day 5: SELECT·WHERE·함수</li>
        <li>Day 6: GROUP BY·HAVING·JOIN</li>
        <li>Day 7: 서브쿼리·집합연산자·계층형 질의</li>
      </ul>

      <h2>2주차 — 기출 풀이</h2>
      <p>매일 회차 1~2개씩 푼다. 틀린 문항은 오답노트에 정리.</p>
      <p>SQL양파의 회차별 페이지로 빠르게 풀이 가능: <a href="/exam/round-45/">45회</a>, <a href="/exam/round-50/">50회</a>, <a href="/exam/round-55/">55회</a>...</p>

      <h2>3주차 — 실전 모의고사</h2>
      <p>최근 3개 회차(58·59·60회)를 시험 환경처럼 90분 타이머로 풀이. 약점 챕터의 이론 재정리 + 단답형 암기.</p>
      <ul>
        <li>Day 15–17: 최근 회차 풀이 + 채점</li>
        <li>Day 18–19: 오답노트 회독 + 약점 챕터 보강</li>
        <li>Day 20: 랜덤 모의고사 + 시험 환경 시뮬레이션</li>
        <li>Day 21: 핵심 요약 정리 + 충분한 휴식</li>
      </ul>
    `,
  },
  {
    slug: 'sqld-tips',
    title: 'SQLD 단기 합격 팁 10가지',
    desc: '실제 합격자들이 공통으로 추천하는 SQLD 단기 합격 학습 팁 모음.',
    body: `
      <h2>학습 전략</h2>
      <ol>
        <li><strong>2과목에 시간을 많이 투입</strong> — 40문항이라 점수 비중이 크다.</li>
        <li><strong>이론 완벽 암기 X, 기출 반복 풀이 O</strong> — 같은 유형이 회차마다 반복 출제.</li>
        <li><strong>오답노트 만들기</strong> — 틀린 문항을 정리하면 약점이 한눈에.</li>
        <li><strong>SQL은 직접 쳐보기</strong> — Oracle Live SQL이나 SQLite로 실습하면 암기보다 빠르게 익힘.</li>
        <li><strong>윈도우 함수·계층형 질의 집중 정리</strong> — 매 회 출제되는 단골 영역.</li>
      </ol>

      <h2>시험 당일 팁</h2>
      <ol>
        <li><strong>1과목 빠르게 → 2과목 차분히</strong> — 1과목 10문항을 20분 내로 정리하고 70분을 2과목에 배분.</li>
        <li><strong>SQL 실행 결과 문제는 손으로 추적</strong> — 헷갈릴 땐 종이에 테이블 그려가며.</li>
        <li><strong>NULL 관련 문제는 신중히</strong> — IS NULL / NOT IN / NULL 비교 함정이 자주 나옴.</li>
        <li><strong>JOIN 결과 행 수 계산 문제</strong> — 카티시안 곱부터 시작해서 매칭/미매칭 구분.</li>
        <li><strong>플래그 기능 활용</strong> — 헷갈리는 문항은 플래그 후 마지막에 재검토.</li>
      </ol>
    `,
  },
  {
    slug: 'sqld-syllabus',
    title: 'SQLD 출제 범위 정리 — 1과목·2과목 핵심 키워드',
    desc: 'SQLD 자격증 1과목 데이터 모델링의 이해 + 2과목 SQL 기본 및 활용의 핵심 출제 키워드를 한 페이지로 정리.',
    body: `
      <h2>1과목 — 데이터 모델링의 이해 (10문항)</h2>

      <h3>데이터 모델의 이해</h3>
      <p>모델링의 정의·특징, 3층 스키마(외부·개념·내부), 데이터 모델의 구성 요소, ERD 표기법(바커·IE)</p>

      <h3>엔터티·속성</h3>
      <p>엔터티의 정의·특징·분류(기본·중심·행위), 속성의 분류(기본·설계·파생), 도메인</p>

      <h3>관계</h3>
      <p>관계의 정의·표기·차수(1:1·1:N·M:N), 선택성(필수·선택), 관계 차수와 카디널리티</p>

      <h3>식별자</h3>
      <p>주식별자의 4가지 특징(유일성·최소성·불변성·존재성), 식별자 분류(주·보조·내부·외부·인조), 식별자 관계 vs 비식별자 관계</p>

      <h3>정규화·반정규화</h3>
      <p>1정규화·2정규화·3정규화·BCNF, 함수적 종속, 반정규화의 목적과 기법</p>

      <h2>2과목 — SQL 기본 및 활용 (40문항)</h2>

      <h3>SELECT 기본</h3>
      <p>SELECT·FROM·WHERE·ORDER BY, 비교 연산자·논리 연산자, BETWEEN·IN·LIKE, 단일행 함수(문자·숫자·날짜·변환·NULL)</p>

      <h3>GROUP BY·HAVING</h3>
      <p>집계 함수(SUM·AVG·COUNT·MAX·MIN), GROUP BY·HAVING 차이, ROLLUP·CUBE·GROUPING SETS</p>

      <h3>JOIN</h3>
      <p>INNER JOIN·OUTER JOIN(LEFT·RIGHT·FULL)·NATURAL JOIN·CROSS JOIN·SELF JOIN, ON·USING 절</p>

      <h3>서브쿼리</h3>
      <p>단일행·다중행·다중컬럼 서브쿼리, 인라인 뷰, 상관 서브쿼리, EXISTS·NOT EXISTS</p>

      <h3>집합 연산자</h3>
      <p>UNION·UNION ALL·INTERSECT·MINUS(EXCEPT) 차이, 결과 집합의 컬럼 일치 조건</p>

      <h3>계층형 질의·윈도우 함수</h3>
      <p>START WITH·CONNECT BY·PRIOR·LEVEL, ORDER SIBLINGS BY, RANK·DENSE_RANK·ROW_NUMBER·NTILE, LAG·LEAD, ROWS·RANGE 윈도우 프레임</p>

      <h3>DDL·DML·DCL·TCL</h3>
      <p>CREATE·ALTER·DROP·TRUNCATE, INSERT·UPDATE·DELETE·MERGE, GRANT·REVOKE, COMMIT·ROLLBACK·SAVEPOINT</p>

      <h3>제약조건·뷰·인덱스</h3>
      <p>PK·FK·UNIQUE·NOT NULL·CHECK·DEFAULT, 뷰의 종류(Simple·Complex·Updatable), 인덱스의 효과와 한계</p>
    `,
  },
];

// ============================================================
// 사이트맵
// ============================================================
function buildSitemap() {
  const urls = [
    { loc: SITE + '/', priority: 1.0, changefreq: 'weekly' },
    { loc: SITE + '/exam/', priority: 0.9, changefreq: 'monthly' },
    { loc: SITE + '/theory/', priority: 0.9, changefreq: 'monthly' },
    ...rounds.map(r => ({ loc: `${SITE}/exam/round-${r.round}/`, priority: 0.8, changefreq: 'monthly' })),
    ...THEORY.subjects.flatMap(s => s.chapters.map(c => ({ loc: `${SITE}/theory/${c.id}/`, priority: 0.7, changefreq: 'monthly' }))),
    ...guides.map(g => ({ loc: `${SITE}/guide/${g.slug}/`, priority: 0.6, changefreq: 'yearly' })),
    { loc: SITE + '/privacy.html', priority: 0.3, changefreq: 'yearly' },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${NOW}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority.toFixed(1)}</priority>
  </url>`).join('\n')}
</urlset>
`;
  writeFileSync(join(DIST, 'sitemap.xml'), xml, 'utf8');
  return urls.length;
}

// ============================================================
// Main
// ============================================================
console.log('Generating static SEO pages...');

// 회차별 + 회차 인덱스
let cnt = 0;
for (const r of rounds) {
  writePage(`/exam/round-${r.round}/`, buildRoundPage(r));
  cnt++;
}
writePage('/exam/', buildExamIndexPage());
console.log(`  exam: ${rounds.length} round pages + 1 index`);

// 이론 챕터 + 인덱스
let chCnt = 0;
for (const s of THEORY.subjects) {
  for (const ch of s.chapters) {
    writePage(`/theory/${ch.id}/`, buildTheoryChapterPage(s, ch));
    chCnt++;
  }
}
writePage('/theory/', buildTheoryIndexPage());
console.log(`  theory: ${chCnt} chapter pages + 1 index`);

// 가이드
for (const g of guides) {
  writePage(`/guide/${g.slug}/`, buildGuide(g));
}
console.log(`  guide: ${guides.length} pages`);

// 사이트맵
const total = buildSitemap();
console.log(`  sitemap.xml: ${total} URLs`);

console.log(`Done. Total new pages: ${rounds.length + 1 + chCnt + 1 + guides.length}`);
