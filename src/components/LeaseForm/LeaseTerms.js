import React from 'react';

export default class LeaseTerms extends React.Component {

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("function called");
    this.props.handleLeaseTerms(e.target.elements);
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        Unit ID: <input name="unit_id" />
        Unit Address: <input name="unit_address" />
        Lease Start Date: <input name="lease_start_date" />
        Lease End Date: <input name="lease_end_date" />
        Rent: <input name="rent" />
        <input type="submit" />
      </form>
    )
  }
}
