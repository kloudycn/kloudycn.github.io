import{v as w,Y as r,a3 as C,a4 as V,o as d,d as p,g as D,e as a,h as f,O as h,Q as x,J as l,aQ as F}from"./index-539a8d41.js";import{_ as L}from"./PageTitle-66061194.js";import"./ArrowShape-3c76a453.js";/* empty css                                                   *//* empty css                                                  */const O={class:"content"},A={class:"upload_main section"},B={class:"upload_local_part"},E=a("div",{class:"top_box_back"},[a("span",null,"Choose File")],-1),I=["src"],N=a("div",{class:"top_box_text"},[a("span",null,"Choose File")],-1),R=["title"],$=a("div",{class:"top_box_back"},[a("span",null,"Upload")],-1),q=["src"],z=a("div",{class:"top_box_text"},[a("span",null,"Upload")],-1),J={__name:"index",setup(M){const b=w(),c=r(null),u=r(""),_=r(!1),n=r(""),i=r("");function m(s){function t(e){const o=e.lastIndexOf(".");return o>0?e.substring(0,o):e}if((s==null?void 0:s.type.indexOf("image"))===0){c.value=s,u.value=URL.createObjectURL(s),_.value=!1;let e=t(s.name);e=e.replace(/[^a-zA-Z0-9]/g,"_"),e=e.replace(/_{2,}/g,"_"),e=e.replace(/^_|_$/g,""),n.value=e||"untitled"}else l({status:"error",message:"not an image"})}async function k(){if(_.value){console.log("file already uploaded"),l({status:"error",message:"file already uploaded"});return}if(!c.value){console.log("no file"),l({status:"error",message:"no file"});return}if(!n.value){console.log("no img_name"),l({status:"error",message:"no img_name"});return}const s=n.value.replace(/[^a-zA-Z0-9_]/g,"");if(s!==n.value){console.log("img_name contains illegal characters"),l({status:"error",message:"img_name contains illegal characters"}),n.value=s;return}try{const t=new FormData;t.append("fileContent",c.value);const o=(await F.post(window.location.origin+"/assets_server/upload",t,{headers:{"Content-Type":"multipart/form-data",token:b.tokenid,"image-name":n.value}})).data;console.log(o),o.status==="success"?(i.value=o.data.webp,l({status:"success",message:"upload success"}),_.value=!0):l({status:"error",message:o.message})}catch(t){console.log(t),l({status:"error",message:"network error"})}}const g=r(null);function y(){g.value.click()}function U(s){const t=s.target.files[0];m(t)}function v(s){const t=s.clipboardData.items;for(let e=0;e<t.length;e++)if(t[e].type.indexOf("image")===0){const o=t[e].getAsFile();m(o)}}return C(()=>{document.addEventListener("paste",v)}),V(()=>{document.removeEventListener("paste",v)}),(s,t)=>(d(),p("div",O,[D(L,{title:"Upload",children:[{title:"Upload",link:"/laboratory/upload"},{title:"View Upload",link:"/laboratory/view_upload"}]}),a("input",{class:"input_file_element",ref_key:"input_file",ref:g,type:"file",accept:"image/*",onChange:U},null,544),a("div",A,[a("div",B,[a("div",{class:"top_box",onClick:y},[E,u.value?(d(),p("img",{key:0,src:u.value},null,8,I)):f("",!0),N]),h(a("input",{type:"text",class:"kinput","onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),placeholder:"File Name"},null,512),[[x,n.value]])]),a("div",{class:"upload_net_part",title:i.value},[a("div",{class:"top_box",onClick:k},[$,i.value?(d(),p("img",{key:0,src:i.value},null,8,q)):f("",!0),z]),h(a("input",{type:"text",class:"kinput remote_img_url","onUpdate:modelValue":t[1]||(t[1]=e=>i.value=e),placeholder:"Image URL"},null,512),[[x,i.value]])],8,R)])]))}};export{J as default};