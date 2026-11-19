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
    "title": "학생은 여러 동아리에 가입할 수 있고, 한 동아리에는 여러 학생이 있다. 가입할 때마다 가입일과 직책(회원·총무·회장)을 관리해야 한다면, 가입일·직책을 둘 곳과 그 엔터티의 종류로 옳은 것은?",
    "options": [
      "학생 엔터티 / 기본 엔터티",
      "동아리 엔터티 / 기본 엔터티",
      "학생과 동아리 양쪽에 같은 값을 둔다 / 기본 엔터티",
      "동아리가입 엔터티를 새로 만든다 / 관계(교차) 엔터티"
    ],
    "correctIndex": 3,
    "explanation": "가입일과 직책은 학생 한 명만으로도, 동아리 하나만으로도 정해지지 않고 '어느 학생이 어느 동아리에' 라는 조합마다 정해진다. 그래서 M:N 관계를 풀 때 만드는 동아리가입 엔터티에 두어야 하고, 이 엔터티는 학생번호 + 동아리번호 를 주식별자로 갖는 관계(교차) 엔터티다. 정답은 ④번이다. ①·② 는 한 학생이 여러 동아리에, 한 동아리에 여러 학생이 있어 값이 여러 개가 되므로 둘 수 없다. ③ 은 같은 값을 두 곳에 두는 중복이고, 어느 동아리의 직책인지도 알 수 없다.",
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
    "explanation": "FK 에 `ON DELETE CASCADE` 가 설정되면 부모(학과) 행 삭제 시 그 행을 참조하던 자식(학생) 행이 자동으로 함께 삭제된다. ② 는 ON DELETE 가 자식 행만 단독으로 지우는 정책이 아니라는 점에서 오답, ③ 은 `ON DELETE SET NULL` 의 동작이고, ④ 는 `ON DELETE RESTRICT/NO ACTION` 의 동작이다. 그래서 CS 학과 한 행과 CS 학생 두 명(1001, 1002)이 지워지고 EE 학과와 1003 박민수만 남는다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "학생·학과 ERD — 학과 1, 학생 0..N (FK: 학생.학과코드 → 학과.학과코드, ON DELETE CASCADE)",
        "mermaid": "erDiagram\n    학과 ||..o{ 학생 : \"소속\"\n    학과 {\n        string 학과코드 PK\n        string 학과명\n    }\n    학생 {\n        string 학번 PK\n        string 이름\n        string 학과코드 FK\n    }"
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
    "title": "아래 상황에서 보장되는 데이터 독립성과, 변경이 일어난 스키마를 올바르게 짝지은 것은?",
    "options": [
      "논리적 독립성 — 개념 스키마 변경",
      "물리적 독립성 — 내부 스키마 변경",
      "논리적 독립성 — 내부 스키마 변경",
      "물리적 독립성 — 개념 스키마 변경"
    ],
    "correctIndex": 1,
    "explanation": "파티션과 인덱스는 디스크에 데이터를 어떻게 저장할지를 다루는 내부 스키마의 영역이다. 내부 스키마가 바뀌어도 개념·외부 스키마가 영향을 받지 않는 성질을 물리적 독립성이라 한다. 반대로 개념 스키마(테이블 구조)가 바뀌어도 응용 프로그램이 영향을 받지 않는 것은 논리적 독립성이다. ① 과 ④ 는 바뀐 층(내부)을 개념 스키마로 잘못 보았고, ③ 은 내부 스키마 변경에 논리적 독립성을 짝지었다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "운영 중인 데이터베이스에서 ORDERS 테이블을 월별 파티션으로 나누고 인덱스를 새로 추가했다. 이 작업 뒤에도 기존 응용 프로그램의 SQL 은 전혀 수정하지 않았다."
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
    "explanation": "개념적 데이터 모델링은 추상화 수준이 가장 높아 업무 중심으로 표현되며 세부 구현(저장 구조·인덱스·튜닝 등)은 다루지 않는다. ② 물리적 저장 구조, ③ 성능 튜닝, ④ 인덱스 설계는 물리적 데이터 모델링에서 다룬다.",
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
    "explanation": "다른 엔터티의 부모 역할을 하면서 업무에 원래부터 존재해 독립적으로 생성되는 엔터티는 기본 엔터티이다. ② 중심 엔터티는 기본 엔터티에서 파생되어 업무의 중심 역할을 한다. ① 행위 엔터티는 두 개 이상의 엔터티로부터 발생하고, ④ 관계 엔터티는 M:N 을 풀 때 만드는 교차 엔터티다.",
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
    "explanation": "한 엔터티는 여러 인스턴스를 가지고(1:M), 한 인스턴스는 두 개 이상의 속성을 가지며(1:M), 한 속성은 하나의 속성값만 가진다(1:1). 따라서 ④ 가 옳다. ① 은 인스턴스·속성도 하나뿐인 것으로, ② 는 속성이 여러 값을 갖는 것으로, ③ 은 관계 방향을 반대로(M:1) 표현했다.",
    "_source": "authored"
  },
  {
    "id": 10406,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "1과목",
    "number": 7,
    "title": "아래 사원 테이블 정의에서 ㉠ 사번, ㉡ 주민번호, ㉢ 부서코드 를 키 종류로 가장 정확하게 짝지은 것은?",
    "options": [
      "기본키, 외래키, 대체키",
      "기본키, 대체키, 외래키",
      "후보키, 기본키, 외래키",
      "기본키, 대체키, 후보키"
    ],
    "correctIndex": 1,
    "explanation": "후보키는 행을 유일하게 구별하는 최소 칼럼 집합이고, 그중 하나를 골라 기본키로 쓴다. 사번과 주민번호는 둘 다 후보키인데 사번을 기본키로 정했으니, 남은 주민번호는 대체키다. 부서코드는 다른 테이블(부서)의 기본키를 가리키는 외래키다. 정답은 ②번이다. ① 은 주민번호와 부서코드를 바꿔 본 것, ③ 은 PRIMARY KEY 로 정한 칼럼을 기본키로 보지 않은 것, ④ 는 여러 사원이 같은 값을 가질 수 있는 부서코드를 후보키로 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "CREATE TABLE 사원 (\n  사번     CHAR(5)  PRIMARY KEY,\n  주민번호 CHAR(13) NOT NULL UNIQUE,\n  부서코드 CHAR(3)\n    REFERENCES 부서(부서코드),\n  이름     VARCHAR2(20)\n);"
      }
    ]
  },
  {
    "id": 10407,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "1과목",
    "number": 8,
    "title": "아래 DDL 을 IE 표기법 ERD 로 그릴 때 옳은 것은? ('㉠ 주문–주문상세 관계선, ㉡ 고객–주문 관계선, ㉡ 의 고객 쪽 끝에 동그라미가 붙는지' 순서)",
    "options": [
      "점선, 실선, 붙음",
      "실선, 실선, 붙지 않음",
      "실선, 점선, 붙음",
      "실선, 점선, 붙지 않음"
    ],
    "correctIndex": 2,
    "explanation": "부모의 기본키가 자식 기본키의 일부가 되면 식별자 관계로 실선, 자식의 일반 칼럼으로만 들어가면 비식별자 관계로 점선을 쓴다. 주문상세의 기본키에 주문번호가 들어 있으니 ㉠ 은 실선, 주문의 기본키는 주문번호뿐이고 고객번호는 일반 칼럼이니 ㉡ 은 점선이다. 고객번호가 NULL 을 허용해 고객 없는 주문이 있을 수 있으므로 고객 쪽 끝에 선택을 뜻하는 동그라미가 붙는다. 정답은 ③번이다. ① 은 실선·점선을 반대로 본 것, ② 는 외래키만 있으면 모두 식별자 관계라고 본 것, ④ 는 NULL 허용을 놓친 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "CREATE TABLE 주문 (\n  주문번호 CHAR(10) PRIMARY KEY,\n  고객번호 CHAR(5)  NULL\n    REFERENCES 고객(고객번호)\n);\nCREATE TABLE 주문상세 (\n  주문번호 CHAR(10)\n    REFERENCES 주문(주문번호),\n  순번     NUMBER(3),\n  수량     NUMBER(5),\n  PRIMARY KEY (주문번호, 순번)\n);"
      }
    ]
  },
  {
    "id": 10408,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "1과목",
    "number": 9,
    "title": "아래 ERD 를 관계형 테이블로 옮길 때, M:N 관계를 모두 해소한 뒤의 전체 테이블 수는?",
    "options": [
      "4개",
      "6개",
      "7개",
      "8개"
    ],
    "correctIndex": 2,
    "explanation": "관계선 양쪽 끝이 모두 까마귀발이면 M:N 관계다. 이 ERD 에는 교수-학생(지도), 학생-과목(이수), 교수-과목(강의) 세 개가 있다. 관계형 테이블은 M:N 을 그대로 담을 수 없어 관계마다 두 부모의 주식별자를 물려받은 교차 테이블(예: 지도, 수강, 강의)을 하나씩 만든다. 학과-학생은 1:N 이라 학생 테이블의 학과코드(FK)로 표현되고 별도 테이블이 필요 없다. 따라서 엔터티 4개 + 교차 테이블 3개 = 7개다(③). ① 은 엔터티 수만 센 값, ② 는 M:N 관계 하나를 놓친 값, ④ 는 1:N 관계까지 별도 테이블로 만든다고 본 값이다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "학과·학생·교수·과목 ERD",
        "mermaid": "erDiagram\n    학과 ||--o{ 학생 : \"소속\"\n    교수 }o--o{ 학생 : \"지도\"\n    학생 }o--o{ 과목 : \"이수\"\n    교수 }o--o{ 과목 : \"강의\"\n    학과 {\n        string 학과코드 PK\n        string 학과명\n    }\n    학생 {\n        string 학번 PK\n        string 이름\n        string 학과코드 FK\n    }\n    교수 {\n        string 교수번호 PK\n        string 교수명\n    }\n    과목 {\n        string 과목코드 PK\n        string 과목명\n    }"
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
    "title": "아래 수강 테이블(기본키: 학번 + 과목코드)에는 이행 함수 종속이 없다. 이 테이블의 정규형에 대한 판단으로 옳은 것은?",
    "options": [
      "부분 종속이 있어 제2정규형이 아니므로, 이행 종속이 없어도 제3정규형이 아니다.",
      "이행 종속이 없으므로 제3정규형이다.",
      "제3정규형은 이행 종속만 보므로 제3정규형이지만, 제2정규형은 아니다.",
      "과목코드 → 과목명 은 이행 종속이므로 제2정규형까지만 만족한다."
    ],
    "correctIndex": 0,
    "explanation": "정규형은 단계가 쌓이는 구조라, 제3정규형이 되려면 먼저 제2정규형을 만족해야 한다. 과목명이 기본키 일부인 과목코드에만 종속되는 부분 함수 종속이 있어 제2정규형이 아니고, 그래서 이행 종속이 없더라도 제3정규형이 될 수 없다. 이 테이블은 제1정규형까지 만족한다. 정답은 ①번이다. ②·③ 은 아래 단계를 건너뛰고 이행 종속만 본 것, ④ 는 기본키 일부에 대한 부분 종속을 이행 종속으로 잘못 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "함수 종속",
        "headers": [
          "결정자",
          "종속 속성"
        ],
        "rows": [
          [
            "학번 + 과목코드",
            "성적"
          ],
          [
            "과목코드",
            "과목명"
          ]
        ]
      }
    ]
  },
  {
    "id": 10410,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 11,
    "title": "아래 T 테이블에 대한 SQL 의 결과로 옳은 것은?",
    "options": [
      "모든 행 반환",
      "COL1 = NULL, COL2 = A",
      "COL1 = 3, COL2 = C",
      "COL1 = 4, COL2 = D"
    ],
    "correctIndex": 3,
    "explanation": "COL1 이 NULL 인 첫 행은 `COL1 <= 3` 이 UNKNOWN, `COL2 IS NULL` 이 FALSE 이므로 OR 결과가 UNKNOWN 이고 NOT UNKNOWN 도 UNKNOWN 이라 조건을 만족하지 못해 제외된다. COL1 이 1·3 인 행은 `COL1 <= 3` 이 참이므로 NOT 에 의해 제외된다. COL1 이 4 인 행만 두 조건이 모두 거짓이어서 NOT 이 참이 되므로 (4, D) 한 행이 반환된다. ① 은 NOT 의 효과를 무시한 결과, ② 는 UNKNOWN 을 참으로 본 결과, ③ 은 COL1 <= 3 인 3 을 남긴 결과다.",
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
        "code": "SELECT COL1, COL2\nFROM   T\nWHERE  NOT (COL1 <= 3 OR COL2 IS NULL);"
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
    "explanation": "ORDER BY ID 이므로 RANGE 의 ±2 는 'ID 값' 기준 범위. ID=1 의 윈도우: ID ∈ [-1, 3] = {1, 2, 3} → VAL 합 3+4+5 = 12. ID=2: ID ∈ [0, 4] = {1, 2, 3, 4} → 3+4+5+6 = 18. ID=3: ID ∈ [1, 5] = {1, 2, 3, 4} → 18. ID=4: ID ∈ [2, 6] = {2, 3, 4} → 4+5+6 = 15. 결과 12, 18, 18, 15 → ③ 정답. ② 는 2 PRECEDING AND CURRENT ROW(앞 2행 + 지금 행)로 본 값, ④ 는 전체 합계를 붙인 값이다.",
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
    "correctIndex": 0,
    "explanation": "루트(START WITH 매니저 IS NULL)에서 시작해 부모 행의 사원 값과 자식 행의 매니저 값이 일치하는 행을 따라 내려가는 순방향 전개이므로 PRIOR 는 사원 앞(ㄱ)에 온다. 즉 CONNECT BY PRIOR 사원 = 매니저 형태이다. ② ㄴ(매니저 앞)에 오면 역방향이라 루트 한 행만 나오고, ③ PRIOR 는 한쪽에만 붙이며, ④ PRIOR 가 없으면 부모·자식 방향을 정하지 못한다.",
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
    "explanation": "NVL(금액, 0) 적용 후 출력값: ID=1 → 1000, ID=2 → 0 (NVL 적용), ID=3 → 3000, ID=4 → 0 (NVL 적용). 가장 큰 값은 ID=3 의 3000. 정답 ③. ① 1000 은 두 번째로 큰 값, ② 와 ④ 는 NVL 로 0 이 된 행이다.",
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
    "explanation": "CONNECT BY 절에서 PRIOR 가 붙은 쪽이 이전(부모) 행이 된다. PRIOR 사원번호 = 매니저번호 는 부모에서 자식으로 내려가는 순방향, PRIOR 매니저번호 = 사원번호 는 자식에서 부모로 올라가는 역방향이다. ② START WITH 는 시작 행, ③ CONNECT BY 는 연결 조건을 쓰는 절, ④ LEVEL 은 깊이를 나타낼 뿐 방향을 정하지 않는다. 정답은 ① 이다.",
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
    "explanation": "트랜잭션의 ACID 중 고립성(Isolation)에 대한 설명이다. 동시 실행되는 다른 트랜잭션의 영향을 받지 않고 독립적으로 수행됨을 보장한다. ① 원자성은 전부 되거나 전부 취소, ② 일관성은 규칙에 맞는 상태 유지, ④ 지속성은 커밋 결과의 영구 보존이다.",
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
    "title": "ID 가 1, 2, 3 인 3행짜리 T 테이블에 대한 SQL ㉠~㉣ 의 결과(COUNT)로 옳은 것은? (Oracle 기준)",
    "options": [
      "0, 0, 3, 3",
      "3, 0, 0, 3",
      "3, 0, 3, 3",
      "0, 0, 0, 3"
    ],
    "correctIndex": 1,
    "explanation": "EXISTS 는 서브쿼리가 행을 하나라도 돌려주는지만 본다. ㉠ 의 서브쿼리는 값이 NULL 인 행 하나를 돌려주므로 참이 되어 3행이 모두 나온다. IN 과 NOT IN 은 값을 비교한다. ㉡ 의 ID = NULL 은 UNKNOWN 이라 0, ㉢ 의 ID <> NULL 도 UNKNOWN 이라 역시 0 이다. ㉣ 의 서브쿼리는 행이 없으니 NOT EXISTS 가 참이 되어 3 이다. 정답은 ②번이다. ① 은 EXISTS 가 NULL 값을 보고 거짓이 된다고 본 것, ③ 은 NOT IN 이 NULL 과 다르니 모두 통과한다고 본 것, ④ 는 두 가지를 모두 잘못 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT COUNT(*) FROM T          -- ㉠\nWHERE  EXISTS (SELECT NULL FROM DUAL);\n\nSELECT COUNT(*) FROM T          -- ㉡\nWHERE  ID IN (SELECT NULL FROM DUAL);\n\nSELECT COUNT(*) FROM T          -- ㉢\nWHERE  ID NOT IN (SELECT NULL\n                  FROM   DUAL);\n\nSELECT COUNT(*) FROM T          -- ㉣\nWHERE  NOT EXISTS (SELECT 1 FROM DUAL\n                   WHERE  1 = 0);"
      }
    ]
  },
  {
    "id": 10418,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 19,
    "title": "아래 SQL 의 RNK 컬럼 값을 위에서부터 순서대로 나열한 것은?",
    "options": [
      "1, 2, 1, 2",
      "1, 1, 1, 1",
      "1, 2, 3, 4",
      "1, 1, 2, 2"
    ],
    "correctIndex": 0,
    "explanation": "PARTITION BY DEPT 는 부서별로 순위를 따로 매긴다. DEPT 10 안에서 300 이 1 위, 200 이 2 위이고 DEPT 20 안에서도 500 이 1 위, 400 이 2 위가 되어 순위가 부서마다 1 부터 다시 시작한다. PARTITION BY 가 없었다면 전체를 한 묶음으로 보아 1, 2, 3, 4 가 된다. ② 는 같은 부서 안의 급여 차이를 무시한 결과, ④ 는 부서 번호를 기준으로 DENSE_RANK 를 매긴 것과 같은 결과다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP 테이블",
        "headers": [
          "DEPT",
          "SAL"
        ],
        "rows": [
          [
            "10",
            "300"
          ],
          [
            "10",
            "200"
          ],
          [
            "20",
            "500"
          ],
          [
            "20",
            "400"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT DEPT, SAL,\n       RANK() OVER (PARTITION BY DEPT ORDER BY SAL DESC) AS RNK\nFROM   EMP;"
      }
    ]
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
      "SELECT — DML",
      "CREATE — DDL",
      "GRANT — DCL"
    ],
    "correctIndex": 0,
    "explanation": "INSERT 는 DML 이므로 DCL 과 짝지어지지 않는다. ② SELECT 도 SQLD 에서는 DML(데이터 조회)로 분류한다. ③ CREATE 는 DDL, ④ GRANT 는 DCL 로 맞게 짝지어졌다.",
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
    "explanation": "첫 번째 결과 집합에서 두 번째 결과 집합에 존재하는 행을 제외하는 차집합 연산자는 EXCEPT(Oracle 의 MINUS) 이다. ① UNION 은 합집합, ② UNION ALL 은 중복을 포함한 합집합, ③ INTERSECT 는 교집합이다.",
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
    "explanation": "LIKE 패턴에서 `_` 는 임의의 한 문자, `%` 는 0개 이상의 임의 문자를 의미한다. 따라서 \"세 번째 문자가 'L'\" 을 표현하려면 앞에 `_` 두 개를 두어 임의의 두 문자를 건너뛴 뒤 'L', 그 뒤에 `%` 로 임의 길이 문자열을 잇는 `'__L%'` 가 된다. ① 은 'L' 로 시작, ② 는 'L' 로 끝남, ④ 는 'L' 로 시작하는 세 글자 이상 단어를 찾는 패턴이라 의미가 다르다. 표에서 '__L%' 에 맞는 단어는 HELLO, MILK, GULF 다.",
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
    "explanation": "COALESCE(C1, C2, C3) 는 행마다 처음 NULL 이 아닌 값을 고른다. 1행은 C1 = 1, 2행은 C1 이 NULL 이라 C2 = 2, 3행은 C1·C2 가 NULL 이라 C3 = 3 이다. SUM 은 1 + 2 + 3 = 6 이다(③). ② 1 은 C1 만 더한 값, ④ 14 는 NULL 을 빼고 모든 칸을 더한 값(1+2+3+2+3+3)이다.",
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
    "title": "아래 SQL 이 오류를 일으키는 이유로 가장 적절한 것은?",
    "options": [
      "WHERE 절은 GROUP BY 보다 먼저 평가되어 집계 함수를 쓸 수 없다",
      "GROUP BY 절에 집계 함수를 쓸 수 없다",
      "SELECT 절의 별칭은 WHERE 절에서 참조할 수 없다",
      "ORDER BY 절은 별칭을 참조할 수 없다"
    ],
    "correctIndex": 0,
    "explanation": "SQL 은 FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY 순으로 평가된다. WHERE 는 그룹이 만들어지기 전에 행을 거르는 단계라 집계 함수를 쓸 수 없고, 집계 결과로 걸러내려면 GROUP BY 뒤의 HAVING 을 써야 한다. ② GROUP BY 절에는 집계 함수가 없고, ③ 이 SQL 은 WHERE 에서 별칭을 쓰지 않았으며, ④ ORDER BY 는 별칭을 쓸 수 있다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT DEPTNO, SUM(SAL) AS 합계\nFROM   EMP\nWHERE  SUM(SAL) > 1000\nGROUP BY DEPTNO;"
      }
    ]
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
    "explanation": "제품과 생산라인은 교차 엔터티 '생산제품' 을 거쳐 M:N 으로 연결된다. 중간 엔터티를 건너뛰고 두 테이블을 직접 조인하면 조인 조건이 성립할 키가 없어 모든 행이 곱해지는 카티션 곱(CROSS JOIN) 이 발생한다. ① 짝을 맞출 조인 조건이 없어 정상 조인이 아니고, ② 중복 제거는 일어나지 않으며, ③ 공집합이 아니라 모든 조합이 나온다.",
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
    "title": "아래 회원·주문 테이블에서 주문한 이력이 없는 회원(C3, C4)을 조회하려고 작성한 SQL ㉠~㉣ 중, C3 와 C4 가 정확히 조회되는 것만 모두 고른 것은?",
    "options": [
      "㉡, ㉢",
      "㉠, ㉡, ㉢",
      "㉡, ㉢, ㉣",
      "㉠, ㉡, ㉢, ㉣"
    ],
    "correctIndex": 2,
    "explanation": "주문 테이블에 회원번호가 NULL 인 O4 가 있다는 점이 핵심이다. ㉠ 의 NOT IN 은 '회원번호 <> C1 AND 회원번호 <> C2 AND 회원번호 <> NULL' 과 같은데, NULL 과의 비교는 UNKNOWN 이라 조건 전체가 참이 될 수 없어 한 행도 나오지 않는다. ㉣ 은 서브쿼리에서 NULL 을 걸러 내 NOT IN 이 C1·C2 와만 비교하므로 C3·C4 가 나온다. ㉡ NOT EXISTS 는 회원마다 같은 회원번호의 주문이 있는지만 보므로 NULL 의 영향을 받지 않고, ㉢ 은 LEFT OUTER JOIN 으로 짝이 없는 회원의 주문 칼럼이 NULL 로 채워진 행만 고르므로 역시 C3·C4 다. 정답은 ③번이다. ① 은 ㉣ 처럼 NULL 을 걸러 낸 NOT IN 도 쓸 수 있다는 점을 놓친 것, ② 와 ④ 는 서브쿼리 결과에 NULL 이 섞인 NOT IN 이 C3·C4 를 돌려준다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "회원",
        "headers": [
          "회원번호",
          "회원명"
        ],
        "rows": [
          [
            "C1",
            "김하늘"
          ],
          [
            "C2",
            "이바다"
          ],
          [
            "C3",
            "박구름"
          ],
          [
            "C4",
            "최별"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "주문",
        "headers": [
          "주문번호",
          "회원번호"
        ],
        "rows": [
          [
            "O1",
            "C1"
          ],
          [
            "O2",
            "C1"
          ],
          [
            "O3",
            "C2"
          ],
          [
            "O4",
            "NULL"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT 회원번호\nFROM   회원\nWHERE  회원번호 NOT IN (\n  SELECT 회원번호\n  FROM   주문);\n\n-- ㉡\nSELECT M.회원번호\nFROM   회원 M\nWHERE  NOT EXISTS (\n  SELECT 1\n  FROM   주문 O\n  WHERE  O.회원번호 = M.회원번호);\n\n-- ㉢\nSELECT M.회원번호\nFROM   회원 M\n       LEFT OUTER JOIN 주문 O\n       ON M.회원번호 = O.회원번호\nWHERE  O.주문번호 IS NULL;\n\n-- ㉣\nSELECT 회원번호\nFROM   회원\nWHERE  회원번호 NOT IN (\n  SELECT 회원번호\n  FROM   주문\n  WHERE  회원번호 IS NOT NULL);"
      }
    ]
  },
  {
    "id": 10427,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 28,
    "title": "아래와 같이 부서·사원 테이블이 있을 때 ㉠~㉢ 을 순서대로 실행한 결과로 옳은 것은? ('㉠ 결과, ㉡ 뒤 사원 행 수, ㉢ 결과' 순서, Oracle 기준)",
    "options": [
      "성공, 0, 오류",
      "오류, 0, 성공",
      "오류, 3, 오류",
      "오류, 3, 성공"
    ],
    "correctIndex": 3,
    "explanation": "다른 테이블의 외래키가 참조하고 있는 테이블은 그냥 DROP 할 수 없어 ㉠ 은 오류다. CASCADE CONSTRAINTS 를 붙이면 부서를 참조하던 외래키 제약만 함께 지우고 부서 테이블을 삭제한다. 사원의 데이터는 건드리지 않으므로 3행 그대로다. 외래키가 사라졌으니 없는 부서 99 를 넣는 ㉢ 도 성공한다. 정답은 ④번이다. ① 은 부모를 지우면 자식이 함께 지워진다고 본 것, ② 는 CASCADE CONSTRAINTS 가 자식 행까지 지운다고 본 것, ③ 은 외래키가 남아 있다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "CREATE TABLE 부서 (\n  부서번호 NUMBER PRIMARY KEY\n);\nCREATE TABLE 사원 (\n  사번     NUMBER PRIMARY KEY,\n  부서번호 NUMBER REFERENCES 부서\n);\n-- 부서: 10, 20\n-- 사원: 3명(부서 10, 10, 20)\n\nDROP TABLE 부서;                 -- ㉠\nDROP TABLE 부서\n  CASCADE CONSTRAINTS;           -- ㉡\nINSERT INTO 사원\nVALUES (4, 99);                  -- ㉢"
      }
    ]
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
    "explanation": "권한은 GRANT 로 부여하고 REVOKE 로 회수한다. ROLE 은 권한의 묶음이며 동일하게 GRANT·REVOKE 로 관리한다. ① CREATE·DROP 은 DDL, ② INSERT·DELETE 는 DML, ④ COMMIT·ROLLBACK 은 TCL 이다.",
    "_source": "authored"
  },
  {
    "id": 10429,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 30,
    "title": "아래 SQL 로 복사 테이블을 만든 뒤 ㉠~㉣ 을 각각 실행할 때 오류가 발생하는 것만 모두 고른 것은? (Oracle 기준)",
    "options": [
      "㉡",
      "㉠, ㉡",
      "㉠, ㉡, ㉣",
      "㉡, ㉣"
    ],
    "correctIndex": 0,
    "explanation": "CTAS 로 만든 테이블에는 칼럼 구조와 데이터, 그리고 NOT NULL 제약만 넘어온다. PRIMARY KEY, CHECK, DEFAULT 는 넘어오지 않는다. 그래서 ㉠ 은 ID 1 이 이미 있어도 PK 가 없어 들어가고, ㉢ 은 등급이 기본값 'B' 가 아닌 NULL 로 들어가며, ㉣ 은 CHECK 가 없어 'Z' 가 들어간다. NOT NULL 이 남아 있는 이름에 NULL 을 넣는 ㉡ 만 오류다. 정답은 ①번이다. ② 는 PK 도 복사된다고 본 것, ③ 은 PK 와 CHECK 가 모두 복사된다고 본 것, ④ 는 CHECK 가 복사된다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "CREATE TABLE 원본 (\n  ID   NUMBER       PRIMARY KEY,\n  이름 VARCHAR2(10) NOT NULL,\n  등급 CHAR(1) DEFAULT 'B'\n       CHECK (등급 IN ('A', 'B'))\n);\nINSERT INTO 원본 VALUES (1, '김', 'A');\nCREATE TABLE 복사 AS\n  SELECT * FROM 원본;\n\n-- ㉠\nINSERT INTO 복사 VALUES (1, '이', 'A');\n-- ㉡\nINSERT INTO 복사 VALUES (2, NULL, 'A');\n-- ㉢\nINSERT INTO 복사 (ID, 이름)\n  VALUES (3, '박');\n-- ㉣\nINSERT INTO 복사 VALUES (4, '최', 'Z');"
      }
    ]
  },
  {
    "id": 10430,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 31,
    "title": "월급이 1500, 2000, 3000, 2500 인 4행짜리 사원 테이블에 대한 SQL 의 결과(P, Q, R, S)로 옳은 것은?",
    "options": [
      "9000, 4, 2250, 1875",
      "7500, 4, 1875, 1875",
      "7500, 3, 1875, 2500",
      "7500, 3, 2500, 1875"
    ],
    "correctIndex": 3,
    "explanation": "ELSE 가 없는 CASE 는 조건에 맞지 않으면 NULL 을 돌려준다. 1500 인 행은 NULL 이 되고, 나머지 2000·3000·2500 만 값이 남는다. 집계 함수는 NULL 을 빼므로 P = 7500, Q = 3, R = 7500 / 3 = 2500 이다. S 는 ELSE 0 이라 1500 행도 0 으로 계산에 들어가 7500 / 4 = 1875 다. 정답은 ④번이다. ① 은 CASE 가 원래 값을 그대로 돌려준다고 본 것, ② 는 NULL 도 COUNT·AVG 에 들어간다고 본 것, ③ 은 R 과 S 를 바꿔 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT\n  SUM(CASE WHEN 월급 >= 2000\n      THEN 월급 END)          AS P,\n  COUNT(CASE WHEN 월급 >= 2000\n      THEN 월급 END)          AS Q,\n  AVG(CASE WHEN 월급 >= 2000\n      THEN 월급 END)          AS R,\n  AVG(CASE WHEN 월급 >= 2000\n      THEN 월급 ELSE 0 END)   AS S\nFROM 사원;"
      }
    ]
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
      "SELECT SUM(COL1) FROM T;",
      "SELECT SUM(NVL(COL1, 0)) FROM T;",
      "SELECT AVG(COL1) * COUNT(COL1) FROM T;",
      "SELECT AVG(COL1) * COUNT(*) FROM T;"
    ],
    "correctIndex": 3,
    "explanation": "집계 함수는 NULL 을 제외하고 계산한다. ① SUM(COL1) 은 10 + 20 = 30. ② NVL 로 NULL 을 0 으로 바꿔도 합은 30 으로 같다. ③ AVG(COL1) 은 NULL 을 뺀 두 건의 평균이라 15, COUNT(COL1) 도 NULL 을 뺀 2 이므로 15 × 2 = 30. ④ 는 COUNT(*) 가 NULL 행까지 포함한 3 이므로 15 × 3 = 45 가 되어 나머지와 다르다.",
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
            "10"
          ],
          [
            "(NULL)"
          ],
          [
            "20"
          ]
        ]
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
    "explanation": "SQL 은 원하는 결과를 기술하면 처리 방법은 DBMS 가 결정하는 비절차적·선언적 언어다. 집합 단위로 데이터를 다루고 정해진 구문 구조를 따르므로 ②③④ 는 SQL 의 특징이 맞다.",
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
      "5000",
      "9500",
      "14500",
      "NULL"
    ],
    "correctIndex": 1,
    "explanation": "집합 연산자는 괄호가 없으면 위에서부터 차례로 계산한다. A 의 MAX 5000 과 B 의 MAX 5000 을 UNION 하면 중복이 제거되어 {5000} 한 행이 되고, 여기에 C 의 MIN 을 UNION ALL 로 붙인다. MIN 은 NULL 을 건너뛰므로 C 의 MIN 은 4500 이다. 결과는 {5000, 4500} 이고 합은 9500 이다(②). ③ 14500 은 첫 UNION 도 중복을 남긴다고 본 값(5000 + 5000 + 4500), ① 5000 은 C 의 MIN 이 NULL 이 되어 SUM 에서 빠진다고 본 값, ④ NULL 은 거기에 더해 NULL 이 섞이면 SUM 도 NULL 이 된다고 본 값이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "사원 테이블",
        "headers": [
          "사원ID",
          "부서",
          "연봉"
        ],
        "rows": [
          [
            "1",
            "A",
            "5000"
          ],
          [
            "2",
            "A",
            "4200"
          ],
          [
            "3",
            "B",
            "5000"
          ],
          [
            "4",
            "B",
            "3925"
          ],
          [
            "5",
            "C",
            "NULL"
          ],
          [
            "6",
            "C",
            "4500"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT SUM(연봉) FROM (\n  SELECT MAX(연봉) AS 연봉 FROM 사원 WHERE 부서 = 'A'\n  UNION\n  SELECT MAX(연봉) FROM 사원 WHERE 부서 = 'B'\n  UNION ALL\n  SELECT MIN(연봉) FROM 사원 WHERE 부서 = 'C'\n);"
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
      "AVG(컬럼) 과 AVG(NVL(컬럼, 0)) 은 NULL 처리 방식이 달라 결과가 다를 수 있다."
    ],
    "correctIndex": 3,
    "explanation": "AVG(컬럼) 은 NULL 행을 빼고 값이 있는 행만으로 평균을 구하지만, AVG(NVL(컬럼, 0)) 은 NULL 을 0 으로 바꿔 분모에도 포함하므로 결과가 다를 수 있다(④). 예를 들어 10, 20, NULL 이면 AVG 는 15, NVL 을 쓰면 10 이다. ①②③ 은 이 처리 방식을 반대로 설명했다. ※ 값이 모두 0 인 경우처럼 두 결과가 우연히 같을 수도 있어, ④ 를 '다를 수 있다' 로 다듬었다.",
    "_source": "authored"
  },
  {
    "id": 10436,
    "examSetId": "round-52",
    "examLabel": "제52회 (2024년 3월)",
    "round": 52,
    "subject": "2과목",
    "number": 37,
    "title": "아래 세 테이블에 대한 SQL ㉠, ㉡, ㉢ 의 결과로 옳은 것은? ('㉠ 행 수, ㉡ 행 수, ㉢ 결과' 순서, Oracle 기준)",
    "options": [
      "0, 2, 오류",
      "6, 2, 오류",
      "오류, 2, 2행",
      "6, 2, 2행"
    ],
    "correctIndex": 1,
    "explanation": "NATURAL JOIN 은 이름이 같은 칼럼을 모두 조인 조건으로 쓴다. A 와 B 는 같은 이름의 칼럼이 하나도 없어 조건이 없는 셈이라, CROSS JOIN 처럼 2 × 3 = 6행이 된다. A 와 C 는 ID 로 조인되어 1, 2 가 맞는 2행이다. Oracle 은 NATURAL JOIN 의 공통 칼럼 앞에 테이블 이름이나 별칭을 붙이지 못하게 하므로 A.ID 라고 쓴 ㉢ 은 오류다(ID 라고만 써야 한다). 정답은 ②번이다. ① 은 공통 칼럼이 없으면 결과가 0 이라고 본 것, ③ 은 공통 칼럼이 없으면 오류라고 본 것, ④ 는 공통 칼럼에 테이블 이름을 붙여도 된다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "A",
        "headers": [
          "ID",
          "X"
        ],
        "rows": [
          [
            "1",
            "a"
          ],
          [
            "2",
            "b"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "B",
        "headers": [
          "Y",
          "Z"
        ],
        "rows": [
          [
            "p",
            "1"
          ],
          [
            "q",
            "2"
          ],
          [
            "r",
            "3"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "C",
        "headers": [
          "ID",
          "W"
        ],
        "rows": [
          [
            "1",
            "가"
          ],
          [
            "2",
            "나"
          ],
          [
            "9",
            "다"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT * FROM A NATURAL JOIN B;\n-- ㉡\nSELECT * FROM A NATURAL JOIN C;\n-- ㉢\nSELECT A.ID FROM A NATURAL JOIN C;"
      }
    ]
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
    "explanation": "DEFAULT 는 이후 INSERT 할 때 값을 주지 않은 경우에만 적용되고, 이미 저장된 행에는 소급되지 않는다. 기본키는 테이블당 하나(①), UNIQUE 는 NULL 허용(②), CHECK 는 참·거짓을 판별하는 식(③) 은 모두 맞으므로 정답은 ④ 이다.",
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
    "explanation": "지정한 컬럼들의 모든 부분집합 조합에 대해 집계를 산출하는 절은 CUBE 이다. ① ROLLUP 은 계층적 소계만, ② GROUPING SETS 는 명시한 조합만 산출한다. ③ GROUP BY 는 지정한 컬럼 조합 하나만 집계한다.",
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
    "explanation": "NULL 과의 비교는 UNKNOWN 을 반환하고 NOT(UNKNOWN) 도 UNKNOWN 이므로 COL 이 NULL 인 행은 제외된다. COL <= 2 는 1, 2 에 대해 TRUE 이고 그 NOT 은 FALSE 이므로 1, 2 도 제외된다. 결과적으로 COL > 2 를 만족하는 3, 4 만 반환된다. ① 은 NULL 행을 남긴 결과, ② 는 NOT 을 무시한 결과, ④ 는 조건을 무시한 결과다.",
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
    "explanation": "INNER/LEFT/RIGHT OUTER JOIN 은 모두 ON 조건으로 ID 가 매칭되는 행만 반환하므로 (모든 행이 매칭되는 가정에서) 결과는 3 행으로 동일하다. CROSS JOIN 은 조인 조건 없이 모든 조합을 반환하므로 3 × 3 = 9 행으로 결과 행 수가 가장 많다. ①·②·③ 은 모든 행이 매칭되어 3행으로 같고, ④ 만 9행이다.",
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
    "title": "아래 ERD 와 데이터에 대한 SQL 의 결과로 옳은 것은? (제품명 오름차순)",
    "options": [
      "노트 1, 볼펜 1, 지우개 0",
      "노트 1, 볼펜 2, 지우개 0",
      "노트 1, 볼펜 1 (지우개 행 없음)",
      "노트 1, 볼펜 2, 지우개 1"
    ],
    "correctIndex": 0,
    "explanation": "제품과 생산라인은 교차 엔터티 생산제품을 거쳐 연결되므로 제품, 생산제품, 생산라인 순으로 조인한다. 첫 번째 LEFT OUTER JOIN 으로 볼펜은 (L1)·(L2) 두 행, 노트는 (L1) 한 행이 되고, 생산 기록이 없는 지우개도 생산제품 쪽이 NULL 인 한 행으로 남는다. 두 번째 LEFT OUTER JOIN 은 ON 절에 L.라인명 = '1라인' 이 함께 있어 L1 인 행에만 생산라인이 붙고, 볼펜의 L2 행과 지우개 행은 생산라인 쪽이 NULL 로 남는다. COUNT(L.라인번호) 는 NULL 을 세지 않으므로 노트 1, 볼펜 1, 지우개 0 이다(①). ② 는 라인명 조건을 빼고 센 값, ③ 은 라인명 조건을 WHERE 절에 써서 NULL 행이 지워진 결과, ④ 는 COUNT(*) 로 NULL 행까지 센 값이다. ※ 복원 자료에서 이 번호는 26번과 같은 문제(교차 엔터티를 건너뛴 조인)가 중복되어 있다는 제보가 있어, 같은 ERD 로 교차 엔터티를 거친 외부 조인 결과를 묻는 문항으로 바꿨다(PostgreSQL 실행 확인).",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "제품·생산제품·생산라인 ERD",
        "mermaid": "erDiagram\n    제품 ||--o{ 생산제품 : \"생산\"\n    생산라인 ||--o{ 생산제품 : \"운영\"\n    제품 {\n        string 제품번호 PK\n        string 제품명\n    }\n    생산제품 {\n        string 제품번호 PK,FK\n        string 라인번호 PK,FK\n        date 생산일자\n    }\n    생산라인 {\n        string 라인번호 PK\n        string 라인명\n    }"
      },
      {
        "type": "table",
        "caption": "제품",
        "headers": [
          "제품번호",
          "제품명"
        ],
        "rows": [
          [
            "P1",
            "볼펜"
          ],
          [
            "P2",
            "노트"
          ],
          [
            "P3",
            "지우개"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "생산라인",
        "headers": [
          "라인번호",
          "라인명"
        ],
        "rows": [
          [
            "L1",
            "1라인"
          ],
          [
            "L2",
            "2라인"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "생산제품",
        "headers": [
          "제품번호",
          "라인번호",
          "생산일자"
        ],
        "rows": [
          [
            "P1",
            "L1",
            "2024-01-02"
          ],
          [
            "P1",
            "L2",
            "2024-01-03"
          ],
          [
            "P2",
            "L1",
            "2024-01-02"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT P.제품명, COUNT(L.라인번호) AS 라인수\nFROM   제품 P\n       LEFT OUTER JOIN 생산제품 S\n         ON P.제품번호 = S.제품번호\n       LEFT OUTER JOIN 생산라인 L\n         ON S.라인번호 = L.라인번호\n        AND L.라인명 = '1라인'\nGROUP BY P.제품명\nORDER BY P.제품명;"
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
    "explanation": "SELECT 절에서 행의 중복을 제거하는 표준 키워드는 DISTINCT 이다. ② UNIQUE 는 일부 DBMS 의 동의어이며 표준 정답은 DISTINCT 이다. ③ LIMIT(MySQL)·④ TOP(SQL Server) 은 행 수를 자르는 키워드다.",
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
    "explanation": "ON (T.ID = S.ID) 로 비교하면 ID 1 은 양쪽에 있어 MATCHED → V 가 b 로 UPDATE 되고, SRC 의 ID 3 은 TGT 에 없어 NOT MATCHED → (3, c) 가 INSERT 된다. TGT 에만 있는 ID 2 는 그대로 a 다. 결과는 1.b 2.a 3.c 다(③). MERGE 는 SRC 에 없는 TGT 행을 지우지 않으므로 ④ 는 틀리다. ① 은 UPDATE·INSERT 가 모두 안 된다고, ② 는 UPDATE 가 안 된다고 본 결과다.",
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
    "title": "아래 SQL 의 결과(A, B, C)로 옳은 것은? (Oracle 기준)",
    "options": [
      "20261231243000, 2026-12-31 24:15, 20260228",
      "20270101003000, 2027-01-01 00:15, 20260228",
      "20270101003000, 2027-01-01 00:15, 20260303",
      "20270101003000, 2027-01-01 01:15, 20260228"
    ],
    "correctIndex": 1,
    "explanation": "DATE 에 숫자를 더하면 일 단위로 더해진다. 1/24 은 1시간이라 2026-12-31 23:30 이 2027-01-01 00:30 이 되고, 형식에 맞추면 A 는 '20270101003000' 이다. 45/1440 은 45분이라 B 는 2027-01-01 00:15 다. ADD_MONTHS 는 1월 31일처럼 달의 마지막 날에 한 달을 더하면 다음 달의 마지막 날을 돌려주므로, 윤년이 아닌 2026년 2월의 말일인 '20260228' 이 된다. 정답은 ②번이다. ① 은 시각이 24시를 넘으면 날짜가 바뀐다는 것을 놓친 것, ③ 은 2월 31일을 3월로 넘긴 것, ④ 는 45/1440 을 1시간 15분으로 계산한 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT TO_CHAR(D + 1/24,\n         'YYYYMMDDHH24MISS') AS A,\n       TO_CHAR(D + 45/1440,\n         'YYYY-MM-DD HH24:MI') AS B,\n       TO_CHAR(ADD_MONTHS(D2, 1),\n         'YYYYMMDD') AS C\nFROM  (SELECT\n         TO_DATE('20261231 2330',\n                 'YYYYMMDD HH24MI')\n           AS D,\n         TO_DATE('20260131',\n                 'YYYYMMDD')\n           AS D2\n       FROM DUAL);"
      }
    ]
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
    "correctIndex": 3,
    "explanation": "`mgr = PRIOR empno` 는 이전(부모) 행의 empno 가 현재 행의 mgr 와 같다는 뜻으로 부모→자식 순방향 전개이다. START WITH mgr IS NULL 로 루트(100)에서 시작하므로 PRIOR 는 ㄹ(empno 앞)에 와야 한다. ③ ㄷ(mgr 앞)에 오면 역방향이라 루트 한 행만 조회된다. ① ㄱ·② ㄴ 은 FROM·START WITH 위치라 PRIOR 가 올 수 없다.",
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
        "code": "SELECT empno, mgr\nFROM   EMP  -- (ㄱ)\nSTART WITH mgr IS NULL  -- (ㄴ)\nCONNECT BY ( ㄷ ) mgr = ( ㄹ ) empno;"
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
    "title": "아래 부서·사원 ERD 에서 부서 한 행을 삭제할 때 그 부서를 참조하는 사원 행도 함께 삭제되게 하려면, 사원 테이블의 외래키에 어떤 옵션을 설정해야 하는가?",
    "options": [
      "ON DELETE RESTRICT",
      "ON DELETE SET NULL",
      "ON DELETE CASCADE",
      "ON DELETE NO ACTION"
    ],
    "correctIndex": 2,
    "explanation": "자식(사원) 테이블의 외래키에 ON DELETE CASCADE 를 걸면 부모(부서) 행을 지울 때 그 부서를 참조하는 사원 행도 함께 지워진다(③). ① RESTRICT 와 ④ NO ACTION 은 참조하는 사원이 있으면 부서 삭제 자체를 거부하고, ② SET NULL 은 사원 행을 남긴 채 부서번호만 NULL 로 바꾼다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "부서-사원 ERD",
        "mermaid": "erDiagram\n    부서 ||..o{ 사원 : \"소속\"\n    부서 {\n        string 부서번호 PK\n    }\n    사원 {\n        string 사원번호 PK\n        string 부서번호 FK \"ON DELETE CASCADE\"\n    }"
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
    "explanation": "고유키(UNIQUE)는 NULL 을 허용하고(②), 외래키는 부모 테이블의 기본키(또는 UNIQUE 키)를 참조하며(③), CHECK 는 조건을 만족하는 값만 허용한다(④). 기본키는 한 테이블에 하나만 만들 수 있고, 여러 컬럼으로 구성해도(복합 키) 하나의 기본키이므로 ① 이 옳지 않다.",
    "_source": "authored"
  }
];
