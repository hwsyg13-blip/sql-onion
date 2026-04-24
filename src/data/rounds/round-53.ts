// Auto-generated from PDF + blog + scripts/authored/round-53.json
// 제53회 — 2024년 5월 · 9문항
// ⚠ 직접 편집 금지. 출처별 데이터를 고친 뒤 'node scripts/build-quiz-bank.mjs' 재실행.
import type { QuizQuestion } from '../quizBank';

export const ROUND_53: QuizQuestion[] = [
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "발생시점 분류: 기본, 중심, 행위 엔터티",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "1이 3번 조인(3건), 3이 1번 조인(1건) = 4건",
    "_source": "pdf"
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
    "explanation": "DELETE는 테이블 정의(구조)를 유지. DROP은 테이블 자체 삭제",
    "_source": "pdf"
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
    "explanation": "ORDER BY는 마지막 SELECT에만 사용 가능",
    "_source": "pdf"
  }
];
