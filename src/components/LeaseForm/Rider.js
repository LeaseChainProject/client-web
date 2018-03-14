import React from 'react'

const Rider = (props) => (
  <input key={props.riderName} type="checkbox" name={props.riderName} />
)

export default Rider;