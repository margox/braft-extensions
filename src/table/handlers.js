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