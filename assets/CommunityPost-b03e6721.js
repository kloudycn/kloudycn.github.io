import{C as j,_ as W,d as K}from"./Comment-c7f6dd89.js";import{_ as E,x as G,a3 as H,P as O,N as J,X as Q,U as X,M as Y,ar as Z,as as $,ae as tt,v as et,b as st,c as w,$ as ot,Q as u,O as k,Y as P,at as M,q as f,r as m,o as i,d as l,g as a,h,w as r,e as t,t as d,f as nt,T as C,k as S,ak as ct,F as z,i as T,H as at,I as it,l as p}from"./index-b17261da.js";import{_ as _t}from"./Pagination.vue_vue_type_style_index_0_lang-51f35c6a.js";import{C as lt}from"./CharacterCard-0e460992.js";import{_ as mt}from"./FormTextarea-04b99bf5.js";import{W as rt}from"./Warning-c02491ed.js";import{C as dt}from"./Comment-b7d843c6.js";import{_ as ut}from"./GuestInfo-3e087214.js";const ht={components:{Comment:j,Avatar:G,Placeholder:H,PageDialog:O,FormSwitch:J,FormTextarea:mt,Pagination:_t,CharacterCard:lt,FormButton:Q,Warning:rt,CommentIcon:dt,User:X,Mail:Y,Local:Z,Close:$,Plus:tt,CommentContent:W,GuestInfo:ut},props:["post_id"],data(){return{post:null,comments:null,post_page:null,order:"recent",active_order:null,open_add_images_dialog:!1,add_images_address:"",form:{content:"",attachments:[]},reply_target:null,delete_target:null,open_delete_dialog:!1,open_user_dialog:!1,open_write_comment_dialog:!1,write_comment_loading:!1,delete_dialog:{display_content:null,comment_no:null},viewing_character:null,scroll_target:null,active_animation:!1,reload_loading:!1,component_actived:!0}},activated(){this.component_actived=!0},deactivated(){this.component_actived=!1},computed:{Account(){return et()},SettingsStore(){return st()}},mounted(){this.active_animation=!1,this.post_page=this.$route.query.cmpage||1,this.get_post()},watch:{post_id:{handler(){this.active_animation=!1,this.reload_loading=!1,this.comments=null,this.post=null,this.post_page=this.$route.query.cmpage||1,this.scroll_target=null,this.get_post()}},"$route.query.cmpage":{handler(){if(!this.component_actived)return;const s=this.$route.query.cmpage||1;s!==this.post_page&&(this.post_page=s,this.scroll_target=this.$el,this.active_animation=!1,this.reload_loading=!0,this.get_post())}}},methods:{archor_event(s){var e;s&&(w(s.$el,!0),(e=s.$refs.comment_main_box)==null||e.classList.add("hightlight"),setTimeout(()=>{var _;(_=s.$refs.comment_main_box)==null||_.classList.remove("hightlight")},1e3))},comment_loaded(s){let e=null;this.$route.hash&&(e=K(this.$route.hash.slice(1))),e==s.comment.comment_no&&(setTimeout(()=>{var _;w(s.$el,!0),(_=s.$refs.comment_main_box)==null||_.classList.add("hightlight")},500),setTimeout(()=>{var _;(_=s.$refs.comment_main_box)==null||_.classList.remove("hightlight")},1500))},async get_post(){const s=await ot("community/get_post.php",{post_id:this.post_id,page:this.post_page});s.status=="success"?(this.post=s.data.post,this.comments=s.data.post_comments,this.$nextTick(()=>{this.get_post_done()})):(this.comments=null,u({message:s.message,status:"error"}))},get_post_done(){this.scroll_target&&(w(this.scroll_target),this.scroll_target=null),this.$nextTick(()=>{this.reload_loading=!1})},async add_comment_action(){this.write_comment_loading=!0;const s="comment_toast_key-"+Math.random();u({message:"评论发表中",status:"loading",key:s}),k("community/new_comment.php",{content:this.form.content.trim(),attachments:JSON.stringify(this.form.attachments),post_id:this.post_id,tokenid:await P(),cid:this.Account.active_character.cid,device_id:await M(),parent_no:this.reply_target?this.reply_target.comment_no:null}).then(e=>{let _=e;_.status=="success"?(u({message:f("community.post_comment_success"),status:"success",key:s}),this.active_animation=!0,this.get_post(),this.form.content="",this.form.attachments=[],this.open_write_comment_dialog=!1,this.write_comment_loading=!1):(console.log(_),this.write_comment_loading=!1,u({message:_.message||_,status:"error"}))})},async add_comment_visitor_action(){this.write_comment_loading=!0;const s=this.Account.guest_character.nickname,e=this.Account.guest_character.email,_=this.Account.guest_character.website;k("community/new_visitor_comment.php",{content:this.form.content.trim(),post_id:this.post_id,nickname:s,email:e,website:_,device_id:await M(),parent_no:this.reply_target?this.reply_target.comment_no:null}).then(x=>{let o=x;o.status=="success"?(u({message:f("community.post_comment_success"),status:"success"}),this.active_animation=!0,this.get_post(),this.form.content="",this.open_write_comment_dialog=!1,this.write_comment_loading=!1):(console.log(o),this.write_comment_loading=!1,u({message:o.message||o,status:"error"}))})},add_comment_request(){if(this.form.content.trim()==""&&this.form.attachments.length==0){u({message:f("community.enter_comment"),status:"error"});return}this.Account.active_character?this.add_comment_action():this.Account.guest_character?this.add_comment_visitor_action():console.log("无可用账户")},reply_comment_event(s){this.open_write_comment_dialog=!0,this.reply_target=s},delete_comment_event(s){this.open_delete_dialog=!0,this.delete_target=s},async delete_comment_request(){k("community/delete_comment.php",{tokenid:await P(),comment_no:this.delete_target.comment_no}).then(s=>{s.status=="success"?(this.get_post(),this.active_animation=!0,u({status:"success",message:f("community.delete_comment_success")}),this.open_delete_dialog=!1):u({status:"error",message:s.message})})},view_user_event(s){this.open_user_dialog=!0,this.viewing_character=s},add_emoji_action(){u({message:"该功能开发中（请使用系统自带的 Emoji 输入法）"})},add_upload_images_action(){u({message:"该功能开发中"})},add_images_action(){if(!this.add_images_address){u({message:"请输入图片地址",status:"error"});return}if(this.form.attachments.find(s=>s.src==this.add_images_address)){u({message:"图片已存在",status:"error"});return}this.form.attachments.push({type:"image",src:this.add_images_address}),this.add_images_address="",this.open_add_images_dialog=!1},remove_attachment_action(s){this.form.attachments.splice(s,1)}}},gt={key:0,class:"CommunityPost"},pt={key:0,class:"first_loading"},vt={key:0,class:"community_post_section section"},ft={class:"comments_title"},yt={class:"section_title"},wt={class:"comments_count"},kt={class:"comments_viewer"},Ct={key:0,class:"comments_tools_box blur_part"},xt={class:"comments_tools"},bt={class:"comments_loading"},At={class:"comments_loading_icon_box"},Vt={key:0,class:"confirm_dialog danger delete_dialog"},Lt={class:"icon_container"},Pt={class:"title_container"},Mt={class:"confirm_dialog_title"},St={class:"confirm_dialog_text"},zt={class:"add_comment_reply_target"},Tt={class:"add_comment_reply_target_character_name"},Bt={class:"button_container"},Ft={key:0,class:"write_comment_dialog"},qt={class:"comment_need_character"},Ut=t("p",{class:"top_text"}," 需要使用 Kloudy 账户或者游客身份发表评论 ",-1),Dt={class:"options_row"},Nt=t("h4",null,"登录",-1),It=t("p",null,"打开登录窗口，使用已有 Kloudy 账户",-1),Rt=[Nt,It],jt=t("h4",null,"注册",-1),Wt=t("p",null,"离开当前页面，前往创建新的 Kloudy 账户",-1),Kt=t("h4",null,"游客",-1),Et=t("p",null,"无需注册，使用游客身份发表评论",-1),Gt=[Kt,Et],Ht={key:1,class:"write_comment_dialog"},Ot={key:0,class:"add_comment_character"},Jt={class:"character_name_box"},Qt={class:"character_name"},Xt={class:"character_cid"},Yt=t("div",{style:{flex:"1"}},null,-1),Zt={key:1,class:"add_comment_character"},$t={class:"character_name_box"},te={class:"character_name"},ee=t("p",{class:"character_cid"},"游客",-1),se=t("div",{style:{flex:"1"}},null,-1),oe={key:2,class:"add_comment_reply_target"},ne={class:"add_comment_reply_target_character_name"},ce={class:"add_comment_text"},ae={key:3,class:"add_comment_actions"},ie=t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"12634",width:"200",height:"200"},[t("path",{d:"M511.573333 85.333333C276.053333 85.333333 85.333333 276.48 85.333333 512s190.72 426.666667 426.24 426.666667C747.52 938.666667 938.666667 747.52 938.666667 512S747.52 85.333333 511.573333 85.333333zM362.666667 341.333333c35.413333 0 64 28.586667 64 64S398.08 469.333333 362.666667 469.333333 298.666667 440.746667 298.666667 405.333333 327.253333 341.333333 362.666667 341.333333z m350.293333 286.72C674.133333 711.253333 599.04 768 512 768s-162.133333-56.746667-200.96-139.946667c-6.826667-14.08 3.413333-30.72 19.2-30.72h363.52c15.786667 0 26.026667 16.64 19.2 30.72zM661.333333 469.333333c-35.413333 0-64-28.586667-64-64S625.92 341.333333 661.333333 341.333333s64 28.586667 64 64-28.586667 64-64 64z"})],-1),_e=[ie],le=t("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 200 200"},[t("g",{id:"图层_1"},[t("path",{d:`M155.3,97.8c1.5-1.8,2.8-2.6,4.2-2.6c1.3,0,2.7,1,4.2,2.8c1.6,2,3.4,4.4,5.5,7.2c2.1,2.8,4.1,5.6,6.3,8.6\r
		c2.1,2.9,4.2,5.8,6.2,8.5c2,2.7,3.8,5.1,5.3,7c1.5,1.9,1.9,3.4,1.3,4.5c-0.6,1.2-2,1.8-4.2,1.8c-1.3,0-2.8,0-4.5,0.1\r
		c-1.7,0.1-3.2,0.1-4.4,0.1c-1.7-0.1-2.8,0.6-3.3,2c-0.5,1.4-0.7,3.3-0.7,5.6v5.7c0,2.1,0,4.2-0.1,6.3c0,2.1-0.1,4.1-0.1,5.9v4.7\r
		c-0.1,2.7-0.6,4.7-1.5,6c-0.9,1.2-2.7,1.9-5.4,1.9c-1.9,0-3.5,0-4.9-0.1c-1.4,0-3-0.1-4.7-0.1c-1.5,0-2.6-0.2-3.4-0.7\r
		c-0.8-0.5-1.5-1.1-1.9-1.8c-0.4-0.7-0.7-1.5-0.8-2.4c-0.1-0.9-0.2-1.7-0.2-2.5c0-1.9,0-3.9,0.1-6c0-2.2,0.1-4.4,0.1-6.6\r
		c0-2.3,0-4.4,0.1-6.6c0-2.1,0.1-4.1,0.1-5.9c0-1.6-0.2-2.9-0.6-3.9c-0.4-1-1.4-1.4-3-1.4c-1.5,0-3.3-0.1-5.4-0.2\r
		c-2.2-0.1-3.9-0.1-5.2-0.1c-2.3,0-3.7-0.7-4.1-2.1c-0.4-1.4,0.3-3.2,2.2-5.4c1.6-2,3.4-4.4,5.5-7.1c2.1-2.7,4.1-5.5,6.2-8.3\r
		c2.1-2.8,4.1-5.6,6.1-8.2C152.1,101.7,153.8,99.5,155.3,97.8L155.3,97.8z M155.3,97.8`}),t("g",null,[t("ellipse",{cx:"66.7",cy:"58.3",rx:"16.7",ry:"16.7"}),t("path",{d:`M138.3,153.6c0-2.3,0-4.6,0.1-6.8c0-0.4,0-0.8,0-1.2c-2.1-0.1-3.1-0.1-3.6,0l-0.6,0c-8.1,0-12.4-4.8-13.7-9.4\r
			c-0.9-3.3-1-8.5,4.1-14.5c1.5-1.9,3.3-4.2,5.2-6.8c2-2.7,4.1-5.5,6.2-8.3l6.1-8.2c1.7-2.2,3.1-4.1,4.5-5.8l-14.9-19.9\r
			c-2.1-2.8-6.1-3.3-8.9-1.1c-0.4,0.3-0.8,0.7-1.1,1.1l-33.3,43.1c-1.4,1.8-4.1,2.1-5.9,0.6c-0.2-0.2-0.5-0.4-0.6-0.6L63.6,93.7\r
			c-2.2-2.7-6.1-3.1-8.8-1c-0.4,0.3-0.7,0.6-1,1l-35.4,45.8c-1.1,1.5-1.7,3.2-1.8,5.1v7.6c0,3.4,2.8,6.2,6.2,6.2h115.4\r
			C138.3,156.8,138.3,155.2,138.3,153.6z`})])])],-1),me=[le],re={version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 200 200",style:{"enable-background":"new 0 0 200 200"},"xml:space":"preserve"},de=t("g",{id:"图层_1"},[t("path",{d:`M166.6,128.8c6.7-0.1,13,3.4,16.4,9.2c3.4,5.8,3.4,13,0,18.8c-3.4,5.8-9.7,9.3-16.4,9.2l-12.2,0c3.5-2.4,6.2-5.8,7.9-9.7\r
		l4.3,0c3.2,0.1,6.2-1.6,7.9-4.4c1.6-2.8,1.6-6.2,0-9c-1.6-2.8-4.7-4.5-7.9-4.4l-18.3,0c-3,0-5.8,1.5-7.4,4\r
		c-1.6,2.5-1.9,5.6-0.8,8.4H130c-1-5.4,0.4-11.1,4-15.3c3.5-4.3,8.8-6.7,14.3-6.7L166.6,128.8L166.6,128.8z M120.8,128.8l12.2,0\r
		c-3.5,2.4-6.2,5.8-7.9,9.7l-4.3,0c-3.2-0.1-6.2,1.6-7.9,4.4c-1.6,2.8-1.6,6.2,0,9c1.6,2.8,4.7,4.5,7.9,4.4h18.3\r
		c2.8,0,5.4-1.3,7-3.5c1.7-2.2,2.3-5,1.5-7.7l9.9,0c0.7,5.3-1,10.6-4.5,14.6c-3.5,4-8.6,6.3-13.9,6.3l-18.3,0\r
		c-10.1-0.2-18.2-8.5-18.2-18.6C102.6,137.3,110.7,129,120.8,128.8L120.8,128.8z M120.8,128.8`}),t("g",null,[t("ellipse",{cx:"66.7",cy:"58.3",rx:"16.7",ry:"16.7"}),t("path",{d:`M92.6,147.4c0-15.4,12.6-28.3,28-28.6c0.1,0,0.1,0,0.2,0l12.2,0c2,0,4,0.6,5.6,1.7c3.1-1.1,6.3-1.7,9.7-1.7l17.9,0\r
			l-34.5-46.1c-2.1-2.8-6.1-3.3-8.9-1.1c-0.4,0.3-0.8,0.7-1.1,1.1l-33.3,43.1c-1.4,1.8-4.1,2.1-5.9,0.6c-0.2-0.2-0.5-0.4-0.6-0.6\r
			L63.6,93.7c-2.2-2.7-6.1-3.1-8.8-1c-0.4,0.3-0.7,0.6-1,1l-35.4,45.7c-1.1,1.5-1.7,3.2-1.8,5.1v7.6c0,3.4,2.8,6.2,6.2,6.2h71.9\r
			C93.4,155,92.6,151.3,92.6,147.4z`})])],-1),ue=t("g",{id:"图层_2"},null,-1),he=[de,ue],ge={key:4,class:"add_comments_attachments"},pe=["onClick"],ve=["title"],fe=["src"],ye={class:"attachment_item"},we=t("div",{style:{height:"20px"}},null,-1),ke={class:"add_comment_submit"},Ce={class:"add_images_dialog"},xe={class:"form_buttons_row"};function be(s,e,_,x,o,c){const y=m("Placeholder"),B=m("Comment"),F=m("Pagination"),q=m("CommentIcon"),U=m("Warning"),b=m("CommentContent"),g=m("FormButton"),v=m("PageDialog"),D=m("CharacterCard"),N=m("RouterLink"),A=m("Avatar"),V=m("FormTextarea"),I=m("Close"),R=m("Plus");return c.SettingsStore.settings.active_interaction?(i(),l("div",gt,[o.comments?h("",!0):(i(),l("div",pt,[a(y,{loading:""})])),a(C,{name:"fade_trans"},{default:r(()=>[o.comments?(i(),l("div",vt,[t("div",ft,[t("h3",yt,d(s.$text("community.comments")),1),t("p",wt,d(o.post&&o.post.comments_count),1)]),t("div",kt,[t("div",{class:nt(["comments_main",{active_animation:o.active_animation}])},[a(C,{name:"comment_empty_transition"},{default:r(()=>[o.comments&&o.comments.length==0?(i(),S(y,{key:0,empty:o.comments&&o.comments.length==0,empty_title:s.$text("community.no_comments")},null,8,["empty","empty_title"])):h("",!0)]),_:1}),a(ct,{name:"comment_transition",tag:"span"},{default:r(()=>[(i(!0),l(z,null,T(o.comments,n=>(i(),S(B,{key:n.comment_no,ref_for:!0,ref:"comment_ref",comment:n,onView_user_event:c.view_user_event,onRefresh_event:e[0]||(e[0]=L=>c.get_post()),onReply_comment_event:c.reply_comment_event,onDelete_comment_event:c.delete_comment_event,onLoaded:c.comment_loaded,onArchor_event:c.archor_event},null,8,["comment","onView_user_event","onReply_comment_event","onDelete_comment_event","onLoaded","onArchor_event"]))),128))]),_:1})],2),o.post?(i(),l("div",Ct,[t("div",xt,[a(F,{page_name:"cmpage",max_page:Math.ceil(o.post.comments_count/10)||1},null,8,["max_page"]),t("a",{class:"comments_tools_button",onClick:e[1]||(e[1]=n=>{o.open_write_comment_dialog=!0,o.reply_target=null})},[a(q),t("span",null,d(s.$text("community.post_comment")),1)])])])):h("",!0)]),a(C,{name:"fade_trans"},{default:r(()=>[at(t("div",bt,[t("div",At,[a(y,{loading:""})])],512),[[it,o.reload_loading]])]),_:1})])):h("",!0)]),_:1}),a(v,{modelValue:o.open_delete_dialog,"onUpdate:modelValue":e[4]||(e[4]=n=>o.open_delete_dialog=n)},{default:r(()=>[o.delete_target?(i(),l("div",Vt,[t("div",Lt,[a(U)]),t("div",Pt,[t("h3",Mt,d(s.$text("community.delete_comment_confirm")),1),t("p",St,d(s.$text("community.delete_comment_warning")),1)]),t("div",zt,[t("p",Tt,d(o.delete_target.character.nickname),1),a(b,{comment:o.delete_target},null,8,["comment"])]),t("div",Bt,[a(g,{class:"plain",icon:"cancel",onClick:e[2]||(e[2]=n=>o.open_delete_dialog=!1)},{default:r(()=>[p(d(s.$text("dialog.cancel")),1)]),_:1}),a(g,{class:"danger",icon:"confirm",onClick:e[3]||(e[3]=n=>c.delete_comment_request())},{default:r(()=>[p(d(s.$text("dialog.confirm")),1)]),_:1})])])):h("",!0)]),_:1},8,["modelValue"]),a(v,{modelValue:o.open_user_dialog,"onUpdate:modelValue":e[5]||(e[5]=n=>o.open_user_dialog=n),title:" ",class:"user_dialog"},{default:r(()=>[a(D,{character:o.viewing_character},null,8,["character"])]),_:1},8,["modelValue"]),a(v,{modelValue:o.open_write_comment_dialog,"onUpdate:modelValue":e[15]||(e[15]=n=>o.open_write_comment_dialog=n),title:s.$text("community.write_comment"),loading:o.write_comment_loading},{default:r(()=>[!c.Account.active_character&&!c.Account.guest_character?(i(),l("div",Ft,[t("div",qt,[Ut,t("div",Dt,[t("a",{class:"option_item",onClick:e[6]||(e[6]=n=>c.Account.open_login=!0)},Rt),a(N,{class:"option_item",to:"/account/register"},{default:r(()=>[jt,Wt]),_:1}),t("a",{class:"option_item",onClick:e[7]||(e[7]=n=>c.Account.open_guest_info=!0)},Gt)])])])):h("",!0),c.Account.active_character||c.Account.guest_character?(i(),l("div",Ht,[c.Account.active_character?(i(),l("div",Ot,[a(A,{slot:"reference",avatar_url:c.Account.active_character.avatar_url,nickname:c.Account.active_character.nickname,size:40},null,8,["avatar_url","nickname"]),t("div",Jt,[t("p",Qt,d(c.Account.active_character.nickname),1),t("p",Xt," @"+d(c.Account.active_character.cid),1)]),Yt])):c.Account.guest_character?(i(),l("div",Zt,[a(A,{slot:"reference",avatar_url:c.Account.guest_character.avatar_url,nickname:c.Account.guest_character.nickname,size:40},null,8,["avatar_url","nickname"]),t("div",$t,[t("p",te,d(c.Account.guest_character.nickname),1),ee]),se,t("button",{class:"kbutton plain",onClick:e[8]||(e[8]=n=>c.Account.open_guest_info=!0)}," 编辑游客身份 ")])):h("",!0),o.reply_target?(i(),l("div",oe,[t("p",ne,d(s.$text("community.reply_to"))+" "+d(o.reply_target.character.nickname),1),a(b,{comment:o.reply_target},null,8,["comment"])])):h("",!0),t("div",ce,[a(V,{placeholder:s.$text("community.write_comment"),min_line:5,modelValue:o.form.content,"onUpdate:modelValue":e[9]||(e[9]=n=>o.form.content=n)},null,8,["placeholder","modelValue"])]),c.Account.is_admin?(i(),l("div",ae,[t("button",{class:"add_comment_action_btn",onClick:e[10]||(e[10]=(...n)=>c.add_emoji_action&&c.add_emoji_action(...n))},_e),t("button",{class:"add_comment_action_btn",onClick:e[11]||(e[11]=(...n)=>c.add_upload_images_action&&c.add_upload_images_action(...n))},me),t("button",{class:"add_comment_action_btn",onClick:e[12]||(e[12]=n=>o.open_add_images_dialog=!0)},[(i(),l("svg",re,he))])])):h("",!0),o.form.attachments.length>0?(i(),l("div",ge,[(i(!0),l(z,null,T(o.form.attachments,(n,L)=>(i(),l("div",{class:"attachment_item",key:n.type+n.src},[t("button",{class:"remove_attachment",onClick:Ae=>c.remove_attachment_action(L)},[a(I)],8,pe),t("div",{class:"image_attachment",title:n.src},[t("img",{src:n.src},null,8,fe)],8,ve)]))),128)),t("div",ye,[t("button",{class:"add_image_attachment",onClick:e[13]||(e[13]=n=>o.open_add_images_dialog=!0)},[a(R)])])])):h("",!0),we,t("div",ke,[a(g,{icon:"submit",onClick:e[14]||(e[14]=n=>c.add_comment_request())},{default:r(()=>[p(d(s.$text("community.post_comment")),1)]),_:1})])])):h("",!0)]),_:1},8,["modelValue","title","loading"]),a(v,{modelValue:o.open_add_images_dialog,"onUpdate:modelValue":e[18]||(e[18]=n=>o.open_add_images_dialog=n)},{default:r(()=>[t("div",Ce,[a(V,{placeholder:"输入图片地址",modelValue:o.add_images_address,"onUpdate:modelValue":e[16]||(e[16]=n=>o.add_images_address=n)},null,8,["modelValue"]),t("div",xe,[a(g,{class:"plain",onClick:e[17]||(e[17]=n=>o.open_add_images_dialog=!1)},{default:r(()=>[p("取消")]),_:1}),a(g,{onClick:c.add_images_action},{default:r(()=>[p("添加图片")]),_:1},8,["onClick"])])])]),_:1},8,["modelValue"])])):h("",!0)}const Fe=E(ht,[["render",be]]);export{Fe as C};