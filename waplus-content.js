(function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=9)})({"51be":function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"d",(function(){return u}));var r="chrome",o="default",i="waplus.io",u="https://".concat(i)},9:function(t,e,n){t.exports=n("dc99")},dc99:function(t,e,n){"use strict";n.r(e);var r=n("ff6b"),o=n("51be");function i(){console.log("listen");var t=new r["a"];t.setInterval((function(){null!==document.querySelector(".pay-success-bth")&&(chrome.runtime.sendMessage({type:"refreshUserInfo"}),t.clearInterval())}),500)}var u=new RegExp("https://".concat(o["a"],"/pricing.*$"));u.test(window.location.href)&&i()},ff6b:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var u=function(){function t(){r(this,t),this.timerId=null,this.hasSetCallback=!1,this.testId=null}return i(t,[{key:"setTimeout",value:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){if(this.hasSetCallback)console.warn("The callback function has set. You could not set another callback function.");else{for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];this.timerId=setTimeout.apply(void 0,[t,e].concat(r))}}))},{key:"clearTimeout",value:function(){this._clearTimeout()}},{key:"setInterval",value:function(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];if(this.testId=r[0],this.hasSetCallback)console.warn("The callback function has set. You could not set another callback function.");else{this.hasSetCallback=!0;var i=this;u()}function u(){var n=setTimeout.apply(void 0,[function(){i.timerId=n,t.apply(void 0,r),clearTimeout(n),i.timerId&&u()},e].concat(r))}}},{key:"clearInterval",value:function(){this._clearTimeout()}},{key:"_clearTimeout",value:function(){this.timerId&&(clearTimeout(this.timerId),this.timerId=null)}}]),t}();e["a"]=u}});