import { MostPopularMovie } from '../../services/types';

export enum AppActions {
  SET_MOVIES = 'SET_MOVIES',
}

interface SetMoviesDataAction {
  type: AppActions.SET_MOVIES;
  payload: MostPopularMovie[];
}

export type AppActionTypes = SetMoviesDataAction;
