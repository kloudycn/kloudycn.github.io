import{b as o}from"./index-520d7f93.js";function p(a,c){if(!a)return"";let n=a;n=n.replace(/"(.*?)"/gs,function(t){return t.replace(/(\r\n|\n|\r)/gm,"\\n")}),n=n.replace(/(\r\n|\n|\r)/gm,"");let e;try{e=JSON.parse(n)}catch(t){return console.log("多语言文本对象解析异常:"+n,t),""}let r=c||o().computed_language;return e["zh-cn"]&&(e.zh=e["zh-cn"]),e.jp&&(e.ja=e.jp),r==="zh-cn"&&(r="zh"),e[r]}export{p as d};