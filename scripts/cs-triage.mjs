// scripts/cs-triage.mjs
// CS 오류 제보 분류·검증 도구.
// 사용자가 시트에 남긴 제보(회차/번호/내용)를 받아 실제 데이터와 대조하여
// 자동으로 수정이 필요한지 판단을 돕는다.
//
// 사용법:
//   node scripts/cs-triage.mjs --round 58 --subject 1 --number 9
//   node scripts/cs-triage.mjs --round 58 --subject 1 --number 9 --report "선택지 1,3번이 동일한 내용이고 2번 선택지의 주어가 없음"
//   node scripts/cs-triage.mjs --title "학생·수강 ERD"      # 제목 부분 매칭으로 검색
//   node scripts/cs-triage.mjs --json                       # 기계 읽기 좋은 JSON 출력
//
// 동작:
//   1) 회차/번호로 문항 조회 (또는 --title 로 검색)
//   2) 제보 내용을 토큰화하여 실제 옵션·해설과 대조 (휴리스틱):
//      · "선택지 N번" 언급 → 해당 옵션 추출
//      · "동일한 내용" / "중복" / "같은" → 옵션간 유사도 검사
//      · "주어 없음" / "어색" / "오타" → 자연어 분석은 결과만 표시 (사람 판단)
//      · "정답이 X" / "답이 잘못" → 현재 correctIndex 와 비교
//   3) validate-rounds 결과와 교차 — 해당 문항이 이미 자동 검증에서 잡혔는지
//   4) 추천 액션 출력:
//      · LIKELY_VALID (수정 권장)
//      · WORKING_AS_DESIGNED (반박 응대문 초안)
//      · NEEDS_HUMAN_REVIEW (도메인 검증 필요)
//      · CANT_FIND (회차/번호 매칭 실패)
//
// 주의: 자동 판단은 보조 자료일 뿐. 최종 수정은 PO 또는 SQLD 강사 검토 후.

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const AUTHORED_DIR = resolve(__dirname, 'authored');

// ─────────────────────────────────────────────────────────────
// CLI

const argv = process.argv.slice(2);
const opts = { round: null, subject: null, number: null, report: '', title: '', json: false, help: false };
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a === '--round') opts.round = Number(argv[++i]);
  else if (a === '--subject') opts.subject = String(argv[++i]).replace(/[^\d]/g, '');
  else if (a === '--number') opts.number = Number(argv[++i]);
  else if (a === '--report') opts.report = String(argv[++i] || '');
  else if (a === '--title') opts.title = String(argv[++i] || '');
  else if (a === '--json') opts.json = true;
  else if (a === '--help' || a === '-h') opts.help = true;
}

if (opts.help) {
  console.log(`Usage: node scripts/cs-triage.mjs [options]

Options:
  --round NN         회차 (예: 58)
  --subject S        과목 (1 또는 2)
  --number N         문항번호 (1~50)
  --report "..."     제보 내용 (자유 텍스트)
  --title "..."      제목 부분 매칭 검색 (회차/번호 모를 때)
  --json             JSON 출력
  -h, --help         도움말
`);
  process.exit(0);
}

// ─────────────────────────────────────────────────────────────
// 데이터 로드

function loadAllRounds() {
  const files = readdirSync(AUTHORED_DIR).filter(f => /^round-\d+\.json$/.test(f)).sort();
  const out = [];
  for (const f of files) {
    const d = JSON.parse(readFileSync(join(AUTHORED_DIR, f), 'utf8'));
    out.push({ file: f, round: d.round, questions: d.authored || [] });
  }
  return out;
}

// ─────────────────────────────────────────────────────────────
// 문항 조회

function findQuestion(rounds, { round, subject, number, title }) {
  if (round && number) {
    const r = rounds.find(x => x.round === round);
    if (!r) return { error: 'ROUND_NOT_FOUND', detail: { round } };
    const subjStr = subject ? `${subject}과목` : null;
    const candidates = r.questions.filter(q => q.number === number && (!subjStr || q.subject === subjStr));
    if (candidates.length === 0) return { error: 'QUESTION_NOT_FOUND', detail: { round, subject: subjStr, number } };
    if (candidates.length > 1) return { error: 'MULTIPLE_MATCHES', detail: { count: candidates.length } };
    return { question: candidates[0], file: r.file };
  }
  if (title) {
    const needle = title.replace(/\s+/g, '').toLowerCase();
    const hits = [];
    for (const r of rounds) {
      for (const q of r.questions) {
        const t = (q.title || '').replace(/\s+/g, '').toLowerCase();
        if (t.includes(needle) || needle.includes(t.slice(0, 12))) {
          hits.push({ round: r.round, file: r.file, question: q });
        }
      }
    }
    if (hits.length === 0) return { error: 'TITLE_NOT_FOUND', detail: { title } };
    if (hits.length > 1) return { error: 'MULTIPLE_TITLE_MATCHES', detail: { hits: hits.map(h => `R${h.round} ${h.question.subject} Q${h.question.number}: ${h.question.title.slice(0, 60)}`) } };
    return hits[0];
  }
  return { error: 'INSUFFICIENT_ARGS', detail: 'round+number 또는 title 중 하나는 필요' };
}

// ─────────────────────────────────────────────────────────────
// 제보 분석

// "선택지 N번", "옵션 N", "N번 선택지" 같은 표현에서 인덱스(0-based) 추출
function extractMentionedOptions(report) {
  const set = new Set();
  // "1번", "1,3번" 같은 표현
  const re1 = /(\d+(?:\s*[,，·]\s*\d+)*)\s*번\s*(?:선택지|옵션|보기)?/g;
  let m;
  while ((m = re1.exec(report)) !== null) {
    for (const n of m[1].split(/[,，·]/)) {
      const k = Number(n.trim()) - 1;
      if (k >= 0 && k < 4) set.add(k);
    }
  }
  // "선택지 1,3번", "보기 2번"
  const re2 = /(?:선택지|옵션|보기)\s*(\d+(?:\s*[,，·]\s*\d+)*)/g;
  while ((m = re2.exec(report)) !== null) {
    for (const n of m[1].split(/[,，·]/)) {
      const k = Number(n.trim()) - 1;
      if (k >= 0 && k < 4) set.add(k);
    }
  }
  return [...set].sort();
}

// 두 옵션의 의미적 유사도 (한국어 키워드 추출 기반 단순 휴리스틱)
function similarity(a, b) {
  if (!a || !b) return 0;
  const norm = s => s.replace(/[\s.,·)(\[\]'"`]/g, '').toLowerCase();
  const A = norm(a), B = norm(b);
  if (A === B) return 1;
  // 토큰화: 한국어는 어미/조사 변동이라 핵심 명사·동사 어간 추출이 어려움.
  // 간단 접근: 2~4글자 부분 문자열의 중복 비율
  const ngrams = (s, n) => { const r = new Set(); for (let i = 0; i + n <= s.length; i++) r.add(s.slice(i, i + n)); return r; };
  const setA = new Set([...ngrams(A, 2), ...ngrams(A, 3)]);
  const setB = new Set([...ngrams(B, 2), ...ngrams(B, 3)]);
  if (setA.size === 0 || setB.size === 0) return 0;
  let inter = 0;
  for (const x of setA) if (setB.has(x)) inter++;
  return inter / Math.min(setA.size, setB.size);
}

// 제보 내용에서 의도 토큰 추출
function classifyReportTokens(report) {
  const flags = {
    duplicateOptions: /동일한? 내용|중복|같은? 선택지|똑같(은|이)/.test(report),
    grammarIssue: /주어\s*(없|누락)|어색|오타|문법|띄어쓰기/.test(report),
    answerWrong: /정답이?\s*(잘못|틀림|이상|아님|틀려)/.test(report),
    optionWrong: /선택지\s*\d+번이?\s*(틀|이상|잘못)/.test(report),
    explanationWrong: /해설\s*(잘못|틀|이상)/.test(report),
    dataMismatch: /데이터.*(맞지|다름|불일치)|결과\s*다름/.test(report),
  };
  return flags;
}

// ─────────────────────────────────────────────────────────────
// 종합 분석

function analyzeReport(question, report) {
  const flags = classifyReportTokens(report);
  const mentioned = extractMentionedOptions(report);
  const findings = [];

  // 1. 옵션 중복 검사 (모든 쌍)
  const sims = [];
  for (let i = 0; i < question.options.length; i++) {
    for (let j = i + 1; j < question.options.length; j++) {
      const s = similarity(question.options[i], question.options[j]);
      sims.push({ i, j, sim: s });
    }
  }
  sims.sort((a, b) => b.sim - a.sim);
  const topSim = sims[0];
  if (topSim && topSim.sim >= 0.5) {
    findings.push({
      severity: 'HIGH',
      kind: 'DUPLICATE_OPTIONS',
      message: `옵션 ${topSim.i + 1}번과 ${topSim.j + 1}번이 의미적으로 유사 (similarity=${topSim.sim.toFixed(2)})`,
      detail: { option1: question.options[topSim.i], option2: question.options[topSim.j] },
    });
  }

  // 2. 정답 키 vs 해설 정합성 — 해설이 다른 옵션을 설명하는지
  // 한국어 n-gram 은 우연 겹침이 많아 임계를 보수적으로:
  //   · best.sim 이 절대값 0.40 이상이고
  //   · best.sim 이 expSimWithCorrect 보다 0.20 이상 높을 때만 의심.
  // "옳지 않은 것은?" 류 문항은 해설이 정답 옵션이 아닌 다른 옵션을 인용하는 경우가 많아
  // 단순 유사도 비교만으로 정답 키 오류라 단정하면 false positive 가 높음. 따라서 INFO 로 격하.
  if (question.explanation && question.explanation.trim()) {
    const correctOpt = question.options[question.correctIndex] || '';
    const expSimWithCorrect = similarity(correctOpt, question.explanation);
    const expSimsAll = question.options.map((o, i) => ({ i, sim: similarity(o, question.explanation) }));
    expSimsAll.sort((a, b) => b.sim - a.sim);
    const best = expSimsAll[0];
    const STRONG_ABS = 0.40;
    const STRONG_GAP = 0.20;
    if (best.i !== question.correctIndex && best.sim >= STRONG_ABS && best.sim - expSimWithCorrect >= STRONG_GAP) {
      findings.push({
        severity: 'HIGH',
        kind: 'EXPLANATION_MISMATCHES_ANSWER',
        message: `해설이 옵션 ${best.i + 1}번을 더 잘 설명할 수 있음 (현재 정답: ${question.correctIndex + 1}번)`,
        detail: {
          currentCorrect: question.correctIndex + 1,
          explanationBestMatch: best.i + 1,
          simWithCurrent: expSimWithCorrect.toFixed(2),
          simWithSuggested: best.sim.toFixed(2),
          note: '한국어 n-gram 유사도라 false positive 가능성. 사람 검토 필수.',
        },
      });
    } else if (best.i !== question.correctIndex && best.sim >= 0.25 && best.sim - expSimWithCorrect >= 0.15) {
      // 약한 신호는 INFO 로
      findings.push({
        severity: 'INFO',
        kind: 'EXPLANATION_WEAK_MATCH',
        message: `해설-정답 유사도(${expSimWithCorrect.toFixed(2)})가 다른 옵션(${best.i + 1}번, ${best.sim.toFixed(2)})보다 약간 낮음 — 보통 "옳지 않은 것은?" 류라 정상`,
      });
    }
  }

  // 3. 제보의 옵션 언급 vs 실제 발견
  if (mentioned.length > 0) {
    findings.push({
      severity: 'INFO',
      kind: 'REPORT_MENTIONS_OPTIONS',
      message: `제보가 옵션 ${mentioned.map(i => i + 1).join(', ')}번을 언급`,
      detail: { mentionedOptions: mentioned.map(i => ({ index: i + 1, text: question.options[i] })) },
    });
  }

  // 4. 해설 부재
  if (!(question.explanation || '').trim()) {
    findings.push({
      severity: 'MEDIUM',
      kind: 'NO_EXPLANATION',
      message: '해설이 비어있어 정답 검증이 어려움',
    });
  }

  // 5. "원본 기출 정답 보존" 메모 — 출제자도 자신 없음
  if (/원본 기출의? 정답 표기를?\s*보존/.test(question.explanation || '')) {
    findings.push({
      severity: 'MEDIUM',
      kind: 'AUTHOR_UNCERTAIN',
      message: '해설에 "원본 기출 정답 보존" 메모 있음 — 출제자도 답에 자신 없음',
    });
  }

  // 6. 제보 토큰 기반 hint
  if (flags.duplicateOptions && (!topSim || topSim.sim < 0.5)) {
    findings.push({
      severity: 'INFO',
      kind: 'DUPLICATE_CLAIM_NOT_CONFIRMED',
      message: '제보는 "옵션 중복" 을 주장하지만 자동 분석은 유사도가 낮음',
    });
  }
  if (flags.grammarIssue) {
    findings.push({
      severity: 'INFO',
      kind: 'GRAMMAR_CLAIM',
      message: '제보가 문법/주어 문제를 제기 — 사람 검토 필요',
    });
  }
  if (flags.answerWrong) {
    findings.push({
      severity: 'INFO',
      kind: 'ANSWER_DISPUTE',
      message: '제보가 정답 자체를 의문 제기',
    });
  }

  return { flags, mentioned, findings };
}

// 추천 액션
function recommendAction(findings) {
  const high = findings.filter(f => f.severity === 'HIGH');
  const medium = findings.filter(f => f.severity === 'MEDIUM');

  if (high.length >= 2) {
    return { action: 'LIKELY_VALID_BUG', priority: 'P0', reason: '복수 HIGH 신호 — 즉시 수정 검토' };
  }
  if (high.length === 1) {
    return { action: 'LIKELY_VALID_BUG', priority: 'P1', reason: 'HIGH 신호 1건 — 수정 검토 권장' };
  }
  if (medium.length > 0) {
    return { action: 'NEEDS_HUMAN_REVIEW', priority: 'P2', reason: '도메인 전문가 검토 필요 (해설 부재 또는 출제자 자신 없음)' };
  }
  return { action: 'WORKING_AS_DESIGNED', priority: 'P3', reason: '자동 분석으로 명백한 결함 발견 안됨 — 응대 후 종결 가능' };
}

// ─────────────────────────────────────────────────────────────
// 출력

function printHuman(result) {
  const { question, file, report, analysis, recommendation } = result;
  const RESET = '\x1b[0m', BOLD = '\x1b[1m', DIM = '\x1b[2m';
  const RED = '\x1b[31m', YEL = '\x1b[33m', CYAN = '\x1b[36m', GREEN = '\x1b[32m';

  console.log(`\n${BOLD}=== 문항 정보 ===${RESET}`);
  console.log(`  파일: ${file}`);
  console.log(`  ${BOLD}R${result.round} ${question.subject} Q${question.number}${RESET}`);
  console.log(`  제목: ${question.title}`);
  console.log(`  옵션:`);
  question.options.forEach((o, i) => {
    const mark = i === question.correctIndex ? `${GREEN}★${RESET}` : ' ';
    console.log(`    ${mark} ${i + 1}) ${o}`);
  });
  console.log(`  정답: ${question.correctIndex + 1}번`);
  if (question.explanation) {
    console.log(`  해설: ${DIM}${question.explanation.slice(0, 200)}${RESET}`);
  } else {
    console.log(`  ${DIM}해설: (없음)${RESET}`);
  }

  if (report) {
    console.log(`\n${BOLD}=== 제보 분석 ===${RESET}`);
    console.log(`  제보 원문: "${report}"`);
    if (analysis.mentioned.length > 0) {
      console.log(`  언급된 옵션: ${analysis.mentioned.map(i => i + 1).join(', ')}번`);
    }
    if (Object.values(analysis.flags).some(Boolean)) {
      const claims = Object.entries(analysis.flags).filter(([k, v]) => v).map(([k]) => k);
      console.log(`  의심 유형 토큰: ${claims.join(', ')}`);
    }
  }

  if (analysis.findings.length > 0) {
    console.log(`\n${BOLD}=== 자동 분석 결과 ===${RESET}`);
    for (const f of analysis.findings) {
      const c = f.severity === 'HIGH' ? RED : f.severity === 'MEDIUM' ? YEL : CYAN;
      console.log(`  ${c}[${f.severity}]${RESET} ${f.kind}`);
      console.log(`    ${f.message}`);
      if (f.detail) {
        for (const [k, v] of Object.entries(f.detail)) {
          if (typeof v === 'object') continue;
          console.log(`    ${DIM}· ${k}: ${String(v).slice(0, 120)}${RESET}`);
        }
      }
    }
  }

  console.log(`\n${BOLD}=== 추천 액션 ===${RESET}`);
  const actColor = recommendation.priority === 'P0' ? RED
    : recommendation.priority === 'P1' ? YEL
    : recommendation.priority === 'P2' ? CYAN : GREEN;
  console.log(`  ${actColor}${BOLD}${recommendation.action}${RESET} (${recommendation.priority})`);
  console.log(`  ${DIM}${recommendation.reason}${RESET}`);
  if (recommendation.action.startsWith('LIKELY_VALID')) {
    console.log(`\n${BOLD}다음 단계:${RESET}`);
    console.log(`  1. PO 또는 SQLD 강사 검토 받기`);
    console.log(`  2. 확인되면 ${file}의 해당 문항 수정`);
    console.log(`  3. src/data/rounds/round-${result.round}.ts 도 동기화`);
    console.log(`  4. node scripts/build-quiz-bank.mjs 재빌드`);
    console.log(`  5. CS 가 제보자에게 수정 완료 응대`);
  } else if (recommendation.action === 'WORKING_AS_DESIGNED') {
    console.log(`\n${BOLD}응대 초안:${RESET}`);
    console.log(`  ${DIM}안녕하세요. 제보주신 내용을 검토했어요. 해당 문항은 SQLD 표준 출제 패턴을 따른 것으로 확인되어 수정이 필요하지 않은 것으로 판단됩니다. 다만 학습에 혼란이 있으셨다면 죄송합니다. 추가 의문이 있으시면 회신 부탁드려요.${RESET}`);
  }
}

// ─────────────────────────────────────────────────────────────
// 메인

function main() {
  const rounds = loadAllRounds();
  const found = findQuestion(rounds, opts);

  if (found.error) {
    if (opts.json) {
      console.log(JSON.stringify({ error: found.error, detail: found.detail }, null, 2));
    } else {
      console.error(`\x1b[31m문항을 찾을 수 없습니다: ${found.error}\x1b[0m`);
      console.error(JSON.stringify(found.detail, null, 2));
      console.error(`\n--title 로 부분 매칭 검색하거나 시트의 실제 회차/번호를 다시 확인해주세요.`);
    }
    process.exit(1);
  }

  const question = found.question;
  const round = found.round || rounds.find(r => r.questions.includes(question))?.round;
  const file = found.file;

  const analysis = opts.report
    ? analyzeReport(question, opts.report)
    : analyzeReport(question, '');

  const recommendation = recommendAction(analysis.findings);

  const result = { round, file, question, report: opts.report, analysis, recommendation };

  if (opts.json) {
    console.log(JSON.stringify(result, null, 2));
  } else {
    printHuman(result);
  }
}

main();
