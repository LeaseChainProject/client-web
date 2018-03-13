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
        <form>
          <label>Unit ID
          <input type="text" name="unit_id"
                 value={this.state.unit_id}
                 onChange={this.handleInputChange}/>
          </label>
          <label>Unit Address
          <input type="text" name="unit_address"
                 value={this.state.unit_address}
                 onChange={this.handleInputChange} />
          </label>
          Lease Start Date: <input name="lease_start_date" value={this.state.lease_start_date} />
          Lease End Date: <input name="lease_end_date" value={this.state.lease_end_date} />
          Rent: <input name="monthly_rent" value={this.state.monthly_rent} />
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
