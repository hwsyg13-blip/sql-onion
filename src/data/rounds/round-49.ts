// Auto-generated from PDF + blog + scripts/authored/round-49.json
// 제49회 — 2023년 6월 · 50문항
// ⚠ 직접 편집 금지. 출처별 데이터를 고친 뒤 'node scripts/build-quiz-bank.mjs' 재실행.
import type { QuizQuestion } from '../quizBank';

export const ROUND_49: QuizQuestion[] = [
  {
    "id": 10550,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "1과목",
    "number": 1,
    "title": "아래 ㉠, ㉡ 처럼 테이블을 나눈 것은 각각 어느 정규화 단계인가? (순서대로)",
    "options": [
      "제1정규화, 제2정규화",
      "제2정규화, 제3정규화",
      "제3정규화, 제2정규화",
      "제2정규화, BCNF"
    ],
    "correctIndex": 1,
    "explanation": "㉠ 의 과목명은 기본키의 일부인 과목코드만으로 정해진다. 기본키 일부에 종속된 속성을 떼어 내는 것은 부분 함수 종속을 없애는 제2정규화다. ㉡ 은 기본키가 사번 하나라 부분 종속이 생길 수 없다. 대신 사번 → 부서코드 → 부서명 처럼 키가 아닌 속성을 거쳐 종속되는 이행 함수 종속이 있어, 이를 떼어 내는 제3정규화다. 정답은 ②번이다. ① 은 다중값이 없는데 제1정규화로 본 것, ③ 은 두 경우를 바꿔 본 것, ④ 는 키가 아닌 속성이 결정자라는 점만 보고 BCNF 로 본 것이다(이행 종속을 없애는 단계가 먼저인 제3정규화다).",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "㉠ 수강(학번, 과목코드, 성적, 과목명)\n    기본키: 학번 + 과목코드\n    → 수강(학번, 과목코드, 성적)\n    → 과목(과목코드, 과목명)\n㉡ 사원(사번, 이름, 부서코드, 부서명)\n    기본키: 사번\n    → 사원(사번, 이름, 부서코드)\n    → 부서(부서코드, 부서명)"
      }
    ]
  },
  {
    "id": 10551,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "1과목",
    "number": 2,
    "title": "속성이 가질 수 있는 데이터 값의 범위를 무엇이라 하는가?",
    "options": [
      "관계",
      "식별자",
      "도메인",
      "인스턴스"
    ],
    "correctIndex": 2,
    "explanation": "속성이 가질 수 있는 값의 범위를 도메인이라고 한다(③). 성별 속성이라면 '남'·'여' 두 값만 올 수 있다는 식으로 정하고, 데이터 타입과 길이, NULL 허용 여부 같은 제약도 함께 정의한다. ① 관계는 엔터티와 엔터티 사이의 연관이고, ② 식별자는 인스턴스 하나하나를 구분하는 속성이며, ④ 인스턴스는 엔터티에 속한 개별 데이터 한 건이다.",
    "_source": "authored"
  },
  {
    "id": 10552,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "1과목",
    "number": 3,
    "title": "주식별자를 구성하는 속성 중 하나라도 제거되면 유일성을 만족하지 못하는 특성은?",
    "options": [
      "대표성",
      "유일성",
      "최소성",
      "불변성"
    ],
    "correctIndex": 2,
    "explanation": "주식별자는 유일성·최소성·불변성·존재성을 갖춰야 한다. 그중 최소성은 유일성을 만족하는 데 꼭 필요한 속성만으로 구성한다는 뜻이라, 구성 속성을 하나라도 빼면 유일성이 깨진다(③). ② 유일성은 주식별자로 모든 인스턴스를 서로 구분할 수 있다는 성질이고, ④ 불변성은 한번 정해진 값이 바뀌지 않아야 한다는 성질이다. ① 대표성은 주식별자의 특성이 아니라, 식별자를 대표성 여부에 따라 주식별자와 보조식별자로 나눌 때 쓰는 기준이다.",
    "_source": "authored"
  },
  {
    "id": 10553,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "1과목",
    "number": 4,
    "title": "아래 ERD 해석 중 옳지 않은 것은? (IE 표기법)",
    "options": [
      "담당 과목이 없는 교수가 있을 수 있다.",
      "학생은 반드시 한 과목 이상을 수강해야 한다.",
      "수강생이 없는 과목은 존재할 수 없다.",
      "학과에 소속되지 않은 학생이 있을 수 있다."
    ],
    "correctIndex": 2,
    "explanation": "관계선 끝의 기호는 그 끝에 붙은 엔터티가 상대 한 건당 몇 개 올 수 있는지를 나타낸다. 세로선(|)은 반드시 있어야 한다는 뜻, 동그라미(o)는 없어도 된다는 뜻, 까마귀발은 여러 개라는 뜻이다. 과목과 수강 사이에서 수강 쪽 끝이 o{ 이므로 한 과목에 수강이 0건일 수 있어, 수강생이 없는 과목도 존재할 수 있다. 그래서 ③ 이 옳지 않다. ① 교수와 과목 사이의 과목 쪽 끝이 o{ 라 담당 과목이 없는 교수가 있을 수 있다. ② 학생과 수강 사이의 수강 쪽 끝이 |{ 라 학생은 수강을 한 건 이상 가져야 한다. ④ 학과와 학생 사이의 학과 쪽 끝이 |o 라 학과에 속하지 않은 학생도 있을 수 있다. 수강은 학생과 과목의 M:N 관계를 풀기 위해 둔 엔터티다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "학과·학생·수강·과목·교수 ERD",
        "mermaid": "erDiagram\n    학과 |o--o{ 학생 : \"소속\"\n    학생 ||--|{ 수강 : \"신청\"\n    과목 ||--o{ 수강 : \"개설\"\n    교수 ||--o{ 과목 : \"담당\"\n    학생 {\n        string 학번 PK\n        string 학과코드 FK\n    }\n    수강 {\n        string 학번 PK,FK\n        string 과목코드 PK,FK\n        string 수강학기 PK\n    }\n    과목 {\n        string 과목코드 PK\n        string 교수번호 FK\n    }"
      }
    ]
  },
  {
    "id": 10554,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "1과목",
    "number": 5,
    "title": "도메인 '점수' 를 정의할 때 도메인에 함께 정할 수 있는 항목만 모두 고른 것은?",
    "options": [
      "㉠, ㉡",
      "㉠, ㉡, ㉢",
      "㉠, ㉡, ㉢, ㉣",
      "㉠, ㉡, ㉢, ㉤"
    ],
    "correctIndex": 3,
    "explanation": "도메인은 속성이 가질 수 있는 값의 범위로, 데이터 타입과 길이, 허용 값의 범위(CHECK), NULL 허용 여부, 기본값까지 정할 수 있다. 같은 도메인을 쓰는 속성은 이 규칙을 모두 따른다. 외래키는 값의 범위가 아니라 테이블 사이의 관계(참조 무결성)를 정하는 제약이라 도메인에 들지 않는다. 정답은 ④번이다. ①·② 는 NULL 허용 여부나 기본값을 빠뜨린 것, ③ 은 외래키까지 도메인으로 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "㉠ 데이터 타입과 길이 (NUMBER(3))\n㉡ 허용 범위 (0 이상 100 이하)\n㉢ NULL 허용 여부\n㉣ 학생 테이블의 학번을 참조하는 외래키\n㉤ 기본값 (0)"
      }
    ]
  },
  {
    "id": 10555,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "1과목",
    "number": 6,
    "title": "아래 ERD 에 대한 설명으로 옳지 않은 것은? (실선은 식별자 관계, 점선은 비식별자 관계)",
    "options": [
      "주문상품의 주식별자는 주문과 상품의 주식별자를 모두 물려받은 복합 식별자다.",
      "주문은 고객과 비식별자 관계라 고객번호가 주문의 주식별자에 들어가지 않는다.",
      "배송은 주문과 식별자 관계라 주문 없이 배송만 존재할 수 없다.",
      "고객과 주문을 식별자 관계로 바꾸면 주문의 주식별자는 (고객번호, 주문번호)가 되고, 주문상품의 주식별자는 지금처럼 두 속성 그대로다."
    ],
    "correctIndex": 3,
    "explanation": "식별자 관계(실선)는 부모의 주식별자가 자식의 주식별자에 들어가고, 비식별자 관계(점선)는 일반 속성(FK)으로만 들어간다. 고객과 주문을 식별자 관계로 바꾸면 주문의 주식별자는 (고객번호, 주문번호)가 되고, 주문과 식별자 관계인 주문상품도 이를 물려받아 (고객번호, 주문번호, 상품코드) 세 속성이 된다. 주문상품이 그대로 두 속성이라는 ④ 가 옳지 않다. 식별자 관계만으로 이어 가면 아래로 내려갈수록 주식별자 속성이 늘어나 조인 조건이 길어지는데, 이것이 비식별자 관계를 쓰는 이유 중 하나다. ① 주문상품은 주문·상품과 모두 실선이라 두 부모의 주식별자를 합친 복합 식별자다. ② 고객과 주문은 점선이라 고객번호는 주문의 일반 속성(FK)이다. ③ 배송은 주문번호를 주식별자로 물려받으므로 주문 없이 존재할 수 없다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "고객·주문·주문상품·상품·배송 ERD",
        "mermaid": "erDiagram\n    고객 ||..o{ 주문 : \"한다\"\n    주문 ||--|{ 주문상품 : \"포함\"\n    상품 ||--o{ 주문상품 : \"대상\"\n    주문 ||--o| 배송 : \"배송\"\n    고객 {\n        string 고객번호 PK\n        string 고객명\n    }\n    주문 {\n        string 주문번호 PK\n        string 고객번호 FK\n        date 주문일자\n    }\n    주문상품 {\n        string 주문번호 PK,FK\n        string 상품코드 PK,FK\n        int 수량\n    }\n    상품 {\n        string 상품코드 PK\n        string 상품명\n    }\n    배송 {\n        string 주문번호 PK,FK\n        date 배송일자\n    }"
      }
    ]
  },
  {
    "id": 10556,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "1과목",
    "number": 7,
    "title": "아래 주문 테이블의 속성을 특성(기본·설계·파생 속성)으로 나눌 때 설계 속성만 모두 고른 것은?",
    "options": [
      "주문번호, 주문금액",
      "주문번호, 상태코드",
      "상태코드, 주문금액",
      "주문번호, 주문일자, 상태코드"
    ],
    "correctIndex": 1,
    "explanation": "기본 속성은 업무에 원래 있는 값, 설계 속성은 업무에는 없지만 모델링하면서 규칙을 세우려고 새로 만든 값, 파생 속성은 다른 속성으로 계산해 얻는 값이다. 주문서에 원래 있는 주문일자·상품명·수량·단가는 기본 속성이고, 주문금액은 계산 값이라 파생 속성이다. 시스템이 새로 붙이는 주문번호와, 상태를 코드로 정한 상태코드는 설계 속성이다. 정답은 ②번이다. ①·③ 은 계산 값을 설계 속성으로 본 것, ④ 는 주문서에 있는 날짜까지 설계 속성으로 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "주문번호: 시스템이 날짜 + 일련번호로 붙인다.\n주문일자, 상품명, 수량, 단가: 주문서에 적힌 값이다.\n주문금액: 수량 × 단가 로 계산해 저장한다.\n상태코드: 01 접수, 02 배송, 03 완료 로 정해 쓴다."
      }
    ]
  },
  {
    "id": 10557,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "1과목",
    "number": 8,
    "title": "아래 설명에 해당하는 엔터티 분류는?",
    "options": [
      "기본 엔터티",
      "중심 엔터티",
      "행위 엔터티",
      "개념 엔터티"
    ],
    "correctIndex": 2,
    "explanation": "행위 엔터티(Active Entity)는 두 개 이상의 부모 엔터티의 행위·트랜잭션으로부터 발생하며, 분석 초기에는 잘 드러나지 않다가 상세 설계 단계에서 식별된다. ① 기본 엔터티는 업무에 원래 존재하는 독립 엔터티, ② 중심 엔터티는 기본 엔터티에서 파생된 핵심 엔터티, ④ 개념 엔터티는 추상적·관념적 단위이다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "두 개 이상의 부모 엔터티로부터 발생되고 자주 내용이 변경되거나 데이터량이 증가하는 엔터티. 분석 초기 단계에서는 잘 나타나지 않으며 상세 설계 단계나 프로세스 상관 모델링 과정에서 드러난다."
      }
    ]
  },
  {
    "id": 10558,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "1과목",
    "number": 9,
    "title": "아래 엔터티별 주식별자 ㉠~㉣ 중 본질식별자만 모두 고른 것은?",
    "options": [
      "㉠",
      "㉠, ㉡",
      "㉠, ㉡, ㉢",
      "㉠, ㉢, ㉣"
    ],
    "correctIndex": 2,
    "explanation": "본질식별자는 업무에서 원래 만들어져 쓰이는 식별자이고, 인조식별자는 업무와 상관없이 구별하려고 시스템이 새로 붙인 식별자다. ISBN, 사업자등록번호, 차대번호는 모두 업무 세계에서 이미 정해져 쓰이는 번호라 본질식별자다. 게시글 번호는 DB 가 순서대로 붙인 값이라 인조식별자다. 정답은 ③번이다. ①·② 는 외부 기관이 정한 번호까지 인조로 본 것, ④ 는 자동 증가 번호를 본질식별자로 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "㉠ 도서.ISBN\n㉡ 거래처.사업자등록번호\n㉢ 차량.차대번호\n㉣ 게시글.글번호 (DB 가 글을 저장할 때 1씩 올려 붙인다)"
      }
    ]
  },
  {
    "id": 10559,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "1과목",
    "number": 10,
    "title": "두 엔터티 간 관계에서 참여자의 수를 표현하는 것은?",
    "options": [
      "관계차성(Optionality)",
      "관계차수(Cardinality)",
      "관계명(Relationship Name)",
      "관계속성(Relationship Attribute)"
    ],
    "correctIndex": 1,
    "explanation": "관계차수(Cardinality)는 두 엔터티 사이에서 관계에 참여하는 인스턴스 수를 나타내며 1:1, 1:M, M:N 으로 표현한다(②). IE 표기에서는 `|` 가 하나, 까마귀발(`<`)이 여럿을 뜻한다. `o` 는 참여가 필수가 아님(0 가능)을 나타내는 ① 관계선택사양(Optionality) 기호이고, ③ 관계명은 관계의 이름이다. ④ 관계속성은 관계 표기의 3요소에 들지 않는다.",
    "_source": "authored"
  },
  {
    "id": 10560,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 11,
    "title": "아래 PLAYER 테이블에 SQL 을 실행했을 때 출력되는 선수명 순서로 옳은 것은?",
    "options": [
      "김, 박, 이, 최",
      "박, 김, 이, 최",
      "이, 박, 김, 최",
      "박, 이, 김, 최"
    ],
    "correctIndex": 1,
    "explanation": "ORDER BY 의 숫자는 SELECT 목록의 순서를 뜻해, 2 는 팀명, 3 은 연봉이다. 정렬 방향은 칼럼마다 따로 정하므로 팀명은 오름차순(기본값), 연봉만 내림차순이다. 팀 A 의 박(500)·김(300), 팀 B 의 이(500)·최(100) 순서가 되어 박, 김, 이, 최 다. 정답은 ②번이다. ① 은 DESC 가 연봉에도 적용되지 않는다고 본 것, ③ 은 DESC 가 팀명에도 적용된다고 본 것, ④ 는 연봉을 먼저 정렬한 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "PLAYER",
        "headers": [
          "선수명",
          "팀명",
          "연봉"
        ],
        "rows": [
          [
            "김",
            "A",
            "300"
          ],
          [
            "이",
            "B",
            "500"
          ],
          [
            "박",
            "A",
            "500"
          ],
          [
            "최",
            "B",
            "100"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT 선수명, 팀명, 연봉\nFROM   PLAYER\nORDER  BY 2, 3 DESC;"
      }
    ]
  },
  {
    "id": 10561,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 12,
    "title": "아래 명령 ㉠~㉤ 중 DDL 만 모두 고른 것은?",
    "options": [
      "㉠, ㉡",
      "㉡, ㉢, ㉤",
      "㉠, ㉢, ㉤",
      "㉠, ㉡, ㉤"
    ],
    "correctIndex": 3,
    "explanation": "DDL 은 객체의 구조나 정의를 다루는 명령이다. 이름을 바꾸는 RENAME(㉠), 테이블을 비우고 저장 공간까지 초기화하는 TRUNCATE(㉡), 객체에 설명을 다는 COMMENT(㉤)가 DDL 이다. MERGE(㉢)는 행을 넣거나 고치는 DML 이고, SAVEPOINT(㉣)는 트랜잭션 안의 지점을 표시하는 TCL 이다. 정답은 ④번이다. TRUNCATE 는 행을 지우지만 DELETE 와 달리 DDL 이라 자동 COMMIT 되고 ROLLBACK 할 수 없다는 점이 자주 나온다. ① 은 COMMENT 를, ②·③ 은 MERGE 를 잘못 분류한 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "㉠ RENAME 주문 TO 주문_old\n㉡ TRUNCATE TABLE 로그\n㉢ MERGE INTO 재고 USING 입고 …\n㉣ SAVEPOINT S1\n㉤ COMMENT ON TABLE 주문 IS '주문 정보'"
      }
    ]
  },
  {
    "id": 10562,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 13,
    "title": "T 테이블에 ID 가 1, 값이 100 인 행 하나가 있다. 두 세션이 아래 순서로 실행할 때 ㉠, ㉡, ㉢ 의 결과로 옳은 것은? (Oracle 기본 설정)",
    "options": [
      "200, 200, 210",
      "100, 100, 110",
      "100, 200, 200",
      "100, 200, 210"
    ],
    "correctIndex": 3,
    "explanation": "COMMIT 하지 않은 변경은 다른 세션에서 보이지 않는다. 그래서 ㉠ 시점의 세션2 는 변경 전 값 100 을 읽는다. 세션1 이 COMMIT 한 뒤에는 변경이 확정되어 ㉡ 은 200 이다. 세션2 가 200 에 10 을 더해 COMMIT 했으므로 ㉢ 에서 세션1 은 210 을 읽는다. 정답은 ④번이다. ① 은 커밋 전 변경도 보인다고 본 것, ② 는 세션2 가 처음 읽은 값만 계속 본다고 본 것, ③ 은 다른 세션이 커밋한 변경이 세션1 에 안 보인다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- 세션1\nUPDATE T SET 값 = 200 WHERE ID = 1;\n-- 세션2\nSELECT 값 FROM T WHERE ID = 1;   -- ㉠\n-- 세션1\nCOMMIT;\n-- 세션2\nSELECT 값 FROM T WHERE ID = 1;   -- ㉡\nUPDATE T SET 값 = 값 + 10 WHERE ID = 1;\nCOMMIT;\n-- 세션1\nSELECT 값 FROM T WHERE ID = 1;   -- ㉢"
      }
    ]
  },
  {
    "id": 10563,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 14,
    "title": "아래 EMP 테이블에 대해 순방향 계층형 쿼리(부모 → 자식)를 구성하는 SQL 로 옳은 것은?",
    "options": [
      "SELECT * FROM EMP START WITH MANAGER_NO IS NULL CONNECT BY PRIOR EMP_NO = MANAGER_NO;",
      "SELECT * FROM EMP START WITH MANAGER_NO IS NULL CONNECT BY PRIOR MANAGER_NO = EMP_NO;",
      "SELECT * FROM EMP START WITH MANAGER_NO IS NULL CONNECT BY EMP_NO = MANAGER_NO;",
      "SELECT * FROM EMP START WITH MANAGER_NO IS NULL CONNECT BY PRIOR EMP_NO = PRIOR MANAGER_NO;"
    ],
    "correctIndex": 0,
    "explanation": "`PRIOR` 가 붙은 컬럼은 바로 앞에 찾은 행(부모)의 값이다. ① `PRIOR EMP_NO = MANAGER_NO` 는 부모의 EMP_NO 를 MANAGER_NO 로 가진 행, 곧 자식을 찾으므로 100 → 200·300 → 400·500 순방향으로 전개된다. ② 는 부모의 MANAGER_NO 를 EMP_NO 로 가진 행을 찾는 역방향이라 루트 100(MANAGER_NO 가 NULL)에서 더 내려가지 못한다. ③ 은 PRIOR 가 없어 앞 행과 연결되지 않고 EMP_NO = MANAGER_NO 인 행도 없으며, ④ 는 앞 행의 컬럼끼리만 비교해 자식을 찾지 못하므로 ②③④ 모두 루트 100 한 행만 나온다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP 테이블",
        "headers": [
          "EMP_NO",
          "MANAGER_NO"
        ],
        "rows": [
          [
            "100",
            "NULL"
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
          ],
          [
            "500",
            "300"
          ]
        ]
      }
    ]
  },
  {
    "id": 10564,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 15,
    "title": "아래 T 테이블에 대한 SQL 의 결과(P, Q, R)로 옳은 것은? (Oracle 기준)",
    "options": [
      "3, 60, 29",
      "1, 60, 29",
      "1, 60, 18",
      "2, 60, 29"
    ],
    "correctIndex": 1,
    "explanation": "NULLIF(A, B) 는 두 값이 같으면 NULL, 다르면 A 다. 1행은 10, 2행은 A 가 NULL 이라 NULL, 3행은 30 = 30 이라 NULL 이다. COUNT 는 NULL 을 빼므로 P 는 1 이다. COALESCE(A, B) 는 처음으로 NULL 이 아닌 값이라 10, 20, 30 이고 Q 는 60 이다. NVL2(A, B, -1) 은 A 가 NULL 이 아니면 B, NULL 이면 -1 이다. 1행은 B 인 NULL, 2행은 -1, 3행은 30 이라, NULL 을 뺀 합 R 은 29 다. 정답은 ②번이다. ① 은 COUNT 가 NULL 도 센다고 본 것, ③ 은 NVL2 의 두 번째·세 번째 인자 순서를 거꾸로 본 것, ④ 는 같은 값끼리의 NULLIF 가 A 를 돌려준다고 본 것이다.",
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
            "NULL",
            "20"
          ],
          [
            "30",
            "30"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT COUNT(NULLIF(A, B))      AS P,\n       SUM(COALESCE(A, B))       AS Q,\n       SUM(NVL2(A, B, -1))       AS R\nFROM   T;"
      }
    ]
  },
  {
    "id": 10565,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 16,
    "title": "아래 SQL 의 실행 결과로 옳은 것은? (Oracle 기준, 출력 순서대로)",
    "options": [
      "100, 999, NULL",
      "999, 100, NULL",
      "999, 100",
      "NULL, 999, 100"
    ],
    "correctIndex": 1,
    "explanation": "GROUP BY 는 NULL 도 하나의 그룹으로 묶는다. ID 별 건수는 100 이 2, 200 이 3, 999 가 2, NULL 이 2 라 HAVING COUNT(*) = 2 를 통과하는 그룹은 100, 999, NULL 이다. 정렬 키는 999 면 0, 아니면 ID 그대로인데, NULL 행은 ID = 999 비교가 UNKNOWN 이라 ELSE 로 가서 키도 NULL 이다. Oracle 은 오름차순에서 NULL 을 맨 뒤에 두므로 999(0) → 100(100) → NULL 순이다(②). ① 은 CASE 식을 무시하고 ID 로 정렬한 결과, ③ 은 NULL 그룹이 GROUP BY 에서 빠진다고 본 결과, ④ 는 NULL 이 오름차순 맨 앞에 온다고 본 결과(SQL Server 방식)다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TBL 테이블",
        "headers": [
          "ID"
        ],
        "rows": [
          [
            "100"
          ],
          [
            "100"
          ],
          [
            "200"
          ],
          [
            "200"
          ],
          [
            "200"
          ],
          [
            "999"
          ],
          [
            "999"
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
        "type": "sql",
        "code": "SELECT ID FROM TBL\nGROUP BY ID\nHAVING COUNT(*) = 2\nORDER BY (CASE WHEN ID = 999 THEN 0 ELSE ID END);"
      }
    ]
  },
  {
    "id": 10566,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 17,
    "title": "아래 두 테이블에 대해 오류가 발생하는 INNER JOIN SQL 은?",
    "options": [
      "SELECT * FROM TEAM A INNER JOIN STADIUM B ON A.ID = B.ID;",
      "SELECT * FROM TEAM A INNER JOIN STADIUM B USING(ID);",
      "SELECT * FROM TEAM A NATURAL JOIN STADIUM B;",
      "SELECT * FROM TEAM A INNER JOIN STADIUM B ON (ID);"
    ],
    "correctIndex": 3,
    "explanation": "ON 절에는 A.ID = B.ID 같은 조건식을 써야 하며, ON (ID) 처럼 컬럼명만 쓰면 문법 오류다(④). 컬럼명만 쓰는 것은 USING(ID)(②)이고, ON A.ID = B.ID(①)와 NATURAL JOIN(③, 같은 이름 컬럼 ID 로 자동 조인)은 정상 실행된다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TEAM",
        "headers": [
          "ID",
          "COL1"
        ],
        "rows": [
          [
            "1",
            "A"
          ],
          [
            "2",
            "B"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "STADIUM",
        "headers": [
          "ID",
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
          ]
        ]
      }
    ]
  },
  {
    "id": 10567,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 18,
    "title": "아래 SQL 에서 매니저의 연봉이 3,000 이하인 결과를 조회하는 SQL 이 아닌 것은?",
    "options": [
      "SELECT A.* FROM EMP A WHERE EXISTS (SELECT 1 FROM EMP B WHERE A.MGR_NO = B.EMP_NO AND B.SAL <= 3000);",
      "SELECT A.* FROM EMP A WHERE A.MGR_NO IN (SELECT B.EMP_NO FROM EMP B WHERE B.SAL <= 3000);",
      "SELECT A.* FROM EMP A INNER JOIN EMP B ON A.MGR_NO = B.EMP_NO WHERE B.SAL <= 3000;",
      "SELECT A.* FROM EMP A WHERE NOT EXISTS (SELECT 1 FROM EMP B WHERE A.MGR_NO = B.EMP_NO AND B.SAL > 3000);"
    ],
    "correctIndex": 3,
    "explanation": "①②③ 은 사원의 매니저 행(B)을 찾아 그 매니저의 SAL 이 3,000 이하인 사원만 남긴다. KING 의 SAL 이 5000 이라 KING 을 매니저로 둔 SMITH·ALLEN·JONES·FORD 는 빠지고, 매니저가 JONES(2800)인 WARD 한 명만 나온다. ④ 의 NOT EXISTS 는 'SAL 이 3,000 을 넘는 매니저가 없는' 사원을 찾는다. 매니저가 아예 없는 KING 도 서브쿼리 결과가 0건이라 조건을 통과하므로, 결과가 KING, WARD 두 명이 된다. 그래서 ④ 만 결과가 다르다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP",
        "headers": [
          "EMP_NO",
          "ENAME",
          "MGR_NO",
          "SAL"
        ],
        "rows": [
          [
            "7001",
            "KING",
            "NULL",
            "5000"
          ],
          [
            "7002",
            "SMITH",
            "7001",
            "1000"
          ],
          [
            "7003",
            "ALLEN",
            "7001",
            "1500"
          ],
          [
            "7004",
            "WARD",
            "7005",
            "2500"
          ],
          [
            "7005",
            "JONES",
            "7001",
            "2800"
          ],
          [
            "7006",
            "FORD",
            "7001",
            "3500"
          ]
        ]
      },
      {
        "type": "sql",
        "caption": "가",
        "code": "SELECT A.EMP_NO, A.ENAME\nFROM   EMP A\nWHERE  EXISTS (SELECT 'X' FROM EMP B\n               WHERE  A.MGR_NO = B.EMP_NO\n                 AND  B.SAL <= 3000);"
      },
      {
        "type": "sql",
        "caption": "나",
        "code": "SELECT A.EMP_NO, A.ENAME\nFROM   EMP A\nWHERE  A.MGR_NO IN (SELECT B.EMP_NO FROM EMP B\n                    WHERE  B.SAL <= 3000);"
      },
      {
        "type": "sql",
        "caption": "다",
        "code": "SELECT A.EMP_NO, A.ENAME\nFROM   EMP A\n       INNER JOIN EMP B\n         ON A.MGR_NO = B.EMP_NO\nWHERE  B.SAL <= 3000;"
      },
      {
        "type": "sql",
        "caption": "라",
        "code": "SELECT A.EMP_NO, A.ENAME\nFROM   EMP A\nWHERE  NOT EXISTS (SELECT 'X' FROM EMP B\n                   WHERE  A.MGR_NO = B.EMP_NO\n                     AND  B.SAL > 3000);"
      }
    ]
  },
  {
    "id": 10568,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 19,
    "title": "아래 두 테이블 T1, T2 (T2.B 일부 NULL 포함) 에 대한 복수컬럼 IN 비교 결과에 대한 설명으로 옳은 것은?",
    "options": [
      "T1 의 모든 행이 그대로 반환된다.",
      "T2 에서 B 가 NULL 인 행은 IN 비교에서 매칭되지 않아 결과에서 제외된다.",
      "복수컬럼 IN 비교에서 NULL 이 나타나면 컴파일 단계에서 오류가 발생한다.",
      "T2 의 행 수만큼 카티션 곱 형태로 반환된다."
    ],
    "correctIndex": 1,
    "explanation": "(A, B) IN (서브쿼리) 는 A 와 B 가 모두 같은 행이 서브쿼리 결과에 있어야 참이다. T1 의 (1, X) 는 T2 의 (1, X) 와 같아 결과에 나온다. T1 의 (2, Y) 는 T2 의 (2, NULL) 과 비교할 때 B = NULL 부분이 UNKNOWN 이라 참이 되지 않고, (3, Z) 는 짝이 없다. 결과는 (1, X) 한 행이다. 이처럼 B 가 NULL 인 T2 행은 어떤 T1 행과도 매칭되지 않으므로 ② 가 옳다. ① T1 의 세 행이 모두 나오지는 않고, ③ NULL 이 있어도 오류는 나지 않으며, ④ IN 은 조건 비교라 카티션 곱이 생기지 않는다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T1 테이블",
        "headers": [
          "A",
          "B"
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
      },
      {
        "type": "table",
        "caption": "T2 테이블",
        "headers": [
          "A",
          "B"
        ],
        "rows": [
          [
            "1",
            "X"
          ],
          [
            "2",
            "NULL"
          ],
          [
            "4",
            "W"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT A, B FROM T1 WHERE (A, B) IN (SELECT A, B FROM T2);"
      }
    ]
  },
  {
    "id": 10569,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 20,
    "title": "아래 주문 테이블에 대한 SQL ㉠, ㉡ 의 결과 행 수로 옳은 것은?",
    "options": [
      "8, 7",
      "7, 8",
      "8, 8",
      "10, 10"
    ],
    "correctIndex": 0,
    "explanation": "ROLLUP(X, Y) 는 (X, Y) 별 집계, X 별 소계, 전체 합계를 만든다. 칼럼 순서에 따라 소계의 기준이 달라진다. ㉠ 은 (회원, 상품) 조합 4행 + 회원별 소계 3행(A·B·C) + 합계 1행 = 8행이다. ㉡ 은 (상품, 회원) 조합 4행 + 상품별 소계 2행(P1·P2) + 합계 1행 = 7행이다. 정답은 ①번이다. ② 는 두 결과를 바꿔 본 것, ③ 은 ROLLUP 의 칼럼 순서가 결과에 영향이 없다고 본 것, ④ 는 회원별·상품별 소계를 모두 만드는 CUBE 로 계산한 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "주문",
        "headers": [
          "회원",
          "상품",
          "금액"
        ],
        "rows": [
          [
            "A",
            "P1",
            "10"
          ],
          [
            "A",
            "P2",
            "20"
          ],
          [
            "B",
            "P1",
            "30"
          ],
          [
            "C",
            "P1",
            "40"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT 회원, 상품, SUM(금액)\nFROM   주문\nGROUP  BY ROLLUP(회원, 상품);\n-- ㉡\nSELECT 회원, 상품, SUM(금액)\nFROM   주문\nGROUP  BY ROLLUP(상품, 회원);"
      }
    ]
  },
  {
    "id": 10570,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 21,
    "title": "아래 SQL 의 ROLLUP 컬럼 순서에 대한 설명으로 옳은 것은?",
    "options": [
      "ROLLUP 에 컬럼 순서는 의미가 없다.",
      "첫 번째 컬럼 기준으로 순차 집계된다.",
      "컬럼 순서에 따라 집계 레벨이 달라진다.",
      "ROLLUP 은 한 번의 집계만 수행한다."
    ],
    "correctIndex": 2,
    "explanation": "ROLLUP(고객등급, 지역, 상품) 은 (고객등급, 지역, 상품), (고객등급, 지역), (고객등급), () 네 단위로 집계한다. 맨 오른쪽 컬럼부터 하나씩 빼 가며 소계를 내기 때문에, ROLLUP(지역, 고객등급, 상품) 처럼 순서를 바꾸면 (지역) 소계가 생기고 (고객등급) 소계는 사라진다. 순서가 집계 단위를 정하므로 ③ 이 옳다. ① 순서가 바뀌면 결과가 달라지고, ② 첫 번째 컬럼부터가 아니라 오른쪽 컬럼부터 하나씩 빼며 소계를 만들며, ④ 여러 단계의 집계를 한 번에 만든다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT 고객등급, 지역, 상품, SUM(매출)\nFROM   판매\nGROUP BY ROLLUP(고객등급, 지역, 상품);"
      }
    ]
  },
  {
    "id": 10571,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 22,
    "title": "아래 T 테이블에 대한 두 SQL 의 결과로 옳은 것은?",
    "options": [
      "(가) 출력 없음(공집합), (나) 0 한 행",
      "(가) 0 한 행, (나) 출력 없음(공집합)",
      "(가)·(나) 모두 출력 없음",
      "(가)·(나) 모두 0 한 행"
    ],
    "correctIndex": 0,
    "explanation": "(가) 는 GROUP BY 가 있다. ID 별 그룹은 A 2건, B 2건, C 1건, NULL 1건으로 모두 3 이하라 HAVING 을 통과하는 그룹이 하나도 없고, 그룹이 없으니 출력 행도 없다(공집합). (나) 는 GROUP BY 없이 테이블 전체를 한 덩어리로 집계한다. WHERE 를 통과한 행이 0건이어도 전체 집계는 항상 한 행을 만들고 COUNT(*) 는 0 이다. 그래서 ① 이다. ② 는 둘을 반대로 본 것, ③ 은 집계할 행이 없으면 언제나 출력이 없다고 본 것, ④ 는 COUNT 는 언제나 한 행을 돌려준다고 본 것이다. GROUP BY 가 있으면 0건에서 그룹이 생기지 않는다는 점이 핵심이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T 테이블",
        "headers": [
          "ID"
        ],
        "rows": [
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
            "C"
          ],
          [
            "NULL"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- (가)\nSELECT COUNT(*)\nFROM   T\nGROUP BY ID\nHAVING COUNT(*) > 3;\n\n-- (나)\nSELECT COUNT(*)\nFROM   T\nWHERE  ID = 'Z';"
      }
    ]
  },
  {
    "id": 10572,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 23,
    "title": "아래 주문 테이블에 대한 SQL ㉠, ㉡, ㉢ 의 결과로 옳은 것은? ('㉠ 행 수, ㉡ 행 수, ㉢ 값' 순서, Oracle 12c 이상)",
    "options": [
      "1, 1, 1",
      "1, 2, 2",
      "2, 2, 2",
      "1, 2, 1"
    ],
    "correctIndex": 1,
    "explanation": "회원별 합계는 A 300, B 300, C 250 이라 1위가 A·B 두 명이다. ㉠ 의 ONLY 는 동점과 상관없이 딱 1행만 가져온다(A·B 중 어느 쪽이 나올지는 정해져 있지 않다). ㉡ 의 WITH TIES 는 1번째 행과 정렬 값이 같은 행까지 가져와 2행, ㉢ 의 RANK 는 동점에 같은 순위를 줘서 1위가 2명이다. 정답은 ②번이다. ① 은 동점을 생각하지 않은 것, ③ 은 ONLY 도 동점을 함께 가져온다고 본 것, ④ 는 RANK 가 동점에도 서로 다른 순위를 준다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "주문",
        "headers": [
          "회원",
          "금액"
        ],
        "rows": [
          [
            "A",
            "100"
          ],
          [
            "A",
            "200"
          ],
          [
            "B",
            "300"
          ],
          [
            "C",
            "100"
          ],
          [
            "C",
            "150"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT 회원 FROM 주문\nGROUP  BY 회원\nORDER  BY SUM(금액) DESC\nFETCH  FIRST 1 ROWS ONLY;\n-- ㉡\nSELECT 회원 FROM 주문\nGROUP  BY 회원\nORDER  BY SUM(금액) DESC\nFETCH  FIRST 1 ROWS WITH TIES;\n-- ㉢\nSELECT COUNT(*)\nFROM  (SELECT 회원,\n              RANK() OVER (\n                ORDER BY SUM(금액) DESC\n              ) AS RK\n       FROM   주문\n       GROUP  BY 회원)\nWHERE  RK = 1;"
      }
    ]
  },
  {
    "id": 10573,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 24,
    "title": "아래 결과(첫 행은 0, 그 이후 직전 행 값) 를 반환하는 윈도우 함수로 옳은 것은?",
    "options": [
      "LEAD(COL1, 1, 0) OVER(ORDER BY COL1)",
      "LAG(COL1, 1, NULL) OVER(ORDER BY COL1)",
      "LAG(COL1, 1, 0) OVER(ORDER BY COL1)",
      "FIRST_VALUE(COL1) OVER(ORDER BY COL1)"
    ],
    "correctIndex": 2,
    "explanation": "LAG(COL1, 1, 0) 은 한 행 앞의 COL1 값을 가져오고, 앞 행이 없는 첫 행에는 세 번째 인자로 준 0 을 돌려준다. 그래서 결과가 0, 100, 200 이다(③). ① LEAD 는 다음 행 값을 가져와 200, 300, 0 이 되고, ② 는 기본값이 NULL 이라 첫 행이 NULL 이며, ④ FIRST_VALUE 는 모든 행에 첫 값 100 을 돌려준다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "출력 결과 (COL1, 함수 결과)",
        "headers": [
          "COL1",
          "함수 결과"
        ],
        "rows": [
          [
            "100",
            "0"
          ],
          [
            "200",
            "100"
          ],
          [
            "300",
            "200"
          ]
        ]
      }
    ]
  },
  {
    "id": 10574,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 25,
    "title": "아래 두 테이블에 대한 SQL 에서 RANK 함수의 순위 부여 결과로 옳은 것은?",
    "options": [
      "700, 700, 550, 350, 350 순위가 1, 1, 3, 4, 4 가 된다.",
      "700, 700, 550, 350, 350 순위가 1, 1, 2, 3, 3 이 된다.",
      "700, 700, 550, 350, 350 순위가 1, 2, 3, 4, 5 로 모두 다르다.",
      "700, 700, 550, 350, 350 순위가 1, 2, 2, 3, 3 이 된다."
    ],
    "correctIndex": 0,
    "explanation": "고객별 매출 합계를 구하면 홍길동·이규혁 각 700, 이순신 550, 강감찬·이상화 각 350이 된다. RANK 함수는 동순위를 동일한 순위로 부여하되 다음 순위는 건너뛰므로 1·1·3·4·4가 된다. ② 는 DENSE_RANK, ③ 은 ROW_NUMBER 의 결과다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "고객",
        "headers": [
          "고객번호(PK)",
          "고객명"
        ],
        "rows": [
          [
            "001",
            "홍길동"
          ],
          [
            "002",
            "이순신"
          ],
          [
            "003",
            "강감찬"
          ],
          [
            "004",
            "이상화"
          ],
          [
            "005",
            "이규혁"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "월별매출",
        "headers": [
          "고객번호(PK)",
          "월(PK)",
          "매출액"
        ],
        "rows": [
          [
            "001",
            "202201",
            "200"
          ],
          [
            "002",
            "202201",
            "200"
          ],
          [
            "003",
            "202201",
            "100"
          ],
          [
            "004",
            "202201",
            "150"
          ],
          [
            "005",
            "202201",
            "250"
          ],
          [
            "001",
            "202202",
            "150"
          ],
          [
            "002",
            "202202",
            "150"
          ],
          [
            "003",
            "202202",
            "150"
          ],
          [
            "004",
            "202202",
            "100"
          ],
          [
            "005",
            "202202",
            "100"
          ],
          [
            "001",
            "202203",
            "350"
          ],
          [
            "002",
            "202203",
            "200"
          ],
          [
            "003",
            "202203",
            "100"
          ],
          [
            "004",
            "202203",
            "100"
          ],
          [
            "005",
            "202203",
            "350"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT 고객번호, 고객명, 매출액,\n       RANK() OVER(ORDER BY 매출액 DESC) AS 순위\nFROM   ( SELECT A.고객번호,\n                MAX(A.고객명) AS 고객명,\n                SUM(B.매출액) AS 매출액\n         FROM   고객 A INNER JOIN 월별매출 B\n         ON     A.고객번호 = B.고객번호\n         GROUP BY A.고객번호 )\nORDER BY 순위;"
      }
    ]
  },
  {
    "id": 10575,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 26,
    "title": "아래 EMP 테이블에 RANK 와 DENSE_RANK 를 적용했을 때 사원 H 의 R1, R2 값으로 옳은 것은? (Oracle 기준)",
    "options": [
      "R1 4, R2 3",
      "R1 3, R2 2",
      "R1 8, R2 6",
      "R1 4, R2 4"
    ],
    "correctIndex": 0,
    "explanation": "H 는 20번 부서라 20번 부서 안에서만 순위를 매긴다(PARTITION BY). Oracle 은 NULL 을 가장 큰 값으로 보므로 내림차순(DESC)에서 NULL 이 맨 앞에 온다: F(NULL) 1위, E·G(600) 공동 2위, H(200). RANK 는 공동 2위가 두 자리를 차지해 H 가 4위, DENSE_RANK 는 건너뛰지 않아 3위다. 답은 R1 4, R2 3 이다(①). ② 는 NULL 이 맨 뒤에 온다고 본 결과(SQL Server 방식, 또는 NULLS LAST), ③ 은 PARTITION BY 를 무시하고 8명 전체에서 순위를 매긴 결과, ④ 는 DENSE_RANK 도 건너뛴다고 본 결과다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP 테이블",
        "headers": [
          "ENAME",
          "DEPTNO",
          "SAL"
        ],
        "rows": [
          [
            "A",
            "10",
            "500"
          ],
          [
            "B",
            "10",
            "400"
          ],
          [
            "C",
            "10",
            "400"
          ],
          [
            "D",
            "10",
            "300"
          ],
          [
            "E",
            "20",
            "600"
          ],
          [
            "F",
            "20",
            "NULL"
          ],
          [
            "G",
            "20",
            "600"
          ],
          [
            "H",
            "20",
            "200"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT ENAME, DEPTNO, SAL,\n       RANK()       OVER (PARTITION BY DEPTNO ORDER BY SAL DESC) AS R1,\n       DENSE_RANK() OVER (PARTITION BY DEPTNO ORDER BY SAL DESC) AS R2\nFROM   EMP;"
      }
    ]
  },
  {
    "id": 10576,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 27,
    "title": "아래 EMP, DEPT 테이블에 대한 SQL 의 결과로 옳은 것은? (부서명 / 사원수 순)",
    "options": [
      "개발 1 / 영업 2 / 인사 0 / 총무 0",
      "개발 1 / 영업 2 / 인사 1 / 총무 1",
      "개발 1 / 영업 2",
      "개발 1 / 영업 2 / 인사 1 / 총무 1 / NULL 2"
    ],
    "correctIndex": 1,
    "explanation": "RIGHT OUTER JOIN 은 오른쪽 DEPT 의 행을 모두 남긴다. 영업(10)은 E1·E2, 개발(20)은 E3 와 맞고, 사원이 없는 인사(30)·총무(40)는 EMP 쪽 칼럼이 모두 NULL 인 행으로 한 번씩 남는다. 부서번호가 NULL 인 E4 와 DEPT 에 없는 50번 부서의 E5 는 짝이 없고 EMP 는 보존 대상이 아니라 빠진다. COUNT(*) 는 칼럼 값과 상관없이 행을 세므로 인사·총무도 1 이 된다. 결과는 개발 1, 영업 2, 인사 1, 총무 1 이다(②). ① 은 COUNT(A.사원번호) 처럼 NULL 을 빼고 센 값으로, 사원이 없는 부서를 0 으로 보려면 COUNT(*) 대신 COUNT(A.사원번호) 를 써야 한다. ③ 은 INNER JOIN 의 결과, ④ 는 FULL OUTER JOIN 처럼 E4·E5 까지 남겨 부서명이 NULL 인 그룹으로 센 결과다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP",
        "headers": [
          "사원번호",
          "부서번호"
        ],
        "rows": [
          [
            "E1",
            "10"
          ],
          [
            "E2",
            "10"
          ],
          [
            "E3",
            "20"
          ],
          [
            "E4",
            "NULL"
          ],
          [
            "E5",
            "50"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "DEPT",
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
          ],
          [
            "40",
            "총무"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT B.부서명, COUNT(*) AS 사원수\nFROM   EMP A RIGHT OUTER JOIN DEPT B\n         ON A.부서번호 = B.부서번호\nGROUP BY B.부서명\nORDER BY B.부서명;"
      }
    ]
  },
  {
    "id": 10577,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 28,
    "title": "B_USER 가 아래 작업을 수행할 수 있도록 부여하는 DCL 로 가장 적절한 것은?",
    "options": [
      "GRANT SELECT, UPDATE TO B_USER;",
      "REVOKE SELECT ON A_USER.TB_A FROM B_USER;",
      "DENY UPDATE ON A_USER.TB_A TO B_USER;",
      "GRANT SELECT, UPDATE ON A_USER.TB_A TO B_USER;"
    ],
    "correctIndex": 3,
    "explanation": "UPDATE ... WHERE COL2 = 3 은 조건을 평가하려고 테이블을 읽어야 하므로 UPDATE 권한과 함께 SELECT 권한도 필요하다. 객체 권한은 GRANT 권한 ON 소유자.객체 TO 사용자 형식으로 준다(④). ① 은 ON 객체가 없어 문법 오류, ② 는 권한을 회수하는 구문, ③ DENY 는 Oracle 문법이 아니며 권한을 막는 쪽이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "UPDATE A_USER.TB_A SET COL1 = 'AAA' WHERE COL2 = 3;"
      }
    ]
  },
  {
    "id": 10578,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 29,
    "title": "아래 SQL 수행 후 SELECT 권한을 가진 사용자는?",
    "options": [
      "DBA, U1, U2",
      "DBA, U1",
      "DBA, U2, U3",
      "DBA, U1, U2, U3"
    ],
    "correctIndex": 3,
    "explanation": "U2 는 WITH GRANT OPTION 으로 받은 권한을 U3 에게 넘겼다. RESTRICT 로 REVOKE 하면 회수할 권한에 의존하는 권한(U3 의 권한)이 있을 때 회수 자체가 거부된다. 따라서 아무 권한도 회수되지 않아 DBA, U1, U2, U3 모두 SELECT 권한을 가진다(④). CASCADE 였다면 U2 와 U3 의 권한이 함께 회수되어 DBA, U1 만 남는다(②). ① 은 U3 만 회수된다고 본 결과, ③ 은 U1 이 빠진다고 본 결과다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "DBA : GRANT SELECT ON X TO U1;\nDBA : GRANT SELECT ON X TO U2 WITH GRANT OPTION;\nU2  : GRANT SELECT ON X TO U3;\nDBA : REVOKE SELECT ON X FROM U2 RESTRICT;"
      }
    ]
  },
  {
    "id": 10579,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 30,
    "title": "아래 CREATE TABLE 에 대해 오류 없이 INSERT 되는 것은?",
    "options": [
      "INSERT INTO T1 VALUES (7, 1);",
      "INSERT INTO T1 (C) VALUES (5);",
      "INSERT INTO T1 (A) VALUES (NULL);",
      "INSERT INTO T1 (B, C) VALUES (9, 1);"
    ],
    "correctIndex": 3,
    "explanation": "④ 는 A 를 생략했으므로 DEFAULT 9 가 들어가 PK 를 만족하고, NOT NULL 인 B 에 9 가 들어가 정상 입력된다. ① 은 컬럼 목록 없이 값 2개만 주어 컬럼 수(3개)와 맞지 않아 오류, ② 는 NOT NULL 인 B 가 빠져 NULL 이 들어가므로 오류, ③ 은 PK 인 A 에 NULL 을 명시적으로 넣어 오류다 (DEFAULT 는 값을 생략했을 때만 적용되고, NULL 을 직접 넣으면 적용되지 않는다).",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "CREATE TABLE T1 (\n  A NUMBER DEFAULT 9 PRIMARY KEY,\n  B NUMBER NOT NULL,\n  C NUMBER\n);"
      }
    ]
  },
  {
    "id": 10580,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 31,
    "title": "아래 SQL 실행 후 AVG 결과로 옳은 것은?",
    "options": [
      "1",
      "2",
      "3",
      "NULL"
    ],
    "correctIndex": 1,
    "explanation": "INSERT 1, 2 뒤에 SAVEPOINT X 를 만들었다. 이후 UPDATE(10, 20)와 DELETE(20 삭제)는 ROLLBACK TO SAVEPOINT X 로 취소되어 VAL 은 다시 (1, 2) 가 된다. 여기에 3 을 넣으면 (1, 2, 3) 이므로 AVG = 2 다(②). ROLLBACK TO SAVEPOINT 는 저장점 이전의 INSERT 까지 취소하지 않는다. ③ 3 은 ROLLBACK 이 1, 2 의 INSERT 까지 취소한다고 본 값이고, ④ 행이 있으므로 NULL 이 아니다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T 테이블 (초기 상태 — 비어있음)",
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
        "code": "INSERT INTO T VALUES (1);\nINSERT INTO T VALUES (2);\nSAVEPOINT X;\nUPDATE T SET VAL = VAL * 10;\nDELETE FROM T WHERE VAL = 20;\nROLLBACK TO SAVEPOINT X;\nINSERT INTO T VALUES (3);\nSELECT AVG(VAL) FROM T;"
      }
    ]
  },
  {
    "id": 10581,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 32,
    "title": "아래 T 테이블에 ㉠~㉣ 을 각각 실행한 결과로 옳은 것은?",
    "options": [
      "오류, 성공, 성공, 성공",
      "오류, 오류, 성공, 성공",
      "성공, 오류, 성공, 오류",
      "오류, 오류, 성공, 오류"
    ],
    "correctIndex": 3,
    "explanation": "제약조건을 나중에 추가하면 이미 들어 있는 데이터가 조건을 만족하는지 검사한다. ID 에는 2 가 두 번 있어 PRIMARY KEY(㉠)도 UNIQUE(㉡)도 오류다. CODE 는 값이 모두 다르고 NULL 이 없어 ㉢ 은 성공한다. ㉣ 은 (ID, CODE) 조합은 모두 다르지만, 기본키를 이루는 칼럼은 NULL 을 가질 수 없는데 ID 에 NULL 이 있어 오류다. 정답은 ④번이다. ① 은 UNIQUE 가 중복을 허용한다고 본 것, ② 는 복합 기본키 칼럼에 NULL 이 있어도 된다고 본 것, ③ 은 기존 데이터를 검사하지 않는다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T",
        "headers": [
          "ID",
          "CODE"
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
            "2",
            "C"
          ],
          [
            "NULL",
            "D"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- ㉠\nALTER TABLE T ADD PRIMARY KEY (ID);\n-- ㉡\nALTER TABLE T ADD UNIQUE (ID);\n-- ㉢\nALTER TABLE T ADD PRIMARY KEY (CODE);\n-- ㉣\nALTER TABLE T\n  ADD PRIMARY KEY (ID, CODE);"
      }
    ]
  },
  {
    "id": 10582,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 33,
    "title": "아래 WINDOW FUNCTION SQL 의 결과로 옳은 것은?",
    "options": [
      "MAX: 300, 400, 500, 600, 700, 700, 700",
      "MAX: 300, 400, 500, 600, 700, 700, 600",
      "MAX: 100, 200, 300, 400, 500, 600, 700",
      "MAX: 700, 700, 700, 700, 700, 700, 700"
    ],
    "correctIndex": 0,
    "explanation": "MAX(COL1) 의 윈도우는 ROWS BETWEEN UNBOUNDED PRECEDING AND 2 FOLLOWING 이므로 COL1 오름차순으로 \"첫 행부터 현재 행의 두 행 뒤까지\" 의 최댓값이다. 1행은 1~3행 → 300, 2행은 1~4행 → 400, 3행 → 500, 4행 → 600, 5행은 1~7행 → 700, 6행·7행은 뒤에 두 행이 없어 마지막 행까지 → 700, 700. 따라서 ① 300, 400, 500, 600, 700, 700, 700 이다. ② 는 마지막 행 값을 잘못 계산했고, ③ 은 현재 행까지만(CURRENT ROW) 본 결과, ④ 는 전체 행을 윈도우로 본 결과다.",
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
            "100",
            "100",
            "100"
          ],
          [
            "200",
            "100",
            "100"
          ],
          [
            "300",
            "200",
            "100"
          ],
          [
            "400",
            "100",
            "100"
          ],
          [
            "500",
            "300",
            "100"
          ],
          [
            "600",
            "400",
            "100"
          ],
          [
            "700",
            "200",
            "100"
          ]
        ],
        "caption": "T 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT MAX(COL1) OVER(ORDER BY COL1 ROWS BETWEEN UNBOUNDED PRECEDING AND 2 FOLLOWING) AS MAX,\n       SUM(COL2) OVER(ORDER BY COL1 ROWS BETWEEN 1 PRECEDING AND CURRENT ROW) AS SUM,\n       FIRST_VALUE(COL1) OVER(ORDER BY COL1 RANGE BETWEEN 200 PRECEDING AND 200 FOLLOWING) AS FIRST\nFROM T;"
      }
    ]
  },
  {
    "id": 10583,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 34,
    "title": "아래 SQL 의 결과로 옳은 것은?",
    "options": [
      "2, 2",
      "4, 4",
      "1, 2",
      "2, 1"
    ],
    "correctIndex": 0,
    "explanation": "인라인 뷰의 DISTINCT COL1, COL2 는 중복 행을 없애 (1, A), (1, B) 두 행을 만든다. 바깥 쿼리의 COUNT(COL1), COUNT(COL2) 는 이 두 행을 세므로 둘 다 2 다(①). DISTINCT 전 4행을 세면 4, 4(②)이고, COUNT 는 행 수를 세므로 COL1 값이 같아도 1 이 되지 않는다(③④).",
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
            "1",
            "A"
          ],
          [
            "1",
            "B"
          ],
          [
            "1",
            "B"
          ]
        ],
        "caption": "TAB1 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT COUNT(COL1), COUNT(COL2)\nFROM (SELECT DISTINCT COL1, COL2 FROM TAB1);"
      }
    ]
  },
  {
    "id": 10584,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 35,
    "title": "아래 T 테이블에 대한 SQL 의 AVG 결과에 대한 설명으로 옳은 것은?",
    "options": [
      "AVG1 과 AVG2 가 같다.",
      "AVG2 와 AVG3 가 같다.",
      "세 값 모두 같다.",
      "세 값 모두 다르다."
    ],
    "correctIndex": 1,
    "explanation": "C2 = (10, NULL, 20, 30) 일 때 `SUM(C2)` = 60, `COUNT(*)` = 4, `COUNT(C2)` = 3 (NULL 제외). AVG1 = 60/4 = 15, AVG2 = 60/3 = 20, AVG3 = `AVG(C2)` = 20 (AVG 는 NULL 자동 제외). 따라서 AVG2 와 AVG3 가 같다. ① AVG1 은 15 라 AVG2(20)와 다르고, ③ 셋이 모두 같지 않으며, ④ AVG2 와 AVG3 은 같다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "C2"
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
          ],
          [
            "30"
          ]
        ],
        "caption": "T 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT SUM(C2)/COUNT(*)    AS AVG1,\n       SUM(C2)/COUNT(C2)   AS AVG2,\n       AVG(C2)             AS AVG3\nFROM   T;"
      }
    ]
  },
  {
    "id": 10585,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 36,
    "title": "아래 두 테이블에 대한 SQL 의 결과로 옳은 것은?",
    "options": [
      "(1, SMITH, 1, S%), (3, SCOTT, 1, S%), (1, SMITH, 2, %T%), (3, SCOTT, 2, %T%)",
      "(1, SMITH, 1, S%) 한 건만 반환된다.",
      "조인 조건이 없으므로 TAB1 × TAB2 카티션 곱(8건)이 그대로 반환된다.",
      "조건을 만족하는 행이 없어 공집합이 반환된다."
    ],
    "correctIndex": 0,
    "explanation": "조인 조건 A.NAME LIKE B.RULE 은 TAB2 의 RULE 값을 패턴으로 쓴다. 'S%' 는 S 로 시작하는 SMITH, SCOTT 에, '%T%' 는 T 를 포함하는 SMITH, SCOTT 에 매칭되고 ALICE 는 어디에도 매칭되지 않는다. 그래서 4행이 나온다(①). 조인 조건이 있으므로 카티션 곱(③)이 아니다. ② 는 SMITH 와 S% 한 쌍만 본 결과, ④ 조건에 맞는 행이 있어 공집합이 아니다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TAB1",
        "headers": [
          "ID",
          "NAME"
        ],
        "rows": [
          [
            "1",
            "SMITH"
          ],
          [
            "2",
            "ALICE"
          ],
          [
            "3",
            "SCOTT"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "TAB2",
        "headers": [
          "ID",
          "RULE"
        ],
        "rows": [
          [
            "1",
            "S%"
          ],
          [
            "2",
            "%T%"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT * FROM TAB1 A, TAB2 B\nWHERE A.NAME LIKE B.RULE;"
      }
    ]
  },
  {
    "id": 10586,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 37,
    "title": "COL1 값이 A, A, NULL, B, NULL 인 T 테이블에 대한 SQL ㉠~㉣ 의 결과로 옳은 것은? ('㉠ 행 수, ㉡ 행 수, ㉢ 값, ㉣ 행 수' 순서)",
    "options": [
      "2, 2, 2, 2",
      "3, 3, 2, 2",
      "3, 3, 3, 3",
      "3, 2, 2, 1"
    ],
    "correctIndex": 1,
    "explanation": "DISTINCT 와 GROUP BY 는 NULL 을 하나의 값처럼 모은다. 그래서 ㉠·㉡ 은 A, B, NULL 의 3행이다. 반면 집계 함수는 NULL 을 빼므로 ㉢ 의 COUNT(DISTINCT COL1) 은 A, B 의 2 다. ㉣ 은 그룹별 행 수가 A 2, NULL 2, B 1 이고, 이 값들에서 중복을 없애면 2 와 1 이 남아 2행이다. 정답은 ②번이다. ① 은 DISTINCT·GROUP BY 도 NULL 을 뺀다고 본 것, ③ 은 COUNT(DISTINCT) 도 NULL 을 센다고 본 것, ④ 는 GROUP BY 가 NULL 행을 버린다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT DISTINCT COL1 FROM T;\n-- ㉡\nSELECT COL1 FROM T GROUP BY COL1;\n-- ㉢\nSELECT COUNT(DISTINCT COL1) FROM T;\n-- ㉣\nSELECT DISTINCT COUNT(*)\nFROM   T\nGROUP  BY COL1;"
      }
    ]
  },
  {
    "id": 10587,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 38,
    "title": "아래 SQL 의 결과로 옳은 것은?",
    "options": [
      "23",
      "67",
      "45",
      "89"
    ],
    "correctIndex": 1,
    "explanation": "SUBSTR 의 시작 위치가 음수면 문자열 끝에서부터 센다. '123456789' 에서 -4 는 뒤에서 네 번째 문자 6 이고, 거기서 2 글자를 잘라 '67' 이다(②). ③ 45 는 음수 부호를 무시하고 앞에서 4번째부터, ④ 89 는 맨 끝 두 글자를 자른 결과다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT SUBSTR('123456789', -4, 2) FROM DUAL;"
      }
    ]
  },
  {
    "id": 10588,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 39,
    "title": "아래 SQL 의 결과로 옳은 것은?",
    "options": [
      "9",
      "10",
      "11",
      "7"
    ],
    "correctIndex": 1,
    "explanation": "LENGTH 는 공백을 포함한 문자 수를 반환한다. 'SQL EXPERT' 는 SQL 3 자, 공백 1 자, EXPERT 6 자로 모두 10 자이다. ① 9 는 공백을 빼고 센 값, ③ 11 은 한 글자를 더 센 값이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT LENGTH('SQL EXPERT') FROM DUAL;"
      }
    ]
  },
  {
    "id": 10589,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 40,
    "title": "아래 요구 사항을 만족하는 WHERE 조건으로 옳은 것은?",
    "options": [
      "COL1 = 'F' OR COL1 = 'G' AND 금액 BETWEEN 2000 AND 50000",
      "(COL1 = 'F' OR COL1 = 'G') AND 금액 BETWEEN 2000 AND 50000",
      "COL1 IN ('F', 'G') OR 금액 BETWEEN 2000 AND 50000",
      "COL1 = 'F' AND COL1 = 'G' AND 금액 BETWEEN 2000 AND 50000"
    ],
    "correctIndex": 1,
    "explanation": "조건 우선순위는 AND 가 OR 보다 먼저 평가되므로 괄호 없이 `OR ... AND ...` 를 쓰면 의도와 다르게 결합된다. '등급 F 또는 G' 부분에 괄호를 묶고 금액 BETWEEN 조건을 AND 로 결합한 ②가 요구사항을 정확히 표현한다. ① 은 괄호가 없어 COL1 = 'F' 이면 금액과 상관없이 통과하고, ③ 은 OR 로 묶여 등급 조건이 없어도 통과하며, ④ 는 한 행이 F 이면서 G 일 수 없어 공집합이다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "등급이 F 또는 G 이고, 금액 범위가 2,000 ~ 50,000 사이"
      }
    ]
  },
  {
    "id": 10590,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 41,
    "title": "Oracle 에서 NULL 이 포함된 ORDER BY 결과에 대한 설명으로 옳은 것은?",
    "options": [
      "ASC 정렬 시 NULL 이 가장 먼저 출력된다.",
      "DESC 정렬 시 NULL 이 가장 나중에 출력된다.",
      "ASC 정렬 시 NULL 은 마지막에, DESC 정렬 시 NULL 은 가장 먼저 출력된다.",
      "NULL 은 항상 가장 먼저 출력된다."
    ],
    "correctIndex": 2,
    "explanation": "Oracle 의 기본 NULL 정렬 규칙은 ASC 정렬 시 NULL 을 마지막에, DESC 정렬 시 NULL 을 가장 먼저 배치한다(NULLS LAST / NULLS FIRST 가 각각 기본). NULLS FIRST·NULLS LAST 옵션으로 변경할 수 있다. ① 과 ④ 는 SQL Server 처럼 NULL 을 가장 작은 값으로 본 것이고, ② 는 DESC 에서 NULL 이 먼저 온다는 점과 반대다.",
    "_source": "authored"
  },
  {
    "id": 10591,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 42,
    "title": "아래 두 테이블에 대한 SQL 의 결과로 옳은 것은?",
    "options": [
      "B, C",
      "B, C, NULL",
      "B, B, C, NULL",
      "A, D"
    ],
    "correctIndex": 1,
    "explanation": "INTERSECT 는 두 결과에 모두 있는 행을 남기고 중복을 지운다. 공통 값은 B, C, NULL 이다. 집합 연산에서는 NULL 끼리도 같은 값으로 보므로 NULL 도 교집합에 들어가고, B 는 양쪽에 두 개씩 있어도 한 번만 나온다. 결과는 B, C, NULL 이다(②). ① 은 NULL 은 비교할 수 없어 교집합이 아니라고 본 결과(WHERE 의 = 비교와 헷갈린 것), ③ 은 중복을 남기는 INTERSECT ALL 로 본 결과, ④ 는 한쪽에만 있는 값(MINUS 를 양쪽으로 한 것)이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T1 테이블",
        "headers": [
          "V"
        ],
        "rows": [
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
            "C"
          ],
          [
            "NULL"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "T2 테이블",
        "headers": [
          "V"
        ],
        "rows": [
          [
            "B"
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
            "NULL"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT V FROM T1\nINTERSECT\nSELECT V FROM T2;"
      }
    ]
  },
  {
    "id": 10592,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 43,
    "title": "아래 SQL 의 수행 목적에 대한 설명으로 옳은 것은?",
    "options": [
      "전체 사원의 평균 연봉",
      "부서별 최고 연봉을 조회",
      "전체 사원의 합계 연봉",
      "사원 수를 세는 쿼리"
    ],
    "correctIndex": 1,
    "explanation": "GROUP BY 부서 로 행을 부서별로 묶고 묶음마다 MAX(연봉) 을 구하므로 부서별 최고 연봉을 조회한다(②). ① 평균은 AVG, ③ 합계는 SUM, ④ 사원 수는 COUNT 로 구한다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT 부서, MAX(연봉)\nFROM   EMP\nGROUP BY 부서;"
      }
    ]
  },
  {
    "id": 10593,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 44,
    "title": "아래 MERGE 구문 수행 결과로 옳은 것은?",
    "options": [
      "ID=1,2 는 UPDATE, ID=3,4 는 INSERT 되어 총 4행이 남는다.",
      "UPDATE 만 수행되어 2행이 남는다.",
      "INSERT 만 수행되어 4행이 생성된다.",
      "오류 발생"
    ],
    "correctIndex": 0,
    "explanation": "`MERGE` 는 ON 조건 일치 행에 `WHEN MATCHED` 의 `UPDATE`, 미일치 행에 `WHEN NOT MATCHED` 의 `INSERT` 를 적용한다. TBL2 의 ID=1,2 는 TBL1 과 매칭되어 COL1 이 C, D 로 변경되고, ID=3,4 는 신규로 INSERT 되므로 최종 TBL1 은 4행이 된다. ② 는 INSERT 가 안 된다고, ③ 은 UPDATE 가 안 된다고 본 결과이고, ④ 오류는 나지 않는다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TBL1",
        "headers": [
          "ID",
          "COL1"
        ],
        "rows": [
          [
            "1",
            "A"
          ],
          [
            "2",
            "B"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "TBL2",
        "headers": [
          "ID",
          "COL2"
        ],
        "rows": [
          [
            "1",
            "C"
          ],
          [
            "2",
            "D"
          ],
          [
            "3",
            "E"
          ],
          [
            "4",
            "F"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "MERGE INTO TBL1 T USING TBL2 S ON (T.ID = S.ID)\nWHEN MATCHED THEN UPDATE SET T.COL1 = S.COL2\nWHEN NOT MATCHED THEN INSERT (ID, COL1) VALUES (S.ID, S.COL2);"
      }
    ]
  },
  {
    "id": 10594,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 45,
    "title": "아래 DDL 에 대해 삽입이 성공하는 SQL 의 조합은?",
    "options": [
      "가, 나",
      "나, 다",
      "다, 라",
      "라, 마"
    ],
    "correctIndex": 3,
    "explanation": "가 는 컬럼 목록 없이 값 2개만 넣어 컬럼 수(3개)와 맞지 않고, 나 는 VARCHAR2(1) 인 DEGREE 에 2 글자 'AB' 를 넣어 길이 초과, 다 는 NOT NULL 인 AMT 를 빼서 실패한다. 라 는 DEGREE 만 생략해 NULL 이 들어가고, 마 는 세 컬럼 값을 모두 주고 DEGREE 에 NULL 을 명시해 성공한다. 정답은 ④ 라, 마 다. ① 은 가 를, ② 는 나·다 를, ③ 은 다 를 성공으로 본 것이라 틀리다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "CREATE TABLE TBL (\n  ID     NUMBER PRIMARY KEY,\n  AMT    NUMBER NOT NULL,\n  DEGREE VARCHAR2(1)\n);"
      },
      {
        "type": "text",
        "content": "가. INSERT INTO TBL VALUES (1, 100);\n나. INSERT INTO TBL (ID, AMT, DEGREE) VALUES (2, 200, 'AB');\n다. INSERT INTO TBL (ID, DEGREE) VALUES (4, 'X');\n라. INSERT INTO TBL (ID, AMT) VALUES (3, 300);\n마. INSERT INTO TBL VALUES (5, 500, NULL);"
      }
    ]
  },
  {
    "id": 10595,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 46,
    "title": "아래 사원 테이블과 뷰 V 에 대해 ㉠~㉣ 을 각각 실행할 때 오류가 발생하는 것만 모두 고른 것은?",
    "options": [
      "㉡, ㉢",
      "㉡",
      "㉡, ㉢, ㉣",
      "오류 없음"
    ],
    "correctIndex": 0,
    "explanation": "WITH CHECK OPTION 이 붙은 뷰는 뷰 조건(부서 = 10)을 벗어나는 행을 넣거나, 행을 조건 밖으로 바꾸는 것을 막는다. ㉠ 은 부서 10 이라 들어간다. ㉡ 은 부서 20 을 넣으려 해서 오류, ㉢ 은 1번 사원을 부서 20 으로 옮기려 해서 오류다. ㉣ 의 3번 사원은 부서 20 이라 뷰에 보이지 않으므로 0건 삭제로 끝나고 오류는 아니다. 정답은 ①번이다. ② 는 UPDATE 는 검사하지 않는다고 본 것, ③ 은 뷰에 없는 행을 지우면 오류라고 본 것, ④ 는 CHECK OPTION 의 역할을 놓친 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "사원",
        "headers": [
          "사번",
          "이름",
          "부서"
        ],
        "rows": [
          [
            "1",
            "김",
            "10"
          ],
          [
            "2",
            "이",
            "10"
          ],
          [
            "3",
            "박",
            "20"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "CREATE VIEW V AS\n  SELECT * FROM 사원 WHERE 부서 = 10\n  WITH CHECK OPTION;\n\n-- ㉠\nINSERT INTO V VALUES (4, '오', 10);\n-- ㉡\nINSERT INTO V VALUES (5, '유', 20);\n-- ㉢\nUPDATE V SET 부서 = 20 WHERE 사번 = 1;\n-- ㉣\nDELETE FROM V WHERE 사번 = 3;"
      }
    ]
  },
  {
    "id": 10596,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 47,
    "title": "아래 SQL 의 결과로 옳은 것은? (Oracle 기준, 오름차순에서 NULL 은 마지막)",
    "options": [
      "(A, 3), (C, 3), (NULL, 3)",
      "(A, 2), (C, 2)",
      "(A, 2), (C, 2), (NULL, 3)",
      "(A, 2), (C, 3), (NULL, 3)"
    ],
    "correctIndex": 2,
    "explanation": "실행 순서대로 따라가면 된다. 먼저 WHERE 가 COL1 = 6 인 (C, 6) 한 행만 지운다(COL1 이 NULL 인 행은 IS NULL 로 남는다). 다음 GROUP BY ID 로 묶으면 A 는 1·2·NULL, B 는 3·4, C 는 5·7·NULL, D 는 8, 그리고 ID 가 NULL 인 행 9·10·11 도 하나의 그룹이 된다. HAVING COUNT(*) > 2 는 행 수로 세므로 A(3)·C(3)·NULL 그룹(3)만 남는다. SELECT 의 COUNT(COL1) 은 NULL 을 빼고 세어 A 2, C 2, NULL 그룹 3 이고, 오름차순에서 NULL 은 마지막이라 (A, 2), (C, 2), (NULL, 3) 이다. 정답은 ③번이다. ① 은 COUNT(COL1) 을 COUNT(*) 처럼 NULL 까지 센 값, ② 는 ID 가 NULL 인 행이 그룹에서 빠진다고 본 값, ④ 는 WHERE 를 놓쳐 (C, 6) 이 남아 C 의 COUNT(COL1) 을 3 으로 센 값이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TAB1 테이블",
        "headers": [
          "ID",
          "COL1"
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
            "A",
            "NULL"
          ],
          [
            "B",
            "3"
          ],
          [
            "B",
            "4"
          ],
          [
            "C",
            "5"
          ],
          [
            "C",
            "6"
          ],
          [
            "C",
            "7"
          ],
          [
            "C",
            "NULL"
          ],
          [
            "D",
            "8"
          ],
          [
            "NULL",
            "9"
          ],
          [
            "NULL",
            "10"
          ],
          [
            "NULL",
            "11"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT ID, COUNT(COL1) AS CNT\nFROM   TAB1\nWHERE  COL1 <> 6 OR COL1 IS NULL\nGROUP  BY ID\nHAVING COUNT(*) > 2\nORDER  BY ID;"
      }
    ]
  },
  {
    "id": 10597,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 48,
    "title": "아래 SQL 의 빈칸에 들어갈 조건식으로 옳은 것은? (결과 행 수: 2건)",
    "options": [
      "= NULL",
      "!= NULL",
      "IS NOT NULL",
      "IS NULL"
    ],
    "correctIndex": 3,
    "explanation": "NULL 은 어떤 값과도 = / != 비교 시 UNKNOWN 으로 평가되어 결과에서 제외되므로 NULL 여부는 반드시 IS NULL / IS NOT NULL 로 판별해야 한다. ④ `IS NULL` 을 넣으면 COL = 'A' 인 행과 COL 이 NULL 인 행을 합쳐 2 건이 반환된다. ①·② 는 NULL 비교가 UNKNOWN 이라 'A' 한 건만 반환되고, ③ `IS NOT NULL` 은 'A', 'B', 'C' 세 건이 반환되어 결과 행 수가 다르다.",
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
            "A"
          ],
          [
            "B"
          ],
          [
            "NULL"
          ],
          [
            "C"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT * FROM T\nWHERE  COL = 'A'\nOR     COL ( ? );"
      }
    ]
  },
  {
    "id": 10598,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 49,
    "title": "GROUP BY ROLLUP(부서, 직급) 결과에서 부서별 소계 행과 전체 합계 행의 (GROUPING(부서), GROUPING(직급)) 값으로 옳은 것은? (순서대로)",
    "options": [
      "(1, 0), (1, 1)",
      "(0, 1), (1, 1)",
      "(0, 1), (0, 0)",
      "(1, 1), (0, 1)"
    ],
    "correctIndex": 1,
    "explanation": "ROLLUP 은 나열한 순서대로 계층적인 소계를 만들어 (부서, 직급), (부서), () 묶음을 만든다. GROUPING(칼럼) 은 그 칼럼이 집계되어 NULL 로 나온 행에서 1 이다. 부서별 소계 행은 부서 값은 있고 직급만 합쳐졌으니 (0, 1), 전체 합계 행은 둘 다 합쳐졌으니 (1, 1) 이다. 정답은 ②번이다. (1, 0) 은 직급별 소계로 CUBE 에서만 나온다(①). (0, 0) 은 일반 행이다(③). ④ 는 두 행을 바꿔 본 것이다.",
    "_source": "authored"
  },
  {
    "id": 10599,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 50,
    "title": "아래 7건 데이터에 NTILE(3) 을 적용한 그룹별 건수에서 빈칸 (ㄱ), (ㄴ) 으로 옳은 것은?",
    "options": [
      "ㄱ = 1, ㄴ = 3",
      "ㄱ = 1, ㄴ = 2",
      "ㄱ = 2, ㄴ = 3",
      "ㄱ = 3, ㄴ = 2"
    ],
    "correctIndex": 0,
    "explanation": "NTILE(3) 은 7건을 세 그룹으로 나눌 때 앞 그룹에 한 건을 더 배정해 그룹별 3, 2, 2 건으로 구성한다. 따라서 (ㄱ) 은 첫 그룹 번호 1, (ㄴ) 은 첫 그룹의 건수 3 이다. ② 는 첫 그룹에 나머지 한 건을 주지 않은 값, ③ 은 첫 그룹 번호를 2 로 본 값, ④ 는 번호와 건수를 바꿔 적은 값이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "원본 T 테이블 (총 7건)",
        "headers": [
          "VAL"
        ],
        "rows": [
          [
            "10"
          ],
          [
            "20"
          ],
          [
            "30"
          ],
          [
            "40"
          ],
          [
            "50"
          ],
          [
            "60"
          ],
          [
            "70"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT GRP, COUNT(*) AS CNT\nFROM   ( SELECT NTILE(3) OVER (ORDER BY VAL) AS GRP\n         FROM   T )\nGROUP BY GRP\nORDER BY GRP;"
      },
      {
        "type": "table",
        "caption": "NTILE 그룹별 건수 결과",
        "headers": [
          "GRP",
          "CNT"
        ],
        "rows": [
          [
            "(ㄱ)",
            "(ㄴ)"
          ],
          [
            "2",
            "2"
          ],
          [
            "3",
            "2"
          ]
        ]
      }
    ]
  }
];
