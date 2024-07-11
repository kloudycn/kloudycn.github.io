import{m as k}from"./markdown_to_html_lite-855e1114.js";import{_ as C,P as B,u as L,a as v,$ as M,b as x,c as z,r as b,o as n,d as l,e as t,n as g,f as p,g as r,w as u,t as _,h as d,T as H,F as f,i as w,j as V,k as S,l as m}from"./index-e4eea91b.js";import{B as T}from"./BlogArticlesList-bb3dab5d.js";import{N,a as P}from"./NoteBook-dd2ceade.js";import"./index-97cf174a.js";import"./Pagination.vue_vue_type_style_index_0_lang-cd91223e.js";import"./More-2c944b97.js";const D={components:{PageDialog:B},computed:{intro(){if(this.headline)return k(this.headline.intro)},scroll_down_process(){let i=L().app_scroll.top/(window.innerHeight*.8);return i>1?1:i<0?0:i}},data(){return{headlines:null,headline:{},headlines_level:{},open_dialog:!1,top_img_done:!1,v_align:"center",h_align:"center"}},mounted(){this.get_all_headlines()},beforeUnmount(){v().gray=!1},methods:{async get_all_headlines(){let i=await M("/blog/get_all_headlines.php");if(!i)return;this.headlines=i.data,this.headlines.forEach(a=>{this.headlines_level[a.active]||(this.headlines_level[a.active]=[]),this.headlines_level[a.active].push(a)});let s=Object.keys(this.headlines_level).sort((a,e)=>e-a),h=this.headlines_level[s[0]];this.headline=h[Math.floor(Math.random()*h.length)],this.update_headline()},update_headline(){this.headline.gray==1?v().gray=!0:v().gray=!1,this.headline.color?x().settings.color=this.headline.color:x().settings.color="#09f",this.headline.v_align>0?this.v_align="bottom":this.headline.v_align<0?this.v_align="top":this.v_align="center",this.headline.h_align>0?this.h_align="right":this.headline.h_align<0?this.h_align="left":this.h_align="center"},set_headline(i){this.open_dialog=!1,z(),this.headline={},this.top_img_done=!1,this.$nextTick(()=>{this.headline=i,this.update_headline()})}}},I=t("div",{class:"top_img_shadow"},null,-1),j={key:0,class:"top_loading"},A=t("div",{class:"circle_box"},[t("div",{class:"circle circle1"}),t("div",{class:"circle circle2"})],-1),E={key:1,class:"top_text content"},F={key:0},R={key:0,class:"headline_info"},U={class:"content"},O={class:"pic_box"},$=["src"],q={class:"text_box"},G=t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M842.688 128 181.312 128C116.64 128 64 180.64 64 245.312l0 533.376C64 843.36 116.64 896 181.312 896l661.376 0C907.36 896 960 843.36 960 778.688L960 245.312C960 180.64 907.36 128 842.688 128zM288 288c35.36 0 64 28.64 64 64s-28.64 64-64 64c-35.328 0-64-28.64-64-64S252.672 288 288 288zM832 736c0 17.696-14.304 31.488-32 31.488L225.92 768c-0.128 0-0.224 0-0.352 0-10.08 0-19.616-4.288-25.664-12.384-6.112-8.192-7.936-18.56-4.896-28.352 2.304-7.488 58.272-183.552 180.064-183.552 38.08 0.896 67.424 9.824 95.776 18.336 35.712 10.72 70.528 19.936 109.664 13.76 20.448-3.296 28.896-23.808 43.328-69.952 19.04-60.8 47.808-152.736 174.656-152.736 17.536 0 31.776 14.08 32 31.616L832 511.616 832 736z"})],-1),J=[G],K=["innerHTML"],Q={class:"theme_box"},W={class:"theme_item_img_box"},X=["src"],Y={class:"theme_item_name"},Z={class:"name"},ee=["onClick","disabled"],te={class:"theme_box_tip"},ie={class:"theme_box_tip"};function se(i,s,h,a,e,c){const y=b("PageDialog");return n(),l(f,null,[t("div",{class:p(["headline_top",{v_top:e.v_align=="top",v_center:e.v_align=="center",v_bottom:e.v_align=="bottom",h_left:e.h_align=="left",h_center:e.h_align=="center",h_right:e.h_align=="right"}])},[e.headline.headline_no?(n(),l("div",{key:0,class:"top_img_box",style:g({"--process":c.scroll_down_process})},[t("div",{class:p(["top_img",{top_img_done:e.top_img_done}]),style:g({"background-image":`url(${e.headline.img})`})},null,6),I,r(H,{name:"top_loading"},{default:u(()=>[!e.headline.headline_no||!e.top_img_done?(n(),l("div",j,[t("div",{class:"top_text_loading_img",style:g({"background-image":`url(${e.headline.img})`})},null,4),A,t("p",null,_(i.$text("loading")),1)])):d("",!0)]),_:1})],4)):d("",!0),e.headline.headline_no&&e.top_img_done?(n(),l("div",E,[t("h1",null,_(e.headline.title),1),e.headline.subtitle?(n(),l("h2",F,_(e.headline.subtitle),1)):d("",!0)])):d("",!0)],2),e.headline.headline_no?(n(),l("div",R,[t("div",U,[t("div",O,[t("img",{class:"display_pic",src:e.headline.img,onLoad:s[0]||(s[0]=o=>e.top_img_done=!0)},null,40,$)]),t("div",q,[t("a",{class:"headline_info_title",onClick:s[1]||(s[1]=o=>e.open_dialog=!0)},J),e.headline.intro?(n(),l("div",{key:0,class:"headline_info_text",innerHTML:c.intro},null,8,K)):d("",!0)])])])):d("",!0),r(y,{modelValue:e.open_dialog,"onUpdate:modelValue":s[2]||(s[2]=o=>e.open_dialog=o),title:i.$text("blog.current_home_bgs")},{default:u(()=>[t("div",Q,[(n(!0),l(f,null,w(e.headlines,o=>(n(),l("div",{class:p(["theme_item",{gray_app:o.gray=="1"}]),key:o.headline_no,style:g({"--headline-color":o.color||"#09f"})},[t("div",W,[t("img",{src:o.img},null,8,X)]),t("div",Y,[t("span",Z,_(o.title),1),t("button",{class:p(["kbutton",{active:o.headline_no==e.headline.headline_no}]),onClick:pe=>c.set_headline(o),disabled:o.headline_no==e.headline.headline_no},_(o.headline_no==e.headline.headline_no?i.$text("blog.applied"):i.$text("blog.apply")),11,ee)])],6))),128))]),t("p",te,_(i.$text("blog.current_home_bgs_tip1")),1),t("p",ie,_(i.$text("blog.current_home_bgs_tip2")),1)]),_:1},8,["modelValue","title"])],64)}const oe=C(D,[["render",se]]);const ne={class:"BlogCategoriesIcon"},le=["innerHTML"],_e={class:"text"},ae={__name:"BlogCategoriesIcon",setup(i){const s=V([{id:"study",intro:"一些学习笔记和学习经验，主要是计算机领域",icon:'<svg t="1698304394558" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2839" width="200" height="200"><path d="M942.16192 357.82656v157.65504l35.92192 43.6224-69.44768 62.8736-63.87712-62.8736 38.31808-44.4416V383.7952C677.888 471.04 621.99808 498.70848 576.512 519.68c-45.50656 20.97152-78.2336 20.97152-123.74016 3.35872-44.72832-17.6128-249.91744-98.95936-356.88448-151.79776-71.0656-35.2256-75.85792-57.87648 1.57696-88.064C198.06208 243.77344 354.52928 180.03968 442.368 145.65376c51.89632-21.8112 79.83104-33.54624 127.73376-9.216 85.44256 36.88448 270.66368 112.35328 368.06656 154.29632 84.64384 38.56384 27.9552 51.15904 3.9936 67.09248zM586.87488 585.09312c49.50016-20.97152 116.57216-56.19712 190.01344-88.8832v259.95264S682.68032 860.16 515.80928 860.16c-178.83136 0-275.456-103.99744-275.456-103.99744V512.96256c56.70912 23.49056 119.76704 44.4416 196.4032 71.2704 47.12448 18.47296 107.008 24.33024 150.1184 0.86016z"></path></svg>'},{id:"life",intro:"关于数码、影视、游戏等的文章",icon:'<svg t="1698304447443" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4808" width="200" height="200"><path d="M835.1 360.5H520.8V240.7c12.9-1.6 33.2-10.9 56.3-21.3 125.1-55.8 117.4 11.9 162.1-21.3 44.7-33.3-4.6-118.6-105.4-98.2-76 15.4-113 89.8-122.9 113.2-10.2-24.4-40.2-79.2-110.8-104.7-121.3-44.1-177.4 44.4-132.7 77.7 44.7 33.3 55.3-18.1 180.3 37.7 20.1 8.9 37.9 17.3 50.4 20.5v116.1H190.9c-25.6 0-46.4 18.4-46.4 41.1v74c0 13.2 7.1 24.8 18.1 32.3 1.5 1.6 4.6 3.3 8.5 4.7 4.7 2 10 3.3 15.6 3.7 1.5 0.2 3 0.4 4.4 0.4 1.2 0.1 11.3 0.1 28.3 0.2l46.5 336.1c0 40.4 36.7 73.2 82 73.2h333.5c45.3 0 82-32.7 82-73.2L810 516.7c16-0.1 25.2-0.1 25.2-0.1 3.3 0.1 6.4-0.3 9.3-0.8h0.1c2.9-0.6 5.5-1.2 7.8-2.1 17.2-6 29.3-20.8 29.3-38.1v-74c-0.2-22.7-21.1-41.1-46.6-41.1z" p-id="4809"></path></svg>'},{id:"about",intro:"本站的更新日志、功能介绍和测试文章等",icon:'<svg t="1698304472158" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7541" width="200" height="200"><path d="M512 992C246.912 992 32 777.088 32 512 32 246.912 246.912 32 512 32c265.088 0 480 214.912 480 480 0 265.088-214.912 480-480 480z m-59.072-512v236.32a54.144 54.144 0 1 0 108.288 0V480a54.144 54.144 0 1 0-108.288 0z m53.76-226.464c-14.72 0-27.232 4.544-37.568 15.136-11.04 9.856-16.192 22.72-16.192 38.656 0 15.136 5.152 28 16.192 38.624 10.336 10.592 22.848 15.904 37.6 15.904a57.6 57.6 0 0 0 39.04-15.168c10.304-10.592 15.456-23.456 15.456-39.36s-5.12-28.8-15.456-38.656c-10.304-10.56-23.584-15.136-39.04-15.136z" p-id="7542"></path></svg>'}]);return(h,a)=>{const e=b("RouterLink");return n(),l("div",ne,[(n(!0),l(f,null,w(s,c=>(n(),S(e,{class:"categories_item",to:"/blog/categories/"+c.id},{default:u(()=>[t("div",{class:"icon",innerHTML:c.icon},null,8,le),t("div",_e,[t("h3",null,_(h.$text("nav.blog.categories."+c.id)),1)])]),_:2},1032,["to"]))),256))])}}};const re={id:"home"},ce={class:"home_part content"},he={class:"part_title"},de={class:"part_title"},ge={class:"home_blog_link"},ye={__name:"index",setup(i){return(s,h)=>{const a=b("router-link");return n(),l("div",re,[r(oe),t("div",ce,[t("h2",he,[r(N),m(" "+_(s.$text("nav.blog.categories")),1)]),r(ae),t("h2",de,[r(P),m(" "+_(s.$text("blog.recent_articles")),1)]),r(T,{limit_count:6,item_size:"large"}),t("div",ge,[r(a,{to:"blog"},{default:u(()=>[m(_(s.$text("blog.more_articles")),1)]),_:1})])])])}}};export{ye as default};