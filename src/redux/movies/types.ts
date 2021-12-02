import { MostPopularMovie, SingleMovie } from '../../services/types';

export enum MoviesActions {
  SET_MOVIES = 'SET_MOVIES',
  SET_MOVIE_TITLE = 'SET_MOVIE_TITLE',
}

interface SetMoviesDataAction {
  type: MoviesActions.SET_MOVIES;
  payload: MostPopularMovie[];
}

interface SetMovieTitleAction {
  type: MoviesActions.SET_MOVIE_TITLE;
  payload: SingleMovie;
}

export type MoviesActionTypes = SetMoviesDataAction | SetMovieTitleAction;
