import { User } from 'firebase/auth';

import { MostPopularMovie, SingleMovie } from '../../services/types';

export enum AppActions {
  SET_MOVIES = 'SET_MOVIES',
  SET_MOVIE_TITLE = 'SET_MOVIE_TITLE',
  SET_CURRENT_USER = 'SET_CURRENT_USER',
}

interface SetMoviesDataAction {
  type: AppActions.SET_MOVIES;
  payload: MostPopularMovie[];
}

interface SetMovieTitleAction {
  type: AppActions.SET_MOVIE_TITLE;
  payload: SingleMovie;
}

interface SetCurrentUserAction {
  type: AppActions.SET_CURRENT_USER;
  payload: User | undefined;
}
export type AppActionTypes = SetMoviesDataAction | SetMovieTitleAction | SetCurrentUserAction;
