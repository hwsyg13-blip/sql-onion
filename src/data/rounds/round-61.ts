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
    "title": "영업팀용으로 고객 이름·연락처·담당자만 보여 주는 뷰를 만들었다. 이 외부 스키마에 대한 설명으로 옳지 않은 것은?",
    "options": [
      "영업팀이 업무에 필요한 데이터만 골라 볼 수 있다.",
      "같은 데이터베이스에 팀마다 서로 다른 외부 스키마를 여러 개 둘 수 있다.",
      "이 뷰를 정의하면 데이터 파일 배치와 인덱스 같은 저장 구조도 함께 정해진다.",
      "급여 같은 칼럼을 빼서 영업팀이 접근할 수 있는 범위를 제한할 수 있다."
    ],
    "correctIndex": 2,
    "explanation": "외부 스키마는 사용자나 응용 프로그램 관점에서 필요한 부분만 보여 주는 개별 정의로, 같은 데이터베이스에 여러 개 있을 수 있다(①, ②). 보여 줄 칼럼을 골라 접근 범위를 제한하는 데도 쓴다(④). 데이터 파일 배치와 인덱스 같은 저장 구조는 내부 스키마가 정하며, 외부 스키마를 만든다고 정해지지 않는다. 그래서 ③ 이 옳지 않다. 정답은 ③번이다.",
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
    "explanation": "도메인은 속성이 가질 수 있는 값의 범위(데이터 타입, 제약 사항)를 의미한다. 속성에 대한 타입·제약·값의 범위라는 키워드가 나오면 도메인을 떠올린다. ② 식별자는 인스턴스를 구분하는 속성, ③ 엔터티는 업무에서 관리하는 대상의 집합, ④ 인스턴스는 엔터티의 개별 건이라 값의 범위와는 관계가 없다.",
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
    "explanation": "엔터티는 유형·무형 기준으로 유형·개념·사건 엔터티로 나뉜다. 행위 엔터티는 발생 시점 기준(기본·중심·행위 엔터티)의 분류이므로 유형·무형 기준에 해당하지 않는다. ①②③ 은 유형·무형 기준의 분류다.",
    "_source": "authored"
  },
  {
    "id": 9953,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "1과목",
    "number": 4,
    "title": "아래 ERD 처럼 회사 → 부서 → 팀 이 모두 식별 관계로 이어져 있다. 팀 → 사원 을 식별 관계로 만들 때와 비식별 관계로 만들 때, 사원 테이블 기본키의 칼럼 수로 옳은 것은? (순서대로)",
    "options": [
      "1, 1",
      "4, 1",
      "4, 4",
      "1, 4"
    ],
    "correctIndex": 1,
    "explanation": "식별 관계는 부모의 기본키 전체를 자식 기본키에 물려준다. 팀의 기본키가 회사ID + 부서ID + 팀ID 이므로, 팀 → 사원 이 식별 관계면 사원의 기본키는 이 셋에 사번을 더해 4칼럼이 된다. 비식별 관계로 만들면 팀의 키 3칼럼은 사원의 일반 칼럼(외래키)으로만 들어가고, 기본키는 사번 1칼럼이다. 정답은 ②번이다. 이렇게 식별 관계가 길게 이어져 자식의 기본키가 계속 길어질 때가 비식별 관계로 바꾸는 것을 검토할 대표적인 상황이다. ① 은 식별 관계에서도 키가 늘지 않는다고 본 것, ③ 은 비식별 관계에서도 부모 키가 기본키에 들어간다고 본 것, ④ 는 두 경우를 바꿔 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "회사·부서·팀·사원 ERD (사원은 관계 결정 전)",
        "mermaid": "erDiagram\n    회사 ||--|{ 부서 : \"소속\"\n    부서 ||--|{ 팀 : \"소속\"\n    회사 {\n        string 회사ID PK\n    }\n    부서 {\n        string 회사ID PK, FK\n        string 부서ID PK\n    }\n    팀 {\n        string 회사ID PK, FK\n        string 부서ID PK, FK\n        string 팀ID PK\n    }\n    사원 {\n        string 사번 PK\n        string 이름\n    }"
      }
    ]
  },
  {
    "id": 9954,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "1과목",
    "number": 5,
    "title": "아래 ERD 에서 강좌 쪽 끝의 동그라미를 세로줄로 바꾸었다(강좌 쪽: 0개 이상 → 1개 이상). 이로 인해 생기는 변화로 옳은 것만 모두 고른 것은?",
    "options": [
      "가",
      "가, 나",
      "나, 다",
      "가, 나, 다"
    ],
    "correctIndex": 1,
    "explanation": "관계선택사양은 상대 엔터티가 반드시 있어야 하는지를 정하며, 업무 규칙에 따라 결정된다. 강좌 쪽 끝이 필수로 바뀌면 강사 한 명에게 강좌가 적어도 하나 있어야 하므로 강좌 없는 강사는 있을 수 없다(가). 그래서 강사를 넣을 때 강좌도 함께 넣어야 하고, 두 작업은 한 트랜잭션으로 묶인다(나). 관계선택사양은 트랜잭션 범위를 알려 주는 역할도 한다. 까마귀발은 그대로라 한 강사가 여러 강좌를 맡는 1:M 은 바뀌지 않는다(다는 틀림). 정답은 ②번이다. ① 은 트랜잭션과의 관계를 놓친 것, ③·④ 는 선택사양을 바꾸면 관계차수도 바뀐다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "강사·강좌 ERD (변경 전)",
        "mermaid": "erDiagram\n    강사 ||..o{ 강좌 : \"담당\"\n    강사 {\n        string 강사번호 PK\n    }\n    강좌 {\n        string 강좌번호 PK\n        string 강사번호 FK\n    }"
      },
      {
        "type": "text",
        "content": "가) 강좌를 하나도 맡지 않은 강사는 등록할 수 없다.\n나) 강사를 새로 등록할 때 그 강사의 강좌도 같은 트랜잭션에서 함께 등록해야 한다.\n다) 한 강사가 여러 강좌를 맡을 수 없게 된다."
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
    "title": "아래 ㉠, ㉡ 은 UML 클래스 사이의 관계다. 관계 종류와 표기를 바르게 짝지은 것은?",
    "options": [
      "㉠ 의존(점선) / ㉡ 연관(실선)",
      "㉠ 연관(점선) / ㉡ 의존(실선)",
      "㉠ 의존(실선) / ㉡ 연관(점선)",
      "㉠ 연관(실선) / ㉡ 의존(점선)"
    ],
    "correctIndex": 3,
    "explanation": "UML 클래스 다이어그램에서 연관 관계는 상대를 멤버 변수로 두고 계속 참조하는 관계로 실선으로 그리며, 데이터 모델링의 존재적 관계에 해당한다. 의존 관계는 메서드의 파라미터·지역 변수처럼 상대의 행위가 있을 때만 잠깐 쓰는 관계로 점선으로 그리며, 행위적 관계에 해당한다. ㉠ 은 연관(실선), ㉡ 은 의존(점선)이다. 정답은 ④번이다. ① 은 두 관계를 바꿔 본 것, ② 는 표기만 바꿔 본 것, ③ 은 종류와 표기를 모두 바꿔 본 것이다. ERD 는 존재적 관계와 행위적 관계를 구분하지 않고 같은 관계선으로 그린다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "㉠ 주문 클래스가 고객 객체를 멤버 변수로 들고 계속 참조한다.\n㉡ 주문 클래스의 할인 계산 메서드가 쿠폰계산기 객체를 파라미터로 받아 그때만 쓴다."
      }
    ]
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
    "explanation": "주식별자는 유일성·최소성·불변성·존재성(NOT NULL)을 만족해야 한다. 이메일은 식별은 가능하지만 NULL이 허용되어 존재성을 만족하지 못하므로 주식별자로 사용할 수 없다. ① 고객번호와 ② 주민등록번호는 식별 가능하고 NOT NULL 이라 주식별자가 될 수 있고, ④ 고객명은 중복·NULL 이 허용되어 식별자가 될 수 없으므로 옳은 설명이다.",
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
    "title": "아래 주문상품 테이블(기본키: 주문ID + 상품ID)이 위배하는 정규형은?",
    "options": [
      "제1정규형 위배",
      "제2정규형 위배",
      "제3정규형 위배",
      "위배하고 있지 않음"
    ],
    "correctIndex": 2,
    "explanation": "칸마다 값이 하나라 제1정규형은 만족한다. 쿠폰은 주문상품마다 따로 적용하므로 쿠폰코드는 주문ID + 상품ID 전체에 종속되고, 기본키 일부에만 종속된 속성이 없어 제2정규형도 만족한다. 그런데 쿠폰명은 키가 아닌 쿠폰코드로 정해져(쿠폰코드 → 쿠폰명), 기본키 → 쿠폰코드 → 쿠폰명 으로 이어지는 이행 종속이 있다. 그래서 제3정규형을 위배한다. 정답은 ③번이다. 복합키라는 이유만으로 제2정규형 위배라고 보지 않도록 주의한다. 해결하려면 쿠폰(쿠폰코드, 쿠폰명)을 떼어 낸다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "주문상품 (수량 등 다른 칼럼 생략)",
        "headers": [
          "주문ID",
          "상품ID",
          "쿠폰코드",
          "쿠폰명"
        ],
        "rows": [
          [
            "O1",
            "P1",
            "C10",
            "첫구매"
          ],
          [
            "O1",
            "P2",
            "C20",
            "신학기"
          ],
          [
            "O2",
            "P3",
            "C10",
            "첫구매"
          ]
        ]
      },
      {
        "type": "text",
        "content": "쿠폰코드가 같으면 쿠폰명도 항상 같다. 쿠폰은 주문상품마다 따로 적용한다."
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
    "title": "계좌는 개인고객 또는 법인고객 중 정확히 한 곳에만 속해야 하는 배타적 관계다. 아래처럼 외래키 두 칼럼으로 구현했을 때 이 규칙을 어기는 계좌만 모두 고른 것은?",
    "options": [
      "A3",
      "A3, A4",
      "A4",
      "없음"
    ],
    "correctIndex": 1,
    "explanation": "배타적 관계는 여러 관계 중 반드시 하나만 맺는 관계다(ERD 에서는 관계선들을 호(arc)로 묶어 표시한다). 외래키를 칼럼 둘로 나눠 구현하면 '둘 중 정확히 하나만 값이 있어야 한다' 는 조건을 지켜야 한다. A1·A2 는 한쪽만 값이 있어 맞고, A3 은 둘 다 값이 있어 두 곳에 속하며, A4 는 둘 다 비어 어디에도 속하지 않는다. 정답은 ②번이다. ① 은 어디에도 속하지 않아도 된다고 본 것, ③ 은 두 곳에 동시에 속해도 된다고 본 것, ④ 는 칼럼이 나뉘어 있으면 규칙을 따질 수 없다고 본 것이다. 이런 조건은 CHECK 제약으로 막을 수 있다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "계좌",
        "headers": [
          "계좌번호",
          "개인고객번호",
          "법인고객번호"
        ],
        "rows": [
          [
            "A1",
            "P1",
            "NULL"
          ],
          [
            "A2",
            "NULL",
            "C1"
          ],
          [
            "A3",
            "P2",
            "C2"
          ],
          [
            "A4",
            "NULL",
            "NULL"
          ]
        ]
      }
    ]
  },
  {
    "id": 9959,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "1과목",
    "number": 10,
    "title": "주문 저장 트랜잭션이 '㉠ 주문 INSERT → ㉡ 주문상세 INSERT → ㉢ 재고 UPDATE' 순서로 실행되다가 ㉢ 에서 재고 부족으로 실패했다. 원자성을 지키는 DBMS 에서 일어나는 일로 옳은 것은?",
    "options": [
      "㉠·㉡ 의 변경도 모두 취소되어 트랜잭션 시작 전 상태로 돌아간다.",
      "㉠·㉡ 은 이미 실행되었으므로 그대로 남고 ㉢ 만 취소된다.",
      "㉠ 은 남고, ㉠ 과 함께 묶인 ㉡ 만 취소된다.",
      "실패한 ㉢ 은 재고가 생길 때까지 기다렸다가 자동으로 다시 실행된다."
    ],
    "correctIndex": 0,
    "explanation": "원자성은 트랜잭션 안의 작업이 모두 반영되거나 하나도 반영되지 않아야 한다는 성질이다. ㉢ 이 실패하면 앞의 ㉠·㉡ 도 함께 취소(ROLLBACK)되어, 재고는 그대로인데 주문만 남는 상태가 생기지 않는다. 정답은 ①번이다. ② 와 ③ 은 트랜잭션의 일부만 반영된 상태를 허용한 것이고, ④ 는 원자성과 상관없는 재시도 동작이다.",
    "_source": "authored"
  },
  {
    "id": 9960,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 11,
    "title": "아래 객체 ㉠~㉣ 중 실제로 데이터를 담아 저장 공간(세그먼트)을 차지하는 것만 모두 고른 것은? (Materialized View 제외)",
    "options": [
      "㉠, ㉢",
      "㉠",
      "㉠, ㉡",
      "㉠, ㉡, ㉢"
    ],
    "correctIndex": 0,
    "explanation": "데이터를 저장하는 기본 단위는 테이블이며, 행 데이터를 저장 공간에 보관한다. 인덱스도 칼럼 값과 행의 위치(ROWID)를 따로 저장해 저장 공간을 차지한다. 뷰는 SELECT 문 정의만 저장해 두고 조회할 때마다 원래 테이블을 읽는 가상 테이블이라 데이터를 담지 않는다. 시노님은 객체에 붙인 별명일 뿐이다. 정답은 ①번이다. ② 는 인덱스가 저장 공간을 쓰지 않는다고 본 것, ③·④ 는 뷰가 데이터를 저장한다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "㉠ 테이블\n㉡ 뷰\n㉢ 인덱스\n㉣ 시노님"
      }
    ]
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
    "explanation": "COUNT(*)는 NULL 여부와 관계없이 전체 행 수(10)를 세고, COUNT(컬럼)은 해당 컬럼이 NULL인 행을 제외하고 센다. DEPT_ID가 NULL인 행이 3건이므로 B는 7이다. ① 은 COUNT(*) 도 NULL 을 뺀다고 본 결과, ② 는 COUNT(컬럼) 도 NULL 을 센다고 본 결과, ③ 은 A·B 를 뒤바꾼 결과다.",
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
    "explanation": "(+)가 붙지 않은 EMP가 기준 테이블인 아우터 조인이지만, 이후 WHERE 절의 LOCATION <> 'DALLAS' 조건이 적용된다. KING(20번 부서)은 DALLAS라 제외, ALLEN(10번 부서, NEW YORK)만 통과한다. DEPT_ID가 NULL인 JONES·CLARK는 조인에 실패해 LOCATION이 NULL이므로 NULL <> 'DALLAS'는 UNKNOWN이 되어 결과에서 제외된다. ① 은 LOCATION 이 NULL 인 JONES·CLARK 를 남긴 결과이고, ②③ 은 DALLAS 인 KING 을 빼지 않은 결과다(② 는 CLARK 까지 남겼다).",
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
    "explanation": "IN 목록에 같은 값(100)이 중복되어도 오류는 발생하지 않으며 (COL = 100 OR COL = 200 OR COL = 100)과 같이 처리된다. 100과 200에 해당하는 행이 각 1건이므로 결과는 2건이다. ③ 3 은 IN 목록의 값 개수(3개)만큼 행이 나온다고 본 결과이고, ④ 목록에 같은 값이 있어도 오류는 나지 않는다.",
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
    "explanation": "A로 그룹핑한 뒤 COUNT(*)(전체 건수)와 COUNT(B)(NULL 제외 건수)를 더한다. A=10은 2+0=2, A=20은 3+2=5, A=30은 1+0=1이므로 CNT는 2, 5, 1이다. ① 은 B 가 모두 NULL 인 그룹의 합이 NULL 이 된다고 본 결과인데, COUNT 는 NULL 이 아니라 0 을 돌려준다. ③ 8 은 GROUP BY 없이 전체를 센 값(6 + 2), ④ 5 는 A=20 그룹 하나만 본 값이다.",
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
    "explanation": "<= ALL (15, 30)은 15 이하이면서 30 이하인 값, 즉 두 값의 최솟값인 15 이하를 의미한다. TBL1에서 15 이하인 값은 10, 12, 15이다. ② 는 15 이상 30 이하로, ③ 은 30 이하(<= ANY, 최댓값 기준)로 본 결과이고, ④ 는 조건 없이 전부 고른 결과다.",
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
    "title": "아래 두 릴레이션에 대한 관계 대수 연산 '수강 ÷ 필수' 의 결과로 옳은 것은?",
    "options": [
      "S3",
      "S1",
      "S1, S2, S3",
      "S1, S2"
    ],
    "correctIndex": 3,
    "explanation": "나누기(DIVIDE)는 오른쪽 릴레이션(필수)의 값을 모두 가진 왼쪽 릴레이션의 나머지 속성(학번)을 고른다. 필수 과목은 DB 와 OS 다. S1 은 DB·OS·NET, S2 는 DB·OS 를 들어 둘 다 해당하고, S3 는 OS 가 없어 빠진다. 필수에 없는 과목(NET)을 더 들었는지는 상관없다. 정답은 ④번이다. SQL 로는 '필수 과목 중 그 학생이 듣지 않은 과목이 없는 학생' 을 NOT EXISTS 두 번으로 찾는다. ① 은 필수 과목(OS)을 빠뜨린 학생을 거꾸로 고른 것, ② 는 수강 테이블에 나오는 과목(DB·OS·NET)을 모두 들은 학생으로 본 것, ③ 은 필수 과목 중 하나(DB)만 들어도 된다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "수강",
        "headers": [
          "학번",
          "과목"
        ],
        "rows": [
          [
            "S1",
            "DB"
          ],
          [
            "S1",
            "OS"
          ],
          [
            "S1",
            "NET"
          ],
          [
            "S2",
            "DB"
          ],
          [
            "S2",
            "OS"
          ],
          [
            "S3",
            "DB"
          ],
          [
            "S3",
            "NET"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "필수",
        "headers": [
          "과목"
        ],
        "rows": [
          [
            "DB"
          ],
          [
            "OS"
          ]
        ]
      }
    ]
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
    "explanation": "%는 0개 이상의 문자, _는 정확히 한 개의 문자를 의미한다. 따라서 'A', 임의의 한 글자, 'C'가 연속해야 한다. A1C, A-CD, A_C, ABC는 매칭되지만 AB_C는 A와 C 사이에 두 글자가 있어 매칭되지 않는다. 따라서 4건이다. ④ 5개는 AB_C 까지 센 값이고, ① 2개·② 3개는 _ 가 '-' 나 '_' 같은 기호 한 글자도 대신한다는 점을 놓친 값이다.",
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
    "explanation": "AMOUNT 내림차순으로 정렬하면 5000(50000), 4000(45000), 1000(40000), 3000(35000), 2000(30000) 순이다. OFFSET 2 ROWS로 앞의 2개 행을 건너뛰고 FETCH NEXT 1 ROWS ONLY로 다음 1개 행만 가져오므로 3번째 행의 ID인 1000이 조회된다. ④ 5000 은 건너뛰지 않고 첫 행을, ② 는 건너뛰지 않고 앞 3행을 가져온 결과이며, ③ 은 오름차순으로 정렬한 결과다.",
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
    "title": "주문 테이블에 (주문일자, 상품코드) 조합이 (D1, P1), (D1, P2), (D2, P1) 세 가지 있다. 아래 ㉠, ㉡, ㉢ 의 결과 행 수로 옳은 것은?",
    "options": [
      "6, 6, 8",
      "4, 6, 8",
      "4, 6, 4",
      "3, 6, 4"
    ],
    "correctIndex": 2,
    "explanation": "괄호로 두 칼럼을 한 묶음으로 쓰면 하나의 칼럼처럼 다뤄진다. ㉠ ROLLUP((주문일자, 상품코드)) 는 GROUPING SETS((주문일자, 상품코드), ()) 와 같아 조합 3행 + 합계 1행 = 4행이다. ㉡ 은 묶음이 아니라 두 칼럼이라 조합 3 + 일자별 소계 2 + 합계 1 = 6행이다. ㉢ 의 묶음 하나짜리 CUBE 도 (묶음), () 두 가지뿐이라 ㉠ 과 같은 4행이다. 정답은 ③번이다. ① 과 ② 는 괄호 묶음을 두 칼럼처럼 본 것, ④ 는 합계 행을 놓친 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ㉠\nGROUP BY ROLLUP((주문일자, 상품코드))\n-- ㉡\nGROUP BY ROLLUP(주문일자, 상품코드)\n-- ㉢\nGROUP BY CUBE((주문일자, 상품코드))"
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
    "title": "아래 SQL 의 결과(A, B, C, D)로 옳은 것은? (Oracle 기준)",
    "options": [
      "'defg', 'ef', 2, 'b-c'",
      "'defg', 'ef', 4, 'c'",
      "'efg', 'fg', 4, 'c'",
      "'defg', 'fe', 4, '-c'"
    ],
    "correctIndex": 1,
    "explanation": "A 는 길이 7 에서 3 을 뺀 4번째 글자부터 끝까지라 'defg' 다. B 는 시작 위치가 음수라 뒤에서 3번째 'e' 부터 2글자인 'ef' 다. INSTR 의 시작 위치가 -1 이면 문자열 끝에서부터 앞으로 찾으므로 C 는 마지막 '-' 의 위치 4 다. D 는 그 다음 글자부터 끝까지라 마지막 구분자 뒤의 'c' 다. 정답은 ②번이다. ① 은 INSTR 이 앞에서 찾은 첫 '-' 위치로 계산한 것, ③ 은 LENGTH - 3 을 뒤에서 센 것, ④ 는 음수 위치에서 거꾸로 자른다고 보고 + 1 을 놓친 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT\n  SUBSTR('abcdefg',\n         LENGTH('abcdefg') - 3) AS A,\n  SUBSTR('abcdefg', -3, 2)       AS B,\n  INSTR('a-b-c', '-', -1)        AS C,\n  SUBSTR('a-b-c',\n    INSTR('a-b-c', '-', -1) + 1)  AS D\nFROM DUAL;"
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
    "explanation": "동일 순위(공동 1등)가 존재하고 그 다음 순위가 건너뛰어 3등이 되는 패턴은 RANK이다. ② DENSE_RANK였다면 PARK 가 2 가 되고, ③ ROW_NUMBER는 같은 점수에도 1, 2 처럼 다른 순번을 부여하며, ④ ROWNUM은 OVER 절과 함께 쓸 수 없다.",
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
    "title": "아래 CREATE TABLE 문 ㉠~㉤ 중 오류 없이 실행되는 것만 모두 고른 것은?",
    "options": [
      "㉢",
      "㉢, ㉤",
      "㉠, ㉢",
      "㉢, ㉣"
    ],
    "correctIndex": 3,
    "explanation": "테이블 이름은 문자로 시작해야 하고, 문자·숫자·_·$·# 만 쓸 수 있으며, 예약어는 쓸 수 없다. 숫자로 시작하는 ㉠, 하이픈(-)이 들어간 ㉡, 예약어 SELECT 를 쓴 ㉤ 은 오류다. ㉢ 은 규칙에 맞는다. ㉣ 처럼 큰따옴표로 감싸면 숫자로 시작하거나 공백이 있는 이름도 만들 수 있다. 다만 이후에도 늘 \"2025 sales\" 처럼 따옴표를 붙여 써야 해 권장하지 않는다. 정답은 ④번이다. ① 은 따옴표 이름을 놓친 것, ② 는 예약어도 이름으로 쓸 수 있다고 본 것, ③ 은 숫자로 시작해도 된다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ㉠\nCREATE TABLE 2025_sales (A NUMBER);\n-- ㉡\nCREATE TABLE sales-2025 (A NUMBER);\n-- ㉢\nCREATE TABLE sales_2025 (A NUMBER);\n-- ㉣\nCREATE TABLE \"2025 sales\" (A NUMBER);\n-- ㉤\nCREATE TABLE select (A NUMBER);"
      }
    ]
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
    "explanation": "PIVOT의 FOR 절은 컬럼명으로 올릴 값(10, 20, 30)이고, 앞의 집계 함수(SUM(SAL))가 그 안을 채운다. 부서별 SAL 합계는 10번 300, 20번 300, 30번 500이며, AS 별칭이 있으므로 컬럼명은 10, 20, 30 대신 A, B, C가 된다. ①② 는 AS 별칭을 무시하고 컬럼명을 10, 20, 30 으로 본 결과이고, ②④ 의 200, 300, 400 은 SUM 이 아니라 MAX 로 집계한 값이다.",
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
    "explanation": "LEFT OUTER JOIN 후 A.COL1은 NULL, NULL, 40, 40이고 집계 함수는 NULL을 제외하므로 AVG는 40이다. B.COL2는 조인 결과 40, 40, NULL, NULL이지만 NVL로 NULL이 0이 되어 40, 40, 0, 0의 평균인 20이 된다. ① 20, 20 은 AVG(A.COL1) 에서도 NULL 을 0 으로 센 값, ③ 40, 40 은 NVL 을 쓴 쪽에서도 NULL 을 뺀 값, ④ 는 두 값을 바꾼 결과다.",
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
    "title": "아래 T 테이블(ID 1 → 2 → 3 → 1 로 이어지는 순환)에 대한 SQL ㉠, ㉡ 의 결과로 옳은 것은? ('㉠ 결과 / ㉡ 행 수 / ㉡ 에서 CONNECT_BY_ISCYCLE 이 1 인 ID' 순서, Oracle 기준)",
    "options": [
      "3행 / 3 / 3",
      "오류 / 4 / 1",
      "오류 / 3 / 3",
      "끝없이 반복 / 3 / 1"
    ],
    "correctIndex": 2,
    "explanation": "1 의 자식은 2, 2 의 자식은 3, 3 의 자식은 다시 1 이라 계층이 고리처럼 돈다. NOCYCLE 이 없는 ㉠ 은 Oracle 이 고리를 발견하고 오류(CONNECT BY loop)를 낸다. ㉡ 의 NOCYCLE 은 이미 지나온 행으로 돌아가는 연결을 끊고 계속하므로 1(LEVEL 1), 2(2), 3(3) 의 3행이 나온다. CONNECT_BY_ISCYCLE 은 '자식이 이미 지나온 행이라 더 내려가지 못한 행' 에서 1 이다. 3 의 자식이 1 이므로 3 이 1 이다. 정답은 ③번이다. ① 은 순환이 있어도 그냥 실행된다고 본 것, ② 는 다시 만난 1 이 한 번 더 나온다고 본 것, ④ 는 Oracle 이 고리를 막지 않는다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T",
        "headers": [
          "ID",
          "상위ID"
        ],
        "rows": [
          [
            "1",
            "3"
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
      },
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT ID, LEVEL\nFROM   T\nSTART  WITH ID = 1\nCONNECT BY PRIOR ID = 상위ID;\n\n-- ㉡\nSELECT ID, LEVEL, CONNECT_BY_ISCYCLE\nFROM   T\nSTART  WITH ID = 1\nCONNECT BY NOCYCLE\n        PRIOR ID = 상위ID;"
      }
    ]
  },
  {
    "id": 9976,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 27,
    "title": "아래 PLAYER 테이블에 대한 SQL ㉠~㉣ 의 결과 행 수로 옳은 것은?",
    "options": [
      "3, 2, 1, 3",
      "0, 2, 0, 3",
      "0, 3, 1, 3",
      "0, 2, 1, 2"
    ],
    "correctIndex": 1,
    "explanation": "BETWEEN a AND b 는 '>= a AND <= b' 라 작은 값을 앞에 써야 한다. ㉠ 처럼 거꾸로 쓰면 '키 >= 180 AND 키 <= 175' 라 맞는 행이 없다. ㉡ 의 IN 은 '= A OR = NULL' 이다. = NULL 은 늘 UNKNOWN 이라 팀이 A 인 가·다 2행만 나온다. 팀이 NULL 인 라도 = NULL 로는 잡히지 않는다. ㉢ 의 NOT IN 은 '<> A AND <> NULL' 인데 <> NULL 이 UNKNOWN 이라 어떤 행도 참이 되지 못해 0 이다. ㉣ 은 175~180 인 가·나·라 3행이다. 정답은 ②번이다. ① 은 BETWEEN 의 순서가 상관없고 NOT IN 이 B 를 잡는다고 본 것, ③ 은 IN 의 NULL 이 팀 NULL 행을 잡는다고 본 것, ④ 는 BETWEEN 의 끝값 180 을 빼고 NOT IN 이 B 를 잡는다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "PLAYER",
        "headers": [
          "이름",
          "팀",
          "키"
        ],
        "rows": [
          [
            "가",
            "A",
            "175"
          ],
          [
            "나",
            "B",
            "178"
          ],
          [
            "다",
            "A",
            "182"
          ],
          [
            "라",
            "NULL",
            "180"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT * FROM PLAYER\nWHERE  키 BETWEEN 180 AND 175;\n-- ㉡\nSELECT * FROM PLAYER\nWHERE  팀 IN ('A', NULL);\n-- ㉢\nSELECT * FROM PLAYER\nWHERE  팀 NOT IN ('A', NULL);\n-- ㉣\nSELECT * FROM PLAYER\nWHERE  키 BETWEEN 175 AND 180;"
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
    "title": "아래 EMP 테이블에 대한 SQL ㉠, ㉡, ㉢ 의 결과 행 수로 옳은 것은?",
    "options": [
      "3, 2, 3",
      "2, 2, 2",
      "3, 2, 2",
      "3, 3, 2"
    ],
    "correctIndex": 2,
    "explanation": "급여가 3000 을 넘는 사람은 KING, JONES, FORD, ADAMS 다. ㉠ 은 MGR 값이 있기만 하면 되므로 KING 만 빠져 3행이다. ㉡ 은 MGR 이 실제 EMP 에 있는 사원이어야 한다. FORD 의 MGR 9 는 없는 사번이라 빠지고 JONES(1), ADAMS(4)만 남아 2행이다. ㉢ 의 IN 도 같은 검사라 2행이다. KING 은 MGR 이 NULL 이라 IN 비교가 UNKNOWN 이 되어 빠진다. 정답은 ③번이다. ① 은 IN 이 값의 존재만 본다고 착각한 것, ② 는 ㉠ 에서 없는 사번을 가리키는 FORD 를 뺀 것, ④ 는 EXISTS 가 MGR 값만 있으면 TRUE 라고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP",
        "headers": [
          "EMPNO",
          "ENAME",
          "SAL",
          "MGR"
        ],
        "rows": [
          [
            "1",
            "KING",
            "5000",
            "NULL"
          ],
          [
            "2",
            "JONES",
            "3500",
            "1"
          ],
          [
            "3",
            "FORD",
            "4000",
            "9"
          ],
          [
            "4",
            "SMITH",
            "800",
            "2"
          ],
          [
            "5",
            "ADAMS",
            "3100",
            "4"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT * FROM EMP E\nWHERE  SAL > 3000 AND MGR IS NOT NULL;\n-- ㉡\nSELECT * FROM EMP E\nWHERE  SAL > 3000\nAND    EXISTS (SELECT 1 FROM EMP M\n               WHERE  M.EMPNO = E.MGR);\n-- ㉢\nSELECT * FROM EMP E\nWHERE  SAL > 3000\nAND    MGR IN (SELECT EMPNO FROM EMP);"
      }
    ]
  },
  {
    "id": 9978,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 29,
    "title": "SALES 테이블의 (SALE_DATE, AMT) 가 (1, 10), (2, 20), (2, 30), (3, 40) 일 때, 아래 SQL 에서 (2, 20) 행의 CUM1·CUM2 와 (3, 40) 행의 CUM1 값으로 옳은 것은?",
    "options": [
      "60, 30, 100",
      "30, 30, 100",
      "60, 60, 100",
      "30, 60, 100"
    ],
    "correctIndex": 0,
    "explanation": "OVER 에 ORDER BY 만 쓰면 기본 범위가 RANGE UNBOUNDED PRECEDING 이라, 현재 행과 정렬 값이 같은 행까지 한꺼번에 더한다. 날짜 2 인 두 행은 모두 10 + 20 + 30 = 60 이 되어 (2, 20) 행의 CUM1 은 60 이다. ROWS UNBOUNDED PRECEDING 은 물리적인 행 순서대로 현재 행까지만 더해 CUM2 는 10 + 20 = 30 이다(같은 날짜 안의 순서는 정해져 있지 않을 수 있다). 마지막 날짜 3 의 CUM1 은 전체 합 100 이다. 정답은 ①번이다. ② 는 기본 범위를 ROWS 로 본 것, ③ 은 ROWS 도 같은 값을 묶는다고 본 것, ④ 는 두 방식을 바꿔 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT SALE_DATE, AMT,\n  SUM(AMT) OVER\n    (ORDER BY SALE_DATE) AS CUM1,\n  SUM(AMT) OVER\n    (ORDER BY SALE_DATE\n     ROWS UNBOUNDED PRECEDING)\n                        AS CUM2\nFROM SALES;"
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
    "explanation": "PARTITION BY로 게시판 유형별로 나누고 REG_DATE 내림차순으로 순번을 매긴 뒤 RN = 1만 남기므로, 각 유형에서 가장 최근에 등록된 글 1건씩이 조회된다. ② 는 PARTITION BY 가 없을 때의 결과이고, ③ 상위 2건은 RN <= 2 에 PARTITION BY 도 없어야 나오며, ④ 건수를 내려면 COUNT 가 필요하다.",
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
    "explanation": "NOT IN은 AND 조건으로 풀리므로 서브쿼리 결과에 NULL이 하나라도 있으면 NULL 비교가 UNKNOWN이 되어 전체가 UNKNOWN 처리된다. PARENT_ID에 NULL이 있으므로 어떤 행도 조건을 만족하지 못해 공집합이 반환된다. ② 는 서브쿼리에 NULL 이 없을 때(또는 NOT EXISTS 를 썼을 때)의 결과이고, ① 은 NOT IN 조건이 모두 참이 된다고 본 결과이며, ④ NULL 이 섞여도 오류는 나지 않는다.",
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
    "title": "다음 SQL 의 실행 결과에 대한 설명으로 가장 적절한 것은?",
    "options": [
      "A 와 D 만 같은 값이고, B 와 C 는 서로 다르다.",
      "B 와 C 만 같은 값이고, A 와 D 는 서로 다르다.",
      "A 와 D 가 같고, B 와 C 가 같다.",
      "네 값이 모두 다르다."
    ],
    "correctIndex": 2,
    "explanation": "음수에서는 방향을 헷갈리기 쉽다. CEIL 은 그 수보다 크거나 같은 가장 작은 정수라 -7.1 은 -7 이 된다(A). FLOOR 는 그 수보다 작거나 같은 가장 큰 정수라 -7.1 은 -8 이다(B). ROUND 는 0 에서 멀어지는 쪽으로 반올림하므로 -7.5 는 -8 이다(C). TRUNC 는 소수점 아래를 버려 0 쪽으로 다가가므로 -7.9 는 -7 이다(D). 그래서 A = D = -7, B = C = -8 이다. 정답은 ③번이다. ① 은 ROUND(-7.5) 를 -7 로 본 것이고, ② 는 TRUNC(-7.9) 를 -8 로 본 것이다. ④ 처럼 네 값이 모두 다르려면 결과가 네 가지 정수여야 하는데, 이 네 식의 결과는 -7 과 -8 두 가지뿐이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT CEIL(-7.1)  AS A,\n       FLOOR(-7.1) AS B,\n       ROUND(-7.5) AS C,\n       TRUNC(-7.9) AS D\nFROM   DUAL;"
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
    "explanation": "UNION은 두 SELECT의 컬럼 수와 대응 컬럼의 데이터 타입이 같아야 하고, ORDER BY는 마지막 SELECT 문에 한 번만 사용할 수 있다. ① 가는 컬럼 수가 다르고, ③ 에 들어간 나는 ORDER BY 위치가 잘못되어 오류가 난다. 다는 TBL1의 COL2(숫자)와 TBL2의 COL3(숫자)이 대응되어 컬럼 수·타입이 같고 ORDER BY가 마지막에 한 번만 있으므로 오류가 없다. 따라서 ④ 처럼 모두 오류가 나지는 않는다.",
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
    "explanation": "기준 SQL 은 TBL1 의 {1, 2, 3, 4} 에서 TBL2 의 값 2 를 빼 {1, 3, 4} 를 돌려준다. 가는 서브쿼리에서 NULL 을 미리 걸러 낸 NOT IN 이라 1, 3, 4, 나는 NOT EXISTS 라 NULL 의 영향 없이 1, 3, 4, 다는 LEFT JOIN 뒤 짝이 없는 행(T2.COL2 IS NULL)만 남기는 안티 조인이라 1, 3, 4 로 모두 같다(④). 주의: MINUS 는 결과의 중복도 없애므로 TBL1 에 같은 값이 두 번 있으면 MINUS 는 한 번, 가·나·다는 두 번 나와 결과가 달라진다. ① 가만, ② 가·나, ③ 나·다는 같은 결과를 내는 SQL 을 일부 빠뜨렸다. ※ 복원 자료의 TBL1 에는 3 이 두 번 들어 있어 어느 보기도 정답이 되지 않았다. 원문을 확인할 수 없어 단일 정답이 되도록 마지막 값을 4 로 바로잡았다.",
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
            "4"
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
    "title": "아래 ERD 와 데이터에서 SQL ㉠, ㉡, ㉢ 의 결과(COUNT(*))를 차례대로 나열한 것은?",
    "options": [
      "4, 12, 8",
      "4, 12, 4",
      "4, 3, 4",
      "4, 24, 8"
    ],
    "correctIndex": 0,
    "explanation": "테이블 3개를 빠짐없이 연결하려면 조인 조건이 최소 2개 필요하다. ㉠ 은 두 조건을 모두 써서 참여 4행이 각자 사원과 부서 하나씩에 붙어 4행이다. ㉡ 은 참여와의 조건이 빠졌다. 부서·사원 조인 결과 3행에 참여 4행이 모두 곱해져 3 × 4 = 12행이 된다. ㉢ 은 부서와의 조건이 빠졌다. 사원·참여 조인 결과 4행에 부서 2행이 곱해져 4 × 2 = 8행이다. 정답은 ①번이다. ② 는 ㉢ 에서 부서가 곱해지지 않는다고 본 것이고, ③ 은 조건이 빠진 테이블을 아예 무시한 것이다. ④ 는 ㉡ 에서 사원 3행, 참여 4행, 부서 2행을 모두 곱한 것인데, 부서와 사원 사이에는 조건이 있어 부서는 곱해지지 않는다. 쉼표로 나열한 테이블 사이에 조건이 하나라도 빠지면 그 부분에서 카티션 곱이 생긴다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "부서·사원·참여 ERD",
        "mermaid": "erDiagram\n    부서 ||..o{ 사원 : \"소속\"\n    사원 ||--o{ 참여 : \"투입\"\n    부서 {\n        string 부서코드 PK\n    }\n    사원 {\n        int 사번 PK\n        string 부서코드 FK\n    }\n    참여 {\n        int 사번 PK, FK\n        string 과제 PK\n    }"
      },
      {
        "type": "text",
        "content": "부서: D1, D2\n사원: (1, D1), (2, D1), (3, D2)\n참여: (1, P1), (1, P2), (3, P1), (3, P3)"
      },
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT COUNT(*)\nFROM 부서 D, 사원 E, 참여 P\nWHERE E.부서코드 = D.부서코드\n  AND P.사번 = E.사번;\n-- ㉡\nSELECT COUNT(*)\nFROM 부서 D, 사원 E, 참여 P\nWHERE E.부서코드 = D.부서코드;\n-- ㉢\nSELECT COUNT(*)\nFROM 부서 D, 사원 E, 참여 P\nWHERE P.사번 = E.사번;"
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
    "title": "5개 행이 들어 있는 테이블 T 에 대해 아래 SQL ㉠~㉣ 의 결과 행 수를 차례대로 나열한 것은? (Oracle)",
    "options": [
      "1, 0, 2, 0",
      "1, 1, 2, 4",
      "1, 0, 2, 4",
      "1, 1, 2, 0"
    ],
    "correctIndex": 0,
    "explanation": "ROWNUM 은 WHERE 조건을 통과한 행에 1부터 차례로 붙는 번호다. 조건을 통과하지 못한 행은 번호를 받지 못하고, 다음 행이 다시 1번 후보가 된다. ㉠ 은 첫 행이 1번이 되어 1행이다. ㉡ 은 첫 행이 1번 후보인데 '= 2' 를 만족하지 못해 버려지고, 다음 행도 다시 1번 후보라 끝까지 한 행도 나오지 않는다. ㉢ 은 1번, 2번까지 받아 2행이다. ㉣ 도 ㉡ 과 같은 이유로 0행이다. 정답은 ①번이다. ② 와 ④ 는 ROWNUM 이 테이블에 미리 붙어 있는 번호라고 본 것이다. 두 번째 행만 보려면 인라인 뷰에서 ROWNUM 에 별칭을 붙인 뒤 바깥에서 거른다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T",
        "headers": [
          "ID",
          "NAME"
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
            "5",
            "E"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT * FROM T WHERE ROWNUM = 1;\n-- ㉡\nSELECT * FROM T WHERE ROWNUM = 2;\n-- ㉢\nSELECT * FROM T WHERE ROWNUM <= 2;\n-- ㉣\nSELECT * FROM T WHERE ROWNUM > 1;"
      }
    ]
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
    "explanation": "스칼라 서브쿼리는 단일 행·단일 컬럼만 반환해야 한다. ③은 A=100일 때 TBL2에서 두 행(10, 20)이 반환되어 오류(ORA-01427)가 발생한다. ②는 SUM 집계로 한 행이 보장되어 안전하다. ① IN 과 ④ EXISTS 는 여러 행을 받아도 되는 연산이라 오류가 없다.",
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
    "explanation": "서브쿼리의 COL2 IN (100, NULL)은 OR 연산이라 NULL은 무시되고 100만 선택되므로 서브쿼리 결과는 {100}이다. 따라서 NOT IN (100)에서 COL1이 100이 아닌 값 중 200만 참이 되고, NULL은 100인지 아닌지 알 수 없어(UNKNOWN) 제외된다. ① 100 은 IN 과 NOT IN 을 거꾸로 본 결과이고, ④ 공집합은 서브쿼리 결과에 NULL 이 들어간다고 본 결과다(COL2 IN (100, NULL) 에서 NULL 행은 뽑히지 않는다).",
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
    "explanation": "기준 SQL은 SAL이 NULL이면 100, 아니면 SAL을 반환한다. ① NVL, ② COALESCE, ③ DECODE(NULL 끼리 같다고 본다)는 모두 기준 SQL 과 같다. NVL2(expr, A, B)는 expr이 NULL이 아니면 A, NULL이면 B를 반환하므로 NVL2(SAL, 100, SAL)은 정반대로 동작하여 결과가 다르다.",
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
    "explanation": "MERGE는 ON 조건(EMP_ID 일치)이 맞으면 UPDATE, 맞지 않으면 INSERT를 수행한다. 두 행 모두 EMP_ID가 일치하므로 INSERT는 수행되지 않고 EMP_NAME이 EMP_TEMP의 값으로 갱신되어 (10001, GIM), (10002, LEE)가 된다. ① 은 갱신이 일어나지 않았다고 본 결과, ③ 은 일치해도 INSERT 한다고 본 결과, ④ 는 10002 행의 갱신을 빠뜨린 결과다.",
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
    "title": "아래 SQL 의 결과(A, B, C, D)로 옳은 것은? (Oracle 기준)",
    "options": [
      "AABBCC, ABBC, AA, NULL",
      "AABBC, AABBCC, AAB, B",
      "AABBC, ABBC, AA, NULL",
      "AABBC, ABBC, AB, NULL"
    ],
    "correctIndex": 2,
    "explanation": "(A|B)+ 는 A 나 B 가 1번 이상 이어진 부분이라 'AABB' 뒤에 C 하나가 붙어 A 는 'AABBC' 다(C 는 하나만 찾는다). AB+C 는 A 하나, B 가 1번 이상, C 하나라 두 번째 A 부터 시작한 'ABBC' 가 B 다. [AB]{2} 는 A 나 B 가 정확히 2글자인 부분이라 맨 앞의 'AA' 가 C 다. ^B 는 문자열이 B 로 시작해야 하는데 A 로 시작하므로 D 는 NULL 이다. 정답은 ③번이다. ① 은 C 까지 모두 붙인 것, ② 는 AB+C 가 앞의 A 들도 함께 잡는다고 본 것, ④ 는 [AB]{2} 가 서로 다른 두 글자를 요구한다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT\n  REGEXP_SUBSTR('AABBCC', '(A|B)+C')\n    AS A,\n  REGEXP_SUBSTR('AABBCC', 'AB+C')\n    AS B,\n  REGEXP_SUBSTR('AABBCC', '[AB]{2}')\n    AS C,\n  REGEXP_SUBSTR('AABBCC', '^B')\n    AS D\nFROM DUAL;"
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
    "title": "아래 두 테이블에 대한 SQL ㉠, ㉡, ㉢ 의 결과 행 수로 옳은 것은?",
    "options": [
      "2, 2, 2",
      "4, 4, 4",
      "4, 2, 3",
      "4, 2, 4"
    ],
    "correctIndex": 2,
    "explanation": "㉠ 은 급여 조건이 ON 에 있어 조인할 사원을 고르는 데만 쓰이고, 부서는 모두 남는다. 영업-김, 영업-이, 그리고 맞는 사원이 없는 개발·인사가 NULL 로 나와 4행이다. ㉡ 은 조인을 먼저 끝낸 뒤 WHERE 로 거르므로, 급여가 NULL 인 인사 행과 200 인 개발-박 행이 빠져 김·이 2행이다. ㉢ 은 사원이 없어 이름이 NULL 인 인사 행만 다시 살아나 3행이다. 개발은 박과 조인되어 이름이 NULL 이 아니므로 빠진다. 정답은 ③번이다. ① 은 ON 과 WHERE 를 같다고 본 것, ② 는 LEFT JOIN 이면 WHERE 와 상관없이 부서가 모두 남는다고 본 것, ④ 는 ㉢ 에서 개발도 남는다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "부서",
        "headers": [
          "부서번호",
          "부서명"
        ],
        "rows": [
          [
            "10",
            "영업"
          ],
          [
            "20",
            "개발"
          ],
          [
            "30",
            "인사"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "사원",
        "headers": [
          "이름",
          "부서번호",
          "급여"
        ],
        "rows": [
          [
            "김",
            "10",
            "300"
          ],
          [
            "이",
            "10",
            "500"
          ],
          [
            "박",
            "20",
            "200"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT D.부서명, E.이름\nFROM   부서 D LEFT JOIN 사원 E\n       ON D.부서번호 = E.부서번호\n      AND E.급여 >= 300;\n-- ㉡\nSELECT D.부서명, E.이름\nFROM   부서 D LEFT JOIN 사원 E\n       ON D.부서번호 = E.부서번호\nWHERE  E.급여 >= 300;\n-- ㉢\nSELECT D.부서명, E.이름\nFROM   부서 D LEFT JOIN 사원 E\n       ON D.부서번호 = E.부서번호\nWHERE  E.급여 >= 300\n   OR  E.이름 IS NULL;"
      }
    ]
  },
  {
    "id": 9992,
    "examSetId": "round-61",
    "examLabel": "제61회 (2026년 5월)",
    "round": 61,
    "subject": "2과목",
    "number": 43,
    "title": "SAL 이 500, 500, 400, 300 인 EMP 테이블에서 '연봉 상위 2' 를 구하려는 SQL ㉠~㉣ 의 결과 행 수로 옳은 것은? (Oracle 기준)",
    "options": [
      "2, 2, 2, 2",
      "2, 3, 3, 2",
      "2, 2, 4, 2",
      "2, 2, 3, 2"
    ],
    "correctIndex": 3,
    "explanation": "ROW_NUMBER 는 동점에도 서로 다른 번호를 줘 ㉠ 은 2행이다. RANK 는 500 두 명에게 1위를 주고 다음 400 은 3위로 건너뛰어, N <= 2 는 500 두 명뿐인 2행이다. DENSE_RANK 는 건너뛰지 않아 400 이 2위가 되므로 ㉢ 은 3행이다. ㉣ 은 정렬한 뒤 앞의 2행만 자르므로 2행이다. 정답은 ④번이다. ② 는 RANK 도 400 을 2위로 본 것, ③ 은 DENSE_RANK 가 300 까지 포함한다고 본 것, ① 은 DENSE_RANK 도 동점을 따로 센다고 본 것이다. 동점까지 포함해 '상위 2위' 를 원하면 RANK 나 DENSE_RANK 를 쓰고, 결과가 왜 다른지 알아야 한다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ㉠ ROW_NUMBER\nSELECT * FROM\n (SELECT E.*, ROW_NUMBER() OVER\n    (ORDER BY SAL DESC) AS N\n  FROM EMP E)\nWHERE N <= 2;\n-- ㉡ ㉠ 에서 RANK 로 바꿈\n-- ㉢ ㉠ 에서 DENSE_RANK 로 바꿈\n-- ㉣\nSELECT * FROM\n (SELECT * FROM EMP ORDER BY SAL DESC)\nWHERE ROWNUM <= 2;"
      }
    ]
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
    "explanation": "A가 매칭되는 것은 100 한 건뿐이다. NULL은 UNKNOWN이라 서로 조인되지 않으므로 나머지는 각각 따로 출력된다. 매칭 1건 + TBL1 단독(200, NULL, NULL) 3건 + TBL2 단독(300, NULL) 2건 = 6건이다. ② 5개는 NULL 끼리 조인된다고 본 값이고, ④ 7개는 100 도 짝을 짓지 않고 두 테이블의 행을 모두 따로 센 값이다.",
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
    "explanation": "DEPT_ID가 20이면서 SAL이 NULL인 행에 대한 MIN(SAL)은 NULL이다. 집계 함수는 NULL을 제외하지만 입력 값이 없으면 결과가 NULL이고, NULL과의 산술 연산은 모두 NULL이므로 2800 + NULL = NULL이다. ① 2800 은 NULL 을 무시하고 더한 값, ③ 0 은 대상 행이 없는 MIN 을 0 으로 본 값이고, ④ 대상 행이 0건이어도 집계 함수는 오류 없이 NULL 을 돌려준다.",
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
    "explanation": "GROUPING SETS는 나열한 기준별로 따로 그룹핑한 결과를 UNION ALL한 것과 같다. 중첩 괄호 (DEPTNO, PRODUCT)는 한 덩어리로 취급되어 4행, DEPTNO 단독 2행, 빈 괄호 () 전체 합계 1행이므로 4 + 2 + 1 = 7행이다. ① 4개는 (DEPTNO, PRODUCT) 그룹만, ② 6개는 전체 합계 () 를 빠뜨린 값이고, ④ 8개는 () 대신 PRODUCT 단독 그룹(2행)을 센 값이다.",
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
    "explanation": "EMP.DEPT_ID는 DEPT.DEPT_ID를 참조하는 외래키이다. DEPT에 20번 부서가 없으므로 ③은 참조 무결성 위반(ORA-02291)이 발생한다. ① 10번 부서는 있으므로 가능하고, FK 컬럼에는 NULL이 허용되어 ②도 가능하며, ④ 자식(EMP) 행 삭제는 문제가 없다.",
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
    "explanation": "LAG(AMT)는 직전 행의 AMT를 반환하므로 NULL, 100, 150이 된다. AMT에서 이를 빼면 100 - NULL = NULL, 150 - 100 = 50, 120 - 150 = -30이다. ② 는 첫 행의 차이를 0 으로, ③ 은 LAG 의 NULL 을 0 으로 보고 100 - 0 을 계산한 결과이며, ④ 는 직전 값에서 현재 값을 뺀(LAG - AMT) 결과다.",
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
    "explanation": "SAVEPOINT 문제는 ROLLBACK을 먼저 찾는다. ROLLBACK TO SP1은 SP1 이후의 변경(2, 3 삽입)만 취소하므로 남는 것은 SP1 이전의 1과 이후에 새로 삽입한 4로 총 2행이다. ① 0 은 COMMIT 전에 모든 행이 취소된다고, ② 1 은 ROLLBACK TO SP1 이 처음부터 전부 취소한다고 본 값이고, ④ 3 은 SP1 이전과 이후를 거꾸로 본 값(2, 3, 4)이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "CREATE TABLE TBL (NUM NUMBER);\n\nINSERT INTO TBL VALUES (1);\nSAVEPOINT SP1;\n\nINSERT INTO TBL VALUES (2);\nINSERT INTO TBL VALUES (3);\n\nROLLBACK TO SP1;\n\nINSERT INTO TBL VALUES (4);\n\nCOMMIT;\n\nSELECT COUNT(*) FROM TBL;"
      }
    ]
  }
];
