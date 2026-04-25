// Auto-generated from PDF + blog + scripts/authored/round-54.json
// 제54회 — 2024년 8월 · 50문항
// ⚠ 직접 편집 금지. 출처별 데이터를 고친 뒤 'node scripts/build-quiz-bank.mjs' 재실행.
import type { QuizQuestion } from '../quizBank';

export const ROUND_54: QuizQuestion[] = [
  {
    "id": 10300,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "1과목",
    "number": 1,
    "title": "아래 설명에 해당하는 데이터 모델링 단계로 적절한 것은?",
    "options": [
      "논리적 데이터 모델링",
      "개념적 데이터 모델링",
      "물리적 데이터 모델링",
      "데이터베이스 모델링"
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "시스템으로 구축하고자 하는 업무에 대해 Key, 속성, 관계 등을 정확하게 표현하고 재사용성이 높은 모델링"
      }
    ]
  },
  {
    "id": 10301,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "1과목",
    "number": 2,
    "title": "엔터티의 특징으로 적절하지 않은 것은?",
    "options": [
      "엔터티는 고유한 식별자를 가진다.",
      "엔터티는 데이터 저장의 기본 단위이다.",
      "엔터티는 반드시 속성을 가진다.",
      "속성이 없는 엔터티가 있을 수 있다."
    ],
    "correctIndex": 3,
    "explanation": "엔터티는 반드시 두 개 이상의 속성을 가져야 한다.",
    "_source": "authored"
  },
  {
    "id": 10302,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "1과목",
    "number": 3,
    "title": "속성의 특징으로 적절하지 않은 것은?",
    "options": [
      "속성은 엔터티의 특성을 나타낸다.",
      "속성에는 기본 속성과 파생 속성이 있다.",
      "파생 속성은 다른 속성에서 계산된다.",
      "파생 속성은 많을수록 좋다."
    ],
    "correctIndex": 3,
    "explanation": "파생 속성은 중복을 야기할 수 있으므로 가능한 한 최소화하는 것이 원칙이다.",
    "_source": "authored"
  },
  {
    "id": 10303,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "1과목",
    "number": 4,
    "title": "식별자의 특징으로 적절하지 않은 것은?",
    "options": [
      "식별자는 엔터티의 유일성을 보장한다.",
      "식별자는 최소성 조건을 만족해야 한다.",
      "주식별자는 엔터티를 고유하게 식별한다.",
      "주식별자의 값은 자주 변경될 수 있다."
    ],
    "correctIndex": 3,
    "explanation": "주식별자는 변하지 않아야 한다는 '불변성' 을 특징으로 가진다.",
    "_source": "authored"
  },
  {
    "id": 10304,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "1과목",
    "number": 5,
    "title": "식별자 관계에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "식별자 관계는 부모 엔터티와 종속적인 관계를 맺는다.",
      "비식별자 관계에서 부모와의 관계는 필수 조건이다.",
      "식별자 관계는 부모의 식별자를 자식에게 전달한다.",
      "비식별자 관계는 자식 엔터티가 독립적으로 존재할 수 있다."
    ],
    "correctIndex": 1,
    "explanation": "비식별자 관계는 선택적(Optional) 참여가 가능하며 부모가 필수 조건이 아니다.",
    "_source": "authored"
  },
  {
    "id": 10305,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "1과목",
    "number": 6,
    "title": "아래 고객·주문 ERD 를 해석한 내용으로 적절한 것은?",
    "options": [
      "주문 엔터티의 고객번호는 고객 엔터티로부터 상속받은 것이다.",
      "주문이 없는 고객은 존재할 수 없다.",
      "고객 없이도 주문은 독립적으로 발생할 수 있다.",
      "주문 엔터티의 주식별자는 고객번호이다."
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "authored",
    "references": [
      {
        "type": "ascii",
        "text": "[ 고객 ] ||-----∈ [ 주문 ]"
      }
    ]
  },
  {
    "id": 10306,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "1과목",
    "number": 7,
    "title": "함수 종속성에 대한 설명 중 옳은 것은?",
    "options": [
      "일반 속성이 주식별자 전체에 함수 종속 되어 있으면 제2정규형을 만족한다.",
      "이행 함수 종속을 제거하면 제1정규형이 된다.",
      "상품번호가 상품명에 종속되어 있다면, 상품명도 상품번호에 종속된다.",
      "완전 함수 종속이 제거된 상태를 보이스-코드 정규형이라 한다."
    ],
    "correctIndex": 0,
    "explanation": "제2정규형은 부분 함수 종속을 제거하여 일반 속성이 주식별자 전체에 종속되도록 한 상태이다.",
    "_source": "authored"
  },
  {
    "id": 10307,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "1과목",
    "number": 8,
    "title": "아래 설명에 해당하는 식별자는?",
    "options": [
      "외래키",
      "복합 식별자",
      "인조 식별자",
      "자연 식별자"
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "업무적으로 만들어지지는 않지만 원조 식별자가 복잡한 구성을 갖고 있기 때문에 인위적으로 만든 식별자"
      }
    ]
  },
  {
    "id": 10308,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "1과목",
    "number": 9,
    "title": "ERD 표기법(IE·Barker)에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "IE 표기법은 관계선의 끝에 까마귀 발 모양으로 카디널리티를 표시한다.",
      "IE 표기법에서 실선은 식별 관계, Barker 표기법에서는 원(○) 으로 필수 여부를 표기한다.",
      "Barker 표기법은 식별 관계를 점선, 비식별 관계를 실선으로 표기한다.",
      "Barker 표기법은 선택 사양을 실선 점선과 O 기호로 구분한다."
    ],
    "correctIndex": 1,
    "explanation": "IE·Barker 표기법의 실선·점선 의미는 표기 체계마다 다르므로 기재된 내용이 뒤섞여 있다.",
    "_source": "authored"
  },
  {
    "id": 10309,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "1과목",
    "number": 10,
    "title": "NULL 에 대한 설명으로 적절한 것은?",
    "options": [
      "NULL 에는 연산자를 사용할 수 없다.",
      "바커 표기법에서 NULL 허용 여부를 알 수 없다.",
      "NULL 은 미지의 값으로 비교가 불가하다.",
      "IE 표기법에서 NULL 허용 여부를 알 수 있다."
    ],
    "correctIndex": 2,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10310,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 11,
    "title": "CTAS(CREATE TABLE AS SELECT) 에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "데이터만 복사한다.",
      "제약 조건이 모두 복사된다.",
      "기존 테이블의 구조를 기반으로 한다.",
      "일부 제약 조건은 별도로 추가할 수 있다."
    ],
    "correctIndex": 1,
    "explanation": "CTAS 는 NOT NULL 과 컬럼 타입만 전달하며 PK·FK·UNIQUE·CHECK 제약은 복사되지 않는다.",
    "_source": "authored"
  },
  {
    "id": 10311,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 12,
    "title": "뷰(VIEW) 에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "뷰는 조회 속도를 높이기 위해 사용된다.",
      "뷰는 실제 데이터를 저장하지 않는다.",
      "컬럼이 추가될 때 뷰를 변경하지 않아도 응용 프로그램에 영향을 미치지 않는다.",
      "뷰는 다른 테이블의 데이터를 참조한다."
    ],
    "correctIndex": 2,
    "explanation": "뷰 정의 이후 참조 테이블에 컬럼이 추가되면 뷰를 다시 컴파일해야 하며 응용 프로그램의 SELECT * 영향도 발생할 수 있다.",
    "_source": "authored"
  },
  {
    "id": 10312,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 13,
    "title": "데이터베이스의 논리적 업무 최소 단위는?",
    "options": [
      "트랜잭션",
      "레코드",
      "Query",
      "테이블"
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10313,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 14,
    "title": "아래 정규형 정의에 따를 때 값이 나오지 않는 전화번호 형식은?",
    "options": [
      "010-1111-2222",
      "010-3333-4444",
      "02)345-6789",
      "070-1111-2222"
    ],
    "correctIndex": 2,
    "explanation": "괄호 ')' 는 [0-9] 문자 클래스에 포함되지 않으므로 매칭되지 않는다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "PHONE"
        ],
        "rows": [
          [
            "010-1111-2222"
          ],
          [
            "010-3333-4444"
          ],
          [
            "02)345-6789"
          ]
        ]
      },
      {
        "type": "text",
        "content": "정규식 패턴: `^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$`"
      }
    ]
  },
  {
    "id": 10314,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 15,
    "title": "아래 계층형 쿼리에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "계층 구조를 조회한다.",
      "상위 관리자부터 조회한다.",
      "역방향 탐색이다.",
      "순방향 탐색이다."
    ],
    "correctIndex": 2,
    "explanation": "PRIOR emp_no = mgr_no 조건은 현재 행의 emp_no 가 자식 행의 mgr_no 가 되도록 부모→자식 순방향 전개가 된다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- emp_no : 하위 사원 번호, mgr_no : 상위 관리자 번호\nSELECT *\nFROM   EMP\nCONNECT BY PRIOR emp_no = mgr_no;"
      }
    ]
  },
  {
    "id": 10315,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 16,
    "title": "서브쿼리에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "1:M 관계의 경우 서브쿼리 결과는 항상 M 레벨로 집계된다.",
      "서브쿼리의 컬럼은 메인 쿼리의 SELECT 절에서 직접 참조할 수 없다.",
      "스칼라 서브쿼리는 단일 값을 반환해야 한다.",
      "인라인 뷰는 FROM 절에서 사용한다."
    ],
    "correctIndex": 0,
    "explanation": "서브쿼리의 결과 레벨은 서브쿼리의 위치와 관계없이 메인 쿼리 레벨을 따르므로 항상 M 레벨로 집계된다고 할 수 없다.",
    "_source": "authored"
  },
  {
    "id": 10316,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 17,
    "title": "아래 SQL 과 동일한 결과를 반환하는 함수는?",
    "options": [
      "NVL(COL1, 'X')",
      "DECODE(COL1, NULL, 'X')",
      "COALESCE(COL1, 'X')",
      "NULLIF(COL1, 'X')"
    ],
    "correctIndex": 3,
    "explanation": "NULLIF(a, b) 는 두 인자가 같으면 NULL, 다르면 a 를 반환한다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT CASE WHEN COL1 = 'X' THEN NULL ELSE COL1 END FROM T;"
      }
    ]
  },
  {
    "id": 10317,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 18,
    "title": "아래 SQL 중 Oracle 환경에서 결과가 다른 것은?",
    "options": [
      "`SELECT COL1, COL2, COL3 FROM TAB WHERE COL1 < 5;`",
      "`SELECT T.* FROM TAB AS T;`",
      "`SELECT * FROM TAB;`",
      "`SELECT * FROM TAB WHERE COL2 IN (2, 3);`"
    ],
    "correctIndex": 1,
    "explanation": "Oracle 은 FROM 절에서 AS 키워드를 테이블 별칭에 허용하지 않아 ORA-00933 오류가 발생한다.",
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
            "1",
            "2",
            "A"
          ],
          [
            "2",
            "3",
            "B"
          ],
          [
            "3",
            "2",
            "C"
          ],
          [
            "4",
            "3",
            "D"
          ]
        ]
      }
    ]
  },
  {
    "id": 10318,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 19,
    "title": "아래 설명을 SQL 로 작성했을 때 적절하지 않은 것은? (STADIUM 테이블이 두 개의 다른 스키마에 존재한다고 가정)",
    "options": [
      "`SELECT STADIUM.NAME FROM HR.STADIUM, SPORT.STADIUM;` — 테이블 구분 없이 컬럼 참조",
      "`SELECT HR.STADIUM.NAME FROM HR.STADIUM;`",
      "`SELECT S.NAME FROM HR.STADIUM S;`",
      "`SELECT A.NAME FROM HR.STADIUM A, SPORT.STADIUM B;`"
    ],
    "correctIndex": 0,
    "explanation": "동일한 테이블명이 두 스키마에 존재할 때는 스키마나 별칭으로 구분해야 한다.",
    "_source": "authored"
  },
  {
    "id": 10319,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 20,
    "title": "아래 SQL 에 대한 설명으로 적절한 것은?",
    "options": [
      "B 가 NULL 이 아니면 항상 B 값을 반환한다.",
      "A 와 B 가 NULL 일 경우 100 을 반환한다.",
      "A 가 NULL 일 경우에는 언제나 50*B 를 반환한다.",
      "A 가 NULL 이 아닐 경우 A 값을 반환한다."
    ],
    "correctIndex": 3,
    "explanation": "COALESCE 는 왼쪽부터 NULL 이 아닌 첫 번째 값을 반환한다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT COALESCE(A, 50*B, '50') FROM T;"
      }
    ]
  },
  {
    "id": 10320,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 21,
    "title": "아래 두 테이블을 NATURAL JOIN 한 결과로 옳은 것은? (문항 오류로 복수 정답 처리된 문항)",
    "options": [
      "문항 오류로 전원 정답 처리",
      "INNER JOIN 결과와 동일",
      "CROSS JOIN 결과와 동일",
      "공집합"
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "T1",
          "T2"
        ],
        "rows": [
          [
            "KEYA",
            "COL1",
            "COL2",
            "KEYB",
            "COL1",
            "COL2"
          ],
          [
            "1",
            "A",
            "가",
            "1",
            "A",
            "가"
          ],
          [
            "2",
            "A",
            "가",
            "3",
            "C",
            "다"
          ],
          [
            "5",
            "C",
            "다",
            "",
            "",
            ""
          ]
        ]
      }
    ]
  },
  {
    "id": 10321,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 22,
    "title": "아래 INNER JOIN 의 결과에서 중복되어 등장하는 이름으로 옳은 것은?",
    "options": [
      "KIM 이 두 번 반복 출력된다.",
      "LEE 가 두 번 반복 출력된다.",
      "PARK 이 두 번 반복 출력된다.",
      "중복 없이 각 한 번만 출력된다."
    ],
    "correctIndex": 0,
    "explanation": "KIM 의 EMPNO 가 DEPT_EMP 에 두 번 등장하므로 조인 결과에서도 두 번 출력된다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "EMP",
          "DEPT_EMP"
        ],
        "rows": [
          [
            "EMPNO",
            "ENAME",
            "EMPNO",
            "DEPT"
          ],
          [
            "1",
            "KIM",
            "1",
            "10"
          ],
          [
            "2",
            "LEE",
            "1",
            "20"
          ],
          [
            "3",
            "PARK",
            "2",
            "10"
          ]
        ]
      }
    ]
  },
  {
    "id": 10322,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 23,
    "title": "아래 LEFT OUTER JOIN 결과에서 특정 행이 NULL 로 출력되는 이름은?",
    "options": [
      "SMITH 행의 DEPT 컬럼이 NULL 로 출력된다.",
      "KIM 행의 DEPT 컬럼이 NULL 로 출력된다.",
      "LEE 행의 DEPT 컬럼이 NULL 로 출력된다.",
      "모든 행이 NULL 없이 출력된다."
    ],
    "correctIndex": 0,
    "explanation": "SMITH 의 EMPNO 는 DEPT_EMP 에 매칭되는 행이 없어 DEPT 컬럼이 NULL 로 표시된다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "EMP",
          "DEPT_EMP"
        ],
        "rows": [
          [
            "EMPNO",
            "ENAME",
            "EMPNO",
            "DEPT"
          ],
          [
            "1",
            "KIM",
            "1",
            "10"
          ],
          [
            "2",
            "SMITH",
            "3",
            "20"
          ],
          [
            "3",
            "LEE",
            "",
            ""
          ]
        ]
      }
    ]
  },
  {
    "id": 10323,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 24,
    "title": "아래 네 개의 SQL 중 반환 행 수가 가장 많은 것은?",
    "options": [
      "`SELECT CODE FROM TAB1 UNION ALL SELECT CODE FROM TAB2;`",
      "`SELECT * FROM TAB1, TAB2 WHERE TAB1.CODE = TAB2.CODE;`",
      "`SELECT * FROM TAB1, TAB2 WHERE TAB1.PCOLOR IN ('노랑','파랑','검정') OR TAB2.PSIZE IN ('소','중','대');`",
      "`SELECT * FROM TAB1 FULL OUTER JOIN TAB2 ON TAB1.CODE = TAB2.CODE;`"
    ],
    "correctIndex": 2,
    "explanation": "OR 조건이 광범위하므로 카티션 곱 중 조건을 만족하는 행이 9건으로 가장 많다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "TAB1",
          "TAB2"
        ],
        "rows": [
          [
            "CODE",
            "PCOLOR",
            "CODE",
            "PSIZE"
          ],
          [
            "1",
            "빨강",
            "1",
            "소"
          ],
          [
            "2",
            "노랑",
            "2",
            "중"
          ],
          [
            "3",
            "파랑",
            "3",
            "대"
          ],
          [
            "4",
            "검정",
            "4",
            "특대"
          ]
        ]
      }
    ]
  },
  {
    "id": 10324,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 25,
    "title": "제약 조건에 대한 설명 중 적절하지 않은 것은?",
    "options": [
      "PRIMARY KEY 는 NOT NULL 조건을 함께 만족한다.",
      "FOREIGN KEY 는 부모 테이블의 기본키를 참조한다.",
      "UNIQUE KEY 는 NOT NULL 이다.",
      "CHECK 는 특정 조건을 만족하는 값만 허용한다."
    ],
    "correctIndex": 2,
    "explanation": "UNIQUE 제약은 NULL 값을 허용한다.",
    "_source": "authored"
  },
  {
    "id": 10325,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 26,
    "title": "아래 IN 서브쿼리와 동일한 결과를 반환하는 EXISTS 쿼리는?",
    "options": [
      "`SELECT * FROM A WHERE EXISTS (SELECT 1 FROM B WHERE A.성별 = B.성별 AND A.번호 = B.번호);`",
      "`SELECT * FROM A JOIN B ON A.성별 = B.성별;`",
      "`SELECT * FROM A WHERE A.성별 IN (SELECT B.성별 FROM B WHERE A.번호 = B.번호);`",
      "`SELECT * FROM A WHERE 번호 = ALL (SELECT 번호 FROM B WHERE A.성별 = B.성별);`"
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT * FROM A\nWHERE 번호 IN (SELECT 번호 FROM B WHERE A.성별 = B.성별);"
      }
    ]
  },
  {
    "id": 10326,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 27,
    "title": "아래 SQL 의 결과로 옳은 것은?",
    "options": [
      "NULL",
      "0",
      "1",
      "전체 건수"
    ],
    "correctIndex": 1,
    "explanation": "서브쿼리에 NULL 이 포함되어 NOT IN 전체가 UNKNOWN 으로 평가되어 공집합(0건)이 반환된다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "TAB1 (COL1)",
          "TAB2 (COL2)"
        ],
        "rows": [
          [
            "1",
            "1"
          ],
          [
            "2",
            "2"
          ],
          [
            "NULL",
            "3"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT COUNT(*)\nFROM   TAB2\nWHERE  COL2 NOT IN (SELECT COL1 FROM TAB1);"
      }
    ]
  },
  {
    "id": 10327,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 28,
    "title": "아래 SQL 의 결과로 옳은 것은?",
    "options": [
      "A, B, C, NULL",
      "A, B",
      "A, B, NULL",
      "NULL"
    ],
    "correctIndex": 1,
    "explanation": "IN 절의 NULL 은 어떤 값과도 비교되지 않아 결과에 포함되지 않는다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "COL"
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
            "NULL"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT * FROM TAB\nWHERE COL IN ('A', 'B', NULL);"
      }
    ]
  },
  {
    "id": 10328,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 29,
    "title": "아래 데이터에 대한 SQL 의 결과로 옳은 것은?",
    "options": [
      "10, 20, 25",
      "10, 20, NULL",
      "10, 20, 30",
      "10, 20, 20"
    ],
    "correctIndex": 2,
    "explanation": "AVG 함수는 NULL 을 자동으로 제외하므로 나이_그룹=3 에서는 (30+30)/2 = 30 이 산출된다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "나이_그룹",
          "나이"
        ],
        "rows": [
          [
            "1",
            "10"
          ],
          [
            "1",
            "10"
          ],
          [
            "2",
            "20"
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
            "3",
            "30"
          ],
          [
            "3",
            "NULL"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT AVG(나이) AS 평균_나이\nFROM   TAB\nGROUP BY 나이_그룹;"
      }
    ]
  },
  {
    "id": 10329,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 30,
    "title": "아래 결과(COL2 만 NULL 이 있는 집계) 를 출력하기 위한 GROUPING SETS 로 적절한 것은?",
    "options": [
      "`GROUPING SETS( (COL1, COL2), COL2 )`",
      "`GROUPING SETS( COL1, (COL1, COL2) )`",
      "`GROUPING SETS( (), COL1 )`",
      "`ROLLUP( COL1, COL2 )`"
    ],
    "correctIndex": 0,
    "explanation": "(COL1, COL2) 세부 집계와 COL2 별 소계가 함께 필요하므로 해당 GROUPING SETS 조합이 옳다.",
    "_source": "authored"
  },
  {
    "id": 10330,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 31,
    "title": "아래 설명에 해당하는 윈도우 함수는?",
    "options": [
      "CUME_DIST",
      "DENSE_RANK",
      "RANK",
      "PERCENT_RANK"
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "파티션별 윈도우의 전체 건수에서 현재 행보다 작거나 같은 건수에 대한 누적 백분율을 반환한다."
      }
    ]
  },
  {
    "id": 10331,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 32,
    "title": "'연봉은 오름차순, −100 ~ 200 사이의 연봉자 수 구하기' 를 구현한 SQL 로 옳은 것은?",
    "options": [
      "ROWS BETWEEN 100 PRECEDING AND 200 FOLLOWING",
      "RANGE BETWEEN 100 PRECEDING AND 200 FOLLOWING",
      "PARTITION BY DEPT_ID 만 지정",
      "ORDER BY SALARY RANGE BETWEEN 100 PRECEDING AND 200 FOLLOWING (전체 파티션 없음)"
    ],
    "correctIndex": 1,
    "explanation": "연봉 값 기준으로 논리적 범위(RANGE) 를 지정하여 -100~200 범위의 건수를 집계한다.",
    "_source": "authored"
  },
  {
    "id": 10332,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 33,
    "title": "아래 SQL 에서 7780 번 직원의 세 가지 순위 결과로 옳은 것은?",
    "options": [
      "4, 4, 3",
      "3, 3, 3",
      "4, 4, 4",
      "3, 4, 3"
    ],
    "correctIndex": 0,
    "explanation": "SALARY 오름차순 기준 7780 의 ROW_NUMBER 는 4, RANK 는 동점 처리되어 4, DENSE_RANK 는 건너뛰지 않아 3 이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "EMP_ID",
          "SALARY"
        ],
        "rows": [
          [
            "7780",
            "4000"
          ],
          [
            "7781",
            "4000"
          ],
          [
            "7782",
            "3000"
          ],
          [
            "7783",
            "3000"
          ],
          [
            "7784",
            "2000"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT EMP_ID,\n       ROW_NUMBER() OVER (ORDER BY SALARY) AS ROW_NUM,\n       RANK()       OVER (ORDER BY SALARY) AS RANK_NUM,\n       DENSE_RANK() OVER (ORDER BY SALARY) AS DRANK_NUM\nFROM   EMP;"
      }
    ]
  },
  {
    "id": 10333,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 34,
    "title": "강좌번호 100 과 101 을 동시에 수강하는 학번을 조회하는 SQL 로 적절한 것은?",
    "options": [
      "`WHERE 강의번호 = 100 AND 강의번호 = 101`",
      "`SELECT 학번 FROM 수강 WHERE 강의번호=100 INTERSECT SELECT 학번 FROM 수강 WHERE 강의번호=101`",
      "`WHERE 강의번호 IN (100, 101)`",
      "`WHERE 강의번호 = 100 OR 101`"
    ],
    "correctIndex": 1,
    "explanation": "",
    "_source": "authored"
  },
  {
    "id": 10334,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 35,
    "title": "아래 SELF JOIN 을 이용한 등수 쿼리에서 빈칸에 들어갈 내용으로 옳은 것은?",
    "options": [
      "COUNT(*) + 1, T1.점수 < T2.점수",
      "COUNT(*), T1.점수 = T2.점수",
      "COUNT(*) + 1, T1.점수 > T2.점수",
      "COUNT(*) - 1, T1.점수 <= T2.점수"
    ],
    "correctIndex": 0,
    "explanation": "자기보다 점수가 높은 사람 수에 1 을 더하면 순위가 된다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT 이름, 점수,\n       (SELECT COUNT(*) + 1\n        FROM   T1 T2\n        WHERE  T1.점수 < T2.점수) AS 순위\nFROM   T1\nORDER BY 순위;"
      }
    ]
  },
  {
    "id": 10335,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 36,
    "title": "행이 2건인 테이블에 대해 결과가 나머지와 다른 SQL 은?",
    "options": [
      "`SELECT * FROM T WHERE ROWNUM = 1;`",
      "`SELECT * FROM T WHERE ROWNUM = 2;`",
      "`SELECT * FROM T WHERE ROWNUM < 3;`",
      "`SELECT * FROM T WHERE ROWNUM <= 2;`"
    ],
    "correctIndex": 1,
    "explanation": "ROWNUM 은 1부터 순차 부여되므로 첫 행이 ROWNUM=1 을 받고 탈락하면 다음 행에도 1 이 할당되어 2에 도달하지 못한다.",
    "_source": "authored"
  },
  {
    "id": 10336,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 37,
    "title": "아래 SQL 의 동작에 대한 설명으로 옳은 것은?",
    "options": [
      "DEPTNO 가 10 인 사원들의 월급을 10% 인상한다.",
      "`UPDATE ... WHERE DEPTNO = 10` 과 동일한 의미이다.",
      "오류가 발생한다.",
      "DEPARTMENT_ID 가 60 이 아닌 모든 사원의 월급이 NULL 로 갱신된다."
    ],
    "correctIndex": 3,
    "explanation": "WHERE 절이 없는 UPDATE 이므로 모든 행에 대해 서브쿼리가 평가된다. DEPARTMENT_ID=60 조건을 만족하지 못하면 서브쿼리 결과가 NULL 이 된다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "UPDATE EMP_TEST A\nSET SALARY = (SELECT SALARY * 1.1\n              FROM   EMP_TEST B\n              WHERE  A.EMPLOYEE_ID = B.EMPLOYEE_ID\n              AND    B.DEPARTMENT_ID = 60);"
      }
    ]
  },
  {
    "id": 10337,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 38,
    "title": "아래 제약 조건을 가진 테이블에 대해 SQL 을 수행한 뒤 COL2 의 합계는?",
    "options": [
      "500",
      "600",
      "770",
      "850"
    ],
    "correctIndex": 2,
    "explanation": "CHECK·PK 위반 문장은 롤백되고 성공한 INSERT 두 건의 합계가 770 으로 집계된다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- COL1 PK, COL2 CHECK > 500\nINSERT ...;                -- 정상\nUPDATE ...;                -- CHECK 조건 위반\nINSERT ...;                -- PK 조건 위반\nINSERT ...;                -- 정상\n\nSELECT SUM(COL2) FROM T;"
      }
    ]
  },
  {
    "id": 10338,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 39,
    "title": "아래 SQL 의 결과로 옳은 것은?",
    "options": [
      "부서1 18000 / 부서2 11300",
      "부서2 11300 / 부서1 18000",
      "부서1 11300 / 부서2 18000",
      "부서2 18000 / 부서1 11300"
    ],
    "correctIndex": 1,
    "explanation": "총매출 오름차순 정렬이므로 작은 값이 먼저 출력된다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT COL1, SUM(매출) AS 총매출\nFROM   T\nGROUP BY COL1\nORDER BY 총매출;"
      }
    ]
  },
  {
    "id": 10339,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 40,
    "title": "아래 SQL 의 결과로 옳은 것은?",
    "options": [
      "전체 행에서 모두 NULL 반환",
      "각 행별로 정상적인 집계 결과 반환",
      "행별로 오류 발생",
      "B 와 C 행의 SUM 은 NULL 반환"
    ],
    "correctIndex": 3,
    "explanation": "COL2+COL3 중 어느 한쪽이 NULL 이면 덧셈 결과가 NULL 이 되어 SUM 도 NULL 로 반환된다.",
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
            "10",
            "1"
          ],
          [
            "B",
            "20",
            "NULL"
          ],
          [
            "C",
            "NULL",
            "3"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT COL1, MIN(COL2), MAX(COL2), SUM(COL2 + COL3)\nFROM   T\nGROUP BY COL1;"
      }
    ]
  },
  {
    "id": 10340,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 41,
    "title": "빈칸에 들어갈 트랜잭션 제어 명령어로 옳은 것은?",
    "options": [
      "COMMIT",
      "ROLLBACK",
      "SAVEPOINT",
      "GRANT"
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "입력·수정·삭제한 데이터에 대해 전혀 문제가 없다고 판단되었을 경우 (   ) 명령을 수행한다."
      }
    ]
  },
  {
    "id": 10341,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 42,
    "title": "아래 SQL 에서 정렬 결과에 대한 설명으로 옳은 것은?",
    "options": [
      "계좌번호 오름차순 정렬",
      "계좌번호가 NULL 인 행이 먼저 출력",
      "주문번호 기준 내림차순 정렬",
      "계좌번호 내림차순 정렬"
    ],
    "correctIndex": 3,
    "explanation": "",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT *\nFROM   주문 JOIN 주문내역 ON 주문.번호 = 주문내역.번호\nORDER BY 계좌번호 DESC;"
      }
    ]
  },
  {
    "id": 10342,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 43,
    "title": "테이블의 데이터와 종속된 테이블을 함께 삭제하는 명령어는?",
    "options": [
      "TRUNCATE",
      "DROP TABLE ... CASCADE",
      "DELETE",
      "ALTER TABLE"
    ],
    "correctIndex": 1,
    "explanation": "CASCADE 옵션으로 종속 제약 조건 및 관련 객체가 함께 삭제된다.",
    "_source": "authored"
  },
  {
    "id": 10343,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 44,
    "title": "아래 SQL 의 CASE 문 결과로 '취급안함' 이 반환되는 조건은?",
    "options": [
      "분류 가 'A' 인 경우",
      "분류 가 'B' 인 경우",
      "분류 가 'C' 인 경우",
      "분류 가 NULL 인 경우에만"
    ],
    "correctIndex": 2,
    "explanation": "IN 조건을 만족하지 않는 값은 ELSE 절로 분기되어 '취급안함' 이 반환된다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT CASE\n         WHEN 분류 IN ('A','B') THEN '취급'\n         ELSE '취급안함'\n       END\nFROM   T;"
      }
    ]
  },
  {
    "id": 10344,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 45,
    "title": "아래 LIKE 조건의 결과로 옳은 것은?",
    "options": [
      "대문자 'A' 로 시작하는 모든 행을 반환한다.",
      "소문자 'a' 로 시작하는 행도 포함된다.",
      "문자열 어디든 'A' 를 포함하는 행을 반환한다.",
      "정확히 'A' 인 행만 반환한다."
    ],
    "correctIndex": 0,
    "explanation": "",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT * FROM T WHERE COL1 LIKE 'A%';"
      }
    ]
  },
  {
    "id": 10345,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 46,
    "title": "아래 결과를 반환하는 윈도우 함수는?",
    "options": [
      "LAG(COL1) OVER (ORDER BY COL1)",
      "LEAD(COL1) OVER (ORDER BY COL1)",
      "ROW_NUMBER() OVER (ORDER BY COL1)",
      "RANK() OVER (ORDER BY COL1)"
    ],
    "correctIndex": 0,
    "explanation": "LAG 는 이전 행의 값을 반환한다. 첫 행은 이전 값이 없으므로 NULL 이다.",
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
            "1"
          ],
          [
            "3",
            "2"
          ]
        ]
      }
    ]
  },
  {
    "id": 10346,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 47,
    "title": "아래 COUNT 집계 SQL 의 결과로 옳은 것은?",
    "options": [
      "8",
      "9",
      "10",
      "11"
    ],
    "correctIndex": 2,
    "explanation": "COUNT(*) = 5, COUNT(COL1) = 3 (NULL 제외), COUNT(DISTINCT COL2) = 2 (X, Y). 합계 10.",
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
            "X"
          ],
          [
            "B",
            "X"
          ],
          [
            "NULL",
            "Y"
          ],
          [
            "C",
            "Y"
          ],
          [
            "NULL",
            "NULL"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT COUNT(*) + COUNT(COL1) + COUNT(DISTINCT COL2) FROM T;"
      }
    ]
  },
  {
    "id": 10347,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 48,
    "title": "단일 행 함수에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "각 행에 개별적으로 적용된다.",
      "여러 인자를 입력으로 받을 수 있다.",
      "중첩 사용이 가능하다.",
      "GROUP BY 절에는 사용할 수 없다."
    ],
    "correctIndex": 3,
    "explanation": "단일 행 함수는 GROUP BY 절에서도 사용 가능하다.",
    "_source": "authored"
  },
  {
    "id": 10348,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 49,
    "title": "INNER JOIN 에 대한 설명 중 적절하지 않은 것은?",
    "options": [
      "두 테이블에서 조인 조건이 일치하는 행만 반환된다.",
      "ON 절에 조인 조건을 기술할 수 있다.",
      "USING 절로 컬럼명이 같은 경우 간단히 조인할 수 있다.",
      "조인으로 사용되는 컬럼은 반드시 컬럼명이 같아야 한다."
    ],
    "correctIndex": 3,
    "explanation": "컬럼명이 달라도 ON 절로 조인 조건을 명시할 수 있다.",
    "_source": "authored"
  },
  {
    "id": 10349,
    "examSetId": "round-54",
    "examLabel": "제54회 (2024년 8월)",
    "round": 54,
    "subject": "2과목",
    "number": 50,
    "title": "아래 INNER JOIN 결과로 옳은 것은?",
    "options": [
      "가, A 행만 반환",
      "나, B 행이 조건을 만족하지 못해 공집합",
      "T1 의 '다' 행 반환",
      "전체 행 반환"
    ],
    "correctIndex": 1,
    "explanation": "T1.COL2 = T2.COL2 조인 시 T1 의 'A' 행은 T1.COL3=2 이므로 T1.COL3>=3 조건을 만족하지 못하고, T1 의 'B' 행은 T2 에 매칭되지 않아 결과가 공집합이 된다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "T1",
          "T2"
        ],
        "rows": [
          [
            "COL1",
            "COL2",
            "COL3",
            "COL1",
            "COL2"
          ],
          [
            "가",
            "A",
            "2",
            "2",
            "A"
          ],
          [
            "나",
            "B",
            "3",
            "3",
            "C"
          ],
          [
            "다",
            "C",
            "NULL",
            "",
            ""
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT *\nFROM   T1 INNER JOIN T2 ON T1.COL2 = T2.COL2\nWHERE  1 = 1\nAND    T1.COL3 >= 3\nAND    T2.COL2 IN ('A', 'B');"
      }
    ]
  }
];
