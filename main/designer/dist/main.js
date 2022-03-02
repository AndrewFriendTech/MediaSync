/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/elementsOfClass.js":
/*!********************************!*\
  !*** ./src/elementsOfClass.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"elementsOfClass\": () => (/* binding */ elementsOfClass)\n/* harmony export */ });\n/**\n * returns an Array of all elements of the class , \n * removing any that contain \"template\" as a co-class\n * @param {string} className class to find \n * @returns {Element[]} \n */\nfunction elementsOfClass(className) {\n  return Array.from(document.getElementsByClassName(className)).filter(function (element) {\n    return element.classList.contains(\"template\");\n  });\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/elementsOfClass.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elementsOfClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementsOfClass.js */ \"./src/elementsOfClass.js\");\n\nvar selectedScreen = null;\n\nfunction onScreenChange() {}\n\nfunction onSave() {}\n\nfunction previewFile() {\n  var fileElement = document.querySelector('input[type=file]');\n\n  if (!fileElement) {\n    return;\n  }\n\n  var file = fileElement.files[0];\n  var reader = new FileReader();\n  reader.addEventListener(\"load\", function () {\n    // convert image file to base64 string\n    console.log(reader.result);\n  }, false);\n\n  if (file) {\n    reader.readAsDataURL(file);\n  }\n}\n\nfunction uploadVideo() {\n  /** @type {HTMLInputElement} */\n  var fileSelector = document.getElementById(\"video-upload-input\");\n\n  if (fileSelector.files.length == 0) {//TO:DO code to warn user of error\n  } else {\n    var file = fileSelector.files[0];\n\n    if (file.type !== \"video/mp4\") {//TO:DO error\n    } else {\n      fetch(\"/video/\".concat(file.name), {\n        method: \"PUT\",\n        body: file\n      }).then(function (response) {\n        return response.json();\n      }).then(console.log);\n    }\n  }\n}\n\nwindow.onload = function () {\n  document.getElementById(\"video-upload-button\").addEventListener(\"click\", uploadVideo);\n};\n\nfunction getVideos() {}\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;