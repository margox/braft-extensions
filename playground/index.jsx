import 'braft-editor/dist/index.css'
import './styles.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor from 'braft-editor'
import Table from '../src/table'
import ColorPicker from '../src/color-picker'
import Markdown from '../src/markdown'
import HeaderId from '../src/header-id'
import Mention, { defaultSuggestionsFilter } from '../src/mention'


BraftEditor.use(Table({
  defaultColumns: 4,
  defaultRows: 5,
  withDropdown: true,
  columnResizable: true,
  exportAttrString: 'border="1" style="border-collapse: collapse"'
}))

BraftEditor.use(Markdown())

BraftEditor.use(ColorPicker())

BraftEditor.use(HeaderId());
const [mentionExtension, MentionSuggestions] = Mention()
BraftEditor.use(mentionExtension)

/** test mention plugin mock data */
const mentions = [
  {
      name: 'Matthew Russell',
      link: 'https://twitter.com/mrussell247',
      avatar: 'https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg'
  },
  {
      name: 'Julian Krispel-Samsel',
      link: 'https://twitter.com/juliandoesstuff',
      avatar: 'https://avatars2.githubusercontent.com/u/1188186?v=3&s=400'
  },
  {
      name: 'Jyoti Puri',
      link: 'https://twitter.com/jyopur',
      avatar: 'https://avatars0.githubusercontent.com/u/2182307?v=3&s=400'
  },
  {
      name: 'Max Stoiber',
      link: 'https://twitter.com/mxstbr',
      avatar: 'https://pbs.twimg.com/profile_images/763033229993574400/6frGyDyA_400x400.jpg'
  },
  {
      name: 'Nik Graf',
      link: 'https://twitter.com/nikgraf',
      avatar: 'https://avatars0.githubusercontent.com/u/223045?v=3&s=400'
  },
  {
      name: 'Pascal Brandt',
      link: 'https://twitter.com/psbrandt',
      avatar: 'https://pbs.twimg.com/profile_images/688487813025640448/E6O6I011_400x400.png'
  }
].map((item) => ({ ...item, id: item.name }))


const tableStr = '<p></p><table border="1" style="border-collapse: collapse"><tr><td colSpan="1" rowSpan="1">ST-dstcollector	</td><td colSpan="1" rowSpan="1">80、12200</td></tr><tr><td colSpan="1" rowSpan="1">DST-dstweb		</td><td colSpan="1" rowSpan="1">80、83</td></tr></table><p></p>';
const tableStr2 = '<table border="1" style="border-collapse: collapse"><colgroup><col width="120"></col><col width="240"></col></colgroup><tr><td colSpan="1" rowSpan="1">ST-dstcollector	</td><td colSpan="1" rowSpan="1">80、12200</td></tr><tr><td colSpan="1" rowSpan="1">DST-dstweb		</td><td colSpan="1" rowSpan="1">80、83</td></tr></table>';
const tableStr3 = '<h1 id="efidd" style="text-align:left;text-indent:2em;"><strong><span style="font-size:0.64rem">优质物流服务协议</span></strong></h1>';

class Demo extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      editorState: BraftEditor.createEditorState(tableStr3),
      suggestions: mentions
    }
  }

  logHTML = () => {
    console.log(this.state.editorState.toHTML())
  }

  handleChange = (editorState) => {
    this.setState({ editorState })
  }

  onSearchChange = ({ value }) => {
    this.setState({
      suggestions: defaultSuggestionsFilter(value, mentions),
    });
  };

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
            contentStyle={{ height: 700 }}
          />
            <MentionSuggestions
                suggestions={this.state.suggestions}
                onSearchChange={this.onSearchChange}
            />
        </div>
      </div>
    )

  }

}

ReactDOM.render(<Demo />, document.querySelector('#root'))