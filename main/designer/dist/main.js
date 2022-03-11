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

/***/ "./build/components/sections-container/addSection.js":
/*!***********************************************************!*\
  !*** ./build/components/sections-container/addSection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addSection\": () => (/* binding */ addSection)\n/* harmony export */ });\n/* harmony import */ var _lib_getTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/getTemplate */ \"./build/lib/getTemplate.js\");\n\nfunction addSection(section) {\n  var template = (0,_lib_getTemplate__WEBPACK_IMPORTED_MODULE_0__.getTemplate)(\"section\");\n  var video = window.videoData.find(function (video) {\n    return video.uuid == section.uuid;\n  });\n  if (!video) throw \"video is not part of video\"; //TO:DO download video to computer\n\n  var lengthInput = template.querySelector(\".length-input\");\n  var startInput = template.querySelector(\".start-input\"); //set video name text\n\n  template.querySelector(\".video-name\").textContent = section.src; //set values\n\n  lengthInput.value = String(section.duration);\n  startInput.value = String(section.start); //set bounds\n\n  startInput.max = String(video.duration);\n  startInput.min = String(0);\n  lengthInput.max = String(video.duration);\n  lengthInput.min = String(0); //set event listeners\n\n  lengthInput.addEventListener(\"input\", function () {\n    var num = Number(lengthInput.value);\n    if (num !== NaN) section.duration = num;else console.error(\"duration input NaN\", lengthInput.value);\n  });\n  startInput.addEventListener(\"input\", function () {\n    var num = Number(startInput.value);\n\n    if (num !== NaN) {\n      section.start = num;\n      var lengthMax = video.duration - num;\n      lengthInput.max = String(lengthMax); //adjust duration if duration overruns video\n\n      if (section.duration > lengthMax) {\n        section.duration = lengthMax;\n        lengthInput.value = String(lengthMax);\n      }\n    } else return console.error(\"start input NaN\", startInput.value);\n  });\n  return template;\n}\n\n//# sourceURL=webpack://my-webpack-project/./build/components/sections-container/addSection.js?");

/***/ }),

/***/ "./build/components/sections-container/newSection.js":
/*!***********************************************************!*\
  !*** ./build/components/sections-container/newSection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newSection\": () => (/* binding */ newSection)\n/* harmony export */ });\n//creates new blank section from video by default videos entire length\nfunction newSection(video) {\n  return {\n    src: video.name,\n    duration: video.duration,\n    uuid: video.uuid,\n    start: 0\n  };\n}\n\n//# sourceURL=webpack://my-webpack-project/./build/components/sections-container/newSection.js?");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderVideos\": () => (/* binding */ renderVideos)\n/* harmony export */ });\n/* harmony import */ var _lib_elementsOfClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/elementsOfClass */ \"./build/lib/elementsOfClass.js\");\n/* harmony import */ var _lib_getTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/getTemplate */ \"./build/lib/getTemplate.js\");\n/* harmony import */ var _sections_container_addSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sections-container/addSection */ \"./build/components/sections-container/addSection.js\");\n/* harmony import */ var _sections_container_newSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sections-container/newSection */ \"./build/components/sections-container/newSection.js\");\n\n\n\n\n/**\n * renders video elements\n * @param {[Video]} videos\n */\n\nfunction renderVideos(videos) {\n  var template = (0,_lib_getTemplate__WEBPACK_IMPORTED_MODULE_1__.getTemplate)(\"video\");\n  var container = document.getElementById(\"video-list-container\"); //remove any existing elements\n\n  (0,_lib_elementsOfClass__WEBPACK_IMPORTED_MODULE_0__.elementsOfClass)(\"video\").forEach(function (element) {\n    return element.remove();\n  });\n  videos.forEach(function (video) {\n    var element = template.cloneNode(true);\n    element.querySelector(\".video-name\").innerHTML = video.name; // TO:DO create function for following listeners\n\n    element.querySelector(\".video-add\").addEventListener(\"click\", function () {\n      var section = (0,_sections_container_newSection__WEBPACK_IMPORTED_MODULE_3__.newSection)(video);\n      console.log(window.screens, window.selectedScreen - 1);\n      window.screens[window.selectedScreen - 1].content.push(section);\n      var sectionContainer = document.querySelector(\"#sections-container\");\n      sectionContainer.appendChild((0,_sections_container_addSection__WEBPACK_IMPORTED_MODULE_2__.addSection)(section));\n    }); // element.querySelector(\".video-remove\")\n    //     .addEventListener(\"click\",()=>removeVideo(video.uuid))\n\n    container.append(element);\n  });\n}\n\n//# sourceURL=webpack://my-webpack-project/./build/components/video-list/renderVideos.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_video_upload_uploadVideo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/video-upload/uploadVideo */ \"./build/components/video-upload/uploadVideo.js\");\n/* harmony import */ var _components_video_list_getVideos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/video-list/getVideos */ \"./build/components/video-list/getVideos.js\");\n/* harmony import */ var _components_video_list_renderVideos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/video-list/renderVideos */ \"./build/components/video-list/renderVideos.js\");\n/* harmony import */ var _components_tab_container_createScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tab-container/createScreen */ \"./build/components/tab-container/createScreen.js\");\n/* harmony import */ var _components_sections_container_newSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sections-container/newSection */ \"./build/components/sections-container/newSection.js\");\n/* harmony import */ var _types_VideoState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types/VideoState */ \"./build/types/VideoState.js\");\n/* harmony import */ var _lib_stopwatch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/stopwatch */ \"./build/lib/stopwatch.js\");\n/* harmony import */ var _types_ObjectURLMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types/ObjectURLMap */ \"./build/types/ObjectURLMap.js\");\n/* harmony import */ var _lib_videoFunctions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/videoFunctions */ \"./build/lib/videoFunctions.js\");\n\n\n\n\n\n\n\n\n\nwindow.selectedScreen = null;\nwindow.videoData = [];\nwindow.screens = [];\nwindow.videoState = _types_VideoState__WEBPACK_IMPORTED_MODULE_5__.VideoState.notLoaded;\nwindow.displayTime = new _lib_stopwatch__WEBPACK_IMPORTED_MODULE_6__.Stopwatch();\nwindow.objectURLMap = new _types_ObjectURLMap__WEBPACK_IMPORTED_MODULE_7__.ObjectURLMap();\n\nfunction onSave() {} //assign event listeners once DOM has loaded.\n\n\nwindow.addEventListener(\"load\", function () {\n  document.getElementById(\"video-upload-button\").addEventListener(\"click\", _components_video_upload_uploadVideo__WEBPACK_IMPORTED_MODULE_0__.uploadVideo);\n  window.videoData = (0,_components_video_list_getVideos__WEBPACK_IMPORTED_MODULE_1__.getVideos)();\n  (0,_components_video_list_renderVideos__WEBPACK_IMPORTED_MODULE_2__.renderVideos)(window.videoData);\n  document.getElementById(\"add-screen\").addEventListener(\"click\", _components_tab_container_createScreen__WEBPACK_IMPORTED_MODULE_3__.createScreen);\n  document.getElementById(\"display-play\").addEventListener(\"click\", _lib_videoFunctions__WEBPACK_IMPORTED_MODULE_8__.playVideo);\n  document.getElementById(\"display-pause\").addEventListener(\"click\", _lib_videoFunctions__WEBPACK_IMPORTED_MODULE_8__.pauseVideo);\n  console.log(\"loaded\");\n  window.exampleSection = (0,_components_sections_container_newSection__WEBPACK_IMPORTED_MODULE_4__.newSection)(window.videoData[0]);\n});\n\n//# sourceURL=webpack://my-webpack-project/./build/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"onScreenChange\": () => (/* binding */ onScreenChange)\n/* harmony export */ });\n/* harmony import */ var _components_sections_container_addSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/sections-container/addSection */ \"./build/components/sections-container/addSection.js\");\n/* harmony import */ var _elementsOfClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elementsOfClass */ \"./build/lib/elementsOfClass.js\");\n/* harmony import */ var _videoFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./videoFunctions */ \"./build/lib/videoFunctions.js\");\n\n\n\nfunction onScreenChange(newScreenNumber) {\n  window.selectedScreen = newScreenNumber;\n  console.log(\"screen number \".concat(newScreenNumber, \" clicked.\"));\n  var tabs = (0,_elementsOfClass__WEBPACK_IMPORTED_MODULE_1__.elementsOfClass)(\"tab\");\n  console.log(tabs);\n  tabs.forEach(function (element, index) {\n    if (index === newScreenNumber - 1) {\n      console.log(\"\".concat(index, \" selected\"));\n      element.classList.add(\"selected\");\n    } else {\n      console.log(\"\".concat(index, \" unselected\"));\n      element.classList.remove(\"selected\");\n    }\n  });\n  var sectionContainer = document.getElementById(\"sections-container\"); //if the element is not a template, removes it.\n\n  (0,_elementsOfClass__WEBPACK_IMPORTED_MODULE_1__.elementsOfClass)(\"section\").forEach(function (element) {\n    if (!element.classList.contains(\"template\")) element.remove();\n  });\n  window.screens[window.selectedScreen - 1].content.forEach(function (section) {\n    sectionContainer.appendChild((0,_components_sections_container_addSection__WEBPACK_IMPORTED_MODULE_0__.addSection)(section));\n  });\n  (0,_videoFunctions__WEBPACK_IMPORTED_MODULE_2__.videoScreenChange)();\n}\n\n//# sourceURL=webpack://my-webpack-project/./build/lib/onScreenChange.js?");

/***/ }),

/***/ "./build/lib/stopwatch.js":
/*!********************************!*\
  !*** ./build/lib/stopwatch.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Stopwatch\": () => (/* binding */ Stopwatch)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar State;\n\n(function (State) {\n  State[State[\"stopped\"] = 0] = \"stopped\";\n  State[State[\"playing\"] = 1] = \"playing\";\n})(State || (State = {}));\n\nvar Stopwatch = /*#__PURE__*/function () {\n  function Stopwatch() {\n    var _this = this;\n\n    _classCallCheck(this, Stopwatch);\n\n    this.timeElapsed = 0;\n    this.state = State.stopped;\n    this.time = {\n      // (((new Date()).getTime() - this.lastStart) + this.timeElapsed) is milliseccond time if playing\n      seconds: function seconds() {\n        return _this.time.milliseconds() / 1000;\n      },\n      minutesAndSeconds: function minutesAndSeconds() {\n        var milliseconds = _this.time.milliseconds();\n\n        var minutes = Math.floor(milliseconds / 1000 / 60);\n        return {\n          minutes: minutes,\n          seconds: milliseconds / 1000 - minutes * 60\n        };\n      },\n      milliseconds: function milliseconds() {\n        if (_this.state == State.playing) {\n          return new Date().getTime() - _this.lastStart + _this.timeElapsed;\n        } else {\n          return _this.timeElapsed;\n        }\n      }\n    };\n  }\n\n  _createClass(Stopwatch, [{\n    key: \"play\",\n    value: function play() {\n      if (this.state == State.stopped) {\n        this.lastStart = new Date().getTime();\n        this.state = State.playing;\n      }\n    }\n  }, {\n    key: \"pause\",\n    value: function pause() {\n      if (this.state == State.playing) {\n        this.timeElapsed += new Date().getTime() - this.lastStart;\n        this.state = State.stopped;\n      }\n    }\n  }]);\n\n  return Stopwatch;\n}();\n\n//# sourceURL=webpack://my-webpack-project/./build/lib/stopwatch.js?");

/***/ }),

/***/ "./build/lib/videoFunctions.js":
/*!*************************************!*\
  !*** ./build/lib/videoFunctions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"playVideo\": () => (/* binding */ playVideo),\n/* harmony export */   \"startVideo\": () => (/* binding */ startVideo),\n/* harmony export */   \"pauseVideo\": () => (/* binding */ pauseVideo),\n/* harmony export */   \"videoScreenChange\": () => (/* binding */ videoScreenChange)\n/* harmony export */ });\n/* harmony import */ var _types_VideoState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/VideoState */ \"./build/types/VideoState.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\nvar timeInterval;\nvar time = 0;\nvar screenBounds;\nvar screenCurrentSection = 0;\nvar videoDiv;\nwindow.addEventListener(\"load\", function () {\n  videoDiv = document.getElementById(\"screen-video\");\n  if (videoDiv == undefined) throw \"videodiv not not found\";\n});\nfunction playVideo() {\n  if (window.videoState == _types_VideoState__WEBPACK_IMPORTED_MODULE_0__.VideoState.notLoaded) {\n    startVideo();\n  } else if (window.videoState == _types_VideoState__WEBPACK_IMPORTED_MODULE_0__.VideoState.paused) {\n    timeInterval = setInterval(onTick, 1000);\n    videoDiv.play();\n  }\n}\nfunction startVideo() {\n  if (window.screens.length == 0) {\n    //TO:DO proper error message\n    console.log(\"no screens yet\");\n    return;\n  }\n\n  if (window.screens[window.selectedScreen - 1].content.length = 0) {\n    console.log(\"no sections in sreen yet\");\n    return;\n  }\n\n  time = 0;\n\n  if (window.videoState === _types_VideoState__WEBPACK_IMPORTED_MODULE_0__.VideoState.notLoaded) {\n    //TO:DO loading message\n    window.objectURLMap.load(window.videoData);\n    screenBounds = getBounds(window.screens[window.selectedScreen - 1]);\n    var firstVideo = findFirstVideo(window.screens[window.selectedScreen - 1]);\n    if (!firstVideo) throw \"firstVideo is not defined\";\n    videoDiv.src = window.objectURLMap.get(firstVideo);\n    videoDiv.play();\n    window.videoState = _types_VideoState__WEBPACK_IMPORTED_MODULE_0__.VideoState.playing;\n  } else console.log(\"video is already playing\");\n}\nfunction pauseVideo() {\n  //stopgap to stop errors involving decimal times with the tick code\n  clearInterval(timeInterval);\n  videoDiv.pause();\n  videoDiv.currentTime = time;\n  window.videoState = _types_VideoState__WEBPACK_IMPORTED_MODULE_0__.VideoState.paused;\n}\nfunction videoScreenChange() {\n  if (window.screens[window.selectedScreen - 1].content.length > 0) {\n    videoDiv.pause();\n    clearInterval(timeInterval);\n    screenBounds = getBounds(window.screens[window.selectedScreen - 1]); //skip too section in display\n\n    var place = findPlace(window.screens[window.selectedScreen - 1], time);\n    videoDiv.src = window.objectURLMap.get(place.video);\n    videoDiv.currentTime = place.start;\n    if (window.videoState = _types_VideoState__WEBPACK_IMPORTED_MODULE_0__.VideoState.playing) videoDiv.play();\n    timeInterval = setInterval(onTick, 1000);\n  }\n}\n\nfunction onTick() {\n  //in case more fine tuned time algorithm is used.\n  var eq = function eq(a, b) {\n    return Math.abs(a - b) < 0.5;\n  };\n\n  console.log(screenBounds);\n\n  if (eq(screenBounds[screenCurrentSection].value, time)) {\n    videoDiv.src = window.objectURLMap.get(screenBounds[screenCurrentSection].next);\n    var currentSection = window.screens[window.selectedScreen - 1].content[screenCurrentSection];\n    videoDiv.currentTime = currentSection.start;\n    screenCurrentSection++;\n  }\n} //when numbers are reached , skip to next section\n\n\nfunction getBounds(screen) {\n  console.log(\"screen\", screen, screen.content.length == 0);\n  var bounds = [];\n  var timeSum = 0;\n\n  var _loop = function _loop(i) {\n    console.log(screen);\n    console.log(\"loop\");\n    timeSum += screen.content[i].duration;\n    var nextSection = void 0,\n        nextVideo = void 0;\n\n    if (i + 1 < screen.content.length) {\n      nextSection = screen.content[i + 1];\n      nextVideo = window.videoData.find(function (video) {\n        return nextSection.uuid == video.uuid;\n      });\n      if (nextVideo = undefined) throw \"next video not found\";else bounds.push({\n        value: timeSum,\n        next: nextVideo\n      });\n    } else bounds.push(null);\n  };\n\n  for (var i = 0; i < screen.content.length; i++) {\n    _loop(i);\n  }\n\n  return bounds;\n}\n\nfunction findFirstVideo(screen) {\n  if (screen.content.length > 0) {\n    var firstVideo = window.videoData.find(function (video) {\n      return video.uuid == screen.content[0].uuid;\n    });\n    if (!firstVideo) throw \"firstVideo is undefined\";\n    return firstVideo;\n  } else {\n    return undefined;\n  }\n}\n\nfunction loop() {}\n\nfunction findPlace(screen, time) {\n  var timeSum = 0;\n\n  var _iterator = _createForOfIteratorHelper(screen.content),\n      _step;\n\n  try {\n    var _loop2 = function _loop2() {\n      var section = _step.value;\n      timeSum += section.duration;\n\n      if (timeSum > time) {\n        var video = window.videoData.find(function (video) {\n          return section.uuid == video.uuid;\n        });\n        var videoStartPlace = timeSum - section.duration;\n        if (video) return {\n          v: {\n            video: video,\n            start: section.start + (time - videoStartPlace)\n          }\n        };else throw \"video not found by uuid\";\n      } else throw \"out of video bounds\";\n    };\n\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var _ret = _loop2();\n\n      if (_typeof(_ret) === \"object\") return _ret.v;\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\n\n//# sourceURL=webpack://my-webpack-project/./build/lib/videoFunctions.js?");

/***/ }),

/***/ "./build/types/ObjectURLMap.js":
/*!*************************************!*\
  !*** ./build/types/ObjectURLMap.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ObjectURLMap\": () => (/* binding */ ObjectURLMap)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ObjectURLMap = /*#__PURE__*/function () {\n  function ObjectURLMap() {\n    _classCallCheck(this, ObjectURLMap);\n\n    this.map = {};\n  }\n\n  _createClass(ObjectURLMap, [{\n    key: \"load\",\n    value: function load(videos) {\n      videos.forEach(this.get);\n    }\n  }, {\n    key: \"get\",\n    value: function get(video) {\n      if (this.map[video.uuid]) {\n        return this.map[video.uuid];\n      } else {\n        if (window.videoData.find(function (e) {\n          return e.uuid === video.uuid;\n        })) {\n          var request = new XMLHttpRequest();\n          request.open(\"GET\", \"/video/\" + video.name, false);\n          request.send();\n\n          if (request.response instanceof Blob) {\n            var objectURL = URL.createObjectURL(request.response);\n            this.map[video.uuid] = objectURL;\n            return objectURL;\n          } else {\n            throw \"request response is not blob\";\n          }\n        } else {\n          throw \"video not found in videodata\";\n        }\n\n        ;\n      }\n    }\n  }]);\n\n  return ObjectURLMap;\n}();\n\n//# sourceURL=webpack://my-webpack-project/./build/types/ObjectURLMap.js?");

/***/ }),

/***/ "./build/types/VideoState.js":
/*!***********************************!*\
  !*** ./build/types/VideoState.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"VideoState\": () => (/* binding */ VideoState)\n/* harmony export */ });\nvar VideoState;\n\n(function (VideoState) {\n  VideoState[VideoState[\"notLoaded\"] = 0] = \"notLoaded\";\n  VideoState[VideoState[\"playing\"] = 1] = \"playing\";\n  VideoState[VideoState[\"paused\"] = 2] = \"paused\";\n})(VideoState || (VideoState = {}));\n\n//# sourceURL=webpack://my-webpack-project/./build/types/VideoState.js?");

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