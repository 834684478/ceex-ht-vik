import{b as v}from"./bannerComponent-Cri9UPgU.js";import{i as d}from"./inputPlus-B0w_7RBd.js";import{r as n,o as m,u as q,c as h,a as l,b as i,k as c,t as _,g as p,f as g,h as T}from"./index-DbGn3I9L.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./help-CmPQ-lNE.js";import"./index-Gvn7aAZu.js";const b={class:"root"},k={__name:"registCheck",setup(w){const u=n(""),e=q(),r=g(),o=n(),a=n(null),y=t=>{try{a.value=JSON.parse(t),console.log("verifyInfo",a.value),e.query.accountType=="phone"?o.value={...a.value,mobile:e.query.account,type:1,invite_code:e.query.invitationCode,account:e.query.account,accountType:e.query.accountType}:o.value={...a.value,email:e.query.account,type:1,invite_code:e.query.invitationCode,account:e.query.account,accountType:e.query.accountType},console.log(o.value),r.push({path:"/registSetPassword",query:o.value})}catch(s){console.error("解析验证码信息失败:",s),p("验证码信息处理失败，请重试")}},f=()=>{if(!a.value){p("请输入有效的验证码");return}r.push({path:"/registSetPassword",query:o.value})};return m(()=>{u.value=e.query.accountType=="phone"?"手机":"邮箱",console.log(e.query)}),(t,s)=>(T(),h("div",b,[l(v,{showDonwload:!1,title:u.value,content:t.$t("6位数验证码已发送至您的")+c(e).query.account+" ,"+t.$t("请在30分钟内输入")},null,8,["title","content"]),i("main",null,[l(d,{labelTitle:t.$t("验证码"),type:"code",account:c(e).query.account,accountType:c(e).query.accountType,to:"/registSetPassword",onNextStep:y,autoGeetest:!0},null,8,["labelTitle","account","accountType"]),i("button",{class:"nextStep",onClick:f},_(t.$t("下一步")),1)])]))}},B=S(k,[["__scopeId","data-v-a3cfa4f7"]]);export{B as default};
