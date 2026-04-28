// 표준 테이블(EMP/DEPT 등) 사용하면서 옵션이 구체적 결과값인데 표 데이터 부재 케이스
// 이전 sweep 에서 std=true 로 정상 분류했던 케이스를 다시 점검
import fs from 'node:fs';
import path from 'node:path';

const dir = 'scripts/authored';
const files = fs.readdirSync(dir).filter(f => /^round-\d+\.json$/.test(f));
const suspicious = [];

function isConcreteResultOption(opt) {
  const t = opt.replace(/^`|`$/g, '').trim();
  if (/(한다|된다|이다|사용|함|있다|없다|아니다)\.?$/.test(t)) return false;
  if (t.length < 60 && /\d/.test(t) && /,|\/|=|건|행/.test(t)) return true;
  if (t.length < 30 && /^(['"]?\w+['"]?|\d+|NULL|공집합|오류)/.test(t)) return true;
  return false;
}

for (const f of files) {
  const data = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf-8'));
  for (const q of data.authored || []) {
    const opts = q.options || [];
    if (opts.length !== 4) continue;
    const refs = q.references || [];

    // 이미 표 있으면 스킵
    if (refs.some(r => r && r.type === 'table')) continue;
    if (refs.some(r => r && r.type === 'entity-diagram')) continue;

    // SQL 분석
    const sqls = refs.filter(r => r && r.type === 'sql').map(r => r.code || '').join('\n');
    if (!sqls.trim()) continue;

    // 표준 테이블 (EMP/DEPT 등) 또는 사용자 정의 테이블 참조
    const fromMatches = [...sqls.matchAll(/\bFROM\s+([A-Z가-힣_][\w가-힣]*)/gi)];
    const tables = [...new Set(fromMatches.map(m => m[1].toUpperCase()))]
      .filter(t => t !== 'DUAL');
    if (tables.length === 0) continue;

    // 옵션이 구체적 결과값?
    const concreteCount = opts.filter(isConcreteResultOption).length;
    if (concreteCount < 3) continue;

    // SQL 주석에 데이터 명시되어 있는지
    if (/--.*[\(\[\{][^)\]\}]*[\)\]\}]/.test(sqls)) continue;
    if (/--.*데이터/.test(sqls)) continue;
    if (/--.*\d+.*,.*\d+/.test(sqls)) continue;

    // title 에 "n건" 같은 데이터 명시
    if (/\d+\s*건|\d+\s*개|각각\s*\d/.test(q.title || '')) continue;

    suspicious.push({
      file: f,
      Q: q.number,
      title: (q.title || '').slice(0, 80),
      options: opts,
      correctIndex: q.correctIndex,
      tables,
    });
  }
}

for (const s of suspicious) {
  console.log(`${s.file} Q${s.Q} (correctIdx=${s.correctIndex}, tables=[${s.tables.join(', ')}])`);
  console.log(`  title: ${s.title}`);
  s.options.forEach((o, i) => console.log(`  ${i === s.correctIndex ? '✓' : ' '} ${i}: ${o.slice(0, 90)}`));
  console.log();
}
console.log(`Total: ${suspicious.length}`);
