import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const PropertiesList = ({searchResults}) => {

  const rows = searchResults.data.map(record => {

    return (<tr key={record.id}>
      <th scope="row">
        <Link to={`/properties/${record.id}`}>{record.legal_description}</Link>
      </th>
      <td>{record.street_address}</td>
      <td>{record.building_type}</td>
      <td>{record.municipality}</td>
      <td>{record.island}</td>
    </tr>)
  })

  return <tbody>{rows}</tbody>

}

const mapStateToProps = ({properties}) => ({searchResults: properties.searchResults})
// const mapDispatchToProps = (dispatch) => bindActionCreators({keyWord}, dispatch)
export default connect(mapStateToProps, null)(PropertiesList)
