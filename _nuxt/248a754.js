(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1590:function(t,e,n){"use strict";n(566)},1591:function(t,e,n){var r=n(3)(!1);r.push([t.i,".universal_pay_view{position:absolute;left:0;top:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center}.universal_pay_view .box{width:18.75rem;max-width:100%;padding:.625rem}.universal_pay_view .box .title{font-size:1.875rem;text-align:center;margin-bottom:.3125rem}.universal_pay_view .box .paylink{text-align:center;display:block;font-size:.875rem}.universal_pay_view .box .qrcode{width:100%;margin-bottom:.625rem}.universal_pay_view .box .qrcode img{width:100%;display:block}.universal_pay_view .box .btn{display:flex;justify-content:space-around}.universal_pay_view .box .btn div{cursor:pointer;width:3.75rem;height:3.75rem;opacity:.4}.universal_pay_view .box .btn div svg{width:100%;height:100%}.universal_pay_view .box .btn div.activa{opacity:1}.universal_pay_view .box .subtitle{opacity:.4;text-align:center;margin-top:1.25rem;font-size:.875rem}",""]),t.exports=r},1671:function(t,e,n){"use strict";n.r(e);var r=n(427).a,o=(n(1590),n(2)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"universal_pay_view"},[t.qrcode.qq?n("div",{staticClass:"box"},[n("div",{staticClass:"title"},[t._v("\n            扫码向我付款\n        ")]),t._v(" "),n("a",{staticClass:"paylink",attrs:{href:t.urls[t.show],target:"_blank",rel:"noopener noreferrer"}},[t._v("\n            或者点击这里\n        ")]),t._v(" "),n("div",{staticClass:"qrcode"},["qq"===t.show?n("img",{attrs:{src:t.qrcode.qq,alt:"qrcode"}}):t._e(),t._v(" "),"weixin"===t.show?n("img",{attrs:{src:t.qrcode.weixin,alt:"qrcode"}}):t._e(),t._v(" "),"alipay"===t.show?n("img",{attrs:{src:t.qrcode.alipay,alt:"qrcode"}}):t._e()]),t._v(" "),n("div",{staticClass:"btn"},[n("div",{staticClass:"qq",class:{activa:"qq"===t.show},on:{click:function(e){t.show="qq"}}},[n("svg",{attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"60",height:"60"}},[n("defs",[n("style",{attrs:{type:"text/css"}})]),n("path",{attrs:{d:"M0 511.964575A511.992524 511.992524 0 1 0 511.964575 0 511.964575 511.964575 0 0 0 0 511.964575z m0 0",fill:"#3392D1","p-id":"19575"}}),n("path",{attrs:{d:"M300.53254 449.694836c-3.04641 8.077179 1.425385 13.191794 0 43.935381-0.391282 8.384615-36.053843 45.69615-50.307688 84.572814s-15.958717 78.843327 5.589743 94.690249 41.923074-52.711278 44.494356-42.733586q1.816667 6.875384 4.304102 13.527178a192.622549 192.622549 0 0 0 35.46692 58.692303c3.437692 3.91282-20.877691 11.179486-35.46692 35.942049s4.192307 69.871789 76.663327 69.871789c93.544352 0 114.449991-32.895638 116.350504-32.727946a139.743579 139.743579 0 0 0 14.812819 0c9.027435 0 5.282307 0.726667 13.694871 0 4.527692-0.391282 50.000252 39.351792 112.94076 32.727946 107.211274-11.179486 90.833326-47.205381 82.392814-69.871789-8.775897-23.672562-39.854869-34.768202-38.457433-36.333331 25.68487-28.395895 29.765382-45.807945 38.457433-71.884097 3.577436-10.732307 28.479741 58.97179 47.512817 42.733587 7.993333-6.763589 23.952049-34.935895 7.993333-94.690249s-46.842048-73.365379-46.171279-84.572814c1.397436-23.309229 0.586923-39.687176-0.586923-43.935381-5.589743-20.542306-17.63564-16.014614-17.635639-20.542306 0-118.251016-88.932813-214.115111-198.631523-214.115111S315.820488 310.901514 315.820488 429.15253c0 9.390768-8.384615 2.459487-15.176153 20.542306z m0 0",fill:"#FFFFFF","p-id":"19576"}})])]),t._v(" "),n("div",{staticClass:"weixin",class:{activa:"weixin"===t.show},on:{click:function(e){t.show="weixin"}}},[n("svg",{attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"16387","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"60",height:"60"}},[n("defs",[n("style",{attrs:{type:"text/css"}})]),n("path",{attrs:{d:"M417.485 663.603c-57.344 34.56-65.792-19.456-65.792-19.456l-71.834-181.504c-27.597-86.272 23.962-38.963 23.962-38.963s44.237 36.25 77.773 58.368c33.536 22.118 71.833 6.502 71.833 6.502L922.88 253.798C836.3 137.062 693.197 60.723 531.2 60.723c-264.397 0-478.669 203.162-478.669 453.786 0 144.128 70.963 272.435 181.504 355.635l-19.968 124.109s-9.728 36.147 23.962 19.405c22.937-11.52 81.408-52.532 116.275-77.517 54.733 20.582 114.38 32.102 176.947 32.102 264.295 0 478.72-203.161 478.72-453.734 0-72.602-18.125-141.21-50.125-201.984-149.606 97.433-497.51 323.993-542.361 351.078",fill:"#25A838","p-id":"16388"}})])]),t._v(" "),n("div",{staticClass:"alipay",class:{activa:"alipay"===t.show},on:{click:function(e){t.show="alipay"}}},[n("svg",{attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"17095","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"60",height:"60"}},[n("defs",[n("style",{attrs:{type:"text/css"}})]),n("path",{attrs:{d:"M191.933 692.705c0-69.499 50.97-106.567 88.034-111.206 111.201-18.535 264.11 74.132 264.11 74.132-69.504 88.039-166.81 134.37-240.942 134.37-64.866-4.624-111.202-41.698-111.202-97.296z m787.697 37.07c-13.906-4.64-328.98-101.94-319.713-111.212 46.336-55.599 78.771-185.34 78.771-185.34v-27.8H553.349v-69.495h227.047v-41.702H553.349v-101.94h-92.672v97.306H256.804v41.703h203.873v69.499h-162.17v27.801h333.608c0 13.901-23.163 106.568-46.336 148.27-4.628-9.267-152.903-60.237-236.308-64.865-88.034 4.634-157.538 32.435-189.973 97.306-46.336 120.468 27.802 240.942 194.606 240.942 27.802 0 162.171-13.901 264.11-152.91 27.802 13.902 185.334 92.673 282.645 143.642-92.672 111.202-231.68 180.71-389.217 180.71A508.211 508.211 0 0 1 1.96 512.006a508.211 508.211 0 0 1 509.68-509.68 508.211 508.211 0 0 1 509.686 509.68c4.634 83.4-13.895 152.899-41.697 217.77z",fill:"#1296db","p-id":"17096"}})])])]),t._v(" "),n("div",{staticClass:"subtitle"},[t._v("\n            点击按钮切换二维码\n        ")])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},427:function(t,e,n){"use strict";(function(t){var r=n(7),o=(n(50),n(9),n(47),n(48),n(197),n(115)),l=n.n(o),c={type:"png",parse_url:!0,size:10,margin:2};e.a={name:"WsingDownloader",layout:"blank",head:function(){return{title:this.title}},data:function(){return{title:"收款 - ".concat("FancyPigTools"),urls:{},qrcode:{},show:"weixin"}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,data,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.$route.query.data){n.next=2;break}return n.abrupt("return",!1);case 2:r=navigator.userAgent,data=e.$route.query.data,o=t.from(data,"base64").toString(),o=JSON.parse(o),e.urls=o,e.qrcode={alipay:"data:image/png;base64,"+l.a.imageSync(e.urls.alipay,c).toString("base64"),qq:"data:image/png;base64,"+l.a.imageSync(e.urls.qq,c).toString("base64"),weixin:"data:image/png;base64,"+l.a.imageSync(e.urls.weixin,c).toString("base64")},r.match(/MicroMessenger\//i)?e.show="weixin":r.match(/QQ\//i)?e.show="qq":r.match(/Alipay/i)?(e.show="alipay",window.location.href=e.urls.alipay):e.show="weixin";case 9:case"end":return n.stop()}}),n)})))()}}}).call(this,n(11).Buffer)},566:function(t,e,n){var content=n(1591);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("02cb901e",content,!0,{sourceMap:!1})}}]);