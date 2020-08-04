import React, { useEffect } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import GenreList from './components/Genre/GenreList'
import Genre from './components/Genre/Genre'
import MovieList from './components/Movie/MovieList'
import Movie from './components/Movie/Movie'
import { fetchgenres, removemovie } from './services/movie.actions'
import { connect, useDispatch } from 'react-redux'

const App = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchgenres())
  }, [dispatch])

  return (
    <Router>
      <Switch>
        <Route path="/movie/:id" component={Movie} />
        <Route path="/movies">
          <MovieList searchtype="Movie" movies={props.movies}></MovieList>
        </Route>
        <Route path="/genre/:id">
          <Genre searchtype="Movie" />
        </Route>
        <Route path="/genre">
          <GenreList searchtype="Genre" />
        </Route>
        <Route path="/" render={() => <Redirect to="/genre" />} />
      </Switch>
    </Router>
  )
}

const mapStateToProps = (state) => ({
  genres: state.genres,
  currentgenres: state.currentgenres,
  movies: state.movies,
  currentmovies: state.currentmovies,
})

const mapDispatchToProps = {
  fetchgenres,
  removemovie,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
