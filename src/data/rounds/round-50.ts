// Auto-generated from PDF + blog + scripts/authored/round-50.json
// 제50회 — 2023년 9월 · 50문항
// ⚠ 직접 편집 금지. 출처별 데이터를 고친 뒤 'node scripts/build-quiz-bank.mjs' 재실행.
import type { QuizQuestion } from '../quizBank';

export const ROUND_50: QuizQuestion[] = [
  {
    "id": 10500,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "1과목",
    "number": 1,
    "title": "아래 거래처 엔터티의 주식별자로 가장 적절한 것은?",
    "options": [
      "거래처명",
      "사업자번호",
      "거래처코드",
      "사업자번호 + 거래처명 + 전화"
    ],
    "correctIndex": 2,
    "explanation": "주식별자는 업무에서 자주 쓰는 속성으로, 값이 바뀌지 않고 NULL 이 없어야 하며, 이름처럼 서술하는 속성은 피하고, 여러 속성을 묶더라도 너무 많이 묶지 않는다. 거래처코드는 회사가 정해 붙인 값이라 바뀌지 않고 모든 행에 값이 있어 가장 적절하다. 정답은 ③번이다. ① 은 이름 속성이고 상호 변경으로 값이 바뀐다. ② 는 개인 거래처에서 NULL 이 생긴다. ④ 는 속성이 너무 많고 바뀔 수 있는 값을 포함하며, 사업자번호가 NULL 인 행도 있다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "거래처 (전화 칼럼은 생략)",
        "headers": [
          "거래처코드",
          "사업자번호",
          "거래처명"
        ],
        "rows": [
          [
            "V01",
            "123-45-67890",
            "한빛상사"
          ],
          [
            "V02",
            "NULL",
            "김철수(개인)"
          ],
          [
            "V03",
            "234-56-78901",
            "바다유통"
          ]
        ]
      },
      {
        "type": "text",
        "content": "거래처명은 상호를 바꾸면 달라지고, 전화는 바뀔 수 있다. 개인 거래처는 사업자번호가 없다."
      }
    ]
  },
  {
    "id": 10501,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "1과목",
    "number": 2,
    "title": "아래 ERD 의 관계 표기(관계명·관계차수·관계선택사양)를 바르게 읽은 것은? (IE 표기법)",
    "options": [
      "관계명: 고객, 관계차수: 1:M, 고객은 주문이 반드시 하나 이상 있어야 한다.",
      "관계명: 주문함, 관계차수: M:N, 주문은 고객이 없을 수 있다.",
      "관계명: 주문함, 관계차수: 1:1, 고객은 주문이 없을 수 있다.",
      "관계명: 주문함, 관계차수: 1:M, 주문은 반드시 고객 하나에 속하고 고객은 주문이 없을 수 있다."
    ],
    "correctIndex": 3,
    "explanation": "관계 표기의 요소는 관계명, 관계차수, 관계선택사양이다. 관계명은 관계선 위의 이름(주문함)이다. 관계차수는 선 끝 모양으로 읽는다. 주문 쪽 끝이 까마귀발({)이라 고객 하나에 주문이 여럿일 수 있는 1:M 이다. 관계선택사양은 원(o, 없을 수 있음)과 막대(|, 반드시 있음)로 읽는다. 고객 쪽 끝의 || 는 주문 하나에 고객이 반드시 하나라는 뜻이고, 주문 쪽 끝의 o{ 는 고객이 주문을 하나도 안 했을 수 있다는 뜻이다. 정답은 ④번이다. ① 은 엔터티 이름을 관계명으로 보고 주문 쪽 원(o)을 필수로 읽은 것이고, ② 는 한쪽에만 까마귀발이 있는데 M:N 으로 본 것, ③ 은 까마귀발을 무시하고 1:1 로 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "고객·주문 ERD",
        "mermaid": "erDiagram\n    고객 ||..o{ 주문 : \"주문함\"\n    고객 {\n        string 고객번호 PK\n    }\n    주문 {\n        string 주문번호 PK\n        string 고객번호 FK\n    }"
      }
    ]
  },
  {
    "id": 10502,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "1과목",
    "number": 3,
    "title": "아래 회원 엔터티의 속성 ㉠~㉣ 에 알맞은 분류로 바르게 짝지은 것은?",
    "options": [
      "단일속성, 복합속성, 식별자, 파생속성",
      "복합속성, 단일속성, 식별자, 파생속성",
      "복합속성, 다중값속성, 파생속성, 식별자",
      "복합속성, 다중값속성, 식별자, 파생속성"
    ],
    "correctIndex": 3,
    "explanation": "속성을 구성 방식으로 나누면, 더 작게 나눌 수 있는 복합속성(㉠ 주소), 값이 여러 개일 수 있는 다중값속성(㉡ 취미), 나눌 수 없는 단일속성이 있다. 엔터티를 대표하며 인스턴스를 구별하는 속성은 식별자(㉢), 다른 속성으로 계산되는 속성은 파생속성(㉣)이다. 정답은 ④번이다. ① 은 주소를 단일, 취미를 복합으로 본 것, ② 는 취미를 단일속성으로 본 것, ③ 은 식별자와 파생속성을 바꿔 본 것이다. 다중값속성 ㉡ 은 제1정규형을 위해 결국 별도 엔터티로 떼어 낸다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "㉠ 주소: 시·구·상세주소로 나눌 수 있다.\n㉡ 취미: 한 회원이 여러 개를 가질 수 있다.\n㉢ 회원번호: 회원을 하나씩 구별해 엔터티를 대표한다.\n㉣ 나이: 생년월일로 계산한다."
      }
    ]
  },
  {
    "id": 10503,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "1과목",
    "number": 4,
    "title": "아래 보험회사 업무의 엔터티 ㉠~㉣ 을 유형 기준(유형·개념·사건 엔터티)으로 바르게 분류한 것은?",
    "options": [
      "유형, 개념, 사건, 개념",
      "유형, 유형, 사건, 개념",
      "개념, 개념, 사건, 유형",
      "유형, 사건, 개념, 개념"
    ],
    "correctIndex": 0,
    "explanation": "유형 엔터티는 사람·물건처럼 물리적 형태가 있는 것, 개념 엔터티는 형태는 없지만 관리해야 할 개념적인 것, 사건 엔터티는 업무를 하면서 생기는 일이다. 사원은 형태가 있는 사람이라 유형, 보험상품과 조직은 실체가 없는 개념이라 개념, 청구는 업무 중 발생한 일이라 사건 엔터티다. 정답은 ①번이다. ② 는 보험상품을 물건처럼 유형으로 본 것, ③ 은 사원과 조직을 바꿔 본 것, ④ 는 보험상품과 청구를 바꿔 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "㉠ 사원: 보험을 판매하는 직원\n㉡ 보험상품: 회사가 설계한 보험 종류\n㉢ 청구: 고객이 보험금을 달라고 요청한 건\n㉣ 조직: 본부·지점 같은 회사 조직"
      }
    ]
  },
  {
    "id": 10504,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "1과목",
    "number": 5,
    "title": "아래 병원 ERD 에서 발생 시점에 따른 중심 엔터티로 가장 적절한 것은?",
    "options": [
      "환자",
      "의사",
      "진료",
      "처방내역"
    ],
    "correctIndex": 2,
    "explanation": "중심 엔터티는 기본 엔터티로부터 생겨 업무의 중심 역할을 하고, 다시 행위 엔터티의 부모가 된다. 진료는 기본 엔터티인 환자·의사에서 생기고 처방내역의 부모가 되므로 중심 엔터티다. 정답은 ③번이다. ① 환자와 ② 의사는 다른 엔터티 없이 존재하는 기본 엔터티다. ④ 처방내역은 진료와 약품 두 부모에서 생기고 처방할 때마다 늘어나는 행위 엔터티다. 주문·계약·청구처럼 업무의 중심 거래가 흔히 중심 엔터티가 된다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "병원 ERD",
        "mermaid": "erDiagram\n    환자 ||..o{ 진료 : \"받음\"\n    의사 ||..o{ 진료 : \"담당\"\n    진료 ||--o{ 처방내역 : \"포함\"\n    약품 ||..o{ 처방내역 : \"처방\""
      }
    ]
  },
  {
    "id": 10505,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "1과목",
    "number": 6,
    "title": "두 프로젝트에서 따로 만든 고객 엔터티를 하나로 통합하려 한다. 데이터 모델링 유의점에 비추어 옳지 않은 것은?",
    "options": [
      "같은 사람을 두 곳에 따로 두고 있으면 중복성 문제이므로 하나로 모은다.",
      "고객등급과 회원등급처럼 같은 뜻을 다르게 부르는 속성은 이름과 값 규칙을 하나로 맞춘다.",
      "합치기 전에 고객번호와 회원ID 가 같은 사람을 같은 방식으로 구별하는지 확인한다.",
      "칼럼 구성과 규칙이 달라도 우선 그대로 합치고, 차이는 각 프로그램에서 알아서 맞추게 한다."
    ],
    "correctIndex": 3,
    "explanation": "데이터 모델링에서는 중복성, 비유연성, 비일관성을 피해야 한다. 같은 대상을 한곳으로 모으고(①), 같은 뜻의 속성 이름과 값 규칙을 맞추며(②), 식별자가 같은 대상을 같은 방식으로 가리키는지 확인하는 것(③)은 모두 맞는 통합 절차다. 규칙을 맞추지 않은 채 합치고 차이를 프로그램마다 따로 처리하게 하면, 같은 고객의 등급이 화면마다 달라지는 비일관성이 생긴다. 정답은 ④번이다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "A 프로젝트: 고객(고객번호, 이름, 고객등급)\nB 프로젝트: 회원(회원ID, 성명, 회원등급, 가입채널)"
      }
    ]
  },
  {
    "id": 10506,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "1과목",
    "number": 7,
    "title": "아래 [좌석예약] 인스턴스를 유일하게 구분하는 식별자로 가장 적절한 속성 조합은? (한 공연은 여러 회차가 있고, 같은 좌석을 회차마다 따로 예약한다)",
    "options": [
      "(공연ID)",
      "(공연ID, 좌석)",
      "(회차, 좌석)",
      "(공연ID, 회차, 좌석)"
    ],
    "correctIndex": 3,
    "explanation": "식별자는 엔터티의 인스턴스를 유일하게 구분하는 하나 이상의 속성 집합이다. (공연ID, 좌석)은 P1-A1 이 1회·2회 두 번 나오고, (회차, 좌석)은 1회-A1 이 P1·P2 두 번 나와 구분하지 못한다. (공연ID, 회차, 좌석)은 모두 다르고 하나라도 빼면 겹치므로 유일성과 최소성을 함께 만족한다. 정답은 ④번이다. 예약자는 같은 사람이 여러 좌석을 예약할 수 있어 식별자에 넣지 않는다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "좌석예약",
        "headers": [
          "공연ID",
          "회차",
          "좌석",
          "예약자"
        ],
        "rows": [
          [
            "P1",
            "1",
            "A1",
            "김"
          ],
          [
            "P1",
            "2",
            "A1",
            "이"
          ],
          [
            "P2",
            "1",
            "A1",
            "박"
          ],
          [
            "P1",
            "1",
            "A2",
            "최"
          ]
        ]
      }
    ]
  },
  {
    "id": 10507,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "1과목",
    "number": 8,
    "title": "아래 산출물 중 3단계 스키마(외부·개념·내부) 어디에도 해당하지 않는 것은?",
    "options": [
      "사용자·업무별로 필요한 데이터만 보여 주는 뷰 정의",
      "조직 전체의 테이블·칼럼·관계를 통합한 정의",
      "데이터 파일 배치, 인덱스 등 저장 구조 정의",
      "응용 프로그램 소스에 들어 있는 SQL 문 모음"
    ],
    "correctIndex": 3,
    "explanation": "3단계 스키마는 사용자 관점의 외부 스키마(①), 조직 전체 관점의 개념 스키마(②), 저장 관점의 내부 스키마(③)로 이루어진다. 응용 프로그램 소스의 SQL 모음은 데이터베이스 구조를 정의하는 스키마가 아니라 데이터를 쓰는 프로그램 쪽 산출물이다. '응용 스키마' 같은 단계는 3단계 스키마에 없다. 정답은 ④번이다.",
    "_source": "authored"
  },
  {
    "id": 10508,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "1과목",
    "number": 9,
    "title": "아래 ERD 는 학생과 강좌 사이의 M:N 관계를 해소한 결과다. 이에 대한 설명으로 옳지 않은 것은? (IE 표기법)",
    "options": [
      "M:N 관계를 이처럼 1:M, M:1 관계로 해소하는 작업은 논리적 모델링 단계에서 한다.",
      "수강신청은 학생과 강좌의 관계에서 생겨난 교차 엔터티로, 두 부모의 주식별자를 물려받았다.",
      "성적은 학생과 강좌의 조합마다 정해지므로 수강신청의 속성으로 두는 것이 알맞다.",
      "한 학생이 같은 강좌를 다른 학기에 다시 신청한 이력도 이 구조 그대로 저장할 수 있다."
    ],
    "correctIndex": 3,
    "explanation": "수강신청의 주식별자는 (학번, 강좌코드) 라 같은 학생과 같은 강좌의 조합은 한 행만 들어갈 수 있다. 같은 강좌를 다른 학기에 다시 신청하면 주식별자가 겹쳐 저장할 수 없으므로 ④ 가 옳지 않다. 재수강 이력까지 남기려면 학기(또는 신청순번)를 주식별자에 더해야 한다. ① M:N 관계를 교차 엔터티로 풀어 1:M, M:1 로 바꾸는 일은 정규화와 함께 논리적 모델링에서 한다. ② 수강신청은 학생과 강좌 사이의 관계가 엔터티가 된 것으로, 학번과 강좌코드를 물려받아 주식별자로 쓴다. ③ 성적은 학생 한 사람이나 강좌 하나만으로는 정해지지 않고 둘의 조합마다 정해지므로 수강신청에 둔다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "학생·강좌·교수·수강신청 ERD",
        "mermaid": "erDiagram\n    학생 ||--o{ 수강신청 : \"신청\"\n    강좌 ||--o{ 수강신청 : \"개설\"\n    교수 ||..o{ 강좌 : \"담당\"\n    학생 {\n        string 학번 PK\n        string 이름\n    }\n    강좌 {\n        string 강좌코드 PK\n        string 강좌명\n        string 교수번호 FK\n    }\n    교수 {\n        string 교수번호 PK\n        string 교수명\n    }\n    수강신청 {\n        string 학번 PK,FK\n        string 강좌코드 PK,FK\n        date 신청일자\n        string 성적\n    }"
      }
    ]
  },
  {
    "id": 10509,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "1과목",
    "number": 10,
    "title": "아래 세 엔터티의 금액 속성을 도메인 관점에서 본 설명으로 가장 적절한 것은?",
    "options": [
      "같은 의미의 금액이므로 하나의 '금액' 도메인을 정의해 타입·길이·허용 범위를 통일하는 것이 좋다.",
      "도메인은 엔터티마다 하나씩만 정의하므로 세 엔터티의 금액은 따로 정의해야 한다.",
      "도메인은 주식별자 속성에만 정의하므로 금액 속성과는 관계가 없다.",
      "환불금액을 문자형으로 둔 것은 표현 방식의 차이일 뿐 도메인과는 상관없다."
    ],
    "correctIndex": 0,
    "explanation": "도메인은 속성이 가질 수 있는 값의 범위(데이터 타입, 길이, 허용 값, 기본값 등)를 정한 것이다. 의미가 같은 속성에 같은 도메인을 적용하면 엔터티가 달라도 타입과 범위가 일관되어, 금액끼리 비교·계산할 때 형 변환이나 자릿수 문제가 생기지 않는다. 표처럼 같은 '원 단위 금액' 이 NUMBER(10), NUMBER(12,2), VARCHAR2(10) 로 제각각이면 도메인이 통일되지 않은 상태다. 정답은 ①번이다. ② 도메인은 엔터티가 아니라 속성의 값 범위를 정하는 것이라 여러 엔터티가 함께 쓸 수 있고, ③ 주식별자에 한정되지 않으며, ④ 금액을 문자형으로 두면 계산·정렬이 달라지므로 바로 도메인 문제다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "금액 속성 정의",
        "headers": [
          "엔터티.속성",
          "타입"
        ],
        "rows": [
          [
            "주문.주문금액",
            "NUMBER(10)"
          ],
          [
            "결제.결제금액",
            "NUMBER(12,2)"
          ],
          [
            "환불.환불금액",
            "VARCHAR2(10)"
          ]
        ]
      },
      {
        "type": "text",
        "content": "세 속성 모두 '원 단위 금액' 을 뜻한다."
      }
    ]
  },
  {
    "id": 10510,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 11,
    "title": "아래 STUDENT, ENROLL 테이블에 대한 ㉠~㉣ 의 결과 행 수를 차례로 나열한 것은?",
    "options": [
      "2, 2, 1, 1",
      "3, 1, 1, 1",
      "2, 1, 1, 1",
      "2, 1, 2, 1"
    ],
    "correctIndex": 2,
    "explanation": "AVG 는 NULL 을 빼고 평균을 낸다. ㉠ 에서 S1 은 (4.0 + 2.0) / 2 = 3.0, S2 는 3.5 한 값의 평균이라 3.5 로 둘 다 남는다. S3 은 학점이 NULL 뿐이라 평균이 NULL 이어서 빠져 2행이다. ㉡ 은 NULL 을 0 으로 바꿔 S2 가 (3.5 + 0) / 2 = 1.75 가 되어 S1 만 남는다. ㉢ 의 SUM / COUNT(*) 도 NULL 행을 분모에 넣으므로 ㉡ 과 같은 1행이다. ㉣ 은 LEFT JOIN 으로 수강 기록이 없는 S4 까지 남기고, 강좌가 하나도 없는 S4 만 고르므로 1행이다. 정답은 ③번이다. ① 은 ㉡ 의 NVL 이 결과를 바꾸지 않는다고 본 값이다. ② 는 평균이 NULL 인 S3 도 통과한다고 생각하면 나오는 값이다. ④ 는 SUM / COUNT(*) 가 AVG 와 같다고 착각한 결과다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "STUDENT",
        "headers": [
          "학번"
        ],
        "rows": [
          [
            "S1"
          ],
          [
            "S2"
          ],
          [
            "S3"
          ],
          [
            "S4"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "ENROLL",
        "headers": [
          "학번",
          "강좌",
          "학점"
        ],
        "rows": [
          [
            "S1",
            "A",
            "4.0"
          ],
          [
            "S1",
            "B",
            "2.0"
          ],
          [
            "S2",
            "A",
            "3.5"
          ],
          [
            "S2",
            "B",
            "NULL"
          ],
          [
            "S3",
            "A",
            "NULL"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- 공통\nSELECT S.학번\nFROM   STUDENT S JOIN ENROLL E\n       ON S.학번 = E.학번\nGROUP BY S.학번\n-- ㉠ HAVING AVG(E.학점) >= 3.0\n-- ㉡ HAVING AVG(NVL(E.학점, 0)) >= 3.0\n-- ㉢ HAVING SUM(E.학점) / COUNT(*)\n--             >= 3.0\n-- ㉣ (JOIN 을 LEFT JOIN 으로 바꾸고)\n--    HAVING COUNT(E.강좌) = 0"
      }
    ]
  },
  {
    "id": 10511,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 12,
    "title": "아래 뷰 생성 스크립트와 조회 SQL 의 실행 결과로 옳은 것은?",
    "options": [
      "0",
      "200",
      "300",
      "400"
    ],
    "correctIndex": 1,
    "explanation": "뷰 조건과 조회 조건이 AND 로 결합되어 C1='B' 이고 C2 >= 200 인 (B, 200) 한 건의 SUM 이 200 이다. ① 0 은 뷰 조건과 조회 조건이 서로 막는다고 본 값, ③ 300 은 뷰의 B 두 행(200 + 100)을 모두 더한 값, ④ 400 은 C1 이 NULL 인 행까지 더한 값이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TBL 테이블",
        "headers": [
          "C1",
          "C2"
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
            "B",
            "100"
          ],
          [
            "NULL",
            "200"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "CREATE VIEW V_TBL AS\nSELECT * FROM TBL\nWHERE C1 = 'B' OR C1 IS NULL;\n\nSELECT SUM(C2) FROM V_TBL\nWHERE C2 >= 200 AND C1 = 'B';"
      }
    ]
  },
  {
    "id": 10512,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 13,
    "title": "아래 두 OUTER JOIN SQL 의 결과(ㄱ, ㄴ)로 옳은 것은?",
    "options": [
      "ㄱ 7, ㄴ 2",
      "ㄱ 6, ㄴ 2",
      "ㄱ 6, ㄴ 6",
      "ㄱ 6, ㄴ 3"
    ],
    "correctIndex": 1,
    "explanation": "LEFT OUTER JOIN 에서 ON 절 조건은 \"어떤 오른쪽 행과 짝지을지\" 를 정할 뿐 왼쪽 행을 지우지 않고, WHERE 절 조건은 조인이 끝난 결과에서 행을 거른다. ㄱ 은 C1 이 같고 B.C2 가 1~3 인 TAB2 행하고만 짝짓는다. B 는 (B, 2), C 는 (C, 3) 과 짝지어지고, D 는 (D, 4)·(D, 7) 모두 C2 가 범위 밖이라 짝이 없다. A·E 는 TAB2 에 없고, C1 이 NULL 인 행은 NULL = NULL 이 참이 아니라 짝이 없다. 짝이 없는 행도 TAB2 쪽을 NULL 로 채워 한 행씩 남으므로 TAB1 의 6 행이 그대로 6 이다. ㄴ 은 먼저 C1 만으로 짝지어 A(짝 없음), B, C, D 두 행(D 4·D 7), E(짝 없음), NULL(짝 없음) 의 7 행을 만든 뒤 WHERE 로 B.C2 가 1~3 인 행만 남긴다. 짝이 없어 B.C2 가 NULL 인 행도 BETWEEN 이 참이 아니라 빠지므로 (B, 2)·(C, 3) 두 행, 2 다. 정답은 ②번이다. ① 은 ㄱ 에서 ON 의 BETWEEN 을 놓쳐 D 를 두 번 센 값, ③ 은 WHERE 조건도 ON 조건처럼 왼쪽 행을 남긴다고 본 값, ④ 는 NULL = NULL 을 참으로 보고 (NULL, 6) 과 (NULL, 1) 을 짝지은 값이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TAB1",
        "headers": [
          "C1",
          "C2"
        ],
        "rows": [
          [
            "A",
            "1"
          ],
          [
            "B",
            "2"
          ],
          [
            "C",
            "3"
          ],
          [
            "D",
            "4"
          ],
          [
            "E",
            "5"
          ],
          [
            "NULL",
            "6"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "TAB2",
        "headers": [
          "C1",
          "C2"
        ],
        "rows": [
          [
            "B",
            "2"
          ],
          [
            "C",
            "3"
          ],
          [
            "D",
            "4"
          ],
          [
            "D",
            "7"
          ],
          [
            "NULL",
            "1"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- ㄱ\nSELECT COUNT(*)\nFROM   TAB1 A LEFT OUTER JOIN TAB2 B\nON     (A.C1 = B.C1\n        AND B.C2 BETWEEN 1 AND 3);\n\n-- ㄴ\nSELECT COUNT(*)\nFROM   TAB1 A LEFT OUTER JOIN TAB2 B\nON     (A.C1 = B.C1)\nWHERE  B.C2 BETWEEN 1 AND 3;"
      }
    ]
  },
  {
    "id": 10513,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 14,
    "title": "아래 SQL 의 결과로 옳은 것은?",
    "options": [
      "abcd",
      "defg",
      "cdefg",
      "efg"
    ],
    "correctIndex": 1,
    "explanation": "T 의 단일 행에 STR='abcdefg' 가 들어 있으므로 LENGTH(STR)=7 이고 LENGTH(STR)-3 = 4 이다. SUBSTR('abcdefg', 4) 는 4번째 문자부터 끝까지를 반환하므로 'defg' 이다. 정답은 ②. ① abcd 는 앞 4글자, ③ cdefg 는 시작 위치를 3 으로, ④ efg 는 5 로 본 결과다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T 테이블",
        "headers": [
          "STR"
        ],
        "rows": [
          [
            "abcdefg"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- STR = 'abcdefg'\nSELECT SUBSTR(STR, LENGTH(STR) - 3)\nFROM T;"
      }
    ]
  },
  {
    "id": 10514,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 15,
    "title": "행이 있는 TAB1 테이블에 대한 SQL ㉠~㉣ 의 결과로 옳은 것은?",
    "options": [
      "0, 9999, 공집합, 0",
      "9999, 9999, 9999, 0",
      "0, 9999, 9999, 0",
      "0, NULL, 공집합, 0"
    ],
    "correctIndex": 0,
    "explanation": "대상 행이 없어도 GROUP BY 없는 집계는 1행을 돌려준다. COUNT(*) 는 0 이라 NULL 이 아니므로 ㉠ 의 NVL 은 그대로 0 이다. MAX 는 NULL 이라 ㉡ 은 NVL 이 9999 로 바꾼다. ㉢ 은 집계가 아닌 단일 행 함수라 행이 없으면 결과도 없는 공집합이다. ㉣ 은 COUNT 라 0 이다. 정답은 ①번이다. ② 는 COUNT(*) 도 NULL 이 된다고 본 것, ③ 은 행이 없어도 단일 행 함수가 값을 낸다고 본 것, ④ 는 바깥 NVL 이 MAX 결과를 바꾼다는 점을 놓친 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT NVL(COUNT(*), 9999)\nFROM TAB1 WHERE 1 = 2;\n-- ㉡\nSELECT NVL(MAX(COL1), 9999)\nFROM TAB1 WHERE 1 = 2;\n-- ㉢\nSELECT NVL(COL1, 9999)\nFROM TAB1 WHERE 1 = 2;\n-- ㉣\nSELECT COUNT(NVL(COL1, 0))\nFROM TAB1 WHERE 1 = 2;"
      }
    ]
  },
  {
    "id": 10515,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 16,
    "title": "아래 두 테이블을 튜터ID = ID 로 조인할 때 INNER JOIN, 클래스 기준 LEFT JOIN, FULL OUTER JOIN 의 결과 행 수로 옳은 것은? (순서대로)",
    "options": [
      "2, 3, 3",
      "3, 3, 4",
      "2, 2, 4",
      "2, 3, 4"
    ],
    "correctIndex": 3,
    "explanation": "INNER JOIN 은 양쪽에 짝이 있는 수학-김, 영어-이 2행이다. 클래스 기준 LEFT JOIN 은 여기에 튜터가 없는 과학이 튜터 칼럼 NULL 로 더해져 3행이다. FULL OUTER JOIN 은 LEFT 결과에 맡은 클래스가 없는 튜터 박까지 클래스 칼럼 NULL 로 더해져 4행이다. 정답은 ④번이다. ① 은 FULL OUTER 를 LEFT 와 같다고 본 것, ② 는 INNER 에도 과학이 남는다고 본 것, ③ 은 LEFT 에서 과학이 빠진다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "클래스",
        "headers": [
          "클래스",
          "튜터ID"
        ],
        "rows": [
          [
            "수학",
            "T1"
          ],
          [
            "영어",
            "T2"
          ],
          [
            "과학",
            "NULL"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "튜터",
        "headers": [
          "ID",
          "이름"
        ],
        "rows": [
          [
            "T1",
            "김"
          ],
          [
            "T2",
            "이"
          ],
          [
            "T3",
            "박"
          ]
        ]
      }
    ]
  },
  {
    "id": 10516,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 17,
    "title": "카테고리번호 11 에서 상위 카테고리까지 역방향으로 조회하는 계층형 SQL 로 옳은 것은?",
    "options": [
      "START WITH 카테고리번호=11 CONNECT BY PRIOR 카테고리번호=상위번호",
      "START WITH 카테고리번호=11 CONNECT BY 카테고리번호=PRIOR 상위번호",
      "START WITH 상위번호=11 CONNECT BY PRIOR 카테고리번호=상위번호",
      "START WITH 카테고리번호=11 CONNECT BY 상위번호=PRIOR 상위번호"
    ],
    "correctIndex": 1,
    "explanation": "자식에서 부모로 올라가는 역방향 전개다. CONNECT BY 에서 PRIOR 가 붙은 컬럼은 '바로 앞에 찾은 행' 의 값이다. ② `카테고리번호 = PRIOR 상위번호` 는 앞에 찾은 행(11)의 상위번호(5)와 카테고리번호가 같은 행을 다음으로 찾으므로 11 → 5 → 2 → 1 순으로 거슬러 올라간다. ① 은 11 을 상위로 둔 자식을 찾는 순방향이라 11 한 행만 나오고, ③ 은 상위번호가 11 인 행이 없어 결과가 없으며, ④ 는 상위번호끼리 비교해 부모를 찾지 못한다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "카테고리 테이블",
        "headers": [
          "카테고리번호",
          "카테고리명",
          "상위번호"
        ],
        "rows": [
          [
            "1",
            "전체",
            "NULL"
          ],
          [
            "2",
            "디지털",
            "1"
          ],
          [
            "5",
            "노트북",
            "2"
          ],
          [
            "11",
            "게이밍 노트북",
            "5"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT 카테고리번호, 카테고리명,\n       LEVEL\nFROM   카테고리\n(   ?   );\n-- START WITH ... CONNECT BY ...\n-- (보기에서 고르기)"
      },
      {
        "type": "table",
        "caption": "출력 결과 (역방향 전개)",
        "headers": [
          "카테고리번호",
          "카테고리명",
          "LEVEL"
        ],
        "rows": [
          [
            "11",
            "게이밍 노트북",
            "1"
          ],
          [
            "5",
            "노트북",
            "2"
          ],
          [
            "2",
            "디지털",
            "3"
          ],
          [
            "1",
            "전체",
            "4"
          ]
        ]
      }
    ]
  },
  {
    "id": 10517,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 18,
    "title": "아래 T 테이블에 대해 SELECT A, B, SUM(V) FROM T 뒤에 ㉠~㉣ 의 GROUP BY 절을 각각 붙였을 때 결과 행 수를 차례로 나열한 것은?",
    "options": [
      "6, 8, 5, 5",
      "6, 8, 4, 6",
      "5, 8, 4, 5",
      "6, 8, 4, 5"
    ],
    "correctIndex": 3,
    "explanation": "데이터의 (A, B) 조합은 3개, A 값은 A1·A2 2개, B 값은 B1·B2 2개다. ㉠ ROLLUP(A, B) 는 (A, B) 3행 + (A) 소계 2행 + () 총계 1행 = 6행이다. ㉡ CUBE(A, B) 는 여기에 (B) 소계 2행이 더해져 8행이다. ㉢ GROUPING SETS(A, B) 는 (A) 2행과 (B) 2행만 만들어 4행이고, 상세나 총계는 없다. ㉣ ROLLUP(A), B 는 ROLLUP(A) 가 만드는 (A)·() 에 B 를 붙인 (A, B)·(B) 두 묶음이다. 3행 + 2행 = 5행이다. 정답은 ④번이다. ① 은 GROUPING SETS 에도 총계가 붙는다고 본 값이다. ② 는 ROLLUP(A), B 를 ROLLUP(A, B) 와 같게 생각하면 나오는 값이다. ③ 은 ROLLUP 에 총계 행이 없다고 착각한 결과다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T",
        "headers": [
          "A",
          "B",
          "V"
        ],
        "rows": [
          [
            "A1",
            "B1",
            "10"
          ],
          [
            "A1",
            "B2",
            "20"
          ],
          [
            "A2",
            "B1",
            "30"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- ㉠\nGROUP BY ROLLUP(A, B)\n-- ㉡\nGROUP BY CUBE(A, B)\n-- ㉢\nGROUP BY GROUPING SETS(A, B)\n-- ㉣\nGROUP BY ROLLUP(A), B"
      }
    ]
  },
  {
    "id": 10518,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 19,
    "title": "A(ID, 이름), B(ID, 이름, 점수) 테이블에 아래 SQL ㉠, ㉡, ㉢ 을 실행했을 때 결과의 칼럼 수로 옳은 것은?",
    "options": [
      "3, 3, 5",
      "3, 4, 5",
      "5, 4, 3",
      "3, 4, 4"
    ],
    "correctIndex": 1,
    "explanation": "NATURAL JOIN 은 이름이 같은 칼럼(ID, 이름)을 모두 등가 조인 조건으로 쓰고, 그 칼럼을 결과에 한 번씩만 보여 줘 ID, 이름, 점수 의 3칼럼이다. USING(ID) 는 ID 만 조건으로 쓰고 ID 를 한 번만 보여 주므로 ID, A.이름, B.이름, 점수 의 4칼럼이다. ON 은 두 테이블의 칼럼을 모두 보여 줘 2 + 3 = 5칼럼이다. 정답은 ②번이다. ① 은 USING 도 이름을 합친다고 본 것, ③ 은 순서를 거꾸로 본 것, ④ 는 ON 도 조인 칼럼을 합친다고 본 것이다. NATURAL JOIN 은 등가 조인만 되고 ON·USING 절을 함께 쓸 수 없다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT * FROM A NATURAL JOIN B;\n-- ㉡\nSELECT * FROM A JOIN B USING (ID);\n-- ㉢\nSELECT * FROM A JOIN B\n  ON A.ID = B.ID;"
      }
    ]
  },
  {
    "id": 10519,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 20,
    "title": "아래 T 테이블에서 ㉠, ㉡ 을 각각 실행(서로 영향 없이 원래 테이블에서 실행)했을 때 남는 행 수로 옳은 것은?",
    "options": [
      "㉠ 4행, ㉡ 5행",
      "㉠ 4행, ㉡ 4행",
      "㉠ 3행, ㉡ 5행",
      "㉠ 3행, ㉡ 3행"
    ],
    "correctIndex": 0,
    "explanation": "㉠ 의 GROUP BY NAME 은 NULL 인 행들도 한 그룹으로 묶는다. 그룹별 MIN(ID) 는 KIM 100, PARK 200, NULL 300, LEE 700 이고, 이 넷이 아닌 400·500·600 이 지워져 4행이 남는다. ㉡ 은 같은 이름 중 가장 작은 ID 보다 큰 행을 지운다. KIM 400 과 PARK 600 은 지워진다. 그런데 NAME 이 NULL 인 300·500 은 B.NAME = A.NAME 이 참이 되는 행이 없어 서브쿼리가 NULL 을 돌려주고, ID > NULL 은 UNKNOWN 이라 지워지지 않는다. 그래서 5행이 남는다. 정답은 ①번이다. ② 는 ㉡ 에서도 NULL 끼리 같은 이름으로 묶인다고 본 것이다. ③ 은 ㉠ 의 GROUP BY 가 NULL 그룹을 만들지 않아 300·500 이 모두 지워진다고 본 것이고, ④ 는 두 문장 모두에서 NULL 이름 행이 사라진다고 본 경우다. GROUP BY 는 NULL 을 한 그룹으로 모으지만 = 비교는 NULL 끼리 참이 아니라는 차이가 핵심이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T",
        "headers": [
          "ID",
          "NAME"
        ],
        "rows": [
          [
            "100",
            "KIM"
          ],
          [
            "200",
            "PARK"
          ],
          [
            "300",
            "NULL"
          ],
          [
            "400",
            "KIM"
          ],
          [
            "500",
            "NULL"
          ],
          [
            "600",
            "PARK"
          ],
          [
            "700",
            "LEE"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- ㉠\nDELETE FROM T\nWHERE  ID NOT IN (SELECT MIN(ID)\n                  FROM   T\n                  GROUP BY NAME);\n\n-- ㉡\nDELETE FROM T A\nWHERE  ID > (SELECT MIN(B.ID)\n             FROM   T B\n             WHERE  B.NAME = A.NAME);"
      }
    ]
  },
  {
    "id": 10520,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 21,
    "title": "NAME VARCHAR2(10) 칼럼에 최대 8글자 값과 NULL 이 함께 들어 있다. 아래 ㉠~㉣ 을 각각 실행한 결과로 옳은 것은? (Oracle 기준)",
    "options": [
      "성공, 오류, 오류, 성공",
      "성공, 성공, 오류, 성공",
      "성공, 오류, 성공, 성공",
      "성공, 오류, 오류, 오류"
    ],
    "correctIndex": 0,
    "explanation": "MODIFY 로 칼럼 길이를 늘리는 것(㉠)은 언제나 된다. 줄이는 것(㉡)은 이미 들어 있는 값이 새 길이에 맞을 때만 되는데, 8글자 값이 있어 5 로 줄일 수 없다. NOT NULL 을 추가하는 것(㉢)도 이미 NULL 인 행이 있어 오류다. DEFAULT 는 앞으로 들어올 행에만 적용되므로 기존 NULL 이 있어도 바로 바꿀 수 있다(㉣). 정답은 ①번이다. ② 는 길이를 줄여도 데이터를 잘라 준다고 본 것, ③ 은 NULL 이 있어도 NOT NULL 을 걸 수 있다고 본 것, ④ 는 DEFAULT 가 기존 행까지 바꿔야 해서 실패한다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ㉠\nALTER TABLE T\n  MODIFY (NAME VARCHAR2(20));\n-- ㉡\nALTER TABLE T\n  MODIFY (NAME VARCHAR2(5));\n-- ㉢\nALTER TABLE T\n  MODIFY (NAME NOT NULL);\n-- ㉣\nALTER TABLE T\n  MODIFY (NAME DEFAULT 'X');"
      }
    ]
  },
  {
    "id": 10521,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 22,
    "title": "아래 Oracle SQL 과 동일한 결과를 반환하는 ANSI 표준 SQL 은?",
    "options": [
      "FULL OUTER JOIN 만 사용",
      "LEFT OUTER JOIN UNION ALL RIGHT OUTER JOIN",
      "LEFT OUTER JOIN UNION RIGHT OUTER JOIN",
      "CROSS JOIN"
    ],
    "correctIndex": 1,
    "explanation": "Oracle (+) 외부조인 두 방향을 UNION ALL 로 결합한 형태는 ANSI 의 LEFT OUTER JOIN UNION ALL RIGHT OUTER JOIN 과 동치이다. ① FULL OUTER JOIN 은 매칭 행을 한 번만 내지만 위 SQL 은 매칭 행이 두 번 나오고, ③ UNION 은 중복을 지워 결과가 달라지며, ④ CROSS JOIN 은 조건이 없다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT A.KEY_A, B.KEY_B, A.COL, B.COL\nFROM   A22 A, B22 B\nWHERE  A.KEY_A = B.KEY_B(+)\nUNION ALL\nSELECT A.KEY_A, B.KEY_B, A.COL, B.COL\nFROM   A22 A, B22 B\nWHERE  B.KEY_B = A.KEY_A(+);"
      }
    ]
  },
  {
    "id": 10522,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 23,
    "title": "빈 테이블 T 에 아래 명령을 차례로 실행한 뒤 남는 행 수는?",
    "options": [
      "4",
      "3",
      "1",
      "2"
    ],
    "correctIndex": 3,
    "explanation": "COMMIT·ROLLBACK·SAVEPOINT 는 트랜잭션을 다루는 TCL 이다. ROLLBACK TO S 는 저장점 S 이후의 작업(2 입력)만 취소하고 트랜잭션은 이어진다. 그 뒤 3 을 넣고 COMMIT 하면 1 과 3 이 확정된다. 새 트랜잭션에서 넣은 4 는 마지막 ROLLBACK 으로 취소된다. 그래서 1, 3 의 2행이 남는다. 정답은 ④번이다. ① 은 ROLLBACK 이 아무것도 취소하지 않는다고 본 것, ② 는 ROLLBACK TO S 를 놓친 것, ③ 은 ROLLBACK TO S 가 트랜잭션 전체를 취소한다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "INSERT INTO T VALUES (1);\nSAVEPOINT S;\nINSERT INTO T VALUES (2);\nROLLBACK TO S;\nINSERT INTO T VALUES (3);\nCOMMIT;\nINSERT INTO T VALUES (4);\nROLLBACK;"
      }
    ]
  },
  {
    "id": 10523,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 24,
    "title": "아래 두 테이블에 대해 UNION 과 UNION ALL 을 각각 수행했을 때 결과 행 수로 옳은 것은?",
    "options": [
      "UNION 4건, UNION ALL 10건",
      "UNION 5건, UNION ALL 10건",
      "UNION 6건, UNION ALL 10건",
      "UNION 3건, UNION ALL 10건"
    ],
    "correctIndex": 1,
    "explanation": "UNION ALL 은 아무것도 지우지 않으므로 5 + 5 = 10건이다. UNION 은 두 결과를 합친 뒤 중복을 지우는데, 한 테이블 안의 중복(T1 의 B 두 개, T2 의 D 두 개)도 지우고, 집합 연산에서는 NULL 끼리도 같은 값으로 본다. 남는 값은 A, B, C, D, NULL 5건이다(②). ① 4건은 NULL 을 결과에서 뺀 값, ③ 6건은 두 NULL 을 서로 다른 값으로 본 값, ④ 3건은 두 테이블에 공통인 값(B, C, NULL)만 센 INTERSECT 의 결과다. WHERE 의 = 비교와 달리 집합 연산자·DISTINCT·GROUP BY 는 NULL 을 하나로 묶는다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T1 테이블",
        "headers": [
          "V"
        ],
        "rows": [
          [
            "A"
          ],
          [
            "B"
          ],
          [
            "B"
          ],
          [
            "NULL"
          ],
          [
            "C"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "T2 테이블",
        "headers": [
          "V"
        ],
        "rows": [
          [
            "B"
          ],
          [
            "C"
          ],
          [
            "NULL"
          ],
          [
            "D"
          ],
          [
            "D"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT V FROM T1\nUNION\nSELECT V FROM T2;\nSELECT V FROM T1\nUNION ALL\nSELECT V FROM T2;"
      }
    ]
  },
  {
    "id": 10524,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 25,
    "title": "T1, T2, T3 에 각각 COMMIT 된 3행이 있을 때 아래 SQL 을 순서대로 실행한 결과로 옳은 것은? ('T1 행 수, T2 행 수, T3 조회 결과' 순서, Oracle 기준)",
    "options": [
      "3, 0, 3",
      "3, 0, 오류",
      "3, 3, 3",
      "0, 0, 오류"
    ],
    "correctIndex": 3,
    "explanation": "Oracle 에서 TRUNCATE·DROP 은 DDL 이라 실행 전후로 자동 COMMIT 된다. 그래서 TRUNCATE 직전에 한 T1 의 DELETE 도 그 순간 확정되어, 다음 ROLLBACK 이 되돌릴 것이 없다. T1 과 T2 는 모두 0행이다. DROP 도 되돌릴 수 없어 T3 는 테이블 자체가 사라졌고, 조회하면 테이블이 없다는 오류가 난다. 정답은 ④번이다. ① 은 DELETE 와 DROP 이 ROLLBACK 된다고 본 것, ② 는 DELETE 만 ROLLBACK 된다고 본 것(TRUNCATE 의 자동 COMMIT 을 놓침), ③ 은 모두 되돌려진다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "DELETE FROM T1;\nTRUNCATE TABLE T2;\nROLLBACK;\nDROP TABLE T3;\nROLLBACK;\n\nSELECT COUNT(*) FROM T1;\nSELECT COUNT(*) FROM T2;\nSELECT COUNT(*) FROM T3;"
      }
    ]
  },
  {
    "id": 10525,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 26,
    "title": "아래 CREATE TABLE 문 ㉠~㉤ 을 각각 실행할 때 오류가 발생하는 것만 모두 고른 것은? (Oracle 기준)",
    "options": [
      "㉠, ㉡",
      "㉠, ㉡, ㉣",
      "㉡, ㉢, ㉤",
      "㉠, ㉡, ㉢"
    ],
    "correctIndex": 3,
    "explanation": "따옴표 없는 테이블명은 문자로 시작해야 하고, 문자·숫자와 _, $, # 만 쓸 수 있으며, 예약어는 쓸 수 없다. ㉠ 은 숫자로 시작해 오류, ㉡ 은 하이픈(-)이 있어 오류, ㉢ 은 예약어 SELECT 라 오류다. ㉣ 처럼 큰따옴표로 감싸면 예약어도 이름으로 쓸 수 있고(대신 쓸 때마다 \"SELECT\" 로 적어야 한다), ㉤ 은 허용된 _ 와 $ 만 써서 만들어진다. 정답은 ④번이다. ① 은 예약어도 테이블명이 된다고 본 것, ② 는 큰따옴표 이름을 오류로 보고 따옴표 없는 SELECT 는 된다고 본 것, ③ 은 숫자로 시작해도 되고 $ 는 안 된다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ㉠\nCREATE TABLE 2026_EXAM (C NUMBER);\n-- ㉡\nCREATE TABLE EXAM-2026 (C NUMBER);\n-- ㉢\nCREATE TABLE SELECT (C NUMBER);\n-- ㉣\nCREATE TABLE \"SELECT\" (C NUMBER);\n-- ㉤\nCREATE TABLE EXAM_2026$ (C NUMBER);"
      }
    ]
  },
  {
    "id": 10526,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 27,
    "title": "아래 SQL 의 ( ? ) 자리에 ㉠~㉣ 을 각각 넣었을 때 오류가 발생하는 것만 모두 고른 것은?",
    "options": [
      "㉡, ㉢",
      "㉡",
      "㉢",
      "㉡, ㉢, ㉣"
    ],
    "correctIndex": 0,
    "explanation": "SELECT 에 일반 칼럼(부서)과 집계 함수(MAX)를 함께 쓰려면 그 칼럼으로 GROUP BY 해야 한다. ㉠ 과 ㉣ 은 부서로 묶었으니 부서별 최고 연봉이 나오고, ㉣ 처럼 집계 함수로 정렬하는 것도 된다. ㉡ 은 GROUP BY 없이 HAVING 만 써 테이블 전체가 한 그룹이 되는데, 그 안에서 부서 값은 하나로 정해지지 않아 오류다. ㉢ 도 GROUP BY 가 없어 같은 이유로 오류다. 정답은 ①번이다. ② 와 ③ 은 둘 중 하나만 오류로 본 것, ④ 는 ORDER BY 에 집계 함수를 쓸 수 없다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT 부서, MAX(연봉)\nFROM   EMP\n( ? );\n-- ㉠ GROUP BY 부서\n-- ㉡ HAVING MAX(연봉) > 0\n-- ㉢ ORDER BY 부서\n-- ㉣ GROUP BY 부서\n--    ORDER BY MAX(연봉) DESC"
      }
    ]
  },
  {
    "id": 10527,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 28,
    "title": "아래 SQL 의 결과로 옳은 것은?",
    "options": [
      "4000, 4, 3",
      "4000, 3, 4",
      "3000, 4, 4",
      "4000, 4, 4"
    ],
    "correctIndex": 0,
    "explanation": "SUM(급여)=12000, 12000/3=4000. COUNT(*) 는 NULL 포함 4, COUNT(급여) 는 NULL 제외 3 이다. ② 는 COUNT(*) 와 COUNT(급여) 를 바꿔 적었고, ③ 은 NULL 행까지 4 로 나눠 3000 으로 본 결과, ④ 는 COUNT(급여) 도 NULL 을 센다고 본 결과다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "급여"
        ],
        "rows": [
          [
            "4000"
          ],
          [
            "NULL"
          ],
          [
            "4000"
          ],
          [
            "4000"
          ]
        ],
        "caption": "T 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT SUM(급여)/3, COUNT(*),\n       COUNT(급여)\nFROM T;"
      }
    ]
  },
  {
    "id": 10528,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 29,
    "title": "월별 매출이 1월 10, 2월 20, 3월 15, 4월 30 인 테이블에 아래 SQL 을 실행했다. ('3월의 P, 3월의 N, 2월의 P2, 4월의 F' 순서)",
    "options": [
      "15, 30, 10, 10",
      "20, 30, 0, 10",
      "20, 30, NULL, 30",
      "30, 20, 0, 10"
    ],
    "correctIndex": 1,
    "explanation": "LAG 는 이전 행, LEAD 는 다음 행의 값을 가져온다. 3월의 P 는 2월의 20, N 은 4월의 30 이다. LAG(매출, 2, 0) 은 두 행 앞의 값을 가져오고 없으면 세 번째 인자 0 을 쓴다. 2월에서 두 행 앞은 없으므로 P2 는 0 이다. FIRST_VALUE 는 처음부터 현재 행까지 중 첫 값이라 4월에서도 1월의 10 이다. 정답은 ②번이다. ① 은 LAG 를 현재 행 값으로 본 것, ③ 은 기본값 0 을 놓치고 FIRST_VALUE 를 현재 행 값으로 본 것, ④ 는 LAG 와 LEAD 를 바꿔 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT 월, 매출,\n  LAG(매출)  OVER (ORDER BY 월) AS P,\n  LEAD(매출) OVER (ORDER BY 월) AS N,\n  LAG(매출, 2, 0)\n    OVER (ORDER BY 월)       AS P2,\n  FIRST_VALUE(매출)\n    OVER (ORDER BY 월)       AS F\nFROM 매출;"
      }
    ]
  },
  {
    "id": 10529,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 30,
    "title": "아래 매출 테이블에 대한 SQL 결과에서 지점 B 의 P, N 값을 월 순서대로 나열한 것으로 옳은 것은?",
    "options": [
      "P: 0, 200, 0, 180 / N: 180, 210, NULL, NULL",
      "P: 120, 200, NULL, 180 / N: 180, 210, NULL, NULL",
      "P: 0, 200, NULL, 180 / N: 180, 210, NULL, NULL",
      "P: 0, 200, NULL, 180 / N: NULL, 180, 210, NULL"
    ],
    "correctIndex": 2,
    "explanation": "PARTITION BY 지점 이라 B 의 행끼리만 앞뒤를 본다. P 는 LAG(금액, 1, 0) 으로 한 행 앞의 금액이다. 월 1 은 B 안에서 앞 행이 없어 기본값 0, 월 2 는 200, 월 3 은 앞 행(월 2)의 금액이 NULL 이라 NULL, 월 4 는 180 이다. 세 번째 인자 0 은 앞 행이 없을 때만 쓰이고, 앞 행의 값이 NULL 일 때는 쓰이지 않는다. N 은 LEAD(금액, 2) 로 두 행 뒤의 금액이다. 월 1 은 월 3 의 180, 월 2 는 월 4 의 210 이고, 월 3·4 는 두 행 뒤가 없는데 기본값을 주지 않아 NULL 이다. 정답은 ③번이다. ① 은 앞 행 값이 NULL 일 때도 기본값 0 이 들어간다고 본 값, ② 는 PARTITION BY 를 놓치고 A 의 마지막 금액 120 을 B 월 1 의 P 로 가져온 값, ④ 는 LEAD 의 두 번째 인자를 놓치고 바로 다음 행을 가져온 값이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "매출",
        "headers": [
          "지점",
          "월",
          "금액"
        ],
        "rows": [
          [
            "A",
            "1",
            "100"
          ],
          [
            "A",
            "2",
            "150"
          ],
          [
            "A",
            "3",
            "120"
          ],
          [
            "B",
            "1",
            "200"
          ],
          [
            "B",
            "2",
            "NULL"
          ],
          [
            "B",
            "3",
            "180"
          ],
          [
            "B",
            "4",
            "210"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT 지점, 월,\n  LAG(금액, 1, 0) OVER (\n    PARTITION BY 지점 ORDER BY 월\n  ) AS P,\n  LEAD(금액, 2) OVER (\n    PARTITION BY 지점 ORDER BY 월\n  ) AS N\nFROM 매출;"
      }
    ]
  },
  {
    "id": 10530,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 31,
    "title": "아래 조직 테이블에 대한 계층형 SQL 에서, 사장 행의 LEVEL 과 결과 행 수로 옳은 것은?",
    "options": [
      "4, 4",
      "1, 4",
      "4, 5",
      "1, 1"
    ],
    "correctIndex": 0,
    "explanation": "CONNECT BY PRIOR 상위ID = ID 는 '방금 읽은 행의 상위ID 와 같은 ID 를 가진 행' 을 다음으로 읽으라는 뜻이라, 아래에서 위로 올라가는 역방향 전개다. 대리(LEVEL 1)에서 시작해 과장(2), 부장(3), 사장(4) 순으로 올라가고, 사장의 상위ID 가 NULL 이라 멈춘다. LEVEL 은 시작한 행이 1 이므로 사장은 4, 결과는 4행이다. 정답은 ①번이다. ② 는 최상위 행은 언제나 LEVEL 1 이라고 본 것, ③ 은 부장의 다른 부하인 차장까지 펼쳐진다고 본 것, ④ 는 대리 밑으로 내려가는 순방향으로 읽어 대리만 남는다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "조직",
        "headers": [
          "ID",
          "상위ID",
          "이름"
        ],
        "rows": [
          [
            "1",
            "NULL",
            "사장"
          ],
          [
            "2",
            "1",
            "부장"
          ],
          [
            "3",
            "2",
            "과장"
          ],
          [
            "4",
            "3",
            "대리"
          ],
          [
            "5",
            "2",
            "차장"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT LEVEL, 이름\nFROM   조직\nSTART  WITH 이름 = '대리'\nCONNECT BY PRIOR 상위ID = ID;"
      }
    ]
  },
  {
    "id": 10531,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 32,
    "title": "C1 VARCHAR2(8) 칼럼에 'ABCDEF' 와 NULL 두 행이 있는 테이블 T 에 ㉠~㉤ 을 차례로 실행했다. 성공하는 문장만 모두 고른 것은? (Oracle 기준)",
    "options": [
      "㉡, ㉣",
      "㉡, ㉢, ㉣",
      "㉠, ㉡, ㉣",
      "㉡, ㉣, ㉤"
    ],
    "correctIndex": 0,
    "explanation": "Oracle 에서 칼럼 정의를 바꿀 때는 MODIFY, 칼럼을 더할 때는 ADD 를 쓴다. 이미 들어 있는 데이터와 맞지 않는 변경은 거부된다. ㉠ 은 6글자인 'ABCDEF' 가 4글자에 들어가지 않아 실패한다. ㉡ 처럼 길이를 늘리는 것은 성공한다. ㉢ 은 NULL 인 행이 이미 있어 NOT NULL 을 걸 수 없다. ㉣ 은 DEFAULT 0 이 있어 기존 두 행에 0 이 채워지므로 NOT NULL 을 지킬 수 있어 성공한다. ㉤ 은 기본값 없이 NOT NULL 칼럼을 더하므로 기존 행이 NULL 이 되어 실패한다(빈 테이블이면 성공). 정답은 ①번이다. ② 는 기존 NULL 행을 검사하지 않는다고 본 것이고, ③ 은 길이를 줄여도 넘치는 글자를 잘라 준다고 본 것, ④ 는 새 칼럼의 NOT NULL 은 이후 입력에만 적용된다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ㉠\nALTER TABLE T\n  MODIFY (C1 VARCHAR2(4));\n-- ㉡\nALTER TABLE T\n  MODIFY (C1 VARCHAR2(10));\n-- ㉢\nALTER TABLE T\n  MODIFY (C1 NOT NULL);\n-- ㉣\nALTER TABLE T\n  ADD (C2 NUMBER DEFAULT 0 NOT NULL);\n-- ㉤\nALTER TABLE T\n  ADD (C3 NUMBER NOT NULL);"
      }
    ]
  },
  {
    "id": 10532,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 33,
    "title": "D 가 2025-01-01 12:00 인 DATE 값일 때 아래 식의 결과(A, B, C, E)로 옳은 것은? (Oracle 기준, A·B 는 1월 1일의 시각, C 는 1월 며칠 몇 시인지)",
    "options": [
      "12:30, 12:30, 3일 00:00, 1.5",
      "13:00, 12:30, 2일 12:00, 2",
      "13:00, 12:30, 3일 00:00, 1.5",
      "14:00, 12:30, 3일 00:00, 1.5"
    ],
    "correctIndex": 2,
    "explanation": "DATE 에 더하는 숫자의 단위는 '일' 이다. A 의 1/12/(60/30) 은 1/12 일을 다시 2 로 나눈 1/24 일, 즉 1시간이라 13:00 이다. B 의 30/(24*60) 일은 30분이라 12:30 이다. C 의 1.5 일은 1일 12시간이라 1월 3일 00:00 이다. 날짜끼리 빼면 차이가 일 단위 숫자로 나와, E 는 1월 3일 0시와 1월 1일 12시의 차이인 1.5 다. 정답은 ③번이다. ① 은 A 를 30분으로, ② 는 소수 부분(0.5일)을 버리고, ④ 는 A 를 2시간으로 계산한 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT D + 1/12/(60/30)        AS A,\n       D + 30/(24*60)          AS B,\n       D + 1.5                 AS C,\n       TO_DATE('2025-01-03',\n               'YYYY-MM-DD') - D AS E\nFROM   …;"
      }
    ]
  },
  {
    "id": 10533,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 34,
    "title": "아래 두 테이블에 대한 네 SQL 의 결과 행 수를 ㉠ → ㉣ 순서로 나열한 것은?",
    "options": [
      "4, 4, 6, 2",
      "7, 7, 8, 6",
      "7, 7, 14, 5",
      "7, 7, 9, 5"
    ],
    "correctIndex": 3,
    "explanation": "먼저 INNER JOIN(㉣)을 센다. A 의 2 두 행이 B 의 2 두 행과 각각 맞아 2 × 2 = 4행, 3 끼리 1행으로 5행이다. NULL 은 = 비교가 참이 되지 않아 서로 맞지 않는다. LEFT(㉠)는 여기에 B 와 짝이 없는 A 의 1, NULL 두 행이 더해져 7행이다. RIGHT(㉡)는 짝이 없는 B 의 4, NULL 이 더해져 7행이다. FULL(㉢)은 INNER 5행에 양쪽의 짝 없는 행 2 + 2 를 더한 9행이다. 정답은 ④번이다. ① 은 키가 같으면 한 번만 맞는다고 보고 중복 행 곱을 놓쳤다. ② 는 NULL 끼리 맞는다고 본 값이다. ③ 은 FULL OUTER JOIN 을 LEFT 와 RIGHT 를 그대로 합친 것(UNION ALL)으로 보고 INNER 부분을 두 번 셌다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "A",
        "headers": [
          "ID"
        ],
        "rows": [
          [
            "1"
          ],
          [
            "2"
          ],
          [
            "2"
          ],
          [
            "3"
          ],
          [
            "NULL"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "B",
        "headers": [
          "ID"
        ],
        "rows": [
          [
            "2"
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
            "NULL"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT * FROM A LEFT OUTER JOIN B\n    ON A.ID = B.ID;\n-- ㉡\nSELECT * FROM A RIGHT OUTER JOIN B\n    ON A.ID = B.ID;\n-- ㉢\nSELECT * FROM A FULL OUTER JOIN B\n    ON A.ID = B.ID;\n-- ㉣\nSELECT * FROM A INNER JOIN B\n    ON A.ID = B.ID;"
      }
    ]
  },
  {
    "id": 10534,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 35,
    "title": "두 테이블 A(이름), B(성명)에 대한 집합 연산 SQL ㉠~㉣ 중 오류가 나는 것만 모두 고른 것은?",
    "options": [
      "㉡",
      "㉢",
      "㉠, ㉡",
      "㉡, ㉢"
    ],
    "correctIndex": 3,
    "explanation": "집합 연산의 ORDER BY 는 전체 결과에 한 번만, 맨 마지막에 쓴다. 결과의 칼럼 이름은 첫 번째 SELECT 를 따른다. ㉠ 은 첫 번째 SELECT 의 별칭 N 으로 정렬해 문제없다. ㉡ 은 첫 번째 SELECT 뒤에 ORDER BY 를 넣어 오류다. ㉢ 의 성명 은 두 번째 SELECT 의 칼럼이라 결과 칼럼 이름이 아니므로 오류다. ㉣ 은 칼럼 위치 번호로 정렬해 문제없다. 정답은 ④번이다. ① 은 두 번째 SELECT 의 이름도 쓸 수 있다고 본 것이고, ② 는 중간 ORDER BY 를 허용한 것, ③ 은 별칭으로는 정렬할 수 없다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT 이름 AS N FROM A\nUNION\nSELECT 성명 FROM B\nORDER BY N;\n-- ㉡\nSELECT 이름 FROM A\nORDER BY 이름\nUNION\nSELECT 성명 FROM B;\n-- ㉢\nSELECT 이름 FROM A\nUNION\nSELECT 성명 FROM B\nORDER BY 성명;\n-- ㉣\nSELECT 이름 FROM A\nUNION\nSELECT 성명 FROM B\nORDER BY 1;"
      }
    ]
  },
  {
    "id": 10535,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 36,
    "title": "부서 테이블에 D1, D2, D3 이 있고, 사원은 D1 에 2명(급여 100, 300), D2 에 1명(급여 200) 있다. 아래 SQL ㉠, ㉡, ㉢ 의 결과 행 수로 옳은 것은?",
    "options": [
      "4, 2, 2",
      "4, 3, 2",
      "3, 3, 2",
      "4, 3, 3"
    ],
    "correctIndex": 1,
    "explanation": "㉠ 은 D1 이 사원 2명과, D2 가 1명과 이어지고, 사원이 없는 D3 도 NULL 로 남아 4행이다. ㉡ 처럼 조건을 ON 에 두면 조인할 사원만 고를 뿐 부서는 모두 남는다. D1 은 300 인 사원 하나, D2 는 200 인 사원, D3 은 NULL 로 3행이다. ㉢ 처럼 WHERE 에 두면 조인을 마친 뒤 거르므로, 급여가 NULL 인 D3 행과 100 인 행이 빠져 2행이 되고 외부 조인의 의미가 사라진다. 정답은 ②번이다. ① 은 ON 조건도 부서를 거른다고 본 것, ③ 은 ㉠ 에서 D1 이 한 행만 나온다고 본 것, ④ 는 WHERE 조건도 D3 을 남긴다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT * FROM 부서 D\nLEFT JOIN 사원 E\n  ON D.부서 = E.부서;\n-- ㉡\nSELECT * FROM 부서 D\nLEFT JOIN 사원 E\n  ON D.부서 = E.부서\n AND E.급여 >= 200;\n-- ㉢\nSELECT * FROM 부서 D\nLEFT JOIN 사원 E\n  ON D.부서 = E.부서\nWHERE E.급여 >= 200;"
      }
    ]
  },
  {
    "id": 10536,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 37,
    "title": "아래 ERD 와 데이터에 대해 Oracle 계층형 질의 ㉠~㉣ 의 결과 행 수를 차례대로 나열한 것은?",
    "options": [
      "3, 3, 4, 4",
      "3, 2, 2, 4",
      "1, 3, 2, 4",
      "3, 3, 2, 4"
    ],
    "correctIndex": 3,
    "explanation": "트리는 2 아래에 7, 9 가 있고 7 아래에 11, 12 가 있다. ㉠ 은 PRIOR 가 상위코드 쪽에 있어 '방금 읽은 행의 상위코드 = 다음 행의 코드' 로 위로 올라간다. 11 → 7 → 2 의 3행이다. ㉡ 은 '방금 읽은 행의 코드 = 다음 행의 상위코드' 로 아래로 내려가 7, 11, 12 의 3행이다. ㉢ 은 조건을 CONNECT BY 에 넣었다. 7 로 내려가는 연결 자체가 막혀 7 과 그 아래 11, 12 가 모두 빠지고 2, 9 의 2행만 남는다. ㉣ 은 조건을 WHERE 에 넣었다. WHERE 는 트리를 다 만든 뒤 행을 거르므로 7 한 행만 빠지고 2, 9, 11, 12 의 4행이 남는다. 정답은 ④번이다. ① 은 ㉢ 과 ㉣ 을 같다고 본 것이고, ② 는 ㉡ 에서 7 을 빼고 센 것, ③ 은 ㉠ 이 위로 올라가지 못하고 11 하나만 낸다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "부서 자기 참조 ERD",
        "mermaid": "erDiagram\n    부서 |o..o{ 부서 : \"상위\"\n    부서 {\n        int 코드 PK\n        int 상위코드 FK\n    }"
      },
      {
        "type": "table",
        "caption": "부서",
        "headers": [
          "코드",
          "상위코드"
        ],
        "rows": [
          [
            "2",
            "NULL"
          ],
          [
            "7",
            "2"
          ],
          [
            "9",
            "2"
          ],
          [
            "11",
            "7"
          ],
          [
            "12",
            "7"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT 코드 FROM 부서\nSTART WITH 코드 = 11\nCONNECT BY PRIOR 상위코드 = 코드;\n-- ㉡\nSELECT 코드 FROM 부서\nSTART WITH 코드 = 7\nCONNECT BY 상위코드 = PRIOR 코드;\n-- ㉢\nSELECT 코드 FROM 부서\nSTART WITH 코드 = 2\nCONNECT BY PRIOR 코드 = 상위코드\n       AND 코드 <> 7;\n-- ㉣\nSELECT 코드 FROM 부서\nWHERE 코드 <> 7\nSTART WITH 코드 = 2\nCONNECT BY PRIOR 코드 = 상위코드;"
      }
    ]
  },
  {
    "id": 10537,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 38,
    "title": "출연료가 8,888 이상인 영화의 영화명·배우명·출연료를 조회하는 SQL 로 가장 적절한 것은?",
    "options": [
      "SELECT 출연.영화명, 영화.배우명, 출연.출연료 FROM 배우, 영화, 출연 WHERE 출연.출연료 >= 8888 AND 출연.영화번호 = 영화.영화번호 AND 출연.배우번호 = 배우.배우번호;",
      "SELECT 영화.영화명, 배우.배우명, 출연료 FROM 배우, 영화, 출연 WHERE 출연료 > 8888 AND 출연.영화번호 = 영화.영화번호 AND 출연.배우번호 = 배우.배우번호;",
      "SELECT 영화명, 배우명, 출연료 FROM 배우, 영화, 출연 WHERE 출연료 >= 8888 AND 출연.영화번호 = 영화.영화번호 AND 배우번호 = 배우.배우번호;",
      "SELECT 영화.영화명, 배우.배우명, 출연료 FROM 배우, 영화, 출연 WHERE 출연료 >= 8888 AND 출연.영화번호 = 영화.영화번호 AND 출연.배우번호 = 배우.배우번호;"
    ],
    "correctIndex": 3,
    "explanation": "④ 는 각 컬럼을 가진 테이블로 한정하고 출연-영화, 출연-배우 조인 조건을 모두 썼으며 '8,888 이상' 을 >= 로 표현해 옳다. ① 의 출연.영화명 은 출연 테이블에 없는 컬럼이라 오류, ② 는 > 라서 출연료가 정확히 8,888 인 행이 빠진다. ③ 은 조인 조건의 배우번호 를 한정하지 않았는데, 배우번호 는 배우·출연 두 테이블에 모두 있어 '열의 정의가 애매하다' 오류가 난다. ※ 복원 자료의 ③ 은 한정자 없이도 컬럼명이 겹치지 않아 정상 실행되므로 ④ 와 함께 정답이 되어, 겹치는 컬럼(배우번호)에서 한정자를 뺀 형태로 바꿨다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "배우 테이블",
        "headers": [
          "컬럼"
        ],
        "rows": [
          [
            "배우번호 (PK)"
          ],
          [
            "배우명"
          ],
          [
            "성별"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "영화 테이블",
        "headers": [
          "컬럼"
        ],
        "rows": [
          [
            "영화번호 (PK)"
          ],
          [
            "영화명"
          ],
          [
            "제작년도"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "출연 테이블",
        "headers": [
          "컬럼"
        ],
        "rows": [
          [
            "배우번호 (PK, FK)"
          ],
          [
            "영화번호 (PK, FK)"
          ],
          [
            "출연료"
          ]
        ]
      }
    ]
  },
  {
    "id": 10538,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 39,
    "title": "아래 EMP 테이블에 대한 SQL 의 결과 (A, B, C, D) 로 옳은 것은? (Oracle 기준)",
    "options": [
      "(3, 3, 3, 6)",
      "(3, 2, 3, 6)",
      "(3, 2, 4, 6)",
      "(4, 2, 3, 6)"
    ],
    "correctIndex": 1,
    "explanation": "A: SAL 의 서로 다른 값은 30000, 35000, 4000 세 개다. COUNT(DISTINCT) 도 NULL 은 세지 않는다. B: TRUNC(SAL, -4) 는 만 단위 아래를 버려 30000 → 30000, 35000 → 30000, 4000 → 0 이 되고, 서로 다른 값은 30000, 0 두 개다. C: 이름 첫 글자를 대문자로 바꾸면 S, S, A, J, S 라 S, A, J 세 개다. D: COUNT(*) 는 NULL 행까지 6 이다. 정답은 ②번이다. ① 은 TRUNC 를 ROUND 처럼 보고 35000 을 40000 으로 올려 세 값으로 센 것이다. ③ 은 UPPER 를 놓쳐 s 와 S 를 다른 글자로 센 것이다. ④ 는 COUNT(DISTINCT SAL) 이 NULL 도 하나의 값으로 센다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP",
        "headers": [
          "EMPNO",
          "ENAME",
          "SAL"
        ],
        "rows": [
          [
            "101",
            "SMITH",
            "30000"
          ],
          [
            "102",
            "scott",
            "35000"
          ],
          [
            "103",
            "ALLEN",
            "4000"
          ],
          [
            "104",
            "JONES",
            "35000"
          ],
          [
            "105",
            "sally",
            "4000"
          ],
          [
            "106",
            "NULL",
            "NULL"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT COUNT(DISTINCT SAL) AS A,\n       COUNT(DISTINCT TRUNC(SAL, -4))\n         AS B,\n       COUNT(DISTINCT\n         UPPER(SUBSTR(ENAME, 1, 1)))\n         AS C,\n       COUNT(*) AS D\nFROM   EMP;"
      }
    ]
  },
  {
    "id": 10539,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 40,
    "title": "아래 T 테이블에 대한 SQL 의 결과(A, B, C)로 옳은 것은?",
    "options": [
      "2, 3, 6",
      "2, 3, 3",
      "4, 3, 6",
      "2, 6, 6"
    ],
    "correctIndex": 0,
    "explanation": "A 의 '_S__%' 는 두 번째 글자가 S 이고 전체가 4글자 이상인 값이다. ASQL, XS_1 만 해당해 2 다. AS 와 ES% 는 두 번째 글자가 S 지만 4글자가 안 된다. B 는 ESCAPE 로 '\\_' 를 진짜 밑줄 문자로 바꿨으므로 밑줄이 들어 있는 S_AB, XS_1, B_S_ 의 3 이다. C 의 '%_%' 에는 ESCAPE 가 없어 _ 가 '아무 한 글자' 라는 뜻이라, 한 글자 이상인 모든 행이 해당해 6 이다. 정답은 ①번이다. ② 는 ESCAPE 없이도 _ 가 밑줄 문자라고 본 것, ③ 은 A 에서 길이 조건을 놓친 것, ④ 는 B 의 ESCAPE 를 무시한 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T",
        "headers": [
          "코드"
        ],
        "rows": [
          [
            "ASQL"
          ],
          [
            "S_AB"
          ],
          [
            "XS_1"
          ],
          [
            "AS"
          ],
          [
            "B_S_"
          ],
          [
            "ES%"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT\n  SUM(CASE WHEN 코드 LIKE '_S__%'\n           THEN 1 ELSE 0 END) AS A,\n  SUM(CASE WHEN 코드 LIKE '%\\_%'\n                ESCAPE '\\'\n           THEN 1 ELSE 0 END) AS B,\n  SUM(CASE WHEN 코드 LIKE '%_%'\n           THEN 1 ELSE 0 END) AS C\nFROM T;"
      }
    ]
  },
  {
    "id": 10540,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 41,
    "title": "아래 TBL 테이블과 뷰 V_TBL 에 ㉠ → ㉣ 을 차례로 실행했을 때 (㉠ 의 결과, 마지막 SELECT 의 결과) 로 옳은 것은? (오류가 난 문장은 반영되지 않음)",
    "options": [
      "(800, 850)",
      "(600, 650)",
      "(600, 350)",
      "(600, 600)"
    ],
    "correctIndex": 1,
    "explanation": "뷰의 WHERE C1 <> 'A' 에서 C1 이 NULL 인 행은 비교가 UNKNOWN 이라 빠진다. 그래서 ㉠ 은 B 200, B 100, C 300 의 합 600 이다. WITH CHECK OPTION 은 뷰를 통해 넣거나 고친 행이 뷰 조건을 만족해야 한다. ㉡ 의 'A' 는 조건에 어긋나 오류가 나고, ㉢ 의 'D' 는 조건을 만족해 들어간다. ㉣ 은 C 를 NULL 로 바꾸면 C1 <> 'A' 가 UNKNOWN 이 되어 조건을 만족하지 못하므로 오류가 난다. 마지막 SELECT 는 600 + 50 = 650 이다. 정답은 ②번이다. ① 은 NULL 도 'A' 가 아니니 뷰에 보인다고 본 값이다. ③ 은 ㉣ 이 성공해 C 행(300)이 뷰에서 사라진다고 생각하면 나오는 값이다. ④ 는 뷰에는 INSERT 를 할 수 없다고 보고 ㉢ 도 실패한다고 착각한 결과다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TBL",
        "headers": [
          "C1",
          "C2"
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
            "B",
            "100"
          ],
          [
            "NULL",
            "200"
          ],
          [
            "C",
            "300"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "CREATE VIEW V_TBL AS\nSELECT * FROM TBL\nWHERE  C1 <> 'A'\nWITH CHECK OPTION;\n\n-- ㉠\nSELECT SUM(C2) FROM V_TBL;\n-- ㉡\nINSERT INTO V_TBL VALUES ('A', 50);\n-- ㉢\nINSERT INTO V_TBL VALUES ('D', 50);\n-- ㉣\nUPDATE V_TBL SET C1 = NULL\nWHERE  C1 = 'C';\n\nSELECT SUM(C2) FROM V_TBL;"
      }
    ]
  },
  {
    "id": 10541,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 42,
    "title": "아래 네 개의 SQL 중 결과 행 수가 나머지와 다른 것은?",
    "options": [
      "SELECT * FROM T1 NATURAL JOIN T2;",
      "SELECT * FROM T1 JOIN T2 USING(COL);",
      "SELECT * FROM T2 WHERE T2.COL IN (SELECT COL FROM T1);",
      "SELECT * FROM T1 LEFT OUTER JOIN T2 ON T1.COL = T2.COL;"
    ],
    "correctIndex": 3,
    "explanation": "T1·T2 에 공통으로 있는 COL 값은 A, B 두 개다. ① NATURAL JOIN 과 ② USING 은 공통 값 A, B 로 이너 조인해 2행, ③ IN 서브쿼리도 T2 의 A, B 를 걸러 2행이다. ④ LEFT OUTER JOIN 은 T2 에 짝이 없는 T1 의 C 까지 남겨(VAL2 는 NULL) 3행이 되므로 나머지와 다르다. ※ 복원 자료에서 이 번호가 2과목 45번과 똑같은 문제로 겹쳐 있어, 같은 범위(조인 결과 비교)에서 행 수를 묻는 형태로 바꿨다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T1",
        "headers": [
          "COL",
          "VAL1"
        ],
        "rows": [
          [
            "A",
            "10"
          ],
          [
            "B",
            "20"
          ],
          [
            "C",
            "30"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "T2",
        "headers": [
          "COL",
          "VAL2"
        ],
        "rows": [
          [
            "A",
            "100"
          ],
          [
            "B",
            "200"
          ]
        ]
      }
    ]
  },
  {
    "id": 10542,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 43,
    "title": "아래 주문 테이블에 대한 `SUM(금액) / COUNT(*)` 의 결과로 옳은 것은?",
    "options": [
      "200",
      "150",
      "300",
      "NULL"
    ],
    "correctIndex": 1,
    "explanation": "SUM(금액) 은 NULL 을 제외하여 100+200+300=600, COUNT(*) 는 NULL 포함 4 이므로 600/4=150 이 된다. ① 200 은 분모를 COUNT(금액) 으로 본 값(600/3)이다. ④ NULL 이 섞여도 SUM 은 NULL 을 건너뛰므로 NULL 이 아니다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "주문 테이블",
        "headers": [
          "회원번호",
          "회원코드",
          "물건",
          "금액"
        ],
        "rows": [
          [
            "1001",
            "A",
            "1",
            "100"
          ],
          [
            "1001",
            "B",
            "1",
            "200"
          ],
          [
            "2102",
            "A",
            "1",
            "NULL"
          ],
          [
            "2102",
            "B",
            "NULL",
            "300"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT SUM(금액) / COUNT(*) FROM 주문;"
      }
    ]
  },
  {
    "id": 10543,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 44,
    "title": "아래 SQL 실행 후 최대값으로 옳은 것은?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 3,
    "explanation": "T 는 비어 있는 상태로 시작한다. INSERT 1, INSERT 2 로 T={1,2}. SAVEPOINT SV1 후 UPDATE VAL=4 WHERE VAL=1 → T={4,2}. 같은 이름의 SAVEPOINT SV1 을 다시 선언하면 직전 SV1 은 사라지고 현재 시점이 새 SV1 이 된다(T={4,2}). DELETE VAL=2 → T={4}. ROLLBACK TO SAVEPOINT SV1 → T={4,2} 로 복원. INSERT 3 → T={4,2,3}. COMMIT 후 MAX(VAL)=4. 정답은 ④. ③ 3 은 ROLLBACK TO SV1 이 첫 번째 SV1(UPDATE 전)으로 돌아간다고 본 값이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T 테이블 (초기 상태)",
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
        "code": "INSERT INTO T VALUES (1);\nINSERT INTO T VALUES (2);\nSAVEPOINT SV1;\nUPDATE T SET VAL = 4 WHERE VAL = 1;\nSAVEPOINT SV1;\n-- 덮어쓰기 (이전 SV1 폐기)\nDELETE FROM T WHERE VAL = 2;\nROLLBACK TO SAVEPOINT SV1;\nINSERT INTO T VALUES (3);\nCOMMIT;\nSELECT MAX(VAL) FROM T;"
      }
    ]
  },
  {
    "id": 10544,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 45,
    "title": "아래 질의 중 결과 컬럼 구성이 나머지와 다른 것은?",
    "options": [
      "SELECT * FROM T1 NATURAL JOIN T2;",
      "SELECT * FROM T1 JOIN T2 USING(COL);",
      "SELECT T1.COL, VAL1, VAL2 FROM T1 INNER JOIN T2 ON T1.COL = T2.COL;",
      "SELECT * FROM T1 INNER JOIN T2 ON T1.COL = T2.COL;"
    ],
    "correctIndex": 3,
    "explanation": "NATURAL JOIN(①)과 USING(②)은 조인에 쓴 공통 컬럼 COL 을 결과에 한 번만 보여 주므로 SELECT * 의 컬럼이 COL, VAL1, VAL2 다. ③ 도 필요한 컬럼을 직접 골라 COL, VAL1, VAL2 다. ④ 의 ON 조인은 두 테이블의 COL 을 각각 보여 주므로 SELECT * 가 COL, VAL1, COL, VAL2 네 컬럼이 되어 구성이 다르다. ※ 복원 자료에서 이 번호가 2과목 42번과 똑같은 문제로 겹쳤고, 원래 보기는 ③ ON 조인도 COL 이 두 번 나와 정답이 갈려, 컬럼 구성을 묻는 형태로 정리했다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T1",
        "headers": [
          "COL",
          "VAL1"
        ],
        "rows": [
          [
            "A",
            "10"
          ],
          [
            "B",
            "20"
          ],
          [
            "C",
            "30"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "T2",
        "headers": [
          "COL",
          "VAL2"
        ],
        "rows": [
          [
            "A",
            "100"
          ],
          [
            "B",
            "200"
          ]
        ]
      }
    ]
  },
  {
    "id": 10545,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 46,
    "title": "아래 SQL 의 RN 컬럼 값을 위에서부터 순서대로 나열한 것은? (Oracle 기준)",
    "options": [
      "5, 4, 3, 1, 2",
      "4, 3, 2, 5, 1",
      "5, 3, 4, 1, 2",
      "1, 2, 3, 4, 5"
    ],
    "correctIndex": 0,
    "explanation": "번호는 VAL 내림차순, VAL 이 같으면 ID 내림차순으로 매기고, 출력은 바깥 ORDER BY ID 순이다. Oracle 은 내림차순에서 NULL 이 맨 앞이라 ID 4(NULL) 가 1, ID 5(30) 가 2, VAL 20 인 ID 3 과 2 는 ID 내림차순이라 ID 3 이 3, ID 2 가 4, ID 1(10) 이 5 다. ID 1~5 순으로 읽으면 5, 4, 3, 1, 2 다(①). ② 는 NULL 을 맨 뒤로 본 결과(NULLS LAST), ③ 은 동점의 두 번째 기준을 ID 오름차순으로 본 결과, ④ 는 출력 순서(ID)와 번호 순서를 같다고 본 결과다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T 테이블",
        "headers": [
          "ID",
          "VAL"
        ],
        "rows": [
          [
            "1",
            "10"
          ],
          [
            "2",
            "20"
          ],
          [
            "3",
            "20"
          ],
          [
            "4",
            "NULL"
          ],
          [
            "5",
            "30"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT ID, VAL,\n       ROW_NUMBER() OVER (\n         ORDER BY VAL DESC, ID DESC)\n       AS RN\nFROM   T\nORDER BY ID;"
      }
    ]
  },
  {
    "id": 10546,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 47,
    "title": "아래 SQL 의 결과(A, B, C, D)로 옳은 것은? (Oracle 기준)",
    "options": [
      "-2.4, -2.4, -2, -3",
      "-2.5, -2.5, -3, -2",
      "-2.5, -2.4, -2, -3",
      "-2.5, -2.4, -3, -2"
    ],
    "correctIndex": 2,
    "explanation": "ROUND(-2.45, 1) 은 소수 둘째 자리 5 에서 반올림한다. 음수는 0 에서 먼 쪽으로 올라가 -2.5 가 된다. TRUNC(-2.45, 1) 은 소수 첫째 자리 아래를 버려 -2.4 다. CEIL 은 그 값 이상인 가장 작은 정수라 -2, FLOOR 는 그 값 이하인 가장 큰 정수라 -3 이다. 정답은 ③번이다. ① 은 음수의 반올림을 버림처럼 본 것, ② 는 TRUNC 를 ROUND 처럼 보고 CEIL·FLOOR 를 바꾼 것, ④ 는 음수에서 CEIL 과 FLOOR 의 방향을 거꾸로 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT ROUND(-2.45, 1) AS A,\n       TRUNC(-2.45, 1) AS B,\n       CEIL(-2.45)     AS C,\n       FLOOR(-2.45)    AS D\nFROM   DUAL;"
      }
    ]
  },
  {
    "id": 10547,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 48,
    "title": "아래 SQL 의 조인 형태와 결과로 옳은 것은?",
    "options": [
      "INNER JOIN, 2",
      "NATURAL JOIN, 6",
      "OUTER JOIN, 12",
      "CROSS JOIN(카티션 곱), 6"
    ],
    "correctIndex": 3,
    "explanation": "FROM 에 두 테이블을 나열하고 두 테이블을 잇는 조건이 없으면 모든 행끼리 짝을 짓는 CROSS JOIN(카티션 곱)이 된다. WHERE 의 SAL > 300 은 EMP 만 거르는 조건이라 조인 조건이 아니다. EMP 에서 SAL > 300 인 행은 2명(400, 500)이고, 이들이 DEPT 3행과 모두 짝을 지어 2 × 3 = 6 이다. 정답은 ④번이다. ② NATURAL JOIN 은 이름이 같은 칼럼으로 잇는데 두 테이블에는 같은 이름 칼럼이 없다. ③ 12 는 필터 없이 4 × 3 을 센 값이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP",
        "headers": [
          "EMPNO",
          "SAL"
        ],
        "rows": [
          [
            "1",
            "200"
          ],
          [
            "2",
            "400"
          ],
          [
            "3",
            "500"
          ],
          [
            "4",
            "300"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "DEPT",
        "headers": [
          "DEPTNO",
          "DNAME"
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
        "type": "sql",
        "code": "SELECT COUNT(*)\nFROM   EMP, DEPT\nWHERE  EMP.SAL > 300;"
      }
    ]
  },
  {
    "id": 10548,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 49,
    "title": "아래 매출 테이블에 대한 LAG 함수 쿼리의 결과 빈칸 (ㄱ), (ㄴ) 으로 옳은 것은?",
    "options": [
      "ㄱ = NULL, ㄴ = 700",
      "ㄱ = 0, ㄴ = 700",
      "ㄱ = 700, ㄴ = 600",
      "ㄱ = 0, ㄴ = 0"
    ],
    "correctIndex": 0,
    "explanation": "LAG(금액, 2, 0) 은 2행 앞의 금액을 가져오고, 2행 앞이 없을 때(1·2행)만 0 을 돌려준다. 4행의 2행 앞은 2행인데 그 금액이 NULL 이라 (ㄱ) 은 NULL 이다. 세 번째 인자 0 은 \"앞 행이 없을 때\" 의 값이지 \"앞 행의 값이 NULL 일 때\" 의 값이 아니다. 5행의 2행 앞은 3행이라 (ㄴ) 은 700 이다(①). ② 는 기본값 0 이 NULL 값까지 바꾼다고 본 결과, ③ 은 1행 앞(LAG(금액, 1))으로 본 결과, ④ 는 LEAD 처럼 뒤쪽을 보고 행이 없어 0 이 된다고 본 결과다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "매출 테이블",
        "headers": [
          "행",
          "금액"
        ],
        "rows": [
          [
            "1",
            "500"
          ],
          [
            "2",
            "NULL"
          ],
          [
            "3",
            "700"
          ],
          [
            "4",
            "600"
          ],
          [
            "5",
            "300"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT 행, 금액,\n       LAG(금액, 2, 0) OVER\n         (ORDER BY 행) AS 이전금액\nFROM   매출;"
      },
      {
        "type": "table",
        "caption": "출력 결과",
        "headers": [
          "행",
          "금액",
          "이전금액"
        ],
        "rows": [
          [
            "1",
            "500",
            "0"
          ],
          [
            "2",
            "NULL",
            "0"
          ],
          [
            "3",
            "700",
            "500"
          ],
          [
            "4",
            "600",
            "(ㄱ)"
          ],
          [
            "5",
            "300",
            "(ㄴ)"
          ]
        ]
      }
    ]
  },
  {
    "id": 10549,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 50,
    "title": "빈 테이블 T 에 대해 아래 문장을 차례로 실행했다. ㉠ 문장의 결과와, COMMIT 후 T 의 행 수로 옳은 것은? (Oracle 기준)",
    "options": [
      "성공, 3",
      "오류, 2",
      "오류, 0",
      "성공, 2"
    ],
    "correctIndex": 1,
    "explanation": "ROLLBACK TO SP1 은 SP1 이후의 작업(2, 3 입력)을 취소하고, SP1 뒤에 만든 저장점 SP2 도 함께 없앤다. 그래서 ㉠ ROLLBACK TO SP2 는 없는 저장점으로 돌아가려는 것이라 오류가 난다. Oracle 에서는 오류가 난 문장만 취소되고 트랜잭션은 그대로 이어진다. 1 은 SP1 전에 넣어 남아 있고, 이어서 4 를 넣은 뒤 COMMIT 하므로 T 에는 1, 4 의 2행이 남는다. 정답은 ②번이다. ① 과 ④ 는 SP1 으로 돌아간 뒤에도 SP2 가 남아 있다고 본 것이고, ③ 은 오류 한 번에 트랜잭션 전체가 취소된다고 본 것이다. 참고로 PostgreSQL 은 트랜잭션 안에서 오류가 나면 이후 문장을 모두 거부하고 COMMIT 도 ROLLBACK 으로 처리해 0행이 된다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "INSERT INTO T VALUES (1);\nSAVEPOINT SP1;\nINSERT INTO T VALUES (2);\nSAVEPOINT SP2;\nINSERT INTO T VALUES (3);\nROLLBACK TO SP1;\nROLLBACK TO SP2;  -- ㉠\nINSERT INTO T VALUES (4);\nCOMMIT;"
      }
    ]
  }
];
