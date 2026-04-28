// references 의 type=table 항목에 caption (테이블명) 이 누락된 케이스 sweep
// SQL 코드에서 FROM <테이블명> 으로 참조하는 테이블이 표 caption 에 명시되어야 명확
import fs from 'node:fs';
import path from 'node:path';

const dir = 'scripts/authored';
const files = fs.readdirSync(dir).filter(f => /^round-\d+\.json$/.test(f));
const suspicious = [];

for (const f of files) {
  const data = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf-8'));
  for (const q of data.authored || []) {
    const refs = q.references || [];
    if (!Array.isArray(refs)) continue;

    const tables = refs.filter(r => r && r.type === 'table');
    if (tables.length === 0) continue;

    // 표 중에 caption 없는 것 추출
    const noCaptionTables = tables.filter(t => !t.caption || t.caption.trim() === '');
    if (noCaptionTables.length === 0) continue;

    // SQL 에서 참조하는 테이블 추출 (힌트 제공)
    const sqls = refs.filter(r => r && r.type === 'sql').map(r => r.code || '').join('\n');
    const fromMatches = [...sqls.matchAll(/\bFROM\s+([A-Z가-힣_][\w가-힣]*)/gi)];
    const tableNames = [...new Set(fromMatches.map(m => m[1]))];

    suspicious.push({
      file: f,
      Q: q.number,
      title: (q.title || '').slice(0, 80),
      tableCount: tables.length,
      noCaptionCount: noCaptionTables.length,
      tableNamesInSql: tableNames,
    });
  }
}

for (const s of suspicious) {
  console.log(`${s.file} Q${s.Q} (tables=${s.tableCount}, no_caption=${s.noCaptionCount}, sql_tables=[${s.tableNamesInSql.join(', ')}])`);
  console.log(`  title: ${s.title}`);
}
console.log(`\nTotal: ${suspicious.length}`);
