import{b as d}from"./bannerComponent-vycspNol.js";import{i as p}from"./inputPlus-BYbQ2TvI.js";import{r as n,c as m,a as l,b as t,t as u,f,h as _}from"./index-C2aMkWEf.js";import{a as h}from"./index-CJrAixGS.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./help-CmPQ-lNE.js";const w={class:"root"},b={class:"tips"},S={__name:"forgetSetPassword",setup($){const s=n(""),o=n(!1),a=f(),c=(e,r)=>{s.value=e,o.value=r},i=()=>{o.value&&h.resetUserPassword({password1:s.value,password2:s.value,request_id:a.currentRoute.value.query.requestId}).then(e=>{a.push("/passwordSuccess")},e=>{console.log("重置密码失败",e)})};return(e,r)=>(_(),m("div",w,[l(d,{title:e.$t("设置密码"),content:e.$t("请为您的账户设置一个新密码")},null,8,["title","content"]),t("main",null,[l(p,{labelTitle:e.$t("新密码"),placeholder:e.$t("请输入密码"),type:"password",showCondition:!0,onSendValue:c},null,8,["labelTitle","placeholder"]),t("button",{id:"submit",class:"sure",onClick:i},u(e.$t("确定")),1),t("div",b,u(e.$t("重置密码后，24小时内不可提现资产")),1)])]))}},B=v(S,[["__scopeId","data-v-4f3c7849"]]);export{B as default};
