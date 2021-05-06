const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      return [...state, action.payload.data.user];
    default:
      return state;
  }
};
export default usersReducer;
