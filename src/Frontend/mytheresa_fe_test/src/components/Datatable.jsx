import React from 'react'
import MaterialTable from 'material-table'
import { forwardRef } from 'react'

import Check from '@material-ui/icons/Check'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import Clear from '@material-ui/icons/Clear'
import DeleteOutline from '@material-ui/icons/DeleteOutline'
import FilterList from '@material-ui/icons/FilterList'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Remove from '@material-ui/icons/Remove'
import ViewColumn from '@material-ui/icons/ViewColumn'
import { removemovie } from '../services/movie.actions'

import { connect } from 'react-redux'

const DataTable = (props) => {
  const tableIcons = {
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  }

  const columns = [
    {
      title: 'Poster',
      field: 'url',
      render: (rowData) => (
        <img
          src={`https://image.tmdb.org/t/p/w400/${rowData.poster_path}`}
          style={{ width: '20%' }}
          alt={rowData.title}
        />
      ),
    },
    { title: 'Title', field: 'title' },
  ]

  const handleRemove = (movie) => {
    props.removemovie(movie)
  }

  return (
    <div style={{ padding: 10 }}>
      <MaterialTable
        icons={tableIcons}
        title="User's watch list"
        columns={columns}
        data={props.currentmovies}
        editable={{
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve()
                handleRemove(oldData)
              }, 500)
            }),
        }}
        options={{
          search: false,
        }}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  currentmovies: state.currentMovies,
})

const mapDispatchToProps = {
  removemovie,
}

export default connect(mapStateToProps, mapDispatchToProps)(DataTable)
