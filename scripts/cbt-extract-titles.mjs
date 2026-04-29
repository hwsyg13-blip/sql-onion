// Extract question titles + answer from each cbt-text/cbt*.txt to identify duplicates.

import fs from 'node:fs';
import path from 'node:path';

const dir = 'scripts/cbt-text';
const pdfs = ['cbt1', 'cbt2', 'cbt3', 'cbt4', 'cbt5', 'cbt6', 'cbt7'];

const allQuestions = [];

for (const pdf of pdfs) {
  const txt = fs.readFileSync(path.join(dir, `${pdf}.txt`), 'utf-8');
  const lines = txt.split('\n');
  let currentQ = null;
  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    // Match "N. " at start (after trim)
    const qMatch = trimmed.match(/^(\d{1,2})\.\s+(.+)$/);
    if (qMatch) {
      const num = parseInt(qMatch[1], 10);
      const restAfter = qMatch[2];
      // Validate: rest should not be just option-page-numbers like "38   1   2   3   4"
      if (num >= 1 && num <= 50) {
        // The header row pattern includes a question + sometimes a page-num column
        // Push old, start new
        if (currentQ) allQuestions.push(currentQ);
        // Strip page number suffix pattern (e.g., trailing "38   1   2   3   4")
        const titleClean = restAfter.replace(/\s+\d{1,2}\s+1\s+2\s+3\s+4\s*$/, '').trim();
        currentQ = { pdf, num, titleLines: [titleClean], answer: null };
        continue;
      }
    }
    if (!currentQ) continue;
    const ansMatch = trimmed.match(/^정답\s*:\s*(\d)/);
    if (ansMatch) {
      currentQ.answer = parseInt(ansMatch[1], 10);
      continue;
    }
    // Stop accumulating title once we hit answer or option markers
    if (currentQ.answer === null && !trimmed.match(/^[①②③④]/) && !trimmed.match(/^\d\s/)) {
      if (trimmed) currentQ.titleLines.push(trimmed);
    }
  }
  if (currentQ) allQuestions.push(currentQ);
}

function shortKey(q) {
  return q.titleLines.join(' ').replace(/\s+/g, ' ').slice(0, 60);
}

const byKey = new Map();
for (const q of allQuestions) {
  const k = shortKey(q);
  if (!byKey.has(k)) byKey.set(k, []);
  byKey.get(k).push(`${q.pdf}-Q${q.num}`);
}

console.log(`Total entries across 7 PDFs: ${allQuestions.length}`);
console.log(`Unique question keys: ${byKey.size}`);
console.log(`Duplicate groups: ${[...byKey.values()].filter(v => v.length > 1).length}`);
console.log('');
console.log('=== Per-PDF count ===');
for (const pdf of pdfs) {
  const c = allQuestions.filter(q => q.pdf === pdf).length;
  console.log(`${pdf}: ${c} questions`);
}
console.log('');
console.log('=== Top 20 duplicate groups ===');
const dupSorted = [...byKey.entries()].filter(([k, v]) => v.length > 1).sort((a, b) => b[1].length - a[1].length);
for (let i = 0; i < Math.min(20, dupSorted.length); i++) {
  const [k, v] = dupSorted[i];
  console.log(`[${v.length}×] ${k.slice(0, 50)}... → ${v.join(', ')}`);
}

// Save all to JSON for next step
fs.writeFileSync('scripts/cbt-text/all-questions.json', JSON.stringify(
  { totalEntries: allQuestions.length, uniqueKeys: byKey.size, all: allQuestions },
  null, 2
));
console.log('\nSaved: scripts/cbt-text/all-questions.json');
