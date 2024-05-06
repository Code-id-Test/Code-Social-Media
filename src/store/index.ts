import { thunk } from "redux-thunk";
import { userAlbumsReducer, userPostsReducer, usersReducer } from "./reducers";
import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  users: usersReducer,
  userPosts: userPostsReducer,
  userAlbums: userAlbumsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
