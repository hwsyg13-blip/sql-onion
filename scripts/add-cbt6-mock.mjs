import fs from 'node:fs';
const target = 'scripts/authored/cbt-mock.json';
const data = JSON.parse(fs.readFileSync(target, 'utf-8'));

const NEW = [
  {
    _pdf: 'cbt6', _pdfNumber: 1,
    subject: '1과목', chapter: '관계',
    title: '다음 개념에 해당하는 관계는 무엇인가?\n\n부모 엔터티로부터 속성을 받았지만, 자식 엔터티의 주식별자로 사용하지 않고 일반적인 속성으로만 사용하는 관계',
    options: [
      '식별자 관계 (Identifying Relationship)',
      '비식별자 관계 (Non-Identifying Relationship)',
      '일반 속성 관계 (Attribute Relationship)',
      '외부 식별 관계 (Foreign Key Relationship)'
    ],
    correctIndex: 1,
    explanation: '부모 엔터티의 PK 를 자식의 \"일반 속성 (FK)\" 으로만 받고 자식의 PK 에 포함시키지 않는 관계는 비식별자 관계 (Non-Identifying Relationship). 식별자 관계는 부모 PK 가 자식 PK 의 일부가 된다.'
  },
  {
    _pdf: 'cbt6', _pdfNumber: 13,
    subject: '1과목', chapter: '속성',
    title: '자신의 속성이 없어도 다른 속성을 이용하여 결과를 도출할 수 있는 특징을 가진 속성의 이름은?',
    options: ['기본 속성', '설계 속성', '파생 속성', '관계 속성'],
    correctIndex: 2,
    explanation: '파생 속성 (Derived Attribute) 은 자신만의 고유 값을 갖지 않고 다른 속성의 값을 이용하여 계산·도출되는 속성 (예: 생년월일에서 계산되는 나이).'
  },
  {
    _pdf: 'cbt6', _pdfNumber: 17,
    subject: '1과목', chapter: '데이터 모델 개념',
    title: '다음 중 개념적 데이터 모델링 단계의 주요 산출물은?',
    options: [
      '엔터티-관계 다이어그램 (ERD)',
      '물리 테이블 정의서',
      '인덱스 설계서',
      '저장 구조 설계서'
    ],
    correctIndex: 0,
    explanation: '개념적 데이터 모델링 단계는 업무 영역에서 핵심 엔터티와 관계를 도출하는 단계로 엔터티-관계 다이어그램 (ERD) 이 주요 산출물이다. 물리 테이블·인덱스·저장 구조 설계서는 물리적 모델링 단계의 산출물.'
  },
  {
    _pdf: 'cbt6', _pdfNumber: 24,
    subject: '2과목', chapter: '조인',
    title: '테이블 R 과 S 가 다음과 같을 때, 아래 SQL 문 (SELECT 구문) 의 실행 결과로 옳은 것은?\n\n`SELECT COUNT(*) FROM R, S;`',
    options: ['4', '5', '9', '20'],
    correctIndex: 3,
    explanation: 'COUNT(*) 는 행 수를 세는 집계 함수. R 과 S 사이에 조인 조건이 없으므로 카티션 곱이 발생한다. R 행 4 × S 행 5 = 20.',
    references: [
      {
        type: 'table', caption: '[R] 테이블',
        headers: ['EID', 'ENAME', 'PHONE', 'SEX', 'DID'],
        rows: [['823', 'Kim', '8491', 'M', '100'], ['434', 'Park', '8488', 'F', '101'], ['180', 'Lee', '8592', 'M', '101'], ['510', 'Choi', '8598', 'F', '100']]
      },
      {
        type: 'table', caption: '[S] 테이블',
        headers: ['DID', 'DNAME', 'ROOM'],
        rows: [['100', 'Head', 'A403'], ['101', 'Sales', 'A401'], ['102', 'Proj1', 'A301'], ['103', 'Proj2', 'B101'], ['104', 'AS', 'B102']]
      }
    ]
  },
  {
    _pdf: 'cbt6', _pdfNumber: 25,
    subject: '2과목', chapter: 'DDL',
    title: '다음 SQL 실행 결과로 가장 알맞은 것은?\n\n`CREATE TABLE TAB1 (COL1 INTEGER PRIMARY KEY, COL2 INTEGER); CREATE TABLE TAB2 (COL3 INTEGER PRIMARY KEY, COL4 INTEGER REFERENCES TAB1(COL1) ON DELETE CASCADE);`\n\n실행 후 INSERT 와 DELETE FROM TAB1 WHERE COL2 IN (3); 수행',
    options: ['0', '1', '2', '3'],
    correctIndex: 1,
    explanation: 'TAB1 = [(1,1), (2,2), (3,3)], TAB2 = [(4,3), (5,2)]. DELETE FROM TAB1 WHERE COL2 IN (3) → COL1=3 행 삭제. ON DELETE CASCADE 로 TAB2 의 COL4=3 인 (4,3) 행도 함께 삭제. TAB2 = [(5,2)] = 1 행. SELECT COUNT(*) = 1 → 답 ②.'
  },
  {
    _pdf: 'cbt6', _pdfNumber: 26,
    subject: '2과목', chapter: '그룹 함수',
    title: '다음 테이블을 기준으로, 아래의 SQL 을 실행했을 때 그 결과로 올바른 행 개수는?\n\n`SELECT COUNT(AGE) FROM TB_STUDENT WHERE AGE > 20;`',
    options: ['2', '3', '4', '1'],
    correctIndex: 0,
    explanation: 'COUNT(AGE) 는 NULL 을 제외하고 NOT NULL 인 행 중 WHERE AGE > 20 만족하는 행 수를 센다. Kim 22 (>20 ✓), Lee NULL (제외), Park NULL (제외), Cho 25 (>20 ✓) → 2.',
    references: [
      { type: 'table', caption: '[TB_STUDENT] 테이블', headers: ['ID', 'NAME', 'AGE'], rows: [['1', 'Kim', '22'], ['2', 'Lee', 'NULL'], ['3', 'Park', 'NULL'], ['4', 'Cho', '25']] }
    ]
  },
  {
    _pdf: 'cbt6', _pdfNumber: 27,
    subject: '2과목', chapter: '표준 조인',
    title: '다음 쿼리를 ANSI 방식으로 변경한 것으로 옳은 것은?\n\n`SELECT E.ENAME, D.DNAME FROM EMP E, DEPT D WHERE E.DEPTNO = D.DEPTNO;`',
    options: [
      'SELECT ENAME, DNAME FROM EMP JOIN DEPT USING (EMP.DEPTNO = DEPT.DEPTNO);',
      'SELECT ENAME, DNAME FROM EMP E INNER JOIN DEPT D ON E.DEPTNO = D.DEPTNO;',
      'SELECT ENAME, DNAME FROM EMP E LEFT JOIN DEPT D ON D.DEPTNO = E.DEPTNO;',
      'SELECT ENAME, DNAME FROM EMP E CROSS JOIN DEPT D;'
    ],
    correctIndex: 1,
    explanation: '암시적 조인 \"FROM EMP E, DEPT D WHERE E.DEPTNO = D.DEPTNO\" 는 ANSI 표준 INNER JOIN ON 으로 변환된다. ① USING 은 컬럼명만 명시 (등호 표현 불가), ③ LEFT JOIN 은 외부 조인이라 의미 다름, ④ CROSS JOIN 은 조건 없는 카티션 곱.'
  },
  {
    _pdf: 'cbt6', _pdfNumber: 28,
    subject: '2과목', chapter: '윈도우 함수',
    title: '그룹 내 순위 관련 WINDOW 함수의 특징으로 올바르지 않은 것은?',
    options: [
      'RANK 함수는 동일한 값에 대해서 동일한 순위를 부여한다.',
      'DENSE_RANK 함수는 RANK 와 비슷하지만 동일한 순위 다음 순위를 건너뛰지 않는다.',
      'CUMM_RANK 함수는 누적된 순위를 부여한다.',
      'ROW_NUMBER 함수는 동일한 값이라도 고유한 순위를 부여한다.'
    ],
    correctIndex: 2,
    explanation: '#CUMM_RANK 라는 함수는 표준 윈도우 함수에 존재하지 않는다. 그룹 내 순위 함수는 RANK, DENSE_RANK, ROW_NUMBER 가 있다.'
  },
  {
    _pdf: 'cbt6', _pdfNumber: 37,
    subject: '2과목', chapter: '조인',
    title: 'Hash Join 기법에 대한 설명으로 옳은 것은?',
    options: [
      'Hash Join 은 두 테이블을 모두 정렬한 뒤 병합하면서 조인을 수행한다.',
      'Hash Join 은 작은 테이블을 메모리에 해시 테이블로 만든 후 큰 테이블을 한 번 스캔하면서 매칭한다.',
      'Hash Join 은 후행 테이블의 인덱스를 따라가며 매칭하는 방식이다.',
      'Hash Join 은 두 테이블 모두에 인덱스가 반드시 있어야 사용 가능하다.'
    ],
    correctIndex: 1,
    explanation: 'Hash Join 은 작은 테이블 (Build) 의 조인 키로 메모리에 해시 테이블을 구성한 뒤, 큰 테이블 (Probe) 을 스캔하며 해시 테이블을 조회하여 매칭하는 방식이다. 인덱스 없이도 수행 가능하며 대용량 조인에 효율적.'
  },
  {
    _pdf: 'cbt6', _pdfNumber: 44,
    subject: '1과목', chapter: '정규화',
    title: '테이블의 반정규화 기법 중 데이터 무결성을 깨뜨릴 위험을 갖지 않고서도 데이터 처리의 성능을 향상시킬 수 있는 기법은?',
    options: [
      '컬럼 반정규화',
      '테이블 통합',
      '테이블 분할',
      '관계 반정규화'
    ],
    correctIndex: 2,
    explanation: '테이블 분할 (수직 또는 수평 분할) 은 데이터를 그대로 보존한 채로 단순히 분리만 하므로 데이터 무결성을 깨뜨리지 않는다. 다른 반정규화 기법 (컬럼 중복, 통합 등) 은 중복으로 인해 무결성 위험이 따를 수 있다.'
  },
  {
    _pdf: 'cbt6', _pdfNumber: 49,
    subject: '2과목', chapter: '함수',
    title: '숫자형 함수 적용과 그 결괏값이 올바르지 않은 것은?',
    options: [
      'ROUND(3.14, 1) = 3.1',
      'TRUNC(3.99, 1) = 3.9',
      'CEIL(3.14) = 4',
      'FLOOR(3.99) = 4'
    ],
    correctIndex: 3,
    explanation: 'FLOOR (내림) 는 \"바닥\" 으로 향하므로 FLOOR(3.99) = 3 이 되어야 한다. ① ROUND(3.14, 1) = 3.1 (소수 둘째 자리 반올림), ② TRUNC(3.99, 1) = 3.9 (소수 둘째 자리 절사), ③ CEIL(3.14) = 4 (올림) — 모두 옳음.'
  }
];

let nextId = data.authored.length + 1;
for (const q of NEW) {
  q._id = `cbt-${String(nextId).padStart(3, '0')}`;
  data.authored.push(q);
  nextId++;
}

fs.writeFileSync(target, JSON.stringify(data, null, 2) + '\n');
console.log(`Added ${NEW.length} cbt6 questions. Total: ${data.authored.length}`);
