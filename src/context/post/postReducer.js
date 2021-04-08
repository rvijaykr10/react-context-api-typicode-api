import { GET_POSTS, ERROR_POSTS } from "../type";

export default (state, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };

    case ERROR_POSTS:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
