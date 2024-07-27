import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({});
const middlewares = [thunk];
const enhancers = [applyMiddleware(...middlewares)];
const configureStore = () => {
  return createStore(rootReducer, compose(...enhancers));
};
export default configureStore;
