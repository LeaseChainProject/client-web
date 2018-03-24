import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link className="navbar-brand" to="/"><i className="fa fa-link"></i> LeaseChain</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown"><i className="fa fa-file"></i> Reports
                        </a>
                        <div className="dropdown-menu" >
                            <Link className="dropdown-item blue" to="portfolio"><i className="fa fa-stack-exchange"></i> Portfolio Overview</Link>
                            <Link className="dropdown-item blue" to="property"><i className="fa fa-building"></i> Property Overview</Link>
                            <Link className="dropdown-item blue" to="tenant"><i className="fa fa-users"></i> Tenant Overview</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">
                        <i className="fa fa-plus"></i> Transactions
                        </a>
                        <div className="dropdown-menu" >
                            <Link className="dropdown-item green" to="addproperty"><i className="fa fa-building"></i> Add Property</Link>
                            <Link className="dropdown-item green" to="addlease"><i className="fa fa-file"></i> Add Lease</Link>
                            <Link className="dropdown-item green" to="addtenant"><i className="fa fa-users"></i> Add Tenant</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
);

export default Header;
