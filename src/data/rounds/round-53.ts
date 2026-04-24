// Auto-generated from PDF + blog + scripts/authored/round-53.json
// 제53회 — 2024년 5월 · 50문항
// ⚠ 직접 편집 금지. 출처별 데이터를 고친 뒤 'node scripts/build-quiz-bank.mjs' 재실행.
import type { QuizQuestion } from '../quizBank';

export const ROUND_53: QuizQuestion[] = [
  {
    "id": 10350,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "1과목",
    "number": 1,
    "title": "다음 중 데이터 모델링의 세 가지 관점에 해당하는 것은?",
    "options": [
      "데이터 관점",
      "보안 관점",
      "성능 관점",
      "인프라 관점"
    ],
    "correctIndex": 0,
    "explanation": "데이터 모델링의 세 가지 관점은 데이터 관점, 프로세스 관점, 상관 관점이다.",
    "_source": "authored"
  },
  {
    "id": 10351,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "1과목",
    "number": 2,
    "title": "데이터 모델링 개요 설명 중 옳지 않은 것은?",
    "options": [
      "현실 세계를 단순화·추상화하여 표현한다.",
      "데이터 용량 산정은 데이터 모델링의 산출물이 아니다.",
      "업무 흐름을 표현하는 도구로 활용될 수 있다.",
      "데이터 구조와 관계를 명확히 정의한다."
    ],
    "correctIndex": 1,
    "explanation": "물리 데이터 모델링 단계에서 데이터 용량 산정도 수행된다.",
    "_source": "authored"
  },
  {
    "id": 10352,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "1과목",
    "number": 3,
    "title": "발생 시점에 따른 엔터티 분류에 해당하지 않는 것은?",
    "options": [
      "기본 엔터티",
      "중심 엔터티",
      "유형 엔터티",
      "행위 엔터티"
    ],
    "correctIndex": 2,
    "explanation": "발생 시점 기준 분류는 기본·중심·행위이며 유형은 포함되지 않는다.",
    "_source": "authored"
  },
  {
    "id": 10353,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "1과목",
    "number": 4,
    "title": "아래 설명을 만족하는 정규형은?",
    "options": [
      "1정규형",
      "2정규형",
      "3정규형",
      "BCNF"
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10354,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "1과목",
    "number": 5,
    "title": "인조 식별자에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "속성의 수가 적으면 인조 식별자를 반드시 사용해야 한다.",
      "업무와 무관하게 시스템이 부여한다.",
      "본질 식별자를 대체하여 관리 편의성을 높인다.",
      "일련번호 형태로 단순하게 부여되는 경우가 많다."
    ],
    "correctIndex": 0,
    "explanation": "속성의 수는 인조 식별자 사용의 절대적인 기준이 아니다.",
    "_source": "authored"
  },
  {
    "id": 10355,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "1과목",
    "number": 6,
    "title": "아래 설명에 해당하는 정규화는?",
    "options": [
      "1정규화",
      "2정규화",
      "3정규화",
      "BCNF"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10356,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "1과목",
    "number": 7,
    "title": "상호 배타적 관계(Arc Relationship) 에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "상호 배타적 관계는 배타적 상속이 불가능하다.",
      "두 관계 중 하나만 선택된다.",
      "차량 엔터티가 법인 또는 개인 중 하나의 소유자와 연결되는 예가 대표적이다.",
      "ERD 상에서 아크(Arc) 기호로 표현된다."
    ],
    "correctIndex": 0,
    "explanation": "상호 배타적 관계에서도 배타적 상속이 가능하며 오히려 그 특성이 본질이다.",
    "_source": "authored"
  },
  {
    "id": 10357,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "1과목",
    "number": 8,
    "title": "다른 엔터티의 주식별자를 참조하는 키는?",
    "options": [
      "외래키(FK)",
      "기본키(PK)",
      "후보키",
      "대체키"
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10358,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "1과목",
    "number": 9,
    "title": "데이터 모델링에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "논리적 연산의 단위이다.",
      "트랜잭션을 모델에 표현할 수 없다.",
      "연관된 업무를 하나의 커밋 단위로 묶을 수 있다.",
      "데이터 정합성을 확보하는 수단이다."
    ],
    "correctIndex": 1,
    "explanation": "데이터 모델링 단계에서 트랜잭션도 분석·표현 대상이 된다.",
    "_source": "authored"
  },
  {
    "id": 10359,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "1과목",
    "number": 10,
    "title": "바커 표기법에서 인스턴스(엔터티) 존재를 표현하는 선의 형태는?",
    "options": [
      "직선",
      "점선",
      "이중선",
      "파선"
    ],
    "correctIndex": 0,
    "explanation": "바커 표기법은 필수 참여를 직선, 선택 참여를 점선으로 표기한다.",
    "_source": "authored"
  },
  {
    "id": 10360,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 11,
    "title": "다음 중 데이터 제어어(DCL) 에 해당하는 명령어의 조합은?",
    "options": [
      "CREATE, ALTER",
      "INSERT, UPDATE",
      "GRANT, REVOKE",
      "COMMIT, ROLLBACK"
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10361,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 12,
    "title": "상위 5건과 동순위 포함 5건을 조회하는 방법으로 가장 적절한 것은?",
    "options": [
      "RANK() OVER (ORDER BY SAL DESC) 를 사용하여 순위를 매기고 조건으로 5까지 필터링한다.",
      "DISTINCT SAL 의 상위 5건만 별도 쿼리한다.",
      "WHERE ROWNUM = 5 로만 조회한다.",
      "GROUP BY SAL HAVING COUNT(*) >= 5 을 사용한다."
    ],
    "correctIndex": 0,
    "explanation": "TOP-N 쿼리에서 동순위를 포함하려면 RANK() 또는 FETCH FIRST N ROWS WITH TIES 를 사용해야 한다.",
    "_source": "authored"
  },
  {
    "id": 10362,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 13,
    "title": "SQL 실행 결과로 적절하지 않은 것은?",
    "options": [
      "ROUND(4.875, 2) = 4.88",
      "LENGTH('KOREAN') = 6",
      "DATE_FORMAT('2022-11-02', '%Y-%m-%d') = 2022-11-02",
      "SUBSTR('Gangneung Wonju', 8, 4) = 'g Wo'"
    ],
    "correctIndex": 3,
    "explanation": "8번째 문자부터 4글자는 'ng W' 이다.",
    "_source": "authored"
  },
  {
    "id": 10363,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 14,
    "title": "아래 조건을 만족하는 행의 개수로 옳은 것은?",
    "options": [
      "1개",
      "2개",
      "3개",
      "0개"
    ],
    "correctIndex": 0,
    "explanation": "AMT 가 3000~5000 이고 VOL 이 10 이하인 행은 (4000, 5) 한 건이다.",
    "_source": "authored"
  },
  {
    "id": 10364,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 15,
    "title": "아래 함수 중 NULL 을 반환하지 않는 것은?",
    "options": [
      "NVL(NULL, NULL)",
      "NULLIF('A', 'A')",
      "COALESCE('AB', 'CD')",
      "CASE WHEN 1=2 THEN 'Y' END"
    ],
    "correctIndex": 2,
    "explanation": "COALESCE 는 NULL 이 아닌 첫 번째 값인 'AB' 를 반환한다.",
    "_source": "authored"
  },
  {
    "id": 10365,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 16,
    "title": "아래 두 테이블에 대한 SQL 의 결과로 옳은 것은?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctIndex": 2,
    "explanation": "T1 의 1 은 T2 의 1(세 건) 과 매칭되고 T1 의 3 은 T2 의 3(한 건) 과 매칭되어 3 + 1 = 4 건이 나온다.",
    "_source": "authored"
  },
  {
    "id": 10366,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 17,
    "title": "아래 SQL 의 ORDER BY 절로 가장 적절한 것은?",
    "options": [
      "ORDER BY 주문번호 DESC, 금액 ASC",
      "ORDER BY 주문번호 DESC, 금액테이블번호 ASC",
      "ORDER BY 주문번호 DESC, 4 DESC, 1 ASC",
      "ORDER BY 주문번호 DESC, 4 DESC, 1 DESC"
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10367,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 18,
    "title": "아래 테이블 DDL 에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "학번 컬럼에 DEFAULT 값이 지정되어 있다.",
      "학생 이름은 NULL 을 허용하지 않는다.",
      "학과번호는 학과 테이블을 참조한다.",
      "DEFAULT 때문에 101·102·103 학생 번호로 입력해도 학번에는 NULL 이 들어간다."
    ],
    "correctIndex": 3,
    "explanation": "DEFAULT 는 값 미지정 시 기본값을 적용할 뿐 값이 입력되면 그 값이 그대로 저장된다.",
    "_source": "authored"
  },
  {
    "id": 10368,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 19,
    "title": "SAL 기준 상위 3순위까지 동순위를 포함하여 조회하는 함수로 적절한 것은?",
    "options": [
      "DENSE_RANK",
      "ROW_NUMBER",
      "RANK",
      "NTILE"
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10369,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 20,
    "title": "아래 SQL 의 결과로 옳은 것은?",
    "options": [
      "전체 회원",
      "1건",
      "NULL",
      "공집합"
    ],
    "correctIndex": 3,
    "explanation": "조건을 만족하는 행이 없으므로 공집합이 반환된다.",
    "_source": "authored"
  },
  {
    "id": 10370,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 21,
    "title": "아래 셀프 조인 SQL 의 빈칸에 들어갈 함수로 옳은 것은?",
    "options": [
      "NVL(M.이름)",
      "DECODE(M.이름)",
      "NULLIF(M.이름, '사장')",
      "COALESCE(M.이름, '사장')"
    ],
    "correctIndex": 3,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10371,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 22,
    "title": "DELETE·TRUNCATE·DROP 비교에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "특정 테이블에 WHERE 조건 없이 DELETE 를 수행하면 DROP TABLE 과 동일한 결과를 얻는다.",
      "DROP 은 테이블 정의를 삭제하고 TRUNCATE 는 테이블을 초기 상태로 만든다.",
      "TRUNCATE 는 UNDO 데이터를 생성하지 않아 대량 삭제 시 DELETE 보다 빠르다.",
      "DROP 과 TRUNCATE 는 Auto Commit 이고 DELETE 는 사용자 COMMIT 이 필요하다."
    ],
    "correctIndex": 0,
    "explanation": "WHERE 없는 DELETE 는 모든 행을 삭제하지만 테이블 구조는 유지되므로 DROP TABLE 과 결과가 다르다.",
    "_source": "authored"
  },
  {
    "id": 10372,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 23,
    "title": "아래 LTRIM 함수의 결과로 옳은 것은?",
    "options": [
      "abcd",
      "xxxabcd",
      "xxxxxxabcd",
      "NULL"
    ],
    "correctIndex": 0,
    "explanation": "LTRIM 은 왼쪽에서 지정된 문자를 모두 제거한다.",
    "_source": "authored"
  },
  {
    "id": 10373,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 24,
    "title": "아래 WHERE 조건과 동일한 의미의 SQL 은?",
    "options": [
      "COL1 = 1 AND COL2 = 3",
      "COL1 = 1 OR COL2 IN (3, 4)",
      "COL1 IN (1) AND COL2 IN (3, 4)",
      "COL1 = 1 AND (COL2 = 3 OR COL2 = 4)"
    ],
    "correctIndex": 3,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10374,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 25,
    "title": "소수점 내림을 수행하는 함수에 해당하지 않는 것은?",
    "options": [
      "CEIL",
      "FLOOR",
      "TRUNC (양수 자리 지정)",
      "INT"
    ],
    "correctIndex": 0,
    "explanation": "CEIL 은 올림 함수이다.",
    "_source": "authored"
  },
  {
    "id": 10375,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 26,
    "title": "아래 SQL 의 오류가 발생하는 부분으로 가장 적절한 것은?",
    "options": [
      "(1)",
      "(2)",
      "(3)",
      "(4)"
    ],
    "correctIndex": 1,
    "explanation": "서브쿼리가 다중 행을 반환할 수 있음에도 단일 행 비교 연산자 '=' 를 사용하여 런타임 오류가 발생할 수 있다.",
    "_source": "authored"
  },
  {
    "id": 10376,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 27,
    "title": "테이블·컬럼 별칭 사용에 대한 다음 설명 중 옳지 않은 것은?",
    "options": [
      "컬럼 별칭은 AS 키워드를 생략할 수 있다.",
      "테이블 별칭은 FROM 절에서 지정한다.",
      "SELECT U1.T1.C1 FROM U1.T1 A; 처럼 별칭을 지정한 뒤에도 원래 테이블명을 SELECT 절에 사용할 수 있다.",
      "ORDER BY 절에서는 SELECT 절의 별칭을 참조할 수 있다."
    ],
    "correctIndex": 2,
    "explanation": "테이블 별칭을 지정하면 SELECT 절에서 원본 테이블명을 직접 참조할 수 없다.",
    "_source": "authored"
  },
  {
    "id": 10377,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 28,
    "title": "아래 NATURAL JOIN SQL 의 결과로 옳은 것은?",
    "options": [
      "오류 발생",
      "60",
      "90",
      "225"
    ],
    "correctIndex": 0,
    "explanation": "동일 컬럼명이 여러 개이면서 값이 다르면 NATURAL JOIN 은 매칭 실패로 결과가 비거나 경우에 따라 예상과 다른 결과를 낸다.",
    "_source": "authored"
  },
  {
    "id": 10378,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 29,
    "title": "아래 데이터를 VVIP → VIP 순서로 정렬하는 SQL 결과로 옳은 것은?",
    "options": [
      "VVIP, VIP 순으로 출력",
      "VIP, VVIP 순으로 출력",
      "정렬되지 않은 원본 순서",
      "오류 발생"
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10379,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 30,
    "title": "아래 SQL 의 결과로 옳은 것은?",
    "options": [
      "10, 12, 15",
      "10, 12",
      "15 이하의 모든 값",
      "공집합"
    ],
    "correctIndex": 0,
    "explanation": "`<= ALL(50, 15)` 은 두 값 모두와 비교하여 최소값 15 이하를 만족하는 행을 반환한다.",
    "_source": "authored"
  },
  {
    "id": 10380,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 31,
    "title": "아래 설명에 해당하는 집합 연산자는?",
    "options": [
      "UNION",
      "UNION ALL",
      "INTERSECT",
      "MINUS"
    ],
    "correctIndex": 3,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10381,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 32,
    "title": "집합 연산자에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "UNION 연산자는 합집합 결과에서 중복된 행을 하나의 행으로 만든다.",
      "UNION ALL 연산자는 중복이 없는 경우 UNION 과 결과가 동일하다.",
      "UNION 연산자를 사용한 SQL 은 각각의 집합에 GROUP BY 절을 사용할 수 있다.",
      "UNION 연산자를 사용한 SQL 은 각각의 집합에 ORDER BY 절을 사용할 수 있다."
    ],
    "correctIndex": 3,
    "explanation": "ORDER BY 는 최종 결과 집합에만 적용할 수 있다.",
    "_source": "authored"
  },
  {
    "id": 10382,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 33,
    "title": "아래 SQL 중 오류 원인이 올바르게 분류된 것은?",
    "options": [
      "가 — SELECT 서브쿼리에서 집계 함수 사용으로 인한 오류",
      "나 — 집계 함수 오류가 아니고 '=' 연산자 때문",
      "다 — GROUP BY 에서 집계 함수를 사용",
      "라 — ORDER BY 에서 집계 함수를 사용했으므로 오류"
    ],
    "correctIndex": 3,
    "explanation": "원본 기출의 정답 표기를 보존하되 일반적으로 ORDER BY 에서 집계 함수는 사용 가능하므로, 원본 문항의 다른 맥락이 있을 수 있다.",
    "_source": "authored"
  },
  {
    "id": 10383,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 34,
    "title": "계층형 집계 함수에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "ROLLUP 은 시간·지형 등 계층형 데이터의 소계·총계를 반환한다.",
      "CUBE 는 모든 컬럼 조합의 집계를 반환한다.",
      "GROUPING SETS 는 원하는 집계 조합을 선택적으로 지정한다.",
      "ROLLUP·CUBE·GROUPING SETS 은 내부에서 정렬을 수행하지 못한다."
    ],
    "correctIndex": 3,
    "explanation": "필요 시 ORDER BY 절을 함께 사용하여 정렬할 수 있다.",
    "_source": "authored"
  },
  {
    "id": 10384,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 35,
    "title": "아래 CROSS JOIN 의 결과 행 수로 옳은 것은?",
    "options": [
      "15",
      "8",
      "5",
      "3"
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10385,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 36,
    "title": "SAL 상위 5순위 사원을 조회하는 SQL 로 옳은 것은?",
    "options": [
      "ROWNUM <= 5 를 직접 WHERE 절에 사용",
      "RANK OVER 없이 DISTINCT SAL 사용",
      "ORDER BY SAL DESC 한 뒤 인라인 뷰로 WHERE ROWNUM <= 5 사용",
      "FETCH FIRST 5 WITHOUT ORDER"
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10386,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 37,
    "title": "UNPIVOT 절 사용 시 열 이름의 순서에 대한 설명 중 옳은 것은?",
    "options": [
      "AMOUNT3, AMOUNT2, AMOUNT1 순으로 UNPIVOT 해도 행 배치는 동일하다.",
      "PIVOT 의 역순으로 입력하면 오류가 발생한다.",
      "UNPIVOT 은 NULL 행을 항상 유지한다.",
      "UNPIVOT 은 반드시 세 개의 열을 대상으로 한다."
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10387,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 38,
    "title": "REGEXP_SUBSTR 로 이메일의 도메인 점(.) 유무를 검사할 때 가장 부적절한 결과가 나오는 경우는?",
    "options": [
      "name@domain.com",
      "test@naver.co.kr",
      "hello@nodot",
      "user1@example.com"
    ],
    "correctIndex": 2,
    "explanation": "도메인에 '.' 이 없어 이메일 검증 패턴과 매칭되지 않는다.",
    "_source": "authored"
  },
  {
    "id": 10388,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 39,
    "title": "REGEXP_SUBSTR 로 'aabbc' 중 일부를 추출하는 SQL 의 결과로 옳은 것은?",
    "options": [
      "aabbc abbc",
      "abbc bc",
      "aab bbc",
      "빈 문자열"
    ],
    "correctIndex": 1,
    "explanation": "정규표현식 패턴과 탐욕적 매칭으로 해당 결과가 도출된다. 원본 기출의 정답 표기를 보존한다.",
    "_source": "authored"
  },
  {
    "id": 10389,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 40,
    "title": "아래 윈도우 절 중 PRECEDING 1 · FOLLOWING 1 과 동등한 것은?",
    "options": [
      "ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING",
      "RANGE BETWEEN 50 PRECEDING AND 150 FOLLOWING",
      "ROWS UNBOUNDED PRECEDING",
      "RANGE BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING"
    ],
    "correctIndex": 1,
    "explanation": "원본 기출의 정답 표기를 보존한다.",
    "_source": "authored"
  },
  {
    "id": 10390,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 41,
    "title": "계층형 SQL 에서 ORDER SIBLINGS BY 와 NOCYCLE 옵션에 대한 설명 중 옳은 것은?",
    "options": [
      "NOCYCLE 을 수행한 뒤 순환 발생 행을 CONNECT_BY_ISCYCLE 로 확인할 수 있다.",
      "SIBLINGS 는 전체 트리를 재정렬한다.",
      "ORDER BY 는 계층형 결과를 보존하지 않는다.",
      "NOCYCLE 은 CONNECT_BY_ROOT 와 반드시 함께 사용한다."
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10391,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 42,
    "title": "아래 SQL 의 결과로 옳은 것은?",
    "options": [
      "100",
      "190",
      "NULL",
      "오류"
    ],
    "correctIndex": 0,
    "explanation": "MIN 은 10, MAX(TO_CHAR) 는 문자 비교 결과 90(문자열) 이 되어 묵시적 변환 시 10 + 90 = 100 이 된다.",
    "_source": "authored"
  },
  {
    "id": 10392,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 43,
    "title": "LIKE '%n' 조건에 매칭되는 이름의 수로 옳은 것은?",
    "options": [
      "1명",
      "2명",
      "3명",
      "0명"
    ],
    "correctIndex": 1,
    "explanation": "'n' 으로 끝나는 이름은 Kevin, Jason 의 두 명이다.",
    "_source": "authored"
  },
  {
    "id": 10393,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 44,
    "title": "테이블 구조 변경에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "기존 데이터가 있으면 컬럼 사이즈 축소 시 제한이 있다.",
      "NULL 만 입력된 컬럼은 사이즈 축소가 가능하다.",
      "DEFAULT 값을 변경하면 변경 이후 입력되는 데이터에만 적용된다.",
      "DEFAULT 값을 NULL 로 변경하면 기존 NULL 데이터에도 새로운 DEFAULT 가 소급 적용된다."
    ],
    "correctIndex": 3,
    "explanation": "DEFAULT 변경은 과거 데이터에 소급 적용되지 않는다.",
    "_source": "authored"
  },
  {
    "id": 10394,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 45,
    "title": "아래 테이블에 대한 INSERT 중 오류가 발생하는 것은?",
    "options": [
      "INSERT INTO TEST45 VALUES (1, 2, 3);",
      "INSERT INTO TEST45 VALUES (1, 2, 3, 4);",
      "INSERT INTO TEST45 (COL1, COL2, COL3) VALUES (1, 2, 3);",
      "INSERT INTO TEST45 (COL1, COL2, COL3, COL4) VALUES (1, 2, 3, 4);"
    ],
    "correctIndex": 0,
    "explanation": "컬럼 목록을 명시하지 않은 INSERT 는 모든 컬럼에 값을 채워야 한다.",
    "_source": "authored"
  },
  {
    "id": 10395,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 46,
    "title": "아래 세 테이블을 조인한 결과의 행 수로 옳은 것은?",
    "options": [
      "1개",
      "2개",
      "3개",
      "0개"
    ],
    "correctIndex": 0,
    "explanation": "세 테이블 모두에 값이 존재하는 키는 1 한 건 뿐이다.",
    "_source": "authored"
  },
  {
    "id": 10396,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 47,
    "title": "A·B 테이블을 UNION 후 중복을 제거한 결과의 행 수는?",
    "options": [
      "6개",
      "8개",
      "4개",
      "2개"
    ],
    "correctIndex": 0,
    "explanation": "1·2·3·4·5·6 의 6개 값만 남는다.",
    "_source": "authored"
  },
  {
    "id": 10397,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 48,
    "title": "아래 SQL 의 결과로 옳은 것은?",
    "options": [
      "5 (5+0+0)",
      "15 (5+10+0)",
      "20",
      "50"
    ],
    "correctIndex": 1,
    "explanation": "MIN(COL_B)=5, MAX(COL_C)=10, SUM(NVL(SCORE,0))=0 이므로 5+10+0 = 15 이다.",
    "_source": "authored"
  },
  {
    "id": 10398,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 49,
    "title": "테이블 제약조건 변경에 대한 설명으로 옳지 않은 것은?",
    "options": [
      "PK 는 NOT NULL 과 UNIQUE 가 결합된 제약이다.",
      "FOREIGN KEY 는 참조 대상이 존재해야 추가할 수 있다.",
      "CHECK 조건은 기존 데이터도 위반 여부를 검사한다.",
      "제약 조건 NOT NULL 추가 시 이미 NULL 값이 존재하면 오류 없이 수행된다."
    ],
    "correctIndex": 3,
    "explanation": "기존에 NULL 값이 존재하면 NOT NULL 제약 추가가 실패한다.",
    "_source": "authored"
  },
  {
    "id": 10399,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 50,
    "title": "아래 SQL 실행 후 최종 조회 건수는?",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "correctIndex": 2,
    "explanation": "COMMIT 시점에 5건이 확정되고 SAVEPOINT SQL1 은 이미 사라졌으므로 이후 ROLLBACK TO SAVEPOINT SQL1 은 오류가 발생해 수행되지 않는다. 마지막 INSERT (6) 까지 포함한 6 건이 조회된다.",
    "_source": "authored"
  }
];
