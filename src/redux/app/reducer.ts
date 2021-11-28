import { MostPopularMovie, MovieTitle } from '../../services/types';
import { AppActionTypes, AppActions } from './types';

export interface AppStore {
  movies: MostPopularMovie[];
  movieTitle: MovieTitle[];
}

const initialStore: AppStore = {
  movies: [],
  movieTitle: [],
};

const app = (store = initialStore, action: AppActionTypes) => {
  switch (action.type) {
    case AppActions.SET_MOVIES:
      return { ...store, movies: action.payload };
    case AppActions.SET_MOVIE_TITLE:
      return { ...store, movieTitle: action.payload };
    default:
      return store;
  }
};

export default app;
