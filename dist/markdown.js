(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("braft-utils"), require("draft-js"), require("immutable"));
	else if(typeof define === 'function' && define.amd)
		define(["braft-utils", "draft-js", "immutable"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("braft-utils"), require("draft-js"), require("immutable")) : factory(root["braft-utils"], root["draft-js"], root["immutable"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function(__WEBPACK_EXTERNAL_MODULE__961__, __WEBPACK_EXTERNAL_MODULE__379__, __WEBPACK_EXTERNAL_MODULE__856__) {
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

/***/ 856:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__856__;

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
  "default": () => (/* binding */ markdown)
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
// EXTERNAL MODULE: external "draft-js"
var external_draft_js_ = __webpack_require__(379);
;// CONCATENATED MODULE: ./markdown/modifiers/changeCurrentBlockType.js


var changeCurrentBlockType = function changeCurrentBlockType(editorState, type, text) {
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
  return external_draft_js_.EditorState.push(editorState, newContentState, 'change-block-type');
};

/* harmony default export */ const modifiers_changeCurrentBlockType = (changeCurrentBlockType);
;// CONCATENATED MODULE: ./markdown/modifiers/handleBlockType.js
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

var handleBlockType = function handleBlockType(editorState, character) {
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

/* harmony default export */ const modifiers_handleBlockType = (handleBlockType);
;// CONCATENATED MODULE: ./markdown/modifiers/changeCurrentInlineStyle.js


var changeCurrentInlineStyle = function changeCurrentInlineStyle(editorState, matchArr, style) {
  var currentContent = editorState.getCurrentContent();
  var selection = editorState.getSelection();
  var key = selection.getStartKey();
  var index = matchArr.index;
  var blockMap = currentContent.getBlockMap();
  var block = blockMap.get(key);
  var currentInlineStyle = block.getInlineStyleAt(index).merge();
  var newStyle = currentInlineStyle.merge([style]);
  var focusOffset = index + matchArr[0].length;
  var wordSelection = external_draft_js_.SelectionState.createEmpty(key).merge({
    anchorOffset: index + matchArr[0].indexOf(matchArr[1]),
    focusOffset: focusOffset
  });
  var newContentState = external_draft_js_.Modifier.replaceText(currentContent, wordSelection, matchArr[2], newStyle);
  newContentState = external_draft_js_.Modifier.insertText(newContentState, newContentState.getSelectionAfter(), matchArr[4]);
  var newEditorState = external_draft_js_.EditorState.push(editorState, newContentState, 'change-inline-style');
  return external_draft_js_.EditorState.forceSelection(newEditorState, newContentState.getSelectionAfter());
};

/* harmony default export */ const modifiers_changeCurrentInlineStyle = (changeCurrentInlineStyle);
;// CONCATENATED MODULE: ./markdown/modifiers/handleInlineStyle.js

var inlineMatchers = {
  BOLD: /(?:^|\s|\n|[^A-z0-9_*~`])(\*{2}|_{2})((?!\1).*?)(\1)($|\s|\n|[^A-z0-9_*~`])/g,
  ITALIC: /(?:^|\s|\n|[^A-z0-9_*~`])(\*{1}|_{1})((?!\1).*?)(\1)($|\s|\n|[^A-z0-9_*~`])/g,
  CODE: /(?:^|\s|\n|[^A-z0-9_*~`])(`)((?!\1).*?)(\1)($|\s|\n|[^A-z0-9_*~`])/g,
  STRIKETHROUGH: /(?:^|\s|\n|[^A-z0-9_*~`])(~{2})((?!\1).*?)(\1)($|\s|\n|[^A-z0-9_*~`])/g
};

var handleInlineStyle = function handleInlineStyle(editorState, character) {
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

/* harmony default export */ const modifiers_handleInlineStyle = (handleInlineStyle);
// EXTERNAL MODULE: external "immutable"
var external_immutable_ = __webpack_require__(856);
;// CONCATENATED MODULE: ./markdown/modifiers/insertEmptyBlock.js



var insertEmptyBlock = function insertEmptyBlock(editorState) {
  var blockType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'unstyled';
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var contentState = editorState.getCurrentContent();
  var selection = editorState.getSelection();
  var key = selection.getStartKey();
  var currentBlock = contentState.getBlockForKey(key);
  var emptyBlockKey = (0,external_draft_js_.genKey)();
  var emptyBlock = new external_draft_js_.ContentBlock({
    characterList: (0,external_immutable_.List)(),
    depth: 0,
    key: emptyBlockKey,
    text: '',
    type: blockType,
    data: (0,external_immutable_.Map)().merge(data)
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
  return external_draft_js_.EditorState.push(editorState, newContentState, 'split-block');
};

/* harmony default export */ const modifiers_insertEmptyBlock = (insertEmptyBlock);
;// CONCATENATED MODULE: ./markdown/modifiers/handleNewCodeBlock.js



var handleNewCodeBlock = function handleNewCodeBlock(editorState) {
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

/* harmony default export */ const modifiers_handleNewCodeBlock = (handleNewCodeBlock);
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
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
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
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
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
;// CONCATENATED MODULE: ./markdown/modifiers/insertLink.js



var insertLink = function insertLink(editorState, matchArr) {
  var currentContent = editorState.getCurrentContent();
  var selection = editorState.getSelection();
  var key = selection.getStartKey();

  var _matchArr = _slicedToArray(matchArr, 4),
      matchText = _matchArr[0],
      text = _matchArr[1],
      href = _matchArr[2],
      title = _matchArr[3];

  var index = matchArr.index;
  var focusOffset = index + matchText.length;
  var wordSelection = external_draft_js_.SelectionState.createEmpty(key).merge({
    anchorOffset: index,
    focusOffset: focusOffset
  });
  var nextContent = currentContent.createEntity('LINK', 'MUTABLE', {
    href: href,
    title: title
  });
  var entityKey = nextContent.getLastCreatedEntityKey();
  var newContentState = external_draft_js_.Modifier.replaceText(nextContent, wordSelection, text, null, entityKey);
  newContentState = external_draft_js_.Modifier.insertText(newContentState, newContentState.getSelectionAfter(), ' ');
  var newWordSelection = wordSelection.merge({
    focusOffset: index + text.length
  });
  var newEditorState = external_draft_js_.EditorState.push(editorState, newContentState, 'insert-link');
  newEditorState = external_draft_js_.RichUtils.toggleLink(newEditorState, newWordSelection, entityKey);
  return external_draft_js_.EditorState.forceSelection(newEditorState, newContentState.getSelectionAfter());
};

/* harmony default export */ const modifiers_insertLink = (insertLink);
;// CONCATENATED MODULE: ./markdown/modifiers/handleLink.js


var handleLink = function handleLink(editorState, character) {
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

/* harmony default export */ const modifiers_handleLink = (handleLink);
// EXTERNAL MODULE: external "braft-utils"
var external_braft_utils_ = __webpack_require__(961);
;// CONCATENATED MODULE: ./markdown/modifiers/insertImage.js




var insertImage = function insertImage(editorState, matchArr) {
  var currentContent = editorState.getCurrentContent();
  var selection = editorState.getSelection();
  var key = selection.getStartKey();

  var _matchArr = _slicedToArray(matchArr, 4),
      matchText = _matchArr[0],
      alt = _matchArr[1],
      src = _matchArr[2],
      title = _matchArr[3];

  var index = matchArr.index;
  var focusOffset = index + matchText.length;
  var wordSelection = external_draft_js_.SelectionState.createEmpty(key).merge({
    anchorOffset: index,
    focusOffset: focusOffset
  });
  var newContentState = external_draft_js_.Modifier.replaceText(currentContent, wordSelection, '');
  var nextEditorState = external_draft_js_.EditorState.push(editorState, newContentState, 'insert-image'); // nextEditorState = EditorState.forceSelection(nextEditorState, newContentState.getSelectionAfter())

  return external_braft_utils_.ContentUtils.insertMedias(nextEditorState, [{
    type: 'IMAGE',
    name: alt || title,
    url: src,
    meta: {
      alt: alt,
      title: title
    }
  }]);
};

/* harmony default export */ const modifiers_insertImage = (insertImage);
;// CONCATENATED MODULE: ./markdown/modifiers/handleImage.js


var handleImage = function handleImage(editorState, character) {
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

/* harmony default export */ const modifiers_handleImage = (handleImage);
;// CONCATENATED MODULE: ./markdown/modifiers/leaveList.js


var leaveList = function leaveList(editorState) {
  var contentState = editorState.getCurrentContent();
  var selection = editorState.getSelection();
  var key = selection.getStartKey();
  var currentBlock = contentState.getBlockForKey(key);
  var type = currentBlock.getType();
  return external_draft_js_.RichUtils.toggleBlockType(editorState, type);
};

/* harmony default export */ const modifiers_leaveList = (leaveList);
;// CONCATENATED MODULE: ./markdown/modifiers/insertText.js


var insertText = function insertText(editorState, text) {
  var selection = editorState.getSelection();
  var content = editorState.getCurrentContent();
  var newContentState = external_draft_js_.Modifier.insertText(content, selection, text, editorState.getCurrentInlineStyle());
  return external_draft_js_.EditorState.push(editorState, newContentState, 'insert-fragment');
};

/* harmony default export */ const modifiers_insertText = (insertText);
;// CONCATENATED MODULE: ./markdown/utils.js

function addText(editorState, bufferText) {
  var contentState = Modifier.insertText(editorState.getCurrentContent(), editorState.getSelection(), bufferText);
  return EditorState.push(editorState, contentState, 'insert-characters');
}
function replaceText(editorState, bufferText) {
  var contentState = external_draft_js_.Modifier.replaceText(editorState.getCurrentContent(), editorState.getSelection(), bufferText);
  return external_draft_js_.EditorState.push(editorState, contentState, 'insert-characters');
}
;// CONCATENATED MODULE: ./markdown/index.jsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

/* harmony default export */ const markdown = (function (options) {
  options = _objectSpread({
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
      editorProps = _objectSpread(_objectSpread({}, editorProps), {
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
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});