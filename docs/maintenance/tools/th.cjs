const { chromium } = require('playwright');
(async () => { const b = await chromium.launch(); const id = process.argv[2] || 'c111';
 for (const [w,h,out,dark] of [[1280,3000,'th-desk.png',false],[390,2600,'th-mob.png',false],[390,1600,'th-dark.png',true]]) {
  const p = await b.newPage({ viewport: { width: w, height: h } });
  await p.goto('http://localhost:4182/'); await p.waitForTimeout(800);
  if (dark) await p.evaluate(()=>document.documentElement.setAttribute('data-theme','dark'));
  await p.evaluate((id)=>{history.pushState({sqlo:true,route:'theory-detail',params:id},'');window.dispatchEvent(new PopStateEvent('popstate',{state:{sqlo:true,route:'theory-detail',params:id}}));}, id);
  await p.waitForTimeout(1500); await p.screenshot({ path: out, fullPage: false }); }
 await b.close(); })();
