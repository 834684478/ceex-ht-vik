import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as $}from"./accountInput-BEywaJwB.js";import{a as _}from"./index-CJrAixGS.js";import{b as k}from"./bannerComponent-BOYZqrWq.js";import{i as L}from"./inputPlus-CUjyezBw.js";import{r as t,o as A,u as D,c as G,a as s,b as p,w as V,d as N,t as g,e as v,f as R,s as H,g as q}from"./index-DjYVw_HC.js";import"./help-CmPQ-lNE.js";const M={class:"forgetPassword"},O={id:"loginBtn",class:"login"},j={class:"toRegist"},F={__name:"login",setup(J){const E=R(),h=D(),n=t(""),m=t(""),l=t(""),w=t(""),f=t(!0),r=t(!0),c=t(!1),u=t(!1);let i=null;const b=()=>{n.value=="email"&&(n.value="")},y=e=>{n.value=e,console.log("账号类型已更新:",n.value)},C=e=>{f.value=e,c.value=!1,console.log("isAccountValid",f.value,"accountError",c.value)},T=e=>{console.log("passwordHandleValidChange",e),r.value=e,u.value=!1,console.log("isPasswordValid",r.value,"passwordError",u.value)},S=(e,o)=>{w.value=e,r.value=o},B=e=>{const o={captcha_id:"d9b22c2488def2cfa35aa4b6a4cbe74d",captcha_response:e.geetest_validate,challenge:m.value,password:w.value,username:l.value};n.value==="phone"&&(o.national_code=localStorage.getItem("nationalCode")||"86"),_.userLogin(o).then(a=>{console.log("登录成功:",a),E.push("/")}).catch(a=>{console.error("登录失败:",a),H(a.response.data.msg)})};var I=function(e){console.log("极验handler被调用"),i=e,i.onReady(function(){console.log("极验验证码准备就绪")}).onSuccess(function(){var o=i.getValidate();if(!o)return alert("请完成验证");B(o)}).onError(function(o){console.error("极验验证出错:",o)}),setTimeout(()=>{const o=document.getElementById("loginBtn");o&&o.addEventListener("click",function(){let a=!1;f.value===!1&&(c.value=!0,a=!0),r.value===!1&&(u.value=!0,a=!0),a||i.verify()})},500)};return A(()=>{if(h.path==="/login"&&h.query.from==="selectCountry"){n.value="phone";const e=sessionStorage.getItem("tempLoginData");if(e)try{const{account:o,type:a}=JSON.parse(e);n.value=a,l.value=o,sessionStorage.removeItem("tempLoginData"),setTimeout(()=>{const d=document.querySelector(".accountPanel input");d&&d.focus()},300)}catch(o){console.error("解析保存的账号数据失败:",o)}}console.log("组件挂载，初始化极验"),_.register({captcha_id:"d9b22c2488def2cfa35aa4b6a4cbe74d"}).then(e=>{console.log("极验初始化数据获取成功:",e),m.value=e.challenge,window.initGeetest?(console.log("调用initGeetest初始化极验"),window.initGeetest({gt:e.gt,challenge:e.challenge,offline:!e.success,new_captcha:e.new_captcha,product:"bind"},I)):console.error("未找到initGeetest函数")}).catch(e=>{console.error("获取极验初始化数据失败:",e)})}),(e,o)=>{const a=N("router-link");return q(),G("div",{class:"root",onClick:b},[s(k,{content:e.$t("登录您的CEEX专属账号")},null,8,["content"]),p("main",null,[s($,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=d=>l.value=d),onTypeChange:y,onValidChange:C,from:"/login",accountError:c.value},null,8,["modelValue","accountError"]),s(L,{labelTitle:e.$t("密码"),placeholder:e.$t("密码"),type:"password",onSendValue:S,onValidChange:T,showErrorMessage:!0,passwordError:u.value},null,8,["labelTitle","placeholder","passwordError"]),p("div",M,[s(a,{to:"/forgetPassword"},{default:V(()=>[v(g(e.$t("忘记密码")),1)]),_:1})]),p("button",O,g(e.$t("登录")),1),p("div",j,[v(g(e.$t("还没账号"))+" ? ",1),s(a,{to:"/regist"},{default:V(()=>[v(g(e.$t("注册")),1)]),_:1})])])])}}},Z=P(F,[["__scopeId","data-v-e57768f2"]]);export{Z as default};
