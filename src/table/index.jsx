import './style.scss'
import React from 'react'
import Immutable from 'immutable'

// class TableDecorator {

//   constructor (options) {

//     this.options = options || {}

//   }

//   getDecorations (block) {

//     const blockKey = block.getKey()
//     const blockText = block.getText()
//     const decorations = Array(blockText.length).fill(null)

//     if (block.getType() !== 'table') {
//       return Immutable.List(decorations)
//     }



//   }

//   getComponentForKey () {

//     return () => <td />

//   }

//   getPropsForKey () {

//   }

// }

const getTabeCell = (superProps) => (props) => {

  const blockKey = props['data-offset-key'].split('-')[0]
  const block = superProps.editorState.getCurrentContent().getBlockForKey(blockKey)
  const isHeadCell = block.getData().get('isHead')

  if (isHeadCell) {
    return <th className="bf-table-cell" {...props} />
  } else {
    return <td className="bf-table-cell" {...props} />
  }

}

const BraftTable = (props) => {
  return (
    <table className="bf-table">
      <tbody>
        <tr>{props.children}</tr>
      </tbody>
    </table>
  )
}

const getTableCellRenderMap = (props) => {

  return Immutable.Map({
    'table-cell-odd': {
      element: getTabeCell(props),
      wrapper: <BraftTable />
    },
    'table-cell-even': {
      element: getTabeCell(props),
      wrapper: <BraftTable />
    }
  })

}

export default (options) => {

  options = {
    defaultRows: 3,
    defalutColumns: 3,
    ...options
  }

  const { defaultRows, defalutColumns, includeEditors, excludeEditors } = options
  console.log(defaultRows, defalutColumns)

  return [
    {
      type: 'block',
      name: /table-cell(.*)/,
      includeEditors, excludeEditors,
      renderMap: getTableCellRenderMap,
      importer: (nodeName, node) => {

        if (nodeName === 'tr') {
          node.dataset.bfTableRowIndex = Array.from(node.parentNode.children).indexOf(node)
        }

        if (nodeName === 'th' || nodeName === 'td') {

          const parentTrRowIndex = node.parentNode.dataset.bfTableRowIndex

          return {
            type: parentTrRowIndex * 1 % 2 ? 'table-cell-even' : 'table-cell-odd',
            data: {
              isHead: nodeName === 'th'
            }
          }

        }

        return null

      }
    }
  ]

}