import React from 'react'

const ContactList = ({contactState}) => {
  const rows = contactState.map(record => {

    return (<tr>
      <td>{record.last_name}</td>
      <td>{record.first_name}</td>
      <td>{record.mailing_address}</td>
    </tr>)
  })

  return <tbody>{rows}</tbody>

}

export default ContactList
