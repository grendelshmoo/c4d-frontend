import React from 'react'
import moment from 'moment'
import PartiesList from './PartiesList'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const ChainOfTitleList = ({titleChain}) => {
  const rows = titleChain.data.map(record => {
    return (<tr key={record.id}>
      <td>{moment(record.recording_date).format("MM/DD/YY")}</td>
      <td>{record.parties.map((party, i) => <PartiesList key={i} party={party}/>)}</td>
      <td>
        <Link to={`/records/${record.id}`}>
          {record.id}</Link>
      </td>
    </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

const mapStateToProps = ({properties}) => ({titleChain: properties.titleChain})
export default connect(mapStateToProps, null)(ChainOfTitleList)
