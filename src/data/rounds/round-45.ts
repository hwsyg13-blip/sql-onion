// Auto-generated from PDF + blog + scripts/authored/round-45.json
// 제45회 — 2022년 5월 · 50문항
// ⚠ 직접 편집 금지. 출처별 데이터를 고친 뒤 'node scripts/build-quiz-bank.mjs' 재실행.
import type { QuizQuestion } from '../quizBank';

export const ROUND_45: QuizQuestion[] = [
  {
    "id": 10750,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "1과목",
    "number": 1,
    "title": "데이터 모델링 시 유의점으로 적절하지 않은 것은?",
    "options": [
      "중복(Duplication) 발생을 방지한다.",
      "비유연성(Inflexibility)에 대한 고려를 통해 데이터 모델이 업무 변화에 유연하게 대응하도록 한다.",
      "비일관성(Inconsistency)이 발생하지 않도록 데이터 간 상호 연관 관계를 명확히 정의한다.",
      "성능 향상을 위해 초기 설계 단계부터 반정규화를 적극적으로 수행한다."
    ],
    "correctIndex": 3,
    "explanation": "데이터 모델링의 유의점은 중복·비유연성·비일관성 회피이며, 성능 반정규화는 물리 모델 단계에서 필요에 따라 수행하는 기법일 뿐 데이터 모델링 자체의 유의점이 아니다.",
    "_source": "authored"
  },
  {
    "id": 10751,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "1과목",
    "number": 2,
    "title": "아래 설명을 참고할 때, 속성에 대한 설명으로 가장 적절하지 않은 것은?",
    "options": [
      "예금분류는 코드 엔터티를 별도로 구분하고, 값에는 코드값만 포함한다.",
      "원금, 예치기간은 기본(Basic) 속성이다.",
      "이자와 이자율은 파생(Derived) 속성이다.",
      "예금분류는 설계(Designed) 속성이다."
    ],
    "correctIndex": 2,
    "explanation": "우리은행은 예금분류(일반예금·특별예금 등)의 원금, 예치기간, 이자율을 관리하고자 한다. 또한 원금에 대한 이자율을 적용하여 계산된 이자를 별도 속성으로 관리하며, 일반예금·특별예금 등에 대해서는 코드를 부여(예: 01-일반예금, 02-특별예금)한다. 이자는 원금·이자율·예치기간으로부터 계산되는 파생 속성에 해당하지만, 이자율은 업무상 정의되어 입력되는 값이므로 기본 속성으로 분류된다.",
    "_source": "authored"
  },
  {
    "id": 10752,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "1과목",
    "number": 3,
    "title": "인스턴스에 대한 설명으로 가장 적절하지 않은 것은?",
    "options": [
      "인스턴스는 엔터티의 실질적인 값에 해당한다.",
      "하나의 엔터티는 여러 개의 인스턴스를 포함할 수 있다.",
      "인스턴스는 속성이 없어도 존재할 수 있다.",
      "인스턴스는 각 속성에 대응하는 값의 집합으로 구성된다."
    ],
    "correctIndex": 2,
    "explanation": "인스턴스는 속성과 속성값의 집합으로 구성되므로 속성 없이는 존재할 수 없다.",
    "_source": "authored"
  },
  {
    "id": 10753,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "1과목",
    "number": 4,
    "title": "아래 ERD에 대한 설명으로 가장 적절하지 않은 것은?\n<pre>\n[ 고객 ] ─|─ ─ ─ ─o|─< [ 주문 ]\n</pre>",
    "options": [
      "고객은 주문을 하나도 하지 않을 수 있다.",
      "고객은 여러 건의 주문을 가질 수 있다.",
      "주문은 반드시 한 명의 고객에게 귀속된다.",
      "주문은 고객이 없을 수도 있다."
    ],
    "correctIndex": 3,
    "explanation": "바커(Barker) 표기법 해석 * 고객 쪽(실선 + `|`): 주문 입장에서 고객은 반드시 하나 존재 * 중간 점선(`- - -`) + 주문 쪽 `o`: 고객 입장에서 주문 참여는 선택적(0개 가능) * 주문 쪽 `|<`(까마귀발): 고객은 여러 주문을 가질 수 있음 고객 쪽 참여는 실선 + `|`(필수 1)이므로 모든 주문은 반드시 한 명의 고객에 귀속되어야 한다. 반면 주문 쪽은 점선 + `o`(선택)이므로 고객은 주문이 없을 수도 있다.",
    "_source": "authored"
  },
  {
    "id": 10754,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "1과목",
    "number": 5,
    "title": "부모 엔터티로부터 속성을 상속받았지만 자식 엔터티의 주식별자로 사용하지 않고 일반 속성으로만 사용하는 경우에 해당하지 않는 것은?",
    "options": [
      "자식 엔터티에서 받은 속성이 반드시 필수가 아니어도 무방하여, 부모 없는 자식 인스턴스가 존재할 수 있을 때",
      "엔터티별로 데이터의 생명주기(Data Life Cycle)를 다르게 관리할 경우",
      "여러 엔터티가 하나로 통합되어 표현되었으나, 각 엔터티가 별도의 관계를 가질 때",
      "부모 엔터티와 자식 엔터티의 Data Life Cycle이 같을 때"
    ],
    "correctIndex": 3,
    "explanation": "Data Life Cycle이 동일할 경우에는 부모의 식별자를 자식의 주식별자로 그대로 상속받아 식별자 관계를 구성하는 것이 자연스럽다.",
    "_source": "authored"
  },
  {
    "id": 10755,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "1과목",
    "number": 6,
    "title": "모델링의 단계 중 재사용성이 가장 높은 모델링은?",
    "options": [
      "개념적 데이터 모델링",
      "논리적 데이터 모델링",
      "물리적 데이터 모델링",
      "운영 데이터 모델링"
    ],
    "correctIndex": 1,
    "explanation": "논리적 데이터 모델링은 구축 대상 업무의 키·속성·관계를 정규화를 통해 정확하게 표현하므로, 데이터베이스 엔진·플랫폼과 무관하게 재사용성이 높다.",
    "_source": "authored"
  },
  {
    "id": 10756,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "1과목",
    "number": 7,
    "title": "아래 속성 예시 중 파생(Derived) 속성으로만 구성된 것은?",
    "options": [
      "회원번호, 이름, 주소",
      "상품코드, 단가, 상품명",
      "주문번호, 주문일자, 상품코드",
      "최초주문일자, 주문금액, 총주문금액"
    ],
    "correctIndex": 3,
    "explanation": "파생 속성은 다른 속성으로부터 계산되거나 집계되어 도출되는 속성이다. 최초주문일자는 주문 내역에서 MIN으로, 주문금액은 단가 × 수량으로, 총주문금액은 주문금액의 합계로 도출된다.",
    "_source": "authored"
  },
  {
    "id": 10757,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "1과목",
    "number": 8,
    "title": "엔터티 간 관계에서 1:1, 1:M과 같이 관계의 기수성을 나타내는 개념은?",
    "options": [
      "관계명(Relationship Membership)",
      "관계차수(Relationship Degree / Cardinality)",
      "관계선택사양(Relationship Optionality)",
      "관계정의(Relationship Definition)"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10758,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "1과목",
    "number": 9,
    "title": "업무에서 필요로 하는 인스턴스로 관리하고자 하는, 의미상 더 이상 분리되지 않는 최소의 데이터 단위는 무엇인가?",
    "options": [
      "엔터티(Entity)",
      "속성(Attribute)",
      "도메인(Domain)",
      "식별자(Identifier)"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10759,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "1과목",
    "number": 10,
    "title": "기본키가 아닌 모든 속성이 기본키에 완전 함수 종속된 상태를 무엇이라 하는가?",
    "options": [
      "제1정규형",
      "BCNF",
      "제2정규형",
      "제3정규형"
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10760,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 11,
    "title": "테이블에 새로운 행 데이터를 입력할 때 사용하는 DML 명령어는?",
    "options": [
      "SELECT",
      "INSERT",
      "UPDATE",
      "DELETE"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10761,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 12,
    "title": "아래 네 SQL 중 수행 결과가 나머지와 다른 것은?\n```sql\n-- ① SELECT CEIL(22.14)  FROM DUAL;\n-- ② SELECT FLOOR(22.14) FROM DUAL;\n-- ③ SELECT TRUNC(22.14) FROM DUAL;\n-- ④ SELECT ROUND(22.14) FROM DUAL;\n```",
    "options": [
      "CEIL(22.14)",
      "FLOOR(22.14)",
      "TRUNC(22.14)",
      "ROUND(22.14)"
    ],
    "correctIndex": 0,
    "explanation": "CEIL은 정수부를 올림하므로 23을 반환한다. FLOOR·TRUNC·ROUND(22.14)는 모두 22를 반환한다.",
    "_source": "authored"
  },
  {
    "id": 10762,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 13,
    "title": "선수 테이블에서 손흥민 선수가 소속된 팀의 모든 선수 포지션을 'FW'로 변경하는 SQL로 올바른 것은?\n<table border=\"1\">\n<tr><th>선수번호</th><th>이름</th><th>팀ID</th><th>포지션</th></tr>\n<tr><td>1</td><td>손흥민</td><td>TOT</td><td>FW</td></tr>\n<tr><td>2</td><td>다이어</td><td>TOT</td><td>DF</td></tr>\n<tr><td>3</td><td>메시</td><td>PSG</td><td>FW</td></tr>\n</table>",
    "options": [
      "UPDATE 선수 SET 포지션 = 'FW' WHERE 이름 = '손흥민';",
      "UPDATE 선수 SET 팀ID = 'FW' WHERE 이름 = '손흥민';",
      "UPDATE 선수 SET 포지션 = 'FW' WHERE 팀ID = '손흥민';",
      "UPDATE 선수 SET 포지션 = 'FW' WHERE 팀ID = (SELECT 팀ID FROM 선수 WHERE 이름 = '손흥민');"
    ],
    "correctIndex": 3,
    "explanation": "손흥민이 속한 팀의 팀ID를 서브쿼리로 조회하여, 해당 팀의 모든 선수의 포지션을 일괄 변경한다.",
    "_source": "authored"
  },
  {
    "id": 10763,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 14,
    "title": "SNS별 추천점수를 집계하여 추출하는 함수로 올바른 것은?\n<table border=\"1\">\n<tr><th>SNS</th><th>사용자</th><th>추천점수</th></tr>\n<tr><td>FB</td><td>A</td><td>5</td></tr>\n<tr><td>FB</td><td>B</td><td>4</td></tr>\n<tr><td>IG</td><td>C</td><td>3</td></tr>\n</table>",
    "options": [
      "SELECT SUM(추천점수) FROM SNS_LOG;",
      "SELECT 추천점수 FROM SNS_LOG GROUP BY SNS;",
      "SELECT SNS, SUM(추천점수) FROM SNS_LOG GROUP BY SNS;",
      "SELECT SNS, 추천점수 FROM SNS_LOG ORDER BY SNS;"
    ],
    "correctIndex": 2,
    "explanation": "SNS별 합계를 구해야 하므로 GROUP BY SNS와 집계함수 SUM을 함께 사용한다.",
    "_source": "authored"
  },
  {
    "id": 10764,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 15,
    "title": "데이터 무결성을 지키기 위한 방법과 관계가 없는 것은?",
    "options": [
      "애플리케이션의 로직",
      "Trigger",
      "Lock",
      "Constraints"
    ],
    "correctIndex": 2,
    "explanation": "Lock·Unlock은 동시 접근 시의 병행성(동시성) 제어 기법이며, 데이터 무결성과는 직접적인 관련이 없다. 무결성은 제약조건, 트리거, 애플리케이션 로직 등으로 보장한다.",
    "_source": "authored"
  },
  {
    "id": 10765,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 16,
    "title": "집합 A = {1, 2, 3, 4}, B = {3, 4, 5, 6}일 때 결과가 C = {3, 4}가 되는 연산은?",
    "options": [
      "Union (합집합)",
      "Difference (차집합)",
      "Intersection (교집합)",
      "Product (곱집합)"
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10766,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 17,
    "title": "CTAS(CREATE TABLE AS SELECT) 방식으로 테이블을 복제할 때의 특징으로 적절하지 않은 것은?",
    "options": [
      "원본 테이블의 데이터를 함께 복제할 수 있다.",
      "원본 테이블의 모든 제약조건을 그대로 가져온다.",
      "컬럼의 데이터 타입을 그대로 승계한다.",
      "WHERE 1=2 와 함께 사용하면 구조만 복제할 수 있다."
    ],
    "correctIndex": 1,
    "explanation": "CTAS는 NOT NULL 제약조건만 상속되며, PRIMARY KEY·UNIQUE·FOREIGN KEY·CHECK 등은 복제되지 않는다.",
    "_source": "authored"
  },
  {
    "id": 10767,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 18,
    "title": "윈도우 함수 중 정렬된 파티션에서 가장 첫 번째 값을 반환하는 함수는?",
    "options": [
      "FIRST_VALUE",
      "LAST_VALUE",
      "LAG",
      "LEAD"
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10768,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 19,
    "title": "직급 인원이 9명 이상인 직급 중 나이가 가장 많은 직원의 이름을 조회하는 SQL로 올바른 것은?",
    "options": [
      "SELECT 이름 FROM EMP WHERE COUNT(*) >= 9 GROUP BY 직급;",
      "SELECT 이름 FROM EMP GROUP BY 직급 HAVING COUNT(*) >= 9 ORDER BY 나이 DESC;",
      "SELECT 이름 FROM EMP WHERE 직급 IN (SELECT 직급 FROM EMP GROUP BY 직급 HAVING COUNT(*) >= 9) ORDER BY 나이 DESC FETCH FIRST 1 ROWS ONLY;",
      "SELECT 이름 FROM EMP GROUP BY 직급 HAVING 나이 = MAX(나이);"
    ],
    "correctIndex": 2,
    "explanation": "HAVING COUNT(*) >= 9 조건으로 9명 이상 직급을 먼저 추출하고, 해당 직급 직원 중 나이가 가장 많은 사람을 반환한다.",
    "_source": "authored"
  },
  {
    "id": 10769,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 20,
    "title": "아래 트랜잭션이 수행된 후 실제로 반영되는 INSERT 명령의 조합은?\n```sql\nINSERT 1 ...\nSAVEPOINT A;\nINSERT 2 ...\nDELETE  3 ...\nROLLBACK TO SAVEPOINT A;\nINSERT 4 ...\nINSERT 5 ...\nCOMMIT;\n```",
    "options": [
      "(1, 2, 3, 4, 5)",
      "(1, 2, 4, 5)",
      "(4, 5)",
      "(1, 4, 5)"
    ],
    "correctIndex": 3,
    "explanation": "SAVEPOINT A로 되돌리면 A 이후 수행된 INSERT 2, DELETE 3이 모두 취소되고, 이후 수행된 INSERT 4, 5가 COMMIT으로 확정된다.",
    "_source": "authored"
  },
  {
    "id": 10770,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 21,
    "title": "ROLLUP, CUBE, GROUPING SETS 등 소계·총계 생성용 GROUP BY 확장 함수를 통칭하는 용어는?",
    "options": [
      "Aggregation",
      "Partition",
      "Grouping",
      "Windowing"
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10771,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 22,
    "title": "아래 네 SUBSTR 결과 중 다른 것은?\n```sql\n-- ① SELECT SUBSTR('DATABASE', 7)       FROM DUAL;\n-- ② SELECT SUBSTR('DATABASE', -2)      FROM DUAL;\n-- ③ SELECT SUBSTR('DATABASE', 8, -2)   FROM DUAL;\n-- ④ SELECT SUBSTR('DATABASE', INSTR('DATABASE','S'), 2) FROM DUAL;\n```",
    "options": [
      "'SE'",
      "'SE'",
      "빈 문자열 또는 한 글자",
      "'SE'"
    ],
    "correctIndex": 2,
    "explanation": "SUBSTR의 세 번째 인자(길이)가 음수이면 유효한 결과가 산출되지 않아 NULL 또는 빈 문자열을 반환한다. 나머지는 모두 'SE'를 반환한다.",
    "_source": "authored"
  },
  {
    "id": 10772,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 23,
    "title": "아래 결과를 얻기 위해 A 테이블과 B 테이블에 적용할 조건절로 올바른 것은?\n<table border=\"1\">\n<tr><th>[T1]</th><th></th></tr>\n<tr><td>COL1</td><td>COL2</td></tr>\n<tr><td>1</td><td>10</td></tr>\n<tr><td>2</td><td>20</td></tr>\n<tr><td>3</td><td>30</td></tr>\n</table>\n<table border=\"1\">\n<tr><th>[T2]</th><th></th></tr>\n<tr><td>COL1</td><td>COL2</td></tr>\n<tr><td>1</td><td>10</td></tr>\n<tr><td>2</td><td>20</td></tr>\n</table>\n```sql\nSELECT COL1\nFROM   T1 A\nWHERE  (  ㄱ  );\n```",
    "options": [
      "NOT EXISTS (SELECT 1 FROM T2 B WHERE B.COL1 = A.COL1)",
      "EXISTS (SELECT 1 FROM T2 B WHERE B.COL1 = A.COL1)",
      "COL1 IN (SELECT COL1 FROM T2)",
      "COL1 > (SELECT MAX(COL1) FROM T2)"
    ],
    "correctIndex": 0,
    "explanation": "기대 결과: COL1 = 3 T1에만 존재하고 T2에는 존재하지 않는 COL1 값을 추출하려면 상관 서브쿼리와 NOT EXISTS를 조합한다.",
    "_source": "authored"
  },
  {
    "id": 10773,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 24,
    "title": "5개의 테이블이 결합될 때 필요한 최소 조인의 수는?",
    "options": [
      "3",
      "4",
      "5",
      "10"
    ],
    "correctIndex": 1,
    "explanation": "N개의 테이블을 모두 연결하기 위한 최소 조인의 수는 N-1이다. 5-1 = 4.",
    "_source": "authored"
  },
  {
    "id": 10774,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 25,
    "title": "아래 결과를 얻기 위한 GROUP BY 절로 적절하지 않은 것은?",
    "options": [
      "GROUP BY ROLLUP(A, B)",
      "GROUP BY GROUPING SETS( (A), (A, B), () )",
      "GROUP BY A, B UNION ALL GROUP BY A UNION ALL GROUP BY ()",
      "GROUP BY GROUPING SETS( (A), (A, B) )"
    ],
    "correctIndex": 3,
    "explanation": "A 단위 소계와 (A, B) 단위 합계, 그리고 전체 합계가 함께 도출되어야 한다. 이 구성은 A 단위와 (A, B) 단위 집계만 생성하고 전체 합계 그룹을 포함하지 않으므로 기대 결과와 다르다.",
    "_source": "authored"
  },
  {
    "id": 10775,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 26,
    "title": "아래 네 SQL 중 FULL OUTER JOIN의 결과와 다른 것은?",
    "options": [
      "SELECT * FROM A FULL OUTER JOIN B ON A.KEY = B.KEY;",
      "SELECT * FROM A FULL JOIN B ON A.KEY = B.KEY;",
      "(A LEFT OUTER JOIN B) UNION (A RIGHT OUTER JOIN B)",
      "(A LEFT OUTER JOIN B) UNION ALL (A RIGHT OUTER JOIN B)"
    ],
    "correctIndex": 3,
    "explanation": "UNION ALL은 중복을 제거하지 않아 교집합 부분이 두 번 반환되므로, 중복을 제거하는 FULL OUTER JOIN과 결과가 다르다.",
    "_source": "authored"
  },
  {
    "id": 10776,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 27,
    "title": "주문 테이블에서 특정 기간 고객의 주문금액을 구하되, 현재 고객 테이블에 존재하는 고객 데이터만으로 집계하려 한다. 동일 기간의 주문 금액 합계를 구하는 SQL로 가장 적절한 것은?",
    "options": [
      "SELECT C.고객ID, SUM(O.금액) FROM 고객 C, 주문 O WHERE O.주문일 BETWEEN :시작 AND :종료 GROUP BY C.고객ID;",
      "SELECT C.고객ID, SUM(O.금액) FROM 주문 O, 고객 C WHERE C.고객ID = O.고객ID(+) GROUP BY C.고객ID;",
      "SELECT C.고객ID, (SELECT SUM(금액) FROM 주문 WHERE 고객ID = C.고객ID) FROM 고객 C;",
      "SELECT C.고객ID, SUM(O.금액) FROM 고객 C LEFT OUTER JOIN 주문 O ON C.고객ID = O.고객ID AND O.주문일 BETWEEN :시작 AND :종료 GROUP BY C.고객ID;"
    ],
    "correctIndex": 3,
    "explanation": "현재 고객 전체를 기준으로 주문을 결합하되 기간 필터를 ON 절에 두어야 주문이 없는 고객도 누락되지 않고, 기간 제약이 조인 이후 WHERE 필터로 동작해 결과를 왜곡하지 않는다.",
    "_source": "authored"
  },
  {
    "id": 10777,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 28,
    "title": "아래 테이블에 대한 INSERT 구문 수행 시 오류가 발생하지 않는 것은?\n```sql\nCREATE TABLE T1 (\n  C1 NUMBER PRIMARY KEY,\n  C2 NUMBER NOT NULL,\n  C3 NUMBER UNIQUE,\n  C4 NUMBER CHECK (C4 IS NOT NULL)\n);\n```",
    "options": [
      "INSERT INTO T1 VALUES (NULL, 1,    2,    3);",
      "INSERT INTO T1 VALUES (1,    NULL, 2,    3);",
      "INSERT INTO T1 VALUES (1,    2,    NULL, 3);",
      "INSERT INTO T1 VALUES (1,    2,    3,    NULL);"
    ],
    "correctIndex": 2,
    "explanation": "UNIQUE 제약은 NULL을 허용하므로 C3에 NULL이 입력되어도 오류가 발생하지 않는다. 나머지는 각각 PK/NOT NULL/CHECK 제약에 위배된다.",
    "_source": "authored"
  },
  {
    "id": 10778,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 29,
    "title": "아래 테이블에 대한 AVG(NVL(C1, 0)) 연산의 결과로 옳은 것은?\n<table border=\"1\">\n<tr><th>C1</th></tr>\n<tr><td>10</td></tr>\n<tr><td>20</td></tr>\n<tr><td>NULL</td></tr>\n</table>\n```sql\nSELECT AVG(NVL(C1, 0)) FROM T;\n```",
    "options": [
      "10",
      "15",
      "20",
      "NULL"
    ],
    "correctIndex": 0,
    "explanation": "NVL로 NULL을 0으로 치환하면 대상은 {10, 20, 0}이 되고, 분모도 3이 되어 (10+20+0)/3 = 10이다.",
    "_source": "authored"
  },
  {
    "id": 10779,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 30,
    "title": "아래 다중 테이블 INSERT FIRST 결과의 행 수 (TABLE1, TABLE2, TABLE3)로 옳은 것은?\n<table border=\"1\">\n<tr><th>[TABLE0]</th></tr>\n<tr><td>N1</td></tr>\n<tr><td>1</td></tr>\n<tr><td>2</td></tr>\n<tr><td>5</td></tr>\n</table>\n```sql\nINSERT FIRST\n       WHEN N1 >= 2 THEN INTO TABLE1(N1) VALUES (N1)\n       WHEN N1 >= 3 THEN INTO TABLE2(N1) VALUES (N1)\n       ELSE                INTO TABLE3    VALUES (N1)\nSELECT N1 FROM TABLE0;\n```",
    "options": [
      "(3, 1, 0)",
      "(2, 1, 0)",
      "(2, 0, 1)",
      "(1, 1, 1)"
    ],
    "correctIndex": 2,
    "explanation": "INSERT FIRST는 먼저 만족한 WHEN 절로만 분기한다. N1=1은 ELSE(TABLE3), N1=2와 N1=5는 첫 WHEN(TABLE1)으로 이동하므로 TABLE1=2, TABLE2=0, TABLE3=1이다.",
    "_source": "authored"
  },
  {
    "id": 10780,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 31,
    "title": "아래 SQL의 결과 행 수로 옳은 것은? (T1, T2, T3, T4의 공통 키 값이 1 하나만 존재)\n```sql\nSELECT *\nFROM   T1, T2, T3, T4\nWHERE  T2.COL1(+) = T1.COL1\nAND    T3.COL1(+) = T2.COL1\nAND    T4.COL1    = T3.COL1;\n```",
    "options": [
      "1",
      "2",
      "3",
      "0"
    ],
    "correctIndex": 0,
    "explanation": "LEFT OUTER JOIN → LEFT OUTER JOIN 이후 마지막이 INNER JOIN이면 INNER JOIN의 결과만 남아 공통 키를 가진 행 1건만 반환된다.",
    "_source": "authored"
  },
  {
    "id": 10781,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 32,
    "title": "아래 네 SQL 중 반환 행 수가 1건이 아닌 것은?",
    "options": [
      "WHERE ROWNUM = 1",
      "WHERE ROWNUM < 2",
      "WHERE ROWNUM <= 2",
      "WHERE ROWNUM <= 2 - 1"
    ],
    "correctIndex": 2,
    "explanation": "ROWNUM <= 2는 2건을 반환한다. 나머지는 모두 1건을 반환한다.",
    "_source": "authored"
  },
  {
    "id": 10782,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 33,
    "title": "NOT IN 절의 서브쿼리 결과에 NULL이 포함될 때 아래 SQL의 결과로 옳은 것은?\n```sql\nSELECT *\nFROM   T1 A\nWHERE  A.N1 NOT IN (SELECT B.N1 FROM T3 B);\n```",
    "options": [
      "T1의 모든 행",
      "T3에 없는 A.N1에 해당하는 행",
      "0건",
      "오류 발생"
    ],
    "correctIndex": 2,
    "explanation": "NOT IN 목록에 NULL이 포함되면 A.N1 <> NULL 평가가 UNKNOWN이 되어 조건이 참으로 평가되는 행이 없으므로 결과가 0건이다.",
    "_source": "authored"
  },
  {
    "id": 10783,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 34,
    "title": "아래 두 SQL의 결과에 대한 설명으로 옳은 것은? (NULL 처리 차이)\n```sql\n-- ① SELECT SUM( NVL(COL1, 0) + NVL(COL2, 0) ) FROM T;\n-- ② SELECT NVL( SUM(COL1 + COL2), 0 )        FROM T;\n```",
    "options": [
      "두 SQL의 결과는 항상 동일하다.",
      "①은 NULL을 0으로 개별 치환 후 합하므로 모든 행이 반영되지만, ②는 COL1 또는 COL2가 NULL인 행은 NULL이 되어 SUM에서 제외된다.",
      "②가 ①보다 항상 큰 값을 반환한다.",
      "①이 ②보다 항상 작은 값을 반환한다."
    ],
    "correctIndex": 1,
    "explanation": "NULL과의 산술 연산은 NULL을 반환한다. 따라서 ②는 NULL 행이 합계에서 제외되어 ①과 결과가 달라질 수 있다.",
    "_source": "authored"
  },
  {
    "id": 10784,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 35,
    "title": "아래 테이블과 네 SQL 중 결과가 다른 것은?\n<table border=\"1\">\n<tr><th>COL1</th><th>COL2</th></tr>\n<tr><td>A</td><td>a</td></tr>\n<tr><td>B</td><td>b</td></tr>\n<tr><td>C</td><td>c</td></tr>\n</table>\n```sql\n-- ① SELECT COL1 FROM T WHERE COL1 IN ('A','B') OR COL2 <> 'c';\n-- ② SELECT COL1 FROM T WHERE COL1 IN ('A','B')\n--    UNION ALL\n--    SELECT COL1 FROM T WHERE COL2 <> 'c';\n-- ③ SELECT COL1 FROM T WHERE COL1 IN ('A','B')\n--    UNION\n--    SELECT COL1 FROM T WHERE COL2 <> 'c';\n-- ④ SELECT COL1 FROM T WHERE COL1 = 'A' OR COL1 = 'B' OR COL2 <> 'c';\n```",
    "options": [
      "①과 ④ (두 결과 모두 {A, B})",
      "UNION ALL 사용 SQL",
      "UNION 사용 SQL",
      "OR 조건 SQL"
    ],
    "correctIndex": 1,
    "explanation": "UNION ALL은 중복을 제거하지 않아 A, B가 두 쿼리에서 모두 추출되어 A, B, A, B로 출력된다. 나머지는 중복이 제거된다.",
    "_source": "authored"
  },
  {
    "id": 10785,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 36,
    "title": "아래 네 SQL 중 결과가 다른 것은? (괄호 우선순위 문제)\n```sql\n-- ① SELECT * FROM SQLD49 WHERE V1 = 'A' AND V2 IN ('T1','T2','T3');\n-- ② SELECT * FROM SQLD49 WHERE V1 = 'A' AND V2 = 'T1' OR V2 = 'T2' OR V2 = 'T3';\n-- ③ SELECT * FROM SQLD49 WHERE (V1, V2) IN (('A','T1'), ('A','T2'), ('A','T3'));\n-- ④ SELECT * FROM SQLD49 WHERE V1 = 'A' AND (V2 = 'T1' OR V2 = 'T2' OR V2 = 'T3');\n```",
    "options": [
      "①",
      "②",
      "③",
      "④"
    ],
    "correctIndex": 1,
    "explanation": "②는 AND가 OR보다 우선순위가 높아 \"(V1='A' AND V2='T1') OR V2='T2' OR V2='T3'\"로 해석되므로 V1이 'A'가 아닌 행도 포함된다. 나머지는 V1='A'인 행만 대상으로 한다.",
    "_source": "authored"
  },
  {
    "id": 10786,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 37,
    "title": "수강, 학생, 과목 테이블에서 특정 과목의 학점이 4.0 이상인 학생의 이름을 구하는 SQL로 올바른 것은?\n<pre>\n[수강]        [학생]        [과목]\n학번          이름          과목명\n과목          학번\n학점\n</pre>",
    "options": [
      "SELECT 이름 FROM 수강, 학생 WHERE 수강.학번 = 학생.학번 GROUP BY 이름 HAVING MAX(학점) > 4;",
      "SELECT 이름 FROM 수강, 학생 WHERE 수강.학번 = 학생.학번 GROUP BY 학번, 이름 HAVING MAX(학점) > 4;",
      "SELECT 이름 FROM 수강, 학생 WHERE 수강.학번 = 학생.학번 AND 학점 > 4;",
      "SELECT 이름 FROM 수강 GROUP BY 학번 HAVING MAX(학점) > 4;"
    ],
    "correctIndex": 1,
    "explanation": "이름이 중복될 수 있어 그룹 기준으로 이름만 사용하면 유일성이 보장되지 않는다. 학번과 이름을 함께 GROUP BY에 포함해야 학생 단위로 유일하게 구분된다.",
    "_source": "authored"
  },
  {
    "id": 10787,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 38,
    "title": "아래 SQL의 결과로 옳은 것은?\n```sql\nSELECT N1\nFROM   SQLD\nWHERE  1 = 2;\n```",
    "options": [
      "모든 행이 반환된다.",
      "NULL이 반환된다.",
      "결과가 없다(0건).",
      "오류가 발생한다."
    ],
    "correctIndex": 2,
    "explanation": "WHERE 1=2는 항상 거짓이므로 선택되는 행이 없다.",
    "_source": "authored"
  },
  {
    "id": 10788,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 39,
    "title": "WHERE 절에 사용된 서브쿼리에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "서브쿼리는 메인쿼리의 조건을 판별하는 용도로 사용된다.",
      "단일 행 서브쿼리와 다중 행 서브쿼리가 있다.",
      "상관 서브쿼리는 메인쿼리의 컬럼을 참조할 수 있다.",
      "메인쿼리와 서브쿼리가 있을 때 최종 결과는 항상 서브쿼리의 결과를 따른다."
    ],
    "correctIndex": 3,
    "explanation": "WHERE 절 서브쿼리는 메인쿼리 행의 필터 조건으로 사용될 뿐, FROM 절 인라인 뷰가 아닌 한 서브쿼리가 최종 결과를 결정하지 않는다.",
    "_source": "authored"
  },
  {
    "id": 10789,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 40,
    "title": "아래 SQL의 결과 행 수로 옳은 것은? (LEFT OUTER JOIN의 ON 조건과 WHERE 조건 차이)\n<table border=\"1\">\n<tr><th>[T1]</th><th></th></tr>\n<tr><td>ID</td><td>NAME</td></tr>\n<tr><td>1</td><td>A</td></tr>\n<tr><td>2</td><td>B</td></tr>\n</table>\n<table border=\"1\">\n<tr><th>[T2]</th><th></th></tr>\n<tr><td>ID</td><td>TYPE</td></tr>\n<tr><td>1</td><td>X</td></tr>\n<tr><td>2</td><td>Y</td></tr>\n</table>\n```sql\nSELECT T1.ID, T1.NAME, T2.TYPE\nFROM   T1 LEFT OUTER JOIN T2\nON     T1.ID = T2.ID AND T2.TYPE = 'X'\nWHERE  T2.TYPE = 'X';\n```",
    "options": [
      "0건",
      "1건",
      "2건",
      "오류 발생"
    ],
    "correctIndex": 1,
    "explanation": "ON 절의 T2.TYPE='X' 조건이 조인 단계에서 필터링되어 T1.ID=1 행만 매칭되고, 매칭되지 않은 행은 T2.TYPE이 NULL로 남는다. 이후 WHERE T2.TYPE='X' 필터가 적용되어 최종적으로 1건이 반환된다.",
    "_source": "authored"
  },
  {
    "id": 10790,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 41,
    "title": "아래 SQL의 실행 계획 단계로 가장 적절한 것은?\n```sql\nSELECT /*+ INDEX(E EMP_DEPT_IDX) */ E.*\nFROM   EMP E\nWHERE  E.DEPT_NO = 10;\n```",
    "options": [
      "TABLE ACCESS FULL → SORT",
      "INDEX RANGE SCAN → TABLE ACCESS BY INDEX ROWID",
      "HASH JOIN → NESTED LOOPS",
      "TABLE ACCESS FULL → HASH JOIN"
    ],
    "correctIndex": 1,
    "explanation": "힌트에 지정된 인덱스를 사용해 조건에 해당하는 ROWID를 수집한 후, 테이블에 ROWID로 접근하여 컬럼 값을 읽는다.",
    "_source": "authored"
  },
  {
    "id": 10791,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 42,
    "title": "아래 SQL이 나타내는 개념으로 가장 적절한 것은?\n```sql\nSELECT 부서, 직급, AVG(급여)\nFROM   EMP\nGROUP BY CUBE(부서, 직급);\n```",
    "options": [
      "(부서), (직급), () 그룹별 소계와 전체 합계만 생성한다.",
      "(부서, 직급), (부서), (직급), () 네 그룹 조합의 집계를 생성한다.",
      "(부서, 직급) 단위 집계만 생성하고 소계는 생성하지 않는다.",
      "지정된 컬럼 순서에 따라 계층적 소계만 생성한다."
    ],
    "correctIndex": 1,
    "explanation": "CUBE는 지정된 모든 컬럼의 가능한 조합에 대해 소계와 총계를 생성한다. ROLLUP은 지정 순서에 따른 계층적 소계만 생성한다는 점에서 구분된다.",
    "_source": "authored"
  },
  {
    "id": 10792,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 43,
    "title": "아래 SQL1과 동일한 결과를 반환하도록 SQL2의 빈칸에 들어갈 조인 방식은?\n```sql\n[SQL1]\nSELECT * FROM A, B;\n[SQL2]\nSELECT * FROM A (  ㄱ  ) B;\n```",
    "options": [
      "CROSS JOIN",
      "INNER JOIN",
      "NATURAL JOIN",
      "FULL OUTER JOIN"
    ],
    "correctIndex": 0,
    "explanation": "콤마로 연결한 FROM A, B 는 조인 조건이 없는 카티션 곱(CROSS JOIN)과 동치이다.",
    "_source": "authored"
  },
  {
    "id": 10793,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 44,
    "title": "아래 계층형 쿼리 결과에서 C3 컬럼의 두 번째 값은?\n<table border=\"1\">\n<tr><th>[SQLD44]</th><th></th><th></th></tr>\n<tr><td>C1</td><td>C2</td><td>C3</td></tr>\n<tr><td>1</td><td>NULL</td><td>A</td></tr>\n<tr><td>2</td><td>1</td><td>B</td></tr>\n<tr><td>3</td><td>1</td><td>C</td></tr>\n<tr><td>4</td><td>2</td><td>D</td></tr>\n</table>\n```sql\nSELECT C1, C2, C3\nFROM   SQLD44\nCONNECT BY PRIOR C1 = C2\nSTART WITH C1 = 1\nORDER SIBLINGS BY C1 DESC;\n```",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctIndex": 2,
    "explanation": "루트 C1=1(A)을 기준으로 자식들을 C1 내림차순으로 정렬하면 형제 노드 중 C1=3(C)이 C1=2(B)보다 먼저 오므로 두 번째 행은 C가 된다.",
    "_source": "authored"
  },
  {
    "id": 10794,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 45,
    "title": "아래 계층형 쿼리의 결과로 옳은 것은?\n<table border=\"1\">\n<tr><th>[SQLD45]</th><th></th><th></th></tr>\n<tr><td>C1</td><td>C2</td><td>C3</td></tr>\n<tr><td>1</td><td>NULL</td><td>KING</td></tr>\n<tr><td>2</td><td>1</td><td>JOHN</td></tr>\n<tr><td>3</td><td>2</td><td>SCOTT</td></tr>\n</table>\n```sql\nSELECT C3\nFROM   SQLD45\nWHERE  C1 <> 2\nCONNECT BY C1 = PRIOR C2\nSTART WITH C1 = 2;\n```",
    "options": [
      "JOHN",
      "KING",
      "SCOTT",
      "KING, JOHN"
    ],
    "correctIndex": 1,
    "explanation": "START WITH C1=2(JOHN)에서 C1 = PRIOR C2 방향(역방향)으로 거슬러 올라가면 JOHN → KING 경로가 생성된다. WHERE C1<>2에 의해 JOHN이 제외되어 최종 결과는 KING만 남는다.",
    "_source": "authored"
  },
  {
    "id": 10795,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 46,
    "title": "GRANT, REVOKE 와 같이 권한을 부여하거나 회수하는 SQL의 분류로 옳은 것은?",
    "options": [
      "DDL (Data Definition Language)",
      "DML (Data Manipulation Language)",
      "TCL (Transaction Control Language)",
      "DCL (Data Control Language)"
    ],
    "correctIndex": 3,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10796,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 47,
    "title": "아래 SQL의 결과에서 빈칸 ㄱ, ㄴ에 들어갈 값으로 옳은 것은? (총 8개 행에 대한 NTILE(3))\n<table border=\"1\">\n<tr><th>COL1</th><th>COL2</th></tr>\n<tr><td>A</td><td>( ㄱ )</td></tr>\n<tr><td>B</td><td>3</td></tr>\n<tr><td>C</td><td>( ㄴ )</td></tr>\n</table>",
    "options": [
      "ㄱ 3, ㄴ 2",
      "ㄱ 2, ㄴ 3",
      "ㄱ 3, ㄴ 3",
      "ㄱ 2, ㄴ 2"
    ],
    "correctIndex": 0,
    "explanation": "NTILE(3)은 전체 8개 행을 3개의 그룹으로 최대한 균등하게 분할한다. 8 = 3 + 3 + 2 이므로 각 버킷에 3개, 3개, 2개씩 배정되어 마지막 그룹은 2가 된다.",
    "_source": "authored"
  },
  {
    "id": 10797,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 48,
    "title": "아래 SQL의 빈칸에 들어갈 윈도우 절로 옳은 것은?\n<table border=\"1\">\n<tr><th>[SQLD48]</th><th></th></tr>\n<tr><td>V1</td><td>N1</td></tr>\n<tr><td>A</td><td>100</td></tr>\n<tr><td>B</td><td>150</td></tr>\n<tr><td>C</td><td>1400</td></tr>\n<tr><td>D</td><td>450</td></tr>\n<tr><td>E</td><td>50</td></tr>\n</table>\n```sql\nSELECT V1, N1,\n       COUNT(N1) OVER\n             (ORDER BY N1 (  ㄱ  )\n              BETWEEN 0 PRECEDING AND 50 FOLLOWING) AS CNT\nFROM   SQLD48;\n```",
    "options": [
      "ROWS",
      "GROUPS",
      "PARTITION",
      "RANGE"
    ],
    "correctIndex": 3,
    "explanation": "현재 값에서 +0 ~ +50 범위에 속하는 값들의 COUNT를 구해야 하므로, 물리적 행이 아닌 값의 범위를 기준으로 하는 RANGE를 사용한다. ROWS는 행 단위로 누적한다.",
    "_source": "authored"
  },
  {
    "id": 10798,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 49,
    "title": "아래 SQL의 결과 행 수로 옳은 것은?\n<table border=\"1\">\n<tr><th>[SQLD49]</th><th></th><th></th></tr>\n<tr><td>N1</td><td>V1</td><td>V2</td></tr>\n<tr><td>1</td><td>A</td><td>T1</td></tr>\n<tr><td>2</td><td>B</td><td>T2</td></tr>\n<tr><td>3</td><td>NULL</td><td>T3</td></tr>\n</table>\n```sql\nSELECT *\nFROM   SQLD49\nWHERE  V1 = 'A' AND V2 = 'T1'\n   OR  V2 = 'T2'\n   OR  V2 = 'T3';\n```",
    "options": [
      "1",
      "3",
      "2",
      "0"
    ],
    "correctIndex": 1,
    "explanation": "AND가 OR보다 우선순위가 높아 \"(V1='A' AND V2='T1') OR V2='T2' OR V2='T3'\"로 해석된다. 세 행 모두 하나 이상의 조건을 만족하므로 결과는 3건이다.",
    "_source": "authored"
  },
  {
    "id": 10799,
    "examSetId": "round-45",
    "examLabel": "제45회 (2022년 5월)",
    "round": 45,
    "subject": "2과목",
    "number": 50,
    "title": "아래 SQL의 결과 행 수로 옳은 것은?\n<table border=\"1\">\n<tr><th>[SQLD50]</th><th></th></tr>\n<tr><td>N1</td><td>V1</td></tr>\n<tr><td>1</td><td>SMITH</td></tr>\n<tr><td>2</td><td>JOHN</td></tr>\n<tr><td>3</td><td>ALX</td></tr>\n<tr><td>4</td><td>CLARE</td></tr>\n<tr><td>5</td><td>BLX</td></tr>\n</table>\n```sql\nSELECT COUNT(*)\nFROM   SQLD50\nWHERE  V1 LIKE '_L%';\n```",
    "options": [
      "3",
      "2",
      "4",
      "1"
    ],
    "correctIndex": 0,
    "explanation": "'_L%'은 두 번째 문자가 L인 문자열을 의미한다. ALX(두 번째 L), CLARE(두 번째 L), BLX(두 번째 L) 세 건이 해당된다.",
    "_source": "authored"
  }
];
