const {handleActions} = require('redux-actions');

const FETCH_MOVIES = 'movies/FETCH_MOVIES';
const FETCH_MOVIE = 'movies/FETCH_MOVIE';

module.exports = {
  fetchMoviesActionCreator: (res) => ({
    type: FETCH_MOVIES,
    movies: res.data.data.movies
  }),
  fetchMovieActionCreator: (res) => ({
    type: FETCH_MOVIE,
    movie: res.data.data.movie
  }),
  reducer: handleActions({
    [FETCH_MOVIES]: (state, action) => ({
      ...state,
      all: action.movies
    }),
    [FETCH_MOVIE]: (state, action) => ({
      ...state,
      current: action.movie
    })
  }, {
    movies: [],
    movie: {}
  })
};