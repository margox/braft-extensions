import './style.scss'
import React from 'react'
import Immutable from 'immutable'
import { EditorState, EditorBlock, ContentBlock, genKey, CharacterMetadata } from 'draft-js'

const cachedTables = []

const getTableComponent = ({ editor }) => class extends React.Component {

  constructor (props) {

    super(props)

    const blockData = this.props.block.getData()
    const tableProps = blockData.get('props')
    const headData = blockData.get('head')
    const bodyData = blockData.get('body')
    const footData = blockData.get('foot')

    this.state = {
      tableProps: tableProps,
      headData: headData,
      bodyData: bodyData,
      footData: footData
    }

    this.tableCellBlocks = Immutable.OrderedMap([])

  }

  componentDidMount () {
    // this.mergeTableBlocks()
  }

  mergeTableBlocks () {

    const tableKey = this.props.block.getKey()

    if (cachedTables[tableKey]) {
      return false
    }

    cachedTables[tableKey] = true

    const contentState = editor.state.editorState.getCurrentContent()
    const selection = editor.state.editorState.getSelection()
    const firstCellKey = this.tableCellBlocks.first().getKey()

    const newBlockMap = contentState.getBlockMap().toSeq().concat(this.tableCellBlocks.toSeq()).toOrderedMap()

    const newContentState = contentState.merge({
      blockMap: newBlockMap,
      selectionBefore: selection,
      selectionAfter: selection.merge({
        anchorKey: firstCellKey,
        anchorOffset: selection.getStartOffset(),
        focusKey: firstCellKey,
        focusOffset: selection.getStartOffset(),
        isBackward: false
      })
    })

    const editorState = EditorState.push(editor.state.editorState, newContentState, 'insert-table')
    editor.setValue(editorState)

  }

  createTableCell (props, text) {

    const blockKey = genKey()
    const block = new ContentBlock({
      key:  blockKey,
      type: 'table-cell',
      text: text,
      data: Immutable.Map({ 'props': props }),
      characterList: Immutable.List(Immutable.Repeat(CharacterMetadata.create(), text.length))
    })

    this.tableCellBlocks = this.tableCellBlocks.merge(Immutable.OrderedMap([
      [blockKey, block]
    ]))

    return <EditorBlock {...this.props} block={block}/>

  }

  render () {

    const { tableProps, headData, bodyData, footData } = this.state

    return (
      <table className="bf-table" {...tableProps}>
        {headData && headData.length ? (
          <thead>
            {headData.map((col, colIndex) => (
              <tr key={colIndex}>
                {col.map((cell, cellIndex) => (
                  <th {...cell.props} key={cellIndex}>
                    {this.createTableCell(cell.props, cell.text)}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
        ) : null}
        {bodyData && bodyData.length ? (
          <tbody>
            {bodyData.map((col, colIndex) => (
              <tr key={colIndex}>
                {col.map((cell, cellIndex) => (
                  <td {...cell.props} key={cellIndex}>
                    {this.createTableCell(cell.props, cell.text)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ) : null}
        {footData && footData.length ? (
          <tfoot>
            {footData.map((col, colIndex) => (
              <tr key={colIndex}>
                {col.map((cell, cellIndex) => (
                  <td {...cell.props} key={cellIndex}>
                    {this.createTableCell(cell.props, cell.text)}
                  </td>
                ))}
              </tr>
            ))}
          </tfoot>
        ) : null}
      </table>
    )

  }

}

export default (options) => {

  options = {
    ...options
  }

  const { includeEditors, excludeEditors } = options

  return [
    {
      type: 'block',
      name: 'table',
      includeEditors, excludeEditors,
      rendererMap: Immutable.Map({
        'table-cell': {
          element: 'h3'
        }
      }),
      rendererFn: (props) => {
        return {
          component: getTableComponent(props),
          editable: true
        }
      },
      importer: (nodeName, node) => {

        if (nodeName === 'table') {

          return {
            type: 'table',
            data: {
              props: {
                foo: 'bar'
              },
              head: [
                [
                  {
                    props: {
                      a: '1'
                    },
                    text: 'Foo'
                  }, {
                    props: {
                      a: '2'
                    },
                    text: 'Bar'
                  }, {
                    props: {
                      a: '3'
                    },
                    text: 'Baz'
                  }
                ]
              ],
              body: [
                [
                  {
                    props: {},
                    text: 'Hello'
                  },  {
                    props: {
                      colSpan: 2
                    },
                    text: 'World'
                  }
                ]
              ],
              foot: null
            }
          }

        }

        return null

      }
    }
  ]

}