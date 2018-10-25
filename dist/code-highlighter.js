(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("braft-utils"), require("draft-js"), require("immutable"), require("draft-js-prism"), require("prismjs"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "braft-utils", "draft-js", "immutable", "draft-js-prism", "prismjs"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("braft-utils"), require("draft-js"), require("immutable"), require("draft-js-prism"), require("prismjs")) : factory(root["react"], root["braft-utils"], root["draft-js"], root["immutable"], root["draft-js-prism"], root["prismjs"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__12__, __WEBPACK_EXTERNAL_MODULE__13__, __WEBPACK_EXTERNAL_MODULE__14__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
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
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(19);

var assertThisInitialized = __webpack_require__(3);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(20);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__12__;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__13__;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__14__;

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var draft_js_prism__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(13);
/* harmony import */ var draft_js_prism__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(draft_js_prism__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var braft_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5);
/* harmony import */ var braft_utils__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(braft_utils__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(14);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_14__);
















var CodeBlockWrapper =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(CodeBlockWrapper, _React$Component);

  function CodeBlockWrapper(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, CodeBlockWrapper);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(CodeBlockWrapper).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "codeBlockBlockKey", null);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "codeBlockBlock", null);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "setCodeBlockSyntax", function (event) {
      var syntax = event.currentTarget.dataset.syntax;

      if (!syntax) {
        return false;
      }

      try {
        var syntaxName = _this.props.syntaxs.find(function (item) {
          return item.syntax === syntax;
        }).name;

        if (!syntaxName) {
          return false;
        }

        var selectionState = draft_js__WEBPACK_IMPORTED_MODULE_11__["SelectionState"].createEmpty(_this.codeBlockBlockKey);
        var editorState = draft_js__WEBPACK_IMPORTED_MODULE_11__["EditorState"].forceSelection(_this.props.editorState, selectionState);

        _this.setState({
          syntax: syntax,
          syntaxName: syntaxName
        }, function () {
          _this.props.editor.setValue(braft_utils__WEBPACK_IMPORTED_MODULE_13__["ContentUtils"].setSelectionBlockData(editorState, {
            syntax: syntax
          }));
        });
      } catch (error) {
        console.warn(error);
      }
    });

    _this.state = {
      syntax: props.syntaxs[0].syntax,
      syntaxName: props.syntaxs[0].name
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(CodeBlockWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.codeBlockBlock = this.getCodeBlockBlock(this.props);
      this.getCodeBlockSyntax(this.props);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.codeBlockBlock = this.getCodeBlockBlock(nextProps);
      this.getCodeBlockSyntax(nextProps);
    }
  }, {
    key: "getCodeBlockBlock",
    value: function getCodeBlockBlock(props) {
      try {
        var offsetKey = props['data-offset-key'];
        var blockKey = offsetKey.split('-')[0];
        var contentState = props.editorState.getCurrentContent();
        this.codeBlockBlockKey = blockKey;
        return contentState.getBlockForKey(blockKey);
      } catch (error) {
        console.warn(error);
        return null;
      }
    }
  }, {
    key: "getCodeBlockSyntax",
    value: function getCodeBlockSyntax(props) {
      if (this.codeBlockBlock) {
        var blockData = this.codeBlockBlock.getData();
        var syntax = blockData.get('syntax') || props.syntaxs[0].syntax;
        var syntaxName = props.syntaxs.find(function (item) {
          return item.syntax === syntax;
        }).name;

        if (!syntaxName) {
          return false;
        }

        this.setState({
          syntax: syntax,
          syntaxName: syntaxName
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "braft-code-block-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "braft-code-block-header",
        contentEditable: false
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "syntax-switcher"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, this.state.syntaxName), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
        className: "syntax-list"
      }, this.props.syntaxs.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
          key: index,
          "data-syntax": item.syntax,
          onClick: _this2.setCodeBlockSyntax
        }, item.name);
      })))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("pre", {
        className: "braft-code-block".concat(this.props.showLineNumber ? ' show-line-number' : ''),
        "data-syntax": this.state.syntax
      }, this.props.children));
    }
  }]);

  return CodeBlockWrapper;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

var getCodeBlockBlock = function getCodeBlockBlock(block) {
  if (!block || !block.getType || block.getType() !== 'code-block') {
    return null;
  }

  var blockDOMNode = document.querySelector("code[data-offset-key=\"".concat(block.getKey(), "-0-0\"]"));

  if (!blockDOMNode) {
    return null;
  }

  if (blockDOMNode.parentNode.nodeName.toLowerCase() !== 'pre') {
    return null;
  }

  return blockDOMNode.parentNode.dataset.syntax;
};

var getCodeBlockRenderMap = function getCodeBlockRenderMap(options) {
  return function (props) {
    return Object(immutable__WEBPACK_IMPORTED_MODULE_10__["Map"])({
      'code-block': {
        element: 'code',
        wrapper: react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(CodeBlockWrapper, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, options, props)),
        nestingEnabled: false
      }
    });
  };
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var showLineNumber = options.showLineNumber,
      showTools = options.showTools,
      includeEditors = options.includeEditors,
      excludeEditors = options.excludeEditors;
  var syntaxs = options.syntaxs || [{
    name: 'JavaScript',
    syntax: 'javascript'
  }, {
    name: 'HTML',
    syntax: 'html'
  }, {
    name: 'CSS',
    syntax: 'css'
  }];
  return [{
    type: 'block',
    name: 'code-block',
    includeEditors: includeEditors,
    excludeEditors: excludeEditors,
    renderMap: getCodeBlockRenderMap({
      syntaxs: syntaxs,
      showLineNumber: showLineNumber,
      showTools: showTools
    }),
    importer: function importer(nodeName, node) {
      if (nodeName.toLowerCase() === 'pre') {
        try {
          var syntax = node.dataset.lang;
          node.innerHTML = node.innerHTML.replace(/<code(.*?)>/g, '').replace(/<\/code>/g, '');
          return syntax ? {
            type: 'code-block',
            data: {
              syntax: syntax
            }
          } : null;
        } catch (error) {
          return null;
        }
      }

      return null;
    },
    exporter: function exporter(contentState, block) {
      if (block.type.toLowerCase() !== 'code-block') {
        return null;
      }

      var previousBlock = contentState.getBlockBefore(block.key);
      var nextBlock = contentState.getBlockAfter(block.key);
      var previousBlockType = previousBlock && previousBlock.getType();
      var nextBlockType = nextBlock && nextBlock.getType();
      var syntax = block.data.syntax || syntaxs[0].syntax;
      var start = '';
      var end = '';

      if (previousBlockType !== 'code-block') {
        start = "<pre data-lang=\"".concat(syntax, "\" class=\"lang-").concat(syntax, "\"><code class=\"lang-").concat(syntax, "\">");
      } else {
        start = '';
      }

      if (nextBlockType !== 'code-block') {
        end = '</code></pre>';
      } else {
        end = '<br/>';
      }

      return {
        start: start,
        end: end
      };
    }
  }, {
    type: 'decorator',
    includeEditors: includeEditors,
    excludeEditors: excludeEditors,
    decorator: new draft_js_prism__WEBPACK_IMPORTED_MODULE_12___default.a({
      prism: prismjs__WEBPACK_IMPORTED_MODULE_14___default.a,
      getSyntax: getCodeBlockBlock,
      defaultSyntax: syntaxs[0].syntax
    })
  }];
});

/***/ }),
/* 19 */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});