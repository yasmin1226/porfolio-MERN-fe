import api from "../apis/jsonPlaceHolder";
import axios from "axios";
export const fetchPosts = () => {
  return async function (dispatch, getState) {
    const responce = await api.get("/post");
    console.log("resp", responce);
    dispatch({
      //dispatch manually
      type: "FRTCH_POSTS",
      payload: responce.data,
    });
  };
};
export const fetchUser = (userId) => {
  return async function (dispatch, getState) {
    const responce = await api.get(`/user/${userId}`);

    dispatch({
      //dispatch manually
      type: "FETCH_USER",
      payload: responce.data,
    });
  };
};
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const users = getState().posts.map((p) => p.userId);
  const uniqueUsers = [];
  users.forEach((u) => {
    if (!uniqueUsers.includes(u)) uniqueUsers.push(u);
  });
  uniqueUsers.forEach((usr) => dispatch(fetchUser(usr)));
};
export const dummyAction = () => {
  return {
    type: "DUMMY",
    payload: 123,
  };
};
