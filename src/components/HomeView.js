import React from 'react'
import SearchResults from './SearchResults'
import SearchField from './SearchField'

const HomeView = ({updateResults, searchResults}) => {

  return (<div className="container-fluid">

      <SearchField updateResults={updateResults}/>
      <SearchResults searchResults={searchResults}/>
      
  </div>)

}

export default HomeView
