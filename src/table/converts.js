import { rebuildTableNode } from './utils'

const parseColgoupData = (colgroupNode) => {
  if (!colgroupNode) {
    return []
  }

  return Array.prototype.map.call(colgroupNode.querySelectorAll('col'), colNode => {
    return {
      width: colNode.width ? colNode.width * 1 : 0
    }
  })
}

const buildColgroup = (blockData) => {
  if (blockData && blockData.colgroupData && blockData.colgroupData.length) {
    return `<colgroup>${blockData.colgroupData.map(col => `<col width="${col.width}"></col>`).join('')}</colgroup>`
  }

  return ''
}

let tableColgroupData = []

export const tableImportFn = (nodeName, node) => {
  if (nodeName !== 'body' && node && node.querySelector && node.querySelector(':scope > table')) {
    node.parentNode.insertBefore(node.querySelector(':scope > table'), node.nextSibling)
  }

  if (nodeName === 'table') {
    tableColgroupData = parseColgoupData(node.querySelector('colgroup'))
    rebuildTableNode(node)
  }

  if (nodeName === 'th' || nodeName === 'td') {
    const tableKey = node.dataset.tableKey
    const colIndex = node.dataset.colIndex * 1
    const rowIndex = node.dataset.rowIndex * 1
    const colSpan = node.colSpan
    const rowSpan = node.rowSpan

    const cellData = { tableKey, colIndex, rowIndex, colSpan, rowSpan, colgroupData: tableColgroupData }
    cellData.isHead = nodeName === 'th'

    if (node.style && node.style.textAlign) {
      cellData.textAlign = node.style.textAlign
    } else if (node.align) {
      cellData.textAlign = node.align
    }

    return {
      type: 'table-cell',
      data: cellData
    }

  }

  return null

}

export const tableExportFn = (exportAttrString) => (contentState, block) => {

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
  let blockStyle = ''

  if (block.data.textAlign) {
    blockStyle += ` style="text-align:${block.data.textAlign};"`
  }

  if (previousBlockType !== 'table-cell') {
    start = `<table ${exportAttrString}>${buildColgroup(block.data)}<tr><td${blockStyle} colSpan="${block.data.colSpan}" rowSpan="${block.data.rowSpan}">`
  } else if (previousBlockData.rowIndex !== block.data.rowIndex) {
    start = `<tr><td${blockStyle} colSpan="${block.data.colSpan}" rowSpan="${block.data.rowSpan}">`
  } else {
    start = `<td${blockStyle} colSpan="${block.data.colSpan}" rowSpan="${block.data.rowSpan}">`
  }

  if (nextBlockType !== 'table-cell') {
    end = '</td></tr></table>'
  } else if (nextBlockData.rowIndex !== block.data.rowIndex) {
    end = '</td></tr>'
  } else {
    end = '</td>'
  }

  if (!previousBlockType) {
    start = '<p></p>' + start
  }

  if (!nextBlockType) {
    end += '<p></p>'
  }

  return { start, end }

}
