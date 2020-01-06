(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08bcb957","chunk-70e3572c"],{"09ec":function(e,t,a){"use strict";var l=a("c929"),n=a.n(l);n.a},2396:function(e,t,a){},"333d":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[a("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},n=[];a("c5f6");Math.easeInOutQuad=function(e,t,a,l){return e/=l/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function i(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function o(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(e,t,a){var l=o(),n=e-l,s=20,u=0;t="undefined"===typeof t?500:t;var c=function e(){u+=s;var o=Math.easeInOutQuad(u,l,n,t);i(o),u<t?r(e):a&&"function"===typeof a&&a()};c()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:pageNo",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:pageSize",e)}}},methods:{handleSizeChange:function(e){console.log("pageSize1:",e,"pageNo1",this.currentPage),this.$emit("pagination",{pageNo:this.currentPage,pageSize:e}),this.autoScroll&&s(0,800)},handleCurrentChange:function(e){console.log("pageSize2:",this.pageSize,"pageNo2",e),this.$emit("pagination",{pageNo:e,pageSize:this.pageSize}),this.autoScroll&&s(0,800)}}},c=u,d=(a("09ec"),a("2877")),p=Object(d["a"])(c,l,n,!1,null,"c0d46590",null);t["a"]=p.exports},"3ba5":function(e,t,a){"use strict";var l=a("74f2"),n=a.n(l);n.a},"4b4b":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"insurance-wrapper"},[a("el-tag",{staticStyle:{"margin-bottom":"5px"},attrs:{type:"success"}},[e._v("保险对账查询条件")]),e._v(" "),a("el-form",{ref:"ruleForm",staticClass:"clearfix",attrs:{model:e.ruleForm,"label-width":"120px",rules:e.rules,inline:!0,"label-position":"right"}},[a("el-form-item",{attrs:{label:"保险公司名称:",prop:"transSourceNo"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择",value:"",clearable:""},model:{value:e.ruleForm.transSourceNo,callback:function(t){e.$set(e.ruleForm,"transSourceNo",t)},expression:"ruleForm.transSourceNo"}},e._l(e.transSourceOptions,(function(e,t){return a("el-option",{key:t,attrs:{label:e.codeName,value:e.codeCode}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"数据交易号:",prop:"transNo"}},[a("el-input",{attrs:{placeholder:"请输入",clearable:""},model:{value:e.ruleForm.transNo,callback:function(t){e.$set(e.ruleForm,"transNo",t)},expression:"ruleForm.transNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"医院编码",prop:"hospitalNo"}},[a("el-input",{attrs:{placeholder:"请输入",clearable:""},model:{value:e.ruleForm.hospitalNo,callback:function(t){e.$set(e.ruleForm,"hospitalNo",t)},expression:"ruleForm.hospitalNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"票据类型:",prop:"receiptType"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择",value:"",clearable:""},model:{value:e.ruleForm.receiptType,callback:function(t){e.$set(e.ruleForm,"receiptType",t)},expression:"ruleForm.receiptType"}},e._l(e.receiptTypeOpt,(function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"患者姓名",prop:"patientName"}},[a("el-input",{attrs:{placeholder:"请输入",clearable:""},model:{value:e.ruleForm.patientName,callback:function(t){e.$set(e.ruleForm,"patientName",t)},expression:"ruleForm.patientName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"身份证号码",prop:"identityNumber"}},[a("el-input",{attrs:{placeholder:"请输入",clearable:""},model:{value:e.ruleForm.identityNumber,callback:function(t){e.$set(e.ruleForm,"identityNumber",t)},expression:"ruleForm.identityNumber"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"就诊号",prop:"visitNo"}},[a("el-input",{attrs:{placeholder:"请输入",clearable:""},model:{value:e.ruleForm.visitNo,callback:function(t){e.$set(e.ruleForm,"visitNo",t)},expression:"ruleForm.visitNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"开始时间:",prop:"startDate"}},[a("el-date-picker",{staticStyle:{"min-width":"30%"},attrs:{align:"right",type:"date",placeholder:"选择日期",clearable:"","value-format":"yyyy-MM-dd","picker-options":e.startTime},model:{value:e.ruleForm.startDate,callback:function(t){e.$set(e.ruleForm,"startDate",t)},expression:"ruleForm.startDate"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"结束时间:",prop:"endDate"}},[a("el-date-picker",{staticStyle:{"min-width":"30%"},attrs:{align:"right",type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd",clearable:"","picker-options":e.endTime},model:{value:e.ruleForm.endDate,callback:function(t){e.$set(e.ruleForm,"endDate",t)},expression:"ruleForm.endDate"}})],1),e._v(" "),a("el-button-group",{staticClass:"button-group"},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.search}},[e._v("搜索")]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary",icon:"el-icon-refresh-right"},on:{click:e.reset}},[e._v("重置")]),e._v(" "),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["insurance:export"],expression:"['insurance:export']"},{name:"waves",rawName:"v-waves"}],attrs:{type:"primary",icon:"el-icon-download"},on:{click:function(t){return e.handleExport()}}},[e._v("导出")])],1)],1),e._v(" "),a("fold",{attrs:{"fold-status":e.foldStatus},on:{handleFold:e.handleFold}}),e._v(" "),a("divider-select",{attrs:{"table-title":"保险对账查询结果",item:!1}}),e._v(" "),a("list",{attrs:{"data-list":e.dataList}}),e._v(" "),a("pagination",{attrs:{total:e.totalCount,page:e.listQuery.pageNo,limit:e.listQuery.pageSize},on:{"update:page":function(t){return e.$set(e.listQuery,"pageNo",t)},"update:limit":function(t){return e.$set(e.listQuery,"pageSize",t)},pagination:e.getList}})],1)},n=[],r=a("db72"),i=(a("386d"),a("333d")),o=a("6724"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-table",{directives:[{name:"table-move",rawName:"v-table-move"}],key:e.tableKey,attrs:{data:e.dataList,border:"",fit:"",stripe:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"序号",align:"center",width:"60",fixed:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.$index+1))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"保险公司名称",align:"center","min-width":"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("transSourceNoFilter")(t.row.transSourceNo)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"数据交易号",align:"center","min-width":"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.transNo))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"交易时间",align:"center","min-width":"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("parseTime")(t.row.transDate)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"患者名称",align:"center","min-width":"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("patientNameFilter")(t.row.patientName)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"身份证号码",align:"center","min-width":"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("identityNumberFilter")(t.row.identityNumber)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"医院编码",align:"center",prop:"hospitalNo","min-width":"120"}}),e._v(" "),a("el-table-column",{attrs:{label:"医院名称",align:"center",prop:"hospitalName","min-width":"220"}}),e._v(" "),a("el-table-column",{attrs:{label:"票据类型",align:"center","min-width":"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("businessType")(t.row.receiptType)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"就诊号",align:"center","min-width":"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.visitNo))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"住院号",align:"center","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.hospitalizationNo))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"科室",align:"center","min-width":"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.department))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"入院时间",align:"center","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.admissionTime))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"出院时间",align:"center","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.dischargeTime))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"金额",align:"center",prop:"amount","min-width":"140"}}),e._v(" "),a("el-table-column",{attrs:{label:"对账结果1-成功2-失败",align:"center","min-width":"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.result))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"对账描述",align:"center",prop:"resultDesc","min-width":"120"}})],1)],1)},u=[],c={name:"Insurance",props:{dataList:{type:Array,default:function(){return[]}}},data:function(){return{tableKey:0}}},d=c,p=a("2877"),m=Object(p["a"])(d,s,u,!1,null,null,null),f=m.exports,v=a("ce68"),b=a("cd5e"),h=a("5281"),g=a("b775");function y(e){return Object(g["a"])({url:"/MedicalReconciliaDetail/query",method:"post",data:e})}function _(e){return Object(g["a"])({url:"/MedicalReconciliaDetail/downloadExcel",method:"post",data:e,responseType:"arraybuffer"})}var w=a("60fe"),S={name:"License",directives:{waves:o["a"]},components:{DividerSelect:v["default"],List:f,fold:b["a"],Pagination:i["a"]},mixins:[h["a"]],data:function(){var e=this;return{receiptTypeOpt:w["m"],transSourceOptions:null,ruleForm:{},listQuery:{pageNo:1,pageSize:10},dataList:[],totalCount:0,startTime:{disabledDate:function(t){if(e.ruleForm.endDate)return t.getTime()>new Date(e.ruleForm.endDate).getTime()}},endTime:{disabledDate:function(t){if(e.ruleForm.startDate)return t.getTime()<new Date(e.ruleForm.startDate).getTime()-864e5}},rules:{startDate:[{required:!0,message:"请选择开始时间",trigger:"blur"}],endDate:[{required:!0,message:"请选择结束时间",trigger:"blur"}]}}},mounted:function(){this.search(),this.transSourceOptions=this.$store.state.execute.consumerNo},methods:{handleExport:function(){var e=this;this.$refs["ruleForm"].validate((function(t){t&&_(e.ruleForm).then((function(e){var t=new Blob([e],{type:"application/vnd.ms-excel"}),a=URL.createObjectURL(t),l="保险对账管理.xls";if(window.navigator.msSaveOrOpenBlob)navigator.msSaveBlob(t,l);else{a=URL.createObjectURL(t);var n=document.createElement("a");document.body.appendChild(n),n.setAttribute("style","display:none"),n.setAttribute("href",a),n.setAttribute("download",l),n.click(),URL.revokeObjectURL(a)}}))}))},search:function(){var e=this;y(Object(r["a"])({},this.ruleForm,{},this.listQuery)).then((function(t){t.resultCode===w["a"]&&(e.dataList=t.resultObj.list,e.totalCount=t.resultObj.totalCount)}))},getList:function(e){this.listQuery=e,this.search()},reset:function(){this.ruleForm={},this.$refs["ruleForm"]&&this.$refs["ruleForm"].resetFields()}}},k=S,F=(a("3ba5"),Object(p["a"])(k,l,n,!1,null,"931f451e",null));t["default"]=F.exports},5281:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var l=a("ed08"),n={data:function(){return{foldStatus:!1,flag:!1,height:0}},mounted:function(){this.height=this.$refs.ruleForm.$el.clientHeight,this.flag||(Object(l["b"])(this.$refs.ruleForm.$el,"fold-meta"),this.flag=!0),this.handleFold()},methods:{handleFold:function(){this.foldStatus?this.$refs.ruleForm.$el.style.height="0px":this.$refs.ruleForm.$el.style.height=this.height+"px",this.foldStatus=!this.foldStatus}}}},"5d90":function(e,t,a){"use strict";var l=a("b0ed"),n=a.n(l);n.a},"60fe":function(e,t,a){"use strict";a.d(t,"f",(function(){return n})),a.d(t,"r",(function(){return r})),a.d(t,"o",(function(){return i})),a.d(t,"a",(function(){return o})),a.d(t,"e",(function(){return s})),a.d(t,"h",(function(){return u})),a.d(t,"g",(function(){return c})),a.d(t,"b",(function(){return d})),a.d(t,"n",(function(){return p})),a.d(t,"l",(function(){return m})),a.d(t,"k",(function(){return f})),a.d(t,"i",(function(){return v})),a.d(t,"j",(function(){return b})),a.d(t,"d",(function(){return h})),a.d(t,"c",(function(){return g})),a.d(t,"p",(function(){return y})),a.d(t,"q",(function(){return _})),a.d(t,"m",(function(){return w}));var l=a("b3f4"),n={disabledDate:function(e){return e.getTime()>Date.now()},shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},r=[{value:"0",label:"公司"},{value:"1",label:"个人"}],i=[{value:"0",label:"否"},{value:"1",label:"是"}],o="0000",s=[{value:"0",label:"门诊"},{value:"1",label:"住院"}];function u(e){var t={codeType:"city",parentValue:e};return new Promise((function(e,a){Object(l["c"])(t).then((function(t){return t?e(t.codeData):a(!1)}))}))}function c(e){var t={codeType:"area",parentValue:e};return new Promise((function(e,a){Object(l["c"])(t).then((function(t){return t?e(t.codeData):a(!1)}))}))}var d="330000",p=[{value:"1",label:"成功"},{value:"2",label:"失败"}],m=[{value:"1",label:"发起方请求报文"},{value:"2",label:"内部请求转化报文"},{value:"3",label:"内部请求响应报文"},{value:"4",label:"发起方请求响应报文"},{value:"5",label:"内部发起请求报文"},{value:"6",label:"内部发起响应报文"},{value:"其它",label:"其它"}],f=[{value:"1",label:"健康调查"},{value:"2",label:"就诊核实"},{value:"3",label:"大病核实"}],v=[{value:"0",label:"授权文件"},{value:"9",label:"其他"}],b=[{value:"N",label:"有效"},{value:"Y",label:"无效"}],h=[{value:"0",label:"临时状态"},{value:"1",label:"处理中"},{value:"2",label:"处理完成"},{value:"3",label:"处理失败"}],g=[{value:"0",label:"异步"},{value:"1",label:"同步"}],y=[{value:"0",label:"待处理"},{value:"1",label:"处理中"},{value:"2",label:"处理成功"},{value:"3",label:"推送成功"},{value:"10",label:"调用失败"},{value:"21",label:"处理失败"},{value:"31",label:"推送失败"}],_=[{value:"DISCHARGE",label:"出院登记交易"},{value:"FEEDETAIL",label:"住院费用明细交易"},{value:"INSPECT",label:"住院检查检验报告交易"},{value:"LIB",label:"住院实验报告交易"},{value:"MZDETAIL",label:"门诊实时交易"},{value:"SETTLE",label:"住院结算信息交易"},{value:"SUMMARY",label:"病例信息交易"}],w=[{value:"1",label:"门诊"},{value:"2",label:"住院"}]},6724:function(e,t,a){"use strict";a("f751"),a("8d41");var l="@@wavesContext";function n(e,t){function a(a){var l=Object.assign({},t.value),n=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},l),r=n.ele;if(r){r.style.position="relative",r.style.overflow="hidden";var i=r.getBoundingClientRect(),o=r.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":(o=document.createElement("span"),o.className="waves-ripple",o.style.height=o.style.width=Math.max(i.width,i.height)+"px",r.appendChild(o)),n.type){case"center":o.style.top=i.height/2-o.offsetHeight/2+"px",o.style.left=i.width/2-o.offsetWidth/2+"px";break;default:o.style.top=(a.pageY-i.top-o.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",o.style.left=(a.pageX-i.left-o.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return o.style.backgroundColor=n.color,o.className="waves-ripple z-active",!1}}return e[l]?e[l].removeHandle=a:e[l]={removeHandle:a},a}var r={bind:function(e,t){e.addEventListener("click",n(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[l].removeHandle,!1),e.addEventListener("click",n(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[l].removeHandle,!1),e[l]=null,delete e[l]}},i=function(e){e.directive("waves",r)};window.Vue&&(window.waves=r,Vue.use(i)),r.install=i;t["a"]=r},"74f2":function(e,t,a){},"8d41":function(e,t,a){},ae47:function(e,t,a){"use strict";var l=a("2396"),n=a.n(l);n.a},b0ed:function(e,t,a){},c929:function(e,t,a){},cd5e:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fold-wrapper",on:{click:e._handleFold}},[e.foldStatus?a("div",{staticClass:"to-top"},[a("i",{staticClass:"el-icon-caret-top"}),e._v(" "),a("span",[e._v("折叠")])]):e._e(),e._v(" "),e.foldStatus?e._e():a("div",{staticClass:"to-top"},[a("i",{staticClass:"el-icon-caret-bottom"}),e._v(" "),a("span",[e._v("展开")])])])},n=[],r={name:"Fold",props:{foldStatus:{type:Boolean,default:!1}},methods:{_handleFold:function(){this.$emit("handleFold",!0)}}},i=r,o=(a("ae47"),a("2877")),s=Object(o["a"])(i,l,n,!1,null,"4b46ef7f",null);t["a"]=s.exports},ce68:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"divider-select-wrapper"},[a("el-divider"),e._v(" "),a("div",{staticClass:"flex-sb divider-box"},[a("div",[a("el-tag",{attrs:{type:"success"}},[e._v(e._s(e.tableTitle))])],1),e._v(" "),a("div",[e._t("default")],2),e._v(" "),e.item?a("el-select",{staticClass:"select-box",style:{width:e.width},attrs:{multiple:"",placeholder:"请选择",value:""},on:{change:e.change},model:{value:e.itemValue,callback:function(t){e.itemValue=t},expression:"itemValue"}},e._l(e.itemOptions,(function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})})),1):e._e()],1)],1)},n=[],r=(a("7f7f"),{name:"DividerSelect",props:{tableTitle:{type:String,default:""},item:{type:Boolean,default:!0},width:{type:String,default:"40%"}},data:function(){return{itemValue:[],itemOptions:[]}},mounted:function(){var e=this.$route.name;"PlatformTrading"===e?(this.itemOptions=this.$store.state.item.platformOpt,this.itemValue=this.$store.state.item.platformVal):"DiseaseDiagnosis"===e?(this.itemOptions=this.$store.state.item.diseaseOpt,this.itemValue=this.$store.state.item.diseaseVal):"CheckIn"===e&&(this.itemOptions=this.$store.state.item.checkInOpt,this.itemValue=this.$store.state.item.checkInVal)},methods:{change:function(e){var t=this.$route.name;"PlatformTrading"===t?this.$store.dispatch("item/setPlatformVal",e):"DiseaseDiagnosis"===t?this.$store.dispatch("item/setDiseaseVal",e):"CheckIn"===t&&this.$store.dispatch("item/setCheckInVal",e),this.$bus.emit("itemValue")}}}),i=r,o=(a("5d90"),a("2877")),s=Object(o["a"])(i,l,n,!1,null,"3cbb754d",null);t["default"]=s.exports}}]);