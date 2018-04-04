import React from 'react'

export default (props) => (
  <tr>
    <td>{props.idx}</td>
    <td>{props.unit_type}</td>
    <td>{props.apartment_number}</td>
    <td><a onClick={() => {
      props.handleUnitDelete(props.uuid)
    }}><i className="blue fa fa-times"></i></a></td>
  </tr>
)