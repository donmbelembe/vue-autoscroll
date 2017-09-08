(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueAutoscroll"] = factory();
	else
		root["VueAutoscroll"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n// import autoscroll from './directives/autoscroll';\n\nvar autoscroll = exports.autoscroll = {\n  bind: function bind(el, binding, vnode) {\n    var s = JSON.stringify;\n    el.innerHTML = 'name: ' + s(binding.name) + '<br>' + 'value: ' + s(binding.value) + '<br>' + 'expression: ' + s(binding.expression) + '<br>' + 'argument: ' + s(binding.arg) + '<br>' + 'modifiers: ' + s(binding.modifiers) + '<br>' + 'vnode keys: ' + Object.keys(vnode).join(', ');\n\n    console.log('v-autoscrol is not ready yet');\n  }\n};\n\nvar VueAutoscroll = {\n  install: function install(Vue, options) {\n    Vue.directive('autoscroll', autoscroll);\n  }\n};\n\nif (typeof window !== 'undefined' && window.Vue) {\n  window.VueAutoscroll = VueAutoscroll;\n  window.Vue.use(VueAutoscroll);\n}\n\nexports.default = VueAutoscroll;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdnVlQXV0b3Njcm9sbC5qcz8wMjBjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBhdXRvc2Nyb2xsIGZyb20gJy4vZGlyZWN0aXZlcy9hdXRvc2Nyb2xsJztcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRvc2Nyb2xsID0ge1xyXG4gIGJpbmQ6IGZ1bmN0aW9uIChlbCwgYmluZGluZywgdm5vZGUpIHtcclxuICAgIHZhciBzID0gSlNPTi5zdHJpbmdpZnlcclxuICAgIGVsLmlubmVySFRNTCA9XHJcbiAgICAgICduYW1lOiAnICsgcyhiaW5kaW5nLm5hbWUpICsgJzxicj4nICtcclxuICAgICAgJ3ZhbHVlOiAnICsgcyhiaW5kaW5nLnZhbHVlKSArICc8YnI+JyArXHJcbiAgICAgICdleHByZXNzaW9uOiAnICsgcyhiaW5kaW5nLmV4cHJlc3Npb24pICsgJzxicj4nICtcclxuICAgICAgJ2FyZ3VtZW50OiAnICsgcyhiaW5kaW5nLmFyZykgKyAnPGJyPicgK1xyXG4gICAgICAnbW9kaWZpZXJzOiAnICsgcyhiaW5kaW5nLm1vZGlmaWVycykgKyAnPGJyPicgK1xyXG4gICAgICAndm5vZGUga2V5czogJyArIE9iamVjdC5rZXlzKHZub2RlKS5qb2luKCcsICcpXHJcblxyXG4gICAgY29uc29sZS5sb2coJ3YtYXV0b3Njcm9sIGlzIG5vdCByZWFkeSB5ZXQnKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgVnVlQXV0b3Njcm9sbCA9IHtcclxuICBpbnN0YWxsIChWdWUsIG9wdGlvbnMpIHtcclxuICAgIFZ1ZS5kaXJlY3RpdmUoJ2F1dG9zY3JvbGwnLCBhdXRvc2Nyb2xsKVxyXG4gIH1cclxufVxyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5WdWUpIHtcclxuICB3aW5kb3cuVnVlQXV0b3Njcm9sbCA9IFZ1ZUF1dG9zY3JvbGxcclxuICB3aW5kb3cuVnVlLnVzZShWdWVBdXRvc2Nyb2xsKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWdWVBdXRvc2Nyb2xsXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvdnVlQXV0b3Njcm9sbC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFaQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);
});