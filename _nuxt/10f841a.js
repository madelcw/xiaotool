(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1611:function(t,e,o){"use strict";o.r(e);o(379),o(197);var n,l,r=o(366),_=o(382),c=(o(370),o(362)),m=o.n(c);n=o(371),l=o(570);var j={name:"AcgMeme",head:function(){return this.$store.state.currentTool.head},components:{"compact-picker":_.Compact,VueSlider:n},data:function(){return{cdnurl:"/acg_meme/",text:"啥百度啊",results:"",loadAll:!1,templateFiles:["64679775_p0.jpg","64679775_p1.jpg","64679810_p0.jpg","64679810_p1.jpg","64679842_p0.jpg","64679842_p1.jpg","64679842_p2.jpg","64679869_p0.jpg","64679869_p1.jpg","64679869_p2.jpg","64679932_p0.jpg","64679973_p0.jpg","64679973_p1.jpg","64679990_p0.jpg","64680126_p0.jpg","64680126_p1.jpg","64693222_p0.jpg","64693222_p1.jpg","64695668_p0.jpg","64695748_p0.jpg","64713015_p0.jpg","64713015_p1.jpg","64713015_p2.jpg","64734083_p0.jpg","64764795_p0.jpg","64764795_p1.jpg","64767804_p0.jpg","64767821_p0.jpg","64767821_p1.jpg","64767821_p2.jpg","64767821_p3.jpg","64786175_p0.jpg","64801252_p0.jpg","64867053_p0.jpg","64867053_p1.jpg","64954322_p0.jpg","64954322_p1.jpg","65007077_p0.jpg","65205233_p0.jpg","65256166_p0.jpg","65256166_p1.jpg","65322015_p0.jpg","65447634_p0.jpg","65513265_p0.jpg","65649172_p0.jpg","66159858_p0.jpg","66159858_p1.jpg","66196713_p0.jpg","66380379_p0.jpg","66380379_p1.jpg","66800288_p0.jpg","67504341_p0.jpg","67798259_p0.jpg","67844832_p0.jpg","68055668_p0.jpg","68055668_p1.jpg","68071379_p0.jpg","68085680_p0.jpg","68085680_p1.jpg","68343677_p0.jpg","68343677_p1.jpg","68343677_p2.jpg","68367629_p0.jpg","68367629_p1.jpg","68367629_p2.jpg","68882965_p0.jpg","68882965_p1.jpg","69130825_p0.jpg","69130825_p1.jpg","69168247_p0.jpg","69168247_p1.jpg","69213542_p0.jpg","69213542_p1.jpg","69241770_p0.jpg","69241770_p1.jpg","69241770_p2.jpg","69257852_p0.jpg","69333159_p0.jpg","69507340_p0.jpg","69507340_p1.jpg","69606684_p0.jpg","69742579_p0.jpg","69848024_p0.jpg","69848024_p1.jpg","69942522_p0.jpg","69942522_p1.jpg","69942522_p2.jpg","69942522_p3.jpg","70079464_p0.jpg","70236910_p0.jpg","70434574_p0.jpg","70434574_p1.jpg","70538322_p0.jpg","70724191_p0.jpg","70724191_p1.jpg","70758093_p0.jpg","70758093_p1.jpg","70929012_p0.jpg","70929012_p1.jpg","70929012_p2.jpg","70929012_p3.jpg","71115059_p0.jpg","71286370_p0.jpg","71286370_p1.jpg","71286370_p2.jpg","71286370_p3.jpg","71286370_p4.jpg","71286370_p5.jpg","71498875_p0.jpg","71559902_p0.jpg","71559902_p1.jpg","71760027_p0.jpg","71760027_p1.jpg","71760027_p2.jpg","71945413_p0.jpg","71945413_p1.jpg","71945413_p2.jpg","71945413_p3.jpg","72268793_p0.jpg","72562357_p0.jpg","72562357_p1.jpg","72562357_p2.jpg","73063317_p0.jpg","73063317_p1.jpg","73063317_p2.jpg","73234337_p0.jpg","73234337_p1.jpg","73234337_p2.jpg","73558922_p0.jpg","73558922_p1.jpg","73558922_p2.jpg","73558922_p3.jpg","73558922_p4.jpg","73558922_p5.jpg","73558922_p6.jpg","73604903_p0.jpg","73604903_p1.jpg","73610458_p0.jpg","73610458_p1.jpg","73708980_p0.jpg","73708980_p1.jpg","73708980_p2.jpg","74135488_p0.jpg","74135488_p1.jpg"],colors:"#000",options:{center:!0,italic:!1,bold:!0,fontSize:20,letterSpacing:1,color:"#000"}}},computed:{styles:function(){var t={};return this.options.center&&(t["text-align"]="center"),this.options.italic&&(t["font-style"]="italic"),this.options.bold&&(t["font-weight"]="bold"),t.color=this.options.color,t["letter-spacing"]=this.options.letterSpacing+"px",t["font-size"]=this.options.fontSize+"px",t}},mounted:function(){window.innerWidth<400&&(this.options.fontSize=15)},methods:{generate:function(t){var e=this;this.$store.commit("SET_STORE",{key:"globalLoading",value:!0}),l(this.$refs[t][0],{useCORS:!0,logging:!1,scale:2.5}).then((function(t){e.$store.commit("SET_STORE",{key:"globalLoading",value:!1}),Object(r.a)(t.toDataURL(),"rbq.png")})).catch((function(t){e.$store.commit("SET_STORE",{key:"globalLoading",value:!1}),m.a.fire({type:"error",title:"生成失败",text:t})}))},getPixivId:function(t){return t.match(/^[0-9]+/)[0]},updateColor:function(t){this.options.color=t.hex}}},d=(o(571),o(2)),component=Object(d.a)(j,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"acg_meme"},[o("client-only",[o("modal",{attrs:{name:"rbq",classes:"rbq_modal",height:"auto",width:"400"}},[o("div",{staticClass:"title"},[t._v("\n                生成成功，如果长时间没有下载请自行"),o("b",[t._v("长按图片")]),t._v("保存\n            ")]),t._v(" "),t.results?o("img",{attrs:{src:t.results,alt:"rbq"}}):t._e()])],1),t._v(" "),o("nya-container",{attrs:{title:"ACG表情包制作"}},[o("nya-input",{attrs:{label:"请输入文字内容",placeholder:"啥百度啊",autocomplete:"off",autofocus:"",fullwidth:""},model:{value:t.text,callback:function(e){t.text="string"==typeof e?e.trim():e},expression:"text"}}),t._v(" "),o("div",{staticClass:"checkbox"},[o("nya-checkbox",{attrs:{label:"加粗"},model:{value:t.options.bold,callback:function(e){t.$set(t.options,"bold",e)},expression:"options.bold"}}),t._v(" "),o("nya-checkbox",{attrs:{label:"斜体"},model:{value:t.options.italic,callback:function(e){t.$set(t.options,"italic",e)},expression:"options.italic"}}),t._v(" "),o("nya-checkbox",{attrs:{label:"居中"},model:{value:t.options.center,callback:function(e){t.$set(t.options,"center",e)},expression:"options.center"}})],1),t._v(" "),o("div",{staticClass:"nya-subtitle"},[t._v("\n            字体大小\n        ")]),t._v(" "),o("client-only",[o("vue-slider",{attrs:{lazy:"",min:15,max:30},model:{value:t.options.fontSize,callback:function(e){t.$set(t.options,"fontSize",e)},expression:"options.fontSize"}})],1),t._v(" "),o("div",{staticClass:"nya-subtitle"},[t._v("\n            文本间距\n        ")]),t._v(" "),o("client-only",[o("vue-slider",{attrs:{lazy:"",min:0,max:10},model:{value:t.options.letterSpacing,callback:function(e){t.$set(t.options,"letterSpacing",e)},expression:"options.letterSpacing"}})],1),t._v(" "),o("div",{staticClass:"nya-subtitle"},[t._v("\n            文字颜色\n        ")]),t._v(" "),o("client-only",[o("compact-picker",{on:{input:t.updateColor},model:{value:t.colors,callback:function(e){t.colors=e},expression:"colors"}})],1)],1),t._v(" "),o("nya-container",{attrs:{title:"表情包预览"}},[t.loadAll?o("client-only",[o("ul",{staticClass:"template-list"},t._l(t.templateFiles,(function(e,n){return o("li",{key:n},[o("div",{staticClass:"box"},[o("div",{ref:e,refInFor:!0,staticClass:"rbq-box",attrs:{id:"_rbq_"+e}},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.cdnurl+e,expression:"cdnurl + item"}],attrs:{alt:t.getPixivId(e)}}),t._v(" "),o("div",{staticClass:"text",style:t.styles},[t._v("\n                                "+t._s(t.text)+"\n                            ")])]),t._v(" "),o("div",{staticClass:"generate"},[o("a",{staticClass:"info",attrs:{href:"https://www.pixiv.net/member_illust.php?mode=medium&illust_id="+t.getPixivId(e),target:"_blank",rel:"noopener noreferrer",title:"前往pixiv查看"}},[o("i",{staticClass:"eva eva-external-link-outline"})]),t._v(" "),o("i",{staticClass:"eva eva-download-outline download",attrs:{title:"下载"},on:{click:function(o){return t.generate(e)}}})])])])})),0)]):o("div",{staticClass:"load-all"},[o("div",{staticClass:"nya-btn",on:{click:function(e){t.loadAll=!0}}},[t._v("\n                加载模板\n            ")]),t._v(" "),o("span",[t._v("加载全部模板可能会消耗一定的流量")])])],1),t._v(" "),o("nya-container",{attrs:{title:"说明"}},[o("ul",{staticClass:"nya-list"},[o("li",[t._v("图片来自："),o("a",{attrs:{href:"https://www.pixiv.net/member.php?id=27304867",target:"_blank",rel:"noopener noreferrer"}},[t._v("長門ちゃん（Pixiv）")])])])])],1)}),[],!1,null,null,null);e.default=component.exports},366:function(t,e,o){"use strict";e.a=function(t,e){var a=document.createElement("a");a.href=t,a.download=e,a.click()}},429:function(t,e,o){var content=o(572);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(4).default)("d9f61882",content,!0,{sourceMap:!1})},571:function(t,e,o){"use strict";o(429)},572:function(t,e,o){var n=o(3)(!1);n.push([t.i,".acg_meme .load-all{display:flex;align-items:center;justify-content:center;flex-direction:column;margin:1.875rem auto}.acg_meme .load-all span{margin-top:.625rem;color:var(--theme)}.acg_meme .rbq_modal{max-width:100%;border-radius:.3125rem;background-color:var(--t2);box-shadow:0 1.25rem 3.75rem -.125rem rgba(27,33,58,.4);font-size:0}.acg_meme .rbq_modal .title{text-align:center;font-size:1rem;margin:.9375rem}.acg_meme .rbq_modal img{width:100%}.acg_meme .checkbox,.acg_meme .nya-subtitle{margin-top:.9375rem}.acg_meme .template-list{margin:0;padding:0}.acg_meme .template-list li{position:relative;list-style:none;display:inline-block;width:16.66667%;padding:.625rem;box-sizing:border-box;overflow:hidden;font-size:0;margin:0}.acg_meme .template-list li img{width:100%}.acg_meme .template-list li .generate{z-index:1;position:absolute;left:0;top:0;width:100%;height:100%;opacity:0;display:flex;align-items:center;justify-content:center;background-color:rgba(0,0,0,.6);transition:opacity .3s ease;text-shadow:.0625rem .0625rem .0625rem rgba(0,0,0,.3)}.acg_meme .template-list li .generate .info{position:absolute;right:.3125rem;top:.3125rem;border-radius:50%;display:flex;font-size:1rem;align-items:center;justify-content:center;text-decoration:none}.acg_meme .template-list li .generate i{cursor:pointer;color:#fff}.acg_meme .template-list li .generate .download{font-size:1.875rem}.acg_meme .template-list li .box{position:relative}.acg_meme .template-list li .text{background-color:#fff;padding:.3125rem;box-sizing:border-box}.acg_meme .template-list li:hover .generate{opacity:1}@media (max-width:980px){.acg_meme .template-list li{width:20%}}@media (max-width:780px){.acg_meme .template-list li{width:25%}.acg_meme .template-list li .generate{opacity:1;background-color:transparent;align-items:flex-start;justify-content:space-between}.acg_meme .template-list li .generate .info{position:static;display:block}.acg_meme .template-list li .generate i{font-size:1.125rem!important;padding:.3125rem;box-sizing:border-box;background-color:rgba(0,0,0,.3)}}@media (max-width:580px){.acg_meme .template-list li{width:33.33333%;padding:.5rem}}",""]),t.exports=n}}]);