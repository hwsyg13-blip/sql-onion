// scripts/validate-rounds.mjs
// 기출 회차 데이터(scripts/authored/round-NN.json) 자동 검증.
//
// 사용:
//   node scripts/validate-rounds.mjs                # 전체 회차 검증
//   node scripts/validate-rounds.mjs --round 60     # 특정 회차만
//   node scripts/validate-rounds.mjs --strict       # WARNING 도 실패 처리
//   node scripts/validate-rounds.mjs --json         # 기계가 읽기 좋은 JSON 출력
//   node scripts/validate-rounds.mjs --quiet        # WARNING 숨기고 ERROR/INFO 만
//
// 종료 코드: 0 = 통과 (혹은 strict=false 일 때 ERROR 없음), 1 = 실패.
//
// 검증 항목 (severity)
//   ERROR — 반드시 고쳐야 함 (스키마 오류, 명백한 답 모순)
//     · correctIndex 가 정수 또는 범위 외
//     · options.length !== 4 (4지선다 위반)
//     · subject 가 "1과목"|"2과목" 외
//     · number 가 1~50 범위 외 또는 회차 내 중복
//     · raw markdown (** 또는 __) 검출
//     · NTILE(N) 답이 1~N 범위 외 (예: 4건 NTILE(2) 결과에 3 또는 4 등장)
//     · 튜플 IN 동등 패턴이 OR 답으로 표시 (R60 Q15 같은 케이스)
//
//   WARN — 의심스러우니 점검 권장
//     · explanation 빈 문자열 또는 30자 미만
//     · explanation 에 "원본 기출의 정답 표기를 보존" / "문항 오류" / "복수 의견" 메모
//     · references 가 비어있는데 SQL/데이터 결과를 묻는 문항(title 휴리스틱)
//     · ROWNUM = N (N≥2) 패턴 (Oracle 에서 항상 0 건 — 실수 가능)
//     · NOT IN (서브쿼리) 와 NULL 트랩 (해설에 NULL 언급 없으면 점검 권장)
//     · 옵션이 너무 짧음(평균 8자 미만) — 추상 라벨일 가능성
//     · 옵션에 HTML 태그(`<table`, `<div` 등) 누출
//
//   INFO — 통계용, 실패 처리 안 함
//     · 회차별 무해설 비율
//     · 패턴 출현 카운트
//
// 출력 형식 (콘솔):
//   [R47 Q22 ERROR ABSTRACT_OPTIONS] 옵션이 SQL 이 아닌 라벨로 추상화됨 (평균 4.2자)
//
// 환경: pure Node 20+ ESM, 외부 의존성 없음.

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

// ─────────────────────────────────────────────────────────────
// CLI 파싱

const argv = process.argv.slice(2);
const opts = {
  round: null,
  strict: false,
  json: false,
  quiet: false,
  help: false,
};
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a === '--round') { opts.round = Number(argv[++i]); }
  else if (a === '--strict') { opts.strict = true; }
  else if (a === '--json') { opts.json = true; }
  else if (a === '--quiet') { opts.quiet = true; }
  else if (a === '--help' || a === '-h') { opts.help = true; }
  else if (a.startsWith('--')) {
    console.error(`Unknown flag: ${a}`);
    process.exit(2);
  }
}

if (opts.help) {
  console.log(`Usage: node scripts/validate-rounds.mjs [options]

Options:
  --round NN      특정 회차만 검증 (예: --round 60)
  --strict        WARNING 도 실패 처리
  --json          JSON 형식으로 결과 출력
  --quiet         WARNING 숨김 (ERROR + INFO 만)
  -h, --help      도움말

Exit codes:
  0   통과 (strict=false 면 ERROR 없을 때, strict=true 면 WARN 도 없을 때)
  1   실패
  2   잘못된 인자
`);
  process.exit(0);
}

// ─────────────────────────────────────────────────────────────
// 경로 설정

const __dirname = dirname(fileURLToPath(import.meta.url));
const AUTHORED_DIR = resolve(__dirname, 'authored');

if (!existsSync(AUTHORED_DIR)) {
  console.error(`authored 디렉토리가 없습니다: ${AUTHORED_DIR}`);
  process.exit(2);
}

// ─────────────────────────────────────────────────────────────
// 검증 헬퍼

const SUSPICIOUS_NOTES = [
  /원본\s*기출의?\s*정답\s*표기를?\s*보존/,
  /문항\s*오류/,
  /원본\s*기출.*복수\s*의견/,
  /원본\s*기출.*값이?\s*유실/,
];

const RESULT_TITLE_HINT = /(결과|반환|행\s*수|값|건수|출력)/;

function isAuthoredQuestion(q) {
  return q && typeof q === 'object' && Array.isArray(q.options);
}

function questionAllText(q) {
  const refsBlob = JSON.stringify(q.references || '');
  return [q.title || '', q.body || '', q.explanation || '', q.options.join(' '), refsBlob].join(' ');
}

function getReferencesSql(q) {
  return (q.references || []).filter(r => r.type === 'sql').map(r => r.code || '').join('\n');
}

// NTILE(N) 답 검출 — title 또는 SQL 에 NTILE(N) 등장 시
function detectNtile(q) {
  const blob = questionAllText(q);
  const m = blob.match(/NTILE\s*\(\s*(\d+)\s*\)/i);
  if (!m) return null;
  const n = Number(m[1]);
  // 옵션 텍스트에서 1~N 외 숫자 등장 여부 검사
  const correct = q.options[q.correctIndex] || '';
  const numbers = (correct.match(/\d+/g) || []).map(Number);
  // 옵션은 보통 "1, 1, 2, 2" 같은 그룹 번호 시퀀스. 1~N 외 숫자 등장 시 의심.
  // 단, 옵션에 NTILE 자체가 아닌 다른 숫자(시간, 인덱스 등)일 수 있어 휴리스틱.
  const outOfRange = numbers.filter(x => x < 1 || x > n);
  if (outOfRange.length > 0) return { n, correct, outOfRange };
  return null;
}

// 튜플 IN 패턴 검출 — `(A, B) IN ((x, y))` 형식이 references 에 있는지
function detectTupleIn(q) {
  const sql = getReferencesSql(q);
  // (col1, col2) IN ((v1, v2)) 형식
  const tuplePattern = /\(\s*[\w가-힣ㄱ-ㅎㅏ-ㅣ]+(?:\s*,\s*[\w가-힣ㄱ-ㅎㅏ-ㅣ]+){1,}\s*\)\s*IN\s*\(\s*\(/i;
  return tuplePattern.test(sql);
}

// 정답 옵션이 OR 형식인지 (튜플 IN 인데 OR 면 의심)
function isOrFormPredominant(text) {
  // OR 가 등장하고 AND 가 등장하지 않거나, OR 가 더 많이 등장
  const ors = (text.match(/\bOR\b/gi) || []).length;
  const ands = (text.match(/\bAND\b/gi) || []).length;
  return ors > 0 && ors > ands;
}

// 옵션이 SQL 이 아닌 추상 라벨인지 (구체 SQL 비교 문항인데 옵션이 텍스트 라벨 뿐)
// 휴리스틱은 보수적으로: title 이 "다음 SQL 중 ~ 다른 것" 처럼 SQL 비교를 명시할 때만 의심.
function detectAbstractOptions(q) {
  // SQL 비교 문항만 대상 — 자연어 설명을 요구하는 "결과/의미/수행 목적" 류는 제외
  const titleAsksSqlComparison = /SQL\s*중|네\s*(SQL|쿼리)|쿼리\s*중|JOIN.*결과가\s*다른|구문\s*중/i.test(q.title || '');
  if (!titleAsksSqlComparison) return null;

  // 옵션에 백틱(`...`) 코드, 또는 SQL 키워드, 또는 길이 30+ 가 하나라도 있으면 추상 아님
  const sqlKeywords = /\b(SELECT|FROM|WHERE|JOIN|GROUP\s*BY|HAVING|ORDER\s*BY|UNION|INTERSECT|MINUS|UPDATE|INSERT|DELETE|MERGE|CREATE|ALTER|DROP|EXISTS|ROWNUM|NULL|PARTITION|OVER)\b/i;
  const hasCodeMarker = q.options.some(o => /`/.test(o || ''));
  const hasSqlKeyword = q.options.some(o => sqlKeywords.test(o || ''));
  const hasLong = q.options.some(o => (o || '').length >= 30);
  if (hasCodeMarker || hasSqlKeyword || hasLong) return null;

  const lengths = q.options.map(o => (o || '').length);
  const avg = lengths.reduce((a, b) => a + b, 0) / lengths.length;
  return { avgLength: avg.toFixed(1) };
}

// ROWNUM = N (N >= 2) 패턴 — 항상 0건이라 트랩
function detectRownumEqualGteTwo(q) {
  const blob = questionAllText(q);
  const m = blob.match(/ROWNUM\s*=\s*(\d+)/i);
  if (m && Number(m[1]) >= 2) return { value: Number(m[1]) };
  return null;
}

// NOT IN (서브쿼리) 와 NULL 트랩 — 해설에 NULL 언급 없으면 점검 권장
function detectNotInNullTrap(q) {
  const refsSql = getReferencesSql(q);
  const hasNotInSubquery = /NOT\s+IN\s*\(\s*SELECT/i.test(refsSql);
  if (!hasNotInSubquery) return null;
  const exp = q.explanation || '';
  const refsBlob = JSON.stringify(q.references || '');
  const titleMentionsNull = /NULL/i.test(q.title || '') || /NULL/i.test(refsBlob);
  const expMentionsNull = /NULL|UNKNOWN/i.test(exp);
  // NULL 이 데이터에 있다고 명시되어 있는데 해설이 NULL 을 언급 안 하면 점검
  if (titleMentionsNull && !expMentionsNull) {
    return { sql: refsSql.slice(0, 100) };
  }
  return null;
}

// 옵션에 HTML 태그 누출
function detectHtmlInOptions(q) {
  const tagPattern = /<\s*(table|tr|td|th|div|span|br|p|b|i|strong|em)\b/i;
  const offenders = q.options
    .map((o, i) => ({ i, has: tagPattern.test(o || '') }))
    .filter(x => x.has)
    .map(x => x.i);
  return offenders.length > 0 ? offenders : null;
}

// raw markdown 검출
function detectRawMarkdown(q) {
  const blob = questionAllText(q);
  const bold = (blob.match(/\*\*[^*\n]+\*\*/g) || []).length;
  if (bold > 0) return { boldCount: bold };
  return null;
}

// references 부재인데 결과를 묻는 문항
function detectMissingReferences(q) {
  if (q.references && q.references.length > 0) return null;
  const titleAsksResult = RESULT_TITLE_HINT.test(q.title || '');
  // 옵션에 데이터/숫자 결과를 보임 (예: "100, 200, 300")
  const optionsLookLikeData = q.options.some(o => /\d+\s*,\s*\d+/.test(o || ''));
  if (titleAsksResult && optionsLookLikeData) {
    return { hint: 'title asks "결과/반환/값" but no references' };
  }
  return null;
}

// 의심 메모 검출
function detectSuspiciousNote(q) {
  const exp = q.explanation || '';
  for (const pat of SUSPICIOUS_NOTES) {
    if (pat.test(exp)) {
      return { phrase: exp.match(pat)[0].slice(0, 60) };
    }
  }
  return null;
}

// 옵션 4개 미만/초과
function detectWrongOptionCount(q) {
  if (!Array.isArray(q.options)) return { count: 'not array' };
  if (q.options.length !== 4) return { count: q.options.length };
  return null;
}

// correctIndex 범위 외
function detectBadCorrectIndex(q) {
  const ci = q.correctIndex;
  if (typeof ci !== 'number' || !Number.isInteger(ci)) return { value: ci, reason: 'not integer' };
  if (ci < 0 || ci >= (q.options || []).length) return { value: ci, reason: 'out of range' };
  return null;
}

// subject 검사
function detectBadSubject(q) {
  if (q.subject !== '1과목' && q.subject !== '2과목') return { value: q.subject };
  return null;
}

// number 범위 검사 — 1~50
function detectBadNumber(q) {
  if (typeof q.number !== 'number' || q.number < 1 || q.number > 50) {
    return { value: q.number };
  }
  return null;
}

// ─────────────────────────────────────────────────────────────
// 회차 1개 검증

function validateRound(roundFile) {
  const data = JSON.parse(readFileSync(roundFile, 'utf8'));
  const round = data.round;
  const issues = [];
  const seenNumbers = new Set();
  const dups = new Set();

  for (const q of (data.authored || [])) {
    if (!isAuthoredQuestion(q)) continue;
    const id = `R${round} ${q.subject} Q${q.number}`;
    const ctx = { round, number: q.number, subject: q.subject, id };

    // 1. 스키마 검증 (ERROR)
    let r;
    if ((r = detectBadSubject(q))) issues.push({ ...ctx, severity: 'ERROR', code: 'BAD_SUBJECT', detail: r });
    if ((r = detectBadNumber(q))) issues.push({ ...ctx, severity: 'ERROR', code: 'BAD_NUMBER', detail: r });
    if ((r = detectWrongOptionCount(q))) issues.push({ ...ctx, severity: 'ERROR', code: 'WRONG_OPTION_COUNT', detail: r });
    if ((r = detectBadCorrectIndex(q))) issues.push({ ...ctx, severity: 'ERROR', code: 'BAD_CORRECT_INDEX', detail: r });

    // 중복 number
    if (typeof q.number === 'number') {
      if (seenNumbers.has(q.number)) {
        dups.add(q.number);
        issues.push({ ...ctx, severity: 'ERROR', code: 'DUPLICATE_NUMBER', detail: { number: q.number } });
      }
      seenNumbers.add(q.number);
    }

    // 2. 콘텐츠 정합성 (ERROR)
    if ((r = detectRawMarkdown(q))) issues.push({ ...ctx, severity: 'ERROR', code: 'RAW_MARKDOWN', detail: r });

    if ((r = detectNtile(q))) {
      issues.push({ ...ctx, severity: 'ERROR', code: 'NTILE_OUT_OF_RANGE', detail: r });
    }

    // 튜플 IN with OR 답
    if (detectTupleIn(q)) {
      const correct = q.options[q.correctIndex] || '';
      // 전형적: 옵션에 OR 만 있고 AND 가 없으면 의심 (R60 Q15 같은 케이스)
      // AND 형식이 정답이어야 함을 알리려면, 다른 옵션 중 AND 형식이 있는지 보고 그게 더 자연스러우면 의심
      const otherOptionsHaveAnd = q.options.some((o, i) => i !== q.correctIndex && /\bAND\b/i.test(o));
      const correctIsOr = isOrFormPredominant(correct);
      if (correctIsOr && otherOptionsHaveAnd) {
        issues.push({
          ...ctx,
          severity: 'ERROR',
          code: 'TUPLE_IN_OR_ANSWER',
          detail: { correct: correct.slice(0, 80) },
        });
      }
    }

    // 3. 신뢰성 메모 (WARN)
    if ((r = detectSuspiciousNote(q))) issues.push({ ...ctx, severity: 'WARN', code: 'SUSPICIOUS_NOTE', detail: r });

    // 4. 해설 부족
    const explen = (q.explanation || '').trim().length;
    if (explen === 0) {
      issues.push({ ...ctx, severity: 'WARN', code: 'EMPTY_EXPLANATION', detail: {} });
    } else if (explen < 30) {
      issues.push({ ...ctx, severity: 'WARN', code: 'SHORT_EXPLANATION', detail: { length: explen } });
    }

    // 5. references 부재
    if ((r = detectMissingReferences(q))) issues.push({ ...ctx, severity: 'WARN', code: 'MISSING_REFERENCES', detail: r });

    // 6. ROWNUM 트랩
    if ((r = detectRownumEqualGteTwo(q))) issues.push({ ...ctx, severity: 'WARN', code: 'ROWNUM_EQ_TRAP', detail: r });

    // 7. NOT IN + NULL 트랩
    if ((r = detectNotInNullTrap(q))) issues.push({ ...ctx, severity: 'WARN', code: 'NOT_IN_NULL_TRAP', detail: r });

    // 8. 추상 옵션
    if ((r = detectAbstractOptions(q))) issues.push({ ...ctx, severity: 'WARN', code: 'ABSTRACT_OPTIONS', detail: r });

    // 9. HTML 태그 옵션 누출
    if ((r = detectHtmlInOptions(q))) issues.push({ ...ctx, severity: 'WARN', code: 'HTML_IN_OPTIONS', detail: { optionIndices: r } });
  }

  // 회차 단위 INFO
  const total = (data.authored || []).length;
  const empty = (data.authored || []).filter(q => !(q.explanation || '').trim()).length;
  const susNotes = (data.authored || []).filter(q => detectSuspiciousNote(q)).length;
  return {
    round,
    total,
    issues,
    summary: {
      total,
      emptyExplanation: empty,
      emptyExplanationRatio: total ? +(100 * empty / total).toFixed(1) : 0,
      suspiciousNotes: susNotes,
      duplicateNumbers: [...dups],
      errors: issues.filter(i => i.severity === 'ERROR').length,
      warnings: issues.filter(i => i.severity === 'WARN').length,
    },
  };
}

// ─────────────────────────────────────────────────────────────
// 메인

function main() {
  const files = readdirSync(AUTHORED_DIR)
    .filter(f => /^round-\d+\.json$/.test(f))
    .sort();

  const targets = opts.round
    ? files.filter(f => f === `round-${opts.round}.json`)
    : files;

  if (targets.length === 0) {
    console.error(opts.round ? `round-${opts.round}.json 을 찾을 수 없습니다.` : 'round-*.json 파일이 없습니다.');
    process.exit(2);
  }

  const results = targets.map(f => validateRound(join(AUTHORED_DIR, f)));

  if (opts.json) {
    console.log(JSON.stringify({ rounds: results }, null, 2));
  } else {
    printHumanReport(results);
  }

  // 종료 코드 결정
  const totalErrors = results.reduce((a, r) => a + r.summary.errors, 0);
  const totalWarnings = results.reduce((a, r) => a + r.summary.warnings, 0);
  const fail = opts.strict ? (totalErrors + totalWarnings) > 0 : totalErrors > 0;
  process.exit(fail ? 1 : 0);
}

function printHumanReport(results) {
  const RESET = '\x1b[0m', BOLD = '\x1b[1m', DIM = '\x1b[2m';
  const RED = '\x1b[31m', YELLOW = '\x1b[33m', CYAN = '\x1b[36m', GREEN = '\x1b[32m';

  const sevColor = { ERROR: RED, WARN: YELLOW, INFO: CYAN };

  let totalErr = 0, totalWarn = 0, totalQ = 0;

  for (const r of results) {
    totalErr += r.summary.errors;
    totalWarn += r.summary.warnings;
    totalQ += r.total;

    const headColor = r.summary.errors > 0 ? RED : (r.summary.warnings > 0 ? YELLOW : GREEN);
    console.log(`\n${headColor}${BOLD}=== Round ${r.round} (${r.total}문항) — Errors: ${r.summary.errors}, Warnings: ${r.summary.warnings} ===${RESET}`);
    console.log(`${DIM}  무해설: ${r.summary.emptyExplanation}/${r.total} (${r.summary.emptyExplanationRatio}%)  ·  의심 메모: ${r.summary.suspiciousNotes}${RESET}`);

    const sorted = r.issues
      .filter(i => !(opts.quiet && i.severity === 'WARN'))
      .sort((a, b) => {
        const order = { ERROR: 0, WARN: 1, INFO: 2 };
        if (order[a.severity] !== order[b.severity]) return order[a.severity] - order[b.severity];
        return (a.number || 0) - (b.number || 0);
      });

    if (sorted.length === 0) {
      console.log(`  ${GREEN}이슈 없음${RESET}`);
      continue;
    }

    for (const issue of sorted) {
      const c = sevColor[issue.severity] || '';
      const detail = formatDetail(issue.code, issue.detail);
      console.log(`  ${c}[${issue.severity}]${RESET} ${BOLD}Q${issue.number}${RESET} ${issue.code}${detail ? ' — ' + detail : ''}`);
    }
  }

  console.log(`\n${BOLD}=== Summary ===${RESET}`);
  console.log(`  Rounds: ${results.length}  ·  Questions: ${totalQ}`);
  console.log(`  ${RED}Errors: ${totalErr}${RESET}  ·  ${YELLOW}Warnings: ${totalWarn}${RESET}`);
  if (totalErr === 0 && totalWarn === 0) {
    console.log(`  ${GREEN}모든 회차 통과 ✅${RESET}`);
  } else if (totalErr === 0) {
    console.log(`  ${YELLOW}WARNING 만 있음 — strict 가 아니면 통과 처리됨${RESET}`);
  } else {
    console.log(`  ${RED}수정 필요${RESET}`);
  }
}

function formatDetail(code, d) {
  if (!d) return '';
  switch (code) {
    case 'BAD_SUBJECT': return `subject="${d.value}"`;
    case 'BAD_NUMBER': return `number=${d.value}`;
    case 'WRONG_OPTION_COUNT': return `options.length=${d.count}`;
    case 'BAD_CORRECT_INDEX': return `correctIndex=${d.value} (${d.reason})`;
    case 'DUPLICATE_NUMBER': return `number=${d.number}`;
    case 'RAW_MARKDOWN': return `${d.boldCount} bold pattern(s)`;
    case 'NTILE_OUT_OF_RANGE': return `NTILE(${d.n}) but options have out-of-range numbers: ${d.outOfRange.join(', ')}`;
    case 'TUPLE_IN_OR_ANSWER': return `tuple IN with OR answer "${d.correct}"`;
    case 'SUSPICIOUS_NOTE': return `"${d.phrase}..."`;
    case 'EMPTY_EXPLANATION': return '';
    case 'SHORT_EXPLANATION': return `length=${d.length}`;
    case 'MISSING_REFERENCES': return d.hint;
    case 'ROWNUM_EQ_TRAP': return `ROWNUM = ${d.value} (Oracle 에서 항상 0건)`;
    case 'NOT_IN_NULL_TRAP': return 'NOT IN with NULL data but explanation does not mention NULL';
    case 'ABSTRACT_OPTIONS': return `평균 옵션 길이=${d.avgLength}자, SQL 키워드 부재`;
    case 'HTML_IN_OPTIONS': return `optionIndices=[${d.optionIndices.join(',')}]`;
    default: return JSON.stringify(d);
  }
}

main();
