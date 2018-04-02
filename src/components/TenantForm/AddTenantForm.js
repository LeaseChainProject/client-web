import React from 'react'

export default class AddTenantForm extends React.Component {
  render() {
    return (
      <div className="col-lg-6 col-md-8 col-xs-10">
        <form>
          <fieldset>
            <h4>Tenant Information</h4>
            <br/>
            <div className="form-group">
              <label>Tenant Name</label>
              <input type="text" className="form-control" id="TenantName" name="TenantName" />
              <small>Name of the Tenant</small>
            </div>
            <div className="form-group">
              <label>Tenant DOB</label>
              <input type="date" className="form-control" id="TenantDOB" name="TenantDOB" />
              <small>Date of Birth of the Tenant</small>
            </div>
            <div className="form-group">
              <label>Tenant Phone</label>
              <input type="text" className="form-control" id="TenantPhone" nane="TenantPhone" />
              <small>Phone number</small>
            </div>
            <div className="form-group">
              <label>Tenant Email</label>
              <input type="email" className="form-control" id="TenantEmail" name="TenantEmail" />
              <small>Email</small>
            </div>
            <div className="form-group">
              <label>Income</label>
              <input type="text" className="form-control" id="TenantIncome" name="TenantIncome" />
              <small>Income of the tenant (per annum)</small>
            </div>
            <div className="form-group">
              <label>Credit Score</label>
              <input type="text" className="form-control" id="TenantCreditScore" name="TenantCreditScore" />
              <small>Credit Score</small>
            </div>
        <button type="submit" className="btn btn-primary">Submit</button>&nbsp;&nbsp;&nbsp;<button type="submit" className="btn btn-secondary">Preview</button>
        </fieldset>
        </form>
      </div>
    )
  }
}