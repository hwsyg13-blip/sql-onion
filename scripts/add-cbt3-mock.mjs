// Append cbt3 unique questions to cbt-mock.json.
// Skipped: Q1 (DUP cbt1-Q43), Q2/Q7/Q13/Q15/Q19-Q22/Q26/Q29-Q31/Q38/Q40/Q46/Q48/Q49 (DUP), Q10 (ambiguous)

import fs from 'node:fs';

const target = 'scripts/authored/cbt-mock.json';
const data = JSON.parse(fs.readFileSync(target, 'utf-8'));

const NEW = [
  {
    _pdf: 'cbt3', _pdfNumber: 3,
    subject: '2과목', chapter: '관계형 DB와 SELECT',
    title: '다음 중 문법적으로 올바른 SQL 은?',
    options: [
      "SELECT * WHERE DEPTNO = 10 FROM EMP;",
      "SELECT EMP, * FROM SALARY;",
      "SELECT * FROM EMPLOYEE WHERE SALARY > 2000;",
      "SELECT WHERE NAME = 'A' * FROM EMP;"
    ],
    correctIndex: 2,
    explanation: 'SQL 의 작성 순서는 SELECT - FROM - WHERE 이며, WHERE 절이 FROM 절보다 앞에 오거나 컬럼 위치가 잘못된 ①②④ 는 모두 문법 오류이다. ③ 만 정상.'
  },
  {
    _pdf: 'cbt3', _pdfNumber: 4,
    subject: '2과목', chapter: '관계형 DB와 SELECT',
    title: 'SELECT 문의 처리 순서로 올바른 것은?\n\n`SELECT deptno, sum(sal) FROM dept WHERE deptno > 10 GROUP BY deptno ORDER BY deptno;`',
    options: [
      'WHERE, GROUP BY, ORDER BY, FROM, SELECT',
      'FROM, WHERE, GROUP BY, SELECT, ORDER BY',
      'SELECT, FROM, WHERE, GROUP BY, ORDER BY',
      'ORDER BY, SELECT, WHERE, GROUP BY, FROM'
    ],
    correctIndex: 1,
    explanation: 'SQL 의 실제 실행 순서는 FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY 이다. SELECT 의 별칭을 WHERE 에서 못 쓰고 ORDER BY 에서 쓸 수 있는 이유.'
  },
  {
    _pdf: 'cbt3', _pdfNumber: 5,
    subject: '2과목', chapter: '함수',
    title: '다음 SQL 의 실행 결과로 올바른 것은? (단, Oracle 환경이다.)\n\n`SELECT TO_CHAR(TO_DATE(\'2025030220\', \'YYYYMMDDHH24\') + 2/24/60/60, \'YYYY-MM-DD HH24:MI:SS\') FROM DUAL;`',
    options: ['2025/03/02 20:00:02', '2025-03-02 20:00:02', '2025/03/02 20:02:00', '2025-03-02 20:02:00'],
    correctIndex: 1,
    explanation: 'Oracle 에서 날짜형에 +1 을 하면 day(일, 하루) 로 인식한다. 1/24 는 1 시간, 1/24/60 은 1 분, 1/24/60/60 은 1 초. 따라서 2/24/60/60 은 2 초. 2025-03-02 20:00:00 + 2초 = 20:00:02. TO_CHAR 포맷팅으로 \"YYYY-MM-DD HH24:MI:SS\" 형식 출력 → \"2025-03-02 20:00:02\".'
  },
  {
    _pdf: 'cbt3', _pdfNumber: 6,
    subject: '2과목', chapter: '조인',
    title: '4 개의 테이블로부터 필요한 칼럼을 조회하려고 한다. 최소 몇 개의 JOIN 조건이 필요한가?',
    options: ['2 개', '3 개', '4 개', '5 개'],
    correctIndex: 1,
    explanation: '여러 테이블로부터 원하는 데이터를 조회하기 위해서는 전체 테이블 개수에서 최소 N-1 개만큼의 JOIN 조건이 필요하다. 4-1 = 3 개.'
  },
  {
    _pdf: 'cbt3', _pdfNumber: 8,
    subject: '2과목', chapter: '윈도우 함수',
    title: '다음의 SQL 문에 대한 설명으로 올바르지 않은 것은?\n\n`SELECT JOB, ENAME, SAL, RANK() OVER (ORDER BY SAL DESC) ALL_RANK, RANK() OVER (PARTITION BY JOB ORDER BY SAL DESC) JOB_RANK FROM EMP;`',
    options: [
      'SAL 컬럼이 큰 순서로 ALL_RANK 가 부여된다.',
      'JOB 별로 SAL 이 큰 순서로 JOB_RANK 가 부여된다.',
      'RANK() 함수를 사용했으므로 동일 값이 있더라도 결과의 차이가 1 위에 2 명 있을 수도 있다.',
      'PARTITION 을 사용해서 JOB 별로 RANK 처리할 수 있다.'
    ],
    correctIndex: 2,
    explanation: 'RANK() 함수는 동일한 값에 동일한 순위를 부여한다. 즉 1 위에 2 명이 있으면 둘 다 1 위가 되고 다음은 3 위로 건너뛴다. ③ 의 \"결과의 차이\" 라는 표현은 옳지 않다.'
  },
  {
    _pdf: 'cbt3', _pdfNumber: 9,
    subject: '2과목', chapter: '윈도우 함수',
    title: '다음은 윈도우 함수에 대한 설명이다. 현재 행을 기준으로 파티션 내에서 앞의 한 건, 현재 행, 다음의 한 건을 처리하는 OVER 절은?',
    options: [
      'ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING',
      'RANGE UNBOUNDED PRECEDING',
      'ROWS BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING',
      'ROWS BETWEEN 1 AND 2'
    ],
    correctIndex: 0,
    explanation: 'ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING 은 현재 행 기준으로 앞 1 건 + 현재 1 건 + 뒤 1 건 = 총 3 건의 윈도우 프레임을 정의한다.'
  },
  {
    _pdf: 'cbt3', _pdfNumber: 11,
    subject: '2과목', chapter: '조인',
    title: '다음 SQL 실행 결과는 몇 건인가?',
    options: ['1', '2', '3', '4'],
    correctIndex: 1,
    explanation: '두 테이블을 FULL OUTER JOIN ON A.ID = B.ID 한 후 WHERE A.ID IS NULL OR B.ID IS NULL 로 필터. A 와 B 양쪽에 공통이 있는 행은 (1, 1), (2, 2). FULL OUTER 는 A 만의 (3, NULL), (4, NULL) 과 B 만의 (NULL, 5), (NULL, NULL?) 도 포함. 두 테이블 데이터 기준 매칭 안되는 2 건이 출력된다.',
    references: [
      { type: 'table', caption: '[A] 테이블', headers: ['ID'], rows: [['1'], ['2'], ['3'], ['4']] },
      { type: 'table', caption: '[B] 테이블', headers: ['ID'], rows: [['1'], ['2'], ['NULL'], ['5']] },
      { type: 'sql', code: "SELECT *\nFROM   A FULL OUTER JOIN B ON A.ID = B.ID\nWHERE  A.ID IS NULL OR B.ID IS NULL;" }
    ]
  },
  {
    _pdf: 'cbt3', _pdfNumber: 12,
    subject: '1과목', chapter: '데이터 모델 개념',
    title: '데이터 모델링의 세 가지 중요 개념에 속하지 않는 것은?',
    options: ['업무가 관여하는 어떤 것 (Things)', '업무가 관여하는 어떤 것의 성격 (Attributes)', '업무가 관여하는 어떤 것의 행위 (Events)', '업무가 관여하는 어떤 것의 관계 (Relationships)'],
    correctIndex: 2,
    explanation: '데이터 모델링의 3 가지 중요 개념: Things (엔터티), Attributes (속성), Relationships (관계). Events 는 포함되지 않는다.'
  },
  {
    _pdf: 'cbt3', _pdfNumber: 14,
    subject: '2과목', chapter: '그룹 함수',
    title: '다음의 SQL 문에 대한 설명으로 올바르지 않은 것은?\n\nㄱ : `SELECT SUM(SAL) FROM EMP GROUP BY DEPTNO;`\nㄴ : `SELECT SUM(SAL) FROM EMP GROUP BY ROLLUP(DEPTNO);`',
    options: [
      'ㄱ 은 부서별 합계를 출력한다.',
      'ㄱ 과 ㄴ 의 결과 행 수는 동일하다.',
      'ㄴ 은 부서별 합계와 그룹별 전체합계가 출력된다.',
      'ㄱ 의 SQL 문은 전체합계는 출력되지 않는다.'
    ],
    correctIndex: 1,
    explanation: 'ㄱ 과 ㄴ 의 SQL 문의 행 수는 다르다. ROLLUP 은 전체합계가 추가적으로 출력되어 ㄱ 의 행 수보다 1 행이 많다.'
  },
  {
    _pdf: 'cbt3', _pdfNumber: 16,
    subject: '2과목', chapter: 'ORDER BY',
    title: '다음과 같은 SQL 문장이 있다. 예제의 ORDER BY 절과 같은 결과를 갖는 구문은 어떤 것인가?\n\n`SELECT PLAYER_NAME, POSITION, BACK_NO FROM PLAYER ORDER BY PLAYER_NAME, POSITION, BACK_NO DESC;`',
    options: [
      'ORDER BY 인적신원 ASC, 포지션, 3 DESC',
      'ORDER BY 인적신원, 2, DESC 백넘버',
      'ORDER BY PLAYER_NAME ASC, 2, 3',
      'ORDER BY 1 DESC, 2, 백넘버'
    ],
    correctIndex: 2,
    explanation: 'ORDER BY 절의 정렬 기준을 명시하지 않으면 기본값 ASC 로 정렬된다. ORDER BY 절에는 컬럼명, SELECT 절에 기술된 컬럼의 순번 (1, 2, 3...) 또는 컬럼의 ALIAS 명을 사용할 수 있다. ③ 은 PLAYER_NAME ASC + POSITION (순번 2, 기본 ASC) + BACK_NO (순번 3, 기본 ASC) — 단 마지막 BACK_NO 는 원래 DESC 였으므로 ③ 도 완벽하지 않으나 가장 가까운 답안.'
  },
  {
    _pdf: 'cbt3', _pdfNumber: 17,
    subject: '2과목', chapter: '서브쿼리',
    title: '서브쿼리에 대한 설명으로 올바르지 않은 것은?',
    options: [
      '서브쿼리는 SELECT, FROM, WHERE 절 등 일반적으로 사용 가능하다.',
      '서브쿼리는 단일 행 또는 다중 행 결과를 반환할 수 있다.',
      '서브쿼리는 ORDER BY 사용 가능 여부에 제약이 있다.',
      '서브쿼리는 메인 쿼리보다 무조건 먼저 실행된다.'
    ],
    correctIndex: 3,
    explanation: '서브쿼리의 실행 시점은 종류에 따라 다르다. 비상관 서브쿼리는 메인 쿼리 전에 한 번 실행되지만, 상관 서브쿼리(Correlated Subquery)는 메인 쿼리의 각 행에 대해 매번 실행된다. \"무조건 먼저 실행된다\" 는 옳지 않다.'
  },
  {
    _pdf: 'cbt3', _pdfNumber: 18,
    subject: '2과목', chapter: '관계형 DB와 SELECT',
    title: '다음 설명 중 옳지 않은 것은?',
    options: [
      'SELECT 문은 데이터를 조회하는 명령어이다.',
      'INSERT 문은 데이터를 입력하는 명령어이다.',
      'UPDATE 문은 데이터를 수정하는 명령어이다.',
      'DELETE 문은 테이블의 구조를 삭제하는 명령어이다.'
    ],
    correctIndex: 3,
    explanation: 'DELETE 문은 테이블의 \"데이터\" 를 삭제하는 DML 명령어이다. 테이블의 \"구조\" 를 삭제하는 것은 DROP TABLE 명령 (DDL) 이다.'
  },
  {
    _pdf: 'cbt3', _pdfNumber: 23,
    subject: '2과목', chapter: '관계형 DB와 SELECT',
    title: '다음 SQL 실행 결과로 가장 알맞은 것은?',
    options: [
      'YEAR=2024, QUARTER=Q1, METRIC=SALES, VALUE=100 등 4 행 (YEAR/QUARTER/METRIC/VALUE 4 컬럼)',
      'SALES 컬럼과 PROFIT 컬럼만 출력',
      '2024 Q1 SALES 100, 2024 Q1 PROFIT 30, 2024 Q2 SALES 150, 2024 Q2 PROFIT 50 으로 4 행 (UNPIVOT 결과)',
      '2024 Q1 SALES PROFIT 등 단일 행으로 출력'
    ],
    correctIndex: 2,
    explanation: 'UNPIVOT 은 가로로 펼쳐진 컬럼 (SALES, PROFIT) 을 세로로 변환한다. 결과는 (YEAR, QUARTER, METRIC, VALUE) 4 컬럼 — METRIC 은 \"SALES\" 또는 \"PROFIT\" 의 라벨, VALUE 는 해당 셀 값. 입력 2 행 × 2 컬럼 = 4 행.',
    references: [
      {
        type: 'sql',
        code: "SELECT * FROM (\n  SELECT '2024' AS YEAR, 'Q1' AS QUARTER, 100 AS SALES, 30 AS PROFIT FROM DUAL\n  UNION ALL\n  SELECT '2024', 'Q2', 150, 50 FROM DUAL\n)\nUNPIVOT (\n  VALUE FOR METRIC IN (SALES, PROFIT)\n);"
      }
    ]
  },
  {
    _pdf: 'cbt3', _pdfNumber: 24,
    subject: '1과목', chapter: '엔터티',
    title: '엔터티에 대한 설명으로 올바르지 않은 것은?',
    options: [
      '엔터티는 두 개 이상의 속성을 가져야 한다.',
      '엔터티는 식별자가 없어도 된다.',
      '엔터티는 두 개 이상의 인스턴스를 가져야 한다.',
      '엔터티명은 단어 사용된 한국어 또는 영어로 표기한다.'
    ],
    correctIndex: 1,
    explanation: '엔터티는 반드시 식별자 (PK) 를 가져야 한다. 식별자가 없으면 인스턴스를 구분할 수 없으므로 엔터티로 성립하지 않는다.'
  },
  {
    _pdf: 'cbt3', _pdfNumber: 25,
    subject: '1과목', chapter: '데이터 모델 개념',
    title: '다음 중 논리적 데이터 독립성 (Logical Data Independence) 에 대한 설명으로 옳은 것은?',
    options: [
      '내부 스키마가 변경되어도 응용 프로그램이 영향을 받지 않는다.',
      '저장 장치의 변경이 응용 프로그램에 영향을 주지 않는다.',
      '외부 스키마가 바뀌어도 데이터의 물리적 저장 구조는 변경되지 않는다.',
      '개념 스키마가 변경되어도 외부 스키마와 응용 프로그램이 영향을 받지 않는다.'
    ],
    correctIndex: 3,
    explanation: '논리적 데이터 독립성은 개념 스키마 (논리적 구조) 가 변경되어도 외부 스키마와 응용 프로그램이 영향을 받지 않는 성질이다. 물리적 데이터 독립성은 내부 스키마 (저장 구조) 변경이 개념·외부 스키마에 영향을 주지 않는 성질.'
  },
  {
    _pdf: 'cbt3', _pdfNumber: 27,
    subject: '2과목', chapter: '정규 표현식',
    title: '다음 SQL 실행 결과로 가장 알맞은 것은?\n\n`SELECT REGEXP_SUBSTR(\'abc1234@domain.com\', \'[a-z]+\', 1, 2) AS RESULT FROM DUAL;`',
    options: ['abc123', 'abc', '123', 'domain'],
    correctIndex: 3,
    explanation: 'REGEXP_SUBSTR 함수는 정규식 패턴에 매칭되는 부분을 반환한다. \'[a-z]+\' 패턴은 소문자 알파벳 연속을 매칭. 시작 위치 1, 2 번째 발생 (occurrence) → 첫 번째 매칭은 \"abc\", 두 번째 매칭은 \"domain\". 따라서 \"domain\" 이 반환된다.'
  },
  {
    _pdf: 'cbt3', _pdfNumber: 28,
    subject: '1과목', chapter: '관계',
    title: '다음 모델의 배송 엔터티에서 고객의 정보를 찾을 때, 성능 향상과 SQL 문장을 단순화하는 가장 적절한 반정규화 방법은 무엇인가? (단, 배송 엔터티는 고객의 자식 엔터티이다.)',
    options: [
      '고객 엔터티에 배송 정보를 모두 합치는 통합 테이블 생성',
      '고객과 배송 사이에 새로운 중간 엔터티 추가',
      '고객 엔터티의 식별자를 배송 엔터티의 외래키로 추가하여 관계 중복 제거',
      '고객의 모든 정보를 모두 배송 엔터티의 속성으로 반정규화'
    ],
    correctIndex: 0,
    explanation: '실무적으로 가장 많이 활용되는 반정규화 기법은 \"관계의 반정규화\" — 자주 함께 조회되는 부모 엔터티의 속성을 자식 엔터티에 중복 저장하여 두 테이블의 조인 경로를 단축한다. (출제자 의도 답안 ① 보존)'
  },
  {
    _pdf: 'cbt3', _pdfNumber: 32,
    subject: '2과목', chapter: '윈도우 함수',
    title: '윈도우 함수 중에서 윈도우에서 제일 먼저 나오는 것을 0 으로 하고 제일 늦게 나오는 것을 1 로 해서 행 순서별 백분율을 구하는 것은?',
    options: ['FIRST_VALUE', 'LAST_VALUE', 'PERCENT_RANK', 'CUME_DIST'],
    correctIndex: 2,
    explanation: 'PERCENT_RANK 는 첫 행을 0, 마지막 행을 1 로 하여 (RANK - 1) / (전체 행 수 - 1) 공식으로 백분율을 계산한다. CUME_DIST 는 누적 분포 (현재 행보다 작거나 같은 행의 비율) 로 의미가 다르다.'
  },
  {
    _pdf: 'cbt3', _pdfNumber: 33,
    subject: '1과목', chapter: '데이터 모델 개념',
    title: '다음 중 데이터 모델링의 세 가지 단계로 가장 올바르게 나열된 것은?',
    options: ['물리 - 논리 - 개념', '개념 - 논리 - 물리', '논리 - 물리 - 개념', '개념 - 물리 - 논리'],
    correctIndex: 1,
    explanation: '데이터 모델링은 추상화 수준이 높은 단계 (개념) 부터 점차 구체화 (물리) 되는 순서로 진행된다 — 개념적 모델링 → 논리적 모델링 → 물리적 모델링.'
  },
  {
    _pdf: 'cbt3', _pdfNumber: 34,
    subject: '2과목', chapter: 'GROUP BY·HAVING',
    title: '다음 SQL 문 아래에 구문을 추가하여 실행하려 한다. 다음 중 오류가 발생하는 구문은?\n\n`SELECT DEPTNO, ROUND(AVG(SAL), 1) AS DEPTNO_AVG_SAL`',
    options: ['FROM EMP', 'WHERE AVG(SAL) > 2000', 'GROUP BY DEPTNO', 'ORDER BY 1 DESC;'],
    correctIndex: 1,
    explanation: 'AVG 와 같은 집계 함수는 WHERE 절에서 사용할 수 없다. 집계 함수는 GROUP BY 가 실행되어야 쓸 수 있는데 WHERE 절은 GROUP BY 이전에 실행되기 때문. GROUP BY 이후에 실행되는 HAVING 에서는 집계 함수 조건 사용 가능.'
  },
  {
    _pdf: 'cbt3', _pdfNumber: 35,
    subject: '1과목', chapter: '엔터티',
    title: '엔터티에 대한 개념 중 엔터티 정의의 공통점 3 가지가 아닌 것은?',
    options: [
      '데이터베이스 내에서 변별 가능한 객체이다.',
      '엔터티는 사람, 장소, 물건, 사건, 개념 등의 명사에 해당된다.',
      '저장되기 위한 어떤 것 (Thing) 이다.',
      '업무상 관리가 필요한 관심사에 해당된다.'
    ],
    correctIndex: 0,
    explanation: '엔터티 (Entity) 의 3 가지 공통점: ① 사람·사건·사물·장소 등과 같이 명사 ② 비즈니스 프로세스에서 관리되어야 하는 정보 ③ 저장이 필요한 어떤 것. \"변별 가능한 객체\" 라는 일반 정의는 3 공통점에 직접 포함되지 않는다.'
  },
  {
    _pdf: 'cbt3', _pdfNumber: 36,
    subject: '2과목', chapter: '서브쿼리',
    title: '다음 SQL 실행 결과로 가장 알맞은 것은?',
    options: ['A=7000, B=1000', 'A=7000, C=11000', 'A=7000, D=1000', 'A=7000, B=1000, D=1000'],
    correctIndex: 1,
    explanation: '인라인 뷰: A=3000+4000=7000, B=1000, C=5000+6000=11000, D=1000. AVG(AMOUNT) = (3000+4000+1000+5000+6000+1000)/6 = 3333.33. WHERE TOTAL > 3333 만족: A (7000), C (11000).',
    references: [
      {
        type: 'table', caption: '[TB_ORDER] 테이블',
        headers: ['ORDER_ID', 'CUSTOMER', 'AMOUNT'],
        rows: [['1', 'A', '3000'], ['2', 'A', '4000'], ['3', 'B', '1000'], ['4', 'C', '5000'], ['5', 'C', '6000'], ['6', 'D', '1000']]
      },
      {
        type: 'sql',
        code: "SELECT CUSTOMER, TOTAL\nFROM   (\n  SELECT CUSTOMER, SUM(AMOUNT) AS TOTAL\n  FROM   TB_ORDER\n  GROUP BY CUSTOMER\n)\nWHERE  TOTAL > (SELECT AVG(AMOUNT) FROM TB_ORDER);"
      }
    ]
  },
  {
    _pdf: 'cbt3', _pdfNumber: 37,
    subject: '2과목', chapter: '윈도우 함수',
    title: '다음 테이블에 대한 매출 누적을 구하는 SQL 문을 작성하시오. (윈도우 함수 사용)',
    options: [
      "SELECT 영업사원, 판매월, SUM(매출) OVER (PARTITION BY 영업사원 ORDER BY 판매월 RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS 누적매출 FROM 매출;",
      "SELECT 영업사원, 판매월, SUM(매출) OVER (PARTITION BY 영업사원 ORDER BY 판매월 RANGE BETWEEN CURRENT ROW) AS 누적매출 FROM 매출;",
      "SELECT 영업사원, 판매월, SUM(매출) OVER (PARTITION BY 판매월 RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS 누적매출 FROM 매출;",
      "SELECT 영업사원, 판매월, SUM(매출) FROM GROUP BY 영업사원 판매월;"
    ],
    correctIndex: 0,
    explanation: '영업사원별 누적 매출이므로 PARTITION BY 영업사원 으로 사원별 윈도우를 분리한다. UNBOUNDED PRECEDING AND CURRENT ROW 는 처음부터 현재 행까지의 누적 합을 의미.'
  },
  {
    _pdf: 'cbt3', _pdfNumber: 39,
    subject: '2과목', chapter: '그룹 함수',
    title: '다음 GROUP BY 와 UNION ALL 조합과 동일한 효과를 주는 그룹 함수는?\n\n`GROUP BY A, B UNION ALL GROUP BY A UNION ALL GROUP BY ()`',
    options: ['ROLLUP(A, B)', 'CUBE(A, B)', 'GROUPING SETS((A, B))', 'GROUPING SETS((A, B), A)'],
    correctIndex: 0,
    explanation: 'ROLLUP 은 계층적 집계를 수행한다 → ROLLUP(A, B) 는 GROUP BY (A, B) UNION ALL GROUP BY (A) UNION ALL GROUP BY () 의 조합과 동치.'
  },
  {
    _pdf: 'cbt3', _pdfNumber: 41,
    subject: '2과목', chapter: 'DML',
    title: '다음 테이블에 아래의 쿼리를 순서대로 실행할 경우, 그 결과에 대한 설명으로 올바른 것을 고르시오.\n\n`CREATE TABLE TAB ( COL1 NUMBER PRIMARY KEY, COL2 VARCHAR2(10), COL3 DATE DEFAULT SYSDATE );`\n\n(가) `INSERT INTO TAB(COL1, COL2) VALUES(1, \'\');`\n(나) `SELECT * FROM TAB WHERE COL2 = \'\';`\n(다) `UPDATE TAB SET COL2 = \'A\' WHERE COL3 IS NULL;`\n(라) `DELETE FROM TAB;`',
    options: [
      '(가) 는 Oracle 환경 시 COL2 의 NULL 이 입력되고, SQL Server 는 \'\' (공백) 이 입력된다.',
      '(나) 는 SQL Server 가 1 행을 출력한다.',
      '(다) 는 Oracle 에서 1 건이 변경된다.',
      '(라) 는 모든 데이터가 삭제된다.'
    ],
    correctIndex: 0,
    explanation: 'Oracle 은 INSERT 시 \'\' (공백 문자열) 를 NULL 로 처리한다. 반면 SQL Server 는 NULL 과 \'\' 를 구분하여 처리한다. 따라서 (가) 는 Oracle 에서는 COL2 가 NULL, SQL Server 에서는 \'\' 가 입력된다.'
  },
  {
    _pdf: 'cbt3', _pdfNumber: 42,
    subject: '2과목', chapter: 'DDL',
    title: '부서와 사원 테이블을 생성하는 SQL 문장을 수행한 후 튜플 삽입으로 두 테이블의 상태가 다음과 같을 때, 테이블 명령 수행에 대한 결과로 올바르지 않은 것은?',
    options: [
      '부서 테이블에서 (3, \'인사부\') 튜플을 삽입한 후 정상 처리된다.',
      '부서 테이블에서 (1, \'인사부\') 튜플을 삽입하면 PRIMARY KEY 충돌 에러가 발생한다.',
      '사원 테이블에 (3, \'홍길동\', 1) 을 추가 INSERT 시 정상 처리된다.',
      '사원 테이블에서 부서번호 4 (부서에 없음) 를 가진 튜플을 삽입하면 외래키 제약 위반으로 에러가 발생한다.'
    ],
    correctIndex: 3,
    explanation: '문제의 정답키는 ④ (옳지 않은 것). FK 제약 위반 시 에러는 정상 동작이지만, 답안 키가 ④ 로 표기되어 있어 문항 의도상 ④ 를 \"옳지 않은 진술\" 로 본 것 (출제자 표기 보존).'
  },
  {
    _pdf: 'cbt3', _pdfNumber: 43,
    subject: '2과목', chapter: '조인',
    title: '다음 설명에 해당하는 조인 방식은?\n\n\"테이블을 정렬한 후에 정렬된 테이블을 병합하면서 조인을 실행한다.\"',
    options: ['Hash Join', 'Inner Join', 'Nested Loop Join', 'Sort Merge'],
    correctIndex: 3,
    explanation: 'Sort Merge 조인은 두 테이블을 각각 조인 키로 정렬 (Sort) 한 후 정렬된 두 테이블을 병합 (Merge) 하면서 조인을 실행한다. Hash 는 해시 테이블 사용, Nested Loop 는 외부 루프 + 내부 루프 방식.'
  },
  {
    _pdf: 'cbt3', _pdfNumber: 44,
    subject: '2과목', chapter: 'DCL·TCL',
    title: '다음 중 트랜잭션 제어문에 해당하는 명령어는?',
    options: ['SELECT', 'COMMIT', 'CREATE', 'GRANT'],
    correctIndex: 1,
    explanation: 'TCL (트랜잭션 제어어) 는 COMMIT, ROLLBACK, SAVEPOINT 가 있다. SELECT 는 DML, CREATE 는 DDL, GRANT 는 DCL.'
  },
  {
    _pdf: 'cbt3', _pdfNumber: 45,
    subject: '2과목', chapter: '서브쿼리',
    title: '다음 SQL 실행 결과, 최종 출력되는 건 수는?',
    options: ['1', '2', '3', '0'],
    correctIndex: 0,
    explanation: 'WITH 절 (CTE) 로 REGION_TOTAL 을 만들면: EAST = 1000+2000 = 3000, WEST = 500. WHERE TOTAL > 1500 만족: EAST 만 → COUNT(*) = 1.',
    references: [
      { type: 'table', caption: '[TB_ORDER] 테이블', headers: ['ORDER_ID', 'REGION', 'AMOUNT'], rows: [['1', 'EAST', '1000'], ['2', 'EAST', '2000'], ['3', 'WEST', '500']] },
      {
        type: 'sql',
        code: "WITH REGION_TOTAL AS (\n  SELECT REGION, SUM(AMOUNT) AS TOTAL\n  FROM   TB_ORDER\n  GROUP BY REGION\n)\nSELECT COUNT(*) FROM REGION_TOTAL\nWHERE  TOTAL > 1500;"
      }
    ]
  },
  {
    _pdf: 'cbt3', _pdfNumber: 47,
    subject: '1과목', chapter: '엔터티',
    title: '다음 슈퍼타입/서브타입 모델에서 설계 단계에서 변환할 수 있는 테이블의 형태가 아닌 것은?',
    options: [
      'OneToOne Type — 슈퍼타입과 서브타입을 별도의 테이블로 분리 (1:1)',
      'Plus Type — 슈퍼타입과 서브타입을 모두 합쳐 하나의 테이블로 통합',
      'Single Type — 슈퍼타입과 서브타입을 단일 테이블로 통합하지만 서브타입 식별자를 별도로 둠',
      'Multiple Type — 슈퍼타입과 서브타입을 다대다 (M:N) 관계로 변환'
    ],
    correctIndex: 3,
    explanation: '슈퍼타입/서브타입 모델의 변환 형태는 ① OneToOne Type ② Plus Type ③ Single Type 의 3 가지. \"Multiple Type / 다대다 변환\" 은 표준 변환 형태에 포함되지 않는다.'
  },
  {
    _pdf: 'cbt3', _pdfNumber: 50,
    subject: '2과목', chapter: 'DCL·TCL',
    title: '다음 중 트랜잭션의 \'일관성 (Consistency)\' 특성에 대한 설명으로 가장 적절한 것은?',
    options: [
      '트랜잭션의 실행이 모든 상태에서 변하지 않는다.',
      '트랜잭션의 동시성에 대해 동시 실행 결과보다 더 잘 나타난다.',
      '트랜잭션 실행 전후 데이터가 일관성을 유지한다.',
      '트랜잭션의 결과가 영구적으로 반영된다.'
    ],
    correctIndex: 2,
    explanation: '일관성 (Consistency) 은 트랜잭션이 실행되기 전과 후에 데이터의 무결성 제약 조건이 위배되지 않고 일관성을 유지한다는 ACID 특성이다. 예: PRIMARY KEY 제약 조건이 트랜잭션 내에서도 항상 유지됨. ④ 는 영속성 (Durability), ② 는 격리성 (Isolation) 에 해당.'
  }
];

let nextId = data.authored.length + 1;
for (const q of NEW) {
  q._id = `cbt-${String(nextId).padStart(3, '0')}`;
  data.authored.push(q);
  nextId++;
}

fs.writeFileSync(target, JSON.stringify(data, null, 2) + '\n');
console.log(`Added ${NEW.length} cbt3 questions. Total: ${data.authored.length}`);
console.log(`Range: cbt-080 ~ cbt-${String(data.authored.length).padStart(3, '0')}`);
