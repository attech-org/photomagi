import { MostPopularMovie, SingleMovie } from '../../services/types';
import { MoviesActionTypes, MoviesActions } from './types';

export interface MoviesStore {
  movies: MostPopularMovie[];
  singleMovie?: SingleMovie;
}

const initialStore: MoviesStore = {
  movies: [],
};

const app = (store = initialStore, action: MoviesActionTypes) => {
  switch (action.type) {
    case MoviesActions.SET_MOVIES:
      return { ...store, movies: action.payload };
    case MoviesActions.SET_MOVIE_TITLE:
      return { ...store, singleMovie: action.payload };
    default:
      return store;
  }
};

export default app;
