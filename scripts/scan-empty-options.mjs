// 빈 options 탐지기
// 모든 authored JSON 을 스캔해 options 배열이 비어있거나 모든 항목이 빈 문자열인 케이스 보고
import fs from 'node:fs';
import path from 'node:path';

const dirs = ['scripts/authored'];
const issues = [];

function isEmptyOptions(opts) {
  if (!Array.isArray(opts)) return true;
  if (opts.length === 0) return true;
  return opts.every(o => typeof o !== 'string' || o.trim() === '');
}

function isPartialEmpty(opts) {
  if (!Array.isArray(opts)) return false;
  return opts.some(o => typeof o !== 'string' || o.trim() === '') && !isEmptyOptions(opts);
}

for (const dir of dirs) {
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith('.json')) continue;
    const fp = path.join(dir, f);
    const data = JSON.parse(fs.readFileSync(fp, 'utf8'));
    const items = data.authored || data.questions || [];
    for (const q of items) {
      const id = q._id || `r${data.round}-q${q.number}`;
      if (isEmptyOptions(q.options)) {
        issues.push({ file: f, id, num: q.number, type: 'all-empty', title: (q.title || '').slice(0, 60) });
      } else if (isPartialEmpty(q.options)) {
        const idx = q.options.findIndex(o => typeof o !== 'string' || o.trim() === '');
        issues.push({ file: f, id, num: q.number, type: `partial-empty(idx=${idx})`, title: (q.title || '').slice(0, 60) });
      }
    }
  }
}

if (issues.length === 0) {
  console.log('No empty options found.');
} else {
  console.log(`Found ${issues.length} issues:\n`);
  // group by file
  const byFile = {};
  for (const it of issues) {
    (byFile[it.file] ||= []).push(it);
  }
  for (const [file, list] of Object.entries(byFile)) {
    console.log(`\n${file}: ${list.length} issues`);
    for (const it of list) {
      console.log(`  ${it.id} #${it.num} ${it.type}: ${it.title}`);
    }
  }
}
