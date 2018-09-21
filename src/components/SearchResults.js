import React from 'react'
import {connect} from 'react-redux'
import ResultsList from './ResultsList'
import ResultHeader from './ResultHeader'

const SearchResults = ({searchResults}) => {
  console.log('SEARCH RESULTS LENGTH:', searchResults.data.length)
  return (
    <div className="row m-2">
      <div className="col p-2">
        <table className="table table-striped">
            {
              searchResults.data.length >= 1  ?
              <ResultHeader />
              : <thead></thead>
            }
            <ResultsList />
        </table>
      </div>

    </div>
  )
}

const mapStateToProps = ({records}) => ({
  searchResults: records.searchResults
})
export default connect(mapStateToProps, null)(SearchResults)
