(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("braft-utils"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["braft-utils", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("braft-utils"), require("react")) : factory(root["braft-utils"], root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function(__WEBPACK_EXTERNAL_MODULE__961__, __WEBPACK_EXTERNAL_MODULE__297__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 961:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__961__;

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
  "default": () => (/* binding */ emoticon),
  "defaultEmoticons": () => (/* binding */ defaultEmoticons)
});

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
// EXTERNAL MODULE: external "braft-utils"
var external_braft_utils_ = __webpack_require__(961);
;// CONCATENATED MODULE: ./emoticon/index.jsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // https://www.iconfinder.com/iconsets/emoji-18

var defaultEmoticons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].map(function (item) {
  return "".concat(item, ".png");
});

var insertEmoticon = function insertEmoticon(editor, editorState, src) {
  editor.setValue(external_braft_utils_.ContentUtils.insertText(editorState, ' ', null, {
    type: 'EMOTICON',
    mutability: 'IMMUTABLE',
    data: {
      src: src
    }
  }));
};

var controlRef = null;

var bindControlRef = function bindControlRef(ref) {
  return controlRef = ref;
};

/* harmony default export */ const emoticon = (function (options) {
  options = _objectSpread({
    emoticons: [],
    closeOnSelect: false,
    closeOnBlur: false
  }, options);
  var _options = options,
      emoticons = _options.emoticons,
      closeOnSelect = _options.closeOnSelect,
      closeOnBlur = _options.closeOnBlur,
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
        text: /*#__PURE__*/external_react_default().createElement("i", {
          className: "bfi-emoji"
        }),
        showArrow: false,
        ref: bindControlRef,
        autoHide: closeOnBlur,
        component: /*#__PURE__*/external_react_default().createElement("div", {
          className: "braft-emoticon-picker"
        }, /*#__PURE__*/external_react_default().createElement("div", {
          className: "braft-emoticons-list"
        }, emoticons.map(function (item, index) {
          return /*#__PURE__*/external_react_default().createElement("img", {
            onClick: function onClick() {
              insertEmoticon(props.editor, props.editorState, item);
              closeOnSelect && controlRef && controlRef.hide();
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

      return /*#__PURE__*/external_react_default().createElement("span", {
        className: "braft-emoticon-in-editor"
      }, /*#__PURE__*/external_react_default().createElement("img", {
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
      return /*#__PURE__*/external_react_default().createElement("span", {
        className: "braft-emoticon-wrap"
      }, /*#__PURE__*/external_react_default().createElement("img", {
        src: src
      }), initialText);
    }
  };
});
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});