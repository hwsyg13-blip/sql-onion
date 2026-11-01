// SQL 결과형 문항 실행 검증: 표(table) + SQL 이 있는 문항을 SQLite 로 실제 실행해 보기와 대조한다.
// 사용: node scripts/verify-sql-results.mjs [round-55.json] [--show]
//   - MISMATCH: 실행 결과가 정답이 아닌 다른 보기와 정확히 일치 → 정답·데이터 오류 가능성이 높다. 1건 이상이면 exit 1.
//   - --show: 보기 형식이 달라 자동 대조하지 못한 문항(NOMATCH)과 실행 오류도 출력 (사람이 눈으로 확인용).
// Oracle 전용 문법(ROWNUM, CONNECT BY, ROLLUP, DECODE, 날짜 함수, DML 등)은 건너뛴다.
// Oracle 의미를 맞추기 위해 NVL→IFNULL, MINUS→EXCEPT, ORDER BY 의 NULL 위치(ASC 마지막, DESC 처음)를 변환한다.
// node:sqlite 가 필요하다 (Node 22.13+).
import { readFileSync, readdirSync } from 'node:fs';
import { DatabaseSync } from 'node:sqlite';
process.removeAllListeners('warning');
const fs = { readFileSync, readdirSync };
const DIR = 'scripts/authored';
const only = process.argv[2] && !process.argv[2].startsWith('--') ? process.argv[2] : null;
const SHOW = process.argv.includes('--show');

const SKIP = /\b(ROWNUM|CONNECT\s+BY|START\s+WITH|ROLLUP|CUBE|GROUPING|PIVOT|UNPIVOT|DECODE|TO_CHAR|TO_DATE|TO_NUMBER|SYSDATE|MERGE|NVL2|LISTAGG|RATIO_TO_REPORT|PERCENT_RANK|CUME_DIST|KEEP|REGEXP_\w+|ADD_MONTHS|MONTHS_BETWEEN|LAST_DAY|EXTRACT|TRUNC|CEIL|FLOOR|SIGN|POWER|SQRT|LPAD|RPAD|INITCAP|CONCAT|TOP|FETCH\s+FIRST|OFFSET|SEQUENCE|PRIOR|LEVEL|SYS_CONNECT_BY_PATH|INSERT|UPDATE|DELETE|CREATE|ALTER|DROP|TRUNCATE|COMMIT|ROLLBACK|SAVEPOINT|GRANT|REVOKE|EXISTS\s*\(\s*SELECT\s+\*\s+FROM\s+DUAL)\b/i;

function tableName(caption, idx) {
  if (!caption) return null;
  const c = caption.replace(/\(.*?\)/g, ' ').replace(/[\[\]<>【】「」:：·—\-]/g, ' ').trim();
  const m = c.match(/^([A-Za-z_가-힣][A-Za-z0-9_가-힣]*)\s*(테이블|TABLE)?/i);
  return m ? m[1] : null;
}
const isNullTok = v => v === null || v === undefined || /^\s*(NULL|\(null\)|-|)\s*$/i.test(String(v));
function cell(v) {
  if (isNullTok(v)) return null;
  const s = String(v).trim().replace(/^'(.*)'$/, '$1');
  if (/^-?\d{1,3}(,\d{3})+(\.\d+)?$/.test(s)) return Number(s.replace(/,/g, ''));
  if (/^-?\d+(\.\d+)?$/.test(s)) return Number(s);
  return s;
}
function toSqlite(sql) {
  let s = sql.replace(/--[^\n]*/g, ' ');
  s = s.replace(/\bNVL\s*\(/gi, 'IFNULL(').replace(/\bMINUS\b/gi, 'EXCEPT')
       .replace(/\bFROM\s+DUAL\b/gi, '').replace(/\bSUBSTR\s*\(/gi, 'SUBSTR(')
       .replace(/\bMOD\s*\(\s*([^,()]+)\s*,\s*([^()]+?)\s*\)/gi, '(($1) % ($2))')
       .replace(/;\s*$/, '');
  return oracleNulls(s.trim());
}
// Oracle: NULL 은 가장 큰 값 → ASC 면 마지막, DESC 면 처음. SQLite 는 반대라 NULLS 절을 붙인다.
function oracleNulls(sql) {
  let out = '', i = 0;
  const re = /ORDER\s+BY\s/gi; let m;
  while ((m = re.exec(sql))) {
    out += sql.slice(i, m.index + m[0].length);
    let j = m.index + m[0].length, depth = 0, start = j, items = [], buf = '';
    for (; j < sql.length; j++) {
      const ch = sql[j];
      if (ch === '(') depth++;
      if (ch === ')') { if (depth === 0) break; depth--; }
      if (depth === 0 && /^\s(LIMIT|ROWS|RANGE|UNION|EXCEPT|INTERSECT)\b/i.test(sql.slice(j, j + 12))) break;
      if (ch === ',' && depth === 0) { items.push(buf); buf = ''; continue; }
      buf += ch;
    }
    items.push(buf);
    out += items.map(it => /NULLS\s+(FIRST|LAST)/i.test(it) ? it : (/\bDESC\s*$/i.test(it.trim()) ? it.replace(/\s*$/, '') + ' NULLS FIRST' : it.replace(/\s*$/, '') + ' NULLS LAST')).join(',') + ' ';
    i = j; re.lastIndex = j;
  }
  return out + sql.slice(i);
}
const norm = v => v === null || v === undefined ? 'NULL' : (typeof v === 'number' ? String(+v.toFixed(4)) : String(v).trim());
function rowsFromTable(t) { return (t.rows || []).map(r => r.map(x => isNullTok(x) ? 'NULL' : norm(cell(x)))); }
function same(a, b, ordered) {
  if (a.length !== b.length) return false;
  const A = a.map(r => r.join('|')), B = b.map(r => r.join('|'));
  if (ordered) return A.every((x, i) => x === B[i]);
  return [...A].sort().join('\n') === [...B].sort().join('\n');
}
// 결과의 일부 컬럼만 보기 표에 있을 수 있음 → 보기 헤더 기준으로 투영
function project(resCols, resRows, headers) {
  const idx = headers.map(h => resCols.findIndex(c => c.toUpperCase() === String(h).toUpperCase().trim()));
  if (idx.some(i => i < 0)) return null;
  return resRows.map(r => idx.map(i => r[i]));
}
const nums = s => (String(s).match(/-?\d+(\.\d+)?|NULL/gi) || []).map(x => /null/i.test(x) ? 'NULL' : String(+x));

const report = { ran: 0, skipped: 0, errors: 0, ok: 0, mismatch: [], nomatch: [], err: [] };
for (const f of fs.readdirSync(DIR).filter(f => /\.json$/.test(f)).sort()) {
  if (only && f !== only) continue;
  const d = JSON.parse(fs.readFileSync(`${DIR}/${f}`, 'utf8'));
  const items = d.authored || d.items || d.questions || [];
  items.forEach((q, qi) => {
    const refs = q.references || [];
    const tables = refs.filter(r => r.type === 'table');
    const sqls = refs.filter(r => r.type === 'sql');
    if (!tables.length || sqls.length !== 1 || typeof q.correctIndex !== 'number') return;
    const id = `${f.replace('.json', '')} ${q.subject || ''} ${q.number ?? '#' + qi}`;
    const raw = sqls[0].code || '';
    if (SKIP.test(raw) || /\(\s*\?\s*\)|\[\s*\?\s*\]|_{3,}|[ㄱ-ㅎ]\s*[).]|[ⓐ-ⓩ①-④]/.test(raw) || !/^\s*(SELECT|WITH|\()/i.test(raw.replace(/--[^\n]*\n/g, ''))) { report.skipped++; return; }
    const db = new DatabaseSync(':memory:');
    try {
      for (const [i, t] of tables.entries()) {
        const name = tableName(t.caption, i);
        if (!name || !t.headers) throw new Error('no table name: ' + t.caption);
        const cols = t.headers.map(h => `"${String(h).trim()}"`);
        db.exec(`CREATE TABLE "${name}" (${cols.join(',')})`);
        const st = db.prepare(`INSERT INTO "${name}" VALUES (${cols.map(() => '?').join(',')})`);
        for (const r of t.rows || []) st.run(...t.headers.map((_, j) => cell(r[j])));
      }
      // 한 블록에 쿼리가 여러 개면 각각 실행. 모두 단일 값이면 "v1, v2" 한 행으로 합친다 (보기 "3, 4" 형식).
      const parts = raw.replace(/--[^\n]*/g, ' ').split(';').map(x => x.trim()).filter(Boolean);
      let sql, cols, res;
      if (parts.length > 1) {
        const vals = parts.map(p => { const st = db.prepare(toSqlite(p)); st.setReturnArrays(true); return st.all(); });
        if (!vals.every(v => v.length === 1 && v[0].length === 1)) throw new Error('multi-statement with non-scalar results');
        sql = parts.join(';'); cols = parts.map((_, i) => `Q${i + 1}`); res = [vals.map(v => norm(v[0][0]))];
      } else {
        sql = toSqlite(raw);
        const stmt = db.prepare(sql);
        cols = stmt.columns().map(c => c.name);
        stmt.setReturnArrays(true);
        res = stmt.all().map(r => r.map(norm));
      }
      report.ran++;
      const ordered = /ORDER\s+BY/i.test(sql);
      // 보기 대조
      const hits = [];
      const oRefs = q.optionReferences || [];
      q.options.forEach((opt, oi) => {
        const ot = (oRefs[oi] || []).find(r => r.type === 'table');
        if (ot && ot.headers) {
          const p = project(cols, res, ot.headers) || res;
          if (same(p, rowsFromTable(ot), ordered)) hits.push(oi);
        } else {
          const want = nums(opt);
          const flat = res.length === 1 ? res[0] : res.map(r => r[r.length - 1]);
          const flatAll = res.flat();
          if (want.length && (want.join(',') === flat.join(',') || want.join(',') === flatAll.join(',') || (res.length === 1 && res[0].length === 1 && want.length === 1 && want[0] === res[0][0]))) hits.push(oi);
          else if (!want.length && res.length === 1 && res[0].length === 1 && String(opt).trim() === res[0][0]) hits.push(oi);
        }
      });
      const rec = { opts: q.options.map(o => String(o).slice(0, 40)), id, correct: q.correctIndex + 1, hits: hits.map(h => h + 1), cols, res: res.slice(0, 12), title: q.title };
      if (hits.includes(q.correctIndex)) report.ok++;
      else if (hits.length) report.mismatch.push(rec);
      else report.nomatch.push(rec);
    } catch (e) { report.errors++; report.err.push(`${id}: ${String(e.message).slice(0, 100)}`); }
    db.close();
  });
}
console.log(`ran ${report.ran}, skipped ${report.skipped}, errors ${report.errors}, ok ${report.ok}, mismatch ${report.mismatch.length}, nomatch ${report.nomatch.length}`);
console.log('\n== MISMATCH (실행 결과가 다른 보기와 일치) ==');
for (const r of report.mismatch) console.log(JSON.stringify(r));
if (SHOW) {
  console.log('\n== NOMATCH ==');
  for (const r of report.nomatch) console.log(JSON.stringify(r));
  console.log('\n== ERRORS ==');
  for (const r of report.err) console.log(r);
}
process.exitCode = report.mismatch.length ? 1 : 0;
