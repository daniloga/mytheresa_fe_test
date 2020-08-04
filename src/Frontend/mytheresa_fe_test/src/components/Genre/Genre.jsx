import React, { useState, useEffect } from 'react'
import TopNav from '../../containers/Topnav'
import { getMovieListByGenreId } from '../../services/movie.services'
import { useParams } from 'react-router-dom'
import MovieCard from '../Movie/MovieCard'
import Grid from '@material-ui/core/Grid'
import Popover from '@material-ui/core/Popover'
import MovieContent from '../Movie/MovieContent'
import InfiniteScroll from 'react-infinite-scroll-component'

const Genre = (props) => {
  const [movies, setMovieList] = useState()
  const [currentMovies, setCurrentMovieList] = useState([])
  const [currentMovie, setCurrentMovie] = useState()
  const [anchorEl, setAnchorEl] = useState()
  const [hasMore, setScroll] = useState(true)

  const handleClick = (event, movie) => {
    setCurrentMovie(movie)
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const { id } = useParams()

  useEffect(() => {
    async function fetchMovies() {
      let fetchedMovies = await getMovieListByGenreId(id)
      setMovieList(fetchedMovies)
      setCurrentMovieList(fetchedMovies.results)
    }
    fetchMovies()
  }, [id])

  const handleSearchChange = (event) => {
    let searchCriteria = String(event.target.value).toLowerCase()
    let filteredMovies = movies.results.filter((movie) => {
      return movie.title.toLowerCase().includes(searchCriteria)
    })
    setCurrentMovieList(filteredMovies)
  }

  function fetchMoreMovies() {
    if (currentMovies.length > 100) {
      setScroll(false)
      return
    }
    

    getMovieListByGenreId(id,movies.page + 1).then((response) => {
      let newMovies = currentMovies
      Array.prototype.push.apply(newMovies, response.results)
      
      setCurrentMovieList(newMovies)      
      setMovieList(response)
    })
  }

  const open = Boolean(anchorEl)
  const movieId = open ? 'simple-popover' : undefined

  return (
    <>
      <TopNav {...props} title={id} onChange={handleSearchChange} />
      <br />
      <div style={{ padding: 10 }}>
        <InfiniteScroll
          dataLength={currentMovies.length}
          next={fetchMoreMovies}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>End of records.</b>
            </p>
          }
        >
          <Grid container direction="row" alignItems="center" spacing={2}>
            {currentMovies &&
              currentMovies.map((val, key) => {
                return (
                  <Grid item key={key}>
                    <MovieCard movie={val} onClick={handleClick} />
                  </Grid>
                )
              })}
          </Grid>
        </InfiniteScroll>
      </div>
      <Popover
        id={movieId}
        open={open}
        onClose={handleClose}
        anchorPosition={{ top: 50, left: 50 }}
      >
        <MovieContent movie={currentMovie} onClick={handleClose} />
      </Popover>
    </>
  )
}

export default Genre
