import React from 'react'
import SearchResults from './SearchResults'
import SearchField from './SearchField'

const HomeView = () => {

  return (<div className="container-fluid">
      <SearchField />
      <SearchResults />

  </div>)

}

export default HomeView
