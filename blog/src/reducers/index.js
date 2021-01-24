import { combineReducers } from "redux";
import UsersReducer from "./UsersReducer";
import PostsReducer from "./PostsReducer";

export default combineReducers({
  posts: PostsReducer,
  users: UsersReducer
});
