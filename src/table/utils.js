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

const createCellBlock = (tableKey, colIndex, rowIndex, text = '') => {

  return new ContentBlock({
    key: genKey(),
    type: 'table-cell',
    text: text,
    data: Immutable.Map({ tableKey, colIndex, rowIndex, colSpan: 1, rowSpan: 1 }),
    characterList: Immutable.List(Immutable.Repeat(CharacterMetadata.create(), text.length))
  })

}

const createRowBlocks = (tableKey, rowIndex, rowLength, firstCellText = '') => {

  const cells = Immutable.Range(0, rowLength).map((index) => {
    var cellBlock = createCellBlock(tableKey, index, rowIndex, index === 0 ? firstCellText : '')
    return [cellBlock.getKey(), cellBlock]
  }).toArray()

  return Immutable.OrderedMap(cells)

}

const updateRowSpanedCells = (tableBlocks, rowIndex) => {

  return tableBlocks.map((block) => {

    const blockData = block.getData()
    const blockRowIndex = blockData.get('rowIndex')
    const blockRowSpan = blockData.get('rowSpan') || 1

    if (blockRowIndex > rowIndex) {
      return block
    } else {

      const needUpdate = blockRowSpan && blockRowIndex + blockRowSpan > rowIndex + 1

      return block.merge({
        'data': Immutable.Map({
          ...blockData.toJS(),
          rowSpan: needUpdate ? blockRowSpan * 1 + 1 : blockRowSpan
        })
      })

    }

  })

}

const updateTableBlocks = (contentState, selection, focusKey, tableBlocks, tableKey) => {

  const contentBlocks = contentState.getBlockMap().toSeq()

  const blocksBefore = contentBlocks.takeUntil(block => {
    return block.getData().get('tableKey') === tableKey
  })

  const blocksAfter = contentBlocks.skipUntil((block, key) => {
    const nextBlockKey = contentState.getKeyAfter(key)
    return block.getData().get('tableKey') === tableKey && nextBlockKey && contentState.getBlockForKey(nextBlockKey).getData().get('tableKey') !== tableKey
  })

  return contentState.merge({
    blockMap: blocksBefore.concat(tableBlocks, blocksAfter).toOrderedMap(),
    selectionBefore: selection,
    selectionAfter: selection.merge({
      anchorKey: focusKey,
      anchorOffset: selection.getStartOffset(),
      focusKey: focusKey,
      focusOffset: selection.getStartOffset(),
      isBackward: false
    })
  })

}

export const rebuildTable = (tableNode) => {

  const tableKey = genKey()
  const cache = [];

  [].forEach.call(tableNode.rows, (row, rowIndex) => {

    [].forEach.call(row.cells, (cell, cellIndex) => {

      let colIndex = cellIndex
      let tx, ty

      for(;cache[cellIndex] && cache[cellIndex][colIndex];++colIndex) {
        for (tx = colIndex;tx < colIndex + (cell.colSpan || 1); ++ tx) {
          for (ty = rowIndex; ty < rowIndex + (cell.rowSpan || 1); ++ ty) {
            cache[ty] = cache[ty] || []
            cache[ty][tx] = true
          }
        }
      }

      cell.dataset.tableKey = tableKey
      cell.dataset.colIndex = colIndex
      cell.dataset.rowIndex = rowIndex

    })

  })

}

export const filterBlocks = (contentBlocks, propName, propValue, operator = '==') => {

  return contentBlocks.filter((block) => {
    return valueComparison(block.getData().get(propName), propValue, operator)
  })

}

// export const insertColumn = (editorState, tableKey, colIndex) => {
//   // ...
// }

export const insertRow = (editorState, tableKey, counts, rowIndex) => {

  const contentState = editorState.getCurrentContent()
  const contentBlocks = contentState.getBlockMap().toSeq()

  const tableBlocks = filterBlocks(contentBlocks, 'tableKey', tableKey)
  const blocksBefore = filterBlocks(tableBlocks, 'rowIndex', rowIndex, '<').toSeq()
  const blocksAfter = filterBlocks(tableBlocks, 'rowIndex', rowIndex, '>=').map((block) => {

    const blockData = block.getData().toJS()

    return block.merge({
      'data': Immutable.Map({
        ...blockData,
        rowIndex: blockData.rowIndex * 1 + 1
      })
    })

  }).toSeq()

  const nextColLength = filterBlocks(tableBlocks, 'rowIndex', rowIndex).count()
  const rowBlocks = createRowBlocks(tableKey, rowIndex, nextColLength || counts)
  const firstCellKey = rowBlocks.first().getKey()

  const nextTableBlocks = updateRowSpanedCells(blocksBefore.concat(rowBlocks.toSeq(), blocksAfter), rowIndex - 1)
  const nextContentState = updateTableBlocks(contentState, editorState.getSelection(), firstCellKey, nextTableBlocks, tableKey)

  return EditorState.push(editorState, nextContentState, 'insert-table-row')

}