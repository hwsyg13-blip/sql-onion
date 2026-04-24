// Parse yunamom.tistory.com blog posts → structured questions
// Output: src/data/quizBank.ts
//
// Strategy:
//   - Blog (rounds 45-57): extract questions that have 4 clear options. Questions
//     without inline options are skipped (they only give an "answer text" and we
//     can't reconstruct multiple choice from that).
//   - PDF (rounds 58-60): already complete, use as-is.
//
// Usage:  node scripts/parse-blog.mjs

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

const BLOG_DIR = 'C:/Users/hwsyg/AppData/Local/Temp/blog';
const PDF_TEXT = 'C:/Users/hwsyg/AppData/Local/Temp/design/sql/project/uploads/sqld_text.txt';

const ROUND_DATES = {
  45: '2022년 5월', 46: '2022년 9월', 47: '2022년 11월',
  48: '2023년 3월', 49: '2023년 6월', 50: '2023년 9월', 51: '2023년 11월',
  52: '2024년 3월', 53: '2024년 5월', 54: '2024년 8월', 55: '2024년 11월',
  56: '2025년 3월', 57: '2025년 5월', 58: '2025년 8월', 59: '2025년 11월',
  60: '2026년 3월',
};

// ------------------------------------------------------------------
// HTML → text
// ------------------------------------------------------------------
function extractArticleBody(html) {
  const start = html.indexOf('class="tt_article_useless_p_margin');
  if (start < 0) return '';
  const after = html.indexOf('>', start) + 1;
  const endMarkers = [
    '<div class="related-articles',
    '<div class="article-footer',
    '<section class="relate',
    '<ul class="article-footer',
  ];
  let end = html.length;
  for (const m of endMarkers) {
    const i = html.indexOf(m, after);
    if (i > 0 && i < end) end = i;
  }
  return html.slice(after, end);
}

function htmlToText(html) {
  html = html.replace(/<script[\s\S]*?<\/script>/gi, '');
  html = html.replace(/<style[\s\S]*?<\/style>/gi, '');
  html = html.replace(/<br\s*\/?>/gi, '\n');
  html = html.replace(/<\/(p|div|li|h[1-6]|tr|td|th|table|blockquote|ol|ul)>/gi, '\n');
  html = html.replace(/<(p|div|li|h[1-6]|tr|td|th|table|blockquote|ol|ul)[^>]*>/gi, '\n');
  html = html.replace(/<[^>]+>/g, '');
  const entities = {
    '&nbsp;': ' ', '&amp;': '&', '&lt;': '<', '&gt;': '>',
    '&quot;': '"', '&#39;': "'", '&rarr;': '→', '&hellip;': '…',
  };
  for (const [k, v] of Object.entries(entities)) html = html.split(k).join(v);
  html = html.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)));
  html = html.replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)));
  return html;
}

// ------------------------------------------------------------------
// Parse blog text
// ------------------------------------------------------------------
const CIRCLED_MAP  = { '①': 0, '②': 1, '③': 2, '④': 3 };
const EMOJI_MAP    = { '1️⃣': 0, '2️⃣': 1, '3️⃣': 2, '4️⃣': 3 };
const EMOJI_CHARS  = Object.keys(EMOJI_MAP);

// Normalize a line so emoji/numbered markers become circled markers:
function normalizeMarkers(s) {
  // emoji → circled
  for (const [emoji, idx] of Object.entries(EMOJI_MAP)) {
    s = s.split(emoji).join(['①','②','③','④'][idx]);
  }
  return s;
}

// Detect option lines:  "1)", "1번", "1) text", "1. text" (context-sensitive — only after a question stem)
// We handle them *after* splitting so apply carefully.
function parseOptionLine(line) {
  // ①~④ circled
  let m = line.match(/^([①②③④])\s*(.*)$/);
  if (m) return { idx: CIRCLED_MAP[m[1]], text: m[2].trim() };
  // "1)" "2)" "3)" "4)" — number-paren
  m = line.match(/^([1-4])\)\s*(.+)$/);
  if (m) return { idx: Number(m[1]) - 1, text: m[2].trim() };
  // "1번." "2번"
  m = line.match(/^([1-4])번[.)]?\s*(.+)$/);
  if (m) return { idx: Number(m[1]) - 1, text: m[2].trim() };
  return null;
}

function parseAnswerLine(line) {
  // "정답: 3번 ..." / "정답→ 3번 ..." / "정답: ③" / "정답→ ③ ..."
  let m = line.match(/정답\s*[:→\-]?\s*([①②③④])/);
  if (m) return CIRCLED_MAP[m[1]];
  m = line.match(/정답\s*[:→\-]?\s*([1-4])(?:번|[.)])?/);
  if (m) return Number(m[1]) - 1;
  // "정답: 1️⃣"
  for (const e of EMOJI_CHARS) {
    if (line.includes('정답') && line.includes(e)) return EMOJI_MAP[e];
  }
  return null;
}

function parseRoundFromText(round, text) {
  text = normalizeMarkers(text);
  const lines = text.split(/\r?\n/)
    .map(l => l.replace(/\s+/g, ' ').trim())
    .filter(Boolean);

  const questions = [];
  let subject = null;
  let q = null;

  const flush = () => {
    if (!q) { return; }
    const valid = q.options.filter(o => o && o.trim()).length === 4 && q.correctIndex != null;
    if (valid) questions.push(q);
    q = null;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^(더보기|관련\s*글|목차|TAG|#)/i.test(line)) continue;

    // Subject marker
    let m = line.match(/(?:^|[^\d])(\d)\s*과목/);
    if (m && (line.includes('객관식') || line.includes('단답') || line.includes('복원') || line.length < 40)) {
      flush();
      subject = `${m[1]}과목`;
      continue;
    }

    // Question start — multiple styles:
    //  "■ 문제 49." or "문제 49." or "49. ..." or "■ 문제 49"
    m = line.match(/^[■◆●]?\s*문제\s*(\d{1,2})\s*[.)]?\s*(.*)$/) ||
        line.match(/^(\d{1,2})\s*[.)]\s+(.+)$/);
    if (m && subject && Number(m[1]) >= 1 && Number(m[1]) <= 60) {
      // Guard against mistaking option "1)" inside a question body as a new question.
      // Options are usually 1-4; real question numbers extend further. But 1-4 can be
      // ambiguous. We disambiguate: if we currently have a partially-built q AND
      // its options are < 4 AND the candidate number is 1-4, treat as option.
      const candidate = Number(m[1]);
      if (q && q.options.length < 4 && q.correctIndex == null && candidate >= 1 && candidate <= 4) {
        const opt = parseOptionLine(line);
        if (opt) {
          q.options[opt.idx] = opt.text;
          continue;
        }
      }
      flush();
      q = {
        round, subject,
        number: candidate,
        title: (m[2] || '').trim(),
        options: [],
        correctIndex: null,
        explanation: '',
      };
      continue;
    }

    // Answer
    const ansIdx = parseAnswerLine(line);
    if (ansIdx != null && q) {
      q.correctIndex = ansIdx;
      // The answer line itself might include the text — store as explanation seed
      const trailing = line.replace(/^.*정답\s*[:→\-]?\s*(?:[①②③④]|[1-4][번.)]?)\s*/, '').trim();
      if (trailing) q.explanation = trailing;
      continue;
    }

    // Explanation
    if (q && q.correctIndex != null && /^(해설|풀이|※)/.test(line)) {
      q.explanation = (q.explanation ? q.explanation + ' ' : '') +
        line.replace(/^(해설|풀이|※)\s*[:)]?\s*/, '');
      continue;
    }

    // Option
    if (q && q.correctIndex == null) {
      const opt = parseOptionLine(line);
      if (opt) {
        q.options[opt.idx] = opt.text;
        continue;
      }
    }

    // Multi-option on one line: "① a ② b ③ c ④ d"
    if (q && q.options.length === 0 && /[①②③④]/.test(line)) {
      const pieces = line.split(/(?=[①②③④])/);
      for (const p of pieces) {
        const mm = p.match(/^([①②③④])\s*(.*)$/);
        if (mm) q.options[CIRCLED_MAP[mm[1]]] = (mm[2] || '').trim();
      }
      if (q.options.filter(Boolean).length >= 2) continue;
    }

    // Continuations
    if (q) {
      if (q.options.length === 0 && q.correctIndex == null) {
        q.title += ' ' + line;
      } else if (q.correctIndex != null) {
        q.explanation = (q.explanation ? q.explanation + ' ' : '') + line;
      }
    }
  }
  flush();

  // Deduplicate by (subject, number) — longer title wins
  const seen = new Map();
  for (const qq of questions) {
    qq.title = qq.title.replace(/\s+/g, ' ').trim();
    qq.options = qq.options.map(o => (o || '').replace(/\s+/g, ' ').trim());
    qq.explanation = qq.explanation.replace(/\s+/g, ' ').trim();
    const key = `${qq.subject}-${qq.number}`;
    if (!seen.has(key) || seen.get(key).title.length < qq.title.length) {
      seen.set(key, qq);
    }
  }
  return Array.from(seen.values()).sort((a, b) => {
    if (a.subject !== b.subject) return a.subject.localeCompare(b.subject);
    return a.number - b.number;
  });
}

// ------------------------------------------------------------------
// PDF parser (original) — for rounds 58-60
// ------------------------------------------------------------------
function parsePdfText() {
  const raw = readFileSync(PDF_TEXT, 'utf8');
  const lines = raw.split(/\r?\n/).filter(l => !/^-- \d+ of \d+ --\s*$/.test(l));
  const sections = [];
  let cur = null;
  for (const l of lines) {
    const m = /^제(\d+)회 SQLD 기출복원$/.exec(l.trim());
    if (m) { if (cur) sections.push(cur); cur = { round: Number(m[1]), body: [] }; continue; }
    if (cur) cur.body.push(l);
  }
  if (cur) sections.push(cur);

  const result = {};
  for (const s of sections) {
    result[s.round] = parsePdfRound(s.round, s.body.join('\n'));
  }
  return result;
}

function parsePdfRound(round, text) {
  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const qs = [];
  let subject = null;
  let q = null;
  const flush = () => { if (q && q.options.length === 4 && q.correctIndex != null) qs.push(q); q = null; };

  for (const line of lines) {
    let m = line.match(/^\[(\d)과목\]/);
    if (m) { flush(); subject = `${m[1]}과목`; continue; }
    if (/^시험일:/.test(line)) continue;

    m = line.match(/^\[정답:\s*([①②③④])/);
    if (m && q) { q.correctIndex = CIRCLED_MAP[m[1]]; continue; }

    if (/^※/.test(line) && q) {
      q.explanation = (q.explanation ? q.explanation + ' ' : '') + line.replace(/^※\s*/, '');
      continue;
    }

    m = line.match(/^([①②③④])\s*(.*)$/);
    if (m && q) { q.options[CIRCLED_MAP[m[1]]] = (m[2] || '').trim(); continue; }

    m = line.match(/^(\d+)\.\s+(.*)$/);
    if (m && subject) {
      flush();
      q = { round, subject, number: Number(m[1]), title: m[2].trim(), options: [], correctIndex: null, explanation: '' };
      continue;
    }

    if (q && q.options.length === 0) q.title += ' ' + line;
    else if (q && q.correctIndex == null) q.options[q.options.length - 1] += ' ' + line;
    else if (q && q.explanation) q.explanation += ' ' + line;
  }
  flush();
  return qs;
}

// ------------------------------------------------------------------
// Main
// ------------------------------------------------------------------
const blogRounds = {};
for (const f of readdirSync(BLOG_DIR)) {
  const m = f.match(/^round-(\d+)\.html$/);
  if (!m) continue;
  const round = Number(m[1]);
  const html = readFileSync(resolve(BLOG_DIR, f), 'utf8');
  const body = extractArticleBody(html);
  const text = htmlToText(body);
  blogRounds[round] = parseRoundFromText(round, text);
}

const pdfRounds = parsePdfText();

// Merge: per round, pick the source with MORE questions.
// For 58-60, use PDF (blog has nothing).
// For 45-57, use whichever is bigger (blog usually wins now that parser handles its format).
const merged = {};
for (const r of Object.keys(ROUND_DATES).map(Number)) {
  const blog = blogRounds[r] || [];
  const pdf  = pdfRounds[r] || [];
  // Prefer blog if it has ≥ pdf count; else pdf
  merged[r] = (blog.length >= pdf.length ? blog : pdf);
  if (merged[r] === blog && blog.length === 0) merged[r] = pdf;
}

// Summary
console.log('회차별 문항 수 (blog vs pdf):');
console.log('---------------------------------------------------');
let total = 0;
const sortedRounds = Object.keys(merged).map(Number).sort((a, b) => b - a);
for (const r of sortedRounds) {
  const blog = blogRounds[r]?.length || 0;
  const pdf = pdfRounds[r]?.length || 0;
  const chosen = merged[r].length;
  const source = (merged[r] === blogRounds[r] && blog > 0) ? 'BLOG' : 'PDF';
  console.log(`제${r}회: ${String(chosen).padStart(2)}문제 (blog=${String(blog).padStart(2)}, pdf=${String(pdf).padStart(2)}, pick=${source})`);
  total += chosen;
}
console.log('---------------------------------------------------');
console.log(`총 ${total}문항`);

// Write quizBank.ts
const all = [];
let nextId = 10000;
for (const r of sortedRounds) {
  for (const q of merged[r]) {
    all.push({
      id: nextId++,
      examSetId: `round-${r}`,
      examLabel: `제${r}회 (${ROUND_DATES[r] || ''})`,
      round: r,
      subject: q.subject,
      number: q.number,
      title: q.title,
      options: q.options.slice(0, 4),
      correctIndex: q.correctIndex,
      explanation: q.explanation,
    });
  }
}

const examSets = sortedRounds.map(r => ({
  id: `round-${r}`,
  round: r,
  label: `제${r}회`,
  date: ROUND_DATES[r] || '',
  count: merged[r].length,
}));

const tsBody = `// Auto-generated from yunamom.tistory.com (제45~57회) + PDF 복원 (제58~60회)
// 총 ${all.length}문항

export type QuizQuestion = {
  id: number;
  examSetId: string;
  examLabel: string;
  round: number;
  subject: '1과목' | '2과목';
  number: number;
  title: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export const EXAM_SETS: { id: string; round: number; label: string; date: string; count: number }[] = ${JSON.stringify(examSets, null, 2)};

export const QUIZ_BANK: QuizQuestion[] = ${JSON.stringify(all, null, 2)};
`;

writeFileSync('src/data/quizBank.ts', tsBody, 'utf8');
console.log(`\nsrc/data/quizBank.ts written (${all.length} questions)`);
