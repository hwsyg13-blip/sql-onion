// SQLD-style question bank — 20 questions across 1과목 / 2과목
// Each: id, subject, chapter, concept, exam, number, title, body?, query?, options[4], correctIndex, explanation

export const CONCEPT_QUIZ: any[] = [
  // ─── 1과목 · 데이터 모델링의 이해 ───────────────────────────
  {
    id: 101, subject: "1과목", chapter: "데이터 모델링의 이해", exam: "2023년 1회", number: 1,
    concept: "식별자",
    title: "다음 중 식별자(Identifier)의 특성으로 옳지 않은 것은?",
    body: "엔터티를 유일하게 식별하는 식별자가 갖춰야 하는 특성 중, 잘못 설명된 항목을 고르세요.",
    options: [
      "각 엔터티 인스턴스를 유일하게 구별할 수 있어야 한다 (유일성)",
      "식별자로 지정된 속성은 Null 값을 가질 수 있다",
      "식별자를 구성하는 속성의 수는 최소여야 한다 (최소성)",
      "한 번 부여된 식별자의 값은 변하지 않아야 한다 (불변성)",
    ],
    correctIndex: 1,
    explanation: "식별자는 유일성 · 최소성 · 불변성 · 존재성(Not Null)을 만족해야 합니다. 식별자로 지정된 속성은 반드시 값을 가져야 하므로 Null 값을 가질 수 없습니다.",
  },
  {
    id: 102, subject: "1과목", chapter: "데이터 모델링의 이해", exam: "2023년 1회", number: 2,
    concept: "정규화",
    title: "제2정규형(2NF)에 대한 설명으로 가장 옳은 것은?",
    options: [
      "모든 속성이 원자값을 가져야 한다",
      "기본키에 대해 완전 함수 종속을 만족해야 한다",
      "이행적 함수 종속을 제거한 상태이다",
      "다치 종속성을 제거한 상태이다",
    ],
    correctIndex: 1,
    explanation: "제2정규형은 1NF를 만족하면서 기본키가 아닌 모든 속성이 기본키에 완전 함수 종속되는 상태입니다. (부분 함수 종속 제거) ①은 1NF, ③은 3NF, ④는 4NF 설명입니다.",
  },
  {
    id: 103, subject: "1과목", chapter: "데이터 모델링의 이해", exam: "2022년 3회", number: 4,
    concept: "엔터티",
    title: "다음 중 엔터티(Entity)의 특징으로 옳지 않은 것은?",
    options: [
      "업무에서 관리해야 하는 정보이어야 한다",
      "유일한 식별자에 의해 식별 가능해야 한다",
      "반드시 두 개 이상의 인스턴스가 존재해야 한다",
      "하나의 속성만으로도 엔터티가 될 수 있다",
    ],
    correctIndex: 3,
    explanation: "엔터티는 반드시 두 개 이상의 속성을 가져야 합니다. 하나의 속성만 가지는 경우는 엔터티로 보지 않습니다. 또한 ①②③은 엔터티의 기본 특징입니다.",
  },
  {
    id: 104, subject: "1과목", chapter: "데이터 모델링의 이해", exam: "2023년 2회", number: 7,
    concept: "관계차수",
    title: "ERD에서 '사원과 부서' 사이의 관계가 '사원은 반드시 하나의 부서에 속하며, 부서에는 여러 사원이 있을 수 있다'일 때, 올바른 관계 표현은?",
    options: [
      "사원 1 : M 부서 (선택)",
      "사원 M : 1 부서 (필수)",
      "사원 1 : 1 부서 (필수)",
      "사원 M : N 부서 (선택)",
    ],
    correctIndex: 1,
    explanation: "사원 여러 명(M)이 하나의 부서(1)에 속하며, 사원 입장에서 부서는 '필수' 관계입니다. 따라서 사원 M : 1 부서 (필수) 관계로 표현합니다.",
  },
  {
    id: 105, subject: "1과목", chapter: "데이터 모델링의 이해", exam: "2022년 1회", number: 5,
    concept: "속성",
    title: "속성(Attribute)의 분류 중 '기본 속성'에 해당하는 예시는?",
    options: [
      "사원번호, 이름, 입사일",
      "연간 급여 총액 (월급 × 12)",
      "생년월일로부터 계산한 나이",
      "주문 금액의 VAT 포함 가격",
    ],
    correctIndex: 0,
    explanation: "기본 속성은 업무로부터 직접 도출되는 속성입니다. ②③④는 다른 속성으로부터 계산되어 도출되는 '파생 속성'에 해당합니다.",
  },
  {
    id: 106, subject: "1과목", chapter: "데이터 모델링의 이해", exam: "2023년 3회", number: 9,
    concept: "반정규화",
    title: "반정규화(De-normalization)를 적용하는 주된 이유는?",
    options: [
      "데이터 무결성을 강화하기 위해",
      "저장 공간을 절약하기 위해",
      "조회 성능을 향상시키기 위해",
      "중복 데이터를 제거하기 위해",
    ],
    correctIndex: 2,
    explanation: "반정규화는 정규화된 모델에서 조회 성능(주로 조인 감소)을 위해 의도적으로 중복을 허용하는 기법입니다. 무결성·저장공간·중복 제거는 오히려 정규화의 목적입니다.",
  },
  // ─── 2과목 · SQL 기본 및 활용 ────────────────────────────────
  {
    id: 201, subject: "2과목", chapter: "SQL 기본", exam: "2023년 1회", number: 16,
    concept: "GROUP BY · HAVING",
    title: "다음 SQL의 실행 결과로 옳은 것은?",
    query: `-- 부서별 평균 급여 3,000,000원 초과만
SELECT d.dept_name, AVG(e.salary) AS avg_sal
  FROM employee e
  JOIN department d ON e.dept_id = d.dept_id
 GROUP BY d.dept_name
 HAVING AVG(e.salary) > 3000000;`,
    options: [
      "모든 부서의 평균 급여가 표시된다",
      "평균 급여가 3,000,000원을 초과하는 부서명과 평균 급여가 표시된다",
      "급여가 3,000,000원을 초과하는 사원이 속한 부서만 표시된다",
      "문법 오류가 발생한다",
    ],
    correctIndex: 1,
    explanation: "HAVING 절은 GROUP BY로 집계된 결과에 조건을 적용합니다. 부서별 AVG(salary)가 3,000,000원을 초과하는 그룹만 선택되므로, 해당 부서명과 평균 급여가 반환됩니다.",
  },
  {
    id: 202, subject: "2과목", chapter: "SQL 기본", exam: "2023년 1회", number: 22,
    concept: "JOIN 종류",
    title: "다음 중 JOIN의 종류와 설명이 올바르게 짝지어진 것은?",
    options: [
      "INNER JOIN — 양쪽 테이블의 모든 행을 반환한다",
      "LEFT OUTER JOIN — 오른쪽 테이블에만 있는 행도 반환한다",
      "CROSS JOIN — 두 테이블의 카티션 곱을 반환한다",
      "SELF JOIN — 서로 다른 두 테이블을 조인하는 것이다",
    ],
    correctIndex: 2,
    explanation: "CROSS JOIN은 조건 없이 두 테이블의 모든 조합(카티션 곱)을 반환합니다. INNER JOIN은 양쪽 모두 매칭되는 행만, LEFT OUTER JOIN은 왼쪽 전부 + 매칭되는 오른쪽, SELF JOIN은 같은 테이블을 자기 자신과 조인합니다.",
  },
  {
    id: 203, subject: "2과목", chapter: "SQL 활용", exam: "2023년 2회", number: 28,
    concept: "NULL 처리",
    title: "다음 SQL의 결과로 옳은 것은?",
    query: `SELECT COUNT(*), COUNT(commission), COUNT(DISTINCT dept_id)
  FROM employee;
-- employee 테이블: 총 10행, commission NULL 3행, dept_id 종류 4개`,
    options: [
      "10, 10, 4",
      "10, 7, 4",
      "7, 7, 4",
      "10, 7, 10",
    ],
    correctIndex: 1,
    explanation: "COUNT(*)은 NULL 포함 전체 행(10). COUNT(컬럼)은 NULL 제외(10-3=7). COUNT(DISTINCT)는 중복과 NULL을 제외한 고유값 개수(4).",
  },
  {
    id: 204, subject: "2과목", chapter: "SQL 기본", exam: "2022년 2회", number: 19,
    concept: "서브쿼리",
    title: "다음 중 스칼라 서브쿼리(Scalar Subquery)에 대한 설명으로 옳은 것은?",
    options: [
      "SELECT 절에서 단일 행, 단일 컬럼을 반환한다",
      "WHERE 절에서만 사용할 수 있다",
      "여러 행을 반환해도 오류가 나지 않는다",
      "FROM 절에 기술되는 서브쿼리이다",
    ],
    correctIndex: 0,
    explanation: "스칼라 서브쿼리는 SELECT 절에서 단일 행·단일 컬럼을 반환합니다. 여러 행 반환 시 오류가 발생합니다. FROM 절에 쓰이는 것은 인라인 뷰입니다.",
  },
  {
    id: 205, subject: "2과목", chapter: "SQL 활용", exam: "2023년 1회", number: 31,
    concept: "ORDER BY · NULL",
    title: "다음 SQL의 결과 정렬 순서로 옳은 것은? (Oracle 기준)",
    query: `SELECT name, bonus FROM employee
 ORDER BY bonus DESC;
-- bonus: 500, NULL, 300, NULL, 100`,
    options: [
      "500, 300, 100, NULL, NULL",
      "NULL, NULL, 500, 300, 100",
      "500, NULL, NULL, 300, 100",
      "NULL, NULL, 100, 300, 500",
    ],
    correctIndex: 1,
    explanation: "Oracle은 NULL을 가장 큰 값으로 취급합니다. DESC 정렬 시 NULL이 먼저 오고 그 다음 500, 300, 100 순으로 정렬됩니다. (NULLS FIRST/LAST로 제어 가능)",
  },
  {
    id: 206, subject: "2과목", chapter: "SQL 활용", exam: "2023년 2회", number: 37,
    concept: "윈도우 함수",
    title: "다음 SQL에서 RANK()와 DENSE_RANK()의 차이로 옳은 것은?",
    query: `SELECT name, salary,
       RANK()       OVER (ORDER BY salary DESC) AS r1,
       DENSE_RANK() OVER (ORDER BY salary DESC) AS r2
  FROM employee;`,
    options: [
      "RANK는 동률 시 다음 순위를 건너뛰고, DENSE_RANK는 건너뛰지 않는다",
      "RANK는 건너뛰지 않고, DENSE_RANK가 건너뛴다",
      "두 함수의 결과는 항상 같다",
      "DENSE_RANK는 NULL을 무시하고, RANK는 포함한다",
    ],
    correctIndex: 0,
    explanation: "RANK는 동률이 있으면 다음 순위를 건너뜁니다(예: 1,1,3). DENSE_RANK는 건너뛰지 않고 연속된 순위를 부여합니다(예: 1,1,2).",
  },
  {
    id: 207, subject: "2과목", chapter: "SQL 기본", exam: "2022년 3회", number: 24,
    concept: "DDL · DML · DCL",
    title: "다음 중 DCL(Data Control Language)에 속하는 명령어는?",
    options: [
      "CREATE, ALTER, DROP",
      "SELECT, INSERT, UPDATE",
      "GRANT, REVOKE",
      "COMMIT, ROLLBACK",
    ],
    correctIndex: 2,
    explanation: "DCL은 권한 제어 언어로 GRANT, REVOKE가 해당됩니다. ①은 DDL, ②는 DML, ④는 TCL(Transaction Control Language)입니다.",
  },
  {
    id: 208, subject: "2과목", chapter: "SQL 기본", exam: "2023년 3회", number: 26,
    concept: "트랜잭션",
    title: "트랜잭션의 4가지 특성(ACID) 중 '일관성(Consistency)'에 대한 설명으로 옳은 것은?",
    options: [
      "트랜잭션의 모든 작업은 전부 수행되거나 전혀 수행되지 않아야 한다",
      "트랜잭션 수행 전과 후의 데이터베이스 상태는 항상 정의된 제약조건을 만족해야 한다",
      "동시에 수행되는 트랜잭션들은 서로 영향을 주지 않아야 한다",
      "성공한 트랜잭션의 결과는 영구적으로 반영되어야 한다",
    ],
    correctIndex: 1,
    explanation: "일관성(Consistency)은 트랜잭션 전후로 데이터베이스가 일관된 상태(무결성 제약 만족)를 유지해야 한다는 성질입니다. ①은 원자성(A), ③은 격리성(I), ④는 지속성(D).",
  },
  {
    id: 209, subject: "2과목", chapter: "SQL 활용", exam: "2023년 1회", number: 40,
    concept: "집합 연산",
    title: "다음 SQL의 실행 결과로 반환되는 행의 수는?",
    query: `SELECT dept_id FROM employee     -- 중복 제거 후 4종류
UNION
SELECT dept_id FROM contractor;  -- 중복 제거 후 3종류
-- 두 집합의 공통 dept_id: 2개`,
    options: [
      "7행",
      "5행",
      "4행",
      "2행",
    ],
    correctIndex: 1,
    explanation: "UNION은 중복을 제거한 합집합입니다. 4종류 + 3종류 - 공통 2종류 = 5행이 반환됩니다. UNION ALL이었다면 7행.",
  },
  {
    id: 210, subject: "2과목", chapter: "SQL 활용", exam: "2022년 2회", number: 33,
    concept: "PIVOT · 그룹함수",
    title: "ROLLUP과 CUBE의 차이로 가장 옳은 것은?",
    options: [
      "ROLLUP은 계층적 소계, CUBE는 모든 조합의 소계를 생성한다",
      "둘 다 같은 결과를 반환한다",
      "CUBE는 오직 하나의 컬럼만 지정 가능하다",
      "ROLLUP은 Oracle에서만, CUBE는 표준 SQL이다",
    ],
    correctIndex: 0,
    explanation: "ROLLUP(A, B)은 (A,B), (A), () 계층 소계를 만듭니다. CUBE(A, B)는 (A,B), (A), (B), () 모든 조합의 소계를 만듭니다.",
  },
  {
    id: 211, subject: "2과목", chapter: "SQL 기본", exam: "2023년 2회", number: 18,
    concept: "WHERE 조건",
    title: "다음 SQL에서 반환되는 행의 수로 옳은 것은?",
    query: `SELECT * FROM product
 WHERE price BETWEEN 1000 AND 2000
   AND category IN ('A', 'B');
-- 조건 만족 행: price 기준 12개, 그중 category A/B 만족: 7개`,
    options: [
      "12행",
      "7행",
      "5행",
      "0행",
    ],
    correctIndex: 1,
    explanation: "BETWEEN ... AND는 경계값 포함 범위 조건, IN은 목록 조건으로 AND 결합되어 두 조건 모두 만족하는 7행이 반환됩니다.",
  },
  {
    id: 212, subject: "2과목", chapter: "SQL 기본", exam: "2022년 1회", number: 21,
    concept: "NULL 연산",
    title: "Oracle에서 NULL과의 연산 결과로 옳지 않은 것은?",
    options: [
      "NULL + 10 은 NULL이다",
      "NULL = NULL 은 TRUE이다",
      "NVL(NULL, 0) 은 0이다",
      "COUNT(NULL 컬럼) 은 NULL을 제외한다",
    ],
    correctIndex: 1,
    explanation: "NULL은 '알 수 없는 값'이므로 비교 연산 결과가 TRUE/FALSE가 아닌 UNKNOWN입니다. NULL끼리의 비교 역시 TRUE가 아닙니다. IS NULL 연산자로만 판별합니다.",
  },
  {
    id: 213, subject: "2과목", chapter: "SQL 활용", exam: "2023년 3회", number: 35,
    concept: "계층형 질의",
    title: "Oracle 계층형 질의에서 'CONNECT BY PRIOR 사원번호 = 상사번호' 의 의미는?",
    options: [
      "상사에서 부하로 내려가며 전개 (Top-Down)",
      "부하에서 상사로 올라가며 전개 (Bottom-Up)",
      "같은 계층의 형제 노드를 순회",
      "전체 테이블을 카티션 곱으로 전개",
    ],
    correctIndex: 0,
    explanation: "PRIOR는 '이전 행'을 의미합니다. PRIOR 사원번호 = 상사번호는 '이전에 찾은 사원의 번호가 상사번호인 행'을 찾는 것이므로, 상사 → 부하 방향(Top-Down) 전개입니다.",
  },
  {
    id: 214, subject: "2과목", chapter: "SQL 기본", exam: "2023년 1회", number: 25,
    concept: "DELETE · TRUNCATE · DROP",
    title: "DELETE, TRUNCATE, DROP의 차이로 옳은 것은?",
    options: [
      "DELETE와 TRUNCATE는 모두 DDL이다",
      "TRUNCATE는 WHERE 조건을 사용할 수 있다",
      "DROP은 테이블 구조 자체를 삭제하고, TRUNCATE는 데이터만 전부 삭제한다",
      "DELETE는 ROLLBACK이 불가능하다",
    ],
    correctIndex: 2,
    explanation: "DROP은 테이블 자체를 제거(구조+데이터). TRUNCATE는 DDL로 데이터를 전부 삭제(WHERE 불가, Auto-Commit). DELETE는 DML로 WHERE 조건 사용 가능 및 ROLLBACK 가능합니다.",
  },
];

// exported above
