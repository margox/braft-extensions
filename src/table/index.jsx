import './style.scss'
import { ContentUtils } from 'braft-utils'
import { handleKeyCommand, handleReturn, handleDroppedFiles, handlePastedFiles, handlePastedText, handleChangeBlockType } from './handlers'
import { tableRenderMap } from './render'
import { tableImportFn, tableExportFn } from './converts'

ContentUtils.registerStrictBlockType('table-cell')

export default (options) => {

  options = {
    ...options
  }

  const { includeEditors, excludeEditors } = options

  return [
    {
      type: 'prop-interception',
      includeEditors, excludeEditors,
      interceptor: (editorProps, editor) => {
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