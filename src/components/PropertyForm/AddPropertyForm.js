import React from 'react'
import Units from './Units.js'
import AddUnit from './AddUnit.js'

export default class AddPropertyForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      property_name: '',
      address: '',
      zipcode: '',
      num_units: '',
      property_id: '',
      units: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUnitDelete = this.handleUnitDelete.bind(this);
    this.handleAddUnit = this.handleAddUnit.bind(this);
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  handleAddUnit = (unit) => {
    this.setState((prevState, props) => {
      return {
        units: [...prevState.units, unit]
      }
    })
    console.log(unit);
  }

  handleUnitDelete = (uuid) => {
    const units = this.state.units.filter(unit => unit.uuid !== uuid)
    this.setState({
      units
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // send the value in state
    const options = {
      method: 'POST',
      body: JSON.stringify({
        property_name: this.state.property_name,
        address: this.state.address,
        zipcode: this.state.zipcode,
        num_units: this.state.num_units,
        property_id: this.state.property_id,
        units: this.state.units
      }),
      headers: {
        'Content-Type': "application/json"
      },
      mode: 'cors'
    }

    fetch('http://localhost:3000/add-property', options)
    .then((res) => console.log(res))
  }

  render() {
    return (
      <div className="col-lg-6 col-md-8 col-xs-10">
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <h4>Add a new property here.</h4><br/>
            <div className="form-group">
              <label htmlFor="property_name">Property Name</label>
              <input 
                type="text"
                className="form-control"
                id="property_name"
                name="property_name"
                value={this.state.property_name}
                onChange={this.handleChange} />
              <small id="PropertyNamesmall">Name of the property</small>
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input 
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={this.state.address}
                onChange={this.handleChange} />
              <small id="Addresssmall">Street Address</small>
            </div>
            <div className="form-group">
              <label htmlFor="property_id">Property ID</label>
              <input 
                type="text"
                className="form-control"
                id="property_id"
                name="property_id"
                value={this.state.property_id}
                onChange={this.handleChange} />
              <small id="Propertysmall">Unique ID for Property</small>
            </div>
            <div className="form-group">
              <label htmlFor="zipcode">Zip Code</label>
              <input 
                type="text"
                className="form-control"
                id="zipcode"
                name="zipcode"
                value={this.state.zipcode}
                onChange={this.handleChange} />
              <small id="Zipcodesmall">5- or 9-digit ZIP Code</small>
            </div>
            <div className="form-group">
              <label htmlFor="num_units"># Units</label>
              <input 
                type="text"
                className="form-control"
                id="num_units"
                name="num_units"
                value={this.state.num_units}
                onChange={this.handleChange} />
              <small id="NumberofUnitssmall">Number of Units in the property</small>
            </div>
            <br/>
            <Units units={this.state.units} handleUnitDelete={this.handleUnitDelete}/>
            <AddUnit handleAddUnit={this.handleAddUnit}/>
            <button type="submit" className="btn btn-primary">Create</button>&nbsp;&nbsp;&nbsp;<button type="submit" className="btn btn-secondary">Edit</button>
        </fieldset>
      </form>
    </div>
    )
  }
}