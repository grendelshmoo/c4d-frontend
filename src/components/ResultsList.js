import React from 'react'
import moment from 'moment'
import PartiesList from './PartiesList'
import {Link} from 'react-router-dom'

const ResultsList = ({searchResults}) => {
  const rows = searchResults.data.map(record => {

    return (<tr key={record.id}>
      <th scope="row"><Link to={`/records/${record.id}`}> {record.id}</Link></th>
      <td>{moment(record.recording_date).format("MM/DD/YY")}</td>
      <td>{record.document_type}</td>
      <td>{record.parties.map((party, i) => <PartiesList key={i} party={party}/>)}</td>
      <td>{record.legal_description}</td>
    </tr>)
  })

  return <tbody>{rows}</tbody>

}

export default ResultsList
