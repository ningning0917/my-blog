(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-706bab1e"],{"26c4":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticStyle:{"margin-bottom":"20px"}},[n("el-button",{staticClass:"option-item",attrs:{type:"primary",size:"small"}},[n("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/tree/master/src/components/TreeTable",target:"_blank"}},[e._v("Documentation")])]),e._v(" "),n("div",{staticClass:"option-item"},[n("el-tag",[e._v("Expand All")]),e._v(" "),n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:e.reset},model:{value:e.defaultExpandAll,callback:function(t){e.defaultExpandAll=t},expression:"defaultExpandAll"}})],1),e._v(" "),n("div",{staticClass:"option-item"},[n("el-tag",[e._v("Show Checkbox")]),e._v(" "),n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.showCheckbox,callback:function(t){e.showCheckbox=t},expression:"showCheckbox"}})],1)],1),e._v(" "),n("tree-table",{key:e.key,attrs:{"default-expand-all":e.defaultExpandAll,data:e.data,columns:e.columns,border:""},scopedSlots:e._u([{key:"scope",fn:function(t){var a=t.scope;return[n("el-tag",[e._v("level: "+e._s(a.row._level))]),e._v(" "),n("el-tag",[e._v("expand: "+e._s(a.row._expand))]),e._v(" "),n("el-tag",[e._v("select: "+e._s(a.row._select))])]}},{key:"operation",fn:function(t){var a=t.scope;return[n("el-button",{attrs:{type:"primary",size:""},on:{click:function(t){return e.click(a)}}},[e._v("\n        Click\n      ")])]}}])})],1)},l=[],i=(n("ac6a"),n("456d"),n("8ad4")),c=[{id:0,event:"Event-0",timeLine:50},{id:1,event:"Event-1",timeLine:100,children:[{id:2,event:"Event-2",timeLine:10},{id:3,event:"Event-3",timeLine:90,children:[{id:4,event:"Event-4",timeLine:5},{id:5,event:"Event-5",timeLine:10},{id:6,event:"Event-6",timeLine:75,children:[{id:7,event:"Event-7",timeLine:50,children:[{id:71,event:"Event-7-1",timeLine:25},{id:72,event:"Event-7-2",timeLine:5},{id:73,event:"Event-7-3",timeLine:20}]},{id:8,event:"Event-8",timeLine:25}]}]}]}],o=c,r={name:"TreeTableDemo",components:{treeTable:i["a"]},data:function(){return{defaultExpandAll:!1,showCheckbox:!0,key:1,columns:[{label:"Checkbox",checkbox:!0},{label:"",key:"id",expand:!0},{label:"Event",key:"event",width:200,align:"left"},{label:"Scope",key:"scope"},{label:"Operation",key:"operation"}],data:o}},watch:{showCheckbox:function(e){e?this.columns.unshift({label:"Checkbox",checkbox:!0}):this.columns.shift(),this.reset()}},methods:{reset:function(){++this.key},click:function(e){console.log(e);var t=e.row,n=Object.keys(t).map(function(e){return"<p>".concat(e,": ").concat(t[e],"</p>")}).join("");this.$notify({title:"Success",dangerouslyUseHTMLString:!0,message:n,type:"success"})}}},s=r,d=(n("6810"),n("2877")),u=Object(d["a"])(s,a,l,!1,null,"794f832b",null);t["default"]=u.exports},6810:function(e,t,n){"use strict";var a=n("a833"),l=n.n(a);l.a},"8ad4":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-table",e._g(e._b({attrs:{data:e.tableData,"row-style":e.showRow}},"el-table",e.$attrs,!1),e.$listeners),[e._t("selection"),e._v(" "),e._t("pre-column"),e._v(" "),e._l(e.columns,function(t){return n("el-table-column",{key:t.key,attrs:{label:t.label,width:t.width,align:t.align||"center","header-align":t.headerAlign},scopedSlots:e._u([{key:"default",fn:function(a){return[e._t(t.key,[t.expand?[n("span",{style:{"padding-left":+a.row._level*e.indent+"px"}}),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.showSperadIcon(a.row),expression:"showSperadIcon(scope.row)"}],staticClass:"tree-ctrl",on:{click:function(t){return e.toggleExpanded(a.$index)}}},[a.row._expand?n("i",{staticClass:"el-icon-minus"}):n("i",{staticClass:"el-icon-plus"})])]:e._e(),e._v(" "),t.checkbox?[a.row[e.defaultChildren]&&a.row[e.defaultChildren].length>0?n("el-checkbox",{style:{"padding-left":+a.row._level*e.indent+"px"},attrs:{indeterminate:a.row._select},on:{change:function(t){return e.handleCheckAllChange(a.row)}},model:{value:a.row._select,callback:function(t){e.$set(a.row,"_select",t)},expression:"scope.row._select"}}):n("el-checkbox",{style:{"padding-left":+a.row._level*e.indent+"px"},on:{change:function(t){return e.handleCheckAllChange(a.row)}},model:{value:a.row._select,callback:function(t){e.$set(a.row,"_select",t)},expression:"scope.row._select"}})]:e._e(),e._v("\n        "+e._s(a.row[t.key])+"\n      ")],{scope:a})]}}],null,!0)})})],2)},l=[],i=(n("28a5"),n("c5f6"),n("ac6a"),n("2b0e"));function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"children",n=[];return e.forEach(function(e,a){if(i["default"].set(e,"_index",a),n.push(e),e[t]&&e[t].length>0){var l=c(e[t],t);n=n.concat(l)}}),n}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.parent,a=void 0===n?null:n,l=t.preIndex,c=void 0!==l&&l,r=t.level,s=void 0===r?0:r,d=t.expand,u=void 0!==d&&d,h=t.children,p=void 0===h?"children":h,v=t.show,f=void 0===v||v,_=t.select,b=void 0!==_&&_;e.forEach(function(e,t){var n=(c?"".concat(c,"-").concat(t):t)+"";i["default"].set(e,"_id",n),i["default"].set(e,"_level",s),i["default"].set(e,"_expand",u),i["default"].set(e,"_parent",a),i["default"].set(e,"_show",f),i["default"].set(e,"_select",b),e[p]&&e[p].length>0&&o(e[p],{parent:e,level:s+1,expand:u,preIndex:n,children:p,status:status,select:b})})}var r={name:"TreeTable",props:{data:{type:Array,required:!0,default:function(){return[]}},columns:{type:Array,default:function(){return[]}},defaultExpandAll:{type:Boolean,default:!1},defaultChildren:{type:String,default:"children"},indent:{type:Number,default:50}},data:function(){return{guard:1}},computed:{children:function(){return this.defaultChildren},tableData:function(){var e=this.data;if(0===this.data.length)return[];o(e,{expand:this.defaultExpandAll,children:this.defaultChildren});var t=c(e,this.defaultChildren);return t}},methods:{addBrother:function(e,t){e._parent?e._parent.children.push(t):this.data.push(t)},addChild:function(e,t){e.children||this.$set(e,"children",[]),e.children.push(t)},delete:function(e){var t=e._index,n=e._parent;n?n.children.splice(t,1):this.data.splice(t,1)},getData:function(){return this.tableData},showRow:function(e){var t=e.row,n=t._parent,a=!n||n._expand&&n._show;return t._show=a,a?"animation:treeTableShow 1s;-webkit-animation:treeTableShow 1s;":"display:none;"},showSperadIcon:function(e){return e[this.children]&&e[this.children].length>0},toggleExpanded:function(e){var t=this.tableData[e],n=!t._expand;t._expand=n},handleCheckAllChange:function(e){this.selcetRecursion(e,e._select,this.defaultChildren),this.isIndeterminate=e._select},selcetRecursion:function(e,t){var n=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"children";t&&(this.$set(e,"_expand",!0),this.$set(e,"_show",!0));var l=e[a];l&&l.length>0&&l.map(function(e){e._select=t,n.selcetRecursion(e,t,a)})},updateTreeNode:function(e){var t=this;return new Promise(function(n){var a=e._id,l=e._parent,i=a.split("-").slice(-1)[0];l?(l.children.splice(i,1,e),n(t.data)):(t.data.splice(i,1,e),n(t.data))})}}},s=r,d=(n("c7b6"),n("2877")),u=Object(d["a"])(s,a,l,!1,null,null,null);t["a"]=u.exports},a833:function(e,t,n){},be78:function(e,t,n){},c7b6:function(e,t,n){"use strict";var a=n("be78"),l=n.n(a);l.a}}]);