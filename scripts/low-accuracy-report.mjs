#!/usr/bin/env node
// 문항별 정답률 → 정답률 낮은 문항 재점검 목록
//
// 사이트는 답을 고른 문항마다 GA4 이벤트 question_answer {qid, correct, chosen, mode} 를 보낸다
// (src/lib/analytics.ts trackAnswer). GA4 탐색 분석에서 qid·correct·chosen 별 이벤트 수를 CSV 로
// 내려받아 이 스크립트에 넣으면, 정답률이 기준 미만인 문항을 문항 내용과 함께 정리한다.
// 받는 법: docs/qa/answer-stats-howto.md
//
// 사용:
//   node scripts/low-accuracy-report.mjs <GA4-export.csv> [--threshold 25] [--min 20]
//
// 출력:
//   docs/qa/low-accuracy-<날짜>.md      사람이 읽는 점검 목록
//   scripts/audit/low-accuracy.json     check-question-quality.mjs 가 읽는 목록 (점검 전 문항은 경고)
//
// 점검을 마친 문항은 scripts/audit/low-accuracy-reviewed.json 에 {"R57-2-45": "사유"} 로 적는다.
// (원래 어려운 문항이라 정답률이 낮은 것도 정상 — 문제·보기·정답·해설이 맞는지 확인했다는 기록)

import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs';

const args = process.argv.slice(2);
const file = args.find(a => !a.startsWith('--'));
const opt = (name, def) => { const i = args.indexOf(`--${name}`); return i >= 0 ? Number(args[i + 1]) : def; };
const THRESHOLD = opt('threshold', 25);
const MIN = opt('min', 20);
if (!file) {
  console.error('사용: node scripts/low-accuracy-report.mjs <GA4-export.csv> [--threshold 25] [--min 20]');
  process.exit(1);
}

// ── CSV 읽기: GA4 내보내기는 앞에 # 주석 줄이 붙는다. 열 이름으로 찾는다.
function parseCsv(text) {
  const rows = [];
  for (const line of text.split(/\r?\n/)) {
    if (!line.trim() || line.startsWith('#')) continue;
    const cells = []; let cur = ''; let q = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (q) { if (c === '"' && line[i + 1] === '"') { cur += '"'; i++; } else if (c === '"') q = false; else cur += c; }
      else if (c === '"') q = true; else if (c === ',') { cells.push(cur); cur = ''; } else cur += c;
    }
    cells.push(cur); rows.push(cells.map(s => s.trim()));
  }
  return rows;
}
const rows = parseCsv(readFileSync(file, 'utf8'));
const header = rows.shift().map(h => h.toLowerCase());
const col = (...names) => header.findIndex(h => names.some(n => h === n || h.includes(n)));
const iQid = col('qid');
const iCorrect = col('correct');
const iChosen = col('chosen');
const iCount = col('event count', '이벤트 수', 'count', 'attempts');
if (iQid < 0 || iCount < 0) {
  console.error(`열을 찾지 못했다. 필요한 열: qid, 이벤트 수(Event count). 받은 머리글: ${header.join(', ')}`);
  process.exit(1);
}

const stats = {};
for (const r of rows) {
  const qid = r[iQid]; if (!qid || qid === '(not set)') continue;
  const n = Number(String(r[iCount]).replace(/,/g, '')) || 0;
  const s = (stats[qid] ||= { attempts: 0, correct: 0, chosen: {} });
  s.attempts += n;
  if (iCorrect >= 0 && String(r[iCorrect]) === '1') s.correct += n;
  if (iChosen >= 0 && r[iChosen]) s.chosen[r[iChosen]] = (s.chosen[r[iChosen]] || 0) + n;
}

// ── 문항 내용 찾기: 기출 R{회}-{과목}-{번호}, 모의고사 풀 M{번호}
const mockNo = JSON.parse(readFileSync('scripts/mock-numbers.json', 'utf8'));
const lookup = {};
for (const f of readdirSync('scripts/authored').filter(f => f.endsWith('.json'))) {
  const d = JSON.parse(readFileSync(`scripts/authored/${f}`, 'utf8'));
  const items = d.authored || d.items || d.questions || [];
  const round = (f.match(/^round-(\d+)\.json$/) || [])[1];
  for (const q of items) {
    const subj = String(q.subject || '').replace(/\D/g, '');
    if (round) lookup[`R${round}-${subj}-${q.number}`] = { ...q, file: f };
    else if (q._id && mockNo[q._id]) lookup[`M${mockNo[q._id]}`] = { ...q, file: f };
  }
}

const CIRCLE = ['①', '②', '③', '④', '⑤'];
const low = Object.entries(stats)
  .map(([qid, s]) => ({ qid, ...s, accuracy: s.attempts ? Math.round((s.correct / s.attempts) * 1000) / 10 : 0 }))
  .filter(x => x.attempts >= MIN && x.accuracy < THRESHOLD)
  .sort((a, b) => a.accuracy - b.accuracy || b.attempts - a.attempts);

let reviewed = {};
try { reviewed = JSON.parse(readFileSync('scripts/audit/low-accuracy-reviewed.json', 'utf8')); } catch {}

const today = new Date(Date.now() + 9 * 3600e3).toISOString().slice(0, 10);
const items = low.map(x => {
  const q = lookup[x.qid];
  const top = Object.entries(x.chosen).sort((a, b) => b[1] - a[1])[0];
  return {
    qid: x.qid, attempts: x.attempts, accuracy: x.accuracy,
    topChoice: top ? Number(top[0]) : null,
    topChoiceShare: top && x.attempts ? Math.round((top[1] / x.attempts) * 100) : null,
    answer: q ? q.correctIndex + 1 : null,
    title: q ? q.title : null,
    file: q ? q.file : null,
  };
});

mkdirSync('scripts/audit', { recursive: true });
writeFileSync('scripts/audit/low-accuracy.json', JSON.stringify({ generatedAt: today, source: file.split(/[\\/]/).pop(), threshold: THRESHOLD, minAttempts: MIN, items }, null, 2) + '\n');

const md = [
  `# 정답률 낮은 문항 재점검 목록 (${today})`,
  '',
  `- 기준: 정답률 ${THRESHOLD}% 미만, 응답 ${MIN}건 이상 · 원자료: ${file.split(/[\\/]/).pop()}`,
  `- 전체 ${Object.keys(stats).length}문항 중 ${items.length}문항 해당`,
  '- 점검 순서: ① 사람 입장에서 직접 풀어 본다 ② 정답이 하나로 도출되는지 ③ 가장 많이 고른 오답이 사실은 맞는 답은 아닌지 ④ 문제·자료·보기 표기 오류 ⑤ 해설이 그 오답을 왜 틀렸는지 설명하는지',
  '- 점검 후: 고쳤으면 PR, 원래 어려운 문항이면 `scripts/audit/low-accuracy-reviewed.json` 에 사유 기록',
  '',
  '| 문항 | 응답 | 정답률 | 정답 | 가장 많이 고른 답 | 점검 | 문제 |',
  '|---|---:|---:|:-:|:-:|:-:|---|',
  ...items.map(x => `| ${x.qid} | ${x.attempts} | ${x.accuracy}% | ${x.answer ? CIRCLE[x.answer - 1] : '?'} | ${x.topChoice ? `${CIRCLE[x.topChoice - 1]} ${x.topChoiceShare}%` : '-'} | ${reviewed[x.qid] ? '완료' : '대기'} | ${(x.title || '(문항을 찾지 못함)').replace(/\|/g, '\\|').slice(0, 60)} |`),
  '',
].join('\n');
mkdirSync('docs/qa', { recursive: true });
writeFileSync(`docs/qa/low-accuracy-${today}.md`, md);

console.log(`문항 ${Object.keys(stats).length}개 집계 → 정답률 ${THRESHOLD}% 미만(응답 ${MIN}건 이상) ${items.length}개`);
for (const x of items.slice(0, 20)) console.log(`  ${x.qid}  ${x.accuracy}% (${x.attempts}건)  정답 ${x.answer ?? '?'} / 최다 선택 ${x.topChoice ?? '-'}  ${(x.title || '').slice(0, 40)}`);
console.log(`→ docs/qa/low-accuracy-${today}.md, scripts/audit/low-accuracy.json`);
