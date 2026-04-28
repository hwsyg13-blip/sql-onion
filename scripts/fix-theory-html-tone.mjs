// PR #70 후속 — _mockups/*.html 의 AI-톤 인트로/제목 정리.
//
// 적용 규칙 (PR #70 와 동일):
//   1) 긴 서술 제목 '한 비즈니스가 데이터베이스가 되기까지' → '모델링 흐름'
//   2) "직접 본다/살펴본다" 책설명 톤 인트로 일괄 정리 (1-1-1 부제 한 곳)
//   3) "비교한다." → "비교." (마지막 동사 어간 종결, 마침표 정리)
//   4) "어떻게 ~지" 거추장 표현 → "~는 양상" 등 자연 명사구
//
// 실행: node scripts/fix-theory-html-tone.mjs
// (mockups 디렉토리는 git 저장소 밖 — 변경 분이 직접 추적되지 않음.
//  최종 산출물은 build-theory-html.mjs 가 만드는 src/data/theoryHtml.ts.)

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'C:/Users/hwsyg/OneDrive/문서/Claude/Projects/SQLD 이론/_mockups';

const replacements = [
  // 1) 1-1-1 헤딩
  {
    from: /<span class="label-rest">한 비즈니스가 데이터베이스가 되기까지<\/span>/g,
    to: '<span class="label-rest">모델링 흐름</span>',
  },
  // 2) 1-1-1 부제 — '직접 본다' 책설명 톤 → 짧은 명사구
  {
    from: /같은 쇼핑몰 사례가 단계별로 어떻게 구체화되는지 직접 본다\./g,
    to: '개념 → 논리 → 물리 → DB, 4단계로 점점 구체화.',
  },
  // 3) "어떻게 ~지" 패턴 단순화 (3-1)
  {
    from: /결과가 어떻게 달라지는지 비교한다\./g,
    to: '결과가 달라지는 양상 비교.',
  },
  // 3-2
  {
    from: /결과가 어떻게 갈라지는지 비교한다\./g,
    to: '결과가 갈라지는 양상 비교.',
  },
  // 3-3
  {
    from: /결과 행이 어떻게 늘었다 줄었다 하는지 비교한다\./g,
    to: '결과 행이 늘고 줄고 하는 양상 비교.',
  },
  // 3-4
  {
    from: /결과 행 수가 어떻게 달라지는지 비교한다\./g,
    to: '결과 행 수가 달라지는 양상 비교.',
  },
  // 3-5 (Top N WITH TIES)
  {
    from: /가 어떻게 갈라지는지 비교한다\./g,
    to: '의 분기 양상 비교.',
  },
  // 3-6 (계층형 셀프조인)
  {
    from: /상황을 비교한다\./g,
    to: '상황 비교.',
  },
  // 4) 일반 "비교한다." → "비교." (마지막 동사 어간 종결)
  // 위에서 처리되지 않은 모든 잔여 케이스
  {
    from: /를 비교한다\./g,
    to: '를 비교.',
  },
  {
    from: /을 비교한다\./g,
    to: '을 비교.',
  },
  // 추가: 다른 종결 패턴
  // "행이 달라지는지 비교한다." → "행이 달라지는 양상 비교."
  {
    from: /이 달라지는지 비교한다\./g,
    to: '이 달라지는 양상 비교.',
  },
  // "결과를 단계별로 비교한다." → "결과를 단계별로 비교."
  {
    from: /를 단계별로 비교한다\./g,
    to: '를 단계별로 비교.',
  },
  // "어떻게 다른 행을 골라내는지 비교한다." → "다른 행을 골라내는 양상 비교."
  {
    from: /어떻게 다른 행을 골라내는지 비교한다\./g,
    to: '다른 행을 골라내는 양상 비교.',
  },
  // "어디까지 ~지 비교한다." → "어디까지 ~지 비교."
  {
    from: /어디까지 (.+?) 비교한다\./g,
    to: '어디까지 $1 비교.',
  },
  // "표현해 비교한다." → "표현해 비교."
  {
    from: /해 비교한다\./g,
    to: '해 비교.',
  },
];

const files = readdirSync(DIR)
  .filter(f => /\.html$/.test(f))
  .sort();

let total = 0;
const log = [];
for (const f of files) {
  const p = join(DIR, f);
  let s = readFileSync(p, 'utf8');
  let count = 0;
  for (const r of replacements) {
    const m = s.match(r.from);
    if (m) {
      count += m.length;
      s = s.replace(r.from, r.to);
    }
  }
  if (count > 0) {
    writeFileSync(p, s, 'utf8');
    log.push(`  ${f}: ${count}`);
    total += count;
  }
}

console.log(`Edited ${log.length} files, ${total} replacements:`);
log.forEach(l => console.log(l));
