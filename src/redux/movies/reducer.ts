import { MostPopularMovie, SingleMovie, Trailer } from '../../services/types';
import { MoviesActionTypes, MoviesActions } from './types';

export interface MoviesStore {
  movies: MostPopularMovie[];
  singleMovie?: SingleMovie;
  series: MostPopularMovie[];
  trailer?: Trailer;
}

const initialStore: MoviesStore = {
  movies: [],
  series: [],
};

const app = (store = initialStore, action: MoviesActionTypes) => {
  switch (action.type) {
    case MoviesActions.SET_MOVIES:
      return { ...store, movies: action.payload };
    case MoviesActions.SET_MOVIE_TITLE:
      return { ...store, singleMovie: action.payload };
    case MoviesActions.SET_TV:
      return { ...store, series: action.payload };
    case MoviesActions.SET_MOVIE_TRAILER:
      return { ...store, trailer: action.payload };
    default:
      return store;
  }
};

export default app;
