import { Dispatch } from 'react';

import { mostPopularMovies } from '../../services/api';
import { MostPopularMovie } from '../../services/types';
import { Fighter } from './reducer';
import { AppActionTypes, AppActions } from './types';

export const increaseCounter = (value: number): AppActionTypes => ({
  type: AppActions.INC_COUNTER,
  payload: value,
});

export const decreaseCounter = (value: number): AppActionTypes => ({
  type: AppActions.DEC_COUNTER,
  payload: value,
});

export const setFighters = (value: Fighter[]): AppActionTypes => ({
  type: AppActions.SET_FIGHTERS,
  payload: value,
});

export const loadFighters = () => async (dispatch: Dispatch<AppActionTypes>) => {
  const result = await fetch(
    'https://gist.githubusercontent.com/alexandrtovmach/3fcf6c0819d6830e21b5f3c117c2c5aa/raw/0b00273489dbf90980296d0908183fc3494c2ad4/userlist.json',
  );
  const data = await result.json();
  dispatch(setFighters(data));
};

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
