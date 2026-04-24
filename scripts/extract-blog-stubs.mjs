// Extract all blog questions (with or without full options) → JSON for distractor generation.

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

const BLOG_DIR = 'C:/Users/hwsyg/AppData/Local/Temp/blog';

function extractArticleBody(html) {
  const start = html.indexOf('class="tt_article_useless_p_margin');
  if (start < 0) return '';
  const after = html.indexOf('>', start) + 1;
  const endMarkers = ['<div class="related-articles','<div class="article-footer','<section class="relate','<ul class="article-footer'];
  let end = html.length;
  for (const m of endMarkers) {
    const i = html.indexOf(m, after);
    if (i > 0 && i < end) end = i;
  }
  return html.slice(after, end);
}
function htmlToText(html) {
  html = html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');
  html = html.replace(/<br\s*\/?>/gi, '\n').replace(/<\/(p|div|li|h[1-6]|tr|td|th|table|blockquote|ol|ul)>/gi, '\n').replace(/<(p|div|li|h[1-6]|tr|td|th|table|blockquote|ol|ul)[^>]*>/gi, '\n').replace(/<[^>]+>/g, '');
  const ent = {'&nbsp;':' ','&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&#39;':"'",'&rarr;':'→','&hellip;':'…'};
  for (const [k,v] of Object.entries(ent)) html = html.split(k).join(v);
  html = html.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)));
  return html;
}

const CIRCLED_MAP = { '①': 0, '②': 1, '③': 2, '④': 3 };
const EMOJI_MAP   = { '1️⃣': 0, '2️⃣': 1, '3️⃣': 2, '4️⃣': 3 };
function normalizeMarkers(s) {
  for (const [e, idx] of Object.entries(EMOJI_MAP)) s = s.split(e).join(['①','②','③','④'][idx]);
  return s;
}

function parseOptionLine(line) {
  let m = line.match(/^([①②③④])\s*(.*)$/);
  if (m) return { idx: CIRCLED_MAP[m[1]], text: (m[2]||'').trim() };
  m = line.match(/^([1-4])\)\s*(.*)$/);
  if (m) return { idx: Number(m[1]) - 1, text: (m[2]||'').trim() };
  m = line.match(/^([1-4])번[.)>]?\s*(.*)$/);
  if (m) return { idx: Number(m[1]) - 1, text: (m[2]||'').trim() };
  return null;
}

function parseAnswerInfo(line) {
  // Recognize many answer markers: "정답", "답", "<답>", "예상", "→ text" (after question)
  let m;
  // <답> N번 ... / <답> text
  m = line.match(/^<답>\s*(?:([1-4])번[.)]?\s*)?(.*)$/) || line.match(/^답\s*[:]\s*(?:([1-4])번[.)]?\s*)?(.*)$/);
  if (m && (m[1] || m[2])) {
    const idx = m[1] ? Number(m[1])-1 : null;
    return { idx, text: (m[2]||'').trim() };
  }
  // 정답: circled / number / text
  m = line.match(/(?:정답|예상)\s*[:→\-]?\s*([①②③④])\s*(.*)?/);
  if (m) return { idx: CIRCLED_MAP[m[1]], text: (m[2]||'').trim() };
  m = line.match(/(?:정답|예상)\s*[:→\-]?\s*([1-4])(?:번|[.)>])?\s*(.*)?/);
  if (m) return { idx: Number(m[1])-1, text: (m[2]||'').trim() };
  for (const e of Object.keys(EMOJI_MAP)) {
    if ((line.includes('정답') || line.includes('예상') || line.includes('답')) && line.includes(e)) {
      const rest = line.split(e)[1] || '';
      return { idx: EMOJI_MAP[e], text: rest.trim() };
    }
  }
  m = line.match(/^(?:정답|예상)\s*[:→\-]\s*(.+)$/);
  if (m) return { idx: null, text: m[1].trim() };
  // Round 55 style:  line starts with "- text" after a question title
  // handled in caller (context-sensitive)
  return null;
}

function parseRound(round, text) {
  text = normalizeMarkers(text);
  const lines = text.split(/\r?\n/).map(l => l.replace(/\s+/g, ' ').trim()).filter(Boolean);

  const out = [];
  let subject = null;
  let q = null;
  let sawOptionsSection = false;

  const flush = () => {
    if (!q) return;
    const filled = q.options.filter(o => o && o.trim()).length;
    const hasAnswer = q.correctIndex != null || q.correctText;
    if (q.title && hasAnswer) {
      out.push({
        round, subject: q.subject, number: q.number,
        title: q.title.replace(/\s+/g,' ').trim(),
        options: q.options.map(o => (o||'').replace(/\s+/g,' ').trim()),
        correctIndex: q.correctIndex,
        correctText: (q.correctText||'').replace(/\s+/g,' ').trim(),
        explanation: (q.explanation||'').replace(/\s+/g,' ').trim(),
        fullOptions: filled === 4,
      });
    }
    q = null;
    sawOptionsSection = false;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^(더보기|관련\s*글|목차|TAG|#|300x250|\(adsbygoogle|구독|공유하기|좋아요)/i.test(line)) continue;

    // Subject markers: "1과목", "SQLD 49회 1과목", "<1과목 : 8문제 ...>"
    let m = line.match(/(?:^|[^\d])(\d)\s*과목/);
    if (m && (/객관식|단답|복원|문제/.test(line) || line.length < 60)) {
      flush(); subject = `${m[1]}과목`; continue;
    }

    // Skip "보기"/"지문" delimiters (they introduce question body, not content)
    if (/^<(보기|지문|추가|설명)>/.test(line)) continue;

    // Question start
    m = line.match(/^[■◆●]?\s*문제\s*(\d{1,2})\s*[.)]?\s*(.*)$/) || line.match(/^(\d{1,2})\s*[.)]\s+(.+)$/);
    if (m && subject && Number(m[1]) >= 1 && Number(m[1]) <= 60) {
      const cand = Number(m[1]);
      // Disambiguate: "1) text" / "1번 text" inside an in-progress question is an option, not a new question.
      // Heuristic: if we have an open q with <4 options + no answer yet AND cand is 1-4, treat as option.
      if (q && q.options.filter(Boolean).length < 4 && q.correctIndex == null && q.correctText == null && cand >= 1 && cand <= 4) {
        const opt = parseOptionLine(line);
        if (opt) { q.options[opt.idx] = opt.text; sawOptionsSection = true; continue; }
      }
      flush();
      q = { round, subject, number: cand, title: (m[2]||'').trim(), options: [], correctIndex: null, correctText: null, explanation: '' };
      continue;
    }

    // Multi-option on single line
    if (q && q.options.length === 0 && /[①②③④]/.test(line) && !/정답|답:|<답>/.test(line)) {
      const parts = line.split(/(?=[①②③④])/);
      for (const p of parts) {
        const mm = p.match(/^([①②③④])\s*(.*)$/);
        if (mm) q.options[CIRCLED_MAP[mm[1]]] = (mm[2]||'').trim();
      }
      if (q.options.filter(Boolean).length >= 2) { sawOptionsSection = true; continue; }
    }

    // Answer marker
    const ans = parseAnswerInfo(line);
    if (ans && q) {
      if (ans.idx != null) q.correctIndex = ans.idx;
      if (ans.text) q.correctText = ans.text;
      continue;
    }

    // Explanation
    if (q && (q.correctIndex != null || q.correctText) && /^(해설|풀이|※|<추가>|<설명>)/.test(line)) {
      q.explanation = (q.explanation ? q.explanation + ' ' : '') + line.replace(/^(해설|풀이|※|<추가>|<설명>)\s*[:)]?\s*/, '');
      continue;
    }

    // Round 55 style:  "- 답내용" on line immediately following question
    if (q && q.correctIndex == null && q.correctText == null && /^[-ㅡ]\s+/.test(line)) {
      const t = line.replace(/^[-ㅡ]\s+/, '').trim();
      if (t && !/^(보기|설명|참고)/.test(t)) {
        q.correctText = t;
        continue;
      }
    }

    // Option line
    if (q && q.correctIndex == null && q.correctText == null) {
      const opt = parseOptionLine(line);
      if (opt) {
        q.options[opt.idx] = opt.text;
        sawOptionsSection = true;
        continue;
      }
    }

    // Continuation
    if (q) {
      if (q.options.length === 0 && q.correctIndex == null && q.correctText == null) {
        q.title += ' ' + line;
      } else if (q.correctIndex != null || q.correctText) {
        q.explanation = (q.explanation ? q.explanation + ' ' : '') + line;
      }
    }
  }
  flush();

  const seen = new Map();
  for (const qq of out) {
    const k = `${qq.subject}-${qq.number}`;
    if (!seen.has(k) || seen.get(k).title.length < qq.title.length) seen.set(k, qq);
  }
  return Array.from(seen.values()).sort((a,b) => a.subject.localeCompare(b.subject) || a.number - b.number);
}

const all = {};
for (const f of readdirSync(BLOG_DIR)) {
  const m = f.match(/^round-(\d+)\.html$/);
  if (!m) continue;
  const round = Number(m[1]);
  const html = readFileSync(resolve(BLOG_DIR, f), 'utf8');
  all[round] = parseRound(round, htmlToText(extractArticleBody(html)));
}

let full = 0, stub = 0, total = 0;
const sortedRounds = Object.keys(all).map(Number).sort((a,b)=>b-a);
for (const r of sortedRounds) {
  const qs = all[r];
  const f = qs.filter(q => q.fullOptions).length;
  const s = qs.length - f;
  full += f; stub += s; total += qs.length;
  console.log(`제${r}회: 완전 4지=${f}, 정답만=${s}, 합=${qs.length}`);
}
console.log('---');
console.log(`총 ${total} (완전=${full}, 보강필요=${stub})`);

writeFileSync('scripts/blog-questions-raw.json', JSON.stringify(all, null, 2), 'utf8');
console.log('wrote scripts/blog-questions-raw.json');
