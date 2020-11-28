# Braft Editor扩展模块包

### 目前包含的模块列表
1. 表格模块 Table
2. Markdown语法支持 Markdown
3. 代码高亮模块 CodeHighlighter
4. 高级取色器模块 ColorPicker
5. 表情包扩展模块 Emoticon
6. Mention模块 Mention （感谢[ninesunsabiu](https://github.com/ninesunsabiu)的贡献）
7. 输入字数限制模块 MaxLength
8. 标题区块(h1-h6)id模块 HeaderId

### 安装
```bash
npm install braft-extensions --save
# 或者
yarn add braft-extensions
```

### 使用
需要分别import本模块包下面的各个模块，参见下方各模块的基本使用介绍

### 注意事项
如果在使用扩展模块时，指定了includeEditors或excludeEditors属性，则通过BraftEditor.createEditorState创建初始化内的时候，需要传入一个editorId属性来指明创建的editorState是给哪个BraftEditor组件用的：
```jsx
// 以使用表格扩展为例
BraftEditor.use(Table({
  includeEditors: ['editor-1']
}))

// 使用BraftEditor.createEditorState创建编辑器数据
const initialValue = BraftEditor.createEditorState('xxxxxx', { editorId: 'editor-1' })

// 将数据传入编辑器
<BraftEditor value={initialValue} id="editor-1"/>
```

## 表格模块
支持添加/删除行列、合并/拆分单元格等基本操作

#### 基本使用
```js
import 'braft-editor/dist/index.css'
import 'braft-extensions/dist/table.css'

import BraftEditor from 'braft-editor'
import Table from 'braft-extensions/dist/table'

const options = {
  defaultColumns: 3, // 默认列数
  defaultRows: 3, // 默认行数
  withDropdown: false, // 插入表格前是否弹出下拉菜单
  columnResizable: false, // 是否允许拖动调整列宽，默认false
  exportAttrString: '', // 指定输出HTML时附加到table标签上的属性字符串
  includeEditors: ['editor-id-1'], // 指定该模块对哪些BraftEditor生效，不传此属性则对所有BraftEditor有效
  excludeEditors: ['editor-id-2']  // 指定该模块对哪些BraftEditor无效
}

BraftEditor.use(Table(options))
```

#### 使用注意事项
- 使用表格模块，请升级braft-editor、braft-convert和braft-utils至最新版本
- 暂不支持在表格中插入图片等媒体资源，因为draftjs不支持嵌套block，而每一个单元格和图片等都是一个单独的block，所以无法实现
- 每个表格前后都需要有一个空行才能正常展示，有疑问的请自行查阅源码
- 请勿在表格内进行过于复杂的操作，例如任性合并/拆分单元格等，以免进入程序死角导致报错
- 调整列宽的功能会在后续版本中支持
- 输出表格默认不带边框，如果需要边框，设置参数`exportAttrString`为`'border="1" style="border-collapse: collapse"'`即可

## Markdown语法支持模块
移植自[draft-js-markdown-shortcuts-plugin](https://github.com/ngs/draft-js-markdown-shortcuts-plugin)，可以在编辑器中使用markdown语法快捷输入内容

#### 基本使用
```js
import 'braft-editor/dist/index.css'

import BraftEditor from 'braft-editor'
import Markdown from 'braft-extensions/dist/markdown'

const options = {
  includeEditors: ['editor-id-1'], // 指定该模块对哪些BraftEditor生效，不传此属性则对所有BraftEditor有效
  excludeEditors: ['editor-id-2']  // 指定该模块对哪些BraftEditor无效
}

BraftEditor.use(Markdown(options))
```

#### 使用注意事项
- 该模块仅支持部分markdown语法，对于draft-js和braft-editor本身没有的样式和功能，本模块也无法支持
- 该模块暂时不支持markdown表格语法

## 代码高亮模块
使用[prismjs](https://github.com/PrismJS/prism)和[draft-js-prism](https://github.com/SamyPesse/draft-js-prism)开发的一个代码高亮模块，能在编辑器中实现代码高亮编辑功能，内置html、js和css语言支持，可扩展更多语言，[在线演示](https://braft.margox.cn/demos/code-highlighter)

#### 安装依赖
```bash
npm install prismjs draft-js-prism --save
# 或者
yarn add prismjs draft-js-prism
```

#### 基本使用
```js
import 'braft-editor/dist/index.css'
import 'braft-extensions/dist/code-highlighter.css'

import BraftEditor from 'braft-editor'
import CodeHighlighter from 'braft-extensions/dist/code-highlighter'

const options = {
  includeEditors: ['editor-id-1'], // 指定该模块对哪些BraftEditor生效，不传此属性则对所有BraftEditor有效
  excludeEditors: ['editor-id-2']  // 指定该模块对哪些BraftEditor无效
}

BraftEditor.use(CodeHighlighter(options))
```

#### 扩展语言支持
请访问[PrismJs官网](https://prismjs.com/#languages-list)查看全部支持的语言
```js
// 首先需要从prismjs中引入需要扩展的语言库
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-php'

// 通过opitons.
const options = {
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
}

BraftEditor.use(CodeHighlighter(options))
```

#### 使用其他Prism配色主题
该功能将在后续版本中支持

#### 使用注意事项
- 使用该模块，必须引入braft-extensions/dist/code-highlighter.css文件
- 该模块仅用于对编辑器内的代码块进行高亮展示，并不会更改编辑器输出的实际内容，如果需要在展示页面进行代码高亮，请单独使用Prism.js或其他代码高亮方案进行处理
- 在展示页使用PrismJS进行代码高亮的时候，需要参考[PrismJS/prism#598](https://github.com/PrismJS/prism/issues/598#issuecomment-113381183)做一下处理


## 高级取色器模块
使用[react-color](https://github.com/casesandberg/react-color)来替换编辑器自身的颜色选择模块，设置颜色更自由！[在线演示](https://braft.margox.cn/demos/color-picker)

#### 安装依赖
```bash
npm install react-color --save
# 或者
yarn add react-color
```

#### 基本使用
```js
import 'braft-editor/dist/index.css'
import 'braft-extensions/dist/color-picker.css'

import BraftEditor from 'braft-editor'
import ColorPicker from 'braft-extensions/dist/color-picker'

const options = {
  includeEditors: ['editor-id-1'], // 指定该模块对哪些BraftEditor生效，不传此属性则对所有BraftEditor有效
  excludeEditors: ['editor-id-2'],  // 指定该模块对哪些BraftEditor无效
  theme: 'light', // 指定取色器样式主题，支持dark和light两种样式
}

BraftEditor.use(ColorPicker(options))
```

#### 使用注意事项
- 使用该模块，必须引入braft-extensions/dist/color-picker.css文件


## 表情包扩展模块
替换内置的emoji组件，可以插入图片形式的表情，[在线演示](https://braft.margox.cn/demos/emoticon)

#### 基本使用
```js
import 'braft-editor/dist/index.css'
import BraftEditor from 'braft-editor'

// 引入表情包扩展模块样式文件
import 'braft-extensions/dist/emoticon.css'
// 引入表情包扩展模块和默认表情包列表
import Emoticon, { defaultEmoticons } from 'braft-extensions/dist/emoticon'

// 转换默认表情包列表，让webpack可以正确加载到默认表情包中的图片，请确保已对png格式的文件配置了loader
// 如果你使用的webpack版本不支持动态require，或者使用的其他打包工具，请勿使用此写法
const emoticons = defaultEmoticons.map(item => require(`braft-extensions/dist/assets/${item}`))

// 也可以使用自己的表情包资源，不受打包工具限制
// const emoticons = ['http://path/to/emoticon-1.png', 'http://path/to/emoticon-2.png', 'http://path/to/emoticon-3.png', 'http://path/to/emoticon-4.png', ...]

const options = {
  includeEditors: ['editor-id-1'], // 指定该模块对哪些BraftEditor生效，不传此属性则对所有BraftEditor有效
  excludeEditors: ['editor-id-2'],  // 指定该模块对哪些BraftEditor无效
  emoticons: emoticons, // 指定可用表情图片列表，默认为空
  closeOnBlur: false, // 指定是否在点击表情选择器之外的地方时关闭表情选择器，默认false
  closeOnSelect: false // 指定是否在选择表情后关闭表情选择器，默认false
}

BraftEditor.use(Emoticon(options))
```

#### 默认表情图片来自https://www.iconfinder.com/iconsets/emoji-18 [[CC BY 3.0](https://creativecommons.org/licenses/by/3.0/#)]，由[Bukeicon](https://www.iconfinder.com/bukeicon)创建

#### 使用注意事项
- 使用该模块，必须引入braft-extensions/dist/emoticon.css文件

## Mention模块
为编辑器增加mention(提及)功能

#### 基本使用
```js
import 'braft-editor/dist/index.css'
import BraftEditor from 'braft-editor'

// 引入Mention扩展模块
import Mention, { defaultSuggestionsFilter } from 'braft-extensions/dist/mention'
// 取出Mention扩展和Mention列表组件
const [mentionExtension, MentionSuggestions] = Mention()

// 使用扩展
BraftEditor.use(mentionExtension)

class MentionDemo extends React.Component {
  state = {
    editorState: BraftEditor.createEditorState(),
    // 在state中维护一个mention列表(这个数据可以从外部获取)
    mentions: [
      {
        id: 'Matthew Russell',
        name: 'Matthew Russell',
        link: 'https://twitter.com/mrussell247',
        avatar: 'https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg'
      },
      {
        id: 'Julian Krispel-Samsel',
        name: 'Julian Krispel-Samsel',
        link: 'https://twitter.com/juliandoesstuff',
        avatar: 'https://avatars2.githubusercontent.com/u/1188186?v=3&s=400'
      },
      {
        id: 'Jyoti Puri',
        name: 'Jyoti Puri',
        link: 'https://twitter.com/jyopur',
        avatar: 'https://avatars0.githubusercontent.com/u/2182307?v=3&s=400'
      },
      {
        id: 'Max Stoiber',
        name: 'Max Stoiber',
        link: 'https://twitter.com/mxstbr',
        avatar: 'https://pbs.twimg.com/profile_images/763033229993574400/6frGyDyA_400x400.jpg'
      }
    ],
    // 再维护一个mention列表搜索关键字
    mentionKeyword: null
  }

  // 定义mention列表的搜索处理函数
  handleMentionFilter = ({ value: mentionKeyword }) => {
    this.setState({ mentionKeyword })
  }

  handleChange = (editorState) => {
    this.setState({ editorState })
  }
 
  render () {
    const { mentionKeyword, editorState, mentions } = this.state

    return (
      <div>
        <BraftEditor value={editorState} onChange={this.handleChange} />
        {/**MentionSuggestions组件需要单独渲染，并传入正确的属性**/}
        <MentionSuggestions
          onSearchChange={this.handleMentionFilter}
          suggestions={defaultSuggestionsFilter(mentionKeyword, mentions)}
        />
      </div>
    )
  }
}
```

## 输入字数限制模块
为编辑器增加maxLength和onReachMaxLength属性，用于限制输入字数

#### 基本使用
```js
import 'braft-editor/dist/index.css'
import BraftEditor from 'braft-editor'
import MaxLength from 'braft-extensions/dist/max-length'

const options = {
  defaultValue: 100, // 指定默认限制数，如不指定则为Infinity(无限)
  includeEditors: ['editor-id-1'], // 指定该模块对哪些BraftEditor生效，不传此属性则对所有BraftEditor有效
  excludeEditors: ['editor-id-2'],  // 指定该模块对哪些BraftEditor无效
}

BraftEditor.use(MaxLength(options))
```
使用MaxLength扩展之后，可为编辑器组件传入maxLength和onReachMaxLength:
```jsx
<BraftEditor maxLength={100} onReachMaxLength={() => console.log('不能再输入了！')} />
```

#### 该模块实现思路来自于[https://stackoverflow.com/a/46071494](https://stackoverflow.com/a/46071494)，如有更好的解决办法，欢迎PR！

#### 使用注意事项
- 粘贴内容时如果超过了限制字数，则整个粘贴内容都不会被粘贴到编辑器
- 对于富文本编辑器，限制输入字符数并不是一个很适合的做法
- 可通过editorState.toText().length获取到内容长度再进行友好提示

## 标题区块(h1-h6)id模块
为标题区块(h1-h6)增加随机的id，便于在展示页支持锚点跳转功能

#### 基本使用
```js
import 'braft-editor/dist/index.css'

import BraftEditor from 'braft-editor'
import HeaderId from 'braft-extensions/dist/header-id'

const options = {
  includeEditors: ['editor-id-1'], // 指定该模块对哪些BraftEditor生效，不传此属性则对所有BraftEditor有效
  excludeEditors: ['editor-id-2'],  // 指定该模块对哪些BraftEditor无效
}

BraftEditor.use(HeaderId(options))
```

## Mention 模块
基于 [draft-js-mention](https://github.com/draft-js-plugins/draft-js-plugins/tree/master/packages/mention) 实现的 Mention 功能  
`options` 除了可以使用 includeEditors 和 excludeEditors 指定和排除 editor 外，其余的参数请参考 draft-js-mention 的参数配置
可参考 https://www.draft-js-plugins.com/plugin/mention

#### 基本使用
```ts
import Mention from 'braft-extensions/dist/mention'

interface MentionData {
    link?: string;
    avatar?: string;
    name: string;
    id?: null | string | number;
}

interface MentionSuggestionsPubProps {
    suggestions: MentionData[];
    open: boolean;
    onOpenChange(open: boolean): void;
    onSearchChange(event: { value: string }): void;
    onAddMention(Mention: MentionData): void;
}

const options = {
  includeEditors: ['editor-id-1'], // 指定该模块对哪些BraftEditor生效，不传此属性则对所有BraftEditor有效
  excludeEditors: ['editor-id-2'],  // 指定该模块对哪些BraftEditor无效
  mentionTrigger: '@'               // 可选参数。设置触发 mention 的符号，默认为 '@'
}

// Mention 方法返回一个二元祖
// 第一个是 braft-extension 所用插件数据
// 第二个是 控制 mention suggestions 的组件
//          类型为 React.ComponentType<MentionSuggestionsPubProps>
const [mentionExtension, MentionSuggestions] = Mention(options)
BraftEditor.use(mentionExtension)


const DemoEditor = (props) => {
  // ... 省略

  return (
    <div>
      <BraftEditor ... />
      <MentionSuggestions ... />
    </div>
  )
}

```
