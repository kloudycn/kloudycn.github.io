import{_ as V}from"./PageTitle-66061194.js";import{v as C,a0 as A,Y as u,a5 as N,r as U,o as i,d as n,g as f,e as t,w as m,F as y,i as x,h as p,t as d,l as w,k as E,f as L,aQ as R}from"./index-539a8d41.js";import"./ArrowShape-3c76a453.js";/* empty css                                                   *//* empty css                                                  */const S={class:"content"},W={class:"files_path"},z=t("span",{class:"path_div"},null,-1),M={key:0,class:"files_children"},$=t("div",{class:"img_box"},[t("svg",{t:"1722161427438",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3372",width:"200",height:"200"},[t("path",{d:"M832 874.666667h-640A105.386667 105.386667 0 0 1 85.333333 770.986667V253.013333A105.386667 105.386667 0 0 1 192 149.333333h196.266667a42.666667 42.666667 0 0 1 32.853333 15.786667l110.933333 135.68h298.666667A105.386667 105.386667 0 0 1 938.666667 404.48v366.506667a105.386667 105.386667 0 0 1-106.666667 103.68z","p-id":"3373"})])],-1),j={class:"text_box"},D={class:"main_text"},G=t("p",{class:"sub_text"},"Folder",-1),K=["onClick"],Q={class:"img_box"},T=["src"],Y={class:"text_box"},q={class:"main_text"},H={class:"sub_text"},I={key:1,class:"acitve_file_box"},J=["src"],O=t("div",{style:{height:"20px"}},null,-1),ae={__name:"view",setup(P){const g=C(),k=A(),b=u(null),r=u(null),v=u([]),c=u([]);function B(s){return s<1024?s+"B":s<1024*1024?(s/1024).toFixed(2)+"KB":s<1024*1024*1024?(s/1024/1024).toFixed(2)+"MB":(s/1024/1024/1024).toFixed(2)+"GB"}async function F(){var e,h;const s=r.value,a=await R.get(window.location.origin+"/assets_server/info"+s,{headers:{token:g.tokenid}});if(!a){console.error("网络错误");return}if(a.status!==200){console.error("网络错误");return}const o=a.data;if(o.status!=="success"){console.log(o);return}b.value=o.data,console.log(o.data),c.value=[],(h=(e=o.data)==null?void 0:e.children)==null||h.forEach(l=>{l.type==="directory"?c.value.push({type:"directory",name:l.name}):l.type==="file"&&l.name.endsWith(".webp")&&c.value.push({type:"file",name:l.name,size:l.size,display_size:B(l.size),src:o.data.full_path+"/"+l.name})})}N(()=>k.params,s=>{if(r.value="",v.value=[],s.id){let a=s.id.join("/");a.startsWith("/")&&(a=a.slice(1)),a.endsWith("/")&&(a=a.slice(0,-1)),r.value=a;let o="";a.split("/").forEach(e=>{o+="/"+e,v.value.push({name:e,path:o})})}F()},{immediate:!0});const _=u(null);return(s,a)=>{const o=U("RouterLink");return i(),n("div",S,[f(V,{title:"View Upload",children:[{title:"Upload",link:"/laboratory/upload"},{title:"View Upload",link:"/laboratory/view_upload"}]}),t("div",W,[f(o,{to:"/laboratory/view_upload",class:"path_link"},{default:m(()=>[w("Uploaded Files")]),_:1}),(i(!0),n(y,null,x(v.value,e=>(i(),n(y,{key:"/laboratory/view_upload"+e.path},[z,f(o,{to:"/laboratory/view_upload"+e.path,class:"path_link"},{default:m(()=>[w(d(e.name),1)]),_:2},1032,["to"])],64))),128))]),c.value.length>0?(i(),n("div",M,[(i(!0),n(y,null,x(c.value,e=>(i(),n("div",{class:"file_child",key:e.name},[e.type==="directory"?(i(),E(o,{key:0,class:"file_item directory",to:"/laboratory/view_upload/"+(r.value&&r.value+"/")+e.name},{default:m(()=>[$,t("div",j,[t("p",D,d(e.name),1),G])]),_:2},1032,["to"])):p("",!0),e.type==="file"?(i(),n("div",{key:1,class:L(["file_item file",{active:_.value===e}]),onClick:h=>_.value=e},[t("div",Q,[t("img",{src:e.src},null,8,T)]),t("div",Y,[t("p",q,d(e.name),1),t("p",H,d(e.display_size),1)])],10,K)):p("",!0)]))),128))])):p("",!0),_.value?(i(),n("div",I,[t("p",null,d(_.value.src),1),t("img",{src:_.value.src},null,8,J)])):p("",!0),O])}}};export{ae as default};