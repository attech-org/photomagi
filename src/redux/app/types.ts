import { MostPopularMovie, SingleMovie } from '../../services/types';

export enum AppActions {
  SET_MOVIES = 'SET_MOVIES',
  SET_MOVIE_TITLE = 'SET_MOVIE_TITLE',
}

interface SetMoviesDataAction {
  type: AppActions.SET_MOVIES;
  payload: MostPopularMovie[];
}

interface SetMovieTitleAction {
  type: AppActions.SET_MOVIE_TITLE;
  payload: SingleMovie;
}

export type AppActionTypes = SetMoviesDataAction | SetMovieTitleAction;
