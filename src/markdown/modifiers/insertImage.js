import { EditorState, SelectionState, Modifier } from 'draft-js'
import { ContentUtils } from 'braft-utils'

const insertImage = (editorState, matchArr) => {
  const currentContent = editorState.getCurrentContent()
  const selection = editorState.getSelection()
  const key = selection.getStartKey()
  const [ matchText, alt, src, title ] = matchArr
  const { index } = matchArr
  const focusOffset = index + matchText.length
  const wordSelection = SelectionState.createEmpty(key).merge({
    anchorOffset: index,
    focusOffset
  })

  let newContentState = Modifier.replaceText(currentContent, wordSelection, '')
  let nextEditorState = EditorState.push(editorState, newContentState, 'insert-image')
  // nextEditorState = EditorState.forceSelection(nextEditorState, newContentState.getSelectionAfter())

  return ContentUtils.insertMedias(nextEditorState, [{
    type: 'IMAGE',
    name: alt || title,
    url: src,
    meta: { alt, title }
  }])
  
}

export default insertImage
