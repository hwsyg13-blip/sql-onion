// references 가 ascii 만 있고 table/sql 데이터가 없는 경우 sweep
// type=ascii 는 보통 ERD/관계선 표기용인데, 컬럼 나열만 적힌 케이스는 표로 옮겨야 함
import fs from 'node:fs';
import path from 'node:path';

const dir = 'scripts/authored';
const files = fs.readdirSync(dir).filter(f => /^round-\d+\.json$/.test(f));
const suspicious = [];

for (const f of files) {
  const data = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf-8'));
  for (const q of data.authored || []) {
    const refs = q.references || [];
    if (!Array.isArray(refs) || refs.length === 0) continue;

    const types = refs.map(r => r.type);
    const hasAscii = types.includes('ascii');
    const hasTable = types.includes('table');
    const hasSql = types.includes('sql');
    const hasEntityDiagram = types.includes('entity-diagram');

    // ascii 만 있고 table/entity-diagram 없는 케이스
    if (!hasAscii) continue;
    if (hasTable || hasEntityDiagram) continue;

    // ascii 텍스트 내용 분석 — ERD 관계선 표기인지, 컬럼 정보인지
    const asciiTexts = refs.filter(r => r.type === 'ascii').map(r => r.text || '');
    const hasErdSymbol = asciiTexts.some(t => /[│┌┐└┘├┤┬┴┼∋∈─━║═]|[ㅁ□▭]|--|→|←|↑|↓/.test(t));
    const isShortColumnInfo = asciiTexts.every(t => t.split('\n').length <= 2 && t.length < 80);

    // ERD 표기는 정상으로 분류 (관계선 시각화)
    if (hasErdSymbol && !isShortColumnInfo) continue;

    suspicious.push({
      file: f,
      Q: q.number,
      title: (q.title || '').slice(0, 80),
      asciiTexts,
      hasSql,
      hasErdSymbol,
      isShortColumnInfo,
    });
  }
}

for (const s of suspicious) {
  console.log(`${s.file} Q${s.Q} (sql=${s.hasSql}, erdSym=${s.hasErdSymbol}, short=${s.isShortColumnInfo})`);
  console.log(`  title: ${s.title}`);
  for (const t of s.asciiTexts) {
    console.log(`  ascii: ${t.replace(/\n/g, ' \\n ')}`);
  }
  console.log();
}
console.log(`Total: ${suspicious.length}`);
