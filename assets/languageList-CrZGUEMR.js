import{l as C,r as c,o as d,c as t,b as o,t as r,k as l,F as E,A as p,h as s,j as y,B as g,L as S}from"./index-C2aMkWEf.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";const N="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAPFJREFUWAnt11EKwyAMBuAeIfOEu0m9eUcqbpU4SZo/DoYFsQ82/YwQddvWszIQkAEienILCH2GNMUvgx8HEbe0o1FEtJfYHF8x6RaERbUYJYgzQkT5MwsMSmJSNmUfiXJjqhyBgmEQKDjGgwrD3EGFYyyoaRgNajpmhPoZ5juKC2htxqJXg3p7WafOqm6rwF7E9Xu5TJht5voP9Xsf814y+ClhCJOYlOXy4Y8uXVQPUwdOR40w01EazDSUBROOuoMJQ3kwcBQCA0MhMW5U5xoE25tknTLfy/C7dotSgDjFJUvKwXVNDH10fANlDf3DDLwAowX1bS4hj1MAAAAASUVORK5CYII=",Q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAO9JREFUWAnt10EKhDAMBVCP6k30zk0orhxS6FCLI4n9iTAoiJsaXn8gpdP0Pm8CDgkQ0UyUZ4fSpaSpflnMeSfOO+e8oFHM2yK1y6vZtCTz/QGMOmAEpQFJIinlFY3qMYl5NaWPRA1jqhyBgmEQKDhmBOWGuYNyx1hQYRgNKhxzhXoM8wvVDlLz0KtFR7/9nBLUYxjZTN8mAXkcyKrgzjC1beGoHiNt6tsXhjrD1EjDUVeYcJQGE4ayYNxRdzBuqBEMHIXAwFBIzDCqvZehz6Z+TqmuQe29zOOgPKC097KC0i6uPTF8vesbKO/SP0zgAzBHmdKFKikaAAAAAElFTkSuQmCC",U={class:"root"},Y=["src"],_=["onClick"],v={key:0,class:"check"},B={__name:"languageList",setup(D){const h=C(),A=c(localStorage.getItem("change-language")||"zh-CN"),i=c([{key:"en",name:"English"},{key:"zh-CN",name:"简体中文"},{key:"vi-vn",name:"Tiếng Việt"},{key:"ko-kr",name:"한국어"}]),u=()=>{history.go(-1)},m=e=>{A.value=e,localStorage.setItem("change-language",e),g.global.locale.value=e;try{const a=g.global.getLocaleMessage(e);S.use(e,a)}catch(a){console.error("Error setting Vant locale:",a)}setTimeout(()=>{history.go(-1)},300)};return d(()=>{A.value=localStorage.getItem("change-language")||"zh-CN"}),(e,a)=>(s(),t("div",U,[o("header",null,[o("span",null,r(e.$t("语言和地区")),1),o("img",{src:l(h).theme==="light"?l(N):l(Q),alt:"",onClick:u},null,8,Y)]),(s(!0),t(E,null,p(i.value,(n,k)=>(s(),t("div",{class:"area",key:k,onClick:f=>m(n.key)},[o("span",null,r(n.name),1),A.value===n.key?(s(),t("span",v,"✓")):y("",!0)],8,_))),128))]))}},z=F(B,[["__scopeId","data-v-4dec5128"]]);export{z as default};
