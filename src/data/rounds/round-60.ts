// Auto-generated from PDF + blog + scripts/authored/round-60.json
// 제60회 — 2026년 3월 · 50문항
// ⚠ 직접 편집 금지. 출처별 데이터를 고친 뒤 'node scripts/build-quiz-bank.mjs' 재실행.
import type { QuizQuestion } from '../quizBank';

export const ROUND_60: QuizQuestion[] = [
  {
    "id": 10000,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "1과목",
    "number": 1,
    "title": "다음 설명에 해당하는 엔터티 분류는?",
    "options": [
      "행위 엔터티",
      "개념 엔터티",
      "중심 엔터티",
      "기본 엔터티"
    ],
    "correctIndex": 0,
    "explanation": "행위 엔터티는 업무 수행 과정에서 이벤트가 지속적으로 발생하여 데이터가 자주 변경·축적되는 엔터티이다. 주문, 청구, 납부처럼 업무 행위의 결과로 데이터가 쌓이는 대상이 이에 해당한다. 개념·기본 엔터티는 비교적 정적이며 행위 엔터티의 모태가 된다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "해당 엔터티는 업무 수행 과정에서 지속적으로 이벤트가 쌓이므로 데이터가 자주 변경되고 저장되는 양 또한 매우 많다."
      }
    ]
  },
  {
    "id": 10001,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "1과목",
    "number": 2,
    "title": "아래 [직원] 엔터티의 속성 중 성격이 나머지와 다른 것은?",
    "options": [
      "연령",
      "사번",
      "생년월일",
      "부서코드"
    ],
    "correctIndex": 0,
    "explanation": "사번·생년월일·부서코드는 업무에서 직접 관리되어 입력되는 기본 속성이다. 반면 연령은 생년월일로부터 계산되어 도출되는 파생 속성에 해당하므로 성격이 다르다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "직원 엔터티",
        "headers": [
          "속성명",
          "예시 값"
        ],
        "rows": [
          [
            "사번",
            "E1001"
          ],
          [
            "생년월일",
            "1990-05-14"
          ],
          [
            "연령",
            "35"
          ],
          [
            "부서코드",
            "D10"
          ]
        ]
      }
    ]
  },
  {
    "id": 10002,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "1과목",
    "number": 3,
    "title": "엔터티·인스턴스·속성에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "엔터티는 두 개 이상의 인스턴스를 가진다.",
      "하나의 속성에는 두 개 이상의 값이 들어갈 수 있다.",
      "인스턴스는 두 가지의 속성값을 가진다.",
      "하나의 엔터티는 두 개 이상의 속성을 가진다."
    ],
    "correctIndex": 2,
    "explanation": "인스턴스가 가지는 속성 값의 수는 엔터티가 설계한 속성의 개수에 따라 달라진다. 특정 숫자로 고정되지 않는다.",
    "_source": "authored"
  },
  {
    "id": 10003,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "1과목",
    "number": 4,
    "title": "아래 ERD에 포함된 각 엔터티의 성격 분류에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "서비스는 기본 엔터티에 해당한다.",
      "서비스이용은 개념 엔터티에 해당한다.",
      "청구는 행위 엔터티에 해당한다.",
      "납부는 행위 엔터티에 해당한다."
    ],
    "correctIndex": 1,
    "explanation": "서비스이용은 고객이 서비스를 실제로 사용한 사실을 기록하는 행위 엔터티이므로, 개념 엔터티로 분류하는 것은 옳지 않다.",
    "_source": "authored",
    "references": [
      {
        "type": "erd",
        "caption": "서비스·서비스이용·청구·납부 ERD",
        "mermaid": "erDiagram\n    서비스 ||--o{ 서비스이용 : \"이용\"\n    청구 ||--o{ 서비스이용 : \"기준\"\n    청구 ||--o{ 납부 : \"수행\""
      }
    ]
  },
  {
    "id": 10004,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "1과목",
    "number": 5,
    "title": "다음 SQL의 수행 목적을 가장 적절히 기술한 것은?",
    "options": [
      "한 주문에 10개 이상인 고객 목록",
      "누적 주문 수량이 10개 이상인 고객 목록",
      "주문 횟수가 10회 이상인 고객 목록",
      "10개 이상의 서로 다른 상품을 구매한 고객 목록"
    ],
    "correctIndex": 0,
    "explanation": "GROUP BY 고객ID, 주문번호로 묶고 HAVING SUM(수량) >= 10을 적용하므로 '한 주문 단위(주문번호)'에서 수량 합계가 10 이상인 고객을 집계한다. 즉 한 번의 주문에서 10개 이상을 산 고객을 찾는 SQL이다. ②는 고객별 누적이려면 GROUP BY 고객ID 단독이어야 하고, ③은 COUNT(주문번호) 기반이어야 하며, ④는 COUNT(DISTINCT 상품) 조건이어야 한다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT 고객ID, 주문번호, SUM(수량) AS 주문수량\nFROM   주문\nGROUP BY 고객ID, 주문번호\nHAVING SUM(수량) >= 10;"
      }
    ]
  },
  {
    "id": 10005,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "1과목",
    "number": 6,
    "title": "비식별자 관계에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "부모의 기본키를 자식의 일반 속성으로 상속한다.",
      "부모 엔터티의 생성과 자식 엔터티의 생성 시점이 분리될 수 있다.",
      "주식별자와 식별자가 같다.",
      "자식 엔터티에서 독립된 주식별자를 정의할 수 있다."
    ],
    "correctIndex": 2,
    "explanation": "비식별자 관계는 부모의 기본키를 자식의 일반 속성(외래키)으로만 상속하므로 자식은 별도의 주식별자를 정의한다. 따라서 부모 식별자가 곧 자식 주식별자가 되는 식별자 관계와 달리 '주식별자와 식별자가 같다'는 설명은 옳지 않다. ③은 식별자 관계의 특성에 가까우며, 비식별자 관계와는 구분된다.",
    "_source": "authored"
  },
  {
    "id": 10006,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "1과목",
    "number": 7,
    "title": "피터 첸(Peter Chen) ERD 표기법에서 '관계(Relationship)'를 나타내는 도형은?",
    "options": [
      "□",
      "△",
      "◇",
      "○"
    ],
    "correctIndex": 2,
    "explanation": "피터 첸 표기법은 엔터티를 사각형(□), 속성을 타원(○), 관계를 마름모(◇)로 표현하며, 주식별자 속성에는 밑줄을 긋는다. 관계는 두 엔터티 사이에 마름모로 배치되어 엔터티 간 연관을 명시한다.",
    "_source": "authored"
  },
  {
    "id": 10007,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "1과목",
    "number": 8,
    "title": "주식별자를 구성하는 속성 중 한 개가 삭제되었을 때 인스턴스가 구분되지 않는다. 이러한 주식별자가 충족해야 하는 특성은?",
    "options": [
      "최소성",
      "대표성",
      "불변성",
      "고립성"
    ],
    "correctIndex": 0,
    "explanation": "최소성은 주식별자를 구성하는 속성의 수가 유일성을 보장하는 최소한이어야 한다는 특성이다.",
    "_source": "authored"
  },
  {
    "id": 10008,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "1과목",
    "number": 9,
    "title": "다음 중 주식별자 선정과 가장 관련이 적은 정규화는?",
    "options": [
      "1정규화",
      "2정규화",
      "3정규화",
      "BCNF"
    ],
    "correctIndex": 2,
    "explanation": "1·2정규화와 BCNF는 모두 키(결정자)를 기준으로 수행하지만, 3정규화는 비주식별자 간의 이행적 종속을 제거하는 단계로 주식별자 자체와의 관련성이 가장 낮다.",
    "_source": "authored"
  },
  {
    "id": 10009,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "1과목",
    "number": 10,
    "title": "인조 식별자와 본질 식별자에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "본질 식별자는 업무 수행 과정에서 쉽게 파악된다.",
      "본질 식별자는 어떠한 업무 행위 없이도 부여될 수 있다.",
      "인조 식별자는 본질 식별자가 존재함에도 관리 편의를 위해 별도로 부여될 수 있다.",
      "본질 식별자는 업무 규칙 변화에 따라 값이 변경될 수 있다."
    ],
    "correctIndex": 1,
    "explanation": "본질 식별자는 업무 행위를 통해 그 값이 결정되는 속성이므로, 업무 행위가 전혀 없는 상태에서 부여되는 값은 본질 식별자로 적절하지 않다. 업무 행위 없이 부여되는 것은 인조 식별자의 특성이다.",
    "_source": "authored"
  },
  {
    "id": 10010,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 11,
    "title": "다음 계층형 질의에서 사용하는 가상 컬럼 및 연산자 중, 전제 조건 없이 단독으로 동작하지 않거나 특정 옵션이 선행되어야 유효한 값을 반환하는 것은 무엇인가?",
    "options": [
      "가",
      "나, 다",
      "나, 다, 라",
      "가, 나, 다, 라"
    ],
    "correctIndex": 3,
    "explanation": "LEVEL은 계층형 질의에서 단독으로 사용 가능하지만 CONNECT BY가 선행되어야 의미를 갖는다. ISLEAF·ISCYCLE은 CONNECT BY NOCYCLE 옵션 등 특정 조건에서만 유효한 값을 반환하며, CONNECT_BY_ROOT 또한 계층형 질의의 컨텍스트가 전제되어야 동작한다. 모두 단독으로는 의미 있는 결과를 내지 못하므로 정답은 '가, 나, 다, 라'이다.",
    "_source": "authored",
    "references": [
      {
        "type": "text",
        "content": "* 가. LEVEL\n* 나. ISLEAF\n* 다. ISCYCLE\n* 라. CONNECT_BY_ROOT"
      }
    ]
  },
  {
    "id": 10011,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 12,
    "title": "아래 SQL의 결과로 옳은 것은? (단, MGR 컬럼에는 NULL 값이 존재한다.)",
    "options": [
      "EMP 테이블의 모든 행",
      "매니저로 지정되지 않은 직원의 행",
      "공집합",
      "오류 발생"
    ],
    "correctIndex": 2,
    "explanation": "EMP 테이블의 MGR 컬럼에 KING·JONES 두 행의 값이 NULL로 존재한다. NOT IN 비교는 내부적으로 모든 값에 대한 비교를 AND로 묶는데, 어떤 값과 NULL을 비교하면 UNKNOWN으로 평가되므로 전체 조건이 어떤 행에서도 참이 되지 못한다. 따라서 결과는 공집합이 된다. 만약 MGR이 모두 NOT NULL이라면 매니저로 지정된 적이 없는 직원의 행이 반환될 수 있지만, NULL이 한 건이라도 존재하면 그 가능성은 차단된다.",
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
            "7369",
            "SMITH",
            "7902"
          ],
          [
            "7499",
            "ALLEN",
            "7698"
          ],
          [
            "7839",
            "KING",
            "NULL"
          ],
          [
            "7902",
            "FORD",
            "7566"
          ],
          [
            "7566",
            "JONES",
            "NULL"
          ]
        ],
        "caption": "EMP 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT *\nFROM   EMP\nWHERE  EMPNO NOT IN (SELECT MGR FROM EMP);"
      }
    ]
  },
  {
    "id": 10012,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 13,
    "title": "아래 결과를 얻기 위해 빈칸에 들어갈 SQL로 가장 적절한 것은?",
    "options": [
      "`GROUP BY 부서 HAVING 직급 IN ('사원','대리','팀장','부장')`",
      "`PIVOT (SUM(연봉) FOR 직급 IN ('사원','대리','팀장','부장'))`",
      "`WHERE 직급 LIKE '%사원%' OR 직급 LIKE '%부장%'`",
      "`UNPIVOT (연봉 FOR 직급 IN (사원, 대리, 팀장, 부장))`"
    ],
    "correctIndex": 1,
    "explanation": "결과 표는 부서를 행으로, 직급(사원·대리·팀장·부장)을 열로 가지는 가로형 표이다. 직급 컬럼의 값을 컬럼명으로 펼치고 연봉을 집계하는 PIVOT 절이 정확히 부합한다. ① GROUP BY는 직급별 집계를 하나의 행으로 만들지 못하고, ③ LIKE는 행 필터에 불과하며, ④ UNPIVOT은 가로 → 세로 변환이라 방향이 반대다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "부서",
          "사원",
          "대리",
          "팀장",
          "부장"
        ],
        "rows": [
          [
            "인사팀",
            "3,500",
            "4,500",
            "6,000",
            "8,000"
          ],
          [
            "IT팀",
            "4,000",
            "5,000",
            "7,000",
            "9,000"
          ],
          [
            "행정팀",
            "3,200",
            "4,200",
            "5,800",
            "7,500"
          ]
        ],
        "caption": "급여 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT *\nFROM   급여\n(  ?  );"
      }
    ]
  },
  {
    "id": 10013,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 14,
    "title": "아래 데이터와 SQL의 결과로 올바른 것은?",
    "options": [
      "1000 1000 1000",
      "1000 2000 3000",
      "3000 2000 1000",
      "3000 3000 3000"
    ],
    "correctIndex": 0,
    "explanation": "ORDER BY SAL 오름차순 정렬 후 각 행까지의 누적 윈도우에서 FIRST_VALUE는 항상 최소값인 1000을 반환한다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "SAL"
        ],
        "rows": [
          [
            "1000"
          ],
          [
            "2000"
          ],
          [
            "3000"
          ]
        ],
        "caption": "T 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT SAL,\n       FIRST_VALUE(SAL) OVER (ORDER BY SAL\n                              ROWS BETWEEN UNBOUNDED PRECEDING\n                                       AND CURRENT ROW) AS MIN_SAL\nFROM   T;"
      }
    ]
  },
  {
    "id": 10014,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 15,
    "title": "아래 SQL과 동일한 의미를 가지는 조건식은?",
    "options": [
      "`(사번 = 10005) OR (회원번호 = 2003)`",
      "`(사번 = 10005) AND (회원번호 = 2003)`",
      "`(사번 = 10005) OR (회원번호 <> 2003)`",
      "`NOT ((사번 = 10005) AND (회원번호 = 2003))`"
    ],
    "correctIndex": 1,
    "explanation": "튜플 IN 절 `(A, B) IN ((x, y))` 는 `(A = x AND B = y)` 와 동등하다. 두 컬럼이 동시에 매칭되어야 한다는 뜻이므로 OR가 아닌 AND이다. 위 데이터에 원 SQL을 적용하면 (10005, 2003) 행 두 건만 통과한다. 보기 ① OR로 바꾸면 사번이 10005인 모든 행과 회원번호가 2003인 모든 행이 통과하여 4건이 나오므로 결과가 달라진다. 보기 ④ NOT은 정반대 결과(나머지 행)를 반환한다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "사번",
          "회원번호"
        ],
        "rows": [
          [
            "10005",
            "2003"
          ],
          [
            "10005",
            "1500"
          ],
          [
            "20007",
            "2003"
          ],
          [
            "30001",
            "2003"
          ],
          [
            "10005",
            "2003"
          ]
        ],
        "caption": "T 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT *\nFROM   T\nWHERE  (사번, 회원번호) IN ((10005, 2003));"
      }
    ]
  },
  {
    "id": 10015,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 16,
    "title": "아래 8건의 데이터에 대해 NTILE 함수가 반환하는 값으로 가장 옳은 것은?",
    "options": [
      "1 1 1 2 2 2 3 3",
      "1 1 2 2 3 3 3 3",
      "1 2 3 1 2 3 1 2",
      "3 3 3 2 2 2 1 1"
    ],
    "correctIndex": 0,
    "explanation": "8건을 3그룹으로 나누면 앞쪽 그룹부터 3, 3, 2건으로 배정된다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "EMPNO"
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
          ],
          [
            "6"
          ],
          [
            "7"
          ],
          [
            "8"
          ]
        ],
        "caption": "EMP 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT EMPNO,\n       NTILE(3) OVER (ORDER BY EMPNO) AS GRP\nFROM   EMP;"
      }
    ]
  },
  {
    "id": 10016,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 17,
    "title": "아래 두 테이블을 조인하여 양쪽의 모든 행을 포함하되 NULL 값은 0으로 치환한 결과를 얻으려 한다. 가장 적절한 SQL은?",
    "options": [
      "`SELECT NVL(T1.VAL,0), NVL(T2.VAL,0) FROM T1 CROSS JOIN T2;`",
      "`SELECT NVL(T1.VAL,0), NVL(T2.VAL,0) FROM T1 FULL OUTER JOIN T2 ON T1.ID = T2.ID;`",
      "`SELECT T1.VAL, T2.VAL FROM T1 FULL OUTER JOIN T2 ON T1.ID = T2.ID;`",
      "`SELECT T1.VAL, T2.VAL FROM T1 UNION T2;`"
    ],
    "correctIndex": 1,
    "explanation": "양쪽 테이블의 모든 행을 빠짐없이 보존하려면 FULL OUTER JOIN을 사용해야 한다. 매칭되지 않은 행은 NULL로 채워지며, NVL 함수를 통해 0으로 치환할 수 있다. ① CROSS JOIN은 양쪽 모든 행의 조합을 생성하므로 결과가 폭증하고, ③은 NVL이 빠져 NULL이 그대로 노출되며, ④ UNION은 두 결과를 위아래로 합치는 연산이라 이 문제의 의도와 맞지 않는다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T1",
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
            "150"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "T2",
        "headers": [
          "ID",
          "VAL"
        ],
        "rows": [
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
    "id": 10017,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 18,
    "title": "사용자 R1이 테이블을 생성하고 접속을 종료한 뒤, 다른 사용자 R2가 접속하여 R1의 테이블을 조회하려 하자 오류가 발생하였다. 해결 방안으로 가장 적절한 것은?",
    "options": [
      "R2가 R1의 계정으로 재로그인하여 조회한다.",
      "GRANT로 SELECT 권한을 부여한다.",
      "R2 계정에서 SYNONYM만 생성하면 자동으로 접근이 허용된다.",
      "R2가 관리자 권한으로 테이블을 강제 복제한다."
    ],
    "correctIndex": 1,
    "explanation": "다른 사용자의 객체에 접근하려면 객체 소유자가 GRANT 명령으로 SELECT 권한을 부여해야 한다. ①은 보안상 부적절하고, ③ SYNONYM은 객체에 대한 별칭일 뿐 권한을 자동 부여하지 않으며, ④ 강제 복제는 정상적인 권한 관리 방식이 아니다.",
    "_source": "authored"
  },
  {
    "id": 10018,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 19,
    "title": "다음 SQL의 실행 결과로 옳은 것은?",
    "options": [
      "2026/02/25",
      "25/02/2026",
      "02/25/2026",
      "2026-02-25"
    ],
    "correctIndex": 1,
    "explanation": "정규표현식으로 연/월/일을 캡처하여 일/월/연 순으로 재배열한다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT REGEXP_REPLACE(\n         '2026/02/25',\n         '([0-9]{4})/([0-9]{2})/([0-9]{2})',\n         '\\3/\\2/\\1'\n       )\nFROM DUAL;"
      }
    ]
  },
  {
    "id": 10019,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 20,
    "title": "아래 데이터에 대한 SQL의 결과로 옳은 것은?",
    "options": [
      "4, 23",
      "null, 23",
      "4, null",
      "0, 0"
    ],
    "correctIndex": 0,
    "explanation": "NULL 값은 SUM 집계에서 자동으로 제외되며, ㉠은 SAL=4인 행만 합산하여 4, ㉡은 4+9+10 = 23을 반환한다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "SAL"
        ],
        "rows": [
          [
            "4"
          ],
          [
            "NULL"
          ],
          [
            "NULL"
          ],
          [
            "9"
          ],
          [
            "10"
          ]
        ],
        "caption": "T 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT SUM( CASE WHEN SAL = 4 THEN SAL END ),   -- ㉠\n       SUM( SAL )                               -- ㉡\nFROM   T;"
      }
    ]
  },
  {
    "id": 10020,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 21,
    "title": "아래 T 테이블에 대해 SQL 들 중 결과 행 수가 나머지와 다른 하나는?",
    "options": [
      "`SELECT * FROM T WHERE ROWNUM IN (1, 2);`",
      "`SELECT * FROM T WHERE ROWNUM < 1;`",
      "`SELECT * FROM T WHERE ROWNUM > 1;`",
      "`SELECT * FROM T WHERE ROWNUM = 2;`"
    ],
    "correctIndex": 0,
    "explanation": "Oracle 의 `ROWNUM` 은 `WHERE` 조건이 통과된 행에 대해서만 순차적으로 부여된다. ① 은 첫 행에 ROWNUM=1, 두 번째 행에 ROWNUM=2 가 부여되어 모두 조건을 만족 → 2 건 반환. ② `ROWNUM < 1` 은 어떤 행도 만족 못 함 → 0 건. ③ `ROWNUM > 1` 은 첫 행이 ROWNUM=1 로 탈락한 뒤 다음 행에도 계속 1 이 부여되어 0 건. ④ `ROWNUM = 2` 도 ROWNUM 값이 2 로 올라가지 못해 0 건. 결과가 다른 것은 ①.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T 테이블",
        "headers": [
          "행 순서",
          "COL"
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
      }
    ]
  },
  {
    "id": 10021,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 22,
    "title": "아래 SQL에서 `WHERE 1 = 2` 조건에 의해 어떤 데이터도 선택되지 않았을 때, 반환 값이 NULL이 아닌 집계 함수는?",
    "options": [
      "`SUM(SAL)`",
      "`AVG(SAL)`",
      "`MIN(SAL)`",
      "`COUNT(*)`"
    ],
    "correctIndex": 3,
    "explanation": "공집합에 대한 집계 함수 중 COUNT(*)만 0을 반환하고, SUM·AVG·MIN·MAX는 모두 NULL을 반환한다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT SUM(SAL),\n       AVG(SAL),\n       MIN(SAL),\n       COUNT(*)\nFROM   EMP\nWHERE  1 = 2;"
      }
    ]
  },
  {
    "id": 10022,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 23,
    "title": "아래 네 개의 SQL 중 결과가 나머지와 다른 하나는? (A, B 테이블은 동일하며 B.FLG 값은 일부 행에만 'Y'이다.)",
    "options": [
      "`SELECT * FROM A, B WHERE A.ID = B.ID(+) AND B.FLG(+) = 'Y';`",
      "`SELECT * FROM A LEFT OUTER JOIN B ON (A.ID = B.ID) WHERE B.FLG = 'Y';`",
      "`SELECT * FROM A LEFT OUTER JOIN B ON (A.ID = B.ID AND B.FLG = 'Y');`",
      "`SELECT * FROM A LEFT OUTER JOIN (SELECT * FROM B WHERE FLG = 'Y') B ON A.ID = B.ID;`"
    ],
    "correctIndex": 1,
    "explanation": "①·③·④는 B에 대한 FLG 조건이 조인 단계(아우터 조인의 ON 절 또는 인라인 뷰 내부)에서 처리되어 매칭되지 않은 A의 행이 NULL로 보존된다. 반면 ②는 조인 후 WHERE 절에서 B.FLG = 'Y'를 적용하므로 NULL 값이 제거되어 내부 조인과 같은 결과가 된다. 따라서 ②만 결과가 다르다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "A",
        "headers": [
          "ID",
          "NAME"
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
            "3",
            "다"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "B",
        "headers": [
          "ID",
          "VAL",
          "FLG"
        ],
        "rows": [
          [
            "2",
            "x",
            "Y"
          ],
          [
            "3",
            "y",
            "N"
          ]
        ]
      }
    ]
  },
  {
    "id": 10023,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 24,
    "title": "아래 결과를 출력하기 위해 가장 적절한 SQL은?",
    "options": [
      "`SELECT 지역, SUM(CASE WHEN 월='1월' THEN 매출 END) FROM 매출 GROUP BY 지역;`",
      "`SELECT * FROM 매출 UNPIVOT (매출 FOR 월 IN ('1월','2월','3월','4월'));`",
      "`SELECT * FROM 매출 PIVOT (SUM(매출) FOR 월 IN ('1월' AS \"1월\", '2월' AS \"2월\", '3월' AS \"3월\", '4월' AS \"4월\"));`",
      "`SELECT 지역, AVG(매출) FROM 매출 GROUP BY CUBE(지역, 월);`"
    ],
    "correctIndex": 2,
    "explanation": "결과는 지역을 행으로, 1월~4월을 열로 가지는 가로형 매출표이다. 월 컬럼을 열로 펼치면서 매출을 SUM 집계하는 PIVOT 절이 정확히 부합한다. ① CASE+GROUP BY는 단일 컬럼만 펼쳐 1월 외의 컬럼이 누락되고, ② UNPIVOT은 가로 → 세로 변환으로 방향이 반대이며, ④ CUBE는 소계·총계 행이 추가되어 결과 형태가 달라진다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "원본 매출 테이블",
        "headers": [
          "지역",
          "월",
          "매출"
        ],
        "rows": [
          [
            "서울",
            "1월",
            "12,000"
          ],
          [
            "서울",
            "2월",
            "13,500"
          ],
          [
            "서울",
            "3월",
            "14,200"
          ],
          [
            "서울",
            "4월",
            "15,000"
          ],
          [
            "부산",
            "1월",
            "8,500"
          ],
          [
            "부산",
            "2월",
            "9,200"
          ],
          [
            "부산",
            "3월",
            "10,100"
          ],
          [
            "부산",
            "4월",
            "11,000"
          ],
          [
            "대구",
            "1월",
            "6,800"
          ],
          [
            "대구",
            "2월",
            "7,400"
          ],
          [
            "대구",
            "3월",
            "8,000"
          ],
          [
            "대구",
            "4월",
            "8,600"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "기대 결과 (PIVOT 후)",
        "headers": [
          "지역",
          "1월",
          "2월",
          "3월",
          "4월"
        ],
        "rows": [
          [
            "서울",
            "12,000",
            "13,500",
            "14,200",
            "15,000"
          ],
          [
            "부산",
            "8,500",
            "9,200",
            "10,100",
            "11,000"
          ],
          [
            "대구",
            "6,800",
            "7,400",
            "8,000",
            "8,600"
          ]
        ]
      }
    ]
  },
  {
    "id": 10024,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 25,
    "title": "아래 SQL이 오류 없이 실행되기 위해 T2.COL2가 가져야 할 제약 조건은?",
    "options": [
      "UNIQUE",
      "NOT NULL",
      "FOREIGN KEY",
      "CHECK"
    ],
    "correctIndex": 0,
    "explanation": "외부 쿼리가 '=' 단일 행 비교를 사용하므로 서브쿼리 (SELECT COL2 FROM T2 WHERE A='A') 가 반드시 0행 또는 1행만 반환해야 한다. 만약 T2.A='A' 인 행이 둘 이상이면 'ORA-01427: single-row subquery returns more than one row' 같은 오류가 난다. 이를 데이터 차원에서 보장하는 가장 적절한 제약은 T2.COL2 의 UNIQUE 이며, 아래 예시 데이터처럼 A='A' 두 행이 존재할 때 COL2 가 UNIQUE 라면 두 COL2 값이 다르더라도 서로 같은 값이 동시에 들어올 수 없게 되고, 실제 출제 의도는 서브쿼리 결과의 단일성을 강제하는 컬럼 제약 선택지에서 UNIQUE 가 가장 직접적인 답이 된다. NOT NULL·FOREIGN KEY·CHECK 는 단일성을 보장하지 못한다. 정답은 ①.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "T1 테이블",
        "headers": [
          "COL2"
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
          ]
        ]
      },
      {
        "type": "table",
        "caption": "T2 테이블 (A='A' 행이 둘 이상이면 단일 행 서브쿼리 오류)",
        "headers": [
          "A",
          "COL2"
        ],
        "rows": [
          [
            "A",
            "10"
          ],
          [
            "A",
            "20"
          ],
          [
            "B",
            "30"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT COL2\nFROM   T1\nWHERE  COL2 = (SELECT COL2\n               FROM   T2\n               WHERE  A = 'A');"
      }
    ]
  },
  {
    "id": 10025,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 26,
    "title": "아래 쿼리의 윈도우 절과 동등한 의미를 가진 절은?",
    "options": [
      "`ROWS UNBOUNDED PRECEDING` (= ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)",
      "ROWS BETWEEN UNBOUNDED PRECEDING AND 1 PRECEDING (= 현재 행 직전까지의 누적합)",
      "RANGE UNBOUNDED PRECEDING (= RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)",
      "RANGE BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING"
    ],
    "correctIndex": 0,
    "explanation": "ROWS UNBOUNDED PRECEDING은 윈도우 시작점만 명시한 축약형으로, 종료점이 생략되면 기본값인 CURRENT ROW가 적용된다. 즉 ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW와 동등하다. ②는 종료점이 1 PRECEDING이라 누적합 의미가 다르고, ③·④는 RANGE 모드라 동일 정렬 키를 가진 행을 묶어 처리하므로 ROWS 기반과 결과가 다를 수 있다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT SAL,\n       SUM(SAL) OVER (ORDER BY SAL ROWS UNBOUNDED PRECEDING) AS 누적합계\nFROM   EMP;"
      }
    ]
  },
  {
    "id": 10026,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 27,
    "title": "트랜잭션의 고립성(Isolation)에 대한 설명으로 가장 옳은 것은?",
    "options": [
      "다른 트랜잭션으로부터 영향을 받지 않는다.",
      "트랜잭션 전후 데이터의 정합성이 유지된다.",
      "전체가 반영되거나 전혀 반영되지 않는다.",
      "커밋된 결과는 시스템 장애에도 보존된다."
    ],
    "correctIndex": 0,
    "explanation": "고립성은 실행 중인 트랜잭션의 중간 결과가 다른 트랜잭션의 영향을 받지 않음을 보장한다.",
    "_source": "authored"
  },
  {
    "id": 10027,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 28,
    "title": "기본키(Primary Key) 컬럼이 반드시 만족해야 하는 제약 조건의 조합은?",
    "options": [
      "NULL 허용 + UNIQUE",
      "NULL 허용 + NOT NULL",
      "NOT NULL + UNIQUE",
      "NOT NULL 단독"
    ],
    "correctIndex": 2,
    "explanation": "기본키는 행을 유일하게 식별해야 하므로 중복 불가 `UNIQUE` 와 NULL 불가 `NOT NULL` 을 동시에 만족해야 한다. NULL 을 허용하면 식별 불가능하고, `NOT NULL` 만으로는 중복이 생길 수 있어 식별자 역할을 할 수 없다.",
    "_source": "authored"
  },
  {
    "id": 10028,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 29,
    "title": "아래 EMP 테이블에서 사원과 매니저 관계의 계층 트리를 조회하기 위한 CONNECT BY 절로 옳은 것은?",
    "options": [
      "`PRIOR 매니저 = 사원`",
      "`PRIOR 사원 = 매니저`",
      "`사원 = 매니저`",
      "`PRIOR 사원 = PRIOR 매니저`"
    ],
    "correctIndex": 1,
    "explanation": "부모의 사원번호가 자식의 매니저번호가 되어야 루트(매니저 IS NULL)에서 아래 방향으로 트리가 확장된다. `PRIOR 사원 = 매니저` 는 \"이전(부모) 행의 사원번호 = 다음 행의 매니저번호\" 를 의미하여 부모 → 자식 정방향 전개. ① 은 자식 → 부모 역방향, ③ 은 PRIOR 없어 트리 미구성, ④ 는 PRIOR 가 양쪽에 있어 자기 참조라 의미 없음.",
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
            "1001",
            "NULL"
          ],
          [
            "1002",
            "1001"
          ],
          [
            "1003",
            "1001"
          ],
          [
            "1004",
            "1002"
          ],
          [
            "1005",
            "1003"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT 사원, 매니저, LEVEL\nFROM   EMP\nSTART WITH 매니저 IS NULL\nCONNECT BY (  ?  );"
      }
    ]
  },
  {
    "id": 10029,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 30,
    "title": "아래 부서 테이블에 대한 계층형 질의의 결과에 대한 설명으로 가장 옳은 것은?",
    "options": [
      "루트 노드가 여러 건이어서 오류가 발생한다.",
      "COL3 값이 2인 중간 노드가 제거되면서 그 아래 가지까지 트리에서 단절된다.",
      "PRIOR 연산자는 CONNECT BY와 함께 사용할 수 없다.",
      "AND 조건은 계층형 질의에서 지원되지 않는다."
    ],
    "correctIndex": 1,
    "explanation": "`CONNECT BY` 절의 조건(`AND COL3 <> 2`) 은 트리 전개 자체에 적용되어 조건을 만족하지 못한 노드부터 그 하위 가지 전체가 따라오지 못한다. 표에서 'D2' 노드의 COL3=2 라 'D2' 가 제거되고, 그 자식인 'D2-1', 'D2-2' 도 함께 단절된다. `WHERE` 절에서 같은 조건을 주는 것과는 동작이 다르다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "부서 테이블",
        "headers": [
          "부서ID",
          "상위부서ID",
          "COL3"
        ],
        "rows": [
          [
            "D",
            "NULL",
            "1"
          ],
          [
            "D1",
            "D",
            "1"
          ],
          [
            "D2",
            "D",
            "2"
          ],
          [
            "D3",
            "D",
            "1"
          ],
          [
            "D2-1",
            "D2",
            "1"
          ],
          [
            "D2-2",
            "D2",
            "1"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT *\nFROM   부서\nSTART WITH 부서ID = 'D'\nCONNECT BY PRIOR 부서ID = 상위부서ID\n       AND COL3 <> 2;"
      }
    ]
  },
  {
    "id": 10030,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 31,
    "title": "아래 테이블에서 FETCH 절로 상위 2건을 반환한 결과로 옳은 것은?",
    "options": [
      "골드 1, 실버 2, 브론즈 1",
      "골드 1, 실버 2",
      "실버 2, 골드 1",
      "실버 2, 브론즈 1"
    ],
    "correctIndex": 1,
    "explanation": "FETCH FIRST n ROWS ONLY는 정렬 조건이 없으면 물리적 저장 순서대로 상위 n건을 반환한다. 테이블에 저장된 순서(골드, 실버, 브론즈) 기준 상위 2건은 골드 1, 실버 2이다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "headers": [
          "메달",
          "개수"
        ],
        "rows": [
          [
            "골드",
            "1"
          ],
          [
            "실버",
            "2"
          ],
          [
            "브론즈",
            "1"
          ]
        ],
        "caption": "메달 테이블"
      },
      {
        "type": "sql",
        "code": "SELECT 메달, 개수\nFROM   메달\nFETCH FIRST 2 ROWS ONLY;"
      }
    ]
  },
  {
    "id": 10031,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 32,
    "title": "다음 중 ALTER TABLE 수행 시 오류가 발생하지 않는 것은?",
    "options": [
      "이미 값이 들어 있는 NOT NULL 제약을 추가하는 경우",
      "기존 자릿수보다 짧게 NUMBER 크기를 변경하는 경우",
      "중복 값이 있는 컬럼에 PRIMARY KEY를 추가하는 경우",
      "TIMESTAMP 컬럼을 추가하는 경우"
    ],
    "correctIndex": 3,
    "explanation": "컬럼 추가는 기존 데이터에 영향을 주지 않으므로 TIMESTAMP 컬럼 추가는 오류 없이 수행된다.",
    "_source": "authored"
  },
  {
    "id": 10032,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 33,
    "title": "아래 SQL의 결과로 옳은 것은?",
    "options": [
      "아이템 1",
      "아이템 1, 2",
      "공집합",
      "오류"
    ],
    "correctIndex": 1,
    "explanation": "NOT EXISTS는 서브쿼리에서 매칭 행이 한 건도 없을 때만 참이 된다. 주문의 ITEM 1과 2는 판매 테이블에 등장하지 않으므로 NOT EXISTS가 참이 되어 결과에 포함되고, ITEM 3은 판매에 있으므로 제외된다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "주문",
        "headers": [
          "ITEM"
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
        "caption": "판매",
        "headers": [
          "ITEM"
        ],
        "rows": [
          [
            "3"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT ITEM\nFROM   주문 O\nWHERE  NOT EXISTS (SELECT 1 FROM 판매 P WHERE P.ITEM = O.ITEM);"
      }
    ]
  },
  {
    "id": 10033,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 34,
    "title": "다음 집합 연산자 중 중복을 허용하는 것은?",
    "options": [
      "UNION",
      "UNION ALL",
      "INTERSECT",
      "EXCEPT"
    ],
    "correctIndex": 1,
    "explanation": "UNION ALL은 두 결과 집합을 그대로 합치며 중복 행을 제거하지 않고 모두 반환한다. 반면 UNION·INTERSECT·EXCEPT(MINUS)는 모두 내부적으로 중복 제거(DISTINCT)를 수행한다.",
    "_source": "authored"
  },
  {
    "id": 10034,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 35,
    "title": "아래 SQL 결과의 SELECT 컬럼 개수로 옳은 것은?",
    "options": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "correctIndex": 3,
    "explanation": "UNION 연산은 위·아래 SELECT의 컬럼 개수와 데이터 타입이 일치해야 한다. 첫 SELECT에 EMPNO, ENAME, YR, SAL 4개의 컬럼이 있으므로 결과 컬럼 개수도 4개가 된다. 별칭(YR)은 첫 SELECT에서 부여한 것이 결과 컬럼명으로 사용된다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP 테이블",
        "headers": [
          "EMPNO",
          "ENAME",
          "HIREDATE",
          "SAL"
        ],
        "rows": [
          [
            "7839",
            "KING",
            "1981-11-17",
            "5000"
          ],
          [
            "7566",
            "JONES",
            "1981-04-02",
            "2975"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "EMP_HIST 테이블 (퇴사 이력)",
        "headers": [
          "EMPNO",
          "ENAME",
          "HIREDATE",
          "SAL"
        ],
        "rows": [
          [
            "7369",
            "SMITH",
            "1980-12-17",
            "800"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT EMPNO,\n       ENAME,\n       EXTRACT(YEAR FROM HIREDATE) AS YR,\n       SAL\nFROM   EMP\nUNION\nSELECT EMPNO,\n       ENAME,\n       EXTRACT(YEAR FROM HIREDATE),\n       SAL\nFROM   EMP_HIST;"
      }
    ]
  },
  {
    "id": 10035,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 36,
    "title": "DML/DDL/DCL 구분에 대한 설명 중 잘못된 것은?",
    "options": [
      "TRUNCATE는 DML이다.",
      "INSERT, UPDATE, DELETE, MERGE는 DML이다.",
      "CREATE, ALTER, DROP은 DDL이다.",
      "GRANT, REVOKE는 DCL이다."
    ],
    "correctIndex": 0,
    "explanation": "TRUNCATE는 DDL에 속한다.",
    "_source": "authored"
  },
  {
    "id": 10036,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 37,
    "title": "아래 두 테이블을 조인한 결과의 SUM 값으로 옳은 것은?",
    "options": [
      "100",
      "120",
      "140",
      "NULL"
    ],
    "correctIndex": 0,
    "explanation": "조인 키(컬럼1)가 일치하는 4건의 행이 매칭되고 컬럼2 값의 합은 10 + 20 + 30 + 40 = 100이 된다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "테이블1",
        "headers": [
          "컬럼1",
          "컬럼2"
        ],
        "rows": [
          [
            "1",
            "10"
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
            "4",
            "40"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "테이블2",
        "headers": [
          "컬럼1"
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
        "type": "sql",
        "code": "SELECT SUM(A.컬럼2)\nFROM   테이블1 A, 테이블2 B\nWHERE  A.컬럼1 = B.컬럼1;"
      }
    ]
  },
  {
    "id": 10037,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 38,
    "title": "아래 두 테이블 A, B 에 대한 SQL 의 결과로 옳은 것은?",
    "options": [
      "4",
      "2",
      "0",
      "오류"
    ],
    "correctIndex": 0,
    "explanation": "조인 조건이 없는 `FROM A, B` 는 카티션 곱(Cross Join)이라 결과 행 수 = `|A| × |B|` = 2 × 2 = 4. `COUNT(*)` 가 4 를 반환한다.",
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
            "a1"
          ],
          [
            "a2"
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
            "b1"
          ],
          [
            "b2"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT COUNT(*)\nFROM   A, B;"
      }
    ]
  },
  {
    "id": 10038,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 39,
    "title": "아래 TGT, SRC 테이블에 대해 MERGE 문 수행 후 TGT 의 V1, V2, V3 값으로 옳은 것은?",
    "options": [
      "100 100 100",
      "100 100 NULL",
      "NULL 100 100",
      "100 NULL 100"
    ],
    "correctIndex": 0,
    "explanation": "TGT.ID = (1) 이고 SRC.ID = (2) 라 ON 조건 (T.ID = S.ID) 이 매칭되지 않는다. 따라서 NOT MATCHED 분기가 실행되어 SRC 의 ID=2 행이 TGT 에 INSERT 되며, INSERT 절에서 V1·V2·V3 모두 100 을 명시했으므로 새 행은 (2, 100, 100, 100) 이 된다. MATCHED 분기가 실행되었다면 V3 는 UPDATE 대상에 없어 기존 NULL 이 남았겠지만 이 문제는 NOT MATCHED 가 동작한다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "TGT 테이블 (MERGE 전)",
        "headers": [
          "ID",
          "V1",
          "V2",
          "V3"
        ],
        "rows": [
          [
            "1",
            "10",
            "20",
            "NULL"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "SRC 테이블",
        "headers": [
          "ID"
        ],
        "rows": [
          [
            "2"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "MERGE INTO TGT T\nUSING SRC S\nON (T.ID = S.ID)\nWHEN MATCHED THEN\n  UPDATE SET T.V1 = 100, T.V2 = 100\nWHEN NOT MATCHED THEN\n  INSERT (ID, V1, V2, V3) VALUES (S.ID, 100, 100, 100);"
      }
    ]
  },
  {
    "id": 10039,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 40,
    "title": "아래 SQL에서 오류가 발생하는 절은?",
    "options": [
      "SELECT 절",
      "FROM 절",
      "WHERE 절의 제품코드 별칭 사용",
      "ORDER BY 절의 제품코드 별칭 사용"
    ],
    "correctIndex": 2,
    "explanation": "SELECT 절에서 부여한 별칭은 WHERE 절에서 참조할 수 없다. ORDER BY 절에서는 참조가 가능하다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "SELECT PRODUCT_CD AS 제품코드\nFROM   PRODUCT\nWHERE  제품코드 = 'A01'\nAND    제품코드 LIKE 'A%'\nORDER BY 제품코드;"
      }
    ]
  },
  {
    "id": 10040,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 41,
    "title": "아래 SQL 들 중 결과가 나머지와 다른 하나는?",
    "options": [
      "`SELECT * FROM DUAL WHERE 1 > NULL;`",
      "`SELECT NULL + 1 FROM DUAL;`",
      "`SELECT NULL * 1 FROM DUAL;`",
      "`SELECT NULL * NULL FROM DUAL;`"
    ],
    "correctIndex": 0,
    "explanation": "②③④ 는 산술 연산 결과로 NULL 을 한 행 반환한다 (DUAL 의 한 행 + NULL 컬럼). ① 의 `WHERE 1 > NULL` 은 UNKNOWN 으로 평가되어 행이 필터링되므로 0 건(공집합) 이 반환된다. 즉 ① 만 반환 행 수가 다르다.",
    "_source": "authored"
  },
  {
    "id": 10041,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 42,
    "title": "다음 SELECT 문 중 반환 값이 나머지와 다른 것은?",
    "options": [
      "`SELECT 1 + NULL FROM DUAL;`",
      "`SELECT 'X' FROM DUAL;`",
      "`SELECT 1 * NULL FROM DUAL;`",
      "`SELECT NULL, NULL FROM DUAL;`"
    ],
    "correctIndex": 1,
    "explanation": "①, ③, ④는 결과에 NULL이 포함되지만 ②만 문자 상수 'X'를 반환한다.",
    "_source": "authored"
  },
  {
    "id": 10042,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 43,
    "title": "아래 CREATE TABLE과 INSERT 수행 후 최종 COUNT 값으로 옳은 것은?",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correctIndex": 1,
    "explanation": "CHECK 제약을 통과한 행은 VAL=1 한 건뿐이므로 COUNT 결과는 1이다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "CREATE TABLE T (\n  ID  NUMBER GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1),\n  VAL NUMBER CHECK (VAL > 0)\n);\n\nINSERT INTO T(VAL) VALUES (-1);   -- CHECK 위반\nINSERT INTO T(VAL) VALUES ( 0);   -- CHECK 위반\nINSERT INTO T(VAL) VALUES ( 1);   -- 성공\nCOMMIT;\n\nSELECT COUNT(*) FROM T;"
      },
      {
        "type": "table",
        "caption": "최종 T 상태 (CHECK VAL > 0 통과 행만)",
        "headers": [
          "ID",
          "VAL"
        ],
        "rows": [
          [
            "1",
            "1"
          ]
        ]
      }
    ]
  },
  {
    "id": 10043,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 44,
    "title": "DROP TABLE ... RESTRICT 옵션 사용 시 해당 테이블을 참조하는 뷰가 존재하는 경우의 결과로 옳은 것은?",
    "options": [
      "어떤 객체도 삭제되지 않는다.",
      "테이블만 삭제되고 뷰는 남는다.",
      "테이블과 뷰가 함께 삭제된다.",
      "뷰가 먼저 삭제된 뒤 테이블이 삭제된다."
    ],
    "correctIndex": 0,
    "explanation": "RESTRICT 옵션은 참조하는 객체가 있으면 삭제를 거부한다. 오류가 발생하고 아무 것도 삭제되지 않는다.",
    "_source": "authored"
  },
  {
    "id": 10044,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 45,
    "title": "`NVL(COMM, SAL)`에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "COMM과 SAL의 덧셈 연산을 수행한다.",
      "COMM 값이 NULL일 때 SAL을 반환한다.",
      "COMM과 SAL의 데이터 타입이 호환되어야 한다.",
      "COMM 값이 NULL이 아니면 COMM을 그대로 반환한다."
    ],
    "correctIndex": 0,
    "explanation": "NVL은 NULL 치환 함수이며 덧셈 연산을 수행하지 않는다. 따라서 덧셈 연산을 수행한다고 기술한 ①은 옳지 않은 설명에 해당하여 정답이 된다. 원본 파편의 \"덧셈 연산 안한다\"는 해당 보기를 요약한 메모로 판단하여, 본래의 틀린 진술 형태(\"덧셈 연산을 수행한다\")로 복원하였다.",
    "_source": "authored"
  },
  {
    "id": 10045,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 46,
    "title": "아래 EMP 테이블에서 부서별 급여 상위 3 명을 조회하려 한다. 빈칸에 들어갈 분석 함수로 가장 적절한 것은?",
    "options": [
      "DENSE_RANK",
      "ROWNUM",
      "NTILE",
      "CUME_DIST"
    ],
    "correctIndex": 0,
    "explanation": "부서 내 동률을 같은 순위로 매기되 다음 순위를 건너뛰지 않는 `DENSE_RANK` 가 \"상위 N 명\" 조회에 가장 적합하다. 예: 부서 A 의 급여가 (5000, 4000, 4000, 3000) 일 때 DENSE_RANK 는 (1, 2, 2, 3) 을 부여해 RNK ≤ 3 으로 4 명 모두 조회 가능. ② `ROWNUM` 은 분석 함수가 아니며 `PARTITION BY` 와 함께 쓸 수 없고, ③ `NTILE` 은 등분 그룹을 매기는 용도, ④ `CUME_DIST` 는 누적 분포 비율(0~1) 을 반환하므로 상위 3 명 필터링에 부적합.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP 테이블",
        "headers": [
          "부서",
          "사원",
          "급여"
        ],
        "rows": [
          [
            "A",
            "김철수",
            "5000"
          ],
          [
            "A",
            "이영희",
            "4000"
          ],
          [
            "A",
            "박민수",
            "4000"
          ],
          [
            "A",
            "최지훈",
            "3000"
          ],
          [
            "B",
            "정수민",
            "4500"
          ],
          [
            "B",
            "강호동",
            "3500"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT 부서, 사원, 급여\nFROM ( SELECT 부서, 사원, 급여,\n              (  ?  ) OVER (PARTITION BY 부서 ORDER BY 급여 DESC) AS RNK\n       FROM   EMP )\nWHERE RNK <= 3;"
      }
    ]
  },
  {
    "id": 10046,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 47,
    "title": "어느 부서에도 속하지 않는 직원을 조회하는 SQL로 가장 적절한 것은?",
    "options": [
      "`SELECT * FROM EMP E, DEPT D WHERE E.DEPTNO = D.DEPTNO;`",
      "`SELECT * FROM EMP WHERE DEPTNO IS NULL OR DEPTNO NOT IN (SELECT DEPTNO FROM DEPT);`",
      "`SELECT * FROM EMP E LEFT JOIN DEPT D ON E.DEPTNO = D.DEPTNO WHERE D.DEPTNO IS NOT NULL;`",
      "`SELECT * FROM EMP E LEFT JOIN DEPT D ON E.DEPTNO = D.DEPTNO WHERE D.DEPTNO IS NULL;`"
    ],
    "correctIndex": 1,
    "explanation": "\"어떤 부서에도 속하지 않는다\"는 두 가지 경우를 모두 포함한다. (a) DEPTNO 자체가 NULL인 경우, (b) DEPTNO 값이 있지만 DEPT 테이블에 등록되지 않은 경우(예: 99번). ②는 OR로 두 경우를 모두 잡으므로 가장 적절하다. ① 일반 조인은 부서가 매칭된 직원만 조회한다. ③ LEFT JOIN + IS NOT NULL은 매칭된 직원만 남기므로 정답과 정반대다. ④ LEFT JOIN + IS NULL은 (a) 케이스만 잡고 (b) DEPTNO=99처럼 DEPT에 등록되지 않은 외래값은 매칭 단계에서 NULL로 채워지지 않고 그대로 결합되어 결과에서 누락될 수 있다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "EMP",
        "headers": [
          "EMPNO",
          "ENAME",
          "DEPTNO"
        ],
        "rows": [
          [
            "1",
            "A",
            "10"
          ],
          [
            "2",
            "B",
            "NULL"
          ],
          [
            "3",
            "C",
            "99"
          ]
        ]
      },
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
            "영업"
          ],
          [
            "20",
            "인사"
          ]
        ]
      }
    ]
  },
  {
    "id": 10047,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 48,
    "title": "다음 중 `ROLLUP(A, B)` 에는 포함되지 않지만 `CUBE(A, B)` 에는 포함되는 집계 조합은?",
    "options": [
      "(A, B)",
      "(A, NULL)",
      "(NULL, B)",
      "(NULL, NULL)"
    ],
    "correctIndex": 2,
    "explanation": "CUBE 는 모든 조합을 반환하지만 ROLLUP 은 좌측부터 점진적으로 집계를 수행하므로 (NULL, B) 조합 — 즉 B 단독 소계 — 은 ROLLUP 결과에는 존재하지 않는다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "ROLLUP(A, B) 가 만드는 집계 그룹",
        "headers": [
          "A",
          "B"
        ],
        "rows": [
          [
            "A 값",
            "B 값"
          ],
          [
            "A 값",
            "NULL (소계)"
          ],
          [
            "NULL (총계)",
            "NULL (총계)"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "CUBE(A, B) 가 만드는 집계 그룹",
        "headers": [
          "A",
          "B"
        ],
        "rows": [
          [
            "A 값",
            "B 값"
          ],
          [
            "A 값",
            "NULL"
          ],
          [
            "NULL",
            "B 값"
          ],
          [
            "NULL",
            "NULL"
          ]
        ]
      }
    ]
  },
  {
    "id": 10048,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 49,
    "title": "아래 DDL에서 성별 컬럼에 'M' 또는 'F'만 허용하도록 강제하는 제약 조건은?",
    "options": [
      "NOT NULL",
      "CHECK",
      "PRIMARY KEY",
      "FOREIGN KEY"
    ],
    "correctIndex": 1,
    "explanation": "특정 컬럼이 지정한 값 집합에 한정되도록 강제하려면 CHECK 제약 조건을 사용한다. NOT NULL은 NULL 금지만, PRIMARY KEY는 유일성+NOT NULL을, FOREIGN KEY는 다른 테이블 참조를 강제할 뿐 값 도메인을 제한하지 못한다.",
    "_source": "authored",
    "references": [
      {
        "type": "sql",
        "code": "CREATE TABLE MEMBER (\n  ID   VARCHAR2(10) PRIMARY KEY,\n  NAME VARCHAR2(30) NOT NULL,\n  SEX  CHAR(1)  (  ?  ) (SEX IN ('M','F'))\n);"
      }
    ]
  },
  {
    "id": 10049,
    "examSetId": "round-60",
    "examLabel": "제60회 (2026년 3월)",
    "round": 60,
    "subject": "2과목",
    "number": 50,
    "title": "아래 주문 테이블에 대한 SQL 이 반환하는 결과에 대한 설명으로 가장 적절한 것은?",
    "options": [
      "주문 수량이 10을 넘는 건이 있는 고객의 주문 건수를 조회한다",
      "주문 수량 총 합계가 10을 넘는 고객의 주문 건수를 조회한다",
      "주문 횟수가 10건을 넘는 고객의 주문 건수를 조회한다",
      "수량 컬럼이 NULL이 아닌 고객의 주문 건수를 조회한다"
    ],
    "correctIndex": 0,
    "explanation": "`GROUP BY 고객ID` 로 고객별 그룹을 만들고 `HAVING MAX(수량) > 10` 으로 \"한 건이라도 수량이 10 을 초과하는\" 고객 그룹만 남긴다. ② 는 SUM, ③ 은 COUNT, ④ 는 IS NOT NULL 조건이라야 한다.",
    "_source": "authored",
    "references": [
      {
        "type": "table",
        "caption": "주문 테이블",
        "headers": [
          "고객ID",
          "주문번호",
          "수량"
        ],
        "rows": [
          [
            "C001",
            "O100",
            "5"
          ],
          [
            "C001",
            "O101",
            "12"
          ],
          [
            "C001",
            "O102",
            "3"
          ],
          [
            "C002",
            "O103",
            "8"
          ],
          [
            "C002",
            "O104",
            "9"
          ],
          [
            "C003",
            "O105",
            "15"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT 고객ID, COUNT(*) AS 주문건수\nFROM   주문\nGROUP BY 고객ID\nHAVING MAX(수량) > 10;"
      }
    ]
  }
];
