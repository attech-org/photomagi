import { AppActionTypes, AppActions } from './types';

export interface Fighter {
  attack: number;
  defense: number;
  health: number;
  name: string;
  source: string;
}

export interface AppStore {
  fighters: Fighter[];
}

const initialStore: AppStore = {
  fighters: [],
};

const app = (store = initialStore, action: AppActionTypes) => {
  switch (action.type) {
    case AppActions.SET_FIGHTERS:
      return { ...store, fighters: action.payload };
    default:
      return store;
  }
};

export default app;
