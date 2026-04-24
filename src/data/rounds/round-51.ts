// Auto-generated from PDF + blog + scripts/authored/round-51.json
// 제51회 — 2023년 11월 · 10문항
// ⚠ 직접 편집 금지. 출처별 데이터를 고친 뒤 'node scripts/build-quiz-bank.mjs' 재실행.
import type { QuizQuestion } from '../quizBank';

export const ROUND_51: QuizQuestion[] = [
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
    "explanation": "비식별자 관계: 조인이 증가할 수 있음",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "주식별자 최소성: 필요한 최소 속성으로 구성",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "NULLIF(0,0)=NULL → 10/NULL=NULL. NULLIF(NULL,0)=NULL → 10/NULL=NULL",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
  }
];
