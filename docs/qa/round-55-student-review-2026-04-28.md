# Round 55 학생 입장 검수 — 2026-04-28

50문항 학생 시점 풀이 검토.

## 결과

| 결과 | 건수 |
|---|---|
| ❌ 수정 | **3건** (#20, #21, #33) |
| ⚠ 의문 (보고만) | 1건 (#48) |
| ✅ 정상 | 46건 |

## 수정

### #20 OUTER JOIN 행 수 — 옵션 균형

기존 옵션 ①·②·④에는 모두 "—" 뒤에 풀이가 부착되어 있는데 정답 ③에만 풀이 없음. 학생이 "풀이가 없는 옵션 = 가장 단정적이라 정답"이라는 텍스트 풍부도 패턴으로 추측 가능.

```diff
  options:
-   "LEFT 3, FULL 3, RIGHT 3 — 매칭된 1 건만 모든 조인에서 반환된다.",
-   "LEFT 5, FULL 5, RIGHT 5 — 모든 조인에서 양쪽 행이 모두 반환된다.",
-   "LEFT 3, FULL 5, RIGHT 3",
-   "LEFT 3, FULL 5, RIGHT 4 — RIGHT 결과는 매칭 1 건 + T2 미매칭 3 건이다."
+   "LEFT 3, FULL 3, RIGHT 3",
+   "LEFT 5, FULL 5, RIGHT 5",
+   "LEFT 3, FULL 5, RIGHT 3",
+   "LEFT 3, FULL 5, RIGHT 4"
```

### #21 4-테이블 JOIN — caption 정확성

데이터가 T1~T4 4개 테이블의 ID 값 정보인데 caption이 `"T1 테이블"`로 잘못 표기.

```diff
- "caption": "T1 테이블"
+ "caption": "테이블별 ID 값"
```

### #33 UNION 별칭 — 풀이 단서 caption

결과 표 caption에 정답 풀이가 직접 적혀있어 학생이 SQL 분석 안 해도 답 도출.

```diff
- "caption": "결과 (컬럼명은 첫 SELECT 의 별칭 사용)"
- "headers": ["AAB", "BBA"]
+ "caption": "결과 (UNION ALL 후)"
+ "headers": ["?", "?"]
```

헤더도 정답인 "AAB, BBA"를 직접 노출하던 부분을 `["?", "?"]`로 변경 → 학생이 SQL의 첫 SELECT 별칭을 분석해 답 도출.

## ⚠ 의문 (수정 X)

### #48 무결성 위배

정답 ① "도서관 테이블에 (2, '미존재 회원ID') 삽입 → 참조 무결성 위배"가 **옳지 않다**고 하려면, 회원ID가 외래키가 아니라는 컨텍스트가 필요. 하지만 일반적으로 도서관-회원 관계에서 회원ID는 외래키일 확률이 높아 ①이 옳은 설명이 됨.

원본 출제 의도(어떤 테이블 구조 가정했는지) 불명확 → 보고만.

## 검증

- node scripts/build-quiz-bank.mjs — 851문항 재생성
- node scripts/validate-rounds.mjs — Errors: 0
