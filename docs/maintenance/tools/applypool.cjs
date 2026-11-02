const fs=require('fs');const [file,mapf]=[process.argv[2],process.argv[3]];
const p=`scripts/authored/${file}.json`;const d=JSON.parse(fs.readFileSync(p,'utf8'));const arr=d.authored||d.items||d.questions;
const map=JSON.parse(fs.readFileSync(mapf,'utf8'));
const optfix={'cbt-016':[0,'① Filter형 Subquery','Filter형 Subquery'],'cbt-055':[1,'Scala Subquery','Scalar Subquery'],'cbt-147':[1,'2) 유리한 식별자에 의해 식별이 가능해야 한다.'.slice(3),'유일한 식별자에 의해 식별이 가능해야 한다.'],'cbt-156':[2,'성 사전(Attribute Dictionary)','속성 사전(Attribute Dictionary)']};
let n=0,bad=0;
for(const [id,text] of Object.entries(map)){const q=arr.find(q=>q._id===id);if(!q)throw new Error(id);if(q.explanation.length>=70)throw new Error('long '+id);
 q.explanation=text;n++;
 if(optfix[id]){const [k,a,b]=optfix[id];if(q.options[k]!==a)throw new Error('opt '+id+' '+q.options[k]);q.options[k]=b;}
 const c='①②③④'[q.correctIndex];const claims=[...text.matchAll(/([①②③④])\s*(?:이|가)\s*(?:옳지 않|올바르지 않|틀리|잘못|거리가 멀|부적절|포함되지 않|적절하지 않)/g)].map(m=>m[1]);
 if(!text.includes(c)||claims.some(x=>x!==c)){bad++;console.log('CHECK',id,c,claims.join(','));}}
fs.writeFileSync(p,JSON.stringify(d,null,2)+'\n');console.log('applied',n,'suspect',bad);
