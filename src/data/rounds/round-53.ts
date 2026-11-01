// Auto-generated from PDF + blog + scripts/authored/round-53.json
// 제53회 — 2024년 5월 · 50문항
// ⚠ 직접 편집 금지. 출처별 데이터를 고친 뒤 'node scripts/build-quiz-bank.mjs' 재실행.
import type { QuizQuestion } from '../quizBank';

export const ROUND_53: QuizQuestion[] = [
  {
    "id": 10350,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "1과목",
    "number": 1,
    "title": "다음 중 데이터 모델링의 세 가지 관점에 해당하는 것은?",
    "options": [
      "데이터 관점",
      "보안 관점",
      "성능 관점",
      "인프라 관점"
    ],
    "correctIndex": 0,
    "explanation": "데이터 모델링의 세 가지 관점은 데이터 관점(무엇을 관리하는가), 프로세스 관점(무엇을 하는가), 데이터와 프로세스의 상관 관점(업무 처리가 데이터에 어떤 영향을 주는가)이다. 보기 중에는 데이터 관점(①)만 해당하며, 보안·성능·인프라 관점(②③④)은 세 관점에 들지 않는다.",
    "_source": "authored"
  },
  {
    "id": 10351,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "1과목",
    "number": 2,
    "title": "데이터 모델링 개요 설명 중 옳지 않은 것은?",
    "options": [
      "현실 세계를 단순화·추상화하여 표현한다.",
      "데이터 용량 산정은 데이터 모델링의 산출물이 아니다.",
      "업무 흐름을 표현하는 도구로 활용될 수 있다.",
      "데이터 구조와 관계를 명확히 정의한다."
    ],
    "correctIndex": 1,
    "explanation": "데이터 모델링은 현실 세계를 단순화·추상화해 표현하고(①), 업무 흐름을 이해하고 소통하는 도구가 되며(③), 데이터 구조와 관계를 정의한다(④). 물리 데이터 모델링 단계에서는 테이블별 데이터 건수·크기 같은 용량 산정도 수행하므로 '데이터 용량 산정은 산출물이 아니다' 는 ② 가 옳지 않다.",
    "_source": "authored"
  },
  {
    "id": 10352,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "1과목",
    "number": 3,
    "title": "아래 ERD 의 네 엔터티를 발생 시점에 따라 분류할 때 옳지 않은 것은?",
    "options": [
      "고객은 기본 엔터티이다.",
      "주문은 중심 엔터티이다.",
      "주문상세는 행위 엔터티이다.",
      "배송추적은 기본 엔터티이다."
    ],
    "correctIndex": 3,
    "explanation": "기본 엔터티는 업무에 원래부터 존재해 다른 엔터티로부터 발생하지 않는 것으로 고객이 해당한다. 중심 엔터티는 기본 엔터티로부터 발생해 업무의 중심이 되는 것으로 주문이 해당하고, 행위 엔터티는 두 개 이상의 엔터티나 업무 행위로부터 발생하는 것으로 주문상세·배송추적이 해당한다. 배송추적은 주문이 있어야 생기므로 기본 엔터티가 아니다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "고객·주문·주문상세·배송추적 ERD",
        "mermaid": "erDiagram\n    고객 ||--o{ 주문 : \"한다\"\n    주문 ||--o{ 주문상세 : \"포함\"\n    주문 ||--o{ 배송추적 : \"발생\""
      }
    ]
  },
  {
    "id": 10353,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "1과목",
    "number": 4,
    "title": "아래 설명을 만족하는 정규형은?",
    "options": [
      "1정규형",
      "2정규형",
      "3정규형",
      "BCNF"
    ],
    "correctIndex": 2,
    "explanation": "일반 속성이 모두 주식별자에 함수 종속하고(2정규형까지 만족), 일반 속성 사이의 이행 함수 종속까지 제거한 상태는 3정규형이다(③). 1정규형(①)은 원자값, 2정규형(②)은 부분 함수 종속 제거까지이며, BCNF(④)는 결정자가 모두 후보키가 되도록 한 단계다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "일반 속성이 주식별자에 모두 함수 종속하며 이행 함수 종속을 제거한 상태"
      }
    ]
  },
  {
    "id": 10354,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "1과목",
    "number": 5,
    "title": "인조 식별자에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "속성의 수가 적으면 인조 식별자를 반드시 사용해야 한다.",
      "업무와 무관하게 시스템이 부여한다.",
      "본질 식별자를 대체하여 관리 편의성을 높인다.",
      "일련번호 형태로 단순하게 부여되는 경우가 많다."
    ],
    "correctIndex": 0,
    "explanation": "인조 식별자는 업무와 무관하게 시스템이 부여하는 식별자로(②), 본질 식별자가 너무 복잡할 때 대신 써서 관리를 쉽게 하고(③), 일련번호 형태가 많다(④). 인조 식별자를 쓸지는 본질 식별자가 복잡한지, 중복 데이터를 막을 수 있는지 등을 따져 정하며 속성 수가 적다고 반드시 써야 하는 것은 아니므로 ① 이 옳지 않다.",
    "_source": "authored"
  },
  {
    "id": 10355,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "1과목",
    "number": 6,
    "title": "아래 설명에 해당하는 정규화는?",
    "options": [
      "1정규화",
      "2정규화",
      "3정규화",
      "BCNF"
    ],
    "correctIndex": 1,
    "explanation": "주식별자의 일부에만 종속된 속성(부분 함수 종속)을 분리하는 것은 2정규화다(②). 1정규화(①)는 반복 그룹·다중 값을 없애 원자값으로 만드는 것, 3정규화(③)는 이행 함수 종속 제거, BCNF(④)는 후보키가 아닌 결정자를 제거하는 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "부분 함수 종속을 나누어 해결한다."
      }
    ]
  },
  {
    "id": 10356,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "1과목",
    "number": 7,
    "title": "상호 배타적 관계(Arc Relationship) 에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "상호 배타적 관계는 배타적 상속이 불가능하다.",
      "두 관계 중 하나만 선택된다.",
      "차량 엔터티가 법인 또는 개인 중 하나의 소유자와 연결되는 예가 대표적이다.",
      "ERD 상에서 아크(Arc) 기호로 표현된다."
    ],
    "correctIndex": 0,
    "explanation": "상호 배타적 관계(아크 관계)는 한 엔터티가 여러 부모 엔터티 중 하나와만 관계를 맺는 것으로(②), 차량의 소유자가 법인 또는 개인 중 하나인 경우가 대표적이며(③) ERD 에서 아크 기호로 표시한다(④). 이런 배타적 관계는 부모 쪽을 슈퍼타입-서브타입(배타적 서브타입) 구조로 설계해 표현할 수도 있으므로 '배타적 상속이 불가능하다' 는 ① 이 옳지 않다.",
    "_source": "authored"
  },
  {
    "id": 10357,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "1과목",
    "number": 8,
    "title": "다른 엔터티의 주식별자를 참조하는 키는?",
    "options": [
      "외래키(FK)",
      "기본키(PK)",
      "후보키",
      "대체키"
    ],
    "correctIndex": 0,
    "explanation": "다른 엔터티의 주식별자를 참조해 가져온 키는 외래키(FK)로, 참조 무결성을 보장한다(①). 기본키(②)는 자기 엔터티의 인스턴스를 구분하는 대표 키, 후보키(③)는 유일성과 최소성을 만족해 기본키가 될 수 있는 키, 대체키(④)는 후보키 중 기본키로 선택되지 않은 키다.",
    "_source": "authored"
  },
  {
    "id": 10358,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "1과목",
    "number": 9,
    "title": "트랜잭션에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "논리적 연산의 단위이다.",
      "트랜잭션을 모델에 표현할 수 없다.",
      "연관된 업무를 하나의 커밋 단위로 묶을 수 있다.",
      "데이터 정합성을 확보하는 수단이다."
    ],
    "correctIndex": 1,
    "explanation": "트랜잭션은 논리적인 작업(연산)의 단위이고(①), 연관된 업무를 하나의 커밋 단위로 묶으며(③), 데이터 정합성을 확보하는 수단이다(④). 데이터 모델에서도 함께 처리되어야 하는 업무는 필수 관계 등으로 트랜잭션을 표현할 수 있으므로 '트랜잭션을 모델에 표현할 수 없다' 는 ② 가 옳지 않다.",
    "_source": "authored"
  },
  {
    "id": 10359,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "1과목",
    "number": 10,
    "title": "바커 표기법에서 필수 참여(인스턴스가 반드시 존재해야 함)를 표현하는 선의 형태는?",
    "options": [
      "직선",
      "점선",
      "이중선",
      "파선"
    ],
    "correctIndex": 0,
    "explanation": "바커 표기법은 관계선택사양을 선 모양으로 구분해, 필수 참여는 직선(실선), 선택 참여는 점선으로 그린다(①). 점선(②)·파선(④)은 선택 참여를 뜻하고, 이중선(③)은 바커 표기법의 참여 표기가 아니다.",
    "_source": "authored"
  },
  {
    "id": 10360,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 11,
    "title": "다음 중 데이터 제어어(DCL) 에 해당하는 명령어의 조합은?",
    "options": [
      "CREATE, ALTER",
      "INSERT, UPDATE",
      "GRANT, REVOKE",
      "COMMIT, ROLLBACK"
    ],
    "correctIndex": 2,
    "explanation": "GRANT 와 REVOKE 는 권한을 부여·회수하는 데이터 제어어(DCL)이다. CREATE/ALTER 는 DDL, INSERT/UPDATE 는 DML, COMMIT/ROLLBACK 은 TCL 이다.",
    "_source": "authored"
  },
  {
    "id": 10361,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 12,
    "title": "상위 5건과 동순위 포함 5건을 조회하는 방법으로 가장 적절한 것은?",
    "options": [
      "RANK() OVER (ORDER BY SAL DESC) 를 사용하여 순위를 매기고 조건으로 5까지 필터링한다.",
      "DISTINCT SAL 의 상위 5건만 별도 쿼리한다.",
      "WHERE ROWNUM = 5 로만 조회한다.",
      "GROUP BY SAL HAVING COUNT(*) >= 5 을 사용한다."
    ],
    "correctIndex": 0,
    "explanation": "TOP-N 쿼리에서 동순위를 포함하려면 `RANK()` 또는 `FETCH FIRST N ROWS WITH TIES` 를 사용해야 한다. ③ `WHERE ROWNUM = 5` 는 ROWNUM 의사 컬럼 특성상 항상 0건이 반환되어 부적합하다.",
    "_source": "authored"
  },
  {
    "id": 10362,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 13,
    "title": "SQL 실행 결과로 적절하지 않은 것은?",
    "options": [
      "ROUND(4.875, 2) = 4.88",
      "LENGTH('KOREAN') = 6",
      "DATE_FORMAT('2022-11-02', '%Y-%m-%d') = 2022-11-02",
      "SUBSTR('Gangneung Wonju', 8, 4) = 'g Wo'"
    ],
    "correctIndex": 3,
    "explanation": "SUBSTR('Gangneung Wonju', 8, 4) 는 8 번째 문자부터 4 글자를 잘라내므로 'ng W' 가 된다. 'g Wo' 는 9 번째부터 잘랐을 때의 결과라 ④ 가 적절하지 않다.",
    "_source": "authored"
  },
  {
    "id": 10363,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 14,
    "title": "아래 T 테이블에 대한 SQL 의 결과 행 개수로 옳은 것은?",
    "options": [
      "1개",
      "2개",
      "3개",
      "0개"
    ],
    "correctIndex": 0,
    "explanation": "`AMT BETWEEN 3000 AND 5000` 과 `VOL <= 10` 을 동시에 만족해야 한다. (4000, 5) 만 두 조건 모두 만족, (6000, 3) 은 AMT 범위 초과, (3000, 15) 는 VOL 초과. 따라서 1 건.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T 테이블",
        "headers": [
          "AMT",
          "VOL"
        ],
        "rows": [
          [
            "4000",
            "5"
          ],
          [
            "6000",
            "3"
          ],
          [
            "3000",
            "15"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT COUNT(*)\nFROM   T\nWHERE  AMT BETWEEN 3000 AND 5000\nAND    VOL <= 10;"
      }
    ]
  },
  {
    "id": 10364,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 15,
    "title": "아래 함수 중 NULL 을 반환하지 않는 것은?",
    "options": [
      "NVL(NULL, NULL)",
      "NULLIF('A', 'A')",
      "COALESCE('AB', 'CD')",
      "CASE WHEN 1=2 THEN 'Y' END"
    ],
    "correctIndex": 2,
    "explanation": "COALESCE('AB', 'CD') 는 처음 NULL 이 아닌 값 'AB' 를 반환한다(③). NVL(NULL, NULL)(①)은 대체값도 NULL 이라 NULL, NULLIF('A', 'A')(②)는 두 값이 같아 NULL, ELSE 없는 CASE(④)는 조건 1 = 2 가 거짓이라 NULL 을 반환한다.",
    "_source": "authored"
  },
  {
    "id": 10365,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 16,
    "title": "아래 두 테이블에 대한 SQL 의 결과로 옳은 것은?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctIndex": 2,
    "explanation": "T1 의 1 은 T2 의 1(세 건) 과 매칭되고 T1 의 3 은 T2 의 3(한 건) 과 매칭되어 3 + 1 = 4 건이 나온다.",
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
            "1"
          ],
          [
            "1"
          ],
          [
            "1"
          ],
          [
            "3"
          ],
          [
            "6"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT COUNT(*)\nFROM   T1, T2\nWHERE  T1.COL1 = T2.COL1;"
      }
    ]
  },
  {
    "id": 10366,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 17,
    "title": "아래 요구사항을 만족하는 ORDER BY 절로 가장 적절한 것은?",
    "options": [
      "ORDER BY 주문번호 DESC, 금액 ASC",
      "ORDER BY 주문번호 DESC, 금액테이블번호 ASC",
      "ORDER BY 주문번호 DESC, 4 DESC, 1 ASC",
      "ORDER BY 주문번호 DESC, 4 DESC, 1 DESC"
    ],
    "correctIndex": 2,
    "explanation": "요구사항은 주문번호 내림차순 → 4번 컬럼(금액) 내림차순 → 1번 컬럼(회원번호) 오름차순이다. ORDER BY 에는 SELECT 절 컬럼의 순번을 쓸 수 있으므로 ORDER BY 주문번호 DESC, 4 DESC, 1 ASC 가 맞다(③). ① 은 금액을 오름차순으로, ② 는 없는 컬럼으로, ④ 는 회원번호를 내림차순으로 정렬한다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT 회원번호,    -- 1번 컬럼\n       회원명,      -- 2번 컬럼\n       주문번호,    -- 3번 컬럼\n       금액         -- 4번 컬럼\nFROM   주문\n[ ORDER BY  ?  ];"
      },
      {
        "type": "text",
        "content": "요구사항: 주문번호 내림차순 정렬 후, 같은 주문번호 내에서 4번 컬럼(금액) 내림차순, 1번 컬럼(회원번호) 오름차순으로 정렬한다."
      }
    ]
  },
  {
    "id": 10367,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 18,
    "title": "아래 테이블 DDL 에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "학번 컬럼에 DEFAULT 값이 지정되어 있다.",
      "학생 이름은 NULL 을 허용하지 않는다.",
      "학과번호는 학과 테이블을 참조한다.",
      "DEFAULT 때문에 101·102·103 학생 번호로 입력해도 학번에는 NULL 이 들어간다."
    ],
    "correctIndex": 3,
    "explanation": "학번에는 DEFAULT 100 이 지정되어 있고(①), 이름은 NOT NULL 이며(②), 학과번호는 학과 테이블을 참조한다(③). DEFAULT 는 INSERT 에서 값을 생략했을 때만 쓰이고, 101·102·103 처럼 값을 넣으면 그 값이 그대로 저장되므로 ④ 가 옳지 않다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "CREATE TABLE 학생 (\n  학번 NUMBER DEFAULT 100 PRIMARY KEY,\n  이름 VARCHAR2(30) NOT NULL,\n  학과번호 NUMBER REFERENCES 학과(학과번호)\n);"
      }
    ]
  },
  {
    "id": 10368,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 19,
    "title": "SAL 기준 상위 3순위까지 동순위를 포함하되, 동순위 다음 순위를 건너뛰지 않고 부여하는 함수로 적절한 것은?",
    "options": [
      "DENSE_RANK",
      "ROW_NUMBER",
      "RANK",
      "NTILE"
    ],
    "correctIndex": 0,
    "explanation": "DENSE_RANK 는 동순위를 같은 등수로 부여하면서 다음 등수를 건너뛰지 않아, 상위 N 순위 동순위 포함 조회에 적합하다.",
    "_source": "authored"
  },
  {
    "id": 10369,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 20,
    "title": "아래 SQL 의 결과로 옳은 것은?",
    "options": [
      "전체 회원",
      "1건",
      "NULL",
      "공집합"
    ],
    "correctIndex": 3,
    "explanation": "주문 테이블의 주문월은 '201001' 한 건뿐이라 주문월 = '201010' 을 만족하는 행이 없다. 조건을 만족하는 행이 없으면 결과는 0건, 즉 공집합이다. NULL 이 담긴 한 행이 나오는 것과는 다르다. 정답은 ④ 이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "회원번호",
          "회원명",
          "주문월"
        ],
        "rows": [
          [
            "1",
            "홍길동",
            "201001"
          ]
        ],
        "caption": "주문 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT * FROM 주문 WHERE 주문월 = '201010';"
      }
    ]
  },
  {
    "id": 10370,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 21,
    "title": "아래 셀프 조인 SQL 의 빈칸에 들어갈 함수로 옳은 것은?",
    "options": [
      "NVL(M.이름)",
      "DECODE(M.이름)",
      "NULLIF(M.이름, '사장')",
      "COALESCE(M.이름, '사장')"
    ],
    "correctIndex": 3,
    "explanation": "사원 테이블에서 매니저ID 가 NULL 인 사원(예: 김사장)은 LEFT JOIN 결과에서 M 측 컬럼이 모두 NULL 이 된다. 이때 COALESCE(M.이름, '사장') 은 NULL 이 아닌 첫 인자를 반환하므로 '사장' 이 출력된다. NVL 은 인자가 두 개 필요하고 NULLIF 는 두 값이 같으면 NULL 을 반환하는 함수라 의미가 다르다. 정답은 ④.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "사원 테이블",
        "headers": [
          "사원ID",
          "이름",
          "매니저ID"
        ],
        "rows": [
          [
            "1",
            "김사장",
            "(NULL)"
          ],
          [
            "2",
            "이부장",
            "1"
          ],
          [
            "3",
            "박과장",
            "2"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- 사원의 매니저 이름을 조회하되 매니저가 없는 경우 '사장' 을 반환한다.\nSELECT E.이름, (  ?  ) AS 상사명\nFROM   사원 E LEFT JOIN 사원 M ON E.매니저ID = M.사원ID;"
      },
      {
        "type": "table",
        "caption": "기대 결과",
        "headers": [
          "이름",
          "상사명"
        ],
        "rows": [
          [
            "김사장",
            "사장"
          ],
          [
            "이부장",
            "김사장"
          ],
          [
            "박과장",
            "이부장"
          ]
        ]
      }
    ]
  },
  {
    "id": 10371,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 22,
    "title": "DELETE·TRUNCATE·DROP 비교에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "특정 테이블에 WHERE 조건 없이 DELETE 를 수행하면 DROP TABLE 과 동일한 결과를 얻는다.",
      "DROP 은 테이블 정의를 삭제하고 TRUNCATE 는 테이블을 초기 상태로 만든다.",
      "TRUNCATE 는 UNDO 데이터를 생성하지 않아 대량 삭제 시 DELETE 보다 빠르다.",
      "DROP 과 TRUNCATE 는 Auto Commit 이고 DELETE 는 사용자 COMMIT 이 필요하다."
    ],
    "correctIndex": 0,
    "explanation": "DROP 은 테이블 정의까지 삭제하고 TRUNCATE 는 테이블을 처음 상태로 만들며(②), TRUNCATE 는 UNDO 를 거의 만들지 않아 대량 삭제 시 빠르고(③), DROP·TRUNCATE 는 DDL 이라 자동 커밋되지만 DELETE 는 COMMIT 이 필요하다(④). WHERE 없는 DELETE 는 모든 행을 지울 뿐 테이블 구조는 남으므로 DROP TABLE 과 결과가 같다는 ① 이 옳지 않다.",
    "_source": "authored"
  },
  {
    "id": 10372,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 23,
    "title": "아래 LTRIM 함수의 결과로 옳은 것은?",
    "options": [
      "abcd",
      "xxxabcd",
      "xxxxxxabcd",
      "NULL"
    ],
    "correctIndex": 0,
    "explanation": "LTRIM(문자열, 'x') 은 왼쪽부터 'x' 가 아닌 문자가 나올 때까지 지정 문자를 한 번이 아니라 모두 제거한다. 앞의 'xxxxxx' 가 전부 지워져 'abcd' 가 된다. 정답은 ① 이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT LTRIM('xxxxxxabcd', 'x') FROM DUAL;"
      }
    ]
  },
  {
    "id": 10373,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 24,
    "title": "아래 SQL 의 WHERE 조건과 동일한 의미를 가지는 것은?",
    "options": [
      "SELECT * FROM T WHERE COL1 = 1 AND COL2 = 3;",
      "SELECT * FROM T WHERE COL1 = 1 OR COL2 IN (3, 4);",
      "SELECT * FROM T WHERE COL1 IN (1, 2) AND COL2 IN (3, 4);",
      "SELECT * FROM T WHERE COL1 = 1 AND (COL2 = 3 OR COL2 = 4);"
    ],
    "correctIndex": 3,
    "explanation": "다중 컬럼 IN `(COL1, COL2) IN ((1, 3), (1, 4))` 는 `(COL1=1 AND COL2=3) OR (COL1=1 AND COL2=4)` 와 동일하다. COL1 이 두 튜플에서 모두 1 이라 공통 인수로 묶으면 `COL1=1 AND (COL2=3 OR COL2=4)` 로 정리된다. ① 은 한 조건만, ② 는 OR 결합으로 더 넓고, ③ 은 COL1 이 2 인 행 (2, 3), (2, 4) 도 매칭하므로 의미가 다르다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT *\nFROM   T\nWHERE  (COL1, COL2) IN ((1, 3), (1, 4));"
      }
    ]
  },
  {
    "id": 10374,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 25,
    "title": "소수점 내림을 수행하는 함수에 해당하지 않는 것은?",
    "options": [
      "CEIL",
      "FLOOR",
      "TRUNC (양수 자리 지정)",
      "INT"
    ],
    "correctIndex": 0,
    "explanation": "CEIL 은 소수점을 올리는 함수이므로 내림 함수에 해당하지 않는다. FLOOR 는 내림, TRUNC 는 지정한 자리에서 버림, INT 는 정수부만 취하므로 모두 내림 계열이다.",
    "_source": "authored"
  },
  {
    "id": 10375,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 26,
    "title": "아래 SQL 의 오류가 발생하는 부분으로 가장 적절한 것은?",
    "options": [
      "(1)",
      "(2)",
      "(3)",
      "(4)"
    ],
    "correctIndex": 1,
    "explanation": "(2) 의 서브쿼리 SELECT ID FROM A WHERE ~ 는 여러 행을 반환할 수 있는데, 단일 행 비교 연산자 = 와 함께 쓰여 여러 행이 나오면 ORA-01427 오류가 난다(②). 여러 행을 받으려면 IN 을 써야 한다. SUM(SAL)(①), GROUP BY ID(③), HAVING SUM(SAL) > 5000(④)은 문법상 문제가 없다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT SUM(SAL)            -- (1)\nFROM   EMP\nWHERE  컬럼 = (SELECT ID FROM A WHERE ~)  -- (2)\nGROUP BY ID                 -- (3)\nHAVING SUM(SAL) > 5000;     -- (4)"
      }
    ]
  },
  {
    "id": 10376,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 27,
    "title": "테이블·컬럼 별칭 사용에 대한 다음 설명 중 옳지 않은 것은?",
    "options": [
      "컬럼 별칭은 AS 키워드를 생략할 수 있다.",
      "테이블 별칭은 FROM 절에서 지정한다.",
      "SELECT U1.T1.C1 FROM U1.T1 A; 처럼 별칭을 지정한 뒤에도 원래 테이블명을 SELECT 절에 사용할 수 있다.",
      "ORDER BY 절에서는 SELECT 절의 별칭을 참조할 수 있다."
    ],
    "correctIndex": 2,
    "explanation": "컬럼 별칭은 AS 를 생략할 수 있고(①), 테이블 별칭은 FROM 절에서 지정하며(②), ORDER BY 는 SELECT 이후에 처리되어 SELECT 절 별칭을 쓸 수 있다(④). FROM 절에서 테이블 별칭(A)을 지정하면 그 쿼리 안에서는 별칭으로만 참조해야 하므로, 원래 이름 U1.T1.C1 을 쓰면 오류다. ③ 이 옳지 않다.",
    "_source": "authored"
  },
  {
    "id": 10377,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 28,
    "title": "아래 NATURAL JOIN SQL 의 결과로 옳은 것은?",
    "options": [
      "공집합 (0건)",
      "1건",
      "2건",
      "오류가 발생한다"
    ],
    "correctIndex": 0,
    "explanation": "NATURAL JOIN 은 두 테이블에서 이름이 같은 모든 컬럼을 조인 조건으로 사용한다. A 와 B 는 ID 와 COL1 이 모두 같은 이름이므로 두 컬럼이 동시에 일치해야 한다. ID 는 1 로 같지만 COL1 은 X 와 Y 로 다르므로 매칭되는 행이 없어 결과는 공집합이다. ② 는 ID 만 조인 조건이라고 본 경우, ③ 은 카티션 곱으로 본 경우, ④ 는 동일 이름 컬럼이 여러 개면 오류가 난다고 본 경우이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "A",
        "headers": [
          "ID",
          "COL1"
        ],
        "rows": [
          [
            "1",
            "X"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "B",
        "headers": [
          "ID",
          "COL1"
        ],
        "rows": [
          [
            "1",
            "Y"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT * FROM A NATURAL JOIN B;"
      }
    ]
  },
  {
    "id": 10378,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 29,
    "title": "아래 회원 테이블에 대한 SQL 의 결과 정렬 순서로 옳은 것은?",
    "options": [
      "VVIP, VIP 순으로 출력",
      "VIP, VVIP 순으로 출력",
      "정렬되지 않은 원본 순서",
      "오류 발생"
    ],
    "correctIndex": 0,
    "explanation": "DECODE 가 VVIP 에 1, VIP 에 2, 기타에 3 을 부여하므로 ORDER BY 결과는 VVIP → VIP 순으로 정렬된다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "회원 테이블",
        "headers": [
          "회원ID",
          "등급"
        ],
        "rows": [
          [
            "1",
            "VIP"
          ],
          [
            "2",
            "VVIP"
          ],
          [
            "3",
            "VIP"
          ],
          [
            "4",
            "일반"
          ],
          [
            "5",
            "VVIP"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT 등급 FROM 회원 ORDER BY DECODE(등급, 'VVIP', 1, 'VIP', 2, 3);"
      }
    ]
  },
  {
    "id": 10379,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 30,
    "title": "아래 SQL 의 결과로 옳은 것은?",
    "options": [
      "10, 12, 15",
      "10, 12",
      "50 이하의 모든 값",
      "공집합"
    ],
    "correctIndex": 0,
    "explanation": "COL <= ALL(50, 15) 는 목록의 모든 값보다 작거나 같아야 하므로 가장 작은 값 15 이하인 행만 참이다. T 에서 10, 12, 15 가 해당한다(①). ② 는 15 를 빠뜨렸고, ③ 은 ANY(가장 큰 값 50 이하)로 착각한 결과다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT * FROM T WHERE COL <= ALL(50, 15);"
      },
      {
        "type": "table",
        "headers": [
          "COL"
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
            "20"
          ],
          [
            "60"
          ]
        ],
        "caption": "T 테이블"
      }
    ]
  },
  {
    "id": 10380,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 31,
    "title": "아래 설명에 해당하는 집합 연산자는?",
    "options": [
      "UNION",
      "UNION ALL",
      "INTERSECT",
      "MINUS"
    ],
    "correctIndex": 3,
    "explanation": "첫 번째 집합에서 두 번째 집합에 있는 행을 뺀 차집합은 MINUS(SQL Server 는 EXCEPT)다(④). UNION 은 중복을 제거한 합집합, UNION ALL 은 중복을 포함한 합집합, INTERSECT 는 교집합이다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "첫 번째 집합에서 두 번째 집합에 존재하는 행을 제외한 결과를 반환한다."
      }
    ]
  },
  {
    "id": 10381,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 32,
    "title": "집합 연산자에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "UNION 연산자는 합집합 결과에서 중복된 행을 하나의 행으로 만든다.",
      "UNION ALL 연산자는 중복이 없는 경우 UNION 과 결과가 동일하다.",
      "UNION 연산자를 사용한 SQL 은 각각의 집합에 GROUP BY 절을 사용할 수 있다.",
      "UNION 연산자를 사용한 SQL 은 각각의 집합에 ORDER BY 절을 사용할 수 있다."
    ],
    "correctIndex": 3,
    "explanation": "UNION 은 합집합에서 중복 행을 하나로 만들고(①), 중복이 없으면 UNION ALL 과 결과가 같다(②). 각 SELECT 에는 WHERE·GROUP BY·HAVING 을 따로 쓸 수 있지만(③), ORDER BY 는 집합 연산이 끝난 최종 결과에 한 번만, 마지막 SELECT 뒤에 쓸 수 있다. 각 집합에 ORDER BY 를 쓸 수 있다는 ④ 가 옳지 않다.",
    "_source": "authored"
  },
  {
    "id": 10382,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 33,
    "title": "아래 SQL 중 오류 원인이 올바르게 분류된 것은?",
    "options": [
      "가 — SELECT 서브쿼리에서 집계 함수 사용으로 인한 오류",
      "나 — 서브쿼리 안에서 집계 함수를 사용했으므로 오류",
      "다 — GROUP BY 에서 집계 함수를 사용",
      "라 — ORDER BY 에서 집계 함수를 사용했으므로 오류"
    ],
    "correctIndex": 3,
    "explanation": "라 의 `ORDER BY SUM(SAL)` 은 GROUP BY 없이 일반 컬럼(EMPNO, ENAME)과 집계 함수를 함께 써서 ORA-00937(단일 그룹의 그룹 함수가 아니다) 오류가 난다. 따라서 ④ 가 올바른 분류다. ① 가 는 스칼라 서브쿼리 안의 집계라 오류가 없다. ② 나 의 서브쿼리에는 집계 함수가 없다. 부서 10 사원이 여럿이면 다중 행 결과에 `=` 를 써서 ORA-01427 이 나므로, 원인은 집계 함수가 아니라 `=` 연산자다. ③ 다 는 GROUP BY 가 아니라 WHERE 절에 집계 함수를 써서 생긴 오류다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "caption": "가",
        "code": "SELECT EMPNO,\n       (SELECT MAX(SAL) FROM EMP) AS MAX_SAL\nFROM   EMP;"
      },
      {
        "type": "sql",
        "caption": "나",
        "code": "SELECT *\nFROM   EMP\nWHERE  SAL = (SELECT SAL FROM EMP WHERE DEPTNO = 10);"
      },
      {
        "type": "sql",
        "caption": "다",
        "code": "SELECT DEPTNO, COUNT(*)\nFROM   EMP\nWHERE  SUM(SAL) > 10000\nGROUP BY DEPTNO;"
      },
      {
        "type": "sql",
        "caption": "라",
        "code": "SELECT EMPNO, ENAME\nFROM   EMP\nORDER BY SUM(SAL);"
      }
    ]
  },
  {
    "id": 10383,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 34,
    "title": "계층형 집계 함수에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "ROLLUP 은 시간·지형 등 계층형 데이터의 소계·총계를 반환한다.",
      "CUBE 는 모든 컬럼 조합의 집계를 반환한다.",
      "GROUPING SETS 는 원하는 집계 조합을 선택적으로 지정한다.",
      "ROLLUP·CUBE·GROUPING SETS 은 내부에서 정렬을 수행하지 못한다."
    ],
    "correctIndex": 3,
    "explanation": "ROLLUP 은 계층 순서대로 소계·총계를(①), CUBE 는 모든 컬럼 조합의 집계를(②), GROUPING SETS 는 원하는 조합만 골라 집계한다(③). 이 함수들은 그룹을 만들기 위해 내부적으로 정렬·그룹화를 수행하며, 결과 순서를 원하는 대로 보장하려면 ORDER BY 를 함께 쓴다. 정렬을 수행하지 못한다는 ④ 가 옳지 않다.",
    "_source": "authored"
  },
  {
    "id": 10384,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 35,
    "title": "아래 두 테이블에 대한 CROSS JOIN 의 결과 행 수로 옳은 것은? (T1 의 행 수 = M, T2 의 행 수 = N)",
    "options": [
      "15",
      "8",
      "5",
      "3"
    ],
    "correctIndex": 0,
    "explanation": "CROSS JOIN 은 조인 조건 없이 두 테이블의 모든 행을 조합하므로 결과 행 수는 M × N 이다. M = 3, N = 5 이면 15 행이다(①). 8 은 M + N 을 더한 잘못된 계산이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "테이블 카디널리티 (M = T1 행 수, N = T2 행 수)",
        "headers": [
          "M",
          "N"
        ],
        "rows": [
          [
            "3",
            "5"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT *\nFROM   T1 CROSS JOIN T2;"
      }
    ]
  },
  {
    "id": 10385,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 36,
    "title": "아래 EMP 테이블에서 SAL 상위 5순위 사원을 조회하는 SQL 로 옳은 것은?",
    "options": [
      "SELECT * FROM EMP WHERE ROWNUM <= 5 ORDER BY SAL DESC;",
      "SELECT DISTINCT SAL FROM EMP ORDER BY SAL DESC;",
      "SELECT * FROM (SELECT * FROM EMP ORDER BY SAL DESC) WHERE ROWNUM <= 5;",
      "SELECT * FROM EMP FETCH FIRST 5 ROWS ONLY;"
    ],
    "correctIndex": 2,
    "explanation": "Oracle 의 `ROWNUM` 은 `ORDER BY` 가 적용되기 전에 행에 1 부터 부여된다. ① 처럼 `WHERE ROWNUM <= 5` 와 `ORDER BY` 를 한 SELECT 안에 두면 정렬되지 않은 임의의 5 건이 잡힌 뒤 정렬되어 \"상위 5 건\" 이 보장되지 않는다. ② `DISTINCT` 는 중복 제거일 뿐 행 수를 5 로 제한하지 않는다. ④ 는 `ORDER BY` 가 없어 어떤 5 건이 나올지 보장되지 않는다. 정답은 인라인 뷰에서 먼저 정렬한 뒤 외부 쿼리에서 `ROWNUM <= 5` 를 적용하는 ③ 번 패턴이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "EMPNO",
          "ENAME",
          "SAL"
        ],
        "rows": [
          [
            "7839",
            "KING",
            "5000"
          ],
          [
            "7902",
            "FORD",
            "3000"
          ],
          [
            "7788",
            "SCOTT",
            "3000"
          ],
          [
            "7566",
            "JONES",
            "2975"
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
            "7654",
            "MARTIN",
            "1250"
          ],
          [
            "7934",
            "MILLER",
            "1300"
          ]
        ],
        "caption": "EMP 테이블"
      }
    ]
  },
  {
    "id": 10386,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 37,
    "title": "UNPIVOT 절 사용 시 열 이름의 순서에 대한 설명 중 옳은 것은?",
    "options": [
      "AMOUNT3, AMOUNT2, AMOUNT1 순으로 UNPIVOT 해도 결과 행 자체(컬럼-값 매핑) 는 동일하고 출력 순서만 바뀐다.",
      "UNPIVOT 시 입력 열의 순서를 바꾸면 결과 행 수가 달라진다.",
      "UNPIVOT 은 NULL 행을 항상 유지한다.",
      "UNPIVOT 은 반드시 세 개의 열을 대상으로 한다."
    ],
    "correctIndex": 0,
    "explanation": "UNPIVOT 의 열 나열 순서는 결과 행의 출력 순서에만 영향을 줄 뿐, 각 행의 컬럼-값 매핑 자체는 동일하게 유지되고 행 수도 같다. ② 입력 열 순서를 바꿔도 결과 행 수는 같다. ③ UNPIVOT 은 기본적으로 NULL 행을 제외하며 `INCLUDE NULLS` 옵션을 줄 때만 유지한다. ④ UNPIVOT 의 대상 열 수는 두 개 이상이면 충분하다.",
    "_source": "authored"
  },
  {
    "id": 10387,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 38,
    "title": "REGEXP_SUBSTR 로 이메일의 도메인 점(.) 유무를 검사할 때 가장 부적절한 결과가 나오는 경우는?",
    "options": [
      "name@domain.com",
      "test@naver.co.kr",
      "hello@nodot",
      "user1@example.com"
    ],
    "correctIndex": 2,
    "explanation": "도메인에 점(.) 이 있는지 검사하는 패턴이라면 name@domain.com, test@naver.co.kr, user1@example.com 은 모두 '@' 뒤 도메인에 점이 있어 정상으로 판정된다. hello@nodot 은 도메인에 점이 없어 패턴과 매칭되지 않고 NULL(빈 결과)이 나오므로 부적절한 결과가 나오는 경우는 ③ 이다.",
    "_source": "authored"
  },
  {
    "id": 10388,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 39,
    "title": "REGEXP_SUBSTR 로 'aabbc' 중 일부를 추출하는 SQL 의 결과로 옳은 것은?",
    "options": [
      "aabbc, bbc",
      "abbc, bc",
      "aab, bbc",
      "두 결과 모두 빈 문자열"
    ],
    "correctIndex": 1,
    "explanation": "REGEXP_SUBSTR(문자열, 패턴, 시작위치) 의 세 번째 인자는 검색을 시작할 위치다. 'aabbc' 의 2 번째 문자부터 'a.*' 를 찾으면 2 번째 'a' 에서 시작해 끝까지 이어지는 'abbc' 가 반환된다. 4 번째 문자부터 'b.*' 를 찾으면 4 번째 'b' 에서 시작하는 'bc' 가 반환된다. ① 은 시작 위치를 무시하고 1 번째부터 검색한 경우이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT REGEXP_SUBSTR('aabbc', 'a.*', 2) AS 첫번째,\n       REGEXP_SUBSTR('aabbc', 'b.*', 4) AS 두번째\nFROM   DUAL;"
      }
    ]
  },
  {
    "id": 10389,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 40,
    "title": "아래 설명에 해당하는 윈도우 절로 옳은 것은?",
    "options": [
      "RANGE BETWEEN 50 PRECEDING AND 150 FOLLOWING",
      "ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING",
      "ROWS UNBOUNDED PRECEDING",
      "RANGE BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING"
    ],
    "correctIndex": 1,
    "explanation": "행 단위로 윈도우 범위를 지정하는 것은 ROWS 이고, 현재 행의 앞뒤 한 행씩을 포함하려면 시작을 1 PRECEDING, 끝을 1 FOLLOWING 으로 지정한다. ① RANGE 는 행이 아니라 정렬 키의 값 범위를 기준으로 하므로 동일 값이 있으면 결과가 달라지고, ③ 은 첫 행부터 현재 행까지, ④ 는 현재 행부터 마지막 행까지라 범위가 다르다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "정렬 기준에서 현재 행과 바로 앞 한 행, 바로 뒤 한 행을 합한 세 개의 행을 윈도우 범위로 지정한다."
      }
    ]
  },
  {
    "id": 10390,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 41,
    "title": "계층형 SQL 에서 ORDER SIBLINGS BY 와 NOCYCLE 옵션에 대한 설명 중 옳은 것은?",
    "options": [
      "NOCYCLE 을 수행한 뒤 순환 발생 행을 CONNECT_BY_ISCYCLE 로 확인할 수 있다.",
      "SIBLINGS 는 전체 트리를 재정렬한다.",
      "ORDER BY 는 계층형 결과를 보존하지 않는다.",
      "NOCYCLE 은 CONNECT_BY_ROOT 와 반드시 함께 사용한다."
    ],
    "correctIndex": 0,
    "explanation": "NOCYCLE 옵션은 순환을 만나면 전개를 중단하며, 순환이 발생한 행은 CONNECT_BY_ISCYCLE 의사 컬럼으로 식별할 수 있다.",
    "_source": "authored"
  },
  {
    "id": 10391,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 42,
    "title": "아래 SQL 의 결과로 옳은 것은?",
    "options": [
      "100",
      "190",
      "NULL",
      "오류"
    ],
    "correctIndex": 0,
    "explanation": "T.COL1 = (10, 50, 90). `MIN(COL1)` = 10 (숫자), `MAX(TO_CHAR(COL1))` = '90' (문자 비교 기준 가장 큰 문자열). `숫자 + 문자열` 은 묵시적 형변환으로 10 + 90 = 100 이 된다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "COL1"
        ],
        "rows": [
          [
            "10"
          ],
          [
            "50"
          ],
          [
            "90"
          ]
        ],
        "caption": "T 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT MIN(COL1) + MAX(TO_CHAR(COL1))\nFROM   T;"
      }
    ]
  },
  {
    "id": 10392,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 43,
    "title": "아래 NAMES 테이블에서 LIKE '%n' 조건에 매칭되는 이름의 수로 옳은 것은?",
    "options": [
      "1명",
      "2명",
      "3명",
      "0명"
    ],
    "correctIndex": 1,
    "explanation": "LIKE '%n' 은 앞에 무엇이 와도 되고 마지막 글자가 소문자 n 인 문자열과 매칭된다. Kevin, Jason 은 n 으로 끝나고 Tom 은 m 으로 끝나므로 2명이다(②).",
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
            "Kevin"
          ],
          [
            "Jason"
          ],
          [
            "Tom"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT COUNT(*)\nFROM   NAMES\nWHERE  NAME LIKE '%n';"
      }
    ]
  },
  {
    "id": 10393,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 44,
    "title": "테이블 구조 변경에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "기존 데이터가 있으면 컬럼 사이즈 축소 시 제한이 있다.",
      "NULL 만 입력된 컬럼은 사이즈 축소가 가능하다.",
      "DEFAULT 값을 변경하면 변경 이후 입력되는 데이터에만 적용된다.",
      "DEFAULT 값을 NULL 로 변경하면 기존 NULL 데이터에도 새로운 DEFAULT 가 소급 적용된다."
    ],
    "correctIndex": 3,
    "explanation": "기존 데이터가 있으면 그보다 작게 컬럼 크기를 줄일 수 없고(①), 값이 모두 NULL 인 컬럼은 줄일 수 있다(②). DEFAULT 값을 바꾸면 변경 이후에 입력되는 행에만 적용되며(③) 이미 저장된 데이터(NULL 포함)에는 소급 적용되지 않는다. 따라서 ④ 가 옳지 않다.",
    "_source": "authored"
  },
  {
    "id": 10394,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 45,
    "title": "아래 테이블에 대한 INSERT 중 오류가 발생하는 것은?",
    "options": [
      "INSERT INTO TEST45 VALUES (1, 2, 3);",
      "INSERT INTO TEST45 VALUES (1, 2, 3, 4);",
      "INSERT INTO TEST45 (COL1, COL2, COL3) VALUES (1, 2, 3);",
      "INSERT INTO TEST45 (COL1, COL2, COL3, COL4) VALUES (1, 2, 3, 4);"
    ],
    "correctIndex": 0,
    "explanation": "TEST45 는 컬럼이 4개다. 컬럼 목록을 생략한 INSERT 는 모든 컬럼에 순서대로 값을 줘야 하는데, ① 은 값이 3개뿐이라 '값의 수가 충분하지 않다' 는 오류가 난다. ② 는 4개를 모두 줬고, ③ 은 컬럼 3개를 명시해 COL4 에 NULL 이 들어가며, ④ 는 4개 컬럼을 명시했으므로 모두 정상이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "CREATE TABLE TEST45 (\n  COL1 NUMBER,\n  COL2 NUMBER,\n  COL3 NUMBER,\n  COL4 NUMBER\n);"
      }
    ]
  },
  {
    "id": 10395,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 46,
    "title": "아래 세 테이블 T1, T2, T3 을 키 컬럼으로 INNER JOIN 한 결과의 행 수로 옳은 것은?",
    "options": [
      "1개",
      "2개",
      "3개",
      "0개"
    ],
    "correctIndex": 0,
    "explanation": "세 테이블 모두에 값이 존재하는 키는 1 한 건 뿐이다. T2 의 NULL 과 T3 의 NULL 은 동등 비교 대상이 되지 않는다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T1 테이블",
        "headers": [
          "KEY"
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
          "KEY"
        ],
        "rows": [
          [
            "1"
          ],
          [
            "2"
          ],
          [
            "NULL"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "T3 테이블",
        "headers": [
          "KEY"
        ],
        "rows": [
          [
            "1"
          ],
          [
            "NULL"
          ],
          [
            "NULL"
          ]
        ]
      }
    ]
  },
  {
    "id": 10396,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 47,
    "title": "아래 A, B 테이블을 UNION 한 결과(중복 제거) 의 행 수는?",
    "options": [
      "6개",
      "8개",
      "4개",
      "2개"
    ],
    "correctIndex": 0,
    "explanation": "UNION 은 두 집합을 합친 뒤 중복을 제거한다. A 의 1·2·3·4 와 B 의 3·4·5·6 을 합치면 3·4 가 중복되어 한 번씩만 남아 1·2·3·4·5·6 의 6 건이 된다. 중복을 그대로 두는 UNION ALL 이라면 8 건이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "A 테이블",
        "headers": [
          "COL"
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
        "caption": "B 테이블",
        "headers": [
          "COL"
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
          ],
          [
            "6"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT COL FROM A\nUNION\nSELECT COL FROM B;"
      }
    ]
  },
  {
    "id": 10397,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 48,
    "title": "아래 SQL 의 결과로 옳은 것은?",
    "options": [
      "5 (5+0+0)",
      "15 (5+10+0)",
      "20",
      "50"
    ],
    "correctIndex": 1,
    "explanation": "MIN(COLB) = 5, MAX(COLC) 는 NULL 을 제외하고 10, SUM(NVL(SCORE, 0)) 은 두 행 모두 0 으로 바뀌어 0 이다. 바깥 NVL 은 각 값이 NULL 이 아니라 그대로 쓰이므로 5 + 10 + 0 = 15 다(②). ① 은 MAX(COLC) 를 NULL→0 으로 잘못 본 결과다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "COLB",
          "COLC",
          "SCORE"
        ],
        "rows": [
          [
            "5",
            "10",
            "NULL"
          ],
          [
            "10",
            "NULL",
            "NULL"
          ]
        ],
        "caption": "T 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT NVL(MIN(COLB), 0) + NVL(MAX(COLC), 0) + SUM(NVL(SCORE, 0))\nFROM   T;"
      }
    ]
  },
  {
    "id": 10398,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 49,
    "title": "테이블 제약조건 변경에 대한 설명으로 옳지 않은 것은?",
    "options": [
      "PK 는 NOT NULL 과 UNIQUE 가 결합된 제약이다.",
      "FOREIGN KEY 는 참조 대상이 존재해야 추가할 수 있다.",
      "CHECK 조건은 기존 데이터도 위반 여부를 검사한다.",
      "제약 조건 NOT NULL 추가 시 이미 NULL 값이 존재하면 오류 없이 수행된다."
    ],
    "correctIndex": 3,
    "explanation": "PK 는 NOT NULL 과 UNIQUE 를 합친 제약이고(①), FK 는 참조할 테이블의 PK·UNIQUE 가 있어야 추가할 수 있으며(②), CHECK 제약을 추가하면 기본적으로 기존 데이터도 위반 여부를 검사한다(③). 이미 NULL 이 있는 컬럼에 NOT NULL 을 추가하면 기존 데이터가 제약을 위반해 오류가 나므로 ④ 가 옳지 않다.",
    "_source": "authored"
  },
  {
    "id": 10399,
    "examSetId": "round-53",
    "examLabel": "제53회 (2024년 5월)",
    "round": 53,
    "subject": "2과목",
    "number": 50,
    "title": "아래 SQL 실행 후 최종 조회 건수는?",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "correctIndex": 2,
    "explanation": "TABLE50 은 비어 있는 상태로 시작한다. INSERT 1·2·3 → 3건. SAVEPOINT SQL1 선언. INSERT 4·5 → 5건. COMMIT 시점에 5건이 영구 확정되며 이때 SAVEPOINT SQL1 은 함께 사라진다. 이후 INSERT 6 → 6건. ROLLBACK TO SAVEPOINT SQL1 은 가리킬 SAVEPOINT 가 없으므로 오류가 발생해 무시되거나 영향이 없고, 최종 SELECT 결과는 6 건이다. 정답은 ③.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "TABLE50 은 비어 있는 상태에서 시작한다."
      },
      {
        "type": "sql",
        "code": "INSERT INTO TABLE50 VALUES (1);\nINSERT INTO TABLE50 VALUES (2);\nINSERT INTO TABLE50 VALUES (3);\nSAVEPOINT SQL1;\nINSERT INTO TABLE50 VALUES (4);\nINSERT INTO TABLE50 VALUES (5);\nCOMMIT;\nINSERT INTO TABLE50 VALUES (6);\nROLLBACK TO SAVEPOINT SQL1;\n\nSELECT COUNT(*) FROM TABLE50;"
      }
    ]
  }
];
