import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import DashboardPage from '../components/DashboardPage';
import AddLeasePage from '../components/AddLeasePage';
import LeaseExplorerPage from '../components/LeaseExplorerPage';
import PropertyExplorerPage from '../components/PropertyExplorerPage';
import TenantExplorerPage from '../components/TenantExplorerPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
              <Sidebar />
          </nav>
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <Switch>
              <Route path="/" component={DashboardPage} exact={true}/>
              <Route path="/add-lease" component={AddLeasePage} />
              <Route path="/lease-explorer" component={LeaseExplorerPage} />
              <Route path="/property-explorer" component={PropertyExplorerPage} />
              <Route path="/tenant-explorer" component={TenantExplorerPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </main>
        </div>
      </div>
    </div>
  </BrowserRouter>
);


export default AppRouter;