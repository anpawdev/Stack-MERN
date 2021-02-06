import axios from 'axios';
import { API_URL } from '../config';

/* SELECTORS */
export const getPosts = ({ posts }) => posts.data;
export const getPostsCount = ({ posts }) => posts.amount; 
export const getSinglePost = ({ posts }) => posts.singlePost;
export const getRequest = ({ posts }) => posts.request;
export const getUpdateRequest = ({ posts }) => posts.updateRequest;
export const getPages = ({ posts }) => Math.ceil(posts.amount / posts.postsPerPage);

/* INITIAL STATE */
const initialState = {
  data: [],
  request: {
    pending: false,
    error: null,
    success: null,
  },
  updateRequest: {
    pending: false,
    error: null,
    success: null
  },
  singlePost: {},
  amount: 0,
  postsPerPage: 9,
  presentPage: 1,
  initialPage: 1,
  pagination: false
};

// action name creator
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* ACTIONS */
export const LOAD_POSTS = createActionName('LOAD_POSTS');
export const LOAD_SINGLE_POST = createActionName('LOAD_SINGLE_POST');
export const LOAD_POSTS_PAGE = createActionName('LOAD_POSTS_PAGE');
export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const RESET_REQUEST = createActionName('RESET_REQUEST');
export const START_UPDATE_REQUEST = createActionName('START_UPDATE_REQUEST');
export const END_UPDATE_REQUEST = createActionName('END_UPDATE_REQUEST');
export const RESET_UPDATE_REQUEST = createActionName('RESET_UPDATE_REQUEST');
export const ERROR_UPDATE_REQUEST = createActionName('ERROR_UPDATE_REQUEST');

export const loadPosts = payload => ({ payload, type: LOAD_POSTS });
export const loadSinglePost = post => ({ post, type: LOAD_SINGLE_POST });
export const loadPostsByPage = payload => ({ payload, type: LOAD_POSTS_PAGE });
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });
export const resetRequest = () => ({ type: RESET_REQUEST });
export const startUpdateRequest = () => ({ type: START_UPDATE_REQUEST });
export const endUpdateRequest = () => ({ type: END_UPDATE_REQUEST });
export const resetUpdateRequest = () => ({ type: RESET_UPDATE_REQUEST });
export const errorUpdateRequest = error => ({ error, type: ERROR_UPDATE_REQUEST });

/* REDUCER */
export default function reducer(statePart = initialState, action = {}) {
    switch (action.type) {
      case LOAD_POSTS:
        return { ...statePart, data: action.payload };
      case LOAD_SINGLE_POST:
        return { ...statePart, singlePost: action.post };
      case LOAD_POSTS_PAGE:
        return {
          ...statePart,
          postsPerPage: action.payload.postsPerPage,
          presentPage: action.payload.presentPage,
          amount: action.payload.amount,
          data: [...action.payload.posts],
      };
      case START_REQUEST:
        return { ...statePart, request: { pending: true, error: null, success: null } };
      case END_REQUEST:
        return { ...statePart, request: { pending: false, error: null, success: true } };
      case ERROR_REQUEST:
        return { ...statePart, request: { pending: false, error: action.error, success: false } };
      case RESET_REQUEST:
        return { ...statePart, request: { pending: false, error: null, success: null }, singlePost: {} };
      case START_UPDATE_REQUEST:
          return { ...statePart, updateRequest: { pending: true, error: null, success: null } };
      case END_UPDATE_REQUEST:
          return { ...statePart, updateRequest: { pending: false, error: null, success: true } };
      case RESET_UPDATE_REQUEST:
        return { ...statePart, updateRequest: { pending: false, error: null, success: null } };
      default:
        return statePart;
    }
};

/* THUNKS */
export const loadPostsRequest = () => {
  return async dispatch => {

    dispatch(startRequest());
    try {

      let res = await axios.get(`${API_URL}/posts`);
      dispatch(loadPosts(res.data));
      dispatch(endRequest());

    } catch(e) {
      dispatch(errorRequest(e.message));
    }

  };
};

export const loadSinglePostRequest = id => {
  return async dispatch => {

    dispatch(startRequest());
    try {

      let res = await axios.get(`${API_URL}/posts/${id}`);
      dispatch(loadSinglePost(res.data));
      dispatch(endRequest());

    } catch(e) {
      dispatch(errorRequest(e.message));
    }

  };
};

export const addPostRequest = (post) => {
  return async dispatch => {

    dispatch(startRequest());
    try {

      let res = await axios.post(`${API_URL}/posts`, post);
      dispatch(endRequest());

    } catch(e) {
      dispatch(errorRequest(e.message));
    }

  };
};

export const editPostRequest = (post, id) => {
  return async dispatch => {

    dispatch(startRequest());
    try {

      let res = await axios.post(`${API_URL}/posts/${id}`, post);
      dispatch(endRequest());

    } catch(e) {
      dispatch(errorRequest(e.message));
    }

  };
};

export const deletePostRequest = (id) => {
  return async dispatch => {

    dispatch(startUpdateRequest());
    try {

      let res = await axios.delete(`${API_URL}/posts/${id}`);
      dispatch(endUpdateRequest());

    } catch(e) {
      dispatch(errorUpdateRequest(e.message));
    }

  };
};


export const loadPostsByPageRequest = (page, postsPerPage) => {
  return async dispatch => {

    dispatch(startRequest());
    try {
      
      const startAt = (page - 1) * postsPerPage;
      const limit = postsPerPage;

      let res = await axios.get(`${API_URL}/posts/range/${startAt}/${limit}`);

      const payload = {
        posts: res.data.posts,
        amount: res.data.amount,
        postsPerPage,
        presentPage: page,
      };

      dispatch(loadPostsByPage(payload));
      dispatch(endRequest());

    } catch(e) {
      dispatch(errorRequest(e.message));
    }
  };
};