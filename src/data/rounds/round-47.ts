// Auto-generated from PDF + blog + scripts/authored/round-47.json
// 제47회 — 2022년 11월 · 50문항
// ⚠ 직접 편집 금지. 출처별 데이터를 고친 뒤 'node scripts/build-quiz-bank.mjs' 재실행.
import type { QuizQuestion } from '../quizBank';

export const ROUND_47: QuizQuestion[] = [
  {
    "id": 10650,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "1과목",
    "number": 1,
    "title": "아래 설명에 해당하는 데이터 모델링 관점은?",
    "options": [
      "데이터 관점",
      "데이터와 프로세스의 상관 관점",
      "프로세스 관점",
      "보안 관점"
    ],
    "correctIndex": 1,
    "explanation": "데이터 모델링은 보는 시각에 따라 셋으로 나뉜다. 데이터 관점(①)은 어떤 데이터를 다루는지(What), 프로세스 관점(③)은 업무가 어떻게 처리되는지(How)에 집중한다. 데이터와 프로세스의 상관 관점(②)은 두 가지를 함께 보면서 업무 처리 방법에 따라 데이터가 어떤 영향을 받는지(Interaction)를 모델링한다. 설명이 바로 이 영향 관계라 정답은 ②번이다. ④ 보안 관점은 데이터 모델링의 세 관점에 들지 않는다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "업무가 처리하는 일의 방법에 따라 데이터가 어떻게 영향을 받는지 모델링한다."
      }
    ]
  },
  {
    "id": 10651,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "1과목",
    "number": 2,
    "title": "아래 ERD 해석 중 옳지 않은 것은? (고객은 여러 서비스를 이용하며 동일 서비스를 재이용할 수 있다.)",
    "options": [
      "고객과 서비스는 M:N 관계이다.",
      "서비스이용 엔터티가 중간 엔터티로 존재한다.",
      "서비스이용은 재사용할 수 없도록 제약되어 있다.",
      "같은 서비스의 재이용 이력이 별도 행으로 구분된다."
    ],
    "correctIndex": 2,
    "explanation": "서비스이용 엔터티의 PK가 (고객번호, 서비스번호, 이용일자) 세 컬럼으로 구성되어 있다는 점이 핵심이다. 이용일자가 PK에 들어가 있으면 같은 고객이 같은 서비스를 다른 날 다시 이용해도 행이 새로 생길 수 있다. 즉 재이용이 자유롭게 가능하다는 의미이므로 \"재사용할 수 없도록 제약되어 있다\"는 ③번이 옳지 않은 설명이 되어 정답이다. ① 고객 한 명이 여러 서비스를, 서비스 하나를 여러 고객이 이용하므로 M:N 이 맞고, ② 이 M:N 을 풀어 주는 중간(교차) 엔터티가 서비스이용이며, ④ 이용일자가 PK 에 있어 같은 서비스를 다시 이용하면 별도 행으로 남는다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "고객 엔터티",
        "headers": [
          "컬럼"
        ],
        "rows": [
          [
            "고객번호 (PK)"
          ],
          [
            "고객명"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "서비스이용 엔터티",
        "headers": [
          "컬럼"
        ],
        "rows": [
          [
            "고객번호 (PK, FK)"
          ],
          [
            "서비스번호 (PK, FK)"
          ],
          [
            "이용일자 (PK)"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "서비스 엔터티",
        "headers": [
          "컬럼"
        ],
        "rows": [
          [
            "서비스번호 (PK)"
          ],
          [
            "서비스명"
          ]
        ]
      }
    ]
  },
  {
    "id": 10652,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "1과목",
    "number": 3,
    "title": "파생속성에 해당하는 예로 적절한 것은?",
    "options": [
      "회원 ID",
      "생년월일",
      "상품 단가",
      "상품 총금액 (단가 × 수량)"
    ],
    "correctIndex": 3,
    "explanation": "다른 속성에서 계산되어 만들어지는 속성을 파생속성이라고 한다. ① 회원 ID·② 생년월일·③ 상품 단가는 시스템에 직접 입력되어 보관되는 기본속성이다. 반면 상품 총금액은 단가 × 수량으로 계산되어 도출되므로 파생속성이다. 정답은 ④번이다.",
    "_source": "authored"
  },
  {
    "id": 10653,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "1과목",
    "number": 4,
    "title": "아래 사원 테이블(기본키: 사번)에서 설명한 이상 현상을 없애려면 적용해야 할 정규화로 옳은 것은?",
    "options": [
      "제1정규화",
      "제2정규화",
      "제3정규화",
      "BCNF"
    ],
    "correctIndex": 2,
    "explanation": "세 문장은 차례로 갱신 이상, 삽입 이상, 삭제 이상이다. 원인은 사번 → 부서코드 → 부서명 처럼 키가 아닌 부서코드를 거쳐 부서명이 정해지는 이행 함수 종속이다. 이행 종속을 없애 부서(부서코드, 부서명)를 떼어 내는 것은 제3정규화다. 정답은 ③번이다. 칸마다 값이 하나라 제1정규형은 이미 만족하고, 기본키가 사번 하나라 부분 종속이 없어 제2정규형도 만족한다. BCNF 는 제3정규형을 만족한 뒤에 따지는 단계다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "사원",
        "headers": [
          "사번",
          "이름",
          "부서코드",
          "부서명"
        ],
        "rows": [
          [
            "101",
            "김",
            "D1",
            "영업"
          ],
          [
            "102",
            "이",
            "D1",
            "영업"
          ],
          [
            "103",
            "박",
            "D2",
            "인사"
          ]
        ]
      },
      {
        "type": "text",
        "content": "· 영업부 이름을 바꾸려면 D1 인 사원 행을 모두 고쳐야 한다.\n· 사원이 아직 없는 새 부서는 부서명을 저장할 곳이 없다.\n· 103 이 퇴사해 행을 지우면 D2 가 인사부라는 정보도 사라진다."
      }
    ]
  },
  {
    "id": 10654,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "1과목",
    "number": 5,
    "title": "아래 회원 테이블에서 주식별자의 조건(유일성·최소성·NOT NULL·불변성)을 모두 만족하는 것은?",
    "options": [
      "회원번호",
      "이메일",
      "회원번호 + 이메일",
      "전화"
    ],
    "correctIndex": 0,
    "explanation": "회원번호는 값이 모두 다르고(유일성), 비어 있는 값이 없으며(NOT NULL), 한 칼럼이라 더 줄일 것이 없고(최소성), 회원이 바꿀 수 있는 값도 아니다(불변성). 정답은 ①번이다. ② 이메일은 M2 가 NULL 이고 회원이 바꿀 수 있어 NOT NULL 과 불변성을 어긴다. ③ 은 회원번호만으로 이미 구별되는데 이메일을 덧붙여 최소성을 어긴다. ④ 전화는 M2 와 M3 이 2222 로 같아 유일성을 어긴다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "회원",
        "headers": [
          "회원번호",
          "이메일",
          "전화",
          "이름"
        ],
        "rows": [
          [
            "M1",
            "kim@a.kr",
            "1111",
            "김"
          ],
          [
            "M2",
            "NULL",
            "2222",
            "이"
          ],
          [
            "M3",
            "park@b.kr",
            "2222",
            "박"
          ],
          [
            "M4",
            "choi@c.kr",
            "4444",
            "최"
          ]
        ]
      },
      {
        "type": "text",
        "content": "이메일·전화는 회원이 마이페이지에서 언제든 바꿀 수 있다."
      }
    ]
  },
  {
    "id": 10655,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "1과목",
    "number": 6,
    "title": "아래 회원 슈퍼타입·서브타입을 테이블로 바꿀 때, Single Table(All in One), One To One, Plus(Super+Sub) 방식으로 만들어지는 테이블 수로 옳은 것은? (순서대로)",
    "options": [
      "1, 3, 4",
      "1, 4, 3",
      "3, 4, 1",
      "1, 4, 4"
    ],
    "correctIndex": 1,
    "explanation": "Single Table 은 슈퍼타입과 모든 서브타입의 속성을 한 테이블에 모아 1개다. One To One 은 슈퍼타입과 서브타입을 각각 테이블로 두어 회원 1개 + 서브타입 3개 = 4개다. Plus 는 서브타입마다 슈퍼타입 속성(이름·가입일)을 함께 넣은 테이블을 만들어 서브타입 수와 같은 3개다. 정답은 ②번이다. ① 은 One To One 과 Plus 를 바꿔 본 것, ③ 은 Single Table 을 서브타입별로 나눈다고 본 것, ④ 는 Plus 에도 슈퍼타입 테이블이 따로 남는다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "회원 슈퍼타입·서브타입",
        "mermaid": "erDiagram\n    회원 ||--o| 개인회원 : \"개인\"\n    회원 ||--o| 기업회원 : \"기업\"\n    회원 ||--o| 외국인회원 : \"외국인\"\n    회원 {\n        string 회원번호 PK\n        string 이름\n        date 가입일\n    }\n    개인회원 {\n        string 회원번호 PK\n        date 생년월일\n    }\n    기업회원 {\n        string 회원번호 PK\n        string 사업자번호\n    }\n    외국인회원 {\n        string 회원번호 PK\n        string 여권번호\n    }"
      }
    ]
  },
  {
    "id": 10656,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "1과목",
    "number": 7,
    "title": "회원 테이블은 칼럼이 60개다. 로그인할 때는 회원ID·비밀번호·최근로그인일시 3개 칼럼만 초당 수천 번 읽고, 나머지 프로필 칼럼을 함께 보는 화면은 그 1/10 수준이다. 가장 알맞은 설계는?",
    "options": [
      "칼럼 구성은 그대로 두고 회원ID 인덱스만 만든다.",
      "로그인에 쓰는 칼럼을 회원로그인 테이블로 떼어 회원과 1:1 로 둔다.",
      "가입 연도별로 행을 나누는 수평 분할을 한다.",
      "회원과 로그인이력 테이블을 하나로 합친다."
    ],
    "correctIndex": 1,
    "explanation": "자주 함께 읽는 칼럼이 일부뿐이고 나머지는 드물게 쓰이면, 그 칼럼만 따로 떼는 수직 분할이 알맞다. 로그인 테이블은 행이 작아져 한 블록에 많은 행이 들어가므로 같은 조회를 더 적은 I/O 로 처리하고, 프로필 수정과의 잠금 충돌도 줄어든다. 정답은 ②번이다. ① 은 인덱스로 행을 찾아도 결국 60칼럼짜리 큰 행을 읽어야 한다. ③ 수평 분할은 특정 기간의 행만 조회할 때 쓰는 방법이라 칼럼 문제를 풀지 못한다. ④ 는 행이 계속 쌓이는 이력과 합쳐 오히려 더 무거워진다.",
    "_source": "authored"
  },
  {
    "id": 10657,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "1과목",
    "number": 8,
    "title": "성능 모델링에 대한 설명으로 가장 적절한 것은?",
    "options": [
      "반정규화만 수행한다.",
      "정규화 없이 성능 모델만 설계한다.",
      "일반적으로 완전 정규화를 수행한 후 성능을 고려하여 반정규화를 수행한다.",
      "정규화는 성능과 무관하다."
    ],
    "correctIndex": 2,
    "explanation": "정규화는 데이터 중복을 줄이고 무결성을 높이는 작업이고, 반정규화는 성능을 위해 일부러 중복을 허용해 조회 속도를 끌어올리는 작업이다. 표준 절차는 먼저 정규화를 끝까지 수행해 깨끗한 모델을 만든 뒤, 실측되는 성능 이슈에 맞춰 필요한 부분만 반정규화하는 것이다. 처음부터 반정규화를 남발하면 데이터 정합성이 깨지기 쉽다. 정답은 ③번이다. ① 반정규화만 하거나 ② 정규화 없이 설계하면 중복과 이상 현상을 통제할 수 없고, ④ 정규화도 테이블 크기와 조인 수를 바꾸므로 성능과 무관하지 않다.",
    "_source": "authored"
  },
  {
    "id": 10658,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "1과목",
    "number": 9,
    "title": "아래 주문상세 테이블(기본키: 주문번호 + 상품번호)이 처음으로 만족하지 못하는 정규형과, 그 원인이 되는 함수 종속으로 옳은 것은?",
    "options": [
      "제1정규형, 상품번호 → 상품명",
      "제2정규형, 상품번호 → 상품명",
      "제3정규형, 분류코드 → 분류명",
      "BCNF, 분류코드 → 분류명"
    ],
    "correctIndex": 1,
    "explanation": "모든 칸에 값이 하나씩만 있으니 제1정규형은 만족한다. 그런데 상품명·분류코드는 기본키 일부인 상품번호만으로 정해져 부분 함수 종속이 있다. 그래서 처음 깨지는 것은 제2정규형이고, 원인은 상품번호 → 상품명 이다. 정답은 ②번이다. 분류코드 → 분류명 은 상품(상품번호, 상품명, 분류코드, 분류명)으로 떼어 낸 뒤에 남는 이행 종속이라 그다음 단계인 제3정규형에서 다룬다. ① 은 다중값이 없는데도 제1정규형을 어긴다고 본 것, ③·④ 는 더 낮은 단계의 부분 종속을 놓치고 이행 종속부터 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "주문상세(주문번호, 상품번호, 수량, 상품명, 분류코드, 분류명)\n예) O1, P1, 2, 볼펜, K1, 문구"
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
            "주문번호 + 상품번호",
            "수량"
          ],
          [
            "상품번호",
            "상품명, 분류코드"
          ],
          [
            "분류코드",
            "분류명"
          ]
        ]
      }
    ]
  },
  {
    "id": 10659,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "1과목",
    "number": 10,
    "title": "3단계 스키마 구조에서 아래 ㉠~㉢ 변경이 생겼을 때 고쳐야 하는 스키마를 순서대로 고른 것은?",
    "options": [
      "내부, 외부, 개념",
      "개념, 외부, 내부",
      "내부, 개념, 외부",
      "외부, 개념, 내부"
    ],
    "correctIndex": 0,
    "explanation": "내부 스키마는 실제 저장 구조(인덱스, 파일 배치 등)를, 외부 스키마는 사용자나 응용 프로그램이 보는 각자의 화면(뷰)을, 개념 스키마는 조직 전체가 함께 쓰는 테이블과 관계를 정의한다. ㉠ 은 저장 구조라 내부, ㉡ 은 한 부서가 보는 뷰라 외부, ㉢ 은 전사 테이블의 구조라 개념 스키마다. 정답은 ①번이다. ㉠ 처럼 내부 스키마가 바뀌어도 개념 스키마와 외부 스키마를 고칠 필요가 없는 것을 물리적 독립성이라 한다. ② 는 ㉠ 과 ㉢ 을 바꿔 본 것, ③ 은 뷰를 전사 구조로 본 것, ④ 는 세 단계를 모두 엇갈리게 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "㉠ 조회가 느려 주문 테이블에 인덱스를 만들고 저장 공간 배치를 바꿨다.\n㉡ 영업팀 화면에서만 쓰는, 고객 이름과 연락처만 보이는 뷰를 새로 만들었다.\n㉢ 회사 전체가 쓰는 고객 테이블에 '마케팅 수신 동의' 칼럼을 추가했다."
      }
    ]
  },
  {
    "id": 10660,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 11,
    "title": "주문 테이블에 (주문일자, 주문방법) 조합이 (D1, ON), (D1, OFF), (D2, ON), (D2, OFF) 네 가지 있다. 집계 SQL 의 결과가 9행이었다면 GROUP BY 에 쓴 것은?",
    "options": [
      "CUBE(주문일자, 주문방법)",
      "ROLLUP(주문일자, 주문방법)",
      "GROUPING SETS(주문일자, 주문방법)",
      "주문일자, 주문방법"
    ],
    "correctIndex": 0,
    "explanation": "조합별 행은 4개, 일자별 소계는 D1·D2 의 2개, 방법별 소계는 ON·OFF 의 2개, 전체 합계는 1개다. CUBE 는 이 모두를 만들어 4 + 2 + 2 + 1 = 9행이다. ROLLUP 은 방법별 소계가 없어 4 + 2 + 1 = 7행, GROUPING SETS(주문일자, 주문방법) 은 일자별·방법별 소계만 만들어 2 + 2 = 4행, 일반 GROUP BY 는 조합별 4행이다. 정답은 ①번이다. 이처럼 각 방식이 만드는 묶음을 알면 결과 행 수만 보고도 어떤 GROUP BY 를 썼는지 거꾸로 알 수 있다.",
    "_source": "authored"
  },
  {
    "id": 10661,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 12,
    "title": "첫 번째 컬럼 집계, 첫 번째+두 번째 컬럼 집계, 전체 집계가 필요한 SQL 로 적절한 것은?",
    "options": [
      "CUBE(평가항목, 평가)",
      "ROLLUP(평가항목, 평가)",
      "GROUPING SETS((평가항목, 평가), (평가항목), (평가))",
      "GROUP BY 평가항목"
    ],
    "correctIndex": 1,
    "explanation": "ROLLUP(A, B)는 오른쪽 컬럼부터 하나씩 빼 가며 (A, B), (A), () 세 가지 그룹을 만든다. 문제는 첫 컬럼 집계, 두 컬럼 조합 집계, 전체 집계가 필요하므로 정확히 ROLLUP이 만드는 세 가지 그룹과 일치한다. ① CUBE는 (B) 단독까지 추가로 만들어 결과 행이 더 많아 의도에 맞지 않는다. 정답은 ②번이다. ③ 은 전체 집계 () 가 빠지고 대신 (평가) 단독 집계가 들어 있으며, ④ GROUP BY 평가항목 은 첫 컬럼 집계 하나만 만든다.",
    "_source": "authored"
  },
  {
    "id": 10662,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 13,
    "title": "빈 테이블 T(C) 에 아래 SQL 을 순서대로 실행했을 때 마지막 SELECT 의 결과로 옳은 것은?",
    "options": [
      "1, 2, 4",
      "1, 2, 3, 4",
      "4",
      "1, 4"
    ],
    "correctIndex": 3,
    "explanation": "ROLLBACK TO S2 는 S2 이후의 UPDATE 만 되돌려 T 는 1, 2 가 된다. 이어서 3 을 넣으면 1, 2, 3 이다. ROLLBACK TO S1 은 S1 이후에 한 일을 모두 되돌린다. 2 와 3 의 INSERT 가 취소되어 1 만 남고, 4 를 넣은 뒤 COMMIT 하므로 결과는 1, 4 다. 정답은 ④번이다. ① 은 ROLLBACK TO S1 이 S2 이후만 되돌린다고 본 것, ② 는 저장점으로 돌아가도 INSERT 는 남는다고 본 것, ③ 은 ROLLBACK TO S1 이 트랜잭션 전체를 되돌린다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "INSERT INTO T VALUES (1);\nSAVEPOINT S1;\nINSERT INTO T VALUES (2);\nSAVEPOINT S2;\nUPDATE T SET C = C * 10;\nROLLBACK TO S2;\nINSERT INTO T VALUES (3);\nROLLBACK TO S1;\nINSERT INTO T VALUES (4);\nCOMMIT;\nSELECT C FROM T ORDER BY C;"
      }
    ]
  },
  {
    "id": 10663,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 14,
    "title": "주문·로그 테이블이 비어 있을 때 아래 SQL 을 순서대로 실행했다. 마지막 두 SELECT 의 결과로 옳은 것은? (Oracle 기준)",
    "options": [
      "1, 3",
      "3, 3",
      "1, 1",
      "1, 0"
    ],
    "correctIndex": 2,
    "explanation": "트리거 안에서 한 INSERT 는 트리거를 부른 문장과 같은 트랜잭션에 속한다. 그래서 ROLLBACK 하면 주문 1·2 와 함께 트리거가 남긴 로그 2건도 취소된다. 이어서 주문 3 과 그 로그 1건이 COMMIT 되어 결과는 1, 1 이다. 정답은 ③번이다. 트리거 안에서 COMMIT·ROLLBACK 을 쓸 수 없는 것도 이렇게 바깥 트랜잭션의 일부로 움직이기 때문이다. ① 은 트리거 기록은 따로 저장된다고 본 것, ② 는 ROLLBACK 이 아무것도 되돌리지 않는다고 본 것, ④ 는 COMMIT 뒤에는 트리거가 동작하지 않는다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "CREATE TRIGGER 주문_기록\nAFTER INSERT ON 주문\nFOR EACH ROW\nBEGIN\n  INSERT INTO 로그\n  VALUES (:NEW.주문번호, SYSDATE);\nEND;\n/\nINSERT INTO 주문 VALUES (1, 100);\nINSERT INTO 주문 VALUES (2, 200);\nROLLBACK;\nINSERT INTO 주문 VALUES (3, 300);\nCOMMIT;\nSELECT COUNT(*) FROM 주문;\nSELECT COUNT(*) FROM 로그;"
      }
    ]
  },
  {
    "id": 10664,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 15,
    "title": "SQL 분류에 대한 설명 중 적절하지 않은 것은?",
    "options": [
      "DDL 은 객체 정의를 변경한다.",
      "DCL 은 데이터베이스 구동과 종료를 수행한다.",
      "DML 은 데이터 조작을 수행한다.",
      "TCL 은 트랜잭션을 제어한다."
    ],
    "correctIndex": 1,
    "explanation": "SQL 명령은 역할에 따라 4가지로 분류된다. DDL은 객체 정의(CREATE/ALTER/DROP), DML은 데이터 조작(SELECT/INSERT/UPDATE/DELETE), DCL은 권한 제어(GRANT/REVOKE), TCL은 트랜잭션 제어(COMMIT/ROLLBACK)이다. DB 시작·종료(STARTUP/SHUTDOWN)는 DCL이 아닌 시스템 관리 명령에 해당한다. 따라서 \"DCL이 DB 구동·종료를 수행한다\"는 ②번 설명이 틀려서 정답이 된다. ①·③·④ 는 각각 DDL·DML·TCL 의 역할을 바르게 설명했다.",
    "_source": "authored"
  },
  {
    "id": 10665,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 16,
    "title": "아래 ERD 와 데이터에 대한 SQL ㉠~㉣ 의 결과로 옳은 것은? ('㉠ 행 수, ㉡ 행 수, ㉢ 값, ㉣ 값' 순서)",
    "options": [
      "3, 3, 1, NULL",
      "3, 4, 1, 1",
      "4, 4, 1, 0",
      "3, 4, 1, 0"
    ],
    "correctIndex": 3,
    "explanation": "ERD 에서 주문 쪽 끝이 동그라미 + 까마귀발이라 주문이 없는 고객(C3)이 있을 수 있다. 이런 관계는 조인 방식에 따라 결과가 달라진다. ㉠ INNER JOIN 은 짝이 있는 주문 3행만 나온다. ㉡ LEFT JOIN 은 주문 없는 C3 도 주문 칼럼 NULL 로 남아 4행이다. ㉢ 은 주문이 없는 고객 수라 C3 하나로 1 이다. ㉣ 은 C3 의 LEFT JOIN 결과 1행에서 주문번호가 NULL 이라 COUNT(O.주문번호) 는 0 이다(COUNT(*) 였다면 1). 정답은 ④번이다. ① 은 LEFT JOIN 도 짝 없는 행을 버린다고 보고 COUNT 가 NULL 을 돌려준다고 본 것, ② 는 COUNT(칼럼) 이 NULL 행도 센다고 본 것, ③ 은 INNER JOIN 에도 C3 가 남는다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "고객·주문 ERD (주문 쪽 0개 이상)",
        "mermaid": "erDiagram\n    고객 ||..o{ 주문 : \"주문함\"\n    고객 {\n        string 고객번호 PK\n    }\n    주문 {\n        string 주문번호 PK\n        string 고객번호 FK\n    }"
      },
      {
        "type": "text",
        "content": "고객: C1, C2, C3\n주문: (O1, C1), (O2, C1), (O3, C2)"
      },
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT * FROM 고객 C\nJOIN 주문 O ON C.고객번호 = O.고객번호;\n-- ㉡\nSELECT * FROM 고객 C\nLEFT JOIN 주문 O\n  ON C.고객번호 = O.고객번호;\n-- ㉢\nSELECT COUNT(*) FROM 고객 C\nWHERE NOT EXISTS\n  (SELECT 1 FROM 주문 O\n   WHERE O.고객번호 = C.고객번호);\n-- ㉣ C3 의 주문 수\nSELECT COUNT(O.주문번호)\nFROM 고객 C LEFT JOIN 주문 O\n  ON C.고객번호 = O.고객번호\nWHERE C.고객번호 = 'C3';"
      }
    ]
  },
  {
    "id": 10666,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 17,
    "title": "번호를 새로 매기려고 아래 ㉠~㉢ 을 썼다. T 가 비어 있을 때와, T 에 (구분 1, 번호 3), (구분 1, 번호 7) 이 있을 때의 결과로 옳은 것은? ('빈 T: ㉠, ㉡, ㉢ / 두 행: ㉠, ㉢' 순서)",
    "options": [
      "1, 1, 1 / 8, 3",
      "1, 공집합, 1 / 8, 3",
      "NULL, 공집합, 1 / 8, 8",
      "1, 공집합, 0 / 8, 2"
    ],
    "correctIndex": 1,
    "explanation": "GROUP BY 없는 집계는 대상 행이 없어도 1행을 돌려준다. 빈 T 에서 ㉠ 은 MAX 가 NULL, NULL + 1 도 NULL 이라 NVL 이 1 로 바꿔 1 이다. ㉢ 은 COUNT(*) 가 0 이라 1 이다. ㉡ 은 GROUP BY 가 있어 그룹이 하나도 없으니 공집합이 되고, 번호를 받지 못한다. 두 행이 있으면 ㉠ 은 7 + 1 = 8, ㉢ 은 2 + 1 = 3 이다. 행 수로 번호를 매기는 ㉢ 은 중간 번호가 비어 있으면 MAX 방식과 결과가 달라진다. 정답은 ②번이다. ① 은 GROUP BY 가 있어도 1행이 나온다고 본 것, ③ 은 NVL 이 MAX 에만 걸린다고 보고 ㉢ 을 MAX 처럼 계산한 것, ④ 는 COUNT 에 1 을 더하는 것을 놓친 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT NVL(MAX(번호) + 1, 1) FROM T;\n-- ㉡\nSELECT NVL(MAX(번호) + 1, 1) FROM T\nGROUP  BY 구분;\n-- ㉢\nSELECT COUNT(*) + 1 FROM T;"
      }
    ]
  },
  {
    "id": 10667,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 18,
    "title": "아래 SQL 의 PREV 컬럼을 채우는 데 사용된 식은?",
    "options": [
      "LAG(VAL)",
      "LEAD(VAL, 1, 0)",
      "LAG(VAL, 2, 0)",
      "LAG(VAL, 1, 0)"
    ],
    "correctIndex": 3,
    "explanation": "PARTITION BY 지점 이라 A(ID 1, 2, 4)와 B(ID 3, 5)를 따로 본다. 결과를 지점 안에서 보면 A 는 0, 100, 200, B 는 0, 300 으로 \"같은 지점의 바로 앞 행 값, 앞 행이 없으면 0\" 이다. LAG(값, 1, 0) 은 1행 앞의 값을 가져오고 앞 행이 없으면 세 번째 인자 0 을 돌려준다(④). ① LAG(VAL) 은 기본값이 없어 첫 행이 NULL 이다. ② LEAD 는 다음 행 값(A: 200, 400, 0)이다. ③ 2행 앞은 A 가 0, 0, 100 이다. 표의 ID 순서(1, 2, 3, 4, 5)대로 앞 행을 보면 ID 4 의 PREV 가 300 이어야 하는데 실제는 200 이므로, 지점별로 나누었다는 것을 결과에서 읽어 낼 수 있다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "매출 테이블",
        "headers": [
          "ID",
          "지점",
          "VAL"
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
            "200"
          ],
          [
            "3",
            "B",
            "300"
          ],
          [
            "4",
            "A",
            "400"
          ],
          [
            "5",
            "B",
            "500"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT ID, VAL,\n       (  ?  ) OVER (PARTITION BY 지점 ORDER BY ID) AS PREV\nFROM   매출\nORDER BY ID;"
      },
      {
        "type": "table",
        "caption": "실행 결과",
        "headers": [
          "ID",
          "VAL",
          "PREV"
        ],
        "rows": [
          [
            "1",
            "100",
            "0"
          ],
          [
            "2",
            "200",
            "100"
          ],
          [
            "3",
            "300",
            "0"
          ],
          [
            "4",
            "400",
            "200"
          ],
          [
            "5",
            "500",
            "300"
          ]
        ]
      }
    ]
  },
  {
    "id": 10668,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 19,
    "title": "아래 두 테이블 A, B 에 대한 조인 SQL 중 나머지 셋과 달리 오류가 발생하는 것은?",
    "options": [
      "SELECT * FROM A NATURAL JOIN B;",
      "SELECT * FROM A JOIN B USING(SRN_NO);",
      "SELECT * FROM A INNER JOIN B;",
      "SELECT * FROM A, B WHERE A.SRN_NO = B.SRN_NO;"
    ],
    "correctIndex": 2,
    "explanation": "A 와 B 의 공통 컬럼은 SRN_NO 하나뿐이다. ① NATURAL JOIN, ② USING(SRN_NO), ④ WHERE 조인은 모두 SRN_NO 가 1 로 같은 한 건을 반환한다. ④ 는 A.SRN_NO 와 B.SRN_NO 가 따로 나와 컬럼 수는 하나 많지만 반환하는 행은 같다. 반면 ③ 은 INNER JOIN 을 쓰면서 ON 이나 USING 으로 조인 조건을 주지 않아 문법 오류가 난다. ※ 복원 자료의 '결과가 다른 SQL' 은 ④ 의 컬럼 구성까지 다르다고 볼 여지가 있어, 문제 문장을 '오류가 발생하는 것' 으로 분명히 했다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "A 테이블",
        "headers": [
          "SRN_NO",
          "NAME"
        ],
        "rows": [
          [
            "1",
            "가"
          ],
          [
            "2",
            "나"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "B 테이블",
        "headers": [
          "SRN_NO",
          "GRADE"
        ],
        "rows": [
          [
            "1",
            "X"
          ],
          [
            "3",
            "Y"
          ]
        ]
      }
    ]
  },
  {
    "id": 10669,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 20,
    "title": "아래 ERD 와 데이터에 대한 SQL ㉠~㉣ 의 결과 행 수로 옳은 것은?",
    "options": [
      "3, 3, 1, 4",
      "3, 4, 2, 4",
      "3, 4, 1, 3",
      "3, 4, 1, 4"
    ],
    "correctIndex": 3,
    "explanation": "학생과 과목의 M:N 관계를 수강 엔터티로 풀었고, 수강의 주식별자는 학번 + 과목코드(식별 관계, 실선)다. 수강 쪽이 0개 이상이라 수강하지 않은 학생(S3)이 있을 수 있다. ㉠ 세 테이블 INNER JOIN 은 수강 3행만큼 3행이다. ㉡ LEFT JOIN 은 S3 가 NULL 로 더해져 4행, ㉢ 은 K2 를 신청한 S1 하나라 1행이다. ㉣ FULL OUTER JOIN 은 학생 쪽 S3 를 남기지만, 수강 행은 모두 학생이 있어 더 늘지 않아 ㉡ 과 같은 4행이다(식별 관계라 학생 없는 수강은 생길 수 없다). 정답은 ④번이다. ① 은 LEFT JOIN 에서 S3 를 놓친 것, ② 는 K2 수강을 2건으로 센 것, ③ 은 FULL OUTER JOIN 이 LEFT 보다 행이 적다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "학생·수강·과목 ERD (M:N 해소)",
        "mermaid": "erDiagram\n    학생 ||--o{ 수강 : \"신청\"\n    과목 ||--o{ 수강 : \"개설\"\n    학생 {\n        string 학번 PK\n    }\n    수강 {\n        string 학번 PK, FK\n        string 과목코드 PK, FK\n    }\n    과목 {\n        string 과목코드 PK\n    }"
      },
      {
        "type": "text",
        "content": "학생: S1, S2, S3 / 과목: K1, K2\n수강: (S1, K1), (S1, K2), (S2, K1)"
      },
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT * FROM 학생 S\nJOIN 수강 E ON S.학번 = E.학번\nJOIN 과목 K ON K.과목코드 = E.과목코드;\n-- ㉡\nSELECT * FROM 학생 S\nLEFT JOIN 수강 E ON S.학번 = E.학번;\n-- ㉢\nSELECT * FROM 수강\nWHERE 과목코드 = 'K2';\n-- ㉣\nSELECT * FROM 학생 S\nFULL OUTER JOIN 수강 E\n  ON S.학번 = E.학번;"
      }
    ]
  },
  {
    "id": 10670,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 21,
    "title": "아래 사원 테이블에 대한 계층형 SQL ㉠, ㉡, ㉢ 의 결과 행 수로 옳은 것은? (Oracle 기준)",
    "options": [
      "4, 2, 2",
      "4, 3, 3",
      "4, 3, 2",
      "4, 2, 3"
    ],
    "correctIndex": 2,
    "explanation": "㉠ 은 A 에서 시작해 B·D, B 아래 C 까지 4행이다. WHERE 절은 계층을 모두 펼친 뒤에 적용되므로, ㉡ 은 B 한 행만 빠지고 B 아래의 C 는 남아 3행이다. CONNECT BY 절의 조건은 펼치는 도중에 적용되어, ㉢ 은 B 를 연결하지 않으므로 B 아래의 C 까지 함께 빠져 A·D 의 2행이다. 정답은 ③번이다. ① 은 WHERE 도 아래 행까지 잘라 낸다고 본 것, ② 는 CONNECT BY 조건도 해당 행만 뺀다고 본 것, ④ 는 두 경우를 바꿔 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "사원",
        "headers": [
          "사번",
          "관리자",
          "이름"
        ],
        "rows": [
          [
            "1",
            "NULL",
            "A"
          ],
          [
            "2",
            "1",
            "B"
          ],
          [
            "3",
            "2",
            "C"
          ],
          [
            "4",
            "1",
            "D"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT 이름 FROM 사원\nSTART WITH 관리자 IS NULL\nCONNECT BY PRIOR 사번 = 관리자;\n-- ㉡\nSELECT 이름 FROM 사원\nWHERE  이름 <> 'B'\nSTART WITH 관리자 IS NULL\nCONNECT BY PRIOR 사번 = 관리자;\n-- ㉢\nSELECT 이름 FROM 사원\nSTART WITH 관리자 IS NULL\nCONNECT BY PRIOR 사번 = 관리자\n       AND 이름 <> 'B';"
      }
    ]
  },
  {
    "id": 10671,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 22,
    "title": "아래 PLAYER 테이블에 대한 SQL 과 다른 결과를 반환하는 것은? (각 팀의 최단신 선수의 PNAME 을 조회)",
    "options": [
      "SELECT P.PNAME FROM PLAYER P WHERE EXISTS (SELECT 1 FROM PLAYER X WHERE X.TEAM_ID = P.TEAM_ID AND X.HEIGHT = P.HEIGHT AND X.HEIGHT = (SELECT MIN(HEIGHT) FROM PLAYER WHERE TEAM_ID = P.TEAM_ID));",
      "SELECT P.PNAME FROM PLAYER P, (SELECT TEAM_ID, MIN(HEIGHT) AS MH FROM PLAYER GROUP BY TEAM_ID) M WHERE P.TEAM_ID = M.TEAM_ID AND P.HEIGHT = M.MH;",
      "SELECT P.PNAME FROM PLAYER P JOIN PLAYER X ON P.TEAM_ID = X.TEAM_ID GROUP BY P.PNAME, P.TEAM_ID, P.HEIGHT HAVING P.HEIGHT = MIN(X.HEIGHT);",
      "SELECT P.PNAME FROM PLAYER P WHERE EXISTS (SELECT 1 FROM PLAYER X WHERE X.TEAM_ID = P.TEAM_ID);"
    ],
    "correctIndex": 3,
    "explanation": "원본 SQL 은 `(TEAM_ID, HEIGHT) IN (SELECT TEAM_ID, MIN(HEIGHT) ...)` 으로 \"각 팀의 최단신 선수\" 를 조회한다. ① 상관 서브쿼리, ② 인라인 뷰 조인, ③ JOIN + HAVING 형태로 모두 같은 결과를 낸다. ④ 는 단순히 \"같은 TEAM_ID 행이 존재하는지\" 만 확인하므로 PLAYER 테이블의 선수 5명이 모두 반환되어 결과가 다르다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "PLAYER 테이블",
        "headers": [
          "TEAM_ID",
          "PNAME",
          "HEIGHT"
        ],
        "rows": [
          [
            "T01",
            "김철수",
            "175"
          ],
          [
            "T01",
            "이영희",
            "180"
          ],
          [
            "T01",
            "박민수",
            "175"
          ],
          [
            "T02",
            "최정훈",
            "182"
          ],
          [
            "T02",
            "강동원",
            "178"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT P.PNAME\nFROM   PLAYER P\nWHERE  (TEAM_ID, HEIGHT) IN (\n    SELECT TEAM_ID, MIN(HEIGHT)\n    FROM   PLAYER\n    GROUP BY TEAM_ID\n);"
      }
    ]
  },
  {
    "id": 10672,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 23,
    "title": "아래 SQL 이 의미하는 것으로 적절한 것은?",
    "options": [
      "팀의 사원 수가 가장 많은 팀",
      "팀의 사원 총 연봉이 가장 높은 팀",
      "팀의 평균 연봉이 가장 높은 팀",
      "팀의 최고 연봉 사원이 속한 팀"
    ],
    "correctIndex": 1,
    "explanation": "가장 안쪽 인라인 뷰는 팀별로 사원의 연봉을 모두 더한 총급여를 만든 뒤 총급여 내림차순으로 정렬한다. 그 위 인라인 뷰에서 ROWNUM = 1로 첫 행, 즉 총급여가 가장 큰 팀의 팀번호 하나만 뽑는다. 마지막으로 그 팀번호와 일치하는 팀의 팀명을 조회한다. 따라서 사원 연봉 합계가 가장 큰 팀의 이름이 결과로 나오므로 정답은 ②번이다. ① 사원 수라면 COUNT(*), ③ 평균 연봉이라면 AVG(연봉) 로 정렬했어야 하고, ④ 최고 연봉 사원의 팀을 찾으려면 팀별 합계가 아니라 MAX(연봉) 이나 사원 단위 정렬이 필요하다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT 팀명\nFROM   팀\nWHERE  팀번호 = (SELECT 팀번호 FROM (SELECT 팀번호, SUM(연봉) AS 총급여 FROM 사원 GROUP BY 팀번호 ORDER BY 2 DESC) WHERE ROWNUM = 1);"
      }
    ]
  },
  {
    "id": 10673,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 24,
    "title": "아래 성적 테이블에서 점수가 10 이상 50 이하인 학생(4명)만 조회하는 WHERE 조건으로 옳은 것은?",
    "options": [
      "점수 >= 10 AND 점수 < 50",
      "점수 BETWEEN 50 AND 10",
      "NOT (점수 < 10 OR 점수 > 50)",
      "점수 IN (10, 50)"
    ],
    "correctIndex": 2,
    "explanation": "10 이상 50 이하에 드는 학생은 S1(10), S2(50), S6(30), S7(50) 4명이다. ③ NOT (점수 < 10 OR 점수 > 50) 은 10 미만도 50 초과도 아닌 행, 곧 10 이상 50 이하를 고르므로 정확히 이 4명이다. 점수가 NULL 인 S5 는 괄호 안이 UNKNOWN 이라 NOT 을 붙여도 UNKNOWN 이어서 빠진다. ① 은 < 50 이라 50점인 S2·S7 이 빠져 2명이다. ② BETWEEN 50 AND 10 은 '50 이상이고 10 이하' 라는 뜻이라 만족하는 값이 없어 0명이다(BETWEEN 은 작은 값을 앞에 써야 한다). ④ IN (10, 50) 은 10 과 50 두 값만 골라 S1·S2·S7 3명이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "성적",
        "headers": [
          "학번",
          "점수"
        ],
        "rows": [
          [
            "S1",
            "10"
          ],
          [
            "S2",
            "50"
          ],
          [
            "S3",
            "51"
          ],
          [
            "S4",
            "9"
          ],
          [
            "S5",
            "NULL"
          ],
          [
            "S6",
            "30"
          ],
          [
            "S7",
            "50"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT 학번\nFROM   성적\nWHERE  (  ?  );"
      }
    ]
  },
  {
    "id": 10674,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 25,
    "title": "내림차순 정렬을 수행하는 SQL 에서 수정이 필요한 부분은?",
    "options": [
      "SELECT 절",
      "FROM 절",
      "WHERE 절",
      "ORDER BY 절에 DESC 추가"
    ],
    "correctIndex": 3,
    "explanation": "ORDER BY는 기본적으로 오름차순(ASC)으로 정렬한다. 내림차순으로 바꾸려면 컬럼 뒤에 명시적으로 DESC 키워드를 붙여야 한다. ①·②·③ 의 SELECT/FROM/WHERE 절은 정렬과 무관하므로 정답은 ④번이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT ... FROM ... WHERE ... ORDER BY A;"
      }
    ]
  },
  {
    "id": 10675,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 26,
    "title": "아래 T 테이블에 대한 SQL 의 결과(R1, R2)로 옳은 것은?",
    "options": [
      "0, 44",
      "44, 44",
      "32, 44",
      "32, 32"
    ],
    "correctIndex": 2,
    "explanation": "R1 은 행마다 GRADE + RANK 를 먼저 계산한다. 25, NULL, NULL, 7 이 되는데 NULL 이 섞인 덧셈은 NULL 이기 때문이다. SUM 은 NULL 을 빼고 더해 32 이고, NULL 이 아니므로 CASE 의 ELSE 로 가 R1 = 32 다. R2 는 컬럼별로 먼저 합친다. SUM(GRADE) = 12 + 7 + 3 = 22, SUM(RANK) = 13 + 5 + 4 = 22 라 R2 = 44 다. 정답은 ③번이다. ① 은 NULL 이 하나라도 있으면 SUM 전체가 NULL 이 된다고 보고 THEN 0 으로 간 값, ② 는 행 단위 덧셈에서도 NULL 을 0 으로 본 값, ④ 는 R2 도 NULL 이 있는 행을 통째로 뺀다고 본 값이다. 더하는 순서(행 먼저냐 컬럼 먼저냐)에 따라 NULL 의 영향이 달라진다는 점이 핵심이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T 테이블",
        "headers": [
          "GRADE",
          "RANK"
        ],
        "rows": [
          [
            "12",
            "13"
          ],
          [
            "NULL",
            "5"
          ],
          [
            "7",
            "NULL"
          ],
          [
            "3",
            "4"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT CASE WHEN SUM(GRADE + RANK) IS NULL THEN 0\n            ELSE SUM(GRADE + RANK) END AS R1,\n       SUM(GRADE) + SUM(RANK) AS R2\nFROM   T;"
      }
    ]
  },
  {
    "id": 10676,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 27,
    "title": "아래 SQL 의 결과 등급은?",
    "options": [
      "GOLD",
      "SILVER",
      "BRONZE",
      "공집합"
    ],
    "correctIndex": 1,
    "explanation": "인라인 뷰 B는 PLAYER 테이블에서 가장 큰 점수를 MAX_SCORE로 만들어 한 행만 반환한다. PLAYER의 SCORE 최대값은 75 이고, 이 값이 GRADE_TABLE 의 LOWER ≤ 75 ≤ UPPER 구간에 들어가는 행을 찾으면 SILVER(50~79) 구간이 매칭된다. 따라서 정답은 ②번이다. ① GOLD 는 80 이상이어야 하고, ③ BRONZE 는 최고 점수가 아니라 최저 점수 30 에 해당하는 등급이며, ④ 75 가 들어가는 구간이 있으므로 공집합이 아니다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "GRADE_TABLE 테이블",
        "headers": [
          "GRADE",
          "LOWER",
          "UPPER"
        ],
        "rows": [
          [
            "BRONZE",
            "0",
            "49"
          ],
          [
            "SILVER",
            "50",
            "79"
          ],
          [
            "GOLD",
            "80",
            "100"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "PLAYER 테이블",
        "headers": [
          "PLAYER_ID",
          "SCORE"
        ],
        "rows": [
          [
            "P01",
            "30"
          ],
          [
            "P02",
            "60"
          ],
          [
            "P03",
            "75"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT GRADE FROM GRADE_TABLE A,\n  (SELECT MAX(SCORE) AS MAX_SCORE FROM PLAYER) B\nWHERE A.LOWER <= B.MAX_SCORE AND A.UPPER >= B.MAX_SCORE;"
      }
    ]
  },
  {
    "id": 10677,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 28,
    "title": "아래 세 테이블 A, B, C 에 대한 집합 연산 SQL 의 결과로 옳은 것은?",
    "options": [
      "1, 3, 5",
      "1, 2, 3",
      "2, 4, 6",
      "공집합"
    ],
    "correctIndex": 0,
    "explanation": "집합 연산자는 위에서부터 차례로 적용된다. 먼저 A UNION ALL B 로 중복을 남긴 채 합치면 1, 2, 3, 3, 4, 5 가 된다. 여기서 MINUS C 로 C 에 있는 2, 4, 6 을 빼면 1, 3, 3, 5 가 남고, MINUS 는 중복을 없애므로 결과는 1, 3, 5 다(①). ② 1, 2, 3 은 A 만 본 값, ③ 2, 4, 6 은 C 자체이고, C 에 없는 1·3·5 가 남으므로 ④ 공집합도 아니다.",
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
          ]
        ]
      },
      {
        "type": "table",
        "caption": "B 테이블",
        "headers": [
          "COL1"
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
          ]
        ]
      },
      {
        "type": "table",
        "caption": "C 테이블",
        "headers": [
          "COL1"
        ],
        "rows": [
          [
            "2"
          ],
          [
            "4"
          ],
          [
            "6"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT COL1 FROM A\nUNION ALL\nSELECT COL1 FROM B\nMINUS\nSELECT COL1 FROM C;"
      }
    ]
  },
  {
    "id": 10678,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 29,
    "title": "아래 MERGE 구문을 수행한 뒤 A 테이블을 조회한 결과(COUNT(*), SUM(V))로 옳은 것은?",
    "options": [
      "5, 155",
      "5, 115",
      "6, 115",
      "6, 150"
    ],
    "correctIndex": 1,
    "explanation": "MERGE 는 ON 조건으로 A(대상)와 B(원본)를 짝지은 뒤 짝이 있으면 UPDATE, 없으면 INSERT 를 하는데, 이 문제는 두 절에 모두 WHERE 가 붙어 있다. 행별로 보면 ID 1 은 15 > 10 이 참이라 15 로 바뀐다. ID 2 는 B 에 없어 MERGE 대상이 아니므로 20 그대로 남는다. ID 3 은 25 > 30 이 거짓이라 30 그대로다. ID 4 는 40 > NULL 이 UNKNOWN 이라 UPDATE 되지 않고 NULL 로 남는다. B 에만 있는 ID 5 는 V 가 50 이라 INSERT 되고, ID 6 은 V 가 NULL 이라 INSERT 의 WHERE 에 걸려 들어가지 않는다. 최종 A 는 (1, 15), (2, 20), (3, 30), (4, NULL), (5, 50) 이므로 COUNT(*) 는 NULL 행까지 센 5, SUM(V) 는 NULL 을 뺀 15 + 20 + 30 + 50 = 115 다. 정답은 ②번이다. ① 5, 155 는 NULL 과의 비교를 참으로 보고 ID 4 를 40 으로 바꾼 값, ③ 6, 115 는 INSERT 의 WHERE 를 놓쳐 ID 6 을 넣은 값, ④ 6, 150 은 두 WHERE 를 모두 무시해 ID 3·4 를 25·40 으로 바꾸고 ID 6 까지 넣은 값이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "A 테이블 (대상)",
        "headers": [
          "ID",
          "V"
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
            "30"
          ],
          [
            "4",
            "NULL"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "B 테이블 (원본)",
        "headers": [
          "ID",
          "V"
        ],
        "rows": [
          [
            "1",
            "15"
          ],
          [
            "3",
            "25"
          ],
          [
            "4",
            "40"
          ],
          [
            "5",
            "50"
          ],
          [
            "6",
            "NULL"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "MERGE INTO A USING B ON (A.ID = B.ID)\nWHEN MATCHED THEN\n  UPDATE SET A.V = B.V WHERE B.V > A.V\nWHEN NOT MATCHED THEN\n  INSERT (ID, V) VALUES (B.ID, B.V) WHERE B.V IS NOT NULL;\n\nSELECT COUNT(*), SUM(V) FROM A;"
      }
    ]
  },
  {
    "id": 10679,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 30,
    "title": "아래 ERD 와 데이터에 대한 SQL ㉠, ㉡ 의 결과로 옳은 것은? ('㉠ 행 수, ㉠ 의 기획 부서 값, ㉡ 행 수' 순서)",
    "options": [
      "3, 0, 2",
      "3, NULL, 2",
      "2, NULL, 2",
      "3, NULL, 3"
    ],
    "correctIndex": 1,
    "explanation": "ERD 에서 사원 쪽이 0명 이상이라 사원이 없는 부서(기획)가 있을 수 있다. ㉠ 은 부서 테이블의 행마다 스칼라 서브쿼리로 최고 급여를 구하므로 부서 3행이 모두 나오고, 사원이 없는 기획은 서브쿼리 결과가 없어 NULL 이다. ㉡ 은 INNER JOIN 뒤에 묶어 사원이 있는 영업·인사 2행만 나온다. 같은 '부서별 최고 급여' 라도 사원 없는 부서를 보여 줄지에 따라 방식을 골라야 한다. 정답은 ②번이다. ① 은 결과가 없는 스칼라 서브쿼리를 0 으로 본 것, ③ 은 스칼라 서브쿼리도 행을 버린다고 본 것, ④ 는 INNER JOIN 에도 기획이 남는다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "부서·사원 ERD (사원 쪽 0명 이상)",
        "mermaid": "erDiagram\n    부서 ||..o{ 사원 : \"소속\"\n    부서 {\n        string 부서코드 PK\n        string 부서명\n    }\n    사원 {\n        string 사번 PK\n        string 부서코드 FK\n        int 급여\n    }"
      },
      {
        "type": "text",
        "content": "부서: (D1, 영업), (D2, 인사), (D3, 기획)\n사원: (김, D1, 300), (이, D1, 500), (박, D2, 400)"
      },
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT D.부서명,\n       (SELECT MAX(E.급여)\n        FROM   사원 E\n        WHERE  E.부서코드 = D.부서코드)\nFROM   부서 D;\n-- ㉡\nSELECT D.부서명, MAX(E.급여)\nFROM   부서 D JOIN 사원 E\n  ON D.부서코드 = E.부서코드\nGROUP  BY D.부서명;"
      }
    ]
  },
  {
    "id": 10680,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 31,
    "title": "아래 SQL 의 결과로 옳은 것은?",
    "options": [
      "10",
      "15",
      "20",
      "NULL"
    ],
    "correctIndex": 2,
    "explanation": "`KEEP (DENSE_RANK FIRST ORDER BY ...)` 구문은 \"정렬 결과의 1순위 그룹\"만 골라낸 뒤 그 안에서 집계 함수를 적용한다. 여기서는 COL2 DESC 정렬 시 COL2 = 1이 1순위 그룹이고, 그 안에 COL1 = 10과 20 두 행이 들어 있다. MAX(COL1)을 적용하면 20이 반환되어 정답은 ③번이다. ① 10 은 MAX 대신 MIN 을, ② 15 는 AVG 를 적용한 값이고, 1순위 그룹에 값이 있으므로 ④ NULL 이 되지 않는다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT MAX(COL1) KEEP (DENSE_RANK FIRST ORDER BY COL2 DESC)\nFROM T;"
      },
      {
        "type": "table",
        "headers": [
          "COL1",
          "COL2"
        ],
        "rows": [
          [
            "10",
            "1"
          ],
          [
            "20",
            "1"
          ]
        ],
        "caption": "T 테이블"
      }
    ]
  },
  {
    "id": 10681,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 32,
    "title": "아래 사원 테이블에 대한 SQL 결과에서 H 의 R1, R2, R3 값으로 옳은 것은?",
    "options": [
      "R1 3, R2 2, R3 3",
      "R1 2, R2 2, R3 3",
      "R1 3, R2 3, R3 3",
      "R1 4, R2 3, R3 4"
    ],
    "correctIndex": 0,
    "explanation": "H 는 개발 부서라 개발 부서 안에서만 순위를 매긴다. NULLS LAST 라 급여가 NULL 인 F 는 맨 뒤로 가고, 순서는 E(400), G(400), H(350), F(NULL) 다. RANK 는 E·G 를 공동 1위로 두고 두 자리를 차지한 다음 순위를 3으로 건너뛰어 H 가 3, DENSE_RANK 는 건너뛰지 않아 H 가 2, ROW_NUMBER 는 동점이어도 이름 순으로 E 1, G 2 를 매겨 H 가 3 이다. 정답은 ①번이다. ② 는 RANK 도 순위를 건너뛰지 않는다고 본 값, ③ 은 DENSE_RANK 도 건너뛴다고 본 값, ④ 는 NULLS LAST 를 놓치고 Oracle 기본처럼 내림차순에서 NULL 을 맨 앞에 둔 값(F 가 1위가 되어 하나씩 밀림)이다.",
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
            "A",
            "영업",
            "300"
          ],
          [
            "B",
            "영업",
            "300"
          ],
          [
            "C",
            "영업",
            "250"
          ],
          [
            "D",
            "영업",
            "200"
          ],
          [
            "E",
            "개발",
            "400"
          ],
          [
            "F",
            "개발",
            "NULL"
          ],
          [
            "G",
            "개발",
            "400"
          ],
          [
            "H",
            "개발",
            "350"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT 이름,\n  RANK() OVER (\n    PARTITION BY 부서\n    ORDER BY 급여 DESC NULLS LAST\n  ) AS R1,\n  DENSE_RANK() OVER (\n    PARTITION BY 부서\n    ORDER BY 급여 DESC NULLS LAST\n  ) AS R2,\n  ROW_NUMBER() OVER (\n    PARTITION BY 부서\n    ORDER BY 급여 DESC NULLS LAST, 이름\n  ) AS R3\nFROM 사원;"
      }
    ]
  },
  {
    "id": 10682,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 33,
    "title": "아래 점수 테이블에 대한 SQL 에서 C 행의 R, P, CD 값으로 옳은 것은? (Oracle 기준)",
    "options": [
      "R 0.2, P 0.5, CD 0.6",
      "R 0.2, P 0.25, CD 0.8",
      "R 0.2, P 0.25, CD 0.6",
      "R 0.2, P 0.4, CD 0.8"
    ],
    "correctIndex": 1,
    "explanation": "점수 합계가 100 이라 C 의 RATIO_TO_REPORT 는 20 / 100 = 0.2 다. PERCENT_RANK 는 (RANK - 1) / (전체 행 수 - 1) 이다. 20점인 B, C, E 는 모두 RANK 가 2 라서 (2 - 1) / (5 - 1) = 0.25 다. CUME_DIST 는 '현재 값 이하인 행 수 / 전체 행 수' 다. 20 이하는 A, B, C, E 네 행이라 4 / 5 = 0.8 이다. 정답은 ②번이다. ① 은 같은 값이 여러 행일 때 행 위치로 계산한 것, ③ 은 CUME_DIST 를 현재 행까지만 센 것, ④ 는 PERCENT_RANK 를 '순위 / 전체 행 수' 로 본 것이다.",
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
            "A",
            "10"
          ],
          [
            "B",
            "20"
          ],
          [
            "C",
            "20"
          ],
          [
            "D",
            "30"
          ],
          [
            "E",
            "20"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT 이름,\n       RATIO_TO_REPORT(점수)\n         OVER () AS R,\n       PERCENT_RANK()\n         OVER (ORDER BY 점수) AS P,\n       CUME_DIST()\n         OVER (ORDER BY 점수) AS CD\nFROM   점수;"
      }
    ]
  },
  {
    "id": 10683,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 34,
    "title": "A 의 값이 1, 1, 2, 3, NULL 이고 B 의 값이 1, 3, 3, NULL 일 때, 아래 SQL ㉠, ㉡, ㉢ 의 결과 행 수로 옳은 것은?",
    "options": [
      "2, 3, 1",
      "3, 4, 2",
      "3, 4, 1",
      "2, 4, 1"
    ],
    "correctIndex": 2,
    "explanation": "집합 연산자는 중복을 없애고, 비교할 때 NULL 끼리를 같은 값으로 본다(WHERE 의 = 비교와 다르다). ㉠ INTERSECT 는 양쪽에 모두 있는 1, 3, NULL 의 3행이다. ㉡ UNION 은 1, 2, 3, NULL 의 4행이다. ㉢ MINUS 는 A 에만 있는 2 하나라 1행이다. 정답은 ③번이다. ① 은 NULL 이 서로 같지 않다고 보아 교집합·합집합에서 빼거나 하나로 합치지 않은 것, ② 는 MINUS 에서 NULL 도 남는다고 본 것, ④ 는 교집합에서만 NULL 을 뺀 것이다. PostgreSQL 에서는 MINUS 대신 EXCEPT 를 쓴다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT 값 FROM A\nINTERSECT\nSELECT 값 FROM B;\n-- ㉡\nSELECT 값 FROM A\nUNION\nSELECT 값 FROM B;\n-- ㉢\nSELECT 값 FROM A\nMINUS\nSELECT 값 FROM B;"
      }
    ]
  },
  {
    "id": 10684,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 35,
    "title": "아래 자기 참조 ERD 와 데이터에 대한 SQL ㉠~㉣ 의 결과로 옳은 것은? ('㉠ 행 수, ㉡ 행 수, ㉢ 값, ㉣ 행 수' 순서)",
    "options": [
      "1, 0, 2, 3",
      "1, 1, 2, 3",
      "1, 0, 1, 2",
      "0, 0, 2, 3"
    ],
    "correctIndex": 0,
    "explanation": "ERD 는 사원이 다른 사원(관리자)을 참조하는 자기 참조 관계이고, 관리자 쪽이 선택이라 관리자사번에 NULL 이 들어갈 수 있다. NULL 인지는 ㉠ 처럼 IS NULL 로 확인해야 해 김 1행이 나오고, ㉡ 의 = NULL 은 늘 UNKNOWN 이라 0행이다. ㉢ 은 자기를 관리자로 가진 사원이 없는 사람이라 이·박의 2 다. ㉣ 은 사원마다 관리자 정보를 붙이는 셀프 조인으로, LEFT JOIN 이라 관리자가 없는 김도 남아 3행이다. 정답은 ①번이다. ② 는 = NULL 도 NULL 행을 잡는다고 본 것, ③ 은 부하 없는 사원을 하나로 보고 LEFT JOIN 에서 김을 뺀 것, ④ 는 IS NULL 도 NULL 행을 못 잡는다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "사원 자기 참조 ERD (관리자는 없을 수 있음)",
        "mermaid": "erDiagram\n    사원 |o..o{ 사원 : \"관리\"\n    사원 {\n        int 사번 PK\n        string 이름\n        int 관리자사번 FK\n    }"
      },
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
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT * FROM 사원\nWHERE 관리자사번 IS NULL;\n-- ㉡\nSELECT * FROM 사원\nWHERE 관리자사번 = NULL;\n-- ㉢ 부하가 없는 사원 수\nSELECT COUNT(*) FROM 사원 E\nWHERE NOT EXISTS\n  (SELECT 1 FROM 사원 M\n   WHERE M.관리자사번 = E.사번);\n-- ㉣\nSELECT * FROM 사원 E\nLEFT JOIN 사원 M\n  ON E.관리자사번 = M.사번;"
      }
    ]
  },
  {
    "id": 10685,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 36,
    "title": "아래 SQL 중 오류가 발생하는 것을 모두 고른 것은?",
    "options": [
      "가, 나",
      "나, 다",
      "다, 라",
      "가, 나, 다, 라"
    ],
    "correctIndex": 1,
    "explanation": "가 는 상품 테이블에 상품ID 가 P001 인 행이 두 건이지만, 스칼라 서브쿼리 안에 ROWNUM = 1 을 두어 한 행만 돌려주므로 정상 실행된다. 나 는 같은 스칼라 서브쿼리에 ROWNUM 조건이 없어, 평가항목 E01 의 상품ID P001 에 대해 두 행을 돌려주므로 ORA-01427(단일 행 서브쿼리가 여러 행을 반환) 오류가 난다. 다 는 = 로 비교하는 서브쿼리가 평가항목의 상품ID 세 건을 돌려주어 같은 오류가 난다. 라 는 EXISTS 로 존재 여부만 확인하므로 정상이다. 오류가 나는 것은 나·다 라서 ②번이 정답이다. ① 은 정상인 가 를, ③ 은 정상인 라 를 넣었고, ④ 는 가·라 까지 모두 넣었다. ※ 복원 자료의 다 는 '평가항목에 상품ID 컬럼이 없다' 는 가정이 위 표와 모순돼, 같은 범위(서브쿼리 반환 행 수)의 오류 사례로 바꿨다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "상품",
        "headers": [
          "상품ID",
          "상품명"
        ],
        "rows": [
          [
            "P001",
            "사과"
          ],
          [
            "P001",
            "사과(중복)"
          ],
          [
            "P002",
            "배"
          ],
          [
            "P003",
            "감"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "평가항목",
        "headers": [
          "평가번호",
          "상품ID",
          "평가점수"
        ],
        "rows": [
          [
            "E01",
            "P001",
            "4"
          ],
          [
            "E02",
            "P002",
            "5"
          ],
          [
            "E03",
            "P003",
            "3"
          ]
        ]
      },
      {
        "type": "sql",
        "caption": "가",
        "code": "SELECT A.평가번호,\n       (SELECT B.상품명 FROM 상품 B WHERE A.상품ID = B.상품ID AND ROWNUM = 1) AS 상품명\nFROM   평가항목 A;"
      },
      {
        "type": "sql",
        "caption": "나",
        "code": "SELECT (SELECT B.상품명 FROM 상품 B WHERE A.상품ID = B.상품ID) AS 상품명\nFROM   평가항목 A;"
      },
      {
        "type": "sql",
        "caption": "다",
        "code": "SELECT *\nFROM   상품 A\nWHERE  A.상품ID = (SELECT 상품ID FROM 평가항목);"
      },
      {
        "type": "sql",
        "caption": "라",
        "code": "SELECT *\nFROM   상품 A\nWHERE  EXISTS (SELECT 1 FROM 평가항목 B WHERE A.상품ID = B.상품ID);"
      }
    ]
  },
  {
    "id": 10686,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 37,
    "title": "A 의 K 값이 1, 2, 3 이고 B 의 K 값이 2, 3, 4, 5 일 때, 아래 SQL ㉠, ㉡, ㉢ 의 결과 행 수로 옳은 것은?",
    "options": [
      "12, 2, 12",
      "7, 2, 7",
      "12, 12, 12",
      "12, 2, 오류"
    ],
    "correctIndex": 0,
    "explanation": "CROSS JOIN 은 한쪽의 각 행을 다른 쪽의 모든 행과 짝지어 3 × 4 = 12행을 만든다(㉠). 여기에 WHERE 로 A.K = B.K 를 걸면 같은 값인 2, 3 의 짝만 남아 2행이 되고, 결국 등가 조인과 같은 결과가 된다(㉡). ㉢ 처럼 FROM 에 테이블을 쉼표로 나열하고 조인 조건을 쓰지 않으면 CROSS JOIN 과 같은 카티션 곱이 되어 12행이다. 정답은 ①번이다. ② 는 행 수를 더한 것, ③ 은 WHERE 가 CROSS JOIN 결과를 거르지 못한다고 본 것, ④ 는 조인 조건이 없으면 오류라고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT * FROM A CROSS JOIN B;\n-- ㉡\nSELECT * FROM A CROSS JOIN B\nWHERE  A.K = B.K;\n-- ㉢\nSELECT * FROM A, B;"
      }
    ]
  },
  {
    "id": 10687,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 38,
    "title": "아래 EMP 테이블에 대한 SQL 에서, E 의 차상위 값과 차상위가 NULL 이 아닌 행 수로 옳은 것은?",
    "options": [
      "D, 2",
      "A, 2",
      "B, 2",
      "B, 3"
    ],
    "correctIndex": 2,
    "explanation": "M 은 각 사원의 매니저, G 는 그 매니저의 매니저(차상위)다. E 의 매니저는 MGR_NO 4 인 D 이고, D 의 매니저는 MGR_NO 2 인 B 라서 E 의 차상위는 B 다. 차상위가 있는 행은 D(매니저 B → 차상위 A)와 E(매니저 D → 차상위 B) 두 행이다. B·C 는 매니저 A 에게 매니저가 없고, A 는 매니저부터 없어서 차상위가 NULL 이다. 정답은 ③번이다. ① 은 바로 위 매니저를 차상위로 본 것, ② 는 맨 위 사람을 차상위로 본 것, ④ 는 매니저가 A 인 B·C 중 하나를 더 센 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP",
        "headers": [
          "EMP_NO",
          "이름",
          "MGR_NO"
        ],
        "rows": [
          [
            "1",
            "A",
            "NULL"
          ],
          [
            "2",
            "B",
            "1"
          ],
          [
            "3",
            "C",
            "1"
          ],
          [
            "4",
            "D",
            "2"
          ],
          [
            "5",
            "E",
            "4"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT E.이름,\n       M.이름 AS 매니저,\n       G.이름 AS 차상위\nFROM   EMP E\n       LEFT JOIN EMP M\n              ON E.MGR_NO = M.EMP_NO\n       LEFT JOIN EMP G\n              ON M.MGR_NO = G.EMP_NO;"
      }
    ]
  },
  {
    "id": 10688,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 39,
    "title": "테이블 A, B, C 가 식별자 관계로 연결된 구조에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "테이블 세 개를 조인하려면 최소 조건은 두 개이다.",
      "식별자 관계는 부모 키가 자식의 PK 에 포함된다.",
      "조인 조건은 최소 3개 이상이어야 한다.",
      "식별자 관계에서는 자식이 부모 없이 존재할 수 없다."
    ],
    "correctIndex": 2,
    "explanation": "일반적으로 N개의 테이블을 조인하려면 최소 N - 1개의 조인 조건이 필요하다. A·B·C 세 테이블이라면 조건 두 개면 충분하다(①). 따라서 \"조인 조건이 최소 3개 이상이어야 한다\"는 ③번 설명은 잘못되어 정답이 된다. 식별자 관계는 부모 키가 자식의 PK 일부가 되며(②), 이로 인해 자식은 부모 없이 존재할 수 없는 의존 관계가 된다(④).",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "A-B-C 식별자 관계 ERD (1:N 연쇄 — A 의 PK 가 C 까지 순차 전파)",
        "mermaid": "erDiagram\n    A ||--o{ B : \"갖는다\"\n    B ||--o{ C : \"갖는다\""
      }
    ]
  },
  {
    "id": 10689,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 40,
    "title": "아래 SQL 의 결과(A, B, C, D)로 옳은 것은?",
    "options": [
      "AABCD, BCDEF, BCxy, EBC",
      "AABCD, BCD, BCxy, EBC",
      "AABCD, BCD, BCxyxy, EBCD",
      "ABCD, BCD, BCxy, EB"
    ],
    "correctIndex": 1,
    "explanation": "LPAD·RPAD 의 두 번째 인자는 결과의 전체 길이다. A 는 길이 5 가 되도록 왼쪽을 'A' 로 채워 'AABCD' 다. 원래 문자열이 지정한 길이보다 길면 채우는 대신 잘라 내므로 B 는 앞 3글자 'BCD' 다. C 는 길이 4 가 될 때까지 오른쪽을 'xy' 로 채워 'BCxy' 다. D 의 RTRIM 은 오른쪽에서 D 나 E 가 아닌 글자가 나올 때까지 지워 'EBC' 다. 정답은 ②번이다. ① 은 길이가 넘쳐도 그대로 둔다고 본 것, ③ 은 채울 문자열을 통째로 두 번 붙이고 RTRIM 을 한 글자만 지운 것, ④ 는 채울 글자 수와 지울 글자 수를 잘못 센 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT LPAD('BCD', 5, 'A')   AS A,\n       LPAD('BCDEF', 3, 'A') AS B,\n       RPAD('BC', 4, 'xy')   AS C,\n       RTRIM('EBCDE', 'DE')  AS D\nFROM   DUAL;"
      }
    ]
  },
  {
    "id": 10690,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 41,
    "title": "아래 T 테이블에 대한 SQL 의 결과(GRP, R1, R2)로 옳은 것은?",
    "options": [
      "(A, 105, 70), (B, 90, 45)",
      "(A, 70, 105), (B, 45, 90)",
      "(A, 105, 70), (B, 90, 45), (C, NULL, NULL)",
      "(A, 105, 105), (B, 90, 90)"
    ],
    "correctIndex": 0,
    "explanation": "HAVING COUNT(COL) >= 1 은 COL 값이 하나라도 있는 그룹만 남긴다. COUNT(COL) 은 NULL 을 세지 않으므로 값이 NULL 하나뿐인 C 는 0 이라 빠지고 A·B 만 남는다. R1 = AVG(COL) 은 NULL 을 빼고 평균을 내 A 는 (100 + 110) / 2 = 105, B 는 90 이다. R2 = SUM(COL) / COUNT(*) 는 합계는 NULL 을 빼고 210·90 이지만 COUNT(*) 는 NULL 행까지 세어 3·2 라 A 70, B 45 다. 정답은 ①번이다. ② 는 R1 과 R2 를 바꾼 값, ③ 은 HAVING 의 COUNT(COL) 을 COUNT(*) 처럼 보고 C 를 남긴 값, ④ 는 COUNT(*) 도 NULL 행을 뺀다고 본 값이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T 테이블",
        "headers": [
          "GRP",
          "COL"
        ],
        "rows": [
          [
            "A",
            "100"
          ],
          [
            "A",
            "110"
          ],
          [
            "A",
            "NULL"
          ],
          [
            "B",
            "NULL"
          ],
          [
            "B",
            "90"
          ],
          [
            "C",
            "NULL"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT GRP,\n       ROUND(AVG(COL))           AS R1,\n       ROUND(SUM(COL) / COUNT(*)) AS R2\nFROM   T\nGROUP BY GRP\nHAVING COUNT(COL) >= 1\nORDER BY GRP;"
      }
    ]
  },
  {
    "id": 10691,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 42,
    "title": "아래 고객·주문 테이블에 대해 외래키 참조 무결성 오류가 발생하는 구문은?",
    "options": [
      "INSERT INTO 주문 (주문ID, 고객ID) VALUES (503, 'C001');",
      "INSERT INTO 고객 VALUES ('C004', '신규'); INSERT INTO 주문 (주문ID, 고객ID) VALUES (504, 'C004');",
      "UPDATE 주문 SET 주문일 = SYSDATE WHERE 주문ID = 501;",
      "UPDATE 주문 SET 고객ID = 'C999' WHERE 주문ID = 501;"
    ],
    "correctIndex": 3,
    "explanation": "외래키는 자식 테이블(주문)의 고객ID 값이 부모 테이블(고객)의 고객ID 에 반드시 있어야 한다는 제약이다. ① C001 은 고객 테이블에 있으므로 정상 입력된다. ② 새 고객 C004 를 먼저 넣은 뒤 그 ID 로 주문을 넣으므로 정상이다. ③ 은 고객ID 를 건드리지 않고 주문일만 바꿔 외래키와 관계가 없다. ④ C999 는 고객 테이블에 없는 값이라 ORA-02291(부모 키 없음) 오류가 난다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "고객 테이블 (PK: 고객ID)",
        "headers": [
          "고객ID",
          "이름"
        ],
        "rows": [
          [
            "C001",
            "홍길동"
          ],
          [
            "C002",
            "이순신"
          ],
          [
            "C003",
            "강감찬"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "주문 테이블 (PK: 주문ID, FK: 고객ID → 고객.고객ID)",
        "headers": [
          "주문ID",
          "고객ID",
          "주문일"
        ],
        "rows": [
          [
            "501",
            "C001",
            "2026-04-10"
          ],
          [
            "502",
            "C002",
            "2026-04-12"
          ]
        ]
      }
    ]
  },
  {
    "id": 10692,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 43,
    "title": "아래 T 테이블에 대한 SQL 의 결과로 옳은 것은?",
    "options": [
      "3, 2 (두 행)",
      "3, 2, 2 (세 행)",
      "3 (한 행)",
      "그룹 함수 오류"
    ],
    "correctIndex": 0,
    "explanation": "ID 로 묶으면 A(3행), B(1행), C(2행), D(2행) 네 그룹이다. HAVING 은 COUNT(*) 가 아니라 COUNT(VAL) 로 거르는데, COUNT(VAL) 은 NULL 을 빼고 센다. A 2, B 1, C 0, D 2 다. 그래서 A 와 D 만 남고, SELECT 의 COUNT(*) 는 그룹의 전체 행 수라 A 는 3, D 는 2 다. ID 순으로 3, 2 두 행이다(①). ② 는 COUNT(VAL) 도 NULL 을 센다고 본 결과(C 가 남음)이고, ③ 은 COUNT(VAL) 이 같은 값(D 의 40, 40)을 한 번만 센다고 본 결과다(그건 COUNT(DISTINCT VAL)). ④ SELECT 에 집계 함수만 있고 ORDER BY 의 ID 는 GROUP BY 컬럼이라 오류가 나지 않는다.",
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
            "A",
            "10"
          ],
          [
            "A",
            "20"
          ],
          [
            "A",
            "NULL"
          ],
          [
            "B",
            "30"
          ],
          [
            "C",
            "NULL"
          ],
          [
            "C",
            "NULL"
          ],
          [
            "D",
            "40"
          ],
          [
            "D",
            "40"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT COUNT(*)\nFROM   T\nGROUP BY ID\nHAVING COUNT(VAL) >= 2\nORDER BY ID;"
      }
    ]
  },
  {
    "id": 10693,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 44,
    "title": "아래 데이터에 대한 AVG 결과로 옳은 것은?",
    "options": [
      "10, 20",
      "10, 0",
      "10, 10",
      "AVG 연산 오류"
    ],
    "correctIndex": 2,
    "explanation": "WHERE COL2 IS NOT NULL로 (10, 20)과 (10, 0) 두 행만 남는다. AVG(COL1) = (10 + 10) ÷ 2 = 10, AVG(COL2) = (20 + 0) ÷ 2 = 10이 된다. AVG는 NULL을 자동으로 빼지만 0은 정상 값으로 포함된다는 점이 함정이다. 정답은 ③번이다. ① 10, 20 은 COL2 = 0 인 행까지 빼고 계산한 값이고, ④ AVG 는 0 이 있어도 오류 없이 계산된다.",
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
            "10",
            "20"
          ],
          [
            "0",
            "NULL"
          ],
          [
            "10",
            "0"
          ]
        ],
        "caption": "T 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT AVG(COL1), AVG(COL2) FROM T WHERE COL2 IS NOT NULL;"
      }
    ]
  },
  {
    "id": 10694,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 45,
    "title": "아래 ERD 와 데이터에서 '주문했거나 문의한 고객' 등을 구하는 SQL ㉠~㉣ 의 결과 행 수로 옳은 것은?",
    "options": [
      "3, 5, 2, 1",
      "5, 5, 1, 1",
      "3, 5, 1, 1",
      "3, 3, 1, 2"
    ],
    "correctIndex": 2,
    "explanation": "고객 한 명이 주문과 문의를 여러 건 가질 수 있는 1:M 관계 두 개다. ㉠ UNION 은 두 결과를 합치고 중복을 하나로 줄여 C1, C2, C3 의 3행이다. ㉡ UNION ALL 은 중복을 남겨 3 + 2 = 5행이다. ㉢ 조인은 같은 고객번호끼리 짝을 지어, C2 의 주문 1건과 문의 1건이 만나 1행이다. ㉣ INTERSECT 는 양쪽에 모두 있는 C2 하나라 1행이다. 정답은 ③번이다. ① 은 조인에서 C1 도 짝이 생긴다고 본 것, ② 는 UNION 도 중복을 남긴다고 본 것, ④ 는 UNION ALL 도 중복을 없앤다고 보고 교집합을 2명으로 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "고객·주문·문의 ERD",
        "mermaid": "erDiagram\n    고객 ||..o{ 주문 : \"주문함\"\n    고객 ||..o{ 문의 : \"문의함\"\n    고객 {\n        string 고객번호 PK\n    }\n    주문 {\n        string 주문번호 PK\n        string 고객번호 FK\n    }\n    문의 {\n        string 문의번호 PK\n        string 고객번호 FK\n    }"
      },
      {
        "type": "text",
        "content": "주문의 고객번호: C1, C1, C2\n문의의 고객번호: C2, C3"
      },
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT 고객번호 FROM 주문\nUNION\nSELECT 고객번호 FROM 문의;\n-- ㉡\nSELECT 고객번호 FROM 주문\nUNION ALL\nSELECT 고객번호 FROM 문의;\n-- ㉢\nSELECT O.고객번호\nFROM 주문 O JOIN 문의 Q\n  ON O.고객번호 = Q.고객번호;\n-- ㉣\nSELECT 고객번호 FROM 주문\nINTERSECT\nSELECT 고객번호 FROM 문의;"
      }
    ]
  },
  {
    "id": 10695,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 46,
    "title": "아래 SQL 의 결과(A, B, C, D)로 옳은 것은? (Oracle 기준)",
    "options": [
      "BCDE, A, NULL, DE",
      "BCDE, AB, NULL, DE",
      "BCDE, AB, E, ED",
      "CDE, AB, NULL, DE"
    ],
    "correctIndex": 1,
    "explanation": "SUBSTR 에 길이를 주지 않으면 시작 위치부터 끝까지라 A 는 'BCDE' 다. Oracle 은 시작 위치 0 을 1 로 보므로 B 는 'AB' 다. 시작 위치가 문자열 길이를 넘으면 잘라 낼 글자가 없어 C 는 NULL 이다. 음수 위치는 뒤에서 세어 D 는 뒤에서 2번째부터 끝까지인 'DE' 다. 정답은 ②번이다. ① 은 0 을 0번째 글자로 보아 한 글자만 남긴 것, ③ 은 범위를 넘으면 마지막 글자를 준다고 보고 음수 위치를 거꾸로 읽은 것, ④ 는 위치를 0 부터 센 것이다. PostgreSQL 에서는 B 가 'A' 가 되어 결과가 다르다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT SUBSTR('ABCDE', 2)    AS A,\n       SUBSTR('ABCDE', 0, 2) AS B,\n       SUBSTR('ABCDE', 6)    AS C,\n       SUBSTR('ABCDE', -2)   AS D\nFROM   DUAL;"
      }
    ]
  },
  {
    "id": 10696,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 47,
    "title": "사용자 U 가 테이블 2개를 가지고 있다. 아래 ㉠, ㉡ 을 각각 실행했을 때의 결과로 옳은 것은? (Oracle 기준)",
    "options": [
      "㉠ 은 U 만 삭제하고 테이블은 남긴다 / ㉡ 도 성공한다.",
      "㉠ 은 U 와 테이블을 함께 삭제한다 / ㉡ 은 오류다.",
      "㉠ 은 오류다 / ㉡ 은 U 와 U 의 테이블을 모두 삭제한다.",
      "㉠ 은 오류다 / ㉡ 은 U 만 삭제하고 테이블은 다른 사용자에게 넘긴다."
    ],
    "correctIndex": 2,
    "explanation": "Oracle 에서 객체를 가지고 있는 사용자는 그냥 DROP USER 로 지울 수 없어 ㉠ 은 오류가 난다. CASCADE 를 붙이면 그 사용자가 가진 테이블·뷰·인덱스 같은 모든 객체를 먼저 지운 뒤 사용자를 삭제한다. 정답은 ③번이다. ① 은 객체가 주인 없이 남을 수 있다고 본 것, ② 는 두 명령을 거꾸로 본 것, ④ 는 객체가 다른 사용자에게 옮겨진다고 본 것이다. 다른 사용자의 뷰나 시노님이 지워진 객체를 가리키고 있었다면 사용할 수 없는 상태가 된다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ㉠\nDROP USER U;\n-- ㉡\nDROP USER U CASCADE;"
      }
    ]
  },
  {
    "id": 10697,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 48,
    "title": "부서별 연봉 합계를 구해 합계가 큰 순서대로 조회하려 한다. 아래 SQL 의 빈칸에 들어갈 키워드 조합으로 옳은 것은?",
    "options": [
      "GROUP BY, DESC",
      "HAVING, ASC",
      "ORDER BY, DESC",
      "GROUP BY, ASC"
    ],
    "correctIndex": 0,
    "explanation": "부서별로 합계를 구하려면 GROUP BY 부서로 그룹을 만들어야 한다. 합계 큰 순서로 보고 싶다면 ORDER BY에 DESC(내림차순)를 붙인다. ORDER BY는 ASC가 기본이므로 큰 값부터 보려면 DESC를 명시해야 한다. 정답은 ①번이다. ② HAVING 은 그룹을 거르는 조건이라 그룹을 만드는 자리에 올 수 없고, ③ 첫 빈칸에 ORDER BY 를 넣으면 부서별로 묶이지 않으며, ②·④ 의 ASC 는 작은 값부터 정렬한다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT 부서, SUM(연봉) FROM EMP\n(   ) 부서\nORDER BY SUM(연봉) (   );"
      }
    ]
  },
  {
    "id": 10698,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 49,
    "title": "아래 EMP 테이블에 대한 SQL 의 결과로 옳은 것은? (Oracle 기준)",
    "options": [
      "4, 5",
      "3, 4, 5",
      "3, 4, 5, 6",
      "3, 4, 5, 7"
    ],
    "correctIndex": 2,
    "explanation": "부서마다 연봉 내림차순으로 RANK 를 매기고 1위만 남긴다. A 는 COL1 5 와 3 이 5000 으로 동점이라 RANK 가 둘 다 1 이다. B 는 4(4500) 가 1위. C 는 Oracle 이 NULL 을 가장 큰 값으로 보므로 내림차순에서 NULL 인 6 이 1위다. COL1 순으로 3, 4, 5, 6 이다(③). ① 은 동점 중 하나만 남기고(ROW_NUMBER 처럼) C 도 뺀 결과, ② 는 연봉이 NULL 인 C 부서에 1위가 없다고 본 결과, ④ 는 NULL 이 맨 뒤에 온다고 보고 C 의 1위를 7 로 본 결과다(NULLS LAST 를 쓰면 실제로 ④ 가 된다).",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP 테이블",
        "headers": [
          "COL1",
          "부서",
          "연봉"
        ],
        "rows": [
          [
            "1",
            "A",
            "3000"
          ],
          [
            "5",
            "A",
            "5000"
          ],
          [
            "3",
            "A",
            "5000"
          ],
          [
            "2",
            "B",
            "2500"
          ],
          [
            "4",
            "B",
            "4500"
          ],
          [
            "6",
            "C",
            "NULL"
          ],
          [
            "7",
            "C",
            "1000"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT COL1\nFROM (\n    SELECT COL1,\n           RANK() OVER (PARTITION BY 부서 ORDER BY 연봉 DESC) AS RN\n    FROM EMP\n)\nWHERE RN = 1\nORDER BY COL1;"
      }
    ]
  },
  {
    "id": 10699,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 50,
    "title": "아래 계층형 쿼리의 결과 행 수로 옳은 것은?",
    "options": [
      "1",
      "2",
      "3",
      "5"
    ],
    "correctIndex": 1,
    "explanation": "CONNECT BY 절에 함께 쓴 조건은 트리를 내려가는 단계에서 적용되므로, 조건에 걸린 행에서 전개가 멈추고 그 아래 자손도 따라오지 않는다. START WITH COL1 = 2 에서 출발하면 2 의 자식 후보는 COL2 가 2 인 5 와 6 이다. 5 는 COL1 <> 5 에 걸려 빠지고, 그 자식 9 도 함께 빠진다. 6 은 통과하지만 자식이 없다. 결과는 2, 6 두 행이라 정답은 ②번이다. ① 1 은 시작 행 2 만 센 값이다. ③ 3 은 COL1 <> 5 를 WHERE 절에 둔 경우의 결과(2, 6, 9)로, WHERE 는 전개가 끝난 뒤 5 한 행만 지우므로 그 자식 9 가 남는다.",
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
            "NULL"
          ],
          [
            "2",
            "NULL"
          ],
          [
            "3",
            "1"
          ],
          [
            "4",
            "1"
          ],
          [
            "5",
            "2"
          ],
          [
            "6",
            "2"
          ],
          [
            "7",
            "3"
          ],
          [
            "8",
            "4"
          ],
          [
            "9",
            "5"
          ]
        ],
        "caption": "T 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT COUNT(*) FROM T\nSTART WITH COL1 = 2\nCONNECT BY PRIOR COL1 = COL2 AND COL1 <> 5;"
      }
    ]
  }
];
