// Auto-generated from PDF + blog + scripts/authored/round-49.json
// 제49회 — 2023년 6월 · 13문항
// ⚠ 직접 편집 금지. 출처별 데이터를 고친 뒤 'node scripts/build-quiz-bank.mjs' 재실행.
import type { QuizQuestion } from '../quizBank';

export const ROUND_49: QuizQuestion[] = [
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "식별자 관계: 자식의 주식별자가 부모에 종속",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "PRIOR 자식 = 부모 → 순방향",
    "_source": "pdf"
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
    "explanation": "Error : ORA-00920: invalid relational operator ON절은 두개의 컬럼조건이 사용되어야 함.",
    "_source": "blog"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "DEFAULT는 아무 값을 입력하지 않아도 기본 값으로 설정한 값이 자동으로 입력되는 제약조건으로 NOT NULL과 마찬가지로 많이 사용된다. A 가 DEFAULT 9 을 가지고 있으므로 보기 4번의 쿼리는 정상적으로 작동된다. 오라클 DEFAULT 제약조건 추가 [컬럼명] [타입] DEFAULT [기본값] 📍테이블 생성할 때 선언 CREATE TABLE T1( A NUMBER DEFAULT 9 ); 📍테이블 생성 후 제약조건 추가할 때 ALTER TABLE T1 MODIFY A DEFAULT 9 📍DEFAULT 제약조건 삭제 ALTER TABLE T1 MODIFY A DEFAULT NULL",
    "_source": "blog"
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
    "explanation": "PK: 중복도 허용 안하고 NULL도 허용 안함",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "blog"
  }
];
