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
    "title": "데이터 모델링의 특징이 아닌 것은?",
    "options": [
      "추상화",
      "단순화",
      "명확화",
      "최적화"
    ],
    "correctIndex": 3,
    "explanation": "데이터 모델링의 세 가지 특징은 추상화(현실 세계를 일정한 형식으로 표현), 단순화(제한된 표기법과 언어로 쉽게 이해하도록 표현), 명확화(애매함을 없애고 정확하게 표현)다(①②③). 최적화는 이 세 특징에 들지 않는다(④).",
    "_source": "authored"
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
    "title": "관계(Relationship)의 표기법 요소가 아닌 것은?",
    "options": [
      "관계명",
      "관계차수",
      "관계선택사양",
      "관계 빈도"
    ],
    "correctIndex": 3,
    "explanation": "관계의 표기법은 관계명(Relationship Name), 관계차수(Cardinality), 관계선택사양(Optionality)의 세 요소로 구성된다. 관계 빈도는 표기 요소에 해당하지 않는다. ①②③ 이 관계 표기의 3요소다.",
    "_source": "authored"
  },
  {
    "id": 10054,
    "examSetId": "round-59",
    "examLabel": "제59회 (2025년 11월)",
    "round": 59,
    "subject": "1과목",
    "number": 5,
    "title": "속성의 특성에 따른 분류(기본·설계·파생 속성)에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "기본 속성은 업무로부터 추출한 일반적인 속성이다.",
      "설계 속성은 원래 업무상 필요한 속성은 아니지만 코드나 일련번호처럼 설계하면서 새로 만들거나 변형한 속성이다.",
      "파생 속성은 다른 속성으로부터 계산·변형되어 생성되는 속성이다.",
      "파생 속성은 원본 값이 바뀌어도 자동으로 일관성이 유지되므로 가능한 한 많이 정의하는 것이 좋다."
    ],
    "correctIndex": 3,
    "explanation": "파생 속성은 다른 속성 값으로 계산한 값이라, 원본이 바뀔 때 함께 갱신하지 않으면 값이 어긋난다. 그래서 데이터 정합성을 위해 꼭 필요한 경우에만 최소한으로 정의한다(④ 가 옳지 않음). ①②③ 은 속성의 특성에 따른 분류(기본·설계·파생)를 바르게 설명했다. ※ 복원 자료에서 이 번호가 2과목 24번과 같은 집합 연산자 문제로 들어가 있어, 1과목 범위의 문제로 대체했다.",
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
    "title": "다음 중 이행적 함수 종속(Transitive Dependency)을 제거하는 정규화 단계는?",
    "options": [
      "1정규형",
      "2정규형",
      "3정규형",
      "BCNF"
    ],
    "correctIndex": 2,
    "explanation": "이행적 종속 제거는 3정규화의 목적이다. ② 2정규화는 부분 함수 종속을, ④ BCNF는 결정자이면서 후보키가 아닌 종속을 제거한다. ① 1정규화는 반복 그룹·다중값을 없애 원자값으로 만드는 단계다.",
    "_source": "authored"
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
    "title": "본질 식별자와 인조 식별자에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "본질 식별자는 업무에 의해 자연스럽게 부여되는 식별자이다.",
      "주민등록번호는 업무에서 자연 발생한 본질 식별자에 해당한다.",
      "두 개 이상의 속성을 결합해 만든 식별자는 보조식별자, 본질식별자, 복합식별자 등으로 분류된다.",
      "인조 식별자는 일련번호 형태로 시스템이 부여하는 경우가 많다."
    ],
    "correctIndex": 2,
    "explanation": "보조·본질·복합 식별자는 서로 다른 기준으로 나눈 이름이다. 보조 식별자는 대표성 여부, 본질 식별자는 업무에서 자연스럽게 생겼는지, 복합 식별자는 속성이 몇 개인지로 나눈다. 그래서 두 개 이상의 속성을 결합했다는 사실만으로 이 세 가지로 분류된다는 ③ 이 옳지 않다. ① 은 본질 식별자의 정의, ② 주민등록번호는 업무에서 자연스럽게 생긴 본질 식별자, ④ 인조 식별자는 보통 시스템이 일련번호로 부여한다는 설명으로 모두 옳다.",
    "_source": "authored"
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
    "title": "아래 T 테이블에서 바로 직전 행의 값을 가져오되, 정렬을 내림차순으로 지정해 역방향 탐색 효과를 내려면 가장 적절한 함수와 정렬 조합은?",
    "options": [
      "LAG, ORDER BY 조건은 ASC",
      "LAG, ORDER BY 조건은 DESC",
      "LEAD, ORDER BY 조건은 ASC",
      "LEAD, ORDER BY 조건은 DESC"
    ],
    "correctIndex": 1,
    "explanation": "`LAG` 는 \"이전 행\" 의 값을 가져오는 함수다. ORDER BY 가 ASC 면 ID=1, 2, 3 순으로 정렬되어 LAG 가 ID=1 의 직전 행(없음 → NULL), ID=2 의 직전(=ID=1, VAL=100) 을 반환한다. ORDER BY 를 DESC 로 바꾸면 ID=3, 2, 1 순이라 LAG 가 \"논리적 다음 행\"(원래 데이터 기준) 을 가져오는 효과 = LEAD 와 같음. 정답은 ② LAG + DESC. ① LAG + ASC 는 원래 순서의 이전 행이라 역방향 효과가 없고, ③ LEAD + ASC 는 다음 행을 가져오며, ④ LEAD + DESC 는 원래 순서의 이전 행을 가져와 ① 과 같은 결과가 된다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T 테이블",
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
            "200"
          ],
          [
            "3",
            "300"
          ]
        ]
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
    "title": "아래 연구소 테이블에서 결과 (A연구소, 화학연구소, 연구소) 를 모두 조회할 수 있는 SQL 로 옳은 것은?",
    "options": [
      "SELECT * FROM 연구소 WHERE 명 = '_연구소';",
      "SELECT * FROM 연구소 WHERE 명 = '%연구소';",
      "SELECT * FROM 연구소 WHERE 명 LIKE '%연구소';",
      "SELECT * FROM 연구소 WHERE 명 LIKE '_연구소';"
    ],
    "correctIndex": 2,
    "explanation": "`=` 비교는 정확히 그 문자열이어야 매칭되므로 ① `'_연구소'` 는 \"_연구소\" 라는 문자열만 찾고, ② `'%연구소'` 도 \"%연구소\" 문자열만 찾는다 (모두 매칭 0 건). LIKE 와 함께 써야 와일드카드로 동작. ③ `LIKE '%연구소'` 는 `%` (0 글자 이상) 라 \"연구소\" 단독도 포함해 세 행 모두 매칭. ④ `LIKE '_연구소'` 는 `_` (정확히 1 글자) 라 \"A연구소\" 만 매칭, \"화학연구소\" 와 \"연구소\" 는 누락.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "명"
        ],
        "rows": [
          [
            "A연구소"
          ],
          [
            "화학연구소"
          ],
          [
            "연구소"
          ]
        ],
        "caption": "연구소 테이블"
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
    "title": "NVL2 함수에 대한 다음 설명 중 옳은 것은?",
    "options": [
      "NVL2(SAL, 0, SAL)은 SAL이 NULL일 때 0을 반환한다.",
      "NVL2(NULL, a, b)는 b를 반환한다.",
      "NULLIF(a, b)는 NVL2와 동일한 기능을 수행한다.",
      "NVL2(expr, a)는 인자 두 개만으로 사용할 수 있다."
    ],
    "correctIndex": 1,
    "explanation": "NVL2(expr, a, b)는 expr이 NULL이면 b를, NOT NULL이면 a를 반환한다. 따라서 NVL2(NULL, a, b)는 b를 반환하는 것이 맞다. ①은 SAL이 NULL이면 SAL(NULL)을 반환하므로 0이 아니며, ③ NULLIF는 두 값이 같으면 NULL을 반환하는 별개 함수이고, ④ NVL2는 반드시 인자 3개가 필요하다.",
    "_source": "authored"
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
    "title": "정규화에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "정규화는 데이터의 중복성과 유연성을 최소화하기 위해 사용된다.",
      "정규화를 수행하면 테이블 간의 독립성이 향상된다.",
      "정규형에는 1정규형, 2정규형, 3정규형, BCNF 정규형 등이 있다.",
      "단일 속성 값을 가지면 1정규형을 만족한다."
    ],
    "correctIndex": 0,
    "explanation": "정규화를 하면 테이블이 주제별로 나뉘어 독립성이 높아지고(②), 정규형에는 1·2·3정규형과 BCNF 등이 있으며(③), 모든 속성이 단일 값(원자값)을 가지면 1정규형이다(④). 정규화의 목적은 중복을 최소화하고 구조의 유연성을 높이는 것이므로 유연성까지 최소화한다는 ① 이 옳지 않다.",
    "_source": "authored"
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
    "title": "아래 두 REGEXP_SUBSTR 호출에서 입력 문자열은 'BCD' 이고 결과가 (첫번째='BCD', 두번째=NULL) 이 되도록 빈칸 두 개에 들어갈 정규식 패턴 조합은?",
    "options": [
      "'B.D', 'B.D'",
      "'BCD', 'BCD'",
      "'B.D', 'b.d'",
      "'b.d', 'B.D'"
    ],
    "correctIndex": 2,
    "explanation": "정규식의 `.` 은 아무 문자 하나를 뜻한다. 첫 번째 빈칸에 'B.D' 를 넣으면 'B' + 아무 문자(C) + 'D' 로 'BCD' 와 맞아 'BCD' 가 나온다. 두 번째 빈칸의 'b.d' 는 소문자라, 대소문자를 구분하는 Oracle REGEXP 기본 동작에서는 'BCD' 와 맞지 않아 NULL 이 나온다. 그래서 정답은 ③ 'B.D', 'b.d' 다. ① 은 둘 다 'B.D' 라 두 결과가 모두 'BCD' 이고, ② 도 둘 다 'BCD' 이며, ④ 는 첫 번째가 NULL 이 되어 원하는 결과와 반대다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT REGEXP_SUBSTR('BCD', ( ? )) AS 첫번째,\n       REGEXP_SUBSTR('BCD', ( ? )) AS 두번째\nFROM DUAL;"
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
    "title": "집합 연산자에 대한 다음 설명 중 옳지 않은 것은?",
    "options": [
      "상호호환되는 경우에도 무조건 데이터 타입을 일치시켜야 한다.",
      "UNION은 중복을 제거하며 결과를 정렬하는 부담이 있다.",
      "INTERSECT는 두 집합의 공통 행만 반환한다.",
      "EXCEPT(MINUS)는 첫 번째 집합에서 두 번째 집합의 행을 제외한 결과를 반환한다."
    ],
    "correctIndex": 0,
    "explanation": "UNION 은 중복을 제거하느라 정렬 부담이 있고(②), INTERSECT 는 공통 행만(③), EXCEPT(MINUS)는 첫 집합에서 둘째 집합 행을 뺀 결과를 반환한다(④). 집합 연산은 대응하는 컬럼의 타입이 같은 계열(숫자-숫자, 문자-문자)로 호환되면 되고 완전히 같은 타입일 필요는 없으므로 ① 이 옳지 않다.",
    "_source": "authored"
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
    "title": "다음 INSERT 문 중 입력 오류가 발생하는 것은?",
    "options": [
      "INSERT INTO TABLE1 VALUES (1, SYSDATE, '001');",
      "INSERT INTO TABLE1 VALUES (1, TO_DATE('2024-06-06', 'YYYY-MM-DD'), '001');",
      "INSERT INTO TABLE1 VALUES (1, DATE '2024-06-06', '001');",
      "INSERT INTO TABLE1 VALUES (1, 20240606, '001');"
    ],
    "correctIndex": 3,
    "explanation": "B 컬럼은 DATE 타입인데 숫자 리터럴 20240606이 직접 입력되어 자동 변환이 이루어지지 않으므로 타입 불일치 오류가 발생한다. ① SYSDATE, ② TO_DATE(...), ③ DATE 리터럴은 모두 DATE 값이라 정상 입력된다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "CREATE TABLE TABLE1 (\n  A NUMBER,\n  B DATE,\n  C VARCHAR2(10)\n);"
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
    "title": "주문 테이블에서 '전체 합계', '월별 합계', '고객별 합계' 만 한 번에 구하고 '월·고객 조합별 합계' 는 제외하려 한다. 가장 적합한 GROUP BY 절은? (월 = SUBSTR(주문일자, 1, 6))",
    "options": [
      "GROUP BY CUBE(SUBSTR(주문일자, 1, 6), 고객번호)",
      "GROUP BY ROLLUP(SUBSTR(주문일자, 1, 6), 고객번호)",
      "GROUP BY SUBSTR(주문일자, 1, 6), 고객번호",
      "GROUP BY GROUPING SETS((), SUBSTR(주문일자, 1, 6), 고객번호)"
    ],
    "correctIndex": 3,
    "explanation": "GROUPING SETS 는 필요한 집계 단위만 골라 나열할 수 있어 (), (월), (고객번호) 세 가지만 만든다(④). ① CUBE 는 (월, 고객), (월), (고객), () 네 가지를 모두 만들어 제외하려던 월·고객 조합이 포함되고, ② ROLLUP 은 (월, 고객), (월), () 라서 조합이 포함되고 고객별 합계가 빠지며, ③ 은 월·고객 조합별 합계만 만든다. ※ 복원 자료의 보기에서 함수 인수가 빠져(CUBE(( ), SUBSTR()) 등) 뜻이 통하지 않아, 같은 개념을 묻도록 조건과 보기를 복원했다.",
    "_source": "authored"
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
    "title": "'202505' 문자열에서 월(MM) 부분만 추출하려 한다. 아래 방식 중 해당 목적과 가장 거리가 먼 것은?",
    "options": [
      "EXTRACT(YEAR FROM SYSDATE)",
      "EXTRACT(MONTH FROM TO_DATE('202505','YYYYMM'))",
      "SUBSTR('202505', 5, 2)",
      "TO_NUMBER(TO_CHAR(TO_DATE('202505','YYYYMM'),'MM'))"
    ],
    "correctIndex": 0,
    "explanation": "① 은 현재 날짜(SYSDATE)에서 연도를 추출하므로 '202505' 와도, 월과도 무관하다. ② 는 문자열을 날짜로 바꾼 뒤 월을 추출해 5, ③ 은 5번째 문자부터 2글자를 잘라 '05', ④ 는 날짜로 바꾼 뒤 'MM' 형식 문자로 바꿔 숫자 5 를 얻는다. 목적과 가장 거리가 먼 것은 ① 이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "-- 대상 문자열: '202505'\n-- 추출 목표: 05 (월)"
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
    "title": "아래 SQL 들 중 WHERE 절 평가 결과가 나머지와 다른 것은?",
    "options": [
      "SELECT * FROM DUAL WHERE 1 <> NULL;",
      "SELECT * FROM DUAL WHERE NULL = NULL;",
      "SELECT * FROM DUAL WHERE NULL IS NULL;",
      "SELECT * FROM DUAL WHERE 1 > NULL;"
    ],
    "correctIndex": 2,
    "explanation": "①②④ 의 NULL 비교(`=`, `<>`, `>` 등 일반 연산자) 는 모두 UNKNOWN 으로 평가되어 행이 선택되지 않아 0 건 반환. 그러나 ③ `IS NULL` 은 NULL 판별 전용 연산자로 TRUE 를 반환해 1 건 (DUAL 의 한 행) 반환. 결과가 다른 것은 ③.",
    "_source": "authored"
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
    "title": "아래 SQL의 결과로 옳은 것은?",
    "options": [
      "EMP 전체 행",
      "오류 발생",
      "WHERE 1 = 0 때문에 오류 발생",
      "공집합"
    ],
    "correctIndex": 3,
    "explanation": "WHERE 1 = 0 은 어떤 행에서도 거짓인 조건이라 선택되는 행이 없어 공집합이다(④). 문법상 문제가 없으므로 오류는 나지 않는다(②③). 데이터 없이 테이블 구조만 복사할 때(CREATE TABLE ... AS SELECT ... WHERE 1 = 0) 이 방식을 쓴다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT *\nFROM   EMP\nWHERE  1 = 0;"
      }
    ]
  }
];
