import{r as n,o,d as s,e,F as c,i as r,g as d,t as i,k as p,w as u}from"./index-6f69462e.js";const m={class:"content"},h={class:"laboratory_components"},y={class:"menu"},g={class:"menu_item"},k={key:0},v={key:1},x={class:"title"},w={class:"subtitle"},B={class:"main section"},V={__name:"index",setup(L){const a=[{type:"group_name",title:"通用"},{id:"Color",title:"颜色"},{id:"Icon",title:"图标"},{type:"group_name",title:"数据录入"},{id:"Button",title:"按钮"},{id:"Input",title:"输入框"},{id:"Select",title:"选择器"},{id:"Form",title:"表单"},{type:"group_name",title:"数据展示"},{id:"Dialog",title:"对话框"},{id:"Popper",title:"弹出框"},{id:"Placeholder",title:"占位符"},{id:"Pagination",title:"分页"},{id:"Toast",title:"消息提示"},{id:"Text",title:"文字"}];return(f,C)=>{const l=n("RouterLink"),_=n("RouterView");return o(),s("div",m,[e("div",h,[e("div",y,[(o(),s(c,null,r(a,t=>e("div",g,[t.type=="hr"?(o(),s("hr",k)):t.type=="group_name"?(o(),s("h3",v,i(t.title),1)):(o(),p(l,{key:2,to:"/laboratory/components/"+t.id.toLocaleLowerCase()},{default:u(()=>[e("span",x,i(t.id),1),e("span",w,i(t.title),1)]),_:2},1032,["to"]))])),64))]),e("div",B,[d(_)])])])}}};export{V as default};