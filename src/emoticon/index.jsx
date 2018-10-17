import React from 'react'
// import { ContentUtils } from 'braft-utils'
import './styles.scss'

// https://www.iconfinder.com/iconsets/emoji-18
const defaultEmoticons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].map(item => require(`./images/${item}.png`))

const insertEmoticon = (event) => {

  const { index } = event.currentTarget.dataset


  console.log(defaultEmoticons[index])

}

export default (options) => {

  options = {
    emoticons: defaultEmoticons,
    size: 16,
    ...options
  }

  const { size, emoticons, includeEditors, excludeEditors } = options

  return {
    type: 'entity',
    includeEditors, excludeEditors,
    name: 'EMOTICON',
    control: {
      text: <i className="bfi-emoji"></i>,
      replace: 'emoji',
      showArrow: false,
      type: 'dropdown',
      component: (
        <div className="braft-emoticon-picker">
          <div className="braft-emoticons-list">
            {emoticons.map((item, index) => <img onClick={insertEmoticon} data-index={index} key={index} src={item} />)}
          </div>
        </div>
      )
    },
    mutability: 'IMMUTABLE',
    component: (props) => {
      const entity = props.contentState.getEntity(props.entityKey)
      const { src } = entity.getData()
      return <img className="braft-emoticon" src={src} width={size} height={size}/>
    },
    importer: (nodeName, node) => {
      if (nodeName.toLowerCase() === 'img' && node.classList && node.classList.contains('braft-emoticon')) {
        return {
          mutability: 'IMMUTABLE',
          data: {
            src: node.getAttribute('src')
          },
        }
      }
    },
    exporter: (entityObject) => {
      const { src } = entityObject.data
      return <img className="braft-emoticon" src={src} width={size} height={size}/>
    }
  }

}