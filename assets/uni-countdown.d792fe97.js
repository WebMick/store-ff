import{ah as t,d as e,e as s,w as o,O as n,x as i,t as a,n as u,h as l,A as d,i as h}from"./index-1326579e.js";import{_ as r}from"./uni-app.es.a60443e8.js";const c={en:{"uni-countdown.day":"day","uni-countdown.h":"h","uni-countdown.m":"m","uni-countdown.s":"s"},"zh-Hans":{"uni-countdown.day":"_._","uni-countdown.h":"_._","uni-countdown.m":"_._","uni-countdown.s":"_._"},"zh-Hant":{"uni-countdown.day":"_._","uni-countdown.h":"_._","uni-countdown.m":"_._","uni-countdown.s":"_._"}},{t:m}=t(c);const y=r({name:"UniCountdown",emits:["timeup"],props:{showDay:{type:Boolean,default:!0},showColon:{type:Boolean,default:!0},start:{type:Boolean,default:!0},backgroundColor:{type:String,default:""},color:{type:String,default:"#333"},fontSize:{type:Number,default:14},splitorColor:{type:String,default:"#333"},day:{type:Number,default:0},hour:{type:Number,default:0},minute:{type:Number,default:0},second:{type:Number,default:0},timestamp:{type:Number,default:0}},data:()=>({timer:null,syncFlag:!1,d:"00",h:"00",i:"00",s:"00",leftTime:0,seconds:0}),computed:{dayText:()=>m("uni-countdown.day"),hourText:t=>m("uni-countdown.h"),minuteText:t=>m("uni-countdown.m"),secondText:t=>m("uni-countdown.s"),timeStyle(){const{color:t,backgroundColor:e,fontSize:s}=this;return{color:t,backgroundColor:e,fontSize:`${s}px`,width:22*s/14+"px",lineHeight:20*s/14+"px",borderRadius:3*s/14+"px"}},splitorStyle(){const{splitorColor:t,fontSize:e,backgroundColor:s}=this;return{color:t,fontSize:12*e/14+"px",margin:s?4*e/14+"px":""}}},watch:{day(t){this.changeFlag()},hour(t){this.changeFlag()},minute(t){this.changeFlag()},second(t){this.changeFlag()},start:{immediate:!0,handler(t,e){if(t)this.startData();else{if(!e)return;clearInterval(this.timer)}}}},created:function(t){this.seconds=this.toSeconds(this.timestamp,this.day,this.hour,this.minute,this.second),this.countDown()},unmounted(){clearInterval(this.timer)},methods:{toSeconds:(t,e,s,o,n)=>t?t-parseInt((new Date).getTime()/1e3,10):60*e*60*24+60*s*60+60*o+n,timeUp(){clearInterval(this.timer),this.$emit("timeup")},countDown(){let t=this.seconds,[e,s,o,n]=[0,0,0,0];t>0?(e=Math.floor(t/86400),s=Math.floor(t/3600)-24*e,o=Math.floor(t/60)-24*e*60-60*s,n=Math.floor(t)-24*e*60*60-60*s*60-60*o):this.timeUp(),e<10&&(e="0"+e),s<10&&(s="0"+s),o<10&&(o="0"+o),n<10&&(n="0"+n),this.d=e,this.h=s,this.i=o,this.s=n},startData(){if(this.seconds=this.toSeconds(this.timestamp,this.day,this.hour,this.minute,this.second),this.seconds<=0)return this.seconds=this.toSeconds(0,0,0,0,0),void this.countDown();clearInterval(this.timer),this.countDown(),this.timer=setInterval((()=>{this.seconds--,this.seconds<0?this.timeUp():this.countDown()}),1e3)},update(){this.startData()},changeFlag(){this.syncFlag||(this.seconds=this.toSeconds(this.timestamp,this.day,this.hour,this.minute,this.second),this.startData(),this.syncFlag=!0)}}},[["render",function(t,r,c,m,y,p){const _=d,w=h;return e(),s(w,{class:"uni-countdown"},{default:o((()=>[c.showDay?(e(),s(_,{key:0,style:n([p.timeStyle]),class:"uni-countdown__number"},{default:o((()=>[i(a(y.d),1)])),_:1},8,["style"])):u("",!0),c.showDay?(e(),s(_,{key:1,style:n([p.splitorStyle]),class:"uni-countdown__splitor"},{default:o((()=>[i(a(p.dayText),1)])),_:1},8,["style"])):u("",!0),l(_,{style:n([p.timeStyle]),class:"uni-countdown__number"},{default:o((()=>[i(a(y.h),1)])),_:1},8,["style"]),l(_,{style:n([p.splitorStyle]),class:"uni-countdown__splitor"},{default:o((()=>[i(a(c.showColon?":":p.hourText),1)])),_:1},8,["style"]),l(_,{style:n([p.timeStyle]),class:"uni-countdown__number"},{default:o((()=>[i(a(y.i),1)])),_:1},8,["style"]),l(_,{style:n([p.splitorStyle]),class:"uni-countdown__splitor"},{default:o((()=>[i(a(c.showColon?":":p.minuteText),1)])),_:1},8,["style"]),l(_,{style:n([p.timeStyle]),class:"uni-countdown__number"},{default:o((()=>[i(a(y.s),1)])),_:1},8,["style"]),c.showColon?u("",!0):(e(),s(_,{key:2,style:n([p.splitorStyle]),class:"uni-countdown__splitor"},{default:o((()=>[i(a(p.secondText),1)])),_:1},8,["style"]))])),_:1})}],["__scopeId","data-v-9b1279fd"]]);export{y as _};
