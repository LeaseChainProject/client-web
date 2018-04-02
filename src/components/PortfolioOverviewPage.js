import React from 'react'

export default () => (
  <div className="card mt-3">
      <div className="card-header">
          <h2>Portfolio Overview</h2>
      </div>
      <div className="card-body">
          <h5 className="card-title">Here's an overview of your portfolio.</h5>
          <table className="table table-striped table-responsive">
              <thead className="thead">
                <tr>
                  <th>Property ID</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Zipcode</th>
                  <th># Units</th>
                  <th>Occupancy Rate</th>
                  <th>Total Monthly Rent</th>
                  <th>Monthly Rent Due</th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>DGT_250</td>
                      <td>
                          <a href='property.html'>
                            Dan Graca Tower
                          </a>
                      </td>
                      <td>250 W 12th St</td>
                      <td>10023</td>
                      <td>35</td>
                      <td>97%</td>
                      <td>$93,900</td>
                      <td>$40,000</td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>
);