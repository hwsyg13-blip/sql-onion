// Auto-generated from PDF + blog + scripts/authored/round-51.json
// 제51회 — 2023년 11월 · 50문항
// ⚠ 직접 편집 금지. 출처별 데이터를 고친 뒤 'node scripts/build-quiz-bank.mjs' 재실행.
import type { QuizQuestion } from '../quizBank';

export const ROUND_51: QuizQuestion[] = [
  {
    "id": 10450,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "1과목",
    "number": 1,
    "title": "아래 상황 ㉠~㉣ 중 부모와 자식을 비식별자 관계로 연결하는 것이 알맞은 것만 모두 고른 것은?",
    "options": [
      "㉠, ㉡",
      "㉡, ㉢",
      "㉡, ㉢, ㉣",
      "㉠, ㉢, ㉣"
    ],
    "correctIndex": 2,
    "explanation": "비식별자 관계는 부모의 기본키를 자식의 일반 칼럼(외래키)으로만 받는다. 부모와 자식이 따로 생기고 따로 사라지는 경우(㉡), 부모 없이도 자식이 생길 수 있어 외래키에 NULL 이 들어가는 경우(㉢), 식별자 관계가 길게 이어져 자식의 기본키가 너무 커진 경우(㉣)에 쓴다. 정답은 ③번이다. ㉠ 은 자식이 부모에 완전히 묶여 있고 부모 키로 늘 찾으므로, 부모 키를 자식 기본키에 넣는 식별자 관계가 알맞다. ①·④ 는 ㉠ 을 비식별로 본 것, ② 는 기본키가 길어지는 문제를 놓친 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "㉠ 주문상세는 주문 없이 생길 수 없고, 늘 주문번호와 함께 조회한다.\n㉡ 사원이 퇴사해 사원 행을 지워도, 그 사원이 처리한 주문 기록은 남겨야 한다.\n㉢ 비회원도 게시글을 쓸 수 있어, 작성자 회원번호가 없는 글이 있다.\n㉣ 식별자 관계가 다섯 단계 이어져 맨 아래 자식의 기본키가 6칼럼이 되었다."
      }
    ]
  },
  {
    "id": 10451,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "1과목",
    "number": 2,
    "title": "아래 ERD 해석에 대한 설명 중 적절하지 않은 것은? (IE 표기법)",
    "options": [
      "고객은 주문을 하지 않을 수도 있다.",
      "주문은 반드시 하나 이상의 주문상세를 가진다.",
      "한 번도 주문되지 않은 상품도 존재할 수 있다.",
      "배송은 주문 없이 단독으로 존재할 수 있다."
    ],
    "correctIndex": 3,
    "explanation": "주문-배송 관계에서 주문 쪽 끝이 ||(반드시 하나)라 배송은 반드시 주문 하나에 연결된다. 배송 쪽 끝은 o|(0 또는 1)라 아직 배송이 없는 주문은 있을 수 있지만, 주문 없는 배송은 있을 수 없다. 그래서 ④ 가 틀렸다. ① 고객-주문의 주문 쪽 끝이 o{ 라 주문하지 않은 고객이 있을 수 있다. ② 주문-주문상세의 주문상세 쪽 끝이 |{(1개 이상)라 주문은 주문상세를 하나 이상 가진다. ③ 상품-주문상세의 주문상세 쪽 끝이 o{ 라 한 번도 주문되지 않은 상품도 있을 수 있다. 읽는 법: 관계선 끝의 기호는 그 기호가 붙은 쪽 엔터티가 상대 한 건당 몇 개인지를 말한다. | 는 반드시(필수), o 는 없어도 됨(선택), 까마귀발은 여러 개다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "고객·주문·주문상세·상품·배송 ERD",
        "mermaid": "erDiagram\n    고객 ||--o{ 주문 : \"한다\"\n    주문 ||--|{ 주문상세 : \"포함\"\n    상품 ||--o{ 주문상세 : \"대상\"\n    주문 ||--o| 배송 : \"발생\"\n    주문 {\n        string 주문번호 PK\n        string 고객번호 FK\n    }\n    주문상세 {\n        string 주문번호 PK,FK\n        string 상품코드 PK,FK\n        int 수량\n    }\n    배송 {\n        string 배송번호 PK\n        string 주문번호 FK\n    }"
      }
    ]
  },
  {
    "id": 10452,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "1과목",
    "number": 3,
    "title": "아래 설계 작업 ㉠~㉣ 을 데이터 모델링 단계(개념·논리·물리)로 바르게 나눈 것은?",
    "options": [
      "개념, 논리, 논리, 물리",
      "논리, 개념, 물리, 물리",
      "개념, 물리, 물리, 물리",
      "개념, 논리, 물리, 물리"
    ],
    "correctIndex": 3,
    "explanation": "개념 모델링은 추상화 수준이 가장 높아 업무의 핵심 엔터티와 관계를 넓게 그린다(㉠). 논리 모델링은 속성·식별자·관계를 자세히 정하고 정규화를 해, 특정 DBMS 에 묶이지 않는 구조를 만든다(㉡). 물리 모델링은 실제 DBMS 에 올릴 테이블·칼럼의 타입과 길이, 인덱스·파티션 같은 저장과 성능 요소를 정한다(㉢, ㉣). 정답은 ④번이다. ① 은 파티션·인덱스를 논리 단계로 본 것, ② 는 개념과 논리를 바꿔 본 것, ③ 은 정규화를 물리 단계로 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "㉠ 업무 전체의 핵심 엔터티와 그 사이 관계를 큰 그림으로 그린다.\n㉡ 엔터티마다 식별자를 확정하고 정규화를 한다.\n㉢ 주문 테이블을 월별 파티션으로 나누고 인덱스를 만든다.\n㉣ 칼럼의 데이터 타입과 길이를 사용할 DBMS 에 맞게 정한다."
      }
    ]
  },
  {
    "id": 10453,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "1과목",
    "number": 4,
    "title": "발생 시점에 따른 엔터티 분류에 해당하지 않는 것은?",
    "options": [
      "기본 엔터티",
      "사건 엔터티",
      "중심 엔터티",
      "행위 엔터티"
    ],
    "correctIndex": 1,
    "explanation": "발생 시점에 따른 엔터티 분류는 기본(키)(①)·중심(③)·행위(④) 세 가지다. 사건 엔터티는 유무형에 따른 분류(유형·개념·사건)에 속해 여기에 해당하지 않으므로 정답은 ② 다.",
    "_source": "authored"
  },
  {
    "id": 10454,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "1과목",
    "number": 5,
    "title": "아래 ERD 를 '고객은 서비스를 하나만 계약할 수 있고, 한 서비스는 여러 고객이 계약할 수 있다' 는 규칙에 맞게 고치는 방법으로 가장 적절한 것은?",
    "options": [
      "고객에 서비스ID 를 외래키로 두고 계약 엔터티를 없앤다 (계약일자는 고객으로 옮긴다).",
      "계약의 주식별자에 계약일자를 추가한다.",
      "서비스에 고객ID 를 외래키로 둔다.",
      "서비스와 계약의 관계를 1:1 로 바꾼다."
    ],
    "correctIndex": 0,
    "explanation": "지금 모델은 계약의 주식별자가 (고객ID, 서비스ID) 라 한 고객이 서로 다른 서비스와 계약을 여러 건 맺을 수 있는 M:N 구조다. 규칙대로라면 고객 쪽이 N, 서비스 쪽이 1 인 1:N 관계이므로, N 쪽인 고객에 서비스ID 를 외래키로 두면 고객 한 명당 서비스가 하나로 고정된다(①). 계약 엔터티를 남기더라도 주식별자를 고객ID 하나로 줄이면 같은 효과가 난다. ② 계약일자를 주식별자에 더하면 같은 서비스도 날짜만 다르면 또 계약할 수 있어 제약이 오히려 느슨해진다. ③ 서비스에 고객ID 를 두면 서비스 하나에 고객이 한 명만 연결되어 '여러 고객이 계약할 수 있다' 는 규칙에 어긋난다. ④ 서비스와 계약을 1:1 로 바꾸면 서비스마다 계약이 한 건뿐이라 역시 여러 고객이 같은 서비스를 계약할 수 없다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "현재 모델: 고객·서비스·계약 ERD",
        "mermaid": "erDiagram\n    고객 ||--o{ 계약 : \"체결\"\n    서비스 ||--o{ 계약 : \"대상\"\n    고객 {\n        string 고객ID PK\n        string 고객명\n    }\n    서비스 {\n        string 서비스ID PK\n        string 서비스명\n    }\n    계약 {\n        string 고객ID PK,FK\n        string 서비스ID PK,FK\n        date 계약일자\n    }"
      }
    ]
  },
  {
    "id": 10455,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "1과목",
    "number": 6,
    "title": "파생 속성에 해당하는 예시로 적절한 것은?",
    "options": [
      "고객번호",
      "주문일자",
      "상품코드",
      "최종주문일자"
    ],
    "correctIndex": 3,
    "explanation": "파생 속성은 다른 속성의 값을 계산하거나 변형해 만든 속성이다. 최종주문일자는 주문 데이터 중 가장 마지막 주문일자를 구해 얻는 값이므로 파생 속성이다(④). 고객번호(①)·상품코드(③)는 식별을 위해 정한 설계 속성 성격이고, 주문일자(②)는 업무에서 바로 발생하는 기본 속성이다.",
    "_source": "authored"
  },
  {
    "id": 10456,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "1과목",
    "number": 7,
    "title": "아래 식별자 분류 기준 ㉠~㉢ 에 해당하는 식별자를 올바르게 짝지은 것은?",
    "options": [
      "㉠ 본질식별자·인조식별자 / ㉡ 주식별자·보조식별자 / ㉢ 내부식별자·외부식별자",
      "㉠ 단일식별자·복합식별자 / ㉡ 본질식별자·인조식별자 / ㉢ 주식별자·보조식별자",
      "㉠ 내부식별자·외부식별자 / ㉡ 단일식별자·복합식별자 / ㉢ 본질식별자·인조식별자",
      "㉠ 주식별자·보조식별자 / ㉡ 내부식별자·외부식별자 / ㉢ 단일식별자·복합식별자"
    ],
    "correctIndex": 3,
    "explanation": "식별자는 대표성 여부에 따라 주식별자와 보조식별자로, 엔터티 내에서 스스로 만들어지는지 여부에 따라 내부식별자와 외부식별자(다른 엔터티로부터 상속받은 FK)로, 주식별자를 구성하는 속성의 개수에 따라 단일식별자와 복합식별자로 나눈다. 이 밖에 업무에 원래 존재하는 속성인지 여부로 본질식별자와 인조식별자를 구분한다. ① 은 ㉠ 에 본질·인조를, ② 는 ㉠ 에 단일·복합을, ③ 은 ㉠ 에 내부·외부를 짝지어 기준이 어긋난다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "㉠ 엔터티를 대표하는 식별자인지 여부에 따른 분류\n㉡ 엔터티 내에서 스스로 만들어지는지 여부에 따른 분류\n㉢ 주식별자를 구성하는 속성의 개수에 따른 분류"
      }
    ]
  },
  {
    "id": 10457,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "1과목",
    "number": 8,
    "title": "주식별자에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "해당 업무에서 자주 이용되는 속성을 사용한다.",
      "복합 식별자에는 최대한 많은 속성이 포함되도록 구성한다.",
      "명칭은 되도록 지정하지 않는다.",
      "속성이 자주 사용되지 않는다는 이유로 임의의 속성을 주식별자로 선정하지 않는다."
    ],
    "correctIndex": 1,
    "explanation": "주식별자는 업무에서 자주 이용되는 속성을 쓰고(①), 이름·명칭은 되도록 지정하지 않으며(③), 자주 쓰이지 않는다는 이유로 임의의 속성을 선정하지 않는다(④). 주식별자는 유일성을 만족하는 최소한의 속성으로 구성해야 하므로(최소성) 복합 식별자에 최대한 많은 속성을 넣는다는 ② 가 옳지 않다.",
    "_source": "authored"
  },
  {
    "id": 10458,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "1과목",
    "number": 9,
    "title": "주식별자가 지정되면 반드시 데이터 값이 존재해야 한다는 특성의 명칭은?",
    "options": [
      "존재성",
      "유일성",
      "최소성",
      "불변성"
    ],
    "correctIndex": 0,
    "explanation": "주식별자가 지정되면 반드시 값이 들어 있어야 하며 NULL 을 허용하지 않는 특성은 존재성이다(①). 유일성(②)은 인스턴스를 유일하게 구분하는 성질, 최소성(③)은 유일성을 만족하는 최소한의 속성으로 구성하는 성질, 불변성(④)은 값이 자주 바뀌지 않는 성질이다.",
    "_source": "authored"
  },
  {
    "id": 10459,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "1과목",
    "number": 10,
    "title": "업무에서 필요로 하는 인스턴스를 관리하고자 하는 의미상 더 이상 분리되지 않는 최소의 데이터 단위는?",
    "options": [
      "엔터티",
      "인스턴스",
      "속성",
      "관계"
    ],
    "correctIndex": 2,
    "explanation": "업무에서 관리하려는 의미상 더 이상 분리되지 않는 최소의 데이터 단위는 속성이다(③). 엔터티(①)는 속성들의 집합으로 관리 대상 그 자체, 인스턴스(②)는 엔터티에 속한 개별 데이터 한 건, 관계(④)는 엔터티 사이의 연관이다.",
    "_source": "authored"
  },
  {
    "id": 10460,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 11,
    "title": "트랜잭션에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "하나의 트랜잭션에서 처리되는 데이터는 다른 트랜잭션에서도 변경할 수 있다.",
      "트랜잭션은 논리적 작업 단위이다.",
      "트랜잭션 종료 시점에 COMMIT 또는 ROLLBACK 이 수행된다.",
      "트랜잭션은 원자성·일관성·고립성·지속성 (ACID) 을 보장해야 한다."
    ],
    "correctIndex": 0,
    "explanation": "트랜잭션은 논리적 작업 단위이고(②), COMMIT 이나 ROLLBACK 으로 끝나며(③), 원자성·일관성·고립성·지속성(ACID)을 보장해야 한다(④). 고립성에 따라 한 트랜잭션이 처리 중인 데이터는 다른 트랜잭션이 끼어들어 변경할 수 없으므로(잠금) ① 이 옳지 않다.",
    "_source": "authored"
  },
  {
    "id": 10461,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 12,
    "title": "아래 일자별 매출 데이터에 대한 누적합 쿼리 중 \"일자별\" 누적합을 얻을 수 없는 것은?",
    "options": [
      "SUM(금액) OVER (ORDER BY 일자)",
      "SUM(금액) OVER (ORDER BY 일자 ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)",
      "SUM(금액) OVER (ORDER BY 일자 RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)",
      "서브쿼리를 이용한 일자별 누적합 계산"
    ],
    "correctIndex": 1,
    "explanation": "같은 일자(2023-11-02)가 두 행이다. ROWS 는 행 단위로 누적해 100, 250, 500, 600 이 되므로 같은 일자인데 누적값이 250 과 500 으로 갈린다. 일자별 누적합을 보려면 같은 일자를 한 묶음으로 더하는 RANGE 를 써야 하고, 이때 결과는 100, 500, 500, 600 이다. 그래서 ② 가 일자별 누적합을 얻을 수 없다. ① 은 범위를 생략하면 기본값이 RANGE 라 일자별 누적이 되고, ③ 은 RANGE 를 직접 쓴 것이며, ④ 서브쿼리로도 같은 일자를 묶어 누적할 수 있다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T 테이블 (일자별 매출)",
        "headers": [
          "일자",
          "금액"
        ],
        "rows": [
          [
            "2023-11-01",
            "100"
          ],
          [
            "2023-11-02",
            "150"
          ],
          [
            "2023-11-02",
            "250"
          ],
          [
            "2023-11-03",
            "100"
          ]
        ]
      }
    ]
  },
  {
    "id": 10462,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 13,
    "title": "Oracle ORDER BY 절에서 NULL 값이 가장 마지막에 출력되도록 하는 옵션은?",
    "options": [
      "NVL(COL, 0) 으로 치환하여 정렬",
      "NULLIF 로 치환하여 정렬",
      "NULLS LAST 옵션을 사용",
      "COALESCE 로 치환하여 정렬"
    ],
    "correctIndex": 2,
    "explanation": "Oracle 에서 ORDER BY 절에 NULLS LAST 를 명시하면 NULL 이 정렬 결과의 가장 마지막에 위치한다. ① NVL·② NULLIF·④ COALESCE 는 값을 치환하는 방식이라 정렬 의미가 달라질 수 있다.",
    "_source": "authored"
  },
  {
    "id": 10463,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 14,
    "title": "user1 과 user2 가 아래 순서로 SQL 을 실행했다. user2 의 ㉠~㉣ 중 오류가 발생하는 것만 모두 고른 것은? (Oracle 기준, 동의어가 없는 상태에서 시작)",
    "options": [
      "㉠",
      "㉠, ㉢",
      "㉢",
      "㉠, ㉢, ㉣"
    ],
    "correctIndex": 1,
    "explanation": "다른 사용자의 테이블은 권한이 있어도 '소유자.테이블명' 으로 불러야 한다. 그래서 ㉠ 은 user2 자신의 T1 을 찾다가 테이블이 없다는 오류가 나고, ㉡ 은 조회된다. user1 이 준 권한은 SELECT 뿐이라 INSERT 하는 ㉢ 은 권한 부족 오류다. 공용 동의어 T1 을 만든 뒤에는 소유자 이름 없이 T1 만 써도 user1.T1 을 가리켜 ㉣ 은 조회된다. 정답은 ②번이다. ① 은 SELECT 권한으로 INSERT 도 된다고 본 것, ③ 은 소유자 이름 없이도 남의 테이블을 찾는다고 본 것, ④ 는 동의어가 있어도 소유자 이름이 필요하다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- user1\nCREATE TABLE T1 (C NUMBER);\nGRANT SELECT ON T1 TO user2;\n\n-- user2\nSELECT * FROM T1;               -- ㉠\nSELECT * FROM user1.T1;         -- ㉡\nINSERT INTO user1.T1\nVALUES (1);                     -- ㉢\n\n-- DBA\nCREATE PUBLIC SYNONYM T1\n  FOR user1.T1;\n\n-- user2\nSELECT * FROM T1;               -- ㉣"
      }
    ]
  },
  {
    "id": 10464,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 15,
    "title": "아래 T 테이블에 대한 NTILE(3) 윈도우 함수의 결과로 옳은 것은?",
    "options": [
      "1,1,1,2,2,2,3,3",
      "1,1,2,2,3,3,3,3",
      "1,2,3,1,2,3,1,2",
      "3,3,3,2,2,2,1,1"
    ],
    "correctIndex": 0,
    "explanation": "NTILE(3) 은 정렬된 8행을 3개 그룹으로 최대한 고르게 나누고, 나누어떨어지지 않는 나머지는 앞 그룹부터 1행씩 더 준다. 8 = 3 + 3 + 2 이므로 1,1,1,2,2,2,3,3 이다(①). ② 는 나머지를 뒤에 몰았고, ③ 은 순서대로 돌아가며 배정했으며, ④ 는 역순이다.",
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
            "1"
          ],
          [
            "2"
          ],
          [
            "3"
          ],
          [
            "4"
          ],
          [
            "5"
          ],
          [
            "6"
          ],
          [
            "7"
          ],
          [
            "8"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT COL1, NTILE(3) OVER (ORDER BY COL1) AS GRP\nFROM   T;"
      }
    ]
  },
  {
    "id": 10465,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 16,
    "title": "A 와 B 각각의 소계, 총계까지 모두 출력하는 GROUP BY 절은?",
    "options": [
      "ROLLUP(A, B)",
      "GROUP BY A, B",
      "CUBE(A, B)",
      "GROUPING SETS((A, B))"
    ],
    "correctIndex": 2,
    "explanation": "A 별 소계, B 별 소계, 총계를 모두 보려면 (A, B), (A), (B), () 네 그룹이 필요하고 이를 한 번에 만드는 것은 CUBE(A, B) 다(③). ROLLUP(A, B)(①)는 (A, B), (A), () 만 만들어 B 별 소계가 없고, GROUP BY A, B(②)와 GROUPING SETS((A, B))(④)는 (A, B) 그룹만 만든다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT A, B, SUM(X)\nFROM   T\nGROUP BY ( ? );"
      }
    ]
  },
  {
    "id": 10466,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 17,
    "title": "아래 데이터에 대해 나눗셈 연산 시 0 나누기 오류를 피하기 위해 사용되는 함수는?",
    "options": [
      "NVL",
      "NULLIF",
      "COALESCE",
      "DECODE"
    ],
    "correctIndex": 1,
    "explanation": "NULLIF(COL2, 0) 은 COL2 가 0 이면 NULL, 아니면 COL2 를 반환한다. 숫자를 NULL 로 나누면 오류 대신 NULL 이 되므로 0 나누기 오류를 피할 수 있다(②). NVL(COL2, 0)(①)과 COALESCE(③)는 NULL 을 0 으로 바꿔 오히려 0 으로 나누게 되고, DECODE(④)는 인수가 최소 3개 필요해 DECODE(COL2, 0) 형태로는 오류가 난다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT COL1 / ( ? )(COL2, 0) FROM T;"
      }
    ]
  },
  {
    "id": 10467,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 18,
    "title": "아래 데이터에 대한 두 SQL 의 결과로 옳은 것은?",
    "options": [
      "㉠ = 130, ㉡ = 130 (두 SQL 의 결과가 동일하다)",
      "㉠ = 30, ㉡ = 130",
      "㉠ = 130, ㉡ = NULL (㉡ 은 NULL 행이 섞여 결과가 NULL 이 된다)",
      "㉠ 과 ㉡ 모두 NULL 이 반환된다."
    ],
    "correctIndex": 1,
    "explanation": "NULL 포함 행은 + 연산 전체가 NULL 이 되어 ㉠ 에는 반영되지 않는다. ㉡ 은 컬럼별로 NULL 을 제외한 SUM 을 수행한다. ① 은 행 안의 덧셈도 NULL 을 건너뛴다고 본 결과, ③ 은 거꾸로 컬럼별 SUM 이 NULL 이 된다고 본 결과, ④ 는 둘 다 NULL 로 본 결과다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "A",
          "B",
          "C",
          "D"
        ],
        "rows": [
          [
            "10",
            "NULL",
            "NULL",
            "20"
          ],
          [
            "NULL",
            "10",
            "20",
            "NULL"
          ],
          [
            "30",
            "NULL",
            "10",
            "NULL"
          ],
          [
            "4",
            "6",
            "10",
            "10"
          ]
        ],
        "caption": "T 테이블"
      },
      {
        "type": "sql",
        "code": "-- ㉠ SELECT SUM(A + B + C + D) FROM T;\n-- ㉡ SELECT SUM(A) + SUM(B) + SUM(C) + SUM(D) FROM T;"
      }
    ]
  },
  {
    "id": 10468,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 19,
    "title": "아래 TAB1 테이블에 대한 SQL 의 결과로 옳은 것은?",
    "options": [
      "공집합",
      "'X' 한 행",
      "NULL 한 행",
      "MAX(COL1) 값"
    ],
    "correctIndex": 0,
    "explanation": "TAB1 의 COL2 값이 모두 9 이하라 `WHERE COL2 > 9` 를 만족하는 행이 없다. `GROUP BY` 가 지정된 SQL 은 그룹이 0 개이면 결과 행도 0 개로 공집합이 된다. `GROUP BY` 가 없었다면 단일 그룹으로 처리되어 `MAX(COL1)` = NULL → NVL 로 'X' 1 행이 나오겠지만, 본 SQL 은 `GROUP BY COL1` 이라 공집합이 정답. ② 'X' 한 행은 GROUP BY 가 없을 때의 결과, ③ NULL 한 행은 거기에 NVL 도 없을 때의 결과이고, ④ 그룹이 없어 MAX 값도 나오지 않는다.",
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
            "5"
          ],
          [
            "B",
            "7"
          ]
        ],
        "caption": "TAB1 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT NVL(MAX(COL1), 'X')\nFROM   TAB1\nWHERE  COL2 > 9\nGROUP BY COL1;"
      }
    ]
  },
  {
    "id": 10469,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 20,
    "title": "아래 TAB1 에 데이터가 들어 있을 때, 오류가 발생하지 않는 DDL 은?",
    "options": [
      "ALTER TABLE TAB1 MODIFY COL1 VARCHAR2(10);",
      "ALTER TABLE TAB1 MODIFY COL2 NUMBER;",
      "ALTER TABLE TAB1 MODIFY COL3 TIMESTAMP;",
      "ALTER TABLE TAB1 MODIFY COL4 NUMBER;"
    ],
    "correctIndex": 2,
    "explanation": "Oracle 에서는 데이터가 들어 있는 컬럼의 데이터 타입을 다른 계열로 바꿀 수 없다(\"컬럼이 비어 있어야 한다\" 오류). ① COL1 NUMBER → VARCHAR2, ② COL2 VARCHAR2 → NUMBER, ④ COL4 VARCHAR2 → NUMBER 는 모두 값이 들어 있는 상태에서 타입을 바꾸므로 오류다. ④ 는 값(12345, 45677)이 숫자처럼 보여도 마찬가지다. ③ DATE → TIMESTAMP 는 날짜 값을 그대로 담을 수 있는 같은 계열 확장이라 데이터가 있어도 허용된다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TAB1 구조",
        "headers": [
          "컬럼",
          "데이터 타입"
        ],
        "rows": [
          [
            "COL1",
            "NUMBER"
          ],
          [
            "COL2",
            "VARCHAR2(10) DEFAULT '000'"
          ],
          [
            "COL3",
            "DATE"
          ],
          [
            "COL4",
            "VARCHAR2(10)"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "TAB1 데이터 (2건)",
        "headers": [
          "COL1",
          "COL2",
          "COL3",
          "COL4"
        ],
        "rows": [
          [
            "1",
            "000",
            "2025-01-02",
            "12345"
          ],
          [
            "2",
            "000",
            "2025-03-05",
            "45677"
          ]
        ]
      }
    ]
  },
  {
    "id": 10470,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 21,
    "title": "아래 SQL 의 결과로 옳은 것은?",
    "options": [
      "1",
      "2",
      "0",
      "NULL"
    ],
    "correctIndex": 1,
    "explanation": "NOT EXISTS 는 T1 의 행마다 서브쿼리를 실행해 짝이 한 건도 없으면 참이다. 10 과 30 은 T2 에 같은 값이 있어 빠진다. 20 은 짝이 없어 남는다. T1 의 NULL 행은 T1.COL1 = T2.COL1 이 어떤 행과도 참이 되지 않아(NULL 비교는 UNKNOWN) 서브쿼리 결과가 0건이므로 NOT EXISTS 가 참이 되어 남는다. 그래서 2 다(②). ① 1 은 T1 의 NULL 행이 빠진다고 본 값, ③ 0 은 NOT IN 처럼 T2 의 NULL 때문에 전부 탈락한다고 본 값(NOT IN 이었다면 실제로 0), ④ COUNT 는 행이 없어도 NULL 이 아니라 숫자를 돌려준다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T1 테이블",
        "headers": [
          "COL1"
        ],
        "rows": [
          [
            "10"
          ],
          [
            "20"
          ],
          [
            "NULL"
          ],
          [
            "30"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "T2 테이블",
        "headers": [
          "COL1"
        ],
        "rows": [
          [
            "10"
          ],
          [
            "NULL"
          ],
          [
            "30"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT COUNT(*) FROM T1\nWHERE NOT EXISTS (SELECT 'X' FROM T2 WHERE T1.COL1 = T2.COL1);"
      }
    ]
  },
  {
    "id": 10471,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 22,
    "title": "아래 SQL 의 결과로 옳게 짝지어진 것은?",
    "options": [
      "10, 10",
      "NULL, ERROR",
      "0, 0",
      "NULL, NULL"
    ],
    "correctIndex": 1,
    "explanation": "NULL 이 포함된 산술 연산 결과는 NULL 이므로 10 / NULL 은 NULL 이다. 10 / 0 은 Oracle 에서 '제수가 0' 오류(ORA-01476)가 난다. 따라서 NULL, ERROR 다(②). 0 으로 나누기를 NULL 이나 0 으로 처리해 주지 않는다(③④).",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT 10 / NULL, 10 / 0 FROM DUAL;"
      }
    ]
  },
  {
    "id": 10472,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 23,
    "title": "아래 T 테이블에 대한 SQL 의 결과로 옳은 것은?",
    "options": [
      "전체 행",
      "COL1 = 'CPG' 인 행",
      "COL2 <= 10 인 행",
      "조건을 만족하는 행 없음 (결과 없음)"
    ],
    "correctIndex": 3,
    "explanation": "표의 모든 행은 COL1 = 'CPG' 이거나 COL2 ≤ 10 이라 `COL1 <> 'CPG' AND COL2 > 10` 두 조건을 동시에 만족하는 행이 없다. ① 은 조건을 무시한 결과, ② 는 <> 를 = 로 본 결과, ③ 은 COL2 조건을 반대로 본 결과다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T 테이블",
        "headers": [
          "COL1",
          "COL2"
        ],
        "rows": [
          [
            "CPG",
            "5"
          ],
          [
            "CPG",
            "20"
          ],
          [
            "ABC",
            "3"
          ],
          [
            "XYZ",
            "8"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT * FROM T\nWHERE COL1 <> 'CPG' AND COL2 > 10;"
      }
    ]
  },
  {
    "id": 10473,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 24,
    "title": "아래 OUTER JOIN SQL 의 결과로 옳은 것은?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "correctIndex": 1,
    "explanation": "T1 LEFT JOIN T2 의 결과는 (1,1), (2,2), (3,NULL) 이다. 여기에 T3 를 RIGHT OUTER JOIN 하면 T3 의 모든 행(1, 2, 3)이 보존되고 C1 = 3 은 짝이 없어도 남는다. 따라서 SUM(C.C1) = 1 + 2 + 3 = 6 이다(②). T2 에만 있는 4 는 결과에 들어오지 않는다. ① 3 은 1 + 2 만 더한 값으로, RIGHT JOIN 으로 T3 의 3 이 살아난다는 점을 놓쳤다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T1 테이블",
        "headers": [
          "C1"
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
        "type": "table",
        "caption": "T2 테이블",
        "headers": [
          "C1"
        ],
        "rows": [
          [
            "1"
          ],
          [
            "2"
          ],
          [
            "4"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "T3 테이블",
        "headers": [
          "C1"
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
        "code": "SELECT SUM(C.C1)\nFROM   T1 A\nLEFT OUTER JOIN T2 B ON A.C1 = B.C1\nRIGHT OUTER JOIN T3 C ON B.C1 = C.C1\nWHERE 1 = 1;"
      }
    ]
  },
  {
    "id": 10474,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 25,
    "title": "아래 SQL 의 결과로 옳은 것은?",
    "options": [
      "'...의', 109.0",
      "'의 마', 110",
      "'의 마', 109",
      "'마...', 100"
    ],
    "correctIndex": 2,
    "explanation": "SUBSTR('...의 마...', 4, 3) 은 4번째 문자부터 3글자를 추출 → '의 마'. ROUND(109, 1) 은 소수 첫째 자리까지 반올림하지만 정수 109 는 변환할 소수가 없으므로 109 가 그대로 유지된다. ② 의 110 은 ROUND(109, -1)(십의 자리 반올림), ④ 의 '마...', 100 은 시작 위치를 6 으로, ROUND 를 백의 자리(-2)로 본 결과다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT SUBSTR('...의 마...', 4, 3), ROUND(109, 1) FROM DUAL;"
      }
    ]
  },
  {
    "id": 10475,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 26,
    "title": "아래 TAB1 테이블에 대해 INSERT FIRST 를 수행한 뒤 T1, T2, T3, T4 의 행 수로 옳은 것은? (T1~T4 는 TAB1 과 구조가 같은 빈 테이블)",
    "options": [
      "T1 = 2, T2 = 1, T3 = 2, T4 = 1",
      "T1 = 2, T2 = 2, T3 = 4, T4 = 1",
      "T1 = 2, T2 = 1, T3 = 2, T4 = 0",
      "T1 = 2, T2 = 1, T3 = 1, T4 = 2"
    ],
    "correctIndex": 0,
    "explanation": "INSERT FIRST 는 위에서부터 WHEN 을 차례로 따져 처음 참이 되는 절 하나만 실행하고, 참인 절이 하나도 없을 때만 ELSE 를 실행한다. NULL 과의 비교는 UNKNOWN 이라 참이 아니므로 다음 WHEN 으로 넘어간다. 행별로 보면 (1, A) 는 1 >= 4 가 거짓, C2 = 'A' 가 참이라 T2. (2, B) 는 앞의 두 조건이 거짓이고 2 >= 2 가 참이라 T3. (4, NULL) 과 (5, A) 는 첫 WHEN 이 참이라 T1 이다(5 는 C2 = 'A' 도 참이지만 FIRST 라 무시). (NULL, C) 는 세 조건이 모두 참이 아니라 ELSE 로 T4. (3, NULL) 은 C2 = 'A' 가 UNKNOWN 이라 넘어가고 3 >= 2 가 참이라 T3 이다. 따라서 T1 = 2, T2 = 1, T3 = 2, T4 = 1 이다(①). ② 는 참인 WHEN 을 모두 실행하는 INSERT ALL 의 결과(4 는 T1·T3, 5 는 T1·T2·T3)이고, ③ 은 C1 이 NULL 인 행은 ELSE 에도 들어가지 않는다고 본 값, ④ 는 비교 결과가 UNKNOWN 이면 곧바로 ELSE 로 간다고 보고 (3, NULL) 을 T4 에 넣은 값이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TAB1 테이블",
        "headers": [
          "C1",
          "C2"
        ],
        "rows": [
          [
            "1",
            "A"
          ],
          [
            "2",
            "B"
          ],
          [
            "4",
            "NULL"
          ],
          [
            "5",
            "A"
          ],
          [
            "NULL",
            "C"
          ],
          [
            "3",
            "NULL"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "INSERT FIRST\n  WHEN C1 >= 4  THEN INTO T1 VALUES (C1, C2)\n  WHEN C2 = 'A' THEN INTO T2 VALUES (C1, C2)\n  WHEN C1 >= 2  THEN INTO T3 VALUES (C1, C2)\n  ELSE               INTO T4 VALUES (C1, C2)\nSELECT C1, C2 FROM TAB1;"
      }
    ]
  },
  {
    "id": 10476,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 27,
    "title": "아래 조건을 만족하는 SQL 로 옳은 것은?",
    "options": [
      "WHERE TEAM_CODE = A AND B",
      "WHERE (TEAM_CODE = 'A' OR TEAM_CODE = 'B') AND (다른 조건)",
      "WHERE TEAM_CODE IN (A, B) OR (다른 조건)",
      "WHERE TEAM_CODE BETWEEN A AND B"
    ],
    "correctIndex": 1,
    "explanation": "팀 코드가 'A' 또는 'B' 는 OR 로 묶고, 다른 조건과는 AND 로 결합하므로 괄호로 우선순위를 명시해야 한다. 문자열 리터럴은 따옴표로 감싸야 한다. ① 은 문법이 맞지 않고(TEAM_CODE = A AND B), ③ 은 OR 로 묶어 다른 조건이 없어도 통과하며, ④ BETWEEN 은 범위라 A 와 B 사이의 다른 값도 포함한다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "팀 코드가 A 또는 B 이고, 다른 조건을 함께 만족하는 행을 조회한다."
      }
    ]
  },
  {
    "id": 10477,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 28,
    "title": "아래 매출 테이블에 대한 SQL 에서 (A, 2월) 행과 (B, 3월) 행의 누적 값으로 옳은 것은?",
    "options": [
      "30, 45",
      "30, 75",
      "20, 25",
      "30, 40"
    ],
    "correctIndex": 0,
    "explanation": "PARTITION BY 부서 라 누적 합은 부서마다 처음부터 다시 센다. ROWS UNBOUNDED PRECEDING 은 '파티션 첫 행부터 현재 행까지' 다. A 의 2월은 10 + 20 = 30, B 의 3월은 B 만 더해 5 + 15 + 25 = 45 다. 정답은 ①번이다. ② 는 파티션을 무시하고 A 의 값까지 이어서 더한 것, ③ 은 누적이 아닌 그 행의 금액만 본 것, ④ 는 B 3월에서 바로 앞 행과 현재 행만 더한 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "매출",
        "headers": [
          "부서",
          "월",
          "금액"
        ],
        "rows": [
          [
            "A",
            "1",
            "10"
          ],
          [
            "A",
            "2",
            "20"
          ],
          [
            "B",
            "1",
            "5"
          ],
          [
            "B",
            "2",
            "15"
          ],
          [
            "B",
            "3",
            "25"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT 부서, 월,\n       SUM(금액) OVER (\n         PARTITION BY 부서\n         ORDER BY 월\n         ROWS UNBOUNDED PRECEDING\n       ) AS 누적\nFROM   매출;"
      }
    ]
  },
  {
    "id": 10478,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 29,
    "title": "아래 EMP 테이블에 대해 다음 네 SQL 을 수행한 RNK 결과 중 마지막 행의 값이 나머지와 다른 것은?",
    "options": [
      "RANK() OVER (ORDER BY SAL DESC)",
      "DENSE_RANK() OVER (ORDER BY SAL DESC)",
      "ROW_NUMBER() OVER (ORDER BY SAL DESC)",
      "NTILE(4) OVER (ORDER BY SAL DESC)"
    ],
    "correctIndex": 1,
    "explanation": "SAL 이 같은 행이 두 개 있을 때 RANK 는 1, 2, 2, 4 로 동률 다음 순위를 건너뛰고 DENSE_RANK 는 1, 2, 2, 3 으로 건너뛰지 않는다. ROW_NUMBER 는 동률과 무관하게 1, 2, 3, 4 를 부여하고 NTILE(4) 도 네 그룹으로 나누어 1, 2, 3, 4 가 된다. 마지막 행의 값이 3 인 DENSE_RANK 만 나머지(4)와 다르다. ① RANK, ③ ROW_NUMBER, ④ NTILE(4) 는 마지막 행이 모두 4 다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP 테이블",
        "headers": [
          "EMPNO",
          "SAL"
        ],
        "rows": [
          [
            "1",
            "5000"
          ],
          [
            "2",
            "4000"
          ],
          [
            "3",
            "4000"
          ],
          [
            "4",
            "3000"
          ]
        ]
      }
    ]
  },
  {
    "id": 10479,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 30,
    "title": "아래 두 테이블에 대한 네 SQL 중 결과가 다른 하나는?",
    "options": [
      "SELECT COL1 FROM T1 MINUS SELECT COL1 FROM T2;",
      "SELECT T1.COL1 FROM T1, T2 WHERE T1.COL1 <> T2.COL1;",
      "SELECT COL1 FROM T1 WHERE COL1 NOT IN (SELECT COL1 FROM T2);",
      "SELECT T1.COL1 FROM T1 LEFT JOIN T2 ON T1.COL1 = T2.COL1 WHERE T2.COL1 IS NULL;"
    ],
    "correctIndex": 1,
    "explanation": "① MINUS·③ NOT IN·④ LEFT JOIN+IS NULL 은 모두 'T1 에는 있고 T2 에는 없는 값 (D, E)' 을 반환하지만, T1, T2 카티션 곱에 `<>` 조건을 적용하면 비교 대상이 다른 모든 행과 매칭되어 중복된 결과가 나오므로 다른 답이 된다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T1 테이블",
        "headers": [
          "COL1"
        ],
        "rows": [
          [
            "A"
          ],
          [
            "B"
          ],
          [
            "C"
          ],
          [
            "D"
          ],
          [
            "E"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "T2 테이블",
        "headers": [
          "COL1"
        ],
        "rows": [
          [
            "A"
          ],
          [
            "B"
          ],
          [
            "C"
          ]
        ]
      }
    ]
  },
  {
    "id": 10480,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 31,
    "title": "아래 SQL Server 테이블에 대한 INSERT 결과로 옳은 것은?",
    "options": [
      "1",
      "2",
      "3",
      "0"
    ],
    "correctIndex": 0,
    "explanation": "VALUE 에 CHECK (VALUE >= 3) 제약이 있어 1, 2 를 넣는 INSERT 는 제약 위반으로 실패하고, 3 만 들어간다. IDENTITY 컬럼 MAIN 은 자동으로 채워진다. 따라서 COUNT(*) = 1 이다(①). ② 2 는 CHECK 를 >= 2 처럼 본 값, ③ 3 은 CHECK 를 무시한 값, ④ 0 은 하나라도 실패하면 모두 취소된다고 본 값이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "CREATE TABLE T1 (\n  MAIN  INT IDENTITY(1,1),\n  VALUE INT CHECK (VALUE >= 3)\n);\n\nINSERT INTO T1 VALUES(1);\nINSERT INTO T1 VALUES(2);\nINSERT INTO T1 VALUES(3);\n\nSELECT COUNT(*) FROM T1;"
      }
    ]
  },
  {
    "id": 10481,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 32,
    "title": "아래 SQL 의 WHERE 조건과 동일한 의미를 가지는 것은?",
    "options": [
      "SELECT * FROM T WHERE (COL1 = 'A' AND COL2 = 1000) OR (COL1 = 'B' AND COL2 = 2000);",
      "SELECT * FROM T WHERE COL1 = 'A' AND COL2 = 1000 AND COL1 = 'B' AND COL2 = 2000;",
      "SELECT * FROM T WHERE COL1 IN ('A', 'B') AND COL2 IN (1000, 2000);",
      "SELECT * FROM T WHERE COL1 = 'A' OR COL2 = 2000;"
    ],
    "correctIndex": 0,
    "explanation": "다중 컬럼 IN `(COL1, COL2) IN (('A', 1000), ('B', 2000))` 은 각 튜플 안에서는 컬럼끼리 AND 로 묶고, 튜플 간에는 OR 로 결합한 형태와 동일하다. 즉 `(COL1='A' AND COL2=1000) OR (COL1='B' AND COL2=2000)` 으로 풀어쓸 수 있다. ② 는 한 행의 COL1 이 'A' 이면서 'B' 일 수 없어 아무 행도 나오지 않고, ③ 은 ('A', 2000)·('B', 1000) 조합까지 골라 범위가 더 넓으며, ④ 는 둘 중 한 조건만 맞아도 통과해 전혀 다른 조건이다. 그래서 정답은 ① 이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT *\nFROM   T\nWHERE  (COL1, COL2) IN (('A', 1000), ('B', 2000));"
      }
    ]
  },
  {
    "id": 10482,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 33,
    "title": "T 테이블에 C 값 5, 15, 25 가 있을 때 아래 SQL 을 순서대로 실행했다. 마지막 두 SELECT 의 결과로 옳은 것은?",
    "options": [
      "3, 15",
      "2, 45",
      "0, 75",
      "0, 15"
    ],
    "correctIndex": 3,
    "explanation": "뷰는 데이터를 따로 저장하지 않고, 조회할 때마다 원래 테이블에서 조건에 맞는 행을 읽는다. INSERT 뒤 V 로 보이는 행은 15, 25, 30 이고, 단순한 뷰라 UPDATE V 는 T 의 이 세 행을 실제로 고쳐 -5, 5, 10 이 된다. 이제 T 는 5, -5, 5, 10 이라 C > 10 인 행이 없어 COUNT 는 0, 합계는 15 다. 정답은 ④번이다. ① 은 뷰가 처음 만든 순간의 행을 들고 있다고 본 것, ② 는 뷰를 고쳐도 원래 테이블은 그대로라고 보고 새 행도 빠진다고 본 것, ③ 은 UPDATE 가 원래 테이블에 반영되지 않는다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "CREATE VIEW V AS\n  SELECT C FROM T WHERE C > 10;\n\nINSERT INTO T VALUES (30);\nUPDATE V SET C = C - 20;\n\nSELECT COUNT(*) FROM V;\nSELECT SUM(C)   FROM T;"
      }
    ]
  },
  {
    "id": 10483,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 34,
    "title": "아래 SQL 수행 후 테이블의 최종 값으로 옳은 것은?",
    "options": [
      "1, 2, 3",
      "1, 2, 3, 4",
      "4",
      "공집합"
    ],
    "correctIndex": 0,
    "explanation": "1, 2, 3 을 넣고 SAVEPOINT P1 을 만든 뒤 4 를 넣었다. ROLLBACK TO SAVEPOINT P1 은 저장점 이후의 작업(4 삽입)만 취소하므로 1, 2, 3 이 남는다(①). 저장점 이전 작업까지 취소되지는 않는다(④). ② 는 ROLLBACK TO 를 무시한 결과, ③ 은 저장점 이후만 남는다고 거꾸로 본 결과다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T 테이블 (초기 상태 — 비어있음)",
        "headers": [
          "VAL"
        ],
        "rows": [
          [
            "(empty)"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "INSERT INTO T VALUES (1);\nINSERT INTO T VALUES (2);\nINSERT INTO T VALUES (3);\nSAVEPOINT P1;\nINSERT INTO T VALUES (4);\nROLLBACK TO SAVEPOINT P1;\n\nSELECT * FROM T;"
      }
    ]
  },
  {
    "id": 10484,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 35,
    "title": "아래 계층형 쿼리의 결과로 옳은 것은?",
    "options": [
      "0",
      "3",
      "4",
      "5"
    ],
    "correctIndex": 2,
    "explanation": "조건 COL3 <> 2 가 WHERE 가 아니라 CONNECT BY 에 있다. CONNECT BY 의 조건은 \"이 자식으로 내려갈지\" 를 정하므로, 조건에 걸린 행은 그 아래 가지까지 통째로 빠진다. 단, 시작 행(START WITH 로 고른 루트)은 CONNECT BY 조건을 검사하지 않는다. 루트 A 는 COL3 이 2 여도 나온다. A 의 자식 B(1) 는 통과, C(2) 는 탈락해 그 아래 E·H 도 빠진다. B 의 자식 D(4) 는 통과, F(2) 는 탈락. D 아래 G(6) 통과. 결과는 A, B, D, G 4건이다(③). ① 0 은 루트 A 도 조건에 걸려 아무것도 시작하지 못한다고 본 값, ② 3 은 루트만 빼고 센 값(B, D, G), ④ 5 는 조건을 WHERE 처럼 COL3 = 2 인 행만 빼고 나머지(B, D, E, G, H)를 센 값이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TAB1 테이블",
        "headers": [
          "COL1",
          "COL2",
          "COL3"
        ],
        "rows": [
          [
            "A",
            "NULL",
            "2"
          ],
          [
            "B",
            "A",
            "1"
          ],
          [
            "C",
            "A",
            "2"
          ],
          [
            "D",
            "B",
            "4"
          ],
          [
            "E",
            "C",
            "5"
          ],
          [
            "F",
            "B",
            "2"
          ],
          [
            "G",
            "D",
            "6"
          ],
          [
            "H",
            "C",
            "3"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT COUNT(*)\nFROM   TAB1\nSTART WITH COL2 IS NULL\nCONNECT BY PRIOR COL1 = COL2\n       AND COL3 <> 2;"
      }
    ]
  },
  {
    "id": 10485,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 36,
    "title": "아래 SALES 테이블에서 매출 상위 3건을 보려고 작성한 SQL 의 결과로 옳은 것은? (Oracle, 행은 표의 순서대로 읽힌다고 가정)",
    "options": [
      "D 600, B 500, E 400",
      "A 300, B 500, C 100",
      "오류가 발생한다 (ROWNUM 과 ORDER BY 는 함께 쓸 수 없다)",
      "B 500, A 300, C 100"
    ],
    "correctIndex": 3,
    "explanation": "ROWNUM 은 WHERE 절을 처리하면서 읽힌 순서대로 붙고, ORDER BY 는 그다음에 실행된다. 그래서 먼저 읽힌 A, B, C 세 행이 ROWNUM 1~3 으로 골라진 뒤 매출 내림차순으로 정렬되어 B 500, A 300, C 100 이 나온다(④). 실제 매출 상위 3건인 D 600, B 500, E 400(①)을 얻으려면 정렬을 인라인 뷰 안에서 먼저 하고 바깥에서 ROWNUM 을 걸어야 한다. 예: SELECT * FROM (SELECT 영업, 매출 FROM SALES ORDER BY 매출 DESC) WHERE ROWNUM <= 3; ② 는 ORDER BY 를 놓친 값이고, ③ 처럼 오류가 나지는 않는다. 문법상 문제없이 실행되지만 원하는 결과가 아닐 뿐이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "SALES",
        "headers": [
          "영업",
          "매출"
        ],
        "rows": [
          [
            "A",
            "300"
          ],
          [
            "B",
            "500"
          ],
          [
            "C",
            "100"
          ],
          [
            "D",
            "600"
          ],
          [
            "E",
            "400"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT 영업, 매출\nFROM   SALES\nWHERE  ROWNUM <= 3\nORDER BY 매출 DESC;"
      }
    ]
  },
  {
    "id": 10486,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 37,
    "title": "아래 SQL 의 결과 건수로 옳은 것은?",
    "options": [
      "1건",
      "2건",
      "3건",
      "4건"
    ],
    "correctIndex": 1,
    "explanation": "IN (100, 200, 100) 은 COL1 = 100 OR COL1 = 200 OR COL1 = 100 과 같아 목록의 중복 값은 결과에 영향을 주지 않는다. 100, 200 인 행이 한 건씩이므로 2건이다(②). 오류도 나지 않는다. ③ 3건은 IN 목록의 값 개수만큼 행이 나온다고 본 값이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "COL1"
        ],
        "rows": [
          [
            "100"
          ],
          [
            "200"
          ],
          [
            "300"
          ]
        ],
        "caption": "TAB 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT * FROM TAB WHERE COL1 IN (100, 200, 100);"
      }
    ]
  },
  {
    "id": 10487,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 38,
    "title": "COL 값이 3, NULL, 1 인 T 테이블에 대한 SQL ㉠~㉣ 에서 첫 번째로 출력되는 값으로 옳은 것은? (Oracle 기준)",
    "options": [
      "1, 3, 3, NULL",
      "1, NULL, 3, NULL",
      "NULL, NULL, 3, 1",
      "1, NULL, 1, NULL"
    ],
    "correctIndex": 1,
    "explanation": "Oracle 은 정렬할 때 NULL 을 가장 큰 값으로 본다. 그래서 오름차순 ㉠ 은 1 이 먼저(NULL 은 맨 뒤), 내림차순 ㉡ 은 NULL 이 먼저다. ㉢ 은 내림차순이지만 NULLS LAST 로 NULL 을 뒤로 보내 3 이 먼저다. ㉣ 은 NULL 을 0 으로 바꾼 값으로 정렬하므로 0 으로 취급된 NULL 행이 가장 먼저 나오고, 출력되는 값은 원래 칼럼이라 NULL 이다. 정답은 ②번이다. ① 은 DESC 에서도 NULL 이 뒤로 간다고 본 것, ③ 은 ASC 에서 NULL 이 먼저라고 본 것, ④ 는 NULLS LAST 를 오름차순으로 바꾸는 옵션으로 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT COL FROM T ORDER BY COL;\n-- ㉡\nSELECT COL FROM T ORDER BY COL DESC;\n-- ㉢\nSELECT COL FROM T\nORDER  BY COL DESC NULLS LAST;\n-- ㉣\nSELECT COL FROM T\nORDER  BY NVL(COL, 0);"
      }
    ]
  },
  {
    "id": 10488,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 39,
    "title": "아래 A, B 테이블에 대한 LEFT OUTER JOIN 의 결과 행 수로 옳은 것은?",
    "options": [
      "4건",
      "5건",
      "6건",
      "8건"
    ],
    "correctIndex": 2,
    "explanation": "ON 의 두 조건을 모두 만족하는 B 행만 붙고, 붙을 행이 없는 A 행은 B 칸이 NULL 인 채 한 행으로 남는다. A 의 1 은 B(1, 100) 이 200 이하라 짝이 없어 NULL 한 행. A 의 2 는 (2, 220) 한 행. A 의 3 은 두 행이고 각각 (3, 250), (3, 300) 두 짝이 붙어 2 × 2 = 4행. 합계 1 + 1 + 4 = 6건이다(③). ① 4건은 LEFT 조인이면 A 의 행 수 그대로라고 본 값, ② 5건은 짝이 없는 A 의 1 을 지운 INNER JOIN 의 결과, ④ 8건은 B.COL2 > 200 조건을 무시한 값이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "A 테이블",
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
          ],
          [
            "3"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "B 테이블",
        "headers": [
          "COL1",
          "COL2"
        ],
        "rows": [
          [
            "1",
            "100"
          ],
          [
            "2",
            "220"
          ],
          [
            "3",
            "250"
          ],
          [
            "3",
            "150"
          ],
          [
            "3",
            "300"
          ],
          [
            "4",
            "500"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT A.COL1, B.COL2\nFROM   A LEFT OUTER JOIN B\nON     (A.COL1 = B.COL1 AND B.COL2 > 200);"
      }
    ]
  },
  {
    "id": 10489,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 40,
    "title": "아래 SQL 중 NULL 이 포함되지 않은 상황에서 결과가 같은 것은?",
    "options": [
      "NOT EXISTS",
      "NOT IN",
      "OUTER JOIN + IS NULL",
      "모두 같다"
    ],
    "correctIndex": 3,
    "explanation": "목표는 A 에는 있고 B 에는 없는 값(1, 4)이다. NOT EXISTS, NOT IN, LEFT OUTER JOIN 후 B.COL1 IS NULL 은 모두 1, 4 를 반환하므로 결과가 같다(④). 단, B 쪽 비교 컬럼에 NULL 이 있으면 NOT IN 은 결과가 공집합이 되어 달라지므로 문제에서 NULL 이 없다는 전제를 두었다. ①·②·③ 은 하나만 골라 나머지와 결과가 같다는 점을 놓쳤다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "A",
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
          ],
          [
            "4"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "B",
        "headers": [
          "COL1"
        ],
        "rows": [
          [
            "2"
          ],
          [
            "3"
          ]
        ]
      },
      {
        "type": "text",
        "content": "전제: 양쪽 테이블의 비교 컬럼(COL1)에 NULL 이 존재하지 않는다. 목표는 'A 에는 있고 B 에는 없는 행' 을 조회하는 것이다."
      },
      {
        "type": "sql",
        "caption": "가. NOT EXISTS",
        "code": "SELECT A.COL1\nFROM   A\nWHERE  NOT EXISTS (SELECT 1 FROM B WHERE A.COL1 = B.COL1);"
      },
      {
        "type": "sql",
        "caption": "나. NOT IN",
        "code": "SELECT A.COL1\nFROM   A\nWHERE  A.COL1 NOT IN (SELECT B.COL1 FROM B);"
      },
      {
        "type": "sql",
        "caption": "다. OUTER JOIN + IS NULL",
        "code": "SELECT A.COL1\nFROM   A LEFT OUTER JOIN B\n         ON A.COL1 = B.COL1\nWHERE  B.COL1 IS NULL;"
      }
    ]
  },
  {
    "id": 10490,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 41,
    "title": "아래 SQL 의 결과로 옳은 것은? (SYSDATE = 2023-05-10)",
    "options": [
      "2023-12-31",
      "2023-05-01",
      "2023-01-01",
      "2023-05-10"
    ],
    "correctIndex": 1,
    "explanation": "Oracle 의 TO_DATE 는 포맷에 없는 요소를 기본값으로 채운다. 연도만 주면 월은 현재 월, 일은 1일이 된다. SYSDATE 가 2023-05-10 이므로 2023-05-01 이다(②). 연도의 첫날(③)이나 오늘 날짜(④)가 되지 않는다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT TO_DATE('2023', 'YYYY') FROM DUAL;"
      }
    ]
  },
  {
    "id": 10491,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 42,
    "title": "아래 SQL 의 결과로 옳은 것은?",
    "options": [
      "모든 행에서 16",
      "모든 행에서 15",
      "행마다 4, 9, 15",
      "모든 행에서 26"
    ],
    "correctIndex": 1,
    "explanation": "윈도우 함수 `SUM` 의 `RANGE BETWEEN 2 PRECEDING AND 2 FOLLOWING` 은 정렬 값 ±2 범위에 들어오는 행의 합을 반환한다. VAL = (4, 5, 6) 일 때 모든 값이 서로 ±2 범위 안에 있어 모든 행에서 4 + 5 + 6 = 15 가 일관되게 나온다. 정답은 ②번. ③ 은 처음부터 지금 행까지의 누적으로 본 결과다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "VAL"
        ],
        "rows": [
          [
            "4"
          ],
          [
            "5"
          ],
          [
            "6"
          ]
        ],
        "caption": "T 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT SUM(VAL)\nOVER (ORDER BY VAL\n      RANGE BETWEEN 2 PRECEDING AND 2 FOLLOWING)\nFROM T;"
      }
    ]
  },
  {
    "id": 10492,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 43,
    "title": "아래 T 테이블을 SQL 로 조회했을 때 출력되는 ID 순서로 옳은 것은? (Oracle 기준)",
    "options": [
      "2, 4, 1, 3, 5",
      "2, 4, 1, 5, 3",
      "4, 2, 1, 3, 5",
      "1, 2, 4, 5, 3"
    ],
    "correctIndex": 0,
    "explanation": "먼저 C1 오름차순이라 A(1, 2, 4)가 B(3, 5)보다 앞선다. A 안에서는 C2 내림차순이라 2인 2·4번이 1인 1번보다 먼저 나오고, 2·4번은 C3 오름차순에 NULLS LAST 라 값이 5인 2번 다음에 NULL 인 4번이 온다. B 안에서는 C2 내림차순인데, Oracle 은 NULL 을 가장 큰 값으로 보므로 DESC 에서 NULL 인 3번이 1인 5번보다 먼저 나온다. 결과는 2, 4, 1, 3, 5 다. 정답은 ①번이다. ② 는 DESC 에서도 NULL 이 뒤로 간다고 본 것, ③ 은 NULLS LAST 를 거꾸로 적용한 것, ④ 는 C2 DESC 를 무시한 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T",
        "headers": [
          "ID",
          "C1",
          "C2",
          "C3"
        ],
        "rows": [
          [
            "1",
            "A",
            "1",
            "NULL"
          ],
          [
            "2",
            "A",
            "2",
            "5"
          ],
          [
            "3",
            "B",
            "NULL",
            "3"
          ],
          [
            "4",
            "A",
            "2",
            "NULL"
          ],
          [
            "5",
            "B",
            "1",
            "7"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT ID\nFROM   T\nORDER  BY C1, C2 DESC, C3 NULLS LAST;"
      }
    ]
  },
  {
    "id": 10493,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 44,
    "title": "아래 T 테이블에서 \"문자열에 리터럴 '_' 을 포함하는 행\" 을 찾는 LIKE 조건으로 옳은 것은? (기대 결과: AB_C, A_BD)",
    "options": [
      "WHERE COL2 LIKE '%_%'",
      "WHERE COL2 LIKE 'A%'",
      "WHERE COL2 LIKE 'A_B%'",
      "WHERE COL2 LIKE '%@_%' ESCAPE '@'"
    ],
    "correctIndex": 3,
    "explanation": "LIKE 패턴에서 '_' 은 임의의 한 문자를 의미하므로 ① 처럼 그대로 쓰면 모든 행이 매칭된다. 리터럴 '_' 자체를 검색하려면 ESCAPE 문자를 지정하고 그 뒤에 '_' 을 두어야 한다. ④ 의 `%@_%` ESCAPE '@' 는 '@_' 를 리터럴 '_' 로 해석해 'AB_C', 'A_BD' 만 매칭한다. ② 'A%' 는 A 로 시작하는 행, ③ 'A_B%' 는 A 다음 아무 한 글자 뒤에 B 가 오는 행이라 밑줄 포함 여부와 다르다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T 테이블",
        "headers": [
          "COL2"
        ],
        "rows": [
          [
            "AB_C"
          ],
          [
            "DFG"
          ],
          [
            "A_BD"
          ]
        ]
      }
    ]
  },
  {
    "id": 10494,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 45,
    "title": "아래와 같이 테이블을 만들고 데이터를 넣은 뒤 부서 10 을 삭제했다. 사원 중 부서번호가 NULL 인 행 수와 프로젝트의 행 수로 옳은 것은?",
    "options": [
      "0, 1",
      "2, 2",
      "2, 1",
      "삭제 시 오류가 발생한다"
    ],
    "correctIndex": 2,
    "explanation": "사원의 외래키는 ON DELETE SET NULL 이라, 부서 10 이 지워지면 그 부서를 가리키던 1·2번 사원의 부서번호가 NULL 로 바뀐다. 그래서 NULL 인 행은 2개다. 프로젝트의 외래키는 ON DELETE CASCADE 라 부서 10 을 가리키던 1번 프로젝트가 함께 삭제되어 1행이 남는다. 정답은 ③번이다. ① 은 SET NULL 을 행 삭제로 본 것, ② 는 CASCADE 를 놓친 것, ④ 는 자식 행이 있으면 무조건 삭제할 수 없다고 본 것이다. 옵션 없이 만든 외래키였다면 ④ 처럼 오류가 났을 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "CREATE TABLE 부서 (\n  부서번호 NUMBER PRIMARY KEY\n);\nCREATE TABLE 사원 (\n  사번     NUMBER PRIMARY KEY,\n  부서번호 NUMBER REFERENCES 부서\n           ON DELETE SET NULL\n);\nCREATE TABLE 프로젝트 (\n  번호     NUMBER PRIMARY KEY,\n  부서번호 NUMBER REFERENCES 부서\n           ON DELETE CASCADE\n);"
      },
      {
        "type": "table",
        "caption": "부서",
        "headers": [
          "부서번호"
        ],
        "rows": [
          [
            "10"
          ],
          [
            "20"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "사원",
        "headers": [
          "사번",
          "부서번호"
        ],
        "rows": [
          [
            "1",
            "10"
          ],
          [
            "2",
            "10"
          ],
          [
            "3",
            "20"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "프로젝트",
        "headers": [
          "번호",
          "부서번호"
        ],
        "rows": [
          [
            "1",
            "10"
          ],
          [
            "2",
            "20"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "DELETE FROM 부서 WHERE 부서번호 = 10;"
      }
    ]
  },
  {
    "id": 10495,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 46,
    "title": "아래 지점별·일자별 매출 테이블에 대한 SQL 의 결과(M 컬럼, 위에서부터)로 옳은 것은?",
    "options": [
      "1000, 1300, 2300, 500, 700",
      "1000, 1300, 1300, 500, 700",
      "1000, 300, 1000, 500, 200",
      "2300, 2300, 2300, 700, 700"
    ],
    "correctIndex": 1,
    "explanation": "PARTITION BY 지점 으로 A 와 B 를 따로 계산하고, ROWS BETWEEN 1 PRECEDING AND CURRENT ROW 는 \"바로 앞 1행 + 지금 행\" 두 행만 더한다. A: 1일 1000(앞 행 없음), 2일 1000 + 300 = 1300, 3일 300 + 1000 = 1300. B: 1일 500, 3일 500 + 200 = 700. 그래서 1000, 1300, 1300, 500, 700 이다(②). ① 은 UNBOUNDED PRECEDING(처음부터 누적)으로 본 결과라 A 의 3일이 2300 이 되고, ③ 은 윈도우 합계 없이 금액만 적은 것, ④ 는 윈도우 범위를 무시하고 지점 전체 합계를 붙인 결과다. B 지점에는 2일이 없어도 '1 PRECEDING' 은 날짜가 아니라 행 개수라 1일 행을 더한다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T 테이블 (매출)",
        "headers": [
          "지점",
          "일자",
          "금액"
        ],
        "rows": [
          [
            "A",
            "1일",
            "1000"
          ],
          [
            "A",
            "2일",
            "300"
          ],
          [
            "B",
            "1일",
            "500"
          ],
          [
            "A",
            "3일",
            "1000"
          ],
          [
            "B",
            "3일",
            "200"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT 지점, 일자,\n       SUM(금액) OVER (PARTITION BY 지점 ORDER BY 일자\n                       ROWS BETWEEN 1 PRECEDING AND CURRENT ROW) AS M\nFROM   T\nORDER BY 지점, 일자;"
      }
    ]
  },
  {
    "id": 10496,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 47,
    "title": "아래 SQL 의 결과로 옳은 것은?",
    "options": [
      "1, -1",
      "1, 1",
      "3, 3",
      "0, 0"
    ],
    "correctIndex": 1,
    "explanation": "Oracle의 MOD는 `m - n * TRUNC(m/n)`로 계산된다. MOD(10, 3) = 10 - 3*3 = 1, MOD(10, -3) = 10 - (-3)*(-3) = 1이다. ① 은 결과 부호가 나누는 수(-3)를 따른다고 본 결과(Oracle 은 나눠지는 수 10 의 부호), ③ 은 몫, ④ 는 나누어떨어진다고 본 결과다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT MOD(10, 3), MOD(10, -3) FROM DUAL;"
      }
    ]
  },
  {
    "id": 10497,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 48,
    "title": "아래 SQL 의 결과로 옳은 것은?",
    "options": [
      "A",
      "B",
      "C",
      "오류"
    ],
    "correctIndex": 1,
    "explanation": "CASE 식은 위에서부터 차례로 평가되어 가장 먼저 참인 WHEN 절의 결과를 반환한다. `1 = 2`는 거짓이므로 넘어가고, `2 = 2`가 참이어서 'B'가 반환된다. ① A 는 1 = 2 가 거짓이라 건너뛰고, ③ C 는 참인 WHEN 이 있어 ELSE 로 가지 않으며, ④ 오류는 나지 않는다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT CASE WHEN 1 = 2 THEN 'A'\n            WHEN 2 = 2 THEN 'B'\n            ELSE 'C' END\nFROM DUAL;"
      }
    ]
  },
  {
    "id": 10498,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 49,
    "title": "데이터베이스 접근 권한과 객체 접근 권한을 부여하는 언어의 종류는?",
    "options": [
      "DDL (Data Definition Language)",
      "DML (Data Manipulation Language)",
      "TCL (Transaction Control Language)",
      "DCL (Data Control Language)"
    ],
    "correctIndex": 3,
    "explanation": "GRANT·REVOKE 로 데이터베이스와 객체에 대한 접근 권한을 주고 회수하는 언어는 DCL 이다(④). DDL(①)은 CREATE·ALTER·DROP 등 구조 정의, DML(②)은 SELECT·INSERT·UPDATE·DELETE, TCL(③)은 COMMIT·ROLLBACK·SAVEPOINT 다.",
    "_source": "authored"
  },
  {
    "id": 10499,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 50,
    "title": "아래 SQL 의 결과는?",
    "options": [
      "10, -2",
      "10, -3",
      "11, -3",
      "11, -2"
    ],
    "correctIndex": 1,
    "explanation": "FLOOR 는 주어진 수보다 작거나 같은 정수 중 가장 큰 값으로 내림한다. FLOOR(10.4) = 10, 음수 FLOOR(-2.4) 는 -2.4 보다 작거나 같은 가장 큰 정수인 -3 이다(②). 소수점만 버리는 TRUNC(-2.4) 라면 -2 가 되며(①), 11(③④)은 CEIL 의 결과다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT FLOOR(10.4), FLOOR(-2.4) FROM DUAL;"
      }
    ]
  }
];
