(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueAutoscroll"] = factory();
	else
		root["VueAutoscroll"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar autoscroll = exports.autoscroll = {\n  scroll: function scroll(el, value) {\n    // Suported value\n    var autoPositions = ['top', 'right', 'bottom', 'left', 'center', 'top left', 'top right', 'bottom left', 'bottom right', 'top center', 'left center', 'right center', 'bottom center'];\n\n    if (autoPositions.includes(value)) {\n      if (value === 'top') {\n        el.scrollTop = 0;\n      } else if (value === 'right') {\n        el.scrollLeft = el.scrollWidth - el.clientWidth;\n      } else if (value === 'bottom') {\n        el.scrollTop = el.scrollHeight - el.clientHeight;\n      } else if (value === 'left') {\n        el.scrollLeft = 0;\n      } else if (value === 'top left') {\n        el.scrollTop = 0;\n        el.scrollLeft = 0;\n      } else if (value === 'top right') {\n        el.scrollTop = 0;\n        el.scrollLeft = el.scrollWidth - el.clientWidth;\n      } else if (value === 'bottom left') {\n        el.scrollTop = el.scrollHeight - el.clientHeight;\n        el.scrollLeft = 0;\n      } else if (value === 'bottom right') {\n        el.scrollTop = el.scrollHeight - el.clientHeight;\n        el.scrollLeft = el.scrollWidth - el.clientWidth;\n      } else if (value === 'center') {\n        el.scrollTop = (el.scrollHeight - el.clientHeight) / 2;\n        el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;\n      } else if (value === 'top center') {\n        el.scrollTop = 0;\n        el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;\n      } else if (value === 'right center') {\n        //\n        el.scrollTop = (el.scrollHeight - el.clientHeight) / 2;\n        el.scrollLeft = el.scrollWidth - el.clientWidth;\n      } else if (value === 'bottom center') {\n        //\n        el.scrollTop = el.scrollHeight - el.clientHeight;\n        el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;\n      } else if (value === 'left center') {\n        el.scrollTop = (el.scrollHeight - el.clientHeight) / 2;\n        el.scrollLeft = 0;\n      }\n    }\n  },\n  inserted: function inserted(el, binding, vnode) {\n    // Send warning message no argument, value or expressions is passed\n    if (binding.value === undefined && Object.keys(binding.modifiers).length === 0 && binding.arg === undefined) {\n      console.warn('You should give to the v-' + binding.name + ' directive the scroll informations.\\n READ THE DOCUMENTATION.');\n      return 0;\n    }\n\n    if (binding.arg === 'noscroll') {\n      el.style.overflow = 'hidden';\n    }\n\n    autoscroll.scroll(el, binding.value);\n  },\n  componentUpdated: function componentUpdated(el, binding, vnode, oldVnode) {\n    if (binding.oldValue !== binding.value) {\n      autoscroll.scroll(el, binding.value);\n    }\n  }\n};\n\nvar VueAutoscroll = {\n  install: function install(Vue, options) {\n    Vue.directive('autoscroll', autoscroll);\n  }\n};\n\nif (typeof window !== 'undefined' && window.Vue) {\n  window.VueAutoscroll = VueAutoscroll;\n  window.Vue.use(VueAutoscroll);\n}\n\nexports.default = VueAutoscroll;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdnVlQXV0b3Njcm9sbC5qcz8wMjBjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhdXRvc2Nyb2xsID0ge1xyXG4gIHNjcm9sbDogZnVuY3Rpb24gKGVsLCB2YWx1ZSkge1xyXG4gICAgLy8gU3Vwb3J0ZWQgdmFsdWVcclxuICAgIHZhciBhdXRvUG9zaXRpb25zID0gW1xyXG4gICAgICAndG9wJyxcclxuICAgICAgJ3JpZ2h0JyxcclxuICAgICAgJ2JvdHRvbScsXHJcbiAgICAgICdsZWZ0JyxcclxuICAgICAgJ2NlbnRlcicsXHJcbiAgICAgICd0b3AgbGVmdCcsXHJcbiAgICAgICd0b3AgcmlnaHQnLFxyXG4gICAgICAnYm90dG9tIGxlZnQnLFxyXG4gICAgICAnYm90dG9tIHJpZ2h0JyxcclxuICAgICAgJ3RvcCBjZW50ZXInLFxyXG4gICAgICAnbGVmdCBjZW50ZXInLFxyXG4gICAgICAncmlnaHQgY2VudGVyJyxcclxuICAgICAgJ2JvdHRvbSBjZW50ZXInXHJcbiAgICBdXHJcblxyXG4gICAgaWYgKGF1dG9Qb3NpdGlvbnMuaW5jbHVkZXModmFsdWUpKSB7XHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gJ3RvcCcpIHtcclxuICAgICAgICBlbC5zY3JvbGxUb3AgPSAwXHJcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICdyaWdodCcpIHtcclxuICAgICAgICBlbC5zY3JvbGxMZWZ0ID0gZWwuc2Nyb2xsV2lkdGggLSBlbC5jbGllbnRXaWR0aFxyXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnYm90dG9tJykge1xyXG4gICAgICAgIGVsLnNjcm9sbFRvcCA9IGVsLnNjcm9sbEhlaWdodCAtIGVsLmNsaWVudEhlaWdodFxyXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnbGVmdCcpIHtcclxuICAgICAgICBlbC5zY3JvbGxMZWZ0ID0gMFxyXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAndG9wIGxlZnQnKSB7XHJcbiAgICAgICAgZWwuc2Nyb2xsVG9wID0gMFxyXG4gICAgICAgIGVsLnNjcm9sbExlZnQgPSAwXHJcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICd0b3AgcmlnaHQnKSB7XHJcbiAgICAgICAgZWwuc2Nyb2xsVG9wID0gMFxyXG4gICAgICAgIGVsLnNjcm9sbExlZnQgPSBlbC5zY3JvbGxXaWR0aCAtIGVsLmNsaWVudFdpZHRoXHJcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICdib3R0b20gbGVmdCcpIHtcclxuICAgICAgICBlbC5zY3JvbGxUb3AgPSBlbC5zY3JvbGxIZWlnaHQgLSBlbC5jbGllbnRIZWlnaHRcclxuICAgICAgICBlbC5zY3JvbGxMZWZ0ID0gMFxyXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnYm90dG9tIHJpZ2h0Jykge1xyXG4gICAgICAgIGVsLnNjcm9sbFRvcCA9IGVsLnNjcm9sbEhlaWdodCAtIGVsLmNsaWVudEhlaWdodFxyXG4gICAgICAgIGVsLnNjcm9sbExlZnQgPSBlbC5zY3JvbGxXaWR0aCAtIGVsLmNsaWVudFdpZHRoXHJcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICdjZW50ZXInKSB7XHJcbiAgICAgICAgZWwuc2Nyb2xsVG9wID0gKGVsLnNjcm9sbEhlaWdodCAtIGVsLmNsaWVudEhlaWdodCkgLyAyXHJcbiAgICAgICAgZWwuc2Nyb2xsTGVmdCA9IChlbC5zY3JvbGxXaWR0aCAtIGVsLmNsaWVudFdpZHRoKSAvIDJcclxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ3RvcCBjZW50ZXInKSB7XHJcbiAgICAgICAgZWwuc2Nyb2xsVG9wID0gMFxyXG4gICAgICAgIGVsLnNjcm9sbExlZnQgPSAoZWwuc2Nyb2xsV2lkdGggLSBlbC5jbGllbnRXaWR0aCkgLyAyXHJcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICdyaWdodCBjZW50ZXInKSB7IC8vXHJcbiAgICAgICAgZWwuc2Nyb2xsVG9wID0gKGVsLnNjcm9sbEhlaWdodCAtIGVsLmNsaWVudEhlaWdodCkgLyAyXHJcbiAgICAgICAgZWwuc2Nyb2xsTGVmdCA9IGVsLnNjcm9sbFdpZHRoIC0gZWwuY2xpZW50V2lkdGhcclxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ2JvdHRvbSBjZW50ZXInKSB7IC8vXHJcbiAgICAgICAgZWwuc2Nyb2xsVG9wID0gZWwuc2Nyb2xsSGVpZ2h0IC0gZWwuY2xpZW50SGVpZ2h0XHJcbiAgICAgICAgZWwuc2Nyb2xsTGVmdCA9IChlbC5zY3JvbGxXaWR0aCAtIGVsLmNsaWVudFdpZHRoKSAvIDJcclxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ2xlZnQgY2VudGVyJykge1xyXG4gICAgICAgIGVsLnNjcm9sbFRvcCA9IChlbC5zY3JvbGxIZWlnaHQgLSBlbC5jbGllbnRIZWlnaHQpIC8gMlxyXG4gICAgICAgIGVsLnNjcm9sbExlZnQgPSAwXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGluc2VydGVkOiBmdW5jdGlvbiAoZWwsIGJpbmRpbmcsIHZub2RlKSB7XHJcbiAgICAvLyBTZW5kIHdhcm5pbmcgbWVzc2FnZSBubyBhcmd1bWVudCwgdmFsdWUgb3IgZXhwcmVzc2lvbnMgaXMgcGFzc2VkXHJcbiAgICBpZiAoYmluZGluZy52YWx1ZSA9PT0gdW5kZWZpbmVkICYmIE9iamVjdC5rZXlzKGJpbmRpbmcubW9kaWZpZXJzKS5sZW5ndGggPT09IDAgJiYgYmluZGluZy5hcmcgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ1lvdSBzaG91bGQgZ2l2ZSB0byB0aGUgdi0nICsgYmluZGluZy5uYW1lICsgJyBkaXJlY3RpdmUgdGhlIHNjcm9sbCBpbmZvcm1hdGlvbnMuXFxuIFJFQUQgVEhFIERPQ1VNRU5UQVRJT04uJylcclxuICAgICAgcmV0dXJuIDBcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYmluZGluZy5hcmcgPT09ICdub3Njcm9sbCcpIHtcclxuICAgICAgZWwuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xyXG4gICAgfVxyXG5cclxuICAgIGF1dG9zY3JvbGwuc2Nyb2xsKGVsLCBiaW5kaW5nLnZhbHVlKVxyXG4gIH0sXHJcbiAgY29tcG9uZW50VXBkYXRlZDogZnVuY3Rpb24gKGVsLCBiaW5kaW5nLCB2bm9kZSwgb2xkVm5vZGUpIHtcclxuICAgIGlmIChiaW5kaW5nLm9sZFZhbHVlICE9PSBiaW5kaW5nLnZhbHVlKSB7XHJcbiAgICAgIGF1dG9zY3JvbGwuc2Nyb2xsKGVsLCBiaW5kaW5nLnZhbHVlKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgVnVlQXV0b3Njcm9sbCA9IHtcclxuICBpbnN0YWxsIChWdWUsIG9wdGlvbnMpIHtcclxuICAgIFZ1ZS5kaXJlY3RpdmUoJ2F1dG9zY3JvbGwnLCBhdXRvc2Nyb2xsKVxyXG4gIH1cclxufVxyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5WdWUpIHtcclxuICB3aW5kb3cuVnVlQXV0b3Njcm9sbCA9IFZ1ZUF1dG9zY3JvbGxcclxuICB3aW5kb3cuVnVlLnVzZShWdWVBdXRvc2Nyb2xsKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWdWVBdXRvc2Nyb2xsXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvdnVlQXV0b3Njcm9sbC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNFQTtBQUNBO0FBNkVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);
});