/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/App.js":
/*!************************!*\
  !*** ./src/app/App.js ***!
  \************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/nicholasrq/Git/label-studio/label_studio/frontend/src/app/App.js: Support for the experimental syntax 'jsx' isn't currently enabled (21:5):\n\n\u001b[0m \u001b[90m 19 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 20 |\u001b[39m   \u001b[36mreturn\u001b[39m (\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 21 |\u001b[39m     \u001b[33m<\u001b[39m\u001b[33mErrorBoundary\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m     \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 22 |\u001b[39m       \u001b[33m<\u001b[39m\u001b[33mBrowserRouter\u001b[39m basename\u001b[33m=\u001b[39m{url\u001b[33m.\u001b[39mpathname \u001b[33m||\u001b[39m undefined}\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 23 |\u001b[39m         \u001b[33m<\u001b[39m\u001b[33mMultiProvider\u001b[39m providers\u001b[33m=\u001b[39m{[\u001b[0m\n\u001b[0m \u001b[90m 24 |\u001b[39m           \u001b[33m<\u001b[39m\u001b[33mAppStoreProvider\u001b[39m key\u001b[33m=\u001b[39m\u001b[32m\"app-store\"\u001b[39m\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\nAdd @babel/preset-react (https://git.io/JfeDR) to the 'presets' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://git.io/vb4yA) to the 'plugins' section to enable parsing.\n    at Parser._raise (/Users/nicholasrq/Git/label-studio/label_studio/frontend/node_modules/@babel/parser/lib/index.js:776:17)\n    at Parser.raiseWithData (/Users/nicholasrq/Git/label-studio/label_studio/frontend/node_modules/@babel/parser/lib/index.js:769:17)\n    at Parser.expectOnePlugin (/Users/nicholasrq/Git/label-studio/label_studio/frontend/node_modules/@babel/parser/lib/index.js:9198:18)\n    at Parser.parseExprAtom (/Users/nicholasrq/Git/label-studio/label_studio/frontend/node_modules/@babel/parser/lib/index.js:10667:22)\n    at Parser.parseExprSubscripts (/Users/nicholasrq/Git/label-studio/label_studio/frontend/node_modules/@babel/parser/lib/index.js:10248:23)\n    at Parser.parseUpdate (/Users/nicholasrq/Git/label-studio/label_studio/frontend/node_modules/@babel/parser/lib/index.js:10228:21)\n    at Parser.parseMaybeUnary (/Users/nicholasrq/Git/label-studio/label_studio/frontend/node_modules/@babel/parser/lib/index.js:10206:23)\n    at Parser.parseExprOps (/Users/nicholasrq/Git/label-studio/label_studio/frontend/node_modules/@babel/parser/lib/index.js:10071:23)\n    at Parser.parseMaybeConditional (/Users/nicholasrq/Git/label-studio/label_studio/frontend/node_modules/@babel/parser/lib/index.js:10045:23)\n    at Parser.parseMaybeAssign (/Users/nicholasrq/Git/label-studio/label_studio/frontend/node_modules/@babel/parser/lib/index.js:10008:21)");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/App */ "./src/app/App.js");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=index.js.map