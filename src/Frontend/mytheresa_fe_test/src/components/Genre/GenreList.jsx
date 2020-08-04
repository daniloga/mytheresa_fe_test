import React from 'react'
import { Link } from 'react-router-dom'
import TopNav from '../../containers/Topnav'

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

import { connect } from 'react-redux'

import { searchgenre } from '../../services/movie.actions'

const GenreList = (props) => {
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
      title: 'Id',
      field: 'id',
      render: (rowData) => (
        <Link to={`/genre/${rowData.id}`}>{rowData.id}</Link>
      ),
    },
    { title: 'Title', field: 'name' },
  ]

  const handleSearchChange = (event) => {
    props.searchgenre(event.target.value.toLowerCase())
  }

  return (
    <>
      <TopNav onChange={handleSearchChange} searchtype="Genre" />

      <div class="paddingTopNav">
        <MaterialTable
          icons={tableIcons}
          title="Available Genres"
          columns={columns}
          data={props.currentgenres}
          options={{
            search: false,
          }}
        />
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  currentgenres: state.currentgenres,
})

const mapDispatchToProps = {
  searchgenre,
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreList)
