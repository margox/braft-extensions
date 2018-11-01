import { EditorState, ContentBlock, CharacterMetadata, genKey } from 'draft-js'
import Immutable from 'immutable'

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

const __createCell = (tableKey, colIndex, rowIndex, text = '') => {

  return new ContentBlock({
    key: genKey(),
    type: 'table-cell',
    text: text,
    data: Immutable.Map({ tableKey, colIndex, rowIndex }),
    characterList: Immutable.List(Immutable.Repeat(CharacterMetadata.create(), text.length))
  })

}

const __createRow = (tableKey, rowIndex, rowLength, firstCellText = '') => {

  const cells = Immutable.Range(0, rowLength).map((index) => {
    var cellBlock = __createCell(tableKey, index, rowIndex, index === 0 ? firstCellText : '')
    return [cellBlock.getKey(), cellBlock];
  }).toArray()

  return Immutable.OrderedMap(cells)

}

export const rebuildTable = (tableNode) => {

  const tableKey = genKey()
  const cache = []

  ;[].forEach.call(tableNode.rows, (row, rowIndex) => {

    ;[].forEach.call(row.cells, (cell, cellIndex) => {

      let colIndex = cellIndex
      let tx, ty

      for(; cache[cellIndex] && cache[cellIndex][colIndex]; ++colIndex)

      for (tx = colIndex;tx < colIndex + (cell.colSpan || 1); ++ tx) {
        for (ty = rowIndex; ty < rowIndex + (cell.rowSpan || 1); ++ ty) {
          cache[ty] = cache[ty] || []
          cache[ty][tx] = true
        }
      }

      cell.dataset.tableKey = tableKey
      cell.dataset.colIndex = colIndex
      cell.dataset.rowIndex = rowIndex

    })

  })

}

export const getBlocksFromContentBlocks = (contentBlocks, propName, propValue, operator = '==') => {

  return contentBlocks.filter((block) => {
    return valueComparison(block.getData().get(propName), propValue, operator)
  })

}

// export const getTableColBlocks = (contentBlocks, tableKey, colIndex) => {
//   return getBlocksFromContentBlocks(getBlocksFromContentBlocks(contentBlocks, 'tableKey', tableKey), 'colIndex', colIndex)
// }

// export const getTableRowBlocks = (contentBlocks, tableKey, rowIndex) => {
//   return getBlocksFromContentBlocks(getBlocksFromContentBlocks(contentBlocks, 'tableKey', tableKey), 'rowIndex', rowIndex)
// }

export const getTableBlocks = (contentBlocks, tableKey) => {
  return getBlocksFromContentBlocks(contentBlocks, 'tableKey', tableKey)
}

const __insertRow = (tableBlocks, rowBlocks, rowIndex) => {

  const blocksBefore = getBlocksFromContentBlocks(tableBlocks, 'rowIndex', rowIndex, '<').toSeq()
  const blocksAfter = getBlocksFromContentBlocks(tableBlocks, 'rowIndex', rowIndex, '>=').map((block) => {
    const blockData = block.getData().toJS()
    return block.merge({
      'data': Immutable.Map({
        ...blockData,
        rowIndex: rowIndex * 1 + 1
      })
    })
  }).toSeq()

  return blocksBefore.concat(rowBlocks.toSeq(), blocksAfter)

}

export const insertRow = (editorState, tableKey, index) => {

  const selection = editorState.getSelection()
  const contentState = editorState.getCurrentContent()
  const contentBlocks = contentState.getBlockMap().toSeq()

  const blocksBefore = contentBlocks.takeUntil(block => {
    return block.getData().get('tableKey') === tableKey
  })

  const blocksAfter = contentBlocks.skipUntil((block, key) => {
    const nextBlockKey = contentState.getKeyAfter(key)
    return block.getData().get('tableKey') === tableKey && nextBlockKey && contentState.getBlockForKey(nextBlockKey).getData().get('tableKey') !== tableKey
  })

  const rowBlocks = __createRow(tableKey, index, 3)
  const firstCellKey = rowBlocks.first().getKey()
  const tableBlocks = getTableBlocks(contentBlocks, tableKey)
  const nextTableBlocks = __insertRow(tableBlocks, rowBlocks, index)

  const newContentBlocks = blocksBefore.concat(nextTableBlocks, blocksAfter).toOrderedMap()
  const newConentState = contentState.merge({
    blockMap: newContentBlocks,
    selectionBefore: selection,
    selectionAfter: selection.merge({
      anchorKey: firstCellKey,
      anchorOffset: selection.getStartOffset(),
      focusKey: firstCellKey,
      focusOffset: selection.getStartOffset(),
      isBackward: false
    })
  })

  return EditorState.push(editorState, newConentState, 'insert-table-row')

}