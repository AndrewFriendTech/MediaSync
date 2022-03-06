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

/***/ "./build/components/tab-container/createScreen.js":
/*!********************************************************!*\
  !*** ./build/components/tab-container/createScreen.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createScreen\": () => (/* binding */ createScreen)\n/* harmony export */ });\n/* harmony import */ var _lib_getTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/getTemplate */ \"./build/lib/getTemplate.js\");\n/* harmony import */ var _lib_onScreenChange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/onScreenChange */ \"./build/lib/onScreenChange.js\");\n\n\nfunction createScreen() {\n  var screenNumber = window.screens.length + 1;\n  window.screens.push({\n    content: []\n  });\n  window.selectedScreen = screenNumber;\n  var tabList = document.getElementById(\"tab-list\");\n  var tabTemplate = (0,_lib_getTemplate__WEBPACK_IMPORTED_MODULE_0__.getTemplate)(\"tab\");\n  /** @type {HTMLElement} */\n\n  tabTemplate.querySelector(\".number\").textContent = String(screenNumber);\n  tabTemplate.addEventListener(\"click\", function () {\n    return (0,_lib_onScreenChange__WEBPACK_IMPORTED_MODULE_1__.onScreenChange)(screenNumber);\n  });\n  tabList.appendChild(tabTemplate);\n  (0,_lib_onScreenChange__WEBPACK_IMPORTED_MODULE_1__.onScreenChange)(screenNumber);\n}\n\n//# sourceURL=webpack://my-webpack-project/./build/components/tab-container/createScreen.js?");

/***/ }),

/***/ "./build/components/video-list/getVideos.js":
/*!**************************************************!*\
  !*** ./build/components/video-list/getVideos.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getVideos\": () => (/* binding */ getVideos)\n/* harmony export */ });\n/**\n *\n * @returns {[Video]} array of fetched videos\n */\nfunction getVideos() {\n  var request = new XMLHttpRequest();\n  request.open(\"GET\", \"/video\", false);\n  request.send();\n  return JSON.parse(request.response);\n}\n\n//# sourceURL=webpack://my-webpack-project/./build/components/video-list/getVideos.js?");

/***/ }),

/***/ "./build/components/video-list/renderVideos.js":
/*!*****************************************************!*\
  !*** ./build/components/video-list/renderVideos.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderVideos\": () => (/* binding */ renderVideos)\n/* harmony export */ });\n/* harmony import */ var _lib_elementsOfClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/elementsOfClass */ \"./build/lib/elementsOfClass.js\");\n/* harmony import */ var _lib_getTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/getTemplate */ \"./build/lib/getTemplate.js\");\n\n\n/**\n * renders video elements\n * @param {[Video]} videos\n */\n\nfunction renderVideos(videos) {\n  var template = (0,_lib_getTemplate__WEBPACK_IMPORTED_MODULE_1__.getTemplate)(\"video\");\n  var container = document.getElementById(\"video-list-container\"); //remove any existing elements\n\n  (0,_lib_elementsOfClass__WEBPACK_IMPORTED_MODULE_0__.elementsOfClass)(\"video\").forEach(function (element) {\n    return element.remove();\n  });\n  videos.forEach(function (video) {\n    var element = template.cloneNode(true);\n    element.querySelector(\".video-name\").innerHTML = video.name; // TO:DO create function for following listeners\n    // element.querySelector(\".video-add\")\n    //     .addEventListener(\"click\",()=>addVideo(video.uuid))\n    // element.querySelector(\".video-remove\")\n    //     .addEventListener(\"click\",()=>removeVideo(video.uuid))\n\n    container.append(element);\n  });\n}\n\n//# sourceURL=webpack://my-webpack-project/./build/components/video-list/renderVideos.js?");

/***/ }),

/***/ "./build/components/video-upload/uploadVideo.js":
/*!******************************************************!*\
  !*** ./build/components/video-upload/uploadVideo.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"uploadVideo\": () => (/* binding */ uploadVideo)\n/* harmony export */ });\nfunction uploadVideo() {\n  var fileSelector = document.getElementById(\"video-upload-input\");\n\n  if (fileSelector.files.length == 0) {//TO:DO code to warn user of error\n  } else {\n    var file = fileSelector.files[0];\n\n    if (file.type !== \"video/mp4\") {//TO:DO error\n    } else {\n      fetch(\"/video/\".concat(file.name), {\n        method: \"PUT\",\n        body: file\n      }).then(function (response) {\n        return response.json();\n      }).then(console.log);\n    }\n  }\n}\n\n//# sourceURL=webpack://my-webpack-project/./build/components/video-upload/uploadVideo.js?");

/***/ }),

/***/ "./build/index.js":
/*!************************!*\
  !*** ./build/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_video_upload_uploadVideo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/video-upload/uploadVideo */ \"./build/components/video-upload/uploadVideo.js\");\n/* harmony import */ var _components_video_list_getVideos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/video-list/getVideos */ \"./build/components/video-list/getVideos.js\");\n/* harmony import */ var _components_video_list_renderVideos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/video-list/renderVideos */ \"./build/components/video-list/renderVideos.js\");\n/* harmony import */ var _components_tab_container_createScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tab-container/createScreen */ \"./build/components/tab-container/createScreen.js\");\n\n\n\n\nwindow.selectedScreen = null;\nwindow.videoData = [];\nwindow.screens = [];\n\nfunction onSave() {} //assign event listeners once DOM has loaded.\n\n\nwindow.onload = function () {\n  document.getElementById(\"video-upload-button\").addEventListener(\"click\", _components_video_upload_uploadVideo__WEBPACK_IMPORTED_MODULE_0__.uploadVideo);\n  window.videoData = (0,_components_video_list_getVideos__WEBPACK_IMPORTED_MODULE_1__.getVideos)();\n  (0,_components_video_list_renderVideos__WEBPACK_IMPORTED_MODULE_2__.renderVideos)(window.videoData);\n  document.getElementById(\"add-screen\").addEventListener(\"click\", _components_tab_container_createScreen__WEBPACK_IMPORTED_MODULE_3__.createScreen);\n};\n\n//# sourceURL=webpack://my-webpack-project/./build/index.js?");

/***/ }),

/***/ "./build/lib/elementsOfClass.js":
/*!**************************************!*\
  !*** ./build/lib/elementsOfClass.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"elementsOfClass\": () => (/* binding */ elementsOfClass)\n/* harmony export */ });\n/**\n * returns an Array of all elements of the class ,\n * removing any that contain \"template\" as a co-class\n * @param {string} className class to find\n * @returns {Element[]}\n */\nfunction elementsOfClass(className) {\n  var elements = Array.from(document.getElementsByClassName(className)).filter(function (element) {\n    return !element.classList.contains(\"template\");\n  });\n  if (elements.length === 0) console.log(\"no elements of class\\\"\".concat(className, \"\\\"\"));\n  return elements;\n}\n\n//# sourceURL=webpack://my-webpack-project/./build/lib/elementsOfClass.js?");

/***/ }),

/***/ "./build/lib/getTemplate.js":
/*!**********************************!*\
  !*** ./build/lib/getTemplate.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTemplate\": () => (/* binding */ getTemplate)\n/* harmony export */ });\n/**\n * returns the template div for the class\n * @param {string} className\n * @returns {HTMLElement}\n */\nfunction getTemplate(className) {\n  var elements = document.getElementsByClassName(className);\n  if (elements.length === 0) throw \"no elements found of class \\\"\".concat(className, \"\\\"\");\n  var templates = Array.from(elements).filter(function (e) {\n    return e.classList.contains(\"template\");\n  });\n  if (templates.length === 0) throw \"no template for class \".concat(className);else if (templates.length > 1) throw \"multiple templates for \".concat(className);else {\n    var newElement = elements[0].cloneNode(true);\n    newElement.classList.remove(\"template\");\n    return newElement;\n  }\n  ;\n}\n\n//# sourceURL=webpack://my-webpack-project/./build/lib/getTemplate.js?");

/***/ }),

/***/ "./build/lib/onScreenChange.js":
/*!*************************************!*\
  !*** ./build/lib/onScreenChange.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"onScreenChange\": () => (/* binding */ onScreenChange)\n/* harmony export */ });\n/* harmony import */ var _elementsOfClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementsOfClass */ \"./build/lib/elementsOfClass.js\");\n\nfunction onScreenChange(newScreenNumber) {\n  window.selectedScreen = newScreenNumber;\n  console.log(\"screen number \".concat(newScreenNumber, \" clicked.\"));\n  var tabs = (0,_elementsOfClass__WEBPACK_IMPORTED_MODULE_0__.elementsOfClass)(\"tab\");\n  console.log(tabs);\n  tabs.forEach(function (element, index) {\n    if (index === newScreenNumber - 1) {\n      console.log(index + \" selected\");\n      element.classList.add(\"selected\");\n    } else {\n      console.log(index + \" unselected\");\n      element.classList.remove(\"selected\");\n    }\n  });\n}\n\n//# sourceURL=webpack://my-webpack-project/./build/lib/onScreenChange.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./build/index.js");
/******/ 	
/******/ })()
;