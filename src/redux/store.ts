import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import movies from './movies/reducer';
import profile from './profile/reducer';

const rootReducer = combineReducers({
  movies,
  profile,
});

const middlewares = [];

middlewares.push(thunk);

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export default createStore(rootReducer, applyMiddleware(...middlewares));

export type RootStore = ReturnType<typeof rootReducer>;
