import{_ as k,X as b,v as x,O as g,Y as $,Q as m,Z as A,r as a,o as l,d as h,e,t as o,H as _,J as r,g as d,w as f,k as C,l as p}from"./index-b17261da.js";import{_ as V}from"./PageTitle-c4ca13cf.js";import{C as y}from"./CharacterCard-0e460992.js";import{_ as B}from"./AccountPlaceholder-b73a259b.js";import{_ as F}from"./FormTextarea-04b99bf5.js";import"./ArrowShape-011a022f.js";/* empty css                                                   *//* empty css                                                  */import"./UserBusiness-1e7a0f3b.js";const T={components:{PageTitle:V,FormButton:b,CharacterCard:y,AccountPlaceholder:B,FormTextarea:F},data(){return{edit_info:{nickname:"",email:"",website:"",descr:""}}},computed:{Account(){return x()}},mounted(){this.Account.active_character&&this.reset_edit_info()},watch:{"Account.active_character"(t){t&&this.reset_edit_info()}},methods:{reset_edit_info(){this.edit_info.nickname=this.Account.active_character.nickname,this.edit_info.email=this.Account.active_character.email,this.edit_info.website=this.Account.active_character.website,this.edit_info.descr=this.Account.active_character.descr},async submit_edit_info(){const t=await g("account/edit_character.php",{tokenid:await $(),cid:this.Account.active_character.cid,nickname:this.edit_info.nickname||"",email:this.edit_info.email||"",website:this.edit_info.website||"",descr:this.edit_info.descr||""});t.status=="success"?(m({message:"编辑成功",status:"success"}),this.editing=!1,A(),this.$router.push("/account/overview")):(console.log(t),m({message:t.message||t,status:"error"}))}}},P={id:"account_edit",class:"account_content_small"},U={key:0},N={class:"form_rows"},D={class:"form_row_lable"},S=e("div",{class:"icon"},null,-1),E={class:"text"},H=["placeholder"],J={class:"form_row_lable"},M=e("div",{class:"icon"},null,-1),O={class:"text"},Q={class:"form_row_lable"},X=e("div",{class:"icon"},null,-1),Y={class:"text"},Z=["placeholder"],j={class:"form_row_note"},q={class:"form_row_lable"},z=e("div",{class:"icon"},null,-1),G={class:"text"},I=["placeholder"],K={class:"form_row_note"},L=e("div",{style:{height:"20px"}},null,-1),R={class:"edit_button_row"};function W(t,i,ee,te,s,c){const v=a("FormTextarea"),u=a("FormButton"),w=a("AccountPlaceholder");return l(),h("div",P,[c.Account.active_character?(l(),h("div",U,[e("div",N,[e("div",D,[S,e("div",E,[e("h4",null,o(t.$text("account.nickname")),1)])]),_(e("input",{class:"kinput","onUpdate:modelValue":i[0]||(i[0]=n=>s.edit_info.nickname=n),placeholder:t.$text("account.nickname_default")},null,8,H),[[r,s.edit_info.nickname]]),e("div",J,[M,e("div",O,[e("h4",null,o(t.$text("account.intro")),1)])]),d(v,{modelValue:s.edit_info.descr,"onUpdate:modelValue":i[1]||(i[1]=n=>s.edit_info.descr=n),placeholder:t.$text("account.no_intro")},null,8,["modelValue","placeholder"]),e("div",Q,[X,e("div",Y,[e("h4",null,o(t.$text("account.email")),1)])]),_(e("input",{class:"kinput","onUpdate:modelValue":i[2]||(i[2]=n=>s.edit_info.email=n),placeholder:t.$text("account.no_email")},null,8,Z),[[r,s.edit_info.email]]),e("ul",j,[e("li",null,o(t.$text("account.email_info_private")),1),e("li",null,o(t.$text("account.email_info_avatar")),1),e("li",null,o(t.$text("account.email_info_replay")),1)]),e("div",q,[z,e("div",G,[e("h4",null,o(t.$text("account.website")),1)])]),_(e("input",{class:"kinput","onUpdate:modelValue":i[3]||(i[3]=n=>s.edit_info.website=n),placeholder:t.$text("account.no_website")},null,8,I),[[r,s.edit_info.website]]),e("ul",K,[e("li",null,o(t.$text("account.website_info")),1)])]),L,e("div",R,[d(u,{class:"plain",icon:"reset",onClick:c.reset_edit_info},{default:f(()=>[p(o(t.$text("dialog.reset")),1)]),_:1},8,["onClick"]),d(u,{icon:"confirm",onClick:c.submit_edit_info},{default:f(()=>[p(o(t.$text("dialog.save")),1)]),_:1},8,["onClick"])])])):(l(),C(w,{key:1}))])}const de=k(T,[["render",W]]);export{de as default};