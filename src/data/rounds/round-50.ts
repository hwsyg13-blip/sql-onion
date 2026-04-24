// Auto-generated from PDF + blog + scripts/authored/round-50.json
// 제50회 — 2023년 9월 · 16문항
// ⚠ 직접 편집 금지. 출처별 데이터를 고친 뒤 'node scripts/build-quiz-bank.mjs' 재실행.
import type { QuizQuestion } from '../quizBank';

export const ROUND_50: QuizQuestion[] = [
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
    "explanation": "명칭/내역은 중복 가능하므로 주식별자로 부적합",
    "_source": "pdf"
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
    "explanation": "관계 표기 3요소: 관계명, 관계차수, 관계선택사양",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "blog"
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
    "explanation": "■ 단답형 1. 다음 정의에 해당하는 개념 - 속성범위 ~?",
    "_source": "blog"
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
    "explanation": "",
    "_source": "blog"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "PRIOR 부모=자식 형태가 역방향",
    "_source": "pdf"
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
    "explanation": "NATURAL JOIN: 동일 컬럼명 등가조인만 가능",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "blog"
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
    "explanation": "",
    "_source": "blog"
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
    "explanation": "TRUNCATE는 Auto Commit (DDL)",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "blog"
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
    "explanation": "",
    "_source": "blog"
  }
];
