// Auto-generated from PDF + blog + scripts/authored/round-62.json
// 제62회 — 2026년 8월 · 50문항
// ⚠ 직접 편집 금지. 출처별 데이터를 고친 뒤 'node scripts/build-quiz-bank.mjs' 재실행.
import type { QuizQuestion } from '../quizBank';

export const ROUND_62: QuizQuestion[] = [
  {
    "id": 9900,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "1과목",
    "number": 1,
    "title": "발생 시점에 따른 엔터티 분류에서 성격이 다른 하나는?",
    "options": [
      "주문 엔터티 (주문내역과 고객 사이에서 발생)",
      "사원 엔터티 (인적자원 관리)",
      "계약 엔터티 (기업 간 계약 내용 기록)",
      "매출 엔터티 (월별 매출 집계)"
    ],
    "correctIndex": 1,
    "explanation": "발생 시점에 따라 엔터티는 기본·중심·행위 엔터티로 나뉜다. 사원은 다른 엔터티 없이 업무에 원래 있는 기본 엔터티다(②). 주문(①)·계약(③)·매출(④)은 고객·상품 같은 기본 엔터티에서 생겨 업무의 중심이 되는 중심 엔터티라 셋은 성격이 같다. 참고로 행위 엔터티는 주문목록·변경이력처럼 두 개 이상의 엔터티에서 생기는 것이다.",
    "_source": "authored"
  },
  {
    "id": 9901,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "1과목",
    "number": 2,
    "title": "아래 후보 중 엔터티의 조건(인스턴스 2개 이상, 속성 2개 이상, 다른 엔터티와 관계 1개 이상, 업무에 쓰임)을 만족하지 못하는 것만 모두 고른 것은?",
    "options": [
      "회사정보",
      "임시메모",
      "회사정보, 임시메모",
      "없음"
    ],
    "correctIndex": 2,
    "explanation": "엔터티는 업무에서 관리할 집합이라 인스턴스가 2개 이상이어야 하고, 속성을 2개 이상 가지며, 다른 엔터티와 관계를 1개 이상 맺어야 한다. 회사정보는 우리 회사 한 건뿐이라 인스턴스가 1개여서 엔터티가 아니다. 임시메모는 다른 엔터티와 아무 관계가 없어 조건을 어긴다. 고객·주문은 모든 조건을 만족한다. 정답은 ③번이다. ① 은 관계가 없어도 된다고 본 것, ② 는 인스턴스가 하나여도 된다고 본 것, ④ 는 두 조건을 모두 놓친 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "후보",
        "headers": [
          "이름",
          "인스턴스",
          "속성",
          "관계"
        ],
        "rows": [
          [
            "고객",
            "약 1만",
            "5",
            "2"
          ],
          [
            "회사정보",
            "1",
            "6",
            "1"
          ],
          [
            "주문",
            "약 5만",
            "4",
            "3"
          ],
          [
            "임시메모",
            "약 300",
            "2",
            "0"
          ]
        ]
      }
    ]
  },
  {
    "id": 9902,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "1과목",
    "number": 3,
    "title": "속성명 부여 원칙으로 옳지 않은 것은?",
    "options": [
      "가급적 서술적 속성명을 사용한다.",
      "가능한 약어를 사용하지 않는다.",
      "전체 데이터 모델에서 유일성과 일관성을 확보한다.",
      "업무에서 실제 사용하는 용어를 사용한다."
    ],
    "correctIndex": 0,
    "explanation": "속성명은 간결한 명사형으로 짓는 것이 원칙이라, 서술형으로 길게 짓는다는 ① 이 옳지 않다. 약어를 피하는 것(②), 모델 전체에서 이름을 유일하고 일관되게 맞추는 것(③), 현업에서 실제로 쓰는 용어를 쓰는 것(④)은 모두 속성명 부여 원칙이다.",
    "_source": "authored"
  },
  {
    "id": 9903,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "1과목",
    "number": 4,
    "title": "아래 ERD(IE 표기법)에 대한 설명으로 옳은 것은?",
    "options": [
      "주문이 한 건도 없는 고객은 있을 수 없다.",
      "상품이 하나도 담기지 않은 주문이 있을 수 있다.",
      "한 번도 주문되지 않은 상품이 있을 수 있고, 주문상세는 반드시 상품 하나를 가리킨다.",
      "고객과 상품은 주문상세를 통해 1:1 관계를 맺는다."
    ],
    "correctIndex": 2,
    "explanation": "IE 표기법에서 동그라미는 그 끝의 엔터티가 없어도 된다는 뜻, 세로줄은 반드시 있어야 한다는 뜻이다. 고객–주문 의 주문 쪽에 동그라미가 있어 주문 없는 고객이 있을 수 있다(① 틀림). 주문–주문상세 의 주문상세 쪽은 세로줄 + 까마귀발(1개 이상)이라 상품이 담기지 않은 주문은 없다(② 틀림). 상품–주문상세 의 주문상세 쪽에 동그라미가 있어 주문상세가 없는 상품, 즉 한 번도 주문되지 않은 상품이 있을 수 있고, 상품 쪽은 세로줄 둘이라 주문상세 한 건은 상품 하나를 꼭 가리킨다. 정답은 ③번이다. ④ 는 틀렸다. 고객 한 명이 여러 상품을, 상품 하나가 여러 고객에게 팔릴 수 있어 고객과 상품은 주문·주문상세를 거쳐 M:N 이다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "고객·주문·주문상세·상품 ERD",
        "mermaid": "erDiagram\n    고객 ||..o{ 주문 : \"주문함\"\n    주문 ||--|{ 주문상세 : \"포함\"\n    상품 ||..o{ 주문상세 : \"담김\"\n    고객 {\n        string 고객번호 PK\n    }\n    주문 {\n        string 주문번호 PK\n        string 고객번호 FK\n    }\n    주문상세 {\n        string 주문번호 PK, FK\n        int 순번 PK\n        string 상품번호 FK\n    }\n    상품 {\n        string 상품번호 PK\n    }"
      }
    ]
  },
  {
    "id": 9904,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "1과목",
    "number": 5,
    "title": "다음 중 틀린 것은?",
    "options": [
      "관계는 두 엔터티 사이의 연관성을 표현한다.",
      "식별 관계에서는 부모의 식별자가 자식의 주식별자에 포함된다.",
      "I/E 표기법에서 식별 관계는 점선, 비식별 관계는 실선으로 표현한다.",
      "비식별 관계에서는 부모의 식별자가 자식의 일반 속성이 된다."
    ],
    "correctIndex": 2,
    "explanation": "식별 관계는 강한 연결이므로 실선, 비식별 관계는 느슨한 연결이므로 점선으로 표현한다. ③은 반대로 서술했다. (바커 표기법에서는 실선·점선이 식별 여부가 아니라 필수·선택 참여를 나타낸다.) ①②④ 는 옳은 설명이다.",
    "_source": "authored"
  },
  {
    "id": 9905,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "1과목",
    "number": 6,
    "title": "다음 설명에 해당하는 것은?",
    "options": [
      "식별 관계",
      "비식별 관계",
      "제약 조건",
      "상호 배타적 관계"
    ],
    "correctIndex": 3,
    "explanation": "하나의 엔터티가 둘 이상의 부모와 관계를 맺을 때 한 시점에는 오직 하나의 부모와만 관계를 가지며, 하나가 선택되면 다른 쪽 외래키는 NULL이어야 하는 구조는 상호 배타적 관계(Exclusive Relationship)이다. 예를 들어 결제는 개인 회원의 결제이거나 법인 회원의 결제이지 동시에 둘일 수 없다. ① 식별 관계와 ② 비식별 관계는 부모 키를 자식의 어디에 두느냐의 구분이라 \"둘 중 하나의 부모만\" 이라는 설명과 다르고, ③ 제약 조건은 범위가 너무 넓은 말이다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "하나의 엔터티가 두 개 이상의 부모 엔터티와 관계를 맺을 때, 어느 한 시점에는 오직 하나의 부모와만 관계를 가져야 하는 제약 조건이다. 즉, A 관계를 선택하면 B 관계의 외래키는 NULL이어야 하고, B 관계를 선택하면 A 관계의 외래키는 NULL이어야 한다."
      }
    ]
  },
  {
    "id": 9906,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "1과목",
    "number": 7,
    "title": "아래 부서·사원 ERD(점선 = 비식별자 관계)에 대한 설명으로 옳지 않은 것은?",
    "options": [
      "주민등록번호도 사원마다 달라 주식별자 후보가 되지만, 민감한 개인정보라 사원번호를 주식별자로 쓰는 편이 낫다.",
      "사원.부서번호 에는 부서 테이블에 없는 부서번호를 넣을 수 없다.",
      "비식별자 관계라 사원의 주식별자에 부서번호가 들어가지 않는다.",
      "사원 쪽 끝에 동그라미가 있으므로 부서가 없는 사원이 있을 수 있다."
    ],
    "correctIndex": 3,
    "explanation": "관계선 끝의 기호는 그 끝에 있는 엔터티가 몇 개 참여하는지를 나타낸다. 사원 쪽 끝의 동그라미 + 까마귀발은 '부서 하나에 사원이 0명 이상' 이라는 뜻이라, 사원이 없는 부서가 있을 수 있다는 의미다. 부서 쪽 끝은 세로줄 둘이라 사원은 반드시 부서 하나에 속한다. 그래서 '부서가 없는 사원이 있을 수 있다' 는 ④ 가 옳지 않다. 정답은 ④번이다. ① 주민등록번호도 유일하지만 개인정보 보호 때문에 주식별자로는 피한다. ② 부서번호는 외래키라 부서에 있는 값만 넣을 수 있고(참조 무결성), ③ 점선은 부모 키가 자식의 일반 칼럼으로만 들어가는 비식별자 관계다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "부서·사원 ERD",
        "mermaid": "erDiagram\n    부서 ||..o{ 사원 : \"소속\"\n    부서 {\n        string 부서번호 PK\n        string 부서위치\n    }\n    사원 {\n        string 사원번호 PK\n        string 부서번호 FK\n        string 주민등록번호\n    }"
      }
    ]
  },
  {
    "id": 9907,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "1과목",
    "number": 8,
    "title": "주식별자에 대한 설명으로 옳지 않은 것은?",
    "options": [
      "주식별자는 해당 엔터티의 모든 인스턴스를 유일하게 구분할 수 있어야 한다.",
      "주식별자를 구성하는 속성의 수는 가능한 한 적게 구성한다.",
      "주식별자는 NULL 값을 가질 수 없다.",
      "이미 정의된 주식별자라도 업무 변화에 따라 유연하게 변경할 수 있다."
    ],
    "correctIndex": 3,
    "explanation": "주식별자는 유일성·최소성·존재성(NOT NULL)과 함께 불변성을 만족해야 한다. 한 번 정해지면 업무 환경이 바뀌어도 쉽게 변하지 않아야 하며, 값이 변하면 이를 물려받은 자식 엔터티의 키까지 모두 수정해야 하므로 ④는 옳지 않다. ① 은 유일성, ② 는 최소성, ③ 은 존재성으로 옳은 설명이다.",
    "_source": "authored"
  },
  {
    "id": 9908,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "1과목",
    "number": 9,
    "title": "아래 회원 테이블의 전화번호는 한 칸에 여러 값이 들어 있는 다중값 속성이다. 제1정규형을 만족하도록 전화번호를 별도 테이블로 분리할 때, 그 테이블의 행 수와 기본키로 옳은 것은?",
    "options": [
      "3, 회원번호",
      "6, 회원번호 + 전화번호",
      "6, 전화번호",
      "3, 회원번호 + 전화번호"
    ],
    "correctIndex": 1,
    "explanation": "제1정규형은 한 칸에 값이 하나만 있어야 한다. 다중값 속성은 회원번호와 전화번호를 한 쌍씩 담는 회원전화 테이블로 떼어 낸다. 전화번호가 M1 2개, M2 1개, M3 3개라 행은 6개가 된다. 한 회원이 번호를 여러 개 가질 수 있으니 회원번호만으로는 구별되지 않고, 같은 번호를 여러 회원이 쓸 수도 있으니 전화번호만으로도 안 된다. 그래서 기본키는 회원번호 + 전화번호 다. 정답은 ②번이다. ①·④ 는 회원마다 한 행으로 본 것, ③ 은 전화번호가 회원끼리 겹치지 않는다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "회원",
        "headers": [
          "회원번호",
          "이름",
          "전화번호"
        ],
        "rows": [
          [
            "M1",
            "김",
            "1111, 2222"
          ],
          [
            "M2",
            "이",
            "3333"
          ],
          [
            "M3",
            "박",
            "4444, 5555, 6666"
          ]
        ]
      },
      {
        "type": "text",
        "content": "같은 전화번호를 여러 회원이 함께 쓰는 경우도 있다(가족 공용 전화)."
      }
    ]
  },
  {
    "id": 9909,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "1과목",
    "number": 10,
    "title": "데이터 모델링 관점에서 트랜잭션의 역할로 가장 적절한 것은?",
    "options": [
      "여러 사용자가 동시에 접근해도 서로 간섭하지 않도록 한다.",
      "하나의 작업이 전부 반영되거나 전부 취소되도록 한다.",
      "함께 처리되어야 하는 데이터의 범위를 하나의 단위로 규정하여 무결성이 지켜지도록 한다.",
      "데이터를 백업하고 장애 시 복구한다."
    ],
    "correctIndex": 2,
    "explanation": "데이터 모델을 설계하는 관점에서 트랜잭션은 출금과 입금처럼 절대 나눠지면 안 되는 하나의 업무 흐름, 즉 함께 처리되어야 하는 데이터의 논리적 범위를 규정하여 무결성을 보장하기 위한 개념이다. ①②④는 고립성·원자성·복구와 같은 물리적(기술적) 특징에 가깝다. ※ 복원 출처마다 정답이 ②(원자성)·③ 으로 갈린다. ② 는 DBMS 가 보장하는 트랜잭션 특성(원자성) 설명이고, 문제는 '데이터 모델링 관점' 을 묻고 있어 ③ 을 정답으로 했다.",
    "_source": "authored"
  },
  {
    "id": 9910,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 11,
    "title": "다음 중 SQL의 특징으로 옳지 않은 것은?",
    "options": [
      "절차적 언어이다.",
      "구조적 언어이다.",
      "선언적 언어이다.",
      "집합적 언어이다."
    ],
    "correctIndex": 0,
    "explanation": "SQL은 어떻게 처리할지가 아니라 무엇을 원하는지를 기술하는 선언적(비절차적)·집합적·구조적 언어이다. ① 절차적 언어라는 설명은 옳지 않고, ②(구조적)·③(선언적)·④(집합적)는 SQL 의 특징이다.",
    "_source": "authored"
  },
  {
    "id": 9911,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 12,
    "title": "다음과 같이 CTAS로 테이블을 복제할 때에 대한 설명으로 옳은 것은?",
    "options": [
      "PK는 적용되지 않는다.",
      "NOT NULL은 적용되지 않는다.",
      "CHECK 제약은 적용된다.",
      "DEFAULT 값은 적용된다."
    ],
    "correctIndex": 0,
    "explanation": "CREATE TABLE ... AS SELECT로 복제하면 컬럼의 데이터 타입과 NOT NULL 제약만 복사되고, PK·UNIQUE·FK·CHECK 제약과 기본 인덱스는 복사되지 않는다. ② NOT NULL 은 복사되므로 틀리고, ③ CHECK 와 ④ DEFAULT 는 복사되지 않으므로 틀리다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "CREATE TABLE student_backup AS\nSELECT * FROM student;"
      }
    ]
  },
  {
    "id": 9912,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 13,
    "title": "아래 T 테이블에 대한 SQL 의 결과(P, Q, R, S)로 옳은 것은?",
    "options": [
      "42, 42, 3, 10",
      "25, 42, 3, 15",
      "25, 25, 1, 15",
      "25, 42, 1, 15"
    ],
    "correctIndex": 3,
    "explanation": "NULL 이 섞인 덧셈은 결과가 NULL 이다. 행마다 A + B 는 NULL, 25, NULL 이라 P 는 NULL 을 뺀 합 25, R 은 NULL 이 아닌 값의 개수 1 이다. Q 는 칼럼별로 먼저 합해서 SUM(A) 30 + SUM(B) 12 = 42 다. 같은 데이터라도 더하는 순서에 따라 P 와 Q 가 달라진다. S 의 AVG(A) 는 NULL 을 빼고 (10 + 20) / 2 = 15 다. 정답은 ④번이다. ① 은 NULL 을 0 으로 보고 계산한 것, ② 는 COUNT 가 NULL 결과도 센다고 본 것, ③ 은 SUM(A) + SUM(B) 도 행별 덧셈과 같다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T",
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
            "20",
            "5"
          ],
          [
            "NULL",
            "7"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT SUM(A + B)        AS P,\n       SUM(A) + SUM(B)   AS Q,\n       COUNT(A + B)      AS R,\n       AVG(A)            AS S\nFROM   T;"
      }
    ]
  },
  {
    "id": 9913,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 14,
    "title": "다음 SQL의 수행 결과는?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctIndex": 2,
    "explanation": "REGEXP_COUNT(문자열, 패턴, 시작위치)는 패턴이 일치하는 횟수를 센다. 'abcd' 가 4번 반복되니 'ab' 도 겹치지 않고 정확히 4번 나와 ③ 4 다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT REGEXP_COUNT('abcdabcdabcdabcd', 'ab', 1)\nFROM   DUAL;"
      }
    ]
  },
  {
    "id": 9914,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 15,
    "title": "다음 중 NULL이 반환되지 않는 것은?",
    "options": [
      "CASE 'AB' WHEN 'CD' THEN 'EF' END",
      "DECODE('AB', 'CD', 'EF', NULL)",
      "COALESCE('AB', 'CD', NULL)",
      "NULLIF('A', 'A')"
    ],
    "correctIndex": 2,
    "explanation": "COALESCE는 인자를 순서대로 평가해 처음으로 NULL이 아닌 값 'AB'를 반환한다. ①은 일치하는 WHEN이 없고 ELSE가 없어 NULL, ②는 매칭 실패 시 기본값 NULL, ④는 두 인자가 같으면 NULL을 반환한다.",
    "_source": "authored"
  },
  {
    "id": 9915,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 16,
    "title": "급여 값이 모두 서로 다른 EMP 테이블에서 급여가 가장 적은 직원 5명을 조회하려고 한다. 다음 중 실행 순서 때문에 의도와 다른 결과를 낼 수 있는 SQL은?",
    "options": [
      "(가) SQL Server\nSELECT TOP 5 * FROM EMP ORDER BY SAL ASC;",
      "(나) SQL Server\nSELECT TOP 5 WITH TIES * FROM EMP ORDER BY SAL ASC;",
      "(다) Oracle\nSELECT * FROM EMP WHERE ROWNUM <= 5 ORDER BY SAL ASC;",
      "(라) 표준 SQL\nSELECT * FROM EMP ORDER BY SAL ASC FETCH FIRST 5 ROWS ONLY;"
    ],
    "correctIndex": 2,
    "explanation": "Oracle에서 같은 쿼리 블록의 ROWNUM <= 5는 ORDER BY 정렬보다 먼저 적용된다. 임의로 뽑힌 5행만 정렬될 뿐 급여가 가장 적은 5명이 보장되지 않는다. (가) TOP 5와 (라) FETCH FIRST는 정렬 결과의 앞 5행을 제한하고, (나) WITH TIES는 경계값과 같은 행을 추가로 포함하지만 급여가 모두 다르다고 했으므로 정확히 5행이 나온다. (다)를 고치려면 인라인 뷰 안에서 먼저 정렬한 뒤 바깥에서 ROWNUM을 적용해야 한다.",
    "_source": "authored"
  },
  {
    "id": 9916,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 17,
    "title": "다음 UPDATE 문으로 급여가 갱신되는 행의 범위는?",
    "options": [
      "서울 부서 소속(홍길동, 이몽룡)만 급여 * 1.1",
      "전체(3명) 급여 * 1.1",
      "갱신되는 행이 없다.",
      "단일 행이 반환되지 않아 오류가 발생한다."
    ],
    "correctIndex": 1,
    "explanation": "EXISTS 서브쿼리가 메인 쿼리와 연결(상관)되어 있지 않아 부서 테이블에 지역이 '서울'인 행이 존재하기만 하면 모든 직원 행에 대해 항상 참이 된다. 따라서 3명 모두 갱신된다. ① 은 서브쿼리가 직원 A 와 연결된(WHERE B.부서번호 = A.부서번호 를 넣은) 경우의 결과이고, ③ 은 서울 부서가 하나도 없을 때의 결과다. ④ 단일 행 오류는 = 로 여러 행을 비교할 때 나는 것이라 EXISTS 와 관계없다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "직원",
        "headers": [
          "이름",
          "부서번호",
          "급여"
        ],
        "rows": [
          [
            "홍길동",
            "10",
            "3000"
          ],
          [
            "이몽룡",
            "11",
            "3500"
          ],
          [
            "이영희",
            "20",
            "4000"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "부서",
        "headers": [
          "부서번호",
          "지역"
        ],
        "rows": [
          [
            "10",
            "서울"
          ],
          [
            "11",
            "서울"
          ],
          [
            "20",
            "부산"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "UPDATE 직원 A\nSET    급여 = 급여 * 1.1\nWHERE  EXISTS (SELECT 1\n               FROM   부서 B\n               WHERE  지역 = '서울');"
      }
    ]
  },
  {
    "id": 9917,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 18,
    "title": "다음 SQL의 수행 결과는?",
    "options": [
      "10",
      "100",
      "120",
      "오류가 발생한다."
    ],
    "correctIndex": 1,
    "explanation": "TO_CHAR로 값이 문자열('100', '90', '80')이 되므로 MAX는 문자열 비교로 '90'을 반환한다(첫 글자 9 > 1). 이후 MIN(COL_A)=10과 더할 때 문자 '90'이 숫자 90으로 묵시적 형변환되어 10 + 90 = 100이 된다. ① 10 은 MAX 결과를 더하지 않은 값이고, ④ 문자 '90' 은 숫자로 자동 변환되어 더해지므로 오류가 나지 않는다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TBL",
        "headers": [
          "COL_A",
          "COL_B"
        ],
        "rows": [
          [
            "10",
            "100"
          ],
          [
            "20",
            "90"
          ],
          [
            "30",
            "80"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT MIN(COL_A) + MAX(TO_CHAR(COL_B))\nFROM   TBL;"
      }
    ]
  },
  {
    "id": 9918,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 19,
    "title": "다음 중 결과 행 수가 가장 많은 쿼리는?",
    "options": [
      "SELECT * FROM 테이블1 A LEFT JOIN 테이블2 B\nON A.ID = B.ID AND B.COUNTRY = 'UK';",
      "SELECT * FROM 테이블1 A LEFT JOIN 테이블2 B\nON A.ID = B.ID\nWHERE B.COUNTRY = 'UK';",
      "SELECT * FROM 테이블1 A INNER JOIN 테이블2 B\nON A.ID = B.ID\nWHERE B.COUNTRY = 'UK';",
      "SELECT * FROM 테이블1 A RIGHT OUTER JOIN 테이블2 B\nON A.ID = B.ID\nWHERE B.COUNTRY = 'UK';"
    ],
    "correctIndex": 0,
    "explanation": "아우터 조인에서 ON 절의 조건은 조인 과정에서 적용되므로 기준 테이블(왼쪽)의 4행이 모두 보존된다(①은 4행). 반면 WHERE 절의 B.COUNTRY = 'UK' 조건은 조인 이후에 적용되어 ②③④는 모두 Shakespeare(200) 1행만 남는다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "테이블1",
        "headers": [
          "ID"
        ],
        "rows": [
          [
            "100"
          ],
          [
            "200"
          ],
          [
            "100"
          ],
          [
            "300"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "테이블2",
        "headers": [
          "ID",
          "NAME",
          "COUNTRY"
        ],
        "rows": [
          [
            "100",
            "Hugo",
            "FR"
          ],
          [
            "200",
            "Shakespeare",
            "UK"
          ],
          [
            "300",
            "Goethe",
            "DE"
          ]
        ]
      }
    ]
  },
  {
    "id": 9919,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 20,
    "title": "다음 테이블에서 NULL을 입력할 수 있는 행으로 가장 적절한 것은? (값은 가, 나, 다, 라 순서)",
    "options": [
      "NULL, b, c, d",
      "a, NULL, c, d",
      "a, b, NULL, d",
      "a, b, c, NULL"
    ],
    "correctIndex": 2,
    "explanation": "가는 PRIMARY KEY(①), 나는 NOT NULL(②), 라는 CHECK (라 IS NOT NULL)(④) 때문에 NULL 을 넣을 수 없다. UNIQUE 제약은 NULL 을 허용하므로 NULL 을 넣을 수 있는 컬럼은 다뿐이다(③).",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "CREATE TABLE T (\n    가  CHAR(3),\n    나  VARCHAR2(10) NOT NULL,\n    다  VARCHAR2(10) UNIQUE,\n    라  VARCHAR2(10) CHECK (라 IS NOT NULL),\n    PRIMARY KEY (가)\n);"
      }
    ]
  },
  {
    "id": 9920,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 21,
    "title": "다음 SQL의 수행 결과는?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 1,
    "explanation": "NOT BETWEEN 100 AND 200은 값 < 100 또는 값 > 200과 같다. 50과 350 두 건이 조건을 만족하고, NULL은 비교 결과가 UNKNOWN이라 제외된다. 100과 200은 경계값이라 BETWEEN에 포함되므로 NOT BETWEEN에서는 제외된다. ① 1 은 한쪽만, ③ 3 은 NULL 까지, ④ 4 는 경계값 100·200 까지 센 값이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TBL",
        "headers": [
          "값"
        ],
        "rows": [
          [
            "100"
          ],
          [
            "110"
          ],
          [
            "NULL"
          ],
          [
            "50"
          ],
          [
            "350"
          ],
          [
            "200"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT COUNT(*)\nFROM   TBL\nWHERE  값 NOT BETWEEN 100 AND 200;"
      }
    ]
  },
  {
    "id": 9921,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 22,
    "title": "다음 SQL의 수행 결과는?",
    "options": [
      "100",
      "300",
      "100, 200",
      "100, 200, 300"
    ],
    "correctIndex": 1,
    "explanation": "사용자와 구매일로 그룹핑하므로 사용자 100은 20260101 그룹(품목 A뿐)과 20260201 그룹(품목 B뿐)으로 나뉘어 각 그룹의 품목 종류가 1개라 탈락한다. 200은 품목 A, B 2종에 합계 1000이지만 MAX가 500이라 MAX < 500 조건에서 탈락한다. 300은 품목 2종, 합계 700, MAX 400으로 모두 만족한다. 따라서 100 이 들어간 ①③④ 와 200 이 들어간 ③④ 는 틀리다. 구매일 없이 사용자로만 묶었다면 100 도 남는다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TBL",
        "headers": [
          "사용자",
          "구매항목",
          "구매일",
          "구매금액"
        ],
        "rows": [
          [
            "100",
            "A",
            "20260101",
            "100"
          ],
          [
            "100",
            "A",
            "20260101",
            "200"
          ],
          [
            "100",
            "B",
            "20260201",
            "300"
          ],
          [
            "100",
            "A",
            "20260101",
            "400"
          ],
          [
            "200",
            "A",
            "20260101",
            "200"
          ],
          [
            "200",
            "A",
            "20260101",
            "300"
          ],
          [
            "200",
            "B",
            "20260101",
            "500"
          ],
          [
            "300",
            "A",
            "20260101",
            "300"
          ],
          [
            "300",
            "B",
            "20260101",
            "400"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT 사용자\nFROM   TBL\nGROUP  BY 사용자, 구매일\nHAVING COUNT(DISTINCT 구매항목) >= 2\n   AND SUM(구매금액) >= 700\n   AND MAX(구매금액) < 500;"
      }
    ]
  },
  {
    "id": 9922,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 23,
    "title": "다음 MERGE 수행 후 테이블1의 total_pay 합계는?",
    "options": [
      "10000",
      "13000",
      "16000",
      "19000"
    ],
    "correctIndex": 1,
    "explanation": "num이 일치하는 1001은 total_pay가 5000+1000=6000, 1002는 3000+0=3000이 되는데 DELETE WHERE total_pay < 4000에 의해 삭제된다. 1003은 테이블2에 없어 4000 그대로이고, 일치하지 않는 1004는 (1004, 3000, 3000)으로 삽입된다. 합계는 6000 + 4000 + 3000 = 13000이다. ① 10000 은 새로 들어간 1004 를 빠뜨린 값이고, ③ 16000 은 DELETE WHERE 를 적용하지 않아 1002(3000)가 남은 값이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "테이블1",
        "headers": [
          "num",
          "salary",
          "total_pay"
        ],
        "rows": [
          [
            "1001",
            "5000",
            "5000"
          ],
          [
            "1002",
            "3000",
            "3000"
          ],
          [
            "1003",
            "4000",
            "4000"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "테이블2",
        "headers": [
          "num",
          "comm"
        ],
        "rows": [
          [
            "1001",
            "1000"
          ],
          [
            "1002",
            "0"
          ],
          [
            "1004",
            "1000"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "MERGE INTO 테이블1 T1\nUSING 테이블2 T2\nON (T1.num = T2.num)\nWHEN MATCHED THEN\n    UPDATE SET T1.total_pay = T1.salary + T2.comm\n    DELETE WHERE T1.total_pay < 4000\nWHEN NOT MATCHED THEN\n    INSERT (T1.num, T1.salary, T1.total_pay)\n    VALUES (T2.num, 3000, 3000);"
      }
    ]
  },
  {
    "id": 9923,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 24,
    "title": "아래 T 테이블에 대한 SQL ㉠~㉣ 의 결과를 차례대로 나열한 것은?",
    "options": [
      "N / N / 0 / NULL",
      "NULL / 공집합 / 0 / 0",
      "N / 공집합 / 0 / 0",
      "N / 공집합 / 0 / NULL"
    ],
    "correctIndex": 3,
    "explanation": "COL = 9 인 행은 없다. GROUP BY 없이 집계 함수만 쓰면 대상 행이 없어도 결과는 한 행으로 나온다. ㉠ 은 MAX('Y') 가 NULL 이라 NVL 로 'N' 이 되고, ㉢ COUNT(*) 는 0, ㉣ SUM 은 더할 값이 없어 NULL 이다. ㉡ 처럼 GROUP BY 가 있으면 만들 그룹이 하나도 없어 결과 행이 없다(공집합). 정답은 ④번이다. ① 은 GROUP BY 가 있어도 한 행이 나온다고 본 것, ③ 은 행이 없을 때 SUM 이 0 이라고 본 것이다. 0 이 필요하면 NVL(SUM(COL), 0) 으로 쓴다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T",
        "headers": [
          "C1",
          "COL"
        ],
        "rows": [
          [
            "A",
            "1"
          ],
          [
            "A",
            "2"
          ],
          [
            "B",
            "3"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT NVL(MAX('Y'), 'N') FROM T WHERE COL = 9;\n-- ㉡\nSELECT NVL(MAX('Y'), 'N') FROM T WHERE COL = 9\nGROUP BY C1;\n-- ㉢\nSELECT COUNT(*) FROM T WHERE COL = 9;\n-- ㉣\nSELECT SUM(COL) FROM T WHERE COL = 9;"
      }
    ]
  },
  {
    "id": 9924,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 25,
    "title": "아래 두 테이블을 ID 로 조인할 때 INNER JOIN, LEFT OUTER JOIN, FULL OUTER JOIN 의 결과 행 수로 옳은 것은?",
    "options": [
      "3, 4, 5",
      "5, 5, 5",
      "4, 5, 6",
      "4, 4, 4"
    ],
    "correctIndex": 2,
    "explanation": "같은 값이 여러 행이면 가능한 짝이 모두 만들어진다. ID 1 은 T1 의 2행 × T2 의 1행 = 2행, ID 2 는 1행 × 2행 = 2행이라 INNER JOIN 은 4행이다. NULL 은 NULL 과도 같지 않아 짝이 생기지 않는다. LEFT OUTER JOIN 은 여기에 짝이 없는 T1 의 NULL 행이 더해져 5행, FULL OUTER JOIN 은 T2 의 NULL 행까지 더해져 6행이다. 정답은 ③번이다. ① 은 같은 값이 여러 행일 때 짝을 덜 센 것, ② 는 NULL 끼리 같다고 본 것, ④ 는 외부 조인에서 짝 없는 행이 추가된다는 것을 놓친 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T1",
        "headers": [
          "ID"
        ],
        "rows": [
          [
            "1"
          ],
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
        "caption": "T2",
        "headers": [
          "ID"
        ],
        "rows": [
          [
            "1"
          ],
          [
            "2"
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
        "type": "sql",
        "code": "SELECT * FROM T1 INNER JOIN T2\n  ON T1.ID = T2.ID;\nSELECT * FROM T1 LEFT OUTER JOIN T2\n  ON T1.ID = T2.ID;\nSELECT * FROM T1 FULL OUTER JOIN T2\n  ON T1.ID = T2.ID;"
      }
    ]
  },
  {
    "id": 9925,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 26,
    "title": "주문을 하지 않은 고객을 찾으려 할 때, 다음 중 결과가 다른 것은? (주문 테이블의 NULL은 비회원 주문이다.)",
    "options": [
      "SELECT * FROM 고객\nWHERE 고객번호 NOT IN (SELECT 고객번호 FROM 주문 WHERE 고객번호 IS NOT NULL);",
      "SELECT * FROM 고객\nWHERE 고객번호 NOT IN (SELECT NVL(고객번호, 9999) FROM 주문);",
      "SELECT * FROM 고객 C\nWHERE EXISTS (SELECT 1 FROM 주문 O WHERE O.고객번호 <> C.고객번호);",
      "SELECT * FROM 고객 C\nWHERE NOT EXISTS (SELECT 1 FROM 주문 O WHERE O.고객번호 = C.고객번호);"
    ],
    "correctIndex": 2,
    "explanation": "①②④는 NULL의 영향을 제거했거나 받지 않아 모두 주문하지 않은 고객(2번)만 조회한다. ③은 '다른 고객번호의 주문이 존재하는' 고객을 찾는 조건이라 모든 고객이 조회되어 결과가 다르다. NOT IN은 서브쿼리에 NULL이 있으면 결과가 나오지 않으므로 반드시 NULL을 걸러야 한다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "고객",
        "headers": [
          "고객번호",
          "고객명"
        ],
        "rows": [
          [
            "1",
            "김철수"
          ],
          [
            "2",
            "이영희"
          ],
          [
            "3",
            "박민수"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "주문",
        "headers": [
          "고객번호"
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
          ],
          [
            "3"
          ]
        ]
      }
    ]
  },
  {
    "id": 9926,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 27,
    "title": "다음 DEPT 테이블에 대한 (가)~(라) SQL 중 실행 시 오류가 발생하는 것은?",
    "options": [
      "(가)\nSELECT DNAME\nFROM DEPT;",
      "(나)\nSELECT b.DEPTNO\nFROM (\n  SELECT b.DEPTNO\n  FROM DEPT b\n) a;",
      "(다)\nSELECT SUBSTR(DNAME, 1, 3)\nFROM DEPT;",
      "(라)\nSELECT RTRIM(DNAME)\nFROM DEPT;"
    ],
    "correctIndex": 1,
    "explanation": "(나)는 인라인 뷰 안에서 정의한 테이블 별칭 b를 바깥 SELECT 절에서 참조하므로 오류가 발생한다. b의 유효 범위는 괄호 안의 쿼리 블록뿐이며 바깥에서는 인라인 뷰 별칭 a를 사용해야 한다(SELECT a.DEPTNO). (가) ①, (다) ③, (라) ④ 는 각각 컬럼 조회, 문자열 자르기, 오른쪽 공백 제거로 모두 정상 실행된다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "DEPT",
        "headers": [
          "DEPTNO",
          "DNAME"
        ],
        "rows": [
          [
            "10",
            "SQL Developer"
          ],
          [
            "20",
            "SQR Master"
          ]
        ]
      }
    ]
  },
  {
    "id": 9927,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 28,
    "title": "다음 SQL의 수행 결과는?",
    "options": [
      "JONES",
      "ALLEN, JONES, MARTIN",
      "ALLEN, MARTIN",
      "결과 없음"
    ],
    "correctIndex": 2,
    "explanation": "LIKE '%N'은 N으로 끝나는 문자열만 매칭한다. ALLEN과 MARTIN이 해당하며, JONES는 N이 중간에 포함될 뿐 S로 끝나므로 제외된다. 따라서 ① 은 틀리고, ② 는 '%N%'(N 포함)로 본 결과이며, ④ ALLEN·MARTIN 이 N 으로 끝나므로 결과가 있다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP",
        "headers": [
          "ENAME"
        ],
        "rows": [
          [
            "SMITH"
          ],
          [
            "ALLEN"
          ],
          [
            "JONES"
          ],
          [
            "MARTIN"
          ],
          [
            "KING"
          ],
          [
            "BLAKE"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT ENAME\nFROM   EMP\nWHERE  ENAME LIKE '%N';"
      }
    ]
  },
  {
    "id": 9928,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 29,
    "title": "NULL 값을 0으로 출력하는 함수로 옳은 것은?",
    "options": [
      "COALESCE(PRICE, 0)",
      "NULL(PRICE, 0)",
      "IFNULL(PRICE, 0)",
      "NULLIF(0, PRICE)"
    ],
    "correctIndex": 0,
    "explanation": "COALESCE(PRICE, 0)은 PRICE가 NULL이면 0을 반환한다. ② NULL(PRICE, 0)이라는 함수는 없고, ③ IFNULL은 MySQL 전용이며, ④ NULLIF(a, b)는 두 값이 같으면 NULL을 반환하는 함수라 NULL 을 0 으로 바꾸지 못한다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TABLE",
        "headers": [
          "PRICE"
        ],
        "rows": [
          [
            "1000"
          ],
          [
            "2000"
          ],
          [
            "NULL"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "결과",
        "headers": [
          "PRICE"
        ],
        "rows": [
          [
            "1000"
          ],
          [
            "2000"
          ],
          [
            "0"
          ]
        ]
      }
    ]
  },
  {
    "id": 9929,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 30,
    "title": "A(ID 1, 2, 3), B(ID 2, 3, 3, 4) 테이블과 행이 하나도 없는 C 테이블이 있다. 아래 ㉠, ㉡, ㉢ 의 결과로 옳은 것은?",
    "options": [
      "12, 0, 3",
      "12, 3, 3",
      "7, 0, 3",
      "12, 0, 12"
    ],
    "correctIndex": 0,
    "explanation": "CROSS JOIN 은 A 의 각 행을 B 의 모든 행과 짝지어 3 × 4 = 12행을 만든다. C 는 행이 없어 짝지을 상대가 없으므로 ㉡ 은 3 × 0 = 0행이다. ㉢ 은 12개 짝 중 WHERE 를 만족하는 것만 남겨 INNER JOIN 과 같아진다. ID 2 는 1쌍, ID 3 은 B 에 두 번 있어 2쌍이라 3 이다. 정답은 ①번이다. ② 는 빈 테이블과 조인해도 A 의 행이 남는다고 본 것, ③ 은 두 테이블 행 수를 더한 것, ④ 는 CROSS JOIN 에는 WHERE 가 적용되지 않는다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT COUNT(*) FROM A CROSS JOIN B;\n-- ㉡\nSELECT COUNT(*) FROM A CROSS JOIN C;\n-- ㉢\nSELECT COUNT(*)\nFROM   A CROSS JOIN B\nWHERE  A.ID = B.ID;"
      }
    ]
  },
  {
    "id": 9930,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 31,
    "title": "다음은 식별 관계로 연결된 네 테이블의 키 구성이다. 네 테이블을 상속된 키 전체로 조인하여 카티션 곱이 발생하지 않게 할 때, ON 절에 필요한 등호(=) 조건식의 총 개수는?",
    "options": [
      "3개",
      "4개",
      "5개",
      "6개"
    ],
    "correctIndex": 3,
    "explanation": "식별 관계에서는 부모의 PK가 자식의 PK와 FK로 상속되므로 복합키 전체를 조인 조건에 포함해야 한다. A-B는 A_ID 1개, B-C는 A_ID·B_ID 2개, C-D는 A_ID·B_ID·C_ID 3개로 1 + 2 + 3 = 6개이다. ① 3개는 조인 연산의 횟수일 뿐이고, ② 4개·③ 5개는 복합 외래키의 일부 조건을 누락한 값이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "테이블 키 구성",
        "headers": [
          "테이블",
          "기본키(PK)",
          "상위 테이블을 참조하는 외래키(FK)"
        ],
        "rows": [
          [
            "A",
            "A_ID",
            "-"
          ],
          [
            "B",
            "A_ID, B_ID",
            "A_ID"
          ],
          [
            "C",
            "A_ID, B_ID, C_ID",
            "A_ID, B_ID"
          ],
          [
            "D",
            "A_ID, B_ID, C_ID, D_ID",
            "A_ID, B_ID, C_ID"
          ]
        ]
      }
    ]
  },
  {
    "id": 9931,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 32,
    "title": "아래 A, B, C 테이블에 대해 ㉠ (A INTERSECT B) UNION ALL C 와 ㉡ (A INTERSECT B) UNION C 의 결과 행 수로 옳은 것은?",
    "options": [
      "㉠ 4, ㉡ 3",
      "㉠ 5, ㉡ 4",
      "㉠ 5, ㉡ 3",
      "㉠ 4, ㉡ 2"
    ],
    "correctIndex": 2,
    "explanation": "집합 연산자는 NULL 끼리를 같은 값으로 본다. A INTERSECT B 는 양쪽에 다 있는 2 와 NULL 의 2행이다. ㉠ UNION ALL 은 중복을 그대로 두므로 2 + 3 = 5행이다. ㉡ UNION 은 중복을 없애 2, NULL, 4 의 3행이 된다(C 의 NULL 두 개와 교집합의 NULL 이 하나로 합쳐진다). 정답은 ③번이다. ① 은 INTERSECT 에서 NULL 이 빠진다고 본 것, ② 는 UNION 에서 C 의 NULL 을 따로 센 것, ④ 는 둘 다 잘못 센 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "A",
        "headers": [
          "V"
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
        "caption": "B",
        "headers": [
          "V"
        ],
        "rows": [
          [
            "2"
          ],
          [
            "3"
          ],
          [
            "NULL"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "C",
        "headers": [
          "V"
        ],
        "rows": [
          [
            "NULL"
          ],
          [
            "NULL"
          ],
          [
            "4"
          ]
        ]
      }
    ]
  },
  {
    "id": 9932,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 33,
    "title": "계층형 쿼리에 대한 설명으로 옳지 않은 것은?",
    "options": [
      "리프 노드의 레벨은 반드시 1이다.",
      "START WITH 절로 시작 위치를 지정한다.",
      "순방향 전개에서는 CONNECT BY 상위부서코드 = PRIOR 부서코드로 작성한다.",
      "CONNECT BY 절로 자식 노드를 지정한다."
    ],
    "correctIndex": 0,
    "explanation": "LEVEL 1은 루트 노드이고 리프 노드는 트리의 가장 아래 노드로 하위 레벨을 가진다. 따라서 리프 노드의 레벨이 반드시 1이라는 설명은 옳지 않다. ②③④ 는 옳은 설명이다.",
    "_source": "authored"
  },
  {
    "id": 9933,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 34,
    "title": "다음 표에서 SUM(컬럼1) / COUNT(컬럼1)의 결과는?",
    "options": [
      "150",
      "200",
      "250",
      "오류가 발생한다."
    ],
    "correctIndex": 1,
    "explanation": "SUM(컬럼1)은 NULL을 제외한 100 + 200 + 300 = 600이고, COUNT(컬럼1)도 NULL을 제외한 3이므로 600 / 3 = 200이다. ① 150 은 NULL 을 0 으로 보고 4 로 나눈 값(600 ÷ 4)이고, ④ NULL 이 있어도 집계 함수는 오류 없이 NULL 을 건너뛴다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TBL",
        "headers": [
          "컬럼1"
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
            "300"
          ]
        ]
      }
    ]
  },
  {
    "id": 9934,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 35,
    "title": "다음 SQL을 4건이 저장된 테이블에 실행했을 때 출력 결과는?",
    "options": [
      "2개 행이 출력된다 (1, 2번째 행)",
      "3개 행이 출력된다 (1, 2, 4번째 행)",
      "전체 행이 출력된다.",
      "아무 행도 출력되지 않는다."
    ],
    "correctIndex": 0,
    "explanation": "ROWNUM은 조건을 통과한 행에 순차적으로 부여된다. 1, 2번째 행은 ROWNUM이 1, 2로 조건(<> 3)을 통과하지만, 3번째 행은 ROWNUM 3이라 탈락하고 그다음 행도 다시 ROWNUM 3이 부여되어 계속 탈락한다. 따라서 1, 2번째 행만 출력된다. ② 는 ROWNUM 이 원래 행 번호처럼 고정된다고 본 결과, ③ 은 조건이 무시된다고 본 결과, ④ 는 ROWNUM > 2 처럼 첫 행부터 탈락하는 조건과 헷갈린 결과다.",
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
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT *\nFROM   TBL\nWHERE  ROWNUM <> 3;"
      }
    ]
  },
  {
    "id": 9935,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 36,
    "title": "다음 중 틀린 것은?",
    "options": [
      "CUBE는 가능한 모든 조합의 집계를 생성한다.",
      "GROUPING SETS는 지정한 그룹핑 조합만 집계한다.",
      "ROLLUP은 계층 구조의 소계와 총계를 생성한다.",
      "ROLLUP은 인자의 순서가 달라져도 결과가 동일하다."
    ],
    "correctIndex": 3,
    "explanation": "ROLLUP은 인자 순서에 따라 소계의 단위가 달라져 결과가 달라진다. 인자 순서와 무관하게 결과가 같은 것은 모든 조합을 만드는 CUBE이다. ①②③ 은 옳은 설명이다.",
    "_source": "authored"
  },
  {
    "id": 9936,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 37,
    "title": "뷰(VIEW)에 대한 설명으로 틀린 것은? (Materialized View는 제외)",
    "options": [
      "복잡한 쿼리를 뷰로 정의해 두기 때문에 다른 복잡한 조회의 성능이 좋아진다.",
      "테이블에 변경 사항이 있어도 뷰를 사용하는 응용 프로그램은 수정하지 않아도 되는 경우가 있다.",
      "뷰는 물리적 저장 공간을 사용하지 않는다.",
      "선택적으로 일부 데이터만 뷰로 노출할 수 있다."
    ],
    "correctIndex": 0,
    "explanation": "일반 뷰는 쿼리 정의만 저장하는 가상 테이블이라 조회할 때마다 정의된 쿼리가 실행되므로 성능을 개선하지 않는다. ② 독립성, ③ 저장 공간을 쓰지 않음, ④ 보안(일부 데이터만 노출)은 뷰의 옳은 특징이다.",
    "_source": "authored"
  },
  {
    "id": 9937,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 38,
    "title": "다음 두 테이블에 각각 COUNT(DISTINCT 칼럼)을 적용한 결과는? (테이블1, 테이블2 순서)",
    "options": [
      "2, 3",
      "3, 4",
      "3, 3",
      "6, 6"
    ],
    "correctIndex": 0,
    "explanation": "COUNT(DISTINCT 칼럼)은 NULL을 제외하고 서로 다른 값의 개수를 센다. 테이블1은 A, B 2종, 테이블2는 1, 2, 3 3종이므로 2, 3이다. ② 3, 4 는 NULL 도 하나의 값으로 센 결과이고, ③ 3, 3 은 테이블1 에서만 NULL 을 센 결과다. ④ 6, 6 은 DISTINCT 를 빼도(5, 6) 나오지 않는다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "테이블1",
        "headers": [
          "칼럼"
        ],
        "rows": [
          [
            "A"
          ],
          [
            "A"
          ],
          [
            "A"
          ],
          [
            "B"
          ],
          [
            "B"
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
        "caption": "테이블2",
        "headers": [
          "칼럼"
        ],
        "rows": [
          [
            "1"
          ],
          [
            "1"
          ],
          [
            "2"
          ],
          [
            "2"
          ],
          [
            "2"
          ],
          [
            "3"
          ],
          [
            "NULL"
          ]
        ]
      }
    ]
  },
  {
    "id": 9938,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 39,
    "title": "집합 연산자 사용에 대한 설명으로 옳은 것은?",
    "options": [
      "첫 번째 SELECT에 정의된 칼럼을 ORDER BY에 사용하면 오류가 난다.",
      "두 번째 SELECT에서 정의된 컬럼명으로 ORDER BY 하면 오류가 난다.",
      "ORDER BY 절에는 컬럼명과 별칭만 사용할 수 있으며 숫자(위치)를 쓰면 오류가 난다.",
      "칼럼 간 데이터 타입이 서로 호환되더라도 타입이 다르면 오류가 발생한다."
    ],
    "correctIndex": 1,
    "explanation": "집합 연산자에서 ORDER BY는 마지막에 한 번만 쓰며, 결과 컬럼명은 첫 번째 SELECT의 컬럼명을 따르므로 두 번째 SELECT에서 정의된 컬럼명은 사용할 수 없다. ① 첫 번째 SELECT 의 컬럼명은 ORDER BY 에 쓸 수 있고, ③ 숫자(위치)로 정렬하는 것도 가능하며, ④ 타입이 서로 호환되면 오류 없이 처리된다.",
    "_source": "authored"
  },
  {
    "id": 9939,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 40,
    "title": "아래 사원(부서, 급여) 테이블에 대한 SQL ㉠~㉣ 중 오류가 발생하는 것만 모두 고른 것은? (Oracle 19c 기준)",
    "options": [
      "㉡",
      "㉡, ㉢, ㉣",
      "㉡, ㉢",
      "㉢, ㉣"
    ],
    "correctIndex": 2,
    "explanation": "SELECT 절의 별칭은 SELECT 보다 나중에 처리되는 ORDER BY 에서만 쓸 수 있다. 그래서 ㉠ 은 되고, 먼저 처리되는 HAVING 에 별칭을 쓴 ㉡ 은 오류다. ㉢ 은 GROUP BY 에 없는 급여를 집계 없이 SELECT 해서 오류다. ㉣ 처럼 GROUP BY 없이 HAVING 만 쓰면 테이블 전체를 한 그룹으로 보므로 문법상 문제가 없다. 정답은 ③번이다. ① 은 ㉢ 의 GROUP BY 규칙을 놓친 것, ②·④ 는 GROUP BY 없이 HAVING 을 쓸 수 없다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT 부서, SUM(급여) AS 합\nFROM   사원\nGROUP  BY 부서\nORDER  BY 합;\n-- ㉡\nSELECT 부서, SUM(급여) AS 합\nFROM   사원\nGROUP  BY 부서\nHAVING 합 > 100;\n-- ㉢\nSELECT 부서, 급여\nFROM   사원\nGROUP  BY 부서;\n-- ㉣\nSELECT SUM(급여)\nFROM   사원\nHAVING SUM(급여) > 0;"
      }
    ]
  },
  {
    "id": 9940,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 41,
    "title": "다음 SQL의 결과가 아래와 같을 때 괄호 (ㄱ)에 들어갈 것은?",
    "options": [
      "COLA",
      "COLB",
      "COLC",
      "COLA, COLB"
    ],
    "correctIndex": 1,
    "explanation": "USING 절에 지정한 컬럼은 결과의 맨 앞에 한 번만 나오고, 이어서 TBL1의 나머지 컬럼, TBL2의 나머지 컬럼 순으로 출력된다. 결과 컬럼 순서가 COLB, COLA, COLA, COLC이므로 USING (COLB)이다. ① USING (COLA) 였다면 COLA 가 맨 앞에 한 번 나오고, ③ COLC 는 TBL1 에 없어 USING 에 쓸 수 없으며, ④ 두 컬럼을 쓰면 COLA·COLB 가 모두 한 번씩만 나온다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TBL1",
        "headers": [
          "COLA",
          "COLB"
        ],
        "rows": [
          [
            "KOREAN",
            "KIM"
          ],
          [
            "MATH",
            "LEE"
          ],
          [
            "ENGLISH",
            "PARK"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "TBL2",
        "headers": [
          "COLA",
          "COLB",
          "COLC"
        ],
        "rows": [
          [
            "KOREAN",
            "KIM",
            "17"
          ],
          [
            "KOREAN",
            "KIM",
            "25"
          ],
          [
            "ENGLISH",
            "PARK",
            "32"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT *\nFROM   TBL1 RIGHT OUTER JOIN TBL2 USING ( ㄱ )\nWHERE  COLC >= 20;"
      },
      {
        "type": "table",
        "caption": "결과",
        "headers": [
          "COLB",
          "COLA",
          "COLA",
          "COLC"
        ],
        "rows": [
          [
            "KIM",
            "KOREAN",
            "KOREAN",
            "25"
          ],
          [
            "PARK",
            "ENGLISH",
            "ENGLISH",
            "32"
          ]
        ]
      }
    ]
  },
  {
    "id": 9941,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 42,
    "title": "다음 INSERT FIRST 수행 후 t1, t2, t3의 행 수는? (t1, t2, t3 순서)",
    "options": [
      "2, 0, 0",
      "2, 0, 1",
      "2, 1, 0",
      "2, 1, 1"
    ],
    "correctIndex": 1,
    "explanation": "INSERT FIRST는 각 행에 대해 처음으로 만족하는 WHEN 절에만 삽입한다. c1이 2와 5인 행은 첫 번째 조건(>= 2)을 만족해 t1에 들어가고(두 번째 조건은 평가되지 않음), 1은 어떤 WHEN도 만족하지 않아 ELSE의 t3에 들어간다. 따라서 2, 0, 1이다. ④ 2, 1, 1 은 INSERT ALL 처럼 5 를 t2 에도 넣은 결과이고, ③ 은 거기에 ELSE 로 가는 1 까지 빠뜨렸으며, ① 은 ELSE 로 가는 1 을 빠뜨린 값이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "ts",
        "headers": [
          "c1"
        ],
        "rows": [
          [
            "1"
          ],
          [
            "2"
          ],
          [
            "5"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "INSERT FIRST\n  WHEN c1 >= 2 THEN INTO t1\n  WHEN c1 >= 3 THEN INTO t2\n  ELSE INTO t3\nSELECT c1 FROM ts;"
      }
    ]
  },
  {
    "id": 9942,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 43,
    "title": "다음 SQL의 결과로 옳은 것은?",
    "options": [
      "공집합",
      "40, 'D' 한 행",
      "NULL, 'A' 한 행",
      "30, 40 두 행"
    ],
    "correctIndex": 1,
    "explanation": "조건은 NOT (COL1 = 1 OR COL2 IS NULL)이다. (NULL, 'A')는 COL1 = 1이 UNKNOWN이고 COL2 IS NULL이 거짓이라 전체가 UNKNOWN이 되어 제외된다. (1, NULL)과 (30, NULL)은 COL2 IS NULL이 참이라 제외된다. (40, 'D')만 조건을 만족한다. ① 은 (40, 'D') 를 놓친 것이고, ③ 은 UNKNOWN 을 참으로 본 결과, ④ 는 COL2 IS NULL 인 30 을 포함한 결과다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T",
        "headers": [
          "COL1",
          "COL2"
        ],
        "rows": [
          [
            "NULL",
            "'A'"
          ],
          [
            "1",
            "NULL"
          ],
          [
            "30",
            "NULL"
          ],
          [
            "40",
            "'D'"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT *\nFROM   T\nWHERE  NOT ( COL1 = 1 OR COL2 IS NULL );"
      }
    ]
  },
  {
    "id": 9943,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 44,
    "title": "다음 EMP 테이블과 계층형 질의를 실행했을 때, 실행 결과의 괄호 안(ㄱ)에 들어갈 값은?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctIndex": 1,
    "explanation": "START WITH MGR IS NULL로 7782와 7839가 각각 루트가 되고, CONNECT BY MGR = PRIOR EMPNO로 자식 방향으로 전개한다. 7839를 루트로 하는 계층에는 루트인 KING 자신과 직속 자식 7876, 7900이 포함되어 COUNT(*)는 3이다. (7782 계층은 루트 자신과 7844로 2건이라 제시된 결과와 일치한다.) ① 2 는 루트(KING)를 빼고 센 값, ③ 4·④ 5 는 다른 계층의 행까지 센 값이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP",
        "headers": [
          "EMPNO",
          "NAME",
          "MGR"
        ],
        "rows": [
          [
            "7782",
            "CLARK",
            "NULL"
          ],
          [
            "7839",
            "KING",
            "NULL"
          ],
          [
            "7844",
            "ALLEN",
            "7782"
          ],
          [
            "7876",
            "ALLEN",
            "7839"
          ],
          [
            "7900",
            "SMITH",
            "7839"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT CONNECT_BY_ROOT EMPNO AS ROOT_EMPNO, COUNT(*) AS CNT\nFROM   EMP\nSTART WITH MGR IS NULL\nCONNECT BY MGR = PRIOR EMPNO\nGROUP  BY CONNECT_BY_ROOT EMPNO\nORDER  BY ROOT_EMPNO;"
      },
      {
        "type": "table",
        "caption": "실행 결과",
        "headers": [
          "ROOT_EMPNO",
          "CNT"
        ],
        "rows": [
          [
            "7782",
            "2"
          ],
          [
            "7839",
            "( ㄱ )"
          ]
        ]
      }
    ]
  },
  {
    "id": 9944,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 45,
    "title": "다음 UNPIVOT 구문에서 괄호 (ㄱ)에 들어갈 것은?",
    "options": [
      "40, 30, 20",
      "AMOUNT_3, AMOUNT_2, AMOUNT_1",
      "AMOUNT, AMOUNT, AMOUNT",
      "ID, 구분, AMOUNT"
    ],
    "correctIndex": 1,
    "explanation": "UNPIVOT의 IN 절에는 행으로 풀어낼 원본 컬럼명(AMOUNT_3, AMOUNT_2, AMOUNT_1)을 나열한다. 이 컬럼명이 구분 컬럼의 값이 되고, 컬럼 값이 AMOUNT에 담긴다. ① 은 컬럼 값을, ③ 은 결과 컬럼명을 적은 것이고, ④ 는 SELECT 목록을 적은 것이라 IN 절에 들어갈 수 없다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "SALES",
        "headers": [
          "ID",
          "AMOUNT_3",
          "AMOUNT_2",
          "AMOUNT_1"
        ],
        "rows": [
          [
            "100",
            "20",
            "30",
            "40"
          ],
          [
            "200",
            "50",
            "60",
            "45"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT ID, 구분, AMOUNT\nFROM   SALES\nUNPIVOT ( AMOUNT FOR 구분 IN ( ㄱ ) )\nWHERE  AMOUNT <= 40;"
      }
    ]
  },
  {
    "id": 9945,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 46,
    "title": "다음 SQL에 대한 설명으로 가장 적절한 것은?",
    "options": [
      "아래 쿼리와 결과가 동일하다.\nSELECT 사용자명, 로그인횟수\nFROM (SELECT 사용자명, COUNT(*) AS 로그인횟수\n      FROM 로그인기록\n      GROUP BY 사용자명)\nWHERE 사용자명 = '이순신' AND 로그인횟수 > 10;",
      "SELECT 절에 '이순신' 같은 문자 리터럴을 넣으면 오류가 난다.",
      "HAVING COUNT(*) > 10 대신 HAVING 로그인횟수 > 10으로 써도 된다.",
      "HAVING 절을 WHERE 절로 옮겨도 결과가 같다."
    ],
    "correctIndex": 0,
    "explanation": "인라인 뷰에서 먼저 그룹핑하고 별칭 로그인횟수를 만든 뒤 바깥 WHERE로 필터링하면 원 쿼리와 결과가 같다. ③ HAVING에서는 SELECT 절 별칭을 쓸 수 없고, ④ WHERE 절에는 집계 함수를 쓸 수 없어 옮길 수 없다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT 사용자명, COUNT(*) AS 로그인횟수\nFROM   로그인기록\nGROUP  BY 사용자명\nHAVING 사용자명 = '이순신' AND COUNT(*) > 10;"
      }
    ]
  },
  {
    "id": 9946,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 47,
    "title": "다음 SQL의 수행 결과는?",
    "options": [
      "4",
      "6",
      "10",
      "결과 없음"
    ],
    "correctIndex": 2,
    "explanation": "A.COL1 <= B.COL1을 만족하는 (A, B) 조합의 개수를 센다. A=1은 B가 1, 2, 3, 4로 4건, A=2는 3건, A=3은 2건, A=4는 1건이므로 4 + 3 + 2 + 1 = 10건이다. ① 4 는 같은 값끼리만(=), ② 6 은 A < B 로 센 값이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TAB",
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
        "type": "sql",
        "code": "SELECT COUNT(*)\nFROM   TAB A, TAB B\nWHERE  A.COL1 <= B.COL1;"
      }
    ]
  },
  {
    "id": 9947,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 48,
    "title": "TAB1에 3건이 저장된 상태에서 다음 SQL을 순서대로 수행한 뒤 SELECT COUNT(*) FROM TAB1;의 결과는?",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "correctIndex": 2,
    "explanation": "COMMIT이 수행되면 그 이전에 지정된 SAVEPOINT는 모두 사라진다. 따라서 ROLLBACK TO S1은 오류가 발생하고 아무 것도 취소되지 않아 마지막 INSERT까지 모두 반영된다. 3 + 1 + 1 + 1 = 6건이다. COMMIT 이 S1 을 없앴으므로 ① 4·② 5 처럼 일부만 취소되는 일은 일어나지 않는다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "INSERT INTO TAB1 VALUES (...);   -- 1건 추가\nSAVEPOINT S1;\nINSERT INTO TAB1 VALUES (...);   -- 1건 추가\nCOMMIT;\nINSERT INTO TAB1 VALUES (...);   -- 1건 추가\nROLLBACK TO S1;"
      }
    ]
  },
  {
    "id": 9948,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 49,
    "title": "Oracle에서 다음과 같이 테이블을 생성하였다. 제시된 ALTER TABLE 문을 각각 독립적으로 실행할 때 문법 오류가 발생하는 것은? (다른 테이블에서 EMP.EMPNO를 참조하는 외래키는 없다.)",
    "options": [
      "ALTER TABLE EMP DROP PRIMARY KEY;",
      "ALTER TABLE EMP DROP FOREIGN KEY;",
      "ALTER TABLE EMP DROP COLUMN DEPTNO;",
      "ALTER TABLE EMP ADD HIREDATE DATE DEFAULT SYSDATE;"
    ],
    "correctIndex": 1,
    "explanation": "Oracle에는 DROP FOREIGN KEY라는 독립 구문이 없다(MySQL 문법). 외래키는 제약조건 이름을 지정해 ALTER TABLE EMP DROP CONSTRAINT EMP_FK로 제거해야 한다. ① DROP PRIMARY KEY는 Oracle에서 사용할 수 있고, ③ DEPTNO는 EMP가 부모를 참조하는 단일 외래키 컬럼이라 DROP COLUMN이 가능하며, ④ 기본값이 있는 DATE 컬럼 추가도 정상 문법이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "CREATE TABLE DEPT (\n  DEPTNO NUMBER PRIMARY KEY\n);\n\nCREATE TABLE EMP (\n  EMPNO  NUMBER CONSTRAINT EMP_PK PRIMARY KEY,\n  DEPTNO NUMBER CONSTRAINT EMP_FK REFERENCES DEPT(DEPTNO)\n);"
      }
    ]
  },
  {
    "id": 9949,
    "examSetId": "round-62",
    "examLabel": "제62회 (2026년 8월)",
    "round": 62,
    "subject": "2과목",
    "number": 50,
    "title": "다음 권한 부여·회수 내역에 대해 옳은 것은?",
    "options": [
      "DROP ROLE STAFF를 하면 철수의 SELECT 권한이 사라진다.",
      "철수는 STAFF 권한이 없어서 SELECT를 할 수 없다.",
      "영희는 DELETE 권한을 사용할 수 있다.",
      "철수의 INSERT 권한을 박탈하려면 STAFF와 MGR 둘 다에서 박탈해야 한다."
    ],
    "correctIndex": 0,
    "explanation": "STAFF 롤은 MGR 롤에 부여되고 MGR 롤은 철수에게 부여되었으므로 철수는 MGR을 통해 STAFF의 권한(SELECT 등)을 갖는다. STAFF 롤을 삭제하면 MGR을 거쳐 받은 철수의 SELECT 권한도 함께 사라진다. ② 철수는 MGR 을 통해 SELECT 를 할 수 있고, ③ 영희는 STAFF만 받았으므로 DELETE 권한이 없으며, ④ INSERT 권한은 STAFF에서만 회수하면 MGR 을 거친 권한도 함께 사라진다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "SELECT, INSERT 권한 → STAFF 롤에 부여\nDELETE, UPDATE 권한 → MGR 롤에 부여\nSTAFF 롤 → MGR 롤에 부여\nMGR 롤 → 철수에게 부여\nSTAFF 롤 → 영희에게 부여\nREVOKE INSERT FROM STAFF"
      }
    ]
  }
];
