import { MostPopularMovie, SingleMovie } from '../../services/types';
import { AppActionTypes, AppActions } from './types';

export interface AppStore {
  movies: MostPopularMovie[];
  singleMovie?: SingleMovie;
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
    default:
      return store;
  }
};

export default app;
