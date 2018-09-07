import React from 'react'

const RecordPartiesList = ({party}) => {

      const row = (<li>{party.role}: {party.last_name}, {party.first_name}</li>)

  return <ul id="parties-record-list">{row}</ul>
}

export default RecordPartiesList
