// Auto-generated from scripts/authored/ai-mock.json
// AI 생성 모의고사 풀 (기출 변형) · 51문항
// ⚠ 직접 편집 금지. ai-mock.json 수정 후 'node scripts/build-quiz-bank.mjs' 재실행.
import type { QuizQuestion } from '../quizBank';

export const AI_MOCK: QuizQuestion[] = [
  {
    "id": 10800,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
    "examLabel": "기출 변형 (AI 모의)",
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
  }
];
