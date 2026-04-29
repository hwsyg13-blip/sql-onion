// Auto-generated from scripts/authored/ai-mock.json
// AI 생성 모의고사 풀 (기출 변형) · 213문항
// ⚠ 직접 편집 금지. ai-mock.json 수정 후 'node scripts/build-quiz-bank.mjs' 재실행.
import type { QuizQuestion } from '../quizBank';

export const AI_MOCK: QuizQuestion[] = [
  {
    "id": 10800,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 1,
    "title": "다음 중 부서(DEPT) 테이블과 사원(EMP) 테이블을 조인하는 쿼리 결과에 대한 설명으로 올바른 것은 무엇인가?",
    "options": [
      "두 쿼리 모두 문법 오류가 발생한다.",
      "쿼리 1과 쿼리 2의 결과 건수는 항상 동일하다.",
      "쿼리 1은 EMP 테이블의 모든 데이터를 출력하지만, 쿼리 2는 LOC가 'SEOUL'인 데이터만 출력하므로 사실상 INNER JOIN과 동일한 결과가 나온다.",
      "쿼리 1은 DEPT 테이블의 모든 데이터를 출력하는 반면, 쿼리 2는 EMP 테이블의 모든 데이터를 출력한다."
    ],
    "correctIndex": 2,
    "explanation": "ON 절에 추가된 조건은 조인할 대상을 제한하며 기준 테이블(EMP)의 데이터는 모두 보존되지만, WHERE 절의 조건은 조인이 완료된 후의 결과셋을 필터링하므로 OUTER JOIN의 효과가 사라집니다.",
    "chapter": "조인",
    "_source": "ai-mock",
    "_origId": "ai-mock-001",
    "references": [
      {
        "type": "sql",
        "caption": "쿼리 1",
        "code": "SELECT E.EMPNO, D.DNAME\nFROM EMP E LEFT OUTER JOIN DEPT D\nON E.DEPTNO = D.DEPTNO AND D.LOC = 'SEOUL';"
      },
      {
        "type": "sql",
        "caption": "쿼리 2",
        "code": "SELECT E.EMPNO, D.DNAME\nFROM EMP E LEFT OUTER JOIN DEPT D\nON E.DEPTNO = D.DEPTNO\nWHERE D.LOC = 'SEOUL';"
      }
    ]
  },
  {
    "id": 10801,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 2,
    "title": "다음 중 다중 행 서브쿼리와 관련된 쿼리 중 결과가 0건(Empty Set)으로 출력될 가능성이 있는 쿼리는 무엇인가? (단, T1과 T2 테이블에는 각각 10건의 데이터가 존재한다.)",
    "options": [
      "SELECT * FROM T1 WHERE ID IN (SELECT ID FROM T2 WHERE ID IS NULL);",
      "SELECT * FROM T1 WHERE ID NOT IN (SELECT ID FROM T2); (단, T2 테이블의 ID 컬럼에는 NULL 값이 1개 이상 존재한다.)",
      "SELECT * FROM T1 WHERE EXISTS (SELECT 1 FROM T2 WHERE T1.ID = T2.ID AND T2.ID IS NULL);",
      "SELECT * FROM T1 WHERE ID <> ALL (SELECT ID FROM T2 WHERE ID IS NOT NULL);"
    ],
    "correctIndex": 1,
    "explanation": "NOT IN 연산자는 내부적으로 'AND NOT =' 논리를 가집니다. 서브쿼리 결과에 NULL이 하나라도 포함되면 비교 결과가 UNKNOWN이 되어 전체 쿼리는 한 건의 데이터도 반환하지 못합니다.",
    "chapter": "서브쿼리",
    "_source": "ai-mock",
    "_origId": "ai-mock-002"
  },
  {
    "id": 10802,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 3,
    "title": "계층형 질의(Hierarchical Query)에 대한 다음 설명 중 가장 거리가 먼 것은?",
    "options": [
      "NOCYCLE 키워드를 사용하면 데이터를 전개하면서 이미 나타났던 동일한 데이터가 전개 중에 다시 나타나는 사이클(Cycle)을 방지할 수 있다.",
      "ORDER SIBLINGS BY 절을 사용하면 계층 구조의 전체 트리를 무시하고 지정된 컬럼을 기준으로 데이터를 완전히 재정렬한다.",
      "CONNECT BY 절은 다음에 전개될 자식 데이터를 지정하며, PRIOR 키워드는 현재 읽은 부모 행을 가리킨다.",
      "START WITH 절은 계층 구조 전개의 시작 위치를 지정하는 구문이다."
    ],
    "correctIndex": 1,
    "explanation": "ORDER SIBLINGS BY는 계층 구조의 트리 형태를 유지한 상태에서, 같은 레벨에 있는 형제(Siblings) 노드들 사이에서만 정렬을 수행합니다.",
    "chapter": "계층형 질의",
    "_source": "ai-mock",
    "_origId": "ai-mock-003"
  },
  {
    "id": 10803,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 4,
    "title": "다음 중 그룹 함수(Group Function)에 대한 설명으로 틀린 것은?",
    "options": [
      "GROUPING SETS(A, B)는 (A, B), (A), (B) 3개의 결과를 생성하며 총계()는 포함하지 않는다.",
      "CUBE(A, B)는 (A, B), (A), (B), () 이렇게 가능한 모든 조합인 4개의 그룹핑 셋을 생성한다.",
      "ROLLUP(A, B)는 (A, B), (A), () 이렇게 총 3개의 그룹핑 셋(Grouping Set)을 생성한다.",
      "GROUPING 함수는 ROLLUP이나 CUBE에 의해 계산된 결과 행인지, 아니면 원본 데이터의 그룹핑 결과인지를 구분하기 위해 사용되며 0 또는 1을 반환한다."
    ],
    "correctIndex": 0,
    "explanation": "GROUPING SETS는 괄호 안에 명시된 집합들에 대해서만 개별적으로 소계를 구합니다. (A, B)가 아니라 (A)와 (B) 각각의 결과만 산출합니다.",
    "chapter": "그룹 함수",
    "_source": "ai-mock",
    "_origId": "ai-mock-005"
  },
  {
    "id": 10804,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 5,
    "title": "다음 SQL의 실행 결과를 예측한 것으로 올바른 것은?",
    "options": [
      "NULL",
      "문법 오류 발생",
      "'B'",
      "'A'"
    ],
    "correctIndex": 0,
    "explanation": "COALESCE(NULL, 'A', 'B')는 첫 번째로 NULL이 아닌 값인 'A'를 반환합니다. 이어진 NULLIF('A', 'A')는 두 인수가 같으므로 NULL을 반환합니다.",
    "chapter": "함수",
    "_source": "ai-mock",
    "_origId": "ai-mock-006",
    "references": [
      {
        "type": "sql",
        "code": "SELECT NULLIF(COALESCE(NULL, 'A', 'B'), 'A') FROM DUAL;"
      }
    ]
  },
  {
    "id": 10805,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 6,
    "title": "윈도우 함수(Window Function)에 대한 설명으로 가장 적절하지 않은 것은?",
    "options": [
      "LAG() 함수는 파티션 내에서 현재 행보다 이전 행의 값을, LEAD() 함수는 이후 행의 값을 가져오는 데 사용된다.",
      "PARTITION BY 절은 전체 집합을 그룹화하지만, GROUP BY와 달리 쿼리의 결과 행 수를 줄이지 않는다.",
      "RANK() 함수는 동일한 값에 대해 같은 순위를 부여하며, 그 다음 순위는 건너뛰지 않고 이어진다. (예: 1등, 1등, 2등)",
      "ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW는 현재 파티션의 첫 행부터 현재 행까지의 누적 범위를 의미한다."
    ],
    "correctIndex": 2,
    "explanation": "동일 순위 이후의 순위를 건너뛰지 않는 것은 DENSE_RANK() 함수입니다. RANK() 함수는 1등, 1등, 3등과 같이 순위를 건너뜁니다.",
    "chapter": "윈도우 함수",
    "_source": "ai-mock",
    "_origId": "ai-mock-008"
  },
  {
    "id": 10806,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 7,
    "title": "집합 연산자(Set Operator)를 사용한 쿼리의 특징으로 옳지 않은 것은?",
    "options": [
      "UNION ALL은 두 질의의 결과를 중복 제거 없이 단순히 더하므로 정렬 작업이 발생하지 않아 UNION보다 성능상 유리하다.",
      "INTERSECT 연산자는 두 질의의 결과에 모두 존재하는 교집합을 반환하며 중복된 행은 하나만 출력한다.",
      "UNION은 두 질의의 결과를 합치면서 중복된 행을 제거하며, 이 과정에서 내부적으로 정렬(Sort) 작업이 발생할 수 있다.",
      "MINUS(또는 EXCEPT) 연산자를 사용할 때, 첫 번째 쿼리의 컬럼 수와 데이터 타입은 두 번째 쿼리와 달라도 무방하다."
    ],
    "correctIndex": 3,
    "explanation": "모든 집합 연산자는 결합되는 각 쿼리의 SELECT 절 컬럼 개수와 위치별 데이터 타입이 서로 호환되어야만 오류 없이 실행됩니다.",
    "chapter": "집합 연산자",
    "_source": "ai-mock",
    "_origId": "ai-mock-009"
  },
  {
    "id": 10807,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 8,
    "title": "MERGE 구문에 대한 다음 설명 중 가장 부적절한 것은?",
    "options": [
      "WHEN MATCHED THEN 절에서 UPDATE 수행 시, ON 절에서 조인 조건으로 사용된 컬럼의 값도 수정할 수 있다.",
      "필요에 따라 WHEN MATCHED THEN 절이나 WHEN NOT MATCHED THEN 절 중 하나만 선택적으로 사용할 수도 있다.",
      "단일 쿼리로 입력과 수정을 동시에 처리할 수 있어, SELECT 후 분기하여 처리하는 전통적인 방식보다 I/O 효율이 좋다.",
      "ON 절에 명시된 조건에 따라 대상 테이블(Target Table)에 해당 데이터가 존재하면 UPDATE를, 존재하지 않으면 INSERT를 수행한다."
    ],
    "correctIndex": 0,
    "explanation": "MERGE 문에서 데이터를 매칭시키는 기준이 되는 조인 키(ON 절에 사용된 컬럼)는 UPDATE 구문을 통해 값을 변경할 수 없습니다.",
    "chapter": "DML",
    "_source": "ai-mock",
    "_origId": "ai-mock-010"
  },
  {
    "id": 10808,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 9,
    "title": "계층형 질의에서 순방향 전개(Top-Down)를 수행하기 위한 CONNECT BY 절의 올바른 조건은 무엇인가? (단, 부모 컬럼은 PARENT_ID, 자식 컬럼은 CHILD_ID이다.)",
    "options": [
      "CONNECT BY PRIOR CHILD_ID = PARENT_ID",
      "CONNECT BY PARENT_ID = CHILD_ID",
      "CONNECT BY PRIOR PARENT_ID = CHILD_ID",
      "CONNECT BY PRIOR CHILD_ID = PRIOR PARENT_ID"
    ],
    "correctIndex": 2,
    "explanation": "PRIOR는 직전(부모) 행의 값을 가리킵니다. 부모 데이터에서 자식 데이터 방향으로 전개하려면 직전 행의 PARENT_ID가 다음 행의 CHILD_ID와 같아야 하므로 PRIOR PARENT_ID = CHILD_ID 가 올바른 순방향 조건입니다.",
    "chapter": "계층형 질의",
    "_source": "ai-mock",
    "_origId": "ai-mock-011"
  },
  {
    "id": 10809,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 10,
    "title": "계층형 질의의 가상 컬럼인 CONNECT_BY_ISLEAF가 반환하는 값의 의미로 올바른 것은?",
    "options": [
      "현재 행에서 순환(Cycle)이 발생했으면 1, 아니면 0",
      "현재 행이 최상위 루트 노드이면 1, 아니면 0",
      "현재 행이 단말 노드(자식이 없는 노드)이면 1, 아니면 0",
      "현재 노드의 전체 하위 자식 노드 개수"
    ],
    "correctIndex": 2,
    "explanation": "CONNECT_BY_ISLEAF는 현재 행이 더 이상 펼칠 자식이 없는 단말 노드(Leaf Node)이면 1, 아니면 0을 반환합니다. ISCYCLE은 순환 발생 여부를 반환하는 다른 가상 컬럼입니다.",
    "chapter": "계층형 질의",
    "_source": "ai-mock",
    "_origId": "ai-mock-012"
  },
  {
    "id": 10810,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 11,
    "title": "다음 중 서브쿼리 결과에 NULL이 포함되어 있을 때, 메인 쿼리의 결과가 항상 0건(Empty)이 되는 연산자는 무엇인가?",
    "options": [
      "NOT EXISTS",
      "NOT IN",
      "IN",
      "EXISTS"
    ],
    "correctIndex": 1,
    "explanation": "NOT IN은 내부적으로 AND NOT 조건의 결합이므로, 비교 대상 중 하나라도 NULL이면 결과가 UNKNOWN이 되어 전체 조건이 거짓이 되고 결과를 반환하지 못합니다. EXISTS/NOT EXISTS는 행의 존재 여부만 확인해 NULL의 영향을 받지 않습니다.",
    "chapter": "서브쿼리",
    "_source": "ai-mock",
    "_origId": "ai-mock-013"
  },
  {
    "id": 10811,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 12,
    "title": "GROUPING SETS(A, B, C)를 사용하여 집계를 수행할 때, 생성되는 그룹핑 결과의 조합 수는?",
    "options": [
      "1개",
      "4개",
      "8개",
      "3개"
    ],
    "correctIndex": 3,
    "explanation": "GROUPING SETS는 괄호 안에 명시된 각 항목에 대해서만 개별적으로 집계하므로 (A), (B), (C) 3개의 결과를 반환합니다. ROLLUP(A,B,C)이면 4개, CUBE(A,B,C)이면 8개입니다.",
    "chapter": "그룹 함수",
    "_source": "ai-mock",
    "_origId": "ai-mock-015"
  },
  {
    "id": 10812,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 13,
    "title": "다음 중 NULLIF(A, B) 함수의 올바른 동작을 설명한 것은?",
    "options": [
      "A와 B가 같으면 A를, 다르면 NULL을 반환한다.",
      "A와 B가 같으면 NULL을, 다르면 A를 반환한다.",
      "A가 NULL이면 B를 반환한다.",
      "A와 B 중 NULL이 아닌 첫 번째 값을 반환한다."
    ],
    "correctIndex": 1,
    "explanation": "NULLIF(A, B)는 두 인수가 같으면 NULL을, 다르면 첫 번째 인수 A를 반환합니다. ③은 NVL/ISNULL, ④는 COALESCE의 동작입니다.",
    "chapter": "함수",
    "_source": "ai-mock",
    "_origId": "ai-mock-016"
  },
  {
    "id": 10813,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 14,
    "title": "윈도우 함수 중 동일한 값에 대해 같은 순위를 부여하고, 중복된 순위만큼 다음 순위를 건너뛰어 부여하는 함수는? (예: 1등, 1등, 3등)",
    "options": [
      "NTILE",
      "RANK",
      "DENSE_RANK",
      "ROW_NUMBER"
    ],
    "correctIndex": 1,
    "explanation": "RANK는 동순위에 같은 등수를 부여한 뒤 그만큼 다음 등수를 건너뜁니다(1, 1, 3). DENSE_RANK는 건너뛰지 않고(1, 1, 2), ROW_NUMBER는 동순위 없이 일련번호를 부여합니다.",
    "chapter": "윈도우 함수",
    "_source": "ai-mock",
    "_origId": "ai-mock-017"
  },
  {
    "id": 10814,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 15,
    "title": "집합 연산자 MINUS(또는 EXCEPT)에 대한 설명으로 틀린 것은?",
    "options": [
      "두 쿼리의 SELECT 절에 있는 컬럼의 개수와 데이터 타입이 일치해야 한다.",
      "결과집합에서 중복된 행은 제거하지 않고 모두 출력한다.",
      "첫 번째 쿼리 결과에는 존재하지만 두 번째 쿼리 결과에는 없는 차집합을 반환한다.",
      "쿼리의 순서가 바뀌면 결과도 달라질 수 있다."
    ],
    "correctIndex": 1,
    "explanation": "MINUS는 UNION·INTERSECT와 마찬가지로 결과 집합에서 중복을 제거하여 고유한 행만 출력합니다. UNION ALL만 중복을 보존합니다.",
    "chapter": "집합 연산자",
    "_source": "ai-mock",
    "_origId": "ai-mock-018"
  },
  {
    "id": 10815,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 16,
    "title": "MERGE 구문의 특징으로 가장 올바른 것은?",
    "options": [
      "WHEN MATCHED 절과 WHEN NOT MATCHED 절은 반드시 둘 다 명시해야 한다.",
      "존재하면 UPDATE, 존재하지 않으면 INSERT를 수행하는 UPSERT 로직을 단일 문장으로 처리한다.",
      "DELETE 작업은 MERGE 문 내부에서 절대 수행할 수 없다.",
      "ON 절에 사용된 조인 조건 컬럼의 값도 UPDATE 절을 통해 수정할 수 있다."
    ],
    "correctIndex": 1,
    "explanation": "MERGE는 단일 문장으로 UPSERT(Update or Insert)를 처리하는 것이 핵심 기능입니다. WHEN 절은 둘 중 하나만 사용 가능하며, ON 절의 조인 키 컬럼은 UPDATE 대상이 될 수 없습니다.",
    "chapter": "DML",
    "_source": "ai-mock",
    "_origId": "ai-mock-020"
  },
  {
    "id": 10816,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 17,
    "title": "윈도우 함수에서 누적 합계를 구할 때 사용하는 프레임(Frame) 지정 구문 중, 현재 파티션의 첫 번째 행부터 현재 행까지를 의미하는 올바른 구문은?",
    "options": [
      "ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING",
      "ROWS CURRENT ROW ONLY",
      "ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW",
      "ROWS BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING"
    ],
    "correctIndex": 2,
    "explanation": "ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW는 파티션의 첫 행부터 현재 행까지의 누적 범위를 의미하는 표준 구문이며 누계 산출에 사용됩니다.",
    "chapter": "윈도우 함수",
    "_source": "ai-mock",
    "_origId": "ai-mock-022"
  },
  {
    "id": 10817,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 18,
    "title": "NATURAL JOIN 사용 시 지켜야 할 문법적 제약 사항으로 올바른 것은?",
    "options": [
      "SELECT 절에서 조인 기준이 되는 컬럼 앞에는 테이블 식별자(Alias)를 사용할 수 없다.",
      "조인되는 두 테이블에 이름과 데이터 타입이 같은 컬럼이 하나만 있어야 한다.",
      "ON 절을 명시하여 추가적인 조인 조건을 부여할 수 있다.",
      "조인 기준 컬럼의 데이터 타입이 다르면 자동으로 형변환을 수행한다."
    ],
    "correctIndex": 0,
    "explanation": "NATURAL JOIN과 USING 절의 조인 키 컬럼은 두 테이블의 식별자를 잃고 단일 개념으로 통합되므로 테이블 접두사(Alias)를 붙일 수 없는 것이 표준 SQL 규칙입니다.",
    "chapter": "조인",
    "_source": "ai-mock",
    "_origId": "ai-mock-023"
  },
  {
    "id": 10818,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 19,
    "title": "단일 행 서브쿼리(Single Row Subquery)에 대한 설명으로 틀린 것은?",
    "options": [
      "비교 연산자로 =, <, >, <=, >=, <> 등을 사용한다.",
      "서브쿼리는 메인 쿼리보다 먼저 실행되는 것이 일반적이다(비상관 서브쿼리의 경우).",
      "서브쿼리의 결과가 2건 이상 반환되면 런타임 오류가 발생한다.",
      "서브쿼리의 결과가 0건(Empty)이면 메인 쿼리도 오류를 발생시킨다."
    ],
    "correctIndex": 3,
    "explanation": "서브쿼리 결과가 0건이면 비교 연산이 UNKNOWN으로 처리되어 조건이 거짓이 될 뿐 오류는 발생하지 않습니다. 2건 이상 반환되면 단일 행 비교 연산과 어긋나 런타임 오류가 납니다.",
    "chapter": "서브쿼리",
    "_source": "ai-mock",
    "_origId": "ai-mock-024"
  },
  {
    "id": 10819,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 20,
    "title": "ROLLUP 함수와 그룹화 묶음 개수에 대한 규칙으로 옳은 것은? (단, n은 ROLLUP에 인자로 지정된 컬럼의 개수이다.)",
    "options": [
      "전체 총계(Grand Total)는 산출하지 않는다.",
      "생성되는 그룹핑 셋의 개수는 항상 2^n 개이다.",
      "생성되는 그룹핑 셋의 개수는 항상 n+1 개이다.",
      "인자의 순서를 바꾸어도 결과집합의 내용은 완전히 동일하다."
    ],
    "correctIndex": 2,
    "explanation": "ROLLUP은 오른쪽부터 컬럼을 하나씩 제거하며 소계를 만들고 마지막에 전체 총계를 추가하므로 n+1개의 그룹핑 셋이 생성됩니다. 2^n개는 CUBE, 인자 순서가 결과에 영향을 주는 점도 ROLLUP의 특징입니다.",
    "chapter": "그룹 함수",
    "_source": "ai-mock",
    "_origId": "ai-mock-025"
  },
  {
    "id": 10820,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 21,
    "title": "다음 함수 중 성격이 다른 하나는 무엇인가?",
    "options": [
      "NVL (또는 ISNULL)",
      "COALESCE",
      "NULLIF",
      "NVL2"
    ],
    "correctIndex": 2,
    "explanation": "NVL·COALESCE·NVL2는 모두 NULL을 다른 값으로 대체하는 NULL 처리 함수입니다. NULLIF는 두 값이 같으면 NULL을 반환하는 함수로 NULL을 '생성'하는 성격이라 분류가 다릅니다.",
    "chapter": "함수",
    "_source": "ai-mock",
    "_origId": "ai-mock-026"
  },
  {
    "id": 10821,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 22,
    "title": "다중 컬럼 서브쿼리(Multi-Column Subquery)에 대한 설명 중 적절하지 않은 것은?",
    "options": [
      "주로 IN 연산자와 결합하여 (컬럼1, 컬럼2) IN (서브쿼리) 형태로 사용된다.",
      "서브쿼리의 결과가 여러 컬럼으로 반환되며, 메인 쿼리 조건절과 동시에 비교된다.",
      "오라클(Oracle) 등 일부 DBMS에서는 지원하지만, 모든 DBMS가 지원하는 표준 문법은 아니다.",
      "메인 쿼리에서 비교할 컬럼의 순서와 서브쿼리에서 반환하는 컬럼의 순서는 달라도 이름만 같으면 무방하다."
    ],
    "correctIndex": 3,
    "explanation": "다중 컬럼 비교는 컬럼 이름이 아닌 명시된 위치(순서) 기준 1:1 매핑으로 비교되므로 메인과 서브쿼리의 컬럼 순서가 반드시 일치해야 합니다.",
    "chapter": "서브쿼리",
    "_source": "ai-mock",
    "_origId": "ai-mock-027"
  },
  {
    "id": 10822,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 23,
    "title": "스칼라 서브쿼리(Scalar Subquery)의 특징으로 가장 올바른 것은?",
    "options": [
      "반드시 하나의 행, 하나의 컬럼 값만을 반환해야 한다.",
      "서브쿼리 결과가 0건일 경우 메인 쿼리의 해당 행은 출력되지 않는다.",
      "여러 개의 컬럼을 반환하여 다중 컬럼 비교에 사용된다.",
      "FROM 절에서 가상의 테이블처럼 사용되는 서브쿼리이다."
    ],
    "correctIndex": 0,
    "explanation": "스칼라 서브쿼리는 SELECT 절에 주로 사용되며 단일 행·단일 컬럼의 단일 값만 반환해야 합니다. 0건이면 NULL이 반환될 뿐 메인 행이 사라지지 않으며, FROM 절 서브쿼리는 인라인 뷰입니다.",
    "chapter": "서브쿼리",
    "_source": "ai-mock",
    "_origId": "ai-mock-028"
  },
  {
    "id": 10823,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 24,
    "title": "뷰(View)에 대한 설명으로 가장 거리가 먼 것은?",
    "options": [
      "독립적인 데이터 저장 공간을 가지며 인덱스를 직접 생성할 수 있다.",
      "복잡한 쿼리를 단순화하여 사용자의 편의성을 높인다.",
      "보안을 위해 특정 컬럼만 노출하도록 설정할 수 있다.",
      "단순 뷰의 경우 DML(INSERT, UPDATE, DELETE) 작업이 가능하지만 제약이 따른다."
    ],
    "correctIndex": 0,
    "explanation": "일반 뷰는 데이터를 저장하지 않고 정의(쿼리 텍스트)만 사전에 저장하는 가상 테이블이므로 독립적 저장 공간이나 인덱스를 가질 수 없습니다. 데이터를 실제로 저장하는 것은 구체화된 뷰(MVIEW)입니다.",
    "chapter": "DDL",
    "_source": "ai-mock",
    "_origId": "ai-mock-029"
  },
  {
    "id": 10824,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 25,
    "title": "트랜잭션의 격리성(Isolation) 수준에 대한 설명 중 현상과 문제점의 연결이 틀린 것은?",
    "options": [
      "Serializable - 가장 엄격한 격리 수준으로 동시성이 크게 저하됨",
      "Repeatable Read - Phantom Read 절대 발생 안 함",
      "Read Committed - Non-Repeatable Read 발생 가능",
      "Read Uncommitted - Dirty Read 발생 가능"
    ],
    "correctIndex": 1,
    "explanation": "Repeatable Read는 기존 데이터의 변경(Non-Repeatable Read)은 막지만 신규 데이터의 INSERT는 막지 못하므로 유령(Phantom) 데이터가 나타날 수 있습니다. Phantom Read를 완전히 막으려면 Serializable이 필요합니다.",
    "chapter": "DCL·TCL",
    "_source": "ai-mock",
    "_origId": "ai-mock-030"
  },
  {
    "id": 10825,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 26,
    "title": "다음 중 DDL(Data Definition Language) 명령어 수행 시 발생하는 트랜잭션의 특징으로 올바른 것은?",
    "options": [
      "실행 전후로 자동 커밋(Auto Commit)이 발생하여 이전의 DML 작업까지 모두 반영된다.",
      "실행 후 반드시 사용자가 COMMIT을 명시적으로 실행해야 변경사항이 반영된다.",
      "잘못 실행한 경우 언제든 ROLLBACK 명령으로 복구할 수 있다.",
      "테이블 구조만 변경할 뿐, 내부에 저장된 데이터에는 어떠한 락(Lock)도 발생시키지 않는다."
    ],
    "correctIndex": 0,
    "explanation": "Oracle 등 대부분 DBMS에서 DDL은 명령 실행 전후로 암묵적 COMMIT을 유발합니다. 따라서 DDL 직전의 미커밋된 DML 작업도 함께 영구 반영되며 ROLLBACK이 불가능하므로 트랜잭션 관리에 주의가 필요합니다.",
    "chapter": "DDL",
    "_source": "ai-mock",
    "_origId": "ai-mock-031"
  },
  {
    "id": 10826,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 27,
    "title": "TRUNCATE TABLE 명령어와 DELETE 명령어의 차이점을 설명한 것으로 가장 부적절한 것은?",
    "options": [
      "TRUNCATE는 DDL이고, DELETE는 DML이다.",
      "TRUNCATE는 삭제 시 각 행마다 Redo/Undo 로그를 기록하므로 데이터가 많을 경우 DELETE보다 속도가 느리다.",
      "DELETE는 WHERE 절을 사용하여 특정 행만 삭제할 수 있지만, TRUNCATE는 항상 테이블 전체 데이터를 삭제한다.",
      "TRUNCATE는 데이터를 삭제하면서 디스크의 저장 공간(Extent)을 초기 상태로 반환한다."
    ],
    "correctIndex": 1,
    "explanation": "TRUNCATE는 행 단위 로그를 남기지 않고 테이블의 데이터 영역을 통째로 비우는 DDL이므로 대용량 삭제 시 DELETE보다 훨씬 빠릅니다.",
    "chapter": "DDL",
    "_source": "ai-mock",
    "_origId": "ai-mock-032"
  },
  {
    "id": 10827,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 28,
    "title": "관계형 데이터베이스의 정규화(Normalization)에 대한 설명으로 틀린 것은?",
    "options": [
      "2차 정규형(2NF)은 주식별자가 복합키인 경우 일부 식별자에만 종속되는 부분 함수 종속을 제거하는 과정이다.",
      "3차 정규형(3NF)은 식별자가 아닌 일반 속성들 간에 존재하는 종속성(이행적 함수 종속)을 제거하는 과정이다.",
      "1차 정규형(1NF)은 테이블의 모든 속성이 원자값(더 이상 분해되지 않는 값)만을 가져야 함을 의미한다.",
      "정규화 수준이 높아질수록 조인(Join)의 필요성이 줄어들어 무조건 조회 성능이 향상된다."
    ],
    "correctIndex": 3,
    "explanation": "정규화가 진행될수록 테이블이 잘게 쪼개져 조회 시 조인이 늘어나므로 오히려 성능이 저하될 수 있습니다. 이를 보완하기 위해 반정규화(Denormalization)를 수행합니다.",
    "chapter": "정규화",
    "_source": "ai-mock",
    "_origId": "ai-mock-033"
  },
  {
    "id": 10828,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 29,
    "title": "데이터베이스 설계 중 반정규화(De-normalization)를 수행하는 주요 목적으로 가장 거리가 먼 것은?",
    "options": [
      "복잡한 조인(Join) 경로를 단축하여 시스템 조회 성능을 높이기 위해",
      "데이터의 무결성과 일관성을 완벽하게 보장하기 위해",
      "특정 테이블에 접근하는 디스크 I/O가 과도할 때 데이터를 분산시키거나 합치기 위해",
      "집계 혹은 요약 데이터를 미리 계산해 두어 리포팅 조회 속도를 개선하기 위해"
    ],
    "correctIndex": 1,
    "explanation": "반정규화는 성능 향상을 위해 데이터 중복을 일부 허용하는 과정이므로 무결성을 해칠 위험이 오히려 커집니다. 무결성 보장은 정규화의 목적이고, 반정규화는 그 트레이드오프로 성능을 얻는 기법입니다.",
    "chapter": "정규화",
    "_source": "ai-mock",
    "_origId": "ai-mock-034"
  },
  {
    "id": 10829,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 30,
    "title": "다음 제약조건(Constraint) 중 테이블의 특정 컬럼에 NULL 값이 들어가는 것은 허용하되, 입력되는 값들은 서로 중복되지 않아야 함을 보장하는 것은?",
    "options": [
      "UNIQUE",
      "FOREIGN KEY",
      "CHECK",
      "PRIMARY KEY"
    ],
    "correctIndex": 0,
    "explanation": "UNIQUE는 중복 값은 막지만 NULL은 비교 불가이므로 여러 개의 NULL 입력을 허용합니다. PRIMARY KEY는 UNIQUE + NOT NULL 조합이라 NULL을 허용하지 않습니다.",
    "chapter": "DDL",
    "_source": "ai-mock",
    "_origId": "ai-mock-035"
  },
  {
    "id": 10830,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 31,
    "title": "다음 SQL 실행 결과에 대한 설명으로 올바른 것은? (단, TAB1에는 총 10건의 데이터가 있으며 COL1이 NULL인 행이 2건 있다.)",
    "options": [
      "집계 함수에 NULL이 포함되어 연산 에러가 발생한다.",
      "결과는 10, 10 이다.",
      "결과는 8, 8 이다.",
      "결과는 10, 8 이다."
    ],
    "correctIndex": 3,
    "explanation": "COUNT(*)는 NULL 포함 모든 행을 세어 10을 반환합니다. COUNT(COL1)은 COL1이 NULL인 행을 제외하므로 10 - 2 = 8을 반환합니다.",
    "chapter": "그룹 함수",
    "_source": "ai-mock",
    "_origId": "ai-mock-036",
    "references": [
      {
        "type": "sql",
        "code": "SELECT COUNT(*), COUNT(COL1) FROM TAB1;"
      }
    ]
  },
  {
    "id": 10831,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 32,
    "title": "서브쿼리 내부에 ORDER BY 절을 사용할 수 없는 쿼리의 형태는?",
    "options": [
      "인라인 뷰(FROM 절 서브쿼리)",
      "스칼라 서브쿼리(SELECT 절 서브쿼리)",
      "CREATE TABLE ... AS SELECT ... (CTAS 구문)",
      "다중 행 서브쿼리(WHERE 절 서브쿼리 - IN 연산자 등)"
    ],
    "correctIndex": 3,
    "explanation": "WHERE 절 IN 등에서 사용하는 다중 행 서브쿼리는 비교할 집합 자체를 반환하므로 순서가 의미 없으며, 일부 DBMS에서는 ORDER BY 사용 시 오류가 발생할 수 있습니다. 인라인 뷰는 행의 순서가 의미를 가질 수 있어 가능하며, CTAS 구문도 정렬된 결과를 저장하는 용도로 활용 가능합니다.",
    "chapter": "서브쿼리",
    "_source": "ai-mock",
    "_origId": "ai-mock-037"
  },
  {
    "id": 10832,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 33,
    "title": "상관 서브쿼리(Correlated Subquery)에 대한 설명으로 가장 정확한 것은?",
    "options": [
      "상관 서브쿼리는 반드시 인라인 뷰(FROM 절) 형태로만 작성되어야 한다.",
      "서브쿼리가 메인 쿼리의 컬럼을 참조하고 있어, 메인 쿼리의 각 행마다 서브쿼리가 반복적으로 실행된다.",
      "결과집합의 성능을 극대화하기 위해 옵티마이저가 항상 캐싱(Caching)을 수행한다.",
      "메인 쿼리가 실행되기 전 단 한 번만 실행되어 결과를 메인 쿼리에 제공한다."
    ],
    "correctIndex": 1,
    "explanation": "상관 서브쿼리는 서브쿼리 안에서 메인 쿼리의 컬럼을 참조하기 때문에 메인 쿼리의 각 행마다 서브쿼리가 반복 실행됩니다. 비상관 서브쿼리는 한 번만 실행되어 결과를 캐싱하는 것이 일반적입니다.",
    "chapter": "서브쿼리",
    "_source": "ai-mock",
    "_origId": "ai-mock-038"
  },
  {
    "id": 10833,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 34,
    "title": "오라클(Oracle) DBMS에서 시퀀스(Sequence)를 사용할 때 발생하는 현상으로 틀린 것은?",
    "options": [
      "ROLLBACK이 발생하면 추출되었던 시퀀스 번호도 다시 원래 번호로 되돌아간다.",
      "NEXTVAL은 호출할 때마다 설정된 증가치(INCREMENT BY)만큼 새로운 값을 생성한다.",
      "CURRVAL은 현재 세션에서 NEXTVAL을 한 번이라도 호출한 후에만 참조할 수 있다.",
      "CACHE 옵션을 사용하면 메모리에 미리 번호를 할당하여 속도를 높일 수 있지만, 인스턴스 비정상 종료 시 번호 결번이 생길 수 있다."
    ],
    "correctIndex": 0,
    "explanation": "시퀀스는 트랜잭션과 독립적으로 동작하므로 ROLLBACK이 발생해도 한 번 증가한 번호는 되돌아가지 않고 결번(Gap)이 발생합니다.",
    "chapter": "DDL",
    "_source": "ai-mock",
    "_origId": "ai-mock-039"
  },
  {
    "id": 10834,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 35,
    "title": "다음 중 트랜잭션의 특성(ACID)에 대한 설명이 올바르게 짝지어진 것은?",
    "options": [
      "Isolation (격리성) - 트랜잭션이 성공적으로 완료되면 결과는 영구적으로 반영되어야 한다.",
      "Consistency (일관성) - 여러 트랜잭션이 동시에 실행되더라도 서로 영향을 주지 않아야 한다.",
      "Atomicity (원자성) - 트랜잭션 내의 연산은 모두 반영되거나 모두 취소되어야 한다 (All or Nothing).",
      "Durability (영속성) - 트랜잭션 실행 전후의 데이터베이스 무결성 제약조건은 항상 유지되어야 한다."
    ],
    "correctIndex": 2,
    "explanation": "원자성(Atomicity)의 정의는 'All or Nothing'으로 옳습니다. ①은 영속성(Durability), ②는 격리성(Isolation), ④는 일관성(Consistency)에 해당하므로 짝이 맞지 않습니다.",
    "chapter": "트랜잭션과 Null",
    "_source": "ai-mock",
    "_origId": "ai-mock-040"
  },
  {
    "id": 10835,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 36,
    "title": "다음 중 다중 행 서브쿼리와 연산자에 대한 설명으로 가장 올바른 것은?",
    "options": [
      "NOT IN 대신 NOT EXISTS를 사용해도 실행 결과와 내부적인 처리 논리는 완전히 동일하다.",
      "서브쿼리의 결과 중 NULL 값이 하나라도 포함되어 있다면, 메인 쿼리의 결과는 항상 0건이다.",
      "서브쿼리 결과에 NULL이 포함되어 있어도, EMP 테이블의 DEPTNO와 일치하지 않는 데이터는 정상적으로 출력된다.",
      "서브쿼리의 결과가 0건(Empty Set)일 경우, 연산 오류가 발생하여 메인 쿼리가 실패한다."
    ],
    "correctIndex": 1,
    "explanation": "NOT IN은 내부적으로 'AND NOT =' 논리이므로 비교 대상 중 하나라도 NULL이면 전체가 UNKNOWN이 되어 결과가 0건이 됩니다. NOT EXISTS는 행의 존재 여부만 확인하므로 NULL의 영향을 받지 않아 NOT IN과 결과가 다를 수 있습니다.",
    "chapter": "서브쿼리",
    "_source": "ai-mock",
    "_origId": "ai-mock-041",
    "references": [
      {
        "type": "sql",
        "code": "SELECT * FROM EMP WHERE DEPTNO NOT IN (SELECT DEPTNO FROM DEPT WHERE LOC = 'SEOUL');"
      }
    ]
  },
  {
    "id": 10836,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 37,
    "title": "다음 계층형 질의(Hierarchical Query)에 대한 설명 중 틀린 것은?",
    "options": [
      "CONNECT_BY_ROOT 연산자를 사용하면 계층 구조상 최상위(루트) 노드의 해당 컬럼 값을 반환할 수 있다.",
      "SYS_CONNECT_BY_PATH 함수는 루트 노드부터 현재 노드까지의 경로를 지정한 구분자와 함께 문자열로 반환한다.",
      "ORDER SIBLINGS BY 절을 사용하면 계층 구조의 형태(트리)를 훼손하지 않고, 동일한 부모를 가진 형제 노드 사이에서만 정렬을 수행한다.",
      "CONNECT_BY_ISCYCLE 가상 컬럼은 현재 행이 자식 노드를 가지고 있는지(단말 노드가 아닌지) 여부를 1과 0으로 반환한다."
    ],
    "correctIndex": 3,
    "explanation": "단말 노드 여부를 반환하는 가상 컬럼은 CONNECT_BY_ISLEAF입니다. CONNECT_BY_ISCYCLE은 데이터의 무한 순환(Cycle) 발생 여부를 반환합니다.",
    "chapter": "계층형 질의",
    "_source": "ai-mock",
    "_origId": "ai-mock-042"
  },
  {
    "id": 10837,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 38,
    "title": "다음 윈도우 함수의 프레임(Frame) 지정 방식 중 그 결과가 나머지 셋과 다를 가능성이 가장 높은 것은? (단, SALARY 컬럼에는 중복된 값이 존재하며 오름차순 정렬한다.)",
    "options": [
      "ORDER BY SALARY RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW",
      "ORDER BY SALARY",
      "ORDER BY SALARY ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW",
      "ORDER BY SALARY RANGE UNBOUNDED PRECEDING"
    ],
    "correctIndex": 2,
    "explanation": "RANGE는 정렬 키 값 기준이라 동일 SALARY 값을 가진 행을 한 번에 묶어 누적합니다. 반면 ROWS는 물리적 행 순서대로 하나씩 누적하므로 동일 값이 있을 때 RANGE 방식과 결과가 달라집니다. ①·②(생략 시 기본값 RANGE)·④는 모두 RANGE 기반이라 같은 결과를, ③ ROWS는 다른 결과를 냅니다.",
    "chapter": "윈도우 함수",
    "_source": "ai-mock",
    "_origId": "ai-mock-043"
  },
  {
    "id": 10838,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 39,
    "title": "다음 중 GROUPING_ID 함수에 대한 설명으로 가장 적절한 것은?",
    "options": [
      "GROUP BY 절에 명시된 컬럼들의 고유한 식별자(Primary Key) 값을 추출한다.",
      "데이터 집합에서 무작위로 그룹 아이디를 부여하여 데이터를 분할할 때 사용한다.",
      "ROLLUP이나 CUBE에 의해 소계가 계산된 행인지 판별하여 0 또는 1을 반환한다.",
      "여러 개의 인자를 받아 각 컬럼의 GROUPING 함수 반환값(0 또는 1)을 연결한 이진수를 십진수로 변환하여 반환한다."
    ],
    "correctIndex": 3,
    "explanation": "GROUPING_ID는 여러 컬럼의 GROUPING 결과(0/1)를 비트맵으로 연결한 뒤 십진수로 변환해 반환합니다. 어떤 조합의 소계인지 한 번에 식별할 수 있어 ROLLUP·CUBE 결과 분석에 유용합니다. ③은 단일 컬럼에 대한 GROUPING 함수의 동작입니다.",
    "chapter": "그룹 함수",
    "_source": "ai-mock",
    "_origId": "ai-mock-045"
  },
  {
    "id": 10839,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 40,
    "title": "스칼라 서브쿼리(Scalar Subquery) 실행 시 런타임 오류(에러)가 발생하는 경우는?",
    "options": [
      "서브쿼리의 실행 결과가 0건(Empty Set)일 때",
      "서브쿼리의 실행 결과가 2건 이상의 행(Row)을 반환할 때",
      "서브쿼리의 결과 값이 메인 쿼리의 출력 데이터 타입과 자동으로 호환될 때",
      "서브쿼리 내부에서 메인 쿼리의 컬럼을 참조하는 상관 서브쿼리 형태로 작성되었을 때"
    ],
    "correctIndex": 1,
    "explanation": "스칼라 서브쿼리는 단일 행·단일 컬럼 값만 반환해야 하므로 2건 이상 반환되면 런타임 오류가 발생합니다. 0건은 NULL로 처리될 뿐 오류는 아닙니다.",
    "chapter": "서브쿼리",
    "_source": "ai-mock",
    "_origId": "ai-mock-046"
  },
  {
    "id": 10840,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 41,
    "title": "집합 연산자(Set Operator) UNION과 UNION ALL의 차이점에 대한 설명으로 올바른 것은?",
    "options": [
      "UNION은 중복된 행을 하나로 합쳐서 출력하지만, UNION ALL은 두 질의의 결과를 중복 제거 없이 단순히 이어붙여 출력한다.",
      "집합 연산자를 사용할 때는 양쪽 쿼리의 SELECT 절 컬럼 개수가 달라도 데이터 타입만 같으면 정상 실행된다.",
      "출력되는 컬럼의 헤더명(Alias)은 두 번째(아래쪽) 쿼리에 명시된 컬럼명을 따른다.",
      "UNION ALL은 중복 데이터를 제거하기 위해 내부적으로 Sort 작업을 수행하므로 UNION보다 성능이 떨어진다."
    ],
    "correctIndex": 0,
    "explanation": "UNION은 중복 제거를 위해 내부 정렬·중복 제거 단계가 있어 일반적으로 UNION ALL보다 느립니다. 컬럼 개수와 위치별 데이터 타입은 양쪽 쿼리가 일치해야 하며, 결과 컬럼명은 첫 번째(위쪽) 쿼리의 컬럼명을 따릅니다.",
    "chapter": "집합 연산자",
    "_source": "ai-mock",
    "_origId": "ai-mock-047"
  },
  {
    "id": 10841,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 42,
    "title": "NULL 데이터가 포함된 그룹 함수 연산의 결과에 대한 설명으로 틀린 것은? (단, T1 테이블의 COL1 값은 [10, 20, NULL, 30] 이다.)",
    "options": [
      "COUNT(*)의 결과는 4이다.",
      "AVG(COL1)의 결과는 15이다.",
      "COUNT(COL1)의 결과는 3이다.",
      "SUM(COL1)의 결과는 60이다."
    ],
    "correctIndex": 1,
    "explanation": "AVG는 NULL을 자동으로 제외하므로 분모가 4가 아닌 3입니다. SUM(60) ÷ COUNT(COL1)(3) = 20이 반환됩니다.",
    "chapter": "그룹 함수",
    "_source": "ai-mock",
    "_origId": "ai-mock-049"
  },
  {
    "id": 10842,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 43,
    "title": "NATURAL JOIN에 대한 설명으로 가장 거리가 먼 것은?",
    "options": [
      "조인 조건인 ON 절이나 USING 절을 함께 명시할 수 없다.",
      "SELECT 절에서 조인 기준이 되는 공통 컬럼 앞에는 테이블 접두사(Alias)를 명시해야 한다.",
      "동일한 이름을 가진 컬럼들의 데이터 타입이 서로 다르면 실행 시 오류가 발생한다.",
      "두 테이블 간에 동일한 이름을 가진 모든 컬럼들에 대해 동등(=) 조인을 수행한다."
    ],
    "correctIndex": 1,
    "explanation": "NATURAL JOIN과 USING 절의 공통 컬럼은 두 테이블의 식별자를 잃고 단일 개념으로 통합되므로, 테이블 접두사(Alias)를 붙이면 오류가 발생합니다.",
    "chapter": "조인",
    "_source": "ai-mock",
    "_origId": "ai-mock-050"
  },
  {
    "id": 10843,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 44,
    "title": "다음 중 MERGE 구문의 특징으로 틀린 것은?",
    "options": [
      "여러 번 테이블을 조회하고 처리해야 하는 기존의 절차적 로직을 단순화하여 성능 향상에 도움을 준다.",
      "ON 절에 사용된 조인 조건 컬럼은 MATCHED (UPDATE) 절에서 그 값을 변경할 수 있다.",
      "조건에 따라 데이터를 삽입(INSERT)하거나 수정(UPDATE)하는 단일 SQL 문장이다.",
      "필요에 따라 WHEN MATCHED 절이나 WHEN NOT MATCHED 절 중 하나만 선택적으로 사용할 수 있다."
    ],
    "correctIndex": 1,
    "explanation": "MERGE의 ON 절에 사용된 조인 키 컬럼은 매칭 기준이 되는 열쇠이므로 UPDATE 구문으로 값을 변경할 수 없으며 시도 시 오류가 발생합니다.",
    "chapter": "DML",
    "_source": "ai-mock",
    "_origId": "ai-mock-052"
  },
  {
    "id": 10844,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 45,
    "title": "TRUNCATE 명령어와 DELETE 명령어의 차이에 대한 설명으로 가장 적절하지 않은 것은?",
    "options": [
      "DELETE는 삭제된 행 단위로 Redo/Undo 로그를 남기지만, TRUNCATE는 테이블의 구조 자체를 비우므로 로그를 남기지 않아 속도가 빠르다.",
      "DELETE 명령 실행 후 COMMIT을 하기 전이라면 ROLLBACK을 통해 데이터를 복구할 수 있다.",
      "TRUNCATE 명령도 삭제 직후에 ROLLBACK 명령어를 입력하면 언제든지 데이터를 이전 상태로 되돌릴 수 있다.",
      "TRUNCATE는 DDL이고, DELETE는 DML 명령어이다."
    ],
    "correctIndex": 2,
    "explanation": "TRUNCATE는 DDL 명령어이므로 실행 즉시 자동 커밋(Auto Commit)이 발생하여 ROLLBACK으로 복구할 수 없습니다. DELETE는 DML이므로 COMMIT 전에는 ROLLBACK이 가능합니다.",
    "chapter": "DDL",
    "_source": "ai-mock",
    "_origId": "ai-mock-053"
  },
  {
    "id": 10845,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 46,
    "title": "분석 함수 중 KEEP (DENSE_RANK FIRST/LAST ORDER BY ...) 구문의 용도로 올바른 것은?",
    "options": [
      "동일한 값을 가진 데이터 간에 고유한 일련번호를 무작위로 부여하기 위해 사용된다.",
      "데이터의 백분위수(Percentile)를 구하여 상위 N% 에 해당하는 값을 계산한다.",
      "정렬된 데이터를 기반으로 현재 행의 앞선 행(LAG)이나 뒤따르는 행(LEAD)의 데이터를 가져온다.",
      "전체 집합을 그룹으로 나눈 뒤, 그룹 내에서 정렬 기준에 따라 가장 처음(또는 마지막) 행의 특정 컬럼 값을 추출한다."
    ],
    "correctIndex": 3,
    "explanation": "KEEP (DENSE_RANK FIRST/LAST ORDER BY ...) 구문은 그룹별로 정렬 기준의 첫 행(또는 마지막 행)에 위치한 데이터의 특정 컬럼 값을 추출하는 데 사용됩니다. 부서별 연봉 1위 사원의 이름을 가져오는 등의 활용이 대표적입니다.",
    "chapter": "윈도우 함수",
    "_source": "ai-mock",
    "_origId": "ai-mock-054"
  },
  {
    "id": 10846,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 47,
    "title": "정규화(Normalization) 과정과 관련된 설명 중 틀린 것은?",
    "options": [
      "제2정규형(2NF)은 복합키로 구성된 주식별자에 대해 일부 속성에만 종속되는 부분 함수 종속을 제거하는 것이다.",
      "제3정규형(3NF)은 식별자가 아닌 일반 속성 간에 발생하는 이행적 함수 종속(A->B, B->C일 때 A->C)을 제거하는 것이다.",
      "제1정규형(1NF)은 모든 속성이 원자값(더 이상 분해되지 않는 단위)을 가져야 한다는 원칙이다.",
      "정규화가 진행될수록 테이블이 잘게 쪼개져 항상 데이터 조회(SELECT) 성능이 향상된다."
    ],
    "correctIndex": 3,
    "explanation": "테이블이 분할되면 조회 시 조인 연산이 늘어나므로 오히려 조회 성능이 저하될 수 있습니다. 이러한 부작용을 보완하기 위해 반정규화(Denormalization)를 수행합니다.",
    "chapter": "정규화",
    "_source": "ai-mock",
    "_origId": "ai-mock-055"
  },
  {
    "id": 10847,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 48,
    "title": "다음 중 NULL 값 처리를 위한 함수들의 결과 예측으로 틀린 것은? (모든 함수는 Oracle 기준)",
    "options": [
      "NVL(NULL, 100) -> 100",
      "NVL2('A', 'B', 'C') -> 'B'",
      "NULLIF('A', 'A') -> 'A'",
      "COALESCE(NULL, NULL, 50, 100) -> 50"
    ],
    "correctIndex": 2,
    "explanation": "NULLIF는 두 인수가 같으면 NULL을 반환하고 다르면 첫 번째 인수를 반환합니다. NULLIF('A', 'A')는 두 값이 같으므로 NULL을 반환합니다.",
    "chapter": "함수",
    "_source": "ai-mock",
    "_origId": "ai-mock-057"
  },
  {
    "id": 10848,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 49,
    "title": "다음 SQL 문의 실행 순서(Logical Processing Order)로 가장 올바른 것은?",
    "options": [
      "FROM -> WHERE -> SELECT -> GROUP BY -> HAVING -> ORDER BY",
      "SELECT -> FROM -> WHERE -> GROUP BY -> HAVING -> ORDER BY",
      "FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY",
      "FROM -> GROUP BY -> HAVING -> WHERE -> SELECT -> ORDER BY"
    ],
    "correctIndex": 2,
    "explanation": "SQL의 논리적 실행 순서는 FROM(테이블 참조) → WHERE(행 필터) → GROUP BY(그룹화) → HAVING(그룹 필터) → SELECT(컬럼 추출) → ORDER BY(정렬)입니다. 이 때문에 SELECT 별칭은 WHERE에서는 못 쓰고 ORDER BY에서는 쓸 수 있습니다.",
    "chapter": "관계형 DB와 SELECT",
    "_source": "ai-mock",
    "_origId": "ai-mock-058"
  },
  {
    "id": 10849,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 50,
    "title": "트랜잭션의 특징 중 일관성(Consistency)에 대한 설명으로 올바른 것은?",
    "options": [
      "트랜잭션이 성공적으로 완료되면, 그 결과는 영구적으로 데이터베이스에 보존되어야 한다.",
      "트랜잭션을 구성하는 연산들은 모두 정상적으로 실행되거나 아예 하나도 실행되지 않아야 한다.",
      "트랜잭션 실행 전후의 데이터베이스 상태는 명시된 모든 무결성 제약조건을 항상 만족해야 한다.",
      "여러 트랜잭션이 동시에 수행될 때, 서로의 연산에 끼어들거나 영향을 주어서는 안 된다."
    ],
    "correctIndex": 2,
    "explanation": "일관성(Consistency)은 트랜잭션 실행 전후로 데이터베이스가 모든 무결성 제약조건을 만족하는 상태로 유지되어야 한다는 특성입니다. ①은 영속성, ②는 원자성, ④는 격리성에 대한 설명입니다.",
    "chapter": "트랜잭션과 Null",
    "_source": "ai-mock",
    "_origId": "ai-mock-059"
  },
  {
    "id": 10850,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 51,
    "title": "UNIQUE 제약조건에 대한 설명 중 틀린 것은?",
    "options": [
      "UNIQUE 제약조건이 설정된 컬럼은 자동으로 NOT NULL 제약조건이 부여된다.",
      "해당 컬럼에 동일한 값이 중복되어 저장되는 것을 방지한다.",
      "NULL 값은 비교 대상이 아니므로 하나의 테이블 내에 여러 개의 NULL 값이 삽입되는 것을 허용한다.",
      "테이블 내에서 여러 개의 컬럼을 조합하여(Composite) 하나의 UNIQUE 제약을 생성할 수 있다."
    ],
    "correctIndex": 0,
    "explanation": "UNIQUE 제약은 NULL 삽입을 허용하므로 NOT NULL이 자동으로 부여되지 않습니다. UNIQUE와 NOT NULL이 결합된 형태가 PRIMARY KEY입니다.",
    "chapter": "DDL",
    "_source": "ai-mock",
    "_origId": "ai-mock-060"
  },
  {
    "id": 10851,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 52,
    "title": "다음의 PREV_SAL 은 어떤 윈도우 함수를 사용해야 하는가?",
    "options": [
      "LEAD",
      "LAG",
      "NTILE",
      "LAST_VALUE"
    ],
    "correctIndex": 1,
    "explanation": "LAG() 윈도우 함수는 이전 행의 몇 번째 행 값을 가지고 올 수 있다.",
    "chapter": "윈도우 함수",
    "_source": "cbt-mock",
    "_origId": "cbt-001",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 1,
    "references": [
      {
        "type": "table",
        "caption": "결과 테이블",
        "headers": [
          "ENAME",
          "HIREDATE",
          "SAL",
          "PREV_SAL"
        ],
        "rows": [
          [
            "ALLEN",
            "20-FEB-81",
            "1600",
            ""
          ],
          [
            "WARD",
            "22-FEB-81",
            "1250",
            "1600"
          ],
          [
            "TURNER",
            "08-SEP-81",
            "1500",
            "1250"
          ],
          [
            "MARTIN",
            "28-SEP-81",
            "1250",
            "1500"
          ]
        ]
      }
    ]
  },
  {
    "id": 10852,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 53,
    "title": "다음 SQL 실행 시, 최종 출력되는 결과로 가장 알맞은 것은?",
    "options": [
      "103",
      "101, 104",
      "102, 103",
      "102, 103, 104"
    ],
    "correctIndex": 2,
    "explanation": "TB_CUSTOMER 에서 CITY=SEOUL 인 CUST_ID 는 1, 4 이다. WHERE CUST_ID NOT IN (1, 4) 로 TB_ORDER 의 ORDER_ID 102, 103 이 출력된다.",
    "chapter": "서브쿼리",
    "_source": "cbt-mock",
    "_origId": "cbt-002",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 2,
    "references": [
      {
        "type": "table",
        "caption": "[TB_CUSTOMER] 테이블",
        "headers": [
          "CUST_ID",
          "NAME",
          "CITY"
        ],
        "rows": [
          [
            "1",
            "Kim",
            "SEOUL"
          ],
          [
            "2",
            "Lee",
            "BUSAN"
          ],
          [
            "3",
            "Park",
            "INCHEON"
          ],
          [
            "4",
            "Choi",
            "SEOUL"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "[TB_ORDER] 테이블",
        "headers": [
          "ORDER_ID",
          "CUST_ID",
          "AMOUNT"
        ],
        "rows": [
          [
            "101",
            "1",
            "1000"
          ],
          [
            "102",
            "2",
            "2000"
          ],
          [
            "103",
            "3",
            "3000"
          ],
          [
            "104",
            "4",
            "4000"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT ORDER_ID\nFROM   TB_ORDER\nWHERE  CUST_ID NOT IN (\n  SELECT CUST_ID\n  FROM   TB_CUSTOMER\n  WHERE  CITY = 'SEOUL'\n);"
      }
    ]
  },
  {
    "id": 10853,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 54,
    "title": "다음 SQL 실행 시 최종 출력되는 결과로 가장 알맞은 것은?",
    "options": [
      "Pen",
      "Pencil",
      "Book",
      "모두 출력"
    ],
    "correctIndex": 2,
    "explanation": "WHERE 조건이 서브쿼리의 결과와 같은 데이터를 조회한다. 최고가 1000인 Book 만 조건에 부합.",
    "chapter": "서브쿼리",
    "_source": "cbt-mock",
    "_origId": "cbt-003",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 3,
    "references": [
      {
        "type": "table",
        "caption": "[PRODUCTS] 테이블",
        "headers": [
          "NO",
          "NAME",
          "PRICE"
        ],
        "rows": [
          [
            "1",
            "Pen",
            "500"
          ],
          [
            "2",
            "Pencil",
            "300"
          ],
          [
            "3",
            "Book",
            "1000"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT NAME\nFROM   PRODUCTS\nWHERE  PRICE = (SELECT MAX(PRICE) FROM PRODUCTS);"
      }
    ]
  },
  {
    "id": 10854,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 55,
    "title": "두 개 릴레이션 Student 와 Department 가 있을 때, 질의문 \"SELECT * FROM Student s, Department d WHERE s.dept > 100;\" 을 수행하시오. 결과의 차수(Degree) 와 카디널리티(Cardinality) 는 얼마인가? (단, Student 는 5 개 속성, Department 는 3 개 속성을 가진다)",
    "options": [
      "차수 5, 카디널리티 3",
      "차수 5, 카디널리티 2",
      "차수 8, 카디널리티 9",
      "차수 8, 카디널리티 3"
    ],
    "correctIndex": 2,
    "explanation": "차수(Degree) 는 결과 컬럼 수 — Student 5 + Department 3 = 8. 카디널리티는 결과 행 수 — 조건 없는 카티션 곱 5×3=15 이지만 WHERE s.dept>100 으로 Student 측이 3 행으로 줄어 3×3=9 행이 된다.",
    "chapter": "관계형 DB와 SELECT",
    "_source": "cbt-mock",
    "_origId": "cbt-004",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 4,
    "references": [
      {
        "type": "table",
        "caption": "[Student] 테이블 (5 행)",
        "headers": [
          "학번",
          "이름",
          "주소",
          "점수",
          "dept"
        ],
        "rows": [
          [
            "9802",
            "홍길동",
            "서울",
            "90",
            "100"
          ],
          [
            "9802",
            "김철수",
            "인천",
            "80",
            "200"
          ],
          [
            "9803",
            "박지원",
            "부산",
            "80",
            "100"
          ],
          [
            "9804",
            "이지원",
            "인천",
            "70",
            "300"
          ],
          [
            "9805",
            "김지원",
            "서울",
            "75",
            "100"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "[Department] 테이블 (3 행)",
        "headers": [
          "학과코드",
          "학과명",
          "학과위치"
        ],
        "rows": [
          [
            "100",
            "전산",
            "인천관"
          ],
          [
            "200",
            "영문",
            "인문관"
          ],
          [
            "300",
            "수학",
            "자연관"
          ]
        ]
      }
    ]
  },
  {
    "id": 10855,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 56,
    "title": "다음 중 자신과 성별이 같은 부양가족을 가진 직원의 이름을 검색하는 질의를 SQL 로 적절하게 표현한 것은?",
    "options": [
      "SELECT E.이름 FROM 직원 AS E WHERE E.이름 LIKE (SELECT 이름 FROM 부양가족 WHERE E.사번 = 사번);",
      "SELECT E.이름 FROM 직원 AS E WHERE NOT EXISTS (SELECT * FROM 부양가족 WHERE E.사번 = 사번);",
      "SELECT E.이름 FROM 직원 AS E WHERE EXISTS (SELECT * FROM 부양가족 WHERE E.사번 = 사번 AND E.성별 = 성별);",
      "SELECT E.이름 FROM 직원 AS E WHERE NOT EXISTS (SELECT * FROM 부양가족 WHERE E.사번 = 사번 AND E.성별 = 성별);"
    ],
    "correctIndex": 2,
    "explanation": "EXISTS 와 상관 서브쿼리로 직원과 사번이 같고 성별도 같은 부양가족이 존재하는지 확인. ② NOT EXISTS 는 정반대 의미, ① LIKE 는 부적절, ④ NOT EXISTS 는 \"같은 성별 부양가족이 없는\" 직원 의미라 정반대.",
    "chapter": "서브쿼리",
    "_source": "cbt-mock",
    "_origId": "cbt-005",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 5
  },
  {
    "id": 10856,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 57,
    "title": "다음 테이블과 SQL 을 기준으로 실행 결과가 올바른 것은?",
    "options": [
      "Kim, Lee, Park, Jang 4 행 (Kim/Park/Lee 순서)",
      "Kim, Park, Lee, Jang 4 행 (정답 시나리오)",
      "Kim, Lee, Park, Jang 4 행 (다른 순서)",
      "Kim, Jang 2 행만"
    ],
    "correctIndex": 1,
    "explanation": "AND 가 OR 보다 우선순위가 높으므로 GRADE='A' OR (GRADE='B' AND STATUS='ACTIVE') 로 평가된다. GRADE=A 인 Kim·Lee·Park 3 행 + GRADE=B AND STATUS=ACTIVE 인 Jang 1 행 = 총 4 행.",
    "chapter": "WHERE",
    "_source": "cbt-mock",
    "_origId": "cbt-006",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 6,
    "references": [
      {
        "type": "table",
        "caption": "[TB_USER] 테이블",
        "headers": [
          "ID",
          "NAME",
          "GRADE",
          "STATUS"
        ],
        "rows": [
          [
            "1",
            "Kim",
            "A",
            "ACTIVE"
          ],
          [
            "2",
            "Lee",
            "A",
            "INACTIVE"
          ],
          [
            "3",
            "Park",
            "A",
            "INACTIVE"
          ],
          [
            "4",
            "Choi",
            "C",
            "ACTIVE"
          ],
          [
            "5",
            "Jang",
            "B",
            "ACTIVE"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT NAME, GRADE, STATUS\nFROM   TB_USER\nWHERE  GRADE = 'A' OR GRADE = 'B' AND STATUS = 'ACTIVE';"
      }
    ]
  },
  {
    "id": 10857,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 58,
    "title": "다음 SQL 실행 결과로 가장 알맞은 것은?",
    "options": [
      "3, 6000, 2000",
      "4, 6000, 2000",
      "3, 6000, 1500",
      "3, NULL, 2000"
    ],
    "correctIndex": 0,
    "explanation": "집계 함수는 NULL 을 무시한다. COUNT(SALARY) 는 NULL 제외 3, SUM(SALARY) = 1000+2000+3000 = 6000, AVG(SALARY) = 6000/3 = 2000.",
    "chapter": "그룹 함수",
    "_source": "cbt-mock",
    "_origId": "cbt-007",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 7,
    "references": [
      {
        "type": "table",
        "caption": "[EMPLOYEE] 테이블",
        "headers": [
          "ID",
          "NAME",
          "SALARY"
        ],
        "rows": [
          [
            "1",
            "A",
            "1000"
          ],
          [
            "2",
            "B",
            "2000"
          ],
          [
            "3",
            "C",
            "NULL"
          ],
          [
            "4",
            "D",
            "3000"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT COUNT(SALARY), SUM(SALARY), AVG(SALARY)\nFROM   EMPLOYEE;"
      }
    ]
  },
  {
    "id": 10858,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 59,
    "title": "데이터 모델링에 대한 설명 중 알맞은 것은?",
    "options": [
      "데이터 모델링은 3 가지 구성요소로 Process, Attributes, Relationships 가 있다.",
      "실제로 데이터베이스를 구축할 때 도구로 사용된다. 객체 지향 데이터 모델링은 객체와 관계로 구성된다.",
      "물리 모델링 → 논리 모델링 → 개념 모델링 단계로 갈수록 추상적이다.",
      "논리 모델링은 외부에는 종속적이지만 데이터베이스에 종속적이지 않다."
    ],
    "correctIndex": 3,
    "explanation": "데이터 모델의 3 구성요소는 Things, Attributes, Relationships 이다. 객체 지향 모델링과 별개. 단계는 개념 → 논리 → 물리 순. 논리 모델링은 외부 사용자 관점에서는 종속적이지만 특정 DBMS 에 종속적이지 않다.",
    "chapter": "데이터 모델 개념",
    "_source": "cbt-mock",
    "_origId": "cbt-008",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 8
  },
  {
    "id": 10859,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 60,
    "title": "다음 중 정규화의 이점으로 적절하지 않은 것은?",
    "options": [
      "데이터 중복 최소화",
      "자주 갱신 발생",
      "이상 현상 제거",
      "무결성 보장"
    ],
    "correctIndex": 1,
    "explanation": "정규화는 데이터 구조 무결성을 통해 효율을 높이며, 자주 갱신은 JOIN 을 증가시켜 성능을 저하시킬 수 있는 단점이다.",
    "chapter": "정규화",
    "_source": "cbt-mock",
    "_origId": "cbt-009",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 9
  },
  {
    "id": 10860,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 61,
    "title": "다음은 ERD(Entity Relationship Diagram) 작성 순서이다. 올바른 것을 고르시오.\n\n가) 엔터티를 그린다\n나) 엔터티를 적절하게 배치한다\n다) 엔터티 간의 관계를 설정한다\n라) 관계명을 기술한다\n마) 관계의 참여도를 기술한다\n바) 관계의 필수 여부를 기술한다",
    "options": [
      "나) - 가) - 다) - 라) - 마) - 바)",
      "가) - 나) - 다) - 마) - 라) - 바)",
      "나) - 가) - 다) - 라) - 마) - 바)",
      "가) - 나) - 다) - 라) - 마) - 바)"
    ],
    "correctIndex": 1,
    "explanation": "ERD 작성 순서는 엔터티 그리기 → 적절히 배치 → 관계 설정 → 관계 참여도 (카디널리티) 기술 → 관계명 기술 → 관계 필수 여부 (선택사양) 기술 순. 정답 ② 가)나)다)마)라)바).",
    "chapter": "관계",
    "_source": "cbt-mock",
    "_origId": "cbt-010",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 10
  },
  {
    "id": 10861,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 62,
    "title": "다음 중 해시 조인(Hash Join) 에 대한 설명으로 올바르지 않은 것은?",
    "options": [
      "해시 조인은 해시 함수를 사용하여 주소를 찾으므로 조인을 수행한다.",
      "해시 조인을 할 때는 선행 테이블의 크기가 작아야 한다.",
      "해시 조인은 CPU 연산이 많이 발생한다.",
      "해시 조인은 랜덤 액세스(Random Access) 로 인해 비효율적이다."
    ],
    "correctIndex": 3,
    "explanation": "해시 조인은 해시 테이블을 메모리에 만들어 매칭하므로 랜덤 액세스가 발생하지 않고 순차 처리된다. 랜덤 액세스가 많은 것은 Nested Loop 조인의 특성이다.",
    "chapter": "조인",
    "_source": "cbt-mock",
    "_origId": "cbt-011",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 11
  },
  {
    "id": 10862,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 63,
    "title": "다음 SQL 실행 결과로 가장 알맞은 것은?",
    "options": [
      "NAME, SALARY 컬럼 — Kim 3000, Lee 4000, Park 0",
      "NAME, SALARY 컬럼 — Kim 3000, Lee 4000, Park NULL",
      "NAME, SALARY 컬럼 — Kim 0, Lee 0, Park 0",
      "NAME, NVL(SALARY,0) 컬럼 — Kim 3000, Lee 4000, Park 0"
    ],
    "correctIndex": 0,
    "explanation": "NVL 함수는 NULL 을 대체하므로 Park 의 SALARY 는 0 으로 출력된다. 또한 AS 를 이용해서 별칭을 SALARY 로 주었으므로 컬럼이 각각 NAME, SALARY 로 표현되어야 한다.",
    "chapter": "함수",
    "_source": "cbt-mock",
    "_origId": "cbt-012",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 12,
    "references": [
      {
        "type": "table",
        "caption": "[EMP] 테이블",
        "headers": [
          "ID",
          "NAME",
          "SALARY"
        ],
        "rows": [
          [
            "1",
            "Kim",
            "3000"
          ],
          [
            "2",
            "Lee",
            "4000"
          ],
          [
            "3",
            "Park",
            "NULL"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT NAME, NVL(SALARY, 0) AS SALARY\nFROM   EMP;"
      }
    ]
  },
  {
    "id": 10863,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 64,
    "title": "다음 SQL 실행 결과로 가장 알맞은 것은?",
    "options": [
      "A=PASS, B=FAIL, C=NO DATA",
      "A=PASS, B=NO DATA, C=FAIL",
      "A=FAIL, B=PASS, C=NO DATA",
      "A=NO DATA, B=PASS, C=FAIL"
    ],
    "correctIndex": 0,
    "explanation": "CASE 식은 위에서 아래로 조건을 순차적으로 평가한다. A(85) ≥ 80 이므로 PASS. B(72) 는 80 미만이고 NULL 이 아니므로 ELSE FAIL. C(NULL) 은 NULL ≥ 80 비교 불가, NULL IS NULL 만족하므로 NO DATA.",
    "chapter": "함수",
    "_source": "cbt-mock",
    "_origId": "cbt-013",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 13,
    "references": [
      {
        "type": "table",
        "caption": "[SCORE] 테이블",
        "headers": [
          "STUDENT",
          "SCORE"
        ],
        "rows": [
          [
            "A",
            "85"
          ],
          [
            "B",
            "72"
          ],
          [
            "C",
            "NULL"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT STUDENT,\n       CASE\n         WHEN SCORE >= 80 THEN 'PASS'\n         WHEN SCORE IS NULL THEN 'NO DATA'\n         ELSE 'FAIL'\n       END AS RESULT\nFROM   SCORE;"
      }
    ]
  },
  {
    "id": 10864,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 65,
    "title": "다음 중 아래 테이블 정의와 인덱스 구조를 참고하여, 인덱스를 효율적으로 액세스할 수 없는 검색조건을 고르시오.",
    "options": [
      "WHERE 주문번호 BETWEEN 1 AND 10",
      "WHERE 주문자명 LIKE '%홍길동%'",
      "WHERE 주문일자 >= '20181201'",
      "WHERE 주문일자 = '20181201'"
    ],
    "correctIndex": 1,
    "explanation": "LIKE 패턴이 '%' 로 시작하면 인덱스의 정렬 순서를 활용할 수 없어 인덱스 풀 스캔 또는 테이블 풀 스캔이 발생한다. =, >=, BETWEEN 은 인덱스 범위 스캔으로 효율적 처리 가능.",
    "chapter": "WHERE",
    "_source": "cbt-mock",
    "_origId": "cbt-014",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 14,
    "references": [
      {
        "type": "sql",
        "code": "CREATE TABLE 주문 (\n  주문번호  INT          NOT NULL,\n  주문자명  VARCHAR(40)  NULL,\n  주문금액  MONEY        NULL,\n  주문일자  VARCHAR(8)   NOT NULL\n);\n\nCREATE UNIQUE INDEX 주문_pk   ON 주문 (주문번호);\nCREATE INDEX        주문_ind1 ON 주문 (주문자명);\nCREATE INDEX        주문_ind2 ON 주문 (주문일자, 주문금액);"
      }
    ]
  },
  {
    "id": 10865,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 66,
    "title": "다음 중 식별자(Identifier) 로 가장 부적절한 속성은?",
    "options": [
      "사번",
      "주민등록번호",
      "학번",
      "이메일 수신 여부 (Y/N)"
    ],
    "correctIndex": 3,
    "explanation": "식별자는 유일성을 보장해야 한다. 이메일 수신 여부는 Y, N 만 가능해 여러 번 입력될 수 있으므로 식별자로 적합하지 않다.",
    "chapter": "식별자",
    "_source": "cbt-mock",
    "_origId": "cbt-015",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 15
  },
  {
    "id": 10866,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 67,
    "title": "다음 중 절차형 SQL 을 이용하여 주로 만드는 것이 아닌 것은?",
    "options": [
      "PROCEDURE",
      "TRIGGER",
      "BUILT-IN FUNCTION",
      "USER DEFINED FUNCTION"
    ],
    "correctIndex": 2,
    "explanation": "절차형 SQL 은 사용자가 작성·정의하는 PROCEDURE, TRIGGER, USER DEFINED FUNCTION 을 만들 수 있다. BUILT-IN FUNCTION 은 시스템 내장 함수로 절차형 SQL 작성 대상이 아니다.",
    "chapter": "절차형 SQL",
    "_source": "cbt-mock",
    "_origId": "cbt-016",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 16
  },
  {
    "id": 10867,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 68,
    "title": "다음 주어진 테이블에 대해서 아래와 같은 결괏값이 반환되도록 아래 SQL 문의 빈칸에 들어갈 것을 고르시오.",
    "options": [
      "MAX(COL2), MIN(COL2), SUM(COL1)",
      "MAX(COL1), MIN(COL2), SUM(COL2)",
      "MAX(COL1), MIN(COL2), SUM(COL1)",
      "MIN(COL1), MAX(COL2), MAX(COL1)"
    ],
    "correctIndex": 2,
    "explanation": "A 속성은 COL1 의 최댓값 (12), B 속성은 COL2 의 최솟값 (0), C 속성은 COL1 속성의 합 (NULL+0+10+11+12=33) 이다.",
    "chapter": "그룹 함수",
    "_source": "cbt-mock",
    "_origId": "cbt-017",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 17,
    "references": [
      {
        "type": "table",
        "caption": "[SQLD_29] 테이블",
        "headers": [
          "COL1",
          "COL2",
          "COL3"
        ],
        "rows": [
          [
            "NULL",
            "0",
            "30"
          ],
          [
            "0",
            "NULL",
            "0"
          ],
          [
            "10",
            "20",
            "NULL"
          ],
          [
            "11",
            "21",
            "31"
          ],
          [
            "12",
            "22",
            "32"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "[결과]",
        "headers": [
          "A",
          "B",
          "C"
        ],
        "rows": [
          [
            "12",
            "0",
            "33"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT (   ) AS A,\n       (   ) AS B,\n       (   ) AS C\nFROM   SQLD_29;"
      }
    ]
  },
  {
    "id": 10868,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 69,
    "title": "다음 SQL 문의 실행 결과는 무엇인가?",
    "options": [
      "1",
      "2",
      "3",
      "NULL"
    ],
    "correctIndex": 1,
    "explanation": "COALESCE 함수는 NULL 이 아닌 첫 번째 값을 리턴하는 함수이다. 위 문제에서 첫 번째는 NULL 이고 두 번째는 '2' 이다. 따라서 '2' 가 리턴된다.",
    "chapter": "함수",
    "_source": "cbt-mock",
    "_origId": "cbt-018",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 18,
    "references": [
      {
        "type": "sql",
        "code": "SELECT COALESCE(NULL, '2', '1') FROM DUAL;"
      }
    ]
  },
  {
    "id": 10869,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 70,
    "title": "다음 트랜잭션 처리 결과로 최종 테이블에 남는 데이터의 개수는? (단, SQL Server 환경이다.)",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correctIndex": 2,
    "explanation": "INSERT 1 → SAVEPOINT S1 → INSERT 2 → ROLLBACK TO S1 (INSERT 2 취소) → INSERT 3 → COMMIT. 최종 TBL 에 1, 3 두 행 = COUNT 2.",
    "chapter": "DCL·TCL",
    "_source": "cbt-mock",
    "_origId": "cbt-019",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 19,
    "references": [
      {
        "type": "sql",
        "code": "BEGIN TRAN;\nCREATE TABLE TBL (ID INT PRIMARY KEY);\nINSERT INTO TBL VALUES (1);\nSAVE TRAN S1;\nINSERT INTO TBL VALUES (2);\nROLLBACK TRAN S1;\nINSERT INTO TBL VALUES (3);\nCOMMIT;\nSELECT COUNT(*) FROM TBL;"
      }
    ]
  },
  {
    "id": 10870,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 71,
    "title": "발생 시점에 따른 엔터티 분류에 의한 중심 엔터티가 아닌 것은?",
    "options": [
      "매출",
      "주문",
      "사원",
      "계약"
    ],
    "correctIndex": 2,
    "explanation": "사원, 부서, 고객, 상품, 자재 등이 기본 엔터티가 될 수 있다. 매출·주문·계약은 기본 엔터티에서 발생하는 중심 엔터티에 해당한다.",
    "chapter": "엔터티",
    "_source": "cbt-mock",
    "_origId": "cbt-020",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 20
  },
  {
    "id": 10871,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 72,
    "title": "주문과 주문상세 테이블이 1:1 필수관계일 때 이에 대한 설명으로 올바른 것은? (단, 둘 다 PK 로 주문번호를 가지고 있으며 식별관계이다.)",
    "options": [
      "주문 테이블의 전체 개수와 주문상세 테이블의 전체 개수는 다르다.",
      "주문이 입력되어도 주문상세 테이블은 입력되지 않을 수 있다.",
      "주문 테이블 MINUS 주문상세 테이블의 출력 건수는 0 건이다.",
      "주문 테이블 INTERSECT 주문상세 테이블의 출력 건수는 주문 테이블 데이터 합계 다음으로 적다."
    ],
    "correctIndex": 2,
    "explanation": "1:1 필수관계이고 주문번호가 양쪽 PK 이므로 두 테이블의 PK 집합이 정확히 같다. 따라서 주문 MINUS 주문상세 결과는 0 건이고, INTERSECT 결과는 두 테이블의 행 수와 같다.",
    "chapter": "관계",
    "_source": "cbt-mock",
    "_origId": "cbt-021",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 21
  },
  {
    "id": 10872,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 73,
    "title": "그룹 내 순위 관련 WINDOW 함수의 특징으로 틀린 것은?",
    "options": [
      "RANK 함수는 동일한 값에 대해서는 동일한 순위를 부여한다 (같은 등수에 여럿 존재 시 등수 SKIP 가능).",
      "DENSE_RANK 함수는 동일한 값에 대해서는 동일한 순위를 부여한다 (같은 등수 여럿 존재해도 등수 SKIP 없음).",
      "ROW_NUMBER 함수는 동일한 값이라도 고유한 순위를 부여한다.",
      "CUMM_RANK 함수는 동일한 값에 대해서는 동일한 순위를 부여한다 (같은 등수 여럿 존재해도 등수 SKIP 없음)."
    ],
    "correctIndex": 3,
    "explanation": "그룹 내 순위 관련 WINDOW FUNCTION 은 RANK, DENSE_RANK, ROW_NUMBER 가 있다. CUMM_RANK 라는 함수는 표준 윈도우 함수에 없다. (DENSE_RANK 가 SKIP 없이 순위 부여)",
    "chapter": "윈도우 함수",
    "_source": "cbt-mock",
    "_origId": "cbt-022",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 22
  },
  {
    "id": 10873,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 74,
    "title": "다음 SQL 실행 결과로 가장 알맞은 것은?",
    "options": [
      "1",
      "2",
      "3",
      "0"
    ],
    "correctIndex": 1,
    "explanation": "T1 LEFT OUTER JOIN T2 ON T1.COL=T2.COL 결과: (1,1), (2,2), (3,NULL). 다시 LEFT OUTER JOIN T3 ON T1.COL=T3.COL: 행 수는 3 행 유지. WHERE T2.COL IS NOT NULL 조건으로 (1,1), (2,2) 두 행만 남음 → COUNT 2.",
    "chapter": "조인",
    "_source": "cbt-mock",
    "_origId": "cbt-023",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 23,
    "references": [
      {
        "type": "sql",
        "code": "SELECT COUNT(*) FROM T1\nLEFT OUTER JOIN T2 ON T1.COL = T2.COL\nLEFT OUTER JOIN T3 ON T1.COL = T3.COL\nWHERE T2.COL IS NOT NULL;"
      }
    ]
  },
  {
    "id": 10874,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 75,
    "title": "다음 식별관계와 비식별관계에 대해 옳은 것은?",
    "options": [
      "비식별관계는 자식 주식별자에 부모의 주식별자를 포함한다.",
      "비식별관계는 강한 연결 관계를 의미한다.",
      "식별관계는 자식 측의 카디널리티 선이 점선이다.",
      "식별관계는 부모 엔터티가 자식 엔터티에 종속되는 관계이다."
    ],
    "correctIndex": 3,
    "explanation": "식별관계는 부모의 주식별자가 자식의 주식별자로 포함되어 강한 연결 관계를 갖는다. ① 비식별관계는 부모 PK 가 자식의 일반 속성으로 상속, ② 비식별관계는 약한 연결, ③ 식별관계는 실선 표기. ④ 가 옳다.",
    "chapter": "관계",
    "_source": "cbt-mock",
    "_origId": "cbt-024",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 24
  },
  {
    "id": 10875,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 76,
    "title": "다음 중 DML 에 해당하지 않는 것은?",
    "options": [
      "INSERT",
      "DELETE",
      "MERGE",
      "TRUNCATE"
    ],
    "correctIndex": 3,
    "explanation": "TRUNCATE 는 DDL 에 해당된다 (자동 커밋, ROLLBACK 불가). INSERT/UPDATE/DELETE/MERGE 가 DML.",
    "chapter": "DML",
    "_source": "cbt-mock",
    "_origId": "cbt-025",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 25
  },
  {
    "id": 10876,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 77,
    "title": "다음의 SQL 문과 동일한 것을 고르시오.\n\n`SELECT NVL(Name, '') FROM Emp;`",
    "options": [
      "SELECT CASE WHEN Name IS NOT NULL THEN Name ELSE '0' END AS USER_NAME FROM Emp;",
      "SELECT CASE WHEN Name IS NOT NULL THEN '0' ELSE Name END AS USER_NAME FROM Emp;",
      "SELECT CASE WHEN Name IS NULL THEN '' ELSE Name END AS USER_NAME FROM Emp;",
      "SELECT CASE WHEN Name IS NULL THEN '0' ELSE '0' END AS USER_NAME FROM Emp;"
    ],
    "correctIndex": 2,
    "explanation": "NVL(Name, '') 은 Name 이 NULL 이면 '' 로 대체, 아니면 Name 그대로 반환. 동등한 CASE 식은 \"WHEN Name IS NULL THEN '' ELSE Name END\".",
    "chapter": "함수",
    "_source": "cbt-mock",
    "_origId": "cbt-026",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 26
  },
  {
    "id": 10877,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 78,
    "title": "EMP 테이블 7788 번 사원의 SAL 값이 현재 1,000 인 상황에서 아래 TX1, TX2 두 개의 트랜잭션이 동시에 수행된다. 시점 1 에 TX1 이 +100 update, 시점 2 에 TX2 가 +200 update, 시점 3 에 TX1 이 commit 한다. 최종 7788 의 SAL 값은? (Lock 충돌 시 TX2 는 TX1 commit 까지 대기)",
    "options": [
      "1000",
      "1100",
      "1200",
      "1300"
    ],
    "correctIndex": 3,
    "explanation": "TX2 의 update 는 Lock 으로 인해 TX1 의 commit 까지 대기한다. TX1 이 1,100 으로 갱신·commit 후 TX2 가 +200 을 더해 1,300 이 된다.",
    "chapter": "DCL·TCL",
    "_source": "cbt-mock",
    "_origId": "cbt-027",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 27
  },
  {
    "id": 10878,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 79,
    "title": "윈도우 함수에 대한 설명으로 올바르지 않은 것은?",
    "options": [
      "윈도우 함수는 GROUP BY 와 함께 사용하여 처리하는 방식이다.",
      "PARTITION BY 절을 사용해 윈도우의 분리 기준을 설정한다.",
      "WINDOWING 절은 ORDER BY 와 함께 사용된다.",
      "PARTITION BY 절이 없으면 전체 행이 하나의 윈도우가 된다."
    ],
    "correctIndex": 0,
    "explanation": "GROUP BY 는 그룹 단위로 행을 축약하지만 윈도우 함수는 원본 행을 보존하면서 그룹별 계산만 수행한다. 둘은 별개의 메커니즘이다.",
    "chapter": "윈도우 함수",
    "_source": "cbt-mock",
    "_origId": "cbt-028",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 28
  },
  {
    "id": 10879,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 80,
    "title": "아래의 계층형 SQL 에서 리프 데이터이면 1, 그렇지 않으면 0 을 출력하고 싶을 때 사용하는 키워드로 알맞은 것은?",
    "options": [
      "CONNECT_BY_ISLEAF",
      "CONNECT_BY_ISCYCLE",
      "SYS_CONNECT_BY_PATH",
      "CONNECT_BY_ROOT"
    ],
    "correctIndex": 0,
    "explanation": "CONNECT_BY_ISLEAF 는 트리에서 리프 노드 (자식 없음) 이면 1, 아니면 0 을 반환한다.",
    "chapter": "계층형 질의",
    "_source": "cbt-mock",
    "_origId": "cbt-029",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 29,
    "references": [
      {
        "type": "sql",
        "code": "SELECT LEVEL,\n       LPAD(' ', 4 * (LEVEL - 1)) || EMPNO,\n       MGR,\n       (   ) AS ISLEAF\nFROM   SCOTT.EMP\nSTART WITH MGR IS NULL\nCONNECT BY PRIOR EMPNO = MGR;"
      }
    ]
  },
  {
    "id": 10880,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 81,
    "title": "다음 쿼리 중 의미가 다른 하나는? (단, COL1 은 날짜형 컬럼이다.)",
    "options": [
      "WHERE TO_CHAR(COL1, 'YYYYMMDDHH24') = '2025010113' OR TO_CHAR(COL1, 'YYYYMMDDHH24') = '2025010114'",
      "WHERE COL1 >= TO_DATE('20250101130000', 'YYYYMMDDHH24MISS') AND COL1 <= TO_DATE('20250101145959', 'YYYYMMDDHH24MISS')",
      "WHERE ((TO_CHAR(COL1, 'YYYYMMDD'), TO_CHAR(COL1, 'HH24')) IN (('20250101', '13'), ('20250101', '14')))",
      "WHERE COL1 = TO_DATE('2025010113', 'YYYYMMDDHH24') OR COL1 = TO_DATE('2025010114', 'YYYYMMDDHH24')"
    ],
    "correctIndex": 3,
    "explanation": "①·②·③ 은 모두 2025-01-01 13:00:00 부터 14:59:59 까지 1 시간 범위를 포함. ④ 는 정확히 13:00:00 또는 14:00:00 두 시점만 매칭하므로 범위가 좁아 의미가 다르다.",
    "chapter": "WHERE",
    "_source": "cbt-mock",
    "_origId": "cbt-030",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 30
  },
  {
    "id": 10881,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 82,
    "title": "다음 SQL 의 의도와 가장 가까운 설명은? (단, SAL 은 급여를 의미한다.)\n\n`SELECT * FROM EMP WHERE SAL > (SELECT AVG(SAL) FROM EMP);`",
    "options": [
      "평균 급여보다 많은 사원 목록을 조회한다.",
      "평균 급여보다 적은 사원 목록을 조회한다.",
      "평균 급여를 포함한 전체 사원 목록을 조회한다.",
      "오류가 발생하는 쿼리이다."
    ],
    "correctIndex": 0,
    "explanation": "서브쿼리가 전체 직원의 평균 급여를 반환하고, 메인 쿼리는 그 평균보다 SAL 이 큰 사원만 조회한다.",
    "chapter": "서브쿼리",
    "_source": "cbt-mock",
    "_origId": "cbt-031",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 31
  },
  {
    "id": 10882,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 83,
    "title": "Subquery 의 종류 중에서 Subquery 가 Mainquery 의 제공자 역할을 하고 Mainquery 의 값이 Subquery 에 주입되지 않는 유형은 무엇인가?",
    "options": [
      "Filter형 Subquery",
      "Early Filter형 Subquery",
      "Associative Subquery",
      "Access Subquery"
    ],
    "correctIndex": 3,
    "explanation": "Access Subquery 는 제공자 역할을 하는 서브쿼리이다 (메인쿼리에서 서브쿼리로 값 주입 없음).",
    "chapter": "서브쿼리",
    "_source": "cbt-mock",
    "_origId": "cbt-032",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 32
  },
  {
    "id": 10883,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 84,
    "title": "다음 중 집합 연산자에 대한 설명으로 올바르지 않은 것은?",
    "options": [
      "UNION 연산자를 사용할 때 각각의 SELECT 문에 ORDER BY 를 사용할 수 있다.",
      "UNION 은 중복을 제거하는 데 반해 UNION ALL 은 중복을 제거하지 않는다.",
      "INTERSECT 는 중복 제거 및 정렬을 수행한다.",
      "두 집합 간 중복이 없다면 UNION, UNION ALL 모두 동일한 결과를 출력한다."
    ],
    "correctIndex": 0,
    "explanation": "집합 연산자 이용 시 ORDER BY 는 전체 집합 결과에 대해 한 번만 사용해야 하므로 마지막 SELECT 문 뒤에 작성된다. 각 SELECT 별로 ORDER BY 를 쓰면 문법 오류.",
    "chapter": "집합 연산자",
    "_source": "cbt-mock",
    "_origId": "cbt-033",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 33
  },
  {
    "id": 10884,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 85,
    "title": "다음 설명 중 맞는 것은 무엇인가?",
    "options": [
      "모든 자료는 실질적으로 테이블에 저장되며 테이블에 있는 자료들을 꺼내 볼 수 있다.",
      "데이터베이스 내에 테이블이란 존재하지 않는다.",
      "아주 복잡한 자료도 테이블은 하나만 만드는 것이 바람직하다.",
      "데이터베이스에는 단 한 개의 테이블만 존재할 수 있다."
    ],
    "correctIndex": 0,
    "explanation": "데이터베이스에는 자료의 성격에 따라 N 개의 테이블을 생성한다. 모든 자료들은 테이블에 입력되며 조회·수정·삭제할 수 있다.",
    "chapter": "데이터 모델 개념",
    "_source": "cbt-mock",
    "_origId": "cbt-034",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 34
  },
  {
    "id": 10885,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 86,
    "title": "학생(STUDENT) 테이블에 영문학과 학생 50 명, 법학과 학생 100 명, 수학과 학생 50 명의 정보가 저장되어 있을 때, 다음 SQL 문의 실행 결과 튜플 수는 각각 얼마인가? (단, DEPT 필드는 학과명, NAME 필드는 이름을 의미한다)\n\nㄱ : `SELECT DEPT FROM STUDENT;`\nㄴ : `SELECT DISTINCT DEPT FROM STUDENT;`\nㄷ : `SELECT NAME FROM STUDENT WHERE DEPT='영문학과';`",
    "options": [
      "ㄱ : 3, ㄴ : 3, ㄷ : 1",
      "ㄱ : 200, ㄴ : 3, ㄷ : 1",
      "ㄱ : 200, ㄴ : 3, ㄷ : 50",
      "ㄱ : 200, ㄴ : 200, ㄷ : 50"
    ],
    "correctIndex": 2,
    "explanation": "ㄱ 조건없이 전체 200=50+100+50. ㄴ DISTINCT 학과명 3 종 (영문/법/수학). ㄷ WHERE 영문학과 50 명.",
    "chapter": "관계형 DB와 SELECT",
    "_source": "cbt-mock",
    "_origId": "cbt-035",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 35
  },
  {
    "id": 10886,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 87,
    "title": "다음 주어진 테이블에서 아래와 같은 결괏값을 반환하도록 아래의 SQL 문의 빈칸에 들어갈 올바른 것을 고르시오.",
    "options": [
      "RANK()",
      "NTILE()",
      "ROW_NUMBER()",
      "DENSE_RANK()"
    ],
    "correctIndex": 3,
    "explanation": "결괏값에서 중복된 등수 2 등 다음에 바로 다음 등수인 3 이 왔으므로 빈칸에는 DENSE_RANK 가 와야 한다.",
    "chapter": "윈도우 함수",
    "_source": "cbt-mock",
    "_origId": "cbt-036",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 36,
    "references": [
      {
        "type": "table",
        "caption": "[SQLD_29] 테이블",
        "headers": [
          "이름",
          "부서",
          "직책",
          "급여"
        ],
        "rows": [
          [
            "조조",
            "경영지원부",
            "부장",
            "300"
          ],
          [
            "유비",
            "경영지원부",
            "과장",
            "250"
          ],
          [
            "제갈량",
            "인사부",
            "대리",
            "250"
          ],
          [
            "사마의",
            "인사부",
            "대리",
            "200"
          ],
          [
            "관우",
            "영업부",
            "사원",
            "150"
          ],
          [
            "장비",
            "영업부",
            "사원",
            "100"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "[결과]",
        "headers": [
          "순위",
          "이름",
          "부서",
          "직책",
          "급여"
        ],
        "rows": [
          [
            "1",
            "조조",
            "경영지원부",
            "부장",
            "300"
          ],
          [
            "2",
            "유비",
            "경영지원부",
            "과장",
            "250"
          ],
          [
            "2",
            "제갈량",
            "인사부",
            "대리",
            "250"
          ],
          [
            "3",
            "사마의",
            "인사부",
            "대리",
            "200"
          ],
          [
            "4",
            "관우",
            "영업부",
            "사원",
            "150"
          ],
          [
            "5",
            "장비",
            "영업부",
            "사원",
            "100"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT (   ) OVER (ORDER BY 급여 DESC) AS 순위,\n       이름, 부서, 직책, 급여\nFROM   SQLD_29;"
      }
    ]
  },
  {
    "id": 10887,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 88,
    "title": "{학번, 과목번호} 는 결정자이면서 기본키이고 {성적, 지도교수명, 학과명} 은 종속자이다. 속성 중 과목번호가 결정자이고 {지도교수명, 학과명} 이 과목번호에만 함수적 종속성을 가진다면 이는 몇 차정규형에 속하고 몇 차정규화의 대상인가?",
    "options": [
      "2차정규형 - 3차정규화 대상",
      "1차정규형 - 2차정규화 대상",
      "3차정규형 - 보이스-코드 정규화 대상",
      "보이스-코드 정규화 - 4차정규화 대상"
    ],
    "correctIndex": 1,
    "explanation": "결정자 중 일부 속성에만 함수 종속성을 가지고 있는 'Partial Dependency Attribute' 를 갖는 것은 2차정규형을 위반한 사례에 해당한다. 즉 1차정규형이면서 2차정규화의 대상이 된다.",
    "chapter": "정규화",
    "_source": "cbt-mock",
    "_origId": "cbt-037",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 37
  },
  {
    "id": 10888,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 89,
    "title": "다음 SQL 실행 결과로 가장 알맞은 것은?",
    "options": [
      "A=1, C=1, B=3 (RANK 시나리오)",
      "C=1, A=1, B=2 (DENSE_RANK 시나리오)",
      "B=1, A=2, C=3",
      "A=1, C=2, B=3 (정답 — ROW_NUMBER 고유 순번)"
    ],
    "correctIndex": 3,
    "explanation": "ROW_NUMBER() 는 값에 상관없이 고유한 순위를 부여한다. ① 은 RANK() 답, ② 는 DENSE_RANK() 답 (A, C 동점이므로 출력 순서는 A, C 또는 C, A 가능).",
    "chapter": "윈도우 함수",
    "_source": "cbt-mock",
    "_origId": "cbt-038",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 38,
    "references": [
      {
        "type": "table",
        "caption": "[TB_SCORE] 테이블",
        "headers": [
          "NAME",
          "SCORE"
        ],
        "rows": [
          [
            "A",
            "90"
          ],
          [
            "B",
            "85"
          ],
          [
            "C",
            "90"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT NAME, ROW_NUMBER() OVER (ORDER BY SCORE DESC) AS RN\nFROM   SCORES;"
      }
    ]
  },
  {
    "id": 10889,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 90,
    "title": "다음의 데이터베이스에서 '부양가족을 2 명 이상 가진 사원의 사번(eno), 성명(ename), 부양가족 수를 검색' 하는 질의를 SQL 로 적절하게 표현한 것은?\n\n`employee(eno, ename, address, score, dno)`\n`dependent(eno, ename, birthday, relation)`",
    "options": [
      "SELECT eno, ename, count(*) FROM employee e, dependent d WHERE e.eno = d.eno AND count(*) >= 2 GROUP BY d.eno;",
      "SELECT e.eno, e.ename, count(*) FROM employee e, dependent d WHERE EXISTS (SELECT * FROM dependent GROUP BY eno HAVING count(*) >= 2) GROUP BY e.eno, e.ename;",
      "SELECT e.eno, e.ename, t.cnt FROM employee e, (SELECT eno, count(*) AS cnt FROM dependent GROUP BY eno HAVING count(*) >= 2) t WHERE e.eno = t.eno;",
      "SELECT e.eno, e.ename, count(*) FROM employee e, dependent d WHERE e.eno = d.eno GROUP BY e.eno, e.ename HAVING count(*) >= 3;"
    ],
    "correctIndex": 2,
    "explanation": "③ 인라인 뷰로 dependent 에서 eno 별 count 가 2 이상인 결과를 만든 뒤 employee 와 조인하면 정확히 \"부양가족 2 명 이상\" 사원의 정보 + 부양가족 수를 얻는다. ① WHERE 에 집계함수 사용 불가, ② EXISTS 조건이 상관 서브쿼리가 아니라 무의미, ④ HAVING count >=3 조건이 잘못.",
    "chapter": "서브쿼리",
    "_source": "cbt-mock",
    "_origId": "cbt-039",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 39
  },
  {
    "id": 10890,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 91,
    "title": "데이터를 입력하기 위해 사용하는 SQL 명령어는 무엇인가?",
    "options": [
      "CREATE",
      "INSERT",
      "UPDATE",
      "ALTER"
    ],
    "correctIndex": 1,
    "explanation": "데이터를 입력하기 위해서 'INSERT' 명령어를 사용한다.",
    "chapter": "DML",
    "_source": "cbt-mock",
    "_origId": "cbt-040",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 40
  },
  {
    "id": 10891,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 92,
    "title": "릴레이션 'employee' 와 'department' 에 대한 다음 SQL 질의문의 수행 결과는?",
    "options": [
      "{(100, 영업, Lee, 90), (200, 개발, Kim, 95), (300, 서비스, Hong, 65)}",
      "{(100, 영업, Lee, 90), (200, 개발, Kim, 95)}",
      "{(100, 영업, Lee, 90)}",
      "{(100, 영업, Hong, 80), (100, 영업, Lee, 90), (200, 개발, Kim, 90), (200, 개발, Kim, 95), (600, null, Hong, 65)}"
    ],
    "correctIndex": 0,
    "explanation": "EQUI 조인 결과로 dno 가 일치하는 행만 결합된다. (이 문항의 표·SQL 세부는 PDF 원본 대비 일부 누락 가능 — 정답 키 ① 보존)",
    "chapter": "조인",
    "_source": "cbt-mock",
    "_origId": "cbt-041",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 41
  },
  {
    "id": 10892,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 93,
    "title": "다음 각 쿼리의 실행 결과로 옳은 것은?\n\n[1] `SELECT SUM(SAL + BONUS) FROM EMP WHERE DEPTNO = 10;`\n[2] `SELECT SUM(NVL(SAL, 0) + NVL(BONUS, 0)) FROM EMP;`\n[3] `SELECT SUM(SAL) + SUM(BONUS) FROM EMP;`",
    "options": [
      "NULL, 260, 260",
      "0, 260, 260",
      "NULL, 260, 200",
      "NULL, 240, 260"
    ],
    "correctIndex": 0,
    "explanation": "[1] DEPTNO=10 의 SAL+BONUS 가 둘 다 NULL 포함 → 100+NULL=NULL, NULL+20=NULL → SUM=NULL. [2] NVL(SAL,0)+NVL(BONUS,0) 합계 = 100+20+40+80+20 = 260. [3] SUM(SAL) NULL 제외 = 100+30+50+20=200, SUM(BONUS) = 20+10+30=60 → 200+60=260.",
    "chapter": "그룹 함수",
    "_source": "cbt-mock",
    "_origId": "cbt-042",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 42,
    "references": [
      {
        "type": "table",
        "caption": "[EMP] 테이블",
        "headers": [
          "ENAME",
          "SAL",
          "BONUS",
          "DEPTNO"
        ],
        "rows": [
          [
            "A",
            "100",
            "NULL",
            "10"
          ],
          [
            "B",
            "NULL",
            "20",
            "10"
          ],
          [
            "C",
            "30",
            "10",
            "NULL"
          ],
          [
            "D",
            "50",
            "30",
            "20"
          ],
          [
            "E",
            "20",
            "NULL",
            "NULL"
          ]
        ]
      }
    ]
  },
  {
    "id": 10893,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 94,
    "title": "다음 SQL 을 ANSI 방식으로 변경한 것으로 옳은 것은?\n\n`SELECT * FROM TAB1, TAB2 ORDER BY 1;`",
    "options": [
      "SELECT * FROM TAB1 INNER JOIN TAB2 ORDER BY 1;",
      "SELECT * FROM TAB1 NATURAL JOIN TAB2 ORDER BY 1;",
      "SELECT * FROM TAB1 CROSS JOIN TAB2 ORDER BY 1;",
      "SELECT * FROM TAB1 INNER JOIN TAB2 ON (TAB1.COL1 = TAB2.COL1) ORDER BY 1;"
    ],
    "correctIndex": 2,
    "explanation": "FROM TAB1, TAB2 만 있고 별도의 조인조건은 없으므로 카티션 곱이 발생하며, 이는 CROSS JOIN 으로 표현할 수 있다. CROSS JOIN 은 ON 조인절을 사용하지 않는다.",
    "chapter": "표준 조인",
    "_source": "cbt-mock",
    "_origId": "cbt-043",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 43
  },
  {
    "id": 10894,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 95,
    "title": "다음 중 SQL 의 특징으로 가장 적절하지 않은 것은?",
    "options": [
      "절차적 언어이며 반복문을 포함한다.",
      "데이터 정의·조작·제어 언어를 포함한다.",
      "관계형 데이터베이스 질의에 사용된다.",
      "ANSI 표준으로 대부분의 DBMS 에서 지원된다."
    ],
    "correctIndex": 0,
    "explanation": "SQL 은 비절차적 언어로 어떤(WHAT) 데이터를 필요로 하는지 명시할 뿐, 어떻게(HOW) 데이터를 가져올지는 명시하지 않는다. SQL 내의 PL/SQL, T-SQL 등에서 IF/FOR 활용해 절차적 언어를 사용할 수 있지만 SQL 자체는 비절차적.",
    "chapter": "관계형 DB와 SELECT",
    "_source": "cbt-mock",
    "_origId": "cbt-044",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 44
  },
  {
    "id": 10895,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 96,
    "title": "다음 SQL 실행 결과로 가장 알맞은 것은?",
    "options": [
      "D=1, B=2, A=3, C=3, E=4 (정답 — DENSE_RANK)",
      "D=1, B=2, A=3, C=4, E=5 (RANK 시나리오)",
      "D=1, B=2, A=3, C=3, E=5",
      "D=1, B=2, A=3, C=3, E=3"
    ],
    "correctIndex": 0,
    "explanation": "DENSE_RANK 는 동일한 값에 동일 순위를 부여하고, 그다음 순위를 건너뛰지 않는다. PRICE DESC 정렬: D(300)=1, B(200)=2, A(100)=3, C(100)=3 (동률), E(50)=4. 만일 ROW_NUMBER() 였다면 ② 가 답, RANK() 였다면 ③ 이 답이 된다.",
    "chapter": "윈도우 함수",
    "_source": "cbt-mock",
    "_origId": "cbt-045",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 45,
    "references": [
      {
        "type": "table",
        "caption": "[TB_PRODUCT] 테이블",
        "headers": [
          "NAME",
          "PRICE"
        ],
        "rows": [
          [
            "A",
            "100"
          ],
          [
            "B",
            "200"
          ],
          [
            "C",
            "100"
          ],
          [
            "D",
            "300"
          ],
          [
            "E",
            "50"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT NAME, DENSE_RANK() OVER (ORDER BY PRICE DESC) AS RN\nFROM   TB_PRODUCT;"
      }
    ]
  },
  {
    "id": 10896,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 97,
    "title": "다음 SQL 실행 결과로 출력되는 NAME 은?\n\n`SELECT NAME FROM EMPLOYEE WHERE SALARY > ALL (SELECT SALARY FROM EMPLOYEE WHERE NAME != 'C');`",
    "options": [
      "A",
      "B",
      "C",
      "A, C"
    ],
    "correctIndex": 2,
    "explanation": "서브쿼리 SELECT SALARY FROM EMPLOYEE WHERE NAME != 'C' 는 A, B (3000, 2000) 두 행을 반환. ALL 은 다중행 비교 — SALARY > ALL(3000, 2000) 은 3000 보다도 크고 2000 보다도 커야 하므로 사실상 SALARY > 3000. C 만 조건 충족.",
    "chapter": "서브쿼리",
    "_source": "cbt-mock",
    "_origId": "cbt-046",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 46,
    "references": [
      {
        "type": "table",
        "caption": "[EMPLOYEE] 테이블",
        "headers": [
          "NAME",
          "SALARY"
        ],
        "rows": [
          [
            "A",
            "3000"
          ],
          [
            "B",
            "2000"
          ],
          [
            "C",
            "4000"
          ]
        ]
      }
    ]
  },
  {
    "id": 10897,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 98,
    "title": "다음 설명 중 적절한 것은 무엇인가?",
    "options": [
      "인덱스는 인덱스 구성 컬럼으로 항상 오름차순으로 정렬된다.",
      "비용 기반 옵티마이저는 인덱스 스캔이 항상 유리하다고 판단한다.",
      "규칙 기반 옵티마이저는 적절한 인덱스가 존재하면 항상 인덱스를 사용하려고 한다.",
      "인덱스 범위 스캔은 항상 여러 건의 결과가 반환된다."
    ],
    "correctIndex": 2,
    "explanation": "규칙 기반 옵티마이저는 사전 정의된 규칙 우선순위에 따라 인덱스가 있으면 무조건 인덱스 사용. ① ASC/DESC 지정 가능, ② 비용 기반은 통계에 따라 풀 스캔이 유리할 수 있음, ④ 인덱스 범위 스캔은 0 건 가능.",
    "chapter": "관계형 DB와 SELECT",
    "_source": "cbt-mock",
    "_origId": "cbt-047",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 47
  },
  {
    "id": 10898,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 99,
    "title": "다음 SQL 실행 결과로 가장 알맞은 것은?\n\n`SELECT ROUND(456.789, -2) FROM DUAL;`",
    "options": [
      "400",
      "500",
      "460",
      "450"
    ],
    "correctIndex": 1,
    "explanation": "ROUND 의 두 번째 인자가 음수일 경우 정수부에서 자릿수만큼 반올림. -2 는 10 의 자리에서 반올림하므로 456.789 → 500.",
    "chapter": "함수",
    "_source": "cbt-mock",
    "_origId": "cbt-048",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 48
  },
  {
    "id": 10899,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 100,
    "title": "다음의 SQL 문을 사용할 때, 날짜형 변수를 문자형으로 바꿀 수 있는 것은?\n\n`SELECT SYSDATE FROM DUAL;`",
    "options": [
      "TO_NUMBER",
      "TO_DATE",
      "TO_CHAR",
      "CONVERT"
    ],
    "correctIndex": 2,
    "explanation": "TO_CHAR 함수를 사용하면 문자형 타입으로 변환한다.",
    "chapter": "함수",
    "_source": "cbt-mock",
    "_origId": "cbt-049",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 49
  },
  {
    "id": 10900,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 101,
    "title": "다음 SQL 실행 결과로 가장 알맞은 것은?\n\n`SELECT REGION, AMOUNT, COUNT(*) FROM TB_SALE GROUP BY CUBE(REGION, AMOUNT);`",
    "options": [
      "5 행 — EAST/1000/2, EAST/NULL/2, WEST/2000/1, WEST/NULL/1, NULL/NULL/3",
      "7 행 — EAST/1000/2, WEST/2000/1, EAST/NULL/2, WEST/NULL/1, NULL/1000/2, NULL/2000/1, NULL/NULL/3 (정답)",
      "4 행 — EAST/1000/2, WEST/2000/1, EAST/NULL/2, WEST/NULL/1",
      "2 행 — EAST/1000/2, WEST/2000/1"
    ],
    "correctIndex": 1,
    "explanation": "GROUP BY CUBE(REGION, AMOUNT) 는 모든 가능한 집계 조합을 생성. CUBE 는 N 개 컬럼에 대해 2^N=4 종류 그룹: (REGION, AMOUNT) 2 행 + (REGION) 2 행 + (AMOUNT) 2 행 + () 1 행 = 7 행.",
    "chapter": "그룹 함수",
    "_source": "cbt-mock",
    "_origId": "cbt-050",
    "_cbtPdf": "cbt1",
    "_cbtPdfNumber": 50,
    "references": [
      {
        "type": "table",
        "caption": "[TB_SALE] 테이블",
        "headers": [
          "REGION",
          "AMOUNT"
        ],
        "rows": [
          [
            "EAST",
            "1000"
          ],
          [
            "WEST",
            "2000"
          ],
          [
            "EAST",
            "1000"
          ]
        ]
      }
    ]
  },
  {
    "id": 10901,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 102,
    "title": "다음 SQL 실행 결과로 가장 알맞은 것은?",
    "options": [
      "10, 20",
      "10, 20, 30",
      "10, 20, 30, 40",
      "10, 20, 30, 40, 50"
    ],
    "correctIndex": 1,
    "explanation": "ALL 연산자는 서브쿼리 (Subquery) 값 모두가 조건에 만족하면 True 를 반환한다. <= ALL(30, 50) 은 30 보다 작거나 같고 50 보다도 작거나 같다는 의미 (사실상 <= 30). DEPARTMENT_ID 가 30 이하인 값 = 10, 20, 30. NULL 은 비교에서 제외된다.",
    "chapter": "서브쿼리",
    "_source": "cbt-mock",
    "_origId": "cbt-051",
    "_cbtPdf": "cbt2",
    "_cbtPdfNumber": 2,
    "references": [
      {
        "type": "table",
        "caption": "[HR.EMPLOYEES] 테이블의 DEPARTMENT_ID 컬럼",
        "headers": [
          "DEPARTMENT_ID"
        ],
        "rows": [
          [
            "NULL"
          ],
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
            "220"
          ],
          [
            "330"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT DISTINCT DEPARTMENT_ID\nFROM   HR.EMPLOYEES A\nWHERE  A.DEPARTMENT_ID <= ALL (30, 50);"
      }
    ]
  },
  {
    "id": 10902,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 103,
    "title": "다음 중 순수 관계 연산자가 아닌 것은?",
    "options": [
      "SELECT",
      "DIVIDE",
      "UNION",
      "PROJECT"
    ],
    "correctIndex": 2,
    "explanation": "UNION 은 일반 집합 연산자이며, 순수 관계 연산자는 SELECT, PROJECT, JOIN, DIVIDE 등이 있다.",
    "chapter": "관계형 DB와 SELECT",
    "_source": "cbt-mock",
    "_origId": "cbt-052",
    "_cbtPdf": "cbt2",
    "_cbtPdfNumber": 3
  },
  {
    "id": 10903,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 104,
    "title": "다음 SQL 문장 중 COLUMN1 의 값이 널 (NULL) 이 아닌 경우를 찾아내는 문장으로 가장 적절한 것은?",
    "options": [
      "SELECT * FROM T_TEST WHERE COLUMN1 IS NOT NULL;",
      "SELECT * FROM T_TEST WHERE COLUMN1 <> NULL;",
      "SELECT * FROM T_TEST WHERE COLUMN1 != NULL;",
      "SELECT * FROM T_TEST WHERE COLUMN1 NOT NULL;"
    ],
    "correctIndex": 0,
    "explanation": "SELECT 문에서 NULL 값을 조회하려면 IS NULL 을 사용하고 NULL 이 아닌 것을 조회하려면 IS NOT NULL 을 사용한다. =, <>, != 같은 비교 연산자로는 NULL 을 비교할 수 없다 (UNKNOWN 반환).",
    "chapter": "WHERE",
    "_source": "cbt-mock",
    "_origId": "cbt-053",
    "_cbtPdf": "cbt2",
    "_cbtPdfNumber": 5
  },
  {
    "id": 10904,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 105,
    "title": "다음 SQL 실행 결과로 가장 알맞은 것은?\n\n`SELECT ROUND(78.34, 1) FROM DUAL;`",
    "options": [
      "78",
      "78.3",
      "78.4",
      "79"
    ],
    "correctIndex": 1,
    "explanation": "ROUND 함수는 두 번째 인자 N 의 소수점 N+1 번째 자리에서 반올림한다. ROUND(78.34, 1) 은 소수점 둘째 자리 (4) 에서 반올림 → 78.3.",
    "chapter": "함수",
    "_source": "cbt-mock",
    "_origId": "cbt-054",
    "_cbtPdf": "cbt2",
    "_cbtPdfNumber": 7
  },
  {
    "id": 10905,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 106,
    "title": "다음 중 정보시스템을 모델링할 때 세 가지 관점에 해당하지 않는 것은?",
    "options": [
      "데이터 관점 (Data) — 업무에서 사용되는 데이터의 구조와 의미",
      "프로세스 관점 (Process) — 업무에서 발생하는 일을 어떻게 처리하는가",
      "네트워크 관점 (Network) — 시스템 간 통신 구조",
      "데이터·프로세스 상관 관점 (Data-Process Map) — 데이터와 프로세스의 관계"
    ],
    "correctIndex": 2,
    "explanation": "정보시스템 모델링의 세 가지 관점은 데이터 관점, 프로세스 관점, 데이터·프로세스 상관 관점 (Data-Process Map / CRUD 매트릭스) 이다. 네트워크 관점은 표준 분류에 해당하지 않는다.",
    "chapter": "데이터 모델 개념",
    "_source": "cbt-mock",
    "_origId": "cbt-055",
    "_cbtPdf": "cbt2",
    "_cbtPdfNumber": 10
  },
  {
    "id": 10906,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 107,
    "title": "SALARY 가 높은 상위 2 명을 조회하고자 할 때 올바른 SQL 은? (단, Oracle 버전은 11g 이다.)",
    "options": [
      "SELECT * FROM EMP WHERE ROWNUM <= 2 ORDER BY SALARY DESC;",
      "SELECT * FROM (SELECT * FROM EMP ORDER BY SALARY DESC) WHERE ROWNUM <= 2;",
      "SELECT TOP 2 * FROM EMP ORDER BY SALARY DESC;",
      "SELECT * FROM EMP WHERE SALARY >= ALL (SELECT SALARY FROM EMP);"
    ],
    "correctIndex": 1,
    "explanation": "Oracle 의 ROWNUM 은 ORDER BY 가 적용되기 전에 부여된다. 먼저 인라인 뷰에서 ORDER BY SALARY DESC 로 정렬한 뒤, 바깥에서 ROWNUM <= 2 로 자르면 정확히 상위 2 명을 얻을 수 있다. ① 은 정렬 전에 ROWNUM 을 평가해 상위 N 보장 안 됨, ③ TOP N 은 SQL Server 문법, ④ ALL 은 의미가 다름.",
    "chapter": "TOP N 쿼리",
    "_source": "cbt-mock",
    "_origId": "cbt-056",
    "_cbtPdf": "cbt2",
    "_cbtPdfNumber": 11
  },
  {
    "id": 10907,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 108,
    "title": "다음 중 정규화의 우선 목적을 고르시오.",
    "options": [
      "트랜잭션 처리 속도 개선",
      "중복 제거를 통한 정합성 확보",
      "인덱스 자동 최적화",
      "화면 표시 응답 시간 단축"
    ],
    "correctIndex": 1,
    "explanation": "정규화는 데이터의 중복을 제거하고 삽입·수정·갱신 시 발생할 수 있는 이상 현상 (Anomaly) 을 방지하여 데이터의 무결성을 확보하는 것이 목적이다.",
    "chapter": "정규화",
    "_source": "cbt-mock",
    "_origId": "cbt-057",
    "_cbtPdf": "cbt2",
    "_cbtPdfNumber": 12
  },
  {
    "id": 10908,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 109,
    "title": "다음 중 테이블 명명 규칙에 맞게 작성된 테이블명은?",
    "options": [
      "EMP-100",
      "100EMP",
      "EMP100",
      "100_EMP"
    ],
    "correctIndex": 2,
    "explanation": "테이블명은 영문자로 시작해야 하며, 영문자·숫자·언더 스코어·달러기호·샵을 사용할 수 있다. 따라서 \"EMP100\" 만 명명 규칙에 부합한다. 숫자로 시작 (②, ④) 또는 하이픈 사용 (①) 은 불가.",
    "chapter": "DDL",
    "_source": "cbt-mock",
    "_origId": "cbt-058",
    "_cbtPdf": "cbt2",
    "_cbtPdfNumber": 13
  },
  {
    "id": 10909,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 110,
    "title": "다음 트랜잭션 실행 후 SELECT COUNT(*) FROM TAB; 의 결과는?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 2,
    "explanation": "SV1 시점: TAB = [(A,1), (B,2), (C,3)]. UPDATE 후 SV2 시점: TAB = [(A,3), (B,3), (C,3)]. INSERT D + DELETE COL2=3 후 SV3 시점: TAB = [(D,5)] (A·B·C 모두 삭제). ROLLBACK TO SV2 후 COMMIT → TAB = [(A,3), (B,3), (C,3)] = 3 건.",
    "chapter": "DCL·TCL",
    "_source": "cbt-mock",
    "_origId": "cbt-059",
    "_cbtPdf": "cbt2",
    "_cbtPdfNumber": 14,
    "references": [
      {
        "type": "sql",
        "code": "INSERT INTO TAB VALUES ('A', 1);\nINSERT INTO TAB VALUES ('B', 2);\nINSERT INTO TAB VALUES ('C', 3);\nSAVEPOINT SV1;\nUPDATE TAB SET COL2 = 3 WHERE COL1 IN ('A', 'B');\nSAVEPOINT SV2;\nINSERT INTO TAB VALUES ('D', 5);\nDELETE FROM TAB WHERE COL2 = 3;\nSAVEPOINT SV3;\nROLLBACK TO SV2;\nCOMMIT;\nSELECT COUNT(*) FROM TAB;"
      }
    ]
  },
  {
    "id": 10910,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 111,
    "title": "SQL 문장에서 집합별로 집계된 데이터에 대한 조회 조건을 제한하기 위해서 사용하는 절은 어느 것인가?",
    "options": [
      "HAVING 절",
      "GROUP BY 절",
      "WHERE 절",
      "FROM 절"
    ],
    "correctIndex": 0,
    "explanation": "일반적인 SQL 문장에서 조회 행을 제한할 때는 WHERE 절을 사용하지만, 그룹별로 조회될 때 집계 데이터에 대한 제한 조건을 사용하기 위해서는 HAVING 절을 사용한다.",
    "chapter": "GROUP BY·HAVING",
    "_source": "cbt-mock",
    "_origId": "cbt-060",
    "_cbtPdf": "cbt2",
    "_cbtPdfNumber": 15
  },
  {
    "id": 10911,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 112,
    "title": "다음 SQL 실행 결과로 가장 알맞은 것은?\n\n`SELECT TRIM('   Hello SQL   ') AS RESULT FROM DUAL;`",
    "options": [
      "'   Hello SQL'",
      "'Hello SQL   '",
      "'Hello SQL'",
      "'HelloSQL'"
    ],
    "correctIndex": 2,
    "explanation": "TRIM 은 별도의 설정을 하지 않으면 앞뒤 공백을 제거하므로 'Hello SQL' 이 출력된다. 문자열 중간의 공백은 제거되지 않는다.",
    "chapter": "함수",
    "_source": "cbt-mock",
    "_origId": "cbt-061",
    "_cbtPdf": "cbt2",
    "_cbtPdfNumber": 16
  },
  {
    "id": 10912,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 113,
    "title": "다음 중 제2 정규형(2NF) 의 조건으로 알맞은 것은?",
    "options": [
      "기본키가 하나 이상의 후보 키만 종속하지 않아야 한다.",
      "도메인 동질성을 충족해야 한다.",
      "모든 일반 컬럼이 기본키에 완전 함수 종속해야 한다.",
      "다가 종속을 제거해야 한다."
    ],
    "correctIndex": 2,
    "explanation": "제2 정규형 (2NF) 은 부분 함수 종속이 제거된 상태로, 모든 일반 컬럼이 기본키 (복합키 포함) 전체에 완전 함수 종속해야 한다. 다가 종속 제거는 4NF, 결정자 후보키 외 종속 제거는 BCNF 의 조건이다.",
    "chapter": "정규화",
    "_source": "cbt-mock",
    "_origId": "cbt-062",
    "_cbtPdf": "cbt2",
    "_cbtPdfNumber": 18
  },
  {
    "id": 10913,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 114,
    "title": "다음 주어진 테이블에 대해서 아래와 같은 SQL 문을 수행하였을 때 반환되는 ROW 값의 수는 무엇인가?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 3,
    "explanation": "SELECT * FROM A UNION SELECT * FROM B = {1, 2, 3, 4, 5} (UNION 은 중복 제거). 이어서 MINUS C ({2}) → {1, 3, 4, 5} = 4 행.",
    "chapter": "집합 연산자",
    "_source": "cbt-mock",
    "_origId": "cbt-063",
    "_cbtPdf": "cbt2",
    "_cbtPdfNumber": 20,
    "references": [
      {
        "type": "table",
        "caption": "[A] 테이블",
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
        "caption": "[B] 테이블",
        "headers": [
          "COL1"
        ],
        "rows": [
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
        "caption": "[C] 테이블",
        "headers": [
          "COL1"
        ],
        "rows": [
          [
            "2"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT * FROM A\nUNION\nSELECT * FROM B\nMINUS\nSELECT * FROM C;"
      }
    ]
  },
  {
    "id": 10914,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 115,
    "title": "소계, 중계, 합계처럼 계층적 분류를 포함하고 있는 데이터의 집계에 적합한 GROUP 함수 두 가지는 무엇인가?",
    "options": [
      "ROLLUP, SUM",
      "GROUPING, SUM",
      "ROLLUP, CUBE",
      "CUBE, SUM"
    ],
    "correctIndex": 2,
    "explanation": "ROLLUP·CUBE 는 GROUP BY 의 확장된 형태로 병렬 수행이 가능하고 사용하기 쉽기 때문에 효과적이다. 다차원적인 집계가 필요한 경우는 CUBE 를 사용한다.",
    "chapter": "그룹 함수",
    "_source": "cbt-mock",
    "_origId": "cbt-064",
    "_cbtPdf": "cbt2",
    "_cbtPdfNumber": 21
  },
  {
    "id": 10915,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 116,
    "title": "다음 과일 테이블에 대한 SQL 문 내의 비교조건을 해석한 것으로 올바르지 않은 것은?",
    "options": [
      "\"21 NOT IN (SELECT 과일코드 FROM 과일)\" 은 참이다.",
      "\"19 < ANY (SELECT 과일코드 FROM 과일)\" 은 거짓이다.",
      "\"15 < ALL (SELECT 과일코드 FROM 과일)\" 은 참이다.",
      "\"19 = ALL (SELECT 과일코드 FROM 과일)\" 은 거짓이다."
    ],
    "correctIndex": 2,
    "explanation": "ALL 은 전부 일치하는 것만 출력하는 것으로 AND 라고 생각하면 되고 ANY 는 OR 로 생각하면 된다. ③ 15 < ALL (10, 15, 19) = 15 < 10 (거짓) ∧ 15 < 15 (거짓) ∧ 15 < 19 (참) = 거짓 → ③ 은 거짓 진술 (옳지 않다).",
    "chapter": "서브쿼리",
    "_source": "cbt-mock",
    "_origId": "cbt-065",
    "_cbtPdf": "cbt2",
    "_cbtPdfNumber": 22,
    "references": [
      {
        "type": "table",
        "caption": "[과일] 테이블",
        "headers": [
          "과일코드",
          "과일명"
        ],
        "rows": [
          [
            "10",
            "오렌지"
          ],
          [
            "15",
            "키위"
          ],
          [
            "19",
            "파인애플"
          ]
        ]
      }
    ]
  },
  {
    "id": 10916,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 117,
    "title": "다음 SQL 의 실행 결과로 출력되는 행 수는?",
    "options": [
      "1",
      "2",
      "3",
      "0"
    ],
    "correctIndex": 0,
    "explanation": "EXISTS 는 서브쿼리의 결과 존재 여부만 판단. EMP_ID=1: SALARY 에 (1, 3000) 존재 + AMOUNT NOT NULL → 포함. EMP_ID=2: SALARY 에 (2, NULL) 존재 + AMOUNT IS NULL → 제외. EMP_ID=3: SALARY 에 없음 → 제외. 결과 1 행.",
    "chapter": "서브쿼리",
    "_source": "cbt-mock",
    "_origId": "cbt-066",
    "_cbtPdf": "cbt2",
    "_cbtPdfNumber": 24,
    "references": [
      {
        "type": "table",
        "caption": "[EMPLOYEE] 테이블",
        "headers": [
          "EMP_ID",
          "NAME"
        ],
        "rows": [
          [
            "1",
            "Kim"
          ],
          [
            "2",
            "Lee"
          ],
          [
            "3",
            "Park"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "[SALARY] 테이블",
        "headers": [
          "EMP_ID",
          "AMOUNT"
        ],
        "rows": [
          [
            "1",
            "3000"
          ],
          [
            "2",
            "NULL"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT *\nFROM   EMPLOYEE E\nWHERE  EXISTS (\n  SELECT 1\n  FROM   SALARY S\n  WHERE  S.EMP_ID = E.EMP_ID\n  AND    S.AMOUNT IS NOT NULL\n);"
      }
    ]
  },
  {
    "id": 10917,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 118,
    "title": "다음 설명에 해당하는 데이터 모델의 구성 요소는?\n\n속성에 대한 값의 범위, 데이터 타입, 길이 등 제약사항을 기술할 수 있다.",
    "options": [
      "시스템 카탈로그 (System Catalog)",
      "용어 사전 (Data Dictionary)",
      "인스턴스 (Instance)",
      "도메인 (Domain)"
    ],
    "correctIndex": 3,
    "explanation": "도메인 (Domain) 은 속성에 대한 값의 범위, 데이터 타입, 길이 등 제약사항을 정의한 것이다.",
    "chapter": "속성",
    "_source": "cbt-mock",
    "_origId": "cbt-067",
    "_cbtPdf": "cbt2",
    "_cbtPdfNumber": 26
  },
  {
    "id": 10918,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 119,
    "title": "다음 SQL 실행 결과로 가장 알맞은 것은?",
    "options": [
      "U1 : 200, U2 : 150",
      "U1 : 300, U2 : 150",
      "U1 : 100, U2 : 350",
      "U1 : 150, U2 : 200"
    ],
    "correctIndex": 1,
    "explanation": "GROUP BY USER_ID 로 사용자별 SUM(AMOUNT) 을 계산. U1 = 100 + 200 = 300, U2 = 150.",
    "chapter": "GROUP BY·HAVING",
    "_source": "cbt-mock",
    "_origId": "cbt-068",
    "_cbtPdf": "cbt2",
    "_cbtPdfNumber": 27,
    "references": [
      {
        "type": "table",
        "caption": "[TB_PURCHASE] 테이블",
        "headers": [
          "USER_ID",
          "AMOUNT"
        ],
        "rows": [
          [
            "U1",
            "100"
          ],
          [
            "U2",
            "150"
          ],
          [
            "U1",
            "200"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT USER_ID, SUM(AMOUNT)\nFROM   TB_PURCHASE\nGROUP BY USER_ID;"
      }
    ]
  },
  {
    "id": 10919,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 120,
    "title": "다음 중 분산 데이터베이스의 특징으로 가장 부적절한 것은?",
    "options": [
      "지역 자치성, 점증적 시스템 용량 확장",
      "빠른 응답 속도와 통신 비용 절감",
      "오류의 잠재성 증대",
      "처리 비용의 감소"
    ],
    "correctIndex": 3,
    "explanation": "분산 데이터베이스는 네트워크에 떨어져 있는 데이터베이스를 구축하고 관리해야 하기 때문에 처리 비용이 증가한다. ①·②·③ 은 분산 데이터베이스의 일반 특징이다.",
    "chapter": "데이터 모델 개념",
    "_source": "cbt-mock",
    "_origId": "cbt-069",
    "_cbtPdf": "cbt2",
    "_cbtPdfNumber": 28
  },
  {
    "id": 10920,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 121,
    "title": "다음 EMP 테이블에서 부서가 10 번인 사원들만 선택하여 EMP_TEMP 테이블에 삽입하는 쿼리는? (단, EMP_TEMP 와 EMP 테이블의 컬럼 개수, 자료형, 순서는 모두 같다.)",
    "options": [
      "INSERT INTO EMP_TEMP SELECT * FROM EMP;",
      "INSERT INTO EMP_TEMP VALUES (SELECT * FROM EMP WHERE DEPTNO = 10);",
      "INSERT INTO EMP_TEMP SELECT * FROM EMP WHERE DEPTNO = 10;",
      "INSERT * INTO EMP_TEMP FROM EMP WHERE DEPTNO = 10;"
    ],
    "correctIndex": 2,
    "explanation": "INSERT INTO ... SELECT 구문을 사용하면 한 테이블에서 조건에 맞는 여러 행을 다른 테이블에 삽입할 수 있다. ① 은 모든 직원의 정보를 EMP_TEMP 에 삽입하므로 오답.",
    "chapter": "DML",
    "_source": "cbt-mock",
    "_origId": "cbt-070",
    "_cbtPdf": "cbt2",
    "_cbtPdfNumber": 30
  },
  {
    "id": 10921,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 122,
    "title": "다음 SQL 문에 대한 설명으로 올바른 것은?\n\n`SELECT * FROM SQLD_33 WHERE EMP_NAME LIKE 'A%';`",
    "options": [
      "테이블에 EMP_NAME 이 A 또는 a 로 시작하는 모든 ROW 를 조회한다.",
      "테이블에 EMP_NAME 이 A 로 시작하는 모든 ROW 를 조회한다.",
      "테이블에 EMP_NAME 이 A 로 끝나는 모든 ROW 를 조회한다.",
      "테이블에 EMP_NAME 이 A 또는 a 로 끝나는 모든 ROW 를 조회한다."
    ],
    "correctIndex": 1,
    "explanation": "LIKE 'A%' 패턴은 \"A 로 시작하는 임의 길이 문자열\" 을 의미한다. Oracle 의 LIKE 는 기본적으로 대소문자 구분이므로 A 로 시작하는 행만 매칭된다.",
    "chapter": "WHERE",
    "_source": "cbt-mock",
    "_origId": "cbt-071",
    "_cbtPdf": "cbt2",
    "_cbtPdfNumber": 31
  },
  {
    "id": 10922,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 123,
    "title": "다음의 SQL 은 파티션별 윈도우의 전체 건수에서 현재 행보다 작거나 같은 건수에 대해서 누적 백분율을 구하는 SQL 문이다. 빈칸에 들어갈 함수로 알맞은 것은?",
    "options": [
      "NTILE()",
      "LEAD()",
      "LAG()",
      "CUME_DIST()"
    ],
    "correctIndex": 3,
    "explanation": "CUME_DIST 함수는 파티션별 윈도우의 전체 건수에서 현재 행보다 작거나 같은 건수에 대한 상대적 누적 분포도 (cumulative distribution) 값을 반환한다. NTILE 은 N 그룹 분배, LEAD/LAG 는 인접 행 값.",
    "chapter": "윈도우 함수",
    "_source": "cbt-mock",
    "_origId": "cbt-072",
    "_cbtPdf": "cbt2",
    "_cbtPdfNumber": 32,
    "references": [
      {
        "type": "sql",
        "code": "SELECT DEPTNO, ENAME, SAL,\n       (   ) OVER (PARTITION BY DEPTNO ORDER BY SAL DESC) AS PCT\nFROM   EMP;"
      }
    ]
  },
  {
    "id": 10923,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 124,
    "title": "'TEST' 테이블에 있는 NUM2 컬럼의 총 행은 10 개이고 2 개의 NULL 값이 있다. 다음의 SQL 문을 실행할 경우 결과값은?\n\nㄱ : `SELECT COUNT(*) FROM TEST;`\nㄴ : `SELECT COUNT(NUM2) FROM TEST;`",
    "options": [
      "ㄱ - 10, ㄴ - 10",
      "ㄱ - 10, ㄴ - 8",
      "ㄱ - 8, ㄴ - 10",
      "ㄱ - 8, ㄴ - 8"
    ],
    "correctIndex": 1,
    "explanation": "COUNT(*) 는 NULL 포함 모든 행을 세므로 10. COUNT(컬럼명) 은 NULL 을 제외하고 세므로 10 - 2 = 8.",
    "chapter": "그룹 함수",
    "_source": "cbt-mock",
    "_origId": "cbt-073",
    "_cbtPdf": "cbt2",
    "_cbtPdfNumber": 35
  },
  {
    "id": 10924,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 125,
    "title": "다음 중 DML (데이터 조작어) 에 해당하는 SQL 은?",
    "options": [
      "CREATE TABLE",
      "INSERT INTO EMP VALUES (...)",
      "GRANT SELECT ON EMP TO USER1",
      "ROLLBACK"
    ],
    "correctIndex": 1,
    "explanation": "INSERT 는 DML (데이터 조작어), CREATE 는 DDL (데이터 정의어), GRANT 는 DCL (데이터 제어어), ROLLBACK 은 TCL (트랜잭션 제어어) 이다.",
    "chapter": "DML",
    "_source": "cbt-mock",
    "_origId": "cbt-074",
    "_cbtPdf": "cbt2",
    "_cbtPdfNumber": 38
  },
  {
    "id": 10925,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 126,
    "title": "COMMIT 과 ROLLBACK 의 장점으로 적합하지 않은 것은 무엇인가?",
    "options": [
      "데이터 무결성을 보장한다.",
      "영구적인 변경을 할 수 없게 한다.",
      "영구적인 변경을 하기 전에 데이터의 변경 사항 확인이 가능하다.",
      "논리적으로 연관된 작업을 그룹핑하여 처리 가능하다."
    ],
    "correctIndex": 1,
    "explanation": "COMMIT/ROLLBACK 의 장점은 — 데이터 무결성 보장, 영구적인 변경을 하기 전에 데이터의 변경 사항 확인 가능, 논리적으로 연관된 작업을 그룹핑하여 처리 가능. ② 는 정반대 진술 (TCL 은 영구적 변경을 가능하게 한다).",
    "chapter": "DCL·TCL",
    "_source": "cbt-mock",
    "_origId": "cbt-075",
    "_cbtPdf": "cbt2",
    "_cbtPdfNumber": 40
  },
  {
    "id": 10926,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 127,
    "title": "다음 중 USER_ID 가 대문자 알파벳으로 시작하고 숫자로 끝나는 사용자만 조회하는 조건으로 알맞은 것은?",
    "options": [
      "WHERE REGEXP_LIKE(USER_ID, '^[A-Z].*[0-9]$')",
      "WHERE USER_ID LIKE '[A-Z]%[0-9]'",
      "WHERE USER_ID LIKE '[A-Z]%[0-9]$'",
      "WHERE REGEXP_LIKE(USER_ID, '[0-9].*[A-Z]$')"
    ],
    "correctIndex": 0,
    "explanation": "정규 표현식에서 ^ 는 시작, $ 는 끝을 의미한다. '^[A-Z].*[0-9]$' 는 \"대문자 알파벳으로 시작하고, 숫자로 끝나는 문자열\" 을 의미한다. Oracle 에서는 복잡한 문자열 패턴 매칭이 필요한 경우 REGEXP_LIKE 를 사용해야 하며, LIKE 는 단순한 와일드카드 (%, _) 만 지원한다.",
    "chapter": "정규 표현식",
    "_source": "cbt-mock",
    "_origId": "cbt-076",
    "_cbtPdf": "cbt2",
    "_cbtPdfNumber": 42,
    "references": [
      {
        "type": "table",
        "caption": "[TB_USER] 테이블",
        "headers": [
          "USER_ID"
        ],
        "rows": [
          [
            "A123"
          ],
          [
            "1ABC"
          ],
          [
            "B5"
          ],
          [
            "C_99"
          ],
          [
            "DEND"
          ],
          [
            "Z8"
          ]
        ]
      }
    ]
  },
  {
    "id": 10927,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 128,
    "title": "다음 SQL 실행 결과로 가장 알맞은 것은? (단, TAB 테이블은 5 건의 데이터가 존재한다.)\n\n`SELECT COUNT(NULL), COUNT(*), COUNT(1) FROM TAB;`",
    "options": [
      "0, 5, 5",
      "5, 5, 5",
      "0, 5, 1",
      "1, 1, 1"
    ],
    "correctIndex": 0,
    "explanation": "COUNT(*) 는 NULL 여부와 무관하게 모든 행 수를 계산하므로 5. COUNT(1) 은 모든 행에 1 (NULL 아님) 을 부여하므로 5. COUNT(NULL) 은 NULL 무시 → 0.",
    "chapter": "그룹 함수",
    "_source": "cbt-mock",
    "_origId": "cbt-077",
    "_cbtPdf": "cbt2",
    "_cbtPdfNumber": 45
  },
  {
    "id": 10928,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 129,
    "title": "아래 SQL 에서 출력되는 ROWS 의 개수를 구하시오.",
    "options": [
      "10건",
      "14건",
      "18건",
      "20건"
    ],
    "correctIndex": 2,
    "explanation": "EMP·DEPT 를 DEPTNO 로 조인 후 GROUP BY CUBE(DNAME, JOB) 을 실행. CUBE 는 (DNAME, JOB), (DNAME), (JOB), () 모든 조합 산출. 데이터 기준 (DNAME, JOB) 9 행 + (DNAME) 3 행 + (JOB) 5 행 + () 1 행 = 18 행.",
    "chapter": "그룹 함수",
    "_source": "cbt-mock",
    "_origId": "cbt-078",
    "_cbtPdf": "cbt2",
    "_cbtPdfNumber": 47,
    "references": [
      {
        "type": "table",
        "caption": "[EMP TABLE]",
        "headers": [
          "DEPTNO",
          "JOB",
          "SAL"
        ],
        "rows": [
          [
            "20",
            "CLERK",
            "800"
          ],
          [
            "30",
            "SALESMAN",
            "1600"
          ],
          [
            "30",
            "SALESMAN",
            "1250"
          ],
          [
            "20",
            "MANAGER",
            "2975"
          ],
          [
            "30",
            "SALESMAN",
            "1250"
          ],
          [
            "30",
            "MANAGER",
            "2850"
          ],
          [
            "10",
            "MANAGER",
            "2450"
          ],
          [
            "20",
            "ANALYST",
            "3000"
          ],
          [
            "10",
            "PRESIDENT",
            "5000"
          ],
          [
            "30",
            "SALESMAN",
            "1500"
          ],
          [
            "20",
            "CLERK",
            "1100"
          ],
          [
            "30",
            "CLERK",
            "950"
          ],
          [
            "20",
            "ANALYST",
            "3000"
          ],
          [
            "10",
            "CLERK",
            "1300"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "[DEPT TABLE]",
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
          ],
          [
            "40",
            "OPERATIONS"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT DNAME, JOB, COUNT(*) \"Total Emp\", SUM(SAL) \"Total Sal\"\nFROM   SCOTT.EMP A, SCOTT.DEPT B\nWHERE  A.DEPTNO = B.DEPTNO\nGROUP BY CUBE(DNAME, JOB);"
      }
    ]
  },
  {
    "id": 10929,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 130,
    "title": "다음 설명에 해당하는 데이터 모델링은?\n\n• 추상화 수준이 높고 업무 중심적이며 포괄적인 수준의 모델링을 진행한다.\n• 전사적 데이터 모델링 또는 EA 수립 시 많이 이용된다.",
    "options": [
      "물리적 데이터 모델링",
      "논리적 데이터 모델링",
      "개념적 데이터 모델링",
      "추상적 데이터 모델링"
    ],
    "correctIndex": 2,
    "explanation": "개념적 데이터 모델링 — 전사적 관점에서 기업의 데이터를 모델링한다. 추상화 수준이 가장 높은 모델링이다. 계층형·네트워크·관계형 모델에 관계없이 업무 측면에서 모델링한다.",
    "chapter": "데이터 모델 개념",
    "_source": "cbt-mock",
    "_origId": "cbt-079",
    "_cbtPdf": "cbt2",
    "_cbtPdfNumber": 50
  },
  {
    "id": 10930,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 131,
    "title": "다음 중 문법적으로 올바른 SQL 은?",
    "options": [
      "SELECT * WHERE DEPTNO = 10 FROM EMP;",
      "SELECT EMP, * FROM SALARY;",
      "SELECT * FROM EMPLOYEE WHERE SALARY > 2000;",
      "SELECT WHERE NAME = 'A' * FROM EMP;"
    ],
    "correctIndex": 2,
    "explanation": "SQL 의 작성 순서는 SELECT - FROM - WHERE 이며, WHERE 절이 FROM 절보다 앞에 오거나 컬럼 위치가 잘못된 ①②④ 는 모두 문법 오류이다. ③ 만 정상.",
    "chapter": "관계형 DB와 SELECT",
    "_source": "cbt-mock",
    "_origId": "cbt-080",
    "_cbtPdf": "cbt3",
    "_cbtPdfNumber": 3
  },
  {
    "id": 10931,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 132,
    "title": "SELECT 문의 처리 순서로 올바른 것은?\n\n`SELECT deptno, sum(sal) FROM dept WHERE deptno > 10 GROUP BY deptno ORDER BY deptno;`",
    "options": [
      "WHERE, GROUP BY, ORDER BY, FROM, SELECT",
      "FROM, WHERE, GROUP BY, SELECT, ORDER BY",
      "SELECT, FROM, WHERE, GROUP BY, ORDER BY",
      "ORDER BY, SELECT, WHERE, GROUP BY, FROM"
    ],
    "correctIndex": 1,
    "explanation": "SQL 의 실제 실행 순서는 FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY 이다. SELECT 의 별칭을 WHERE 에서 못 쓰고 ORDER BY 에서 쓸 수 있는 이유.",
    "chapter": "관계형 DB와 SELECT",
    "_source": "cbt-mock",
    "_origId": "cbt-081",
    "_cbtPdf": "cbt3",
    "_cbtPdfNumber": 4
  },
  {
    "id": 10932,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 133,
    "title": "다음 SQL 의 실행 결과로 올바른 것은? (단, Oracle 환경이다.)\n\n`SELECT TO_CHAR(TO_DATE('2025030220', 'YYYYMMDDHH24') + 2/24/60/60, 'YYYY-MM-DD HH24:MI:SS') FROM DUAL;`",
    "options": [
      "2025/03/02 20:00:02",
      "2025-03-02 20:00:02",
      "2025/03/02 20:02:00",
      "2025-03-02 20:02:00"
    ],
    "correctIndex": 1,
    "explanation": "Oracle 에서 날짜형에 +1 을 하면 day(일, 하루) 로 인식한다. 1/24 는 1 시간, 1/24/60 은 1 분, 1/24/60/60 은 1 초. 따라서 2/24/60/60 은 2 초. 2025-03-02 20:00:00 + 2초 = 20:00:02. TO_CHAR 포맷팅으로 \"YYYY-MM-DD HH24:MI:SS\" 형식 출력 → \"2025-03-02 20:00:02\".",
    "chapter": "함수",
    "_source": "cbt-mock",
    "_origId": "cbt-082",
    "_cbtPdf": "cbt3",
    "_cbtPdfNumber": 5
  },
  {
    "id": 10933,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 134,
    "title": "4 개의 테이블로부터 필요한 칼럼을 조회하려고 한다. 최소 몇 개의 JOIN 조건이 필요한가?",
    "options": [
      "2 개",
      "3 개",
      "4 개",
      "5 개"
    ],
    "correctIndex": 1,
    "explanation": "여러 테이블로부터 원하는 데이터를 조회하기 위해서는 전체 테이블 개수에서 최소 N-1 개만큼의 JOIN 조건이 필요하다. 4-1 = 3 개.",
    "chapter": "조인",
    "_source": "cbt-mock",
    "_origId": "cbt-083",
    "_cbtPdf": "cbt3",
    "_cbtPdfNumber": 6
  },
  {
    "id": 10934,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 135,
    "title": "다음의 SQL 문에 대한 설명으로 올바르지 않은 것은?\n\n`SELECT JOB, ENAME, SAL, RANK() OVER (ORDER BY SAL DESC) ALL_RANK, RANK() OVER (PARTITION BY JOB ORDER BY SAL DESC) JOB_RANK FROM EMP;`",
    "options": [
      "SAL 컬럼이 큰 순서로 ALL_RANK 가 부여된다.",
      "JOB 별로 SAL 이 큰 순서로 JOB_RANK 가 부여된다.",
      "RANK() 함수를 사용했으므로 동일 값이 있더라도 결과의 차이가 1 위에 2 명 있을 수도 있다.",
      "PARTITION 을 사용해서 JOB 별로 RANK 처리할 수 있다."
    ],
    "correctIndex": 2,
    "explanation": "RANK() 함수는 동일한 값에 동일한 순위를 부여한다. 즉 1 위에 2 명이 있으면 둘 다 1 위가 되고 다음은 3 위로 건너뛴다. ③ 의 \"결과의 차이\" 라는 표현은 옳지 않다.",
    "chapter": "윈도우 함수",
    "_source": "cbt-mock",
    "_origId": "cbt-084",
    "_cbtPdf": "cbt3",
    "_cbtPdfNumber": 8
  },
  {
    "id": 10935,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 136,
    "title": "다음은 윈도우 함수에 대한 설명이다. 현재 행을 기준으로 파티션 내에서 앞의 한 건, 현재 행, 다음의 한 건을 처리하는 OVER 절은?",
    "options": [
      "ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING",
      "RANGE UNBOUNDED PRECEDING",
      "ROWS BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING",
      "ROWS BETWEEN 1 AND 2"
    ],
    "correctIndex": 0,
    "explanation": "ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING 은 현재 행 기준으로 앞 1 건 + 현재 1 건 + 뒤 1 건 = 총 3 건의 윈도우 프레임을 정의한다.",
    "chapter": "윈도우 함수",
    "_source": "cbt-mock",
    "_origId": "cbt-085",
    "_cbtPdf": "cbt3",
    "_cbtPdfNumber": 9
  },
  {
    "id": 10936,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 137,
    "title": "다음 SQL 실행 결과는 몇 건인가?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 1,
    "explanation": "두 테이블을 FULL OUTER JOIN ON A.ID = B.ID 한 후 WHERE A.ID IS NULL OR B.ID IS NULL 로 필터. A 와 B 양쪽에 공통이 있는 행은 (1, 1), (2, 2). FULL OUTER 는 A 만의 (3, NULL), (4, NULL) 과 B 만의 (NULL, 5), (NULL, NULL?) 도 포함. 두 테이블 데이터 기준 매칭 안되는 2 건이 출력된다.",
    "chapter": "조인",
    "_source": "cbt-mock",
    "_origId": "cbt-086",
    "_cbtPdf": "cbt3",
    "_cbtPdfNumber": 11,
    "references": [
      {
        "type": "table",
        "caption": "[A] 테이블",
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
          ],
          [
            "4"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "[B] 테이블",
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
            "NULL"
          ],
          [
            "5"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT *\nFROM   A FULL OUTER JOIN B ON A.ID = B.ID\nWHERE  A.ID IS NULL OR B.ID IS NULL;"
      }
    ]
  },
  {
    "id": 10937,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 138,
    "title": "데이터 모델링의 세 가지 중요 개념에 속하지 않는 것은?",
    "options": [
      "업무가 관여하는 어떤 것 (Things)",
      "업무가 관여하는 어떤 것의 성격 (Attributes)",
      "업무가 관여하는 어떤 것의 행위 (Events)",
      "업무가 관여하는 어떤 것의 관계 (Relationships)"
    ],
    "correctIndex": 2,
    "explanation": "데이터 모델링의 3 가지 중요 개념: Things (엔터티), Attributes (속성), Relationships (관계). Events 는 포함되지 않는다.",
    "chapter": "데이터 모델 개념",
    "_source": "cbt-mock",
    "_origId": "cbt-087",
    "_cbtPdf": "cbt3",
    "_cbtPdfNumber": 12
  },
  {
    "id": 10938,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 139,
    "title": "다음의 SQL 문에 대한 설명으로 올바르지 않은 것은?\n\nㄱ : `SELECT SUM(SAL) FROM EMP GROUP BY DEPTNO;`\nㄴ : `SELECT SUM(SAL) FROM EMP GROUP BY ROLLUP(DEPTNO);`",
    "options": [
      "ㄱ 은 부서별 합계를 출력한다.",
      "ㄱ 과 ㄴ 의 결과 행 수는 동일하다.",
      "ㄴ 은 부서별 합계와 그룹별 전체합계가 출력된다.",
      "ㄱ 의 SQL 문은 전체합계는 출력되지 않는다."
    ],
    "correctIndex": 1,
    "explanation": "ㄱ 과 ㄴ 의 SQL 문의 행 수는 다르다. ROLLUP 은 전체합계가 추가적으로 출력되어 ㄱ 의 행 수보다 1 행이 많다.",
    "chapter": "그룹 함수",
    "_source": "cbt-mock",
    "_origId": "cbt-088",
    "_cbtPdf": "cbt3",
    "_cbtPdfNumber": 14
  },
  {
    "id": 10939,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 140,
    "title": "다음과 같은 SQL 문장이 있다. 예제의 ORDER BY 절과 같은 결과를 갖는 구문은 어떤 것인가?\n\n`SELECT PLAYER_NAME, POSITION, BACK_NO FROM PLAYER ORDER BY PLAYER_NAME, POSITION, BACK_NO DESC;`",
    "options": [
      "ORDER BY 인적신원 ASC, 포지션, 3 DESC",
      "ORDER BY 인적신원, 2, DESC 백넘버",
      "ORDER BY PLAYER_NAME ASC, 2, 3",
      "ORDER BY 1 DESC, 2, 백넘버"
    ],
    "correctIndex": 2,
    "explanation": "ORDER BY 절의 정렬 기준을 명시하지 않으면 기본값 ASC 로 정렬된다. ORDER BY 절에는 컬럼명, SELECT 절에 기술된 컬럼의 순번 (1, 2, 3...) 또는 컬럼의 ALIAS 명을 사용할 수 있다. ③ 은 PLAYER_NAME ASC + POSITION (순번 2, 기본 ASC) + BACK_NO (순번 3, 기본 ASC) — 단 마지막 BACK_NO 는 원래 DESC 였으므로 ③ 도 완벽하지 않으나 가장 가까운 답안.",
    "chapter": "ORDER BY",
    "_source": "cbt-mock",
    "_origId": "cbt-089",
    "_cbtPdf": "cbt3",
    "_cbtPdfNumber": 16
  },
  {
    "id": 10940,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 141,
    "title": "서브쿼리에 대한 설명으로 올바르지 않은 것은?",
    "options": [
      "서브쿼리는 SELECT, FROM, WHERE 절 등 일반적으로 사용 가능하다.",
      "서브쿼리는 단일 행 또는 다중 행 결과를 반환할 수 있다.",
      "서브쿼리는 ORDER BY 사용 가능 여부에 제약이 있다.",
      "서브쿼리는 메인 쿼리보다 무조건 먼저 실행된다."
    ],
    "correctIndex": 3,
    "explanation": "서브쿼리의 실행 시점은 종류에 따라 다르다. 비상관 서브쿼리는 메인 쿼리 전에 한 번 실행되지만, 상관 서브쿼리(Correlated Subquery)는 메인 쿼리의 각 행에 대해 매번 실행된다. \"무조건 먼저 실행된다\" 는 옳지 않다.",
    "chapter": "서브쿼리",
    "_source": "cbt-mock",
    "_origId": "cbt-090",
    "_cbtPdf": "cbt3",
    "_cbtPdfNumber": 17
  },
  {
    "id": 10941,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 142,
    "title": "다음 설명 중 옳지 않은 것은?",
    "options": [
      "SELECT 문은 데이터를 조회하는 명령어이다.",
      "INSERT 문은 데이터를 입력하는 명령어이다.",
      "UPDATE 문은 데이터를 수정하는 명령어이다.",
      "DELETE 문은 테이블의 구조를 삭제하는 명령어이다."
    ],
    "correctIndex": 3,
    "explanation": "DELETE 문은 테이블의 \"데이터\" 를 삭제하는 DML 명령어이다. 테이블의 \"구조\" 를 삭제하는 것은 DROP TABLE 명령 (DDL) 이다.",
    "chapter": "관계형 DB와 SELECT",
    "_source": "cbt-mock",
    "_origId": "cbt-091",
    "_cbtPdf": "cbt3",
    "_cbtPdfNumber": 18
  },
  {
    "id": 10942,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 143,
    "title": "다음 SQL 실행 결과로 가장 알맞은 것은?",
    "options": [
      "YEAR=2024, QUARTER=Q1, METRIC=SALES, VALUE=100 등 4 행 (YEAR/QUARTER/METRIC/VALUE 4 컬럼)",
      "SALES 컬럼과 PROFIT 컬럼만 출력",
      "2024 Q1 SALES 100, 2024 Q1 PROFIT 30, 2024 Q2 SALES 150, 2024 Q2 PROFIT 50 으로 4 행 (UNPIVOT 결과)",
      "2024 Q1 SALES PROFIT 등 단일 행으로 출력"
    ],
    "correctIndex": 2,
    "explanation": "UNPIVOT 은 가로로 펼쳐진 컬럼 (SALES, PROFIT) 을 세로로 변환한다. 결과는 (YEAR, QUARTER, METRIC, VALUE) 4 컬럼 — METRIC 은 \"SALES\" 또는 \"PROFIT\" 의 라벨, VALUE 는 해당 셀 값. 입력 2 행 × 2 컬럼 = 4 행.",
    "chapter": "관계형 DB와 SELECT",
    "_source": "cbt-mock",
    "_origId": "cbt-092",
    "_cbtPdf": "cbt3",
    "_cbtPdfNumber": 23,
    "references": [
      {
        "type": "sql",
        "code": "SELECT * FROM (\n  SELECT '2024' AS YEAR, 'Q1' AS QUARTER, 100 AS SALES, 30 AS PROFIT FROM DUAL\n  UNION ALL\n  SELECT '2024', 'Q2', 150, 50 FROM DUAL\n)\nUNPIVOT (\n  VALUE FOR METRIC IN (SALES, PROFIT)\n);"
      }
    ]
  },
  {
    "id": 10943,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 144,
    "title": "엔터티에 대한 설명으로 올바르지 않은 것은?",
    "options": [
      "엔터티는 두 개 이상의 속성을 가져야 한다.",
      "엔터티는 식별자가 없어도 된다.",
      "엔터티는 두 개 이상의 인스턴스를 가져야 한다.",
      "엔터티명은 단어 사용된 한국어 또는 영어로 표기한다."
    ],
    "correctIndex": 1,
    "explanation": "엔터티는 반드시 식별자 (PK) 를 가져야 한다. 식별자가 없으면 인스턴스를 구분할 수 없으므로 엔터티로 성립하지 않는다.",
    "chapter": "엔터티",
    "_source": "cbt-mock",
    "_origId": "cbt-093",
    "_cbtPdf": "cbt3",
    "_cbtPdfNumber": 24
  },
  {
    "id": 10944,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 145,
    "title": "다음 중 논리적 데이터 독립성 (Logical Data Independence) 에 대한 설명으로 옳은 것은?",
    "options": [
      "내부 스키마가 변경되어도 응용 프로그램이 영향을 받지 않는다.",
      "저장 장치의 변경이 응용 프로그램에 영향을 주지 않는다.",
      "외부 스키마가 바뀌어도 데이터의 물리적 저장 구조는 변경되지 않는다.",
      "개념 스키마가 변경되어도 외부 스키마와 응용 프로그램이 영향을 받지 않는다."
    ],
    "correctIndex": 3,
    "explanation": "논리적 데이터 독립성은 개념 스키마 (논리적 구조) 가 변경되어도 외부 스키마와 응용 프로그램이 영향을 받지 않는 성질이다. 물리적 데이터 독립성은 내부 스키마 (저장 구조) 변경이 개념·외부 스키마에 영향을 주지 않는 성질.",
    "chapter": "데이터 모델 개념",
    "_source": "cbt-mock",
    "_origId": "cbt-094",
    "_cbtPdf": "cbt3",
    "_cbtPdfNumber": 25
  },
  {
    "id": 10945,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 146,
    "title": "다음 SQL 실행 결과로 가장 알맞은 것은?\n\n`SELECT REGEXP_SUBSTR('abc1234@domain.com', '[a-z]+', 1, 2) AS RESULT FROM DUAL;`",
    "options": [
      "abc123",
      "abc",
      "123",
      "domain"
    ],
    "correctIndex": 3,
    "explanation": "REGEXP_SUBSTR 함수는 정규식 패턴에 매칭되는 부분을 반환한다. '[a-z]+' 패턴은 소문자 알파벳 연속을 매칭. 시작 위치 1, 2 번째 발생 (occurrence) → 첫 번째 매칭은 \"abc\", 두 번째 매칭은 \"domain\". 따라서 \"domain\" 이 반환된다.",
    "chapter": "정규 표현식",
    "_source": "cbt-mock",
    "_origId": "cbt-095",
    "_cbtPdf": "cbt3",
    "_cbtPdfNumber": 27
  },
  {
    "id": 10946,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 147,
    "title": "다음 모델의 배송 엔터티에서 고객의 정보를 찾을 때, 성능 향상과 SQL 문장을 단순화하는 가장 적절한 반정규화 방법은 무엇인가? (단, 배송 엔터티는 고객의 자식 엔터티이다.)",
    "options": [
      "고객 엔터티에 배송 정보를 모두 합치는 통합 테이블 생성",
      "고객과 배송 사이에 새로운 중간 엔터티 추가",
      "고객 엔터티의 식별자를 배송 엔터티의 외래키로 추가하여 관계 중복 제거",
      "고객의 모든 정보를 모두 배송 엔터티의 속성으로 반정규화"
    ],
    "correctIndex": 0,
    "explanation": "실무적으로 가장 많이 활용되는 반정규화 기법은 \"관계의 반정규화\" — 자주 함께 조회되는 부모 엔터티의 속성을 자식 엔터티에 중복 저장하여 두 테이블의 조인 경로를 단축한다. (출제자 의도 답안 ① 보존)",
    "chapter": "관계",
    "_source": "cbt-mock",
    "_origId": "cbt-096",
    "_cbtPdf": "cbt3",
    "_cbtPdfNumber": 28
  },
  {
    "id": 10947,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 148,
    "title": "윈도우 함수 중에서 윈도우에서 제일 먼저 나오는 것을 0 으로 하고 제일 늦게 나오는 것을 1 로 해서 행 순서별 백분율을 구하는 것은?",
    "options": [
      "FIRST_VALUE",
      "LAST_VALUE",
      "PERCENT_RANK",
      "CUME_DIST"
    ],
    "correctIndex": 2,
    "explanation": "PERCENT_RANK 는 첫 행을 0, 마지막 행을 1 로 하여 (RANK - 1) / (전체 행 수 - 1) 공식으로 백분율을 계산한다. CUME_DIST 는 누적 분포 (현재 행보다 작거나 같은 행의 비율) 로 의미가 다르다.",
    "chapter": "윈도우 함수",
    "_source": "cbt-mock",
    "_origId": "cbt-097",
    "_cbtPdf": "cbt3",
    "_cbtPdfNumber": 32
  },
  {
    "id": 10948,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 149,
    "title": "다음 중 데이터 모델링의 세 가지 단계로 가장 올바르게 나열된 것은?",
    "options": [
      "물리 - 논리 - 개념",
      "개념 - 논리 - 물리",
      "논리 - 물리 - 개념",
      "개념 - 물리 - 논리"
    ],
    "correctIndex": 1,
    "explanation": "데이터 모델링은 추상화 수준이 높은 단계 (개념) 부터 점차 구체화 (물리) 되는 순서로 진행된다 — 개념적 모델링 → 논리적 모델링 → 물리적 모델링.",
    "chapter": "데이터 모델 개념",
    "_source": "cbt-mock",
    "_origId": "cbt-098",
    "_cbtPdf": "cbt3",
    "_cbtPdfNumber": 33
  },
  {
    "id": 10949,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 150,
    "title": "다음 SQL 문 아래에 구문을 추가하여 실행하려 한다. 다음 중 오류가 발생하는 구문은?\n\n`SELECT DEPTNO, ROUND(AVG(SAL), 1) AS DEPTNO_AVG_SAL`",
    "options": [
      "FROM EMP",
      "WHERE AVG(SAL) > 2000",
      "GROUP BY DEPTNO",
      "ORDER BY 1 DESC;"
    ],
    "correctIndex": 1,
    "explanation": "AVG 와 같은 집계 함수는 WHERE 절에서 사용할 수 없다. 집계 함수는 GROUP BY 가 실행되어야 쓸 수 있는데 WHERE 절은 GROUP BY 이전에 실행되기 때문. GROUP BY 이후에 실행되는 HAVING 에서는 집계 함수 조건 사용 가능.",
    "chapter": "GROUP BY·HAVING",
    "_source": "cbt-mock",
    "_origId": "cbt-099",
    "_cbtPdf": "cbt3",
    "_cbtPdfNumber": 34
  },
  {
    "id": 10950,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 151,
    "title": "엔터티에 대한 개념 중 엔터티 정의의 공통점 3 가지가 아닌 것은?",
    "options": [
      "데이터베이스 내에서 변별 가능한 객체이다.",
      "엔터티는 사람, 장소, 물건, 사건, 개념 등의 명사에 해당된다.",
      "저장되기 위한 어떤 것 (Thing) 이다.",
      "업무상 관리가 필요한 관심사에 해당된다."
    ],
    "correctIndex": 0,
    "explanation": "엔터티 (Entity) 의 3 가지 공통점: ① 사람·사건·사물·장소 등과 같이 명사 ② 비즈니스 프로세스에서 관리되어야 하는 정보 ③ 저장이 필요한 어떤 것. \"변별 가능한 객체\" 라는 일반 정의는 3 공통점에 직접 포함되지 않는다.",
    "chapter": "엔터티",
    "_source": "cbt-mock",
    "_origId": "cbt-100",
    "_cbtPdf": "cbt3",
    "_cbtPdfNumber": 35
  },
  {
    "id": 10951,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 152,
    "title": "다음 SQL 실행 결과로 가장 알맞은 것은?",
    "options": [
      "A=7000, B=1000",
      "A=7000, C=11000",
      "A=7000, D=1000",
      "A=7000, B=1000, D=1000"
    ],
    "correctIndex": 1,
    "explanation": "인라인 뷰: A=3000+4000=7000, B=1000, C=5000+6000=11000, D=1000. AVG(AMOUNT) = (3000+4000+1000+5000+6000+1000)/6 = 3333.33. WHERE TOTAL > 3333 만족: A (7000), C (11000).",
    "chapter": "서브쿼리",
    "_source": "cbt-mock",
    "_origId": "cbt-101",
    "_cbtPdf": "cbt3",
    "_cbtPdfNumber": 36,
    "references": [
      {
        "type": "table",
        "caption": "[TB_ORDER] 테이블",
        "headers": [
          "ORDER_ID",
          "CUSTOMER",
          "AMOUNT"
        ],
        "rows": [
          [
            "1",
            "A",
            "3000"
          ],
          [
            "2",
            "A",
            "4000"
          ],
          [
            "3",
            "B",
            "1000"
          ],
          [
            "4",
            "C",
            "5000"
          ],
          [
            "5",
            "C",
            "6000"
          ],
          [
            "6",
            "D",
            "1000"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT CUSTOMER, TOTAL\nFROM   (\n  SELECT CUSTOMER, SUM(AMOUNT) AS TOTAL\n  FROM   TB_ORDER\n  GROUP BY CUSTOMER\n)\nWHERE  TOTAL > (SELECT AVG(AMOUNT) FROM TB_ORDER);"
      }
    ]
  },
  {
    "id": 10952,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 153,
    "title": "다음 테이블에 대한 매출 누적을 구하는 SQL 문을 작성하시오. (윈도우 함수 사용)",
    "options": [
      "SELECT 영업사원, 판매월, SUM(매출) OVER (PARTITION BY 영업사원 ORDER BY 판매월 RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS 누적매출 FROM 매출;",
      "SELECT 영업사원, 판매월, SUM(매출) OVER (PARTITION BY 영업사원 ORDER BY 판매월 RANGE BETWEEN CURRENT ROW) AS 누적매출 FROM 매출;",
      "SELECT 영업사원, 판매월, SUM(매출) OVER (PARTITION BY 판매월 RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS 누적매출 FROM 매출;",
      "SELECT 영업사원, 판매월, SUM(매출) FROM GROUP BY 영업사원 판매월;"
    ],
    "correctIndex": 0,
    "explanation": "영업사원별 누적 매출이므로 PARTITION BY 영업사원 으로 사원별 윈도우를 분리한다. UNBOUNDED PRECEDING AND CURRENT ROW 는 처음부터 현재 행까지의 누적 합을 의미.",
    "chapter": "윈도우 함수",
    "_source": "cbt-mock",
    "_origId": "cbt-102",
    "_cbtPdf": "cbt3",
    "_cbtPdfNumber": 37
  },
  {
    "id": 10953,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 154,
    "title": "다음 GROUP BY 와 UNION ALL 조합과 동일한 효과를 주는 그룹 함수는?\n\n`GROUP BY A, B UNION ALL GROUP BY A UNION ALL GROUP BY ()`",
    "options": [
      "ROLLUP(A, B)",
      "CUBE(A, B)",
      "GROUPING SETS((A, B))",
      "GROUPING SETS((A, B), A)"
    ],
    "correctIndex": 0,
    "explanation": "ROLLUP 은 계층적 집계를 수행한다 → ROLLUP(A, B) 는 GROUP BY (A, B) UNION ALL GROUP BY (A) UNION ALL GROUP BY () 의 조합과 동치.",
    "chapter": "그룹 함수",
    "_source": "cbt-mock",
    "_origId": "cbt-103",
    "_cbtPdf": "cbt3",
    "_cbtPdfNumber": 39
  },
  {
    "id": 10954,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 155,
    "title": "다음 테이블에 아래의 쿼리를 순서대로 실행할 경우, 그 결과에 대한 설명으로 올바른 것을 고르시오.\n\n`CREATE TABLE TAB ( COL1 NUMBER PRIMARY KEY, COL2 VARCHAR2(10), COL3 DATE DEFAULT SYSDATE );`\n\n(가) `INSERT INTO TAB(COL1, COL2) VALUES(1, '');`\n(나) `SELECT * FROM TAB WHERE COL2 = '';`\n(다) `UPDATE TAB SET COL2 = 'A' WHERE COL3 IS NULL;`\n(라) `DELETE FROM TAB;`",
    "options": [
      "(가) 는 Oracle 환경 시 COL2 의 NULL 이 입력되고, SQL Server 는 '' (공백) 이 입력된다.",
      "(나) 는 SQL Server 가 1 행을 출력한다.",
      "(다) 는 Oracle 에서 1 건이 변경된다.",
      "(라) 는 모든 데이터가 삭제된다."
    ],
    "correctIndex": 0,
    "explanation": "Oracle 은 INSERT 시 '' (공백 문자열) 를 NULL 로 처리한다. 반면 SQL Server 는 NULL 과 '' 를 구분하여 처리한다. 따라서 (가) 는 Oracle 에서는 COL2 가 NULL, SQL Server 에서는 '' 가 입력된다.",
    "chapter": "DML",
    "_source": "cbt-mock",
    "_origId": "cbt-104",
    "_cbtPdf": "cbt3",
    "_cbtPdfNumber": 41
  },
  {
    "id": 10955,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 156,
    "title": "부서와 사원 테이블을 생성하는 SQL 문장을 수행한 후 튜플 삽입으로 두 테이블의 상태가 다음과 같을 때, 테이블 명령 수행에 대한 결과로 올바르지 않은 것은?",
    "options": [
      "부서 테이블에서 (3, '인사부') 튜플을 삽입한 후 정상 처리된다.",
      "부서 테이블에서 (1, '인사부') 튜플을 삽입하면 PRIMARY KEY 충돌 에러가 발생한다.",
      "사원 테이블에 (3, '홍길동', 1) 을 추가 INSERT 시 정상 처리된다.",
      "사원 테이블에서 부서번호 4 (부서에 없음) 를 가진 튜플을 삽입하면 외래키 제약 위반으로 에러가 발생한다."
    ],
    "correctIndex": 3,
    "explanation": "문제의 정답키는 ④ (옳지 않은 것). FK 제약 위반 시 에러는 정상 동작이지만, 답안 키가 ④ 로 표기되어 있어 문항 의도상 ④ 를 \"옳지 않은 진술\" 로 본 것 (출제자 표기 보존).",
    "chapter": "DDL",
    "_source": "cbt-mock",
    "_origId": "cbt-105",
    "_cbtPdf": "cbt3",
    "_cbtPdfNumber": 42
  },
  {
    "id": 10956,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 157,
    "title": "다음 설명에 해당하는 조인 방식은?\n\n\"테이블을 정렬한 후에 정렬된 테이블을 병합하면서 조인을 실행한다.\"",
    "options": [
      "Hash Join",
      "Inner Join",
      "Nested Loop Join",
      "Sort Merge"
    ],
    "correctIndex": 3,
    "explanation": "Sort Merge 조인은 두 테이블을 각각 조인 키로 정렬 (Sort) 한 후 정렬된 두 테이블을 병합 (Merge) 하면서 조인을 실행한다. Hash 는 해시 테이블 사용, Nested Loop 는 외부 루프 + 내부 루프 방식.",
    "chapter": "조인",
    "_source": "cbt-mock",
    "_origId": "cbt-106",
    "_cbtPdf": "cbt3",
    "_cbtPdfNumber": 43
  },
  {
    "id": 10957,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 158,
    "title": "다음 중 트랜잭션 제어문에 해당하는 명령어는?",
    "options": [
      "SELECT",
      "COMMIT",
      "CREATE",
      "GRANT"
    ],
    "correctIndex": 1,
    "explanation": "TCL (트랜잭션 제어어) 는 COMMIT, ROLLBACK, SAVEPOINT 가 있다. SELECT 는 DML, CREATE 는 DDL, GRANT 는 DCL.",
    "chapter": "DCL·TCL",
    "_source": "cbt-mock",
    "_origId": "cbt-107",
    "_cbtPdf": "cbt3",
    "_cbtPdfNumber": 44
  },
  {
    "id": 10958,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 159,
    "title": "다음 SQL 실행 결과, 최종 출력되는 건 수는?",
    "options": [
      "1",
      "2",
      "3",
      "0"
    ],
    "correctIndex": 0,
    "explanation": "WITH 절 (CTE) 로 REGION_TOTAL 을 만들면: EAST = 1000+2000 = 3000, WEST = 500. WHERE TOTAL > 1500 만족: EAST 만 → COUNT(*) = 1.",
    "chapter": "서브쿼리",
    "_source": "cbt-mock",
    "_origId": "cbt-108",
    "_cbtPdf": "cbt3",
    "_cbtPdfNumber": 45,
    "references": [
      {
        "type": "table",
        "caption": "[TB_ORDER] 테이블",
        "headers": [
          "ORDER_ID",
          "REGION",
          "AMOUNT"
        ],
        "rows": [
          [
            "1",
            "EAST",
            "1000"
          ],
          [
            "2",
            "EAST",
            "2000"
          ],
          [
            "3",
            "WEST",
            "500"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "WITH REGION_TOTAL AS (\n  SELECT REGION, SUM(AMOUNT) AS TOTAL\n  FROM   TB_ORDER\n  GROUP BY REGION\n)\nSELECT COUNT(*) FROM REGION_TOTAL\nWHERE  TOTAL > 1500;"
      }
    ]
  },
  {
    "id": 10959,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 160,
    "title": "다음 슈퍼타입/서브타입 모델에서 설계 단계에서 변환할 수 있는 테이블의 형태가 아닌 것은?",
    "options": [
      "OneToOne Type — 슈퍼타입과 서브타입을 별도의 테이블로 분리 (1:1)",
      "Plus Type — 슈퍼타입과 서브타입을 모두 합쳐 하나의 테이블로 통합",
      "Single Type — 슈퍼타입과 서브타입을 단일 테이블로 통합하지만 서브타입 식별자를 별도로 둠",
      "Multiple Type — 슈퍼타입과 서브타입을 다대다 (M:N) 관계로 변환"
    ],
    "correctIndex": 3,
    "explanation": "슈퍼타입/서브타입 모델의 변환 형태는 ① OneToOne Type ② Plus Type ③ Single Type 의 3 가지. \"Multiple Type / 다대다 변환\" 은 표준 변환 형태에 포함되지 않는다.",
    "chapter": "엔터티",
    "_source": "cbt-mock",
    "_origId": "cbt-109",
    "_cbtPdf": "cbt3",
    "_cbtPdfNumber": 47
  },
  {
    "id": 10960,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 161,
    "title": "다음 중 트랜잭션의 '일관성 (Consistency)' 특성에 대한 설명으로 가장 적절한 것은?",
    "options": [
      "트랜잭션의 실행이 모든 상태에서 변하지 않는다.",
      "트랜잭션의 동시성에 대해 동시 실행 결과보다 더 잘 나타난다.",
      "트랜잭션 실행 전후 데이터가 일관성을 유지한다.",
      "트랜잭션의 결과가 영구적으로 반영된다."
    ],
    "correctIndex": 2,
    "explanation": "일관성 (Consistency) 은 트랜잭션이 실행되기 전과 후에 데이터의 무결성 제약 조건이 위배되지 않고 일관성을 유지한다는 ACID 특성이다. 예: PRIMARY KEY 제약 조건이 트랜잭션 내에서도 항상 유지됨. ④ 는 영속성 (Durability), ② 는 격리성 (Isolation) 에 해당.",
    "chapter": "DCL·TCL",
    "_source": "cbt-mock",
    "_origId": "cbt-110",
    "_cbtPdf": "cbt3",
    "_cbtPdfNumber": 50
  },
  {
    "id": 10961,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 162,
    "title": "다음 SQL 문장의 결과로 출력되는 데이터는 무엇인가?\n\n`SELECT PLAYER_NAME, 인적신원, E_PLAYER_NAME 인사평가별 FROM PLAYER WHERE E_PLAYER_NAME LIKE '_A%';`",
    "options": [
      "선수의 영문 이름의 두 번째 문자가 A 인 선수들",
      "선수의 영문 이름의 A 로 시작되는 선수들 이름",
      "선수의 영문 이름이 A 로 시작하는 선수들",
      "선수의 신상에서 신원이 영문 이름이 A 로 시작되는 선수들의 이름"
    ],
    "correctIndex": 0,
    "explanation": "LIKE '_A%' 패턴의 해석 — '_' 는 임의의 한 문자, 'A' 는 리터럴 A, '%' 는 0 글자 이상. 즉 \"임의 한 글자 + A + 임의 길이\" → 두 번째 문자가 A 인 문자열.",
    "chapter": "WHERE",
    "_source": "cbt-mock",
    "_origId": "cbt-111",
    "_cbtPdf": "cbt4",
    "_cbtPdfNumber": 1
  },
  {
    "id": 10962,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 163,
    "title": "다음 SQL 실행 결과로 가장 알맞은 것은?",
    "options": [
      "ITEM A",
      "ITEM B",
      "ITEM C",
      "오류 발생"
    ],
    "correctIndex": 2,
    "explanation": "Oracle 11g 에서 상위 N 개 데이터를 가져오려면 인라인 뷰에서 ORDER BY 로 정렬한 후 ROWNUM 으로 필터링한다. PRICE 기준 내림차순 정렬에서 가격이 가장 높은 ITEM C (200) 한 행이 ROWNUM = 1 로 추출된다.",
    "chapter": "TOP N 쿼리",
    "_source": "cbt-mock",
    "_origId": "cbt-112",
    "_cbtPdf": "cbt4",
    "_cbtPdfNumber": 4,
    "references": [
      {
        "type": "table",
        "caption": "[TB_ITEM] 테이블",
        "headers": [
          "NAME",
          "PRICE"
        ],
        "rows": [
          [
            "A",
            "100"
          ],
          [
            "B",
            "150"
          ],
          [
            "C",
            "200"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT *\nFROM (\n  SELECT NAME, PRICE\n  FROM   TB_ITEM\n  ORDER BY PRICE DESC\n)\nWHERE  ROWNUM = 1;"
      }
    ]
  },
  {
    "id": 10963,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 164,
    "title": "다음 중 뷰 (View) 에 대한 설명으로 옳지 않은 것은?",
    "options": [
      "뷰는 실행할 때마다 생성된다.",
      "뷰는 SELECT 쿼리를 저장한 객체이다.",
      "뷰는 데이터를 저장하지 않는다.",
      "뷰의 정의에 따라 데이터가 변경되기도 한다."
    ],
    "correctIndex": 0,
    "explanation": "뷰는 미리 생성되어 데이터베이스에 저장된 객체이며, 실행 시 그 SELECT 쿼리가 실행되어 결과가 반환된다. \"실행할 때마다 생성된다\" 는 옳지 않은 설명. 뷰는 SELECT 문을 저장한 객체로 데이터 자체는 가상이며 실제 데이터를 저장하지 않는다.",
    "chapter": "DDL",
    "_source": "cbt-mock",
    "_origId": "cbt-113",
    "_cbtPdf": "cbt4",
    "_cbtPdfNumber": 7
  },
  {
    "id": 10964,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 165,
    "title": "트랜잭션의 특징에 대한 설명으로 올바르지 않은 것은?",
    "options": [
      "원자성 (Atomicity) — 트랜잭션 내의 모든 작업은 모두 수행되거나 모두 수행되지 않아야 한다.",
      "일관성 (Consistency) — 트랜잭션 수행 전후 일관된 데이터 상태가 유지된다.",
      "고립성 (Isolation) — 동시에 실행되는 트랜잭션은 서로 영향을 주지 않아야 한다.",
      "지속성 (Durability) — 트랜잭션이 성공한 후에도 데이터 변경 사항이 사라질 수 있다."
    ],
    "correctIndex": 3,
    "explanation": "지속성 (Durability) 은 트랜잭션이 성공적으로 완료되면 그 결과가 영구적으로 반영되는 특성이다. \"사라질 수 있다\" 는 옳지 않은 진술.",
    "chapter": "DCL·TCL",
    "_source": "cbt-mock",
    "_origId": "cbt-114",
    "_cbtPdf": "cbt4",
    "_cbtPdfNumber": 8
  },
  {
    "id": 10965,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 166,
    "title": "다음 테이블에 입력될 수 없는 INSERT 문은? (단, 보기의 쿼리는 순차적으로 실행한다.)",
    "options": [
      "INSERT INTO TAB1 (COL1, COL2, COL3) VALUES ('A001', 'Y', 'Z');",
      "INSERT INTO TAB1 (COL1, COL3) VALUES ('A002', 'Z2');",
      "INSERT INTO TAB1 (COL2, COL3) VALUES ('A001', 'Z3');",
      "INSERT INTO TAB2 (COL1, COL2, COL3) VALUES ('A002', 'A001', 100);"
    ],
    "correctIndex": 1,
    "explanation": "TAB1.COL2 는 NOT NULL 제약. ② 는 COL2 값을 명시하지 않아 NULL 이 입력되므로 NOT NULL 위반 → 입력 실패. ① 정상 (모든 값 제공). ③ COL1 PK 가 'A001' 로 ① 과 동일해 PK 위반 (단 ② 가 우선 출제 답안). ④ TAB2.COL2 가 TAB1.COL1='A001' 을 참조하는 FK, ① 에서 'A001' 입력됨 → 정상.",
    "chapter": "DML",
    "_source": "cbt-mock",
    "_origId": "cbt-115",
    "_cbtPdf": "cbt4",
    "_cbtPdfNumber": 9,
    "references": [
      {
        "type": "sql",
        "code": "CREATE TABLE TAB1 (\n  COL1 VARCHAR2(10) PRIMARY KEY,\n  COL2 VARCHAR2(10) NOT NULL,\n  COL3 VARCHAR2(10)\n);\n\nCREATE TABLE TAB2 (\n  COL1 VARCHAR2(10) PRIMARY KEY,\n  COL2 VARCHAR2(10) REFERENCES TAB1(COL1),\n  COL3 NUMBER\n);"
      }
    ]
  },
  {
    "id": 10966,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 167,
    "title": "다음 결과는 2 개의 테이블을 어떤 Join 으로 진행한 것인가?",
    "options": [
      "Natural Join",
      "Right Outer Join",
      "Left Outer Join",
      "Full Outer Join"
    ],
    "correctIndex": 3,
    "explanation": "결과 테이블에 EMPNO 만 있고 DEPTNO 가 NULL 인 행 + DEPTNO 만 있고 EMPNO 가 NULL 인 행 + 매칭된 행 모두 포함되어 있다. 이는 양쪽 테이블의 모든 행을 보존하는 FULL OUTER JOIN.",
    "chapter": "조인",
    "_source": "cbt-mock",
    "_origId": "cbt-116",
    "_cbtPdf": "cbt4",
    "_cbtPdfNumber": 13,
    "references": [
      {
        "type": "table",
        "caption": "결과",
        "headers": [
          "EMPNO",
          "DEPTNO"
        ],
        "rows": [
          [
            "7902",
            "20"
          ],
          [
            "7934",
            "10"
          ],
          [
            "(NULL)",
            "40"
          ],
          [
            "8031",
            "(NULL)"
          ]
        ]
      }
    ]
  },
  {
    "id": 10967,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 168,
    "title": "다음 중 SELF JOIN 을 수행해야 할 때는 어떤 경우인가?",
    "options": [
      "한 테이블 내에서 두 컬럼이 연관 관계가 있다.",
      "두 테이블에 공통 컬럼이 없으나 JOIN 을 해야 한다.",
      "두 테이블에 공통 컬럼이 존재하고 두 테이블이 연관 관계가 있다.",
      "한 테이블 내에서 컬럼이 단일 관계가 있다."
    ],
    "correctIndex": 0,
    "explanation": "SELF JOIN 은 하나의 테이블에서 두 개의 컬럼이 연관 관계를 가지고 있는 경우 (예: EMP 의 EMPNO·MGR) 에 사용한다.",
    "chapter": "조인",
    "_source": "cbt-mock",
    "_origId": "cbt-117",
    "_cbtPdf": "cbt4",
    "_cbtPdfNumber": 14
  },
  {
    "id": 10968,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 169,
    "title": "다음 SQL 실행 결과로 가장 알맞은 것은?\n\n`SELECT REPLACE(SUBSTR('ABCDXYZ', 2, 4), 'C', '*') AS RESULT FROM DUAL;`",
    "options": [
      "BC*D",
      "B*D",
      "BC*X",
      "B*DX"
    ],
    "correctIndex": 3,
    "explanation": "SUBSTR('ABCDXYZ', 2, 4) → 두 번째 문자부터 4 글자 = 'BCDX'. REPLACE('BCDX', 'C', '*') → 'B*DX'.",
    "chapter": "함수",
    "_source": "cbt-mock",
    "_origId": "cbt-118",
    "_cbtPdf": "cbt4",
    "_cbtPdfNumber": 18
  },
  {
    "id": 10969,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 170,
    "title": "다음 중에서 집합 연산자의 종류에 해당되지 않은 것을 고르시오.",
    "options": [
      "Union all",
      "Union",
      "Project",
      "Except"
    ],
    "correctIndex": 2,
    "explanation": "Project 는 관계 연산자 (PROJECT 연산) 이며 집합 연산자에 해당하지 않는다. UNION, UNION ALL, INTERSECT, MINUS (EXCEPT) 가 집합 연산자.",
    "chapter": "집합 연산자",
    "_source": "cbt-mock",
    "_origId": "cbt-119",
    "_cbtPdf": "cbt4",
    "_cbtPdfNumber": 19
  },
  {
    "id": 10970,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 171,
    "title": "다음 SQL 문의 실행 순서로 가장 적절한 것은?\n\n`SELECT DEPT, COUNT(*) FROM EMP WHERE SAL > 3000 GROUP BY DEPT HAVING COUNT(*) > 1 ORDER BY DEPT;`",
    "options": [
      "SELECT → WHERE → GROUP BY → HAVING → ORDER BY",
      "FROM → GROUP BY → HAVING → WHERE → SELECT → ORDER BY",
      "FROM → SELECT → GROUP BY → WHERE → ORDER BY → HAVING",
      "FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY"
    ],
    "correctIndex": 3,
    "explanation": "SQL 의 실제 실행 순서는 FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY.",
    "chapter": "관계형 DB와 SELECT",
    "_source": "cbt-mock",
    "_origId": "cbt-120",
    "_cbtPdf": "cbt4",
    "_cbtPdfNumber": 24
  },
  {
    "id": 10971,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 172,
    "title": "다음 SQL 실행 결과로 가장 알맞은 것은?\n\n`SELECT NAME FROM EMP WHERE SAL >= (SELECT MAX(SAL) FROM EMP WHERE DEPT = 10);`",
    "options": [
      "서브쿼리에서 2 행 이상 반환되므로 오류가 발생한다.",
      "A",
      "B",
      "A, C"
    ],
    "correctIndex": 3,
    "explanation": "서브쿼리: DEPT=10 인 SAL = {3000, 2500} 의 MAX = 3000 (단일 행 반환). 메인 쿼리: WHERE SAL >= 3000 → A (3000), C (4000) 출력.",
    "chapter": "서브쿼리",
    "_source": "cbt-mock",
    "_origId": "cbt-121",
    "_cbtPdf": "cbt4",
    "_cbtPdfNumber": 25,
    "references": [
      {
        "type": "table",
        "caption": "[EMP] 테이블",
        "headers": [
          "NAME",
          "DEPT",
          "SAL"
        ],
        "rows": [
          [
            "A",
            "10",
            "3000"
          ],
          [
            "B",
            "10",
            "2500"
          ],
          [
            "C",
            "20",
            "4000"
          ]
        ]
      }
    ]
  },
  {
    "id": 10972,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 173,
    "title": "다음 EMP 테이블에서 사원들의 입사일을 기준으로 이전 입사자와 다음 입사자의 이름을 함께 조회하려고 한다. 빈칸 (ㄱ), (ㄴ) 에 들어갈 알맞은 함수를 짝지은 것은?\n\n`SELECT ENAME, (ㄱ)(ENAME) OVER (ORDER BY HIREDATE) AS PREV_EMP, (ㄴ)(ENAME) OVER (ORDER BY HIREDATE) AS NEXT_EMP FROM EMP;`",
    "options": [
      "(ㄱ) LEAD, (ㄴ) LAG",
      "(ㄱ) LAG, (ㄴ) LEAD",
      "(ㄱ) PREV, (ㄴ) NEXT",
      "(ㄱ) FIRST_VALUE, (ㄴ) LAST_VALUE"
    ],
    "correctIndex": 1,
    "explanation": "LAG 는 이전 행의 값을 반환, LEAD 는 다음 행의 값을 반환. PREV_EMP 는 이전 행 → LAG, NEXT_EMP 는 다음 행 → LEAD.",
    "chapter": "윈도우 함수",
    "_source": "cbt-mock",
    "_origId": "cbt-122",
    "_cbtPdf": "cbt4",
    "_cbtPdfNumber": 26
  },
  {
    "id": 10973,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 174,
    "title": "다음 중 엔터티의 특징에 포함되지 않는 것은?",
    "options": [
      "반드시 해당 엔터티는 필요로 하는 관리하고자 하는 정보이어야 한다.",
      "유일한 식별자에 의해 식별이 가능해야 한다.",
      "엔터티는 속성이 없어도 된다.",
      "엔터티는 업무 프로세스에 의해 이용되어야 한다."
    ],
    "correctIndex": 2,
    "explanation": "엔터티는 속성을 2 개 이상 가지고 있어야 한다. \"속성이 없어도 된다\" 는 엔터티 특징에 포함되지 않는다.",
    "chapter": "엔터티",
    "_source": "cbt-mock",
    "_origId": "cbt-123",
    "_cbtPdf": "cbt4",
    "_cbtPdfNumber": 28
  },
  {
    "id": 10974,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 175,
    "title": "CASE 문에서 ELSE 를 생략하면 어떤 현상이 발생되는가?",
    "options": [
      "ELSE 를 생략하면 해당 데이터가 NULL 로 입력된다.",
      "ELSE 조건이 만족하지 않은 데이터는 출력되지 않는다.",
      "ELSE 조건이 만족하지 않은 데이터는 0 이 입력된다.",
      "ELSE 조건이 만족하지 않은 데이터는 NULL 이 입력된다."
    ],
    "correctIndex": 3,
    "explanation": "CASE WHEN ... THEN ... 구문에서 ELSE 절이 없으면 어떤 WHEN 조건도 만족하지 않은 행에 대해 NULL 이 반환된다.",
    "chapter": "함수",
    "_source": "cbt-mock",
    "_origId": "cbt-124",
    "_cbtPdf": "cbt4",
    "_cbtPdfNumber": 29
  },
  {
    "id": 10975,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 176,
    "title": "분산 데이터베이스의 특징 중 저장 장소 명시가 불필요하다는 특성은 무엇인가?",
    "options": [
      "시간 투명성",
      "위치 투명성",
      "변환 투명성",
      "분할 투명성"
    ],
    "correctIndex": 1,
    "explanation": "위치 투명성 (Location Transparency) 은 사용자가 데이터의 저장 장소를 명시하지 않아도 동일하게 처리될 수 있는 특성을 의미한다.",
    "chapter": "데이터 모델 개념",
    "_source": "cbt-mock",
    "_origId": "cbt-125",
    "_cbtPdf": "cbt4",
    "_cbtPdfNumber": 30
  },
  {
    "id": 10976,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 177,
    "title": "엔터티 간 1:1, 1:M 과 같이 관계의 기수성을 나타내는 것을 무엇이라 하는가?",
    "options": [
      "관계 차수 (Relationship Degree/Cardinality)",
      "관계명 (Relationship Membership)",
      "관계선택성 (Relationship Optionality)",
      "관계정의 (Relationship Definition)"
    ],
    "correctIndex": 0,
    "explanation": "엔터티 간 1:1, 1:M 등과 같이 관계 참여 인스턴스의 수를 지칭하는 것은 관계 차수 (Cardinality) 이다.",
    "chapter": "관계",
    "_source": "cbt-mock",
    "_origId": "cbt-126",
    "_cbtPdf": "cbt4",
    "_cbtPdfNumber": 31
  },
  {
    "id": 10977,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 178,
    "title": "다음 중 NULL 값을 0 으로 대체하는 데 사용하는 함수는?",
    "options": [
      "NVL",
      "UPPER",
      "MOD",
      "ROUND"
    ],
    "correctIndex": 0,
    "explanation": "NVL(expr, value) 은 expr 이 NULL 일 경우 value 를 반환한다. NVL(컬럼, 0) 은 NULL 을 0 으로 대체하는 표준 사용법.",
    "chapter": "함수",
    "_source": "cbt-mock",
    "_origId": "cbt-127",
    "_cbtPdf": "cbt4",
    "_cbtPdfNumber": 32
  },
  {
    "id": 10978,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 179,
    "title": "다음 주어진 SQL 문을 수행한 결과 영구적으로 반영되는 것은 무엇인가?\n\n`INSERT 1; INSERT 2; SAVEPOINT SV1; UPDATE COL1=7 WHERE COL1=2; INSERT 9; SAVEPOINT SV2; DELETE WHERE COL1=7; INSERT 11; SAVEPOINT SV3; INSERT 9; ROLLBACK TO SV2; COMMIT;`",
    "options": [
      "1, 7, 9",
      "1, 9, 11",
      "1, 9, 11, 9",
      "1, 2"
    ],
    "correctIndex": 0,
    "explanation": "단계별 추적: [1, 2] → SAVEPOINT SV1 → [1, 7] → INSERT 9 → [1, 7, 9] → SAVEPOINT SV2 → DELETE 7 → [1, 9] → INSERT 11 → [1, 9, 11] → SAVEPOINT SV3 → INSERT 9 → [1, 9, 11, 9] → ROLLBACK TO SV2 (revert to SV2 state) → [1, 7, 9] → COMMIT. 최종 [1, 7, 9].",
    "chapter": "DCL·TCL",
    "_source": "cbt-mock",
    "_origId": "cbt-128",
    "_cbtPdf": "cbt4",
    "_cbtPdfNumber": 33
  },
  {
    "id": 10979,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 180,
    "title": "다음 설명 중 올바르지 않은 것은?",
    "options": [
      "UNION ALL 연산자는 조회 결과를 정렬하고 중복되는 데이터를 한 번만 표현한다.",
      "UNION 연산자는 조회 결과에 대한 합집합을 나타내며 중복되는 행들을 제외한다.",
      "INTERSECT 연산자는 조회 결과에 대한 교집합을 의미한다.",
      "EXCEPT 연산자는 조회 결과에 대한 차집합을 의미한다."
    ],
    "correctIndex": 0,
    "explanation": "UNION ALL 은 조회 결과에 대해 별도의 정렬 작업을 하지 않고 모든 결과 데이터를 중복까지 모두 표현한다. \"정렬하고 중복 데이터를 한 번만 표현\" 은 UNION 의 특성이다.",
    "chapter": "집합 연산자",
    "_source": "cbt-mock",
    "_origId": "cbt-129",
    "_cbtPdf": "cbt4",
    "_cbtPdfNumber": 35
  },
  {
    "id": 10980,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 181,
    "title": "다음 SQL 문의 결과로 출력되는 데이터는 무엇인가?\n\n`SELECT NEXT_DAY(ADD_MONTHS(SYSDATE, 6), '월요일') FROM DUAL;`",
    "options": [
      "오늘 날짜로부터 6 일 후 첫 번째 월요일을 출력한다.",
      "오늘 날짜로부터 6 개월 후 두 번째 월요일을 출력한다.",
      "오늘 날짜로부터 6 개월 후 첫 번째 월요일을 출력한다.",
      "오늘 날짜로부터 6 일 후 두 번째 월요일을 출력한다."
    ],
    "correctIndex": 2,
    "explanation": "ADD_MONTHS(SYSDATE, 6) 은 오늘 날짜에서 6 개월을 더한 날짜를 반환. NEXT_DAY(date, '월요일') 은 그 날짜 이후 첫 번째 월요일을 반환.",
    "chapter": "함수",
    "_source": "cbt-mock",
    "_origId": "cbt-130",
    "_cbtPdf": "cbt4",
    "_cbtPdfNumber": 42
  },
  {
    "id": 10981,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 182,
    "title": "다음 중 제3 정규형 (3NF) 이 되기 위한 조건으로 알맞은 것은?",
    "options": [
      "기본키가 아닌 컬럼이 다른 일반 컬럼에 이행적으로 종속되는 경우를 제거한다.",
      "도메인 원자성을 확보한다.",
      "모든 컬럼이 기본키에 완전 함수 종속하도록 한다.",
      "다치 종속을 제거한다."
    ],
    "correctIndex": 0,
    "explanation": "제3 정규형 (3NF) 은 제1·제2 정규형을 만족하면서, 기본키가 아닌 속성이 다른 비기본키 속성에 이행적으로 종속되는 경우를 제거한 상태이다. ② 는 1NF, ③ 은 2NF, ④ 는 4NF.",
    "chapter": "정규화",
    "_source": "cbt-mock",
    "_origId": "cbt-131",
    "_cbtPdf": "cbt4",
    "_cbtPdfNumber": 43
  },
  {
    "id": 10982,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 183,
    "title": "다음 SQL 의 실행 결과로 출력되는 행 수는?\n\n`SELECT CUSTOMER_ID, SUM(AMOUNT) FROM TB_ORDER GROUP BY CUSTOMER_ID HAVING SUM(AMOUNT) >= 2000;`",
    "options": [
      "1",
      "2",
      "3",
      "0"
    ],
    "correctIndex": 0,
    "explanation": "CUSTOMER_ID 별 SUM(AMOUNT) — A=1000+1500=2500, B=700+800=1500, C=NULL (제외). HAVING SUM(AMOUNT) >= 2000 만족: A 만 → 1 행.",
    "chapter": "GROUP BY·HAVING",
    "_source": "cbt-mock",
    "_origId": "cbt-132",
    "_cbtPdf": "cbt4",
    "_cbtPdfNumber": 45,
    "references": [
      {
        "type": "table",
        "caption": "[TB_ORDER] 테이블",
        "headers": [
          "ORDER_ID",
          "CUSTOMER_ID",
          "AMOUNT"
        ],
        "rows": [
          [
            "1",
            "A",
            "1000"
          ],
          [
            "2",
            "A",
            "1500"
          ],
          [
            "3",
            "B",
            "700"
          ],
          [
            "4",
            "B",
            "800"
          ],
          [
            "5",
            "C",
            "NULL"
          ]
        ]
      }
    ]
  },
  {
    "id": 10983,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 184,
    "title": "다음 중에서 DDL (Data Definition Language) 에 해당되지 않는 것은?",
    "options": [
      "REVOKE",
      "CREATE INDEX",
      "DROP TABLE",
      "ALTER TABLE"
    ],
    "correctIndex": 0,
    "explanation": "REVOKE 는 권한을 회수하는 DCL (Data Control Language) 이다. DDL 은 CREATE, ALTER, DROP, RENAME, TRUNCATE 등 객체 정의 명령.",
    "chapter": "DDL",
    "_source": "cbt-mock",
    "_origId": "cbt-133",
    "_cbtPdf": "cbt4",
    "_cbtPdfNumber": 47
  },
  {
    "id": 10984,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 185,
    "title": "다음 설명에 해당하는 모델링 관점은 무엇인가?\n\n업무가 어떤 데이터와 관련이 있는지 또는 데이터 간의 관계는 무엇인지에 대해서 모델링하는 관점",
    "options": [
      "프로세스 관점",
      "데이터와 프로세스의 상관 관점",
      "데이터와 데이터 간의 상관 관점",
      "데이터 관점"
    ],
    "correctIndex": 3,
    "explanation": "데이터 관점 (What/Data) — 업무가 어떤 데이터와 관련이 있는지, 또는 데이터 간의 관계는 무엇인지에 대해서 모델링한다. ① 프로세스 관점은 \"How/Process\", ② 는 데이터-프로세스 상관 (Interaction).",
    "chapter": "데이터 모델 개념",
    "_source": "cbt-mock",
    "_origId": "cbt-134",
    "_cbtPdf": "cbt4",
    "_cbtPdfNumber": 48
  },
  {
    "id": 10985,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 186,
    "title": "서브쿼리의 종류 중에 서브쿼리를 실행하고 한 행, 한 컬럼을 반환하는 서브쿼리를 무엇이라고 하는가?",
    "options": [
      "Looping",
      "Scalar Subquery",
      "Associative Subquery",
      "Access Subquery"
    ],
    "correctIndex": 1,
    "explanation": "스칼라 서브쿼리 (Scalar Subquery) 는 SELECT 문에서 사용하는 서브쿼리로 한 행, 한 컬럼만 반환하는 단일 값을 반환하는 서브쿼리이다.",
    "chapter": "서브쿼리",
    "_source": "cbt-mock",
    "_origId": "cbt-135",
    "_cbtPdf": "cbt4",
    "_cbtPdfNumber": 50
  },
  {
    "id": 10986,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 187,
    "title": "다음 중 엔터티 (Entity) 의 명명 기준으로 가장 적절한 것은?",
    "options": [
      "동사로 시작하는 이름을 사용한다.",
      "약어 사용을 우선한다.",
      "가능한 단수형 명사를 사용한다.",
      "내부식별자 값을 포함한다."
    ],
    "correctIndex": 2,
    "explanation": "엔터티는 업무 용어 기반의 단수형 명사를 사용하는 것이 원칙이다. 동사 사용은 부적절하며 약어 사용은 권장되지 않는다.",
    "chapter": "엔터티",
    "_source": "cbt-mock",
    "_origId": "cbt-136",
    "_cbtPdf": "cbt5",
    "_cbtPdfNumber": 17
  },
  {
    "id": 10987,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 188,
    "title": "다음 중 UNION ALL 에 대한 설명으로 옳은 것은?",
    "options": [
      "결과에서 중복을 제거한다.",
      "정렬된 결과를 반환한다.",
      "중복을 포함하여 결과를 모두 출력한다.",
      "두 SELECT 결과의 교집합을 구한다."
    ],
    "correctIndex": 2,
    "explanation": "UNION ALL 은 두 결과 집합을 그대로 결합하며 중복을 제거하지 않고 모두 출력한다. ① UNION 의 특성, ② UNION 은 정렬, ④ INTERSECT 의 특성.",
    "chapter": "집합 연산자",
    "_source": "cbt-mock",
    "_origId": "cbt-137",
    "_cbtPdf": "cbt5",
    "_cbtPdfNumber": 18
  },
  {
    "id": 10988,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 189,
    "title": "다음 중 일반 속성과 설계 속성에 대한 설명으로 올바른 것은?",
    "options": [
      "설계 속성은 요구사항에서 직접 도출된다.",
      "일반 속성은 개발상 편의를 위해 추가된 속성이다.",
      "파생 속성은 무조건 저장되어야 한다.",
      "파생 속성은 다른 속성으로부터 계산된 값을 가진다."
    ],
    "correctIndex": 3,
    "explanation": "파생 속성은 기존 속성으로부터 유도된 값으로 꼭 저장할 필요는 없다. 요구사항에 직접 도출되는 것은 기본 속성이고, 편의를 위해 추가된 속성은 설계 속성이다.",
    "chapter": "속성",
    "_source": "cbt-mock",
    "_origId": "cbt-138",
    "_cbtPdf": "cbt5",
    "_cbtPdfNumber": 19
  },
  {
    "id": 10989,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 190,
    "title": "다음 SQL 실행 결과로 가장 알맞은 것은? (PIVOT 사용)",
    "options": [
      "Alice|NULL|80|95, Bob|NULL|70|88, Charlie|85|90|NULL",
      "Alice|80|95|NULL, Bob|70|NULL|88, Charlie|NULL|90|85",
      "Alice|80|NULL|95, Bob|NULL|70|88, Charlie|NULL|90|85",
      "Alice|95|80|NULL, Bob|88|70|NULL, Charlie|85|90|NULL"
    ],
    "correctIndex": 1,
    "explanation": "PIVOT 은 GAME 컬럼의 값 'Puzzle', 'Shooter', 'Racing' 을 각각 컬럼으로 전환하고 해당 값에 연결된 Score 의 MAX 값을 찾아 반환해준다. Alice: Puzzle 80, Shooter 95, Racing NULL. Bob: Puzzle 70, Racing 88, Shooter NULL. Charlie: Shooter 90, Racing 85, Puzzle NULL.",
    "chapter": "관계형 DB와 SELECT",
    "_source": "cbt-mock",
    "_origId": "cbt-139",
    "_cbtPdf": "cbt5",
    "_cbtPdfNumber": 20,
    "references": [
      {
        "type": "table",
        "caption": "[TB_GAME_SCORE] 테이블",
        "headers": [
          "Player",
          "Game",
          "Score"
        ],
        "rows": [
          [
            "Alice",
            "Puzzle",
            "80"
          ],
          [
            "Alice",
            "Shooter",
            "95"
          ],
          [
            "Bob",
            "Puzzle",
            "70"
          ],
          [
            "Bob",
            "Racing",
            "88"
          ],
          [
            "Charlie",
            "Shooter",
            "90"
          ],
          [
            "Charlie",
            "Racing",
            "85"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT *\nFROM   (\n  SELECT Player, Game, Score FROM TB_GAME_SCORE\n)\nPIVOT (\n  MAX(Score) FOR Game IN ('Puzzle' AS Puzzle, 'Shooter' AS Shooter, 'Racing' AS Racing)\n);"
      }
    ]
  },
  {
    "id": 10990,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 191,
    "title": "다음의 SQL 문에 대한 설명으로 올바른 것은?\n\n`SELECT 'A', 1 FROM DUAL UNION ALL SELECT 1, 'A' FROM DUAL;`",
    "options": [
      "실행 결과는 A, 1, 1, A 가 표현된다.",
      "UNION ALL 을 사용하면 결과만 출력된다.",
      "위의 SQL 문은 실행되지 않는다 (오류 발생).",
      "실행 결과로 첫 행만 표현된다."
    ],
    "correctIndex": 2,
    "explanation": "UNION ALL 결합 시 두 SELECT 의 컬럼 데이터 타입이 일치해야 한다. 'A' (문자) 와 1 (숫자) 은 타입이 달라 컬럼 매칭 불가 → 오류 발생.",
    "chapter": "집합 연산자",
    "_source": "cbt-mock",
    "_origId": "cbt-140",
    "_cbtPdf": "cbt5",
    "_cbtPdfNumber": 23
  },
  {
    "id": 10991,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 192,
    "title": "JOIN 의 종류에 대한 설명으로 틀린 것은?",
    "options": [
      "NON-EQUI JOIN 은 두 조건이 일치하지 않은 데이터에 대해서 결과를 만든다.",
      "EQUI JOIN 은 인덱스 기준으로 사용하여 처리할 수 있다.",
      "OUTER JOIN 은 JOIN 조건의 만족하지 않는 데이터의 결과를 출력한다.",
      "SELF JOIN 은 자기 자신을 두 번 사용 데이터를 동일하게 사용한다."
    ],
    "correctIndex": 1,
    "explanation": "EQUI JOIN 의 처리 방법은 키 정보·인덱스 사용 여부에 따라 달라지며 항상 인덱스를 사용하는 것은 아니다. 옵티마이저가 비용 기반으로 인덱스 또는 풀 스캔을 선택할 수 있다.",
    "chapter": "조인",
    "_source": "cbt-mock",
    "_origId": "cbt-141",
    "_cbtPdf": "cbt5",
    "_cbtPdfNumber": 27
  },
  {
    "id": 10992,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 193,
    "title": "우선순위를 계산하는 윈도우 함수에서 동일한 우선순위가 나와도 고유의 값을 부여하기 위한 방법으로 알맞은 것은?",
    "options": [
      "RANK() OVER (PARTITION BY DEPTNO ORDER BY SAL DESC) DEPT_RANK",
      "DENSE_RANK() OVER (PARTITION BY DEPTNO ORDER BY SAL DESC) DEPT_RANK",
      "ROW_NUMBER() OVER (PARTITION BY DEPTNO ORDER BY SAL DESC) DEPT_RANK",
      "UNIQUE_RANK() OVER (PARTITION BY DEPTNO ORDER BY SAL DESC) DEPT_RANK"
    ],
    "correctIndex": 2,
    "explanation": "ROW_NUMBER() 함수는 동일한 우선순위가 나올 때도 고유한 값을 부여한다. RANK 와 DENSE_RANK 는 동률에 같은 순위, UNIQUE_RANK 는 표준 윈도우 함수가 아니다.",
    "chapter": "윈도우 함수",
    "_source": "cbt-mock",
    "_origId": "cbt-142",
    "_cbtPdf": "cbt5",
    "_cbtPdfNumber": 29
  },
  {
    "id": 10993,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 194,
    "title": "다음 중 역방향 전개가 되기 위한 전개 조건으로 올바른 것은? (단, EMP_ID 와 MANAGER_ID 는 사원 자체의 EMP_ID 와 매니저의 EMP_ID 를 저장한다.)",
    "options": [
      "CONNECT BY PRIOR EMP_ID = MANAGER_ID",
      "CONNECT BY EMP_ID = PRIOR MANAGER_ID",
      "WHERE PRIOR EMP_ID = MANAGER_ID",
      "WHERE EMP_ID = PRIOR MANAGER_ID"
    ],
    "correctIndex": 1,
    "explanation": "자식 → 부모 역방향 전개에서는 PRIOR 가 자식 측 컬럼에 붙어야 한다. \"EMP_ID = PRIOR MANAGER_ID\" 는 부모 행의 MANAGER_ID 와 자식 행의 EMP_ID 가 매칭됨을 의미하여 역방향 (자식 → 부모) 전개가 된다.",
    "chapter": "계층형 질의",
    "_source": "cbt-mock",
    "_origId": "cbt-143",
    "_cbtPdf": "cbt5",
    "_cbtPdfNumber": 46
  },
  {
    "id": 10994,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 195,
    "title": "데이터 모델링이 최종적으로 완료된 상태라고 정의할 수 있는, 즉 물리적인 스키마 설계를 하기 전 단계에 가까운 단계는?",
    "options": [
      "물리적 데이터 모델링",
      "논리적 데이터 모델링",
      "개념 데이터 모델링",
      "기능적 데이터 모델링"
    ],
    "correctIndex": 1,
    "explanation": "논리적 데이터 모델링은 데이터 모델링이 최종 완료된 상태로 표준화·정규화가 완료되어 데이터 모델이 결정된 단계이다. 물리적 모델링은 그 다음 단계로 DBMS 종속적 구현 사항을 반영한다.",
    "chapter": "데이터 모델 개념",
    "_source": "cbt-mock",
    "_origId": "cbt-144",
    "_cbtPdf": "cbt5",
    "_cbtPdfNumber": 49
  },
  {
    "id": 10995,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 196,
    "title": "다음 개념에 해당하는 관계는 무엇인가?\n\n부모 엔터티로부터 속성을 받았지만, 자식 엔터티의 주식별자로 사용하지 않고 일반적인 속성으로만 사용하는 관계",
    "options": [
      "식별자 관계 (Identifying Relationship)",
      "비식별자 관계 (Non-Identifying Relationship)",
      "일반 속성 관계 (Attribute Relationship)",
      "외부 식별 관계 (Foreign Key Relationship)"
    ],
    "correctIndex": 1,
    "explanation": "부모 엔터티의 PK 를 자식의 \"일반 속성 (FK)\" 으로만 받고 자식의 PK 에 포함시키지 않는 관계는 비식별자 관계 (Non-Identifying Relationship). 식별자 관계는 부모 PK 가 자식 PK 의 일부가 된다.",
    "chapter": "관계",
    "_source": "cbt-mock",
    "_origId": "cbt-145",
    "_cbtPdf": "cbt6",
    "_cbtPdfNumber": 1
  },
  {
    "id": 10996,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 197,
    "title": "자신의 속성이 없어도 다른 속성을 이용하여 결과를 도출할 수 있는 특징을 가진 속성의 이름은?",
    "options": [
      "기본 속성",
      "설계 속성",
      "파생 속성",
      "관계 속성"
    ],
    "correctIndex": 2,
    "explanation": "파생 속성 (Derived Attribute) 은 자신만의 고유 값을 갖지 않고 다른 속성의 값을 이용하여 계산·도출되는 속성 (예: 생년월일에서 계산되는 나이).",
    "chapter": "속성",
    "_source": "cbt-mock",
    "_origId": "cbt-146",
    "_cbtPdf": "cbt6",
    "_cbtPdfNumber": 13
  },
  {
    "id": 10997,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 198,
    "title": "다음 중 개념적 데이터 모델링 단계의 주요 산출물은?",
    "options": [
      "엔터티-관계 다이어그램 (ERD)",
      "물리 테이블 정의서",
      "인덱스 설계서",
      "저장 구조 설계서"
    ],
    "correctIndex": 0,
    "explanation": "개념적 데이터 모델링 단계는 업무 영역에서 핵심 엔터티와 관계를 도출하는 단계로 엔터티-관계 다이어그램 (ERD) 이 주요 산출물이다. 물리 테이블·인덱스·저장 구조 설계서는 물리적 모델링 단계의 산출물.",
    "chapter": "데이터 모델 개념",
    "_source": "cbt-mock",
    "_origId": "cbt-147",
    "_cbtPdf": "cbt6",
    "_cbtPdfNumber": 17
  },
  {
    "id": 10998,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 199,
    "title": "테이블 R 과 S 가 다음과 같을 때, 아래 SQL 문 (SELECT 구문) 의 실행 결과로 옳은 것은?\n\n`SELECT COUNT(*) FROM R, S;`",
    "options": [
      "4",
      "5",
      "9",
      "20"
    ],
    "correctIndex": 3,
    "explanation": "COUNT(*) 는 행 수를 세는 집계 함수. R 과 S 사이에 조인 조건이 없으므로 카티션 곱이 발생한다. R 행 4 × S 행 5 = 20.",
    "chapter": "조인",
    "_source": "cbt-mock",
    "_origId": "cbt-148",
    "_cbtPdf": "cbt6",
    "_cbtPdfNumber": 24,
    "references": [
      {
        "type": "table",
        "caption": "[R] 테이블",
        "headers": [
          "EID",
          "ENAME",
          "PHONE",
          "SEX",
          "DID"
        ],
        "rows": [
          [
            "823",
            "Kim",
            "8491",
            "M",
            "100"
          ],
          [
            "434",
            "Park",
            "8488",
            "F",
            "101"
          ],
          [
            "180",
            "Lee",
            "8592",
            "M",
            "101"
          ],
          [
            "510",
            "Choi",
            "8598",
            "F",
            "100"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "[S] 테이블",
        "headers": [
          "DID",
          "DNAME",
          "ROOM"
        ],
        "rows": [
          [
            "100",
            "Head",
            "A403"
          ],
          [
            "101",
            "Sales",
            "A401"
          ],
          [
            "102",
            "Proj1",
            "A301"
          ],
          [
            "103",
            "Proj2",
            "B101"
          ],
          [
            "104",
            "AS",
            "B102"
          ]
        ]
      }
    ]
  },
  {
    "id": 10999,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 200,
    "title": "다음 SQL 실행 결과로 가장 알맞은 것은?\n\n`CREATE TABLE TAB1 (COL1 INTEGER PRIMARY KEY, COL2 INTEGER); CREATE TABLE TAB2 (COL3 INTEGER PRIMARY KEY, COL4 INTEGER REFERENCES TAB1(COL1) ON DELETE CASCADE);`\n\n실행 후 INSERT 와 DELETE FROM TAB1 WHERE COL2 IN (3); 수행",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correctIndex": 1,
    "explanation": "TAB1 = [(1,1), (2,2), (3,3)], TAB2 = [(4,3), (5,2)]. DELETE FROM TAB1 WHERE COL2 IN (3) → COL1=3 행 삭제. ON DELETE CASCADE 로 TAB2 의 COL4=3 인 (4,3) 행도 함께 삭제. TAB2 = [(5,2)] = 1 행. SELECT COUNT(*) = 1 → 답 ②.",
    "chapter": "DDL",
    "_source": "cbt-mock",
    "_origId": "cbt-149",
    "_cbtPdf": "cbt6",
    "_cbtPdfNumber": 25
  },
  {
    "id": 11000,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 201,
    "title": "다음 테이블을 기준으로, 아래의 SQL 을 실행했을 때 그 결과로 올바른 행 개수는?\n\n`SELECT COUNT(AGE) FROM TB_STUDENT WHERE AGE > 20;`",
    "options": [
      "2",
      "3",
      "4",
      "1"
    ],
    "correctIndex": 0,
    "explanation": "COUNT(AGE) 는 NULL 을 제외하고 NOT NULL 인 행 중 WHERE AGE > 20 만족하는 행 수를 센다. Kim 22 (>20 ✓), Lee NULL (제외), Park NULL (제외), Cho 25 (>20 ✓) → 2.",
    "chapter": "그룹 함수",
    "_source": "cbt-mock",
    "_origId": "cbt-150",
    "_cbtPdf": "cbt6",
    "_cbtPdfNumber": 26,
    "references": [
      {
        "type": "table",
        "caption": "[TB_STUDENT] 테이블",
        "headers": [
          "ID",
          "NAME",
          "AGE"
        ],
        "rows": [
          [
            "1",
            "Kim",
            "22"
          ],
          [
            "2",
            "Lee",
            "NULL"
          ],
          [
            "3",
            "Park",
            "NULL"
          ],
          [
            "4",
            "Cho",
            "25"
          ]
        ]
      }
    ]
  },
  {
    "id": 11001,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 202,
    "title": "다음 쿼리를 ANSI 방식으로 변경한 것으로 옳은 것은?\n\n`SELECT E.ENAME, D.DNAME FROM EMP E, DEPT D WHERE E.DEPTNO = D.DEPTNO;`",
    "options": [
      "SELECT ENAME, DNAME FROM EMP JOIN DEPT USING (EMP.DEPTNO = DEPT.DEPTNO);",
      "SELECT ENAME, DNAME FROM EMP E INNER JOIN DEPT D ON E.DEPTNO = D.DEPTNO;",
      "SELECT ENAME, DNAME FROM EMP E LEFT JOIN DEPT D ON D.DEPTNO = E.DEPTNO;",
      "SELECT ENAME, DNAME FROM EMP E CROSS JOIN DEPT D;"
    ],
    "correctIndex": 1,
    "explanation": "암시적 조인 \"FROM EMP E, DEPT D WHERE E.DEPTNO = D.DEPTNO\" 는 ANSI 표준 INNER JOIN ON 으로 변환된다. ① USING 은 컬럼명만 명시 (등호 표현 불가), ③ LEFT JOIN 은 외부 조인이라 의미 다름, ④ CROSS JOIN 은 조건 없는 카티션 곱.",
    "chapter": "표준 조인",
    "_source": "cbt-mock",
    "_origId": "cbt-151",
    "_cbtPdf": "cbt6",
    "_cbtPdfNumber": 27
  },
  {
    "id": 11002,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 203,
    "title": "그룹 내 순위 관련 WINDOW 함수의 특징으로 올바르지 않은 것은?",
    "options": [
      "RANK 함수는 동일한 값에 대해서 동일한 순위를 부여한다.",
      "DENSE_RANK 함수는 RANK 와 비슷하지만 동일한 순위 다음 순위를 건너뛰지 않는다.",
      "CUMM_RANK 함수는 누적된 순위를 부여한다.",
      "ROW_NUMBER 함수는 동일한 값이라도 고유한 순위를 부여한다."
    ],
    "correctIndex": 2,
    "explanation": "#CUMM_RANK 라는 함수는 표준 윈도우 함수에 존재하지 않는다. 그룹 내 순위 함수는 RANK, DENSE_RANK, ROW_NUMBER 가 있다.",
    "chapter": "윈도우 함수",
    "_source": "cbt-mock",
    "_origId": "cbt-152",
    "_cbtPdf": "cbt6",
    "_cbtPdfNumber": 28
  },
  {
    "id": 11003,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 204,
    "title": "Hash Join 기법에 대한 설명으로 옳은 것은?",
    "options": [
      "Hash Join 은 두 테이블을 모두 정렬한 뒤 병합하면서 조인을 수행한다.",
      "Hash Join 은 작은 테이블을 메모리에 해시 테이블로 만든 후 큰 테이블을 한 번 스캔하면서 매칭한다.",
      "Hash Join 은 후행 테이블의 인덱스를 따라가며 매칭하는 방식이다.",
      "Hash Join 은 두 테이블 모두에 인덱스가 반드시 있어야 사용 가능하다."
    ],
    "correctIndex": 1,
    "explanation": "Hash Join 은 작은 테이블 (Build) 의 조인 키로 메모리에 해시 테이블을 구성한 뒤, 큰 테이블 (Probe) 을 스캔하며 해시 테이블을 조회하여 매칭하는 방식이다. 인덱스 없이도 수행 가능하며 대용량 조인에 효율적.",
    "chapter": "조인",
    "_source": "cbt-mock",
    "_origId": "cbt-153",
    "_cbtPdf": "cbt6",
    "_cbtPdfNumber": 37
  },
  {
    "id": 11004,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 205,
    "title": "테이블의 반정규화 기법 중 데이터 무결성을 깨뜨릴 위험을 갖지 않고서도 데이터 처리의 성능을 향상시킬 수 있는 기법은?",
    "options": [
      "컬럼 반정규화",
      "테이블 통합",
      "테이블 분할",
      "관계 반정규화"
    ],
    "correctIndex": 2,
    "explanation": "테이블 분할 (수직 또는 수평 분할) 은 데이터를 그대로 보존한 채로 단순히 분리만 하므로 데이터 무결성을 깨뜨리지 않는다. 다른 반정규화 기법 (컬럼 중복, 통합 등) 은 중복으로 인해 무결성 위험이 따를 수 있다.",
    "chapter": "정규화",
    "_source": "cbt-mock",
    "_origId": "cbt-154",
    "_cbtPdf": "cbt6",
    "_cbtPdfNumber": 44
  },
  {
    "id": 11005,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 206,
    "title": "숫자형 함수 적용과 그 결괏값이 올바르지 않은 것은?",
    "options": [
      "ROUND(3.14, 1) = 3.1",
      "TRUNC(3.99, 1) = 3.9",
      "CEIL(3.14) = 4",
      "FLOOR(3.99) = 4"
    ],
    "correctIndex": 3,
    "explanation": "FLOOR (내림) 는 \"바닥\" 으로 향하므로 FLOOR(3.99) = 3 이 되어야 한다. ① ROUND(3.14, 1) = 3.1 (소수 둘째 자리 반올림), ② TRUNC(3.99, 1) = 3.9 (소수 둘째 자리 절사), ③ CEIL(3.14) = 4 (올림) — 모두 옳음.",
    "chapter": "함수",
    "_source": "cbt-mock",
    "_origId": "cbt-155",
    "_cbtPdf": "cbt6",
    "_cbtPdfNumber": 49
  },
  {
    "id": 11006,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 207,
    "title": "어떠한 데이터 타입도 사용이 가능한 집계 함수는 어느 것인가?",
    "options": [
      "AVG",
      "SUM",
      "COUNT",
      "STDDEV"
    ],
    "correctIndex": 2,
    "explanation": "집계 함수는 집합에 대한 정보를 제공하므로 주로 숫자 유형에 사용된다. 추가로 MAX, MIN, COUNT 함수는 숫자 유형뿐 아니라 문자 유형, 날짜 유형에도 적용이 가능한 함수이다.",
    "chapter": "그룹 함수",
    "_source": "cbt-mock",
    "_origId": "cbt-156",
    "_cbtPdf": "cbt7",
    "_cbtPdfNumber": 5
  },
  {
    "id": 11007,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 208,
    "title": "ANSI/ISO 표준 SQL 에서 두 테이블 간에 동일한 칼럼 이름을 가지는 것을 모두 출력하는 조인 방식은 무엇인가?",
    "options": [
      "Inner Join",
      "Cross Join",
      "Natural Join",
      "Using"
    ],
    "correctIndex": 2,
    "explanation": "NATURAL JOIN 은 두 테이블 간에 동일한 칼럼 이름을 가진 것을 모두 출력하는 조인 방법이다. USING 은 명시한 컬럼만 매칭, INNER JOIN ON 은 임의 조건, CROSS JOIN 은 카티션 곱.",
    "chapter": "표준 조인",
    "_source": "cbt-mock",
    "_origId": "cbt-157",
    "_cbtPdf": "cbt7",
    "_cbtPdfNumber": 7
  },
  {
    "id": 11008,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 209,
    "title": "다음 중 분산 데이터베이스의 투명성 (Transparency) 에 속하지 않는 것은?",
    "options": [
      "분할 투명성",
      "병렬 투명성",
      "위치 투명성",
      "변환 투명성"
    ],
    "correctIndex": 1,
    "explanation": "분산 데이터베이스의 투명성에는 분할 투명성, 위치 투명성, 지역 투명성, 중복 (병합) 투명성, 변환 투명성, 장애 투명성이 있다. \"병렬 투명성\" 은 표준 분류에 포함되지 않는다.",
    "chapter": "데이터 모델 개념",
    "_source": "cbt-mock",
    "_origId": "cbt-158",
    "_cbtPdf": "cbt7",
    "_cbtPdfNumber": 22
  },
  {
    "id": 11009,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "1과목",
    "number": 210,
    "title": "다음 중 개념적 데이터 모델링 단계에서 수행하지 않는 것은?",
    "options": [
      "업무 엔터티 식별",
      "속성 추출",
      "인덱스 구성",
      "관계 설정"
    ],
    "correctIndex": 2,
    "explanation": "개념적 데이터 모델링 단계에서는 업무 엔터티 식별, 속성 추출, 관계 설정 등을 수행한다. 인덱스는 물리 모델링에서 다루는 것이며, 개념 모델에서는 등장하지 않는다.",
    "chapter": "데이터 모델 개념",
    "_source": "cbt-mock",
    "_origId": "cbt-159",
    "_cbtPdf": "cbt7",
    "_cbtPdfNumber": 41
  },
  {
    "id": 11010,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 211,
    "title": "아래와 같은 테이블 TAB1, TAB2 가 있을 때 아래 5 종류의 SQL 결과 건수를 알맞게 나열한 것은?",
    "options": [
      "2, 4, 3, 5, 12",
      "2, 4, 5, 3, 12",
      "2, 3, 4, 5, 12",
      "5, 4, 3, 7, 12"
    ],
    "correctIndex": 0,
    "explanation": "TAB1 4 행, TAB2 3 행. INNER JOIN ON A.KEY1=B.KEY2 → 매칭 2 행. LEFT OUTER JOIN → TAB1 모든 4 행 (미매칭은 NULL). RIGHT OUTER JOIN → TAB2 모든 3 행. FULL OUTER JOIN → 매칭 2 + TAB1 미매칭 2 + TAB2 미매칭 1 = 5 행. CROSS JOIN → 4×3 = 12 행. 따라서 (2, 4, 3, 5, 12).",
    "chapter": "조인",
    "_source": "cbt-mock",
    "_origId": "cbt-160",
    "_cbtPdf": "cbt7",
    "_cbtPdfNumber": 42,
    "references": [
      {
        "type": "sql",
        "code": "SELECT * FROM TAB1 A INNER JOIN TAB2 B ON A.KEY1 = B.KEY2;\nSELECT * FROM TAB1 A LEFT OUTER JOIN TAB2 B ON A.KEY1 = B.KEY2;\nSELECT * FROM TAB1 A RIGHT OUTER JOIN TAB2 B ON A.KEY1 = B.KEY2;\nSELECT * FROM TAB1 A FULL OUTER JOIN TAB2 B ON A.KEY1 = B.KEY2;\nSELECT * FROM TAB1 A CROSS JOIN TAB2 B;"
      }
    ]
  },
  {
    "id": 11011,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 212,
    "title": "다음 중 DEPT 테이블에 존재하지 않는 부서의 사원을 삭제하는 SQL 은? (단, EMP.DEPTNO 컬럼이 NULL 가능)",
    "options": [
      "DELETE FROM EMP WHERE DEPTNO NOT IN (SELECT DEPTNO FROM DEPT);",
      "DELETE * FROM EMP WHERE DEPTNO != ALL (SELECT DEPTNO FROM DEPT);",
      "DELETE FROM EMP WHERE NOT EXISTS DEPT.DEPTNO = EMP.DEPTNO;",
      "DELETE FROM EMP WHERE DEPTNO IS NULL;"
    ],
    "correctIndex": 0,
    "explanation": "DEPT 에 존재하지 않는 부서의 사원을 삭제하려면 NOT IN 서브쿼리를 사용한다. ② DELETE 는 * 를 쓸 수 없음 (문법 오류). ③ NOT EXISTS 는 서브쿼리 형식이 잘못됨. ④ NULL 인 사원만 삭제 (의미 다름).",
    "chapter": "DML",
    "_source": "cbt-mock",
    "_origId": "cbt-161",
    "_cbtPdf": "cbt7",
    "_cbtPdfNumber": 46
  },
  {
    "id": 11012,
    "examSetId": "ai-mock",
    "examLabel": "모의고사",
    "subject": "2과목",
    "number": 213,
    "title": "DELETE, TRUNCATE, DROP 명령을 비교한 것으로 옳은 것은?",
    "options": [
      "DROP, TRUNCATE 는 DDL 이고 DELETE 는 DML 이다.",
      "DROP, TRUNCATE 는 테이블 자체를 삭제하고, DELETE 는 테이블 자체는 남아있다.",
      "DELETE FROM 테이블; 과 TRUNCATE TABLE 테이블; 의 결과 행은 다르다.",
      "DELETE 는 ROLLBACK 이 불가능하다."
    ],
    "correctIndex": 0,
    "explanation": "DELETE 는 DML 로 ROLLBACK 이 가능하며 실행 시 테이블 자체는 남아있다. TRUNCATE 는 DDL 로 ROLLBACK 이 불가하며, 실행 시 테이블을 초기 상태로 되돌린다 (테이블 구조 자체는 남아있음). DROP 은 DDL 로 ROLLBACK 도 불가능하고 테이블 구조 자체를 삭제한다. ② TRUNCATE 도 구조는 남음, ③ 둘 다 빈 테이블, ④ DELETE 는 ROLLBACK 가능.",
    "chapter": "DML",
    "_source": "cbt-mock",
    "_origId": "cbt-162",
    "_cbtPdf": "cbt7",
    "_cbtPdfNumber": 50
  }
];
