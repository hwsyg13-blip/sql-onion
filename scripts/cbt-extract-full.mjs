// Extract structured questions from cbt-text/*.txt with full title, options, answer, explanation.
// Output a single JSON for downstream processing.

import fs from 'node:fs';
import path from 'node:path';

const dir = 'scripts/cbt-text';
const pdfs = ['cbt1', 'cbt2', 'cbt3', 'cbt4', 'cbt5', 'cbt6', 'cbt7'];

function parse(txt) {
  const lines = txt.split('\n');
  const out = [];
  let cur = null;
  let phase = 'title'; // 'title' | 'options' | 'answer' | 'explanation'

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trim = line.trim();

    // Question start
    const qMatch = trim.match(/^(\d{1,2})\.\s+(.+)$/);
    if (qMatch && +qMatch[1] >= 1 && +qMatch[1] <= 50) {
      if (cur) out.push(cur);
      const titleClean = qMatch[2].replace(/\s+\d{1,2}\s+1\s+2\s+3\s+4\s*$/, '').trim();
      cur = {
        num: +qMatch[1],
        title: titleClean,
        options: ['', '', '', ''],
        answer: null,
        explanation: ''
      };
      phase = 'title';
      continue;
    }

    if (!cur) continue;

    // Answer
    const ansMatch = trim.match(/^정답\s*:\s*(\d)/);
    if (ansMatch) {
      cur.answer = +ansMatch[1];
      phase = 'explanation';
      continue;
    }

    // Option markers
    const optMatch = trim.match(/^([①②③④])\s*(.*)$/);
    if (optMatch) {
      const idx = '①②③④'.indexOf(optMatch[1]);
      cur.options[idx] = optMatch[2].trim();
      phase = `option-${idx}`;
      continue;
    }
    // Numeric option fallback "1 ..." (only if we've seen at least an option already)
    const numOptMatch = trim.match(/^([1234])\s+(.{2,})$/);
    if (numOptMatch && phase === 'title' && !cur.options.some(o => o)) {
      // Skip — likely page-nav numbers
    }

    // Continuation
    if (phase === 'title') {
      if (trim) cur.title += ' ' + trim;
    } else if (phase.startsWith('option-')) {
      const idx = +phase.split('-')[1];
      if (trim) cur.options[idx] += ' ' + trim;
    } else if (phase === 'explanation') {
      if (trim) cur.explanation += ' ' + trim;
    }
  }
  if (cur) out.push(cur);
  return out;
}

const allQuestions = [];
for (const pdf of pdfs) {
  const txt = fs.readFileSync(path.join(dir, `${pdf}.txt`), 'utf-8');
  const qs = parse(txt);
  for (const q of qs) {
    allQuestions.push({ pdf, ...q });
  }
}

fs.writeFileSync('scripts/cbt-text/all-extracted.json', JSON.stringify(allQuestions, null, 2));
console.log(`Extracted ${allQuestions.length} entries total.`);
console.log('Saved to scripts/cbt-text/all-extracted.json');

// Sample
const sample = allQuestions.find(q => q.pdf === 'cbt3' && q.num === 1);
if (sample) {
  console.log('\nSample (cbt3 Q1):');
  console.log('  title:', sample.title.slice(0, 80));
  console.log('  options:', sample.options.map(o => o.slice(0, 30)));
  console.log('  answer:', sample.answer);
}
