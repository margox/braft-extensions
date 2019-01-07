import { RichUtils } from 'draft-js'
import { ContentUtils } from 'braft-utils'

// todo
// 禁止选中多个单元格式时进行输入和粘贴操作
// 可以按tab/shift + tab键切换选中单元格
// 可以按方向键切换选中表格
// 在最后一个单元格中按Shift + 回车跳出表格

export const handleKeyCommand = (oringeHandler) => (command, editorState) => {

  if (oringeHandler && oringeHandler(command, editorState) === 'handled') {
    return 'handled'
  }

  const selectedBlocks = ContentUtils.getSelectedBlocks(editorState)

  if (!selectedBlocks.find(block => block.getType() === 'table-cell')) {
    return 'not-handled'
  }

  const currentBlock = ContentUtils.getSelectionBlock(editorState)

  if (['backspace', 'delete'].indexOf(command) > -1) {

    if (selectedBlocks.length > 1) {
      return 'handled'
    }
    
    const textLen = currentBlock.getText().length
    if (textLen === 0) {
      return 'handled'
    }
    
    const focusOffset = editorState.getSelection().getFocusOffset()
    if (command === 'backspace' && focusOffset === 0) {
      return 'handled'
    }
    if (command === 'delete' && focusOffset === textLen) {
      return 'handled'
    }
  } else if (command === 'tab') {
    return 'handled'
  }

}

export const handleReturn = (oringeHandler) => (event, editorState, editor) => {

  if (oringeHandler && oringeHandler(event, editorState, editor) === 'handled') {
    return 'handled'
  }

  if (!ContentUtils.selectionContainsBlockType(editorState, 'table-cell')) {
    return 'not-handled'
  }

  const blockType = ContentUtils.getSelectionBlockType(editorState)

  if (blockType !== 'table-cell') {
    return 'not-handled'
  }

  editor.setValue(RichUtils.insertSoftNewline(editorState))
  return 'handled'

}

export const handleDroppedFiles = (oringeHandler) => (selectionState, files, editor) => {

  if (oringeHandler && oringeHandler(selectionState, files, editor) === 'handled') {
    return 'handled'
  }

  if (!ContentUtils.selectionContainsBlockType(editor.state.editorState, 'table-cell')) {
    return 'not-handled'
  }

  const currentBlock = ContentUtils.getSelectionBlock(editor.state.editorState)

  if (currentBlock.getType() === 'table-cell') {
    return 'handled'
  }

}

export const handlePastedFiles = (oringeHandler) => (files, editor) => {

  if (oringeHandler && oringeHandler(files, editor) === 'handled') {
    return 'handled'
  }

  if (!ContentUtils.selectionContainsBlockType(editor.state.editorState, 'table-cell')) {
    return 'not-handled'
  }

  const currentBlock = ContentUtils.getSelectionBlock(editor.state.editorState)

  if (currentBlock.getType() === 'table-cell') {
    return 'handled'
  }

}

export const handlePastedText = (oringeHandler) => (text, html, editorState, editor) => {

  if (oringeHandler && oringeHandler(text, html, editorState, editor) === 'handled') {
    return 'handled'
  }

  const selectedBlocks = ContentUtils.getSelectedBlocks(editor.state.editorState)

  if (!selectedBlocks.find(block => block.getType() === 'table-cell')) {
    return 'not-handled'
  }

  if (selectedBlocks.length === 1) {
    editor.setValue(ContentUtils.insertText(editor.state.editorState, text))
  }

  return 'handled'

}
