const apiUrl = 'https://api.themoviedb.org/3/'
const auth =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTNjMzJiNWUzNDBlZDk4ZjljZDg4NGRjNmFlMTZiNCIsInN1YiI6IjVmMjJiY2Q5NWIxMjQwMDAzNDJhOTJiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dhOg5XCphI-nO-Q2adA6-g1iR1uGU5o2MM9kasBq2eM'

export const getGenreList = async () => {
  const url = `${apiUrl}genre/movie/list`
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: auth,
    },
  })
  const json = await response.json()
  return json.genres
}

export const getMovieListByGenreId = async (genreId, pageId = 1) => {
  try {
    const url = `${apiUrl}discover/movie?with_genres=${genreId}&page=${pageId}`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: auth,
      },
    })
    const json = await response.json()
    return json
  } catch (error) {
    console.log(error)
  }
}

export const getMovieById = async (movieId) => {
  try {
    const url = `${apiUrl}movie/${movieId}`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: auth,
      },
    })
    const json = await response.json()
    return json
  } catch (error) {
    console.log(error)
  }
}
