import { readFileSync } from 'node:fs';

let counts = { starstar: 0, codefence: 0 };
const samples = { starstar: [], codefence: [] };

for (let r = 45; r <= 60; r++) {
  const ts = readFileSync(`C:/dev/sql-onion/src/data/rounds/round-${r}.ts`, 'utf8');
  const s = ts.indexOf('= [') + 2, e = ts.lastIndexOf('];') + 1;
  const arr = JSON.parse(ts.slice(s, e));
  for (const q of arr) {
    const fields = [
      ['title', q.title],
      ['option0', q.options[0]],
      ['option1', q.options[1]],
      ['option2', q.options[2]],
      ['option3', q.options[3]],
      ['explanation', q.explanation || ''],
    ];
    for (const [k, v] of fields) {
      if (typeof v !== 'string') continue;
      if (/\*\*/.test(v)) {
        counts.starstar++;
        if (samples.starstar.length < 5) samples.starstar.push(`R${q.round} ${q.subject} N${q.number} ${k}: ${v.slice(0, 120)}`);
      }
      if (/```/.test(v)) {
        counts.codefence++;
        if (samples.codefence.length < 3) samples.codefence.push(`R${q.round} ${q.subject} N${q.number} ${k}: ${v.slice(0, 120)}`);
      }
    }
    // Refs
    if (q.references) {
      for (const ref of q.references) {
        const txt = ref.content || ref.code || ref.text || ref.html || JSON.stringify(ref.headers || []) + JSON.stringify(ref.rows || []);
        if (/\*\*/.test(txt)) {
          counts.starstar++;
          if (samples.starstar.length < 5) samples.starstar.push(`R${q.round} N${q.number} ref(${ref.type}): ${txt.slice(0, 140)}`);
        }
      }
    }
  }
}
console.log('counts:', counts);
console.log('--- ** samples ---');
samples.starstar.forEach(s => console.log(s));
console.log('--- ``` samples ---');
samples.codefence.forEach(s => console.log(s));
