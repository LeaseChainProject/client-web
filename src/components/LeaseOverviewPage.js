import React from 'react';

const Lease = (props) => (
  <div className="lease-card">
  Tenants: 
  <ul className="tenant-list">
    { 
      props.lease.tenants.map((tenant) =>
        <li key={tenant}>{tenant}</li>
      )
    }
  </ul>
  <a href="etherscan.io">Contract link on etherscan</a>
  <p>Signing Date: {props.lease.lease_signing_date}</p>
  <p>End Date: {props.lease.lease_end_date}</p>
  <p>Monthly Rent: {props.lease.monthly_rent}</p>
  <p>Unit ID: {props.lease.unit_id} </p>
  </div>
)

const leases = [
  {
    tenants: [1,2,3],
    lease_signing_date: "11-22-2014",
    lease_end_date: "11-21-2015",
    monthly_rent: "2000",
    unit_id: "8979cxa"
  },
  {
    tenants: [80, 891, 129],
    lease_signing_date: "11-22-2014",
    lease_end_date: "11-21-2015",
    monthly_rent: "2000",
    unit_id: "8979caa"
  }
];

// somehow retrieve leases
// returns list of lease objects. each object
// has the above properties

// get leases

const LeaseExplorerPage = () => (
  <div>
    <h2>Lease Explorer</h2>
    {leases.map((lease) => (
      <Lease lease={lease} key={lease.unit_id}/>
    ))} 
  </div>

  // view active leases
)

export default LeaseExplorerPage;