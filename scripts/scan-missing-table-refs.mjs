// title 이 구체적 결과(숫자/행)를 묻는데 references 에 SQL 만 있고 표 데이터가 없는 케이스 sweep
// 예: R54 Q39 — "아래 SQL 의 결과로 옳은 것은?" 옵션은 "부서1 18000 / 부서2 11300" 인데
// references 에 SQL 만 있고 T 테이블 데이터가 없는 작성 오류
import fs from 'node:fs';
import path from 'node:path';

const dir = 'scripts/authored';
const files = fs.readdirSync(dir).filter(f => /^round-\d+\.json$/.test(f));
const suspicious = [];

const TITLE_NEEDS_DATA = [
  /아래.*SQL.*결과/,
  /아래.*쿼리.*결과/,
  /아래.*결과로.*옳은/,
  /아래.*반환.*값/,
  /아래.*테이블/,
  /아래.*데이터/,
];

function hasTable(refs) {
  if (!Array.isArray(refs)) return false;
  return refs.some(r => r && r.type === 'table');
}

function hasSqlWithFromTable(refs) {
  // SQL 코드에 FROM <테이블명> 형태가 있으면 표 데이터가 별도로 필요할 가능성 높음
  if (!Array.isArray(refs)) return false;
  return refs.some(r => r && r.type === 'sql' && /FROM\s+[A-Z가-힣_][\w가-힣]*/i.test(r.code || ''));
}

function looksLikeConcreteResult(opt) {
  // 옵션이 숫자 / 행 데이터 / 결과값 형태인가?
  // 한국어 동사로 끝나면 추상 설명
  if (/(한다|된다|이다|사용|함)\.?$/.test(opt.trim())) return false;
  // 숫자 또는 콤마 분리 결과값
  if (/\d/.test(opt) && (/,|\//.test(opt) || /\d+\s*$/.test(opt))) return true;
  // 결과 행 형식 (부서1 18000)
  if (/[가-힣]+\d+|\d+\s*[가-힣]+/.test(opt)) return true;
  // "공집합", "오류 발생" 등 결과 키워드
  if (/(공집합|오류|에러|NULL|null)/.test(opt)) return true;
  return false;
}

for (const f of files) {
  const data = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf-8'));
  for (const q of data.authored || []) {
    const opts = q.options || [];
    if (opts.length !== 4) continue;
    const title = q.title || '';

    // title 이 표 데이터 답을 시사?
    const titleNeedsData = TITLE_NEEDS_DATA.some(re => re.test(title));
    if (!titleNeedsData) continue;

    // refs 분석
    const refs = q.references || [];
    if (hasTable(refs)) continue; // 이미 표 있음
    if (!hasSqlWithFromTable(refs)) continue; // SQL 자체가 없거나 DUAL 만 사용

    // 옵션이 구체적 결과값 형태?
    const concreteCount = opts.filter(looksLikeConcreteResult).length;
    if (concreteCount < 2) continue;

    // SQL 에서 사용하는 테이블이 EMP/DEPT 같은 표준 테이블이면 데이터 추가 필요성 낮음
    const sqlText = (refs.find(r => r.type === 'sql') || {}).code || '';
    const standardTables = /FROM\s+(EMP|DEPT|EMPLOYEES|DEPARTMENTS|JOBS|LOCATIONS|REGIONS|COUNTRIES|SAL_GRADE)/i.test(sqlText);

    suspicious.push({
      file: f,
      Q: q.number,
      title: title.slice(0, 80),
      options: opts,
      correctIndex: q.correctIndex,
      sqlSnippet: sqlText.slice(0, 100),
      standardTables,
      concreteCount,
    });
  }
}

for (const s of suspicious) {
  console.log(`[MISSING_TABLE_DATA] ${s.file} Q${s.Q} (correctIndex=${s.correctIndex}, std=${s.standardTables}, concrete=${s.concreteCount})`);
  console.log(`  title: ${s.title}`);
  console.log(`  sql: ${s.sqlSnippet.replace(/\n/g, ' ')}`);
  s.options.forEach((o, i) => console.log(`  ${i === s.correctIndex ? '✓' : ' '} ${i}: ${o}`));
  console.log();
}
console.log(`Total suspicious: ${suspicious.length}`);
