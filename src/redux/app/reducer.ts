import { AppActionTypes, AppActions } from './types';

export interface AppStore {
  counter: number;
}

const initialStore: AppStore = {
  counter: 0,
};

const app = (store = initialStore, action: AppActionTypes) => {
  switch (action.type) {
    case AppActions.INC_COUNTER:
      return { ...store, counter: store.counter + action.payload };
    case AppActions.DEC_COUNTER:
      return { ...store, counter: store.counter - action.payload };
    default:
      return store;
  }
};

export default app;
