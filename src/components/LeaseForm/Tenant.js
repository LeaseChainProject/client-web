import React from 'react'

const Tenant = (props) => (
  <div>
    {props.tenantText}
    <button
      onClick={(e) => {
        props.handleDeleteTenant(props.tenantText);
      }}
    >
      remove
    </button>
  </div>
);

export default Tenant;
