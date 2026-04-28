# Feat 인계 — entity-diagram 컴포넌트의 preText 렌더 추가

작성일: 2026-04-28
작성자: 콘텐츠/QA 채팅
대상: 기능 개발 채팅
관련 PR: #98 (콘텐츠 entityName 라벨 수정)

## 한 줄 요약

`RefEntityDiagram` 컴포넌트가 `preText` 필드를 무시해 두 엔터티 관계도(예: `[ 출판사 ] ||-----∈ [ 도서 ]`)가 화면에 표시되지 않는 문제. 데이터에는 이미 채워져 있으니 컴포넌트만 살리면 됨.

---

## 배경

ERD 해석 문제(round-58 #4 등)는 두 개 이상의 엔터티 관계를 묻는데, 화면에는 한쪽 엔터티 박스 + 인스턴스 표만 표시되고 두 엔터티 사이의 관계 표기(`||-----∈`, `─|─ ─ ─o<` 등)가 누락됨.

PR #98에서 데이터 측의 `entityName` 라벨 오류는 수정했지만, 관계 정보는 여전히 화면에 안 보임. 학습자 입장에서 "필수/선택", "1:N" 같은 관계 정보가 옵션을 풀이하는 핵심 단서인데 그게 사라져 있음.

---

## 현재 상태

### 데이터 스키마 (이미 채워져 있음)

`src/components/QuestionReferences.tsx` line 23
```typescript
| { type: 'entity-diagram'; entityName: string; preText: string; headers: string[]; rows: string[][] };
```

`preText`는 두 엔터티 관계 ASCII로, 작성자 데이터에 4건 모두 채워져 있음.

### 데이터 예시 (4건 전수)

| round | # | preText 값 |
|-------|---|------------|
| 45 | 3 | `  엔터티\n    ↓\n  [ 고객 ]\n    └── 속성: (고객번호) (고객이름) (고객아이디)` |
| 48 | 6 | `[ 부서 ] … [ 사원 ] … [ 교육이력 ]` (다중 엔터티 ASCII 박스, 매우 김) |
| 58 | 4 | `[ 출판사 ] ||-----∈ [ 도서 ]\n  (1)             (0..N)` |
| 58 | 9 | `[ 학생 ] ─|─ ─ ─o∈ [ 수강 ] ∋─ ─ ─o|─ [ 과목 ]` |

### 컴포넌트 현황 — `RefEntityDiagram` (line 147~)

```tsx
function RefEntityDiagram({ entityName, headers, rows }: any) {
  // preText를 destructure하지 않음 → 무시됨
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', ... }}>
      {/* 왼쪽: 엔터티 라벨 + 박스 */}
      ...
      {/* 중앙: 속성 라벨 + 표 */}
      ...
      {/* 오른쪽: 인스턴스 화살표 */}
      ...
    </div>
  );
}
```

`switch (r.type) case 'entity-diagram'` (line 300)에서 `{...r}` spread로 넘기고 있어 `preText`도 함께 전달은 됨. 컴포넌트 내부에서 받지 않을 뿐.

---

## 제안 변경

### A안 (권장) — 컴포넌트 상단에 preText 영역 추가

3-칸 그리드 레이아웃 위에 `<pre>` 블록을 한 줄 추가. 구조 변경 없음.

```tsx
function RefEntityDiagram({ entityName, preText, headers, rows }: any) {
  return (
    <div style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 12,
      overflowX: 'auto',
      padding: 0,
    }}>
      {preText && (
        <pre style={{
          margin: 0,
          padding: '14px 18px',
          fontFamily: 'var(--font-mono)',
          fontSize: 13,
          lineHeight: 1.55,
          color: 'var(--fg-2)',
          background: 'var(--bg-surface)',
          borderBottom: '1px solid var(--border-subtle)',
          whiteSpace: 'pre',           // 줄바꿈 보존
          overflowX: 'auto',
        }}>{preText}</pre>
      )}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
        gap: 20,
        alignItems: 'center',
        padding: '18px 12px',
      }}>
        {/* 기존 좌(엔터티 박스)·중(속성·표)·우(인스턴스 화살표) 3칸은 그대로 */}
        ...
      </div>
    </div>
  );
}
```

**장점**: 변경 최소. 기존 데이터 4건 모두 자연스럽게 표시. 관계도가 표 위 별도 영역으로 분리되어 시각적 우선순위 명확.

**고려사항**: round-48 #6의 preText는 다중 박스 ASCII로 매우 김 → `overflowX: auto` 로 가로 스크롤 처리. 모바일 가독성은 모노스페이스 폰트 + 가로 스크롤로 충분.

### B안 — 좌측 엔터티 박스 위에 합치기

엔터티 박스 위에 작은 텍스트로 관계 표기. preText가 짧을 때만 적합. round-48 #6처럼 다중 박스가 있는 케이스는 깨짐.

→ **B안 비추천**.

---

## 영향 범위

| 항목 | 변경 |
|---|---|
| `src/components/QuestionReferences.tsx` | `RefEntityDiagram` props에 `preText` 추가, `<pre>` 블록 1개 삽입 |
| 데이터 파일 | 변경 없음 (이미 4건 모두 채워져 있음) |
| 다른 컴포넌트 | 영향 없음 |
| 타입 정의 | 변경 없음 (line 23에 이미 `preText: string` 정의됨) |

---

## 디자인 고려사항

- **모노스페이스 폰트**: 양파단 토큰 `var(--font-mono)` 사용 (이미 `RefAscii`, `RefSql`에서 사용 중)
- **배경 색**: `var(--bg-surface)` (`bg-card`보다 살짝 어두운 톤)으로 표 영역과 구분
- **다크 모드**: 토큰 사용으로 자동 대응
- **가로 스크롤**: `overflowX: auto` — round-48 #6 같은 긴 ASCII 대응
- **줄바꿈 보존**: `whiteSpace: 'pre'` (또는 `pre-wrap`) — 데이터의 `\n`이 살아남
- **정렬**: 좌측 정렬 (가운데 정렬은 ASCII art 의도가 깨짐)

---

## 테스트 계획

### 회귀 테스트 — 4건 모두 정상 표시 확인

| round | # | 기대 결과 |
|-------|---|-----------|
| 45 | 3 | preText에 "엔터티 ↓ [ 고객 ]" 안내 텍스트 표시 |
| 48 | 6 | preText에 다중 엔터티 ASCII 박스(부서·사원·교육이력·구매신청) 표시. 가로 스크롤 발생 가능 |
| 58 | 4 | preText에 `[ 출판사 ] ||-----∈ [ 도서 ]` + `(1)·(0..N)` 표시 |
| 58 | 9 | preText에 `[ 학생 ] ─|─ ─ ─o∈ [ 수강 ] ∋─ ─ ─o|─ [ 과목 ]` 표시 |

### 시각 회귀

- 라이트/다크 모드 모두 가독성 확인
- 모바일(375px) 가로 스크롤 동작 확인
- preText 미존재 시 (`preText: undefined`) 컴포넌트 깨지지 않는지 — 조건부 렌더 (`{preText && ...}`) 보장

### 다른 ref 타입 회귀 (영향 없음 확인)

- `type: 'ascii'`, `type: 'sql'`, `type: 'table'` 등 기존 렌더링 무변화

---

## 우선순위 / 난이도

- **우선순위**: 중 (학습자 풀이 정확성에 영향. 옵션이 ERD 관계 정보를 전제로 하는데 그게 화면에 없으면 풀이 단서 누락)
- **난이도**: 낮음 (컴포넌트 1개 파일, 약 20줄 추가)
- **예상 작업 시간**: 30분 (구현 15분 + 회귀 검증 15분)

---

## 참고

- 콘텐츠 측 라벨 수정 PR: #98
- 같은 류 콘텐츠 위생 PR 시리즈: #74 (raw HTML 제거), #76 (옵션 텍스트 오타)
- 컴포넌트 위치: [`src/components/QuestionReferences.tsx`](../../src/components/QuestionReferences.tsx) line 147
