import { MostPopularMovie, SingleMovie, Trailer } from '../../services/types';

export enum AppActions {
  SET_MOVIES = 'SET_MOVIES',
  SET_MOVIE_TITLE = 'SET_MOVIE_TITLE',
  SET_MOVIE_TRAILER = 'SET_MOVIE_TRAILER',
}

interface SetMoviesDataAction {
  type: AppActions.SET_MOVIES;
  payload: MostPopularMovie[];
}

interface SetMovieTitleAction {
  type: AppActions.SET_MOVIE_TITLE;
  payload: SingleMovie;
}

interface SetMovieTrailerAction {
  type: AppActions.SET_MOVIE_TRAILER;
  payload: Trailer;
}

export type AppActionTypes = SetMoviesDataAction | SetMovieTitleAction | SetMovieTrailerAction;
