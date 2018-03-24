import React from 'react';

export default class AddLeaseForm extends React.Component {
  state = {
    // TODO
    unit_id: '',
    unit_address: '',
    tenants: [],
    lease_start_date: '',
    lease_end_date: '',
    monthly_rent: '',
    riders: [],
    selected_riders: [],
    PropertyName: "",
    PropertyNameOptions: ["Dan Graca Tower", "Sahil Manocha Properties", "Patrick Keppenne Condos", "528 Riverside Drive"],
    ApartmentNumber: "",
    ApartmentNumberOptions: [401, 402, 403, 404],
    TenantEmail: "",
    TenantEmailOptions: ["sahil@gmail.com", "manocha@gmail.com"]
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

  handleAddTenant = (tenant_id) => {
    this.setState((prevState) => ({
      tenants: prevState.tenants.concat(tenant_id)
    }));
  }

  handleDeleteTenant = (tenantIDToRemove) => {
    this.setState((prevState) => ({
      tenants: prevState.tenants.filter((tenantID) => tenantIDToRemove !== tenantID)
    }));
  };


  render() {
    return (
      <div className="col-lg-6 col-md-8 col-xs-10">
        <form>
          <fieldset>
            <h4>Add a new lease record here.</h4>
            <br />
            <div className="form-group">
              <label htmlFor="Property">Property</label>
                <select
                 className="form-control"
                 id="PropertyName"
                 name="PropertyName"
                 value={this.state.PropertyName}
                 onChange={this.handleChange}>
                  {
                    this.state.PropertyNameOptions.map((PropertyNameOption) => (
                      <option
                        key={PropertyNameOption}
                        value={PropertyNameOption}>
                        {PropertyNameOption}
                      </option>
                    ))
                  }
                </select>
                <small id="Propertysmall">Property Name</small>
          </div>

          <div className="form-group">
              <label htmlFor="ApartmentNumber">Apartment Number</label>
                <select
                 className="form-control"
                 id="ApartmentNumber"
                 name="ApartmentNumber"
                 value={this.state.ApartmentNumber}
                 onChange={this.handleChange}>
                  {
                    this.state.ApartmentNumberOptions.map((ApartmentNumberOption) => (
                      <option
                        key={ApartmentNumberOption}
                        value={ApartmentNumberOption}>
                        {ApartmentNumberOption}
                      </option>
                    ))
                  }
                </select>
              <small id="ApartmentNumberSmall">Apartment Number</small>
          </div>

          <div className="form-group">
              <label htmlFor="UnitType">Unit Type</label>
              <input type="text"
                     readOnly
                     className="form-control"
                     id="UnitType"
                     name="UnitType" 
                     value={this.state.UnitType} />
              <small id="UnitTypesmall">Type of the Unit</small>
          </div>
          <div className="form-group">
              <label htmlFor="TenantEmail">Tenant e-mail</label>
              <select
                className="form-control"
                id="TenantEmail"
                name="TenantEmail"
                value={this.state.TenantEmail}
                onChange={this.handleChange}>
                {
                  this.state.TenantEmailOptions.map((TenantEmailOption) => (
                    <option
                      key={TenantEmailOption}
                      value={TenantEmailOption}>
                      {TenantEmailOption}
                    </option>
                  ))
                }
              </select>
              <small id="Tenantemailsmall">Tenant e-mail</small>
          </div>
          <div className="form-group">
              <label htmlFor="LeaseType">Deposit Amount</label>
              <input type="text"
                     className="form-control"
                     id="LeaseType"
                     name="LeaseType" 
                     value={this.state.LeaseType}
                     onChange={this.handleInputChange} />
              <small id="LeaseTypesmall">Deposit Amount</small>
          </div>
          <div className="form-group">
              <label htmlFor="LeaseFromDate">Lease From Date</label>
              <input type="date"
                     className="form-control"
                     id="LeaseFromDate"
                     name="LeaseFromDate" 
                     value={this.state.LeaseFromDate}
                     onChange={this.handleInputChange} />
              <small id="LeaseFromDatesmall">Lease Start Date</small>
          </div>
          <div className="form-group">
              <label htmlFor="LeaseToDate">Lease To Date</label>
              <input type="date"
                     className="form-control"
                     id="LeaseToDate"
                     name="LeaseToDate" 
                     value={this.state.LeaseToDate}
                     onChange={this.handleInputChange} />
              <small id="LeaseToDatesmall">Lease End Date</small>
          </div>
          <div className="form-group">
              <label htmlFor="MonthlyRent">Monthly Rent</label>
              <input type="text"
                     className="form-control"
                     id="MonthlyRent"
                     name="MonthlyRent" 
                     value={this.state.MonthlyRent}
                     onChange={this.handleInputChange} />
              <small id="MonthlyRentsmall">Rent per month</small>
          </div>
        <button type="submit" className="btn btn-primary">Submit</button>&nbsp;&nbsp;&nbsp;<button type="submit" className="btn btn-secondary">Preview</button>
          </fieldset>
        </form>
      </div>
    )
  }
}
