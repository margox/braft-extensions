(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ max_length)
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
;// CONCATENATED MODULE: ./max-length/index.jsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

/* harmony default export */ const max_length = (function (options) {
  options = _objectSpread({
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
/******/ 	return __webpack_exports__;
/******/ })()
;
});