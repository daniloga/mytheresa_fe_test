import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = {
  card: {
    maxWidth: 400,
  },
  media: {
    height: 500,
  },
  cardcontent: {
    minHeight: 700,
  },
}

const MovieCard = (props) => {
  const handleChildClick = (event) => {
    props.onClick(event, props.movie)
  }

  const { classes, movie } = props
  return (
    <>
      <Card className={classes.card}>
        <CardContent className={classes.cardcontent}>
          <CardMedia
            className={classes.media}
            image={'https://image.tmdb.org/t/p/w400/' + movie.poster_path}
            title={movie.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {movie.title.length > 50
                ? movie.title.substring(0, 50) + '...'
                : movie.title}
            </Typography>
            <Typography>{movie.overview.substring(0, 150) + '...'}</Typography>
          </CardContent>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            title="See more info..."
            onClick={handleChildClick.bind(this)}
          >
            More...
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

MovieCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MovieCard)
