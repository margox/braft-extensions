import React from 'react'
import Immutable from 'immutable'
import languages from './languages'
import * as TableUtils from './utils'
import BraftEditor from 'braft-editor'

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

export const getLanguage = (editor) => {
  const lang = editor.editorProps.language

  if (typeof lang === 'function') {
    return lang(languages, 'braft-table')
  } else {
    return languages[lang] || languages['zh']
  }
}

export class Table extends React.Component {

  constructor(props) {
    super(props)
    this.language = getLanguage(props.editor)
  }

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
    setFirstRowAsHead: false,
    dragSelecting: false,
    draggingRectBounding: null,
    cellsMergeable: false,
    cellSplittable: false,
    contextMenuPosition: null
  }

  __tableRef = null
  __colRefs = {}
  __rowRefs = {}

  __colResizeIndex = 0
  __colResizeStartAt = 0

  __startCellKey = null
  __endCellKey = null

  __dragSelecting = false
  __dragSelected = false
  __dragSelectingStartColumnIndex = null
  __dragSelectingStartRowIndex = null
  __dragSelectingEndColumnIndex = null
  __dragSelectingEndRowIndex = null
  __draggingRectBoundingUpdating = false
  __selectedCellsCleared = false

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

  handleMouseUp = (event) => {
    if (event.button !== 0) {
      return false
    }

    if (this.state.colResizing) {
      const { defaultColWidth, colToolHandlers, colResizeOffset } = this.state
      const nextColToolHandlers = [...colToolHandlers]

      nextColToolHandlers[this.__colResizeIndex - 1].width = (nextColToolHandlers[this.__colResizeIndex - 1].width || defaultColWidth) + colResizeOffset
      nextColToolHandlers[this.__colResizeIndex].width = (nextColToolHandlers[this.__colResizeIndex].width || defaultColWidth) - colResizeOffset

      this.__colResizeIndex = 0
      this.__colResizeStartAt = 0

      this.setState({
        contextMenuPosition: null,
        colToolHandlers: nextColToolHandlers,
        colResizeOffset: 0,
        colResizing: false
      }, () => {
        this.renderCells()
        this.updateCellsData({ colgroupData: nextColToolHandlers.map(item => ({ width: item.width })) })
      })
    } else {
      this.setState({
        contextMenuPosition: null
      })
    }
  }

  handleMouseMove = (event) => {
    if (this.state.colResizing) {
      this.setState({
        colResizeOffset: this.getResizeOffset(event.clientX - this.__colResizeStartAt)
      })
    }
  }

  handleColResizerMouseDown = (event) => {
    this.__colResizeIndex = event.currentTarget.dataset.index * 1
    this.__colResizeStartAt = event.clientX
    this.setState({ colResizing: true })
  }

  handleCellContexrMenu = (event) => {
    const { selectedCells } = this.state
    const { cellKey } = event.currentTarget.dataset

    if (!~selectedCells.indexOf(cellKey)) {
      this.selectCell(event)
    }

    const { top: tableTop, left: tableLeft, width: tableWidth } = this.__tableRef.getBoundingClientRect()
    let top = event.clientY - tableTop + 15
    let left = event.clientX - tableLeft + 10

    if (left + 150 > tableWidth) {
      left = tableWidth - 150
    }

    this.setState({
      contextMenuPosition: { top, left }
    })

    event.preventDefault()
  }

  handleContextMenuContextMenu = (event) => {
    event.preventDefault()
  }

  handleCellMouseDown = (event) => {
    if (this.state.colResizing) {
      event.preventDefault()
      event.stopPropagation()
      return false
    }
    this.__dragSelecting = true
    this.__dragSelectingStartColumnIndex = event.currentTarget.dataset.colIndex
    this.__dragSelectingStartRowIndex = event.currentTarget.dataset.rowIndex

    this.__draggingStartPoint = {
      x: event.clientX,
      y: event.clientY
    }

    this.setState({
      dragSelecting: true
    })
  }

  handleCellMouseUp = () => {
    this.__dragSelecting = false
    this.__dragSelected = false
    this.__dragSelectingStartColumnIndex = null
    this.__dragSelectingStartRowIndex = null
    this.__dragSelectingEndColumnIndex = null
    this.__dragSelectingEndRowIndex = null

    this.setState({
      dragSelecting: false,
      draggingRectBounding: null
    })
  }

  handleCellMouseEnter = (event) => {
    if (this.__dragSelecting) {
      this.__dragSelectingEndColumnIndex = event.currentTarget.dataset.colIndex
      this.__dragSelectingEndRowIndex = event.currentTarget.dataset.rowIndex

      if (this.__dragSelectingEndColumnIndex !== this.__dragSelectingStartColumnIndex || this.__dragSelectingEndRowIndex !== this.__dragSelectingStartRowIndex) {
        this.__dragSelected = true
        event.preventDefault()
      } else {
        this.__dragSelected = false
      }

      this.confirmDragSelecting()
    }
  }

  handleTableMouseMove = (event) => {
    if (this.__dragSelecting && this.__dragSelected) {
      this.updateDraggingRectBounding(event)
      event.preventDefault()
    }
  }

  handleTableMouseLeave = (event) => {
    if (this.__dragSelecting && event.currentTarget && event.currentTarget.dataset.role === 'table') {
      this.handleCellMouseUp()
    }

    event.preventDefault()
  }

  confirmDragSelecting = () => {
    if (!this.__dragSelectingStartColumnIndex || !this.__dragSelectingStartRowIndex || !this.__dragSelectingEndColumnIndex || !this.__dragSelectingEndRowIndex) {
      return false
    }

    const { cellKeys: selectedCells, spannedCellBlockKeys } = TableUtils.getCellsInsideRect(
      this.props.editorState, this.tableKey,
      [this.__dragSelectingStartColumnIndex, this.__dragSelectingStartRowIndex],
      [this.__dragSelectingEndColumnIndex, this.__dragSelectingEndRowIndex]
    )

    if (selectedCells.length < 2) {
      return false
    }

    this.setState({
      selectedColumnIndex: -1,
      selectedRowIndex: -1,
      cellsMergeable: spannedCellBlockKeys.length === 0,
      cellSplittable: false,
      selectedCells: selectedCells
    }, this.renderCells)
  }

  updateDraggingRectBounding = (mouseEvent) => {
    if (this.__draggingRectBoundingUpdating || !this.__dragSelecting) {
      return false
    }

    this.__draggingRectBoundingUpdating = true

    const tableBounding = this.__tableRef.getBoundingClientRect()
    const { x: startX, y: startY } = this.__draggingStartPoint
    const { clientX: currentX, clientY: currentY } = mouseEvent

    const draggingRectBounding = {}

    if (currentX <= startX) {
      draggingRectBounding.right = tableBounding.left + tableBounding.width - startX
    } else {
      draggingRectBounding.left = startX - tableBounding.left + 9
    }

    if (currentY <= startY) {
      draggingRectBounding.bottom = tableBounding.top + tableBounding.height - startY
    } else {
      draggingRectBounding.top = startY - tableBounding.top + 9
    }

    draggingRectBounding.width = Math.abs(currentX - startX)
    draggingRectBounding.height = Math.abs(currentY - startY)

    this.setState({ draggingRectBounding }, () => {
      setTimeout(() => {
        this.__draggingRectBoundingUpdating = false
      }, 100)
    })
  }

  selectCell = (event) => {
    const { selectedCells } = this.state
    const { cellKey } = event.currentTarget.dataset
    const { colSpan, rowSpan } = event.currentTarget

    const nextSelectedCells = ~selectedCells.indexOf(cellKey) ? [] : [cellKey]
    const cellSplittable = nextSelectedCells.length && (colSpan > 1 || rowSpan > 1)

    this.setState({
      selectedCells: nextSelectedCells,
      cellSplittable: cellSplittable,
      cellsMergeable: false,
      selectedRowIndex: -1,
      selectedColumnIndex: -1,
    }, this.renderCells)
  }

  selectColumn = (event) => {
    const selectedColumnIndex = getIndexFromEvent(event, 'insert-column')

    if (selectedColumnIndex === false) {
      return false
    }

    if (this.state.selectedColumnIndex === selectedColumnIndex) {

      this.setState({
        selectedCells: [],
        cellsMergeable: false,
        cellSplittable: false,
        selectedColumnIndex: -1
      }, this.renderCells)
      return false

    }

    const { cellKeys: selectedCells, spannedCellBlockKeys } = TableUtils.getCellsInsideRect(
      this.props.editorState, this.tableKey,
      [selectedColumnIndex, 0],
      [selectedColumnIndex, this.state.rowToolHandlers.length - 1]
    )

    this.setState({
      selectedColumnIndex: selectedColumnIndex,
      selectedRowIndex: -1,
      cellSplittable: false,
      cellsMergeable: spannedCellBlockKeys.length === 0,
      selectedCells: selectedCells
    }, this.renderCells)
  }

  selectRow = (event) => {
    const selectedRowIndex = getIndexFromEvent(event, 'insert-row')

    if (selectedRowIndex === false) {
      return false
    }

    if (this.state.selectedRowIndex === selectedRowIndex) {
      this.setState({
        selectedCells: [],
        cellsMergeable: false,
        cellSplittable: false,
        selectedRowIndex: -1
      }, this.renderCells)
      return false
    }

    const { cellKeys: selectedCells, spannedCellBlockKeys } = TableUtils.getCellsInsideRect(
      this.props.editorState, this.tableKey,
      [0, selectedRowIndex],
      [this.state.colToolHandlers.length, selectedRowIndex]
    )

    this.setState({
      selectedColumnIndex: -1,
      selectedRowIndex: selectedRowIndex,
      cellSplittable: false,
      cellsMergeable: spannedCellBlockKeys.length === 0,
      selectedCells: selectedCells
    }, this.renderCells)
  }

  insertColumn = (event) => {
    const columnIndex = getIndexFromEvent(event)

    if (columnIndex === false) {
      return false
    }

    const nextColToolHandlers = this.state.colToolHandlers.map(item => ({ ...item, width: 0 }))
    this.setState({
      selectedCells: [],
      selectedRowIndex: -1,
      selectedColumnIndex: -1,
      colToolHandlers: nextColToolHandlers
    }, () => {
      this.props.editor.setValue(TableUtils.insertColumn(this.props.editorState, this.tableKey, this.state.tableRows.length, columnIndex, nextColToolHandlers))
    })
  }

  removeColumn = () => {
    const { selectedColumnIndex } = this.state
    const nextColToolHandlers = this.state.colToolHandlers.map(item => ({ ...item, width: 0 }))

    if (selectedColumnIndex >= 0) {

      this.setState({
        selectedColumnIndex: -1,
        colToolHandlers: nextColToolHandlers
      }, () => {
        this.props.editor.draftInstance.blur()
        setImmediate(() => {
          const result = TableUtils.removeColumn(this.props.editorState, this.tableKey, selectedColumnIndex, nextColToolHandlers)
          this.props.editor.setValue(this.validateContent(result))
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

  // 校验一下删除行、列之后的内容还有没有，没有的话则创建一个空的editorState，防止后续取不到值报错
  validateContent = (editorState) => {
    const len = editorState.toRAW(true).blocks.length
    return len ? editorState : BraftEditor.createEditorState(null)
  }

  removeRow = () => {
    const { selectedRowIndex } = this.state

    if (selectedRowIndex >= 0) {
      this.setState({
        selectedRowIndex: -1
      }, () => {
        this.props.editor.draftInstance.blur()
        setImmediate(() => {
          const result = TableUtils.removeRow(this.props.editorState, this.tableKey, selectedRowIndex)
          this.props.editor.setValue(this.validateContent(result))
        })
      })
    }
  }

  mergeCells = () => {
    const { selectedCells, cellsMergeable } = this.state

    if (cellsMergeable && selectedCells.length > 1) {
      this.setState({
        selectedCells: [selectedCells[0]],
        cellSplittable: true,
        cellsMergeable: false,
        selectedRowIndex: -1,
        selectedColumnIndex: -1,
      }, () => {
        this.props.editor.setValue(TableUtils.mergeCells(this.props.editorState, this.tableKey, selectedCells))
      })
    }
  }

  splitCell = () => {
    const { selectedCells, cellSplittable } = this.state

    if (cellSplittable && selectedCells.length === 1) {
      this.setState({
        cellSplittable: false,
        cellsMergeable: false,
        selectedRowIndex: -1,
        selectedColumnIndex: -1,
      }, () => {
        this.props.editor.setValue(TableUtils.splitCell(this.props.editorState, this.tableKey, selectedCells[0]))
      })
    }
  }

  removeTable = () => {
    this.props.editor.setValue(TableUtils.removeTable(this.props.editorState, this.tableKey))
  }

  componentDidMount() {
    this.renderCells(this.props)

    document.body.addEventListener('keydown', this.handleKeyDown, false)
    document.body.addEventListener('mousemove', this.handleMouseMove, false)
    document.body.addEventListener('mouseup', this.handleMouseUp, false)
  }

  componentWillReceiveProps(nextProps) {
    this.renderCells(nextProps)
  }

  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.handleKeyDown, false)
    document.body.removeEventListener('mousemove', this.handleMouseMove, false)
    document.body.removeEventListener('mouseup', this.handleMouseUp, false)
  }

  getResizeOffset(offset) {
    let leftLimit = 0
    let rightLimit = 0

    const { colToolHandlers, defaultColWidth } = this.state

    leftLimit = -1 * ((colToolHandlers[this.__colResizeIndex - 1].width || defaultColWidth) - 30)
    rightLimit = (colToolHandlers[this.__colResizeIndex].width || defaultColWidth) - 30

    offset = offset < leftLimit ? leftLimit : offset
    offset = offset > rightLimit ? rightLimit : offset

    return offset
  }

  adjustToolbarHandlers() {
    let needUpdate = false
    const rowToolHandlers = [...this.state.rowToolHandlers]

    Object.keys(this.__rowRefs).forEach((index) => {
      const rowHeight = this.__rowRefs[index] ? this.__rowRefs[index].getBoundingClientRect().height : 40
      if (rowToolHandlers[index] && rowToolHandlers[index].height !== rowHeight) {
        needUpdate = true
        rowToolHandlers[index].height = rowHeight
      }
    })

    if (needUpdate) {
      this.setState({ rowToolHandlers })
    }
  }

  updateCellsData(blockData) {
    this.props.editor.setValue(TableUtils.updateAllTableBlocks(this.props.editorState, this.tableKey, blockData))
  }

  renderCells(props) {
    props = props || this.props
    this.colLength = 0

    const tableRows = []
    const colToolHandlers = []
    const rowToolHandlers = []
    const { editorState, children } = props
    const tableWidth = this.__tableRef.getBoundingClientRect().width

    this.__startCellKey = children[0].key
    this.__endCellKey = children[children.length - 1].key

    children.forEach((cell, cellIndex) => {
      const cellBlock = editorState.getCurrentContent().getBlockForKey(cell.key)
      const cellBlockData = cellBlock.getData()
      const tableKey = cellBlockData.get('tableKey')
      const colIndex = cellBlockData.get('colIndex') * 1
      const rowIndex = cellBlockData.get('rowIndex') * 1
      const colSpan = cellBlockData.get('colSpan')
      const rowSpan = cellBlockData.get('rowSpan')

      this.tableKey = tableKey
      if (rowIndex === 0) {
        const colgroupData = cellBlockData.get('colgroupData') || []
        const totalColgroupWidth = colgroupData.reduce((width, col) => width + col.width * 1, 0)
        const colSpan = (cellBlockData.get('colSpan') || 1) * 1
        for (var ii = this.colLength; ii < this.colLength + colSpan; ii++) {
          colToolHandlers[ii] = {
            key: cell.key,
            width:
              this.state.colToolHandlers[ii] ?
                this.state.colToolHandlers[ii].width :
                colgroupData[ii] ? colgroupData[ii].width / totalColgroupWidth * tableWidth * 1 : 0
          }
        }

        this.colLength += colSpan
      }

      const newCell = React.cloneElement(cell, {
        'data-active': !!~this.state.selectedCells.indexOf(cell.key),
        'data-row-index': rowIndex,
        'data-col-index': colIndex || (tableRows[rowIndex] || []).length,
        'data-cell-index': cellIndex,
        'data-cell-key': cell.key,
        'data-table-key': tableKey,
        className: `bf-table-cell ${cell.props.className}`,
        colSpan: colSpan,
        rowSpan: rowSpan,
        onClick: this.selectCell,
        onContextMenu: this.handleCellContexrMenu,
        onMouseDown: this.handleCellMouseDown,
        onMouseUp: this.handleCellMouseUp,
        onMouseEnter: this.handleCellMouseEnter
      })

      for (var jj = rowIndex; jj < rowIndex + rowSpan; jj++) {
        rowToolHandlers[jj] = { key: cell.key, height: 0 }
        tableRows[jj] = tableRows[jj] || []
      }

      if (!tableRows[rowIndex]) {
        tableRows[rowIndex] = [newCell]
      } else {
        tableRows[rowIndex].push(newCell)
      }
    })

    const defaultColWidth = tableWidth / this.colLength
    this.setState({ tableRows, colToolHandlers, rowToolHandlers, defaultColWidth }, this.adjustToolbarHandlers)
  }

  createColGroup() {
    return (
      <colgroup>
        {this.state.colToolHandlers.map((item, index) => (
          <col ref={ref => this.__colRefs[index] = ref} width={item.width || this.state.defaultColWidth} key={index}></col>
        ))}
      </colgroup>
    )
  }

  createColTools() {
    const { colResizing, colResizeOffset, colToolHandlers, selectedColumnIndex, defaultColWidth } = this.state

    return (
      <div
        data-active={selectedColumnIndex >= 0}
        contentEditable={false}
        data-key="bf-col-toolbar"
        className={`bf-table-col-tools${colResizing ? ' resizing' : ''}`}
        onMouseDown={this.handleToolbarMouseDown}
      >
        {colToolHandlers.map((item, index) => (
          <div
            key={index}
            data-key={item.key}
            data-index={index}
            data-active={selectedColumnIndex == index}
            className="bf-col-tool-handler"
            style={{ width: item.width || defaultColWidth }}
            onClick={this.selectColumn}
          >
            {this.props.columnResizable && index !== 0 ? (
              <div
                data-index={index}
                data-key={item.key}
                className={`bf-col-resizer${colResizing && this.__colResizeIndex === index ? ' active' : ''}`}
                style={colResizing && this.__colResizeIndex === index ? { transform: `translateX(${colResizeOffset}px)` } : null}
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

  createRowTools() {
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
            style={{ height: item.height }}
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

  createContextMenu() {
    const { cellsMergeable, cellSplittable, contextMenuPosition } = this.state

    if (!contextMenuPosition) {
      return null
    }

    return (
      <div className="bf-table-context-menu" onContextMenu={this.handleContextMenuContextMenu} contentEditable={false} style={contextMenuPosition}>
        <div className="context-menu-item" onMouseDown={this.mergeCells} data-disabled={!cellsMergeable}>{this.language.mergeCells}</div>
        <div className="context-menu-item" onMouseDown={this.splitCell} data-disabled={!cellSplittable}>{this.language.splitCell}</div>
        <div className="context-menu-item" onMouseDown={this.removeTable}>{this.language.removeTable}</div>
      </div>
    )
  }

  render() {
    const { tableRows, dragSelecting, draggingRectBounding } = this.state
    const { readOnly } = this.props.editor.props

    return (
      <div className="bf-table-container">
        <table
          data-role="table"
          className={`bf-table${dragSelecting ? ' dragging' : ''}`}
          ref={ref => this.__tableRef = ref}
          onMouseDown={this.handleTableMouseDown}
          onMouseUp={this.hanldeTableMouseUp}
          onMouseMove={this.handleTableMouseMove}
          onMouseLeave={this.handleTableMouseLeave}
        >
          {this.createColGroup()}
          <tbody>
            {tableRows.map((cells, rowIndex) => (
              <tr ref={ref => this.__rowRefs[rowIndex] = ref} key={rowIndex}>{cells}</tr>
            ))}
          </tbody>
        </table>
        {dragSelecting ? <div className="dragging-rect" style={draggingRectBounding} /> : null}
        {!readOnly && this.createContextMenu()}
        {!readOnly && this.createColTools()}
        {!readOnly && this.createRowTools()}
      </div>
    )

  }
}

export const tableRenderMap = (options) => (props) => {
  return Immutable.Map({
    'table-cell': {
      element: 'td',
      wrapper: <Table columnResizable={options.columnResizable} editor={props.editor} editorState={props.editorState} />
    },
  })
}