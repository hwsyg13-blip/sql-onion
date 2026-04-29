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
    "explanation": "스키마는 외부·개념·내부의 3계층으로 구분된다. 응용 스키마는 표준 스키마 계층에 포함되지 않는다.",
    "_source": "authored"
  },
  {
    "id": 10201,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "1과목",
    "number": 2,
    "title": "데이터 모델링에 대한 설명으로 옳지 않은 것은?",
    "options": [
      "업무에서 사용되는 모든 데이터를 포함해야 한다.",
      "현실 세계를 추상화하여 데이터 관점으로 표현한다.",
      "업무 프로세스를 이해하고 참여자들과 의사소통하는 도구가 된다.",
      "업무 규칙이 모델에 포함되지 않아도 된다."
    ],
    "correctIndex": 3,
    "explanation": "업무 규칙은 데이터 모델이 반드시 반영해야 하는 핵심 요소이다.",
    "_source": "authored"
  },
  {
    "id": 10202,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "1과목",
    "number": 3,
    "title": "발생 시점에 따라 구분되는 엔터티의 유형으로 적절하지 않은 것은?",
    "options": [
      "관계 엔터티",
      "행위 엔터티",
      "중심 엔터티",
      "기본 엔터티"
    ],
    "correctIndex": 0,
    "explanation": "발생 시점 기준 분류는 기본·중심·행위 세 가지이다.",
    "_source": "authored"
  },
  {
    "id": 10203,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "1과목",
    "number": 4,
    "title": "아래 설명 중 옳지 않은 것은?",
    "options": [
      "고객과 상품은 기본 엔터티이다.",
      "주문은 사건 엔터티이다.",
      "주문 상품 엔터티는 주문과 상품의 관계에 의해 생성된다.",
      "주문 상품 엔터티는 주문과 상품 간 M:N 관계의 중간 엔터티이다."
    ],
    "correctIndex": 2,
    "explanation": "주문 상품은 주문 발생이라는 업무 행위에 의해 생성되는 행위 엔터티이다. 주문과 상품의 관계 자체에 의해 자동 생성되는 것이 아니다.",
    "_source": "authored"
  },
  {
    "id": 10204,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "1과목",
    "number": 5,
    "title": "다른 속성을 이용하여 결과를 도출하는 속성은?",
    "options": [
      "설계 속성",
      "기본 속성",
      "파생 속성",
      "관계 속성"
    ],
    "correctIndex": 2,
    "explanation": "파생 속성은 다른 속성의 값을 계산·가공하여 도출되는 속성이다.",
    "_source": "authored"
  },
  {
    "id": 10205,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "1과목",
    "number": 6,
    "title": "다음 속성 분류에 대한 설명 중 옳은 것을 모두 고르시오.",
    "options": [
      "가, 라",
      "가, 나, 다",
      "나, 다, 라",
      "가, 나, 다, 라"
    ],
    "correctIndex": 3,
    "explanation": "복합·단순·단일 값·다중 값 속성에 대한 네 개의 설명이 모두 옳다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "가. 주소는 시·군·구 등으로 나누어지므로 복합 속성이다.\n나. 나이는 단순 속성이다.\n다. 주민번호는 단일 값 속성이다.\n라. 연락처는 휴대폰 번호와 집 전화번호가 될 수 있기 때문에 다중 값 속성이다."
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
    "explanation": "세 관계는 각각 독립적인 의미를 가지며 단순 합성으로 대체할 수 없다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "병원·의사·수술 ERD — 관계 라벨 ㄱ(병원-의사), ㄴ(의사-수술), ㄷ(병원-수술 직접)",
        "mermaid": "erDiagram\n    병원 ||--o| 의사 : \"ㄱ\"\n    의사 ||--o| 수술 : \"ㄴ\"\n    병원 ||--o| 수술 : \"ㄷ\""
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
    "explanation": "본질 식별자는 업무상 자연스럽게 부여되는 식별자이며, 인조 식별자는 시스템이 편의상 생성한 식별자이다.",
    "_source": "authored"
  },
  {
    "id": 10208,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "1과목",
    "number": 9,
    "title": "모든 일반 속성이 주식별자에 완전 함수 종속된 정규형은?",
    "options": [
      "제1 정규형",
      "제2 정규형",
      "제3 정규형",
      "보이스-코드 정규형"
    ],
    "correctIndex": 1,
    "explanation": "제2 정규형은 부분 함수 종속을 제거하여 모든 일반 속성이 주식별자에 완전 함수 종속되는 상태를 의미한다.",
    "_source": "authored"
  },
  {
    "id": 10209,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "1과목",
    "number": 10,
    "title": "정규화에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "정규화 시 유연성이 떨어진다.",
      "일반 속성 간 종속을 제거하는 것은 제3 정규형이다.",
      "반정규화는 데이터 중복으로 독립성이 떨어진다.",
      "정규화를 많이 할수록 성능이 저하된다."
    ],
    "correctIndex": 0,
    "explanation": "정규화는 중복을 줄이고 유연성을 높이는 과정이다. 유연성이 저하된다는 설명은 옳지 않다.",
    "_source": "authored"
  },
  {
    "id": 10210,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 11,
    "title": "다음 중 SQL 연산자의 우선순위가 가장 높은 것은?",
    "options": [
      "비교 연산자",
      "괄호",
      "AND",
      "OR"
    ],
    "correctIndex": 1,
    "explanation": "괄호는 모든 연산자에 우선한다.",
    "_source": "authored"
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
    "explanation": "COL2='A' 인 행은 (1,A), (1,A), (3,A) 의 3건이고, COL1 의 고유값은 1·2·3·4 의 4건이다.",
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
        "code": "SELECT COUNT(ALL COL1)      FROM TAB1 WHERE COL2 = 'A';\nSELECT COUNT(DISTINCT COL1) FROM TAB1;"
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
    "title": "다음 네 가지 조인 중 결과 행의 수가 나머지와 다른 것은? (양쪽 테이블에 매칭되지 않는 행이 존재한다고 가정)",
    "options": [
      "INNER JOIN",
      "LEFT OUTER JOIN",
      "RIGHT OUTER JOIN",
      "FULL OUTER JOIN"
    ],
    "correctIndex": 3,
    "explanation": "FULL OUTER JOIN 만이 양쪽에서 매칭되지 않는 모든 행을 포함하여 다른 조인보다 행이 더 많아진다.",
    "_source": "authored"
  },
  {
    "id": 10213,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 14,
    "title": "다음 WHERE 조건 중 결과가 나머지와 다른 것은?",
    "options": [
      "COL3 >= 200 AND COL4 <= 200",
      "NOT (200 < COL3 OR 200 > COL4)",
      "200 BETWEEN COL3 AND COL4",
      "COL3 <= 200 AND COL4 >= 200"
    ],
    "correctIndex": 0,
    "explanation": "②·③·④ 는 \"200이 COL3 ~ COL4 범위에 포함되는 조건\" 으로 동치이다. ①은 부등호 방향이 반대이므로 결과가 다르다.",
    "_source": "authored"
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
    "explanation": "COL1 오름차순 첫 번째 그룹(COL1=1)에서 COL2 의 최대값 20 이 반환된다.",
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
        "code": "SELECT MAX(COL2) KEEP (DENSE_RANK FIRST ORDER BY COL1) FROM TAB1;"
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
    "title": "아래 쿼리의 실행 결과로 옳은 것은?",
    "options": [
      "S",
      "SQL",
      "NULL",
      "오류가 발생한다."
    ],
    "correctIndex": 0,
    "explanation": "COALESCE 는 왼쪽부터 평가해 가장 먼저 NULL 이 아닌 값을 반환하므로 'S' 가 반환된다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT COALESCE(NULL, NULL, 'S', NULL, 'QL') FROM DUAL;"
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
    "title": "아래 SQL 의 실행 결과로 옳은 것은?",
    "options": [
      "9, 9, 9",
      "10, 9, 9",
      "9, 9, 10",
      "10, 10, 9"
    ],
    "correctIndex": 1,
    "explanation": "`CEIL(9.36)` = 10 (올림), `ROUND(9.48)` = 9 (소수 첫째자리 반올림 = 9.5 미만이라 9), `FLOOR(9.72)` = 9 (내림). 결과: 10, 9, 9.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT CEIL(9.36),\n       ROUND(9.48),\n       FLOOR(9.72)\nFROM   DUAL;"
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
    "explanation": "(1) `COUNT(DISTINCT 물품)` 은 서로 다른 물품 종류의 수. p, q, r 3 종이라 3 반환. (2) `IN ('p', NULL)` 에서 NULL 비교는 UNKNOWN 으로 평가되어 무시되고 `물품 = 'p'` 만 매칭되어 30 건 반환.",
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
        "caption": "업체 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT COUNT(DISTINCT 물품) FROM 업체;\nSELECT COUNT(*) FROM 업체 WHERE 물품 IN ('p', NULL);"
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
    "title": "두 결과 집합의 교집합을 반환하는 집합 연산자는?",
    "options": [
      "UNION",
      "INTERSECT",
      "MINUS",
      "EXCEPT"
    ],
    "correctIndex": 1,
    "explanation": "INTERSECT 는 두 결과 집합 모두에 존재하는 행만 반환하는 교집합 연산자이다.",
    "_source": "authored"
  },
  {
    "id": 10219,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 20,
    "title": "TRUNCATE 에 대한 설명 중 옳은 것은?",
    "options": [
      "데이터 구조와 데이터를 모두 삭제한다.",
      "TRUNCATE 이후 ROLLBACK 으로 데이터를 복구할 수 있다.",
      "특정 행만 삭제하는 것은 불가능하다.",
      "모든 행을 제거할 경우 DELETE 보다 성능이 떨어진다."
    ],
    "correctIndex": 2,
    "explanation": "TRUNCATE 는 WHERE 조건을 지정할 수 없으므로 특정 행만 삭제할 수 없다.",
    "_source": "authored"
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
    "title": "다음 중 결과가 나머지와 다른 것은?",
    "options": [
      "CASE 칼럼 WHEN NULL THEN -1 ELSE 0 END",
      "CASE WHEN 칼럼 IS NULL THEN -1 ELSE 0 END",
      "DECODE(칼럼, NULL, -1, 0)",
      "NVL(칼럼, -1)"
    ],
    "correctIndex": 0,
    "explanation": "단순 CASE 는 등치 비교를 위해 = 를 사용하는데, NULL = NULL 은 UNKNOWN 이므로 이 분기가 선택되지 않는다.",
    "_source": "authored"
  },
  {
    "id": 10222,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 23,
    "title": "셀프 조인을 수행할 수 있는 경우로 가장 적절한 것은?",
    "options": [
      "두 테이블 내에 컬럼이 연관관계가 있는 경우",
      "두 테이블 내에 연관관계는 없지만 조인이 필요할 때",
      "한 테이블 내에 컬럼이 연관관계가 있는 경우",
      "한 테이블 내에 연관관계는 없지만 조인이 필요할 때"
    ],
    "correctIndex": 2,
    "explanation": "셀프 조인은 하나의 테이블 내에서 자기 자신을 조인하여 계층이나 상호 참조 관계를 조회할 때 사용된다.",
    "_source": "authored"
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
    "explanation": "첫 번째 쿼리는 조건을 만족하는 행이 없어 공집합을 반환한다. 두 번째 쿼리는 집계 함수이므로 조건에 맞는 행이 없더라도 한 건(NULL)을 반환한다.",
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
    "title": "아래 함수의 실행 결과로 옳은 것은?",
    "options": [
      "aaa",
      "aaaa",
      "ab",
      "aab"
    ],
    "correctIndex": 1,
    "explanation": "`{2,4}` 는 \"2~4회 반복\" 을 의미하며 탐욕적으로 최대 길이를 우선하여 네 개의 a 를 반환한다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT REGEXP_SUBSTR('aaaaabbbb', 'a{2,4}') FROM DUAL;"
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
    "title": "집합 연산자에 대한 설명 중 중복을 제거하지 않는 것은?",
    "options": [
      "UNION",
      "UNION ALL",
      "INTERSECT",
      "MINUS"
    ],
    "correctIndex": 1,
    "explanation": "UNION ALL 은 중복 제거 없이 두 결과 집합을 그대로 결합한다. UNION·INTERSECT·MINUS 는 모두 중복을 제거한다.",
    "_source": "authored"
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
    "explanation": "ORDER BY 는 기본 오름차순(ASC)이므로 \"높은 순\"으로 정렬하려면 (라) 의 `ORDER BY SUM(SALARY)` 에 `DESC` 를 추가해 `ORDER BY SUM(SALARY) DESC` 로 만들어야 한다. (가) SELECT 절, (나) WHERE 조건, (다) GROUP BY 는 모두 정상.",
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
    "title": "ROLLBACK 에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "ROLLBACK 은 트랜잭션 전체를 되돌린다.",
      "SAVEPOINT 이후의 작업만 부분 롤백할 수 있다.",
      "COMMIT 이전으로 롤백할 수 있다.",
      "ROLLBACK 이후에는 해당 트랜잭션의 변경 내용이 모두 취소된다."
    ],
    "correctIndex": 2,
    "explanation": "COMMIT 이 수행되면 트랜잭션이 영구히 반영되므로 그 이전 상태로 되돌릴 수 없다.",
    "_source": "authored"
  },
  {
    "id": 10228,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 29,
    "title": "SQL 실행 순서로 올바른 것은?",
    "options": [
      "SELECT - FROM - WHERE - GROUP BY - HAVING - ORDER BY",
      "WHERE - FROM - HAVING - GROUP BY - SELECT - ORDER BY",
      "FROM - WHERE - GROUP BY - HAVING - SELECT - ORDER BY",
      "FROM - WHERE - HAVING - GROUP BY - SELECT - ORDER BY"
    ],
    "correctIndex": 2,
    "explanation": "SQL 의 논리적 실행 순서는 FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY 이다.",
    "_source": "authored"
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
    "explanation": "Bob, Smith 가 같은 7000 으로 1 위, 다음 David(6000) 이 2 위 — \"동일 순위 후 다음 순위를 건너뛰지 않는\" 패턴은 DENSE_RANK. RANK 는 동일 1, 1, 3, 4, 5 처럼 건너뛰며, ROW_NUMBER 는 동률이어도 1, 2, 3, 4, 5 로 고유 부여, PERCENT_RANK 는 0~1 비율 반환.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "기대 결과 (DENSE_RANK 출력)",
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
    "title": "트랜잭션의 모든 작업이 성공적으로 완료되거나 전혀 수행되지 않아야 하는 특성은?",
    "options": [
      "원자성",
      "고립성",
      "일관성",
      "지속성"
    ],
    "correctIndex": 0,
    "explanation": "원자성(Atomicity)은 트랜잭션 내 모든 작업이 전부 반영되거나 전혀 반영되지 않아야 함을 보장하는 ACID 특성이다.",
    "_source": "authored"
  },
  {
    "id": 10231,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 32,
    "title": "아래 쿼리의 결과 행 수는?",
    "options": [
      "0",
      "10",
      "20",
      "40"
    ],
    "correctIndex": 0,
    "explanation": "서브쿼리에 NULL 이 포함되어 있으므로 NOT IN 비교 결과가 모두 UNKNOWN 으로 평가되어 공집합이 반환된다.",
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
        "code": "SELECT *\nFROM   TAB1\nWHERE  (COL1, COL2) NOT IN (SELECT COL1, COL2 FROM TAB2);"
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
    "explanation": "서브쿼리가 `SELECT MAX(NULL) FROM TAB2 ...` 이라 항상 NULL 을 반환 (MAX 의 입력이 NULL 상수). WHERE 조건과 무관하게 모든 TAB1 행의 COL1 이 NULL 로 갱신된다 = ④ `UPDATE TAB1 SET COL1 = NULL;` 과 동일.",
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
      "SELECT A.EMP_ID, B.EMP_ID FROM EMP A LEFT OUTER JOIN EMP B ON A.EMP_ID = B.EMP_ID;"
    ],
    "correctIndex": 2,
    "explanation": "셀프 조인으로 \"A 가 관리하는 부하 사원 B\" 를 매칭하려면 A.EMP_ID = B.MGR_ID 조건이 필요 (B 의 관리자 = A). LEFT OUTER JOIN 으로 부하가 없는 A 사원(예: 1003, 1004) 도 결과에 NULL 과 함께 포함된다. ① 자기 자신과 매칭, ② 는 \"A 의 상사 = B\" 매칭으로 의미 반대, ④ 자기 자신 LEFT OUTER 라 모두 의도와 다름. 본 문항에서 SQL 의 별칭 A, B 는 EMP 테이블 자기 자신을 두 번 참조하는 셀프 조인 기법으로, 동일 EMP 테이블을 \"상사 역할 (A)\" 과 \"부하 역할 (B)\" 두 시점으로 나눠 보는 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP 테이블",
        "headers": [
          "EMP_ID",
          "EMP_NAME",
          "MGR_ID"
        ],
        "rows": [
          [
            "1001",
            "홍길동",
            "(NULL)"
          ],
          [
            "1002",
            "이순신",
            "1001"
          ],
          [
            "1003",
            "강감찬",
            "1002"
          ],
          [
            "1004",
            "박지성",
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
    "explanation": "조인 조건이 없으므로 카티션 곱이 수행되어 10 × 10 = 100 건이 반환된다.",
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
    "explanation": "두 테이블의 공통 컬럼은 ID 이지만 TAB1(1, 2, 3)과 TAB2(10, 20, 30, 40, 50) 사이에 일치하는 ID 값이 없으므로 NATURAL JOIN 결과는 0 건이다.",
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
    "title": "제약조건에 대한 설명 중 옳은 것은?",
    "options": [
      "기본키는 한 컬럼에 하나의 속성만 가질 수 있다.",
      "외래키는 여러 컬럼으로 구성된 복합 외래키로 정의될 수 있다.",
      "UNIQUE 는 NULL 을 허용하지 않는다.",
      "FOREIGN KEY 는 동일 테이블 내에서는 정의할 수 없다."
    ],
    "correctIndex": 1,
    "explanation": "외래키는 단일 컬럼뿐 아니라 복합 컬럼으로도 정의되어 부모 테이블의 복합 기본키를 참조할 수 있다.",
    "_source": "authored"
  },
  {
    "id": 10238,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 39,
    "title": "문자열 내에서 특정 패턴이 시작되는 위치를 정수로 반환하는 함수는?",
    "options": [
      "REGEXP_COUNT",
      "REGEXP_LIKE",
      "REGEXP_REPLACE",
      "REGEXP_INSTR"
    ],
    "correctIndex": 3,
    "explanation": "REGEXP_INSTR 는 문자열에서 정규식과 일치하는 패턴의 시작 위치를 정수로 반환한다. REGEXP_LIKE 는 boolean 판정, REGEXP_COUNT 는 일치 횟수, REGEXP_REPLACE 는 치환을 수행한다.",
    "_source": "authored"
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
    "explanation": "AGE<35 AND DEPT IN('A','B') 를 만족하는 이름은 PARK, KIM 이다.",
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
    "title": "아래 사원 데이터에 대한 AVG, MIN 결과로 옳은 것은?",
    "options": [
      "1500, 1000",
      "1000, 2500",
      "1125, 1000",
      "1500, NULL"
    ],
    "correctIndex": 2,
    "explanation": "두 집계의 NULL 처리 방식이 다른 점이 핵심입니다. AVG(NVL(SAL, 0))는 NULL을 0으로 치환해 모든 4행이 평균에 포함되어 (1000+1000+2500+0)÷4 = 1125. MIN(SAL)은 NVL이 적용되지 않아 NULL을 자동 제외하고 1000, 1000, 2500 중 최솟값 1000. 따라서 결과는 (1125, 1000)으로 정답은 ③번입니다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "SAL"
        ],
        "rows": [
          [
            "1000"
          ],
          [
            "1000"
          ],
          [
            "2500"
          ],
          [
            "(NULL)"
          ]
        ],
        "caption": "T 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT AVG(NVL(SAL,0)), MIN(SAL) FROM T;"
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
    "title": "아래 부서, 사원 테이블에 대한 쿼리에 대한 설명으로 옳은 것은?",
    "options": [
      "2등급 이상의 사원을 모두 출력한다.",
      "부서에 소속되지 않은 사원은 제외한다.",
      "부서 정보가 없어도 사원은 모두 출력된다.",
      "등급이 없는 사원도 포함된다."
    ],
    "correctIndex": 1,
    "explanation": "`FROM 부서 D, 사원 E` 와 `WHERE D.부서ID = E.부서ID` 는 내부 조인(INNER JOIN) 으로 동작. 양쪽 테이블에서 부서ID 가 일치하는 행만 남으므로 부서 미소속 사원(E.부서ID 가 NULL 또는 부서에 없는 ID) 은 결과에서 제외된다. ① 은 `>= 2` 조건이 추가로 들어가 \"부서 소속 + 2 등급 이상\" 만 출력, ③④ 는 INNER JOIN 특성과 어긋난다.",
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
    "explanation": "`ORDER BY SAL` 은 기본 오름차순(ASC). `NULLS LAST` 옵션은 정렬 후 NULL 값을 결과의 마지막에 배치한다. 본 데이터에서 출력 순서: SAL=2000(이순신) → 3000(홍길동) → 5000(강감찬) → NULL(박문수).",
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
    "title": "계층별 소계와 총계를 순차적으로 산출하는 집계 절은?",
    "options": [
      "GROUPING SETS()",
      "ROLLUP()",
      "CUBE()",
      "HAVING()"
    ],
    "correctIndex": 1,
    "explanation": "ROLLUP 은 좌측 컬럼부터 순차적으로 집계 레벨을 축소해 소계와 총계를 반환한다.",
    "_source": "authored"
  },
  {
    "id": 10248,
    "examSetId": "round-56",
    "examLabel": "제56회 (2025년 3월)",
    "round": 56,
    "subject": "2과목",
    "number": 49,
    "title": "지정한 컬럼의 모든 부분집합 조합으로 집계를 산출하는 절은?",
    "options": [
      "ROLLUP()",
      "GROUP BY",
      "GROUPING SETS()",
      "CUBE()"
    ],
    "correctIndex": 3,
    "explanation": "CUBE 는 컬럼 조합의 모든 부분집합에 대한 집계를 반환한다.",
    "_source": "authored"
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
    "explanation": "UPDATE 로 COL2≤2 인 두 행의 COL1 이 4 로 갱신되고, DELETE 는 SP2 로 되돌려지므로 (4,2),(4,1),(3,4) 가 남는다. 마지막 INSERT (4,1) 가 더해져 COL1=4 인 행은 세 건이다.",
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
        "code": "CREATE TABLE TAB1 (COL1 NUMBER, COL2 NUMBER);\nINSERT INTO TAB1 VALUES (1, 2);\nINSERT INTO TAB1 VALUES (2, 1);\nINSERT INTO TAB1 VALUES (3, 4);\nSAVEPOINT SP1;\n\nUPDATE TAB1 SET COL1 = 4 WHERE COL2 <= 2;   -- (4,2),(4,1),(3,4)\nSAVEPOINT SP2;\n\nDELETE FROM TAB1 WHERE COL2 = 2;\nROLLBACK TO SAVEPOINT SP2;                  -- (4,2),(4,1),(3,4) 복원\n\nINSERT INTO TAB1 VALUES (4, 1);             -- (4,2),(4,1),(3,4),(4,1)\nCOMMIT;\n\nSELECT COUNT(*) FROM TAB1 WHERE COL1 = 4;   -- 3"
      },
      {
        "type": "table",
        "caption": "최종 TAB1 상태",
        "headers": [
          "COL1",
          "COL2"
        ],
        "rows": [
          [
            "4",
            "2"
          ],
          [
            "4",
            "1"
          ],
          [
            "3",
            "4"
          ],
          [
            "4",
            "1"
          ]
        ]
      }
    ]
  }
];
