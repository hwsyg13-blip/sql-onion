const src=(await import('node:fs')).readFileSync('src/data/theoryHtml.ts','utf8');
const mod=await import('data:text/javascript,'+encodeURIComponent(src.replace(/^\/\/.*$/mg,'').replace('export const THEORY_HTML: Record<string, string> =','export default')));
const H=mod.default;const id=process.argv[2];
if(id==='--stats'){for(const [k,v] of Object.entries(H)){const t=v.replace(/<style[\s\S]*?<\/style>/g,'').replace(/<[^>]+>/g,'').replace(/\s+/g,' ');console.log(k,v.length,t.length);}process.exit();}
const t=H[id].replace(/<style[\s\S]*?<\/style>/g,'').replace(/<(h[1-4])[^>]*>/g,'\n\n## ').replace(/<li[^>]*>/g,'\n- ').replace(/<(p|blockquote|tr|div)[^>]*>/g,'\n').replace(/<br\s*\/?>/g,'\n').replace(/<[^>]+>/g,'').replace(/&nbsp;/g,' ').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/[ \t]+/g,' ').replace(/\n\s*\n+/g,'\n');
console.log('chars',t.length);console.log(t.slice(0,+process.argv[3]||4000));
