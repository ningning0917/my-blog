(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14067db5"],{"04f9":function(e,t,l){"use strict";var a=l("7d3d"),n=l.n(a);n.a},"1b62":function(e,t,l){"use strict";l.d(t,"a",(function(){return a})),l.d(t,"b",(function(){return n}));var a={data:function(){return{form:{},formLabelWidth:"100px"}},methods:{cancelHandle:function(){this.$emit("cancelHandle")},confirmHandle:function(){this.$emit("confirmHandle",this.form)}}},n={methods:{handleAdd:function(){this.$emit("handleAdd","新增")},handleView:function(e){this.$emit("handleView","查看",e)},handleEdit:function(e){this.$emit("handleEdit","编辑",e)}}}},"4bfa":function(e,t,l){},"60fe":function(e,t,l){"use strict";l.d(t,"f",(function(){return n})),l.d(t,"r",(function(){return i})),l.d(t,"o",(function(){return r})),l.d(t,"a",(function(){return o})),l.d(t,"e",(function(){return u})),l.d(t,"h",(function(){return s})),l.d(t,"g",(function(){return c})),l.d(t,"b",(function(){return d})),l.d(t,"n",(function(){return f})),l.d(t,"l",(function(){return m})),l.d(t,"k",(function(){return p})),l.d(t,"i",(function(){return v})),l.d(t,"j",(function(){return b})),l.d(t,"d",(function(){return h})),l.d(t,"c",(function(){return g})),l.d(t,"p",(function(){return y})),l.d(t,"q",(function(){return w})),l.d(t,"m",(function(){return _}));var a=l("b3f4"),n={disabledDate:function(e){return e.getTime()>Date.now()},shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,l=new Date;l.setTime(l.getTime()-6048e5),e.$emit("pick",[l,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,l=new Date;l.setTime(l.getTime()-2592e6),e.$emit("pick",[l,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,l=new Date;l.setTime(l.getTime()-7776e6),e.$emit("pick",[l,t])}}]},i=[{value:"0",label:"公司"},{value:"1",label:"个人"}],r=[{value:"0",label:"否"},{value:"1",label:"是"}],o="0000",u=[{value:"0",label:"门诊"},{value:"1",label:"住院"}];function s(e){var t={codeType:"city",parentValue:e};return new Promise((function(e,l){Object(a["c"])(t).then((function(t){return t?e(t.codeData):l(!1)}))}))}function c(e){var t={codeType:"area",parentValue:e};return new Promise((function(e,l){Object(a["c"])(t).then((function(t){return t?e(t.codeData):l(!1)}))}))}var d="330000",f=[{value:"1",label:"成功"},{value:"2",label:"失败"}],m=[{value:"1",label:"发起方请求报文"},{value:"2",label:"内部请求转化报文"},{value:"3",label:"内部请求响应报文"},{value:"4",label:"发起方请求响应报文"},{value:"5",label:"内部发起请求报文"},{value:"6",label:"内部发起响应报文"},{value:"其它",label:"其它"}],p=[{value:"1",label:"健康调查"},{value:"2",label:"就诊核实"},{value:"3",label:"大病核实"}],v=[{value:"0",label:"授权文件"},{value:"9",label:"其他"}],b=[{value:"N",label:"有效"},{value:"Y",label:"无效"}],h=[{value:"0",label:"临时状态"},{value:"1",label:"处理中"},{value:"2",label:"处理完成"},{value:"3",label:"处理失败"}],g=[{value:"0",label:"异步"},{value:"1",label:"同步"}],y=[{value:"0",label:"待处理"},{value:"1",label:"处理中"},{value:"2",label:"处理成功"},{value:"3",label:"推送成功"},{value:"10",label:"调用失败"},{value:"21",label:"处理失败"},{value:"31",label:"推送失败"}],w=[{value:"DISCHARGE",label:"出院登记交易"},{value:"FEEDETAIL",label:"住院费用明细交易"},{value:"INSPECT",label:"住院检查检验报告交易"},{value:"LIB",label:"住院实验报告交易"},{value:"MZDETAIL",label:"门诊实时交易"},{value:"SETTLE",label:"住院结算信息交易"},{value:"SUMMARY",label:"病例信息交易"}],_=[{value:"1",label:"门诊"},{value:"2",label:"住院"}]},"73ed":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"app-container"},[l("search-menu",{on:{search:e.onSearch,addMenu:function(t){return e.showMenu("新增")}}}),e._v(" "),l("menu-list",{attrs:{"menu-data":e.menuData},on:{handleView:e.showMenu,handleEdit:e.showMenu,refreshList:e.getList}}),e._v(" "),e.menuConfig.status?l("menu-template",{ref:"dialog",attrs:{config:e.menuConfig,tree:e.menuData,"detail-data":e.detailData},on:{cancelHandle:e.cancelHandle,confirmHandle:e.confirmHandle}}):e._e()],1)},n=[],i=l("db72"),r=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.condition}},[l("el-form-item",[l("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["coreMenuList:add"],expression:"['coreMenuList:add']"}],attrs:{icon:"el-icon-circle-plus-outline",type:"primary"},on:{click:e.addMenu}},[e._v("新增")])],1)],1)},o=[],u={name:"SearchMenu",data:function(){return{condition:{menuName:null,type:null},typeOptions:[{type:0,text:"菜单"},{type:1,text:"按钮"}]}},methods:{onSearch:function(){this.$emit("search",this.condition)},addMenu:function(){this.$emit("addMenu")}}},s=u,c=l("2877"),d=Object(c["a"])(s,r,o,!1,null,null,null),f=d.exports,m=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-table",{attrs:{data:e.menuData,"row-key":"id",border:"","tree-props":{children:"childMenus",hasChildren:!0}}},[l("el-table-column",{attrs:{prop:"menuCname",label:"菜单名称",width:"200"}}),e._v(" "),l("el-table-column",{attrs:{prop:"actionUrl",label:"url",width:"160"}}),e._v(" "),l("el-table-column",{attrs:{prop:"taskCode",label:"权限",width:"240"}}),e._v(" "),l("el-table-column",{attrs:{prop:"taskName",label:"权限描述",width:"200"}}),e._v(" "),l("el-table-column",{attrs:{prop:"createBy",label:"创建者"}}),e._v(" "),l("el-table-column",{attrs:{prop:"menuLevel",label:"菜单级别",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{label:"操作",align:"center",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"text"},on:{click:function(l){return e.handleView(t.row)}}},[e._v("查看")]),e._v(" "),l("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["coreMenuList:add"],expression:"['coreMenuList:add']"}],attrs:{type:"text"},on:{click:function(l){return e.handleEdit(t.row)}}},[e._v("编辑")]),e._v(" "),l("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["coreMenuList:add"],expression:"['coreMenuList:add']"}],attrs:{type:"text"},on:{click:function(l){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1)},p=[],v=l("1b62"),b=l("fa99"),h=l("60fe"),g={name:"MenuList",mixins:[v["b"]],props:{menuData:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{handleDelete:function(e){var t=this;this.$Msgbox.$confirm({text:"此操作将永久删除菜单".concat(e.menuCname,", 是否继续?")}).then((function(){t.handleDeleteMenu(e.id)}))},handleDeleteMenu:function(e){var t=this,l={id:e};b["a"].deleteMenu(l).then((function(e){e.resultCode===h["a"]?(t.$message({showClose:!0,message:"删除成功",type:"success"}),t.$emit("refreshList")):t.$message({type:"error",message:e.resultMsg})})).catch((function(e){console.log(e)}))}}},y=g,w=Object(c["a"])(y,m,p,!1,null,null,null),_=w.exports,k=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-dialog",{directives:[{name:"el-drag-dialog",rawName:"v-el-drag-dialog"},{name:"drag-resize",rawName:"v-drag-resize"}],attrs:{"close-on-click-modal":!1,title:e.config.title,visible:e.config.status,width:"600px","before-close":e.cancelHandle},on:{"update:visible":function(t){return e.$set(e.config,"status",t)}}},[l("el-form",{ref:"formName",attrs:{model:e.form,"label-width":e.formLabelWidth,rules:e.rules,"validate-on-rule-change":!1}},[l("el-form-item",{attrs:{label:"类型",prop:"menuLevel"}},[l("el-select",{ref:"elSelect",staticClass:"width-100",attrs:{placeholder:"请选择",clearable:"",disabled:e.isDisable,value:""},model:{value:e.form.menuLevel,callback:function(t){e.$set(e.form,"menuLevel",t)},expression:"form.menuLevel"}},[l("el-option",{attrs:{label:"目录",value:"0"}}),e._v(" "),l("el-option",{attrs:{label:"二级菜单",value:"1"}}),e._v(" "),l("el-option",{attrs:{label:"三级菜单",value:"10"}}),e._v(" "),l("el-option",{attrs:{label:"按钮",value:"2"}})],1)],1),e._v(" "),l("el-form-item",{ref:"upperId",attrs:{label:"父级菜单",prop:"upperId",rules:e.isSelectMenu?null:e.upperId}},[l("SelectTree",{staticClass:"width-100",attrs:{props:e.props,options:e.tree,value:e.form.upperId,accordion:e.isAccordion,disabled:e.isSelectMenu||e.isDisable||e.isShowUpperId||"0"===e.form.menuLevel,placeholder:e.isDisable?"":"请选择"},on:{getValue:function(t){return e.getValue(t)}}})],1),e._v(" "),l("el-form-item",{attrs:{label:"菜单名称",prop:"menuCname"}},[l("el-input",{attrs:{placeholder:"请填写名称",disabled:e.isDisable},model:{value:e.form.menuCname,callback:function(t){e.$set(e.form,"menuCname",t)},expression:"form.menuCname"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"Url",prop:"actionUrl"}},[l("el-input",{attrs:{placeholder:e.isDisable?"":"请填写url",disabled:e.isDisable},model:{value:e.form.actionUrl,callback:function(t){e.$set(e.form,"actionUrl",t)},expression:"form.actionUrl"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"权限",prop:"taskCode"}},[l("el-input",{attrs:{placeholder:"请填写权限",disabled:e.isDisable},model:{value:e.form.taskCode,callback:function(t){e.$set(e.form,"taskCode",t)},expression:"form.taskCode"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"权限描述",prop:"taskName"}},[l("el-input",{attrs:{placeholder:"请填写权限描述",disabled:e.isDisable},model:{value:e.form.taskName,callback:function(t){e.$set(e.form,"taskName",t)},expression:"form.taskName"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"序号",prop:"displayNo"}},[l("el-input",{attrs:{placeholder:"请填写序号",disabled:e.isDisable},model:{value:e.form.displayNo,callback:function(t){e.$set(e.form,"displayNo",t)},expression:"form.displayNo"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"是否生效",prop:"validInd"}},[l("el-select",{attrs:{placeholder:"请选择",disabled:e.isDisable,value:""},model:{value:e.form.validInd,callback:function(t){e.$set(e.form,"validInd",t)},expression:"form.validInd"}},[l("el-option",{attrs:{label:"是",value:"Y"}}),e._v(" "),l("el-option",{attrs:{label:"否",value:"N"}})],1)],1)],1),e._v(" "),e.isDisable?e._e():l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:e.cancelHandle}},[e._v("取 消")]),e._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:e.confirmHandle}},[e._v("确 定")])],1),e._v(" "),e.isDisable?l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:e.cancelHandle}},[e._v("返 回")])],1):e._e()],1)},C=[],$=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-select",{attrs:{value:e.valueTitle,clearable:e.clearable,disabled:e.disabled,placeholder:e.placeholder},on:{clear:e.clearHandle}},[l("el-option",{staticClass:"options",attrs:{value:e.valueTitle,label:e.valueTitle}},[l("el-tree",{ref:"selectTree",attrs:{id:"tree-option",accordion:e.accordion,data:e.options,props:e.props,"node-key":e.props.value,"default-expanded-keys":e.defaultExpandedKey},on:{"node-click":e.handleNodeClick}})],1)],1)},D=[],x=(l("ac6a"),l("c5f6"),{name:"ElTreeSelect",props:{props:{type:Object,default:function(){return{value:"id",label:"title",children:"children"}}},options:{type:Array,default:function(){return[]}},value:{type:[Number,String],default:function(){return null}},clearable:{type:Boolean,default:function(){return!0}},disabled:{type:Boolean,default:function(){return!1}},accordion:{type:Boolean,default:function(){return!1}},placeholder:{type:String,default:""}},data:function(){return{valueId:this.value,valueTitle:"",defaultExpandedKey:[]}},watch:{value:function(){this.valueId=this.value,this.initHandle()}},mounted:function(){this.initHandle()},methods:{initHandle:function(){this.valueId?(this.valueTitle=this.$refs.selectTree.getNode(this.valueId).data[this.props.label],this.$refs.selectTree.setCurrentKey(this.valueId),this.defaultExpandedKey=[this.valueId]):this.valueTitle="",this.initScroll()},initScroll:function(){this.$nextTick((function(){var e=document.querySelectorAll(".el-scrollbar .el-select-dropdown__wrap")[0],t=document.querySelectorAll(".el-scrollbar .el-scrollbar__bar");e.style.cssText="margin: 0px; max-height: none; overflow: hidden;",t.forEach((function(e){e.style.width=0}))}))},handleNodeClick:function(e){3===e.type?this.$message({showClose:!0,message:"不可以选菜单",type:"warning"}):(this.valueTitle=e[this.props.label],this.valueId=e[this.props.value],this.$emit("getValue",this.valueId),this.defaultExpandedKey=[])},clearHandle:function(){this.valueTitle="",this.valueId=null,this.defaultExpandedKey=[],this.clearSelected(),this.$emit("getValue",null)},clearSelected:function(){var e=document.querySelectorAll("#tree-option .el-tree-node");e.forEach((function(e){return e.classList.remove("is-current")}))}}}),M=x,L=(l("04f9"),Object(c["a"])(M,$,D,!1,null,"bee1fe2c",null)),T=L.exports,I={name:"MenuTemplate",components:{SelectTree:T},mixins:[v["a"]],props:{config:{type:Object,default:function(){return{}}},detailData:{type:Object,default:function(){return{}}},tree:{type:Array,default:function(){return[]}}},data:function(){return{form:{menuLevel:""},isClearable:!0,isAccordion:!0,valueId:null,props:{value:"id",label:"menuCname",children:"childMenus"},upperId:[{required:!0,message:"请选择父级菜单",trigger:"blur"}],rules:{menuLevel:[{required:!0,message:"请选择菜单类型",trigger:"change"}],menuCname:[{required:!0,message:"请输入菜单名",trigger:"blur"}],actionUrl:[{required:!0,message:"请输入Url",trigger:"blur"}],taskName:[{required:!0,message:"请输入权限描述",trigger:"blur"}],validInd:[{required:!0,message:"请选择是否生效",trigger:"change"}]}}},computed:{isDisable:function(){return"查看菜单"===this.config.title},isShowUpperId:function(){return null===this.form.menuLevel},isSelectMenu:function(){return"0"===this.form.menuLevel}},watch:{"form.menuLevel":function(e){"0"===e&&this.getValue(null)}},created:function(){this.form=this.detailData},methods:{getValue:function(e){this.valueId=e,this.form.upperId=this.valueId}}},S=I,N=(l("b87e"),Object(c["a"])(S,k,C,!1,null,"2dbf6395",null)),E=N.exports,H=l("4360"),A={name:"CoreMenuList",components:{SearchMenu:f,MenuList:_,MenuTemplate:E},data:function(){return{menuData:[],menuConfig:{status:!1,title:"添加菜单"},detailData:{},loading:!0,dailogLoading:!1}},created:function(){this.getList()},methods:{onSearch:function(e){console.log(e)},showMenu:function(e,t){this.detailData=Object(i["a"])({},t),this.menuConfig.title="".concat(e,"菜单"),this.menuConfig.status=!0},cancelHandle:function(){this.$refs.dialog.$refs.formName.resetFields(),this.menuConfig.status=!1},confirmHandle:function(e){var t=this;this.$refs.dialog.$refs.formName.validate((function(l){if(l){"0"===e.menuLevel&&(e.upperId="0");var a=null;a="编辑菜单"===t.menuConfig.title?b["a"].updadteMenu:b["a"].saveMenu,a(e).then((function(e){"0000"===e.resultCode?(t.$refs.dialog.$refs.formName.resetFields(),t.getList(),t.menuConfig.status=!1,t.$message({type:"success",message:e.resultMsg})):t.$message({type:"warning",message:e.resultMsg})})).catch((function(e){console.log(e)}))}}))},getList:function(){var e=this;H["a"].dispatch("getMenuTree").then((function(t){e.loading=!1,e.menuData=t.resultObj.menuTree})).catch((function(t){e.loading=!1,console.log(t)}))}}},j=A,O=Object(c["a"])(j,a,n,!1,null,null,null);t["default"]=O.exports},"7d3d":function(e,t,l){},b87e:function(e,t,l){"use strict";var a=l("4bfa"),n=l.n(a);n.a}}]);