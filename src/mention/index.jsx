import 'draft-js-mention-plugin/lib/plugin.css'
import React from 'react'
import createMentionPlugin, { defaultSuggestionsFilter } from 'draft-js-mention-plugin'

/**
 * 基于 draft-js-mention-plugin 的 mention 扩展
 * 除了 includeEditors 和 excludeEditors 外
 * 其他属性将会传递给 draft-js-mention-plugin
 * 参考 https://www.draft-js-plugins.com/plugin/mention
 */
export default (options = {}) => {
  const { includeEditors, excludeEditors, ...mentionPluginOptions } = options

  const mentionPlugin = createMentionPlugin(mentionPluginOptions)

  // MentionSuggestions 是一个 React Component 用来定制 mention 的数据
  const { MentionSuggestions, ...draftEditorPlugin } = mentionPlugin

  /**
     * draft-js-plugin 为每个 plugin 的很多地方都注入了 get 和 set
     * 在 braft-editor 里面 由于 在 useExtension 里面并拿不到 editor 的实例
     * 只能在 prop-interception 的时候 有机会拿到 因此先用一个 对象引用起来 再传递
     */
  const getAndSetState = {
    getEditorState: () => {
      throw new Error('can\'t use get state')
    },
    setEditorState: (state) => {
      throw new Error(`can't use set state ${state}`)
    }
  }

  return [
    [
      {
        type: 'prop-interception',
        interceptor: (editorProps, editor) => {
          // hack
          // 没有地方可以有 init 的时机，属性拦截器这里会把编辑器的实例传过来
          // 所以在这里初始化插件
          getAndSetState.getEditorState = editor.getValue.bind(editor)
          getAndSetState.setEditorState = editor.setValue.bind(editor)
          if (draftEditorPlugin.initialize) {
            // 这里 mention 插件 只用了 get/setEditor State 所以其他可以不传
            draftEditorPlugin.initialize(getAndSetState)
          }
          // mention 的 plugin 需要 hack editor 的 onChange
          // 如果有更好的办法请告知
          const hackOnChange = editor.onChange
          if (hackOnChange) {
            editor.onChange = (editorState, callback) => {
              hackOnChange.call(editor, editorState, callback)
              if (draftEditorPlugin.onChange) {
                draftEditorPlugin.onChange(editorState, getAndSetState)
              }
            }
          }
          
          // 应该是 draft-js 和 draft-js-mention-plugin 之间的磨合除了问题
          // mention 需要处理 以下几个键盘事件 但是 draft-js 对这几个事件有特殊处理
          // 仅仅调用了 props 传递进去的 而不会通过 keyBindingFn 调用
          // 所以这里额外处理，并通过 prop-interception 传递给 draftProps
          // bug 可在 https://stackblitz.com/edit/draft-js-mention?file=index.tsx 使用 DraftEditor 复现
          const passSomeKeyEventToKeyBindingFn = (props) => {
            const handleName = [
              'onUpArrow',
              'onRightArrow',
              'onDownArrow',
              'onLeftArrow',
              'onEscape',
              'onTab'
            ]
            return handleName.reduce((acc, name) => {
              const hackHandle = props[name]
              const handler = (event) => {
                if (typeof hackHandle === 'function') {
                  hackHandle(event)
                }
                draftEditorPlugin.keyBindingFn(event, getAndSetState)
              }
              return {
                ...acc,
                [name]: handler
              }
            }, {})
          }

          return {
            ...editorProps,
            draftProps: {
              ...editorProps.draftProps,
              ...draftEditorPlugin.getAccessibilityProps(),
              ...passSomeKeyEventToKeyBindingFn(editorProps.draftProps || {})
            },
            keyBindingFn: (event) => {
              // 先处理前面插件的 keyBindingFn
              // 暂时没有发现 mention 必须优先处理的必要性
              const originHandler = editorProps.keyBindingFn
              let ret = null
              if (typeof originHandler === 'function') {
                ret = originHandler(event)
              }
              return ret != null ? ret : draftEditorPlugin.keyBindingFn(event, getAndSetState)
            },
            handleReturn: (event, editorState, editor) => {
              const originHandler = editorProps.handleReturn
              // 这里 mention 要优于其他的插件处理 回车 事件
              // 因为在 mention 弹出 suggestion 时 有「确认选择」的功能
              if (draftEditorPlugin.handleReturn(event, editorState, getAndSetState) === 'handled') {
                return 'handled'
              }
              return originHandler ? originHandler(event, editorState, editor) : 'not-handled'
            }
          }
        }
      },
      ...(draftEditorPlugin.decorators || []).map((decorate) => {
        return {
          type: 'decorator',
          includeEditors,
          excludeEditors,
          decorator: {
            ...decorate,
            component: (props) => {
              // 这里需要注入 getAndSet 是因为平时 draft-js-plugin 里面 对所有的非自定义类型的装饰器进行了注入
              // 所以这里也要模仿
              // see draft-js-plugins/packages/editor/src/Editor/resolveDecorators.ts
              return React.createElement(decorate.component, { ...props, ...getAndSetState })
            }
          }
        }
      })
    ],
    MentionSuggestions
  ]
}

export { defaultSuggestionsFilter }
