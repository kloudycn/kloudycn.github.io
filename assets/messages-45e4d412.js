import{_ as y}from"./AccountPlaceholder-b73a259b.js";import{a0 as h,r as w,o as t,d as n,a1 as g,k as l,w as u,e as s,t as i,p as r,a2 as f,g as v,l as k,h as M,v as p,j as x,G as z,$ as H,Y as $,F as L,i as V,a3 as B}from"./index-b17261da.js";import{m as S}from"./markdown_to_html_lite-855e1114.js";import"./index-97cf174a.js";const A=["href"],N={__name:"AutoLink",props:{to:{type:String,required:!0}},setup(e){const a=e,c=h(()=>a.to.startsWith("http"));return(o,m)=>{const _=w("RouterLink");return c.value?(t(),n("a",{key:0,href:a.to,target:"_blank"},[g(o.$slots,"default")],8,A)):(t(),l(_,{key:1,to:a.to},{default:u(()=>[g(o.$slots,"default")]),_:3},8,["to"]))}}};const b={class:"MessageItem"},C={class:"msg_left"},I={class:"msg_icon"},T={key:0,viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},j=s("path",{d:"M853.333333 138.666667H170.666667c-40.533333 0-74.666667 34.133333-74.666667 74.666666v512c0 40.533333 34.133333 74.666667 74.666667 74.666667h151.466666V917.333333c0 12.8 8.533333 25.6 19.2 29.866667 4.266667 2.133333 8.533333 2.133333 12.8 2.133333 8.533333 0 17.066667-4.266667 23.466667-10.666666l136.533333-138.666667H853.333333c40.533333 0 74.666667-34.133333 74.666667-74.666667V213.333333c0-40.533333-34.133333-74.666667-74.666667-74.666666z m10.666667 586.666666c0 6.4-4.266667 10.666667-10.666667 10.666667H501.333333c-8.533333 0-17.066667 4.266667-23.466666 10.666667l-89.6 93.866666V768c0-17.066667-14.933333-32-32-32H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667V213.333333c0-6.4 4.266667-10.666667 10.666667-10.666666h682.666666c6.4 0 10.666667 4.266667 10.666667 10.666666v512z"},null,-1),q=s("path",{d:"M512 490.666667H298.666667c-17.066667 0-32 14.933333-32 32S281.6 554.666667 298.666667 554.666667h213.333333c17.066667 0 32-14.933333 32-32S529.066667 490.666667 512 490.666667zM672 341.333333H298.666667c-17.066667 0-32 14.933333-32 32S281.6 405.333333 298.666667 405.333333h373.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z"},null,-1),F=[j,q],R={key:1,viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},D=s("path",{d:"M896.96 192.256a64 64 0 0 1 64 64v512a64 64 0 0 1-64 64h-768a64 64 0 0 1-64-64v-512a64 64 0 0 1 64-64h768zM125.376 324.096v412.16a32 32 0 0 0 32 32h706.88a32 32 0 0 0 32-32l-0.064-408.064-349.12 224.256a64 64 0 0 1-69.312-0.128L125.376 324.16z m738.88-67.84H157.376a31.872 31.872 0 0 0-21.376 8.128l358.4 234.24a32 32 0 0 0 34.88 0.064l358.72-231.872a31.936 31.936 0 0 0-23.744-10.56z"},null,-1),E=[D],G={key:2,viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},O=s("path",{d:"M328.085333 266.666667l161.28-161.28a32 32 0 0 1 45.269334 0l161.28 161.28H970.666667v661.333333h-917.333334v-661.333333h274.752z m90.496 0h186.837334L512 173.248 418.581333 266.666667zM117.333333 330.666667v533.333333h789.333334v-533.333333h-789.333334zM234.666667 469.333333h554.666666v64H234.666667v-64z m0 192h277.333333v64H234.666667v-64z"},null,-1),W=[O],Y={key:3,viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2797"},J=s("path",{d:"M824.5 826.7H221.7c-17.3 0-33.4-8.6-43.1-22.9-9.7-14.4-11.6-32.5-5.1-48.6l49.2-121.5V449.1c0-38.9 7.7-76.7 22.9-112.4 14.6-34.4 35.5-65.3 62.1-91.9 26.6-26.6 57.5-47.5 91.9-62.1 35.7-15.2 73.5-22.9 112.4-22.9h0.7c38.9 0 76.7 7.7 112.4 22.9 34.4 14.6 65.3 35.5 91.9 62.1 26.6 26.6 47.5 57.5 62.1 91.9 15.2 35.7 22.9 73.5 22.9 112.4v182.3l67.5 117.4c9.4 16.3 9.3 35.7-0.1 52-9.3 16.2-26.2 25.9-44.9 25.9z m-585-64h564.2L738 648.5V449.1c0-59.9-23.5-116.4-66.2-159.1-42.7-42.7-99.2-66.2-159.1-66.2h-0.7c-59.9 0-116.4 23.5-159.1 66.2-42.7 42.7-66.2 99.2-66.2 159.1v197.1l-47.2 116.5z"},null,-1),K=s("path",{d:"M432.8 232.8c-13.5 0-25.4-9.7-27.8-23.4-1.1-6.2-1.6-12.5-1.6-18.7 0-59.5 48.4-108 108-108s108 48.4 108 108c0 6.2-0.6 12.5-1.6 18.7-2.7 15.2-17.1 25.5-32.4 23l-56.8-9.2c-11.4-1.9-23-1.9-34.5 0l-56.8 9.2c-1.5 0.3-3 0.4-4.5 0.4z m78.5-67.5c8.8 0 17.6 0.7 26.3 2.1l21.2 3.4c-7.8-18.5-26.1-31.6-47.5-31.6s-39.7 13.1-47.5 31.6l21.2-3.4c8.8-1.4 17.6-2.1 26.3-2.1zM658 946H376.7c-17.6 0-32-14.4-32-32s14.4-32 32-32H658c17.6 0 32 14.4 32 32s-14.4 32-32 32z"},null,-1),P=[J,K],Q={class:"msg_main"},U={class:"msg_title"},X={class:"msg_time"},Z={class:"msg_content"},s6=["innerHTML"],e6={key:1,class:"msg_content_plain_text"},t6={class:"msg_info"},n6={class:"msg_info_item"},a6={class:"msg_info_item"},c6={key:0,class:"msg_info_item"},o6={__name:"MessageItem",props:{message:{type:Object,required:!0}},setup(e){const a=e,c=h(()=>{switch(a.message.msg_type){case"reply_comment":return"评论通知";case"chat":return"私信通知";case"system":return"系统通知"}return"未知消息"});return(o,m)=>(t(),n("div",b,[s("div",C,[s("div",I,[e.message.msg_type=="reply_comment"?(t(),n("svg",T,F)):e.message.msg_type=="chat"?(t(),n("svg",R,E)):e.message.msg_type=="system"?(t(),n("svg",G,W)):(t(),n("svg",Y,P))])]),s("div",Q,[s("div",U,[s("h4",null,i(e.message.msg_title),1),s("p",X,i(e.message.insert_time),1)]),s("div",Z,[e.message.content_type=="md"?(t(),n("div",{key:0,class:"msg_content_article",innerHTML:r(S)(e.message.msg_content)},null,8,s6)):(t(),n("p",e6,i(e.message.msg_content),1))]),s("div",t6,[s("p",n6,i(r(f)(e.message.insert_time)),1),s("p",a6,i(c.value),1),e.message.msg_link?(t(),n("p",c6,[v(N,{to:e.message.msg_link},{default:u(()=>[k("查看详情")]),_:1},8,["to"])])):M("",!0)])])]))}};const _6={class:"MessagesList"},i6=s("div",{class:"msg_section_title"},[s("h2",{class:"section_title"},"最近收到的十条消息")],-1),l6={__name:"MessagesList",setup(e){const a=p(),c=x({loading:!0}),o=z([]);m();async function m(){const _=await H("/community/get_msg.php",{tokenid:await $(),cid:a.active_character.cid});c.loading=!1,o.value=_.data}return(_,m6)=>(t(),n("div",_6,[i6,(t(!0),n(L,null,V(o.value,d=>(t(),l(o6,{key:d.msg_no,message:d},null,8,["message"]))),128)),v(B,{loading:c.loading,empty:!c.loading&&o.value.length==0,empty_title:_.$text("account.no_messages")},null,8,["loading","empty","empty_title"])]))}},u6={__name:"messages",setup(e){const a=p();return(c,o)=>r(a).active_character?(t(),l(l6,{key:0})):(t(),l(y,{key:1}))}};export{u6 as default};