webpackJsonp([0],{"0OdF":function(t,e,s){t.exports=s.p+"static/img/hat4.24a5462.png"},C34Q:function(t,e,s){t.exports=s.p+"static/img/bg.5bb9cfc.png"},HXOI:function(t,e,s){t.exports=s.p+"static/img/hat1.63a421e.png"},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),a=s("eMjc"),o=s.n(a),n={name:"index",data:function(){return{imgUrl:"",hatLists:[s("HXOI"),s("eoFQ"),s("nD9+"),s("0OdF"),s("uxvu")],sPosition:{x:0,y:0},dX:0,dY:0,moveX:0,moveY:0,scale:1,showHat:!1,showBorder:!1,hatUrl:"",downLoadImgUrl:"",isProduce:!1,centerX:0,centerY:0,rotate:0,isPicture:!1}},methods:{fileChange:function(t){t.preventDefault(),this.isPicture=!1;var e=this,s=new FileReader,i=t.target.files[0];s.readAsDataURL(i),s.onloadend=function(){e.imgUrl=s.result,e.isPicture=!0}},drawCanvas:function(){var t=this;t.isPicture&&(this.showBorder=!1,setTimeout(function(){o()(document.querySelector(".made-img")).then(function(e){t.downLoadImgUrl=e.toDataURL("image/jpeg"),t.isProduce=!0})},0))},moveStart:function(t){t.preventDefault(),this.sPosition={x:t.touches[0].clientX,y:t.touches[0].clientY}},moveHat:function(t){t.preventDefault();var e=document.querySelector(".hat-con");this.moveX=t.touches[0].clientX-this.sPosition.x,this.moveY=t.touches[0].clientY-this.sPosition.y,e.style.transform="translateX("+(this.dX+this.moveX)+"px) translateY("+(this.dY+this.moveY)+"px) scale("+this.scale+") rotate("+this.rotate+"deg)",e.style.webkitTransform="translateX("+(this.dX+this.moveX)+"px) translateY("+(this.dY+this.moveY)+"px) scale("+this.scale+") rotate("+this.rotate+"deg)"},moveEnd:function(){this.dX+=this.moveX,this.dY+=this.moveY,this.centerX+=this.moveX,this.centerY+=this.moveY},moveBar:function(t){var e=document.querySelector(".hat-con"),s=(document.querySelector(".del"),t.touches[0].clientX-this.centerX),i=t.touches[0].clientY-this.centerY;this.rotate=s>=0?(Math.atan(i/s)-.25*Math.PI)/Math.PI*180:(Math.atan(i/s)+.75*Math.PI)/Math.PI*180,this.scale=Math.sqrt(Math.pow(t.touches[0].clientX-this.centerX,2)+Math.pow(t.touches[0].clientY-this.centerY,2))/(50*Math.sqrt(2)),this.scale<.5&&(this.scale=.5),this.scale>2&&(this.scale=2),e.style.transform="translateX("+this.dX+"px) translateY("+this.dY+"px) scale("+this.scale+") rotate("+this.rotate+"deg)",e.style.webkitTransform="translateX("+this.dX+"px) translateY("+this.dY+"px) scale("+this.scale+") rotate("+this.rotate+"deg)"},clearHat:function(){var t=document.querySelector(".hat-con");t.style.webkitTransform="",t.style.transform="",this.dX=0,this.dY=0,this.moveX=0,this.moveY=0,this.scale=1,this.rotate=0},selectHat:function(t){if(this.isPicture){this.showHat=!0,this.showBorder=!0,this.hatUrl=t,this.clearHat();var e=this,s=document.querySelector(".hat-con"),i=document.querySelector(".del");setTimeout(function(){e.centerY=(i.getBoundingClientRect().top+s.getBoundingClientRect().top+10)/2,e.centerX=(i.getBoundingClientRect().left+s.getBoundingClientRect().left+10)/2},0)}}}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),s("div",{staticClass:"img-top"},[s("div",{staticClass:"img-border"},[s("div",{staticClass:"made-img"},[s("img",{staticClass:"img",attrs:{src:t.imgUrl},on:{click:function(e){t.showBorder=!1}}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showHat,expression:"showHat"}],staticClass:"hat-con",on:{touchstart:function(e){t.showBorder=!0}}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showBorder,expression:"showBorder"}],staticClass:"hat-border"},[s("div",{staticClass:"del",on:{touchmove:function(e){return t.moveBar(e)}}},[s("p",{staticClass:"bar"},[t._v("||")])])]),t._v(" "),s("img",{staticClass:"imghat",attrs:{src:t.hatUrl},on:{touchstart:function(e){return t.moveStart(e)},touchmove:function(e){return t.moveHat(e)},touchend:function(e){return t.moveEnd()}}})])])]),t._v(" "),s("div",{staticClass:"button-group"},[s("input",{staticClass:"upload",attrs:{type:"file",accept:"image/jpeg,image/png,image/jpg"},on:{change:t.fileChange}}),t._v(" "),s("a",{on:{click:t.drawCanvas}},[t._v("保存")])])]),t._v(" "),s("div",{staticClass:"hat-box"},[s("div",{staticClass:"hat-select"},t._l(t.hatLists,function(e){return s("div",{staticClass:"hat-border",on:{click:function(s){return t.selectHat(e)}}},[s("img",{attrs:{src:e}})])}),0)]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isProduce,expression:"isProduce"}],staticClass:"download",on:{click:function(e){t.isProduce=!1}}},[s("img",{attrs:{src:t.downLoadImgUrl,alt:""}}),t._v(" "),s("p",[t._v("长按图片保存")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("img",{attrs:{src:s("C34Q"),alt:""}})])}]};var c=s("VU/8")(n,r,!1,function(t){s("cOj0")},null,null).exports,h=s("/ocq");i.a.use(h.a);var l=new h.a({routes:[]});i.a.config.productionTip=!1,new i.a({el:"#app",router:l,template:"<App/>",components:{App:c}})},cOj0:function(t,e){},eoFQ:function(t,e,s){t.exports=s.p+"static/img/hat2.86ff6da.png"},"nD9+":function(t,e,s){t.exports=s.p+"static/img/hat3.b56bc66.png"},uxvu:function(t,e,s){t.exports=s.p+"static/img/hat5.26fdeee.png"}},["NHnr"]);
//# sourceMappingURL=app.37d504f6d72328360f8e.js.map