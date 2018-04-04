import React from 'react'
import uuid from 'uuid'

export default class AddUnit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      unit_type: '',
      apartment_number: ''
    }
    this.handleAddUnit = this.handleAddUnit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleAddUnit = (e) => {
    // some validation
    const unit = {
      ...this.state,
      uuid: uuid()
    }
    this.props.handleAddUnit(unit)
    this.setState({
      unit_type: '',
      apartment_number: ''
    })
  }
  handleChange = (e) => {
    const target = e.target
    const name = target.name
    const value = target.value

    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <div className="mt-3 mb-3">
          <input
            placeholder="Unit Type"
            name="unit_type"
            value={this.state.unit_type}
            onChange={this.handleChange}
            />
          <input
            placeholder="Apartment #"
            name="apartment_number"
            value={this.state.apartment_number}
            onChange={this.handleChange}
          />
          <a onClick={this.handleAddUnit} key="addUnitButton"><i className="green fa fa-plus"></i></a>
      </div>
    )
  }

}