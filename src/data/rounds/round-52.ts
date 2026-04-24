// Auto-generated from PDF + blog + scripts/authored/round-52.json
// 제52회 — 2024년 3월 · 13문항
// ⚠ 직접 편집 금지. 출처별 데이터를 고친 뒤 'node scripts/build-quiz-bank.mjs' 재실행.
import type { QuizQuestion } from '../quizBank';

export const ROUND_52: QuizQuestion[] = [
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "blog"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "NULL은 EXISTS에서 제외되어 1건",
    "_source": "pdf"
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
    "explanation": "COALESCE 함수는 첫 번째 NULL이 아닌 값을 반환한다.",
    "_source": "blog"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "NOT NULL 조건만 가져올수 있음.",
    "_source": "blog"
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
    "explanation": "SQL은 구조적(structured)이고, 집합적(set-based)이고, 선언적(declarative)인 질의(Query) 언어이다. SQL(Structured Query Language)은 영문명을 풀이하면 구조화된 질의 언어라는 의미로, 단순하게 질의만을 수행하는 것이 아니라 데이터베이스의 모든 작업을 통제하는 비절차적(Non-procedural) 언어이다.",
    "_source": "blog"
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
    "explanation": "ROLLUP((A,B)): A,B를 하나의 단위로 처리",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "blog"
  }
];
