(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{1568:function(t,e,n){"use strict";n(558)},1569:function(t,e,n){var r=n(3)(!1);r.push([t.i,".d2h-file-header{display:none}.d2h-file-wrapper{border:none;border-radius:none;margin-bottom:none}",""]),t.exports=r},1652:function(t,e,n){"use strict";n.r(e);n(90),n(68);var r=n(49),o=n(556),l=n(1597),c=(n(1566),{name:"TextDiff",components:{Dynamic:r.a},data:function(){return{oldString:"",newString:"",results:""}},methods:{diff:function(){if(this.oldString)if(this.newString){var input=Object(o.createPatch)("文件",this.oldString,this.newString),t=l.a(input,{drawFileList:!1,matching:"lines",outputFormat:"side-by-side",diffTooBigMessage:"文本差异过大"});t.includes("File without changes")?this.$noty.error("没有找到差异"):this.results=t}else this.$noty.error("请输入新文本");else this.$noty.error("请输入旧文本")}}}),f=(n(1568),n(2)),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"textdiff"},[n("nya-container",{attrs:{title:"文本对比"}},[n("nya-input",{staticClass:"mb-15",attrs:{fullwidth:"",rows:"5",type:"textarea",autofocus:"",autocomplete:"off",label:"旧文本",placeholder:"console.log('FancyPig')"},model:{value:t.oldString,callback:function(e){t.oldString=e},expression:"oldString"}}),t._v(" "),n("nya-input",{staticClass:"mb-15",attrs:{fullwidth:"",rows:"5",type:"textarea",autocomplete:"off",label:"新文本",placeholder:"console.info('FancyPig Tools')"},model:{value:t.newString,callback:function(e){t.newString=e},expression:"newString"}}),t._v(" "),n("div",{staticClass:"nya-btn",on:{click:t.diff}},[t._v("\n            生成对比\n        ")])],1),t._v(" "),t.results.length?n("nya-container",{attrs:{title:"对比结果"}},[n("Dynamic",{attrs:{template:t.results}})],1):t._e(),t._v(" "),n("nya-container",{attrs:{title:"说明"}},[n("ul",{staticClass:"nya-list"},[n("li",[t._v("\n                使用："),n("a",{attrs:{href:"https://github.com/kpdecker/jsdiff",target:"_blank",rel:"noopener noreferrer"}},[t._v("jsdiff")]),t._v("生成对比数据\n            ")]),t._v(" "),n("li",[t._v("\n                使用："),n("a",{attrs:{href:"https://github.com/rtfpessoa/diff2html",target:"_blank",rel:"noopener noreferrer"}},[t._v("diff2html")]),t._v("渲染对比结果\n            ")])])])],1)}),[],!1,null,null,null);e.default=component.exports},558:function(t,e,n){var content=n(1569);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("6d479c89",content,!0,{sourceMap:!1})}}]);