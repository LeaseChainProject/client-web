import React from 'react';

export default class LoginPage extends React.Component {
  state = {
    email: "",
    password: ""
  }

  handleLogin = (login_info) => {
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


  render() {
    return (
  <div className="col-xs-12 col-md-6 col-lg-3 mb-3 mx-auto my-auto">
    <div className = "card mt-3">
            <div className = "card-header">
                <h2> Log in</h2>
            </div>
            <div className = "card-body">
        <form className="form-group">
          <label htmlFor="email">Username</label>
          <input type="text"
                className="form-control"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}/>
          <label htmlFor="password">Password</label>
          <input type="password"
                name="password"
                className="form-control"
                value={this.state.password}
                onChange={this.handleInputChange} />
          <button type="submit" id="SubmitButton" className="btn btn-primary" value="submit" name="submit">Sign In</button>
        </form>
        </div>
    </div>
  </div>
    )
  }
}
