import { Dispatch } from 'react';

import { mostPopularMovies, mostPopularTVs, singleMovie, trailer } from '../../services/api';
import { MostPopularMovie, SingleMovie, Trailer } from '../../services/types';
import { MoviesActions, MoviesActionTypes } from './types';

export const setPopularMovies = (value: MostPopularMovie[]): MoviesActionTypes => ({
  type: MoviesActions.SET_MOVIES,
  payload: value,
});

export const loadMovies = () => async (dispatch: Dispatch<MoviesActionTypes>) => {
  const data = await mostPopularMovies();
  if (data) {
    dispatch(setPopularMovies(data));
  }
};

export const setMovieTitle = (value: SingleMovie): MoviesActionTypes => ({
  type: MoviesActions.SET_MOVIE_TITLE,
  payload: value,
});

export const loadMovieTitle = (id: string) => async (dispatch: Dispatch<MoviesActionTypes>) => {
  const data = await singleMovie(id);
  if (data) {
    dispatch(setMovieTitle(data));
  }
};

export const setPopularTVs = (value: MostPopularMovie[]): MoviesActionTypes => ({
  type: MoviesActions.SET_TV,
  payload: value,
});

export const loadTVs = () => async (dispatch: Dispatch<MoviesActionTypes>) => {
  const data = await mostPopularTVs();
  if (data) {
    dispatch(setPopularTVs(data));
  }
};

export const setMovieTrailer = (value: Trailer): MoviesActionTypes => ({
  type: MoviesActions.SET_MOVIE_TRAILER,
  payload: value,
});

export const loadMovieTrailer = (id?: string) => async (dispatch: Dispatch<MoviesActionTypes>) => {
  const data = await trailer(id);
  if (data) {
    dispatch(setMovieTrailer(data));
  }
};
