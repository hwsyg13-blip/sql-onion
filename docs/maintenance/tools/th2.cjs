const { chromium } = require('playwright');
(async () => { const b = await chromium.launch(); const id = process.argv[2];
  const p = await b.newPage({ viewport: { width: 390, height: 2400 } });
  await p.goto('http://localhost:4182/'); await p.waitForTimeout(700);
  await p.evaluate((id)=>{history.pushState({sqlo:true,route:'theory-detail',params:id},'');window.dispatchEvent(new PopStateEvent('popstate',{state:{sqlo:true,route:'theory-detail',params:id}}));}, id);
  await p.waitForTimeout(1200);
  const over = await p.evaluate(()=>[...document.querySelectorAll('.theory-md table')].filter(t=>t.scrollWidth>t.clientWidth+2).length);
  console.log(id,'overflowing tables',over);
  await p.screenshot({ path: `m-${id}.png` }); await b.close(); })();
