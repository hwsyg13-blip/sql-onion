// scripts/strip-options-backticks.mjs
// authored/round-*.json + ai-mock.json 의 options 배열에서 백틱(`) 문자만 제거
// (explanation, title, references 등 다른 필드의 백틱은 보존)

import fs from 'node:fs';
import path from 'node:path';

const dir = 'scripts/authored';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));

let totalQuestions = 0;
let totalOptions = 0;

for (const f of files) {
  const fp = path.join(dir, f);
  const raw = fs.readFileSync(fp, 'utf8');
  const data = JSON.parse(raw);
  let questionCount = 0;
  let optionCount = 0;

  const list = data.authored || [];
  for (const q of list) {
    if (!Array.isArray(q.options)) continue;
    let touched = false;
    q.options = q.options.map(opt => {
      if (typeof opt !== 'string') return opt;
      if (!opt.includes('`')) return opt;
      const stripped = opt.replace(/`/g, '');
      if (stripped !== opt) { touched = true; optionCount++; }
      return stripped;
    });
    if (touched) questionCount++;
  }

  if (optionCount > 0) {
    fs.writeFileSync(fp, JSON.stringify(data, null, 2) + '\n', 'utf8');
    console.log(`  ${f}: ${questionCount} 문항 / ${optionCount} 옵션 정리`);
    totalQuestions += questionCount;
    totalOptions += optionCount;
  }
}

console.log(`\n총 ${totalQuestions} 문항 / ${totalOptions} 옵션의 백틱 제거 완료`);
