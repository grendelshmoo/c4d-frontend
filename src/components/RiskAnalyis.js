import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

function getLink(ele) {
  if (ele.contact_id)
    return (<Link to={`/contacts/${ele.contact_id}`}>{ele.contact_id}</Link>)
  if (ele.document_id)
    return (<Link to={`/records/${ele.document_id}`}>{ele.document_id}</Link>)

}

function getPill(ele) {
  if (ele.risk === "High")
    return (<span className="badge badge-pill badge-danger">High</span>)
  if (ele.risk === "Med")
    return (<span className="badge badge-pill badge-warning">Med</span>)
  if (ele.risk === "Low")
    return (<span className="badge badge-pill badge-info">Low</span>)
}

const RiskAnalyis = ({loading, riskAnalysisResults}) => {
  // add spinner here
  if (loading)
    return <span>Loading</span>
  console.log("Risk Results", riskAnalysisResults)

  const rows = riskAnalysisResults.map((ele, i) => {
    return (
      <tr key={i}>
        <td>{getPill(ele)}</td>
        <td>{ele.message}</td>
        <td>{getLink(ele)}</td>
      </tr>
    )
  })
  return (<table className="table table-sm"><tbody>{rows}</tbody></table>)
}

const mapStateToProps = ({properties}) => ({riskAnalysisResults: properties.riskAnalysisResults.data, loading: properties.riskAnalysisResults.loading})

export default connect(mapStateToProps, null)(RiskAnalyis)
