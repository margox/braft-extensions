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

export const tableExportFn = () => {

}