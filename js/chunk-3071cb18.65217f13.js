(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3071cb18"],{1022:function(s,i,t){},"1c88":function(s,i,t){"use strict";var a=t("1022"),o=t.n(a);o.a},aa97:function(s,i,t){"use strict";t.r(i);var a=function(){var s=this,i=s.$createElement,a=s._self._c||i;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"app"},[a("div",{staticClass:"appHeadImg"}),a("div",{staticClass:"dTitle"},[s._v("App下载")]),a("div",{staticClass:"dDescrpit"},[s._v(" AGP 是立足现代化农业生产，围绕农产品的种子培育、种植、加工、销售以及售 后管理等环节打造的农业产业生态公链。 ")]),a("div",{staticClass:"ios"},[a("div",{staticClass:"isoIcon"}),a("div",{on:{click:function(i){return s.showmask("ios")}}},[s._v("IOS下载")])]),a("div",{staticClass:"android"},[a("div",{staticClass:"androidIcon"}),a("div",{on:{click:function(i){return s.showmask("android")}}},[s._v("安卓下载")])])]),a("div",{staticClass:"book"},[a("div",{staticClass:"bookImg"}),a("div",{staticClass:"bookDown"},[s._v("白皮书下载")]),a("div",{staticClass:"bookDes"},[s._v(" AGP 将着力于农业生态实体经济，以农 业大数据、农产品供应链管理、农产品质量安全追踪与溯源、农业智能硬件、新 农村金融等为主要落脚点，打造覆盖农业发展的全产业链和高附加值的农业经济 新生态。 ")]),a("div",{staticClass:"downBtn",on:{click:function(i){return s.openBook()}}},[s._v("一键下载")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:s.ios,expression:"ios"}],staticClass:"maskIos",on:{click:function(i){return s.closemask("ios")}}},[a("img",{attrs:{src:t("710e"),alt:""}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:s.android,expression:"android"}],staticClass:"maskAndroid",on:{click:function(i){return s.closemask()}}},[a("img",{attrs:{src:t("b565"),alt:""}})])])},o=[],n=t("bc3a"),c=t.n(n),d={methods:{showmask:function(s){"ios"==s?this.ios=!0:this.android=!0},closemask:function(s){"ios"==s?this.ios=!1:this.android=!1},openBook:function(){c.a.get("http://159.138.131.239:8084/prod-api/openApi/paper/1").then((function(s){window.open(s.data.data[0].downUrl)})).catch((function(s){window.console.log(s)}))}},data:function(){return{ios:!1,android:!1}}},e=d,r=(t("1c88"),t("2877")),l=Object(r["a"])(e,a,o,!1,null,"0e1b2195",null);i["default"]=l.exports}}]);
//# sourceMappingURL=chunk-3071cb18.65217f13.js.map