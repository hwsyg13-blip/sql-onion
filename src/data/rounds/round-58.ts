// Auto-generated from PDF + blog + scripts/authored/round-58.json
// 제58회 — 2025년 8월 · 50문항
// ⚠ 직접 편집 금지. 출처별 데이터를 고친 뒤 'node scripts/build-quiz-bank.mjs' 재실행.
import type { QuizQuestion } from '../quizBank';

export const ROUND_58: QuizQuestion[] = [
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
    "explanation": "키 엔터티(기본 엔터티): 업무에서 관리할 핵심 대상. 프로젝트는 행위 엔터티",
    "_source": "pdf"
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
    "explanation": "3NF는 이행함수 종속성을 배제(제거)하는 것이 목적",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "식별자 관계: 부모와 자식의 생명주기가 동일할 때 주로 사용",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "원자성: All or Nothing. 트랜잭션은 전부 완료되거나 전부 취소되어야 함",
    "_source": "pdf"
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
    "explanation": "REPLACE는 모든 'x'를 제거하여 'SQL'. LTRIM/RTRIM/TRIM은 양쪽/한쪽 끝의 'x'만 제거",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "^\\\\w*$: 단어문자(알파벳, 숫자, _)만으로 구성. 하이픈(-) 포함 시 해당 안됨",
    "_source": "pdf"
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
    "explanation": "RESTRICT: 다른 사용자에게 부여된 권한이 있으면 REVOKE 실패 → 모든 유저 권한 유지",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "PRIOR는 CONNECT BY 외에 SELECT, WHERE절에도 사용 가능",
    "_source": "pdf"
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
    "explanation": "AVG는 NULL을 제외하고 계산",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "A(3행) × B(2행) = C(6행): 모든 조합 → CROSS JOIN",
    "_source": "pdf"
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
    "explanation": "NATURAL JOIN: 같은 이름 컬럼 자동 조인, 별칭 사용 불가 → 다른 방식",
    "_source": "pdf"
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
    "explanation": "Tbl_B에서 UPPER(E)='E'인 D값 추출 후 Tbl_A와 조인, DISTINCT(A,B) 카운트",
    "_source": "pdf"
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
    "explanation": "NULL 비교는 반드시 IS NULL / IS NOT NULL 사용",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "DUAL은 1건. COUNT(*)=1 이 4보다 크지 않으므로 HAVING 조건 불만족 → 공집합",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "grouping(id)+grouping(type)!=1 조건: 전체합계(1+1=2), 행별(0+0=0)만 포함",
    "_source": "pdf"
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
    "explanation": "GROUPING SETS는 인수 순서와 무관하게 같은 결과",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "GRANT/REVOKE: DCL(데이터 제어어). DML: INSERT, SELECT, UPDATE, DELETE",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "DUAL 1행에서 LEVEL<=2이면 2행 생성 → COUNT(*)=2",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "REGEXP_INSTR: '312'가 처음 나타나는 위치. '13123...' → 2번 인덱스의 '3' 시작",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "Oracle에서 작은따옴표 2개('')는 하나의 작은따옴표를 의미. '''''=''+''+ ''='''A'''",
    "_source": "pdf"
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
    "explanation": "DROP TABLE ... CASCADE CONSTRAINTS: 해당 테이블을 참조하는 FK 제약조건도 함께 삭제",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
  }
];
