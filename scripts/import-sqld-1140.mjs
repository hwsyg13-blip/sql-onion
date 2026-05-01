// Import sqld_quiz_with_images_1140.json:
// 1. Extract all images (questionImages, choiceImages, explanationImage) to public/sqld-images/{key}.png
// 2. Convert each question to standard mock format
// 3. Save to scripts/authored/sqld-quiz-1140.json

import fs from 'node:fs';
import path from 'node:path';

const SRC = 'C:/Users/hwsyg/Downloads/sqld_quiz_with_images_1140.json';
const IMG_DIR = 'public/sqld-images';
const OUT = 'scripts/authored/sqld-quiz-1140.json';

if (!fs.existsSync(IMG_DIR)) fs.mkdirSync(IMG_DIR, { recursive: true });

const raw = JSON.parse(fs.readFileSync(SRC, 'utf-8'));
console.log(`Loaded ${raw.length} questions from ${SRC}`);

const SUBJECT_MAP = { '1': '1과목', '2': '2과목' };

// Map original Korean category to chapter (best-effort)
const CATEGORY_TO_CHAPTER = {
  '데이터베이스 개념': '데이터 모델 개념',
  'ER 모델링': '엔터티',
  '엔터티': '엔터티',
  '속성': '속성',
  '관계': '관계',
  '식별자': '식별자',
  '정규화': '정규화',
  'SQL 기본': '관계형 DB와 SELECT',
  '관계형 DB와 SELECT': '관계형 DB와 SELECT',
  'SELECT 문': '관계형 DB와 SELECT',
  'WHERE': 'WHERE',
  '단일행 함수': '함수',
  '함수': '함수',
  'NULL': '함수',
  'GROUP BY': 'GROUP BY·HAVING',
  'HAVING': 'GROUP BY·HAVING',
  '집계 함수': '그룹 함수',
  '그룹 함수': '그룹 함수',
  'ORDER BY': 'ORDER BY',
  'JOIN': '조인',
  '조인': '조인',
  '표준 조인': '표준 조인',
  '집합 연산자': '집합 연산자',
  '계층형 질의': '계층형 질의',
  '서브쿼리': '서브쿼리',
  '윈도우 함수': '윈도우 함수',
  'TOP N 쿼리': 'TOP N 쿼리',
  'DML': 'DML',
  'DDL': 'DDL',
  'DCL': 'DCL·TCL',
  'TCL': 'DCL·TCL',
  '절차형 SQL': '절차형 SQL',
  '정규 표현식': '정규 표현식',
  '인덱스': '관계형 DB와 SELECT',
  '옵티마이저': '관계형 DB와 SELECT',
};

// Save image data URL to file. Returns relative path /sqld-images/{key}.png
// 입력 형태 2가지:
//   - { key, dataUrl } 객체 (questionImages, explanationImage)
//   - 'data:image/png;base64,...' 문자열 그대로 (choiceImages, key 없음 → fallbackKey 필수)
function saveImage(keyOrObj, dataUrlOrUndef, fallbackKey) {
  let key, dataUrl;
  if (typeof keyOrObj === 'string' && keyOrObj.startsWith('data:image/')) {
    // string 직접: keyOrObj 가 data URL
    dataUrl = keyOrObj;
    key = fallbackKey;
  } else {
    key = keyOrObj;
    dataUrl = dataUrlOrUndef;
  }
  if (!key || !dataUrl) return null;
  const m = dataUrl.match(/^data:image\/(\w+);base64,(.+)$/);
  if (!m) return null;
  const ext = m[1] === 'jpeg' ? 'jpg' : m[1];
  const fname = `${key}.${ext}`;
  const filePath = path.join(IMG_DIR, fname);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, Buffer.from(m[2], 'base64'));
  }
  return `/sqld-images/${fname}`;
}

let imgCount = 0;
const out = [];

for (const q of raw) {
  // Build references from passage / images
  const references = [];

  // passage (text context)
  if (q.passage && q.passage.trim()) {
    references.push({ type: 'text', content: q.passage.trim() });
  }

  // questionImages → image references
  if (q.questionImages && q.questionImages.length > 0) {
    for (const img of q.questionImages) {
      const src = saveImage(img.key, img.dataUrl);
      if (src) {
        references.push({ type: 'image', src, alt: `문항 이미지 ${img.key}` });
        imgCount++;
      }
    }
  }

  // Build options. Each option may have an associated image.
  // q.choiceImages[i] 는 { key, dataUrl } 객체 또는 'data:image/...' 문자열 둘 다 가능.
  // 후자(문자열)인 경우 key 가 없어 fallback 으로 'sqld-{id}-c{i+1}' 사용.
  const optionReferences = q.choiceImages && q.choiceImages.some(c => c)
    ? q.choiceImages.map((ci, idx) => {
        if (!ci) return [];
        const fallback = `sqld-${String(q.id).padStart(4, '0')}-c${idx + 1}`;
        const src = typeof ci === 'string'
          ? saveImage(ci, undefined, fallback)
          : saveImage(ci.key || fallback, ci.dataUrl);
        if (!src) return [];
        imgCount++;
        return [{ type: 'image', src, alt: `보기 ${idx + 1} 이미지` }];
      })
    : null;

  // explanationImage → embed in explanation text via a special note (or reference, but we attach to references for now)
  let explanation = q.explanation && q.explanation !== '해설이 아직 등록되지 않았습니다.' ? q.explanation : '';
  if (q.explanationImage) {
    const src = saveImage(q.explanationImage.key, q.explanationImage.dataUrl);
    if (src) {
      // Prepend a note to explanation that an image accompanies it (image stored as ref too)
      references.push({ type: 'image', src, alt: '해설 이미지' });
      imgCount++;
    }
  }

  // answerCount > 1 (multiple correct) — keep first as primary
  const correctIndex = parseInt(String(q.answer).split(/[ ,]/)[0], 10) - 1;
  if (Number.isNaN(correctIndex) || correctIndex < 0 || correctIndex > 3) continue;

  // Skip questions without 4 options
  if (!q.choices || q.choices.length !== 4) continue;

  const entry = {
    _id: `sqld-${String(q.id).padStart(4, '0')}`,
    _source: 'sqld-1140',
    _category: q.category,
    _correctRate: q.correctRate,
    subject: SUBJECT_MAP[q.subject] || '2과목',
    chapter: CATEGORY_TO_CHAPTER[q.category] || q.category,
    title: q.question,
    options: q.choices,
    correctIndex,
    explanation: explanation || `정답은 ${correctIndex + 1} 번. (해설 미등록)`,
  };
  if (references.length > 0) entry.references = references;
  if (optionReferences) entry.optionReferences = optionReferences;
  if (q.answerCount > 1) entry._multiAnswer = q.answer;

  out.push(entry);
}

// Save converted JSON
const wrapper = {
  source: 'sqld-1140',
  version: 1,
  notes: `SQLD 기출/예상 문제 1140 문항 (외부 출처). 이미지 ${imgCount} 개를 public/sqld-images/ 에 추출 후 path 로 참조.`,
  authored: out
};

fs.writeFileSync(OUT, JSON.stringify(wrapper, null, 2) + '\n');

console.log(`\n=== Conversion done ===`);
console.log(`Output: ${OUT} (${out.length} questions)`);
console.log(`Images extracted: ${imgCount} (in ${IMG_DIR})`);
console.log(`Skipped (4-option / parse): ${raw.length - out.length}`);
