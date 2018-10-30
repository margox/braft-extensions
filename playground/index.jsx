import 'braft-editor/dist/index.css'
import './styles.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor from 'braft-editor'
import { ContentUtils } from 'braft-utils'

// import '../dist/code-highlighter.css'
// import '../dist/color-picker.css'
// import '../dist/emoticon.css'

// import CodeHighlighter from '../src/code-highlighter'
// import ColorPicker from '../src/color-picker'
// import Emoticon from '../src/emoticon'
// import HeaderId from '../src/header-id'

// import 'prismjs/components/prism-java'
// import 'prismjs/components/prism-php'
// import maxLength from '../src/max-length'

import Table from '../src/table'

// BraftEditor.use(CodeHighlighter({
//   syntaxs: [
//     {
//       name: 'JavaScript',
//       syntax: 'javascript'
//     }, {
//       name: 'HTML',
//       syntax: 'html'
//     }, {
//       name: 'CSS',
//       syntax: 'css'
//     }, {
//       name: 'Java',
//       syntax: 'java',
//     }, {
//       name: 'PHP',
//       syntax: 'php'
//     }
//   ]
// }))

// BraftEditor.use(HeaderId())

// BraftEditor.use(ColorPicker({
//   theme: 'light'
// }))

// BraftEditor.use(Emoticon())

BraftEditor.use(Table())

class Demo extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      editorState: BraftEditor.createEditorState('<table><tr><td>Foo</td><td>Bar</td><td>Baz</td></tr><tr><td>Foo</td><td>Bar</td><td>Baz</td></tr></table>')
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
            id="editor-1"
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