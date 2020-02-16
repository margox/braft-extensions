import { EditorState, ContentBlock, CharacterMetadata, genKey } from 'draft-js'
import Immutable from 'immutable'
import { ContentUtils } from 'braft-utils'

// 简易的值比较方法
const valueComparison = (value1, value2, operator) => {

  switch (operator) {
    case '==':
      return value1 == value2
    case '>=':
      return value1 >= value2
    case '<=':
      return value1 <= value2
    case '>':
      return value1 > value2
    case '<':
      return value1 < value2
  }

}

// 创建并返回一个单元格block
const createCellBlock = (cell) => {

  cell = {
    colSpan: 1,
    rowSpan: 1,
    text: '',
    ...cell
  }

  const { tableKey, key, colIndex, rowIndex, colSpan, rowSpan, text, isHead } = cell

  return new ContentBlock({
    key: key || genKey(),
    type: 'table-cell',
    text: text,
    data: Immutable.Map({ tableKey, colIndex, rowIndex, colSpan, rowSpan, isHead }),
    characterList: Immutable.List(Immutable.Repeat(CharacterMetadata.create(), text.length))
  })

}

const createUnstyledBlock = () => {
  const key = genKey()
  return [key, new ContentBlock({
    key: key,
    type: 'unstyled',
    text: '',
    data: Immutable.Map({}),
    characterList: Immutable.List([])
  })]
}

// 创建并返回一行单元格block
const createRowBlocks = (tableKey, rowIndex, rowLength, firstCellText = '') => {

  const cells = Immutable.Range(0, rowLength).map((index) => {

    var cellBlock = createCellBlock({
      tableKey: tableKey,
      colIndex: index,
      rowIndex: rowIndex,
      text: index === 0 ? firstCellText : ''
    })

    return [cellBlock.getKey(), cellBlock]

  }).toArray()

  return Immutable.OrderedMap(cells).toSeq()

}

// 将表格block更新到contentState
const updateTableBlocks = (contentState, selection, focusKey, tableBlocks, tableKey) => {

  const contentBlocks = contentState.getBlockMap().toSeq()

  const blocksBefore = contentBlocks.takeUntil(block => {
    return block.getData().get('tableKey') === tableKey
  })

  const blocksAfter = contentBlocks.skipUntil((block, key) => {
    const nextBlockKey = contentState.getKeyAfter(key)
    return block.getData().get('tableKey') === tableKey && nextBlockKey && contentState.getBlockForKey(nextBlockKey).getData().get('tableKey') !== tableKey
  }).rest()

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
  })

}

// 使用简易值比较函数筛选符合条件的block
const findBlocks = (contentBlocks, propName, propValue, operator = '==') => {

  return contentBlocks.filter((block) => {
    return valueComparison(block.getData().get(propName), propValue, operator)
  })

}

// 遍历以修正单元格的colIndex属性（表格blocks专用）
export const rebuildTableBlocks = (tableBlocks, addonBlockData = {}) => {

  const skipedCells = {}
  const cellCountOfRow = []

  return tableBlocks.map(block => {

    const blockData = block.getData()
    const rowIndex = blockData.get('rowIndex')
    const colSpan = blockData.get('colSpan') || 1
    const rowSpan = blockData.get('rowSpan') || 1

    cellCountOfRow[rowIndex] = cellCountOfRow[rowIndex] || 0
    cellCountOfRow[rowIndex]++

    const cellIndex = cellCountOfRow[rowIndex] - 1

    let colIndex = cellIndex
    let xx, yy

    for (; skipedCells[rowIndex] && skipedCells[rowIndex][colIndex]; colIndex++ , cellCountOfRow[rowIndex]++);

    if (rowSpan > 1 || colSpan > 1) {

      for (xx = rowIndex; xx < rowIndex + rowSpan; xx++) {
        for (yy = colIndex; yy < colIndex + colSpan; yy++) {
          skipedCells[xx] = skipedCells[xx] || {}
          skipedCells[xx][yy] = true
        }
      }

    }

    return block.merge({
      'data': Immutable.Map({
        ...blockData.toJS(),
        ...addonBlockData,
        colIndex: colIndex
      })
    })

  })

}

// 遍历以修正单元格的colSpan和rowSpan属性（表格DOM专用）
export const rebuildTableNode = (tableNode) => {

  const tableKey = genKey()
  const skipedCells = {};

  [].forEach.call(tableNode.rows, (row, rowIndex) => {

    [].forEach.call(row.cells, (cell, cellIndex) => {

      let colIndex = cellIndex
      let xx, yy

      for (; skipedCells[rowIndex] && skipedCells[rowIndex][colIndex]; colIndex++) {/*_*/ }

      const { rowSpan, colSpan } = cell

      if (rowSpan > 1 || colSpan > 1) {

        for (xx = rowIndex; xx < rowIndex + rowSpan; xx++) {
          for (yy = colIndex; yy < colIndex + colSpan; yy++) {
            skipedCells[xx] = skipedCells[xx] || {}
            skipedCells[xx][yy] = true
          }
        }

      }

      cell.innerHTML = cell.innerHTML.replace(/\n\s*$/, '')
      cell.dataset.tableKey = tableKey
      cell.dataset.colIndex = colIndex
      cell.dataset.rowIndex = rowIndex

    })

  })

}

export const updateAllTableBlocks = (editorState, tableKey, blockData) => {
  const selectionState = editorState.getSelection()
  const contentState = editorState.getCurrentContent()
  const contentBlocks = contentState.getBlockMap()
  const tableBlocks = findBlocks(contentBlocks, 'tableKey', tableKey)

  const nextTableBlocks = rebuildTableBlocks(tableBlocks, blockData)
  const nextContentState = updateTableBlocks(contentState, editorState.getSelection(), selectionState.focusKey, nextTableBlocks, tableKey)

  return EditorState.push(editorState, nextContentState, 'insert-table-row')
}

// 获取需要插入到某一行的单元格的数量
export const getCellCountForInsert = (tableBlocks, rowIndex) => {

  return findBlocks(tableBlocks, 'rowIndex', rowIndex).reduce((count, block) => {
    return count + (block.getData().get('colSpan') || 1) * 1
  }, 0)

}

// 获取指定范围内的单元格block
export const getCellsInsideRect = (editorState, tableKey, startLocation, endLocation) => {

  const [startColIndex, startRowIndex] = startLocation
  const [endColIndex, endRowIndex] = endLocation

  const leftColIndex = Math.min(startColIndex, endColIndex)
  const rightColIndex = Math.max(startColIndex, endColIndex)
  const upRowIndex = Math.min(startRowIndex, endRowIndex)
  const downRowIndex = Math.max(startRowIndex, endRowIndex)

  const matchedCellLocations = []

  for (let ii = leftColIndex; ii <= rightColIndex; ii++) {
    for (let jj = upRowIndex; jj <= downRowIndex; jj++) {
      matchedCellLocations.push([ii, jj])
    }
  }

  if (matchedCellLocations.length === 0) {
    return Immutable.OrderedMap([])
  }

  const contentState = editorState.getCurrentContent()
  const contentBlocks = contentState.getBlockMap()
  const tableBlocks = findBlocks(contentBlocks, 'tableKey', tableKey)

  const matchedCellBlockKeys = []
  const spannedCellBlockKeys = []

  let matchedCellBlocks = Immutable.List([])
  let spannedCellBlocks = Immutable.List([])

  tableBlocks.forEach(block => {

    const blockData = block.getData()
    const blockKey = block.getKey()
    const colIndex = blockData.get('colIndex')
    const rowIndex = blockData.get('rowIndex')
    const colSpan = blockData.get('colSpan')
    const rowSpan = blockData.get('rowSpan')

    matchedCellLocations.forEach(([x, y]) => {

      if (colIndex === x && rowIndex === y) {
        matchedCellBlockKeys.indexOf(blockKey) === -1 && (matchedCellBlocks = matchedCellBlocks.push(block)) && matchedCellBlockKeys.push(blockKey);
        (colSpan > 1 || rowSpan > 1) && (spannedCellBlockKeys.indexOf(blockKey) === -1) && (spannedCellBlocks = spannedCellBlocks.push(block)) && spannedCellBlockKeys.push(blockKey)
      } else if (colSpan > 1 || rowSpan > 1) {
        if ((colIndex <= x && colIndex + colSpan > x && rowIndex <= y && rowIndex + rowSpan > y)) {
          (spannedCellBlockKeys.indexOf(blockKey) === -1) && (spannedCellBlocks = spannedCellBlocks.push(block)) && spannedCellBlockKeys.push(blockKey)
        }
      }

    })

  })

  return {
    cellBlocks: matchedCellBlocks.merge(spannedCellBlocks),
    cellKeys: [...matchedCellBlockKeys, ...spannedCellBlockKeys], // todo: 去重复
    spannedCellBlocks: spannedCellBlocks,
    spannedCellBlockKeys: spannedCellBlockKeys
  }

}

// 插入一个单元格block到表格的block列表中
export const insertCell = (tableBlocks, cell) => {

  let colIndex, rowIndex, cellBlock

  if (cell instanceof ContentBlock) {
    colIndex = cell.getData().get('colIndex')
    rowIndex = cell.getData().get('rowIndex')
    cellBlock = cell
  } else {
    colIndex = cell.colIndex
    rowIndex = cell.rowIndex
    cellBlock = createCellBlock(cell)
  }

  const blocksBefore = tableBlocks.takeUntil(block => {
    const blockRowIndex = block.getData().get('rowIndex')
    const blockColIndex = block.getData().get('colIndex')
    return (blockColIndex >= colIndex && blockRowIndex === rowIndex) || blockRowIndex > rowIndex
  })

  const blocksAfter = tableBlocks.skipUntil(block => {
    const blockRowIndex = block.getData().get('rowIndex')
    const blockColIndex = block.getData().get('colIndex')
    return (blockColIndex >= colIndex && blockRowIndex === rowIndex) || blockRowIndex > rowIndex
  })

  const nextTableBlocks = blocksBefore.concat(Immutable.OrderedMap([[cellBlock.getKey(), cellBlock]]).toSeq(), blocksAfter)

  return nextTableBlocks

}

// 插入多个单元格block到表格的block列表中
export const insertCells = (tableBlocks, cells = []) => {

  return cells.reduce((nextTableBlocks, cell) => {
    return insertCell(nextTableBlocks, cell)
  }, tableBlocks)

}

// 插入表格
export const insertTable = (editorState, columns = 3, rows = 3) => {

  if (ContentUtils.selectionContainsStrictBlock(editorState)) {
    return editorState
  }

  const selectionState = editorState.getSelection()
  const contentState = editorState.getCurrentContent()
  const contentBlocks = contentState.getBlockMap()

  const tableKey = genKey()
  const cellBlocks = [createUnstyledBlock()]

  for (var ii = 0; ii < rows; ii++) {
    for (var jj = 0; jj < columns; jj++) {
      let cellBlock = createCellBlock({
        tableKey: tableKey,
        colIndex: jj,
        rowIndex: ii,
      })
      cellBlocks.push([cellBlock.getKey(), cellBlock])
    }
  }

  cellBlocks.push(createUnstyledBlock())

  const startKey = selectionState.getStartKey()
  const currentBlock = contentState.getBlockForKey(startKey)

  const blocksBefore = contentBlocks.toSeq().takeUntil((block) => {
    return block === currentBlock
  })

  const blocksAfter = contentBlocks.toSeq().skipUntil((block) => {
    return block === currentBlock
  }).rest()

  const tableBlocks = Immutable.OrderedMap(cellBlocks).toSeq()

  const firstCellKey = cellBlocks[1][0]
  const nextContentBlocks = blocksBefore.concat(
    Immutable.OrderedMap([[startKey, currentBlock]]).toSeq(),
    tableBlocks,
    blocksAfter
  ).toOrderedMap()

  const nextContentState = contentState.merge({
    blockMap: nextContentBlocks,
    selectionBefore: selectionState,
    selectionAfter: selectionState.merge({
      anchorKey: firstCellKey,
      anchorOffset: selectionState.getStartOffset(),
      focusKey: firstCellKey,
      focusOffset: selectionState.getStartOffset(),
      isBackward: false
    })
  })

  return EditorState.push(editorState, nextContentState, 'insert-table')

}

// 删除整个表格
export const removeTable = (editorState, tableKey) => {

  if (!tableKey) {
    return editorState
  }

  const selectionState = editorState.getSelection()
  const contentState = editorState.getCurrentContent()
  const contentBlocks = contentState.getBlockMap()
  const tableBlocks = findBlocks(contentBlocks, 'tableKey', tableKey)

  const nextContentBlocks = contentBlocks.filter(block => {
    if (block.getType() === 'table-cell' && block.getData().get('tableKey') === tableKey) {
      return false
    } else {
      return true
    }
  })

  const focusCellKey = (tableBlocks.first() ? (contentState.getBlockBefore(tableBlocks.first().getKey()) || nextContentBlocks.first()) : nextContentBlocks.first()).getKey()

  const nextContentState = contentState.merge({
    blockMap: nextContentBlocks,
    selectionBefore: selectionState,
    selectionAfter: selectionState.merge({
      anchorKey: focusCellKey,
      anchorOffset: selectionState.getStartOffset(),
      focusKey: focusCellKey,
      focusOffset: selectionState.getStartOffset(),
      isBackward: false
    })
  })

  return EditorState.push(editorState, nextContentState, 'remove-table')

}

// 插入一列单元格到表格中
export const insertColumn = (editorState, tableKey, cellCounts, colIndex) => {

  const contentState = editorState.getCurrentContent()
  const contentBlocks = contentState.getBlockMap()
  const tableBlocks = findBlocks(contentBlocks, 'tableKey', tableKey)
  const cellsToBeAdded = []

  if (colIndex === 0) {

    for (let ii = 0; ii < cellCounts; ii++) {
      cellsToBeAdded.push({
        text: '',
        colIndex: 0,
        rowIndex: ii,
        colSpan: 1,
        rowSpan: 1,
        tableKey: tableKey
      })
    }

  }

  const nextTableBlocks = tableBlocks.map(block => {

    const blockData = block.getData().toJS()
    const { colIndex: blockColIndex, rowIndex: blockRowIndex, colSpan: blockColSpan, rowSpan: blockRowSpan } = blockData
    const nextColIndex = blockColIndex < colIndex ? blockColIndex : blockColIndex + 1
    const nextColSpan = blockColIndex < colIndex && blockColSpan > 1 && blockColIndex + blockColSpan > colIndex ? blockColSpan + 1 : blockColSpan

    const needUpdate = nextColIndex !== blockColIndex || nextColSpan !== blockColSpan

    if ((blockColSpan === 1 && blockColIndex === colIndex - 1) || (blockColSpan > 1 && blockColIndex + blockColSpan === colIndex)) {

      for (let jj = blockRowIndex; jj < blockRowIndex + blockRowSpan; jj++) {
        cellsToBeAdded.push({
          text: '',
          colIndex: colIndex,
          rowIndex: jj,
          colSpan: 1,
          rowSpan: 1,
          tableKey: tableKey
        })
      }

    }

    return needUpdate ? block.merge({
      data: Immutable.Map({
        ...blockData,
        colIndex: nextColIndex,
        colSpan: nextColSpan
      })
    }) : block

  })

  if (cellsToBeAdded.length === 0) {
    return editorState
  }

  const focusCellKey = cellsToBeAdded[0].key = genKey()
  const nextContentState = updateTableBlocks(contentState, editorState.getSelection(), focusCellKey, insertCells(nextTableBlocks, cellsToBeAdded), tableKey)

  return EditorState.push(editorState, nextContentState, 'insert-table-column')

}

// 从表格中移除指定的某一列单元格
export const removeColumn = (editorState, tableKey, colIndex) => {

  const contentState = editorState.getCurrentContent()
  const contentBlocks = contentState.getBlockMap().toSeq()
  const tableBlocks = findBlocks(contentBlocks, 'tableKey', tableKey)

  const cellsToBeAdded = findBlocks(tableBlocks, 'colIndex', colIndex).reduce((cellsToBeAdded, block) => {

    const { colIndex, rowIndex, colSpan, rowSpan } = block.getData().toJS()

    if (colSpan > 1) {
      cellsToBeAdded.push({
        text: block.getText(),
        tableKey: tableKey,
        colIndex: colIndex,
        rowIndex: rowIndex,
        colSpan: colSpan - 1,
        rowSpan: rowSpan
      })
    }

    return cellsToBeAdded

  }, [])

  const nextTableBlocks = tableBlocks.filter(block => {
    return block.getData().get('colIndex') * 1 !== colIndex
  }).map(block => {

    const blockData = block.getData().toJS()
    const { colIndex: blockColIndex, colSpan: blockColSpan } = blockData

    const newColIndex = blockColIndex > colIndex ? blockColIndex - 1 : blockColIndex
    const newColSpan = blockColIndex < colIndex && blockColIndex + blockColSpan > colIndex ? blockColSpan - 1 : blockColSpan
    const needUpdate = newColIndex !== blockColIndex || newColSpan !== blockColSpan

    return needUpdate ? block.merge({
      'data': {
        ...blockData,
        colIndex: newColIndex,
        colSpan: newColSpan
      }
    }) : block

  })

  const focusCellKey = (nextTableBlocks.first() || contentState.getBlockBefore(tableBlocks.first().getKey()) || contentState.getBlockAfter(tableBlocks.first().getKey())).getKey()
  const nextContentState = updateTableBlocks(contentState, editorState.getSelection(), focusCellKey, insertCells(nextTableBlocks, cellsToBeAdded), tableKey)

  return EditorState.push(editorState, nextContentState, 'remove-table-column')

}

// 插入一行单元格到表格中
export const insertRow = (editorState, tableKey, cellCounts, rowIndex, addonBlockData) => {

  const contentState = editorState.getCurrentContent()
  const contentBlocks = contentState.getBlockMap().toSeq()
  const tableBlocks = findBlocks(contentBlocks, 'tableKey', tableKey)

  const blocksBefore = findBlocks(tableBlocks, 'rowIndex', rowIndex, '<').map(block => {

    const blockData = block.getData().toJS()
    const { rowIndex: blockRowIndex, rowSpan: blockRowSpan } = blockData

    if (blockRowIndex > rowIndex) {
      return block
    } else {

      const needUpdate = blockRowSpan && blockRowIndex + blockRowSpan > rowIndex
      const newRowSpan = needUpdate ? blockRowSpan * 1 + 1 : blockRowSpan

      return block.merge({
        'data': Immutable.Map({
          ...blockData, rowSpan: newRowSpan
        })
      })

    }

  })

  const blocksAfter = findBlocks(tableBlocks, 'rowIndex', rowIndex, '>=').map(block => {

    const blockData = block.getData().toJS()

    return block.merge({
      'data': Immutable.Map({
        ...blockData,
        rowIndex: blockData.rowIndex * 1 + 1
      })
    })

  })

  const colCellLength = getCellCountForInsert(tableBlocks, rowIndex)
  const rowBlocks = createRowBlocks(tableKey, rowIndex, colCellLength || cellCounts)
  const focusCellKey = rowBlocks.first().getKey()

  const nextTableBlocks = rebuildTableBlocks(blocksBefore.concat(rowBlocks, blocksAfter), addonBlockData)
  const nextContentState = updateTableBlocks(contentState, editorState.getSelection(), focusCellKey, nextTableBlocks, tableKey)

  return EditorState.push(editorState, nextContentState, 'insert-table-row')

}

// 从表格中移除指定的某一行单元格
export const removeRow = (editorState, tableKey, rowIndex, addonBlockData) => {

  const contentState = editorState.getCurrentContent()
  const contentBlocks = contentState.getBlockMap().toSeq()
  const tableBlocks = findBlocks(contentBlocks, 'tableKey', tableKey)

  const blocksBefore = findBlocks(tableBlocks, 'rowIndex', rowIndex, '<').map(block => {

    const blockData = block.getData().toJS()
    const { rowIndex: blockRowIndex, rowSpan: blockRowSpan } = blockData

    if (blockRowIndex > rowIndex) {
      return block
    } else {

      const needUpdate = blockRowSpan && blockRowIndex + blockRowSpan > rowIndex
      const newRowSpan = needUpdate ? blockRowSpan * 1 - 1 : blockRowSpan

      return block.merge({
        'data': Immutable.Map({
          ...blockData, rowSpan: newRowSpan
        })
      })

    }

  })

  const blocksAfter = findBlocks(tableBlocks, 'rowIndex', rowIndex, '>').map(block => {

    const blockData = block.getData().toJS()

    return block.merge({
      'data': Immutable.Map({
        ...blockData,
        rowIndex: blockData.rowIndex * 1 - 1
      })
    })

  })

  const cellsToBeAdded = findBlocks(tableBlocks, 'rowIndex', rowIndex).reduce((cellsToBeAdded, block) => {

    const { colIndex, rowIndex, colSpan, rowSpan } = block.getData().toJS()

    if (rowSpan > 1) {
      cellsToBeAdded.push({
        text: block.getText(),
        tableKey: tableKey,
        colIndex: colIndex,
        rowIndex: rowIndex,
        colSpan: colSpan,
        rowSpan: rowSpan - 1
      })
    }

    return cellsToBeAdded

  }, [])

  const focusCellKey = (blocksAfter.first() || blocksBefore.last() || contentBlocks.first()).getKey()
  const nextTableBlocks = rebuildTableBlocks(insertCells(blocksBefore.concat(blocksAfter), cellsToBeAdded), addonBlockData)
  const nextContentState = updateTableBlocks(contentState, editorState.getSelection(), focusCellKey, nextTableBlocks, tableKey, true)

  return EditorState.push(editorState, nextContentState, 'remove-table-row')

}

// 合并单元格
export const mergeCells = (editorState, tableKey, cellKeys) => {

  const contentState = editorState.getCurrentContent()
  const contentBlocks = contentState.getBlockMap()

  const cellBlocksData = []
  let mergedText = ''

  const tableBlocks = findBlocks(contentBlocks, 'tableKey', tableKey).filter(block => {

    if (~cellKeys.indexOf(block.getKey())) {

      mergedText += block.getText()

      cellBlocksData.push({
        key: block.getKey(),
        ...block.getData().toJS()
      })

      return false

    } else {
      return true
    }

  })

  const sortedCellBlocksData = cellBlocksData.sort((prev, next) => (next.colIndex + next.rowIndex) - (prev.colIndex + prev.rowIndex))

  const firstCellData = sortedCellBlocksData.slice(-1)[0]
  const lastCellData = sortedCellBlocksData[0]
  const mergedCell = contentState.getBlockForKey(firstCellData.key).merge({
    'text': mergedText,
    'data': Immutable.Map({
      ...firstCellData,
      colSpan: lastCellData.colIndex - firstCellData.colIndex + 1,
      rowSpan: lastCellData.rowIndex - firstCellData.rowIndex + 1
    }),
    characterList: Immutable.List(Immutable.Repeat(CharacterMetadata.create(), mergedText.length))
  })

  const nextContentState = updateTableBlocks(contentState, editorState.getSelection(), firstCellData.key, insertCell(tableBlocks, mergedCell), tableKey)

  return EditorState.push(editorState, nextContentState, 'merge-table-cell')

}

// 拆分单元格
export const splitCell = (editorState, tableKey, cellKey) => {

  const contentState = editorState.getCurrentContent()
  const contentBlocks = contentState.getBlockMap()

  const cellsToBeAdded = []

  const tableBlocks = findBlocks(contentBlocks, 'tableKey', tableKey).map(block => {

    if (block.getKey() === cellKey) {

      const blockData = block.getData().toJS()
      const { colIndex, rowIndex, colSpan, rowSpan } = blockData

      if (colSpan === 1 && rowSpan === 1) {
        return block
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
            })
          }
        }
      }

      return block.merge({
        'data': Immutable.Map({
          ...blockData,
          colSpan: 1,
          rowSpan: 1
        })
      })

    } else {
      return block
    }

  })

  const nextContentState = updateTableBlocks(contentState, editorState.getSelection(), cellKey, insertCells(tableBlocks, cellsToBeAdded), tableKey)

  return EditorState.push(editorState, nextContentState, 'merge-table-cell')

}
