import 'braft-editor/dist/index.css'
import './styles.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor from 'braft-editor'

import '../dist/code-highlighter.css'
import '../dist/color-picker.css'

import CodeHighlighter from '../dist/code-highlighter'
import ColorPicker from '../dist/color-picker'

import 'prismjs/components/prism-java'
import 'prismjs/components/prism-php'

BraftEditor.use(CodeHighlighter({
  syntaxs: [
    {
      name: 'JavaScript',
      syntax: 'javascript'
    }, {
      name: 'HTML',
      syntax: 'html'
    }, {
      name: 'CSS',
      syntax: 'css'
    }, {
      name: 'Java',
      syntax: 'java',
    }, {
      name: 'PHP',
      syntax: 'php'
    }
  ]
}))

BraftEditor.use(ColorPicker({
  theme: 'light'
}))

class Demo extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      editorState: BraftEditor.createEditorState(null)
    }

  }

  handleChange = (editorState) => {
    this.setState({ editorState })
  }

  render() {

    const { editorState } = this.state

    return (
      <div>
        <div className="demo-editor" id="demo">
          <BraftEditor onChange={this.handleChange} value={editorState}/>
        </div>
      </div>
    )

  }

}

ReactDOM.render(<Demo />, document.querySelector('#root'))