import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import bookReducers from "./reducers/bookReducers";

const rootReducer = combineReducers({
  bookReducers,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
