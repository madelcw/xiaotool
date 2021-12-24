(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1533:function(e,t,o){"use strict";o.r(t),t.default=o.p+"6420f237859cf2741054bca681b824c3.m4a"},1534:function(e,t,o){"use strict";o.r(t),t.default=o.p+"a01acef168094a534e7ff4baf8a7ddd8.m4a"},1535:function(e,t,o){"use strict";o.r(t),t.default=o.p+"43c5916131dddd495f3cc911ff9028c0.m4a"},1536:function(e,t,o){"use strict";o(547)},1537:function(e,t,o){var n=o(3)(!1);n.push([e.i,".pomodoro_technique blockquote{margin-top:0}.pomodoro_technique .nya-input{margin-bottom:.9375rem}.pomodoro_technique .nya-checkbox{margin-right:.9375rem}.pomodoro_technique .nya-btn,.pomodoro_technique .nya-select{margin-top:.9375rem}.pomodoro_technique .nya-circle,.pomodoro_technique .nya-circle .time{transition:all .3s ease}.pomodoro_technique .nya-circle .cancel{z-index:1;cursor:pointer;position:absolute;width:100%;height:100%;border-radius:50%;display:flex;align-items:center;justify-content:center;opacity:0;background-color:hsla(0,0%,100%,.2);transition:all .3s ease;font-size:2.5rem;letter-spacing:.1875rem}.pomodoro_technique .nya-circle .cancel:hover{opacity:1}.pomodoro_technique .nya-circle .cancel:hover+.time{opacity:0}.pomodoro_technique .pomodoro-technique-box{z-index:1000;position:fixed;left:0;top:0;width:100vw;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:all .3s ease}.pomodoro_technique .pomodoro-technique-box .music{cursor:pointer;position:absolute;left:1.25rem;top:1.25rem;font-size:2.1875rem;color:#fff}.pomodoro_technique .pomodoro-technique-box .music.paused{opacity:.5}.pomodoro_technique .pomodoro-technique-box .info{color:#fff;margin-top:1.25rem;font-size:1.125rem;font-weight:700}.pomodoro_technique .pomodoro-technique-box .p-btn{position:absolute;top:calc(50vh + 10rem);cursor:pointer;color:#fff;font-size:1.125rem;margin-top:1.25rem;border:.125rem solid #fff;padding:.5rem 0;border-radius:1.25rem;transition:all .3s ease;box-sizing:border-box;text-align:center;width:6.875rem}.pomodoro_technique .pomodoro-technique-box .p-btn:hover{background-color:hsla(0,0%,100%,.2)}",""]),e.exports=n},1637:function(e,t,o){"use strict";o.r(t);var n={name:"PomodoroTechnique",head:function(){return this.$store.state.currentTool.head},data:function(){return{progress:0,restTime:5,workTime:25,music:!0,musicType:"forest",musicList:{forest:"森林",ocean:"海边",provence:"自然"},auto:!0,fullscreen:!0,time:"00:00",showBox:!1,interval:null,successful:!1,audio:null}},computed:{styles:function(){return{"background-color":this.successful?"#40cc40":"#f65f54"}}},methods:{start:function(){var e=this;this.playMusic(),this.showBox=!0,this.successful=!1,this.launchFullscreen();var time=60*this.workTime-.1,t=0,o=!1,n=function(){if(time/60<=.1&&time%60<=.1){if(!e.auto)return clearInterval(e.interval),e.successful=!0,e.time="成功",e.progress=100,!1;e.progress=0,t=0,time=o?60*e.workTime-.1:60*e.restTime-.1,e.successful=!e.successful,o=!o}var n=parseInt(time/60),c=parseInt(time%60);e.progress=t/(60*(o?e.restTime:e.workTime)-1)*100,0===n&&0===c&&(e.progress=100),e.time="".concat(n>9?n:"0"+n,":").concat(c>9?c:"0"+c),time-=.1,t+=.1};n(),this.interval=setInterval(n,100)},cancel:function(){clearInterval(this.interval),this.showBox=!1,this.audio.pause()},next:function(){this.start()},playMusic:function(){if(this.music){var e={forest:o(1533),ocean:o(1534),provence:o(1535)};this.audio=new Audio,this.audio.loop=!0,this.audio.src=e[this.musicType],this.audio.play()}},launchFullscreen:function(){var e=this;if(!this.fullscreen)return!1;this.$nextTick((function(){var t=e.$refs.pbox;t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen?t.msRequestFullscreen():t.webkitRequestFullscreen&&t.webkitRequestFullScreen()}))}},beforeRouteLeave:function(e,t,o){clearInterval(this.interval),o()}},c=(o(1536),o(2)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"pomodoro_technique"},[o("nya-container",{attrs:{title:"番茄时钟"}},[o("nya-input",{attrs:{fullwidth:"",type:"number",label:"休息时间（分钟）",autofocus:"",placeholder:"5",autocomplete:"off"},model:{value:e.restTime,callback:function(t){e.restTime="string"==typeof t?t.trim():t},expression:"restTime"}}),e._v(" "),o("nya-input",{attrs:{fullwidth:"",type:"number",label:"工作时长（分钟）",placeholder:"25",autocomplete:"off"},model:{value:e.workTime,callback:function(t){e.workTime="string"==typeof t?t.trim():t},expression:"workTime"}}),e._v(" "),o("nya-checkbox",{attrs:{label:"播放白噪音"},model:{value:e.music,callback:function(t){e.music=t},expression:"music"}}),e._v(" "),o("nya-checkbox",{attrs:{label:"全屏"},model:{value:e.fullscreen,callback:function(t){e.fullscreen=t},expression:"fullscreen"}}),e._v(" "),o("nya-checkbox",{attrs:{label:"自动休息和开始下一个"},model:{value:e.auto,callback:function(t){e.auto=t},expression:"auto"}}),e._v(" "),o("br"),e._v(" "),e.music?o("nya-select",{attrs:{fullwidth:"",items:e.musicList,label:"选择白噪音"},model:{value:e.musicType,callback:function(t){e.musicType=t},expression:"musicType"}}):e._e(),e._v(" "),o("div",{staticClass:"nya-btn",on:{click:e.start}},[e._v("\n            开始专注\n        ")])],1),e._v(" "),o("nya-container",{attrs:{title:"番茄工作法"}},[o("blockquote",[o("p",[e._v("番茄工作法是简单易行的时间管理方法，是由弗朗西斯科·西里洛于1992年创立的一种相对于GTD更微观的时间管理方法。")]),e._v(" "),o("p",[e._v("使用番茄工作法，选择一个待完成的任务，将番茄时间设为25分钟，专注工作，中途不允许做任何与该任务无关的事，直到番茄时钟响起，然后在纸上画一个X短暂休息一下（5分钟就行），每4个番茄时段多休息一会儿。")]),e._v(" "),o("p",[e._v("番茄工作法极大地提高了工作的效率，还会有意想不到的成就感。")])]),e._v(" "),o("div",{staticClass:"nya-subtitle"},[e._v("\n            番茄工作法有五个基本步骤：\n        ")]),e._v(" "),o("ol",{staticClass:"nya-list"},[o("li",[e._v("每天开始的时候规划今天要完成的几项任务，将任务逐项写在列表里（或记在软件的清单里）")]),e._v(" "),o("li",[e._v("设定你的番茄钟（定时器、软件、闹钟等），时间是25分钟。")]),e._v(" "),o("li",[e._v("开始完成第一项任务，直到番茄钟响铃或提醒（25分钟到）。")]),e._v(" "),o("li",[e._v("停止工作，并在列表里该项任务后画个X。")]),e._v(" "),o("li",[e._v("休息3~5分钟，活动、喝水、方便等等。")]),e._v(" "),o("li",[e._v("开始下一个番茄钟，继续该任务。一直循环下去，直到完成该任务，并在列表里将该任务划掉。")]),e._v(" "),o("li",[e._v("每四个番茄钟后，休息25分钟。")])]),e._v(" "),o("hr"),e._v(" "),o("div",{staticClass:"nya-subtitle"},[e._v("\n            在某个番茄钟的过程里，如果突然想起要做什么事情：\n        ")]),e._v(" "),o("ol",{staticClass:"nya-list"},[o("li",[e._v("非得马上做不可的话，停止这个番茄钟并宣告它作废（哪怕还剩5分钟就结束了），去完成这件事情，之后再重新开始同一个番茄钟；")]),e._v(" "),o("li",[e._v("不是必须马上去做的话，在列表里该项任务后面标记一个逗号（表示打扰），并将这件事记在另一个列表里（比如叫“计划外事件”），然后接着完成这个番茄钟。")])])]),e._v(" "),e.showBox?o("div",{ref:"pbox",staticClass:"pomodoro-technique-box",style:e.styles},[o("div",{staticClass:"music",class:{paused:e.audio.paused},on:{click:function(t){e.audio.paused?e.audio.play():e.audio.pause()}}},[o("i",{staticClass:"eva eva-music"})]),e._v(" "),o("nya-circle",{attrs:{width:250,radius:20,progress:e.progress,"bar-color":"#ffffff","font-size":50,"font-color":"#ffffff","background-color":"rgba(255, 255, 255, 0.2)"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:!e.$store.state.isMobile.any,expression:"!$store.state.isMobile.any"}],staticClass:"cancel",on:{click:e.cancel}},[e._v("\n                取消\n            ")]),e._v(" "),o("div",{staticClass:"time",domProps:{textContent:e._s(e.time)}})]),e._v(" "),!e.auto&&e.successful?o("div",{staticClass:"p-btn",style:{transform:!e.auto&&e.successful?"translateY(50px)":""},on:{click:e.next}},[e._v("\n            下一个\n        ")]):e._e(),e._v(" "),e.$store.state.isMobile.any?o("div",{staticClass:"p-btn cancel",on:{click:e.cancel}},[e._v("\n            取"),o("span",{staticStyle:{visibility:"hidden"}},[e._v("占")]),e._v("消\n        ")]):e._e()],1):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},547:function(e,t,o){var content=o(1537);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(4).default)("c953ec82",content,!0,{sourceMap:!1})}}]);