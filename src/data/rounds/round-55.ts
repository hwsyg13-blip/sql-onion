// Auto-generated from PDF + blog + scripts/authored/round-55.json
// 제55회 — 2024년 11월 · 27문항
// ⚠ 직접 편집 금지. 출처별 데이터를 고친 뒤 'node scripts/build-quiz-bank.mjs' 재실행.
import type { QuizQuestion } from '../quizBank';

export const ROUND_55: QuizQuestion[] = [
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "엔터티명: 가능하면 약어를 사용하지 않고 현업 용어 사용",
    "_source": "pdf"
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
    "explanation": "기본 엔터티: 자신의 고유한 주식별자를 가지며, 독립적으로 생성",
    "_source": "pdf"
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
    "explanation": "제2정규화: 부분함수 종속 제거 (일반속성이 주식별자 일부에 종속)",
    "_source": "pdf"
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
    "explanation": "이것은 2NF 조건",
    "_source": "pdf"
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
    "explanation": "식별자 관계: 1:M도 가능",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "계층형 모델: 1:N 관계",
    "_source": "pdf"
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
    "explanation": "데이터 계층: 엔터티-인스턴스-속성-속성값",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "IN절은 다중행 서브쿼리도 사용 가능",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "DENSE_RANK: 동점자 동일 등수, 다음 등수 연속",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "테이블명은 숫자로 시작 불가",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "NULL을 포함한 산술 연산 결과는 NULL",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "2번째 서브그룹(4(56)(78))의 시작 위치 = 4",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "별칭은 컬럼/표현식 뒤에만 사용 가능",
    "_source": "pdf"
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
    "explanation": "ON절에는 두 컬럼 비교 조건이 필요. 단순 컬럼명만으로는 오류",
    "_source": "pdf"
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
    "explanation": "",
    "_source": "pdf"
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
    "explanation": "-> ORA-02291: integrity constraint (SQL_QQYONNQTOWOSMXTURQWJCUGZU.FK_02_01) violated - parent key not found ORA-06512: at \"SYS.DBMS_SQL\", line 1721 ​",
    "_source": "blog"
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
    "explanation": "ROLLBACK TO A: SQL2, SQL3 취소. 이후 SQL4, SQL5 실행",
    "_source": "pdf"
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
    "explanation": "Oracle에서 NULL은 가장 큰 값으로 인식. DESC 시 NULL이 맨 위",
    "_source": "pdf"
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
    "explanation": "-> 첫번째 행에 대한 동순위라고 보기에 나왔다고 함. ONLY 의견도 다수 있음",
    "_source": "blog"
  }
];
