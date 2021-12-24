(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{1580:function(t,e,n){"use strict";n(563)},1581:function(t,e,n){var r=n(3)(!1);r.push([t.i,".what_anime_is_this .nya-subtitle{margin-top:.9375rem}.what_anime_is_this .preview{max-height:12.5rem}.what_anime_is_this table{color:#363636;border-collapse:collapse;border-spacing:0;width:100%}.what_anime_is_this table td{border:.0625rem solid #dbdbdb;padding:.5em .75em;vertical-align:top}.what_anime_is_this table td video{max-width:100%}",""]),t.exports=r},1661:function(t,e,n){"use strict";n.r(e);n(54);var r=n(362),o=n.n(r),l={name:"WhatAnimeIsThis",head:function(){return this.$store.state.currentTool.head},data:function(){return{n:"",preview:"",docs:[],loading:!1}},methods:{handleChange:function(t){var e=this,n=t.target.files;if(!n.length)return!1;var r=n[0];if(1.34*r.size/1024/1024>1)this.n="",o.a.fire({type:"error",title:"识别失败",text:"ERROR: 请选择大小在 750KB 以内的图片，可尝试裁剪图片或更换图片查询"});else{this.docs=[];var l=new FileReader;l.readAsDataURL(r),l.addEventListener("load",(function(){e.preview=l.result}),!1)}},getAnime:function(){var t=this;if(!this.preview)return!1;this.loading=!0,this.$axios.post("https://trace.moe/api/search",{image:this.preview},{headers:{"Content-Type":"application/json"},auth:!1}).then((function(e){t.loading=!1,t.docs=e.data.docs})).catch((function(e){o.a.fire({type:"error",title:"识别失败",text:"ERROR: ".concat(e)}),t.loading=!1}))},secToTime:function(s){var t;if(s>-1){var e=Math.floor(s/3600),n=Math.floor(s/60)%60,r=s%60;t=e<10?"0"+e+":":e+":",n<10&&(t+="0"),t+=n+":",r<10&&(t+="0"),t+=r.toFixed(2)}return t},toPercent:function(t){var e=Number(100*t).toFixed(2);return e+="%"},myCount:function(){var t=this;if(this.loading)return!1;this.loading=!0,this.$axios.post("https://trace.moe/api/me",{},{headers:{"Content-Type":"application/json"},auth:!1}).then((function(e){t.loading=!1;var n=e.data;o.a.fire({type:"error",title:"我的次数",text:"总次数剩余：".concat(n.quota," 每分钟剩余：").concat(n.limit)})})).catch((function(e){t.loading=!1,o.a.fire({type:"error",title:"获取失败",text:"ERROR: ".concat(e)})}))}}},c=(n(1580),n(2)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"what_anime_is_this"},[n("nya-container",{attrs:{title:"这是什么动漫"}},[n("div",{staticClass:"inputbtn"},[n("nya-input",{staticClass:"upfile",attrs:{type:"file",accept:"image/*",label:"请选择要识别动漫截图",placeholder:"点击这里上传文件"},on:{change:t.handleChange},model:{value:t.n,callback:function(e){t.n=e},expression:"n"}}),t._v(" "),n("button",{staticClass:"nya-btn",attrs:{type:"button",disabled:t.loading},on:{click:t.getAnime}},[t._v("\n                "+t._s(t.loading?"获取中":"开始获取")+"\n            ")])],1),t._v(" "),t.preview?n("div",{staticClass:"nya-subtitle"},[t._v("\n            预览\n        ")]):t._e(),t._v(" "),t.preview?n("img",{staticClass:"preview",attrs:{src:t.preview,alt:"preview"}}):t._e()]),t._v(" "),t._l(t.docs,(function(e){return n("nya-container",{key:e.index,attrs:{title:e.title_chinese+" EP#"+e.episode}},[n("table",[n("tbody",[n("tr",[n("td",[t._v("匹配位置：")]),t._v(" "),n("td",[t._v(t._s(t.secToTime(e.at)))])]),t._v(" "),n("tr",[n("td",[t._v("中文名称")]),t._v(" "),n("td",[t._v(t._s(e.title_chinese))])]),t._v(" "),n("tr",[n("td",[t._v("日文名称")]),t._v(" "),n("td",[t._v(t._s(e.title_native))])]),t._v(" "),n("tr",[n("td",[t._v("英文名称")]),t._v(" "),n("td",[t._v(t._s(e.title_english))])]),t._v(" "),n("tr",[n("td",[t._v("相似度")]),t._v(" "),n("td",[t._v(t._s(t.toPercent(e.similarity)))])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"},attrs:{colspan:"2"}},[n("video",{attrs:{controls:"",loop:"",src:"https://trace.moe/preview.php?anilist_id="+e.anilist_id+"&file="+encodeURIComponent(e.filename)+"&t="+e.at+"&token="+e.tokenthumb}})])])])])])})),t._v(" "),n("nya-container",{attrs:{title:"说明"}},[n("ul",{staticClass:"nya-list"},[n("li",[t._v("\n                使用 trace.moe API，有使用次数限制。(\n                "),n("a",{on:{click:t.myCount}},[t._v("\n                    查看我的次数\n                ")]),t._v(")\n            ")]),t._v(" "),n("li",[t._v("识别成功率取决于上传的截图")]),t._v(" "),n("li",[t._v("多个相同/类似结果是因为返回的数据包含多个相同/类似结果")])])])],2)}),[],!1,null,null,null);e.default=component.exports},563:function(t,e,n){var content=n(1581);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("eafcd4c2",content,!0,{sourceMap:!1})}}]);