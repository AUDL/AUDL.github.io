!function(e,t){"use strict";var n=function(){var t=e.createElement("dummy").style,n="Webkit Moz O ms Khtml".split(" "),i={};return function(e){if("undefined"==typeof i[e]){var o=e.charAt(0).toUpperCase()+e.substr(1),a=(e+" "+n.join(o+" ")+o).split(" ");i[e]=null;for(var r in a)if(void 0!==t[a[r]]){i[e]=a[r];break}}return i[e]}}(),i=function(e){return[].slice.call(e)},o=function(e,t){var i,o;for(i in t)t.hasOwnProperty(i)&&(o=n(i),null!==o&&(e.style[o]=t[i]));return e},a=function(e,t){return isNaN(e)?t||0:Number(e)},r=function(t){return e.getElementById(t)},$=function(t,n){return n=n||e,n.querySelector(t)},s=function(t,n){return n=n||e,i(n.querySelectorAll(t))},c=function(t,n,i){var o=e.createEvent("CustomEvent");o.initCustomEvent(n,!0,!0,i),t.dispatchEvent(o)},l=function(e){return" translate3d("+e.x+"px,"+e.y+"px,"+e.z+"px) "},u=function(e,t){var n=" rotateX("+e.x+"deg) ",i=" rotateY("+e.y+"deg) ",o=" rotateZ("+e.z+"deg) ";return t?o+i+n:n+i+o},d=function(e){return" scale("+e+") "},p=function(e){return" perspective("+e+"px) "},h=function(){return r(t.location.hash.replace(/^#\/?/,""))},f=function(e){var n=t.innerHeight/e.height,i=t.innerWidth/e.width,o=n>i?i:n;return e.maxScale&&o>e.maxScale&&(o=e.maxScale),e.minScale&&o<e.minScale&&(o=e.minScale),o},m=e.body,v=navigator.userAgent.toLowerCase(),g=null!==n("perspective")&&m.classList&&m.dataset&&-1===v.search(/(iphone)|(ipod)|(android)/);g?(m.classList.remove("slide-not-supported"),m.classList.add("slide-supported")):m.className+=" slide-not-supported ";var y={},E={width:1024,height:768,maxScale:1,minScale:0,perspective:1e3,transitionDuration:900},k=function(){return!1},w=t.slide=function(n){if(!g)return{init:k,"goto":k,prev:k,next:k};if(n=n||"slide",y["slide-root-"+n])return y["slide-root-"+n];var v={},C=null,S=null,L=null,T=null,x=null,b=r(n),M=e.createElement("div"),D=!1,N=null,A=function(e){t.stopMove(),N!==e&&(c(e,"slide:stepenter"),N=e)},P=function(e){t.startMove(),N===e&&(c(e,"slide:stepleave"),N=null)},O=function(e,t){var n=e.dataset,i={translate:{x:a(n.x),y:a(n.y),z:a(n.z)},rotate:{x:a(n.rotateX),y:a(n.rotateY),z:a(n.rotateZ||n.rotate)},scale:a(n.scale,1),el:e};e.id||(e.id="step-"+(t+1)),v["slide-"+e.id]=i,o(e,{position:"absolute",transform:"translate(-50%,-50%)"+l(i.translate)+u(i.rotate)+d(i.scale),transformStyle:"preserve-3d"})},z=function(){if(!D){var t=$("meta[name='viewport']")||e.createElement("meta");t.content="width=device-width, minimum-scale=1, maximum-scale=1, user-scalable=no",t.parentNode!==e.head&&(t.name="viewport",e.head.appendChild(t));var r=b.dataset;T={width:a(r.width,E.width),height:a(r.height,E.height),maxScale:a(r.maxScale,E.maxScale),minScale:a(r.minScale,E.minScale),perspective:a(r.perspective,E.perspective),transitionDuration:a(r.transitionDuration,E.transitionDuration)},x=f(T),i(b.childNodes).forEach(function(e){M.appendChild(e)}),b.appendChild(M),e.documentElement.style.height="100%",o(m,{height:"100%",overflow:"hidden"});var l={position:"absolute",transformOrigin:"top left",transition:"all 0s ease-in-out",transformStyle:"preserve-3d"};o(b,l),o(b,{top:"50%",left:"50%",transform:p(T.perspective/x)+d(x)}),o(M,l),m.classList.remove("slide-disabled"),m.classList.add("slide-enabled"),L=s(".step",b),L.forEach(O);for(var u=L.length;u--;)L[u].dataset&&"ignore"in L[u].dataset&&L.splice(u,1);S={translate:{x:0,y:0,z:0},rotate:{x:0,y:0,z:0},scale:1},D=!0,c(b,"slide:init",{api:y["slide-root-"+n]})}},I=function(e){return"number"==typeof e?e=0>e?L[L.length+e]:L[e]:"string"==typeof e&&(e=r(e)),e&&e.id&&v["slide-"+e.id]?e:null},q=null,B=function(e,n){if(!D||!(e=I(e)))return!1;t.scrollTo(0,0);var i=v["slide-"+e.id];w.lastSlide=w.onSlide,w.onSlide=e.id,C&&(C.classList.remove("active"),m.classList.remove("slide-on-"+C.id)),e.classList.add("active"),m.classList.add("slide-on-"+e.id);var r={rotate:{x:-i.rotate.x,y:-i.rotate.y,z:-i.rotate.z},translate:{x:-i.translate.x,y:-i.translate.y,z:-i.translate.z},scale:1/i.scale},s=r.scale>=S.scale;n=a(n,T.transitionDuration);var c=n/2;e===C&&(x=f(T));var h=r.scale*x;return C&&C!==e&&P(C),o(b,{transform:p(T.perspective/h)+d(h),transitionDuration:n+"ms",transitionDelay:(s?c:0)+"ms"}),o(M,{transform:u(r.rotate,!0)+l(r.translate),transitionDuration:n+"ms",transitionDelay:(s?0:c)+"ms"}),(S.scale===r.scale||S.rotate.x===r.rotate.x&&S.rotate.y===r.rotate.y&&S.rotate.z===r.rotate.z&&S.translate.x===r.translate.x&&S.translate.y===r.translate.y&&S.translate.z===r.translate.z)&&(c=0),S=r,C=e,t.clearTimeout(q),q=t.setTimeout(function(){A(C)},n+c),e},F=function(){var e=L.indexOf(C)-1;return e=e>=0?L[e]:L[L.length-1],B(e)},X=function(){var e=L.indexOf(C)+1;return e=e<L.length?L[e]:L[0],B(e)};return b.addEventListener("slide:init",function(){L.forEach(function(e){e.classList.add("future")}),b.addEventListener("slide:stepenter",function(e){e.target.classList.remove("past"),e.target.classList.remove("future"),e.target.classList.add("present")},!1),b.addEventListener("slide:stepleave",function(e){e.target.classList.remove("present"),e.target.classList.add("past")},!1)},!1),b.addEventListener("slide:init",function(){B(h()||L[0],0)},!1),m.classList.add("slide-disabled"),y["slide-root-"+n]={init:z,"goto":B,next:X,prev:F}};w.supported=g}(document,window),function(e,t){"use strict";var n=function(e,t){var n=null;return function(){var i=this,o=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(i,o)},t)}};e.addEventListener("slide:init",function(i){var o=i.detail.api;e.addEventListener("keydown",function(e){(9===e.keyCode||e.keyCode>=32&&e.keyCode<=34||e.keyCode>=37&&e.keyCode<=40)&&e.preventDefault()},!1),e.addEventListener("keyup",function(e){if(9===e.keyCode||e.keyCode>=32&&e.keyCode<=34||e.keyCode>=37&&e.keyCode<=40){switch(e.keyCode){case 33:case 37:case 38:o.prev();break;case 9:case 32:case 34:case 39:case 40:o.next()}e.preventDefault()}},!1),e.addEventListener("click",function(t){for(var n=t.target;n&&"A"!==n.tagName&&n!==e.documentElement;)n=n.parentNode;if("A"===n.tagName){var i=n.getAttribute("href");i&&"#"===i[0]&&(n=e.getElementById(i.slice(1)))}o["goto"](n)&&(t.stopImmediatePropagation(),t.preventDefault())},!1),e.addEventListener("click",function(t){for(var n=t.target;!n.classList.contains("step")&&!n.classList.contains("active")&&n!==e.documentElement;)n=n.parentNode;n.classList.contains("active")||t.preventDefault()},!1),t.addEventListener("resize",n(function(){o["goto"](e.querySelector(".step.active"),500)},250),!1)},!1)}(document,window),function(){"use strict";/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */
function e(t,i){function o(e,t){return function(){return e.apply(t,arguments)}}var a;if(i=i||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=i.touchBoundary||10,this.layer=t,this.tapDelay=i.tapDelay||200,this.tapTimeout=i.tapTimeout||700,!e.notNeeded(t)){for(var r=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],s=this,c=0,l=r.length;l>c;c++)s[r[c]]=o(s[r[c]],s);n&&(t.addEventListener("mouseover",this.onMouse,!0),t.addEventListener("mousedown",this.onMouse,!0),t.addEventListener("mouseup",this.onMouse,!0)),t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,n,i){var o=Node.prototype.removeEventListener;"click"===e?o.call(t,e,n.hijacked||n,i):o.call(t,e,n,i)},t.addEventListener=function(e,n,i){var o=Node.prototype.addEventListener;"click"===e?o.call(t,e,n.hijacked||(n.hijacked=function(e){e.propagationStopped||n(e)}),i):o.call(t,e,n,i)}),"function"==typeof t.onclick&&(a=t.onclick,t.addEventListener("click",function(e){a(e)},!1),t.onclick=null)}}var t=navigator.userAgent.indexOf("Windows Phone")>=0,n=navigator.userAgent.indexOf("Android")>0&&!t,i=/iP(ad|hone|od)/.test(navigator.userAgent)&&!t,o=i&&/OS 4_\d(_\d)?/.test(navigator.userAgent),a=i&&/OS [6-7]_\d/.test(navigator.userAgent),r=navigator.userAgent.indexOf("BB10")>0;e.prototype.needsClick=function(e){switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled)return!0;break;case"input":if(i&&"file"===e.type||e.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(e.className)},e.prototype.needsFocus=function(e){switch(e.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!n;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}},e.prototype.sendClick=function(e,t){var n,i;document.activeElement&&document.activeElement!==e&&document.activeElement.blur(),i=t.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(e),!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,e.dispatchEvent(n)},e.prototype.determineEventType=function(e){return n&&"select"===e.tagName.toLowerCase()?"mousedown":"click"},e.prototype.focus=function(e){var t;i&&e.setSelectionRange&&0!==e.type.indexOf("date")&&"time"!==e.type&&"month"!==e.type?(t=e.value.length,e.setSelectionRange(t,t)):e.focus()},e.prototype.updateScrollParent=function(e){var t,n;if(t=e.fastClickScrollParent,!t||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n,e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}t&&(t.fastClickLastScrollTop=t.scrollTop)},e.prototype.getTargetElementFromEventTarget=function(e){return e.nodeType===Node.TEXT_NODE?e.parentNode:e},e.prototype.onTouchStart=function(e){var t,n,a;if(e.targetTouches.length>1)return!0;if(t=this.getTargetElementFromEventTarget(e.target),n=e.targetTouches[0],i){if(a=window.getSelection(),a.rangeCount&&!a.isCollapsed)return!0;if(!o){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return e.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(t)}}return this.trackingClick=!0,this.trackingClickStart=e.timeStamp,this.targetElement=t,this.touchStartX=n.pageX,this.touchStartY=n.pageY,e.timeStamp-this.lastClickTime<this.tapDelay&&e.preventDefault(),!0},e.prototype.touchHasMoved=function(e){var t=e.changedTouches[0],n=this.touchBoundary;return Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n?!0:!1},e.prototype.onTouchMove=function(e){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},e.prototype.findControl=function(e){return void 0!==e.control?e.control:e.htmlFor?document.getElementById(e.htmlFor):e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},e.prototype.onTouchEnd=function(e){var t,r,s,c,l,u=this.targetElement;if(!this.trackingClick)return!0;if(e.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(e.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=e.timeStamp,r=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,a&&(l=e.changedTouches[0],u=document.elementFromPoint(l.pageX-window.pageXOffset,l.pageY-window.pageYOffset)||u,u.fastClickScrollParent=this.targetElement.fastClickScrollParent),s=u.tagName.toLowerCase(),"label"===s){if(t=this.findControl(u)){if(this.focus(u),n)return!1;u=t}}else if(this.needsFocus(u))return e.timeStamp-r>100||i&&window.top!==window&&"input"===s?(this.targetElement=null,!1):(this.focus(u),this.sendClick(u,e),i&&"select"===s||(this.targetElement=null,e.preventDefault()),!1);return i&&!o&&(c=u.fastClickScrollParent,c&&c.fastClickLastScrollTop!==c.scrollTop)?!0:(this.needsClick(u)||(e.preventDefault(),this.sendClick(u,e)),!1)},e.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},e.prototype.onMouse=function(e){return this.targetElement?e.forwardedTouchEvent?!0:e.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(e.stopImmediatePropagation?e.stopImmediatePropagation():e.propagationStopped=!0,e.stopPropagation(),e.preventDefault(),!1):!0:!0},e.prototype.onClick=function(e){var t;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===e.target.type&&0===e.detail?!0:(t=this.onMouse(e),t||(this.targetElement=null),t)},e.prototype.destroy=function(){var e=this.layer;n&&(e.removeEventListener("mouseover",this.onMouse,!0),e.removeEventListener("mousedown",this.onMouse,!0),e.removeEventListener("mouseup",this.onMouse,!0)),e.removeEventListener("click",this.onClick,!0),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1),e.removeEventListener("touchcancel",this.onTouchCancel,!1)},e.notNeeded=function(e){var t,i,o,a;if("undefined"==typeof window.ontouchstart)return!0;if(i=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!n)return!0;if(t=document.querySelector("meta[name=viewport]")){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(i>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(r&&(o=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),o[1]>=10&&o[2]>=3&&(t=document.querySelector("meta[name=viewport]")))){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===e.style.msTouchAction||"manipulation"===e.style.touchAction?!0:(a=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],a>=27&&(t=document.querySelector("meta[name=viewport]"),t&&(-1!==t.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))?!0:"none"===e.style.touchAction||"manipulation"===e.style.touchAction?!0:!1)},e.attach=function(t,n){return new e(t,n)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return e}):"undefined"!=typeof module&&module.exports?(module.exports=e.attach,module.exports.FastClick=e):window.FastClick=e}(),!function(e,t){"use strict";function n(){c=!1}function i(){l=!1}function o(e){if(l)return e.preventDefault(),!1;var t=e.wheelDelta||-e.detail;if(slide.onSlide in r)for(var i=e.path.length;i--;)if(e.path[i].dataset&&"scroll"in e.path[i].dataset){if(0===e.path[i].scrollTop&&t>0)break;if(e.path[i].scrollTop>=e.path[i].scrollHeight-e.path[i].clientHeight&&0>t)break;return c=!0,setTimeout(n,s),!0}return c===!0?(e.preventDefault(),!1):(e.preventDefault(),Math.abs(t)<5?!1:t>0?(a.prev(),!1):(a.next(),!1))}var a=slide();a.init(),FastClick.attach(document.body);var r={faq:t.getElementById("faq")},s=500,c=!1,l=!1;window.startMove=function(){l=!0},window.stopMove=function(){setTimeout(i,400)},t.addEventListener("mousewheel",o,!1),t.addEventListener("DOMMouseScroll",o,!1);var u=t.getElementById("navIcon"),d=document.body;u.addEventListener("click",function(){return"navMenu"===slide.onSlide?a["goto"](slide.lastSlide):void a["goto"]("navMenu")},!1);var p=t.getElementById("contactForm");if(p.addEventListener("submit",function(e){e.preventDefault();var t=new XMLHttpRequest;return t.open("POST","contact.php",!0),t.setRequestHeader("Content-type","application/x-www-form-urlencoded"),t.onreadystatechange=function(){4==t.readyState&&200==t.status&&("success"===t.responseText?(window.alert("Thanks for the message! I'll get back to you soon."),a["goto"]("about")):window.alert(t.responseText))},t.send("email="+p.querySelector("#yourEmail").value+"&message="+p.querySelector("#yourMessage").value+"&captcha="+p.querySelector(".g-recaptcha-response").value),!1},!1),p.addEventListener("keyup",function(e){e.stopPropagation()}),p.addEventListener("keydown",function(e){e.stopPropagation()}),"ontouchstart"in window||navigator.MaxTouchPoints>0||navigator.msMaxTouchPoints>0){var h=t.getElementById("leftArrow"),f=t.getElementById("rightArrow");h.style.display="block",f.style.display="block",h.addEventListener("touchstart",a.prev,!1),f.addEventListener("touchstart",a.next,!1)}}(window,document);
//# sourceMappingURL=./script.js.map