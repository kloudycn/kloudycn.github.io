import{a2 as n,Y as u,o as c,d as p,g as r,e as t,O as _,Q as d}from"./index-c121442e.js";import{_ as m}from"./PageTitle-14358d0b.js";import"./ArrowShape-e586138c.js";/* empty css                                                   *//* empty css                                                  */const v={class:"content playlist_box"},h={class:"playlist_input"},y=t("h2",null,"播放自定义歌单",-1),f=t("ul",null,[t("li",null," 网易云歌单 ID 在网页端地址栏可以找到，例如 https://music.163.com/#/playlist?id=5079813299 的歌单 ID 为 5079813299 ")],-1),I={__name:"playlist",setup(k){const l=n(),e=u("");function i(){l.push("/archive/music/playlist/"+e.value)}return(a,s)=>(c(),p("div",v,[r(m,{title:"歌单",parent:{title:a.$text("nav.archive.music"),link:"/archive/music"}},null,8,["parent"]),t("div",h,[y,_(t("input",{class:"kinput","onUpdate:modelValue":s[0]||(s[0]=o=>e.value=o),placeholder:"网易云歌单 ID"},null,512),[[d,e.value]]),t("button",{class:"kbutton",onClick:i},"确定"),f])]))}};export{I as default};