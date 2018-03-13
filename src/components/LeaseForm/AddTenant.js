import React from 'react'
import Tenants from './Tenants'

export default class AddTenant extends React.Component {
  state = {
    error: undefined
  };

  handleAddTenant = (e) => {
    e.preventDefault();

    const tenant = e.target.elements.tenant_id.value.trim();
    const error = this.props.handleAddTenant(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddTenant}>
          <input type="text" name="tenant_id" placeholder="Tenant ID" />
          <button>Add Tenant</button>
        </form>
      </div>
    );
  }
}
