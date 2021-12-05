import { MostPopularMovie, SingleMovie, Trailer } from '../../services/types';
import { AppActionTypes, AppActions } from './types';

export interface AppStore {
  movies: MostPopularMovie[];
  singleMovie?: SingleMovie;
  trailer?: Trailer;
}

const initialStore: AppStore = {
  movies: [],
};

const app = (store = initialStore, action: AppActionTypes) => {
  switch (action.type) {
    case AppActions.SET_MOVIES:
      return { ...store, movies: action.payload };
    case AppActions.SET_MOVIE_TITLE:
      return { ...store, singleMovie: action.payload };
    case AppActions.SET_MOVIE_TRAILER:
      return { ...store, trailer: action.payload };
    default:
      return store;
  }
};

export default app;
