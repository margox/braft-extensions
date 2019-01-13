(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("draft-js"), require("immutable"), require("braft-utils"));
	else if(typeof define === 'function' && define.amd)
		define(["draft-js", "immutable", "braft-utils"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("draft-js"), require("immutable"), require("braft-utils")) : factory(root["draft-js"], root["immutable"], root["braft-utils"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__6__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ({

/***/ 18:
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

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

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__(5);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: external "draft-js"
var external_draft_js_ = __webpack_require__(2);

// CONCATENATED MODULE: ./markdown/modifiers/changeCurrentBlockType.js


var changeCurrentBlockType_changeCurrentBlockType = function changeCurrentBlockType(editorState, type, text) {
  var blockMetadata = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var currentContent = editorState.getCurrentContent();
  var selection = editorState.getSelection();
  var key = selection.getStartKey();
  var blockMap = currentContent.getBlockMap();
  var block = blockMap.get(key);
  var data = block.getData().merge(blockMetadata);
  var newBlock = block.merge({
    type: type,
    data: data,
    text: text || ''
  });
  var newSelection = selection.merge({
    anchorOffset: 0,
    focusOffset: 0
  });
  var newContentState = currentContent.merge({
    blockMap: blockMap.set(key, newBlock),
    selectionAfter: newSelection
  });
  return external_draft_js_["EditorState"].push(editorState, newContentState, 'change-block-type');
};

/* harmony default export */ var modifiers_changeCurrentBlockType = (changeCurrentBlockType_changeCurrentBlockType);
// CONCATENATED MODULE: ./markdown/modifiers/handleBlockType.js
// import { CHECKABLE_LIST_ITEM } from 'draft-js-checkable-list-item'
// import { RichUtils } from 'draft-js'


var sharps = function sharps(len) {
  var ret = '';

  while (ret.length < len) {
    ret += '#';
  }

  return ret;
};

var blockTypes = [null, 'header-one', 'header-two', 'header-three', 'header-four', 'header-five', 'header-six'];

var handleBlockType_handleBlockType = function handleBlockType(editorState, character) {
  var currentSelection = editorState.getSelection();
  var key = currentSelection.getStartKey();
  var text = editorState.getCurrentContent().getBlockForKey(key).getText();
  var position = currentSelection.getAnchorOffset();
  var line = [text.slice(0, position), character, text.slice(position)].join(''); // const blockType = RichUtils.getCurrentBlockType(editorState)

  for (var i = 1; i <= 6; i += 1) {
    if (line.indexOf("".concat(sharps(i), " ")) === 0) {
      return modifiers_changeCurrentBlockType(editorState, blockTypes[i], line.replace(/^#+\s/, ''));
    }
  }

  var matchArr = line.match(/^[*-] (.*)$/);

  if (matchArr) {
    return modifiers_changeCurrentBlockType(editorState, 'unordered-list-item', matchArr[1]);
  }

  matchArr = line.match(/^[\d]\. (.*)$/);

  if (matchArr) {
    return modifiers_changeCurrentBlockType(editorState, 'ordered-list-item', matchArr[1]);
  }

  matchArr = line.match(/^> (.*)$/);

  if (matchArr) {
    return modifiers_changeCurrentBlockType(editorState, 'blockquote', matchArr[1]);
  } // matchArr = line.match(/^\[([x ])] (.*)$/i)
  // if (matchArr && blockType === 'unordered-list-item') {
  //   return changeCurrentBlockType(editorState, CHECKABLE_LIST_ITEM, matchArr[2], { checked: matchArr[1] !== ' ' })
  // }


  return editorState;
};

/* harmony default export */ var modifiers_handleBlockType = (handleBlockType_handleBlockType);
// CONCATENATED MODULE: ./markdown/modifiers/changeCurrentInlineStyle.js


var changeCurrentInlineStyle_changeCurrentInlineStyle = function changeCurrentInlineStyle(editorState, matchArr, style) {
  var currentContent = editorState.getCurrentContent();
  var selection = editorState.getSelection();
  var key = selection.getStartKey();
  var index = matchArr.index;
  var blockMap = currentContent.getBlockMap();
  var block = blockMap.get(key);
  var currentInlineStyle = block.getInlineStyleAt(index).merge();
  var newStyle = currentInlineStyle.merge([style]);
  var focusOffset = index + matchArr[0].length;
  var wordSelection = external_draft_js_["SelectionState"].createEmpty(key).merge({
    anchorOffset: index + matchArr[0].indexOf(matchArr[1]),
    focusOffset: focusOffset
  });
  var newContentState = external_draft_js_["Modifier"].replaceText(currentContent, wordSelection, matchArr[2], newStyle);
  newContentState = external_draft_js_["Modifier"].insertText(newContentState, newContentState.getSelectionAfter(), matchArr[4]);
  var newEditorState = external_draft_js_["EditorState"].push(editorState, newContentState, 'change-inline-style');
  return external_draft_js_["EditorState"].forceSelection(newEditorState, newContentState.getSelectionAfter());
};

/* harmony default export */ var modifiers_changeCurrentInlineStyle = (changeCurrentInlineStyle_changeCurrentInlineStyle);
// CONCATENATED MODULE: ./markdown/modifiers/handleInlineStyle.js

var inlineMatchers = {
  BOLD: /(?:^|\s|\n|[^A-z0-9_*~`])(\*{2}|_{2})((?!\1).*?)(\1)($|\s|\n|[^A-z0-9_*~`])/g,
  ITALIC: /(?:^|\s|\n|[^A-z0-9_*~`])(\*{1}|_{1})((?!\1).*?)(\1)($|\s|\n|[^A-z0-9_*~`])/g,
  CODE: /(?:^|\s|\n|[^A-z0-9_*~`])(`)((?!\1).*?)(\1)($|\s|\n|[^A-z0-9_*~`])/g,
  STRIKETHROUGH: /(?:^|\s|\n|[^A-z0-9_*~`])(~{2})((?!\1).*?)(\1)($|\s|\n|[^A-z0-9_*~`])/g
};

var handleInlineStyle_handleInlineStyle = function handleInlineStyle(editorState, character) {
  var key = editorState.getSelection().getStartKey();
  var text = editorState.getCurrentContent().getBlockForKey(key).getText();
  var line = "".concat(text).concat(character);
  var newEditorState = editorState;
  Object.keys(inlineMatchers).some(function (k) {
    var re = inlineMatchers[k];
    var matchArr;

    do {
      matchArr = re.exec(line);

      if (matchArr) {
        newEditorState = modifiers_changeCurrentInlineStyle(newEditorState, matchArr, k);
      }
    } while (matchArr);

    return newEditorState !== editorState;
  });
  return newEditorState;
};

/* harmony default export */ var modifiers_handleInlineStyle = (handleInlineStyle_handleInlineStyle);
// EXTERNAL MODULE: external "immutable"
var external_immutable_ = __webpack_require__(4);

// CONCATENATED MODULE: ./markdown/modifiers/insertEmptyBlock.js



var insertEmptyBlock_insertEmptyBlock = function insertEmptyBlock(editorState) {
  var blockType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'unstyled';
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var contentState = editorState.getCurrentContent();
  var selection = editorState.getSelection();
  var key = selection.getStartKey();
  var currentBlock = contentState.getBlockForKey(key);
  var emptyBlockKey = Object(external_draft_js_["genKey"])();
  var emptyBlock = new external_draft_js_["ContentBlock"]({
    characterList: Object(external_immutable_["List"])(),
    depth: 0,
    key: emptyBlockKey,
    text: '',
    type: blockType,
    data: Object(external_immutable_["Map"])().merge(data)
  });
  var blockMap = contentState.getBlockMap();
  var blocksBefore = blockMap.toSeq().takeUntil(function (value) {
    return value === currentBlock;
  });
  var blocksAfter = blockMap.toSeq().skipUntil(function (value) {
    return value === currentBlock;
  }).rest();
  var augmentedBlocks = [[currentBlock.getKey(), currentBlock], [emptyBlockKey, emptyBlock]];
  var newBlocks = blocksBefore.concat(augmentedBlocks, blocksAfter).toOrderedMap();
  var focusKey = emptyBlockKey;
  var newContentState = contentState.merge({
    blockMap: newBlocks,
    selectionBefore: selection,
    selectionAfter: selection.merge({
      anchorKey: focusKey,
      anchorOffset: 0,
      focusKey: focusKey,
      focusOffset: 0,
      isBackward: false
    })
  });
  return external_draft_js_["EditorState"].push(editorState, newContentState, 'split-block');
};

/* harmony default export */ var modifiers_insertEmptyBlock = (insertEmptyBlock_insertEmptyBlock);
// CONCATENATED MODULE: ./markdown/modifiers/handleNewCodeBlock.js



var handleNewCodeBlock_handleNewCodeBlock = function handleNewCodeBlock(editorState) {
  var contentState = editorState.getCurrentContent();
  var selection = editorState.getSelection();
  var key = selection.getStartKey();
  var currentBlock = contentState.getBlockForKey(key);
  var matchData = /^```([\w-]+)?$/.exec(currentBlock.getText());
  var isLast = selection.getEndOffset() === currentBlock.getLength();

  if (matchData && isLast) {
    var data = {};
    var language = matchData[1];

    if (language) {
      data.language = language;
    }

    return modifiers_changeCurrentBlockType(editorState, 'code-block', '', data);
  }

  var type = currentBlock.getType();

  if (type === 'code-block' && isLast) {
    return modifiers_insertEmptyBlock(editorState, 'code-block', currentBlock.getData());
  }

  return editorState;
};

/* harmony default export */ var modifiers_handleNewCodeBlock = (handleNewCodeBlock_handleNewCodeBlock);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(8);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// CONCATENATED MODULE: ./markdown/modifiers/insertLink.js



var insertLink_insertLink = function insertLink(editorState, matchArr) {
  var currentContent = editorState.getCurrentContent();
  var selection = editorState.getSelection();
  var key = selection.getStartKey();

  var _matchArr = slicedToArray_default()(matchArr, 4),
      matchText = _matchArr[0],
      text = _matchArr[1],
      href = _matchArr[2],
      title = _matchArr[3];

  var index = matchArr.index;
  var focusOffset = index + matchText.length;
  var wordSelection = external_draft_js_["SelectionState"].createEmpty(key).merge({
    anchorOffset: index,
    focusOffset: focusOffset
  });
  var nextContent = currentContent.createEntity('LINK', 'MUTABLE', {
    href: href,
    title: title
  });
  var entityKey = nextContent.getLastCreatedEntityKey();
  var newContentState = external_draft_js_["Modifier"].replaceText(nextContent, wordSelection, text, null, entityKey);
  newContentState = external_draft_js_["Modifier"].insertText(newContentState, newContentState.getSelectionAfter(), ' ');
  var newWordSelection = wordSelection.merge({
    focusOffset: index + text.length
  });
  var newEditorState = external_draft_js_["EditorState"].push(editorState, newContentState, 'insert-link');
  newEditorState = external_draft_js_["RichUtils"].toggleLink(newEditorState, newWordSelection, entityKey);
  return external_draft_js_["EditorState"].forceSelection(newEditorState, newContentState.getSelectionAfter());
};

/* harmony default export */ var modifiers_insertLink = (insertLink_insertLink);
// CONCATENATED MODULE: ./markdown/modifiers/handleLink.js


var handleLink_handleLink = function handleLink(editorState, character) {
  var re = /\[([^\]]+)]\(([^)"]+)(?: "([^"]+)")?\)/g;
  var key = editorState.getSelection().getStartKey();
  var text = editorState.getCurrentContent().getBlockForKey(key).getText();
  var line = "".concat(text).concat(character);
  var newEditorState = editorState;
  var matchArr;

  do {
    matchArr = re.exec(line);

    if (matchArr) {
      newEditorState = modifiers_insertLink(newEditorState, matchArr);
    }
  } while (matchArr);

  return newEditorState;
};

/* harmony default export */ var modifiers_handleLink = (handleLink_handleLink);
// EXTERNAL MODULE: external "braft-utils"
var external_braft_utils_ = __webpack_require__(6);

// CONCATENATED MODULE: ./markdown/modifiers/insertImage.js




var insertImage_insertImage = function insertImage(editorState, matchArr) {
  var currentContent = editorState.getCurrentContent();
  var selection = editorState.getSelection();
  var key = selection.getStartKey();

  var _matchArr = slicedToArray_default()(matchArr, 4),
      matchText = _matchArr[0],
      alt = _matchArr[1],
      src = _matchArr[2],
      title = _matchArr[3];

  var index = matchArr.index;
  var focusOffset = index + matchText.length;
  var wordSelection = external_draft_js_["SelectionState"].createEmpty(key).merge({
    anchorOffset: index,
    focusOffset: focusOffset
  });
  var newContentState = external_draft_js_["Modifier"].replaceText(currentContent, wordSelection, '');
  var nextEditorState = external_draft_js_["EditorState"].push(editorState, newContentState, 'insert-image'); // nextEditorState = EditorState.forceSelection(nextEditorState, newContentState.getSelectionAfter())

  return external_braft_utils_["ContentUtils"].insertMedias(nextEditorState, [{
    type: 'IMAGE',
    name: alt || title,
    url: src,
    meta: {
      alt: alt,
      title: title
    }
  }]);
};

/* harmony default export */ var modifiers_insertImage = (insertImage_insertImage);
// CONCATENATED MODULE: ./markdown/modifiers/handleImage.js


var handleImage_handleImage = function handleImage(editorState, character) {
  var re = /!\[([^\]]*)]\(([^)"]+)(?: "([^"]+)")?\)/g;
  var key = editorState.getSelection().getStartKey();
  var text = editorState.getCurrentContent().getBlockForKey(key).getText();
  var line = "".concat(text).concat(character);
  var newEditorState = editorState;
  var matchArr;

  do {
    matchArr = re.exec(line);

    if (matchArr) {
      newEditorState = modifiers_insertImage(newEditorState, matchArr);
    }
  } while (matchArr);

  return newEditorState;
};

/* harmony default export */ var modifiers_handleImage = (handleImage_handleImage);
// CONCATENATED MODULE: ./markdown/modifiers/leaveList.js


var leaveList_leaveList = function leaveList(editorState) {
  var contentState = editorState.getCurrentContent();
  var selection = editorState.getSelection();
  var key = selection.getStartKey();
  var currentBlock = contentState.getBlockForKey(key);
  var type = currentBlock.getType();
  return external_draft_js_["RichUtils"].toggleBlockType(editorState, type);
};

/* harmony default export */ var modifiers_leaveList = (leaveList_leaveList);
// CONCATENATED MODULE: ./markdown/modifiers/insertText.js


var insertText_insertText = function insertText(editorState, text) {
  var selection = editorState.getSelection();
  var content = editorState.getCurrentContent();
  var newContentState = external_draft_js_["Modifier"].insertText(content, selection, text, editorState.getCurrentInlineStyle());
  return external_draft_js_["EditorState"].push(editorState, newContentState, 'insert-fragment');
};

/* harmony default export */ var modifiers_insertText = (insertText_insertText);
// CONCATENATED MODULE: ./markdown/utils.js

function addText(editorState, bufferText) {
  var contentState = external_draft_js_["Modifier"].insertText(editorState.getCurrentContent(), editorState.getSelection(), bufferText);
  return external_draft_js_["EditorState"].push(editorState, contentState, 'insert-characters');
}
function replaceText(editorState, bufferText) {
  var contentState = external_draft_js_["Modifier"].replaceText(editorState.getCurrentContent(), editorState.getSelection(), bufferText);
  return external_draft_js_["EditorState"].push(editorState, contentState, 'insert-characters');
}
// CONCATENATED MODULE: ./markdown/index.jsx


/**
 * This extension is a transformation from draft-js-markdown-shortcuts-plugin (github repo: https://github.com/ngs/draft-js-markdown-shortcuts-plugin)
 * Thanks very much for the contributors of draft-js-markdown-shortcuts-plugin!!!
 */











function checkCharacterForState(editorState, character) {
  var newEditorState = modifiers_handleBlockType(editorState, character);
  var contentState = editorState.getCurrentContent();
  var selection = editorState.getSelection();
  var key = selection.getStartKey();
  var currentBlock = contentState.getBlockForKey(key);
  var type = currentBlock.getType();

  if (editorState === newEditorState) {
    newEditorState = modifiers_handleImage(editorState, character);
  }

  if (editorState === newEditorState) {
    newEditorState = modifiers_handleLink(editorState, character);
  }

  if (editorState === newEditorState && type !== 'code-block') {
    newEditorState = modifiers_handleInlineStyle(editorState, character);
  }

  return newEditorState;
}

function checkReturnForState(editorState, ev, insertEmptyBlockOnReturnWithModifierKey) {
  var newEditorState = editorState;
  var contentState = editorState.getCurrentContent();
  var selection = editorState.getSelection();
  var key = selection.getStartKey();
  var currentBlock = contentState.getBlockForKey(key);
  var type = currentBlock.getType();
  var text = currentBlock.getText();

  if (/-list-item$/.test(type) && text === '') {
    newEditorState = modifiers_leaveList(editorState);
  }

  if (newEditorState === editorState && insertEmptyBlockOnReturnWithModifierKey && (ev.ctrlKey || ev.shiftKey || ev.metaKey || ev.altKey || /^header-/.test(type) && selection.isCollapsed() && selection.getEndOffset() === text.length)) {
    newEditorState = modifiers_insertEmptyBlock(editorState);
  }

  if (newEditorState === editorState && type !== 'code-block' && /^```([\w-]+)?$/.test(text)) {
    newEditorState = modifiers_handleNewCodeBlock(editorState);
  }

  if (newEditorState === editorState && type === 'code-block') {
    if (/```\s*$/.test(text)) {
      newEditorState = modifiers_changeCurrentBlockType(newEditorState, type, text.replace(/\n```\s*$/, ''));
      newEditorState = modifiers_insertEmptyBlock(newEditorState);
    } else {
      newEditorState = modifiers_insertText(editorState, '\n');
    }
  }

  if (editorState === newEditorState) {
    newEditorState = modifiers_handleInlineStyle(editorState, '\n');
  }

  return newEditorState;
}

/* harmony default export */ var markdown = __webpack_exports__["default"] = (function (options) {
  options = objectSpread_default()({
    insertEmptyBlockOnReturnWithModifierKey: true
  }, options);
  var _options = options,
      includeEditors = _options.includeEditors,
      excludeEditors = _options.excludeEditors,
      insertEmptyBlockOnReturnWithModifierKey = _options.insertEmptyBlockOnReturnWithModifierKey;
  return [{
    type: 'prop-interception',
    includeEditors: includeEditors,
    excludeEditors: excludeEditors,
    interceptor: function interceptor(editorProps) {
      editorProps = objectSpread_default()({}, editorProps, {
        handleReturn: function handleReturn(ev, editorState, editor) {
          var newEditorState = checkReturnForState(editorState, ev, insertEmptyBlockOnReturnWithModifierKey);

          if (editorState !== newEditorState) {
            editor.setValue(newEditorState);
            return 'handled';
          }

          return 'not-handled';
        },
        handleBeforeInput: function handleBeforeInput(character, editorState, editor) {
          if (character.match(/[A-z0-9_*~`]/)) {
            return 'not-handled';
          }

          var newEditorState = checkCharacterForState(editorState, character);

          if (editorState !== newEditorState) {
            editor.setValue(newEditorState);
            return 'handled';
          }

          return 'not-handled';
        },
        handlePastedText: function handlePastedText(text, html, editorState, editor) {
          if (html) {
            return 'not-handled';
          }

          var newEditorState = editorState;
          var buffer = [];

          for (var i = 0; i < text.length; i++) {
            // eslint-disable-line no-plusplus
            if (text[i].match(/[^A-z0-9_*~`]/)) {
              newEditorState = replaceText(newEditorState, buffer.join('') + text[i]);
              newEditorState = checkCharacterForState(newEditorState, text[i]);
              buffer = [];
            } else if (text[i].charCodeAt(0) === 10) {
              newEditorState = replaceText(newEditorState, buffer.join(''));
              var tmpEditorState = checkReturnForState(newEditorState, {}, insertEmptyBlockOnReturnWithModifierKey);

              if (newEditorState === tmpEditorState) {
                newEditorState = modifiers_insertEmptyBlock(tmpEditorState);
              } else {
                newEditorState = tmpEditorState;
              }

              buffer = [];
            } else if (i === text.length - 1) {
              newEditorState = replaceText(newEditorState, buffer.join('') + text[i]);
              buffer = [];
            } else {
              buffer.push(text[i]);
            }
          }

          if (editorState !== newEditorState) {
            editor.setValue(newEditorState);
            return 'handled';
          }

          return 'not-handled';
        }
      });
      return editorProps;
    }
  }];
});

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

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(18);

var iterableToArrayLimit = __webpack_require__(19);

var nonIterableRest = __webpack_require__(20);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ })

/******/ });
});