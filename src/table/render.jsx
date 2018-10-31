import React from 'react'
import Immutable from 'immutable'

export class Table extends React.Component {

  state = {
    tableRows: [],
    colToolHandlers: [],
    rowToolHandlers: [],
    defaultColWidth: 0,
    colResizing: false,
    colResizeOffset: 0,
    activeCellIndex: -1
  }

  tableRef = null
  colRefs = {}
  rowRefs = {}

  colResizeIndex = 0
  colResizeStartAt = 0

  startCellKey = null
  endCellKey = null

  handleToolbarMouseDown = (event) => {
    event.preventDefault()
  }

  handleMouseUp = () => {

    if (this.state.colResizing) {

      const { defaultColWidth, colToolHandlers, colResizeOffset } = this.state
      const nextColToolHandlers = [ ...colToolHandlers ]

      nextColToolHandlers[this.colResizeIndex - 1].width = (nextColToolHandlers[this.colResizeIndex - 1].width || defaultColWidth) + colResizeOffset
      nextColToolHandlers[this.colResizeIndex].width = (nextColToolHandlers[this.colResizeIndex].width || defaultColWidth) - colResizeOffset

      this.colResizeIndex = 0
      this.colResizeStartAt = 0

      this.setState({
        colToolHandlers: nextColToolHandlers,
        colResizeOffset: 0,
        colResizing: false
      })

    }

  }

  handleMouseMove = (event) => {

    if (this.state.colResizing) {
      this.setState({
        colResizeOffset: this.getResizeOffset(event.clientX - this.colResizeStartAt)
      })
    }

  }

  handleColResizerMouseDown = (event) => {

    this.colResizeIndex = event.currentTarget.dataset.index * 1
    this.colResizeStartAt = event.clientX
    this.setState({ colResizing: true })

  }

  handleCellClick = (event) => {

    this.setState({
      activeCellIndex: event.currentTarget.dataset.cellIndex * 1
    }, this.mapPropsToState)

  }

  componentDidMount () {

    this.mapPropsToState(this.props)

    document.body.addEventListener('mousemove', this.handleMouseMove, false)
    document.body.addEventListener('mouseup', this.handleMouseUp, false)

  }

  componentWillReceiveProps (nextProps) {
    this.mapPropsToState(nextProps)
  }

  componentWillUnmount () {

    document.body.removeEventListener('mousemove', this.handleMouseMove, false)
    document.body.removeEventListener('mouseup', this.handleMouseUp, false)

  }

  getResizeOffset (offset) {

    let leftLimit = 0
    let rightLimit = 0

    const { colToolHandlers, defaultColWidth } = this.state

    leftLimit = -1 * ((colToolHandlers[this.colResizeIndex - 1].width || defaultColWidth) - 50)
    rightLimit = (colToolHandlers[this.colResizeIndex].width || defaultColWidth) - 50

    offset = offset < leftLimit ? leftLimit : offset
    offset = offset > rightLimit ? rightLimit : offset

    return offset

  }

  adjustToolbarHandlers () {

    let needUpdate = false
    const rowToolHandlers = [ ...this.state.rowToolHandlers ]

    Object.keys(this.rowRefs).forEach((key, index) => {

      const rowHeight = this.rowRefs[key].getBoundingClientRect().height

      if (rowToolHandlers[index] && rowToolHandlers[index].height !== rowHeight) {
        needUpdate = true
        rowToolHandlers[index].height = rowHeight
      }

    })

    if (needUpdate) {
      this.setState({ rowToolHandlers })
    }

  }

  mapPropsToState (props) {

    props = props || this.props

    let colIndex = 0

    const tableRows = []
    const colToolHandlers = []
    const rowToolHandlers = []

    const { editorState, children } = props

    console.log(editorState.getCurrentContent().getBlockMap())

    this.startCellKey = children[0].key
    this.endCellKey = children[children.length - 1].key

    children.forEach((cell, cellIndex) => {

      const cellBlock = editorState.getCurrentContent().getBlockForKey(cell.key)
      const tableKey = cellBlock.getData().get('tableKey')
      const rowIndex = cellBlock.getData().get('rowIndex') * 1
      const isHead = cellBlock.getData().get('isHead')
      const colSpan = cellBlock.getData().get('colSpan')
      const rowSpan = cellBlock.getData().get('rowSpan')

      if (rowIndex === 0) {

        const colSpan = (cellBlock.getData().get('colSpan') || 1) * 1  

        for (var ii = colIndex;ii < colIndex + colSpan;ii ++) {
          colToolHandlers[colIndex] = {key: cell.key, width: 0}
        }

        colIndex += colSpan

      }

      const newCell = React.cloneElement(cell, {
        'data-active': cellIndex === this.state.activeCellIndex,
        'data-is-head': isHead,
        'data-row-index': rowIndex,
        'data-cell-index': cellIndex,
        'data-table-key': tableKey,
        className: 'bf-table-cell',
        colSpan: colSpan,
        rowSpan: rowSpan,
        onClick: this.handleCellClick
      })

      if (!tableRows[rowIndex]) {
        rowToolHandlers[rowIndex] = {key: cell.key, height: 0}
        tableRows[rowIndex] = [newCell]
      } else {
        tableRows[rowIndex].push(newCell)
      }
  
    })

    const tableWidth = this.tableRef.getBoundingClientRect().width
    const defaultColWidth = tableWidth / colIndex

    this.setState({ tableRows, colToolHandlers, rowToolHandlers, defaultColWidth }, this.adjustToolbarHandlers)

  }

  createColGroup () {

    return (
      <colgroup>
        {this.state.colToolHandlers.map((item, index) => (
          <col ref={ref => this.colRefs[index] = ref} width={item.width || this.state.defaultColWidth} key={index}></col>
        ))}
      </colgroup>
    )

  }

  createColTools () {

    const { colResizing, colResizeOffset, colToolHandlers, defaultColWidth } = this.state

    return (
      <div
        contentEditable={false}
        data-key="bf-col-toolbar"
        className={`bf-table-column-tools${colResizing ? ' resizing' : ''}`}
        onMouseDown={this.handleToolbarMouseDown}
      >
        {colToolHandlers.map((item, index) => (
          <div
            key={index}
            data-key={item.key}
            className="bf-col-tool-handler"
            style={{width: item.width || defaultColWidth}}
          >
            {index !== 0 ? (
              <div
                data-index={index}
                data-key={item.key} 
                className={`bf-col-resizer${colResizing && this.colResizeIndex === index ? ' active' : ''}`}
                style={colResizing && this.colResizeIndex === index ? {transform: `translateX(${colResizeOffset}px)`} : null}
                onMouseDown={this.handleColResizerMouseDown}
              ></div>
            ) : null}
            <div className="bf-col-tool-left">
              <div className="bf-insert-col-before"><i className="bfi-add"></i></div>
            </div>
            <div className="bf-col-tool-right">
              <div className="bf-insert-col-after"><i className="bfi-add"></i></div>
            </div>
          </div>
        ))}
      </div>
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
        <table ref={ref => this.tableRef = ref} className="bf-table">
          {this.createColGroup()}
          <tbody>
            {this.state.tableRows.map((cells, rowIndex) => (
              <tr ref={ref => this.rowRefs[rowIndex] = ref} key={rowIndex}>{cells}</tr>
            ))}
          </tbody>
        </table>
        {this.createColTools()}
        {this.createRowTools()}
      </div>
    )

  }

}

export const getTableCellRenderMap = (props) => {

  return Immutable.Map({
    'table-cell': {
      element: 'td',
      wrapper: <Table editorState={props.editorState}/>
    },
  })

}