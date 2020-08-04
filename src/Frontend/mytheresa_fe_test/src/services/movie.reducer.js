const initialState = {
  isLoading: false,
  isError: false,
  genres: [],
  currentgenres: [],
  movies: [],
  currentmovies: [],
}

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, isLoading: true, isError: false }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        genres: action.payload,
        currentgenres: action.payload,
      }
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    case 'FETCH_SEARCH':
      let filtered = state.genres.filter((genre) => {
        return genre.name.toLowerCase().includes(action.payload)
      })

      return {
        ...state,
        currentgenres: filtered,
      }
    case 'ADD_MOVIE':
      let movies = state.movies
      movies.push(action.payload)
      return {
        ...state,
        movies: movies,
        currentmovies: movies,
      }
    case 'REMOVE_MOVIE':
      let moviesRem = state.movies
      moviesRem.pop(action.payload)
      return {
        ...state,
        movies: moviesRem,
        currentmovies: moviesRem,
      }
    case 'SEARCH_MOVIE':
      debugger
      let filteredMovies = state.movies.filter((movie) => {
        return movie.title.toLowerCase().includes(action.payload)
      })
      return {
        ...state,
        currentMovies: filteredMovies,
      }
    default:
      return state
  }
}

export default movieReducer
