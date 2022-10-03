!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("Shiny")):"function"==typeof define&&define.amd?define(["Shiny"],t):"object"==typeof exports?exports.sever=t(require("Shiny")):e.sever=t(e.Shiny)}(self,(function(e){return(()=>{"use strict";var t={179:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"/* Hide Button */\n#ss-connect-dialog{\n  display: none !important;\n}\n\n#shiny-disconnected-overlay{\n  cursor: not-allowed !important;\n  z-index: 999999!;\n  background-size: cover;\n}\n\n@keyframes expand {\n  from {\n    transform: scale(.5);\n  }\n}\n\n/* Custom */\n.cleave-overlay{\n  z-index:999;\n  color: black;\n}\n\n.staticParent{\n  position: static;\n}\n\n",""]);const a=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},111:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var o=n(379),r=n.n(o),a=n(795),i=n.n(a),l=n(695),s=n.n(l),c=n(216),d=n.n(c),u=n(179),m={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=s()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};m.domAPI=i(),m.insertStyleElement=d(),r()(u.Z,m);const p=u.Z&&u.Z.locals?u.Z.locals:void 0},695:e=>{var t={};e.exports=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],l=0;l<e.length;l++){var s=e[l],c=o.base?s[0]+o.base:s[0],d=a[c]||0,u="".concat(c," ").concat(d);a[c]=d+1;var m=n(u),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==m?(t[m].references++,t[m].updater(p)):t.push({identifier:u,updater:r(p,o),references:1}),i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var l=n(a[i]);t[l].references--}for(var s=o(e,r),c=0;c<a.length;c++){var d=n(a[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o=n.css,r=n.media,a=n.sourceMap;r?e.setAttribute("media",r):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},541:t=>{t.exports=e}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={id:e,exports:{}};return t[e](a,a.exports,o),a.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{o.r(r),o.d(r,{unrupt:()=>e}),o(541);const e=()=>{t(),Shiny.shinyapp.isConnected()||Shiny.shinyapp.reconnect()},t=()=>{document.getElementById("ruptured").remove();let e=document.getElementsByClassName("severed");for(let t of e)t.remove()};var n=[];const a=(e,t,o,r,a,i,l)=>{let s,c=!1,d=!1;if(s=document.getElementById(e),null==s)return void console.error("Cannot find",e);d=d||!1,d&&n.push(e);let u=(e=>{let t={},n=e.offsetWidth,o=e.offsetHeight;o<20&&(o=20),n<20&&(n=20),t.width=n,t.height=o;let r=e.offsetLeft,a=e.offsetTop;return isNaN(r)&&(r=0),isNaN(a)&&(a=0),t.top=a,t.left=r,t})(s);if("relative"==window.getComputedStyle(s,null).position&&(s.className+=" staticParent"),s.childNodes.forEach((function(e){"cleave-overlay"===e.className&&(c=!0)})),!0===c)return void console.info("cleave on",e,"already exists");let m=document.createElement("DIV"),p=document.createElement("DIV");p.innerHTML=t,p.classList.add("cleave-overlay-content"),i&&u.height>50&&(p.style.paddingTop=u.height/2-10+"px"),l&&(p.style.textAlign="center"),m.style.height=u.height+"px",m.style.width=u.width+"px",m.style.top=u.top+"px",m.style.left=u.left+"px",m.style.color=o,m.style.backgroundColor=r,m.style.position="absolute",m.style.zIndex=999,m.style.animation="expand "+a+"s ease-in-out",m.classList.add("cleave-overlay"),m.appendChild(p),s.innerHTML="",s.appendChild(m)};o(111),$(document).on("shiny:connected",(function(e){Shiny.shinyapp.onDisconnected=function(){0===$("#shiny-disconnected-overlay").length&&$(document.body).append('<div id="shiny-disconnected-overlay"></div>')}})),Shiny.addCustomMessageHandler("sever-it",(function(e){$(document).on("shiny:disconnected",(function(t){(e=>{(()=>{let e=document.getElementsByClassName("severed");for(let t of e)t.remove()})(),(e=>{let t,n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style"),r=e.bg_color;null!=r&&null!=r||(r="none"),t="#shiny-disconnected-overlay{background-color: "+r+"; opacity: "+e.opacity+"; background-size: cover; background-image: url('"+e.bg_image+"')}",n.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t))})(e),(e=>{var t="severed",n=document.createElement("DIV"),o=document.createElement("DIV");n.innerHTML=e.content,e.box&&(t+=" panel",n.className="panel-body"),o.className=t,o.style.zIndex=99999999,o.style.textAlign="center",o.style.position="fixed",o.style.top="50%",o.style.left="50%",o.style.transform="translate(-50%, -50%)",o.style.color=e.color,o.appendChild(n),document.body.appendChild(o)})(e)})(e)})),$(document).on("shiny:connected",(e=>{$("#shiny-disconnected-overlay").remove()}))})),Shiny.addCustomMessageHandler("rupture-it",(function(e){(e=>{const t=()=>{(e=>{var t="severed",n=document.createElement("DIV"),o=document.createElement("DIV"),r=document.createElement("DIV");n.innerHTML=e.content,o.id="ruptured",o.style.position="absolute",o.style.top="0px",o.style.width=window.innerWidth+"px",o.style.height=window.innerHeight+"px",o.style.backgroundColor=e.bg_color,o.style.opacity=e.opacity,o.style.zIndex=99999998,e.bg_image&&(o.style.backgroundImage="url("+e.bg_image+")"),e.box&&(t+=" panel",n.className="panel-body"),r.className=t,r.style.zIndex=99999999,r.style.textAlign="center",r.style.position="fixed",r.style.top="50%",r.style.left="50%",r.style.transform="translate(-50%, -50%)",r.style.color=e.color,r.appendChild(n),document.body.appendChild(o),document.body.appendChild(r)})(e)},n=()=>{clearTimeout(o),o=setTimeout(t,e.ms)};var o=setTimeout(t,e.ms);window.onmousemove=n,window.onmousedown=n,window.onclick=n,window.onscroll=n,window.onkeypress=n})(e)})),Shiny.addCustomMessageHandler("cleave-it",(function(e){$(document).on("shiny:error",(function(t){(e.silent_errors||null==t.error.type)&&(t.preventDefault(),null==e.html&&(e.html="<span>"+t.error.message+"</span>"),null==e.bg_color&&(e.bg_color="rgba(0,0,0,0)"),null==e.ids?a(t.name,e.html,e.color,e.bg_color,e.duration,e.center_vertical,e.center_horizontal):e.ids.forEach(((n,o)=>{n==t.name&&a(t.name,e.html,e.color,e.bg_color,e.duration,e.center_vertical,e.center_horizontal)})))})),$(document).on("shiny:value shiny:outputinvalidated",(function(t){null==e.ids?$(".cleave-overlay").remove():e.ids.forEach(((e,n)=>{if(e==t.name){let e="#"+t.name+">.cleave-overlay";$(e).remove()}}))}))})),Shiny.addCustomMessageHandler("chisel-it",(function(e){$(document).on("shiny:error",(function(t){console.log(t),null!=t.error.type&&(t.preventDefault(),null==e.html&&(e.html="<span>"+t.error.message+"</span>"),null==e.bg_color&&(e.bg_color="rgba(0,0,0,0)"),null==e.ids?a(t.name,e.html,e.color,e.bg_color,e.duration,e.center_vertical,e.center_horizontal):e.ids.forEach(((n,o)=>{n==t.name&&a(t.name,e.html,e.color,e.bg_color,e.duration,e.center_vertical,e.center_horizontal)})))})),$(document).on("shiny:value shiny:outputinvalidated",(function(t){null==e.ids?$(".cleave-overlay").remove():e.ids.forEach(((e,n)=>{if(e==t.name){let e="#"+t.name+">.cleave-overlay";$(e).remove()}}))}))}))})(),r})()}));