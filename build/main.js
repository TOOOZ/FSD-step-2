!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){var n=r(1);t.exports=function(t){var e,r="",o={},i=[];return o.color=e=function(t){this&&this.block,this&&this.attributes;r+="\n",r=(r+=i.join(""))+'<li class="pet">'+n.escape(null==(e=t)?"":e)+"</li>"},r+='<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="initial-scale=1.0, width=device-width">\n    <title>Webpack app</title>\n  </head>\n  <body>\n    <h1>test pug</h1>',i.push("    "),o.color("red"),i.pop(),r+="\n  </body>\n</html>"}},function(t,e,r){"use strict";var n=Object.prototype.hasOwnProperty;function o(t,e){return Array.isArray(t)?function(t,e){for(var r,n="",i="",a=Array.isArray(e),u=0;u<t.length;u++)(r=o(t[u]))&&(a&&e[u]&&(r=c(r)),n=n+i+r,i=" ");return n}(t,e):t&&"object"==typeof t?function(t){var e="",r="";for(var o in t)o&&t[o]&&n.call(t,o)&&(e=e+r+o,r=" ");return e}(t):t||""}function i(t){if(!t)return"";if("object"==typeof t){var e="";for(var r in t)n.call(t,r)&&(e=e+r+":"+t[r]+";");return e}return t+""}function a(t,e,r,n){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(n?t:t+'="'+t+'"');var o=typeof e;return"object"!==o&&"function"!==o||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),r||-1===e.indexOf('"'))?(r&&(e=c(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}e.merge=function t(e,r){if(1===arguments.length){for(var n=e[0],o=1;o<e.length;o++)n=t(n,e[o]);return n}for(var a in r)if("class"===a){var u=e[a]||[];e[a]=(Array.isArray(u)?u:[u]).concat(r[a]||[])}else if("style"===a){u=(u=i(e[a]))&&";"!==u[u.length-1]?u+";":u;var c=i(r[a]);c=c&&";"!==c[c.length-1]?c+";":c,e[a]=u+c}else e[a]=r[a];return e},e.classes=o,e.style=i,e.attr=a,e.attrs=function(t,e){var r="";for(var u in t)if(n.call(t,u)){var c=t[u];if("class"===u){c=o(c),r=a(u,c,!1,e)+r;continue}"style"===u&&(c=i(c)),r+=a(u,c,!1,e)}return r};var u=/["&<>]/;function c(t){var e=""+t,r=u.exec(e);if(!r)return t;var n,o,i,a="";for(n=r.index,o=0;n<e.length;n++){switch(e.charCodeAt(n)){case 34:i="&quot;";break;case 38:i="&amp;";break;case 60:i="&lt;";break;case 62:i="&gt;";break;default:continue}o!==n&&(a+=e.substring(o,n)),o=n+1,a+=i}return o!==n?a+e.substring(o,n):a}e.escape=c,e.rethrow=function t(e,n,o,i){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||i))throw e.message+=" on line "+o,e;try{i=i||r(2).readFileSync(n,"utf8")}catch(r){t(e,null,o)}var a=3,u=i.split("\n"),c=Math.max(o-a,0),f=Math.min(u.length,o+a);a=u.slice(c,f).map((function(t,e){var r=e+c+1;return(r==o?"  > ":"    ")+r+"| "+t})).join("\n");throw e.path=n,e.message=(n||"Pug")+":"+o+"\n"+a+"\n\n"+e.message,e}},function(t,e){}]);