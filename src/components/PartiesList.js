import React from 'react'

const PartiesList = ({party}) => {

      const row = (<li>{party.role}: {party.last_name}, {party.first_name}</li>)

  return <ul id="parties-list">{row}</ul>
}

export default PartiesList
