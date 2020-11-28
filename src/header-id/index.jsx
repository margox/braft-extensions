import React from 'react'
import { Map } from 'immutable'

const headerTagTypeMap = {
  'h1': 'header-one',
  'h2': 'header-two',
  'h3': 'header-three',
  'h4': 'header-four',
  'h5': 'header-five',
  'h6': 'header-six',
}

const headerTypeTagMap = {}

Object.keys(headerTagTypeMap).forEach(key => {
  headerTypeTagMap[headerTagTypeMap[key]] = key
})

const getHeaderTag = (TagName, editorState) => class props extends React.Component {

  constructor (props) {

    super(props)

    const blockKey = props['data-offset-key'].split('-')[0]
    const block = editorState.getCurrentContent().getBlockForKey(blockKey)
    const headerId = block.getData().get('id') || blockKey

    this.state = {
      id: headerId
    }

  }

  render () {
    return <TagName id={this.state.id} {...this.props} />
  }

}

const getHeaderRenderMap = ({ editorState }) => {

  return Map({
    'header-one': {
      element: getHeaderTag('h1', editorState)
    },
    'header-two': {
      element: getHeaderTag('h2', editorState)
    },
    'header-three': {
      element: getHeaderTag('h3', editorState)
    },
    'header-four': {
      element: getHeaderTag('h4', editorState)
    },
    'header-five': {
      element: getHeaderTag('h5', editorState)
    },
    'header-six': {
      element: getHeaderTag('h6', editorState)
    }
  })

}

export default (options = {}) => {

  const { includeEditors, excludeEditors } = options

  return {
    type: 'block',
    name: 'custom-header',
    includeEditors, excludeEditors,
    renderMap: getHeaderRenderMap,
    importer: (nodeName, node) => {

      if (/h[1-6]/.test(nodeName)) {
        const blockData = {
          id: node.getAttribute('id')
        }

        let nodeStyle = node.style || {}

        if (nodeStyle.textAlign) {
          blockData.textAlign = nodeStyle.textAlign
        }

        if (nodeStyle.textIndent) {
          blockData.textIndent = /^\d+em$/.test(nodeStyle.textIndent) ? Math.ceil(parseInt(nodeStyle.textIndent, 10) / 2) : 1
        }

        return {
          type: headerTagTypeMap[nodeName],
          data: blockData
        }
      }

      return null

    },
    exporter: (_, block) => {

      const blockType = block.type.toLowerCase()

      if (!/header-\b(one|two|three|four|five|six)\b/.test(blockType)) {
        return null
      }
  
      let blockStyle = ''

      const { id, textAlign, textIndent } = block.data

      if (textAlign || textIndent) {

        blockStyle = ' style="'

        if (textAlign) {
          blockStyle += `text-align:${textAlign};`
        }

        if (textIndent && !isNaN(textIndent) && textIndent > 0) {
          blockStyle += `text-indent:${textIndent * 2}em;`
        }

        blockStyle += '"'

      }

      return {
        start: `<${headerTypeTagMap[blockType]} id="${id || block.key}"${blockStyle}>`,
        end: `</${headerTypeTagMap[blockType]}>`
      }

    }
  }

}