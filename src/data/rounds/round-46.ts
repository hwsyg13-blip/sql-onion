// Auto-generated from PDF + blog + scripts/authored/round-46.json
// 제46회 — 2022년 9월 · 50문항
// ⚠ 직접 편집 금지. 출처별 데이터를 고친 뒤 'node scripts/build-quiz-bank.mjs' 재실행.
import type { QuizQuestion } from '../quizBank';

export const ROUND_46: QuizQuestion[] = [
  {
    "id": 10700,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "1과목",
    "number": 1,
    "title": "논리 데이터 모델링 단계에서 내린 결정으로 적절하지 않은 것은?",
    "options": [
      "주문상세의 주식별자를 주문번호 + 상품번호 로 확정했다.",
      "회원 테이블의 이행 종속을 없애려고 등급 테이블을 떼어 냈다.",
      "회사 업무 전체를 영업·생산·회계 주제영역으로 나누고 시스템 범위를 정했다.",
      "고객과 주문을 1:M 으로 두고, 주문 쪽을 선택(주문 없는 고객 허용)으로 정했다."
    ],
    "correctIndex": 2,
    "explanation": "논리 모델링은 개념 모델의 엔터티를 바탕으로 속성·식별자·관계(차수와 선택사양)를 자세히 정하고 정규화하는 단계다. 식별자 확정(①), 정규화(②), 관계차수·선택사양 결정(④)이 모두 여기에 속한다. 업무 전체를 주제영역으로 나누고 범위를 정하는 일은 가장 추상적인 개념 모델링 단계에서 한다. 정답은 ③번이다.",
    "_source": "authored"
  },
  {
    "id": 10701,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "1과목",
    "number": 2,
    "title": "아래 업무 규칙과 ERD 를 테이블로 구현할 때 가장 적절한 것은? (업무 규칙: 고객은 반드시 하나의 서비스에만 가입하며, 하나의 서비스에는 여러 고객이 가입할 수 있다.)",
    "options": [
      "고객 테이블에 서비스번호를 NOT NULL 외래키로 둔다.",
      "서비스 테이블에 고객번호를 외래키로 둔다.",
      "서비스계약 테이블(계약번호 PK, 고객번호, 서비스번호)을 새로 두어 고객과 서비스를 연결한다.",
      "서비스계약 테이블(고객번호 + 서비스번호 복합 PK)을 새로 두어 고객과 서비스를 연결한다."
    ],
    "correctIndex": 0,
    "explanation": "서비스와 고객은 1:N 관계(한 서비스에 여러 고객, 한 고객은 하나의 서비스)이므로 N 쪽인 고객 테이블에 서비스번호를 외래키로 둔다. 고객은 반드시 가입해야 하므로 NOT NULL 로 필수 관계까지 보장된다(①). ② 는 한 서비스에 고객이 한 명만 연결되어 \"여러 고객\" 규칙을 표현하지 못한다. ③·④ 처럼 별도 관계 테이블을 두는 것은 M:N 관계를 해소하는 방식으로, 한 고객이 여러 서비스에 가입하는 것을 막지 못하고 고객이 반드시 가입해야 한다는 규칙도 강제하지 못한다. ※ 복원 자료의 조건(1:1 필수)이 모호해 정답 논쟁이 있어, 업무 규칙을 명확히 하고 보기를 정리했다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "서비스-고객 ERD (고객 쪽 필수 1, 서비스 쪽 0..N)",
        "mermaid": "erDiagram\n    서비스 ||--o{ 고객 : \"가입\""
      }
    ]
  },
  {
    "id": 10702,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "1과목",
    "number": 3,
    "title": "아래 ERD(A, B, C, D 네 테이블의 모든 관계가 식별자 관계)에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "A의 PK는 B, C, D로 순차적으로 전파된다.",
      "A와 C를 조인할 때 B를 경유하지 않고도 조인이 가능하다.",
      "A와 B의 관계가 비식별자 관계로 바뀌면 A와 C의 조인이 더 쉬워진다.",
      "D는 A, B, C의 PK를 모두 상속받는다."
    ],
    "correctIndex": 2,
    "explanation": "모든 관계가 식별자 관계면 A 의 PK 가 B, C, D 의 PK 로 차례로 전파되어(①, ④) C 에도 A 의 PK 컬럼이 들어 있다. 그래서 B 를 거치지 않고 A 와 C 를 바로 조인할 수 있다(②). 반대로 A 와 B 가 비식별자 관계로 바뀌면 A 의 PK 는 B 의 일반 속성(FK)이 될 뿐 C 로 내려가지 않아, A 와 C 를 조인하려면 반드시 B 를 거쳐야 한다. 조인이 더 쉬워진다는 ③ 이 옳지 않다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "A-B-C-D 식별자 관계 ERD (모두 1:N, A 의 PK 가 D 까지 순차 전파)",
        "mermaid": "erDiagram\n    A ||--o{ B : \"갖는다\"\n    B ||--o{ C : \"갖는다\"\n    C ||--o{ D : \"갖는다\""
      }
    ]
  },
  {
    "id": 10703,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "1과목",
    "number": 4,
    "title": "속성에 대한 설명과 명칭이 올바르게 짝지어진 것은?",
    "options": [
      "기본속성, 설계속성, 파생속성",
      "파생속성, 설계속성, 기본속성",
      "설계속성, 기본속성, 파생속성",
      "기본속성, 파생속성, 설계속성"
    ],
    "correctIndex": 0,
    "explanation": "기본속성은 업무 분석에서 바로 도출되는 속성, 설계속성은 업무에는 없지만 설계하면서 새로 만든 속성(코드·일련번호 등), 파생속성은 다른 속성에서 계산하거나 변형해 만든 속성이다. ㄱ 은 기본, ㄴ 은 설계, ㄷ 은 파생이라 정답은 ①이다. ② 는 ㄱ·ㄷ, ③ 은 ㄱ·ㄴ, ④ 는 ㄴ·ㄷ 의 짝을 서로 바꿔 놓았다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "( ㄱ ) 업무 분석을 통해 바로 도출되는 속성\n( ㄴ ) 원래 업무상 존재하지는 않지만 설계 과정에서 도출되는 속성\n( ㄷ ) 다른 속성으로부터 계산·변형되어 생성되는 속성"
      }
    ]
  },
  {
    "id": 10704,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "1과목",
    "number": 5,
    "title": "아래 업무 규칙과 두 테이블을 보고, 파생 속성만 모두 고른 것은?",
    "options": [
      "총액",
      "총액, 단가",
      "배송일, 상품수, 총액",
      "배송일, 상품수, 총액, 단가"
    ],
    "correctIndex": 2,
    "explanation": "파생 속성은 다른 속성 값으로 계산해 낼 수 있는 속성이다. 배송일은 주문일 + 3일, 상품수는 그 주문의 주문상세 행 수, 총액은 주문상세의 수량 × 단가 합계(O1 은 2 × 1000 + 1 × 5000 = 7000)라 셋 다 파생 속성이다. 단가는 주문 당시 가격을 남겨 두는 값이라, 지금의 상품 가격으로 다시 계산할 수 없다. 그래서 파생이 아닌 기본 속성이다. 정답은 ③번이다. ① 은 계산식이 눈에 띄는 총액만 고른 것, ②·④ 는 단가를 상품 가격에서 가져온 파생 값으로 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "배송일은 늘 주문일의 3일 뒤로 넣는다. 단가는 주문하는 순간의 상품 가격을 그대로 기록하고, 나중에 상품 가격이 바뀌어도 고치지 않는다."
      },
      {
        "type": "table",
        "caption": "주문",
        "headers": [
          "번호",
          "주문일",
          "배송일",
          "상품수",
          "총액"
        ],
        "rows": [
          [
            "O1",
            "11-01",
            "11-04",
            "2",
            "7000"
          ],
          [
            "O2",
            "11-02",
            "11-05",
            "1",
            "3000"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "주문상세",
        "headers": [
          "번호",
          "상품",
          "수량",
          "단가"
        ],
        "rows": [
          [
            "O1",
            "펜",
            "2",
            "1000"
          ],
          [
            "O1",
            "공책",
            "1",
            "5000"
          ],
          [
            "O2",
            "펜",
            "3",
            "1000"
          ]
        ]
      }
    ]
  },
  {
    "id": 10705,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "1과목",
    "number": 6,
    "title": "아래 사원 테이블(기본키: 사번)과 함수 종속을 보고, 이 테이블이 만족하는 가장 높은 정규형으로 옳은 것은?",
    "options": [
      "제1정규형",
      "제2정규형",
      "제3정규형",
      "BCNF"
    ],
    "correctIndex": 1,
    "explanation": "모든 칸에 값이 하나씩만 들어 있어 제1정규형은 만족한다. 기본키가 사번 한 칼럼이라 '키의 일부에만 종속' 되는 부분 함수 종속이 생길 수 없으므로 제2정규형도 만족한다. 하지만 사번 → 부서번호 → 부서명 으로 이어지는 이행 함수 종속이 있어 제3정규형은 아니다. 영업이 두 번 저장된 것이 그 흔적이다. 정답은 ②번이다. ① 은 단일 칼럼 키에서는 부분 종속이 생기지 않는다는 점을 놓친 것, ③·④ 는 부서번호 → 부서명 의 이행 종속을 놓친 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "사원",
        "headers": [
          "사번",
          "이름",
          "부서번호",
          "부서명"
        ],
        "rows": [
          [
            "1",
            "김",
            "10",
            "영업"
          ],
          [
            "2",
            "이",
            "10",
            "영업"
          ],
          [
            "3",
            "박",
            "20",
            "개발"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "함수 종속",
        "headers": [
          "결정자",
          "종속 속성"
        ],
        "rows": [
          [
            "사번",
            "이름, 부서번호"
          ],
          [
            "부서번호",
            "부서명"
          ]
        ]
      }
    ]
  },
  {
    "id": 10706,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "1과목",
    "number": 7,
    "title": "아래 ERD 의 해석으로 옳지 않은 것은? (IE 표기법)",
    "options": [
      "컴퓨터에 장착되지 않은 마더보드가 있을 수 있다.",
      "모든 마더보드는 메모리 슬롯을 하나 이상 가진다.",
      "메모리가 꽂히지 않은 빈 메모리 슬롯은 존재할 수 없다.",
      "제조사 정보가 없는 마더보드가 있을 수 있다."
    ],
    "correctIndex": 2,
    "explanation": "관계선 끝의 기호는 그 끝에 붙은 엔터티가 상대 한 건당 몇 개인지를 나타낸다. 세로선(|)은 반드시, 동그라미(o)는 없어도 됨, 까마귀발은 여러 개라는 뜻이다. 메모리슬롯과 메모리 사이에서 메모리 쪽 끝이 o| 라 슬롯 하나에 메모리가 0개 또는 1개다. 메모리가 꽂히지 않은 빈 슬롯이 있을 수 있으므로 ③ 이 옳지 않다. ① 마더보드와 컴퓨터 사이에서 컴퓨터 쪽 끝이 o| 라 마더보드 하나에 컴퓨터가 0개 또는 1개이므로, 아직 장착되지 않은 마더보드가 있을 수 있다. ② 마더보드와 메모리슬롯 사이에서 메모리슬롯 쪽 끝이 |{ 라 마더보드는 슬롯을 하나 이상 가진다. ④ 제조사와 마더보드 사이에서 제조사 쪽 끝이 |o 라 마더보드 하나에 제조사가 0개 또는 1개이므로, 제조사 정보가 없는 마더보드도 있을 수 있다. 관계마다 어느 끝의 기호를 읽어야 하는지 헷갈리면, 문장의 주어(한 건)가 아닌 쪽 끝을 보면 된다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "제조사·마더보드·컴퓨터·메모리슬롯·메모리 ERD",
        "mermaid": "erDiagram\n    제조사 |o--o{ 마더보드 : \"생산\"\n    마더보드 ||--o| 컴퓨터 : \"장착\"\n    마더보드 ||--|{ 메모리슬롯 : \"보유\"\n    메모리슬롯 ||--o| 메모리 : \"꽂힘\"\n    제조사 {\n        string 제조사코드 PK\n        string 제조사명\n    }\n    마더보드 {\n        string 보드번호 PK\n        string 제조사코드 FK\n    }\n    컴퓨터 {\n        string 자산번호 PK\n        string 보드번호 FK\n    }\n    메모리슬롯 {\n        string 보드번호 PK,FK\n        int 슬롯번호 PK\n    }\n    메모리 {\n        string 메모리번호 PK\n        string 보드번호 FK\n        int 슬롯번호 FK\n    }"
      }
    ]
  },
  {
    "id": 10707,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "1과목",
    "number": 8,
    "title": "아래 주문 엔터티의 ㉠~㉢ 을 식별자 종류로 바르게 짝지은 것은?",
    "options": [
      "㉠ 주·인조식별자 / ㉡ 보조·본질식별자 / ㉢ 외부식별자",
      "㉠ 주·본질식별자 / ㉡ 보조·인조식별자 / ㉢ 외부식별자",
      "㉠ 주·인조식별자 / ㉡ 보조·본질식별자 / ㉢ 내부식별자",
      "㉠ 보조·인조식별자 / ㉡ 주·본질식별자 / ㉢ 외부식별자"
    ],
    "correctIndex": 0,
    "explanation": "식별자는 기준마다 따로 나눈다. 대표성으로는 기본키로 쓰는 주식별자와, 구별은 되지만 대표로 쓰지 않는 보조식별자가 있다. 만들어진 방식으로는 업무에서 원래 생기는 본질식별자와 편의상 새로 붙인 인조식별자가 있다. 관계로 받아 온 식별자는 외부식별자, 엔터티 안에서 스스로 만든 식별자는 내부식별자다. ㉠ 은 기본키이면서 시스템이 붙인 번호라 주·인조식별자, ㉡ 은 업무 데이터로 구별되지만 기본키가 아니라 보조·본질식별자, ㉢ 은 관계로 받은 외부식별자다. 정답은 ①번이다. ② 는 채번한 번호를 본질식별자로 본 것, ③ 은 관계로 받은 속성을 내부식별자로 본 것, ④ 는 기본키와 보조식별자를 바꿔 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "주문",
        "headers": [
          "주문번호",
          "고객번호",
          "주문일시"
        ],
        "rows": [
          [
            "202611190001",
            "C1",
            "11-19 09:12:03"
          ],
          [
            "202611190002",
            "C2",
            "11-19 09:12:03"
          ],
          [
            "202611190003",
            "C1",
            "11-19 10:40:51"
          ]
        ]
      },
      {
        "type": "text",
        "content": "㉠ 주문번호: 시스템이 순서대로 붙이며 기본키로 쓴다.\n㉡ 고객번호 + 주문일시: 주문을 하나씩 구별할 수 있지만 기본키로 쓰지 않는다.\n㉢ 고객번호: 고객 엔터티와의 관계로 받아 온 속성이다."
      }
    ]
  },
  {
    "id": 10708,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "1과목",
    "number": 9,
    "title": "도메인은 속성이 가질 수 있는 값의 범위다. 아래 성적 테이블의 국어·영어 속성에 도메인 '점수'를 적용했을 때 도메인을 어기는 행만 모두 고른 것은?",
    "options": [
      "S2",
      "S2, S3",
      "S2, S3, S4",
      "S3, S4"
    ],
    "correctIndex": 2,
    "explanation": "도메인에는 데이터 타입, 허용 범위, NULL 허용 여부가 함께 정해지고, 같은 도메인을 쓰는 속성은 모두 같은 규칙을 따른다. S1 은 90·100 으로 범위 안이다(100 과 0 은 경계값이라 허용된다). S2 의 101 은 범위를 넘고, S3 의 NULL 은 NULL 불가를 어기며, S4 의 85.5 는 정수가 아니다. 정답은 ③번이다. ① 은 범위만 본 것, ② 는 데이터 타입(정수)을 놓친 것, ④ 는 101 을 경계 안으로 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "도메인 '점수': 정수, 0 이상 100 이하, NULL 불가"
      },
      {
        "type": "table",
        "caption": "성적",
        "headers": [
          "학번",
          "국어",
          "영어"
        ],
        "rows": [
          [
            "S1",
            "90",
            "100"
          ],
          [
            "S2",
            "101",
            "80"
          ],
          [
            "S3",
            "NULL",
            "70"
          ],
          [
            "S4",
            "85.5",
            "0"
          ]
        ]
      }
    ]
  },
  {
    "id": 10709,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "1과목",
    "number": 10,
    "title": "아래 두 사례 ㄱ, ㄴ 이 각각 어긴 주식별자의 특성으로 옳은 것은?",
    "options": [
      "ㄱ 대표성, ㄴ 유일성",
      "ㄱ 최소성, ㄴ 불변성",
      "ㄱ 불변성, ㄴ 최소성",
      "ㄱ 유일성, ㄴ 대표성"
    ],
    "correctIndex": 1,
    "explanation": "주식별자는 유일성(모든 인스턴스 구별), 최소성(구별에 필요한 최소 속성만), 불변성(값이 바뀌지 않음), 존재성(NULL 이 없음)을 갖춰야 한다. ㄱ 은 학번만으로 구별되는데 이름까지 넣어 최소성을 어겼다. ㄴ 은 휴대폰번호가 바뀌면서 그 값을 외래키로 참조하던 주문과의 연결이 끊어져 불변성을 어겼다. 정답은 ②번이다. ㄱ 은 여전히 모든 학생을 구별하므로 유일성 문제가 아니고, ㄴ 도 바뀌기 전까지는 번호가 겹치지 않았으니 유일성 문제가 아니다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "ㄱ: 학생 엔터티의 주식별자를 학번 + 이름 으로 정했는데, 학번만으로도 모든 학생이 구별된다.\nㄴ: 회원 엔터티의 주식별자를 휴대폰번호로 정했는데, 번호를 바꾸는 회원이 생겨 주문 기록과의 연결이 끊어졌다."
      }
    ]
  },
  {
    "id": 10710,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 11,
    "title": "아래 테이블과 계층형 쿼리의 결과 행 수로 옳은 것은?",
    "options": [
      "3건",
      "5건",
      "6건",
      "8건"
    ],
    "correctIndex": 2,
    "explanation": "START WITH COL2 IS NULL 을 만족하는 행은 A 와 H 두 개라 루트가 둘이다. CONNECT BY PRIOR COL1 = COL2 는 부모의 COL1 을 COL2 로 가진 행, 즉 자식으로 내려가는 순방향이다. A 아래로 B·C, B 아래로 D·E, D 아래로 G, C 아래로 F 가 이어져 A 트리 7행, H 는 자식이 없어 1행, 모두 8행이 만들어진다. WHERE COL3 <> 2 는 트리를 다 만든 뒤 그 행만 지우므로 B 와 F 두 행만 빠지고 B 아래의 D·E·G 는 그대로 남는다. 결과 6건이다(③). ① 3건은 조건을 CONNECT BY 에 쓴 것처럼 B·F 아래 가지까지 잘라 낸 값(A, C, H), ② 5건은 루트를 A 하나로 본 값, ④ 8건은 WHERE 를 적용하지 않은 값이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "SQLD46_01 테이블",
        "headers": [
          "COL1",
          "COL2",
          "COL3"
        ],
        "rows": [
          [
            "A",
            "NULL",
            "1"
          ],
          [
            "B",
            "A",
            "2"
          ],
          [
            "C",
            "A",
            "3"
          ],
          [
            "D",
            "B",
            "4"
          ],
          [
            "E",
            "B",
            "5"
          ],
          [
            "F",
            "C",
            "2"
          ],
          [
            "G",
            "D",
            "6"
          ],
          [
            "H",
            "NULL",
            "7"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT *\nFROM   SQLD46_01\nWHERE  COL3 <> 2\nSTART WITH COL2 IS NULL\nCONNECT BY PRIOR COL1 = COL2;"
      }
    ]
  },
  {
    "id": 10711,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 12,
    "title": "아래 네 SQL 중 COL이 NULL일 때 반환 결과가 나머지와 다른 것은?",
    "options": [
      "IFNULL(COL, 'value')",
      "NVL(COL, 'value')",
      "COALESCE(COL, 'value')",
      "NULLIF(COL, 'value')"
    ],
    "correctIndex": 3,
    "explanation": "COL 이 NULL 이면 IFNULL·NVL·COALESCE(①②③)는 모두 대체값 'value' 를 반환한다. NULLIF(COL, 'value') 는 두 값이 같으면 NULL, 다르면 첫 번째 값을 반환하므로 COL 이 NULL 이면 NULL 을 반환한다(④). 결과가 다른 것은 ④ 다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ① IFNULL(COL, 'value')\n-- ② NVL(COL, 'value')\n-- ③ COALESCE(COL, 'value')\n-- ④ NULLIF(COL, 'value')"
      }
    ]
  },
  {
    "id": 10712,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 13,
    "title": "아래 계층형 쿼리가 사원-관리자 조직도를 최상위부터 순회하도록 빈칸을 채우시오.",
    "options": [
      "ㄱ 관리자 IS NULL, ㄴ 사원, ㄷ 관리자",
      "ㄱ 사원 IS NULL, ㄴ 관리자, ㄷ 사원",
      "ㄱ 관리자 = 사원, ㄴ 사원, ㄷ 관리자",
      "ㄱ 관리자 IS NULL, ㄴ 관리자, ㄷ 사원"
    ],
    "correctIndex": 0,
    "explanation": "조직도의 최상위 직원은 자신의 관리자가 없으므로 관리자 컬럼이 NULL이다. 따라서 START WITH 관리자 IS NULL로 출발점을 잡고, 부모(상사)의 사원번호가 자식(부하)의 관리자번호와 같다는 조건으로 트리를 위에서 아래로 펼치므로 PRIOR 사원 = 관리자가 된다. 정답은 ①번이다. ② 는 사원 IS NULL 이라 시작 행이 없고 전개 방향도 거꾸로이며, ③ 관리자 = 사원 은 자기 자신이 자기 관리자인 행이어야 해 보통 시작 행이 없고, ④ PRIOR 관리자 = 사원 은 아래에서 위로 올라가는 역방향 전개라 최상위 행에서 출발하면 더 올라갈 곳이 없다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT 사원, 관리자, LEVEL\nFROM   EMP\nSTART WITH (  ㄱ  )\nCONNECT BY PRIOR ( ㄴ ) = ( ㄷ );"
      }
    ]
  },
  {
    "id": 10713,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 14,
    "title": "두 SQL의 결과 집합에 대한 설명으로 옳은 것은?",
    "options": [
      "두 SQL의 결과는 항상 동일하다.",
      "UNION ALL은 중복을 제거하지 않고, UNION은 중복을 제거한다.",
      "UNION은 정렬을 수행하지 않으므로 성능이 더 좋다.",
      "UNION ALL은 서로 다른 컬럼 수를 가진 집합도 결합할 수 있다."
    ],
    "correctIndex": 1,
    "explanation": "UNION ALL 은 두 결과를 그대로 이어 붙여 중복을 남기고, UNION 은 합친 뒤 중복을 제거한다(②). 두 테이블에 같은 행이 있으면 결과가 달라지므로 ① 은 틀렸다. ③ UNION 은 중복을 없애려고 정렬·비교를 더 하므로 오히려 느리고, ④ 집합 연산은 UNION ALL 이든 UNION 이든 컬럼 수가 같아야 한다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT A, B, C FROM TAB1\nUNION ALL\nSELECT A, B, C FROM TAB2;\n\nSELECT A, B, C FROM TAB1\nUNION\nSELECT A, B, C FROM TAB2;"
      }
    ]
  },
  {
    "id": 10714,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 15,
    "title": "아래 T 테이블에 대한 네 SQL 중 결과가 다른 것은?",
    "options": [
      "SELECT A, SUM(X) FROM T GROUP BY A UNION ALL SELECT NULL, SUM(X) FROM T;",
      "SELECT A, SUM(X) FROM T GROUP BY ROLLUP(A);",
      "SELECT A, SUM(X) FROM T GROUP BY CUBE(A);",
      "SELECT A, SUM(X) FROM T GROUP BY GROUPING SETS(A);"
    ],
    "correctIndex": 3,
    "explanation": "A 별 합계는 A 가 1 이면 30, 2 이면 70 이고 전체 합계는 100 이다. ① 은 A 별 합계 두 행에 A 가 NULL 인 전체 합계 한 행을 붙여 (1, 30), (2, 70), (NULL, 100) 을 돌려준다. ② ROLLUP(A) 와 ③ CUBE(A) 는 컬럼이 하나라 둘 다 A 별 합계와 전체 합계를 만들어 ① 과 같다. ④ GROUPING SETS(A) 는 A 별 합계만 만들고 전체 합계가 없어 (1, 30), (2, 70) 두 행뿐이다. 결과가 다른 것은 ④ 다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T 테이블",
        "headers": [
          "A",
          "X"
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
            "30"
          ],
          [
            "2",
            "40"
          ]
        ]
      }
    ]
  },
  {
    "id": 10715,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 16,
    "title": "SQL의 분류에 대한 설명으로 옳지 않은 것은?",
    "options": [
      "DML은 SELECT, INSERT, UPDATE, DELETE이다.",
      "TCL은 COMMIT, ROLLBACK, SAVEPOINT이다.",
      "DCL은 GRANT, REVOKE이다.",
      "DCL은 CREATE, ALTER, DROP이다."
    ],
    "correctIndex": 3,
    "explanation": "DML 은 SELECT·INSERT·UPDATE·DELETE(①), TCL 은 COMMIT·ROLLBACK·SAVEPOINT(②), DCL 은 GRANT·REVOKE(③)다. CREATE·ALTER·DROP 은 객체 구조를 정의하는 DDL 이므로 이를 DCL 이라고 한 ④ 가 옳지 않다.",
    "_source": "authored"
  },
  {
    "id": 10716,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 17,
    "title": "아래 결과를 얻기 위한 SQL로 올바른 것은?",
    "options": [
      "GROUP BY GROUPING SETS(매장ID, (매장ID, 매장명)), 년도",
      "GROUP BY ROLLUP(매장ID, 매장명), 년도",
      "GROUP BY CUBE(매장ID, 매장명, 년도)",
      "GROUP BY 매장ID, 매장명, 년도"
    ],
    "correctIndex": 1,
    "explanation": "출력 결과에는 (매장ID, 매장명, 년도) 세부 집계, 매장명이 NULL 인 (매장ID, 년도) 소계, 매장ID·매장명이 모두 NULL 인 (년도) 소계가 함께 있다. ROLLUP(매장ID, 매장명) 은 오른쪽 컬럼부터 하나씩 빼 가며 (매장ID, 매장명), (매장ID), () 세 그룹을 만들고, 뒤에 붙은 년도가 각 그룹에 더해져 출력 결과와 정확히 같다(②). ① GROUPING SETS 는 (매장ID) 와 (매장ID, 매장명) 만 만들어 (년도) 소계가 빠지고, ③ CUBE 는 모든 조합을 만들어 결과보다 행이 많으며, ④ 일반 GROUP BY 는 소계가 없다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "매출 테이블 (입력)",
        "headers": [
          "매장ID",
          "매장명",
          "년도",
          "매출"
        ],
        "rows": [
          [
            "S01",
            "강남점",
            "2024",
            "1000"
          ],
          [
            "S01",
            "강남점",
            "2025",
            "1500"
          ],
          [
            "S02",
            "수원점",
            "2024",
            "800"
          ],
          [
            "S02",
            "수원점",
            "2025",
            "1200"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "출력 결과",
        "headers": [
          "매장ID",
          "매장명",
          "년도",
          "SUM(매출)"
        ],
        "rows": [
          [
            "S01",
            "강남점",
            "2024",
            "1000"
          ],
          [
            "S01",
            "강남점",
            "2025",
            "1500"
          ],
          [
            "S01",
            "(NULL)",
            "2024",
            "1000"
          ],
          [
            "S01",
            "(NULL)",
            "2025",
            "1500"
          ],
          [
            "S02",
            "수원점",
            "2024",
            "800"
          ],
          [
            "S02",
            "수원점",
            "2025",
            "1200"
          ],
          [
            "S02",
            "(NULL)",
            "2024",
            "800"
          ],
          [
            "S02",
            "(NULL)",
            "2025",
            "1200"
          ],
          [
            "(NULL)",
            "(NULL)",
            "2024",
            "1800"
          ],
          [
            "(NULL)",
            "(NULL)",
            "2025",
            "2700"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT 매장ID, 매장명, 년도, SUM(매출)\nFROM   매출\n(  ?  );"
      }
    ]
  },
  {
    "id": 10717,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 18,
    "title": "아래 세 SQL의 결과에 대한 설명으로 옳은 것은? (WHERE 1=2 이므로 모두 공집합)",
    "options": [
      "(가) 는 NULL, (나) 는 0, (다) 는 0 을 반환한다.",
      "(가) 는 0, (나) 는 NULL, (다) 는 0 을 반환한다.",
      "(가) 는 0, (나) 는 0, (다) 는 NULL 을 반환한다.",
      "세 SQL 모두 NULL 을 반환한다."
    ],
    "correctIndex": 1,
    "explanation": "공집합을 집계하면 COUNT 는 0 을, SUM·MIN·MAX·AVG 는 NULL 을 돌려준다. (가) 는 SUM 이 NULL 이지만 NVL 로 감싸 0 이 되고, (나) MIN 은 NULL, (다) COUNT(*) 는 0 이다. 정답은 ②다. ① 은 (가) 의 NVL 을 놓쳤고, ③ 과 ④ 는 COUNT 가 공집합에서도 0 을 돌려준다는 점을 놓쳤다.",
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
            "10"
          ],
          [
            "20"
          ],
          [
            "NULL"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- (가)\nSELECT NVL(SUM(COL1), 0) FROM T WHERE 1=2;\n\n-- (나)\nSELECT MIN(COL1) FROM T WHERE 1=2;\n\n-- (다)\nSELECT COUNT(*) FROM T WHERE 1=2;"
      }
    ]
  },
  {
    "id": 10718,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 19,
    "title": "아래 세 테이블에 대한 SQL 의 결과 행 수로 옳은 것은? (Oracle 기준)",
    "options": [
      "3건",
      "4건",
      "6건",
      "7건"
    ],
    "correctIndex": 0,
    "explanation": "Oracle 은 집합 연산자의 우선순위가 같아 괄호가 없으면 위에서부터 계산한다. 먼저 T1 UNION ALL T2 는 중복을 그대로 둔 1, 2, 3, 3, NULL, 3, 4, 5, NULL 9행이다. 여기서 T3 의 2, 3, NULL, 6 을 MINUS 하면, MINUS 는 결과의 중복도 지우고 집합 연산이라 NULL 끼리도 같은 값으로 본다. 2·3·NULL 이 모두 빠지고 1, 4, 5 만 남아 3건이다(①). ② 4건은 NULL 끼리는 같지 않다고 보고 NULL 을 남긴 값, ③ 6건은 MINUS 가 같은 값을 한 번씩만 빼고 중복을 남긴다고 본 값(1, 3, 3, NULL, 4, 5), ④ 7건은 T2 MINUS T3(4, 5)를 먼저 계산해 T1 에 붙인 값이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T1 테이블",
        "headers": [
          "COL"
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
          ],
          [
            "NULL"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "T2 테이블",
        "headers": [
          "COL"
        ],
        "rows": [
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
            "NULL"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "T3 테이블",
        "headers": [
          "COL"
        ],
        "rows": [
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
            "6"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT COL FROM T1\nUNION ALL\nSELECT COL FROM T2\nMINUS\nSELECT COL FROM T3;"
      }
    ]
  },
  {
    "id": 10719,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 20,
    "title": "아래 SQL에서 결과와 상관없이 모든 행을 반환하는 테이블은?",
    "options": [
      "TUTOR",
      "SESSIONS",
      "두 테이블 모두",
      "두 테이블 중 어느 쪽도 보장되지 않는다."
    ],
    "correctIndex": 0,
    "explanation": "LEFT OUTER JOIN은 FROM 절의 좌측 테이블 모든 행을 결과에 보존하고, 우측에서 매칭되는 행이 없으면 NULL로 채운다. 좌측이 TUTOR이므로 SESSIONS에 짝이 없어도 TUTOR의 모든 행은 항상 반환된다. 정답은 ①번이다. ② SESSIONS 의 행은 TUTOR 와 짝이 맞을 때만 나오므로 보장되지 않고, ③ 두 테이블을 모두 보존하려면 FULL OUTER JOIN 이어야 하며, ④ LEFT OUTER JOIN 은 왼쪽 TUTOR 의 모든 행을 보장한다(짝이 없는 T03 강감찬은 S.DATE 가 NULL).",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TUTOR 테이블",
        "headers": [
          "TID",
          "NAME"
        ],
        "rows": [
          [
            "T01",
            "홍길동"
          ],
          [
            "T02",
            "이순신"
          ],
          [
            "T03",
            "강감찬"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "SESSIONS 테이블",
        "headers": [
          "SID",
          "TID",
          "DATE"
        ],
        "rows": [
          [
            "S01",
            "T01",
            "2025-10-01"
          ],
          [
            "S02",
            "T02",
            "2025-10-02"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT T.NAME, S.DATE\nFROM   TUTOR T LEFT OUTER JOIN SESSIONS S\nON     T.TID = S.TID;"
      }
    ]
  },
  {
    "id": 10720,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 21,
    "title": "아래 데이터에 네 윈도우 함수를 적용했을 때, 마지막 행의 값이 나머지와 다른 것은?",
    "options": [
      "RANK() OVER (ORDER BY VAL)",
      "DENSE_RANK() OVER (ORDER BY VAL)",
      "ROW_NUMBER() OVER (ORDER BY VAL)",
      "NTILE(5) OVER (ORDER BY VAL)"
    ],
    "correctIndex": 1,
    "explanation": "VAL 이 20 인 행이 두 개라 동률이 생긴다. ① RANK 는 1, 2, 2, 4, 5 로 동률 다음 순위를 건너뛰고 DENSE_RANK 는 1, 2, 2, 3, 4 로 건너뛰지 않는다. ③ ROW_NUMBER 는 동률과 무관하게 1, 2, 3, 4, 5 이고 ④ NTILE(5) 도 다섯 그룹으로 나누어 1, 2, 3, 4, 5 가 된다. 마지막 행의 값이 4 인 ② DENSE_RANK 만 나머지(5)와 다르다.",
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
            "30"
          ],
          [
            "5",
            "40"
          ]
        ]
      }
    ]
  },
  {
    "id": 10721,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 22,
    "title": "급여가 100, 200, 200, 500 인 사원 테이블에 아래 SQL 을 실행했다. 급여 100 행의 RK, DR, RT 값으로 옳은 것은? (Oracle 기준)",
    "options": [
      "4, 4, 0.1",
      "3, 3, 0.1",
      "4, 3, 10",
      "4, 3, 0.1"
    ],
    "correctIndex": 3,
    "explanation": "내림차순이라 500 이 1위, 200 두 행이 공동 2위다. RANK 는 공동 순위만큼 건너뛰어 100 이 4위, DENSE_RANK 는 건너뛰지 않아 3위다. RATIO_TO_REPORT 는 순위 함수가 아니라 비율 함수로, 전체 합계 대비 비율을 0 과 1 사이 값으로 돌려준다. 합계가 1000 이라 100 / 1000 = 0.1 이다. 정답은 ④번이다. ① 은 DENSE_RANK 도 건너뛴다고 본 것, ② 는 RANK 가 건너뛰지 않는다고 본 것, ③ 은 비율을 백분율(%)로 돌려준다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT 급여,\n  RANK()       OVER\n    (ORDER BY 급여 DESC) AS RK,\n  DENSE_RANK() OVER\n    (ORDER BY 급여 DESC) AS DR,\n  RATIO_TO_REPORT(급여)\n    OVER ()              AS RT\nFROM 사원;"
      }
    ]
  },
  {
    "id": 10722,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 23,
    "title": "아래 T 테이블에서 기대 결과처럼 정렬 값이 같은 행에 같은 누적 합을 주는 윈도우 절은?",
    "options": [
      "ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW",
      "RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW",
      "ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING",
      "ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING"
    ],
    "correctIndex": 1,
    "explanation": "A 그룹의 AMT 100 인 두 행이 모두 200 을 받는 것이 핵심이다. RANGE 는 ORDER BY 값이 같은 행을 한꺼번에 범위에 넣으므로 A 의 100 두 행은 100 + 100 = 200, 200 행은 400, B 의 300 두 행은 600 이 된다(②). ① ROWS 누적은 같은 값도 한 행씩 따로 더해 A 가 100, 200, 400 이 된다. ③ 앞뒤 1행 합은 A 가 200, 400, 300 이다. ④ 처음부터 끝까지는 A 세 행이 모두 400 이다. B 그룹만 보면 ②·③·④ 가 모두 600, 600 이라 구분되지 않으므로 반드시 A 그룹으로 판단해야 한다. ORDER BY 만 쓰고 범위를 생략해도 기본값이 RANGE 라 ② 와 같다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T 테이블",
        "headers": [
          "ID",
          "GRP",
          "AMT"
        ],
        "rows": [
          [
            "1",
            "A",
            "100"
          ],
          [
            "2",
            "A",
            "100"
          ],
          [
            "3",
            "A",
            "200"
          ],
          [
            "4",
            "B",
            "300"
          ],
          [
            "5",
            "B",
            "300"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT ID, GRP, SUM(AMT) OVER (\n  PARTITION BY GRP\n  ORDER BY AMT\n  [ ? ]\n) AS RUNNING_SUM\nFROM T;"
      },
      {
        "type": "table",
        "caption": "기대 결과",
        "headers": [
          "ID",
          "GRP",
          "RUNNING_SUM"
        ],
        "rows": [
          [
            "1",
            "A",
            "200"
          ],
          [
            "2",
            "A",
            "200"
          ],
          [
            "3",
            "A",
            "400"
          ],
          [
            "4",
            "B",
            "600"
          ],
          [
            "5",
            "B",
            "600"
          ]
        ]
      }
    ]
  },
  {
    "id": 10723,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 24,
    "title": "연봉이 100, 200, 300, 400 인 4행에 아래 SQL 을 실행했다. ('300 행의 A, 200 행의 B, 300 행의 C, 200 행의 D' 순서)",
    "options": [
      "400, 600, 200, 3",
      "300, 600, 200, 3",
      "300, 500, 250, 2",
      "300, 600, 250, 3"
    ],
    "correctIndex": 1,
    "explanation": "ROWS BETWEEN 은 현재 행을 기준으로 계산할 행의 범위를 정한다. A 는 현재 행 하나만 보므로 300 행에서 자기 값 300 이다. B 는 앞 1행과 뒤 1행까지라 200 행에서 100 + 200 + 300 = 600 이다. C 는 처음부터 현재 행까지의 평균이라 300 행에서 (100 + 200 + 300) / 3 = 200 이다. D 는 현재 행부터 끝까지의 행 수라 200 행에서 200·300·400 의 3 이다. 정답은 ②번이다. ① 은 A 를 전체 최댓값으로 본 것, ③ 은 B 에서 뒤쪽 행을, D 에서 현재 행을 뺀 것, ④ 는 C 에 끝까지 포함한 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT 연봉,\n  MAX(연봉) OVER (ORDER BY 연봉 ROWS\n    BETWEEN CURRENT ROW\n    AND CURRENT ROW)          AS A,\n  SUM(연봉) OVER (ORDER BY 연봉 ROWS\n    BETWEEN 1 PRECEDING\n    AND 1 FOLLOWING)          AS B,\n  AVG(연봉) OVER (ORDER BY 연봉 ROWS\n    BETWEEN UNBOUNDED PRECEDING\n    AND CURRENT ROW)          AS C,\n  COUNT(*) OVER (ORDER BY 연봉 ROWS\n    BETWEEN CURRENT ROW\n    AND UNBOUNDED FOLLOWING)  AS D\nFROM EMP;"
      }
    ]
  },
  {
    "id": 10724,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 25,
    "title": "EMP 테이블의 JOB 값이 CLERK 3행, MANAGER 2행, NULL 1행일 때, 아래 SQL ㉠~㉣ 의 결과 행 수로 옳은 것은?",
    "options": [
      "6, 3, 3, 3",
      "6, 2, 2, 2",
      "3, 3, 3, 3",
      "6, 3, 2, 3"
    ],
    "correctIndex": 0,
    "explanation": "㉠ 의 EXISTS 서브쿼리는 늘 행이 있어 참이므로, 중복을 없애지 않고 6행이 모두 나온다. ㉡ DISTINCT, ㉢ GROUP BY, ㉣ UNION 은 모두 중복을 없애고 NULL 도 하나의 값으로 모아 CLERK, MANAGER, NULL 의 3행이다. 정답은 ①번이다. ② 는 세 방식이 NULL 을 버린다고 본 것, ③ 은 EXISTS 도 중복을 없앤다고 본 것, ④ 는 GROUP BY 만 NULL 그룹을 만들지 않는다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT JOB FROM EMP\nWHERE  EXISTS (SELECT 1 FROM DUAL);\n-- ㉡\nSELECT DISTINCT JOB FROM EMP;\n-- ㉢\nSELECT JOB FROM EMP GROUP BY JOB;\n-- ㉣\nSELECT JOB FROM EMP\nUNION\nSELECT JOB FROM EMP;"
      }
    ]
  },
  {
    "id": 10725,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 26,
    "title": "아래 사원 테이블에 대한 SQL 결과로 옳은 것은? ('㉠ 결과 부서, ㉡ 의 A 평균, ㉢ 행 수' 순서)",
    "options": [
      "A, 180, 1",
      "A·B, 190, 0",
      "A·B, 180, 0",
      "A, 190, 2"
    ],
    "correctIndex": 1,
    "explanation": "HAVING 은 그룹을 만든 뒤 그룹 단위로 거른다. ㉠ 은 부서별 평균이 A 180, B 180, C 160 이라 A·B 가 남는다. WHERE 는 그룹을 만들기 전에 행을 거른다. ㉡ 은 키 180 이상인 행만 남겨 A 는 190 한 행이라 평균 190 이다. ㉢ 은 WHERE 로 남은 행이 A 1개, B 1개뿐이라 COUNT(*) >= 2 인 그룹이 없어 0행이다. 정답은 ②번이다. ① 은 평균 180 인 B 를 놓친 것, ③ 은 WHERE 로 거른 뒤에도 평균이 그대로라고 본 것, ④ 는 WHERE 전의 행 수로 COUNT 한 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "사원",
        "headers": [
          "부서",
          "키"
        ],
        "rows": [
          [
            "A",
            "170"
          ],
          [
            "A",
            "190"
          ],
          [
            "B",
            "185"
          ],
          [
            "B",
            "175"
          ],
          [
            "C",
            "160"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT 부서 FROM 사원\nGROUP  BY 부서\nHAVING AVG(키) >= 180;\n-- ㉡\nSELECT 부서, AVG(키) FROM 사원\nWHERE  키 >= 180\nGROUP  BY 부서;\n-- ㉢\nSELECT 부서 FROM 사원\nWHERE  키 >= 180\nGROUP  BY 부서\nHAVING COUNT(*) >= 2;"
      }
    ]
  },
  {
    "id": 10726,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 27,
    "title": "EMP 의 (부서, 급여) 가 (A, 300), (A, 200), (B, 200), (B, 100) 일 때, 아래 SQL ㉠~㉣ 의 결과로 옳은 것은? (행 수 또는 오류)",
    "options": [
      "2, 3, 3, 2",
      "오류, 2, 3, 2",
      "오류, 3, 2, 2",
      "오류, 3, 3, 2"
    ],
    "correctIndex": 3,
    "explanation": "서브쿼리는 부서마다 최고 급여 300, 200 을 돌려준다. ㉠ 은 = 뒤에 여러 행이 와서 오류다. ㉡ 의 = ANY 와 ㉢ 의 IN 은 급여가 300 이나 200 인 행을 모두 고르는데, 부서를 따지지 않아 A 부서의 200 까지 걸려 3행이다. ㉣ 은 (부서, 급여) 쌍으로 비교하므로 A 의 300, B 의 200 만 정확히 골라 2행이다. 부서별 최고 급여자를 구하려면 ㉣ 처럼 다중 칼럼 서브쿼리를 써야 한다. 정답은 ④번이다. ① 은 = 도 여러 행을 받는다고 본 것, ② 와 ③ 은 = ANY 와 IN 중 하나가 부서를 구별한다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT 이름 FROM EMP WHERE 급여 =\n (SELECT MAX(급여) FROM EMP\n  GROUP BY 부서);\n-- ㉡\nSELECT 이름 FROM EMP WHERE 급여 = ANY\n (SELECT MAX(급여) FROM EMP\n  GROUP BY 부서);\n-- ㉢\nSELECT 이름 FROM EMP WHERE 급여 IN\n (SELECT MAX(급여) FROM EMP\n  GROUP BY 부서);\n-- ㉣\nSELECT 이름 FROM EMP\nWHERE (부서, 급여) IN\n (SELECT 부서, MAX(급여) FROM EMP\n  GROUP BY 부서);"
      }
    ]
  },
  {
    "id": 10727,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 28,
    "title": "아래 ERD 와 데이터에서 SQL ㉠, ㉡, ㉢ 의 결과(COUNT(*))를 차례대로 나열한 것은?",
    "options": [
      "3, 4, 4",
      "4, 4, 5",
      "3, 4, 5",
      "3, 3, 5"
    ],
    "correctIndex": 2,
    "explanation": "ERD 의 지점 쪽 |o 는 지점이 없는 고객이 있을 수 있다는 뜻이고, 고객 쪽 o{ 는 고객이 없는 지점이 있을 수 있다는 뜻이다. 데이터에서도 고객 3 은 지점코드가 NULL 이고, 지점 S3 에는 고객이 없다. ㉠ 은 양쪽이 모두 맞는 행만 남겨 고객 1, 2, 4 의 3행이다. ㉡ 은 고객을 모두 남기므로 고객 3 이 지점 칼럼 NULL 로 더해져 4행이다. ㉢ 은 양쪽을 모두 남겨 ㉡ 의 4행에 S3 한 행이 더해져 5행이다. 정답은 ③번이다. ① 은 FULL OUTER JOIN 이 고객 쪽만 남긴다고 본 것이고, ② 는 NULL 끼리도 조인된다고 본 것이다. ④ 는 LEFT JOIN 에서 고객 3 을 뺀 것이다. 전체 고객을 빠짐없이 보려면 일반 조인이 아니라 고객 쪽을 남기는 OUTER JOIN 을 써야 한다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "지점-고객 ERD",
        "mermaid": "erDiagram\n    지점 |o..o{ 고객 : \"소속\"\n    지점 {\n        string 지점코드 PK\n    }\n    고객 {\n        int 고객번호 PK\n        string 지점코드 FK\n    }"
      },
      {
        "type": "text",
        "content": "지점: S1, S2, S3\n고객: (1, S1), (2, S1), (3, NULL), (4, S2)"
      },
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT COUNT(*) FROM 고객 C\nJOIN 지점 J\n  ON C.지점코드 = J.지점코드;\n-- ㉡\nSELECT COUNT(*) FROM 고객 C\nLEFT JOIN 지점 J\n  ON C.지점코드 = J.지점코드;\n-- ㉢\nSELECT COUNT(*) FROM 고객 C\nFULL OUTER JOIN 지점 J\n  ON C.지점코드 = J.지점코드;"
      }
    ]
  },
  {
    "id": 10728,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 29,
    "title": "아래 두 SQL 중 오라클에서 오류가 발생하지 않는 것은?",
    "options": [
      "(가) 만 오류가 발생하지 않는다.",
      "(나) 만 오류가 발생하지 않는다.",
      "두 SQL 모두 오류가 발생하지 않는다.",
      "두 SQL 모두 오류가 발생한다."
    ],
    "correctIndex": 1,
    "explanation": "(가) 는 GROUP BY 에 없는 C 를 ORDER BY 에 써서 Oracle 에서 오류가 난다. 그룹으로 묶은 뒤에는 한 그룹에 C 값이 여러 개라 어느 값으로 정렬할지 정할 수 없기 때문이다. (나) 의 HAVING COUNT(C) 는 C 를 집계 함수 안에 썼으므로 허용된다. 오류가 나지 않는 것은 (나) 뿐이라 정답은 ②다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T 테이블",
        "headers": [
          "A",
          "X",
          "C"
        ],
        "rows": [
          [
            "a",
            "10",
            "p"
          ],
          [
            "a",
            "20",
            "q"
          ],
          [
            "b",
            "30",
            "r"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- (가)\nSELECT A, SUM(X) FROM T GROUP BY A ORDER BY C;\n\n-- (나)\nSELECT A, SUM(X) FROM T GROUP BY A HAVING COUNT(C) > 1;"
      }
    ]
  },
  {
    "id": 10729,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 30,
    "title": "오라클과 SQL Server에서 아래 DML·DDL이 하나의 트랜잭션으로 순차 수행된 후 (SQL Server 는 BEGIN TRANSACTION 으로 명시적 트랜잭션을 시작한 상태) ROLLBACK의 효과로 적절하지 않은 것은?",
    "options": [
      "오라클에서는 CREATE 시 UPDATE가 자동 커밋되어 UPDATE 결과는 유지된다.",
      "오라클에서는 CREATE로 생성된 테이블 TAB_NEW는 유지된다.",
      "SQL Server에서는 UPDATE와 CREATE 모두 롤백되어 TAB_NEW가 생성되지 않는다.",
      "오라클에서는 ROLLBACK이 실행되면 테이블 TAB_NEW도 함께 삭제된다."
    ],
    "correctIndex": 3,
    "explanation": "오라클의 DDL 은 실행 전후로 자동 커밋을 동반하므로, CREATE 시점에 앞선 UPDATE 까지 커밋되고 ROLLBACK 으로 취소되지 않는다(①②는 옳다). 따라서 ROLLBACK 으로 TAB_NEW 가 삭제된다는 ④ 가 적절하지 않다. SQL Server 는 명시적 트랜잭션 안에서는 DDL 도 트랜잭션 범위에 포함되어 UPDATE 와 CREATE 가 함께 롤백된다(③). 단, SQL Server 의 기본값인 자동 커밋 모드에서는 각 문장이 바로 커밋되므로 이 전제가 필요하다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "UPDATE T1 SET COL2 = 200;\nCREATE TABLE TAB_NEW ( C1 INT );\nROLLBACK;"
      }
    ]
  },
  {
    "id": 10730,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 31,
    "title": "빈 테이블 T(C) 에 아래 SQL 을 순서대로 실행했을 때 마지막 SELECT 의 결과로 옳은 것은?",
    "options": [
      "1",
      "1, 2, 3",
      "1, 2",
      "오류가 발생한다"
    ],
    "correctIndex": 2,
    "explanation": "같은 이름으로 저장점을 다시 만들면 오류가 아니라 저장점이 새 위치로 옮겨진다. 그래서 ROLLBACK TO A 는 두 번째 SAVEPOINT A(2 를 넣은 뒤) 이후만 되돌려 3 만 취소되고, COMMIT 하면 1, 2 가 남는다. 정답은 ③번이다. ① 은 처음 만든 A 로 돌아간다고 본 것, ② 는 ROLLBACK TO 가 아무것도 되돌리지 않는다고 본 것, ④ 는 같은 이름의 저장점을 만들 수 없다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "INSERT INTO T VALUES (1);\nSAVEPOINT A;\nINSERT INTO T VALUES (2);\nSAVEPOINT A;\nINSERT INTO T VALUES (3);\nROLLBACK TO A;\nCOMMIT;\nSELECT C FROM T ORDER BY C;"
      }
    ]
  },
  {
    "id": 10731,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 32,
    "title": "아래 세 테이블에 대한 SQL 의 결과로 옳은 것은?",
    "options": [
      "3",
      "5",
      "6",
      "15"
    ],
    "correctIndex": 2,
    "explanation": "CROSS JOIN 은 조건 없이 모든 조합을 만들어 사원 5행 × 부서 3행 = 15행이 된다. 이어지는 LEFT OUTER JOIN 은 근무지가 없는 30번 부서 행도 지우지 않으므로 여전히 15행이다. WHERE 는 사원의 부서ID 가 부서와 같거나, 사원의 부서ID 가 NULL 인 행을 남긴다. E1·E2 는 10번, E3 는 20번 부서와 한 행씩 맞아 3행이고, 부서ID 가 NULL 인 E4 는 IS NULL 이 참이라 세 부서와의 조합 3행이 모두 남는다. E5 의 40번 부서는 부서 테이블에 없어 남지 않는다. 결과는 3 + 3 = 6 이다(③). ① 3 은 E4 의 행을 빠뜨린 값, ② 5 는 LEFT OUTER JOIN 을 INNER JOIN 처럼 보고 근무지가 없는 30번 부서와 E4 의 조합을 지운 값, ④ 15 는 WHERE 를 적용하기 전의 CROSS JOIN 행 수다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "사원",
        "headers": [
          "사원ID",
          "부서ID"
        ],
        "rows": [
          [
            "E1",
            "10"
          ],
          [
            "E2",
            "10"
          ],
          [
            "E3",
            "20"
          ],
          [
            "E4",
            "NULL"
          ],
          [
            "E5",
            "40"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "부서",
        "headers": [
          "부서ID",
          "근무지ID"
        ],
        "rows": [
          [
            "10",
            "L1"
          ],
          [
            "20",
            "L2"
          ],
          [
            "30",
            "NULL"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "근무지",
        "headers": [
          "근무지ID",
          "근무지명"
        ],
        "rows": [
          [
            "L1",
            "서울"
          ],
          [
            "L2",
            "부산"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT COUNT(*)\nFROM   사원 E\n       CROSS JOIN 부서 D\n       LEFT OUTER JOIN 근무지 L\n         ON D.근무지ID = L.근무지ID\nWHERE  E.부서ID = D.부서ID\n   OR  E.부서ID IS NULL;"
      }
    ]
  },
  {
    "id": 10732,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 33,
    "title": "A 가 소유한 T 테이블에 대해 아래 명령을 순서대로 실행했다. 마지막에 T 를 조회(SELECT)할 수 있는 사용자를 모두 고른 것은? (Oracle 기준)",
    "options": [
      "C, D",
      "D",
      "B, C, D",
      "아무도 없음"
    ],
    "correctIndex": 1,
    "explanation": "객체 권한을 WITH GRANT OPTION 으로 받은 사용자가 회수되면, 그 사용자가 다른 사람에게 준 권한도 줄줄이 함께 회수된다. ⑤ 로 B 가 회수되면 B 가 준 C 의 권한이 사라지고, C 가 준 D 의 권한(③)도 사라진다. 하지만 D 는 ④ 에서 A 에게 직접 받은 권한이 따로 있어서 여전히 조회할 수 있다. 정답은 ②번이다. ① 은 연쇄 회수를 놓친 것, ③ 은 REVOKE 가 아무 영향이 없다고 본 것, ④ 는 D 가 A 에게 직접 받은 권한까지 지워진다고 본 것이다. 참고로 시스템 권한을 WITH ADMIN OPTION 으로 준 경우에는 이런 연쇄 회수가 일어나지 않는다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ① A 가 실행\nGRANT SELECT ON T TO B\n  WITH GRANT OPTION;\n-- ② B 가 실행\nGRANT SELECT ON A.T TO C\n  WITH GRANT OPTION;\n-- ③ C 가 실행\nGRANT SELECT ON A.T TO D;\n-- ④ A 가 실행\nGRANT SELECT ON T TO D;\n-- ⑤ A 가 실행\nREVOKE SELECT ON T FROM B;"
      }
    ]
  },
  {
    "id": 10733,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 34,
    "title": "아래 SQL의 결과에 대한 설명으로 옳은 것은?",
    "options": [
      "운전자별 운행 횟수를 모두 알 수 있다.",
      "전체 운전자의 총 운행 횟수만 반환한다.",
      "운전자 목록만 반환하고 건수는 반환하지 않는다.",
      "GROUP BY 컬럼과 집계 컬럼이 함께 올 수 없으므로 오류가 발생한다."
    ],
    "correctIndex": 0,
    "explanation": "GROUP BY 운전자로 같은 운전자끼리 한 그룹으로 묶고, COUNT(운행번호)로 그룹별 운행 건수를 센다. 결과적으로 운전자 한 명당 한 행씩 운행횟수가 나오므로 운전자별 운행 횟수를 모두 확인할 수 있다. 정답은 ①번이다. ② 전체 총 운행 횟수만 보려면 GROUP BY 를 빼야 하고, ③ COUNT(운행번호) 가 있으므로 건수도 나오며, ④ GROUP BY 컬럼과 집계 함수는 함께 SELECT 할 수 있다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "DRIVING_LOG 테이블",
        "headers": [
          "운행번호",
          "운전자",
          "거리"
        ],
        "rows": [
          [
            "D001",
            "홍길동",
            "120"
          ],
          [
            "D002",
            "홍길동",
            "80"
          ],
          [
            "D003",
            "이순신",
            "200"
          ],
          [
            "D004",
            "강감찬",
            "150"
          ],
          [
            "D005",
            "강감찬",
            "90"
          ],
          [
            "D006",
            "강감찬",
            "70"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT 운전자, COUNT(운행번호) AS 운행횟수\nFROM   DRIVING_LOG\nGROUP BY 운전자;"
      }
    ]
  },
  {
    "id": 10734,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 35,
    "title": "아래 SQL의 의미로 가장 적절한 것은?",
    "options": [
      "지역이 서울이면서 동시에 대전이면서 부산인 행을 조회한다.",
      "지역이 서울이거나 대전이거나 부산인 행을 조회한다.",
      "지역이 서울·대전·부산이 아닌 행을 조회한다.",
      "지역이 NULL인 행도 포함하여 조회한다."
    ],
    "correctIndex": 1,
    "explanation": "IN 은 여러 값 중 하나라도 일치하면 참이 되는 연산자로 OR 조건을 묶은 축약형이다. 따라서 지역이 서울·대전·부산 중 하나인 행이 조회된다. ① 은 AND 로 묶은 해석이라 어떤 행도 만족할 수 없고, ④ NULL 은 IN 비교에서 참이 되지 않아 제외된다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "CUSTOMER 테이블",
        "headers": [
          "고객ID",
          "이름",
          "지역"
        ],
        "rows": [
          [
            "C01",
            "홍길동",
            "서울"
          ],
          [
            "C02",
            "이순신",
            "대전"
          ],
          [
            "C03",
            "강감찬",
            "부산"
          ],
          [
            "C04",
            "박지성",
            "광주"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT *\nFROM   CUSTOMER\nWHERE  지역 IN ('서울', '대전', '부산');"
      }
    ]
  },
  {
    "id": 10735,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 36,
    "title": "아래 SQL의 결과로 옳은 것은? (오라클에서 NULL은 정렬 시 가장 큰 값으로 간주된다.)",
    "options": [
      "(A,1,100), (A,1,NULL), (A,2,50)",
      "(A,1,NULL), (A,1,100), (A,2,50)",
      "(A,2,50), (A,1,100), (A,1,NULL)",
      "(A,1,NULL), (A,2,50), (A,1,100)"
    ],
    "correctIndex": 1,
    "explanation": "COL1, COL2는 오름차순이므로 1이 먼저 배치되고, 이후 COL3는 DESC이므로 오라클 기준 NULL이 가장 먼저 정렬된다. 정답은 ②번이다. ① 은 DESC 에서 NULL 을 맨 뒤로 보냈고, ③ 은 COL2 까지 내림차순으로 본 순서다. COL2 는 정렬 방향이 없어 기본값 ASC 이므로 1 이 먼저 온다.",
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
            "1",
            "100"
          ],
          [
            "A",
            "1",
            "NULL"
          ],
          [
            "A",
            "2",
            "50"
          ]
        ],
        "caption": "T 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT COL1, COL2, COL3\nFROM   T\nORDER BY COL1, COL2, COL3 DESC;"
      }
    ]
  },
  {
    "id": 10736,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 37,
    "title": "아래 SQL 의 결과(A, B, C)로 옳은 것은? (Oracle 기준)",
    "options": [
      "EXAM, 10, 12",
      "_EXA, 10, 12",
      "EXAM, 5, 12",
      "EXAM, 10, 14"
    ],
    "correctIndex": 0,
    "explanation": "S 는 'SQLD_EXAM_2026' 이고 첫 '_' 는 5번째, 두 번째 '_' 는 10번째 글자다. A 는 INSTR 결과 5 에 1 을 더한 6번째부터 4글자를 잘라 'EXAM' 이다. B 의 INSTR(S, '_', 1, 2) 는 1번째 글자부터 찾은 두 번째 '_' 의 위치라 10 이다. C 는 세 번째 인자를 생략한 REPLACE 가 '_' 를 지워 'SQLDEXAM2026' 이 되므로 길이가 12 다. 정답은 ①번이다. ② 는 +1 을 빼먹은 것, ③ 은 두 번째 '_' 의 위치를 첫 '_' 다음부터 센 것, ④ 는 REPLACE 가 아무것도 바꾸지 않는다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT SUBSTR(S, INSTR(S, '_') + 1, 4)\n         AS A,\n       INSTR(S, '_', 1, 2)     AS B,\n       LENGTH(REPLACE(S, '_')) AS C\nFROM  (SELECT 'SQLD_EXAM_2026' AS S\n       FROM   DUAL);"
      }
    ]
  },
  {
    "id": 10737,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 38,
    "title": "트랜잭션의 특성 중 다음 설명에 해당하는 것은?",
    "options": [
      "원자성(Atomicity)",
      "일관성(Consistency)",
      "고립성(Isolation)",
      "지속성(Durability)"
    ],
    "correctIndex": 0,
    "explanation": "원자성(Atomicity)은 트랜잭션의 모든 연산이 모두 성공해 반영되거나, 하나라도 실패하면 전혀 수행되지 않은 상태로 남아야 한다는 ALL OR NOTHING 속성이다. 일관성·고립성·지속성과 함께 ACID를 구성한다. ② 일관성은 실행 전후에 DB 가 일관된 상태를 유지하는 성질, ③ 고립성은 다른 트랜잭션의 영향을 받지 않는 성질, ④ 지속성은 COMMIT 된 결과가 영구히 남는 성질이다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "트랜잭션에서 정의된 연산들은 모두 성공적으로 수행되거나, 전혀 수행되지 않은 상태로 남아야 한다. (ALL OR NOTHING)"
      }
    ]
  },
  {
    "id": 10738,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 39,
    "title": "아래 두 테이블에 대해 NOT IN 서브쿼리를 사용한 SQL 의 결과 행 수로 옳은 것은? (T2.COL2 에 NULL 포함)",
    "options": [
      "0건",
      "2건",
      "3건",
      "오류 발생"
    ],
    "correctIndex": 1,
    "explanation": "T2 에 NULL 이 있다고 바로 0건을 고르면 틀린다. 서브쿼리 안의 WHERE COL2 > 1 이 먼저 적용되는데, NULL > 1 은 UNKNOWN 이라 NULL 행은 서브쿼리 결과에서 빠진다. 서브쿼리 결과는 {2, 3, 5} 이고, COL1 NOT IN (2, 3, 5) 를 만족하는 행은 1 과 4 뿐이다. T1 의 NULL 행은 NULL <> 2 가 UNKNOWN 이라 남지 않는다. 그래서 2건이다(②). ① 0건은 서브쿼리 결과에 NULL 이 남아 있을 때(WHERE COL2 > 1 이 없을 때)의 결과이고, ③ 3건은 T1 의 NULL 행까지 센 값이며, ④ NOT IN 에 NULL 이 섞여도 오류는 나지 않는다.",
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
            "NULL"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "T2 테이블",
        "headers": [
          "COL2"
        ],
        "rows": [
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
            "5"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT *\nFROM   T1\nWHERE  COL1 NOT IN (SELECT COL2\n                    FROM   T2\n                    WHERE  COL2 > 1);"
      }
    ]
  },
  {
    "id": 10739,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 40,
    "title": "아래 데이터와 CASE 문의 결과로 옳은 것은?",
    "options": [
      "A, A, B, S",
      "B, B, A, S",
      "B, B, B, S",
      "S, A, B, B"
    ],
    "correctIndex": 1,
    "explanation": "CASE 식은 위에서 아래로 평가되며, 첫 번째로 참이 되는 WHEN의 결과가 반환된다. 1행(50,150)과 2행(100,250)은 COL1<=100을 만족해 'B', 3행(200,150)은 COL1>100이지만 COL2<=200이어서 'A', 4행(300,400)은 어느 조건도 만족하지 않아 ELSE의 'S'가 된다. 정답은 ②번이다. ① 은 1·2행을 'A' 로 봤지만 첫 WHEN(COL1 <= 100)이 먼저 참이라 'B' 이고, ③ 은 3행을 'B' 로 봤지만 COL1 = 200 은 첫 조건이 거짓이며, ④ 는 순서를 거꾸로 적었다.",
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
            "50",
            "150"
          ],
          [
            "100",
            "250"
          ],
          [
            "200",
            "150"
          ],
          [
            "300",
            "400"
          ]
        ],
        "caption": "T 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT CASE WHEN COL1 <= 100 THEN 'B'\n            WHEN COL2 <= 200 THEN 'A'\n            ELSE 'S'\n       END\nFROM   T;"
      }
    ]
  },
  {
    "id": 10740,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 41,
    "title": "아래 사원 테이블에 대한 셀프 조인 ㉠, ㉡ 의 결과 행 수로 옳은 것은?",
    "options": [
      "6, 6",
      "3, 3",
      "3, 6",
      "4, 8"
    ],
    "correctIndex": 2,
    "explanation": "같은 테이블을 A, B 두 이름으로 불러 같은 부서끼리 짝을 짓는 셀프 조인이다. 10번 부서는 김·이·박 3명, 20번 부서는 최 1명이다. ㉡ 의 <> 는 자기 자신만 빼고 순서가 다른 짝을 모두 남겨 3 × 2 = 6행이다(김-이 와 이-김 이 따로). ㉠ 의 < 는 두 순서 중 하나만 남겨 6 / 2 = 3행이다. 최는 같은 부서에 다른 사람이 없어 어느 쪽에도 나오지 않는다. 정답은 ③번이다. ① 은 < 도 양쪽 순서를 다 남긴다고 본 것, ② 는 <> 도 한 순서만 남긴다고 본 것, ④ 는 자기 자신과의 짝까지 센 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "사원",
        "headers": [
          "이름",
          "부서"
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
            "10"
          ],
          [
            "최",
            "20"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT A.이름, B.이름\nFROM   사원 A JOIN 사원 B\n       ON  A.부서 = B.부서\n       AND A.이름 < B.이름;\n-- ㉡\nSELECT A.이름, B.이름\nFROM   사원 A JOIN 사원 B\n       ON  A.부서 = B.부서\n       AND A.이름 <> B.이름;"
      }
    ]
  },
  {
    "id": 10741,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 42,
    "title": "아래 SQL 의 결과(A, B, C, D)로 옳은 것은? (Oracle 기준)",
    "options": [
      "10300, 10400, 10400, 10400",
      "10300, 10300, 10400, 10400",
      "10333, 10300, 10300, 10400",
      "10300, 10300, 10300, 10301"
    ],
    "correctIndex": 1,
    "explanation": "두 번째 인자가 -2 이면 백의 자리를 기준으로 한다. A 는 십의 자리 3 이 5 미만이라 내려 10300, B 의 TRUNC 는 반올림 없이 버려 10300 이다. C 는 십의 자리 5 에서 반올림해 올라가 10400 이다. D 는 103.01 을 CEIL 로 올려 104, 다시 100 을 곱해 10400 이다. 정답은 ②번이다. ① 은 TRUNC 를 반올림처럼 본 것, ③ 은 -2 를 소수점 둘째 자리로 보고 5 를 내림한 것, ④ 는 5 를 내리고 CEIL 을 소수 그대로 둔 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT ROUND(10333.3333, -2)   AS A,\n       TRUNC(10388, -2)        AS B,\n       ROUND(10350, -2)        AS C,\n       CEIL(10301 / 100) * 100 AS D\nFROM   DUAL;"
      }
    ]
  },
  {
    "id": 10742,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 43,
    "title": "아래 ERD 와 데이터에서 SQL 의 ㉠, ㉡, ㉢ 값을 차례대로 나열한 것은?",
    "options": [
      "350, 650, 1",
      "350, 650, 2",
      "300, 650, 1",
      "350, 350, 1"
    ],
    "correctIndex": 0,
    "explanation": "LEFT JOIN 결과는 3행이다. 사원 1 은 수당 50, 사원 2 는 수당 행이 없어 A 쪽 칼럼이 모두 NULL, 사원 3 은 수당 행은 있지만 금액이 NULL 이다. ㉠ COALESCE(A.금액, E.기본급) 은 금액이 NULL 이 아니면 금액을, NULL 이면 기본급을 돌려준다. 행마다 50, 200, 100 이 되어 합은 350 이다. 수당 행이 없어서 생긴 NULL 과 금액 자체가 NULL 인 경우를 구분하지 않는다. ㉡ 은 열마다 따로 합한다. SUM(A.금액) 은 NULL 을 빼고 50, SUM(E.기본급) 은 600 이라 650 이다. ㉢ COUNT(A.금액) 은 NULL 이 아닌 금액만 세어 1 이다. 정답은 ①번이다. ② 는 수당 행이 있는 사원 3 의 NULL 금액까지 센 것이고(COUNT(A.사번) 이면 2), ③ 은 사원 3 처럼 수당 행이 있으면 COALESCE 가 기본급으로 넘어가지 않는다고 본 것이다. ④ 는 ㉡ 을 SUM(A.금액 + E.기본급) 처럼 행마다 더한 것이다. 그러면 NULL 이 섞인 행이 빠져 사원 1 의 350 만 남는다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "사원·수당 ERD (수당은 0 또는 1건)",
        "mermaid": "erDiagram\n    사원 ||--o| 수당 : \"지급\"\n    사원 {\n        int 사번 PK\n        int 기본급\n    }\n    수당 {\n        int 사번 PK, FK\n        int 금액\n    }"
      },
      {
        "type": "text",
        "content": "사원(사번, 기본급): (1, 300), (2, 200), (3, 100)\n수당(사번, 금액): (1, 50), (3, NULL)"
      },
      {
        "type": "sql",
        "code": "SELECT\n  SUM(COALESCE(A.금액, E.기본급))\n    AS ㉠,\n  SUM(A.금액) + SUM(E.기본급)\n    AS ㉡,\n  COUNT(A.금액) AS ㉢\nFROM 사원 E LEFT JOIN 수당 A\n  ON A.사번 = E.사번;"
      }
    ]
  },
  {
    "id": 10743,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 44,
    "title": "아래 SQL의 결과로 옳은 것은? (Oracle 기준, 출력 순서대로)",
    "options": [
      "(E,160), (A,150)",
      "(D,NULL), (E,160)",
      "(C,130), (B,140)",
      "(A,150), (B,140)"
    ],
    "correctIndex": 1,
    "explanation": "Oracle 은 NULL 을 가장 큰 값으로 보므로 내림차순(DESC)에서 NULL 이 맨 앞에 온다. 급여 내림차순은 D(NULL), E(160), A(150), B(140), C(130) 이고 RN 은 이 순서로 1, 2, 3 … 이다. RN <= 2 는 D 와 E 다(②). ① 은 NULL 이 맨 뒤에 온다고 본 결과(NULLS LAST 또는 SQL Server 방식)로, 급여가 가장 높은 두 명을 뽑으려면 ORDER BY 급여 DESC NULLS LAST 처럼 써야 한다. ③ 은 오름차순으로 번호를 매긴 결과, ④ 는 정렬 없이 표의 위에서부터 두 행을 고른 결과다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP 테이블",
        "headers": [
          "이름",
          "급여"
        ],
        "rows": [
          [
            "A",
            "150"
          ],
          [
            "B",
            "140"
          ],
          [
            "C",
            "130"
          ],
          [
            "D",
            "NULL"
          ],
          [
            "E",
            "160"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT 이름, 급여\nFROM   ( SELECT 이름, 급여,\n                ROW_NUMBER() OVER (ORDER BY 급여 DESC) AS RN\n         FROM   EMP )\nWHERE  RN <= 2\nORDER BY RN;"
      }
    ]
  },
  {
    "id": 10744,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 45,
    "title": "아래 T 테이블에 대한 SQL 의 결과(COUNT(COL1), COUNT(*), AVG(COL2))로 옳은 것은?",
    "options": [
      "2, 4, 25.75",
      "4, 4, 25.75",
      "3, 5, 25.75",
      "4, 6, 24.6"
    ],
    "correctIndex": 0,
    "explanation": "WHERE COL2 > 21 을 통과하는 행은 (10, 25), (NULL, 26), (30, 30), (NULL, 22) 네 개다. (40, 20) 은 거짓이고, (50, NULL) 은 NULL 과의 비교가 UNKNOWN 이라 빠진다. 남은 네 행에서 COUNT(*) 는 4, COUNT(COL1) 은 COL1 이 NULL 인 두 행을 빼고 2, AVG(COL2) 는 (25 + 26 + 30 + 22) / 4 = 25.75 다. 정답은 ①번이다. ② 는 COUNT(COL1) 도 NULL 을 센다고 본 값, ③ 은 COL2 가 NULL 인 (50, NULL) 도 WHERE 를 통과한다고 본 값(AVG 는 NULL 을 빼므로 그대로 25.75), ④ 는 WHERE 를 적용하지 않은 전체 결과다.",
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
            "10",
            "25"
          ],
          [
            "NULL",
            "26"
          ],
          [
            "30",
            "30"
          ],
          [
            "40",
            "20"
          ],
          [
            "50",
            "NULL"
          ],
          [
            "NULL",
            "22"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT COUNT(COL1), COUNT(*), AVG(COL2)\nFROM   T\nWHERE  COL2 > 21;"
      }
    ]
  },
  {
    "id": 10745,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 46,
    "title": "아래 상황 ㉠~㉢ 에 가장 알맞은 조인 방식을 순서대로 고른 것은?",
    "options": [
      "HASH, NESTED LOOP, SORT MERGE",
      "NESTED LOOP, SORT MERGE, HASH",
      "NESTED LOOP, HASH, SORT MERGE",
      "SORT MERGE, HASH, NESTED LOOP"
    ],
    "correctIndex": 2,
    "explanation": "NESTED LOOP 는 선행 테이블의 행마다 후행 테이블을 찾으므로, 선행 건수가 적고 후행 조인 키에 인덱스가 있을 때 빠르다(㉠). HASH 조인은 한쪽으로 해시 테이블을 만들어 맞춰 보므로 인덱스 없이 대량 데이터를 등가 조인할 때 알맞고, 등가 조인에서만 쓸 수 있다(㉡). SORT MERGE 는 두 테이블을 조인 키로 정렬한 뒤 맞춰 보므로 비등가 조인에도 쓸 수 있다(㉢). 정답은 ③번이다. ① 은 ㉠·㉡ 을 바꿔 본 것, ② 는 비등가 조인에 HASH 를 쓸 수 있다고 본 것, ④ 는 셋을 모두 엇갈리게 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "㉠ 선행 테이블에서 조건으로 걸러진 행이 10건이고, 1,000만 건인 후행 테이블의 조인 키에 인덱스가 있다.\n㉡ 두 테이블 모두 수백만 건이고 등가(=) 조인인데, 조인 키에 쓸 만한 인덱스가 없다.\n㉢ 조인 조건이 BETWEEN 같은 비등가 조인이고, 두 테이블을 조인 키로 정렬할 수 있다."
      }
    ]
  },
  {
    "id": 10746,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 47,
    "title": "통계 정보를 몇 달째 수집하지 않아, 옵티마이저는 실제 100만 건인 주문 테이블을 1,000건으로 알고 있다. 옵티마이저에 대한 설명으로 옳지 않은 것은?",
    "options": [
      "CBO 는 통계 정보로 각 실행 계획의 비용을 계산해 가장 낮은 것을 고른다.",
      "통계가 실제와 크게 다르면 CBO 가 비효율적인 계획을 고를 수 있으므로 통계를 다시 수집한다.",
      "RBO 는 정해진 규칙의 우선순위를 따르므로 테이블의 실제 데이터 양을 고려하지 않는다.",
      "CBO 는 실행 중 실제 행 수를 세어 계획을 바로잡으므로 통계가 오래돼도 늘 최적의 계획이 나온다."
    ],
    "correctIndex": 3,
    "explanation": "비용 기반 옵티마이저(CBO)는 테이블·인덱스·칼럼의 통계 정보로 비용을 추정해 계획을 고른다(①). 그래서 통계가 실제와 다르면 1,000건이라 믿고 대량 데이터에 맞지 않는 계획(예: 중첩 루프)을 고를 수 있고, 통계를 다시 수집해야 한다(②). 규칙 기반 옵티마이저(RBO)는 '인덱스가 있으면 쓴다' 같은 규칙 순위만 보고 데이터 양은 보지 않는다(③). CBO 가 최적이라는 것은 통계가 정확하다는 전제에서의 추정일 뿐, 오래된 통계로도 늘 최적의 계획이 나온다는 ④ 는 옳지 않다. 정답은 ④번이다.",
    "_source": "authored"
  },
  {
    "id": 10747,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 48,
    "title": "아래 T 테이블에 대한 SQL 의 결과(GRP, D)로 옳은 것은?",
    "options": [
      "(A, 0), (B, 0)",
      "(A, NULL), (B, NULL)",
      "(A, 4), (B, 3)",
      "(A, 2), (B, 3)"
    ],
    "correctIndex": 3,
    "explanation": "AVG(COL1) 은 NULL 을 빼고 평균을 내고, AVG(NVL(COL1, 0)) 은 NULL 을 0 으로 바꿔 분모에 넣는다. A 그룹은 AVG(COL1) = (4 + 8) / 2 = 6, AVG(NVL(COL1, 0)) = (4 + 0 + 8) / 3 = 4 라 D = 2 다. B 그룹은 AVG(COL1) = (6 + 6) / 2 = 6, AVG(NVL(COL1, 0)) = (0 + 0 + 6 + 6) / 4 = 3 이라 D = 3 이다. 정답은 ④번이다. NULL 이 많은 그룹일수록 두 평균의 차이가 커진다. ① 은 AVG 도 NULL 을 0 으로 센다고 본 값, ② 는 그룹에 NULL 이 하나라도 있으면 AVG 가 NULL 이라고 본 값, ③ 은 뺄셈을 놓치고 AVG(NVL(COL1, 0)) 만 본 값이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T 테이블",
        "headers": [
          "GRP",
          "COL1"
        ],
        "rows": [
          [
            "A",
            "4"
          ],
          [
            "A",
            "NULL"
          ],
          [
            "A",
            "8"
          ],
          [
            "B",
            "NULL"
          ],
          [
            "B",
            "NULL"
          ],
          [
            "B",
            "6"
          ],
          [
            "B",
            "6"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT GRP,\n       AVG(COL1) - AVG(NVL(COL1, 0)) AS D\nFROM   T\nGROUP BY GRP\nORDER BY GRP;"
      }
    ]
  },
  {
    "id": 10748,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 49,
    "title": "아래 ERD 와 데이터에서 SQL ㉠, ㉡, ㉢ 의 결과(COUNT(*))를 차례대로 나열한 것은?",
    "options": [
      "4, 3, 4",
      "4, 4, 4",
      "4, 3, 5",
      "3, 3, 4"
    ],
    "correctIndex": 0,
    "explanation": "㉠ 은 오른쪽 부서를 모두 남기는 RIGHT OUTER JOIN 이다. D1 에 사원 2명, D2 에 1명이 붙고, 사원이 없는 D3 도 사원 칼럼이 NULL 인 채 한 행으로 남아 4행이다. ㉡ 은 앞의 LEFT JOIN 결과(4행)에 참여를 일반 조인한다. D3 행은 E.사번 이 NULL 이라 P.사번 = E.사번 이 참이 될 수 없고, 참여가 없는 사원 2 의 행도 빠진다. 남는 것은 사원 1 의 두 행과 사원 3 의 한 행으로 3행이다. 뒤에 붙인 일반 조인이 앞의 OUTER JOIN 으로 살린 행을 다시 지운 것이다. ㉢ 은 사원과 참여를 먼저 조인한 결과(사원 1 두 행, 사원 3 한 행)를 인라인 뷰로 만든 뒤 부서에 LEFT JOIN 했다. D1 2행, D2 1행, D3 은 NULL 로 1행이 되어 4행이다. 정답은 ①번이다. ② 는 ㉡ 에서도 D3 이 남는다고 본 것이고, ③ 은 ㉢ 에서 참여가 없는 사원 2 까지 남는다고 본 것이다. ④ 는 ㉠ 을 일반 조인처럼 센 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "부서·사원·참여 ERD",
        "mermaid": "erDiagram\n    부서 ||..o{ 사원 : \"소속\"\n    사원 ||--o{ 참여 : \"투입\"\n    부서 {\n        string 부서코드 PK\n    }\n    사원 {\n        int 사번 PK\n        string 부서코드 FK\n    }\n    참여 {\n        int 사번 PK, FK\n        string 과제 PK\n    }"
      },
      {
        "type": "text",
        "content": "부서: D1, D2, D3\n사원: (1, D1), (2, D1), (3, D2)\n참여: (1, P1), (1, P2), (3, P1)"
      },
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT COUNT(*)\nFROM 사원 E RIGHT JOIN 부서 D\n  ON E.부서코드 = D.부서코드;\n-- ㉡\nSELECT COUNT(*)\nFROM 부서 D LEFT JOIN 사원 E\n  ON E.부서코드 = D.부서코드\nJOIN 참여 P ON P.사번 = E.사번;\n-- ㉢\nSELECT COUNT(*)\nFROM 부서 D LEFT JOIN\n  (SELECT E.부서코드\n     FROM 사원 E JOIN 참여 P\n       ON P.사번 = E.사번) X\n  ON X.부서코드 = D.부서코드;"
      }
    ]
  },
  {
    "id": 10749,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 50,
    "title": "아래 결과를 얻기 위한 SQL의 GROUP BY 절로 올바른 것은?",
    "options": [
      "ROLLUP ( GRADE, JOB )",
      "GROUPING SETS ( GRADE, (GRADE, JOB) )",
      "CUBE ( GRADE, JOB )",
      "GRADE, JOB"
    ],
    "correctIndex": 1,
    "explanation": "결과 표는 (GRADE, JOB) 세부 4행에 GRADE 단위 소계 2행만 더해진 6행이고 전체 총계 행이 없다. GROUPING SETS 는 필요한 집계 조합만 골라 지정하므로 (GRADE) 와 (GRADE, JOB) 두 조합이 정확히 이 결과를 만든다. ① ROLLUP 은 전체 총계까지 붙어 7행이 되고, ③ CUBE 는 JOB 단위 소계까지 추가되며, ④ 일반 GROUP BY 는 소계 자체가 없어 4행에 그친다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP 테이블",
        "headers": [
          "GRADE",
          "JOB",
          "ENAME"
        ],
        "rows": [
          [
            "A",
            "MANAGER",
            "홍길동"
          ],
          [
            "A",
            "CLERK",
            "김철수"
          ],
          [
            "B",
            "MANAGER",
            "이순신"
          ],
          [
            "B",
            "CLERK",
            "박지성"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT GRADE, JOB, COUNT(*)\nFROM   EMP\nGROUP BY (  ㄱ  );"
      },
      {
        "type": "table",
        "caption": "기대 결과",
        "headers": [
          "GRADE",
          "JOB",
          "COUNT(*)"
        ],
        "rows": [
          [
            "A",
            "MANAGER",
            "1"
          ],
          [
            "A",
            "CLERK",
            "1"
          ],
          [
            "B",
            "MANAGER",
            "1"
          ],
          [
            "B",
            "CLERK",
            "1"
          ],
          [
            "A",
            "(NULL)",
            "2"
          ],
          [
            "B",
            "(NULL)",
            "2"
          ]
        ]
      }
    ]
  }
];
