// @ts-nocheck
// 자동 생성 — 'SQLD 이론/_mockups/exam-review.html' 30개 챕터 OX 추출.
// 다시 빌드: node scripts/build-mini-test-data.mjs
//
// 챕터별 OX 미니 퀴즈 — 챕터 페이지 우측 사이드바 MiniTestSidebar 가 사용.

export interface OxQuestion {
  /** 진술문 — O/X 판단 대상 */
  q: string;
  /** O = true, X = false */
  answer: boolean;
  /** 정답 노출 시 함께 보이는 해설 (인라인 마크다운: **bold** 사용 가능) */
  explanation: string;
}

export const OX_QUIZ: Record<string, OxQuestion[]> = {
  c111: [
    {
      "q": "물리적 모델링이 가장 먼저 진행된다.",
      "answer": false,
      "explanation": "**개념 → 논리 → 물리** 순서로 진행한다."
    },
    {
      "q": "데이터 모델은 코드 작성을 위한 것이다.",
      "answer": false,
      "explanation": "현실 세계를 **추상화**한 것이다."
    },
    {
      "q": "좋은 모델은 데이터 중복을 일부 허용한다.",
      "answer": false,
      "explanation": "원칙은 **중복 배제**. 다만 성능을 위한 의도적 반정규화는 별개."
    },
    {
      "q": "데이터 모델링의 3대 관점은 데이터 / 프로세스 / 상관관계이다.",
      "answer": true,
      "explanation": "**데이터 · 프로세스 · 상관관계** 3대 관점이 정답."
    },
    {
      "q": "좋은 모델의 6대 특징에 \"통합성\"은 포함되지 않는다.",
      "answer": false,
      "explanation": "완전성 · 중복배제 · 업무규칙 · 재사용 · 의사소통 · **통합성** 6가지 모두 포함."
    },
    {
      "q": "정규화는 물리적 모델링 단계에서 수행한다.",
      "answer": false,
      "explanation": "정규화는 **논리적 단계**에서 수행한다."
    }
  ],
  c112: [
    {
      "q": "엔터티는 1개 인스턴스만 있어도 된다.",
      "answer": false,
      "explanation": "**2개 이상**의 인스턴스가 필요하다."
    },
    {
      "q": "엔터티는 속성이 1개여도 가능하다.",
      "answer": false,
      "explanation": "**2개 이상**의 속성이 필요하다."
    },
    {
      "q": "엔터티는 영속적으로 존재하는 인스턴스의 집합이다.",
      "answer": true,
      "explanation": "옳은 표현. \"인스턴스가 1개여도 무방하다\"는 반대로 **틀린 진술**이다."
    }
  ],
  c113: [
    {
      "q": "\"주문수량 × 단가 = 주문금액\"은 파생 속성이다.",
      "answer": true,
      "explanation": "다른 속성에서 계산되는 **파생 속성**이다."
    },
    {
      "q": "\"주민등록번호로부터 추출한 성별\"은 기본 속성이다.",
      "answer": false,
      "explanation": "주민번호에서 계산·추출한 값이므로 **파생 속성**이다."
    },
    {
      "q": "다중값 속성은 그대로 두어도 된다.",
      "answer": false,
      "explanation": "별도 엔터티로 **분리(정규화)**해야 한다."
    },
    {
      "q": "주소(시·구·동)는 복합 속성, 나이는 단순 속성이다.",
      "answer": true,
      "explanation": "여러 의미로 쪼갤 수 있으면 **복합**, 더 못 쪼개면 **단순**."
    },
    {
      "q": "속성은 더 이상 쪼갤 수 없는 최소 단위이다.",
      "answer": true,
      "explanation": "속성은 의미상 **최소 단위**이다."
    },
    {
      "q": "한 인스턴스는 각 속성에 단 하나의 값을 가진다.",
      "answer": true,
      "explanation": "1인스턴스 ↔ 1속성 = **단일값**이 원칙. 다중값이면 분리한다."
    }
  ],
  c114: [
    {
      "q": "M:N 관계는 그대로 구현 가능하다.",
      "answer": false,
      "explanation": "교차 엔터티로 **1:N 두 개**로 분해해야 한다."
    },
    {
      "q": "식별 관계는 점선으로 표기한다.",
      "answer": false,
      "explanation": "식별 관계 = **실선**, 비식별 관계 = 점선이다."
    },
    {
      "q": "관계의 4가지 표기 요소는 관계명 / 차수 / 선택성 / 방향성이다.",
      "answer": true,
      "explanation": "**관계명 · 차수 · 선택성 · 방향성** 4가지가 정답."
    },
    {
      "q": "관계차수의 3종류는 1:1, 1:N, M:N이다.",
      "answer": true,
      "explanation": "**1:1 · 1:N · M:N** 3종이 정답."
    },
    {
      "q": "자식 엔터티에 부모 식별자가 PK로 들어가면 식별 관계이다.",
      "answer": true,
      "explanation": "부모 PK가 자식 PK 일부로 상속 → **식별 관계**(실선)."
    },
    {
      "q": "부모 식별자가 일반 속성(FK)으로만 들어가면 식별 관계이다.",
      "answer": false,
      "explanation": "일반 속성으로만 상속되면 **비식별 관계**(점선)이다."
    }
  ],
  c115: [
    {
      "q": "주식별자 4대 조건은 유일성·최소성·불변성·존재성이다.",
      "answer": true,
      "explanation": "**유·최·불·존** (유일성 / 최소성 / 불변성 / 존재성=NOT NULL)."
    },
    {
      "q": "주식별자는 NULL이 가능하다.",
      "answer": false,
      "explanation": "NULL은 **존재성 위반**으로 불가능하다."
    },
    {
      "q": "복합식별자는 PK가 될 수 없다.",
      "answer": false,
      "explanation": "여러 속성으로 구성된 **정상적인 PK**가 될 수 있다."
    },
    {
      "q": "외부식별자는 다른 엔터티의 주식별자를 참조하는 식별자이다.",
      "answer": true,
      "explanation": "외부식별자 = **외래키(FK)**로, 다른 엔터티 PK를 참조한다."
    },
    {
      "q": "인조식별자는 업무적 의미가 없어 데이터 품질 검증이 어렵다.",
      "answer": true,
      "explanation": "업무적 의미가 없으므로 **중복 자연 검출이 어렵다**는 단점이 있다."
    },
    {
      "q": "본질식별자가 너무 길거나 자주 변하면 그대로 PK로 사용한다.",
      "answer": false,
      "explanation": "**인조식별자(대체키)** 도입을 고려해야 한다."
    },
    {
      "q": "주식별자는 자주 변경되어도 된다.",
      "answer": false,
      "explanation": "**불변성 위반**. 거의 변하지 않아야 한다."
    }
  ],
  c121: [
    {
      "q": "정규화 단계는 1NF → 2NF → 3NF → BCNF 순으로 진행된다.",
      "answer": true,
      "explanation": "**1NF → 2NF → 3NF → BCNF**가 정답. 순서 함정 단골."
    },
    {
      "q": "1NF의 핵심은 부분 함수 종속 제거이다.",
      "answer": false,
      "explanation": "1NF는 **원자값**(한 칸에 한 값)이 핵심. 부분종속 제거는 2NF."
    },
    {
      "q": "2NF의 핵심은 부분 함수 종속 제거이다.",
      "answer": true,
      "explanation": "2NF = **부분 함수 종속 제거**."
    },
    {
      "q": "3NF의 핵심은 이행 함수 종속 제거이다.",
      "answer": true,
      "explanation": "3NF = **이행 함수 종속 제거**."
    },
    {
      "q": "정규화의 단점은 조인 증가로 인한 조회 성능 저하이다.",
      "answer": true,
      "explanation": "테이블이 쪼개져 **조인이 많아져** 조회가 느려질 수 있다."
    },
    {
      "q": "이상현상 3종은 삽입 / 갱신 / 삭제 이상이다.",
      "answer": true,
      "explanation": "**삽입 · 갱신 · 삭제** 이상 3종이 정답."
    },
    {
      "q": "정규화하면 항상 성능이 좋아진다.",
      "answer": false,
      "explanation": "조회는 느려질 수 있다. 단 **데이터 무결성**은 향상된다."
    },
    {
      "q": "복합 PK 중 일부 속성에만 종속되는 컬럼이 있으면 2NF 위반이다.",
      "answer": true,
      "explanation": "**부분 함수 종속**으로 2NF 위반이다."
    }
  ],
  c122: [
    {
      "q": "관계는 SQL에서 외래키(FK)로 구현된다.",
      "answer": true,
      "explanation": "관계 → SQL의 **외래키(FK)** → 조회 시 JOIN."
    },
    {
      "q": "1:N 관계를 조인하면 부모 1행에 자식 N개일 때 결과는 N행이 된다.",
      "answer": true,
      "explanation": "부모 1행이 **자식 N행**으로 부풀려진다."
    },
    {
      "q": "M:N 관계를 조인할 때는 반드시 교차 엔터티를 거쳐야 한다.",
      "answer": true,
      "explanation": "**교차 엔터티**를 통해 두 번 조인한다 (수강·주문상세 등)."
    },
    {
      "q": "조인 조건을 누락하면 카티션 곱(Cartesian Product)이 발생한다.",
      "answer": true,
      "explanation": "조건 누락 시 **카티션 곱**으로 행 수가 폭발한다."
    },
    {
      "q": "외래키는 항상 NOT NULL이다.",
      "answer": false,
      "explanation": "**선택 관계**면 FK에 NULL이 허용된다."
    }
  ],
  c123: [
    {
      "q": "ACID 4성질은 원자성 / 일관성 / 고립성 / 지속성이다.",
      "answer": true,
      "explanation": "**원자성 · 일관성 · 고립성 · 지속성** 4가지가 정답."
    },
    {
      "q": "모델은 트랜잭션을 표현할 수 없다.",
      "answer": false,
      "explanation": "관계의 **필수성**·**식별성**으로 트랜잭션을 표현한다."
    },
    {
      "q": "원자성은 일부만 반영해도 된다.",
      "answer": false,
      "explanation": "원자성은 **전부 또는 전무**(All or Nothing)이다."
    },
    {
      "q": "식별 관계는 부모 없이 자식이 존재할 수 없는 관계이다.",
      "answer": true,
      "explanation": "부모 없이 자식 존재 불가 → 트랜잭션을 **함께 처리**해야 한다."
    },
    {
      "q": "필수 관계는 관계 자체가 반드시 있어야 함을 의미한다(NOT NULL FK).",
      "answer": true,
      "explanation": "필수 관계 = **NOT NULL FK**로 구현된다."
    },
    {
      "q": "COMMIT은 트랜잭션을 영구 반영하는 명령이다.",
      "answer": true,
      "explanation": "COMMIT = 트랜잭션을 **영구 반영**(지속성)."
    }
  ],
  c124: [
    {
      "q": "<code>WHERE COL = NULL</code>은 NULL인 행을 찾아준다.",
      "answer": false,
      "explanation": "결과 없음(0건). NULL 비교는 IS NULL을 사용한다."
    },
    {
      "q": "<code>NULL + 100</code>의 결과는 100이다.",
      "answer": false,
      "explanation": "결과는 **NULL**. NULL과의 산술 연산은 모두 NULL이다."
    },
    {
      "q": "<code>AVG(컬럼)</code>의 분모는 NULL을 제외한 개수이다.",
      "answer": true,
      "explanation": "NULL 제외 개수가 분모이므로 **분모도 줄어든다**."
    },
    {
      "q": "<code>COUNT(*)</code>는 NULL을 포함하고, <code>COUNT(컬럼)</code>은 NULL을 제외한다.",
      "answer": true,
      "explanation": "*는 **NULL 포함** / 컬럼명은 **NULL 제외**."
    },
    {
      "q": "<code>NULL = NULL</code>의 결과는 TRUE이다.",
      "answer": false,
      "explanation": "결과는 **UNKNOWN**. WHERE 절에서는 FALSE처럼 동작해 행이 제외된다."
    },
    {
      "q": "Oracle에서 <code>ORDER BY ASC</code>의 기본 NULL 위치는 마지막(NULLS LAST)이다.",
      "answer": true,
      "explanation": "Oracle ASC 기본 = **NULLS LAST** (마지막)."
    },
    {
      "q": "<code>NULLIF(10, 10)</code>의 결과는 10이다.",
      "answer": false,
      "explanation": "두 값이 같으면 **NULL**을 반환한다."
    },
    {
      "q": "<code>COALESCE(NULL, NULL, 'X')</code>의 결과는 'X'이다.",
      "answer": true,
      "explanation": "NULL이 아닌 **첫 번째 값**인 'X'를 반환한다."
    }
  ],
  c125: [
    {
      "q": "인조식별자는 업무적 의미가 없어 중복 검증이 어렵다는 단점이 있다.",
      "answer": true,
      "explanation": "**업무적 의미 없음**, 중복 자연 검출이 어렵다는 단점이 있다."
    },
    {
      "q": "본질식별자는 길거나 변경 위험, 보안 이슈가 단점이 될 수 있다.",
      "answer": true,
      "explanation": "주민번호 등은 **길이·변경·보안** 위험이 단점."
    },
    {
      "q": "인조식별자는 항상 본질식별자보다 좋다.",
      "answer": false,
      "explanation": "**상황에 따라 다르다**. 길이·변경·보안 위험이 있을 때 인조 권장."
    },
    {
      "q": "인조식별자 도입 시 본질키는 UNIQUE 제약으로 무결성을 보존해야 한다.",
      "answer": true,
      "explanation": "본질키에 **UNIQUE 제약**을 걸지 않으면 중복 데이터가 발생할 수 있다."
    },
    {
      "q": "주민등록번호를 PK로 쓰는 것이 보안상 권장된다.",
      "answer": false,
      "explanation": "보안 이슈로 보통 **인조식별자**가 권장된다."
    }
  ],
  c211: [
    {
      "q": "<code>TRUNCATE</code>는 DML이며 롤백이 가능하다.",
      "answer": false,
      "explanation": "**DDL**이며 롤백 불가(자동 COMMIT)."
    },
    {
      "q": "<code>DELETE</code>는 DML이며 롤백이 가능하다.",
      "answer": true,
      "explanation": "**DML**이라 트랜잭션 제어로 롤백 가능."
    },
    {
      "q": "<code>COMMIT</code>은 TCL에 속한다.",
      "answer": true,
      "explanation": "TCL = **COMMIT / ROLLBACK / SAVEPOINT**."
    },
    {
      "q": "<code>GRANT</code>와 <code>REVOKE</code>는 DDL에 속한다.",
      "answer": false,
      "explanation": "권한을 다루는 **DCL**이다."
    },
    {
      "q": "관계형 데이터베이스의 데이터 저장 단위는 테이블(행과 열)이다.",
      "answer": true,
      "explanation": "RDB는 행(Row)과 열(Column)로 구성된 **테이블**에 저장한다."
    },
    {
      "q": "한 행은 Row, Record, Tuple이라고 부른다.",
      "answer": true,
      "explanation": "모두 같은 의미의 동의어다."
    },
    {
      "q": "한 열은 Column, Attribute, Field라고 부른다.",
      "answer": true,
      "explanation": "모두 같은 의미의 동의어다."
    }
  ],
  c212: [
    {
      "q": "SELECT 실행 순서는 SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY 이다.",
      "answer": false,
      "explanation": "실제 실행 순서는 **FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY**."
    },
    {
      "q": "WHERE 절에서 SELECT 절의 별칭(alias)을 사용할 수 있다.",
      "answer": false,
      "explanation": "SELECT가 WHERE보다 **나중에** 실행되므로 별칭 사용 불가."
    },
    {
      "q": "ORDER BY 절에서 SELECT 절의 별칭을 사용할 수 있다.",
      "answer": true,
      "explanation": "ORDER BY는 SELECT 이후 실행되므로 **별칭 사용 가능**."
    },
    {
      "q": "DISTINCT는 첫 번째 컬럼에만 적용된다.",
      "answer": false,
      "explanation": "SELECT 절 전체(여러 컬럼이면 **조합 단위**)에 적용된다."
    },
    {
      "q": "Oracle에서 테이블 별칭에 <code>AS</code>를 사용할 수 있다.",
      "answer": false,
      "explanation": "Oracle 테이블 별칭에는 AS **사용 불가**(컬럼 별칭은 가능)."
    },
    {
      "q": "<code>SELECT * FROM DUAL</code> 결과는 1행 1컬럼('X')이다.",
      "answer": true,
      "explanation": "DUAL은 Oracle의 1행 1컬럼 가짜 테이블."
    }
  ],
  c213: [
    {
      "q": "<code>SUBSTR('ABCDE', 2, 3)</code>의 결과는 'BCD'이다.",
      "answer": true,
      "explanation": "Oracle 인덱스는 **1부터**, 2번째부터 3글자 → 'BCD'."
    },
    {
      "q": "Oracle <code>LENGTH('한글')</code>의 결과는 6이다.",
      "answer": false,
      "explanation": "LENGTH는 **글자 수(=2)**. 바이트 수(6)는 **LENGTHB**."
    },
    {
      "q": "<code>MOD(10, 3)</code>의 결과는 1이다.",
      "answer": true,
      "explanation": "10을 3으로 나눈 나머지 = 1."
    },
    {
      "q": "<code>ROUND(3.456, 2)</code>의 결과는 3.46이다.",
      "answer": true,
      "explanation": "소수점 2자리에서 반올림 → 3.46."
    },
    {
      "q": "<code>TRUNC(3.456, 2)</code>의 결과는 3.46이다.",
      "answer": false,
      "explanation": "TRUNC는 **버림** → 3.45."
    },
    {
      "q": "DECODE로 범위 비교(BETWEEN, &gt;, &lt;)를 할 수 있다.",
      "answer": false,
      "explanation": "DECODE는 **동등 비교만** 가능. 범위 비교는 CASE."
    },
    {
      "q": "날짜 - 날짜의 결과는 숫자(일수)이다.",
      "answer": true,
      "explanation": "두 날짜의 차이는 **일수(숫자)**로 반환."
    },
    {
      "q": "<code>NVL2(NULL, 'A', 'B')</code>의 결과는 'A'이다.",
      "answer": false,
      "explanation": "NVL2(expr, A, B)는 expr이 NULL이면 **B**, 아니면 A → 결과는 'B'."
    },
    {
      "q": "암시적 형변환이 명시적 형변환보다 권장된다.",
      "answer": false,
      "explanation": "**명시적**(TO_NUMBER, TO_DATE 등)이 안전하고 권장."
    }
  ],
  c214: [
    {
      "q": "<code>WHERE COMM = NULL</code>은 COMM이 NULL인 행을 반환한다.",
      "answer": false,
      "explanation": "= NULL은 항상 거짓이라 **0건**. IS NULL을 사용해야 한다."
    },
    {
      "q": "<code>BETWEEN 100 AND 200</code>은 100과 200을 포함한다.",
      "answer": true,
      "explanation": "BETWEEN은 **양 끝 포함**(100 ≤ x ≤ 200)."
    },
    {
      "q": "<code>LIKE '_김%'</code>은 첫 글자가 '김'인 문자열을 찾는다.",
      "answer": false,
      "explanation": "_은 임의 1글자이므로 **두 번째 글자가 '김'**인 문자열을 찾는다."
    },
    {
      "q": "<code>IN (a, b, c)</code>은 OR의 단축형과 같다.",
      "answer": true,
      "explanation": "IN (a,b,c) ≡ = a OR = b OR = c."
    },
    {
      "q": "AND가 OR보다 우선순위가 높다.",
      "answer": true,
      "explanation": "A=1 OR B=2 AND C=3 = A=1 OR (B=2 AND C=3)."
    },
    {
      "q": "<code>NOT IN</code> 목록에 NULL이 포함돼도 결과는 정상이다.",
      "answer": false,
      "explanation": "NOT IN (..., NULL)은 항상 거짓 → **결과가 비어버린다**."
    },
    {
      "q": "LIKE의 <code>_</code>는 1글자, <code>%</code>는 0개 이상의 임의 문자에 매칭된다.",
      "answer": true,
      "explanation": "_ = 정확히 1글자 / % = 0개 이상."
    }
  ],
  c215: [
    {
      "q": "WHERE 절에서 집계 함수(SUM, AVG 등)를 사용할 수 있다.",
      "answer": false,
      "explanation": "WHERE에서는 집계 함수 사용 **불가**. **HAVING**에서 사용한다."
    },
    {
      "q": "GROUP BY에 없는 일반 컬럼을 SELECT 절에 그대로 쓸 수 있다.",
      "answer": false,
      "explanation": "**집계 함수로 감싼 형태**로만 가능. 그대로는 에러."
    },
    {
      "q": "HAVING은 GROUP BY 없이도 사용할 수 있다.",
      "answer": true,
      "explanation": "전체를 **1개 그룹**으로 보고 사용 가능."
    },
    {
      "q": "실행 순서는 FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY 이다.",
      "answer": true,
      "explanation": "이 순서가 정답(WHERE는 행 단위, HAVING은 그룹 단위 필터)."
    },
    {
      "q": "<code>COUNT(*)</code>와 <code>COUNT(컬럼)</code>의 결과는 항상 같다.",
      "answer": false,
      "explanation": "COUNT(*)는 NULL 포함, COUNT(컬럼)은 **NULL 제외**."
    },
    {
      "q": "<code>GROUP BY (A, B)</code> 결과 행 수는 A, B 컬럼 조합의 개수다.",
      "answer": true,
      "explanation": "GROUP BY 결과 행 수 = **그룹화 컬럼 조합의 개수**."
    }
  ],
  c216: [
    {
      "q": "ORDER BY의 정렬 방향 기본값은 DESC(내림차순)이다.",
      "answer": false,
      "explanation": "기본값은 **ASC(오름차순)**. DESC는 명시 필수."
    },
    {
      "q": "ORDER BY 절에서 SELECT 별칭을 사용할 수 있다.",
      "answer": true,
      "explanation": "ORDER BY는 SELECT 이후 실행 → **별칭 사용 가능**."
    },
    {
      "q": "ORDER BY 절에서 컬럼 번호(숫자)로 정렬 기준을 지정할 수 있다.",
      "answer": true,
      "explanation": "컬럼명 / 별칭 / **컬럼 번호** 모두 가능."
    },
    {
      "q": "Oracle에서 <code>ORDER BY ASC</code> 시 NULL은 맨 처음에 나온다.",
      "answer": false,
      "explanation": "Oracle ASC = **NULL 마지막**(NULLS LAST)."
    },
    {
      "q": "MS-SQL에서 <code>ORDER BY ASC</code> 시 NULL은 맨 처음에 나온다.",
      "answer": true,
      "explanation": "MS-SQL ASC = **NULL 처음**(NULLS FIRST)."
    },
    {
      "q": "<code>ORDER BY DEPT, SAL DESC</code>는 두 컬럼 모두 DESC로 정렬된다.",
      "answer": false,
      "explanation": "DEPT는 ASC(생략값), **SAL만 DESC**. 정렬 방향은 컬럼별로 따로 적용."
    },
    {
      "q": "UNION 등 집합 연산 후 ORDER BY는 맨 마지막에 한 번만 쓴다.",
      "answer": true,
      "explanation": "각 SELECT마다 ORDER BY 불가, **최종 결과에 한 번만**."
    }
  ],
  c217: [
    {
      "q": "조인 조건이 빠지면 카티션 곱(Cartesian Product)이 발생한다.",
      "answer": true,
      "explanation": "조건 누락 시 행 수 폭발(**A행 × B행**)."
    },
    {
      "q": "Oracle 외부조인 표기 <code>(+)</code>는 행이 살아남을 쪽에 붙인다.",
      "answer": false,
      "explanation": "(+)는 **NULL을 채울 쪽**(없을 수 있는 쪽)에 붙인다."
    },
    {
      "q": "N개 테이블 조인 시 조인 조건은 최소 N-1개 필요하다.",
      "answer": true,
      "explanation": "덜 주면 카티션 곱 발생."
    },
    {
      "q": "BETWEEN, &gt;, &lt; 같은 조건은 비동등 조인의 예이다.",
      "answer": true,
      "explanation": "= 가 아닌 비교 연산자를 사용하면 **Non-EQUI 조인**."
    },
    {
      "q": "SELF 조인은 같은 테이블을 두 번 사용하며 별칭이 필수다.",
      "answer": true,
      "explanation": "같은 테이블을 두 번 참조하므로 **별칭 필수**."
    },
    {
      "q": "OUTER 조인은 매칭되지 않는 행을 NULL과 함께 결과에 포함한다.",
      "answer": true,
      "explanation": "INNER는 매칭만, **OUTER는 비매칭도 NULL로 보존**."
    }
  ],
  c218: [
    {
      "q": "<code>JOIN ... ON</code>에서 INNER 키워드는 생략할 수 있다.",
      "answer": true,
      "explanation": "INNER 생략 시 기본이 INNER JOIN."
    },
    {
      "q": "<code>LEFT JOIN</code>에서 OUTER 키워드는 생략할 수 있다.",
      "answer": true,
      "explanation": "LEFT JOIN = LEFT OUTER JOIN."
    },
    {
      "q": "NATURAL JOIN은 PK 컬럼만 자동으로 매칭한다.",
      "answer": false,
      "explanation": "**이름이 같은 모든 컬럼**을 자동 매칭."
    },
    {
      "q": "NATURAL JOIN에서 같은 이름 컬럼에 테이블 별칭을 붙일 수 있다.",
      "answer": false,
      "explanation": "NATURAL JOIN의 공통 컬럼에는 **별칭 사용 불가**."
    },
    {
      "q": "USING 절에서 명시한 컬럼에는 테이블 별칭을 붙일 수 없다.",
      "answer": true,
      "explanation": "USING 컬럼에 테이블 별칭 **불가**."
    },
    {
      "q": "OUTER JOIN의 추가 조건은 ON 절보다 WHERE 절에 두는 게 안전하다.",
      "answer": false,
      "explanation": "WHERE에 두면 NULL 행이 빠져 **INNER 효과**. 반드시 **ON**에."
    },
    {
      "q": "FULL OUTER JOIN은 양쪽에서 매칭 안 되는 행까지 모두 포함한다.",
      "answer": true,
      "explanation": "FULL OUTER = LEFT + RIGHT 합집합."
    },
    {
      "q": "CROSS JOIN의 결과 행수는 A + B 이다.",
      "answer": false,
      "explanation": "CROSS JOIN = **A × B**(카티션 곱)."
    }
  ],
  c221: [
    {
      "q": "다중행 서브쿼리에 <code>=</code> 연산자를 사용할 수 있다.",
      "answer": false,
      "explanation": "다중행에는 에러 → IN을 사용해야 한다."
    },
    {
      "q": "<code>&gt; ANY(...)</code>는 <strong>최솟값보다</strong> 크면 통과한다 (헐거운 조건).",
      "answer": true,
      "explanation": "&gt; ANY = 최솟값 기준, &gt; ALL = 최댓값 기준."
    },
    {
      "q": "<code>&gt; ALL(...)</code>은 최솟값보다만 크면 통과한다.",
      "answer": false,
      "explanation": "&gt; ALL은 **최댓값보다 커야** 통과한다 (엄격한 조건)."
    },
    {
      "q": "스칼라 서브쿼리는 여러 행을 반환해도 정상 동작한다.",
      "answer": false,
      "explanation": "스칼라 서브쿼리는 **1행 1값**만 허용 — 여러 행이면 에러."
    },
    {
      "q": "인라인 뷰는 <strong>FROM 절</strong>에 위치하며 별칭이 필수다.",
      "answer": true,
      "explanation": "FROM 절 서브쿼리이며 **별칭 필수**."
    },
    {
      "q": "EXISTS는 서브쿼리 결과 값을 가져와 사용한다.",
      "answer": false,
      "explanation": "EXISTS는 결과 값이 아니라 **존재 여부만** 확인한다."
    },
    {
      "q": "연관 서브쿼리는 메인쿼리 컬럼을 참조하며 <strong>행마다 반복 실행</strong>된다.",
      "answer": true,
      "explanation": "메인 컬럼 참조 + 각 행마다 반복 (성능 주의)."
    }
  ],
  c222: [
    {
      "q": "집합 연산자로 합치는 두 SELECT의 컬럼 개수가 달라도 자동으로 맞춰진다.",
      "answer": false,
      "explanation": "컬럼 개수가 다르면 **에러**다."
    },
    {
      "q": "UNION은 중복을 제거하고, UNION ALL은 그대로 둔다.",
      "answer": true,
      "explanation": "UNION = 중복 제거(정렬 발생, 느림) / UNION ALL = 중복 유지(빠름)."
    },
    {
      "q": "집합 연산 결과의 컬럼명은 마지막 SELECT를 기준으로 정해진다.",
      "answer": false,
      "explanation": "결과 컬럼명은 **첫 SELECT** 기준이다."
    },
    {
      "q": "ORDER BY는 각 SELECT마다 따로 작성한다.",
      "answer": false,
      "explanation": "ORDER BY는 **마지막에 한 번**만 작성한다."
    },
    {
      "q": "UNION/INTERSECT/MINUS는 중복 제거를 위해 <strong>정렬이 발생</strong>한다.",
      "answer": true,
      "explanation": "중복 제거 과정에서 정렬이 일어난다 (UNION ALL은 정렬 없음)."
    },
    {
      "q": "MINUS는 ANSI 표준 집합 연산자다.",
      "answer": false,
      "explanation": "MINUS는 **Oracle 전용**. 표준은 EXCEPT다."
    },
    {
      "q": "집합 연산자에서는 <code>NULL = NULL</code>로 간주되어 중복 제거 대상이 된다.",
      "answer": true,
      "explanation": "일반 비교와 달리 NULL끼리 같다고 보고 중복으로 취급한다."
    }
  ],
  c223: [
    {
      "q": "<code>ROLLUP(A, B)</code>는 <strong>(A, B) → (A) → ()</strong> 3단계의 소계를 만든다.",
      "answer": true,
      "explanation": "ROLLUP은 **N+1 단계**의 계층적 소계를 만든다."
    },
    {
      "q": "<code>CUBE(A, B)</code>는 (A, B), (A), () 3단계만 만든다.",
      "answer": false,
      "explanation": "CUBE는 **(A, B), (A), (B), ()** — 모든 조합 (2^N 단계)."
    },
    {
      "q": "ROLLUP/CUBE 결과의 NULL 행은 모두 원본 데이터의 NULL을 의미한다.",
      "answer": false,
      "explanation": "NULL 행은 **소계 행**이거나 **원래 NULL**인 경우 둘 다 가능하다."
    },
    {
      "q": "<code>GROUPING</code> 함수의 결과가 <strong>1이면 소계 행</strong>이다.",
      "answer": true,
      "explanation": "1 = 소계 / 0 = 일반 행. 데이터 NULL과 소계 NULL을 구분할 때 사용."
    },
    {
      "q": "CUBE(컬럼수=N)의 결과 조합 수는 N+1개다.",
      "answer": false,
      "explanation": "CUBE 조합 수는 **2^N**이다 (N+1은 ROLLUP)."
    },
    {
      "q": "소계 NULL과 데이터 NULL을 구분하려면 <strong>GROUPING 함수</strong>를 사용한다.",
      "answer": true,
      "explanation": "GROUPING(컬럼) = 1이면 소계, 0이면 일반."
    }
  ],
  c224: [
    {
      "q": "동점이 있을 때 <strong>RANK</strong>는 다음 순위를 건너뛰고, <strong>DENSE_RANK</strong>는 연속, <strong>ROW_NUMBER</strong>는 모두 다른 순위를 매긴다.",
      "answer": true,
      "explanation": "RANK(1,1,3) / DENSE_RANK(1,1,2) / ROW_NUMBER(모두 다름)."
    },
    {
      "q": "<code>OVER ()</code>처럼 괄호를 비우면 에러가 난다.",
      "answer": false,
      "explanation": "빈 괄호는 **전체를 한 윈도우**로 간주한다 (정상 동작)."
    },
    {
      "q": "PARTITION BY를 생략하면 <strong>전체 행을 하나의 그룹</strong>으로 본다.",
      "answer": true,
      "explanation": "생략 = 전체가 단일 윈도우."
    },
    {
      "q": "윈도우 함수 결과를 WHERE 절에 직접 사용할 수 있다.",
      "answer": false,
      "explanation": "WHERE에 직접 사용 불가 → **인라인뷰/서브쿼리**로 감싸야 한다."
    },
    {
      "q": "LAG/LEAD의 기본 오프셋은 <strong>1</strong>이다.",
      "answer": true,
      "explanation": "인자를 생략하면 1행 앞/뒤를 본다."
    },
    {
      "q": "윈도우 함수는 GROUP BY처럼 결과 행 수를 줄인다.",
      "answer": false,
      "explanation": "윈도우 함수 결과 행 수는 **원본과 동일** (행을 합치지 않음)."
    }
  ],
  c225: [
    {
      "q": "<code>WHERE ROWNUM = 5</code>는 5번째 행을 반환한다.",
      "answer": false,
      "explanation": "결과 없음. ROWNUM은 **=1만 매칭**되고 &gt;n은 항상 거짓이다."
    },
    {
      "q": "ROWNUM과 ORDER BY를 함께 쓰면 정렬 후 N건이 잘린다.",
      "answer": false,
      "explanation": "ROWNUM이 정렬 **전**에 매겨지므로, **인라인 뷰로 정렬 먼저** 수행하고 ROWNUM은 나중에 적용해야 한다."
    },
    {
      "q": "동률을 포함해 Top N을 뽑으려면 <code>WITH TIES</code> 또는 <code>RANK()</code>를 쓴다.",
      "answer": true,
      "explanation": "정확히 N개만 = **ROW_NUMBER**, 동률 포함 = **WITH TIES · RANK**."
    },
    {
      "q": "부서별 Top N은 <code>ROW_NUMBER() OVER (PARTITION BY ...)</code> 윈도우 함수로 처리한다.",
      "answer": true,
      "explanation": "**ROW_NUMBER + PARTITION BY** 후 인라인뷰에서 N 이하 필터."
    },
    {
      "q": "페이징 표준 문법은 <code>OFFSET ... FETCH NEXT ...</code>이다.",
      "answer": true,
      "explanation": "OFFSET n ROWS FETCH NEXT m ROWS ONLY가 표준."
    }
  ],
  c226: [
    {
      "q": "<code>START WITH</code>는 루트(최상위) 조건을 지정한다.",
      "answer": true,
      "explanation": "보통 MGR_ID IS NULL처럼 **루트 조건**을 명시한다."
    },
    {
      "q": "<code>CONNECT BY PRIOR EMP_ID = MGR_ID</code>는 역방향(자식→부모) 전개이다.",
      "answer": false,
      "explanation": "**순방향(부모→자식)**이다. 역방향은 PRIOR MGR_ID = EMP_ID."
    },
    {
      "q": "<code>LEVEL</code>은 루트에서 0부터 시작한다.",
      "answer": false,
      "explanation": "루트가 **1**부터 시작한다."
    },
    {
      "q": "계층형 결과의 형제 정렬은 일반 <code>ORDER BY</code>로 처리한다.",
      "answer": false,
      "explanation": "일반 ORDER BY는 트리가 깨진다. **ORDER SIBLINGS BY**를 써야 한다."
    },
    {
      "q": "<code>SYS_CONNECT_BY_PATH</code>는 루트에서 현재 노드까지의 경로 문자열을 반환한다.",
      "answer": true,
      "explanation": "루트→현재까지의 **경로 문자열**을 만들어 준다."
    },
    {
      "q": "셀프 조인 시 별칭(alias)은 선택 사항이다.",
      "answer": false,
      "explanation": "같은 테이블을 두 번 참조하므로 **별칭은 필수**다."
    },
    {
      "q": "Oracle의 <code>CONNECT BY</code> 구문은 ANSI 표준이다.",
      "answer": false,
      "explanation": "**Oracle 전용**이다. 표준은 WITH RECURSIVE ... UNION ALL 재귀 CTE."
    }
  ],
  c227: [
    {
      "q": "PIVOT은 행을 컬럼으로 변환한다(세로 → 가로).",
      "answer": true,
      "explanation": "**행 → 컬럼**으로 변환한다."
    },
    {
      "q": "UNPIVOT은 행을 컬럼으로 변환한다.",
      "answer": false,
      "explanation": "**컬럼 → 행**(가로 → 세로)으로 변환한다."
    },
    {
      "q": "PIVOT의 <code>IN</code> 절에는 변환할 값들을 나열한다.",
      "answer": true,
      "explanation": "새 **컬럼이 될 값들**을 IN으로 나열한다."
    },
    {
      "q": "PIVOT 결과에서 매칭이 없는 칸은 0으로 채워진다.",
      "answer": false,
      "explanation": "매칭이 없는 칸은 **NULL**이다."
    },
    {
      "q": "UNPIVOT은 기본적으로 NULL 행을 제외하며, <code>INCLUDE NULLS</code>로 포함시킬 수 있다.",
      "answer": true,
      "explanation": "기본 **제외**, INCLUDE NULLS로 포함 가능."
    },
    {
      "q": "PIVOT 절 없이 <code>CASE WHEN + GROUP BY</code>로도 같은 결과를 만들 수 있다.",
      "answer": true,
      "explanation": "가능하다. **CASE WHEN + GROUP BY** 조합은 시험 단골."
    }
  ],
  c228: [
    {
      "q": "<code>^</code>은 <code>[]</code> 밖에서 문자열의 시작을, 안에서는 부정을 의미한다.",
      "answer": true,
      "explanation": "[] **밖**이면 시작, [^abc]처럼 **안**이면 부정."
    },
    {
      "q": "<code>$</code>는 문자열의 끝을 의미한다.",
      "answer": true,
      "explanation": "**문자열의 끝**을 의미한다."
    },
    {
      "q": "<code>*</code>은 1개 이상, <code>+</code>은 0개 이상의 반복을 의미한다.",
      "answer": false,
      "explanation": "반대다. *은 **0개 이상**, +은 **1개 이상**."
    },
    {
      "q": "<code>.</code>은 임의의 한 글자를 뜻하며 LIKE의 <code>_</code>와 같은 역할이다.",
      "answer": true,
      "explanation": "**임의의 한 글자**. LIKE의 _에 대응."
    },
    {
      "q": "<code>\\d</code>는 숫자 한 글자(<code>[0-9]</code>)를 의미한다.",
      "answer": true,
      "explanation": "**숫자 [0-9]**를 의미한다."
    },
    {
      "q": "<code>[가-힣]</code>은 한글 한 글자를 의미한다.",
      "answer": true,
      "explanation": "**한글 1자**를 매칭한다."
    },
    {
      "q": "LIKE는 다양한 메타문자를 지원하지만 REGEXP_LIKE는 <code>%</code>·<code>_</code>만 지원한다.",
      "answer": false,
      "explanation": "반대다. **LIKE는 %·_만**, **REGEXP는 다양한 메타문자**를 지원한다."
    }
  ],
  c231: [
    {
      "q": "TRUNCATE는 DML이다.",
      "answer": false,
      "explanation": "**DDL**이며 롤백 불가하다."
    },
    {
      "q": "DELETE 후 ROLLBACK이 가능하다.",
      "answer": true,
      "explanation": "DELETE는 DML이므로 ROLLBACK으로 취소 가능하다."
    },
    {
      "q": "<code>INSERT INTO ... VALUES</code>로 한 번에 여러 행을 입력할 수 있다.",
      "answer": false,
      "explanation": "일반 INSERT는 1행만. 다중행은 INSERT ALL 또는 INSERT INTO ... SELECT를 사용한다."
    },
    {
      "q": "<code>UPDATE ... WHERE</code>에서 WHERE 절을 누락하면 에러가 발생한다.",
      "answer": false,
      "explanation": "에러 없이 **모든 행이 수정**된다 (위험)."
    },
    {
      "q": "MERGE의 두 가지 절은 <code>WHEN MATCHED</code>와 <code>WHEN NOT MATCHED</code>이다.",
      "answer": true,
      "explanation": "MATCHED → UPDATE, NOT MATCHED → INSERT (UPSERT)."
    },
    {
      "q": "Oracle은 DML 후 자동 커밋된다.",
      "answer": false,
      "explanation": "Oracle은 DML 후 **명시적 COMMIT 필요** (DDL은 자동 COMMIT)."
    }
  ],
  c232: [
    {
      "q": "TCL 명령어는 <code>COMMIT</code>, <code>ROLLBACK</code>, <code>SAVEPOINT</code>이다.",
      "answer": true,
      "explanation": "이 3가지가 TCL의 전부."
    },
    {
      "q": "DDL 실행 후 ROLLBACK으로 취소가 가능하다.",
      "answer": false,
      "explanation": "불가 — Oracle DDL은 **자동 COMMIT**이다."
    },
    {
      "q": "ROLLBACK은 마지막 COMMIT 이후의 모든 DML을 취소한다.",
      "answer": true,
      "explanation": "마지막 COMMIT 시점까지 되돌린다."
    },
    {
      "q": "SAVEPOINT는 부분 ROLLBACK이 가능한 지점을 의미한다.",
      "answer": true,
      "explanation": "ROLLBACK TO sp로 부분 취소 가능."
    },
    {
      "q": "<code>ROLLBACK TO SP1</code> 실행 후 SP1 이전 작업도 함께 취소된다.",
      "answer": false,
      "explanation": "SP1 이전 작업은 **유지**되고 SP1 이후만 취소된다."
    },
    {
      "q": "전체 ROLLBACK 후에도 SAVEPOINT는 그대로 유지된다.",
      "answer": false,
      "explanation": "전체 ROLLBACK 시 SAVEPOINT는 **모두 사라진다**."
    },
    {
      "q": "비정상 종료 시 자동 ROLLBACK 처리된다.",
      "answer": true,
      "explanation": "정상 종료 = 자동 COMMIT, 비정상 = 자동 ROLLBACK."
    }
  ],
  c233: [
    {
      "q": "TRUNCATE는 DML로 분류된다.",
      "answer": false,
      "explanation": "**DDL**이다 (DML 아님)."
    },
    {
      "q": "DDL 실행 후 ROLLBACK이 가능하다.",
      "answer": false,
      "explanation": "불가 — DDL은 자동 COMMIT."
    },
    {
      "q": "PRIMARY KEY는 NULL을 허용한다.",
      "answer": false,
      "explanation": "불허 (UNIQUE + NOT NULL)."
    },
    {
      "q": "UNIQUE 제약은 NULL을 허용한다.",
      "answer": true,
      "explanation": "중복만 막으며 NULL은 허용된다."
    },
    {
      "q": "한 테이블에 PK는 여러 개 지정할 수 있다.",
      "answer": false,
      "explanation": "한 테이블당 PK는 **1개**만 가능."
    },
    {
      "q": "FK가 참조하는 컬럼은 PK 또는 UNIQUE여야 한다.",
      "answer": true,
      "explanation": "참조 대상은 PK 또는 UNIQUE 제약을 가진 컬럼이어야 한다."
    },
    {
      "q": "<code>CHECK (SAL &gt; 0)</code>은 올바른 CHECK 제약 예시이다.",
      "answer": true,
      "explanation": "조건식을 만족하는 값만 허용하는 CHECK 제약."
    },
    {
      "q": "<code>ON DELETE CASCADE</code>는 부모 삭제 시 자식도 함께 삭제된다는 뜻이다.",
      "answer": true,
      "explanation": "부모 삭제 → 자식 자동 삭제."
    },
    {
      "q": "<code>ALTER TABLE ... DROP COLUMN</code> 실행 후 ROLLBACK이 가능하다.",
      "answer": false,
      "explanation": "불가 (DDL이므로 자동 COMMIT)."
    }
  ],
  c234: [
    {
      "q": "DCL 명령어는 <code>GRANT</code>와 <code>REVOKE</code>이다.",
      "answer": true,
      "explanation": "권한 부여 / 회수 두 가지가 DCL."
    },
    {
      "q": "시스템 권한 부여 시 옵션은 <strong>WITH GRANT OPTION</strong>이다.",
      "answer": false,
      "explanation": "시스템 권한은 **WITH ADMIN OPTION**. (WITH GRANT OPTION은 객체 권한)"
    },
    {
      "q": "객체 권한 부여 시 옵션은 <strong>WITH GRANT OPTION</strong>이다.",
      "answer": true,
      "explanation": "객체 권한 = WITH GRANT OPTION, 시스템 권한 = WITH ADMIN OPTION."
    },
    {
      "q": "ROLE은 권한 묶음을 한 번에 관리하기 위한 것이다.",
      "answer": true,
      "explanation": "여러 권한을 ROLE에 묶어 사용자에 일괄 부여."
    },
    {
      "q": "<code>GRANT DEV_ROLE TO USER1</code>은 DDL로 분류된다.",
      "answer": false,
      "explanation": "GRANT 이므로 **DCL**이다."
    },
    {
      "q": "모든 사용자에게 권한을 부여하려면 <code>TO PUBLIC</code>을 사용한다.",
      "answer": true,
      "explanation": "TO PUBLIC은 모든 사용자 대상."
    },
    {
      "q": "WITH GRANT OPTION 으로 부여된 권한을 회수하면 재부여된 사용자의 권한도 함께 사라진다.",
      "answer": true,
      "explanation": "연쇄 회수 (cascade revoke)."
    }
  ],
};
