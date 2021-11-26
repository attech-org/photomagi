import { Dispatch } from 'react';

import { mostPopularMovies } from '../../services/api';
import { MostPopularMovie } from '../../services/types';
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
