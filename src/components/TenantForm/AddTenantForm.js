import React from 'react'

export default class AddTenantForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tenant_name: '',
      tenant_dob: '',
      tenant_email: '',
      tenant_phone: '',
      income: '',
      credit_score: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // send the value in state
    const options = {
      method: 'POST',
      body: JSON.stringify({
        tenant_name: this.state.tenant_name,
        tenant_dob: this.state.tenant_dob,
        tenant_email: this.state.tenant_email,
        tenant_phone: this.state.tenant_phone,
        income: this.state.income,
        credit_score: this.state.credit_score 
      }),
      headers: {
        'Content-Type': "application/json"
      },
      mode: 'cors'
    }

    fetch('http://localhost:3000/add-tenant', options)
    .then((res) => console.log(res))
  }



  render() {
    return (
      <div className="col-lg-6 col-md-8 col-xs-10">
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <h4>Tenant Information</h4>
            <br/>
            <div className="form-group">
              <label>Tenant Name</label>
              <input
                type="text"
                className="form-control"
                id="tenant_name"
                name="tenant_name"
                value={this.state.tenant_name}
                onChange={this.handleChange}
                />
              <small>Name of the Tenant</small>
            </div>
            <div className="form-group">
              <label>Tenant DOB</label>
              <input
                type="date"
                className="form-control"
                id="tenant_dob"
                name="tenant_dob"
                value={this.state.tenant_dob}
                onChange={this.handleChange}
              />
              <small>Date of Birth of the Tenant</small>
            </div>
            <div className="form-group">
              <label>Tenant Phone</label>
              <input
                type="text"
                className="form-control"
                id="tenant_phone"
                name="tenant_phone"
                value={this.state.tenant_phone}
                onChange={this.handleChange}
                />
              <small>Phone number</small>
            </div>
            <div className="form-group">
              <label>Tenant Email</label>
              <input
                type="email"
                className="form-control"
                id="tenant_email"
                name="tenant_email"
                value={this.state.tenant_email}
                onChange={this.handleChange}
                />
              <small>Email</small>
            </div>
            <div className="form-group">
              <label>Income</label>
              <input
                type="text"
                className="form-control"
                id="income"
                name="income"
                value={this.state.income}
                onChange={this.handleChange}
                />
              <small>Income of the tenant (per annum)</small>
            </div>
            <div className="form-group">
              <label>Credit Score</label>
              <input
                type="text"
                className="form-control"
                id="credit_score"
                name="credit_score"
                value={this.state.credit_score}
                onChange={this.handleChange}
                />
              <small>Credit Score</small>
            </div>
        <button type="submit" className="btn btn-primary">Submit</button>&nbsp;&nbsp;&nbsp;<button type="submit" className="btn btn-secondary">Preview</button>
        </fieldset>
        </form>
      </div>
    )
  }
}