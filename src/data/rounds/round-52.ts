// Auto-generated from PDF + blog + scripts/authored/round-52.json
// 제52회 — 2024년 3월 · 50문항
// ⚠ 직접 편집 금지. 출처별 데이터를 고친 뒤 'node scripts/build-quiz-bank.mjs' 재실행.
import type { QuizQuestion } from '../quizBank';

export const ROUND_52: QuizQuestion[] = [
  {
    "id": 10400,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "1과목",
    "number": 1,
    "title": "엔터티의 주식별자가 없어도 되는 예외적 경우는?",
    "options": [
      "기본 엔터티",
      "중심 엔터티",
      "행위 엔터티",
      "관계 엔터티"
    ],
    "correctIndex": 3,
    "explanation": "관계 엔터티는 양쪽 부모의 키 조합으로 식별되므로 별도의 주식별자 정의가 생략되는 경우가 있다.",
    "_source": "authored"
  },
  {
    "id": 10401,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "1과목",
    "number": 2,
    "title": "아래 학생·학과 ERD 와 ON DELETE CASCADE 정책에서 `DELETE FROM 학과 WHERE 학과코드 = 'CS';` 실행 결과로 옳은 것은?",
    "options": [
      "학과 한 행이 삭제되고, 해당 학과를 참조하던 학생 행도 함께 삭제된다.",
      "학과 행은 그대로 남고 학생 행만 삭제된다.",
      "학과 한 행이 삭제되고 학생.학과코드 가 모두 NULL 로 갱신된다.",
      "학생이 학과를 참조하고 있어 참조 무결성 오류로 삭제가 중단된다."
    ],
    "correctIndex": 0,
    "explanation": "FK 에 `ON DELETE CASCADE` 가 설정되면 부모(학과) 행 삭제 시 그 행을 참조하던 자식(학생) 행이 자동으로 함께 삭제된다. ② 는 ON DELETE 가 자식 행만 단독으로 지우는 정책이 아니라는 점에서 오답, ③ 은 `ON DELETE SET NULL` 의 동작이고, ④ 는 `ON DELETE RESTRICT/NO ACTION` 의 동작이다. 본 문항은 CASCADE 가 명시되어 있으므로 ④ 가 아닌 ① 이 단일 정답이다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "학생·학과 ERD — 학과 1, 학생 0..N (FK: 학생.학과코드 → 학과.학과코드, ON DELETE CASCADE)",
        "mermaid": "erDiagram\n    학과 ||--o{ 학생 : \"소속\"\n    학과 {\n        string 학과코드 PK\n        string 학과명\n    }\n    학생 {\n        string 학번 PK\n        string 이름\n        string 학과코드 FK\n    }"
      },
      {
        "type": "table",
        "caption": "학과 (실행 전)",
        "headers": [
          "학과코드",
          "학과명"
        ],
        "rows": [
          [
            "CS",
            "컴퓨터공학과"
          ],
          [
            "EE",
            "전자공학과"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "학생 (실행 전)",
        "headers": [
          "학번",
          "이름",
          "학과코드"
        ],
        "rows": [
          [
            "1001",
            "김철수",
            "CS"
          ],
          [
            "1002",
            "이영희",
            "CS"
          ],
          [
            "1003",
            "박민수",
            "EE"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- FK 정의 (학생 테이블 생성 시)\nCREATE TABLE 학생 (\n  학번      VARCHAR2(10) PRIMARY KEY,\n  이름      VARCHAR2(20),\n  학과코드  VARCHAR2(4),\n  CONSTRAINT FK_학생_학과 FOREIGN KEY (학과코드)\n    REFERENCES 학과(학과코드) ON DELETE CASCADE\n);\n\n-- 부모 행 삭제\nDELETE FROM 학과 WHERE 학과코드 = 'CS';"
      },
      {
        "type": "table",
        "caption": "학과 (실행 후) — CS 한 행 삭제",
        "headers": [
          "학과코드",
          "학과명"
        ],
        "rows": [
          [
            "EE",
            "전자공학과"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "학생 (실행 후) — CS 학과 학생 2명 CASCADE 삭제",
        "headers": [
          "학번",
          "이름",
          "학과코드"
        ],
        "rows": [
          [
            "1003",
            "박민수",
            "EE"
          ]
        ]
      }
    ]
  },
  {
    "id": 10402,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "1과목",
    "number": 3,
    "title": "아래 설명에 해당하는 스키마는?",
    "options": [
      "외부 스키마",
      "개념 스키마",
      "내부 스키마",
      "물리 스키마"
    ],
    "correctIndex": 1,
    "explanation": "조직 전체 관점에서 데이터를 통합적으로 표현하는 스키마는 개념 스키마이다. 외부 스키마는 사용자 관점, 내부 스키마는 물리적 저장 관점에 해당한다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "조직 전체 관점에서 데이터를 통합적으로 표현한 스키마"
      }
    ]
  },
  {
    "id": 10403,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "1과목",
    "number": 4,
    "title": "개념적 데이터 모델링에 대한 설명으로 옳은 것은?",
    "options": [
      "추상화 수준이 높아 세부 구현을 파악하기 어렵다.",
      "물리적 저장 구조에 가장 가깝다.",
      "성능 튜닝을 위한 단계이다.",
      "인덱스 설계를 포함한다."
    ],
    "correctIndex": 0,
    "explanation": "개념적 데이터 모델링은 추상화 수준이 가장 높아 업무 중심으로 표현되며 세부 구현(저장 구조·인덱스·튜닝 등)은 다루지 않는다.",
    "_source": "authored"
  },
  {
    "id": 10404,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "1과목",
    "number": 5,
    "title": "아래 설명에 해당하는 엔터티 분류는?",
    "options": [
      "행위 엔터티",
      "중심 엔터티",
      "기본 엔터티",
      "관계 엔터티"
    ],
    "correctIndex": 2,
    "explanation": "다른 엔터티의 부모 역할을 하면서 업무에 원래부터 존재해 독립적으로 생성되는 엔터티는 기본 엔터티이다. 중심 엔터티는 기본 엔터티에서 파생되어 업무의 중심 역할을 한다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "해당 엔터티가 다른 엔터티들의 부모 역할을 하며, 업무에 원래부터 존재하여 독립적으로 생성된다."
      }
    ]
  },
  {
    "id": 10405,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "1과목",
    "number": 6,
    "title": "'ERD 에서 인스턴스는 두 개 이상의 속성을 가지고, 속성은 하나의 속성값을 가진다' 는 규칙을 표현한 도식으로 옳은 것은?",
    "options": [
      "엔터티 ─ 인스턴스(1:1) ─ 속성(1:1) ─ 속성값(1:1)",
      "엔터티 ─ 인스턴스(1:M) ─ 속성(1:M) ─ 속성값(1:M)",
      "엔터티 ─ 인스턴스(M:1) ─ 속성(M:1) ─ 속성값(1:1)",
      "엔터티 ─ 인스턴스(1:M) ─ 속성(1:M) ─ 속성값(1:1)"
    ],
    "correctIndex": 3,
    "explanation": "왼쪽에서 오른쪽 방향으로 1:M 관계가 두 번 반복되고, 마지막 속성값 방향은 1:1 관계가 된다.",
    "_source": "authored"
  },
  {
    "id": 10406,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "1과목",
    "number": 7,
    "title": "다른 엔터티의 주식별자를 참조하는 키로 적절한 것은?",
    "options": [
      "내부 식별자",
      "외래키(FK)",
      "후보키",
      "대체키"
    ],
    "correctIndex": 1,
    "explanation": "다른 엔터티의 주식별자(PK)를 참조하기 위해 사용하는 키는 외래키(FK)이다. 후보키·대체키는 같은 엔터티 내부의 식별자 후보이다.",
    "_source": "authored"
  },
  {
    "id": 10407,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "1과목",
    "number": 8,
    "title": "식별 관계와 비식별 관계에 대한 설명 중 옳은 것은?",
    "options": [
      "식별 관계는 점선, 비식별 관계는 실선으로 표기한다.",
      "식별 관계와 비식별 관계 모두 실선으로 표기한다.",
      "식별 관계는 실선, 비식별 관계는 점선으로 표기한다.",
      "ERD 표기법에 따라 둘을 구분하지 않는다."
    ],
    "correctIndex": 2,
    "explanation": "ERD(IE 표기법)에서 식별 관계는 실선, 비식별 관계는 점선으로 표기한다. 식별 관계는 부모의 주식별자가 자식의 주식별자에 포함되는 관계이다.",
    "_source": "authored"
  },
  {
    "id": 10408,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "1과목",
    "number": 9,
    "title": "교수·학생·과목 간 M:N 관계를 정규화할 때 추가로 생기는 테이블의 수는?",
    "options": [
      "1개",
      "3개",
      "2개",
      "4개"
    ],
    "correctIndex": 2,
    "explanation": "교수-학생, 학생-과목의 M:N 관계가 각각 분해되어 연결 엔터티 두 개가 추가로 생성된다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "교수·학생·과목 M:N 정규화 ERD — [수강][이수] 두 개의 연결 엔터티 추가",
        "mermaid": "erDiagram\n    교수 ||--o{ 수강 : \"담당\"\n    학생 ||--o{ 수강 : \"수강\"\n    학생 ||--o{ 이수 : \"이수\"\n    과목 ||--o{ 이수 : \"포함\""
      }
    ]
  },
  {
    "id": 10409,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "1과목",
    "number": 10,
    "title": "1정규형·2정규형·3정규형에 대한 설명으로 옳지 않은 것은?",
    "options": [
      "3정규화는 1정규화·2정규화를 만족하지 않아도 수행할 수 있다.",
      "1정규형은 모든 속성이 원자값을 가진다.",
      "2정규형은 부분 함수 종속을 제거한다.",
      "3정규형은 이행 함수 종속을 제거한다."
    ],
    "correctIndex": 0,
    "explanation": "3정규화는 반드시 1정규형과 2정규형을 모두 만족한 상태에서만 수행할 수 있다.",
    "_source": "authored"
  },
  {
    "id": 10410,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 11,
    "title": "아래 T 테이블에 대한 SQL 의 결과로 출제 의도상 옳은 것은? (원본 기출 정답 보존)",
    "options": [
      "모든 행 반환",
      "COL1 = NULL, COL2 = A",
      "COL1 = 3, COL2 = C",
      "COL1 = 4, COL2 = D"
    ],
    "correctIndex": 3,
    "explanation": "원본 기출 정답은 ④ COL1=4, COL2=D 로 보존한다. 출제 의도는 'COL2 = NULL' 비교를 'COL2 IS NULL' 로 의역해 COL1≠1 이고 COL2≠NULL 인 행을 찾는 것 — 이때 (4, D) 가 정답이 된다.\n\n다만 SQL 표준 NULL 처리 규칙으로 엄격히 평가하면 'COL2 = NULL' 은 모든 행에서 UNKNOWN 을 반환하므로 NOT (X OR UNKNOWN) 도 모든 행에서 UNKNOWN 또는 FALSE 가 되어 결과는 공집합이 되어야 한다. 이 점은 원본 기출의 모호한 케이스로 알려져 있다.",
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
            "NULL",
            "A"
          ],
          [
            "1",
            "B"
          ],
          [
            "3",
            "C"
          ],
          [
            "4",
            "D"
          ]
        ],
        "caption": "T 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT COL1, COL2\nFROM   T\nWHERE  NOT (COL1 = 1 OR COL2 = NULL);"
      }
    ]
  },
  {
    "id": 10411,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 12,
    "title": "아래 T 테이블 (VAL, OPT) 에 대해 결과 값이 나머지와 다른 함수는?",
    "options": [
      "NVL(VAL, OPT)",
      "COALESCE(VAL, OPT)",
      "NULLIF(VAL, OPT)",
      "CASE WHEN VAL IS NOT NULL THEN VAL ELSE OPT END"
    ],
    "correctIndex": 2,
    "explanation": "NULLIF 는 두 인자가 같으면 NULL, 다르면 첫 번째 값을 반환하므로 나머지와 결과가 다르다. ① NVL/② COALESCE/④ CASE 는 VAL 이 NULL 일 때 OPT 로 대체하고 그 외에는 VAL 을 그대로 반환하므로 동일한 결과를 낸다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T 테이블",
        "headers": [
          "VAL",
          "OPT"
        ],
        "rows": [
          [
            "100",
            "50"
          ],
          [
            "100",
            "NULL"
          ],
          [
            "NULL",
            "250"
          ],
          [
            "450",
            "100"
          ]
        ]
      }
    ]
  },
  {
    "id": 10412,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 13,
    "title": "아래 T 테이블에 대한 윈도우 절의 실행 결과로 옳은 것은?",
    "options": [
      "3, 9, 15, 21",
      "3, 7, 12, 15",
      "12, 18, 18, 15",
      "18, 18, 18, 18"
    ],
    "correctIndex": 2,
    "explanation": "ORDER BY ID 이므로 RANGE 의 ±2 는 'ID 값' 기준 범위. ID=1 의 윈도우: ID ∈ [-1, 3] = {1, 2, 3} → VAL 합 3+4+5 = 12. ID=2: ID ∈ [0, 4] = {1, 2, 3, 4} → 3+4+5+6 = 18. ID=3: ID ∈ [1, 5] = {1, 2, 3, 4} → 18. ID=4: ID ∈ [2, 6] = {2, 3, 4} → 4+5+6 = 15. 결과 12, 18, 18, 15 → ③ 정답.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "ID",
          "VAL"
        ],
        "rows": [
          [
            "1",
            "3"
          ],
          [
            "2",
            "4"
          ],
          [
            "3",
            "5"
          ],
          [
            "4",
            "6"
          ]
        ],
        "caption": "T 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT VAL, SUM(VAL) OVER (ORDER BY ID\n                           RANGE BETWEEN 2 PRECEDING AND 2 FOLLOWING) AS S\nFROM T;"
      }
    ]
  },
  {
    "id": 10413,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 14,
    "title": "아래 EMP 테이블 (사원-매니저) 에 대한 계층형 SQL 에서 PRIOR 키워드가 들어갈 위치로 옳은 것은?",
    "options": [
      "ㄱ 위치",
      "ㄴ 위치",
      "ㄱ·ㄴ 위치 모두",
      "위치 어디도 아님"
    ],
    "correctIndex": 1,
    "explanation": "PRIOR 는 '이전 행' 의 컬럼을 참조하는 연산자이므로 PRIOR 매니저 ↔ 현재 사원이 아니라, PRIOR 사원 ↔ 현재 매니저 형태로 부모 사원의 사번이 자식 매니저와 매칭되도록 배치된다. 따라서 ㄴ 위치에 PRIOR 가 들어가야 한다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP 테이블",
        "headers": [
          "사원",
          "매니저"
        ],
        "rows": [
          [
            "100",
            "(NULL)"
          ],
          [
            "200",
            "100"
          ],
          [
            "300",
            "100"
          ],
          [
            "400",
            "200"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT 사원, 매니저\nFROM   EMP\nSTART WITH 매니저 IS NULL\nCONNECT BY ( ㄱ ) 사원 = ( ㄴ ) 매니저;"
      }
    ]
  },
  {
    "id": 10414,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 15,
    "title": "아래 T 테이블에 NVL(금액, 0) 을 적용했을 때 출력 결과가 가장 큰 금액인 행은?",
    "options": [
      "1번 행 (1000)",
      "2번 행 (NVL 로 0 출력)",
      "3번 행 (3000)",
      "4번 행 (NVL 로 0 출력)"
    ],
    "correctIndex": 2,
    "explanation": "NVL(금액, 0) 적용 후 출력값: ID=1 → 1000, ID=2 → 0 (NVL 적용), ID=3 → 3000, ID=4 → 0 (NVL 적용). 가장 큰 값은 ID=3 의 3000. 정답 ③.\n\n보충: 원본 기출이 \"올바르게 출력되는 행\" 표현을 사용해 모호함이 있었으나 (NULL 이 아닌 행은 ① ③ 둘 다 그대로 출력), 출제 의도는 \"NVL 적용 후 가장 큰 금액\" 으로 해석하는 것이 정답 ③ 과 일치한다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "ID",
          "금액"
        ],
        "rows": [
          [
            "1",
            "1000"
          ],
          [
            "2",
            "NULL"
          ],
          [
            "3",
            "3000"
          ],
          [
            "4",
            "NULL"
          ]
        ],
        "caption": "T 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT NVL(금액, 0) FROM T;"
      }
    ]
  },
  {
    "id": 10415,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 16,
    "title": "계층형 질의에서 정방향·역방향 탐색 방향을 결정하는 키워드는?",
    "options": [
      "PRIOR",
      "START WITH",
      "CONNECT BY",
      "LEVEL"
    ],
    "correctIndex": 0,
    "explanation": "PRIOR 의 위치가 부모-자식 관계를 결정한다.",
    "_source": "authored"
  },
  {
    "id": 10416,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 17,
    "title": "아래 설명에 해당하는 트랜잭션의 특성은?",
    "options": [
      "원자성",
      "일관성",
      "고립성",
      "지속성"
    ],
    "correctIndex": 2,
    "explanation": "트랜잭션의 ACID 중 고립성(Isolation)에 대한 설명이다. 동시 실행되는 다른 트랜잭션의 영향을 받지 않고 독립적으로 수행됨을 보장한다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "트랜잭션이 동시에 실행될 경우 다른 트랜잭션에 의해 영향을 받지 않고 독립적으로 실행되어야 한다."
      }
    ]
  },
  {
    "id": 10417,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 18,
    "title": "서브쿼리에 대한 설명 중 적절하지 않은 것은?",
    "options": [
      "서브쿼리는 SELECT, WHERE, FROM 절 등에 사용할 수 있다.",
      "서브쿼리 테이블의 컬럼을 메인 쿼리에서 직접 사용할 수 있다.",
      "연관 서브쿼리는 메인 쿼리의 컬럼을 참조한다.",
      "스칼라 서브쿼리는 단일 값을 반환한다."
    ],
    "correctIndex": 1,
    "explanation": "메인 쿼리는 서브쿼리의 컬럼을 직접 참조할 수 없다.",
    "_source": "authored"
  },
  {
    "id": 10418,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 19,
    "title": "RANK 컬럼에 1, 2, 2, 3, ... 과 같이 순위가 부여되는 윈도우 함수는?",
    "options": [
      "DENSE_RANK",
      "RANK",
      "ROW_NUMBER",
      "NTILE"
    ],
    "correctIndex": 0,
    "explanation": "동순위가 발생해도 다음 순위를 건너뛰지 않고 1, 2, 2, 3 처럼 부여하는 함수는 DENSE_RANK 이다. RANK 는 1, 2, 2, 4 처럼 건너뛴다.",
    "_source": "authored"
  },
  {
    "id": 10419,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 20,
    "title": "명령어와 분류가 올바르게 짝지어지지 않은 것은?",
    "options": [
      "INSERT — DCL",
      "SELECT — DQL",
      "CREATE — DDL",
      "GRANT — DCL"
    ],
    "correctIndex": 0,
    "explanation": "INSERT 는 DML 이다.",
    "_source": "authored"
  },
  {
    "id": 10420,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 21,
    "title": "아래 설명에 해당하는 집합 연산자는?",
    "options": [
      "UNION",
      "UNION ALL",
      "INTERSECT",
      "EXCEPT"
    ],
    "correctIndex": 3,
    "explanation": "첫 번째 결과 집합에서 두 번째 결과 집합에 존재하는 행을 제외하는 차집합 연산자는 EXCEPT(Oracle 의 MINUS) 이다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "첫 번째 결과 집합에서 두 번째 결과 집합에 존재하는 행을 제외하고 반환한다."
      }
    ]
  },
  {
    "id": 10421,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 22,
    "title": "아래 NAMES 테이블에서 세 번째 문자가 'L' 인 단어를 찾는 LIKE 패턴으로 옳은 것은?",
    "options": [
      "'L%'",
      "'%L'",
      "'__L%'",
      "'L__%'"
    ],
    "correctIndex": 2,
    "explanation": "LIKE 패턴에서 `_` 는 임의의 한 문자, `%` 는 0개 이상의 임의 문자를 의미한다. 따라서 \"세 번째 문자가 'L'\" 을 표현하려면 앞에 `_` 두 개를 두어 임의의 두 문자를 건너뛴 뒤 'L', 그 뒤에 `%` 로 임의 길이 문자열을 잇는 `'__L%'` 가 된다. ① 은 'L' 로 시작, ② 는 'L' 로 끝남, ④ 는 첫 글자가 'L' 이고 네 번째에 임의 문자열이 와 의미가 다르다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "NAMES 테이블",
        "headers": [
          "NAME"
        ],
        "rows": [
          [
            "APPLE"
          ],
          [
            "HELLO"
          ],
          [
            "WORLD"
          ],
          [
            "MILK"
          ],
          [
            "GULF"
          ]
        ]
      },
      {
        "type": "sql",
        "caption": "( ) 안에 들어갈 LIKE 패턴 고르기",
        "code": "SELECT *\nFROM   NAMES\nWHERE  NAME LIKE ( );"
      }
    ]
  },
  {
    "id": 10422,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 23,
    "title": "아래 SQL 의 결과로 옳은 것은?",
    "options": [
      "0",
      "1",
      "6",
      "14"
    ],
    "correctIndex": 2,
    "explanation": "각 행별 COALESCE 결과는 1, 2, 3 이며 SUM = 6 이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "C1",
          "C2",
          "C3"
        ],
        "rows": [
          [
            "1",
            "2",
            "3"
          ],
          [
            "NULL",
            "2",
            "3"
          ],
          [
            "NULL",
            "NULL",
            "3"
          ]
        ],
        "caption": "TAB1 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT SUM(COALESCE(C1, C2, C3)) FROM TAB1;"
      }
    ]
  },
  {
    "id": 10423,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 24,
    "title": "SELECT 문의 실행 순서로 올바른 것은?",
    "options": [
      "SELECT - FROM - WHERE - GROUP BY - HAVING - ORDER BY",
      "FROM - SELECT - WHERE - GROUP BY - HAVING - ORDER BY",
      "FROM - WHERE - GROUP BY - HAVING - ORDER BY - SELECT",
      "FROM - WHERE - GROUP BY - HAVING - SELECT - ORDER BY"
    ],
    "correctIndex": 3,
    "explanation": "SELECT 문의 논리적 실행 순서는 FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY 이다. 작성 순서와 다르다는 점이 핵심이다.",
    "_source": "authored"
  },
  {
    "id": 10424,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 25,
    "title": "아래 EMP 테이블에 대해 두 컬럼 A, B 의 값이 서로 다른 결과가 되는 SQL 은?",
    "options": [
      "SELECT SUM(SAL) AS A, SUM(SAL) AS B FROM EMP;",
      "SELECT AVG(SAL) AS A, AVG(SAL) AS B FROM EMP;",
      "SELECT MAX(SAL) AS A, MIN(SAL) AS B FROM EMP;",
      "SELECT COUNT(SAL) AS A, COUNT(SAL) AS B FROM EMP;"
    ],
    "correctIndex": 2,
    "explanation": "MAX 와 MIN 은 각각 최댓값(5000)·최솟값(2000) 을 반환하므로 A 와 B 결과가 다르다. ① SUM/② AVG/④ COUNT 는 동일 함수를 두 번 호출하므로 A 와 B 가 같다.",
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
            "7001",
            "5000"
          ],
          [
            "7002",
            "3500"
          ],
          [
            "7003",
            "2800"
          ],
          [
            "7004",
            "2000"
          ]
        ]
      }
    ]
  },
  {
    "id": 10425,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 26,
    "title": "아래 ERD 와 같이 제품·생산제품·생산라인 엔터티가 있을 때 제품과 생산라인을 직접 조인하면 발생하는 결과는?",
    "options": [
      "정상 조인 결과",
      "중복 제거된 결과",
      "공집합",
      "카티션 곱(Cartesian Product)"
    ],
    "correctIndex": 3,
    "explanation": "제품과 생산라인은 교차 엔터티 '생산제품' 을 거쳐 M:N 으로 연결된다. 중간 엔터티를 건너뛰고 두 테이블을 직접 조인하면 조인 조건이 성립할 키가 없어 모든 행이 곱해지는 카티션 곱(CROSS JOIN) 이 발생한다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "제품·생산제품·생산라인 ERD — [생산제품] 이 M:N 교차 엔터티",
        "mermaid": "erDiagram\n    제품 ||--o{ 생산제품 : \"생산\"\n    생산라인 ||--o{ 생산제품 : \"운영\"\n    제품 {\n        string 제품번호 PK\n        string 제품명\n    }\n    생산제품 {\n        string 제품번호 PK,FK\n        string 라인번호 PK,FK\n        date 생산일자\n    }\n    생산라인 {\n        string 라인번호 PK\n        string 라인명\n    }"
      }
    ]
  },
  {
    "id": 10426,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 27,
    "title": "주문한 이력이 없는 회원을 조회하는 SQL 로 옳은 것은?",
    "options": [
      "SELECT * FROM 회원 WHERE EXISTS (SELECT 1 FROM 주문 WHERE 주문.회원ID = 회원.회원ID);",
      "SELECT * FROM 회원 WHERE 회원ID IN (SELECT 회원ID FROM 주문);",
      "SELECT * FROM 회원 M WHERE NOT EXISTS (SELECT 1 FROM 주문 O WHERE O.회원ID = M.회원ID);",
      "SELECT * FROM 회원 INNER JOIN 주문 ON 회원.회원ID = 주문.회원ID;"
    ],
    "correctIndex": 2,
    "explanation": "주문 이력이 없는 회원은 주문 테이블에 매칭 행이 없는 회원이므로 NOT EXISTS 또는 LEFT OUTER JOIN ... IS NULL 패턴이 정답이다. ① EXISTS 는 주문 있는 회원, ② IN 도 주문 있는 회원, ④ INNER JOIN 은 매칭만 — 모두 의도와 반대. 정답 ③ NOT EXISTS.",
    "_source": "authored"
  },
  {
    "id": 10427,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 28,
    "title": "EMPLOYEE 테이블을 삭제할 때 참조하는 모든 제약 조건을 함께 제거하려면 어떤 옵션을 사용해야 하는가?",
    "options": [
      "RESTRICT",
      "WITH GRANT",
      "NO ACTION",
      "CASCADE CONSTRAINTS"
    ],
    "correctIndex": 3,
    "explanation": "테이블을 삭제하면서 이를 참조하는 외래키 등 모든 제약을 함께 제거하려면 DROP TABLE ... CASCADE CONSTRAINTS 옵션을 사용한다.",
    "_source": "authored"
  },
  {
    "id": 10428,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 29,
    "title": "권한(ROLE) 에 대한 설명으로 옳은 것은?",
    "options": [
      "CREATE 로 권한을 부여하고 DROP 으로 회수한다.",
      "INSERT 로 권한을 부여하고 DELETE 로 회수한다.",
      "GRANT 로 권한을 부여하고 REVOKE 로 회수한다.",
      "COMMIT 으로 권한을 부여하고 ROLLBACK 으로 회수한다."
    ],
    "correctIndex": 2,
    "explanation": "권한은 GRANT 로 부여하고 REVOKE 로 회수한다. ROLE 은 권한의 묶음이며 동일하게 GRANT·REVOKE 로 관리한다.",
    "_source": "authored"
  },
  {
    "id": 10429,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 30,
    "title": "CTAS(CREATE TABLE AS SELECT) 로 테이블을 복제할 때 적용되는 제약 조건 중 옳은 설명은?",
    "options": [
      "프라이머리 키(PK) 는 복제되지 않는다.",
      "NOT NULL 조건은 전달되지 않는다.",
      "CHECK 제약은 전달된다.",
      "DEFAULT 값은 그대로 전달된다."
    ],
    "correctIndex": 0,
    "explanation": "CTAS 는 NOT NULL 과 컬럼 타입만 전달하며 PK·FK·UNIQUE·CHECK·DEFAULT 등은 복제되지 않는다.",
    "_source": "authored"
  },
  {
    "id": 10430,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 31,
    "title": "총 월급 2,000 이상인 직원을 기준으로 조건을 만족하지 않는 경우 NULL 을 반환하도록 하는 CASE 문으로 옳은 것은?",
    "options": [
      "CASE WHEN 총월급 >= 2000 THEN 총월급 ELSE 0 END",
      "CASE WHEN 총월급 >= 2000 THEN 총월급 END",
      "CASE WHEN 총월급 < 2000 THEN NULL END",
      "CASE WHEN 총월급 >= 2000 THEN 총월급 ELSE NULL END"
    ],
    "correctIndex": 3,
    "explanation": "조건을 만족하지 않을 때 NULL 을 반환하려면 ELSE NULL 을 명시해야 한다. ELSE 를 생략하면 동일하게 NULL 이 반환되지만, 명시적으로 NULL 반환을 묻는 보기는 ④ 이다.",
    "_source": "authored"
  },
  {
    "id": 10431,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 32,
    "title": "아래 네 개의 SQL 중 결과가 나머지와 다른 것은?",
    "options": [
      "SELECT SUM(COL1) FROM T WHERE COL2 IS NOT NULL;",
      "SELECT AVG(COL1) * COUNT(COL2) FROM T;",
      "SELECT COUNT(COL2) * (SUM(COL1) / COUNT(COL2)) FROM T;",
      "SELECT SUM(COL1) FROM T;"
    ],
    "correctIndex": 3,
    "explanation": "원본 기출에서 구체적 SQL 표기는 유실되었고 정답 번호(④)만 복원되어 있다. ①·②·③ 은 모두 COL2 가 NULL 이 아닌 행에 한정한 합과 동치이지만, ④ 는 NULL 행까지 포함한 전체 SUM 이라 결과가 다르다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "원본 PDF 표기: '문제 32. A결과와 B결과 답 다른 것 고르는 거 / 정답: 4번' — 본문 SQL 4 개와 선지 텍스트가 원본 복원 메모에서 누락되었으며, 정답 번호만 보존되어 있다."
      }
    ]
  },
  {
    "id": 10432,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 33,
    "title": "SQL 의 특징으로 볼 수 없는 것은?",
    "options": [
      "절차적(Procedural)",
      "구조적(Structured)",
      "집합적(Set-based)",
      "선언적(Declarative)"
    ],
    "correctIndex": 0,
    "explanation": "SQL 은 비절차적 언어이다.",
    "_source": "authored"
  },
  {
    "id": 10433,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 34,
    "title": "아래 사원 테이블에 대한 집합 연산자 SQL 의 결과로 옳은 것은?",
    "options": [
      "8895",
      "8925",
      "8900",
      "8950"
    ],
    "correctIndex": 1,
    "explanation": "내부 서브쿼리는 `MAX(연봉) UNION MIN(연봉)` 으로 두 집계 값을 결합한다 (UNION 은 중복 제거). 사원 테이블에서 MAX(연봉) = 5000, MIN(연봉) = 3925 → UNION 결과 두 행 (5000, 3925). 외부 `SUM(연봉)` 으로 합산하면 5000 + 3925 = 8925.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "사원ID",
          "연봉"
        ],
        "rows": [
          [
            "1",
            "5000"
          ],
          [
            "2",
            "4200"
          ],
          [
            "3",
            "3925"
          ],
          [
            "4",
            "4500"
          ]
        ],
        "caption": "사원 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT SUM(연봉) FROM (\n  SELECT MAX(연봉) AS 연봉 FROM 사원\n  UNION\n  SELECT MIN(연봉) AS 연봉 FROM 사원\n);"
      },
      {
        "type": "text",
        "content": "원본 PDF 표기: '문제 34. MAX MIN + union 중복제거 / 정답: 8925' — 원본 본문 SQL 일부가 누락되어, 외부 SUM 으로 합계를 구하는 형태로 재구성하였다."
      }
    ]
  },
  {
    "id": 10434,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 35,
    "title": "아래 T 테이블에서 소계 없이 (A, B) 세부 집계와 () 총계만 한 번에 나타내기 위해 괄호를 중첩한 ROLLUP 구문으로 옳은 것은?",
    "options": [
      "ROLLUP(A, B)",
      "ROLLUP((A), B)",
      "ROLLUP((A, B))",
      "ROLLUP(A, (B))"
    ],
    "correctIndex": 2,
    "explanation": "중첩 괄호 `((A, B))` 는 (A, B) 를 하나의 그룹 단위로 취급하므로 (A, B) 세부 집계와 () 총계 두 가지만 반환된다. ① `ROLLUP(A, B)` 는 (A, B), (A), () 세 그룹, ② `ROLLUP((A), B)` 는 (A, B), (A), () 와 동일, ④ `ROLLUP(A, (B))` 는 (A, B), (A), () 와 동일하게 (A) 소계가 추가된다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T 테이블",
        "headers": [
          "A",
          "B",
          "C"
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
        "type": "table",
        "caption": "기대 결과 — (A, B) 세부 + () 총계만 (A 단독 소계 없음)",
        "headers": [
          "A",
          "B",
          "SUM(C)"
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
          ],
          [
            "(NULL)",
            "(NULL)",
            "60"
          ]
        ]
      }
    ]
  },
  {
    "id": 10435,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 36,
    "title": "NULL 을 포함한 컬럼에 대한 AVG 계산에 대한 설명으로 옳은 것은?",
    "options": [
      "AVG(컬럼) 과 AVG(NVL(컬럼, 0)) 은 항상 같다.",
      "AVG(컬럼) 은 NULL 을 0 으로 처리하여 계산한다.",
      "AVG(NVL(컬럼, 0)) 은 NULL 행을 제외하고 계산한다.",
      "AVG(컬럼) 과 AVG(NVL(컬럼, 0)) 은 NULL 처리 방식이 달라 결과가 다르다."
    ],
    "correctIndex": 3,
    "explanation": "AVG 는 NULL 을 자동 제외하지만 NVL 로 치환하면 분모에 NULL 건도 포함되어 평균이 작아진다.",
    "_source": "authored"
  },
  {
    "id": 10436,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 37,
    "title": "NATURAL JOIN 에 대한 설명으로 옳지 않은 것은?",
    "options": [
      "동일 이름을 가진 컬럼이 있으면 자동으로 조인 조건이 된다.",
      "NATURAL JOIN 은 USING·ON 절과 함께 사용할 수 있다.",
      "조인 결과에 동일 이름 컬럼은 한 번만 나타난다.",
      "동일 이름 컬럼이 없으면 CROSS JOIN 과 동일한 결과가 된다."
    ],
    "correctIndex": 1,
    "explanation": "NATURAL JOIN 과 USING·ON 은 동시에 사용할 수 없다.",
    "_source": "authored"
  },
  {
    "id": 10437,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 38,
    "title": "제약 조건 설명 중 옳지 않은 것은?",
    "options": [
      "하나의 테이블에 기본키(PK) 는 하나만 설정할 수 있다.",
      "고유키(UNIQUE) 는 NULL 값을 허용한다.",
      "CHECK 조건은 TRUE/FALSE 로 판별 가능한 식이어야 한다.",
      "DEFAULT 는 값이 지정되면 기존 데이터에도 소급 적용된다."
    ],
    "correctIndex": 3,
    "explanation": "DEFAULT 변경은 과거 데이터에 적용되지 않는다.",
    "_source": "authored"
  },
  {
    "id": 10438,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 39,
    "title": "지정한 컬럼의 모든 부분집합 조합에 대해 집계를 산출하는 절은?",
    "options": [
      "ROLLUP",
      "GROUPING SETS",
      "GROUP BY",
      "CUBE"
    ],
    "correctIndex": 3,
    "explanation": "지정한 컬럼들의 모든 부분집합 조합에 대해 집계를 산출하는 절은 CUBE 이다. ROLLUP 은 계층적 소계만, GROUPING SETS 는 명시한 조합만 산출한다.",
    "_source": "authored"
  },
  {
    "id": 10439,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 40,
    "title": "아래 T 테이블에 대해 WHERE NOT(COL <= 2) 조건의 결과로 반환되는 COL 값은?",
    "options": [
      "NULL, 3, 4",
      "1, 2",
      "3, 4",
      "전체 행"
    ],
    "correctIndex": 2,
    "explanation": "NULL 과의 비교는 UNKNOWN 을 반환하고 NOT(UNKNOWN) 도 UNKNOWN 이므로 COL 이 NULL 인 행은 제외된다. COL <= 2 는 1, 2 에 대해 TRUE 이고 그 NOT 은 FALSE 이므로 1, 2 도 제외된다. 결과적으로 COL > 2 를 만족하는 3, 4 만 반환된다.",
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
            "NULL"
          ],
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
        "type": "sql",
        "code": "SELECT COL FROM T WHERE NOT (COL <= 2);"
      }
    ]
  },
  {
    "id": 10440,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 41,
    "title": "아래 두 테이블 T1(3행), T2(3행) 에 대한 네 가지 JOIN SQL 중 결과 행 수가 나머지와 다른 것은? (단, 모든 행이 매칭되는 데이터)",
    "options": [
      "SELECT * FROM T1 INNER JOIN T2 ON T1.ID = T2.ID;",
      "SELECT * FROM T1 LEFT OUTER JOIN T2 ON T1.ID = T2.ID;",
      "SELECT * FROM T1 RIGHT OUTER JOIN T2 ON T1.ID = T2.ID;",
      "SELECT * FROM T1 CROSS JOIN T2;"
    ],
    "correctIndex": 3,
    "explanation": "INNER/LEFT/RIGHT OUTER JOIN 은 모두 ON 조건으로 ID 가 매칭되는 행만 반환하므로 (모든 행이 매칭되는 가정에서) 결과는 3 행으로 동일하다. CROSS JOIN 은 조인 조건 없이 모든 조합을 반환하므로 3 × 3 = 9 행으로 결과 행 수가 가장 많다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T1 테이블",
        "headers": [
          "ID",
          "VAL"
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
        "caption": "T2 테이블",
        "headers": [
          "ID",
          "DESCRIPTION"
        ],
        "rows": [
          [
            "1",
            "X"
          ],
          [
            "2",
            "Y"
          ],
          [
            "3",
            "Z"
          ]
        ]
      }
    ]
  },
  {
    "id": 10441,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 42,
    "title": "아래 ERD 와 같이 제품·생산제품·생산라인 엔터티가 있을 때 제품과 생산라인을 직접 조인할 경우 발생하는 현상은?",
    "options": [
      "정상 조인 결과",
      "공집합",
      "중복 제거 결과",
      "카티션 곱"
    ],
    "correctIndex": 3,
    "explanation": "제품과 생산라인은 교차 엔터티인 생산제품을 거쳐 M:N 관계로 연결된다. 중간 엔터티를 건너뛰고 두 테이블을 직접 `JOIN` 하면 조인 조건이 성립할 키가 없어 모든 행이 곱해지는 카티션 곱(CROSS JOIN) 이 발생한다. 정확히 조인하려면 `제품 JOIN 생산제품 ON 제품.제품번호 = 생산제품.제품번호 JOIN 생산라인 ON 생산제품.라인번호 = 생산라인.라인번호` 형태로 중간 엔터티를 경유해야 한다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "제품·생산제품·생산라인 ERD — [생산제품] 이 M:N 교차 엔터티",
        "mermaid": "erDiagram\n    제품 ||--o{ 생산제품 : \"생산\"\n    생산라인 ||--o{ 생산제품 : \"운영\"\n    제품 {\n        string 제품번호 PK\n        string 제품명\n    }\n    생산제품 {\n        string 제품번호 PK,FK\n        string 라인번호 PK,FK\n        date 생산일자\n    }\n    생산라인 {\n        string 라인번호 PK\n        string 라인명\n    }"
      }
    ]
  },
  {
    "id": 10442,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 43,
    "title": "NVL, NVL2, NULLIF, COALESCE 함수의 결과로 옳은 것은?",
    "options": [
      "NVL(NULL, 'A') 의 결과는 NULL 이다.",
      "NVL2(NULL, 'A', 'B') 의 결과는 'B' 이다.",
      "NULLIF('A', 'A') 의 결과는 'A' 이다.",
      "COALESCE(NULL, NULL, NULL) 의 결과는 'NULL 문자열' 이다."
    ],
    "correctIndex": 1,
    "explanation": "NVL2(EXPR, V1, V2) 는 EXPR 이 NULL 이면 V2 를 반환한다. 따라서 NVL2(NULL, 'A', 'B') = 'B'. ① NVL(NULL,'A')='A', ③ NULLIF('A','A')=NULL, ④ COALESCE(NULL,NULL,NULL)=NULL 이므로 ② 만 옳다.",
    "_source": "authored"
  },
  {
    "id": 10443,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 44,
    "title": "아래 T 테이블에 대한 네 개의 AVG 계산식 중 결과가 서로 다른 것은?",
    "options": [
      "SUM(NVL(COL, 0)) / COUNT(*)",
      "SUM(COL) / COUNT(*)",
      "AVG(NVL(COL, 0))",
      "AVG(COL)"
    ],
    "correctIndex": 3,
    "explanation": "AVG(COL) 은 NULL 을 자동 제외하여 (10+20)/2 = 15 를 반환한다. ① ② ③ 은 모두 NULL 을 0 으로 취급하거나 분모가 전체 행이라 (10+0+20)/3 = 10 으로 같은 값이 나온다.",
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
            "10"
          ],
          [
            "NULL"
          ],
          [
            "20"
          ]
        ]
      }
    ]
  },
  {
    "id": 10444,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 45,
    "title": "행의 중복을 제거하는 SELECT 키워드는?",
    "options": [
      "DISTINCT",
      "UNIQUE",
      "LIMIT",
      "TOP"
    ],
    "correctIndex": 0,
    "explanation": "SELECT 절에서 행의 중복을 제거하는 표준 키워드는 DISTINCT 이다. UNIQUE 는 일부 DBMS 의 동의어이며 표준 정답은 DISTINCT 이다.",
    "_source": "authored"
  },
  {
    "id": 10445,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 46,
    "title": "아래 MERGE 구문 실행 후 결과로 옳은 것은?",
    "options": [
      "1.a 2.a",
      "1.a 2.a 3.c",
      "1.b 2.a 3.c",
      "1.b 3.c"
    ],
    "correctIndex": 2,
    "explanation": "ID=1 은 UPDATE, ID=2 유지, ID=3 은 신규 INSERT 된다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TGT",
        "headers": [
          "ID",
          "V"
        ],
        "rows": [
          [
            "1",
            "a"
          ],
          [
            "2",
            "a"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "SRC",
        "headers": [
          "ID",
          "V"
        ],
        "rows": [
          [
            "1",
            "b"
          ],
          [
            "3",
            "c"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "MERGE INTO TGT T USING SRC S ON (T.ID = S.ID)\nWHEN MATCHED THEN UPDATE SET T.V = S.V\nWHEN NOT MATCHED THEN INSERT (ID, V) VALUES (S.ID, S.V);"
      }
    ]
  },
  {
    "id": 10446,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 47,
    "title": "YYYYMMDDHH24MISS 포맷에 해당하는 결과는?",
    "options": [
      "연도 네 자리만 표시",
      "연/월/일/시/분/초 14자리 숫자 문자열",
      "월/일/시/분 10자리",
      "연/월/일/시/분/초를 포함한 ISO 8601 표기"
    ],
    "correctIndex": 1,
    "explanation": "YYYYMMDDHH24MISS 포맷은 4+2+2+2+2+2 = 14자리 숫자 문자열로, 연·월·일·시(24시)·분·초를 모두 포함한다.",
    "_source": "authored"
  },
  {
    "id": 10447,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 48,
    "title": "아래 EMP 테이블에 대한 계층형 SQL 에서 PRIOR 키워드가 들어갈 위치로 옳은 것은?",
    "options": [
      "ㄱ",
      "ㄴ",
      "ㄷ",
      "ㄹ"
    ],
    "correctIndex": 2,
    "explanation": "PRIOR 는 CONNECT BY 조건식의 좌측에 위치해 이전(부모) 행을 지정한다. `PRIOR mgr = empno` 는 \"이전 행의 mgr 가 다음 행의 empno 와 같다\" 는 의미가 되어 자식→부모 역방향 전개가 이루어진다. ㄱ·ㄴ 은 FROM·START WITH 위치라 PRIOR 가 올 수 없고, ㄹ 위치(empno 좌측) 에 PRIOR 가 오면 부모→자식 순방향이 되어 본 SQL 의 의도와 다르다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP 테이블 (사원-매니저 계층)",
        "headers": [
          "empno",
          "mgr"
        ],
        "rows": [
          [
            "100",
            "(NULL)"
          ],
          [
            "200",
            "100"
          ],
          [
            "300",
            "100"
          ],
          [
            "400",
            "200"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT 사원, 매니저\nFROM   EMP  -- (ㄱ)\nSTART WITH 매니저 IS NULL  -- (ㄴ)\nCONNECT BY ( ㄷ ) mgr = ( ㄹ ) empno;"
      }
    ]
  },
  {
    "id": 10448,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 49,
    "title": "아래 부서·사원 ERD 에서 부서 한 행을 삭제할 때 이를 참조하는 사원 테이블의 행도 함께 삭제되도록 외래키에 설정해야 할 옵션은?",
    "options": [
      "RESTRICT (참조하는 자식 행이 있으면 부모 삭제를 거부)",
      "PARENT ← CHILD CASCADE (부모 삭제 시 자식 PK 가 부모로 전파됨 — 잘못된 방향)",
      "CHILD ← PARENT CASCADE (CHILD 에 ON DELETE CASCADE 설정)",
      "NO ACTION (참조 무결성 위반 시 명령을 거부하는 표준 SQL 기본 동작)"
    ],
    "correctIndex": 2,
    "explanation": "자식 테이블(사원)의 외래키에 `ON DELETE CASCADE` 를 설정하면 부모(부서) 삭제 시 자식 행도 자동 삭제된다. 즉 부모→자식 방향(CHILD ← PARENT CASCADE)으로 전파가 이루어진다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "부서-사원 ERD — 사원의 부서번호 FK 에 ON DELETE CASCADE 설정",
        "mermaid": "erDiagram\n    부서 ||--o{ 사원 : \"소속\"\n    부서 {\n        string 부서번호 PK\n    }\n    사원 {\n        string 사원번호 PK\n        string 부서번호 FK \"ON DELETE CASCADE\"\n    }"
      },
      {
        "type": "sql",
        "code": "ALTER TABLE 사원\nADD CONSTRAINT FK_사원_부서\nFOREIGN KEY (부서번호) REFERENCES 부서(부서번호)\nON DELETE CASCADE;"
      }
    ]
  },
  {
    "id": 10449,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 50,
    "title": "아래 설명 중 옳지 않은 것은?",
    "options": [
      "기본키는 한 테이블에 두 개 이상일 수 있다.",
      "고유키는 NULL 값을 허용한다.",
      "외래키는 부모 테이블의 기본키를 참조한다.",
      "CHECK 제약 조건은 특정 조건을 만족하는 값만 허용한다."
    ],
    "correctIndex": 0,
    "explanation": "기본키는 한 테이블에 하나만 존재한다. 복합 키로 여러 컬럼을 묶더라도 하나의 기본키 제약이다.",
    "_source": "authored"
  }
];
