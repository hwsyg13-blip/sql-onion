// Auto-generated: PDF + yunamom.tistory.com 블로그 + scripts/authored/*
// 총 374문항, 제45회 ~ 제60회

export type QuizQuestion = {
  id: number;
  examSetId: string;
  examLabel: string;
  round: number;
  subject: '1과목' | '2과목';
  number: number;
  title: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export const EXAM_SETS: { id: string; round: number; label: string; date: string; count: number }[] = [
  {
    "id": "round-60",
    "round": 60,
    "label": "제60회",
    "date": "2026년 3월",
    "count": 50
  },
  {
    "id": "round-59",
    "round": 59,
    "label": "제59회",
    "date": "2025년 11월",
    "count": 50
  },
  {
    "id": "round-58",
    "round": 58,
    "label": "제58회",
    "date": "2025년 8월",
    "count": 50
  },
  {
    "id": "round-57",
    "round": 57,
    "label": "제57회",
    "date": "2025년 5월",
    "count": 22
  },
  {
    "id": "round-56",
    "round": 56,
    "label": "제56회",
    "date": "2025년 3월",
    "count": 29
  },
  {
    "id": "round-55",
    "round": 55,
    "label": "제55회",
    "date": "2024년 11월",
    "count": 27
  },
  {
    "id": "round-54",
    "round": 54,
    "label": "제54회",
    "date": "2024년 8월",
    "count": 21
  },
  {
    "id": "round-53",
    "round": 53,
    "label": "제53회",
    "date": "2024년 5월",
    "count": 9
  },
  {
    "id": "round-52",
    "round": 52,
    "label": "제52회",
    "date": "2024년 3월",
    "count": 13
  },
  {
    "id": "round-51",
    "round": 51,
    "label": "제51회",
    "date": "2023년 11월",
    "count": 10
  },
  {
    "id": "round-50",
    "round": 50,
    "label": "제50회",
    "date": "2023년 9월",
    "count": 16
  },
  {
    "id": "round-49",
    "round": 49,
    "label": "제49회",
    "date": "2023년 6월",
    "count": 13
  },
  {
    "id": "round-48",
    "round": 48,
    "label": "제48회",
    "date": "2023년 3월",
    "count": 12
  },
  {
    "id": "round-47",
    "round": 47,
    "label": "제47회",
    "date": "2022년 11월",
    "count": 13
  },
  {
    "id": "round-46",
    "round": 46,
    "label": "제46회",
    "date": "2022년 9월",
    "count": 7
  },
  {
    "id": "round-45",
    "round": 45,
    "label": "제45회",
    "date": "2022년 5월",
    "count": 32
  }
];

export const QUIZ_BANK: QuizQuestion[] = [
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
    "explanation": "행위 엔터티: 두 개 이상의 부모에서 발생하고 데이터가 자주 변경되며 양이 많음"
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
    "explanation": "파생속성: 다른 속성의 값을 이용해 계산/변형되어 나타나는 속성 (예: 연령, 합계금액)"
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
    "explanation": "엔터티는 두 개 이상의 인스턴스, 두 개 이상의 속성을 가지며, 하나의 인스턴스는 각 속성마다 한 개의 값만 가짐"
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
    "explanation": ""
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
    "explanation": ""
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
    "explanation": ""
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
    "explanation": "피터 첸 표기법: 엔터티=직사각형, 관계=마름모, 속성=타원"
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
    "explanation": "최소성: 주식별자를 구성하는 속성의 수를 최소화해야 하며, 하나라도 제거하면 유일성이 깨짐"
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
    "explanation": "3정규화는 이행적 함수 종속(일반속성→일반속성)을 제거하므로 주식별자와의 관련성이 가장 낮음"
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
    "explanation": "인조식별자: 업무적으로 의미 없는 일련번호 등으로, 아무 행위 없이 자동 생성 가능"
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
    "explanation": "Level은 오라클 계층형에서 사용 가능, ISLEAF/ISCYCLE/CONNECT_BY_ROOT도 사용 가능한 의사컬럼 및 연산자"
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
    "explanation": "NOT IN에 NULL이 포함되면 모든 비교가 UNKNOWN이 되어 결과는 0건"
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
    "explanation": ""
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
    "explanation": "FIRST_VALUE(col) OVER(ORDER BY col)는 현재까지의 첫 번째 값 → 오름차순이면 최솟값 유지"
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
    "explanation": "다중 컬럼 IN 조건은 각 컬럼 조건을 AND로 연결한 것과 동일"
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
    "explanation": "NTILE(3): 8건을 3개 그룹으로 나누면 3,3,2 → 1그룹:3건, 2그룹:3건, 3그룹:2건"
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
    "explanation": ""
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
    "explanation": ""
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
    "explanation": "\\1=2026, \\2=02, \\3=25 이므로 \\3/\\2/\\1 = 25/02/2026"
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
    "explanation": "SUM은 NULL을 무시하므로 SUM(4,NULL,NULL)=4, SUM(4,19)=23"
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
    "explanation": "ROWNUM은 순차적으로 할당되므로 IN(1,2)는 1번과 2번을 동시에 체크할 수 없어 실제로는 ROWNUM<3과 다른 결과"
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
    "explanation": "WHERE 1=2이면 행이 없어 집계함수는 대부분 NULL 반환. COUNT(*)만 0을 반환"
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
    "explanation": "ON절의 AND와 WHERE절은 다름: WHERE절은 OUTER JOIN 후 필터링하여 INNER JOIN처럼 동작할 수 있음"
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
    "explanation": ""
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
    "explanation": "단일행 서브쿼리(=)를 사용하므로 서브쿼리가 반드시 1건만 반환해야 함 → UNIQUE 제약조건 필요"
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
    "explanation": "ROWS UNBOUNDED PRECEDING = 처음 행부터 현재 행까지 (누적합)"
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
    "explanation": ""
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
    "explanation": ""
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
    "explanation": "PRIOR 자식 = 부모 형태가 순방향(부모→자식). 사원번호=자식, 매니저번호=부모"
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
    "explanation": "WHERE절은 모든 전개 후 적용되지만, CONNECT BY의 조건이 끊기면 트리가 안 만들어짐"
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
    "explanation": ""
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
    "explanation": ""
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
    "explanation": ""
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
    "explanation": "UNION ALL만 중복 허용. UNION, INTERSECT, EXCEPT는 중복 제거"
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
    "explanation": ""
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
    "explanation": "TRUNCATE는 DDL이므로 자동 COMMIT되어 롤백 불가"
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
    "explanation": "테이블1의 컬럼1=1,2,3,4가 테이블2와 매칭되면 각 행의 컬럼2=10이므로 4*10+테이블1행수=...)"
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
    "explanation": ""
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
    "explanation": ""
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
    "explanation": "SQL 실행 순서: FROM→WHERE→GROUP BY→HAVING→SELECT→ORDER BY. WHERE은 SELECT 전에 실행되므로 별칭 사용 불가"
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
    "explanation": "NULL 산술 연산은 모두 NULL. WHERE 1>NULL은 FALSE(0건 반환)로 다른 결과"
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
    "explanation": "NULL 연산은 모두 NULL. 'X'만 실제 값"
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
    "explanation": ""
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
    "explanation": "RESTRICT: 참조하는 객체가 있으면 삭제 거부"
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
    "explanation": "NVL(comm,sal)은 comm이 NULL일 때 sal을 반환하는 함수로, 덧셈과는 무관"
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
    "explanation": "DENSE_RANK: 동점자에게 같은 등수를 부여하고 다음 등수를 건너뛰지 않음"
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
    "explanation": ""
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
    "explanation": "CUBE(A,B): (A,B), (A,NULL), (NULL,B), (NULL,NULL) 모두 생성"
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
    "explanation": ""
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
    "explanation": ""
  },
  {
    "id": 10050,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "1과목",
    "number": 1,
    "title": "모델링의 특징이 아닌 것은?",
    "options": [
      "추상화",
      "단순화",
      "명확화",
      "최적화"
    ],
    "correctIndex": 3,
    "explanation": "모델링의 3가지 특징: 추상화, 단순화, 명확화"
  },
  {
    "id": 10051,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "1과목",
    "number": 2,
    "title": "다음 예금 관련 설명 중 틀린 것은? (원금, 예치기간, 이자율, 이자 관리)",
    "options": [
      "일반예금은 코드 엔터티를 별도로 구분하고 값에는 코드값만 포함한다",
      "원금, 예치기간은 기본 속성이다",
      "이자와 이자율은 파생 속성이다",
      "예금분류는 설계 속성이다"
    ],
    "correctIndex": 2,
    "explanation": "이자율은 정의된 값(기본속성), 이자는 계산된 값(파생속성). 둘 다 파생속성은 아님"
  },
  {
    "id": 10052,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "1과목",
    "number": 3,
    "title": "속성이 가질 수 있는 값(데이터 타입 등)의 범위를 정의한 것은?",
    "options": [
      "제약조건",
      "도메인",
      "식별자",
      "관계"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10053,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "1과목",
    "number": 4,
    "title": "관계의 표기법이 아닌 것은?",
    "options": [
      "관계명",
      "관계차수",
      "관계선택사양",
      "관계 빈도"
    ],
    "correctIndex": 3,
    "explanation": "관계 표기법의 3요소: 관계명, 관계차수(Cardinality), 관계선택사양(Optionality)"
  },
  {
    "id": 10054,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "1과목",
    "number": 5,
    "title": "집합연산자에 대한 설명 중 틀린 것은?",
    "options": [
      "집합연산자에서 호환이 가능해도 무조건 데이터 타입을 일치시켜야 한다",
      "두 SELECT 문의 컬럼 수가 같아야 한다",
      "ORDER BY는 마지막 SELECT에만 사용 가능하다",
      "UNION ALL은 중복을 허용한다"
    ],
    "correctIndex": 0,
    "explanation": "호환 가능한 데이터 타입은 자동 변환 가능"
  },
  {
    "id": 10055,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "1과목",
    "number": 6,
    "title": "4개의 테이블 PK, 식별/비식별 관계에서 틀린 것은? (테이블 4개 연결 1:M)",
    "options": [
      "1:M으로 연결되어 있다",
      "비식별로 바꾸면 조회가 빠르다",
      "A테이블 키는 내부식별자, B테이블은 외부식별자이다",
      "B테이블의 FK를 비식별자로 바꾸면 C테이블에서 조인할 때 더 편하다"
    ],
    "correctIndex": 1,
    "explanation": "비식별 관계로 변경하면 조인 깊이 증가로 오히려 조회 성능이 저하될 수 있음"
  },
  {
    "id": 10056,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "1과목",
    "number": 7,
    "title": "이행적 함수 종속(Transitive Functional Dependency) 제거와 관련된 정규화는?",
    "options": [
      "제1정규형",
      "제2정규형",
      "제3정규형",
      "BCNF"
    ],
    "correctIndex": 2,
    "explanation": "제3정규화: 이행적 함수 종속(A→B, B→C 이므로 A→C) 제거"
  },
  {
    "id": 10057,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "1과목",
    "number": 8,
    "title": "트랜잭션의 특징이 아닌 것은?",
    "options": [
      "원자성(Atomicity)",
      "독립성(Isolation?)",
      "일관성(Consistency)",
      "영속성(Durability)"
    ],
    "correctIndex": 1,
    "explanation": "트랜잭션 4대 특성(ACID): 원자성, 일관성, 고립성(격리성), 영속성. 독립성은 정확한 용어 아님"
  },
  {
    "id": 10058,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "1과목",
    "number": 9,
    "title": "본질식별자, 인조식별자, 주식별자를 묻는 문제에서 올바른 것은?",
    "options": [
      "주민등록번호는 인조식별자이다",
      "주민등록번호는 인조식별자이며 단일식별자이다",
      "사번+이름 조합은 보조식별자, 본질식별자, 복합식별자이다",
      "인조식별자는 항상 PK이다"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10059,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "1과목",
    "number": 10,
    "title": "ERD 해석 문제에서 올바른 것은? (학생-수강 관계)",
    "options": [
      "학생은 수강이 없어도 된다",
      "수강은 학생이 없어도 된다",
      "수강은 학생을 반드시 가진다",
      "학생은 최소 한 개 이상의 수강을 해야 한다"
    ],
    "correctIndex": 3,
    "explanation": ""
  },
  {
    "id": 10060,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 1,
    "title": "다음 중 옳은 것으로 이루어진 문항을 고르시오 (GRANT, REVOKE, ROLE 관련)",
    "options": [
      "가(DCL은 CREATE), 나(GRANT는 권한 부여)",
      "나(GRANT는 권한 부여), 다(REVOKE는 물리디스크 저장)",
      "나(GRANT는 권한 부여), 라(ROLE은 권한 집합)",
      "가, 나, 라"
    ],
    "correctIndex": 2,
    "explanation": "GRANT: 자신이 가진 권한을 부여 가능, ROLE: 데이터 접근권한의 집합"
  },
  {
    "id": 10061,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 2,
    "title": "ORDER BY 역방향에서 LAG/LEAD 함수 사용 시 올바른 것은?",
    "options": [
      "LEAD, ORDER BY ASC",
      "LAG, ORDER BY DESC",
      "LEAD, ORDER BY DESC",
      "LAG, ORDER BY ASC"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10062,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 3,
    "title": "A연구소, 화학연구소, 연구소가 출력될 수 있도록 하는 WHERE 구문은?",
    "options": [
      "WHERE 연구소명 = '_연구소'",
      "WHERE 연구소명 = '%연구소'",
      "WHERE 연구소명 LIKE '%연구소'",
      "WHERE 연구소명 LIKE '_연구소'"
    ],
    "correctIndex": 2,
    "explanation": "LIKE '%연구소': 연구소로 끝나는 모든 문자열"
  },
  {
    "id": 10063,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 4,
    "title": "NVL2 함수와 날짜 추출 문제에서 NVL2(NULL, a, b)의 결과는?",
    "options": [
      "a",
      "b",
      "NULL",
      "오류"
    ],
    "correctIndex": 1,
    "explanation": "NVL2(expr, b, c): expr이 NULL이 아니면 b, NULL이면 c 반환"
  },
  {
    "id": 10064,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 5,
    "title": "직원번호, 상사번호 조회에서 계층형 셀프조인 결과는?",
    "options": [
      "직원만 표시",
      "직원과 상사 표시",
      "상사만 표시",
      "빈 결과"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10065,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 6,
    "title": "Oracle SQL을 표준 ANSI SQL로 전환한 것 중 올바른 것은?",
    "options": [
      "LEFT OUTER JOIN",
      "RIGHT OUTER JOIN",
      "FULL OUTER JOIN",
      "INNER JOIN"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10066,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 7,
    "title": "학생 중에 강의를 수강하는 학생을 찾는 서브쿼리로 올바른 것은?",
    "options": [
      "EXISTS 사용",
      "NOT EXISTS + EXCEPT",
      "EXISTS + INTERSECT",
      "NOT EXISTS"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10067,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 8,
    "title": "가장 높은 empno를 구하는 TOP-N 쿼리 중 올바른 것은?",
    "options": [
      "ROWNUM",
      "FETCH FIRST",
      "TOP WITH TIES",
      "TOP"
    ],
    "correctIndex": 0,
    "explanation": "ROWNUM: 정렬된 서브쿼리에서 ROWNUM=1로 최댓값 추출 가능"
  },
  {
    "id": 10068,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 9,
    "title": "TRUNCATE, DDL이 있고 SAVEPOINT가 없는 ROLLBACK 문제에서 최종 결과는?",
    "options": [
      "0",
      "15",
      "30",
      "NULL"
    ],
    "correctIndex": 2,
    "explanation": "DDL 실행 시 AUTO COMMIT 발생. SAVEPOINT 없이 ROLLBACK 시 이전 COMMIT 시점으로"
  },
  {
    "id": 10069,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 10,
    "title": "고객테이블과 대리점 테이블에서 COUNT에 대한 올바른 설명은?",
    "options": [
      "COUNT(*)는 NULL을 포함한다",
      "COUNT(컬럼)은 NULL을 제외한다",
      "COUNT(고객번호)에서 COUNT(집주소)를 빼면 집주소가 없는 고객의 수를 구할 수 있다",
      "COUNT(DISTINCT 컬럼)은 NULL도 포함"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10070,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 11,
    "title": "정규화에 대한 틀린 보기는?",
    "options": [
      "정규화는 데이터의 중복성과 유연성을 최소화하기 위해 사용된다",
      "정규화를 하면 독립성이 향상된다",
      "정규형에는 1정규형, 2정규형, 3정규형, BCNF 정규형이 있다",
      "어떤 조건은 1정규형을 만족한다"
    ],
    "correctIndex": 0,
    "explanation": "정규화는 중복성을 줄이고 데이터 무결성을 높이기 위해 사용. 유연성 최소화는 틀린 표현"
  },
  {
    "id": 10071,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 12,
    "title": "정규표현식 '^010'으로 시작하는 결과 테이블에서 맞는 것은?",
    "options": [
      "[^010]으로 시작하는 것",
      "'^010'으로 시작하는 것",
      "010이 포함된 것",
      "02로 시작하는 것"
    ],
    "correctIndex": 1,
    "explanation": "^은 문자열 시작을 의미. ^010은 010으로 시작하는 문자열"
  },
  {
    "id": 10072,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 13,
    "title": "REGEXP_LIKE 문제에서 첫 번째 인수 'B\\\\d', 두 번째 인수 'b.d'의 결과는?",
    "options": [
      "BCD, BCD",
      "BCD, BCD",
      "BCD, NULL",
      "NULL, BCD"
    ],
    "correctIndex": 2,
    "explanation": "B\\\\d: 대문자B + 숫자 → 'BCD'에서 숫자 없으면 NULL. b.d: 소문자b + 임의문자 + d"
  },
  {
    "id": 10073,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 14,
    "title": "집합연산자에 대한 설명 중 틀린 것은?",
    "options": [
      "상호호환되는 경우에도 무조건 데이터타입을 일치시켜야 한다",
      "두 SELECT의 컬럼 수가 같아야 한다",
      "UNION은 중복을 제거한다",
      "ORDER BY는 마지막 SELECT에 사용"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10074,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 15,
    "title": "CTAS(CREATE TABLE AS SELECT)로 틀린 것은?",
    "options": [
      "데이터 속성은 재정의 해야한다",
      "NOT NULL은 전달되지 않는다",
      "기본키, 외래키 등 제약사항은 전달되지 않는다",
      "컬럼 타입은 전달되지 않는다"
    ],
    "correctIndex": 0,
    "explanation": "CTAS: 컬럼 타입은 복사, NOT NULL도 복사되지 않음(일부 DB는 복사), PK/FK 미복사"
  },
  {
    "id": 10075,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 16,
    "title": "다음 중 입력 오류가 발생하는 경우는?",
    "options": [
      "INSERT INTO TABLE1 VALUES(1, 20240606)",
      "INSERT INTO TABLE1(col1) VALUES(1)",
      "INSERT INTO TABLE1 SELECT * FROM TABLE2",
      "INSERT INTO TABLE1 VALUES(1, 20240606, '001')"
    ],
    "correctIndex": 3,
    "explanation": "컬럼 수와 값의 수가 일치하지 않으면 오류"
  },
  {
    "id": 10076,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 17,
    "title": "총 주문 금액을 구하는 윈도우 함수에서 올바른 윈도우 절은?",
    "options": [
      "SUM() OVER()",
      "SUM() OVER(PARTITION BY)",
      "SUM() OVER(ORDER BY ... ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)",
      "SUM() OVER(ORDER BY ... RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)"
    ],
    "correctIndex": 3,
    "explanation": ""
  },
  {
    "id": 10077,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 18,
    "title": "2025년 10월 20일 관련 문제 중 틀린 것은?",
    "options": [
      "TO_DATE 함수로 날짜 변환 가능",
      "+ 0.0009 연산으로 날짜 이동",
      "BETWEEN이 20일 AND 21일",
      "날짜 - 1은 전날을 의미"
    ],
    "correctIndex": 2,
    "explanation": "BETWEEN 날짜1 AND 날짜2 에서 21일을 포함하는 것은 잘못된 조건일 수 있음"
  },
  {
    "id": 10078,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 19,
    "title": "SQL 실행 결과로 옳은 것은? (조건절 관련)",
    "options": [
      "NULL 포함",
      "NULL 제외",
      "0 반환",
      "오류 발생"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10079,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 20,
    "title": "AND/OR 연산 순서에 대한 설명으로 옳은 것은?",
    "options": [
      "AND 먼저 적용",
      "OR 먼저 적용",
      "왼쪽에서 오른쪽 순서",
      "괄호 먼저, 그 다음 OR, 그 다음 AND"
    ],
    "correctIndex": 0,
    "explanation": "SQL 연산자 우선순위: NOT > AND > OR"
  },
  {
    "id": 10080,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 21,
    "title": "부서별 max 급여보다 급여가 많은 사원 조회에서 올바른 설명은?",
    "options": [
      "부서가 1개이면 값이 하나이다",
      "부서 수에 따라 오류가 발생할 수 있다",
      "ANY로 바꿔도 동일하다",
      "ALL로 바꿔도 동일하다"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10081,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 22,
    "title": "다음 보기 중 GROUPING SETS와 동일한 표현으로 옳은 것은?",
    "options": [
      "CUBE((컬럼), SUBSTR())",
      "ROLLUP(컬럼, SUBSTR())",
      "ROLLUP...",
      "GROUPING SETS"
    ],
    "correctIndex": 3,
    "explanation": ""
  },
  {
    "id": 10082,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 23,
    "title": "다음 ROUND 함수 중 옳은 것은? (가: Round(136.2,-1)=140, 나: Round(-7.532,2)=-7.53, 다: Round(3.56,1)=3.6)",
    "options": [
      "가",
      "나",
      "가, 나",
      "나, 다"
    ],
    "correctIndex": 0,
    "explanation": "Round(136.2,-1)=140(십의자리 반올림). Round(-7.532,2)=-7.53(맞음). Round(3.56,1)=3.6이 맞음"
  },
  {
    "id": 10083,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 24,
    "title": "yymmdd 형식에서 월(mm)을 추출하지 않는 문장은? (원본: '202505', 치환 대상: '2025')",
    "options": [
      "EXTRACT(YEAR FROM SYSDATE)",
      "EXTRACT(MONTH FROM 테이블)",
      "SUBSTR(컬럼, 5, 2)",
      "yyddmm, EXTRACT(YEAR FROM 테이블)"
    ],
    "correctIndex": 0,
    "explanation": "EXTRACT(YEAR FROM SYSDATE)는 현재 연도 추출로 월(mm) 추출과 무관"
  },
  {
    "id": 10084,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 25,
    "title": "윈도우 함수 결과로 옳은 것은?",
    "options": [
      "숫자 데이터",
      "NULL, 30, 60",
      "60, 60, 30",
      "30, 60, 20"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10085,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 26,
    "title": "테이블 3개와 EXTRACT, UNION ALL, EXCEPT 연산자 사용 결과는?",
    "options": [
      "A, B",
      "A, B, C",
      "A, B, B, C",
      "B, B, C"
    ],
    "correctIndex": 3,
    "explanation": ""
  },
  {
    "id": 10086,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 27,
    "title": "영화 배우 출연료 문제에서 사용된 서브쿼리 유형은?",
    "options": [
      "단순 서브쿼리",
      "다중행 서브쿼리",
      "다중컬럼 서브쿼리",
      "연관 서브쿼리"
    ],
    "correctIndex": 3,
    "explanation": ""
  },
  {
    "id": 10087,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 28,
    "title": "SQL 실행 결과로 적절한 것은?",
    "options": [
      "결과 1",
      "결과 2",
      "결과 3",
      "결과 4"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10088,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 29,
    "title": "START WITH category_id = 11, CONNECT BY PRIOR category_id = 상위카테고리 역방향 전개 결과는?",
    "options": [
      "2부터 시작",
      "역방향 2부터 시작",
      "11부터 시작",
      "역방향 11부터 시작"
    ],
    "correctIndex": 3,
    "explanation": "START WITH 11이므로 11부터 시작, PRIOR 위치에 따라 역방향(자식→부모)"
  },
  {
    "id": 10089,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 30,
    "title": "NATURAL JOIN 관련 문제에서 올바르지 않은 것은?",
    "options": [
      "자동으로 같은 이름 컬럼으로 조인한다",
      "비등가 조인도 가능하다",
      "NATURAL JOIN에 USING절 사용 불가",
      "별칭 사용 불가"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10090,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 31,
    "title": "TCL에서 올바른 것은? (가: 묵시적 COMMIT, 나: 논리 단위는 트랜잭션)",
    "options": [
      "가",
      "나",
      "나, 다",
      "가, 나"
    ],
    "correctIndex": 3,
    "explanation": ""
  },
  {
    "id": 10091,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 32,
    "title": "HAVING COUNT(배송일자) >= 2 조건의 결과는?",
    "options": [
      "전체 그룹",
      "2, 3",
      "1, 3",
      "4, 3"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10092,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 33,
    "title": "SQL 실행 결과로 옳은 것은?",
    "options": [
      "결과 A",
      "결과 B",
      "결과 C",
      "결과 D"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10093,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 34,
    "title": "GROUP BY와 HAVING 조건에서 결과는?",
    "options": [
      "결과 1",
      "결과 2",
      "결과 3",
      "결과 4"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10094,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 35,
    "title": "윈도우 함수 결과는?",
    "options": [
      "결과 1",
      "결과 2",
      "결과 3",
      "결과 4"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10095,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 36,
    "title": "서브쿼리 결과는?",
    "options": [
      "결과 A",
      "결과 B",
      "결과 C",
      "결과 D"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10096,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 37,
    "title": "MAX, SUM, FIRST_VALUE, 누적값 관련 문제 (Col1: max, Col2: sum, Col3: 앞뒤 200값) 결과는?",
    "options": [
      "100, 200, 300, 400, 100, 200",
      "100, 100, 100, 200, 300, 400",
      "100, 100, 100, 200, 300, 400 / 누적합",
      "100, 100, 100, 100, 100, 100"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10097,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 38,
    "title": "JOIN 조건 결과는?",
    "options": [
      "결과 1",
      "결과 2",
      "결과 3",
      "결과 4"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10098,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 39,
    "title": "SQL 실행 결과는?",
    "options": [
      "결과 A",
      "결과 B",
      "결과 C",
      "결과 D"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10099,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 40,
    "title": "WHERE 1=0 조건의 결과는?",
    "options": [
      "전체 데이터 반환",
      "1=2 오류",
      "1 반환",
      "공집합"
    ],
    "correctIndex": 3,
    "explanation": "WHERE 1=0은 항상 거짓이므로 결과 없음(공집합). 1=2도 거짓이지만 문법 오류는 아님"
  },
  {
    "id": 10100,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "1과목",
    "number": 1,
    "title": "다음 중 키(Key) 엔터티가 아닌 것은? (ERD 문제)",
    "options": [
      "사원",
      "프로젝트",
      "회사",
      "고객"
    ],
    "correctIndex": 1,
    "explanation": "키 엔터티(기본 엔터티): 업무에서 관리할 핵심 대상. 프로젝트는 행위 엔터티"
  },
  {
    "id": 10101,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "1과목",
    "number": 2,
    "title": "3정규형 관련 설명 중 옳지 않은 것은?",
    "options": [
      "이행함수 종속성을 배제하지 않는다",
      "1차 정규화는 원자값을 갖는 것이다",
      "2차 정규화는 부분함수 종속 제거이다",
      "3차 정규화는 이행함수 종속 제거이다"
    ],
    "correctIndex": 0,
    "explanation": "3NF는 이행함수 종속성을 배제(제거)하는 것이 목적"
  },
  {
    "id": 10102,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "1과목",
    "number": 3,
    "title": "속성의 특징으로 옳은 것은?",
    "options": [
      "속성은 엔터티를 설명하는 요소이다",
      "하나의 속성은 두 개 이상의 값을 가질 수 있다",
      "속성은 인스턴스 없이 존재할 수 있다",
      "기본속성은 다른 속성으로부터 계산된다"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10103,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "1과목",
    "number": 4,
    "title": "출판사 문제에서 옳은 설명은?",
    "options": [
      "제목이 중복되는 것이 있다",
      "출판사는 여러 책을 출간할 수 있다",
      "책은 하나의 출판사에만 속한다",
      "책 제목은 주식별자가 될 수 없다"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10104,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "1과목",
    "number": 5,
    "title": "마더보드 관련 ERD 문제 (점선과 실선 연결)",
    "options": [
      "마더보드는 반드시 컴퓨터에 포함된다",
      "컴퓨터에 마더보드를 쓸수도 있고 안쓸 수도 있다",
      "마더보드는 독립적으로 존재할 수 없다",
      "컴퓨터와 마더보드는 1:1 관계이다"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10105,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "1과목",
    "number": 6,
    "title": "동일한 생명주기를 가지는 경우 사용하는 관계는?",
    "options": [
      "비식별자 관계",
      "식별자 관계",
      "상호배타 관계",
      "슈퍼-서브타입 관계"
    ],
    "correctIndex": 1,
    "explanation": "식별자 관계: 부모와 자식의 생명주기가 동일할 때 주로 사용"
  },
  {
    "id": 10106,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "1과목",
    "number": 7,
    "title": "이행적 함수 종속을 제거하는 정규화 단계는?",
    "options": [
      "제1정규화",
      "제2정규화",
      "제3정규화",
      "BCNF"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10107,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "1과목",
    "number": 8,
    "title": "상호배타적인 관계를 가장 잘 설명한 것은?",
    "options": [
      "하나의 엔터티가 두 개 이상의 엔터티와 관계를 가진다",
      "두 엔터티 중 하나하고만 관계를 가진다",
      "법인 또는 개인 차량 중 하나",
      "모든 엔터티가 필수 참여한다"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10108,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "1과목",
    "number": 9,
    "title": "학생-수강 ERD 문제에서 올바른 설명은?",
    "options": [
      "수강번호는 겹치지 않는다",
      "학생 테이블에 있으면 수강목록에도 무조건 있어야 한다",
      "동일한 수강번호를 가질 수 없다",
      "수강은 여러 학생이 공유할 수 있다"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10109,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "1과목",
    "number": 10,
    "title": "트랜잭션의 특성 중 부분적으로 수정이 불가능한 특성은?",
    "options": [
      "원자성(Atomicity)",
      "일관성(Consistency)",
      "고립성(Isolation)",
      "영속성(Durability)"
    ],
    "correctIndex": 0,
    "explanation": "원자성: All or Nothing. 트랜잭션은 전부 완료되거나 전부 취소되어야 함"
  },
  {
    "id": 10110,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 1,
    "title": "다음 중 결과가 다른 것은? ('xxSQLxx'에서 'x' 제거)",
    "options": [
      "LTRIM('xxSQLxx', 'x')",
      "RTRIM('SQLxx','x')",
      "REPLACE('xxSQLxx','x')",
      "TRIM('x' FROM 'xxSQLxx')"
    ],
    "correctIndex": 2,
    "explanation": "REPLACE는 모든 'x'를 제거하여 'SQL'. LTRIM/RTRIM/TRIM은 양쪽/한쪽 끝의 'x'만 제거"
  },
  {
    "id": 10111,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 2,
    "title": "SQL 실행 결과: LIKE '%a_c%'와 LIKE '%a\\\\\\_c%' (\\\\은 이스케이프) 각각 몇 건?",
    "options": [
      "2, 4",
      "4, 2",
      "4, 6",
      "6, 4"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10112,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 3,
    "title": "정규표현식 '^\\\\w*$'에 해당하지 않는 것은?",
    "options": [
      "ER-123",
      "abcde(영어 소문자)",
      "SQL123",
      "HelloWorld"
    ],
    "correctIndex": 0,
    "explanation": "^\\\\w*$: 단어문자(알파벳, 숫자, _)만으로 구성. 하이픈(-) 포함 시 해당 안됨"
  },
  {
    "id": 10113,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 4,
    "title": "REVOKE SELECT ON R FROM U2 RESTRICT 후 SELECT 권한이 있는 유저는?",
    "options": [
      "DBA, U1",
      "DBA",
      "DBA, U1, U3",
      "DBA, U1, U2, U3"
    ],
    "correctIndex": 3,
    "explanation": "RESTRICT: 다른 사용자에게 부여된 권한이 있으면 REVOKE 실패 → 모든 유저 권한 유지"
  },
  {
    "id": 10114,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 5,
    "title": "JOIN 문제에서 CROSS JOIN + INNER JOIN + FULL OUTER JOIN 총 개수는?",
    "options": [
      "17",
      "18",
      "19",
      "20"
    ],
    "correctIndex": 3,
    "explanation": ""
  },
  {
    "id": 10115,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 6,
    "title": "SQL 실행 결과는?",
    "options": [
      "결과 A",
      "결과 B",
      "결과 C",
      "결과 D"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10116,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 7,
    "title": "계층형 질의문에 대한 설명으로 틀린 것은?",
    "options": [
      "PRIOR 키워드는 CONNECT BY절에만 사용할 수 있으며 PRIOR 자식=부모 형태로 순방향/역방향 선택 가능",
      "WHERE 절은 모든 전개 후 필터 조건으로 활용된다",
      "NO CYCLE은 무한 루프를 방지한다",
      "SQL Server의 계층형 질의문은 CTE를 재귀호출하여 계층구조를 전개한다"
    ],
    "correctIndex": 0,
    "explanation": "PRIOR는 CONNECT BY 외에 SELECT, WHERE절에도 사용 가능"
  },
  {
    "id": 10117,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 8,
    "title": "NULL이 있는 테이블에서 AVG를 구하는 문제 결과는?",
    "options": [
      "NULL 반환",
      "10, 20, 20",
      "NULL 포함 평균",
      "0 반환"
    ],
    "correctIndex": 1,
    "explanation": "AVG는 NULL을 제외하고 계산"
  },
  {
    "id": 10118,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 9,
    "title": "빈칸에 들어갈 JOIN 용어로 옳은 것은?",
    "options": [
      "RIGHT OUTER JOIN",
      "LEFT OUTER JOIN",
      "FULL OUTER JOIN",
      "INNER JOIN"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10119,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 10,
    "title": "다음 SQL 설명 중 틀린 것은?",
    "options": [
      "NULL 비교는 IS NULL을 사용해야 한다",
      "COUNT(*)는 NULL을 포함하여 카운트한다",
      "WHERE절에 집계함수를 직접 사용할 수 있다",
      "HAVING절은 GROUP BY와 함께 사용한다"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10120,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 11,
    "title": "ROLLUP, CUBE 관련 문제에서 HAVING + GROUPING() 사용 시 해당하는 것은?",
    "options": [
      "ROLLUP",
      "GROUPING SETS",
      "CUBE",
      "PARTITION BY"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10121,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 12,
    "title": "NTILE(2) 함수에서 4개 행을 2개 그룹으로 나눈 결과는?",
    "options": [
      "1, 1, 2, 2 / 2번째 그룹: 3, 4",
      "1, 2, 1, 2",
      "1, 1, 1, 2",
      "2, 2, 1, 1"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10122,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 13,
    "title": "A={1,2,3}, B={6,7}, C={(1,6),(2,6),(3,6),(1,7),(2,7),(3,7)}에서 사용된 조인은?",
    "options": [
      "LEFT OUTER JOIN",
      "CROSS JOIN",
      "INNER JOIN",
      "SELF JOIN"
    ],
    "correctIndex": 1,
    "explanation": "A(3행) × B(2행) = C(6행): 모든 조합 → CROSS JOIN"
  },
  {
    "id": 10123,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 14,
    "title": "JOIN 조건 중 다른 방식으로 동작하는 것은?",
    "options": [
      "NATURAL JOIN",
      "USING절",
      "ON절 사용",
      "WHERE절 IN"
    ],
    "correctIndex": 0,
    "explanation": "NATURAL JOIN: 같은 이름 컬럼 자동 조인, 별칭 사용 불가 → 다른 방식"
  },
  {
    "id": 10124,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 15,
    "title": "아래 SQL의 실행 결과로 반환되는 값은? (Tbl_A, Tbl_B 조인, DISTINCT A,B)",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 2,
    "explanation": "Tbl_B에서 UPPER(E)='E'인 D값 추출 후 Tbl_A와 조인, DISTINCT(A,B) 카운트"
  },
  {
    "id": 10125,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 16,
    "title": "COLUMN1의 값이 NULL이 아닌 경우를 찾는 SQL로 가장 적절한 것은?",
    "options": [
      "SELECT * FROM MYTABLE WHERE COLUMN1 IS NOT NULL",
      "SELECT * FROM MYTABLE WHERE COLUMN1 <> NULL",
      "SELECT * FROM MYTABLE WHERE COLUMN1 != NULL",
      "SELECT * FROM MYTABLE WHERE COLUMN1 NOT NULL"
    ],
    "correctIndex": 0,
    "explanation": "NULL 비교는 반드시 IS NULL / IS NOT NULL 사용"
  },
  {
    "id": 10126,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 17,
    "title": "SQL 실행 결과로 옳은 것은?",
    "options": [
      "결과 A",
      "결과 B",
      "결과 C",
      "결과 D"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10127,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 18,
    "title": "FETCH FIRST 3 ROWS ONLY와 NULLS LAST 포함 문제의 결과는?",
    "options": [
      "11, 1004 / 10, 1002 / 11, 1002",
      "10, 1002 / 11, 1002 / 11, 1004",
      "11, 1002 / 11, 1004 / 10, 1002",
      "10, 1002 / 11, 1004 / 11, 1002"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10128,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 19,
    "title": "SQL 집계 함수 결과는?",
    "options": [
      "결과 1",
      "결과 2",
      "결과 3",
      "결과 4"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10129,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 20,
    "title": "서브쿼리 결과는?",
    "options": [
      "결과 A",
      "결과 B",
      "결과 C",
      "결과 D"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10130,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 21,
    "title": "윈도우 함수 결과는?",
    "options": [
      "결과 1",
      "결과 2",
      "결과 3",
      "결과 4"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10131,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 22,
    "title": "SELECT COUNT(*) FROM DUAL HAVING COUNT(*) > 4; 의 결과는?",
    "options": [
      "1",
      "4",
      "9999",
      "공집합"
    ],
    "correctIndex": 3,
    "explanation": "DUAL은 1건. COUNT(*)=1 이 4보다 크지 않으므로 HAVING 조건 불만족 → 공집합"
  },
  {
    "id": 10132,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 23,
    "title": "SQL 실행 결과는?",
    "options": [
      "결과 A",
      "결과 B",
      "결과 C",
      "결과 D"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10133,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 24,
    "title": "ROLLUP과 GROUPING에서 HAVING grouping(id) + grouping(type) != 1 결과 ID 목록은?",
    "options": [
      "a, a, a, a, b, b, NULL",
      "a, a, b, b, NULL",
      "a, a, b, b",
      "a, b"
    ],
    "correctIndex": 1,
    "explanation": "grouping(id)+grouping(type)!=1 조건: 전체합계(1+1=2), 행별(0+0=0)만 포함"
  },
  {
    "id": 10134,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 25,
    "title": "GROUPING SETS에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "정렬하려면 ORDER BY를 사용한다",
      "인수 순서가 달라지면 결과도 달라진다",
      "여러 컬럼 집계가 가능하다",
      "UNION ALL + GROUP BY로 같은 결과가 나온다"
    ],
    "correctIndex": 1,
    "explanation": "GROUPING SETS는 인수 순서와 무관하게 같은 결과"
  },
  {
    "id": 10135,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 26,
    "title": "SQL 실행 결과는?",
    "options": [
      "결과 A",
      "결과 B",
      "결과 C",
      "결과 D"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10136,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 27,
    "title": "다음 중 데이터 조작어(DML)가 아닌 것을 고르시오",
    "options": [
      "INSERT",
      "GRANT",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 1,
    "explanation": "GRANT/REVOKE: DCL(데이터 제어어). DML: INSERT, SELECT, UPDATE, DELETE"
  },
  {
    "id": 10137,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 28,
    "title": "아래 SQL의 실행결과로 적절한 것은?",
    "options": [
      "결과 1",
      "결과 2",
      "결과 3",
      "결과 4"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10138,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 29,
    "title": "SELECT COUNT(*) FROM DUAL CONNECT BY LEVEL <= 2 의 결과는?",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correctIndex": 2,
    "explanation": "DUAL 1행에서 LEVEL<=2이면 2행 생성 → COUNT(*)=2"
  },
  {
    "id": 10139,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 30,
    "title": "SQL 실행 결과는?",
    "options": [
      "결과 A",
      "결과 B",
      "결과 C",
      "결과 D"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10140,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 31,
    "title": "SELECT REGEXP_INSTR('13123123123', '312') FROM DUAL; 의 결과는?",
    "options": [
      "2",
      "4",
      "3",
      "6"
    ],
    "correctIndex": 2,
    "explanation": "REGEXP_INSTR: '312'가 처음 나타나는 위치. '13123...' → 2번 인덱스의 '3' 시작"
  },
  {
    "id": 10141,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 32,
    "title": "SQL 실행 결과는?",
    "options": [
      "결과 A",
      "결과 B",
      "결과 C",
      "결과 D"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10142,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 33,
    "title": "SELECT '''''A''''' R1 FROM DUAL; 의 결과는?",
    "options": [
      "A",
      "'A'",
      "''A''",
      "'''A'''"
    ],
    "correctIndex": 0,
    "explanation": "Oracle에서 작은따옴표 2개('')는 하나의 작은따옴표를 의미. '''''=''+''+ ''='''A'''"
  },
  {
    "id": 10143,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 34,
    "title": "CASCADE 관련 DROP TABLE 문제에서 옳은 설명은?",
    "options": [
      "부모 테이블만 삭제된다",
      "T1 테이블과 T1을 참조하는 FK 제약조건을 함께 삭제",
      "자식 테이블의 PK를 삭제한다",
      "자식 테이블 전부를 삭제한다"
    ],
    "correctIndex": 1,
    "explanation": "DROP TABLE ... CASCADE CONSTRAINTS: 해당 테이블을 참조하는 FK 제약조건도 함께 삭제"
  },
  {
    "id": 10144,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 35,
    "title": "SQL 관련 문제 35번",
    "options": [
      "보기 ①",
      "보기 ②",
      "보기 ③",
      "보기 ④"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10145,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 36,
    "title": "SQL 관련 문제 36번",
    "options": [
      "보기 ①",
      "보기 ②",
      "보기 ③",
      "보기 ④"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10146,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 37,
    "title": "SQL 관련 문제 37번",
    "options": [
      "보기 ①",
      "보기 ②",
      "보기 ③",
      "보기 ④"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10147,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 38,
    "title": "SQL 관련 문제 38번",
    "options": [
      "보기 ①",
      "보기 ②",
      "보기 ③",
      "보기 ④"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10148,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 39,
    "title": "SQL 관련 문제 39번",
    "options": [
      "보기 ①",
      "보기 ②",
      "보기 ③",
      "보기 ④"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10149,
    "examSetId": "round-58",
    "examLabel": "제58회 (2025년 8월)",
    "round": 58,
    "subject": "2과목",
    "number": 40,
    "title": "SQL 관련 문제 40번",
    "options": [
      "보기 ①",
      "보기 ②",
      "보기 ③",
      "보기 ④"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10150,
    "examSetId": "round-57",
    "examLabel": "제57회 (2025년 5월)",
    "round": 57,
    "subject": "1과목",
    "number": 1,
    "title": "아래 설명에서 설명하는 스키마 구조로 가장 적절한 것은? [모든 사용자 관점을 통합한 조직 전체 관점의 통합적 표현]",
    "options": [
      "외부스키마",
      "개념스키마",
      "내부스키마",
      "논리스키마"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10151,
    "examSetId": "round-57",
    "examLabel": "제57회 (2025년 5월)",
    "round": 57,
    "subject": "1과목",
    "number": 2,
    "title": "다음 중 엔터티 생성 시점에 따른 분류가 아닌 것은?",
    "options": [
      "기본엔터티",
      "중심엔터티",
      "사건엔터티",
      "행위엔터티"
    ],
    "correctIndex": 2,
    "explanation": "발생시점 분류: 기본, 중심, 행위 엔터티. 사건엔터티는 없는 분류"
  },
  {
    "id": 10152,
    "examSetId": "round-57",
    "examLabel": "제57회 (2025년 5월)",
    "round": 57,
    "subject": "1과목",
    "number": 3,
    "title": "제1정규화를 만족시키기 위한 것은?",
    "options": [
      "직원 속성 값이 두 개인 것이 있어서 직원1컬럼, 직원2컬럼을 둔다",
      "테이블을 더 작은 테이블로 분리한다",
      "개개의 테이블별로 직원을 나눈다",
      "반복 그룹 속성을 제거하여 별도 테이블로 분리한다"
    ],
    "correctIndex": 3,
    "explanation": "1NF: 원자값. 반복 그룹/다중값 속성을 별도 테이블로 분리"
  },
  {
    "id": 10153,
    "examSetId": "round-57",
    "examLabel": "제57회 (2025년 5월)",
    "round": 57,
    "subject": "1과목",
    "number": 4,
    "title": "다른 속성으로부터 계산이나 변형이 되어 생성되는 속성은 무엇인가?",
    "options": [
      "기본속성",
      "설계속성",
      "일반속성",
      "파생속성"
    ],
    "correctIndex": 3,
    "explanation": ""
  },
  {
    "id": 10154,
    "examSetId": "round-57",
    "examLabel": "제57회 (2025년 5월)",
    "round": 57,
    "subject": "1과목",
    "number": 5,
    "title": "주식별자에 관한 설명 중 틀린 것은?",
    "options": [
      "주식별자는 NULL이어도 된다",
      "유일해야 한다",
      "유일성을 만족하는 선에서 최소의 값을 가져야 한다",
      "자주 변하지 않아야 한다"
    ],
    "correctIndex": 0,
    "explanation": "주식별자: 유일성, 최소성, 불변성, 존재성(NOT NULL) 만족"
  },
  {
    "id": 10155,
    "examSetId": "round-57",
    "examLabel": "제57회 (2025년 5월)",
    "round": 57,
    "subject": "1과목",
    "number": 6,
    "title": "관계 테이블/식별자 관련 설명 중 틀린 것은?",
    "options": [
      "식별자 관계는 실선으로 표현한다",
      "FK는 외부식별자이다",
      "FK는 내부식별자이다",
      "비식별자 관계는 점선으로 표현한다"
    ],
    "correctIndex": 2,
    "explanation": "FK(외래키)는 다른 테이블에서 가져온 외부식별자. 내부식별자는 해당 엔터티에서 자체 생성"
  },
  {
    "id": 10156,
    "examSetId": "round-57",
    "examLabel": "제57회 (2025년 5월)",
    "round": 57,
    "subject": "1과목",
    "number": 7,
    "title": "동일한 연락처를 가진 사람이 2명인 문제에서 WHERE 절 조건의 오류는?",
    "options": [
      "IS NULL 사용 오류",
      "=NULL 사용 오류",
      "NOT IN 사용 오류",
      "LIKE 패턴 오류"
    ],
    "correctIndex": 1,
    "explanation": "NULL 비교는 = 대신 IS NULL 사용해야 함"
  },
  {
    "id": 10157,
    "examSetId": "round-57",
    "examLabel": "제57회 (2025년 5월)",
    "round": 57,
    "subject": "1과목",
    "number": 8,
    "title": "내부식별자, 인조식별자 설명 중 틀린 것은?",
    "options": [
      "인조식별자는 업무적으로 의미가 없다",
      "본질식별자는 업무에서 자연스럽게 발생한다",
      "FK는 내부식별자이다",
      "PK는 주식별자이다"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10158,
    "examSetId": "round-57",
    "examLabel": "제57회 (2025년 5월)",
    "round": 57,
    "subject": "1과목",
    "number": 9,
    "title": "엔터티 관계에서 선택 조건을 판별하는 문제에서 옳은 것은?",
    "options": [
      "필수 참여",
      "선택 참여",
      "양쪽 모두 필수",
      "양쪽 모두 선택"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10159,
    "examSetId": "round-57",
    "examLabel": "제57회 (2025년 5월)",
    "round": 57,
    "subject": "1과목",
    "number": 10,
    "title": "\"상품엔 주문이 무조건 포함된다\"와 \"주문엔 상품이 무조건 포함된다\" 중 틀린 것은?",
    "options": [
      "전자 (상품엔 주문이 무조건 포함된다)",
      "후자 (주문엔 상품이 무조건 포함된다)",
      "둘 다 맞다",
      "둘 다 틀리다"
    ],
    "correctIndex": 0,
    "explanation": "상품은 주문이 없어도 존재할 수 있음. 하지만 주문은 반드시 상품을 포함"
  },
  {
    "id": 10160,
    "examSetId": "round-57",
    "examLabel": "제57회 (2025년 5월)",
    "round": 57,
    "subject": "2과목",
    "number": 11,
    "title": "SELECT * FROM tab1 ORDER BY no DESC OFFSET 3 ROWS FETCH FIRST 5 ROWS ONLY; 설명 중 틀린 것 은?",
    "options": [
      "3번째 행부터 시작한다",
      "3번째 row를 제외한다",
      "5개 이상 행이 나올 수 있다",
      "최대 5개 행을 반환한다"
    ],
    "correctIndex": 2,
    "explanation": "FETCH FIRST 5 ROWS ONLY: 정확히 5개(또는 그 이하) 반환. WITH TIES가 없으면 동순위 포함 안됨"
  },
  {
    "id": 10161,
    "examSetId": "round-57",
    "examLabel": "제57회 (2025년 5월)",
    "round": 57,
    "subject": "2과목",
    "number": 12,
    "title": "SUBSTR 함수 결과 중 다른 결과는?",
    "options": [
      "SUBSTR('abcdefgh', 7)",
      "SUBSTR('abcdefgh', -2)",
      "SUBSTR('abcdefgh', 8, -2)",
      "SUBSTR('abcdefgh', INSTR('abcdefgh','g'), 2)"
    ],
    "correctIndex": 2,
    "explanation": "length에 음수가 들어오면 NULL 반환. 나머지 셋은 모두 'gh' 반환"
  },
  {
    "id": 10162,
    "examSetId": "round-57",
    "examLabel": "제57회 (2025년 5월)",
    "round": 57,
    "subject": "2과목",
    "number": 13,
    "title": "COMMIT에 대한 설명 중 틀린 것은?",
    "options": [
      "COMMIT 전 변경사항은 롤백 가능하다",
      "COMMIT 후 변경사항은 영구 저장된다",
      "COMMIT 전에 외부 사용자가 변경된 데이터를 확인할 수 있다",
      "COMMIT은 TCL에 해당한다"
    ],
    "correctIndex": 2,
    "explanation": "COMMIT 전 변경사항은 현재 세션에서만 보임"
  },
  {
    "id": 10163,
    "examSetId": "round-57",
    "examLabel": "제57회 (2025년 5월)",
    "round": 57,
    "subject": "2과목",
    "number": 14,
    "title": "NULL에 대한 설명으로 옳은 것은?",
    "options": [
      "NULL은 0과 같다",
      "NULL은 집계함수에서 제외된다",
      "NULL과 NULL은 같다",
      "NULL과의 비교는 =로 가능하다"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10164,
    "examSetId": "round-57",
    "examLabel": "제57회 (2025년 5월)",
    "round": 57,
    "subject": "2과목",
    "number": 15,
    "title": "SQL 명령어로 적절하지 않은 것은?",
    "options": [
      "DDL: TRUNCATE",
      "DML: DROP",
      "DCL: REVOKE",
      "TCL: COMMIT"
    ],
    "correctIndex": 1,
    "explanation": "DROP은 DDL. DML: INSERT, SELECT, UPDATE, DELETE"
  },
  {
    "id": 10165,
    "examSetId": "round-57",
    "examLabel": "제57회 (2025년 5월)",
    "round": 57,
    "subject": "2과목",
    "number": 16,
    "title": "집합 연산자 INTERSECT에 대한 설명으로 가장 적절한 것은?",
    "options": [
      "두 집합의 합집합을 구한다",
      "두 집합의 차집합을 구한다",
      "여러 SQL의 결과에 대한 교집합으로 중복된 행은 하나로 출력한다",
      "중복을 포함한 교집합을 구한다"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10166,
    "examSetId": "round-57",
    "examLabel": "제57회 (2025년 5월)",
    "round": 57,
    "subject": "2과목",
    "number": 17,
    "title": "여러 개의 컬럼이 반환되고 메인 쿼리의 조건절에서 동시에 비교되는 서브쿼리의 유형은?",
    "options": [
      "단일행 서브쿼리",
      "다중행 서브쿼리",
      "인라인뷰",
      "다중컬럼 서브쿼리"
    ],
    "correctIndex": 3,
    "explanation": ""
  },
  {
    "id": 10167,
    "examSetId": "round-57",
    "examLabel": "제57회 (2025년 5월)",
    "round": 57,
    "subject": "2과목",
    "number": 32,
    "title": "LEFT/RIGHT/FULL OUTER/INNER JOIN 행 수의 총합 (TAB1: A,B,C,D / TAB2: E,F,D,G)",
    "options": [
      "12개",
      "14개",
      "16개",
      "18개"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10168,
    "examSetId": "round-57",
    "examLabel": "제57회 (2025년 5월)",
    "round": 57,
    "subject": "2과목",
    "number": 34,
    "title": "SELECT NVL(COUNT(*), 9999) FROM TABLE WHERE 1=2 의 결과값은?",
    "options": [
      "9999",
      "NULL",
      "1",
      "0"
    ],
    "correctIndex": 3,
    "explanation": "COUNT(*)는 행이 없어도 0 반환. NVL(0, 9999)=0(0은 NULL이 아니므로)"
  },
  {
    "id": 10169,
    "examSetId": "round-57",
    "examLabel": "제57회 (2025년 5월)",
    "round": 57,
    "subject": "2과목",
    "number": 35,
    "title": "동일한 이름의 컬럼을 자동으로 조인하는 조인 방식은?",
    "options": [
      "INNER JOIN",
      "OUTER JOIN",
      "NATURAL JOIN",
      "CROSS JOIN"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10170,
    "examSetId": "round-57",
    "examLabel": "제57회 (2025년 5월)",
    "round": 57,
    "subject": "2과목",
    "number": 38,
    "title": "SQL Server에서 Kim, Tim만 나오는 조건은?",
    "options": [
      "WHERE name LIKE 'K%' OR name LIKE 'T%'",
      "WHERE name IN ('Kim','Tim')",
      "WHERE name LIKE '[KT]%'",
      "WHERE name LIKE '[KT]im'"
    ],
    "correctIndex": 3,
    "explanation": "SQL Server의 [] 패턴: [KT]im → K 또는 T로 시작하고 im으로 끝나는 4글자"
  },
  {
    "id": 10171,
    "examSetId": "round-57",
    "examLabel": "제57회 (2025년 5월)",
    "round": 57,
    "subject": "2과목",
    "number": 50,
    "title": "부서별 최고연봉 사원을 구하는 문제 결과는?",
    "options": [
      "강감찬 3000, 김유신 3000, 변사또 3000",
      "강감찬 4500, 김유신 4500, 변사또 3000",
      "강감찬 3000, 김유신 4500, 변사또 4500",
      "강감찬 4500, 김유신 3000, 변사또 4500"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10172,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "1과목",
    "number": 1,
    "title": "스키마의 종류로 옳지 않은 것은?",
    "options": [
      "응용 스키마",
      "외부 스키마",
      "개념 스키마",
      "내부 스키마"
    ],
    "correctIndex": 0,
    "explanation": "스키마 3계층: 외부 스키마, 개념 스키마, 내부 스키마"
  },
  {
    "id": 10173,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "1과목",
    "number": 2,
    "title": "데이터 모델링에 대한 설명으로 옳지 않은 것은?",
    "options": [
      "현실 세계를 추상화하는 과정이다",
      "업무 규칙이 모델에 포함되어야 한다",
      "논리적 데이터 구조를 표현한다",
      "업무 규칙이 모델에 포함되지 않아도 된다"
    ],
    "correctIndex": 3,
    "explanation": ""
  },
  {
    "id": 10174,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "1과목",
    "number": 3,
    "title": "발생 시점에 따라 구분할 수 있는 엔터티 유형으로 적절하지 않은 것은?",
    "options": [
      "관계 엔터티",
      "행위 엔터티",
      "중심 엔터티",
      "기본 엔터티"
    ],
    "correctIndex": 0,
    "explanation": "발생시점 분류: 기본, 중심, 행위 엔터티"
  },
  {
    "id": 10175,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "1과목",
    "number": 4,
    "title": "다음 설명 중 옳지 않은 것은?",
    "options": [
      "고객과 상품은 기본 엔터티다",
      "주문은 사건 엔터티다",
      "주문 상품 엔터티는 주문과 상품의 관계에 의해 생성된다",
      "중심 엔터티는 반드시 기본 엔터티와 연결된다"
    ],
    "correctIndex": 1,
    "explanation": "주문은 행위 엔터티에 해당"
  },
  {
    "id": 10176,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "1과목",
    "number": 5,
    "title": "다른 속성을 이용하여 결과를 도출하는 속성은?",
    "options": [
      "설계 속성",
      "기본 속성",
      "파생 속성",
      "관계 속성"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10177,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "1과목",
    "number": 6,
    "title": "속성 유형 문제에서 올바르게 짝지어진 것은? (주소=복합속성, 연락처=다중값 속성)",
    "options": [
      "가, 라 (주소=복합속성, 연락처=다중값 속성)",
      "나, 다",
      "가, 나",
      "다, 라"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10178,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "1과목",
    "number": 7,
    "title": "주어진 ERD 설명 중 옳지 않은 것은?",
    "options": [
      "의사는 수술을 집도한다",
      "수술은 반드시 의사가 집도해야 한다",
      "하나의 수술에 여러 의사가 참여한다",
      "의사가 집도하지 않는 수술이 있을 수 있다"
    ],
    "correctIndex": 3,
    "explanation": ""
  },
  {
    "id": 10179,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "1과목",
    "number": 8,
    "title": "업무에 의해 만들어진 식별자로 옳은 것은?",
    "options": [
      "인조식별자",
      "외부식별자",
      "본질식별자",
      "대리식별자"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10180,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "1과목",
    "number": 9,
    "title": "모든 일반 속성이 주식별자에 종속되어 있는 정규형은?",
    "options": [
      "제1정규형",
      "제2정규형",
      "제3정규형",
      "BCNF"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10181,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "1과목",
    "number": 10,
    "title": "정규화에 대한 설명으로 옳지 않은 것은?",
    "options": [
      "데이터 중복을 줄인다",
      "데이터 무결성을 높인다",
      "조인이 증가할 수 있다",
      "정규화를 많이 할수록 성능이 저하된다"
    ],
    "correctIndex": 3,
    "explanation": "정규화와 성능은 직접 비례하지 않으며, 반정규화가 필요한 경우도 있음"
  },
  {
    "id": 10182,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 11,
    "title": "우선순위가 가장 높은 연산자는?",
    "options": [
      "AND",
      "괄호",
      "OR",
      "NOT"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10183,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 12,
    "title": "COUNT(ALL COL1) WHERE COL2='A' 와 COUNT(DISTINCT COL1) 결과는?",
    "options": [
      "2, 3",
      "3, 4",
      "4, 3",
      "3, 3"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10184,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 13,
    "title": "JOIN 종류별 결과 개수 비교에서 개수가 FULL OUTER JOIN만 달랐을 때는?",
    "options": [
      "INNER JOIN",
      "LEFT OUTER JOIN",
      "RIGHT OUTER JOIN",
      "FULL OUTER JOIN"
    ],
    "correctIndex": 3,
    "explanation": ""
  },
  {
    "id": 10185,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 14,
    "title": "결과가 다른 조건 표현은?",
    "options": [
      "COL3 >= 200 AND COL4 <= 200",
      "NOT (200 < COL3 OR 200 > COL4)",
      "200 BETWEEN COL3 AND COL4",
      "COL3 <= 200 AND COL4 >= 200"
    ],
    "correctIndex": 1,
    "explanation": "드모르간: NOT(A OR B) = NOT A AND NOT B = COL3 <= 200 AND COL4 >= 200이어야 맞음"
  },
  {
    "id": 10186,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 15,
    "title": "MAX(COL2) KEEP(DENSE_RANK FIRST ORDER BY COL1) FROM TAB1 결과는?",
    "options": [
      "10",
      "20",
      "15",
      "5"
    ],
    "correctIndex": 1,
    "explanation": "COL1 최솟값 행들 중 COL2의 최대값"
  },
  {
    "id": 10187,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 16,
    "title": "SELECT COALESCE(NULL, NULL, 'S', NULL, 'QL') FROM DUAL 결과는?",
    "options": [
      "S",
      "QL",
      "NULL",
      "SQL"
    ],
    "correctIndex": 0,
    "explanation": "COALESCE: NULL이 아닌 첫 번째 값 반환 → S"
  },
  {
    "id": 10188,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 17,
    "title": "CEIL(9.36), ROUND(9.48), FLOOR(9.72) 결과는?",
    "options": [
      "10, 9, 9",
      "10, 10, 9",
      "9, 10, 9",
      "10, 9, 10"
    ],
    "correctIndex": 0,
    "explanation": "CEIL(9.36)=10, ROUND(9.48)=9(소수점 아래 반올림 → 0.48<0.5이므로 9), FLOOR(9.72)=9"
  },
  {
    "id": 10189,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 18,
    "title": "COUNT(DISTINCT 물품) WHERE 물품 IN ('p', NULL)와 COUNT(*) 결과는?",
    "options": [
      "3, 0",
      "2, 3",
      "0, 3",
      "3, 3"
    ],
    "correctIndex": 0,
    "explanation": "IN절에 NULL 포함 시 NULL과의 비교는 UNKNOWN이므로 COUNT(*)에서 제외"
  },
  {
    "id": 10190,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 19,
    "title": "교집합 연산자는?",
    "options": [
      "UNION",
      "INTERSECT",
      "EXCEPT",
      "MINUS"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10191,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 20,
    "title": "TRUNCATE에 관한 설명으로 옳은 것은?",
    "options": [
      "롤백이 가능하다",
      "WHERE절로 특정 행만 삭제 가능하다",
      "특정 행만 삭제하는 것은 불가능하다",
      "DML에 해당한다"
    ],
    "correctIndex": 2,
    "explanation": "TRUNCATE: 전체 행 삭제(DDL). 특정 행 삭제는 DELETE 사용"
  },
  {
    "id": 10192,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 22,
    "title": "결과가 다른 것은? (NULL 비교)",
    "options": [
      "CASE 컬럼 WHEN NULL THEN -1 ELSE 0 END",
      "CASE WHEN 컬럼 IS NULL THEN -1 ELSE 0 END",
      "DECODE(컬럼, NULL, -1, 0)",
      "NVL(컬럼, -1)"
    ],
    "correctIndex": 0,
    "explanation": "CASE 값 WHEN NULL은 항상 0 반환(NULL=NULL은 FALSE). IS NULL 방식과 다름"
  },
  {
    "id": 10193,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 23,
    "title": "셀프조인을 수행할 수 있는 경우는?",
    "options": [
      "두 테이블이 동일한 구조일 때",
      "한 테이블 내에 컬럼이 연관관계가 있는 경우",
      "외래키가 없을 때",
      "PK가 중복될 때"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10194,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 24,
    "title": "SELECT COL1 WHERE COL1='z'와 SELECT MAX(COL1) WHERE COL1='z' 결과는?",
    "options": [
      "z, z",
      "공집합, z",
      "공집합, NULL",
      "z, NULL"
    ],
    "correctIndex": 2,
    "explanation": "데이터가 없으면 SELECT = 공집합, MAX = NULL 반환"
  },
  {
    "id": 10195,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 25,
    "title": "SELECT REGEXP_SUBSTR('aaaaabbbb', 'a{2,4}') FROM DUAL 결과는?",
    "options": [
      "aa",
      "aaaa",
      "aaaaa",
      "a"
    ],
    "correctIndex": 1,
    "explanation": "a{2,4}: a가 2~4개 연속. 가장 길게 매칭 → aaaa"
  },
  {
    "id": 10196,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 29,
    "title": "DENSE_RANK vs RANK vs ROW_NUMBER 중 동점자에게 같은 순위를 부여하고 다음 순위를 건너뛰지 않는 것은?",
    "options": [
      "DENSE_RANK",
      "RANK",
      "ROW_NUMBER",
      "PERCENT_RANK"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10197,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 31,
    "title": "트랜잭션의 원자성에 해당하는 설명은?",
    "options": [
      "모두 성공하거나 전혀 수행되지 않아야 한다",
      "트랜잭션 간 영향을 받지 않는다",
      "완료 후 영구 저장된다",
      "일관된 상태를 유지한다"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10198,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 32,
    "title": "NOT IN (SELECT COL2) - COL2에 NULL 포함 결과는?",
    "options": [
      "0건",
      "전체 건수",
      "NULL",
      "오류"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10199,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 35,
    "title": "SELECT COUNT(*) FROM TAB1, TAB2 (각 10개) 결과는?",
    "options": [
      "10",
      "20",
      "100",
      "NULL"
    ],
    "correctIndex": 2,
    "explanation": "조인 조건 없으면 CROSS JOIN → 10×10=100"
  },
  {
    "id": 10200,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 50,
    "title": "SAVEPOINT/ROLLBACK/COMMIT 후 COUNT(*) WHERE COL1=4 결과는?",
    "options": [
      "0",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10201,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "1과목",
    "number": 1,
    "title": "내부 스키마에 대한 설명으로 적절한 것은? (모두 고르기)",
    "options": [
      "(가) 논리적 데이터 구조",
      "(나) 물리적 저장구조 관련, (라) 내부 스키마 내용",
      "(가) 사용자 뷰",
      "(다) 개념 스키마"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10202,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "1과목",
    "number": 2,
    "title": "엔터티명에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "현업에서 사용하는 용어를 사용한다",
      "약어로 사용한다",
      "단수 명사를 사용한다",
      "유일한 이름을 부여한다"
    ],
    "correctIndex": 1,
    "explanation": "엔터티명: 가능하면 약어를 사용하지 않고 현업 용어 사용"
  },
  {
    "id": 10203,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "1과목",
    "number": 3,
    "title": "기본 엔터티에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "독립적으로 생성 가능하다",
      "주식별자는 외부에서 받지 않는다",
      "다른 엔터티로부터 주식별자를 상속받는다",
      "업무에서 관리할 핵심 정보이다"
    ],
    "correctIndex": 2,
    "explanation": "기본 엔터티: 자신의 고유한 주식별자를 가지며, 독립적으로 생성"
  },
  {
    "id": 10204,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "1과목",
    "number": 4,
    "title": "아래의 정규화로 적절한 것은? (주식별자 컬럼 두 개 중 하나에 종속)",
    "options": [
      "제1정규화",
      "제2정규화",
      "제3정규화",
      "BCNF"
    ],
    "correctIndex": 1,
    "explanation": "제2정규화: 부분함수 종속 제거 (일반속성이 주식별자 일부에 종속)"
  },
  {
    "id": 10205,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "1과목",
    "number": 5,
    "title": "1차 정규형에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "각 컬럼에는 원자값만 가진다",
      "반복 그룹이 없어야 한다",
      "일반속성은 주식별자 전체에 종속적이다",
      "다중값 속성을 허용하지 않는다"
    ],
    "correctIndex": 2,
    "explanation": "이것은 2NF 조건"
  },
  {
    "id": 10206,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "1과목",
    "number": 6,
    "title": "식별자 관계에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "실선으로 표현한다",
      "자식이 부모 없이 존재할 수 없다",
      "부모 엔터티와 자식 엔터티의 관계는 항상 1:1의 관계이다",
      "부모의 주식별자가 자식의 주식별자로 상속된다"
    ],
    "correctIndex": 2,
    "explanation": "식별자 관계: 1:M도 가능"
  },
  {
    "id": 10207,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "1과목",
    "number": 7,
    "title": "모두 수행되거나 모두 수행되지 않아야 한다는 트랜잭션의 특징은?",
    "options": [
      "일관성",
      "원자성",
      "고립성",
      "영속성"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10208,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "1과목",
    "number": 8,
    "title": "계층형 모델에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "트리 구조로 데이터를 표현한다",
      "개체간의 관계는 1:1이다",
      "부모-자식 관계를 가진다",
      "루트 노드가 있다"
    ],
    "correctIndex": 1,
    "explanation": "계층형 모델: 1:N 관계"
  },
  {
    "id": 10209,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "1과목",
    "number": 9,
    "title": "아래의 빈칸에 알맞은 것은? (엔터티 → [ ] → 속성 → 속성값)",
    "options": [
      "테이블",
      "인스턴스",
      "컬럼",
      "관계"
    ],
    "correctIndex": 1,
    "explanation": "데이터 계층: 엔터티-인스턴스-속성-속성값"
  },
  {
    "id": 10210,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "1과목",
    "number": 10,
    "title": "두 개의 엔터티 간 관계에서 참여자의 수를 표현하는 것은?",
    "options": [
      "관계명",
      "관계차수",
      "관계선택사양",
      "관계유형"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10211,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 11,
    "title": "서브쿼리에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "서브쿼리는 SELECT, WHERE, FROM, HAVING절에 사용 가능하다",
      "IN 절은 단일행 서브쿼리만 사용할 수 있다",
      "스칼라 서브쿼리는 1행 1열을 반환한다",
      "상관 서브쿼리는 메인쿼리의 컬럼을 참조한다"
    ],
    "correctIndex": 1,
    "explanation": "IN절은 다중행 서브쿼리도 사용 가능"
  },
  {
    "id": 10212,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 12,
    "title": "DML로 적절한 것은?",
    "options": [
      "CREATE, ALTER, DROP",
      "INSERT, UPDATE, DELETE",
      "GRANT, REVOKE",
      "COMMIT, ROLLBACK"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10213,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 13,
    "title": "DENSE_RANK 함수 결과로 옳은 것은? (동일 등수 허용)",
    "options": [
      "1,2,3,4,5",
      "1,1,2,3,3",
      "1,2,2,3,4",
      "1,2,2,2,3"
    ],
    "correctIndex": 2,
    "explanation": "DENSE_RANK: 동점자 동일 등수, 다음 등수 연속"
  },
  {
    "id": 10214,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 14,
    "title": "ROLLUP + 일반컬럼에서 SELECT COUNT(*) FROM (...GROUP BY ROLLUP(col1), col1) 결과는?",
    "options": [
      "4건",
      "5건",
      "6건",
      "7건"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10215,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 15,
    "title": "SQL 오류 발생하는 곳은? (CREATE TABLE 1234_...)",
    "options": [
      "1234_로 시작하는 테이블명",
      "컬럼명에 특수문자 포함",
      "제약조건 중복",
      "VARCHAR2 길이 초과"
    ],
    "correctIndex": 0,
    "explanation": "테이블명은 숫자로 시작 불가"
  },
  {
    "id": 10216,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 17,
    "title": "GROUPING SETS(ROLLUP(a), b)와 동일한 것은?",
    "options": [
      "GROUPING SETS(a, b, ())",
      "ROLLUP(a, b)",
      "CUBE(a, b)",
      "GROUPING SETS((a,b), ())"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10217,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 18,
    "title": "NULL 연산 결과 (데이터: null,10 / 10,10 / 10,null)",
    "options": [
      "NULL, 40, NULL",
      "0, 40, 0",
      "NULL, 40, 20",
      "20, 40, NULL"
    ],
    "correctIndex": 0,
    "explanation": "NULL을 포함한 산술 연산 결과는 NULL"
  },
  {
    "id": 10218,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 20,
    "title": "T1 LEFT T2, T1 FULL T2, T1 RIGHT T2 행 수는?",
    "options": [
      "3, 4, 3",
      "3, 5, 3",
      "4, 5, 4",
      "3, 5, 4"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10219,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 22,
    "title": "REGEXP_INSTR('12345678', '(123)(4(56)(78))',1,1,0,'i',2) 결과는?",
    "options": [
      "1",
      "4",
      "5",
      "7"
    ],
    "correctIndex": 1,
    "explanation": "2번째 서브그룹(4(56)(78))의 시작 위치 = 4"
  },
  {
    "id": 10220,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 24,
    "title": "계층형 쿼리 순방향 방향은?",
    "options": [
      "PRIOR 부모 = 자식",
      "PRIOR 자식 = 부모 (PRIOR 사원번호 = 관리자번호)",
      "START WITH 최상위 루트",
      "CONNECT BY 자식 = 부모"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10221,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 27,
    "title": "ALIAS에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "SELECT절에서 컬럼에 별칭 부여 가능",
      "ORDER BY절에서 별칭 사용 가능",
      "컬럼 앞뒤로 사용 가능하다",
      "AS 키워드 생략 가능"
    ],
    "correctIndex": 2,
    "explanation": "별칭은 컬럼/표현식 뒤에만 사용 가능"
  },
  {
    "id": 10222,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 30,
    "title": "ON절 사용 중 오류 발생하는 것은?",
    "options": [
      "SELECT * FROM A INNER JOIN B ON A.ID=B.ID",
      "SELECT * FROM A INNER JOIN B ON (DEPARTMENT_ID)",
      "SELECT * FROM A JOIN B ON A.ID=B.ID AND A.TYPE=B.TYPE",
      "SELECT * FROM A, B WHERE A.ID=B.ID"
    ],
    "correctIndex": 1,
    "explanation": "ON절에는 두 컬럼 비교 조건이 필요. 단순 컬럼명만으로는 오류"
  },
  {
    "id": 10223,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 34,
    "title": "3회 이상 주문한 고객 찾는 SQL은?",
    "options": [
      "WHERE COUNT(구매번호) >= 3",
      "HAVING COUNT(구매번호) >= 3",
      "WHERE 구매번호 >= 3",
      "HAVING 구매번호 >= 3"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10224,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 35,
    "title": "아래의 SQL 에서 오류가 발생하는 부분은? <SQL> CREATE TABLE SQLD_55_34_01 ( COL1 VARCHAR2(50), COL2 NUMBER, COL3 VARCHAR2(50), CONSTRAINT PK_01 PRIMARY KEY (COL1) ); ​ CREATE TABLE SQLD_55_34_02 ( COL4 VARCHAR2(50), COL5 NUMBER, COL1 VARCHAR2(50), CONSTRAINT PK_02 PRIMARY KEY (COL4), CONSTRAINT FK_02_01 FOREIGN KEY (COL1) REFERENCES SQLD_55_34_01(COL1) );",
    "options": [
      "INSERT INTO SQLD_55_34_01 VALUES ('A',100,'가');",
      "INSERT INTO SQLD_55_34_02 VALUES ('02_A',100,NULL);",
      "INSERT INTO SQLD_55_34_02 VALUES ('02_B',200,'A');",
      "UPDATE SQLD_55_34_02 SET COL1 = 'B' WHERE COL4 = '02_A';"
    ],
    "correctIndex": null,
    "explanation": "-> ORA-02291: integrity constraint (SQL_QQYONNQTOWOSMXTURQWJCUGZU.FK_02_01) violated - parent key not found ORA-06512: at \"SYS.DBMS_SQL\", line 1721 ​"
  },
  {
    "id": 10225,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 36,
    "title": "SAVEPOINT/ROLLBACK 결과 (INSERT SQL1→SAVEPOINT A→INSERT SQL2→SAVEPOINT B→DELETE SQL3→ROLLBACK TO A→INSERT SQL4→INSERT SQL5)",
    "options": [
      "SQL1, SQL2, SQL4",
      "SQL1, SQL4, SQL5",
      "SQL2, SQL4, SQL5",
      "SQL1, SQL2, SQL5"
    ],
    "correctIndex": 1,
    "explanation": "ROLLBACK TO A: SQL2, SQL3 취소. 이후 SQL4, SQL5 실행"
  },
  {
    "id": 10226,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 37,
    "title": "ORDER BY DESC에서 NULL의 위치 (Oracle)",
    "options": [
      "맨 아래",
      "맨 위",
      "중간",
      "랜덤"
    ],
    "correctIndex": 1,
    "explanation": "Oracle에서 NULL은 가장 큰 값으로 인식. DESC 시 NULL이 맨 위"
  },
  {
    "id": 10227,
    "examSetId": "round-55",
    "examLabel": "제55회 (2024년 11월)",
    "round": 55,
    "subject": "2과목",
    "number": 38,
    "title": "ROW LIMITING 에 대한 설명으로 적절하지 않은 것은? ... <옳은 설명>",
    "options": [
      "OFFSET offset : 건너뛸 행의 개수를 지정한다.",
      "FETCH : 반환할 행의 개수나 백분율을 지정한다.",
      "ONLY : 지정된 행의 개수나 백분율만큼 행을 반환한다.",
      "WITH TIES : 마지막 행에 대한 동순위를 포함해서 반환한다."
    ],
    "correctIndex": null,
    "explanation": "-> 첫번째 행에 대한 동순위라고 보기에 나왔다고 함. ONLY 의견도 다수 있음"
  },
  {
    "id": 10228,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "1과목",
    "number": 1,
    "title": "Key, 속성, 관계를 정확하게 표현하고 재사용성이 높은 모델링은?",
    "options": [
      "물리적 데이터 모델링",
      "논리적 데이터 모델링",
      "개념적 데이터 모델링",
      "관계형 데이터 모델링"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10229,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "1과목",
    "number": 2,
    "title": "엔터티 특징으로 적절하지 않은 것은?",
    "options": [
      "엔터티는 고유한 식별자를 가진다",
      "엔터티는 데이터 저장의 기본 단위이다",
      "엔터티는 반드시 속성을 가진다",
      "속성이 없는 엔터티가 있을 수 있다"
    ],
    "correctIndex": 3,
    "explanation": "엔터티는 반드시 속성을 가져야 함"
  },
  {
    "id": 10230,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "1과목",
    "number": 3,
    "title": "속성 특징으로 적절하지 않은 것은?",
    "options": [
      "각 속성은 한 개의 값만 가진다",
      "파생 속성은 다른 속성으로부터 계산된다",
      "파생 속성은 적을수록 좋다",
      "파생 속성은 많을수록 좋다"
    ],
    "correctIndex": 3,
    "explanation": "파생 속성이 많으면 데이터 중복이 증가하므로 적을수록 좋음"
  },
  {
    "id": 10231,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "1과목",
    "number": 4,
    "title": "식별자의 특징으로 적절하지 않은 것은?",
    "options": [
      "유일성을 만족해야 한다",
      "최소성을 만족해야 한다",
      "불변성을 만족해야 한다",
      "주식별자의 값은 변경될 수 있다"
    ],
    "correctIndex": 3,
    "explanation": ""
  },
  {
    "id": 10232,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "1과목",
    "number": 5,
    "title": "식별자 관계에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "식별자 관계는 실선으로 표현한다",
      "비식별자 관계에서 부모와의 관계는 필수 조건이다",
      "부모의 PK가 자식의 PK로 상속된다",
      "자식 엔터티는 부모 없이 존재 불가"
    ],
    "correctIndex": 1,
    "explanation": "비식별자 관계: 부모와의 관계가 선택 조건"
  },
  {
    "id": 10233,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "1과목",
    "number": 6,
    "title": "고객-주문 ERD에서 주문의 고객번호는?",
    "options": [
      "주문 엔터티에서 자체 생성된 것이다",
      "고객 엔터티에서 상속받은 것이다",
      "인조식별자이다",
      "보조식별자이다"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10234,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "1과목",
    "number": 7,
    "title": "함수 종속성에서 일반 속성이 주식별자 모두에 함수종속성이 있는 상태는?",
    "options": [
      "제1정규형",
      "제2정규형",
      "제3정규형",
      "BCNF"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10235,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "1과목",
    "number": 8,
    "title": "원조 식별자가 복잡한 구성을 갖고 있어 인위적으로 만든 식별자는?",
    "options": [
      "본질 식별자",
      "외부 식별자",
      "인조 식별자",
      "복합 식별자"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10236,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "1과목",
    "number": 10,
    "title": "NULL에 대한 설명으로 적절한 것은?",
    "options": [
      "NULL은 0이다",
      "NULL은 공백이다",
      "NULL은 미지의 값으로 비교가 불가하다",
      "NULL은 FALSE이다"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10237,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 11,
    "title": "CTAS에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "컬럼 데이터 타입이 복사된다",
      "제약조건이 모두 복사된다",
      "NOT NULL만 복사된다",
      "PK, FK는 복사되지 않는다"
    ],
    "correctIndex": 1,
    "explanation": "CTAS: NOT NULL만 복사, 나머지 제약조건(PK, FK, UNIQUE 등) 미복사"
  },
  {
    "id": 10238,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 12,
    "title": "View에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "View는 조회 속도를 높이기 위해 사용된다",
      "논리적인 가상 테이블이다",
      "보안 목적으로 사용 가능하다",
      "물리적 저장 공간을 사용하지 않는다"
    ],
    "correctIndex": 0,
    "explanation": "View는 조회 속도와 관계없음. 단순화, 보안, 독립성을 위해 사용"
  },
  {
    "id": 10239,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 13,
    "title": "Database의 논리적 업무 최소 단위는?",
    "options": [
      "트랜잭션",
      "테이블",
      "컬럼",
      "인덱스"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10240,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 15,
    "title": "CONNECT BY PRIOR emp_no = mgr_no 의 방향은?",
    "options": [
      "역방향",
      "순방향 (부모→자식)",
      "수평방향",
      "무방향"
    ],
    "correctIndex": 1,
    "explanation": "PRIOR 자식 = 부모 → 순방향"
  },
  {
    "id": 10241,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 17,
    "title": "CASE WHEN col1='X' THEN NULL ELSE col1 END와 동일한 함수는?",
    "options": [
      "NVL(col1, NULL)",
      "NULLIF(col1, 'X')",
      "COALESCE(col1, NULL)",
      "DECODE(col1, NULL, col1)"
    ],
    "correctIndex": 1,
    "explanation": "NULLIF(a,b): a=b이면 NULL, 아니면 a 반환"
  },
  {
    "id": 10242,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 18,
    "title": "Oracle에서 결과가 다른 SQL은?",
    "options": [
      "SELECT T.* FROM TAB T",
      "SELECT T.* FROM TAB AS T",
      "SELECT * FROM TAB T",
      "SELECT * FROM (SELECT * FROM TAB) T"
    ],
    "correctIndex": 1,
    "explanation": "Oracle에서 FROM절 테이블에 AS 키워드 사용 불가 (MySQL은 가능)"
  },
  {
    "id": 10243,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 20,
    "title": "COALESCE(A, 50*B, '50')의 설명으로 옳은 것은?",
    "options": [
      "A, B 모두 NULL이면 50을 반환한다",
      "B가 NULL이면 항상 50을 반환한다",
      "A가 NULL이 아닐 경우 B*50을 반환한다",
      "A가 NULL이 아닐 경우 A값을 반환한다"
    ],
    "correctIndex": 3,
    "explanation": ""
  },
  {
    "id": 10244,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 25,
    "title": "제약 조건에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "PK는 NOT NULL + UNIQUE이다",
      "FK는 참조 무결성을 보장한다",
      "UK는 NOT NULL이다",
      "CHECK는 도메인 무결성을 보장한다"
    ],
    "correctIndex": 2,
    "explanation": "UNIQUE(UK): NULL 허용. PK만 NOT NULL 강제"
  },
  {
    "id": 10245,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 27,
    "title": "NOT IN (SELECT COL1 FROM TAB_A) - TAB_A에 NULL 포함 결과는?",
    "options": [
      "전체 데이터",
      "0건",
      "NULL",
      "오류"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10246,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 31,
    "title": "파티션별 윈도우의 전체 건수에서 현재 행보다 작거나 같은 건수의 누적 백분율 함수는?",
    "options": [
      "RANK",
      "DENSE_RANK",
      "ROW_NUMBER",
      "CUME_DIST"
    ],
    "correctIndex": 3,
    "explanation": ""
  },
  {
    "id": 10247,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 33,
    "title": "아래의 SQL 에서 7780 번의 결과는? (ROW_NUMBER, RANK, DENSE_RANK 묻는 문제) [TAB] EMPLOTEE_ID SALARY ------------------------- 7780 4000 7781 4000 7782 3000 7783 3000 7784 2000 [SQL] SELECT EMPLOYEE_ID, ROW_NUMBER() OVER (ORDER BY SALARY) AS ROW_NUM, RANK() OVER (ORDER BY SALARY) AS RANK_NUM, DENSE_RANK() OVER (ORDER BY SALARY) AS DENSE_RANK_NUM FROM EMPLOYEES",
    "options": [
      "4, 4, 3",
      "3, 3, 3",
      "4, 4, 4",
      "3, 4, 3"
    ],
    "correctIndex": null,
    "explanation": "- RANK() : 동점이 있을 경우 동일 순위 부여, *순위 건너뜀 - DENSE_RANK() : 동점 시 동일 순위 부여, *순위 건너뛰지 않음"
  },
  {
    "id": 10248,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 34,
    "title": "강좌번호가 100, 101 인 과목을 동시에 듣는 학번을 구하는 SQL 로 알맞은 것은?",
    "options": [
      "... WHERE 강의번호 = 100 AND 강의번호 = 101",
      "SELECT ... INTERSECT ...",
      "... WHERE 강의번호 IN(100,101)",
      "... WHERE 강의번호 = 100 OR 101"
    ],
    "correctIndex": 1,
    "explanation": "1) 2) 3) 4)"
  },
  {
    "id": 10249,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "1과목",
    "number": 1,
    "title": "모델링 관점 문제 - 데이터와 프로세스 중 올바른 관점은?",
    "options": [
      "데이터 관점",
      "프로세스 관점",
      "데이터와 프로세스 관점",
      "기술 관점"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10250,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "1과목",
    "number": 3,
    "title": "발생 시점으로 생기는 데이터 종류가 아닌 경우는?",
    "options": [
      "기본",
      "중심 데이터",
      "유형 데이터",
      "행위"
    ],
    "correctIndex": 2,
    "explanation": "발생시점 분류: 기본, 중심, 행위 엔터티"
  },
  {
    "id": 10251,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "1과목",
    "number": 4,
    "title": "일반속성-주식별자-이행함수 종속을 만족하는 정규형은?",
    "options": [
      "제1정규형",
      "제2정규형",
      "제3정규형",
      "BCNF"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10252,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "1과목",
    "number": 5,
    "title": "인조식별자에 대한 틀린 설명은?",
    "options": [
      "복잡한 식별자를 단순화할 때 사용",
      "의미 없는 일련번호 등을 사용",
      "속성의 수가 적으면 인조식별자를 반드시 사용해야 한다",
      "주식별자를 단순화할 때 활용"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10253,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 11,
    "title": "데이터 제어 언어(DCL)을 고르시오",
    "options": [
      "CREATE, ALTER(DDL)",
      "INSERT, UPDATE(DML)",
      "GRANT, REVOKE(DCL)",
      "COMMIT, ROLLBACK(TCL)"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10254,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 13,
    "title": "SUBSTR('Gangneung Wonju', 8, 4) 결과는?",
    "options": [
      "ng W",
      "g Wo",
      "Wonju",
      "eung"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10255,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 16,
    "title": "SELECT COUNT(*) FROM T1, T2 WHERE T1.col1=T2.col1 (T1: 1,2,3,4,5 / T2: 1,1,1,3,6) 결과는?",
    "options": [
      "3",
      "5",
      "6",
      "4"
    ],
    "correctIndex": 3,
    "explanation": "1이 3번 조인(3건), 3이 1번 조인(1건) = 4건"
  },
  {
    "id": 10256,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 22,
    "title": "DELETE와 TRUNCATE, DROP 비교 중 가장 적절하지 않은 것은?",
    "options": [
      "WHERE 조건절 없는 DELETE = DROP TABLE과 동일",
      "TRUNCATE는 롤백 불가",
      "DROP은 테이블 구조 삭제",
      "DELETE는 조건으로 일부 삭제 가능"
    ],
    "correctIndex": 0,
    "explanation": "DELETE는 테이블 정의(구조)를 유지. DROP은 테이블 자체 삭제"
  },
  {
    "id": 10257,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 32,
    "title": "집합 연산자에서 적절하지 않은 것은?",
    "options": [
      "UNION은 중복 제거",
      "UNION ALL은 중복 허용",
      "INTERSECT는 교집합",
      "UNION을 사용한 SQL은 각각의 집합에 ORDER BY절을 사용할 수 있다"
    ],
    "correctIndex": 3,
    "explanation": "ORDER BY는 마지막 SELECT에만 사용 가능"
  },
  {
    "id": 10258,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "1과목",
    "number": 1,
    "title": "주식별자 없어도 되는 예외는?",
    "options": [
      "기본 엔터티",
      "중심 엔터티",
      "관계 엔터티",
      "행위 엔터티"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10259,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "1과목",
    "number": 3,
    "title": "스키마(외부, 개념) 문제에서 전체를 통합 뉘앙스의 설명은?",
    "options": [
      "외부 스키마",
      "개념 스키마",
      "내부 스키마",
      "응용 스키마"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10260,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "1과목",
    "number": 7,
    "title": "FK는 어떤 식별자인가?",
    "options": [
      "내부식별자",
      "주식별자",
      "외부식별자",
      "보조식별자"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10261,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "1과목",
    "number": 8,
    "title": "식별, 비식별 관계 표기는?",
    "options": [
      "식별관계: 점선, 비식별관계: 실선",
      "식별관계: 실선, 비식별관계: 점선",
      "둘 다 실선",
      "둘 다 점선"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10262,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 12,
    "title": "값이 혼자 다른 것을 고르시오. 100 50 100 null null 250 450 100",
    "options": [
      "NVL(값, 옵션) ~",
      "Coalease(값, 옵션) ~",
      "NULLIF(값, 옵션) ~",
      "case 값 is not null then 값 else 옵션 ~"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10263,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 17,
    "title": "트랜잭션이 동시에 실행될 경우 독립적으로 실행되어야 하는 특성은?",
    "options": [
      "원자성",
      "일관성",
      "고립성",
      "영속성"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10264,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 21,
    "title": "NOT EXISTS (T2에 NULL 포함) SELECT COUNT(*) FROM T1 WHERE NOT EXISTS (...) 결과는?",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correctIndex": 1,
    "explanation": "NULL은 EXISTS에서 제외되어 1건"
  },
  {
    "id": 10265,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 23,
    "title": "아래 쿼리의 결과값을 고르시오. [TAB1] C1 C2 C3 ------------- 1 2 3 Null 2 3 Null Null 3 SELECT SUM(COALESCE(C1, C2, C3)) FROM TAB1;",
    "options": [
      "0",
      "1",
      "6",
      "14"
    ],
    "correctIndex": 2,
    "explanation": "COALESCE 함수는 첫 번째 NULL이 아닌 값을 반환한다."
  },
  {
    "id": 10266,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 24,
    "title": "SELECT 문장의 실행 순서는?",
    "options": [
      "SELECT-FROM-WHERE-GROUP BY-HAVING-ORDER BY",
      "FROM-SELECT-WHERE-GROUP BY-HAVING-ORDER BY",
      "FROM-WHERE-GROUP BY-HAVING-SELECT-ORDER BY",
      "WHERE-FROM-GROUP BY-SELECT-HAVING-ORDER BY"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10267,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 30,
    "title": "테이블 생성 후 복제(CTAS) 에서 제약조건 적용중 적절한 것을 고르시오.",
    "options": [
      "프라이머리키(PK) 가 복제되지 않는다.",
      "NOT NULL 조건 적용이 안 된다.",
      "Check 적용된다.",
      "varchar2(3) default '000' 이 적용된다."
    ],
    "correctIndex": 0,
    "explanation": "NOT NULL 조건만 가져올수 있음."
  },
  {
    "id": 10268,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 33,
    "title": "Sql 특징이 아닌 것을 고르시오.",
    "options": [
      "절차적(procedural)",
      "구조적(structured)",
      "집합적(set-based)",
      "선언적(declarative)"
    ],
    "correctIndex": 0,
    "explanation": "SQL은 구조적(structured)이고, 집합적(set-based)이고, 선언적(declarative)인 질의(Query) 언어이다. SQL(Structured Query Language)은 영문명을 풀이하면 구조화된 질의 언어라는 의미로, 단순하게 질의만을 수행하는 것이 아니라 데이터베이스의 모든 작업을 통제하는 비절차적(Non-procedural) 언어이다."
  },
  {
    "id": 10269,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 35,
    "title": "ROLLUP(A,B) vs ROLLUP((A,B)) 중 중첩 괄호는?",
    "options": [
      "ROLLUP(A,B)",
      "ROLLUP((A,B))",
      "둘 다 같다",
      "GROUPING SETS((A,B))"
    ],
    "correctIndex": 1,
    "explanation": "ROLLUP((A,B)): A,B를 하나의 단위로 처리"
  },
  {
    "id": 10270,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 49,
    "title": "부서 테이블의 1행을 삭제할 때 사원 테이블의 1행도 함께 삭제할때 적절한 표현식?",
    "options": [
      "restrict",
      "parent ~~ reference child~ cascade",
      "child ~~ reference parent~ cascade",
      "restrict"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10271,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "1과목",
    "number": 1,
    "title": "비식별자 관계로 구성된 테이블에 대한 설명 중 적절하지 않은 것은?",
    "options": [
      "부모-자식간 1:M 관계이고 부모 미생성 시 자식 생성 가능",
      "부모 테이블의 삭제 시점이 자식보다 빠르다",
      "테이블간 조인을 최소화한다",
      "자식 주식별자를 부모보다 직접 생성이 효율적"
    ],
    "correctIndex": 2,
    "explanation": "비식별자 관계: 조인이 증가할 수 있음"
  },
  {
    "id": 10272,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "1과목",
    "number": 4,
    "title": "엔터티의 분류 중 발생 시점에 따른 분류가 아닌 것은?",
    "options": [
      "기본 엔터티",
      "사건 엔터티",
      "중심 엔터티",
      "행위 엔터티"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10273,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "1과목",
    "number": 8,
    "title": "주식별자에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "해당 업무에서 자주 이용되는 속성을 사용한다",
      "복합 식별자에는 최대한 많은 속성이 포함되도록 하여야 한다",
      "명칭은 되도록 지정하지 않는다",
      "자주 변하지 않는 속성을 사용한다"
    ],
    "correctIndex": 1,
    "explanation": "주식별자 최소성: 필요한 최소 속성으로 구성"
  },
  {
    "id": 10274,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "1과목",
    "number": 9,
    "title": "주식별자의 특징 중 반드시 데이터 값이 존재해야 하는 것은?",
    "options": [
      "유일성",
      "최소성",
      "존재성",
      "불변성"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10275,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 11,
    "title": "트랜잭션의 설명으로 적절하지 않은 것은?",
    "options": [
      "원자적 실행을 보장한다",
      "하나의 트랜잭션에서 처리되는 데이터는 다른 트랜잭션에서도 변경할 수 있다",
      "TCL로 관리된다",
      "고립성을 가진다"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10276,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 15,
    "title": "NTILE(3) 결과 (8행 기준) 그룹별 배분은?",
    "options": [
      "3, 3, 2",
      "2, 3, 3",
      "3, 2, 3",
      "2, 2, 4"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10277,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 16,
    "title": "CUBE(A,B) 결과에 포함되는 것은?",
    "options": [
      "(A,B)와 (NULL,NULL)만",
      "(A,B), (A,NULL), (NULL,B), (NULL,NULL)",
      "(A,B)와 (A,NULL)만",
      "(NULL,B)와 (NULL,NULL)만"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10278,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 17,
    "title": "SELECT 10/NULLIF(0,0), SELECT 10/NULLIF(NULL,0) 결과는?",
    "options": [
      "NULL, NULL",
      "NULL, 오류",
      "NULL, 오류",
      "오류, NULL"
    ],
    "correctIndex": 0,
    "explanation": "NULLIF(0,0)=NULL → 10/NULL=NULL. NULLIF(NULL,0)=NULL → 10/NULL=NULL"
  },
  {
    "id": 10279,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 28,
    "title": "현재 행에서부터 이전 행까지의 누적합 SQL은?",
    "options": [
      "ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW",
      "RANGE BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING",
      "ROWS BETWEEN 1 PRECEDING AND CURRENT ROW",
      "RANGE UNBOUNDED FOLLOWING"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10280,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 34,
    "title": "SAVEPOINT P1 설정 후 INSERT 4 후 ROLLBACK P1 → SELECT 결과는?",
    "options": [
      "1, 2, 3, 4",
      "1, 2, 3",
      "4만",
      "없음"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10281,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "1과목",
    "number": 1,
    "title": "주식별자 도출 기준으로 옳지 않은 것은?",
    "options": [
      "자주 이용되는 속성을 사용한다",
      "복합 식별자는 최소 속성으로 구성한다",
      "명칭, 내역 등과 같이 이름으로 기술되는 것들을 주식별자로 지정한다",
      "변하지 않는 속성을 사용한다"
    ],
    "correctIndex": 2,
    "explanation": "명칭/내역은 중복 가능하므로 주식별자로 부적합"
  },
  {
    "id": 10282,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "1과목",
    "number": 2,
    "title": "관계 표기법으로 옳지 않은 것은?",
    "options": [
      "관계명",
      "관계차수",
      "관계선택사양",
      "관계분류"
    ],
    "correctIndex": 3,
    "explanation": "관계 표기 3요소: 관계명, 관계차수, 관계선택사양"
  },
  {
    "id": 10283,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "1과목",
    "number": 3,
    "title": "엔터티를 대표할 수 있는 속성은?",
    "options": [
      "일반속성",
      "파생속성",
      "식별자",
      "설계속성"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10284,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "1과목",
    "number": 8,
    "title": "다음 중 스키마의 종류가 아닌 것은?",
    "options": [
      "외부 스키마",
      "내부 스키마",
      "개념 스키마",
      "응용 스키마"
    ],
    "correctIndex": 3,
    "explanation": ""
  },
  {
    "id": 10285,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "1과목",
    "number": 9,
    "title": "정규화 N:N 처리 ~ ?",
    "options": [
      "개괄 모델링",
      "개념 모델링",
      "논리 모델링",
      "물리 모델링"
    ],
    "correctIndex": 2,
    "explanation": "■ 단답형 1. 다음 정의에 해당하는 개념 - 속성범위 ~?"
  },
  {
    "id": 10286,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "1과목",
    "number": 26,
    "title": "테이블 유형 중 적절한것을 고르시오.",
    "options": [
      "2023_TBL",
      "2023-TBL",
      "TBL-2023",
      "TBL_2023#"
    ],
    "correctIndex": 3,
    "explanation": ""
  },
  {
    "id": 10287,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 10,
    "title": "학생의 평균학점이 3.0인 학생 SQL로 옳은 것은?",
    "options": [
      "WHERE AVG(학점) = 3.0",
      "GROUP BY 학번 HAVING AVG(학점) = 3.0",
      "WHERE 학점 = 3.0",
      "HAVING 학점 = 3.0"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10288,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 14,
    "title": "SELECT NVL(COUNT(*), 9999) FROM TAB1 WHERE 1=2 결과는?",
    "options": [
      "9999",
      "NULL",
      "1",
      "0"
    ],
    "correctIndex": 3,
    "explanation": ""
  },
  {
    "id": 10289,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 17,
    "title": "계층형 쿼리 역방향 (start with=11) 표현은?",
    "options": [
      "START WITH 카테고리번호=11 CONNECT BY PRIOR 상위카테고리번호=카테고리번호",
      "START WITH 카테고리번호=11 CONNECT BY 카테고리번호=PRIOR 상위카테고리번호",
      "START WITH 상위=NULL CONNECT BY PRIOR 카테고리=상위",
      "START WITH 카테고리=11 CONNECT BY PRIOR 카테고리=카테고리"
    ],
    "correctIndex": 0,
    "explanation": "PRIOR 부모=자식 형태가 역방향"
  },
  {
    "id": 10290,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 19,
    "title": "NATURAL JOIN의 특징이 아닌 것은?",
    "options": [
      "같은 이름 컬럼으로 자동 조인",
      "비등가 조인 가능",
      "별칭 사용 불가",
      "ON절, USING절 사용 불가"
    ],
    "correctIndex": 1,
    "explanation": "NATURAL JOIN: 동일 컬럼명 등가조인만 가능"
  },
  {
    "id": 10291,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 23,
    "title": "데이터 제어어(DCL) 및 트랜잭션 제어어(TCL)에 해당하지 않는 것은?",
    "options": [
      "GRANT",
      "ROLLBACK",
      "REVOKE",
      "ALTER"
    ],
    "correctIndex": 3,
    "explanation": ""
  },
  {
    "id": 10292,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 24,
    "title": "SQL집합 연산자에서 교집합에 해당하는 것은?",
    "options": [
      "UNION ALL",
      "EXCEPT",
      "INTERSECT",
      "UNION"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10293,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 25,
    "title": "DROP/TRUNCATE/DELETE 비교 중 부적절한 것은?",
    "options": [
      "DROP은 테이블 구조까지 삭제",
      "TRUNCATE는 전체 행 삭제",
      "DELETE는 WHERE절로 일부 삭제 가능",
      "TRUNCATE는 사용자 Commit으로 수행된다"
    ],
    "correctIndex": 3,
    "explanation": "TRUNCATE는 Auto Commit (DDL)"
  },
  {
    "id": 10294,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 31,
    "title": "계층형 쿼리에서 CONNECT_BY_ISLEAF에 대한 설명 중 맞는 것은?",
    "options": [
      "LEAF 레벨은 항상 1이다",
      "LEAF이면 1, 아니면 0",
      "LEAF이면 0, 아니면 1",
      "루트이면 1"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10295,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 40,
    "title": "두번째 글자가 s, 총 길이가 4글자 이상인 문자열을 찾을 때, 올바르지 않은 것 ?",
    "options": [
      "%S_ _",
      "_S%_ _",
      "_S_%_",
      "_S_ _ %"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10296,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 42,
    "title": "다음 중 결과 값이 다른 질의어는?",
    "options": [
      "SELECT * FROM T1 NATURAL JOIN T2",
      "SELECT * FROM T1 JOIN T2 USING(COL)",
      "SELECT * FROM T1 INNER JOIN T2 ON T1.COL = T2.COL",
      "SELECT * FROM T2 WHERE T2.COL IN (SELECT COL FROM T1 WHERE T2.COL = T1.COL)"
    ],
    "correctIndex": 3,
    "explanation": ""
  },
  {
    "id": 10297,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "1과목",
    "number": 1,
    "title": "정규화 결과에 알맞은 정규화는? (식별자 컬럼간 종속성 해결)",
    "options": [
      "제1정규화",
      "제2정규화",
      "제3정규화",
      "BCNF"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10298,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "1과목",
    "number": 2,
    "title": "속성이 가질 수 있는 데이터 값의 범위는?",
    "options": [
      "제약조건",
      "도메인",
      "속성명",
      "식별자"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10299,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "1과목",
    "number": 3,
    "title": "주식별자를 구성하는 속성에서 하나만이라도 제거되면 유일성을 만족하지 못하는 특성은?",
    "options": [
      "유일성",
      "불변성",
      "최소성",
      "존재성"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10300,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "1과목",
    "number": 6,
    "title": "식별자 관계 틀린 선지는?",
    "options": [
      "식별자 관계는 실선으로 표현한다",
      "자식 엔터티는 부모 없이 존재 불가",
      "부모 PK가 자식 PK로 상속된다",
      "식별자 관계는 자식의 주식별자가 부모로부터 독립되어 있다"
    ],
    "correctIndex": 3,
    "explanation": "식별자 관계: 자식의 주식별자가 부모에 종속"
  },
  {
    "id": 10301,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "1과목",
    "number": 7,
    "title": "업무를 규칙화하기 위한 속성을 새로 만들거나 변형하여 정의하는 속성은?",
    "options": [
      "기본 속성",
      "설계 속성",
      "파생 속성",
      "복합 속성"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10302,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "1과목",
    "number": 8,
    "title": "두 개 이상의 부모 엔터티로부터 발생하고 자주 내용이 바뀌는 엔터티는?",
    "options": [
      "기본 엔터티",
      "중심 엔터티",
      "행위 엔터티",
      "관계 엔터티"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10303,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 13,
    "title": "순방향 계층형 쿼리 표현은?",
    "options": [
      "CONNECT BY PRIOR MANAGER_NO = EMP_NO",
      "CONNECT BY PRIOR EMP_NO = MANAGER_NO",
      "CONNECT BY EMP_NO = PRIOR MANAGER_NO",
      "CONNECT BY MANAGER_NO = PRIOR EMP_NO"
    ],
    "correctIndex": 1,
    "explanation": "PRIOR 자식 = 부모 → 순방향"
  },
  {
    "id": 10304,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 16,
    "title": "아래의 테이블에서 오류가 발생하는 SQL을 고르시오. [TEAM] ID COL1 --------- 1 A 2 B 3 C 4 D [STADIUM] ID COL2 ---------- 1 A 2 B",
    "options": [
      "SELECT * FROM TEAM A INNER JOIN STADIUM B ON A.ID = B.ID",
      "SELECT * FROM TEAM A INNER JOIN STADIUM B USING(ID)",
      "SELECT * FROM TEAM A NATURAL JOIN STADIUM B",
      "SELECT * FROM TEAM A INNER JOIN STADIUM B ON (ID)"
    ],
    "correctIndex": 3,
    "explanation": "Error : ORA-00920: invalid relational operator ON절은 두개의 컬럼조건이 사용되어야 함."
  },
  {
    "id": 10305,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 22,
    "title": "ROWNUM=1로 최고 주문 금액 1건 조회 SQL은?",
    "options": [
      "SELECT * FROM 주문 WHERE ROWNUM=1 ORDER BY 금액 DESC",
      "SELECT * FROM (SELECT * FROM 주문 ORDER BY 금액 DESC) WHERE ROWNUM=1",
      "SELECT TOP 1 * FROM 주문 ORDER BY 금액 DESC",
      "SELECT MAX(금액) FROM 주문"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10306,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 28,
    "title": "REVOKE RESTRICT 실패 조건은?",
    "options": [
      "DBA가 직접 부여한 권한",
      "부여받은 유저가 있으면 REVOKE 실패",
      "GRANT OPTION이 없을 때",
      "이미 취소된 권한"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10307,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 29,
    "title": "아래의 SQL에 대해서 에러가 나지 않는것은? [SQL] CREATE TABLE T1 ( A number default 9 primary key, B number not null, C number ); [보기]",
    "options": [
      "INSERT INTO T1 VALUES (7,1)",
      "...",
      "...",
      "INSERT INTO T1 (B, C) VALUES (9,1)"
    ],
    "correctIndex": null,
    "explanation": "DEFAULT는 아무 값을 입력하지 않아도 기본 값으로 설정한 값이 자동으로 입력되는 제약조건으로 NOT NULL과 마찬가지로 많이 사용된다. A 가 DEFAULT 9 을 가지고 있으므로 보기 4번의 쿼리는 정상적으로 작동된다. 오라클 DEFAULT 제약조건 추가 [컬럼명] [타입] DEFAULT [기본값] 📍테이블 생성할 때 선언 CREATE TABLE T1( A NUMBER DEFAULT 9 ); 📍테이블 생성 후 제약조건 추가할 때 ALTER TABLE T1 MODIFY A DEFAULT 9 📍DEFAULT 제약조건 삭제 ALTER TABLE T1 MODIFY A DEFAULT NULL"
  },
  {
    "id": 10308,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 31,
    "title": "PK 설명 중 적절하지 않은 것은?",
    "options": [
      "중복을 허용하지 않는다",
      "NULL을 허용하지 않는다",
      "테이블당 하나만 존재한다",
      "중복을 허용하되 NULL은 허용하지 않는다"
    ],
    "correctIndex": 3,
    "explanation": "PK: 중복도 허용 안하고 NULL도 허용 안함"
  },
  {
    "id": 10309,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 36,
    "title": "아래의 데이터에 대한 SQL 결과가 다른 것은?",
    "options": [
      "SELECT COUNT(DISTINCT COL1)",
      "SELECT DISTINCT COUNT(*)",
      "SELECT * FROM ... GROUP BY ...",
      "..."
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10310,
    "examSetId": "round-48",
    "examLabel": "제48회 (2023년 3월)",
    "round": 48,
    "subject": "1과목",
    "number": 1,
    "title": "데이터 모델링 설명이 옳지 않은 것은?",
    "options": [
      "현실 세계를 추상화한다",
      "반드시 모두 정규화해야 한다",
      "업무 규칙을 표현한다",
      "데이터 구조를 설계한다"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10311,
    "examSetId": "round-48",
    "examLabel": "제48회 (2023년 3월)",
    "round": 48,
    "subject": "1과목",
    "number": 2,
    "title": "스키마 구조에서 모든 사용자 관점을 통합한 조직 전체의 통합적 표현은?",
    "options": [
      "외부스키마",
      "개념스키마",
      "내부스키마",
      "물리스키마"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10312,
    "examSetId": "round-48",
    "examLabel": "제48회 (2023년 3월)",
    "round": 48,
    "subject": "1과목",
    "number": 3,
    "title": "발생시점 엔터티가 아닌 것은? (기본/중심/행위/유형)",
    "options": [
      "기본엔터티",
      "중심엔터티",
      "행위엔터티",
      "유형엔터티"
    ],
    "correctIndex": 3,
    "explanation": ""
  },
  {
    "id": 10313,
    "examSetId": "round-48",
    "examLabel": "제48회 (2023년 3월)",
    "round": 48,
    "subject": "1과목",
    "number": 5,
    "title": "빠른 성능을 내기 위해 원래 속성의 값을 계산하여 저장하는 속성은?",
    "options": [
      "기본속성",
      "설계속성",
      "파생속성",
      "복합속성"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10314,
    "examSetId": "round-48",
    "examLabel": "제48회 (2023년 3월)",
    "round": 48,
    "subject": "1과목",
    "number": 7,
    "title": "속성의 특징으로 가장 올바른 것은?",
    "options": [
      "엔터티는 한 개의 속성만으로 구성될 수 있다.",
      "엔터티를 설명하고 인스턴스의 구성요소가 된다.",
      "하나의 속성에는 여러개의 속성값을 가질 수 있다.",
      "속성의 특성에 따른 분류에는 PK속성, FK속성, 일반속성이 있다."
    ],
    "correctIndex": null,
    "explanation": ""
  },
  {
    "id": 10315,
    "examSetId": "round-48",
    "examLabel": "제48회 (2023년 3월)",
    "round": 48,
    "subject": "1과목",
    "number": 8,
    "title": "주식별자가 지정되면 반드시 데이터 값이 존재해야 하는 특징은?",
    "options": [
      "최소성",
      "유일성",
      "불변성",
      "존재성"
    ],
    "correctIndex": 3,
    "explanation": ""
  },
  {
    "id": 10316,
    "examSetId": "round-48",
    "examLabel": "제48회 (2023년 3월)",
    "round": 48,
    "subject": "2과목",
    "number": 11,
    "title": "■ WHERE 비교 연산자 해석 SELECT 선수이름 FROM 선수 WHERE 키 >= 185",
    "options": [
      "키가 185 미만인 선수이름",
      "키가 185 초과인 선수이름",
      "키가 185 이하인 선수이름",
      "키가 185 이상인 선수이름"
    ],
    "correctIndex": 3,
    "explanation": ""
  },
  {
    "id": 10317,
    "examSetId": "round-48",
    "examLabel": "제48회 (2023년 3월)",
    "round": 48,
    "subject": "2과목",
    "number": 12,
    "title": "SELECT 문장의 실행 순서는?",
    "options": [
      "SELECT-FROM-WHERE-GROUP BY-HAVING-ORDER BY",
      "FROM-WHERE-GROUP BY-HAVING-SELECT-ORDER BY",
      "WHERE-FROM-GROUP BY-HAVING-SELECT-ORDER BY",
      "FROM-GROUP BY-WHERE-HAVING-SELECT-ORDER BY"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10318,
    "examSetId": "round-48",
    "examLabel": "제48회 (2023년 3월)",
    "round": 48,
    "subject": "2과목",
    "number": 17,
    "title": "값이 가장 큰 함수는?",
    "options": [
      "FLOOR",
      "ROUND",
      "TRUNC",
      "CEIL"
    ],
    "correctIndex": 3,
    "explanation": "CEIL: 올림 함수"
  },
  {
    "id": 10319,
    "examSetId": "round-48",
    "examLabel": "제48회 (2023년 3월)",
    "round": 48,
    "subject": "2과목",
    "number": 23,
    "title": "트랜잭션 특성 중 고립성/격리성은?",
    "options": [
      "원자성",
      "일관성",
      "고립성",
      "영속성"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10320,
    "examSetId": "round-48",
    "examLabel": "제48회 (2023년 3월)",
    "round": 48,
    "subject": "2과목",
    "number": 27,
    "title": "개수가 다른 것은? (ROWNUM 관련)",
    "options": [
      "ROWNUM <= 1",
      "ROWNUM < 2",
      "ROWNUM = 2",
      "ROWNUM = 1"
    ],
    "correctIndex": 2,
    "explanation": "ROWNUM=2: 1번 행이 먼저 할당되지 않으면 2번 불가 → 0건"
  },
  {
    "id": 10321,
    "examSetId": "round-48",
    "examLabel": "제48회 (2023년 3월)",
    "round": 48,
    "subject": "2과목",
    "number": 30,
    "title": "SELECT COUNT(*) FROM DUAL WHERE LEVEL <= 2 결과는?",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10322,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "1과목",
    "number": 1,
    "title": "모델링 관점 (업무 처리 방법에 따라 데이터가 어떻게 영향을 받는지)은?",
    "options": [
      "데이터 관점",
      "프로세스 관점",
      "데이터와 프로세스 관점",
      "기술 관점"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10323,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "1과목",
    "number": 4,
    "title": "제3정규형의 대상은?",
    "options": [
      "원자값이 아닌 속성",
      "주식별자에 부분 종속",
      "일반속성 간에 서로 종속적이지 않은 상태",
      "주식별자 전체에 종속"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
  {
    "id": 10324,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "1과목",
    "number": 5,
    "title": "주식별자 특징으로 적절하지 않은 것은?",
    "options": [
      "유일해야 한다",
      "최소 속성으로 구성해야 한다",
      "주식별자가 지정되면 반드시 데이터 값이 존재하지 않아도 된다",
      "자주 변하지 않아야 한다"
    ],
    "correctIndex": 2,
    "explanation": "주식별자는 반드시 NOT NULL"
  },
  {
    "id": 10325,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 3,
    "title": "트랜잭션의 특징에 대한 설명으로 가장 적절한 것은? ​<보기>",
    "options": [
      "트랜잭션이 성공적으로 수행되면 그 트랜잭션이 갱신 데이터베이스의 내용은 영구적으로 저장된다. 이를 고립성이라 한다.",
      "...",
      "ROLLBACK 후에는 데이터의 변경 사항은 변경되지 않는다.",
      "COMMIT 과 ROLLBACK 을 사용함으로서 데이터 무결성을 보장할 수 있다."
    ],
    "correctIndex": 3,
    "explanation": "​"
  },
  {
    "id": 10326,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 4,
    "title": "트리거에서 COMMIT/ROLLBACK 사용 가능 여부로 틀린 것은?",
    "options": [
      "프로시저에서 COMMIT, ROLLBACK 사용 가능",
      "트리거에서 COMMIT 사용 불가",
      "프로시저와 트리거에서 COMMIT, ROLLBACK을 모두 사용할 수 있다",
      "트리거는 이벤트 기반으로 자동 실행"
    ],
    "correctIndex": 2,
    "explanation": "트리거에서는 COMMIT, ROLLBACK 사용 불가"
  },
  {
    "id": 10327,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 9,
    "title": "JOIN 결과 다른 것은? (INNER JOIN ON 절 없음)",
    "options": [
      "FROM A, B WHERE A.ID=B.ID",
      "FROM A INNER JOIN B ON A.ID=B.ID",
      "FROM A INNER JOIN B",
      "FROM A JOIN B ON A.ID=B.ID"
    ],
    "correctIndex": 2,
    "explanation": "ON절 없는 INNER JOIN = CROSS JOIN"
  },
  {
    "id": 10328,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 10,
    "title": "아래의 테이블에 대한 JOIN 의 결과가 잘못된 것은? 테이블",
    "options": [
      "INNER JOIN 결과",
      "LEFT OUTER JOIN 결과",
      "RIGHT OUTER JOIN 결과",
      "FULL OUTER JOIN 결과"
    ],
    "correctIndex": 3,
    "explanation": "​"
  },
  {
    "id": 10329,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 11,
    "title": "계층형 쿼리 설명 중 적절하지 않은 것은?",
    "options": [
      "PRIOR는 부모-자식 방향을 결정한다",
      "WHERE절의 조건을 제외하고 계층형 쿼리가 수행된다",
      "START WITH는 시작 조건이다",
      "NO CYCLE은 무한루프를 방지한다"
    ],
    "correctIndex": 1,
    "explanation": "WHERE절은 모든 전개 후 필터 조건으로 적용"
  },
  {
    "id": 10330,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 15,
    "title": "아래의 설명을 만족하는 SQL 에 대해서 틀린 부분은 어디인가? ​<지문> ... 내림 차순으로 정렬 한다.",
    "options": [
      "SELECT",
      "FROM",
      "WHERE",
      "ORDER BY A"
    ],
    "correctIndex": 3,
    "explanation": "​"
  },
  {
    "id": 10331,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 20,
    "title": "ORDER BY와 ROWNUM을 이용한 최대값 1건 조회는?",
    "options": [
      "SELECT * FROM TAB WHERE ROWNUM=1 ORDER BY COL DESC",
      "SELECT * FROM (SELECT * FROM TAB ORDER BY COL DESC) WHERE ROWNUM<=1",
      "SELECT MAX(*) FROM TAB",
      "SELECT TOP 1 * FROM TAB ORDER BY COL DESC"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10332,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 28,
    "title": "차상위 매니저 정보 출력 SQL은?",
    "options": [
      "EMP A INNER JOIN EMP B ON A.MGR_NO=B.EMP_NO",
      "EMP A LEFT OUTER JOIN EMP B ON A.MGR_NO=B.EMP_NO",
      "EMP A RIGHT OUTER JOIN EMP B ON A.MGR_NO=B.EMP_NO",
      "EMP A CROSS JOIN EMP B"
    ],
    "correctIndex": 1,
    "explanation": "매니저가 없는 사원(최상위)도 포함하려면 LEFT OUTER JOIN"
  },
  {
    "id": 10333,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 30,
    "title": "아래의 SQL 중 결과가 다른 것은? ( LTRIM, RTRIM 등에 대한 문제)",
    "options": [
      "LPAD('BCD','A',3)",
      "RTRIM('EBCDE','E')",
      "SUBSTR('ABCDE',2,3)",
      "CONCAT ( CONCAT (NULL, 'BC'), 'E')"
    ],
    "correctIndex": 1,
    "explanation": "​ 31.아래의 SQL 에 대한 결과로 올바른 것은? ( AVG, SUM/COUNT 의 비교) ​<설명> 데이터 -> NULL 이 하나 있는 컬럼 SELECT ROUND( AVG(COL) ) , ROUND ( SUM(COL)/COUNT(*) ) FROM .. 105, 70 ​"
  },
  {
    "id": 10334,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 35,
    "title": "UNION 에 대한 설명으로 가장 적절한 것은?",
    "options": [
      "UNION ALL 에 비해 성능이 좋다",
      "상호 배타적인 조건일 때는 UNION 이 사용된다.",
      "합집합이며 중복행은 하나로 취급한다.",
      "..."
    ],
    "correctIndex": null,
    "explanation": "​ 36. ​ <단답형>"
  },
  {
    "id": 10335,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "1과목",
    "number": 6,
    "title": "모든 속성이 주식별자에 완전 종속된다는 것을 만족하는 정규형은?",
    "options": [
      "제1정규형",
      "제2정규형",
      "제3정규형",
      "BCNF"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10336,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "1과목",
    "number": 8,
    "title": "주식별자 분류 짝지어진 것은?",
    "options": [
      "주식별자, 보조식별자, 본질식별자, 외부식별자",
      "단일식별자, 복합식별자, 본질식별자, 인조식별자",
      "내부식별자, 외부식별자, 단일식별자, 복합식별자",
      "주식별자, 보조식별자, 단일식별자, 복합식별자"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10337,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 1,
    "title": "계층형 쿼리 WHERE COL3<>2, START WITH COL3=4 결과 건수는?",
    "options": [
      "1건",
      "2건",
      "3건",
      "4건"
    ],
    "correctIndex": 1,
    "explanation": ""
  },
  {
    "id": 10338,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 5,
    "title": "GROUPING SETS(A)와 ROLLUP(A) 비교에서 차이점은?",
    "options": [
      "ROLLUP(A)에는 전체 집계가 있고 GROUPING SETS(A)에는 없다",
      "둘 다 전체 집계가 있다",
      "둘 다 전체 집계가 없다",
      "GROUPING SETS(A)에만 전체 집계가 있다"
    ],
    "correctIndex": 0,
    "explanation": ""
  },
  {
    "id": 10339,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 8,
    "title": "공집합일 경우 집계함수 결과가 다른 것은?",
    "options": [
      "SELECT COUNT(*) WHERE 1=2",
      "SELECT MIN(COL1) WHERE 1=2",
      "SELECT MAX(COL1) WHERE 1=2",
      "SELECT SUM(COL1) WHERE 1=2"
    ],
    "correctIndex": 0,
    "explanation": "COUNT(*)는 0 반환, 나머지 집계함수는 NULL 반환"
  },
  {
    "id": 10340,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 32,
    "title": "ROUND(10333.3333, -2) 결과는?",
    "options": [
      "10300",
      "10330",
      "10400",
      "10333"
    ],
    "correctIndex": 0,
    "explanation": "-2: 백의자리 반올림 → 10300"
  },
  {
    "id": 10341,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 35,
    "title": "UNION에 대한 설명으로 옳은 것은?",
    "options": [
      "합집합이며 중복 허용",
      "교집합이며 중복 제거",
      "합집합이며 중복행은 하나로 취급한다",
      "차집합이며 중복 제거"
    ],
    "correctIndex": 2,
    "explanation": ""
  },
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
    "explanation": "모델링 유의점: 중복, 비유연성, 비일관성 배제. 반정규화는 별도 검토 사항"
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
    "explanation": "이자율은 정의되는 값(기본속성), 이자는 계산된 값(파생속성)"
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
    "explanation": "인스턴스는 반드시 속성을 가져야 함"
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
    "explanation": ""
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
    "explanation": ""
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
    "explanation": ""
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
    "explanation": ""
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
    "explanation": ""
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
    "explanation": ""
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
    "explanation": ""
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
    "explanation": "Lock은 병행성 제어. 무결성은 Constraints, Trigger, App 로직으로 구현"
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
    "explanation": ""
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
    "explanation": "CTAS: NOT NULL만 복사, PK/FK/UNIQUE 등 미복사"
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
    "explanation": ""
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
    "explanation": "2번은 조건에 맞는 직급의 모든 사원을 나이순으로 정렬할 뿐입니다. 각 직급의 '최고령 사원'만 정확히 발췌하려면 다중열 서브쿼리로 직급별 MAX(나이)와 일치하는 행을 찾아야 합니다."
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
    "explanation": "SAVEPOINT A 이전의 INSERT 1은 유지, SAVEPOINT A 이후의 INSERT 2·3은 ROLLBACK TO SAVEPOINT A로 취소. 이후 INSERT 4·5는 COMMIT으로 확정. 따라서 (1, 4, 5)가 남음."
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
    "explanation": "ROLLUP·CUBE·GROUPING SETS는 GROUP BY 절에서 사용되는 '그룹 함수의 확장' 또는 Grouping 연산자로 분류됩니다. 소계·총계 등 다차원 집계를 한 번에 생성합니다."
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
    "explanation": "length에 음수는 NULL 반환"
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
    "explanation": "table1의 COL1 중 table2에 없는 값(3)만 출력되려면 NOT EXISTS 또는 NOT IN을 사용. NOT EXISTS는 NULL 처리에 안전."
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
    "explanation": "N개 테이블 조인 시 최소 (N-1)개 조인 필요"
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
    "explanation": "CUBE(A, B)는 (A, B), (A), (B), () 네 가지 조합의 집계를 모두 생성하므로, 요구사항에 없는 (B)컬럼별 소계까지 포함하게 되어 오답입니다."
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
    "explanation": "FULL OUTER JOIN 은 LEFT UNION RIGHT , UNION ALL 은 중복제거 없이 전체출력되므로 다르다."
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
    "explanation": "UNIQUE 에는 NULL이 허용된다."
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
    "explanation": "INSERT FIRST는 가장 먼저 만족한 WHEN만 적용. N1=1 → ELSE(TABLE3). N1=2 → N1>=2 만족, TABLE1. N1=5 → N1>=2 만족(FIRST), TABLE1. 결과: TABLE1=2, TABLE2=0, TABLE3=1."
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
    "explanation": "ROWNUM <= 2 (2건 출력)"
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
    "explanation": "NOT IN 서브쿼리에 NULL이 포함되면 모든 비교가 UNKNOWN이 되어 조건을 만족하는 행이 없음. 즉 0건 반환. (NOT EXISTS는 이 문제가 없음)"
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
    "explanation": "1·2·3번은 개별 컬럼의 합을 먼저 구하므로 각 행의 NULL이 무시된 채 온전한 합산이 이루어집니다. 반면 4번은 단일 행에서 COL1과 COL2 중 하나라도 NULL이면 덧셈 결과가 NULL이 되어 총합에서 누락되므로 결과값이 확연히 달라집니다."
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
    "explanation": "UNION ALL 로 인해 ABAB로 값이 출력됨"
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
    "explanation": "OR 을 기준으로 모두 출력된다. ( 4번같은경우는 괄호로 묶어져있어서 다름) SELECT*FROM SQLD49 WHERE V1 = 'A' AND V2 IN ('T1','T2','T3'); N1 V1 V2 ----------- 1 A T1 SQL> SELECT*FROM SQLD49 WHERE V1 = 'A' AND V2='T1' OR V2='T2' OR V2='T3'; N1 V1 V2 ----------- 1 A T1 2 B T2 3 T3 SQL> SELECT*FROM SQLD49 WHERE (V1,V2) IN (('A','T1'),('A','T2'),('A','T3')); N1 V1 V2 ----------- 1 A T1 SQL> SELECT*FROM SQLD49 WHERE V1 = 'A' AND (V2 = 'T1' OR V2 = 'T2' OR V2 = 'T3'); N1 V1 V2 ----------- 1 A T1"
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
    "explanation": "'학점' 정보가 수강 테이블에 있으므로 조인이 필수. 동명이인을 구분하기 위해 이름이 아닌 고유 식별자인 '학번'을 기준으로 그룹화한 뒤, 그 그룹의 최고 학점이 4.0 이상인지 판별하는 3번이 가장 정확한 구문입니다."
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
    "explanation": ""
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
    "explanation": ""
  }
];
