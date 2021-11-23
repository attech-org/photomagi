import { MostPopularMovie } from '../../services/types';
import { AppActionTypes, AppActions } from './types';

export interface Fighter {
  attack: number;
  defense: number;
  health: number;
  name: string;
  source: string;
}

export interface AppStore {
  counter: number;
  fighters: Fighter[];
  movies: MostPopularMovie[];
}

const initialStore: AppStore = {
  counter: 0,
  fighters: [],
  movies: [],
};

const app = (store = initialStore, action: AppActionTypes) => {
  console.log(store);
  switch (action.type) {
    case AppActions.INC_COUNTER:
      return { ...store, counter: store.counter + action.payload };
    case AppActions.DEC_COUNTER:
      return { ...store, counter: store.counter - action.payload };
    case AppActions.SET_FIGHTERS:
      return { ...store, fighters: action.payload };
    case AppActions.SET_MOVIES:
      return { ...store, movies: action.payload };
    default:
      return store;
  }
};

export default app;
