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

/***/ "./client/src/index.ts":
/*!*****************************!*\
  !*** ./client/src/index.ts ***!
  \*****************************/
/***/ (() => {

eval("\nfetch(\"video.json\")\n    .then(res => res.json())\n    .then(object => {\n    var _a;\n    const videoElement = document.getElementById(\"video\");\n    if (videoElement === null)\n        return;\n    videoElement.src = \"data:video/mp4;base64,\" + object.video;\n    document.body.appendChild(videoElement);\n    (_a = document.getElementById(\"loading\")) === null || _a === void 0 ? void 0 : _a.remove();\n});\n\n\n//# sourceURL=webpack://bson-experiment/./client/src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./client/src/index.ts"]();
/******/ 	
/******/ })()
;