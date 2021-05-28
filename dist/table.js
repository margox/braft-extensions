(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("braft-editor"), require("braft-utils"), require("draft-js"), require("immutable"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["braft-editor", "braft-utils", "draft-js", "immutable", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("braft-editor"), require("braft-utils"), require("draft-js"), require("immutable"), require("react")) : factory(root["braft-editor"], root["braft-utils"], root["draft-js"], root["immutable"], root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function(__WEBPACK_EXTERNAL_MODULE__163__, __WEBPACK_EXTERNAL_MODULE__961__, __WEBPACK_EXTERNAL_MODULE__379__, __WEBPACK_EXTERNAL_MODULE__856__, __WEBPACK_EXTERNAL_MODULE__297__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 163:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__163__;

/***/ }),

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
  "TableUtils": () => (/* binding */ TableUtils),
  "default": () => (/* binding */ table),
  "dropdownInstance": () => (/* binding */ dropdownInstance)
});

// NAMESPACE OBJECT: ./table/utils.js
var utils_namespaceObject = {};
__webpack_require__.r(utils_namespaceObject);
__webpack_require__.d(utils_namespaceObject, {
  "getCellCountForInsert": () => (getCellCountForInsert),
  "getCellsInsideRect": () => (getCellsInsideRect),
  "insertCell": () => (insertCell),
  "insertCells": () => (insertCells),
  "insertColumn": () => (insertColumn),
  "insertRow": () => (insertRow),
  "insertTable": () => (insertTable),
  "mergeCells": () => (mergeCells),
  "rebuildTableBlocks": () => (rebuildTableBlocks),
  "rebuildTableNode": () => (rebuildTableNode),
  "removeColumn": () => (removeColumn),
  "removeRow": () => (removeRow),
  "removeTable": () => (removeTable),
  "splitCell": () => (splitCell),
  "updateAllTableBlocks": () => (updateAllTableBlocks)
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
// EXTERNAL MODULE: external "draft-js"
var external_draft_js_ = __webpack_require__(379);
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
// EXTERNAL MODULE: external "immutable"
var external_immutable_ = __webpack_require__(856);
var external_immutable_default = /*#__PURE__*/__webpack_require__.n(external_immutable_);
;// CONCATENATED MODULE: ./table/utils.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // 简易的值比较方法

var valueComparison = function valueComparison(value1, value2, operator) {
  switch (operator) {
    case '==':
      return value1 == value2;

    case '>=':
      return value1 >= value2;

    case '<=':
      return value1 <= value2;

    case '>':
      return value1 > value2;

    case '<':
      return value1 < value2;
  }
}; // 创建并返回一个单元格block


var createCellBlock = function createCellBlock(cell) {
  cell = _objectSpread({
    colSpan: 1,
    rowSpan: 1,
    text: ''
  }, cell);
  var _cell = cell,
      tableKey = _cell.tableKey,
      key = _cell.key,
      colIndex = _cell.colIndex,
      rowIndex = _cell.rowIndex,
      colSpan = _cell.colSpan,
      rowSpan = _cell.rowSpan,
      text = _cell.text,
      isHead = _cell.isHead;
  return new external_draft_js_.ContentBlock({
    key: key || (0,external_draft_js_.genKey)(),
    type: 'table-cell',
    text: text,
    data: external_immutable_default().Map({
      tableKey: tableKey,
      colIndex: colIndex,
      rowIndex: rowIndex,
      colSpan: colSpan,
      rowSpan: rowSpan,
      isHead: isHead
    }),
    characterList: external_immutable_default().List(external_immutable_default().Repeat(external_draft_js_.CharacterMetadata.create(), text.length))
  });
};

var createUnstyledBlock = function createUnstyledBlock() {
  var key = (0,external_draft_js_.genKey)();
  return [key, new external_draft_js_.ContentBlock({
    key: key,
    type: 'unstyled',
    text: '',
    data: external_immutable_default().Map({}),
    characterList: external_immutable_default().List([])
  })];
}; // 创建并返回一行单元格block


var createRowBlocks = function createRowBlocks(tableKey, rowIndex, rowLength) {
  var firstCellText = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var cells = external_immutable_default().Range(0, rowLength).map(function (index) {
    var cellBlock = createCellBlock({
      tableKey: tableKey,
      colIndex: index,
      rowIndex: rowIndex,
      text: index === 0 ? firstCellText : ''
    });
    return [cellBlock.getKey(), cellBlock];
  }).toArray();
  return external_immutable_default().OrderedMap(cells).toSeq();
}; // 将表格block更新到contentState


var updateTableBlocks = function updateTableBlocks(contentState, selection, focusKey, tableBlocks, tableKey) {
  var contentBlocks = contentState.getBlockMap().toSeq();
  var blocksBefore = contentBlocks.takeUntil(function (block) {
    return block.getData().get('tableKey') === tableKey;
  });
  var blocksAfter = contentBlocks.skipUntil(function (block, key) {
    var nextBlockKey = contentState.getKeyAfter(key);
    return block.getData().get('tableKey') === tableKey && nextBlockKey && contentState.getBlockForKey(nextBlockKey).getData().get('tableKey') !== tableKey;
  }).rest();
  return contentState.merge({
    blockMap: blocksBefore.concat(tableBlocks, blocksAfter).toOrderedMap(),
    selectionBefore: selection,
    selectionAfter: selection.merge({
      anchorKey: focusKey,
      anchorOffset: 0,
      focusKey: focusKey,
      focusOffset: 0,
      hasFocus: false,
      isBackward: false
    })
  });
}; // 使用简易值比较函数筛选符合条件的block


var findBlocks = function findBlocks(contentBlocks, propName, propValue) {
  var operator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '==';
  return contentBlocks.filter(function (block) {
    return valueComparison(block.getData().get(propName), propValue, operator);
  });
}; // 遍历以修正单元格的colIndex属性（表格blocks专用）


var rebuildTableBlocks = function rebuildTableBlocks(tableBlocks) {
  var addonBlockData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var skipedCells = {};
  var cellCountOfRow = [];
  return tableBlocks.map(function (block) {
    var blockData = block.getData();
    var rowIndex = blockData.get('rowIndex');
    var colSpan = blockData.get('colSpan') || 1;
    var rowSpan = blockData.get('rowSpan') || 1;
    cellCountOfRow[rowIndex] = cellCountOfRow[rowIndex] || 0;
    cellCountOfRow[rowIndex]++;
    var cellIndex = cellCountOfRow[rowIndex] - 1;
    var colIndex = cellIndex;
    var xx, yy;

    for (; skipedCells[rowIndex] && skipedCells[rowIndex][colIndex]; colIndex++, cellCountOfRow[rowIndex]++) {
      ;
    }

    if (rowSpan > 1 || colSpan > 1) {
      for (xx = rowIndex; xx < rowIndex + rowSpan; xx++) {
        for (yy = colIndex; yy < colIndex + colSpan; yy++) {
          skipedCells[xx] = skipedCells[xx] || {};
          skipedCells[xx][yy] = true;
        }
      }
    }

    return block.merge({
      'data': external_immutable_default().Map(_objectSpread(_objectSpread(_objectSpread({}, blockData.toJS()), addonBlockData), {}, {
        colIndex: colIndex
      }))
    });
  });
}; // 遍历以修正单元格的colSpan和rowSpan属性（表格DOM专用）

var rebuildTableNode = function rebuildTableNode(tableNode) {
  var tableKey = (0,external_draft_js_.genKey)();
  var skipedCells = {};
  [].forEach.call(tableNode.rows, function (row, rowIndex) {
    [].forEach.call(row.cells, function (cell, cellIndex) {
      var colIndex = cellIndex;
      var xx, yy;

      for (; skipedCells[rowIndex] && skipedCells[rowIndex][colIndex]; colIndex++) {
        /*_*/
      }

      var rowSpan = cell.rowSpan,
          colSpan = cell.colSpan;

      if (rowSpan > 1 || colSpan > 1) {
        for (xx = rowIndex; xx < rowIndex + rowSpan; xx++) {
          for (yy = colIndex; yy < colIndex + colSpan; yy++) {
            skipedCells[xx] = skipedCells[xx] || {};
            skipedCells[xx][yy] = true;
          }
        }
      }

      cell.innerHTML = cell.innerHTML.replace(/\n\s*$/, '');
      cell.dataset.tableKey = tableKey;
      cell.dataset.colIndex = colIndex;
      cell.dataset.rowIndex = rowIndex;
    });
  });
};
var updateAllTableBlocks = function updateAllTableBlocks(editorState, tableKey, blockData) {
  var selectionState = editorState.getSelection();
  var contentState = editorState.getCurrentContent();
  var contentBlocks = contentState.getBlockMap();
  var tableBlocks = findBlocks(contentBlocks, 'tableKey', tableKey);
  var nextTableBlocks = rebuildTableBlocks(tableBlocks, blockData);
  var nextContentState = updateTableBlocks(contentState, editorState.getSelection(), selectionState.focusKey, nextTableBlocks, tableKey);
  return external_draft_js_.EditorState.push(editorState, nextContentState, 'insert-table-row');
}; // 获取需要插入到某一行的单元格的数量

var getCellCountForInsert = function getCellCountForInsert(tableBlocks, rowIndex) {
  return findBlocks(tableBlocks, 'rowIndex', rowIndex).reduce(function (count, block) {
    return count + (block.getData().get('colSpan') || 1) * 1;
  }, 0);
}; // 获取指定范围内的单元格block

var getCellsInsideRect = function getCellsInsideRect(editorState, tableKey, startLocation, endLocation) {
  var _startLocation = _slicedToArray(startLocation, 2),
      startColIndex = _startLocation[0],
      startRowIndex = _startLocation[1];

  var _endLocation = _slicedToArray(endLocation, 2),
      endColIndex = _endLocation[0],
      endRowIndex = _endLocation[1];

  var leftColIndex = Math.min(startColIndex, endColIndex);
  var rightColIndex = Math.max(startColIndex, endColIndex);
  var upRowIndex = Math.min(startRowIndex, endRowIndex);
  var downRowIndex = Math.max(startRowIndex, endRowIndex);
  var matchedCellLocations = [];

  for (var ii = leftColIndex; ii <= rightColIndex; ii++) {
    for (var jj = upRowIndex; jj <= downRowIndex; jj++) {
      matchedCellLocations.push([ii, jj]);
    }
  }

  if (matchedCellLocations.length === 0) {
    return external_immutable_default().OrderedMap([]);
  }

  var contentState = editorState.getCurrentContent();
  var contentBlocks = contentState.getBlockMap();
  var tableBlocks = findBlocks(contentBlocks, 'tableKey', tableKey);
  var matchedCellBlockKeys = [];
  var spannedCellBlockKeys = [];
  var matchedCellBlocks = external_immutable_default().List([]);
  var spannedCellBlocks = external_immutable_default().List([]);
  tableBlocks.forEach(function (block) {
    var blockData = block.getData();
    var blockKey = block.getKey();
    var colIndex = blockData.get('colIndex');
    var rowIndex = blockData.get('rowIndex');
    var colSpan = blockData.get('colSpan');
    var rowSpan = blockData.get('rowSpan');
    matchedCellLocations.forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          x = _ref2[0],
          y = _ref2[1];

      if (colIndex === x && rowIndex === y) {
        matchedCellBlockKeys.indexOf(blockKey) === -1 && (matchedCellBlocks = matchedCellBlocks.push(block)) && matchedCellBlockKeys.push(blockKey);
        (colSpan > 1 || rowSpan > 1) && spannedCellBlockKeys.indexOf(blockKey) === -1 && (spannedCellBlocks = spannedCellBlocks.push(block)) && spannedCellBlockKeys.push(blockKey);
      } else if (colSpan > 1 || rowSpan > 1) {
        if (colIndex <= x && colIndex + colSpan > x && rowIndex <= y && rowIndex + rowSpan > y) {
          spannedCellBlockKeys.indexOf(blockKey) === -1 && (spannedCellBlocks = spannedCellBlocks.push(block)) && spannedCellBlockKeys.push(blockKey);
        }
      }
    });
  });
  return {
    cellBlocks: matchedCellBlocks.merge(spannedCellBlocks),
    cellKeys: [].concat(matchedCellBlockKeys, spannedCellBlockKeys),
    // todo: 去重复
    spannedCellBlocks: spannedCellBlocks,
    spannedCellBlockKeys: spannedCellBlockKeys
  };
}; // 插入一个单元格block到表格的block列表中

var insertCell = function insertCell(tableBlocks, cell) {
  var colIndex, rowIndex, cellBlock;

  if (cell instanceof external_draft_js_.ContentBlock) {
    colIndex = cell.getData().get('colIndex');
    rowIndex = cell.getData().get('rowIndex');
    cellBlock = cell;
  } else {
    colIndex = cell.colIndex;
    rowIndex = cell.rowIndex;
    cellBlock = createCellBlock(cell);
  }

  var blocksBefore = tableBlocks.takeUntil(function (block) {
    var blockRowIndex = block.getData().get('rowIndex');
    var blockColIndex = block.getData().get('colIndex');
    return blockColIndex >= colIndex && blockRowIndex === rowIndex || blockRowIndex > rowIndex;
  });
  var blocksAfter = tableBlocks.skipUntil(function (block) {
    var blockRowIndex = block.getData().get('rowIndex');
    var blockColIndex = block.getData().get('colIndex');
    return blockColIndex >= colIndex && blockRowIndex === rowIndex || blockRowIndex > rowIndex;
  });
  var nextTableBlocks = blocksBefore.concat(external_immutable_default().OrderedMap([[cellBlock.getKey(), cellBlock]]).toSeq(), blocksAfter);
  return nextTableBlocks;
}; // 插入多个单元格block到表格的block列表中

var insertCells = function insertCells(tableBlocks) {
  var cells = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return cells.reduce(function (nextTableBlocks, cell) {
    return insertCell(nextTableBlocks, cell);
  }, tableBlocks);
}; // 插入表格

var insertTable = function insertTable(editorState) {
  var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  var rows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

  if (external_braft_utils_.ContentUtils.selectionContainsStrictBlock(editorState)) {
    return editorState;
  }

  var selectionState = editorState.getSelection();
  var contentState = editorState.getCurrentContent();
  var contentBlocks = contentState.getBlockMap();
  var tableKey = (0,external_draft_js_.genKey)();
  var cellBlocks = [createUnstyledBlock()];

  for (var ii = 0; ii < rows; ii++) {
    for (var jj = 0; jj < columns; jj++) {
      var cellBlock = createCellBlock({
        tableKey: tableKey,
        colIndex: jj,
        rowIndex: ii
      });
      cellBlocks.push([cellBlock.getKey(), cellBlock]);
    }
  }

  cellBlocks.push(createUnstyledBlock());
  var startKey = selectionState.getStartKey();
  var currentBlock = contentState.getBlockForKey(startKey);
  var blocksBefore = contentBlocks.toSeq().takeUntil(function (block) {
    return block === currentBlock;
  });
  var blocksAfter = contentBlocks.toSeq().skipUntil(function (block) {
    return block === currentBlock;
  }).rest();
  var tableBlocks = external_immutable_default().OrderedMap(cellBlocks).toSeq();
  var firstCellKey = cellBlocks[1][0];
  var nextContentBlocks = blocksBefore.concat(external_immutable_default().OrderedMap([[startKey, currentBlock]]).toSeq(), tableBlocks, blocksAfter).toOrderedMap();
  var nextContentState = contentState.merge({
    blockMap: nextContentBlocks,
    selectionBefore: selectionState,
    selectionAfter: selectionState.merge({
      anchorKey: firstCellKey,
      anchorOffset: selectionState.getStartOffset(),
      focusKey: firstCellKey,
      focusOffset: selectionState.getStartOffset(),
      isBackward: false
    })
  });
  return external_draft_js_.EditorState.push(editorState, nextContentState, 'insert-table');
}; // 删除整个表格

var removeTable = function removeTable(editorState, tableKey) {
  if (!tableKey) {
    return editorState;
  }

  var selectionState = editorState.getSelection();
  var contentState = editorState.getCurrentContent();
  var contentBlocks = contentState.getBlockMap();
  var tableBlocks = findBlocks(contentBlocks, 'tableKey', tableKey);
  var nextContentBlocks = contentBlocks.filter(function (block) {
    if (block.getType() === 'table-cell' && block.getData().get('tableKey') === tableKey) {
      return false;
    } else {
      return true;
    }
  });
  var focusCellKey = (tableBlocks.first() ? contentState.getBlockBefore(tableBlocks.first().getKey()) || nextContentBlocks.first() : nextContentBlocks.first()).getKey();
  var nextContentState = contentState.merge({
    blockMap: nextContentBlocks,
    selectionBefore: selectionState,
    selectionAfter: selectionState.merge({
      anchorKey: focusCellKey,
      anchorOffset: selectionState.getStartOffset(),
      focusKey: focusCellKey,
      focusOffset: selectionState.getStartOffset(),
      isBackward: false
    })
  });
  return external_draft_js_.EditorState.push(editorState, nextContentState, 'remove-table');
}; // 插入一列单元格到表格中

var insertColumn = function insertColumn(editorState, tableKey, cellCounts, colIndex) {
  var contentState = editorState.getCurrentContent();
  var contentBlocks = contentState.getBlockMap();
  var tableBlocks = findBlocks(contentBlocks, 'tableKey', tableKey);
  var cellsToBeAdded = [];

  if (colIndex === 0) {
    for (var ii = 0; ii < cellCounts; ii++) {
      cellsToBeAdded.push({
        text: '',
        colIndex: 0,
        rowIndex: ii,
        colSpan: 1,
        rowSpan: 1,
        tableKey: tableKey
      });
    }
  }

  var nextTableBlocks = tableBlocks.map(function (block) {
    var blockData = block.getData().toJS();
    var blockColIndex = blockData.colIndex,
        blockRowIndex = blockData.rowIndex,
        blockColSpan = blockData.colSpan,
        blockRowSpan = blockData.rowSpan;
    var nextColIndex = blockColIndex < colIndex ? blockColIndex : blockColIndex + 1;
    var nextColSpan = blockColIndex < colIndex && blockColSpan > 1 && blockColIndex + blockColSpan > colIndex ? blockColSpan + 1 : blockColSpan;
    var needUpdate = nextColIndex !== blockColIndex || nextColSpan !== blockColSpan;

    if (blockColSpan === 1 && blockColIndex === colIndex - 1 || blockColSpan > 1 && blockColIndex + blockColSpan === colIndex) {
      for (var jj = blockRowIndex; jj < blockRowIndex + blockRowSpan; jj++) {
        cellsToBeAdded.push({
          text: '',
          colIndex: colIndex,
          rowIndex: jj,
          colSpan: 1,
          rowSpan: 1,
          tableKey: tableKey
        });
      }
    }

    return needUpdate ? block.merge({
      data: external_immutable_default().Map(_objectSpread(_objectSpread({}, blockData), {}, {
        colIndex: nextColIndex,
        colSpan: nextColSpan
      }))
    }) : block;
  });

  if (cellsToBeAdded.length === 0) {
    return editorState;
  }

  var focusCellKey = cellsToBeAdded[0].key = (0,external_draft_js_.genKey)();
  var nextContentState = updateTableBlocks(contentState, editorState.getSelection(), focusCellKey, insertCells(nextTableBlocks, cellsToBeAdded), tableKey);
  return external_draft_js_.EditorState.push(editorState, nextContentState, 'insert-table-column');
}; // 从表格中移除指定的某一列单元格

var removeColumn = function removeColumn(editorState, tableKey, colIndex) {
  var contentState = editorState.getCurrentContent();
  var contentBlocks = contentState.getBlockMap().toSeq();
  var tableBlocks = findBlocks(contentBlocks, 'tableKey', tableKey);
  var cellsToBeAdded = findBlocks(tableBlocks, 'colIndex', colIndex).reduce(function (cellsToBeAdded, block) {
    var _block$getData$toJS = block.getData().toJS(),
        colIndex = _block$getData$toJS.colIndex,
        rowIndex = _block$getData$toJS.rowIndex,
        colSpan = _block$getData$toJS.colSpan,
        rowSpan = _block$getData$toJS.rowSpan;

    if (colSpan > 1) {
      cellsToBeAdded.push({
        text: block.getText(),
        tableKey: tableKey,
        colIndex: colIndex,
        rowIndex: rowIndex,
        colSpan: colSpan - 1,
        rowSpan: rowSpan
      });
    }

    return cellsToBeAdded;
  }, []);
  var nextTableBlocks = tableBlocks.filter(function (block) {
    return block.getData().get('colIndex') * 1 !== colIndex;
  }).map(function (block) {
    var blockData = block.getData().toJS();
    var blockColIndex = blockData.colIndex,
        blockColSpan = blockData.colSpan;
    var newColIndex = blockColIndex > colIndex ? blockColIndex - 1 : blockColIndex;
    var newColSpan = blockColIndex < colIndex && blockColIndex + blockColSpan > colIndex ? blockColSpan - 1 : blockColSpan;
    var needUpdate = newColIndex !== blockColIndex || newColSpan !== blockColSpan;
    return needUpdate ? block.merge({
      'data': _objectSpread(_objectSpread({}, blockData), {}, {
        colIndex: newColIndex,
        colSpan: newColSpan
      })
    }) : block;
  });
  var focusCellKey = (nextTableBlocks.first() || contentState.getBlockBefore(tableBlocks.first().getKey()) || contentState.getBlockAfter(tableBlocks.first().getKey())).getKey();
  var nextContentState = updateTableBlocks(contentState, editorState.getSelection(), focusCellKey, insertCells(nextTableBlocks, cellsToBeAdded), tableKey);
  return external_draft_js_.EditorState.push(editorState, nextContentState, 'remove-table-column');
}; // 插入一行单元格到表格中

var insertRow = function insertRow(editorState, tableKey, cellCounts, rowIndex, addonBlockData) {
  var contentState = editorState.getCurrentContent();
  var contentBlocks = contentState.getBlockMap().toSeq();
  var tableBlocks = findBlocks(contentBlocks, 'tableKey', tableKey);
  var blocksBefore = findBlocks(tableBlocks, 'rowIndex', rowIndex, '<').map(function (block) {
    var blockData = block.getData().toJS();
    var blockRowIndex = blockData.rowIndex,
        blockRowSpan = blockData.rowSpan;

    if (blockRowIndex > rowIndex) {
      return block;
    } else {
      var needUpdate = blockRowSpan && blockRowIndex + blockRowSpan > rowIndex;
      var newRowSpan = needUpdate ? blockRowSpan * 1 + 1 : blockRowSpan;
      return block.merge({
        'data': external_immutable_default().Map(_objectSpread(_objectSpread({}, blockData), {}, {
          rowSpan: newRowSpan
        }))
      });
    }
  });
  var blocksAfter = findBlocks(tableBlocks, 'rowIndex', rowIndex, '>=').map(function (block) {
    var blockData = block.getData().toJS();
    return block.merge({
      'data': external_immutable_default().Map(_objectSpread(_objectSpread({}, blockData), {}, {
        rowIndex: blockData.rowIndex * 1 + 1
      }))
    });
  });
  var colCellLength = getCellCountForInsert(tableBlocks, rowIndex);
  var rowBlocks = createRowBlocks(tableKey, rowIndex, colCellLength || cellCounts);
  var focusCellKey = rowBlocks.first().getKey();
  var nextTableBlocks = rebuildTableBlocks(blocksBefore.concat(rowBlocks, blocksAfter), addonBlockData);
  var nextContentState = updateTableBlocks(contentState, editorState.getSelection(), focusCellKey, nextTableBlocks, tableKey);
  return external_draft_js_.EditorState.push(editorState, nextContentState, 'insert-table-row');
}; // 从表格中移除指定的某一行单元格

var removeRow = function removeRow(editorState, tableKey, rowIndex, addonBlockData) {
  var contentState = editorState.getCurrentContent();
  var contentBlocks = contentState.getBlockMap().toSeq();
  var tableBlocks = findBlocks(contentBlocks, 'tableKey', tableKey);
  var blocksBefore = findBlocks(tableBlocks, 'rowIndex', rowIndex, '<').map(function (block) {
    var blockData = block.getData().toJS();
    var blockRowIndex = blockData.rowIndex,
        blockRowSpan = blockData.rowSpan;

    if (blockRowIndex > rowIndex) {
      return block;
    } else {
      var needUpdate = blockRowSpan && blockRowIndex + blockRowSpan > rowIndex;
      var newRowSpan = needUpdate ? blockRowSpan * 1 - 1 : blockRowSpan;
      return block.merge({
        'data': external_immutable_default().Map(_objectSpread(_objectSpread({}, blockData), {}, {
          rowSpan: newRowSpan
        }))
      });
    }
  });
  var blocksAfter = findBlocks(tableBlocks, 'rowIndex', rowIndex, '>').map(function (block) {
    var blockData = block.getData().toJS();
    return block.merge({
      'data': external_immutable_default().Map(_objectSpread(_objectSpread({}, blockData), {}, {
        rowIndex: blockData.rowIndex * 1 - 1
      }))
    });
  });
  var cellsToBeAdded = findBlocks(tableBlocks, 'rowIndex', rowIndex).reduce(function (cellsToBeAdded, block) {
    var _block$getData$toJS2 = block.getData().toJS(),
        colIndex = _block$getData$toJS2.colIndex,
        rowIndex = _block$getData$toJS2.rowIndex,
        colSpan = _block$getData$toJS2.colSpan,
        rowSpan = _block$getData$toJS2.rowSpan;

    if (rowSpan > 1) {
      cellsToBeAdded.push({
        text: block.getText(),
        tableKey: tableKey,
        colIndex: colIndex,
        rowIndex: rowIndex,
        colSpan: colSpan,
        rowSpan: rowSpan - 1
      });
    }

    return cellsToBeAdded;
  }, []);
  var focusCellKey = (blocksAfter.first() || blocksBefore.last() || contentBlocks.first()).getKey();
  var nextTableBlocks = rebuildTableBlocks(insertCells(blocksBefore.concat(blocksAfter), cellsToBeAdded), addonBlockData);
  var nextContentState = updateTableBlocks(contentState, editorState.getSelection(), focusCellKey, nextTableBlocks, tableKey, true);
  return external_draft_js_.EditorState.push(editorState, nextContentState, 'remove-table-row');
}; // 合并单元格

var mergeCells = function mergeCells(editorState, tableKey, cellKeys) {
  var contentState = editorState.getCurrentContent();
  var contentBlocks = contentState.getBlockMap();
  var cellBlocksData = [];
  var mergedText = '';
  var tableBlocks = findBlocks(contentBlocks, 'tableKey', tableKey).filter(function (block) {
    if (~cellKeys.indexOf(block.getKey())) {
      mergedText += block.getText();
      cellBlocksData.push(_objectSpread({
        key: block.getKey()
      }, block.getData().toJS()));
      return false;
    } else {
      return true;
    }
  });
  var sortedCellBlocksData = cellBlocksData.sort(function (prev, next) {
    return next.colIndex + next.rowIndex - (prev.colIndex + prev.rowIndex);
  });
  var firstCellData = sortedCellBlocksData.slice(-1)[0];
  var lastCellData = sortedCellBlocksData[0];
  var mergedCell = contentState.getBlockForKey(firstCellData.key).merge({
    'text': mergedText,
    'data': external_immutable_default().Map(_objectSpread(_objectSpread({}, firstCellData), {}, {
      colSpan: lastCellData.colIndex - firstCellData.colIndex + 1,
      rowSpan: lastCellData.rowIndex - firstCellData.rowIndex + 1
    })),
    characterList: external_immutable_default().List(external_immutable_default().Repeat(external_draft_js_.CharacterMetadata.create(), mergedText.length))
  });
  var nextContentState = updateTableBlocks(contentState, editorState.getSelection(), firstCellData.key, insertCell(tableBlocks, mergedCell), tableKey);
  return external_draft_js_.EditorState.push(editorState, nextContentState, 'merge-table-cell');
}; // 拆分单元格

var splitCell = function splitCell(editorState, tableKey, cellKey) {
  var contentState = editorState.getCurrentContent();
  var contentBlocks = contentState.getBlockMap();
  var cellsToBeAdded = [];
  var tableBlocks = findBlocks(contentBlocks, 'tableKey', tableKey).map(function (block) {
    if (block.getKey() === cellKey) {
      var blockData = block.getData().toJS();
      var colIndex = blockData.colIndex,
          rowIndex = blockData.rowIndex,
          colSpan = blockData.colSpan,
          rowSpan = blockData.rowSpan;

      if (colSpan === 1 && rowSpan === 1) {
        return block;
      }

      for (var ii = colIndex; ii < colIndex + colSpan; ii++) {
        for (var jj = rowIndex; jj < rowIndex + rowSpan; jj++) {
          if (ii !== colIndex || jj !== rowIndex) {
            cellsToBeAdded.push({
              text: '',
              tableKey: tableKey,
              colIndex: ii,
              rowIndex: jj,
              colSpan: 1,
              rowSpan: 1
            });
          }
        }
      }

      return block.merge({
        'data': external_immutable_default().Map(_objectSpread(_objectSpread({}, blockData), {}, {
          colSpan: 1,
          rowSpan: 1
        }))
      });
    } else {
      return block;
    }
  });
  var nextContentState = updateTableBlocks(contentState, editorState.getSelection(), cellKey, insertCells(tableBlocks, cellsToBeAdded), tableKey);
  return external_draft_js_.EditorState.push(editorState, nextContentState, 'merge-table-cell');
};
;// CONCATENATED MODULE: ./table/handlers.js


 // todo
// 禁止选中多个单元格式时进行输入和粘贴操作
// 可以按tab/shift + tab键切换选中单元格
// 可以按方向键切换选中表格
// 在最后一个单元格中按Shift + 回车跳出表格

var handleKeyCommand = function handleKeyCommand(oringeHandler) {
  return function (command, editorState, editor) {
    if (oringeHandler && oringeHandler(command, editorState, editor) === 'handled') {
      return 'handled';
    }

    if ('backspace' === command) {
      var contentState = editorState.getCurrentContent();
      var focusOffset = editorState.getSelection().getFocusOffset();

      if (focusOffset === 0) {
        var _currentBlock = external_braft_utils_.ContentUtils.getSelectionBlock(editorState);

        var beforeBlock = contentState.getBlockBefore(_currentBlock.getKey());
        if (!beforeBlock) return 'not-handled';

        if ('table-cell' === beforeBlock.getType()) {
          // 当前行 之前是表格的情况 特殊处理
          var tableKey = beforeBlock.getData().get('tableKey');
          editor.setValue(removeTable(editorState, tableKey));
          return 'handled';
        }
      }
    }

    var selectedBlocks = external_braft_utils_.ContentUtils.getSelectedBlocks(editorState);

    if (!selectedBlocks.find(function (block) {
      return block.getType() === 'table-cell';
    })) {
      return 'not-handled';
    }

    var currentBlock = external_braft_utils_.ContentUtils.getSelectionBlock(editorState);

    if (['backspace', 'delete'].indexOf(command) > -1) {
      if (selectedBlocks.length > 1) {
        return 'handled';
      }

      var textLen = currentBlock.getLength();

      if (textLen === 0) {
        return 'handled';
      }

      var _focusOffset = editorState.getSelection().getFocusOffset();

      if (command === 'backspace' && _focusOffset === 0) {
        return 'handled';
      }

      if (command === 'delete' && _focusOffset === textLen) {
        return 'handled';
      }
    } else if (command === 'tab') {
      return 'handled';
    }
  };
};
var handleReturn = function handleReturn(oringeHandler) {
  return function (event, editorState, editor) {
    if (oringeHandler && oringeHandler(event, editorState, editor) === 'handled') {
      return 'handled';
    }

    if (!external_braft_utils_.ContentUtils.selectionContainsBlockType(editorState, 'table-cell')) {
      return 'not-handled';
    }

    var blockType = external_braft_utils_.ContentUtils.getSelectionBlockType(editorState);

    if (blockType !== 'table-cell') {
      return 'not-handled';
    }

    editor.setValue(external_draft_js_.RichUtils.insertSoftNewline(editorState));
    return 'handled';
  };
};
var handleDroppedFiles = function handleDroppedFiles(oringeHandler) {
  return function (selectionState, files, editor) {
    if (oringeHandler && oringeHandler(selectionState, files, editor) === 'handled') {
      return 'handled';
    }

    if (!external_braft_utils_.ContentUtils.selectionContainsBlockType(editor.state.editorState, 'table-cell')) {
      return 'not-handled';
    }

    var currentBlock = external_braft_utils_.ContentUtils.getSelectionBlock(editor.state.editorState);

    if (currentBlock.getType() === 'table-cell') {
      return 'handled';
    }
  };
};
var handlePastedFiles = function handlePastedFiles(oringeHandler) {
  return function (files, editor) {
    if (oringeHandler && oringeHandler(files, editor) === 'handled') {
      return 'handled';
    }

    if (!external_braft_utils_.ContentUtils.selectionContainsBlockType(editor.state.editorState, 'table-cell')) {
      return 'not-handled';
    }

    var currentBlock = external_braft_utils_.ContentUtils.getSelectionBlock(editor.state.editorState);

    if (currentBlock.getType() === 'table-cell') {
      return 'handled';
    }
  };
};
var handlePastedText = function handlePastedText(oringeHandler) {
  return function (text, html, editorState, editor) {
    if (oringeHandler && oringeHandler(text, html, editorState, editor) === 'handled') {
      return 'handled';
    }

    var selectedBlocks = external_braft_utils_.ContentUtils.getSelectedBlocks(editor.state.editorState);

    if (!selectedBlocks.find(function (block) {
      return block.getType() === 'table-cell';
    })) {
      return 'not-handled';
    }

    if (selectedBlocks.length === 1) {
      editor.setValue(external_braft_utils_.ContentUtils.insertText(editor.state.editorState, text));
    }

    return 'handled';
  };
};
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
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
;// CONCATENATED MODULE: ./table/languages.js
var zh = {
  'rows': '行数',
  'columns': '列数',
  'cancel': '取消',
  'insertTable': '插入',
  'removeTable': '删除表格',
  'insertColumn': '插入列',
  'removeColumn': '删除列',
  'insertRow': '插入行',
  'removeRow': '删除行',
  'mergeCells': '合并单元格',
  'splitCell': '拆分单元格'
};
var zhHant = {
  'rows': '行数',
  'columns': '列数',
  'cancel': '取消',
  'insertTable': '插入',
  'removeTable': '删除表格',
  'insertColumn': '插入列',
  'removeColumn': '删除列',
  'insertRow': '插入行',
  'removeRow': '删除行',
  'mergeCells': '合并单元格',
  'splitCell': '拆分单元格'
};
var en = {
  'rows': 'Rows',
  'columns': 'Columns',
  'cancel': 'Cancel',
  'insertTable': 'Insert',
  'removeTable': 'Remove Table',
  'insertColumn': 'Insert Column',
  'removeColumn': 'Remove Column',
  'insertRow': 'Insert Row',
  'removeRow': 'Remove Row',
  'mergeCells': 'Merge Cells',
  'splitCell': 'Split Cell'
};
var pl = {
  'rows': 'Wiersz',
  'columns': 'Kolumnę',
  'cancel': 'Anuluj',
  'insertTable': 'Wstaw',
  'removeTable': 'Usuń tabelę',
  'insertColumn': 'Wstaw kolumnę',
  'removeColumn': 'Usuń kolumnę',
  'insertRow': 'Wstaw wiersz',
  'removeRow': 'Usuń wiersz',
  'mergeCells': 'Scal komórki',
  'splitCell': 'Podziel komórkę'
};
var kr = {
  'rows': '행수',
  'columns': '열수',
  'cancel': '취소',
  'insertTable': '삽입',
  'removeTable': '양식삭제',
  'insertColumn': '열삽입',
  'removeColumn': '열삭제',
  'insertRow': '행삽입',
  'removeRow': '행삭제',
  'mergeCells': '행삽입',
  'splitCell': '셀분할'
};
var jpn = {
  'rows': '行数',
  'columns': '列数',
  'cancel': 'キャンセル',
  'insertTable': '挿入する',
  'removeTable': 'フォームを削除',
  'insertColumn': '列を挿入',
  'removeColumn': '列を削除',
  'insertRow': '行を挿入',
  'removeRow': '行を削除',
  'mergeCells': 'セルを結合',
  'splitCell': '分割セル'
};
var pt_br = {
  'rows': 'Linhas',
  'columns': 'Colunas',
  'cancel': 'Cancelar',
  'insertTable': 'Inserir',
  'removeTable': 'Remover Tabela',
  'insertColumn': 'Inserir Coluna',
  'removeColumn': 'Remover Coluna',
  'insertRow': 'Inserir Linha',
  'removeRow': 'Remover Linha',
  'mergeCells': 'Mesclar',
  'splitCell': 'Dividir'
};
var nl = {
  'rows': 'Rijen',
  'columns': 'Kolommen',
  'cancel': 'Annuleer',
  'insertTable': 'Invoegen',
  'removeTable': 'Verwijder Tabel',
  'insertColumn': 'Voeg kolom in',
  'removeColumn': 'Verwijder kolom',
  'insertRow': 'Voeg rij in',
  'removeRow': 'Verwijder rij',
  'mergeCells': 'Samenvoegen cellen',
  'splitCell': 'Split cell'
};
/* harmony default export */ const languages = ({
  zh: zh,
  zhHant: zhHant,
  en: en,
  pl: pl,
  jpn: jpn,
  kr: kr,
  pt_br: pt_br,
  nl: nl
});
// EXTERNAL MODULE: external "braft-editor"
var external_braft_editor_ = __webpack_require__(163);
var external_braft_editor_default = /*#__PURE__*/__webpack_require__.n(external_braft_editor_);
;// CONCATENATED MODULE: ./table/render.jsx









function render_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function render_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { render_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { render_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var getIndexFromEvent = function getIndexFromEvent(event) {
  var ignoredTarget = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (!isNaN(event)) {
    return event * 1;
  } else if (ignoredTarget && event && event.target && event.target.dataset.role === ignoredTarget) {
    return false;
  } else if (event && event.currentTarget && event.currentTarget.dataset.index) {
    return event.currentTarget.dataset.index * 1;
  }

  return false;
};

var getLanguage = function getLanguage(editor) {
  var lang = editor.editorProps.language;

  if (typeof lang === 'function') {
    return lang(languages, 'braft-table');
  } else {
    return languages[lang] || languages.zh;
  }
};
var Table = /*#__PURE__*/function (_React$Component) {
  _inherits(Table, _React$Component);

  var _super = _createSuper(Table);

  function Table(props) {
    var _this;

    _classCallCheck(this, Table);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      tableRows: [],
      colToolHandlers: [],
      rowToolHandlers: [],
      defaultColWidth: 0,
      colResizing: false,
      colResizeOffset: 0,
      selectedCells: [],
      selectedRowIndex: -1,
      selectedColumnIndex: -1,
      setFirstRowAsHead: false,
      dragSelecting: false,
      draggingRectBounding: null,
      cellsMergeable: false,
      cellSplittable: false,
      contextMenuPosition: null
    });

    _defineProperty(_assertThisInitialized(_this), "__tableRef", null);

    _defineProperty(_assertThisInitialized(_this), "__colRefs", {});

    _defineProperty(_assertThisInitialized(_this), "__rowRefs", {});

    _defineProperty(_assertThisInitialized(_this), "__colResizeIndex", 0);

    _defineProperty(_assertThisInitialized(_this), "__colResizeStartAt", 0);

    _defineProperty(_assertThisInitialized(_this), "__startCellKey", null);

    _defineProperty(_assertThisInitialized(_this), "__endCellKey", null);

    _defineProperty(_assertThisInitialized(_this), "__dragSelecting", false);

    _defineProperty(_assertThisInitialized(_this), "__dragSelected", false);

    _defineProperty(_assertThisInitialized(_this), "__dragSelectingStartColumnIndex", null);

    _defineProperty(_assertThisInitialized(_this), "__dragSelectingStartRowIndex", null);

    _defineProperty(_assertThisInitialized(_this), "__dragSelectingEndColumnIndex", null);

    _defineProperty(_assertThisInitialized(_this), "__dragSelectingEndRowIndex", null);

    _defineProperty(_assertThisInitialized(_this), "__draggingRectBoundingUpdating", false);

    _defineProperty(_assertThisInitialized(_this), "__selectedCellsCleared", false);

    _defineProperty(_assertThisInitialized(_this), "handleToolbarMouseDown", function (event) {
      event.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      if (event.keyCode === 8) {
        var _this$state = _this.state,
            selectedColumnIndex = _this$state.selectedColumnIndex,
            selectedRowIndex = _this$state.selectedRowIndex;

        if (selectedColumnIndex > -1) {
          _this.removeColumn();

          event.preventDefault();
        } else if (selectedRowIndex > -1) {
          _this.removeRow();

          event.preventDefault();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseUp", function (event) {
      if (event.button !== 0) {
        return false;
      }

      if (_this.state.colResizing) {
        var _this$state2 = _this.state,
            defaultColWidth = _this$state2.defaultColWidth,
            colToolHandlers = _this$state2.colToolHandlers,
            colResizeOffset = _this$state2.colResizeOffset;

        var nextColToolHandlers = _toConsumableArray(colToolHandlers);

        nextColToolHandlers[_this.__colResizeIndex - 1].width = (nextColToolHandlers[_this.__colResizeIndex - 1].width || defaultColWidth) + colResizeOffset;
        nextColToolHandlers[_this.__colResizeIndex].width = (nextColToolHandlers[_this.__colResizeIndex].width || defaultColWidth) - colResizeOffset;
        _this.__colResizeIndex = 0;
        _this.__colResizeStartAt = 0;

        _this.setState({
          contextMenuPosition: null,
          colToolHandlers: nextColToolHandlers,
          colResizeOffset: 0,
          colResizing: false
        }, function () {
          _this.renderCells();

          _this.updateCellsData({
            colgroupData: nextColToolHandlers.map(function (item) {
              return {
                width: item.width
              };
            })
          });
        });
      } else {
        _this.setState({
          contextMenuPosition: null
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseMove", function (event) {
      if (_this.state.colResizing) {
        _this.setState({
          colResizeOffset: _this.getResizeOffset(event.clientX - _this.__colResizeStartAt)
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleColResizerMouseDown", function (event) {
      _this.__colResizeIndex = event.currentTarget.dataset.index * 1;
      _this.__colResizeStartAt = event.clientX;

      _this.setState({
        colResizing: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCellContexrMenu", function (event) {
      var selectedCells = _this.state.selectedCells;
      var cellKey = event.currentTarget.dataset.cellKey;

      if (!~selectedCells.indexOf(cellKey)) {
        _this.selectCell(event);
      }

      var _this$__tableRef$getB = _this.__tableRef.getBoundingClientRect(),
          tableTop = _this$__tableRef$getB.top,
          tableLeft = _this$__tableRef$getB.left,
          tableWidth = _this$__tableRef$getB.width;

      var top = event.clientY - tableTop + 15;
      var left = event.clientX - tableLeft + 10;

      if (left + 150 > tableWidth) {
        left = tableWidth - 150;
      }

      _this.setState({
        contextMenuPosition: {
          top: top,
          left: left
        }
      });

      event.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "handleContextMenuContextMenu", function (event) {
      event.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "handleCellMouseDown", function (event) {
      if (_this.state.colResizing) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      }

      _this.__dragSelecting = true;
      _this.__dragSelectingStartColumnIndex = event.currentTarget.dataset.colIndex;
      _this.__dragSelectingStartRowIndex = event.currentTarget.dataset.rowIndex;
      _this.__draggingStartPoint = {
        x: event.clientX,
        y: event.clientY
      };

      _this.setState({
        dragSelecting: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCellMouseUp", function () {
      _this.__dragSelecting = false;
      _this.__dragSelected = false;
      _this.__dragSelectingStartColumnIndex = null;
      _this.__dragSelectingStartRowIndex = null;
      _this.__dragSelectingEndColumnIndex = null;
      _this.__dragSelectingEndRowIndex = null;

      _this.setState({
        dragSelecting: false,
        draggingRectBounding: null
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCellMouseEnter", function (event) {
      if (_this.__dragSelecting) {
        _this.__dragSelectingEndColumnIndex = event.currentTarget.dataset.colIndex;
        _this.__dragSelectingEndRowIndex = event.currentTarget.dataset.rowIndex;

        if (_this.__dragSelectingEndColumnIndex !== _this.__dragSelectingStartColumnIndex || _this.__dragSelectingEndRowIndex !== _this.__dragSelectingStartRowIndex) {
          _this.__dragSelected = true;
          event.preventDefault();
        } else {
          _this.__dragSelected = false;
        }

        _this.confirmDragSelecting();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleTableMouseMove", function (event) {
      if (_this.__dragSelecting && _this.__dragSelected) {
        _this.updateDraggingRectBounding(event);

        event.preventDefault();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleTableMouseLeave", function (event) {
      if (_this.__dragSelecting && event.currentTarget && event.currentTarget.dataset.role === 'table') {
        _this.handleCellMouseUp();
      }

      event.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "confirmDragSelecting", function () {
      if (!_this.__dragSelectingStartColumnIndex || !_this.__dragSelectingStartRowIndex || !_this.__dragSelectingEndColumnIndex || !_this.__dragSelectingEndRowIndex) {
        return false;
      }

      var _TableUtils$getCellsI = getCellsInsideRect(_this.props.editorState, _this.tableKey, [_this.__dragSelectingStartColumnIndex, _this.__dragSelectingStartRowIndex], [_this.__dragSelectingEndColumnIndex, _this.__dragSelectingEndRowIndex]),
          selectedCells = _TableUtils$getCellsI.cellKeys,
          spannedCellBlockKeys = _TableUtils$getCellsI.spannedCellBlockKeys;

      if (selectedCells.length < 2) {
        return false;
      }

      _this.setState({
        selectedColumnIndex: -1,
        selectedRowIndex: -1,
        cellsMergeable: spannedCellBlockKeys.length === 0,
        cellSplittable: false,
        selectedCells: selectedCells
      }, _this.renderCells);
    });

    _defineProperty(_assertThisInitialized(_this), "updateDraggingRectBounding", function (mouseEvent) {
      if (_this.__draggingRectBoundingUpdating || !_this.__dragSelecting) {
        return false;
      }

      _this.__draggingRectBoundingUpdating = true;

      var tableBounding = _this.__tableRef.getBoundingClientRect();

      var _this$__draggingStart = _this.__draggingStartPoint,
          startX = _this$__draggingStart.x,
          startY = _this$__draggingStart.y;
      var currentX = mouseEvent.clientX,
          currentY = mouseEvent.clientY;
      var draggingRectBounding = {};

      if (currentX <= startX) {
        draggingRectBounding.right = tableBounding.left + tableBounding.width - startX;
      } else {
        draggingRectBounding.left = startX - tableBounding.left + 9;
      }

      if (currentY <= startY) {
        draggingRectBounding.bottom = tableBounding.top + tableBounding.height - startY;
      } else {
        draggingRectBounding.top = startY - tableBounding.top + 9;
      }

      draggingRectBounding.width = Math.abs(currentX - startX);
      draggingRectBounding.height = Math.abs(currentY - startY);

      _this.setState({
        draggingRectBounding: draggingRectBounding
      }, function () {
        setTimeout(function () {
          _this.__draggingRectBoundingUpdating = false;
        }, 100);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectCell", function (event) {
      var selectedCells = _this.state.selectedCells;
      var cellKey = event.currentTarget.dataset.cellKey;
      var _event$currentTarget = event.currentTarget,
          colSpan = _event$currentTarget.colSpan,
          rowSpan = _event$currentTarget.rowSpan;
      var nextSelectedCells = ~selectedCells.indexOf(cellKey) ? [] : [cellKey];
      var cellSplittable = nextSelectedCells.length && (colSpan > 1 || rowSpan > 1);

      _this.setState({
        selectedCells: nextSelectedCells,
        cellSplittable: cellSplittable,
        cellsMergeable: false,
        selectedRowIndex: -1,
        selectedColumnIndex: -1
      }, _this.renderCells);
    });

    _defineProperty(_assertThisInitialized(_this), "selectColumn", function (event) {
      var selectedColumnIndex = getIndexFromEvent(event, 'insert-column');

      if (selectedColumnIndex === false) {
        return false;
      }

      if (_this.state.selectedColumnIndex === selectedColumnIndex) {
        _this.setState({
          selectedCells: [],
          cellsMergeable: false,
          cellSplittable: false,
          selectedColumnIndex: -1
        }, _this.renderCells);

        return false;
      }

      var _TableUtils$getCellsI2 = getCellsInsideRect(_this.props.editorState, _this.tableKey, [selectedColumnIndex, 0], [selectedColumnIndex, _this.state.rowToolHandlers.length - 1]),
          selectedCells = _TableUtils$getCellsI2.cellKeys,
          spannedCellBlockKeys = _TableUtils$getCellsI2.spannedCellBlockKeys;

      _this.setState({
        selectedColumnIndex: selectedColumnIndex,
        selectedRowIndex: -1,
        cellSplittable: false,
        cellsMergeable: spannedCellBlockKeys.length === 0,
        selectedCells: selectedCells
      }, _this.renderCells);
    });

    _defineProperty(_assertThisInitialized(_this), "selectRow", function (event) {
      var selectedRowIndex = getIndexFromEvent(event, 'insert-row');

      if (selectedRowIndex === false) {
        return false;
      }

      if (_this.state.selectedRowIndex === selectedRowIndex) {
        _this.setState({
          selectedCells: [],
          cellsMergeable: false,
          cellSplittable: false,
          selectedRowIndex: -1
        }, _this.renderCells);

        return false;
      }

      var _TableUtils$getCellsI3 = getCellsInsideRect(_this.props.editorState, _this.tableKey, [0, selectedRowIndex], [_this.state.colToolHandlers.length, selectedRowIndex]),
          selectedCells = _TableUtils$getCellsI3.cellKeys,
          spannedCellBlockKeys = _TableUtils$getCellsI3.spannedCellBlockKeys;

      _this.setState({
        selectedColumnIndex: -1,
        selectedRowIndex: selectedRowIndex,
        cellSplittable: false,
        cellsMergeable: spannedCellBlockKeys.length === 0,
        selectedCells: selectedCells
      }, _this.renderCells);
    });

    _defineProperty(_assertThisInitialized(_this), "insertColumn", function (event) {
      var columnIndex = getIndexFromEvent(event);

      if (columnIndex === false) {
        return false;
      }

      var nextColToolHandlers = _this.state.colToolHandlers.map(function (item) {
        return render_objectSpread(render_objectSpread({}, item), {}, {
          width: 0
        });
      });

      _this.setState({
        selectedCells: [],
        selectedRowIndex: -1,
        selectedColumnIndex: -1,
        colToolHandlers: nextColToolHandlers
      }, function () {
        _this.props.editor.setValue(insertColumn(_this.props.editorState, _this.tableKey, _this.state.tableRows.length, columnIndex, nextColToolHandlers));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "removeColumn", function () {
      var selectedColumnIndex = _this.state.selectedColumnIndex;

      var nextColToolHandlers = _this.state.colToolHandlers.map(function (item) {
        return render_objectSpread(render_objectSpread({}, item), {}, {
          width: 0
        });
      });

      if (selectedColumnIndex >= 0) {
        _this.setState({
          selectedColumnIndex: -1,
          colToolHandlers: nextColToolHandlers
        }, function () {
          _this.props.editor.draftInstance.blur();

          setImmediate(function () {
            var result = removeColumn(_this.props.editorState, _this.tableKey, selectedColumnIndex, nextColToolHandlers);

            _this.props.editor.setValue(_this.validateContent(result));
          });
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "insertRow", function (event) {
      var rowIndex = getIndexFromEvent(event);

      if (rowIndex === false) {
        return false;
      }

      _this.setState({
        selectedCells: [],
        selectedRowIndex: -1,
        selectedColumnIndex: -1
      }, function () {
        _this.props.editor.setValue(insertRow(_this.props.editorState, _this.tableKey, _this.colLength, rowIndex));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "validateContent", function (editorState) {
      var len = editorState.toRAW(true).blocks.length;
      return len ? editorState : external_braft_editor_default().createEditorState(null);
    });

    _defineProperty(_assertThisInitialized(_this), "removeRow", function () {
      var selectedRowIndex = _this.state.selectedRowIndex;

      if (selectedRowIndex >= 0) {
        _this.setState({
          selectedRowIndex: -1
        }, function () {
          _this.props.editor.draftInstance.blur();

          setImmediate(function () {
            var result = removeRow(_this.props.editorState, _this.tableKey, selectedRowIndex);

            _this.props.editor.setValue(_this.validateContent(result));
          });
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "mergeCells", function () {
      var _this$state3 = _this.state,
          selectedCells = _this$state3.selectedCells,
          cellsMergeable = _this$state3.cellsMergeable;

      if (cellsMergeable && selectedCells.length > 1) {
        _this.setState({
          selectedCells: [selectedCells[0]],
          cellSplittable: true,
          cellsMergeable: false,
          selectedRowIndex: -1,
          selectedColumnIndex: -1
        }, function () {
          _this.props.editor.setValue(mergeCells(_this.props.editorState, _this.tableKey, selectedCells));
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "splitCell", function () {
      var _this$state4 = _this.state,
          selectedCells = _this$state4.selectedCells,
          cellSplittable = _this$state4.cellSplittable;

      if (cellSplittable && selectedCells.length === 1) {
        _this.setState({
          cellSplittable: false,
          cellsMergeable: false,
          selectedRowIndex: -1,
          selectedColumnIndex: -1
        }, function () {
          _this.props.editor.setValue(splitCell(_this.props.editorState, _this.tableKey, selectedCells[0]));
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "removeTable", function () {
      _this.props.editor.setValue(removeTable(_this.props.editorState, _this.tableKey));
    });

    _this.language = getLanguage(props.editor);
    return _this;
  }

  _createClass(Table, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.renderCells(this.props);
      document.body.addEventListener('keydown', this.handleKeyDown, false);
      document.body.addEventListener('mousemove', this.handleMouseMove, false);
      document.body.addEventListener('mouseup', this.handleMouseUp, false);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.renderCells(nextProps);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.removeEventListener('keydown', this.handleKeyDown, false);
      document.body.removeEventListener('mousemove', this.handleMouseMove, false);
      document.body.removeEventListener('mouseup', this.handleMouseUp, false);
    }
  }, {
    key: "getResizeOffset",
    value: function getResizeOffset(offset) {
      var leftLimit = 0;
      var rightLimit = 0;
      var _this$state5 = this.state,
          colToolHandlers = _this$state5.colToolHandlers,
          defaultColWidth = _this$state5.defaultColWidth;
      leftLimit = -1 * ((colToolHandlers[this.__colResizeIndex - 1].width || defaultColWidth) - 30);
      rightLimit = (colToolHandlers[this.__colResizeIndex].width || defaultColWidth) - 30;
      offset = offset < leftLimit ? leftLimit : offset;
      offset = offset > rightLimit ? rightLimit : offset;
      return offset;
    }
  }, {
    key: "adjustToolbarHandlers",
    value: function adjustToolbarHandlers() {
      var _this2 = this;

      var needUpdate = false;

      var rowToolHandlers = _toConsumableArray(this.state.rowToolHandlers);

      Object.keys(this.__rowRefs).forEach(function (index) {
        var rowHeight = _this2.__rowRefs[index] ? _this2.__rowRefs[index].getBoundingClientRect().height : 40;

        if (rowToolHandlers[index] && rowToolHandlers[index].height !== rowHeight) {
          needUpdate = true;
          rowToolHandlers[index].height = rowHeight;
        }
      });

      if (needUpdate) {
        this.setState({
          rowToolHandlers: rowToolHandlers
        });
      }
    }
  }, {
    key: "updateCellsData",
    value: function updateCellsData(blockData) {
      this.props.editor.setValue(updateAllTableBlocks(this.props.editorState, this.tableKey, blockData));
    }
  }, {
    key: "renderCells",
    value: function renderCells(props) {
      var _this3 = this;

      props = props || this.props;
      this.colLength = 0;
      var tableRows = [];
      var colToolHandlers = [];
      var rowToolHandlers = [];
      var _props = props,
          editorState = _props.editorState,
          children = _props.children;

      var tableWidth = this.__tableRef.getBoundingClientRect().width;

      this.__startCellKey = children[0].key;
      this.__endCellKey = children[children.length - 1].key;
      children.forEach(function (cell, cellIndex) {
        var cellBlock = editorState.getCurrentContent().getBlockForKey(cell.key);
        var cellBlockData = cellBlock.getData();
        var tableKey = cellBlockData.get('tableKey');
        var colIndex = cellBlockData.get('colIndex') * 1;
        var rowIndex = cellBlockData.get('rowIndex') * 1;
        var colSpan = cellBlockData.get('colSpan');
        var rowSpan = cellBlockData.get('rowSpan');
        _this3.tableKey = tableKey;

        if (rowIndex === 0) {
          var colgroupData = cellBlockData.get('colgroupData') || [];
          var totalColgroupWidth = colgroupData.reduce(function (width, col) {
            return width + col.width * 1;
          }, 0);

          var _colSpan = (cellBlockData.get('colSpan') || 1) * 1;

          for (var ii = _this3.colLength; ii < _this3.colLength + _colSpan; ii++) {
            colToolHandlers[ii] = {
              key: cell.key,
              width: _this3.state.colToolHandlers[ii] ? _this3.state.colToolHandlers[ii].width : colgroupData[ii] ? colgroupData[ii].width / totalColgroupWidth * tableWidth * 1 : 0
            };
          }

          _this3.colLength += _colSpan;
        }

        var newCell = /*#__PURE__*/external_react_default().cloneElement(cell, {
          'data-active': !!~_this3.state.selectedCells.indexOf(cell.key),
          'data-row-index': rowIndex,
          'data-col-index': colIndex || (tableRows[rowIndex] || []).length,
          'data-cell-index': cellIndex,
          'data-cell-key': cell.key,
          'data-table-key': tableKey,
          className: "bf-table-cell ".concat(cell.props.className),
          colSpan: colSpan,
          rowSpan: rowSpan,
          onClick: _this3.selectCell,
          onContextMenu: _this3.handleCellContexrMenu,
          onMouseDown: _this3.handleCellMouseDown,
          onMouseUp: _this3.handleCellMouseUp,
          onMouseEnter: _this3.handleCellMouseEnter
        });

        for (var jj = rowIndex; jj < rowIndex + rowSpan; jj++) {
          rowToolHandlers[jj] = {
            key: cell.key,
            height: 0
          };
          tableRows[jj] = tableRows[jj] || [];
        }

        if (!tableRows[rowIndex]) {
          tableRows[rowIndex] = [newCell];
        } else {
          tableRows[rowIndex].push(newCell);
        }
      });
      var defaultColWidth = tableWidth / this.colLength;
      this.setState({
        tableRows: tableRows,
        colToolHandlers: colToolHandlers,
        rowToolHandlers: rowToolHandlers,
        defaultColWidth: defaultColWidth
      }, this.adjustToolbarHandlers);
    }
  }, {
    key: "createColGroup",
    value: function createColGroup() {
      var _this4 = this;

      return /*#__PURE__*/external_react_default().createElement("colgroup", null, this.state.colToolHandlers.map(function (item, index) {
        return /*#__PURE__*/external_react_default().createElement("col", {
          ref: function ref(_ref) {
            return _this4.__colRefs[index] = _ref;
          },
          width: item.width || _this4.state.defaultColWidth,
          key: index
        });
      }));
    }
  }, {
    key: "createColTools",
    value: function createColTools() {
      var _this5 = this;

      var _this$state6 = this.state,
          colResizing = _this$state6.colResizing,
          colResizeOffset = _this$state6.colResizeOffset,
          colToolHandlers = _this$state6.colToolHandlers,
          selectedColumnIndex = _this$state6.selectedColumnIndex,
          defaultColWidth = _this$state6.defaultColWidth;
      return /*#__PURE__*/external_react_default().createElement("div", {
        "data-active": selectedColumnIndex >= 0,
        contentEditable: false,
        "data-key": "bf-col-toolbar",
        className: "bf-table-col-tools".concat(colResizing ? ' resizing' : ''),
        onMouseDown: this.handleToolbarMouseDown
      }, colToolHandlers.map(function (item, index) {
        return /*#__PURE__*/external_react_default().createElement("div", {
          key: index,
          "data-key": item.key,
          "data-index": index,
          "data-active": selectedColumnIndex == index,
          className: "bf-col-tool-handler",
          style: {
            width: item.width || defaultColWidth
          },
          onClick: _this5.selectColumn
        }, _this5.props.columnResizable && index !== 0 ? /*#__PURE__*/external_react_default().createElement("div", {
          "data-index": index,
          "data-key": item.key,
          className: "bf-col-resizer".concat(colResizing && _this5.__colResizeIndex === index ? ' active' : ''),
          style: colResizing && _this5.__colResizeIndex === index ? {
            transform: "translateX(".concat(colResizeOffset, "px)")
          } : null,
          onMouseDown: _this5.handleColResizerMouseDown
        }) : null, /*#__PURE__*/external_react_default().createElement("div", {
          className: "bf-col-tool-left"
        }, /*#__PURE__*/external_react_default().createElement("div", {
          "data-index": index,
          "data-role": "insert-column",
          className: "bf-insert-col-before",
          onClick: _this5.insertColumn
        }, /*#__PURE__*/external_react_default().createElement("i", {
          className: "bfi-add"
        }))), /*#__PURE__*/external_react_default().createElement("div", {
          className: "bf-col-tool-center"
        }, /*#__PURE__*/external_react_default().createElement("div", {
          "data-index": index,
          "data-role": "remove-col",
          className: "bf-remove-col",
          onClick: _this5.removeColumn
        }, /*#__PURE__*/external_react_default().createElement("i", {
          className: "bfi-bin"
        }))), /*#__PURE__*/external_react_default().createElement("div", {
          className: "bf-col-tool-right"
        }, /*#__PURE__*/external_react_default().createElement("div", {
          "data-index": index + 1,
          "data-role": "insert-column",
          className: "bf-insert-col-after",
          onClick: _this5.insertColumn
        }, /*#__PURE__*/external_react_default().createElement("i", {
          className: "bfi-add"
        }))));
      }));
    }
  }, {
    key: "createRowTools",
    value: function createRowTools() {
      var _this6 = this;

      var _this$state7 = this.state,
          rowToolHandlers = _this$state7.rowToolHandlers,
          selectedRowIndex = _this$state7.selectedRowIndex;
      return /*#__PURE__*/external_react_default().createElement("div", {
        "data-active": selectedRowIndex >= 0,
        contentEditable: false,
        className: "bf-table-row-tools",
        onMouseDown: this.handleToolbarMouseDown
      }, rowToolHandlers.map(function (item, index) {
        return /*#__PURE__*/external_react_default().createElement("div", {
          key: index,
          "data-key": item.key,
          "data-index": index,
          "data-active": selectedRowIndex == index,
          className: "bf-row-tool-handler",
          style: {
            height: item.height
          },
          onClick: _this6.selectRow
        }, /*#__PURE__*/external_react_default().createElement("div", {
          className: "bf-row-tool-up"
        }, /*#__PURE__*/external_react_default().createElement("div", {
          "data-index": index,
          "data-role": "insert-row",
          className: "bf-insert-row-before",
          onClick: _this6.insertRow
        }, /*#__PURE__*/external_react_default().createElement("i", {
          className: "bfi-add"
        }))), /*#__PURE__*/external_react_default().createElement("div", {
          className: "bf-row-tool-center"
        }, /*#__PURE__*/external_react_default().createElement("div", {
          "data-index": index,
          "data-role": "remove-row",
          className: "bf-remove-row",
          onClick: _this6.removeRow
        }, /*#__PURE__*/external_react_default().createElement("i", {
          className: "bfi-bin"
        }))), /*#__PURE__*/external_react_default().createElement("div", {
          className: "bf-row-tool-down"
        }, /*#__PURE__*/external_react_default().createElement("div", {
          "data-index": index + 1,
          "data-role": "insert-row",
          className: "bf-insert-row-after",
          onClick: _this6.insertRow
        }, /*#__PURE__*/external_react_default().createElement("i", {
          className: "bfi-add"
        }))));
      }));
    }
  }, {
    key: "createContextMenu",
    value: function createContextMenu() {
      var _this$state8 = this.state,
          cellsMergeable = _this$state8.cellsMergeable,
          cellSplittable = _this$state8.cellSplittable,
          contextMenuPosition = _this$state8.contextMenuPosition;

      if (!contextMenuPosition) {
        return null;
      }

      return /*#__PURE__*/external_react_default().createElement("div", {
        className: "bf-table-context-menu",
        onContextMenu: this.handleContextMenuContextMenu,
        contentEditable: false,
        style: contextMenuPosition
      }, /*#__PURE__*/external_react_default().createElement("div", {
        className: "context-menu-item",
        onMouseDown: this.mergeCells,
        "data-disabled": !cellsMergeable
      }, this.language.mergeCells), /*#__PURE__*/external_react_default().createElement("div", {
        className: "context-menu-item",
        onMouseDown: this.splitCell,
        "data-disabled": !cellSplittable
      }, this.language.splitCell), /*#__PURE__*/external_react_default().createElement("div", {
        className: "context-menu-item",
        onMouseDown: this.removeTable
      }, this.language.removeTable));
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      var _this$state9 = this.state,
          tableRows = _this$state9.tableRows,
          dragSelecting = _this$state9.dragSelecting,
          draggingRectBounding = _this$state9.draggingRectBounding;
      var readOnly = this.props.editor.props.readOnly;
      return /*#__PURE__*/external_react_default().createElement("div", {
        className: "bf-table-container"
      }, /*#__PURE__*/external_react_default().createElement("table", {
        "data-role": "table",
        className: "bf-table".concat(dragSelecting ? ' dragging' : ''),
        ref: function ref(_ref3) {
          return _this7.__tableRef = _ref3;
        },
        onMouseDown: this.handleTableMouseDown,
        onMouseUp: this.hanldeTableMouseUp,
        onMouseMove: this.handleTableMouseMove,
        onMouseLeave: this.handleTableMouseLeave
      }, this.createColGroup(), /*#__PURE__*/external_react_default().createElement("tbody", null, tableRows.map(function (cells, rowIndex) {
        return /*#__PURE__*/external_react_default().createElement("tr", {
          ref: function ref(_ref2) {
            return _this7.__rowRefs[rowIndex] = _ref2;
          },
          key: rowIndex
        }, cells);
      }))), dragSelecting ? /*#__PURE__*/external_react_default().createElement("div", {
        className: "dragging-rect",
        style: draggingRectBounding
      }) : null, !readOnly && this.createContextMenu(), !readOnly && this.createColTools(), !readOnly && this.createRowTools());
    }
  }]);

  return Table;
}((external_react_default()).Component);
var tableRenderMap = function tableRenderMap(options) {
  return function (props) {
    return external_immutable_default().Map({
      'table-cell': {
        element: 'td',
        wrapper: /*#__PURE__*/external_react_default().createElement(Table, {
          columnResizable: options.columnResizable,
          editor: props.editor,
          editorState: props.editorState
        })
      }
    });
  };
};
;// CONCATENATED MODULE: ./table/dropdown.jsx








function dropdown_createSuper(Derived) { var hasNativeReflectConstruct = dropdown_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function dropdown_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var _default = /*#__PURE__*/function (_React$Component) {
  _inherits(_default, _React$Component);

  var _super = dropdown_createSuper(_default);

  function _default() {
    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      rows: 3,
      columns: 3
    });

    _defineProperty(_assertThisInitialized(_this), "inputValue", function (event) {
      _this.setState(_defineProperty({}, event.target.name, event.target.value));
    });

    _defineProperty(_assertThisInitialized(_this), "confirmInsert", function () {
      _this.props.onConfirm(_this.state);
    });

    _defineProperty(_assertThisInitialized(_this), "cancelInsert", function () {
      _this.props.onCancel();
    });

    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        rows: this.props.defaultRows,
        columns: this.props.defaultColumns
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_react_default().createElement("div", {
        className: "bf-table-dropdown-control"
      }, /*#__PURE__*/external_react_default().createElement("input", {
        placeholder: this.props.language.columns,
        className: "input",
        type: "text",
        name: "columns",
        value: this.state.columns,
        onChange: this.inputValue
      }), /*#__PURE__*/external_react_default().createElement("label", {
        className: "label"
      }, "x"), /*#__PURE__*/external_react_default().createElement("input", {
        placeholder: this.props.language.rows,
        className: "input",
        type: "text",
        name: "rows",
        value: this.state.rows,
        onChange: this.inputValue
      }), /*#__PURE__*/external_react_default().createElement("button", {
        disabled: !this.state.rows || !this.state.columns,
        className: "button primary",
        onClick: this.confirmInsert
      }, this.props.language.insertTable));
    }
  }]);

  return _default;
}((external_react_default()).Component);


;// CONCATENATED MODULE: ./table/converts.js


var parseColgoupData = function parseColgoupData(colgroupNode) {
  if (!colgroupNode) {
    return [];
  }

  return Array.prototype.map.call(colgroupNode.querySelectorAll('col'), function (colNode) {
    return {
      width: colNode.width ? colNode.width * 1 : 0
    };
  });
};

var buildColgroup = function buildColgroup(blockData) {
  if (blockData && blockData.colgroupData && blockData.colgroupData.length) {
    return "<colgroup>".concat(blockData.colgroupData.map(function (col) {
      return "<col width=\"".concat(col.width, "\"></col>");
    }).join(''), "</colgroup>");
  }

  return '';
};

var tableColgroupData = [];
var tableImportFn = function tableImportFn(nodeName, node) {
  if (nodeName !== 'body' && node && node.querySelector && node.querySelector(':scope > table')) {
    node.parentNode.insertBefore(node.querySelector(':scope > table'), node.nextSibling);
  }

  if (nodeName === 'table') {
    tableColgroupData = parseColgoupData(node.querySelector('colgroup'));
    rebuildTableNode(node);
  }

  if (nodeName === 'th' || nodeName === 'td') {
    var tableKey = node.dataset.tableKey;
    var colIndex = node.dataset.colIndex * 1;
    var rowIndex = node.dataset.rowIndex * 1;
    var colSpan = node.colSpan;
    var rowSpan = node.rowSpan;
    var cellData = {
      tableKey: tableKey,
      colIndex: colIndex,
      rowIndex: rowIndex,
      colSpan: colSpan,
      rowSpan: rowSpan,
      colgroupData: tableColgroupData
    };
    cellData.isHead = nodeName === 'th';

    if (node.style && node.style.textAlign) {
      cellData.textAlign = node.style.textAlign;
    } else if (node.align) {
      cellData.textAlign = node.align;
    }

    return {
      type: 'table-cell',
      data: cellData
    };
  }

  return null;
};
var tableExportFn = function tableExportFn(exportAttrString) {
  return function (contentState, block) {
    if (block.type.toLowerCase() !== 'table-cell') {
      return null;
    }

    var previousBlock = contentState.getBlockBefore(block.key);
    var nextBlock = contentState.getBlockAfter(block.key);
    var previousBlockType = previousBlock ? previousBlock.getType() : null;
    var previousBlockData = previousBlock ? previousBlock.getData().toJS() : {};
    var nextBlockType = nextBlock ? nextBlock.getType() : null;
    var nextBlockData = nextBlock ? nextBlock.getData().toJS() : {};
    var start = '';
    var end = '';
    var blockStyle = '';

    if (block.data.textAlign) {
      blockStyle += " style=\"text-align:".concat(block.data.textAlign, ";\"");
    }

    if (previousBlockType !== 'table-cell') {
      start = "<table ".concat(exportAttrString, ">").concat(buildColgroup(block.data), "<tr><td").concat(blockStyle, " colSpan=\"").concat(block.data.colSpan, "\" rowSpan=\"").concat(block.data.rowSpan, "\">");
    } else if (previousBlockData.rowIndex !== block.data.rowIndex) {
      start = "<tr><td".concat(blockStyle, " colSpan=\"").concat(block.data.colSpan, "\" rowSpan=\"").concat(block.data.rowSpan, "\">");
    } else {
      start = "<td".concat(blockStyle, " colSpan=\"").concat(block.data.colSpan, "\" rowSpan=\"").concat(block.data.rowSpan, "\">");
    }

    if (nextBlockType !== 'table-cell') {
      end = '</td></tr></table>';
    } else if (nextBlockData.rowIndex !== block.data.rowIndex) {
      end = '</td></tr>';
    } else {
      end = '</td>';
    }

    if (!previousBlockType) {
      start = '<p></p>' + start;
    }

    if (!nextBlockType) {
      end += '<p></p>';
    }

    return {
      start: start,
      end: end
    };
  };
};
;// CONCATENATED MODULE: ./table/index.jsx


function table_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function table_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { table_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { table_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









external_braft_utils_.ContentUtils.registerStrictBlockType('table-cell');
var dropdownInstance = null;

var dropdownRef = function dropdownRef(instance) {
  return dropdownInstance = instance;
};

var TableUtils = utils_namespaceObject;
/* harmony default export */ const table = (function (options) {
  options = table_objectSpread({
    defaultColumns: 3,
    defaultRows: 3,
    withDropdown: false,
    columnResizable: false,
    exportAttrString: ''
  }, options);
  var _options = options,
      includeEditors = _options.includeEditors,
      excludeEditors = _options.excludeEditors,
      defaultColumns = _options.defaultColumns,
      defaultRows = _options.defaultRows,
      withDropdown = _options.withDropdown,
      exportAttrString = _options.exportAttrString;
  var controlItem = withDropdown ? {
    type: 'control',
    includeEditors: includeEditors,
    excludeEditors: excludeEditors,
    control: function control(props) {
      var language = getLanguage(props.editor);
      return {
        key: 'table',
        replace: 'table',
        type: 'dropdown',
        title: language.insertTable,
        text: /*#__PURE__*/external_react_default().createElement("i", {
          className: "bfi-table"
        }),
        showArrow: false,
        autoHide: true,
        ref: dropdownRef,
        component: /*#__PURE__*/external_react_default().createElement(_default, {
          language: language,
          defaultRows: defaultRows,
          defaultColumns: defaultColumns,
          onConfirm: function onConfirm(_ref) {
            var columns = _ref.columns,
                rows = _ref.rows;
            props.editor.setValue(TableUtils.insertTable(props.editorState, columns, rows));
            dropdownInstance && dropdownInstance.hide();
          }
        })
      };
    }
  } : {
    type: 'control',
    includeEditors: includeEditors,
    excludeEditors: excludeEditors,
    control: function control(props) {
      return {
        key: 'table',
        replace: 'table',
        type: 'button',
        title: getLanguage(props.editor).insertTable,
        text: /*#__PURE__*/external_react_default().createElement("i", {
          className: "bfi-table"
        }),
        onClick: function onClick() {
          props.editor.setValue(TableUtils.insertTable(props.editorState, defaultColumns, defaultRows));
        }
      };
    }
  };
  return [controlItem, {
    type: 'prop-interception',
    includeEditors: includeEditors,
    excludeEditors: excludeEditors,
    interceptor: function interceptor(editorProps) {
      editorProps.handleKeyCommand = handleKeyCommand(editorProps.handleKeyCommand);
      editorProps.handleReturn = handleReturn(editorProps.handleReturn);
      editorProps.handleDroppedFiles = handleDroppedFiles(editorProps.handleDroppedFiles);
      editorProps.handlePastedFiles = handlePastedFiles(editorProps.handlePastedFiles);
      editorProps.handlePastedText = handlePastedText(editorProps.handlePastedText);
      return editorProps;
    }
  }, {
    type: 'block',
    name: 'table-cell',
    includeEditors: includeEditors,
    excludeEditors: excludeEditors,
    renderMap: tableRenderMap(options),
    importer: tableImportFn,
    exporter: tableExportFn(exportAttrString)
  }];
});
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});