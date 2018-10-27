(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);


var getSelectedTextLength = function getSelectedTextLength(editorState) {
  var currentSelection = editorState.getSelection();
  var isCollapsed = currentSelection.isCollapsed();
  var length = 0;

  if (!isCollapsed) {
    var currentContent = editorState.getCurrentContent();
    var startKey = currentSelection.getStartKey();
    var endKey = currentSelection.getEndKey();
    var startBlock = currentContent.getBlockForKey(startKey);
    var isStartAndEndBlockAreTheSame = startKey === endKey;
    var startBlockTextLength = startBlock.getLength();
    var startSelectedTextLength = startBlockTextLength - currentSelection.getStartOffset();
    var endSelectedTextLength = currentSelection.getEndOffset();
    var keyAfterEnd = currentContent.getKeyAfter(endKey);

    if (isStartAndEndBlockAreTheSame) {
      length += currentSelection.getEndOffset() - currentSelection.getStartOffset();
    } else {
      var currentKey = startKey;

      while (currentKey && currentKey !== keyAfterEnd) {
        if (currentKey === startKey) {
          length += startSelectedTextLength + 1;
        } else if (currentKey === endKey) {
          length += endSelectedTextLength;
        } else {
          length += currentContent.getBlockForKey(currentKey).getLength() + 1;
        }

        currentKey = currentContent.getKeyAfter(currentKey);
      }
    }
  }

  return length;
};

/* harmony default export */ __webpack_exports__["default"] = (function (options) {
  options = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
    defaultValue: Infinity
  }, options);
  var _options = options,
      includeEditors = _options.includeEditors,
      excludeEditors = _options.excludeEditors,
      defaultValue = _options.defaultValue;
  return {
    type: 'prop-interception',
    includeEditors: includeEditors,
    excludeEditors: excludeEditors,
    interceptor: function interceptor(editorProps) {
      var maxLength = editorProps.maxLength || defaultValue;

      editorProps.handleBeforeInput = function (_, editorState) {
        if (maxLength === Infinity) {
          return 'not-handled';
        }

        var currentContentLength = editorState.toText().length;
        var selectedTextLength = getSelectedTextLength(editorState);

        if (currentContentLength - selectedTextLength > maxLength - 1) {
          editorProps.onReachMaxLength && editorProps.onReachMaxLength(maxLength);
          return 'handled';
        }
      };

      editorProps.handlePastedText = function (pastedText, _, editorState) {
        if (maxLength === Infinity) {
          return 'not-handled';
        }

        var currentContentLength = editorState.toText().length;
        var selectedTextLength = getSelectedTextLength(editorState);

        if (currentContentLength + pastedText.length - selectedTextLength > maxLength) {
          editorProps.onReachMaxLength && editorProps.onReachMaxLength(maxLength);
          return 'handled';
        }
      };

      return editorProps;
    }
  };
});

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(1);

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ })

/******/ });
});