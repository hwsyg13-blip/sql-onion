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
    "title": "비식별자 관계로 구성된 테이블에 대한 설명 중 적절하지 않은 것은?",
    "options": [
      "부모·자식 간 1:M 관계이며 부모 테이블이 생성되지 않은 상태에서도 자식 테이블이 생성될 수 있다.",
      "부모 테이블의 삭제 시점이 자식 테이블보다 빠를 수 있다.",
      "테이블 간 조인을 최소화한다.",
      "자식 테이블의 주식별자를 부모 테이블에서 받아오는 것보다 직접 생성하는 것이 더 효율적인 경우가 있다."
    ],
    "correctIndex": 2,
    "explanation": "비식별자 관계는 부모 키가 자식의 일반 속성으로 전이되므로 상위 엔터티까지 접근하려면 추가 조인이 필요해져 오히려 조인이 많아진다.",
    "_source": "authored"
  },
  {
    "id": 10451,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "1과목",
    "number": 2,
    "title": "아래 ERD 해석에 대한 설명 중 적절하지 않은 것은?",
    "options": [
      "하나의 고객은 여러 개의 주문을 가질 수 있다.",
      "주문은 반드시 고객과 연결된다.",
      "고객은 주문을 하지 않을 수도 있다.",
      "주문은 고객을 가지지 않을 수도 있다."
    ],
    "correctIndex": 3,
    "explanation": "주문은 반드시 고객에 종속되므로 고객 없이 존재할 수 없다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "고객-주문 ERD (고객 측 1 필수, 주문 측 0..N — 주문은 고객이 반드시 필요)",
        "mermaid": "erDiagram\n    고객 ||--o{ 주문 : \"한다\""
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
    "title": "물리 모델링의 특징으로 적절하지 않은 것은?",
    "options": [
      "물리적 저장 구조와 접근 방식을 정의한다.",
      "성능 향상을 위한 인덱스·파티션 등이 설계된다.",
      "테이블·컬럼의 실제 물리 구현 단계이다.",
      "어떻게 데이터에 접근하고 누가 접근하는지가 핵심인 모델링이다."
    ],
    "correctIndex": 3,
    "explanation": "접근 방식과 권한 설계의 핵심은 논리 모델링 단계의 특징에 가까우며, 물리 모델링의 핵심은 저장 구조·성능이다.",
    "_source": "authored"
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
    "explanation": "발생 시점 기준 분류는 기본·중심·행위 세 가지이다.",
    "_source": "authored"
  },
  {
    "id": 10454,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "1과목",
    "number": 5,
    "title": "고객이 하나의 서비스만 계약할 수 있다는 제약을 반영해 '고객 - 서비스' 모델을 개선한 형태로 가장 적절한 것은?",
    "options": [
      "고객 테이블에 서비스 ID 를 단일 컬럼으로 추가",
      "서비스 테이블에 고객 ID 를 직접 저장",
      "고객 ─ 서비스계약 ─ 서비스 의 연결 엔터티를 두는 구조",
      "고객과 서비스를 별도 스키마로 분리"
    ],
    "correctIndex": 2,
    "explanation": "M:N 관계를 분해하며 계약 정보를 별도의 엔터티로 분리하는 설계가 가장 적절하다.",
    "_source": "authored"
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
    "explanation": "최종주문일자는 주문 엔터티의 여러 일자 중 가장 마지막 값을 도출한 계산 속성이다.",
    "_source": "authored"
  },
  {
    "id": 10456,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "1과목",
    "number": 7,
    "title": "식별자의 분류가 올바르게 짝지어진 것은?",
    "options": [
      "후보 식별자 - 대체 식별자 - 인조 식별자 - 기본 식별자",
      "대표 식별자 - 후보 식별자 - 복합 식별자 - 단일 식별자",
      "주 식별자 - 외부 식별자 - 대체 식별자 - 인조 식별자",
      "주 식별자 - 보조 식별자 - 본질 식별자 - 외부 식별자"
    ],
    "correctIndex": 3,
    "explanation": "주 식별자 - 보조 식별자 - 본질 식별자 - 외부 식별자 가 식별자 분류의 올바른 짝이다. 주/보조는 대표성 기준, 본질/인조는 속성의 업무적 발생 여부 기준, 내부/외부는 엔터티 내·외 발생 여부 기준이다.",
    "_source": "authored"
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
    "explanation": "주식별자는 최소성(minimal) 을 만족해야 하므로 꼭 필요한 최소한의 속성만 포함한다.",
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
    "explanation": "NULL 값을 허용하지 않으며 항상 값이 존재해야 한다는 성질이다.",
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
    "explanation": "속성(Attribute) 은 엔터티를 구성하는 의미상 더 이상 분리되지 않는 최소 단위의 데이터 항목이다.",
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
    "explanation": "고립성(Isolation) 에 따라 진행 중인 트랜잭션의 변경은 다른 트랜잭션과 격리되어야 한다.",
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
      "`SUM(금액) OVER (ORDER BY 일자)`",
      "`SUM(금액) OVER (ORDER BY 일자 ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)`",
      "`SUM(금액) OVER (ORDER BY 일자 RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)`",
      "서브쿼리를 이용한 일자별 누적합 계산"
    ],
    "correctIndex": 1,
    "explanation": "동일 일자(2023-11-02) 가 두 행 존재할 때 `ROWS` 윈도우는 행 단위로 누적해 같은 일자임에도 누적값이 달라진다. 일자별 누적합을 보려면 동률을 한 묶음으로 처리하는 `RANGE`(생략 시 기본) 또는 서브쿼리 방식이 적합하다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T 테이블 (일자별 매출 — 2023-11-02 가 두 행 존재)",
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
    "explanation": "Oracle 에서 ORDER BY 절에 NULLS LAST 를 명시하면 NULL 이 정렬 결과의 가장 마지막에 위치한다. NVL·NULLIF·COALESCE 는 값을 치환하는 방식이라 정렬 의미가 달라질 수 있다.",
    "_source": "authored"
  },
  {
    "id": 10463,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 14,
    "title": "User1 이 생성한 테이블 user1.T1 을 User2 가 조회할 수 있도록 부여하는 명령은?",
    "options": [
      "REVOKE SELECT ON user1.T1 FROM user2;",
      "GRANT SELECT ON user1.T1 TO user2;",
      "GRANT ALL ON user1.T1 TO SYS;",
      "CONNECT user2 TO user1;"
    ],
    "correctIndex": 1,
    "explanation": "다른 사용자에게 객체 권한을 부여할 때는 GRANT 권한 ON 객체 TO 사용자 구문을 사용한다. REVOKE 는 권한 회수, CONNECT 는 접속 명령으로 본 목적과 무관하다.",
    "_source": "authored"
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
    "explanation": "8 건을 세 그룹으로 나누면 앞부터 3, 3, 2 건이 배정된다.",
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
    "explanation": "CUBE 는 (A,B), (A), (B), () 의 네 조합을 모두 반환한다.",
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
    "explanation": "NULLIF(COL2, 0) 은 COL2 가 0 이면 NULL 을 반환하여 오류 대신 NULL 연산으로 이어진다.",
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
    "explanation": "NULL 포함 행은 + 연산 전체가 NULL 이 되어 ㉠ 에는 반영되지 않는다. ㉡ 은 컬럼별로 NULL 을 제외한 SUM 을 수행한다.",
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
    "explanation": "TAB1 의 COL2 값이 모두 9 이하라 `WHERE COL2 > 9` 를 만족하는 행이 없다. `GROUP BY` 가 지정된 SQL 은 그룹이 0 개이면 결과 행도 0 개로 공집합이 된다. `GROUP BY` 가 없었다면 단일 그룹으로 처리되어 `MAX(COL1)` = NULL → NVL 로 'X' 1 행이 나오겠지만, 본 SQL 은 `GROUP BY COL1` 이라 공집합이 정답.",
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
    "title": "아래 DDL 중 오류가 발생하지 않는 것은?",
    "options": [
      "ALTER TABLE TAB1 MODIFY COL1 VARCHAR2(10);",
      "ALTER TABLE TAB1 MODIFY COL2 NUMBER;",
      "ALTER TABLE TAB1 MODIFY COL3 TIMESTAMP;",
      "ALTER TABLE TAB1 MODIFY COL4 NUMBER;"
    ],
    "correctIndex": 2,
    "explanation": "DATE 를 TIMESTAMP 로 변경하는 것은 호환 가능한 변환이므로 오류가 발생하지 않는다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- TAB1: COL1 NUMBER, COL2 VARCHAR2 DEFAULT '000',\n--       COL3 DATE, COL4 VARCHAR2 (값: 12345, 45677)"
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
      "0",
      "2",
      "NULL"
    ],
    "correctIndex": 0,
    "explanation": "T1.COL1=20 은 T2 에 매칭되는 값이 없어 NOT EXISTS 조건을 만족하여 1 건이 반환된다.",
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
    "explanation": "NULL 과의 나눗셈은 NULL, 0 으로 나누면 'divisor is equal to zero' 오류가 발생한다.",
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
    "title": "아래 SQL 의 결과로 옳은 것은?",
    "options": [
      "전체 행",
      "COL1 = 'CPG' 인 행",
      "COL2 <= 10 인 행",
      "조건을 만족하는 행 없음 (결과 없음)"
    ],
    "correctIndex": 3,
    "explanation": "원본 기출의 조건을 만족하는 행이 없는 경우를 묻는 문항이다.",
    "_source": "authored",
    "references": [
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
    "explanation": "T3 기준 조인 결과에서 매칭된 C1 값(1, 2, 3) 의 합이 반환된다.",
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
    "explanation": "ROUND(값, 1) 은 소수 첫째 자리까지 반올림하며 109 가 그대로 유지된다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT SUBSTR('...의 마...', 3, 3), ROUND(109, 1) FROM DUAL;"
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
    "title": "아래 TAB1 테이블에 대해 INSERT FIRST 를 수행한 뒤 T1, T2, T3 의 행 수로 옳은 것은?",
    "options": [
      "T1 = 2, T2 = 0, T3 = 1",
      "T1 = 1, T2 = 1, T3 = 1",
      "T1 = 3, T2 = 0, T3 = 0",
      "T1 = 0, T2 = 1, T3 = 2"
    ],
    "correctIndex": 0,
    "explanation": "`INSERT FIRST` 는 조건을 만족하는 첫 번째 `WHEN` 만 실행한다. C1 = 1: 두 WHEN 모두 불만족 → ELSE T3, C1 = 2: 첫 WHEN 만족 → T1, C1 = 4: 첫 WHEN 만족 → T1 (두 번째 WHEN 도 만족하지만 FIRST 라 무시). 결과: T1 = 2 행, T2 = 0 행, T3 = 1 행.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "TAB1.C1"
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
        ],
        "caption": "TAB1 테이블"
      },
      {
        "type": "sql",
        "code": "INSERT FIRST\n  WHEN C1 >= 2 THEN INTO T1 VALUES (C1)\n  WHEN C1 >= 4 THEN INTO T2 VALUES (C1)\n  ELSE INTO T3 VALUES (C1)\nSELECT * FROM TAB1;"
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
    "explanation": "팀 코드가 'A' 또는 'B' 는 OR 로 묶고, 다른 조건과는 AND 로 결합하므로 괄호로 우선순위를 명시해야 한다. 문자열 리터럴은 따옴표로 감싸야 한다.",
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
    "title": "'현재 행부터 이전 행까지의 누적합' 을 구하는 윈도우 절로 옳은 것은?",
    "options": [
      "ROWS UNBOUNDED PRECEDING",
      "RANGE UNBOUNDED PRECEDING",
      "ROWS BETWEEN UNBOUNDED PRECEDING AND 1 PRECEDING",
      "RANGE BETWEEN UNBOUNDED PRECEDING AND 1 PRECEDING"
    ],
    "correctIndex": 0,
    "explanation": "ROWS UNBOUNDED PRECEDING 은 파티션의 첫 행부터 현재 행까지 행 단위로 누적합을 계산한다. RANGE 옵션은 값 기준이므로 동일 정렬 값이 함께 묶여 결과가 달라질 수 있다.",
    "_source": "authored"
  },
  {
    "id": 10478,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 29,
    "title": "아래 네 SQL 중 결과가 나머지와 다른 것은?",
    "options": [
      "RANK() 를 이용한 순위 쿼리",
      "DENSE_RANK() 를 이용한 순위 쿼리",
      "ROW_NUMBER() 를 이용한 순위 쿼리",
      "NTILE() 를 이용한 순위 쿼리"
    ],
    "correctIndex": 1,
    "explanation": "RANK·ROW_NUMBER·NTILE 은 동순위 처리 방식과 그룹 분배 방식이 달라도 본 데이터에서는 동일한 시퀀스를 만들지만, DENSE_RANK 는 동순위 다음 순번을 건너뛰지 않으므로 나머지와 다른 결과를 반환한다.",
    "_source": "authored"
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
      "`SELECT COL1 FROM T1 MINUS SELECT COL1 FROM T2;`",
      "`SELECT T1.COL1 FROM T1, T2 WHERE T1.COL1 <> T2.COL1;`",
      "`SELECT COL1 FROM T1 WHERE COL1 NOT IN (SELECT COL1 FROM T2);`",
      "`SELECT T1.COL1 FROM T1 LEFT JOIN T2 ON T1.COL1 = T2.COL1 WHERE T2.COL1 IS NULL;`"
    ],
    "correctIndex": 1,
    "explanation": "MINUS·NOT IN·LEFT JOIN+IS NULL 은 모두 'T1 에는 있고 T2 에는 없는 값 (D, E)' 을 반환하지만, T1, T2 카티션 곱에 `<>` 조건을 적용하면 비교 대상이 다른 모든 행과 매칭되어 중복된 결과가 나오므로 다른 답이 된다.",
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
    "explanation": "CHECK 조건을 통과한 행은 VALUE=3 한 건이다.",
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
      "`SELECT * FROM T WHERE (COL1 = 'A' AND COL2 = 1000) OR (COL1 = 'B' AND COL2 = 2000);`",
      "`SELECT * FROM T WHERE COL1 = 'A' AND COL2 = 1000 AND COL1 = 'B' AND COL2 = 2000;`",
      "`SELECT * FROM T WHERE COL1 IN ('A', 'B') AND COL2 IN (1000, 2000);`",
      "`SELECT * FROM T WHERE COL1 = 'A' OR COL2 = 2000;`"
    ],
    "correctIndex": 0,
    "explanation": "다중 컬럼 IN `(COL1, COL2) IN (('A', 1000), ('B', 2000))` 은 각 튜플 안에서는 컬럼끼리 AND 로 묶고, 튜플 간에는 OR 로 결합한 형태와 동일하다. 즉 `(COL1='A' AND COL2=1000) OR (COL1='B' AND COL2=2000)` 으로 풀어쓸 수 있다. ② 는 모순(같은 행이 동시에 'A'/'B' 일 수 없음), ③ 은 (A, 2000) (B, 1000) 도 매칭하므로 더 넓다, ④ 는 의미 자체가 다름.",
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
    "title": "뷰(VIEW) 에 대한 설명으로 옳지 않은 것은?",
    "options": [
      "뷰는 논리적 테이블이다.",
      "뷰는 참조 테이블의 데이터를 조회할 수 있다.",
      "뷰는 참조 테이블의 구조 변경에 영향을 받는다.",
      "뷰에는 물리적인 데이터가 저장된다."
    ],
    "correctIndex": 3,
    "explanation": "뷰는 저장된 쿼리이며 실제 데이터를 저장하지 않는다.",
    "_source": "authored"
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
    "explanation": "SAVEPOINT P1 이후의 INSERT (4) 는 롤백되어 반영되지 않는다.",
    "_source": "authored",
    "references": [
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
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 1,
    "explanation": "COL3 = 4 에서 역방향 전개로 (D→B→A) 결과가 구해지고, 이후 WHERE COL3 <> 2 로 B 가 제거되어 A, D 의 두 건이 남는다.",
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
          ]
        ],
        "caption": "TAB1 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT COUNT(*)\nFROM   TAB1\nWHERE  COL3 <> 2\nSTART WITH COL3 = 4\nCONNECT BY COL1 = PRIOR COL2;"
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
    "title": "매출 상위 1·2위를 조회하는 SQL 로 옳은 것은?",
    "options": [
      "SELECT 영업, 매출 FROM SALES ORDER BY 매출 DESC LIMIT 2;",
      "SELECT TOP 2 영업, 매출 FROM SALES ORDER BY 매출 DESC;",
      "SELECT 영업, 매출 FROM SALES WHERE ROWNUM <= 2 ORDER BY 매출 DESC;",
      "SELECT 영업, 매출 FROM (SELECT 영업, 매출 FROM SALES ORDER BY 매출 DESC) WHERE ROWNUM <= 2;"
    ],
    "correctIndex": 3,
    "explanation": "Oracle 에서 ROWNUM 은 정렬 전에 부여되므로 ORDER BY 와 동시에 사용하면 의도된 상위 N 건이 나오지 않는다. 따라서 ORDER BY 결과를 인라인 뷰로 감싼 뒤 바깥에서 WHERE ROWNUM <= 2 를 적용해야 한다.",
    "_source": "authored"
  },
  {
    "id": 10486,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 37,
    "title": "아래 SQL 의 결과로 옳은 것은?",
    "options": [
      "1건",
      "2건",
      "3건",
      "4건"
    ],
    "correctIndex": 1,
    "explanation": "IN 절의 중복 값은 무시되어 100, 200 두 행만 반환된다.",
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
    "title": "SQL Server 에서 ORDER BY 절의 NULL 정렬에 대한 설명 중 결과가 다른 하나는?",
    "options": [
      "ORDER BY COL (기본 오름차순)",
      "ORDER BY NVL(COL, 0) 처럼 NULL 을 0 으로 치환",
      "ORDER BY COL NULLS FIRST",
      "ORDER BY COL NULLS LAST"
    ],
    "correctIndex": 1,
    "explanation": "SQL Server 의 ORDER BY 기본 동작에서 NULL 은 가장 앞에 정렬된다(NULLS FIRST 와 동일). NVL/ISNULL 로 NULL 을 0 으로 치환하면 0 의 정렬 위치를 따르므로 다른 결과가 나온다.",
    "_source": "authored"
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
      "1건",
      "2건",
      "3건",
      "0건"
    ],
    "correctIndex": 2,
    "explanation": "LEFT OUTER JOIN 은 ON 조건에 매칭되지 않아도 LEFT 테이블(A) 의 모든 행이 유지되므로 A 의 3건이 그대로 결과에 남는다. B 측 컬럼은 매칭되는 행이 있을 때만 채워지고 그렇지 않으면 NULL.",
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
            "10"
          ],
          [
            "100"
          ],
          [
            "220"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT A.*, B.*\nFROM   A LEFT OUTER JOIN B ON (A.COL1 = B.COL1 AND B.COL1 > 200);"
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
    "title": "아래 SQL 중 NULL 이 포함된 상황에서 결과가 같은 것은?",
    "options": [
      "NOT EXISTS",
      "NOT IN",
      "OUTER JOIN + IS NULL",
      "모두 같다"
    ],
    "correctIndex": 3,
    "explanation": "원본 기출의 정답 표기를 보존한다. 데이터가 NULL 을 포함하지 않는 전제에서 세 방식 모두 같은 결과를 낸다.",
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
    "explanation": "TO_DATE('2023', 'YYYY') 는 시스템의 현재 월과 1일을 조합한 값으로 해석된다.",
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
    "explanation": "윈도우 함수 `SUM` 의 `RANGE BETWEEN 2 PRECEDING AND 2 FOLLOWING` 은 정렬 값 ±2 범위에 들어오는 행의 합을 반환한다. VAL = (4, 5, 6) 일 때 모든 값이 서로 ±2 범위 안에 있어 모든 행에서 4 + 5 + 6 = 15 가 일관되게 나온다. 정답은 ②번.",
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
    "title": "ORDER BY COL1, COL2 DESC, COL3 NULLS LAST 에 대한 해석으로 옳은 것은?",
    "options": [
      "COL1 오름차순, COL2 내림차순, COL3 오름차순 (NULL 마지막)",
      "모든 컬럼 내림차순 정렬",
      "NULL 은 항상 가장 앞에 정렬된다.",
      "ORDER BY 에 여러 컬럼은 지정할 수 없다."
    ],
    "correctIndex": 0,
    "explanation": "ORDER BY 의 정렬 옵션은 컬럼별로 독립 적용된다. COL1 은 기본값 ASC, COL2 는 DESC, COL3 은 ASC 이며 NULLS LAST 옵션으로 NULL 이 마지막에 출력된다.",
    "_source": "authored"
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
      "`WHERE COL2 LIKE '%_%'`",
      "`WHERE COL2 LIKE 'A%'`",
      "`WHERE COL2 LIKE 'A_B%'`",
      "`WHERE COL2 LIKE '%@_%' ESCAPE '@'`"
    ],
    "correctIndex": 3,
    "explanation": "LIKE 패턴에서 '_' 은 임의의 한 문자를 의미하므로 ① 처럼 그대로 쓰면 모든 행이 매칭된다. 리터럴 '_' 자체를 검색하려면 ESCAPE 문자를 지정하고 그 뒤에 '_' 을 두어야 한다. ④ 의 `%@_%` ESCAPE '@' 는 '@_' 를 리터럴 '_' 로 해석해 'AB_C', 'A_BD' 만 매칭한다.",
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
    "title": "제약 조건 설명 중 옳지 않은 것은?",
    "options": [
      "제약 조건은 데이터 무결성을 보장한다.",
      "PRIMARY KEY 는 NOT NULL 과 UNIQUE 를 결합한 제약이다.",
      "UNIQUE 제약 조건은 NULL 이 여러 개 들어가면 위반이다.",
      "CHECK 제약은 TRUE/FALSE 로 판별 가능한 식이어야 한다."
    ],
    "correctIndex": 2,
    "explanation": "UNIQUE 제약은 NULL 여러 개를 허용한다.",
    "_source": "authored"
  },
  {
    "id": 10495,
    "examSetId": "round-51",
    "examLabel": "제51회 (2023년 11월)",
    "round": 51,
    "subject": "2과목",
    "number": 46,
    "title": "아래 일자별 매출 테이블에 대해 일자별 누적 합계를 계산한 결과로 옳은 것은?",
    "options": [
      "1000, 1000, 1000",
      "1000, 1300, 2300",
      "1000, 2300, 1300",
      "1000, 2300, 2000"
    ],
    "correctIndex": 1,
    "explanation": "1일까지 1000, 2일까지 1000+300=1300, 3일까지 1300+1000=2300 으로 누적된다.",
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
            "1일",
            "1000"
          ],
          [
            "2일",
            "300"
          ],
          [
            "3일",
            "1000"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT 일자,\n       SUM(금액) OVER (ORDER BY 일자\n                       ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS 누적합\nFROM   T;"
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
    "explanation": "Oracle의 MOD는 `m - n * TRUNC(m/n)`로 계산된다. MOD(10, 3) = 10 - 3*3 = 1, MOD(10, -3) = 10 - (-3)*(-3) = 1이다.",
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
    "explanation": "CASE 식은 위에서부터 차례로 평가되어 가장 먼저 참인 WHEN 절의 결과를 반환한다. `1 = 2`는 거짓이므로 넘어가고, `2 = 2`가 참이어서 'B'가 반환된다.",
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
    "explanation": "DCL 은 GRANT·REVOKE 를 통해 데이터베이스 접근 권한과 객체 접근 권한을 제어하는 언어이다.",
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
    "explanation": "FLOOR 함수는 실수를 그보다 작거나 같은 최대 정수로 내림한다. 음수의 경우 더 작은 쪽(-3) 으로 내려간다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT FLOOR(10.4), FLOOR(-2.4) FROM DUAL;"
      }
    ]
  }
];
