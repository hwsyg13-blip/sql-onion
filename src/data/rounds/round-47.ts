// Auto-generated from PDF + blog + scripts/authored/round-47.json
// 제47회 — 2022년 11월 · 50문항
// ⚠ 직접 편집 금지. 출처별 데이터를 고친 뒤 'node scripts/build-quiz-bank.mjs' 재실행.
import type { QuizQuestion } from '../quizBank';

export const ROUND_47: QuizQuestion[] = [
  {
    "id": 10650,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "1과목",
    "number": 1,
    "title": "아래 설명에 해당하는 데이터 모델링 관점은?",
    "options": [
      "데이터 관점",
      "데이터와 프로세스 관점",
      "프로세스 관점",
      "보안 관점"
    ],
    "correctIndex": 1,
    "explanation": "업무가 처리하는 일의 방법에 따라 데이터가 어떻게 영향을 받는지 모델링한다.",
    "_source": "authored"
  },
  {
    "id": 10651,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "1과목",
    "number": 2,
    "title": "아래 ERD 해석 중 옳지 않은 것은? (고객은 여러 서비스를 이용하며 동일 서비스를 재이용할 수 있다.)",
    "options": [
      "고객과 서비스는 M:N 관계이다.",
      "서비스이용 엔터티가 중간 엔터티로 존재한다.",
      "서비스이용은 재사용할 수 없도록 제약되어 있다.",
      "같은 서비스의 재이용 이력이 별도 행으로 구분된다."
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10652,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "1과목",
    "number": 3,
    "title": "파생속성에 해당하는 예로 적절한 것은?",
    "options": [
      "회원 ID",
      "생년월일",
      "상품 단가",
      "상품 총금액 (단가 × 수량)"
    ],
    "correctIndex": 3,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10653,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "1과목",
    "number": 4,
    "title": "아래 설명에 해당하는 정규형은?",
    "options": [
      "제1정규형",
      "제2정규형",
      "제3정규형",
      "BCNF"
    ],
    "correctIndex": 2,
    "explanation": "엔터티의 일반 속성 간에는 서로 종속적이지 않아야 한다.",
    "_source": "authored"
  },
  {
    "id": 10654,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "1과목",
    "number": 5,
    "title": "주식별자의 특징으로 적절하지 않은 것은?",
    "options": [
      "주식별자가 지정되면 NULL 값을 허용해도 된다.",
      "최소성을 만족해야 한다.",
      "유일성을 만족해야 한다.",
      "자주 변경되지 않아야 한다."
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10655,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "1과목",
    "number": 6,
    "title": "슈퍼-서브 타입 구조에서 개별 테이블의 접근이 매우 많을 때 가장 적절한 설계는?",
    "options": [
      "Single Table",
      "One To One",
      "Plus",
      "Sub Only"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10656,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "1과목",
    "number": 7,
    "title": "회원 로그인 빈도가 매우 많고 회원 정보 조회는 1/10 수준일 때 올바른 설계는?",
    "options": [
      "회원 테이블을 그대로 유지한다.",
      "회원 정보를 분리한다.",
      "회원 로그인 로그를 한 테이블에 통합한다.",
      "모든 컬럼을 파티셔닝한다."
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10657,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "1과목",
    "number": 8,
    "title": "성능 모델링에 대한 설명으로 가장 적절한 것은?",
    "options": [
      "반정규화만 수행한다.",
      "정규화 없이 성능 모델만 설계한다.",
      "일반적으로 완전 정규화를 수행한 후 성능을 고려하여 반정규화를 수행한다.",
      "정규화는 성능과 무관하다."
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10658,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "1과목",
    "number": 9,
    "title": "주문번호+상품번호가 PK이고 상품명이 주식별자의 하나에만 종속된 경우, 이 상태가 만족하지 못하는 정규형은?",
    "options": [
      "제1정규형",
      "제2정규형",
      "제3정규형",
      "BCNF"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10659,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "1과목",
    "number": 10,
    "title": "아래 설명에 해당하는 스키마는?",
    "options": [
      "외부 스키마",
      "개념 스키마",
      "내부 스키마",
      "물리 스키마"
    ],
    "correctIndex": 0,
    "explanation": "뷰 단계의 여러 사용자 관점으로 구성되어 개별 사용자가 보는 개인적 DB 스키마이며, 응용 프로그래머가 접근하는 DB 정의이다.",
    "_source": "authored"
  },
  {
    "id": 10660,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 11,
    "title": "ONLINE·OFFLINE 두 컬럼에 대해 첫 번째·두 번째 컬럼 집계와 두 컬럼 조합, 전체 집계가 모두 필요한 SQL 로 적절한 것은?",
    "options": [
      "CUBE(주문일자, 주문방법)",
      "ROLLUP(주문일자, 주문방법)",
      "GROUPING SETS(주문일자, 주문방법)",
      "GROUP BY 주문일자, 주문방법"
    ],
    "correctIndex": 0,
    "explanation": "CUBE 는 지정된 모든 컬럼의 조합에 대한 집계를 반환한다.",
    "_source": "authored"
  },
  {
    "id": 10661,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 12,
    "title": "첫 번째 컬럼 집계, 첫 번째+두 번째 컬럼 집계, 전체 집계가 필요한 SQL 로 적절한 것은?",
    "options": [
      "CUBE(평가항목, 평가)",
      "ROLLUP(평가항목, 평가)",
      "GROUPING SETS((평가항목, 평가), (평가항목), (평가))",
      "GROUP BY 평가항목"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10662,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 13,
    "title": "트랜잭션 특성 설명 중 가장 적절한 것은?",
    "options": [
      "트랜잭션이 성공하면 변경 내용이 영구 저장되는 것을 고립성이라 한다.",
      "ROLLBACK 후에는 데이터 변경 사항이 그대로 유지된다.",
      "COMMIT 으로만 데이터 무결성이 보장된다.",
      "COMMIT 과 ROLLBACK 을 사용하여 데이터 무결성을 보장할 수 있다."
    ],
    "correctIndex": 3,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10663,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 14,
    "title": "저장 프로시저 관련 설명 중 적절하지 않은 것은?",
    "options": [
      "응용 프로그램 성능을 개선할 수 있다.",
      "네트워크 트래픽을 줄일 수 있다.",
      "프로시저와 트리거 모두에서 COMMIT·ROLLBACK 을 사용할 수 있다.",
      "유저 정의 함수는 반드시 RETURN 이 필요하다."
    ],
    "correctIndex": 2,
    "explanation": "트리거 내부에서는 COMMIT·ROLLBACK 이 허용되지 않는다.",
    "_source": "authored"
  },
  {
    "id": 10664,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 15,
    "title": "SQL 분류에 대한 설명 중 적절하지 않은 것은?",
    "options": [
      "DDL 은 객체 정의를 변경한다.",
      "DCL 은 데이터베이스 구동과 종료를 수행한다.",
      "DML 은 데이터 조작을 수행한다.",
      "TCL 은 트랜잭션을 제어한다."
    ],
    "correctIndex": 1,
    "explanation": "DCL 은 권한 부여·회수를 담당하며 DB 구동·종료와 무관하다.",
    "_source": "authored"
  },
  {
    "id": 10665,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 16,
    "title": "테이블 조인 시 매칭되지 않는 행까지 포함하여 조회하는 조인은?",
    "options": [
      "INNER JOIN",
      "NATURAL JOIN",
      "CROSS JOIN",
      "OUTER JOIN"
    ],
    "correctIndex": 3,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10666,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 17,
    "title": "번호가 없으면 1을 반환하고 있으면 MAX(번호)+1 을 반환하는 SQL 로 동일한 결과의 쿼리는?\n```sql\nSELECT NVL(MAX(번호), 1) + 1 FROM T;\n```",
    "options": [
      "SELECT COALESCE(MAX(번호), 1) FROM T;",
      "SELECT COALESCE(MAX(번호) + 1, 1) FROM T;",
      "SELECT NVL(MAX(번호) + 1, 0) FROM T;",
      "SELECT NULLIF(MAX(번호), 1) FROM T;"
    ],
    "correctIndex": 1,
    "explanation": "NVL(MAX(번호), 1) + 1 과 COALESCE(MAX(번호)+1, 1) 은 동일한 결과를 반환한다.",
    "_source": "authored"
  },
  {
    "id": 10667,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 18,
    "title": "아래 데이터에 대해 이전 행 값을 반환하는 윈도우 함수는?",
    "options": [
      "SUM",
      "ROW_NUMBER",
      "LEAD",
      "LAG"
    ],
    "correctIndex": 3,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10668,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 19,
    "title": "아래 두 테이블 조인 결과가 나머지와 다른 SQL 은?",
    "options": [
      "FROM A NATURAL JOIN B",
      "FROM A JOIN B USING(SRN_NO)",
      "FROM A INNER JOIN B",
      "FROM A, B WHERE A.SRN_NO = B.SRN_NO"
    ],
    "correctIndex": 2,
    "explanation": "ON 절이 없는 INNER JOIN 은 Oracle 에서 구문 오류이거나 CROSS JOIN 과 유사한 결과가 된다.",
    "_source": "authored"
  },
  {
    "id": 10669,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 20,
    "title": "아래 네 조인 중 결과 행 수가 잘못 매칭된 것은?",
    "options": [
      "INNER JOIN: 매칭 행만 반환",
      "LEFT OUTER JOIN: 좌측 전체 + 매칭",
      "RIGHT OUTER JOIN: 우측 전체 + 매칭",
      "FULL OUTER JOIN: 양쪽 매칭 행만 반환"
    ],
    "correctIndex": 3,
    "explanation": "FULL OUTER JOIN 은 LEFT JOIN 결과와 RIGHT JOIN 결과의 합집합을 반환한다.",
    "_source": "authored"
  },
  {
    "id": 10670,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 21,
    "title": "계층형 쿼리 설명 중 적절하지 않은 것은?",
    "options": [
      "START WITH 는 시작 행을 지정한다.",
      "CONNECT BY 는 계층 관계를 지정한다.",
      "WHERE 절 조건은 계층 전개 이전에 적용된다.",
      "ORDER SIBLINGS BY 는 동일 레벨 내 정렬을 수행한다."
    ],
    "correctIndex": 2,
    "explanation": "WHERE 는 계층 전개가 모두 끝난 후 필터로 적용된다.",
    "_source": "authored"
  },
  {
    "id": 10671,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 22,
    "title": "TEAM·PLAYER 테이블에서 아래 SQL 과 다른 결과를 반환하는 것은?\n```sql\nWHERE (TEAM_ID, HEIGHT) IN (SELECT TEAM_ID, MIN(HEIGHT) FROM PLAYER GROUP BY TEAM_ID);\n```",
    "options": [
      "상관 서브쿼리(EXISTS) 중첩",
      "인라인 뷰 조인",
      "JOIN + HAVING",
      "`SELECT ... WHERE EXISTS (SELECT ...)` 만 단독 사용"
    ],
    "correctIndex": 3,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10672,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 23,
    "title": "아래 SQL 이 의미하는 것으로 적절한 것은?\n```sql\nSELECT 팀명\nFROM   팀\nWHERE  팀번호 = (SELECT 팀번호 FROM (SELECT 팀번호, SUM(연봉) AS 총급여 FROM 사원 GROUP BY 팀번호 ORDER BY 2 DESC) WHERE ROWNUM = 1);\n```",
    "options": [
      "팀의 사원 수가 가장 많은 팀",
      "팀의 사원 총 연봉이 가장 높은 팀",
      "팀의 평균 연봉이 가장 높은 팀",
      "팀의 최고 연봉 사원이 속한 팀"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10673,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 24,
    "title": "1~100 데이터에서 10~50 범위를 조회하는 SQL 로 적절한 것은?",
    "options": [
      "WHERE COL IN (10, 50)",
      "WHERE COL = 10 OR COL = 50",
      "WHERE COL BETWEEN 10 AND 50",
      "WHERE COL >= 10 AND COL > 50"
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10674,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 25,
    "title": "내림차순 정렬을 수행하는 SQL 에서 수정이 필요한 부분은?\n```sql\nSELECT ... FROM ... WHERE ... ORDER BY A;  -- A 를 내림차순으로 정렬해야 함\n```",
    "options": [
      "SELECT 절",
      "FROM 절",
      "WHERE 절",
      "ORDER BY 절에 DESC 추가"
    ],
    "correctIndex": 3,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10675,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 26,
    "title": "아래 SQL 의 결과로 옳은 것은?\n```sql\n-- 데이터: GRADE=12, RANK=13\nSELECT CASE WHEN SUM(GRADE + RANK) IS NULL THEN 0\n            ELSE SUM(GRADE + RANK) END\nFROM T;\n```",
    "options": [
      "12",
      "13",
      "25",
      "0"
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10676,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 27,
    "title": "아래 SQL 의 결과 등급은?\n```sql\nSELECT GRADE FROM GRADE_TABLE A,\n  (SELECT MAX(SCORE) AS MAX_SCORE FROM PLAYER) B\nWHERE A.LOWER <= B.MAX_SCORE AND A.UPPER >= B.MAX_SCORE;\n```",
    "options": [
      "GOLD",
      "SILVER",
      "BRONZE",
      "공집합"
    ],
    "correctIndex": 1,
    "explanation": "원본 기출의 정답 표기를 보존한다.",
    "_source": "authored"
  },
  {
    "id": 10677,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 28,
    "title": "아래 집합 연산 SQL 의 결과로 옳은 것은?\n```sql\nSELECT COL1 FROM A\nUNION ALL\nSELECT COL1 FROM B\nMINUS\nSELECT COL1 FROM C;\n```",
    "options": [
      "1, 3, 5",
      "1, 2, 3",
      "2, 4, 6",
      "공집합"
    ],
    "correctIndex": 0,
    "explanation": "MINUS 는 두 집합의 DISTINCT 결과에서 차집합을 반환한다.",
    "_source": "authored"
  },
  {
    "id": 10678,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 29,
    "title": "아래 MERGE 구문 수행 후 결과로 옳은 것은?\n```sql\nMERGE INTO A USING B ON (A.ID = B.ID)\nWHEN MATCHED THEN UPDATE SET A.V = 100\nWHEN NOT MATCHED THEN INSERT (ID, V) VALUES (B.ID, 100);\n```",
    "options": [
      "0, 0, 0",
      "100, 100, 100",
      "NULL, NULL, NULL",
      "오류"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10679,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 30,
    "title": "최대값을 조회하는 SQL 로 옳은 것은?",
    "options": [
      "SELECT MAX(COL) FROM T WHERE ROWNUM = 1;",
      "SELECT * FROM (SELECT ... ORDER BY DESC) WHERE ROWNUM = 1;",
      "ORDER BY DESC WHERE ROWNUM = 1",
      "WHERE ROWNUM = MAX(COL)"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10680,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 31,
    "title": "아래 SQL 의 결과로 옳은 것은?\n```sql\nSELECT MAX(COL1) KEEP (DENSE_RANK FIRST ORDER BY COL2 DESC)\nFROM T;   -- COL2 기준 DESC 정렬 시 첫 값의 COL1 반환\n```\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"6\">\n  <tr><th>COL1</th><th>COL2</th></tr>\n  <tr><td>10</td><td>1</td></tr>\n  <tr><td>20</td><td>1</td></tr>\n</table>",
    "options": [
      "10",
      "15",
      "20",
      "NULL"
    ],
    "correctIndex": 2,
    "explanation": "DESC 정렬 시 COL2=1 그룹 내 MAX(COL1) = 20 이 반환된다.",
    "_source": "authored"
  },
  {
    "id": 10681,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 32,
    "title": "순위 1, 1, 2, 3, 3, 4, 5 와 같이 동순위를 허용하고 연속 순위를 부여하는 함수는?",
    "options": [
      "DENSE_RANK",
      "RANK",
      "ROW_NUMBER",
      "NTILE"
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10682,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 33,
    "title": "파티션 내 전체 SUM 값 대비 각 행의 비율을 소수점으로 반환하는 함수는?",
    "options": [
      "PERCENT_RANK",
      "RATIO_TO_REPORT",
      "CUME_DIST",
      "NTILE"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10683,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 34,
    "title": "집합 연산자 중 교집합을 반환하는 것은?",
    "options": [
      "UNION",
      "UNION ALL",
      "INTERSECT",
      "EXCEPT"
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10684,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 35,
    "title": "NULL 이 아닌 데이터만 조회하는 WHERE 조건은?",
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
    "id": 10685,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 36,
    "title": "아래 SQL 중 오류가 발생하는 것을 모두 고른 것은?",
    "options": [
      "정상 쿼리",
      "`SELECT (SELECT COL1 FROM 상품 B WHERE A.상품ID = B.상품ID) FROM 평가항목 A` — 다중 행 반환으로 오류",
      "`SELECT ... WHERE (SELECT 상품ID FROM 평가항목 ...)` — 평가항목에 상품ID 컬럼이 없어 오류",
      "정상 쿼리"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10686,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 37,
    "title": "CROSS JOIN 에 대한 설명으로 옳은 것은?",
    "options": [
      "한 테이블의 각 행에 대해 다른 테이블의 모든 행과 결합되는 조인이다.",
      "매칭되는 행만 반환한다.",
      "ON 절을 반드시 기술해야 한다.",
      "동일 이름 컬럼으로 자동 조인된다."
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10687,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 38,
    "title": "사원과 차상위 매니저 정보를 함께 조회하는 SQL 로 옳은 것은?",
    "options": [
      "EMP A INNER JOIN EMP B ON A.MGR_NO = B.EMP_NO",
      "EMP A INNER JOIN EMP B ON A.EMP_NO = B.EMP_NO",
      "EMP A LEFT OUTER JOIN EMP B ON A.MGR_NO = B.EMP_NO",
      "EMP A RIGHT OUTER JOIN EMP B ON A.MGR_NO = B.EMP_NO"
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10688,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 39,
    "title": "테이블 A, B, C 가 식별자 관계로 연결된 구조에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "테이블 세 개를 조인하려면 최소 조건은 두 개이다.",
      "식별자 관계는 부모 키가 자식의 PK 에 포함된다.",
      "조인 조건은 최소 3개 이상이어야 한다.",
      "식별자 관계에서는 자식이 부모 없이 존재할 수 없다."
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10689,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 40,
    "title": "아래 네 SQL 중 결과가 나머지와 다른 것은?",
    "options": [
      "LPAD('BCD', 'A', 3)",
      "RTRIM('EBCDE', 'E')",
      "SUBSTR('ABCDE', 2, 3)",
      "CONCAT(CONCAT(NULL, 'BC'), 'E')"
    ],
    "correctIndex": 1,
    "explanation": "RTRIM 은 오른쪽에서 지정된 문자만 제거하며 중간 문자는 유지한다.",
    "_source": "authored"
  },
  {
    "id": 10690,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 41,
    "title": "아래 SQL 의 결과로 옳은 것은? (COL 에 NULL 1건 포함)\n```sql\n-- 데이터: 100, 110, NULL\nSELECT ROUND(AVG(COL)), ROUND(SUM(COL)/COUNT(*)) FROM T;\n```",
    "options": [
      "105, 70",
      "70, 105",
      "100, 100",
      "NULL, NULL"
    ],
    "correctIndex": 0,
    "explanation": "AVG 는 NULL 을 제외해 210/2=105, SUM/COUNT(*) 는 210/3=70 이다.",
    "_source": "authored"
  },
  {
    "id": 10691,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 42,
    "title": "아래 시나리오 중 외래키 참조 무결성 오류가 발생하는 구문은?",
    "options": [
      "주문 테이블에 고객 ID 를 INSERT 할 때 고객 테이블에 있는 ID 로 추가",
      "고객 테이블에 새 고객을 추가한 뒤 주문 추가",
      "주문 테이블에서 고객 ID = 기존 값을 유지한 채 다른 컬럼 업데이트",
      "주문 테이블의 고객 ID 를 고객 테이블에 없는 값으로 업데이트"
    ],
    "correctIndex": 3,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10692,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 43,
    "title": "아래 SQL 의 결과로 옳은 것은?\n```sql\nSELECT COUNT(*) FROM T GROUP BY ID HAVING COUNT(*) >= 2;\n```",
    "options": [
      "조건을 만족하는 그룹이 없으면 공집합",
      "조건을 만족하는 그룹의 수만큼 COUNT 반환",
      "300 인 그룹이 하나 존재하면 1건 반환",
      "HAVING 은 GROUP BY 와 함께 사용할 수 없다."
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10693,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 44,
    "title": "아래 데이터에 대한 AVG 결과로 옳은 것은?\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"6\">\n  <tr><th>COL1</th><th>COL2</th></tr>\n  <tr><td>10</td><td>20</td></tr>\n  <tr><td>0</td><td>NULL</td></tr>\n  <tr><td>10</td><td>0</td></tr>\n</table>\n```sql\nSELECT AVG(COL1), AVG(COL2) FROM T WHERE COL2 IS NOT NULL;\n```",
    "options": [
      "10, 10",
      "10, 0",
      "10, 10 (COL1 평균 = 20/2, COL2 평균 = 20/2)",
      "오류"
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10694,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 45,
    "title": "UNION 에 대한 설명으로 가장 적절한 것은?",
    "options": [
      "UNION ALL 보다 성능이 좋다.",
      "상호 배타적 조건에만 사용된다.",
      "합집합이며 중복 행은 하나로 취급한다.",
      "중복 허용을 기본으로 한다."
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10695,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 46,
    "title": "아래 SQL 의 결과로 옳은 것은?\n```sql\nSELECT SUBSTR('ABCDE', 2) FROM DUAL;\n```",
    "options": [
      "AB",
      "BCDE",
      "CDE",
      "ABCDE"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10696,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 47,
    "title": "사용자를 삭제할 때 해당 사용자에 속한 모든 오브젝트까지 함께 삭제하는 옵션은?\n```sql\nDROP USER user_name (   );\n```",
    "options": [
      "RESTRICT",
      "PURGE",
      "CASCADE",
      "FORCE"
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10697,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 48,
    "title": "아래 SQL 의 빈칸에 들어갈 키워드 조합으로 옳은 것은?\n```sql\nSELECT 부서, SUM(연봉) FROM EMP\n(   ) 부서\nORDER BY SUM(연봉) (   );\n```",
    "options": [
      "GROUP BY, DESC",
      "HAVING, ASC",
      "ORDER BY, DESC",
      "GROUP BY, ASC"
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10698,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 49,
    "title": "아래 SQL 의 결과로 옳은 것은?\n```sql\nSELECT COL1\nFROM (SELECT COL1, ROW_NUMBER() OVER (PARTITION BY 부서 ORDER BY 연봉 DESC) AS RN\n      FROM EMP)\nWHERE RN = 1;\n```",
    "options": [
      "1, 2",
      "3, 3",
      "4, 5",
      "5, 4"
    ],
    "correctIndex": 3,
    "explanation": "원본 기출의 정답 표기를 보존한다.",
    "_source": "authored"
  },
  {
    "id": 10699,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 50,
    "title": "아래 계층형 쿼리의 결과 행 수로 옳은 것은?\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"6\">\n  <tr><th>COL1</th><th>COL2</th></tr>\n  <tr><td>1</td><td>NULL</td></tr>\n  <tr><td>2</td><td>NULL</td></tr>\n  <tr><td>3</td><td>1</td></tr>\n  <tr><td>4</td><td>1</td></tr>\n  <tr><td>5</td><td>2</td></tr>\n  <tr><td>6</td><td>2</td></tr>\n  <tr><td>7</td><td>3</td></tr>\n  <tr><td>8</td><td>4</td></tr>\n  <tr><td>9</td><td>5</td></tr>\n</table>\n```sql\nSELECT COUNT(*) FROM T\nWHERE COL1 <> 4\nSTART WITH COL1 = 1\nCONNECT BY PRIOR COL1 = COL2;\n```",
    "options": [
      "1",
      "2",
      "3",
      "5"
    ],
    "correctIndex": 1,
    "explanation": "1부터 전개한 결과 {1, 3, 4, 7, 8} 중 COL1=4 를 제외하면 {1, 3, 7} 이나, 8 은 4 의 자식이므로 같이 제거되어 최종 2건이 남는다.",
    "_source": "authored"
  }
];
