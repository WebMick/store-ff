import{r as s,d as a,e,w as o,i as n,j as t,t as r,h as l,x as u,f as i,z as g,v as c,az as v,q as d}from"./index-1326579e.js";import{_ as p}from"./ano-popup.0d0d982a.js";import{_ as w,r as _}from"./uni-app.es.a60443e8.js";import{_ as m}from"./w-loading.4fc13da4.js";const f=w({__name:"setting",setup(w){const f=i(),h=s(!1),R=s([{text:"English",value:"en"}]);function j(){f.commit("setUserinfo",{}),f.commit("setAccessToken",""),g({url:"/pages/login/login"})}return(s,i)=>{const g=c("van-button"),w=v,f=_(d("ano-popup"),p),k=_(d("w-loading"),m),x=n;return a(),e(x,{class:"ano-page ano-setting"},{default:o((()=>[t("div",{class:"user-navs"},[t("div",{class:"user-navRow"},[t("div",{class:"user-navRow__title"},r(s.$t("user.t140")),1),t("div",{class:"user-navRow__arrow"})]),t("div",{class:"user-navRow"},[t("div",{class:"user-navRow__title"},r(s.$t("user.t142")),1),t("div",{class:"user-navRow__arrow"})])]),l(g,{class:"setting-logout",color:"#1F1F1F",plain:"",onClick:j},{default:o((()=>[u(r(s.$t("user.t143")),1)])),_:1}),l(f,{show:s.showLanguagesPicker,"onUpdate:show":i[0]||(i[0]=a=>s.showLanguagesPicker=a),type:"bottom"},{default:o((()=>[l(w,{range:R.value,"range-key":"text","range-value":"value",onChange:s.onLanguagesConfirm},null,8,["range","onChange"])])),_:1},8,["show"]),l(k,{show:h.value},null,8,["show"])])),_:1})}}},[["__scopeId","data-v-fd4fd2a3"]]);export{f as default};
