// Auto-generated from PDF + blog + scripts/authored/round-49.json
// 제49회 — 2023년 6월 · 44문항
// ⚠ 직접 편집 금지. 출처별 데이터를 고친 뒤 'node scripts/build-quiz-bank.mjs' 재실행.
import type { QuizQuestion } from '../quizBank';

export const ROUND_49: QuizQuestion[] = [
  {
    "id": 10540,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "1과목",
    "number": 1,
    "title": "아래 상황에 해당하는 정규화 단계는?",
    "options": [
      "제1정규화",
      "제2정규화",
      "제3정규화",
      "BCNF"
    ],
    "correctIndex": 1,
    "explanation": "식별자 컬럼 간의 부분 함수 종속성을 해결한다.",
    "_source": "authored"
  },
  {
    "id": 10541,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "1과목",
    "number": 2,
    "title": "속성이 가질 수 있는 데이터 값의 범위를 무엇이라 하는가?",
    "options": [
      "관계",
      "식별자",
      "도메인",
      "인스턴스"
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10542,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "1과목",
    "number": 3,
    "title": "주식별자를 구성하는 속성 중 하나라도 제거되면 유일성을 만족하지 못하는 특성은?",
    "options": [
      "대표성",
      "유일성",
      "최소성",
      "불변성"
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10543,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "1과목",
    "number": 4,
    "title": "아래 ERD 해석 중 옳지 않은 것은?\n```\n[ 상품 ]-----+--∘< [ 주문 ]\n```",
    "options": [
      "하나의 주문은 반드시 하나의 상품을 가진다.",
      "하나의 상품은 여러 주문을 가질 수 있다.",
      "하나의 상품은 항상 주문을 가진다.",
      "주문이 없는 상품도 존재할 수 있다."
    ],
    "correctIndex": 2,
    "explanation": "Optional 표기가 있어 주문이 없는 상품도 존재할 수 있으므로 해당 서술은 옳지 않다.",
    "_source": "authored"
  },
  {
    "id": 10544,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "1과목",
    "number": 5,
    "title": "도메인의 특징으로 해당하지 않는 것은?",
    "options": [
      "데이터 타입을 정의한다.",
      "값의 범위(크기) 를 정의한다.",
      "NOT NULL 여부를 정의한다.",
      "FOREIGN KEY 제약 조건을 정의한다."
    ],
    "correctIndex": 3,
    "explanation": "외래키 제약은 테이블 간 참조 관계에서 정의되며 도메인의 속성에 포함되지 않는다.",
    "_source": "authored"
  },
  {
    "id": 10545,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "1과목",
    "number": 6,
    "title": "식별자 관계에 대한 설명으로 옳지 않은 것은?",
    "options": [
      "부모의 주식별자가 자식의 주식별자에 포함된다.",
      "자식 엔터티는 부모 엔터티가 없이 존재할 수 없다.",
      "비식별자 관계는 자식이 독립적으로 존재할 수 있다.",
      "식별자 관계는 자식의 주식별자가 부모로부터 독립되어 있고, 비식별자 관계는 자식의 주식별자가 부모에게 종속되어 있다."
    ],
    "correctIndex": 3,
    "explanation": "설명이 반대로 기술되어 있다. 식별자 관계는 자식의 주식별자가 부모에 종속되고, 비식별자 관계는 독립적이다.",
    "_source": "authored"
  },
  {
    "id": 10546,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "1과목",
    "number": 7,
    "title": "아래 설명에 해당하는 속성은?",
    "options": [
      "기본 속성",
      "설계 속성",
      "파생 속성",
      "관계 속성"
    ],
    "correctIndex": 1,
    "explanation": "업무상 필요한 데이터 이외에 데이터 모델링을 위해 업무를 규칙화하기 위한 속성",
    "_source": "authored"
  },
  {
    "id": 10547,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "1과목",
    "number": 8,
    "title": "아래 설명에 해당하는 엔터티 분류는?",
    "options": [
      "기본 엔터티",
      "중심 엔터티",
      "행위 엔터티",
      "개념 엔터티"
    ],
    "correctIndex": 2,
    "explanation": "두 개 이상의 부모 엔터티로부터 발생되고 자주 내용이 변경되거나 데이터량이 증가하는 엔터티. 분석 초기 단계에서는 잘 나타나지 않으며 상세 설계 단계나 프로세스 상관 모델링 과정에서 드러난다.",
    "_source": "authored"
  },
  {
    "id": 10548,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "1과목",
    "number": 9,
    "title": "다음 중 본질 식별자에 해당하는 예는?",
    "options": [
      "시스템이 부여한 일련번호",
      "자동 증가 숫자(IDENTITY)",
      "주민등록번호",
      "순차 시퀀스"
    ],
    "correctIndex": 2,
    "explanation": "주민등록번호는 업무상 이미 존재하는 값으로 본질 식별자에 해당한다.",
    "_source": "authored"
  },
  {
    "id": 10549,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 11,
    "title": "PLAYER 테이블에서 선수명과 팀명은 오름차순, 연봉은 내림차순으로 조회하는 SQL 로 옳은 것은?",
    "options": [
      "SELECT 선수명, 팀명, 연봉 FROM PLAYER ORDER BY 선수명 DESC, 팀명 DESC, 연봉 ASC;",
      "SELECT 선수명, 팀명, 연봉 FROM PLAYER ORDER BY 선수명 ASC, 팀명, 3 DESC;",
      "SELECT 선수명, 팀명, 연봉 FROM PLAYER ORDER BY 선수명 ASC, 팀명 ASC, 연봉;",
      "SELECT 선수명, 팀명, 연봉 FROM PLAYER ORDER BY 선수명, 팀명, DESC 연봉;"
    ],
    "correctIndex": 1,
    "explanation": "컬럼 번호 3(연봉) 을 DESC 로 지정하고 팀명은 기본 오름차순으로 처리한다.",
    "_source": "authored"
  },
  {
    "id": 10550,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 12,
    "title": "SQL 명령어 분류로 적절하지 않은 것은?",
    "options": [
      "DDL: CREATE, ALTER, DROP",
      "DML: INSERT, UPDATE, DELETE",
      "DCL: GRANT, REVOKE",
      "DML: RENAME"
    ],
    "correctIndex": 3,
    "explanation": "RENAME 은 DDL 에 해당한다.",
    "_source": "authored"
  },
  {
    "id": 10551,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 13,
    "title": "COMMIT 이전 DML 에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "본인 세션에서는 SELECT 로 변경 내용을 조회할 수 있다.",
      "ROLLBACK 으로 변경을 취소할 수 있다.",
      "DDL 수행 시 묵시적 COMMIT 이 발생한다.",
      "다른 유저가 커밋 이전의 변경 내용을 수정할 수 있다."
    ],
    "correctIndex": 3,
    "explanation": "고립성(Isolation) 에 따라 커밋 이전의 변경은 다른 세션이 수정하거나 조회할 수 없다.",
    "_source": "authored"
  },
  {
    "id": 10552,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 14,
    "title": "아래 테이블에 대해 순방향 계층형 쿼리를 구성하는 SQL 로 옳은 것은?\n```\n[EMP] EMP_NO, MANAGER_NO\n```",
    "options": [
      "CONNECT BY PRIOR EMP_NO = MANAGER_NO",
      "CONNECT BY PRIOR MANAGER_NO = EMP_NO",
      "CONNECT BY EMP_NO = MANAGER_NO",
      "CONNECT BY PRIOR EMP_NO = PRIOR MANAGER_NO"
    ],
    "correctIndex": 0,
    "explanation": "PRIOR 자식 = 부모 형태로 부모→자식 순방향 전개가 이루어진다.",
    "_source": "authored"
  },
  {
    "id": 10553,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 15,
    "title": "Oracle NULL 처리 함수의 역할이 올바르게 매칭된 조합은?",
    "options": [
      "A: COALESCE, B: NVL, C: NULLIF",
      "A: NVL, B: NULLIF, C: COALESCE",
      "A: NULLIF, B: COALESCE, C: NVL",
      "A: NVL, B: COALESCE, C: NULLIF"
    ],
    "correctIndex": 1,
    "explanation": "A: 컬럼 값이 NULL 이면 B 를 출력 B: 두 컬럼 값이 같으면 NULL C: 왼쪽부터 NULL 이 아닌 첫 값을 반환",
    "_source": "authored"
  },
  {
    "id": 10554,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 16,
    "title": "아래 SQL 의 실행 결과로 옳은 것은?\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"6\">\n  <tr><th>ID</th></tr>\n  <tr><td>100</td></tr>\n  <tr><td>100</td></tr>\n  <tr><td>200</td></tr>\n  <tr><td>200</td></tr>\n  <tr><td>200</td></tr>\n  <tr><td>999</td></tr>\n  <tr><td>999</td></tr>\n</table>\n```sql\nSELECT ID FROM TBL\nGROUP BY ID\nHAVING COUNT(*) = 2\nORDER BY (CASE WHEN ID = 999 THEN 0 ELSE ID END);\n```",
    "options": [
      "100, 999",
      "999, 100",
      "100, 200, 999",
      "999, 200, 100"
    ],
    "correctIndex": 1,
    "explanation": "CASE 식은 ID=999 일 때 0 을 반환해 999 가 가장 먼저 정렬되고, 이어서 ID=100 이 반환된다.",
    "_source": "authored"
  },
  {
    "id": 10555,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 17,
    "title": "아래 두 테이블에 대해 오류가 발생하는 INNER JOIN SQL 은?\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"6\">\n  <tr><th colspan=\"2\">TEAM</th><th colspan=\"2\">STADIUM</th></tr>\n  <tr><th>ID</th><th>COL1</th><th>ID</th><th>COL2</th></tr>\n  <tr><td>1</td><td>A</td><td>1</td><td>A</td></tr>\n  <tr><td>2</td><td>B</td><td>2</td><td>B</td></tr>\n</table>",
    "options": [
      "SELECT * FROM TEAM A INNER JOIN STADIUM B ON A.ID = B.ID;",
      "SELECT * FROM TEAM A INNER JOIN STADIUM B USING(ID);",
      "SELECT * FROM TEAM A NATURAL JOIN STADIUM B;",
      "SELECT * FROM TEAM A INNER JOIN STADIUM B ON (ID);"
    ],
    "correctIndex": 3,
    "explanation": "ON 절에는 비교식이 와야 하며, USING 절과 달리 컬럼명만 단독으로 지정할 수 없다.",
    "_source": "authored"
  },
  {
    "id": 10556,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 18,
    "title": "아래 SQL 에서 매니저의 연봉이 3,000 이하인 결과를 조회하는 SQL 이 아닌 것은?",
    "options": [
      "EXISTS 조건 사용",
      "IN 조건 사용",
      "INNER JOIN 조건 사용",
      "NOT EXISTS (SELECT 'X' FROM EMP B WHERE A.MGR_NO = B.EMP_NO AND B.SAL > 3000)"
    ],
    "correctIndex": 3,
    "explanation": "NOT EXISTS 는 매니저 연봉이 3,000 초과가 아닌 경우이므로 '이하' 의미와는 다르고 NULL 처리에서도 차이가 발생한다.",
    "_source": "authored"
  },
  {
    "id": 10557,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 19,
    "title": "아래 SQL 결과에 대한 설명으로 옳은 것은?\n```sql\nSELECT A, B FROM T1 WHERE (A, B) IN (SELECT A, B FROM T2);\n```",
    "options": [
      "모든 행 반환",
      "NULL 이 포함된 비교에서는 모든 매칭이 UNKNOWN 이 되어 행이 제외된다.",
      "오류 발생",
      "T2 의 행 수만큼 반환"
    ],
    "correctIndex": 1,
    "explanation": "T2 의 B 값 중 일부가 NULL 이다.",
    "_source": "authored"
  },
  {
    "id": 10558,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 20,
    "title": "회원번호·상품별 집계와 회원번호별 소계, 전체 총계를 함께 산출하려 한다. GROUP BY 절로 적절한 것은?",
    "options": [
      "GROUP BY ROLLUP(회원번호, 상품)",
      "GROUP BY 회원번호, ROLLUP(상품)",
      "GROUP BY CUBE(회원번호, 상품)",
      "GROUP BY GROUPING SETS(회원번호, 상품)"
    ],
    "correctIndex": 1,
    "explanation": "회원번호는 고정 그룹이고 상품 차원에 ROLLUP 을 적용하여 상품별 및 전체 소계를 얻는다.",
    "_source": "authored"
  },
  {
    "id": 10559,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 21,
    "title": "ROLLUP 컬럼 순서에 대한 설명으로 옳은 것은?\n```sql\nGROUP BY ROLLUP(고객등급, 첫번째컬럼, 세번째컬럼)\n```",
    "options": [
      "ROLLUP 에 컬럼 순서는 의미가 없다.",
      "첫 번째 컬럼 기준으로 순차 집계된다.",
      "컬럼 순서에 따라 집계 레벨이 달라진다.",
      "ROLLUP 은 한 번의 집계만 수행한다."
    ],
    "correctIndex": 2,
    "explanation": "ROLLUP 은 좌측부터 점진적으로 집계를 수행하므로 컬럼 순서가 결과에 영향을 미친다.",
    "_source": "authored"
  },
  {
    "id": 10560,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 22,
    "title": "아래 SQL 의 결과로 옳은 것은?\n```sql\nSELECT COUNT(*)\nFROM   ...\nGROUP BY ID\nHAVING COUNT(*) > 3;\n```",
    "options": [
      "데이터가 출력되지 않는다.",
      "0 이 한 행 반환된다.",
      "NULL 이 한 행 반환된다.",
      "오류 발생"
    ],
    "correctIndex": 0,
    "explanation": "HAVING 조건을 만족하는 그룹이 없는 상태 GROUP BY 가 지정된 쿼리는 조건을 만족하는 그룹이 없으면 공집합을 반환한다.",
    "_source": "authored"
  },
  {
    "id": 10561,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 23,
    "title": "회원별 총 주문 금액이 가장 큰 1건을 조회하는 SQL 로 옳은 것은?",
    "options": [
      "SELECT 회원번호, SUM(주문금액) FROM 주문 GROUP BY 회원번호 ORDER BY 2 DESC LIMIT 1;",
      "SELECT * FROM (SELECT 회원번호, SUM(주문금액) AS 총주문금액 FROM 주문 GROUP BY 회원번호 ORDER BY 2 DESC) WHERE ROWNUM = 1;",
      "SELECT 회원번호 FROM 주문 WHERE ROWNUM = 1 ORDER BY 주문금액 DESC;",
      "SELECT TOP 1 * FROM 주문 ORDER BY 주문금액 DESC;"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10562,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 24,
    "title": "아래 결과를 반환하는 윈도우 함수로 옳은 것은?\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"6\">\n  <tr><th>COL1</th><th>LAG</th></tr>\n  <tr><td>100</td><td>0</td></tr>\n  <tr><td>200</td><td>100</td></tr>\n  <tr><td>300</td><td>200</td></tr>\n</table>",
    "options": [
      "LEAD(COL1, 1, 0) OVER(ORDER BY COL1)",
      "LAG(COL1, 1, NULL) OVER(ORDER BY COL1)",
      "LAG(COL1, 1, 0) OVER(ORDER BY COL1)",
      "FIRST_VALUE(COL1) OVER(ORDER BY COL1)"
    ],
    "correctIndex": 2,
    "explanation": "LAG 함수의 세 번째 인자로 기본값 0 을 지정하여 첫 행에 0 이 반환된다.",
    "_source": "authored"
  },
  {
    "id": 10563,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 25,
    "title": "아래 SQL 에서 RANK 함수의 순위 부여 결과로 옳은 것은?\n```sql\nSELECT 고객명, 매출액,\n       RANK() OVER(ORDER BY 매출액 DESC) AS 순위\nFROM   ...;\n```",
    "options": [
      "700,700,550,350,350 순위가 1,1,3,4,4 가 된다.",
      "700,700,550,350,350 순위가 1,1,2,3,3 이 된다.",
      "700,700,550,350,350 순위가 1,2,3,4,5 로 모두 다르다.",
      "700,700,550,350,350 순위가 1,2,2,3,3 이 된다."
    ],
    "correctIndex": 0,
    "explanation": "RANK 는 동순위가 있으면 이후 순위를 건너뛴다.",
    "_source": "authored"
  },
  {
    "id": 10564,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 26,
    "title": "아래 결과가 1, 1, 2 가 되는 순위 함수는?",
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
    "id": 10565,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 27,
    "title": "사원이 없는 부서도 조회 결과에 포함하려면 어떤 조인을 사용해야 하는가?\n```sql\nSELECT 부서명, COUNT(사원번호) AS 사원수\nFROM   EMP A ( ? ) JOIN DEPT B ON A.부서번호 = B.부서번호\nGROUP BY 부서명;\n```",
    "options": [
      "RIGHT OUTER",
      "LEFT OUTER",
      "INNER",
      "CROSS"
    ],
    "correctIndex": 0,
    "explanation": "부서(B) 를 기준으로 유지해야 하므로 B 쪽이 오른쪽에 있다면 RIGHT OUTER JOIN 이다.",
    "_source": "authored"
  },
  {
    "id": 10566,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 28,
    "title": "B_USER 가 아래 작업을 수행할 수 있도록 부여하는 DCL 로 가장 적절한 것은?\n```sql\nUPDATE A_USER.TB_A SET COL1 = 'AAA' WHERE COL2 = 3;\n```",
    "options": [
      "GRANT SELECT, UPDATE TO B_USER;",
      "REVOKE SELECT ON A_USER.TB_A FROM B_USER;",
      "DENY UPDATE ON A_USER.TB_A TO B_USER;",
      "GRANT SELECT, UPDATE ON A_USER.TB_A TO B_USER;"
    ],
    "correctIndex": 3,
    "explanation": "UPDATE 는 WHERE 조건 평가를 위한 SELECT 와 실제 UPDATE 권한이 모두 필요하다.",
    "_source": "authored"
  },
  {
    "id": 10567,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 29,
    "title": "아래 SQL 수행 후 SELECT 권한을 가진 사용자는?\n```sql\nDBA : GRANT SELECT ON X TO U1;\nDBA : GRANT SELECT ON X TO U2 WITH GRANT OPTION;\nU2  : GRANT SELECT ON X TO U3;\nDBA : REVOKE SELECT ON X FROM U2 RESTRICT;\n```",
    "options": [
      "DBA, U1, U2",
      "DBA, U1",
      "DBA, U2, U3",
      "DBA, U1, U2, U3"
    ],
    "correctIndex": 3,
    "explanation": "RESTRICT 옵션은 U3 가 권한을 이미 가진 상황에서 REVOKE 가 거부되므로 모든 사용자의 권한이 유지된다.",
    "_source": "authored"
  },
  {
    "id": 10568,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 30,
    "title": "아래 CREATE TABLE 에 대해 오류 없이 INSERT 되는 것은?\n```sql\nCREATE TABLE T1 (\n  A NUMBER DEFAULT 9 PRIMARY KEY,\n  B NUMBER NOT NULL,\n  C NUMBER\n);\n```",
    "options": [
      "INSERT INTO T1 VALUES (7, 1);",
      "INSERT INTO T1 (C) VALUES (5);",
      "INSERT INTO T1 (A) VALUES (NULL);",
      "INSERT INTO T1 (B, C) VALUES (9, 1);"
    ],
    "correctIndex": 3,
    "explanation": "A 는 DEFAULT 9 가 지정되어 있으므로 생략해도 9 가 할당되고 PK 조건을 만족한다.",
    "_source": "authored"
  },
  {
    "id": 10569,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 31,
    "title": "아래 SQL 실행 후 AVG 결과로 옳은 것은?\n```sql\nINSERT INTO T VALUES (1);\nINSERT INTO T VALUES (2);\nSAVEPOINT X;\nUPDATE T SET VAL = VAL * 10;\nDELETE FROM T WHERE VAL = 20;\nROLLBACK TO SAVEPOINT X;\nINSERT INTO T VALUES (3);\nSELECT AVG(VAL) FROM T;\n```",
    "options": [
      "1",
      "2",
      "3",
      "NULL"
    ],
    "correctIndex": 1,
    "explanation": "ROLLBACK 으로 UPDATE·DELETE 가 취소되어 VAL 은 (1, 2, 3) 이 되며 평균은 2 이다.",
    "_source": "authored"
  },
  {
    "id": 10570,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 32,
    "title": "PRIMARY KEY 에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "값이 중복되지 않는다.",
      "NULL 값을 허용하지 않는다.",
      "테이블당 하나만 지정할 수 있다.",
      "중복을 허용하되 NULL 은 허용하지 않는다."
    ],
    "correctIndex": 3,
    "explanation": "PK 는 중복과 NULL 을 모두 허용하지 않는다.",
    "_source": "authored"
  },
  {
    "id": 10571,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 33,
    "title": "아래 WINDOW FUNCTION SQL 의 결과로 옳은 것은?\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"6\">\n  <tr><th>COL1</th><th>COL2</th><th>COL3</th></tr>\n  <tr><td>100</td><td>100</td><td>100</td></tr>\n  <tr><td>200</td><td>100</td><td>100</td></tr>\n  <tr><td>300</td><td>200</td><td>100</td></tr>\n  <tr><td>400</td><td>100</td><td>100</td></tr>\n  <tr><td>500</td><td>300</td><td>100</td></tr>\n  <tr><td>600</td><td>400</td><td>100</td></tr>\n  <tr><td>700</td><td>200</td><td>100</td></tr>\n</table>\n```sql\nSELECT MAX(COL1) OVER(ORDER BY COL1 ROWS BETWEEN UNBOUNDED PRECEDING AND 2 FOLLOWING) AS MAX,\n       SUM(COL2) OVER(ORDER BY COL1 ROWS BETWEEN 1 PRECEDING AND CURRENT ROW) AS SUM,\n       FIRST_VALUE(COL1) OVER(ORDER BY COL1 RANGE BETWEEN 200 PRECEDING AND 200 FOLLOWING) AS FIRST\nFROM T;\n```",
    "options": [
      "MAX: 300, 400, 500, 600, 700, 700, 700",
      "다른 값들",
      "다른 값들",
      "다른 값들"
    ],
    "correctIndex": 0,
    "explanation": "각 윈도우 정의에 따른 계산 결과를 직접 산출하여 얻는다.",
    "_source": "authored"
  },
  {
    "id": 10572,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 34,
    "title": "아래 SQL 의 결과로 옳은 것은?\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"6\">\n  <tr><th>COL1</th><th>COL2</th></tr>\n  <tr><td>1</td><td>A</td></tr>\n  <tr><td>1</td><td>A</td></tr>\n  <tr><td>1</td><td>B</td></tr>\n  <tr><td>1</td><td>B</td></tr>\n</table>\n```sql\nSELECT COUNT(COL1), COUNT(COL2)\nFROM (SELECT DISTINCT COL1, COL2 FROM TAB1);\n```",
    "options": [
      "2, 2",
      "4, 4",
      "1, 2",
      "2, 1"
    ],
    "correctIndex": 0,
    "explanation": "DISTINCT 결과 (1,A), (1,B) 의 2 건이므로 각 COUNT 는 2 이다.",
    "_source": "authored"
  },
  {
    "id": 10573,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 35,
    "title": "아래 SQL 의 AVG 결과에 대한 설명으로 옳은 것은?\n```sql\nSELECT SUM(C2)/COUNT(*)    AS AVG1,\n       SUM(C2)/COUNT(C2)   AS AVG2,\n       AVG(C2)             AS AVG3\nFROM   T;\n```",
    "options": [
      "AVG1 과 AVG2 가 같다.",
      "AVG2 와 AVG3 가 같다.",
      "세 값 모두 같다.",
      "세 값 모두 다르다."
    ],
    "correctIndex": 1,
    "explanation": "AVG 함수는 NULL 을 제외하고 평균을 계산하므로 COUNT(C2) 로 나눈 값과 동일하다.",
    "_source": "authored"
  },
  {
    "id": 10574,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 36,
    "title": "아래 두 테이블에 대한 SQL 의 결과로 옳은 것은?\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"6\">\n  <tr><th colspan=\"2\">TAB1</th><th colspan=\"2\">TAB2</th></tr>\n  <tr><th>ID</th><th>NAME</th><th>ID</th><th>RULE</th></tr>\n  <tr><td>1</td><td>SMITH</td><td>1</td><td>S%</td></tr>\n  <tr><td>2</td><td>ALICE</td><td>2</td><td>%T%</td></tr>\n  <tr><td>3</td><td>SCOTT</td><td></td><td></td></tr>\n</table>\n```sql\nSELECT * FROM TAB1 A, TAB2 B\nWHERE A.NAME LIKE B.RULE;\n```",
    "options": [
      "(1, SMITH, 1, S%), (3, SCOTT, 1, S%), (1, SMITH, 2, %T%), (3, SCOTT, 2, %T%)",
      "(1, SMITH, 1, S%) 만",
      "전체 카티션 곱",
      "공집합"
    ],
    "correctIndex": 0,
    "explanation": "'S%' 는 SMITH 와 SCOTT 에 매칭되고, '%T%' 도 두 이름 모두에 매칭된다.",
    "_source": "authored"
  },
  {
    "id": 10575,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 37,
    "title": "아래 네 SQL 중 결과가 다른 것은?",
    "options": [
      "SELECT COUNT(DISTINCT COL1) FROM T;",
      "SELECT DISTINCT COUNT(*) FROM T;",
      "SELECT COL1 FROM T GROUP BY COL1;",
      "SELECT DISTINCT COL1 FROM T;"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10576,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 38,
    "title": "아래 SQL 의 결과로 옳은 것은?\n```sql\nSELECT SUBSTR('123456789', -4, 2) FROM DUAL;\n```",
    "options": [
      "23",
      "67",
      "45",
      "89"
    ],
    "correctIndex": 1,
    "explanation": "뒤에서 네 번째 문자부터 2 글자(6, 7) 를 반환한다.",
    "_source": "authored"
  },
  {
    "id": 10577,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 39,
    "title": "아래 SQL 의 결과로 옳은 것은?\n```sql\nSELECT LENGTH('SQL EXPERT') FROM DUAL;\n```",
    "options": [
      "9",
      "10",
      "11",
      "7"
    ],
    "correctIndex": 1,
    "explanation": "공백을 포함하여 10 글자이다.",
    "_source": "authored"
  },
  {
    "id": 10578,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 40,
    "title": "아래 요구 사항을 만족하는 WHERE 조건으로 옳은 것은?",
    "options": [
      "`COL1 = 'F' OR COL1 = 'G' AND 금액 BETWEEN 2000 AND 50000`",
      "`(COL1 = 'F' OR COL1 = 'G') AND 금액 BETWEEN 2000 AND 50000`",
      "`COL1 IN ('F', 'G') OR 금액 BETWEEN 2000 AND 50000`",
      "`COL1 = 'F' AND COL1 = 'G' AND 금액 BETWEEN 2000 AND 50000`"
    ],
    "correctIndex": 1,
    "explanation": "등급이 F 또는 G 이고, 금액 범위가 2,000 ~ 50,000 사이",
    "_source": "authored"
  },
  {
    "id": 10579,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 41,
    "title": "Oracle 에서 NULL 이 포함된 ORDER BY 결과에 대한 설명으로 옳은 것은?",
    "options": [
      "ASC 정렬 시 NULL 이 가장 먼저 출력된다.",
      "DESC 정렬 시 NULL 이 가장 나중에 출력된다.",
      "ASC 정렬 시 NULL 은 마지막에, DESC 정렬 시 NULL 은 가장 먼저 출력된다.",
      "NULL 은 항상 가장 먼저 출력된다."
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10580,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 42,
    "title": "SQL 집합 연산자 중 교집합을 반환하는 것은?",
    "options": [
      "UNION ALL",
      "UNION",
      "INTERSECT",
      "EXCEPT"
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10581,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 43,
    "title": "아래 SQL 의 수행 목적에 대한 설명으로 옳은 것은?\n```sql\nSELECT 부서, MAX(연봉)\nFROM   EMP\nGROUP BY 부서;\n```",
    "options": [
      "전체 사원의 평균 연봉",
      "부서별 최고 연봉을 조회",
      "전체 사원의 합계 연봉",
      "사원 수를 세는 쿼리"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10582,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 44,
    "title": "아래 MERGE 구문 수행 결과로 옳은 것은?\n<table border=\"1\" cellspacing=\"0\" cellpadding=\"6\">\n  <tr><th colspan=\"2\">TBL1</th><th colspan=\"2\">TBL2</th></tr>\n  <tr><th>ID</th><th>COL1</th><th>ID</th><th>COL2</th></tr>\n  <tr><td>1</td><td>A</td><td>1</td><td>C</td></tr>\n  <tr><td>2</td><td>B</td><td>2</td><td>D</td></tr>\n  <tr><td></td><td></td><td>3</td><td>E</td></tr>\n  <tr><td></td><td></td><td>4</td><td>F</td></tr>\n</table>\n```sql\nMERGE INTO TBL1 T USING TBL2 S ON (T.ID = S.ID)\nWHEN MATCHED THEN UPDATE SET T.COL1 = S.COL2\nWHEN NOT MATCHED THEN INSERT (ID, COL1) VALUES (S.ID, S.COL2);\n```",
    "options": [
      "ID=1,2 는 UPDATE, ID=3,4 는 INSERT 되어 총 4행이 남는다.",
      "UPDATE 만 수행되어 2행이 남는다.",
      "INSERT 만 수행되어 4행이 생성된다.",
      "오류 발생"
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10583,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 45,
    "title": "아래 DDL 에 대해 삽입이 성공하는 SQL 의 조합은?\n```sql\nCREATE TABLE TBL (\n  ID     NUMBER PRIMARY KEY,\n  AMT    NUMBER NOT NULL,\n  DEGREE VARCHAR2(1)\n);\n```",
    "options": [
      "가, 나",
      "나, 다",
      "다, 라",
      "라, 마"
    ],
    "correctIndex": 3,
    "explanation": "가. INSERT INTO TBL VALUES (1, 100); 나. INSERT INTO TBL (ID, AMT, DEGREE) VALUES (2, 200, 'AB'); 다. INSERT INTO TBL (ID, DEGREE) VALUES (4, 'X'); 라. INSERT INTO TBL (ID, AMT) VALUES (3, 300); 마. INSERT INTO TBL VALUES (5, 500, NULL); 가는 컬럼 개수 불일치, 나는 DEGREE 길이 초과, 다는 NOT NULL 위반으로 실패한다.",
    "_source": "authored"
  }
];
