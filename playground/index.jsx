import 'braft-editor/dist/index.css'
import './styles.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor from 'braft-editor'
import Table from '../src/table'
import ColorPicker from '../src/color-picker'
import Markdown from '../src/markdown'

BraftEditor.use(Table({
  defaultColumns: 4,
  defaultRows: 5,
  withDropdown: true,
  exportAttrString: 'border="1" style="border-collapse: collapse"'
}))

BraftEditor.use(Markdown())

// const data = '{"blocks":[{"key":"fsbqp","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"3kash","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1p6j3","text":"","type":"table-cell","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"tableKey":"bu0be","colIndex":0,"rowIndex":0,"colSpan":1,"rowSpan":1}},{"key":"r4mi","text":"","type":"table-cell","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"tableKey":"bu0be","colIndex":1,"rowIndex":0,"colSpan":1,"rowSpan":1}},{"key":"7mlm","text":"","type":"table-cell","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"tableKey":"bu0be","colIndex":2,"rowIndex":0,"colSpan":1,"rowSpan":1}},{"key":"5bpms","text":"","type":"table-cell","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"tableKey":"bu0be","colIndex":3,"rowIndex":0,"colSpan":1,"rowSpan":1}},{"key":"evodm","text":"","type":"table-cell","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"tableKey":"bu0be","colIndex":0,"rowIndex":1,"colSpan":1,"rowSpan":1}},{"key":"4uiao","text":"","type":"table-cell","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"tableKey":"bu0be","colIndex":1,"rowIndex":1,"colSpan":1,"rowSpan":1}},{"key":"65fv3","text":"","type":"table-cell","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"tableKey":"bu0be","colIndex":2,"rowIndex":1,"colSpan":1,"rowSpan":1}},{"key":"49aag","text":"","type":"table-cell","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"tableKey":"bu0be","colIndex":3,"rowIndex":1,"colSpan":1,"rowSpan":1}},{"key":"c9a5p","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}'

BraftEditor.use(ColorPicker())

class Demo extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      editorState: BraftEditor.createEditorState(null)
    }

  }

  logHTML = () => {
    console.log(this.state.editorState.toHTML())
  }

  handleChange = (editorState) => {
    console.log(editorState.toRAW());
    this.setState({ editorState })
  }

  render() {

    const { editorState } = this.state

    return (
      <div>
        <div className="demo-editor" id="demo">
          <BraftEditor
            extendControls={[{
              key: 'log-html',
              type: 'button',
              text: 'Log HTML',
              onClick: this.logHTML
            }]}
            onChange={this.handleChange}
            value={editorState}
            contentStyle={{height: 700}}
          />
        </div>
      </div>
    )

  }

}

ReactDOM.render(<Demo />, document.querySelector('#root'))