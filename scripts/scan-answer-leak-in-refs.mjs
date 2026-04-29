// Scan for questions where references (caption / text content) directly mention
// the correct answer's option text — leaking the answer.

import fs from 'node:fs';
import path from 'node:path';

const dir = 'scripts/authored';
const files = fs.readdirSync(dir).filter(f => f.startsWith('round-') && f.endsWith('.json'));

const report = [];

for (const file of files) {
  const data = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf-8'));
  const round = data.round;
  for (const q of data.authored) {
    if (!q.references || !q.options) continue;
    const correctOpt = q.options[q.correctIndex];
    if (!correctOpt || typeof correctOpt !== 'string') continue;

    // Extract a "core token" from the correct option — function name like DENSE_RANK,
    // keyword like CASCADE, single concept word.
    // Heuristic: trim () and parens, take alphanumeric/underscore prefix
    const core = correctOpt
      .replace(/[`*]/g, '')
      .replace(/\([^)]*\)/g, '')  // remove parens content
      .replace(/[^A-Z_a-z0-9가-힣]/g, ' ')
      .trim()
      .split(/\s+/)[0];
    if (!core || core.length < 3) continue;

    // Check if any reference caption or text content contains this core token
    for (const ref of q.references) {
      const caption = ref.caption || '';
      const content = ref.content || ref.text || '';
      const code = ref.code || '';
      // Don't penalize SQL code matching — that's often intentional context
      const targets = [
        ['caption', caption],
        ['content', content]
      ];
      for (const [field, txt] of targets) {
        if (!txt) continue;
        // Use word-boundary check for English keywords; substring for Korean
        const isAscii = /^[A-Z_a-z0-9]+$/.test(core);
        let hit = false;
        if (isAscii) {
          const re = new RegExp(`\\b${core}\\b`, 'i');
          hit = re.test(txt);
        } else {
          hit = txt.includes(core);
        }
        if (hit) {
          // Check whether the wrong-options also contain core (then leak less obvious)
          const wrongHit = q.options
            .filter((_, i) => i !== q.correctIndex)
            .some(o => typeof o === 'string' && o.toLowerCase().includes(core.toLowerCase()));
          if (!wrongHit) {
            report.push({
              round, q: q.number,
              correctOpt: correctOpt.slice(0, 50),
              core,
              field,
              snippet: txt.slice(0, 100).replace(/\n/g, ' ')
            });
          }
        }
      }
    }
  }
}

console.log(`Found ${report.length} candidates:\n`);
for (const r of report) {
  console.log(`R${r.round} Q${r.q} — answer "${r.correctOpt}" leaked via ${r.field}: "${r.snippet}"`);
}
