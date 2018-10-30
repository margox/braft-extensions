import React from 'react'

export const getTabeCell = ({ editorState }) => (props) => {

  const blockKey = props['data-offset-key'].split('-')[0]
  const block = editorState.getCurrentContent().getBlockForKey(blockKey)
  const isHeadCell = block.getData().get('isHead')
  const colSpan = block.getData().get('colSpan')
  const rowSpan = block.getData().get('rowSpan')

  if (isHeadCell) {
    return <th colSpan={colSpan} rowSpan={rowSpan} className="bf-table-cell" {...props} />
  } else {
    return <td colSpan={colSpan} rowSpan={rowSpan} className="bf-table-cell" {...props} />
  }

}

export class Table extends React.Component {

  state = {
    tableRows: []
  }

  render () {

    const tableRows = []
    const { editorState, children } = this.props

    children.forEach((cell) => {

      const cellBlock = editorState.getCurrentContent().getBlockForKey(cell.key)
      const rowIndex = cellBlock.getData().get('rowIndex')
  
      tableRows[rowIndex] ? tableRows[rowIndex].push(cell) : tableRows[rowIndex] = [cell]
  
    })

    return (
      <div className="bf-table-container">
        <table className="bf-table">
          <tbody>
            {tableRows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => cell)}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="bf-table-vertical-tools"></div>
      </div>
    )

  }

}