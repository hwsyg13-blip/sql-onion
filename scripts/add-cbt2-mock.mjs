// Append cbt2 unique questions to scripts/authored/cbt-mock.json.
// cbt1 duplicates skipped: cbt2 Q1, Q4, Q6, Q8, Q9, Q17, Q19, Q23, Q39, Q41, Q43, Q44, Q46
// Ambiguous/skipped: Q25, Q32, Q33, Q35, Q36, Q48, Q49

import fs from 'node:fs';

const target = 'scripts/authored/cbt-mock.json';
const data = JSON.parse(fs.readFileSync(target, 'utf-8'));

const NEW = [
  {
    _pdf: 'cbt2', _pdfNumber: 2,
    subject: '2과목', chapter: '서브쿼리',
    title: '다음 SQL 실행 결과로 가장 알맞은 것은?',
    options: ['10, 20', '10, 20, 30', '10, 20, 30, 40', '10, 20, 30, 40, 50'],
    correctIndex: 1,
    explanation: 'ALL 연산자는 서브쿼리 (Subquery) 값 모두가 조건에 만족하면 True 를 반환한다. <= ALL(30, 50) 은 30 보다 작거나 같고 50 보다도 작거나 같다는 의미 (사실상 <= 30). DEPARTMENT_ID 가 30 이하인 값 = 10, 20, 30. NULL 은 비교에서 제외된다.',
    references: [
      { type: 'table', caption: '[HR.EMPLOYEES] 테이블의 DEPARTMENT_ID 컬럼', headers: ['DEPARTMENT_ID'], rows: [['NULL'], ['10'], ['20'], ['30'], ['40'], ['50'], ['220'], ['330']] },
      { type: 'sql', code: "SELECT DISTINCT DEPARTMENT_ID\nFROM   HR.EMPLOYEES A\nWHERE  A.DEPARTMENT_ID <= ALL (30, 50);" }
    ]
  },
  {
    _pdf: 'cbt2', _pdfNumber: 3,
    subject: '2과목', chapter: '관계형 DB와 SELECT',
    title: '다음 중 순수 관계 연산자가 아닌 것은?',
    options: ['SELECT', 'DIVIDE', 'UNION', 'PROJECT'],
    correctIndex: 2,
    explanation: 'UNION 은 일반 집합 연산자이며, 순수 관계 연산자는 SELECT, PROJECT, JOIN, DIVIDE 등이 있다.'
  },
  {
    _pdf: 'cbt2', _pdfNumber: 5,
    subject: '2과목', chapter: 'WHERE',
    title: '다음 SQL 문장 중 COLUMN1 의 값이 널 (NULL) 이 아닌 경우를 찾아내는 문장으로 가장 적절한 것은?',
    options: [
      "SELECT * FROM T_TEST WHERE COLUMN1 IS NOT NULL;",
      "SELECT * FROM T_TEST WHERE COLUMN1 <> NULL;",
      "SELECT * FROM T_TEST WHERE COLUMN1 != NULL;",
      "SELECT * FROM T_TEST WHERE COLUMN1 NOT NULL;"
    ],
    correctIndex: 0,
    explanation: 'SELECT 문에서 NULL 값을 조회하려면 IS NULL 을 사용하고 NULL 이 아닌 것을 조회하려면 IS NOT NULL 을 사용한다. =, <>, != 같은 비교 연산자로는 NULL 을 비교할 수 없다 (UNKNOWN 반환).'
  },
  {
    _pdf: 'cbt2', _pdfNumber: 7,
    subject: '2과목', chapter: '함수',
    title: '다음 SQL 실행 결과로 가장 알맞은 것은?\n\n`SELECT ROUND(78.34, 1) FROM DUAL;`',
    options: ['78', '78.3', '78.4', '79'],
    correctIndex: 1,
    explanation: 'ROUND 함수는 두 번째 인자 N 의 소수점 N+1 번째 자리에서 반올림한다. ROUND(78.34, 1) 은 소수점 둘째 자리 (4) 에서 반올림 → 78.3.'
  },
  {
    _pdf: 'cbt2', _pdfNumber: 10,
    subject: '1과목', chapter: '데이터 모델 개념',
    title: '다음 중 정보시스템을 모델링할 때 세 가지 관점에 해당하지 않는 것은?',
    options: [
      '데이터 관점 (Data) — 업무에서 사용되는 데이터의 구조와 의미',
      '프로세스 관점 (Process) — 업무에서 발생하는 일을 어떻게 처리하는가',
      '네트워크 관점 (Network) — 시스템 간 통신 구조',
      '데이터·프로세스 상관 관점 (Data-Process Map) — 데이터와 프로세스의 관계'
    ],
    correctIndex: 2,
    explanation: '정보시스템 모델링의 세 가지 관점은 데이터 관점, 프로세스 관점, 데이터·프로세스 상관 관점 (Data-Process Map / CRUD 매트릭스) 이다. 네트워크 관점은 표준 분류에 해당하지 않는다.'
  },
  {
    _pdf: 'cbt2', _pdfNumber: 11,
    subject: '2과목', chapter: 'TOP N 쿼리',
    title: 'SALARY 가 높은 상위 2 명을 조회하고자 할 때 올바른 SQL 은? (단, Oracle 버전은 11g 이다.)',
    options: [
      'SELECT * FROM EMP WHERE ROWNUM <= 2 ORDER BY SALARY DESC;',
      'SELECT * FROM (SELECT * FROM EMP ORDER BY SALARY DESC) WHERE ROWNUM <= 2;',
      'SELECT TOP 2 * FROM EMP ORDER BY SALARY DESC;',
      'SELECT * FROM EMP WHERE SALARY >= ALL (SELECT SALARY FROM EMP);'
    ],
    correctIndex: 1,
    explanation: 'Oracle 의 ROWNUM 은 ORDER BY 가 적용되기 전에 부여된다. 먼저 인라인 뷰에서 ORDER BY SALARY DESC 로 정렬한 뒤, 바깥에서 ROWNUM <= 2 로 자르면 정확히 상위 2 명을 얻을 수 있다. ① 은 정렬 전에 ROWNUM 을 평가해 상위 N 보장 안 됨, ③ TOP N 은 SQL Server 문법, ④ ALL 은 의미가 다름.'
  },
  {
    _pdf: 'cbt2', _pdfNumber: 12,
    subject: '1과목', chapter: '정규화',
    title: '다음 중 정규화의 우선 목적을 고르시오.',
    options: [
      '트랜잭션 처리 속도 개선',
      '중복 제거를 통한 정합성 확보',
      '인덱스 자동 최적화',
      '화면 표시 응답 시간 단축'
    ],
    correctIndex: 1,
    explanation: '정규화는 데이터의 중복을 제거하고 삽입·수정·갱신 시 발생할 수 있는 이상 현상 (Anomaly) 을 방지하여 데이터의 무결성을 확보하는 것이 목적이다.'
  },
  {
    _pdf: 'cbt2', _pdfNumber: 13,
    subject: '2과목', chapter: 'DDL',
    title: '다음 중 테이블 명명 규칙에 맞게 작성된 테이블명은?',
    options: ['EMP-100', '100EMP', 'EMP100', '100_EMP'],
    correctIndex: 2,
    explanation: '테이블명은 영문자로 시작해야 하며, 영문자·숫자·언더 스코어·달러기호·샵을 사용할 수 있다. 따라서 \"EMP100\" 만 명명 규칙에 부합한다. 숫자로 시작 (②, ④) 또는 하이픈 사용 (①) 은 불가.'
  },
  {
    _pdf: 'cbt2', _pdfNumber: 14,
    subject: '2과목', chapter: 'DCL·TCL',
    title: '다음 트랜잭션 실행 후 SELECT COUNT(*) FROM TAB; 의 결과는?',
    options: ['1', '2', '3', '4'],
    correctIndex: 2,
    explanation: 'SV1 시점: TAB = [(A,1), (B,2), (C,3)]. UPDATE 후 SV2 시점: TAB = [(A,3), (B,3), (C,3)]. INSERT D + DELETE COL2=3 후 SV3 시점: TAB = [(D,5)] (A·B·C 모두 삭제). ROLLBACK TO SV2 후 COMMIT → TAB = [(A,3), (B,3), (C,3)] = 3 건.',
    references: [
      {
        type: 'sql',
        code: "INSERT INTO TAB VALUES ('A', 1);\nINSERT INTO TAB VALUES ('B', 2);\nINSERT INTO TAB VALUES ('C', 3);\nSAVEPOINT SV1;\nUPDATE TAB SET COL2 = 3 WHERE COL1 IN ('A', 'B');\nSAVEPOINT SV2;\nINSERT INTO TAB VALUES ('D', 5);\nDELETE FROM TAB WHERE COL2 = 3;\nSAVEPOINT SV3;\nROLLBACK TO SV2;\nCOMMIT;\nSELECT COUNT(*) FROM TAB;"
      }
    ]
  },
  {
    _pdf: 'cbt2', _pdfNumber: 15,
    subject: '2과목', chapter: 'GROUP BY·HAVING',
    title: 'SQL 문장에서 집합별로 집계된 데이터에 대한 조회 조건을 제한하기 위해서 사용하는 절은 어느 것인가?',
    options: ['HAVING 절', 'GROUP BY 절', 'WHERE 절', 'FROM 절'],
    correctIndex: 0,
    explanation: '일반적인 SQL 문장에서 조회 행을 제한할 때는 WHERE 절을 사용하지만, 그룹별로 조회될 때 집계 데이터에 대한 제한 조건을 사용하기 위해서는 HAVING 절을 사용한다.'
  },
  {
    _pdf: 'cbt2', _pdfNumber: 16,
    subject: '2과목', chapter: '함수',
    title: '다음 SQL 실행 결과로 가장 알맞은 것은?\n\n`SELECT TRIM(\'   Hello SQL   \') AS RESULT FROM DUAL;`',
    options: ["'   Hello SQL'", "'Hello SQL   '", "'Hello SQL'", "'HelloSQL'"],
    correctIndex: 2,
    explanation: 'TRIM 은 별도의 설정을 하지 않으면 앞뒤 공백을 제거하므로 \'Hello SQL\' 이 출력된다. 문자열 중간의 공백은 제거되지 않는다.'
  },
  {
    _pdf: 'cbt2', _pdfNumber: 18,
    subject: '1과목', chapter: '정규화',
    title: '다음 중 제2 정규형(2NF) 의 조건으로 알맞은 것은?',
    options: [
      '기본키가 하나 이상의 후보 키만 종속하지 않아야 한다.',
      '도메인 동질성을 충족해야 한다.',
      '모든 일반 컬럼이 기본키에 완전 함수 종속해야 한다.',
      '다가 종속을 제거해야 한다.'
    ],
    correctIndex: 2,
    explanation: '제2 정규형 (2NF) 은 부분 함수 종속이 제거된 상태로, 모든 일반 컬럼이 기본키 (복합키 포함) 전체에 완전 함수 종속해야 한다. 다가 종속 제거는 4NF, 결정자 후보키 외 종속 제거는 BCNF 의 조건이다.'
  },
  {
    _pdf: 'cbt2', _pdfNumber: 20,
    subject: '2과목', chapter: '집합 연산자',
    title: '다음 주어진 테이블에 대해서 아래와 같은 SQL 문을 수행하였을 때 반환되는 ROW 값의 수는 무엇인가?',
    options: ['1', '2', '3', '4'],
    correctIndex: 3,
    explanation: 'SELECT * FROM A UNION SELECT * FROM B = {1, 2, 3, 4, 5} (UNION 은 중복 제거). 이어서 MINUS C ({2}) → {1, 3, 4, 5} = 4 행.',
    references: [
      { type: 'table', caption: '[A] 테이블', headers: ['COL1'], rows: [['1'], ['2'], ['3'], ['4']] },
      { type: 'table', caption: '[B] 테이블', headers: ['COL1'], rows: [['4'], ['5']] },
      { type: 'table', caption: '[C] 테이블', headers: ['COL1'], rows: [['2']] },
      { type: 'sql', code: 'SELECT * FROM A\nUNION\nSELECT * FROM B\nMINUS\nSELECT * FROM C;' }
    ]
  },
  {
    _pdf: 'cbt2', _pdfNumber: 21,
    subject: '2과목', chapter: '그룹 함수',
    title: '소계, 중계, 합계처럼 계층적 분류를 포함하고 있는 데이터의 집계에 적합한 GROUP 함수 두 가지는 무엇인가?',
    options: ['ROLLUP, SUM', 'GROUPING, SUM', 'ROLLUP, CUBE', 'CUBE, SUM'],
    correctIndex: 2,
    explanation: 'ROLLUP·CUBE 는 GROUP BY 의 확장된 형태로 병렬 수행이 가능하고 사용하기 쉽기 때문에 효과적이다. 다차원적인 집계가 필요한 경우는 CUBE 를 사용한다.'
  },
  {
    _pdf: 'cbt2', _pdfNumber: 22,
    subject: '2과목', chapter: '서브쿼리',
    title: '다음 과일 테이블에 대한 SQL 문 내의 비교조건을 해석한 것으로 올바르지 않은 것은?',
    options: [
      '"21 NOT IN (SELECT 과일코드 FROM 과일)" 은 참이다.',
      '"19 < ANY (SELECT 과일코드 FROM 과일)" 은 거짓이다.',
      '"15 < ALL (SELECT 과일코드 FROM 과일)" 은 참이다.',
      '"19 = ALL (SELECT 과일코드 FROM 과일)" 은 거짓이다.'
    ],
    correctIndex: 2,
    explanation: 'ALL 은 전부 일치하는 것만 출력하는 것으로 AND 라고 생각하면 되고 ANY 는 OR 로 생각하면 된다. ③ 15 < ALL (10, 15, 19) = 15 < 10 (거짓) ∧ 15 < 15 (거짓) ∧ 15 < 19 (참) = 거짓 → ③ 은 거짓 진술 (옳지 않다).',
    references: [
      { type: 'table', caption: '[과일] 테이블', headers: ['과일코드', '과일명'], rows: [['10', '오렌지'], ['15', '키위'], ['19', '파인애플']] }
    ]
  },
  {
    _pdf: 'cbt2', _pdfNumber: 24,
    subject: '2과목', chapter: '서브쿼리',
    title: '다음 SQL 의 실행 결과로 출력되는 행 수는?',
    options: ['1', '2', '3', '0'],
    correctIndex: 0,
    explanation: 'EXISTS 는 서브쿼리의 결과 존재 여부만 판단. EMP_ID=1: SALARY 에 (1, 3000) 존재 + AMOUNT NOT NULL → 포함. EMP_ID=2: SALARY 에 (2, NULL) 존재 + AMOUNT IS NULL → 제외. EMP_ID=3: SALARY 에 없음 → 제외. 결과 1 행.',
    references: [
      { type: 'table', caption: '[EMPLOYEE] 테이블', headers: ['EMP_ID', 'NAME'], rows: [['1', 'Kim'], ['2', 'Lee'], ['3', 'Park']] },
      { type: 'table', caption: '[SALARY] 테이블', headers: ['EMP_ID', 'AMOUNT'], rows: [['1', '3000'], ['2', 'NULL']] },
      { type: 'sql', code: "SELECT *\nFROM   EMPLOYEE E\nWHERE  EXISTS (\n  SELECT 1\n  FROM   SALARY S\n  WHERE  S.EMP_ID = E.EMP_ID\n  AND    S.AMOUNT IS NOT NULL\n);" }
    ]
  },
  {
    _pdf: 'cbt2', _pdfNumber: 26,
    subject: '1과목', chapter: '속성',
    title: '다음 설명에 해당하는 데이터 모델의 구성 요소는?\n\n속성에 대한 값의 범위, 데이터 타입, 길이 등 제약사항을 기술할 수 있다.',
    options: ['시스템 카탈로그 (System Catalog)', '용어 사전 (Data Dictionary)', '인스턴스 (Instance)', '도메인 (Domain)'],
    correctIndex: 3,
    explanation: '도메인 (Domain) 은 속성에 대한 값의 범위, 데이터 타입, 길이 등 제약사항을 정의한 것이다.'
  },
  {
    _pdf: 'cbt2', _pdfNumber: 27,
    subject: '2과목', chapter: 'GROUP BY·HAVING',
    title: '다음 SQL 실행 결과로 가장 알맞은 것은?',
    options: ['U1 : 200, U2 : 150', 'U1 : 300, U2 : 150', 'U1 : 100, U2 : 350', 'U1 : 150, U2 : 200'],
    correctIndex: 1,
    explanation: 'GROUP BY USER_ID 로 사용자별 SUM(AMOUNT) 을 계산. U1 = 100 + 200 = 300, U2 = 150.',
    references: [
      { type: 'table', caption: '[TB_PURCHASE] 테이블', headers: ['USER_ID', 'AMOUNT'], rows: [['U1', '100'], ['U2', '150'], ['U1', '200']] },
      { type: 'sql', code: 'SELECT USER_ID, SUM(AMOUNT)\nFROM   TB_PURCHASE\nGROUP BY USER_ID;' }
    ]
  },
  {
    _pdf: 'cbt2', _pdfNumber: 28,
    subject: '1과목', chapter: '데이터 모델 개념',
    title: '다음 중 분산 데이터베이스의 특징으로 가장 부적절한 것은?',
    options: [
      '지역 자치성, 점증적 시스템 용량 확장',
      '빠른 응답 속도와 통신 비용 절감',
      '오류의 잠재성 증대',
      '처리 비용의 감소'
    ],
    correctIndex: 3,
    explanation: '분산 데이터베이스는 네트워크에 떨어져 있는 데이터베이스를 구축하고 관리해야 하기 때문에 처리 비용이 증가한다. ①·②·③ 은 분산 데이터베이스의 일반 특징이다.'
  },
  {
    _pdf: 'cbt2', _pdfNumber: 30,
    subject: '2과목', chapter: 'DML',
    title: '다음 EMP 테이블에서 부서가 10 번인 사원들만 선택하여 EMP_TEMP 테이블에 삽입하는 쿼리는? (단, EMP_TEMP 와 EMP 테이블의 컬럼 개수, 자료형, 순서는 모두 같다.)',
    options: [
      'INSERT INTO EMP_TEMP SELECT * FROM EMP;',
      'INSERT INTO EMP_TEMP VALUES (SELECT * FROM EMP WHERE DEPTNO = 10);',
      'INSERT INTO EMP_TEMP SELECT * FROM EMP WHERE DEPTNO = 10;',
      'INSERT * INTO EMP_TEMP FROM EMP WHERE DEPTNO = 10;'
    ],
    correctIndex: 2,
    explanation: 'INSERT INTO ... SELECT 구문을 사용하면 한 테이블에서 조건에 맞는 여러 행을 다른 테이블에 삽입할 수 있다. ① 은 모든 직원의 정보를 EMP_TEMP 에 삽입하므로 오답.'
  },
  {
    _pdf: 'cbt2', _pdfNumber: 31,
    subject: '2과목', chapter: 'WHERE',
    title: '다음 SQL 문에 대한 설명으로 올바른 것은?\n\n`SELECT * FROM SQLD_33 WHERE EMP_NAME LIKE \'A%\';`',
    options: [
      '테이블에 EMP_NAME 이 A 또는 a 로 시작하는 모든 ROW 를 조회한다.',
      '테이블에 EMP_NAME 이 A 로 시작하는 모든 ROW 를 조회한다.',
      '테이블에 EMP_NAME 이 A 로 끝나는 모든 ROW 를 조회한다.',
      '테이블에 EMP_NAME 이 A 또는 a 로 끝나는 모든 ROW 를 조회한다.'
    ],
    correctIndex: 1,
    explanation: 'LIKE \'A%\' 패턴은 \"A 로 시작하는 임의 길이 문자열\" 을 의미한다. Oracle 의 LIKE 는 기본적으로 대소문자 구분이므로 A 로 시작하는 행만 매칭된다.'
  },
  {
    _pdf: 'cbt2', _pdfNumber: 32,
    subject: '2과목', chapter: '윈도우 함수',
    title: '다음의 SQL 은 파티션별 윈도우의 전체 건수에서 현재 행보다 작거나 같은 건수에 대해서 누적 백분율을 구하는 SQL 문이다. 빈칸에 들어갈 함수로 알맞은 것은?',
    options: ['NTILE()', 'LEAD()', 'LAG()', 'CUME_DIST()'],
    correctIndex: 3,
    explanation: 'CUME_DIST 함수는 파티션별 윈도우의 전체 건수에서 현재 행보다 작거나 같은 건수에 대한 상대적 누적 분포도 (cumulative distribution) 값을 반환한다. NTILE 은 N 그룹 분배, LEAD/LAG 는 인접 행 값.',
    references: [
      { type: 'sql', code: 'SELECT DEPTNO, ENAME, SAL,\n       (   ) OVER (PARTITION BY DEPTNO ORDER BY SAL DESC) AS PCT\nFROM   EMP;' }
    ]
  },
  {
    _pdf: 'cbt2', _pdfNumber: 35,
    subject: '2과목', chapter: '그룹 함수',
    title: '\'TEST\' 테이블에 있는 NUM2 컬럼의 총 행은 10 개이고 2 개의 NULL 값이 있다. 다음의 SQL 문을 실행할 경우 결과값은?\n\nㄱ : `SELECT COUNT(*) FROM TEST;`\nㄴ : `SELECT COUNT(NUM2) FROM TEST;`',
    options: ['ㄱ - 10, ㄴ - 10', 'ㄱ - 10, ㄴ - 8', 'ㄱ - 8, ㄴ - 10', 'ㄱ - 8, ㄴ - 8'],
    correctIndex: 1,
    explanation: 'COUNT(*) 는 NULL 포함 모든 행을 세므로 10. COUNT(컬럼명) 은 NULL 을 제외하고 세므로 10 - 2 = 8.'
  },
  {
    _pdf: 'cbt2', _pdfNumber: 38,
    subject: '2과목', chapter: 'DML',
    title: '다음 중 DML (데이터 조작어) 에 해당하는 SQL 은?',
    options: ['CREATE TABLE', 'INSERT INTO EMP VALUES (...)', 'GRANT SELECT ON EMP TO USER1', 'ROLLBACK'],
    correctIndex: 1,
    explanation: 'INSERT 는 DML (데이터 조작어), CREATE 는 DDL (데이터 정의어), GRANT 는 DCL (데이터 제어어), ROLLBACK 은 TCL (트랜잭션 제어어) 이다.'
  },
  {
    _pdf: 'cbt2', _pdfNumber: 40,
    subject: '2과목', chapter: 'DCL·TCL',
    title: 'COMMIT 과 ROLLBACK 의 장점으로 적합하지 않은 것은 무엇인가?',
    options: [
      '데이터 무결성을 보장한다.',
      '영구적인 변경을 할 수 없게 한다.',
      '영구적인 변경을 하기 전에 데이터의 변경 사항 확인이 가능하다.',
      '논리적으로 연관된 작업을 그룹핑하여 처리 가능하다.'
    ],
    correctIndex: 1,
    explanation: 'COMMIT/ROLLBACK 의 장점은 — 데이터 무결성 보장, 영구적인 변경을 하기 전에 데이터의 변경 사항 확인 가능, 논리적으로 연관된 작업을 그룹핑하여 처리 가능. ② 는 정반대 진술 (TCL 은 영구적 변경을 가능하게 한다).'
  },
  {
    _pdf: 'cbt2', _pdfNumber: 42,
    subject: '2과목', chapter: '정규 표현식',
    title: '다음 중 USER_ID 가 대문자 알파벳으로 시작하고 숫자로 끝나는 사용자만 조회하는 조건으로 알맞은 것은?',
    options: [
      "WHERE REGEXP_LIKE(USER_ID, '^[A-Z].*[0-9]$')",
      "WHERE USER_ID LIKE '[A-Z]%[0-9]'",
      "WHERE USER_ID LIKE '[A-Z]%[0-9]$'",
      "WHERE REGEXP_LIKE(USER_ID, '[0-9].*[A-Z]$')"
    ],
    correctIndex: 0,
    explanation: '정규 표현식에서 ^ 는 시작, $ 는 끝을 의미한다. \'^[A-Z].*[0-9]$\' 는 \"대문자 알파벳으로 시작하고, 숫자로 끝나는 문자열\" 을 의미한다. Oracle 에서는 복잡한 문자열 패턴 매칭이 필요한 경우 REGEXP_LIKE 를 사용해야 하며, LIKE 는 단순한 와일드카드 (%, _) 만 지원한다.',
    references: [
      { type: 'table', caption: '[TB_USER] 테이블', headers: ['USER_ID'], rows: [['A123'], ['1ABC'], ['B5'], ['C_99'], ['DEND'], ['Z8']] }
    ]
  },
  {
    _pdf: 'cbt2', _pdfNumber: 45,
    subject: '2과목', chapter: '그룹 함수',
    title: '다음 SQL 실행 결과로 가장 알맞은 것은? (단, TAB 테이블은 5 건의 데이터가 존재한다.)\n\n`SELECT COUNT(NULL), COUNT(*), COUNT(1) FROM TAB;`',
    options: ['0, 5, 5', '5, 5, 5', '0, 5, 1', '1, 1, 1'],
    correctIndex: 0,
    explanation: 'COUNT(*) 는 NULL 여부와 무관하게 모든 행 수를 계산하므로 5. COUNT(1) 은 모든 행에 1 (NULL 아님) 을 부여하므로 5. COUNT(NULL) 은 NULL 무시 → 0.'
  },
  {
    _pdf: 'cbt2', _pdfNumber: 47,
    subject: '2과목', chapter: '그룹 함수',
    title: '아래 SQL 에서 출력되는 ROWS 의 개수를 구하시오.',
    options: ['10건', '14건', '18건', '20건'],
    correctIndex: 2,
    explanation: 'EMP·DEPT 를 DEPTNO 로 조인 후 GROUP BY CUBE(DNAME, JOB) 을 실행. CUBE 는 (DNAME, JOB), (DNAME), (JOB), () 모든 조합 산출. 데이터 기준 (DNAME, JOB) 9 행 + (DNAME) 3 행 + (JOB) 5 행 + () 1 행 = 18 행.',
    references: [
      {
        type: 'table', caption: '[EMP TABLE]',
        headers: ['DEPTNO', 'JOB', 'SAL'],
        rows: [
          ['20', 'CLERK', '800'], ['30', 'SALESMAN', '1600'], ['30', 'SALESMAN', '1250'],
          ['20', 'MANAGER', '2975'], ['30', 'SALESMAN', '1250'], ['30', 'MANAGER', '2850'],
          ['10', 'MANAGER', '2450'], ['20', 'ANALYST', '3000'], ['10', 'PRESIDENT', '5000'],
          ['30', 'SALESMAN', '1500'], ['20', 'CLERK', '1100'], ['30', 'CLERK', '950'],
          ['20', 'ANALYST', '3000'], ['10', 'CLERK', '1300']
        ]
      },
      {
        type: 'table', caption: '[DEPT TABLE]',
        headers: ['DEPTNO', 'DNAME'],
        rows: [['10', 'ACCOUNTING'], ['20', 'RESEARCH'], ['30', 'SALES'], ['40', 'OPERATIONS']]
      },
      {
        type: 'sql',
        code: 'SELECT DNAME, JOB, COUNT(*) "Total Emp", SUM(SAL) "Total Sal"\nFROM   SCOTT.EMP A, SCOTT.DEPT B\nWHERE  A.DEPTNO = B.DEPTNO\nGROUP BY CUBE(DNAME, JOB);'
      }
    ]
  },
  {
    _pdf: 'cbt2', _pdfNumber: 50,
    subject: '1과목', chapter: '데이터 모델 개념',
    title: '다음 설명에 해당하는 데이터 모델링은?\n\n• 추상화 수준이 높고 업무 중심적이며 포괄적인 수준의 모델링을 진행한다.\n• 전사적 데이터 모델링 또는 EA 수립 시 많이 이용된다.',
    options: ['물리적 데이터 모델링', '논리적 데이터 모델링', '개념적 데이터 모델링', '추상적 데이터 모델링'],
    correctIndex: 2,
    explanation: '개념적 데이터 모델링 — 전사적 관점에서 기업의 데이터를 모델링한다. 추상화 수준이 가장 높은 모델링이다. 계층형·네트워크·관계형 모델에 관계없이 업무 측면에서 모델링한다.'
  }
];

// Assign sequential cbt-NNN IDs continuing from cbt-050
let nextId = data.authored.length + 1;
for (const q of NEW) {
  q._id = `cbt-${String(nextId).padStart(3, '0')}`;
  data.authored.push(q);
  nextId++;
}

fs.writeFileSync(target, JSON.stringify(data, null, 2) + '\n');
console.log(`Added ${NEW.length} new cbt2 questions. Total: ${data.authored.length}`);
console.log(`Range: cbt-051 ~ cbt-${String(data.authored.length).padStart(3, '0')}`);
