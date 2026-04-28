// references 의 type=table 항목에 caption 자동 추가
// 같은 references 의 SQL 에서 FROM <테이블명> 추출해 caption 설정
import fs from 'node:fs';
import path from 'node:path';

const dir = 'scripts/authored';
const files = fs.readdirSync(dir).filter(f => /^round-\d+\.json$/.test(f));

let totalFixed = 0;
let totalSkipped = 0;
const skipped = [];

for (const f of files) {
  const filePath = path.join(dir, f);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  let modified = false;

  for (const q of data.authored || []) {
    const refs = q.references || [];
    if (!Array.isArray(refs)) continue;

    const noCapTables = refs.filter(r => r && r.type === 'table' && (!r.caption || r.caption.trim() === ''));
    if (noCapTables.length === 0) continue;

    // 같은 references 안 SQL 에서 테이블명 추출
    const sqls = refs.filter(r => r && r.type === 'sql').map(r => r.code || '').join('\n');
    const fromMatches = [...sqls.matchAll(/\bFROM\s+([A-Z가-힣_][\w가-힣]*)/gi)];
    const tableNames = [...new Set(fromMatches.map(m => m[1]))]
      .filter(t => t.toUpperCase() !== 'DUAL'); // DUAL 은 제외

    // title 에 테이블명이 명시된 케이스도 추가 추출
    const title = q.title || '';
    const titleTableMatches = [...title.matchAll(/(EMP|DEPT|TAB1|TAB2|T1|T2|T3|T4|T|사원|부서|업체|연구소|메달|학생|주문|고객|배송|급여|MONTHLY|CATEGORY)\s*테이블/g)];
    const titleTables = [...new Set(titleTableMatches.map(m => m[1]))];

    for (const t of noCapTables) {
      let caption = '';

      if (titleTables.length === 1) {
        caption = `${titleTables[0]} 테이블`;
      } else if (tableNames.length === 1) {
        caption = `${tableNames[0]} 테이블`;
      } else if (tableNames.length === 0 && titleTables.length === 0) {
        // SQL/title 둘 다 모르겠음 — skip
        skipped.push({ file: f, Q: q.number, reason: 'no FROM, no title hint' });
        totalSkipped++;
        continue;
      } else {
        // 여러 테이블 — 수동 검토 필요
        const allTables = [...new Set([...titleTables, ...tableNames])];
        skipped.push({ file: f, Q: q.number, reason: `multi: ${allTables.join(', ')}` });
        totalSkipped++;
        continue;
      }

      t.caption = caption;
      modified = true;
      totalFixed++;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
    console.log(`✓ ${f}: modified`);
  }
}

console.log(`\nTotal fixed: ${totalFixed}`);
console.log(`Total skipped (manual review needed): ${totalSkipped}`);
console.log(`\nSkipped cases:`);
for (const s of skipped) {
  console.log(`  ${s.file} Q${s.Q} — ${s.reason}`);
}
