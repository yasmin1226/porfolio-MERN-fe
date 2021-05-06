import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";
const UserHeader = (props) => {
  console.log(props.userId);
  console.log("props", props);

  //   useEffect(() => {
  //     props.fetchUser(props.userId);
  //   }, []);
  const { user } = props;
  if (!user) return "loading.........";
  return <div>{user.fname}</div>;
};
const mapStateToProps = (state, props) => {
  return { user: state.users.find((u) => u._id === props.userId) };
};
export default connect(mapStateToProps /* { fetchUser }*/)(UserHeader);
