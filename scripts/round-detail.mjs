// Show full detail for one round: PDF + blog merged, unique (subject, number)
// Usage: node scripts/round-detail.mjs 45

import { readFileSync } from 'node:fs';

const ROUND = Number(process.argv[2] || 45);
const PDF_TEXT = 'C:/Users/hwsyg/AppData/Local/Temp/design/sql/project/uploads/sqld_text.txt';
const BLOG_RAW = 'scripts/blog-questions-raw.json';
const CIRCLED = { '①': 0, '②': 1, '③': 2, '④': 3 };

function parsePdfRound(round) {
  const raw = readFileSync(PDF_TEXT, 'utf8');
  const lines = raw.split(/\r?\n/).filter(l => !/^-- \d+ of \d+ --\s*$/.test(l));
  let inside = false;
  const body = [];
  for (const l of lines) {
    if (inside) {
      if (/^제\d+회 SQLD 기출복원$/.test(l.trim())) break;
      body.push(l);
    } else if (l.trim() === `제${round}회 SQLD 기출복원`) {
      inside = true;
    }
  }
  const qs = [];
  let subject = null, q = null;
  const flush = () => { if (q && q.options.length === 4 && q.correctIndex != null) qs.push(q); q = null; };
  for (const raw of body) {
    const line = raw.trim();
    if (!line) continue;
    let m = line.match(/^\[(\d)과목\]/);
    if (m) { flush(); subject = `${m[1]}과목`; continue; }
    if (/^시험일:/.test(line)) continue;
    m = line.match(/^\[정답:\s*([①②③④])/);
    if (m && q) { q.correctIndex = CIRCLED[m[1]]; continue; }
    if (/^※/.test(line) && q) { q.explanation = (q.explanation?q.explanation+' ':'')+line.replace(/^※\s*/,''); continue; }
    m = line.match(/^([①②③④])\s*(.*)$/);
    if (m && q) { q.options[CIRCLED[m[1]]] = (m[2]||'').trim(); continue; }
    m = line.match(/^(\d+)\.\s+(.*)$/);
    if (m && subject) { flush(); q = { round, subject, number: Number(m[1]), title: m[2].trim(), options: [], correctIndex: null, explanation: '', source: 'pdf' }; continue; }
    if (q && q.options.length === 0) q.title += ' ' + line;
    else if (q && q.correctIndex == null) q.options[q.options.length-1] += ' ' + line;
    else if (q && q.explanation) q.explanation += ' ' + line;
  }
  flush();
  return qs;
}

const pdf = parsePdfRound(ROUND);
const blog = JSON.parse(readFileSync(BLOG_RAW, 'utf8'))[ROUND] || [];

// Merge
const map = new Map();
for (const q of pdf) {
  map.set(`${q.subject}-${q.number}`, { ...q, source: 'pdf', hasFullOptions: true });
}
for (const q of blog) {
  const k = `${q.subject}-${q.number}`;
  if (map.has(k)) continue;
  if (!q.correctText || q.correctText.length < 2 || /미완성|생각이?\s*안\s*나|알\s*수\s*없음|^\?+$/.test(q.correctText)) continue;
  if (q.fullOptions) {
    map.set(k, { ...q, source: 'blog-full', hasFullOptions: true });
  } else {
    map.set(k, { ...q, source: 'blog-stub', hasFullOptions: false });
  }
}

const sorted = Array.from(map.values()).sort((a,b) => {
  if (a.subject !== b.subject) return a.subject.localeCompare(b.subject);
  return a.number - b.number;
});

console.log(`제${ROUND}회 전체 ${sorted.length}문항\n`);
for (const q of sorted) {
  const tag = q.source === 'pdf' ? '[PDF]' : q.source === 'blog-full' ? '[BLOG완전]' : '[BLOG스텁]';
  console.log(`${tag} ${q.subject} ${q.number}번`);
  console.log(`Q: ${q.title}`);
  if (q.hasFullOptions) {
    for (let i = 0; i < 4; i++) {
      const mark = i === q.correctIndex ? '✓' : ' ';
      console.log(`  ${mark} ${String.fromCodePoint(9312+i)} ${q.options[i] || '(빈칸)'}`);
    }
  } else {
    console.log(`  정답(텍스트): ${q.correctText}`);
  }
  if (q.explanation) console.log(`  해설: ${q.explanation.slice(0, 200)}`);
  console.log();
}
