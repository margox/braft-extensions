(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("draft-js"), require("immutable"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["draft-js", "immutable", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("draft-js"), require("immutable"), require("react")) : factory(root["draft-js"], root["immutable"], root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function(__WEBPACK_EXTERNAL_MODULE__379__, __WEBPACK_EXTERNAL_MODULE__856__, __WEBPACK_EXTERNAL_MODULE__297__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 772:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(331);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

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
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 615:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(772)();
}


/***/ }),

/***/ 331:
/***/ ((module) => {

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

/***/ 335:
/***/ ((module) => {

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    var it;
    if (hasMap && (a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }

    if (hasSet && (a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React/Preact
    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements

        continue;
      }

      // all other properties should be traversed as usual
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (((error.message || '').match(/stack|recursion/i))) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),

/***/ 379:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__379__;

/***/ }),

/***/ 856:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__856__;

/***/ }),

/***/ 297:
/***/ ((module) => {

"use strict";
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ mention),
  "defaultSuggestionsFilter": () => (/* reexport */ defaultSuggestionsFilter)
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
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
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
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
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
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "immutable"
var external_immutable_ = __webpack_require__(856);
;// CONCATENATED MODULE: ../node_modules/clsx/dist/clsx.m.js
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

/* harmony default export */ function clsx_m() {
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
}

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__(615);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: external "draft-js"
var external_draft_js_ = __webpack_require__(379);
;// CONCATENATED MODULE: ../node_modules/lodash-es/_freeGlobal.js
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ const _freeGlobal = (freeGlobal);

;// CONCATENATED MODULE: ../node_modules/lodash-es/_root.js


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

/* harmony default export */ const _root = (root);

;// CONCATENATED MODULE: ../node_modules/lodash-es/_Symbol.js


/** Built-in value references. */
var _Symbol_Symbol = _root.Symbol;

/* harmony default export */ const _Symbol = (_Symbol_Symbol);

;// CONCATENATED MODULE: ../node_modules/lodash-es/_arrayMap.js
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

/* harmony default export */ const _arrayMap = (arrayMap);

;// CONCATENATED MODULE: ../node_modules/lodash-es/isArray.js
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

/* harmony default export */ const lodash_es_isArray = (isArray);

;// CONCATENATED MODULE: ../node_modules/lodash-es/_getRawTag.js


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _getRawTag_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = _getRawTag_hasOwnProperty.call(value, symToStringTag),
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

/* harmony default export */ const _getRawTag = (getRawTag);

;// CONCATENATED MODULE: ../node_modules/lodash-es/_objectToString.js
/** Used for built-in method references. */
var _objectToString_objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var _objectToString_nativeObjectToString = _objectToString_objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return _objectToString_nativeObjectToString.call(value);
}

/* harmony default export */ const _objectToString = (objectToString);

;// CONCATENATED MODULE: ../node_modules/lodash-es/_baseGetTag.js




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var _baseGetTag_symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

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
  return (_baseGetTag_symToStringTag && _baseGetTag_symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

/* harmony default export */ const _baseGetTag = (baseGetTag);

;// CONCATENATED MODULE: ../node_modules/lodash-es/isObjectLike.js
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

/* harmony default export */ const lodash_es_isObjectLike = (isObjectLike);

;// CONCATENATED MODULE: ../node_modules/lodash-es/isSymbol.js



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
    (lodash_es_isObjectLike(value) && _baseGetTag(value) == symbolTag);
}

/* harmony default export */ const lodash_es_isSymbol = (isSymbol);

;// CONCATENATED MODULE: ../node_modules/lodash-es/_baseToString.js





/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
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
  if (lodash_es_isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (lodash_es_isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/* harmony default export */ const _baseToString = (baseToString);

;// CONCATENATED MODULE: ../node_modules/lodash-es/toString.js


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
function toString_toString(value) {
  return value == null ? '' : _baseToString(value);
}

/* harmony default export */ const lodash_es_toString = (toString_toString);

;// CONCATENATED MODULE: ../node_modules/lodash-es/escapeRegExp.js


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
  string = lodash_es_toString(string);
  return (string && reHasRegExpChar.test(string))
    ? string.replace(reRegExpChar, '\\$&')
    : string;
}

/* harmony default export */ const lodash_es_escapeRegExp = (escapeRegExp);

;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js


function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}


;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js




function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js






 // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement);
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
 // Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getParentNode.js



function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js




/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/isTableElement.js

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js







function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/enums.js
var enums_top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [enums_top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var enums_placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/orderModifiers.js
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/createPopper.js














var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (false) { var _getComputedStyle, marginTop, marginRight, marginBottom, marginLeft, flipModifier, modifiers; }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (false) {}

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (false) {}

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (false) {}

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper = /*#__PURE__*/(/* unused pure expression or super */ null && (popperGenerator())); // eslint-disable-next-line import/no-unused-modules


;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/modifiers/eventListeners.js
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const eventListeners = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
});
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/getBasePlacement.js

function getBasePlacement(placement) {
  return placement.split('-')[0];
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split('-')[1];
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/computeOffsets.js




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case enums_top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/modifiers/popperOffsets.js


function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_popperOffsets = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
});
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/math.js
var math_max = Math.max;
var math_min = Math.min;
var round = Math.round;
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/modifiers/computeStyles.js






 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(round(x * dpr) / dpr) || 0,
    y: round(round(y * dpr) / dpr) || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = enums_top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle(offsetParent).position !== 'static') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === enums_top) {
      sideY = bottom; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left) {
      sideX = right; // $FlowFixMe[prop-missing]

      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (false) { var transitionProperty; }

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_computeStyles = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/modifiers/applyStyles.js

 // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function applyStyles_effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_applyStyles = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: applyStyles_effect,
  requires: ['computeStyles']
});
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/modifiers/offset.js


function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, enums_top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = enums_placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_offset = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
});
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var getOppositeVariationPlacement_hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return getOppositeVariationPlacement_hash[matched];
  });
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js



function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js




 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = math_max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = math_max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += math_max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/contains.js

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js















function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = math_max(rect.top, accRect.top);
    accRect.right = math_min(rect.right, accRect.right);
    accRect.bottom = math_min(rect.bottom, accRect.bottom);
    accRect.left = math_max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/mergePaddingObject.js

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/detectOverflow.js








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(referenceElement);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [enums_top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js




function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? enums_placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if (false) {}
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/modifiers/flip.js






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [enums_top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : enums_top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_flip = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/utils/within.js

function within(min, value, max) {
  return math_max(min, math_min(value, max));
}
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/modifiers/preventOverflow.js












function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? enums_top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      var preventedOffset = within(tether ? math_min(min, tetherMin) : min, offset, tether ? math_max(max, tetherMax) : max);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? enums_top : left;

      var _altSide = mainAxis === 'x' ? bottom : right;

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = within(tether ? math_min(_min, tetherMin) : _min, _offset, tether ? math_max(_max, tetherMax) : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_preventOverflow = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/modifiers/arrow.js









 // eslint-disable-next-line import/no-unused-modules

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? enums_top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function arrow_effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (false) {}

  if (!contains(state.elements.popper, arrowElement)) {
    if (false) {}

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_arrow = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: arrow_effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/modifiers/hide.js



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [enums_top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const modifiers_hide = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});
;// CONCATENATED MODULE: ../node_modules/@popperjs/core/lib/popper.js










var defaultModifiers = [eventListeners, modifiers_popperOffsets, modifiers_computeStyles, modifiers_applyStyles, modifiers_offset, modifiers_flip, modifiers_preventOverflow, modifiers_arrow, modifiers_hide];
var popper_createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules


// EXTERNAL MODULE: ../node_modules/react-fast-compare/index.js
var react_fast_compare = __webpack_require__(335);
var react_fast_compare_default = /*#__PURE__*/__webpack_require__.n(react_fast_compare);
;// CONCATENATED MODULE: ../node_modules/react-popper/lib/esm/utils.js


/**
 * Takes an argument and if it's an array, returns the first item in the array,
 * otherwise returns the argument. Used for Preact compatibility.
 */
var unwrapArray = function unwrapArray(arg) {
  return Array.isArray(arg) ? arg[0] : arg;
};
/**
 * Takes a maybe-undefined function and arbitrary args and invokes the function
 * only if it is defined.
 */

var safeInvoke = function safeInvoke(fn) {
  if (typeof fn === 'function') {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(void 0, args);
  }
};
/**
 * Sets a ref using either a ref callback or a ref object
 */

var setRef = function setRef(ref, node) {
  // if its a function call it
  if (typeof ref === 'function') {
    return safeInvoke(ref, node);
  } // otherwise we should treat it as a ref object
  else if (ref != null) {
      ref.current = node;
    }
};
/**
 * Simple ponyfill for Object.fromEntries
 */

var fromEntries = function fromEntries(entries) {
  return entries.reduce(function (acc, _ref) {
    var key = _ref[0],
        value = _ref[1];
    acc[key] = value;
    return acc;
  }, {});
};
/**
 * Small wrapper around `useLayoutEffect` to get rid of the warning on SSR envs
 */

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && window.document && window.document.createElement ? external_react_.useLayoutEffect : external_react_.useEffect;
;// CONCATENATED MODULE: ../node_modules/react-popper/lib/esm/usePopper.js




var EMPTY_MODIFIERS = [];
var usePopper = function usePopper(referenceElement, popperElement, options) {
  if (options === void 0) {
    options = {};
  }

  var prevOptions = external_react_.useRef(null);
  var optionsWithDefaults = {
    onFirstUpdate: options.onFirstUpdate,
    placement: options.placement || 'bottom',
    strategy: options.strategy || 'absolute',
    modifiers: options.modifiers || EMPTY_MODIFIERS
  };

  var _React$useState = external_react_.useState({
    styles: {
      popper: {
        position: optionsWithDefaults.strategy,
        left: '0',
        top: '0'
      },
      arrow: {
        position: 'absolute'
      }
    },
    attributes: {}
  }),
      state = _React$useState[0],
      setState = _React$useState[1];

  var updateStateModifier = external_react_.useMemo(function () {
    return {
      name: 'updateState',
      enabled: true,
      phase: 'write',
      fn: function fn(_ref) {
        var state = _ref.state;
        var elements = Object.keys(state.elements);
        setState({
          styles: fromEntries(elements.map(function (element) {
            return [element, state.styles[element] || {}];
          })),
          attributes: fromEntries(elements.map(function (element) {
            return [element, state.attributes[element]];
          }))
        });
      },
      requires: ['computeStyles']
    };
  }, []);
  var popperOptions = external_react_.useMemo(function () {
    var newOptions = {
      onFirstUpdate: optionsWithDefaults.onFirstUpdate,
      placement: optionsWithDefaults.placement,
      strategy: optionsWithDefaults.strategy,
      modifiers: [].concat(optionsWithDefaults.modifiers, [updateStateModifier, {
        name: 'applyStyles',
        enabled: false
      }])
    };

    if (react_fast_compare_default()(prevOptions.current, newOptions)) {
      return prevOptions.current || newOptions;
    } else {
      prevOptions.current = newOptions;
      return newOptions;
    }
  }, [optionsWithDefaults.onFirstUpdate, optionsWithDefaults.placement, optionsWithDefaults.strategy, optionsWithDefaults.modifiers, updateStateModifier]);
  var popperInstanceRef = external_react_.useRef();
  useIsomorphicLayoutEffect(function () {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.setOptions(popperOptions);
    }
  }, [popperOptions]);
  useIsomorphicLayoutEffect(function () {
    if (referenceElement == null || popperElement == null) {
      return;
    }

    var createPopper = options.createPopper || popper_createPopper;
    var popperInstance = createPopper(referenceElement, popperElement, popperOptions);
    popperInstanceRef.current = popperInstance;
    return function () {
      popperInstance.destroy();
      popperInstanceRef.current = null;
    };
  }, [referenceElement, popperElement, options.createPopper]);
  return {
    state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
    styles: state.styles,
    attributes: state.attributes,
    update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
    forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null
  };
};
;// CONCATENATED MODULE: ../node_modules/lodash-es/_trimmedEndIndex.js
/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

/* harmony default export */ const _trimmedEndIndex = (trimmedEndIndex);

;// CONCATENATED MODULE: ../node_modules/lodash-es/_baseTrim.js


/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, _trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

/* harmony default export */ const _baseTrim = (baseTrim);

;// CONCATENATED MODULE: ../node_modules/lodash-es/isObject.js
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/* harmony default export */ const lodash_es_isObject = (isObject);

;// CONCATENATED MODULE: ../node_modules/lodash-es/toNumber.js




/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (lodash_es_isSymbol(value)) {
    return NAN;
  }
  if (lodash_es_isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = lodash_es_isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = _baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/* harmony default export */ const lodash_es_toNumber = (toNumber);

;// CONCATENATED MODULE: ../node_modules/lodash-es/toFinite.js


/** Used as references for various `Number` constants. */
var toFinite_INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = lodash_es_toNumber(value);
  if (value === toFinite_INFINITY || value === -toFinite_INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/* harmony default export */ const lodash_es_toFinite = (toFinite);

;// CONCATENATED MODULE: ../node_modules/lodash-es/toInteger.js


/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = lodash_es_toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/* harmony default export */ const lodash_es_toInteger = (toInteger);

;// CONCATENATED MODULE: ../node_modules/lodash-es/before.js


/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', _.before(5, addContactToList));
 * // => Allows adding up to 4 contacts to the list.
 */
function before(n, func) {
  var result;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  n = lodash_es_toInteger(n);
  return function() {
    if (--n > 0) {
      result = func.apply(this, arguments);
    }
    if (n <= 1) {
      func = undefined;
    }
    return result;
  };
}

/* harmony default export */ const lodash_es_before = (before);

;// CONCATENATED MODULE: ../node_modules/lodash-es/once.js


/**
 * Creates a function that is restricted to invoking `func` once. Repeat calls
 * to the function return the value of the first invocation. The `func` is
 * invoked with the `this` binding and arguments of the created function.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * var initialize = _.once(createApplication);
 * initialize();
 * initialize();
 * // => `createApplication` is invoked once
 */
function once(func) {
  return lodash_es_before(2, func);
}

/* harmony default export */ const lodash_es_once = (once);

;// CONCATENATED MODULE: ../node_modules/@draft-js-plugins/mention/lib/index.esm.js









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

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function index_esm_objectWithoutPropertiesLoose(source, excluded) {
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

function index_esm_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return index_esm_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return index_esm_arrayLikeToArray(o, minLen);
}

function index_esm_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = index_esm_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function MentionLink(_ref) {
  var mention = _ref.mention,
      children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/external_react_default().createElement("a", {
    href: mention.link,
    className: className,
    spellCheck: false,
    "data-testid": "mentionLink"
  }, children);
}

function MentionText(_ref2) {
  var children = _ref2.children,
      className = _ref2.className;
  return /*#__PURE__*/external_react_default().createElement("span", {
    className: className,
    spellCheck: false,
    "data-testid": "mentionText"
  }, children);
}

function Mention(props) {
  var entityKey = props.entityKey,
      _props$theme = props.theme,
      theme = _props$theme === void 0 ? {} : _props$theme,
      mentionComponent = props.mentionComponent,
      children = props.children,
      decoratedText = props.decoratedText,
      className = props.className,
      contentState = props.contentState;
  var combinedClassName = clsx_m(theme.mention, className);
  var mention = contentState.getEntity(entityKey).getData().mention;
  var Component = mentionComponent || (mention.link ? MentionLink : MentionText);
  return /*#__PURE__*/external_react_default().createElement(Component, {
    entityKey: entityKey,
    mention: mention,
    theme: theme,
    className: combinedClassName,
    decoratedText: decoratedText
  }, children);
}

var Entry = function Entry(props) {
  var mouseDown = (0,external_react_.useRef)(false);
  (0,external_react_.useEffect)(function () {
    mouseDown.current = false;
  });

  var onMouseUp = function onMouseUp() {
    if (mouseDown.current) {
      props.onMentionSelect(props.mention);
      mouseDown.current = false;
    }
  };

  var onMouseDown = function onMouseDown(event) {
    // Note: important to avoid a content edit change
    event.preventDefault();
    mouseDown.current = true;
  };

  var onMouseEnter = function onMouseEnter() {
    props.onMentionFocus(props.index);
  };

  var _props$theme = props.theme,
      theme = _props$theme === void 0 ? {} : _props$theme,
      mention = props.mention,
      searchValue = props.searchValue,
      isFocused = props.isFocused,
      id = props.id;
  var className = isFocused ? theme.mentionSuggestionsEntryFocused : theme.mentionSuggestionsEntry;
  var EntryComponent = props.entryComponent;
  return /*#__PURE__*/external_react_default().createElement(EntryComponent, {
    className: className,
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
    onMouseEnter: onMouseEnter,
    role: "option",
    id: id,
    "aria-selected": isFocused ? 'true' : undefined,
    theme: theme,
    mention: mention,
    isFocused: isFocused,
    searchValue: searchValue
  });
};

Entry.propTypes = {
  entryComponent: (prop_types_default()).any.isRequired,
  searchValue: (prop_types_default()).string,
  // eslint-disable-next-line react/no-unused-prop-types
  onMentionSelect: (prop_types_default()).func
};

/**
 * Return tail end of the string matching trigger upto the position.
 */
function getSearchTextAt(blockText, position, triggers) {
  var str = blockText.substr(0, position);
  var triggerPattern = triggers.map(function (trigger) {
    return lodash_es_escapeRegExp(trigger);
  }).join('|');
  var TRIGGER_REGEX = new RegExp("(\\s|^)(" + triggerPattern + ")", 'g');
  var matches = str.matchAll(TRIGGER_REGEX);
  var triggerStartIndex = 0;
  var valueStartIndex = 0;

  for (var _iterator = _createForOfIteratorHelperLoose(matches), _step; !(_step = _iterator()).done;) {
    var match = _step.value;
    var spaceLen = match[1].length;
    var matchLen = match[2].length;
    triggerStartIndex = (match.index || 0) + spaceLen;
    valueStartIndex = triggerStartIndex + matchLen;
  }

  var matchingString = str.slice(valueStartIndex);
  var end = str.length;
  return {
    begin: triggerStartIndex,
    end: end,
    matchingString: matchingString
  };
}

var getSearchText = (function (editorState, selection, triggers) {
  var anchorKey = selection.getAnchorKey();
  var anchorOffset = selection.getAnchorOffset();
  var currentContent = editorState.getCurrentContent();
  var currentBlock = currentContent.getBlockForKey(anchorKey);
  var blockText = currentBlock.getText();
  return getSearchTextAt(blockText, anchorOffset, triggers);
});

function getTypeByTrigger(trigger) {
  return trigger === '@' ? 'mention' : trigger + "mention";
}

function addMention(editorState, mention, mentionPrefix, mentionTrigger, entityMutability) {
  var contentStateWithEntity = editorState.getCurrentContent().createEntity(getTypeByTrigger(mentionTrigger), entityMutability, {
    mention: mention
  });
  var entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  var currentSelectionState = editorState.getSelection();

  var _getSearchText = getSearchText(editorState, currentSelectionState, [mentionTrigger]),
      begin = _getSearchText.begin,
      end = _getSearchText.end; // get selection of the @mention search text


  var mentionTextSelection = currentSelectionState.merge({
    anchorOffset: begin,
    focusOffset: end
  });
  var mentionReplacedContent = external_draft_js_.Modifier.replaceText(editorState.getCurrentContent(), mentionTextSelection, "" + mentionPrefix + mention.name, undefined, // no inline style needed
  entityKey); // If the mention is inserted at the end, a space is appended right after for
  // a smooth writing experience.

  var blockKey = mentionTextSelection.getAnchorKey();
  var blockSize = editorState.getCurrentContent().getBlockForKey(blockKey).getLength();

  if (blockSize === end) {
    mentionReplacedContent = external_draft_js_.Modifier.insertText(mentionReplacedContent, mentionReplacedContent.getSelectionAfter(), ' ');
  }

  var newEditorState = external_draft_js_.EditorState.push(editorState, mentionReplacedContent, 'insert-fragment');
  return external_draft_js_.EditorState.forceSelection(newEditorState, mentionReplacedContent.getSelectionAfter());
}

function Avatar(_ref) {
  var mention = _ref.mention,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? {} : _ref$theme;

  if (mention.avatar) {
    return /*#__PURE__*/external_react_default().createElement("img", {
      src: mention.avatar,
      className: theme.mentionSuggestionsEntryAvatar,
      role: "presentation"
    });
  }

  return null;
}

function DefaultEntryComponent(props) {
  var mention = props.mention,
      theme = props.theme;
      props.isFocused;
      props.searchValue;
      var parentProps = index_esm_objectWithoutPropertiesLoose(props, ["mention", "theme", "isFocused", "searchValue"]);

  return /*#__PURE__*/external_react_default().createElement("div", parentProps, /*#__PURE__*/external_react_default().createElement(Avatar, {
    mention: mention,
    theme: theme
  }), /*#__PURE__*/external_react_default().createElement("span", {
    className: theme == null ? void 0 : theme.mentionSuggestionsEntryText
  }, mention.name));
}

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

function positionSuggestions(_ref) {
  var decoratorRect = _ref.decoratorRect,
      popover = _ref.popover,
      props = _ref.props;
  var relativeParent = getRelativeParent(popover.parentElement);
  var relativeRect;

  if (relativeParent) {
    var relativeParentRect = relativeParent.getBoundingClientRect();
    relativeRect = {
      scrollLeft: relativeParent.scrollLeft,
      scrollTop: relativeParent.scrollTop,
      left: decoratorRect.left - relativeParentRect.left,
      top: decoratorRect.bottom - relativeParentRect.top
    };
  } else {
    relativeRect = {
      scrollTop: window.pageYOffset || document.documentElement.scrollTop,
      scrollLeft: window.pageXOffset || document.documentElement.scrollLeft,
      top: decoratorRect.bottom,
      left: decoratorRect.left
    };
  }

  var left = relativeRect.left + relativeRect.scrollLeft;
  var top = relativeRect.top + relativeRect.scrollTop;
  var transform;
  var transition;

  if (props.open) {
    if (props.suggestions.length > 0) {
      transform = 'scale(1)';
      transition = 'all 0.25s cubic-bezier(.3,1.2,.2,1)';
    } else {
      transform = 'scale(0)';
      transition = 'all 0.35s cubic-bezier(.3,1,.2,1)';
    }
  }

  return {
    left: left + "px",
    top: top + "px",
    transform: transform,
    transformOrigin: '1em 0%',
    transition: transition
  };
}

var decodeOffsetKey = function decodeOffsetKey(offsetKey) {
  var _offsetKey$split = offsetKey.split('-'),
      blockKey = _offsetKey$split[0],
      decoratorKey = _offsetKey$split[1],
      leafKey = _offsetKey$split[2];

  return {
    blockKey: blockKey,
    decoratorKey: parseInt(decoratorKey, 10),
    leafKey: parseInt(leafKey, 10)
  };
};

function filterUndefineds(value) {
  return value !== undefined;
}

function getTriggerForMention(editorState, searches, mentionTriggers) {
  // get the current selection
  var selection = editorState.getSelection();
  var anchorKey = selection.getAnchorKey();
  var anchorOffset = selection.getAnchorOffset(); // the list should not be visible if a range is selected or the editor has no focus

  if (!selection.isCollapsed() || !selection.getHasFocus()) {
    return null;
  } // identify the start & end positon of each search-text


  var offsetDetails = searches.map(function (offsetKey) {
    return decodeOffsetKey(offsetKey);
  }); // a leave can be empty when it is removed due event.g. using backspace
  // do not check leaves, use full decorated portal text

  var leaves = offsetDetails.filter(function (offsetDetail) {
    return offsetDetail.blockKey === anchorKey;
  }).map(function (offsetDetail) {
    return editorState.getBlockTree(offsetDetail.blockKey).getIn([offsetDetail.decoratorKey]);
  }); // if all leaves are undefined the popover should be removed

  if (leaves.every(function (leave) {
    return leave === undefined;
  })) {
    return null;
  } // Checks that the cursor is after the @ character but still somewhere in
  // the word (search term). Setting it to allow the cursor to be left of
  // the @ causes troubles due selection confusion.


  var blockText = editorState.getCurrentContent().getBlockForKey(anchorKey).getText();
  var triggerForSelectionInsideWord = leaves.filter(filterUndefineds).map(function (_ref) {
    var start = _ref.start,
        end = _ref.end;
    return mentionTriggers.map(function (trigger) {
      return (// @ is the first character
        start === 0 && anchorOffset >= start + trigger.length && //should not trigger if the cursor is before the trigger
        blockText.substr(0, trigger.length) === trigger && anchorOffset <= end || // @ is in the text or at the end, multi triggers
        mentionTriggers.length > 1 && anchorOffset >= start + trigger.length && (blockText.substr(start + 1, trigger.length) === trigger || blockText.substr(start, trigger.length) === trigger) && anchorOffset <= end || // @ is in the text or at the end, single trigger
        mentionTriggers.length === 1 && anchorOffset >= start + trigger.length && anchorOffset <= end ? trigger : undefined
      );
    }).filter(filterUndefineds)[0];
  }).filter(filterUndefineds);

  if (triggerForSelectionInsideWord.isEmpty()) {
    return null;
  }

  var _triggerForSelectionI = triggerForSelectionInsideWord.entrySeq().first(),
      activeOffsetKey = _triggerForSelectionI[0],
      activeTrigger = _triggerForSelectionI[1];

  return {
    activeOffsetKey: activeOffsetKey,
    activeTrigger: activeTrigger
  };
}

function Popover(_ref) {
  var store = _ref.store,
      children = _ref.children,
      className = _ref.className,
      _ref$popperOptions = _ref.popperOptions,
      popperOptions = _ref$popperOptions === void 0 ? {
    placement: 'bottom-start'
  } : _ref$popperOptions;

  var _useState = (0,external_react_.useState)(null),
      popperElement = _useState[0],
      setPopperElement = _useState[1];

  var _usePopper = usePopper(store.getReferenceElement(), popperElement, popperOptions),
      styles = _usePopper.styles,
      attributes = _usePopper.attributes;

  return /*#__PURE__*/external_react_default().createElement("div", _extends({
    ref: setPopperElement,
    style: styles.popper
  }, attributes.popper, {
    className: className
  }), children);
}

var warning = lodash_es_once(function (text) {
  if (false) {}
});

var MentionSuggestions = /*#__PURE__*/function (_Component) {
  _inheritsLoose(MentionSuggestions, _Component);

  function MentionSuggestions(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      focusedOptionIndex: 0
    };
    _this.key = (0,external_draft_js_.genKey)();
    _this.popover = void 0;
    _this.activeOffsetKey = void 0;
    _this.lastSearchValue = void 0;
    _this.lastActiveTrigger = '';
    _this.lastSelectionIsInsideWord = void 0;

    _this.onEditorStateChange = function (editorState) {
      var searches = _this.props.store.getAllSearches(); // if no search portal is active there is no need to show the popover


      if (searches.size === 0) {
        return editorState;
      }

      var removeList = function removeList() {
        _this.props.store.resetEscapedSearch();

        _this.closeDropdown();

        return editorState;
      };

      var triggerForMention = getTriggerForMention(editorState, searches, _this.props.mentionTriggers);

      if (!triggerForMention) {
        return removeList();
      }

      var lastActiveOffsetKey = _this.activeOffsetKey;
      _this.activeOffsetKey = triggerForMention.activeOffsetKey;

      _this.onSearchChange(editorState, editorState.getSelection(), _this.activeOffsetKey, lastActiveOffsetKey, triggerForMention.activeTrigger); // make sure the escaped search is reseted in the cursor since the user
      // already switched to another mention search


      if (!_this.props.store.isEscaped(_this.activeOffsetKey || '')) {
        _this.props.store.resetEscapedSearch();
      } // If none of the above triggered to close the window, it's safe to assume
      // the dropdown should be open. This is useful when a user focuses on another
      // input field and then comes back: the dropdown will show again.


      if (!_this.props.open && !_this.props.store.isEscaped(_this.activeOffsetKey || '')) {
        _this.openDropdown();
      } // makes sure the focused index is reseted every time a new selection opens
      // or the selection was moved to another mention search


      if (lastActiveOffsetKey !== _this.activeOffsetKey) {
        _this.setState({
          focusedOptionIndex: 0
        });
      }

      return editorState;
    };

    _this.onSearchChange = function (editorState, selection, activeOffsetKey, lastActiveOffsetKey, trigger) {
      var _getSearchText = getSearchText(editorState, selection, [trigger]),
          searchValue = _getSearchText.matchingString;

      if (_this.lastActiveTrigger !== trigger || _this.lastSearchValue !== searchValue || activeOffsetKey !== lastActiveOffsetKey) {
        _this.lastActiveTrigger = trigger;
        _this.lastSearchValue = searchValue;

        _this.props.onSearchChange({
          trigger: trigger,
          value: searchValue
        });
      }
    };

    _this.onDownArrow = function (keyboardEvent) {
      keyboardEvent.preventDefault();
      var newIndex = _this.state.focusedOptionIndex + 1;

      _this.onMentionFocus(newIndex >= _this.props.suggestions.length ? 0 : newIndex);
    };

    _this.onTab = function (keyboardEvent) {
      keyboardEvent.preventDefault();

      _this.commitSelection();
    };

    _this.onUpArrow = function (keyboardEvent) {
      keyboardEvent.preventDefault();

      if (_this.props.suggestions.length > 0) {
        var newIndex = _this.state.focusedOptionIndex - 1;

        _this.onMentionFocus(newIndex < 0 ? _this.props.suggestions.length - 1 : newIndex);
      }
    };

    _this.onEscape = function (keyboardEvent) {
      keyboardEvent.preventDefault();

      _this.props.store.escapeSearch(_this.activeOffsetKey || '');

      _this.closeDropdown(); // to force a re-render of the outer component to change the aria props


      _this.props.store.setEditorState(_this.props.store.getEditorState());
    };

    _this.onMentionSelect = function (mention) {
      // Note: This can happen in case a user typed @xxx (invalid mention) and
      // then hit Enter. Then the mention will be undefined.
      if (!mention) {
        return;
      }

      if (_this.props.onAddMention) {
        _this.props.onAddMention(mention);
      }

      _this.closeDropdown();

      var newEditorState = addMention(_this.props.store.getEditorState(), mention, _this.props.mentionPrefix, _this.lastActiveTrigger || '', _this.props.entityMutability);

      _this.props.store.setEditorState(newEditorState);
    };

    _this.onMentionFocus = function (index) {
      var descendant = "mention-option-" + _this.key + "-" + index;
      _this.props.ariaProps.ariaActiveDescendantID = descendant;

      _this.setState({
        focusedOptionIndex: index
      }); // to force a re-render of the outer component to change the aria props


      _this.props.store.setEditorState(_this.props.store.getEditorState());
    };

    _this.commitSelection = function () {
      var mention = _this.props.suggestions[_this.state.focusedOptionIndex];

      if (!_this.props.store.getIsOpened() || !mention) {
        return 'not-handled';
      }

      _this.onMentionSelect(mention);

      return 'handled';
    };

    _this.openDropdown = function () {
      // This is a really nasty way of attaching & releasing the key related functions.
      // It assumes that the keyFunctions object will not loose its reference and
      // by this we can replace inner parameters spread over different modules.
      // This better be some registering & unregistering logic. PRs are welcome :)
      _this.props.callbacks.handleReturn = _this.commitSelection;

      _this.props.callbacks.keyBindingFn = function (keyboardEvent) {
        // arrow down
        if (keyboardEvent.keyCode === 40) {
          _this.onDownArrow(keyboardEvent);
        } // arrow up


        if (keyboardEvent.keyCode === 38) {
          _this.onUpArrow(keyboardEvent);
        } // escape


        if (keyboardEvent.keyCode === 27) {
          _this.onEscape(keyboardEvent);
        } // tab


        if (keyboardEvent.keyCode === 9) {
          _this.onTab(keyboardEvent);
        }

        return undefined;
      };

      var descendant = "mention-option-" + _this.key + "-" + _this.state.focusedOptionIndex;
      _this.props.ariaProps.ariaActiveDescendantID = descendant;
      _this.props.ariaProps.ariaOwneeID = "mentions-list-" + _this.key;
      _this.props.ariaProps.ariaHasPopup = 'true';
      _this.props.ariaProps.ariaExpanded = true;

      _this.props.onOpenChange(true);
    };

    _this.closeDropdown = function () {
      // make sure none of these callbacks are triggered
      _this.props.callbacks.handleReturn = undefined;
      _this.props.callbacks.keyBindingFn = undefined;
      _this.props.ariaProps.ariaHasPopup = 'false';
      _this.props.ariaProps.ariaExpanded = false;
      _this.props.ariaProps.ariaActiveDescendantID = undefined;
      _this.props.ariaProps.ariaOwneeID = undefined;

      _this.props.onOpenChange(false);
    };

    _this.props.callbacks.onChange = _this.onEditorStateChange;
    return _this;
  }

  var _proto = MentionSuggestions.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (this.popover) {
      // In case the list shrinks there should be still an option focused.
      // Note: this might run multiple times and deduct 1 until the condition is
      // not fullfilled anymore.
      var size = this.props.suggestions.length;

      if (size > 0 && this.state.focusedOptionIndex >= size) {
        this.setState({
          focusedOptionIndex: size - 1
        });
      } // Note: this is a simple protection for the error when componentDidUpdate
      // try to get new getPortalClientRect, but the key already was deleted by
      // previous action. (right now, it only can happened when set the mention
      // trigger to be multi-characters which not supported anyway!)


      if (!this.props.store.getAllSearches().has(this.activeOffsetKey)) {
        return;
      }

      var decoratorRect = this.props.store.getPortalClientRect(this.activeOffsetKey);
      var positionSuggestions$1 = this.props.positionSuggestions || positionSuggestions;
      var newStyles = positionSuggestions$1({
        decoratorRect: decoratorRect,
        props: this.props,
        popover: this.popover
      });

      for (var _i = 0, _Object$entries = Object.entries(newStyles); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _Object$entries[_i],
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.popover.style[key] = value;
      }
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.props.callbacks.onChange = undefined;
  };

  _proto.render = function render() {
    var _this2 = this;

    if (!this.props.open) {
      return null;
    }

    var _this$props = this.props,
        entryComponent = _this$props.entryComponent,
        popoverComponent = _this$props.popoverComponent,
        popperOptions = _this$props.popperOptions,
        _this$props$popoverCo = _this$props.popoverContainer,
        PopoverContainer = _this$props$popoverCo === void 0 ? Popover : _this$props$popoverCo;
        _this$props.onOpenChange;
        _this$props.onAddMention;
        _this$props.onSearchChange;
        _this$props.suggestions;
        _this$props.ariaProps;
        _this$props.callbacks;
        var _this$props$theme = _this$props.theme,
        theme = _this$props$theme === void 0 ? {} : _this$props$theme;
        _this$props.store;
        _this$props.entityMutability;
        var positionSuggestions = _this$props.positionSuggestions;
        _this$props.mentionTriggers;
        _this$props.mentionPrefix;
        var elementProps = index_esm_objectWithoutPropertiesLoose(_this$props, ["entryComponent", "popoverComponent", "popperOptions", "popoverContainer", "onOpenChange", "onAddMention", "onSearchChange", "suggestions", "ariaProps", "callbacks", "theme", "store", "entityMutability", "positionSuggestions", "mentionTriggers", "mentionPrefix"]);

    if (popoverComponent || positionSuggestions) {
      warning('The properties `popoverComponent` and `positionSuggestions` are deprecated and will be removed in @draft-js-plugins/mentions 6.0 . Use `popperOptions` instead');
      return /*#__PURE__*/external_react_default().cloneElement(popoverComponent || /*#__PURE__*/external_react_default().createElement("div", null), _extends({}, elementProps, {
        className: theme.mentionSuggestions,
        role: 'listbox',
        id: "mentions-list-" + this.key,
        ref: function ref(element) {
          _this2.popover = element;
        }
      }), this.props.suggestions.map(function (mention, index) {
        return /*#__PURE__*/external_react_default().createElement(Entry, {
          key: mention.id != null ? mention.id : mention.name,
          onMentionSelect: _this2.onMentionSelect,
          onMentionFocus: _this2.onMentionFocus,
          isFocused: _this2.state.focusedOptionIndex === index,
          mention: mention,
          index: index,
          id: "mention-option-" + _this2.key + "-" + index,
          theme: theme,
          searchValue: _this2.lastSearchValue,
          entryComponent: entryComponent || DefaultEntryComponent
        });
      }));
    }

    if (!this.props.renderEmptyPopup && this.props.suggestions.length === 0) {
      return null;
    }

    return /*#__PURE__*/external_react_default().createElement(PopoverContainer, {
      store: this.props.store,
      className: theme.mentionSuggestions,
      popperOptions: popperOptions
    }, this.props.suggestions.map(function (mention, index) {
      return /*#__PURE__*/external_react_default().createElement(Entry, {
        key: mention.id != null ? mention.id : mention.name,
        onMentionSelect: _this2.onMentionSelect,
        onMentionFocus: _this2.onMentionFocus,
        isFocused: _this2.state.focusedOptionIndex === index,
        mention: mention,
        index: index,
        id: "mention-option-" + _this2.key + "-" + index,
        theme: theme,
        searchValue: _this2.lastSearchValue,
        entryComponent: entryComponent || DefaultEntryComponent
      });
    }));
  };

  return MentionSuggestions;
}(external_react_.Component);
MentionSuggestions.propTypes = {
  open: (prop_types_default()).bool.isRequired,
  onOpenChange: (prop_types_default()).func.isRequired,
  entityMutability: prop_types_default().oneOf(['SEGMENTED', 'IMMUTABLE', 'MUTABLE']),
  entryComponent: (prop_types_default()).func,
  onAddMention: (prop_types_default()).func,
  suggestions: (prop_types_default()).array.isRequired
};

var index_esm_useIsomorphicLayoutEffect = typeof window !== 'undefined' ? external_react_.useLayoutEffect : external_react_.useEffect;
function MentionSuggestionsPortal(props) {
  var searchPortal = (0,external_react_.useRef)(); // Note: this is a workaround for an obscure issue: https://github.com/draft-js-plugins/draft-js-plugins/pull/667/files
  // Ideally we can remove this in the future.

  var searchPortalRef = function searchPortalRef(element) {
    searchPortal.current = element;
    props.store.setReferenceElement(element);
  };

  var updatePortalClientRect = function updatePortalClientRect(currentProps) {
    currentProps.store.updatePortalClientRect(currentProps.offsetKey, function () {
      return searchPortal.current.getBoundingClientRect();
    });
  }; // When inputting Japanese characters (or any complex alphabet which requires
  // hitting enter to commit the characters), that action was causing a race
  // condition when we used UNSAFE_componentWillMount. By using componentDidMount
  // instead of UNSAFE_componentWillMount, the component will unmount unregister and
  // then properly mount and register after. Prior to this change,
  // UNSAFE_componentWillMount would not fire after componentWillUnmount even though it
  // was still in the DOM, so it wasn't re-registering the offsetkey.


  index_esm_useIsomorphicLayoutEffect(function () {
    props.store.register(props.offsetKey);
    props.store.setIsOpened(true);
    updatePortalClientRect(props); // trigger a re-render so the MentionSuggestions becomes active

    props.store.setEditorState(props.store.getEditorState());
    return function () {
      props.store.unregister(props.offsetKey);
      props.store.setIsOpened(false);
      props.store.setReferenceElement(null);
    };
  }, []);
  (0,external_react_.useEffect)(function () {
    updatePortalClientRect(props);
  });
  return /*#__PURE__*/external_react_default().createElement("span", {
    ref: searchPortalRef
  }, props.children);
}

var defaultRegExp = '[' + '\\w-' + // Latin-1 Supplement (letters only) - https://en.wikipedia.org/wiki/List_of_Unicode_characters#Latin-1_Supplement
"\xC0-\xD6" + "\xD8-\xF6" + "\xF8-\xFF" + // Latin Extended-A (without deprecated character) - https://en.wikipedia.org/wiki/List_of_Unicode_characters#Latin_Extended-A
"\u0100-\u0148" + "\u014A-\u017F" + // Cyrillic symbols: \u0410-\u044F - https://en.wikipedia.org/wiki/Cyrillic_script_in_Unicode
"\u0410-\u044F" + // hiragana (japanese): \u3040-\u309F - https://gist.github.com/ryanmcgrath/982242#file-japaneseregex-js
"\u3040-\u309F" + // katakana (japanese): \u30A0-\u30FF - https://gist.github.com/ryanmcgrath/982242#file-japaneseregex-js
"\u30A0-\u30FF" + // For an advanced explaination about Hangul see https://github.com/draft-js-plugins/draft-js-plugins/pull/480#issuecomment-254055437
// Hangul Jamo (korean): \u3130-\u318F - https://en.wikipedia.org/wiki/Korean_language_and_computers#Hangul_in_Unicode
// Hangul Syllables (korean): \uAC00-\uD7A3 - https://en.wikipedia.org/wiki/Korean_language_and_computers#Hangul_in_Unicode
"\u3130-\u318F" + "\uAC00-\uD7A3" + // common chinese symbols: \u4e00-\u9eff - http://stackoverflow.com/a/1366113/837709
// extended to \u9fa5 https://github.com/draft-js-plugins/draft-js-plugins/issues/1888
"\u4E00-\u9FA5" + // Arabic https://en.wikipedia.org/wiki/Arabic_(Unicode_block)
"\u0600-\u06FF" + // Vietnamese http://vietunicode.sourceforge.net/charset/
"\xC0-\u1EF9" + ']';

var defaultTheme = {
  mention: "m6zwb4v",
  // CSS class for suggestions component
  mentionSuggestions: "mnw6qvm",
  // CSS classes for an entry in the suggestions component
  mentionSuggestionsEntry: "m1ymsnxd",
  mentionSuggestionsEntryFocused: "m126ak5t",
  mentionSuggestionsEntryText: "mtiwdxc",
  mentionSuggestionsEntryAvatar: "myz2dw1"
};

var findMentionEntities = function findMentionEntities(triggers) {
  return function (contentBlock, callback, contentState) {
    contentBlock.findEntityRanges(function (character) {
      var entityKey = character.getEntity();
      return entityKey !== null && triggers.some(function (trigger) {
        return contentState.getEntity(entityKey).getType() === getTypeByTrigger(trigger);
      });
    }, callback);
  };
};

var whitespaceRegEx = /\s/;

function checkForWhiteSpaceBeforeTrigger(text, index) {
  if (index === 0) {
    return true;
  }

  return whitespaceRegEx.test(text[index - 1]);
}

function findInContentBlock(regex, text, nonEntityStart, callback) {
  var matchArr;
  var start;
  var prevLastIndex = regex.lastIndex; // Go through all matches in the text and return the indices to the callback
  // Break the loop if lastIndex is not changed

  while ((matchArr = regex.exec(text)) !== null) {
    if (regex.lastIndex === prevLastIndex) {
      break;
    }

    prevLastIndex = regex.lastIndex;
    start = nonEntityStart + matchArr.index;

    var _end = start + matchArr[0].length;

    if (whitespaceRegEx.test(text[start])) {
      //trim the result so that we have no whitespaces
      start += 1;
    }

    callback(start, _end);
  }
}

function findInContentBlockWithWhitespace(regex, text, nonEntityStart, callback) {
  var matchArr;
  var start;
  var prevLastIndex = regex.lastIndex; // Go through all matches in the text and return the indices to the callback
  // Break the loop if lastIndex is not changed

  while ((matchArr = regex.exec(text)) !== null) {
    if (regex.lastIndex === prevLastIndex) {
      break;
    }

    prevLastIndex = regex.lastIndex;
    start = nonEntityStart + matchArr.index;

    var _end2 = start + matchArr[0].length; //check if whitespace support is active that the char before the trigger is a white space #1844


    if (checkForWhiteSpaceBeforeTrigger(text, matchArr.index)) {
      callback(start, _end2);
    }
  }
}

var findWithRegex = function findWithRegex(regex, contentBlock, supportWhiteSpace, callback) {
  var contentBlockText = contentBlock.getText(); // exclude entities, when matching

  contentBlock.findEntityRanges(function (character) {
    return !character.getEntity();
  }, function (nonEntityStart, nonEntityEnd) {
    var text = contentBlockText.slice(nonEntityStart, nonEntityEnd);

    if (supportWhiteSpace) {
      findInContentBlockWithWhitespace(regex, text, nonEntityStart, callback);
    } else {
      findInContentBlock(regex, text, nonEntityStart, callback);
    }
  });
};

var mentionSuggestionsStrategy = (function (triggers, supportWhiteSpace, regExp) {
  var triggerPattern = "(" + triggers.map(function (trigger) {
    return lodash_es_escapeRegExp(trigger);
  }).join('|') + ")";
  var MENTION_REGEX = supportWhiteSpace ? new RegExp(triggerPattern + "(" + regExp + "|\\s)*", 'g') : new RegExp("(\\s|^)" + triggerPattern + regExp + "*", 'g');
  return function (contentBlock, callback) {
    findWithRegex(MENTION_REGEX, contentBlock, supportWhiteSpace, callback);
  };
});

// Get the first 5 suggestions that match
var defaultSuggestionsFilter$1 = function defaultSuggestionsFilter(searchValue, suggestions, trigger) {
  var value = searchValue.toLowerCase();
  var triggerSuggestions = trigger && !Array.isArray(suggestions) ? suggestions[trigger] : suggestions;
  var filteredSuggestions = triggerSuggestions.filter(function (suggestion) {
    return !value || suggestion.name.toLowerCase().indexOf(value) > -1;
  });
  var length = filteredSuggestions.length < 5 ? filteredSuggestions.length : 5;
  return filteredSuggestions.slice(0, length);
};

var index = (function (config) {
  if (config === void 0) {
    config = {};
  }

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
  var searches = (0,external_immutable_.Map)();
  var escapedSearch;
  var clientRectFunctions = (0,external_immutable_.Map)();
  var isOpened = false;
  var referenceElement;
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
      searches = searches["delete"](offsetKey);
      clientRectFunctions = clientRectFunctions["delete"](offsetKey);
    },
    getIsOpened: function getIsOpened() {
      return isOpened;
    },
    setIsOpened: function setIsOpened(nextIsOpened) {
      isOpened = nextIsOpened;
    },
    getReferenceElement: function getReferenceElement() {
      return referenceElement;
    },
    setReferenceElement: function setReferenceElement(element) {
      referenceElement = element;
    }
  }; // Styles are overwritten instead of merged as merging causes a lot of confusion.
  //
  // Why? Because when merging a developer needs to know all of the underlying
  // styles which needs a deep dive into the code. Merging also makes it prone to
  // errors when upgrading as basically every styling change would become a major
  // breaking change. 1px of an increased padding can break a whole layout.

  var _config = config,
      _config$mentionPrefix = _config.mentionPrefix,
      mentionPrefix = _config$mentionPrefix === void 0 ? '' : _config$mentionPrefix,
      _config$theme = _config.theme,
      theme = _config$theme === void 0 ? defaultTheme : _config$theme,
      positionSuggestions = _config.positionSuggestions,
      mentionComponent = _config.mentionComponent,
      _config$mentionSugges = _config.mentionSuggestionsComponent,
      MentionSuggestionsComponent = _config$mentionSugges === void 0 ? MentionSuggestions : _config$mentionSugges,
      _config$entityMutabil = _config.entityMutability,
      entityMutability = _config$entityMutabil === void 0 ? 'SEGMENTED' : _config$entityMutabil,
      _config$mentionTrigge = _config.mentionTrigger,
      mentionTrigger = _config$mentionTrigge === void 0 ? '@' : _config$mentionTrigge,
      _config$mentionRegExp = _config.mentionRegExp,
      mentionRegExp = _config$mentionRegExp === void 0 ? defaultRegExp : _config$mentionRegExp,
      _config$supportWhites = _config.supportWhitespace,
      supportWhitespace = _config$supportWhites === void 0 ? false : _config$supportWhites,
      popperOptions = _config.popperOptions;
  var mentionTriggers = typeof mentionTrigger === 'string' ? [mentionTrigger] : mentionTrigger;
  var mentionSearchProps = {
    ariaProps: ariaProps,
    callbacks: callbacks,
    theme: theme,
    store: store,
    entityMutability: entityMutability,
    positionSuggestions: positionSuggestions,
    mentionTriggers: mentionTriggers,
    mentionPrefix: mentionPrefix,
    popperOptions: popperOptions
  };

  var DecoratedMentionSuggestionsComponent = function DecoratedMentionSuggestionsComponent(props) {
    return /*#__PURE__*/external_react_default().createElement(MentionSuggestionsComponent, _extends({}, props, mentionSearchProps));
  };

  var DecoratedMention = function DecoratedMention(props) {
    return /*#__PURE__*/external_react_default().createElement(Mention, _extends({}, props, {
      theme: theme,
      mentionComponent: mentionComponent
    }));
  };

  var DecoratedMentionSuggestionsPortal = function DecoratedMentionSuggestionsPortal(props) {
    return /*#__PURE__*/external_react_default().createElement(MentionSuggestionsPortal, _extends({}, props, {
      store: store
    }));
  };

  return {
    MentionSuggestions: DecoratedMentionSuggestionsComponent,
    decorators: [{
      strategy: findMentionEntities(mentionTriggers),
      component: DecoratedMention
    }, {
      strategy: mentionSuggestionsStrategy(mentionTriggers, supportWhitespace, mentionRegExp),
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
      if (callbacks.onChange) {
        return callbacks.onChange(editorState);
      }

      return editorState;
    }
  };
});
var defaultSuggestionsFilter = defaultSuggestionsFilter$1;

/* harmony default export */ const index_esm = (index);


;// CONCATENATED MODULE: ./mention/index.jsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




/**
 * 基于 @draft-js-plugins/mention 的 mention 扩展
 * 除了 includeEditors 和 excludeEditors 外
 * 其他属性将会传递给 @draft-js-plugins/mention
 * 参考 https://www.draft-js-plugins.com/plugin/mention
 */

/* harmony default export */ const mention = (function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var includeEditors = options.includeEditors,
      excludeEditors = options.excludeEditors,
      mentionPluginOptions = _objectWithoutProperties(options, ["includeEditors", "excludeEditors"]);

  var mentionPlugin = index_esm(mentionPluginOptions); // MentionSuggestions 是一个 React Component 用来定制 mention 的数据

  var MentionSuggestions = mentionPlugin.MentionSuggestions,
      draftEditorPlugin = _objectWithoutProperties(mentionPlugin, ["MentionSuggestions"]);
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
      } // 应该是 draft-js 和 @draft-js-plugins/mention 之间的磨合除了问题
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

          return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, name, handler));
        }, {});
      };

      return _objectSpread(_objectSpread({}, editorProps), {}, {
        draftProps: _objectSpread(_objectSpread(_objectSpread({}, editorProps.draftProps), draftEditorPlugin.getAccessibilityProps()), passSomeKeyEventToKeyBindingFn(editorProps.draftProps || {})),
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
  }].concat(_toConsumableArray((draftEditorPlugin.decorators || []).map(function (decorate) {
    return {
      type: 'decorator',
      includeEditors: includeEditors,
      excludeEditors: excludeEditors,
      decorator: _objectSpread(_objectSpread({}, decorate), {}, {
        component: function component(props) {
          // 这里需要注入 getAndSet 是因为平时 draft-js-plugin 里面 对所有的非自定义类型的装饰器进行了注入
          // 所以这里也要模仿
          // see draft-js-plugins/packages/editor/src/Editor/resolveDecorators.ts
          return /*#__PURE__*/external_react_default().createElement(decorate.component, _objectSpread(_objectSpread({}, props), getAndSetState));
        }
      })
    };
  }))), MentionSuggestions];
});

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});