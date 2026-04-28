// 종합 sweep: 옵션이 구체적 결과값인데 references 에 표(table) 도 없고
// SQL 안에도 데이터 명시되지 않은 케이스를 빠짐없이 추출
import fs from 'node:fs';
import path from 'node:path';

const dir = 'scripts/authored';
const files = fs.readdirSync(dir).filter(f => /^round-\d+\.json$/.test(f));
const suspicious = [];

function isConcreteResultOption(opt) {
  const t = opt.replace(/^`|`$/g, '').trim();
  // 한국어 동사 종결 → 추상 옵션
  if (/(한다|된다|이다|사용|함|있다|없다|아니다|동일하다|다르다)\.?$/.test(t)) return false;
  // 길이 짧고 숫자/콤마/슬래시 결과값 형태
  if (t.length < 60 && /\d/.test(t) && /,|\/|=|건/.test(t)) return true;
  // 단일 결과값
  if (t.length < 30 && /^(['"]?\w+['"]?|\d+|NULL|공집합|오류)/.test(t)) return true;
  // 짧은 결과 행
  if (/^[가-힣A-Za-z]+\s+\d+/.test(t)) return true;
  return false;
}

function hasUserTableInSql(refs) {
  // SQL 에 EMP/DEPT 표준 외 사용자 정의 테이블 참조가 있는가
  if (!Array.isArray(refs)) return null;
  const sqls = refs.filter(r => r && r.type === 'sql').map(r => r.code || '').join('\n');
  if (!sqls.trim()) return null;
  const fromMatches = [...sqls.matchAll(/\bFROM\s+([A-Z가-힣_][\w가-힣]*)/gi)];
  const tables = [...new Set(fromMatches.map(m => m[1].toUpperCase()))];
  if (tables.length === 0) return null;
  // DUAL 만 있으면 표 불필요
  if (tables.every(t => t === 'DUAL')) return 'DUAL_ONLY';
  // EMP/DEPT 표준만 있으면 unclear
  if (tables.every(t => /^(EMP|DEPT|EMPLOYEES|DEPARTMENTS|JOBS|SALGRADE)$/.test(t))) return 'STD_ONLY';
  return tables;
}

function hasInlineDataComment(refs) {
  // SQL 안에 -- {1,2,3}, -- COL 데이터: 1, 2, 3 등 데이터 주석이 있는가
  if (!Array.isArray(refs)) return false;
  const sqls = refs.filter(r => r && r.type === 'sql').map(r => r.code || '').join('\n');
  return /--.*[{(\[]/.test(sqls) || /--.*데이터/.test(sqls) || /--.*값/.test(sqls);
}

function hasTitleDataHint(title) {
  // title 에 "n건", "행", "데이터", "각각", 데이터 분포 명시 등
  return /(\d+\s*건|\d+\s*개|각각\s*\d|행이?\s*존재|행이?\s*있)/.test(title);
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

    // 옵션이 구체적 결과값?
    const concreteCount = opts.filter(isConcreteResultOption).length;
    if (concreteCount < 3) continue;

    // SQL 분석
    const tableInfo = hasUserTableInSql(refs);
    if (tableInfo === 'DUAL_ONLY') continue; // DUAL = 표 불필요
    if (tableInfo === 'STD_ONLY') continue; // 표준 EMP/DEPT
    if (tableInfo === null) continue; // SQL 자체 없음

    // SQL 주석에 데이터가 명시되어 있는가
    if (hasInlineDataComment(refs)) continue;

    // title 에 데이터 분포 명시?
    if (hasTitleDataHint(q.title || '')) continue;

    suspicious.push({
      file: f,
      Q: q.number,
      title: (q.title || '').slice(0, 80),
      options: opts,
      correctIndex: q.correctIndex,
      tables: tableInfo,
    });
  }
}

for (const s of suspicious) {
  console.log(`${s.file} Q${s.Q} (correctIdx=${s.correctIndex}, tables=[${(s.tables || []).join(', ')}])`);
  console.log(`  title: ${s.title}`);
  s.options.forEach((o, i) => console.log(`  ${i === s.correctIndex ? '✓' : ' '} ${i}: ${o.slice(0, 90)}`));
  console.log();
}
console.log(`Total: ${suspicious.length}`);
