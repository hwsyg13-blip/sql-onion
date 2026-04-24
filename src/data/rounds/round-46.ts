// Auto-generated from PDF + blog + scripts/authored/round-46.json
// 제46회 — 2022년 9월 · 7문항
// ⚠ 직접 편집 금지. 출처별 데이터를 고친 뒤 'node scripts/build-quiz-bank.mjs' 재실행.
import type { QuizQuestion } from '../quizBank';

export const ROUND_46: QuizQuestion[] = [
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "COUNT(*)는 0 반환, 나머지 집계함수는 NULL 반환",
    "_source": "pdf"
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
    "explanation": "-2: 백의자리 반올림 → 10300",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
  }
];
