// Auto-generated from PDF + blog + scripts/authored/round-47.json
// 제47회 — 2022년 11월 · 13문항
// ⚠ 직접 편집 금지. 출처별 데이터를 고친 뒤 'node scripts/build-quiz-bank.mjs' 재실행.
import type { QuizQuestion } from '../quizBank';

export const ROUND_47: QuizQuestion[] = [
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "주식별자는 반드시 NOT NULL",
    "_source": "pdf"
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
    "explanation": "​",
    "_source": "blog"
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
    "explanation": "트리거에서는 COMMIT, ROLLBACK 사용 불가",
    "_source": "pdf"
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
    "explanation": "ON절 없는 INNER JOIN = CROSS JOIN",
    "_source": "pdf"
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
    "explanation": "​",
    "_source": "blog"
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
    "explanation": "WHERE절은 모든 전개 후 필터 조건으로 적용",
    "_source": "pdf"
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
    "explanation": "​",
    "_source": "blog"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "매니저가 없는 사원(최상위)도 포함하려면 LEFT OUTER JOIN",
    "_source": "pdf"
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
    "explanation": "​ 31.아래의 SQL 에 대한 결과로 올바른 것은? ( AVG, SUM/COUNT 의 비교) ​<설명> 데이터 -> NULL 이 하나 있는 컬럼 SELECT ROUND( AVG(COL) ) , ROUND ( SUM(COL)/COUNT(*) ) FROM .. 105, 70 ​",
    "_source": "blog"
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
    "explanation": "​ 36. ​ <단답형>",
    "_source": "blog"
  }
];
