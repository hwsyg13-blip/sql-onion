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
      "데이터와 프로세스 관점",
      "프로세스 관점",
      "보안 관점"
    ],
    "correctIndex": 1,
    "explanation": "데이터 모델링은 보는 시각에 따라 셋으로 나뉜다. 데이터 관점(①)은 어떤 정보(엔터티·속성·관계)를 다룰지에 집중하고, 프로세스 관점(③)은 어떤 일이 어떻게 처리되는지에 집중한다. 데이터와 프로세스 관점은 두 가지를 함께 보면서 업무 처리 방식이 데이터에 어떤 영향을 주는지를 분석한다. 설명이 그 영향 관계를 묘사하므로 정답은 ②번이다. ④ 보안 관점은 데이터 모델링의 세 관점에 들지 않는다.",
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
    "title": "아래 설명에 해당하는 정규형은?",
    "options": [
      "제1정규형",
      "제2정규형",
      "제3정규형",
      "BCNF"
    ],
    "correctIndex": 2,
    "explanation": "정규화 단계에서 제3정규형은 일반 속성끼리 서로 종속되지 않아야 한다는 조건(이행적 종속 제거)을 추가한다. 예를 들어 사원 테이블에서 부서코드만 알아도 부서명을 알 수 있다면, 부서명은 사원 정보가 아니라 부서 정보로 따로 분리해야 한다. 설명이 일반 속성 간 종속을 금지하는 조건을 묘사하므로 정답은 ③번이다. ① 제1정규형은 모든 속성이 원자값을 갖도록, ② 제2정규형은 기본키 일부에만 종속된 속성(부분 종속)을 없애도록 하고, ④ BCNF 는 모든 결정자가 후보키가 되도록 한다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "엔터티의 일반 속성 간에는 서로 종속적이지 않아야 한다."
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
    "title": "주식별자의 특징으로 적절하지 않은 것은?",
    "options": [
      "주식별자가 지정되면 NULL 값을 허용해도 된다.",
      "최소성을 만족해야 한다.",
      "유일성을 만족해야 한다.",
      "자주 변경되지 않아야 한다."
    ],
    "correctIndex": 0,
    "explanation": "주식별자는 행 하나하나를 구별해 주는 핵심 키이므로 반드시 값이 있어야 한다(NOT NULL). 비어 있으면 어느 행을 가리키는지 알 수 없다. 따라서 NULL을 허용한다는 ①번 설명이 잘못되어 정답이 된다. 나머지 보기는 주식별자의 표준 특성인 ② 최소성·③ 유일성·④ 불변성에 부합한다.",
    "_source": "authored"
  },
  {
    "id": 10655,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "1과목",
    "number": 6,
    "title": "슈퍼-서브 타입 구조에서 개별 테이블의 접근이 매우 많을 때 가장 적절한 설계는?",
    "options": [
      "Single Table",
      "One To One",
      "Plus",
      "Sub Only"
    ],
    "correctIndex": 1,
    "explanation": "슈퍼-서브 타입 구조란 공통 속성을 가진 부모(슈퍼) 엔터티 아래에 특수한 자식(서브) 엔터티가 붙는 구조이다. SQL 전문가 가이드의 변환 방법은 세 가지이다. ① Single Table은 모든 서브를 하나의 큰 테이블에 합친다. One To One은 슈퍼와 서브를 각각 별도 테이블로 두는 1:1 분리 방식이다. ③ Plus(슈퍼+서브)는 서브타입마다 슈퍼타입 속성을 합친 테이블을 만든다. 개별 서브 테이블을 자주 따로 조회한다면 분리해 두는 것이 빠르므로 One To One이 적합해 정답은 ②번이다. ④ Sub Only 는 가이드의 변환 방법에 없는 이름이다.",
    "_source": "authored"
  },
  {
    "id": 10656,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "1과목",
    "number": 7,
    "title": "회원 로그인 빈도가 매우 많고 회원 정보 조회는 1/10 수준일 때 올바른 설계는?",
    "options": [
      "회원 테이블을 그대로 유지한다.",
      "회원 정보를 분리한다.",
      "회원 로그인 로그를 한 테이블에 통합한다.",
      "모든 컬럼을 파티셔닝한다."
    ],
    "correctIndex": 1,
    "explanation": "같은 테이블 안에 자주 쓰이는 컬럼과 거의 안 쓰이는 컬럼이 섞여 있으면 매번 큰 행을 통째로 읽어 비효율이 발생한다. 로그인용 핵심 컬럼만 별도 테이블로 분리하면 자주 일어나는 로그인 처리에서 데이터를 적게 읽어 성능이 향상된다. 이를 수직 분할이라고 한다. 정답은 ②번이다. ① 그대로 두면 로그인할 때마다 거의 쓰지 않는 회원 정보 컬럼까지 함께 읽고, ③ 로그를 한 테이블에 합치면 테이블이 더 커지며, ④ 파티셔닝은 행 단위로 나누는 기법이라 컬럼마다 적용하는 방법이 아니다.",
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
    "title": "주문번호+상품번호가 PK이고 상품명이 주식별자의 하나에만 종속된 경우, 이 상태가 만족하지 못하는 정규형은?",
    "options": [
      "제1정규형",
      "제2정규형",
      "제3정규형",
      "BCNF"
    ],
    "correctIndex": 1,
    "explanation": "기본키가 (주문번호, 상품번호) 두 컬럼으로 구성되어 있는데 상품명은 상품번호만 보면 알 수 있는 정보이다. 즉 PK 일부에만 종속된 부분 함수 종속이 발생한다. 부분 종속을 제거해 기본키 전체에 완전히 종속되도록 만드는 단계가 제2정규형이다. 따라서 이 상태는 1정규형(①)까지는 만족하지만 2정규형은 만족하지 못해 정답은 ②번이다. ③ 제3정규형과 ④ BCNF 는 제2정규형을 만족한 다음에 따지는 단계라, 이 상태에서 처음 깨지는 정규형이 아니다.",
    "_source": "authored"
  },
  {
    "id": 10659,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "1과목",
    "number": 10,
    "title": "아래 설명에 해당하는 스키마는?",
    "options": [
      "외부 스키마",
      "개념 스키마",
      "내부 스키마",
      "물리 스키마"
    ],
    "correctIndex": 0,
    "explanation": "데이터베이스의 3단계 스키마는 사용자에게 가까운 순서로 외부 → 개념 → 내부이다. 외부 스키마는 사용자나 응용 프로그램이 보는 개별 뷰, 개념 스키마(②)는 조직 전체가 공유하는 통합된 논리 구조, 내부 스키마(③)는 실제 저장 방식·인덱스 등 물리 구조를 정의한다. 설명이 응용 프로그래머가 보는 개인적 DB 정의를 가리키므로 정답은 ①번이다. ④ 물리 스키마는 3단계 스키마 구조의 정식 명칭이 아니며, 물리 저장 구조는 내부 스키마가 정의한다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "뷰 단계의 여러 사용자 관점으로 구성되어 개별 사용자가 보는 개인적 DB 스키마이며, 응용 프로그래머가 접근하는 DB 정의이다."
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
    "title": "주문일자와 주문방법(ONLINE·OFFLINE) 두 컬럼에 대해 각 컬럼별 집계, 두 컬럼 조합 집계, 전체 집계가 모두 필요할 때 적절한 SQL 은?",
    "options": [
      "CUBE(주문일자, 주문방법)",
      "ROLLUP(주문일자, 주문방법)",
      "GROUPING SETS(주문일자, 주문방법)",
      "GROUP BY 주문일자, 주문방법"
    ],
    "correctIndex": 0,
    "explanation": "CUBE는 지정한 컬럼들로 만들 수 있는 모든 조합의 소계와 총계를 한 번에 만들어 준다. CUBE(A, B)는 (A, B), (A), (B), () 네 가지 그룹을 모두 반환한다. 문제는 첫 컬럼·두 번째 컬럼 각각 집계, 두 컬럼 조합 집계, 전체 집계까지 모두 필요하다고 했으므로 CUBE가 적합하다. ② ROLLUP은 (A, B), (A), ()만 만들고 (B) 단독은 만들지 않으며, ③ GROUPING SETS는 명시한 그룹(여기서는 주문일자·주문방법 각각)만 만들고, ④ 단순 GROUP BY는 (A, B) 한 종류만 만든다. 정답은 ①번이다.",
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
    "explanation": "ROLLUP(A, B)는 왼쪽부터 점차 줄여가며 (A, B), (A), () 세 가지 그룹을 만든다. 문제는 첫 컬럼 집계, 두 컬럼 조합 집계, 전체 집계가 필요하므로 정확히 ROLLUP이 만드는 세 가지 그룹과 일치한다. ① CUBE는 (B) 단독까지 추가로 만들어 결과 행이 더 많아 의도에 맞지 않는다. 정답은 ②번이다. ③ 은 전체 집계 () 가 빠지고 대신 (평가) 단독 집계가 들어 있으며, ④ GROUP BY 평가항목 은 첫 컬럼 집계 하나만 만든다.",
    "_source": "authored"
  },
  {
    "id": 10662,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 13,
    "title": "트랜잭션 특성 설명 중 가장 적절한 것은?",
    "options": [
      "트랜잭션이 성공하면 변경 내용이 영구 저장되는 것을 고립성이라 한다.",
      "ROLLBACK 후에는 데이터 변경 사항이 그대로 유지된다.",
      "COMMIT 으로만 데이터 무결성이 보장된다.",
      "COMMIT 과 ROLLBACK 을 사용하여 데이터 무결성을 보장할 수 있다."
    ],
    "correctIndex": 3,
    "explanation": "트랜잭션은 한 묶음의 작업을 의미하며 무결성 유지를 위해 COMMIT(확정)과 ROLLBACK(취소)이라는 두 명령으로 제어한다. 작업이 정상적으로 끝나면 COMMIT으로 영구 반영하고, 도중에 문제가 생기면 ROLLBACK으로 되돌린다. ①은 지속성에 대한 설명이고, ②·③은 잘못된 진술이다. 정답은 ④번이다.",
    "_source": "authored"
  },
  {
    "id": 10663,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 14,
    "title": "저장 프로시저 관련 설명 중 적절하지 않은 것은?",
    "options": [
      "응용 프로그램 성능을 개선할 수 있다.",
      "네트워크 트래픽을 줄일 수 있다.",
      "프로시저와 트리거 모두에서 COMMIT·ROLLBACK 을 사용할 수 있다.",
      "유저 정의 함수는 반드시 RETURN 이 필요하다."
    ],
    "correctIndex": 2,
    "explanation": "저장 프로시저는 미리 만들어 둔 SQL 묶음으로 호출만 하면 일괄 실행되어 네트워크 트래픽과 응답 시간을 줄여 준다(①·②). 트리거는 INSERT·UPDATE·DELETE 같은 이벤트가 발생하면 자동으로 실행되는 코드인데, 트리거 안에서는 COMMIT·ROLLBACK이 허용되지 않는다. 호출한 트랜잭션의 일부로 함께 동작해야 하기 때문이다. 따라서 \"프로시저와 트리거 모두에서 COMMIT·ROLLBACK 을 사용할 수 있다\"는 ③번 설명이 잘못되어 정답이다. ④의 유저 정의 함수가 RETURN을 반드시 가져야 한다는 설명은 옳다.",
    "_source": "authored"
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
    "title": "테이블 조인 시 매칭되지 않는 행까지 포함하여 조회하는 조인은?",
    "options": [
      "INNER JOIN",
      "NATURAL JOIN",
      "CROSS JOIN",
      "OUTER JOIN"
    ],
    "correctIndex": 3,
    "explanation": "① 일반 조인(INNER JOIN)은 양쪽 테이블에 모두 매칭되는 행만 결과로 보여준다. 매칭되지 않은 행까지 결과에 살리고 싶을 때 사용하는 것이 OUTER JOIN이다. LEFT/RIGHT/FULL 세 가지 형태가 있어 각각 한쪽 또는 양쪽의 미매칭 행을 NULL로 채워 보존한다. 정답은 ④번이다. ② NATURAL JOIN 은 이름이 같은 컬럼으로 묶는 내부 조인의 한 형태라 매칭되는 행만 남고, ③ CROSS JOIN 은 조건 없이 모든 조합을 만든다.",
    "_source": "authored"
  },
  {
    "id": 10666,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 17,
    "title": "번호가 없으면 1을 반환하고 있으면 MAX(번호)+1 을 반환하는 SQL 로 동일한 결과의 쿼리는?",
    "options": [
      "SELECT COALESCE(MAX(번호), 1) FROM T;",
      "SELECT COALESCE(MAX(번호) + 1, 1) FROM T;",
      "SELECT NVL(MAX(번호) + 1, 0) FROM T;",
      "SELECT NULLIF(MAX(번호), 1) FROM T;"
    ],
    "correctIndex": 1,
    "explanation": "기준 SQL `NVL(MAX(번호) + 1, 1)` 은 데이터가 없으면 MAX(번호) 가 NULL 이라 MAX(번호) + 1 도 NULL 이 되어 1 을, 데이터가 있으면 MAX(번호) + 1 을 돌려준다. ② `COALESCE(MAX(번호) + 1, 1)` 은 NVL 과 같은 동작이라 결과가 같다. ① 은 +1 이 빠져 데이터가 있을 때 MAX(번호) 를 그대로 돌려주고, ③ 은 데이터가 없을 때 0 을, ④ NULLIF 는 MAX(번호) 가 1 이면 NULL 을 돌려주는 전혀 다른 함수다. ※ 복원 자료의 기준 SQL `NVL(MAX(번호), 1) + 1` 은 데이터가 없을 때 2 를 돌려줘 문제 문장(없으면 1)과 맞지 않고 동일한 보기도 없어, 문장에 맞게 바로잡았다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT NVL(MAX(번호) + 1, 1) FROM T;"
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
    "title": "아래 두 테이블 A, B 조인 결과가 나머지와 다른 SQL 은?",
    "options": [
      "SELECT * FROM A NATURAL JOIN B;",
      "SELECT * FROM A JOIN B USING(SRN_NO);",
      "SELECT * FROM A INNER JOIN B;",
      "SELECT * FROM A, B WHERE A.SRN_NO = B.SRN_NO;"
    ],
    "correctIndex": 2,
    "explanation": "A 와 B 의 공통 컬럼은 SRN_NO 하나뿐이므로 ① NATURAL JOIN, ② USING(SRN_NO), ④ WHERE 조인은 모두 SRN_NO 가 같은 1 건을 반환한다. 반면 ③ 은 INNER JOIN 을 쓰면서 ON 이나 USING 으로 조인 조건을 주지 않아 문법 오류가 발생하므로 결과가 다르다.",
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
    "title": "아래 네 조인 중 결과 행 수가 잘못 매칭된 것은?",
    "options": [
      "INNER JOIN: 매칭 행만 반환",
      "LEFT OUTER JOIN: 좌측 전체 + 매칭",
      "RIGHT OUTER JOIN: 우측 전체 + 매칭",
      "FULL OUTER JOIN: 양쪽 매칭 행만 반환"
    ],
    "correctIndex": 3,
    "explanation": "FULL OUTER JOIN은 양쪽 테이블의 행을 모두 살리는 조인이라, 매칭되지 않은 행도 NULL로 채워 결과에 포함시킨다. 즉 LEFT OUTER JOIN과 RIGHT OUTER JOIN의 결과를 합친 합집합과 같다. \"양쪽 매칭 행만 반환\"이라는 ④번 설명은 INNER JOIN의 동작이지 FULL OUTER JOIN의 동작이 아니므로 잘못된 매칭이 된다. 정답은 ④번이다. ①·②·③ 은 각 조인의 결과를 바르게 설명했다.",
    "_source": "authored"
  },
  {
    "id": 10670,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 21,
    "title": "계층형 쿼리 설명 중 적절하지 않은 것은?",
    "options": [
      "START WITH 는 시작 행을 지정한다.",
      "CONNECT BY 는 계층 관계를 지정한다.",
      "WHERE 절 조건은 계층 전개 이전에 적용된다.",
      "ORDER SIBLINGS BY 는 동일 레벨 내 정렬을 수행한다."
    ],
    "correctIndex": 2,
    "explanation": "계층형 쿼리의 처리 순서를 알아야 한다. SQL은 먼저 START WITH로 시작 행을 정하고 CONNECT BY로 트리를 끝까지 펼친 뒤, 그렇게 만들어진 결과에 WHERE 절 필터를 적용한다. 즉 WHERE는 전개가 끝난 다음에 동작하므로 \"WHERE 절 조건은 계층 전개 이전에 적용된다\"는 ③번 설명이 틀려서 정답이 된다. ④ ORDER SIBLINGS BY는 같은 부모를 둔 형제 노드끼리만 정렬해 트리 구조를 깨뜨리지 않고 정돈해 준다. ① START WITH 가 시작(루트) 행을, ② CONNECT BY 가 부모·자식 연결 조건을 지정한다는 설명은 옳다.",
    "_source": "authored"
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
    "title": "1~100 데이터에서 10~50 범위를 조회하는 SQL 로 적절한 것은?",
    "options": [
      "WHERE COL IN (10, 50)",
      "WHERE COL = 10 OR COL = 50",
      "WHERE COL BETWEEN 10 AND 50",
      "WHERE COL >= 10 AND COL > 50"
    ],
    "correctIndex": 2,
    "explanation": "`BETWEEN A AND B`는 `A 이상이고 B 이하`를 한 번에 표현해 준다. ①의 IN은 정확히 10 또는 50인 두 값만 골라내고, ②의 OR도 마찬가지이다. ④는 `>= 10 AND > 50`이라 50보다 큰 값만 남아 의도와 다르다. 10부터 50 사이 모든 값을 잡는 것은 ③번뿐이다.",
    "_source": "authored"
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
    "title": "아래 T 테이블에 대한 SQL 의 결과로 옳은 것은?",
    "options": [
      "12",
      "13",
      "25",
      "0"
    ],
    "correctIndex": 2,
    "explanation": "CASE 식은 위에서 아래로 평가하다가 처음 참이 되는 분기를 따른다. T 에는 한 행만 있고 GRADE = 12, RANK = 13 이므로 GRADE + RANK = 25 이다. SUM(25) 의 결과는 25 이고 NULL 이 아니므로 ELSE 분기인 SUM(GRADE + RANK) 이 그대로 25 로 반환된다. 정답은 ③ 번이다. ① 12 와 ② 13 은 GRADE·RANK 중 한 컬럼만 본 값이고, ④ 0 은 합계가 NULL 일 때만 나오는 THEN 분기 값이다.",
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
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT CASE WHEN SUM(GRADE + RANK) IS NULL THEN 0\n            ELSE SUM(GRADE + RANK) END\nFROM   T;"
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
    "explanation": "집합 연산은 위에서 아래로 차례대로 적용된다. 먼저 `A UNION ALL B` 로 두 집합을 중복 포함해 합치면 {1, 2, 3, 3, 4, 5}. 그 결과에서 `MINUS C` 로 C 의 원소 {2, 4, 6} 을 모두 빼고 중복도 자동 제거 → {1, 3, 5}. 정답은 ①. ② 1, 2, 3 은 A 만 본 값, ③ 2, 4, 6 은 C 자체이고, ④ C 에 없는 1·3·5 가 남으므로 공집합이 아니다.",
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
    "title": "최대값을 조회하는 SQL 로 옳은 것은?",
    "options": [
      "SELECT MAX(COL) FROM T WHERE ROWNUM = 1;",
      "SELECT * FROM (SELECT COL FROM T ORDER BY COL DESC) WHERE ROWNUM = 1;",
      "SELECT COL FROM T ORDER BY COL DESC WHERE ROWNUM = 1;",
      "SELECT COL FROM T WHERE ROWNUM = (SELECT MAX(COL) FROM T);"
    ],
    "correctIndex": 1,
    "explanation": "ROWNUM은 결과 행에 1부터 차례로 번호를 매기는 가상 컬럼이다. 그러나 ROWNUM은 ORDER BY가 적용되기 전에 매겨지므로 단순히 `WHERE ROWNUM = 1`만 쓰면 정렬이 무시된 첫 행이 나와 최대값이 보장되지 않는다. 따라서 인라인 뷰 안에서 먼저 ORDER BY DESC로 정렬해 둔 뒤, 바깥에서 ROWNUM = 1로 첫 행을 잘라야 안전하게 최대값을 얻을 수 있다. 정답은 ②번이다. ① 은 WHERE ROWNUM = 1 이 먼저 임의의 한 행만 남긴 뒤 MAX 를 구해 전체 최대값이 보장되지 않고, ③ 은 ORDER BY 뒤에 WHERE 가 와 문법 오류이며, ④ 는 행 번호(ROWNUM)를 최대값과 비교해 의미가 다르다.",
    "_source": "authored"
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
    "title": "순위 1, 1, 2, 3, 3, 4, 5 와 같이 동순위를 허용하고 연속 순위를 부여하는 함수는?",
    "options": [
      "DENSE_RANK",
      "RANK",
      "ROW_NUMBER",
      "NTILE"
    ],
    "correctIndex": 0,
    "explanation": "같은 값에는 같은 순위를 주되 다음 순위를 건너뛰지 않고 1, 2, 2, 3처럼 연속해서 매기는 함수가 DENSE_RANK이다. ② RANK는 동순위 뒤 번호를 건너뛰며(1, 2, 2, 4...), ③ ROW_NUMBER는 동순위 없이 무조건 일련번호를 매기고, ④ NTILE은 그룹을 분할하는 함수이다. 정답은 ①번이다.",
    "_source": "authored"
  },
  {
    "id": 10682,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 33,
    "title": "파티션 내 전체 SUM 값 대비 각 행의 비율을 소수점으로 반환하는 함수는?",
    "options": [
      "PERCENT_RANK",
      "RATIO_TO_REPORT",
      "CUME_DIST",
      "NTILE"
    ],
    "correctIndex": 1,
    "explanation": "비율 함수 RATIO_TO_REPORT는 한 행의 값을 파티션 전체 합으로 나눈 비율을 0~1 사이의 소수로 돌려준다. 예: 합계가 100이고 어떤 행 값이 20이면 0.2를 반환한다. ① PERCENT_RANK는 순위 기반 백분위, ③ CUME_DIST는 누적 분포, ④ NTILE은 그룹 분할이라 의미가 다르다. 정답은 ②번이다.",
    "_source": "authored"
  },
  {
    "id": 10683,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 34,
    "title": "집합 연산자 중 교집합을 반환하는 것은?",
    "options": [
      "UNION",
      "UNION ALL",
      "INTERSECT",
      "EXCEPT"
    ],
    "correctIndex": 2,
    "explanation": "집합 연산자의 의미를 정리하면 ① UNION은 합집합(중복 제거), ② UNION ALL은 합집합(중복 유지), INTERSECT는 교집합(양쪽 모두에 있는 행), ④ EXCEPT/MINUS는 차집합이다. 두 SELECT의 공통 행을 보고 싶을 때 쓰는 것이 INTERSECT이므로 정답은 ③번이다.",
    "_source": "authored"
  },
  {
    "id": 10684,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 35,
    "title": "NULL 이 아닌 데이터만 조회하는 WHERE 조건은?",
    "options": [
      "IS NOT NULL",
      "<> NULL",
      "!= NULL",
      "NOT NULL"
    ],
    "correctIndex": 0,
    "explanation": "NULL은 일반 비교 연산자로 다룰 수 없다. ② `<> NULL`이나 ③ `!= NULL`처럼 쓰면 결과가 항상 UNKNOWN이 되어 어떤 행도 통과하지 못한다. NULL 여부를 검사하려면 전용 연산자인 `IS NULL` 또는 `IS NOT NULL`을 써야 한다. 정답은 ①번이다. ④ NOT NULL 은 컬럼 제약조건 키워드라 WHERE 조건으로 쓸 수 없다.",
    "_source": "authored"
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
    "explanation": "보기 4개 SQL을 차례로 분석한다. 가(A.상품ID = B.상품ID AND ROWNUM = 1) 는 상관 서브쿼리에 ROWNUM = 1을 두어 한 행만 보장하므로 정상 동작. 나(A.상품ID = B.상품ID) 는 상품 테이블에 같은 상품ID가 두 건(P001 사과·P001 사과(중복)) 있어 SELECT 절 스칼라 서브쿼리가 다중 행을 반환해 ORA-01427 오류. 다(= 단일 행 비교) 는 서브쿼리가 평가항목의 상품ID 3건을 반환하는데 = 는 한 행만 받을 수 있어 ORA-01427 오류. 라(EXISTS 상관 서브쿼리) 는 존재 여부만 확인하므로 정상. 따라서 오류가 발생하는 것은 나·다 두 개이므로 ②번이 정답. ① 은 정상 동작하는 가 를, ③ 은 정상인 라 를 포함했고, ④ 는 가·라 까지 모두 포함했다. ※ 복원 자료의 다 는 '평가항목에 상품ID 컬럼이 없다' 는 가정이 위 표와 모순돼, 같은 범위(서브쿼리 반환 행 수)의 오류 사례로 바꿨다.",
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
    "title": "CROSS JOIN 에 대한 설명으로 옳은 것은?",
    "options": [
      "한 테이블의 각 행에 대해 다른 테이블의 모든 행과 결합되는 조인이다.",
      "매칭되는 행만 반환한다.",
      "ON 절을 반드시 기술해야 한다.",
      "동일 이름 컬럼으로 자동 조인된다."
    ],
    "correctIndex": 0,
    "explanation": "CROSS JOIN(카티션 곱)은 조인 조건 없이 두 테이블의 모든 행을 일대일로 짝지어 만들 수 있는 모든 조합을 반환한다. 결과 행 수는 두 테이블의 행 수의 곱이다. ②는 INNER, ③은 일반 ON 절이 있는 조인, ④는 NATURAL JOIN의 특성이라 다르다. 정답은 ①번이다.",
    "_source": "authored"
  },
  {
    "id": 10687,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 38,
    "title": "사원과 차상위 매니저 정보를 함께 조회하는 SQL 로 옳은 것은?",
    "options": [
      "EMP A INNER JOIN EMP B ON A.MGR_NO = B.EMP_NO",
      "EMP A INNER JOIN EMP B ON A.EMP_NO = B.EMP_NO",
      "EMP A LEFT OUTER JOIN EMP B ON A.MGR_NO = B.EMP_NO",
      "EMP A RIGHT OUTER JOIN EMP B ON A.MGR_NO = B.EMP_NO"
    ],
    "correctIndex": 2,
    "explanation": "사원 자신과 그 매니저 정보를 함께 보려면 EMP 테이블을 자기 자신과 조인하는 셀프 조인을 한다. 이때 사원 A의 매니저 번호(A.MGR_NO)가 매니저 B의 사원 번호(B.EMP_NO)와 일치해야 하므로 ON 조건이 정해진다. 매니저가 없는 사원(예: CEO)도 결과에 포함시키려면 LEFT OUTER JOIN을 써야 한다. 정답은 ③번이다. ① INNER JOIN 은 매니저가 없는 사원(CEO)이 빠지고, ② A.EMP_NO = B.EMP_NO 는 자기 자신과 연결될 뿐이며, ④ RIGHT OUTER JOIN 은 매니저 쪽(B) 전체를 남겨 부하가 없는 사원까지 매니저 자리에 나온다.",
    "_source": "authored"
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
    "title": "아래 네 SQL 중 결과가 나머지와 다른 것은?",
    "options": [
      "LPAD('BCD', 3, 'A')",
      "RTRIM('EBCDE', 'E')",
      "SUBSTR('ABCDE', 2, 3)",
      "CONCAT(CONCAT(NULL, 'BC'), 'D')"
    ],
    "correctIndex": 1,
    "explanation": "① LPAD('BCD', 3, 'A')는 이미 길이가 3이라 패딩 없이 'BCD'를 그대로 반환. ③ SUBSTR('ABCDE', 2, 3) = 'BCD'. ④ CONCAT(CONCAT(NULL, 'BC'), 'D') = 'BCD' (NULL은 빈 문자열로 처리). 그러나 ② RTRIM('EBCDE', 'E')는 오른쪽 끝의 'E'만 잘라 'EBCD'가 되고 앞쪽 'E'는 그대로 남는다. 결과 형태가 명확히 다른 것은 ②번이다.",
    "_source": "authored"
  },
  {
    "id": 10690,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 41,
    "title": "아래 T 테이블에 대한 SQL 의 결과로 옳은 것은?",
    "options": [
      "105, 70",
      "70, 105",
      "100, 100",
      "NULL, NULL"
    ],
    "correctIndex": 0,
    "explanation": "T.COL = (100, 110, NULL). `AVG(COL)` 은 NULL 을 자동 제외해 (100+110)/2 = 105. `SUM(COL)/COUNT(*)` 는 SUM 만 NULL 제외(210), `COUNT(*)` 는 NULL 포함 행 수(3) 라 210/3 = 70. 정답 ① `105, 70`. ② 는 두 결과의 순서를 뒤바꾼 값이고, AVG·SUM 은 NULL 을 빼고 계산하므로 ④ NULL 이 되지 않는다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T 테이블",
        "headers": [
          "COL"
        ],
        "rows": [
          [
            "100"
          ],
          [
            "110"
          ],
          [
            "NULL"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT ROUND(AVG(COL)),\n       ROUND(SUM(COL)/COUNT(*))\nFROM   T;"
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
      "INSERT INTO 고객 VALUES ('C004', '신규'); INSERT INTO 주문 VALUES (504, 'C004');",
      "UPDATE 주문 SET 주문일 = SYSDATE WHERE 주문ID = 501;",
      "UPDATE 주문 SET 고객ID = 'C999' WHERE 주문ID = 501;"
    ],
    "correctIndex": 3,
    "explanation": "외래키 (FK) 는 부모 테이블 (고객) 의 PK 를 참조한다는 제약이라, 자식 테이블 (주문) 의 `고객ID` 값은 반드시 고객 테이블에 존재해야 한다. ① C001 은 고객에 존재 → 정상, ② 새 고객 C004 추가 후 그 ID 참조 → 정상, ③ 고객ID 는 그대로 두고 주문일만 변경 → FK 무관. ④ 'C999' 는 고객 테이블에 없어 ORA-02291 (참조 무결성 위배) 오류 발생.",
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
    "explanation": "ID 로 묶으면 A(3행), B(1행), C(2행), D(2행) 네 그룹이다. HAVING 은 COUNT(*) 가 아니라 COUNT(VAL) 로 거르는데, COUNT(VAL) 은 NULL 을 빼고 센다: A 2, B 1, C 0, D 2. 그래서 A 와 D 만 남고, SELECT 의 COUNT(*) 는 그룹의 전체 행 수라 A 는 3, D 는 2 다. ID 순으로 3, 2 두 행이다(①). ② 는 COUNT(VAL) 도 NULL 을 센다고 본 결과(C 가 남음)이고, ③ 은 COUNT(VAL) 이 같은 값(D 의 40, 40)을 한 번만 센다고 본 결과다(그건 COUNT(DISTINCT VAL)). ④ SELECT 에 집계 함수만 있고 ORDER BY 의 ID 는 GROUP BY 컬럼이라 오류가 나지 않는다.",
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
      "10, 10 (COL1 평균 = 20/2, COL2 평균 = 20/2)",
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
    "title": "UNION 에 대한 설명으로 가장 적절한 것은?",
    "options": [
      "UNION ALL 보다 성능이 좋다.",
      "상호 배타적 조건에만 사용된다.",
      "합집합이며 중복 행은 하나로 취급한다.",
      "중복 허용을 기본으로 한다."
    ],
    "correctIndex": 2,
    "explanation": "UNION은 두 SELECT 결과를 합치되 중복된 행은 한 번으로 줄여 보여준다. 그래서 ①에서 말하는 것과 달리 UNION ALL보다 정렬·중복 제거 비용이 들어 일반적으로 더 느리다. ②와 ④는 잘못된 진술이다. 정답은 ③번이다.",
    "_source": "authored"
  },
  {
    "id": 10695,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 46,
    "title": "아래 SQL 의 결과로 옳은 것은?",
    "options": [
      "AB",
      "BCDE",
      "CDE",
      "ABCDE"
    ],
    "correctIndex": 1,
    "explanation": "`SUBSTR('ABCDE', 2)`는 두 번째 문자부터 끝까지 잘라 온다. 길이를 지정하지 않으면 끝까지 가져오므로 'BCDE'가 된다. 시작 위치는 1부터 센다. 정답은 ②번이다. ① AB 는 앞 두 글자, ③ CDE 는 세 번째 글자부터, ④ ABCDE 는 시작 위치를 1 로 줬을 때의 결과다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT SUBSTR('ABCDE', 2) FROM DUAL;"
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
    "title": "사용자를 삭제할 때 해당 사용자에 속한 모든 오브젝트까지 함께 삭제하는 옵션은?",
    "options": [
      "RESTRICT",
      "PURGE",
      "CASCADE",
      "FORCE"
    ],
    "correctIndex": 2,
    "explanation": "DROP USER에 CASCADE 옵션을 붙이면 그 사용자가 소유한 테이블·뷰·시퀀스 등 모든 객체까지 함께 삭제된다. 옵션 없이 DROP USER를 시도하면 사용자가 가진 객체가 있을 때 삭제가 거부된다. ① RESTRICT는 참조 객체가 있을 때 삭제를 막는 보호 옵션, ② PURGE는 휴지통까지 비우는 옵션이라 의미가 다르다. 정답은 ③번이다. ④ FORCE 는 DROP USER 의 옵션이 아니다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "DROP USER user_name (   );"
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
    "explanation": "계층형 쿼리에서 조건의 위치가 결정적이다. CONNECT BY 절 안에 함께 둔 조건은 트리를 전개하는 단계 자체를 차단하여 그 행과 자식·손자 노드를 모두 제외한다. 본 SQL은 START WITH COL1=2에서 출발하고 CONNECT BY 조건에 AND COL1 <> 5가 들어가 있으므로, 출발 행 2의 자식 후보 5와 6 중 5는 차단되어 5와 그 자식 9가 모두 제외된다. 6은 통과되지만 자식이 없다. 결과는 {2, 6} 두 행이라 정답은 ②번이다. ① 1 은 시작 행 2 만 센 값이고, ③ 3 은 COL1 <> 5 를 WHERE 절에 둔 경우의 결과(2, 6, 9)다. WHERE 는 전개가 끝난 뒤 5 한 행만 지우므로 그 자식 9 가 남는다.",
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
