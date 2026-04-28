// 옵션 텍스트 일관성 깨진 케이스 sweep
// R59 Q22 처럼 옵션 4개 중 1~2개만 형식이 다른 작성 오류 추적
import fs from 'node:fs';
import path from 'node:path';

const dir = 'scripts/authored';
const files = fs.readdirSync(dir).filter(f => /^round-\d+\.json$/.test(f));
const suspicious = [];

for (const f of files) {
  const data = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf-8'));
  for (const q of data.authored || []) {
    const opts = q.options || [];
    if (opts.length !== 4) continue;

    // 1) 옵션 안에 백틱+작은따옴표로 둘러싸인 정규식/LIKE 패턴, 일부만
    const quotedMask = opts.map(o => /`'[^`]*'`/.test(o));
    const cntQ = quotedMask.filter(Boolean).length;
    if (cntQ > 0 && cntQ < 4) {
      suspicious.push({ kind: 'STRAY_QUOTE_PARTIAL', file: f, Q: q.number, options: opts, correctIndex: q.correctIndex });
    }

    // 2) `$` 가 정규식의 잘못된 자리 (백틱+`$`+영숫자)
    if (opts.some(o => /`\$[A-Za-z0-9]/.test(o))) {
      // 단, 4개 모두 동일 형식이면 의도 — 일관성 체크
      const dollarMask = opts.map(o => /`\$[A-Za-z0-9]/.test(o));
      if (dollarMask.filter(Boolean).length < 4) {
        suspicious.push({ kind: 'DOLLAR_PREFIX', file: f, Q: q.number, options: opts, correctIndex: q.correctIndex });
      }
    }

    // 3) 백틱 일관성 (4개 중 일부만 백틱)
    const backtickMask = opts.map(o => o.startsWith('`') && o.includes('`'));
    const cntBT = backtickMask.filter(Boolean).length;
    if (cntBT > 0 && cntBT < 4) {
      // SQL 키워드/코드가 옵션이면 4개 모두 백틱 권장
      // 단, 일부 옵션이 일반 한국어 설명이고 일부만 코드인 케이스는 자연스러우니 백틱 없는 옵션이 한국어인지 확인
      const nonBacktickOpts = opts.filter((o, i) => !backtickMask[i]);
      const allKorean = nonBacktickOpts.every(o => /^[가-힣]/.test(o));
      if (!allKorean && cntBT >= 2) {
        suspicious.push({ kind: 'BACKTICK_INCONSISTENT', file: f, Q: q.number, options: opts, correctIndex: q.correctIndex });
      }
    }

    // 4) 마침표 일관성 (3개는 . 끝, 1개는 . 없음)
    const dotMask = opts.map(o => o.trim().endsWith('.'));
    const cntDot = dotMask.filter(Boolean).length;
    if (cntDot === 3) {
      suspicious.push({ kind: 'DOT_INCONSISTENT_3of4', file: f, Q: q.number, options: opts, correctIndex: q.correctIndex });
    } else if (cntDot === 1) {
      suspicious.push({ kind: 'DOT_INCONSISTENT_1of4', file: f, Q: q.number, options: opts, correctIndex: q.correctIndex });
    }
  }
}

for (const s of suspicious) {
  console.log(`[${s.kind}] ${s.file} Q${s.Q} (correctIndex=${s.correctIndex})`);
  s.options.forEach((o, i) => console.log(`  ${i === s.correctIndex ? '✓' : ' '} ${i}: ${o}`));
  console.log();
}
console.log(`Total suspicious: ${suspicious.length}`);
