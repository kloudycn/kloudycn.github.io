import{a2 as l,Y as c,o as _,d as u,g as r,e as t,O as p,Q as m}from"./index-508fea2e.js";import{_ as d}from"./PageTitle-28eeae2b.js";import"./ArrowShape-eb84f005.js";/* empty css                                                   *//* empty css                                                  */const v={class:"content ncm_song_box"},h={class:"playlist_input"},g=t("h2",null,"查找歌曲",-1),f=t("ul",null,[t("li",null," 网易云歌曲 ID 在网页端地址栏可以找到，例如 https://music.163.com/#/song?id=2097486090 的歌曲 ID 为 2097486090 ")],-1),I={__name:"ncm_song_index",setup(x){const n=l(),e=c("");function o(){n.push("/archive/music/ncm_song/"+e.value)}return(i,s)=>(_(),u("div",v,[r(d,{title:"歌曲",parent:{title:i.$text("nav.archive.music"),link:"/archive/music"}},null,8,["parent"]),t("div",h,[g,p(t("input",{class:"kinput","onUpdate:modelValue":s[0]||(s[0]=a=>e.value=a),placeholder:"网易云歌曲 ID"},null,512),[[m,e.value]]),t("button",{class:"kbutton",onClick:o},"确定"),f])]))}};export{I as default};