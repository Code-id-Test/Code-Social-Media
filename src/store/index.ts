import { thunk } from "redux-thunk";
import {
  postDetailsReducer,
  userAlbumsReducer,
  userPostsReducer,
  usersReducer,
} from "./reducers";
import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  users: usersReducer,
  userPosts: userPostsReducer,
  postDetails: postDetailsReducer,
  userAlbums: userAlbumsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
