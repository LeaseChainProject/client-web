import React from 'react';
import Tenant from './Tenant';

const Tenants = (props) => (
  <div>
    {
      props.tenants.map((tenant_id) => (
        <Tenant
          key={tenant_id}
          tenantText={tenant_id}
          handleDeleteTenant={props.handleDeleteTenant}
        />
      ))
    }
  </div>
);

export default Tenants;
