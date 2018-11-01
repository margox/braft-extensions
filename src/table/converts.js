import { genKey } from 'draft-js'
import { rebuildTable } from './utils'

export const tableImportFn = (nodeName, node) => {

  if (nodeName === 'table') {
    rebuildTable(node)
  }

  if (nodeName === 'th' || nodeName === 'td') {

    const tableKey = node.dataset.tableKey
    const colIndex = node.dataset.colIndex * 1
    const rowIndex = node.dataset.rowIndex * 1
    const colSpan = node.getAttribute('colspan')
    const rowSpan = node.getAttribute('rowspan')

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