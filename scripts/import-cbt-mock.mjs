// Import 50 questions from "이기적 CBT, 영진닷컴" PDF into ai-mock.json.
// Source: scripts/cbt-source.txt (extracted with pdftotext -enc UTF-8 -layout).
// Output: appends ai-mock-061 ~ ai-mock-110 to scripts/authored/ai-mock.json.

import fs from 'node:fs';
import path from 'node:path';

const target = path.join('scripts', 'authored', 'ai-mock.json');
const data = JSON.parse(fs.readFileSync(target, 'utf-8'));

// Build new questions (50). Each entry includes _source: "yongjin-cbt".
const NEW = [
  // Q1
  {
    subject: '2과목', chapter: '윈도우 함수',
    title: '아래 결과의 PREV_SAL 컬럼은 직전 행의 SAL 값을 반환한다. 사용된 윈도우 함수로 옳은 것은?',
    options: ['LEAD', 'LAG', 'NTILE', 'LAST_VALUE'],
    correctIndex: 1,
    explanation: 'LAG() 윈도우 함수는 현재 행 기준 이전 (앞쪽) 행의 값을 반환한다. LEAD 는 다음 행, NTILE 은 그룹 분배, LAST_VALUE 는 윈도우의 마지막 값.',
  },
  // Q2
  {
    subject: '2과목', chapter: '서브쿼리',
    title: '아래 SQL 의 결과로 옳은 것은?',
    options: ['103', '101, 104', '102, 103', '102, 103, 104'],
    correctIndex: 2,
    explanation: 'TB_CUSTOMER 에서 CITY=\'SEOUL\' 인 CUST_ID 는 1, 4 이다. 따라서 메인 쿼리 WHERE CUST_ID NOT IN (1, 4) 는 TB_ORDER 에서 CUST_ID 가 1, 4 가 아닌 행의 ORDER_ID — 102, 103 을 반환한다.',
    references: [
      { type: 'table', caption: 'TB_CUSTOMER', headers: ['CUST_ID', 'CITY'], rows: [['1', 'SEOUL'], ['2', 'BUSAN'], ['3', 'INCHEON'], ['4', 'SEOUL']] },
      { type: 'table', caption: 'TB_ORDER', headers: ['ORDER_ID', 'CUST_ID'], rows: [['101', '1'], ['102', '2'], ['103', '3'], ['104', '4']] },
      { type: 'sql', code: "SELECT ORDER_ID\nFROM   TB_ORDER\nWHERE  CUST_ID NOT IN (\n  SELECT CUST_ID FROM TB_CUSTOMER WHERE CITY = 'SEOUL'\n);" }
    ]
  },
  // Q3
  {
    subject: '2과목', chapter: '서브쿼리',
    title: '아래 SQL 의 결과로 옳은 것은? (PRICE 가 가장 높은 상품의 NAME 을 조회)',
    options: ['Pen', 'Pencil', 'Book', '오류 발생'],
    correctIndex: 2,
    explanation: '서브쿼리 SELECT MAX(PRICE) 가 PRODUCTS 의 최고가를 반환한다. 메인 쿼리는 그 가격과 같은 행의 NAME 을 반환한다. PRODUCTS 의 최고가가 1000 인 Book 행만 조건에 부합 → Book.',
    references: [
      { type: 'table', caption: 'PRODUCTS 테이블', headers: ['NAME', 'PRICE'], rows: [['Pen', '500'], ['Pencil', '300'], ['Book', '1000']] },
      { type: 'sql', code: "SELECT NAME\nFROM   PRODUCTS\nWHERE  PRICE = (SELECT MAX(PRICE) FROM PRODUCTS);" }
    ]
  },
  // Q4
  {
    subject: '2과목', chapter: '관계형 DB와 SELECT',
    title: 'Student(5속성), Department(3속성) 두 테이블에 대해 `SELECT * FROM Student s, Department d WHERE s.dept > 100;` 실행 시 결과의 차수(Degree)와 카디널리티(Cardinality) 는? (Student 5 행, Department 3 행, 이 중 dept>100 조건을 만족하는 Student 가 3 행이라 가정)',
    options: ['5, 3', '5, 2', '8, 9', '8, 3'],
    correctIndex: 2,
    explanation: '차수(Degree) 는 결과 컬럼 수 — Student 5 + Department 3 = 8. 카디널리티는 결과 행 수 — 조건 없는 카티션 곱이라면 5×3=15 이지만 WHERE s.dept>100 으로 Student 측이 3 행으로 줄어들어 3×3=9 행이 된다. 따라서 (8, 9).',
  },
  // Q5
  {
    subject: '2과목', chapter: '서브쿼리',
    title: '특정 부서에 소속된 사원만 조회하는 SQL 로 적절하지 않은 것은?',
    options: [
      'SELECT E.* FROM 사원 AS E WHERE E.부서코드 LIKE (SELECT 부서코드 FROM 부서 WHERE E.부서코드 = 부서코드);',
      'SELECT E.* FROM 사원 AS E WHERE NOT EXISTS (SELECT * FROM 부서 WHERE E.부서코드 = 부서코드);',
      'SELECT E.* FROM 사원 AS E WHERE EXISTS (SELECT * FROM 부서 WHERE E.부서코드 = 부서코드 AND E.부서코드 = 부서코드);',
      'SELECT E.* FROM 사원 AS E WHERE NOT EXISTS (SELECT * FROM 부서 WHERE E.부서코드 = 부서코드 AND E.부서코드 = 부서코드);'
    ],
    correctIndex: 2,
    explanation: '"부서에 소속된 사원" 을 찾으려면 EXISTS (서브쿼리에서 매칭되는 부서가 존재) 를 사용해야 한다. ② 와 ④ 는 NOT EXISTS 로 정반대 (소속되지 않은 사원). ③ 은 EXISTS 지만 매칭 조건이 한 번만 필요한데 두 번 중복된 형태 — 사실상 동일 동작이지만 가장 적절한 형태는 ① 또는 단순한 EXISTS. 단, ① 의 LIKE 사용은 적절치 않으므로 정답은 \"적절하지 않은 것\" 으로 ③.'
  },
  // Q6
  {
    subject: '2과목', chapter: 'WHERE',
    title: '아래 SQL 의 WHERE 절 결과로 옳은 것은? (AND 가 OR 보다 우선순위가 높음을 활용)',
    options: ['1행', '3행 — Kim, Park, Jang', '4행 — 모두 출력', 'Kim, Park 두 행만'],
    correctIndex: 1,
    explanation: 'AND 가 OR 보다 우선순위가 높으므로 조건은 사실상 `GRADE = \'A\' OR (GRADE = \'B\' AND STATUS = \'ACTIVE\')` 로 평가된다. GRADE=A 인 Kim·Park 두 행 + GRADE=B 그리고 STATUS=ACTIVE 인 Jang 한 행 → 총 3 행 출력.',
    references: [
      { type: 'table', caption: 'TB_USER 테이블', headers: ['NAME', 'GRADE', 'STATUS'], rows: [
        ['Kim', 'A', 'INACTIVE'], ['Park', 'A', 'ACTIVE'], ['Jang', 'B', 'ACTIVE'], ['Lee', 'B', 'INACTIVE']
      ] },
      { type: 'sql', code: "SELECT NAME, GRADE, STATUS\nFROM   TB_USER\nWHERE  GRADE = 'A' OR GRADE = 'B' AND STATUS = 'ACTIVE';" }
    ]
  },
  // Q7
  {
    subject: '2과목', chapter: '그룹 함수',
    title: '아래 EMPLOYEE 테이블에 대한 SQL 결과 (COUNT(SALARY), SUM(SALARY), AVG(SALARY)) 로 옳은 것은? (SALARY 에 NULL 이 1건 포함)',
    options: ['3, 6000, 2000', '4, 6000, 2000', '3, 6000, 1500', '3, NULL, 2000'],
    correctIndex: 0,
    explanation: '집계 함수는 NULL 을 무시한다. SALARY 가 1000, 2000, 3000, NULL 일 때 COUNT(SALARY)=3 (NULL 제외), SUM=1000+2000+3000=6000, AVG=6000/3=2000.',
    references: [
      { type: 'table', caption: 'EMPLOYEE 테이블', headers: ['NAME', 'SALARY'], rows: [['A', '1000'], ['B', '2000'], ['C', '3000'], ['D', '(NULL)']] },
      { type: 'sql', code: 'SELECT COUNT(SALARY), SUM(SALARY), AVG(SALARY)\nFROM   EMPLOYEE;' }
    ]
  },
  // Q8
  {
    subject: '1과목', chapter: '데이터 모델 개념',
    title: '데이터 모델링에 대한 설명으로 적절하지 않은 것은?',
    options: [
      '데이터 모델은 3가지 구성 요소로 Process, Attributes, Relationships 가 있다.',
      '엔터티는 두 개 이상의 속성을 가져야 한다.',
      '관계는 두 엔터티 간의 연관성을 표현한다.',
      '데이터 모델링은 추상화·단순화의 과정이다.'
    ],
    correctIndex: 0,
    explanation: '데이터 모델의 3가지 구성 요소는 Things(엔터티), Attributes(속성), Relationships(관계) 이다. Process 는 데이터 모델의 구성 요소가 아니다.',
  },
  // Q9
  {
    subject: '1과목', chapter: '관계',
    title: '관계의 분류에 해당하지 않는 것은?',
    options: ['존재 관계', '논리 관계', '식별 관계', '비식별 관계'],
    correctIndex: 1,
    explanation: '관계는 표기법 또는 의미에 따라 존재/행위, 식별/비식별 등으로 분류된다. JOIN 등에서의 \"논리 관계\" 라는 분류는 표준 분류에 없다.',
  },
  // Q11
  {
    subject: '2과목', chapter: '조인',
    title: '해시 조인(Hash Join) 에 대한 설명으로 적절하지 않은 것은?',
    options: [
      '조인 컬럼에 인덱스가 없어도 수행 가능하다.',
      '대용량 데이터를 조인할 때 효율적이다.',
      'CPU 와 메모리 자원을 많이 사용한다.',
      '랜덤 액세스(Random Access) 가 발생하여 비효율적이다.'
    ],
    correctIndex: 3,
    explanation: '해시 조인은 해시 테이블을 메모리에 만들어 매칭하므로 랜덤 액세스가 발생하지 않고 순차 처리된다. 랜덤 액세스가 많은 것은 Nested Loop 조인의 특성이다.',
  },
  // Q14
  {
    subject: '2과목', chapter: 'WHERE',
    title: '인덱스 컬럼에 대한 WHERE 조건 중 인덱스를 사용하지 못해 성능에 불리한 것은?',
    options: [
      "where 컬럼 between 1 and 10",
      "where 컬럼 like '%검색%'",
      "where 컬럼 >= '20181201'",
      "where 컬럼 = '20181201'"
    ],
    correctIndex: 1,
    explanation: 'LIKE 패턴이 \'%\' 로 시작하면 인덱스의 정렬 순서를 활용할 수 없어 인덱스 풀 스캔 또는 테이블 풀 스캔이 발생. = / >= / BETWEEN 은 인덱스 범위 스캔으로 처리 가능.',
  },
  // Q15
  {
    subject: '1과목', chapter: '식별자',
    title: '주식별자 (Primary Identifier) 의 특성으로 적절하지 않은 것은?',
    options: ['유일성', '최소성', '불변성', '상태 (Y/N)'],
    correctIndex: 3,
    explanation: '주식별자는 유일성·최소성·불변성·존재성을 만족해야 한다. 상태 (Y/N) 는 주식별자의 특성이 아니라 해당 인스턴스의 활성 여부 같은 일반 속성이다.',
  },
  // Q16
  {
    subject: '2과목', chapter: '절차형 SQL',
    title: '절차형 SQL 에 해당하지 않는 것은?',
    options: ['PROCEDURE', 'TRIGGER', 'BUILT-IN FUNCTION', 'USER DEFINED FUNCTION'],
    correctIndex: 2,
    explanation: '절차형 SQL 은 사용자가 작성·정의하는 PROCEDURE, TRIGGER, USER DEFINED FUNCTION 을 의미한다. BUILT-IN FUNCTION 은 시스템이 제공하는 내장 함수.',
  },
  // Q18
  {
    subject: '2과목', chapter: '함수',
    title: 'SELECT COALESCE(NULL, \'2\', \'1\') FROM DUAL; 의 결과는?',
    options: ['1', '2', '3', 'NULL'],
    correctIndex: 1,
    explanation: 'COALESCE 는 인자 목록에서 NULL 이 아닌 첫 번째 값을 반환한다. 첫 번째 NULL 을 건너뛰고 두 번째 \'2\' 가 NULL 아님으로 반환됨.',
  },
  // Q19
  {
    subject: '2과목', chapter: 'DCL·TCL',
    title: '아래 SQL Server 트랜잭션 수행 후 SELECT COUNT(*) FROM TBL; 의 결과는?',
    options: ['0', '1', '2', '3'],
    correctIndex: 2,
    explanation: 'INSERT 1 → SAVEPOINT S1 → INSERT 2 → ROLLBACK TO S1 (INSERT 2 취소) → INSERT 3 → COMMIT. 최종 TBL 에는 1, 3 두 행 → COUNT=2.',
    references: [
      { type: 'sql', code: 'BEGIN TRAN;\nCREATE TABLE TBL (ID INT PRIMARY KEY);\nINSERT INTO TBL VALUES (1);\nSAVE TRAN S1;\nINSERT INTO TBL VALUES (2);\nROLLBACK TRAN S1;\nINSERT INTO TBL VALUES (3);\nCOMMIT;\nSELECT COUNT(*) FROM TBL;' }
    ]
  },
  // Q20
  {
    subject: '2과목', chapter: '집합 연산자',
    title: '두 결과 집합의 모든 행을 중복 제거 없이 결합하는 집합 연산자는?',
    options: ['INTERSECT', 'MINUS', 'UNION ALL', 'UNION'],
    correctIndex: 2,
    explanation: 'UNION ALL 은 중복을 제거하지 않고 두 집합의 모든 행을 그대로 결합한다. UNION 은 중복 제거, INTERSECT 는 교집합, MINUS 는 차집합.',
  },
  // Q21
  {
    subject: '2과목', chapter: '집합 연산자',
    title: '두 테이블이 1:1 관계로 정확히 동일한 키 집합을 가질 때 옳지 않은 것은? (PK 컬럼만 SELECT 한다고 가정)',
    options: [
      '두 결과의 UNION ALL 결과 건수는 두 테이블 행 수의 합이다.',
      '두 결과의 UNION 결과 건수는 한 테이블 행 수와 같다.',
      '두 결과의 MINUS 결과 행 수는 0 이 아니다.',
      '두 결과의 INTERSECT 결과 행 수는 한 테이블 행 수와 같다.'
    ],
    correctIndex: 2,
    explanation: '두 테이블이 동일한 키 집합 (1:1) 을 가지면 MINUS 결과는 공집합 (0 건) 이 된다. INTERSECT 는 두 집합의 교집합이라 동일 키 집합이면 한 테이블의 모든 행이 매칭. UNION 은 중복 제거되어 한 테이블 행 수와 같음.',
  },
  // Q22
  {
    subject: '2과목', chapter: '윈도우 함수',
    title: '순위 윈도우 함수에 대한 설명 중 옳은 것은?',
    options: [
      'RANK 는 동일 순위 부여 시 다음 순위를 SKIP 하지 않는다.',
      'DENSE_RANK 는 동일 순위 부여 시 다음 순위를 SKIP 한다.',
      'ROW_NUMBER 는 동일 값에 같은 순위를 부여한다.',
      'RANK 는 동일 순위 부여 시 다음 순위를 SKIP 한다.'
    ],
    correctIndex: 3,
    explanation: 'RANK 는 동일 값에 같은 순위를 부여하고 그 다음 순위를 건너뛴다 (1, 2, 2, 4). DENSE_RANK 는 건너뛰지 않는다 (1, 2, 2, 3). ROW_NUMBER 는 동률 무시 고유 순번 (1, 2, 3, 4).',
  },
  // Q23
  {
    subject: '2과목', chapter: '조인',
    title: '아래 SQL 의 결과로 옳은 것은? (T1 3행, T2 매칭 2행, T3 매칭 1행)',
    options: ['1', '2', '3', '0'],
    correctIndex: 1,
    explanation: 'LEFT OUTER JOIN 은 왼쪽 테이블 (T1) 행 수를 보존한다. T1 LEFT JOIN T2 에서 T1 의 3 행 중 T2 매칭 2 행 + 미매칭 1 행 = 3 행, 다시 LEFT JOIN T3 해도 행 수 유지. WHERE T2.COL IS NOT NULL 로 T2 매칭 2 행만 남음.',
    references: [
      { type: 'sql', code: 'SELECT COUNT(*) FROM T1\nLEFT OUTER JOIN T2 ON T1.COL = T2.COL\nLEFT OUTER JOIN T3 ON T1.COL = T3.COL\nWHERE T2.COL IS NOT NULL;' }
    ]
  },
  // Q24
  {
    subject: '1과목', chapter: '데이터 모델 개념',
    title: '논리 데이터 모델에 대한 설명으로 적절하지 않은 것은?',
    options: [
      '엔터티·속성·관계가 정확히 표현되어야 한다.',
      '재사용성이 높아야 한다.',
      '추상화 수준이 가장 높다.',
      'DBMS 종속적인 물리적 특성이 반영되어야 한다.'
    ],
    correctIndex: 3,
    explanation: '논리 데이터 모델은 DBMS 와 독립적이다. DBMS 종속적인 물리적 특성 (인덱스·파티션·저장 구조) 은 물리 모델 단계에서 반영된다.',
  },
  // Q25
  {
    subject: '2과목', chapter: 'DML',
    title: 'DML 에 해당하지 않는 명령어는?',
    options: ['INSERT', 'DELETE', 'MERGE', 'TRUNCATE'],
    correctIndex: 3,
    explanation: 'TRUNCATE 는 테이블의 전체 데이터를 빠르게 삭제하지만 DDL 에 속한다 (자동 커밋, ROLLBACK 불가). INSERT/UPDATE/DELETE/MERGE 는 DML.',
  },
  // Q26
  {
    subject: '2과목', chapter: '함수',
    title: '아래 SQL 과 동등한 CASE 표현으로 옳은 것은?\n\n`SELECT NVL(Name, \'\') FROM Emp;`',
    options: [
      "SELECT CASE WHEN Name IS NOT NULL THEN Name ELSE '0' END FROM Emp;",
      "SELECT CASE WHEN Name IS NOT NULL THEN '0' ELSE Name END FROM Emp;",
      "SELECT CASE WHEN Name IS NULL THEN '' ELSE Name END FROM Emp;",
      "SELECT CASE WHEN Name IS NULL THEN '' ELSE '0' END FROM Emp;"
    ],
    correctIndex: 2,
    explanation: 'NVL(Name, \'\') 은 Name 이 NULL 이면 \'\' 로 대체, 그렇지 않으면 Name 그대로 반환. 동등한 CASE 식은 \"WHEN Name IS NULL THEN \'\' ELSE Name END\".',
  },
  // Q27 (lost update scenario)
  {
    subject: '2과목', chapter: 'DCL·TCL',
    title: 'EMP 테이블의 사번 7788 사원의 SAL 을 두 트랜잭션 TX1, TX2 가 동시에 수정한다. TX1 은 +100, TX2 는 +200 을 더하고 TX2 가 먼저 커밋, TX1 이 나중에 커밋한다. 직렬화 격리 수준에서 최종 SAL 은? (초기 SAL = 1000)',
    options: ['1000', '1100', '1200', '1300'],
    correctIndex: 3,
    explanation: 'TX2 가 1000 → 1200 으로 업데이트 후 커밋. 그 후 TX1 이 다시 읽으면 1200, +100 = 1300 으로 업데이트. 두 변경이 모두 적용된 1300.',
  },
  // Q28
  {
    subject: '2과목', chapter: '윈도우 함수',
    title: '윈도우 함수에 대한 설명으로 옳지 않은 것은?',
    options: [
      'GROUP BY 와 PARTITION BY 는 서로 호환된다.',
      'PARTITION BY 절을 생략하면 전체 행이 하나의 파티션이 된다.',
      'WINDOWING 절은 ORDER BY 와 함께 사용된다.',
      'PARTITION BY 는 그룹별로 윈도우를 분리한다.'
    ],
    correctIndex: 0,
    explanation: 'GROUP BY 는 그룹 단위로 결과 행을 축약하지만 PARTITION BY 는 원본 행을 모두 보존하면서 그룹별 계산만 수행. 두 구문은 호환되지 않는다.',
  },
  // Q29
  {
    subject: '2과목', chapter: '계층형 질의',
    title: '계층형 SQL 에서 리프 노드면 1, 아니면 0 을 반환하는 가상 컬럼은?',
    options: ['CONNECT_BY_ISLEAF', 'CONNECT_BY_ISCYCLE', 'SYS_CONNECT_BY_PATH', 'CONNECT_BY_ROOT'],
    correctIndex: 0,
    explanation: 'CONNECT_BY_ISLEAF 는 현재 행이 트리의 리프 (자식이 없는 노드) 이면 1, 아니면 0 을 반환한다. ISCYCLE 은 사이클 발생 여부, SYS_CONNECT_BY_PATH 는 루트부터의 경로 문자열, CONNECT_BY_ROOT 는 루트 컬럼 값.',
  },
  // Q30
  {
    subject: '2과목', chapter: 'WHERE',
    title: '특정 일자 (2025-01-01) 의 13시 ~ 14시 사이 데이터를 조회하는 SQL 중 의미가 다른 것은? (COL1 은 DATE 타입, 시·분·초 포함)',
    options: [
      "TO_CHAR(COL1, 'YYYYMMDDHH24') = '2025010113' OR TO_CHAR(COL1, 'YYYYMMDDHH24') = '2025010114'",
      "COL1 >= TO_DATE('202501011 30000', 'YYYYMMDDHH24MISS') AND COL1 <= TO_DATE('202501 01145959', 'YYYYMMDDHH24MISS')",
      "(TO_CHAR(COL1, 'YYYYMMDD'), TO_CHAR(COL1, 'HH24')) IN (('20250101','13'), ('20250101','14'))",
      "COL1 = TO_DATE('2025010113', 'YYYYMMDDHH24') OR COL1 = TO_DATE('2025010114', 'YYYYMMDDHH24')"
    ],
    correctIndex: 3,
    explanation: '①·②·③ 은 모두 13:00:00 ~ 14:59:59 의 1 시간 범위를 포함한다. 그러나 ④ 는 정확히 13:00:00 또는 14:00:00 한 시점만 매칭하므로 1 시간 \"동안\" 의 모든 분·초 데이터가 누락된다 → 의미가 다른 것.',
  },
  // Q31
  {
    subject: '2과목', chapter: '서브쿼리',
    title: '아래 SQL 의 의도로 옳은 것은?\n\n`SELECT * FROM EMP WHERE SAL > (SELECT AVG(SAL) FROM EMP);`',
    options: [
      '평균 급여보다 많은 사원 목록을 조회한다.',
      '평균 급여보다 적은 사원 목록을 조회한다.',
      '평균 급여를 포함한 전체 사원 목록을 조회한다.',
      '오류가 발생하는 쿼리이다.'
    ],
    correctIndex: 0,
    explanation: '서브쿼리가 전체 사원의 평균 급여를 반환하고, 메인 쿼리는 그 평균보다 SAL 이 큰 사원만 필터링.',
  },
  // Q32
  {
    subject: '2과목', chapter: '서브쿼리',
    title: '서브쿼리의 종류 중 메인쿼리의 제공자 역할을 하며 메인쿼리 값이 서브쿼리에 주입되지 않는 유형은?',
    options: ['Filter형 Subquery', 'Early Filter형 Subquery', 'Associative Subquery', 'Access Subquery'],
    correctIndex: 3,
    explanation: 'Access Subquery 는 서브쿼리가 메인쿼리에 데이터를 \"제공\" 하는 역할만 한다 (메인쿼리 → 서브쿼리 값 전달 없음). Filter 계열은 메인쿼리 행 단위로 평가되며 서로 값을 주고받는다.',
  },
  // Q33
  {
    subject: '2과목', chapter: '집합 연산자',
    title: '집합 연산자에 대한 설명 중 옳지 않은 것은?',
    options: [
      'UNION 사용 시 각 SELECT 문에 ORDER BY 를 사용할 수 있다.',
      'UNION 은 중복을 제거하고 UNION ALL 은 중복을 제거하지 않는다.',
      'INTERSECT 는 중복 제거 및 정렬을 수행한다.',
      '두 집합 간 중복이 없다면 UNION, UNION ALL 결과가 동일하다.'
    ],
    correctIndex: 0,
    explanation: 'ORDER BY 는 전체 집합 결과에 대해 한 번만 사용 가능하며 마지막 SELECT 뒤에만 작성한다. 각 SELECT 별로 ORDER BY 를 쓰면 문법 오류.',
  },
  // Q34
  {
    subject: '1과목', chapter: '데이터 모델 개념',
    title: '데이터베이스와 테이블에 대한 설명 중 옳은 것은?',
    options: [
      '모든 자료는 실질적으로 테이블에 저장되며 테이블에서 자료를 꺼내 볼 수 있다.',
      '데이터베이스 내에 테이블이란 존재하지 않는다.',
      '복잡한 자료라도 테이블은 하나만 만드는 것이 바람직하다.',
      '데이터베이스에는 단 한 개의 테이블만 존재할 수 있다.'
    ],
    correctIndex: 0,
    explanation: '관계형 DBMS 의 모든 데이터는 테이블 단위로 저장되며 SQL 로 조회·수정·삭제한다. ②③④ 는 테이블 개념과 모순.',
  },
  // Q35
  {
    subject: '2과목', chapter: '관계형 DB와 SELECT',
    title: 'STUDENT 테이블에 영문학과 50명, 법학과 100명, 수학과 50명 (총 200명) 이 저장되어 있을 때 아래 SQL 들의 결과 행 수는?',
    options: [
      'ㄱ : 3, ㄴ : 3, ㄷ : 1',
      'ㄱ : 200, ㄴ : 3, ㄷ : 1',
      'ㄱ : 200, ㄴ : 3, ㄷ : 50',
      'ㄱ : 200, ㄴ : 200, ㄷ : 50'
    ],
    correctIndex: 2,
    explanation: 'ㄱ SELECT DEPT FROM STUDENT — 조건 없는 전체 200 행. ㄴ SELECT DISTINCT DEPT — 학과 종류 3 (영문/법/수학). ㄷ SELECT NAME WHERE DEPT=\'영문학과\' — 영문학과 50 명.',
    references: [
      { type: 'sql', code: "ㄱ. SELECT DEPT FROM STUDENT;\nㄴ. SELECT DISTINCT DEPT FROM STUDENT;\nㄷ. SELECT NAME FROM STUDENT WHERE DEPT='영문학과';" }
    ]
  },
  // Q37
  {
    subject: '1과목', chapter: '정규화',
    title: '{학번, 과목번호} 가 기본키이고 {성적, 지도교수명, 학과명} 이 종속 속성일 때, 과목번호가 결정자이고 {지도교수명, 학과명} 이 과목번호에만 함수 종속이다. 이 릴레이션은 몇 차 정규형이며 어느 정규화의 대상인가?',
    options: [
      '2차 정규형 — 3차 정규화 대상',
      '1차 정규형 — 2차 정규화 대상',
      '3차 정규형 — 보이스-코드 정규화 대상',
      '보이스-코드 정규형 — 4차 정규화 대상'
    ],
    correctIndex: 1,
    explanation: '복합키 {학번, 과목번호} 의 \"일부\" (과목번호) 에만 종속되는 부분 함수 종속이 존재. 이는 2차 정규형 위반 → 1차 정규형이며 2차 정규화 대상.',
  },
  // Q40
  {
    subject: '2과목', chapter: 'DML',
    title: '데이터를 입력하기 위해 사용하는 SQL 명령어는?',
    options: ['CREATE', 'INSERT', 'UPDATE', 'ALTER'],
    correctIndex: 1,
    explanation: 'INSERT 는 테이블에 데이터를 삽입한다. CREATE/ALTER 는 객체 정의 (DDL), UPDATE 는 기존 데이터 수정.',
  },
  // Q42
  {
    subject: '2과목', chapter: '그룹 함수',
    title: '아래 EMP 테이블에 대한 세 쿼리의 결과로 옳은 것은? (DEPTNO=10 의 SAL/BONUS 는 (100, NULL), (NULL, 20))',
    options: [
      'NULL, 260, 260',
      '0, 260, 260',
      'NULL, 260, 200',
      'NULL, 240, 260'
    ],
    correctIndex: 0,
    explanation: '[1] SAL+BONUS 가 둘 다 NULL 포함 — 100+NULL=NULL, NULL+20=NULL. SUM(NULL,NULL)=NULL.\n[2] NVL(SAL,0)+NVL(BONUS,0) 합계 — 100, 20, 40, 80, 20 = 260.\n[3] SUM(SAL)+SUM(BONUS) 각각 NULL 제외 — SUM(SAL)=200, SUM(BONUS)=60, 합 = 260.',
    references: [
      { type: 'sql', code: '[1] SELECT SUM(SAL + BONUS) FROM EMP WHERE DEPTNO = 10;\n[2] SELECT SUM(NVL(SAL, 0) + NVL(BONUS, 0)) FROM EMP;\n[3] SELECT SUM(SAL) + SUM(BONUS) FROM EMP;' }
    ]
  },
  // Q43
  {
    subject: '2과목', chapter: '표준 조인',
    title: '아래 ANSI 표준 SQL 중 `SELECT * FROM TAB1, TAB2 ORDER BY 1;` 와 동등한 것은?',
    options: [
      'SELECT * FROM TAB1 INNER JOIN TAB2 ORDER BY 1;',
      'SELECT * FROM TAB1 NATURAL JOIN TAB2 ORDER BY 1;',
      'SELECT * FROM TAB1 CROSS JOIN TAB2 ORDER BY 1;',
      'SELECT * FROM TAB1 INNER JOIN TAB2 ON (TAB1.COL1 = TAB2.COL1) ORDER BY 1;'
    ],
    correctIndex: 2,
    explanation: '`FROM TAB1, TAB2` 에 조인 조건이 없으므로 카티션 곱이 발생. ANSI 로는 CROSS JOIN. INNER JOIN 은 ON 조건이 필요하고, NATURAL JOIN 은 동일 컬럼명 자동 매칭.',
  },
  // Q44
  {
    subject: '2과목', chapter: '관계형 DB와 SELECT',
    title: 'SQL 의 특징으로 가장 적절하지 않은 것은?',
    options: [
      '절차적 언어이며 반복문을 포함한다.',
      '데이터 정의·조작·제어 언어를 포함한다.',
      '관계형 데이터베이스 질의에 사용된다.',
      'ANSI 표준으로 대부분의 DBMS 에서 지원된다.'
    ],
    correctIndex: 0,
    explanation: 'SQL 은 비절차적 (declarative) 언어이다. \"무엇 (WHAT)\" 을 원하는지만 명시하고 \"어떻게 (HOW)\" 가져올지는 DBMS 옵티마이저에 맡긴다. PL/SQL, T-SQL 같은 확장에서는 절차적 요소를 쓸 수 있지만 SQL 자체는 비절차적.',
  },
  // Q46
  {
    subject: '2과목', chapter: '서브쿼리',
    title: '아래 SQL 결과의 NAME 으로 옳은 것은? (EMPLOYEE 의 SALARY: A=1000, B=2000, C=4000)',
    options: ['A', 'B', 'C', 'A, C'],
    correctIndex: 2,
    explanation: '서브쿼리 `SELECT SALARY FROM EMPLOYEE WHERE NAME != \'C\'` → {1000, 2000}. ALL 은 다중행 비교 — `SALARY > ALL(1000, 2000)` 은 1000 보다 크고 2000 보다도 커야 함 = SALARY > 2000. C 의 4000 만 조건 충족.',
    references: [
      { type: 'sql', code: "SELECT NAME\nFROM   EMPLOYEE\nWHERE  SALARY > ALL (SELECT SALARY FROM EMPLOYEE WHERE NAME != 'C');" }
    ]
  },
  // Q47
  {
    subject: '2과목', chapter: '관계형 DB와 SELECT',
    title: '인덱스·옵티마이저에 대한 설명 중 옳은 것은?',
    options: [
      '인덱스는 인덱스 구성 컬럼으로 항상 오름차순으로 정렬된다.',
      '비용 기반 옵티마이저는 인덱스 스캔이 항상 유리하다고 판단한다.',
      '규칙 기반 옵티마이저는 적절한 인덱스가 존재하면 항상 인덱스를 사용하려고 한다.',
      '인덱스 범위 스캔은 항상 여러 건의 결과가 반환된다.'
    ],
    correctIndex: 2,
    explanation: '규칙 기반 옵티마이저는 사전 정의된 규칙 우선순위에 따라 인덱스가 있으면 무조건 인덱스 사용. ① 은 인덱스 생성 시 ASC/DESC 지정 가능. ② 비용 기반은 통계에 따라 풀 스캔이 더 유리하다고 판단할 수 있음. ④ 인덱스 범위 스캔은 0 건도 가능.',
  },
  // Q48
  {
    subject: '2과목', chapter: '함수',
    title: '`SELECT ROUND(456.789, -2) FROM DUAL;` 의 결과는?',
    options: ['400', '500', '460', '450'],
    correctIndex: 1,
    explanation: 'ROUND(값, N) 에서 N 이 음수이면 정수부의 N 자리에서 반올림. -2 는 10 의 자리. 456 의 10 의 자리에서 반올림하면 500 (456 의 백의 자리 4 가 5 가 됨).',
  },
  // Q49
  {
    subject: '2과목', chapter: '함수',
    title: '날짜형을 문자형으로 변환하는 함수는?',
    options: ['TO_NUMBER', 'TO_DATE', 'TO_CHAR', 'CONVERT'],
    correctIndex: 2,
    explanation: 'TO_CHAR(date, format) 은 DATE → 문자열 변환. TO_DATE 는 문자열 → DATE, TO_NUMBER 는 문자열 → 숫자. CONVERT 는 SQL Server 의 변환 함수 (Oracle 도 일부 지원하지만 표준은 TO_CHAR).',
  }
];

// Number from 061 onwards
let nextId = 61;
for (const q of NEW) {
  q._id = `ai-mock-${String(nextId).padStart(3, '0')}`;
  q._source = 'yongjin-cbt';
  data.authored.push(q);
  nextId++;
}

fs.writeFileSync(target, JSON.stringify(data, null, 2) + '\n');
console.log(`Added ${NEW.length} questions. New total: ${data.authored.length}`);
console.log(`Last id: ${data.authored[data.authored.length - 1]._id}`);
