import{_ as M,b as z,q as $,$ as H,r as g,o as a,d as r,e as t,n as S,g as p,w as R,t as c,h as n,k as w,ai as V,a2 as D,Y as L,a5 as W,a7 as j,F as q,i as I,x as F,Z as G,S as Y,l as Z,f as U,aj as J,u as K,c as Q}from"./index-539a8d41.js";import{m as X}from"./markdown_to_html_widget-a003ad54.js";import{d as T}from"./display_json_text-0a85aeff.js";import{R as N}from"./Rate-7cc78874.js";import{_ as ee}from"./AMovie.vue_vue_type_style_index_0_lang-7dfa5ad0.js";import{L as te}from"./List-48d78273.js";import{U as se}from"./UserBusiness-c77186d3.js";const ie={components:{Rate:N},props:["movie_id"],data(){return{open_tag:!1,movie:null,not_found:!1}},computed:{movie_title_t(){return this.movie.title_t?T(this.movie.title_t):null},movie_title_t_second(){return this.movie.title_t?T(this.movie.title_t,z().settings.second_language):null}},mounted(){this.get_info_request()},beforeUnmount(){},methods:{$text:$,get_info_request(){H("/archive/get_movie_detail.php",{movie_id:this.movie_id}).then(e=>{e.status=="success"?this.movie=e.data:this.not_found=!0})}}},ae={key:0,class:"a_movie"},_e={class:"bg_wrapper"},re=t("div",{class:"img_back"},null,-1),oe=[re],ce={class:"text_wrapper"},ne={class:"text"},le={class:"title_box"},de={class:"main_title"},ue={key:0,class:"sub_title"},he={key:1,class:"sub_title"},me={class:"tag_box"},ve={key:0},ge={key:1},pe={key:2};function fe(e,l,i,f,s,_){const v=g("RouterLink"),y=g("Rate");return s.movie?(a(),r("div",ae,[t("div",_e,[t("div",{class:"bg",style:S({"background-image":"url("+s.movie.cover+")"})},null,4)]),p(v,{class:"img_wrapper",to:"/archive/movies/"+s.movie.movie_id.toLowerCase()},{default:R(()=>[t("div",{class:"img",style:S({"background-image":"url("+s.movie.cover+")"})},oe,4)]),_:1},8,["to"]),t("div",ce,[t("div",ne,[t("div",le,[t("span",de,c(s.movie.title),1),_.movie_title_t?(a(),r("span",ue,c(_.movie_title_t),1)):n("",!0),_.movie_title_t_second?(a(),r("span",he,c(_.movie_title_t_second),1)):n("",!0)]),t("div",me,[p(y,{rate:s.movie.rate},null,8,["rate"]),s.movie.publish_date?(a(),r("div",ve,c(s.movie.publish_date),1)):n("",!0),s.movie.region?(a(),r("div",ge,c(_.$text("regions."+s.movie.region)),1)):n("",!0),s.movie.type?(a(),r("div",pe,c(_.$text("movie_type."+s.movie.type)),1)):n("",!0)])])])])):n("",!0)}const ye=M(ie,[["render",fe]]);const xe={components:{Rate:N},props:["game_id"],data(){return{open_tag:!1,game:null,not_found:!1}},computed:{game_title_t(){return this.game.title_t?T(this.game.title_t):null},game_title_t_second(){return this.game.title_t?T(this.game.title_t,z().settings.second_language):null}},mounted(){this.get_info_request()},beforeUnmount(){},methods:{$text:$,get_info_request(){H("/archive/get_game_detail.php",{game_id:this.game_id}).then(e=>{e.status=="success"?this.game=e.data:this.not_found=!0})}}},be={key:0,class:"a_game"},ke={class:"bg_wrapper"},we=t("div",{class:"img_back"},null,-1),Ae=[we],Le={class:"text_wrapper"},Se={class:"text"},Te={class:"title_box"},Me={class:"main_title"},Ce={key:0,class:"sub_title"},Be={key:1,class:"sub_title"},Ee={class:"tag_box"},qe={key:0},ze={key:1},Re={key:2};function $e(e,l,i,f,s,_){const v=g("RouterLink"),y=g("Rate");return s.game?(a(),r("div",be,[t("div",ke,[t("div",{class:"bg",style:S({"background-image":"url("+s.game.cover+")"})},null,4)]),p(v,{class:"img_wrapper",to:"/archive/games/"+s.game.game_id.toLowerCase()},{default:R(()=>[t("div",{class:"img",style:S({"background-image":"url("+s.game.cover+")"})},Ae,4)]),_:1},8,["to"]),t("div",Le,[t("div",Se,[t("div",Te,[t("span",Me,c(s.game.title),1),_.game_title_t?(a(),r("span",Ce,c(_.game_title_t),1)):n("",!0),_.game_title_t_second?(a(),r("span",Be,c(_.game_title_t_second),1)):n("",!0)]),t("div",Ee,[p(y,{rate:s.game.rate},null,8,["rate"]),s.game.publish_date?(a(),r("div",qe,c(s.game.publish_date),1)):n("",!0),s.game.region?(a(),r("div",ze,c(_.$text("regions."+s.game.region)),1)):n("",!0),s.game.gameplay?(a(),r("div",Re,c(_.$text("gameplay_short."+s.game.gameplay)),1)):n("",!0)])])])])):n("",!0)}const He=M(xe,[["render",$e]]);const Ie={__name:"ArticleWidget",props:["type","data","target"],setup(e){return(l,i)=>(a(),w(V,{to:e.target},[e.type==="game"?(a(),w(He,{key:0,game_id:e.data},null,8,["game_id"])):n("",!0),e.type==="movie"?(a(),w(ye,{key:1,movie_id:e.data},null,8,["movie_id"])):n("",!0),e.type==="song"?(a(),w(ee,{key:2,song_id:e.data},null,8,["song_id"])):n("",!0)],8,["to"]))}},Ue=["innerHTML"],Ne={__name:"ArticleContentMd",props:["article_data"],emits:["scroll_to","loaded"],setup(e,{emit:l}){const i=e,f=z().settings,s=D(),_=L(""),v=L("/");W(()=>i.article_data,()=>{if(i.article_data.article_id)if(i.article_data.atype=="folder")v.value=i.article_data.article_id+"/";else{let d=i.article_data.article_id;v.value=d.slice(0,d.lastIndexOf("/")+1)}_.value=y(X(i.article_data.content)),j(()=>{C(),B(),E(),l("loaded")})},{immediate:!0});function y(d){let o=d,u=d.match(/<img.*?>/g);return u?(u.map(h=>{let k=h.match(/\ssrc=['"](.*?)['"]/);if(!k)return;let A=k[0],m=k[1];if(m.indexOf("http")!=0&&m.indexOf("//")!=0&&m.indexOf("#")!=0){let O=` src_data="${f.api_address1+"/blog/posts/"+v.value+m}" src="/static/img/img_loading.svg"`,P=h.replace(A,O);o=o.replace(h,P)}}),o):d}const x=L(null);function C(){var d;(d=x.value)==null||d.querySelectorAll("a").forEach(o=>{const u=o.getAttribute("href");u.slice(0,1)=="#"?(o.removeAttribute("target"),o.addEventListener("click",h=>{h.preventDefault();let k=document.getElementById(o.getAttribute("href").slice(1));l("scroll_to",k)})):u.startsWith("/")?(o.setAttribute("target","_self"),o.addEventListener("click",h=>{h.preventDefault(),s.push(o.getAttribute("href"))})):o.setAttribute("target","_blank")})}function B(){let d={root:document.querySelector("#App"),rootMargin:"0px",threshold:0},o=(h,k)=>{h.forEach(A=>{let m=A.target;A.isIntersecting?m.load_img_request=setTimeout(()=>{m.classList.add("active"),m.setAttribute("src",m.getAttribute("src_data")),m.removeAttribute("src_data"),k.unobserve(m)},200):clearTimeout(m.load_img_request)})},u=new IntersectionObserver(o,d);x.value.querySelectorAll("img").forEach(h=>{h.getAttribute("src_data")&&u.observe(h)})}const b=L([]);function E(){let d=0;x.value.querySelectorAll(".article_widget").forEach(o=>{b.value.push({id:d++,type:o.getAttribute("type"),data:o.getAttribute("data"),target:o})})}return(d,o)=>(a(),r(q,null,[t("article",{ref_key:"article_el",ref:x,innerHTML:_.value},null,8,Ue),(a(!0),r(q,null,I(b.value,u=>(a(),w(Ie,{key:u.id,type:u.type,data:u.data,target:u.target},null,8,["type","data","target"]))),128))],64))}};const Oe={components:{Avatar:F,Placeholder:G,ScrollBox:Y,List:te,UserBusiness:se},props:["article_data","article_headers","active_header_index"],data(){return{}},mounted(){},watch:{},methods:{scroll_to(e){this.$emit("scroll_to",e),this.$emit("switch_aside")}}},Pe={class:"article_aside"},Ve={key:0,class:"article_character_box section"},De={class:"article_character_box_text"},We={class:"name"},je={class:"descr"},Fe={class:"article_character_box_tags"},Ge={key:0,class:"uid_tag"},Ye={key:1,class:"admin_tag"},Ze={class:"article_indexes_box section"},Je={class:"article_indexed_title"},Ke={class:"article_indexed_title_text"},Qe={class:"article_indexes_links"},Xe=["onClick","href","innerHTML"];function et(e,l,i,f,s,_){const v=g("Avatar"),y=g("UserBusiness"),x=g("List"),C=g("ScrollBox"),B=g("Placeholder");return a(),r("aside",Pe,[i.article_data&&i.article_data.character?(a(),r("div",Ve,[p(v,{avatar_url:i.article_data.character.avatar_url,nickname:i.article_data.character.nickname,size:80},null,8,["avatar_url","nickname"]),t("div",De,[t("p",We,c(i.article_data.character.nickname),1),t("p",je,c(i.article_data.character.descr),1),t("div",Fe,[i.article_data.character.ctype!="temp"?(a(),r("div",Ge," @"+c(i.article_data.character.cid),1)):n("",!0),i.article_data.character.ctype=="admin"?(a(),r("div",Ye,[p(y),Z(" "+c(e.$text("account.admin")),1)])):n("",!0)])])])):n("",!0),t("div",Ze,[t("div",Je,[p(x,{class:"article_indexed_title_icon"}),t("span",Ke,c(e.$text("blog.toc")),1)]),p(C,null,{default:R(()=>[t("div",Qe,[(a(!0),r(q,null,I(i.article_headers,(b,E)=>(a(),r("a",{class:U(["article_header_link",{H2:b.tagName=="H2",H3:b.tagName=="H3",active:i.active_header_index>-1&&E==i.active_header_index}]),key:b.id,onClick:J(d=>_.scroll_to(b),["prevent"]),href:"#"+b.id,innerHTML:b.innerHTML},null,10,Xe))),128))])]),_:1}),p(B,{empty:!i.article_headers||i.article_headers.length==0,empty_title:" "},null,8,["empty"])])])}const tt=M(Oe,[["render",et]]);const st={components:{ArticleContentMd:Ne,ArticleAside:tt},props:["article_data"],data(){return{article_headers:[],active_header_index:-1,hl_timer:{},resize_timer:null,open_aside:!1}},computed:{app_scroll_top(){return K().app_scroll.top}},mounted(){window.addEventListener("resize",this.listen_resize)},beforeUnmount(){window.removeEventListener("resize",this.listen_resize)},watch:{app_scroll_top(e){this.active_header_index=-1,this.article_headers.forEach((l,i)=>{e>l.getAttribute("offset_top")-101&&(this.active_header_index=i)})}},methods:{listen_resize(){clearInterval(this.resize_timer),this.resize_timer=setTimeout(()=>{this.compute_article_headers()},500)},loaded(){this.compute_article_headers(),this.scroll_to_hash()},compute_article_headers(){let e=document.querySelectorAll("article h2, article h3");this.article_headers=[],e.forEach(l=>{let i=0,f=l;for(;f;)i+=f.offsetTop,f=f.offsetParent;l.setAttribute("offset_top",i),this.article_headers.push(l)})},scroll_to(e){this.compute_article_headers(),this.$nextTick(()=>{Q(e,!0),e&&(clearInterval(this.hl_timer["start_"+e.id]),clearInterval(this.hl_timer["end_"+e.id]),e.classList.remove("h_transition"),e.classList.remove("h_transition_slow"),e.classList.add("scrollingTo","h_transition"),this.hl_timer["start_"+e.id]=setTimeout(()=>{e.classList.remove("scrollingTo"),e.classList.add("h_transition_slow")},500),this.hl_timer["end_"+e.id]=setTimeout(()=>{e.classList.remove("h_transition"),e.classList.remove("h_transition_slow")},2e3))})},scroll_to_hash(){if(this.$route.hash){let e=document.getElementById(decodeURI(this.$route.hash.slice(1)));setTimeout(()=>{this.scroll_to(e)},100)}},switch_aside(){this.open_aside=!this.open_aside}}},it={class:"article_main_section_content section"},at={class:"article_switch_aside"},_t=t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"128",height:"128"},[t("path",{d:"M219.818667 347.818667a51.2 51.2 0 0 0 0 72.405333l256 256a51.2 51.2 0 0 0 72.405333 0l256-256a51.2 51.2 0 0 0-72.448-72.405333L512 567.594667 292.224 347.818667a51.2 51.2 0 0 0-72.405333 0z"})],-1),rt={class:"article_main_section_aside",ref:"article_main_section_aside"};function ot(e,l,i,f,s,_){const v=g("ArticleContentMd"),y=g("ArticleAside");return a(),r("div",{class:U(["article_main_section",{open_aside:s.open_aside}])},[t("div",it,[p(v,{article_data:i.article_data,onLoaded:_.loaded,onScroll_to:_.scroll_to},null,8,["article_data","onLoaded","onScroll_to"]),t("div",at,[t("div",{class:"article_switch_aside_button blur_part",onClick:l[0]||(l[0]=(...x)=>_.switch_aside&&_.switch_aside(...x))},[_t,t("p",null,c(e.$text("blog.toc")),1)])])]),t("div",rt,[t("div",{class:"article_main_section_aside_back",onClick:l[1]||(l[1]=x=>s.open_aside=!s.open_aside)}),p(y,{article_data:i.article_data,article_headers:s.article_headers,active_header_index:s.active_header_index,onScroll_to:_.scroll_to,onSwitch_aside:_.switch_aside},null,8,["article_data","article_headers","active_header_index","onScroll_to","onSwitch_aside"])],512)],2)}const gt=M(st,[["render",ot]]);export{gt as A,Ne as _};