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
    "title": "주식별자 도출 기준으로 옳지 않은 것은?",
    "options": [
      "해당 업무에서 자주 이용되는 속성을 주식별자로 지정한다.",
      "지정된 주식별자의 값은 자주 변하지 않아야 한다.",
      "명칭·내역 등과 같이 이름으로 기술되는 속성을 주식별자로 지정한다.",
      "복합으로 주식별자를 구성할 경우 너무 많은 속성을 포함하지 않도록 한다."
    ],
    "correctIndex": 2,
    "explanation": "명칭·내역 등 서술형 속성은 자주 변경되며 주식별자로 부적합하다.",
    "_source": "authored"
  },
  {
    "id": 10501,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "1과목",
    "number": 2,
    "title": "관계의 표기법 요소가 아닌 것은?",
    "options": [
      "관계명",
      "관계차수",
      "관계선택사양",
      "관계분류"
    ],
    "correctIndex": 3,
    "explanation": "관계 표기법은 관계명·관계차수·관계선택사양 세 요소로 구성된다.",
    "_source": "authored"
  },
  {
    "id": 10502,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "1과목",
    "number": 3,
    "title": "하나의 엔터티에 구성되어 있는 여러 속성 중 엔터티를 대표할 수 있는 속성은?",
    "options": [
      "파생속성",
      "복합속성",
      "단일속성",
      "식별자"
    ],
    "correctIndex": 3,
    "explanation": "식별자는 엔터티 내 여러 속성 가운데 인스턴스를 대표·구분하는 속성이다.",
    "_source": "authored"
  },
  {
    "id": 10503,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "1과목",
    "number": 4,
    "title": "개념 엔터티로 적합한 예시는?",
    "options": [
      "조직, 보험상품",
      "주문, 입금",
      "청구, 결제",
      "로그인, 알림"
    ],
    "correctIndex": 0,
    "explanation": "개념 엔터티는 실체는 없으나 업무상 정의된 추상 개념을 다룬다.",
    "_source": "authored"
  },
  {
    "id": 10504,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "1과목",
    "number": 5,
    "title": "발생 시점 기준 중심 엔터티에 해당하는 예는?",
    "options": [
      "사원",
      "고객",
      "프로젝트",
      "주문"
    ],
    "correctIndex": 2,
    "explanation": "발생 시점 기준 엔터티는 기본/중심/행위 세 가지로 분류된다. ① 사원·② 고객은 다른 엔터티에 의존하지 않고 독립적으로 존재하는 기본 엔터티이다. ④ 주문은 고객·상품 두 부모로부터 발생하므로 행위 엔터티에 해당한다. ③ 프로젝트는 사원·조직(기본 엔터티) 으로부터 발생하면서 동시에 작업·일정 등 다른 행위 엔터티의 부모가 되는 중심 엔터티이다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "발생 시점 기준 엔터티 분류\n\n• 기본(Key) 엔터티: 다른 엔터티에 의존하지 않고 독립적으로 존재한다.\n• 중심(Main) 엔터티: 기본 엔터티로부터 발생하며, 다른 행위 엔터티의 부모가 된다.\n• 행위(Action) 엔터티: 두 개 이상의 부모 엔터티로부터 업무 행위의 결과로 발생한다."
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
    "title": "데이터 모델링 유의 사항 중 옳지 않은 것은?",
    "options": [
      "중복 데이터를 최소화한다.",
      "업무 규칙을 반영해야 한다.",
      "엔터티 간 관계를 명확히 표현해야 한다.",
      "프로젝트별로 상이한 엔터티를 별도의 제약 없이 통합하여 저장한다."
    ],
    "correctIndex": 3,
    "explanation": "업무 성격이 상이한 데이터를 무조건 합치면 데이터 무결성과 관리 효율이 떨어진다.",
    "_source": "authored"
  },
  {
    "id": 10506,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "1과목",
    "number": 7,
    "title": "아래 설명에 해당하는 개념은?",
    "options": [
      "관계",
      "속성",
      "도메인",
      "식별자"
    ],
    "correctIndex": 3,
    "explanation": "식별자는 엔터티의 인스턴스를 유일하게 구분할 수 있게 하는 하나 또는 그 이상의 속성 집합이다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "엔터티의 인스턴스를 유일하게 구분할 수 있게 하는 하나 또는 그 이상의 속성 집합"
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
    "title": "데이터베이스 스키마의 종류가 아닌 것은?",
    "options": [
      "외부 스키마",
      "내부 스키마",
      "개념 스키마",
      "응용 스키마"
    ],
    "correctIndex": 3,
    "explanation": "데이터베이스 스키마는 외부·개념·내부 3계층으로 구성되며 응용 스키마는 표준 분류에 포함되지 않는다.",
    "_source": "authored"
  },
  {
    "id": 10508,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "1과목",
    "number": 9,
    "title": "M:N 관계를 1:M, M:1 관계로 해소하여 정규화를 수행하는 데이터 모델링 단계는?",
    "options": [
      "개괄적 모델링",
      "개념적 모델링",
      "논리적 모델링",
      "물리적 모델링"
    ],
    "correctIndex": 2,
    "explanation": "M:N 관계 해소·정규화 등 업무 규칙을 상세화하는 단계는 논리적 모델링이다.",
    "_source": "authored"
  },
  {
    "id": 10509,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "1과목",
    "number": 10,
    "title": "속성이 가질 수 있는 값의 범위를 정의한 것으로, 데이터 타입과 범위를 지정한 개념은?",
    "options": [
      "도메인",
      "엔터티",
      "식별자",
      "인스턴스"
    ],
    "correctIndex": 0,
    "explanation": "도메인은 속성이 취할 수 있는 값의 범위·데이터 타입·크기를 정의한 집합이다.",
    "_source": "authored"
  },
  {
    "id": 10510,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 11,
    "title": "평균 학점이 3.0 이상인 학생을 조회하는 SQL 로 가장 적절한 것은?",
    "options": [
      "SELECT 학번 FROM STUDENT WHERE AVG(학점) >= 3.0;",
      "SELECT 학번 FROM STUDENT S, ENROLL E WHERE S.학번 = E.학번 HAVING AVG(학점) >= 3.0;",
      "SELECT S.학번 FROM STUDENT S JOIN ENROLL E ON S.학번 = E.학번 GROUP BY S.학번 HAVING AVG(E.학점) >= 3.0;",
      "SELECT 학번 FROM ENROLL WHERE AVG(학점) >= 3.0;"
    ],
    "correctIndex": 2,
    "explanation": "학점은 ENROLL 에 있으므로 STUDENT 와 조인 후 학번으로 GROUP BY 하고 HAVING 으로 평균 학점을 필터링해야 한다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "STUDENT 테이블",
        "headers": [
          "컬럼"
        ],
        "rows": [
          [
            "학과"
          ],
          [
            "학번 (PK)"
          ],
          [
            "강좌"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "CLASS 테이블",
        "headers": [
          "컬럼"
        ],
        "rows": [
          [
            "강좌번호 (PK)"
          ],
          [
            "..."
          ]
        ]
      },
      {
        "type": "table",
        "caption": "ENROLL 테이블",
        "headers": [
          "컬럼"
        ],
        "rows": [
          [
            "학번 (PK, FK)"
          ],
          [
            "강좌번호 (PK, FK)"
          ],
          [
            "학점"
          ]
        ]
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
    "explanation": "뷰 조건과 조회 조건이 AND 로 결합되어 C1='B' 이고 C2 >= 200 인 (B, 200) 한 건의 SUM 이 200 이다.",
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
        "code": "CREATE VIEW V_TBL AS\nSELECT * FROM TBL WHERE C1 = 'B' OR C1 IS NULL;\n\nSELECT SUM(C2) FROM V_TBL\nWHERE C2 >= 200 AND C1 = 'B';"
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
    "title": "아래 OUTER JOIN SQL 의 결과로 옳은 것은?",
    "options": [
      "TAB1 과 TAB2 가 매칭되는 3 행만 반환된다.",
      "TAB1 의 5행 모두 반환 (매칭되지 않은 D, E 의 TAB2 컬럼은 NULL)",
      "ON 조건을 만족하지 않는 D, E 가 제외되어 TAB1 의 4 행만 반환된다.",
      "양쪽 조인 키가 모두 NULL 이라 공집합이 반환된다."
    ],
    "correctIndex": 1,
    "explanation": "LEFT OUTER JOIN 은 좌측 TAB1 의 모든 행을 보존하며, ON 조건 불일치 행의 우측 컬럼은 NULL 로 채워진다. ON 절은 두 조건의 AND 결합으로, ① C1 매칭 ② B.C2 BETWEEN 1 AND 3 둘 다 만족해야 매칭된다. TAB2 에는 D 가 (D,4) 로 존재하지만 C2=4 가 BETWEEN 1 AND 3 을 만족하지 못하므로 매칭에서 제외된다 → TAB1 의 D 행은 미매칭 처리되어 우측 컬럼이 NULL. E 는 TAB2 자체에 없어 NULL. 결과적으로 TAB1 의 5행 모두 보존되고 D·E 의 TAB2 컬럼만 NULL 이 된다.",
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
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT * FROM TAB1 A\nLEFT OUTER JOIN TAB2 B\nON (A.C1 = B.C1 AND B.C2 BETWEEN 1 AND 3);"
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
    "explanation": "T 의 단일 행에 STR='abcdefg' 가 들어 있으므로 LENGTH(STR)=7 이고 LENGTH(STR)-3 = 4 이다. SUBSTR('abcdefg', 4) 는 4번째 문자부터 끝까지를 반환하므로 'defg' 이다. 정답은 ②.",
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
        "code": "-- STR = 'abcdefg'\nSELECT SUBSTR(STR, LENGTH(STR) - 3) FROM T;"
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
    "title": "아래 SQL 의 결과로 옳은 것은?",
    "options": [
      "0",
      "9999",
      "1",
      "ERROR"
    ],
    "correctIndex": 0,
    "explanation": "COUNT(*) 는 행이 없어도 0 을 반환하므로 NVL 의 대체 값이 적용되지 않는다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT NVL(COUNT(*), 9999)\nFROM   TAB1\nWHERE  1 = 2;"
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
    "title": "클래스와 튜터 관계에서 빠짐없이 값이 나오도록 조인하려 한다. 가장 적절한 조합은?",
    "options": [
      "INNER JOIN 만 사용",
      "클래스 기준 LEFT JOIN",
      "튜터 기준 RIGHT JOIN",
      "양쪽을 모두 포함하는 FULL OUTER JOIN"
    ],
    "correctIndex": 3,
    "explanation": "양쪽 모두에 매칭되지 않는 행까지 포함해야 하므로 FULL OUTER JOIN 이 적합하다.",
    "_source": "authored"
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
      "START WITH 카테고리번호=11 CONNECT BY PRIOR 카테고리번호=상위카테고리번호",
      "START WITH 카테고리번호=11 CONNECT BY 카테고리번호=PRIOR 상위카테고리번호",
      "START WITH 상위카테고리번호=11 CONNECT BY PRIOR 카테고리번호=상위카테고리번호",
      "START WITH 카테고리번호=11 CONNECT BY 상위카테고리번호=PRIOR 상위카테고리번호"
    ],
    "correctIndex": 1,
    "explanation": "자식→부모 역방향 탐색은 PRIOR 가 자식 쪽 컬럼에 붙어야 한다. ② `카테고리번호 = PRIOR 상위카테고리번호` 는 \"부모 행의 카테고리번호 = 자식 행의 상위카테고리번호\" 를 의미하므로, 11 → 5 → 2 → 1 순으로 거슬러 올라간다. ① 은 PRIOR 가 자식 쪽이 아니라 부모 쪽 컬럼에 붙어 순방향(부모→자식) 전개가 된다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "카테고리 테이블",
        "headers": [
          "카테고리번호",
          "카테고리명",
          "상위카테고리번호"
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
        "code": "-- 11 에서 시작하여 1 까지 거슬러 올라가기 (자식→부모)\nSELECT 카테고리번호, 카테고리명, 상위카테고리번호, LEVEL\nFROM   카테고리\nSTART WITH 카테고리번호 = 11\nCONNECT BY 카테고리번호 = PRIOR 상위카테고리번호;"
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
    "title": "아래 집계 결과(소계 행에서 NULL 이 등장하는 패턴) 에 해당하는 GROUP BY 절은?",
    "options": [
      "ROLLUP(A, B)",
      "GROUPING SETS((A, B))",
      "GROUP BY A, B",
      "CUBE(A, B)"
    ],
    "correctIndex": 3,
    "explanation": "CUBE 는 (A,B), (A), (B), () 의 모든 부분집합을 반환하므로 (A=A1, B=NULL), (A=NULL, B=B1), (A=NULL, B=NULL) 행이 모두 등장한다. ROLLUP 은 (A) 소계와 () 총계만, GROUPING SETS((A,B)) 는 세부 행만, GROUP BY A,B 는 소계 자체가 없다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "출력 결과 (A, B 그룹 키)",
        "headers": [
          "A",
          "B"
        ],
        "rows": [
          [
            "A1",
            "B1"
          ],
          [
            "A1",
            "NULL"
          ],
          [
            "NULL",
            "B1"
          ],
          [
            "NULL",
            "NULL"
          ]
        ]
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
    "title": "NATURAL JOIN 의 특징으로 옳지 않은 것은?",
    "options": [
      "두 테이블 간 동일 이름의 컬럼으로 조인이 이루어진다.",
      "등가 조인(Equi Join) 과 비등가 조인(Non-Equi Join) 이 모두 가능하다.",
      "USING 절과 함께 사용할 수 없다.",
      "ON 절과 함께 사용할 수 없다."
    ],
    "correctIndex": 1,
    "explanation": "NATURAL JOIN 은 동일 이름 컬럼에 대해 등가 조인만 수행한다.",
    "_source": "authored"
  },
  {
    "id": 10519,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 20,
    "title": "아래 T 테이블에서 NAME 별 그룹의 최소 ID 만 남기고 나머지를 삭제하는 SQL 로 옳은 것은?",
    "options": [
      "DELETE FROM T WHERE ID NOT IN (SELECT MIN(ID) FROM T GROUP BY NAME);",
      "DELETE FROM T WHERE ID IN (SELECT MAX(ID) FROM T GROUP BY NAME);",
      "DELETE FROM T WHERE ID = MIN(ID);",
      "DELETE FROM T GROUP BY NAME HAVING ID = MIN(ID);"
    ],
    "correctIndex": 0,
    "explanation": "그룹별 MIN(ID) 를 NOT IN 으로 제외하고 나머지를 삭제하면 이름별 최소 ID 만 남는다. ② 는 MAX 만 삭제하고, ③ 은 비집계 컨텍스트에서 MIN 사용 불가, ④ 는 DELETE 에 GROUP BY/HAVING 직접 사용 불가.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T 테이블",
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
            "KANG"
          ],
          [
            "400",
            "KIM"
          ],
          [
            "500",
            "KANG"
          ]
        ]
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
    "title": "ALTER 문으로 컬럼의 형식을 변경하는 SQL 로 옳은 것은?",
    "options": [
      "ALTER TABLE TEAM MODIFY 컬럼명 VARCHAR2(10) DEFAULT '2023-09-09' NOT NULL;",
      "ALTER TABLE TEAM CHANGE 컬럼명 VARCHAR2(10);",
      "ALTER COLUMN TEAM.컬럼명 TYPE VARCHAR2(10);",
      "UPDATE TABLE TEAM MODIFY 컬럼명 VARCHAR2(10);"
    ],
    "correctIndex": 0,
    "explanation": "Oracle 에서 컬럼 형식 변경은 ALTER TABLE ... MODIFY 구문을 사용하며 DEFAULT·NOT NULL 도 함께 지정할 수 있다.",
    "_source": "authored"
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
    "explanation": "Oracle (+) 외부조인 두 방향을 UNION ALL 로 결합한 형태는 ANSI 의 LEFT OUTER JOIN UNION ALL RIGHT OUTER JOIN 과 동치이다.",
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
    "title": "데이터 제어어(DCL) 및 트랜잭션 제어어(TCL) 에 해당하지 않는 명령은?",
    "options": [
      "GRANT",
      "ROLLBACK",
      "REVOKE",
      "ALTER"
    ],
    "correctIndex": 3,
    "explanation": "ALTER 는 DDL 에 속한다.",
    "_source": "authored"
  },
  {
    "id": 10523,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 24,
    "title": "SQL 집합 연산자 중 교집합을 반환하는 것은?",
    "options": [
      "UNION ALL",
      "EXCEPT",
      "INTERSECT",
      "UNION"
    ],
    "correctIndex": 2,
    "explanation": "`INTERSECT` 는 두 결과 집합에 공통으로 존재하는 행만 반환하는 교집합 연산자이다. `UNION` 은 합집합(중복 제거), `UNION ALL` 은 중복 유지 합집합, `EXCEPT`(MINUS)는 차집합이다.",
    "_source": "authored"
  },
  {
    "id": 10524,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 25,
    "title": "DELETE, TRUNCATE, DROP 명령어에 대한 비교 중 옳지 않은 것은?",
    "options": [
      "DROP 은 테이블 정의와 모든 데이터를 삭제한다.",
      "TRUNCATE 는 테이블을 초기 상태로 만든다.",
      "TRUNCATE 는 UNDO 데이터를 생성하지 않아 DELETE 보다 빠르다.",
      "DROP 은 Auto Commit 이고 DELETE 와 TRUNCATE 는 사용자 COMMIT 으로 수행된다."
    ],
    "correctIndex": 3,
    "explanation": "TRUNCATE 도 Auto Commit 이 수행된다. 사용자 COMMIT 이 필요한 것은 DELETE 뿐이다.",
    "_source": "authored"
  },
  {
    "id": 10525,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 26,
    "title": "아래 테이블명 중 올바른 것은?",
    "options": [
      "2023_TBL",
      "2023-TBL",
      "TBL-2023",
      "TBL_2023#"
    ],
    "correctIndex": 3,
    "explanation": "테이블명은 문자로 시작해야 하고 $, #, _ 특수문자는 허용된다.",
    "_source": "authored"
  },
  {
    "id": 10526,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 27,
    "title": "부서별 최고 연봉을 조회하는 SQL 로 옳은 것은?",
    "options": [
      "GROUP BY 부서",
      "HAVING 부서",
      "ORDER BY 부서",
      "WHERE 부서"
    ],
    "correctIndex": 0,
    "explanation": "그룹 함수 MAX 를 비집계 컬럼 부서와 함께 사용하려면 GROUP BY 부서 가 필요하다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT 부서, MAX(연봉)\nFROM   EMP\n( ? );"
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
    "explanation": "SUM(급여)=12000, 12000/3=4000. COUNT(*) 는 NULL 포함 4, COUNT(급여) 는 NULL 제외 3 이다.",
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
        "code": "SELECT SUM(급여)/3, COUNT(*), COUNT(급여) FROM T;\n-- SUM(급여)/3 = 12000/3 = 4000\n-- COUNT(*) = 4 (NULL 포함)\n-- COUNT(급여) = 3 (NULL 제외)"
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
    "title": "아래 설명에 해당하는 윈도우 함수는?",
    "options": [
      "LEAD",
      "LAG",
      "FIRST_VALUE",
      "LAST_VALUE"
    ],
    "correctIndex": 1,
    "explanation": "LAG 는 현재 행 기준 이전 행의 값을 참조하는 윈도우 함수이다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "현재 행 기준 이전 행의 값을 참조한다."
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
    "title": "아래 LAG·LEAD 함수 결과 중 나머지와 다른 것은?",
    "options": [
      "LAG(VAL, 1) OVER(ORDER BY ID)",
      "LEAD(VAL, -1) OVER(ORDER BY ID)",
      "LAG(VAL, 1) OVER(ORDER BY ID DESC)",
      "LEAD(VAL, 1) OVER(ORDER BY ID DESC)"
    ],
    "correctIndex": 2,
    "explanation": "ID 오름차순 정렬 기준의 \"직전 행\" 을 반환하는지를 비교한다. ① LAG(1) ASC = 직전 행. ② LEAD(-1) ASC = 음수 offset 으로 LAG(1) 과 동일 = 직전 행. ④ LEAD(1) DESC = DESC 정렬에서 다음 행 = 원래 ASC 기준에서 직전 행. 따라서 ①·②·④ 가 모두 직전 행 값을 반환한다. ③ LAG(1) DESC = DESC 정렬에서 직전 행 = 원래 ASC 기준에서 다음 행으로 방향이 반대가 된다.",
    "_source": "authored"
  },
  {
    "id": 10530,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 31,
    "title": "계층형 질의 관련 설명 중 옳지 않은 것은?",
    "options": [
      "LEAF 노드의 LEVEL 은 항상 1이다.",
      "CONNECT_BY_ISLEAF 는 리프 노드이면 1을 반환한다.",
      "ORDER SIBLINGS BY 는 동일 레벨 내에서 정렬을 수행한다.",
      "NOCYCLE 옵션은 사이클 발생 시 전개를 중단한다."
    ],
    "correctIndex": 0,
    "explanation": "LEVEL 은 루트에서 1, 하위로 내려갈수록 1씩 증가한다. 리프 노드의 LEVEL 이 항상 1이라는 설명은 잘못되었다.",
    "_source": "authored"
  },
  {
    "id": 10531,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 32,
    "title": "아래 컬럼 속성(VARCHAR2(8)) 을 변경하는 SQL 로 옳은 것은?",
    "options": [
      "ALTER TABLE T MODIFY (COL VARCHAR2(10));",
      "ALTER TABLE T CHANGE COL VARCHAR2(10);",
      "ALTER TABLE T ALTER COL VARCHAR2(10);",
      "ALTER TABLE T UPDATE COL VARCHAR2(10);"
    ],
    "correctIndex": 0,
    "explanation": "Oracle 문법상 컬럼 타입 변경은 MODIFY 키워드를 사용한다.",
    "_source": "authored"
  },
  {
    "id": 10532,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 33,
    "title": "아래 SQL 수행 시 추가되는 시간으로 옳은 것은?",
    "options": [
      "+30분",
      "+45분",
      "+1시간",
      "+2시간"
    ],
    "correctIndex": 2,
    "explanation": "1/24/60 = 1분이며, 1/12/2 = 1/24 = 1시간에 해당한다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT SYSDATE + 1/12/(60/30) FROM DUAL;"
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
    "title": "아래 네 개의 SQL 중 실행 결과가 다른 것은?",
    "options": [
      "LEFT OUTER JOIN",
      "UNION ALL + RIGHT OUTER JOIN",
      "FULL OUTER JOIN",
      "INNER JOIN 만 수행"
    ],
    "correctIndex": 3,
    "explanation": "①·②·③ 은 외부 조인으로 미매칭 행을 보존하지만, ④ INNER JOIN 은 매칭되지 않는 행을 제외하므로 결과가 다르다.",
    "_source": "authored"
  },
  {
    "id": 10534,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 35,
    "title": "아래 설명 중 옳지 않은 것은?",
    "options": [
      "INTERSECT 는 두 집합의 교집합을 반환한다.",
      "UNION 은 중복을 제거한다.",
      "EXCEPT 는 차집합을 반환한다.",
      "일반 집합 연산은 ORDER BY 구문으로 사용할 수 없다."
    ],
    "correctIndex": 3,
    "explanation": "UNION, INTERSECT 등도 최종 결과에 ORDER BY 를 적용할 수 있다.",
    "_source": "authored"
  },
  {
    "id": 10535,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 36,
    "title": "사원이 없는 부서까지 포함하여 조회하는 조인 방식은?",
    "options": [
      "INNER JOIN",
      "LEFT OUTER JOIN (부서 기준)",
      "RIGHT OUTER JOIN (사원 기준)",
      "CROSS JOIN"
    ],
    "correctIndex": 1,
    "explanation": "사원이 없는 부서까지 포함하려면 부서 테이블을 좌측에 두고 LEFT OUTER JOIN 으로 사원 테이블을 결합한다.",
    "_source": "authored"
  },
  {
    "id": 10536,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 37,
    "title": "아래 부서 테이블에서 부서코드 11 → 7 → 2 의 계층 결과를 반환하는 SQL 로 옳은 것은?",
    "options": [
      "START WITH 부서코드=2 CONNECT BY 상위부서코드 = PRIOR 부서코드",
      "START WITH 부서코드=2 CONNECT BY PRIOR 상위부서코드 = 부서코드",
      "START WITH 부서코드=11 CONNECT BY 상위부서코드 = PRIOR 부서코드",
      "START WITH 부서코드=11 CONNECT BY PRIOR 상위부서코드 = 부서코드"
    ],
    "correctIndex": 3,
    "explanation": "부서 11 에서 시작해 자식→부모 방향(역방향) 으로 2 까지 거슬러 올라간다. PRIOR 상위부서코드 = 부서코드 형태가 자식 행의 상위부서코드 가 부모 행의 부서코드와 매칭되어 역방향 전개가 이루어진다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "부서 테이블",
        "headers": [
          "부서코드",
          "상위부서코드"
        ],
        "rows": [
          [
            "11",
            "7"
          ],
          [
            "7",
            "2"
          ],
          [
            "2",
            "NULL"
          ]
        ]
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
      "SELECT 영화명, 배우명, 출연료 FROM 배우, 영화, 출연 WHERE 출연료 >= 8888 AND 출연.영화번호 = 영화.영화번호 AND 출연.배우번호 = 배우.배우번호;",
      "SELECT 영화.영화명, 배우.배우명, 출연료 FROM 배우, 영화, 출연 WHERE 출연료 >= 8888 AND 출연.영화번호 = 영화.영화번호 AND 출연.배우번호 = 배우.배우번호;"
    ],
    "correctIndex": 3,
    "explanation": "다중 테이블 조인 시 동명 컬럼 충돌을 피하기 위해 각 속성을 소유 테이블로 한정하고, 출연·영화·배우의 PK/FK 조건을 모두 명시해야 한다.",
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
    "title": "아래 EMP 테이블에서 COUNT(DISTINCT 급여) 의 결과는?",
    "options": [
      "5",
      "3",
      "4",
      "2"
    ],
    "correctIndex": 1,
    "explanation": "서로 다른 급여 값은 30000, 35000, 4000 의 3개이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP 테이블",
        "headers": [
          "ID",
          "급여"
        ],
        "rows": [
          [
            "101",
            "30000"
          ],
          [
            "102",
            "35000"
          ],
          [
            "103",
            "4000"
          ],
          [
            "104",
            "35000"
          ],
          [
            "105",
            "4000"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT COUNT(DISTINCT 급여) FROM EMP;"
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
    "title": "두 번째 글자가 's' 이고 전체 길이가 4 글자 이상인 문자열을 찾는 LIKE 패턴으로 옳지 않은 것은?",
    "options": [
      "'%S__'",
      "'_S%__'",
      "'_S_%_'",
      "'_S__%'"
    ],
    "correctIndex": 0,
    "explanation": "'%S_ _' 은 S 의 위치가 두 번째가 아닐 수 있고 길이도 보장하지 못한다.",
    "_source": "authored"
  },
  {
    "id": 10540,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 41,
    "title": "아래 TBL 테이블에 대해 뷰를 만들고 외부 조회 조건을 적용한 결과로 옳은 것은?",
    "options": [
      "0",
      "200",
      "300",
      "NULL"
    ],
    "correctIndex": 1,
    "explanation": "뷰 조건과 외부 조회 조건이 AND 로 결합되어 C1='B' 이고 C2 >= 200 인 (B, 200) 한 건의 SUM 이 200 이다.",
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
        "code": "CREATE VIEW V_TBL AS\nSELECT * FROM TBL WHERE C1 = 'B' OR C1 IS NULL;\n\nSELECT SUM(C2) FROM V_TBL\nWHERE C2 >= 200 AND C1 = 'B';"
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
    "title": "아래 네 개의 SQL 중 결과가 나머지와 다른 것은?",
    "options": [
      "SELECT * FROM T1 NATURAL JOIN T2;",
      "SELECT * FROM T1 JOIN T2 USING(COL);",
      "SELECT * FROM T1 INNER JOIN T2 ON T1.COL = T2.COL;",
      "SELECT * FROM T2 WHERE T2.COL IN (SELECT COL FROM T1 WHERE T2.COL = T1.COL);"
    ],
    "correctIndex": 3,
    "explanation": "①·②·③ 은 모두 T1·T2 의 공통 컬럼 COL 로 이너 조인을 수행하며, SELECT * 가 양쪽 테이블의 컬럼을 모두 반환한다. (① NATURAL JOIN, ② USING 은 공통 컬럼을 한 번씩 반환하고, ③ ON 은 양쪽 컬럼을 각각 반환하지만 모든 행 대상은 동일.) ④ 는 T2 만 FROM 절에 두고 IN 서브쿼리로 필터링하므로 SELECT * 의 결과가 T2 의 컬럼만 반환되어 결과 컬럼 구성이 ①~③ 과 다르다.",
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
    "explanation": "SUM(금액) 은 NULL 을 제외하여 100+200+300=600, COUNT(*) 는 NULL 포함 4 이므로 600/4=150 이 된다. 분모가 COUNT(금액) 이었다면 600/3=200 이 된다.",
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
    "explanation": "T 는 비어 있는 상태로 시작한다. INSERT 1, INSERT 2 로 T={1,2}. SAVEPOINT SV1 후 UPDATE VAL=4 WHERE VAL=1 → T={4,2}. 같은 이름의 SAVEPOINT SV1 을 다시 선언하면 직전 SV1 은 사라지고 현재 시점이 새 SV1 이 된다(T={4,2}). DELETE VAL=2 → T={4}. ROLLBACK TO SAVEPOINT SV1 → T={4,2} 로 복원. INSERT 3 → T={4,2,3}. COMMIT 후 MAX(VAL)=4. 정답은 ④.",
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
        "code": "INSERT INTO T VALUES (1);\nINSERT INTO T VALUES (2);\nSAVEPOINT SV1;\nUPDATE T SET VAL = 4 WHERE VAL = 1;\nSAVEPOINT SV1;          -- 덮어쓰기 (이전 SV1 폐기)\nDELETE FROM T WHERE VAL = 2;\nROLLBACK TO SAVEPOINT SV1;\nINSERT INTO T VALUES (3);\nCOMMIT;\nSELECT MAX(VAL) FROM T;"
      },
      {
        "type": "table",
        "caption": "최종 T 상태",
        "headers": [
          "VAL"
        ],
        "rows": [
          [
            "4"
          ],
          [
            "2"
          ],
          [
            "3"
          ]
        ]
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
    "title": "아래 질의 결과 중 다른 것은?",
    "options": [
      "T1 NATURAL JOIN T2",
      "T1 JOIN T2 USING(COL)",
      "T1 INNER JOIN T2 ON T1.COL = T2.COL",
      "SELECT * FROM T2 WHERE T2.COL IN (SELECT COL FROM T1 WHERE T2.COL = T1.COL)"
    ],
    "correctIndex": 3,
    "explanation": "①·②·③ 은 모두 T1·T2 의 COL 로 이너 조인을 수행하므로 양쪽 테이블의 컬럼이 결과에 모두 등장한다. ④ 의 IN 서브쿼리 형태는 FROM 에 T2 만 두고 T1 은 EXISTS 와 유사한 필터로 사용하므로 결과 컬럼이 T2 의 것만 반환되어 ①~③ 과 컬럼 구성이 다르다. (50회는 42·45 두 번에 걸쳐 동일 변별 패턴을 출제했다.)",
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
    "title": "1, 2, 3, 4, 5 와 같이 동순위 없이 연속 번호를 부여하는 윈도우 함수는?",
    "options": [
      "RANK",
      "ROW_NUMBER",
      "DENSE_RANK",
      "NTILE"
    ],
    "correctIndex": 1,
    "explanation": "ROW_NUMBER 는 동일 값이 존재해도 순위를 공유하지 않고 1부터 연속된 번호를 부여한다.",
    "_source": "authored"
  },
  {
    "id": 10546,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 47,
    "title": "ROUND(3.45, 1) 의 결과는?",
    "options": [
      "3.4",
      "3.45",
      "3.5",
      "4"
    ],
    "correctIndex": 2,
    "explanation": "ROUND(3.45, 1) 은 소수점 둘째 자리에서 반올림하여 3.5 를 반환한다.",
    "_source": "authored"
  },
  {
    "id": 10547,
    "examSetId": "round-50",
    "examLabel": "제50회 (2023년 9월)",
    "round": 50,
    "subject": "2과목",
    "number": 48,
    "title": "아래 조건이 없는 결합 형태의 조인은?",
    "options": [
      "INNER JOIN",
      "NATURAL JOIN",
      "OUTER JOIN",
      "CROSS JOIN"
    ],
    "correctIndex": 3,
    "explanation": "조인 조건 없이 두 테이블을 결합하면 모든 행의 조합을 생성하는 카티션 곱(CROSS JOIN) 이 된다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT * FROM TABLE1, TABLE2;  -- 조인 조건 없음"
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
      "ㄱ = 2, ㄴ = 700",
      "ㄱ = 1, ㄴ = 700",
      "ㄱ = 2, ㄴ = 600",
      "ㄱ = NULL, ㄴ = 700"
    ],
    "correctIndex": 0,
    "explanation": "LAG(금액, 1) 은 직전 행의 금액을 반환한다. 1행의 LAG 는 이전 행이 없어 NULL, 2행의 LAG 는 1행의 금액 (ㄱ), 3행의 LAG 는 2행의 금액 (ㄴ) 이다. 출제 데이터에서 (ㄱ)=2, (ㄴ)=700.",
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
            "2"
          ],
          [
            "2",
            "700"
          ],
          [
            "3",
            "600"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT 행,\n       LAG(금액, 1) OVER (ORDER BY 행) AS 이전금액\nFROM   매출;"
      },
      {
        "type": "table",
        "caption": "출력 결과 (LAG 컬럼이 정답의 ㄱ/ㄴ 위치)",
        "headers": [
          "행",
          "금액",
          "LAG(금액, 1)"
        ],
        "rows": [
          [
            "1",
            "2",
            "NULL"
          ],
          [
            "2",
            "700",
            "(ㄱ)"
          ],
          [
            "3",
            "600",
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
    "title": "아래 설명에 해당하는 명령어는?",
    "options": [
      "COMMIT",
      "ROLLBACK",
      "SAVEPOINT",
      "GRANT"
    ],
    "correctIndex": 1,
    "explanation": "ROLLBACK 은 트랜잭션 내의 모든 변경 작업을 취소하고 직전 COMMIT 시점의 상태로 복원한다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "트랜잭션 수행 중 오류가 발생한 경우 모든 작업을 취소하고 이전 상태로 되돌리는 명령"
      }
    ]
  }
];
