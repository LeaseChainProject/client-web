import React from 'react';
import { NavLink } from 'react-router-dom';


const SideBarItem = (props) => (
  <li className="nav-item">
    <NavLink to={props.to} activeClassName={props.activeClassName} exact={!!props.exact} >{props.children}</NavLink>
  </li>
)

const Sidebar = () => (
    <div className="sidebar-sticky">
      <ul className="nav flex-column">
        <SideBarItem to="/" activeClassName="is-active" exact={true}>Dashboard</SideBarItem>
        <SideBarItem to="/add-lease" activeClassName="is-active">Add Lease</SideBarItem>
        <SideBarItem to="/lease-explorer" activeClassName="is-active">Lease Explorer</SideBarItem>
        <SideBarItem to="/property-explorer" activeClassName="is-active">Property Explorer</SideBarItem>
        <SideBarItem to="/tenant-explorer" activeClassName="is-active">Tenant Explorer</SideBarItem>
      </ul>
    </div>
);

export default Sidebar;