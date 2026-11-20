// Auto-generated from PDF + blog + scripts/authored/round-54.json
// 제54회 — 2024년 8월 · 50문항
// ⚠ 직접 편집 금지. 출처별 데이터를 고친 뒤 'node scripts/build-quiz-bank.mjs' 재실행.
import type { QuizQuestion } from '../quizBank';

export const ROUND_54: QuizQuestion[] = [
  {
    "id": 10300,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "1과목",
    "number": 1,
    "title": "개념 모델에서 정한 엔터티마다 속성과 주식별자를 확정하고, 관계차수·선택사양을 정하고, 정규화까지 마쳤다. 특정 DBMS 는 아직 고르지 않았다. 지금까지 한 작업의 단계는?",
    "options": [
      "논리적 데이터 모델링",
      "개념적 데이터 모델링",
      "물리적 데이터 모델링",
      "데이터베이스 모델링"
    ],
    "correctIndex": 0,
    "explanation": "논리적 데이터 모델링은 업무의 키·속성·관계를 정확하게 표현하고 정규화하는 단계로, 특정 DBMS 에 묶이지 않아 재사용성이 높다. 설명한 작업이 모두 여기에 속한다. 정답은 ①번이다. 개념적 모델링(②)은 그 앞 단계로 핵심 엔터티와 관계를 큰 그림으로만 정하고, 물리적 모델링(③)은 DBMS 를 정한 뒤 테이블·칼럼 타입·인덱스 등 저장 구조를 정한다. '데이터베이스 모델링'(④)은 모델링 3단계에 들지 않는다.",
    "_source": "authored"
  },
  {
    "id": 10301,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "1과목",
    "number": 2,
    "title": "엔터티의 특징으로 적절하지 않은 것은?",
    "options": [
      "엔터티는 고유한 식별자를 가진다.",
      "엔터티는 데이터 저장의 기본 단위이다.",
      "엔터티는 반드시 속성을 가진다.",
      "속성이 없는 엔터티가 있을 수 있다."
    ],
    "correctIndex": 3,
    "explanation": "엔터티는 반드시 속성을 가져야 하며 일반적으로 두 개 이상의 속성을 갖는다(③ 은 맞다). 고유 식별자로 인스턴스를 구분하고(①) 데이터 저장의 기본 단위라는 설명(②) 도 맞다. 속성이 없는 엔터티가 있을 수 있다는 ④ 가 적절하지 않다.",
    "_source": "authored"
  },
  {
    "id": 10302,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "1과목",
    "number": 3,
    "title": "고객 테이블에 파생 속성 '누적구매금액'(그 고객의 주문 금액 합계)을 두었다. 아래 작업 ㉠~㉣ 중 누적구매금액도 함께 고쳐야 하는 것만 모두 고른 것은?",
    "options": [
      "㉠",
      "㉠, ㉡",
      "㉠, ㉢, ㉣",
      "㉠, ㉡, ㉣"
    ],
    "correctIndex": 3,
    "explanation": "파생 속성은 다른 속성으로 계산되는 값이라, 계산에 쓰인 원래 값이 바뀔 때마다 같이 고쳐야 한다. 누적구매금액은 주문 금액에서 나오므로 주문이 늘거나(㉠) 사라지거나(㉡) 금액이 바뀌면(㉣) 다시 맞춰야 한다. 주소(㉢)는 계산과 상관없다. 정답은 ④번이다. 파생 속성은 조회를 빠르게 해 주지만, 이렇게 고칠 곳이 늘고 하나라도 놓치면 값이 어긋난다. 그래서 꼭 필요한 것만 두는 것이 원칙이다. ① 은 취소와 수정을 놓친 것, ② 는 금액 수정을 놓친 것, ③ 은 계산과 무관한 주소 변경을 넣고 취소를 놓친 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "㉠ 고객이 새 주문을 한다.\n㉡ 고객이 주문 하나를 취소한다.\n㉢ 고객이 배송 주소를 바꾼다.\n㉣ 주문의 수량이 바뀌어 금액이 달라진다."
      }
    ]
  },
  {
    "id": 10303,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "1과목",
    "number": 4,
    "title": "식별자의 특징으로 적절하지 않은 것은?",
    "options": [
      "식별자는 엔터티의 유일성을 보장한다.",
      "식별자는 최소성 조건을 만족해야 한다.",
      "주식별자는 엔터티를 고유하게 식별한다.",
      "주식별자의 값은 자주 변경될 수 있다."
    ],
    "correctIndex": 3,
    "explanation": "식별자는 인스턴스의 유일성을 보장하고(①③), 유일성을 만족하는 최소한의 속성으로 구성되어야 한다(②, 최소성). 주식별자는 한 번 정해지면 값이 바뀌지 않아야 하므로(불변성) 자주 변경될 수 있다는 ④ 가 옳지 않다.",
    "_source": "authored"
  },
  {
    "id": 10304,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "1과목",
    "number": 5,
    "title": "부서–사원 은 비식별자 관계이고, 사원.부서코드 는 NULL 을 허용하는 외래키다. 부서에 D1 만 있고 D1 에 소속된 사원이 있을 때, 아래 ㉠~㉢ 을 각각 실행한 결과로 옳은 것은? (ON DELETE 옵션 없음)",
    "options": [
      "오류, 오류, 성공",
      "성공, 오류, 오류",
      "성공, 성공, 오류",
      "성공, 오류, 성공"
    ],
    "correctIndex": 1,
    "explanation": "비식별자 관계는 부모 키를 자식의 일반 칼럼(외래키)으로만 받으므로, 외래키에 NULL 을 허용하면 부모 없는 자식을 만들 수 있다. 그래서 ㉠ 은 성공한다. 비식별자 관계라고 부모가 반드시 있어야 하는 것은 아니고, 필수인지 선택인지는 NULL 허용 여부(관계선택사양)로 정한다. 외래키에 값을 넣을 때는 부모에 그 값이 있어야 하므로 없는 D9 를 넣는 ㉡ 은 오류다. 참조하는 사원이 있는 부모 행을 지우는 ㉢ 도 ON DELETE 옵션이 없어 오류다. 정답은 ②번이다. ① 은 비식별자 관계도 부모가 필수라고 본 것, ③ 은 없는 부모 값을 넣어도 된다고 본 것, ④ 는 자식이 있어도 부모를 지울 수 있다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ㉠\nINSERT INTO 사원 (사번, 부서코드)\nVALUES (1, NULL);\n-- ㉡\nINSERT INTO 사원 (사번, 부서코드)\nVALUES (2, 'D9');\n-- ㉢\nDELETE FROM 부서\nWHERE  부서코드 = 'D1';"
      }
    ]
  },
  {
    "id": 10305,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "1과목",
    "number": 6,
    "title": "아래 고객·주문 ERD 를 해석한 내용으로 적절한 것은?",
    "options": [
      "주문 엔터티의 고객번호는 고객 엔터티로부터 상속받은 것이다.",
      "주문이 없는 고객은 존재할 수 없다.",
      "고객 없이도 주문은 독립적으로 발생할 수 있다.",
      "주문 엔터티의 주식별자는 고객번호이다."
    ],
    "correctIndex": 0,
    "explanation": "고객-주문 관계에서 주문의 고객번호는 부모 엔터티(고객)의 식별자를 외래키로 상속받은 것이다. 까마귀발 표기에서 고객 쪽이 1, 주문 쪽이 다(M)이며 고객 없이는 주문이 발생할 수 없다. ② 주문 쪽 끝이 o{(0개 이상)라 주문 없는 고객도 있을 수 있고, ③ 고객 쪽 끝이 || 라 고객 없는 주문은 없으며, ④ 주문의 주식별자는 주문번호이고 고객번호는 FK 다(점선 = 비식별 관계).",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "고객-주문 ERD (고객 측 1 필수, 주문 측 0..N — 까마귀발 다)",
        "mermaid": "erDiagram\n    고객 ||..o{ 주문 : \"한다\"\n    고객 {\n        string 고객번호 PK\n        string 고객명\n    }\n    주문 {\n        string 주문번호 PK\n        string 고객번호 FK\n        date 주문일자\n    }"
      }
    ]
  },
  {
    "id": 10306,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "1과목",
    "number": 7,
    "title": "아래 주문상세 테이블(주식별자: 주문번호 + 상품번호)의 데이터와 함수 종속성에 대한 설명으로 옳은 것은?",
    "options": [
      "상품명은 주식별자의 일부인 상품번호에만 종속되므로 이 테이블은 제2정규형을 만족하지 않는다.",
      "수량은 주문번호만 알면 정해지므로 주문번호에 부분 함수 종속한다.",
      "상품번호 → 상품명 이 성립하므로 상품명 → 상품번호 도 성립한다.",
      "이행 함수 종속이 있으므로 이 테이블은 제1정규형도 만족하지 않는다."
    ],
    "correctIndex": 0,
    "explanation": "상품명은 상품번호만 정해지면 정해지고(P1 은 늘 볼펜), 주문일자는 주문번호만 정해지면 정해진다(O1 은 늘 3/1). 둘 다 주식별자 (주문번호, 상품번호) 전체가 아니라 일부에만 종속하는 부분 함수 종속이라 제2정규형을 만족하지 않는다(①). ② 수량은 같은 O1 안에서도 P1 은 2, P2 는 1 로 달라 주문번호만으로는 정해지지 않고 두 속성 모두에 종속한다(완전 함수 종속). ③ 노트는 P2 와 P3 두 상품의 이름이라 상품명만으로 상품번호가 정해지지 않는다. 함수 종속은 방향이 있어 거꾸로는 성립하지 않을 수 있다. ④ 칸마다 값이 하나씩만 들어 있어 제1정규형은 만족하며, 이 표에는 일반 속성끼리의 이행 종속도 보이지 않는다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "주문상세",
        "headers": [
          "주문번호",
          "상품번호",
          "수량",
          "상품명",
          "주문일자"
        ],
        "rows": [
          [
            "O1",
            "P1",
            "2",
            "볼펜",
            "3/1"
          ],
          [
            "O1",
            "P2",
            "1",
            "노트",
            "3/1"
          ],
          [
            "O2",
            "P1",
            "5",
            "볼펜",
            "3/2"
          ],
          [
            "O3",
            "P3",
            "1",
            "노트",
            "3/2"
          ]
        ]
      }
    ]
  },
  {
    "id": 10307,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "1과목",
    "number": 8,
    "title": "주문상세는 '주문번호 + 상품번호 + 주문일시' 로 구별되지만, 키가 길어 자식 테이블로 넘기기 불편해 '상세ID'(1, 2, 3 … 순번)를 새로 만들어 기본키로 썼다. 상세ID 는 어떤 식별자인가?",
    "options": [
      "외래키",
      "복합 식별자",
      "인조 식별자",
      "자연 식별자"
    ],
    "correctIndex": 2,
    "explanation": "인조 식별자는 업무에서 원래 생기는 값이 아니라, 본래 식별자가 복잡하거나 길어서 편의를 위해 새로 만든 식별자다. 상세ID 가 여기에 해당한다. 정답은 ③번이다. 원래의 '주문번호 + 상품번호 + 주문일시' 는 여러 속성으로 된 복합 식별자이자 업무에서 생기는 자연(본질) 식별자다. 상세ID 는 다른 테이블에서 받아 온 값이 아니므로 외래키도 아니다. 인조 식별자를 쓸 때는 원래 조합의 중복을 막도록 유일 제약을 따로 두는 것이 좋다.",
    "_source": "authored"
  },
  {
    "id": 10308,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "1과목",
    "number": 9,
    "title": "주문–주문상세 는 식별자 관계이고, 주문에는 주문상세가 1개 이상 반드시 있고 주문상세는 반드시 주문 하나에 속한다. 이 관계를 IE 표기법과 Barker 표기법으로 그린 모습으로 옳은 것은?",
    "options": [
      "IE: 점선 / Barker: 관계선에 UID 바 없음",
      "IE: 실선, 주문상세 쪽 끝은 세로줄 + 까마귀발 / Barker: 주문상세 쪽 끝에 UID 바, 관계선 양쪽 모두 실선",
      "IE: 실선, 주문상세 쪽 끝은 동그라미 + 까마귀발 / Barker: 관계선 양쪽 모두 점선",
      "IE: 점선, 주문상세 쪽 끝은 세로줄 + 까마귀발 / Barker: 관계선 양쪽 모두 실선, UID 바 없음"
    ],
    "correctIndex": 1,
    "explanation": "IE 표기법은 식별자 관계를 실선, 비식별자 관계를 점선으로 그리고, 필수·선택은 끝의 세로줄·동그라미로 나타낸다. 주문상세가 1개 이상 반드시 있으므로 주문상세 쪽 끝은 세로줄 + 까마귀발이다. Barker 표기법은 실선·점선으로 필수·선택을 나타내고, 식별자 관계는 자식 쪽 관계선 끝에 가로 막대(UID 바)를 그어 표시한다. 양쪽 모두 필수라 관계선 양쪽이 실선이다. 정답은 ②번이다. ①·④ 는 IE 에서 식별자 관계를 점선으로 본 것이고, ③ 은 필수 관계를 선택으로 그린 것이다. 두 표기법에서 실선·점선의 뜻이 다르다는 점이 핵심이다.",
    "_source": "authored"
  },
  {
    "id": 10309,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "1과목",
    "number": 10,
    "title": "사원 테이블의 보너스 칼럼 값이 NULL 인 행에서 아래 ㉠~㉣ 조건식의 결과로 옳은 것은? (순서대로)",
    "options": [
      "TRUE, TRUE, TRUE, FALSE",
      "UNKNOWN, TRUE, TRUE, UNKNOWN",
      "UNKNOWN, TRUE, UNKNOWN, UNKNOWN",
      "FALSE, TRUE, FALSE, FALSE"
    ],
    "correctIndex": 2,
    "explanation": "NULL 은 '아직 모르는 값' 이라 0 이나 빈 문자열과 다르고, 어떤 값과 = · > 로 비교해도 참인지 거짓인지 정할 수 없어 UNKNOWN 이 된다. ㉠ 과 ㉢ 은 NULL 과 비교했으니 UNKNOWN 이다(모르는 값 둘이 같은지도 알 수 없다). NULL 인지 확인할 때는 ㉡ 처럼 IS NULL 을 써야 TRUE 가 나온다. ㉣ 은 NULL + 100 이 NULL 이라 비교 결과도 UNKNOWN 이다. 정답은 ③번이다. ① 은 NULL 을 일반 값처럼 본 것, ② 는 NULL 끼리는 같다고 본 것, ④ 는 UNKNOWN 을 FALSE 와 같은 것으로 본 것이다(WHERE 에서는 둘 다 행이 걸러지지만 결과 값은 다르다).",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "㉠ 보너스 = NULL\n㉡ 보너스 IS NULL\n㉢ NULL = NULL\n㉣ 보너스 + 100 > 50"
      }
    ]
  },
  {
    "id": 10310,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 11,
    "title": "아래 ERD 의 사원 테이블(부서코드 NOT NULL)을 CTAS 로 복사한 뒤 INSERT ㉠~㉣ 을 실행했다. 성공하는 문장만 모두 고른 것은? (Oracle 기준)",
    "options": [
      "㉠",
      "㉠, ㉡",
      "㉠, ㉡, ㉢",
      "㉡, ㉣"
    ],
    "correctIndex": 1,
    "explanation": "Oracle 의 CTAS 는 칼럼 구조와 데이터, NOT NULL 제약만 옮기고 기본키·외래키·UNIQUE·CHECK·DEFAULT 는 옮기지 않는다. 그래서 사원_B 에는 기본키가 없어 ㉠ 처럼 사번 1 이 또 들어가도 성공하고, 외래키도 없어 ㉡ 처럼 없는 부서 D9 를 넣어도 성공한다. ㉢ 은 복사된 NOT NULL 때문에 실패한다. ㉣ 은 원본 사원 테이블에 넣는 것이라 외래키가 살아 있어 D9 가 거부된다. 정답은 ②번이다. ① 은 CTAS 가 외래키까지 옮긴다고 본 것이고, ③ 은 NOT NULL 도 옮기지 않는다고 본 것, ④ 는 기본키는 옮기고 외래키는 원본에서도 검사하지 않는다고 본 것이다. 복사본을 원본처럼 쓰려면 ALTER TABLE 로 기본키와 외래키를 다시 만들어야 한다. 참고로 PostgreSQL 의 CREATE TABLE AS 는 NOT NULL 도 옮기지 않는다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "부서·사원 ERD (사원.부서코드 NOT NULL)",
        "mermaid": "erDiagram\n    부서 ||..o{ 사원 : \"소속\"\n    부서 {\n        string 부서코드 PK\n    }\n    사원 {\n        int 사번 PK\n        string 부서코드 FK\n        string 이름\n    }"
      },
      {
        "type": "text",
        "content": "부서: D1\n사원: (1, D1, 김)"
      },
      {
        "type": "sql",
        "code": "CREATE TABLE 사원_B AS\nSELECT * FROM 사원;\n\n-- ㉠\nINSERT INTO 사원_B\nVALUES (1, 'D1', '최');\n-- ㉡\nINSERT INTO 사원_B\nVALUES (9, 'D9', '한');\n-- ㉢\nINSERT INTO 사원_B\nVALUES (8, NULL, '오');\n-- ㉣\nINSERT INTO 사원\nVALUES (9, 'D9', '한');"
      }
    ]
  },
  {
    "id": 10311,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 12,
    "title": "사원(이름, 부서, 급여) 테이블에 아래 두 뷰를 만들고 ㉠~㉣ 을 각각 실행할 때 오류가 발생하는 것만 모두 고른 것은?",
    "options": [
      "㉠, ㉢",
      "㉠",
      "㉠, ㉢, ㉣",
      "오류 없음"
    ],
    "correctIndex": 0,
    "explanation": "뷰를 통한 UPDATE·DELETE·INSERT 는 뷰의 각 행이 원래 테이블의 한 행과 바로 대응될 때만 된다. V1 은 GROUP BY·SUM 으로 여러 행을 묶은 결과라 어느 행을 고쳐야 할지 정할 수 없어 ㉠·㉢ 은 오류다. V2 는 사원의 행을 그대로 골라 보여 주는 단순한 뷰라 ㉡ 의 UPDATE 는 된다. ㉣ 도 들어가는데, 뷰에 없는 부서 칼럼은 NULL 로 저장되고(WITH CHECK OPTION 이 없어 막지 않는다) V2 로는 다시 보이지 않는다. 정답은 ①번이다. ② 는 집계 뷰에서 DELETE 는 된다고 본 것, ③ 은 뷰 조건에 맞지 않는 INSERT 를 막는다고 본 것, ④ 는 뷰로는 무엇이든 바꿀 수 있다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "CREATE VIEW V1 AS\n  SELECT 부서, SUM(급여) AS 합\n  FROM   사원\n  GROUP  BY 부서;\nCREATE VIEW V2 AS\n  SELECT 이름, 급여\n  FROM   사원\n  WHERE  부서 = 10;\n\n-- ㉠\nUPDATE V1 SET 합 = 0;\n-- ㉡\nUPDATE V2 SET 급여 = 급여 + 1;\n-- ㉢\nDELETE FROM V1 WHERE 부서 = 10;\n-- ㉣\nINSERT INTO V2 VALUES ('신', 100);"
      }
    ]
  },
  {
    "id": 10312,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 13,
    "title": "계좌 이체 기능은 '㉠ 보내는 계좌 출금 UPDATE, ㉡ 받는 계좌 입금 UPDATE, ㉢ 이체내역 INSERT' 로 이루어진다. 트랜잭션을 나누는 방법으로 가장 알맞은 것은?",
    "options": [
      "㉠~㉢ 을 하나의 트랜잭션으로 묶어 모두 성공했을 때 한 번만 COMMIT 한다.",
      "문장마다 바로 COMMIT 해 변경을 빨리 확정한다.",
      "㉠·㉡ 은 한 트랜잭션으로 묶고, 기록용인 ㉢ 은 따로 COMMIT 한다.",
      "㉠ 과 ㉡ 을 서로 다른 세션에서 동시에 실행해 속도를 높인다."
    ],
    "correctIndex": 0,
    "explanation": "트랜잭션은 더 나눌 수 없는 논리적 작업 단위다. 이체는 출금·입금·기록이 모두 이루어져야 의미가 있으므로 하나의 트랜잭션으로 묶고, 끝까지 성공하면 COMMIT, 중간에 실패하면 ROLLBACK 해야 한다. 정답은 ①번이다. ② 는 출금만 확정된 뒤 입금이 실패하면 돈이 사라진 상태로 남는다. ③ 은 이체는 됐는데 내역이 없거나, 이체는 취소됐는데 내역만 남을 수 있다. ④ 는 두 작업이 서로 다른 트랜잭션이 되어 함께 취소할 수 없다.",
    "_source": "authored"
  },
  {
    "id": 10313,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 14,
    "title": "아래 PHONE 테이블에 정규식 패턴을 적용했을 때 매칭되지 않는(값이 나오지 않는) 전화번호 형식은?",
    "options": [
      "010-555-6789",
      "011-1234-5678",
      "02-1234-5678",
      "070-9999-1234"
    ],
    "correctIndex": 2,
    "explanation": "정규식 `^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$` 는 앞자리 3 자리, 가운데 3~4 자리, 뒷자리 4 자리를 요구한다. 02-1234-5678 은 서울 지역번호라 앞자리가 2 자리뿐이어서 조건을 만족하지 못해 조회되지 않는다. ① 010-555-6789·② 011-1234-5678·④ 070-9999-1234 는 앞자리가 3 자리이고 가운데가 3 자리든 4 자리든 허용 범위 안에 들어간다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "PHONE 테이블",
        "headers": [
          "PHONE"
        ],
        "rows": [
          [
            "010-555-6789"
          ],
          [
            "011-1234-5678"
          ],
          [
            "02-1234-5678"
          ],
          [
            "070-9999-1234"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT *\nFROM   PHONE\nWHERE  REGEXP_LIKE(PHONE,\n  '^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$');"
      }
    ]
  },
  {
    "id": 10314,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 15,
    "title": "아래 EMP 테이블에 대한 계층형 쿼리에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "계층 구조를 조회한다.",
      "상위 관리자부터 조회한다.",
      "역방향 탐색이다.",
      "순방향 탐색이다."
    ],
    "correctIndex": 2,
    "explanation": "START WITH mgr_no IS NULL 로 관리자가 없는 KING 부터 시작하고(②), CONNECT BY PRIOR emp_no = mgr_no 는 '앞(부모) 행의 emp_no 를 mgr_no 로 가진 행' 을 다음 행으로 잇는 부모 → 자식 순방향 전개다(①④). 그래서 '역방향 탐색' 이라는 ③ 이 옳지 않다. 참고로 START WITH 를 생략하면 모든 행이 각각 루트가 되어 전개되므로, 위에서부터 조회하려면 START WITH 를 꼭 적어야 한다. ※ 복원 자료의 SQL 에는 START WITH 가 빠져 있어 ② 도 틀린 설명이 되므로 START WITH mgr_no IS NULL 을 넣었다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP 테이블 (emp_no = 사원번호, mgr_no = 상위 관리자 번호)",
        "headers": [
          "emp_no",
          "ename",
          "mgr_no"
        ],
        "rows": [
          [
            "100",
            "KING",
            "(NULL)"
          ],
          [
            "200",
            "JONES",
            "100"
          ],
          [
            "300",
            "SCOTT",
            "200"
          ],
          [
            "400",
            "FORD",
            "200"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- emp_no : 하위 사원 번호, mgr_no : 상위 관리자 번호\nSELECT *\nFROM   EMP\nSTART WITH mgr_no IS NULL\nCONNECT BY PRIOR emp_no = mgr_no;"
      }
    ]
  },
  {
    "id": 10315,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 16,
    "title": "아래 두 테이블에 대한 SQL ㉠, ㉡ 의 실행 결과로 옳은 것은?",
    "options": [
      "㉠ 오류, ㉡ 2행(인사의 이름은 NULL)",
      "㉠ 4행, ㉡ 2행(인사의 이름은 NULL)",
      "㉠ 오류, ㉡ 1행(개발만)",
      "㉠ 3행, ㉡ 1행(개발만)"
    ],
    "correctIndex": 0,
    "explanation": "SELECT 절의 스칼라 서브쿼리는 행마다 값 하나만 돌려줘야 한다. ㉠ 에서 영업(10) 행은 서브쿼리가 김, 이 두 행을 돌려주므로 실행 중에 오류가 나서 결과 전체가 나오지 않는다. ㉡ 은 개발·인사만 대상이다. 개발은 박 한 명이고, 인사는 사원이 없어 서브쿼리가 NULL 을 돌려준다. 행이 사라지지는 않아 2행이다. 정답은 ①번이다. ② 는 스칼라 서브쿼리가 여러 행이면 행이 늘어난다고 본 것, ③·④ 는 서브쿼리 결과가 없으면 바깥 행도 빠진다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "부서",
        "headers": [
          "부서번호",
          "부서명"
        ],
        "rows": [
          [
            "10",
            "영업"
          ],
          [
            "20",
            "개발"
          ],
          [
            "30",
            "인사"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "사원",
        "headers": [
          "이름",
          "부서번호"
        ],
        "rows": [
          [
            "김",
            "10"
          ],
          [
            "이",
            "10"
          ],
          [
            "박",
            "20"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT D.부서명,\n       (SELECT E.이름\n        FROM   사원 E\n        WHERE  E.부서번호 =\n               D.부서번호) AS 이름\nFROM   부서 D;\n\n-- ㉡\nSELECT D.부서명,\n       (SELECT E.이름\n        FROM   사원 E\n        WHERE  E.부서번호 =\n               D.부서번호) AS 이름\nFROM   부서 D\nWHERE  D.부서번호 >= 20;"
      }
    ]
  },
  {
    "id": 10316,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 17,
    "title": "아래 T 테이블에 대한 SQL 과 동일한 결과를 반환하는 함수는?",
    "options": [
      "NVL(COL1, 'X')",
      "DECODE(COL1, NULL, 'X')",
      "COALESCE(COL1, 'X')",
      "NULLIF(COL1, 'X')"
    ],
    "correctIndex": 3,
    "explanation": "원본 SQL 의 `CASE WHEN COL1 = 'X' THEN NULL ELSE COL1 END` 는 \"COL1 이 'X' 이면 NULL, 아니면 COL1\" 을 반환. 이건 정확히 `NULLIF(COL1, 'X')` 의 의미. ① NVL 은 NULL → 'X', ② DECODE 도 NULL → 'X', ③ COALESCE 도 NULL → 'X' 라 의미 반대.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T 테이블",
        "headers": [
          "COL1"
        ],
        "rows": [
          [
            "A"
          ],
          [
            "X"
          ],
          [
            "B"
          ],
          [
            "(NULL)"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT CASE WHEN COL1 = 'X' THEN NULL ELSE COL1 END\nFROM   T;"
      }
    ]
  },
  {
    "id": 10317,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 18,
    "title": "아래 TAB 테이블에 대한 SQL 중 Oracle 환경에서 결과가 다른 것은?",
    "options": [
      "SELECT COL1, COL2, COL3 FROM TAB WHERE COL1 < 5;",
      "SELECT T.* FROM TAB AS T;",
      "SELECT * FROM TAB;",
      "SELECT * FROM TAB WHERE COL2 IN (2, 3);"
    ],
    "correctIndex": 1,
    "explanation": "Oracle 은 FROM 절에서 테이블 별칭에 `AS` 키워드를 허용하지 않아 ② 는 ORA-00933 오류 발생. ①③④ 는 모두 정상 실행되어 같은 4 행을 반환 (조건이 충분히 넓음).",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TAB 테이블",
        "headers": [
          "COL1",
          "COL2",
          "COL3"
        ],
        "rows": [
          [
            "1",
            "2",
            "A"
          ],
          [
            "2",
            "3",
            "B"
          ],
          [
            "3",
            "2",
            "C"
          ],
          [
            "4",
            "3",
            "D"
          ]
        ]
      }
    ]
  },
  {
    "id": 10318,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 19,
    "title": "아래 설명을 바탕으로 STADIUM 의 NAME 을 조회하는 SQL 중 적절하지 않은 것은?",
    "options": [
      "SELECT STADIUM.NAME FROM HR.STADIUM, SPORT.STADIUM;",
      "SELECT HR.STADIUM.NAME FROM HR.STADIUM;",
      "SELECT S.NAME FROM HR.STADIUM S;",
      "SELECT A.NAME FROM HR.STADIUM A, SPORT.STADIUM B;"
    ],
    "correctIndex": 0,
    "explanation": "같은 이름의 STADIUM 이 두 스키마에 있을 때 FROM 절에 둘 다 쓰면, SELECT 절의 STADIUM.NAME 이 어느 테이블인지 알 수 없어 오류(열의 정의가 애매함)가 난다(①). ② 처럼 스키마명을 붙이거나 ③④ 처럼 테이블 별칭을 주면 구분된다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "HR 스키마와 SPORT 스키마에 이름이 같은 STADIUM 테이블이 각각 있고, 두 테이블 모두 NAME 컬럼을 가지고 있다. 현재 사용자는 두 스키마의 STADIUM 을 모두 조회할 수 있다."
      }
    ]
  },
  {
    "id": 10319,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 20,
    "title": "아래 SQL 에 대한 설명으로 적절한 것은?",
    "options": [
      "B 가 NULL 이 아니면 항상 B 값을 반환한다.",
      "A 와 B 가 NULL 일 경우 100 을 반환한다.",
      "A 가 NULL 일 경우에는 언제나 50*B 를 반환한다.",
      "A 가 NULL 이 아닐 경우 A 값을 반환한다."
    ],
    "correctIndex": 3,
    "explanation": "COALESCE(A, 50*B, '50') 은 왼쪽부터 처음으로 NULL 이 아닌 값을 반환한다. A 가 NULL 이 아니면 A(①행 10)이고(④), A 가 NULL 이고 B 가 있으면 50*B(②행 250), 둘 다 NULL 이면 '50' 이다. ① 은 A 가 있으면 A 가 먼저라 틀리고, ② 는 100 이 아니라 50, ③ 은 B 가 NULL 이면 50*B 가 아니라 '50' 이라 틀리다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T 테이블",
        "headers": [
          "A",
          "B"
        ],
        "rows": [
          [
            "10",
            "5"
          ],
          [
            "NULL",
            "5"
          ],
          [
            "NULL",
            "NULL"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT COALESCE(A, 50*B, '50') FROM T;"
      }
    ]
  },
  {
    "id": 10320,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 21,
    "title": "아래 두 테이블을 NATURAL JOIN 한 결과로 옳은 것은?",
    "options": [
      "3건",
      "2건",
      "1건",
      "공집합"
    ],
    "correctIndex": 0,
    "explanation": "NATURAL JOIN 은 두 테이블에서 동일한 이름을 가진 모든 컬럼을 자동으로 조인 조건으로 사용한다. T1·T2 에서 KEYA·KEYB 는 이름이 다르므로 조인 조건에서 제외되고, 동일명 컬럼인 COL1·COL2 만 매칭 대상이 된다. (A,가) 그룹: T1 의 (1,A,가)/(2,A,가) 2행 × T2 의 (1,A,가) 1행 = 2건, (C,다) 그룹: T1 의 (5,C,다) 1행 × T2 의 (3,C,다) 1행 = 1건. 합계 3건. 결과 테이블의 공통 컬럼은 한 번씩만 나타나며 KEYA·KEYB 는 그대로 보존된다. ② 2건은 (C, 다) 짝을 놓친 값, ③ 1건은 KEYA = KEYB 까지 조인 조건으로 본 값((1, A, 가) 한 쌍), ④ 공집합은 이름이 다른 KEY 컬럼 때문에 조인이 안 된다고 본 결과다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T1",
        "headers": [
          "KEYA",
          "COL1",
          "COL2"
        ],
        "rows": [
          [
            "1",
            "A",
            "가"
          ],
          [
            "2",
            "A",
            "가"
          ],
          [
            "5",
            "C",
            "다"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "T2",
        "headers": [
          "KEYB",
          "COL1",
          "COL2"
        ],
        "rows": [
          [
            "1",
            "A",
            "가"
          ],
          [
            "3",
            "C",
            "다"
          ]
        ]
      }
    ],
    "optionReferences": [
      [
        {
          "type": "table",
          "caption": "보기 ① 결과",
          "headers": [
            "COL1",
            "COL2",
            "KEYA",
            "KEYB"
          ],
          "rows": [
            [
              "A",
              "가",
              "1",
              "1"
            ],
            [
              "A",
              "가",
              "2",
              "1"
            ],
            [
              "C",
              "다",
              "5",
              "3"
            ]
          ]
        }
      ],
      [
        {
          "type": "table",
          "caption": "보기 ② 결과",
          "headers": [
            "COL1",
            "COL2",
            "KEYA",
            "KEYB"
          ],
          "rows": [
            [
              "A",
              "가",
              "1",
              "1"
            ],
            [
              "A",
              "가",
              "2",
              "1"
            ]
          ]
        }
      ],
      [
        {
          "type": "table",
          "caption": "보기 ③ 결과",
          "headers": [
            "COL1",
            "COL2",
            "KEYA",
            "KEYB"
          ],
          "rows": [
            [
              "A",
              "가",
              "1",
              "1"
            ]
          ]
        }
      ],
      [
        {
          "type": "table",
          "caption": "보기 ④ 결과",
          "headers": [
            "COL1",
            "COL2",
            "KEYA",
            "KEYB"
          ],
          "rows": []
        }
      ]
    ]
  },
  {
    "id": 10321,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 22,
    "title": "아래 INNER JOIN 의 결과에서 중복되어 등장하는 이름으로 옳은 것은?",
    "options": [
      "KIM 이 두 번 반복 출력된다.",
      "LEE 가 두 번 반복 출력된다.",
      "PARK 이 두 번 반복 출력된다.",
      "중복 없이 각 한 번만 출력된다."
    ],
    "correctIndex": 0,
    "explanation": "INNER JOIN 은 EMPNO 가 같은 행끼리 짝을 짓는다. KIM(1)은 DEPT_EMP 에 1 이 두 번(10, 20) 있어 두 행이 나오고, LEE(2)는 한 번, PARK(3)은 짝이 없어 빠진다. 따라서 KIM 이 두 번 출력된다(①). ② LEE 는 짝이 하나, ③ PARK 은 짝이 없어 나오지 않으며, ④ KIM 이 두 번 나오므로 중복이 있다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP",
        "headers": [
          "EMPNO",
          "ENAME"
        ],
        "rows": [
          [
            "1",
            "KIM"
          ],
          [
            "2",
            "LEE"
          ],
          [
            "3",
            "PARK"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "DEPT_EMP",
        "headers": [
          "EMPNO",
          "DEPT"
        ],
        "rows": [
          [
            "1",
            "10"
          ],
          [
            "1",
            "20"
          ],
          [
            "2",
            "10"
          ]
        ]
      }
    ]
  },
  {
    "id": 10322,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 23,
    "title": "아래 LEFT OUTER JOIN 결과에서 특정 행이 NULL 로 출력되는 이름은?",
    "options": [
      "SMITH 행의 DEPT 컬럼이 NULL 로 출력된다.",
      "KIM 행의 DEPT 컬럼이 NULL 로 출력된다.",
      "LEE 행의 DEPT 컬럼이 NULL 로 출력된다.",
      "모든 행이 NULL 없이 출력된다."
    ],
    "correctIndex": 0,
    "explanation": "LEFT OUTER JOIN 은 왼쪽 EMP 의 모든 행을 보존한다. KIM(1)과 LEE(3)는 DEPT_EMP 에 짝이 있어 DEPT 가 10, 20 으로 나오고, SMITH(2)는 짝이 없어 DEPT 가 NULL 로 출력된다(①). ② KIM 과 ③ LEE 는 짝이 있어 DEPT 가 채워지고, ④ SMITH 행에는 NULL 이 생긴다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP",
        "headers": [
          "EMPNO",
          "ENAME"
        ],
        "rows": [
          [
            "1",
            "KIM"
          ],
          [
            "2",
            "SMITH"
          ],
          [
            "3",
            "LEE"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "DEPT_EMP",
        "headers": [
          "EMPNO",
          "DEPT"
        ],
        "rows": [
          [
            "1",
            "10"
          ],
          [
            "3",
            "20"
          ]
        ]
      }
    ]
  },
  {
    "id": 10323,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 24,
    "title": "아래 네 개의 SQL 중 반환 행 수가 가장 많은 것은?",
    "options": [
      "SELECT CODE FROM TAB1 UNION ALL SELECT CODE FROM TAB2;",
      "SELECT * FROM TAB1, TAB2 WHERE TAB1.CODE = TAB2.CODE;",
      "SELECT * FROM TAB1, TAB2 WHERE TAB1.PCOLOR IN ('노랑','파랑','검정') OR TAB2.PSIZE IN ('소','중','대');",
      "SELECT * FROM TAB1 FULL OUTER JOIN TAB2 ON TAB1.CODE = TAB2.CODE;"
    ],
    "correctIndex": 2,
    "explanation": "각 SQL 의 결과 행 수: ① UNION ALL = 4 + 4 = 8건. ② INNER JOIN ON CODE = 매칭 4건. ③ 카티션 곱(4×4=16) 에서 OR 조건 만족 행 = TAB1 의 PCOLOR ∈ {노랑,파랑,검정}(3행) × TAB2(4행) ∪ TAB1(4행) × TAB2 의 PSIZE ∈ {소,중,대}(3행) = 12 + 12 - 9(중복) = 15건. ④ FULL OUTER JOIN ON CODE = 매칭 4건 (양쪽 미매칭 없음). ③ 이 15건으로 가장 많아 정답.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TAB1",
        "headers": [
          "CODE",
          "PCOLOR"
        ],
        "rows": [
          [
            "1",
            "빨강"
          ],
          [
            "2",
            "노랑"
          ],
          [
            "3",
            "파랑"
          ],
          [
            "4",
            "검정"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "TAB2",
        "headers": [
          "CODE",
          "PSIZE"
        ],
        "rows": [
          [
            "1",
            "소"
          ],
          [
            "2",
            "중"
          ],
          [
            "3",
            "대"
          ],
          [
            "4",
            "특대"
          ]
        ]
      }
    ]
  },
  {
    "id": 10324,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 25,
    "title": "아래 테이블에 INSERT ㉠~㉤ 을 차례로 실행할 때 성공하는 것만 모두 고른 것은?",
    "options": [
      "㉠",
      "㉠, ㉡, ㉢",
      "㉠, ㉡",
      "㉠, ㉡, ㉣"
    ],
    "correctIndex": 2,
    "explanation": "㉠ 의 100 은 BETWEEN 의 끝값이라 통과한다. CHECK 는 조건이 FALSE 일 때만 막고, NULL 처럼 결과가 UNKNOWN 이면 통과시킨다. 그래서 점수 NULL 인 ㉡ 도 들어간다. ㉢ 의 101 은 CHECK 위반, ㉣ 은 기본키에 NULL, ㉤ 은 기본키 1 중복이라 오류다. 정답은 ③번이다. ① 은 CHECK 가 NULL 도 막는다고 본 것, ② 는 101 이 범위 안이라고 본 것, ④ 는 기본키에 NULL 이 들어간다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "CREATE TABLE 성적 (\n  학번 NUMBER PRIMARY KEY,\n  점수 NUMBER\n       CHECK (점수 BETWEEN 0 AND 100)\n);\n\n-- ㉠\nINSERT INTO 성적 VALUES (1, 100);\n-- ㉡\nINSERT INTO 성적 VALUES (2, NULL);\n-- ㉢\nINSERT INTO 성적 VALUES (3, 101);\n-- ㉣\nINSERT INTO 성적 VALUES (NULL, 50);\n-- ㉤\nINSERT INTO 성적 VALUES (1, 50);"
      }
    ]
  },
  {
    "id": 10325,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 26,
    "title": "아래 두 테이블 A, B 에 대한 IN 서브쿼리와 동일한 결과를 반환하는 EXISTS 쿼리는?",
    "options": [
      "SELECT * FROM A WHERE EXISTS (SELECT 1 FROM B WHERE A.성별 = B.성별 AND A.번호 = B.번호);",
      "SELECT * FROM A WHERE EXISTS (SELECT 1 FROM B WHERE A.번호 = B.번호);",
      "SELECT * FROM A WHERE EXISTS (SELECT 1 FROM B WHERE A.성별 = B.성별);",
      "SELECT * FROM A WHERE NOT EXISTS (SELECT 1 FROM B WHERE A.성별 = B.성별 AND A.번호 = B.번호);"
    ],
    "correctIndex": 0,
    "explanation": "원본 IN 서브쿼리 `WHERE 번호 IN (SELECT 번호 FROM B WHERE A.성별 = B.성별)` 은 외부의 `A.번호 = B.번호` 조건과 서브쿼리 안의 `A.성별 = B.성별` 상관 조건을 동시에 요구한다. EXISTS 로 변환하려면 두 조건을 모두 EXISTS 절 안에 옮겨야 한다. ② 성별 조건 누락, ③ 번호 조건 누락, ④ NOT EXISTS 논리 반전.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "A 테이블",
        "headers": [
          "번호",
          "성별"
        ],
        "rows": [
          [
            "1",
            "M"
          ],
          [
            "2",
            "F"
          ],
          [
            "3",
            "M"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "B 테이블",
        "headers": [
          "번호",
          "성별"
        ],
        "rows": [
          [
            "1",
            "M"
          ],
          [
            "2",
            "M"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT * FROM A\nWHERE 번호 IN (SELECT 번호 FROM B WHERE A.성별 = B.성별);"
      }
    ]
  },
  {
    "id": 10326,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 27,
    "title": "아래 두 테이블 TAB1, TAB2 에 대한 SQL 의 결과로 옳은 것은?",
    "options": [
      "0",
      "2",
      "3",
      "5 (전체 건수)"
    ],
    "correctIndex": 1,
    "explanation": "서브쿼리에서 NVL 이 NULL 을 0 으로 바꾸므로 결과는 {1, 2, 0} 이고 NULL 이 없다. 그래서 NOT IN 이 정상 동작한다. TAB2 에서 3 과 4 는 1, 2, 0 어느 것과도 같지 않아 남고, TAB2 의 NULL 은 NULL <> 1 이 UNKNOWN 이라 남지 않는다. 결과 2 다(②). ① 0 은 TAB1 에 NULL 이 있으니 무조건 0건이라고 본 값(NVL 이 없었다면 맞다), ③ 3 은 TAB2 의 NULL 행까지 센 값, ④ 는 조건이 모두 참이라고 본 값이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TAB1 테이블",
        "headers": [
          "COL1"
        ],
        "rows": [
          [
            "1"
          ],
          [
            "2"
          ],
          [
            "NULL"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "TAB2 테이블",
        "headers": [
          "COL2"
        ],
        "rows": [
          [
            "1"
          ],
          [
            "2"
          ],
          [
            "3"
          ],
          [
            "NULL"
          ],
          [
            "4"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT COUNT(*)\nFROM   TAB2\nWHERE  COL2 NOT IN (SELECT NVL(COL1, 0) FROM TAB1);"
      }
    ]
  },
  {
    "id": 10327,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 28,
    "title": "COL 값이 A, B, C, NULL 인 TAB 테이블에 대한 조건 ㉠~㉣ 의 결과 행 수로 옳은 것은?",
    "options": [
      "2, 1, 2, 2",
      "2, 0, 1, 2",
      "3, 0, 1, 2",
      "2, 0, 2, 1"
    ],
    "correctIndex": 1,
    "explanation": "IN 은 '= A OR = B OR = NULL' 이라, 하나라도 참이면 참이다. ㉠ 은 A, B 의 2행이고, NULL 행은 = NULL 이 UNKNOWN 이라 잡히지 않는다. NOT IN 은 '<> A AND <> B AND <> NULL' 인데, <> NULL 이 늘 UNKNOWN 이라 ㉡ 은 0행이다. 목록에 NULL 이 없는 ㉢ 은 C 1행이고, NULL 행은 비교가 UNKNOWN 이라 빠진다. NULL 행을 잡으려면 ㉣ 처럼 IS NULL 을 따로 써야 하며 A, NULL 의 2행이다. 정답은 ②번이다. ① 은 NOT IN 이 NULL 을 무시한다고 본 것, ③ 은 IN 목록의 NULL 이 NULL 행을 잡는다고 본 것, ④ 는 NOT IN 이 NULL 행도 남긴다고 보고 IS NULL 을 놓친 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ㉠\nWHERE COL IN ('A', 'B', NULL)\n-- ㉡\nWHERE COL NOT IN ('A', 'B', NULL)\n-- ㉢\nWHERE COL NOT IN ('A', 'B')\n-- ㉣\nWHERE COL = 'A' OR COL IS NULL"
      }
    ]
  },
  {
    "id": 10328,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 29,
    "title": "아래 데이터에 대한 SQL 의 결과로 옳은 것은?",
    "options": [
      "(1, 10), (2, 10), (4, 40)",
      "(1, 15), (2, 30), (3, NULL), (4, 40)",
      "(1, 15), (2, 30), (4, 40)",
      "(1, 15), (2, 30), (3, 0), (4, 40)"
    ],
    "correctIndex": 2,
    "explanation": "AVG 와 COUNT(컬럼) 은 모두 NULL 을 빼고 계산한다. 그룹별로 보면 1 은 10·20 의 평균 15, 2 는 30 하나뿐이라 30, 4 는 (30 + 50) / 2 = 40 이다. 3 은 나이가 모두 NULL 이라 COUNT(나이) 가 0 이므로 HAVING COUNT(나이) >= 1 에서 그룹째 빠진다. 결과는 (1, 15), (2, 30), (4, 40) 이고 정답은 ③번이다. ① 은 NULL 을 0 으로 보고 세 행으로 나눈 AVG(NVL(나이, 0)) 의 값, ② 는 HAVING 의 COUNT(나이) 를 COUNT(*) 처럼 행 수로 세어 3 그룹을 남긴 값, ④ 는 거기에 더해 값이 모두 NULL 인 그룹의 AVG 를 0 으로 본 값이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TAB 테이블",
        "headers": [
          "나이_그룹",
          "나이"
        ],
        "rows": [
          [
            "1",
            "10"
          ],
          [
            "1",
            "20"
          ],
          [
            "1",
            "NULL"
          ],
          [
            "2",
            "30"
          ],
          [
            "2",
            "NULL"
          ],
          [
            "2",
            "NULL"
          ],
          [
            "3",
            "NULL"
          ],
          [
            "3",
            "NULL"
          ],
          [
            "4",
            "30"
          ],
          [
            "4",
            "50"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT 나이_그룹, AVG(나이) AS 평균_나이\nFROM   TAB\nGROUP  BY 나이_그룹\nHAVING COUNT(나이) >= 1\nORDER  BY 나이_그룹;"
      }
    ]
  },
  {
    "id": 10329,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 30,
    "title": "아래 결과(COL1 에만 NULL 이 있는 집계) 를 출력하기 위한 GROUPING SETS 로 적절한 것은?",
    "options": [
      "GROUPING SETS( (COL1, COL2), COL2 )",
      "GROUPING SETS( COL1, (COL1, COL2) )",
      "GROUPING SETS( (), COL1 )",
      "GROUPING SETS( COL1, COL2 )"
    ],
    "correctIndex": 0,
    "explanation": "결과에는 (COL1, COL2) 세부 집계 행과 COL2 만 보이고 COL1 이 NULL 인 소계 행이 함께 있어야 한다. ① `(COL1, COL2)` + `COL2` 조합이 정확히 이 둘을 산출한다. ② 는 COL1 소계가 추가로 나오고 COL2 소계가 빠지며, ③ 은 전체 합계와 COL1 소계만 산출, ④ 는 COL1 소계 + COL2 소계 두 행만 있고 (COL1, COL2) 세부 집계가 없다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "원본 데이터 (T)",
        "headers": [
          "COL1",
          "COL2",
          "COL3"
        ],
        "rows": [
          [
            "A",
            "10",
            "100"
          ],
          [
            "A",
            "20",
            "200"
          ],
          [
            "B",
            "10",
            "150"
          ],
          [
            "B",
            "20",
            "250"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT COL1, COL2, SUM(COL3)\nFROM   T\nGROUP BY GROUPING SETS ( (  ?  ) );"
      },
      {
        "type": "table",
        "caption": "출력 결과",
        "headers": [
          "COL1",
          "COL2",
          "SUM(COL3)"
        ],
        "rows": [
          [
            "A",
            "10",
            "100"
          ],
          [
            "A",
            "20",
            "200"
          ],
          [
            "B",
            "10",
            "150"
          ],
          [
            "B",
            "20",
            "250"
          ],
          [
            "NULL",
            "10",
            "250"
          ],
          [
            "NULL",
            "20",
            "450"
          ]
        ]
      }
    ]
  },
  {
    "id": 10330,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 31,
    "title": "아래 점수 테이블에 대한 SQL 에서 G 가 2 인 사람을 모두 고른 것은?",
    "options": [
      "D, E",
      "C, D",
      "C, D, E",
      "D, E, F"
    ],
    "correctIndex": 0,
    "explanation": "NTILE(3) 은 정렬된 행을 3개 그룹으로 최대한 고르게 나누고, 남는 행은 앞 그룹부터 하나씩 더 준다. 7행을 3으로 나누면 몫 2, 나머지 1 이라 그룹 크기는 3, 2, 2 다. 점수 내림차순은 A, B, C, D, E, F, G 이므로 1그룹은 A·B·C, 2그룹은 D·E, 3그룹은 F·G 다. 정답은 ①번이다. ② 는 남는 행을 마지막 그룹에 준 것(2, 2, 3), ③ 은 남는 행을 가운데 그룹에 준 것(2, 3, 2), ④ 는 3, 3, 1 로 나눈 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "점수",
        "headers": [
          "이름",
          "점수"
        ],
        "rows": [
          [
            "C",
            "80"
          ],
          [
            "F",
            "65"
          ],
          [
            "A",
            "90"
          ],
          [
            "G",
            "60"
          ],
          [
            "D",
            "75"
          ],
          [
            "B",
            "85"
          ],
          [
            "E",
            "70"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT 이름,\n       NTILE(3) OVER (\n         ORDER BY 점수 DESC) AS G\nFROM   점수;"
      }
    ]
  },
  {
    "id": 10331,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 32,
    "title": "아래 사원 테이블에 대한 SQL 결과에서 D 의 C1, C2 값으로 옳은 것은?",
    "options": [
      "C1 4, C2 4",
      "C1 2, C2 4",
      "C1 5, C2 3",
      "C1 5, C2 4"
    ],
    "correctIndex": 3,
    "explanation": "RANGE 는 정렬 기준 값의 범위로, ROWS 는 행 개수로 윈도우를 정한다. D 의 연봉은 300 이라 C1 의 범위는 300 - 100 = 200 이상 300 + 200 = 500 이하이고, 경계값도 포함되므로 B·C(200), D(300), E(450), F(500) 의 5명이다. C2 는 연봉 순으로 놓았을 때 D 의 바로 앞 1행(C)과 D, 뒤 2행(E, F)을 세므로 4다. B 와 C 는 연봉이 같아 둘의 순서는 정해지지 않지만, D 의 앞 1행이 B 이든 C 이든 개수는 같다. 정답은 ④번이다. ① 은 C1 도 행 개수로 본 값, ② 는 범위의 경계값 200·500 을 빼고 센 값, ③ 은 C2 에서 현재 행 D 를 빼고 센 값이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "사원",
        "headers": [
          "이름",
          "연봉"
        ],
        "rows": [
          [
            "A",
            "100"
          ],
          [
            "B",
            "200"
          ],
          [
            "C",
            "200"
          ],
          [
            "D",
            "300"
          ],
          [
            "E",
            "450"
          ],
          [
            "F",
            "500"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT 이름, 연봉,\n  COUNT(*) OVER (\n    ORDER BY 연봉\n    RANGE BETWEEN 100 PRECEDING\n              AND 200 FOLLOWING\n  ) AS C1,\n  COUNT(*) OVER (\n    ORDER BY 연봉\n    ROWS BETWEEN 1 PRECEDING\n             AND 2 FOLLOWING\n  ) AS C2\nFROM 사원;"
      }
    ]
  },
  {
    "id": 10332,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 33,
    "title": "아래 EMP 테이블에 대한 SQL 에서 7780 번 직원의 세 가지 순위 (ROW_NUMBER, RANK, DENSE_RANK) 결과로 옳은 것은? (동점 시 EMP_ID 작은 쪽이 먼저)",
    "options": [
      "4, 4, 3",
      "3, 3, 3",
      "4, 4, 4",
      "3, 4, 3"
    ],
    "correctIndex": 0,
    "explanation": "SALARY 오름차순으로 정렬하면 7784(2000) → 7782(3000), 7783(3000) → 7780(4000), 7781(4000) 순서. 7780/7781 동점이지만 EMP_ID 작은 7780 이 먼저 4 위치. ROW_NUMBER=4 (4 번째 행), RANK=4 (동점 시 같은 순위, 7782/7783 이 2 위로 두 명이라 다음은 4 위), DENSE_RANK=3 (건너뛰지 않음 — 1, 2, 3, 3 식). 정답 ① (4, 4, 3). ② 3, 3, 3 은 3000 동점 두 명을 한 자리로 센 결과, ③ 은 DENSE_RANK 도 건너뛴다고 본 결과다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "EMP_ID",
          "SALARY"
        ],
        "rows": [
          [
            "7780",
            "4000"
          ],
          [
            "7781",
            "4000"
          ],
          [
            "7782",
            "3000"
          ],
          [
            "7783",
            "3000"
          ],
          [
            "7784",
            "2000"
          ]
        ],
        "caption": "EMP 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT EMP_ID,\n       ROW_NUMBER() OVER (ORDER BY SALARY) AS ROW_NUM,\n       RANK()       OVER (ORDER BY SALARY) AS RANK_NUM,\n       DENSE_RANK() OVER (ORDER BY SALARY) AS DRANK_NUM\nFROM   EMP;"
      }
    ]
  },
  {
    "id": 10333,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 34,
    "title": "아래 수강 테이블에서 '강의 100 과 101 을 모두 듣는 학번' 을 찾으려는 SQL ㉠~㉣ 의 결과 행 수로 옳은 것은?",
    "options": [
      "4, 2, 2, 2",
      "4, 0, 2, 2",
      "2, 0, 2, 2",
      "4, 0, 2, 3"
    ],
    "correctIndex": 1,
    "explanation": "㉠ 의 IN 은 100 이나 101 중 하나라도 들으면 고르므로 S1~S4 모두 4행이다. ㉡ 은 한 행의 강의번호가 동시에 100 이면서 101 일 수 없어 0행이다. '모두 듣는다' 는 여러 행에 걸친 조건이라 한 행씩 보는 WHERE 만으로는 표현할 수 없다. ㉢ 은 100 을 듣는 학번과 101 을 듣는 학번의 교집합이라 S1, S4 의 2행, ㉣ 은 두 강의 중 서로 다른 강의를 2개 들은 학번이라 역시 S1, S4 의 2행이다. 정답은 ②번이다. ① 은 ㉡ 이 원하는 결과를 낸다고 본 것, ③ 은 IN 이 둘 다 듣는 사람만 고른다고 본 것, ④ 는 S4 가 102 도 들어 ㉣ 의 개수가 3 이 된다고 본 것이다(WHERE 로 100·101 만 남긴 뒤 센다).",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "수강",
        "headers": [
          "학번",
          "강의번호"
        ],
        "rows": [
          [
            "S1",
            "100"
          ],
          [
            "S1",
            "101"
          ],
          [
            "S2",
            "100"
          ],
          [
            "S3",
            "101"
          ],
          [
            "S4",
            "100"
          ],
          [
            "S4",
            "101"
          ],
          [
            "S4",
            "102"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT DISTINCT 학번 FROM 수강\nWHERE  강의번호 IN (100, 101);\n-- ㉡\nSELECT 학번 FROM 수강\nWHERE  강의번호 = 100\nAND    강의번호 = 101;\n-- ㉢\nSELECT 학번 FROM 수강\nWHERE 강의번호 = 100\nINTERSECT\nSELECT 학번 FROM 수강\nWHERE 강의번호 = 101;\n-- ㉣\nSELECT 학번 FROM 수강\nWHERE  강의번호 IN (100, 101)\nGROUP  BY 학번\nHAVING COUNT(DISTINCT 강의번호) = 2;"
      }
    ]
  },
  {
    "id": 10334,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 35,
    "title": "아래 T1 테이블에 대한 SELF JOIN 등수 쿼리(T2 는 T1 의 별칭)에서 빈칸 ⓐ, ⓑ 에 들어갈 내용으로 옳은 것은?",
    "options": [
      "ⓐ COUNT(*) + 1 / ⓑ T1.점수 < T2.점수",
      "ⓐ COUNT(*) / ⓑ T1.점수 = T2.점수",
      "ⓐ COUNT(*) + 1 / ⓑ T1.점수 > T2.점수",
      "ⓐ COUNT(*) - 1 / ⓑ T1.점수 <= T2.점수"
    ],
    "correctIndex": 0,
    "explanation": "자기보다 점수가 높은 사람 수에 1 을 더하면 순위가 된다. 따라서 ⓐ 는 `COUNT(*) + 1`, ⓑ 의 비교 조건은 `T1.점수 < T2.점수` 가 되어야 한다. ② 는 점수가 같은 사람 수, ③ 은 자기보다 점수가 낮은 사람 수 + 1 이라 순위가 거꾸로 되고, ④ 는 자기 이상인 인원 − 1 이라 1등이 0 이 된다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T1 테이블",
        "headers": [
          "이름",
          "점수"
        ],
        "rows": [
          [
            "홍길동",
            "90"
          ],
          [
            "김철수",
            "85"
          ],
          [
            "이영희",
            "95"
          ],
          [
            "박지성",
            "80"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT 이름, 점수,\n       (SELECT  ⓐ \n        FROM   T1 T2\n        WHERE   ⓑ ) AS 순위\nFROM   T1\nORDER BY 순위;"
      }
    ]
  },
  {
    "id": 10335,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 36,
    "title": "T 의 급여가 300, 100, 500, 200 순서로 읽힌다고 할 때, 아래 SQL ㉠, ㉡, ㉢ 의 결과로 옳은 것은? (Oracle 기준)",
    "options": [
      "500·300 / 500·300 / 1행",
      "300·100 / 500·300 / 0행",
      "500·300 / 300·100 / 0행",
      "300·100 / 500·300 / 1행"
    ],
    "correctIndex": 1,
    "explanation": "ROWNUM 은 WHERE 단계에서 행을 읽는 순서대로 붙고, ORDER BY 는 그 뒤에 처리된다. ㉠ 은 먼저 읽힌 300, 100 두 행을 고른 다음 정렬해 300, 100 이다. 급여가 큰 순서로 2건을 얻으려면 ㉡ 처럼 인라인 뷰에서 먼저 정렬하고 바깥에서 ROWNUM 으로 잘라야 하며, 결과는 500, 300 이다. ㉢ 은 첫 행이 ROWNUM 1 을 받아 '= 2' 에 걸러지고, 그다음 행도 다시 1 을 받으므로 어떤 행도 2 가 되지 못해 0행이다. 정답은 ②번이다. ① 은 ㉠ 에서도 정렬이 먼저라고 본 것, ③ 은 ㉠ 과 ㉡ 을 바꿔 본 것, ④ 는 ROWNUM = 2 가 두 번째 행을 고른다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT 급여 FROM T\nWHERE  ROWNUM <= 2\nORDER  BY 급여 DESC;\n-- ㉡\nSELECT 급여\nFROM  (SELECT 급여 FROM T\n       ORDER BY 급여 DESC)\nWHERE  ROWNUM <= 2;\n-- ㉢\nSELECT 급여 FROM T\nWHERE  ROWNUM = 2;"
      }
    ]
  },
  {
    "id": 10336,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 37,
    "title": "아래 EMP_TEST 테이블에 대한 UPDATE SQL 의 동작에 대한 설명으로 옳은 것은?",
    "options": [
      "DEPARTMENT_ID 가 60 인 사원의 SALARY 만 10% 인상되고 그 외에는 변경되지 않는다.",
      "WHERE 절이 생략되어 UPDATE EMP_TEST SET SALARY = SALARY * 1.1 WHERE DEPARTMENT_ID = 60 과 동일한 의미가 된다.",
      "상관 서브쿼리에 비집계 컬럼이 사용되어 SQL 컴파일 단계에서 오류가 발생한다.",
      "DEPARTMENT_ID 가 60 이 아닌 모든 사원의 월급이 NULL 로 갱신된다."
    ],
    "correctIndex": 3,
    "explanation": "WHERE 절이 없는 UPDATE 이므로 모든 행에 대해 서브쿼리가 평가된다. DEPARTMENT_ID=60 조건을 만족하지 못하면 서브쿼리 결과가 NULL 이 된다. ① WHERE 가 없어 60번 부서가 아닌 행도 모두 갱신되고(NULL), ② WHERE DEPARTMENT_ID = 60 을 붙인 UPDATE 와는 결과가 다르며, ③ 연관 서브쿼리가 행마다 한 행 이하를 돌려주므로 오류가 나지 않는다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP_TEST 테이블",
        "headers": [
          "EMPLOYEE_ID",
          "DEPARTMENT_ID",
          "SALARY"
        ],
        "rows": [
          [
            "100",
            "60",
            "5000"
          ],
          [
            "101",
            "60",
            "4000"
          ],
          [
            "102",
            "50",
            "3000"
          ],
          [
            "103",
            "70",
            "3500"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "UPDATE EMP_TEST A\nSET SALARY = (SELECT SALARY * 1.1\n              FROM   EMP_TEST B\n              WHERE  A.EMPLOYEE_ID = B.EMPLOYEE_ID\n              AND    B.DEPARTMENT_ID = 60);"
      }
    ]
  },
  {
    "id": 10337,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 38,
    "title": "아래 제약 조건을 가진 T 테이블에 대해 SQL 을 수행한 뒤 COL2 의 합계는?",
    "options": [
      "500",
      "600",
      "770",
      "850"
    ],
    "correctIndex": 2,
    "explanation": "PK 와 CHECK 제약을 위반하는 문장은 실패해 테이블 상태에 반영되지 않는다. 첫 번째 INSERT(1, 380) 만 성공해 (1, 380) 행이 들어가고, UPDATE(COL2=600) 는 CHECK(COL2 < 500) 위반으로 롤백되며, INSERT(1, 200) 은 PK 중복으로 실패한다. 마지막 INSERT(2, 390) 가 성공해 (2, 390) 행이 추가된다. 따라서 SELECT SUM(COL2) 는 380 + 390 = 770 을 반환한다. 정답은 ③ 번이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T 테이블 제약 조건 (초기 데이터 없음)",
        "headers": [
          "컬럼",
          "제약"
        ],
        "rows": [
          [
            "COL1",
            "PRIMARY KEY"
          ],
          [
            "COL2",
            "CHECK (COL2 < 500)"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "INSERT INTO T VALUES (1, 380);\nUPDATE T SET COL2 = 600 WHERE COL1 = 1;\nINSERT INTO T VALUES (1, 200);\nINSERT INTO T VALUES (2, 390);\n\nSELECT SUM(COL2) FROM T;"
      }
    ]
  },
  {
    "id": 10338,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 39,
    "title": "아래 T 테이블에 대한 SQL 의 결과로 옳은 것은? (Oracle 기준)",
    "options": [
      "부서1 18000 / 부서2 11300 / 부서3 NULL",
      "부서3 NULL / 부서1 18000 / 부서2 11300",
      "부서1 18000 / 부서2 11300 / 부서3 0",
      "부서3 NULL / 부서1 18000 / 부서2 11300 / NULL 2000"
    ],
    "correctIndex": 1,
    "explanation": "GROUP BY COL1 로 묶으면 부서1 은 5000 + 8000 + 5000 = 18000, 부서2 는 NULL 을 빼고 4000 + 7300 = 11300, 부서3 은 매출이 모두 NULL 이라 SUM 이 NULL 이다. COL1 이 NULL 인 행도 하나의 그룹(2000)이 된다. HAVING COUNT(*) >= 2 는 매출이 NULL 인 행까지 행 수로 세므로 부서1(3)·부서2(3)·부서3(2)은 남고, 한 행뿐인 NULL 그룹은 빠진다. ORDER BY 총매출 DESC 에서 Oracle 은 내림차순일 때 NULL 을 가장 큰 값처럼 맨 앞에 두므로 부서3 NULL / 부서1 18000 / 부서2 11300 이다. 정답은 ②번이다. ① 은 내림차순에서도 NULL 이 맨 뒤라고 본 순서, ③ 은 값이 모두 NULL 인 그룹의 SUM 을 0 으로 본 결과, ④ 는 HAVING 을 놓쳐 한 행뿐인 NULL 그룹까지 남긴 결과다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T 테이블",
        "headers": [
          "COL1",
          "매출"
        ],
        "rows": [
          [
            "부서1",
            "5000"
          ],
          [
            "부서2",
            "4000"
          ],
          [
            "부서1",
            "8000"
          ],
          [
            "부서2",
            "7300"
          ],
          [
            "부서1",
            "5000"
          ],
          [
            "부서3",
            "NULL"
          ],
          [
            "부서3",
            "NULL"
          ],
          [
            "NULL",
            "2000"
          ],
          [
            "부서2",
            "NULL"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT COL1, SUM(매출) AS 총매출\nFROM   T\nGROUP  BY COL1\nHAVING COUNT(*) >= 2\nORDER  BY 총매출 DESC;"
      }
    ]
  },
  {
    "id": 10339,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 40,
    "title": "아래 SQL 의 결과로 옳은 것은?",
    "options": [
      "전체 행에서 모두 NULL 반환",
      "각 행별로 정상적인 집계 결과 반환",
      "행별로 오류 발생",
      "B 와 C 행의 SUM 은 NULL 반환"
    ],
    "correctIndex": 3,
    "explanation": "A 행은 10 + 1 = 11 이라 SUM 이 11 이다. B 행은 20 + NULL, C 행은 NULL + 3 으로 덧셈 결과가 NULL 이고, 그룹에 행이 하나뿐이라 SUM 도 NULL 이다(④). 오류는 나지 않고(③), MIN·MAX(COL2) 는 B 가 20, C 는 NULL 이다. ① A 는 11 로 계산되므로 전체가 NULL 은 아니고, ② B·C 는 NULL 이 섞여 SUM 이 NULL 이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "COL1",
          "COL2",
          "COL3"
        ],
        "rows": [
          [
            "A",
            "10",
            "1"
          ],
          [
            "B",
            "20",
            "NULL"
          ],
          [
            "C",
            "NULL",
            "3"
          ]
        ],
        "caption": "T 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT COL1, MIN(COL2), MAX(COL2), SUM(COL2 + COL3)\nFROM   T\nGROUP BY COL1;"
      }
    ]
  },
  {
    "id": 10340,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 41,
    "title": "빈 테이블 T 에 아래 SQL 을 실행한 뒤 1 만 남게 하려면 ( ㉠ ), ( ㉡ ) 에 들어갈 명령으로 옳은 것은?",
    "options": [
      "SAVEPOINT S / SAVEPOINT T",
      "SAVEPOINT T / SAVEPOINT S",
      "COMMIT / SAVEPOINT S",
      "SAVEPOINT S / COMMIT"
    ],
    "correctIndex": 0,
    "explanation": "ROLLBACK TO S 는 저장점 S 이후의 작업만 취소하고, 마지막 COMMIT 이 그때까지 남은 작업을 확정한다. ① 처럼 1 을 넣은 직후 S 를 만들면 2·3 이 취소되어 1 만 남는다(뒤의 SAVEPOINT T 는 결과에 영향이 없다). 정답은 ①번이다. ② 는 S 가 2 다음에 있어 3 만 취소되므로 1, 2 가 남는다. ③ 은 1 을 이미 COMMIT 하고 2 다음에 S 를 만들어 역시 1, 2 가 남는다. ④ 는 COMMIT 하는 순간 그 앞의 저장점 S 가 사라져, ROLLBACK TO S 에서 저장점이 없다는 오류가 난다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "INSERT INTO T VALUES (1);\n( ㉠ );\nINSERT INTO T VALUES (2);\n( ㉡ );\nINSERT INTO T VALUES (3);\nROLLBACK TO S;\nCOMMIT;"
      }
    ]
  },
  {
    "id": 10341,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 42,
    "title": "아래 주문/주문내역 테이블에 대한 SQL 의 정렬 결과에 대한 설명으로 옳은 것은?",
    "options": [
      "계좌번호 오름차순 정렬",
      "계좌번호가 NULL 인 행이 먼저 출력",
      "주문번호 기준 내림차순 정렬",
      "계좌번호 내림차순 정렬"
    ],
    "correctIndex": 3,
    "explanation": "ORDER BY 계좌번호 DESC 로 명시되었으므로 결과는 계좌번호 내림차순으로 정렬된다. NULL 위치는 DBMS 별 기본 동작에 따르며 별도의 NULLS FIRST 지정이 없다. ① 은 DESC 를 무시한 결과, ② 계좌번호에 NULL 이 없으며, ③ 정렬 기준은 주문번호가 아니라 계좌번호다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "주문 테이블",
        "headers": [
          "번호",
          "고객명",
          "계좌번호"
        ],
        "rows": [
          [
            "1",
            "홍길동",
            "A100"
          ],
          [
            "2",
            "김철수",
            "A200"
          ],
          [
            "3",
            "이영희",
            "A150"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "주문내역 테이블",
        "headers": [
          "번호",
          "상품",
          "수량"
        ],
        "rows": [
          [
            "1",
            "노트북",
            "1"
          ],
          [
            "2",
            "마우스",
            "2"
          ],
          [
            "3",
            "키보드",
            "1"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT *\nFROM   주문 JOIN 주문내역 ON 주문.번호 = 주문내역.번호\nORDER BY 계좌번호 DESC;"
      }
    ]
  },
  {
    "id": 10342,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 43,
    "title": "사원 테이블이 외래키로 부서 테이블을 참조하고 있다. 아래 ㉠ 과 ㉡ 을 각각 실행했을 때의 결과로 옳은 것은? (Oracle 기준)",
    "options": [
      "㉠ 은 성공하고 사원 행도 함께 삭제된다.",
      "㉠ 은 오류, ㉡ 은 성공하고 사원의 외래키 제약만 사라져 사원 데이터는 남는다.",
      "㉠ 은 오류, ㉡ 은 성공하고 사원 테이블도 함께 삭제된다.",
      "㉠ 은 성공하고, ㉡ 은 참조하는 테이블이 있어 오류다."
    ],
    "correctIndex": 1,
    "explanation": "다른 테이블의 외래키가 참조하고 있는 부모 테이블은 그냥 DROP 할 수 없어 ㉠ 은 오류가 난다. CASCADE CONSTRAINTS 를 붙이면 부서를 지우면서, 부서를 참조하던 사원의 외래키 제약조건도 함께 지운다. 사원 테이블과 그 데이터는 그대로 남고 부서번호 칼럼도 남지만, 더 이상 참조 무결성 검사는 하지 않는다. 정답은 ②번이다. ① 은 ON DELETE CASCADE 처럼 자식 행이 지워진다고 본 것, ③ 은 자식 테이블까지 지운다고 본 것, ④ 는 두 명령의 결과를 거꾸로 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ㉠\nDROP TABLE 부서;\n-- ㉡\nDROP TABLE 부서 CASCADE CONSTRAINTS;"
      }
    ]
  },
  {
    "id": 10343,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 44,
    "title": "분류 값이 A, B, C, NULL 인 T 테이블에 아래 식 ㉠, ㉡, ㉢ 을 적용했을 때 '취급안함' 이 나오는 행 수로 옳은 것은? (Oracle 기준)",
    "options": [
      "1, 1, 1",
      "2, 2, 2",
      "2, 1, 2",
      "1, 2, 2"
    ],
    "correctIndex": 2,
    "explanation": "CASE 는 WHEN 조건이 참일 때만 THEN 을 고르고, 거짓이거나 UNKNOWN 이면 ELSE 로 간다. ㉠ 은 C 는 거짓, NULL 은 UNKNOWN 이라 둘 다 ELSE 의 '취급안함' 이 되어 2행이다. ㉡ 은 NOT IN 조건이 C 에서는 참이지만 NULL 에서는 UNKNOWN 이라, NULL 행은 ELSE 의 '취급' 이 되어 '취급안함' 은 1행뿐이다. ㉢ 의 DECODE 는 A·B 와 같지 않은 C 와 NULL 이 모두 기본값 '취급안함' 이 되어 2행이다. 같은 뜻처럼 보여도 조건을 뒤집으면 NULL 행의 결과가 달라진다. 정답은 ③번이다. ① 은 NULL 이 어디에도 걸리지 않는다고 본 것, ② 는 NOT IN 도 NULL 을 참으로 본 것, ④ 는 ㉠ 에서 NULL 이 THEN 으로 간다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ㉠\nCASE WHEN 분류 IN ('A', 'B')\n     THEN '취급' ELSE '취급안함' END\n-- ㉡\nCASE WHEN 분류 NOT IN ('A', 'B')\n     THEN '취급안함' ELSE '취급' END\n-- ㉢\nDECODE(분류, 'A', '취급',\n             'B', '취급', '취급안함')"
      }
    ]
  },
  {
    "id": 10344,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 45,
    "title": "아래 T 테이블에 대한 조건 ㉠~㉣ 의 결과 행 수로 옳은 것은? (문자 비교는 대소문자를 구분)",
    "options": [
      "2, 3, 3, 1",
      "3, 3, 4, 1",
      "2, 3, 5, 2",
      "2, 2, 3, 1"
    ],
    "correctIndex": 0,
    "explanation": "LIKE 는 대소문자를 구분한다. ㉠ 의 'A%' 는 대문자 A 로 시작하는 APPLE, AVOCADO 의 2행이다. ㉡ 은 UPPER 로 모두 대문자로 바꾼 뒤 비교해 apple 까지 3행이다. ㉢ 의 '%A%' 는 어디든 대문자 A 가 있는 APPLE, BANANA, AVOCADO 의 3행이고, 소문자만 있는 apple·mango 는 빠진다. ㉣ 의 '_A%' 는 두 번째 글자가 A 인 BANANA 1행이다. 정답은 ①번이다. ② 는 LIKE 가 대소문자를 구분하지 않는다고 본 것, ③ 은 ㉢ 에서 소문자 a 도 잡는다고 본 것, ④ 는 UPPER 를 해도 결과가 같다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T",
        "headers": [
          "COL1"
        ],
        "rows": [
          [
            "APPLE"
          ],
          [
            "apple"
          ],
          [
            "BANANA"
          ],
          [
            "AVOCADO"
          ],
          [
            "mango"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- ㉠\nWHERE COL1 LIKE 'A%'\n-- ㉡\nWHERE UPPER(COL1) LIKE 'A%'\n-- ㉢\nWHERE COL1 LIKE '%A%'\n-- ㉣\nWHERE COL1 LIKE '_A%'"
      }
    ]
  },
  {
    "id": 10345,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 46,
    "title": "아래 T 테이블에 대한 SQL 의 출력 결과(COL1, 함수 결과) 가 다음과 같을 때 빈칸 윈도우 함수로 옳은 것은?",
    "options": [
      "LAG(COL1) OVER (ORDER BY COL1)",
      "LEAD(COL1) OVER (ORDER BY COL1)",
      "ROW_NUMBER() OVER (ORDER BY COL1)",
      "RANK() OVER (ORDER BY COL1)"
    ],
    "correctIndex": 0,
    "explanation": "출력 결과가 (1, NULL), (2, 1), (3, 2) 형태 — 두 번째 컬럼이 '직전 행의 COL1 값' 임을 의미. LAG 는 이전 행의 값을 반환하며 첫 행은 NULL. ② LEAD 는 다음 행 값이라 (1, 2), (2, 3), (3, NULL) 가 되어 반대. ③ ROW_NUMBER 는 1, 2, 3 (NULL 없음). ④ RANK 도 동일하게 1, 2, 3. 정답 ① LAG.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T 테이블 (원본 입력 데이터)",
        "headers": [
          "COL1"
        ],
        "rows": [
          [
            "1"
          ],
          [
            "2"
          ],
          [
            "3"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT COL1,\n       (  ?  ) AS 함수결과\nFROM   T;"
      },
      {
        "type": "table",
        "caption": "기대 출력 결과 (COL1, 함수결과)",
        "headers": [
          "COL1",
          "함수결과"
        ],
        "rows": [
          [
            "1",
            "NULL"
          ],
          [
            "2",
            "1"
          ],
          [
            "3",
            "2"
          ]
        ]
      }
    ]
  },
  {
    "id": 10346,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 47,
    "title": "아래 COUNT 집계 SQL 의 결과로 옳은 것은?",
    "options": [
      "8",
      "9",
      "10",
      "11"
    ],
    "correctIndex": 2,
    "explanation": "COUNT(*) = 5, COUNT(COL1) = 3 (NULL 제외), COUNT(DISTINCT COL2) = 2 (X, Y). 합계 10. ④ 11 은 COUNT(DISTINCT COL2) 가 NULL 도 하나의 값으로 센다고 본 값이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "COL1",
          "COL2"
        ],
        "rows": [
          [
            "A",
            "X"
          ],
          [
            "B",
            "X"
          ],
          [
            "NULL",
            "Y"
          ],
          [
            "C",
            "Y"
          ],
          [
            "NULL",
            "NULL"
          ]
        ],
        "caption": "T 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT COUNT(*) + COUNT(COL1)\n     + COUNT(DISTINCT COL2)\nFROM T;"
      }
    ]
  },
  {
    "id": 10347,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 48,
    "title": "입사일(문자 'YYYYMMDD')이 20240301, 20240915, 20250102, 20251120, 20251201 인 사원 테이블에 대한 SQL ㉠, ㉡, ㉢ 의 결과로 옳은 것은? ('㉠ 행 수 / ㉡ / ㉢', Oracle 19c 기준)",
    "options": [
      "5 / 오류 / 오류",
      "2 / 2행 / 2행",
      "2 / 2행 / 오류",
      "2 / 오류 / 오류"
    ],
    "correctIndex": 3,
    "explanation": "단일 행 함수는 GROUP BY 에도 쓸 수 있다. ㉠ 은 입사일 앞 네 글자(연도)로 묶여 2024 2명, 2025 3명의 2행이다. SELECT 절의 별칭은 GROUP BY 보다 나중에 정해지므로 GROUP BY 에 별칭 연도를 쓴 ㉡ 은 오류다. ㉢ 은 GROUP BY 가 앞 네 글자인데 SELECT 는 앞 여섯 글자(연월)를 보여 달라고 해서, 한 그룹 안에 값이 여러 개라 오류다. 정답은 ④번이다. ① 은 함수를 쓰면 행마다 따로 묶인다고 본 것, ②·③ 은 GROUP BY 에 별칭을 쓸 수 있다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT SUBSTR(입사일, 1, 4) AS 연도,\n       COUNT(*)\nFROM   사원\nGROUP  BY SUBSTR(입사일, 1, 4);\n-- ㉡\nSELECT SUBSTR(입사일, 1, 4) AS 연도,\n       COUNT(*)\nFROM   사원\nGROUP  BY 연도;\n-- ㉢\nSELECT SUBSTR(입사일, 1, 6),\n       COUNT(*)\nFROM   사원\nGROUP  BY SUBSTR(입사일, 1, 4);"
      }
    ]
  },
  {
    "id": 10348,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 49,
    "title": "아래 두 테이블에 대한 SQL 의 결과로 옳은 것은? ('행 수, 다의 등급, 라의 등급' 순서)",
    "options": [
      "5행, 2, 3",
      "4행, 3, 3",
      "4행, 2, 2",
      "4행, 2, 3"
    ],
    "correctIndex": 3,
    "explanation": "INNER JOIN 의 조건은 = 가 아니어도 되고, 두 칼럼 이름이 같을 필요도 없다. 이처럼 범위로 짝을 짓는 것을 비등가 조인이라 한다. BETWEEN 은 양 끝 값을 포함하므로 399 인 다는 2등급(200~399), 400 인 라는 3등급(400~599)이다. 700 인 마는 어느 범위에도 들지 않아 INNER JOIN 결과에서 빠지고, 결과는 4행이다. 정답은 ④번이다. ① 은 짝이 없는 행도 남는다고 본 것, ②·③ 은 BETWEEN 의 경계값을 한쪽 등급으로 잘못 붙인 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "등급",
        "headers": [
          "등급",
          "하한",
          "상한"
        ],
        "rows": [
          [
            "1",
            "0",
            "199"
          ],
          [
            "2",
            "200",
            "399"
          ],
          [
            "3",
            "400",
            "599"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "사원",
        "headers": [
          "이름",
          "급여"
        ],
        "rows": [
          [
            "가",
            "150"
          ],
          [
            "나",
            "200"
          ],
          [
            "다",
            "399"
          ],
          [
            "라",
            "400"
          ],
          [
            "마",
            "700"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT E.이름, G.등급\nFROM   사원 E\n       INNER JOIN 등급 G\n       ON E.급여 BETWEEN G.하한\n                     AND G.상한;"
      }
    ]
  },
  {
    "id": 10349,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 50,
    "title": "아래 INNER JOIN 결과로 옳은 것은?",
    "options": [
      "가, A 행만 반환",
      "나, B 행이 조건을 만족하지 못해 공집합",
      "T1 의 '다' 행 반환",
      "전체 행 반환"
    ],
    "correctIndex": 1,
    "explanation": "T1.COL2 = T2.COL2 로 짝이 맞는 행은 (가, A)–(2, A) 와 (다, C)–(3, C) 두 쌍이다. (가, A) 는 T1.COL3 = 2 라 COL3 >= 3 을 만족하지 못하고, (다, C) 는 COL3 이 NULL 인 데다 T2.COL2 = 'C' 가 IN ('A', 'B') 에 없다. T1 의 (나, B) 는 T2 에 B 가 없어 처음부터 짝이 없다. 남는 행이 없어 결과는 공집합이다(②). ① 은 COL3 >= 3 조건을, ③ 은 IN ('A', 'B') 조건과 NULL 비교를 놓친 결과, ④ 는 WHERE 조건을 모두 무시한 결과다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T1",
        "headers": [
          "COL1",
          "COL2",
          "COL3"
        ],
        "rows": [
          [
            "가",
            "A",
            "2"
          ],
          [
            "나",
            "B",
            "3"
          ],
          [
            "다",
            "C",
            "NULL"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "T2",
        "headers": [
          "COL1",
          "COL2"
        ],
        "rows": [
          [
            "2",
            "A"
          ],
          [
            "3",
            "C"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT *\nFROM   T1 INNER JOIN T2 ON T1.COL2 = T2.COL2\nWHERE  1 = 1\nAND    T1.COL3 >= 3\nAND    T2.COL2 IN ('A', 'B');"
      }
    ]
  }
];
