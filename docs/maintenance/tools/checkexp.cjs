const fs=require('fs');const map=JSON.parse(fs.readFileSync(process.argv[2],'utf8'));let bad=0;
for(const id of Object.keys(map)){const [r,s,num]=id.split('-');const d=JSON.parse(fs.readFileSync(`scripts/authored/round-${r}.json`,'utf8'));const q=(d.authored||d.items||d.questions).find(q=>q.subject===`${s}과목`&&q.number===+num);
const e=q.explanation;const c='①②③④'[q.correctIndex];
const claims=[...e.matchAll(/([①②③④])\s*(?:[가-힣]+(?:,\s*)?)*?\s*(?:이|가)\s*옳지 않/g)].map(m=>m[1]).concat([...e.matchAll(/정답은\s*([①②③④])/g)].map(m=>m[1]),[...e.matchAll(/([①②③④])\s*(?:이|가)\s*옳다/g)].map(m=>m[1]));
const firstParen=(e.match(/\(([①②③④])\)\.?$/)||[])[1];
const neg=/않은|아닌|틀린|부적절|적절하지/.test(q.title);
const ok = claims.length ? claims.every(x=>x===c) : e.includes(c);
if(!ok||!e.includes(c)){bad++;console.log('CHECK',id,'정답',c,'주장',claims.join(','),'|',e.slice(-80));}}
console.log('checked',Object.keys(map).length,'suspect',bad);
