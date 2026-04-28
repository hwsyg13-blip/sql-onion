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
    "title": "아래 상황에 해당하는 정규화 단계는?",
    "options": [
      "제1정규화",
      "제2정규화",
      "제3정규화",
      "BCNF"
    ],
    "correctIndex": 1,
    "explanation": "주식별자(PK)를 구성하는 컬럼이 둘 이상일 때 일반 컬럼이 PK 전체에 종속되지 않고 PK 의 일부에만 종속되는 부분 함수 종속을 제거하는 단계가 제2정규화이다. 제1정규화는 다가속성·반복그룹 제거, 제3정규화는 이행 종속 제거, BCNF 는 결정자 후보키화에 해당한다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "식별자 컬럼 간의 부분 함수 종속성을 해결한다."
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
    "explanation": "도메인(Domain)은 어떤 속성(Attribute)이 가질 수 있는 원자값의 집합과 데이터 타입·길이·NULL 허용 여부 등 제약을 의미한다. 관계는 엔터티 간 연결, 식별자는 인스턴스 구분 키, 인스턴스는 엔터티의 한 행을 가리킨다.",
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
    "explanation": "주식별자의 4대 특성은 유일성·최소성·불변성·존재성(NOT NULL)이며, 그중 '구성 컬럼 중 하나라도 빠지면 유일성을 잃는' 성질은 최소성(Minimal)이다. 유일성은 식별자 자체가 중복되지 않는 성질이고, 대표성은 본질 식별자 선정 기준에 가깝다.",
    "_source": "authored"
  },
  {
    "id": 10553,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "1과목",
    "number": 4,
    "title": "아래 ERD 해석 중 옳지 않은 것은?",
    "options": [
      "하나의 주문은 반드시 하나의 상품을 가진다.",
      "하나의 상품은 여러 주문을 가질 수 있다.",
      "하나의 상품은 항상 주문을 가진다.",
      "주문이 없는 상품도 존재할 수 있다."
    ],
    "correctIndex": 2,
    "explanation": "상품 쪽 실선 + `|`는 주문 입장에서 상품이 필수 하나임을 의미하고, 주문 쪽 점선 + `o<`는 상품 입장에서 주문 참여가 선택적(0 이상 다수)임을 의미한다. 따라서 주문이 없는 상품도 존재할 수 있으므로 ③은 옳지 않다.",
    "_source": "authored",
    "references": [
      {
        "type": "ascii",
        "text": "[ 상품 ] ─|─ ─ ─ ─o< [ 주문 ]"
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
    "title": "도메인의 특징으로 해당하지 않는 것은?",
    "options": [
      "데이터 타입을 정의한다.",
      "값의 범위(크기) 를 정의한다.",
      "NOT NULL 여부를 정의한다.",
      "FOREIGN KEY 제약 조건을 정의한다."
    ],
    "correctIndex": 3,
    "explanation": "외래키 제약은 테이블 간 참조 관계에서 정의되며 도메인의 속성에 포함되지 않는다.",
    "_source": "authored"
  },
  {
    "id": 10555,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "1과목",
    "number": 6,
    "title": "식별자 관계에 대한 설명으로 옳지 않은 것은?",
    "options": [
      "부모의 주식별자가 자식의 주식별자에 포함된다.",
      "자식 엔터티는 부모 엔터티가 없이 존재할 수 없다.",
      "비식별자 관계는 자식이 독립적으로 존재할 수 있다.",
      "식별자 관계는 자식의 주식별자가 부모로부터 독립되어 있고, 비식별자 관계는 자식의 주식별자가 부모에게 종속되어 있다."
    ],
    "correctIndex": 3,
    "explanation": "설명이 반대로 기술되어 있다. 식별자 관계는 자식의 주식별자가 부모에 종속되고, 비식별자 관계는 독립적이다.",
    "_source": "authored"
  },
  {
    "id": 10556,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "1과목",
    "number": 7,
    "title": "아래 설명에 해당하는 속성은?",
    "options": [
      "기본 속성",
      "설계 속성",
      "파생 속성",
      "관계 속성"
    ],
    "correctIndex": 1,
    "explanation": "설계 속성(Designed Attribute)은 업무 분석 과정에서 본래 데이터 외에 데이터 모델링·업무 규칙화를 위해 추가로 도출되는 속성이다. 기본 속성은 업무에서 직접 추출한 원천 속성, 파생 속성은 다른 속성으로부터 계산된 속성, 관계 속성은 엔터티 간 관계에서 발생하는 외래키 성격의 속성이다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "업무상 필요한 데이터 이외에 데이터 모델링을 위해 업무를 규칙화하기 위한 속성"
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
    "explanation": "행위 엔터티(Active Entity)는 두 개 이상의 부모 엔터티의 행위·트랜잭션으로부터 발생하며, 분석 초기에는 잘 드러나지 않다가 상세 설계 단계에서 식별된다. 기본 엔터티는 업무에 원래 존재하는 독립 엔터티, 중심 엔터티는 기본 엔터티에서 파생된 핵심 엔터티, 개념 엔터티는 추상적·관념적 단위이다.",
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
    "title": "다음 중 본질 식별자에 해당하는 예는?",
    "options": [
      "시스템이 부여한 일련번호",
      "자동 증가 숫자(IDENTITY)",
      "주민등록번호",
      "순차 시퀀스"
    ],
    "correctIndex": 2,
    "explanation": "주민등록번호는 업무상 이미 존재하는 값으로 본질 식별자에 해당한다.",
    "_source": "authored"
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
    "explanation": "관계차수는 두 엔터티 간 관계에 참여하는 인스턴스 수의 대응 관계(1:1, 1:M, M:N)를 의미하며, `|`(단일성), `o`(선택성), `<`(까마귀발, 다수) 기호 조합으로 표기된다. 예컨대 `[A] ─|─|─ [B]`는 1:1, `[A] ─|─< [B]`는 1:N, `[A] ─|─o< [B]`는 1:0·1·N 관계를 나타낸다.",
    "_source": "authored"
  },
  {
    "id": 10560,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 11,
    "title": "PLAYER 테이블에서 선수명과 팀명은 오름차순, 연봉은 내림차순으로 조회하는 SQL 로 옳은 것은?",
    "options": [
      "SELECT 선수명, 팀명, 연봉 FROM PLAYER ORDER BY 선수명 DESC, 팀명 DESC, 연봉 ASC;",
      "SELECT 선수명, 팀명, 연봉 FROM PLAYER ORDER BY 선수명 ASC, 팀명, 3 DESC;",
      "SELECT 선수명, 팀명, 연봉 FROM PLAYER ORDER BY 선수명 ASC, 팀명 ASC, 연봉;",
      "SELECT 선수명, 팀명, 연봉 FROM PLAYER ORDER BY 선수명, 팀명, DESC 연봉;"
    ],
    "correctIndex": 1,
    "explanation": "컬럼 번호 3(연봉) 을 DESC 로 지정하고 팀명은 기본 오름차순으로 처리한다.",
    "_source": "authored"
  },
  {
    "id": 10561,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 12,
    "title": "SQL 명령어 분류로 적절하지 않은 것은?",
    "options": [
      "DDL: CREATE, ALTER, DROP",
      "DML: INSERT, UPDATE, DELETE",
      "DCL: GRANT, REVOKE",
      "DML: RENAME"
    ],
    "correctIndex": 3,
    "explanation": "RENAME 은 DDL 에 해당한다.",
    "_source": "authored"
  },
  {
    "id": 10562,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 13,
    "title": "COMMIT 이전 DML 에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "본인 세션에서는 SELECT 로 변경 내용을 조회할 수 있다.",
      "ROLLBACK 으로 변경을 취소할 수 있다.",
      "DDL 수행 시 묵시적 COMMIT 이 발생한다.",
      "다른 유저가 커밋 이전의 변경 내용을 수정할 수 있다."
    ],
    "correctIndex": 3,
    "explanation": "고립성(Isolation) 에 따라 커밋 이전의 변경은 다른 세션이 수정하거나 조회할 수 없다.",
    "_source": "authored"
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
      "`SELECT * FROM EMP START WITH MANAGER_NO IS NULL CONNECT BY PRIOR EMP_NO = MANAGER_NO;`",
      "`SELECT * FROM EMP START WITH MANAGER_NO IS NULL CONNECT BY PRIOR MANAGER_NO = EMP_NO;`",
      "`SELECT * FROM EMP START WITH MANAGER_NO IS NULL CONNECT BY EMP_NO = MANAGER_NO;`",
      "`SELECT * FROM EMP START WITH MANAGER_NO IS NULL CONNECT BY PRIOR EMP_NO = PRIOR MANAGER_NO;`"
    ],
    "correctIndex": 0,
    "explanation": "`PRIOR` 는 \"이전(부모) 행의 컬럼\" 을 의미한다. `PRIOR EMP_NO = MANAGER_NO` 는 \"이전 행의 EMP_NO 가 다음 행의 MANAGER_NO 가 되도록\" 연결 — 즉 부모(EMP_NO) → 자식(MANAGER_NO 가 부모를 가리키는 행) 순방향 전개. ② 는 자식 → 부모 역방향, ③ 은 PRIOR 없어 모든 행이 단일 그룹으로 평가, ④ 는 PRIOR 가 양쪽에 있어 자기 참조라 무한루프 또는 0 건.",
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
    "title": "Oracle NULL 처리 함수의 역할이 올바르게 매칭된 조합은?",
    "options": [
      "A: COALESCE, B: NVL, C: NULLIF",
      "A: NVL, B: NULLIF, C: COALESCE",
      "A: NULLIF, B: COALESCE, C: NVL",
      "A: NVL, B: COALESCE, C: NULLIF"
    ],
    "correctIndex": 1,
    "explanation": "NVL(컬럼, 대체값) 은 컬럼이 NULL 일 때 대체값을 출력하므로 A 에 해당하고, NULLIF(a, b) 는 a 와 b 가 같으면 NULL 을 반환하므로 B 에 해당하며, COALESCE(v1, v2, ...) 는 인자들 중 NULL 이 아닌 첫 값을 반환하므로 C 에 해당한다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "A: 컬럼 값이 NULL 이면 B 를 출력\nB: 두 컬럼 값이 같으면 NULL\nC: 왼쪽부터 NULL 이 아닌 첫 값을 반환"
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
    "title": "아래 SQL 의 실행 결과로 옳은 것은?",
    "options": [
      "100, 999",
      "999, 100",
      "100, 200, 999",
      "999, 200, 100"
    ],
    "correctIndex": 1,
    "explanation": "CASE 식은 ID=999 일 때 0 을 반환해 999 가 가장 먼저 정렬되고, 이어서 ID=100 이 반환된다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
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
          ]
        ],
        "caption": "TBL 테이블"
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
    "explanation": "ON 절에는 비교식이 와야 하며, USING 절과 달리 컬럼명만 단독으로 지정할 수 없다.",
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
      "NOT EXISTS (SELECT 'X' FROM EMP B WHERE A.MGR_NO = B.EMP_NO AND B.SAL > 3000)"
    ],
    "correctIndex": 3,
    "explanation": "NOT EXISTS 는 매니저 연봉이 3,000 초과가 아닌 경우이므로 '이하' 의미와는 다르고 NULL 처리에서도 차이가 발생한다.",
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
        "caption": "가. EXISTS 조건 사용",
        "code": "SELECT A.EMP_NO, A.ENAME\nFROM   EMP A\nWHERE  EXISTS (SELECT 'X' FROM EMP B\n               WHERE  A.MGR_NO = B.EMP_NO\n                 AND  B.SAL <= 3000);"
      },
      {
        "type": "sql",
        "caption": "나. IN 조건 사용",
        "code": "SELECT A.EMP_NO, A.ENAME\nFROM   EMP A\nWHERE  A.MGR_NO IN (SELECT B.EMP_NO FROM EMP B\n                    WHERE  B.SAL <= 3000);"
      },
      {
        "type": "sql",
        "caption": "다. INNER JOIN 조건 사용",
        "code": "SELECT A.EMP_NO, A.ENAME\nFROM   EMP A\n       INNER JOIN EMP B\n         ON A.MGR_NO = B.EMP_NO\nWHERE  B.SAL <= 3000;"
      },
      {
        "type": "sql",
        "caption": "라. NOT EXISTS — 매니저 연봉이 3,000 초과가 아닌 경우 (의미 불일치)",
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
    "title": "아래 SQL 결과에 대한 설명으로 옳은 것은?",
    "options": [
      "T1 의 모든 행이 그대로 반환된다.",
      "NULL 이 포함된 비교에서는 모든 매칭이 UNKNOWN 이 되어 행이 제외된다.",
      "복수컬럼 IN 비교에서 NULL 이 나타나면 컴파일 단계에서 오류가 발생한다.",
      "T2 의 행 수만큼 카티션 곱 형태로 반환된다."
    ],
    "correctIndex": 1,
    "explanation": "복수컬럼 IN 비교에서도 NULL 비교는 일반 비교와 동일하게 UNKNOWN 으로 평가된다. T2 의 B 가 NULL 인 행과의 (A,B) IN 비교 결과는 모두 UNKNOWN 이 되어 WHERE 조건을 통과하지 못하므로 해당 행은 결과에서 제외된다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT A, B FROM T1 WHERE (A, B) IN (SELECT A, B FROM T2);"
      },
      {
        "type": "text",
        "content": "T2 의 B 값 중 일부가 NULL 이다."
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
    "title": "회원번호·상품별 집계와 회원번호별 소계, 전체 총계를 함께 산출하려 한다. GROUP BY 절로 적절한 것은?",
    "options": [
      "GROUP BY ROLLUP(회원번호, 상품)",
      "GROUP BY 회원번호, ROLLUP(상품)",
      "GROUP BY CUBE(회원번호, 상품)",
      "GROUP BY GROUPING SETS(회원번호, 상품)"
    ],
    "correctIndex": 1,
    "explanation": "회원번호는 고정 그룹이고 상품 차원에 ROLLUP 을 적용하여 상품별 및 전체 소계를 얻는다.",
    "_source": "authored"
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
    "explanation": "`ROLLUP(A, B, C)` 은 좌측부터 점진적으로 그룹을 줄여가며 (A, B, C), (A, B), (A), () 네 단계의 소계·총계를 만든다. 따라서 컬럼 순서를 바꾸면 만들어지는 집계 레벨이 달라진다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT 고객등급, 첫번째컬럼, 세번째컬럼, SUM(매출)\nFROM   판매\nGROUP BY ROLLUP(고객등급, 첫번째컬럼, 세번째컬럼);"
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
    "title": "아래 SQL 의 결과로 옳은 것은?",
    "options": [
      "데이터가 출력되지 않는다.",
      "0 이 한 행 반환된다.",
      "NULL 이 한 행 반환된다.",
      "오류 발생"
    ],
    "correctIndex": 0,
    "explanation": "GROUP BY 가 지정된 쿼리는 조건을 만족하는 그룹이 없으면 공집합을 반환한다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT COUNT(*)\nFROM   ...\nGROUP BY ID\nHAVING COUNT(*) > 3;"
      },
      {
        "type": "text",
        "content": "HAVING 조건을 만족하는 그룹이 없는 상태"
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
    "title": "회원별 총 주문 금액이 가장 큰 1건을 조회하는 SQL 로 옳은 것은?",
    "options": [
      "SELECT 회원번호, SUM(주문금액) FROM 주문 GROUP BY 회원번호 ORDER BY 2 DESC LIMIT 1;",
      "SELECT * FROM (SELECT 회원번호, SUM(주문금액) AS 총주문금액 FROM 주문 GROUP BY 회원번호 ORDER BY 2 DESC) WHERE ROWNUM = 1;",
      "SELECT 회원번호 FROM 주문 WHERE ROWNUM = 1 ORDER BY 주문금액 DESC;",
      "SELECT TOP 1 * FROM 주문 ORDER BY 주문금액 DESC;"
    ],
    "correctIndex": 1,
    "explanation": "Oracle 에서는 ORDER BY 가 적용된 인라인 뷰를 먼저 만든 뒤 외부 쿼리에서 ROWNUM = 1 로 한 건만 잘라야 '가장 큰 1건' 을 정확히 얻는다. ①은 표준 Oracle 에 LIMIT 가 없고, ③은 ROWNUM 이 ORDER BY 이전에 부여되어 잘못된 결과가 나오며, ④의 TOP 은 SQL Server 문법이고 GROUP BY 도 없다.",
    "_source": "authored"
  },
  {
    "id": 10573,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 24,
    "title": "아래 결과를 반환하는 윈도우 함수로 옳은 것은?",
    "options": [
      "LEAD(COL1, 1, 0) OVER(ORDER BY COL1)",
      "LAG(COL1, 1, NULL) OVER(ORDER BY COL1)",
      "LAG(COL1, 1, 0) OVER(ORDER BY COL1)",
      "FIRST_VALUE(COL1) OVER(ORDER BY COL1)"
    ],
    "correctIndex": 2,
    "explanation": "LAG 함수의 세 번째 인자로 기본값 0 을 지정하여 첫 행에 0 이 반환된다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "COL1",
          "LAG"
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
    "explanation": "고객별 매출 합계를 구하면 홍길동·이규혁 각 700, 이순신 550, 강감찬·이상화 각 350이 된다. RANK 함수는 동순위를 동일한 순위로 부여하되 다음 순위는 건너뛰므로 1·1·3·4·4가 된다.",
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
          "월",
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
            "300"
          ],
          [
            "003",
            "202201",
            "250"
          ],
          [
            "004",
            "202201",
            "300"
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
            "200"
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
            "250"
          ],
          [
            "003",
            "202203",
            "100"
          ],
          [
            "004",
            "202203",
            "200"
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
    "title": "아래 결과가 1, 1, 2 가 되는 순위 함수는?",
    "options": [
      "DENSE_RANK",
      "RANK",
      "ROW_NUMBER",
      "NTILE"
    ],
    "correctIndex": 0,
    "explanation": "DENSE_RANK 는 동순위에 동일 순위를 부여하되 다음 순위를 건너뛰지 않으므로 1, 1, 2 가 된다. RANK 는 동순위 후 다음 순위를 건너뛰어 1, 1, 3 이 되고, ROW_NUMBER 는 1, 2, 3, NTILE 은 그룹 번호를 반환하는 함수이다.",
    "_source": "authored"
  },
  {
    "id": 10576,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 27,
    "title": "사원이 없는 부서도 조회 결과에 포함하려면 어떤 조인을 사용해야 하는가?",
    "options": [
      "RIGHT OUTER",
      "LEFT OUTER",
      "INNER",
      "CROSS"
    ],
    "correctIndex": 0,
    "explanation": "부서(B) 를 기준으로 유지해야 하므로 B 쪽이 오른쪽에 있다면 RIGHT OUTER JOIN 이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT 부서명, COUNT(사원번호) AS 사원수\nFROM   EMP A ( ? ) JOIN DEPT B ON A.부서번호 = B.부서번호\nGROUP BY 부서명;"
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
    "explanation": "UPDATE 는 WHERE 조건 평가를 위한 SELECT 와 실제 UPDATE 권한이 모두 필요하다.",
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
    "explanation": "RESTRICT 옵션은 U3 가 권한을 이미 가진 상황에서 REVOKE 가 거부되므로 모든 사용자의 권한이 유지된다.",
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
    "explanation": "A 는 DEFAULT 9 가 지정되어 있으므로 생략해도 9 가 할당되고 PK 조건을 만족한다.",
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
    "explanation": "ROLLBACK 으로 UPDATE·DELETE 가 취소되어 VAL 은 (1, 2, 3) 이 되며 평균은 2 이다.",
    "_source": "authored",
    "references": [
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
    "title": "PRIMARY KEY 에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "값이 중복되지 않는다.",
      "NULL 값을 허용하지 않는다.",
      "테이블당 하나만 지정할 수 있다.",
      "중복을 허용하되 NULL 은 허용하지 않는다."
    ],
    "correctIndex": 3,
    "explanation": "PK 는 중복과 NULL 을 모두 허용하지 않는다.",
    "_source": "authored"
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
    "explanation": "각 윈도우 정의에 따른 계산 결과를 직접 산출하여 얻는다.",
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
    "explanation": "DISTINCT 결과 (1,A), (1,B) 의 2 건이므로 각 COUNT 는 2 이다.",
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
    "explanation": "C2 = (10, NULL, 20, 30) 일 때 `SUM(C2)` = 60, `COUNT(*)` = 4, `COUNT(C2)` = 3 (NULL 제외). AVG1 = 60/4 = 15, AVG2 = 60/3 = 20, AVG3 = `AVG(C2)` = 20 (AVG 는 NULL 자동 제외). 따라서 AVG2 와 AVG3 가 같다.",
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
    "explanation": "'S%' 는 SMITH 와 SCOTT 에 매칭되고, '%T%' 도 두 이름 모두에 매칭된다.",
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
    "title": "아래 네 SQL 중 결과가 다른 것은?",
    "options": [
      "SELECT COUNT(DISTINCT COL1) FROM T;",
      "SELECT DISTINCT COUNT(*) FROM T;",
      "SELECT COL1 FROM T GROUP BY COL1;",
      "SELECT DISTINCT COL1 FROM T;"
    ],
    "correctIndex": 1,
    "explanation": "①·③·④ 는 모두 컬럼 COL1 의 서로 다른 값 목록(중복 제거)을 반환하지만, ② SELECT DISTINCT COUNT(*) FROM T 는 그룹 함수가 단일 행 결과로 전체 행 수를 한 번 반환하므로 한 건의 집계값만 출력된다.",
    "_source": "authored"
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
    "explanation": "뒤에서 네 번째 문자부터 2 글자(6, 7) 를 반환한다.",
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
    "explanation": "공백을 포함하여 10 글자이다.",
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
      "`COL1 = 'F' OR COL1 = 'G' AND 금액 BETWEEN 2000 AND 50000`",
      "`(COL1 = 'F' OR COL1 = 'G') AND 금액 BETWEEN 2000 AND 50000`",
      "`COL1 IN ('F', 'G') OR 금액 BETWEEN 2000 AND 50000`",
      "`COL1 = 'F' AND COL1 = 'G' AND 금액 BETWEEN 2000 AND 50000`"
    ],
    "correctIndex": 1,
    "explanation": "조건 우선순위는 AND 가 OR 보다 먼저 평가되므로 괄호 없이 `OR ... AND ...` 를 쓰면 의도와 다르게 결합된다. '등급 F 또는 G' 부분에 괄호를 묶고 금액 BETWEEN 조건을 AND 로 결합한 ②가 요구사항을 정확히 표현한다.",
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
    "explanation": "Oracle 의 기본 NULL 정렬 규칙은 ASC 정렬 시 NULL 을 마지막에, DESC 정렬 시 NULL 을 가장 먼저 배치한다(NULLS LAST / NULLS FIRST 가 각각 기본). NULLS FIRST·NULLS LAST 옵션으로 변경할 수 있다.",
    "_source": "authored"
  },
  {
    "id": 10591,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 42,
    "title": "SQL 집합 연산자 중 교집합을 반환하는 것은?",
    "options": [
      "UNION ALL",
      "UNION",
      "INTERSECT",
      "EXCEPT"
    ],
    "correctIndex": 2,
    "explanation": "INTERSECT 는 두 결과 집합의 공통 행만 반환하는 교집합 연산자이다. UNION 은 합집합(중복 제거), UNION ALL 은 합집합(중복 유지), EXCEPT(MINUS) 는 차집합이다.",
    "_source": "authored"
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
    "explanation": "`GROUP BY 부서` 로 부서 단위로 행을 묶고 그룹별 `MAX(연봉)` 을 구하므로 부서별 최고 연봉을 조회하는 쿼리이다. 평균은 `AVG`, 합계는 `SUM`, 개수는 `COUNT` 이며 `GROUP BY` 가 없으면 전체 단일 값이 된다.",
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
    "explanation": "`MERGE` 는 ON 조건 일치 행에 `WHEN MATCHED` 의 `UPDATE`, 미일치 행에 `WHEN NOT MATCHED` 의 `INSERT` 를 적용한다. TBL2 의 ID=1,2 는 TBL1 과 매칭되어 COL1 이 C, D 로 변경되고, ID=3,4 는 신규로 INSERT 되므로 최종 TBL1 은 4행이 된다.",
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
    "explanation": "가는 컬럼 개수 불일치, 나는 DEGREE 길이 초과, 다는 NOT NULL 위반으로 실패한다.",
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
    "title": "다른 테이블에서 파생된 테이블로 물리적 데이터를 저장하지 않고 논리적으로만 존재하는 객체는?",
    "options": [
      "VIEW (뷰)",
      "INDEX (인덱스)",
      "SYNONYM (동의어)",
      "SEQUENCE (시퀀스)"
    ],
    "correctIndex": 0,
    "explanation": "VIEW 는 하나 이상의 기본 테이블에서 파생된 가상 테이블로, 정의만 데이터 사전에 저장될 뿐 실제 데이터를 저장하지 않는다. INDEX 는 검색 성능을 위한 물리 객체, SYNONYM 은 객체에 대한 별칭, SEQUENCE 는 순번 생성기이다.",
    "_source": "authored"
  },
  {
    "id": 10596,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 47,
    "title": "아래 SQL 의 결과를 작성하시오.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 2,
    "explanation": "C 그룹이 3건으로 유일하게 HAVING COUNT(*) > 2 를 만족한다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
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
            "D",
            "8"
          ]
        ],
        "caption": "TAB1 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT COUNT(*) FROM TAB1 GROUP BY ID HAVING COUNT(*) > 2;"
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
    "title": "아래 빈칸에 들어갈 조건식을 작성하시오.",
    "options": [
      "= NULL",
      "!= NULL",
      "IS NOT NULL",
      "IS NULL"
    ],
    "correctIndex": 3,
    "explanation": "NULL 은 어떤 값과도 = / != 비교 시 UNKNOWN 으로 평가되어 결과에서 제외되므로 NULL 여부는 반드시 IS NULL / IS NOT NULL 로 판별해야 한다. COL = 'A' 또는 COL 이 NULL 인 행을 모두 포함하려면 `OR COL IS NULL` 이 옳다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT * FROM T\nWHERE  COL = 'A'\nOR     COL ( ? );"
      },
      {
        "type": "text",
        "content": "COL 이 NULL 인 행도 함께 포함하고 싶다."
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
    "title": "소계와 총계를 포함한 집계를 생성하는 GROUP BY 확장 연산자는?",
    "options": [
      "CUBE",
      "ROLLUP",
      "GROUPING SETS",
      "PIVOT"
    ],
    "correctIndex": 1,
    "explanation": "ROLLUP 은 GROUP BY 컬럼을 좌측부터 점진적으로 줄여가며 소계와 총계까지 함께 산출하는 확장 연산자이다. CUBE 는 모든 차원 조합의 소계를, GROUPING SETS 는 지정한 그룹들만 산출하며, PIVOT 은 행을 열로 전환하는 연산이다.",
    "_source": "authored"
  },
  {
    "id": 10599,
    "examSetId": "round-49",
    "examLabel": "제49회 (2023년 6월)",
    "round": 49,
    "subject": "2과목",
    "number": 50,
    "title": "아래 NTILE(3) 결과의 빈칸을 채우시오. (총 7건)",
    "options": [
      "ㄱ = 1, ㄴ = 3",
      "ㄱ = 1, ㄴ = 2",
      "ㄱ = 2, ㄴ = 3",
      "ㄱ = 3, ㄴ = 2"
    ],
    "correctIndex": 0,
    "explanation": "NTILE(3) 은 7건을 세 그룹으로 나눌 때 앞 그룹에 한 건을 더 배정해 3, 2, 2 로 구성한다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "NTILE",
          "COUNT(*)"
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
