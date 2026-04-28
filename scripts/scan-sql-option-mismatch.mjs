// title 이 "SQL로 옳은 것은?" 같이 SQL 코드를 묻는데
// 옵션이 절차 설명("X 사용", "Y 한 뒤 Z")으로 작성된 케이스 sweep
// R53 Q36 같은 작성 오류만 정확히 추출 (정답이 함수명/결과값인 정상 케이스 제외)
import fs from 'node:fs';
import path from 'node:path';

const dir = 'scripts/authored';
const files = fs.readdirSync(dir).filter(f => /^round-\d+\.json$/.test(f));
const suspicious = [];

// title 이 SQL 코드 답을 강하게 시사하는 패턴
const TITLE_DEMANDS_SQL = [
  /SQL\s*(로|문)\s*(가장\s*)?(올바른|옳은|적절한)/,
  /(쿼리|SQL)\s*로\s*(가장\s*)?(올바른|옳은|적절한)/,
  /(작성|조회)하는\s*(SQL|쿼리)/,
];

// 옵션이 한국어 절차 설명체로 끝나는 패턴
const KOREAN_PROCEDURAL_END = /(사용|적용|수행|실행|선언|지정|추가|선택|조회|작성|반환|생성|삭제|변경|설정)$/;
const KOREAN_VERB_END = /(한다|된다|이다|가능|불가|함|함\.?)$/;

function looksLikeProcedural(s) {
  // 옵션 끝이 한국어 동사/명사 + (선택: 마침표)
  const trimmed = s.replace(/[.\s]+$/, '').trim();
  return KOREAN_PROCEDURAL_END.test(trimmed) || KOREAN_VERB_END.test(trimmed);
}

function looksLikePureSql(s) {
  // 옵션이 거의 SQL 코드만 (한국어 거의 없음, 백틱·괄호·SQL 키워드 위주)
  // 한국어 글자 개수
  const koreanChars = (s.match(/[가-힣]/g) || []).length;
  const totalChars = s.replace(/\s/g, '').length;
  if (totalChars === 0) return false;
  // 한국어 글자 비율 < 30% 이고 SQL 키워드/연산자 포함이면 SQL 코드
  if (koreanChars / totalChars < 0.3) {
    return /\b(SELECT|FROM|WHERE|GROUP|ORDER|HAVING|JOIN|ON|ROWNUM|UPDATE|INSERT|DELETE|MERGE|UNION|FETCH|OFFSET|PARTITION|OVER|WITH|CASE|EXISTS|IN|BETWEEN|LIKE|IS|NULL|DISTINCT|CUBE|ROLLUP|GROUPING\s+SETS|RANK|DENSE_RANK|ROW_NUMBER|LAG|LEAD|FIRST_VALUE|LAST_VALUE|NTILE|RATIO_TO_REPORT|PERCENT_RANK|CUME_DIST|REGEXP|SUBSTR|LENGTH|NVL|COALESCE|DECODE|CONNECT|START|TRUNCATE|GRANT|REVOKE|COMMIT|ROLLBACK|ALTER|CREATE|DROP|TABLE|INDEX|VIEW|SEQUENCE|SYSDATE|TO_CHAR|TO_NUMBER|TO_DATE|MAX|MIN|SUM|AVG|COUNT)\b/i.test(s)
      || /[`(){}<>=]|::/.test(s);
  }
  return false;
}

for (const f of files) {
  const data = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf-8'));
  for (const q of data.authored || []) {
    const opts = q.options || [];
    if (opts.length !== 4) continue;
    const title = q.title || '';

    if (!TITLE_DEMANDS_SQL.some(re => re.test(title))) continue;

    // procedural 우선 분류 (procedural 이면 SQL 카운트에서 제외)
    const proceduralMask = opts.map(looksLikeProcedural);
    const sqlMask = opts.map((o, i) => !proceduralMask[i] && looksLikePureSql(o));
    const proceduralCount = proceduralMask.filter(Boolean).length;
    const sqlCount = sqlMask.filter(Boolean).length;

    // R53 Q36 패턴: 4개 중 3개 이상이 한국어 절차 설명, SQL 순수 코드는 0~1개
    if (proceduralCount >= 3 && sqlCount <= 1) {
      suspicious.push({
        kind: 'TITLE_DEMANDS_SQL_OPTIONS_PROCEDURAL',
        file: f,
        Q: q.number,
        title: title.slice(0, 80),
        options: opts,
        correctIndex: q.correctIndex,
        proceduralCount,
        sqlCount,
        hasReferences: !!(q.references && q.references.length > 0),
      });
    }
  }
}

for (const s of suspicious) {
  console.log(`[${s.kind}] ${s.file} Q${s.Q} (correctIndex=${s.correctIndex}, refs=${s.hasReferences}, proc=${s.proceduralCount}, sql=${s.sqlCount})`);
  console.log(`  title: ${s.title}`);
  s.options.forEach((o, i) => console.log(`  ${i === s.correctIndex ? '✓' : ' '} ${i}: ${o}`));
  console.log();
}
console.log(`Total suspicious: ${suspicious.length}`);
