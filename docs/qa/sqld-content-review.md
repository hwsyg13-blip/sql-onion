# SQLD 시안 SQL 정확성 검토 보고서

검토일: 2026-04-27
검토 범위: `_mockups/*.html` 30개 챕터 + `exam-review.html`(시험 대비 통합 페이지)

## 요약

- 검토 챕터: 30개 + exam-review.html
- 발견된 오류: 8건
- 심각도 분포: ERROR 2건 / WARN 6건 / INFO 0건

핵심 5개 챕터(1-2-4 NULL · 2-1-7 조인 · 2-2-3 그룹함수 · 2-2-4 윈도우함수 · 2-3-3 DDL)는 큰 SQL 문법·결과 오류 없이 정확하게 작성되어 있음. 발견된 오류는 대부분 시험 대비 통합 페이지(exam-review.html)와 일부 챕터의 부분적 표현·예시 단계에서 학습자 혼동을 유발할 수 있는 항목들임.

---

## 발견된 오류

### 1. [ERROR] 챕터: 2-2-3 그룹함수 — ROLLUP 결과 단계 표기 오류
**위치**: `2-2-3_그룹함수.html` 102행
**현재 표기**: `<h4 class="reveal">결과 — 4단계(부서+직무, 부서, 전체)</h4>`
**문제**: ROLLUP(DEPT_ID, JOB)은 컬럼 2개이므로 N+1 = **3단계**((DEPT, JOB), (DEPT), ())가 맞음. 본 챕터 78행에서도 "ROLLUP(A, B, C)라면 4단계"라고 정확히 설명하고 있고, 시험 출제 포인트 296~297행에서도 ROLLUP(A, B) 정답을 `(A, B), (A), ()`로 표기. 그런데 실전 SQL 결과 제목만 "4단계"라고 적혀 모순 발생.
**올바른 표기**: "결과 — 3단계(부서+직무, 부서, 전체)" 또는 "결과 — N+1 단계(부서+직무, 부서, 전체)"
**근거**: ROLLUP(컬럼 N개) → N+1 단계 (SQLD 가이드 표준)

### 2. [ERROR] 챕터: exam-review.html (1-2-4 NULL) — `NULL = NULL` 정답 표기
**위치**: `exam-review.html` 547행
**현재 표기**: `✓ 정답 — FALSE (정확히는 UNKNOWN)`
**문제**: SQLD 시험 표준 정답은 **UNKNOWN(또는 NULL)**임. "FALSE"라고 단정적으로 적은 후 괄호로 정정하는 표현은 학습자에게 잘못된 인상을 줄 수 있음. 본 챕터(1-2-4) 본문 373행에서는 "NULL = NULL도 결과가 UNKNOWN"으로 정확히 다루고 있으나 exam-review에서 표현이 모호. 시험에서 "NULL = NULL의 결과는 FALSE이다"는 보기는 **틀린 보기**로 출제됨.
**올바른 표기**: `✓ 정답 — UNKNOWN (TRUE도 FALSE도 아님)`
**근거**: SQL 3-값 논리(SQL Standard) · SQLD 가이드. WHERE에서는 UNKNOWN이 TRUE가 아니므로 행이 제외되는 것이지, 결과가 FALSE인 것이 아님.

---

### 3. [WARN] 챕터: 2-2-5 TopN쿼리 — `FETCH FIRST n ROWS ONLY` vs `WITH TIES` 결과 차이가 안 드러남
**위치**: `2-2-5_TopN쿼리.html` 151~178행
**현재 표기**: `FETCH FIRST 3 ROWS ONLY` 결과(이/박/최, 3행)와 `FETCH FIRST 3 ROWS WITH TIES` 결과(이/박/최, 3행)가 **동일하게 표시**됨. 두 옵션의 차이를 보여주지 못함.
**문제**: `WITH TIES`는 마지막 행과 동률인 행을 모두 포함시키는 옵션이고, `ROWS ONLY`는 정확히 N행만 반환. 현재 예시 데이터(박·최가 4500 동률, 모두 상위 2~3등)에서는 두 결과가 우연히 같아져 차이가 사라짐. 또한 `ROWS ONLY`가 동률인 두 행 중 어느 한 명만 반환하는 비결정적 동작을 시안에서는 둘 다 포함된 결과로 그려 학습자에게 혼란.
**개선 권장**: 상위 2개로 비교(`FETCH FIRST 2 ROWS ONLY`는 이/박 또는 이/최 2행, `FETCH FIRST 2 ROWS WITH TIES`는 이/박/최 3행)하면 차이가 명확. 또는 ROWS ONLY 결과는 "박·최 중 한 명(임의)"으로 표기.
**근거**: Oracle 12c+ 공식 문서, ANSI SQL 표준

### 4. [WARN] 챕터: 2-1-3 함수 — `END AS LEVEL` 별칭에 예약어 사용
**위치**: `2-1-3_함수.html` 235~239행
**현재 표기**: 
```sql
CASE WHEN SAL >= 5000 THEN '고급' ... END AS LEVEL
```
**문제**: `LEVEL`은 Oracle의 **계층형 질의 의사컬럼 키워드**(예약어)로, 별칭으로 사용하면 잠재적 충돌 우려. 실무·시험 모두 예약어를 별칭으로 쓰는 것은 권장되지 않음. 해당 시안과 연결된 2-2-6 계층형 질의 챕터에서 LEVEL의 의사컬럼 사용을 다루므로 학습자 혼동 가능.
**개선 권장**: `AS LV` 또는 `AS SAL_LEVEL`, `AS GRADE` 등 예약어 회피.
**근거**: Oracle Reserved Words 문서

### 5. [WARN] 챕터: exam-review.html (2-1-3 함수) — `LIKE '_김%'` 정답 표현 모호
**위치**: `exam-review.html` 854~855행
**현재 표기**: `✓ 정답 — 두 번째 글자가 '김'으로 시작`
**문제**: `_`는 정확히 한 글자, `%`는 0개 이상이므로 `'_김%'` 패턴의 의미는 "**두 번째 글자가 '김'**"임. "두 번째 글자가 '김'으로 시작"이라는 표현은 어색하며 잘못 읽힐 수 있음. '김'은 한 글자라 "시작"이라는 단어가 부적절.
**개선 권장**: `두 번째 글자가 '김'(첫 글자는 임의 1글자, 그 뒤는 임의 길이)`
**근거**: SQL LIKE 와일드카드 표준

### 6. [WARN] 챕터: 2-3-3 DDL — 테이블명 길이 "30바이트" 단일 표기
**위치**: `2-3-3_DDL.html` 150행
**현재 표기**: `길이 30바이트 이내 (Oracle 기준)`
**문제**: Oracle 12.2부터는 **128바이트**까지 허용으로 확장됨. 다만 SQLD 시험 표준 가이드는 여전히 "30바이트"로 다루므로 시험 대비로는 문제없음. 그러나 실무·최신 환경 정확성을 위해 보충 설명을 권장.
**개선 권장**: "Oracle 11g 이하 30바이트 / 12.2+ 128바이트 (SQLD 시험은 30바이트 기준)" 등으로 보충.
**근거**: Oracle Database SQL Language Reference (12.2+)

### 7. [WARN] 챕터: 2-1-7 조인 — Oracle (+) 외부조인 코멘트 모호
**위치**: `2-1-7_조인.html` 235행
**현재 표기**: `WHERE M.MEMBER_ID = O.MEMBER_ID(+);   -- (+)는 NULL 채워질 쪽`
**문제**: "(+)는 NULL 채워질 쪽"이라는 표현이 모호. 정확히는 "**(+)는 결손이 있는(매칭 안 되는 행이 있는) 쪽에 붙이며, NULL을 채워 넣어 그쪽 행을 보충**"하는 것. 학습자가 "NULL이 들어가는 쪽에 (+)를 붙인다"로 헷갈릴 수 있음. exam-review.html 1032·1047행은 "NULL 보충될 쪽" / "NULL을 채울 쪽(없을 수 있는 쪽)"으로 더 명확하게 적혀 있음.
**개선 권장**: `(+)는 매칭 안 될 때 NULL로 보충될 쪽(없을 수 있는 쪽)에 붙임` 같이 본문 챕터에서도 통일.
**근거**: Oracle SQL Language Reference

### 8. [WARN] 챕터: 2-2-8 정규표현식 — `\d \w \s` 메타문자 Oracle 호환성
**위치**: `2-2-8_정규표현식.html` 151~153행, 178행 등 다수
**현재 표기**: `\d{4}`, `REGEXP_SUBSTR(STR, '\d+')` 등 PCRE 단축 클래스 사용
**문제**: Oracle 정규식은 **POSIX 표준** 기반이라 `\d`, `\w`, `\s`(PCRE 단축 클래스)는 일부 버전에서만 작동. 표준적으로는 `[[:digit:]]`, `[[:alnum:]_]`, `[[:space:]]` POSIX 문자 클래스를 사용해야 안전. SQLD 시험 표 자체는 일반화된 정규식 메타문자를 다루지만 "Oracle 함수에서" 사용 시 호환성 차이를 명시하지 않음.
**개선 권장**: "Oracle은 POSIX 정규식 기반이며 `\d` 등 PCRE 단축 클래스는 일부 버전에서만 동작 — 호환성을 위해 `[0-9]`, `[[:digit:]]` 사용 권장" 보충.
**근거**: Oracle Database SQL Language Reference - REGEXP functions (POSIX 1003.2)

---

## 통과 항목 (검토 결과 큰 문제 없음)

### 1과목 (데이터 모델링)
- **1-1-1 데이터모델의이해** — 3단계(개념→논리→물리) 정확, 좋은 모델 6요소 표준
- **1-1-2 엔터티** — SQLD 표준 분류 정확
- **1-1-3 속성** — 파생/복합/단순 속성 분류 정확
- **1-1-4 관계** — M:N, 1:N, 식별/비식별, 4대 표기요소 정확
- **1-1-5 식별자** — 유·최·불·존(주식별자 4대 조건) 표준 표기 정확
- **1-2-1 정규화** — 1NF→2NF→3NF→BCNF 순서, 이상현상 3종 정확
- **1-2-2 관계와조인의이해** — 관계→FK→JOIN 흐름 정확
- **1-2-3 모델이표현하는트랜잭션의이해** — ACID 4특성 정확 (원자성/일관성/고립성/지속성)
- **1-2-4 NULL속성의이해** — IS NULL, 3-값 논리, NVL/NVL2/NULLIF/COALESCE 모두 정확. 집계함수의 NULL 처리(COUNT(*)만 NULL 포함, 나머지 무시) 정확. AVG = (NULL 제외 합)/(NULL 제외 개수) 정확.
- **1-2-5 본질식별자vs인조식별자** — 큰 문제 없음

### 2과목 - 2-1 (SQL 기본)
- **2-1-1 관계형데이터베이스개요** — DDL/DML/DCL/TCL 분류, TRUNCATE는 DDL/DELETE는 DML 정확
- **2-1-2 SELECT문** — 작성순서 vs 실행순서(FWGHSO) 정확, DUAL 설명 정확
- **2-1-3 함수** — 문자/숫자/날짜/변환/NULL 함수 시그니처 정확 (SUBSTR, LENGTH, ROUND, MOD, NVL2 등 결과값 정확)
- **2-1-4 WHERE절** — 비교/논리/SQL 연산자, BETWEEN 양 끝 포함, LIKE `_`/`%` 정확
- **2-1-5 GROUPBY_HAVING절** — 실행순서, WHERE vs HAVING, AVG 평균 계산 정확
- **2-1-6 ORDERBY절** — Oracle ASC=NULL 마지막 / MS-SQL ASC=NULL 처음 정확, NULLS FIRST/LAST 정확
- **2-1-7 조인** — INNER/OUTER/CROSS, EQUI/Non-EQUI/SELF 분류 정확. 5종 결과 행수 비교 정확. (Oracle (+) 코멘트 표현은 WARN 처리)
- **2-1-8 표준조인** — INNER/LEFT/RIGHT/FULL/CROSS/NATURAL/USING 정확, OUTER JOIN의 ON vs WHERE 차이 정확

### 2과목 - 2-2 (SQL 활용)
- **2-2-1 서브쿼리** — 단일행/다중행/다중컬럼, 스칼라/인라인뷰/중첩, 비연관/연관 분류 정확. ANY/ALL 의미(ANY=최소, ALL=최대) 정확. 평균 4125 계산 정확.
- **2-2-2 집합연산자** — UNION/UNION ALL/INTERSECT/MINUS(EXCEPT) 정확, 4가지 사용 조건 정확
- **2-2-3 그룹함수** — ROLLUP/CUBE/GROUPING SETS 동작 정확, GROUPING 함수 정확. (단 102행 단계 표기는 ERROR로 분리)
- **2-2-4 윈도우함수** — RANK(1,1,3) / DENSE_RANK(1,1,2) / ROW_NUMBER 정확, PARTITION BY/ORDER BY/ROWS BETWEEN 정확, LAG/LEAD 기본 오프셋 1 정확
- **2-2-5 TopN쿼리** — ROWNUM 함정(정렬 전 매겨짐), FETCH FIRST/TOP/ROW_NUMBER + PARTITION BY 정확. (단 ROWS ONLY vs WITH TIES 예시는 WARN으로 분리)
- **2-2-6 계층형질의와셀프조인** — START WITH / CONNECT BY PRIOR / LEVEL / ORDER SIBLINGS BY / SYS_CONNECT_BY_PATH 정확
- **2-2-7 PIVOT_UNPIVOT절** — PIVOT(세로→가로, 집계 필수), UNPIVOT(가로→세로, NULL 기본 제외) 정확
- **2-2-8 정규표현식** — REGEXP_LIKE/REPLACE/SUBSTR/INSTR/COUNT 시그니처 정확, 메타문자 정의 정확. (단 Oracle PCRE/POSIX 호환성은 WARN으로 분리)

### 2과목 - 2-3 (관리 구문)
- **2-3-1 DML** — INSERT/UPDATE/DELETE/MERGE/SELECT 정확, MERGE의 WHEN MATCHED / WHEN NOT MATCHED 정확
- **2-3-2 TCL** — COMMIT/ROLLBACK/SAVEPOINT 정확, ROLLBACK TO SP 부분 취소 정확
- **2-3-3 DDL** — CREATE/ALTER/DROP/TRUNCATE/RENAME 정확, PK vs UNIQUE(NULL 허용 차이), FK ON DELETE CASCADE/SET NULL 정확. (단 30바이트 표기는 WARN)
- **2-3-4 DCL** — GRANT/REVOKE, 시스템권한(WITH ADMIN OPTION) vs 객체권한(WITH GRANT OPTION) 정확

---

## 권장 우선순위

학습자 혼동을 가장 크게 일으키는 순서:

1. **ERROR #1 (그룹함수 ROLLUP 단계)** — "4단계" 표기를 본 학습자가 본문의 "N+1=3단계"와 충돌하여 헷갈릴 가능성 큼. **즉시 수정 권장**.
2. **ERROR #2 (NULL=NULL → FALSE)** — 시험 직전 정리 페이지에서 잘못된 단답을 외울 위험. exam-review.html은 시험 대비 마지막 페이지라 영향이 큼. **즉시 수정 권장**.
3. **WARN #4 (`AS LEVEL` 예약어)** — 실제 실행 시 에러 가능성도 있어 교정 필요.
4. **WARN #3 (TopN 예시)** — 학습 효과 측면에서 개선 권장.
5. 나머지 WARN은 표현 보완 수준.
