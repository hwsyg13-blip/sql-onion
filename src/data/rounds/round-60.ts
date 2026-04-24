// Auto-generated from PDF + blog + scripts/authored/round-60.json
// 제60회 — 2026년 3월 · 50문항
// ⚠ 직접 편집 금지. 출처별 데이터를 고친 뒤 'node scripts/build-quiz-bank.mjs' 재실행.
import type { QuizQuestion } from '../quizBank';

export const ROUND_60: QuizQuestion[] = [
  {
    "id": 10000,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "1과목",
    "number": 1,
    "title": "데이터가 자주 변경되고 양이 많을 때 해당하는 엔터티 유형은?",
    "options": [
      "행위 엔터티",
      "개념 엔터티",
      "중심 엔터티",
      "기본 엔터티"
    ],
    "correctIndex": 0,
    "explanation": "행위 엔터티: 두 개 이상의 부모에서 발생하고 데이터가 자주 변경되며 양이 많음",
    "_source": "pdf"
  },
  {
    "id": 10001,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "1과목",
    "number": 2,
    "title": "다음 중 다른 속성으로부터 계산이나 변형되어 생성되는 속성은?",
    "options": [
      "파생속성",
      "설계속성",
      "기본속성",
      "복합속성"
    ],
    "correctIndex": 0,
    "explanation": "파생속성: 다른 속성의 값을 이용해 계산/변형되어 나타나는 속성 (예: 연령, 합계금액)",
    "_source": "pdf"
  },
  {
    "id": 10002,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "1과목",
    "number": 3,
    "title": "엔터티에 대한 설명 중 잘못된 것은?",
    "options": [
      "엔터티는 두 개 이상의 인스턴스를 가져야 한다",
      "인스턴스 속성 값에 두 개 이상 들어간다",
      "인스턴스는 두가지의 속성값을 가진다",
      "엔터티는 반드시 속성을 가져야 한다"
    ],
    "correctIndex": 2,
    "explanation": "엔터티는 두 개 이상의 인스턴스, 두 개 이상의 속성을 가지며, 하나의 인스턴스는 각 속성마다 한 개의 값만 가짐",
    "_source": "pdf"
  },
  {
    "id": 10003,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "1과목",
    "number": 4,
    "title": "ERD에서 다음 설명 중 틀린 것은? (서비스, 서비스이용, 청구, 납부 관계)",
    "options": [
      "서비스는 기본 엔터티이다",
      "서비스이용은 행위 엔터티이다",
      "청구는 서비스이용 후 발생한다",
      "납부는 청구 후 발생한다"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10004,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "1과목",
    "number": 5,
    "title": "하나의 주문이 10개 이상인 것에 대한 고객별 주문 수량을 구하는 SQL의 의미는?",
    "options": [
      "한 주문에 10개 이상인 고객 목록",
      "모든 주문 수량이 10개 이상인 고객",
      "총 주문 수가 10 이상인 고객",
      "주문 금액이 10 이상인 고객"
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10005,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "1과목",
    "number": 6,
    "title": "비식별자에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "부모 엔터티의 주식별자를 자식 엔터티의 일반 속성으로 사용한다",
      "비식별자 관계는 점선으로 표현한다",
      "주식별자와 식별자가 같다",
      "자식 엔터티가 독립적인 주식별자를 가질 수 있다"
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10006,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "1과목",
    "number": 7,
    "title": "ERD 피터 첸(Peter Chen) 표기법에서 속성을 나타내는 도형은?",
    "options": [
      "네모(직사각형)",
      "세모(삼각형)",
      "마름모(다이아몬드)",
      "타원(원)"
    ],
    "correctIndex": 3,
    "explanation": "피터 첸 표기법: 엔터티=직사각형, 관계=마름모, 속성=타원",
    "_source": "pdf"
  },
  {
    "id": 10007,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "1과목",
    "number": 8,
    "title": "주식별자를 구성하는 속성이 하나라도 삭제되면 유일하게 구분할 수 없게 될 때 이와 관련된 주식별자 특성은?",
    "options": [
      "최소성",
      "대표성",
      "불변성",
      "고립성"
    ],
    "correctIndex": 0,
    "explanation": "최소성: 주식별자를 구성하는 속성의 수를 최소화해야 하며, 하나라도 제거하면 유일성이 깨짐",
    "_source": "pdf"
  },
  {
    "id": 10008,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "1과목",
    "number": 9,
    "title": "주식별자와 가장 관련이 없는 정규화는?",
    "options": [
      "1정규화",
      "2정규화",
      "3정규화",
      "BCNF"
    ],
    "correctIndex": 2,
    "explanation": "3정규화는 이행적 함수 종속(일반속성→일반속성)을 제거하므로 주식별자와의 관련성이 가장 낮음",
    "_source": "pdf"
  },
  {
    "id": 10009,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "1과목",
    "number": 10,
    "title": "인조식별자에 대한 설명 중 옳은 것은?",
    "options": [
      "업무할 때 쉽게 파악된다",
      "아무 행위 없어도 된다",
      "본질식별자보다 더 자연스럽다",
      "반드시 단일 컬럼이어야 한다"
    ],
    "correctIndex": 1,
    "explanation": "인조식별자: 업무적으로 의미 없는 일련번호 등으로, 아무 행위 없이 자동 생성 가능",
    "_source": "pdf"
  },
  {
    "id": 10010,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 1,
    "title": "계층형 질의에 대한 설명 중 오류인 것은? (가: Level, 나: Isleaf, 다: Iscycle, 라: Connect by Root)",
    "options": [
      "가",
      "나, 다",
      "나, 다, 라",
      "가, 나, 다, 라"
    ],
    "correctIndex": 3,
    "explanation": "Level은 오라클 계층형에서 사용 가능, ISLEAF/ISCYCLE/CONNECT_BY_ROOT도 사용 가능한 의사컬럼 및 연산자",
    "_source": "pdf"
  },
  {
    "id": 10011,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 2,
    "title": "NOT IN 서브쿼리에서 서브쿼리 결과에 NULL이 포함된 경우 결과는?",
    "options": [
      "전체 데이터 반환",
      "NULL을 제외한 데이터 반환",
      "공집합(0건)",
      "오류 발생"
    ],
    "correctIndex": 2,
    "explanation": "NOT IN에 NULL이 포함되면 모든 비교가 UNKNOWN이 되어 결과는 0건",
    "_source": "pdf"
  },
  {
    "id": 10012,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 3,
    "title": "PIVOT 문제 (행: 인사팀, IT팀, 행정팀 / 열: 사원, 대리, 팀장, 부장 / 내용: 연봉)에서 올바르지 않은 것은?",
    "options": [
      "FOR 절에 직급 컬럼 사용",
      "IN 절에 팀명 사용",
      "WHERE절에 LIKE 사용",
      "PIVOT 내에 집계함수 사용"
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10013,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 4,
    "title": "다음 윈도우 함수에서 FIRST_VALUE와 ORDER BY를 이용한 누적최솟값 결과로 옳은 것은? (데이터: 1000, 2000, 3000)",
    "options": [
      "1000, 1000, 1000",
      "1000, 2000, 3000",
      "3000, 2000, 1000",
      "3000, 3000, 3000"
    ],
    "correctIndex": 0,
    "explanation": "FIRST_VALUE(col) OVER(ORDER BY col)는 현재까지의 첫 번째 값 → 오름차순이면 최솟값 유지",
    "_source": "pdf"
  },
  {
    "id": 10014,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 5,
    "title": "WHERE (사번, 회원번호) IN ((10005, 2003))과 동일한 SQL은?",
    "options": [
      "(a=10005) OR (b=2003)",
      "(a=10005) AND (b=2003)",
      "a=10005 AND b IN (2003)",
      "a IN (10005) AND b IN (2003)"
    ],
    "correctIndex": 1,
    "explanation": "다중 컬럼 IN 조건은 각 컬럼 조건을 AND로 연결한 것과 동일",
    "_source": "pdf"
  },
  {
    "id": 10015,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 6,
    "title": "NTILE(3)을 8건 데이터에 적용했을 때 결과는?",
    "options": [
      "1,1,1,2,2,2,3,3",
      "1,1,1,1,2,2,3,3",
      "1,2,3,1,2,3,1,2",
      "1,1,2,2,3,3,3,3"
    ],
    "correctIndex": 0,
    "explanation": "NTILE(3): 8건을 3개 그룹으로 나누면 3,3,2 → 1그룹:3건, 2그룹:3건, 3그룹:2건",
    "_source": "pdf"
  },
  {
    "id": 10016,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 7,
    "title": "NVL과 JOIN을 이용한 문제에서 결과값이 올바른 조인은?",
    "options": [
      "NVL + CROSS JOIN",
      "NVL + FULL OUTER JOIN",
      "FULL OUTER JOIN",
      "UNION"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10017,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 8,
    "title": "사용자 r1이 테이블을 만들고 disconnect한 후, r2가 접속하여 r1의 테이블을 조회하려고 할 때 오류 해결 방법은?",
    "options": [
      "r1이 다시 접속한다",
      "GRANT로 SELECT 권한을 부여한다",
      "SYNONYM을 생성한다",
      "테이블을 PUBLIC으로 변경한다"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10018,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 9,
    "title": "SELECT REGEXP_REPLACE('2026/02/25','([0-9]{4})/([0-9]{2})/([0-9]{2})','\\3/\\2/\\1') FROM DUAL;의 결과는?",
    "options": [
      "2026/02/25",
      "25/02/2026",
      "02/25/2026",
      "2026/25/02"
    ],
    "correctIndex": 1,
    "explanation": "\\1=2026, \\2=02, \\3=25 이므로 \\3/\\2/\\1 = 25/02/2026",
    "_source": "pdf"
  },
  {
    "id": 10019,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 10,
    "title": "SUM(4, NULL, NULL)과 SUM(4,19)의 결과는?",
    "options": [
      "4, 23",
      "NULL, 23",
      "4, NULL",
      "NULL, NULL"
    ],
    "correctIndex": 0,
    "explanation": "SUM은 NULL을 무시하므로 SUM(4,NULL,NULL)=4, SUM(4,19)=23",
    "_source": "pdf"
  },
  {
    "id": 10020,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 11,
    "title": "다음 중 결과값이 다른 것은? (ROWNUM 관련)",
    "options": [
      "rownum IN (1,2)",
      "rownum < 3",
      "rownum <= 2",
      "rownum = 2"
    ],
    "correctIndex": 0,
    "explanation": "ROWNUM은 순차적으로 할당되므로 IN(1,2)는 1번과 2번을 동시에 체크할 수 없어 실제로는 ROWNUM<3과 다른 결과",
    "_source": "pdf"
  },
  {
    "id": 10021,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 12,
    "title": "WHERE 1=2 조건의 SELECT에서 0이 반환되는 함수는?",
    "options": [
      "NVL(AVG(COL1),0)",
      "COALESCE(SAL,0)",
      "MIN(SAL)",
      "COUNT(*)"
    ],
    "correctIndex": 3,
    "explanation": "WHERE 1=2이면 행이 없어 집계함수는 대부분 NULL 반환. COUNT(*)만 0을 반환",
    "_source": "pdf"
  },
  {
    "id": 10022,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 13,
    "title": "LEFT OUTER JOIN에서 혼자 다른 결과를 내는 것은? (Oracle: a=b(+) AND 조건)",
    "options": [
      "LEFT OUTER JOIN ON ... WHERE 조건",
      "LEFT OUTER JOIN ON ... AND 조건",
      "INNER JOIN",
      "RIGHT OUTER JOIN"
    ],
    "correctIndex": 0,
    "explanation": "ON절의 AND와 WHERE절은 다름: WHERE절은 OUTER JOIN 후 필터링하여 INNER JOIN처럼 동작할 수 있음",
    "_source": "pdf"
  },
  {
    "id": 10023,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 14,
    "title": "PIVOT 쿼리에서 행(인사팀, IT팀, 행정팀)을 열로 변환하는 FOR절에 사용되는 컬럼은?",
    "options": [
      "직급",
      "팀명",
      "연봉",
      "COUNT(*)"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10024,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 15,
    "title": "SELECT col2 FROM t1 WHERE col2 = (SELECT col2 FROM t2 WHERE a='A') 오류 없이 실행되려면 t2.col2의 제약조건은?",
    "options": [
      "UNIQUE",
      "NOT NULL",
      "CHECK",
      "DEFAULT"
    ],
    "correctIndex": 0,
    "explanation": "단일행 서브쿼리(=)를 사용하므로 서브쿼리가 반드시 1건만 반환해야 함 → UNIQUE 제약조건 필요",
    "_source": "pdf"
  },
  {
    "id": 10025,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 16,
    "title": "SELECT SAL, SUM(SAL) OVER(ORDER BY SAL ROWS UNBOUNDED PRECEDING) 에서 올바른 윈도우 절은?",
    "options": [
      "ROWS UNBOUNDED PRECEDING",
      "ROWS UNBOUNDED PRECEDING AND 1 PRECEDING",
      "RANGE UNBOUNDED PRECEDING",
      "RANGE"
    ],
    "correctIndex": 0,
    "explanation": "ROWS UNBOUNDED PRECEDING = 처음 행부터 현재 행까지 (누적합)",
    "_source": "pdf"
  },
  {
    "id": 10026,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 17,
    "title": "트랜잭션의 고립성(Isolation)에 대한 설명으로 옳은 것은?",
    "options": [
      "다른 트랜잭션에 영향을 받지 않는다",
      "모두 성공하거나 모두 실패한다",
      "완료 후 영구 저장된다",
      "데이터 일관성을 유지한다"
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10027,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 18,
    "title": "기본키(PRIMARY KEY)의 제약조건 특성으로 옳은 것은?",
    "options": [
      "NULL + UNIQUE",
      "NULL + NOT NULL",
      "NOT NULL + UNIQUE",
      "NOT NULL만"
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10028,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 19,
    "title": "매니저 사원번호를 구하는 계층형 쿼리에서 순방향 전개를 나타내는 것은?",
    "options": [
      "PRIOR 매니저 = 사원",
      "PRIOR 사원 = 매니저",
      "사원 = PRIOR 매니저",
      "매니저 = PRIOR 사원"
    ],
    "correctIndex": 1,
    "explanation": "PRIOR 자식 = 부모 형태가 순방향(부모→자식). 사원번호=자식, 매니저번호=부모",
    "_source": "pdf"
  },
  {
    "id": 10029,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 20,
    "title": "계층형 질의에서 WHERE col3 <> 2, START WITH d 조건으로 트리가 만들어지지 않는 이유는?",
    "options": [
      "START WITH 조건이 잘못됨",
      "WHERE절이 전개 전에 적용됨",
      "col3 조건이 루트에 적용됨",
      "계층 연결이 끊어짐"
    ],
    "correctIndex": 3,
    "explanation": "WHERE절은 모든 전개 후 적용되지만, CONNECT BY의 조건이 끊기면 트리가 안 만들어짐",
    "_source": "pdf"
  },
  {
    "id": 10030,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 21,
    "title": "계층형 쿼리 결과에서 골드, 실버, 브론즈 등급이 있을 때 올바른 결과는?",
    "options": [
      "골드1 실버2 브론즈1",
      "골드1 실버2",
      "실버2 골드1",
      "골드2 실버1 브론즈1"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10031,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 22,
    "title": "다음 중 오류가 발생하지 않는 ALTER TABLE 컬럼 타입 변경은?",
    "options": [
      "NUMBER에서 DATE로 변경",
      "VARCHAR2에서 NUMBER로 변경",
      "DATE에서 NUMBER로 변경",
      "NUMBER에서 TIMESTAMP로 변경"
    ],
    "correctIndex": 3,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10032,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 23,
    "title": "NOT EXISTS 서브쿼리 결과로 옳은 것은?",
    "options": [
      "아이템 1만",
      "아이템 1, 2",
      "공집합",
      "오류"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10033,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 24,
    "title": "다음 중 중복을 허용하는 집합 연산자는?",
    "options": [
      "UNION",
      "UNION ALL",
      "INTERSECT",
      "EXCEPT"
    ],
    "correctIndex": 1,
    "explanation": "UNION ALL만 중복 허용. UNION, INTERSECT, EXCEPT는 중복 제거",
    "_source": "pdf"
  },
  {
    "id": 10034,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 25,
    "title": "SELECT UNION SELECT 쿼리에서 EXTRACT 함수 사용 시 전체 SELECT 개수는?",
    "options": [
      "2개",
      "3개",
      "1개",
      "4개"
    ],
    "correctIndex": 3,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10035,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 26,
    "title": "아래 내용 중 잘못된 설명은?",
    "options": [
      "TRUNCATE는 DML이다",
      "DELETE는 WHERE절로 조건 삭제 가능하다",
      "DROP은 DDL이다",
      "TRUNCATE는 롤백이 불가하다"
    ],
    "correctIndex": 0,
    "explanation": "TRUNCATE는 DDL이므로 자동 COMMIT되어 롤백 불가",
    "_source": "pdf"
  },
  {
    "id": 10036,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 27,
    "title": "테이블1(컬럼1:1~4, 컬럼2:모두 10)과 테이블2(1~5)를 JOIN할 때 SUM 결과는?",
    "options": [
      "100",
      "120",
      "140",
      "NULL"
    ],
    "correctIndex": 0,
    "explanation": "테이블1의 컬럼1=1,2,3,4가 테이블2와 매칭되면 각 행의 컬럼2=10이므로 4*10+테이블1행수=...)",
    "_source": "pdf"
  },
  {
    "id": 10037,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 28,
    "title": "카티션 곱(CROSS JOIN)에서 테이블A 행수가 2, 테이블B 행수가 2일 때 결과 %는?",
    "options": [
      "4",
      "2",
      "8",
      "6"
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10038,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 29,
    "title": "MERGE INTO 문에서 MATCH UPDATE와 NOT MATCH INSERT를 수행한 결과는?",
    "options": [
      "100, 100, 100",
      "100, 200, 100",
      "200, 100, 200",
      "NULL, 100, 100"
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10039,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 30,
    "title": "SELECT절에서 AS로 별칭 정의 후 WHERE절에서 그 별칭을 사용할 때 발생하는 것은?",
    "options": [
      "정상 실행",
      "오류 발생 (WHERE에서 SELECT 별칭 사용 불가)",
      "NULL 반환",
      "빈 결과 반환"
    ],
    "correctIndex": 1,
    "explanation": "SQL 실행 순서: FROM→WHERE→GROUP BY→HAVING→SELECT→ORDER BY. WHERE은 SELECT 전에 실행되므로 별칭 사용 불가",
    "_source": "pdf"
  },
  {
    "id": 10040,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 31,
    "title": "다음 중 결과가 다른 하나는?",
    "options": [
      "WHERE 1 > NULL",
      "NULL + 1",
      "NULL * 1",
      "NULL * NULL"
    ],
    "correctIndex": 0,
    "explanation": "NULL 산술 연산은 모두 NULL. WHERE 1>NULL은 FALSE(0건 반환)로 다른 결과",
    "_source": "pdf"
  },
  {
    "id": 10041,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 32,
    "title": "다음 중 값이 다른 것은?",
    "options": [
      "SELECT 1 + null",
      "SELECT 'X'",
      "SELECT 1 * null",
      "SELECT null"
    ],
    "correctIndex": 1,
    "explanation": "NULL 연산은 모두 NULL. 'X'만 실제 값",
    "_source": "pdf"
  },
  {
    "id": 10042,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 33,
    "title": "identity(1,1)과 CHECK 제약(-1, 0, 1)에서 COUNT 결과는?",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10043,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 34,
    "title": "DROP TABLE ... RESTRICT 실행 시 참조하는 뷰가 있을 경우 결과는?",
    "options": [
      "아무 것도 삭제 안됨",
      "테이블만 삭제됨",
      "뷰와 테이블 모두 삭제됨",
      "오류 발생"
    ],
    "correctIndex": 0,
    "explanation": "RESTRICT: 참조하는 객체가 있으면 삭제 거부",
    "_source": "pdf"
  },
  {
    "id": 10044,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 35,
    "title": "NVL(comm, sal)에 대한 설명 중 틀린 것은?",
    "options": [
      "덧셈 연산을 하지 않는다",
      "comm이 NULL이면 sal을 반환한다",
      "comm이 NULL이 아니면 comm을 반환한다",
      "두 컬럼의 데이터 타입이 같아야 한다"
    ],
    "correctIndex": 0,
    "explanation": "NVL(comm,sal)은 comm이 NULL일 때 sal을 반환하는 함수로, 덧셈과는 무관",
    "_source": "pdf"
  },
  {
    "id": 10045,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 36,
    "title": "상위 3명을 추출할 때 동점자를 포함하여 3명 이상이 나올 수 있는 함수는?",
    "options": [
      "DENSE_RANK",
      "RANK",
      "ROWNUM",
      "ROW_NUMBER"
    ],
    "correctIndex": 0,
    "explanation": "DENSE_RANK: 동점자에게 같은 등수를 부여하고 다음 등수를 건너뛰지 않음",
    "_source": "pdf"
  },
  {
    "id": 10046,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 37,
    "title": "부서에 속하지 않는 직원을 구하는 방법으로 옳은 것은?",
    "options": [
      "INNER JOIN",
      "LEFT OUTER JOIN + WHERE 부서 IS NULL",
      "CROSS JOIN",
      "FULL OUTER JOIN"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10047,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 38,
    "title": "CUBE(A, B) 결과에 포함되지 않는 집계 조합은?",
    "options": [
      "A, B 모두 값",
      "A=값, B=NULL",
      "A=NULL, B=값",
      "없음 (모두 포함됨)"
    ],
    "correctIndex": 3,
    "explanation": "CUBE(A,B): (A,B), (A,NULL), (NULL,B), (NULL,NULL) 모두 생성",
    "_source": "pdf"
  },
  {
    "id": 10048,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 39,
    "title": "check 함수 제약조건이 들어가 있는 문제에서 올바른 제약조건은?",
    "options": [
      "Not null",
      "Check",
      "PK",
      "FK"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10049,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 40,
    "title": "HAVING max(주문.수량) > 10 조건의 의미로 옳은 것은?",
    "options": [
      "주문 수량이 10을 초과한 고객 및 관련 정보를 SELECT",
      "주문 총 합계가 10 초과",
      "주문 횟수가 10 초과",
      "주문 건수가 10 이하"
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "pdf"
  }
];
