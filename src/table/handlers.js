import { RichUtils } from 'draft-js'
import { ContentUtils } from 'braft-utils'

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