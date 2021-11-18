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
}

const initialStore: AppStore = {
  counter: 0,
  fighters: [],
};

const app = (store = initialStore, action: AppActionTypes) => {
  switch (action.type) {
    case AppActions.INC_COUNTER:
      return { ...store, counter: store.counter + action.payload };
    case AppActions.DEC_COUNTER:
      return { ...store, counter: store.counter - action.payload };
    case AppActions.SET_FIGHTERS:
      return { ...store, fighters: action.payload };
    default:
      return store;
  }
};

export default app;
