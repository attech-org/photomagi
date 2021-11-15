import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import app from './app/reducer';

const rootReducer = combineReducers({
  app,
});

const middlewares = [];

middlewares.push(thunk);

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export default createStore(rootReducer, applyMiddleware(...middlewares));

export type RootStore = ReturnType<typeof rootReducer>;
