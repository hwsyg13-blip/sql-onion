// Append cbt4 unique questions
import fs from 'node:fs';

const target = 'scripts/authored/cbt-mock.json';
const data = JSON.parse(fs.readFileSync(target, 'utf-8'));

const NEW = [
  {
    _pdf: 'cbt4', _pdfNumber: 1,
    subject: '2과목', chapter: 'WHERE',
    title: '다음 SQL 문장의 결과로 출력되는 데이터는 무엇인가?\n\n`SELECT PLAYER_NAME, 인적신원, E_PLAYER_NAME 인사평가별 FROM PLAYER WHERE E_PLAYER_NAME LIKE \'_A%\';`',
    options: [
      '선수의 영문 이름의 두 번째 문자가 A 인 선수들',
      '선수의 영문 이름의 A 로 시작되는 선수들 이름',
      '선수의 영문 이름이 A 로 시작하는 선수들',
      '선수의 신상에서 신원이 영문 이름이 A 로 시작되는 선수들의 이름'
    ],
    correctIndex: 0,
    explanation: 'LIKE \'_A%\' 패턴의 해석 — \'_\' 는 임의의 한 문자, \'A\' 는 리터럴 A, \'%\' 는 0 글자 이상. 즉 \"임의 한 글자 + A + 임의 길이\" → 두 번째 문자가 A 인 문자열.'
  },
  {
    _pdf: 'cbt4', _pdfNumber: 4,
    subject: '2과목', chapter: 'TOP N 쿼리',
    title: '다음 SQL 실행 결과로 가장 알맞은 것은?',
    options: ['ITEM A', 'ITEM B', 'ITEM C', '오류 발생'],
    correctIndex: 2,
    explanation: 'Oracle 11g 에서 상위 N 개 데이터를 가져오려면 인라인 뷰에서 ORDER BY 로 정렬한 후 ROWNUM 으로 필터링한다. PRICE 기준 내림차순 정렬에서 가격이 가장 높은 ITEM C (200) 한 행이 ROWNUM = 1 로 추출된다.',
    references: [
      { type: 'table', caption: '[TB_ITEM] 테이블', headers: ['NAME', 'PRICE'], rows: [['A', '100'], ['B', '150'], ['C', '200']] },
      { type: 'sql', code: "SELECT *\nFROM (\n  SELECT NAME, PRICE\n  FROM   TB_ITEM\n  ORDER BY PRICE DESC\n)\nWHERE  ROWNUM = 1;" }
    ]
  },
  {
    _pdf: 'cbt4', _pdfNumber: 7,
    subject: '2과목', chapter: 'DDL',
    title: '다음 중 뷰 (View) 에 대한 설명으로 옳지 않은 것은?',
    options: [
      '뷰는 실행할 때마다 생성된다.',
      '뷰는 SELECT 쿼리를 저장한 객체이다.',
      '뷰는 데이터를 저장하지 않는다.',
      '뷰의 정의에 따라 데이터가 변경되기도 한다.'
    ],
    correctIndex: 0,
    explanation: '뷰는 미리 생성되어 데이터베이스에 저장된 객체이며, 실행 시 그 SELECT 쿼리가 실행되어 결과가 반환된다. \"실행할 때마다 생성된다\" 는 옳지 않은 설명. 뷰는 SELECT 문을 저장한 객체로 데이터 자체는 가상이며 실제 데이터를 저장하지 않는다.'
  },
  {
    _pdf: 'cbt4', _pdfNumber: 8,
    subject: '2과목', chapter: 'DCL·TCL',
    title: '트랜잭션의 특징에 대한 설명으로 올바르지 않은 것은?',
    options: [
      '원자성 (Atomicity) — 트랜잭션 내의 모든 작업은 모두 수행되거나 모두 수행되지 않아야 한다.',
      '일관성 (Consistency) — 트랜잭션 수행 전후 일관된 데이터 상태가 유지된다.',
      '고립성 (Isolation) — 동시에 실행되는 트랜잭션은 서로 영향을 주지 않아야 한다.',
      '지속성 (Durability) — 트랜잭션이 성공한 후에도 데이터 변경 사항이 사라질 수 있다.'
    ],
    correctIndex: 3,
    explanation: '지속성 (Durability) 은 트랜잭션이 성공적으로 완료되면 그 결과가 영구적으로 반영되는 특성이다. \"사라질 수 있다\" 는 옳지 않은 진술.'
  },
  {
    _pdf: 'cbt4', _pdfNumber: 9,
    subject: '2과목', chapter: 'DML',
    title: '다음 테이블에 입력될 수 없는 INSERT 문은? (단, 보기의 쿼리는 순차적으로 실행한다.)',
    options: [
      "INSERT INTO TAB1 (COL1, COL2, COL3) VALUES ('A001', 'Y', 'Z');",
      "INSERT INTO TAB1 (COL1, COL3) VALUES ('A002', 'Z2');",
      "INSERT INTO TAB1 (COL2, COL3) VALUES ('A001', 'Z3');",
      "INSERT INTO TAB2 (COL1, COL2, COL3) VALUES ('A002', 'A001', 100);"
    ],
    correctIndex: 1,
    explanation: 'TAB1.COL2 는 NOT NULL 제약. ② 는 COL2 값을 명시하지 않아 NULL 이 입력되므로 NOT NULL 위반 → 입력 실패. ① 정상 (모든 값 제공). ③ COL1 PK 가 \'A001\' 로 ① 과 동일해 PK 위반 (단 ② 가 우선 출제 답안). ④ TAB2.COL2 가 TAB1.COL1=\'A001\' 을 참조하는 FK, ① 에서 \'A001\' 입력됨 → 정상.',
    references: [
      {
        type: 'sql',
        code: "CREATE TABLE TAB1 (\n  COL1 VARCHAR2(10) PRIMARY KEY,\n  COL2 VARCHAR2(10) NOT NULL,\n  COL3 VARCHAR2(10)\n);\n\nCREATE TABLE TAB2 (\n  COL1 VARCHAR2(10) PRIMARY KEY,\n  COL2 VARCHAR2(10) REFERENCES TAB1(COL1),\n  COL3 NUMBER\n);"
      }
    ]
  },
  {
    _pdf: 'cbt4', _pdfNumber: 13,
    subject: '2과목', chapter: '조인',
    title: '다음 결과는 2 개의 테이블을 어떤 Join 으로 진행한 것인가?',
    options: ['Natural Join', 'Right Outer Join', 'Left Outer Join', 'Full Outer Join'],
    correctIndex: 3,
    explanation: '결과 테이블에 EMPNO 만 있고 DEPTNO 가 NULL 인 행 + DEPTNO 만 있고 EMPNO 가 NULL 인 행 + 매칭된 행 모두 포함되어 있다. 이는 양쪽 테이블의 모든 행을 보존하는 FULL OUTER JOIN.',
    references: [
      { type: 'table', caption: '결과', headers: ['EMPNO', 'DEPTNO'], rows: [['7902', '20'], ['7934', '10'], ['(NULL)', '40'], ['8031', '(NULL)']] }
    ]
  },
  {
    _pdf: 'cbt4', _pdfNumber: 14,
    subject: '2과목', chapter: '조인',
    title: '다음 중 SELF JOIN 을 수행해야 할 때는 어떤 경우인가?',
    options: [
      '한 테이블 내에서 두 컬럼이 연관 관계가 있다.',
      '두 테이블에 공통 컬럼이 없으나 JOIN 을 해야 한다.',
      '두 테이블에 공통 컬럼이 존재하고 두 테이블이 연관 관계가 있다.',
      '한 테이블 내에서 컬럼이 단일 관계가 있다.'
    ],
    correctIndex: 0,
    explanation: 'SELF JOIN 은 하나의 테이블에서 두 개의 컬럼이 연관 관계를 가지고 있는 경우 (예: EMP 의 EMPNO·MGR) 에 사용한다.'
  },
  {
    _pdf: 'cbt4', _pdfNumber: 18,
    subject: '2과목', chapter: '함수',
    title: '다음 SQL 실행 결과로 가장 알맞은 것은?\n\n`SELECT REPLACE(SUBSTR(\'ABCDXYZ\', 2, 4), \'C\', \'*\') AS RESULT FROM DUAL;`',
    options: ['BC*D', 'B*D', 'BC*X', 'B*DX'],
    correctIndex: 3,
    explanation: 'SUBSTR(\'ABCDXYZ\', 2, 4) → 두 번째 문자부터 4 글자 = \'BCDX\'. REPLACE(\'BCDX\', \'C\', \'*\') → \'B*DX\'.'
  },
  {
    _pdf: 'cbt4', _pdfNumber: 19,
    subject: '2과목', chapter: '집합 연산자',
    title: '다음 중에서 집합 연산자의 종류에 해당되지 않은 것을 고르시오.',
    options: ['Union all', 'Union', 'Project', 'Except'],
    correctIndex: 2,
    explanation: 'Project 는 관계 연산자 (PROJECT 연산) 이며 집합 연산자에 해당하지 않는다. UNION, UNION ALL, INTERSECT, MINUS (EXCEPT) 가 집합 연산자.'
  },
  {
    _pdf: 'cbt4', _pdfNumber: 24,
    subject: '2과목', chapter: '관계형 DB와 SELECT',
    title: '다음 SQL 문의 실행 순서로 가장 적절한 것은?\n\n`SELECT DEPT, COUNT(*) FROM EMP WHERE SAL > 3000 GROUP BY DEPT HAVING COUNT(*) > 1 ORDER BY DEPT;`',
    options: [
      'SELECT → WHERE → GROUP BY → HAVING → ORDER BY',
      'FROM → GROUP BY → HAVING → WHERE → SELECT → ORDER BY',
      'FROM → SELECT → GROUP BY → WHERE → ORDER BY → HAVING',
      'FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY'
    ],
    correctIndex: 3,
    explanation: 'SQL 의 실제 실행 순서는 FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY.'
  },
  {
    _pdf: 'cbt4', _pdfNumber: 25,
    subject: '2과목', chapter: '서브쿼리',
    title: '다음 SQL 실행 결과로 가장 알맞은 것은?\n\n`SELECT NAME FROM EMP WHERE SAL >= (SELECT MAX(SAL) FROM EMP WHERE DEPT = 10);`',
    options: [
      '서브쿼리에서 2 행 이상 반환되므로 오류가 발생한다.',
      'A',
      'B',
      'A, C'
    ],
    correctIndex: 3,
    explanation: '서브쿼리: DEPT=10 인 SAL = {3000, 2500} 의 MAX = 3000 (단일 행 반환). 메인 쿼리: WHERE SAL >= 3000 → A (3000), C (4000) 출력.',
    references: [
      { type: 'table', caption: '[EMP] 테이블', headers: ['NAME', 'DEPT', 'SAL'], rows: [['A', '10', '3000'], ['B', '10', '2500'], ['C', '20', '4000']] }
    ]
  },
  {
    _pdf: 'cbt4', _pdfNumber: 26,
    subject: '2과목', chapter: '윈도우 함수',
    title: '다음 EMP 테이블에서 사원들의 입사일을 기준으로 이전 입사자와 다음 입사자의 이름을 함께 조회하려고 한다. 빈칸 (ㄱ), (ㄴ) 에 들어갈 알맞은 함수를 짝지은 것은?\n\n`SELECT ENAME, (ㄱ)(ENAME) OVER (ORDER BY HIREDATE) AS PREV_EMP, (ㄴ)(ENAME) OVER (ORDER BY HIREDATE) AS NEXT_EMP FROM EMP;`',
    options: ['(ㄱ) LEAD, (ㄴ) LAG', '(ㄱ) LAG, (ㄴ) LEAD', '(ㄱ) PREV, (ㄴ) NEXT', '(ㄱ) FIRST_VALUE, (ㄴ) LAST_VALUE'],
    correctIndex: 1,
    explanation: 'LAG 는 이전 행의 값을 반환, LEAD 는 다음 행의 값을 반환. PREV_EMP 는 이전 행 → LAG, NEXT_EMP 는 다음 행 → LEAD.'
  },
  {
    _pdf: 'cbt4', _pdfNumber: 28,
    subject: '1과목', chapter: '엔터티',
    title: '다음 중 엔터티의 특징에 포함되지 않는 것은?',
    options: [
      '반드시 해당 엔터티는 필요로 하는 관리하고자 하는 정보이어야 한다.',
      '유일한 식별자에 의해 식별이 가능해야 한다.',
      '엔터티는 속성이 없어도 된다.',
      '엔터티는 업무 프로세스에 의해 이용되어야 한다.'
    ],
    correctIndex: 2,
    explanation: '엔터티는 속성을 2 개 이상 가지고 있어야 한다. \"속성이 없어도 된다\" 는 엔터티 특징에 포함되지 않는다.'
  },
  {
    _pdf: 'cbt4', _pdfNumber: 29,
    subject: '2과목', chapter: '함수',
    title: 'CASE 문에서 ELSE 를 생략하면 어떤 현상이 발생되는가?',
    options: [
      'ELSE 를 생략하면 해당 데이터가 NULL 로 입력된다.',
      'ELSE 조건이 만족하지 않은 데이터는 출력되지 않는다.',
      'ELSE 조건이 만족하지 않은 데이터는 0 이 입력된다.',
      'ELSE 조건이 만족하지 않은 데이터는 NULL 이 입력된다.'
    ],
    correctIndex: 3,
    explanation: 'CASE WHEN ... THEN ... 구문에서 ELSE 절이 없으면 어떤 WHEN 조건도 만족하지 않은 행에 대해 NULL 이 반환된다.'
  },
  {
    _pdf: 'cbt4', _pdfNumber: 30,
    subject: '1과목', chapter: '데이터 모델 개념',
    title: '분산 데이터베이스의 특징 중 저장 장소 명시가 불필요하다는 특성은 무엇인가?',
    options: ['시간 투명성', '위치 투명성', '변환 투명성', '분할 투명성'],
    correctIndex: 1,
    explanation: '위치 투명성 (Location Transparency) 은 사용자가 데이터의 저장 장소를 명시하지 않아도 동일하게 처리될 수 있는 특성을 의미한다.'
  },
  {
    _pdf: 'cbt4', _pdfNumber: 31,
    subject: '1과목', chapter: '관계',
    title: '엔터티 간 1:1, 1:M 과 같이 관계의 기수성을 나타내는 것을 무엇이라 하는가?',
    options: [
      '관계 차수 (Relationship Degree/Cardinality)',
      '관계명 (Relationship Membership)',
      '관계선택성 (Relationship Optionality)',
      '관계정의 (Relationship Definition)'
    ],
    correctIndex: 0,
    explanation: '엔터티 간 1:1, 1:M 등과 같이 관계 참여 인스턴스의 수를 지칭하는 것은 관계 차수 (Cardinality) 이다.'
  },
  {
    _pdf: 'cbt4', _pdfNumber: 32,
    subject: '2과목', chapter: '함수',
    title: '다음 중 NULL 값을 0 으로 대체하는 데 사용하는 함수는?',
    options: ['NVL', 'UPPER', 'MOD', 'ROUND'],
    correctIndex: 0,
    explanation: 'NVL(expr, value) 은 expr 이 NULL 일 경우 value 를 반환한다. NVL(컬럼, 0) 은 NULL 을 0 으로 대체하는 표준 사용법.'
  },
  {
    _pdf: 'cbt4', _pdfNumber: 33,
    subject: '2과목', chapter: 'DCL·TCL',
    title: '다음 주어진 SQL 문을 수행한 결과 영구적으로 반영되는 것은 무엇인가?\n\n`INSERT 1; INSERT 2; SAVEPOINT SV1; UPDATE COL1=7 WHERE COL1=2; INSERT 9; SAVEPOINT SV2; DELETE WHERE COL1=7; INSERT 11; SAVEPOINT SV3; INSERT 9; ROLLBACK TO SV2; COMMIT;`',
    options: ['1, 7, 9', '1, 9, 11', '1, 9, 11, 9', '1, 2'],
    correctIndex: 0,
    explanation: '단계별 추적: [1, 2] → SAVEPOINT SV1 → [1, 7] → INSERT 9 → [1, 7, 9] → SAVEPOINT SV2 → DELETE 7 → [1, 9] → INSERT 11 → [1, 9, 11] → SAVEPOINT SV3 → INSERT 9 → [1, 9, 11, 9] → ROLLBACK TO SV2 (revert to SV2 state) → [1, 7, 9] → COMMIT. 최종 [1, 7, 9].'
  },
  {
    _pdf: 'cbt4', _pdfNumber: 35,
    subject: '2과목', chapter: '집합 연산자',
    title: '다음 설명 중 올바르지 않은 것은?',
    options: [
      'UNION ALL 연산자는 조회 결과를 정렬하고 중복되는 데이터를 한 번만 표현한다.',
      'UNION 연산자는 조회 결과에 대한 합집합을 나타내며 중복되는 행들을 제외한다.',
      'INTERSECT 연산자는 조회 결과에 대한 교집합을 의미한다.',
      'EXCEPT 연산자는 조회 결과에 대한 차집합을 의미한다.'
    ],
    correctIndex: 0,
    explanation: 'UNION ALL 은 조회 결과에 대해 별도의 정렬 작업을 하지 않고 모든 결과 데이터를 중복까지 모두 표현한다. \"정렬하고 중복 데이터를 한 번만 표현\" 은 UNION 의 특성이다.'
  },
  {
    _pdf: 'cbt4', _pdfNumber: 42,
    subject: '2과목', chapter: '함수',
    title: '다음 SQL 문의 결과로 출력되는 데이터는 무엇인가?\n\n`SELECT NEXT_DAY(ADD_MONTHS(SYSDATE, 6), \'월요일\') FROM DUAL;`',
    options: [
      '오늘 날짜로부터 6 일 후 첫 번째 월요일을 출력한다.',
      '오늘 날짜로부터 6 개월 후 두 번째 월요일을 출력한다.',
      '오늘 날짜로부터 6 개월 후 첫 번째 월요일을 출력한다.',
      '오늘 날짜로부터 6 일 후 두 번째 월요일을 출력한다.'
    ],
    correctIndex: 2,
    explanation: 'ADD_MONTHS(SYSDATE, 6) 은 오늘 날짜에서 6 개월을 더한 날짜를 반환. NEXT_DAY(date, \'월요일\') 은 그 날짜 이후 첫 번째 월요일을 반환.'
  },
  {
    _pdf: 'cbt4', _pdfNumber: 43,
    subject: '1과목', chapter: '정규화',
    title: '다음 중 제3 정규형 (3NF) 이 되기 위한 조건으로 알맞은 것은?',
    options: [
      '기본키가 아닌 컬럼이 다른 일반 컬럼에 이행적으로 종속되는 경우를 제거한다.',
      '도메인 원자성을 확보한다.',
      '모든 컬럼이 기본키에 완전 함수 종속하도록 한다.',
      '다치 종속을 제거한다.'
    ],
    correctIndex: 0,
    explanation: '제3 정규형 (3NF) 은 제1·제2 정규형을 만족하면서, 기본키가 아닌 속성이 다른 비기본키 속성에 이행적으로 종속되는 경우를 제거한 상태이다. ② 는 1NF, ③ 은 2NF, ④ 는 4NF.'
  },
  {
    _pdf: 'cbt4', _pdfNumber: 45,
    subject: '2과목', chapter: 'GROUP BY·HAVING',
    title: '다음 SQL 의 실행 결과로 출력되는 행 수는?\n\n`SELECT CUSTOMER_ID, SUM(AMOUNT) FROM TB_ORDER GROUP BY CUSTOMER_ID HAVING SUM(AMOUNT) >= 2000;`',
    options: ['1', '2', '3', '0'],
    correctIndex: 0,
    explanation: 'CUSTOMER_ID 별 SUM(AMOUNT) — A=1000+1500=2500, B=700+800=1500, C=NULL (제외). HAVING SUM(AMOUNT) >= 2000 만족: A 만 → 1 행.',
    references: [
      {
        type: 'table', caption: '[TB_ORDER] 테이블',
        headers: ['ORDER_ID', 'CUSTOMER_ID', 'AMOUNT'],
        rows: [['1', 'A', '1000'], ['2', 'A', '1500'], ['3', 'B', '700'], ['4', 'B', '800'], ['5', 'C', 'NULL']]
      }
    ]
  },
  {
    _pdf: 'cbt4', _pdfNumber: 47,
    subject: '2과목', chapter: 'DDL',
    title: '다음 중에서 DDL (Data Definition Language) 에 해당되지 않는 것은?',
    options: ['REVOKE', 'CREATE INDEX', 'DROP TABLE', 'ALTER TABLE'],
    correctIndex: 0,
    explanation: 'REVOKE 는 권한을 회수하는 DCL (Data Control Language) 이다. DDL 은 CREATE, ALTER, DROP, RENAME, TRUNCATE 등 객체 정의 명령.'
  },
  {
    _pdf: 'cbt4', _pdfNumber: 48,
    subject: '1과목', chapter: '데이터 모델 개념',
    title: '다음 설명에 해당하는 모델링 관점은 무엇인가?\n\n업무가 어떤 데이터와 관련이 있는지 또는 데이터 간의 관계는 무엇인지에 대해서 모델링하는 관점',
    options: ['프로세스 관점', '데이터와 프로세스의 상관 관점', '데이터와 데이터 간의 상관 관점', '데이터 관점'],
    correctIndex: 3,
    explanation: '데이터 관점 (What/Data) — 업무가 어떤 데이터와 관련이 있는지, 또는 데이터 간의 관계는 무엇인지에 대해서 모델링한다. ① 프로세스 관점은 \"How/Process\", ② 는 데이터-프로세스 상관 (Interaction).'
  },
  {
    _pdf: 'cbt4', _pdfNumber: 50,
    subject: '2과목', chapter: '서브쿼리',
    title: '서브쿼리의 종류 중에 서브쿼리를 실행하고 한 행, 한 컬럼을 반환하는 서브쿼리를 무엇이라고 하는가?',
    options: ['Looping', 'Scalar Subquery', 'Associative Subquery', 'Access Subquery'],
    correctIndex: 1,
    explanation: '스칼라 서브쿼리 (Scalar Subquery) 는 SELECT 문에서 사용하는 서브쿼리로 한 행, 한 컬럼만 반환하는 단일 값을 반환하는 서브쿼리이다.'
  }
];

let nextId = data.authored.length + 1;
for (const q of NEW) {
  q._id = `cbt-${String(nextId).padStart(3, '0')}`;
  data.authored.push(q);
  nextId++;
}

fs.writeFileSync(target, JSON.stringify(data, null, 2) + '\n');
console.log(`Added ${NEW.length} cbt4 questions. Total: ${data.authored.length}`);
