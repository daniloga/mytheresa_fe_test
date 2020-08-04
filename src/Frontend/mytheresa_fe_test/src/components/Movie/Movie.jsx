import React, { useState, useEffect } from 'react'
import TopNav from '../../containers/Topnav'
import { getMovieById } from '../../services/movie.services'
import { useParams } from 'react-router-dom'
import MovieContent from '../Movie/MovieContent'

const Movie = (props) => {
  const [movie, setMovie] = useState()

  const { id } = useParams()

  useEffect(() => {
    async function fetchMovie() {
      let fetchedMovie = await getMovieById(id)
      setMovie(fetchedMovie)
    }
    fetchMovie()
  }, [id])

  console.dir(movie)
  return (
    <>
      <TopNav {...props} />
      <br />
      <div style={{padding: '10px'}}>{movie !== undefined && <MovieContent movie={movie} />}</div>
    </>
  )
}

export default Movie
