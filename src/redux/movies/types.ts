import { MostPopularMovie, SingleMovie } from '../../services/types';

export enum MoviesActions {
  SET_MOVIES = 'SET_MOVIES',
  SET_MOVIE_TITLE = 'SET_MOVIE_TITLE',
  SET_TV = 'SET_TV',
}

interface SetMoviesDataAction {
  type: MoviesActions.SET_MOVIES;
  payload: MostPopularMovie[];
}

interface SetMovieTitleAction {
  type: MoviesActions.SET_MOVIE_TITLE;
  payload: SingleMovie;
}
interface SetTVDataAction {
  type: MoviesActions.SET_TV;
  payload: MostPopularMovie[];
}

export type MoviesActionTypes = SetMoviesDataAction | SetMovieTitleAction | SetTVDataAction;
