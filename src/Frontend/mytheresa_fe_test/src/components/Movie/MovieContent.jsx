import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addmovie } from '../../services/movie.actions'

const MovieContent = (props) => {
  const dialogMovieContent = (backgroundUrl) => {
    return {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://image.tmdb.org/t/p/w300/${backgroundUrl}')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      maxWidth: '600px',
      minHeight: '400px',
      color: 'white',
    }
  }

  const handleClick = (event) => {
    props.addmovie(props.movie)
    props.onClick(event)
  }

  console.dir(props.movie)

  MovieContent.propTypes = {
    movie: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  return (
    <Card style={dialogMovieContent(props.movie.backdrop_path)}>
      <CardContent>
        <Typography gutterBottom variant="h4">
          {props.movie.title}
        </Typography>
        <br />
        <Typography>{' ( ' + props.movie.release_date + ' )'}</Typography>
        <br />
        <Typography>{props.movie.overview}</Typography>
        <br />
        <Typography>Popularity: {props.movie.popularity}</Typography>
      </CardContent>
      <CardActions>
        <Button
          color="secondary"
          size="small"
          title="add movie to watch later list..."
          onClick={handleClick.bind(this)}
        >
          Watch Later
        </Button>
      </CardActions>
    </Card>
  )
}

const mapStateToProps = (state) => ({
  movies: state.movies,
})

const mapDispatchToProps = {
  addmovie,
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieContent)
