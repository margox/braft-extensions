import 'braft-editor/dist/index.css'
import './styles.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor from 'braft-editor'
import Table from '../src/table'

BraftEditor.use(Table())

class Demo extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      editorState: BraftEditor.createEditorState(`
        <table>
          <tr><td>Foo</td><td>Bar</td><td>Baz</td></tr>
          <tr><td>Foo</td><td>Bar</td><td>Baz</td></tr>
          <tr><td>Foo</td><td>Bar</td><td>Baz</td></tr>
          <tr><td>Foo</td><td>Bar</td><td>Baz</td></tr>
          <tr><td>Foo</td><td>Bar</td><td>Baz</td></tr>
        </table>
      `)
    }

  }

  logHTML = () => {
    const blockMap = this.state.editorState.getCurrentContent().getBlockMap()
    // console.log(this.state.editorState.toHTML())
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
            onChange={this.handleChange}
            value={editorState}
            contentStyle={{height: 300}}
          />
        </div>
      </div>
    )

  }

}

ReactDOM.render(<Demo />, document.querySelector('#root'))