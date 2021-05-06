import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";
import alert from "./alert";
import auth from "./auth";
export default combineReducers({
  alert,
  auth,
  posts: postsReducer,
  users: usersReducer,
});
