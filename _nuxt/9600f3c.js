(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1525:function(t,e,n){var r=n(545),c=(n(420),n(1526)),o={s:n(1527),b:n(1528),hk_s:n(1529),hk_b:n(1530)},l=function(t){this.lang=t,this.encode=function(){return r.CL.apply(t,arguments)},this.decode=function(){return r.unCL.apply(t,arguments)},this.toMoney=function(){return r.toMoney.apply(t,arguments)}};l.langs=o,l.cn=c(o.s,o.b),l.hk=c(o.hk_s,o.hk_b),t.exports=l},1526:function(t,e,n){var r=n(545),c=n(420);t.exports=function(t,e){return{encodeS:function(e,n){return n=c.extend({ww:!0,tenMin:!0},n),r.CL.call(t,e,n)},encodeB:function(t,n){return n=c.extend({ww:!0},n),r.CL.call(e,t,n)},decodeS:function(){return r.unCL.apply(t,arguments)},decodeB:function(){return r.unCL.apply(e,arguments)},toMoney:function(t,n){return n=c.extend({ww:!0},n),r.toMoney.call(e,t,n)}}}},1527:function(t,e){t.exports={ch:"零一二三四五六七八九",ch_u:"个十百千万亿",ch_f:"负",ch_d:"点"}},1528:function(t,e){t.exports={ch:"零壹贰叁肆伍陆柒捌玖",ch_u:"个拾佰仟万亿",ch_f:"负",ch_d:"点",m_t:"人民币",m_z:"整",m_u:"元角分"}},1529:function(t,e){t.exports={ch:"零一二三四五六七八九",ch_u:"個十百千萬億",ch_f:"負",ch_d:"點"}},1530:function(t,e){t.exports={ch:"零壹貳參肆伍陸柒捌玖",ch_u:"個拾佰仟萬億",ch_f:"負",ch_d:"點",m_t:"$",m_z:"整",m_u:"圓角分"}},1531:function(t,e,n){"use strict";n(546)},1532:function(t,e,n){var r=n(3)(!1);r.push([t.i,'.number_to_zh table{color:#363636;border-collapse:collapse;border-spacing:0;width:100%}.number_to_zh table td{border:.0625rem solid #dbdbdb;padding:.5em .75em}.number_to_zh table td[rowspan="2"]{text-align:center}.number_to_zh table td video{max-width:100%}.number_to_zh .ntz{width:100%}',""]),t.exports=r},1635:function(t,e,n){"use strict";n.r(e);var r=n(1525),c=n.n(r),o=n(362),l=n.n(o),h={name:"NumberToZh",head:function(){return this.$store.state.currentTool.head},data:function(){return{number:"",hanzi:"",numResult:""}},computed:{hans:function(){var t=c.a.cn,e=c.a.hk,n=this.number;return[{lang:"cn",data:[{name:"中文小写",encode:[t.encodeS(n),t.encodeS(n,{tenMin:!1})]},{name:"中文大写",encode:[t.encodeB(n),t.encodeB(n,{tenMin:!0})]},{name:"金额大写",encode:[t.toMoney(n,{outSymbol:!1}),t.toMoney(n,{outSymbol:!1,complete:!0})]}]},{lang:"hk",data:[{name:"中文小写",encode:[e.encodeS(n),e.encodeS(n,{tenMin:!1})]},{name:"中文大写",encode:[e.encodeB(n),e.encodeB(n,{tenMin:!0})]},{name:"金额大写",encode:[e.toMoney(n,{outSymbol:!1}),e.toMoney(n,{outSymbol:!1,complete:!0})]}]}]}},methods:{isZhNum:function(){if(this.hanzi.length){if(/^负?[零一二三四五六七八九十百千万亿]*点?[零一二三四五六七八九]*$/g.test(this.hanzi))this.numResult=c.a.cn.decodeS(this.hanzi);else{if(!/^负?[零壹贰叁肆伍陆柒捌玖拾佰仟万亿]*点?[零壹贰叁肆伍陆柒捌玖]*$/g.test(this.hanzi))return void l.a.fire({type:"error",title:"转换失败",text:"ERROR: 请输入正确的大小写中文数字"});this.numResult=c.a.cn.decodeB(this.hanzi)}}else l.a.fire({type:"error",title:"转换失败",text:"ERROR: 你还没有输入"})}}},f=(n(1531),n(2)),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"number_to_zh"},[n("nya-container",{attrs:{title:"数字转中文"}},[n("nya-input",{staticClass:"ntz",attrs:{autofocus:"",label:"输入数字开始转换",placeholder:"0",autocomplete:"off",type:"number"},model:{value:t.number,callback:function(e){t.number="string"==typeof e?e.trim():e},expression:"number"}})],1),t._v(" "),""!=t.number?n("nya-container",{attrs:{title:"结果"}},[n("table",[n("tbody",[t._l(t.hans,(function(e){return[t._l(e.data,(function(r,c){return[n("tr",{key:c+e.lang+"0"},[n("td",{attrs:{rowspan:"2"}},[t._v("\n                                "+t._s("cn"==e.lang?"简体":"繁体")+t._s(r.name)+"\n                            ")]),t._v(" "),n("td",[t._v(t._s(r.encode[0]))])]),t._v(" "),n("tr",{key:c+e.lang+"1"},[n("td",[t._v(t._s(r.encode[1]))])])]}))]}))],2)])]):t._e(),t._v(" "),n("nya-container",{attrs:{title:"中文转数字"}},[n("div",{staticClass:"inputbtn"},[n("nya-input",{attrs:{label:"输入中文数字开始转换",placeholder:"零",autocomplete:"off",type:"text"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.isZhNum.apply(null,arguments)}},model:{value:t.hanzi,callback:function(e){t.hanzi="string"==typeof e?e.trim():e},expression:"hanzi"}}),t._v(" "),n("button",{staticClass:"nya-btn",attrs:{type:"button"},on:{click:t.isZhNum}},[t._v("\n                开始转换\n            ")])],1)]),t._v(" "),n("nya-container",{directives:[{name:"show",rawName:"v-show",value:t.numResult,expression:"numResult"}],attrs:{title:"转换成功"}},[n("pre",[t._v(t._s(t.numResult))])]),t._v(" "),n("nya-container",{attrs:{title:"说明"}},[n("ul",{staticClass:"nya-list"},[n("li",[t._v("基于 nzh 把数字转换为大小写中文。")]),t._v(" "),n("li",[t._v("\n                超大数转换中文争议请访问 "),n("a",{attrs:{href:"https://github.com/cnwhy/nzh#nzh",target:"_blank",rel:"noopener noreferrer"}},[t._v("\n                    nzh\n                ")]),t._v("。\n            ")]),t._v(" "),n("li",[t._v("中文转数字仅支持简体大小写汉字。")])])])],1)}),[],!1,null,null,null);e.default=component.exports},420:function(t,e,n){"use strict";var r=/^([+-])?0*(\d+)(\.(\d+))?$/,c=/^([+-])?0*(\d+)(\.(\d+))?e(([+-])?(\d+))$/i,o=e.e2ten=function(t){var e=c.exec(t.toString());if(!e)return t;var n=e[2],r=e[4]||"",o=e[5]?+e[5]:0;if(o>0){var l=r.substr(0,o);l=l.length<o?l+new Array(o-l.length+1).join("0"):l,r=r.substr(o),n+=l}else{o=-o;var h=n.length-o;h=h<0?0:h;var f=n.substr(h,o);f=f.length<o?new Array(o-f.length+1).join("0")+f:f,n=n.substring(0,h),r=f+r}return n=""==n?"0":n,("-"==e[1]?"-":"")+n+(r?"."+r:"")};e.getNumbResult=function(t){var e=r.exec(t.toString());if(!e&&c.test(t.toString())&&(e=r.exec(o(t.toString()))),e)return{int:e[2],decimal:e[4],minus:"-"==e[1],num:e.slice(1,3).join("")}},e.centerArray=function t(e,n){if(e.splice.apply(e,[0,n.length].concat(n.splice(0,n.length))),arguments.length>2){var r=[].slice.call(arguments,2);r.unshift(e),t.apply(null,r)}return e};var l=e.hasAttr=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};e.extend=function(t){for(var e,n=arguments[0]||{},r=Array.prototype.slice.call(arguments,1),i=0;i<r.length;i++){var c=r[i];for(e in c)l(c,e)&&(n[e]=c[e])}return n},e.getDigit=function(t){return t>=5?4*(t-4)+4:t},e.unshiftZero=function(t,e){if(null==e&&(e=1),!(e<=0))for(;e--;)t.unshift(0)},e.clearZero=function(t,e,n){if(null==t)return"";var r=~"*.?+$^[](){}|\\/".indexOf(e)?"\\"+e:e,c=new RegExp("^"+r+"+"),o=new RegExp(r+"+$"),l=new RegExp(r+"{2}","g");return t=t.toString(),"^"==n&&(t=t.replace(c,"")),n&&"$"!=n||(t=t.replace(o,"")),n&&"nto1"!=n||(t=t.replace(l,e)),t}},545:function(t,e,n){var r=n(420);function c(t,e){var n=r.getNumbResult(t);if(!n)return t;e=e||{};var c=this.ch,o=this.ch_u,l=this.ch_f||"",h=this.ch_d||".",f=c.charAt(0),d=n.int,_=n.decimal,m="",v="",y=n.minus?l:"";if(_){_=r.clearZero(_,"0","$");for(var x=0;x<_.length;x++)v+=c.charAt(+_.charAt(x));v=v?h+v:""}if(m=function t(n,l,h){n=r.getNumbResult(n).int;var d="",_=arguments.length>1?arguments[1]:e.tenMin,m=n.length;if(1==m)return c.charAt(+n);if(m<=4)for(var i=0,v=m;v--;){var y=+n.charAt(i);d+=_&&2==m&&0==i&&1==y?"":c.charAt(y),d+=y&&v?o.charAt(v):"",i++}else{for(var x=n.length/4>>0,A=n.length%4;0==A||!o.charAt(3+x);)A+=4,x--;var w=n.substr(0,A),z=n.substr(A);d=t(w,_)+o.charAt(3+x)+("0"==z.charAt(0)?f:"")+t(z,z.length>4&&_)}return d=r.clearZero(d,f)}(d),e.ww&&o.length>5){var A=o.charAt(4),w=o.charAt(5),z=m.lastIndexOf(w);~z&&(m=m.substring(0,z).replace(new RegExp(w,"g"),A+A)+m.substring(z))}return y+m+v}t.exports={CL:c,unCL:function(t){for(var e=(t=t.toString()).split(this.ch_d),n=e[0].replace(this.ch_f,""),c=e[1],o=!!~e[0].indexOf(this.ch_f),l=this.ch_u.charAt(1),h=this.ch_u.charAt(4),f=this.ch_u.charAt(5),d=(n=n.replace(new RegExp(h+"{2}","g"),f)).split(""),_=0,m=0,v=[],y=[],x=[],i=0;i<d.length;i++){var A,w=d[i],u=0;if(~(A=this.ch.indexOf(w)))A>0&&x.unshift(A);else if(~(u=this.ch_u.indexOf(w))){var z=r.getDigit(u);_>u?(r.unshiftZero(x,z),r.centerArray(y,x)):u>=m?(0==i&&(x=[1]),r.centerArray(v,y,x),v.length>0&&r.unshiftZero(v,z),m=u):(0==x.length&&l==w&&(x=[1]),r.centerArray(y,x),r.unshiftZero(y,r.getDigit(u)),_=u)}}r.centerArray(v,y,x).reverse(),0==v.length&&v.push(0);var R=0;if(c){v.push("."),R="0.";for(i=0;i<c.length;i++)R+=this.ch.indexOf(c.charAt(i)),v.push(this.ch.indexOf(c.charAt(i)));R=+R}return o&&v.unshift("-"),parseFloat(v.join(""))},toMoney:function(t,e){var n=r.getNumbResult(t),o=this.ch.charAt(0);if(e="object"==typeof e?e:{},!n)return t;e=r.extend({ww:!0,complete:!1,outSymbol:!0},e);var l=n.num,h=n.decimal||"",f=e.outSymbol?this.m_t:"",d=h?"":this.m_z,_="";if(e.complete){for(var i=1;i<this.m_u.length;i++)_+=c.call(this,h.charAt(i-1)||"0")+this.m_u.charAt(i);d=c.call(this,l,e)+this.m_u.charAt(0)}else{if(h=h.substr(0,this.m_u.length-1),h=r.clearZero(h,"0","$")){var m;for(i=0;i<this.m_u.length-1;i++)h.charAt(i)&&"0"!=h.charAt(i)&&(_+=c.call(this,h.charAt(i))+this.m_u.charAt(i+1),m=!1),"0"!==h.charAt(i)||m||(0==i&&"0"==l||(_+=o),m=!0)}"0"==l&&!d&&_||(d=c.call(this,l,e)+this.m_u.charAt(0)+d)}return f+d+_}}},546:function(t,e,n){var content=n(1532);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("5331cd02",content,!0,{sourceMap:!1})}}]);