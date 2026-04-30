// Vision conversion 자체 검증 — 시각 정독으로 변환한 ref 의 mechanical 일관성 체크.
//
// 검증 항목 (catch 가능한 것만 — OCR 정확도는 사람만 가능):
//  1. table: headers 길이 == 모든 row 의 cell 수
//  2. table: 빈 caption (warn)
//  3. sql: 빈 코드 / 매칭 안 되는 괄호 (error)
//  4. sql: 키워드 없음 (warn — 그냥 텍스트일 수도)
//  5. image: ref.src 파일 실재 (error)
//  6. erd: mermaid 코드 비었나 (error)
//  7. ROLLUP 패턴 합계 정합성: source 테이블의 group sum == result aggregate row
//
// 사용법:
//   node scripts/validate-vision-conversions.mjs <conversions.json>
//   node scripts/validate-vision-conversions.mjs scripts/modern-box-conversions.json
//   node scripts/validate-vision-conversions.mjs scripts/classic-batch-N.json

import fs from 'node:fs';
import path from 'node:path';

const SQL_KW = /\b(SELECT|FROM|WHERE|JOIN|GROUP BY|HAVING|ORDER BY|INSERT|UPDATE|DELETE|CREATE|ALTER|DROP|GRANT|REVOKE|UNION|INTERSECT|MINUS|CASE|WHEN|EXISTS|RANK|OVER|PARTITION|ROLLUP|CUBE|GROUPING|MERGE|TRUNCATE|COMMIT|ROLLBACK|SAVEPOINT)\b/i;

const ROLLUP_LABELS = ['전체', 'TOTAL', 'ALL'];

function isAggregateLabel(s) {
  if (!s) return false;
  return ROLLUP_LABELS.some((l) => String(s).includes(l));
}

function validateRef(r, ctx) {
  const errs = [];
  const warns = [];

  if (!r || typeof r !== 'object') {
    errs.push('ref is not an object');
    return { errs, warns };
  }
  if (!r.type) errs.push('missing type');

  switch (r.type) {
    case 'table': {
      if (!Array.isArray(r.headers) || r.headers.length === 0) {
        errs.push('table missing/empty headers');
        break;
      }
      if (!Array.isArray(r.rows)) {
        errs.push('table missing rows');
        break;
      }
      const expected = r.headers.length;
      r.rows.forEach((row, i) => {
        if (!Array.isArray(row)) {
          errs.push(`table row ${i}: not an array`);
        } else if (row.length !== expected) {
          errs.push(`table row ${i}: ${row.length} cells, expected ${expected} (headers: ${r.headers.join('|')}; row: ${row.join('|')})`);
        }
      });
      if (!r.caption) warns.push('table missing caption');
      if (r.rows.length === 0) warns.push('table has 0 rows');
      break;
    }
    case 'sql': {
      const code = String(r.code || '').trim();
      if (code.length < 5) {
        errs.push('sql code too short (<5 chars)');
        break;
      }
      const opens = (code.match(/\(/g) || []).length;
      const closes = (code.match(/\)/g) || []).length;
      if (opens !== closes) errs.push(`sql paren mismatch: ${opens}( vs ${closes})`);
      if (!SQL_KW.test(code)) warns.push('sql has no recognizable keyword');
      if (!r.caption) warns.push('sql missing caption');
      break;
    }
    case 'image': {
      if (!r.src) {
        errs.push('image missing src');
        break;
      }
      const fp = path.join('public', r.src.replace(/^\//, ''));
      if (!fs.existsSync(fp)) errs.push(`image file not found: ${fp}`);
      if (!r.caption && !r.alt) warns.push('image missing caption + alt');
      break;
    }
    case 'erd': {
      if (!r.mermaid || String(r.mermaid).trim().length < 10) {
        errs.push('erd missing/empty mermaid');
      }
      break;
    }
    case 'text':
    case 'ascii':
    case 'html':
      // basic shape check
      break;
    default:
      warns.push(`unknown ref type: ${r.type}`);
  }

  return { errs, warns };
}

// ROLLUP 정합성 — source 테이블 + result 테이블 페어 검출 후 합계 cross-check
function validateRollupConsistency(refs) {
  const errs = [];
  const warns = [];

  const tables = refs.filter((r) => r.type === 'table');
  // Find a "result" table containing aggregate labels in any cell
  const result = tables.find((t) =>
    t.rows.some((row) => row.some((c) => isAggregateLabel(c))));
  if (!result) return { errs, warns };

  // Find a "source" table that has same-named columns and ALL data values match
  // For simplicity: assume the first non-aggregate table is the source
  const source = tables.find((t) =>
    t !== result && !t.rows.some((row) => row.some((c) => isAggregateLabel(c))));
  if (!source) return { errs, warns };

  // Compute source total sum (last numeric column)
  const lastColIdx = source.headers.length - 1;
  let sourceSum = 0;
  for (const row of source.rows) {
    const v = parseInt(row[lastColIdx], 10);
    if (!Number.isNaN(v)) sourceSum += v;
  }

  // Compute result total — find rows where all non-numeric cells are aggregate labels
  // and sum their numeric column
  const resultLastIdx = result.headers.length - 1;
  let resultGrandTotal = null;
  for (const row of result.rows) {
    const allAgg = row.slice(0, resultLastIdx).every((c) => isAggregateLabel(c));
    if (allAgg) {
      const v = parseInt(row[resultLastIdx], 10);
      if (!Number.isNaN(v)) resultGrandTotal = (resultGrandTotal || 0) + v;
    }
  }

  if (resultGrandTotal !== null && sourceSum !== resultGrandTotal) {
    warns.push(`ROLLUP grand total mismatch: source sum=${sourceSum} vs result grand total=${resultGrandTotal} (source: ${source.caption || '?'}; result: ${result.caption || '?'})`);
  }

  // Group-key consistency (per single dimension)
  // For each row in result with exactly one non-aggregate column, sum source by that column key
  for (const row of result.rows) {
    const nonAggIdxs = row.slice(0, resultLastIdx)
      .map((c, i) => isAggregateLabel(c) ? null : i)
      .filter((x) => x !== null);
    if (nonAggIdxs.length !== 1) continue; // skip multi-dim or grand total

    const colIdx = nonAggIdxs[0];
    const keyVal = row[colIdx];
    const targetSum = parseInt(row[resultLastIdx], 10);
    if (Number.isNaN(targetSum)) continue;

    // Find matching col index in source by header name
    const headerName = result.headers[colIdx];
    const sourceColIdx = source.headers.indexOf(headerName);
    if (sourceColIdx < 0) continue;

    let groupSum = 0;
    for (const srcRow of source.rows) {
      if (srcRow[sourceColIdx] === keyVal) {
        const v = parseInt(srcRow[lastColIdx], 10);
        if (!Number.isNaN(v)) groupSum += v;
      }
    }
    if (groupSum !== targetSum) {
      warns.push(`ROLLUP group mismatch for ${headerName}=${keyVal}: source sum=${groupSum} vs result=${targetSum}`);
    }
  }

  return { errs, warns };
}

// Run on a conversions JSON
function validateBatch(filePath) {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  console.log(`\n=== Validating ${filePath} ===`);

  // Detect format: "groups" (modern-box style) or "items" (pilot style) or "authored"
  const items = [];
  if (data.groups) {
    for (const [hash, g] of Object.entries(data.groups)) {
      items.push({ id: hash, name: g.name, refs: g.refs });
    }
  } else if (data.items) {
    for (const it of data.items) {
      items.push({ id: it.imageKey, name: it.imageKey, refs: it.convertedRefs || [] });
    }
  } else if (data.authored) {
    // sqld-quiz-1140.json style — only check refs
    for (const q of data.authored) {
      const refs = (q.references || []);
      if (q.optionReferences) refs.push(...q.optionReferences.flat());
      items.push({ id: q._id, name: q.title?.slice(0, 50) || q._id, refs });
    }
  } else {
    console.error(`Unknown format. Expected 'groups', 'items', or 'authored' top-level key.`);
    process.exit(1);
  }

  let totalErrs = 0, totalWarns = 0, itemsWithIssues = 0;

  for (const it of items) {
    const itemErrs = [];
    const itemWarns = [];

    for (const r of it.refs) {
      const { errs, warns } = validateRef(r, it);
      itemErrs.push(...errs);
      itemWarns.push(...warns);
    }

    // Cross-ref ROLLUP check
    const rollup = validateRollupConsistency(it.refs);
    itemErrs.push(...rollup.errs);
    itemWarns.push(...rollup.warns);

    if (itemErrs.length || itemWarns.length) {
      itemsWithIssues++;
      console.log(`\n[${it.id}] ${it.name}`);
      itemErrs.forEach((e) => console.log(`  ❌ ${e}`));
      itemWarns.forEach((w) => console.log(`  ⚠️  ${w}`));
    }

    totalErrs += itemErrs.length;
    totalWarns += itemWarns.length;
  }

  console.log(`\n=== Summary ===`);
  console.log(`Items checked:   ${items.length}`);
  console.log(`Items w/ issue:  ${itemsWithIssues}`);
  console.log(`Errors:          ${totalErrs}`);
  console.log(`Warnings:        ${totalWarns}`);
  return { totalErrs, totalWarns, itemsWithIssues, items };
}

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Usage: node scripts/validate-vision-conversions.mjs <file.json> [file2.json ...]');
  process.exit(1);
}

let totalErrs = 0;
for (const f of args) {
  const r = validateBatch(f);
  totalErrs += r.totalErrs;
}
process.exit(totalErrs > 0 ? 1 : 0);
