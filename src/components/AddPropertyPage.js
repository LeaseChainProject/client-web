import React from 'react'
import AddPropertyForm from './PropertyForm/AddPropertyForm'

export default () => (
  <div className="col-8 mx-auto my-auto">
    <div className = "card mt-3">
      <div className = "card-header">
          <h2> Add Property </h2>
      </div>
      <div className = "card-body">
        <AddPropertyForm />
      </div>
    </div>
  </div>
)