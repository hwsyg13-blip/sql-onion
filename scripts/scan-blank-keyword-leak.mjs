// Scan for questions where:
//   - SQL has a blank pattern like ( ? ) / (?)
//   - The SQL keyword (HAVING/WHERE/SELECT/FROM/GROUP BY/ORDER BY/CONNECT BY/START WITH/JOIN/ON)
//     appears immediately before the blank — leaking what type of clause goes there
//   - Title or options also mention that keyword (additional leak)
//
// Reports candidates where the blank's keyword is "given away" by SQL prefix.

import fs from 'node:fs';
import path from 'node:path';

const dir = 'scripts/authored';
const files = fs.readdirSync(dir).filter(f => f.startsWith('round-') && f.endsWith('.json'));

const KEYWORDS = [
  'HAVING', 'WHERE', 'GROUP BY', 'ORDER BY',
  'SELECT', 'FROM', 'CONNECT BY', 'START WITH',
  'JOIN', 'ON', 'UNION', 'INTERSECT', 'MINUS', 'EXCEPT',
  'INNER JOIN', 'LEFT OUTER JOIN', 'RIGHT OUTER JOIN', 'FULL OUTER JOIN',
  'CROSS JOIN', 'NATURAL JOIN'
];

// Sort longer keywords first so we catch "GROUP BY" before "GROUP"
KEYWORDS.sort((a, b) => b.length - a.length);

const BLANK_PATTERNS = [/\(\s*\?\s*\)/, /\(\s*ㄱ\s*\)/, /\(\s*ㄴ\s*\)/, /\(\s*ㄷ\s*\)/];

let report = [];

for (const file of files) {
  const data = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf-8'));
  const round = data.round;
  for (const q of data.authored) {
    if (!q.references) continue;
    const sqlRefs = q.references.filter(r => r.type === 'sql');
    if (sqlRefs.length === 0) continue;
    for (const ref of sqlRefs) {
      const code = ref.code || '';
      // Find blank position
      let blankMatch = null;
      let blankIdx = -1;
      for (const pat of BLANK_PATTERNS) {
        const m = code.match(pat);
        if (m && (blankIdx === -1 || m.index < blankIdx)) {
          blankMatch = m;
          blankIdx = m.index;
        }
      }
      if (!blankMatch) continue;
      // Look at what's right before the blank
      const before = code.slice(0, blankIdx).trim();
      // Find last keyword in `before`
      let leakedKw = null;
      for (const kw of KEYWORDS) {
        // Look at last 30 chars of `before` for the keyword
        const tail = before.slice(-(kw.length + 5)).toUpperCase();
        if (tail.endsWith(kw)) {
          leakedKw = kw;
          break;
        }
      }
      if (!leakedKw) continue;
      // Check if title or options also mention this keyword
      const titleHas = (q.title || '').toUpperCase().includes(leakedKw);
      const optsWith = (q.options || []).filter(o => typeof o === 'string' && o.toUpperCase().includes(leakedKw));
      if (titleHas || optsWith.length > 0) {
        report.push({
          round, q: q.number,
          leakedKw,
          titleHas,
          optsWithKw: optsWith.length,
          totalOpts: q.options.length,
          sqlSnippet: code.slice(Math.max(0, blankIdx - 30), blankIdx + 10).replace(/\n/g, ' ').trim()
        });
      }
    }
  }
}

console.log(`Found ${report.length} candidates:\n`);
for (const r of report) {
  console.log(`R${r.round} Q${r.q} — keyword "${r.leakedKw}" before blank · title has=${r.titleHas} · opts with kw=${r.optsWithKw}/${r.totalOpts}`);
  console.log(`    SQL snippet: ${r.sqlSnippet}`);
}
