import React from 'react'
import Immutable from 'immutable'
import * as TableUtils from './utils'

const getIndexFromEvent = (event, ignoredTarget = '') => {

  if (!isNaN(event)) {
    return event * 1
  } else if (ignoredTarget && event && event.target && event.target.dataset.role === ignoredTarget) {
    return false
  } else if (event && event.currentTarget && event.currentTarget.dataset.index) {
    return event.currentTarget.dataset.index * 1
  }

  return false

}

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
    selectedColumnIndex: -1,
    setFirstRowAsHead: false
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

    if (event.keyCode === 8) {

      const { selectedColumnIndex, selectedRowIndex } = this.state

      if (selectedColumnIndex > -1) {
        this.removeColumn()
        event.preventDefault()
      } else if (selectedRowIndex > -1) {
        this.removeRow()
        event.preventDefault()
      }

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

    this.setState({
      selectedCells:  ~selectedCells.indexOf(cellKey) ? [] : [cellKey],
      selectedRowIndex: -1,
      selectedColumnIndex: -1,
    }, this.renderCells)

  }

  selectColumn = (event) => {

    const selectedColumnIndex = getIndexFromEvent(event, 'insert-column')

    if (selectedColumnIndex === false) {
      return false
    }

    const selectedCells = [] 

    if (this.state.selectedColumnIndex === selectedColumnIndex) {
      this.setState({
        selectedCells: [],
        selectedColumnIndex: -1
      }, this.renderCells)
      return false
    }

    this.props.children.filter(cell => {
      const cellBlock = this.props.editorState.getCurrentContent().getBlockForKey(cell.key)
      const cellColIndex = cellBlock.getData().get('colIndex')
      if (cellColIndex == selectedColumnIndex) {
        selectedCells.push(cell.key)
      }
    })

    this.setState({ selectedCells, selectedColumnIndex, selectedRowIndex: -1 }, this.renderCells)

  }

  selectRow = (event) => {

    const selectedRowIndex = getIndexFromEvent(event, 'insert-row')

    if (selectedRowIndex === false) {
      return false
    }

    const selectedCells = [] 

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

    this.setState({ selectedCells, selectedRowIndex, selectedColumnIndex: -1 }, this.renderCells)

  }

  insertColumn = (event) => {

    const columnIndex = getIndexFromEvent(event)

    if (columnIndex === false) {
      return false
    }

    this.setState({
      selectedCells: [],
      selectedRowIndex: -1,
      selectedColumnIndex: -1
    }, () => {
      this.props.editor.setValue(TableUtils.insertColumn(this.props.editorState, this.tableKey, this.state.tableRows.length, columnIndex))
    })

  }

  removeColumn = () => {

    const { selectedColumnIndex } = this.state

    if (selectedColumnIndex >= 0) {

      this.setState({
        selectedColumnIndex: -1
      }, () => {
        this.props.editor.draftInstance.blur()
        setImmediate(() => {
          this.props.editor.setValue(TableUtils.removeColumn(this.props.editorState, this.tableKey, selectedColumnIndex))
        })
      })

    }

  }

  insertRow = (event) => {

    const rowIndex = getIndexFromEvent(event)

    if (rowIndex === false) {
      return false
    }

    this.setState({
      selectedCells: [],
      selectedRowIndex: -1,
      selectedColumnIndex: -1
    }, () => {
      this.props.editor.setValue(TableUtils.insertRow(this.props.editorState, this.tableKey, this.colLength, rowIndex))
    })

  }

  removeRow = () => {

    const { selectedRowIndex } = this.state

    if (selectedRowIndex >= 0) {

      this.setState({
        selectedRowIndex: -1
      }, () => {
        this.props.editor.draftInstance.blur()
        setImmediate(() => {
          this.props.editor.setValue(TableUtils.removeRow(this.props.editorState, this.tableKey, selectedRowIndex))
        })
      })

    }

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

    leftLimit = -1 * ((colToolHandlers[this.colResizeIndex - 1].width || defaultColWidth) - 30)
    rightLimit = (colToolHandlers[this.colResizeIndex].width || defaultColWidth) - 30

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
      // const isHead = cellBlockData.get('isHead')
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
        // 'data-is-head': isHead,
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

    const { colResizing, colResizeOffset, colToolHandlers, selectedColumnIndex, defaultColWidth } = this.state

    return (
      <div
        data-active={selectedColumnIndex >= 0}
        contentEditable={false}
        data-key="bf-col-toolbar"
        className={`bf-table-column-tools${colResizing ? ' resizing' : ''}`}
        onMouseDown={this.handleToolbarMouseDown}
      >
        {colToolHandlers.map((item, index) => (
          <div
            key={index}
            data-key={item.key}
            data-index={index}
            data-active={selectedColumnIndex == index}
            className="bf-col-tool-handler"
            style={{width: item.width || defaultColWidth}}
            onClick={this.selectColumn}
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
              <div
                data-index={index}
                data-role="insert-column"
                className="bf-insert-col-before"
                onClick={this.insertColumn}
              >
                <i className="bfi-add"></i>
              </div>
            </div>
            <div className="bf-col-tool-center">
              <div
                data-index={index}
                data-role="remove-col"
                className="bf-remove-col"
                onClick={this.removeColumn}
              >
                <i className="bfi-bin"></i>
              </div>
            </div>
            <div className="bf-col-tool-right">
              <div
                data-index={index + 1}
                data-role="insert-column"
                className="bf-insert-col-after"
                onClick={this.insertColumn}
              >
                <i className="bfi-add"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    )

  }

  createRowTools () {

    const { rowToolHandlers, selectedRowIndex } = this.state

    return (
      <div
        data-active={selectedRowIndex >= 0}
        contentEditable={false}
        className="bf-table-row-tools"
        onMouseDown={this.handleToolbarMouseDown}
      >
        {rowToolHandlers.map((item, index) => (
          <div
            key={index}
            data-key={item.key}
            data-index={index}
            data-active={selectedRowIndex == index}
            className="bf-row-tool-handler"
            style={{height: item.height}}
            onClick={this.selectRow}
          >
            <div className="bf-row-tool-up">
              <div
                data-index={index}
                data-role="insert-row"
                className="bf-insert-row-before"
                onClick={this.insertRow}
              >
                <i className="bfi-add"></i>
              </div>
            </div>
            <div className="bf-row-tool-center">
              <div
                data-index={index}
                data-role="remove-row"
                className="bf-remove-row"
                onClick={this.removeRow}
              >
                <i className="bfi-bin"></i>
              </div>
            </div>
            <div className="bf-row-tool-down">
              <div
                data-index={index + 1}
                data-role="insert-row"
                className="bf-insert-row-after"
                onClick={this.insertRow}
              >
                <i className="bfi-add"></i>
              </div>
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