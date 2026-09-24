// Auto-generated from PDF + blog + scripts/authored/round-61.json
// 제61회 — 2026년 5월 · 50문항
// ⚠ 직접 편집 금지. 출처별 데이터를 고친 뒤 'node scripts/build-quiz-bank.mjs' 재실행.
import type { QuizQuestion } from '../quizBank';

export const ROUND_61: QuizQuestion[] = [
  {
    "id": 9950,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "1과목",
    "number": 1,
    "title": "다음 중 외부스키마에 대한 설명으로 옳지 않은 것은?",
    "options": [
      "사용자나 응용프로그램 개발자의 관점에서 필요한 데이터베이스의 논리적 구조이다.",
      "하나의 데이터베이스에 대해 여러 개의 외부스키마가 존재할 수 있다.",
      "데이터베이스 전체의 저장 구조를 정의하며 물리적 저장 방법을 포함한다.",
      "응용프로그램이 필요로 하는 데이터만 정의하여 접근 범위를 제한할 수 있다."
    ],
    "correctIndex": 2,
    "explanation": "외부 스키마는 사용자 관점의 뷰(View) 단계이다. 하나의 DB에 대해 여러 개의 뷰(외부 스키마)를 만들 수 있고, 필요한 데이터만 정의해 접근 범위를 제한할 수 있다. ③의 '전체 저장 구조·물리적 저장 방법'은 내부 스키마의 설명이다. (외계인이네: 외부·개념·내부)",
    "_source": "authored"
  },
  {
    "id": 9951,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "1과목",
    "number": 2,
    "title": "다음 설명이 나타내는 것으로 가장 적절한 것은?",
    "options": [
      "도메인",
      "식별자",
      "엔터티",
      "인스턴스"
    ],
    "correctIndex": 0,
    "explanation": "도메인은 속성이 가질 수 있는 값의 범위(데이터 타입, 제약 사항)를 의미한다. 속성에 대한 타입·제약·값의 범위라는 키워드가 나오면 도메인을 떠올린다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "속성에 대한 타입이나 제약 사항으로, 해당 속성이 가질 수 있는 값의 범위를 의미한다."
      }
    ]
  },
  {
    "id": 9952,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "1과목",
    "number": 3,
    "title": "엔터티를 유형/무형 엔터티 기준으로 분류할 때, 다음 중 이 분류 기준에 해당하지 않는 것은?",
    "options": [
      "유형 엔터티",
      "개념 엔터티",
      "사건 엔터티",
      "행위 엔터티"
    ],
    "correctIndex": 3,
    "explanation": "엔터티는 유형·무형 기준으로 유형·개념·사건 엔터티로 나뉜다. 행위 엔터티는 발생 시점 기준(기본·중심·행위 엔터티)의 분류이므로 유형·무형 기준에 해당하지 않는다.",
    "_source": "authored"
  },
  {
    "id": 9953,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "1과목",
    "number": 4,
    "title": "다음 중 비식별관계로의 전환을 고려해야 하는 상황으로 가장 적절한 것은?",
    "options": [
      "자식 엔터티가 부모 엔터티에 강하게 의존하며 부모 없이는 존재 의미가 없는 경우",
      "상속받은 식별자가 계속 연결되어 주식별자의 구성 속성 수가 많아지고 복잡해지는 경우",
      "자식 엔터티의 등록번호를 반드시 부모 식별자와 연계해서 관리해야 하는 경우",
      "이력 관리를 위해 부모의 식별자를 자식이 반드시 포함해야 하는 경우"
    ],
    "correctIndex": 1,
    "explanation": "식별자 관계가 계속 이어지면 PK 속성 수가 늘어나 모델과 SQL(조인)이 복잡해진다. 이런 경우 인조 식별자를 도입하고 비식별 관계로 전환하는 것을 고려한다. ①③④는 부모와 강한 연결(함께 생성·소멸)이 필요한 경우로 식별자 관계를 유지해야 한다.",
    "_source": "authored"
  },
  {
    "id": 9954,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "1과목",
    "number": 5,
    "title": "다음 중 관계선택사양에 대한 설명으로 옳은 것을 모두 고른 것은?",
    "options": [
      "가",
      "가, 나",
      "나, 다",
      "가, 나, 다"
    ],
    "correctIndex": 1,
    "explanation": "관계선택사양은 관계 참여가 필수인지 선택인지를 나타내며(가), 조직 내 업무 규칙에 따라 결정된다(나). 두 엔터티 관계에서 참여자의 수를 표현하는 것은 관계 차수이므로 (다)는 옳지 않다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "가) 관계 참여가 필수인지 선택인지를 나타낸다.\n나) 조직 내 업무 규칙에 따라 결정되어야 한다.\n다) 두 개의 엔터티 간 관계에서 참여자의 수를 표현한다."
      }
    ]
  },
  {
    "id": 9955,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "1과목",
    "number": 6,
    "title": "데이터 모델링의 관계에 대한 설명으로 가장 적절하지 않은 것은?",
    "options": [
      "관계는 존재에 의한 관계와 행위에 의한 관계로 구분될 수 있으나, ERD에서는 관계를 연결할 때 존재와 행위를 구분하지 않고 단일화된 표기법을 사용한다.",
      "UML은 클래스 다이어그램의 관계 중 연관 관계와 의존 관계가 있으며, 이는 실선과 점선의 표기법으로 다르게 표현된다.",
      "연관 관계는 항상 이용하는 관계로 존재적 관계에 해당하고, 의존 관계는 상대방 클래스의 행위에 의해 관계가 형성되는 행위적 관계에 해당한다.",
      "연관 관계는 오퍼레이션에서 파라미터 등으로 이용할 수 있고, 의존 관계는 소스 코드에서 멤버 변수로 선언하여 사용할 수 있다."
    ],
    "correctIndex": 3,
    "explanation": "연관 관계(존재적 관계)는 멤버 변수로 지속적으로 참조하고, 의존 관계(행위적 관계)는 오퍼레이션의 파라미터·지역 변수·반환값처럼 일시적으로 사용한다. ④는 두 관계의 구현 방식을 서로 바꿔 설명했으므로 옳지 않다.",
    "_source": "authored"
  },
  {
    "id": 9956,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "1과목",
    "number": 7,
    "title": "다음 [고객] 엔터티의 속성에 대한 설명으로 옳지 않은 것은?",
    "options": [
      "고객번호는 유일성과 최소성을 만족하므로 주식별자(PK)로 사용할 수 있다.",
      "주민등록번호는 유일성과 최소성을 만족하므로 주식별자(PK)로 사용할 수 있다.",
      "이메일은 유일성을 만족하므로 주식별자(PK)로 사용할 수 있다.",
      "고객명은 중복과 NULL이 허용되므로 식별자로 사용할 수 없다."
    ],
    "correctIndex": 2,
    "explanation": "주식별자는 유일성·최소성·불변성·존재성(NOT NULL)을 만족해야 한다. 이메일은 식별은 가능하지만 NULL이 허용되어 존재성을 만족하지 못하므로 주식별자로 사용할 수 없다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "고객 엔터티",
        "headers": [
          "속성",
          "특징"
        ],
        "rows": [
          [
            "고객번호",
            "식별 가능, NOT NULL"
          ],
          [
            "주민등록번호",
            "식별 가능, NOT NULL"
          ],
          [
            "이메일",
            "식별 가능, NULL 허용"
          ],
          [
            "고객명",
            "중복 가능, NULL 허용"
          ]
        ]
      }
    ]
  },
  {
    "id": 9957,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "1과목",
    "number": 8,
    "title": "다음 테이블 구조가 위배하고 있는 정규형은?",
    "options": [
      "제1정규형 위배",
      "제2정규형 위배",
      "제3정규형 위배",
      "위배하고 있지 않음"
    ],
    "correctIndex": 2,
    "explanation": "(주문ID, 상품ID)가 복합 식별자이지만, 일반 속성끼리 종속 관계가 있다. 할인쿠폰코드가 결정되면 할인쿠폰명이 결정되므로(할인쿠폰코드 → 할인쿠폰명) 주식별자를 거치지 않는 이행 함수 종속이 존재하여 제3정규형을 위배한다. 복합 식별자라는 이유만으로 제2정규형이라고 단정하지 않도록 주의한다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "주문상품",
        "headers": [
          "주문ID (PK)",
          "상품ID (PK)",
          "주문수량",
          "주문금액",
          "할인쿠폰코드",
          "할인쿠폰명"
        ],
        "rows": [
          [
            "202608001",
            "P12345",
            "2",
            "20000",
            "C10",
            "첫구매할인"
          ],
          [
            "202608001",
            "P23456",
            "1",
            "15000",
            "C20",
            "신학기할인"
          ],
          [
            "202608002",
            "P97589",
            "3",
            "30000",
            "C30",
            "여름세일"
          ]
        ]
      }
    ]
  },
  {
    "id": 9958,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "1과목",
    "number": 9,
    "title": "다음 중 배타적 관계에 대한 설명으로 가장 적절한 것은?",
    "options": [
      "하나의 엔터티가 여러 자식 엔터티와 동시에 관계를 맺을 수 있음을 의미한다.",
      "하나의 엔터티가 여러 개의 다른 엔터티 중 하나와만 관계를 맺을 수 있음을 의미한다.",
      "두 엔터티가 반드시 일대일 관계를 맺어야 함을 의미한다.",
      "자식 엔터티가 부모 엔터티 없이 독립적으로 존재 가능함을 의미한다."
    ],
    "correctIndex": 1,
    "explanation": "배타적 관계(Exclusive)는 슈퍼·서브타입처럼 하나의 인스턴스가 여러 후보 엔터티 중 하나와만 관계를 맺는 구조이다. 예를 들어 고객은 개인 고객이거나 법인 고객이지, 둘 다일 수 없다.",
    "_source": "authored"
  },
  {
    "id": 9959,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "1과목",
    "number": 10,
    "title": "트랜잭션의 특징 중 원자성에 해당하는 것으로 가장 적절한 것은?",
    "options": [
      "트랜잭션에 포함된 연산은 논리적으로 하나로 묶여 수행되며, 일부 연산만 반영되는 일이 없어야 한다.",
      "트랜잭션 수행 전과 후에 데이터베이스는 항상 일관된 상태를 유지해야 한다.",
      "동시에 여러 트랜잭션이 수행되어도 서로의 연산 결과에 영향을 주지 않아야 한다.",
      "트랜잭션이 성공적으로 완료되면 그 결과는 영구적으로 반영되어야 한다."
    ],
    "correctIndex": 0,
    "explanation": "원자성(Atomicity)은 All or Nothing, 즉 모두 성공하거나 모두 실패해야 한다는 특성이다. ②는 일관성, ③은 고립성, ④는 지속성에 대한 설명이다.",
    "_source": "authored"
  },
  {
    "id": 9960,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 11,
    "title": "다음 중 데이터베이스에서 데이터를 저장하는 기본 단위로 가장 적절한 것은?",
    "options": [
      "테이블",
      "뷰",
      "인덱스",
      "시퀀스"
    ],
    "correctIndex": 0,
    "explanation": "관계형 데이터베이스에서 데이터를 저장하는 기본 단위는 테이블이다. 뷰는 가상 테이블, 인덱스는 검색 성능을 위한 객체, 시퀀스는 일련번호 생성 객체이다.",
    "_source": "authored"
  },
  {
    "id": 9961,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 12,
    "title": "다음 SQL 실행 결과로 가장 적절한 것은?",
    "options": [
      "7, 7",
      "10, 10",
      "7, 10",
      "10, 7"
    ],
    "correctIndex": 3,
    "explanation": "COUNT(*)는 NULL 여부와 관계없이 전체 행 수(10)를 세고, COUNT(컬럼)은 해당 컬럼이 NULL인 행을 제외하고 센다. DEPT_ID가 NULL인 행이 3건이므로 B는 7이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "DEPT",
        "headers": [
          "DEPT_ID"
        ],
        "rows": [
          [
            "1"
          ],
          [
            "1"
          ],
          [
            "NULL"
          ],
          [
            "2"
          ],
          [
            "NULL"
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
          ],
          [
            "3"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT COUNT(*) AS A, COUNT(DEPT_ID) AS B\nFROM   DEPT;"
      }
    ]
  },
  {
    "id": 9962,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 13,
    "title": "다음 SQL 실행 결과로 가장 적절한 것은?",
    "options": [
      "ALLEN, JONES, CLARK",
      "KING, ALLEN, CLARK",
      "KING, ALLEN",
      "ALLEN"
    ],
    "correctIndex": 3,
    "explanation": "(+)가 붙지 않은 EMP가 기준 테이블인 아우터 조인이지만, 이후 WHERE 절의 LOCATION <> 'DALLAS' 조건이 적용된다. KING(20번 부서)은 DALLAS라 제외, ALLEN(10번 부서, NEW YORK)만 통과한다. DEPT_ID가 NULL인 JONES·CLARK는 조인에 실패해 LOCATION이 NULL이므로 NULL <> 'DALLAS'는 UNKNOWN이 되어 결과에서 제외된다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP",
        "headers": [
          "EMP_NAME",
          "DEPT_ID"
        ],
        "rows": [
          [
            "KING",
            "20"
          ],
          [
            "ALLEN",
            "10"
          ],
          [
            "JONES",
            "NULL"
          ],
          [
            "CLARK",
            "NULL"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "DEPT",
        "headers": [
          "DEPT_ID",
          "DEPT_NAME",
          "LOCATION"
        ],
        "rows": [
          [
            "10",
            "ACCOUNTING",
            "NEW YORK"
          ],
          [
            "20",
            "RESEARCH",
            "DALLAS"
          ],
          [
            "30",
            "SALES",
            "CHICAGO"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT E.EMP_NAME\nFROM   EMP E, DEPT D\nWHERE  E.DEPT_ID = D.DEPT_ID(+)\nAND    D.LOCATION <> 'DALLAS';"
      }
    ]
  },
  {
    "id": 9963,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 14,
    "title": "다음 SQL의 결과 건수로 맞는 것을 고르시오.",
    "options": [
      "1",
      "2",
      "3",
      "오류가 발생한다."
    ],
    "correctIndex": 1,
    "explanation": "IN 목록에 같은 값(100)이 중복되어도 오류는 발생하지 않으며 (COL = 100 OR COL = 200 OR COL = 100)과 같이 처리된다. 100과 200에 해당하는 행이 각 1건이므로 결과는 2건이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TBL",
        "headers": [
          "COL"
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
        "type": "sql",
        "code": "SELECT * FROM TBL\nWHERE COL IN (100, 200, 100);"
      }
    ]
  },
  {
    "id": 9964,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 15,
    "title": "다음 SQL 실행 결과로 가장 적절한 것은?",
    "options": [
      "NULL, 5, NULL",
      "2, 5, 1",
      "8",
      "5"
    ],
    "correctIndex": 1,
    "explanation": "A로 그룹핑한 뒤 COUNT(*)(전체 건수)와 COUNT(B)(NULL 제외 건수)를 더한다. A=10은 2+0=2, A=20은 3+2=5, A=30은 1+0=1이므로 CNT는 2, 5, 1이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TBL",
        "headers": [
          "A",
          "B"
        ],
        "rows": [
          [
            "10",
            "NULL"
          ],
          [
            "10",
            "NULL"
          ],
          [
            "20",
            "NULL"
          ],
          [
            "20",
            "30"
          ],
          [
            "20",
            "40"
          ],
          [
            "30",
            "NULL"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT (COUNT(*) + COUNT(B)) AS CNT\nFROM   TBL\nGROUP  BY A\nORDER  BY A;"
      }
    ]
  },
  {
    "id": 9965,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 16,
    "title": "다음 SQL 실행 결과로 가장 적절한 것은?",
    "options": [
      "10, 12, 15",
      "15, 22, 28, 30",
      "10, 12, 15, 22, 28, 30",
      "10, 12, 15, 22, 28, 30, 31"
    ],
    "correctIndex": 0,
    "explanation": "<= ALL (15, 30)은 15 이하이면서 30 이하인 값, 즉 두 값의 최솟값인 15 이하를 의미한다. TBL1에서 15 이하인 값은 10, 12, 15이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TBL1",
        "headers": [
          "COL1"
        ],
        "rows": [
          [
            "10"
          ],
          [
            "12"
          ],
          [
            "15"
          ],
          [
            "22"
          ],
          [
            "28"
          ],
          [
            "30"
          ],
          [
            "31"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "TBL2",
        "headers": [
          "COL2"
        ],
        "rows": [
          [
            "15"
          ],
          [
            "30"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT COL1\nFROM   TBL1\nWHERE  COL1 <= ALL (SELECT COL2 FROM TBL2);"
      }
    ]
  },
  {
    "id": 9966,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 17,
    "title": "다음 중 순수 관계 연산자에 대한 설명으로 옳지 않은 것은?",
    "options": [
      "관계형 데이터베이스에서 테이블(릴레이션)의 데이터를 처리하기 위해 고안된 관계 연산자이다.",
      "PROJECT - 특정 속성(컬럼)만 추출하는 연산자이다.",
      "DIVIDE - 특정 조건을 모두 만족하는 대상을 찾는 연산이며 SQL에서는 직접 지원하지 않아 NOT EXISTS 등으로 표현한다.",
      "SELECT - SQL의 SELECT 절에 해당한다."
    ],
    "correctIndex": 3,
    "explanation": "순수 관계 연산자의 SELECT는 행(로우)을 선택하는 연산으로 SQL의 WHERE 절에 대응하고, PROJECT가 컬럼을 선택하여 SQL의 SELECT 절에 대응한다. ④는 SELECT 절이 아니라 WHERE 절에 해당한다고 해야 옳다.",
    "_source": "authored"
  },
  {
    "id": 9967,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 18,
    "title": "다음 중 LIKE '%A_C%' 패턴에 매칭되는 문자열은 몇 건인지 고르시오.",
    "options": [
      "2개",
      "3개",
      "4개",
      "5개"
    ],
    "correctIndex": 2,
    "explanation": "%는 0개 이상의 문자, _는 정확히 한 개의 문자를 의미한다. 따라서 'A', 임의의 한 글자, 'C'가 연속해야 한다. A1C, A-CD, A_C, ABC는 매칭되지만 AB_C는 A와 C 사이에 두 글자가 있어 매칭되지 않는다. 따라서 4건이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TBL",
        "headers": [
          "COL"
        ],
        "rows": [
          [
            "A1C"
          ],
          [
            "A-CD"
          ],
          [
            "A_C"
          ],
          [
            "AB_C"
          ],
          [
            "ABC"
          ]
        ]
      }
    ]
  },
  {
    "id": 9968,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 19,
    "title": "다음 SQL 실행 결과로 가장 적절한 것은?",
    "options": [
      "1000",
      "5000, 4000, 1000",
      "2000, 3000, 1000",
      "5000"
    ],
    "correctIndex": 0,
    "explanation": "AMOUNT 내림차순으로 정렬하면 5000(50000), 4000(45000), 1000(40000), 3000(35000), 2000(30000) 순이다. OFFSET 2 ROWS로 앞의 2개 행을 건너뛰고 FETCH NEXT 1 ROWS ONLY로 다음 1개 행만 가져오므로 3번째 행의 ID인 1000이 조회된다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "SALES",
        "headers": [
          "ID",
          "AMOUNT"
        ],
        "rows": [
          [
            "1000",
            "40000"
          ],
          [
            "2000",
            "30000"
          ],
          [
            "3000",
            "35000"
          ],
          [
            "4000",
            "45000"
          ],
          [
            "5000",
            "50000"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT ID\nFROM   SALES\nORDER  BY AMOUNT DESC\nOFFSET 2 ROWS FETCH NEXT 1 ROWS ONLY;"
      }
    ]
  },
  {
    "id": 9969,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 20,
    "title": "다음 중 보기와 동일한 결과를 출력하는 SQL은 무엇인가?",
    "options": [
      "SELECT 주문일자, 상품코드, COUNT(*)\nFROM 주문\nGROUP BY 주문일자, ROLLUP(상품코드);",
      "SELECT 주문일자, 상품코드, COUNT(*)\nFROM 주문\nGROUP BY ROLLUP(주문일자, 상품코드);",
      "SELECT DISTINCT 주문일자, 상품코드, COUNT(*)\nFROM 주문\nGROUP BY ROLLUP((주문일자, 상품코드), NULL);",
      "SELECT 주문일자, 상품코드, COUNT(*)\nFROM 주문\nGROUP BY GROUPING SETS((주문일자, 상품코드));"
    ],
    "correctIndex": 2,
    "explanation": "보기의 ROLLUP((주문일자, 상품코드))는 두 컬럼을 하나로 묶어 (주문일자, 상품코드) 단위 집계와 전체 합계만 출력한다. ③은 (주문일자, 상품코드, NULL), (주문일자, 상품코드), ()로 전개되어 상세 집계가 두 번 반복되지만 DISTINCT로 중복이 제거되어 결과가 같아진다. ①은 주문일자 소계가 추가되고, ②는 주문일자 소계가 추가되며, ④는 전체 합계가 없어 결과가 다르다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT 주문일자, 상품코드, COUNT(*)\nFROM   주문\nGROUP  BY ROLLUP((주문일자, 상품코드));"
      }
    ]
  },
  {
    "id": 9970,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 21,
    "title": "다음 SQL의 결과로 가장 적절한 것은 무엇인가?",
    "options": [
      "abcd",
      "defg",
      "d",
      "abc"
    ],
    "correctIndex": 1,
    "explanation": "LENGTH('abcdefg')는 7이므로 시작 위치는 7 - 3 = 4이다. SUBSTR에서 길이 인수를 생략하면 시작 위치부터 끝까지 반환하므로 4번째 문자 d부터 끝까지인 'defg'가 된다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT SUBSTR('abcdefg', LENGTH('abcdefg')-3) FROM DUAL;"
      }
    ]
  },
  {
    "id": 9971,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 22,
    "title": "다음 SQL의 빈칸에 알맞은 함수는 무엇인가?",
    "options": [
      "RANK",
      "DENSE_RANK",
      "ROW_NUMBER",
      "ROWNUM"
    ],
    "correctIndex": 0,
    "explanation": "동일 순위(공동 1등)가 존재하고 그 다음 순위가 건너뛰어 3등이 되는 패턴은 RANK이다. DENSE_RANK는 2등이 이어지고, ROW_NUMBER는 동일 값에도 고유한 순번을 부여하며, ROWNUM은 OVER 절과 함께 쓸 수 없다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TBL",
        "headers": [
          "NAME",
          "SCORE"
        ],
        "rows": [
          [
            "KIM",
            "90"
          ],
          [
            "LEE",
            "90"
          ],
          [
            "PARK",
            "85"
          ],
          [
            "CHOI",
            "80"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "실행 결과",
        "headers": [
          "NAME",
          "SCORE",
          "RNK"
        ],
        "rows": [
          [
            "KIM",
            "90",
            "1"
          ],
          [
            "LEE",
            "90",
            "1"
          ],
          [
            "PARK",
            "85",
            "3"
          ],
          [
            "CHOI",
            "80",
            "4"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT NAME, SCORE,\n       ______() OVER(ORDER BY SCORE DESC) AS RNK\nFROM   TBL;"
      }
    ]
  },
  {
    "id": 9972,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 23,
    "title": "다음 중 테이블명으로 가장 적절한 것은 무엇인가?",
    "options": [
      "201504table_TB",
      "table",
      "test-n202605",
      "tbl_test260531#"
    ],
    "correctIndex": 3,
    "explanation": "테이블명은 문자로 시작해야 하고 SQL 예약어는 사용할 수 없으며 공백과 하이픈(-) 등은 허용되지 않는다. 특수문자는 _, #, $ 정도만 허용되므로 tbl_test260531#만 가능하다.",
    "_source": "authored"
  },
  {
    "id": 9973,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 24,
    "title": "다음 SQL의 결과로 가장 적절한 것은 무엇인가?",
    "options": [
      "컬럼명 10, 20, 30 / 값 300, 300, 500",
      "컬럼명 10, 20, 30 / 값 200, 300, 400",
      "컬럼명 A, B, C / 값 300, 300, 500",
      "컬럼명 A, B, C / 값 200, 300, 400"
    ],
    "correctIndex": 2,
    "explanation": "PIVOT의 FOR 절은 컬럼명으로 올릴 값(10, 20, 30)이고, 앞의 집계 함수(SUM(SAL))가 그 안을 채운다. 부서별 SAL 합계는 10번 300, 20번 300, 30번 500이며, AS 별칭이 있으므로 컬럼명은 10, 20, 30 대신 A, B, C가 된다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP",
        "headers": [
          "EMP_NAME",
          "DEPT_ID",
          "SAL"
        ],
        "rows": [
          [
            "SMITH",
            "10",
            "100"
          ],
          [
            "ALLEN",
            "10",
            "200"
          ],
          [
            "WARD",
            "20",
            "300"
          ],
          [
            "JONES",
            "30",
            "400"
          ],
          [
            "MARTIN",
            "30",
            "100"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT *\nFROM  (SELECT DEPT_ID, SAL FROM EMP)\nPIVOT (SUM(SAL) FOR DEPT_ID IN (10 AS A, 20 AS B, 30 AS C));"
      }
    ]
  },
  {
    "id": 9974,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 25,
    "title": "다음 SQL의 결과로 가장 적절한 것은 무엇인가?",
    "options": [
      "20, 20",
      "40, 20",
      "40, 40",
      "20, 40"
    ],
    "correctIndex": 1,
    "explanation": "LEFT OUTER JOIN 후 A.COL1은 NULL, NULL, 40, 40이고 집계 함수는 NULL을 제외하므로 AVG는 40이다. B.COL2는 조인 결과 40, 40, NULL, NULL이지만 NVL로 NULL이 0이 되어 40, 40, 0, 0의 평균인 20이 된다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TBL1",
        "headers": [
          "COL",
          "COL1"
        ],
        "rows": [
          [
            "2",
            "NULL"
          ],
          [
            "3",
            "NULL"
          ],
          [
            "4",
            "40"
          ],
          [
            "5",
            "40"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "TBL2",
        "headers": [
          "COL",
          "COL2"
        ],
        "rows": [
          [
            "1",
            "30"
          ],
          [
            "2",
            "40"
          ],
          [
            "3",
            "40"
          ],
          [
            "4",
            "NULL"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT AVG(A.COL1), AVG(NVL(B.COL2,0))\nFROM   TBL1 A\nLEFT OUTER JOIN TBL2 B\nON     A.COL = B.COL;"
      }
    ]
  },
  {
    "id": 9975,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 26,
    "title": "다음 중 계층형 질의에 대한 설명으로 옳지 않은 것은?",
    "options": [
      "CONNECT BY 절은 부모 데이터를 기준으로 자식 데이터를 지정하여 계층 구조를 연결하는 역할을 한다.",
      "PRIOR 키워드는 CONNECT BY 절에서 부모-자식 컬럼의 방향을 지정하는 데 사용된다.",
      "NOCYCLE 옵션을 사용하면, 순환참조가 발생한 이후의 데이터까지 포함하여 결과가 출력된다.",
      "WHERE 절의 조건은 START WITH와 CONNECT BY로 계층구조가 모두 생성된 뒤에 적용되어, 그중 조건을 만족하는 행만 걸러서 보여준다."
    ],
    "correctIndex": 2,
    "explanation": "NOCYCLE은 순환 참조가 발생하면 그 이전까지만 출력하고 더 진행하지 않는 옵션이다. ③은 반대로 설명하고 있어 옳지 않다.",
    "_source": "authored"
  },
  {
    "id": 9976,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 27,
    "title": "다음 중 해당 데이터를 찾는 조건으로 가장 적절하지 않은 것은?",
    "options": [
      "(TEAM = '삼성블루윙즈' OR TEAM = '전남드래곤즈') AND POSITION = 'MF' AND HEIGHT >= 175 AND HEIGHT <= 180",
      "TEAM = '삼성블루윙즈' OR TEAM = '전남드래곤즈' AND POSITION = 'MF' AND HEIGHT >= 175 AND HEIGHT <= 180",
      "POSITION = 'MF' AND HEIGHT BETWEEN 175 AND 180 AND (TEAM = '삼성블루윙즈' OR TEAM = '전남드래곤즈')",
      "POSITION = 'MF' AND HEIGHT >= 175 AND HEIGHT <= 180 AND (TEAM = '삼성블루윙즈' OR TEAM = '전남드래곤즈')"
    ],
    "correctIndex": 1,
    "explanation": "AND는 OR보다 연산 우선순위가 높다. ②는 괄호가 없어 (TEAM = '전남드래곤즈' AND POSITION = 'MF' AND 키 조건) OR (TEAM = '삼성블루윙즈')로 해석되어 삼성블루윙즈 선수 전원이 조회되는 엉뚱한 결과가 나온다. ③은 BETWEEN을 사용했을 뿐 괄호로 OR 조건을 먼저 묶었고, ④는 BETWEEN을 부등호로 바꾼 것이라 동일하다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "소속팀이 삼성블루윙즈이거나 전남드래곤즈에 소속된 선수들이어야 하고, 포지션이 미드필더(MF:Midfielder) 이어야 한다. 키는 175 센티미터 이상이고 180 이하여야 한다."
      }
    ]
  },
  {
    "id": 9977,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 28,
    "title": "다음 중 \"연봉(SAL)이 3,000을 초과하면서, 상위 직급자(관리자, MGR)가 존재하는 사원\"을 찾는 SQL로 가장 적절하지 않은 것은?",
    "options": [
      "SELECT EMP_ID, EMP_NAME, SAL\nFROM EMP E\nWHERE SAL > 3000\nAND EXISTS (\n    SELECT 1\n    FROM EMP M\n    WHERE M.EMP_ID = E.MGR_ID\n);",
      "SELECT EMP_ID, EMP_NAME, SAL\nFROM EMP\nWHERE SAL > 3000\nAND MGR_ID IN (\n    SELECT EMP_ID\n    FROM EMP\n);",
      "SELECT EMP_ID, EMP_NAME, SAL\nFROM EMP E\nWHERE SAL > 3000\nAND NOT EXISTS (\n    SELECT 1\n    FROM EMP M\n    WHERE M.EMP_ID <> E.MGR_ID\n);",
      "SELECT E1.EMP_ID, E1.EMP_NAME, E1.SAL\nFROM EMP E1, EMP E2\nWHERE E1.MGR_ID = E2.EMP_ID\nAND E1.SAL > 3000;"
    ],
    "correctIndex": 2,
    "explanation": "①②④는 MGR_ID가 실제 존재하는 직원(상위 직급자가 있는 사원)만 조회한다. ③은 '부정의 부정'처럼 보이지만 MGR_ID와 다른 EMP_ID를 가진 행이 거의 항상 존재하므로 NOT EXISTS가 거짓이 되어 전혀 다른(대개 공집합) 결과가 나온다.",
    "_source": "authored"
  },
  {
    "id": 9978,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 29,
    "title": "다음 SQL의 실행 결과로 옳은 것은?",
    "options": [
      "날짜순으로 정렬된 각 행까지의 누적 합계를 계산한다.",
      "전체 금액의 합계가 모든 행에 동일하게 표시된다.",
      "날짜별로 그룹화 되어 금액의 합계가 표시된다.",
      "오류가 발생한다. (OVER 절에는 PARTITION BY가 반드시 필요하다)"
    ],
    "correctIndex": 0,
    "explanation": "OVER 절에 ORDER BY만 있고 윈도우 범위가 생략되면 기본값인 RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW가 적용되어 첫 행부터 현재 행까지의 누적 합계가 계산된다. 전체 합계가 모든 행에 표시되려면 OVER()처럼 ORDER BY가 없어야 하며, PARTITION BY는 생략할 수 있다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT SALE_DATE, AMT,\n       SUM(AMT) OVER (ORDER BY SALE_DATE) AS CUM_AMT\nFROM   SALES;"
      }
    ]
  },
  {
    "id": 9979,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 30,
    "title": "다음 SQL의 결과로 가장 적절한 것은 무엇인가?",
    "options": [
      "게시판 유형(BOARD_TYPE)별로 가장 최근 글 1건씩만 출력된다.",
      "전체 게시글 중 가장 최근 글 1건만 출력된다.",
      "게시판 유형과 무관하게 상위 2건이 출력된다.",
      "게시판 유형별 게시글 건수가 출력된다."
    ],
    "correctIndex": 0,
    "explanation": "PARTITION BY로 게시판 유형별로 나누고 REG_DATE 내림차순으로 순번을 매긴 뒤 RN = 1만 남기므로, 각 유형에서 가장 최근에 등록된 글 1건씩이 조회된다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "BOARD",
        "headers": [
          "BOARD_TYPE",
          "TITLE",
          "REG_DATE"
        ],
        "rows": [
          [
            "게시판",
            "자유게시글1",
            "2026-07-01"
          ],
          [
            "게시판",
            "자유게시글2",
            "2026-07-05"
          ],
          [
            "게시판",
            "자유게시글3",
            "2026-07-10"
          ],
          [
            "이벤트",
            "여름맞이 이벤트",
            "2026-06-20"
          ],
          [
            "이벤트",
            "가을맞이 이벤트",
            "2026-07-15"
          ],
          [
            "공지",
            "시스템 점검 안내",
            "2026-07-01"
          ],
          [
            "공지",
            "이용약관 개정 안내",
            "2026-07-18"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT *\nFROM (\n  SELECT BOARD_TYPE, TITLE,\n         ROW_NUMBER() OVER (PARTITION BY BOARD_TYPE\n                            ORDER BY REG_DATE DESC) AS RN\n  FROM BOARD\n)\nWHERE RN = 1;"
      }
    ]
  },
  {
    "id": 9980,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 31,
    "title": "다음 SQL의 결과로 가장 적절한 것은 무엇인가?",
    "options": [
      "PRODUCT 테이블의 모든 행",
      "상위 카테고리로 지정되지 않은 상품의 행",
      "공집합",
      "오류 발생"
    ],
    "correctIndex": 2,
    "explanation": "NOT IN은 AND 조건으로 풀리므로 서브쿼리 결과에 NULL이 하나라도 있으면 NULL 비교가 UNKNOWN이 되어 전체가 UNKNOWN 처리된다. PARENT_ID에 NULL이 있으므로 어떤 행도 조건을 만족하지 못해 공집합이 반환된다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "PRODUCT",
        "headers": [
          "PROD_ID",
          "PROD_NAME",
          "PARENT_ID"
        ],
        "rows": [
          [
            "100",
            "노트북",
            "300"
          ],
          [
            "200",
            "마우스",
            "400"
          ],
          [
            "300",
            "전자제품",
            "NULL"
          ],
          [
            "400",
            "액세서리",
            "500"
          ],
          [
            "500",
            "잡화",
            "NULL"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT *\nFROM   PRODUCT\nWHERE  PROD_ID NOT IN (SELECT PARENT_ID FROM PRODUCT);"
      }
    ]
  },
  {
    "id": 9981,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 32,
    "title": "다음 SQL의 실행 결과에 대한 설명으로 가장 적절한 것은?",
    "options": [
      "A만 다른 값이 나온다.",
      "B와 D만 같은 값이 나온다.",
      "모든 함수의 결과는 같다.",
      "오류가 발생한다."
    ],
    "correctIndex": 2,
    "explanation": "CEIL(7.1)은 올림으로 8, FLOOR(8.2)는 버림으로 8, ROUND(7.6)은 반올림으로 8, TRUNC(8.9)는 버림으로 8이다. 모든 함수의 결과가 8로 같다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT CEIL(7.1) AS A, FLOOR(8.2) AS B,\n       ROUND(7.6) AS C, TRUNC(8.9) AS D\nFROM   DUAL;"
      }
    ]
  },
  {
    "id": 9982,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 33,
    "title": "다음 중 오류가 발생하지 않는 SQL을 고르시오.",
    "options": [
      "가",
      "다",
      "나, 다",
      "모두 오류가 발생한다."
    ],
    "correctIndex": 1,
    "explanation": "UNION은 두 SELECT의 컬럼 수와 대응 컬럼의 데이터 타입이 같아야 하고, ORDER BY는 마지막 SELECT 문에 한 번만 사용할 수 있다. 가는 컬럼 수가 다르고, 나는 ORDER BY 위치가 잘못되었다. 다는 TBL1의 COL2(숫자)와 TBL2의 COL3(숫자)이 대응되어 컬럼 수·타입이 같고 ORDER BY가 마지막에 한 번만 있으므로 오류가 없다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TBL1",
        "headers": [
          "COL1",
          "COL2",
          "COL3"
        ],
        "rows": [
          [
            "A",
            "1",
            "3"
          ],
          [
            "B",
            "2",
            "4"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "TBL2",
        "headers": [
          "COL1",
          "COL2",
          "COL3"
        ],
        "rows": [
          [
            "A",
            "C",
            "1"
          ],
          [
            "B",
            "D",
            "2"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- 가\nSELECT COL1, COL2, COL3 FROM TBL1\nUNION\nSELECT COL1, COL2 FROM TBL2;\n\n-- 나\nSELECT COL1, COL2, COL3 FROM TBL1 ORDER BY COL1\nUNION\nSELECT COL1, COL2, COL3 FROM TBL2;\n\n-- 다\nSELECT COL1, COL2 FROM TBL1\nUNION\nSELECT COL1, COL3 FROM TBL2 ORDER BY COL1;"
      }
    ]
  },
  {
    "id": 9983,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 34,
    "title": "다음 SQL과 동일한 결과를 만드는 SQL을 모두 고르시오.",
    "options": [
      "가",
      "가, 나",
      "나, 다",
      "가, 나, 다"
    ],
    "correctIndex": 3,
    "explanation": "MINUS는 TBL1에만 존재하는 값의 차집합이다. 가는 TBL2의 NULL을 미리 제거한 NOT IN, 나는 NOT EXISTS(NULL 영향 없음), 다는 LEFT JOIN 후 조인에 실패한 행(IS NULL)만 남기는 안티 조인으로 모두 MINUS와 동일한 결과를 만든다. 다만 TBL1에 NULL이 있다면 가의 WHERE 절이 NULL 행을 걸러 내므로, 그 경우에는 기준 SQL도 COL1 IS NOT NULL 조건으로 NULL을 제외해야 결과가 같아진다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TBL1",
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
            "3"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "TBL2",
        "headers": [
          "COL2"
        ],
        "rows": [
          [
            "2"
          ],
          [
            "NULL"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT COL1 FROM TBL1\nWHERE COL1 IS NOT NULL\nMINUS\nSELECT COL2 FROM TBL2;"
      },
      {
        "type": "sql",
        "code": "-- 가\nSELECT COL1\nFROM TBL1\nWHERE COL1 NOT IN (SELECT COL2 FROM TBL2 WHERE COL2 IS NOT NULL);\n\n-- 나\nSELECT COL1\nFROM TBL1\nWHERE NOT EXISTS (SELECT 1 FROM TBL2 WHERE TBL1.COL1 = TBL2.COL2);\n\n-- 다\nSELECT T1.COL1\nFROM TBL1 T1 LEFT JOIN TBL2 T2\nON T1.COL1 = T2.COL2\nWHERE T2.COL2 IS NULL;"
      }
    ]
  },
  {
    "id": 9984,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 35,
    "title": "다음 SQL에 대한 설명으로 옳은 것은?",
    "options": [
      "두 테이블의 조인 조건이 없으므로 CROSS JOIN(Cartesian Product)이 발생한다.",
      "EMP와 DEPT가 DEPT_ID를 기준으로 자동 조인된다.",
      "오류가 발생하여 실행되지 않는다.",
      "EQUI JOIN이 자동으로 적용된다."
    ],
    "correctIndex": 0,
    "explanation": "FROM 절에 두 테이블만 나열하고 조인 조건이 없으므로 두 테이블의 모든 행의 조합(카테시안 곱, 크로스 조인)이 생성된다. 자동 조인은 NATURAL JOIN을 명시했을 때만 수행된다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT E.DEPT_ID, D.DEPT_ID\nFROM   EMP E, DEPT D;"
      }
    ]
  },
  {
    "id": 9985,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 36,
    "title": "다음 중 ROWNUM에 대한 정의로 가장 적절한 것은?",
    "options": [
      "SELECT 절에서 결과 집합의 각 행에 순차적으로 부여되는 의사컬럼(Pseudo Column)이다.",
      "WHERE 절 조건이 모두 평가된 이후 마지막에 한 번만 부여되는 고정값이다.",
      "인덱스 생성 시 자동으로 생성되는 물리적 컬럼이다.",
      "사용자가 직접 정의해야 하는 일반 컬럼이다."
    ],
    "correctIndex": 0,
    "explanation": "ROWNUM은 시스템이 제공하는 의사 컬럼으로 조회되는 행에 1부터 순차적으로 부여된다. WHERE 절 평가 과정에서 부여되므로 ROWNUM <= 5처럼 조건으로 사용할 수 있다.",
    "_source": "authored"
  },
  {
    "id": 9986,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 37,
    "title": "다음 중 오류가 발생하는 SQL은?",
    "options": [
      "SELECT A\nFROM TBL1\nWHERE A IN (SELECT A FROM TBL2);",
      "SELECT A, (SELECT SUM(B) FROM TBL2 WHERE TBL1.A = TBL2.A)\nFROM TBL1;",
      "SELECT A, (SELECT NVL(B, NULL) FROM TBL2 WHERE TBL1.A = TBL2.A)\nFROM TBL1;",
      "SELECT A\nFROM TBL1\nWHERE EXISTS (SELECT 1 FROM TBL2 WHERE TBL1.A = TBL2.A);"
    ],
    "correctIndex": 2,
    "explanation": "스칼라 서브쿼리는 단일 행·단일 컬럼만 반환해야 한다. ③은 A=100일 때 TBL2에서 두 행(10, 20)이 반환되어 오류(ORA-01427)가 발생한다. ②는 SUM 집계로 한 행이 보장되어 안전하다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TBL1",
        "headers": [
          "A"
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
        "caption": "TBL2",
        "headers": [
          "A",
          "B"
        ],
        "rows": [
          [
            "100",
            "10"
          ],
          [
            "100",
            "20"
          ],
          [
            "200",
            "NULL"
          ],
          [
            "300",
            "5"
          ]
        ]
      }
    ]
  },
  {
    "id": 9987,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 38,
    "title": "다음 SQL의 결과로 가장 적절한 것은 무엇인가?",
    "options": [
      "100",
      "200",
      "100, 200",
      "결과 없음 (공집합)"
    ],
    "correctIndex": 1,
    "explanation": "서브쿼리의 COL2 IN (100, NULL)은 OR 연산이라 NULL은 무시되고 100만 선택되므로 서브쿼리 결과는 {100}이다. 따라서 NOT IN (100)에서 COL1이 100이 아닌 값 중 200만 참이 되고, NULL은 100인지 아닌지 알 수 없어(UNKNOWN) 제외된다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TBL1",
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
            "NULL"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "TBL2",
        "headers": [
          "COL2"
        ],
        "rows": [
          [
            "100"
          ],
          [
            "200"
          ],
          [
            "NULL"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT * FROM TBL1\nWHERE COL1 NOT IN (SELECT COL2 FROM TBL2 WHERE COL2 IN (100, NULL));"
      }
    ]
  },
  {
    "id": 9988,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 39,
    "title": "다음 SQL과 결과가 다른 SQL은 무엇인가?",
    "options": [
      "SELECT ENAME, NVL(SAL, 100) AS RESULT FROM EMP;",
      "SELECT ENAME, COALESCE(SAL, 100) AS RESULT FROM EMP;",
      "SELECT ENAME, DECODE(SAL, NULL, 100, SAL) AS RESULT FROM EMP;",
      "SELECT ENAME, NVL2(SAL, 100, SAL) AS RESULT FROM EMP;"
    ],
    "correctIndex": 3,
    "explanation": "기준 SQL은 SAL이 NULL이면 100, 아니면 SAL을 반환한다. NVL, COALESCE, DECODE는 모두 동일하다. NVL2(expr, A, B)는 expr이 NULL이 아니면 A, NULL이면 B를 반환하므로 NVL2(SAL, 100, SAL)은 정반대로 동작하여 결과가 다르다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT ENAME,\n       CASE WHEN SAL IS NULL THEN 100 ELSE SAL END AS RESULT\nFROM   EMP;"
      }
    ]
  },
  {
    "id": 9989,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 40,
    "title": "다음 SQL의 결과로 가장 적절한 것은 무엇인가?",
    "options": [
      "EMP_ID, ENAME: (10001, KIM), (10002, PARK)",
      "EMP_ID, ENAME: (10001, GIM), (10002, LEE)",
      "EMP_ID, ENAME: (10001, KIM), (10002, PARK), (10001, GIM), (10002, LEE)",
      "EMP_ID, ENAME: (10001, GIM), (10002, PARK)"
    ],
    "correctIndex": 1,
    "explanation": "MERGE는 ON 조건(EMP_ID 일치)이 맞으면 UPDATE, 맞지 않으면 INSERT를 수행한다. 두 행 모두 EMP_ID가 일치하므로 INSERT는 수행되지 않고 EMP_NAME이 EMP_TEMP의 값으로 갱신되어 (10001, GIM), (10002, LEE)가 된다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP",
        "headers": [
          "EMP_ID",
          "EMP_NAME"
        ],
        "rows": [
          [
            "10001",
            "KIM"
          ],
          [
            "10002",
            "PARK"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "EMP_TEMP",
        "headers": [
          "EMP_ID",
          "EMP_NAME"
        ],
        "rows": [
          [
            "10001",
            "GIM"
          ],
          [
            "10002",
            "LEE"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "MERGE INTO EMP E\nUSING EMP_TEMP T\nON (E.EMP_ID = T.EMP_ID)\nWHEN MATCHED THEN\n    UPDATE SET E.EMP_NAME = T.EMP_NAME\nWHEN NOT MATCHED THEN\n    INSERT (EMP_ID, EMP_NAME) VALUES (T.EMP_ID, T.EMP_NAME);"
      }
    ]
  },
  {
    "id": 9990,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 41,
    "title": "다음 SQL의 결과로 가장 적절한 것은 무엇인가?",
    "options": [
      "AABBCC, ABBC",
      "AABBC, AABBCC",
      "AABBC, ABBC",
      "AABBCC, AABBCC"
    ],
    "correctIndex": 2,
    "explanation": "패턴 '(A|B)+C'는 A 또는 B가 1회 이상 반복된 뒤 C가 오는 패턴으로 왼쪽부터 최장 일치하여 'AABBC'가 된다(C는 반복 대상이 아니라 1개). 패턴 'AB+C'는 A 바로 뒤에 B가 1회 이상 이어진 뒤 C가 와야 하므로 첫 A(다음이 A)는 탈락하고 두 번째 A부터 매칭되어 'ABBC'가 된다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT REGEXP_SUBSTR('AABBCC', '(A|B)+C'),\n       REGEXP_SUBSTR('AABBCC', 'AB+C')\nFROM   DUAL;"
      }
    ]
  },
  {
    "id": 9991,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 42,
    "title": "다음 중 JOIN에 대한 설명으로 가장 적절한 것은 무엇인가?",
    "options": [
      "CROSS JOIN은 조인 조건을 ON절에 명시해야 한다.",
      "INNER JOIN은 등가 조인만 가능하다.",
      "NATURAL JOIN은 두 테이블에서 이름이 같은 컬럼을 자동으로 찾아 등가 조인을 하는 것이다.",
      "USING 절은 두 테이블에서 컬럼명이 서로 다른 경우에도 사용할 수 있다."
    ],
    "correctIndex": 2,
    "explanation": "NATURAL JOIN은 두 테이블에서 이름이 같은 컬럼을 자동으로 찾아 등가 조인한다. CROSS JOIN은 조인 조건이 없고, INNER JOIN은 비등가 조건도 가능하며, USING 절은 컬럼명이 같은 경우에만 사용할 수 있다.",
    "_source": "authored"
  },
  {
    "id": 9992,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 43,
    "title": "다음 중 SAL(연봉)이 높은 순서로 상위 2명을 조회하는 SQL로 가장 적절한 것은?",
    "options": [
      "SELECT EMP_ID FROM EMP ORDER BY SAL DESC;",
      "SELECT EMP_ID, ROW_NUMBER() OVER (ORDER BY SAL DESC) AS RN FROM EMP WHERE RN <= 2;",
      "SELECT EMP_ID FROM EMP WHERE ROWNUM <= 2 ORDER BY SAL DESC;",
      "SELECT EMP_ID FROM (SELECT * FROM EMP ORDER BY SAL DESC) WHERE ROWNUM <= 2;"
    ],
    "correctIndex": 3,
    "explanation": "SELECT 문의 논리적 수행 순서는 FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY이다. ②는 WHERE 절에서 SELECT 절의 별칭 RN을 쓸 수 없어 오류이고, ③은 임의의 2행을 먼저 추린 뒤 정렬하므로 상위 2명이 아니다. 인라인 뷰에서 먼저 정렬한 뒤 바깥에서 ROWNUM으로 제한하는 ④가 적절하다.",
    "_source": "authored"
  },
  {
    "id": 9993,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 44,
    "title": "다음 중 오류가 발생하는 SQL은?",
    "options": [
      "INSERT INTO TAB VALUES (1, 'A', 'B');",
      "INSERT INTO TAB (COL1, COL2, COL4) VALUES (1, 'A', SYSDATE);",
      "INSERT INTO TAB (COL1, COL2) VALUES (1, 'A');",
      "INSERT INTO TAB VALUES (1, 'A', 'B', SYSDATE);"
    ],
    "correctIndex": 0,
    "explanation": "컬럼 목록을 생략하면 테이블의 모든 컬럼(4개)에 대한 값을 순서대로 모두 나열해야 한다. ①은 값이 3개뿐이라 오류가 발생한다. ②③은 NOT NULL인 COL1이 포함되어 있어 나머지는 생략해도 되며(COL3은 DEFAULT 'N' 적용), ④는 4개 컬럼에 모두 값이 있다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "CREATE TABLE TAB (\n    COL1  NUMBER      NOT NULL,\n    COL2  VARCHAR2(10),\n    COL3  VARCHAR2(10) DEFAULT 'N',\n    COL4  DATE\n);"
      }
    ]
  },
  {
    "id": 9994,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 45,
    "title": "다음 두 테이블에 대해 FULL OUTER JOIN을 수행했을 때, 결과 행의 개수는?",
    "options": [
      "4개",
      "5개",
      "6개",
      "7개"
    ],
    "correctIndex": 2,
    "explanation": "A가 매칭되는 것은 100 한 건뿐이다. NULL은 UNKNOWN이라 서로 조인되지 않으므로 나머지는 각각 따로 출력된다. 매칭 1건 + TBL1 단독(200, NULL, NULL) 3건 + TBL2 단독(300, NULL) 2건 = 6건이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TBL1",
        "headers": [
          "A"
        ],
        "rows": [
          [
            "100"
          ],
          [
            "200"
          ],
          [
            "NULL"
          ],
          [
            "NULL"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "TBL2",
        "headers": [
          "A"
        ],
        "rows": [
          [
            "100"
          ],
          [
            "300"
          ],
          [
            "NULL"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT *\nFROM   TBL1\nFULL OUTER JOIN TBL2\nON TBL1.A = TBL2.A;"
      }
    ]
  },
  {
    "id": 9995,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 46,
    "title": "다음 SQL의 결과로 가장 적절한 것은 무엇인가?",
    "options": [
      "2800",
      "NULL",
      "0",
      "오류 발생"
    ],
    "correctIndex": 1,
    "explanation": "DEPT_ID가 20이면서 SAL이 NULL인 행에 대한 MIN(SAL)은 NULL이다. 집계 함수는 NULL을 제외하지만 입력 값이 없으면 결과가 NULL이고, NULL과의 산술 연산은 모두 NULL이므로 2800 + NULL = NULL이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP",
        "headers": [
          "EMP_ID",
          "DEPT_ID",
          "SAL"
        ],
        "rows": [
          [
            "100",
            "10",
            "3000"
          ],
          [
            "101",
            "10",
            "2500"
          ],
          [
            "102",
            "20",
            "NULL"
          ],
          [
            "103",
            "20",
            "3200"
          ],
          [
            "104",
            "30",
            "2800"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT (SELECT MAX(SAL) FROM EMP WHERE DEPT_ID = 30)\n     + (SELECT MIN(SAL) FROM EMP WHERE DEPT_ID = 20 AND SAL IS NULL)\nFROM DUAL;"
      }
    ]
  },
  {
    "id": 9996,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 47,
    "title": "다음 SQL 실행 결과로 출력되는 행의 개수는?",
    "options": [
      "4개",
      "6개",
      "7개",
      "8개"
    ],
    "correctIndex": 2,
    "explanation": "GROUPING SETS는 나열한 기준별로 따로 그룹핑한 결과를 UNION ALL한 것과 같다. 중첩 괄호 (DEPTNO, PRODUCT)는 한 덩어리로 취급되어 4행, DEPTNO 단독 2행, 빈 괄호 () 전체 합계 1행이므로 4 + 2 + 1 = 7행이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "SALES",
        "headers": [
          "DEPTNO",
          "PRODUCT",
          "AMT"
        ],
        "rows": [
          [
            "10",
            "A",
            "100"
          ],
          [
            "10",
            "B",
            "200"
          ],
          [
            "20",
            "A",
            "300"
          ],
          [
            "20",
            "B",
            "400"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT DEPTNO, PRODUCT, SUM(AMT)\nFROM SALES\nGROUP BY GROUPING SETS((DEPTNO, PRODUCT),(DEPTNO),());"
      }
    ]
  },
  {
    "id": 9997,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 48,
    "title": "다음 중 오류가 발생하는 SQL은?",
    "options": [
      "INSERT INTO EMP VALUES (2, 'LEE', 10);",
      "INSERT INTO EMP VALUES (3, 'PARK', NULL);",
      "INSERT INTO EMP VALUES (4, 'CHOI', 20);",
      "DELETE FROM EMP WHERE EMP_ID = 1;"
    ],
    "correctIndex": 2,
    "explanation": "EMP.DEPT_ID는 DEPT.DEPT_ID를 참조하는 외래키이다. DEPT에 20번 부서가 없으므로 ③은 참조 무결성 위반(ORA-02291)이 발생한다. FK 컬럼에는 NULL이 허용되어 ②는 가능하고, 자식(EMP) 행 삭제는 문제가 없다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "CREATE TABLE DEPT (\n    DEPT_ID    NUMBER PRIMARY KEY,\n    DEPT_NAME  VARCHAR2(20)\n);\n\nCREATE TABLE EMP (\n    EMP_ID    NUMBER PRIMARY KEY,\n    EMP_NAME  VARCHAR2(20),\n    DEPT_ID   NUMBER,\n    CONSTRAINT FK_DEPT FOREIGN KEY (DEPT_ID) REFERENCES DEPT(DEPT_ID)\n);\n\nINSERT INTO DEPT VALUES (10, '개발팀');\nINSERT INTO EMP VALUES (1, 'KIM', 10);"
      }
    ]
  },
  {
    "id": 9998,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 49,
    "title": "다음 SQL의 결과로 가장 적절한 것은 무엇인가?",
    "options": [
      "NULL, 50, -30",
      "0, 50, -30",
      "100, 50, -30",
      "NULL, -50, 30"
    ],
    "correctIndex": 0,
    "explanation": "LAG(AMT)는 직전 행의 AMT를 반환하므로 NULL, 100, 150이 된다. AMT에서 이를 빼면 100 - NULL = NULL, 150 - 100 = 50, 120 - 150 = -30이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "SALES",
        "headers": [
          "SALE_DATE",
          "AMT"
        ],
        "rows": [
          [
            "2026-01-01",
            "100"
          ],
          [
            "2026-01-02",
            "150"
          ],
          [
            "2026-01-03",
            "120"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT SALE_DATE, AMT,\n       AMT - LAG(AMT) OVER (ORDER BY SALE_DATE) AS DIFF\nFROM SALES;"
      }
    ]
  },
  {
    "id": 9999,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 50,
    "title": "다음 SQL을 순서대로 실행했을 때, 테이블에 최종적으로 남아있는 행의 개수는?",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correctIndex": 2,
    "explanation": "SAVEPOINT 문제는 ROLLBACK을 먼저 찾는다. ROLLBACK TO SP1은 SP1 이후의 변경(2, 3 삽입)만 취소하므로 남는 것은 SP1 이전의 1과 이후에 새로 삽입한 4로 총 2행이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "CREATE TABLE TBL (NUM NUMBER);\n\nINSERT INTO TBL VALUES (1);\nSAVEPOINT SP1;\n\nINSERT INTO TBL VALUES (2);\nINSERT INTO TBL VALUES (3);\n\nROLLBACK TO SP1;\n\nINSERT INTO TBL VALUES (4);\n\nCOMMIT;\n\nSELECT COUNT(*) FROM TBL;"
      }
    ]
  }
];
