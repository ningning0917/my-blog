(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71e0e336"],{"379a":function(t,e,a){"use strict";var n=a("e9af"),o=a.n(n);o.a},"3c34":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container documentation-container"},[a("el-button",{attrs:{type:"primary"},on:{click:t.downloadFile}},[t._v("从阿里云服务器下载xlsx文件")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.downloadUserInfo}},[t._v("下载用户信息表")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.download}},[t._v("下载在后端文件目录下的xlsx模版")])],1)},o=[],r=a("b775");function c(t){return Object(r["a"])({url:"/download/xlsx",method:"post",data:t})}function i(t){return Object(r["a"])({url:"/download/fileXls",method:"post",data:t,responseType:"arraybuffer"})}function l(t){return Object(r["a"])({url:"/download/userInfo",method:"post",data:t,responseType:"arraybuffer"})}var s={name:"Documentation",data:function(){return{articleList:[{title:"基础篇",href:"https://juejin.im/post/59097cd7a22b9d0065fb61d2"},{title:"登录权限篇",href:"https://juejin.im/post/591aa14f570c35006961acac"},{title:"实战篇",href:"https://juejin.im/post/593121aa0ce4630057f70d35"},{title:"vue-admin-template 篇",href:"https://juejin.im/post/595b4d776fb9a06bbe7dba56"},{title:"自行封装 component",href:"https://segmentfault.com/a/1190000009090836"},{title:"优雅的使用 icon",href:"https://juejin.im/post/59bb864b5188257e7a427c09"},{title:"webpack4（上）",href:"https://juejin.im/post/59bb864b5188257e7a427c09"},{title:"webpack4（下）",href:"https://juejin.im/post/5b5d6d6f6fb9a04fea58aabc"}]}},methods:{downloadUserInfo:function(){l().then(function(t){var e=new Blob([t],{type:"application/vnd.ms-excel;charset=utf-8"}),a=URL.createObjectURL(e);console.log(a,"objectUrl");var n="用户信息表.xlsx";if(window.navigator.msSaveOrOpenBlob)navigator.msSaveBlob(e,n);else{a=URL.createObjectURL(e);var o=document.createElement("a");document.body.appendChild(o),o.setAttribute("style","display:none"),o.setAttribute("href",a),o.setAttribute("download",n),o.target="_blank",o.click(),URL.revokeObjectURL(a)}})},downloadFile:function(){var t={test:1};c(t).then(function(t){if(console.log(t,"res"),200===t.code){var e=document.createElement("a");e.style.display="none",e.href=t.data.url,e.click()}})},download:function(){var t={test:1};i(t).then(function(t){var e=new Blob([t],{type:"application/vnd.ms-excel;charset=utf-8"}),a=URL.createObjectURL(e);console.log(a,"objectUrl");var n="downloadFileXls.xlsx";if(window.navigator.msSaveOrOpenBlob)navigator.msSaveBlob(e,n);else{a=URL.createObjectURL(e);var o=document.createElement("a");document.body.appendChild(o),o.setAttribute("style","display:none"),o.setAttribute("href",a),o.setAttribute("download",n),o.target="_blank",o.click(),URL.revokeObjectURL(a)}})}}},d=s,u=(a("379a"),a("2877")),p=Object(u["a"])(d,n,o,!1,null,"c08c0614",null);e["default"]=p.exports},e9af:function(t,e,a){}}]);