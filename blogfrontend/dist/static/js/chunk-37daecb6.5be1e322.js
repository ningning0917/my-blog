(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37daecb6"],{"0c11":function(t,e,i){"use strict";var o=i("2b56"),n=i.n(o);n.a},2017:function(t,e,i){"use strict";var o=i("3b76"),n=i.n(o);n.a},"2b56":function(t,e,i){},"36bd":function(t,e,i){"use strict";var o=i("4bf8"),n=i("77f1"),r=i("9def");t.exports=function(t){var e=o(this),i=r(e.length),s=arguments.length,a=n(s>1?arguments[1]:void 0,i),l=s>2?arguments[2]:void 0,c=void 0===l?i:n(l,i);while(c>a)e[a++]=t;return e}},"3b76":function(t,e,i){},"49b2":function(t,e,i){"use strict";var o=i("d59c"),n=i.n(o);n.a},"698b":function(t,e,i){"use strict";var o=i("e7ac"),n=i.n(o);n.a},"6c7b":function(t,e,i){var o=i("5ca1");o(o.P,"Array",{fill:i("36bd")}),i("9c6c")("fill")},"9ed6":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"login-container"},[i("vue-particles",{staticClass:"particles-js",attrs:{color:"#dedede"}}),t._v(" "),i("div",{staticClass:"login-content"},[i("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,rules:t.loginRules,"label-position":"left"}},[i("div",{staticClass:"title-container"},[i("h3",{staticClass:"title"},[t._v("\n            "+t._s(t.$t("login.title"))+"\n          ")]),t._v(" "),i("lang-select",{staticClass:"set-language"})],1),t._v(" "),i("el-form-item",{attrs:{prop:"username"}},[i("span",{staticClass:"svg-container"},[i("svg-icon",{attrs:{"icon-class":"user"}})],1),t._v(" "),i("el-input",{ref:"username",attrs:{name:"username",type:"text",tabindex:"1",autocomplete:"on"},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}})],1),t._v(" "),i("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:t.capsTooltip,callback:function(e){t.capsTooltip=e},expression:"capsTooltip"}},[i("el-form-item",{attrs:{prop:"password"}},[i("span",{staticClass:"svg-container"},[i("svg-icon",{attrs:{"icon-class":"password"}})],1),t._v(" "),i("el-input",{key:t.passwordType,ref:"password",attrs:{type:t.passwordType,name:"password",tabindex:"2",autocomplete:"on"},on:{blur:function(e){t.capsTooltip=!1}},nativeOn:{keyup:function(e){return t.checkCapslock(e)}},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}}),t._v(" "),i("span",{staticClass:"show-pwd",on:{click:t.showPwd}},[i("svg-icon",{attrs:{"icon-class":"password"===t.passwordType?"eye":"eye-open"}})],1)],1)],1),t._v(" "),i("div",{staticClass:"flex-sb",staticStyle:{"margin-bottom":"20px"}},[i("el-form-item",{staticStyle:{"margin-bottom":"0",width:"300px"},attrs:{prop:"verifyCode"}},[i("span",{staticClass:"svg-container"},[i("svg-icon",{attrs:{"icon-class":"check-code"}})],1),t._v(" "),i("el-input",{attrs:{name:"checkCode",type:"text",placeholder:"请输入验证码"},model:{value:t.loginForm.verifyCode,callback:function(e){t.$set(t.loginForm,"verifyCode",e)},expression:"loginForm.verifyCode"}})],1),t._v(" "),i("el-button",{staticStyle:{border:"0"},attrs:{type:"text",loading:t.isClick}},[i("div",{staticClass:"code",staticStyle:{cursor:"pointer"},on:{click:t.getVerify}},[i("s-identify",{attrs:{"identify-code":t.identifyCode}})],1)])],1),t._v(" "),i("div",{staticClass:"flex-sb",staticStyle:{"margin-top":"0"}},[t.isLowerIE?i("a",{staticClass:"good-tip",attrs:{target:"_blank",href:"https://www.google.cn/chrome/"}},[t._v("你的浏览器版本太低，请下载谷歌浏览器，或者使用ie Edge版本 点击下载")]):t._e()]),t._v(" "),i("el-button",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.stopPropagation(),t.handleLogin(e))}}},[t._v("\n          "+t._s(t.$t("login.logIn"))+"\n        ")])],1)],1),t._v(" "),i("Dialog",{attrs:{"dialog-visible":t.dialogVisible},on:{cancel:t.cancel,verifyToken:t.verifyToken}})],1),t._v(" "),i("div",{staticClass:"copyright"},[t._v("\n    Copyright © 2019 上海保险交易所 版权所有 沪ICP备16038624号-1\n  ")])])},n=[],r=(i("ac6a"),i("cadf"),i("456d"),i("1131")),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login-dialog-wrapper"},[i("el-dialog",{attrs:{title:"动态令牌确认",visible:t.dialogVisible,width:"500px","before-close":t.cancel},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("el-form",{ref:"ruleForm",staticStyle:{"margin-bottom":"100px"},attrs:{model:t.ruleForm,rules:t.rules,"label-width":"100px"}},[i("el-form-item",{staticClass:"label-box",attrs:{label:"动态令牌",prop:"sdkNum"}},[i("el-input",{attrs:{placeholder:"动态令牌每分钟更新一次请及时输入"},model:{value:t.ruleForm.sdkNum,callback:function(e){t.$set(t.ruleForm,"sdkNum",e)},expression:"ruleForm.sdkNum"}})],1)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"default"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.cancel(e)}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary",loading:t.buttonLoading},on:{click:t.submitForm}},[t._v("确 定")])],1)],1)],1)},a=[],l={name:"Dialog",props:{dialogVisible:{type:Boolean,default:!1}},data:function(){return{ruleForm:{name:""},buttonLoading:!1,rules:{sdkNum:[{required:!0,message:"请输入动态令牌",trigger:"blur"}]}}},methods:{cancel:function(){this.ruleForm.sdkNum="",this.$emit("cancel")},submitForm:function(){var t=this;this.buttonLoading=!0,this.$refs["ruleForm"].validate((function(e){if(!e)return!1;t.$emit("verifyToken",t.ruleForm.sdkNum),setTimeout((function(){t.buttonLoading=!1,t.cancel()}),300)}))}}},c=l,d=(i("0c11"),i("2877")),u=Object(d["a"])(c,s,a,!1,null,null,null),f=u.exports,m=i("c24f"),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"s-canvas"},[i("canvas",{attrs:{id:"s-canvas",width:t.contentWidth,height:t.contentHeight}})])},h=[],g=(i("6c7b"),i("c5f6"),{name:"SIdentify",props:{identifyCode:{type:String,default:"1234"},fontSizeMin:{type:Number,default:16},fontSizeMax:{type:Number,default:40},backgroundColorMin:{type:Number,default:180},backgroundColorMax:{type:Number,default:240},colorMin:{type:Number,default:50},colorMax:{type:Number,default:160},lineColorMin:{type:Number,default:40},lineColorMax:{type:Number,default:180},dotColorMin:{type:Number,default:0},dotColorMax:{type:Number,default:255},contentWidth:{type:Number,default:112},contentHeight:{type:Number,default:38}},watch:{identifyCode:function(){this.drawPic()}},mounted:function(){this.drawPic()},methods:{randomNum:function(t,e){return Math.floor(Math.random()*(e-t)+t)},randomColor:function(t,e){var i=this.randomNum(t,e),o=this.randomNum(t,e),n=this.randomNum(t,e);return"rgb("+i+","+o+","+n+")"},drawPic:function(){var t=document.getElementById("s-canvas"),e=t.getContext("2d");e.textBaseline="bottom",e.fillStyle=this.randomColor(this.backgroundColorMin,this.backgroundColorMax),e.fillRect(0,0,this.contentWidth,this.contentHeight);for(var i=0;i<this.identifyCode.length;i++)this.drawText(e,this.identifyCode[i],i);this.drawLine(e),this.drawDot(e)},drawText:function(t,e,i){t.fillStyle=this.randomColor(this.colorMin,this.colorMax),t.font=this.randomNum(this.fontSizeMin,this.fontSizeMax)+"px SimHei";var o=(i+1)*(this.contentWidth/(this.identifyCode.length+1)),n=this.randomNum(this.fontSizeMax,this.contentHeight-2),r=this.randomNum(-10,10);t.translate(o,n),t.rotate(r*Math.PI/90),t.fillText(e,0,0),t.rotate(-r*Math.PI/90),t.translate(-o,-n)},drawLine:function(t){for(var e=0;e<2;e++)t.strokeStyle=this.randomColor(this.lineColorMin,this.lineColorMax),t.beginPath(),t.moveTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),t.lineTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),t.stroke()},drawDot:function(t){for(var e=0;e<10;e++)t.fillStyle=this.randomColor(0,255),t.beginPath(),t.arc(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight),1,0,2*Math.PI),t.fill()}}}),v=g,b=Object(d["a"])(v,p,h,!1,null,null,null),y=b.exports,C=i("90c5"),w=i("ed08"),k={name:"Login",components:{LangSelect:r["a"],Dialog:f,SIdentify:y},data:function(){var t=this,e=function(e,i,o){i.length<5?o(new Error(t.$t("login.correctUser"))):o()},i=function(e,i,o){i.length<6?o(new Error(t.$t("login.correctPass"))):o()},o=function(e,i,o){i!==t.identifyCode?o(new Error(t.$t("请输入正确的验证码"))):o()};return{loginForm:{username:"",password:"",verifyCode:"",sdkNum:""},loginRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:i}],verifyCode:[{required:!0,trigger:"blur",validator:o}]},passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1,redirect:void 0,otherQuery:{},dialogVisible:!1,validate:"",identifyCode:"",isClick:!0}},computed:{isLowerIE:function(){return Object(w["f"])()}},created:function(){this.getVerify()},mounted:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()},methods:{getVerify:function(){var t=this;this.isClick=!0,Object(m["d"])().then((function(e){t.identifyCode=Object(C["a"])(e.randomStr),t.isClick=!1}))},checkCapslock:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.shiftKey,i=t.key;i&&1===i.length&&(this.capsTooltip=e&&i>="a"&&i<="z"||!e&&i>="A"&&i<="Z"),"CapsLock"===i&&!0===this.capsTooltip&&(this.capsTooltip=!1)},showPwd:function(){var t=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){t.$refs.password.focus()}))},handleLogin:function(){var t=this;this.$refs.loginForm.validate((function(e){if(!e)return!1;t.loading=!0,t.$store.dispatch("user/login",t.loginForm).then((function(e){if("500"===e.retCode)return t.$message({type:"error",message:e.retMsg}),t.loginForm.sdkNum="",t.loading=!1,void t.getVerify();if(e.sdkFlag&&(t.dialogVisible=!0,t.loading=!1),e.token){var i=e?t.redirect:"/";e||t.$store.dispatch("tagsView/delAllViews"),t.$router.push({path:i||"/"})}})).catch((function(){t.loading=!1}))}))},cancel:function(){this.dialogVisible=!1,this.loading=!1},verifyToken:function(t){this.loginForm.sdkNum=t,this.handleLogin()},getOtherQuery:function(t){return Object.keys(t).reduce((function(e,i){return"redirect"!==i&&(e[i]=t[i]),e}),{})}}},x=k,N=(i("2017"),i("698b"),i("49b2"),Object(d["a"])(x,o,n,!1,null,"4fb4a4a5",null));e["default"]=N.exports},d59c:function(t,e,i){},e7ac:function(t,e,i){}}]);