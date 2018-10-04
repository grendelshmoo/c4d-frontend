import React from 'react'
import moment from 'moment'
import PartiesList from './PartiesList'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux'
// import {keyWord} from '../actions/records'

// need to fix onlick setActiveRecord (look at original app.js)

const ResultsList = ({searchResults, activeRecord}) => {

  const rows = searchResults.data.map(record => {

    return (<tr key={record.id}>
      <th scope="row"><Link onClick={activeRecord} to={`/records/${record.id}`}> {record.id}</Link></th>
      <td>{moment(record.recording_date).format("MM/DD/YY")}</td>
      <td>{record.document_type}</td>
      <td>{record.parties.map((party, i) => <PartiesList key={i} party={party}/>)}</td>
      <td>{record.legal_description}</td>
    </tr>)
  })

  return <tbody>{rows}</tbody>

}

const mapStateToProps = ({records}) => ({
  searchResults: records.searchResults,
  activeRecord: records.activeRecord
})
// const mapDispatchToProps = (dispatch) => bindActionCreators({keyWord}, dispatch)
export default connect(mapStateToProps, null)(ResultsList)
