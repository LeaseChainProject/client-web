import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
    <Link className="navbar-brand col-sm-3 col-md-2 mr-0" to="/">LeaseChain</Link>
    <ul className="navbar-nav px-3">
      <li className="nav-item text-nowrap">
        <a className="nav-link" href="#">Sign out</a>
      </li>
    </ul>
  </nav>
);

export default Header;