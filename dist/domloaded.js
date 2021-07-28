/*! @version domloaded 1.1.1 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


var isReady = false;
var fns = [];

var emit = function emit() {
  if (!isReady) {
    isReady = true;

    for (var i = 0; i < fns.length; ++i) {
      fns[i].call(document);
    }

    fns = null;
  }
};

if (document.readyState && document.readyState !== 'loading') {
  window.setTimeout(emit, 0);
} else {
  window.addEventListener('load', emit);
  document.addEventListener('DOMContentLoaded', emit);
  document.addEventListener('readystatechange', function () {
    if (document.readyState && document.readyState !== 'loading') {
      emit();
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (fn) {
  if (isReady) {
    fn.call(document);
  } else {
    fns.push(fn);
  }
});
window.domloaded = __webpack_exports__.default;
/******/ })()
;