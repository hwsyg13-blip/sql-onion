// 2과목 · SQL 기본 및 활용 — 전 챕터 상세

export const THEORY_BODY_S2: any = ({

  c21: {
    subjectCode: "2과목", subjectTitle: "SQL 기본 및 활용",
    chapterNum: "1장", title: "관계형 DB · SQL 개요",
    subtitle: "SQL의 분류(DDL/DML/DCL/TCL)와 트랜잭션 ACID — 정의 매칭 문제가 필수 출제.",
    sections: [
      {
        id: "s1", heading: "1.1 관계형 데이터베이스(RDB)",
        paragraphs: [
          "관계형 데이터베이스는 데이터를 2차원 표(테이블) 형태로 저장하는 데이터베이스입니다. 각 테이블은 행(Row, 튜플)과 열(Column, 속성)로 구성되고, 행은 엔터티의 인스턴스, 열은 속성에 해당합니다.",
          "RDB는 정규화를 통해 데이터 중복을 최소화하고, 외래 키(FK) 제약으로 참조 무결성을 보장합니다.",
        ],
        bullets: [
          { t: "테이블 (Table · Relation)", d: "행과 열로 구성된 2차원 구조" },
          { t: "행 (Row · Tuple)", d: "한 건의 데이터 인스턴스 — 실제 실제 레코드 1개" },
          { t: "열 (Column · Attribute)", d: "같은 도메인(값의 범위)에 속하는 속성" },
          { t: "기본 키 (PK)", d: "각 행을 유일하게 식별할 수 있어요 — NOT NULL + UNIQUE" },
          { t: "외래 키 (FK)", d: "다른 테이블의 PK를 참조해서 참조 무결성을 보장해줘요" },
        ],
      },
      {
        id: "s2", heading: "1.2 SQL의 분류",
        paragraphs: ["SQL은 기능에 따라 네 가지로 구분합니다. 시험에서 '다음 중 DDL인 것은?' 형태로 자주 출제됩니다."],
        table: {
          headers: ["분류", "명령어", "설명"],
          rows: [
            ["DDL (Data Definition)", "CREATE, ALTER, DROP, RENAME, TRUNCATE", "객체 생성·변경·삭제. Auto-Commit."],
            ["DML (Data Manipulation)", "SELECT, INSERT, UPDATE, DELETE, MERGE", "데이터 조회·조작."],
            ["DCL (Data Control)", "GRANT, REVOKE", "권한 부여/회수."],
            ["TCL (Transaction Control)", "COMMIT, ROLLBACK, SAVEPOINT", "트랜잭션 제어."],
          ],
        },
        tip: "TRUNCATE는 DDL이라 Auto-Commit, WHERE 불가, ROLLBACK 불가. DELETE와 혼동 금지.",
      },
      {
        id: "s3", heading: "1.3 트랜잭션 (ACID)",
        paragraphs: ["트랜잭션은 '하나의 논리적 작업 단위'로 묶인 SQL 집합입니다. 4가지 특성을 만족해야 합니다."],
        table: {
          headers: ["특성", "영문", "의미"],
          rows: [
            ["원자성", "Atomicity", "All or Nothing. 전부 실행 또는 전부 취소."],
            ["일관성", "Consistency", "트랜잭션 전후 DB 무결성 제약 유지."],
            ["격리성", "Isolation", "동시 실행 시 서로 영향 없음."],
            ["지속성", "Durability", "성공한 결과는 영구 반영."],
          ],
        },
      },
      {
        id: "s4", heading: "1.4 DELETE · TRUNCATE · DROP 비교",
        table: {
          headers: ["구분", "DELETE", "TRUNCATE", "DROP"],
          rows: [
            ["분류", "DML", "DDL", "DDL"],
            ["WHERE 조건", "가능", "불가", "불가"],
            ["ROLLBACK", "가능", "불가(Auto-Commit)", "불가"],
            ["테이블 구조", "유지", "유지", "삭제"],
            ["속도", "느림", "빠름", "빠름"],
          ],
        },
        example: {
          caption: "세 명령의 문법",
          sql: `DELETE FROM emp WHERE dept_id = 10;   -- 조건 삭제
TRUNCATE TABLE emp;                   -- 전체 데이터 즉시 삭제
DROP TABLE emp;                       -- 테이블 자체 제거`,
        },
      },
    ],
    linkedQuizIds: [207, 208, 214],
  },

  c22: {
    subjectCode: "2과목", subjectTitle: "SQL 기본 및 활용",
    chapterNum: "2장", title: "SELECT · WHERE · 함수",
    subtitle: "SELECT 실행 순서, NULL 처리, 문자/숫자/날짜 함수 — 실전에서 매회 3~4문제.",
    sections: [
      {
        id: "s1", heading: "2.1 SELECT 문의 실행 순서",
        paragraphs: ["작성 순서와 실행 순서가 다른 것이 포인트. 실행 순서 문제는 단골."],
        diagram: "selectOrder",
        table: {
          headers: ["작성 순서", "실행 순서"],
          rows: [
            ["1. SELECT", "5. SELECT (투영)"],
            ["2. FROM", "1. FROM (소스 확보)"],
            ["3. WHERE", "2. WHERE (행 필터)"],
            ["4. GROUP BY", "3. GROUP BY (그룹)"],
            ["5. HAVING", "4. HAVING (그룹 필터)"],
            ["6. ORDER BY", "6. ORDER BY (정렬)"],
          ],
        },
        tip: "별칭(alias)은 SELECT에서 정의되지만, SELECT 실행은 5번째 → WHERE/GROUP BY에서는 별칭 사용 불가. ORDER BY에서는 가능.",
      },
      {
        id: "s2", heading: "2.2 WHERE 조건 · 연산자",
        bullets: [
          { t: "비교", d: "= , <>, !=, <, >, <=, >=" },
          { t: "BETWEEN a AND b", d: "a 이상 b 이하 — 양 끝값도 포함돼요" },
          { t: "IN (a, b, c)", d: "목록 안의 값 중 하나와 일치하면 참" },
          { t: "LIKE 'A%'", d: "와일드카드 검색 — %는 0자 이상, _는 정확히 1자" },
          { t: "IS NULL · IS NOT NULL", d: "NULL 판별은 반드시 IS로 — = NULL으로 쓰면 결과가 UNKNOWN이 돼요" },
        ],
      },
      {
        id: "s3", heading: "2.3 주요 내장 함수",
        table: {
          headers: ["분류", "함수", "설명"],
          rows: [
            ["문자", "UPPER, LOWER, LENGTH, SUBSTR, INSTR, CONCAT", "대소문자·길이·자르기·위치"],
            ["문자", "LTRIM, RTRIM, TRIM, REPLACE", "공백/문자 제거·치환"],
            ["숫자", "ROUND, TRUNC, MOD, CEIL, FLOOR, ABS", "반올림·버림·나머지"],
            ["날짜", "SYSDATE, ADD_MONTHS, MONTHS_BETWEEN, TRUNC", "현재·월연산"],
            ["변환", "TO_CHAR, TO_DATE, TO_NUMBER", "형변환"],
          ],
        },
        example: {
          caption: "자주 나오는 함수 예",
          sql: `SELECT SUBSTR('DATABASE', 2, 4)      FROM DUAL;  -- 'ATAB'
SELECT MOD(10, 3)                    FROM DUAL;  -- 1
SELECT TO_CHAR(SYSDATE,'YYYY-MM-DD') FROM DUAL;  -- '2024-03-15'
SELECT ROUND(12.456, 1)              FROM DUAL;  -- 12.5
SELECT TRUNC(12.456, 1)              FROM DUAL;  -- 12.4`,
        },
      },
      {
        id: "s4", heading: "2.4 NULL 처리 함수",
        table: {
          headers: ["함수", "설명", "예"],
          rows: [
            ["NVL(a, b)", "a가 NULL이면 b 반환 (Oracle)", "NVL(comm, 0)"],
            ["NVL2(a, b, c)", "a가 NULL 아니면 b, NULL이면 c", "NVL2(comm, 'Y', 'N')"],
            ["COALESCE(a, b, c, ...)", "처음 NULL이 아닌 값 반환 (표준 SQL)", "COALESCE(comm, bonus, 0)"],
            ["NULLIF(a, b)", "a = b 이면 NULL, 아니면 a", "NULLIF(dept, 0)"],
          ],
        },
        tip: "NULL + 숫자 = NULL. 집계함수(SUM/AVG)는 NULL 무시. COUNT(*) 는 NULL 포함, COUNT(컬럼)은 NULL 제외.",
      },
    ],
    linkedQuizIds: [203, 205, 212],
  },

  c23: {
    subjectCode: "2과목", subjectTitle: "SQL 기본 및 활용",
    chapterNum: "3장", title: "GROUP BY · HAVING",
    subtitle: "집계 함수와 HAVING 절. ROLLUP · CUBE · GROUPING SETS 가 SQLD 핵심.",
    sections: [
      {
        id: "s1", heading: "3.1 집계 함수",
        paragraphs: ["여러 행에서 하나의 결과를 만드는 함수. NULL을 무시합니다(COUNT(*) 제외)."],
        table: {
          headers: ["함수", "설명"],
          rows: [
            ["COUNT(*)", "NULL 포함 전체 행"],
            ["COUNT(col)", "col의 NULL 아닌 행"],
            ["COUNT(DISTINCT col)", "중복·NULL 제외 고유값 수"],
            ["SUM / AVG", "합계 / 평균 (NULL 무시)"],
            ["MIN / MAX", "최소 / 최대"],
          ],
        },
      },
      {
        id: "s2", heading: "3.2 GROUP BY · HAVING",
        paragraphs: ["GROUP BY는 행을 그룹으로 묶고, HAVING은 그룹에 대한 조건을 겁니다. WHERE는 그룹 전 행, HAVING은 그룹 후 결과에 적용."],
        example: {
          caption: "부서별 평균 급여 3,000,000 초과 부서",
          sql: `SELECT d.dept_name, AVG(e.salary) AS avg_sal
  FROM employee e
  JOIN department d ON e.dept_id = d.dept_id
 GROUP BY d.dept_name
HAVING AVG(e.salary) > 3000000
 ORDER BY avg_sal DESC;`,
        },
        bullets: [
          { t: "규칙", d: "SELECT 절에 쓴 일반 컬럼은 전부 GROUP BY에도 써야 해요" },
          { t: "WHERE vs HAVING", d: "WHERE는 그룹 만들기 전 행을 걸러내고, HAVING은 그룹 만든 뒤에 걸러내요" },
          { t: "둘 다 가능한 경우", d: "집계함수를 안 쓰는 조건은 WHERE가 더 빠라요 — 미리 걸러낼수록 시스템이 편해져요" },
        ],
      },
      {
        id: "s3", heading: "3.3 ROLLUP · CUBE · GROUPING SETS",
        paragraphs: ["다차원 집계 함수. 소계·총계를 한 번에 계산."],
        diagram: "rollupCube",
        table: {
          headers: ["함수", "생성되는 그룹 조합", "예: (A, B)"],
          rows: [
            ["ROLLUP(A, B)", "계층적 소계", "(A,B), (A), ()"],
            ["CUBE(A, B)", "모든 조합 소계", "(A,B), (A), (B), ()"],
            ["GROUPING SETS((A),(B))", "지정한 조합만", "(A), (B)"],
          ],
        },
        example: {
          caption: "ROLLUP vs CUBE 결과 차이",
          sql: `-- ROLLUP: 부서별 / 전체 소계
SELECT dept_id, job_id, SUM(salary)
  FROM emp
 GROUP BY ROLLUP(dept_id, job_id);
-- (dept_id, job_id) + (dept_id) + () 소계

-- CUBE: 모든 조합의 소계
SELECT dept_id, job_id, SUM(salary)
  FROM emp
 GROUP BY CUBE(dept_id, job_id);
-- 위 + (job_id) 추가`,
        },
        tip: "GROUPING() 함수는 해당 행이 소계로 생성된 것인지(1), 원본인지(0) 구분할 때 사용.",
      },
    ],
    linkedQuizIds: [201, 210],
  },

  c24: {
    subjectCode: "2과목", subjectTitle: "SQL 기본 및 활용",
    chapterNum: "4장", title: "JOIN",
    subtitle: "INNER / OUTER / CROSS / SELF. ANSI 표기와 Oracle (+) 표기 모두 익혀야 함.",
    sections: [
      {
        id: "s1", heading: "4.1 INNER JOIN",
        paragraphs: ["양쪽 테이블에서 조인 조건을 만족하는 행만 반환. 가장 기본적인 조인."],
        example: {
          caption: "ANSI vs Oracle 표기",
          sql: `-- ANSI
SELECT e.name, d.dept_name
  FROM employee e
  JOIN department d ON e.dept_id = d.dept_id;

-- Oracle
SELECT e.name, d.dept_name
  FROM employee e, department d
 WHERE e.dept_id = d.dept_id;`,
        },
        bullets: [
          { t: "USING", d: "조인할 컬럼 이름이 양쪽 테이블에서 같을 때, USING(dept_id) 형식으로 짧게 쓸 수 있어요" },
          { t: "NATURAL JOIN", d: "양쪽의 같은 이름 컬럼 전부로 자동 조인이 돼요 — 의도치 않은 조인이 생길 수 있어 조심해야 해요" },
        ],
      },
      {
        id: "s2", heading: "4.2 OUTER JOIN",
        table: {
          headers: ["종류", "결과"],
          rows: [
            ["LEFT OUTER JOIN", "왼쪽 전체 + 오른쪽 매칭 (없으면 NULL)"],
            ["RIGHT OUTER JOIN", "오른쪽 전체 + 왼쪽 매칭 (없으면 NULL)"],
            ["FULL OUTER JOIN", "양쪽 전체 (매칭 없으면 NULL)"],
          ],
        },
        example: {
          caption: "ANSI LEFT JOIN과 Oracle (+) 표기",
          sql: `-- ANSI
SELECT e.name, d.dept_name
  FROM employee e
  LEFT OUTER JOIN department d
    ON e.dept_id = d.dept_id;

-- Oracle (+) 는 NULL이 들어올 쪽 컬럼에 붙임
SELECT e.name, d.dept_name
  FROM employee e, department d
 WHERE e.dept_id = d.dept_id(+);`,
        },
        tip: "Oracle의 (+)는 외부 조인 표시. NULL이 올 쪽에 붙인다고 기억. FULL OUTER는 (+)로 표현 불가 → ANSI 사용.",
      },
      {
        id: "s3", heading: "4.3 CROSS JOIN · SELF JOIN",
        bullets: [
          { t: "CROSS JOIN", d: "조건 없이 모든 조합을 만들어요 — m개 × n개 결과행(카테시안 곱)" },
          { t: "SELF JOIN", d: "같은 테이블을 자기 자신과 조인해요 — 사원-상사 관계가 대표 예시, 별칭이 반드시 필요해요" },
        ],
        example: {
          caption: "SELF JOIN — 사원과 상사 이름",
          sql: `SELECT e.name   AS employee,
       m.name   AS manager
  FROM employee e
  LEFT JOIN employee m
    ON e.manager_id = m.emp_id;`,
        },
      },
      {
        id: "s4", heading: "4.4 JOIN 요약표",
        diagram: "joinVenn",
        table: {
          headers: ["종류", "매칭 안 되는 왼쪽", "매칭 안 되는 오른쪽"],
          rows: [
            ["INNER", "제외", "제외"],
            ["LEFT OUTER", "포함 (오른쪽 NULL)", "제외"],
            ["RIGHT OUTER", "제외", "포함 (왼쪽 NULL)"],
            ["FULL OUTER", "포함", "포함"],
            ["CROSS", "N/A (조건 없음)", "N/A"],
          ],
        },
      },
    ],
    linkedQuizIds: [202],
  },

  c25: {
    subjectCode: "2과목", subjectTitle: "SQL 기본 및 활용",
    chapterNum: "5장", title: "서브쿼리 (Subquery)",
    subtitle: "단일·다중 행 / 스칼라 · 인라인 뷰 / 연관 서브쿼리 — 위치별 특성 구분.",
    sections: [
      {
        id: "s1", heading: "5.1 서브쿼리의 분류",
        diagram: "subqueryPositions",
        table: {
          headers: ["위치", "종류", "설명"],
          rows: [
            ["WHERE 절", "단일 행 서브쿼리", "1행 반환. =, <, >, <= 사용."],
            ["WHERE 절", "다중 행 서브쿼리", "여러 행 반환. IN, ANY, ALL, EXISTS 사용."],
            ["WHERE 절", "다중 컬럼 서브쿼리", "여러 컬럼 동시 비교. (a,b) IN ((...))"],
            ["SELECT 절", "스칼라 서브쿼리", "단일 행·단일 컬럼만 반환. 컬럼처럼 사용."],
            ["FROM 절", "인라인 뷰", "서브쿼리 결과를 테이블처럼 사용."],
          ],
        },
      },
      {
        id: "s2", heading: "5.2 다중 행 연산자",
        table: {
          headers: ["연산자", "의미"],
          rows: [
            ["IN (...)", "목록 중 하나와 일치"],
            ["ANY / SOME", "서브쿼리 결과 중 하나라도 만족. > ANY(10,20) → 10 초과"],
            ["ALL", "서브쿼리 결과 모두 만족. > ALL(10,20) → 20 초과"],
            ["EXISTS", "서브쿼리 결과가 1행이라도 있으면 TRUE (컬럼값 불관심)"],
          ],
        },
      },
      {
        id: "s3", heading: "5.3 스칼라 · 인라인 뷰 · 연관 서브쿼리",
        example: {
          caption: "세 가지 서브쿼리",
          sql: `-- ① 스칼라 서브쿼리 (SELECT 절)
SELECT e.name,
       (SELECT d.dept_name
          FROM department d
         WHERE d.dept_id = e.dept_id) AS dept
  FROM employee e;

-- ② 인라인 뷰 (FROM 절)
SELECT t.dept_id, t.avg_sal
  FROM (SELECT dept_id, AVG(salary) AS avg_sal
          FROM employee
         GROUP BY dept_id) t
 WHERE t.avg_sal > 3000000;

-- ③ 연관 서브쿼리 (바깥 컬럼 참조)
SELECT e.name, e.salary
  FROM employee e
 WHERE e.salary > (SELECT AVG(salary)
                     FROM employee
                    WHERE dept_id = e.dept_id);`,
        },
        bullets: [
          { t: "스칼라 서브쿼리", d: "반드시 1행 1컬럼만 반환해야 해요 — 여러 행이 나오면 에러가 나요" },
          { t: "인라인 뷰", d: "FROM 절 안에 쓰는 서브쿼리에요 — 별칭이 반드시 필요하고, 집계 후 다시 필터링할 때 유용해요" },
          { t: "연관 서브쿼리", d: "매 바깥 행마다 서브쿼리를 다시 실행해요 — 행 수가 많으면 성능이 느려져요" },
        ],
      },
    ],
    linkedQuizIds: [204],
  },

  c26: {
    subjectCode: "2과목", subjectTitle: "SQL 기본 및 활용",
    chapterNum: "6장", title: "집합 연산자",
    subtitle: "UNION · UNION ALL · INTERSECT · MINUS — 중복 처리 차이가 핵심.",
    sections: [
      {
        id: "s1", heading: "6.1 집합 연산자 종류",
        paragraphs: ["두 SELECT 결과를 집합 연산으로 결합. 양쪽 컬럼 수·데이터 타입이 동일해야 함."],
        diagram: "setOperators",
        table: {
          headers: ["연산자", "의미", "중복 처리"],
          rows: [
            ["UNION", "합집합 (A ∪ B)", "중복 제거 (정렬 발생)"],
            ["UNION ALL", "합집합", "중복 유지 (빠름)"],
            ["INTERSECT", "교집합 (A ∩ B)", "중복 제거"],
            ["MINUS (EXCEPT)", "차집합 (A − B)", "중복 제거"],
          ],
        },
        tip: "UNION은 내부적으로 정렬 후 중복 제거 → UNION ALL보다 느림. 중복이 없음을 확신하면 UNION ALL 사용.",
      },
      {
        id: "s2", heading: "6.2 사용 규칙",
        bullets: [
          { t: "컬럼 수", d: "양쪽 SELECT 절의 컬럼 갯수가 같아야 해요" },
          { t: "데이터 타입", d: "서로 대응하는 컬럼의 타입이 호환돼야 해요" },
          { t: "컬럼명", d: "위쪽 SELECT에서 쓴 컬럼명이 결과의 컬럼명이 돼요" },
          { t: "ORDER BY", d: "제일 마지막 SELECT 뒤에 딱 한 번만 쓸 수 있어요" },
        ],
        example: {
          caption: "UNION 예",
          sql: `SELECT emp_id, name, 'EMP' AS type FROM employee
UNION
SELECT con_id, name, 'CON' AS type FROM contractor
 ORDER BY name;`,
        },
      },
    ],
    linkedQuizIds: [209],
  },

  c27: {
    subjectCode: "2과목", subjectTitle: "SQL 기본 및 활용",
    chapterNum: "7장", title: "계층형 질의 · 윈도우 함수",
    subtitle: "CONNECT BY로 조직도 전개, 윈도우 함수로 순위·누적·이동 — 최근 출제 비중 ↑.",
    sections: [
      {
        id: "s1", heading: "7.1 계층형 질의 (Oracle CONNECT BY)",
        paragraphs: ["같은 테이블 내 계층 관계(부모-자식)를 재귀적으로 전개. 조직도, 카테고리 트리 등."],
        diagram: "hierarchyTree",
        example: {
          caption: "사원 조직도 — 상사→부하 전개",
          sql: `SELECT LEVEL, LPAD(' ', (LEVEL-1)*3) || name AS 이름,
       manager_id, CONNECT_BY_ISLEAF AS leaf
  FROM employee
 START WITH manager_id IS NULL        -- 최상위 (CEO)
 CONNECT BY PRIOR emp_id = manager_id -- 부모 emp_id = 자식 manager_id
 ORDER SIBLINGS BY name;`,
        },
        bullets: [
          { t: "START WITH", d: "전개를 시작할 루트 노드를 지정해요" },
          { t: "CONNECT BY PRIOR", d: "부모-자식 관계를 선언해요 — PRIOR는 '이전(부모)' 행을 가리켜요" },
          { t: "PRIOR 위치", d: "'PRIOR 자식키 = 부모키' 형태면 Top-Down(순방향) 전개" },
          { t: "PRIOR 반대", d: "'PRIOR 부모키 = 자식키' 형태면 Bottom-Up(역방향) 전개" },
          { t: "LEVEL", d: "의사 컬럼 — 루트가 1, 그 자식이 2, 3... 식으로 증가해요" },
          { t: "ORDER SIBLINGS BY", d: "같은 계층(형제 노드) 안에서만 정렬해요" },
        ],
      },
      {
        id: "s2", heading: "7.2 윈도우 함수 개요",
        paragraphs: ["행별로 집계를 계산하되, GROUP BY처럼 행이 줄어들지 않는 함수. OVER 절로 범위 지정."],
        example: {
          caption: "윈도우 함수 기본 구조",
          sql: `함수(인수) OVER (
  [PARTITION BY 컬럼]   -- 그룹 분할
  [ORDER BY 컬럼]       -- 정렬
  [ROWS | RANGE BETWEEN ... AND ...]  -- 윈도우 범위
)`,
        },
      },
      {
        id: "s3", heading: "7.3 순위 함수 — RANK · DENSE_RANK · ROW_NUMBER",
        diagram: "rankCompare",
        table: {
          headers: ["함수", "동률 처리", "예 (100, 90, 90, 80)"],
          rows: [
            ["RANK()", "동률 후 건너뜀", "1, 2, 2, 4"],
            ["DENSE_RANK()", "동률 후 건너뛰지 않음", "1, 2, 2, 3"],
            ["ROW_NUMBER()", "동률 없이 유일번호", "1, 2, 3, 4"],
          ],
        },
        example: {
          caption: "부서별 급여 순위",
          sql: `SELECT name, dept_id, salary,
       RANK()       OVER (PARTITION BY dept_id ORDER BY salary DESC) r1,
       DENSE_RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) r2,
       ROW_NUMBER() OVER (PARTITION BY dept_id ORDER BY salary DESC) rn
  FROM employee;`,
        },
      },
      {
        id: "s4", heading: "7.4 집계 윈도우 · LAG · LEAD",
        bullets: [
          { t: "SUM / AVG / COUNT OVER (...)", d: "누적 합계, 이동 평균을 행 수를 줄이지 않고 계산해요" },
          { t: "LAG(col, n, default)", d: "현재 행 기준 n번째 이전 행의 값을 가져와요 — n의 기본값은 1이에요" },
          { t: "LEAD(col, n, default)", d: "현재 행 기준 n번째 다음 행의 값을 가져와요" },
          { t: "FIRST_VALUE · LAST_VALUE", d: "지정한 윈도우 안 첫 행과 마지막 행의 값을 돌려줘요" },
          { t: "NTILE(n)", d: "전체를 n개 그룹으로 균등 분할해서 그룹 번호를 붙여줘요" },
        ],
        example: {
          caption: "누적 합계 · 전월 대비 변화",
          sql: `SELECT month_id, amount,
       SUM(amount) OVER (ORDER BY month_id
                         ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS cum_sum,
       LAG(amount, 1, 0) OVER (ORDER BY month_id) AS prev_month,
       amount - LAG(amount, 1, 0) OVER (ORDER BY month_id) AS delta
  FROM sales;`,
        },
        tip: "ROWS BETWEEN: 물리적 행 개수 / RANGE BETWEEN: 논리적 값 범위. ORDER BY 없이 OVER() 만 쓰면 전체를 하나의 윈도우로.",
      },
    ],
    linkedQuizIds: [206, 213],
  },

} as any);
