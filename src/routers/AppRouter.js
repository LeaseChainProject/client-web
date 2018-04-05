import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import Header from '../components/Header'
import AddLeasePage from '../components/AddLeasePage'
import LoginPage from '../components/LoginPage'
import NotFoundPage from '../components/NotFoundPage'
import PortfolioOverviewPage from '../components/PortfolioOverviewPage'
import PropertiesOverviewPage from '../components/PropertiesOverviewPage'
import TenantsOverviewPage from '../components/TenantsOverviewPage'
import AddPropertyPage from '../components/AddPropertyPage'
import AddTenantPage from '../components/AddTenantPage'


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <div className="container-fluid">
        <div className="row-fluid">
            <Switch>
              <Route path="/" component={LoginPage} exact={true}/>
              <Route path="/properties-overview" component={PropertiesOverviewPage} />
              <Route path="/tenants-overview" component={TenantsOverviewPage} />
              <Route path="/portfolio-overview" component={PortfolioOverviewPage} />
              <Route path="/add-lease" component={AddLeasePage} />
              <Route path="/add-property" component={AddPropertyPage} />
              <Route path="/add-tenant" component={AddTenantPage} />
              <Route component={NotFoundPage} />
            </Switch>
        </div>
      </div>
    </div>
  </BrowserRouter>
)


export default AppRouter
