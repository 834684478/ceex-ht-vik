import{r as c,m as V,o as b,x as i,c as g,h,b as y,t as S,f as O,y as N,j as E,i as G,z as U,a as W,q as H,n as K,F as Q,A as X}from"./index-CSxe3lll.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{g as A,v as Y,a as Z}from"./help-CmPQ-lNE.js";const ee=["src","alt"],le={class:"country-code"},oe={__name:"selectCountry",props:{account:{type:String,default:""},from:String},setup(I,{expose:w}){const k=O(),e=I,l=c({nationalCode:"86",countryName:"中国大陆",shortName:"CN"}),a=()=>{console.log("更新国家选择信息");const t=localStorage.getItem("selectCountry");if(t)try{const o=JSON.parse(t);o&&o.nationalCode&&o.shortName?(console.log("使用存储的国家信息:",o),l.value=o):(console.log("存储的国家信息不完整，使用默认值"),r())}catch(o){console.error("解析存储的国家信息失败:",o),r()}else console.log("没有存储的国家信息，使用默认值"),r();i(()=>{const o=document.querySelector(".country-select .flag");o&&(o.src=`https://d1133sjcnebqrc.cloudfront.net/bhop/image/flag/${l.value.shortName}.png`)})},r=()=>{const t=localStorage.getItem("nationalCode")||"86";console.log("设置默认国家，区号:",t),l.value={nationalCode:t,countryName:"中国大陆",shortName:"CN"}};V(()=>localStorage.getItem("selectCountry"),()=>{console.log("国家选择信息变化，重新更新"),a()},{immediate:!0}),V(()=>localStorage.getItem("nationalCode"),()=>{console.log("国家代码变化，检查是否需要更新默认值"),localStorage.getItem("selectCountry")||r()},{immediate:!0});const C=()=>{if(e.account&&e.account.length>3){const o={account:e.account,type:"phone"};sessionStorage.setItem("tempLoginData",JSON.stringify(o))}let t="/selectCountry";e.from&&(t+=`?from=${e.from}`),console.log("跳转到国家选择页面:",t),k.push(t)};return b(()=>{console.log("国家选择组件已挂载，初始化国家信息"),a(),i(()=>{setTimeout(()=>{const t=document.querySelector(".country-select .flag");t&&(console.log("刷新国旗图标"),t.src=`https://d1133sjcnebqrc.cloudfront.net/bhop/image/flag/${l.value.shortName}.png`)},50)})}),w({updateSelectedCountry:a}),(t,o)=>(h(),g("div",{class:"country-select",onClick:C},[y("img",{class:"flag",src:`https://d1133sjcnebqrc.cloudfront.net/bhop/image/flag/${l.value.shortName}.png`,alt:l.value.countryName},null,8,ee),y("span",le,"+ "+S(l.value.nationalCode),1)]))}},te=L(oe,[["__scopeId","data-v-3f533176"]]),ae={class:"root"},ne={for:""},ue=["placeholder","value"],se={key:0,class:"errorMessage"},re={key:1,class:"emailTypeList"},ce=["onClick"],ie={__name:"accountInput",props:{modelValue:{type:String,default:""},showErrorMessage:{type:Boolean,default:!0},from:{type:String,default:"/login"},accountError:{type:Boolean,default:!1}},emits:["update:modelValue","typeChange","validChange"],setup(I,{expose:w,emit:k}){const e=I,l=k,a=c(""),r=c(!1),C=c(!1),t=c(!0),o=c(""),d=c(!1),s=c(!1),R=c(["@gmail.com","@163.com","@outlook.com"]),q=c(["@gmail.com","@163.com","@outlook.com","@qq.com","@icloud.com","@yahoo.com"]),x=N(()=>{if(!e.modelValue)return[];if(e.modelValue.includes("@")){const u=e.modelValue.split("@")[1].toLowerCase();return u?q.value.filter(n=>n.substring(1).toLowerCase().startsWith(u)):R.value}else return[]}),v=c(null);N(()=>o.value&&o.value.length>0);const F=N(()=>s.value?!0:a.value==="phone"&&e.modelValue&&e.modelValue.length>=3),B=()=>{C.value=!0,r.value=!0,d.value=a.value==="email"&&e.modelValue.includes("@"),o.value="",t.value=!0,l("validChange",!0)},D=()=>{C.value=!1,r.value=!1,setTimeout(()=>{d.value=!1},200),e.modelValue&&e.modelValue.length>=3?m():e.modelValue&&e.modelValue.length>0?(o.value="账号输入错误",t.value=!1,l("validChange",!1)):(o.value="",t.value=!0,l("validChange",!0))},P=()=>{a.value="",l("update:modelValue",""),t.value=!0,o.value="",l("validChange",!0),l("typeChange",""),s.value=!1},j=u=>{const n=u.target.value;l("update:modelValue",n),r.value||(r.value=!0),a.value==="email"&&n.includes("@")?d.value=!0:d.value=!1,i(()=>{z(n)})},M=u=>{d.value=!1;let n=e.modelValue;n.includes("@")&&(n=n.split("@")[0]),n=n+u,l("update:modelValue",n),a.value="email",l("typeChange","email"),s.value=!1,i(()=>{m()})},z=u=>{const n=u||e.modelValue,p=window.location.search.includes("from=selectCountry");if(n.length<3){o.value="",p||(s.value=!1),a.value="",l("typeChange","");return}const f=A(n);a.value!==f&&(o.value=""),f==="phone"?(localStorage.getItem("nationalCode")||localStorage.setItem("nationalCode","86"),p&&(s.value=!0)):f==="email"&&(p||(s.value=!1),C.value&&(d.value=!0)),a.value=f,l("typeChange",f),n&&n.length>=3?m():(t.value=!0,l("validChange",!0),o.value="")},m=()=>{if(a.value==="phone"){const u=localStorage.getItem("nationalCode")||"86";t.value=Y(e.modelValue,u),t.value?(o.value="",l("validChange",!0)):(o.value="账号输入错误",l("validChange",!1))}else a.value==="email"&&(t.value=Z(e.modelValue),t.value?(o.value="",l("validChange",!0)):(o.value="请输入正确的邮箱地址",l("validChange",!1)))},J=()=>{console.log("检查是否从国家选择页面返回"),window.location.search.includes("from=selectCountry")&&sessionStorage.getItem("isFromCountrySelect")==="true"?(console.log("检测到从国家选择页面返回"),s.value=!0,e.modelValue&&e.modelValue.length>0&&(a.value="phone",l("typeChange","phone"),i(()=>{console.log("设置账号类型为phone:",a.value),m(),_()})),i(()=>{sessionStorage.removeItem("isFromCountrySelect")})):window.location.search.includes("from=selectCountry")&&(sessionStorage.removeItem("isFromCountrySelect"),T())},T=()=>{a.value==="phone"&&e.modelValue&&e.modelValue.length>=3?s.value=!0:s.value=!1};V(()=>window.location.search,u=>{console.log("URL参数变化:",u),u.includes("from=selectCountry")?sessionStorage.getItem("isFromCountrySelect")==="true"?J():T():((a.value!=="phone"||!e.modelValue||e.modelValue.length<3)&&(s.value=!1),sessionStorage.removeItem("isFromCountrySelect"))},{immediate:!0});const $=()=>{sessionStorage.setItem("isFromCountrySelect","true")},_=()=>{F.value&&v.value&&(console.log("刷新地区选择组件"),i(()=>{v.value&&typeof v.value.updateSelectedCountry=="function"&&v.value.updateSelectedCountry()}))};return V(()=>localStorage.getItem("nationalCode"),()=>{console.log("监听到国家代码变化"),a.value==="phone"&&e.modelValue&&(m(),_())},{immediate:!0}),V(()=>localStorage.getItem("selectCountry"),()=>{console.log("监听到国家选择变化"),window.location.search.includes("from=selectCountry")&&(s.value=!0,e.modelValue&&e.modelValue.length>0&&(a.value="phone",l("typeChange","phone"),m()),i(()=>{_()}))},{immediate:!0}),w({validateAccountFormat:m,accountType:a,isAccountValid:t,accountErrorMessage:o,validate:()=>!e.modelValue||e.modelValue.length===0?(o.value="请输入账号信息",t.value=!1,l("validChange",!1),!1):m(),setError:u=>{o.value=u||"账号信息有误",t.value=!1,l("validChange",!1)},clearError:()=>{o.value="",t.value=!0,l("validChange",!0)}}),b(()=>{if(console.log("账号输入组件已挂载"),window.location.search.includes("from=selectCountry")&&sessionStorage.getItem("isFromCountrySelect")==="true")s.value=!0,e.modelValue&&e.modelValue.length>0&&(a.value="phone",l("typeChange","phone")),i(()=>{sessionStorage.removeItem("isFromCountrySelect")});else if(e.modelValue&&e.modelValue.length>=3){const n=A(e.modelValue);n==="phone"?(a.value="phone",l("typeChange","phone"),s.value=!0):n==="email"&&(a.value="email",l("typeChange","email"),s.value=!1)}else a.value="",l("typeChange",""),s.value=!1;i(()=>{if(v.value){const n=v.value.$el;n&&(n.removeEventListener("click",$),n.addEventListener("click",$))}_()})}),(u,n)=>(h(),g("div",ae,[y("label",ne,S(u.$t("邮箱"))+"/"+S(u.$t("手机号码")),1),y("section",{class:K(["inputPanel",{error:e.accountError&&!r.value,borderNone:!r.value&&!e.accountError,focus:r.value}])},[G(W(te,{from:e.from||"/login",account:e.modelValue,ref_key:"areaSelectRef",ref:v},null,8,["from","account"]),[[U,F.value]]),y("div",{class:"accountPanel",style:H({width:F.value?"265px":"345px"})},[y("input",{onFocus:B,onBlur:D,type:"text",placeholder:u.$t("请输入邮箱或手机号"),value:e.modelValue,onInput:j},null,40,ue),e.modelValue.length>0?(h(),g("span",{key:0,onClick:P})):E("",!0)],4)],2),e.accountError&&!r.value?(h(),g("div",se,S(u.$t(o.value)),1)):E("",!0),a.value==="email"&&d.value?(h(),g("section",re,[(h(!0),g(Q,null,X(x.value,(p,f)=>(h(),g("div",{key:f,onClick:me=>M(p)},S(e.modelValue.split("@")[0]+p),9,ce))),128))])):E("",!0)]))}},ge=L(ie,[["__scopeId","data-v-3344c69f"]]);export{ge as a};
