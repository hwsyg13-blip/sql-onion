// Auto-generated from PDF + blog + scripts/authored/round-45.json
// 제45회 — 2022년 5월 · 32문항
// ⚠ 직접 편집 금지. 출처별 데이터를 고친 뒤 'node scripts/build-quiz-bank.mjs' 재실행.
import type { QuizQuestion } from '../quizBank';

export const ROUND_45: QuizQuestion[] = [
  {
    "id": 10342,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "1과목",
    "number": 1,
    "title": "데이터 모델링 유의점으로 적절하지 않은 것은?",
    "options": [
      "중복성을 배제한다",
      "비유연성을 지양한다",
      "비일관성을 피한다",
      "성능을 위한 반정규화를 고려한다"
    ],
    "correctIndex": 3,
    "explanation": "모델링 유의점: 중복, 비유연성, 비일관성 배제. 반정규화는 별도 검토 사항",
    "_source": "pdf"
  },
  {
    "id": 10343,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "1과목",
    "number": 2,
    "title": "속성에 대한 설명 중 가장 적절하지 않은 것은? (원금, 예치기간, 이자율, 이자 관리 문제)",
    "options": [
      "이자율은 기본 속성이다",
      "이자는 파생 속성이다",
      "이자와 이자율은 파생 속성이다",
      "원금과 예치기간은 기본 속성이다"
    ],
    "correctIndex": 2,
    "explanation": "이자율은 정의되는 값(기본속성), 이자는 계산된 값(파생속성)",
    "_source": "pdf"
  },
  {
    "id": 10344,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "1과목",
    "number": 3,
    "title": "인스턴스에 대한 설명 중 가장 적절하지 않은 것은?",
    "options": [
      "인스턴스는 엔터티의 하나의 실제 데이터이다",
      "인스턴스는 속성이 없을 수도 있다",
      "같은 엔터티의 인스턴스는 같은 속성을 가진다",
      "인스턴스는 유일하게 식별되어야 한다"
    ],
    "correctIndex": 1,
    "explanation": "인스턴스는 반드시 속성을 가져야 함",
    "_source": "pdf"
  },
  {
    "id": 10345,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "1과목",
    "number": 4,
    "title": "ERD에서 주문은 고객이 없을 수도 있다가 적절하지 않은 이유는?",
    "options": [
      "주문은 반드시 고객이 있어야 한다",
      "고객은 주문이 없어도 된다",
      "주문과 고객은 1:1 관계이다",
      "고객은 여러 주문을 가질 수 없다"
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10346,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "1과목",
    "number": 5,
    "title": "Data Life Cycle이 같을 때가 비식별자 관계 사용 기준이 아닌 이유는?",
    "options": [
      "생명주기가 같으면 식별자 관계를 사용한다",
      "비식별자는 엔터티별 Data Life Cycle을 다르게 관리할 때 사용한다",
      "생명주기는 관계와 무관하다",
      "비식별자는 항상 필수 참여이다"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10347,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "1과목",
    "number": 6,
    "title": "재사용성이 가장 높은 모델링은?",
    "options": [
      "물리적 데이터 모델링",
      "논리적 데이터 모델링",
      "개념적 데이터 모델링",
      "관계형 모델링"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10348,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "1과목",
    "number": 7,
    "title": "파생 속성으로만 선택된 것은?",
    "options": [
      "이름, 나이, 주소",
      "상품번호, 가격, 재고",
      "전화번호, 이메일",
      "최초주문일자, 주문금액, 총주문금액"
    ],
    "correctIndex": 3,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10349,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "1과목",
    "number": 8,
    "title": "1:1, 1:M 관계의 기수성을 나타내는 것은?",
    "options": [
      "관계명",
      "관계차수",
      "관계선택사양",
      "관계유형"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10350,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 9,
    "title": "테이블에 값을 입력하는 명령어는?",
    "options": [
      "SELECT",
      "INSERT",
      "UPDATE",
      "MERGE"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10351,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 10,
    "title": "CEIL, FLOOR, TRUNC, ROUND 중 결과 다른 것은? (CEIL(22.14)=23, 나머지=22)",
    "options": [
      "CEIL",
      "FLOOR",
      "TRUNC",
      "ROUND"
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10352,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 13,
    "title": "데이터 무결성과 관계 없는 것은?",
    "options": [
      "애플리케이션 로직",
      "Trigger",
      "Lock",
      "Constraints"
    ],
    "correctIndex": 2,
    "explanation": "Lock은 병행성 제어. 무결성은 Constraints, Trigger, App 로직으로 구현",
    "_source": "pdf"
  },
  {
    "id": 10353,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 14,
    "title": "다음 중 아래와 같은 집합이 존재 할 때, 집합 A와 B에 대하여 집합연산을 수행한 결과 집합 C가 되는 경우 이용되는 데이터베이스 집합연산은? A = {1, 2, 3, 4} B = {3, 4, 5, 6} C = {3, 4}",
    "options": [
      "Union",
      "Difference",
      "Intersection",
      "Product"
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "blog"
  },
  {
    "id": 10354,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 15,
    "title": "CTAS 특징에 맞지 않는 것은?",
    "options": [
      "컬럼 데이터 타입 복사",
      "NOT NULL 제약 복사",
      "모든 제약조건을 다 가져올 수 있다",
      "AS SELECT로 데이터도 복사"
    ],
    "correctIndex": 2,
    "explanation": "CTAS: NOT NULL만 복사, PK/FK/UNIQUE 등 미복사",
    "_source": "pdf"
  },
  {
    "id": 10355,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 16,
    "title": "가장 첫 번째 값을 반환하는 함수는?",
    "options": [
      "FIRST_VALUE",
      "LAG",
      "LEAD",
      "MIN"
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10356,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 17,
    "title": "소속 사원이 9명 이상인 직급에 대하여, 해당 직급에서 가장 나이가 많은 사원의 모든 정보를 조회하는 SQL로 가장 적절한 것은?",
    "options": [
      "SELECT * FROM 사원 WHERE COUNT(직급) >= 9 ORDER BY 나이 DESC",
      "SELECT * FROM 사원 WHERE 직급 IN (SELECT 직급 FROM 사원 GROUP BY 직급 HAVING COUNT(*) >= 9) ORDER BY 나이 DESC",
      "SELECT * FROM 사원 WHERE (직급, 나이) IN (SELECT 직급, MAX(나이) FROM 사원 GROUP BY 직급 HAVING COUNT(*) >= 9)",
      "SELECT * FROM 사원 GROUP BY 직급 HAVING COUNT(*) >= 9 ORDER BY 나이 DESC"
    ],
    "correctIndex": 2,
    "explanation": "2번은 조건에 맞는 직급의 모든 사원을 나이순으로 정렬할 뿐입니다. 각 직급의 '최고령 사원'만 정확히 발췌하려면 다중열 서브쿼리로 직급별 MAX(나이)와 일치하는 행을 찾아야 합니다.",
    "_source": "authored"
  },
  {
    "id": 10357,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 18,
    "title": "다음 중 COMMIT 후 남아있는 INSERT 문을 모두 고른 것은?\nINSERT 1; SAVEPOINT A; INSERT 2; INSERT 3; ROLLBACK TO SAVEPOINT A; INSERT 4; INSERT 5; COMMIT;",
    "options": [
      "(1, 4, 5)",
      "(1, 2, 3, 4, 5)",
      "(4, 5)",
      "(1, 2, 3)"
    ],
    "correctIndex": 0,
    "explanation": "SAVEPOINT A 이전의 INSERT 1은 유지, SAVEPOINT A 이후의 INSERT 2·3은 ROLLBACK TO SAVEPOINT A로 취소. 이후 INSERT 4·5는 COMMIT으로 확정. 따라서 (1, 4, 5)가 남음.",
    "_source": "authored"
  },
  {
    "id": 10358,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 19,
    "title": "ROLLUP, CUBE, GROUPING SETS 세 가지 함수를 통칭하는 용어로 가장 적절한 것은?",
    "options": [
      "집계 함수 (Aggregate Function)",
      "순위 함수 (Ranking Function)",
      "그룹 함수의 확장 / Grouping 연산자",
      "윈도우 함수 (Window Function)"
    ],
    "correctIndex": 2,
    "explanation": "ROLLUP·CUBE·GROUPING SETS는 GROUP BY 절에서 사용되는 '그룹 함수의 확장' 또는 Grouping 연산자로 분류됩니다. 소계·총계 등 다차원 집계를 한 번에 생성합니다.",
    "_source": "authored"
  },
  {
    "id": 10359,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 20,
    "title": "SUBSTR 결과 다른 것은?",
    "options": [
      "SUBSTR('DATABASE', 7) = 'SE'",
      "SUBSTR('DATABASE', -2) = 'SE'",
      "SUBSTR('DATABASE', 8, -2) = 오류/NULL",
      "SUBSTR('DATABASE', INSTR('DATABASE','S'), 2) = 'SE'"
    ],
    "correctIndex": 2,
    "explanation": "length에 음수는 NULL 반환",
    "_source": "pdf"
  },
  {
    "id": 10360,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 21,
    "title": "아래 테이블에서 RESULT와 같이 COL1=3만 출력되는 SQL의 WHERE 절로 가장 적절한 것은?\n[table1] (1,10)(2,20)(3,30)  [table2] (1,10)(2,20)  [RESULT] COL1=3",
    "options": [
      "WHERE EXISTS (SELECT 1 FROM table2 B WHERE B.COL1 = A.COL1)",
      "WHERE A.COL1 IN (SELECT B.COL1 FROM table2 B)",
      "WHERE NOT EXISTS (SELECT 1 FROM table2 B WHERE B.COL1 = A.COL1)",
      "WHERE A.COL1 = ALL (SELECT B.COL1 FROM table2 B)"
    ],
    "correctIndex": 2,
    "explanation": "table1의 COL1 중 table2에 없는 값(3)만 출력되려면 NOT EXISTS 또는 NOT IN을 사용. NOT EXISTS는 NULL 처리에 안전.",
    "_source": "authored"
  },
  {
    "id": 10361,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 22,
    "title": "테이블 5개일 때 최소 조인 개수는?",
    "options": [
      "3개",
      "4개",
      "5개",
      "6개"
    ],
    "correctIndex": 1,
    "explanation": "N개 테이블 조인 시 최소 (N-1)개 조인 필요",
    "_source": "pdf"
  },
  {
    "id": 10362,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 23,
    "title": "다음 중 A컬럼별 소계와 (A, B)컬럼별 소계, 그리고 전체 총계를 산출하는 GROUP BY 구문으로 적절하지 않은 것은?",
    "options": [
      "GROUP BY GROUPING SETS ((A, B), (A), ())",
      "GROUP BY ROLLUP(A, B)",
      "GROUP BY A, B UNION ALL GROUP BY A UNION ALL SELECT NULL, NULL, SUM(집계컬럼) FROM 테이블",
      "GROUP BY CUBE(A, B)"
    ],
    "correctIndex": 3,
    "explanation": "CUBE(A, B)는 (A, B), (A), (B), () 네 가지 조합의 집계를 모두 생성하므로, 요구사항에 없는 (B)컬럼별 소계까지 포함하게 되어 오답입니다.",
    "_source": "authored"
  },
  {
    "id": 10363,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 24,
    "title": "아래의 SQL결과가 다른 것을 고르시오.(FULL OUTER JOIN의 변환 형태에 대한 문제)",
    "options": [
      "SELECT * FROM A FULL OUTER JOIN B",
      "FULL JOIN",
      "LEFT OUTER JOIN UNION RIGHT OUTER JOIN",
      "LEFT OUTER JOIN UNION ALL RIGHT OUTER JOIN"
    ],
    "correctIndex": 3,
    "explanation": "FULL OUTER JOIN 은 LEFT UNION RIGHT , UNION ALL 은 중복제거 없이 전체출력되므로 다르다.",
    "_source": "blog"
  },
  {
    "id": 10364,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 26,
    "title": "아래의 테이블에 대한 INSERT 구문 수행시 에러가 발생하지 않는 것을 고르시오. CREATE TABLE T1( C1 PRIMARY KEY, C2 NOT NULL, C3 UNIQUE, C4 CHECK (NOT NULL));",
    "options": [
      "INSERT INTO T1 VALUES(NULL, 1, 2, 3);",
      "INSERT INTO T1 VALUES(1, NULL, 2, 3);",
      "INSERT INTO T1 VALUES(1, 2, NULL, 3);",
      "INSERT INTO T1 VALUES(1, 2, 3, NULL);"
    ],
    "correctIndex": 2,
    "explanation": "UNIQUE 에는 NULL이 허용된다.",
    "_source": "blog"
  },
  {
    "id": 10365,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 28,
    "title": "아래 INSERT FIRST 수행 후 TABLE1, TABLE2, TABLE3 각각의 행 수는?\n[TABLE0] N1 = (1, 2, 5)\nINSERT FIRST\n  WHEN N1 >= 2 THEN INTO TABLE1(N1) VALUES(N1)\n  WHEN N1 >= 3 THEN INTO TABLE2(N1) VALUES(N1)\n  ELSE INTO TABLE3 VALUES(N1)\nSELECT N1 FROM TABLE0;",
    "options": [
      "(2, 1, 0)",
      "(2, 0, 1)",
      "(2, 1, 1)",
      "(1, 1, 1)"
    ],
    "correctIndex": 1,
    "explanation": "INSERT FIRST는 가장 먼저 만족한 WHEN만 적용. N1=1 → ELSE(TABLE3). N1=2 → N1>=2 만족, TABLE1. N1=5 → N1>=2 만족(FIRST), TABLE1. 결과: TABLE1=2, TABLE2=0, TABLE3=1.",
    "_source": "authored"
  },
  {
    "id": 10366,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 30,
    "title": "아래의 SQL에서 1건만 출력되는 SQL이 아닌것을 고르시오.",
    "options": [
      "ROWNUM = 1",
      "ROWNUM < 2",
      "ROWNUM <= 2",
      "ROWNUM <= 2-1"
    ],
    "correctIndex": null,
    "explanation": "ROWNUM <= 2 (2건 출력)",
    "_source": "blog"
  },
  {
    "id": 10367,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 31,
    "title": "table3.N1에 NULL이 포함되어 있을 때 아래 SQL의 결과 행 수는?\nSELECT A.N1 FROM table1 A WHERE A.N1 NOT IN (SELECT B.N1 FROM table3 B);",
    "options": [
      "table1의 전체 행",
      "table3의 NULL을 제외한 값과 일치하지 않는 행",
      "결과 없음 (0 rows)",
      "오류 발생"
    ],
    "correctIndex": 2,
    "explanation": "NOT IN 서브쿼리에 NULL이 포함되면 모든 비교가 UNKNOWN이 되어 조건을 만족하는 행이 없음. 즉 0건 반환. (NOT EXISTS는 이 문제가 없음)",
    "_source": "authored"
  },
  {
    "id": 10368,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 32,
    "title": "테이블 T에 포함된 COL1, COL2의 데이터를 합산할 때, 연산 결과가 나머지 셋과 다른 하나는? (단, 두 컬럼 모두 일부 행에 NULL 값을 포함하고 있다.)",
    "options": [
      "SELECT SUM(COL1) + SUM(COL2) FROM T",
      "SELECT NVL(SUM(COL1), 0) + NVL(SUM(COL2), 0) FROM T",
      "SELECT SUM(NVL(COL1, 0)) + SUM(NVL(COL2, 0)) FROM T",
      "SELECT SUM(COL1 + COL2) FROM T"
    ],
    "correctIndex": 3,
    "explanation": "1·2·3번은 개별 컬럼의 합을 먼저 구하므로 각 행의 NULL이 무시된 채 온전한 합산이 이루어집니다. 반면 4번은 단일 행에서 COL1과 COL2 중 하나라도 NULL이면 덧셈 결과가 NULL이 되어 총합에서 누락되므로 결과값이 확연히 달라집니다.",
    "_source": "authored"
  },
  {
    "id": 10369,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 33,
    "title": "아래의 SQL결과 중 다른 것을 고르시오. (OR 조건과 UNION ALL 변환에서 OR 조건에서 사용된 컬럼이 다를 경우의 결과 문제) [TABLE1] COL1 COL2 ----------- A a B b C c",
    "options": [
      "SELECT COL1 FROM TABLE1 WHERE COL1 IN ('A','B') OR COL2 <> 'c';",
      "SELECT COL1 FROM TABLE1 WHERE COL1 IN ('A','B')",
      "SELECT COL1 FROM TABLE1 WHERE COL1 IN ('A','B')",
      "SELECT COL1 FROM TABLE1 WHERE COL1 = 'A' OR COL1 = 'B' OR COL2 <> 'c';"
    ],
    "correctIndex": 1,
    "explanation": "UNION ALL 로 인해 ABAB로 값이 출력됨",
    "_source": "blog"
  },
  {
    "id": 10370,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 34,
    "title": "아래의 SQL중 결과가 다른 것은? ( OR, IN, AND 의 변형에 대한 문제)",
    "options": [
      "SELECT*FROM SQLD49 WHERE V1 = 'A' AND V2 IN ('T1','T2','T3');",
      "SELECT*FROM SQLD49 WHERE V1 = 'A' AND V2='T1' OR V2='T2' OR V2='T3';",
      "SELECT*FROM SQLD49 WHERE (V1,V2) IN (('A','T1'),('A','T2'),('A','T3'));",
      "SELECT*FROM SQLD49 WHERE V1 = 'A' AND (V2 = 'T1' OR V2 = 'T2' OR V2 = 'T3');"
    ],
    "correctIndex": 1,
    "explanation": "OR 을 기준으로 모두 출력된다. ( 4번같은경우는 괄호로 묶어져있어서 다름) SELECT*FROM SQLD49 WHERE V1 = 'A' AND V2 IN ('T1','T2','T3'); N1 V1 V2 ----------- 1 A T1 SQL> SELECT*FROM SQLD49 WHERE V1 = 'A' AND V2='T1' OR V2='T2' OR V2='T3'; N1 V1 V2 ----------- 1 A T1 2 B T2 3 T3 SQL> SELECT*FROM SQLD49 WHERE (V1,V2) IN (('A','T1'),('A','T2'),('A','T3')); N1 V1 V2 ----------- 1 A T1 SQL> SELECT*FROM SQLD49 WHERE V1 = 'A' AND (V2 = 'T1' OR V2 = 'T2' OR V2 = 'T3'); N1 V1 V2 ----------- 1 A T1",
    "_source": "blog"
  },
  {
    "id": 10371,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 35,
    "title": "아래의 테이블 구조를 참고하여, 수강한 과목 중 학점이 4.0 이상인 과목이 하나라도 존재하는 학생의 이름을 조회하는 SQL로 가장 적절한 것은?\n[테이블 구조] 학생(학번, 이름), 수강(학번, 과목명, 학점)",
    "options": [
      "SELECT 이름 FROM 학생 WHERE 학점 >= 4.0",
      "SELECT 이름 FROM 학생 s, 수강 r WHERE s.학번 = r.학번 GROUP BY 이름 HAVING MAX(학점) >= 4.0",
      "SELECT 이름 FROM 학생 s, 수강 r WHERE s.학번 = r.학번 GROUP BY s.학번, 이름 HAVING MAX(r.학점) >= 4.0",
      "SELECT 이름 FROM 학생 s, 수강 r WHERE s.학번 = r.학번 AND 학점 >= 4.0 GROUP BY 과목명"
    ],
    "correctIndex": 2,
    "explanation": "'학점' 정보가 수강 테이블에 있으므로 조인이 필수. 동명이인을 구분하기 위해 이름이 아닌 고유 식별자인 '학번'을 기준으로 그룹화한 뒤, 그 그룹의 최고 학점이 4.0 이상인지 판별하는 3번이 가장 정확한 구문입니다.",
    "_source": "authored"
  },
  {
    "id": 10372,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 36,
    "title": "WHERE 1=2 결과는?",
    "options": [
      "전체 데이터 반환",
      "오류 발생",
      "결과값 없음(no rows selected)",
      "NULL"
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10373,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 37,
    "title": "WHERE절 서브쿼리 설명 중 적절하지 않은 것은?",
    "options": [
      "서브쿼리는 메인쿼리에 조건값을 제공한다",
      "스칼라 서브쿼리는 1행 1열 반환",
      "메인쿼리 결과는 항상 서브쿼리를 따른다",
      "서브쿼리는 독립적으로 실행 가능"
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "pdf"
  }
];
