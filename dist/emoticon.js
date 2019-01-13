(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("braft-utils"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "braft-utils"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("braft-utils")) : factory(root["react"], root["braft-utils"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__6__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 3:
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

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultEmoticons", function() { return defaultEmoticons; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var braft_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var braft_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(braft_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);



 // https://www.iconfinder.com/iconsets/emoji-18

var defaultEmoticons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].map(function (item) {
  return "".concat(item, ".png");
});

var insertEmoticon = function insertEmoticon(editor, editorState, src) {
  editor.setValue(braft_utils__WEBPACK_IMPORTED_MODULE_2__["ContentUtils"].insertText(editorState, ' ', null, {
    type: 'EMOTICON',
    mutability: 'IMMUTABLE',
    data: {
      src: src
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (function (options) {
  options = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
    emoticons: []
  }, options);
  var _options = options,
      emoticons = _options.emoticons,
      includeEditors = _options.includeEditors,
      excludeEditors = _options.excludeEditors;
  return {
    type: 'entity',
    includeEditors: includeEditors,
    excludeEditors: excludeEditors,
    name: 'EMOTICON',
    control: function control(props) {
      return {
        key: 'EMOTICON',
        replace: 'emoji',
        type: 'dropdown',
        text: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
          className: "bfi-emoji"
        }),
        showArrow: false,
        component: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "braft-emoticon-picker"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "braft-emoticons-list"
        }, emoticons.map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
            onClick: function onClick() {
              return insertEmoticon(props.editor, props.editorState, item);
            },
            key: index,
            src: item
          });
        })))
      };
    },
    mutability: 'IMMUTABLE',
    component: function component(props) {
      var entity = props.contentState.getEntity(props.entityKey);

      var _entity$getData = entity.getData(),
          src = _entity$getData.src;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "braft-emoticon-in-editor"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: src
      }), props.children);
    },
    importer: function importer(nodeName, node) {
      if (nodeName.toLowerCase() === 'span' && node.classList && node.classList.contains('braft-emoticon-wrap')) {
        var imgNode = node.querySelector('img');
        var src = imgNode.getAttribute('src'); // 移除img节点以避免生成atomic block

        node.removeChild(imgNode);
        return {
          mutability: 'IMMUTABLE',
          data: {
            src: src
          }
        };
      }
    },
    exporter: function exporter(entityObject, initialText) {
      var src = entityObject.data.src;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "braft-emoticon-wrap"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: src
      }), initialText);
    }
  };
});

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(3);

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

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ })

/******/ });
});