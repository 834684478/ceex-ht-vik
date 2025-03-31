import{r as u,x as C,o as g,c as r,b as t,h as p,v as _,F as v,z as f,f as A,u as S,g as l,t as m}from"./index-a4oT0CDR.js";import{a as w}from"./index-B8KhkOGp.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";const k={class:"country-select-container"},x={class:"search-box"},I={class:"search-wrapper"},T=["placeholder"],b={class:"country-list"},q=["onClick"],B={class:"flag-container"},E=["src"],P={class:"country-name"},$={class:"country-code"},L={__name:"SelectCountryPage",setup(M){const d=A(),c=S(),n=u([]),s=u(""),h=C(()=>{if(!s.value)return n.value;const e=s.value.toLowerCase();return n.value.filter(o=>o.countryName.toLowerCase().includes(e)||o.nationalCode.toString().includes(e))}),y=e=>{console.log("选择国家:",e),localStorage.setItem("selectCountry",JSON.stringify({nationalCode:e.nationalCode,countryName:e.countryName,shortName:e.shortName})),localStorage.setItem("nationalCode",e.nationalCode),localStorage.setItem("countrySelectedTime",new Date().getTime().toString());const o=c.query.from||"/login";console.log("返回到路径:",o),console.log("当前路由查询参数:",c.query),console.log("路由返回到:",o,"带参数 from=selectCountry"),d.replace({path:o,query:{from:"selectCountry",timestamp:new Date().getTime()}}),setTimeout(()=>{console.log("触发存储事件通知"),window.dispatchEvent(new Event("storage"))},50)};g(async()=>{try{const e=await w.getCountries();e&&e.length>0?(n.value=e,console.log("API获取国家列表成功:",n.value)):(console.error("API返回的国家列表为空"),i())}catch(e){console.error("获取国家列表失败:",e),i()}});const i=()=>{n.value=[{nationalCode:"376",countryName:"安道尔共和国",shortName:"AD"},{nationalCode:"86",countryName:"中国大陆",shortName:"CN"},{nationalCode:"335",countryName:"阿拉伯亚共和国",shortName:"AE"},{nationalCode:"213",countryName:"阿尔及利亚人民共和国",shortName:"DZ"},{nationalCode:"376",countryName:"安道尔公国",shortName:"AD"},{nationalCode:"1268",countryName:"安提瓜共和国",shortName:"AG"},{nationalCode:"54",countryName:"阿根廷共和国",shortName:"AR"},{nationalCode:"374",countryName:"亚美尼亚共和国",shortName:"AM"},{nationalCode:"61",countryName:"澳大利亚联邦",shortName:"AU"},{nationalCode:"43",countryName:"奥地利共和国",shortName:"AT"},{nationalCode:"994",countryName:"阿塞拜疆共和国",shortName:"AZ"},{nationalCode:"1242",countryName:"巴哈马国",shortName:"BS"},{nationalCode:"973",countryName:"巴林王国",shortName:"BH"}]};return(e,o)=>(l(),r("div",k,[t("section",x,[t("div",I,[p(t("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>s.value=a),placeholder:e.$t("请输入国家/地区或区号")},null,8,T),[[_,s.value]]),t("span",{class:"clear-button",onClick:o[1]||(o[1]=a=>s.value="")},"取消")])]),t("div",b,[(l(!0),r(v,null,f(h.value,(a,N)=>(l(),r("div",{class:"country-item",key:N,onClick:R=>y(a)},[t("div",B,[t("img",{class:"country-flag",src:`https://d1133sjcnebqrc.cloudfront.net/bhop/image/flag/${a.shortName}.png`,alt:""},null,8,E)]),t("div",P,m(a.countryName),1),t("div",$,"+"+m(a.nationalCode),1)],8,q))),128))])]))}},Z=D(L,[["__scopeId","data-v-e46d25a0"]]);export{Z as default};
