import{b as y}from"./bannerComponent-Cri9UPgU.js";import{a as _}from"./accountInput-BIERb252.js";import{i as T}from"./inputPlus-B0w_7RBd.js";import{a as d}from"./index-Gvn7aAZu.js";import{r as n,c as S,a as i,b as p,t as C,f as I,h as b,g as m}from"./index-DbGn3I9L.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./help-CmPQ-lNE.js";const P={class:"forgetPassword"},V={__name:"forgetPassword",setup(q){const s=I(),a=n(""),t=n(""),l=n(!1),r=n(!0),f=e=>{console.log(" typeChange",a.value,e),t.value=e},g=e=>{r.value=e,l.value=!1,console.log("isAccountValid",r.value,"accountError",l.value)},v=()=>{if(r.value===!1){l.value=!0,console.log("账号格式错误");return}},h=e=>{e=JSON.parse(e),console.log(" nextStep",e);const c=n({mobile:a.value,order_id:e.order_id,verify_code:e.verify_code,national_code:localStorage.getItem("nationalCode")}),u=n({email:a.value,order_id:e.order_id,verify_code:e.verify_code});console.log(a.value),t.value==="phone"?d.userMobileFindPasswordStep1(c.value).then(o=>{console.log(" res",o),o.need2FA?s.push("/againCheck?authType="+o.authType+"&accountType="+t.value+"&account="+a.value+"&requestId="+o.requestId):s.push("/forgetSetPassword?requestId="+o.requestId)},o=>{console.log("电话验证步骤1失败",o),m(o.response.data.msg)}):t.value==="email"&&d.userEmailFindPasswordStep1(u.value).then(o=>{console.log(" res",o),o.need2FA?s.push("/againCheck?authType="+o.authType+"&accountType="+t.value+"&account="+a.value+"&requestId="+o.requestId):s.push("/forgetSetPassword?requestId="+o.requestId)},o=>{console.log("邮箱验证步骤1失败",o),m(o.response.data.msg)})};return(e,c)=>(b(),S("div",P,[i(y,{title:e.$t("忘记密码")+"?",content:e.$t("现在，我们将协助您找回账号")},null,8,["title","content"]),p("main",null,[i(_,{modelValue:a.value,"onUpdate:modelValue":c[0]||(c[0]=u=>a.value=u),onTypeChange:f,onValidChange:g,from:"/login",accountError:l.value},null,8,["modelValue","accountError"]),i(T,{labelTitle:e.$t("验证码"),type:"code",account:a.value,accountType:t.value,to:"/setPassword",verifyCodeType:"3",onNextStep:h},null,8,["labelTitle","account","accountType"]),p("button",{id:"loginBtn",class:"nextStep",onClick:v},C(e.$t("下一步")),1)])]))}},$=w(V,[["__scopeId","data-v-aaa24ae3"]]);export{$ as default};
