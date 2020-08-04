import { getGenreList } from './movie.services'

export function fetchgenres() {
  return function (dispatch) {
    return getGenreList().then((response) => {
      dispatch({ type: 'FETCH_SUCCESS', payload: response })
      return response
    })
  }
}

export function addmovie(movie) {
  return function (dispatch) {
    dispatch({ type: 'ADD_MOVIE', payload: movie })
  }
}

export function removemovie(movie) {
  return function (dispatch) {
    dispatch({ type: 'REMOVE_MOVIE', payload: movie })
  }
}

export function searchmovie(name) {
  return function (dispatch) {
    dispatch({ type: 'SEARCH_MOVIE', payload: name })
  }
}

export function searchgenre(name) {
  return function (dispatch) {
    dispatch({ type: 'FETCH_SEARCH', payload: name })
  }
}

