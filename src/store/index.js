import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import * as reducers from "features";

export default function configureStore(initialState = {}) {
  const rootReducer = combineReducers(reducers);
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
}
