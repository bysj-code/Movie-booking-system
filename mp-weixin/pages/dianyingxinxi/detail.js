(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/dianyingxinxi/detail"],{"0af0":function(t,e,n){"use strict";n.r(e);var i=n("f737"),a=n("8ca7");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("6921");var s,c=n("f0c5"),u=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);e["default"]=u.exports},"0dfd":function(t,e,n){"use strict";(function(t){n("0d1d"),n("921b");i(n("66fd"));var e=i(n("0af0"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"118a":function(t,e,n){},"510a":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e,n,i,a,r,s){try{var c=t[r](s),u=c.value}catch(o){return void n(o)}c.done?e(u):Promise.resolve(u).then(i,a)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var r=t.apply(e,n);function c(t){s(r,i,a,c,u,"next",t)}function u(t){s(r,i,a,c,u,"throw",t)}c(void 0)}))}}var u={data:function(){return{autoplaySwiper:!0,intervalSwiper:5e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},numberList:[],selectStr:"",activeSeat:"",sfshIndex:-1,sfshOptions:["通过","不通过"],count:0}},computed:{SecondToDate:function(){var t=this.count;return null!=t&&""!=t&&(t=t>60&&t<3600?parseInt(t/60)+"分钟"+parseInt(60*(parseFloat(t/60)-parseInt(t/60)))+"秒":t>=3600&&t<86400?parseInt(t/3600)+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":t>=86400?parseInt(t/3600/24)+"天"+parseInt(24*(parseFloat(t/3600/24)-parseInt(t/3600/24)))+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":parseInt(t)+"秒"),t}},onLoad:function(){var e=c(i.default.mark((function e(n){var a,r;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.id=n.id,this.init(),a=t.getStorageSync("nowTable"),e.next=5,this.$api.session(a);case 5:r=e.sent,this.user=r.data,this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll(),this.btnColor=this.btnColor.sort((function(){return.5-Math.random()}));case 10:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),onShow:function(){var t=c(i.default.mark((function t(){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:0!=Object.keys(this.detail).length&&this.$api.update("dianyingxinxi",this.detail);case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{onPayTap:function(){t.setStorageSync("paytable","dianyingxinxi"),t.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},selectSeat:function(t){""==this.activeSeat?this.activeSeat="#"+"".concat(t)+"#":this.activeSeat=this.activeSeat+",#"+"".concat(t)+"#"},unselectSeat:function(t){for(var e=this.activeSeat.split(","),n=[],i=0;i<e.length;i++)e[i]!="#"+t+"#"&&n.push(e[i]);this.activeSeat=n.join(",")},onSubmitTap:function(){var e=this;this.activeSeat?t.showModal({title:"提示",content:"是否确认预定",success:function(){var n=c(i.default.mark((function n(a){var s,c,u;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!a.confirm){n.next=18;break}if(c=e.activeSeat.replace(/#/g,""),e.detail.selected?e.detail.selected=e.detail.selected+","+c:e.detail.selected=e.detail.selected+c,s={orderid:e.$utils.genTradeNo(),tablename:"dianyingxinxi",userid:e.user.id,goodid:e.detail.id,goodname:e.detail.dianyingmingcheng,picture:e.swiperList?e.swiperList[0]:"",buynumber:1,discountprice:0,total:0,discounttotal:0,type:1,address:c,activeSeat:c,status:"已支付"},r(s,"tablename","dianyingxinxi"),r(s,"discountprice",e.detail.vipprice),u=s,!e.detail.price){n.next=12;break}u["status"]="未支付",u["price"]=e.detail.price,u["total"]=e.detail.price*c.split(",").length,t.setStorageSync("orderGoods",[u]),e.$utils.jump("../shop-order-confirm/shop-order-confirm?seat=1&type=1"),n.next=18;break;case 12:return u["price"]=0,n.next=15,e.$api.add("orders",u);case 15:return n.next=17,e.$api.update("dianyingxinxi",e.detail);case 17:e.$utils.msgBack("预定成功");case 18:case"end":return n.stop()}}),n)})));function a(t){return n.apply(this,arguments)}return a}()}):this.$utils.msg("请选择要预定的座位")},shoucang:function(){var e=c(i.default.mark((function e(){var n;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=this,t.showModal({title:"提示",content:"是否收藏",success:function(){var t=c(i.default.mark((function t(e){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=4;break}return t.next=3,n.$api.add("storeup",{userid:n.user.id,name:n.detail.dianyingmingcheng,picture:n.swiperList[0],refid:n.detail.id,tablename:"dianyingxinxi"});case 3:n.$utils.msg("收藏成功");case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()});case 2:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),onAcrossTap:function(e){t.setStorageSync("crossTable","dianyingxinxi"),t.setStorageSync("crossObj",this.detail),this.$utils.jump("../".concat(e,"/add-or-update?cross=true"))},init:function(){var t=c(i.default.mark((function t(){var e,n,a,r,s;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.info("dianyingxinxi",this.id);case 2:for(e=t.sent,this.detail=e.data,this.swiperList=this.detail.haibao?this.detail.haibao.split(","):[],n=1;n<=this.detail.number;n++)this.numberList.push("".concat(n,"号"));if(this.detail.selected){for(a=this.detail.selected.split(","),r=[],s=0;s<a.length;s++)r.push("".concat(a[s],"号"));this.selectStr=r.join(",")}case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=c(i.default.mark((function t(e){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.list("discussdianyingxinxi",{page:e.num,limit:e.size,refid:this.id});case 2:n=t.sent,1==e.num&&(this.commentList=[]),this.commentList=this.commentList.concat(n.data.list),0==n.data.list.length&&(this.hasNext=!1),e.endSuccess(e.size,this.hasNext);case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(e){var n=this;t.downloadFile({url:n.$base.url+"file/dowmload?fileName="+e.replace(n.$base.url+"upload/",""),success:function(t){200===t.statusCode&&(n.$utils.msg("下载成功"),window.open(e))}})},onCommentTap:function(){this.$utils.jump("../discussdianyingxinxi/add-or-update?refid=".concat(this.id))},zan:function(){var e=c(i.default.mark((function e(){var n;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=this,t.showModal({title:"提示",content:"是否点赞",success:function(){var t=c(i.default.mark((function t(e){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=5;break}return n.detail.thumbsupnum+=1,t.next=4,n.$api.update("dianyingxinxi",n.detail);case 4:n.$utils.msg("点赞成功");case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()});case 2:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),cai:function(){var e=c(i.default.mark((function e(){var n;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=this,t.showModal({title:"提示",content:"是否点踩",success:function(){var t=c(i.default.mark((function t(e){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=5;break}return n.detail.crazilynum+=1,t.next=4,n.$api.update("dianyingxinxi",n.detail);case 4:n.$utils.msg("点踩成功");case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()});case 2:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}()}};e.default=u}).call(this,n("543d")["default"])},6921:function(t,e,n){"use strict";var i=n("118a"),a=n.n(i);a.a},"8ca7":function(t,e,n){"use strict";n.r(e);var i=n("510a"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},f737:function(t,e,n){"use strict";var i={"mescroll-uni":function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"7d14"))}},a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.numberList,(function(e,n){var i=t.selectStr.indexOf(e),a=t.activeSeat.indexOf("#"+e.replace("号","")+"#");return{$orig:t.__get_orig(e),g0:i,g1:a}})));t._isMounted||(t.e0=function(e){return t.$utils.msg("该座位已被预定")}),t.$mp.data=Object.assign({},{$root:{l0:n}})},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))}},[["0dfd","common/runtime","common/vendor"]]]);