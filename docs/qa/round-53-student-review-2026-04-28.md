# Round 53 학생 입장 검수 — 2026-04-28

50문항 학생 시점 풀이 검토.

## 결과

| 결과 | 건수 |
|---|---|
| ❌ 정답/풀이 노출 | **3건** (#33, #39, #50) |
| 🔧 의문 → 수정 | **1건** (#37) |
| ✅ 정상 | 46건 |

## 수정 내용

### #33 SQL 오류 분류 — references 정답 노출

기존 4개 SQL 의 caption 에 옵션의 분류 평가가 직접 적힘 — 학생이 caption만 봐도 어느 옵션이 옳은지/잘못인지 파악 가능. 추가 text "참고: GROUP BY 가 적용된... ORDER BY에 집계 함수 사용 가능"은 정답(라/④)을 향한 직접 단서.

```diff
- "caption": "가. 보기 ① 분류: SELECT 서브쿼리 + 집계 함수 사용으로 인한 오류 (분류 자체가 부적절)"
+ "caption": "가"
- "caption": "나. 보기 ② 분류: 집계 함수 오류가 아니고 '=' 연산자 때문 (실제로는 다중 행 서브쿼리 + '=' 의 ORA-01427)"
+ "caption": "나"
- "caption": "다. 보기 ③ 분류: GROUP BY 에서 집계 함수 사용 (실제로는 WHERE 절에 집계 함수 사용 오류)"
+ "caption": "다"
- "caption": "라. 보기 ④ 분류: ORDER BY 에서 집계 함수 사용으로 오류"
+ "caption": "라"
- text "참고: GROUP BY가 적용된... ORDER BY에 집계 함수 사용이 가능하다..."
+ (text 제거)
```

### #39 REGEXP_SUBSTR aabbc — "원본 PDF 표기" 메모 제거

학습 화면에 출제 메모(`원본 PDF 표기: '문제 39. REGEXP_SUBSTR 다른 문제'`)가 그대로 노출. references text 제거. (원본 SQL이 유실된 케이스로 explanation 에만 명시)

### #50 SAVEPOINT/COMMIT/ROLLBACK — 중대 정답 노출

가장 심각한 케이스:

1. **SQL 주석에 풀이 단계 노출**:
   - `COMMIT; -- 5건 확정 + SAVEPOINT SQL1 폐기`
   - `ROLLBACK TO SAVEPOINT SQL1; -- SAVEPOINT 가 없으므로 오류`
   학생이 SQL 분석 안 해도 풀이 흐름이 그대로 보임.

2. **결과 표 직접 노출**:
   - caption "최종 TABLE50 상태" + 1~6 6행 → 정답 ③ "6"이 표로 그대로 표시

수정:
- 초기 상태 `(empty)` 표 → text "TABLE50 은 비어 있는 상태에서 시작한다."
- SQL 주석 풀이 제거
- 최종 결과 표 제거
- SQL을 `SELECT COUNT(*) FROM TABLE50;`로 다듬음 (정답 형식이 "건수"임을 명확화)

### #37 UNPIVOT 열 순서 — 옵션 표현 모호

기존 옵션 ① "행 배치는 동일하다" 표현이 모호 (행의 데이터인지 출력 순서인지 불명확).

```diff
- "AMOUNT3, AMOUNT2, AMOUNT1 순으로 UNPIVOT 해도 행 배치는 동일하다."
+ "AMOUNT3, AMOUNT2, AMOUNT1 순으로 UNPIVOT 해도 결과 행 자체(컬럼-값 매핑)는 동일하고 출력 순서만 바뀐다."
```

explanation 도 "컬럼-값 매핑" 명확화.

## 검증

- node scripts/build-quiz-bank.mjs — 851문항 재생성
- node scripts/validate-rounds.mjs — Errors: 0
