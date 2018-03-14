import React from 'react';
import AddTenant from './AddTenant'
import Tenants from './Tenants'

export default class AddLeaseForm extends React.Component {
  state = {
    unit_id: '',
    unit_address: '',
    tenants: [],
    lease_start_date: '',
    lease_end_date: '',
    monthly_rent: '',
    riders: [],
    selected_riders: []
  }

  handleLeaseTerms = (lease_terms) => {
    e.preventDefault();
    // console.log("function called");
    // lease_terms = e.target.elements;

    // this.setState(() => ({
    //   unit_id: lease_terms.unit_id.value,
    //   unit_address: lease_terms.unit_address.value,
    //   lease_start_date: lease_terms.lease_start_date.value,
    //   lease_end_date: lease_terms.lease_end_date.value,
    //   monthly_rent: lease_terms.rent.value
    // }));
  }

  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState(() => ({
      [name]: value
    }));
  }

  handleAddTenant = (tenant) => {

  }

  handleDeleteTenant = (tenant_id) => {
    this.setState(() => ({

    }))
  }

  render() {
    return (
      <div>
        <form className="form-group">
          <label htmlFor="unit_id">Unit ID</label>
          <input type="text"
                 className="form-control"
                 name="unit_id"
                 value={this.state.unit_id}
                 onChange={this.handleInputChange}/>
          <label htmlFor="unit_address">Unit Address</label>
          <input type="text"
                 name="unit_address"
                 className="form-control"
                 value={this.state.unit_address}
                 onChange={this.handleInputChange} />
          <label htmlFor="lease_start_date">Lease Start Date</label>
          <input type="text"
                 name="lease_start_date"
                 className="form-control"
                 value={this.state.lease_start_date}
                 onChange={this.handleInputChange} />
          <label htmlFor="lease_end_date">Lease End Date</label>
          <input type="text"
                 name="lease_end_date"
                 className="form-control"
                 value={this.state.lease_end_date}
                 onChange={this.handleInputChange} />
          <label htmlFor="monthly_rent">monthly_rent</label>
          <input type="text"
                 name="monthly_rent"
                 className="form-control"
                 value={this.state.monthly_rent}
                 onChange={this.handleInputChange} />
          <input type="submit" />
        </form>
        <AddTenant />
        <Tenants 
          tenants={this.state.tenants}
          handleDeleteTenant={this.handleDeleteTenant}
          />
      </div>
    )
  }
}
