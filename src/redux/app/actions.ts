import { Dispatch } from 'react';

import { mostPopularMovies, singleMovie, trailer } from '../../services/api';
import { MostPopularMovie, SingleMovie, Trailer } from '../../services/types';
import { AppActionTypes, AppActions } from './types';

export const setPopularMovies = (value: MostPopularMovie[]): AppActionTypes => ({
  type: AppActions.SET_MOVIES,
  payload: value,
});

export const loadMovies = () => async (dispatch: Dispatch<AppActionTypes>) => {
  const data = await mostPopularMovies();
  if (data) {
    dispatch(setPopularMovies(data));
  }
};

export const setMovieTitle = (value: SingleMovie): AppActionTypes => ({
  type: AppActions.SET_MOVIE_TITLE,
  payload: value,
});

export const loadMovieTitle = (id: string) => async (dispatch: Dispatch<AppActionTypes>) => {
  const data = await singleMovie(id);
  if (data) {
    dispatch(setMovieTitle(data));
  }
};

export const setMovieTrailer = (value: Trailer): AppActionTypes => ({
  type: AppActions.SET_MOVIE_TRAILER,
  payload: value,
});

export const loadMovieTrailer =
  (id: string | undefined) => async (dispatch: Dispatch<AppActionTypes>) => {
    const data = await trailer(id);
    if (data) {
      dispatch(setMovieTrailer(data));
    }
  };
