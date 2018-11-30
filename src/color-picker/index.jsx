import './styles.scss'
import React from 'react'
import { Panel as ColorPickerPanel } from 'material-ui-rc-color-picker'
import 'material-ui-rc-color-picker/assets/index.css'

const getColorPicker = (superProps) => ({
  onChange: originOnChange,
  color,
  presetColors,
  ...props
}) => {
  console.log(presetColors);
  const onChange = (colorObject) => {
    originOnChange(colorObject.color, false)
    superProps.onChange && superProps.onChange(colorObject.color)
  }

  const clearColor = () => originOnChange(color, false)
  const closePicker = () => originOnChange(null, true)

  color = color || presetColors[0]
  console.log('color: ', color);

  return (
    <div className={`braft-color-picker ${superProps.theme}-theme`}>
      <ColorPickerPanel
        enableAlpha={true}
        color={color}
        onChange={onChange}
        mode="RGB"
        placement="bottomRight"
      />
      <footer className="footer">
        <button
          type="button"
          className="button control-item button-clear"
          onClick={clearColor}
          disabled={!color}
        >
          {superProps.clearButtonText}
        </button>
        <button
          type="button"
          className="button control-item button-close"
          onClick={closePicker}
        >
          {superProps.closeButtonText}
        </button>
      </footer>
    </div>
  )
}

export default (options) => {
  options = {
    theme: 'dark',
    clearButtonText: '清除',
    closeButtonText: '关闭',
    ...options
  }

  const { includeEditors, excludeEditors } = options

  return {
    type: 'prop-interception',
    includeEditors, excludeEditors,
    interceptor: (editorProps) => {
      editorProps.colorPicker = getColorPicker(options)
      editorProps.colorPickerTheme = options.theme
      editorProps.colorPickerAutoHide = false
      return editorProps
    }
  }
}
