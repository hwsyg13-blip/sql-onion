// Strip leading/trailing backticks from option strings only.
// Only modifies q.options entries; explanation/title/references untouched.

import fs from 'node:fs';
import path from 'node:path';

const dir = 'scripts/authored';
const files = fs.readdirSync(dir).filter(f => f.startsWith('round-') && f.endsWith('.json'));

let totalChanges = 0;
const perFileReport = [];

for (const file of files) {
  const fp = path.join(dir, file);
  const data = JSON.parse(fs.readFileSync(fp, 'utf-8'));
  let fileChanges = 0;
  const affectedQs = [];
  for (const q of data.authored) {
    if (!q.options) continue;
    let qChanged = false;
    q.options = q.options.map(o => {
      if (typeof o === 'string' && o.startsWith('`') && o.endsWith('`') && o.length >= 2) {
        qChanged = true;
        fileChanges++;
        return o.slice(1, -1);
      }
      return o;
    });
    if (qChanged) affectedQs.push(q.number);
  }
  if (fileChanges > 0) {
    fs.writeFileSync(fp, JSON.stringify(data, null, 2) + '\n');
    perFileReport.push(`${file}: ${fileChanges} option strings stripped (Q${affectedQs.join(', Q')})`);
    totalChanges += fileChanges;
  }
}

console.log(`Total option strings stripped: ${totalChanges}`);
console.log('');
for (const line of perFileReport) console.log(line);
