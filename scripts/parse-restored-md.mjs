// Parse 45~60회 복원 마크다운 파일 → scripts/authored/round-XX.json
//
// 섹션 순서 (한 문항):
//   ## N. 질문 제목 (+ 다음 줄들)
//   > 지문 / <pre>도식</pre> / <table>...</table> / ```sql ... ``` / (여러 개 가능, 순서 보존)
//   * ① 보기1
//   * ② 보기2
//   * ③ 보기3
//   * ④ 보기4
//   **정답: ① 보기1**
//   > 해설 (블록인용)
//
// 단답형:
//   ## N. (단답형) 질문
//   **정답: 답 텍스트**   ← 스킵

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

const MD_DIR = 'C:/Users/hwsyg/OneDrive/문서/Claude/Projects/SQLD 양파';
const OUT_DIR = 'scripts/authored';
if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

const CIRCLED = { '①': 0, '②': 1, '③': 2, '④': 3 };
const ROUND_DATES = {
  45: '2022년 5월', 46: '2022년 9월', 47: '2022년 11월',
  48: '2023년 3월', 49: '2023년 6월', 50: '2023년 9월', 51: '2023년 11월',
  52: '2024년 3월', 53: '2024년 5월', 54: '2024년 8월', 55: '2024년 11월',
  56: '2025년 3월', 57: '2025년 5월', 58: '2025년 8월', 59: '2025년 11월',
  60: '2026년 3월',
};

// ------------------------------------------------------------------
// HTML table → { headers, rows }
// ------------------------------------------------------------------
function parseTableHtml(html) {
  // 매우 단순한 파서 — <tr><th>...</th></tr> 에서 헤더, 그 외는 rows
  const stripTags = (s) => s.replace(/<[^>]+>/g, '').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&nbsp;/g,' ').trim();
  const trs = html.match(/<tr[\s\S]*?<\/tr>/gi) || [];
  const rows = [];
  for (const tr of trs) {
    const cells = tr.match(/<(th|td)[^>]*>[\s\S]*?<\/\1>/gi) || [];
    rows.push(cells.map(stripTags));
  }
  if (rows.length === 0) return null;
  // 첫 행이 th 포함하면 헤더, 아니면 전체를 데이터로 간주하고 1행을 헤더로 대체
  const firstHasTh = /<th/i.test(trs[0]);
  if (firstHasTh) {
    return { headers: rows[0], rows: rows.slice(1) };
  }
  // 헤더 없으면 빈 헤더 배열
  return { headers: rows[0].map((_, i) => `col${i+1}`), rows };
}

// ------------------------------------------------------------------
// 한 문항 섹션의 중간 영역(제목~선택지 사이) → references[] 추출
// 동시에 남은 '제목 추가 텍스트' 도 반환 (references 밖에 있는 평문)
// ------------------------------------------------------------------
function extractMidRegion(midText) {
  const refs = [];
  const trailingTitleLines = []; // 참조 블록 밖의 짧은 문장 (ex: 이어지는 제목)

  // 상태 머신: TEXT | PRE | TABLE | CODE | BLOCKQUOTE
  const lines = midText.split(/\r?\n/);
  let i = 0;
  let pendingText = null; // 현재 모으는 blockquote 텍스트

  const flushText = () => {
    if (pendingText && pendingText.trim()) {
      refs.push({ type: 'text', content: pendingText.trim() });
    }
    pendingText = null;
  };

  // Post-process: combine consecutive (ascii, table) into a single 'entity-diagram' block
  const postProcess = (inputRefs) => {
    const out = [];
    for (let k = 0; k < inputRefs.length; k++) {
      const cur = inputRefs[k];
      const nxt = inputRefs[k + 1];
      if (cur.type === 'ascii' && nxt && nxt.type === 'table') {
        // Extract entity name from "[ 고객 ]" or "[고객]" pattern
        const mName = cur.text.match(/\[\s*([^\]\n]+?)\s*\]/);
        // 마지막 컬럼이 "← 인스턴스" 같은 주석 라벨이면 제거
        let headers = nxt.headers.slice();
        let rows = nxt.rows.map(r => r.slice());
        const lastH = headers[headers.length - 1] || '';
        if (/^[←→]/.test(lastH.trim()) || /인스턴스|instance/i.test(lastH)) {
          headers.pop();
          rows = rows.map(r => r.slice(0, headers.length));
        }
        out.push({
          type: 'entity-diagram',
          entityName: mName ? mName[1].trim() : '',
          preText: cur.text,
          headers,
          rows,
        });
        k++; // skip the table
      } else {
        out.push(cur);
      }
    }
    return out;
  };

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // 빈 줄
    if (!trimmed) { flushText(); i++; continue; }

    // <pre> ... </pre>
    if (/^<pre\b/i.test(trimmed)) {
      flushText();
      const buf = [];
      // 같은 줄 뒤에 이어질 수 있음
      const afterTag = line.replace(/^\s*<pre[^>]*>/i, '');
      if (afterTag) buf.push(afterTag);
      i++;
      while (i < lines.length && !/<\/pre>/i.test(lines[i])) {
        buf.push(lines[i]);
        i++;
      }
      if (i < lines.length) {
        const last = lines[i].replace(/<\/pre>\s*$/i, '');
        if (last) buf.push(last);
        i++;
      }
      const text = buf.join('\n').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&nbsp;/g,' ').trimEnd();
      if (text.trim()) refs.push({ type: 'ascii', text });
      continue;
    }

    // <table ... </table>
    if (/^<table\b/i.test(trimmed)) {
      flushText();
      const buf = [line];
      i++;
      while (i < lines.length && !/<\/table>/i.test(lines[i])) {
        buf.push(lines[i]);
        i++;
      }
      if (i < lines.length) { buf.push(lines[i]); i++; }
      const html = buf.join('\n');
      const parsed = parseTableHtml(html);
      if (parsed) {
        refs.push({ type: 'table', headers: parsed.headers, rows: parsed.rows });
      } else {
        refs.push({ type: 'html', html });
      }
      continue;
    }

    // ```lang ... ```
    if (/^```/.test(trimmed)) {
      flushText();
      const lang = trimmed.slice(3).trim().toLowerCase();
      const buf = [];
      i++;
      while (i < lines.length && !/^```/.test(lines[i].trim())) {
        buf.push(lines[i]);
        i++;
      }
      if (i < lines.length) i++; // skip closing ```
      const code = buf.join('\n').trimEnd();
      if (code) {
        if (lang === 'sql' || lang === '' || lang === 'plsql') {
          refs.push({ type: 'sql', code });
        } else {
          refs.push({ type: 'text', content: code });
        }
      }
      continue;
    }

    // > 블록인용 (지문 / 설명)
    if (/^>\s?/.test(trimmed)) {
      const content = trimmed.replace(/^>\s?/, '');
      pendingText = pendingText ? pendingText + '\n' + content : content;
      i++;
      continue;
    }

    // 평문 라인 — 제목 이어짐으로 간주
    flushText();
    trailingTitleLines.push(trimmed);
    i++;
  }
  flushText();

  return { refs: postProcess(refs), trailingTitleExtra: trailingTitleLines.join(' ').trim() };
}

// ------------------------------------------------------------------
// 전체 MD 파일 파싱
// ------------------------------------------------------------------
function parseRoundMd(round, text) {
  // subject marker 사전 처리 — 무시하고 번호로 추론 (1-10 = 1과목, 11+ = 2과목)
  const inferSubject = (num) => (num >= 1 && num <= 10) ? '1과목' : '2과목';

  // 문항 경계: `^##\s+\d+\.` 로 시작하는 줄
  const lines = text.split(/\r?\n/);
  const questionSections = []; // [{ num, isShort, titleFirstLine, rawBody: string[] }]
  let cur = null;
  for (const line of lines) {
    const m = line.trim().match(/^##\s+(\d{1,2})\.\s*(\(단답형\))?\s*(.*)$/);
    if (m && (!cur || (cur && true))) {
      // flush previous
      if (cur) questionSections.push(cur);
      cur = {
        num: Number(m[1]),
        isShort: Boolean(m[2]),
        titleFirstLine: (m[3] || '').trim(),
        rawBody: [],
      };
      continue;
    }
    // 최상위 섹션 헤더 (## 1과목..., ## 2과목..., ## 정답 요약...) — 현재 섹션 종료
    if (cur && /^##\s+[^\d]/.test(line.trim()) && !line.trim().startsWith('## 정답') && !/^##\s+\d+\./.test(line.trim())) {
      questionSections.push(cur);
      cur = null;
      continue;
    }
    if (/^##\s+정답/.test(line.trim())) {
      // 정답 요약 표 진입 — 모든 문항 종료
      if (cur) { questionSections.push(cur); cur = null; }
      break;
    }
    if (cur) cur.rawBody.push(line);
  }
  if (cur) questionSections.push(cur);

  const mcq = [];
  const shortAnswer = [];

  for (const sec of questionSections) {
    const bodyText = sec.rawBody.join('\n');

    if (sec.isShort) {
      // 단답형: 제목 + **정답: text**
      const ansM = bodyText.match(/\*\*정답:\s*(.+?)\*\*/);
      shortAnswer.push({
        number: sec.num,
        title: sec.titleFirstLine,
        answer: ansM ? ansM[1].trim() : '',
        explanation: '',
      });
      continue;
    }

    // MCQ: body 에서 선택지·정답·해설·중간영역을 순서대로 분리
    // 1) 선택지 블록 시작 위치 찾기
    const allLines = bodyText.split(/\r?\n/);
    let firstOptionLineIdx = -1;
    for (let i = 0; i < allLines.length; i++) {
      const t = allLines[i].trim();
      if (/^\*\s+[①②③④]\s/.test(t) || /^\*\*[①②③④]\s+.+?\*\*$/.test(t)) {
        firstOptionLineIdx = i;
        break;
      }
    }
    if (firstOptionLineIdx === -1) continue; // 선택지 없음 → skip

    const midLines = allLines.slice(0, firstOptionLineIdx);
    const afterOptionLines = allLines.slice(firstOptionLineIdx);

    // 2) 중간 영역 → references + trailing title extra
    const { refs, trailingTitleExtra } = extractMidRegion(midLines.join('\n'));
    const fullTitle = (sec.titleFirstLine + (trailingTitleExtra ? ' ' + trailingTitleExtra : '')).trim();

    // 3) 선택지·정답·해설 파싱
    //   - 각 선택지 바로 아래에 <table>/<pre>/```sql``` 이 오면 그 선택지의 보기(optionReferences)
    //   - "**정답:** " 이후 블록인용은 해설
    const options = [null, null, null, null];
    const optionBodies = [[], [], [], []]; // 선택지 번호별 raw body lines
    let correctIndex = null;
    let explanation = '';
    let sawAnswer = false;
    let currentOptIdx = -1;

    for (let i = 0; i < afterOptionLines.length; i++) {
      const line = afterOptionLines[i];
      const t = line.trim();

      // 선택지 시작 — bullet "* ① ..." or bold "**① ...**"
      let m = t.match(/^\*\s+([①②③④])\s+(.+)$/);
      if (m) {
        currentOptIdx = CIRCLED[m[1]];
        options[currentOptIdx] = m[2].trim();
        continue;
      }
      m = t.match(/^\*\*([①②③④])\s+(.+?)\*\*$/);
      if (m && correctIndex == null) {
        currentOptIdx = CIRCLED[m[1]];
        options[currentOptIdx] = m[2].trim();
        continue;
      }

      // 정답
      m = t.match(/^\*\*정답:\s*([①②③④])(?:\s+(.*?))?\s*\*\*$/);
      if (m) { correctIndex = CIRCLED[m[1]]; sawAnswer = true; currentOptIdx = -1; continue; }

      // 해설 (정답 이후 blockquote)
      if (sawAnswer && /^>\s?/.test(t)) {
        explanation = (explanation ? explanation + ' ' : '') + t.replace(/^>\s?/, '');
        continue;
      }

      // 선택지 아래 블록 수집 (선택지 있고 정답 전일 때)
      if (!sawAnswer && currentOptIdx >= 0) {
        optionBodies[currentOptIdx].push(line);
      }
    }

    // 각 선택지 body 에서 references 추출 + 남은 평문은 선택지 텍스트 이어붙임
    const optionReferences = [undefined, undefined, undefined, undefined];
    for (let i = 0; i < 4; i++) {
      const body = optionBodies[i].join('\n');
      if (!body.trim()) continue;
      const { refs: optRefs, trailingTitleExtra: extraText } = extractMidRegion(body);
      if (extraText) {
        options[i] = (options[i] || '') + ' ' + extraText;
      }
      if (optRefs.length > 0) {
        optionReferences[i] = optRefs;
      }
    }

    // 선택지 텍스트 정규화
    for (let i = 0; i < 4; i++) {
      if (options[i]) options[i] = options[i].replace(/\s+/g, ' ').trim();
    }

    if (options.filter(Boolean).length === 4 && correctIndex != null) {
      const entry = {
        subject: inferSubject(sec.num),
        number: sec.num,
        title: fullTitle,
        options,
        correctIndex,
        explanation,
      };
      if (refs.length > 0) entry.references = refs;
      if (optionReferences.some(r => r && r.length)) {
        entry.optionReferences = optionReferences;
      }
      mcq.push(entry);
    }
  }

  return { mcq, shortAnswer };
}

// ------------------------------------------------------------------
// Main
// ------------------------------------------------------------------
const summary = [];
for (const fname of readdirSync(MD_DIR)) {
  const m = fname.match(/^(\d+)회_복원\.md$/);
  if (!m) continue;
  const round = Number(m[1]);
  const text = readFileSync(resolve(MD_DIR, fname), 'utf8');
  const { mcq, shortAnswer } = parseRoundMd(round, text);

  const authored = mcq.map(q => {
    const base = {
      subject: q.subject,
      number: q.number,
      title: q.title.replace(/\s+/g, ' ').trim(),
      options: q.options,
      correctIndex: q.correctIndex,
      explanation: q.explanation,
    };
    if (q.references && q.references.length) base.references = q.references;
    if (q.optionReferences && q.optionReferences.some(r => r && r.length)) {
      base.optionReferences = q.optionReferences;
    }
    return base;
  });

  const withRefs = authored.filter(q => q.references).length;
  const withOptRefs = authored.filter(q => q.optionReferences).length;

  const payload = {
    round,
    notes: `restored from ${fname} — MCQ ${mcq.length} (질문refs ${withRefs}, 선택지refs ${withOptRefs}) + 단답형 ${shortAnswer.length} 제외`,
    authored,
    shortAnswerOmitted: shortAnswer.map(s => ({ number: s.number, answer: s.answer })),
  };

  writeFileSync(resolve(OUT_DIR, `round-${round}.json`), JSON.stringify(payload, null, 2), 'utf8');
  summary.push({ round, mcq: mcq.length, short: shortAnswer.length, withRefs, withOptRefs });
}

summary.sort((a,b) => b.round - a.round);
console.log('회차별 파싱 결과:');
for (const s of summary) {
  console.log(`  제${s.round}회: MCQ ${s.mcq} (질문refs ${s.withRefs} · 선택지refs ${s.withOptRefs}) + 단답형(제외) ${s.short}`);
}
console.log('---');
const total = summary.reduce((a,s)=>a+s.mcq,0);
const totalRefs = summary.reduce((a,s)=>a+s.withRefs,0);
console.log(`총 ${total}문항 (references 포함: ${totalRefs})`);
console.log('다음: node scripts/build-quiz-bank.mjs  로 round-XX.ts 갱신');
