!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=203)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.yoast.propTypes},10:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},111:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(10),o=n.n(r),i=n(20),s=n.n(i),a=n(21),c=n.n(a),u=n(13),l=n.n(u),p=n(98);var f=function(e){s()(i,e);var t,n,r=(t=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=l()(t);if(n){var o=l()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return c()(this,e)});function i(e,t,n,s,a){var c;return o()(this,i),(c=r.call(this,e)).name="RequestError",c.url=t,c.method=n,c.statusCode=s,c.stackTrace=a,c}return i}(n.n(p)()(Error))},12:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},13:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},14:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},141:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(10),o=n.n(r),i=n(20),s=n.n(i),a=n(21),c=n.n(a),u=n(13),l=n.n(u),p=n(98);var f=function(e){s()(i,e);var t,n,r=(t=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=l()(t);if(n){var o=l()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return c()(this,e)});function i(e,t){var n;return o()(this,i),(n=r.call(this,e)).name="ParseError",n.parseString=t,n}return i}(n.n(p)()(Error))},158:function(e,t){e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}},159:function(e,t,n){var r=n(53);function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function i(t,n,s){return o()?e.exports=i=Reflect.construct:e.exports=i=function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&r(i,n.prototype),i},i.apply(null,arguments)}e.exports=i},169:function(e,t,n){"use strict";var r,o,i=n(18),s=n.n(i),a=n(10),c=n.n(a),u=n(12),l=n.n(u),p=n(14),f=n.n(p),d=n(20),y=n.n(d),x=n(21),h=n.n(x),g=n(13),m=n.n(g),b=n(0),v=n(8),w=n.n(v),O=n(2),j=n(5),S=n(25),_=n(1),k=n.n(_),E=n(17),I=n.n(E),P=n(111),R=n(6),A=n.n(R),T=A.a.div(r||(r=I()(["\n\tmargin-top: 8px;\n"]))),B=A.a.pre(o||(o=I()(["\n\toverflow-x: scroll;\n\tmax-width: 500px;\n\tborder: 1px solid;\n\tpadding: 16px;\n"])));function C(e){var t=e.title,n=e.value;return n?Object(b.createElement)("p",null,Object(b.createElement)("strong",null,t),Object(b.createElement)("br",null),n):null}function D(e){var t=e.title,n=e.value;return n?Object(b.createElement)("details",null,Object(b.createElement)("summary",null,t),Object(b.createElement)(B,null,n)):null}function q(e){var t=e.message,n=e.error;return Object(b.createElement)(j.Alert,{type:"error"},Object(b.createElement)("div",{dangerouslySetInnerHTML:{__html:t}}),Object(b.createElement)("details",null,Object(b.createElement)("summary",null,Object(O.__)("Error details","wordpress-seo")),Object(b.createElement)(T,null,Object(b.createElement)(C,{title:Object(O.__)("Request URL","wordpress-seo"),value:n.url}),Object(b.createElement)(C,{title:Object(O.__)("Request method","wordpress-seo"),value:n.method}),Object(b.createElement)(C,{title:Object(O.__)("Status code","wordpress-seo"),value:n.statusCode}),Object(b.createElement)(C,{title:Object(O.__)("Error message","wordpress-seo"),value:n.message}),Object(b.createElement)(D,{title:Object(O.__)("Response","wordpress-seo"),value:n.parseString}),Object(b.createElement)(D,{title:Object(O.__)("Error stack trace","wordpress-seo"),value:n.stackTrace}))))}C.propTypes={title:k.a.string.isRequired,value:k.a.any},C.defaultProps={value:""},D.propTypes={title:k.a.string.isRequired,value:k.a.string},D.defaultProps={value:""},q.propTypes={message:k.a.string.isRequired,error:k.a.oneOfType([k.a.instanceOf(Error),k.a.instanceOf(P.a)]).isRequired};var M=n(141);var N=function(e){y()(x,e);var t,n,r,o,i,a,u,p,d=(u=x,p=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m()(u);if(p){var n=m()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h()(this,e)});function x(e){var t;return c()(this,x),(t=d.call(this,e)).settings=yoastIndexingData,t.state={state:"idle",processed:0,error:null,amount:parseInt(t.settings.amount,10),firstTime:"1"===t.settings.firstTime},t.startIndexing=t.startIndexing.bind(f()(t)),t.stopIndexing=t.stopIndexing.bind(f()(t)),t}return l()(x,[{key:"doIndexingRequest",value:(a=s()(w.a.mark((function e(t,n){var r,o,i,s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"POST",headers:{"X-WP-Nonce":n}});case 2:return r=e.sent,e.next=5,r.text();case 5:o=e.sent,e.prev=6,i=JSON.parse(o),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(6),new M.a("Error parsing the response to JSON.",o);case 13:if(r.ok){e.next=16;break}throw s=i.data?i.data.stackTrace:"",new P.a(i.message,t,"POST",r.status,s);case 16:return e.abrupt("return",i);case 17:case"end":return e.stop()}}),e,null,[[6,10]])}))),function(_x,e){return a.apply(this,arguments)})},{key:"doPreIndexingAction",value:(i=s()(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof this.props.preIndexingActions[t]){e.next=3;break}return e.next=3,this.props.preIndexingActions[t](this.settings);case 3:case"end":return e.stop()}}),e,this)}))),function(e){return i.apply(this,arguments)})},{key:"doPostIndexingAction",value:(o=s()(w.a.mark((function e(t,n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof this.props.indexingActions[t]){e.next=3;break}return e.next=3,this.props.indexingActions[t](n.objects,this.settings);case 3:case"end":return e.stop()}}),e,this)}))),function(e,t){return o.apply(this,arguments)})},{key:"doIndexing",value:(r=s()(w.a.mark((function e(t){var n,r=this;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=this.settings.restApi.root+this.settings.restApi.indexing_endpoints[t];case 1:if(!this.isState("in_progress")||!1===n){e.next=11;break}return e.prev=2,e.delegateYield(w.a.mark((function e(){var o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.doPreIndexingAction(t);case 2:return e.next=4,r.doIndexingRequest(n,r.settings.restApi.nonce);case 4:return o=e.sent,e.next=7,r.doPostIndexingAction(t,o);case 7:r.setState((function(e){return{processed:e.processed+o.objects.length,firstTime:!1}})),n=o.next_url;case 9:case"end":return e.stop()}}),e)}))(),"t0",4);case 4:e.next=9;break;case 6:e.prev=6,e.t1=e.catch(2),this.setState({state:"errored",error:e.t1,firstTime:!1});case 9:e.next=1;break;case 11:case"end":return e.stop()}}),e,this,[[2,6]])}))),function(e){return r.apply(this,arguments)})},{key:"index",value:(n=s()(w.a.mark((function e(){var t,n,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=0,n=Object.keys(this.settings.restApi.indexing_endpoints);case 1:if(!(t<n.length)){e.next=8;break}return r=n[t],e.next=5,this.doIndexing(r);case 5:t++,e.next=1;break;case 8:this.isState("errored")||this.isState("idle")||this.completeIndexing();case 9:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"startIndexing",value:(t=s()(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({processed:0,state:"in_progress"},this.index);case 1:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"completeIndexing",value:function(){this.setState({state:"completed"})}},{key:"stopIndexing",value:function(){this.setState((function(e){return{state:"idle",processed:0,amount:e.amount-e.processed}}))}},{key:"componentDidMount",value:function(){var e,t;if(!this.settings.disabled&&(this.props.indexingStateCallback(0===this.state.amount?"completed":this.state.state),"true"===new URLSearchParams(window.location.search).get("start-indexation"))){var n=function(e,t){var n=new URL(e);return n.searchParams.delete("start-indexation"),n.href}(window.location.href);null,e=document.title,t=n,window.history.pushState(null,e,t),this.startIndexing()}}},{key:"componentDidUpdate",value:function(e,t){this.state.state!==t.state&&this.props.indexingStateCallback(this.state.state)}},{key:"isState",value:function(e){return this.state.state===e}},{key:"renderFirstIndexationNotice",value:function(){return Object(b.createElement)(j.Alert,{type:"info"},Object(O.__)("This feature includes and replaces the Text Link Counter and Internal Linking Analysis","wordpress-seo"))}},{key:"renderStartButton",value:function(){return Object(b.createElement)(j.NewButton,{variant:"primary",onClick:this.startIndexing},Object(O.__)("Start SEO data optimization","wordpress-seo"))}},{key:"renderStopButton",value:function(){return Object(b.createElement)(j.NewButton,{variant:"secondary",onClick:this.stopIndexing},Object(O.__)("Stop SEO data optimization","wordpress-seo"))}},{key:"renderDisabledTool",value:function(){return Object(b.createElement)(b.Fragment,null,Object(b.createElement)("p",null,Object(b.createElement)(j.NewButton,{variant:"secondary",disabled:!0},Object(O.__)("Start SEO data optimization","wordpress-seo"))),Object(b.createElement)(j.Alert,{type:"info"},Object(O.__)("SEO data optimization is disabled for non-production environments.","wordpress-seo")))}},{key:"renderProgressBar",value:function(){return Object(b.createElement)(b.Fragment,null,Object(b.createElement)(j.ProgressBar,{style:{height:"16px",margin:"8px 0"},progressColor:S.colors.$color_pink_dark,max:parseInt(this.state.amount,10),value:this.state.processed}),Object(b.createElement)("p",{style:{color:S.colors.$palette_grey_text}},Object(O.__)("Optimizing SEO data... This may take a while.","wordpress-seo")))}},{key:"renderErrorAlert",value:function(){return Object(b.createElement)(q,{message:yoastIndexingData.errorMessage,error:this.state.error})}},{key:"renderTool",value:function(){return Object(b.createElement)(b.Fragment,null,this.isState("in_progress")&&this.renderProgressBar(),this.isState("errored")&&this.renderErrorAlert(),this.isState("idle")&&this.state.firstTime&&this.renderFirstIndexationNotice(),this.isState("in_progress")?this.renderStopButton():this.renderStartButton())}},{key:"render",value:function(){return this.settings.disabled?this.renderDisabledTool():this.isState("completed")||0===this.state.amount?Object(b.createElement)(j.Alert,{type:"success"},Object(O.__)("SEO data optimization complete","wordpress-seo")):this.renderTool()}}]),x}(b.Component);N.propTypes={indexingActions:k.a.object,preIndexingActions:k.a.object,indexingStateCallback:k.a.func},N.defaultProps={indexingActions:{},preIndexingActions:{},indexingStateCallback:function(){}},t.a=N},17:function(e,t){e.exports=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}},18:function(e,t){function n(e,t,n,r,o,i,s){try{var a=e[i](s),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var s=e.apply(t,r);function a(e){n(s,o,i,a,c,"next",e)}function c(e){n(s,o,i,a,c,"throw",e)}a(void 0)}))}}},2:function(e,t){e.exports=window.wp.i18n},20:function(e,t,n){var r=n(53);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},203:function(e,t,n){"use strict";n.r(t);var r,o=n(0),i=n(24),s=n.n(i),a=n(169),c={},u={};function l(){r||(r=document.getElementById("yoast-seo-indexing-action")),r&&Object(o.render)(Object(o.createElement)(a.a,{preIndexingActions:c,indexingActions:u}),r)}window.yoast=window.yoast||{},window.yoast.indexing=window.yoast.indexing||{},window.yoast.indexing.registerPreIndexingAction=function(e,t){c[e]=t,l()},window.yoast.indexing.registerIndexingAction=function(e,t){u[e]=t,l()},window.yoast.indexation=window.yoast.indexing,window.yoast.indexation.registerPreIndexationAction=function(e,t){console.warn("Deprecated since 15.1. Use 'window.yoast.indexing.registerPreIndexingAction' instead."),window.yoast.indexing.registerPreIndexingAction(e,t)},window.yoast.indexation.registerIndexationAction=function(e,t){console.warn("Deprecated since 15.1. Use 'window.yoast.indexing.registerIndexingAction' instead."),window.yoast.indexing.registerIndexingAction(e,t)},s()((function(){l()}))},21:function(e,t,n){var r=n(41),o=n(14);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},24:function(e,t){e.exports=window.jQuery},25:function(e,t){e.exports=window.yoast.styleGuide},41:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},5:function(e,t){e.exports=window.yoast.componentsNew},53:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},6:function(e,t){e.exports=window.yoast.styledComponents},8:function(e,t){e.exports=window.regeneratorRuntime},98:function(e,t,n){var r=n(13),o=n(53),i=n(158),s=n(159);function a(t){var n="function"==typeof Map?new Map:void 0;return e.exports=a=function(e){if(null===e||!i(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return s(e,arguments,r(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),o(t,e)},a(t)}e.exports=a}});