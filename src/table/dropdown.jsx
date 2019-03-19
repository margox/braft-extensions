import './style.scss'
import React from 'react'

export default class extends React.Component{

  state = {
    rows: 3,
    columns: 3
  }
  
  inputValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  confirmInsert = () => {
    this.props.onConfirm(this.state)
  }

  cancelInsert = () => {
    this.props.onCancel()
  }

  componentDidMount () {
    this.setState({
      rows: this.props.defaultRows,
      columns: this.props.defaultColumns
    })
  }

  render () {

    return (
      <div className="bf-table-dropdown-control">
        <input placeholder={this.props.language.columns} className="input" type="text" name="columns" value={this.state.columns} onChange={this.inputValue} />
        <label className="label">x</label>
        <input placeholder={this.props.language.rows} className="input" type="text" name="rows" value={this.state.rows} onChange={this.inputValue} />
        <button disabled={!this.state.rows || !this.state.columns} className="button primary" onClick={this.confirmInsert}>{this.props.language.insertTable}</button>
      </div>
    )

  }

}
