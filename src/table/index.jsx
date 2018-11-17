import './style.scss'
import React from 'react'
import { ContentUtils } from 'braft-utils'
import { handleKeyCommand, handleReturn, handleDroppedFiles, handlePastedFiles, handlePastedText } from './handlers'
import { tableRenderMap } from './render'
import { insertTable } from './utils'
import { tableImportFn, tableExportFn } from './converts'

ContentUtils.registerStrictBlockType('table-cell')

export default (options) => {

  options = {
    ...options
  }

  const { includeEditors, excludeEditors } = options

  return [
    {
      type: 'control',
      includeEditors, excludeEditors,
      control: (props) => ({
        key: 'table',
        replace: 'table',
        type: 'button',
        title: '表格',
        text: <i className="bfi-table"></i>,
        onClick: () => {
          // insertTable(props.editorState)
          props.editor.setValue(insertTable(props.editorState))
        }
      }),
    },
    {
      type: 'prop-interception',
      includeEditors, excludeEditors,
      interceptor: (editorProps) => {
        editorProps.handleKeyCommand = handleKeyCommand(editorProps.handleKeyCommand)
        editorProps.handleReturn = handleReturn(editorProps.handleReturn)
        editorProps.handleDroppedFiles = handleDroppedFiles(editorProps.handleDroppedFiles)
        editorProps.handlePastedFiles = handlePastedFiles(editorProps.handlePastedFiles)
        editorProps.handlePastedText = handlePastedText(editorProps.handlePastedText)
        return editorProps
      }
    }, {
      type: 'block',
      name: 'table-cell',
      includeEditors, excludeEditors,
      renderMap: tableRenderMap,
      importer: tableImportFn,
      exporter: tableExportFn
    }
  ]

}