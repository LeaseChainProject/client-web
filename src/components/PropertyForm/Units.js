import React from 'react'
import Unit from './Unit'

export default (props) => (
  <div>
    <h4>Units</h4><br/>
    <table className="table">
      <thead>
        <tr>
          <th>Unit #</th>
          <th>Unit Type</th>
          <th>Apartment #</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          props.units.map((unit, index) => (
            <Unit
              uuid={unit.uuid}
              key={unit.uuid}
              unit_type={unit.unit_type}
              idx={index + 1}
              apartment_number={unit.apartment_number}
              handleUnitDelete={props.handleUnitDelete}
            />
          ))
        }
      </tbody>
    </table>
  </div>
)