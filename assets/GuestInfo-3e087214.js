import{C as u}from"./CharacterCard-0e460992.js";import{v as c,o,d as l,p as n,k as a,e as t}from"./index-b17261da.js";const r={class:"GuestInfo"},i={key:1,class:"no_guest_info"},d=t("h3",null,"未设置游客身份",-1),h=[d],p=t("ul",{class:"guest_info_intro"},[t("li",null,"游客身份可以用来发表评论"),t("li",null," 游客身份仅包含昵称、头像、个人链接等信息，不具备身份认证的功能，可能会被仿冒 "),t("li",null," 游客身份在提交评论前只会保存在本地，您可以随时删除或者修改游客信息 "),t("li",null," 使用游客身份提交评论不可更改、不可删除，新设置的游客身份只会影响之后发表的评论 ")],-1),f=t("div",{style:{height:"10px"}},null,-1),g=t("div",{style:{height:"20px"}},null,-1),x={__name:"GuestInfo",setup(k){const e=c();return(v,s)=>(o(),l("div",r,[n(e).guest_character?(o(),a(u,{key:0,character:n(e).guest_character},null,8,["character"])):(o(),l("div",i,h)),p,f,t("button",{class:"kbutton",onClick:s[0]||(s[0]=_=>n(e).open_guest_info=!0)}," 设置游客身份 "),g,t("button",{class:"kbutton danger plain",onClick:s[1]||(s[1]=_=>n(e).open_delete_guest_info=!0)}," 删除游客信息 ")]))}};export{x as _};