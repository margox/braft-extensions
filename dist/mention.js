(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("draft-js"), require("immutable"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "draft-js", "immutable"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("draft-js"), require("immutable")) : factory(root["react"], root["draft-js"], root["immutable"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(2);

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
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
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(22);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(26);

var iterableToArray = __webpack_require__(27);

var nonIterableSpread = __webpack_require__(28);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(59);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultSuggestionsFilter = exports.defaultTheme = exports.MentionSuggestions = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // eslint-disable-line import/no-named-as-default


var _MentionSuggestions = __webpack_require__(54);

Object.defineProperty(exports, 'MentionSuggestions', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_MentionSuggestions).default;
  }
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _immutable = __webpack_require__(4);

var _Mention = __webpack_require__(74);

var _Mention2 = _interopRequireDefault(_Mention);

var _MentionSuggestions2 = _interopRequireDefault(_MentionSuggestions);

var _MentionSuggestionsPortal = __webpack_require__(76);

var _MentionSuggestionsPortal2 = _interopRequireDefault(_MentionSuggestionsPortal);

var _defaultRegExp = __webpack_require__(77);

var _defaultRegExp2 = _interopRequireDefault(_defaultRegExp);

var _mentionStrategy = __webpack_require__(78);

var _mentionStrategy2 = _interopRequireDefault(_mentionStrategy);

var _mentionSuggestionsStrategy = __webpack_require__(79);

var _mentionSuggestionsStrategy2 = _interopRequireDefault(_mentionSuggestionsStrategy);

var _mentionStyles = {
  "mention": "draftJsMentionPlugin__mention__29BEd"
};

var _mentionStyles2 = _interopRequireDefault(_mentionStyles);

var _mentionSuggestionsStyles = {
  "mentionSuggestions": "draftJsMentionPlugin__mentionSuggestions__2DWjA"
};

var _mentionSuggestionsStyles2 = _interopRequireDefault(_mentionSuggestionsStyles);

var _mentionSuggestionsEntryStyles = {
  "mentionSuggestionsEntry": "draftJsMentionPlugin__mentionSuggestionsEntry__3mSwm",
  "mentionSuggestionsEntryFocused": "draftJsMentionPlugin__mentionSuggestionsEntryFocused__3LcTd draftJsMentionPlugin__mentionSuggestionsEntry__3mSwm",
  "mentionSuggestionsEntryText": "draftJsMentionPlugin__mentionSuggestionsEntryText__3Jobq",
  "mentionSuggestionsEntryAvatar": "draftJsMentionPlugin__mentionSuggestionsEntryAvatar__1xgA9"
};

var _mentionSuggestionsEntryStyles2 = _interopRequireDefault(_mentionSuggestionsEntryStyles);

var _defaultSuggestionsFilter = __webpack_require__(80);

var _defaultSuggestionsFilter2 = _interopRequireDefault(_defaultSuggestionsFilter);

var _positionSuggestions = __webpack_require__(81);

var _positionSuggestions2 = _interopRequireDefault(_positionSuggestions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultTheme = exports.defaultTheme = {
  // CSS class for mention text
  mention: _mentionStyles2.default.mention,
  // CSS class for suggestions component
  mentionSuggestions: _mentionSuggestionsStyles2.default.mentionSuggestions,
  // CSS classes for an entry in the suggestions component
  mentionSuggestionsEntry: _mentionSuggestionsEntryStyles2.default.mentionSuggestionsEntry,
  mentionSuggestionsEntryFocused: _mentionSuggestionsEntryStyles2.default.mentionSuggestionsEntryFocused,
  mentionSuggestionsEntryText: _mentionSuggestionsEntryStyles2.default.mentionSuggestionsEntryText,
  mentionSuggestionsEntryAvatar: _mentionSuggestionsEntryStyles2.default.mentionSuggestionsEntryAvatar
};

exports.default = function () {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var callbacks = {
    keyBindingFn: undefined,
    handleKeyCommand: undefined,
    handleReturn: undefined,
    onChange: undefined
  };

  var ariaProps = {
    ariaHasPopup: 'false',
    ariaExpanded: false,
    ariaOwneeID: undefined,
    ariaActiveDescendantID: undefined
  };

  var searches = (0, _immutable.Map)();
  var escapedSearch = void 0;
  var clientRectFunctions = (0, _immutable.Map)();
  var isOpened = void 0;

  var store = {
    getEditorState: undefined,
    setEditorState: undefined,
    getPortalClientRect: function getPortalClientRect(offsetKey) {
      return clientRectFunctions.get(offsetKey)();
    },
    getAllSearches: function getAllSearches() {
      return searches;
    },
    isEscaped: function isEscaped(offsetKey) {
      return escapedSearch === offsetKey;
    },
    escapeSearch: function escapeSearch(offsetKey) {
      escapedSearch = offsetKey;
    },

    resetEscapedSearch: function resetEscapedSearch() {
      escapedSearch = undefined;
    },

    register: function register(offsetKey) {
      searches = searches.set(offsetKey, offsetKey);
    },

    updatePortalClientRect: function updatePortalClientRect(offsetKey, func) {
      clientRectFunctions = clientRectFunctions.set(offsetKey, func);
    },

    unregister: function unregister(offsetKey) {
      searches = searches.delete(offsetKey);
      clientRectFunctions = clientRectFunctions.delete(offsetKey);
    },

    getIsOpened: function getIsOpened() {
      return isOpened;
    },
    setIsOpened: function setIsOpened(nextIsOpened) {
      isOpened = nextIsOpened;
    }
  };

  // Styles are overwritten instead of merged as merging causes a lot of confusion.
  //
  // Why? Because when merging a developer needs to know all of the underlying
  // styles which needs a deep dive into the code. Merging also makes it prone to
  // errors when upgrading as basically every styling change would become a major
  // breaking change. 1px of an increased padding can break a whole layout.
  var _config$mentionPrefix = config.mentionPrefix,
      mentionPrefix = _config$mentionPrefix === undefined ? '' : _config$mentionPrefix,
      _config$theme = config.theme,
      theme = _config$theme === undefined ? defaultTheme : _config$theme,
      _config$positionSugge = config.positionSuggestions,
      positionSuggestions = _config$positionSugge === undefined ? _positionSuggestions2.default : _config$positionSugge,
      mentionComponent = config.mentionComponent,
      _config$mentionSugges = config.mentionSuggestionsComponent,
      MentionSuggestionsComponent = _config$mentionSugges === undefined ? _MentionSuggestions2.default : _config$mentionSugges,
      _config$entityMutabil = config.entityMutability,
      entityMutability = _config$entityMutabil === undefined ? 'SEGMENTED' : _config$entityMutabil,
      _config$mentionTrigge = config.mentionTrigger,
      mentionTrigger = _config$mentionTrigge === undefined ? '@' : _config$mentionTrigge,
      _config$mentionRegExp = config.mentionRegExp,
      mentionRegExp = _config$mentionRegExp === undefined ? _defaultRegExp2.default : _config$mentionRegExp,
      _config$supportWhites = config.supportWhitespace,
      supportWhitespace = _config$supportWhites === undefined ? false : _config$supportWhites;

  var mentionSearchProps = {
    ariaProps: ariaProps,
    callbacks: callbacks,
    theme: theme,
    store: store,
    entityMutability: entityMutability,
    positionSuggestions: positionSuggestions,
    mentionTrigger: mentionTrigger,
    mentionPrefix: mentionPrefix
  };
  var DecoratedMentionSuggestionsComponent = function DecoratedMentionSuggestionsComponent(props) {
    return _react2.default.createElement(MentionSuggestionsComponent, _extends({}, props, mentionSearchProps));
  };
  var DecoratedMention = function DecoratedMention(props) {
    return _react2.default.createElement(_Mention2.default, _extends({}, props, { theme: theme, mentionComponent: mentionComponent }));
  };
  var DecoratedMentionSuggestionsPortal = function DecoratedMentionSuggestionsPortal(props) {
    return _react2.default.createElement(_MentionSuggestionsPortal2.default, _extends({}, props, { store: store }));
  };
  return {
    MentionSuggestions: DecoratedMentionSuggestionsComponent,
    decorators: [{
      strategy: (0, _mentionStrategy2.default)(mentionTrigger),
      component: DecoratedMention
    }, {
      strategy: (0, _mentionSuggestionsStrategy2.default)(mentionTrigger, supportWhitespace, mentionRegExp),
      component: DecoratedMentionSuggestionsPortal
    }],
    getAccessibilityProps: function getAccessibilityProps() {
      return {
        role: 'combobox',
        ariaAutoComplete: 'list',
        ariaHasPopup: ariaProps.ariaHasPopup,
        ariaExpanded: ariaProps.ariaExpanded,
        ariaActiveDescendantID: ariaProps.ariaActiveDescendantID,
        ariaOwneeID: ariaProps.ariaOwneeID
      };
    },

    initialize: function initialize(_ref) {
      var getEditorState = _ref.getEditorState,
          setEditorState = _ref.setEditorState;

      store.getEditorState = getEditorState;
      store.setEditorState = setEditorState;
    },

    keyBindingFn: function keyBindingFn(keyboardEvent) {
      return callbacks.keyBindingFn && callbacks.keyBindingFn(keyboardEvent);
    },
    handleReturn: function handleReturn(keyboardEvent) {
      return callbacks.handleReturn && callbacks.handleReturn(keyboardEvent);
    },
    onChange: function onChange(editorState) {
      if (callbacks.onChange) return callbacks.onChange(editorState);
      return editorState;
    }
  };
};

var defaultSuggestionsFilter = exports.defaultSuggestionsFilter = _defaultSuggestionsFilter2.default;

/***/ }),
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(55)();
}


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__(57);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
    reHasRegExpChar = RegExp(reRegExpChar.source);

/**
 * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
 * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escapeRegExp('[lodash](https://lodash.com/)');
 * // => '\[lodash\]\(https://lodash\.com/\)'
 */
function escapeRegExp(string) {
  string = toString(string);
  return (string && reHasRegExpChar.test(string))
    ? string.replace(reRegExpChar, '\\$&')
    : string;
}

module.exports = escapeRegExp;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getSearchTextAt = __webpack_require__(70);

var _getSearchTextAt2 = _interopRequireDefault(_getSearchTextAt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (editorState, selection, trigger) {
  var anchorKey = selection.getAnchorKey();
  var anchorOffset = selection.getAnchorOffset();
  var currentContent = editorState.getCurrentContent();
  var currentBlock = currentContent.getBlockForKey(anchorKey);
  var blockText = currentBlock.getText();
  return (0, _getSearchTextAt2.default)(blockText, anchorOffset, trigger);
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getTypeByTrigger = function getTypeByTrigger(trigger) {
  return trigger === '@' ? 'mention' : trigger + 'mention';
};

exports.default = getTypeByTrigger;

/***/ }),
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var draft_js_mention_plugin_lib_plugin_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53);
/* harmony import */ var draft_js_mention_plugin_lib_plugin_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(draft_js_mention_plugin_lib_plugin_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var draft_js_mention_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30);
/* harmony import */ var draft_js_mention_plugin__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(draft_js_mention_plugin__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultSuggestionsFilter", function() { return draft_js_mention_plugin__WEBPACK_IMPORTED_MODULE_6__["defaultSuggestionsFilter"]; });








/**
 * 基于 draft-js-mention-plugin 的 mention 扩展
 * 除了 includeEditors 和 excludeEditors 外
 * 其他属性将会传递给 draft-js-mention-plugin
 * 参考 https://www.draft-js-plugins.com/plugin/mention
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var includeEditors = options.includeEditors,
      excludeEditors = options.excludeEditors,
      mentionPluginOptions = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default()(options, ["includeEditors", "excludeEditors"]);

  var mentionPlugin = draft_js_mention_plugin__WEBPACK_IMPORTED_MODULE_6___default()(mentionPluginOptions); // MentionSuggestions 是一个 React Component 用来定制 mention 的数据

  var MentionSuggestions = mentionPlugin.MentionSuggestions,
      draftEditorPlugin = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default()(mentionPlugin, ["MentionSuggestions"]);
  /**
     * draft-js-plugin 为每个 plugin 的很多地方都注入了 get 和 set
     * 在 braft-editor 里面 由于 在 useExtension 里面并拿不到 editor 的实例
     * 只能在 prop-interception 的时候 有机会拿到 因此先用一个 对象引用起来 再传递
     */


  var getAndSetState = {
    getEditorState: function getEditorState() {
      throw new Error('can\'t use get state');
    },
    setEditorState: function setEditorState(state) {
      throw new Error("can't use set state ".concat(state));
    }
  };
  return [[{
    type: 'prop-interception',
    interceptor: function interceptor(editorProps, editor) {
      // hack
      // 没有地方可以有 init 的时机，属性拦截器这里会把编辑器的实例传过来
      // 所以在这里初始化插件
      getAndSetState.getEditorState = editor.getValue.bind(editor);
      getAndSetState.setEditorState = editor.setValue.bind(editor);

      if (draftEditorPlugin.initialize) {
        // 这里 mention 插件 只用了 get/setEditor State 所以其他可以不传
        draftEditorPlugin.initialize(getAndSetState);
      } // mention 的 plugin 需要 hack editor 的 onChange
      // 如果有更好的办法请告知


      var hackOnChange = editor.onChange;

      if (hackOnChange) {
        editor.onChange = function (editorState, callback) {
          hackOnChange.call(editor, editorState, callback);

          if (draftEditorPlugin.onChange) {
            draftEditorPlugin.onChange(editorState, getAndSetState);
          }
        };
      } // 应该是 draft-js 和 draft-js-mention-plugin 之间的磨合除了问题
      // mention 需要处理 以下几个键盘事件 但是 draft-js 对这几个事件有特殊处理
      // 仅仅调用了 props 传递进去的 而不会通过 keyBindingFn 调用
      // 所以这里额外处理，并通过 prop-interception 传递给 draftProps
      // bug 可在 https://stackblitz.com/edit/draft-js-mention?file=index.tsx 使用 DraftEditor 复现


      var passSomeKeyEventToKeyBindingFn = function passSomeKeyEventToKeyBindingFn(props) {
        var handleName = ['onUpArrow', 'onRightArrow', 'onDownArrow', 'onLeftArrow', 'onEscape', 'onTab'];
        return handleName.reduce(function (acc, name) {
          var hackHandle = props[name];

          var handler = function handler(event) {
            if (typeof hackHandle === 'function') {
              hackHandle(event);
            }

            draftEditorPlugin.keyBindingFn(event, getAndSetState);
          };

          return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, acc, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, name, handler));
        }, {});
      };

      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, editorProps, {
        draftProps: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, editorProps.draftProps, draftEditorPlugin.getAccessibilityProps(), passSomeKeyEventToKeyBindingFn(editorProps.draftProps || {})),
        keyBindingFn: function keyBindingFn(event) {
          // 先处理前面插件的 keyBindingFn
          // 暂时没有发现 mention 必须优先处理的必要性
          var originHandler = editorProps.keyBindingFn;
          var ret = null;

          if (typeof originHandler === 'function') {
            ret = originHandler(event);
          }

          return ret != null ? ret : draftEditorPlugin.keyBindingFn(event, getAndSetState);
        },
        handleReturn: function handleReturn(event, editorState, editor) {
          var originHandler = editorProps.handleReturn; // 这里 mention 要优于其他的插件处理 回车 事件
          // 因为在 mention 弹出 suggestion 时 有「确认选择」的功能

          if (draftEditorPlugin.handleReturn(event, editorState, getAndSetState) === 'handled') {
            return 'handled';
          }

          return originHandler ? originHandler(event, editorState, editor) : 'not-handled';
        }
      });
    }
  }].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()((draftEditorPlugin.decorators || []).map(function (decorate) {
    return {
      type: 'decorator',
      includeEditors: includeEditors,
      excludeEditors: excludeEditors,
      decorator: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, decorate, {
        component: function component(props) {
          // 这里需要注入 getAndSet 是因为平时 draft-js-plugin 里面 对所有的非自定义类型的装饰器进行了注入
          // 所以这里也要模仿
          // see draft-js-plugins/packages/editor/src/Editor/resolveDecorators.ts
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(decorate.component, _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, props, getAndSetState));
        }
      })
    };
  }))), MentionSuggestions];
});


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MentionSuggestions = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(32);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _draftJs = __webpack_require__(3);

var _escapeRegExp = __webpack_require__(33);

var _escapeRegExp2 = _interopRequireDefault(_escapeRegExp);

var _Entry = __webpack_require__(68);

var _Entry2 = _interopRequireDefault(_Entry);

var _addMention = __webpack_require__(69);

var _addMention2 = _interopRequireDefault(_addMention);

var _decodeOffsetKey = __webpack_require__(71);

var _decodeOffsetKey2 = _interopRequireDefault(_decodeOffsetKey);

var _getSearchText2 = __webpack_require__(34);

var _getSearchText3 = _interopRequireDefault(_getSearchText2);

var _defaultEntryComponent = __webpack_require__(72);

var _defaultEntryComponent2 = _interopRequireDefault(_defaultEntryComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MentionSuggestions = exports.MentionSuggestions = function (_Component) {
  _inherits(MentionSuggestions, _Component);

  function MentionSuggestions() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MentionSuggestions);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MentionSuggestions.__proto__ || Object.getPrototypeOf(MentionSuggestions)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isActive: false,
      focusedOptionIndex: 0
    }, _this.componentDidUpdate = function (prevProps, prevState) {
      if (_this.popover) {
        // In case the list shrinks there should be still an option focused.
        // Note: this might run multiple times and deduct 1 until the condition is
        // not fullfilled anymore.
        var size = _this.props.suggestions.length;
        if (size > 0 && _this.state.focusedOptionIndex >= size) {
          _this.setState({
            focusedOptionIndex: size - 1
          });
        }

        // Note: this is a simple protection for the error when componentDidUpdate
        // try to get new getPortalClientRect, but the key already was deleted by
        // previous action. (right now, it only can happened when set the mention
        // trigger to be multi-characters which not supported anyway!)
        if (!_this.props.store.getAllSearches().has(_this.activeOffsetKey)) {
          return;
        }

        var decoratorRect = _this.props.store.getPortalClientRect(_this.activeOffsetKey);
        var newStyles = _this.props.positionSuggestions({
          decoratorRect: decoratorRect,
          prevProps: prevProps,
          prevState: prevState,
          props: _this.props,
          state: _this.state,
          popover: _this.popover
        });
        Object.keys(newStyles).forEach(function (key) {
          _this.popover.style[key] = newStyles[key];
        });
      }
    }, _this.componentWillUnmount = function () {
      _this.props.callbacks.onChange = undefined;
    }, _this.onEditorStateChange = function (editorState) {
      var searches = _this.props.store.getAllSearches();

      // if no search portal is active there is no need to show the popover
      if (searches.size === 0) {
        return editorState;
      }

      var removeList = function removeList() {
        _this.props.store.resetEscapedSearch();
        _this.closeDropdown();
        return editorState;
      };

      // get the current selection
      var selection = editorState.getSelection();
      var anchorKey = selection.getAnchorKey();
      var anchorOffset = selection.getAnchorOffset();

      // the list should not be visible if a range is selected or the editor has no focus
      if (!selection.isCollapsed() || !selection.getHasFocus()) return removeList();

      // identify the start & end positon of each search-text
      var offsetDetails = searches.map(function (offsetKey) {
        return (0, _decodeOffsetKey2.default)(offsetKey);
      });

      // a leave can be empty when it is removed due e.g. using backspace
      // do not check leaves, use full decorated portal text
      var leaves = offsetDetails.filter(function (_ref2) {
        var blockKey = _ref2.blockKey;
        return blockKey === anchorKey;
      }).map(function (_ref3) {
        var blockKey = _ref3.blockKey,
            decoratorKey = _ref3.decoratorKey;
        return editorState.getBlockTree(blockKey).getIn([decoratorKey]);
      });

      // if all leaves are undefined the popover should be removed
      if (leaves.every(function (leave) {
        return leave === undefined;
      })) {
        return removeList();
      }

      // Checks that the cursor is after the @ character but still somewhere in
      // the word (search term). Setting it to allow the cursor to be left of
      // the @ causes troubles due selection confusion.
      var plainText = editorState.getCurrentContent().getPlainText();
      var selectionIsInsideWord = leaves.filter(function (leave) {
        return leave !== undefined;
      }).map(function (_ref4) {
        var start = _ref4.start,
            end = _ref4.end;
        return start === 0 && anchorOffset === _this.props.mentionTrigger.length && plainText.charAt(anchorOffset) !== _this.props.mentionTrigger && new RegExp(String.raw({ raw: '' + (0, _escapeRegExp2.default)(_this.props.mentionTrigger) }), 'g').test(plainText) && anchorOffset <= end || // @ is the first character
        anchorOffset > start + _this.props.mentionTrigger.length && anchorOffset <= end;
      } // @ is in the text or at the end
      );

      if (selectionIsInsideWord.every(function (isInside) {
        return isInside === false;
      })) return removeList();

      var lastActiveOffsetKey = _this.activeOffsetKey;
      _this.activeOffsetKey = selectionIsInsideWord.filter(function (value) {
        return value === true;
      }).keySeq().first();

      _this.onSearchChange(editorState, selection, _this.activeOffsetKey, lastActiveOffsetKey);

      // make sure the escaped search is reseted in the cursor since the user
      // already switched to another mention search
      if (!_this.props.store.isEscaped(_this.activeOffsetKey)) {
        _this.props.store.resetEscapedSearch();
      }

      // If none of the above triggered to close the window, it's safe to assume
      // the dropdown should be open. This is useful when a user focuses on another
      // input field and then comes back: the dropdown will show again.
      if (!_this.state.isActive && !_this.props.store.isEscaped(_this.activeOffsetKey) && _this.props.suggestions.length > 0) {
        _this.openDropdown();
      }

      // makes sure the focused index is reseted every time a new selection opens
      // or the selection was moved to another mention search
      if (_this.lastSelectionIsInsideWord === undefined || !selectionIsInsideWord.equals(_this.lastSelectionIsInsideWord)) {
        _this.setState({
          focusedOptionIndex: 0
        });
      }

      _this.lastSelectionIsInsideWord = selectionIsInsideWord;

      return editorState;
    }, _this.onSearchChange = function (editorState, selection, activeOffsetKey, lastActiveOffsetKey) {
      var _getSearchText = (0, _getSearchText3.default)(editorState, selection, _this.props.mentionTrigger),
          searchValue = _getSearchText.matchingString;

      if (_this.lastSearchValue !== searchValue || activeOffsetKey !== lastActiveOffsetKey) {
        _this.lastSearchValue = searchValue;
        _this.props.onSearchChange({ value: searchValue });
      }
    }, _this.onDownArrow = function (keyboardEvent) {
      keyboardEvent.preventDefault();
      var newIndex = _this.state.focusedOptionIndex + 1;
      _this.onMentionFocus(newIndex >= _this.props.suggestions.length ? 0 : newIndex);
    }, _this.onTab = function (keyboardEvent) {
      keyboardEvent.preventDefault();
      _this.commitSelection();
    }, _this.onUpArrow = function (keyboardEvent) {
      keyboardEvent.preventDefault();
      if (_this.props.suggestions.length > 0) {
        var newIndex = _this.state.focusedOptionIndex - 1;
        _this.onMentionFocus(newIndex < 0 ? _this.props.suggestions.length - 1 : newIndex);
      }
    }, _this.onEscape = function (keyboardEvent) {
      keyboardEvent.preventDefault();

      var activeOffsetKey = _this.lastSelectionIsInsideWord.filter(function (value) {
        return value === true;
      }).keySeq().first();
      _this.props.store.escapeSearch(activeOffsetKey);
      _this.closeDropdown();

      // to force a re-render of the outer component to change the aria props
      _this.props.store.setEditorState(_this.props.store.getEditorState());
    }, _this.onMentionSelect = function (mention) {
      // Note: This can happen in case a user typed @xxx (invalid mention) and
      // then hit Enter. Then the mention will be undefined.
      if (!mention) {
        return;
      }

      if (_this.props.onAddMention) {
        _this.props.onAddMention(mention);
      }

      _this.closeDropdown();
      var newEditorState = (0, _addMention2.default)(_this.props.store.getEditorState(), mention, _this.props.mentionPrefix, _this.props.mentionTrigger, _this.props.entityMutability);
      _this.props.store.setEditorState(newEditorState);
    }, _this.onMentionFocus = function (index) {
      var descendant = 'mention-option-' + _this.key + '-' + index;
      _this.props.ariaProps.ariaActiveDescendantID = descendant;
      _this.setState({
        focusedOptionIndex: index
      });

      // to force a re-render of the outer component to change the aria props
      _this.props.store.setEditorState(_this.props.store.getEditorState());
    }, _this.commitSelection = function () {
      if (!_this.props.store.getIsOpened()) {
        return 'not-handled';
      }

      _this.onMentionSelect(_this.props.suggestions[_this.state.focusedOptionIndex]);
      return 'handled';
    }, _this.openDropdown = function () {
      // This is a really nasty way of attaching & releasing the key related functions.
      // It assumes that the keyFunctions object will not loose its reference and
      // by this we can replace inner parameters spread over different modules.
      // This better be some registering & unregistering logic. PRs are welcome :)
      _this.props.callbacks.handleReturn = _this.commitSelection;
      _this.props.callbacks.keyBindingFn = function (keyboardEvent) {
        // arrow down
        if (keyboardEvent.keyCode === 40) {
          _this.onDownArrow(keyboardEvent);
        }
        // arrow up
        if (keyboardEvent.keyCode === 38) {
          _this.onUpArrow(keyboardEvent);
        }
        // escape
        if (keyboardEvent.keyCode === 27) {
          _this.onEscape(keyboardEvent);
        }
        // tab
        if (keyboardEvent.keyCode === 9) {
          _this.onTab(keyboardEvent);
        }
      };

      var descendant = 'mention-option-' + _this.key + '-' + _this.state.focusedOptionIndex;
      _this.props.ariaProps.ariaActiveDescendantID = descendant;
      _this.props.ariaProps.ariaOwneeID = 'mentions-list-' + _this.key;
      _this.props.ariaProps.ariaHasPopup = 'true';
      _this.props.ariaProps.ariaExpanded = true;
      _this.setState({
        isActive: true
      });

      if (_this.props.onOpen) {
        _this.props.onOpen();
      }
    }, _this.closeDropdown = function () {
      // make sure none of these callbacks are triggered
      _this.props.callbacks.handleReturn = undefined;
      _this.props.callbacks.keyBindingFn = undefined;
      _this.props.ariaProps.ariaHasPopup = 'false';
      _this.props.ariaProps.ariaExpanded = false;
      _this.props.ariaProps.ariaActiveDescendantID = undefined;
      _this.props.ariaProps.ariaOwneeID = undefined;
      _this.setState({
        isActive: false
      });

      if (_this.props.onClose) {
        _this.props.onClose();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MentionSuggestions, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.key = (0, _draftJs.genKey)();
      this.props.callbacks.onChange = this.onEditorStateChange;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.suggestions.length === 0 && this.state.isActive) {
        this.closeDropdown();
      } else if (nextProps.suggestions.length > 0 && nextProps.suggestions !== this.props.suggestions && !this.state.isActive) {
        this.openDropdown();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.state.isActive) {
        return null;
      }

      var _props = this.props,
          entryComponent = _props.entryComponent,
          _props$popoverCompone = _props.popoverComponent,
          popoverComponent = _props$popoverCompone === undefined ? _react2.default.createElement('div', null) : _props$popoverCompone,
          onClose = _props.onClose,
          onOpen = _props.onOpen,
          onAddMention = _props.onAddMention,
          onSearchChange = _props.onSearchChange,
          suggestions = _props.suggestions,
          ariaProps = _props.ariaProps,
          callbacks = _props.callbacks,
          _props$theme = _props.theme,
          theme = _props$theme === undefined ? {} : _props$theme,
          store = _props.store,
          entityMutability = _props.entityMutability,
          positionSuggestions = _props.positionSuggestions,
          mentionTrigger = _props.mentionTrigger,
          mentionPrefix = _props.mentionPrefix,
          elementProps = _objectWithoutProperties(_props, ['entryComponent', 'popoverComponent', 'onClose', 'onOpen', 'onAddMention', 'onSearchChange', 'suggestions', 'ariaProps', 'callbacks', 'theme', 'store', 'entityMutability', 'positionSuggestions', 'mentionTrigger', 'mentionPrefix']);

      return _react2.default.cloneElement(popoverComponent, _extends({}, elementProps, {
        className: theme.mentionSuggestions,
        role: 'listbox',
        id: 'mentions-list-' + this.key,
        ref: function ref(element) {
          _this2.popover = element;
        }
      }), this.props.suggestions.map(function (mention, index) {
        return _react2.default.createElement(_Entry2.default, {
          key: mention.id != null ? mention.id : mention.name,
          onMentionSelect: _this2.onMentionSelect,
          onMentionFocus: _this2.onMentionFocus,
          isFocused: _this2.state.focusedOptionIndex === index,
          mention: mention,
          index: index,
          id: 'mention-option-' + _this2.key + '-' + index,
          theme: theme,
          searchValue: _this2.lastSearchValue,
          entryComponent: entryComponent || _defaultEntryComponent2.default
        });
      }));
    }
  }]);

  return MentionSuggestions;
}(_react.Component);

MentionSuggestions.propTypes = {
  entityMutability: _propTypes2.default.oneOf(['SEGMENTED', 'IMMUTABLE', 'MUTABLE']),
  entryComponent: _propTypes2.default.func,
  onAddMention: _propTypes2.default.func,
  suggestions: _propTypes2.default.array
};
exports.default = MentionSuggestions;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(56);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(58);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(29),
    arrayMap = __webpack_require__(61),
    isArray = __webpack_require__(62),
    isSymbol = __webpack_require__(63);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(60);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(19)))

/***/ }),
/* 61 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 62 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(64),
    isObjectLike = __webpack_require__(67);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(29),
    getRawTag = __webpack_require__(65),
    objectToString = __webpack_require__(66);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(29);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 66 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 67 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(32);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Entry = function (_Component) {
  _inherits(Entry, _Component);

  function Entry(props) {
    _classCallCheck(this, Entry);

    var _this = _possibleConstructorReturn(this, (Entry.__proto__ || Object.getPrototypeOf(Entry)).call(this, props));

    _this.onMouseUp = function () {
      if (_this.mouseDown) {
        _this.props.onMentionSelect(_this.props.mention);
        _this.mouseDown = false;
      }
    };

    _this.onMouseDown = function (event) {
      // Note: important to avoid a content edit change
      event.preventDefault();

      _this.mouseDown = true;
    };

    _this.onMouseEnter = function () {
      _this.props.onMentionFocus(_this.props.index);
    };

    _this.mouseDown = false;
    return _this;
  }

  _createClass(Entry, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.mouseDown = false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$theme = _props.theme,
          theme = _props$theme === undefined ? {} : _props$theme,
          mention = _props.mention,
          searchValue = _props.searchValue,
          isFocused = _props.isFocused,
          id = _props.id;

      var className = isFocused ? theme.mentionSuggestionsEntryFocused : theme.mentionSuggestionsEntry;
      var EntryComponent = this.props.entryComponent;
      return _react2.default.createElement(EntryComponent, {
        className: className,
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        onMouseEnter: this.onMouseEnter,
        role: 'option',
        id: id,
        'aria-selected': isFocused ? 'true' : null,
        theme: theme,
        mention: mention,
        isFocused: isFocused,
        searchValue: searchValue
      });
    }
  }]);

  return Entry;
}(_react.Component);

Entry.propTypes = {
  entryComponent: _propTypes2.default.any.isRequired,
  searchValue: _propTypes2.default.string,
  onMentionSelect: _propTypes2.default.func
};
exports.default = Entry;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _draftJs = __webpack_require__(3);

var _getSearchText2 = __webpack_require__(34);

var _getSearchText3 = _interopRequireDefault(_getSearchText2);

var _getTypeByTrigger = __webpack_require__(35);

var _getTypeByTrigger2 = _interopRequireDefault(_getTypeByTrigger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addMention = function addMention(editorState, mention, mentionPrefix, mentionTrigger, entityMutability) {
  var contentStateWithEntity = editorState.getCurrentContent().createEntity((0, _getTypeByTrigger2.default)(mentionTrigger), entityMutability, {
    mention: mention
  });
  var entityKey = contentStateWithEntity.getLastCreatedEntityKey();

  var currentSelectionState = editorState.getSelection();

  var _getSearchText = (0, _getSearchText3.default)(editorState, currentSelectionState, mentionTrigger),
      begin = _getSearchText.begin,
      end = _getSearchText.end;

  // get selection of the @mention search text


  var mentionTextSelection = currentSelectionState.merge({
    anchorOffset: begin,
    focusOffset: end
  });

  var mentionReplacedContent = _draftJs.Modifier.replaceText(editorState.getCurrentContent(), mentionTextSelection, '' + mentionPrefix + mention.name, null, // no inline style needed
  entityKey);

  // If the mention is inserted at the end, a space is appended right after for
  // a smooth writing experience.
  var blockKey = mentionTextSelection.getAnchorKey();
  var blockSize = editorState.getCurrentContent().getBlockForKey(blockKey).getLength();
  if (blockSize === end) {
    mentionReplacedContent = _draftJs.Modifier.insertText(mentionReplacedContent, mentionReplacedContent.getSelectionAfter(), ' ');
  }

  var newEditorState = _draftJs.EditorState.push(editorState, mentionReplacedContent, 'insert-mention');
  return _draftJs.EditorState.forceSelection(newEditorState, mentionReplacedContent.getSelectionAfter());
};

exports.default = addMention;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Return tail end of the string matching trigger upto the position.
 */
exports.default = function (blockText, position, trigger) {
  var str = blockText.substr(0, position);
  var begin = trigger.length === 0 ? 0 : str.lastIndexOf(trigger);
  var matchingString = trigger.length === 0 ? str : str.slice(begin + trigger.length);
  var end = str.length;

  return {
    begin: begin,
    end: end,
    matchingString: matchingString
  };
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var decodeOffsetKey = function decodeOffsetKey(offsetKey) {
  var _offsetKey$split = offsetKey.split('-'),
      _offsetKey$split2 = _slicedToArray(_offsetKey$split, 3),
      blockKey = _offsetKey$split2[0],
      decoratorKey = _offsetKey$split2[1],
      leafKey = _offsetKey$split2[2];

  return {
    blockKey: blockKey,
    decoratorKey: parseInt(decoratorKey, 10),
    leafKey: parseInt(leafKey, 10)
  };
};

exports.default = decodeOffsetKey;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Avatar = __webpack_require__(73);

var _Avatar2 = _interopRequireDefault(_Avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultEntryComponent = function defaultEntryComponent(props) {
  var mention = props.mention,
      theme = props.theme,
      isFocused = props.isFocused,
      searchValue = props.searchValue,
      parentProps = _objectWithoutProperties(props, ['mention', 'theme', 'isFocused', 'searchValue']);

  return _react2.default.createElement(
    'div',
    parentProps,
    _react2.default.createElement(_Avatar2.default, { mention: mention, theme: theme }),
    _react2.default.createElement(
      'span',
      { className: theme.mentionSuggestionsEntryText },
      mention.name
    )
  );
};

exports.default = defaultEntryComponent;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Avatar = function Avatar(_ref) {
  var mention = _ref.mention,
      _ref$theme = _ref.theme,
      theme = _ref$theme === undefined ? {} : _ref$theme;

  if (mention.avatar) {
    return _react2.default.createElement("img", {
      src: mention.avatar,
      className: theme.mentionSuggestionsEntryAvatar,
      role: "presentation"
    });
  }

  return null;
};

exports.default = Avatar;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _clsx = __webpack_require__(75);

var _clsx2 = _interopRequireDefault(_clsx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MentionLink = function MentionLink(_ref) {
  var mention = _ref.mention,
      children = _ref.children,
      className = _ref.className;
  return _react2.default.createElement(
    'a',
    { href: mention.link, className: className, spellCheck: false },
    children
  );
};

var MentionText = function MentionText(_ref2) {
  var children = _ref2.children,
      className = _ref2.className;
  return _react2.default.createElement(
    'span',
    { className: className, spellCheck: false },
    children
  );
};

var Mention = function Mention(props) {
  var entityKey = props.entityKey,
      _props$theme = props.theme,
      theme = _props$theme === undefined ? {} : _props$theme,
      mentionComponent = props.mentionComponent,
      children = props.children,
      decoratedText = props.decoratedText,
      className = props.className,
      contentState = props.contentState;


  var combinedClassName = (0, _clsx2.default)(theme.mention, className);
  var mention = contentState.getEntity(entityKey).getData().mention;

  var Component = mentionComponent || (mention.link ? MentionLink : MentionText);

  return _react2.default.createElement(
    Component,
    {
      entityKey: entityKey,
      mention: mention,
      theme: theme,
      className: combinedClassName,
      decoratedText: decoratedText
    },
    children
  );
};

exports.default = Mention;

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x
			}
		}
	}
	return str;
});


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MentionSuggestionsPortal = function (_Component) {
  _inherits(MentionSuggestionsPortal, _Component);

  function MentionSuggestionsPortal(props) {
    _classCallCheck(this, MentionSuggestionsPortal);

    // Note: this is a workaround for an obscure issue: https://github.com/draft-js-plugins/draft-js-plugins/pull/667/files
    // Ideally we can remove this in the future.
    var _this = _possibleConstructorReturn(this, (MentionSuggestionsPortal.__proto__ || Object.getPrototypeOf(MentionSuggestionsPortal)).call(this, props));

    _this.searchPortalRef = function (element) {
      _this.searchPortal = element;
    };
    return _this;
  }

  // When inputting Japanese characters (or any complex alphabet which requires
  // hitting enter to commit the characters), that action was causing a race
  // condition when we used componentWillMount. By using componentDidMount
  // instead of componentWillMount, the component will unmount unregister and
  // then properly mount and register after. Prior to this change,
  // componentWillMount would not fire after componentWillUnmount even though it
  // was still in the DOM, so it wasn't re-registering the offsetkey.


  _createClass(MentionSuggestionsPortal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.store.register(this.props.offsetKey);
      this.props.store.setIsOpened(true);
      this.updatePortalClientRect(this.props);

      // trigger a re-render so the MentionSuggestions becomes active
      this.props.setEditorState(this.props.getEditorState());
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.updatePortalClientRect(nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.store.unregister(this.props.offsetKey);
      this.props.store.setIsOpened(false);
    }
  }, {
    key: 'updatePortalClientRect',
    value: function updatePortalClientRect(props) {
      var _this2 = this;

      this.props.store.updatePortalClientRect(props.offsetKey, function () {
        return _this2.searchPortal.getBoundingClientRect();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'span',
        { className: this.key, ref: this.searchPortalRef },
        this.props.children
      );
    }
  }]);

  return MentionSuggestionsPortal;
}(_react.Component);

exports.default = MentionSuggestionsPortal;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = '[' + '\\w-' +
// Latin-1 Supplement (letters only) - https://en.wikipedia.org/wiki/List_of_Unicode_characters#Latin-1_Supplement
'\xC0-\xD6' + '\xD8-\xF6' + '\xF8-\xFF' +
// Latin Extended-A (without deprecated character) - https://en.wikipedia.org/wiki/List_of_Unicode_characters#Latin_Extended-A
'\u0100-\u0148' + '\u014A-\u017F' +
// Cyrillic symbols: \u0410-\u044F - https://en.wikipedia.org/wiki/Cyrillic_script_in_Unicode
'\u0410-\u044F' +
// hiragana (japanese): \u3040-\u309F - https://gist.github.com/ryanmcgrath/982242#file-japaneseregex-js
'\u3040-\u309F' +
// katakana (japanese): \u30A0-\u30FF - https://gist.github.com/ryanmcgrath/982242#file-japaneseregex-js
'\u30A0-\u30FF' +
// For an advanced explaination about Hangul see https://github.com/draft-js-plugins/draft-js-plugins/pull/480#issuecomment-254055437
// Hangul Jamo (korean): \u3130-\u318F - https://en.wikipedia.org/wiki/Korean_language_and_computers#Hangul_in_Unicode
// Hangul Syllables (korean): \uAC00-\uD7A3 - https://en.wikipedia.org/wiki/Korean_language_and_computers#Hangul_in_Unicode
'\u3130-\u318F' + '\uAC00-\uD7A3' +
// common chinese symbols: \u4e00-\u9eff - http://stackoverflow.com/a/1366113/837709
'\u4E00-\u9EFF' + ']*';

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getTypeByTrigger = __webpack_require__(35);

var _getTypeByTrigger2 = _interopRequireDefault(_getTypeByTrigger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var findMentionEntities = function findMentionEntities(trigger) {
  return function (contentBlock, callback, contentState) {
    contentBlock.findEntityRanges(function (character) {
      var entityKey = character.getEntity();
      return entityKey !== null && contentState.getEntity(entityKey).getType() === (0, _getTypeByTrigger2.default)(trigger);
    }, callback);
  };
};

exports.default = findMentionEntities;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _escapeRegExp = __webpack_require__(33);

var _escapeRegExp2 = _interopRequireDefault(_escapeRegExp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var findWithRegex = function findWithRegex(regex, contentBlock, callback) {
  var contentBlockText = contentBlock.getText();

  // exclude entities, when matching
  contentBlock.findEntityRanges(function (character) {
    return !character.getEntity();
  }, function (nonEntityStart, nonEntityEnd) {
    var text = contentBlockText.slice(nonEntityStart, nonEntityEnd);
    var matchArr = void 0;
    var start = void 0;
    var prevLastIndex = regex.lastIndex;

    // Go through all matches in the text and return the indices to the callback
    // Break the loop if lastIndex is not changed
    while ((matchArr = regex.exec(text)) !== null) {
      // eslint-disable-line
      if (regex.lastIndex === prevLastIndex) {
        break;
      }
      prevLastIndex = regex.lastIndex;
      start = nonEntityStart + matchArr.index;
      callback(start, start + matchArr[0].length);
    }
  });
};

exports.default = function (trigger, supportWhiteSpace, regExp) {
  //eslint-disable-line
  var MENTION_REGEX = supportWhiteSpace ? new RegExp((0, _escapeRegExp2.default)(trigger) + '(' + regExp + '|\\s){0,}', 'g') : new RegExp('(\\s|^)' + (0, _escapeRegExp2.default)(trigger) + regExp, 'g');

  return function (contentBlock, callback) {
    findWithRegex(MENTION_REGEX, contentBlock, callback);
  };
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Get the first 5 suggestions that match

var defaultSuggestionsFilter = function defaultSuggestionsFilter(searchValue, suggestions) {
  var value = searchValue.toLowerCase();
  var filteredSuggestions = suggestions.filter(function (suggestion) {
    return !value || suggestion.name.toLowerCase().indexOf(value) > -1;
  });
  var length = filteredSuggestions.length < 5 ? filteredSuggestions.length : 5;
  return filteredSuggestions.slice(0, length);
};

exports.default = defaultSuggestionsFilter;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getRelativeParent = function getRelativeParent(element) {
  if (!element) {
    return null;
  }

  var position = window.getComputedStyle(element).getPropertyValue('position');
  if (position !== 'static') {
    return element;
  }

  return getRelativeParent(element.parentElement);
};

var positionSuggestions = function positionSuggestions(_ref) {
  var decoratorRect = _ref.decoratorRect,
      popover = _ref.popover,
      state = _ref.state,
      props = _ref.props;

  var relativeParent = getRelativeParent(popover.parentElement);
  var relativeRect = {};

  if (relativeParent) {
    relativeRect.scrollLeft = relativeParent.scrollLeft;
    relativeRect.scrollTop = relativeParent.scrollTop;

    var relativeParentRect = relativeParent.getBoundingClientRect();
    relativeRect.left = decoratorRect.left - relativeParentRect.left;
    relativeRect.top = decoratorRect.bottom - relativeParentRect.top;
  } else {
    relativeRect.scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    relativeRect.scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    relativeRect.top = decoratorRect.bottom;
    relativeRect.left = decoratorRect.left;
  }

  var left = relativeRect.left + relativeRect.scrollLeft;
  var top = relativeRect.top + relativeRect.scrollTop;

  var transform = void 0;
  var transition = void 0;
  if (state.isActive) {
    if (props.suggestions.length > 0) {
      transform = 'scale(1)';
      transition = 'all 0.25s cubic-bezier(.3,1.2,.2,1)';
    } else {
      transform = 'scale(0)';
      transition = 'all 0.35s cubic-bezier(.3,1,.2,1)';
    }
  }

  return {
    left: left + 'px',
    top: top + 'px',
    transform: transform,
    transformOrigin: '1em 0%',
    transition: transition
  };
};

exports.default = positionSuggestions;

/***/ })
/******/ ]);
});