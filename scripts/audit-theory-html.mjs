#!/usr/bin/env node
// audit-theory-html.mjs
// HTML 버전(theoryHtml.ts) 기준 — AdSense 거절 진단의 정확한 baseline.
//
// markdown 버전은 사이트 렌더링에 사용되지 않으므로(theoryHtml.ts 가 우선 렌더링됨),
// 이 스크립트가 진짜 baseline. 측정:
//   - prose / table / code / mermaid 글자 비율
//   - 4섹션 label-tag 템플릿 사용 (핵심 요약 / 개념 도식화 / SQL 실전 / Before & After)
//   - step-card / step-flow / ex-box 등 인포그래픽 블록 사용 빈도
//   - 운영자 voice 마커 (사이트·학습자·정답률·기출.*?회.*?번)
//   - 자연 연결어 (그런데/사실/하지만/...)
//   - 1인칭 마커 (내가/필자/저는)

import fs from 'node:fs';
import path from 'node:path';

const TS_PATH = path.resolve('src/data/theoryHtml.ts');
const raw = fs.readFileSync(TS_PATH, 'utf8');

// TS 파일에서 객체 리터럴만 뽑아 eval — 'export const THEORY_HTML: Record<string,string> = { ... };'
const m = raw.match(/=\s*(\{[\s\S]*\});\s*$/);
if (!m) {
  console.error('Could not extract object literal from theoryHtml.ts');
  process.exit(1);
}
const THEORY_HTML = eval('(' + m[1] + ')');
const ids = Object.keys(THEORY_HTML).sort();
console.log(`Loaded ${ids.length} chapters from theoryHtml.ts`);

// 메타: id → 표시 이름
const META = {
  c111: '데이터모델의이해', c112: '엔터티', c113: '속성', c114: '관계', c115: '식별자',
  c121: '정규화', c122: '관계와조인의이해', c123: '트랜잭션의이해', c124: 'NULL속성', c125: '본질vs인조식별자',
  c211: '관계형DB개요', c212: 'SELECT문', c213: '함수', c214: 'WHERE절', c215: 'GROUPBY_HAVING',
  c216: 'ORDERBY절', c217: '조인', c218: '표준조인',
  c221: '서브쿼리', c222: '집합연산자', c223: '그룹함수', c224: '윈도우함수', c225: 'TopN쿼리',
  c226: '계층형질의', c227: 'PIVOT_UNPIVOT', c228: '정규표현식',
  c231: 'DML', c232: 'TCL', c233: 'DDL', c234: 'DCL',
};

// HTML 분석
const RE_TABLE = /<table\b[\s\S]*?<\/table>/gi;
const RE_PRE = /<pre\b[\s\S]*?<\/pre>/gi;
const RE_MERMAID = /<div\s+class="[^"]*\bmermaid\b[^"]*"[\s\S]*?<\/div>/gi;
const RE_STEPFLOW = /<div\s+class="[^"]*\bstep-flow\b[^"]*"[\s\S]*?<\/div>\s*<\/div>/gi; // approximate
const RE_LABEL_TAG = /<span\s+class="label-tag">([^<]+)<\/span>/g;
const RE_HEADER = /<h[1-4][^>]*>([\s\S]*?)<\/h[1-4]>/gi;
const RE_TAG = /<[^>]+>/g;
const RE_NBSP = /&nbsp;/g;
const RE_HTML_ENT = /&(amp|lt|gt|quot|#39|nbsp|mdash|ndash);/g;

const RE_CONNECTORS = /(그런데|그래서|사실|그러니까|하지만|왜냐하면|결국|그러면|반면에|따라서|즉|어차피|어쨌든|다만|단)/g;
const RE_FIRST_PERSON = /(내가|필자|저는|우리는|제가)/g;
// "운영자 voice" 마커 — 가이드에서 정의한 차별화 신호
const RE_VOICE_OPERATOR = /(이 사이트|학습자|정답률|풀이 데이터|운영자|편집자|기출\s*[0-9]+회\s*[0-9]+번)/g;

function decode(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–');
}

function analyze(html) {
  // 1) 블록별 추출 (제거 전 길이 기록)
  const tables = html.match(RE_TABLE) || [];
  const tableChars = tables.reduce((s, t) => s + decode(t.replace(RE_TAG, '')).length, 0);

  const pres = html.match(RE_PRE) || [];
  const codeChars = pres.reduce((s, t) => s + decode(t.replace(RE_TAG, '')).length, 0);

  const mermaids = html.match(RE_MERMAID) || [];
  const mermaidChars = mermaids.reduce((s, t) => s + decode(t.replace(RE_TAG, '')).length, 0);

  // step-flow 카드 (4단계 보드 같은 인포그래픽) — 통째로 prose 외 블록으로 집계
  const stepCards = (html.match(/class="step-card"/g) || []).length;
  // ex-box 카드 (보충 박스) — prose 으로 카운트되지만 별도 표시
  const exBoxes = (html.match(/class="ex-box"/g) || []).length;

  // label-tag 사용 — 4섹션 템플릿 신호
  const labels = [];
  let lm;
  while ((lm = RE_LABEL_TAG.exec(html))) labels.push(lm[1].trim());
  RE_LABEL_TAG.lastIndex = 0;

  // 헤더 텍스트 (h2~h4)
  const headers = [];
  let hm;
  while ((hm = RE_HEADER.exec(html))) {
    const txt = decode(hm[1].replace(RE_TAG, '')).trim();
    if (txt) headers.push(txt);
  }
  RE_HEADER.lastIndex = 0;

  // 2) prose 추출: tables / pres / mermaids 제거 후 태그 제거
  let proseHtml = html
    .replace(RE_TABLE, '')
    .replace(RE_PRE, '')
    .replace(RE_MERMAID, '');
  let prose = decode(proseHtml.replace(RE_TAG, '')).replace(/\s+/g, ' ').trim();
  const proseChars = prose.length;

  // 3) prose 안 시그널
  const connectors = (prose.match(RE_CONNECTORS) || []).length;
  const firstPerson = (prose.match(RE_FIRST_PERSON) || []).length;
  const voiceOperator = (prose.match(RE_VOICE_OPERATOR) || []).length;

  // 문장 종결 분석 — 마침표 있는 문장 vs 명사구/어간 종결
  // 단순 휴리스틱: 마침표/물음표/느낌표 개수 vs (마침표 없이 한글로 끝나는 짧은 단편) 개수
  const sentencesWithDot = (prose.match(/[가-힣\w][가-힣\w\s,]*[.!?]/g) || []).length;
  // line breaks → 단편 후보. h3·div·p 끊김에서 prose split
  // 다른 접근: prose 길이 / 마침표 수 = 평균 마침표 간격
  const avgGap = sentencesWithDot > 0 ? Math.round(proseChars / sentencesWithDot) : 0;

  // 4) 전체 유효 글자 (prose + table + code + mermaid)
  const total = proseChars + tableChars + codeChars + mermaidChars;
  const proseRatio = total ? proseChars / total : 0;
  const tableRatio = total ? tableChars / total : 0;
  const codeRatio = total ? codeChars / total : 0;
  const mermaidRatio = total ? mermaidChars / total : 0;

  return {
    total,
    proseChars,
    tableChars,
    codeChars,
    mermaidChars,
    proseRatio,
    tableRatio,
    codeRatio,
    mermaidRatio,
    labels,
    headers: headers.length,
    stepCards,
    exBoxes,
    connectors,
    firstPerson,
    voiceOperator,
    sentencesWithDot,
    avgGap,
  };
}

const rows = [];
for (const id of ids) {
  const html = THEORY_HTML[id];
  const a = analyze(html);

  // thin score (높을수록 thin/template)
  let score = 0;
  // prose 비율 낮을수록 페널티 — 목표 40%
  score += Math.max(0, 35 * (1 - a.proseRatio / 0.4));
  // table 비율 — 35% 초과부터 페널티 (study aid 자체는 OK이므로 상한 둠)
  score += Math.max(0, 15 * ((a.tableRatio - 0.35) / 0.2));
  // 4섹션 템플릿 label-tag 개수 (3개 이상이면 페널티)
  score += Math.min(15, Math.max(0, (a.labels.length - 2) * 5));
  // 운영자 voice 0건 페널티
  score += a.voiceOperator === 0 ? 15 : 0;
  // 자연 연결어 부족
  score += a.connectors < 5 ? Math.max(0, (5 - a.connectors) * 2) : 0;
  // 평균 마침표 간격 너무 길면 명사구 종결 많다는 뜻 (200자 넘으면 페널티)
  if (a.avgGap > 200) score += Math.min(10, (a.avgGap - 200) / 50);

  score = Math.round(Math.min(100, Math.max(0, score)));

  rows.push({
    id,
    name: META[id] || id,
    chars: a.total,
    proseR: +(a.proseRatio * 100).toFixed(1),
    tableR: +(a.tableRatio * 100).toFixed(1),
    codeR: +(a.codeRatio * 100).toFixed(1),
    mermR: +(a.mermaidRatio * 100).toFixed(1),
    labels: a.labels.length,
    h: a.headers,
    sCard: a.stepCards,
    exBox: a.exBoxes,
    sent: a.sentencesWithDot,
    gap: a.avgGap,
    conn: a.connectors,
    fp: a.firstPerson,
    voice: a.voiceOperator,
    score,
  });
}

rows.sort((a, b) => b.score - a.score);

const headers = ['id', 'name', 'chars', 'prose%', 'table%', 'code%', 'merm%', 'labels', 'h', 'sCard', 'exBox', 'sent', 'gap', 'conn', 'fp', 'voice', 'score'];
const widths = headers.map((h) => h.length);

const lines = rows.map((r) => [
  r.id, r.name, String(r.chars), String(r.proseR), String(r.tableR), String(r.codeR), String(r.mermR),
  String(r.labels), String(r.h), String(r.sCard), String(r.exBox),
  String(r.sent), String(r.gap), String(r.conn), String(r.fp), String(r.voice), String(r.score),
]);
for (const cells of lines) cells.forEach((c, i) => { if (c.length > widths[i]) widths[i] = c.length; });

function printRow(cells) { console.log(cells.map((c, i) => c.padEnd(widths[i])).join('  ')); }
printRow(headers);
printRow(headers.map((_, i) => '-'.repeat(widths[i])));
for (const cells of lines) printRow(cells);

// Aggregate
const avg = (k) => (rows.reduce((s, r) => s + r[k], 0) / rows.length).toFixed(1);
console.log('');
console.log('--- Aggregate ---');
console.log(`Files: ${rows.length}`);
console.log(`Avg prose%:   ${avg('proseR')}`);
console.log(`Avg table%:   ${avg('tableR')}`);
console.log(`Avg code%:    ${avg('codeR')}`);
console.log(`Avg mermaid%: ${avg('mermR')}`);
console.log(`Avg labels/ch: ${avg('labels')}`);
console.log(`Avg sentence gap (chars): ${avg('gap')}`);
console.log(`Files w/ voice 0: ${rows.filter((r) => r.voice === 0).length}/${rows.length}`);
console.log(`Files w/ first-person 0: ${rows.filter((r) => r.fp === 0).length}/${rows.length}`);
console.log(`Files w/ <5 connectors: ${rows.filter((r) => r.conn < 5).length}/${rows.length}`);
console.log(`Avg score: ${avg('score')}`);

// label distribution
const allLabels = new Map();
for (const r of rows) {
  // re-extract for distribution
  const html = THEORY_HTML[r.id];
  let lm;
  RE_LABEL_TAG.lastIndex = 0;
  while ((lm = RE_LABEL_TAG.exec(html))) {
    const k = lm[1].trim();
    allLabels.set(k, (allLabels.get(k) || 0) + 1);
  }
}
console.log('');
console.log('--- label-tag distribution ---');
[...allLabels.entries()].sort((a, b) => b[1] - a[1]).forEach(([k, v]) => console.log(`  ${v.toString().padStart(3)}  ${k}`));

console.log('');
console.log('--- Top 5 thinnest ---');
rows.slice(0, 5).forEach((r) => console.log(`  ${r.score.toString().padStart(3)}  ${r.id} ${r.name}  (chars ${r.chars}, prose ${r.proseR}%, labels ${r.labels})`));
