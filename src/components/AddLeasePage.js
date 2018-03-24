import React from 'react';
import AddLeaseForm from './LeaseForm/AddLeaseForm';

const AddLeasePage = () => (

  <div className="col-8 mx-auto my-auto">
    <div className = "card mt-3">
        <div className = "card-header">
            <h2> Add Lease </h2>
        </div>
        <div className = "card-body">
          <AddLeaseForm />
        </div>
    </div>
  </div>

)

export default AddLeasePage;
