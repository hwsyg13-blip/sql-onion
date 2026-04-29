// Auto-generated from scripts/authored/ai-mock.json
// AI 생성 모의고사 풀 (기출 변형) · 91문항
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
  },
  {
    "id": 10851,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "2과목",
    "number": 52,
    "title": "아래 결과의 PREV_SAL 컬럼은 직전 행의 SAL 값을 반환한다. 사용된 윈도우 함수로 옳은 것은?",
    "options": [
      "LEAD",
      "LAG",
      "NTILE",
      "LAST_VALUE"
    ],
    "correctIndex": 1,
    "explanation": "LAG() 윈도우 함수는 현재 행 기준 이전 (앞쪽) 행의 값을 반환한다. LEAD 는 다음 행, NTILE 은 그룹 분배, LAST_VALUE 는 윈도우의 마지막 값.",
    "chapter": "윈도우 함수",
    "_source": "ai-mock",
    "_origId": "ai-mock-061"
  },
  {
    "id": 10852,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "2과목",
    "number": 53,
    "title": "아래 SQL 의 결과로 옳은 것은?",
    "options": [
      "103",
      "101, 104",
      "102, 103",
      "102, 103, 104"
    ],
    "correctIndex": 2,
    "explanation": "TB_CUSTOMER 에서 CITY='SEOUL' 인 CUST_ID 는 1, 4 이다. 따라서 메인 쿼리 WHERE CUST_ID NOT IN (1, 4) 는 TB_ORDER 에서 CUST_ID 가 1, 4 가 아닌 행의 ORDER_ID — 102, 103 을 반환한다.",
    "chapter": "서브쿼리",
    "_source": "ai-mock",
    "_origId": "ai-mock-062",
    "references": [
      {
        "type": "table",
        "caption": "TB_CUSTOMER",
        "headers": [
          "CUST_ID",
          "CITY"
        ],
        "rows": [
          [
            "1",
            "SEOUL"
          ],
          [
            "2",
            "BUSAN"
          ],
          [
            "3",
            "INCHEON"
          ],
          [
            "4",
            "SEOUL"
          ]
        ]
      },
      {
        "type": "table",
        "caption": "TB_ORDER",
        "headers": [
          "ORDER_ID",
          "CUST_ID"
        ],
        "rows": [
          [
            "101",
            "1"
          ],
          [
            "102",
            "2"
          ],
          [
            "103",
            "3"
          ],
          [
            "104",
            "4"
          ]
        ]
      },
      {
        "type": "sql",
        "code": "SELECT ORDER_ID\nFROM   TB_ORDER\nWHERE  CUST_ID NOT IN (\n  SELECT CUST_ID FROM TB_CUSTOMER WHERE CITY = 'SEOUL'\n);"
      }
    ]
  },
  {
    "id": 10853,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "2과목",
    "number": 54,
    "title": "아래 SQL 의 결과로 옳은 것은? (PRICE 가 가장 높은 상품의 NAME 을 조회)",
    "options": [
      "Pen",
      "Pencil",
      "Book",
      "오류 발생"
    ],
    "correctIndex": 2,
    "explanation": "서브쿼리 SELECT MAX(PRICE) 가 PRODUCTS 의 최고가를 반환한다. 메인 쿼리는 그 가격과 같은 행의 NAME 을 반환한다. PRODUCTS 의 최고가가 1000 인 Book 행만 조건에 부합 → Book.",
    "chapter": "서브쿼리",
    "_source": "ai-mock",
    "_origId": "ai-mock-063",
    "references": [
      {
        "type": "table",
        "caption": "PRODUCTS 테이블",
        "headers": [
          "NAME",
          "PRICE"
        ],
        "rows": [
          [
            "Pen",
            "500"
          ],
          [
            "Pencil",
            "300"
          ],
          [
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
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "2과목",
    "number": 55,
    "title": "Student(5속성), Department(3속성) 두 테이블에 대해 `SELECT * FROM Student s, Department d WHERE s.dept > 100;` 실행 시 결과의 차수(Degree)와 카디널리티(Cardinality) 는? (Student 5 행, Department 3 행, 이 중 dept>100 조건을 만족하는 Student 가 3 행이라 가정)",
    "options": [
      "5, 3",
      "5, 2",
      "8, 9",
      "8, 3"
    ],
    "correctIndex": 2,
    "explanation": "차수(Degree) 는 결과 컬럼 수 — Student 5 + Department 3 = 8. 카디널리티는 결과 행 수 — 조건 없는 카티션 곱이라면 5×3=15 이지만 WHERE s.dept>100 으로 Student 측이 3 행으로 줄어들어 3×3=9 행이 된다. 따라서 (8, 9).",
    "chapter": "관계형 DB와 SELECT",
    "_source": "ai-mock",
    "_origId": "ai-mock-064"
  },
  {
    "id": 10855,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "2과목",
    "number": 56,
    "title": "특정 부서에 소속된 사원만 조회하는 SQL 로 적절하지 않은 것은?",
    "options": [
      "SELECT E.* FROM 사원 AS E WHERE E.부서코드 LIKE (SELECT 부서코드 FROM 부서 WHERE E.부서코드 = 부서코드);",
      "SELECT E.* FROM 사원 AS E WHERE NOT EXISTS (SELECT * FROM 부서 WHERE E.부서코드 = 부서코드);",
      "SELECT E.* FROM 사원 AS E WHERE EXISTS (SELECT * FROM 부서 WHERE E.부서코드 = 부서코드 AND E.부서코드 = 부서코드);",
      "SELECT E.* FROM 사원 AS E WHERE NOT EXISTS (SELECT * FROM 부서 WHERE E.부서코드 = 부서코드 AND E.부서코드 = 부서코드);"
    ],
    "correctIndex": 2,
    "explanation": "\"부서에 소속된 사원\" 을 찾으려면 EXISTS (서브쿼리에서 매칭되는 부서가 존재) 를 사용해야 한다. ② 와 ④ 는 NOT EXISTS 로 정반대 (소속되지 않은 사원). ③ 은 EXISTS 지만 매칭 조건이 한 번만 필요한데 두 번 중복된 형태 — 사실상 동일 동작이지만 가장 적절한 형태는 ① 또는 단순한 EXISTS. 단, ① 의 LIKE 사용은 적절치 않으므로 정답은 \"적절하지 않은 것\" 으로 ③.",
    "chapter": "서브쿼리",
    "_source": "ai-mock",
    "_origId": "ai-mock-065"
  },
  {
    "id": 10856,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "2과목",
    "number": 57,
    "title": "아래 SQL 의 WHERE 절 결과로 옳은 것은? (AND 가 OR 보다 우선순위가 높음을 활용)",
    "options": [
      "1행",
      "3행 — Kim, Park, Jang",
      "4행 — 모두 출력",
      "Kim, Park 두 행만"
    ],
    "correctIndex": 1,
    "explanation": "AND 가 OR 보다 우선순위가 높으므로 조건은 사실상 `GRADE = 'A' OR (GRADE = 'B' AND STATUS = 'ACTIVE')` 로 평가된다. GRADE=A 인 Kim·Park 두 행 + GRADE=B 그리고 STATUS=ACTIVE 인 Jang 한 행 → 총 3 행 출력.",
    "chapter": "WHERE",
    "_source": "ai-mock",
    "_origId": "ai-mock-066",
    "references": [
      {
        "type": "table",
        "caption": "TB_USER 테이블",
        "headers": [
          "NAME",
          "GRADE",
          "STATUS"
        ],
        "rows": [
          [
            "Kim",
            "A",
            "INACTIVE"
          ],
          [
            "Park",
            "A",
            "ACTIVE"
          ],
          [
            "Jang",
            "B",
            "ACTIVE"
          ],
          [
            "Lee",
            "B",
            "INACTIVE"
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
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "2과목",
    "number": 58,
    "title": "아래 EMPLOYEE 테이블에 대한 SQL 결과 (COUNT(SALARY), SUM(SALARY), AVG(SALARY)) 로 옳은 것은? (SALARY 에 NULL 이 1건 포함)",
    "options": [
      "3, 6000, 2000",
      "4, 6000, 2000",
      "3, 6000, 1500",
      "3, NULL, 2000"
    ],
    "correctIndex": 0,
    "explanation": "집계 함수는 NULL 을 무시한다. SALARY 가 1000, 2000, 3000, NULL 일 때 COUNT(SALARY)=3 (NULL 제외), SUM=1000+2000+3000=6000, AVG=6000/3=2000.",
    "chapter": "그룹 함수",
    "_source": "ai-mock",
    "_origId": "ai-mock-067",
    "references": [
      {
        "type": "table",
        "caption": "EMPLOYEE 테이블",
        "headers": [
          "NAME",
          "SALARY"
        ],
        "rows": [
          [
            "A",
            "1000"
          ],
          [
            "B",
            "2000"
          ],
          [
            "C",
            "3000"
          ],
          [
            "D",
            "(NULL)"
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
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "1과목",
    "number": 59,
    "title": "데이터 모델링에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "데이터 모델은 3가지 구성 요소로 Process, Attributes, Relationships 가 있다.",
      "엔터티는 두 개 이상의 속성을 가져야 한다.",
      "관계는 두 엔터티 간의 연관성을 표현한다.",
      "데이터 모델링은 추상화·단순화의 과정이다."
    ],
    "correctIndex": 0,
    "explanation": "데이터 모델의 3가지 구성 요소는 Things(엔터티), Attributes(속성), Relationships(관계) 이다. Process 는 데이터 모델의 구성 요소가 아니다.",
    "chapter": "데이터 모델 개념",
    "_source": "ai-mock",
    "_origId": "ai-mock-068"
  },
  {
    "id": 10859,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "1과목",
    "number": 60,
    "title": "관계의 분류에 해당하지 않는 것은?",
    "options": [
      "존재 관계",
      "논리 관계",
      "식별 관계",
      "비식별 관계"
    ],
    "correctIndex": 1,
    "explanation": "관계는 표기법 또는 의미에 따라 존재/행위, 식별/비식별 등으로 분류된다. JOIN 등에서의 \"논리 관계\" 라는 분류는 표준 분류에 없다.",
    "chapter": "관계",
    "_source": "ai-mock",
    "_origId": "ai-mock-069"
  },
  {
    "id": 10860,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "2과목",
    "number": 61,
    "title": "해시 조인(Hash Join) 에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "조인 컬럼에 인덱스가 없어도 수행 가능하다.",
      "대용량 데이터를 조인할 때 효율적이다.",
      "CPU 와 메모리 자원을 많이 사용한다.",
      "랜덤 액세스(Random Access) 가 발생하여 비효율적이다."
    ],
    "correctIndex": 3,
    "explanation": "해시 조인은 해시 테이블을 메모리에 만들어 매칭하므로 랜덤 액세스가 발생하지 않고 순차 처리된다. 랜덤 액세스가 많은 것은 Nested Loop 조인의 특성이다.",
    "chapter": "조인",
    "_source": "ai-mock",
    "_origId": "ai-mock-070"
  },
  {
    "id": 10861,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "2과목",
    "number": 62,
    "title": "인덱스 컬럼에 대한 WHERE 조건 중 인덱스를 사용하지 못해 성능에 불리한 것은?",
    "options": [
      "where 컬럼 between 1 and 10",
      "where 컬럼 like '%검색%'",
      "where 컬럼 >= '20181201'",
      "where 컬럼 = '20181201'"
    ],
    "correctIndex": 1,
    "explanation": "LIKE 패턴이 '%' 로 시작하면 인덱스의 정렬 순서를 활용할 수 없어 인덱스 풀 스캔 또는 테이블 풀 스캔이 발생. = / >= / BETWEEN 은 인덱스 범위 스캔으로 처리 가능.",
    "chapter": "WHERE",
    "_source": "ai-mock",
    "_origId": "ai-mock-071"
  },
  {
    "id": 10862,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "1과목",
    "number": 63,
    "title": "주식별자 (Primary Identifier) 의 특성으로 적절하지 않은 것은?",
    "options": [
      "유일성",
      "최소성",
      "불변성",
      "상태 (Y/N)"
    ],
    "correctIndex": 3,
    "explanation": "주식별자는 유일성·최소성·불변성·존재성을 만족해야 한다. 상태 (Y/N) 는 주식별자의 특성이 아니라 해당 인스턴스의 활성 여부 같은 일반 속성이다.",
    "chapter": "식별자",
    "_source": "ai-mock",
    "_origId": "ai-mock-072"
  },
  {
    "id": 10863,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "2과목",
    "number": 64,
    "title": "절차형 SQL 에 해당하지 않는 것은?",
    "options": [
      "PROCEDURE",
      "TRIGGER",
      "BUILT-IN FUNCTION",
      "USER DEFINED FUNCTION"
    ],
    "correctIndex": 2,
    "explanation": "절차형 SQL 은 사용자가 작성·정의하는 PROCEDURE, TRIGGER, USER DEFINED FUNCTION 을 의미한다. BUILT-IN FUNCTION 은 시스템이 제공하는 내장 함수.",
    "chapter": "절차형 SQL",
    "_source": "ai-mock",
    "_origId": "ai-mock-073"
  },
  {
    "id": 10864,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "2과목",
    "number": 65,
    "title": "SELECT COALESCE(NULL, '2', '1') FROM DUAL; 의 결과는?",
    "options": [
      "1",
      "2",
      "3",
      "NULL"
    ],
    "correctIndex": 1,
    "explanation": "COALESCE 는 인자 목록에서 NULL 이 아닌 첫 번째 값을 반환한다. 첫 번째 NULL 을 건너뛰고 두 번째 '2' 가 NULL 아님으로 반환됨.",
    "chapter": "함수",
    "_source": "ai-mock",
    "_origId": "ai-mock-074"
  },
  {
    "id": 10865,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "2과목",
    "number": 66,
    "title": "아래 SQL Server 트랜잭션 수행 후 SELECT COUNT(*) FROM TBL; 의 결과는?",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correctIndex": 2,
    "explanation": "INSERT 1 → SAVEPOINT S1 → INSERT 2 → ROLLBACK TO S1 (INSERT 2 취소) → INSERT 3 → COMMIT. 최종 TBL 에는 1, 3 두 행 → COUNT=2.",
    "chapter": "DCL·TCL",
    "_source": "ai-mock",
    "_origId": "ai-mock-075",
    "references": [
      {
        "type": "sql",
        "code": "BEGIN TRAN;\nCREATE TABLE TBL (ID INT PRIMARY KEY);\nINSERT INTO TBL VALUES (1);\nSAVE TRAN S1;\nINSERT INTO TBL VALUES (2);\nROLLBACK TRAN S1;\nINSERT INTO TBL VALUES (3);\nCOMMIT;\nSELECT COUNT(*) FROM TBL;"
      }
    ]
  },
  {
    "id": 10866,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "2과목",
    "number": 67,
    "title": "두 결과 집합의 모든 행을 중복 제거 없이 결합하는 집합 연산자는?",
    "options": [
      "INTERSECT",
      "MINUS",
      "UNION ALL",
      "UNION"
    ],
    "correctIndex": 2,
    "explanation": "UNION ALL 은 중복을 제거하지 않고 두 집합의 모든 행을 그대로 결합한다. UNION 은 중복 제거, INTERSECT 는 교집합, MINUS 는 차집합.",
    "chapter": "집합 연산자",
    "_source": "ai-mock",
    "_origId": "ai-mock-076"
  },
  {
    "id": 10867,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "2과목",
    "number": 68,
    "title": "두 테이블이 1:1 관계로 정확히 동일한 키 집합을 가질 때 옳지 않은 것은? (PK 컬럼만 SELECT 한다고 가정)",
    "options": [
      "두 결과의 UNION ALL 결과 건수는 두 테이블 행 수의 합이다.",
      "두 결과의 UNION 결과 건수는 한 테이블 행 수와 같다.",
      "두 결과의 MINUS 결과 행 수는 0 이 아니다.",
      "두 결과의 INTERSECT 결과 행 수는 한 테이블 행 수와 같다."
    ],
    "correctIndex": 2,
    "explanation": "두 테이블이 동일한 키 집합 (1:1) 을 가지면 MINUS 결과는 공집합 (0 건) 이 된다. INTERSECT 는 두 집합의 교집합이라 동일 키 집합이면 한 테이블의 모든 행이 매칭. UNION 은 중복 제거되어 한 테이블 행 수와 같음.",
    "chapter": "집합 연산자",
    "_source": "ai-mock",
    "_origId": "ai-mock-077"
  },
  {
    "id": 10868,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "2과목",
    "number": 69,
    "title": "순위 윈도우 함수에 대한 설명 중 옳은 것은?",
    "options": [
      "RANK 는 동일 순위 부여 시 다음 순위를 SKIP 하지 않는다.",
      "DENSE_RANK 는 동일 순위 부여 시 다음 순위를 SKIP 한다.",
      "ROW_NUMBER 는 동일 값에 같은 순위를 부여한다.",
      "RANK 는 동일 순위 부여 시 다음 순위를 SKIP 한다."
    ],
    "correctIndex": 3,
    "explanation": "RANK 는 동일 값에 같은 순위를 부여하고 그 다음 순위를 건너뛴다 (1, 2, 2, 4). DENSE_RANK 는 건너뛰지 않는다 (1, 2, 2, 3). ROW_NUMBER 는 동률 무시 고유 순번 (1, 2, 3, 4).",
    "chapter": "윈도우 함수",
    "_source": "ai-mock",
    "_origId": "ai-mock-078"
  },
  {
    "id": 10869,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "2과목",
    "number": 70,
    "title": "아래 SQL 의 결과로 옳은 것은? (T1 3행, T2 매칭 2행, T3 매칭 1행)",
    "options": [
      "1",
      "2",
      "3",
      "0"
    ],
    "correctIndex": 1,
    "explanation": "LEFT OUTER JOIN 은 왼쪽 테이블 (T1) 행 수를 보존한다. T1 LEFT JOIN T2 에서 T1 의 3 행 중 T2 매칭 2 행 + 미매칭 1 행 = 3 행, 다시 LEFT JOIN T3 해도 행 수 유지. WHERE T2.COL IS NOT NULL 로 T2 매칭 2 행만 남음.",
    "chapter": "조인",
    "_source": "ai-mock",
    "_origId": "ai-mock-079",
    "references": [
      {
        "type": "sql",
        "code": "SELECT COUNT(*) FROM T1\nLEFT OUTER JOIN T2 ON T1.COL = T2.COL\nLEFT OUTER JOIN T3 ON T1.COL = T3.COL\nWHERE T2.COL IS NOT NULL;"
      }
    ]
  },
  {
    "id": 10870,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "1과목",
    "number": 71,
    "title": "논리 데이터 모델에 대한 설명으로 적절하지 않은 것은?",
    "options": [
      "엔터티·속성·관계가 정확히 표현되어야 한다.",
      "재사용성이 높아야 한다.",
      "추상화 수준이 가장 높다.",
      "DBMS 종속적인 물리적 특성이 반영되어야 한다."
    ],
    "correctIndex": 3,
    "explanation": "논리 데이터 모델은 DBMS 와 독립적이다. DBMS 종속적인 물리적 특성 (인덱스·파티션·저장 구조) 은 물리 모델 단계에서 반영된다.",
    "chapter": "데이터 모델 개념",
    "_source": "ai-mock",
    "_origId": "ai-mock-080"
  },
  {
    "id": 10871,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "2과목",
    "number": 72,
    "title": "DML 에 해당하지 않는 명령어는?",
    "options": [
      "INSERT",
      "DELETE",
      "MERGE",
      "TRUNCATE"
    ],
    "correctIndex": 3,
    "explanation": "TRUNCATE 는 테이블의 전체 데이터를 빠르게 삭제하지만 DDL 에 속한다 (자동 커밋, ROLLBACK 불가). INSERT/UPDATE/DELETE/MERGE 는 DML.",
    "chapter": "DML",
    "_source": "ai-mock",
    "_origId": "ai-mock-081"
  },
  {
    "id": 10872,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "2과목",
    "number": 73,
    "title": "아래 SQL 과 동등한 CASE 표현으로 옳은 것은?\n\n`SELECT NVL(Name, '') FROM Emp;`",
    "options": [
      "SELECT CASE WHEN Name IS NOT NULL THEN Name ELSE '0' END FROM Emp;",
      "SELECT CASE WHEN Name IS NOT NULL THEN '0' ELSE Name END FROM Emp;",
      "SELECT CASE WHEN Name IS NULL THEN '' ELSE Name END FROM Emp;",
      "SELECT CASE WHEN Name IS NULL THEN '' ELSE '0' END FROM Emp;"
    ],
    "correctIndex": 2,
    "explanation": "NVL(Name, '') 은 Name 이 NULL 이면 '' 로 대체, 그렇지 않으면 Name 그대로 반환. 동등한 CASE 식은 \"WHEN Name IS NULL THEN '' ELSE Name END\".",
    "chapter": "함수",
    "_source": "ai-mock",
    "_origId": "ai-mock-082"
  },
  {
    "id": 10873,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "2과목",
    "number": 74,
    "title": "EMP 테이블의 사번 7788 사원의 SAL 을 두 트랜잭션 TX1, TX2 가 동시에 수정한다. TX1 은 +100, TX2 는 +200 을 더하고 TX2 가 먼저 커밋, TX1 이 나중에 커밋한다. 직렬화 격리 수준에서 최종 SAL 은? (초기 SAL = 1000)",
    "options": [
      "1000",
      "1100",
      "1200",
      "1300"
    ],
    "correctIndex": 3,
    "explanation": "TX2 가 1000 → 1200 으로 업데이트 후 커밋. 그 후 TX1 이 다시 읽으면 1200, +100 = 1300 으로 업데이트. 두 변경이 모두 적용된 1300.",
    "chapter": "DCL·TCL",
    "_source": "ai-mock",
    "_origId": "ai-mock-083"
  },
  {
    "id": 10874,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "2과목",
    "number": 75,
    "title": "윈도우 함수에 대한 설명으로 옳지 않은 것은?",
    "options": [
      "GROUP BY 와 PARTITION BY 는 서로 호환된다.",
      "PARTITION BY 절을 생략하면 전체 행이 하나의 파티션이 된다.",
      "WINDOWING 절은 ORDER BY 와 함께 사용된다.",
      "PARTITION BY 는 그룹별로 윈도우를 분리한다."
    ],
    "correctIndex": 0,
    "explanation": "GROUP BY 는 그룹 단위로 결과 행을 축약하지만 PARTITION BY 는 원본 행을 모두 보존하면서 그룹별 계산만 수행. 두 구문은 호환되지 않는다.",
    "chapter": "윈도우 함수",
    "_source": "ai-mock",
    "_origId": "ai-mock-084"
  },
  {
    "id": 10875,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "2과목",
    "number": 76,
    "title": "계층형 SQL 에서 리프 노드면 1, 아니면 0 을 반환하는 가상 컬럼은?",
    "options": [
      "CONNECT_BY_ISLEAF",
      "CONNECT_BY_ISCYCLE",
      "SYS_CONNECT_BY_PATH",
      "CONNECT_BY_ROOT"
    ],
    "correctIndex": 0,
    "explanation": "CONNECT_BY_ISLEAF 는 현재 행이 트리의 리프 (자식이 없는 노드) 이면 1, 아니면 0 을 반환한다. ISCYCLE 은 사이클 발생 여부, SYS_CONNECT_BY_PATH 는 루트부터의 경로 문자열, CONNECT_BY_ROOT 는 루트 컬럼 값.",
    "chapter": "계층형 질의",
    "_source": "ai-mock",
    "_origId": "ai-mock-085"
  },
  {
    "id": 10876,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "2과목",
    "number": 77,
    "title": "특정 일자 (2025-01-01) 의 13시 ~ 14시 사이 데이터를 조회하는 SQL 중 의미가 다른 것은? (COL1 은 DATE 타입, 시·분·초 포함)",
    "options": [
      "TO_CHAR(COL1, 'YYYYMMDDHH24') = '2025010113' OR TO_CHAR(COL1, 'YYYYMMDDHH24') = '2025010114'",
      "COL1 >= TO_DATE('202501011 30000', 'YYYYMMDDHH24MISS') AND COL1 <= TO_DATE('202501 01145959', 'YYYYMMDDHH24MISS')",
      "(TO_CHAR(COL1, 'YYYYMMDD'), TO_CHAR(COL1, 'HH24')) IN (('20250101','13'), ('20250101','14'))",
      "COL1 = TO_DATE('2025010113', 'YYYYMMDDHH24') OR COL1 = TO_DATE('2025010114', 'YYYYMMDDHH24')"
    ],
    "correctIndex": 3,
    "explanation": "①·②·③ 은 모두 13:00:00 ~ 14:59:59 의 1 시간 범위를 포함한다. 그러나 ④ 는 정확히 13:00:00 또는 14:00:00 한 시점만 매칭하므로 1 시간 \"동안\" 의 모든 분·초 데이터가 누락된다 → 의미가 다른 것.",
    "chapter": "WHERE",
    "_source": "ai-mock",
    "_origId": "ai-mock-086"
  },
  {
    "id": 10877,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "2과목",
    "number": 78,
    "title": "아래 SQL 의 의도로 옳은 것은?\n\n`SELECT * FROM EMP WHERE SAL > (SELECT AVG(SAL) FROM EMP);`",
    "options": [
      "평균 급여보다 많은 사원 목록을 조회한다.",
      "평균 급여보다 적은 사원 목록을 조회한다.",
      "평균 급여를 포함한 전체 사원 목록을 조회한다.",
      "오류가 발생하는 쿼리이다."
    ],
    "correctIndex": 0,
    "explanation": "서브쿼리가 전체 사원의 평균 급여를 반환하고, 메인 쿼리는 그 평균보다 SAL 이 큰 사원만 필터링.",
    "chapter": "서브쿼리",
    "_source": "ai-mock",
    "_origId": "ai-mock-087"
  },
  {
    "id": 10878,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "2과목",
    "number": 79,
    "title": "서브쿼리의 종류 중 메인쿼리의 제공자 역할을 하며 메인쿼리 값이 서브쿼리에 주입되지 않는 유형은?",
    "options": [
      "Filter형 Subquery",
      "Early Filter형 Subquery",
      "Associative Subquery",
      "Access Subquery"
    ],
    "correctIndex": 3,
    "explanation": "Access Subquery 는 서브쿼리가 메인쿼리에 데이터를 \"제공\" 하는 역할만 한다 (메인쿼리 → 서브쿼리 값 전달 없음). Filter 계열은 메인쿼리 행 단위로 평가되며 서로 값을 주고받는다.",
    "chapter": "서브쿼리",
    "_source": "ai-mock",
    "_origId": "ai-mock-088"
  },
  {
    "id": 10879,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "2과목",
    "number": 80,
    "title": "집합 연산자에 대한 설명 중 옳지 않은 것은?",
    "options": [
      "UNION 사용 시 각 SELECT 문에 ORDER BY 를 사용할 수 있다.",
      "UNION 은 중복을 제거하고 UNION ALL 은 중복을 제거하지 않는다.",
      "INTERSECT 는 중복 제거 및 정렬을 수행한다.",
      "두 집합 간 중복이 없다면 UNION, UNION ALL 결과가 동일하다."
    ],
    "correctIndex": 0,
    "explanation": "ORDER BY 는 전체 집합 결과에 대해 한 번만 사용 가능하며 마지막 SELECT 뒤에만 작성한다. 각 SELECT 별로 ORDER BY 를 쓰면 문법 오류.",
    "chapter": "집합 연산자",
    "_source": "ai-mock",
    "_origId": "ai-mock-089"
  },
  {
    "id": 10880,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "1과목",
    "number": 81,
    "title": "데이터베이스와 테이블에 대한 설명 중 옳은 것은?",
    "options": [
      "모든 자료는 실질적으로 테이블에 저장되며 테이블에서 자료를 꺼내 볼 수 있다.",
      "데이터베이스 내에 테이블이란 존재하지 않는다.",
      "복잡한 자료라도 테이블은 하나만 만드는 것이 바람직하다.",
      "데이터베이스에는 단 한 개의 테이블만 존재할 수 있다."
    ],
    "correctIndex": 0,
    "explanation": "관계형 DBMS 의 모든 데이터는 테이블 단위로 저장되며 SQL 로 조회·수정·삭제한다. ②③④ 는 테이블 개념과 모순.",
    "chapter": "데이터 모델 개념",
    "_source": "ai-mock",
    "_origId": "ai-mock-090"
  },
  {
    "id": 10881,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "2과목",
    "number": 82,
    "title": "STUDENT 테이블에 영문학과 50명, 법학과 100명, 수학과 50명 (총 200명) 이 저장되어 있을 때 아래 SQL 들의 결과 행 수는?",
    "options": [
      "ㄱ : 3, ㄴ : 3, ㄷ : 1",
      "ㄱ : 200, ㄴ : 3, ㄷ : 1",
      "ㄱ : 200, ㄴ : 3, ㄷ : 50",
      "ㄱ : 200, ㄴ : 200, ㄷ : 50"
    ],
    "correctIndex": 2,
    "explanation": "ㄱ SELECT DEPT FROM STUDENT — 조건 없는 전체 200 행. ㄴ SELECT DISTINCT DEPT — 학과 종류 3 (영문/법/수학). ㄷ SELECT NAME WHERE DEPT='영문학과' — 영문학과 50 명.",
    "chapter": "관계형 DB와 SELECT",
    "_source": "ai-mock",
    "_origId": "ai-mock-091",
    "references": [
      {
        "type": "sql",
        "code": "ㄱ. SELECT DEPT FROM STUDENT;\nㄴ. SELECT DISTINCT DEPT FROM STUDENT;\nㄷ. SELECT NAME FROM STUDENT WHERE DEPT='영문학과';"
      }
    ]
  },
  {
    "id": 10882,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "1과목",
    "number": 83,
    "title": "{학번, 과목번호} 가 기본키이고 {성적, 지도교수명, 학과명} 이 종속 속성일 때, 과목번호가 결정자이고 {지도교수명, 학과명} 이 과목번호에만 함수 종속이다. 이 릴레이션은 몇 차 정규형이며 어느 정규화의 대상인가?",
    "options": [
      "2차 정규형 — 3차 정규화 대상",
      "1차 정규형 — 2차 정규화 대상",
      "3차 정규형 — 보이스-코드 정규화 대상",
      "보이스-코드 정규형 — 4차 정규화 대상"
    ],
    "correctIndex": 1,
    "explanation": "복합키 {학번, 과목번호} 의 \"일부\" (과목번호) 에만 종속되는 부분 함수 종속이 존재. 이는 2차 정규형 위반 → 1차 정규형이며 2차 정규화 대상.",
    "chapter": "정규화",
    "_source": "ai-mock",
    "_origId": "ai-mock-092"
  },
  {
    "id": 10883,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "2과목",
    "number": 84,
    "title": "데이터를 입력하기 위해 사용하는 SQL 명령어는?",
    "options": [
      "CREATE",
      "INSERT",
      "UPDATE",
      "ALTER"
    ],
    "correctIndex": 1,
    "explanation": "INSERT 는 테이블에 데이터를 삽입한다. CREATE/ALTER 는 객체 정의 (DDL), UPDATE 는 기존 데이터 수정.",
    "chapter": "DML",
    "_source": "ai-mock",
    "_origId": "ai-mock-093"
  },
  {
    "id": 10884,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "2과목",
    "number": 85,
    "title": "아래 EMP 테이블에 대한 세 쿼리의 결과로 옳은 것은? (DEPTNO=10 의 SAL/BONUS 는 (100, NULL), (NULL, 20))",
    "options": [
      "NULL, 260, 260",
      "0, 260, 260",
      "NULL, 260, 200",
      "NULL, 240, 260"
    ],
    "correctIndex": 0,
    "explanation": "[1] SAL+BONUS 가 둘 다 NULL 포함 — 100+NULL=NULL, NULL+20=NULL. SUM(NULL,NULL)=NULL.\n[2] NVL(SAL,0)+NVL(BONUS,0) 합계 — 100, 20, 40, 80, 20 = 260.\n[3] SUM(SAL)+SUM(BONUS) 각각 NULL 제외 — SUM(SAL)=200, SUM(BONUS)=60, 합 = 260.",
    "chapter": "그룹 함수",
    "_source": "ai-mock",
    "_origId": "ai-mock-094",
    "references": [
      {
        "type": "sql",
        "code": "[1] SELECT SUM(SAL + BONUS) FROM EMP WHERE DEPTNO = 10;\n[2] SELECT SUM(NVL(SAL, 0) + NVL(BONUS, 0)) FROM EMP;\n[3] SELECT SUM(SAL) + SUM(BONUS) FROM EMP;"
      }
    ]
  },
  {
    "id": 10885,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "2과목",
    "number": 86,
    "title": "아래 ANSI 표준 SQL 중 `SELECT * FROM TAB1, TAB2 ORDER BY 1;` 와 동등한 것은?",
    "options": [
      "SELECT * FROM TAB1 INNER JOIN TAB2 ORDER BY 1;",
      "SELECT * FROM TAB1 NATURAL JOIN TAB2 ORDER BY 1;",
      "SELECT * FROM TAB1 CROSS JOIN TAB2 ORDER BY 1;",
      "SELECT * FROM TAB1 INNER JOIN TAB2 ON (TAB1.COL1 = TAB2.COL1) ORDER BY 1;"
    ],
    "correctIndex": 2,
    "explanation": "`FROM TAB1, TAB2` 에 조인 조건이 없으므로 카티션 곱이 발생. ANSI 로는 CROSS JOIN. INNER JOIN 은 ON 조건이 필요하고, NATURAL JOIN 은 동일 컬럼명 자동 매칭.",
    "chapter": "표준 조인",
    "_source": "ai-mock",
    "_origId": "ai-mock-095"
  },
  {
    "id": 10886,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "2과목",
    "number": 87,
    "title": "SQL 의 특징으로 가장 적절하지 않은 것은?",
    "options": [
      "절차적 언어이며 반복문을 포함한다.",
      "데이터 정의·조작·제어 언어를 포함한다.",
      "관계형 데이터베이스 질의에 사용된다.",
      "ANSI 표준으로 대부분의 DBMS 에서 지원된다."
    ],
    "correctIndex": 0,
    "explanation": "SQL 은 비절차적 (declarative) 언어이다. \"무엇 (WHAT)\" 을 원하는지만 명시하고 \"어떻게 (HOW)\" 가져올지는 DBMS 옵티마이저에 맡긴다. PL/SQL, T-SQL 같은 확장에서는 절차적 요소를 쓸 수 있지만 SQL 자체는 비절차적.",
    "chapter": "관계형 DB와 SELECT",
    "_source": "ai-mock",
    "_origId": "ai-mock-096"
  },
  {
    "id": 10887,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "2과목",
    "number": 88,
    "title": "아래 SQL 결과의 NAME 으로 옳은 것은? (EMPLOYEE 의 SALARY: A=1000, B=2000, C=4000)",
    "options": [
      "A",
      "B",
      "C",
      "A, C"
    ],
    "correctIndex": 2,
    "explanation": "서브쿼리 `SELECT SALARY FROM EMPLOYEE WHERE NAME != 'C'` → {1000, 2000}. ALL 은 다중행 비교 — `SALARY > ALL(1000, 2000)` 은 1000 보다 크고 2000 보다도 커야 함 = SALARY > 2000. C 의 4000 만 조건 충족.",
    "chapter": "서브쿼리",
    "_source": "ai-mock",
    "_origId": "ai-mock-097",
    "references": [
      {
        "type": "sql",
        "code": "SELECT NAME\nFROM   EMPLOYEE\nWHERE  SALARY > ALL (SELECT SALARY FROM EMPLOYEE WHERE NAME != 'C');"
      }
    ]
  },
  {
    "id": 10888,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "2과목",
    "number": 89,
    "title": "인덱스·옵티마이저에 대한 설명 중 옳은 것은?",
    "options": [
      "인덱스는 인덱스 구성 컬럼으로 항상 오름차순으로 정렬된다.",
      "비용 기반 옵티마이저는 인덱스 스캔이 항상 유리하다고 판단한다.",
      "규칙 기반 옵티마이저는 적절한 인덱스가 존재하면 항상 인덱스를 사용하려고 한다.",
      "인덱스 범위 스캔은 항상 여러 건의 결과가 반환된다."
    ],
    "correctIndex": 2,
    "explanation": "규칙 기반 옵티마이저는 사전 정의된 규칙 우선순위에 따라 인덱스가 있으면 무조건 인덱스 사용. ① 은 인덱스 생성 시 ASC/DESC 지정 가능. ② 비용 기반은 통계에 따라 풀 스캔이 더 유리하다고 판단할 수 있음. ④ 인덱스 범위 스캔은 0 건도 가능.",
    "chapter": "관계형 DB와 SELECT",
    "_source": "ai-mock",
    "_origId": "ai-mock-098"
  },
  {
    "id": 10889,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "2과목",
    "number": 90,
    "title": "`SELECT ROUND(456.789, -2) FROM DUAL;` 의 결과는?",
    "options": [
      "400",
      "500",
      "460",
      "450"
    ],
    "correctIndex": 1,
    "explanation": "ROUND(값, N) 에서 N 이 음수이면 정수부의 N 자리에서 반올림. -2 는 10 의 자리. 456 의 10 의 자리에서 반올림하면 500 (456 의 백의 자리 4 가 5 가 됨).",
    "chapter": "함수",
    "_source": "ai-mock",
    "_origId": "ai-mock-099"
  },
  {
    "id": 10890,
    "examSetId": "ai-mock",
    "examLabel": "기출 변형 (AI 모의)",
    "subject": "2과목",
    "number": 91,
    "title": "날짜형을 문자형으로 변환하는 함수는?",
    "options": [
      "TO_NUMBER",
      "TO_DATE",
      "TO_CHAR",
      "CONVERT"
    ],
    "correctIndex": 2,
    "explanation": "TO_CHAR(date, format) 은 DATE → 문자열 변환. TO_DATE 는 문자열 → DATE, TO_NUMBER 는 문자열 → 숫자. CONVERT 는 SQL Server 의 변환 함수 (Oracle 도 일부 지원하지만 표준은 TO_CHAR).",
    "chapter": "함수",
    "_source": "ai-mock",
    "_origId": "ai-mock-100"
  }
];
