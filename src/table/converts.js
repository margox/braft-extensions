export const tableImportFn = (nodeName, node) => {

  if (nodeName === 'tr') {
    node.dataset.bfTableRowIndex = Array.from(node.parentNode.children).indexOf(node)
  }

  if (nodeName === 'th' || nodeName === 'td') {

    const parentTrRowIndex = node.parentNode.dataset.bfTableRowIndex
    const colSpan = node.getAttribute('colspan')
    const rowSpan = node.getAttribute('rowspan')

    return {
      type: 'table-cell',
      data: {
        rowIndex: parentTrRowIndex,
        isHead: nodeName === 'th',
        colSpan, rowSpan
      }
    }

  }

  return null

}

export const tableExportFn = () => {

}