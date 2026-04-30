// Import cbt_lic73_177751526*.json (영진닷컴 이기적 CBT 모의고사 license_no=73):
// - 209 문항, 정답 100% 보유, 해설 197/209, 이미지 101장 (base64 inline)
// - PDF 기반 cbt-mock (162문항) 을 완전 교체. 기존 add-cbt*-mock.mjs 는 함께 삭제.
//
// Output:
//   scripts/authored/cbt-mock.json  (덮어쓰기 — pool 이름 'cbt-mock' 유지)
//   public/cbt-images/{filename}.png

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const SRC = 'C:/Users/hwsyg/Downloads/cbt_lic73_1777515261338.json';
const IMG_DIR = 'public/cbt-images';
const OUT = 'scripts/authored/cbt-mock.json';

if (!fs.existsSync(IMG_DIR)) fs.mkdirSync(IMG_DIR, { recursive: true });

const raw = JSON.parse(fs.readFileSync(SRC, 'utf-8'));
console.log(`Loaded ${raw.questions.length} questions from ${SRC}`);

// ---------- helpers ----------

// Save base64 inline image. Returns relative public path or null.
function saveImage(prefix, idx, dataUrl) {
  if (!dataUrl) return null;
  const m = String(dataUrl).match(/^data:image\/(\w+);base64,(.+)$/);
  if (!m) return null;
  const ext = m[1] === 'jpeg' ? 'jpg' : m[1];
  // Use content hash so identical images dedupe automatically
  const buf = Buffer.from(m[2], 'base64');
  const hash = crypto.createHash('md5').update(buf).digest('hex').slice(0, 10);
  const fname = `${prefix}-${idx}-${hash}.${ext}`;
  const filePath = path.join(IMG_DIR, fname);
  if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, buf);
  return `/cbt-images/${fname}`;
}

// Strip zero-width chars + collapse whitespace.
function clean(s) {
  if (!s) return '';
  return String(s)
    .replace(/[​-‍﻿]/g, '') // zero-width spaces
    .replace(/ /g, ' ')               // nbsp → space
    .replace(/\r\n/g, '\n')
    .trim();
}

// Strip simple HTML tags from explanation (safety + readability).
function htmlToText(s) {
  if (!s) return '';
  return clean(s
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'"));
}

// ---------- subject / chapter classifier ----------
// Source has no subject metadata, so we infer from text content.
// Order matters: more-specific patterns first.
const RULES_2 = [
  [/(window|over\s*\(|partition\s+by|rank\s*\(|row[_ ]?number|dense_rank|lag\s*\(|lead\s*\(|first_value|last_value|ntile)/i, '윈도우 함수'],
  [/(group\s+by|having)/i, 'GROUP BY·HAVING'],
  [/(order\s+by)/i, 'ORDER BY'],
  [/(connect\s+by|hierarch|prior\b|level\b|sys_connect_by_path)/i, '계층형 질의'],
  [/(union|intersect|except|minus)\b/i, '집합 연산자'],
  [/(natural\s+join|cross\s+join|using\s*\(|outer\s+join|inner\s+join|^join\b|\sjoin\s)/i, '표준 조인'],
  [/(조인|cartesian|nested\s+loop|hash\s+join|sort\s+merge)/i, '조인'],
  [/(서브쿼리|sub-?query|exists\s*\(|in\s*\(\s*select|all\s*\(\s*select|any\s*\(\s*select|some\s*\(\s*select)/i, '서브쿼리'],
  [/(grant|revoke|commit|rollback|savepoint|transaction|tcl|dcl)/i, 'DCL·TCL'],
  [/(create\s+table|alter\s+table|drop\s+table|truncate|primary\s+key|foreign\s+key|cascade|rename\s+table|constraint)/i, 'DDL'],
  [/(insert\s+into|update\s+\w|delete\s+from|merge\s+into)/i, 'DML'],
  [/(pivot|unpivot)/i, 'TOP N 쿼리'],
  [/(regexp|정규\s*표현식)/i, '정규 표현식'],
  [/(절차형|pl\/sql|trigger|procedure|function\s+\w+\s*\(|cursor)/i, '절차형 SQL'],
  [/(top\s+\d+|rownum|fetch\s+first|row\s+limit|limit\s+\d+)/i, 'TOP N 쿼리'],
  [/(case\s+when|decode\s*\()/i, '함수'],
  [/(avg\s*\(|sum\s*\(|count\s*\(|max\s*\(|min\s*\(|stddev|variance)/i, '그룹 함수'],
  [/(to_char|to_date|to_number|substr|replace\s*\(|nvl|coalesce|abs\s*\(|round\s*\(|trunc\s*\(|floor\s*\(|ceil|mod\s*\(|sign\s*\(|length)/i, '함수'],
  [/(where\s|null\b|is\s+null|is\s+not\s+null)/i, 'WHERE'],
  [/(select\s+|from\s+\w)/i, '관계형 DB와 SELECT'],
];

const RULES_1 = [
  [/(엔터티|entity)/i, '엔터티'],
  [/(속성|attribute)/i, '속성'],
  [/(식별자|identifier|기본키|pk\b|pk\)|주식별자|보조식별자)/i, '식별자'],
  [/(정규화|반정규화|normaliz|함수\s*종속|이행종속)/i, '정규화'],
  [/(관계|relationship|식별\s*관계|비식별)/i, '관계'],
  [/(개념적|논리적|물리적|모델링|model|erd|er\s*다이어그램|스키마|sub-?type|super-?type)/i, '데이터 모델 개념'],
  [/(트랜잭션|transaction)/i, '트랜잭션과 Null'],
];

function classify(q) {
  const text = [
    q.question || '',
    q.passage || '',
    (q.choices || []).map((c) => c.text || '').join(' '),
  ].join(' ');

  for (const [re, ch] of RULES_2) if (re.test(text)) return { subject: '2과목', chapter: ch };
  for (const [re, ch] of RULES_1) if (re.test(text)) return { subject: '1과목', chapter: ch };
  // Default for an exam called "SQL 개발자 필기": likely 2과목 SELECT
  return { subject: '2과목', chapter: '관계형 DB와 SELECT' };
}

// ---------- conversion ----------
let imgCount = 0;
let answerless = 0;
let convertedOk = 0;
const out = [];

for (const q of raw.questions) {
  const id = q.no;
  const prefix = `cbt73-q${String(id).padStart(3, '0')}`;

  // Parse answer ("1" / "2" / "3" / "4" / "1, 3" / "①" — last 2 are sqld-1140 style; this set is plain digits)
  const ansToken = String(q.answer || '').trim().split(/[ ,]/)[0];
  const correctIndex = Number(ansToken) - 1;
  if (!q.answer || Number.isNaN(correctIndex) || correctIndex < 0 || correctIndex > 3) {
    answerless++;
    continue;
  }

  // Build references (from passage text + passage images + explanation images)
  const references = [];
  const passageText = clean(q.passage);
  if (passageText) {
    // If passage looks like SQL (contains SELECT/FROM/INSERT/UPDATE/DELETE on its own line), use 'sql' type.
    const isSql = /(\bSELECT\b|\bFROM\b|\bINSERT\b|\bUPDATE\b|\bDELETE\b|\bCREATE\s+TABLE\b|\bALTER\s+TABLE\b)/i.test(passageText)
      && passageText.split('\n').length <= 30;
    if (isSql) {
      references.push({ type: 'sql', code: passageText });
    } else {
      references.push({ type: 'text', content: passageText });
    }
  }

  if (q.passageImages?.length) {
    q.passageImages.forEach((img, i) => {
      const src = saveImage(`${prefix}-p`, i + 1, img.src);
      if (src) {
        references.push({ type: 'image', src, alt: img.alt || `보기 자료 ${i + 1}` });
        imgCount++;
      }
    });
  }
  if (q.questionImages?.length) {
    q.questionImages.forEach((img, i) => {
      const src = saveImage(`${prefix}-q`, i + 1, img.src);
      if (src) {
        references.push({ type: 'image', src, alt: img.alt || `문항 자료 ${i + 1}` });
        imgCount++;
      }
    });
  }
  if (q.explanationImages?.length) {
    q.explanationImages.forEach((img, i) => {
      const src = saveImage(`${prefix}-e`, i + 1, img.src);
      if (src) {
        references.push({ type: 'image', src, alt: img.alt || `해설 자료 ${i + 1}` });
        imgCount++;
      }
    });
  }

  // Build options + per-option image refs
  const options = [];
  const optionReferences = [[], [], [], []];
  let hasOptImg = false;
  for (let i = 0; i < 4; i++) {
    const c = q.choices?.[i];
    options[i] = clean(c?.text || '');
    if (c?.images?.length) {
      c.images.forEach((img, j) => {
        const src = saveImage(`${prefix}-c${i + 1}`, j + 1, img.src);
        if (src) {
          optionReferences[i].push({ type: 'image', src, alt: img.alt || `보기 ${i + 1} 이미지` });
          imgCount++;
          hasOptImg = true;
        }
      });
    }
  }
  if (options.length !== 4) { answerless++; continue; }
  // If all 4 options are empty text but have images, the option text is still '' (image-only choices) — keep them
  if (options.every((o) => !o) && !hasOptImg) { answerless++; continue; }

  const { subject, chapter } = classify(q);

  const entry = {
    _id: `cbt-${String(id).padStart(3, '0')}`,
    _source: 'cbt-yongjin-209',
    _origNo: id,
    subject,
    chapter,
    title: clean(q.question),
    options,
    correctIndex,
    explanation: htmlToText(q.explanation) || `정답은 ${correctIndex + 1} 번. (해설 미등록)`,
  };
  if (references.length) entry.references = references;
  if (hasOptImg) entry.optionReferences = optionReferences;

  out.push(entry);
  convertedOk++;
}

// Output JSON wrapper
const wrapper = {
  source: 'cbt-yongjin-209',
  version: 2,
  notes: `이기적 CBT, 영진닷컴 SQL 개발자 필기 모의고사 (license_no=73). 209문항 중 ${convertedOk}건 변환 / ${answerless}건 스킵. 이미지 ${imgCount}장 → public/cbt-images/. PDF 기반 cbt-mock (v1, 162문항) 을 완전 교체.`,
  schema: {
    _id: 'cbt-001 ~ cbt-NNN',
    _source: 'cbt-yongjin-209',
    _origNo: '원본 JSON no (1~209)',
    subject: '1과목 | 2과목 (텍스트 휴리스틱 추정)',
    chapter: 'SQLD 표준 출제 영역 (휴리스틱 추정)',
    title: '문항 본문',
    options: '보기 4개',
    correctIndex: '0~3',
    explanation: '해설 (HTML 태그 제거 후 plain text)',
    references: '본문/지문/이미지 references',
    optionReferences: '보기별 image references (이미지 보기인 경우)',
  },
  authored: out,
};

fs.writeFileSync(OUT, JSON.stringify(wrapper, null, 2) + '\n');

console.log(`\n=== Conversion done ===`);
console.log(`Converted: ${convertedOk} / ${raw.questions.length}`);
console.log(`Skipped:   ${answerless}`);
console.log(`Images:    ${imgCount} → ${IMG_DIR}`);
console.log(`Output:    ${OUT}`);
