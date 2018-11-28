(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("immutable"), require("draft-js"), require("braft-utils"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "immutable", "draft-js", "braft-utils"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("immutable"), require("draft-js"), require("braft-utils")) : factory(root["react"], root["immutable"], root["draft-js"], root["braft-utils"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__6__) {
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
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
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
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rebuilTableBlocks", function() { return rebuilTableBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rebuildTableNode", function() { return rebuildTableNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCellCountForInsert", function() { return getCellCountForInsert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCellsInsideRect", function() { return getCellsInsideRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertCell", function() { return insertCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertCells", function() { return insertCells; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertTable", function() { return insertTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTable", function() { return removeTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertColumn", function() { return insertColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeColumn", function() { return removeColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertRow", function() { return insertRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeRow", function() { return removeRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeCells", function() { return mergeCells; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitCell", function() { return splitCell; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var braft_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var braft_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(braft_utils__WEBPACK_IMPORTED_MODULE_4__);




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
  cell = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({
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
  return new draft_js__WEBPACK_IMPORTED_MODULE_2__["ContentBlock"]({
    key: key || Object(draft_js__WEBPACK_IMPORTED_MODULE_2__["genKey"])(),
    type: 'table-cell',
    text: text,
    data: immutable__WEBPACK_IMPORTED_MODULE_3___default.a.Map({
      tableKey: tableKey,
      colIndex: colIndex,
      rowIndex: rowIndex,
      colSpan: colSpan,
      rowSpan: rowSpan,
      isHead: isHead
    }),
    characterList: immutable__WEBPACK_IMPORTED_MODULE_3___default.a.List(immutable__WEBPACK_IMPORTED_MODULE_3___default.a.Repeat(draft_js__WEBPACK_IMPORTED_MODULE_2__["CharacterMetadata"].create(), text.length))
  });
};

var createUnstyledBlock = function createUnstyledBlock() {
  var key = Object(draft_js__WEBPACK_IMPORTED_MODULE_2__["genKey"])();
  return [key, new draft_js__WEBPACK_IMPORTED_MODULE_2__["ContentBlock"]({
    key: key,
    type: 'unstyled',
    text: '',
    data: immutable__WEBPACK_IMPORTED_MODULE_3___default.a.Map({}),
    characterList: immutable__WEBPACK_IMPORTED_MODULE_3___default.a.List([])
  })];
}; // 创建并返回一行单元格block


var createRowBlocks = function createRowBlocks(tableKey, rowIndex, rowLength) {
  var firstCellText = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var cells = immutable__WEBPACK_IMPORTED_MODULE_3___default.a.Range(0, rowLength).map(function (index) {
    var cellBlock = createCellBlock({
      tableKey: tableKey,
      colIndex: index,
      rowIndex: rowIndex,
      text: index === 0 ? firstCellText : ''
    });
    return [cellBlock.getKey(), cellBlock];
  }).toArray();
  return immutable__WEBPACK_IMPORTED_MODULE_3___default.a.OrderedMap(cells).toSeq();
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
}; // 遍历以修正单元格的colSpan和rowSpan属性（表格blocks专用）


var rebuilTableBlocks = function rebuilTableBlocks(tableBlocks) {
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

    for (; skipedCells[rowIndex] && skipedCells[rowIndex][colIndex]; colIndex++) {
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
      'data': immutable__WEBPACK_IMPORTED_MODULE_3___default.a.Map(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, blockData.toJS(), {
        colIndex: colIndex
      }))
    });
  });
}; // 遍历以修正单元格的colSpan和rowSpan属性（表格DOM专用）

var rebuildTableNode = function rebuildTableNode(tableNode) {
  var tableKey = Object(draft_js__WEBPACK_IMPORTED_MODULE_2__["genKey"])();
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
}; // 获取需要插入到某一行的单元格的数量

var getCellCountForInsert = function getCellCountForInsert(tableBlocks, rowIndex) {
  return findBlocks(tableBlocks, 'rowIndex', rowIndex).reduce(function (count, block) {
    return count + (block.getData().get('colSpan') || 1) * 1;
  }, 0);
}; // 获取指定范围内的单元格block

var getCellsInsideRect = function getCellsInsideRect(editorState, tableKey, startLocation, endLocation) {
  var _startLocation = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(startLocation, 2),
      startColIndex = _startLocation[0],
      startRowIndex = _startLocation[1];

  var _endLocation = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(endLocation, 2),
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
    return immutable__WEBPACK_IMPORTED_MODULE_3___default.a.OrderedMap([]);
  }

  var contentState = editorState.getCurrentContent();
  var contentBlocks = contentState.getBlockMap();
  var tableBlocks = findBlocks(contentBlocks, 'tableKey', tableKey);
  var matchedCellBlockKeys = [];
  var spannedCellBlockKeys = [];
  var matchedCellBlocks = immutable__WEBPACK_IMPORTED_MODULE_3___default.a.List([]);
  var spannedCellBlocks = immutable__WEBPACK_IMPORTED_MODULE_3___default.a.List([]);
  tableBlocks.forEach(function (block) {
    var blockData = block.getData();
    var blockKey = block.getKey();
    var colIndex = blockData.get('colIndex');
    var rowIndex = blockData.get('rowIndex');
    var colSpan = blockData.get('colSpan');
    var rowSpan = blockData.get('rowSpan');
    matchedCellLocations.forEach(function (_ref) {
      var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
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
    cellKeys: matchedCellBlockKeys.concat(spannedCellBlockKeys),
    // todo: 去重复
    spannedCellBlocks: spannedCellBlocks,
    spannedCellBlockKeys: spannedCellBlockKeys
  };
}; // 插入一个单元格block到表格的block列表中

var insertCell = function insertCell(tableBlocks, cell) {
  var colIndex, rowIndex, cellBlock;

  if (cell instanceof draft_js__WEBPACK_IMPORTED_MODULE_2__["ContentBlock"]) {
    colIndex = cell.getData().get('colIndex');
    rowIndex = cell.getData().get('rowIndex');
    cellBlock = cell;
  } else {
    colIndex = cell.colIndex;
    rowIndex = cell.rowIndex;
    cellBlock = createCellBlock(cell);
  }

  var blocksBefore = tableBlocks.takeUntil(function (block) {
    return block.getData().get('rowIndex') >= rowIndex && block.getData().get('colIndex') >= colIndex;
  });
  var blocksAfter = tableBlocks.skipUntil(function (block) {
    return block.getData().get('rowIndex') >= rowIndex && block.getData().get('colIndex') >= colIndex;
  });
  var nextTableBlocks = blocksBefore.concat(immutable__WEBPACK_IMPORTED_MODULE_3___default.a.OrderedMap([[cellBlock.getKey(), cellBlock]]).toSeq(), blocksAfter);
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

  if (braft_utils__WEBPACK_IMPORTED_MODULE_4__["ContentUtils"].selectionContainsStrictBlock(editorState)) {
    return editorState;
  }

  var selectionState = editorState.getSelection();
  var contentState = editorState.getCurrentContent();
  var contentBlocks = contentState.getBlockMap();
  var tableKey = Object(draft_js__WEBPACK_IMPORTED_MODULE_2__["genKey"])();
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
  var tableBlocks = immutable__WEBPACK_IMPORTED_MODULE_3___default.a.OrderedMap(cellBlocks).toSeq();
  var firstCellKey = cellBlocks[1][0];
  var nextContentBlocks = blocksBefore.concat(tableBlocks, blocksAfter).toOrderedMap();
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
  return draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].push(editorState, nextContentState, 'insert-table');
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
  return draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].push(editorState, nextContentState, 'remove-table');
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
      data: immutable__WEBPACK_IMPORTED_MODULE_3___default.a.Map(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, blockData, {
        colIndex: nextColIndex,
        colSpan: nextColSpan
      }))
    }) : block;
  });

  if (cellsToBeAdded.length === 0) {
    return editorState;
  }

  var focusCellKey = cellsToBeAdded[0].key = Object(draft_js__WEBPACK_IMPORTED_MODULE_2__["genKey"])();
  var nextContentState = updateTableBlocks(contentState, editorState.getSelection(), focusCellKey, insertCells(nextTableBlocks, cellsToBeAdded), tableKey);
  return draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].push(editorState, nextContentState, 'insert-table-column');
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
      'data': _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, blockData, {
        colIndex: newColIndex,
        colSpan: newColSpan
      })
    }) : block;
  });
  var focusCellKey = (nextTableBlocks.first() || contentState.getBlockBefore(tableBlocks.first().getKey()) || contentState.getBlockAfter(tableBlocks.first().getKey())).getKey();
  var nextContentState = updateTableBlocks(contentState, editorState.getSelection(), focusCellKey, insertCells(nextTableBlocks, cellsToBeAdded), tableKey);
  return draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].push(editorState, nextContentState, 'remove-table-column');
}; // 插入一行单元格到表格中

var insertRow = function insertRow(editorState, tableKey, cellCounts, rowIndex) {
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
        'data': immutable__WEBPACK_IMPORTED_MODULE_3___default.a.Map(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, blockData, {
          rowSpan: newRowSpan
        }))
      });
    }
  });
  var blocksAfter = findBlocks(tableBlocks, 'rowIndex', rowIndex, '>=').map(function (block) {
    var blockData = block.getData().toJS();
    return block.merge({
      'data': immutable__WEBPACK_IMPORTED_MODULE_3___default.a.Map(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, blockData, {
        rowIndex: blockData.rowIndex * 1 + 1
      }))
    });
  });
  var colCellLength = getCellCountForInsert(tableBlocks, rowIndex);
  var rowBlocks = createRowBlocks(tableKey, rowIndex, colCellLength || cellCounts);
  var focusCellKey = rowBlocks.first().getKey();
  var nextTableBlocks = rebuilTableBlocks(blocksBefore.concat(rowBlocks, blocksAfter));
  var nextContentState = updateTableBlocks(contentState, editorState.getSelection(), focusCellKey, nextTableBlocks, tableKey);
  return draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].push(editorState, nextContentState, 'insert-table-row');
}; // 从表格中移除指定的某一行单元格

var removeRow = function removeRow(editorState, tableKey, rowIndex) {
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
        'data': immutable__WEBPACK_IMPORTED_MODULE_3___default.a.Map(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, blockData, {
          rowSpan: newRowSpan
        }))
      });
    }
  });
  var blocksAfter = findBlocks(tableBlocks, 'rowIndex', rowIndex, '>').map(function (block) {
    var blockData = block.getData().toJS();
    return block.merge({
      'data': immutable__WEBPACK_IMPORTED_MODULE_3___default.a.Map(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, blockData, {
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
  var nextTableBlocks = insertCells(blocksBefore.concat(blocksAfter), cellsToBeAdded);
  var nextContentState = updateTableBlocks(contentState, editorState.getSelection(), focusCellKey, nextTableBlocks, tableKey, true);
  return draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].push(editorState, nextContentState, 'remove-table-row');
}; // 合并单元格

var mergeCells = function mergeCells(editorState, tableKey, cellKeys) {
  var contentState = editorState.getCurrentContent();
  var contentBlocks = contentState.getBlockMap();
  var cellBlocksData = [];
  var mergedText = '';
  var tableBlocks = findBlocks(contentBlocks, 'tableKey', tableKey).filter(function (block) {
    if (~cellKeys.indexOf(block.getKey())) {
      mergedText += block.getText();
      cellBlocksData.push(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({
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
    'data': immutable__WEBPACK_IMPORTED_MODULE_3___default.a.Map(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, firstCellData, {
      colSpan: lastCellData.colIndex - firstCellData.colIndex + 1,
      rowSpan: lastCellData.rowIndex - firstCellData.rowIndex + 1
    })),
    characterList: immutable__WEBPACK_IMPORTED_MODULE_3___default.a.List(immutable__WEBPACK_IMPORTED_MODULE_3___default.a.Repeat(draft_js__WEBPACK_IMPORTED_MODULE_2__["CharacterMetadata"].create(), mergedText.length))
  });
  var nextContentState = updateTableBlocks(contentState, editorState.getSelection(), firstCellData.key, insertCell(tableBlocks, mergedCell), tableKey);
  return draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].push(editorState, nextContentState, 'merge-table-cell');
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
        'data': immutable__WEBPACK_IMPORTED_MODULE_3___default.a.Map(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, blockData, {
          colSpan: 1,
          rowSpan: 1
        }))
      });
    } else {
      return block;
    }
  });
  var nextContentState = updateTableBlocks(contentState, editorState.getSelection(), cellKey, insertCells(tableBlocks, cellsToBeAdded), tableKey);
  return draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].push(editorState, nextContentState, 'merge-table-cell');
};

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(14);

var assertThisInitialized = __webpack_require__(0);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(15);

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
/* 14 */
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
/* 15 */
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var zh = {
  'insertTable': '插入表格',
  'removeTable': '删除表格',
  'insertColumn': '插入列',
  'removeColumn': '删除列',
  'insertRow': '插入行',
  'removeRow': '删除行',
  'mergeCells': '合并单元格',
  'splitCell': '拆分单元格'
};
var zhHant = {
  'insertTable': '插入表格',
  'removeTable': '删除表格',
  'insertColumn': '插入列',
  'removeColumn': '删除列',
  'insertRow': '插入行',
  'removeRow': '删除行',
  'mergeCells': '合并单元格',
  'splitCell': '拆分单元格'
};
var en = {
  'insertTable': 'Insert Table',
  'removeTable': 'Remove Table',
  'insertColumn': 'Insert Column',
  'removeColumn': 'Remove Column',
  'insertRow': 'Insert Row',
  'removeRow': 'Remove Row',
  'mergeCells': 'Merge Cells',
  'splitCell': 'Split Cell'
};
var pl = {
  'insertTable': 'Wstaw tabelę',
  'removeTable': 'Usuń tabelę',
  'insertColumn': 'Wstaw kolumnę',
  'removeColumn': 'Usuń kolumnę',
  'insertRow': 'Wstaw wiersz',
  'removeRow': 'Usuń wiersz',
  'mergeCells': 'Scal komórki',
  'splitCell': 'Podziel komórkę'
};
/* harmony default export */ __webpack_exports__["a"] = ({
  zh: zh,
  zhHant: zhHant,
  en: en,
  pl: pl
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(38);

var iterableToArrayLimit = __webpack_require__(39);

var nonIterableRest = __webpack_require__(40);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getLanguage; });
/* unused harmony export Table */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return tableRenderMap; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _languages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7);













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
    return lang(_languages__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], 'braft-table');
  } else {
    return _languages__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"][lang] || _languages__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]['zh'];
  }
};
var Table =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Table, _React$Component);

  function Table(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Table);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Table).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "state", {
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

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "__tableRef", null);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "__colRefs", {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "__rowRefs", {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "__colResizeIndex", 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "__colResizeStartAt", 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "__startCellKey", null);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "__endCellKey", null);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "__dragSelecting", false);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "__dragSelected", false);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "__dragSelectingStartColumnIndex", null);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "__dragSelectingStartRowIndex", null);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "__dragSelectingEndColumnIndex", null);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "__dragSelectingEndRowIndex", null);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "__draggingRectBoundingUpdating", false);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "__selectedCellsCleared", false);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "handleToolbarMouseDown", function (event) {
      event.preventDefault();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "handleKeyDown", function (event) {
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

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "handleMouseUp", function (event) {
      if (event.button !== 0) {
        return false;
      }

      if (_this.state.colResizing) {
        var _this$state2 = _this.state,
            defaultColWidth = _this$state2.defaultColWidth,
            colToolHandlers = _this$state2.colToolHandlers,
            colResizeOffset = _this$state2.colResizeOffset;

        var nextColToolHandlers = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(colToolHandlers);

        nextColToolHandlers[_this.__colResizeIndex - 1].width = (nextColToolHandlers[_this.__colResizeIndex - 1].width || defaultColWidth) + colResizeOffset;
        nextColToolHandlers[_this.__colResizeIndex].width = (nextColToolHandlers[_this.__colResizeIndex].width || defaultColWidth) - colResizeOffset;
        _this.__colResizeIndex = 0;
        _this.__colResizeStartAt = 0;

        _this.setState({
          contextMenuPosition: null,
          colToolHandlers: nextColToolHandlers,
          colResizeOffset: 0,
          colResizing: false
        });
      } else {
        _this.setState({
          contextMenuPosition: null
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "handleMouseMove", function (event) {
      if (_this.state.colResizing) {
        _this.setState({
          colResizeOffset: _this.getResizeOffset(event.clientX - _this.__colResizeStartAt)
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "handleColResizerMouseDown", function (event) {
      _this.__colResizeIndex = event.currentTarget.dataset.index * 1;
      _this.__colResizeStartAt = event.clientX;

      _this.setState({
        colResizing: true
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "handleCellContexrMenu", function (event) {
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

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "handleContextMenuContextMenu", function (event) {
      event.preventDefault();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "handleCellMouseDown", function (event) {
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

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "handleCellMouseUp", function () {
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

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "handleCellMouseEnter", function (event) {
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

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "handleTableMouseMove", function (event) {
      if (_this.__dragSelecting && _this.__dragSelected) {
        _this.updateDraggingRectBounding(event);

        event.preventDefault();
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "handleTableMouseLeave", function (event) {
      if (_this.__dragSelecting && event.currentTarget && event.currentTarget.dataset.role === 'table') {
        _this.handleCellMouseUp();
      }

      event.preventDefault();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "confirmDragSelecting", function () {
      if (!_this.__dragSelectingStartColumnIndex || !_this.__dragSelectingStartRowIndex || !_this.__dragSelectingEndColumnIndex || !_this.__dragSelectingEndRowIndex) {
        return false;
      }

      var _TableUtils$getCellsI = _utils__WEBPACK_IMPORTED_MODULE_11__["getCellsInsideRect"](_this.props.editorState, _this.tableKey, [_this.__dragSelectingStartColumnIndex, _this.__dragSelectingStartRowIndex], [_this.__dragSelectingEndColumnIndex, _this.__dragSelectingEndRowIndex]),
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

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "updateDraggingRectBounding", function (mouseEvent) {
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

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "selectCell", function (event) {
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

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "selectColumn", function (event) {
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

      var _TableUtils$getCellsI2 = _utils__WEBPACK_IMPORTED_MODULE_11__["getCellsInsideRect"](_this.props.editorState, _this.tableKey, [selectedColumnIndex, 0], [selectedColumnIndex, _this.state.rowToolHandlers.length - 1]),
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

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "selectRow", function (event) {
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

      var _TableUtils$getCellsI3 = _utils__WEBPACK_IMPORTED_MODULE_11__["getCellsInsideRect"](_this.props.editorState, _this.tableKey, [0, selectedRowIndex], [_this.state.colToolHandlers.length, selectedRowIndex]),
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

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "insertColumn", function (event) {
      var columnIndex = getIndexFromEvent(event);

      if (columnIndex === false) {
        return false;
      }

      _this.setState({
        selectedCells: [],
        selectedRowIndex: -1,
        selectedColumnIndex: -1
      }, function () {
        _this.props.editor.setValue(_utils__WEBPACK_IMPORTED_MODULE_11__["insertColumn"](_this.props.editorState, _this.tableKey, _this.state.tableRows.length, columnIndex));
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "removeColumn", function () {
      var selectedColumnIndex = _this.state.selectedColumnIndex;

      if (selectedColumnIndex >= 0) {
        _this.setState({
          selectedColumnIndex: -1
        }, function () {
          _this.props.editor.draftInstance.blur();

          setImmediate(function () {
            _this.props.editor.setValue(_utils__WEBPACK_IMPORTED_MODULE_11__["removeColumn"](_this.props.editorState, _this.tableKey, selectedColumnIndex));
          });
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "insertRow", function (event) {
      var rowIndex = getIndexFromEvent(event);

      if (rowIndex === false) {
        return false;
      }

      _this.setState({
        selectedCells: [],
        selectedRowIndex: -1,
        selectedColumnIndex: -1
      }, function () {
        _this.props.editor.setValue(_utils__WEBPACK_IMPORTED_MODULE_11__["insertRow"](_this.props.editorState, _this.tableKey, _this.colLength, rowIndex));
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "removeRow", function () {
      var selectedRowIndex = _this.state.selectedRowIndex;

      if (selectedRowIndex >= 0) {
        _this.setState({
          selectedRowIndex: -1
        }, function () {
          _this.props.editor.draftInstance.blur();

          setImmediate(function () {
            _this.props.editor.setValue(_utils__WEBPACK_IMPORTED_MODULE_11__["removeRow"](_this.props.editorState, _this.tableKey, selectedRowIndex));
          });
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "mergeCells", function () {
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
          _this.props.editor.setValue(_utils__WEBPACK_IMPORTED_MODULE_11__["mergeCells"](_this.props.editorState, _this.tableKey, selectedCells));
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "splitCell", function () {
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
          _this.props.editor.setValue(_utils__WEBPACK_IMPORTED_MODULE_11__["splitCell"](_this.props.editorState, _this.tableKey, selectedCells[0]));
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "removeTable", function () {
      _this.props.editor.setValue(_utils__WEBPACK_IMPORTED_MODULE_11__["removeTable"](_this.props.editorState, _this.tableKey));
    });

    _this.language = getLanguage(props.editor);
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Table, [{
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

      var rowToolHandlers = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this.state.rowToolHandlers);

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
          var _colSpan = (cellBlockData.get('colSpan') || 1) * 1;

          for (var ii = _this3.colLength; ii < _this3.colLength + _colSpan; ii++) {
            colToolHandlers[ii] = {
              key: cell.key,
              width: 0
            };
          }

          _this3.colLength += _colSpan;
        }

        var newCell = react__WEBPACK_IMPORTED_MODULE_8___default.a.cloneElement(cell, {
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

      var tableWidth = this.__tableRef.getBoundingClientRect().width;

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

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("colgroup", null, this.state.colToolHandlers.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("col", {
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
          colToolHandlers = _this$state6.colToolHandlers,
          selectedColumnIndex = _this$state6.selectedColumnIndex,
          defaultColWidth = _this$state6.defaultColWidth;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        "data-active": selectedColumnIndex >= 0,
        contentEditable: false,
        "data-key": "bf-col-toolbar",
        className: "bf-table-col-tools".concat(colResizing ? ' resizing' : ''),
        onMouseDown: this.handleToolbarMouseDown
      }, colToolHandlers.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          key: index,
          "data-key": item.key,
          "data-index": index,
          "data-active": selectedColumnIndex == index,
          className: "bf-col-tool-handler",
          style: {
            width: item.width || defaultColWidth
          },
          onClick: _this5.selectColumn
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "bf-col-tool-left"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          "data-index": index,
          "data-role": "insert-column",
          className: "bf-insert-col-before",
          onClick: _this5.insertColumn
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
          className: "bfi-add"
        }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "bf-col-tool-center"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          "data-index": index,
          "data-role": "remove-col",
          className: "bf-remove-col",
          onClick: _this5.removeColumn
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
          className: "bfi-bin"
        }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "bf-col-tool-right"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          "data-index": index + 1,
          "data-role": "insert-column",
          className: "bf-insert-col-after",
          onClick: _this5.insertColumn
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
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
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        "data-active": selectedRowIndex >= 0,
        contentEditable: false,
        className: "bf-table-row-tools",
        onMouseDown: this.handleToolbarMouseDown
      }, rowToolHandlers.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          key: index,
          "data-key": item.key,
          "data-index": index,
          "data-active": selectedRowIndex == index,
          className: "bf-row-tool-handler",
          style: {
            height: item.height
          },
          onClick: _this6.selectRow
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "bf-row-tool-up"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          "data-index": index,
          "data-role": "insert-row",
          className: "bf-insert-row-before",
          onClick: _this6.insertRow
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
          className: "bfi-add"
        }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "bf-row-tool-center"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          "data-index": index,
          "data-role": "remove-row",
          className: "bf-remove-row",
          onClick: _this6.removeRow
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
          className: "bfi-bin"
        }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "bf-row-tool-down"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          "data-index": index + 1,
          "data-role": "insert-row",
          className: "bf-insert-row-after",
          onClick: _this6.insertRow
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
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

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "bf-table-context-menu",
        onContextMenu: this.handleContextMenuContextMenu,
        contentEditable: false,
        style: contextMenuPosition
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "context-menu-item",
        onMouseDown: this.mergeCells,
        "data-disabled": !cellsMergeable
      }, this.language.mergeCells), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "context-menu-item",
        onMouseDown: this.splitCell,
        "data-disabled": !cellSplittable
      }, this.language.splitCell), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
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
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "bf-table-container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("table", {
        "data-role": "table",
        className: "bf-table".concat(dragSelecting ? ' dragging' : ''),
        ref: function ref(_ref3) {
          return _this7.__tableRef = _ref3;
        },
        onMouseDown: this.handleTableMouseDown,
        onMouseUp: this.hanldeTableMouseUp,
        onMouseMove: this.handleTableMouseMove,
        onMouseLeave: this.handleTableMouseLeave
      }, this.createColGroup(), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tbody", null, tableRows.map(function (cells, rowIndex) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", {
          ref: function ref(_ref2) {
            return _this7.__rowRefs[rowIndex] = _ref2;
          },
          key: rowIndex
        }, cells);
      }))), dragSelecting ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "dragging-rect",
        style: draggingRectBounding
      }) : null, this.createContextMenu(), this.createColTools(), this.createRowTools());
    }
  }]);

  return Table;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);
var tableRenderMap = function tableRenderMap(props) {
  return immutable__WEBPACK_IMPORTED_MODULE_9___default.a.Map({
    'table-cell': {
      element: 'td',
      wrapper: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Table, {
        editor: props.editor,
        editorState: props.editorState
      })
    }
  });
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(32).setImmediate))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(35);

var iterableToArray = __webpack_require__(36);

var nonIterableSpread = __webpack_require__(37);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(33);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(20)))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(20), __webpack_require__(34)))

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 35 */
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
/* 36 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 39 */
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
/* 40 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__(5);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./table/style.scss
var style = __webpack_require__(47);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "braft-utils"
var external_braft_utils_ = __webpack_require__(6);

// EXTERNAL MODULE: external "draft-js"
var external_draft_js_ = __webpack_require__(4);

// CONCATENATED MODULE: ./table/handlers.js

 // todo
// 禁止选中多个单元格式时进行输入和粘贴操作
// 可以按tab/shift + tab键切换选中单元格
// 可以按方向键切换选中表格
// 在最后一个单元格中按Shift + 回车跳出表格

var handlers_handleKeyCommand = function handleKeyCommand(oringeHandler) {
  return function (command, editorState) {
    if (oringeHandler && oringeHandler(command, editorState) === 'handled') {
      return 'handled';
    }

    var selectedBlocks = external_braft_utils_["ContentUtils"].getSelectedBlocks(editorState);

    if (!selectedBlocks.find(function (block) {
      return block.getType() === 'table-cell';
    })) {
      return 'not-handled';
    }

    var currentBlock = external_braft_utils_["ContentUtils"].getSelectionBlock(editorState);

    if (command === 'backspace') {
      if (selectedBlocks.length > 1) {
        return 'handled';
      }

      if (currentBlock.getText().length === 0) {
        return 'handled';
      }
    } else if (command === 'tab') {
      return 'handled';
    }
  };
};
var handlers_handleReturn = function handleReturn(oringeHandler) {
  return function (event, editorState, editor) {
    if (oringeHandler && oringeHandler(event, editorState, editor) === 'handled') {
      return 'handled';
    }

    if (!external_braft_utils_["ContentUtils"].selectionContainsBlockType(editorState, 'table-cell')) {
      return 'not-handled';
    }

    var blockType = external_braft_utils_["ContentUtils"].getSelectionBlockType(editorState);

    if (blockType !== 'table-cell') {
      return 'not-handled';
    }

    editor.setValue(external_draft_js_["RichUtils"].insertSoftNewline(editorState));
    return 'handled';
  };
};
var handlers_handleDroppedFiles = function handleDroppedFiles(oringeHandler) {
  return function (selectionState, files, editor) {
    if (oringeHandler && oringeHandler(selectionState, files, editor) === 'handled') {
      return 'handled';
    }

    if (!external_braft_utils_["ContentUtils"].selectionContainsBlockType(editor.state.editorState, 'table-cell')) {
      return 'not-handled';
    }

    var currentBlock = external_braft_utils_["ContentUtils"].getSelectionBlock(editor.state.editorState);

    if (currentBlock.getType() === 'table-cell') {
      return 'handled';
    }
  };
};
var handlers_handlePastedFiles = function handlePastedFiles(oringeHandler) {
  return function (files, editor) {
    if (oringeHandler && oringeHandler(files, editor) === 'handled') {
      return 'handled';
    }

    if (!external_braft_utils_["ContentUtils"].selectionContainsBlockType(editor.state.editorState, 'table-cell')) {
      return 'not-handled';
    }

    var currentBlock = external_braft_utils_["ContentUtils"].getSelectionBlock(editor.state.editorState);

    if (currentBlock.getType() === 'table-cell') {
      return 'handled';
    }
  };
};
var handlers_handlePastedText = function handlePastedText(oringeHandler) {
  return function (text, html, editorState, editor) {
    if (oringeHandler && oringeHandler(text, html, editorState, editor) === 'handled') {
      return 'handled';
    }

    var selectedBlocks = external_braft_utils_["ContentUtils"].getSelectedBlocks(editor.state.editorState);

    if (!selectedBlocks.find(function (block) {
      return block.getType() === 'table-cell';
    })) {
      return 'not-handled';
    }

    if (selectedBlocks.length === 1) {
      editor.setValue(external_braft_utils_["ContentUtils"].insertText(editor.state.editorState, text));
    }

    return 'handled';
  };
};
// EXTERNAL MODULE: ./table/render.jsx
var render = __webpack_require__(18);

// EXTERNAL MODULE: ./table/utils.js
var utils = __webpack_require__(7);

// CONCATENATED MODULE: ./table/converts.js

var converts_tableImportFn = function tableImportFn(nodeName, node) {
  if (nodeName !== 'body' && node && node.querySelector && node.querySelector(':scope > table')) {
    node.parentNode.insertBefore(node.querySelector(':scope > table'), node.nextSibling);
  }

  if (nodeName === 'table') {
    Object(utils["rebuildTableNode"])(node);
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
      rowSpan: rowSpan
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
var tableExportFn = function tableExportFn(contentState, block) {
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
    start = "<table><tr><td".concat(blockStyle, " colSpan=\"").concat(block.data.colSpan, "\" rowSpan=\"").concat(block.data.rowSpan, "\">");
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
// CONCATENATED MODULE: ./table/index.jsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableUtils", function() { return TableUtils; });








external_braft_utils_["ContentUtils"].registerStrictBlockType('table-cell');
var TableUtils = utils;
/* harmony default export */ var table = __webpack_exports__["default"] = (function (options) {
  options = objectSpread_default()({}, options);
  var _options = options,
      includeEditors = _options.includeEditors,
      excludeEditors = _options.excludeEditors;
  return [{
    type: 'control',
    includeEditors: includeEditors,
    excludeEditors: excludeEditors,
    control: function control(props) {
      return {
        key: 'table',
        replace: 'table',
        type: 'button',
        title: Object(render["a" /* getLanguage */])(props.editor).insertTable,
        text: external_react_default.a.createElement("i", {
          className: "bfi-table"
        }),
        onClick: function onClick() {
          props.editor.setValue(TableUtils.insertTable(props.editorState));
        }
      };
    }
  }, {
    type: 'prop-interception',
    includeEditors: includeEditors,
    excludeEditors: excludeEditors,
    interceptor: function interceptor(editorProps) {
      editorProps.handleKeyCommand = handlers_handleKeyCommand(editorProps.handleKeyCommand);
      editorProps.handleReturn = handlers_handleReturn(editorProps.handleReturn);
      editorProps.handleDroppedFiles = handlers_handleDroppedFiles(editorProps.handleDroppedFiles);
      editorProps.handlePastedFiles = handlers_handlePastedFiles(editorProps.handlePastedFiles);
      editorProps.handlePastedText = handlers_handlePastedText(editorProps.handlePastedText);
      return editorProps;
    }
  }, {
    type: 'block',
    name: 'table-cell',
    includeEditors: includeEditors,
    excludeEditors: excludeEditors,
    renderMap: render["b" /* tableRenderMap */],
    importer: converts_tableImportFn,
    exporter: tableExportFn
  }];
});

/***/ }),
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});