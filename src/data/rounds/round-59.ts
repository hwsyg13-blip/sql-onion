// Auto-generated from PDF + blog + scripts/authored/round-59.json
// 제59회 — 2025년 11월 · 50문항
// ⚠ 직접 편집 금지. 출처별 데이터를 고친 뒤 'node scripts/build-quiz-bank.mjs' 재실행.
import type { QuizQuestion } from '../quizBank';

export const ROUND_59: QuizQuestion[] = [
  {
    "id": 10050,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "1과목",
    "number": 1,
    "title": "아래 ㉠~㉢ 은 데이터 모델링의 세 가지 특징을 설명한 것이다. 바르게 짝지은 것은?",
    "options": [
      "단순화, 추상화, 명확화",
      "추상화, 명확화, 단순화",
      "명확화, 단순화, 추상화",
      "추상화, 단순화, 명확화"
    ],
    "correctIndex": 3,
    "explanation": "추상화는 현실의 여러 대상을 공통된 형식으로 묶어 표현하는 것(㉠), 단순화는 복잡한 현실을 약속된 표기법으로 쉽게 표현하는 것(㉡), 명확화는 애매함을 없애 한 가지로만 해석되게 하는 것(㉢)이다. 정답은 ④번이다. ① 은 추상화와 단순화를, ② 는 단순화와 명확화를 바꿔 본 것이고, ③ 은 셋을 모두 엇갈리게 본 것이다. 참고로 '최적화' 는 데이터 모델링의 세 가지 특징에 들지 않는다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "㉠ 고객 수만 명의 각기 다른 정보를 '고객' 이라는 하나의 공통 형식으로 묶어 나타낸다.\n㉡ 복잡한 업무를 정해진 표기법과 제한된 기호로 쉽게 이해할 수 있게 그린다.\n㉢ 누가 보아도 한 가지 뜻으로만 읽히도록 애매한 표현을 없앤다."
      }
    ]
  },
  {
    "id": 10051,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "1과목",
    "number": 2,
    "title": "아래 사례에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "일반예금은 코드 엔터티를 별도로 구분하고 값에는 코드값만 포함한다.",
      "원금, 예치기간은 기본 속성이다.",
      "이자와 이자율은 파생 속성이다.",
      "예금분류는 설계 속성이다."
    ],
    "correctIndex": 2,
    "explanation": "원금과 이자율로부터 계산되어 도출되는 값은 이자뿐이다. 이자율은 기본 속성이므로 \"이자와 이자율 모두가 파생 속성\"이라는 설명은 옳지 않다. ① 예금분류는 코드(01, 02)로 관리하므로 코드 엔터티로 분리할 수 있고, ② 원금·예치기간은 업무에서 그대로 생기는 기본 속성이며, ④ 예금분류 코드는 관리 편의를 위해 만든 설계 속성이다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "우리은행은 예금분류(일반예금, 특별예금 등)의 원금, 예치기간, 이자율을 관리할 필요가 있다. 또한 원금에 이자율을 적용하여 산출되는 이자도 속성으로 관리하고자 한다. 예를 들어 원금이 1,000원이고 예치기간이 5개월이며 이자율이 5.0%이다. 일반예금이나 특별예금 등에 대해서는 코드를 부여(예: 01-일반예금, 02-특별예금)하여 관리한다."
      }
    ]
  },
  {
    "id": 10052,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "1과목",
    "number": 3,
    "title": "보기가 설명하는 개념은?",
    "options": [
      "제약조건",
      "도메인",
      "식별자",
      "관계"
    ],
    "correctIndex": 1,
    "explanation": "도메인은 속성이 가질 수 있는 값의 범위(데이터 타입, 길이, 제약 등)를 정의한 개념이다. ① 제약조건은 데이터 무결성 규칙, ③ 식별자는 엔터티의 인스턴스를 구분하는 속성, ④ 관계는 엔터티 간 연관성을 의미한다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "속성이 가질 수 있는 값(데이터 타입 등)의 범위를 정의한 것"
      }
    ]
  },
  {
    "id": 10053,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "1과목",
    "number": 4,
    "title": "관계를 '각각의 사원은 ㉠ 한 부서에 ㉡ 반드시 ㉢ 소속된다' 로 읽었다. ㉠~㉢ 이 나타내는 관계 표기 요소를 바르게 짝지은 것은?",
    "options": [
      "관계명, 관계차수, 관계선택사양",
      "관계선택사양, 관계차수, 관계명",
      "관계차수, 관계명, 관계선택사양",
      "관계차수, 관계선택사양, 관계명"
    ],
    "correctIndex": 3,
    "explanation": "관계는 '기준 엔터티 → 관계차수(하나/여럿) → 관계선택사양(반드시/때때로) → 관계명' 순서로 읽는다. '한 부서에' 는 상대가 몇 개인지를 말하니 관계차수, '반드시' 는 참여가 필수인지를 말하니 관계선택사양, '소속된다' 는 관계의 이름인 관계명이다. 정답은 ④번이다. ① 은 셋을 모두 엇갈리게 본 것, ② 는 차수와 선택사양을 바꿔 본 것, ③ 은 선택사양과 관계명을 바꿔 본 것이다. 관계 표기 요소는 이 셋이며, '관계 빈도' 같은 요소는 없다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "사원·부서 ERD (IE 표기법)",
        "mermaid": "erDiagram\n    사원 }|..|| 부서 : \"소속\""
      }
    ]
  },
  {
    "id": 10054,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "1과목",
    "number": 5,
    "title": "고객 엔터티에 주문 금액의 합계인 '누적구매금액' 을 파생 속성으로 두었다. 이에 대한 설명으로 옳지 않은 것은?",
    "options": [
      "고객 목록에 누적구매금액을 보여 줄 때 주문을 매번 합산하지 않아도 되어 조회가 빨라진다.",
      "주문이 추가되거나 취소될 때마다 누적구매금액도 함께 고쳐야 한다.",
      "함께 고치는 처리를 빠뜨리면 주문 합계와 누적구매금액이 서로 어긋난다.",
      "원래 값이 바뀌면 DBMS 가 파생 속성을 자동으로 다시 계산해 주므로 관리 부담이 없다."
    ],
    "correctIndex": 3,
    "explanation": "파생 속성은 다른 속성으로 계산되는 값을 미리 저장해 둔 것이라 조회는 빨라지지만(①), 원래 값이 바뀔 때마다 직접 함께 고쳐야 하고(②), 이를 놓치면 값이 어긋난다(③). DBMS 는 저장된 파생 속성을 저절로 다시 계산하지 않으므로, 트리거나 애플리케이션으로 맞추는 부담이 따른다. 그래서 ④ 가 옳지 않다. 정답은 ④번이다. 이런 이유로 파생 속성은 꼭 필요한 것만 둔다.",
    "_source": "authored"
  },
  {
    "id": 10055,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "1과목",
    "number": 6,
    "title": "아래 네 개의 테이블이 1:M 관계로 연결된 모델에서 식별자·비식별자 관계에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "1:M으로 연결되어 있다.",
      "비식별자 관계로 바꾸면 부모의 주식별자가 자식의 주식별자에 포함되지 않고 일반 속성(FK)으로 상속된다.",
      "A테이블 키는 내부식별자, B테이블은 외부식별자이다.",
      "B테이블의 FK를 비식별자로 바꾸면 C테이블에서 조인할 때 더 편하다."
    ],
    "correctIndex": 3,
    "explanation": "비식별자 관계로 바꾸면 부모의 키가 자식의 주식별자에 포함되지 않고 일반 속성(FK)으로만 전이된다(② 는 옳은 설명). 이 때문에 손자 엔터티까지 키가 전파되지 않아 상위 엔터티에 접근하려면 중간 엔터티를 거치는 조인이 추가로 필요해진다. 따라서 조인이 더 편해진다는 ④ 가 옳지 않다. ① 네 테이블은 1:M 으로 이어져 있고, ③ A 는 자기 속성으로 식별하는 내부 식별자, B 는 부모 키를 받아 식별하는 외부 식별자를 가진다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "A·B·C·D 식별자 관계 ERD (모두 1:N — A 의 PK 가 D 까지 순차 전파)",
        "mermaid": "erDiagram\n    A ||--o{ B : \"갖는다\"\n    B ||--o{ C : \"갖는다\"\n    C ||--o{ D : \"갖는다\""
      }
    ]
  },
  {
    "id": 10056,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "1과목",
    "number": 7,
    "title": "아래 수강 테이블(기본키: 학번 + 과목코드)을 아래처럼 나눴다. 어느 정규화 단계인가?",
    "options": [
      "1정규화",
      "2정규화",
      "3정규화",
      "BCNF"
    ],
    "correctIndex": 2,
    "explanation": "떼어 낸 교수연구실은 기본키의 일부가 아니라 키가 아닌 속성인 담당교수에 종속되어 있었다. 기본키 → 담당교수 → 교수연구실 로 이어지는 이행 종속을 없앤 것이므로 3정규화다. 정답은 ③번이다. 기본키가 두 칼럼이라 2정규화로 보기 쉽지만, 2정규화는 학번이나 과목코드 하나에만 종속된 속성을 떼어 낼 때다. 여기서 담당교수는 두 칼럼 전체로 정해지므로 부분 종속이 없다. ① 은 다중값이 없는데 1정규화로 본 것, ④ BCNF 는 키가 아닌 결정자가 후보키 속성을 정할 때 다루는 단계다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "함수 종속\n· 학번 + 과목코드 → 성적, 담당교수 (같은 과목도 분반마다 교수가 다르다)\n· 담당교수 → 교수연구실\n\n수강(학번, 과목코드, 성적, 담당교수, 교수연구실)\n→ 수강(학번, 과목코드, 성적, 담당교수)\n→ 교수(담당교수, 교수연구실)"
      }
    ]
  },
  {
    "id": 10057,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "1과목",
    "number": 8,
    "title": "트랜잭션의 특성(ACID)에 해당하지 않는 것은?",
    "options": [
      "원자성(Atomicity)",
      "상호성(Interactivity)",
      "일관성(Consistency)",
      "영속성(Durability)"
    ],
    "correctIndex": 1,
    "explanation": "트랜잭션의 네 가지 특성은 원자성(Atomicity), 일관성(Consistency), 고립성(Isolation), 영속성(Durability)이다. 상호성(Interactivity)은 ACID와 무관한 개념이므로 정답이다. ① 원자성, ③ 일관성, ④ 영속성은 ACID 에 속한다.",
    "_source": "authored"
  },
  {
    "id": 10058,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "1과목",
    "number": 9,
    "title": "계좌 엔터티의 주식별자 계좌번호를 아래 네 가지 기준(대표성, 스스로 생성 여부, 속성 수, 대체 여부)으로 분류한 결과로 옳은 것은?",
    "options": [
      "보조식별자, 내부식별자, 단일식별자, 본질식별자",
      "주식별자, 외부식별자, 단일식별자, 인조식별자",
      "주식별자, 내부식별자, 단일식별자, 본질식별자",
      "주식별자, 내부식별자, 복합식별자, 인조식별자"
    ],
    "correctIndex": 2,
    "explanation": "대표성 기준으로는 기본키라 주식별자다. 스스로 생성 여부로는 다른 엔터티에서 받아 오지 않았으니 내부식별자다. 속성 수로는 칼럼 하나라 단일식별자다. 대체 여부로는 업무에서 원래 만들어져 쓰이는 값이라 본질식별자다(업무와 무관하게 시스템이 따로 붙인 번호라면 인조식별자). 정답은 ③번이다. ① 은 기본키를 보조식별자로 본 것, ② 는 내부·외부와 본질·인조를 반대로 본 것, ④ 는 칼럼 하나를 복합으로 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "계좌번호는 계좌를 열 때 은행 업무 규칙에 따라 정해지고, 통장·이체 등 업무에서 그대로 쓰인다. 계좌 엔터티의 기본키이며 칼럼 하나다. 다른 엔터티에서 받아 온 값이 아니다."
      }
    ]
  },
  {
    "id": 10059,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "1과목",
    "number": 10,
    "title": "아래 ERD 해석 중 옳지 않은 것은?",
    "options": [
      "학생과 수강은 1:M 관계이다.",
      "한 학생은 수강하지 않을 수도 있다.",
      "한 과목은 여러 학생이 수강할 수 있다.",
      "학생은 반드시 한 개 이상의 수강 이력을 가져야 한다."
    ],
    "correctIndex": 3,
    "explanation": "ERD 는 학생(||) 1 : 수강(o{) 0..N 이므로 학생과 수강은 1:M 이고(①), 수강 쪽이 선택(o)이라 학생은 수강하지 않아도 존재할 수 있다(②). 과목도 수강과 1:M 이라 한 과목을 여러 학생이 수강할 수 있다(③). 학생이 반드시 수강 이력을 하나 이상 가져야 한다는 ④ 는 선택 표기와 맞지 않아 옳지 않다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "학생·수강·과목 ERD — [수강] 교차 엔터티 (학생/과목 측 0..N 선택)",
        "mermaid": "erDiagram\n    학생 ||--o{ 수강 : \"수강\"\n    과목 ||--o{ 수강 : \"개설\""
      }
    ]
  },
  {
    "id": 10060,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 11,
    "title": "아래 순서로 SQL 을 실행할 때 ㉠, ㉡, ㉢ 의 결과로 옳은 것은? (Oracle 기준, U 는 접속 권한이 있음)",
    "options": [
      "성공, 오류, 오류",
      "오류, 오류, 오류",
      "성공, 성공, 오류",
      "성공, 성공, 성공"
    ],
    "correctIndex": 2,
    "explanation": "롤(ROLE)은 권한을 묶어 한 번에 주는 이름이다. U 는 롤 R 을 통해 CREATE TABLE 권한을 받았으므로 ㉠ 은 성공한다. 롤을 회수하면 그 롤로 받은 권한이 사라져, 다시 접속한 U 의 ㉢ 은 권한 부족 오류다. 하지만 이미 만든 T1 은 U 가 소유한 테이블이라 자기 테이블 조회인 ㉡ 은 그대로 된다. 정답은 ③번이다. ① 은 권한을 회수하면 그 권한으로 만든 테이블도 못 쓴다고 본 것, ② 는 롤로 받은 권한은 쓸 수 없다고 본 것, ④ 는 롤 회수가 효과가 없다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- DBA\nCREATE ROLE R;\nGRANT CREATE TABLE TO R;\nGRANT R TO U;\n\n-- U\nCREATE TABLE T1 (C NUMBER);  -- ㉠\n\n-- DBA\nREVOKE R FROM U;\n\n-- U (다시 접속한 뒤)\nSELECT * FROM T1;            -- ㉡\nCREATE TABLE T2 (C NUMBER);  -- ㉢"
      }
    ]
  },
  {
    "id": 10061,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 12,
    "title": "ID 1, 2, 3 의 VAL 이 100, 200, 300 인 T 테이블에 아래 SQL 을 실행했다. ID 2 행의 P1, N1, P2 와 ID 3 행의 P1 값으로 옳은 것은? (순서대로)",
    "options": [
      "100, 300, 300, 200",
      "300, 100, 100, NULL",
      "300, 100, 300, NULL",
      "100, 300, 100, 200"
    ],
    "correctIndex": 1,
    "explanation": "LAG·LEAD 의 '이전·다음' 은 OVER 안의 ORDER BY 로 정한 순서를 따른다. ORDER BY ID DESC 면 3, 2, 1 순서라 ID 2 의 이전 행은 ID 3, 다음 행은 ID 1 이다. 그래서 P1 은 300, N1 은 100 이다. 오름차순 P2 에서 ID 2 의 이전 행은 ID 1 이라 100 이다. 내림차순에서 ID 3 은 첫 행이라 이전 행이 없어 P1 은 NULL 이다. 정답은 ②번이다. ① 과 ④ 는 DESC 를 무시하고 ID 순서로 본 것, ③ 은 P2 에도 DESC 가 적용된다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT ID,\n  LAG(VAL)  OVER\n    (ORDER BY ID DESC) AS P1,\n  LEAD(VAL) OVER\n    (ORDER BY ID DESC) AS N1,\n  LAG(VAL)  OVER\n    (ORDER BY ID)      AS P2\nFROM T;"
      }
    ]
  },
  {
    "id": 10062,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 13,
    "title": "아래 연구소 테이블에 LIKE 조건 ㉠~㉣ 을 각각 적용했을 때 조회되는 행 수를 차례대로 나열한 것은?",
    "options": [
      "3, 1, 3, 1",
      "2, 1, 4, 1",
      "3, 1, 4, 1",
      "3, 2, 4, 2"
    ],
    "correctIndex": 2,
    "explanation": "% 는 0글자 이상, _ 는 정확히 한 글자를 뜻한다. ㉠ 은 '연구소' 로 끝나는 값이다. % 는 0글자도 되므로 '연구소' 자체도 포함되어 연구소, A연구소, 화학연구소 의 3행이다. '연 구소' 는 가운데 공백이 있어 연속된 '연구소' 가 아니다. ㉡ 은 앞에 정확히 한 글자가 있어야 하므로 A연구소 1행이다. 한글도 한 글자로 센다. ㉢ 은 '연구소' 가 어디든 들어 있으면 되어 연구소, A연구소, 화학연구소, 연구소장 의 4행이다. ㉣ 은 앞에 _ 두 개, 즉 정확히 두 글자가 있고 '연구소' 뒤는 무엇이든 되므로 화학연구소 1행이다. 정답은 ③번이다. ① 은 ㉢ 에서 연구소장 을, ② 는 ㉠ 에서 '연구소' 자체를 빠뜨린 것이다. ④ 는 _ 를 '한 글자 이하' 로 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "연구소",
        "headers": [
          "명"
        ],
        "rows": [
          [
            "연구소"
          ],
          [
            "A연구소"
          ],
          [
            "화학연구소"
          ],
          [
            "연구소장"
          ],
          [
            "연 구소"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "㉠ 명 LIKE '%연구소'\n㉡ 명 LIKE '_연구소'\n㉢ 명 LIKE '%연구소%'\n㉣ 명 LIKE '__연구소%'"
      }
    ]
  },
  {
    "id": 10063,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 14,
    "title": "'COMM 이 NULL 이면 0, 아니면 COMM 의 2배' 를 돌려주려 한다. 아래 식 ㉠~㉤ 중 항상 원하는 결과를 내는 것만 모두 고른 것은? (Oracle 기준)",
    "options": [
      "㉠, ㉣",
      "㉠, ㉡, ㉢, ㉣",
      "㉠, ㉢, ㉣",
      "㉠, ㉡, ㉢, ㉣, ㉤"
    ],
    "correctIndex": 1,
    "explanation": "㉠ NVL2 는 NULL 이 아니면 두 번째, NULL 이면 세 번째 인자를 돌려준다. ㉡ 은 COMM 이 NULL 이면 COMM * 2 도 NULL 이 되어 NVL 이 0 으로 바꾼다. ㉢ 은 NULL 을 먼저 0 으로 바꾼 뒤 2배 해도 0 이다. ㉣ DECODE 는 NULL 과 NULL 을 같은 값으로 보므로 NULL 일 때 0 이다. ㉤ 은 COMM = NULL 이 언제나 UNKNOWN 이라 ELSE 로 가서 NULL * 2 = NULL 이 나온다. 정답은 ②번이다. ① 은 ㉡·㉢ 처럼 계산 순서가 달라도 결과가 같다는 점을 놓친 것, ③ 은 ㉡ 을 놓친 것, ④ 는 = NULL 비교가 NULL 을 잡는다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ㉠\nNVL2(COMM, COMM * 2, 0)\n-- ㉡\nNVL(COMM * 2, 0)\n-- ㉢\nCOALESCE(COMM, 0) * 2\n-- ㉣\nDECODE(COMM, NULL, 0, COMM * 2)\n-- ㉤\nCASE WHEN COMM = NULL THEN 0\n     ELSE COMM * 2 END"
      }
    ]
  },
  {
    "id": 10064,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 15,
    "title": "아래 EMP 테이블에서 직원 번호와 해당 직원의 상사 번호를 함께 조회하려 한다. 가장 적절한 SQL은?",
    "options": [
      "SELECT E.EMPNO, M.EMPNO AS MGR_NO FROM EMP E, EMP M WHERE E.MGR = M.EMPNO;",
      "SELECT E.EMPNO, M.EMPNO AS MGR_NO FROM EMP E JOIN EMP M ON E.EMPNO = M.EMPNO;",
      "SELECT EMPNO, MGR FROM EMP WHERE MGR = EMPNO;",
      "SELECT EMPNO, MGR FROM EMP GROUP BY EMPNO;"
    ],
    "correctIndex": 0,
    "explanation": "셀프 조인을 통해 동일 EMP 테이블을 두 번 참조하여 직원의 MGR과 다른 행의 EMPNO를 매칭해야 한다. ①은 E.MGR = M.EMPNO 조건으로 직원과 상사를 정확히 연결한다. ②는 동일 EMPNO를 매칭하므로 자기 자신만 반환되고, ③은 MGR이 자신의 EMPNO와 같은 행만 찾으므로 일반적으로 결과가 없으며, ④는 GROUP BY만으로는 상사 정보를 얻을 수 없다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "EMPNO",
          "ENAME",
          "MGR"
        ],
        "rows": [
          [
            "7566",
            "JONES",
            "7839"
          ],
          [
            "7839",
            "KING",
            "(NULL)"
          ],
          [
            "7902",
            "FORD",
            "7566"
          ]
        ],
        "caption": "EMP 테이블"
      }
    ]
  },
  {
    "id": 10065,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 16,
    "title": "다음 Oracle 전용 SQL을 ANSI 표준 SQL로 올바르게 전환한 것은?",
    "options": [
      "LEFT OUTER JOIN",
      "RIGHT OUTER JOIN",
      "INNER JOIN",
      "CROSS JOIN"
    ],
    "correctIndex": 0,
    "explanation": "Oracle 표기에서 (+) 가 붙은 쪽(B)이 부족분을 NULL 로 채우는 측이므로, A 의 모든 행은 결과에 살아남고 B 는 매칭이 있을 때만 합쳐진다. 즉 A 가 기준이 되는 LEFT OUTER JOIN 에 해당한다. 예시 데이터에서 A.ID=3 은 B 에 매칭이 없지만 결과에 포함되며 B 컬럼이 NULL 로 출력된다. 정답은 ①. ② RIGHT OUTER JOIN 이면 B 가 기준이라 A.ID=3 이 빠지고, ③ INNER JOIN 도 3 이 빠지며, ④ CROSS JOIN 은 ON 조건 없이 3 × 2 = 6행을 만든다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "A 테이블",
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
            "3"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "B 테이블",
        "headers": [
          "ID",
          "V"
        ],
        "rows": [
          [
            "1",
            "10"
          ],
          [
            "2",
            "20"
          ]
        ]
      },
      {
        "type": "sql",
        "caption": "Oracle 표기를 어떤 ANSI 조인으로 바꿔야 할까?",
        "code": "-- Oracle 표기\nSELECT * FROM A, B WHERE A.ID = B.ID(+);\n\n-- ANSI 표준 SQL\nSELECT * FROM A ( ? ) B ON A.ID = B.ID;"
      },
      {
        "type": "table",
        "caption": "기대 결과",
        "headers": [
          "A.ID",
          "B.ID",
          "B.V"
        ],
        "rows": [
          [
            "1",
            "1",
            "10"
          ],
          [
            "2",
            "2",
            "20"
          ],
          [
            "3",
            "(NULL)",
            "(NULL)"
          ]
        ]
      }
    ]
  },
  {
    "id": 10066,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 17,
    "title": "아래 STUDENT, LECTURE 테이블에서 '수강 내역이 있는 학생'만 조회하려 한다. 빈칸에 들어갈 SQL 유형 조합으로 가장 적절한 것은?",
    "options": [
      "IN ~ UNION",
      "NOT EXISTS ~ EXCEPT",
      "EXISTS ~ INTERSECT",
      "NOT EXISTS ~ UNION"
    ],
    "correctIndex": 2,
    "explanation": "수강 내역이 존재하는 학생을 선택해야 하므로 `EXISTS` 또는 `INTERSECT` 같은 포지티브(존재 확인) 조건이 필요하다. ②④ 의 `NOT EXISTS` 는 정반대 의미(수강 내역 없는 학생). ① `UNION` 은 합집합이라 의미가 다름. 본 데이터에서는 LECTURE 에 SID=1, 3 만 있어 결과는 학생 A, C.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "STUDENT 테이블",
        "headers": [
          "SID",
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
          ]
        ]
      },
      {
        "type": "table",
        "caption": "LECTURE 테이블",
        "headers": [
          "SID",
          "COURSE"
        ],
        "rows": [
          [
            "1",
            "DB"
          ],
          [
            "3",
            "OS"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT * FROM STUDENT S\nWHERE  ( ? ) (SELECT 1 FROM LECTURE L WHERE L.SID = S.SID);\n\n-- 또는\nSELECT SID FROM STUDENT\n( ? )\nSELECT SID FROM LECTURE;"
      }
    ]
  },
  {
    "id": 10067,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 18,
    "title": "아래 EMP 테이블에서 가장 큰 EMPNO 한 건을 반환하는 TOP-N 질의로 가장 대표적으로 사용되는 방식은?",
    "options": [
      "ROWNUM",
      "FETCH FIRST",
      "TOP WITH TIES",
      "TOP"
    ],
    "correctIndex": 0,
    "explanation": "Oracle 에서 가장 일반적인 TOP-N 기법은 인라인 뷰에서 정렬한 뒤 외부에서 `ROWNUM` 으로 행 개수를 제한하는 방식. ② `FETCH FIRST` 는 12c 이상 지원하는 ANSI 형식이지만 빈칸 위치(`( ? ) = 1`) 와 맞지 않는다. ③④ `TOP` 은 SQL Server 문법이라 Oracle 에서 동작하지 않는다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP 테이블",
        "headers": [
          "EMPNO",
          "ENAME"
        ],
        "rows": [
          [
            "7369",
            "SMITH"
          ],
          [
            "7499",
            "ALLEN"
          ],
          [
            "7566",
            "JONES"
          ],
          [
            "7902",
            "FORD"
          ],
          [
            "7934",
            "MILLER"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT EMPNO\nFROM   (SELECT EMPNO FROM EMP ORDER BY EMPNO DESC)\nWHERE  (  ?  ) = 1;"
      }
    ]
  },
  {
    "id": 10068,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 19,
    "title": "아래 트랜잭션 시나리오의 최종 행 개수는?",
    "options": [
      "0",
      "15",
      "30",
      "NULL"
    ],
    "correctIndex": 2,
    "explanation": "DDL 실행 시점에 묵시적 커밋이 발생해 직전까지의 30건이 확정된다. 이후 INSERT는 ROLLBACK으로 취소되므로 최종 30건이 남는다. ① 0 은 ROLLBACK 이 COMMIT 된 것까지 취소한다고 본 값, ② 15 는 CREATE INDEX 의 자동 커밋을 놓친 값이고, ④ COUNT(*) 는 행이 없어도 NULL 이 아니라 0 을 돌려준다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T 테이블 (초기 상태 — 0건)",
        "headers": [
          "COL"
        ],
        "rows": [
          [
            "(empty)"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- T 테이블 초기 상태: 0건\n\nINSERT INTO T ... 15건;\nCOMMIT;\n\nINSERT INTO T ... 15건;\nCREATE INDEX IDX_T ON T(COL);\n\nINSERT INTO T ... 20건;\nROLLBACK;\n\nSELECT COUNT(*) FROM T;"
      }
    ]
  },
  {
    "id": 10069,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 20,
    "title": "아래 고객 테이블에 대한 SQL 설명 중 옳은 것은?",
    "options": [
      "COUNT(집주소) 는 NULL 값을 포함한 전체 고객 수를 반환한다.",
      "COUNT(*) 는 집주소가 있는 고객 수를 반환한다.",
      "COUNT(고객번호)에서 COUNT(집주소)를 빼면 집주소가 없는 고객의 수를 구할 수 있다.",
      "SUM(집주소) 로 NULL 고객 수를 구할 수 있다."
    ],
    "correctIndex": 2,
    "explanation": "`COUNT(*)` 는 모든 행을 세고, `COUNT(컬럼)` 은 그 컬럼이 NULL 이 아닌 행만 센다. 본 데이터에서 `COUNT(고객번호)` = 4, `COUNT(집주소)` = 2 (NULL 2건 제외). 4 - 2 = 2 가 집주소 NULL 인 고객 수. ① 은 NULL 제외, ② 는 모든 행, ④ `SUM(집주소)` 는 문자형이라 산술 오류.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "고객 테이블",
        "headers": [
          "고객번호",
          "고객명",
          "집주소"
        ],
        "rows": [
          [
            "1001",
            "홍길동",
            "서울"
          ],
          [
            "1002",
            "이순신",
            "(NULL)"
          ],
          [
            "1003",
            "강감찬",
            "부산"
          ],
          [
            "1004",
            "유관순",
            "(NULL)"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- 비교 SQL\nSELECT COUNT(*)         AS 전체,\n       COUNT(고객번호)  AS 고객번호_COUNT,\n       COUNT(집주소)    AS 집주소_COUNT,\n       COUNT(고객번호) - COUNT(집주소) AS 집주소_NULL_고객수\nFROM   고객;"
      }
    ]
  },
  {
    "id": 10070,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 21,
    "title": "아래 수강 테이블(후보키: 학번 + 과목)과 함수 종속을 보고, 이 테이블이 만족하는 가장 높은 정규형으로 옳은 것은?",
    "options": [
      "제3정규형",
      "BCNF",
      "제2정규형",
      "제1정규형"
    ],
    "correctIndex": 0,
    "explanation": "교수는 키 전체(학번 + 과목)에 종속되어 부분 함수 종속이 없으니 제2정규형이다. 교수 → 과목 이 있지만 과목은 후보키를 이루는 속성이라 제3정규형이 문제 삼는 '키가 아닌 속성의 이행 종속' 에 해당하지 않는다. 그래서 제3정규형도 만족한다. BCNF 는 모든 결정자가 후보키여야 하는데, 결정자 교수는 후보키가 아니다(김이 두 번 나온다). 그래서 BCNF 는 만족하지 못하고, 가장 높은 정규형은 제3정규형이다. 정답은 ①번이다. ② 는 교수 → 과목 을 놓친 것, ③ 은 교수 → 과목 을 3정규형 위반으로 본 것, ④ 는 부분 종속이 있다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "수강",
        "headers": [
          "학번",
          "과목",
          "교수"
        ],
        "rows": [
          [
            "101",
            "DB",
            "김"
          ],
          [
            "102",
            "DB",
            "이"
          ],
          [
            "101",
            "SQL",
            "박"
          ],
          [
            "103",
            "DB",
            "김"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "함수 종속",
        "headers": [
          "결정자",
          "종속 속성"
        ],
        "rows": [
          [
            "학번 + 과목",
            "교수"
          ],
          [
            "교수",
            "과목"
          ]
        ]
      }
    ]
  },
  {
    "id": 10071,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 22,
    "title": "아래 PHONE 테이블에서 '010' 으로 시작하는 번호만 필터링하려 한다. 정규표현식 패턴으로 올바른 것은?",
    "options": [
      "[^010]",
      "^010",
      "$010",
      "02"
    ],
    "correctIndex": 1,
    "explanation": "정규표현식에서 `^` 는 문자열의 시작 위치, `$` 는 끝 위치를 의미한다. ① `[^010]` 은 문자 클래스 부정(0/1 이 아닌 한 글자), ③ `$010` 은 `$` 가 잘못된 자리에 있어 의도와 다른 패턴, ④ `02` 는 02 가 포함된 모든 문자열을 의미한다. `010` 으로 시작하는 패턴은 ② `^010` 이 정답.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "PHONE 테이블",
        "headers": [
          "PHONE"
        ],
        "rows": [
          [
            "010-1234-5678"
          ],
          [
            "02-345-6789"
          ],
          [
            "010-9999-0000"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT PHONE\nFROM   PHONE\nWHERE  REGEXP_LIKE(PHONE, ( ? ));"
      }
    ]
  },
  {
    "id": 10072,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 23,
    "title": "아래 SQL 의 결과(A, B, C, D)로 옳은 것은? (Oracle 기준)",
    "options": [
      "BCD, BCD, BCD, BxD",
      "NULL, NULL, BCD, BCD",
      "NULL, BCD, BCD, BxD",
      "NULL, BCD, B.D, BxD"
    ],
    "correctIndex": 2,
    "explanation": "정규식 함수는 기본적으로 대소문자를 구분한다. A 는 소문자 b·d 를 찾는데 'BCD' 는 대문자라 일치하지 않아 NULL 이다. 마지막 인자로 'i' 를 주면 대소문자를 무시해 B 는 'BCD' 다. C 는 대문자 패턴이라 그대로 'BCD' 이고, . 은 아무 글자 하나라 결과에 '.' 이 나오지 않는다. D 는 'i' 옵션으로 대문자 C 도 'c' 에 걸려 'BxD' 가 된다. 정답은 ③번이다. ① 은 기본이 대소문자 무시라고 본 것, ② 는 'i' 옵션이 SUBSTR 과 REPLACE 에 적용되지 않는다고 본 것, ④ 는 . 을 글자 그대로의 점으로 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT\n  REGEXP_SUBSTR('BCD', 'b.d')     AS A,\n  REGEXP_SUBSTR('BCD', 'b.d',\n                1, 1, 'i')        AS B,\n  REGEXP_SUBSTR('BCD', 'B.D')     AS C,\n  REGEXP_REPLACE('BCD', 'c', 'x',\n                 1, 0, 'i')       AS D\nFROM DUAL;"
      }
    ]
  },
  {
    "id": 10073,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 24,
    "title": "아래 집합 연산 SQL ㉠~㉣ 중 오류가 발생하는 것만 모두 고른 것은? (Oracle 기준, A.이름 과 B.상품명 은 모두 문자형)",
    "options": [
      "㉠, ㉡, ㉣",
      "㉠, ㉡",
      "㉡, ㉣",
      "㉠, ㉣"
    ],
    "correctIndex": 0,
    "explanation": "집합 연산자로 잇는 SELECT 들은 칼럼 수가 같아야 하고, 같은 위치의 칼럼끼리 데이터 타입이 맞아야 한다. ㉠ 은 칼럼 수가 2개와 1개로 달라 오류, ㉡ 은 숫자와 문자를 같은 위치에 둬 오류다. 집합 연산 결과의 칼럼 이름은 첫 번째 SELECT 를 따르므로 ORDER BY 에는 그 이름이나 별칭(N)을 써야 한다. ㉢ 은 되고, 두 번째 SELECT 의 칼럼 이름을 쓴 ㉣ 은 오류다. 정답은 ①번이다. ② 는 아래쪽 SELECT 의 칼럼 이름으로도 정렬할 수 있다고 본 것, ③ 은 칼럼 수가 달라도 된다고 본 것, ④ 는 숫자와 문자를 자동으로 맞춰 준다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT 1, 'A' FROM DUAL\nUNION\nSELECT 2 FROM DUAL;\n-- ㉡\nSELECT 1 FROM DUAL\nUNION\nSELECT 'A' FROM DUAL;\n-- ㉢\nSELECT 이름 AS N FROM A\nUNION\nSELECT 상품명 FROM B\nORDER BY N;\n-- ㉣\nSELECT 이름 AS N FROM A\nUNION\nSELECT 상품명 FROM B\nORDER BY 상품명;"
      }
    ]
  },
  {
    "id": 10074,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 25,
    "title": "CTAS(CREATE TABLE AS SELECT)에 대한 설명 중 옳은 것은?",
    "options": [
      "데이터 속성을 재정의해야 한다.",
      "NOT NULL은 전달되지 않는다.",
      "기본키, 외래키 등 제약사항은 전달되지 않는다.",
      "컬럼 타입은 전달되지 않는다."
    ],
    "correctIndex": 2,
    "explanation": "CTAS는 컬럼 타입과 NOT NULL 제약은 그대로 전달하므로 데이터 속성을 일일이 재정의할 필요가 없다. 반면 기본키·외래키 등 다른 제약사항은 전달되지 않는다. 따라서 ③이 옳은 설명이다. ① 컬럼 타입이 그대로 넘어오므로 다시 정의할 필요가 없고, ② NOT NULL 은 전달되며, ④ 컬럼 타입도 전달된다.",
    "_source": "authored"
  },
  {
    "id": 10075,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 26,
    "title": "아래 테이블에 INSERT ㉠~㉣ 을 각각 실행할 때 오류가 발생하는 것만 모두 고른 것은? (Oracle 기준)",
    "options": [
      "㉢",
      "㉠, ㉢",
      "㉠, ㉡, ㉢",
      "㉡, ㉢"
    ],
    "correctIndex": 3,
    "explanation": "㉠ 의 '10' 은 숫자로, 123 은 문자로 자동 형변환되어 들어간다. ㉣ 처럼 칼럼 목록에 없는 B, C 는 NULL 이 되므로 성공한다. ㉡ 은 'ABCDEFGHIJK' 가 11글자라 VARCHAR2(10) 을 넘어 오류, ㉢ 은 'A1' 을 숫자로 바꿀 수 없어 오류다. 정답은 ④번이다. ① 은 길이 초과를 놓친 것, ② 와 ③ 은 숫자 모양의 문자 '10' 도 숫자 칼럼에 넣을 수 없다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "CREATE TABLE TABLE1 (\n  A NUMBER,\n  B DATE,\n  C VARCHAR2(10)\n);\n-- ㉠\nINSERT INTO TABLE1\nVALUES ('10', SYSDATE, 123);\n-- ㉡\nINSERT INTO TABLE1\nVALUES (1, NULL, 'ABCDEFGHIJK');\n-- ㉢\nINSERT INTO TABLE1\nVALUES ('A1', SYSDATE, 'X');\n-- ㉣\nINSERT INTO TABLE1 (A) VALUES (1);"
      }
    ]
  },
  {
    "id": 10076,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 27,
    "title": "주문 한 건마다 그 건까지의 누적 금액을 구하려 한다. 같은 주문일자의 주문도 한 건씩 따로 누적해야 할 때, 빈칸에 들어갈 윈도우 절로 가장 적절한 것은?",
    "options": [
      "ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING",
      "ROWS BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING",
      "ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW",
      "RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW"
    ],
    "correctIndex": 2,
    "explanation": "주문 건마다 따로 누적하려면 첫 행부터 현재 행까지를 행 단위로 더하는 ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW 를 쓴다(③). 결과는 10,000, 30,000, 33,000, 38,000 처럼 1월 8일의 두 건도 한 건씩 차례로 더해진다(같은 날 두 건의 순서는 정렬 키가 같아 정해지지 않는다). ④ RANGE 는 ORDER BY 값이 같은 행을 한꺼번에 묶어 1월 8일 두 건이 모두 33,000 이 되므로 건별 누적이 아니다. ① 은 앞뒤 한 건씩의 이동 합계, ② 는 현재 행부터 끝까지의 합계다. ※ '고객별 누적 합계' 라는 문장만으로는 ③ 과 ④ 가 모두 답처럼 보인다는 제보가 있어, 건별 누적이라는 조건을 문장에 넣었다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "고객ID",
          "주문일자",
          "금액"
        ],
        "rows": [
          [
            "C001",
            "2025-01-05",
            "10,000"
          ],
          [
            "C001",
            "2025-01-08",
            "20,000"
          ],
          [
            "C001",
            "2025-01-08",
            "3,000"
          ],
          [
            "C001",
            "2025-01-12",
            "5,000"
          ]
        ],
        "caption": "주문 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT 고객ID, 주문일자, 금액,\n       SUM(금액) OVER (PARTITION BY 고객ID ORDER BY 주문일자\n                       (  ?  )) AS 누적금액\nFROM   주문;"
      }
    ]
  },
  {
    "id": 10077,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 28,
    "title": "아래 사원 테이블에서 2025년 10월 20일 하루에 입사한 사원(B, C)만 정확히 조회하는 WHERE 조건을 모두 고른 것은? (입사일시는 시분초를 포함하는 DATE)",
    "options": [
      "㉠",
      "㉡, ㉣",
      "㉠, ㉡",
      "㉠, ㉡, ㉢"
    ],
    "correctIndex": 2,
    "explanation": "DATE '2025-10-20' 은 그날 00:00:00 을 뜻한다. ㉠ 은 20일 0시 이상, 21일 0시 미만이라 B·C 만 고른다. ㉡ 은 시각을 잘라 날짜만 비교하므로 역시 B·C 다. ㉢ BETWEEN 은 양 끝을 포함해 21일 0시 정각인 D 까지 들어가고, ㉣ 은 0시 정각인 B 만 고른다. 정답은 ③번이다. 날짜 범위는 ㉠ 처럼 '다음 날 0시 미만' 으로 거는 것이 안전하다. ㉡ 은 결과는 맞지만 칼럼을 가공해 인덱스를 쓰지 못할 수 있다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "사원",
        "headers": [
          "이름",
          "입사일시"
        ],
        "rows": [
          [
            "A",
            "2025-10-19 23:59:59"
          ],
          [
            "B",
            "2025-10-20 00:00:00"
          ],
          [
            "C",
            "2025-10-20 18:30:00"
          ],
          [
            "D",
            "2025-10-21 00:00:00"
          ],
          [
            "E",
            "2025-10-21 09:00:00"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- ㉠\nWHERE 입사일시 >= DATE '2025-10-20'\n  AND 입사일시 <  DATE '2025-10-21'\n-- ㉡\nWHERE TRUNC(입사일시) = DATE '2025-10-20'\n-- ㉢\nWHERE 입사일시 BETWEEN DATE '2025-10-20'\n                  AND DATE '2025-10-21'\n-- ㉣\nWHERE 입사일시 = DATE '2025-10-20'"
      }
    ]
  },
  {
    "id": 10078,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 29,
    "title": "아래 SQL 의 실행 결과로 옳은 것은? (첫 행부터 순서대로 출력)",
    "options": [
      "30 60 30",
      "NULL 30 60",
      "60 60 30",
      "30 60 60"
    ],
    "correctIndex": 3,
    "explanation": "COALESCE 는 인자를 왼쪽부터 평가해 가장 먼저 NULL 이 아닌 값을 돌려준다. 첫 행은 V1 이 30 이라 30, 둘째 행은 V1 이 NULL 이고 V2 가 60 이라 60, 셋째 행은 V1·V2 가 모두 NULL 이고 V3 가 60 이라 60 이 된다. 따라서 결과는 30, 60, 60 순이다. ② 처럼 NULL 이 나오려면 세 인자가 모두 NULL 이어야 하는데 그런 행은 없고, ③ 은 첫 행에서 V1(30)을 건너뛰고 V3(60)을 고른 결과다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "ID",
          "V1",
          "V2",
          "V3"
        ],
        "rows": [
          [
            "1",
            "30",
            "(NULL)",
            "60"
          ],
          [
            "2",
            "(NULL)",
            "60",
            "90"
          ],
          [
            "3",
            "(NULL)",
            "(NULL)",
            "60"
          ]
        ],
        "caption": "T 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT COALESCE(V1, V2, V3) FROM T ORDER BY ID;"
      }
    ]
  },
  {
    "id": 10079,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 30,
    "title": "아래 세 테이블 T1, T2, T3 에 대한 집합 연산의 결과로 가장 적절한 것은?",
    "options": [
      "A B C",
      "A B",
      "A B B C",
      "B B C"
    ],
    "correctIndex": 0,
    "explanation": "괄호로 묶인 `T2 INTERSECT T3` 가 먼저 실행. T2 = {B}, T3 = {C} 라 공통 원소 없음 → 공집합. 이어 `T1 UNION (공집합)` = T1 = {A, B, C}. ② 는 T1 의 C 를 빠뜨렸는데 T1 은 그대로 남는다. ③④ 처럼 B 가 두 번 나오려면 UNION ALL 이어야 하지만, UNION 은 중복을 없앤다.",
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
            "C"
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
          ]
        ]
      },
      {
        "type": "table",
        "caption": "T3 테이블",
        "headers": [
          "V"
        ],
        "rows": [
          [
            "C"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT V FROM T1\nUNION\n(SELECT V FROM T2 INTERSECT SELECT V FROM T3);"
      }
    ]
  },
  {
    "id": 10080,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 31,
    "title": "아래 T 테이블에 대한 SQL ㉠, ㉡, ㉢ 의 결과 행 수로 옳은 것은?",
    "options": [
      "1, 0, 4",
      "2, 1, 4",
      "1, 0, 3",
      "2, 1, 3"
    ],
    "correctIndex": 0,
    "explanation": "NULL 과의 비교는 TRUE 도 FALSE 도 아닌 UNKNOWN 이고, WHERE 는 TRUE 인 행만 남긴다. ㉠ 에서 3번 행의 NULL <> 1 은 UNKNOWN 이라 빠지고 2번만 남아 1행이다. ㉡ 의 괄호 안은 1·2·4번에서 TRUE 라 NOT 이 FALSE 가 되고, 3번은 UNKNOWN OR UNKNOWN 이라 NOT 을 붙여도 UNKNOWN 이다. 그래서 0행이다. ㉢ 은 1·4번이 C = 1, 3번이 C IS NULL, 2번이 C <> 1 로 모두 TRUE 라 4행이다. 정답은 ①번이다. ② 는 NULL 비교를 TRUE 로 본 것, ③ 은 IS NULL 이 NULL 행을 잡는다는 것을 놓친 것, ④ 는 두 가지를 모두 잘못 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T",
        "headers": [
          "ID",
          "C"
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
            "3",
            "NULL"
          ],
          [
            "4",
            "1"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT * FROM T\nWHERE  C <> 1;\n-- ㉡\nSELECT * FROM T\nWHERE  NOT (C = 1 OR C = 2);\n-- ㉢\nSELECT * FROM T\nWHERE  C = 1 OR C IS NULL\n   OR  C <> 1;"
      }
    ]
  },
  {
    "id": 10081,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 32,
    "title": "아래 EMP 테이블에 대한 SQL 의 설명 중 옳지 않은 것은?",
    "options": [
      "서브쿼리는 바깥 행 하나마다 그 부서의 최고 급여 값 하나만 돌려준다.",
      "부서 수가 많아지면 서브쿼리가 여러 행을 돌려줘 오류가 발생할 수 있다.",
      "> 를 > ANY 로 바꿔도 결과가 같다.",
      "> 를 > ALL 로 바꿔도 결과가 같다."
    ],
    "correctIndex": 1,
    "explanation": "연관 서브쿼리는 바깥 행마다 한 번씩 실행되고, 그때마다 그 행의 부서(E.DEPTNO)에 대한 MAX(SAL) 하나만 돌려준다(①). 부서가 몇 개든 서브쿼리 결과는 항상 한 행이라 다중 행 오류가 나지 않으므로 ② 가 옳지 않다. 비교 대상이 값 하나뿐이라 > ANY(③)나 > ALL(④)로 바꿔도 결과가 같다. 어떤 사원도 자기 부서 최고 급여보다 클 수 없으므로 이 SQL 의 결과는 공집합이다. ※ 복원 자료의 ① '부서가 1개이면 값이 하나이다' 는 무엇의 값인지 모호해 ① 도 틀린 설명으로 읽힌다는 제보가 있어 보기 문장을 분명히 했다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP 테이블",
        "headers": [
          "EMPNO",
          "DEPTNO",
          "SAL"
        ],
        "rows": [
          [
            "1",
            "10",
            "3000"
          ],
          [
            "2",
            "10",
            "4000"
          ],
          [
            "3",
            "20",
            "2500"
          ],
          [
            "4",
            "20",
            "5000"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT *\nFROM   EMP E\nWHERE  SAL > (SELECT MAX(SAL) FROM EMP WHERE DEPTNO = E.DEPTNO);"
      }
    ]
  },
  {
    "id": 10082,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 33,
    "title": "아래 주문 테이블에 대한 SQL ㉠, ㉡, ㉢ 의 결과 행 수로 옳은 것은?",
    "options": [
      "5, 6, 8",
      "6, 8, 5",
      "5, 8, 8",
      "5, 8, 6"
    ],
    "correctIndex": 3,
    "explanation": "월은 1·2 의 2가지, 고객은 A·B 의 2가지, 실제로 있는 (월, 고객) 조합은 (1, A)·(1, B)·(2, A) 3가지다. ㉠ 은 월별 2 + 고객별 2 + 합계 1 = 5행으로, 조합별 행은 만들지 않는다. ㉡ CUBE 는 여기에 조합별 3행을 더해 8행, ㉢ ROLLUP 은 조합별 3 + 월별 2 + 합계 1 = 6행(고객별 소계 없음)이다. 정답은 ④번이다. ① 은 CUBE 와 ROLLUP 을 바꿔 본 것, ② 는 GROUPING SETS 에도 조합별 행이 생긴다고 본 것, ③ 은 ROLLUP 도 고객별 소계를 만든다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "주문",
        "headers": [
          "월",
          "고객",
          "금액"
        ],
        "rows": [
          [
            "1",
            "A",
            "10"
          ],
          [
            "1",
            "B",
            "20"
          ],
          [
            "2",
            "A",
            "30"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT 월, 고객, SUM(금액) FROM 주문\nGROUP  BY GROUPING SETS\n          ((월), (고객), ());\n-- ㉡\nSELECT 월, 고객, SUM(금액) FROM 주문\nGROUP  BY CUBE(월, 고객);\n-- ㉢\nSELECT 월, 고객, SUM(금액) FROM 주문\nGROUP  BY ROLLUP(월, 고객);"
      }
    ]
  },
  {
    "id": 10083,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 34,
    "title": "아래 SQL 결과에서 A·B 의 월-일과 C 의 연도로 옳은 것은? (Oracle 기준)",
    "options": [
      "12-01, 12-01, 2027",
      "11-01, 11-01, 2026",
      "12-01, 11-01, 2027",
      "12-01, 11-01, 2026"
    ],
    "correctIndex": 2,
    "explanation": "날짜를 'MM' 으로 ROUND 하면 16일부터 다음 달 1일로 올리고 15일까지는 그달 1일로 내린다. 그래서 A(11-16)는 2026-12-01, B(11-15)는 2026-11-01 이다. 'YYYY' 로 ROUND 하면 7월 1일부터 다음 해 1월 1일로 올리므로 C 는 2027-01-01 이다. 같은 자리에 TRUNC 를 쓰면 날짜와 상관없이 늘 그달 1일·그해 1월 1일로 버린다. 정답은 ③번이다. ① 은 15일도 올린다고 본 것, ② 는 ROUND 를 TRUNC 처럼 버린 것, ④ 는 7월 1일을 아직 상반기로 보고 내린 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT ROUND(D1, 'MM')   AS A,\n       ROUND(D2, 'MM')   AS B,\n       ROUND(D3, 'YYYY') AS C\nFROM  (SELECT DATE '2026-11-16' AS D1,\n              DATE '2026-11-15' AS D2,\n              DATE '2026-07-01' AS D3\n       FROM   DUAL);"
      }
    ]
  },
  {
    "id": 10084,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 35,
    "title": "아래 SQL 의 결과(A, B, C, D)로 옳은 것은? (Oracle 기준, 날짜는 YYYY-MM-DD 로 표시)",
    "options": [
      "'06', 2025-02-28, 2, 5",
      "'05', 2025-03-03, 2, 5",
      "'06', 2025-02-28, 1.9, 5",
      "'06', 2025-03-01, 2, '05'"
    ],
    "correctIndex": 0,
    "explanation": "날짜에 숫자를 더하면 그만큼 일(日)이 늘어난다. 5월 31일 + 1 은 6월 1일이라 A 는 '06' 이다. ADD_MONTHS 는 결과 달에 같은 날이 없으면 그 달의 마지막 날로 맞춰, 1월 31일 + 1개월은 2월 28일이다(B). MONTHS_BETWEEN 은 두 날짜의 날(日)이 같으면 정수로 나와 3월 15일과 1월 15일 사이는 2 다(C). EXTRACT(MONTH …) 는 숫자 5 를 돌려준다(D). 정답은 ①번이다. ② 는 날짜 + 1 을 같은 달로 보고 2월을 넘긴 날짜를 3월로 넘긴 것, ③ 은 월 차이를 일수로 나눠 계산한 것, ④ 는 EXTRACT 가 문자 '05' 를 돌려준다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT\n  TO_CHAR(TO_DATE('20250531',\n    'YYYYMMDD') + 1, 'MM')   AS A,\n  ADD_MONTHS(TO_DATE('20250131',\n    'YYYYMMDD'), 1)          AS B,\n  MONTHS_BETWEEN(\n    TO_DATE('20250315', 'YYYYMMDD'),\n    TO_DATE('20250115', 'YYYYMMDD'))\n                             AS C,\n  EXTRACT(MONTH FROM\n    TO_DATE('202505', 'YYYYMM')) AS D\nFROM DUAL;"
      }
    ]
  },
  {
    "id": 10085,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 36,
    "title": "아래 세 테이블 T1, T2, T3 에 대한 집합 연산의 결과로 옳은 것은?",
    "options": [
      "A",
      "A B",
      "A B C B",
      "B B C"
    ],
    "correctIndex": 2,
    "explanation": "WHERE 절은 바로 앞 SELECT(T2) 에만 붙는다. T2 의 B 는 T3 의 C 와 달라 NOT IN 을 통과해 B 가 남는다. 이를 T1 의 A, B, C 와 UNION ALL 로 중복 없이 이어 붙이면 A, B, C, B 네 행이다(③). UNION ALL 은 정렬하지 않으므로 보통 위 SELECT 결과 다음에 아래 SELECT 결과가 붙는다. ① A 와 ② A B 는 T1 의 일부나 T2 쪽 결과를 빠뜨린 것이고, ④ 는 T1 의 A 를 빠뜨렸다.",
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
            "C"
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
          ]
        ]
      },
      {
        "type": "table",
        "caption": "T3 테이블",
        "headers": [
          "V"
        ],
        "rows": [
          [
            "C"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT V FROM T1\nUNION ALL\nSELECT V FROM T2\nWHERE  V NOT IN (SELECT V FROM T3);"
      }
    ]
  },
  {
    "id": 10086,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 37,
    "title": "아래 ACTOR_PAY 테이블에서 영화 배우별 최대 출연료 건을 조회하는 SQL 의 서브쿼리 유형은?",
    "options": [
      "단순 스칼라 서브쿼리",
      "인라인 뷰",
      "독립 서브쿼리",
      "연관 서브쿼리"
    ],
    "correctIndex": 3,
    "explanation": "서브쿼리 내부의 `WHERE ACTOR_ID = A.ACTOR_ID` 가 외부 쿼리 별칭 `A` 를 참조한다. 외부 행마다 서브쿼리가 다시 실행되므로 연관(Correlated) 서브쿼리. ① 은 외부 참조 없는 단일 값, ② 는 FROM 절 인라인 뷰, ③ 은 외부 참조 없이 독립 실행되는 서브쿼리.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "ACTOR_PAY 테이블",
        "headers": [
          "ACTOR_ID",
          "MOVIE",
          "FEE"
        ],
        "rows": [
          [
            "A1",
            "영화1",
            "5000"
          ],
          [
            "A1",
            "영화2",
            "8000"
          ],
          [
            "A2",
            "영화3",
            "3000"
          ],
          [
            "A2",
            "영화4",
            "6000"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT A.*\nFROM   ACTOR_PAY A\nWHERE  A.FEE = (SELECT MAX(FEE)\n                FROM   ACTOR_PAY\n                WHERE  ACTOR_ID = A.ACTOR_ID);"
      }
    ]
  },
  {
    "id": 10087,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 38,
    "title": "아래 A, B 테이블에 대한 SQL의 결과 건수로 옳은 것은?",
    "options": [
      "3건",
      "0건",
      "1건",
      "오류"
    ],
    "correctIndex": 0,
    "explanation": "서브쿼리의 VAL 에는 테이블 이름이 없는데, 컬럼 이름은 가장 가까운(안쪽) FROM 부터 찾으므로 B.VAL 이다. 서브쿼리는 A 와 아무 연관이 없고, B 에 VAL 이 NULL 인 행(ID 1)이 있으니 한 행을 돌려준다. EXISTS 는 값이 아니라 행이 있는지만 보므로 SELECT NULL 이어도 참이고, A 의 모든 행에서 똑같이 참이라 3건이다(①). ③ 1건은 VAL 을 바깥 A.VAL 로 읽어 A 의 ID 2 만 남는다고 본 결과, ② 0건은 SELECT NULL 이면 결과가 없다고 본 결과, ④ 는 문법상 문제가 없다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "A 테이블",
        "headers": [
          "ID",
          "VAL"
        ],
        "rows": [
          [
            "1",
            "10"
          ],
          [
            "2",
            "NULL"
          ],
          [
            "3",
            "30"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "B 테이블",
        "headers": [
          "ID",
          "VAL"
        ],
        "rows": [
          [
            "1",
            "NULL"
          ],
          [
            "3",
            "30"
          ],
          [
            "4",
            "40"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT *\nFROM   A\nWHERE  EXISTS (SELECT NULL\n               FROM   B\n               WHERE  VAL IS NULL);"
      }
    ]
  },
  {
    "id": 10088,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 39,
    "title": "아래 CATEGORY 테이블에 대한 계층형 질의의 트리 탐색 결과 (category_id 시퀀스) 로 옳은 것은?",
    "options": [
      "11 → 2 → 1 (역방향, 3건)",
      "2 → 11 → 22 (정방향, 3건)",
      "11 → 22 (정방향, 2건)",
      "11 만 (1건)"
    ],
    "correctIndex": 2,
    "explanation": "`START WITH category_id = 11` 으로 11 부터 탐색을 시작한다. `CONNECT BY PRIOR category_id = 상위카테고리` 는 \"이전 행의 category_id 가 다음 행의 상위카테고리\" 인 경우 연결 — 즉 부모 → 자식 정방향 탐색. 11 의 자식은 22(상위카테고리=11) 한 건이고 22 의 자식은 없으므로 결과는 11 → 22 두 건. ① 역방향이려면 `CONNECT BY category_id = PRIOR 상위카테고리` 형태여야 함, ② 시작점이 2 가 아니므로 X, ④ 자식 22 까지 전개되므로 1건 아님.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "category_id",
          "상위카테고리"
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
            "11",
            "2"
          ],
          [
            "22",
            "11"
          ]
        ],
        "caption": "CATEGORY 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT *\nFROM   CATEGORY\nSTART WITH category_id = 11\nCONNECT BY PRIOR category_id = 상위카테고리;"
      }
    ]
  },
  {
    "id": 10089,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 40,
    "title": "아래 EMP, DEPT 테이블에 대해 ㉠ NATURAL JOIN 과 ㉡ USING (부서번호) 조인의 결과 행 수로 옳은 것은?",
    "options": [
      "㉠ 2, ㉡ 4",
      "㉠ 4, ㉡ 4",
      "㉠ 2, ㉡ 2",
      "㉠ 3, ㉡ 4"
    ],
    "correctIndex": 0,
    "explanation": "NATURAL JOIN 은 이름이 같은 칼럼을 모두 조인 조건으로 쓴다. 두 테이블에는 부서번호와 지역이 함께 있으므로 둘 다 같아야 한다. E1(10, 서울) 과 E4(30, 서울) 만 DEPT 와 맞고, E2 는 10번 부서의 지역이 서울이라, E3 는 20번 부서의 지역이 부산이라 빠진다. 그래서 ㉠ 은 2행이다. USING (부서번호) 는 부서번호만 비교하므로 네 사원 모두 짝이 있어 ㉡ 은 4행이다. 정답은 ①번이다. ② 는 NATURAL JOIN 도 부서번호만 본다고 생각한 것이다. USING 절의 칼럼에는 테이블 별칭을 붙일 수 없고, NATURAL JOIN 과 USING 은 함께 쓸 수 없다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP",
        "headers": [
          "사번",
          "이름",
          "부서번호",
          "지역"
        ],
        "rows": [
          [
            "E1",
            "김",
            "10",
            "서울"
          ],
          [
            "E2",
            "이",
            "10",
            "부산"
          ],
          [
            "E3",
            "박",
            "20",
            "서울"
          ],
          [
            "E4",
            "최",
            "30",
            "서울"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "DEPT",
        "headers": [
          "부서번호",
          "부서명",
          "지역"
        ],
        "rows": [
          [
            "10",
            "영업",
            "서울"
          ],
          [
            "20",
            "개발",
            "부산"
          ],
          [
            "30",
            "인사",
            "서울"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT * FROM EMP NATURAL JOIN DEPT;\n\n-- ㉡\nSELECT * FROM EMP JOIN DEPT USING (부서번호);"
      }
    ]
  },
  {
    "id": 10090,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 41,
    "title": "빈 테이블 T(C) 에 아래 SQL 을 순서대로 실행했다. 오류가 나는 문장은 건너뛰고 계속 실행한다고 할 때, 마지막 SELECT 의 결과로 옳은 것은?",
    "options": [
      "1",
      "1, 2, 3",
      "1, 2, 4",
      "1, 2"
    ],
    "correctIndex": 3,
    "explanation": "COMMIT 은 그때까지의 변경을 확정하고, 그 트랜잭션에서 만든 저장점도 모두 지운다. 그래서 COMMIT 뒤의 ROLLBACK TO A 는 저장점 A 가 없어 오류가 나고 아무것도 되돌리지 않는다. 이후 마지막 ROLLBACK 이 COMMIT 이후에 넣은 3 과 4 를 모두 취소하므로 1, 2 만 남는다. 정답은 ④번이다. ① 은 COMMIT 된 2 도 저장점으로 되돌릴 수 있다고 본 것, ②·③ 은 마지막 ROLLBACK 이 COMMIT 이후의 변경 중 일부만 취소한다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "INSERT INTO T VALUES (1);\nSAVEPOINT A;\nINSERT INTO T VALUES (2);\nCOMMIT;\nINSERT INTO T VALUES (3);\nROLLBACK TO A;\nINSERT INTO T VALUES (4);\nROLLBACK;\nSELECT C FROM T ORDER BY C;"
      }
    ]
  },
  {
    "id": 10091,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 42,
    "title": "배송 내역 테이블에서 서로 다른 배송일자가 2개 이상인 고객을 조회하는 다음 SQL의 결과로 옳은 것은?",
    "options": [
      "1, 2, 3",
      "2, 3",
      "2",
      "1, 2"
    ],
    "correctIndex": 2,
    "explanation": "COUNT(DISTINCT 컬럼) 은 NULL 을 빼고 서로 다른 값의 개수를 센다. 고객 1 은 날짜 하나와 NULL 이라 1, 고객 2 는 01-03·01-05 로 2, 고객 3 은 02-01 이 두 번이라 1, 고객 4 는 1 이다. 2 이상은 고객 2 뿐이다(③). ① 은 COUNT(*) 로 행 수를 센 결과(1·2·3 이 2행 이상), ② 는 COUNT(배송일자) 로 NULL 만 빼고 중복은 센 결과(고객 1 은 1, 고객 3 은 2), ④ 는 COUNT(DISTINCT) 가 NULL 도 하나의 값으로 센다고 본 결과(고객 1 이 2 가 됨)다. COUNT(*) · COUNT(컬럼) · COUNT(DISTINCT 컬럼) 의 차이를 한 번에 묻는 문항이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "배송 테이블",
        "headers": [
          "고객ID",
          "배송일자"
        ],
        "rows": [
          [
            "1",
            "2025-01-01"
          ],
          [
            "1",
            "NULL"
          ],
          [
            "2",
            "2025-01-03"
          ],
          [
            "2",
            "2025-01-05"
          ],
          [
            "3",
            "2025-02-01"
          ],
          [
            "3",
            "2025-02-01"
          ],
          [
            "4",
            "2025-03-01"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT 고객ID\nFROM   배송\nGROUP BY 고객ID\nHAVING COUNT(DISTINCT 배송일자) >= 2;"
      }
    ]
  },
  {
    "id": 10092,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 43,
    "title": "다음 SQL ㉠~㉤ 중 한 행이 조회되는 것만 모두 고른 것은?",
    "options": [
      "㉣",
      "㉠, ㉡, ㉣",
      "㉠, ㉣",
      "㉠, ㉢, ㉣"
    ],
    "correctIndex": 2,
    "explanation": "WHERE 는 조건이 참(TRUE)인 행만 남기고, 거짓과 UNKNOWN 은 모두 버린다. ㉠ IN 은 '1 = 1 OR 1 = NULL' 이다. 앞이 참이라 OR 전체가 참이 되어 조회된다. ㉡ NOT IN 은 '2 <> 1 AND 2 <> NULL' 이다. 뒤가 UNKNOWN 이라 AND 전체가 UNKNOWN 이 되어 조회되지 않는다. ㉢ NULL = NULL 은 UNKNOWN 이고 NOT UNKNOWN 도 UNKNOWN 이다. ㉣ 은 NVL 로 0 이 되어 참이다. ㉤ 은 NULL 이 NULL 이므로 IS NOT NULL 이 거짓이다. 정답은 ③번이다. ① 은 IN 목록에 NULL 이 있으면 무조건 UNKNOWN 이 된다고 본 것이고, ② 는 NOT IN 도 IN 처럼 하나만 맞으면 된다고 본 것, ④ 는 NOT 이 UNKNOWN 을 참으로 바꾼다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT 1 FROM DUAL\nWHERE 1 IN (1, NULL);\n-- ㉡\nSELECT 1 FROM DUAL\nWHERE 2 NOT IN (1, NULL);\n-- ㉢\nSELECT 1 FROM DUAL\nWHERE NOT (NULL = NULL);\n-- ㉣\nSELECT 1 FROM DUAL\nWHERE NVL(NULL, 0) = 0;\n-- ㉤\nSELECT 1 FROM DUAL\nWHERE NULL IS NOT NULL;"
      }
    ]
  },
  {
    "id": 10093,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 44,
    "title": "아래 PARENT, CHILD 테이블에 대한 DDL/DML 수행 결과에 대한 설명으로 옳은 것은?",
    "options": [
      "PARENT만 삭제되고 CHILD는 그대로 남는다.",
      "CHILD만 삭제되고 PARENT는 그대로 남는다.",
      "외래키 참조 무결성 오류로 삭제가 실패한다.",
      "ON DELETE CASCADE 옵션에 의해 PARENT와 CHILD 모두 삭제된다."
    ],
    "correctIndex": 3,
    "explanation": "PARENT 의 ID=1 행이 삭제될 때 CHILD 의 `PAR_ID` 컬럼은 `ON DELETE CASCADE` 로 선언되어 있어 부모 행 삭제와 함께 자식 행(ID=10) 도 자동으로 함께 삭제된다. 결과적으로 두 테이블에서 해당 행이 모두 제거되어 빈 테이블이 된다. ① 은 CHILD 행이 남는다고, ② 는 반대로 자식만 지워진다고 본 결과이고, ③ 참조 무결성 오류는 ON DELETE CASCADE 가 없을 때(기본 동작) 나는 결과다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "PARENT 테이블 (DELETE 전)",
        "headers": [
          "ID"
        ],
        "rows": [
          [
            "1"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "CHILD 테이블 (DELETE 전, FK ON DELETE CASCADE)",
        "headers": [
          "ID",
          "PAR_ID"
        ],
        "rows": [
          [
            "10",
            "1"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "CREATE TABLE PARENT (ID NUMBER PRIMARY KEY);\nCREATE TABLE CHILD  (\n  ID     NUMBER PRIMARY KEY,\n  PAR_ID NUMBER REFERENCES PARENT(ID) ON DELETE CASCADE\n);\n\nINSERT INTO PARENT VALUES (1);\nINSERT INTO CHILD  VALUES (10, 1);\nDELETE FROM PARENT WHERE ID = 1;"
      }
    ]
  },
  {
    "id": 10094,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 45,
    "title": "아래 EMP, DEPT 테이블에 대한 서브쿼리의 결과로 옳은 것은?",
    "options": [
      "공집합",
      "전체 사원",
      "DEPTNO가 NULL인 사원",
      "오류 발생"
    ],
    "correctIndex": 0,
    "explanation": "DEPT 테이블에 DNAME 이 '없는부서' 인 행이 없으므로 서브쿼리는 NULL 을 반환한다. 메인 쿼리의 `DEPTNO = NULL` 비교는 UNKNOWN 으로 평가되어 어떤 행도 TRUE 가 되지 않으므로 공집합이 반환된다. ③ DEPTNO=NULL 사원도 `=` 연산자로는 매칭되지 않음 (IS NULL 만 매칭). ② 는 조건이 무시된다고 본 결과이고, ④ 서브쿼리가 0행이어도 = 비교는 오류가 나지 않는다(오류는 2행 이상일 때 난다).",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP 테이블",
        "headers": [
          "EMPNO",
          "ENAME",
          "DEPTNO"
        ],
        "rows": [
          [
            "7369",
            "SMITH",
            "20"
          ],
          [
            "7499",
            "ALLEN",
            "30"
          ],
          [
            "7782",
            "CLARK",
            "10"
          ],
          [
            "7839",
            "KING",
            "(NULL)"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "DEPT 테이블",
        "headers": [
          "DEPTNO",
          "DNAME"
        ],
        "rows": [
          [
            "10",
            "ACCOUNTING"
          ],
          [
            "20",
            "RESEARCH"
          ],
          [
            "30",
            "SALES"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT *\nFROM   EMP\nWHERE  DEPTNO = (SELECT DEPTNO FROM DEPT WHERE DNAME = '없는부서');"
      }
    ]
  },
  {
    "id": 10095,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 46,
    "title": "아래 GROUP BY 절 결과의 총 행 개수로 옳은 것은?",
    "options": [
      "9",
      "10",
      "11",
      "12"
    ],
    "correctIndex": 2,
    "explanation": "ROLLUP 이 GROUP BY 의 일부에만 쓰였다(부분 ROLLUP). A 는 항상 묶고, ROLLUP(B, C) 가 (B, C), (B), () 를 만들어 결과 묶음은 (A, B, C), (A, B), (A) 세 가지다. (A, B, C): X-1-p, X-1-q, X-2-p, Y-1-p, Y-NULL-p 5행. (A, B): X-1, X-2, Y-1, Y-NULL 4행. (A): X, Y 2행. 합계 11행이다(③). ① 9 는 B 가 NULL 인 그룹을 빼고 센 값, ② 10 은 A 소계 대신 총계 1행을 센 값(5 + 4 + 1), ④ 12 는 ROLLUP(A, B, C) 로 보고 총계까지 센 값이다. 결과에는 (Y, NULL, NULL) 이 두 행 나오는데, 하나는 B 가 원래 NULL 인 그룹의 소계이고 다른 하나는 Y 전체 소계다.",
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
            "X",
            "1",
            "p"
          ],
          [
            "X",
            "1",
            "q"
          ],
          [
            "X",
            "2",
            "p"
          ],
          [
            "Y",
            "1",
            "p"
          ],
          [
            "Y",
            "NULL",
            "p"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT A, B, C, COUNT(*)\nFROM   T\nGROUP BY A, ROLLUP(B, C);"
      }
    ]
  },
  {
    "id": 10096,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 47,
    "title": "아래 T 테이블 (모든 VAL=100, 6행) 에 대한 SQL 의 M, S, F 컬럼 값으로 가장 적절한 것은?",
    "options": [
      "M = 100 (모든 행), S = 누적 (100, 200, ..., 600), F = 100 (모든 행)",
      "M = NULL, S = 600 (모든 행), F = NULL",
      "M = 100, 200, 300, 400, 500, 600 (S 와 같은 누적), F = 100 (모든 행)",
      "M = S = F = 100 (세 컬럼 모두 모든 행에서 100)"
    ],
    "correctIndex": 0,
    "explanation": "M = MAX(VAL) OVER () 는 전체 최대값이라 모든 행에서 100 이다. S = SUM(VAL) OVER (ORDER BY ID) 는 기본 윈도우(처음~현재 행)의 누적합이라 100, 200, ..., 600 이다. F = FIRST_VALUE(VAL) OVER (... ROWS BETWEEN 200 PRECEDING AND 200 FOLLOWING) 는 프레임의 첫 값이 모두 100 이라 모든 행에서 100 이다. 따라서 M 과 F 는 100 으로 고정이고 S 만 누적값인 ①이 옳다. ③ 은 OVER () 인 M 도 누적된다고 본 결과이고, ④ 는 S 의 ORDER BY 가 누적합을 만든다는 점을 놓친 결과다.",
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
            "100"
          ],
          [
            "2",
            "100"
          ],
          [
            "3",
            "100"
          ],
          [
            "4",
            "100"
          ],
          [
            "5",
            "100"
          ],
          [
            "6",
            "100"
          ]
        ],
        "caption": "T 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT VAL,\n       MAX(VAL)         OVER ()                         AS M,\n       SUM(VAL)         OVER (ORDER BY ID)              AS S,\n       FIRST_VALUE(VAL) OVER (ORDER BY ID ROWS BETWEEN\n                              200 PRECEDING AND 200 FOLLOWING) AS F\nFROM   T;"
      }
    ]
  },
  {
    "id": 10097,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 48,
    "title": "아래 질의 결과로 옳은 것은?",
    "options": [
      "A",
      "B",
      "C",
      "오류"
    ],
    "correctIndex": 0,
    "explanation": "CASE 는 WHEN 조건을 위에서부터 차례로 평가해 처음 참이 되는 THEN 값을 반환하고 나머지는 보지 않는다. 첫 조건 1 = 1 이 참이므로 'A' 다(①). 두 번째 조건도 참이지만 평가되지 않으며, 조건이 겹쳐도 오류는 나지 않는다(④). ② B 는 마지막으로 참이 되는 조건을 고른 결과이고, ③ C 는 조건이 겹치면 ELSE 로 간다고 본 결과다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT CASE WHEN 1 = 1 THEN 'A'\n            WHEN 1 = 1 THEN 'B'\n            ELSE 'C'\n       END\nFROM DUAL;"
      }
    ]
  },
  {
    "id": 10098,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 49,
    "title": "계층형 질의에서 데이터에 순환(사이클)이 있어도 무한 루프 없이 전개하고, 순환이 일어난 행을 표시하려 한다. 빈칸에 들어갈 옵션은?",
    "options": [
      "NO CYCLE",
      "LEAF",
      "NOCYCLE",
      "NOCYCLES"
    ],
    "correctIndex": 2,
    "explanation": "NOCYCLE 을 쓰면 순환이 있는 데이터를 만나도 이미 지나온 행으로 다시 돌아가지 않고 그 가지의 전개를 멈춘다. 그래서 무한 루프 오류(ORA-01436) 없이 결과가 나오고, 순환이 일어난 행은 CONNECT_BY_ISCYCLE 이 1 로 표시된다(③). NOCYCLE 이 없으면 순환을 만났을 때 오류가 난다. ① NO CYCLE 과 ④ NOCYCLES 는 없는 철자이고, ② LEAF 는 CONNECT BY 옵션이 아니다(리프 여부는 CONNECT_BY_ISLEAF 로 본다). ※ '순환을 허용하면서' 라는 문장이 '순환을 허용하지 않는다' 와 헷갈린다는 제보가 있어 문장을 풀어 썼다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT ENAME, LEVEL, CONNECT_BY_ISCYCLE\nFROM   EMP\nSTART WITH MGR IS NULL\nCONNECT BY ( ? ) PRIOR EMPNO = MGR;"
      }
    ]
  },
  {
    "id": 10099,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "2과목",
    "number": 50,
    "title": "행이 있는 EMP 테이블에 아래 SQL ㉠, ㉡, ㉢ 을 실행한 결과로 옳은 것은?",
    "options": [
      "공집합, 공집합, 공집합",
      "0, 0, 0",
      "0, NULL, NULL",
      "0, NULL, 공집합"
    ],
    "correctIndex": 3,
    "explanation": "WHERE 1 = 0 은 늘 거짓이라 모든 행이 걸러진다. GROUP BY 없이 집계 함수만 쓰면 대상 행이 없어도 결과는 1행이 나온다. 그래서 ㉠ COUNT(*) 는 0, ㉡ MAX(SAL) 은 NULL 이 담긴 1행이다. GROUP BY 가 있으면 그룹이 하나도 만들어지지 않으므로 ㉢ 은 행이 없는 공집합이다. 정답은 ④번이다. ① 은 집계 함수도 공집합을 돌려준다고 본 것, ② 는 MAX 도 0 을 돌려준다고 본 것, ③ 은 GROUP BY 가 있어도 1행이 나온다고 본 것이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- ㉠\nSELECT COUNT(*) FROM EMP\nWHERE  1 = 0;\n-- ㉡\nSELECT MAX(SAL) FROM EMP\nWHERE  1 = 0;\n-- ㉢\nSELECT MAX(SAL) FROM EMP\nWHERE  1 = 0\nGROUP  BY DEPTNO;"
      }
    ]
  }
];
