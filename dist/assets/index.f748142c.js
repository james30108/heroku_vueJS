import{s as a}from"./setting_product.87bd4a09.js";import{_ as p,f as m,o as n,a as l,b as t,g,h as b,F as r,r as f,t as c,i as x}from"./index.0ab849c6.js";import"./http_common.5d460967.js";var v="/assets/img/products/example_product.png";const k={name:"Product",data(){return{data:[]}},methods:{get_all(){a.get_all().then(e=>{this.data=e.data,console.log(e.data)}).catch(function(e){console.log(e)}),this.$forceUpdate()},get_one(e){a.get_one(e).then(o=>{this.$router.push({name:"product_manage",params:o.data})}).catch(function(o){console.log(o)}),this.$forceUpdate()},delete_one(e){a.delete(e).then(o=>{this.get_all(),console.log(o.data)}).catch(o=>{console.log(o)})}},mounted(){this.get_all(),this.$forceUpdate()}},w=t("title",null,"\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32",-1),y={class:"container-xxl flex-grow-1 container-p-y"},$=t("h4",{class:"fw-bold py-3 mb-4"},"\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32",-1),C={class:"d-flex"},B=x("\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"),N={class:"card"},U=t("h5",{class:"card-header"},"\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23",-1),V={class:"table-responsive text-nowrap"},F={class:"table mb-3"},D=t("thead",null,[t("tr",null,[t("th",null,"#"),t("th",null,"\u0E23\u0E39\u0E1B\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"),t("th",null,"\u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"),t("th",null,"\u0E23\u0E2B\u0E31\u0E2A\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"),t("th",null,"\u0E23\u0E32\u0E04\u0E32"),t("th",null,"\u0E04\u0E25\u0E31\u0E07"),t("th",null,"\u0E22\u0E2D\u0E14\u0E02\u0E32\u0E22"),t("th",null,"\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23")])],-1),E={class:"table-border-bottom-0"},L=["src"],P={key:1,src:v,class:"d-block rounded",height:"100",width:"100"},S=["onClick"],T=t("td",null,"demo",-1),j=t("td",null,"demo",-1),q=t("td",null,"demo",-1),z=["onClick"],A=t("i",{class:"bx bx-trash me-1 font-22 text-danger"},null,-1),G=[A];function H(e,o,I,J,_,d){const i=m("router-link");return n(),l(r,null,[w,t("div",y,[$,t("div",C,[g(i,{to:"/product_manage",class:"btn btn-success text-white mb-3 mx-1"},{default:b(()=>[B]),_:1})]),t("div",N,[U,t("div",V,[t("table",F,[D,t("tbody",E,[(n(!0),l(r,null,f(_.data,(s,h)=>(n(),l("tr",null,[t("td",null,c(h+1),1),t("td",null,[s.product_image_cover!=""?(n(),l("img",{key:0,src:s.product_image_cover,class:"d-block rounded",height:"100",width:"100"},null,8,L)):(n(),l("img",P))]),t("td",null,[t("button",{onClick:u=>d.get_one(s.product_id),class:"bg-transparent border-0 text-primary"},c(s.product_name),9,S)]),t("td",null,c(s.product_code),1),T,j,q,t("td",null,[t("button",{onClick:u=>d.delete_one(s.product_id),class:"me-1 bg-transparent border-0"},G,8,z)])]))),256))])])])])])],64)}var Q=p(k,[["render",H]]);export{Q as default};