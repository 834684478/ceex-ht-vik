import{b as m}from"./bannerComponent-gfBOP4Wm.js";import{i as f}from"./inputPlus-BPgv-D4C.js";import{r as l,o as h,u as q,c as w,a as c,b as i,j as u,t as v,s as n,B as d,f as b,g as T}from"./index-DmvU6CuV.js";import{a as p}from"./index-B8KhkOGp.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./help-CmPQ-lNE.js";const S={class:"root"},V={__name:"registSetPassword",setup(R){const o=q(),r=b(),s=l(""),t=l(!1),y=(e,a)=>{console.log("密码值:",e),console.log("验证状态:",a),console.log("密码长度:",e.length),console.log("是否包含大写字母:",/[A-Z]/.test(e)),console.log("是否包含小写字母:",/[a-z]/.test(e)),console.log("是否包含数字:",/[0-9]/.test(e)),s.value=e,t.value=a},g=e=>{t.value=e},_=()=>{if(!t.value){n("密码格式不正确，请满足所有条件");return}console.log("密码格式正确"),o.query.accountType=="email"?(console.log("邮箱注册"),p.userEmailRegist({verify_code:o.query.verify_code,password1:s.value,password2:s.value,invite_code:o.query.invite_code,type:o.query.type,order_id:o.query.order_id,email:o.query.email}).then(e=>{console.log(e),d("注册成功！"),r.push({path:"/login"})},e=>{n(e.response.data.msg)})):o.query.accountType=="phone"&&(console.log("手机注册"),p.userMobileRegist({verify_code:o.query.verify_code,password1:s.value,password2:s.value,invite_code:o.query.invite_code,type:o.query.type,order_id:o.query.order_id,mobile:o.query.mobile,national_code:o.query.nationalCode||"86"}).then(e=>{d("注册成功！"),r.push({path:"/login"})},e=>{n(e.response.data.msg)}))};return h(()=>{console.log(o.query)}),(e,a)=>(T(),w("div",S,[c(m,{showDonwload:!1,title:"请输入您的CEEX专属登录密码",content:""}),i("main",null,[c(f,{labelTitle:e.$t("密码"),type:"password",showCondition:!0,account:u(o).query.account,accountType:u(o).query.accountType,onSendValue:y,onValidChange:g},null,8,["labelTitle","account","accountType"]),i("button",{class:"nextStep",onClick:_},v(e.$t("完成注册")),1)])]))}},M=C(V,[["__scopeId","data-v-260db1de"]]);export{M as default};
