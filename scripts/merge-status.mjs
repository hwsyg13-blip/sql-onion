// Show per-round merge status: PDF + blog-full + blog-stub → unique (subject, number)

import { readFileSync } from 'node:fs';

const PDF_TEXT = 'C:/Users/hwsyg/AppData/Local/Temp/design/sql/project/uploads/sqld_text.txt';
const BLOG_RAW = 'scripts/blog-questions-raw.json';

// ---- parse PDF (same minimal logic as before) ----
const CIRCLED = { '①': 0, '②': 1, '③': 2, '④': 3 };
function parsePdf() {
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
    const qs = [];
    let subject = null, q = null;
    const flush = () => { if (q && q.options.length === 4 && q.correctIndex != null) qs.push(q); q = null; };
    for (const raw of s.body) {
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
      if (m && subject) { flush(); q = { round: s.round, subject, number: Number(m[1]), title: m[2].trim(), options: [], correctIndex: null, explanation: '', source: 'pdf' }; continue; }
      if (q && q.options.length === 0) q.title += ' ' + line;
      else if (q && q.correctIndex == null) q.options[q.options.length-1] += ' ' + line;
      else if (q && q.explanation) q.explanation += ' ' + line;
    }
    flush();
    result[s.round] = qs;
  }
  return result;
}

const pdf  = parsePdf();
const blog = JSON.parse(readFileSync(BLOG_RAW, 'utf8'));

// Merge: key = `${subject}-${number}`
// Priority: PDF > blog-full > blog-stub
const rounds = [45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60];
console.log('회차별 현황 (중복 제거 후):');
console.log('회차 | PDF | blog완전 | blog스텁(보기보강필요) | 합 | 제외=답불명확');
console.log('-'.repeat(78));
let grandComplete = 0, grandStub = 0, grandSkip = 0;
for (const r of rounds.slice().reverse()) {
  const map = new Map();
  let pdfN=0, bfN=0, bsN=0, skipN=0;

  for (const q of (pdf[r]||[])) {
    const k = `${q.subject}-${q.number}`;
    map.set(k, { ...q, source: 'pdf', hasFullOptions: true });
    pdfN++;
  }
  for (const q of (blog[r]||[])) {
    const k = `${q.subject}-${q.number}`;
    if (map.has(k) && map.get(k).source === 'pdf') continue; // PDF wins
    if (q.fullOptions) {
      map.set(k, { ...q, source: 'blog-full', hasFullOptions: true });
      bfN++;
    } else {
      // Skip if correctText is vacuous
      if (!q.correctText || q.correctText.length < 2 || /^\?+$/.test(q.correctText) || /미완성|생각이?\s*안\s*나|알\s*수\s*없음/.test(q.correctText)) {
        skipN++; continue;
      }
      map.set(k, { ...q, source: 'blog-stub', hasFullOptions: false });
      bsN++;
    }
  }

  const complete = Array.from(map.values()).filter(q => q.hasFullOptions).length;
  const stub = map.size - complete;
  grandComplete += complete; grandStub += stub; grandSkip += skipN;
  console.log(`${String(r).padStart(2)} | ${String(pdfN).padStart(3)} | ${String(bfN).padStart(7)} | ${String(bsN).padStart(15)} | ${String(map.size).padStart(2)} | ${String(skipN).padStart(2)}`);
}
console.log('-'.repeat(78));
console.log(`총합: 완전 4지=${grandComplete}, 스텁=${grandStub}, 제외=${grandSkip}`);
