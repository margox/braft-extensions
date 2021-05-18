(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("immutable"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["immutable", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("immutable"), require("react")) : factory(root["immutable"], root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function(__WEBPACK_EXTERNAL_MODULE__856__, __WEBPACK_EXTERNAL_MODULE__297__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 856:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__856__;

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
  "default": () => (/* binding */ header_id)
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
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
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
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "immutable"
var external_immutable_ = __webpack_require__(856);
;// CONCATENATED MODULE: ./header-id/index.jsx







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var headerTagTypeMap = {
  'h1': 'header-one',
  'h2': 'header-two',
  'h3': 'header-three',
  'h4': 'header-four',
  'h5': 'header-five',
  'h6': 'header-six'
};
var headerTypeTagMap = {};
Object.keys(headerTagTypeMap).forEach(function (key) {
  headerTypeTagMap[headerTagTypeMap[key]] = key;
});

var getHeaderTag = function getHeaderTag(TagName, editorState) {
  return /*#__PURE__*/function (_React$Component) {
    _inherits(props, _React$Component);

    var _super = _createSuper(props);

    function props(_props) {
      var _this;

      _classCallCheck(this, props);

      _this = _super.call(this, _props);

      var blockKey = _props['data-offset-key'].split('-')[0];

      var block = editorState.getCurrentContent().getBlockForKey(blockKey);
      var headerId = block.getData().get('id') || blockKey;
      _this.state = {
        id: headerId
      };
      return _this;
    }

    _createClass(props, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/external_react_default().createElement(TagName, _extends({
          id: this.state.id
        }, this.props));
      }
    }]);

    return props;
  }((external_react_default()).Component);
};

var getHeaderRenderMap = function getHeaderRenderMap(_ref) {
  var editorState = _ref.editorState;
  return (0,external_immutable_.Map)({
    'header-one': {
      element: getHeaderTag('h1', editorState)
    },
    'header-two': {
      element: getHeaderTag('h2', editorState)
    },
    'header-three': {
      element: getHeaderTag('h3', editorState)
    },
    'header-four': {
      element: getHeaderTag('h4', editorState)
    },
    'header-five': {
      element: getHeaderTag('h5', editorState)
    },
    'header-six': {
      element: getHeaderTag('h6', editorState)
    }
  });
};

/* harmony default export */ const header_id = (function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var includeEditors = options.includeEditors,
      excludeEditors = options.excludeEditors;
  return {
    type: 'block',
    name: 'custom-header',
    includeEditors: includeEditors,
    excludeEditors: excludeEditors,
    renderMap: getHeaderRenderMap,
    importer: function importer(nodeName, node) {
      if (/h[1-6]/.test(nodeName)) {
        var blockData = {
          id: node.getAttribute('id')
        };
        var nodeStyle = node.style || {};

        if (nodeStyle.textAlign) {
          blockData.textAlign = nodeStyle.textAlign;
        }

        if (nodeStyle.textIndent) {
          blockData.textIndent = /^\d+em$/.test(nodeStyle.textIndent) ? Math.ceil(parseInt(nodeStyle.textIndent, 10) / 2) : 1;
        }

        return {
          type: headerTagTypeMap[nodeName],
          data: blockData
        };
      }

      return null;
    },
    exporter: function exporter(_, block) {
      var blockType = block.type.toLowerCase();

      if (!/header-\b(one|two|three|four|five|six)\b/.test(blockType)) {
        return null;
      }

      var blockStyle = '';
      var _block$data = block.data,
          id = _block$data.id,
          textAlign = _block$data.textAlign,
          textIndent = _block$data.textIndent;

      if (textAlign || textIndent) {
        blockStyle = ' style="';

        if (textAlign) {
          blockStyle += "text-align:".concat(textAlign, ";");
        }

        if (textIndent && !isNaN(textIndent) && textIndent > 0) {
          blockStyle += "text-indent:".concat(textIndent * 2, "em;");
        }

        blockStyle += '"';
      }

      return {
        start: "<".concat(headerTypeTagMap[blockType], " id=\"").concat(id || block.key, "\"").concat(blockStyle, ">"),
        end: "</".concat(headerTypeTagMap[blockType], ">")
      };
    }
  };
});
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});