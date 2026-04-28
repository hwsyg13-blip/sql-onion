// references 의 type=sql 항목이 SELECT 절 없이 WHERE/GROUP BY 등 조각만 포함된 케이스 sweep
// 예: R47 Q22 — references.sql 이 `WHERE (TEAM_ID, HEIGHT) IN (...)` 만 있어 사용자가 잘린 SQL로 인식
import fs from 'node:fs';
import path from 'node:path';

const dir = 'scripts/authored';
const files = fs.readdirSync(dir).filter(f => /^round-\d+\.json$/.test(f));
const suspicious = [];

function analyzeSql(code) {
  const t = code.trim().replace(/^--.*\n/gm, '').trim();
  const startsWithSelect = /^\s*(SELECT|WITH|INSERT|UPDATE|DELETE|CREATE|ALTER|DROP|MERGE|GRANT|REVOKE|COMMIT|ROLLBACK|SAVEPOINT)/i.test(t);
  const startsWithFragment = /^\s*(WHERE|GROUP\s+BY|ORDER\s+BY|HAVING|JOIN|ON|FROM|LIMIT|FETCH|OFFSET|CONNECT\s+BY|START\s+WITH)/i.test(t);
  return { startsWithSelect, startsWithFragment };
}

for (const f of files) {
  const data = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf-8'));
  for (const q of data.authored || []) {
    const refs = q.references || [];
    if (!Array.isArray(refs)) continue;

    const sqls = refs.filter(r => r && r.type === 'sql');
    for (const s of sqls) {
      const a = analyzeSql(s.code || '');
      if (a.startsWithFragment && !a.startsWithSelect) {
        suspicious.push({
          file: f,
          Q: q.number,
          title: (q.title || '').slice(0, 80),
          sqlCode: (s.code || '').slice(0, 120),
        });
      }
    }
  }
}

for (const s of suspicious) {
  console.log(`${s.file} Q${s.Q}`);
  console.log(`  title: ${s.title}`);
  console.log(`  sql: ${s.sqlCode.replace(/\n/g, ' ')}`);
  console.log();
}
console.log(`Total: ${suspicious.length}`);
