import{r as a,c as s,d as e,e as l,w as t,i as o,h as r,n,k as u,l as c,m as i,F as d,f as m,I as v,A as f,v as p,q as _,x as h,t as w,H as g}from"./index-1326579e.js";import{_ as C}from"./w-loading.4fc13da4.js";import{_ as k,r as j}from"./uni-app.es.a60443e8.js";import{g as x}from"./login.d846595a.js";const y=k({__name:"states",setup(k){const y=m(),A=a(!1),V=a(""),z=()=>{V.value=""},I=a([]);A.value=!0,x().then((a=>{200===a.data.code&&(I.value=a.data.result.records||[])})).catch((a=>{})).finally((()=>{A.value=!1}));const N=s((()=>V.value.trim()||"0"===V.value.trim()?I.value.filter((a=>a.label.indexOf(V.value.trim())>-1)):I.value));return(a,s)=>{const m=v,k=f,x=o,I=p("van-image"),b=j(_("w-loading"),C);return e(),l(x,{class:"ano-page ano-states"},{default:t((()=>[r(x,{class:"ano-search"},{default:t((()=>[r(x,{class:"input-wrap"},{default:t((()=>[r(m,{class:"uni-input",modelValue:V.value,"onUpdate:modelValue":s[0]||(s[0]=a=>V.value=a),placeholder:a.$t("states.t1")},null,8,["modelValue","placeholder"]),V.value.trim().length>0?(e(),l(k,{key:0,class:"uni-icon",onClick:z})):n("",!0)])),_:1})])),_:1}),r(x,{class:"states-list"},{default:t((()=>[(e(!0),u(d,null,c(i(N),(a=>(e(),l(x,{class:"list-row",key:a.zhName+a.areaCode,onClick:s=>{return e=a,y.commit("setAreaCode",e.areaCode),void g();var e}},{default:t((()=>[r(x,{class:"row-content"},{default:t((()=>[r(I,{class:"icon-state",fit:"cover",src:a.img,round:""},null,8,["src"]),r(k,{class:"t1"},{default:t((()=>[h(w(a.zhName),1)])),_:2},1024),r(k,{class:"t2"},{default:t((()=>[h("+"+w(a.areaCode),1)])),_:2},1024)])),_:2},1024),r(x,{class:"row-line"})])),_:2},1032,["onClick"])))),128))])),_:1}),r(b,{show:A.value},null,8,["show"])])),_:1})}}},[["__scopeId","data-v-863aa3ea"]]);export{y as default};
