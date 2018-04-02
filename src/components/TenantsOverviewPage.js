import React from 'react';

const TenantExplorerPage = () => (
  <div className="card mt-3">
    <div className="card-header">
      <h2>Tenant Overview </h2>
    </div>
    <div className = "card-body">
      <h5 className = "card-title"> Here's an overview of all tenants.</h5>
      <table className="table table-striped table-responsive">
        <thead>
          <tr>
            <th>Tenant ID</th>
            <th>Property ID</th>
            <th>Unit ID</th>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Phone</th>
            <th>E-mail</th>
            <th>Credit Score</th>
            <th>Income</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tenant_1</td>
            <td>
              <a href='property.html'>
                DGT-250
              </a>
            </td>
            <td>1_101_2BR/2BA</td>
            <td>Dan Graca</td>
            <td>01/01/1987</td>
            <td>349273748</td>
            <td>Dan@cbs.com</td>
            <td>800</td>
            <td>$150,000</td>
          </tr>
          <tr>
            <td>Tenant_2</td>
            <td>
              <a href='property.html'>
              DGT-250 
              </a>
            </td>
            <td>1_102_2BR/1BA</td>
            <td>Sahil Manocha</td>
            <td>01/01/1987</td>
            <td>349273748</td>
            <td>sahil@cbs.com</td>
            <td>500</td>
            <td>$150,000</td>
          </tr>
          <tr>
            <td>Tenant_3</td>
            <td>
              <a href='property.html'>
                DGT-250
              </a>
            </td>
            <td>1_201_2BR/2BA</td>
            <td>Patrick Keppenne</td>
            <td>01/01/1987</td>
            <td>349273748</td>
            <td>patrick@cbs.com</td>
            <td>607</td>
            <td>$150,000</td>
          </tr>
        </tbody>
      </table>
      <br />
      <a href="addtenant.html"> <h4 className="green"><i className="fa fa-plus"></i> Add Tenant</h4></a>
    </div>
  </div>
)

export default TenantExplorerPage;