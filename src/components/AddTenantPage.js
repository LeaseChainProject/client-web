import React from 'react'
import AddTenantForm from './TenantForm/AddTenantForm'

export default () => (
  <div className="col-8 mx-auto my-auto">
    <div className = "card mt-3">
      <div className = "card-header">
          <h2> Add Tenant </h2>
      </div>
      <div className = "card-body">
        <AddTenantForm />
      </div>
    </div>
  </div>
)