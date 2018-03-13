import React from 'react';

const Tenants = (props) => (
  <div>
    {
      props.tenants.map((tenant_id) => (
        <Tenant
          key={tenant_id}
          optionText={tenant}
          handleDeleteTenant={props.handleDeleteTenant}
        />
      ))
    }
  </div>
);

export default Tenants;
