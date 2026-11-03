#!/usr/bin/env node
// 사람이 풀 수 없는 문항·정답이 드러나는 문항을 찾는 점검 (2026-11-03)
//
// 11-01~11-03 직접 풀기에서 손으로 찾던 유형을 모았다. 자동 판정이 아니라 "사람이 볼 후보"를 뽑는다.
// 각 항목은 실제로 나왔던 사례를 근거로 한다 (괄호 안).
//
//   NO_REF          제목이 "아래 표/설명/ERD…" 를 가리키는데 자료가 없음 (R54 2-19)
//   EXPL_TABLE      캡션 없는 마지막 표 — 해설용 중간·최종 결과표가 문제 자료로 섞임 (M114·M178 등 6건)
//   INTERNAL_NOTE   사용자에게 보이는 곳에 작업 메모 (M615 캡션 "PDF 재검 시 확인")
//   REPEATED_TEXT   같은 글자 자료가 3문항 이상 반복 — 생성기가 돌려 붙인 무관한 문장 (M1081~M1328, 71건)
//   NO_FROM         FROM 없는 상수 SELECT — Oracle(23c 이전) 오류 (M960 등 10건)
//   ANSWER_MISMATCH 해설이 가리키는 정답 번호 ≠ correctIndex (M756)
//   CURLY_SQL       SQL 코드에 굽은 따옴표 (M76 등)
//   HINT_TAIL       보기 끝 " — 설명" 꼬리가 2개 이상 (R57 2-50, R48 2-44)
//
// 사용: node scripts/audit-content.mjs [--all]   (--all: 항목별 전체 목록)
// 검토를 마친 항목은 scripts/audit/content-audit-reviewed.json 에 {"키|코드": "사유"} 로 적으면 빠진다.
// 종료 코드는 항상 0 (점검 보고용). 새 후보 수는 마지막 줄에 나온다.

import { readFileSync, readdirSync, existsSync } from 'node:fs';

const DIR = 'scripts/authored';
const ALL = process.argv.includes('--all');
const mockNo = JSON.parse(readFileSync('scripts/mock-numbers.json', 'utf8'));
const reviewed = existsSync('scripts/audit/content-audit-reviewed.json')
  ? JSON.parse(readFileSync('scripts/audit/content-audit-reviewed.json', 'utf8')) : {};

// 모의고사 풀은 빌드에서 중복 사본이 빠지므로, 실제 풀(ai-mock.ts)에 남은 문항만 본다
const POOL = existsSync('src/data/rounds/ai-mock.ts') ? readFileSync('src/data/rounds/ai-mock.ts', 'utf8') : '';
const inPool = id => !POOL || POOL.includes(`"${id}"`);
const CIRCLE = '①②③④';
const textOf = r => String(r?.content ?? r?.text ?? '');
const items = [];
for (const f of readdirSync(DIR).filter(f => f.endsWith('.json')).sort()) {
  const d = JSON.parse(readFileSync(`${DIR}/${f}`, 'utf8'));
  const round = (f.match(/^round-(\d+)\.json$/) || [])[1];
  for (const q of d.authored || d.items || d.questions || []) {
    const key = round ? `R${round}-${String(q.subject || '').replace(/\D/g, '')}-${q.number}`
      : (q._id && mockNo[q._id] ? `M${mockNo[q._id]}` : null);
    if (!key || !Array.isArray(q.options)) continue;
    if (!round && !inPool(q._id)) continue;
    items.push({ key, q });
  }
}

const found = [];
const add = (key, code, msg) => { if (!reviewed[`${key}|${code}`]) found.push({ key, code, msg }); };

// REPEATED_TEXT 준비
const textCount = {};
for (const { key, q } of items) for (const r of q.references || []) {
  if (r.type !== 'text') continue;
  const t = textOf(r).trim();
  if (t.length < 8 || /\n/.test(t) || /^REGEXP_|^GROUP BY|^SELECT/i.test(t)) continue;
  (textCount[t] ||= []).push(key);
}

for (const { key, q } of items) {
  const refs = q.references || [];
  const optRefs = (q.optionReferences || []).flat().filter(Boolean);
  const title = String(q.title || '');

  if (!refs.length && !optRefs.length && /아래(의)?\s*(표|ERD|테이블|데이터|그림|조건|상황|결과|규칙|업무|스키마)/.test(title))
    add(key, 'NO_REF', title.slice(0, 60));
  if (!refs.length && !optRefs.length && /아래(의)?\s*설명을/.test(title))
    add(key, 'NO_REF', title.slice(0, 60));

  const tables = refs.filter(r => r.type === 'table');
  if (tables.length >= 2 && !tables[tables.length - 1].caption && tables.slice(0, -1).some(t => t.caption))
    add(key, 'EXPL_TABLE', `마지막 표 머리글 ${JSON.stringify(tables[tables.length - 1].headers || [])}`);

  const visible = [title, ...q.options.map(String), ...[...refs, ...optRefs].map(r => `${r.caption || ''} ${textOf(r)} ${r.code || ''}`)];
  for (const v of visible) {
    const m = v.match(/재검|PDF|시각 한계|TODO|FIXME|확인 필요|원본 확인|OCR|파싱 오류/);
    if (m) { add(key, 'INTERNAL_NOTE', v.slice(Math.max(0, m.index - 20), m.index + 30)); break; }
  }

  for (const r of refs) {
    if (r.type !== 'text') continue;
    const t = textOf(r).trim();
    if (textCount[t] && textCount[t].length >= 3) { add(key, 'REPEATED_TEXT', `${t.slice(0, 40)} (×${textCount[t].length})`); break; }
  }

  const codes = [...refs.map(r => r.code || ''), ...q.options.map(String)].join('\n');
  // 문장(;)·집합 연산자 단위로 나눠, FROM 이 전혀 없는 상수 SELECT 만 (EXISTS 안의 SELECT 1 … FROM 은 제외)
  for (const seg of codes.split(/;|\bUNION(?:\s+ALL)?\b|\bMINUS\b|\bINTERSECT\b/i)) {
    if (/\bFROM\b/i.test(seg)) continue;
    if (/^[\s(]*SELECT\s+(?:'[^']*'|\d+)(?:\s+AS\s+\w+)?(?:\s*,\s*(?:'[^']*'|\d+)(?:\s+AS\s+\w+)?)*[\s)]*\w?\s*$/i.test(seg)) {
      add(key, 'NO_FROM', seg.trim().slice(0, 40)); break;
    }
  }

  const e = String(q.explanation || '');
  const mm = e.match(/정답[은는이:]?\s*([①-④]|[1-4]\s*번)|([①-④])\s*(번)?\s*(이|가)?\s*정답|답[은는]\s*([①-④]|[1-4]\s*번)|쿼리는\s*([1-4])\s*번/);
  if (mm) {
    const c = mm[0].match(/[①-④]/); const n = c ? CIRCLE.indexOf(c[0]) : Number((mm[0].match(/[1-4]/) || [])[0]) - 1;
    if (n >= 0 && n !== q.correctIndex) add(key, 'ANSWER_MISMATCH', `정답 ${q.correctIndex + 1} / 해설 "${mm[0]}"`);
  }

  if (/[‘’“”]/.test(refs.map(r => r.code || '').join(''))) add(key, 'CURLY_SQL', 'SQL 코드에 굽은 따옴표');

  const tails = q.options.map(o => (String(o).match(/\s[—–]\s+([^—–]+)$/) || [])[1]).filter(Boolean);
  if (tails.length >= 2 && tails.some(t => /정상|오류|올바|잘못|틀|맞|입력과|모든 값|최고|최저|NULL/.test(t)))
    add(key, 'HINT_TAIL', tails.slice(0, 2).join(' / ').slice(0, 60));
}

const byCode = {};
for (const x of found) (byCode[x.code] ||= []).push(x);
console.log(`문항 ${items.length}개 점검`);
if (!found.length) console.log('✅ 사람이 볼 후보 없음');
for (const [code, list] of Object.entries(byCode)) {
  console.log(`\n⚠ ${code} ${list.length}건`);
  for (const x of (ALL ? list : list.slice(0, 15))) console.log(`  ${x.key}: ${x.msg}`);
  if (!ALL && list.length > 15) console.log(`  … 외 ${list.length - 15}건 (--all)`);
}
console.log(`\n새 후보 ${found.length}건 (검토 완료로 빼려면 scripts/audit/content-audit-reviewed.json)`);
