import { RichUtils } from 'draft-js'
import { ContentUtils } from 'braft-utils'

// todo
// 禁止选中多个单元格式时进行输入和粘贴操作
// 可以按tab/shift + tab键切换选中单元格
// 可以按方向键切换选中表格
// 在最后一个单元格中按Shift + 回车跳出表格

export const handleKeyCommand = (command, editorState) => {

  const blockType = ContentUtils.getSelectionBlockType(editorState)

  if (blockType !== 'table-cell') {
    return 'not-handled'
  }

  const currentBlock = ContentUtils.getSelectionBlock(editorState)

  if (command === 'backspace') {

    if (currentBlock.getText().length === 0) {
      return 'handled'
    }

  } else if (command === 'tab') {
    return 'handled'
  }

}

export const handleReturn = (event, editorState, editor) => {

  const blockType = ContentUtils.getSelectionBlockType(editorState)

  if (blockType !== 'table-cell') {
    return 'not-handled'
  }

  editor.setValue(RichUtils.insertSoftNewline(editorState))
  return 'handled'

}