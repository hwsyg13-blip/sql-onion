# 이론 30개 챕터 — 시험 포인트 보강 (2026-09-22)

## 배경

이론 본문이 개념 설명 위주라 "실제 시험에서 이 챕터가 어떻게 나오는지"가 빠져 있었다. 디자인 시스템에는 `sec-exam`(시험 포인트)과 `trap-grid`(함정) 스타일이 정의되어 있었으나 **30개 챕터 중 단 한 곳도 사용하지 않고** 있었다.

## 추가 내용

SQLD 출제 기준(1과목 데이터 모델링 10문항 / 2과목 SQL 기본·활용 40문항)의 챕터 구성을 그대로 따르되, 각 챕터 끝에 세 블록을 MECE 하게 추가했다.

| 블록 | 내용 |
|---|---|
| **시험 포인트** 표 | 출제 포인트 5~6개와 각각이 "시험에서 묻는 방식" |
| **자주 틀리는 함정** | 함정 진술 ↔ 바로잡기 2쌍. 실제 오답 패턴 기반 |
| **30초 정리** | 시험 직전 훑는 3장 카드 |

### 1과목 (10챕터)
데이터모델의 이해 · 엔터티 · 속성 · 관계 · 식별자 · 정규화 · 관계와 조인의 이해 · 모델이 표현하는 트랜잭션 · NULL 속성의 이해 · 본질식별자 vs 인조식별자

### 2과목 (20챕터)
관계형 DB 개요 · SELECT · 함수 · WHERE · GROUP BY/HAVING · ORDER BY · 조인 · 표준 조인 · 서브쿼리 · 집합 연산자 · 그룹 함수 · 윈도우 함수 · Top N · 계층형 질의 · PIVOT/UNPIVOT · 정규표현식 · DML · TCL · DDL · DCL

## 함정 선정 근거

CS 시트 제보와 기출 오답 패턴에서 반복 확인된 오개념을 우선 담았다.

- `ROWNUM = 2` 가 항상 0건인 이유 (Top N)
- `NOT IN` 서브쿼리에 NULL 이 있으면 공집합 (NULL / 서브쿼리)
- WHERE 는 집계 함수 사용 불가, HAVING 과의 경계 (GROUP BY)
- LEFT OUTER JOIN 뒤 WHERE 에 우측 조건 → 사실상 INNER JOIN (조인)
- CTAS 는 타입·NOT NULL 만 상속, PK·FK 는 상속 안 됨 (DDL)
- TRUNCATE 는 DDL 이라 롤백 불가, DDL 의 묵시적 커밋 (TCL)
- ERD 는 존재·행위 관계를 구분하지 않음, IE 와 Barker 의 실선·점선 의미 차이 (관계)
- 3정규화는 **일반 속성 간** 이행 종속 제거 (정규화)
- RANK 와 DENSE_RANK 의 다음 순위 차이, ROWS 와 RANGE 의 누적합 차이 (윈도우 함수)

## 부수 수정 — OX 퀴즈의 HTML 태그 노출

이론 사이드바 OX 퀴즈 데이터에 `<code>`·`<strong>` 태그 **202개**가 들어 있었는데, `MiniTestSidebar` 가 `cur.q` 를 그대로 출력해 화면에 `<code>WHERE COL = NULL</code>` 처럼 태그가 글자로 보였다.

- `src/data/miniTest/ox.ts` — HTML 태그를 마크다운 표기로 변환 (202 → 0)
- `src/components/MiniTestSidebar.tsx` — OX 문항도 `renderInlineMd` 로 렌더

## 검증

- 30/30 챕터에 시험 포인트·함정·30초 정리 반영 확인
- `theoryHtml.ts` 554KB → 627KB
- `npm run build` 성공
- 로컬 화면에서 c224(윈도우 함수)·c124(NULL) 렌더링 확인, 페이지 내 원시 태그 0건
