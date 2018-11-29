import './style.scss'
import React from 'react'
import { ContentUtils } from 'braft-utils'
import { handleKeyCommand, handleReturn, handleDroppedFiles, handlePastedFiles, handlePastedText } from './handlers'
import { getLanguage, tableRenderMap } from './render'
import * as _TableUtils from './utils'
import { tableImportFn, tableExportFn } from './converts'

ContentUtils.registerStrictBlockType('table-cell')

export const TableUtils = _TableUtils

export default (options) => {

  options = {
    defaultColumns: 3,
    defaultRows: 3,
    ...options
  }

  const { includeEditors, excludeEditors, defaultColumns, defaultRows } = options

  return [
    {
      type: 'control',
      includeEditors, excludeEditors,
      control: (props) => {
        return {
          key: 'table',
          replace: 'table',
          type: 'button',
          title: getLanguage(props.editor).insertTable,
          text: <i className="bfi-table"></i>,
          onClick: () => {
            props.editor.setValue(TableUtils.insertTable(props.editorState, defaultColumns, defaultRows))
          }
        }
      },
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