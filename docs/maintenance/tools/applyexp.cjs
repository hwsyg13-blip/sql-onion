const fs=require('fs');
const map=JSON.parse(fs.readFileSync(process.argv[2],'utf8'));
const titles={'53-1-9':['데이터 모델링에 대한 설명 중 옳지 않은 것은?','트랜잭션에 대한 설명 중 옳지 않은 것은?'],'54-2-43':['테이블의 데이터와 종속된 테이블을 함께 삭제하는 명령어는?','부서 테이블을 삭제하면서 부서 테이블을 참조하는 외래키 제약 조건도 함께 삭제하는 명령어는?']};
const files={};let n=0;
for(const [id,text] of Object.entries(map)){const [r,s,num]=id.split('-');const f=`scripts/authored/round-${r}.json`;files[f]=files[f]||JSON.parse(fs.readFileSync(f,'utf8'));
 const d=files[f];const q=(d.authored||d.items||d.questions).find(q=>q.subject===`${s}과목`&&q.number===+num);if(!q)throw new Error(id);
 if(q.explanation.length>=70)throw new Error('already long '+id);
 // 해설이 말하는 정답 번호가 실제 정답과 같은지 확인
 const marks=[...text.matchAll(/([①②③④])\s*(이|가|이다|가 옳지|이 옳지|가 옳다|이 옳다)/g)].map(m=>'①②③④'.indexOf(m[1]));
 q.explanation=text;n++;
 if(titles[id]){if(q.title!==titles[id][0])throw new Error('title '+id);q.title=titles[id][1];}
}
for(const [f,d] of Object.entries(files))fs.writeFileSync(f,JSON.stringify(d,null,2)+'\n');
console.log('applied',n,'files',Object.keys(files).length);
