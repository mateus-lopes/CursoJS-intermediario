!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){var r=t(1),o=t(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,n,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function c(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function u(e,n){for(var t={},r=[],o=0;o<e.length;o++){var i=e[o],u=n.base?i[0]+n.base:i[0],s=t[u]||0,l="".concat(u," ").concat(s);t[u]=s+1;var f=c(l),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:l,updater:y(d,n),references:1}),r.push(l)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,f=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function d(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function p(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function y(e,n){var t,r,o;if(n.singleton){var i=m++;t=h||(h=s(n)),r=d.bind(null,t,i,!1),o=d.bind(null,t,i,!0)}else t=s(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=u(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=c(t[r]);a[o].references--}for(var i=u(e,n),s=0;s<t.length;s++){var l=c(t[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=i}}}},function(e,n,t){(n=t(3)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);"]),n.push([e.i,":root {\n  --primary-color: #115666;\n  --primary-color-darker: #093038;\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color-darker);\n  font-family: 'Open sans', sans-serif;\n  font-size: 16px;\n  text-align: center;\n  color: #f1f1f1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.container {\n  padding: 20px;\n  border-radius: 10px;\n}\n\n.div-range {\n  margin: 1em 0 0 0;\n}\n\n#generate {\n  background: #f1f1f1;\n  color: #093038;\n  border: none;\n  padding: 1.2em 6em;\n  font-size: 1em;\n  cursor: pointer;\n  margin: 1em 0 0 0;\n  box-shadow: 0 0 10px #0000004d;\n  transition: all 0.3s ease-in-out;\n}\n\n#password {\n  margin: 1em 0;\n  color: #11819b;\n  font-size: 1.3em;\n}\n\n#password.error {\n  color: #b84040;\n}\n\n.settings {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1em;\n}\n\n.settings li {\n  list-style: none;\n}\n\ninput {\n  padding: .5em;\n}\n\n.btn-run:hover {\n  background: #074857;\n  color: #f1f1f1;\n}",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([o]).join("\n")}var a,c,u;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&o[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),n.push(u))}},n}},function(e,n,t){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(i=o.key,a=void 0,a=function(e,n){if("object"!==r(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,n||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(i,"string"),"symbol"===r(a)?a:String(a)),o)}var i,a}t.r(n);var i=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.btnRange=document.querySelector("#range")}var n,t,r;return n=e,(t=[{key:"init",value:function(){var e=this;return this.btnRange.addEventListener("click",(function(){document.querySelector(".range-value").innerHTML=e.btnRange.value})),this.btnRange.value}}])&&o(n.prototype,t),r&&o(n,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(o=r.key,i=void 0,i=function(e,n){if("object"!==a(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(o,"string"),"symbol"===a(i)?i:String(i)),r)}var o,i}var u,s,l=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.withNumber=document.querySelector("#withNumber"),this.withSymbol=document.querySelector("#withSymbol"),this.withUppercase=document.querySelector("#withUpper"),this.withLowercase=document.querySelector("#withLower"),this.btnGenerate=document.querySelector("#generate"),this.password=document.querySelector("#password")}var n,t,r;return n=e,(t=[{key:"rand",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:9;return String(Math.floor(Math.random()*(n-e)+e))}},{key:"init",value:function(){var e=this;this.btnGenerate.addEventListener("click",(function(){e.generate()}))}},{key:"generate",value:function(){var e=(new i).init(),n=this.withNumber.checked,t=this.withSymbol.checked,r=this.withUppercase.checked,o=this.withLowercase.checked;this.password.innerHTML=this.createPassword(e,n,t,r,o),console.log(this.password.innerHTML.length)}},{key:"createPassword",value:function(e,n,t,r,o){if(!1===(n||t||r||o))return this.password.classList.add("error"),"Selecione pelo menos uma opção";this.password.classList.remove("error");for(var i=[];i.length<e;)i.push(this.generateChar(n,t,r,o));return this.password.innerHTML.includes("\x3c!--")&&this.createPassword(e,n,t,r,o),"".concat(i.join(""))}},{key:"generateChar",value:function(e,n,t,r){var o=[];return e&&o.push(this.generateNumber()),n&&o.push(this.generateSymbol()),t&&o.push(this.generateLetter()),r&&o.push(this.generateLetter().toLowerCase()),o[this.rand(0,o.length)]}},{key:"generateNumber",value:function(){return"0123456789"[this.rand(0,"0123456789".length)]}},{key:"generateSymbol",value:function(){var e="!@#$%&*(){}[]=/.-+?,;:";return e[this.rand(0,e.length)]}},{key:"generateLetter",value:function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZ";return e[this.rand(0,e.length)]}}])&&c(n.prototype,t),r&&c(n,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();t(0);u=new i,s=new l,u.init(),s.init()}]);
//# sourceMappingURL=bundle.js.map