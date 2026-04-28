// 옵션이 SQL 코드인데 SELECT 절이나 FROM 절이 생략되어 있는 작성 오류 sweep
// 예: R56 Q21 — 옵션이 `FROM EMP WHERE ...` 형태로 SELECT 절 없음
import fs from 'node:fs';
import path from 'node:path';

const dir = 'scripts/authored';
const files = fs.readdirSync(dir).filter(f => /^round-\d+\.json$/.test(f));
const suspicious = [];

// 옵션이 SQL 코드인지 (백틱 또는 SQL 키워드 다수 포함)
function isSqlOption(opt) {
  // 백틱으로 감싸진 코드
  if (/`[^`]+`/.test(opt)) return true;
  // SQL 키워드 다수 포함
  const sqlKwCount = (opt.match(/\b(SELECT|FROM|WHERE|GROUP\s+BY|ORDER\s+BY|HAVING|JOIN|ON|UNION|INTERSECT|MINUS|INSERT|UPDATE|DELETE|CREATE|ALTER|DROP|GRANT|REVOKE)\b/gi) || []).length;
  return sqlKwCount >= 2;
}

// SQL 옵션이 어떤 절로 시작하는지 분석
function analyzeSqlOption(opt) {
  // 백틱 제거
  const code = opt.replace(/`/g, '').trim();

  const startsWithSelect = /^\s*SELECT\s/i.test(code);
  const startsWithFrom = /^\s*FROM\s/i.test(code);
  const startsWithWhere = /^\s*WHERE\s/i.test(code);
  const startsWithGroupBy = /^\s*GROUP\s+BY\s/i.test(code);
  const startsWithOrderBy = /^\s*ORDER\s+BY\s/i.test(code);
  const startsWithHaving = /^\s*HAVING\s/i.test(code);
  const startsWithJoin = /^\s*(LEFT|RIGHT|FULL|INNER|OUTER|CROSS)?\s*(OUTER\s+)?JOIN\s/i.test(code);
  const startsWithOn = /^\s*ON\s/i.test(code);
  const startsWithCase = /^\s*CASE\s/i.test(code);

  return {
    startsWithSelect,
    startsWithFrom,
    startsWithWhere,
    startsWithGroupBy,
    startsWithOrderBy,
    startsWithHaving,
    startsWithJoin,
    startsWithOn,
    startsWithCase,
    isFragment: !startsWithSelect && !startsWithCase && (startsWithFrom || startsWithWhere || startsWithGroupBy || startsWithOrderBy || startsWithHaving || startsWithJoin || startsWithOn),
  };
}

for (const f of files) {
  const data = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf-8'));
  for (const q of data.authored || []) {
    const opts = q.options || [];
    if (opts.length !== 4) continue;

    // 옵션 4개 모두 SQL 코드인지 확인
    const sqlOptCount = opts.filter(isSqlOption).length;
    if (sqlOptCount < 3) continue;

    const analyses = opts.map(analyzeSqlOption);
    const fragmentCount = analyses.filter(a => a.isFragment).length;

    // 4개 중 2개 이상이 SELECT 없이 시작하는 fragment 면 의심
    if (fragmentCount >= 2) {
      suspicious.push({
        file: f,
        Q: q.number,
        title: (q.title || '').slice(0, 90),
        options: opts,
        correctIndex: q.correctIndex,
        analyses,
        fragmentCount,
      });
    }
  }
}

for (const s of suspicious) {
  console.log(`[SQL_FRAGMENT_OPTIONS] ${s.file} Q${s.Q} (correctIdx=${s.correctIndex}, fragments=${s.fragmentCount}/4)`);
  console.log(`  title: ${s.title}`);
  s.options.forEach((o, i) => {
    const a = s.analyses[i];
    const tag = a.isFragment ? '⚠️ FRAG' : (a.startsWithSelect ? 'SEL ' : 'OK  ');
    console.log(`  ${i === s.correctIndex ? '✓' : ' '} ${i} [${tag}]: ${o.slice(0, 100)}`);
  });
  console.log();
}
console.log(`Total suspicious: ${suspicious.length}`);
