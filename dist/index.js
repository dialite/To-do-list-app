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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  font-family: Arial, Helvetica, sans-serif;\\r\\n}\\r\\n\\r\\n.to-do-container {\\r\\n  width: 60%;\\r\\n  border-radius: 2px;\\r\\n  border: solid black 1px;\\r\\n  font-size: 32px;\\r\\n  box-shadow: 5px 5px 5px 5px rgb(207, 205, 205);\\r\\n  margin-top: 6%;\\r\\n}\\r\\n\\r\\n.to-do-container > * {\\r\\n  border-bottom: solid 1px black;\\r\\n  padding-left: 24px;\\r\\n  padding-right: 24px;\\r\\n  padding-top: 12px;\\r\\n  padding-bottom: 12px;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.title img {\\r\\n  width: 14px;\\r\\n  height: 14px;\\r\\n}\\r\\n\\r\\n.text-input {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.text-input input {\\r\\n  border: none;\\r\\n  font-style: italic;\\r\\n  font-size: 18px;\\r\\n  width: 80%;\\r\\n}\\r\\n\\r\\n.text-input input:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.text-input img {\\r\\n  width: 14px;\\r\\n  height: 14px;\\r\\n}\\r\\n\\r\\n.tasks {\\r\\n  padding-left: 0;\\r\\n  padding-right: 0;\\r\\n  padding-top: 0;\\r\\n  padding-bottom: 0;\\r\\n  border-bottom: 0;\\r\\n}\\r\\n\\r\\n.tasks > * {\\r\\n  border-bottom: 1px solid black;\\r\\n  padding-left: 24px;\\r\\n  padding-right: 24px;\\r\\n  padding-top: 12px;\\r\\n  padding-bottom: 12px;\\r\\n  font-size: 18px;\\r\\n}\\r\\n\\r\\n.tasks-item {\\r\\n  display: flex;\\r\\n  column-gap: 10px;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.tasks-item-start {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  column-gap: 10px;\\r\\n}\\r\\n\\r\\n.tasks-item-start p {\\r\\n  display: block;\\r\\n  font-size: 3vw;\\r\\n}\\r\\n\\r\\n.tasks-item-start p.active {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.edit_text {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.edit_text.active {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.removeicon {\\r\\n  display: none;\\r\\n  width: 14px;\\r\\n  height: 14px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.removeicon.active {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.checkboxicon {\\r\\n  height: 14px;\\r\\n  width: 14px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.edit_icon {\\r\\n  height: 14px;\\r\\n  width: 14px;\\r\\n  display: block;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.edit_icon.active {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.clearbutton {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  font-size: 24px;\\r\\n  color: gray;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/check.js":
/*!**********************!*\
  !*** ./src/check.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ check)\n/* harmony export */ });\nclass check {\n  checked(taskarr, index) {\n    this.taskarr = taskarr;\n    this.taskarr[index - 1].completed = true;\n  }\n\n  uncheked(taskarr, index) {\n    this.taskarr = taskarr;\n    this.taskarr[index - 1].completed = false;\n  }\n}\n\n//# sourceURL=webpack://to-do-list/./src/check.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _edit_icon_img_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit_icon_img.png */ \"./src/edit_icon_img.png\");\n/* harmony import */ var _refresh_icon_img_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./refresh_icon_img.png */ \"./src/refresh_icon_img.png\");\n/* harmony import */ var _enter_icon_img_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enter_icon_img.png */ \"./src/enter_icon_img.png\");\n/* harmony import */ var _list_functions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list_functions.js */ \"./src/list_functions.js\");\n/* harmony import */ var _erase_icon_img_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./erase_icon_img.png */ \"./src/erase_icon_img.png\");\n/* harmony import */ var _check_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./check.js */ \"./src/check.js\");\n\n\n\n\n\n\n\n\nconst refrescontainer = document.querySelector('.title img');\nconst entercontainer = document.querySelector('.text-input img');\nconst taskcontainer = document.querySelector('.tasks');\nconst inputtext = document.querySelector('.text-input input');\nconst clearcompleted = document.querySelector('.clearbutton');\nconst sessionsaved = JSON.parse(localStorage.getItem('session'));\nconst checkclass = new _check_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\nlet taskarr = [];\n\nconst activebuttons = () => {\n  const editcontainer = document.querySelectorAll('.tasks-item-start p');\n  const editbutton = document.querySelectorAll('.edit_icon');\n  const removeicon = document.querySelectorAll('.removeicon');\n  const editinput = document.querySelectorAll('.edit_text');\n  const completed = document.querySelectorAll('.checkboxicon');\n  editbutton.forEach((element, index) => {\n    element.addEventListener('click', () => {\n      removeicon[index].classList.add('active');\n      editcontainer[index].classList.add('active');\n      editbutton[index].classList.add('active');\n      editinput[index].classList.add('active');\n      editinput[index].addEventListener('keypress', (event) => {\n        if (event.key === 'Enter' && editinput[index].value !== '') {\n          _list_functions_js__WEBPACK_IMPORTED_MODULE_4__.edit(editinput[index].value, taskarr, index);\n          localStorage.setItem('session', JSON.stringify(taskarr));\n          editcontainer[index].textContent = taskarr[index].description;\n          editcontainer[index].classList.remove('active');\n          editinput[index].classList.remove('active');\n          editbutton[index].classList.remove('active');\n          removeicon[index].classList.remove('active');\n        }\n      });\n    });\n  });\n  removeicon.forEach((element, index) => {\n    element.addEventListener('click', () => {\n      _list_functions_js__WEBPACK_IMPORTED_MODULE_4__.erase(taskarr, removeicon[index].parentElement.id);\n      localStorage.setItem('session', JSON.stringify(taskarr));\n      removeicon[index].parentElement.remove();\n      const tasks = document.querySelectorAll('.tasks-item');\n      tasks.forEach((element, index) => { element.id = taskarr[index].index; });\n    });\n  });\n  completed.forEach((element, index) => {\n    element.addEventListener('change', () => {\n      if (element.checked === true) {\n        checkclass.checked(taskarr, completed[index].parentElement.parentElement.id);\n        localStorage.setItem('session', JSON.stringify(taskarr));\n      } else {\n        checkclass.uncheked(taskarr, completed[index].parentElement.parentElement.id);\n        localStorage.setItem('session', JSON.stringify(taskarr));\n      }\n    });\n  });\n};\n\nconst storagedtasks = () => {\n  taskarr.forEach((element) => {\n    if (element.completed === false) {\n      taskcontainer.innerHTML += `<div class=\"tasks-item\" id=\"${element.index}\">\n<div class=\"tasks-item-start\"><input type=\"checkbox\" class=\"checkboxicon\">\n<p>${element.description}</p>\n<input class=\"edit_text\" type=\"text\" placeholder=\"Edit Task\">\n</div>\n<img class=\"edit_icon\" src=\"${_edit_icon_img_png__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"edit icon\">\n<img class=\"removeicon\" src=\"${_erase_icon_img_png__WEBPACK_IMPORTED_MODULE_5__}\" alt=\"remove icon\">\n</div>`;\n    } else {\n      taskcontainer.innerHTML += `<div class=\"tasks-item\" id=\"${element.index}\">\n  <div class=\"tasks-item-start\"><input type=\"checkbox\" class=\"checkboxicon\" checked>\n  <p>${element.description}</p>\n  <input class=\"edit_text\" type=\"text\" placeholder=\"Edit Task\">\n  </div>\n  <img class=\"edit_icon\" src=\"${_edit_icon_img_png__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"edit icon\">\n  <img class=\"removeicon\" src=\"${_erase_icon_img_png__WEBPACK_IMPORTED_MODULE_5__}\" alt=\"remove icon\">\n  </div>`;\n    }\n  });\n};\n\nif (sessionsaved !== null) {\n  taskarr = sessionsaved;\n  storagedtasks();\n  activebuttons();\n}\n\ninputtext.addEventListener('keypress', (event) => {\n  if (event.key === 'Enter' && inputtext.value !== '') {\n    _list_functions_js__WEBPACK_IMPORTED_MODULE_4__.add(inputtext.value, taskarr);\n    inputtext.value = '';\n    localStorage.setItem('session', JSON.stringify(taskarr));\n    taskcontainer.innerHTML += `<div class=\"tasks-item\" id=\"${taskarr[taskarr.length - 1].index}\">\n<div class=\"tasks-item-start\"><input type=\"checkbox\" class=\"checkboxicon\">\n<p>${taskarr[taskarr.length - 1].description}</p>\n<input class=\"edit_text\" type=\"text\" placeholder=\"Edit Task\">\n</div>\n<img class=\"edit_icon\" src=\"${_edit_icon_img_png__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"edit icon\">\n<img class=\"removeicon\" src=\"${_erase_icon_img_png__WEBPACK_IMPORTED_MODULE_5__}\" alt=\"remove icon\">\n</div>`;\n    activebuttons();\n  }\n});\n\nclearcompleted.addEventListener('click', () => {\n  const taskschekbox = document.querySelectorAll('.checkboxicon');\n  taskschekbox.forEach((element) => {\n    if (element.checked === true) {\n      element.parentElement.parentElement.remove();\n    }\n  });\n  taskarr = _list_functions_js__WEBPACK_IMPORTED_MODULE_4__.clear(taskarr);\n  localStorage.setItem('session', JSON.stringify(taskarr));\n  const tasks = document.querySelectorAll('.tasks-item');\n  tasks.forEach((element, index) => { element.id = taskarr[index].index; });\n});\n\nrefrescontainer.src = _refresh_icon_img_png__WEBPACK_IMPORTED_MODULE_2__;\nentercontainer.src = _enter_icon_img_png__WEBPACK_IMPORTED_MODULE_3__;\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/list_functions.js":
/*!*******************************!*\
  !*** ./src/list_functions.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": () => (/* binding */ add),\n/* harmony export */   \"clear\": () => (/* binding */ clear),\n/* harmony export */   \"edit\": () => (/* binding */ edit),\n/* harmony export */   \"erase\": () => (/* binding */ erase)\n/* harmony export */ });\nconst add = (inputtext, taskarr) => {\n  const len = taskarr.length;\n  taskarr.push({\n    description: inputtext,\n    completed: false,\n    index: len + 1,\n  });\n};\n\nconst edit = (editinput, taskarr, id) => {\n  taskarr[id].description = editinput;\n};\n\nconst erase = (taskarr, id) => {\n  taskarr.splice(id - 1, 1);\n  taskarr.forEach((element, index) => {\n    element.index = index + 1;\n  });\n};\nconst clear = (taskarr) => {\n  taskarr = taskarr.filter((element) => element.completed !== true);\n  taskarr.forEach((element, index) => {\n    element.index = index + 1;\n  });\n  return taskarr;\n};\n\n\n//# sourceURL=webpack://to-do-list/./src/list_functions.js?");

/***/ }),

/***/ "./src/edit_icon_img.png":
/*!*******************************!*\
  !*** ./src/edit_icon_img.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9ab346c5dcf7a1216630.png\";\n\n//# sourceURL=webpack://to-do-list/./src/edit_icon_img.png?");

/***/ }),

/***/ "./src/enter_icon_img.png":
/*!********************************!*\
  !*** ./src/enter_icon_img.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"67b4d2c7b1cc840d5edb.png\";\n\n//# sourceURL=webpack://to-do-list/./src/enter_icon_img.png?");

/***/ }),

/***/ "./src/erase_icon_img.png":
/*!********************************!*\
  !*** ./src/erase_icon_img.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3c9af4d5694cd6ae6743.png\";\n\n//# sourceURL=webpack://to-do-list/./src/erase_icon_img.png?");

/***/ }),

/***/ "./src/refresh_icon_img.png":
/*!**********************************!*\
  !*** ./src/refresh_icon_img.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"027e7d90e2301d39d661.png\";\n\n//# sourceURL=webpack://to-do-list/./src/refresh_icon_img.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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