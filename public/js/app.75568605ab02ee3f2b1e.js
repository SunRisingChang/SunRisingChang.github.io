webpackJsonp([1],{"3GBH":function(e,t){},"6A3X":function(e,t){},CcHR:function(e,t){},D8FD:function(e,t){},"E/x2":function(e,t){},GKq8:function(e,t){},JkuR:function(e,t){},NIFT:function(e,t){},aWhY:function(e,t){},egHN:function(e,t){},"hzD+":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),s=a("/ocq"),o=a("zL8q"),l=a.n(o),r=a("zYko"),i=a.n(r),c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{attrs:{name:"fade",mode:"out-in",duration:1e3}},[t("router-view")],1)},staticRenderFns:[]},u=a("VU/8")(null,c,!1,null,null,null).exports,m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-header",{attrs:{height:"50px"}},[a("ul",[a("li",[a("i",{class:e.$store.state.base.isCollapse?"el-icon-fa fa-indent":"el-icon-fa fa-outdent",attrs:{title:e.$t("navbar.telescopicMenu")},on:{click:function(t){e.$store.commit("base/setCollapse",{isCollapse:!e.$store.state.base.isCollapse})}}})])]),e._v(" "),a("ul",[a("li",[a("i",{staticClass:"el-icon-fa fa-bell-o"}),e._v(" "),a("el-badge",{staticClass:"mark",attrs:{value:20}})],1),e._v(" "),a("li",[a("i",{class:e.$store.state.base.isFullScreen?"alibaba al-iconzuixiaohua":"alibaba al-zuidahua1",attrs:{title:e.$store.state.base.isFullScreen?e.$t("navbar.exitFullScreen"):e.$t("navbar.enterFullScreen")},on:{click:function(t){e.$store.dispatch("base/fullScreenModel")}}})]),e._v(" "),a("li",[a("i",{staticClass:"alibaba al-suoping",attrs:{title:e.$t("navbar.lockScreen")},on:{click:e.lockScreen}})]),e._v(" "),a("li",[a("el-dropdown",{attrs:{trigger:"click",placement:"bottom"},on:{command:e.handleSetLanguage}},[a("span",{staticClass:"el-dropdown-link"},[a("span",[a("i",{staticClass:"alibaba al-yuyanqiehuan",attrs:{title:e.$t("navbar.language")}})])]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.$store.state.base.sysConfig.language,function(t){return a("el-dropdown-item",{key:t.code,attrs:{disabled:e.$store.state.base.sysConfig.currLanguage===t.code,command:t.code}},[e._v(e._s(t.title))])}))],1)],1),e._v(" "),a("li",[a("el-dropdown",{on:{command:e.userOp}},[a("span",{staticClass:"el-dropdown-link"},["miniLayout"!==e.$store.state.base.defaultLayout?a("span",[e._v("Sun Rising\n            "),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]):e._e(),e._v(" "),"miniLayout"===e.$store.state.base.defaultLayout?a("span",[a("i",{staticClass:"el-icon-fa fa-user-o"})]):e._e()]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"perInfor"}},[e._v(e._s(e.$t("navbar.perInfor")))]),e._v(" "),a("el-dropdown-item",{attrs:{command:"changePW"}},[e._v(e._s(e.$t("navbar.changePW")))]),e._v(" "),a("el-dropdown-item",{attrs:{command:"logout",divided:""}},[e._v(e._s(e.$t("navbar.logout")))])],1)],1)],1),e._v(" "),a("li",[a("i",{staticClass:"el-icon-fa fa-cog",attrs:{title:e.$t("navbar.setting")},on:{click:function(t){e.$router.push({path:"/setting"})}}})])])])},staticRenderFns:[]},d=a("VU/8")({methods:{handleSetLanguage:function(e){this.$i18n.locale=e,this.$store.dispatch("base/changeI18n",e)},lockScreen:function(){this.$router.push({path:"/lock"})},userOp:function(e){"logout"===e&&this.$store.dispatch("base/logout")}}},m,!1,null,null,null).exports,p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"aside"},[a("el-aside",{class:e.$store.state.base.defaultLayout,attrs:{width:"auto"}},[a("h2",[a("i",{staticClass:"alibaba al-logo-"}),e._v(" "),a("transition",{attrs:{name:"el-fade-in-linear"}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!e.$store.state.base.isCollapse,expression:"!$store.state.base.isCollapse"}]},[e._v(e._s(e.$t("title")))])])],1),e._v(" "),a("el-scrollbar",[a("el-menu",{attrs:{router:!0,"default-active":e.$route.path,"collapse-transition":!0,collapse:e.$store.state.base.isCollapse,"unique-opened":""}},[e._l(e.$router.options.routes,function(t){return t.hidden?e._e():[t.children&&1!=t.children.length?a("el-submenu",{key:t.path,attrs:{index:t.path}},[a("template",{slot:"title"},[a("i",{class:"el-icon-"+t.icon}),e._v(" "),a("span",[e._v(e._s(t.title))])]),e._v(" "),e._l(t.children,function(n){return a("el-menu-item",{key:t.path+"/"+n.path,attrs:{index:t.path+"/"+n.path}},[a("i",{class:"el-icon-"+t.icon}),e._v(" "),a("span",[e._v(e._s(n.name))])])})],2):a("el-menu-item",{key:t.path,attrs:{index:t.path}},[a("i",{class:"el-icon-"+t.icon}),e._v(" "),a("span",[e._v(e._s(t.title))])])]})],2)],1)],1),e._v(" "),"miniLayout"!==e.$store.state.base.defaultLayout||e.$store.state.base.isCollapse?e._e():a("div",{staticClass:"bg-mask",on:{click:function(t){e.$store.commit("base/setCollapse",{isCollapse:!e.$store.state.base.isCollapse})}}})],1)},staticRenderFns:[]},g=a("VU/8")(null,p,!1,null,null,null).exports,f=a("Dd8w"),h=a.n(f),b=a("NYxO"),v={computed:h()({},Object(b.b)(["tabPagesName","keepRouters"])),methods:{clickTab:function(e){this.$router.push({path:e.name})},removeTab:function(e){this.$store.dispatch("base/delTabPagesName",{path:e})}}},_={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contents"},[e.$store.state.base.sysConfig.singlePage?e._e():a("div",{staticClass:"tabs"},[a("el-tabs",{attrs:{type:"card"},on:{"tab-remove":e.removeTab,"tab-click":e.clickTab},model:{value:e.tabPagesName.curr,callback:function(t){e.$set(e.tabPagesName,"curr",t)},expression:"tabPagesName.curr"}},e._l(e.tabPagesName.data,function(t){return a("el-tab-pane",{key:t.path,attrs:{label:e.$t("route."+t.name),name:t.path,closable:"/"!==t.path}})})),e._v(" "),a("el-dropdown",[a("span",{staticClass:"el-dropdown-link"},[a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(t){e.$store.dispatch("base/closeOtherTabPage")}}},[e._v(e._s(e.$t("document.tabs.closeOtherTags")))]),e._v(" "),a("el-dropdown-item",{nativeOn:{click:function(t){e.$store.dispatch("base/closeRightTabPage")}}},[e._v(e._s(e.$t("document.tabs.closeTheRightLabel")))]),e._v(" "),a("el-dropdown-item",{nativeOn:{click:function(t){e.$store.dispatch("base/closeAllTabPage")}}},[e._v(e._s(e.$t("document.tabs.closeAllTags")))])],1)],1)],1),e._v(" "),a("el-main",{style:e.$store.state.base.sysConfig.singlePage?"top: 0px;":"top: 41px;"},[a("keep-alive",{attrs:{include:e.keepRouters}},[a("router-view")],1)],1)],1)},staticRenderFns:[]},w={components:{Navbar:d,Sidebar:g,AppMain:a("VU/8")(v,_,!1,null,null,null).exports},data:function(){return{loading:!0}},mounted:function(){var e=this;this.$store.dispatch("base/monitorWinSize"),this.$store.dispatch("base/changeTheme"),this.$store.dispatch("base/initSystem").then(function(t){e.loading=!1})}},y={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-container",{directives:[{name:"loading",rawName:"v-loading",value:this.loading,expression:"loading"}],attrs:{"element-loading-text":this.$t("loading"),"element-loading-spinner":"alibaba al-jiazai1","element-loading-background":"rgba(0, 0, 0, 0.6)"}},[t("vue-progress-bar"),this._v(" "),t("sidebar"),this._v(" "),t("el-container",[t("navbar"),this._v(" "),t("app-main")],1)],1)},staticRenderFns:[]},C=a("VU/8")(w,y,!1,null,null,null).exports,$={data:function(){var e=this;return{pageInfo:{titleZH:"后台管理系统",titleEN:"Content Manage System",logoTitle:"SUNRISING",copyright:"Copyright © 2094 SUNRISING. All rights reserved."},loading:!1,loginForm:{userName:null,password:null},showPw:!1,loginRules:{userName:[{validator:function(t,a,n){return a?a.length<4||a.length>20?n(new Error(e.$t("login.iwarn1"))):void n():n(new Error(e.$t("login.piName")))},trigger:"change"}],password:[{validator:function(t,a,n){return a?a.length<10||a.length>30?n(new Error(e.$t("login.iwarn2"))):void n():n(new Error(e.$t("login.piPW")))},trigger:"change"}]}}},methods:{handleSetLanguage:function(e){this.$i18n.locale=e,this.$store.dispatch("base/changeI18n",e)},submitLoginForm:function(){var e=this;this.$refs.lForm.validate(function(t){if(!t)return console.log("[loginForm] error submit!!"),!1;e.loading=!0,e.$store.dispatch("base/login",e.loginForm)})}}},k={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login-page"},[a("div",{staticClass:"bg-mark"}),e._v(" "),a("div",{staticClass:"login-mark"},[a("div",{staticClass:"logo"},[a("i",{staticClass:"alibaba al-logo-"}),e._v(" "),a("p",[e._v(e._s(e.pageInfo.logoTitle))])]),e._v(" "),a("div",{staticClass:"title"},[a("p",[e._v(e._s(e.pageInfo.titleEN))]),e._v(" "),a("p",[e._v(e._s(e.pageInfo.titleZH))])]),e._v(" "),a("div",{staticClass:"login-main"},[a("div",{staticClass:"icons"},[a("ul",[a("li",[a("el-dropdown",{attrs:{trigger:"click",placement:"bottom"},on:{command:e.handleSetLanguage}},[a("span",{staticClass:"el-dropdown-link"},[a("span",[a("i",{staticClass:"alibaba al-yuyanqiehuan",attrs:{title:e.$t("navbar.language")}})])]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.$store.state.base.sysConfig.language,function(t){return a("el-dropdown-item",{key:t.code,attrs:{disabled:e.$store.state.base.sysConfig.currLanguage===t.code,command:t.code}},[e._v(e._s(t.title))])}))],1)],1)])]),e._v(" "),a("div",{staticClass:"form-area"},[a("p",[e._v(e._s(e.$t("login.title")))]),e._v(" "),a("el-form",{ref:"lForm",attrs:{model:e.loginForm,rules:e.loginRules}},[a("el-form-item",{attrs:{prop:"userName"}},[a("el-input",{attrs:{placeholder:e.$t("login.piName")},model:{value:e.loginForm.userName,callback:function(t){e.$set(e.loginForm,"userName",t)},expression:"loginForm.userName"}},[a("template",{slot:"prepend"},[a("i",{staticClass:"alibaba al-yonghu"})])],2)],1),e._v(" "),a("el-form-item",{attrs:{prop:"password"}},[a("el-input",{attrs:{placeholder:e.$t("login.piPW"),type:e.showPw?"":"password"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}},[a("template",{slot:"prepend"},[a("i",{staticClass:"alibaba al-jiesuo1"})]),e._v(" "),a("el-button",{staticClass:"showPw",attrs:{slot:"append",icon:e.showPw?"alibaba al-chakanmima1":"alibaba al-chakanmima"},on:{click:function(t){e.showPw=!e.showPw}},slot:"append"})],2)],1),e._v(" "),a("el-form-item",[a("el-button",{staticClass:"loginBut",attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.submitLoginForm(t)}}},[e._v(e._s(e.$t("login.button")))])],1)],1)],1)])]),e._v(" "),a("div",{staticClass:"copyright"},[e._v("\n    "+e._s(e.pageInfo.copyright)+"\n  ")])])},staticRenderFns:[]};var x=a("VU/8")($,k,!1,function(e){a("aWhY")},null,null).exports,P={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{name:"theme"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"alibaba al-skin"}),e._v(" "),a("span",[e._v("主题管理")])]),e._v(" "),e._l(e.$store.state.base.sysConfig.theme,function(t){return a("el-button",{key:t,attrs:{type:e.$store.state.base.sysConfig.currTheme===t?"primary":"",plain:""},on:{click:function(a){e.$store.dispatch("base/changeTheme",t)}}},[e._v(e._s(t))])})],2)],1)},staticRenderFns:[]};var S=a("VU/8")({data:function(){return{activeName:"theme"}},methods:{}},P,!1,function(e){a("E/x2")},"data-v-6ed27cd6",null).exports,N={data:function(){return{passwd:null,showImg:!1,showPW:!1}},mounted:function(){var e=this;this.$store.dispatch("base/changeTheme"),this.$nextTick(function(){setTimeout(function(){e.showImg=!0},500)})},methods:{lockLogin:function(){this.$router.push({path:"/"})}}},T={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"lock-page"},[a("div",{staticClass:"lock-login-area"},[a("transition",{attrs:{name:"bounce",tag:"div"}},[e.showImg?a("div",{staticClass:"userImg",style:e.showPW?"left:0px;":"left:125px;",on:{click:function(t){e.showPW=!0}}},[a("i",{staticClass:"alibaba al-yonghu2"})]):e._e()]),e._v(" "),a("transition",{attrs:{name:"rotateDownLeft",tag:"div"}},[e.showPW?a("div",{staticClass:"inputPW"},[a("el-input",{attrs:{placeholder:e.$t("login.passWd")},model:{value:e.passwd,callback:function(t){e.passwd=t},expression:"passwd"}},[a("el-button",{attrs:{slot:"append",icon:"alibaba al-denglu",title:e.$t("login.button")},on:{click:e.lockLogin},slot:"append"})],1)],1):e._e()])],1),e._v(" "),a("transition",{attrs:{name:"bounce",tag:"div"}},[e.showImg?a("p",[e._v("已锁定")]):e._e()])],1)},staticRenderFns:[]},F=a("VU/8")(N,T,!1,null,null,null).exports,L={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v(this._s(this.$store.state.base.tabsData))])},staticRenderFns:[]},D=a("VU/8")(null,L,!1,null,null,null).exports,R={props:{num:{type:Number,default:0},title:{type:String,default:""}},data:function(){return{}},mounted:function(){},methods:{}},z={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"t"},[t("span",[this._v(this._s(this.title))]),this._v(" "),t("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:this.num}})],1)},staticRenderFns:[]};var I={name:"Demo1",components:{TimeLine:a("VU/8")(R,z,!1,function(e){a("ouPj")},null,null).exports},data:function(){return{num1:30,num2:80}},mounted:function(){},methods:{}},E={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:12}},[a("time-line",{attrs:{title:"示例一",num:e.num1}})],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("time-line",{attrs:{title:"示例二",num:e.num2}})],1)],1),e._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:12}},[a("time-line",{attrs:{title:"示例一",num:e.num1}})],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("time-line",{attrs:{title:"示例二",num:e.num2}})],1)],1),e._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:12}},[a("time-line",{attrs:{title:"示例一",num:e.num1}})],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("time-line",{attrs:{title:"示例二",num:e.num2}})],1)],1),e._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:12}},[a("time-line",{attrs:{title:"示例一",num:e.num1}})],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("time-line",{attrs:{title:"示例二",num:e.num2}})],1)],1),e._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:12}},[a("time-line",{attrs:{title:"示例一",num:e.num1}})],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("time-line",{attrs:{title:"示例二",num:e.num2}})],1)],1)],1)},staticRenderFns:[]};var W={name:"Demo2",methods:{handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){console.log("当前页: "+e)}},data:function(){return{currentPage1:5,currentPage2:5,currentPage3:5,currentPage4:4}}},U={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"block"},[a("span",{staticClass:"demonstration"},[e._v("显示总数")]),e._v(" "),a("el-pagination",{attrs:{"current-page":e.currentPage1,"page-size":100,layout:"total, prev, pager, next",total:1e3},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage1=t}}})],1),e._v(" "),a("div",{staticClass:"block"},[a("span",{staticClass:"demonstration"},[e._v("调整每页显示条数")]),e._v(" "),a("el-pagination",{attrs:{"current-page":e.currentPage2,"page-sizes":[100,200,300,400],"page-size":100,layout:"sizes, prev, pager, next",total:1e3},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage2=t}}})],1),e._v(" "),a("div",{staticClass:"block"},[a("span",{staticClass:"demonstration"},[e._v("直接前往")]),e._v(" "),a("el-pagination",{attrs:{"current-page":e.currentPage3,"page-size":100,layout:"prev, pager, next, jumper",total:1e3},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage3=t}}})],1),e._v(" "),a("div",{staticClass:"block"},[a("span",{staticClass:"demonstration"},[e._v("完整功能")]),e._v(" "),a("el-pagination",{attrs:{"current-page":e.currentPage4,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])},staticRenderFns:[]},H={name:"Test1",data:function(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},mounted:function(){console.log(this.$options.name)},methods:{onSubmit:function(){console.log("submit!")}}},O={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"活动名称"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"活动区域"}},[a("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"活动时间"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}})],1),e._v(" "),a("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),e._v(" "),a("el-col",{attrs:{span:11}},[a("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"fixed-time",placeholder:"选择时间"},model:{value:e.form.date2,callback:function(t){e.$set(e.form,"date2",t)},expression:"form.date2"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"即时配送"}},[a("el-switch",{model:{value:e.form.delivery,callback:function(t){e.$set(e.form,"delivery",t)},expression:"form.delivery"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"活动性质"}},[a("el-checkbox-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[a("el-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),e._v(" "),a("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),e._v(" "),a("el-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),e._v(" "),a("el-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"特殊资源"}},[a("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[a("el-radio",{attrs:{label:"线上品牌商赞助"}}),e._v(" "),a("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"活动形式"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即创建")]),e._v(" "),a("el-button",[e._v("取消")])],1)],1)],1)},staticRenderFns:[]},q={name:"Test2",data:function(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},mounted:function(){console.log(this.$options.name)},methods:{onSubmit:function(){console.log("submit!")}}},V={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"活动名称"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"活动区域"}},[a("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"活动时间"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}})],1),e._v(" "),a("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),e._v(" "),a("el-col",{attrs:{span:11}},[a("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"fixed-time",placeholder:"选择时间"},model:{value:e.form.date2,callback:function(t){e.$set(e.form,"date2",t)},expression:"form.date2"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"即时配送"}},[a("el-switch",{model:{value:e.form.delivery,callback:function(t){e.$set(e.form,"delivery",t)},expression:"form.delivery"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"活动性质"}},[a("el-checkbox-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[a("el-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),e._v(" "),a("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),e._v(" "),a("el-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),e._v(" "),a("el-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"特殊资源"}},[a("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[a("el-radio",{attrs:{label:"线上品牌商赞助"}}),e._v(" "),a("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"活动形式"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即创建")]),e._v(" "),a("el-button",[e._v("取消")])],1)],1)],1)},staticRenderFns:[]},j=[{path:"/",hidden:!0,icon:"menu",title:"Home",component:C,children:[{path:"/",icon:"menu",component:D,name:"Home"},{path:"setting",icon:"menu",component:S,name:"Setting"}]},{path:"/demo",icon:"menu",title:"Demo",component:C,children:[{path:"demo1",icon:"menu",component:a("VU/8")(I,E,!1,function(e){a("GKq8")},null,null).exports,name:"Demo1"},{path:"demo2",icon:"menu",component:a("VU/8")(W,U,!1,null,null,null).exports,name:"Demo2"}]},{path:"/test",icon:"menu",title:"Test",component:C,children:[{path:"test1",icon:"menu",component:a("VU/8")(H,O,!1,null,null,null).exports,name:"Test1"},{path:"test2",icon:"menu",component:a("VU/8")(q,V,!1,null,null,null).exports,name:"Test2"}]},{path:"/login",hidden:!0,title:"Login",name:"Login",component:x},{path:"/lock",hidden:!0,title:"Lock",name:"Lock",component:F},{path:"*",hidden:!0,redirect:"/"}],A=a("lbHh"),M=a.n(A),G=new s.a({mode:"history",routes:[].concat(j)}),J=["Login","Lock"];G.beforeEach(function(e,t,a){if("/login"!==e.path){if(!M.a.get("user"))return void a({path:"/login"});!function(e){if(-1===J.indexOf(e.name)){var t=G.app.$store;G.app.$store.getters.sysConfig.singlePage||t.dispatch("base/addTabPagesName",{name:e.name,path:e.path})}}(e)}a()});var B=G,K=a("mtWM"),Y=a.n(K).a.create({baseURL:"/api/",transformRequest:[function(e){return e}],transformResponse:[function(e){return e}],onUploadProgress:function(e){},onDownloadProgress:function(e){},maxContentLength:2e3,validateStatus:function(e){return e},timeout:4e3});Y.interceptors.request.use(function(e){return console.log("request success!"),be.$Progress.start(),e},function(e){console.log("request filed!"+e)}),Y.interceptors.response.use(function(e){return console.log("response success!"),console.log(e.status),be.$Progress.finish(),e},function(e){console.log("response filed!"+e)});var X=Y,Z=a("424j"),Q=a("//Fk"),ee=a.n(Q),te=a("woOf"),ae=a.n(te),ne=a("mvHQ"),se=a.n(ne),oe={defaultLayout:948,streamLayout:[948,500],miniLayout:500,singlePage:!1,theme:["Dawn","Blue","Dark","Light"],currTheme:"Dawn",language:[{title:"中文",code:"zh"},{title:"English",code:"en"}],currLanguage:"zh"},le=function(e){Object(o.Notification)({title:"成功",message:e,type:"success",duration:1500})},re={currTabName:"/",tabPagesName:[{name:"Home",path:"/"}]},ie={namespaced:!0,state:{dynData:{browserWidth:null,browserHeight:null},sysConfig:oe,defaultLayout:null,isCollapse:!1,tabsData:JSON.parse(se()(re)),isFullScreen:!1,userInfo:{}},mutations:{setDynData:function(e,t){ae()(e.dynData,t)},setTabsData:function(e,t){ae()(e.tabsData,t)},resetTabsData:function(e){e.tabsData=JSON.parse(se()(re))},setDefaultLayout:function(e,t){ae()(e,t)},setCollapse:function(e,t){ae()(e,t)},toggleFullScreen:function(e){e.isFullScreen=!e.isFullScreen},setSysConfig:function(e,t){ae()(e.sysConfig,t)},setUserInfo:function(e,t){ae()(e.userInfo,t)}},actions:{monitorWinSize:function(e){var t=e.dispatch,a=e.state,n=e.commit;window.onresize||(window.onresize=function(){n("setDynData",{browserWidth:document.documentElement.clientWidth,browserHeight:document.documentElement.clientHeight}),t("changeLayoutType",a.dynData.browserWidth)},window.onresize())},delTabPagesName:function(e,t){var a=e.state,n=e.commit,s=a.tabsData.tabPagesName.findIndex(function(e){return e.path===t.path});if(s>-1){var o=ae()([],a.tabsData.tabPagesName);t.path===a.tabsData.currTabName?(o.splice(s,1),n("setTabsData",{currTabName:a.tabsData.tabPagesName[s-1].path,tabPagesName:o}),B.push({path:a.tabsData.tabPagesName[s-1].path})):(o.splice(s,1),n("setTabsData",{tabPagesName:o}))}},addTabPagesName:function(e,t){var a=e.state,n=e.commit,s=a.tabsData.tabPagesName.findIndex(function(e){return e.path===t.path}),o=ae()([],a.tabsData.tabPagesName);-1===s&&o.push(t),n("setTabsData",{currTabName:t.path,tabPagesName:o})},changeLayoutType:function(e,t){var a=e.state,n=e.commit;t>=a.sysConfig.defaultLayout?(n("setDefaultLayout",{defaultLayout:"defaultLayout"}),a.isCollapse&&n("setCollapse",{isCollapse:!1})):t<a.sysConfig.streamLayout[0]&&t>=a.sysConfig.streamLayout[1]?(n("setDefaultLayout",{defaultLayout:"streamLayout"}),a.isCollapse||n("setCollapse",{isCollapse:!0})):t<a.sysConfig.miniLayout&&(n("setDefaultLayout",{defaultLayout:"miniLayout"}),a.isCollapse||n("setCollapse",{isCollapse:!0}))},fullScreenModel:function(e){var t=e.state,a=e.commit;if(t.isFullScreen)document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen();else{var n=document.documentElement;n.requestFullscreen?n.requestFullscreen():n.mozRequestFullScreen?n.mozRequestFullScreen():n.webkitRequestFullScreen?n.webkitRequestFullScreen():elem.msRequestFullscreen&&elem.msRequestFullscreen()}a("toggleFullScreen")},closeOtherTabPage:function(e){var t=e.dispatch,a=e.state,n=e.commit,s=a.tabsData.tabPagesName.findIndex(function(e){return e.path===a.tabsData.currTabName});if(s>-1){var o=ae()([],a.tabsData.tabPagesName);o.splice(1,s-1),n("setTabsData",{tabPagesName:o}),t("closeRightTabPage")}},closeRightTabPage:function(e){var t=e.state,a=e.commit,n=t.tabsData.tabPagesName.findIndex(function(e){return e.path===t.tabsData.currTabName});if(n>-1&&n!==t.tabsData.tabPagesName.length-1){var s=ae()([],t.tabsData.tabPagesName);s.splice(n+1),a("setTabsData",{tabPagesName:s})}},closeAllTabPage:function(e){var t=e.state;(0,e.commit)("resetTabsData"),B.push({path:t.tabsData.currTabName})},changeTheme:function(e,t){var a=e.state,n=e.commit;t?(n("setSysConfig",{currTheme:t}),window.document.body.setAttribute("class",t.toLowerCase())):window.document.body.setAttribute("class",a.sysConfig.currTheme.toLowerCase())},changeI18n:function(e,t){(0,e.commit)("setSysConfig",{currLanguage:t}),M.a.set("language",t,{expires:7})},login:function(e,t){var a=e.commit;setTimeout(function(){M.a.set("user",{username:t.userName},{expires:7}),a("setUserInfo",{username:t.userName}),console.log("password:--\x3e"+t.password),B.push({path:"/"})},3e3)},logout:function(){M.a.remove("user"),window.localStorage.removeItem("vuex"),le("操作成功!"),window.location.reload(),B.push({path:"/login"})},initSystem:function(){return new ee.a(function(e,t){setTimeout(function(){e({})},3e3)})}}};n.default.use(b.a);var ce=new b.a.Store({strict:!0,modules:{base:ie},getters:{sysConfig:function(e){return e.base.sysConfig},tabPagesName:function(e){return{data:e.base.tabsData.tabPagesName,curr:e.base.tabsData.currTabName}},keepRouters:function(e){var t=[];return e.base.tabsData.tabPagesName.forEach(function(e,a){t.push(e.name.replace(/(^\s*)|(\s*$)/g,""))}),t}},plugins:[Object(Z.a)({key:"vuex"})]}),ue=a("TXmL"),me=a("wUZ8"),de=a.n(me),pe=a("Vi3T"),ge=a.n(pe);n.default.use(ue.a);var fe={en:h()({},{title:"CMS",loading:"Loading",route:{Home:"Home",Setting:"Setting"},navbar:{telescopicMenu:"Telescopic Menu",message:"Message",exitFullScreen:"Exit Full Screen",enterFullScreen:"Enter full screen",lockScreen:"Lock Screen",language:"Language",setting:"Setting",perInfor:"Personal Information",changePW:"Change Password",logout:"Logout"},login:{button:"Sign in",userName:"User Name",passWd:"Password",title:"Sign in",piName:"please enter user name",piPW:"Please enter your password",iwarn1:"4 to 20 characters in length",iwarn2:"10 to 30 characters in length"},document:{tabs:{closeOtherTags:"Close Other Tags",closeTheRightLabel:"Close The Right Label",closeAllTags:"Close All Tags"},main:{}}},de.a),zh:h()({},{title:"后台管理系统",loading:"拼命加载中",route:{Home:"主页",Setting:"设置"},navbar:{telescopicMenu:"伸缩菜单",message:"消息",exitFullScreen:"退出全屏",enterFullScreen:"进入全屏",lockScreen:"锁屏",language:"语言",setting:"设置",perInfor:"个人信息",changePW:"修改密码",logout:"注销登录"},login:{button:"登录",userName:"用户名",passWd:"密码",title:"登录",piName:"请输入用户名",piPW:"请输入密码",iwarn1:"长度在 4 到 20 个字符",iwarn2:"长度在 10 到 30 个字符"},document:{tabs:{closeOtherTags:"关闭其它标签",closeTheRightLabel:"关闭右侧标签",closeAllTags:"关闭全部标签"},main:{}}},ge.a)},he=new ue.a({locale:M.a.get("language")||oe.currLanguage,messages:fe});a("tvR6"),a("lGVK"),a("t/HU"),a("NIFT"),a("6A3X"),a("JkuR"),a("sIMD"),a("3GBH"),a("D8FD"),a("egHN"),a("CcHR");n.default.config.productionTip=!1,n.default.prototype.$ajax=X,n.default.use(s.a),n.default.use(l.a,{i18n:function(e,t){return he.t(e,t)}}),n.default.use(i.a,{thickness:"3px"}),n.default.mixin({computed:{},methods:{}});var be=t.default=new n.default({el:"#app",router:B,store:ce,i18n:he,components:{App:u},template:"<App/>"})},lGVK:function(e,t){},ouPj:function(e,t){},sIMD:function(e,t){},"t/HU":function(e,t){},tvR6:function(e,t){}},["hzD+"]);
//# sourceMappingURL=app.75568605ab02ee3f2b1e.js.map