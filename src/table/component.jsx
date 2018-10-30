import React from 'react'

export const getTabeCell = ({ editorState }) => {

  return (props) => {

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

}

export class Table extends React.Component {

  state = {
    tableRows: [],
    colToolHandlers: [],
    rowToolHandlers: []
  }

  rowRefs = {}

  handleToolbarMouseDown = (event) => {
    event.preventDefault()
  }

  componentDidMount () {
    this.mapPropsToState(this.props)
  }

  componentWillReceiveProps (nextProps) {
    this.mapPropsToState(nextProps)
  }

  adjustToolbarHandlers () {

    let needUpdateToolbar = false
    const rowToolHandlers = [ ...this.state.rowToolHandlers ]

    Object.keys(this.rowRefs).forEach((key, index) => {
  
      const rowHeight = this.rowRefs[key].getBoundingClientRect().height

      if (rowToolHandlers[index] && rowToolHandlers[index].height !== rowHeight) {
        needUpdateToolbar = true
        rowToolHandlers[index].height = rowHeight
      }

    })

    if (needUpdateToolbar) {
      this.setState({ rowToolHandlers })
    }

  }

  mapPropsToState (props) {

    const tableRows = []
    const colToolHandlers = []
    const rowToolHandlers = []

    const { editorState, children } = props

    children.forEach((cell) => {

      const cellBlock = editorState.getCurrentContent().getBlockForKey(cell.key)
      const rowIndex = cellBlock.getData().get('rowIndex')

      if (!tableRows[rowIndex]) {
        rowToolHandlers[rowIndex] = {key: cell.key, height: 0}
        tableRows[rowIndex] = [cell]
      } else {
        tableRows[rowIndex].push(cell)
      }
  
    })

    this.setState({ tableRows, colToolHandlers, rowToolHandlers }, this.adjustToolbarHandlers)

  }

  createColRools () {

    return (
      <div onMouseDown={this.handleToolbarMouseDown} contentEditable={false} className="bf-table-column-tools"></div>
    )

  }

  createRowTools () {

    return (
      <div onMouseDown={this.handleToolbarMouseDown} contentEditable={false} className="bf-table-row-tools">
        {this.state.rowToolHandlers.map((item, index) => (
          <div className="bf-row-tool-handler" data-key={item.key} style={{height: item.height}} key={index}>
            <div className="bf-row-tool-up">
              <div className="bf-insert-row-before"><i className="bfi-add"></i></div>
            </div>
            <div className="bf-row-tool-down">
              <div className="bf-insert-row-after"><i className="bfi-add"></i></div>
            </div>
          </div>
        ))}
      </div>
    )

  }

  render () {

    return (
      <div className="bf-table-container">
        <table className="bf-table">
          <tbody>
            {this.state.tableRows.map((cells, rowIndex) => (
              <tr ref={ref => this.rowRefs[rowIndex] = ref} key={rowIndex}>{cells}</tr>
            ))}
          </tbody>
        </table>
        {this.createRowTools()}
        {this.createColRools()}
      </div>
    )

  }

}