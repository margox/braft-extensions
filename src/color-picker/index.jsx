import './styles.scss'
import React from 'react'
import { SketchPicker } from 'react-color'

const getColorPicker = (superProps) => ({ onChange, color, presetColors, ...props }) => {

  const handleChange = (colorObject) => {
    if (colorObject.hex === color) {
      return false
    }
    onChange(colorObject.hex, false)
    superProps.onChange && superProps.onChange(colorObject.hex)
  }

  const clearColor = () => onChange(color, false)
  const closePicker = () => onChange(null, true)

  color = color || presetColors[0]

  return (
    <div className={`braft-color-picker ${superProps.theme}-theme`}>
      <SketchPicker color={color} presetColors={presetColors} onChangeComplete={handleChange} {...props}/>
      <footer className="footer">
        <button type="button" className="button control-item button-clear" onClick={clearColor} disabled={!color}>{superProps.clearButtonText}</button>
        <button type="button" className="button control-item button-close" onClick={closePicker}>{superProps.closeButtonText}</button>
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
      return editorProps
    }
  }

}