# Braft Editor扩展模块包

### 目前包含的模块列表
1. 代码高亮模块 CodeHighlighter
2. 高级取色器模块 ColorPicker

### 安装
```bash
npm install braft-extensions --save
# 或者
yarn add braft-extensions
```

### 使用
需要分别import本模块包下面的各个模块，参见下方各模块的基本使用介绍


## 代码高亮模块
使用[prismjs](https://github.com/PrismJS/prism)和[draft-js-prism](https://github.com/SamyPesse/draft-js-prism)开发的一个代码高亮模块，能在编辑器中实现代码高亮编辑功能，内置html、js和css语言支持，可扩展更多语言

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


## 高级取色器模块
使用[react-color](https://github.com/casesandberg/react-color)来替换编辑器自身的颜色选择模块，设置颜色更自由！

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