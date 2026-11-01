// 문항 품질 검사 — 기출 회차와 모의고사 풀 전체(scripts/authored/*.json)
// 사용: node scripts/check-question-quality.mjs
//
// 2026-11-01 정비 때 실제로 발견된 결함 유형을 다시 들어오지 않게 막는다.
//   DUP_OPTIONS     같은 보기가 둘 이상 (cbt-125 는 보기 4개가 모두 같았다)
//   PICK_TWO        "2개 고르시오" — 화면은 하나만 고를 수 있어 정답이 둘이 된다
//   GLUED_SQL       줄바꿈이 사라져 키워드가 앞 단어에 붙음 (TB_ORDERGROUP BY, ASTOTALFROM)
//   FULLWIDTH_SQL   SQL 안의 전각 기호·둥근 따옴표 (〈〉, ；, ‘’) — 그대로는 실행되지 않는다
//   NO_EXPLANATION  "(해설 미등록)" — 보기가 다 있는데 해설이 없다
// 보기가 4개 미만인 문항은 빌드에서 제외되므로 검사하지 않는다. 하나라도 걸리면 exit 1.
import { readFileSync, readdirSync } from 'node:fs';

const DIR = 'scripts/authored';
// 문장 형태로 판단 ("ON DELETE SET NULL 은 …" 같은 설명문은 SQL 이 아님)
const isSql = s => /\bSELECT\b[\s\S]*\bFROM\b|\bINSERT\s+INTO\b|\bUPDATE\s+\S+\s+SET\b|\bDELETE\s+FROM\b|\b(CREATE|ALTER)\s+TABLE\b|\bMERGE\s+INTO\b/i.test(s);
const GLUED = /[A-Za-z0-9_)'](FROM|WHERE|GROUP BY|ORDER BY|HAVING)\b/;
const FULLWIDTH = /[〈〉；‘’]/;

const issues = [];
for (const f of readdirSync(DIR).filter(f => f.endsWith('.json')).sort()) {
  const d = JSON.parse(readFileSync(`${DIR}/${f}`, 'utf8'));
  const items = d.authored || d.items || d.questions || [];
  items.forEach((q, i) => {
    const opts = (q.options || []).map(o => String(o ?? ''));
    if (opts.filter(o => o.trim()).length < 4) return;
    const id = `${f.replace('.json', '')} ${q._id || `${q.subject || ''} ${q.number ?? '#' + i}`}`;
    const add = (code, msg) => issues.push({ code, id, msg });

    const norm = opts.map(o => o.replace(/[‘’]/g, "'").replace(/\s+/g, ' ').trim());
    const seen = {};
    norm.forEach((o, k) => (seen[o] = seen[o] || []).push(k + 1));
    for (const [o, ks] of Object.entries(seen)) if (ks.length > 1) add('DUP_OPTIONS', `보기 ${ks.join('=')}: ${o.slice(0, 50)}`);

    if (/(2|두)\s*개\s*(를\s*)?고르/.test(q.title || '')) add('PICK_TWO', (q.title || '').slice(-50));

    const sqlStrings = [...opts, ...(q.references || []).filter(r => r.type === 'sql').map(r => r.code || '')].filter(isSql);
    for (const s of sqlStrings) {
      const g = s.match(GLUED);
      if (g) { add('GLUED_SQL', `…${s.slice(Math.max(0, g.index - 15), g.index + 15).replace(/\n/g, '⏎')}…`); break; }
    }
    for (const s of sqlStrings) {
      const w = s.match(FULLWIDTH);
      if (w) { add('FULLWIDTH_SQL', `'${w[0]}' …${s.slice(Math.max(0, w.index - 15), w.index + 10).replace(/\n/g, '⏎')}…`); break; }
    }

    if (!q.explanation || /해설 미등록/.test(q.explanation)) add('NO_EXPLANATION', (q.title || '').slice(0, 50));
  });
}

// 사람이 검토해 그대로 두기로 한 항목 (사유와 함께)
const KNOWN = {
};
const open = issues.filter(x => !KNOWN[`${x.id}|${x.code}`]);
const known = issues.filter(x => KNOWN[`${x.id}|${x.code}`]);

const byCode = {};
for (const x of open) (byCode[x.code] = byCode[x.code] || []).push(x);
if (!open.length) console.log('✅ 문항 품질 검사 통과');
for (const [code, list] of Object.entries(byCode)) {
  console.log(`\n⚠ ${code} ${list.length}건`);
  for (const x of list.slice(0, 30)) console.log(`  ${x.id}: ${x.msg}`);
  if (list.length > 30) console.log(`  … 외 ${list.length - 30}건`);
}
if (known.length) console.log(`ℹ 검토 후 보류 ${known.length}건: ${known.map(x => `${x.id} (${KNOWN[`${x.id}|${x.code}`]})`).join('; ')}`);
process.exitCode = open.length ? 1 : 0;
