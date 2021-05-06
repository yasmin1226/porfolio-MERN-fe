const postsReducer = (state = [], action) => {
  switch (action.type) {
    case "FRTCH_POSTS":
      return [...state, ...action.payload.data.posts];
    default:
      return state;
  }
};
export default postsReducer;
