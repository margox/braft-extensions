import './style.scss'
import { handleKeyCommand, handleReturn } from './handlers'
import { getTableCellRenderMap } from './render'
import { tableImportFn, tableExportFn } from './converts'

export default (options) => {

  options = {
    ...options
  }

  const { includeEditors, excludeEditors } = options

  return [
    {
      type: 'prop-interception',
      includeEditors, excludeEditors,
      interceptor: (editorProps) => {
        editorProps.handleKeyCommand = handleKeyCommand
        editorProps.handleReturn = handleReturn
        return editorProps
      }
    }, {
      type: 'block',
      name: 'table-cell',
      includeEditors, excludeEditors,
      renderMap: getTableCellRenderMap,
      importer: tableImportFn,
      exporter: tableExportFn
    }
  ]

}