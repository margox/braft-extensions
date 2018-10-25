const getSelectedTextLength = (editorState) => {

  const currentSelection = editorState.getSelection()
  const isCollapsed = currentSelection.isCollapsed()

  let length = 0

  if (!isCollapsed) {

    const currentContent = editorState.getCurrentContent()
    const startKey = currentSelection.getStartKey()
    const endKey = currentSelection.getEndKey()
    const startBlock = currentContent.getBlockForKey(startKey)
    const isStartAndEndBlockAreTheSame = startKey === endKey
    const startBlockTextLength = startBlock.getLength()
    const startSelectedTextLength = startBlockTextLength - currentSelection.getStartOffset()
    const endSelectedTextLength = currentSelection.getEndOffset()
    const keyAfterEnd = currentContent.getKeyAfter(endKey)

    if (isStartAndEndBlockAreTheSame) {
      length += currentSelection.getEndOffset() - currentSelection.getStartOffset()
    } else {
      let currentKey = startKey

      while (currentKey && currentKey !== keyAfterEnd) {
        if (currentKey === startKey) {
          length += startSelectedTextLength + 1
        } else if (currentKey === endKey) {
          length += endSelectedTextLength
        } else {
          length += currentContent.getBlockForKey(currentKey).getLength() + 1
        }

        currentKey = currentContent.getKeyAfter(currentKey)
      }
    }
  }

  return length

}

export default (options) => {

  options = {
    defaultValue: Infinity,
    ...options
  }

  const { includeEditors, excludeEditors, defaultValue } = options

  return {
    type: 'prop-interception',
    includeEditors, excludeEditors,
    interceptor: (editorProps) => {

      const maxLength = editorProps.maxLength || defaultValue

      editorProps.handleBeforeInput = (_, editorState) => {

        if (maxLength === Infinity) {
          return 'not-handled'
        }

        const currentContentLength = editorState.toText().length
        const selectedTextLength = getSelectedTextLength(editorState)

        if (currentContentLength - selectedTextLength > maxLength - 1) {
          editorProps.onReachMaxLength && editorProps.onReachMaxLength(maxLength)
          return 'handled'
        }

      }

      editorProps.handlePastedText = (pastedText, _, editorState) => {

        if (maxLength === Infinity) {
          return 'not-handled'
        }

        const currentContentLength = editorState.toText().length
        const selectedTextLength = getSelectedTextLength(editorState)
    
        if (currentContentLength + pastedText.length - selectedTextLength > maxLength) {
          editorProps.onReachMaxLength && editorProps.onReachMaxLength(maxLength)
          return 'handled'
        }

      }

      return editorProps

    }

  }

}