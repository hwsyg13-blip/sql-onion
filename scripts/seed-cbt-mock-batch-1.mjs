// cbt-mock 의 image ref 가진 52문항의 image src 별 md5 hash 를 모두 추출 →
// scripts/cbt-mock-batch-1-conversions.json 의 'groups' 키에 hash → { name, imageKey, refs:[{type:'image',...}] } 초기 placeholder 채움.
// 정독 시 placeholder 의 refs 를 table/sql/text 로 교체하면 됨.

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const SRC = 'scripts/authored/cbt-mock.json';
const OUT = 'scripts/cbt-mock-batch-1-conversions.json';

const data = JSON.parse(fs.readFileSync(SRC, 'utf-8'));
const questions = data.authored || [];

const groups = {};
for (const q of questions) {
  for (const r of (q.references || [])) {
    if (r.type !== 'image' || !r.src) continue;
    const fp = path.join('public', r.src.replace(/^\//, ''));
    if (!fs.existsSync(fp)) {
      console.warn(`MISSING: ${fp}`);
      continue;
    }
    const hash = crypto.createHash('md5').update(fs.readFileSync(fp)).digest('hex').slice(0, 12);
    if (groups[hash]) continue; // 중복 (어차피 cbt-mock 은 unique 0 이지만 안전망)
    // imageKey 는 src 파일명 베이스 (확장자 제외)
    const imageKey = path.basename(r.src, '.png');
    groups[hash] = {
      name: `${q._id} #${q._origNo} — ${(r.alt || '').replace(/\s+/g, ' ').trim()} [TODO 정독]`,
      imageKey,
      origQuestion: { id: q._id, origNo: q._origNo, subject: q.subject, chapter: q.chapter },
      refs: [
        { type: 'image', src: r.src, alt: r.alt || '', caption: r.caption || null, _todo: true },
      ],
    };
  }
}

const out = {
  schema: 'md5(image content) → 변환된 references 배열. CBT 모의고사 (이기적 209) batch 1 (단일 배치, 52문항/62 image).',
  method: 'Claude 시각 정독 (sharp 3x lanczos3 업스케일) + cross-check + apply-cbt-mock-conversions',
  policy: '표 image → table ref. SQL/text 는 sql/text ref 분리. PK 밑줄 등 보존 필요한 경우 image crop 유지.',
  totalGroups: Object.keys(groups).length,
  groups,
};

fs.writeFileSync(OUT, JSON.stringify(out, null, 2));
console.log(`Wrote ${OUT} with ${Object.keys(groups).length} group placeholders.`);
console.log(`각 group 의 refs 를 정독 결과로 교체하면 됩니다 (현재는 type:'image' placeholder).`);
