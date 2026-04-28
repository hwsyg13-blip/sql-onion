// title 괄호 안 데이터 명시 또는 SQL 주석 데이터 명시 케이스 sweep
// 사용자 신고: 실제 시험은 표로 보여줘야지 괄호/주석으로 데이터 적는 건 너무 쉽게 만든 것
import fs from 'node:fs';
import path from 'node:path';

const dir = 'scripts/authored';
const files = fs.readdirSync(dir).filter(f => /^round-\d+\.json$/.test(f));
const suspicious = [];

function hasTable(refs) {
  return Array.isArray(refs) && refs.some(r => r && r.type === 'table');
}

function titleHasInlineData(title) {
  // "(...에 ...포함)", "(데이터: ...)", "(...값이 ...)" 같은 괄호 안 데이터 힌트
  if (!/\(/.test(title)) return false;
  const m = title.match(/\(([^)]+)\)/g) || [];
  for (const p of m) {
    if (/(NULL|값|데이터|포함|존재|행|건|컬럼|=)/.test(p)) return true;
  }
  return false;
}

function sqlCommentHasData(refs) {
  if (!Array.isArray(refs)) return false;
  const sqls = refs.filter(r => r && r.type === 'sql').map(r => r.code || '').join('\n');
  // -- 데이터: , -- VAL: , -- {...}, -- [...] 등
  if (/--.*[\(\[\{][^)\]\}]*[\)\]\}]/.test(sqls)) return true;
  if (/--.*데이터.*[:=]/.test(sqls)) return true;
  if (/--.*값.*[:=]/.test(sqls)) return true;
  if (/--.*\d+.*,.*\d+/.test(sqls)) return true; // -- 100, 110, NULL 형태
  return false;
}

for (const f of files) {
  const data = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf-8'));
  for (const q of data.authored || []) {
    const refs = q.references || [];
    if (hasTable(refs)) continue;

    const titleHint = titleHasInlineData(q.title || '');
    const sqlHint = sqlCommentHasData(refs);
    if (!titleHint && !sqlHint) continue;

    suspicious.push({
      file: f,
      Q: q.number,
      title: (q.title || '').slice(0, 90),
      titleHint,
      sqlHint,
      sqlSnippet: refs.filter(r => r && r.type === 'sql').map(r => r.code || '').join(' ').slice(0, 150),
    });
  }
}

for (const s of suspicious) {
  const tags = [s.titleHint && 'TITLE_PAREN', s.sqlHint && 'SQL_COMMENT'].filter(Boolean).join('+');
  console.log(`[${tags}] ${s.file} Q${s.Q}`);
  console.log(`  title: ${s.title}`);
  if (s.sqlHint) console.log(`  sql: ${s.sqlSnippet.replace(/\n/g, ' ')}`);
  console.log();
}
console.log(`Total: ${suspicious.length}`);
