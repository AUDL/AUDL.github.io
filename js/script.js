!function(t,e){"use strict";var n=function(){var e=t.createElement("dummy").style,n="Webkit Moz O ms Khtml".split(" "),i={};return function(t){if("undefined"==typeof i[t]){var o=t.charAt(0).toUpperCase()+t.substr(1),a=(t+" "+n.join(o+" ")+o).split(" ");i[t]=null;for(var r in a)if(void 0!==e[a[r]]){i[t]=a[r];break}}return i[t]}}(),i=function(t){return[].slice.call(t)},o=function(t,e){var i,o;for(i in e)e.hasOwnProperty(i)&&(o=n(i),null!==o&&(t.style[o]=e[i]));return t},a=function(t,e){return isNaN(t)?e||0:Number(t)},r=function(e){return t.getElementById(e)},$=function(e,n){return n=n||t,n.querySelector(e)},s=function(e,n){return n=n||t,i(n.querySelectorAll(e))},c=function(e,n,i){var o=t.createEvent("CustomEvent");o.initCustomEvent(n,!0,!0,i),e.dispatchEvent(o)},l=function(t){return" translate3d("+t.x+"px,"+t.y+"px,"+t.z+"px) "},u=function(t,e){var n=" rotateX("+t.x+"deg) ",i=" rotateY("+t.y+"deg) ",o=" rotateZ("+t.z+"deg) ";return e?o+i+n:n+i+o},d=function(t){return" scale("+t+") "},h=function(t){return" perspective("+t+"px) "},p=function(){return r(e.location.hash.replace(/^#\/?/,""))},f=function(t){var n=e.innerHeight/t.height,i=e.innerWidth/t.width,o=n>i?i:n;return t.maxScale&&o>t.maxScale&&(o=t.maxScale),t.minScale&&o<t.minScale&&(o=t.minScale),o},m=t.body,v=navigator.userAgent.toLowerCase(),g=null!==n("perspective")&&m.classList&&m.dataset&&-1===v.search(/(iphone)|(ipod)|(android)/);g?(m.classList.remove("slide-not-supported"),m.classList.add("slide-supported")):m.className+=" slide-not-supported ";var y={},E={width:1024,height:768,maxScale:1,minScale:0,perspective:1e3,transitionDuration:900},k=function(){return!1},w=e.slide=function(n){if(!g)return{init:k,"goto":k,prev:k,next:k};if(n=n||"slide",y["slide-root-"+n])return y["slide-root-"+n];var v={},C=null,S=null,L=null,T=null,x=null,b=r(n),M=t.createElement("div"),D=!1,N=null,A=function(t){e.stopMove(),N!==t&&(c(t,"slide:stepenter"),N=t)},P=function(t){e.startMove(),N===t&&(c(t,"slide:stepleave"),N=null)},O=function(t,e){var n=t.dataset,i={translate:{x:a(n.x),y:a(n.y),z:a(n.z)},rotate:{x:a(n.rotateX),y:a(n.rotateY),z:a(n.rotateZ||n.rotate)},scale:a(n.scale,1),el:t};t.id||(t.id="step-"+(e+1)),v["slide-"+t.id]=i,o(t,{position:"absolute",transform:"translate(-50%,-50%)"+l(i.translate)+u(i.rotate)+d(i.scale),transformStyle:"preserve-3d"})},z=function(){if(!D){var e=$("meta[name='viewport']")||t.createElement("meta");e.content="width=device-width, minimum-scale=1, maximum-scale=1, user-scalable=no",e.parentNode!==t.head&&(e.name="viewport",t.head.appendChild(e));var r=b.dataset;T={width:a(r.width,E.width),height:a(r.height,E.height),maxScale:a(r.maxScale,E.maxScale),minScale:a(r.minScale,E.minScale),perspective:a(r.perspective,E.perspective),transitionDuration:a(r.transitionDuration,E.transitionDuration)},x=f(T),i(b.childNodes).forEach(function(t){M.appendChild(t)}),b.appendChild(M),t.documentElement.style.height="100%",o(m,{height:"100%",overflow:"hidden"});var l={position:"absolute",transformOrigin:"top left",transition:"all 0s ease-in-out",transformStyle:"preserve-3d"};o(b,l),o(b,{top:"50%",left:"50%",transform:h(T.perspective/x)+d(x)}),o(M,l),m.classList.remove("slide-disabled"),m.classList.add("slide-enabled"),L=s(".step",b),L.forEach(O);for(var u=L.length;u--;)L[u].dataset&&"ignore"in L[u].dataset&&L.splice(u,1);S={translate:{x:0,y:0,z:0},rotate:{x:0,y:0,z:0},scale:1},D=!0,c(b,"slide:init",{api:y["slide-root-"+n]})}},I=function(t){return"number"==typeof t?t=0>t?L[L.length+t]:L[t]:"string"==typeof t&&(t=r(t)),t&&t.id&&v["slide-"+t.id]?t:null},B=null,F=function(t,n){if(!D||!(t=I(t)))return!1;e.scrollTo(0,0);var i=v["slide-"+t.id];w.lastSlide=w.onSlide,w.onSlide=t.id,C&&(C.classList.remove("active"),m.classList.remove("slide-on-"+C.id)),t.classList.add("active"),m.classList.add("slide-on-"+t.id);var r={rotate:{x:-i.rotate.x,y:-i.rotate.y,z:-i.rotate.z},translate:{x:-i.translate.x,y:-i.translate.y,z:-i.translate.z},scale:1/i.scale},s=r.scale>=S.scale;n=a(n,T.transitionDuration);var c=n/2;t===C&&(x=f(T));var p=r.scale*x;return C&&C!==t&&P(C),o(b,{transform:h(T.perspective/p)+d(p),transitionDuration:n+"ms",transitionDelay:(s?c:0)+"ms"}),o(M,{transform:u(r.rotate,!0)+l(r.translate),transitionDuration:n+"ms",transitionDelay:(s?0:c)+"ms"}),(S.scale===r.scale||S.rotate.x===r.rotate.x&&S.rotate.y===r.rotate.y&&S.rotate.z===r.rotate.z&&S.translate.x===r.translate.x&&S.translate.y===r.translate.y&&S.translate.z===r.translate.z)&&(c=0),S=r,C=t,e.clearTimeout(B),B=e.setTimeout(function(){A(C)},n+c),t},X=function(){var t=L.indexOf(C)-1;return t=t>=0?L[t]:L[L.length-1],F(t)},Y=function(){var t=L.indexOf(C)+1;return t=t<L.length?L[t]:L[0],F(t)};return b.addEventListener("slide:init",function(){L.forEach(function(t){t.classList.add("future")}),b.addEventListener("slide:stepenter",function(t){t.target.classList.remove("past"),t.target.classList.remove("future"),t.target.classList.add("present")},!1),b.addEventListener("slide:stepleave",function(t){t.target.classList.remove("present"),t.target.classList.add("past")},!1)},!1),b.addEventListener("slide:init",function(){F(p()||L[0],0)},!1),m.classList.add("slide-disabled"),y["slide-root-"+n]={init:z,"goto":F,next:Y,prev:X}};w.supported=g}(document,window),function(t,e){"use strict";var n=function(t,e){var n=null;return function(){var i=this,o=arguments;clearTimeout(n),n=setTimeout(function(){t.apply(i,o)},e)}};t.addEventListener("slide:init",function(i){var o=i.detail.api;t.addEventListener("keydown",function(t){(9===t.keyCode||t.keyCode>=32&&t.keyCode<=34||t.keyCode>=37&&t.keyCode<=40)&&t.preventDefault()},!1),t.addEventListener("keyup",function(t){if(9===t.keyCode||t.keyCode>=32&&t.keyCode<=34||t.keyCode>=37&&t.keyCode<=40){switch(t.keyCode){case 33:case 37:case 38:o.prev();break;case 9:case 32:case 34:case 39:case 40:o.next()}t.preventDefault()}},!1),t.addEventListener("click",function(e){for(var n=e.target;n&&"A"!==n.tagName&&n!==t.documentElement;)n=n.parentNode;if("A"===n.tagName){var i=n.getAttribute("href");i&&"#"===i[0]&&(n=t.getElementById(i.slice(1)))}o["goto"](n)&&(e.stopImmediatePropagation(),e.preventDefault())},!1),t.addEventListener("click",function(e){for(var n=e.target;!n.classList.contains("step")&&!n.classList.contains("active")&&n!==t.documentElement;)n=n.parentNode;n.classList.contains("active")||e.preventDefault()},!1),e.addEventListener("resize",n(function(){o["goto"](t.querySelector(".step.active"),500)},250),!1)},!1)}(document,window),function(){"use strict";/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */
function t(e,i){function o(t,e){return function(){return t.apply(e,arguments)}}var a;if(i=i||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=i.touchBoundary||10,this.layer=e,this.tapDelay=i.tapDelay||200,this.tapTimeout=i.tapTimeout||700,!t.notNeeded(e)){for(var r=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],s=this,c=0,l=r.length;l>c;c++)s[r[c]]=o(s[r[c]],s);n&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,n,i){var o=Node.prototype.removeEventListener;"click"===t?o.call(e,t,n.hijacked||n,i):o.call(e,t,n,i)},e.addEventListener=function(t,n,i){var o=Node.prototype.addEventListener;"click"===t?o.call(e,t,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),i):o.call(e,t,n,i)}),"function"==typeof e.onclick&&(a=e.onclick,e.addEventListener("click",function(t){a(t)},!1),e.onclick=null)}}var e=navigator.userAgent.indexOf("Windows Phone")>=0,n=navigator.userAgent.indexOf("Android")>0&&!e,i=/iP(ad|hone|od)/.test(navigator.userAgent)&&!e,o=i&&/OS 4_\d(_\d)?/.test(navigator.userAgent),a=i&&/OS [6-7]_\d/.test(navigator.userAgent),r=navigator.userAgent.indexOf("BB10")>0;t.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(i&&"file"===t.type||t.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.className)},t.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!n;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},t.prototype.sendClick=function(t,e){var n,i;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),i=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(t),!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},t.prototype.determineEventType=function(t){return n&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},t.prototype.focus=function(t){var e;i&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type&&"month"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},t.prototype.updateScrollParent=function(t){var e,n;if(e=t.fastClickScrollParent,!e||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},t.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},t.prototype.onTouchStart=function(t){var e,n,a;if(t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],i){if(a=window.getSelection(),a.rangeCount&&!a.isCollapsed)return!0;if(!o){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0},t.prototype.touchHasMoved=function(t){var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n},t.prototype.onTouchMove=function(t){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},t.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},t.prototype.onTouchEnd=function(t){var e,r,s,c,l,u=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,r=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,a&&(l=t.changedTouches[0],u=document.elementFromPoint(l.pageX-window.pageXOffset,l.pageY-window.pageYOffset)||u,u.fastClickScrollParent=this.targetElement.fastClickScrollParent),s=u.tagName.toLowerCase(),"label"===s){if(e=this.findControl(u)){if(this.focus(u),n)return!1;u=e}}else if(this.needsFocus(u))return t.timeStamp-r>100||i&&window.top!==window&&"input"===s?(this.targetElement=null,!1):(this.focus(u),this.sendClick(u,t),i&&"select"===s||(this.targetElement=null,t.preventDefault()),!1);return i&&!o&&(c=u.fastClickScrollParent,c&&c.fastClickLastScrollTop!==c.scrollTop)?!0:(this.needsClick(u)||(t.preventDefault(),this.sendClick(u,t)),!1)},t.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},t.prototype.onMouse=function(t){return this.targetElement?t.forwardedTouchEvent?!0:t.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1):!0:!0},t.prototype.onClick=function(t){var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail?!0:(e=this.onMouse(t),e||(this.targetElement=null),e)},t.prototype.destroy=function(){var t=this.layer;n&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},t.notNeeded=function(t){var e,i,o,a;if("undefined"==typeof window.ontouchstart)return!0;if(i=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!n)return!0;if(e=document.querySelector("meta[name=viewport]")){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(i>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(r&&(o=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),o[1]>=10&&o[2]>=3&&(e=document.querySelector("meta[name=viewport]")))){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===t.style.msTouchAction||"manipulation"===t.style.touchAction?!0:(a=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],a>=27&&(e=document.querySelector("meta[name=viewport]"),e&&(-1!==e.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))?!0:"none"===t.style.touchAction||"manipulation"===t.style.touchAction)},t.attach=function(e,n){return new t(e,n)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return t}):"undefined"!=typeof module&&module.exports?(module.exports=t.attach,module.exports.FastClick=t):window.FastClick=t}(),!function(t,e){"use strict";function n(){c=!1}function i(){l=!1}function o(t){if(l)return t.preventDefault(),!1;var e=t.wheelDelta||-t.detail;if(slide.onSlide in r)for(var i=t.path.length;i--;)if(t.path[i].dataset&&"scroll"in t.path[i].dataset){if(0===t.path[i].scrollTop&&e>0)break;if(t.path[i].scrollTop>=t.path[i].scrollHeight-t.path[i].clientHeight&&0>e)break;return c=!0,setTimeout(n,s),!0}return c===!0?(t.preventDefault(),!1):(t.preventDefault(),Math.abs(e)<5?!1:e>0?(a.prev(),!1):(a.next(),!1))}var a=slide();a.init(),FastClick.attach(document.body);var r={faq:e.getElementById("faq")},s=500,c=!1,l=!1;window.startMove=function(){l=!0},window.stopMove=function(){setTimeout(i,400)},e.addEventListener("mousewheel",o,!1),e.addEventListener("DOMMouseScroll",o,!1);var u=e.getElementById("navIcon"),d=document.body;u.addEventListener("click",function(){return"navMenu"===slide.onSlide?a["goto"](slide.lastSlide):void a["goto"]("navMenu")},!1);var h=e.getElementById("contactForm");if(h.addEventListener("keyup",function(t){t.stopPropagation()}),h.addEventListener("keydown",function(t){t.stopPropagation()}),"ontouchstart"in window||navigator.MaxTouchPoints>0||navigator.msMaxTouchPoints>0){var p=e.getElementById("leftArrow"),f=e.getElementById("rightArrow");p.style.display="block",f.style.display="block",p.addEventListener("touchstart",a.prev,!1),f.addEventListener("touchstart",a.next,!1)}}(window,document);
//# sourceMappingURL=./script.js.map