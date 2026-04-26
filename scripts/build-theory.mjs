// 이론 마크다운 → src/data/theoryContent.ts 빌드 스크립트
// OneDrive 의 30개 마크다운 챕터를 읽어 단일 TS 모듈로 번들.
// 실행: node scripts/build-theory.mjs
//
// 출력:
//   src/data/theoryContent.ts — { c111: '...md', ..., c234: '...md' }
//   src/data/theory.ts        — 메타 (subjects · sections · chapters)

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const SRC = 'C:/Users/hwsyg/OneDrive/문서/Claude/Projects/SQLD 이론';

if (!existsSync(SRC)) {
  console.error('이론 md 폴더를 찾을 수 없음:', SRC);
  process.exit(1);
}

// ----- 메타 정의 (TOC 구조) -----
const TOC = {
  s1: {
    code: '1과목',
    title: '데이터 모델링의 이해',
    sections: [
      {
        id: 's1-1',
        title: '1-1. 데이터 모델링의 이해',
        chapters: [
          { id: 'c111', num: '1-1-1', title: '데이터 모델의 이해', oneLine: 'DB 설계도 · 개념 → 논리 → 물리 3단계' },
          { id: 'c112', num: '1-1-2', title: '엔터티',          oneLine: '정보의 덩어리 · 5대 특징 (업·식·인·속·관)' },
          { id: 'c113', num: '1-1-3', title: '속성',            oneLine: '엔터티의 세부 항목 · 기본/설계/파생' },
          { id: 'c114', num: '1-1-4', title: '관계',            oneLine: '엔터티 간 연결 · 1:1, 1:N, M:N' },
          { id: 'c115', num: '1-1-5', title: '식별자',          oneLine: '행을 구분하는 표식 · 4대 분류, 4대 조건' },
        ],
      },
      {
        id: 's1-2',
        title: '1-2. 데이터 모델과 SQL',
        chapters: [
          { id: 'c121', num: '1-2-1', title: '정규화',                       oneLine: '중복 제거 단계 · 1NF → 2NF → 3NF → BCNF' },
          { id: 'c122', num: '1-2-2', title: '관계와 조인의 이해',           oneLine: '관계 = FK = JOIN 의 토대' },
          { id: 'c123', num: '1-2-3', title: '모델이 표현하는 트랜잭션의 이해', oneLine: 'ACID · 관계의 필수성/식별성' },
          { id: 'c124', num: '1-2-4', title: 'Null 속성의 이해',             oneLine: '값 없음 · IS NULL 로만 비교' },
          { id: 'c125', num: '1-2-5', title: '본질식별자 vs 인조식별자',      oneLine: '자연 vs 인위 · 장단점 비교' },
        ],
      },
    ],
  },
  s2: {
    code: '2과목',
    title: 'SQL 기본 및 활용',
    sections: [
      {
        id: 's2-1',
        title: '2-1. SQL 기본',
        chapters: [
          { id: 'c211', num: '2-1-1', title: '관계형 데이터베이스 개요', oneLine: 'DDL/DML/DCL/TCL 분류' },
          { id: 'c212', num: '2-1-2', title: 'SELECT 문',               oneLine: '작성 vs 실행 순서 (FWGHSO)' },
          { id: 'c213', num: '2-1-3', title: '함수',                    oneLine: '단일행/문자/숫자/날짜/변환/NULL' },
          { id: 'c214', num: '2-1-4', title: 'WHERE 절',                oneLine: '행 필터 · AND/OR 우선순위' },
          { id: 'c215', num: '2-1-5', title: 'GROUP BY · HAVING 절',    oneLine: '그룹화 · WHERE vs HAVING' },
          { id: 'c216', num: '2-1-6', title: 'ORDER BY 절',             oneLine: '정렬 · ASC 기본, NULL 위치' },
          { id: 'c217', num: '2-1-7', title: '조인',                    oneLine: 'EQUI/Non-EQUI/SELF/OUTER/CROSS' },
          { id: 'c218', num: '2-1-8', title: '표준 조인',                oneLine: 'INNER/OUTER/CROSS/NATURAL/USING' },
        ],
      },
      {
        id: 's2-2',
        title: '2-2. SQL 활용',
        chapters: [
          { id: 'c221', num: '2-2-1', title: '서브쿼리',           oneLine: '단일행/다중행/연관 · 스칼라/인라인뷰' },
          { id: 'c222', num: '2-2-2', title: '집합 연산자',        oneLine: 'UNION / UNION ALL / INTERSECT / MINUS' },
          { id: 'c223', num: '2-2-3', title: '그룹 함수',          oneLine: 'ROLLUP / CUBE / GROUPING SETS' },
          { id: 'c224', num: '2-2-4', title: '윈도우 함수',         oneLine: 'RANK / ROW_NUMBER / LAG / LEAD' },
          { id: 'c225', num: '2-2-5', title: 'Top N 쿼리',          oneLine: 'ROWNUM / FETCH FIRST / TOP' },
          { id: 'c226', num: '2-2-6', title: '계층형 질의와 셀프 조인', oneLine: 'CONNECT BY · SELF JOIN' },
          { id: 'c227', num: '2-2-7', title: 'PIVOT / UNPIVOT 절',  oneLine: '세로 ↔ 가로 변환' },
          { id: 'c228', num: '2-2-8', title: '정규 표현식',          oneLine: 'REGEXP_LIKE / REPLACE / SUBSTR' },
        ],
      },
      {
        id: 's2-3',
        title: '2-3. 관리 구문',
        chapters: [
          { id: 'c231', num: '2-3-1', title: 'DML', oneLine: 'INSERT / UPDATE / DELETE / MERGE' },
          { id: 'c232', num: '2-3-2', title: 'TCL', oneLine: 'COMMIT / ROLLBACK / SAVEPOINT' },
          { id: 'c233', num: '2-3-3', title: 'DDL', oneLine: 'CREATE / ALTER / DROP / TRUNCATE / 제약조건' },
          { id: 'c234', num: '2-3-4', title: 'DCL', oneLine: 'GRANT / REVOKE / ROLE' },
        ],
      },
    ],
  },
};

// ----- 마크다운 파일 매핑 -----
function findMd(num) {
  // num: '1-1-1' → '1-1-1_*.md'
  const all = readdirSync(SRC);
  return all.find(f => f.startsWith(num + '_') && f.endsWith('.md'));
}

// ----- 가벼운 교정: 마크다운 텍스트의 명백한 표기 통일 -----
function clean(md) {
  return md
    // 윈도우 줄바꿈 → LF
    .replace(/\r\n/g, '\n')
    // SQL 키워드 대문자 통일은 위험성 있어 패스 (코드블록 내부 영향)
    // 양끝 공백 정리
    .replace(/[ \t]+\n/g, '\n')
    // 다중 빈줄 → 2줄로
    .replace(/\n{3,}/g, '\n\n')
    .trim() + '\n';
}

// ----- theoryContent.ts 생성 -----
const allChapters = [
  ...TOC.s1.sections.flatMap(s => s.chapters),
  ...TOC.s2.sections.flatMap(s => s.chapters),
];

const contentEntries = [];
for (const ch of allChapters) {
  const file = findMd(ch.num);
  if (!file) {
    console.warn('  ⚠ md 누락:', ch.num);
    contentEntries.push(`  ${ch.id}: ''`);
    continue;
  }
  const md = clean(readFileSync(join(SRC, file), 'utf8'));
  // TS 템플릿 리터럴에 안전하게 임베드 (백틱·${} 이스케이프)
  const safe = md.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
  contentEntries.push(`  ${ch.id}: \`${safe}\``);
}

const contentTs = `// Auto-generated by scripts/build-theory.mjs
// 30개 SQLD 이론 챕터의 마크다운 본문.
// 직접 편집 금지 — 원본 md 파일(${SRC}) 수정 후 \`node scripts/build-theory.mjs\` 재실행.

export const THEORY_MD: Record<string, string> = {
${contentEntries.join(',\n')}
};
`;

writeFileSync('src/data/theoryContent.ts', contentTs, 'utf8');
console.log('  src/data/theoryContent.ts —', contentTs.length, 'bytes');

// ----- theory.ts 메타 생성 -----
const theoryTs = `// 이론 메타 — 30개 챕터 (Auto-generated by scripts/build-theory.mjs)
import { THEORY_MD } from './theoryContent';

export const THEORY: any = {
  subjects: ${JSON.stringify(
    Object.entries(TOC).map(([id, s]) => ({
      id,
      code: s.code,
      title: s.title,
      sections: s.sections,
      // 호환용: 평탄화된 chapters
      chapters: s.sections.flatMap(sec => sec.chapters.map(c => ({
        id: c.id,
        title: c.title,
        num: c.num,
        oneLine: c.oneLine,
        sectionTitle: sec.title,
        sectionId: sec.id,
        detailed: true,
        sections: [c.oneLine],
      }))),
    })),
    null, 2
  )},
};

export const THEORY_BODY: any = THEORY_MD;
`;

writeFileSync('src/data/theory.ts', theoryTs, 'utf8');
console.log('  src/data/theory.ts —', theoryTs.length, 'bytes');

// 통계
console.log(`Done. ${allChapters.length} chapters bundled.`);
