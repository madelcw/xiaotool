/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1185:function(t,e,r){"use strict";r(515)},1186:function(t,e,r){var o=r(3)(!1);o.push([t.i,".color .img-colors,.color .nya-input,.color .preview,.color .vc-slider,.color .vue-slider{margin-bottom:.9375rem}.color .vc-slider{width:100%}.color .img-colors .img-color div:not(.nya-subtitle){padding:.625rem;display:inline-block;color:#fff;text-shadow:.125rem .125rem .125rem rgba(0,0,0,.2)}.color .img-colors .img-palette{margin-top:.9375rem}.color .img-colors .img-palette ul{padding:0;margin:0}.color .img-colors .img-palette li{margin:0;display:inline-block;font-size:1rem;box-sizing:border-box;padding:.625rem;text-align:center;color:#fff;text-shadow:.125rem .125rem .125rem rgba(0,0,0,.2)}@media (max-width:850px){.color .img-colors .img-palette li{width:30%}}.color .preview{font-size:0}.color .preview img{width:18.75rem;max-width:100%}",""]),t.exports=o},1603:function(t,e,r){"use strict";r.r(e);var o=r(7),n=(r(50),r(9),r(47),r(48),r(42),r(382)),l=r(1184),c=r.n(l),f=(r(394),r(40),function(image){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),document.body.appendChild(this.canvas),this.width=this.canvas.width=image.width,this.height=this.canvas.height=image.height,this.context.drawImage(image,0,0,this.width,this.height)});f.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height)},f.prototype.update=function(t){this.context.putImageData(t,0,0)},f.prototype.getPixelCount=function(){return this.width*this.height},f.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)},f.prototype.removeCanvas=function(){this.canvas.parentNode.removeChild(this.canvas)};var h=function(){};if(h.prototype.getColor=function(t,e){return this.getPalette(t,5,e)[0]},h.prototype.getPalette=function(t,e,r){(void 0===e||e<2||e>256)&&(e=10),(void 0===r||r<1)&&(r=10);for(var o,n,g,b,image=new f(t),l=image.getImageData().data,c=image.getPixelCount(),h=[],i=0;i<c;i+=r)n=l[(o=4*i)+0],g=l[o+1],b=l[o+2],l[o+3]>=125&&(n>250&&g>250&&b>250||h.push([n,g,b]));var v=m.quantize(h,e),d=v?v.palette():null;return image.removeCanvas(),d},h.prototype.getColorFromUrl=function(t,e,r){var o=document.createElement("img"),n=this;o.addEventListener("load",(function(){var l=n.getPalette(o,5,r)[0];e(l,t)})),o.src=t},h.prototype.getImageData=function(t,e){var r=new XMLHttpRequest;r.open("GET",t,!0),r.responseType="arraybuffer",r.onload=function(){if(200==this.status){var t=new Uint8Array(this.response);i=t.length;for(var r=new Array(i),i=0;i<t.length;i++)r[i]=String.fromCharCode(t[i]);var data=r.join(""),o=window.btoa(data);e("data:image/png;base64,"+o)}},r.send()},h.prototype.getColorAsync=function(t,e,r){var o=this;this.getImageData(t,(function(t){var n=document.createElement("img");n.addEventListener("load",(function(){var t=o.getPalette(n,5,r)[0];e(t,this)})),n.src=t}))},!v)var v={map:function(t,e){var r={};return e?t.map((function(t,i){return r.index=i,e.call(r,t)})):t.slice()},naturalOrder:function(a,b){return a<b?-1:a>b?1:0},sum:function(t,e){var r={};return t.reduce(e?function(p,t,i){return r.index=i,p+e.call(r,t)}:function(p,t){return p+t},0)},max:function(t,e){return Math.max.apply(null,e?v.map(t,e):t)}};var d,m=function(){function t(t,g,b){return(t<<10)+(g<<5)+b}function e(t){var e=[],r=!1;function o(){e.sort(t),r=!0}return{push:function(t){e.push(t),r=!1},peek:function(t){return r||o(),void 0===t&&(t=e.length-1),e[t]},pop:function(){return r||o(),e.pop()},size:function(){return e.length},map:function(t){return e.map(t)},debug:function(){return r||o(),e}}}function r(t,e,r,o,n,l,c){var f=this;f.r1=t,f.r2=e,f.g1=r,f.g2=o,f.b1=n,f.b2=l,f.histo=c}function o(){this.vboxes=new e((function(a,b){return v.naturalOrder(a.vbox.count()*a.vbox.volume(),b.vbox.count()*b.vbox.volume())}))}function n(e,r){if(r.count()){var o=r.r2-r.r1+1,n=r.g2-r.g1+1,l=r.b2-r.b1+1,c=v.max([o,n,l]);if(1==r.count())return[r.copy()];var i,f,h,d,m=0,w=[],x=[];if(c==o)for(i=r.r1;i<=r.r2;i++){for(d=0,f=r.g1;f<=r.g2;f++)for(h=r.b1;h<=r.b2;h++)d+=e[t(i,f,h)]||0;m+=d,w[i]=m}else if(c==n)for(i=r.g1;i<=r.g2;i++){for(d=0,f=r.r1;f<=r.r2;f++)for(h=r.b1;h<=r.b2;h++)d+=e[t(f,i,h)]||0;m+=d,w[i]=m}else for(i=r.b1;i<=r.b2;i++){for(d=0,f=r.r1;f<=r.r2;f++)for(h=r.g1;h<=r.g2;h++)d+=e[t(f,h,i)]||0;m+=d,w[i]=m}return w.forEach((function(t,i){x[i]=m-t})),y(c==o?"r":c==n?"g":"b")}function y(t){var e,o,n,l,c,f=t+"1",h=t+"2",v=0;for(i=r[f];i<=r[h];i++)if(w[i]>m/2){for(n=r.copy(),l=r.copy(),c=(e=i-r[f])<=(o=r[h]-i)?Math.min(r[h]-1,~~(i+o/2)):Math.max(r[f],~~(i-1-e/2));!w[c];)c++;for(v=x[c];!v&&w[c-1];)v=x[--c];return n[h]=c,l[f]=n[h]+1,[n,l]}}}return r.prototype={volume:function(t){var e=this;return e._volume&&!t||(e._volume=(e.r2-e.r1+1)*(e.g2-e.g1+1)*(e.b2-e.b1+1)),e._volume},count:function(e){var r=this,o=r.histo;if(!r._count_set||e){var i,n,l,c=0;for(i=r.r1;i<=r.r2;i++)for(n=r.g1;n<=r.g2;n++)for(l=r.b1;l<=r.b2;l++)c+=o[t(i,n,l)]||0;r._count=c,r._count_set=!0}return r._count},copy:function(){var t=this;return new r(t.r1,t.r2,t.g1,t.g2,t.b1,t.b2,t.histo)},avg:function(e){var r=this,o=r.histo;if(!r._avg||e){var n,i,l,c,f=0,h=0,v=0,d=0;for(i=r.r1;i<=r.r2;i++)for(l=r.g1;l<=r.g2;l++)for(c=r.b1;c<=r.b2;c++)f+=n=o[t(i,l,c)]||0,h+=n*(i+.5)*8,v+=n*(l+.5)*8,d+=n*(c+.5)*8;r._avg=f?[~~(h/f),~~(v/f),~~(d/f)]:[~~(8*(r.r1+r.r2+1)/2),~~(8*(r.g1+r.g2+1)/2),~~(8*(r.b1+r.b2+1)/2)]}return r._avg},contains:function(t){var e=this,r=t[0]>>3,o=t[1]>>3,n=t[2]>>3;return r>=e.r1&&r<=e.r2&&o>=e.g1&&o<=e.g2&&n>=e.b1&&n<=e.b2}},o.prototype={push:function(t){this.vboxes.push({vbox:t,color:t.avg()})},palette:function(){return this.vboxes.map((function(t){return t.color}))},size:function(){return this.vboxes.size()},map:function(t){for(var e=this.vboxes,i=0;i<e.size();i++)if(e.peek(i).vbox.contains(t))return e.peek(i).color;return this.nearest(t)},nearest:function(t){for(var e,r,o,n=this.vboxes,i=0;i<n.size();i++)((r=Math.sqrt(Math.pow(t[0]-n.peek(i).color[0],2)+Math.pow(t[1]-n.peek(i).color[1],2)+Math.pow(t[2]-n.peek(i).color[2],2)))<e||void 0===e)&&(e=r,o=n.peek(i).color);return o},forcebw:function(){var t=this.vboxes;t.sort((function(a,b){return v.naturalOrder(v.sum(a.color),v.sum(b.color))}));var e=t[0].color;e[0]<5&&e[1]<5&&e[2]<5&&(t[0].color=[0,0,0]);var r=t.length-1,o=t[r].color;o[0]>251&&o[1]>251&&o[2]>251&&(t[r].color=[255,255,255])}},{quantize:function(l,c){if(!l.length||c<2||c>256)return!1;var f=function(e){var r,o,n,l,c=new Array(32768);return e.forEach((function(e){o=e[0]>>3,n=e[1]>>3,l=e[2]>>3,r=t(o,n,l),c[r]=(c[r]||0)+1})),c}(l);f.forEach((function(){0}));var h=function(t,e){var o,n,l,c=1e6,f=0,h=1e6,v=0,d=1e6,m=0;return t.forEach((function(t){o=t[0]>>3,n=t[1]>>3,l=t[2]>>3,o<c?c=o:o>f&&(f=o),n<h?h=n:n>v&&(v=n),l<d?d=l:l>m&&(m=l)})),new r(c,f,h,v,d,m,e)}(l,f),d=new e((function(a,b){return v.naturalOrder(a.count(),b.count())}));function m(t,e){for(var r,o=1,l=0;l<1e3;)if((r=t.pop()).count()){var c=n(f,r),h=c[0],v=c[1];if(!h)return;if(t.push(h),v&&(t.push(v),o++),o>=e)return;if(l++>1e3)return}else t.push(r),l++}d.push(h),m(d,.75*c);for(var w=new e((function(a,b){return v.naturalOrder(a.count()*a.volume(),b.count()*b.volume())}));d.size();)w.push(d.pop());m(w,c-w.size());for(var x=new o;w.size();)x.push(w.pop());return x}}}(),w=h;r(370);d=r(371);var x={name:"Color",head:function(){return this.$store.state.currentTool.head},components:{"slider-picker":n.Slider,VueSlider:d},data:function(){return{colorVal:"",n:null,file:null,colors:"#00ADB5",alpha:1,preview:"",results:"",imgColor:{color:"",palette:""},requestIn:!1,colorthief:new w}},computed:{handleColor:function(){var t=c()(this.colors);return{"RGB(A)":t.toString("rgb").toUpperCase(),HEX6:t.toHexString().toUpperCase(),HEX8:t.toHex8String().toUpperCase(),"HSL(A)":t.toString("hsl").toUpperCase(),"HSV(A)":t.toString("hsv").toUpperCase()}}},watch:{colors:function(t){var e=c()(t);this.alpha=e.getAlpha()}},methods:{updateAlpha:function(){var t=c()(this.colors);t.setAlpha(this.alpha),this.colors=t.toHex8String()},updateColor:function(t){var e=c()(t.hex);e.setAlpha(this.alpha),this.colors=e.toHex8String()},handleChange:function(t){var e=this;if(this.requestIn)return!1;var r=t.target.files;if(!r.length)return!1;var n=r[0];this.requestIn=!0;var l=new FileReader;l.readAsDataURL(n),l.addEventListener("load",Object(o.a)(regeneratorRuntime.mark((function t(){var img;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preview=l.result,(img=new Image).onload=function(){var t=e.colorthief.getPalette(img).map((function(t){return c()("rgb(".concat(t.toString(),")")).toHexString()})),r=c()("rgb(".concat(e.colorthief.getColor(img).toString(),")")).toHexString();e.imgColor.palette=t,e.imgColor.color=r,e.colors=r,e.requestIn=!1},img.src=e.preview;case 4:case"end":return t.stop()}}),t)}))),!1)},handleColorVal:function(t){var e=c()(t);e.isValid()&&(this.colors=e.toHex8String())}}},y=(r(1185),r(2)),component=Object(y.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"color"},[r("nya-container",{attrs:{title:"颜色转换"}},[r("nya-input",{attrs:{label:"输入颜色代码",placeholder:"#ffffff",autocomplete:"off",autofocus:"",fullwidth:""},on:{input:t.handleColorVal},model:{value:t.colorVal,callback:function(e){t.colorVal=e},expression:"colorVal"}}),t._v(" "),r("client-only",[r("slider-picker",{attrs:{value:t.colors},on:{input:t.updateColor}})],1),t._v(" "),r("client-only",[r("vue-slider",{attrs:{interval:.1,lazy:"",min:0,max:1},on:{change:t.updateAlpha},model:{value:t.alpha,callback:function(e){t.alpha=e},expression:"alpha"}})],1),t._v(" "),r("nya-input",{attrs:{type:"file",accept:"image/*",label:"请选择要提取主色的图片",placeholder:"点击这里上传文件",fullwidth:""},on:{change:t.handleChange},model:{value:t.n,callback:function(e){t.n=e},expression:"n"}}),t._v(" "),t.preview?r("div",{staticClass:"preview"},[r("div",{staticClass:"nya-subtitle"},[t._v("\n                预览\n            ")]),t._v(" "),r("img",{attrs:{src:t.preview,alt:"preview"}})]):t._e(),t._v(" "),t.preview?r("div",{staticClass:"img-colors"},[r("div",{staticClass:"img-color"},[r("div",{staticClass:"nya-subtitle"},[t._v("\n                    主色\n                ")]),t._v(" "),r("div",{style:{"background-color":t.imgColor.color}},[t._v("\n                    "+t._s(t.imgColor.color)+"\n                ")])]),t._v(" "),r("div",{staticClass:"img-palette"},[r("div",{staticClass:"nya-subtitle"},[t._v("\n                    调色盘\n                ")]),t._v(" "),r("ul",t._l(t.imgColor.palette,(function(e,o){return r("li",{key:o,style:{"background-color":e}},[t._v("\n                        "+t._s(e)+"\n                    ")])})),0)])]):t._e()],1),t._v(" "),t.colors?r("nya-container",{attrs:{title:"结果"}},[r("div",{staticClass:"text",style:{color:t.colors}},[t._v("\n            文字效果\n        ")]),t._v(" "),t._l(t.handleColor,(function(e,o){return r("p",{key:o},[r("b",[t._v(t._s(o)+"：")]),r("span",[t._v(t._s(e))])])}))],2):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},515:function(t,e,r){var content=r(1186);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(4).default)("6511c69d",content,!0,{sourceMap:!1})}}]);