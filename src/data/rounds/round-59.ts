// Auto-generated from PDF + blog + scripts/authored/round-59.json
// 제59회 — 2025년 11월 · 50문항
// ⚠ 직접 편집 금지. 출처별 데이터를 고친 뒤 'node scripts/build-quiz-bank.mjs' 재실행.
import type { QuizQuestion } from '../quizBank';

export const ROUND_59: QuizQuestion[] = [
  {
    "id": 10050,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "1과목",
    "number": 1,
    "title": "모델링의 특징이 아닌 것은?",
    "options": [
      "추상화",
      "단순화",
      "명확화",
      "최적화"
    ],
    "correctIndex": 3,
    "explanation": "모델링의 3가지 특징: 추상화, 단순화, 명확화",
    "_source": "pdf"
  },
  {
    "id": 10051,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "1과목",
    "number": 2,
    "title": "다음 예금 관련 설명 중 틀린 것은? (원금, 예치기간, 이자율, 이자 관리)",
    "options": [
      "일반예금은 코드 엔터티를 별도로 구분하고 값에는 코드값만 포함한다",
      "원금, 예치기간은 기본 속성이다",
      "이자와 이자율은 파생 속성이다",
      "예금분류는 설계 속성이다"
    ],
    "correctIndex": 2,
    "explanation": "이자율은 정의된 값(기본속성), 이자는 계산된 값(파생속성). 둘 다 파생속성은 아님",
    "_source": "pdf"
  },
  {
    "id": 10052,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "1과목",
    "number": 3,
    "title": "속성이 가질 수 있는 값(데이터 타입 등)의 범위를 정의한 것은?",
    "options": [
      "제약조건",
      "도메인",
      "식별자",
      "관계"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10053,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "1과목",
    "number": 4,
    "title": "관계의 표기법이 아닌 것은?",
    "options": [
      "관계명",
      "관계차수",
      "관계선택사양",
      "관계 빈도"
    ],
    "correctIndex": 3,
    "explanation": "관계 표기법의 3요소: 관계명, 관계차수(Cardinality), 관계선택사양(Optionality)",
    "_source": "pdf"
  },
  {
    "id": 10054,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "1과목",
    "number": 5,
    "title": "집합연산자에 대한 설명 중 틀린 것은?",
    "options": [
      "집합연산자에서 호환이 가능해도 무조건 데이터 타입을 일치시켜야 한다",
      "두 SELECT 문의 컬럼 수가 같아야 한다",
      "ORDER BY는 마지막 SELECT에만 사용 가능하다",
      "UNION ALL은 중복을 허용한다"
    ],
    "correctIndex": 0,
    "explanation": "호환 가능한 데이터 타입은 자동 변환 가능",
    "_source": "pdf"
  },
  {
    "id": 10055,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "1과목",
    "number": 6,
    "title": "4개의 테이블 PK, 식별/비식별 관계에서 틀린 것은? (테이블 4개 연결 1:M)",
    "options": [
      "1:M으로 연결되어 있다",
      "비식별로 바꾸면 조회가 빠르다",
      "A테이블 키는 내부식별자, B테이블은 외부식별자이다",
      "B테이블의 FK를 비식별자로 바꾸면 C테이블에서 조인할 때 더 편하다"
    ],
    "correctIndex": 1,
    "explanation": "비식별 관계로 변경하면 조인 깊이 증가로 오히려 조회 성능이 저하될 수 있음",
    "_source": "pdf"
  },
  {
    "id": 10056,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "1과목",
    "number": 7,
    "title": "이행적 함수 종속(Transitive Functional Dependency) 제거와 관련된 정규화는?",
    "options": [
      "제1정규형",
      "제2정규형",
      "제3정규형",
      "BCNF"
    ],
    "correctIndex": 2,
    "explanation": "제3정규화: 이행적 함수 종속(A→B, B→C 이므로 A→C) 제거",
    "_source": "pdf"
  },
  {
    "id": 10057,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "1과목",
    "number": 8,
    "title": "트랜잭션의 특징이 아닌 것은?",
    "options": [
      "원자성(Atomicity)",
      "독립성(Isolation?)",
      "일관성(Consistency)",
      "영속성(Durability)"
    ],
    "correctIndex": 1,
    "explanation": "트랜잭션 4대 특성(ACID): 원자성, 일관성, 고립성(격리성), 영속성. 독립성은 정확한 용어 아님",
    "_source": "pdf"
  },
  {
    "id": 10058,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "1과목",
    "number": 9,
    "title": "본질식별자, 인조식별자, 주식별자를 묻는 문제에서 올바른 것은?",
    "options": [
      "주민등록번호는 인조식별자이다",
      "주민등록번호는 인조식별자이며 단일식별자이다",
      "사번+이름 조합은 보조식별자, 본질식별자, 복합식별자이다",
      "인조식별자는 항상 PK이다"
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10059,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "1과목",
    "number": 10,
    "title": "ERD 해석 문제에서 올바른 것은? (학생-수강 관계)",
    "options": [
      "학생은 수강이 없어도 된다",
      "수강은 학생이 없어도 된다",
      "수강은 학생을 반드시 가진다",
      "학생은 최소 한 개 이상의 수강을 해야 한다"
    ],
    "correctIndex": 3,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10060,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 1,
    "title": "다음 중 옳은 것으로 이루어진 문항을 고르시오 (GRANT, REVOKE, ROLE 관련)",
    "options": [
      "가(DCL은 CREATE), 나(GRANT는 권한 부여)",
      "나(GRANT는 권한 부여), 다(REVOKE는 물리디스크 저장)",
      "나(GRANT는 권한 부여), 라(ROLE은 권한 집합)",
      "가, 나, 라"
    ],
    "correctIndex": 2,
    "explanation": "GRANT: 자신이 가진 권한을 부여 가능, ROLE: 데이터 접근권한의 집합",
    "_source": "pdf"
  },
  {
    "id": 10061,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 2,
    "title": "ORDER BY 역방향에서 LAG/LEAD 함수 사용 시 올바른 것은?",
    "options": [
      "LEAD, ORDER BY ASC",
      "LAG, ORDER BY DESC",
      "LEAD, ORDER BY DESC",
      "LAG, ORDER BY ASC"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10062,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 3,
    "title": "A연구소, 화학연구소, 연구소가 출력될 수 있도록 하는 WHERE 구문은?",
    "options": [
      "WHERE 연구소명 = '_연구소'",
      "WHERE 연구소명 = '%연구소'",
      "WHERE 연구소명 LIKE '%연구소'",
      "WHERE 연구소명 LIKE '_연구소'"
    ],
    "correctIndex": 2,
    "explanation": "LIKE '%연구소': 연구소로 끝나는 모든 문자열",
    "_source": "pdf"
  },
  {
    "id": 10063,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 4,
    "title": "NVL2 함수와 날짜 추출 문제에서 NVL2(NULL, a, b)의 결과는?",
    "options": [
      "a",
      "b",
      "NULL",
      "오류"
    ],
    "correctIndex": 1,
    "explanation": "NVL2(expr, b, c): expr이 NULL이 아니면 b, NULL이면 c 반환",
    "_source": "pdf"
  },
  {
    "id": 10064,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 5,
    "title": "직원번호, 상사번호 조회에서 계층형 셀프조인 결과는?",
    "options": [
      "직원만 표시",
      "직원과 상사 표시",
      "상사만 표시",
      "빈 결과"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10065,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 6,
    "title": "Oracle SQL을 표준 ANSI SQL로 전환한 것 중 올바른 것은?",
    "options": [
      "LEFT OUTER JOIN",
      "RIGHT OUTER JOIN",
      "FULL OUTER JOIN",
      "INNER JOIN"
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10066,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 7,
    "title": "학생 중에 강의를 수강하는 학생을 찾는 서브쿼리로 올바른 것은?",
    "options": [
      "EXISTS 사용",
      "NOT EXISTS + EXCEPT",
      "EXISTS + INTERSECT",
      "NOT EXISTS"
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10067,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 8,
    "title": "가장 높은 empno를 구하는 TOP-N 쿼리 중 올바른 것은?",
    "options": [
      "ROWNUM",
      "FETCH FIRST",
      "TOP WITH TIES",
      "TOP"
    ],
    "correctIndex": 0,
    "explanation": "ROWNUM: 정렬된 서브쿼리에서 ROWNUM=1로 최댓값 추출 가능",
    "_source": "pdf"
  },
  {
    "id": 10068,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 9,
    "title": "TRUNCATE, DDL이 있고 SAVEPOINT가 없는 ROLLBACK 문제에서 최종 결과는?",
    "options": [
      "0",
      "15",
      "30",
      "NULL"
    ],
    "correctIndex": 2,
    "explanation": "DDL 실행 시 AUTO COMMIT 발생. SAVEPOINT 없이 ROLLBACK 시 이전 COMMIT 시점으로",
    "_source": "pdf"
  },
  {
    "id": 10069,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 10,
    "title": "고객테이블과 대리점 테이블에서 COUNT에 대한 올바른 설명은?",
    "options": [
      "COUNT(*)는 NULL을 포함한다",
      "COUNT(컬럼)은 NULL을 제외한다",
      "COUNT(고객번호)에서 COUNT(집주소)를 빼면 집주소가 없는 고객의 수를 구할 수 있다",
      "COUNT(DISTINCT 컬럼)은 NULL도 포함"
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10070,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 11,
    "title": "정규화에 대한 틀린 보기는?",
    "options": [
      "정규화는 데이터의 중복성과 유연성을 최소화하기 위해 사용된다",
      "정규화를 하면 독립성이 향상된다",
      "정규형에는 1정규형, 2정규형, 3정규형, BCNF 정규형이 있다",
      "어떤 조건은 1정규형을 만족한다"
    ],
    "correctIndex": 0,
    "explanation": "정규화는 중복성을 줄이고 데이터 무결성을 높이기 위해 사용. 유연성 최소화는 틀린 표현",
    "_source": "pdf"
  },
  {
    "id": 10071,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 12,
    "title": "정규표현식 '^010'으로 시작하는 결과 테이블에서 맞는 것은?",
    "options": [
      "[^010]으로 시작하는 것",
      "'^010'으로 시작하는 것",
      "010이 포함된 것",
      "02로 시작하는 것"
    ],
    "correctIndex": 1,
    "explanation": "^은 문자열 시작을 의미. ^010은 010으로 시작하는 문자열",
    "_source": "pdf"
  },
  {
    "id": 10072,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 13,
    "title": "REGEXP_LIKE 문제에서 첫 번째 인수 'B\\\\d', 두 번째 인수 'b.d'의 결과는?",
    "options": [
      "BCD, BCD",
      "BCD, BCD",
      "BCD, NULL",
      "NULL, BCD"
    ],
    "correctIndex": 2,
    "explanation": "B\\\\d: 대문자B + 숫자 → 'BCD'에서 숫자 없으면 NULL. b.d: 소문자b + 임의문자 + d",
    "_source": "pdf"
  },
  {
    "id": 10073,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 14,
    "title": "집합연산자에 대한 설명 중 틀린 것은?",
    "options": [
      "상호호환되는 경우에도 무조건 데이터타입을 일치시켜야 한다",
      "두 SELECT의 컬럼 수가 같아야 한다",
      "UNION은 중복을 제거한다",
      "ORDER BY는 마지막 SELECT에 사용"
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10074,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 15,
    "title": "CTAS(CREATE TABLE AS SELECT)로 틀린 것은?",
    "options": [
      "데이터 속성은 재정의 해야한다",
      "NOT NULL은 전달되지 않는다",
      "기본키, 외래키 등 제약사항은 전달되지 않는다",
      "컬럼 타입은 전달되지 않는다"
    ],
    "correctIndex": 0,
    "explanation": "CTAS: 컬럼 타입은 복사, NOT NULL도 복사되지 않음(일부 DB는 복사), PK/FK 미복사",
    "_source": "pdf"
  },
  {
    "id": 10075,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 16,
    "title": "다음 중 입력 오류가 발생하는 경우는?",
    "options": [
      "INSERT INTO TABLE1 VALUES(1, 20240606)",
      "INSERT INTO TABLE1(col1) VALUES(1)",
      "INSERT INTO TABLE1 SELECT * FROM TABLE2",
      "INSERT INTO TABLE1 VALUES(1, 20240606, '001')"
    ],
    "correctIndex": 3,
    "explanation": "컬럼 수와 값의 수가 일치하지 않으면 오류",
    "_source": "pdf"
  },
  {
    "id": 10076,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 17,
    "title": "총 주문 금액을 구하는 윈도우 함수에서 올바른 윈도우 절은?",
    "options": [
      "SUM() OVER()",
      "SUM() OVER(PARTITION BY)",
      "SUM() OVER(ORDER BY ... ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)",
      "SUM() OVER(ORDER BY ... RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)"
    ],
    "correctIndex": 3,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10077,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 18,
    "title": "2025년 10월 20일 관련 문제 중 틀린 것은?",
    "options": [
      "TO_DATE 함수로 날짜 변환 가능",
      "+ 0.0009 연산으로 날짜 이동",
      "BETWEEN이 20일 AND 21일",
      "날짜 - 1은 전날을 의미"
    ],
    "correctIndex": 2,
    "explanation": "BETWEEN 날짜1 AND 날짜2 에서 21일을 포함하는 것은 잘못된 조건일 수 있음",
    "_source": "pdf"
  },
  {
    "id": 10078,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 19,
    "title": "SQL 실행 결과로 옳은 것은? (조건절 관련)",
    "options": [
      "NULL 포함",
      "NULL 제외",
      "0 반환",
      "오류 발생"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10079,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 20,
    "title": "AND/OR 연산 순서에 대한 설명으로 옳은 것은?",
    "options": [
      "AND 먼저 적용",
      "OR 먼저 적용",
      "왼쪽에서 오른쪽 순서",
      "괄호 먼저, 그 다음 OR, 그 다음 AND"
    ],
    "correctIndex": 0,
    "explanation": "SQL 연산자 우선순위: NOT > AND > OR",
    "_source": "pdf"
  },
  {
    "id": 10080,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 21,
    "title": "부서별 max 급여보다 급여가 많은 사원 조회에서 올바른 설명은?",
    "options": [
      "부서가 1개이면 값이 하나이다",
      "부서 수에 따라 오류가 발생할 수 있다",
      "ANY로 바꿔도 동일하다",
      "ALL로 바꿔도 동일하다"
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10081,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 22,
    "title": "다음 보기 중 GROUPING SETS와 동일한 표현으로 옳은 것은?",
    "options": [
      "CUBE((컬럼), SUBSTR())",
      "ROLLUP(컬럼, SUBSTR())",
      "ROLLUP...",
      "GROUPING SETS"
    ],
    "correctIndex": 3,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10082,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 23,
    "title": "다음 ROUND 함수 중 옳은 것은? (가: Round(136.2,-1)=140, 나: Round(-7.532,2)=-7.53, 다: Round(3.56,1)=3.6)",
    "options": [
      "가",
      "나",
      "가, 나",
      "나, 다"
    ],
    "correctIndex": 0,
    "explanation": "Round(136.2,-1)=140(십의자리 반올림). Round(-7.532,2)=-7.53(맞음). Round(3.56,1)=3.6이 맞음",
    "_source": "pdf"
  },
  {
    "id": 10083,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 24,
    "title": "yymmdd 형식에서 월(mm)을 추출하지 않는 문장은? (원본: '202505', 치환 대상: '2025')",
    "options": [
      "EXTRACT(YEAR FROM SYSDATE)",
      "EXTRACT(MONTH FROM 테이블)",
      "SUBSTR(컬럼, 5, 2)",
      "yyddmm, EXTRACT(YEAR FROM 테이블)"
    ],
    "correctIndex": 0,
    "explanation": "EXTRACT(YEAR FROM SYSDATE)는 현재 연도 추출로 월(mm) 추출과 무관",
    "_source": "pdf"
  },
  {
    "id": 10084,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 25,
    "title": "윈도우 함수 결과로 옳은 것은?",
    "options": [
      "숫자 데이터",
      "NULL, 30, 60",
      "60, 60, 30",
      "30, 60, 20"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10085,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 26,
    "title": "테이블 3개와 EXTRACT, UNION ALL, EXCEPT 연산자 사용 결과는?",
    "options": [
      "A, B",
      "A, B, C",
      "A, B, B, C",
      "B, B, C"
    ],
    "correctIndex": 3,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10086,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 27,
    "title": "영화 배우 출연료 문제에서 사용된 서브쿼리 유형은?",
    "options": [
      "단순 서브쿼리",
      "다중행 서브쿼리",
      "다중컬럼 서브쿼리",
      "연관 서브쿼리"
    ],
    "correctIndex": 3,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10087,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 28,
    "title": "SQL 실행 결과로 적절한 것은?",
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
    "id": 10088,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 29,
    "title": "START WITH category_id = 11, CONNECT BY PRIOR category_id = 상위카테고리 역방향 전개 결과는?",
    "options": [
      "2부터 시작",
      "역방향 2부터 시작",
      "11부터 시작",
      "역방향 11부터 시작"
    ],
    "correctIndex": 3,
    "explanation": "START WITH 11이므로 11부터 시작, PRIOR 위치에 따라 역방향(자식→부모)",
    "_source": "pdf"
  },
  {
    "id": 10089,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 30,
    "title": "NATURAL JOIN 관련 문제에서 올바르지 않은 것은?",
    "options": [
      "자동으로 같은 이름 컬럼으로 조인한다",
      "비등가 조인도 가능하다",
      "NATURAL JOIN에 USING절 사용 불가",
      "별칭 사용 불가"
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10090,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 31,
    "title": "TCL에서 올바른 것은? (가: 묵시적 COMMIT, 나: 논리 단위는 트랜잭션)",
    "options": [
      "가",
      "나",
      "나, 다",
      "가, 나"
    ],
    "correctIndex": 3,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10091,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 32,
    "title": "HAVING COUNT(배송일자) >= 2 조건의 결과는?",
    "options": [
      "전체 그룹",
      "2, 3",
      "1, 3",
      "4, 3"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10092,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 33,
    "title": "SQL 실행 결과로 옳은 것은?",
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
    "id": 10093,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 34,
    "title": "GROUP BY와 HAVING 조건에서 결과는?",
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
    "id": 10094,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 35,
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
    "id": 10095,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 36,
    "title": "서브쿼리 결과는?",
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
    "id": 10096,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 37,
    "title": "MAX, SUM, FIRST_VALUE, 누적값 관련 문제 (Col1: max, Col2: sum, Col3: 앞뒤 200값) 결과는?",
    "options": [
      "100, 200, 300, 400, 100, 200",
      "100, 100, 100, 200, 300, 400",
      "100, 100, 100, 200, 300, 400 / 누적합",
      "100, 100, 100, 100, 100, 100"
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "pdf"
  },
  {
    "id": 10097,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 38,
    "title": "JOIN 조건 결과는?",
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
    "id": 10098,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 39,
    "title": "SQL 실행 결과는?",
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
    "id": 10099,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 40,
    "title": "WHERE 1=0 조건의 결과는?",
    "options": [
      "전체 데이터 반환",
      "1=2 오류",
      "1 반환",
      "공집합"
    ],
    "correctIndex": 3,
    "explanation": "WHERE 1=0은 항상 거짓이므로 결과 없음(공집합). 1=2도 거짓이지만 문법 오류는 아님",
    "_source": "pdf"
  }
];
