// Auto-generated from PDF + blog + scripts/authored/round-55.json
// 제55회 — 2024년 11월 · 50문항
// ⚠ 직접 편집 금지. 출처별 데이터를 고친 뒤 'node scripts/build-quiz-bank.mjs' 재실행.
import type { QuizQuestion } from '../quizBank';

export const ROUND_55: QuizQuestion[] = [
  {
    "id": 10250,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "1과목",
    "number": 1,
    "title": "내부 스키마에 대한 설명으로 적절한 것을 모두 고른 것은?",
    "options": [
      "가, 다",
      "나, 라",
      "가, 라",
      "나, 다"
    ],
    "correctIndex": 1,
    "explanation": "가. 외부 사용자 관점에서 데이터를 표현한다. 나. 물리적 저장 구조 및 저장 장치에서의 저장 방식을 표현한다. 다. 조직 전체의 통합적 데이터 관점을 나타낸다. 라. 내부 단계와 내부 스키마로 구성되며 DB 가 물리적으로 저장되는 형식을 정의한다. 내부 스키마는 물리적 저장 구조 및 저장 방식을 다루는 단계이다.",
    "_source": "authored"
  },
  {
    "id": 10251,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "1과목",
    "number": 2,
    "title": "엔터티명에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "현업 업무에서 사용하는 용어를 사용한다.",
      "가능하면 약어로 사용한다.",
      "단수 명사를 사용한다.",
      "모든 엔터티에서 유일하게 이름이 부여되어야 한다."
    ],
    "correctIndex": 1,
    "explanation": "엔터티명은 가능하면 약어를 사용하지 않는 것이 명명 원칙이다.",
    "_source": "authored"
  },
  {
    "id": 10252,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "1과목",
    "number": 3,
    "title": "기본 엔터티에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "업무에 원래부터 존재하는 정보를 다룬다.",
      "다른 엔터티와 관계에 의해 생성되지 않고 독립적으로 생성된다.",
      "다른 엔터티로부터 주식별자를 상속받는다.",
      "자신의 고유한 주식별자를 가진다."
    ],
    "correctIndex": 2,
    "explanation": "기본 엔터티는 자신의 고유한 주식별자를 가지며 타 엔터티로부터 주식별자를 상속받지 않는다.",
    "_source": "authored"
  },
  {
    "id": 10253,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "1과목",
    "number": 4,
    "title": "아래 설명에 해당하는 정규화 단계는?",
    "options": [
      "제1 정규화",
      "제2 정규화",
      "제3 정규화",
      "BCNF"
    ],
    "correctIndex": 1,
    "explanation": "주식별자 컬럼 두 개를 하나씩 나누어 테이블을 분리함으로써, 일반 속성이 주식별자에 부분적으로 종속되는 현상을 해결한다. 부분 함수 종속을 제거하는 단계가 제2 정규화이다.",
    "_source": "authored"
  },
  {
    "id": 10254,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "1과목",
    "number": 5,
    "title": "제1 정규형에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "모든 속성이 원자값을 가진다.",
      "일반 속성은 주식별자 전체에 종속적이다.",
      "반복되는 속성 그룹이 존재하지 않는다.",
      "하나의 행은 유일하게 식별될 수 있다."
    ],
    "correctIndex": 1,
    "explanation": "\"주식별자 전체에 종속\" 조건은 제2 정규형의 특성이다.",
    "_source": "authored"
  },
  {
    "id": 10255,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "1과목",
    "number": 6,
    "title": "식별자 관계에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "부모의 주식별자가 자식의 주식별자에 포함된다.",
      "부모 엔터티와 자식 엔터티의 관계는 항상 1:1 관계이다.",
      "자식이 부모 속성만으로 주식별자를 구성하면 1:1 관계가 된다.",
      "부모 속성과 다른 속성을 함께 주식별자로 구성하면 1:M 관계가 된다."
    ],
    "correctIndex": 1,
    "explanation": "식별자 관계는 구성에 따라 1:1 또는 1:M 로 나타날 수 있다.",
    "_source": "authored"
  },
  {
    "id": 10256,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "1과목",
    "number": 7,
    "title": "트랜잭션의 특성 중 \"모두 수행되거나 모두 수행되지 않아야 한다\" 는 특성은?",
    "options": [
      "원자성(Atomicity)",
      "일관성(Consistency)",
      "고립성(Isolation)",
      "영속성(Durability)"
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10257,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "1과목",
    "number": 8,
    "title": "계층형 데이터 모델에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "트리 구조로 데이터를 표현한다.",
      "개체 간의 관계는 1:1 이다.",
      "루트 노드에서 하위 노드로 확장된다.",
      "동일 레벨의 개체 간에는 관계가 표현되지 않는다."
    ],
    "correctIndex": 1,
    "explanation": "계층형 모델의 관계는 부모 1 : 자식 N 의 1:M 관계이다.",
    "_source": "authored"
  },
  {
    "id": 10258,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "1과목",
    "number": 9,
    "title": "아래 빈칸에 들어갈 데이터 모델 구성 요소의 순서로 올바른 것은?",
    "options": [
      "인스턴스 - 엔터티 - 속성값 - 속성",
      "엔터티 - 속성 - 인스턴스 - 속성값",
      "속성 - 인스턴스 - 엔터티 - 속성값",
      "엔터티 - 인스턴스 - 속성 - 속성값"
    ],
    "correctIndex": 3,
    "explanation": "( ㉠ ) → ( ㉡ ) → ( ㉢ ) → ( ㉣ )",
    "_source": "authored"
  },
  {
    "id": 10259,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "1과목",
    "number": 10,
    "title": "아래 설명에 해당하는 용어는?",
    "options": [
      "관계 선택사양",
      "관계 차수",
      "관계 명",
      "관계 유형"
    ],
    "correctIndex": 1,
    "explanation": "두 개의 엔터티 간 관계에서 참여자의 수를 표현하는 것이며, 가장 일반적인 표현 방법은 1:M, 1:1, M:N 이다.",
    "_source": "authored"
  },
  {
    "id": 10260,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 11,
    "title": "서브쿼리에 대한 설명 중 적절하지 않은 것은?",
    "options": [
      "서브쿼리는 SELECT, WHERE, FROM 절 등에 사용할 수 있다.",
      "EXISTS 는 존재 여부만 확인하므로 성능에 유리한 경우가 많다.",
      "IN 절은 단일 행 서브쿼리만 사용할 수 있다.",
      "스칼라 서브쿼리는 단일 값을 반환해야 한다."
    ],
    "correctIndex": 2,
    "explanation": "IN 절은 다중 행 서브쿼리를 사용할 수 있다.",
    "_source": "authored"
  },
  {
    "id": 10261,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 12,
    "title": "DML 로 적절한 것은?",
    "options": [
      "INSERT, UPDATE, DELETE",
      "CREATE, ALTER, DROP",
      "GRANT, REVOKE",
      "COMMIT, ROLLBACK"
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10262,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 13,
    "title": "아래 SQL 의 결과로 적절한 것은?\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"6\">\n  <tr><th>DEPT</th><th>SAL</th></tr>\n  <tr><td>10</td><td>3000</td></tr>\n  <tr><td>10</td><td>3000</td></tr>\n  <tr><td>10</td><td>2500</td></tr>\n  <tr><td>20</td><td>5000</td></tr>\n</table>\n```sql\nSELECT DEPT, SAL,\n       DENSE_RANK() OVER (PARTITION BY DEPT ORDER BY SAL DESC) AS RNK\nFROM   EMP;\n```",
    "options": [
      "1, 2, 2, 1",
      "1, 1, 2, 1",
      "1, 2, 3, 1",
      "1, 1, 3, 1"
    ],
    "correctIndex": 1,
    "explanation": "DEPT=10 에서 SAL=3000 이 두 개, SAL=2500 이 DENSE_RANK 2, DEPT=20 은 단독 1 이다.",
    "_source": "authored"
  },
  {
    "id": 10263,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 14,
    "title": "아래 SQL 의 결과로 옳은 것은?\n```sql\nINSERT INTO TAB1 VALUES ('A', 100);\nINSERT INTO TAB1 VALUES ('B', 200);\nINSERT INTO TAB1 VALUES ('C', 300);\nINSERT INTO TAB1 VALUES ('C', 400);\nSELECT COUNT(*)\nFROM (\n  SELECT COL1, SUM(COL2)\n  FROM   TAB1\n  GROUP BY ROLLUP(COL1), COL1\n)\nWHERE 1 = 1;\n```",
    "options": [
      "3",
      "6",
      "4",
      "8"
    ],
    "correctIndex": 1,
    "explanation": "ROLLUP(COL1), COL1 은 GROUP BY COL1 UNION ALL GROUP BY COL1 과 동일하므로 A·B·C 각 3건씩 총 6건이 산출된다.",
    "_source": "authored"
  },
  {
    "id": 10264,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 15,
    "title": "아래 DDL 에서 오류가 발생하는 위치는?\n```sql\nCREATE TABLE 1234_TBL (  -- (1)\n  COL1 VARCHAR2(20),     -- (2)\n  COL2 NUMBER             -- (3)\n);                        -- (4)\n```",
    "options": [
      "(1) 테이블명은 숫자로 시작할 수 없다.",
      "(2) VARCHAR2 타입이 허용되지 않는다.",
      "(3) NUMBER 타입에 크기를 지정하지 않을 수 없다.",
      "(4) 세미콜론 위치 오류"
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10265,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 16,
    "title": "아래 GROUP BY 절 중 집계 결과 집합이 나머지와 다른 것은?",
    "options": [
      "`GROUP BY ROLLUP(A, B)`",
      "`GROUP BY GROUPING SETS((A, B), (A), ())`",
      "`GROUP BY GROUPING SETS((A, B), (A), (B))`",
      "`GROUP BY GROUPING SETS((), (A), (A, B))`"
    ],
    "correctIndex": 2,
    "explanation": "①·②·④는 모두 (A,B), (A), () 세 집계 레벨을 산출하여 동일한 결과 집합을 반환하지만, ③은 () 총계 대신 (B) 레벨이 포함되어 결과 집합이 다르다.",
    "_source": "authored"
  },
  {
    "id": 10266,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 17,
    "title": "아래 SQL 과 동일한 결과를 반환하는 GROUP BY 절은?\n```sql\nSELECT A, B, SUM(SAL)\nFROM   T\nGROUP BY GROUPING SETS( ROLLUP(A), B );\n```",
    "options": [
      "GROUPING SETS(A, B)",
      "GROUPING SETS((A, B), ())",
      "GROUPING SETS((A, B), (A))",
      "GROUPING SETS(A, B, ())"
    ],
    "correctIndex": 3,
    "explanation": "ROLLUP(A) 는 (A), () 를 산출하고 여기에 B 를 GROUPING SETS 로 합치면 (A), (B), () 의 세 조합이 된다.",
    "_source": "authored"
  },
  {
    "id": 10267,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 18,
    "title": "아래 데이터와 SQL 의 결과로 옳은 것은?\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"6\">\n  <tr><th>COL1</th><th>COL2</th></tr>\n  <tr><td>NULL</td><td>10</td></tr>\n  <tr><td>10</td><td>10</td></tr>\n  <tr><td>10</td><td>NULL</td></tr>\n</table>\n```sql\nSELECT COL1 * 2 + COL2 * 2 FROM T;\n```",
    "options": [
      "20, 40, 20",
      "NULL, 40, NULL",
      "0, 40, 0",
      "NULL, NULL, NULL"
    ],
    "correctIndex": 1,
    "explanation": "NULL 에 산술 연산을 적용하면 결과가 NULL 이 되므로, NULL 이 포함된 첫 번째·세 번째 행은 NULL 이 반환된다.",
    "_source": "authored"
  },
  {
    "id": 10268,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 19,
    "title": "아래 SQL 의 결과로 적절한 것은?\n```sql\nSELECT NVL(SUM(C1) + SUM(C2), 0) FROM T;\n```",
    "options": [
      "두 컬럼에 NULL 이 있으면 전체 결과가 NULL 이 된다.",
      "첫 번째 컬럼 SUM 만 계산된다.",
      "각 컬럼의 SUM 을 수행한 후 더한 값이 반환된다.",
      "SUM 은 NULL 을 0 으로 변환한다."
    ],
    "correctIndex": 2,
    "explanation": "SUM 은 NULL 값을 자동으로 제외하고 집계하며, 두 집계 값이 더해진 뒤 NVL 로 NULL 시 0 으로 치환된다.",
    "_source": "authored"
  },
  {
    "id": 10269,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 20,
    "title": "두 테이블에 대해 LEFT OUTER JOIN, FULL OUTER JOIN, RIGHT OUTER JOIN 을 각각 수행한 결과 행 수로 옳은 것은?\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"6\">\n  <tr><th>T1</th><th>T2</th></tr>\n  <tr><td>1, 2, 3</td><td>3, 4, 5</td></tr>\n</table>",
    "options": [
      "3, 3, 3",
      "5, 5, 5",
      "3, 5, 3 (LEFT 3, FULL 5, RIGHT 3)",
      "3, 5, 4"
    ],
    "correctIndex": 2,
    "explanation": "T1과 T2는 공통 값 3 하나로 매칭된다. LEFT OUTER JOIN은 T1 기준 3건(1, 2, 3), RIGHT OUTER JOIN은 T2 기준 3건(3, 4, 5), FULL OUTER JOIN은 매칭 1건 + T1 미매칭 2건 + T2 미매칭 2건으로 5건이 된다.",
    "_source": "authored"
  },
  {
    "id": 10270,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 21,
    "title": "아래 SQL 의 결과 행 수는?\n```sql\nSELECT COUNT(*)\nFROM   T1\nLEFT  OUTER JOIN T2 ON T1.ID = T2.ID\nLEFT  OUTER JOIN T3 ON T2.ID = T3.ID\nINNER JOIN T4 ON T3.ID = T4.ID;\n```",
    "options": [
      "1 건",
      "3 건",
      "0 건",
      "매칭되지 않는 모든 T1 행"
    ],
    "correctIndex": 0,
    "explanation": "마지막 INNER JOIN 이 이전까지의 OUTER JOIN 결과 중 T4 와 매칭되는 행만 남기므로 최종 1 건이 반환된다.",
    "_source": "authored"
  },
  {
    "id": 10271,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 22,
    "title": "아래 SQL 의 결과로 옳은 것은?\n```sql\nSELECT REGEXP_INSTR('12345678', '(123)(4(56)(78))', 1, 1, 0, 'i', 2)\nFROM DUAL;\n```",
    "options": [
      "1",
      "4",
      "5",
      "7"
    ],
    "correctIndex": 1,
    "explanation": "두 번째 캡처 그룹 '(4(56)(78))' 이 시작되는 위치인 4 를 반환한다.",
    "_source": "authored"
  },
  {
    "id": 10272,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 23,
    "title": "아래 두 REGEXP_SUBSTR 함수의 결과로 옳은 것은?\n```sql\nSELECT REGEXP_SUBSTR('abcd', 'b\\*c') AS COL1,\n       REGEXP_SUBSTR('abcd', 'b*c')  AS COL2\nFROM DUAL;\n```",
    "options": [
      "bc, bc",
      "NULL, bc",
      "bc, NULL",
      "NULL, NULL"
    ],
    "correctIndex": 1,
    "explanation": "첫 번째는 'b*c' 를 리터럴로 해석(b, *, c 가 연속)하여 매칭되지 않아 NULL 이 된다. 두 번째는 'b*c' 에서 * 가 0회 이상을 의미하므로 'bc' 에 매칭된다.",
    "_source": "authored"
  },
  {
    "id": 10273,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 24,
    "title": "아래 계층형 질의에서 순방향(부모 → 자식) 전개가 되도록 CONNECT BY 절을 완성하는 것은?\n```sql\nSELECT 사원번호, 관리자번호\nFROM   EMP\nSTART WITH 관리자번호 IS NULL\nCONNECT BY PRIOR ( ? ) = ( ? );\n```",
    "options": [
      "PRIOR 사원번호 = 관리자번호",
      "PRIOR 관리자번호 = 사원번호",
      "사원번호 = 관리자번호",
      "PRIOR 사원번호 = PRIOR 관리자번호"
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10274,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 25,
    "title": "아래 SQL 의 결과로 옳은 것은?\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"6\">\n  <tr><th>ID</th><th>VAL</th></tr>\n  <tr><td>1</td><td>40</td></tr>\n  <tr><td>2</td><td>150</td></tr>\n</table>\n```sql\nSELECT *\nFROM   (SELECT ID, VAL, ROW_NUMBER() OVER (ORDER BY VAL DESC) AS RN\n        FROM   T)\nORDER BY RN;\n```",
    "options": [
      "1, 40 / 2, 150",
      "2, 150 / 1, 40",
      "1, 40 / 1, 40",
      "2, 150 / 2, 150"
    ],
    "correctIndex": 1,
    "explanation": "내부 쿼리에서 VAL DESC 기준 RN=1이 (2, 150), RN=2가 (1, 40)으로 부여된다. 외부 ORDER BY RN은 오름차순이므로 RN=1인 (2, 150)이 먼저 출력되고 RN=2인 (1, 40)이 뒤에 출력된다.",
    "_source": "authored"
  },
  {
    "id": 10275,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 26,
    "title": "아래 로그인 관련 쿼리 설명 중 적절하지 않은 것은?",
    "options": [
      "5일간 하루 3회 로그인한 경우 전체 로그인 건수는 15회이다.",
      "ORDER BY ALIAS1, ALIAS2 형태의 SQL 은 정상적으로 동작한다.",
      "ORDER BY 절에는 SELECT 절에 사용한 별칭을 참조할 수 없다.",
      "DISTINCT 사용 시 중복된 로그인 이력은 하나로 집계된다."
    ],
    "correctIndex": 2,
    "explanation": "ORDER BY 절은 SELECT 절 이후에 평가되므로 별칭을 참조할 수 있다.",
    "_source": "authored"
  },
  {
    "id": 10276,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 27,
    "title": "컬럼 별칭(ALIAS) 에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "AS 키워드는 생략할 수 있다.",
      "공백이 포함된 별칭은 큰따옴표로 감싼다.",
      "컬럼 앞에도 별칭을 붙일 수 있다.",
      "ORDER BY 절에서 별칭을 참조할 수 있다."
    ],
    "correctIndex": 2,
    "explanation": "컬럼 별칭은 컬럼 뒤에만 작성할 수 있다.",
    "_source": "authored"
  },
  {
    "id": 10277,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 28,
    "title": "아래 WHERE 절의 결과 행 수로 옳은 것은?\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"6\">\n  <tr><th>고객번호</th><th>등급</th><th>지역</th></tr>\n  <tr><td>XX</td><td>1</td><td>서울</td></tr>\n  <tr><td>XX</td><td>2</td><td>부산</td></tr>\n  <tr><td>YY</td><td>1</td><td>서울</td></tr>\n  <tr><td>XX</td><td>1</td><td>서울</td></tr>\n  <tr><td>YY</td><td>1</td><td>서울</td></tr>\n</table>\n```sql\nSELECT *\nFROM   T\nWHERE  고객번호 = 'XX' OR 고객번호 = 'YY'\nAND    등급 = 1\nAND    지역 = '서울';\n```",
    "options": [
      "5건",
      "3건",
      "2건",
      "1건"
    ],
    "correctIndex": 0,
    "explanation": "AND가 OR보다 우선하므로 `(고객번호='YY' AND 등급=1 AND 지역='서울') OR 고객번호='XX'`로 평가된다. 고객번호='XX'인 세 건(1·2·4행)과 YY이면서 등급=1·서울인 두 건(3·5행)이 모두 조건을 만족하여 최종 5건이 반환된다.",
    "_source": "authored"
  },
  {
    "id": 10278,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 29,
    "title": "'홍길동' 의 자식의 자식 노드를 셀프 조인으로 조회하는 SQL 로 옳은 것은?",
    "options": [
      "`SELECT C.EMPNO, C.ENAME, C.MGR FROM EMP A, EMP B, EMP C WHERE A.ENAME='홍길동' AND B.MGR=A.EMPNO AND C.MGR=B.EMPNO;`",
      "`SELECT A.EMPNO, A.ENAME FROM EMP A WHERE A.ENAME='홍길동';`",
      "`SELECT B.EMPNO, B.ENAME FROM EMP A, EMP B WHERE A.ENAME='홍길동' AND B.MGR=A.EMPNO;`",
      "`SELECT * FROM EMP WHERE MGR = '홍길동';`"
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10279,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 30,
    "title": "아래 네 가지 JOIN SQL 중 결과가 다른 것은?",
    "options": [
      "`INNER JOIN DEPT B ON (DEPT_NO)` — 오류가 발생하는 구문",
      "`INNER JOIN DEPT B ON A.DEPT_NO = B.DEPT_NO`",
      "`INNER JOIN DEPT B USING (DEPT_NO)`",
      "`NATURAL JOIN DEPT B`"
    ],
    "correctIndex": 0,
    "explanation": "ON 절에는 컬럼 비교식이 와야 하며, USING 절과는 다르게 컬럼명만 지정할 수 없다.",
    "_source": "authored"
  },
  {
    "id": 10280,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 31,
    "title": "계약이 없는 고객을 조회하는 SQL 로 적절한 것은?",
    "options": [
      "`INNER JOIN`",
      "`EXISTS`",
      "`NOT EXISTS`",
      "`COALESCE`"
    ],
    "correctIndex": 2,
    "explanation": "계약 테이블에 매칭되는 행이 없는 고객만 선택해야 하므로 NOT EXISTS 구문이 적절하다.",
    "_source": "authored"
  },
  {
    "id": 10281,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 32,
    "title": "아래 ERD 를 해석한 내용으로 옳은 것은?\n```\n[ 고객 ] ||-----∈ [ 계약 ] ||-----∈ [ 상세내용 ]\n```",
    "options": [
      "고객과 상세내용을 조인한 결과 건수는 고객 수와 같다.",
      "고객과 상세내용을 조인한 결과 건수는 상세내용 건수와 같다.",
      "계약이 없는 고객은 결과에서 제외되지 않는다.",
      "상세내용은 고객 없이도 존재할 수 있다."
    ],
    "correctIndex": 1,
    "explanation": "1:M 연쇄 관계에서 상세내용 기준 조인 시 상세내용 행 수만큼 출력된다.",
    "_source": "authored"
  },
  {
    "id": 10282,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 33,
    "title": "아래 SQL 결과의 컬럼명으로 옳은 것은?\n```sql\nSELECT COL1 AS AAB, COL2 AS BBA\nFROM   T\nUNION ALL\nSELECT COL1 AS BBA, COL2 AS AAB\nFROM   T;\n```",
    "options": [
      "AAB, BBA",
      "BBA, AAB",
      "COL1, COL2",
      "첫 번째 SELECT 별칭만 유효"
    ],
    "correctIndex": 0,
    "explanation": "UNION 계열 쿼리의 결과 컬럼명은 첫 번째 SELECT 절의 별칭을 기준으로 결정된다.",
    "_source": "authored"
  },
  {
    "id": 10283,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 34,
    "title": "3회 이상 주문한 고객을 조회하는 HAVING 절로 옳은 것은?\n```sql\nSELECT 고객ID\nFROM   주문\nGROUP BY 고객ID\nHAVING ( ? );\n```",
    "options": [
      "HAVING COUNT(구매번호) >= 3",
      "HAVING SUM(구매번호) >= 3",
      "WHERE COUNT(구매번호) >= 3",
      "HAVING 구매번호 = 3"
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10284,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 35,
    "title": "아래 SQL 중 오류가 발생하는 문장은?\n```sql\nCREATE TABLE SQLD_55_34_01 (\n  COL1 VARCHAR2(50),\n  COL2 NUMBER,\n  COL3 VARCHAR2(50),\n  CONSTRAINT PK_01 PRIMARY KEY (COL1)\n);\nCREATE TABLE SQLD_55_34_02 (\n  COL4 VARCHAR2(50),\n  COL5 NUMBER,\n  COL1 VARCHAR2(50),\n  CONSTRAINT PK_02 PRIMARY KEY (COL4),\n  CONSTRAINT FK_02_01 FOREIGN KEY (COL1) REFERENCES SQLD_55_34_01(COL1)\n);\n-- (1) INSERT INTO SQLD_55_34_01 VALUES ('A', 100, '가');\n-- (2) INSERT INTO SQLD_55_34_02 VALUES ('02_A', 100, NULL);\n-- (3) INSERT INTO SQLD_55_34_02 VALUES ('02_B', 200, 'A');\n-- (4) UPDATE SQLD_55_34_02 SET COL1 = 'B' WHERE COL4 = '02_A';\n```",
    "options": [
      "(1)",
      "(2)",
      "(3)",
      "(4)"
    ],
    "correctIndex": 3,
    "explanation": "SQLD_55_34_01 에 'B' 키가 없으므로 외래키 무결성 제약조건 위반 오류(ORA-02291) 가 발생한다.",
    "_source": "authored"
  },
  {
    "id": 10285,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 36,
    "title": "아래 SQL 수행 후 출력되는 SQL 의 조합으로 옳은 것은?\n```sql\n(가) SQL1 ...\nSAVEPOINT A;\n(나) SQL2 ...\nSAVEPOINT B;\n(다) SQL3 ...\nROLLBACK TO SAVEPOINT A;\n(라) SQL4 ...\n(마) SQL5 ...\nCOMMIT;\n```",
    "options": [
      "가, 라, 마",
      "가, 나, 라, 마",
      "가, 나, 다, 라, 마",
      "가, 마"
    ],
    "correctIndex": 0,
    "explanation": "ROLLBACK TO SAVEPOINT A 는 (나)·(다) 의 변경을 취소한다. (가) 와 이후 실행된 (라)·(마) 만 COMMIT 으로 최종 반영된다.",
    "_source": "authored"
  },
  {
    "id": 10286,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 37,
    "title": "ORDER BY 절에서 NULL 값이 포함된 경우의 기본 정렬 동작으로 옳은 것은?",
    "options": [
      "ASC 시 NULLS FIRST, DESC 시 NULLS LAST",
      "ASC 시 NULLS LAST, DESC 시 NULLS FIRST",
      "ASC·DESC 모두 NULLS FIRST",
      "ASC·DESC 모두 NULLS LAST"
    ],
    "correctIndex": 1,
    "explanation": "Oracle 의 기본 정렬 규칙이다.",
    "_source": "authored"
  },
  {
    "id": 10287,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 38,
    "title": "ROW LIMITING 구문에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "OFFSET offset : 건너뛸 행의 개수를 지정한다.",
      "FETCH : 반환할 행의 개수나 백분율을 지정한다.",
      "ONLY : 지정된 행의 개수나 백분율만큼만 반환한다.",
      "WITH TIES : 첫 번째 행에 대한 동순위를 포함해서 반환한다."
    ],
    "correctIndex": 3,
    "explanation": "WITH TIES 는 '마지막 행' 과 동일 정렬 값을 가진 행들을 함께 반환하는 옵션이다.",
    "_source": "authored"
  },
  {
    "id": 10288,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 39,
    "title": "집계 함수에 대한 설명 중 적절하지 않은 것은?",
    "options": [
      "SUM, AVG, MIN, MAX 는 NULL 값을 제외하고 집계한다.",
      "COUNT(expr) 은 NULL 값을 포함하여 집계한다.",
      "COUNT(*) 는 NULL 을 포함한 전체 행의 수를 반환한다.",
      "GROUP BY 없이 단일 집계 함수를 사용하면 전체 테이블에 대한 집계가 된다."
    ],
    "correctIndex": 1,
    "explanation": "COUNT(expr) 은 NULL 을 제외하고 집계한다.",
    "_source": "authored"
  },
  {
    "id": 10289,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 40,
    "title": "전체 합계와 부서별 합계를 함께 출력하는 윈도우 함수 조합으로 옳은 것은?",
    "options": [
      "`SUM(SAL) OVER (), SUM(SAL) OVER (PARTITION BY DEPT)`",
      "`SUM(SAL) OVER (PARTITION BY DEPT), SUM(SAL) OVER ()`",
      "`SUM(SAL) OVER (ORDER BY DEPT), SUM(SAL) OVER ()`",
      "`SUM(SAL), SUM(SAL) OVER (PARTITION BY DEPT)`"
    ],
    "correctIndex": 0,
    "explanation": "OVER() 는 전체 합계, OVER(PARTITION BY DEPT) 는 부서별 합계를 반환한다.",
    "_source": "authored"
  },
  {
    "id": 10290,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 41,
    "title": "SQL 집합 연산자 UNION ALL 과 의미가 동일한 조합은?",
    "options": [
      "UNION + INTERSECT",
      "UNION + UNION",
      "INTERSECT + MINUS",
      "UNION - MINUS"
    ],
    "correctIndex": 0,
    "explanation": "원본 기출의 정답 표기를 보존한다.",
    "_source": "authored"
  },
  {
    "id": 10291,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 42,
    "title": "아래 SQL 의 결과로 옳은 것은?\n```sql\n-- (1) SELECT COL1/COL2 FROM T WHERE COL1=0   AND COL2=300;\n-- (2) SELECT COL1/COL2 FROM T WHERE COL1=300 AND COL2=0;\n-- (3) SELECT COL1/COL2 FROM T WHERE COL1=100 AND COL2 IS NULL;\n```",
    "options": [
      "0, 0, 0",
      "0, ERROR, NULL",
      "NULL, ERROR, 0",
      "0, NULL, ERROR"
    ],
    "correctIndex": 1,
    "explanation": "(1) 은 0/300=0, (2) 는 0 으로 나누기 오류(ORA-01476), (3) 은 NULL 연산 결과로 NULL 이 반환된다.",
    "_source": "authored"
  },
  {
    "id": 10292,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 43,
    "title": "테이블 구조는 유지한 채 행만 삭제하는 명령어로 적절한 것은?",
    "options": [
      "DELETE, TRUNCATE",
      "DROP, DELETE",
      "TRUNCATE, DROP",
      "UPDATE, DELETE"
    ],
    "correctIndex": 0,
    "explanation": "DROP 은 테이블 구조까지 삭제하므로 해당되지 않는다.",
    "_source": "authored"
  },
  {
    "id": 10293,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 44,
    "title": "아래 과목 목록에서 LIKE '%학' 조건으로 반환되는 행의 개수는?\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"6\">\n  <tr><th>과목</th></tr>\n  <tr><td>물리학</td></tr>\n  <tr><td>수학</td></tr>\n  <tr><td>공학개론</td></tr>\n</table>\n```sql\nSELECT *\nFROM   수강\nWHERE  과목 LIKE '%학';\n```",
    "options": [
      "1개",
      "2개",
      "3개",
      "0개"
    ],
    "correctIndex": 1,
    "explanation": "'학' 으로 끝나는 과목인 '물리학' 과 '수학' 이 반환된다.",
    "_source": "authored"
  },
  {
    "id": 10294,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 45,
    "title": "NULL 이 아닌 값을 조회하는 조건으로 적절한 것은?",
    "options": [
      "IS NOT NULL",
      "<> NULL",
      "!= NULL",
      "NOT NULL"
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10295,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 46,
    "title": "기존 테이블에 새로운 컬럼을 추가하는 DDL 로 적절한 것은?\n```sql\n-- 직원 테이블에 직장우편번호(OFFI_POST_NUMBER) 컬럼을 추가한다.\n```",
    "options": [
      "CREATE TABLE EMP ADD OFFI_POST_NUMBER VARCHAR2(80);",
      "ALTER TABLE EMP ADD (OFFI_POST_NUMBER VARCHAR2(80));",
      "UPDATE TABLE EMP ADD OFFI_POST_NUMBER VARCHAR2(80);",
      "INSERT INTO EMP (OFFI_POST_NUMBER) VALUES (NULL);"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10296,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 47,
    "title": "참조 무결성을 구현해 주는 키로 적절한 것은?",
    "options": [
      "기본키",
      "외래키",
      "대체키",
      "후보키"
    ],
    "correctIndex": 1,
    "explanation": "개체 무결성은 PRIMARY KEY, 참조 무결성은 FOREIGN KEY, 도메인 무결성은 CHECK 로 구현된다.",
    "_source": "authored"
  },
  {
    "id": 10297,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 48,
    "title": "무결성 제약조건 위배에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "도서관 테이블에 (2, '...') 을 삽입하는 경우 참조 무결성을 위배한다.",
      "PRIMARY KEY 컬럼에 중복 값을 삽입하면 개체 무결성이 위배된다.",
      "CHECK 제약을 벗어난 값이 입력되면 도메인 무결성이 위배된다.",
      "NOT NULL 컬럼에 NULL 이 들어가면 개체 무결성이 위배된다."
    ],
    "correctIndex": 0,
    "explanation": "단독 테이블에 값을 삽입할 때는 개체 무결성이나 도메인 무결성 위배가 더 일반적이며, 참조 무결성은 외래키 참조가 존재해야 성립한다.",
    "_source": "authored"
  },
  {
    "id": 10298,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 49,
    "title": "아래 BETWEEN 조건과 결과가 다른 것은?\n```sql\nSELECT *\nFROM   T\nWHERE  COL1 BETWEEN 날짜(XXXX) AND 날짜(YYYY);\n```",
    "options": [
      "COL1 > 날짜(XXXX) AND COL1 < 날짜(YYYY)",
      "COL1 >= 날짜(XXXX) AND COL1 <= 날짜(YYYY)",
      "NOT (COL1 < 날짜(XXXX) OR COL1 > 날짜(YYYY))",
      "날짜(XXXX) <= COL1 AND COL1 <= 날짜(YYYY)"
    ],
    "correctIndex": 0,
    "explanation": "BETWEEN 은 양 끝점을 포함하므로 부등호가 `>`, `<` 인 조건은 경계값이 빠져 결과가 달라진다.",
    "_source": "authored"
  },
  {
    "id": 10299,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 50,
    "title": "아래 SQL 에 대한 설명으로 적절하지 않은 것은?\n```sql\nSELECT ...\nFROM   EMP\nWHERE  DEPT IN (SELECT DEPT\n                FROM   EMP\n                WHERE  EMPNM IN ('JOHN', 'SMITH'));\n```",
    "options": [
      "IN 절은 다중 행 서브쿼리를 허용한다.",
      "이름이 'JOHN' 인 직원이 두 명이어도 오류가 발생하지 않는다.",
      "서브쿼리 결과로 반환된 DEPT 값 중 하나라도 일치하면 외부 행이 반환된다.",
      "이름이 'JOHN' 인 직원이 두 명일 경우 오류가 발생한다."
    ],
    "correctIndex": 3,
    "explanation": "IN 은 다중 행 서브쿼리를 허용하므로 동명 직원이 다수라도 오류가 발생하지 않는다.",
    "_source": "authored"
  }
];
