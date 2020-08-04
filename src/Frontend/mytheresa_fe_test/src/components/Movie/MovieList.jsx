import React from 'react'
import TopNav from '../../containers/Topnav'

import DataTable from '../Datatable'

import { connect } from 'react-redux'

import { searchmovie } from '../../services/movie.actions'

const MovieList = (props) => {
  const handleSearchChange = (event) => {
    props.searchmovie(event.target.value.toLowerCase())
  }

  return (
    <>
      <TopNav {...props} onChange={handleSearchChange} />
      <br />
      <DataTable />
    </>
  )
}

const mapDispatchToProps = {
  searchmovie,
}

export default connect(null, mapDispatchToProps)(MovieList)
