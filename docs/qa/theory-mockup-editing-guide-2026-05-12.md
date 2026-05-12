# 이론 mockup HTML 텍스트 편집 가이드

작성: 2026-05-12 · 대상: `Projects/SQLD 이론/_mockups/*.html` 30개 파일 · 목적: 시각 요소(step-flow 카드·trait-grid·three-layer 등) 보존하고 본문 텍스트만 user 본인 voice 로 재작성

---

## 0. 워크플로우 (한 번만 세팅)

**터미널 2개 + 편집기 1개 + 브라우저 1개**:

```
터미널 1:  npm run dev              ← 사이트
터미널 2:  npm run watch:theory     ← markdown/HTML 변경 감지 + 자동 재빌드

편집기:    Projects/SQLD 이론/_mockups/1-1-1_데이터모델의이해.html
브라우저:  http://localhost:5173/   → 이론 → 데이터 모델의 이해
```

저장(Ctrl+S)하면 1~2초 뒤 브라우저 자동 새로고침. 결과 즉시 확인.

---

## 1. 무엇을 편집해도 OK / NO

### ✅ OK — 자유롭게 편집

**태그 사이의 텍스트만**:

```html
<p class="reveal">여기 텍스트를 자유롭게 바꾸세요.</p>
                  ^^^^^^^^^^^^^^^^^^^^^^^^^
                  이 부분만 본인 글로 교체
```

```html
<div class="ex-box reveal">
  회원·상품·주문 같은 정보를 어떻게 저장하고 연결할지...
  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  이 부분도 텍스트 자유 변경
</div>
```

```html
<th>단계</th>      ← 표 헤더 텍스트
<td>김철수</td>    ← 표 셀 텍스트
<h2 class="reveal">데이터 모델링의 3가지 관점</h2>  ← 제목 텍스트
<h3 class="reveal">1단계 — 개념적 모델 (큰 그림)</h3>
```

→ 모든 한글/숫자/공백/일반 문자는 자유.

### ❌ NO — 건드리면 깨짐

**태그 자체, 클래스 이름, 속성**:

```html
<p class="reveal">...</p>
^  ^^^^^^^^^^^^^^   ^^
태그(<p>) · 속성(class="reveal") · 닫는 태그(</p>) 건드리지 말 것
```

```html
<div class="step-flow cols-4 reveal">  ← class 이름·구조 유지
<div class="step-card">                ← 절대 변경 X
  <div class="step">STEP 1</div>       ← "STEP 1" 텍스트도 가급적 그대로
  <div class="name">개념적 모델 ...</div>   ← 단, .name 내부는 변경 OK
  <div class="ex">핵심 엔터티·관계 ERD ...</div>  ← .ex 내부도 변경 OK
</div>
```

→ `class="..."`, `<div>`, `<p>`, `<span>`, `<h1>` ~ `<h4>`, `<table>`, `<tr>`, `<td>`, `<a href="...">` 등 **태그·속성·닫는 태그는 그대로**.

---

## 2. 자주 만나는 시각 컴포넌트

### step-flow (단계 카드 4개) — c111 등

```html
<div class="step-flow cols-4 reveal">
  <div class="step-card">
    <div class="step">STEP 1</div>           ← STEP 라벨 (그대로 두는 게 좋음)
    <div class="name">개념적 모델 <small>큰 그림</small></div>
    <div class="ex">핵심 엔터티·관계 ERD. 속성·자료형은 아직 안 본다.</div>
    <div class="arrow-next">›</div>          ← 화살표 (마지막 카드는 없음)
  </div>
  ...
</div>
```

**편집 가능**: `.name` 텍스트, `<small>` 텍스트, `.ex` 텍스트.

### ex-box (강조 인용 박스)

```html
<div class="ex-box reveal">
  여기 본문 텍스트만 자유롭게 편집. 링크도 OK:
  <a href="./1-1-2_엔터티.html">엔터티</a>
</div>
```

### trait-grid (6개 특징 그리드) — c111 좋은 모델 6대 특징

```html
<div class="trait-card">
  <div class="num">1</div>                   ← 번호
  <div class="label">완전성</div>            ← 라벨 (한 단어)
  <div class="desc">업무에 필요한 데이터를 빠짐없이 담았는가</div>  ← 설명
</div>
```

**편집 가능**: `.label`, `.desc` 텍스트. `.num` 도 OK.

### three-layer (3층 스키마 다이어그램) — c111

```html
<div class="tl-row outer">
  <span class="tl-tag">EXTERNAL</span>       ← 영문 라벨 (그대로)
  <span class="tl-name">외부 스키마 — 각 사용자/앱이 보는 화면</span>
  <div class="tl-desc">여러 개 · 사용자·개발자 · ...</div>
</div>
<div class="indep-line">↑ <strong>논리적 독립성</strong> — 개념 스키마가 ...</div>
```

**편집 가능**: `.tl-name` 텍스트, `.tl-desc` 텍스트, `.indep-line` 안 텍스트.

### table (표)

```html
<table class="reveal">
  <thead><tr><th>단계</th><th>이름</th><th>결과물</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>개념적 모델링</td><td>핵심 엔터티·관계 ERD</td></tr>
    <tr><td>2</td><td>논리적 모델링</td><td>속성·키 상세 ERD</td></tr>
  </tbody>
</table>
```

**편집 가능**: `<th>`, `<td>` 안 텍스트. **행 추가/삭제도 OK** — `<tr>...</tr>` 통째로 복사하거나 지우면 됨.

### blockquote (인용)

```html
<blockquote class="reveal">
  데이터 모델이란 현실의 정보를 <strong>설계 도면</strong>이다.
</blockquote>
```

`<strong>`, `<em>`, `<a>` 같은 인라인 태그는 텍스트 중간에 자유롭게 써도 됨.

---

## 3. 가장 흔한 실수 — 미리 알기

### 실수 1: 닫는 태그 빼먹기
```html
<p class="reveal">새로 쓴 문장
                              ← </p> 빼먹음 → 페이지 깨짐
```

**대응**: 저장 후 브라우저에서 결과 확인. 깨졌으면 닫는 태그 확인.

### 실수 2: 인용부호 깨짐
```html
<a href="./1-2-1_정규화.html">정규화</a>
        ^^^^^^^^^^^^^^^^^^^^   ← 큰따옴표 유지
```

따옴표 `"..."` 안의 내용은 링크 경로 같은 거라 건드리지 말 것.

### 실수 3: 챕터 링크 경로 바꾸기
```html
<a href="./1-1-2_엔터티.html">엔터티</a>
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^   ← 경로 그대로
                                  ↑↑↑↑ 표시 텍스트만 자유
```

링크 표시는 바꿔도 OK, 경로(`href="..."`)는 그대로.

### 실수 4: 한글 따옴표 vs 영어 따옴표
```html
<a href=“./1-1-2.html”>  ← 한글 따옴표 “ ” 안 됨
<a href="./1-1-2.html">  ← 영어 따옴표 " " OK
```

에디터가 자동 변환하면 영어로 되돌려야 함.

---

## 4. 챕터 끝의 시험 대비 안내 카드 — 무시

각 mockup HTML 끝에는 이런 카드가 있는데 사이트에 안 보임 (빌드 시 자동 제거):

```html
<div class="reveal" style="margin: 40px 0 0; padding: 22px 24px; ...">
  <div>... 이 챕터의 함정·정답과 30초 정리는 ...</div>
  <a href="./exam-review.html#ch-1-1-1" ...>시험 대비 보기 →</a>
</div>
```

→ **건드릴 필요 없음**.

---

## 5. AdSense 친화 — 텍스트 작성 원칙 (간단 버전)

1. **운영자 voice 1+**: "이 사이트 학습자의 정답률은 ~", "여기서 학습자가 자주 막히는 건 ~"
2. **1인칭 시험 후기 금지**: "내가 시험 봤을 때" 같은 fabrication X (운영자가 SQLD 안 봤음)
3. **자연 연결어**: 그런데 / 사실 / 하지만 / 다만 등 단락당 1+
4. **시험 출제 cross-ref**: "제N회 M번에 비슷한 함정이 나왔다" 같은 식 (사실인 경우만)
5. **각 표·도식 앞뒤에 1~3줄 prose**: 표만 두지 말고 짧은 설명 둘러주기

전체 가이드: `docs/qa/theory-tone-guide-2026-05-03.md` 참고.

---

## 6. 깨진 거 같으면

- 브라우저에서 페이지가 빈 화면 / 일부 잘림 → HTML 구조 깨졌을 가능성
- 터미널의 watch-theory 로그에 에러 있는지 확인
- 최후 수단: `git diff Projects/SQLD\ 이론/_mockups/1-1-1_데이터모델의이해.html` 로 변경 사항 보고 의심 부분 확인 (단 이 파일은 git 추적 외라 diff 안 됨 — 백업 권장)

→ **편집 전 백업**: 원본 파일을 `1-1-1_데이터모델의이해.html.bak` 으로 복사해두면 안전.

```bash
cd "Projects/SQLD 이론/_mockups/"
cp 1-1-1_데이터모델의이해.html 1-1-1_데이터모델의이해.html.bak
```

작업 끝나고 만족하면 백업 삭제.
