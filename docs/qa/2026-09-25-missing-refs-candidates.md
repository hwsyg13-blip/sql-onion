# 지문 누락 후보 목록 (자동 추출) — 2026-09-25

1차 조건(2과목 · 제목이 SQL/결과/실행/출력/건수/행을 묻는데 표·SQL 지문이 없음) **92건** 중, 보기가 구체적 결과값(숫자·NULL·공집합 등)인 **15건**만 아래에 추렸습니다. 나머지는 정의·개념형이라 데이터가 필요 없습니다.
**누락이 확정된 것이 아닙니다.** 함수 호출 자체가 지문인 문항(예: `ROUND(3.45, 1)`)은 정상이며, 사람이 판정해야 합니다.
재현: `python scripts/audit/profile-structure.py .`

| 회차 | 번호 | 제목 | 정답 |
|---|---|---|---|
| 45 | 32 | 아래 네 SQL 중 반환 행 수가 1건이 아닌 것은? (테이블 T 에는 충분한 행이 존재한다고 가정) | SELECT * FROM T WHERE ROWNUM <= 2; |
| 46 | 32 | 사원 5행과 부서 3행을 CROSS JOIN한 결과의 행 수는? | 15 |
| 47 | 24 | 1~100 데이터에서 10~50 범위를 조회하는 SQL 로 적절한 것은? | WHERE COL BETWEEN 10 AND 50 |
| 47 | 40 | 아래 네 SQL 중 결과가 나머지와 다른 것은? | RTRIM('EBCDE', 'E') |
| 48 | 36 | 두 SELECT 결과를 결합할 때 UNION 결과보다 UNION ALL 결과 행 수가 더 많은 경우의 (UNION 행 수, U | UNION 9, UNION ALL 10 |
| 49 | 37 | 아래 네 SQL 중 결과가 다른 것은? | SELECT DISTINCT COUNT(*) FROM T; |
| 50 | 30 | 아래 LAG·LEAD 함수 결과 중 나머지와 다른 것은? | LAG(VAL, 1) OVER(ORDER BY ID DESC) |
| 50 | 47 | ROUND(3.45, 1) 의 결과는? | 3.5 |
| 51 | 13 | Oracle ORDER BY 절에서 NULL 값이 가장 마지막에 출력되도록 하는 옵션은? | NULLS LAST 옵션을 사용 |
| 52 | 47 | YYYYMMDDHH24MISS 포맷에 해당하는 결과는? | 연/월/일/시/분/초 14자리 숫자 문자열 |
| 54 | 36 | 행이 2건인 테이블에 대해 결과가 나머지와 다른 SQL 은? | SELECT * FROM T WHERE ROWNUM = 2; |
| 56 | 14 | 다음 WHERE 조건 중 결과가 나머지와 다른 것은? | COL3 >= 200 AND COL4 <= 200 |
| 58 | 46 | 아래 네 개의 NULL 관련 함수 호출 중 결과가 NULL 이 아닌 것은? | NVL(NULL, 0) |
| 60 | 41 | 아래 SQL 들 중 결과가 나머지와 다른 하나는? | SELECT * FROM DUAL WHERE 1 > NULL; |
| 62 | 32 | A INTERSECT B의 결과가 1행이고, 테이블 C가 3행(NULL 포함)일 때, (A INTERSECT B) UNION  | 4 |
