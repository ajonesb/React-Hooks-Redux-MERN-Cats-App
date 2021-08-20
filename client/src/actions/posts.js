import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

import * as api from "../api/index.js";

// Function that returns another function with Redux Thunk
export const getPosts = () => async (dispatch) => {
  // try to fetch all data from api
  try {
    const { data } = await api.fetchPosts();
    // Dispatch action with Redux thunk as object FETCH_ALL
    // Using redux to dispatch an action from the data from our backend
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// post request to backend to create new post
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
