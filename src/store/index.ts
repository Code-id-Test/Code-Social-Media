import { thunk } from "redux-thunk";
import { usersListReducer } from "./reducers";
import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  usersList: usersListReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
