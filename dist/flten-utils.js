/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["utils"] = factory();
	else
		root["utils"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/array/chunk.js":
/*!****************************!*\
  !*** ./src/array/chunk.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chunk\": () => (/* binding */ chunk)\n/* harmony export */ });\nfunction chunk(arr,num=1){\r\n\tconst result = [];\r\n\r\n\tif(arr.length === 0){\r\n\t\treturn [];\r\n\t}\r\n\r\n\tfor(let i=0;i<arr.length;i+=num){\r\n\t\tresult.push(arr.slice(i,i+num))\r\n\t}\r\n\r\n\treturn result;\r\n}\n\n//# sourceURL=webpack://utils/./src/array/chunk.js?");

/***/ }),

/***/ "./src/array/delSomeArrayItem.js":
/*!***************************************!*\
  !*** ./src/array/delSomeArrayItem.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"delSomeArrayItem\": () => (/* binding */ delSomeArrayItem)\n/* harmony export */ });\nfunction delSomeArrayItem(arr,...args){\r\n\tif(args.length === 0){\r\n\t\treturn [];\r\n\t}\r\n\r\n\tif(Array.isArray(args)){\r\n\t\targs = args.flat();\r\n\t}\r\n\r\n\tconst result = [];\r\n\r\n\tfor(let i =0;i<arr.length;i++){\r\n\t\tif(args.includes(arr[i])){\r\n\t\t\tresult.push(arr[i]);\r\n\t\t\tarr.splice(i,1);\r\n\t\t\t// 注意自减，避免跳过\r\n\t\t\ti--;\r\n\t\t}\r\n\t}\r\n\r\n\treturn result;\r\n}\n\n//# sourceURL=webpack://utils/./src/array/delSomeArrayItem.js?");

/***/ }),

/***/ "./src/array/different.js":
/*!********************************!*\
  !*** ./src/array/different.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"different\": () => (/* binding */ different)\n/* harmony export */ });\nfunction different(arr1,arr2){\r\n\r\n\tif(arr1.length === 0){\r\n\t\treturn []\r\n\t}\r\n\tif(arr2.length === 0){\r\n\t\treturn arr2.slice();\r\n\t}\r\n\r\n\tconst result = arr1.filter(item => !arr2.includes(item));\r\n\r\n\treturn result;\r\n}\n\n//# sourceURL=webpack://utils/./src/array/different.js?");

/***/ }),

/***/ "./src/array/dropLeftItem.js":
/*!***********************************!*\
  !*** ./src/array/dropLeftItem.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dropLeftItem\": () => (/* binding */ dropLeftItem)\n/* harmony export */ });\nfunction dropLeftItem(arr,num){\r\n\tif(num <= 0) return arr;\r\n\r\n\treturn arr.filter((item,index) => index >= num )\r\n}\n\n//# sourceURL=webpack://utils/./src/array/dropLeftItem.js?");

/***/ }),

/***/ "./src/array/dropRightItem.js":
/*!************************************!*\
  !*** ./src/array/dropRightItem.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dropRightItem\": () => (/* binding */ dropRightItem)\n/* harmony export */ });\nfunction dropRightItem(arr,num){\r\n\tif(num <= 0) return arr;\r\n\r\n\treturn arr.filter((item,index)=> index < arr.length - num )\r\n}\n\n//# sourceURL=webpack://utils/./src/array/dropRightItem.js?");

/***/ }),

/***/ "./src/array/every.js":
/*!****************************!*\
  !*** ./src/array/every.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"every\": () => (/* binding */ every)\n/* harmony export */ });\nfunction every(arr,callback){\r\n for(let i=0;i<arr.length;i++){\r\n  if(!callback(arr[i],i)){\r\n   return false\r\n  }\r\n }\r\n return true;\r\n}\n\n//# sourceURL=webpack://utils/./src/array/every.js?");

/***/ }),

/***/ "./src/array/filter.js":
/*!*****************************!*\
  !*** ./src/array/filter.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filter\": () => (/* binding */ filter)\n/* harmony export */ });\nfunction filter(arr,callback){\r\n\tlet result = [];\r\n\tfor(let i =0;i<arr.length;i++){\r\n\t\tlet res = callback(arr[i],i);\r\n\t\tif(res){\r\n\t\tresult.push(arr[i]);\r\n\t\t}\r\n\t}\r\n\treturn result;\r\n}\n\n//# sourceURL=webpack://utils/./src/array/filter.js?");

/***/ }),

/***/ "./src/array/find.js":
/*!***************************!*\
  !*** ./src/array/find.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"find\": () => (/* binding */ find)\n/* harmony export */ });\nfunction find(arr,callback){\r\n for(let i =0;i<arr.length;i++){\r\n  let res = callback(arr[i],i);\r\n  if(res){\r\n   return arr[i];\r\n  }\r\n }\r\n return undefined\r\n}\n\n//# sourceURL=webpack://utils/./src/array/find.js?");

/***/ }),

/***/ "./src/array/flat.js":
/*!***************************!*\
  !*** ./src/array/flat.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"flat\": () => (/* binding */ flat)\n/* harmony export */ });\nfunction flat(arr){\r\n\tlet result = [...arr];\r\n\twhile(result.some(item => Array.isArray(item))){\r\n\t\tresult = [].concat(...result);\r\n\t}\r\n}\n\n//# sourceURL=webpack://utils/./src/array/flat.js?");

/***/ }),

/***/ "./src/array/map.js":
/*!**************************!*\
  !*** ./src/array/map.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"map\": () => (/* binding */ map)\n/* harmony export */ });\n\r\nfunction map(arr,callback){\r\n\tlet resultArr = [];\r\n\tfor(let i=0;i<arr.length;i++){\r\n\tresultArr.push(callback(arr[i],i));\r\n\t}\r\n\treturn resultArr;\r\n}\n\n//# sourceURL=webpack://utils/./src/array/map.js?");

/***/ }),

/***/ "./src/array/reduce.js":
/*!*****************************!*\
  !*** ./src/array/reduce.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reduce\": () => (/* binding */ reduce)\n/* harmony export */ });\nfunction reduce(arr,callback,initValue){\r\n\tlet result = initValue;\r\n\r\n\tfor(let i=0;i<arr.length;i++){\r\n\tresult = callback(result,arr[i]);\r\n\t}\r\n\r\n\treturn result;\r\n}\n\n//# sourceURL=webpack://utils/./src/array/reduce.js?");

/***/ }),

/***/ "./src/array/slice.js":
/*!****************************!*\
  !*** ./src/array/slice.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slice\": () => (/* binding */ slice)\n/* harmony export */ });\n\r\nfunction slice(arr,begin,end){\r\n\tconst len = arr.length;\r\n\tconst result = [];\r\n\r\n\tif(len === 0){\r\n\t\treturn [];\r\n\t}\r\n\r\n\tbegin = begin || 0;\r\n\tif(begin >= len){\r\n\t\treturn [];\r\n\t}\r\n\r\n\tend = end || len;\r\n\tif(end < begin){\r\n\t\tend = len;\r\n\t}\r\n\r\n\tfor(let i =0;i<len;i++){\r\n\t\tif(i >= begin && i < end){\r\n\t\t\tresult.push(arr[i])\r\n\t\t}\r\n\t}\r\n\treturn result;\r\n}\n\n//# sourceURL=webpack://utils/./src/array/slice.js?");

/***/ }),

/***/ "./src/array/some.js":
/*!***************************!*\
  !*** ./src/array/some.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"some\": () => (/* binding */ some)\n/* harmony export */ });\nfunction some(arr,callback){\r\n for(let i=0;i<arr.length;i++){\r\n  if(callback(arr[i],i)){\r\n   return ture;\r\n  }\r\n }\r\n return false;\r\n}\r\n\n\n//# sourceURL=webpack://utils/./src/array/some.js?");

/***/ }),

/***/ "./src/array/unique.js":
/*!*****************************!*\
  !*** ./src/array/unique.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"unique\": () => (/* binding */ unique)\n/* harmony export */ });\nfunction unique(arr){\r\n return [...new Set(arr)];\r\n}\n\n//# sourceURL=webpack://utils/./src/array/unique.js?");

/***/ }),

/***/ "./src/function/apply.js":
/*!*******************************!*\
  !*** ./src/function/apply.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apply\": () => (/* binding */ apply)\n/* harmony export */ });\nfunction apply(Fn,obj,args){\r\n if(obj === null || obj === undefined){\r\n  obj = globalThis;\r\n }\r\n\r\n obj.tempMethod = Fn;\r\n let result = obj.tempMethod(...args);\r\n delete obj.tempMethod;\r\n return result;\r\n}\n\n//# sourceURL=webpack://utils/./src/function/apply.js?");

/***/ }),

/***/ "./src/function/bind.js":
/*!******************************!*\
  !*** ./src/function/bind.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bind\": () => (/* binding */ bind)\n/* harmony export */ });\n/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call */ \"./src/function/call.js\");\n\r\n\r\nfunction bind(Fn,obj,...args){\r\n return function(...args2){\r\n  return (0,_call__WEBPACK_IMPORTED_MODULE_0__.call)(Fn,obj,...args,...args2);\r\n }\r\n}\n\n//# sourceURL=webpack://utils/./src/function/bind.js?");

/***/ }),

/***/ "./src/function/call.js":
/*!******************************!*\
  !*** ./src/function/call.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"call\": () => (/* binding */ call)\n/* harmony export */ });\nfunction call(Fn,obj,...args){\r\n\r\n if(obj === null || obj === undefined){\r\n  obj = globalThis;\r\n }\r\n \r\n obj.tempMethod = Fn;\r\n let result = obj.tempMethod(...args)\r\n delete obj.tempMethod;\r\n return result;\r\n\r\n}\n\n//# sourceURL=webpack://utils/./src/function/call.js?");

/***/ }),

/***/ "./src/function/debounce.js":
/*!**********************************!*\
  !*** ./src/function/debounce.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"debounce\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(callback,timer){\r\n let timeId = null;\r\n\r\n return function(e){\r\n  if(timeId !== null){\r\n   clearInterval(timeId);\r\n  };\r\n\r\n  timeId = setTimeout(()=>{\r\n   callback.call(this,e);\r\n   timeId = null;\r\n  },timer);\r\n }\r\n}\n\n//# sourceURL=webpack://utils/./src/function/debounce.js?");

/***/ }),

/***/ "./src/function/throttle.js":
/*!**********************************!*\
  !*** ./src/function/throttle.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"throttle\": () => (/* binding */ throttle)\n/* harmony export */ });\nfunction throttle(callback,timer){\r\n let startTime = 0;\r\n return function(e){\r\n  let nowTime = Date.now();\r\n  if(nowTime - startTime >= timer){\r\n   callback.call(this,e);\r\n   startTime = nowTime;\r\n  }\r\n }\r\n}\n\n//# sourceURL=webpack://utils/./src/function/throttle.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chunk\": () => (/* reexport safe */ _array_chunk__WEBPACK_IMPORTED_MODULE_0__.chunk),\n/* harmony export */   \"delSomeArrayItem\": () => (/* reexport safe */ _array_delSomeArrayItem__WEBPACK_IMPORTED_MODULE_1__.delSomeArrayItem),\n/* harmony export */   \"different\": () => (/* reexport safe */ _array_different__WEBPACK_IMPORTED_MODULE_2__.different),\n/* harmony export */   \"dropLeftItem\": () => (/* reexport safe */ _array_dropLeftItem__WEBPACK_IMPORTED_MODULE_3__.dropLeftItem),\n/* harmony export */   \"dropRightItem\": () => (/* reexport safe */ _array_dropRightItem__WEBPACK_IMPORTED_MODULE_4__.dropRightItem),\n/* harmony export */   \"every\": () => (/* reexport safe */ _array_every__WEBPACK_IMPORTED_MODULE_5__.every),\n/* harmony export */   \"filter\": () => (/* reexport safe */ _array_filter__WEBPACK_IMPORTED_MODULE_6__.filter),\n/* harmony export */   \"find\": () => (/* reexport safe */ _array_find__WEBPACK_IMPORTED_MODULE_7__.find),\n/* harmony export */   \"flat\": () => (/* reexport safe */ _array_flat__WEBPACK_IMPORTED_MODULE_8__.flat),\n/* harmony export */   \"map\": () => (/* reexport safe */ _array_map__WEBPACK_IMPORTED_MODULE_9__.map),\n/* harmony export */   \"reduce\": () => (/* reexport safe */ _array_reduce__WEBPACK_IMPORTED_MODULE_10__.reduce),\n/* harmony export */   \"slice\": () => (/* reexport safe */ _array_slice__WEBPACK_IMPORTED_MODULE_11__.slice),\n/* harmony export */   \"some\": () => (/* reexport safe */ _array_some__WEBPACK_IMPORTED_MODULE_12__.some),\n/* harmony export */   \"unique\": () => (/* reexport safe */ _array_unique__WEBPACK_IMPORTED_MODULE_13__.unique),\n/* harmony export */   \"apply\": () => (/* reexport safe */ _function_apply__WEBPACK_IMPORTED_MODULE_14__.apply),\n/* harmony export */   \"bind\": () => (/* reexport safe */ _function_bind__WEBPACK_IMPORTED_MODULE_15__.bind),\n/* harmony export */   \"call\": () => (/* reexport safe */ _function_call__WEBPACK_IMPORTED_MODULE_16__.call),\n/* harmony export */   \"debounce\": () => (/* reexport safe */ _function_debounce__WEBPACK_IMPORTED_MODULE_17__.debounce),\n/* harmony export */   \"throttle\": () => (/* reexport safe */ _function_throttle__WEBPACK_IMPORTED_MODULE_18__.throttle),\n/* harmony export */   \"repeatStr\": () => (/* reexport safe */ _string_repeatStr__WEBPACK_IMPORTED_MODULE_19__.repeatStr),\n/* harmony export */   \"isPlainObject\": () => (/* reexport safe */ _object_isPlainObject__WEBPACK_IMPORTED_MODULE_20__.isPlainObject),\n/* harmony export */   \"shallowEqual\": () => (/* reexport safe */ _object_shallowEqual__WEBPACK_IMPORTED_MODULE_21__.shallowEqual)\n/* harmony export */ });\n/* harmony import */ var _array_chunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array/chunk */ \"./src/array/chunk.js\");\n/* harmony import */ var _array_delSomeArrayItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array/delSomeArrayItem */ \"./src/array/delSomeArrayItem.js\");\n/* harmony import */ var _array_different__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array/different */ \"./src/array/different.js\");\n/* harmony import */ var _array_dropLeftItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./array/dropLeftItem */ \"./src/array/dropLeftItem.js\");\n/* harmony import */ var _array_dropRightItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./array/dropRightItem */ \"./src/array/dropRightItem.js\");\n/* harmony import */ var _array_every__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./array/every */ \"./src/array/every.js\");\n/* harmony import */ var _array_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./array/filter */ \"./src/array/filter.js\");\n/* harmony import */ var _array_find__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array/find */ \"./src/array/find.js\");\n/* harmony import */ var _array_flat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./array/flat */ \"./src/array/flat.js\");\n/* harmony import */ var _array_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./array/map */ \"./src/array/map.js\");\n/* harmony import */ var _array_reduce__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./array/reduce */ \"./src/array/reduce.js\");\n/* harmony import */ var _array_slice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./array/slice */ \"./src/array/slice.js\");\n/* harmony import */ var _array_some__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./array/some */ \"./src/array/some.js\");\n/* harmony import */ var _array_unique__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./array/unique */ \"./src/array/unique.js\");\n/* harmony import */ var _function_apply__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./function/apply */ \"./src/function/apply.js\");\n/* harmony import */ var _function_bind__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./function/bind */ \"./src/function/bind.js\");\n/* harmony import */ var _function_call__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./function/call */ \"./src/function/call.js\");\n/* harmony import */ var _function_debounce__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./function/debounce */ \"./src/function/debounce.js\");\n/* harmony import */ var _function_throttle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./function/throttle */ \"./src/function/throttle.js\");\n/* harmony import */ var _string_repeatStr__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./string/repeatStr */ \"./src/string/repeatStr.js\");\n/* harmony import */ var _object_isPlainObject__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./object/isPlainObject */ \"./src/object/isPlainObject.js\");\n/* harmony import */ var _object_shallowEqual__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./object/shallowEqual */ \"./src/object/shallowEqual.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://utils/./src/index.js?");

/***/ }),

/***/ "./src/object/isPlainObject.js":
/*!*************************************!*\
  !*** ./src/object/isPlainObject.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isPlainObject)\n/* harmony export */ });\nfunction isPlainObject(obj) {\n  return obj ? typeof obj === 'object' && Object.getPrototypeOf(obj) === Object.prototype : false;\n}\n\n\n//# sourceURL=webpack://utils/./src/object/isPlainObject.js?");

/***/ }),

/***/ "./src/object/shallowEqual.js":
/*!************************************!*\
  !*** ./src/object/shallowEqual.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ shallowEqual)\n/* harmony export */ });\nfunction shallowEqual(objA, objB) {\n  if (objA === objB) {\n    return true;\n  }\n\n  const keysA = Object.keys(objA);\n  const keysB = Object.keys(objB);\n\n  if (keysA.length !== keysB.length) {\n    return false;\n  }\n\n  // Test for A's keys different from B.\n  const hasOwn = Object.prototype.hasOwnProperty;\n  for (let i = 0; i < keysA.length; i++) {\n    if (!hasOwn.call(objB, keysA[i]) ||\n        objA[keysA[i]] !== objB[keysA[i]]) {\n      return false;\n    }\n  }\n\n  return true;\n}\n\n\n//# sourceURL=webpack://utils/./src/object/shallowEqual.js?");

/***/ }),

/***/ "./src/string/repeatStr.js":
/*!*********************************!*\
  !*** ./src/string/repeatStr.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ repeatStr)\n/* harmony export */ });\nfunction repeatStr(str,num){\r\n    if(num<0){\r\n        return ''\r\n    }\r\n    var save = str\r\n    for(var i=1;i<num;i++){\r\n        save += str\r\n    }\r\n     return save\r\n}\n\n//# sourceURL=webpack://utils/./src/string/repeatStr.js?");

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
/******/ 	return __webpack_exports__;
/******/ })()
;
});