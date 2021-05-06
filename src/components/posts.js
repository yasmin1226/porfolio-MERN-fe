import React, { Component, useEffect } from "react";
//import { fetchPosts } from "../actions";
import { fetchPostsAndUsers } from "../actions";
import avatar from '../img/users/avatar.png';
import { connect } from "react-redux";
import UserHeader from "./userHeader";
const PostList = (props) => {
  //const button = 
  useEffect(() => {
    props.fetchPostsAndUsers();
  }, []);

  return (
    <div>
      <>{props.isAuthenticated ? <> <button className="btn btn-primary">Add</button></> : ""}</>
      {props.posts.map((post) => (
        <div className="card my-5" key={post._id}>
          <div className="card-body">
            <div className="card-img"><img width="50px" src={avatar} alt={post.photo} /></div>
            <h5 className="card-title">{post.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              <UserHeader userId={post.userId} />
            </h6>
            <p className="card-text"> {post.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapToProps = (state) => {
  return {
    posts: state.posts,
    isAuthenticated: state.auth.isAuthenticated,
  };
};
export default connect(mapToProps, { fetchPostsAndUsers })(PostList);
