// SQL 결과형 문항을 로컬 PostgreSQL 에서 실행해 보기와 대조한다 (verify-sql-results.mjs 의 확장판).
// SQLite 판이 건너뛰는 Oracle 문법 중 PostgreSQL 로 옮길 수 있는 것(DECODE·NVL2·ROLLUP/CUBE/GROUPING·윈도우 함수·
// RATIO_TO_REPORT·LISTAGG·FETCH FIRST·DML 뒤 SELECT 등)까지 실행한다.
// 사용: node scripts/verify-sql-pg.mjs [round-55.json] [--show]
//   - 로컬에 PostgreSQL 이 없으면(psql 실행 실패) 아무것도 하지 않고 끝난다 (CI 용이 아니라 검토용).
//   - 실행: su postgres -c psql 로 문항마다 새 스키마에서 실행. 표의 컬럼은 값이 모두 숫자면 numeric, 아니면 text.
//   - MISMATCH: 실행 결과가 정답이 아닌 다른 보기와 일치 → 사람이 확인. PostgreSQL 과 Oracle 의 차이
//     (DDL 자동 커밋, '' = NULL, 정수 나눗셈 등)로 생기는 오탐이 있을 수 있다.
//   - CONNECT BY·ROWNUM·MERGE·INSERT ALL·KEEP·날짜 함수는 건너뛴다.
import { readFileSync, readdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
const fs = { readFileSync, readdirSync };
const DIR = 'scripts/authored';
const only = process.argv[2] && !process.argv[2].startsWith('--') ? process.argv[2] : null;
const SHOW = process.argv.includes('--show');
const SKIP = /\b(ROWNUM|CONNECT\s+BY|START\s+WITH|PRIOR|LEVEL|SYS_CONNECT_BY_PATH|MERGE|INSERT\s+(ALL|FIRST)|KEEP|SYSDATE|ADD_MONTHS|MONTHS_BETWEEN|LAST_DAY|NEXT_DAY|INSTR|PIVOT|UNPIVOT|REGEXP_\w+|SEQUENCE|NEXTVAL|CURRVAL|CREATE\s+(OR\s+REPLACE\s+)?(TABLE|VIEW|INDEX)|ALTER|DROP|TRUNCATE|GRANT|REVOKE|TOP\s*\(|TOP\s+\d|IDENTITY|GETDATE|ISNULL|EXCEPT\s+ALL)\b/i;

function splitArgs(s) { const out = []; let d = 0, q = false, buf = '';
  for (const ch of s) { if (ch === "'") q = !q; if (!q) { if (ch === '(') d++; if (ch === ')') d--; if (ch === ',' && d === 0) { out.push(buf); buf = ''; continue; } } buf += ch; }
  out.push(buf); return out.map(x => x.trim()); }
function rewriteCall(sql, name, fn) {
  const re = new RegExp('\\b' + name + '\\s*\\(', 'i'); let m, guard = 0;
  while ((m = re.exec(sql)) && guard++ < 50) {
    let i = m.index + m[0].length, d = 1, q = false;
    for (; i < sql.length; i++) { const ch = sql[i]; if (ch === "'") q = !q; if (q) continue; if (ch === '(') d++; if (ch === ')' && --d === 0) break; }
    const args = splitArgs(sql.slice(m.index + m[0].length, i));
    sql = sql.slice(0, m.index) + fn(args) + sql.slice(i + 1);
  }
  return sql;
}
function toPg(sql) {
  let s = sql.replace(/--[^\n]*/g, ' ');
  s = s.replace(/\bBEGIN\s+TRAN(SACTION)?\b/gi, 'BEGIN').replace(/\bMINUS\b/gi, 'EXCEPT').replace(/\bFROM\s+DUAL\b/gi, '')
       .replace(/\bVARCHAR2\b/gi, 'VARCHAR').replace(/\bNUMBER\b/gi, 'NUMERIC');
  s = rewriteCall(s, 'NVL2', a => `(CASE WHEN (${a[0]}) IS NOT NULL THEN (${a[1]}) ELSE (${a[2]}) END)`);
  s = rewriteCall(s, 'NVL', a => `COALESCE(${a.join(', ')})`);
  s = rewriteCall(s, 'DECODE', a => { const [e, ...r] = a; let c = '(CASE'; for (let i = 0; i + 1 < r.length; i += 2) c += ` WHEN (${e}) IS NOT DISTINCT FROM (${r[i]}) THEN (${r[i + 1]})`; if (r.length % 2) c += ` ELSE (${r[r.length - 1]})`; return c + ' END)'; });
  s = s.replace(/\bRATIO_TO_REPORT\s*\(([^()]*)\)\s*OVER\s*\(([^()]*)\)/gi, '(($1)::numeric / SUM($1) OVER ($2))');
  s = s.replace(/\bLISTAGG\s*\(([^,()]+),\s*('[^']*')\s*\)\s*WITHIN\s+GROUP\s*\(\s*ORDER\s+BY\s+([^()]+)\)/gi, 'STRING_AGG(($1)::text, $2 ORDER BY $3)');
  s = rewriteCall(s, 'TO_CHAR', a => a.length === 1 ? `CAST((${a[0]}) AS TEXT)` : `TO_CHAR(${a.join(', ')})`);
  return s;
}
const esc = v => v === null ? 'NULL' : (typeof v === 'number' ? String(v) : `'${String(v).replace(/'/g, "''")}'`);
function psql(script) {
  const r = spawnSync('su', ['postgres', '-c', 'psql -X -q -A -F "\x1f" -P footer=off -P null=NULL -v ON_ERROR_STOP=1'], { input: script, encoding: 'utf8', timeout: 20000 });
  return r;
}
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


const probe = spawnSync('su', ['postgres', '-c', 'psql -X -q -A -t -c "select 1"'], { encoding: 'utf8' });
if (probe.status !== 0) { console.log('PostgreSQL 없음 — 건너뜀'); process.exit(0); }
const report = { ran: 0, skipped: 0, errors: 0, ok: 0, mismatch: [], nomatch: [], err: [] };
let seq = 0;
for (const f of fs.readdirSync(DIR).filter(f => /\.json$/.test(f)).sort()) {
  if (only && f !== only) continue;
  const d = JSON.parse(fs.readFileSync(`${DIR}/${f}`, 'utf8'));
  const items = d.authored || d.items || d.questions || [];
  items.forEach((q, qi) => {
    const refs = q.references || [];
    const tables = refs.filter(r => r.type === 'table');
    const sqls = refs.filter(r => r.type === 'sql');
    if (!tables.length || sqls.length !== 1 || typeof q.correctIndex !== 'number') return;
    if (tables.some(t => /요약|가정|행 개수|행 수\)|결과|정답/.test(t.caption || '') || (t.rows || []).some(r => r.some(c => /^…$/.test(String(c)))))) { report.skipped++; return; }
    const id = `${f.replace('.json', '')} ${q.subject || ''} ${q.number ?? '#' + qi}`;
    const raw = sqls[0].code || '';
    if (SKIP.test(raw) || /\(\s*\?\s*\)|\(\s{3,}\)|\[\s*\?\s*\]|_{3,}|[ㄱ-ㅎ]\s*[).]|\(\s*[ㄱ-ㅎ]\s*\)|[ⓐ-ⓩ①-④㉠-㉣]/.test(raw)) { report.skipped++; return; }
    const parts = toPg(raw).split(';').map(x => x.trim()).filter(Boolean);
    if (!parts.length || !/^\s*(SELECT|WITH|\()/i.test(parts[parts.length - 1])) { report.skipped++; return; }
    const selects = parts.filter(p => /^\s*(SELECT|WITH|\()/i.test(p));
    const multiScalar = selects.length > 1 && selects.length === parts.length;
    const schema = `vsp_q${++seq}`;
    let script = `DROP SCHEMA IF EXISTS ${schema} CASCADE; CREATE SCHEMA ${schema}; SET search_path TO ${schema};\n`;
    try {
      for (const [i, t] of tables.entries()) {
        const name = tableName(t.caption, i);
        if (!name || !t.headers) throw new Error('no table name: ' + t.caption);
        const heads = t.headers.map(h => String(h).replace(/\(.*?\)/g, '').trim());
        const rows = (t.rows || []).filter(r => !(r.length === 1 && /^\((empty|없음|빈 테이블)\)$/i.test(String(r[0]).trim()))).map(r => heads.map((_, j) => cell(r[j])));
        const types = heads.map((_, j) => rows.every(r => r[j] === null || typeof r[j] === 'number') ? 'numeric' : 'text');
        script += `CREATE TABLE "${name}" (${heads.map((h, j) => `"${h}" ${types[j]}`).join(',')});\n`;
        // 컬럼명을 대문자로도 쓸 수 있게 (Oracle 은 대소문자 무시) 소문자 뷰 대신 이름을 그대로 두고 쿼리 쪽 식별자를 맞춘다
        for (const r of rows) script += `INSERT INTO "${name}" VALUES (${r.map(esc).join(',')});\n`;
      }
      // Oracle 은 따옴표 없는 식별자를 대문자로, PostgreSQL 은 소문자로 접는다 → 표에서 만든 이름(대소문자 그대로)과 맞추려고
      // 쿼리 안의 표·컬럼 이름 토큰을 따옴표로 감싼다.
      const names = new Set();
      for (const [i, t] of tables.entries()) { names.add(tableName(t.caption, i)); for (const h of t.headers) names.add(String(h).replace(/\(.*?\)/g, '').trim()); }
      const quoteIds = s => { let out = '', q2 = false, buf = '';
        const flush = () => { out += buf.replace(/[A-Za-z_가-힣][A-Za-z0-9_가-힣]*/g, w => names.has(w) ? `"${w}"` : ([...names].find(n => n.toUpperCase() === w.toUpperCase() && /^[A-Za-z_0-9]+$/.test(n)) ? `"${[...names].find(n => n.toUpperCase() === w.toUpperCase())}"` : w)); buf = ''; };
        for (const ch of s) { if (ch === "'") { if (!q2) flush(); q2 = !q2; out += ch; continue; } if (q2) out += ch; else buf += ch; }
        flush(); return out; };
      script += 'BEGIN;\n';
      parts.forEach((p, i) => { const last = i === parts.length - 1; script += (multiScalar || last ? `\\echo @@RES${i}\n` : '') + quoteIds(p) + ';\n'; });
      script += `ROLLBACK;\nRESET search_path; DROP SCHEMA ${schema} CASCADE;\n`;
      const r = psql(script);
      if (r.status !== 0) {
        const msg = (r.stderr || '').split('\n').find(l => /ERROR/.test(l)) || 'psql error';
        const errOpt = q.options.findIndex(o => /오류|에러|ERROR/i.test(String(o)));
        if (errOpt === q.correctIndex) { report.ran++; report.ok++; report.expectedErr = (report.expectedErr || 0) + 1; return; }
        throw new Error(msg);
      }
      const blocks = r.stdout.split(/^@@RES\d+\n/m).slice(1).map(b => b.split('\n').filter(l => l.length));
      let cols, res;
      if (multiScalar) {
        if (!blocks.every(b => b.length === 2)) throw new Error('multi-statement with non-scalar results');
        cols = blocks.map((_, i) => `Q${i + 1}`); res = [blocks.map(b => norm(cell(b[1].split('\x1f')[0] === 'NULL' ? null : b[1].split('\x1f')[0])))];
      } else {
        const b = blocks[blocks.length - 1] || [];
        cols = (b[0] || '').split('\x1f');
        res = b.slice(1).map(l => l.split('\x1f').map(v => v === 'NULL' ? 'NULL' : norm(cell(v))));
      }
      report.ran++;
      const ordered = /ORDER\s+BY/i.test(parts[parts.length - 1]);
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
      // 보조 대조 (2026-11-03): 'N건'·'공집합' 같은 행 수 보기, '(A, 1, 100), (B, 2, NULL)' 같은 행 목록 보기
      if (!hits.length) {
        const nv = v => String(v).replace(/[\s'"]/g, '').toUpperCase().replace(/^(NULL|-|)$/, 'NULL');
        const resRows = res.map(r => r.map(nv).join(','));
        q.options.forEach((opt, oi) => {
          const t = String(opt).trim();
          const m = t.match(/^(\d+)\s*(건|행)/);
          if ((m && +m[1] === res.length) || (res.length === 0 && /^(공집합|0건|결과가 없다)/.test(t))) { hits.push(oi); return; }
          const tup = [...t.matchAll(/\(([^()]*)\)/g)].map(x => x[1].split(',').map(nv).join(','));
          if (tup.length && tup.length === resRows.length && tup.length > 0 && res[0] && tup[0].split(',').length === res[0].length) {
            const a = ordered ? tup.join('|') : [...tup].sort().join('|');
            const b = ordered ? resRows.join('|') : [...resRows].sort().join('|');
            if (a === b) hits.push(oi);
          }
        });
      }
      const rec = { opts: q.options.map(o => String(o).slice(0, 40)), id, correct: q.correctIndex + 1, hits: hits.map(h => h + 1), cols, res: res.slice(0, 12), title: q.title };
      if (hits.includes(q.correctIndex)) report.ok++;
      // '옳지 않은 것'·'아닌 것' 처럼 틀린 설명을 고르는 문항은 실행 결과가 옳은 설명(오답 보기)과 맞는 게 정상 (cbt-mock 2과목 #141)
      else if (hits.length && /옳지 않은|않은 것|아닌 것|틀린 것|부적절|적절하지 않은|다른 하나|결과가 다른/.test(q.title || '')) report.ok++;
      else if (hits.length) report.mismatch.push(rec);
      else report.nomatch.push(rec);
    } catch (e) { report.errors++; report.err.push(`${id}: ${String(e.message).slice(0, 140)}`); }
  });
}
console.log(`[PG] (오류가 정답인 문항 ${report.expectedErr || 0} 포함) ran ${report.ran}, skipped ${report.skipped}, errors ${report.errors}, ok ${report.ok}, mismatch ${report.mismatch.length}, nomatch ${report.nomatch.length}`);
console.log('\n== MISMATCH (실행 결과가 다른 보기와 일치) ==');
for (const r of report.mismatch) console.log(JSON.stringify(r));
if (SHOW) {
  console.log('\n== NOMATCH ==');
  for (const r of report.nomatch) console.log(JSON.stringify(r));
  console.log('\n== ERRORS ==');
  for (const r of report.err) console.log(r);
}
