import{a6 as _,j as i,O as l,o as r,d as c,e as t,n as m,t as n,_ as p}from"./index-520d7f93.js";const d={class:"content"},u=_({__name:"temp",setup(f){const e=i({name:"word_scroll_1",play_state:"running",start_time:0}),a=l(0),s=new Date().getTime()/1e3;setInterval(()=>{a.value=new Date().getTime()/1e3-s},10);function o(){e.name=="word_scroll_1"?e.name="word_scroll_2":e.name="word_scroll_1",e.start_time=a.value}return(v,y)=>(r(),c("div",d,[t("div",{class:"box",style:m({"animation-name":e.name,"animation-play-state":e.play_state,"animation-duration":"10s","animation-delay":-e.start_time+"s"})},null,4),t("p",null,n(a.value),1),t("p",null,n(e),1),t("button",{onClick:o},"refresh_animation")]))}});const g=p(u,[["__scopeId","data-v-781c3d00"]]);export{g as default};