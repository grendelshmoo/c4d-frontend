import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getAllRecords} from '../actions/records'
import SearchResults from './SearchResults'
import SearchField from './SearchField'



class HomeView extends Component {

componentDidMount = () => {
    this.props.getAllRecords()
  }

render () {
  return (<div className="container-fluid">
      <SearchField />
      <SearchResults />

  </div>)
}


}

const mapDispatchToProps = (dispatch) => bindActionCreators({getAllRecords}, dispatch)
export default connect(null, mapDispatchToProps)(HomeView)
