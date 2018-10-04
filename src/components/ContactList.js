import React from 'react'
import {Link} from 'react-router-dom'

const ContactList = ({contactState}) => {
  const rows = contactState.map(record => {

    return (<tr key={record.id}>
      <td><Link to={`/contacts/${record.id}`}>{record.id}</Link></td>
      <td>{record.last_name}</td>
      <td>{record.first_name}</td>
      <td>{record.mailing_address}</td>
    </tr>)
  })

  return <tbody>{rows}</tbody>

}

export default ContactList
