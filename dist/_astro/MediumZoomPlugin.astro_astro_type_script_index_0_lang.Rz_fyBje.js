/*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom */var E=Object.assign||function(g){for(var o=1;o<arguments.length;o++){var m=arguments[o];for(var s in m)Object.prototype.hasOwnProperty.call(m,s)&&(g[s]=m[s])}return g},A=function(o){return o.tagName==="IMG"},de=function(o){return NodeList.prototype.isPrototypeOf(o)},x=function(o){return o&&o.nodeType===1},W=function(o){var m=o.currentSrc||o.src;return m.substr(-4).toLowerCase()===".svg"},Z=function(o){try{return Array.isArray(o)?o.filter(A):de(o)?[].slice.call(o).filter(A):x(o)?[o].filter(A):typeof o=="string"?[].slice.call(document.querySelectorAll(o)).filter(A):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},me=function(o){var m=document.createElement("div");return m.classList.add("medium-zoom-overlay"),m.style.background=o,m},le=function(o){var m=o.getBoundingClientRect(),s=m.top,y=m.left,I=m.width,N=m.height,p=o.cloneNode(),k=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,O=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return p.removeAttribute("id"),p.style.position="absolute",p.style.top=s+k+"px",p.style.left=y+O+"px",p.style.width=I+"px",p.style.height=N+"px",p.style.transform="",p},L=function(o,m){var s=E({bubbles:!1,cancelable:!1,detail:void 0},m);if(typeof window.CustomEvent=="function")return new CustomEvent(o,s);var y=document.createEvent("CustomEvent");return y.initCustomEvent(o,s.bubbles,s.cancelable,s.detail),y},ue=function g(o){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=window.Promise||function(t){function n(){}t(n,n)},y=function(t){var n=t.target;if(n===S){h();return}f.indexOf(n)!==-1&&F({target:n})},I=function(){if(!(b||!e.original)){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(R-t)>a.scrollOffset&&setTimeout(h,150)}},N=function(t){var n=t.key||t.keyCode;(n==="Escape"||n==="Esc"||n===27)&&h()},p=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t;if(t.background&&(S.style.background=t.background),t.container&&t.container instanceof Object&&(n.container=E({},a.container,t.container)),t.template){var i=x(t.template)?t.template:document.querySelector(t.template);n.template=i}return a=E({},a,n),f.forEach(function(d){d.dispatchEvent(L("medium-zoom:update",{detail:{zoom:l}}))}),l},k=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return g(E({},a,t))},O=function(){for(var t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];var d=n.reduce(function(r,c){return[].concat(r,Z(c))},[]);return d.filter(function(r){return f.indexOf(r)===-1}).forEach(function(r){f.push(r),r.classList.add("medium-zoom-image")}),C.forEach(function(r){var c=r.type,v=r.listener,w=r.options;d.forEach(function(z){z.addEventListener(c,v,w)})}),l},_=function(){for(var t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];e.zoomed&&h();var d=n.length>0?n.reduce(function(r,c){return[].concat(r,Z(c))},[]):f;return d.forEach(function(r){r.classList.remove("medium-zoom-image"),r.dispatchEvent(L("medium-zoom:detach",{detail:{zoom:l}}))}),f=f.filter(function(r){return d.indexOf(r)===-1}),l},B=function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return f.forEach(function(d){d.addEventListener("medium-zoom:"+t,n,i)}),C.push({type:"medium-zoom:"+t,listener:n,options:i}),l},X=function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return f.forEach(function(d){d.removeEventListener("medium-zoom:"+t,n,i)}),C=C.filter(function(d){return!(d.type==="medium-zoom:"+t&&d.listener.toString()===n.toString())}),l},Y=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.target,i=function(){var r={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},c=void 0,v=void 0;if(a.container)if(a.container instanceof Object)r=E({},r,a.container),c=r.width-r.left-r.right-a.margin*2,v=r.height-r.top-r.bottom-a.margin*2;else{var w=x(a.container)?a.container:document.querySelector(a.container),z=w.getBoundingClientRect(),M=z.width,J=z.height,Q=z.left,V=z.top;r=E({},r,{width:M,height:J,left:Q,top:V})}c=c||r.width-a.margin*2,v=v||r.height-a.margin*2;var H=e.zoomedHd||e.original,$=W(H)?c:H.naturalWidth||c,ee=W(H)?v:H.naturalHeight||v,T=H.getBoundingClientRect(),te=T.top,oe=T.left,j=T.width,P=T.height,ne=Math.min(Math.max(j,$),c)/j,re=Math.min(Math.max(P,ee),v)/P,q=Math.min(ne,re),ae=(-oe+(c-j)/2+a.margin+r.left)/q,ie=(-te+(v-P)/2+a.margin+r.top)/q,U="scale("+q+") translate3d("+ae+"px, "+ie+"px, 0)";e.zoomed.style.transform=U,e.zoomedHd&&(e.zoomedHd.style.transform=U)};return new s(function(d){if(n&&f.indexOf(n)===-1){d(l);return}var r=function M(){b=!1,e.zoomed.removeEventListener("transitionend",M),e.original.dispatchEvent(L("medium-zoom:opened",{detail:{zoom:l}})),d(l)};if(e.zoomed){d(l);return}if(n)e.original=n;else if(f.length>0){var c=f;e.original=c[0]}else{d(l);return}if(e.original.dispatchEvent(L("medium-zoom:open",{detail:{zoom:l}})),R=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,b=!0,e.zoomed=le(e.original),document.body.appendChild(S),a.template){var v=x(a.template)?a.template:document.querySelector(a.template);e.template=document.createElement("div"),e.template.appendChild(v.content.cloneNode(!0)),document.body.appendChild(e.template)}if(e.original.parentElement&&e.original.parentElement.tagName==="PICTURE"&&e.original.currentSrc&&(e.zoomed.src=e.original.currentSrc),document.body.appendChild(e.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),e.original.classList.add("medium-zoom-image--hidden"),e.zoomed.classList.add("medium-zoom-image--opened"),e.zoomed.addEventListener("click",h),e.zoomed.addEventListener("transitionend",r),e.original.getAttribute("data-zoom-src")){e.zoomedHd=e.zoomed.cloneNode(),e.zoomedHd.removeAttribute("srcset"),e.zoomedHd.removeAttribute("sizes"),e.zoomedHd.removeAttribute("loading"),e.zoomedHd.src=e.zoomed.getAttribute("data-zoom-src"),e.zoomedHd.onerror=function(){clearInterval(w),console.warn("Unable to reach the zoom image target "+e.zoomedHd.src),e.zoomedHd=null,i()};var w=setInterval(function(){e.zoomedHd.complete&&(clearInterval(w),e.zoomedHd.classList.add("medium-zoom-image--opened"),e.zoomedHd.addEventListener("click",h),document.body.appendChild(e.zoomedHd),i())},10)}else if(e.original.hasAttribute("srcset")){e.zoomedHd=e.zoomed.cloneNode(),e.zoomedHd.removeAttribute("sizes"),e.zoomedHd.removeAttribute("loading");var z=e.zoomedHd.addEventListener("load",function(){e.zoomedHd.removeEventListener("load",z),e.zoomedHd.classList.add("medium-zoom-image--opened"),e.zoomedHd.addEventListener("click",h),document.body.appendChild(e.zoomedHd),i()})}else i()})},h=function(){return new s(function(t){if(b||!e.original){t(l);return}var n=function i(){e.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(e.zoomed),e.zoomedHd&&document.body.removeChild(e.zoomedHd),document.body.removeChild(S),e.zoomed.classList.remove("medium-zoom-image--opened"),e.template&&document.body.removeChild(e.template),b=!1,e.zoomed.removeEventListener("transitionend",i),e.original.dispatchEvent(L("medium-zoom:closed",{detail:{zoom:l}})),e.original=null,e.zoomed=null,e.zoomedHd=null,e.template=null,t(l)};b=!0,document.body.classList.remove("medium-zoom--opened"),e.zoomed.style.transform="",e.zoomedHd&&(e.zoomedHd.style.transform=""),e.template&&(e.template.style.transition="opacity 150ms",e.template.style.opacity=0),e.original.dispatchEvent(L("medium-zoom:close",{detail:{zoom:l}})),e.zoomed.addEventListener("transitionend",n)})},F=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.target;return e.original?h():Y({target:n})},K=function(){return a},D=function(){return f},G=function(){return e.original},f=[],C=[],b=!1,R=0,a=m,e={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(o)==="[object Object]"?a=o:(o||typeof o=="string")&&O(o),a=E({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},a);var S=me(a.background);document.addEventListener("click",y),document.addEventListener("keyup",N),document.addEventListener("scroll",I),window.addEventListener("resize",h);var l={open:Y,close:h,toggle:F,update:p,clone:k,attach:O,detach:_,on:B,off:X,getOptions:K,getImages:D,getZoomedImage:G};return l};const ce=Math.round(window.screen.width/680)*8;document.addEventListener("astro:page-load",()=>{ue("[data-img-embed]",{margin:ce,background:"#000000BF"})});
