// Auto-generated from PDF + blog + scripts/authored/round-56.json
// 제56회 — 2025년 3월 · 50문항
// ⚠ 직접 편집 금지. 출처별 데이터를 고친 뒤 'node scripts/build-quiz-bank.mjs' 재실행.
import type { QuizQuestion } from '../quizBank';

export const ROUND_56: QuizQuestion[] = [
  {
    "id": 10200,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "1과목",
    "number": 1,
    "title": "데이터베이스 스키마의 종류가 아닌 것은?",
    "options": [
      "응용 스키마",
      "외부 스키마",
      "개념 스키마",
      "내부 스키마"
    ],
    "correctIndex": 0,
    "explanation": "ANSI/SPARC 3단계 구조의 스키마는 외부 스키마(②, 사용자 관점), 개념 스키마(③, 조직 전체 관점), 내부 스키마(④, 물리적 저장 구조) 세 가지다. 응용 스키마는 이 분류에 없다(①).",
    "_source": "authored"
  },
  {
    "id": 10201,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "1과목",
    "number": 2,
    "title": "아래 업무 규칙 ㉠~㉢ 을 IE 표기법 ERD 에 반영할 때 옳지 않은 것은?",
    "options": [
      "㉠ 은 회원:주문 1:M 관계다.",
      "㉡ 은 주문상세 쪽 끝을 세로줄 + 까마귀발(1개 이상)로 그린다.",
      "㉢ 은 주문에서 본 쿠폰 쪽 끝을 동그라미 + 세로줄(0 또는 1)로 그린다.",
      "㉠ 에서 가입만 한 회원이 있으므로 회원 쪽 끝에 동그라미를 붙인다."
    ],
    "correctIndex": 3,
    "explanation": "업무 규칙은 관계차수와 선택 표시로 ERD 에 그대로 드러나야 한다. 동그라미는 '그쪽 엔터티가 없어도 된다' 는 뜻이라, 상대편에서 본 참여 여부를 나타낸다. 주문하지 않은 회원이 있다는 것은 회원 한 명에게 주문이 0건일 수 있다는 뜻이므로 동그라미는 주문 쪽 끝에 붙는다(회원 ||--o{ 주문). 회원 쪽에 붙이면 '회원 없는 주문' 이 된다. 정답은 ④번이다. ①·②·③ 은 규칙을 맞게 옮긴 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "㉠ 회원은 주문을 여러 번 할 수 있고, 가입만 하고 주문하지 않은 회원도 있다.\n㉡ 주문에는 상품이 1개 이상 담긴다(주문상세).\n㉢ 주문 하나에는 쿠폰을 최대 1장 쓸 수 있다."
      }
    ]
  },
  {
    "id": 10202,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "1과목",
    "number": 3,
    "title": "엔터티 분류 기준과 그 기준에 속하는 엔터티 종류를 짝지은 것 중 잘못된 것은?",
    "options": [
      "발생 시점 — 관계 엔터티",
      "발생 시점 — 행위 엔터티",
      "유형·무형 — 사건 엔터티",
      "유형·무형 — 개념 엔터티"
    ],
    "correctIndex": 0,
    "explanation": "엔터티는 유형·무형 기준으로 유형·개념·사건 엔터티, 발생 시점 기준으로 기본(키)·중심(메인)·행위 엔터티로 나눈다. 관계 엔터티는 M:N 관계를 풀 때 생기는 엔터티를 부르는 말로, 발생 시점 분류의 이름이 아니다(발생 시점으로 보면 대개 행위 엔터티에 해당한다). 그래서 ① 이 잘못 짝지어졌다. 정답은 ①번이다. ②·③·④ 는 모두 해당 기준의 분류다.",
    "_source": "authored"
  },
  {
    "id": 10203,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "1과목",
    "number": 4,
    "title": "아래 ERD 의 엔터티 분류에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "고객과 상품은 업무에 원래부터 존재하는 기본 엔터티이다.",
      "주문은 기본 엔터티로부터 발생하는 중심 엔터티이다.",
      "주문상품은 다른 엔터티로부터 발생하지 않는 기본 엔터티이다.",
      "주문상품은 주문과 상품의 M:N 관계를 해소하는 행위 엔터티이다."
    ],
    "correctIndex": 2,
    "explanation": "기본(키) 엔터티는 업무에 원래부터 존재하며 다른 엔터티로부터 발생하지 않는 엔터티로 고객·상품이 해당한다. 중심 엔터티는 기본 엔터티로부터 발생해 업무의 중심이 되는 엔터티로 주문이 해당한다. 행위 엔터티는 두 개 이상의 엔터티로부터 발생하는 엔터티로, 주문상품은 주문과 상품의 M:N 관계를 해소하는 교차 엔터티이자 행위 엔터티이다. 따라서 주문상품을 기본 엔터티라고 한 ③ 이 옳지 않다. ① 고객·상품은 기본, ② 주문은 중심, ④ 주문상품은 행위 엔터티라는 설명은 옳다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "고객·주문·상품·주문상품 ERD",
        "mermaid": "erDiagram\n    고객 ||--o{ 주문 : \"한다\"\n    주문 ||--o{ 주문상품 : \"포함\"\n    상품 ||--o{ 주문상품 : \"대상\""
      }
    ]
  },
  {
    "id": 10204,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "1과목",
    "number": 5,
    "title": "아래 [주문] 엔터티의 속성 중 파생 속성에 해당하는 것은?",
    "options": [
      "주문번호",
      "주문일자",
      "주문수량",
      "총주문금액"
    ],
    "correctIndex": 3,
    "explanation": "파생 속성은 다른 속성으로부터 계산되어 만들어지는 속성이다. 총주문금액은 단가 × 주문수량으로 도출되므로 파생 속성이고, ① 주문번호·② 주문일자·③ 주문수량은 업무에서 직접 입력·부여되는 기본 속성이다. 파생 속성은 정합성 관리 부담이 있어 가급적 최소화한다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "주문 엔터티",
        "headers": [
          "속성",
          "값"
        ],
        "rows": [
          [
            "주문번호",
            "O1001"
          ],
          [
            "주문일자",
            "2026-03-05"
          ],
          [
            "단가",
            "1,200"
          ],
          [
            "주문수량",
            "3"
          ],
          [
            "총주문금액",
            "3,600"
          ]
        ]
      }
    ]
  },
  {
    "id": 10205,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "1과목",
    "number": 6,
    "title": "아래 회원 속성 ㉠~㉣ 중 제1정규형을 만족하려면 반드시 별도 테이블로 떼어 내야 하는 것만 모두 고른 것은?",
    "options": [
      "㉠",
      "㉠, ㉡",
      "㉠, ㉡, ㉣",
      "㉡, ㉣"
    ],
    "correctIndex": 3,
    "explanation": "제1정규형은 한 칸에 값이 하나만 있어야 한다는 조건이다. 값이 여러 개일 수 있는 다중값속성(㉡ 연락처, ㉣ 관심분야)은 한 칸에 담을 수 없으니 회원번호와 짝지은 별도 테이블로 떼어 내야 한다. 주소처럼 여러 부분으로 나눌 수 있는 복합속성은 회원마다 값이 하나라 제1정규형을 어기지 않는다. 업무에 따라 시·구로 나눠 칼럼을 늘릴 수는 있어도 별도 테이블이 필요한 것은 아니다. 나이는 단순·단일값속성이다. 정답은 ④번이다. ①·②·③ 은 복합속성을 다중값속성처럼 떼어 내야 한다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "㉠ 주소: 시·구·상세주소로 나눌 수 있지만 회원마다 하나다.\n㉡ 연락처: 휴대폰·집 전화 등 회원마다 여러 개일 수 있다.\n㉢ 나이: 숫자 하나다.\n㉣ 관심분야: 회원마다 여러 개를 고를 수 있다."
      }
    ]
  },
  {
    "id": 10206,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "1과목",
    "number": 7,
    "title": "아래 ERD에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "ㄷ은 ㄱ과 ㄴ을 합한 것과 의미가 같다.",
      "의사가 없는 병원이 있을 수 있다.",
      "수술이 없는 의사가 있을 수 있다.",
      "의사가 집도하지 않는 수술이 있을 수 있다."
    ],
    "correctIndex": 0,
    "explanation": "병원·의사·수술 세 관계는 각각 독립적인 의미를 가진다. 의사 없이 진행된 수술도 병원에는 속하므로, 병원-수술 직접 관계(ㄷ)로 연결되는 집합과 병원-의사-수술 경로(ㄱ+ㄴ)로 연결되는 집합이 일치하지 않는다. 따라서 ①이 옳지 않다. ② 병원 측에서 의사는 0..N 이므로 참, ③ 의사 측에서 수술은 0..N 이므로 참, ④ 수술 측에서 의사는 선택 참여이므로 참이다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "병원·의사·수술 ERD — ㄱ(병원-의사), ㄴ(의사-수술), ㄷ(병원-수술)",
        "mermaid": "erDiagram\n    병원 ||--o{ 의사 : \"ㄱ\"\n    의사 |o--o{ 수술 : \"ㄴ\"\n    병원 ||--o{ 수술 : \"ㄷ\""
      }
    ]
  },
  {
    "id": 10207,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "1과목",
    "number": 8,
    "title": "업무에 의해 만들어진 식별자로 가장 적절한 것은?",
    "options": [
      "외부 식별자",
      "내부 식별자",
      "본질 식별자",
      "인조 식별자"
    ],
    "correctIndex": 2,
    "explanation": "업무에 의해 원래부터 만들어지는 식별자는 본질 식별자다(③). 인조 식별자(④)는 업무와 무관하게 편의상 인위적으로 만든 식별자이고, 외부 식별자(①)·내부 식별자(②)는 다른 엔터티와의 관계로 가져왔는지(FK) 엔터티 내부에서 정했는지에 따른 분류라 질문과 기준이 다르다.",
    "_source": "authored"
  },
  {
    "id": 10208,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "1과목",
    "number": 9,
    "title": "아래 주문 테이블(기본키: 주문번호)이 만족하는 가장 높은 정규형으로 옳은 것은?",
    "options": [
      "제1정규형",
      "제2정규형",
      "제3정규형",
      "보이스-코드 정규형"
    ],
    "correctIndex": 1,
    "explanation": "칸마다 값이 하나라 제1정규형이다. 기본키가 주문번호 하나라 '기본키 일부에만 종속' 되는 부분 함수 종속이 생길 수 없어, 모든 일반 속성이 기본키에 완전 함수 종속하는 제2정규형도 만족한다. 그러나 주문번호 → 고객번호 → 고객명 처럼 키가 아닌 고객번호를 거쳐 고객명이 정해지는 이행 종속이 있어 제3정규형은 만족하지 못한다. 정답은 ②번이다. ① 은 단일 기본키여도 부분 종속이 생긴다고 본 것, ③·④ 는 고객번호 → 고객명 을 놓친 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "주문",
        "headers": [
          "주문번호",
          "고객번호",
          "고객명",
          "주문일"
        ],
        "rows": [
          [
            "O1",
            "C1",
            "김",
            "11-01"
          ],
          [
            "O2",
            "C1",
            "김",
            "11-03"
          ],
          [
            "O3",
            "C2",
            "이",
            "11-03"
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
            "주문번호",
            "고객번호, 고객명, 주문일"
          ],
          [
            "고객번호",
            "고객명"
          ]
        ]
      }
    ]
  },
  {
    "id": 10209,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "1과목",
    "number": 10,
    "title": "주문 목록 화면이 느려 아래처럼 반정규화를 했다. 이에 대한 설명으로 옳지 않은 것은?",
    "options": [
      "주문 목록에 고객명을 보여 줄 때 고객과 조인해야 하는 횟수가 늘어난다.",
      "고객명이 바뀌면 고객과 주문 두 곳을 모두 고쳐야 하고, 하나라도 놓치면 값이 어긋난다.",
      "같은 고객명이 주문 건수만큼 반복 저장되어 저장 공간이 늘어난다.",
      "정규화된 구조로 두면 데이터 구조가 바뀔 때 고칠 곳이 적어 더 유연하다."
    ],
    "correctIndex": 0,
    "explanation": "반정규화는 조회 성능을 위해 일부러 중복을 허용하는 것이다. 주문에 고객명을 복사해 두면 목록 화면에서 고객과 조인하지 않아도 되므로 조인이 오히려 줄어든다. ① 은 거꾸로 말해 옳지 않다. 정답은 ①번이다. 대신 같은 값이 두 곳에 있어 고칠 때 둘 다 맞춰야 하고(②), 주문 건수만큼 고객명이 쌓여 공간이 늘어난다(③). 정규화는 한 사실을 한 곳에만 두어 구조 변경에 유연하다(④). 정규화가 유연성을 떨어뜨린다는 말은 틀린 설명이다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "전: 주문(주문번호, 고객번호, 주문일) + 고객(고객번호, 고객명)\n후: 주문(주문번호, 고객번호, 고객명, 주문일) + 고객(고객번호, 고객명)"
      }
    ]
  },
  {
    "id": 10210,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 11,
    "title": "아래 사원 테이블에 대한 SQL ㉠, ㉡, ㉢ 의 결과 행 수로 옳은 것은?",
    "options": [
      "2, 2, 2",
      "3, 2, 2",
      "3, 2, 4",
      "2, 3, 2"
    ],
    "correctIndex": 1,
    "explanation": "논리 연산자의 우선순위는 NOT, AND, OR 순서다. ㉠ 은 AND 가 먼저 묶여 '영업이거나, (개발이면서 400 이상)' 이 된다. 영업 김·이와 개발 박이 해당해 3행이다. ㉡ 은 괄호로 OR 를 먼저 묶어 '영업 또는 개발 중 400 이상' 이라 이·박 2행이다. ㉢ 은 NOT 이 바로 뒤의 조건에만 걸려 '영업이 아니면서 400 이상' 이 된다. 박·정 2행이다. 정답은 ②번이다. ① 은 ㉠ 을 왼쪽부터 차례로 계산한 것, ③ 은 ㉢ 의 NOT 이 'AND 전체' 에 걸린다고 본 것, ④ 는 ㉠ 과 ㉡ 을 바꿔 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "사원",
        "headers": [
          "이름",
          "부서",
          "급여"
        ],
        "rows": [
          [
            "김",
            "영업",
            "300"
          ],
          [
            "이",
            "영업",
            "500"
          ],
          [
            "박",
            "개발",
            "400"
          ],
          [
            "최",
            "개발",
            "200"
          ],
          [
            "정",
            "인사",
            "600"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT * FROM 사원\nWHERE  부서 = '영업'\n   OR  부서 = '개발' AND 급여 >= 400;\n-- ㉡\nSELECT * FROM 사원\nWHERE  (부서 = '영업'\n        OR 부서 = '개발')\n  AND  급여 >= 400;\n-- ㉢\nSELECT * FROM 사원\nWHERE  NOT 부서 = '영업'\n  AND  급여 >= 400;"
      }
    ]
  },
  {
    "id": 10211,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 12,
    "title": "아래 쿼리의 실행 결과로 옳은 것은?",
    "options": [
      "2, 3",
      "3, 3",
      "3, 4",
      "4, 4"
    ],
    "correctIndex": 2,
    "explanation": "첫 쿼리는 COL2 = 'A' 인 행 (1,A), (1,A), (3,A) 의 COL1 을 중복 포함(ALL)해 세므로 3 이다. 둘째 쿼리는 COL1 의 서로 다른 값 1, 2, 3, 4 를 세어 4 다. 따라서 3, 4(③). 첫 쿼리를 DISTINCT 로 세면 2 가 된다(①).",
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
            "1",
            "A"
          ],
          [
            "2",
            "B"
          ],
          [
            "3",
            "C"
          ],
          [
            "4",
            "D"
          ],
          [
            "1",
            "A"
          ],
          [
            "2",
            "B"
          ],
          [
            "3",
            "A"
          ]
        ],
        "caption": "TAB1 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT COUNT(ALL COL1) FROM TAB1\nWHERE COL2 = 'A';\nSELECT COUNT(DISTINCT COL1) FROM TAB1;"
      }
    ]
  },
  {
    "id": 10212,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 13,
    "title": "아래 두 테이블에 대해 네 가지 조인을 각각 수행할 때 결과 행 수가 가장 많은 것은?",
    "options": [
      "INNER JOIN",
      "LEFT OUTER JOIN",
      "RIGHT OUTER JOIN",
      "FULL OUTER JOIN"
    ],
    "correctIndex": 3,
    "explanation": "① INNER JOIN 은 양쪽에 모두 있는 B·C 두 건만 반환한다. ② LEFT OUTER JOIN 은 여기에 TAB1 에만 있는 A 를 더해 3 건, ③ RIGHT OUTER JOIN 은 TAB2 에만 있는 D 를 더해 3 건이다. FULL OUTER JOIN 은 매칭 2 건에 양쪽 미매칭 A·D 를 모두 더해 4 건이므로 결과 행 수가 가장 많다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TAB1 테이블",
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
            "C"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "TAB2 테이블",
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
            "D"
          ]
        ]
      }
    ]
  },
  {
    "id": 10213,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 14,
    "title": "아래 T 테이블에 각 조건을 WHERE 절에 넣었을 때, 결과로 나오는 행이 나머지와 다른 것은?",
    "options": [
      "COL3 >= 200 AND COL4 <= 200",
      "NOT (200 < COL3 OR 200 > COL4)",
      "200 BETWEEN COL3 AND COL4",
      "COL3 <= 200 AND COL4 >= 200"
    ],
    "correctIndex": 0,
    "explanation": "② 는 드모르간 법칙으로 COL3 <= 200 AND COL4 >= 200 과 같고, ③ 의 200 BETWEEN COL3 AND COL4 도 같은 뜻이며, ④ 는 이를 그대로 쓴 것이다. 세 조건 모두 (150, 250), (200, 200) 두 행을 돌려준다. (250, 150) 은 BETWEEN 의 아래쪽 값이 위쪽 값보다 커서 거짓이 되고, COL3 이 NULL 인 행은 비교 결과가 UNKNOWN 이라 NOT 을 붙여도 UNKNOWN 이어서 빠진다. ① 은 부등호 방향이 반대라 (200, 200), (250, 150) 을 돌려줘 결과가 다르다. 정답은 ①번이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T",
        "headers": [
          "COL3",
          "COL4"
        ],
        "rows": [
          [
            "150",
            "250"
          ],
          [
            "200",
            "200"
          ],
          [
            "250",
            "150"
          ],
          [
            "NULL",
            "300"
          ]
        ]
      }
    ]
  },
  {
    "id": 10214,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 15,
    "title": "아래 쿼리의 결과로 옳은 것은?",
    "options": [
      "10",
      "20",
      "40",
      "60"
    ],
    "correctIndex": 1,
    "explanation": "KEEP (DENSE_RANK FIRST ORDER BY COL1) 은 COL1 오름차순으로 가장 앞 순위인 행들(COL1 = 1 인 두 행)만 남긴 뒤 MAX(COL2)를 구한다. 그 두 행의 COL2 는 10, 20 이라 결과는 20 이다(②). ① 10 은 MAX 대신 MIN 을 쓴 값이고, 전체에서 MAX 를 구하면 50 이 나온다(KEEP 없이). ③ 40 은 COL1 이 가장 큰 행들(DENSE_RANK LAST)에서 MIN 을 구한 값이다.",
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
            "3",
            "40"
          ],
          [
            "3",
            "50"
          ]
        ],
        "caption": "TAB1 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT MAX(COL2)\n       KEEP (DENSE_RANK FIRST\n             ORDER BY COL1)\nFROM TAB1;"
      }
    ]
  },
  {
    "id": 10215,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 16,
    "title": "아래 T 테이블에 대한 SQL 의 결과로 옳은 것은? ('COALESCE(A, B, C) 의 세 값 / SUM 결과' 순서)",
    "options": [
      "2, NULL, 1 / 3",
      "2, NULL, 1 / NULL",
      "3, NULL, 9 / 12",
      "2, 0, 1 / 3"
    ],
    "correctIndex": 0,
    "explanation": "COALESCE 는 인자를 왼쪽부터 보며 처음 나오는 NULL 이 아닌 값을 돌려준다. 첫 행은 B 의 2, 둘째 행은 모두 NULL 이라 NULL, 셋째 행은 A 의 1 이다. 마지막 인자에 0 을 주면 모두 NULL 인 행도 0 이 되어 SUM 은 2 + 0 + 1 = 3 이다. 정답은 ①번이다. ② 는 NULL 이 섞이면 SUM 이 NULL 이 된다고 본 것, ③ 은 마지막 NULL 이 아닌 값을 고른 것, ④ 는 0 을 주지 않아도 NULL 이 0 이 된다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T",
        "headers": [
          "A",
          "B",
          "C"
        ],
        "rows": [
          [
            "NULL",
            "2",
            "3"
          ],
          [
            "NULL",
            "NULL",
            "NULL"
          ],
          [
            "1",
            "NULL",
            "9"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT COALESCE(A, B, C) FROM T;\n\nSELECT SUM(COALESCE(A, B, C, 0))\nFROM   T;"
      }
    ]
  },
  {
    "id": 10216,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 17,
    "title": "아래 SQL 의 실행 결과로 옳은 것은? (A, B, C, D 순서)",
    "options": [
      "-1, 10, -9, -1",
      "0, 10, -10, -1",
      "0, 9, -10, -0.5",
      "0, 10, -9, -1"
    ],
    "correctIndex": 1,
    "explanation": "A 의 CEIL(-0.5) 은 -0.5 보다 크거나 같은 가장 작은 정수라 0 이다(-1 은 -0.5 보다 작다). B 의 ROUND(9.5) 는 소수 첫째 자리 5 에서 올려 10 이다. C 의 FLOOR(-9.5) 는 -9.5 보다 작거나 같은 가장 큰 정수라 -10 이다. D 의 SIGN 은 값의 크기가 아니라 부호만 알려 주는 함수로, 음수면 -1, 0 이면 0, 양수면 1 이다. 정답은 ②번이다. ① 은 CEIL 과 FLOOR 를 양수처럼 계산한 것이고, ③ 은 ROUND 를 버림으로 보고 SIGN 이 원래 값을 돌려준다고 본 것, ④ 는 FLOOR(-9.5) 를 0 쪽으로 자른 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT CEIL(-0.5)  AS A,\n       ROUND(9.5)  AS B,\n       FLOOR(-9.5) AS C,\n       SIGN(-0.5)  AS D\nFROM   DUAL;"
      }
    ]
  },
  {
    "id": 10217,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 18,
    "title": "아래 업체 테이블에 대한 두 쿼리의 결과로 옳은 것은?",
    "options": [
      "3, 0",
      "3, 30",
      "3, 오류가 발생한다.",
      "3, NULL"
    ],
    "correctIndex": 1,
    "explanation": "(1) `COUNT(DISTINCT 물품)` 은 서로 다른 물품 종류의 수. p, q, r 3 종이라 3 반환. (2) `IN ('p', NULL)` 에서 NULL 비교는 UNKNOWN 으로 평가되어 무시되고 `물품 = 'p'` 만 매칭되어 30 건 반환. ① 은 IN 목록에 NULL 이 있으면 아무 행도 안 나온다고 본 값(NOT IN 과 헷갈린 것), ③ IN 목록의 NULL 은 오류가 아니며, ④ COUNT 는 NULL 을 돌려주지 않는다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "물품",
          "행 수"
        ],
        "rows": [
          [
            "p",
            "30"
          ],
          [
            "q",
            "40"
          ],
          [
            "r",
            "50"
          ]
        ],
        "caption": "업체 테이블 (물품별 행 개수)"
      },
      {
        "type": "sql",
        "code": "SELECT COUNT(DISTINCT 물품) FROM 업체;\nSELECT COUNT(*) FROM 업체\nWHERE 물품 IN ('p', NULL);"
      }
    ]
  },
  {
    "id": 10218,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 19,
    "title": "아래 ERD 와 데이터에서 'DB 와 OS 를 모두 신청한 학생' 을 구하려고 SQL ㉠, ㉡, ㉢ 을 작성했다. 각 SQL 의 결과 행 수를 차례대로 나열한 것은?",
    "options": [
      "1, 1, 1",
      "2, 1, 1",
      "2, 2, 1",
      "2, 1, 3"
    ],
    "correctIndex": 1,
    "explanation": "INTERSECT 는 두 결과에 모두 있는 행을 중복 없이 돌려준다. 무엇을 기준으로 비교하는지가 중요하다. ㉠ 은 이름으로 비교했다. DB 신청자의 이름은 {김, 이}, OS 신청자의 이름도 {김, 이} 라서 2행이 나온다. 그런데 DB 를 신청한 김은 학번 1, OS 를 신청한 김은 학번 2 로 서로 다른 학생이다. ERD 에서 학생을 구별하는 식별자는 학번이고 이름은 겹칠 수 있다. ㉡ 은 학번으로 비교해 {1, 3} 과 {2, 3} 의 교집합인 3 한 행이다. ㉢ 은 학번별로 두 과목 중 몇 개를 신청했는지 세어 2개인 학번 3 만 남긴다. 수강의 기본키가 (학번, 과목) 이라 같은 과목이 두 번 세어질 일이 없다. 정답은 ②번이다. ① 은 이름이 겹친다는 점을 놓친 것이고, ③ 은 ㉡ 도 이름처럼 겹친다고 본 것이다. ④ 는 ㉢ 에서 HAVING 을 빼고 WHERE 만 적용해 DB·OS 신청 학번 1, 2, 3 을 모두 센 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "학생·수강 ERD",
        "mermaid": "erDiagram\n    학생 ||--o{ 수강 : \"신청\"\n    학생 {\n        int 학번 PK\n        string 이름\n    }\n    수강 {\n        int 학번 PK, FK\n        string 과목 PK\n    }"
      },
      {
        "type": "text",
        "content": "학생: (1, 김), (2, 김), (3, 이)\n수강: (1, DB), (2, OS), (3, DB), (3, OS)"
      },
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT S.이름\nFROM 학생 S JOIN 수강 C\n  ON C.학번 = S.학번\nWHERE C.과목 = 'DB'\nINTERSECT\nSELECT S.이름\nFROM 학생 S JOIN 수강 C\n  ON C.학번 = S.학번\nWHERE C.과목 = 'OS';\n-- ㉡\nSELECT 학번 FROM 수강\nWHERE 과목 = 'DB'\nINTERSECT\nSELECT 학번 FROM 수강\nWHERE 과목 = 'OS';\n-- ㉢\nSELECT 학번 FROM 수강\nWHERE 과목 IN ('DB', 'OS')\nGROUP BY 학번\nHAVING COUNT(*) = 2;"
      }
    ]
  },
  {
    "id": 10219,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 20,
    "title": "COMMIT 된 3행씩을 가진 T1, T2 테이블에 아래 SQL 을 순서대로 실행했다. 마지막 SELECT 의 결과로 옳은 것은? (Oracle 기준)",
    "options": [
      "3, 0",
      "4, 3",
      "4, 0",
      "0, 0"
    ],
    "correctIndex": 2,
    "explanation": "Oracle 에서 TRUNCATE 는 DDL 이라 실행 전후로 자동 COMMIT 된다. 그래서 TRUNCATE 직전에 한 T1 의 INSERT 도 함께 확정되고, T2 는 0행이 되며, 바로 다음 ROLLBACK 은 되돌릴 것이 없다. 이어서 DELETE 로 T1 을 비웠지만 DML 이라 ROLLBACK 으로 되살아나 4행이 된다. 결과는 4, 0 이다. 정답은 ③번이다. ① 은 TRUNCATE 의 자동 COMMIT 으로 INSERT 가 확정된 것을 놓친 것, ② 는 TRUNCATE 도 ROLLBACK 된다고 본 것, ④ 는 DELETE 도 되돌릴 수 없다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "INSERT INTO T1 VALUES (4);\nTRUNCATE TABLE T2;\nROLLBACK;\nDELETE FROM T1;\nROLLBACK;\nSELECT (SELECT COUNT(*) FROM T1) AS A,\n       (SELECT COUNT(*) FROM T2) AS B\nFROM   DUAL;"
      }
    ]
  },
  {
    "id": 10220,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 21,
    "title": "아래 EMP 테이블에서 결과(COUNT(*) = 4)를 얻기 위한 쿼리로 가장 적절한 것은?",
    "options": [
      "SELECT COUNT(*) FROM EMP WHERE COL2 LIKE '%_%';",
      "SELECT COUNT(*) FROM EMP;",
      "SELECT COUNT(*) FROM EMP WHERE COL2 LIKE '%_';",
      "SELECT COUNT(*) FROM EMP WHERE COL2 LIKE '_%';"
    ],
    "correctIndex": 1,
    "explanation": "`COUNT(*)` 는 NULL 을 포함한 모든 행을 세므로 조건 없이 전체를 조회해야 4 가 반환된다. ① `LIKE '%_%'` 는 \"한 글자 이상\" 의미로 NULL 행 1 개를 제외한 3 행, ③ `LIKE '%_'` 와 ④ `LIKE '_%'` 도 마찬가지로 NULL 제외 3 행이라 4 를 반환하지 못한다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP 테이블",
        "headers": [
          "COL1",
          "COL2"
        ],
        "rows": [
          [
            "1",
            "Smith"
          ],
          [
            "2",
            "Charlie"
          ],
          [
            "3",
            "Alice"
          ],
          [
            "4",
            "NULL"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "기대 결과 (COUNT(*) = 4)",
        "headers": [
          "COUNT(*)"
        ],
        "rows": [
          [
            "4"
          ]
        ]
      }
    ]
  },
  {
    "id": 10221,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 22,
    "title": "칼럼 C 가 NULL 인 행에서 아래 네 식의 값으로 옳은 것은? (순서대로, Oracle 기준)",
    "options": [
      "0, -1, -1, -1",
      "-1, -1, -1, -1",
      "0, -1, 0, -1",
      "-1, -1, 0, 0"
    ],
    "correctIndex": 0,
    "explanation": "㉠ 처럼 CASE 뒤에 칼럼을 쓰는 단순 CASE 는 'C = NULL' 로 비교하는데, NULL 과의 = 비교는 UNKNOWN 이라 참이 되지 않아 ELSE 의 0 이 나온다. ㉡ 은 IS NULL 로 확인해 -1 이다. DECODE 는 예외적으로 NULL 과 NULL 을 같은 값으로 보므로 ㉢ 은 -1 이다. NVL2 는 C 가 NULL 이면 세 번째 인자를 돌려줘 ㉣ 도 -1 이다. 정답은 ①번이다. ② 는 단순 CASE 도 NULL 을 잡는다고 본 것, ③ 은 DECODE 도 = 처럼 NULL 을 못 잡는다고 본 것, ④ 는 DECODE 와 NVL2 를 거꾸로 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ㉠\nCASE C WHEN NULL THEN -1 ELSE 0 END\n-- ㉡\nCASE WHEN C IS NULL THEN -1\n     ELSE 0 END\n-- ㉢\nDECODE(C, NULL, -1, 0)\n-- ㉣\nNVL2(C, 0, -1)"
      }
    ]
  },
  {
    "id": 10222,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 23,
    "title": "아래 사원 테이블에 대한 셀프 조인 SQL 결과에서 관리자가 NULL 로 나오는 사원을 모두 고른 것은?",
    "options": [
      "김",
      "정",
      "김, 정",
      "김, 이"
    ],
    "correctIndex": 2,
    "explanation": "같은 사원 테이블을 E(사원)와 M(관리자) 두 별칭으로 놓고, E 의 관리자사번이 M 의 사번과 같은 행을 잇는다. 이 → 김, 박 → 김, 최 → 이 로 짝이 맞는다. 김은 관리자사번이 NULL 이라 어떤 사번과도 같지 않고, 정은 관리자사번 9 인 사원이 테이블에 없다. LEFT OUTER JOIN 이라 두 사람 모두 결과에 남되 관리자 칸이 NULL 이 된다. 정답은 ③번이다. ① 과 ② 는 둘 중 한 사람만 본 것이고, ④ 는 '부하 직원이 있는 사람(관리자 역할인 사람)' 으로 방향을 거꾸로 읽은 것이다. INNER JOIN 이었다면 김과 정은 결과에서 빠진다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "사원",
        "headers": [
          "사번",
          "이름",
          "관리자사번"
        ],
        "rows": [
          [
            "1",
            "김",
            "NULL"
          ],
          [
            "2",
            "이",
            "1"
          ],
          [
            "3",
            "박",
            "1"
          ],
          [
            "4",
            "최",
            "2"
          ],
          [
            "5",
            "정",
            "9"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT E.이름, M.이름 AS 관리자\nFROM   사원 E\n       LEFT OUTER JOIN 사원 M\n         ON E.관리자사번 = M.사번\nORDER BY E.사번;"
      }
    ]
  },
  {
    "id": 10223,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 24,
    "title": "아래 두 쿼리의 결과로 옳은 것은?",
    "options": [
      "NULL, NULL",
      "NULL, 공집합",
      "공집합, NULL",
      "공집합, 공집합"
    ],
    "correctIndex": 2,
    "explanation": "첫 번째 쿼리는 조건을 만족하는 행이 없어 공집합을 반환한다. 두 번째 쿼리는 집계 함수이므로 조건에 맞는 행이 없더라도 한 건(NULL)을 반환한다. ① 과 ② 는 일반 SELECT 도 행이 없으면 NULL 한 행이 나온다고 본 결과, ④ 는 집계 함수도 행이 없으면 공집합이라고 본 결과다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "COL1"
        ],
        "rows": [
          [
            "a"
          ],
          [
            "b"
          ],
          [
            "c"
          ]
        ],
        "caption": "TAB1 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT COL1      FROM TAB1 WHERE COL1 = 'z';\nSELECT MAX(COL1) FROM TAB1 WHERE COL1 = 'z';"
      }
    ]
  },
  {
    "id": 10224,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 25,
    "title": "아래 SQL 의 결과(A, B, C, D)로 옳은 것은? (Oracle 기준)",
    "options": [
      "aaa, aa, 2, aaaaaX",
      "aaaa, aa, 2, aaaaaX",
      "aaaa, aaaa, 3, aaaaaXXXX",
      "aaaa, aa, 3, aaaaaX"
    ],
    "correctIndex": 1,
    "explanation": "a{2,4} 는 a 가 2~4번 이어진 부분이고, 기본적으로 가능한 한 길게 잡아 A 는 'aaaa' 다. 뒤에 ? 를 붙이면 가능한 한 짧게 잡아 B 는 'aa' 다. REGEXP_COUNT 는 겹치지 않게 센다. a 다섯 개에서 'aa' 를 앞에서부터 두 번 잡고 a 하나가 남아 C 는 2 다. b+ 는 b 가 1번 이상 이어진 덩어리 하나라 bbbb 전체가 X 하나로 바뀌어 D 는 'aaaaaX' 다. 정답은 ②번이다. ① 은 길게 잡는 규칙을 놓친 것, ③ 은 ? 를 무시하고 b 를 하나씩 바꾼 것, ④ 는 겹쳐서 센 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT\n  REGEXP_SUBSTR('aaaaabbbb', 'a{2,4}')\n    AS A,\n  REGEXP_SUBSTR('aaaaabbbb', 'a{2,4}?')\n    AS B,\n  REGEXP_COUNT('aaaaabbbb', 'a{2}')\n    AS C,\n  REGEXP_REPLACE('aaaaabbbb',\n                 'b+', 'X')\n    AS D\nFROM DUAL;"
      }
    ]
  },
  {
    "id": 10225,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 26,
    "title": "아래 두 SELECT 는 부서 조건이 서로 겹치지 않는다. 두 결과를 합칠 때 가장 알맞은 집합 연산자와 그 이유는?",
    "options": [
      "UNION — 혹시 모를 중복을 없애야 하므로",
      "UNION ALL — 두 결과가 겹칠 수 없어 중복을 없애는 정렬 작업이 필요 없으므로",
      "INTERSECT — 두 부서 사원을 모두 가져오므로",
      "MINUS — 부서 10 에서 20 을 빼면 둘 다 남으므로"
    ],
    "correctIndex": 1,
    "explanation": "UNION 은 결과를 합친 뒤 중복을 없애려고 정렬이나 해시 작업을 하고, UNION ALL 은 중복을 없애지 않고 그대로 이어 붙인다. 부서 = 10 과 부서 = 20 은 한 행에서 동시에 참일 수 없어 두 결과가 겹치지 않으므로, 결과는 같고 추가 작업이 없는 UNION ALL 이 알맞다. 정답은 ②번이다. ① 은 결과는 같지만 불필요한 중복 제거 작업을 한다. ③ INTERSECT 는 겹치는 행만 남겨 0행이 되고, ④ MINUS 는 부서 10 사원만 남긴다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT 사번, 이름 FROM 사원\nWHERE  부서 = 10\n( ? )\nSELECT 사번, 이름 FROM 사원\nWHERE  부서 = 20;"
      }
    ]
  },
  {
    "id": 10226,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 27,
    "title": "아래 EMP 테이블에서 급여 2,000 이상인 사원의 부서별 급여 합계를 높은 순으로 정렬하려 한다. 아래 쿼리에서 수정이 필요한 부분은?",
    "options": [
      "(가)",
      "(나)",
      "(다)",
      "(라)"
    ],
    "correctIndex": 3,
    "explanation": "ORDER BY 는 기본 오름차순(ASC)이므로 \"높은 순\"으로 정렬하려면 (라) 의 `ORDER BY SUM(SALARY)` 에 `DESC` 를 추가해 `ORDER BY SUM(SALARY) DESC` 로 만들어야 한다. ① (가) SELECT 절, ② (나) WHERE 조건, ③ (다) GROUP BY 는 모두 정상이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP 테이블",
        "headers": [
          "DEPT_NAME",
          "SALARY"
        ],
        "rows": [
          [
            "영업",
            "2500"
          ],
          [
            "영업",
            "3000"
          ],
          [
            "인사",
            "2200"
          ],
          [
            "IT",
            "5000"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT DEPT_NAME, SUM(SALARY)   -- (가)\nFROM   EMP\nWHERE  SALARY >= 2000           -- (나)\nGROUP BY DEPT_NAME              -- (다)\nORDER BY SUM(SALARY)            -- (라)"
      }
    ]
  },
  {
    "id": 10227,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 28,
    "title": "X 가 10 으로 COMMIT 된 테이블에서 두 세션이 아래 순서로 작업했다. ③ 에서 세션 A 가 ROLLBACK 했을 때와 COMMIT 했을 때, ④ 이후 X 값을 차례대로 나열한 것은?",
    "options": [
      "30, 30",
      "20, 20",
      "20, 30",
      "30, 20"
    ],
    "correctIndex": 2,
    "explanation": "① 에서 세션 A 가 행을 수정하면 그 행에 잠금이 걸린다. ② 의 세션 B 는 같은 행을 수정하려다 A 가 끝날 때까지 기다린다. A 가 ROLLBACK 하면 X 는 10 으로 돌아가고 잠금이 풀린다. B 의 UPDATE 는 이때 10 을 읽어 20 으로 바꾸고, ④ 의 COMMIT 으로 20 이 확정된다. A 가 COMMIT 하면 15 가 확정된 뒤 B 가 15 를 읽어 30 으로 바꾼다. ROLLBACK 은 COMMIT 되지 않은 변경만 되돌리고, 잠금을 풀어 기다리던 작업이 이어지게 한다. 정답은 ③번이다. ① 은 ROLLBACK 해도 A 의 +5 가 B 에게 반영된다고 본 것이고, ② 는 A 가 COMMIT 해도 B 가 처음 값 10 을 기준으로 계산한다고 본 것, ④ 는 두 경우를 바꿔 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "실행 순서",
        "headers": [
          "순서",
          "세션",
          "작업"
        ],
        "rows": [
          [
            "①",
            "A",
            "UPDATE: X = X + 5"
          ],
          [
            "②",
            "B",
            "UPDATE: X = X * 2 (대기)"
          ],
          [
            "③",
            "A",
            "ROLLBACK 또는 COMMIT"
          ],
          [
            "④",
            "B",
            "COMMIT"
          ]
        ]
      },
      {
        "type": "text",
        "content": "①·② 는 같은 행에 대한 UPDATE 다."
      }
    ]
  },
  {
    "id": 10228,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 29,
    "title": "사원 테이블에 대한 SQL ㉠~㉣ 중 오류가 발생하는 것만 모두 고른 것은?",
    "options": [
      "㉠",
      "㉠, ㉢, ㉣",
      "㉠, ㉢",
      "㉢"
    ],
    "correctIndex": 2,
    "explanation": "SELECT 문은 FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY 순서로 처리되고, 윈도우 함수는 SELECT 단계에서 계산된다. 그래서 그보다 먼저 처리되는 WHERE(㉠)와 HAVING(㉢)에는 윈도우 함수를 쓸 수 없어 오류다. ㉡ 처럼 인라인 뷰 안에서 먼저 계산한 뒤 바깥 WHERE 에서 거르면 되고, SELECT 뒤에 처리되는 ORDER BY(㉣)에는 윈도우 함수를 쓸 수 있다. 정답은 ③번이다. ① 은 HAVING 은 집계라서 된다고 본 것, ② 는 ORDER BY 에도 못 쓴다고 본 것, ④ 는 WHERE 에서 행 번호로 거를 수 있다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT 이름 FROM 사원\nWHERE  ROW_NUMBER() OVER\n       (ORDER BY 급여 DESC) = 1;\n-- ㉡\nSELECT 이름\nFROM  (SELECT 이름,\n         ROW_NUMBER() OVER\n         (ORDER BY 급여 DESC) AS RN\n       FROM 사원)\nWHERE  RN = 1;\n-- ㉢\nSELECT 부서 FROM 사원\nGROUP  BY 부서\nHAVING RANK() OVER\n       (ORDER BY SUM(급여)) = 1;\n-- ㉣\nSELECT 이름 FROM 사원\nORDER  BY ROW_NUMBER() OVER\n       (ORDER BY 급여);"
      }
    ]
  },
  {
    "id": 10229,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 30,
    "title": "아래 결과 (NAME, SALARY, RANKING) 를 반환하는 순위 함수로 옳은 것은?",
    "options": [
      "DENSE_RANK()",
      "RANK()",
      "PERCENT_RANK()",
      "ROW_NUMBER()"
    ],
    "correctIndex": 0,
    "explanation": "Bob, Smith 가 같은 7000 으로 1 위, 다음 David(6000) 이 2 위 — \"동일 순위 후 다음 순위를 건너뛰지 않는\" 패턴은 DENSE_RANK. ② RANK 는 동일 1, 1, 3, 4, 5 처럼 건너뛰며, ④ ROW_NUMBER 는 동률이어도 1, 2, 3, 4, 5 로 고유 부여, ③ PERCENT_RANK 는 0~1 비율 반환.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "기대 결과 — SALARY DESC 기준 RANKING 부여",
        "headers": [
          "NAME",
          "SALARY",
          "RANKING"
        ],
        "rows": [
          [
            "Bob",
            "7000",
            "1"
          ],
          [
            "Smith",
            "7000",
            "1"
          ],
          [
            "David",
            "6000",
            "2"
          ],
          [
            "Alice",
            "5000",
            "3"
          ],
          [
            "Charlie",
            "3000",
            "4"
          ]
        ]
      }
    ]
  },
  {
    "id": 10230,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 31,
    "title": "A 트랜잭션이 아직 커밋되지 않은 B 트랜잭션의 수정 값을 읽어 잘못된 금액을 계산했다(Dirty Read). 격리 수준을 READ COMMITTED 로 올렸을 때, 여전히 생길 수 있는 현상만 모두 고른 것은?",
    "options": [
      "Dirty Read",
      "Dirty Read, Non-Repeatable Read",
      "Non-Repeatable Read, Phantom Read",
      "Phantom Read"
    ],
    "correctIndex": 2,
    "explanation": "이 상황은 트랜잭션의 고립성이 지켜지지 않은 것이다. READ COMMITTED 는 COMMIT 된 값만 읽게 해 Dirty Read 를 막는다. 그러나 같은 행을 다시 읽는 사이 다른 트랜잭션이 고치고 COMMIT 하면 값이 달라지는 Non-Repeatable Read, 다시 조회할 때 새 행이 보이는 Phantom Read 는 여전히 생길 수 있다. REPEATABLE READ 는 Non-Repeatable Read 까지, SERIALIZABLE 은 Phantom Read 까지 막는다. 정답은 ③번이다. ①·② 는 READ COMMITTED 가 Dirty Read 를 막지 못한다고 본 것, ④ 는 Non-Repeatable Read 도 막는다고 본 것이다. Oracle 의 기본 격리 수준이 READ COMMITTED 다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "격리 수준(낮음 → 높음): READ UNCOMMITTED → READ COMMITTED → REPEATABLE READ → SERIALIZABLE"
      }
    ]
  },
  {
    "id": 10231,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 32,
    "title": "아래 쿼리 결과 행의 COL2 값은?",
    "options": [
      "10",
      "20",
      "30",
      "결과가 없다 (공집합)"
    ],
    "correctIndex": 0,
    "explanation": "(A, 10) 은 TAB2 의 어느 행과 비교해도 COL1 또는 COL2 가 확정적으로 다르므로 NOT IN 이 참이 되어 반환된다. (B, 20) 은 TAB2 의 (B, 20) 과 일치하여 제외된다. (C, 30) 은 (C, NULL) 과의 비교에서 COL1 은 같고 COL2 비교가 UNKNOWN 이 되어 NOT IN 이 UNKNOWN 이므로 제외된다. 따라서 결과는 (A, 10) 한 행이고 COL2 는 10 이다. 서브쿼리에 NULL 이 있다고 해서 항상 공집합이 되는 것은 아니며, 비교 대상 중 하나라도 확정적으로 다르면 NOT IN 은 참이 된다. ② 20 인 (B, 20) 은 일치해서, ③ 30 인 (C, 30) 은 NULL 비교가 UNKNOWN 이라 빠지고, (A, 10) 이 남으므로 ④ 공집합이 아니다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TAB1",
        "headers": [
          "COL1",
          "COL2"
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
        "caption": "TAB2",
        "headers": [
          "COL1",
          "COL2"
        ],
        "rows": [
          [
            "A",
            "20"
          ],
          [
            "B",
            "20"
          ],
          [
            "C",
            "NULL"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT *\nFROM   TAB1\nWHERE  (COL1, COL2) NOT IN\n       (SELECT COL1, COL2 FROM TAB2);"
      }
    ]
  },
  {
    "id": 10232,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 33,
    "title": "아래 TAB1, TAB2 테이블에 대한 UPDATE 쿼리와 동일한 결과를 산출하는 것은?",
    "options": [
      "UPDATE TAB1 SET COL1 = (SELECT MAX(COL2) FROM TAB2 T2 WHERE T1.COL1 = T2.COL2 AND T1.COL1 >= 200);",
      "UPDATE TAB1 SET COL1 = (SELECT COALESCE(MAX(NULL), 0) FROM TAB2 T2 WHERE T1.COL1 = T2.COL2);",
      "UPDATE TAB1 SET COL1 = (SELECT MAX(0) FROM TAB2 T2 WHERE T1.COL1 = T2.COL2 AND T1.COL1 >= 200);",
      "UPDATE TAB1 SET COL1 = NULL;"
    ],
    "correctIndex": 3,
    "explanation": "서브쿼리가 `SELECT MAX(NULL) FROM TAB2 ...` 이라 항상 NULL 을 반환 (MAX 의 입력이 NULL 상수). WHERE 조건과 무관하게 모든 TAB1 행의 COL1 이 NULL 로 갱신된다 = ④ `UPDATE TAB1 SET COL1 = NULL;` 과 동일. ① 은 MAX(COL2) 라 200·300 행이 값을 받고, ② 는 COALESCE 로 모든 행에 0 이 들어가며, ③ 은 MAX(0) 이라 짝이 있는 행에 0 이 들어가 결과가 다르다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TAB1 테이블 (UPDATE 전)",
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
            "200"
          ],
          [
            "300"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "UPDATE TAB1 T1\nSET    COL1 = (SELECT MAX(NULL)\n               FROM   TAB2 T2\n               WHERE  T1.COL1 = T2.COL2\n               AND    T1.COL1 >= 200);"
      }
    ]
  },
  {
    "id": 10233,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 34,
    "title": "아래 EMP 테이블에서 사원(A) 과 그 사원이 관리하는 부하 사원(B) 을 함께 출력하되, 부하가 없는 사원도 결과에 포함하려면 가장 적절한 쿼리는?",
    "options": [
      "SELECT A.EMP_ID, B.EMP_ID FROM EMP A INNER JOIN EMP B ON A.EMP_ID = B.EMP_ID;",
      "SELECT A.EMP_ID, B.EMP_ID FROM EMP A INNER JOIN EMP B ON A.MGR_ID = B.EMP_ID;",
      "SELECT A.EMP_ID, B.EMP_ID FROM EMP A LEFT OUTER JOIN EMP B ON A.EMP_ID = B.MGR_ID;",
      "SELECT A.EMP_ID, B.EMP_ID FROM EMP A RIGHT OUTER JOIN EMP B ON A.EMP_ID = B.MGR_ID;"
    ],
    "correctIndex": 2,
    "explanation": "A 가 관리하는 부하 B 를 붙이려면 B 의 관리자가 A 여야 하므로 조건은 A.EMP_ID = B.MGR_ID 다. 부하가 없는 A 까지 남기려면 A 쪽을 보존하는 LEFT OUTER JOIN 을 쓴다(③). 결과는 (1001, 1002), (1002, 1003), (1002, 1004), (1003, NULL), (1004, NULL) 이다. ① 은 자기 자신과 짝지어 부하 관계가 아니고, ② 는 A.MGR_ID = B.EMP_ID 라 B 가 A 의 상사가 되며, ④ 는 조건은 맞지만 RIGHT OUTER JOIN 이라 B 쪽을 보존해 부하 없는 1003·1004 가 A 자리에 나오지 않고 대신 (NULL, 1001) 이 생긴다. ※ 복원 자료의 ④ 는 ① 과 결과가 같은 보기라 헷갈린다는 제보가 있어 바꿨다(PostgreSQL 실행 확인).",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP 테이블",
        "headers": [
          "EMP_ID",
          "MGR_ID"
        ],
        "rows": [
          [
            "1001",
            "(NULL)"
          ],
          [
            "1002",
            "1001"
          ],
          [
            "1003",
            "1002"
          ],
          [
            "1004",
            "1002"
          ]
        ]
      }
    ]
  },
  {
    "id": 10234,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 35,
    "title": "테이블 TAB1, TAB2 에 각각 10건씩 데이터가 있을 때 다음 쿼리의 결과는?",
    "options": [
      "10",
      "20",
      "100",
      "오류가 발생한다."
    ],
    "correctIndex": 2,
    "explanation": "FROM TAB1, TAB2 에 조인 조건이 없으면 두 테이블의 모든 행 조합(카티션 곱)이 만들어진다. 10건 × 10건 = 100건이므로 COUNT(*) 는 100 이다(③). ① 10 은 한 테이블의 행 수, ② 20 은 두 테이블 행 수의 합이고, ④ 조건이 없어도 오류는 나지 않는다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TAB1 테이블 (10건 가정)",
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
            "…"
          ],
          [
            "10"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "TAB2 테이블 (10건 가정)",
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
            "…"
          ],
          [
            "J"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT COUNT(*) FROM TAB1, TAB2;"
      }
    ]
  },
  {
    "id": 10235,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 36,
    "title": "아래 NATURAL JOIN 의 결과 행 수는?",
    "options": [
      "0",
      "3",
      "5",
      "15"
    ],
    "correctIndex": 0,
    "explanation": "두 테이블의 공통 컬럼은 ID 이지만 TAB1(1, 2, 3)과 TAB2(10, 20, 30, 40, 50) 사이에 일치하는 ID 값이 없으므로 NATURAL JOIN 결과는 0 건이다. ② 3 은 TAB1 행 수, ③ 5 는 TAB2 행 수, ④ 15 는 조건 없는 CROSS JOIN 의 결과다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TAB1",
        "headers": [
          "ID",
          "CUSTOMER"
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
            "3",
            "C"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "TAB2",
        "headers": [
          "ID",
          "PHONE"
        ],
        "rows": [
          [
            "10",
            "111-1111"
          ],
          [
            "20",
            "222-2222"
          ],
          [
            "30",
            "333-3333"
          ],
          [
            "40",
            "444-4444"
          ],
          [
            "50",
            "555-5555"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT * FROM TAB1 NATURAL JOIN TAB2;"
      }
    ]
  },
  {
    "id": 10236,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 37,
    "title": "아래 TAB1 테이블에서 결과(COUNT() = 2) 를 산출하는 쿼리는?",
    "options": [
      "SELECT COUNT(DISTINCT COL1) FROM TAB1 WHERE COL2 <= 20;",
      "SELECT COUNT(COL1) FROM TAB1 WHERE COL2 <= 20;",
      "SELECT COUNT(COL1) FROM TAB1 WHERE COL2 <= 20 GROUP BY COL1;",
      "SELECT COUNT(COL1) FROM TAB1 WHERE COL2 < 30 GROUP BY COL1;"
    ],
    "correctIndex": 0,
    "explanation": "`COL2 <= 20` 만족 행은 (A,10), (A,20), (B,20) 3 행. ① `COUNT(DISTINCT COL1)` = {A, B} = 2 → 결과 2. ② `COUNT(COL1)` = 3 (행 수). ③④ GROUP BY 라 행이 여러 건 반환되어 단일 값 2 안 됨. 정답은 ①.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TAB1 테이블",
        "headers": [
          "COL1",
          "COL2"
        ],
        "rows": [
          [
            "A",
            "10"
          ],
          [
            "A",
            "20"
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
        "caption": "기대 결과 (COUNT 결과 = 2)",
        "headers": [
          "COUNT()"
        ],
        "rows": [
          [
            "2"
          ]
        ]
      }
    ]
  },
  {
    "id": 10237,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 38,
    "title": "아래 SQL 을 순서대로 실행한 뒤 ID 1, 2, 3, 4 행의 상태 값으로 옳은 것은?",
    "options": [
      "N, N, N, Y",
      "N, NULL, N, Y",
      "N, NULL, N, N",
      "Y, NULL, Y, Y"
    ],
    "correctIndex": 1,
    "explanation": "DEFAULT 는 값을 넣지 않았을 때만 쓰인다. 칼럼을 빼고 넣은 1 과 DEFAULT 키워드를 쓴 3 은 'N' 이 된다. 2 처럼 NULL 을 직접 넣으면 '값을 NULL 로 정했다' 는 뜻이라 기본값이 아닌 NULL 이 저장된다. 기본값을 'Y' 로 바꾸면 그 뒤에 들어오는 행에만 적용되고, 이미 들어간 행은 그대로다. 그래서 4 만 'Y' 다. 정답은 ②번이다. ① 은 NULL 을 넣어도 기본값으로 바뀐다고 본 것, ③ 은 기본값 변경이 새 행에도 안 먹힌다고 본 것, ④ 는 기존 행까지 바뀐다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "CREATE TABLE T (\n  ID   NUMBER PRIMARY KEY,\n  상태 CHAR(1) DEFAULT 'N'\n);\nINSERT INTO T (ID) VALUES (1);\nINSERT INTO T VALUES (2, NULL);\nINSERT INTO T VALUES (3, DEFAULT);\nALTER TABLE T\n  MODIFY 상태 DEFAULT 'Y';\nINSERT INTO T (ID) VALUES (4);"
      }
    ]
  },
  {
    "id": 10238,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 39,
    "title": "아래 SQL 의 결과(A, B, C)로 옳은 것은? (Oracle 기준)",
    "options": [
      "2, 4, 2",
      "4, 5, 5",
      "4, 6, 2",
      "4, 6, 5"
    ],
    "correctIndex": 3,
    "explanation": "'a1b22c333' 에서 숫자가 이어진 덩어리는 '1'(2번째 글자), '22'(4~5번째), '333'(7~9번째) 순이다. A 는 1번째 글자부터 찾은 두 번째 덩어리 '22' 의 시작 위치 4 다. B 는 다섯 번째 인자 1 이 '일치한 부분이 끝난 다음 위치' 를 돌려달라는 뜻이라 5 다음인 6 이다. C 처럼 INSTR 의 시작 위치가 음수면 끝에서부터 거꾸로 찾으므로, 마지막 'B' 의 위치 5 가 나온다(위치 번호는 앞에서부터 센다). 정답은 ④번이다. ① 은 첫 번째 덩어리를 찾은 것, ② 는 B 를 일치한 마지막 글자의 위치로 본 것, ③ 은 거꾸로 찾아도 첫 'B' 가 나온다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT\n  REGEXP_INSTR('a1b22c333',\n               '[0-9]+', 1, 2)    AS A,\n  REGEXP_INSTR('a1b22c333',\n               '[0-9]+', 1, 2, 1) AS B,\n  INSTR('ABCABC', 'B', -1)       AS C\nFROM DUAL;"
      }
    ]
  },
  {
    "id": 10239,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 40,
    "title": "아래 테이블에서 조건을 만족하는 행은?",
    "options": [
      "PARK",
      "PARK, KIM",
      "PARK, LEE",
      "PARK, KIM, LEE"
    ],
    "correctIndex": 1,
    "explanation": "AGE < 35 이고 DEPT 가 A 또는 B 인 행을 찾는다. PARK(30, A)과 KIM(25, B)은 두 조건을 모두 만족하고, LEE(40, A)는 나이 조건에서 빠진다. 따라서 PARK, KIM 이다(②). ① 은 KIM 을 놓친 결과, ③ 은 나이 조건 대신 DEPT A 만 본 결과, ④ 는 나이 조건을 무시한 결과다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "NAME",
          "AGE",
          "DEPT"
        ],
        "rows": [
          [
            "PARK",
            "30",
            "A"
          ],
          [
            "KIM",
            "25",
            "B"
          ],
          [
            "LEE",
            "40",
            "A"
          ]
        ],
        "caption": "MEMBER 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT NAME\nFROM   MEMBER\nWHERE  AGE < 35 AND DEPT IN ('A', 'B');"
      }
    ]
  },
  {
    "id": 10240,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 41,
    "title": "SAL 값이 1000, 1000, 2500, NULL 인 T 테이블에 아래 SQL 을 실행한 결과로 옳은 것은? (순서대로)",
    "options": [
      "1500, 1500, 2, 0",
      "1125, 1750, 3, 0",
      "1500, 1750, 2, 0",
      "1500, 1750, 2, 1000"
    ],
    "correctIndex": 2,
    "explanation": "집계 함수는 NULL 을 빼고 계산한다. AVG(SAL) 은 (1000 + 1000 + 2500) / 3 = 1500 이다. DISTINCT 를 붙이면 중복 값을 하나로 줄여 1000, 2500 만 남으므로 AVG 는 1750, COUNT 는 2 다. MIN(NVL(SAL, 0)) 은 NULL 이 0 으로 바뀐 뒤 최솟값을 구해 0 이다. 정답은 ③번이다. ① 은 DISTINCT 를 무시한 것, ② 는 AVG 에 NULL 을 0 으로 넣고 COUNT(DISTINCT) 에 NULL 을 센 것, ④ 는 NVL 로 바뀐 0 을 놓친 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT AVG(SAL),\n       AVG(DISTINCT SAL),\n       COUNT(DISTINCT SAL),\n       MIN(NVL(SAL, 0))\nFROM   T;"
      }
    ]
  },
  {
    "id": 10241,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 42,
    "title": "아래 부서·사원 테이블에 대한 쿼리 실행 결과에 대한 설명으로 옳은 것은?",
    "options": [
      "등급이 2 이상인 모든 사원이 출력된다.",
      "부서에 소속되지 않은 사원과 등급이 2 미만인 사원은 결과에서 제외된다.",
      "부서 정보가 없는 사원도 결과에 포함된다.",
      "등급이 NULL 인 사원도 결과에 포함된다."
    ],
    "correctIndex": 1,
    "explanation": "`FROM 부서 D, 사원 E` 에 `WHERE D.부서ID = E.부서ID` 를 건 형태는 INNER JOIN 과 같아 부서ID 가 일치하는 행만 남는다. 여기에 등급 조건이 더해지므로 부서ID 가 NULL 인 사원은 조인 단계에서, 등급이 2 미만인 사원은 조건 단계에서 각각 걸러진다. ① 은 부서가 없는 사원도 포함된다고 보아 틀리고, ③④ 는 INNER JOIN 에서 매칭되지 않은 행이 남는다고 본 설명이라 옳지 않다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "부서 테이블",
        "headers": [
          "부서ID",
          "부서명"
        ],
        "rows": [
          [
            "10",
            "영업"
          ],
          [
            "20",
            "인사"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "사원 테이블",
        "headers": [
          "사원ID",
          "부서ID",
          "등급"
        ],
        "rows": [
          [
            "1",
            "10",
            "3"
          ],
          [
            "2",
            "10",
            "1"
          ],
          [
            "3",
            "20",
            "2"
          ],
          [
            "4",
            "(NULL)",
            "5"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT E.*\nFROM   부서 D, 사원 E\nWHERE  D.부서ID = E.부서ID\nAND    E.등급 >= 2;"
      }
    ]
  },
  {
    "id": 10242,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 43,
    "title": "아래 PLAYER 테이블에서 키가 180 이상인 선수를 조회하는 쿼리로 가장 적절한 것은?",
    "options": [
      "SELECT * FROM PLAYER HAVING HEIGHT >= 180;",
      "SELECT * FROM PLAYER GROUP BY HEIGHT >= 180;",
      "SELECT * FROM PLAYER WHERE HEIGHT >= 180;",
      "SELECT * FROM PLAYER ORDER BY HEIGHT >= 180;"
    ],
    "correctIndex": 2,
    "explanation": "행 단위 필터 조건은 `WHERE` 절에서 처리한다. ① `HAVING` 은 GROUP BY 후 그룹 조건, ② `GROUP BY` 는 그룹화 키 (불리언이 올 수 없음), ④ `ORDER BY` 는 정렬이라 의미 다름.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "PLAYER 테이블",
        "headers": [
          "NAME",
          "HEIGHT"
        ],
        "rows": [
          [
            "김선수",
            "175"
          ],
          [
            "이선수",
            "182"
          ],
          [
            "박선수",
            "178"
          ],
          [
            "최선수",
            "190"
          ]
        ]
      }
    ]
  },
  {
    "id": 10243,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 44,
    "title": "아래 선수 테이블에서 팀별 최단신 선수의 팀명과 키를 출력하는 쿼리와 동일한 결과를 반환하는 것은?",
    "options": [
      "SELECT TEAM, MIN(HEIGHT) FROM 선수 WHERE HEIGHT IS NULL GROUP BY TEAM;",
      "SELECT TEAM, HEIGHT FROM 선수 HAVING HEIGHT = MIN(HEIGHT);",
      "SELECT TEAM, HEIGHT FROM 선수 WHERE HEIGHT > (SELECT MIN(HEIGHT) FROM 선수);",
      "SELECT P.TEAM, P.HEIGHT FROM 선수 P INNER JOIN (SELECT TEAM, MIN(HEIGHT) AS H FROM 선수 GROUP BY TEAM) M ON P.TEAM = M.TEAM AND P.HEIGHT = M.H;"
    ],
    "correctIndex": 3,
    "explanation": "팀별 최저 신장 선수의 정확한 (TEAM, HEIGHT) 행을 가져오려면 (TEAM, MIN(HEIGHT)) 를 인라인 뷰로 만든 뒤 원본 테이블과 INNER JOIN 해야 한다. ① `WHERE HEIGHT IS NULL` 은 NULL 행만 잡고, ② `HAVING HEIGHT = MIN(HEIGHT)` 는 비집계 컬럼 HEIGHT 사용 오류, ③ `HEIGHT > MIN` 은 최저값을 제외한 행을 반환하므로 모두 오답.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "선수 테이블",
        "headers": [
          "TEAM",
          "NAME",
          "HEIGHT"
        ],
        "rows": [
          [
            "A",
            "김선수",
            "180"
          ],
          [
            "A",
            "이선수",
            "175"
          ],
          [
            "B",
            "박선수",
            "188"
          ],
          [
            "B",
            "최선수",
            "182"
          ]
        ]
      }
    ]
  },
  {
    "id": 10244,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 45,
    "title": "아래 EMP 테이블에 대한 SQL 의 실행 결과로 옳은 것은?",
    "options": [
      "800",
      "1600",
      "2975",
      "오류가 발생한다."
    ],
    "correctIndex": 2,
    "explanation": "WHERE EMPNO = 7566 조건으로 사번 7566 (JONES) 한 행만 선택되고 SAL = 2975 가 SUM 으로 집계되어 2975 가 반환된다. ① 800, ② 1600 은 다른 사번 행의 SAL 이며 본 SQL 결과가 아니다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP 테이블",
        "headers": [
          "EMPNO",
          "ENAME",
          "SAL"
        ],
        "rows": [
          [
            "7369",
            "SMITH",
            "800"
          ],
          [
            "7499",
            "ALLEN",
            "1600"
          ],
          [
            "7521",
            "WARD",
            "1250"
          ],
          [
            "7566",
            "JONES",
            "2975"
          ],
          [
            "7654",
            "MARTIN",
            "1250"
          ],
          [
            "7698",
            "BLAKE",
            "2850"
          ],
          [
            "7782",
            "CLARK",
            "2450"
          ],
          [
            "7839",
            "KING",
            "5000"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT SUM(SAL)\nFROM   EMP\nWHERE  EMPNO = 7566;"
      }
    ]
  },
  {
    "id": 10245,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 46,
    "title": "아래 EMP 테이블에 대한 SQL 의 실행 결과 정렬로 옳은 것은?",
    "options": [
      "NULL 이 먼저 출력된다.",
      "SAL 오름차순 정렬 후 NULL 이 마지막에 출력된다.",
      "NULLS 옵션은 무시된다.",
      "오류가 발생한다."
    ],
    "correctIndex": 1,
    "explanation": "`ORDER BY SAL` 은 기본 오름차순(ASC). `NULLS LAST` 옵션은 정렬 후 NULL 값을 결과의 마지막에 배치한다. 본 데이터에서 출력 순서: SAL=2000(이순신) → 3000(홍길동) → 5000(강감찬) → NULL(박문수). ① 은 NULLS FIRST 일 때의 결과, ③ NULLS LAST 는 무시되지 않으며, ④ Oracle 은 NULLS LAST 를 지원해 오류가 나지 않는다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP 테이블",
        "headers": [
          "NAME",
          "SAL"
        ],
        "rows": [
          [
            "홍길동",
            "3000"
          ],
          [
            "이순신",
            "2000"
          ],
          [
            "강감찬",
            "5000"
          ],
          [
            "박문수",
            "(NULL)"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT NAME\nFROM   EMP\nORDER BY SAL NULLS LAST;"
      }
    ]
  },
  {
    "id": 10246,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 47,
    "title": "아래 SALES 테이블에서 매출액이 높은 순서대로 직원을 조회하는 쿼리 중 수정이 필요한 부분은?",
    "options": [
      "SELECT 절에 직원, 매출 컬럼을 명시적으로 나열해야 한다.",
      "FROM 절을 SALES 가 아닌 EMP_SALES 뷰로 교체해야 한다.",
      "WHERE 절에 매출 IS NOT NULL 조건을 추가해야 한다.",
      "ORDER BY 절에 DESC 를 추가해야 한다."
    ],
    "correctIndex": 3,
    "explanation": "`ORDER BY 매출` 은 기본 오름차순(ASC) 정렬이라 \"매출이 높은 순\" (내림차순) 으로 출력하려면 `ORDER BY 매출 DESC` 처럼 `DESC` 를 명시해야 한다. ① SELECT 절은 정상, ② SALES 테이블 그대로 사용, ③ NULL 처리는 본 문항과 무관.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "SALES 테이블",
        "headers": [
          "직원",
          "매출"
        ],
        "rows": [
          [
            "김철수",
            "5000"
          ],
          [
            "이영희",
            "8000"
          ],
          [
            "박민수",
            "3000"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT 직원, 매출\nFROM   SALES\nORDER BY 매출;"
      }
    ]
  },
  {
    "id": 10247,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 48,
    "title": "지역이 서울 2행, 부산 1행인 판매 테이블에 대한 SQL ㉠, ㉡, ㉢ 의 결과 행 수로 옳은 것은?",
    "options": [
      "3, 3, 3",
      "3, 5, 3",
      "3, 5, 2",
      "2, 4, 3"
    ],
    "correctIndex": 1,
    "explanation": "㉠ 은 지역별 집계 2행(서울·부산)과 () 로 만든 전체 합계 1행을 합쳐 3행이다. GROUPING SETS 는 적힌 묶음마다 결과를 따로 만들어 붙이므로, ㉡ 처럼 (지역) 을 두 번 쓰면 지역별 행이 두 번 나와 2 + 2 + 1 = 5행이다(중복을 없애 주지 않는다). ㉢ 의 ROLLUP(지역) 은 GROUPING SETS((지역), ()) 와 같아 3행이다. 정답은 ②번이다. ① 은 같은 묶음을 두 번 써도 한 번만 계산된다고 본 것, ③ 은 ROLLUP 이 합계 행을 만들지 않는다고 본 것, ④ 는 () 를 합계로 보지 않은 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT 지역, SUM(수량) FROM 판매\nGROUP  BY GROUPING SETS ((지역), ());\n-- ㉡\nSELECT 지역, SUM(수량) FROM 판매\nGROUP  BY GROUPING SETS\n          ((지역), (지역), ());\n-- ㉢\nSELECT 지역, SUM(수량) FROM 판매\nGROUP  BY ROLLUP(지역);"
      }
    ]
  },
  {
    "id": 10248,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 49,
    "title": "아래 판매 테이블에 대해 SQL 의 GROUP BY 빈칸에 ㉠, ㉡, ㉢ 을 각각 넣었을 때 결과 행 수로 옳은 것은?",
    "options": [
      "㉠ 8, ㉡ 10, ㉢ 5",
      "㉠ 10, ㉡ 7, ㉢ 5",
      "㉠ 10, ㉡ 8, ㉢ 6",
      "㉠ 10, ㉡ 8, ㉢ 5"
    ],
    "correctIndex": 3,
    "explanation": "먼저 (지역, 분기) 조합을 센다. 서울 1Q 는 두 행이지만 한 그룹이라 서울-1Q, 서울-2Q, 부산-1Q, 대구-2Q 의 4개다. 지역은 3개, 분기는 2개다. ㉠ CUBE(지역, 분기) 는 (지역, 분기)·(지역)·(분기)·() 를 모두 만들어 4 + 3 + 2 + 1 = 10행이다. ㉡ ROLLUP(지역, 분기) 는 (지역, 분기)·(지역)·() 만 만들어 4 + 3 + 1 = 8행이다. ㉢ GROUPING SETS(지역, 분기) 는 적은 집합만, 곧 (지역)·(분기) 를 만들어 3 + 2 = 5행이고 전체 합계는 없다. 정답은 ④번이다. ① 은 CUBE 와 ROLLUP 을 바꿔 본 값, ② 는 ROLLUP 의 소계를 분기 기준(2개)으로 센 값(ROLLUP(분기, 지역) 이면 7), ③ 은 GROUPING SETS 에도 전체 합계 행이 붙는다고 본 값이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "판매",
        "headers": [
          "지역",
          "분기",
          "금액"
        ],
        "rows": [
          [
            "서울",
            "1Q",
            "10"
          ],
          [
            "서울",
            "1Q",
            "15"
          ],
          [
            "서울",
            "2Q",
            "20"
          ],
          [
            "부산",
            "1Q",
            "30"
          ],
          [
            "대구",
            "2Q",
            "25"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT 지역, 분기, SUM(금액)\nFROM   판매\nGROUP BY (          );\n\n-- ㉠ CUBE(지역, 분기)\n-- ㉡ ROLLUP(지역, 분기)\n-- ㉢ GROUPING SETS(지역, 분기)"
      }
    ]
  },
  {
    "id": 10249,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 50,
    "title": "아래 SQL 수행 후 COUNT(*) 결과로 옳은 것은?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 2,
    "explanation": "UPDATE 로 COL2≤2 인 두 행의 COL1 이 4 로 갱신되고, DELETE 는 SP2 로 되돌려지므로 (4,2),(4,1),(3,4) 가 남는다. 마지막 INSERT (4,1) 가 더해져 COL1=4 인 행은 세 건이다. ① 1 은 ROLLBACK TO SP2 가 UPDATE 까지 되돌린다고 본 값, ② 2 는 마지막 INSERT 를 빠뜨린 값이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TAB1 초기 INSERT 직후",
        "headers": [
          "COL1",
          "COL2"
        ],
        "rows": [
          [
            "1",
            "2"
          ],
          [
            "2",
            "1"
          ],
          [
            "3",
            "4"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "CREATE TABLE TAB1 (COL1 NUMBER, COL2 NUMBER);\nINSERT INTO TAB1 VALUES (1, 2);\nINSERT INTO TAB1 VALUES (2, 1);\nINSERT INTO TAB1 VALUES (3, 4);\nSAVEPOINT SP1;\n\nUPDATE TAB1 SET COL1 = 4 WHERE COL2 <= 2;\nSAVEPOINT SP2;\n\nDELETE FROM TAB1 WHERE COL2 = 2;\nROLLBACK TO SAVEPOINT SP2;\n\nINSERT INTO TAB1 VALUES (4, 1);\nCOMMIT;\n\nSELECT COUNT(*) FROM TAB1 WHERE COL1 = 4;"
      }
    ]
  }
];
