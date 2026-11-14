import json,glob,re,sys
def toks(s):
  s=re.sub(r'[①②③④()\[\]·,.\'"`]',' ',s)
  return set(w for w in re.findall(r'[가-힣A-Za-z0-9_]+',s) if len(w)>=2 and w not in ('모두','옳은','설명이다','정답은','번이다','이다','있다','없다','된다','한다','값이다','결과다'))
out=[]
for f in sorted(glob.glob('scripts/authored/round-*.json')):
  d=json.load(open(f)); r=f.split('-')[-1][:2]
  for q in d['authored']:
    e=q['explanation']
    sents=[s.strip() for s in re.split(r'(?<=[다음함])\.\s+|(?<=다)\.\s*$',e) if s.strip()]
    best=(0,None,None)
    for i in range(len(sents)):
      for j in range(i+1,len(sents)):
        a,b=toks(sents[i]),toks(sents[j])
        if len(a)<3 or len(b)<3: continue
        jac=len(a&b)/min(len(a),len(b))
        if jac>best[0]: best=(jac,sents[i],sents[j])
    if best[0]>=0.6: out.append((best[0],r,q['subject'],q['number'],best[1],best[2]))
out.sort(key=lambda x:-x[0])
print(len(out))
for o in out: print(f'{o[0]:.2f} {o[1]}회 {o[2]} {o[3]}번\n   A: {o[4][:160]}\n   B: {o[5][:160]}')
