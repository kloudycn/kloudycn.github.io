import{m,Y as _,o as u,d as r,e as t,g as a,w as s,l as n,D as i,h as c,P as v}from"./index-c121442e.js";/* empty css                                                   *//* empty css                                                  */const f=t("div",{class:"component_title"},[t("h1",null,"Dialog"),t("h2",null,"对话框")],-1),p={class:"form_buttons_row"},g={class:"dialog_content_test"},V=t("p",null," 这是对话框的内容。这是对话框的内容。这是对话框的内容。这是对话框的内容。 ",-1),k={key:0,style:{color:"var(--danger-color)"}},C={class:"form_buttons_row"},N=m({__name:"dialog",setup(x){const d=_(!1),o=_(!1);return(b,e)=>(u(),r("div",null,[f,t("div",p,[a(i,{onClick:e[0]||(e[0]=l=>d.value=!0)},{default:s(()=>[n("打开对话框")]),_:1})]),a(v,{modelValue:d.value,"onUpdate:modelValue":e[3]||(e[3]=l=>d.value=l),title:"对话框标题",need_comfirm:o.value},{default:s(()=>[t("div",g,[V,t("p",null,[n(" 如果在对话框内做出一些修改，会在退出时提示... "),o.value==!0?(u(),r("span",k," 修改未保存! ")):c("",!0)])]),t("div",C,[a(i,{onClick:e[1]||(e[1]=l=>o.value=!0),class:"plain"},{default:s(()=>[n("做一些修改")]),_:1}),a(i,{onClick:e[2]||(e[2]=l=>o.value=!1),disabled:!o.value},{default:s(()=>[n("保存修改")]),_:1},8,["disabled"])])]),_:1},8,["modelValue","need_comfirm"])]))}});export{N as default};