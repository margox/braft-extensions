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
        <p></p>
        <table>
          <tr><th>1</th><th>2</th><th>3</th><th>4</th></tr>
          <tr><td>5</td><td colspan="2" rowspan="2">6</td><td>7</td></tr>
          <tr><td>8</td><td>9</td></tr>
          <tr><td>10</td><td>11</td><td>12</td><td>13</td></tr>
          <tr><td>14</td><td>15</td><td>16</td><td>17</td></tr>
        </table>
        <p></p>
      `)
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