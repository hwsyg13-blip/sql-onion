// title 에서 특정 SQL 키워드를 명시하고 4개 옵션이 그 키워드 변형을 비교해야 하는 문제인데
// 실제 옵션은 일부만 그 키워드를 포함하는 작성 오류 sweep
import fs from 'node:fs';
import path from 'node:path';

const dir = 'scripts/authored';
const files = fs.readdirSync(dir).filter(f => /^round-\d+\.json$/.test(f));
const suspicious = [];

// title 에 명시될 때 옵션 4개 모두 같은 키워드를 써야 의도에 맞는 핵심 키워드들
const KEYWORDS = [
  { name: 'EXISTS', titleHint: /EXISTS/, optRe: /\bEXISTS\b/i },
  { name: 'NOT EXISTS', titleHint: /NOT\s+EXISTS/, optRe: /\bNOT\s+EXISTS\b/i },
  { name: 'NOT IN', titleHint: /NOT\s+IN/, optRe: /\bNOT\s+IN\b/i },
  { name: 'OUTER JOIN', titleHint: /OUTER\s+JOIN/, optRe: /\bOUTER\s+JOIN\b/i },
  { name: 'INNER JOIN', titleHint: /INNER\s+JOIN(?!\s+사용)/, optRe: /\bINNER\s+JOIN\b/i },
  { name: 'CROSS JOIN', titleHint: /CROSS\s+JOIN/, optRe: /\bCROSS\s+JOIN\b/i },
  { name: 'GROUP BY', titleHint: /GROUP\s+BY/, optRe: /\bGROUP\s+BY\b/i },
  { name: 'ROLLUP', titleHint: /ROLLUP/, optRe: /\bROLLUP\b/i },
  { name: 'CUBE', titleHint: /CUBE/, optRe: /\bCUBE\b/i },
  { name: 'GROUPING SETS', titleHint: /GROUPING\s+SETS/, optRe: /\bGROUPING\s+SETS\b/i },
  { name: 'CONNECT BY', titleHint: /CONNECT\s+BY/, optRe: /\bCONNECT\s+BY\b/i },
  { name: 'START WITH', titleHint: /START\s+WITH/, optRe: /\bSTART\s+WITH\b/i },
  { name: 'OVER (윈도우)', titleHint: /윈도우\s*함수/, optRe: /\bOVER\s*\(/i },
  { name: 'CASE WHEN', titleHint: /CASE\s+WHEN|CASE\s*식/, optRe: /\bCASE\s+WHEN\b/i },
  { name: 'UNION', titleHint: /UNION(?!\s+ALL)/, optRe: /\bUNION\b/i },
  { name: 'UNION ALL', titleHint: /UNION\s+ALL/, optRe: /\bUNION\s+ALL\b/i },
  { name: 'INTERSECT', titleHint: /INTERSECT/, optRe: /\bINTERSECT\b/i },
  { name: 'MINUS', titleHint: /MINUS|EXCEPT/, optRe: /\bMINUS\b|\bEXCEPT\b/i },
  { name: 'PIVOT', titleHint: /PIVOT/, optRe: /\bPIVOT\b/i },
  { name: 'NVL', titleHint: /NVL/, optRe: /\bNVL\b/i },
  { name: 'COALESCE', titleHint: /COALESCE/, optRe: /\bCOALESCE\b/i },
  { name: 'DECODE', titleHint: /DECODE/, optRe: /\bDECODE\b/i },
  { name: 'NULLIF', titleHint: /NULLIF/, optRe: /\bNULLIF\b/i },
  { name: 'ROWNUM', titleHint: /ROWNUM/, optRe: /\bROWNUM\b/i },
  { name: 'FETCH FIRST', titleHint: /FETCH\s+FIRST/, optRe: /\bFETCH\s+FIRST\b/i },
];

function isAnswerVariantQuestion(title) {
  // "동일한 결과", "EXISTS 쿼리는?", "변환", "옳은 것" 류 = 4개 옵션이 같은 카테고리여야 자연스러움
  return /(동일|동등|같은|반환|올바른|옳은|적절한|작성|변환|바꾸|치환|표현)/.test(title);
}

for (const f of files) {
  const data = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf-8'));
  for (const q of data.authored || []) {
    const opts = q.options || [];
    if (opts.length !== 4) continue;
    const title = q.title || '';

    if (!isAnswerVariantQuestion(title)) continue;

    for (const kw of KEYWORDS) {
      if (!kw.titleHint.test(title)) continue;
      const mask = opts.map(o => kw.optRe.test(o));
      const cnt = mask.filter(Boolean).length;
      // 4개 모두면 일관, 0개면 무관, 1~3개만 있으면 일관성 깨짐
      if (cnt > 0 && cnt < 4) {
        suspicious.push({
          file: f,
          Q: q.number,
          title: title.slice(0, 90),
          options: opts,
          correctIndex: q.correctIndex,
          keyword: kw.name,
          mask,
          cnt,
          correctHasKeyword: mask[q.correctIndex],
        });
      }
    }
  }
}

// 정렬: 정답에만 키워드 있는 케이스 우선 (가장 명백한 작성 오류)
suspicious.sort((a, b) => {
  if (a.correctHasKeyword && !b.correctHasKeyword) return -1;
  if (!a.correctHasKeyword && b.correctHasKeyword) return 1;
  return a.cnt - b.cnt;
});

for (const s of suspicious) {
  const flag = s.cnt === 1 && s.correctHasKeyword ? '🚨' : (s.cnt < 3 ? '⚠️ ' : '   ');
  console.log(`${flag} [${s.keyword}] ${s.file} Q${s.Q} (correctIdx=${s.correctIndex}, kw_count=${s.cnt}/4, correct_has_kw=${s.correctHasKeyword})`);
  console.log(`  title: ${s.title}`);
  s.options.forEach((o, i) => console.log(`  ${i === s.correctIndex ? '✓' : ' '} ${i}${s.mask[i] ? ' [KW]' : '     '}: ${o.slice(0, 110)}`));
  console.log();
}
console.log(`Total suspicious: ${suspicious.length}`);
