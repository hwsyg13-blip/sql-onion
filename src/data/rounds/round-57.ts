// Auto-generated from PDF + blog + scripts/authored/round-57.json
// 제57회 — 2025년 5월 · 22문항
// ⚠ 직접 편집 금지. 출처별 데이터를 고친 뒤 'node scripts/build-quiz-bank.mjs' 재실행.
import type { QuizQuestion } from '../quizBank';

export const ROUND_57: QuizQuestion[] = [
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "발생시점 분류: 기본, 중심, 행위 엔터티. 사건엔터티는 없는 분류",
    "_source": "pdf"
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
    "explanation": "1NF: 원자값. 반복 그룹/다중값 속성을 별도 테이블로 분리",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "주식별자: 유일성, 최소성, 불변성, 존재성(NOT NULL) 만족",
    "_source": "pdf"
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
    "explanation": "FK(외래키)는 다른 테이블에서 가져온 외부식별자. 내부식별자는 해당 엔터티에서 자체 생성",
    "_source": "pdf"
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
    "explanation": "NULL 비교는 = 대신 IS NULL 사용해야 함",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "상품은 주문이 없어도 존재할 수 있음. 하지만 주문은 반드시 상품을 포함",
    "_source": "pdf"
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
    "explanation": "FETCH FIRST 5 ROWS ONLY: 정확히 5개(또는 그 이하) 반환. WITH TIES가 없으면 동순위 포함 안됨",
    "_source": "pdf"
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
    "explanation": "length에 음수가 들어오면 NULL 반환. 나머지 셋은 모두 'gh' 반환",
    "_source": "pdf"
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
    "explanation": "COMMIT 전 변경사항은 현재 세션에서만 보임",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "DROP은 DDL. DML: INSERT, SELECT, UPDATE, DELETE",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "COUNT(*)는 행이 없어도 0 반환. NVL(0, 9999)=0(0은 NULL이 아니므로)",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "SQL Server의 [] 패턴: [KT]im → K 또는 T로 시작하고 im으로 끝나는 4글자",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
  }
];
