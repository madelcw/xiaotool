(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1540:function(t,e,n){"use strict";n(550)},1541:function(t,e,n){var r=n(3)(!1);r.push([t.i,".qrcode_generation .upfile{width:100%}.qrcode_generation .qrcode{display:block;max-width:100%;margin:0 auto}",""]),t.exports=r},1643:function(t,e,n){"use strict";n.r(e);n(9),n(47),n(48);var r=n(115),o=n.n(r),c=n(421),l=n(362),d=n.n(l),h={name:"QrcodeGeneration",head:function(){return this.$store.state.currentTool.head},data:function(){return{n:"",qrcodeText:"",dataUrl:"",rdata:"",loading:!1}},methods:{readerQrcode:function(t){var e=this;this.dataUrl="",this.rdata="";var n=t.target.files;if(!n.length)return!1;var r=URL.createObjectURL(n[0]);Object(c.a)(r).then((function(t){e.rdata=t.data})).catch((function(){d.a.fire({type:"error",title:"识别失败",text:"ERROR: 可能不是一个二维码，或由于二维码内容过于复杂"})}))},generation:function(){if(this.loading=!0,this.dataUrl="",this.rdata="",this.qrcodeText)try{var t=o.a.imageSync(this.qrcodeText,{type:"png",size:10});this.dataUrl="data:image/png;base64,"+t.toString("base64"),this.loading=!1}catch(t){this.loading=!1,d.a.fire({type:"error",title:"生成失败",text:"ERROR: ".concat(t)})}else this.loading=!1,d.a.fire({type:"error",title:"生成失败",text:"ERROR: 请输入内容"})}}},f=(n(1540),n(2)),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"qrcode_generation"},[n("nya-container",{attrs:{title:"二维码生成/识别"}},[n("div",{staticClass:"inputbtn"},[n("nya-input",{attrs:{label:"请输入要生成的内容",placeholder:"https://www.iculture.cc",autocomplete:"off",autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.generation.apply(null,arguments)}},model:{value:t.qrcodeText,callback:function(e){t.qrcodeText="string"==typeof e?e.trim():e},expression:"qrcodeText"}}),t._v(" "),n("button",{staticClass:"nya-btn",attrs:{type:"button",disabled:t.loading},on:{click:t.generation}},[t._v("\n                "+t._s(t.loading?"获取中":"开始获取")+"\n            ")])],1),t._v(" "),n("br"),t._v(" "),n("nya-input",{staticClass:"upfile",attrs:{type:"file",name:"qrcode",accept:"image/*",label:"请选择要识别的二维码图片",placeholder:"点击这里上传文件"},on:{change:t.readerQrcode},model:{value:t.n,callback:function(e){t.n=e},expression:"n"}})],1),t._v(" "),n("nya-container",{directives:[{name:"show",rawName:"v-show",value:t.dataUrl||t.rdata,expression:"dataUrl || rdata"}],attrs:{title:"获取成功"}},[t.rdata?n("pre",[t._v(t._s(t.rdata))]):n("img",{staticClass:"qrcode",attrs:{src:t.dataUrl,alt:"QRCode"}})]),t._v(" "),n("nya-container",{attrs:{title:"说明"}},[n("ul",{staticClass:"nya-list"},[n("li",[t._v("本站仅提供简单的二维码生成，如有其他样式需求可自行选择其他工具")]),t._v(" "),n("li",[t._v("二维码识别若出现错误，可能由于二维码内容过于复杂或不是一个二维码")])])])],1)}),[],!1,null,null,null);e.default=component.exports},421:function(t,e,n){"use strict";n(9);var r=n(549),o=n.n(r);e.a=function(t){return new Promise((function(e,n){var image=new Image;image.onload=function(){var canvas=document.createElement("canvas"),t=canvas.getContext("2d");canvas.width=image.width,canvas.height=image.height,t.drawImage(image,0,0);try{var r=t.getImageData(0,0,image.width,image.height),c=o()(r.data,r.width,r.height);e(c)}catch(t){n(t)}},image.src=t}))}},550:function(t,e,n){var content=n(1541);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("6b3d7429",content,!0,{sourceMap:!1})}}]);