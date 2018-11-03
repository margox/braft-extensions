import React from 'react'
import Immutable from 'immutable'
import * as TableUtils from './utils'

export class Table extends React.Component {

  state = {
    tableRows: [],
    colToolHandlers: [],
    rowToolHandlers: [],
    defaultColWidth: 0,
    colResizing: false,
    colResizeOffset: 0,
    selectedCells: [],
    selectedRowIndex: -1,
    selectedColumnIndex: -1
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

  handleKeyDown = (event) => {

    const { selectedRowIndex } = this.state

    if (selectedRowIndex >= 0 && event.keyCode === 8) {

      this.setState({
        selectedRowIndex: -1
      }, () => {
        this.props.editor.setValue(TableUtils.removeRow(this.props.editorState, this.tableKey, selectedRowIndex))
      })

      event.preventDefault()

    }

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

  selectCell = (event) => {

    const { selectedCells } = this.state
    const { cellKey } = event.currentTarget.dataset

    let newSelectedCells = []

    if (event.getModifierState('Shift')) {
      newSelectedCells = ~selectedCells.indexOf(cellKey) ? selectedCells.filter(item => item !== cellKey) : [ ...selectedCells ,cellKey ]
    } else {
      newSelectedCells = ~selectedCells.indexOf(cellKey) ? [] : [cellKey]
    }

    this.setState({
      selectedCells: newSelectedCells,
      selectedRowIndex: -1,
      selectedColumnIndex: -1,
    }, this.renderCells)

  }

  selectRow = (event) => {

    if (event.target.dataset.role === 'insert-row') {
      return false
    }

    const selectedCells = [] 
    const selectedRowIndex = event.currentTarget.dataset.index * 1

    if (this.state.selectedRowIndex === selectedRowIndex) {
      this.setState({
        selectedCells: [],
        selectedRowIndex: -1
      }, this.renderCells)
      return false
    }

    this.props.children.filter(cell => {
      const cellBlock = this.props.editorState.getCurrentContent().getBlockForKey(cell.key)
      const cellRowIndex = cellBlock.getData().get('rowIndex')
      if (cellRowIndex == selectedRowIndex) {
        selectedCells.push(cell.key)
      }
    })

    this.setState({ selectedCells, selectedRowIndex, selectedColumnIndex: null }, this.renderCells)

  }

  insertRow = (event) => {

    const rowIndex = event.currentTarget.dataset.index * 1

    this.setState({
      selectedCells: [],
      selectedRowIndex: null,
      selectedColumnIndex: null
    }, () => {
      this.props.editor.setValue(TableUtils.insertRow(this.props.editorState, this.tableKey, this.colLength, rowIndex))
    })

  }

  componentDidMount () {

    this.renderCells(this.props)

    document.body.addEventListener('keydown', this.handleKeyDown, false)
    document.body.addEventListener('mousemove', this.handleMouseMove, false)
    document.body.addEventListener('mouseup', this.handleMouseUp, false)

  }

  componentWillReceiveProps (nextProps) {
    this.renderCells(nextProps)
  }

  componentWillUnmount () {

    document.body.removeEventListener('keydown', this.handleKeyDown, false)
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

    Object.keys(this.rowRefs).forEach((index) => {

      const rowHeight = this.rowRefs[index] ? this.rowRefs[index].getBoundingClientRect().height : 40

      if (rowToolHandlers[index] && rowToolHandlers[index].height !== rowHeight) {
        needUpdate = true
        rowToolHandlers[index].height = rowHeight
      }

    })

    if (needUpdate) {
      this.setState({ rowToolHandlers })
    }

  }

  renderCells (props) {

    props = props || this.props

    this.colLength = 0

    const tableRows = []
    const colToolHandlers = []
    const rowToolHandlers = []

    const { editorState, children } = props

    this.startCellKey = children[0].key
    this.endCellKey = children[children.length - 1].key

    children.forEach((cell, cellIndex) => {

      const cellBlock = editorState.getCurrentContent().getBlockForKey(cell.key)
      const cellBlockData = cellBlock.getData()
      const tableKey = cellBlockData.get('tableKey')
      const colIndex = cellBlockData.get('colIndex') * 1
      const rowIndex = cellBlockData.get('rowIndex') * 1
      const isHead = cellBlockData.get('isHead')
      const colSpan = cellBlockData.get('colSpan')
      const rowSpan = cellBlockData.get('rowSpan')

      this.tableKey = tableKey

      if (rowIndex === 0) {

        const colSpan = (cellBlockData.get('colSpan') || 1) * 1  

        for (var ii = this.colLength;ii < this.colLength + colSpan;ii ++) {
          colToolHandlers[this.colLength] = {key: cell.key, width: 0}
        }

        this.colLength += colSpan

      }

      const newCell = React.cloneElement(cell, {
        'data-active': !!~this.state.selectedCells.indexOf(cell.key),
        'data-is-head': isHead,
        'data-row-index': rowIndex,
        'data-col-index': colIndex || (tableRows[rowIndex] || []).length,
        'data-cell-index': cellIndex,
        'data-cell-key': cell.key,
        'data-table-key': tableKey,
        className: `bf-table-cell ${cell.props.className}`,
        colSpan: colSpan,
        rowSpan: rowSpan,
        onClick: this.selectCell
      })

      if (!tableRows[rowIndex]) {
        rowToolHandlers[rowIndex] = {key: cell.key, height: 0}
        tableRows[rowIndex] = [newCell]
      } else {
        tableRows[rowIndex].push(newCell)
      }

    })

    const tableWidth = this.tableRef.getBoundingClientRect().width
    const defaultColWidth = tableWidth / this.colLength

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

    const { rowToolHandlers, selectedRowIndex } = this.state

    return (
      <div className="bf-table-row-tools" onMouseDown={this.handleToolbarMouseDown} data-active={selectedRowIndex >= 0} contentEditable={false}>
        {rowToolHandlers.map((item, index) => (
          <div className="bf-row-tool-handler" data-active={selectedRowIndex == index} data-index={index} onClick={this.selectRow} data-key={item.key} style={{height: item.height}} key={index}>
            <div className="bf-row-tool-up">
              <div className="bf-insert-row-before" data-role="insert-row" data-index={index} onClick={this.insertRow}><i className="bfi-add"></i></div>
            </div>
            <div className="bf-row-tool-center">
              <div className="bf-remove-row" data-role="remove-row" data-index={index} onClick={this.removeRow}><i className="bfi-bin"></i></div>
            </div>
            <div className="bf-row-tool-down">
              <div className="bf-insert-row-after" data-role="insert-row" data-index={index + 1} onClick={this.insertRow}><i className="bfi-add"></i></div>
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
      wrapper: <Table editor={props.editor} editorState={props.editorState}/>
    },
  })

}