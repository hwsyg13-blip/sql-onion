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
    "explanation": "데이터 모델링은 보는 시각에 따라 셋으로 나뉩니다. 데이터 관점은 어떤 정보(엔터티·속성·관계)를 다룰지에 집중하고, 프로세스 관점은 어떤 일이 어떻게 처리되는지에 집중합니다. 데이터와 프로세스 관점은 두 가지를 함께 보면서 업무 처리 방식이 데이터에 어떤 영향을 주는지를 분석합니다. 설명이 그 영향 관계를 묘사하므로 정답은 ②번입니다.",
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
    "explanation": "서비스이용 엔터티의 PK가 (고객번호, 서비스번호, 이용일자) 세 컬럼으로 구성되어 있다는 점이 핵심입니다. 이용일자가 PK에 들어가 있으면 같은 고객이 같은 서비스를 다른 날 다시 이용해도 행이 새로 생길 수 있습니다. 즉 재이용이 자유롭게 가능하다는 의미이므로 \"재사용할 수 없도록 제약되어 있다\"는 ③번이 옳지 않은 설명이 되어 정답입니다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "고객"
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
        "headers": [
          "서비스이용"
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
        "headers": [
          "서비스"
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
    "explanation": "다른 속성에서 계산되어 만들어지는 속성을 파생속성이라고 합니다. 회원 ID·생년월일·상품 단가는 시스템에 직접 입력되어 보관되는 기본속성입니다. 반면 상품 총금액은 단가 × 수량으로 계산되어 도출되므로 파생속성입니다. 정답은 ④번입니다.",
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
    "explanation": "정규화 단계에서 제3정규형은 일반 속성끼리 서로 종속되지 않아야 한다는 조건(이행적 종속 제거)을 추가합니다. 예를 들어 사원 테이블에서 부서코드만 알아도 부서명을 알 수 있다면, 부서명은 사원 정보가 아니라 부서 정보로 따로 분리해야 합니다. 설명이 일반 속성 간 종속을 금지하는 조건을 묘사하므로 정답은 ③번입니다.",
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
    "explanation": "주식별자는 행 하나하나를 구별해 주는 핵심 키이므로 반드시 값이 있어야 합니다(NOT NULL). 비어 있으면 어느 행을 가리키는지 알 수 없습니다. 따라서 NULL을 허용한다는 ①번 설명이 잘못되어 정답이 됩니다. 나머지 보기는 주식별자의 표준 특성(최소성·유일성·불변성)에 부합합니다.",
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
    "explanation": "슈퍼-서브 타입 구조란 공통 속성을 가진 부모(슈퍼) 엔터티 아래에 특수한 자식(서브) 엔터티가 붙는 구조입니다. 구현 방법은 세 가지입니다. Single Table은 모든 서브를 하나의 큰 테이블에 합칩니다. One To One은 슈퍼와 서브를 각각 별도 테이블로 두는 1:1 분리 방식입니다. Plus(슈퍼+서브)는 슈퍼 없이 서브 별로 묶습니다. 개별 서브 테이블을 자주 따로 조회한다면 분리해 두는 것이 빠르므로 One To One이 적합해 정답은 ②번입니다.",
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
    "explanation": "같은 테이블 안에 자주 쓰이는 컬럼과 거의 안 쓰이는 컬럼이 섞여 있으면 매번 큰 행을 통째로 읽어 비효율이 발생합니다. 로그인용 핵심 컬럼만 별도 테이블로 분리하면 자주 일어나는 로그인 처리에서 데이터를 적게 읽어 성능이 향상됩니다. 이를 수직 분할이라고 합니다. 정답은 ②번입니다.",
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
    "explanation": "정규화는 데이터 중복을 줄이고 무결성을 높이는 작업이고, 반정규화는 성능을 위해 일부러 중복을 허용해 조회 속도를 끌어올리는 작업입니다. 표준 절차는 먼저 정규화를 끝까지 수행해 깨끗한 모델을 만든 뒤, 실측되는 성능 이슈에 맞춰 필요한 부분만 반정규화하는 것입니다. 처음부터 반정규화를 남발하면 데이터 정합성이 깨지기 쉽습니다. 정답은 ③번입니다.",
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
    "explanation": "기본키가 (주문번호, 상품번호) 두 컬럼으로 구성되어 있는데 상품명은 상품번호만 보면 알 수 있는 정보입니다. 즉 PK 일부에만 종속된 부분 함수 종속이 발생합니다. 부분 종속을 제거해 기본키 전체에 완전히 종속되도록 만드는 단계가 제2정규형입니다. 따라서 이 상태는 1정규형까지는 만족하지만 2정규형은 만족하지 못해 정답은 ②번입니다.",
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
    "explanation": "데이터베이스의 3단계 스키마는 사용자에게 가까운 순서로 외부 → 개념 → 내부입니다. 외부 스키마는 사용자나 응용 프로그램이 보는 개별 뷰, 개념 스키마는 조직 전체가 공유하는 통합된 논리 구조, 내부 스키마는 실제 저장 방식·인덱스 등 물리 구조를 정의합니다. 설명이 응용 프로그래머가 보는 개인적 DB 정의를 가리키므로 정답은 ①번입니다.",
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
    "title": "ONLINE·OFFLINE 두 컬럼에 대해 첫 번째·두 번째 컬럼 집계와 두 컬럼 조합, 전체 집계가 모두 필요한 SQL 로 적절한 것은?",
    "options": [
      "CUBE(주문일자, 주문방법)",
      "ROLLUP(주문일자, 주문방법)",
      "GROUPING SETS(주문일자, 주문방법)",
      "GROUP BY 주문일자, 주문방법"
    ],
    "correctIndex": 0,
    "explanation": "CUBE는 지정한 컬럼들로 만들 수 있는 모든 조합의 소계와 총계를 한 번에 만들어 줍니다. CUBE(A, B)는 (A, B), (A), (B), () 네 가지 그룹을 모두 반환합니다. 문제는 첫 컬럼·두 번째 컬럼 각각 집계, 두 컬럼 조합 집계, 전체 집계까지 모두 필요하다고 했으므로 CUBE가 적합합니다. ROLLUP은 (A, B), (A), ()만 만들고 (B) 단독은 만들지 않으며, GROUPING SETS는 명시한 그룹만 만들고, 단순 GROUP BY는 (A, B) 한 종류만 만듭니다. 정답은 ①번입니다.",
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
    "explanation": "ROLLUP(A, B)는 왼쪽부터 점차 줄여가며 (A, B), (A), () 세 가지 그룹을 만듭니다. 문제는 첫 컬럼 집계, 두 컬럼 조합 집계, 전체 집계가 필요하므로 정확히 ROLLUP이 만드는 세 가지 그룹과 일치합니다. CUBE는 (B) 단독까지 추가로 만들어 결과 행이 더 많아 의도에 맞지 않습니다. 정답은 ②번입니다.",
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
    "explanation": "트랜잭션은 한 묶음의 작업을 의미하며 무결성 유지를 위해 COMMIT(확정)과 ROLLBACK(취소)이라는 두 명령으로 제어합니다. 작업이 정상적으로 끝나면 COMMIT으로 영구 반영하고, 도중에 문제가 생기면 ROLLBACK으로 되돌립니다. ①은 지속성에 대한 설명이고, ②·③은 잘못된 진술입니다. 정답은 ④번입니다.",
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
    "explanation": "저장 프로시저는 미리 만들어 둔 SQL 묶음으로 호출만 하면 일괄 실행되어 네트워크 트래픽과 응답 시간을 줄여 줍니다. 트리거는 INSERT·UPDATE·DELETE 같은 이벤트가 발생하면 자동으로 실행되는 코드인데, 트리거 안에서는 COMMIT·ROLLBACK이 허용되지 않습니다. 호출한 트랜잭션의 일부로 함께 동작해야 하기 때문입니다. 따라서 \"프로시저와 트리거 모두에서 COMMIT·ROLLBACK 을 사용할 수 있다\"는 ③번 설명이 잘못되어 정답입니다. ④의 유저 정의 함수가 RETURN을 반드시 가져야 한다는 설명은 옳습니다.",
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
    "explanation": "SQL 명령은 역할에 따라 4가지로 분류됩니다. DDL은 객체 정의(CREATE/ALTER/DROP), DML은 데이터 조작(SELECT/INSERT/UPDATE/DELETE), DCL은 권한 제어(GRANT/REVOKE), TCL은 트랜잭션 제어(COMMIT/ROLLBACK)입니다. DB 시작·종료(STARTUP/SHUTDOWN)는 DCL이 아닌 시스템 관리 명령에 해당합니다. 따라서 \"DCL이 DB 구동·종료를 수행한다\"는 ②번 설명이 틀려서 정답이 됩니다.",
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
    "explanation": "일반 조인(INNER JOIN)은 양쪽 테이블에 모두 매칭되는 행만 결과로 보여줍니다. 매칭되지 않은 행까지 결과에 살리고 싶을 때 사용하는 것이 OUTER JOIN입니다. LEFT/RIGHT/FULL 세 가지 형태가 있어 각각 한쪽 또는 양쪽의 미매칭 행을 NULL로 채워 보존합니다. 정답은 ④번입니다.",
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
    "explanation": "원본 SQL `NVL(MAX(번호), 1) + 1`은 데이터가 없으면 NVL이 1을 반환하고 +1이 더해져 결과는 2가, 데이터가 있으면 MAX(번호)+1이 됩니다. 같은 형태를 만들려면 `+1`을 안쪽에 넣어 NULL일 때 1을 반환하도록 한 ②번 `COALESCE(MAX(번호)+1, 1)`이 가장 가깝습니다. ① COALESCE(MAX, 1)은 +1이 빠져 있고, ③ NVL(MAX+1, 0)은 NULL일 때 0, ④ NULLIF는 의미 자체가 다릅니다. 시험 문항 의도상 ②가 정답입니다. 다만 데이터가 없을 때 원본은 2를, ②는 1을 돌려준다는 미세한 차이가 있어 엄밀히 동일하지는 않다는 점을 함께 기억해 두면 좋습니다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT NVL(MAX(번호), 1) + 1 FROM T;"
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
    "title": "아래 데이터에 대해 이전 행 값을 반환하는 윈도우 함수는?",
    "options": [
      "SUM",
      "ROW_NUMBER",
      "LEAD",
      "LAG"
    ],
    "correctIndex": 3,
    "explanation": "윈도우 함수에서 행을 앞뒤로 들춰보는 함수가 두 가지 있습니다. LAG는 정해진 정렬 안에서 \"앞 행\"의 값을 가져오고, LEAD는 \"뒤 행\"의 값을 가져옵니다. \"이전 행 값\"을 반환한다고 했으므로 LAG가 정답입니다. SUM·ROW_NUMBER는 의미가 다릅니다. 정답은 ④번입니다.",
    "_source": "authored"
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
      "`SELECT * FROM A NATURAL JOIN B;`",
      "`SELECT * FROM A JOIN B USING(SRN_NO);`",
      "`SELECT * FROM A INNER JOIN B;`",
      "`SELECT * FROM A, B WHERE A.SRN_NO = B.SRN_NO;`"
    ],
    "correctIndex": 2,
    "explanation": "① `NATURAL JOIN` 과 ② `USING` 은 동일 컬럼명을 자동·수동으로 잡아 INNER JOIN 을 수행하므로 결과가 같다. ④ 는 같은 조건을 명시한 동등 조인. 그러나 ③ 은 `ON` 절이 빠진 `INNER JOIN` 으로 Oracle 에서는 구문 오류가 나거나 일부 환경에서는 CROSS JOIN 형태로 해석되어 결과 행이 폭증한다. 결과가 다른 것은 ③.",
    "_source": "authored"
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
    "explanation": "FULL OUTER JOIN은 양쪽 테이블의 행을 모두 살리는 조인이라, 매칭되지 않은 행도 NULL로 채워 결과에 포함시킵니다. 즉 LEFT OUTER JOIN과 RIGHT OUTER JOIN의 결과를 합친 합집합과 같습니다. \"양쪽 매칭 행만 반환\"이라는 ④번 설명은 INNER JOIN의 동작이지 FULL OUTER JOIN의 동작이 아니므로 잘못된 매칭이 됩니다. 정답은 ④번입니다.",
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
    "explanation": "계층형 쿼리의 처리 순서를 알아야 합니다. SQL은 먼저 START WITH로 시작 행을 정하고 CONNECT BY로 트리를 끝까지 펼친 뒤, 그렇게 만들어진 결과에 WHERE 절 필터를 적용합니다. 즉 WHERE는 전개가 끝난 다음에 동작하므로 \"WHERE 절 조건은 계층 전개 이전에 적용된다\"는 ③번 설명이 틀려서 정답이 됩니다. ORDER SIBLINGS BY는 같은 부모를 둔 형제 노드끼리만 정렬해 트리 구조를 깨뜨리지 않고 정돈해 줍니다.",
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
      "`SELECT P.PNAME FROM PLAYER P WHERE EXISTS (SELECT 1 FROM PLAYER X WHERE X.TEAM_ID = P.TEAM_ID AND X.HEIGHT = P.HEIGHT AND X.HEIGHT = (SELECT MIN(HEIGHT) FROM PLAYER WHERE TEAM_ID = P.TEAM_ID));`",
      "`SELECT P.PNAME FROM PLAYER P, (SELECT TEAM_ID, MIN(HEIGHT) AS MH FROM PLAYER GROUP BY TEAM_ID) M WHERE P.TEAM_ID = M.TEAM_ID AND P.HEIGHT = M.MH;`",
      "`SELECT P.PNAME FROM PLAYER P JOIN PLAYER X ON P.TEAM_ID = X.TEAM_ID GROUP BY P.PNAME, P.TEAM_ID, P.HEIGHT HAVING P.HEIGHT = MIN(X.HEIGHT);`",
      "`SELECT P.PNAME FROM PLAYER P WHERE EXISTS (SELECT 1 FROM PLAYER X WHERE X.TEAM_ID = P.TEAM_ID);`"
    ],
    "correctIndex": 3,
    "explanation": "원본 SQL 은 `(TEAM_ID, HEIGHT) IN (SELECT TEAM_ID, MIN(HEIGHT) ...)` 으로 \"각 팀의 최단신 선수\" 를 조회한다. ① 상관 서브쿼리, ② 인라인 뷰 조인, ③ JOIN + HAVING 형태로 모두 같은 결과를 낸다. ④ 는 단순히 \"같은 TEAM_ID 행이 존재하는지\" 만 확인하므로 PLAYER 테이블의 거의 모든 선수가 반환되어 결과가 다르다.",
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
    "explanation": "안쪽부터 차근차근 따라가면 됩니다. 가장 안쪽 인라인 뷰는 팀별로 사원의 연봉을 모두 더한 총급여를 만든 뒤 총급여 내림차순으로 정렬합니다. 그 위 인라인 뷰에서 ROWNUM = 1로 첫 행, 즉 총급여가 가장 큰 팀의 팀번호 하나만 뽑습니다. 마지막으로 그 팀번호와 일치하는 팀의 팀명을 조회합니다. 따라서 사원 연봉 합계가 가장 큰 팀의 이름이 결과로 나오므로 정답은 ②번입니다.",
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
    "explanation": "`BETWEEN A AND B`는 `A 이상이고 B 이하`를 한 번에 표현해 줍니다. ①의 IN은 정확히 10 또는 50인 두 값만 골라내고, ②의 OR도 마찬가지입니다. ④는 `>= 10 AND > 50`이라 50보다 큰 값만 남아 의도와 다릅니다. 10부터 50 사이 모든 값을 잡는 것은 ③번뿐입니다.",
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
    "explanation": "ORDER BY는 기본적으로 오름차순(ASC)으로 정렬합니다. 내림차순으로 바꾸려면 컬럼 뒤에 명시적으로 DESC 키워드를 붙여야 합니다. SELECT/FROM/WHERE 절은 정렬과 무관하므로 정답은 ④번입니다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT ... FROM ... WHERE ... ORDER BY A;  -- A 를 내림차순으로 정렬해야 함"
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
    "title": "아래 SQL 의 결과로 옳은 것은?",
    "options": [
      "12",
      "13",
      "25",
      "0"
    ],
    "correctIndex": 2,
    "explanation": "CASE 식은 위에서 아래로 평가하다가 처음 참이 되는 분기를 따릅니다. 한 행만 있고 GRADE = 12, RANK = 13이라고 가정하면, GRADE + RANK = 25입니다. SUM(25)의 결과는 25이고 NULL이 아니므로 ELSE 분기인 SUM(GRADE + RANK)이 그대로 25로 반환됩니다. 정답은 ③번입니다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- 데이터: GRADE=12, RANK=13\nSELECT CASE WHEN SUM(GRADE + RANK) IS NULL THEN 0\n            ELSE SUM(GRADE + RANK) END\nFROM T;"
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
    "explanation": "인라인 뷰 B는 PLAYER 테이블에서 가장 큰 점수를 MAX_SCORE로 만들어 한 행만 반환합니다. 그다음 GRADE_TABLE의 LOWER ≤ MAX_SCORE ≤ UPPER 조건으로 등급 구간에 끼어드는 행을 찾습니다. 즉 최고 득점이 어느 등급 구간에 속하는지를 매칭하는 SQL입니다. 원본 기출 데이터 기준 SILVER 구간이 매칭되어 정답은 ②번입니다.",
    "_source": "authored",
    "references": [
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
    "title": "아래 집합 연산 SQL 의 결과로 옳은 것은?",
    "options": [
      "1, 3, 5",
      "1, 2, 3",
      "2, 4, 6",
      "공집합"
    ],
    "correctIndex": 0,
    "explanation": "집합 연산은 위에서 아래로 차례대로 적용됩니다. 먼저 A UNION ALL B로 두 집합을 중복 포함해 합친 뒤, 그 결과에서 C에 들어 있는 값을 모두 빼는 것이 MINUS입니다. MINUS는 자동으로 중복까지 제거하므로 (A ∪ B) − C의 결과에는 중복이 남지 않습니다. 원본 데이터 기준 결과로 1, 3, 5가 남아 정답은 ①번입니다.",
    "_source": "authored",
    "references": [
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
    "title": "아래 MERGE 구문 수행 후 결과로 옳은 것은?",
    "options": [
      "0, 0, 0",
      "100, 100, 100",
      "NULL, NULL, NULL",
      "오류"
    ],
    "correctIndex": 1,
    "explanation": "MERGE는 한 명령으로 UPDATE와 INSERT를 동시에 처리하는 구문입니다. ON 조건으로 두 테이블을 매칭한 뒤, 매칭되면 UPDATE를, 매칭되지 않으면 INSERT를 수행합니다. 본 문항에서는 매칭되든 매칭되지 않든 V가 100으로 채워지도록 작성되어 있어 결과의 모든 행 V 컬럼은 100이 됩니다. 정답은 ②번입니다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "MERGE INTO A USING B ON (A.ID = B.ID)\nWHEN MATCHED THEN UPDATE SET A.V = 100\nWHEN NOT MATCHED THEN INSERT (ID, V) VALUES (B.ID, 100);"
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
    "explanation": "ROWNUM은 결과 행에 1부터 차례로 번호를 매기는 가상 컬럼입니다. 그러나 ROWNUM은 ORDER BY가 적용되기 전에 매겨지므로 단순히 `WHERE ROWNUM = 1`만 쓰면 정렬이 무시된 첫 행이 나와 최대값이 보장되지 않습니다. 따라서 인라인 뷰 안에서 먼저 ORDER BY DESC로 정렬해 둔 뒤, 바깥에서 ROWNUM = 1로 첫 행을 잘라야 안전하게 최대값을 얻습니다. 정답은 ②번입니다. ① MAX 함수만으로도 가능하지만, 본 문항이 묻는 것은 ROWNUM 사용 패턴입니다.",
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
    "explanation": "`KEEP (DENSE_RANK FIRST ORDER BY ...)` 구문은 \"정렬 결과의 1순위 그룹\"만 골라낸 뒤 그 안에서 집계 함수를 적용합니다. 여기서는 COL2 DESC 정렬 시 COL2 = 1이 1순위 그룹이고, 그 안에 COL1 = 10과 20 두 행이 들어 있습니다. MAX(COL1)을 적용하면 20이 반환되어 정답은 ③번입니다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT MAX(COL1) KEEP (DENSE_RANK FIRST ORDER BY COL2 DESC)\nFROM T;   -- COL2 기준 DESC 정렬 시 첫 값의 COL1 반환"
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
    "explanation": "같은 값에는 같은 순위를 주되 다음 순위를 건너뛰지 않고 1, 2, 2, 3처럼 연속해서 매기는 함수가 DENSE_RANK입니다. RANK는 동순위 뒤 번호를 건너뛰며(1, 2, 2, 4...), ROW_NUMBER는 동순위 없이 무조건 일련번호를 매기고, NTILE은 그룹을 분할하는 함수입니다. 정답은 ①번입니다.",
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
    "explanation": "비율 함수 RATIO_TO_REPORT는 한 행의 값을 파티션 전체 합으로 나눈 비율을 0~1 사이의 소수로 돌려줍니다. 예: 합계가 100이고 어떤 행 값이 20이면 0.2를 반환합니다. PERCENT_RANK는 순위 기반 백분위, CUME_DIST는 누적 분포, NTILE은 그룹 분할이라 의미가 다릅니다. 정답은 ②번입니다.",
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
    "explanation": "집합 연산자의 의미를 정리하면 UNION은 합집합(중복 제거), UNION ALL은 합집합(중복 유지), INTERSECT는 교집합(양쪽 모두에 있는 행), EXCEPT/MINUS는 차집합입니다. 두 SELECT의 공통 행을 보고 싶을 때 쓰는 것이 INTERSECT이므로 정답은 ③번입니다.",
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
    "explanation": "NULL은 일반 비교 연산자로 다룰 수 없습니다. `<> NULL`이나 `!= NULL`처럼 쓰면 결과가 항상 UNKNOWN이 되어 어떤 행도 통과하지 못합니다. NULL 여부를 검사하려면 전용 연산자인 `IS NULL` 또는 `IS NOT NULL`을 써야 합니다. 정답은 ①번입니다.",
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
      "정상 쿼리",
      "`SELECT (SELECT COL1 FROM 상품 B WHERE A.상품ID = B.상품ID) FROM 평가항목 A` — 다중 행 반환으로 오류",
      "`SELECT ... WHERE (SELECT 상품ID FROM 평가항목 ...)` — 평가항목에 상품ID 컬럼이 없어 오류",
      "정상 쿼리"
    ],
    "correctIndex": 1,
    "explanation": "본 문항은 보기 4개 SQL(가·나·다·라) 중 어느 SQL이 오류를 일으키는지를 묻습니다. 가(A.상품ID = B.상품ID AND ROWNUM = 1)는 상관 서브쿼리에 ROWNUM = 1을 두어 한 행만 보장하므로 정상 동작합니다. 라(EXISTS 상관 서브쿼리)는 존재 여부만 확인하므로 정상입니다. 그러나 나(A.상품ID = B.상품ID)는 상품 테이블에 같은 상품ID가 두 건(P001 사과·P001 사과(중복)) 있어 SELECT 절 스칼라 서브쿼리가 다중 행을 반환해 \"단일 행 서브쿼리에 둘 이상의 행이 반환됨\" 오류가 납니다. 다(상품 테이블에서 평가항목.상품ID 참조)는 평가항목에 상품ID 컬럼이 없다는 가정이라 컬럼 식별 오류가 납니다. 따라서 오류가 발생하는 것은 나·다 두 개이므로 ②번이 정답입니다.",
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
        "caption": "가. 정상 쿼리 (단일 행 보장 스칼라 서브쿼리)",
        "code": "SELECT A.평가번호,\n       (SELECT B.상품명 FROM 상품 B WHERE A.상품ID = B.상품ID AND ROWNUM = 1) AS 상품명\nFROM   평가항목 A;"
      },
      {
        "type": "sql",
        "caption": "나. 다중 행 반환으로 오류",
        "code": "SELECT (SELECT B.상품명 FROM 상품 B WHERE A.상품ID = B.상품ID) AS 상품명\nFROM   평가항목 A;"
      },
      {
        "type": "sql",
        "caption": "다. 컬럼 부재로 오류 (평가항목에 상품ID 컬럼이 없는 가정)",
        "code": "SELECT *\nFROM   상품 A\nWHERE  A.상품ID = (SELECT 상품ID FROM 평가항목 WHERE 평가번호 = 'E01');"
      },
      {
        "type": "sql",
        "caption": "라. 정상 쿼리 (EXISTS 상관 서브쿼리)",
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
    "explanation": "CROSS JOIN(카티션 곱)은 조인 조건 없이 두 테이블의 모든 행을 일대일로 짝지어 만들 수 있는 모든 조합을 반환합니다. 결과 행 수는 두 테이블의 행 수의 곱입니다. ②는 INNER, ③은 일반 ON 절이 있는 조인, ④는 NATURAL JOIN의 특성이라 다릅니다. 정답은 ①번입니다.",
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
    "explanation": "사원 자신과 그 매니저 정보를 함께 보려면 EMP 테이블을 자기 자신과 조인하는 셀프 조인을 합니다. 이때 사원 A의 매니저 번호(A.MGR_NO)가 매니저 B의 사원 번호(B.EMP_NO)와 일치해야 하므로 ON 조건이 정해집니다. 매니저가 없는 사원(예: CEO)도 결과에 포함시키려면 LEFT OUTER JOIN을 써야 합니다. 정답은 ③번입니다.",
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
    "explanation": "일반적으로 N개의 테이블을 조인하려면 최소 N - 1개의 조인 조건이 필요합니다. A·B·C 세 테이블이라면 조건 두 개면 충분합니다. 따라서 \"조인 조건이 최소 3개 이상이어야 한다\"는 ③번 설명은 잘못되어 정답이 됩니다. 식별자 관계는 부모 키가 자식의 PK 일부가 되며, 이로 인해 자식은 부모 없이 존재할 수 없는 의존 관계가 됩니다.",
    "_source": "authored"
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
      "CONCAT(CONCAT(NULL, 'BC'), 'E')"
    ],
    "correctIndex": 1,
    "explanation": "각 함수의 결과를 따져 봅니다. ① LPAD('BCD', 3, 'A')는 이미 길이가 3이라 패딩 없이 'BCD'를 그대로 반환. ③ SUBSTR('ABCDE', 2, 3) = 'BCD'. ④ CONCAT(CONCAT(NULL, 'BC'), 'E') = 'BCE' (NULL은 빈 문자열로 처리). 그러나 ② RTRIM('EBCDE', 'E')는 오른쪽 끝의 'E'만 잘라 'EBCD'가 되고 앞쪽 'E'는 그대로 남습니다. 결과 형태가 명확히 다른 것은 ②번입니다.",
    "_source": "authored"
  },
  {
    "id": 10690,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 41,
    "title": "아래 SQL 의 결과로 옳은 것은? (COL 에 NULL 1건 포함)",
    "options": [
      "105, 70",
      "70, 105",
      "100, 100",
      "NULL, NULL"
    ],
    "correctIndex": 0,
    "explanation": "AVG 는 NULL 을 제외해 210/2=105, SUM/COUNT(*) 는 210/3=70 이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- 데이터: 100, 110, NULL\nSELECT ROUND(AVG(COL)), ROUND(SUM(COL)/COUNT(*)) FROM T;"
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
    "title": "아래 시나리오 중 외래키 참조 무결성 오류가 발생하는 구문은?",
    "options": [
      "주문 테이블에 고객 ID 를 INSERT 할 때 고객 테이블에 있는 ID 로 추가",
      "고객 테이블에 새 고객을 추가한 뒤 주문 추가",
      "주문 테이블에서 고객 ID = 기존 값을 유지한 채 다른 컬럼 업데이트",
      "주문 테이블의 고객 ID 를 고객 테이블에 없는 값으로 업데이트"
    ],
    "correctIndex": 3,
    "explanation": "외래키(FK)는 부모 테이블의 PK를 참조한다는 약속이라, 자식 테이블의 FK 값은 반드시 부모 테이블에 존재하는 값이어야 합니다. 부모에 없는 값으로 INSERT나 UPDATE를 시도하면 참조 무결성 위배 오류가 발생합니다. ①·②·③은 모두 정상 흐름이고, ④만 부모에 없는 고객 ID로 자식을 변경하므로 정답입니다.",
    "_source": "authored"
  },
  {
    "id": 10692,
    "examSetId": "round-47",
    "examLabel": "제47회 (2022년 11월)",
    "round": 47,
    "subject": "2과목",
    "number": 43,
    "title": "아래 SQL 의 결과로 옳은 것은?",
    "options": [
      "조건을 만족하는 그룹이 없으면 공집합",
      "조건을 만족하는 그룹의 수만큼 COUNT 반환",
      "300 인 그룹이 하나 존재하면 1건 반환",
      "HAVING 은 GROUP BY 와 함께 사용할 수 없다."
    ],
    "correctIndex": 2,
    "explanation": "`GROUP BY ID`로 같은 ID끼리 묶고, `HAVING COUNT(*) >= 2`로 행 수가 2 이상인 그룹만 남깁니다. 살아남은 그룹마다 한 행씩 결과로 나오며 각 행에는 그 그룹의 COUNT 값이 표시됩니다. 예를 들어 행이 300건인 ID 그룹 하나가 조건을 통과하면 결과로 300이 1건 반환됩니다. 정답은 ③번입니다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT COUNT(*) FROM T GROUP BY ID HAVING COUNT(*) >= 2;"
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
    "explanation": "WHERE COL2 IS NOT NULL로 (10, 20)과 (10, 0) 두 행만 남습니다. AVG(COL1) = (10 + 10) ÷ 2 = 10, AVG(COL2) = (20 + 0) ÷ 2 = 10이 됩니다. AVG는 NULL을 자동으로 빼지만 0은 정상 값으로 포함된다는 점이 함정입니다. 정답은 ③번입니다.",
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
    "explanation": "UNION은 두 SELECT 결과를 합치되 중복된 행은 한 번으로 줄여 보여줍니다. 그래서 ①에서 말하는 것과 달리 UNION ALL보다 정렬·중복 제거 비용이 들어 일반적으로 더 느립니다. ②와 ④는 잘못된 진술입니다. 정답은 ③번입니다.",
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
    "explanation": "`SUBSTR('ABCDE', 2)`는 두 번째 문자부터 끝까지 잘라 옵니다. 길이를 지정하지 않으면 끝까지 가져오므로 'BCDE'가 됩니다. 시작 위치는 1부터 셉니다. 정답은 ②번입니다.",
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
    "explanation": "DROP USER에 CASCADE 옵션을 붙이면 그 사용자가 소유한 테이블·뷰·시퀀스 등 모든 객체까지 함께 삭제됩니다. 옵션 없이 DROP USER를 시도하면 사용자가 가진 객체가 있을 때 삭제가 거부됩니다. RESTRICT는 참조 객체가 있을 때 삭제를 막는 보호 옵션, PURGE는 휴지통까지 비우는 옵션이라 의미가 다릅니다. 정답은 ③번입니다.",
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
    "title": "아래 SQL 의 빈칸에 들어갈 키워드 조합으로 옳은 것은?",
    "options": [
      "GROUP BY, DESC",
      "HAVING, ASC",
      "ORDER BY, DESC",
      "GROUP BY, ASC"
    ],
    "correctIndex": 0,
    "explanation": "부서별로 합계를 구하려면 GROUP BY 부서로 그룹을 만들어야 합니다. 합계 큰 순서로 보고 싶다면 ORDER BY에 DESC(내림차순)를 붙입니다. ORDER BY는 ASC가 기본이므로 큰 값부터 보려면 DESC를 명시해야 합니다. 정답은 ①번입니다.",
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
    "title": "아래 SQL 의 결과로 옳은 것은?",
    "options": [
      "1, 2",
      "3, 3",
      "4, 5",
      "5, 4"
    ],
    "correctIndex": 3,
    "explanation": "인라인 뷰에서 `ROW_NUMBER() OVER (PARTITION BY 부서 ORDER BY 연봉 DESC)`는 부서별로 연봉 높은 순서대로 1, 2, 3...을 매깁니다. 바깥에서 `WHERE RN = 1`로 거르면 각 부서에서 연봉 1위만 남습니다. 결과는 부서마다 한 명씩 나오는 부서별 최고 연봉자의 COL1 값이 됩니다. 원본 기출 데이터 기준 정답은 ④번 5, 4입니다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT COL1\nFROM (SELECT COL1, ROW_NUMBER() OVER (PARTITION BY 부서 ORDER BY 연봉 DESC) AS RN\n      FROM EMP)\nWHERE RN = 1;"
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
    "explanation": "계층형 쿼리에서 조건의 위치가 결정적입니다. CONNECT BY 절 안에 함께 둔 조건은 트리를 전개하는 단계 자체를 차단하여 그 행과 자식·손자 노드를 모두 제외합니다. 본 SQL은 START WITH COL1=2에서 출발하고 CONNECT BY 조건에 AND COL1 <> 5가 들어가 있으므로, 출발 행 2의 자식 후보 5와 6 중 5는 차단되어 5와 그 자식 9가 모두 제외됩니다. 6은 통과되지만 자식이 없습니다. 결과는 {2, 6} 두 행이라 정답은 ②번입니다.",
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
