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

BraftEditor.use(ColorPicker())

const tableStr = '<p></p><table border="1" style="border-collapse: collapse"><tr><td colSpan="1" rowSpan="1">ST-dstcollector	</td><td colSpan="1" rowSpan="1">80、12200</td></tr><tr><td colSpan="1" rowSpan="1">DST-dstweb		</td><td colSpan="1" rowSpan="1">80、83</td></tr></table><p></p>';
const tableStr2 = '<table border="1" style="border-collapse: collapse"><tr><td colSpan="1" rowSpan="1">ST-dstcollector	</td><td colSpan="1" rowSpan="1">80、12200</td></tr><tr><td colSpan="1" rowSpan="1">DST-dstweb		</td><td colSpan="1" rowSpan="1">80、83</td></tr></table>';

class Demo extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      editorState: BraftEditor.createEditorState(tableStr2)
    }

  }

  logHTML = () => {
    console.log(this.state.editorState.toHTML())
  }

  handleChange = (editorState) => {
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
            placeholder="xxx"
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