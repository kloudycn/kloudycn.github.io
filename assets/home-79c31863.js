import{_ as v}from"./PageTitle-4745d1f6.js";import{C as b}from"./CommunityPost-166e63c6.js";import{j as _,r as g,o as r,d as a,g as m,e as t,F as p,i as d,k as u,w as k,t as n,n as y}from"./index-0c2bd81b.js";import"./ArrowShape-511e037b.js";/* empty css                                                   *//* empty css                                                  */import"./Comment-0729c0c8.js";import"./markdown_to_html_lite-855e1114.js";import"./index-97cf174a.js";import"./Pagination.vue_vue_type_style_index_0_lang-5afeb80f.js";import"./More-7197bcb5.js";import"./CharacterCard-c798d899.js";import"./UserBusiness-becdd436.js";import"./Warning-2633d035.js";import"./Comment-bce4c635.js";const x={class:"content"},C=t("h2",{class:"part_title"},"功能测试",-1),B={class:"laboratory_container"},$={class:"text"},L=t("h2",{class:"part_title"},"图一乐",-1),w={class:"laboratory_container"},F={class:"text"},J={__name:"home",setup(N){function s(){for(var e="0123456789abcdef",i="#",l=0;l<6;l++){var o=parseInt(Math.random()*e.length);i+=e[o]}return{"--color":i,"--bg":`linear-gradient(45deg, ${i}90, ${i}50)`}}const h=_([{title:"兼容性测试",link:"compatibility"},{title:"组件测试",link:"components"},{title:"鼠标跟随卡片",link:"card"},{title:"抖动动画",link:"shake"},{title:"陀螺仪测试",link:"deviceorientation"}]),f=_([{title:"2024 咲桜夏日晚会",link:"animefes"},{title:"点我启动原神",link:"qidong"},{title:"Wonderhoy!",link:"sekai_stickers"},{title:"成为魔法少女吧",link:"madoka"},{title:"瞎写的音游，千万不要点进来",link:"music_game"}]);function c(e){return e.replaceAll("_"," ")}return(e,i)=>{const l=g("RouterLink");return r(),a("div",x,[m(v,{title:e.$text("nav.laboratory"),intro:"这里是一些开发中或者整活的功能，可能会有 bug 和性能问题"},null,8,["title"]),C,t("div",B,[(r(!0),a(p,null,d(h,o=>(r(),u(l,{class:"laboratory_item section",to:"laboratory/"+o.link,style:y(s())},{default:k(()=>[t("div",$,[t("p",null,n(c(o.link)),1),t("h3",null,n(o.title),1)])]),_:2},1032,["to","style"]))),256))]),L,t("div",w,[(r(!0),a(p,null,d(f,o=>(r(),u(l,{class:"laboratory_item section",to:"laboratory/"+o.link,style:y(s())},{default:k(()=>[t("div",F,[t("p",null,n(c(o.link)),1),t("h3",null,n(o.title),1)])]),_:2},1032,["to","style"]))),256))]),m(b,{post_id:"laboratory"})])}}};export{J as default};