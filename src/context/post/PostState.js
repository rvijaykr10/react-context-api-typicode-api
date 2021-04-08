import React, { useReducer } from "react";
import axios from "axios";
import PostContext from "./postContext";
import postReducer from "./postReducer";
import { GET_POSTS, ERROR_POSTS } from "../type";

const PostState = (props) => {
  const initialState = {
    posts: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(postReducer, initialState);

  // get posts
  const getPosts = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_POSTS,
        payload: err,
      });
    }
  };

  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        loading: state.loading,
        getPosts,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
