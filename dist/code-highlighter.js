(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("braft-utils"), require("draft-js"), require("draft-js-prism"), require("immutable"), require("prismjs"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["braft-utils", "draft-js", "draft-js-prism", "immutable", "prismjs", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("braft-utils"), require("draft-js"), require("draft-js-prism"), require("immutable"), require("prismjs"), require("react")) : factory(root["braft-utils"], root["draft-js"], root["draft-js-prism"], root["immutable"], root["prismjs"], root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function(__WEBPACK_EXTERNAL_MODULE__961__, __WEBPACK_EXTERNAL_MODULE__379__, __WEBPACK_EXTERNAL_MODULE__985__, __WEBPACK_EXTERNAL_MODULE__856__, __WEBPACK_EXTERNAL_MODULE__531__, __WEBPACK_EXTERNAL_MODULE__297__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 961:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__961__;

/***/ }),

/***/ 379:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__379__;

/***/ }),

/***/ 985:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__985__;

/***/ }),

/***/ 856:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__856__;

/***/ }),

/***/ 531:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__531__;

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__297__;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ code_highlighter)
});

;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
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
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/createClass.js
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
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/inherits.js

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
  if (superClass) _setPrototypeOf(subClass, superClass);
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/defineProperty.js
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
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "immutable"
var external_immutable_ = __webpack_require__(856);
// EXTERNAL MODULE: external "draft-js"
var external_draft_js_ = __webpack_require__(379);
// EXTERNAL MODULE: external "draft-js-prism"
var external_draft_js_prism_ = __webpack_require__(985);
var external_draft_js_prism_default = /*#__PURE__*/__webpack_require__.n(external_draft_js_prism_);
// EXTERNAL MODULE: external "braft-utils"
var external_braft_utils_ = __webpack_require__(961);
// EXTERNAL MODULE: external "prismjs"
var external_prismjs_ = __webpack_require__(531);
var external_prismjs_default = /*#__PURE__*/__webpack_require__.n(external_prismjs_);
;// CONCATENATED MODULE: ./code-highlighter/index.jsx









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }









var CodeBlockWrapper = /*#__PURE__*/function (_React$Component) {
  _inherits(CodeBlockWrapper, _React$Component);

  var _super = _createSuper(CodeBlockWrapper);

  function CodeBlockWrapper(props) {
    var _this;

    _classCallCheck(this, CodeBlockWrapper);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "codeBlockBlockKey", null);

    _defineProperty(_assertThisInitialized(_this), "codeBlockBlock", null);

    _defineProperty(_assertThisInitialized(_this), "setCodeBlockSyntax", function (event) {
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

        var selectionState = external_draft_js_.SelectionState.createEmpty(_this.codeBlockBlockKey);
        var editorState = external_draft_js_.EditorState.forceSelection(_this.props.editorState, selectionState);

        _this.setState({
          syntax: syntax,
          syntaxName: syntaxName
        }, function () {
          _this.props.editor.setValue(external_braft_utils_.ContentUtils.setSelectionBlockData(editorState, {
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

  _createClass(CodeBlockWrapper, [{
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

      return /*#__PURE__*/external_react_default().createElement("div", {
        className: "braft-code-block-wrapper"
      }, /*#__PURE__*/external_react_default().createElement("div", {
        className: "braft-code-block-header",
        contentEditable: false
      }, /*#__PURE__*/external_react_default().createElement("div", {
        className: "syntax-switcher"
      }, /*#__PURE__*/external_react_default().createElement("span", null, this.state.syntaxName), /*#__PURE__*/external_react_default().createElement("ul", {
        className: "syntax-list"
      }, this.props.syntaxs.map(function (item, index) {
        return /*#__PURE__*/external_react_default().createElement("li", {
          key: index,
          "data-syntax": item.syntax,
          onClick: _this2.setCodeBlockSyntax
        }, item.name);
      })))), /*#__PURE__*/external_react_default().createElement("pre", {
        className: "braft-code-block".concat(this.props.showLineNumber ? ' show-line-number' : ''),
        "data-syntax": this.state.syntax
      }, this.props.children));
    }
  }]);

  return CodeBlockWrapper;
}((external_react_default()).Component);

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
    return (0,external_immutable_.Map)({
      'code-block': {
        element: 'code',
        wrapper: /*#__PURE__*/external_react_default().createElement(CodeBlockWrapper, _extends({}, options, props)),
        nestingEnabled: false
      }
    });
  };
};

/* harmony default export */ const code_highlighter = (function () {
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
    decorator: new (external_draft_js_prism_default())({
      prism: (external_prismjs_default()),
      getSyntax: getCodeBlockBlock,
      defaultSyntax: syntaxs[0].syntax
    })
  }];
});
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});