
import { EditorState } from 'draft-js'
import Immutable from 'immutable'

// export const insertColumn = (editorState, index) => {

//   const contentState = editorState.getCurrentContent()
//   const blocks = contentState

//   return EditorState.puush(editorState, contentState, 'insert-block')

// }

export const insertRow = (options) => {

  const { editorState, tableKey, index } = options
  const contentState = editorState.getCurrentContent()

  const contentBlocks = contentState.getBlockMap()
  

  const blocksBefore = contentBlocks.toSeq().takeUntil(block => {
    return block.getData('tableKey') === tableKey && block.getData('rowIndex') == index && contentBlocks.getBlockAfter(block.getKet()).getData('rowIndex') != index
  })

  const blocksAfter = contentBlocks.toSeq().takeUntil(block => {
    return block.getKey() === blocksBefore.getLast().getKey()
  }).rest()

  console.log(blocksBefore, blocksAfter)
  const newConentState = null

  return EditorState.push(editorState, newConentState, 'insert-table-cell')

}

export const insertTable = () => {
  // ...
}

export const removeColumn = () => {
  // ...
}

export const removeRow = () => {
  // ...
}

export const removeTable = () => {
  // ...
}

export const mergeCells = () => {
  // ...
}

export const getFocusedTable = () => {
  // ...
}