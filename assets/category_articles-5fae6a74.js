import{B as s}from"./BlogArticlesList-31c192cd.js";import{_ as i}from"./PageTitle-28eeae2b.js";import{_ as c}from"./BlogCategoriesSmall-69ccdd64.js";import{a0 as l,V as n,o as a,d as m,g as r,k as p,e as _}from"./index-508fea2e.js";import"./Pagination.vue_vue_type_style_index_0_lang-628013e8.js";import"./More-9aedd6e3.js";import"./ArticleItemMiddle-7467d1b6.js";import"./ArrowShape-eb84f005.js";/* empty css                                                   *//* empty css                                                  */const u={class:"content"},g=_("div",{style:{height:"40px"}},null,-1),j={__name:"category_articles",setup(d){const t=l(),e=n(()=>{if(t.params.id)return t.params.id.join("/")});return(o,f)=>(a(),m("div",u,[r(i,{title:o.$text("nav.blog.categories."+e.value),parent:{title:o.$text("nav.blog.categories"),link:"/blog/categories"}},null,8,["title","parent"]),r(c),(a(),p(s,{item_size:"large",category:e.value,key:e.value},null,8,["category"])),g]))}};export{j as default};