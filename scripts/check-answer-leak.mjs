// 정답 노출 검수: references 안의 sql/text/html/ascii 등에 정답 옵션이 그대로 박혀있는지
// 사용: node scripts/check-answer-leak.mjs
//
// 제외 규칙
//   1) 같은 참고 블록에 모든 선택지가 함께 들어 있으면 노출로 보지 않는다
//      (선택지를 나란히 나열한 것이라 어느 것이 정답인지 드러나지 않음).
//   2) scripts/audit/answer-leak-reviewed.json 에 사람이 오탐으로 판정한 항목은
//      경고 대신 "검토 완료"로 따로 센다. 판정 사유는 그 파일에 기록한다.

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const AUTHORED_DIR = 'scripts/authored';
const REVIEWED_FILE = 'scripts/audit/answer-leak-reviewed.json';

// 옵션이 백틱·따옴표·코드블럭 안에 들어갈 가능성을 고려해 정규화
function normalize(s) {
  if (typeof s !== 'string') return '';
  return s
    .replace(/[`'"]/g, '')   // 따옴표류 제거
    .replace(/\s+/g, ' ')    // 공백 정규화
    .replace(/\s*([=<>!(),;+*\/-])\s*/g, '$1')  // 연산자·괄호 주변 공백 무시 (예: "번호=11" vs "번호 = 11", R50 2과목 17)
    .trim();
}

// 가중치: 옵션이 너무 짧으면(예: "1", "정답") false positive 많음
function isMeaningful(option) {
  const norm = normalize(option);
  // 한글 2자 이상 또는 영문/특수기호 4자 이상
  if (norm.length < 4) return false;
  // 단순 숫자나 한 단어 정답("정답", "오류" 등)은 제외 — 의미론적 매칭 어려움
  if (/^[\d\s.]+$/.test(norm)) return false;
  return true;
}

function itemKey(file, q) {
  return `${file}|${q.subject}|${q.number ?? q._id}`;
}

const reviewed = new Map();
if (existsSync(REVIEWED_FILE)) {
  for (const entry of JSON.parse(readFileSync(REVIEWED_FILE, 'utf8')).items) {
    reviewed.set(entry.key, entry.reason);
  }
}

const findings = [];
const reviewedHits = new Set();
const files = readdirSync(AUTHORED_DIR).filter(f => f.match(/^round-\d+\.json$|^ai-mock\.json$/)).sort();

for (const file of files) {
  const data = JSON.parse(readFileSync(resolve(AUTHORED_DIR, file), 'utf8'));
  const items = data.authored || data.items || data.questions || [];
  for (const q of items) {
    if (!Array.isArray(q.options) || typeof q.correctIndex !== 'number') continue;
    const correct = q.options[q.correctIndex];
    if (!correct || !isMeaningful(correct)) continue;
    const correctNorm = normalize(correct);
    const optionNorms = q.options.map(normalize);
    if (!Array.isArray(q.references)) continue;

    for (const ref of q.references) {
      // 검사 대상 필드
      const fields = [
        ['sql.code', ref.type === 'sql' && ref.code],
        ['text.content', ref.type === 'text' && ref.content],
        ['ascii.text', ref.type === 'ascii' && ref.text],
        ['html.html', ref.type === 'html' && ref.html],
      ];
      for (const [label, value] of fields) {
        if (!value) continue;
        const refNorm = normalize(value);
        if (!refNorm.includes(correctNorm)) continue;
        if (optionNorms.every(o => o && refNorm.includes(o))) continue;
        const key = itemKey(file, q);
        if (reviewed.has(key)) {
          reviewedHits.add(key);
          continue;
        }
        findings.push({
          file,
          id: q.number ?? q._id,
          subject: q.subject,
          correctIndex: q.correctIndex,
          correct,
          refLabel: label,
          refValue: value.length > 100 ? value.slice(0, 100) + '…' : value,
        });
      }
    }
  }
}

if (findings.length === 0) {
  console.log('✅ 정답 노출 의심 케이스 없음');
} else {
  console.log(`⚠ 정답 노출 의심 ${findings.length}건:\n`);
  for (const f of findings) {
    console.log(`[${f.file.replace('.json','')} #${f.id} (${f.subject})]`);
    console.log(`  정답 (옵션 ${f.correctIndex + 1}): "${f.correct}"`);
    console.log(`  ${f.refLabel}: "${f.refValue}"`);
    console.log();
  }
}
if (reviewedHits.size > 0) {
  console.log(`ℹ 검토 완료(오탐) ${reviewedHits.size}건 — 사유: ${REVIEWED_FILE}`);
}
const stale = [...reviewed.keys()].filter(k => !reviewedHits.has(k));
if (stale.length > 0) {
  console.log(`ℹ 더 이상 걸리지 않는 검토 항목 ${stale.length}건 (정리 대상): ${stale.join(', ')}`);
}
