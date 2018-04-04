import React from 'react';

export default class AddLeaseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // TODO
      unit_id: '',
      unit_address: '',
      unit_type: '',
      tenants: [],
      lease_start_date: '',
      lease_end_date: '',
      monthly_rent: '',
      riders: [],
      selected_riders: [],
      property_id: "",
      property_id_options: [],
      apartment_number: "",
      apartment_number_options: [],
      tenant_email: "",
      tenant_email_options: [],
      units_options: [],
      filtered_units_options: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePropertyChange = this.handlePropertyChange.bind(this)
    this.handleApartmentNumberChange = this.handleApartmentNumberChange.bind(this)
  }

  componentDidMount() {
    const options = {
      method: 'GET',
      cors: 'no-cors',
      headers: {
        'Content-Type': "application/json"
      }
    }
    fetch('http://localhost:3000/properties', options)
    .then((res) => (res.json()))
    .then((properties) => {
      const property_ids = properties.map(property => property.property_id)
      console.log(property_ids)
      this.setState((prevState) => ({
        ...prevState,
        property_id_options: property_ids
      }))
    })
    fetch('http://localhost:3000/tenants', options)
    .then((res) => (res.json()))
    .then((tenants) => {
      const tenant_emails = tenants.map(tenant => tenant.tenant_email)
      console.log(tenant_emails)
      this.setState((prevState) => ({
        ...prevState,
        tenant_email_options: tenant_emails
      }))
    })
    fetch('http://localhost:3000/units', options)
    .then((res) => (res.json()))
    .then((units) => {
      units = units.map(({property_id, unit_type, apartment_number}) => {
        return {
          property_id,
          unit_type,
          apartment_number
        }
      })
      this.setState((prevState) => ({
        ...prevState,
        units_options: units
      }))
    })
  }


  handleSubmit = (e) => {
    e.preventDefault();
    // send the value in state
    const options = {
      method: 'POST',
      body: JSON.stringify({
        lease_start_date: this.state.lease_start_date,
        lease_end_date: this.state.lease_end_date,
        monthly_rent: this.state.monthly_rent,
        property_id: this.state.property_id,
        apartment_number: this.state.apartment_number,
        unit_type: this.state.unit_type,
        tenant_email: this.state.tenant_email,
      }),
      headers: {
        'Content-Type': "application/json"
      },
      mode: 'cors'
    }

    fetch('http://localhost:3000/add-lease', options)
    .then((res) => console.log(res))
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState(() => ({
      [name]: value
    }));
  }

  handlePropertyChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const filtered_units_options = this.state.units_options.filter(unit => unit.property_id === value)
    const apartment_number_options = filtered_units_options.map(unit => unit.apartment_number)
    
    this.setState(() => ({
      [name]: value,
      apartment_number_options,
      filtered_units_options
    }));
  }

  handleApartmentNumberChange = (e) => {
    const name = e.target.name;
    const value = parseInt(e.target.value, 10)
    console.log(this.state.filtered_units_options)
    const unit_type = this.state.filtered_units_options.filter((unit) => unit.apartment_number === value)[0].unit_type
    this.setState({
      [name]: value,
      unit_type
    })
  }

  render() {
    return (
      <div className="col-lg-6 col-md-8 col-xs-10">
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <h4>Add a new lease record here.</h4>
            <br />
            <div className="form-group">
              <label htmlFor="Property">Property</label>
                <select
                 className="form-control"
                 id="property_id"
                 name="property_id"
                 value={this.state.property_id}
                 onChange={this.handlePropertyChange}>
                  {
                    this.state.property_id_options.map((property_id_option) => (
                      <option
                        key={property_id_option}
                        value={property_id_option}>
                        {property_id_option}
                      </option>
                    ))
                  }
                </select>
                <small id="Propertysmall">Property ID</small>
          </div>

          <div className="form-group">
              <label htmlFor="apartment_number">Apartment Number</label>
                <select
                 className="form-control"
                 id="apartment_number"
                 name="apartment_number"
                 value={this.state.apartment_number}
                 onChange={this.handleApartmentNumberChange}>
                  {
                    this.state.apartment_number_options.map((apartment_number_option) => (
                      <option
                        key={apartment_number_option}
                        value={apartment_number_option}>
                        {apartment_number_option}
                      </option>
                    ))
                  }
                </select>
              <small id="ApartmentNumberSmall">Apartment Number</small>
          </div>

          <div className="form-group">
              <label htmlFor="unit_type">Unit Type</label>
              <input type="text"
                     readOnly
                     className="form-control"
                     id="unit_type"
                     name="unit_type" 
                     value={this.state.unit_type} />
              <small id="UnitTypesmall">Type of the Unit</small>
          </div>
          <div className="form-group">
              <label htmlFor="tenant_email">Tenant e-mail</label>
              <select
                className="form-control"
                id="tenant_email"
                name="tenant_email"
                value={this.state.tenant_email}
                onChange={this.handleChange}>
                {
                  this.state.tenant_email_options.map((tenant_email_option) => (
                    <option
                      key={tenant_email_option}
                      value={tenant_email_option}>
                      {tenant_email_option}
                    </option>
                  ))
                }
              </select>
              <small id="Tenantemailsmall">Tenant e-mail</small>
          </div>
          <div className="form-group">
              <label htmlFor="lease_start_date">Lease From Date</label>
              <input type="date"
                     className="form-control"
                     id="lease_start_date"
                     name="lease_start_date" 
                     value={this.state.lease_start_date}
                     onChange={this.handleChange} />
              <small id="LeaseFromDatesmall">Lease Start Date</small>
          </div>
          <div className="form-group">
              <label htmlFor="lease_end_date">Lease To Date</label>
              <input type="date"
                     className="form-control"
                     id="lease_end_date"
                     name="lease_end_date" 
                     value={this.state.lease_end_date}
                     onChange={this.handleChange} />
              <small id="LeaseToDatesmall">Lease End Date</small>
          </div>
          <div className="form-group">
              <label htmlFor="monthly_rent">Monthly Rent</label>
              <input type="text"
                     className="form-control"
                     id="monthly_rent"
                     name="monthly_rent" 
                     value={this.state.monthly_rent}
                     onChange={this.handleChange} />
              <small id="MonthlyRentsmall">Rent per month</small>
          </div>
        <button type="submit" className="btn btn-primary">Submit</button>&nbsp;&nbsp;&nbsp;<button type="submit" className="btn btn-secondary">Preview</button>
          </fieldset>
        </form>
      </div>
    )
  }
}
