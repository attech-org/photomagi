import { Dispatch } from 'react';

import { mostPopularMovies, movieTitle } from '../../services/api';
import { MostPopularMovie, MovieTitle } from '../../services/types';
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

export const setMovieTitle = (value: MovieTitle[]): AppActionTypes => ({
  type: AppActions.SET_MOVIE_TITLE,
  payload: value,
});

export const loadMovieTitle = (id: string) => async (dispatch: Dispatch<AppActionTypes>) => {
  const data = await movieTitle(id);
  if (data) {
    dispatch(setMovieTitle(data));
  }
};
