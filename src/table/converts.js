import { genKey } from 'draft-js'

export const tableImportFn = (nodeName, node) => {

  if (nodeName === 'table') {

    const tableKey = genKey();

    [].forEach.call(node.querySelectorAll('td, th'), (cellNode) => {
      cellNode.dataset.tableKey = tableKey
    })

  }

  if (nodeName === 'tr') {
    node.dataset.bfTableRowIndex = Array.from(node.parentNode.children).indexOf(node)
  }

  if (nodeName === 'th' || nodeName === 'td') {

    const parentTrRowIndex = node.parentNode.dataset.bfTableRowIndex
    const colSpan = node.getAttribute('colspan')
    const rowSpan = node.getAttribute('rowspan')
    const tableKey = node.dataset.tableKey

    return {
      type: 'table-cell',
      data: {
        rowIndex: parentTrRowIndex,
        isHead: nodeName === 'th',
        colSpan, rowSpan, tableKey
      }
    }

  }

  return null

}

export const tableExportFn = () => {

}