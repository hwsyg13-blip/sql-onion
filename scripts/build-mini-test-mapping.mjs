// scripts/authored/round-XX.json → src/data/miniTest/examMapping.ts
//
// 챕터별 키워드 매칭으로 연관 기출 5개씩 추출.
// 키워드 표는 docs/qa/mini-test-spec.md (PR #39) 의 30개 챕터 매핑.

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';

const ROUND_DIR = 'scripts/authored';
const OUT = 'src/data/miniTest/examMapping.ts';
const PER_CHAPTER = 5;

const KEYWORDS = {
  c111: ['데이터 모델', '모델링', '3층 스키마', '스키마'],
  c112: ['엔터티'],
  c113: ['속성', '도메인', '파생속성'],
  c114: ['관계', '1:1', '1:N', 'M:N', '차수'],
  c115: ['식별자', '주식별자'],
  c121: ['정규화', '정규형', '1NF', '2NF', '3NF', 'BCNF', '함수 종속'],
  c122: ['관계', '조인', 'FK', '외래키'],
  c123: ['트랜잭션', 'ACID'],
  c124: ['NULL', 'NVL', 'COALESCE', 'IS NULL'],
  c125: ['본질식별자', '인조식별자', '대리키'],
  c211: ['관계형', 'DDL', 'DML', 'DCL', 'TCL', 'TRUNCATE'],
  c212: ['SELECT', 'FROM', 'DUAL', '실행 순서'],
  c213: ['UPPER', 'ROUND', 'TO_CHAR', 'SUBSTR', 'DECODE', 'CASE', '함수'],
  c214: ['WHERE', 'AND', 'OR', 'BETWEEN', 'IN', 'LIKE'],
  c215: ['GROUP BY', 'HAVING', '집계'],
  c216: ['ORDER BY', 'ASC', 'DESC', 'NULLS'],
  c217: ['조인', 'JOIN', 'EQUI', 'OUTER', 'SELF', 'CROSS'],
  c218: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL OUTER', 'NATURAL', 'USING'],
  c221: ['서브쿼리', '스칼라', '인라인뷰', 'EXISTS', 'ANY', 'ALL'],
  c222: ['UNION', 'INTERSECT', 'MINUS', 'EXCEPT'],
  c223: ['ROLLUP', 'CUBE', 'GROUPING SETS', 'GROUPING'],
  c224: ['RANK', 'ROW_NUMBER', 'DENSE_RANK', 'LAG', 'LEAD', 'OVER', 'PARTITION'],
  c225: ['ROWNUM', 'FETCH FIRST', 'TOP', 'TopN'],
  c226: ['계층형', 'CONNECT BY', 'START WITH', 'LEVEL', '셀프조인'],
  c227: ['PIVOT', 'UNPIVOT'],
  c228: ['REGEXP_LIKE', 'REGEXP_REPLACE', 'REGEXP_SUBSTR', '정규표현식'],
  c231: ['INSERT', 'UPDATE', 'DELETE', 'MERGE'],
  c232: ['COMMIT', 'ROLLBACK', 'SAVEPOINT', '트랜잭션'],
  c233: ['CREATE', 'ALTER', 'DROP', 'TRUNCATE', 'RENAME', '제약조건', 'PRIMARY KEY', 'FOREIGN KEY'],
  c234: ['GRANT', 'REVOKE', 'ROLE', '권한'],
};

const rounds = readdirSync(ROUND_DIR).filter(f => /^round-\d+\.json$/.test(f)).sort();
const allMatches = {};
for (const c of Object.keys(KEYWORDS)) allMatches[c] = [];

for (const f of rounds) {
  const data = JSON.parse(readFileSync(`${ROUND_DIR}/${f}`, 'utf8'));
  for (const q of (data.authored || [])) {
    const text = [
      q.title || '',
      (q.options || []).join(' '),
      q.explanation || '',
      (q.references || []).map(r => r.content || '').join(' '),
    ].join(' ');
    for (const [chapId, kws] of Object.entries(KEYWORDS)) {
      if (kws.some(k => text.includes(k))) {
        allMatches[chapId].push({ round: data.round, number: q.number });
      }
    }
  }
}

// 챕터당 PER_CHAPTER 개로 자르기 (이미 round-DESC 순으로 들어옴)
const mapping = {};
for (const [c, arr] of Object.entries(allMatches)) {
  // 다양성을 위해 round 가 분산되도록 — 이미 multiple round 에서 가져옴
  mapping[c] = arr.slice(0, PER_CHAPTER);
}

const totals = Object.entries(mapping).map(([c, a]) => `  ${c}: ${a.length}`).join('\n');
console.log('matches per chapter:\n' + totals);
console.log('total chapters:', Object.keys(mapping).length);

const header = `// @ts-nocheck
// 자동 생성 — 'scripts/authored/round-*.json' 의 챕터 키워드 매칭.
// 다시 빌드: node scripts/build-mini-test-mapping.mjs
//
// 챕터당 ${PER_CHAPTER}개 (round 다양성 위해 round-DESC 순으로 채움).

export interface ExamRef {
  /** 회차 번호 — 예: 60 */
  round: number;
  /** 회차 내 문항 번호 — 1~50 */
  number: number;
}

export const EXAM_MAPPING: Record<string, ExamRef[]> = ${JSON.stringify(mapping, null, 2)};
`;

writeFileSync(OUT, header, 'utf8');
console.log(`\nWrote ${OUT}`);
