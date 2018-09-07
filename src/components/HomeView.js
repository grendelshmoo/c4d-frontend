import React from 'react'
import SearchResults from './SearchResults'
import SearchField from './SearchField'

const HomeView = ({updateResults, searchResults, setActiveRecord}) => {

  return (<div className="container-fluid">

      <SearchField updateResults={updateResults}/>
      <SearchResults setActiveRecord={setActiveRecord} searchResults={searchResults}/>
      
  </div>)

}

export default HomeView
