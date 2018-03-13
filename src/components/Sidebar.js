import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => (
  <div>
  <h2>LC Sidebar</h2>
  <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
  <NavLink to="/add-lease" activeClassName="is-active">Add Lease</NavLink>
  <NavLink to="/lease-explorer" activeClassName="is-active">Lease Explorer</NavLink>
  <NavLink to="/property-explorer" activeClassName="is-active">Property Explorer</NavLink>
  <NavLink to="/tenant-explorer" activeClassName="is-active">Tenant Explorer</NavLink>
  </div>
);

export default Sidebar;