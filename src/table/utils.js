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

const updateRowSpanedCells = (tableBlocks, rowIndex, operator = 'increase') => {

  return tableBlocks.map((block) => {

    const blockData = block.getData().toJS()
    const { rowIndex: blockRowIndex, rowSpan: blockRowSpan } = blockData

    if (blockRowIndex > rowIndex) {
      return block
    } else {

      const needUpdate = blockRowSpan && blockRowIndex + blockRowSpan > rowIndex + 1
      const newRowSpan = needUpdate ? (operator === 'increase' ? blockRowSpan * 1 + 1 : blockRowSpan * 1 - 1) : blockRowSpan

      return block.merge({
        'data': Immutable.Map({
          ...blockData, rowSpan: newRowSpan
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

const filterBlocks = (contentBlocks, propName, propValue, operator = '==') => {

  return contentBlocks.filter((block) => {
    return valueComparison(block.getData().get(propName), propValue, operator)
  })

}

const rebuilTableBlocks = (tableBlocks) => {

  const skipedCells = {}
  const cellCountOfRow = []

  tableBlocks.map(block => {

    const blockData = block.getData()
    const rowIndex = blockData.get('rowIndex')
    const colSpan = blockData.get('colSpan') || 1
    const rowSpan = blockData.get('rowSpan') || 1

    cellCountOfRow[rowIndex] = cellCountOfRow[rowIndex] || 0
    cellCountOfRow[rowIndex] ++

    const cellIndex = cellCountOfRow[rowIndex] - 1

    let colIndex = cellIndex
    let xx, yy

    for (;skipedCells[rowIndex] && skipedCells[rowIndex][colIndex]; colIndex++) {}

    if (rowSpan > 1 || colSpan > 1) {

      for (xx = rowIndex;xx < rowIndex + rowSpan;xx ++) {
        for (yy = colIndex;yy < colIndex + colSpan;yy ++) {
          skipedCells[xx] = skipedCells[xx] || {}
          skipedCells[xx][yy] = true
        }
      }

    }

    return block.merge({
      'data': Immutable.Map({
        ...blockData.toJS(),
        colIndex: colIndex
      })
    })

  })

}

export const rebuildTableNode = (tableNode) => {

  const tableKey = genKey()
  const skipedCells = {};

  [].forEach.call(tableNode.rows, (row, rowIndex) => {

    [].forEach.call(row.cells, (cell, cellIndex) => {

      let colIndex = cellIndex
      let xx, yy

      for (;skipedCells[rowIndex] && skipedCells[rowIndex][colIndex]; colIndex++) {}

      const { rowSpan, colSpan } = cell

      if (rowSpan > 1 || colSpan > 1) {

        for (xx = rowIndex;xx < rowIndex + rowSpan;xx ++) {
          for (yy = colIndex;yy < colIndex + colSpan;yy ++) {
            skipedCells[xx] = skipedCells[xx] || {}
            skipedCells[xx][yy] = true
          }
        }

      }

      cell.dataset.tableKey = tableKey
      cell.dataset.colIndex = colIndex
      cell.dataset.rowIndex = rowIndex

    })

  })

}


export const getCellCountForInsert = (tableBlocks, rowIndex) => {

  return filterBlocks(tableBlocks, 'rowIndex', rowIndex).reduce((count, block) => {
    return count + (block.getData().get('colSpan') || 1) * 1
  }, 0)

}

export const insertColumn = (editorState, tableKey, colIndex) => {

  const contentState = editorState.getCurrentContent()
  const contentBlocks = contentState.getBlockMap().toSeq()

  const tableBlocks = filterBlocks(contentBlocks, 'tableKey', tableKey)
  const blocksBefore = filterBlocks(tableBlocks, 'colIndex', colIndex, '<').toSeq()
  const blocksAfter = filterBlocks(tableBlocks, 'colIndex', colIndex, '>=').toSeq()

}

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

  const nextColLength = getCellCountForInsert(tableBlocks, rowIndex)
  const rowBlocks = createRowBlocks(tableKey, rowIndex, nextColLength || counts)
  const focusCellKey = rowBlocks.first().getKey()

  const nextTableBlocks = updateRowSpanedCells(blocksBefore.concat(rowBlocks.toSeq(), blocksAfter), rowIndex - 1)
  const nextContentState = updateTableBlocks(contentState, editorState.getSelection(), focusCellKey, nextTableBlocks, tableKey)

  return EditorState.push(editorState, nextContentState, 'insert-table-row')

}

export const removeRow = (editorState, tableKey, rowIndex) => {

  const contentState = editorState.getCurrentContent()
  const contentBlocks = contentState.getBlockMap().toSeq()

  const tableBlocks = filterBlocks(contentBlocks, 'tableKey', tableKey)
  const blocksBefore = filterBlocks(tableBlocks, 'rowIndex', rowIndex, '<').toSeq()
  const blocksAfter = filterBlocks(tableBlocks, 'rowIndex', rowIndex, '>').map((block) => {

    const blockData = block.getData().toJS()

    return block.merge({
      'data': Immutable.Map({
        ...blockData,
        rowIndex: blockData.rowIndex * 1 - 1
      })
    })

  }).toSeq()

  const focusCellKey = (blocksAfter.first() || blocksBefore.last()).getKey()
  const nextTableBlocks = updateRowSpanedCells(blocksBefore.concat(blocksAfter), rowIndex - 1, 'decrease')
  const nextContentState = updateTableBlocks(contentState, editorState.getSelection(), focusCellKey, nextTableBlocks, tableKey)

  return EditorState.push(editorState, nextContentState, 'insert-table-row')

}