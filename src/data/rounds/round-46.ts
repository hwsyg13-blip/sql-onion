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
    "title": "논리 데이터 모델링에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "업무를 구성하는 엔터티, 속성, 관계를 도출한다.",
      "식별자를 확정하고 정규화를 수행한다.",
      "주제영역을 설계하고 업무 전반의 범위를 정의한다.",
      "슈퍼타입·서브타입을 분리하거나 통합하여 상세화한다."
    ],
    "correctIndex": 2,
    "explanation": "주제영역 설계는 개념 데이터 모델링 단계의 산출물이며, 논리 모델링은 엔터티·속성·관계 도출과 정규화·식별자 확정 등 상세 설계에 해당한다. 일부 해설은 ④를 정답으로 본다.",
    "_source": "authored"
  },
  {
    "id": 10701,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "1과목",
    "number": 2,
    "title": "아래 ERD에서 정규화가 적절하게 수행된 형태는? (고객은 서비스를 하나만 가진다.)",
    "options": [
      "고객 엔터티에 서비스번호를 속성으로 포함시킨다.",
      "서비스 엔터티에 고객번호를 속성으로 포함시킨다.",
      "고객 ─< 서비스계약 >─ 서비스 로 분리하되, 서비스계약에 고객번호·서비스번호·계약번호를 둔다.",
      "고객 ─< 서비스계약 >─ 서비스 로 분리하되, 서비스계약에 고객번호와 서비스번호만 둔다."
    ],
    "correctIndex": 3,
    "explanation": "고객이 단일 서비스만 가지는 제약에서 서비스계약번호를 별도 PK로 두면 동일 고객이 같은 서비스를 중복 소유할 수 있게 되어 업무 규칙에 어긋난다.",
    "_source": "authored",
    "references": [
      {
        "type": "ascii",
        "text": "[ 고객 ] ─|───────|─ [ 서비스 ]"
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
    "explanation": "A-B가 비식별자 관계가 되면 A의 PK가 C로 상속되지 않아, A와 C의 조인은 반드시 B를 경유해야 한다.",
    "_source": "authored",
    "references": [
      {
        "type": "ascii",
        "text": "[ A ] ─┼─< [ B ] ─┼─< [ C ] ─┼─< [ D ]"
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
    "explanation": "",
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
    "title": "다른 속성을 이용하여 계산·변형되어 생성되는 속성은?",
    "options": [
      "기본속성",
      "설계속성",
      "파생속성",
      "연관속성"
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10705,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "1과목",
    "number": 6,
    "title": "아래 설명에 해당하는 정규형은?",
    "options": [
      "제1정규형",
      "제2정규형",
      "제3정규형",
      "BCNF"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "릴레이션이 제1정규형을 만족하고, 기본키가 아닌 모든 속성이 주식별자에 완전 함수 종속된다."
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
    "title": "아래 ERD의 해석으로 가장 적절한 것은?",
    "options": [
      "마더보드는 반드시 한 개의 컴퓨터에 포함된다.",
      "마더보드는 때때로 하나의 컴퓨터에 포함된다.",
      "하나의 컴퓨터는 여러 개의 마더보드를 포함한다.",
      "컴퓨터와 마더보드는 다대다 관계이다."
    ],
    "correctIndex": 1,
    "explanation": "컴퓨터 쪽 점선 + `o|`는 선택 참여·단일성이므로 마더보드 입장에서 컴퓨터 참여가 선택적임을 의미한다. 반대쪽 실선 + `|`는 필수 참여·단일성이므로 컴퓨터 하나당 마더보드 하나가 대응된다.",
    "_source": "authored",
    "references": [
      {
        "type": "ascii",
        "text": "[ 컴퓨터 ] ─o|─ ─ ─ ─ ─|─ [ 마더보드 ]"
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
    "title": "주식별자에 대한 아래 설명과 명칭이 올바르게 짝지어진 것은?",
    "options": [
      "주식별자, 보조식별자, 본질식별자, 외부식별자",
      "보조식별자, 주식별자, 외부식별자, 본질식별자",
      "주식별자, 외부식별자, 본질식별자, 보조식별자",
      "보조식별자, 주식별자, 본질식별자, 외부식별자"
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "( ㄱ ) 엔터티 내 각 인스턴스를 구분하며 타 엔터티와의 참조관계를 연결할 수 있는 대표 식별자\n( ㄴ ) 각 인스턴스를 구분할 수 있으나 대표성을 가지지 못하는 식별자\n( ㄷ ) 업무 수행 과정에서 자연스럽게 발생한 식별자\n( ㄹ ) 다른 엔터티와의 관계를 통해 상속받은 식별자"
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
    "title": "각 속성이 가질 수 있는 값의 범위를 의미하는 용어는?",
    "options": [
      "엔터티(Entity)",
      "식별자(Identifier)",
      "도메인(Domain)",
      "인스턴스(Instance)"
    ],
    "correctIndex": 2,
    "explanation": "도메인은 각 속성이 가질 수 있는 값의 범위(데이터 타입·길이·제약)를 정의하는 개념이다. 엔터티는 관리 대상 집합, 식별자는 인스턴스를 구분하는 속성, 인스턴스는 엔터티의 개별 발생을 의미한다.",
    "_source": "authored"
  },
  {
    "id": 10709,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "1과목",
    "number": 10,
    "title": "아래 주식별자 특성의 빈칸에 들어갈 용어로 올바른 것은?",
    "options": [
      "ㄱ 대표성, ㄴ 유일성",
      "ㄱ 최소성, ㄴ 불변성",
      "ㄱ 불변성, ㄴ 최소성",
      "ㄱ 유일성, ㄴ 대표성"
    ],
    "correctIndex": 1,
    "explanation": "주식별자의 4대 특성은 유일성·최소성·불변성·존재성이다. 최소성은 유일성을 만족하는 속성의 최소 집합 조건이고, 불변성은 한 번 부여된 식별자 값이 변경되지 않아야 한다는 요건이다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "유일성: 주식별자에 의해 엔터티 내의 모든 인스턴스가 유일하게 구분된다.\n존재성: 주식별자가 지정되면 반드시 데이터 값이 존재한다.\n( ㄱ ): 주식별자를 구성하는 속성의 수는 유일성을 만족하는 최소의 수여야 한다.\n( ㄴ ): 주식별자가 한 번 지정되면 그 값은 변하지 않아야 한다."
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
      "1건",
      "2건",
      "3건",
      "4건"
    ],
    "correctIndex": 1,
    "explanation": "COL3=4(D)를 루트로 COL1=PRIOR COL2 방향으로 거슬러 올라가면 D→B→A가 도출되지만, WHERE 필터(COL3<>2)가 계층 전개 이후 적용되어 B(COL3=2)가 제외된다. 최종 결과는 D, A의 2건이다.",
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
        ]
      },
      {
        "type": "sql",
        "code": "SELECT *\nFROM   SQLD46_01\nWHERE  COL3 <> 2\nSTART WITH COL3 = 4\nCONNECT BY COL1 = PRIOR COL2;"
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
    "explanation": "①·②·③은 NULL을 지정한 값으로 치환하지만, NULLIF는 두 값이 같으면 NULL을, 다르면 첫 번째 값을 반환한다.",
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
    "explanation": "",
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
    "explanation": "",
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
    "title": "아래 네 SQL 중 결과가 다른 것은? (A 컬럼별 합계 및 전체 합계를 반환)",
    "options": [
      "SELECT A, SUM(X) FROM T GROUP BY A UNION ALL SELECT NULL, SUM(X) FROM T;",
      "SELECT A, SUM(X) FROM T GROUP BY ROLLUP(A);",
      "SELECT A, SUM(X) FROM T GROUP BY CUBE(A);",
      "SELECT A, SUM(X) FROM T GROUP BY GROUPING SETS(A);"
    ],
    "correctIndex": 3,
    "explanation": "GROUPING SETS(A)는 A 단위 소계만 생성하고 전체 합계를 포함하지 않는다. 나머지는 모두 A별 합계와 전체 합계를 함께 반환한다.",
    "_source": "authored"
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
    "explanation": "CREATE, ALTER, DROP은 DDL(Data Definition Language)에 속한다.",
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
    "explanation": "ROLLUP(매장ID, 매장명)은 (매장ID, 매장명), (매장ID), ()의 집계 그룹을 생성하며, 이 각각에 년도가 교차 집계된다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "매장ID별 합계, (매장ID, 매장명)별 합계가 각각 년도와 결합하여 집계된다."
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
      "①은 NULL, ②는 0, ③은 0을 반환한다.",
      "①은 0, ②는 NULL, ③은 0을 반환한다.",
      "①은 0, ②는 0, ③은 NULL을 반환한다.",
      "세 SQL 모두 NULL을 반환한다."
    ],
    "correctIndex": 1,
    "explanation": "공집합에 대한 집계함수 중 COUNT는 0을, 나머지(SUM·MIN·MAX·AVG)는 NULL을 반환한다. NVL로 감싸면 0으로 치환된다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ① SELECT NVL(SUM(COL1), 0) FROM T WHERE 1=2;\n-- ② SELECT MIN(COL1)          FROM T WHERE 1=2;\n-- ③ SELECT COUNT(*)            FROM T WHERE 1=2;"
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
    "title": "아래 SQL의 결과 행 수로 옳은 것은?",
    "options": [
      "3건",
      "4건",
      "5건",
      "오류 발생"
    ],
    "correctIndex": 1,
    "explanation": "UNION 결과는 {1,2,3,4,5}이며, 여기서 {2}를 차집합하면 {1,3,4,5}로 총 4건이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT COL FROM T1   -- {1,2,3}\nUNION\nSELECT COL FROM T2   -- {3,4,5}\nMINUS\nSELECT COL FROM T3;  -- {2}"
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
    "explanation": "",
    "_source": "authored",
    "references": [
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
    "title": "아래 네 윈도우 함수 중 동일 키 데이터 [10, 20, 20, 30, 40]에 대해 결과가 다른 것은?",
    "options": [
      "RANK() → 1, 2, 2, 4, 5",
      "DENSE_RANK() → 1, 2, 2, 3, 4",
      "ROW_NUMBER() → 1, 2, 3, 4, 5",
      "RANK() 와 ROW_NUMBER() 는 결과가 항상 같다."
    ],
    "correctIndex": 3,
    "explanation": "동일 값이 존재하면 RANK는 공동 순위 뒤 번호를 건너뛰지만 ROW_NUMBER는 유일한 순번을 부여하므로 두 함수는 일반적으로 같지 않다.",
    "_source": "authored"
  },
  {
    "id": 10721,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 22,
    "title": "윈도우 함수 중 순위 함수에 해당하지 않는 것은?",
    "options": [
      "RANK()",
      "DENSE_RANK()",
      "ROW_NUMBER()",
      "RATIO_TO_REPORT()"
    ],
    "correctIndex": 3,
    "explanation": "RATIO_TO_REPORT는 전체 합계 대비 현재 값의 비율을 반환하는 비율 함수이다.",
    "_source": "authored"
  },
  {
    "id": 10722,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 23,
    "title": "다음 데이터와 SQL에서 정렬 조건의 중복 값을 동일 합으로 처리하는 윈도우 절은?",
    "options": [
      "ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW",
      "RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW",
      "ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING",
      "ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING"
    ],
    "correctIndex": 1,
    "explanation": "ORDER BY 키에 중복이 있을 때 ROWS는 물리적 행 단위로 누적하여 결과가 달라지는 반면, RANGE는 동일 값을 하나의 논리적 범위로 처리해 동일 누적 합을 반환한다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
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
            "100"
          ]
        ]
      },
      {
        "type": "text",
        "content": "기대 결과: (A, 300), (A, 300), (A, 300)"
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
    "title": "아래 윈도우 절의 결과로 옳은 것은?",
    "options": [
      "전체 최대 연봉을 모든 행에 반환한다.",
      "현재 행의 연봉 값을 그대로 반환한다.",
      "이전 행까지의 최대 연봉을 반환한다.",
      "오류가 발생한다."
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT 이름, 연봉,\n       MAX(연봉) OVER (ORDER BY 연봉 ROWS BETWEEN CURRENT ROW AND CURRENT ROW) AS M\nFROM   EMP;"
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
    "title": "아래 네 SQL 중 JOB 컬럼의 중복 데이터가 제거되지 않는 것은?",
    "options": [
      "SELECT JOB FROM EMP WHERE EXISTS (SELECT 1 FROM DEPT WHERE DEPT.DNO = EMP.DNO);",
      "SELECT DISTINCT JOB FROM EMP;",
      "SELECT JOB FROM EMP GROUP BY JOB;",
      "SELECT JOB FROM EMP UNION SELECT JOB FROM EMP2;"
    ],
    "correctIndex": 0,
    "explanation": "EXISTS는 행의 존재 여부만 판별할 뿐 중복을 제거하지 않는다. 나머지는 DISTINCT, GROUP BY, UNION 모두 중복을 제거한다.",
    "_source": "authored"
  },
  {
    "id": 10725,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 26,
    "title": "평균 키가 180 이상인 부서만 조회하는 SQL로 올바른 것은?",
    "options": [
      "SELECT 부서, AVG(키) FROM EMP WHERE AVG(키) >= 180 GROUP BY 부서;",
      "SELECT 부서, AVG(키) FROM EMP GROUP BY 부서 HAVING AVG(키) >= 180;",
      "SELECT 부서, AVG(키) FROM EMP HAVING AVG(키) >= 180;",
      "SELECT 부서, AVG(키) FROM EMP WHERE 키 >= 180 GROUP BY 부서;"
    ],
    "correctIndex": 1,
    "explanation": "그룹 함수 결과에 대한 조건은 WHERE가 아닌 HAVING 절에서 지정한다. GROUP BY와 HAVING은 순서가 바뀌어도 동일하게 동작한다.",
    "_source": "authored"
  },
  {
    "id": 10726,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 27,
    "title": "아래 SQL의 실행 결과로 옳은 것은?",
    "options": [
      "전체 직원 중 급여 최상위 1명을 반환한다.",
      "부서별 최상위 급여자를 모두 반환한다.",
      "모든 직원을 반환한다.",
      "\"single-row subquery returns more than one row\" 오류가 발생한다."
    ],
    "correctIndex": 3,
    "explanation": "단일행 비교 연산자(>=)의 우변 서브쿼리가 GROUP BY에 의해 여러 행을 반환하므로 오류가 발생한다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT 이름, 급여\nFROM   EMP\nWHERE  급여 >= (SELECT MAX(급여) FROM EMP GROUP BY 부서);"
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
    "title": "아래 ERD에 대한 설명으로 가장 적절한 것은?",
    "options": [
      "지점은 최소 한 명의 고객을 반드시 가진다.",
      "고객은 반드시 하나의 지점에 소속된다.",
      "지점에 속하지 않는 고객이 존재할 수 있으므로, 별도로 추출해야 한다.",
      "고객과 지점은 다대다 관계이다."
    ],
    "correctIndex": 2,
    "explanation": "지점 쪽 실선 + `|`는 고객 입장에서의 지점 참여를 명시하지만, 고객 쪽 점선 + `o<`는 지점 입장에서 고객 참여가 선택적(0 이상 다수)임을 의미한다. 따라서 소속 고객이 없는 지점도 가능하며, 역방향 해석상 지점에 소속되지 않은 고객이 존재할 수 있어 OUTER JOIN 또는 별도 조회가 필요하다.",
    "_source": "authored",
    "references": [
      {
        "type": "ascii",
        "text": "[ 지점 ] ─|─ ─ ─ ─ ─ ─o< [ 고객 ]"
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
      "①만 오류가 발생하지 않는다.",
      "②만 오류가 발생하지 않는다.",
      "두 SQL 모두 오류가 발생하지 않는다.",
      "두 SQL 모두 오류가 발생한다."
    ],
    "correctIndex": 1,
    "explanation": "①은 GROUP BY에 포함되지 않은 C를 ORDER BY에 사용하여 오라클에서 오류가 발생한다. ②의 HAVING COUNT(C)는 집계함수의 인자로 사용한 것이므로 허용된다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ① SELECT A, SUM(X) FROM T GROUP BY A ORDER BY C;\n-- ② SELECT A, SUM(X) FROM T GROUP BY A HAVING COUNT(C) > 1;"
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
    "title": "오라클과 SQL Server에서 아래 DML·DDL이 순차 수행된 후 ROLLBACK의 효과로 적절하지 않은 것은?",
    "options": [
      "오라클에서는 CREATE 시 UPDATE가 자동 커밋되어 UPDATE 결과는 유지된다.",
      "오라클에서는 CREATE로 생성된 테이블 TAB_NEW는 유지된다.",
      "SQL Server에서는 UPDATE와 CREATE 모두 롤백되어 TAB_NEW가 생성되지 않는다.",
      "오라클에서는 ROLLBACK이 실행되면 테이블 TAB_NEW도 함께 삭제된다."
    ],
    "correctIndex": 3,
    "explanation": "오라클의 DDL은 자동 커밋을 동반하므로 ROLLBACK으로 취소되지 않는다. SQL Server는 DDL도 트랜잭션 범위에 포함된다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "UPDATE T1 SET COL2 = 200;\nCREATE TABLE TAB_NEW ( C1 NUMBER );\nROLLBACK;"
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
    "title": "ROLLBACK에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "ROLLBACK은 트랜잭션 내에서 변경된 데이터를 이전 상태로 되돌린다.",
      "COMMIT 이전의 DML 변경은 ROLLBACK으로 취소할 수 있다.",
      "오라클에서 ROLLBACK이 수행되면 직전의 CREATE TABLE도 함께 취소된다.",
      "SAVEPOINT를 사용하면 ROLLBACK의 되돌림 범위를 부분적으로 지정할 수 있다."
    ],
    "correctIndex": 2,
    "explanation": "오라클의 DDL은 암시적 커밋을 수반하므로 ROLLBACK으로 되돌릴 수 없다.",
    "_source": "authored"
  },
  {
    "id": 10731,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 32,
    "title": "사원 5행과 부서 3행을 CROSS JOIN한 결과의 행 수는?",
    "options": [
      "5",
      "8",
      "15",
      "30"
    ],
    "correctIndex": 2,
    "explanation": "CROSS JOIN(카테시안 곱)의 결과 행 수는 두 집합의 행 수의 곱이다. 5 × 3 = 15.",
    "_source": "authored"
  },
  {
    "id": 10732,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 33,
    "title": "사용자에게 객체 접근 권한을 부여하는 DCL 명령어는?",
    "options": [
      "COMMIT",
      "GRANT",
      "REVOKE",
      "ROLLBACK"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "authored"
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
    "explanation": "",
    "_source": "authored",
    "references": [
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
    "explanation": "IN은 OR 조건의 축약 표현이다.",
    "_source": "authored",
    "references": [
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
    "explanation": "COL1, COL2는 오름차순이므로 1이 먼저 배치되고, 이후 COL3는 DESC이므로 오라클 기준 NULL이 가장 먼저 정렬된다.",
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
        ]
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
    "title": "아래 설명에 해당하는 문자열 함수는?",
    "options": [
      "SUBSTR / SUBSTRING",
      "INSTR",
      "REPLACE",
      "CONCAT"
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "문자열의 M번째 위치에서 N개 문자를 잘라 반환한다."
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
    "explanation": "",
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
    "title": "아래 SQL의 결과 행 수로 옳은 것은? (T2.COL2에 NULL이 포함되어 있다.)",
    "options": [
      "T1의 모든 행",
      "T1 중 COL1이 T2.COL2에 존재하지 않는 행",
      "0건",
      "오류 발생"
    ],
    "correctIndex": 2,
    "explanation": "NOT IN 목록에 NULL이 포함되면 NULL과의 비교 결과가 UNKNOWN이 되어 전체 조건이 FALSE로 평가되므로 결과가 0건이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT *\nFROM   T1\nWHERE  COL1 NOT IN (SELECT COL2 FROM T2);"
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
    "explanation": "CASE 식은 위에서 아래로 평가되며, 첫 번째로 참이 되는 WHEN의 결과가 반환된다. 1행(50,150)과 2행(100,250)은 COL1<=100을 만족해 'B', 3행(200,150)은 COL1>100이지만 COL2<=200이어서 'A', 4행(300,400)은 어느 조건도 만족하지 않아 ELSE의 'S'가 된다.",
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
        ]
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
    "title": "계층형 쿼리 작성 시 일반적으로 사용하는 조인 방식은?",
    "options": [
      "INNER JOIN",
      "OUTER JOIN",
      "Self Join",
      "NATURAL JOIN"
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10741,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 42,
    "title": "아래 함수의 수행 결과로 옳은 것은?",
    "options": [
      "10333",
      "10300",
      "10000",
      "10333.33"
    ],
    "correctIndex": 1,
    "explanation": "ROUND의 두 번째 인자가 음수이면 정수부의 해당 자리에서 반올림한다. -2는 100의 자리에서 반올림하므로 결과는 10300이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT ROUND(10333.3333, -2) FROM DUAL;"
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
    "title": "아래 SQL의 COALESCE 절에 대한 설명으로 옳은 것은?",
    "options": [
      "COM이 NULL이면 SAL을, NULL이 아니면 COM을 반환한다.",
      "COM과 SAL의 합을 반환한다.",
      "COM과 SAL 중 큰 값을 반환한다.",
      "COM이 NULL이 아니면 SAL을 반환한다."
    ],
    "correctIndex": 0,
    "explanation": "COALESCE(a, b, ...)는 인수 목록에서 NULL이 아닌 첫 번째 값을 반환한다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT 사번, COALESCE(COM, SAL) AS 보상\nFROM   EMP;"
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
    "title": "아래 SQL의 결과로 옳은 것은?",
    "options": [
      "(A,150), (B,140)",
      "(A,150), (C,130)",
      "(C,130), (D,120)",
      "(A,150), (D,120)"
    ],
    "correctIndex": 0,
    "explanation": "급여 내림차순으로 순번을 부여하면 상위 2명이 A(150), B(140)이 된다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
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
            "120"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT 이름, 급여\nFROM   ( SELECT 이름, 급여,\n                ROW_NUMBER() OVER (ORDER BY 급여 DESC) AS RN\n         FROM   EMP )\nWHERE  RN <= 2;"
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
    "title": "아래 데이터와 SQL의 결과로 옳은 것은?",
    "options": [
      "3, 27",
      "3, 33",
      "2, 27",
      "4, 33"
    ],
    "correctIndex": 0,
    "explanation": "WHERE COL2>21 필터로 (10,25), (20,26), (30,30) 세 행이 선택된다. COUNT(COL1)은 세 행 모두 COL1이 NULL이 아니므로 3이고, AVG(COL2)는 (25+26+30)/3 = 27이다.",
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
            "25"
          ],
          [
            "20",
            "26"
          ],
          [
            "30",
            "30"
          ],
          [
            "40",
            "20"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT COUNT(COL1), AVG(COL2)\nFROM   T\nWHERE  COL2 > 21;"
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
    "title": "조인 수행 시 인덱스 사용에 대한 설명으로 가장 적절한 것은?",
    "options": [
      "NESTED LOOP JOIN은 후행 테이블의 조인 키 인덱스가 없어도 항상 효율적이다.",
      "HASH JOIN은 조인 키에 인덱스가 반드시 존재해야 수행할 수 있다.",
      "NESTED LOOP JOIN은 선행 테이블의 처리 건수가 적고 후행 테이블의 조인 키에 인덱스가 있을 때 유리하다.",
      "SORT MERGE JOIN은 두 테이블을 정렬하지 않고 수행된다."
    ],
    "correctIndex": 2,
    "explanation": "HASH JOIN은 인덱스 없이도 수행 가능하며, SORT MERGE JOIN은 두 집합을 모두 정렬한 뒤 병합한다.",
    "_source": "authored"
  },
  {
    "id": 10746,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 47,
    "title": "옵티마이저에 대한 설명으로 옳지 않은 것은?",
    "options": [
      "규칙 기반 옵티마이저(RBO)는 사전에 정의된 규칙의 우선순위에 따라 실행계획을 결정한다.",
      "비용 기반 옵티마이저(CBO)는 통계 정보를 이용하여 최저 비용의 실행계획을 선택한다.",
      "CBO는 테이블·인덱스·컬럼의 통계 정보를 참조한다.",
      "RBO는 통계 정보를 참조하므로 CBO보다 정확도가 항상 높다."
    ],
    "correctIndex": 3,
    "explanation": "RBO는 통계 정보를 이용하지 않고 규칙만으로 실행계획을 생성하므로 일반적으로 CBO의 정확도가 더 높다.",
    "_source": "authored"
  },
  {
    "id": 10747,
    "examSetId": "round-46",
    "examLabel": "제46회 (2022년 9월)",
    "round": 46,
    "subject": "2과목",
    "number": 48,
    "title": "아래 SQL의 결과 값은?",
    "options": [
      "0",
      "1",
      "1.5",
      "2"
    ],
    "correctIndex": 3,
    "explanation": "AVG(COL1)은 NULL을 제외한 4개 값의 평균이므로 (4+4+8+8)/4 = 6이고, AVG(NVL(COL1, 0))은 NULL을 0으로 치환한 6개 값의 평균이므로 24/6 = 4이다. 따라서 차이는 6 - 4 = 2이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "COL1"
        ],
        "rows": [
          [
            "4"
          ],
          [
            "4"
          ],
          [
            "NULL"
          ],
          [
            "NULL"
          ],
          [
            "8"
          ],
          [
            "8"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT AVG(COL1) - AVG(NVL(COL1, 0))\nFROM   T;"
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
    "title": "부서 테이블에 존재하지만 대응되는 사원이 없는 부서까지 모두 조회하려 한다. 빈칸에 들어갈 조인 방식으로 올바른 것은? (사원 테이블이 FROM 절의 좌측, 부서 테이블이 우측에 위치한다고 가정)",
    "options": [
      "RIGHT OUTER JOIN",
      "LEFT OUTER JOIN",
      "INNER JOIN",
      "CROSS JOIN"
    ],
    "correctIndex": 0,
    "explanation": "부서 테이블이 FROM 절의 우측에 위치하므로, 부서의 결측 행까지 보존하려면 RIGHT OUTER JOIN을 사용한다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT *\nFROM   EMP E ???  JOIN DEPT D\nON     E.DNO = D.DNO;"
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
    "explanation": "GROUPING SETS(A, B)는 GROUP BY (A) UNION ALL GROUP BY (B)와 동치이므로, GRADE 단위와 (GRADE, JOB) 단위의 두 집계 그룹을 동시에 생성한다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "GRADE 단위 집계와 (GRADE, JOB) 단위 집계가 결합되어 나타난다."
      },
      {
        "type": "sql",
        "code": "SELECT GRADE, JOB, COUNT(*)\nFROM   EMP\nGROUP BY (  ㄱ  );"
      }
    ]
  }
];
