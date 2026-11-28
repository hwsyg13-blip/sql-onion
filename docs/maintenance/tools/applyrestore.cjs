const fs=require('fs');const spec=JSON.parse(fs.readFileSync(process.argv[2],'utf8'));
const NOTE=' ※ 원본의 보기(그림)가 누락되어, 같은 개념을 묻는 모의고사 형태로 보기를 재구성했다.';
const files={};const where={};for(const f of ['cbt-mock','sqld-quiz-1140']){files[f]=JSON.parse(fs.readFileSync(`scripts/authored/${f}.json`,'utf8'));for(const q of (files[f].authored||files[f].items||files[f].questions))where[q._id]=[f,q];}
let n=0,bad=0;const touched=new Set();
for(const [id,s] of Object.entries(spec)){const [f,q]=where[id];if(!q)throw new Error(id);
 if((q.options||[]).filter(o=>String(o??'').trim()).length>=4)throw new Error('already has options '+id);
 if(s.options.length!==4||s.options.some(o=>!o.trim()))throw new Error('options '+id);
 if(new Set(s.options).size!==4)throw new Error('dup options '+id);
 if(s.title)q.title=s.title;
 if(s.refFix)for(const [field,a,b] of s.refFix){const r=(q.references||[]).find(r=>(r[field]||'').includes(a));if(!r)throw new Error('refFix '+id);r[field]=r[field].replace(a,b);}
 if(s.dropRefsAfter!=null)q.references=q.references.slice(0,s.dropRefsAfter);
 if(s.references)q.references=s.references;
 q.options=s.options;q.correctIndex=s.correctIndex;
 if(s.optionReferences)q.optionReferences=s.optionReferences;else if(q.optionReferences)delete q.optionReferences;
 q.explanation=s.explanation+NOTE;
 const c='①②③④'[s.correctIndex];if(!s.explanation.includes(c)){bad++;console.log('CHECK no answer mark',id,c);}
 const neg=[...s.explanation.matchAll(/([①②③④])\s*(?:이|가)\s*(?:옳지 않|틀리|잘못)/g)].map(m=>m[1]);if(neg.some(x=>x!==c)){bad++;console.log('CHECK neg',id);}
 touched.add(f);n++;}
for(const f of touched)fs.writeFileSync(`scripts/authored/${f}.json`,JSON.stringify(files[f],null,2)+'\n');
console.log('restored',n,'suspect',bad);
