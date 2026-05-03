#!/usr/bin/env node
// audit-theory-tone.mjs
// Diagnostic for AdSense rejection — measures "AI-generated feel" + thin-content signals.
//
// For each chapter under "Projects/SQLD 이론/*.md":
//   - char counts: total, prose (paragraphs), tables, code, mermaid
//   - structural patterns: bracketed section headers, fragment endings,
//     "30초 정리"-style closers, 1인칭/연결어 markers
//   - composite "thin-content score" (lower = more prose, higher = more template/table)

import fs from 'node:fs';
import path from 'node:path';

const THEORY_DIR = path.resolve(
  process.cwd(),
  '..',
  'SQLD 이론'
);

const files = fs
  .readdirSync(THEORY_DIR)
  .filter((f) => f.endsWith('.md') && f !== '00_전체목차.md')
  .sort();

// Patterns
const RE_BRACKET_HEADER = /^#{1,4}\s*\[[^\]]+\]/m;
const RE_TABLE_ROW = /^\s*\|.*\|\s*$/;
const RE_CODE_FENCE = /^```/;
const RE_MERMAID_FENCE = /^```mermaid/;
const RE_SQL_FENCE = /^```sql/i;
const RE_HEADER = /^#{1,6}\s/;
const RE_BLOCKQUOTE = /^>/;
const RE_TERSE_END = /(?:[가-힣]+(?:이다|한다|된다|뿐|만)|[\)\]])\s*$/; // terminator-style fragments
const RE_FRAGMENT_END = /[가-힣]\s*$/; // ends with a Korean syllable, no punctuation/사동형
const RE_NATURAL_CONNECTOR = /(그런데|그래서|사실|그러니까|하지만|왜냐하면|결국|그러면|반면에|따라서|즉)/g;
const RE_FIRST_PERSON = /(내가|필자|저는|우리는|제가)/g;
const RE_EXPERIENCE = /(실무에서|실제로|현장에서|예전에|얼마전|경험|프로젝트에서)/g;
const RE_CLOSER_30S = /30초.*?(정리|복습|시험)/;

function classifyLines(text) {
  const lines = text.split(/\r?\n/);
  const out = {
    total: text.length,
    proseChars: 0,
    tableChars: 0,
    codeChars: 0,
    mermaidChars: 0,
    sqlChars: 0,
    headerChars: 0,
    blockquoteChars: 0,
    bracketHeaders: 0,
    nonBracketHeaders: 0,
    tableRows: 0,
    codeBlocks: 0,
    mermaidBlocks: 0,
    sqlBlocks: 0,
    fragmentEnds: 0,
    naturalConnectors: 0,
    firstPerson: 0,
    experienceMarkers: 0,
    has30sCloser: false,
  };

  let inFence = false;
  let fenceKind = null;
  let proseLineBuffer = [];

  function flushProse() {
    if (proseLineBuffer.length === 0) return;
    const block = proseLineBuffer.join('\n').trim();
    if (block) {
      // count fragment-end (terse style)
      const sentences = block.split(/(?<=[.!?。])\s+|\n+/);
      for (const s of sentences) {
        const trimmed = s.trim();
        if (!trimmed) continue;
        // ends without punctuation but with Korean letter? -> fragment
        if (
          /[가-힣]$/.test(trimmed) &&
          !/[.!?。]$/.test(trimmed) &&
          trimmed.length > 4
        ) {
          out.fragmentEnds++;
        }
      }
      out.naturalConnectors += (block.match(RE_NATURAL_CONNECTOR) || []).length;
      out.firstPerson += (block.match(RE_FIRST_PERSON) || []).length;
      out.experienceMarkers += (block.match(RE_EXPERIENCE) || []).length;
    }
    proseLineBuffer = [];
  }

  for (const line of lines) {
    if (RE_CODE_FENCE.test(line)) {
      flushProse();
      if (inFence) {
        // closing
        inFence = false;
        fenceKind = null;
      } else {
        inFence = true;
        if (RE_MERMAID_FENCE.test(line)) {
          fenceKind = 'mermaid';
          out.mermaidBlocks++;
        } else if (RE_SQL_FENCE.test(line)) {
          fenceKind = 'sql';
          out.sqlBlocks++;
          out.codeBlocks++;
        } else {
          fenceKind = 'code';
          out.codeBlocks++;
        }
      }
      continue;
    }

    if (inFence) {
      const len = line.length + 1;
      if (fenceKind === 'mermaid') out.mermaidChars += len;
      else if (fenceKind === 'sql') {
        out.sqlChars += len;
        out.codeChars += len;
      } else out.codeChars += len;
      continue;
    }

    if (RE_HEADER.test(line)) {
      flushProse();
      out.headerChars += line.length + 1;
      if (RE_BRACKET_HEADER.test(line)) out.bracketHeaders++;
      else out.nonBracketHeaders++;
      if (RE_CLOSER_30S.test(line)) out.has30sCloser = true;
      continue;
    }

    if (RE_TABLE_ROW.test(line)) {
      flushProse();
      out.tableChars += line.length + 1;
      out.tableRows++;
      continue;
    }

    if (RE_BLOCKQUOTE.test(line)) {
      flushProse();
      out.blockquoteChars += line.length + 1;
      // also check 30s
      if (RE_CLOSER_30S.test(line)) out.has30sCloser = true;
      continue;
    }

    if (line.trim() === '') {
      flushProse();
      continue;
    }

    // prose line
    proseLineBuffer.push(line);
    out.proseChars += line.length + 1;
  }
  flushProse();

  return out;
}

const rows = [];
for (const f of files) {
  const text = fs.readFileSync(path.join(THEORY_DIR, f), 'utf8');
  const m = classifyLines(text);
  const proseRatio = m.total ? m.proseChars / m.total : 0;
  const tableRatio = m.total ? m.tableChars / m.total : 0;

  // thin score (0~100, higher = thinner/more AI-feeling)
  // weights:
  //   - low prose ratio: penalty
  //   - high table ratio: penalty
  //   - many bracketed headers: penalty
  //   - many fragment endings vs prose volume: penalty
  //   - few connectors / no first-person / no experience: penalty
  //   - has 30s closer: small penalty
  let score = 0;
  score += Math.max(0, 35 * (1 - proseRatio / 0.5)); // target prose ratio 50%
  score += Math.max(0, 25 * (tableRatio / 0.4)); // 40%+ tables = max penalty
  score += Math.min(15, m.bracketHeaders * 3); // 5+ bracket headers = full penalty
  const fragmentDensity = m.proseChars > 0 ? m.fragmentEnds / (m.proseChars / 100) : 0;
  score += Math.min(10, fragmentDensity * 2);
  score += m.firstPerson === 0 ? 5 : 0;
  score += m.experienceMarkers === 0 ? 5 : 0;
  score += m.naturalConnectors < 3 ? 5 : 0;
  if (m.has30sCloser) score += 2;

  score = Math.round(Math.min(100, score));

  rows.push({
    file: f,
    chars: m.total,
    prose: m.proseChars,
    table: m.tableChars,
    code: m.codeChars,
    mermaid: m.mermaidChars,
    proseRatio: +(proseRatio * 100).toFixed(1),
    tableRatio: +(tableRatio * 100).toFixed(1),
    bracketH: m.bracketHeaders,
    plainH: m.nonBracketHeaders,
    fragments: m.fragmentEnds,
    connectors: m.naturalConnectors,
    first: m.firstPerson,
    exp: m.experienceMarkers,
    closer30s: m.has30sCloser ? 1 : 0,
    score,
  });
}

// sort by score desc
rows.sort((a, b) => b.score - a.score);

// print table
const headers = [
  'file',
  'chars',
  'prose%',
  'table%',
  'bracketH',
  'plainH',
  'frags',
  'conn',
  '1ps',
  'exp',
  '30s',
  'score',
];
const widths = headers.map((h) => h.length);

const lines = rows.map((r) => [
  r.file.replace(/\.md$/, ''),
  String(r.chars),
  String(r.proseRatio),
  String(r.tableRatio),
  String(r.bracketH),
  String(r.plainH),
  String(r.fragments),
  String(r.connectors),
  String(r.first),
  String(r.exp),
  String(r.closer30s),
  String(r.score),
]);

for (const cells of lines) {
  cells.forEach((c, i) => {
    if (c.length > widths[i]) widths[i] = c.length;
  });
}

function printRow(cells) {
  console.log(
    cells.map((c, i) => c.padEnd(widths[i])).join('  ')
  );
}

printRow(headers);
printRow(headers.map((_, i) => '-'.repeat(widths[i])));
for (const cells of lines) printRow(cells);

// summary
const avg = (k) => (rows.reduce((s, r) => s + r[k], 0) / rows.length).toFixed(1);
console.log('');
console.log('--- Aggregate ---');
console.log(`Files: ${rows.length}`);
console.log(`Avg prose%: ${avg('proseRatio')}`);
console.log(`Avg table%: ${avg('tableRatio')}`);
console.log(`Avg score:  ${avg('score')}`);
console.log(`Files w/ 0 first-person:  ${rows.filter((r) => r.first === 0).length}/${rows.length}`);
console.log(`Files w/ 0 experience:    ${rows.filter((r) => r.exp === 0).length}/${rows.length}`);
console.log(`Files w/ 30s closer:      ${rows.filter((r) => r.closer30s).length}/${rows.length}`);
console.log(`Files w/ <3 connectors:   ${rows.filter((r) => r.connectors < 3).length}/${rows.length}`);

// thinnest 5
console.log('');
console.log('--- Top 5 thinnest (highest score) ---');
rows.slice(0, 5).forEach((r) =>
  console.log(`  ${r.score.toString().padStart(3)}  ${r.file}  (prose ${r.proseRatio}%, table ${r.tableRatio}%, bracketH ${r.bracketH})`)
);
