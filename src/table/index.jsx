import './style.scss'
import React from 'react'
import Immutable from 'immutable'
import { handleKeyCommand } from './handlers'
import { getTabeCell, Table } from './component'

const getTableCellRenderMap = (props) => {

  return Immutable.Map({
    'table-cell': {
      element: getTabeCell(props),
      wrapper: <Table editorState={props.editorState}/>
    },
  })

}

export default (options) => {

  options = {
    ...options
  }

  const { defaultRows, defalutColumns, includeEditors, excludeEditors } = options

  return [
    {
      type: 'prop-interception',
      includeEditors, excludeEditors,
      interceptor: (editorProps) => {
        editorProps.handleKeyCommand = handleKeyCommand
        return editorProps
      }
    }, {
      type: 'block',
      name: /table-cell/,
      includeEditors, excludeEditors,
      renderMap: getTableCellRenderMap,
      importer: (nodeName, node) => {

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
    }
  ]

}