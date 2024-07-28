import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/UserReducer';

const rootReducer = combineReducers({
  userReducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
