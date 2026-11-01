// 사용: node run.cjs spec.json  — spec: [{id, setup:"CREATE..;INSERT..", sql:"SELECT.."}]
const {DatabaseSync}=require('node:sqlite');process.removeAllListeners('warning');
for(const s of JSON.parse(require('fs').readFileSync(process.argv[2],'utf8'))){const db=new DatabaseSync(':memory:');try{db.exec(s.setup);const r=db.prepare(s.sql).all();console.log(s.id,'→',r.map(x=>'('+Object.values(x).map(v=>v===null?'NULL':v).join(', ')+')').join(', '));}catch(e){console.log(s.id,'ERR',e.message);}}
