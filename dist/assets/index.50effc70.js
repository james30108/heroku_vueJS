import{s as a}from"./setting_product.e72607a6.js";import{_ as p,f as m,o as n,a as l,b as t,g,h as b,F as r,r as f,t as c,i as x}from"./index.5af5dfdf.js";import"./http_common.55020320.js";const v={name:"Product",data(){return{data:[]}},methods:{get_all(){a.get_all().then(e=>{this.data=e.data,console.log(e.data)}).catch(function(e){console.log(e)}),this.$forceUpdate()},get_one(e){a.get_one(e).then(o=>{this.$router.push({name:"product_manage",params:o.data})}).catch(function(o){console.log(o)}),this.$forceUpdate()},delete_one(e){a.delete(e).then(o=>{this.get_all(),console.log(o.data)}).catch(o=>{console.log(o)})}},mounted(){this.get_all(),this.$forceUpdate()}},k=t("title",null,"\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32",-1),y={class:"container-xxl flex-grow-1 container-p-y"},$=t("h4",{class:"fw-bold py-3 mb-4"},"\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32",-1),w={class:"d-flex"},C=x("\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"),B={class:"card"},N=t("h5",{class:"card-header"},"\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23",-1),U={class:"table-responsive text-nowrap"},V={class:"table mb-3"},F=t("thead",null,[t("tr",null,[t("th",null,"#"),t("th",null,"\u0E23\u0E39\u0E1B\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"),t("th",null,"\u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"),t("th",null,"\u0E23\u0E2B\u0E31\u0E2A\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"),t("th",null,"\u0E23\u0E32\u0E04\u0E32"),t("th",null,"\u0E04\u0E25\u0E31\u0E07"),t("th",null,"\u0E22\u0E2D\u0E14\u0E02\u0E32\u0E22"),t("th",null,"\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23")])],-1),D={class:"table-border-bottom-0"},E=["src"],L={key:1},P=["onClick"],S=t("td",null,"demo",-1),T=t("td",null,"demo",-1),j=t("td",null,"demo",-1),q=["onClick"],z=t("i",{class:"bx bx-trash me-1 font-22 text-danger"},null,-1),A=[z];function G(e,o,H,I,_,d){const i=m("router-link");return n(),l(r,null,[k,t("div",y,[$,t("div",w,[g(i,{to:"/product_manage",class:"btn btn-success text-white mb-3 mx-1"},{default:b(()=>[C]),_:1})]),t("div",B,[N,t("div",U,[t("table",V,[F,t("tbody",D,[(n(!0),l(r,null,f(_.data,(s,h)=>(n(),l("tr",null,[t("td",null,c(h+1),1),t("td",null,[s.product_image_cover!=""?(n(),l("img",{key:0,src:s.product_image_cover,class:"d-block rounded",height:"100",width:"100"},null,8,E)):(n(),l("p",L,"\u0E44\u0E21\u0E48\u0E21\u0E35\u0E23\u0E39\u0E1B\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"))]),t("td",null,[t("button",{onClick:u=>d.get_one(s.product_id),class:"bg-transparent border-0 text-primary"},c(s.product_name),9,P)]),t("td",null,c(s.product_code),1),S,T,j,t("td",null,[t("button",{onClick:u=>d.delete_one(s.product_id),class:"me-1 bg-transparent border-0"},A,8,q)])]))),256))])])])])])],64)}var O=p(v,[["render",G]]);export{O as default};
