import { rebuildTableNode } from './utils'

export const tableImportFn = (nodeName, node) => {

  if (nodeName === 'table') {
    rebuildTableNode(node)
  }

  if (nodeName === 'th' || nodeName === 'td') {

    const tableKey = node.dataset.tableKey
    const colIndex = node.dataset.colIndex * 1
    const rowIndex = node.dataset.rowIndex * 1
    const colSpan = node.colSpan
    const rowSpan = node.rowSpan

    return {
      type: 'table-cell',
      data: {
        tableKey, colIndex, rowIndex, colSpan, rowSpan,
        isHead: nodeName === 'th'
      }
    }

  }

  return null

}

export const tableExportFn = (contentState, block) => {

  if (block.type.toLowerCase() !== 'table-cell') {
    return null
  }

  const previousBlock = contentState.getBlockBefore(block.key)
  const nextBlock = contentState.getBlockAfter(block.key)
  const previousBlockType = previousBlock ? previousBlock.getType() : null
  const previousBlockData = previousBlock ? previousBlock.getData().toJS() : {}
  const nextBlockType = nextBlock ? nextBlock.getType() : null
  const nextBlockData = nextBlock ? nextBlock.getData().toJS() : {}

  let start = ''
  let end = ''

  if (previousBlockType !== 'table-cell') {
    start = `<table><tr><td colSpan="${block.data.colSpan}" rowSpan="${block.data.rowSpan}">`
  } else if (previousBlockData.rowIndex !== block.data.rowIndex) {
    start = `<tr><td colSpan="${block.data.colSpan}" rowSpan="${block.data.rowSpan}">`
  } else {
    start = `<td colSpan="${block.data.colSpan}" rowSpan="${block.data.rowSpan}">`
  }

  if (nextBlockType !== 'table-cell') {
    end = '</td></tr></table>'
  } else if (nextBlockData.rowIndex !== block.data.rowIndex) {
    end = '</td></tr>'
  } else {
    end = '</td>'
  }

  return { start, end }

}