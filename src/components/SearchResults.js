import React from 'react'
import ResultsList from './ResultsList'
import ResultHeader from './ResultHeader'

const SearchResults = ({searchResults}) => {
  return (
    <div className="row m-2">
      <div className="col p-2">
        <table className="table table-striped">
            {
              searchResults.data.length >= 1  ?
              <ResultHeader />
              : <thead></thead>
            }
          <ResultsList searchResults={searchResults} />
        </table>
      </div>

    </div>
  )
}

export default SearchResults
