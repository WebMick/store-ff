import{u as a,r as s,G as e,d as t,e as o,w as n,f as l,i as p,j as i,k as d,l as r,F as c,h as u,q as m,t as y,p as _,C as v}from"./index-1326579e.js";import{_ as f}from"./w-loading.4fc13da4.js";import{_ as g,r as h}from"./uni-app.es.a60443e8.js";import{A as C}from"./user.2b7a6c52.js";const j=g({__name:"types",setup(g){const{t:j}=a(),w=l(),k=s(!1),M=s([]);return k.value=!0,C({areaCode:w.state.userinfo.areaCode}).then((a=>{200===a.data.code?M.value=a.data.result||[]:e({title:a.data.message,icon:"none",duration:2e3})})).catch((a=>{e({title:j("message.t1"),icon:"none",duration:2e3})})).finally((()=>{k.value=!1})),(a,s)=>{const e=v,l=h(m("w-loading"),f),g=p;return t(),o(g,{class:"ano-page ano-payment"},{default:n((()=>[i("div",{class:"payment-types"},[(t(!0),d(c,null,r(M.value,(a=>(t(),d("div",{class:"payment-type",key:a.id},[i("div",{class:"payment-type__hd",onClick:s=>{_({url:`/pages/user/payment/edit?payMode=${a.payMode}`})}},[u(e,{class:"payment-type__logo",src:`../../../static/img/icon1-${a.payMode}.png`,mode:"aspectFit"},null,8,["src"]),i("div",{class:"payment-type__title"},y(a.payMode),1)],8,["onClick"])])))),128))]),u(l,{show:k.value},null,8,["show"])])),_:1})}}},[["__scopeId","data-v-a1526a06"]]);export{j as default};
