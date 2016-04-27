import axios from 'axios';
const ROOT_URL = 'https://jsonplaceholder.typicode.com';

export const actionTypes = {
  GET_POSTS: 'GET_POSTS',
  GET_POSTS_SUCCESS: 'GET_POSTS_SUCCESS',
  GET_POSTS_ERROR: 'GET_POSTS_ERROR'
};

/**
 * request links action
 *
 * @returns {Object}  action object
 */
export function fetchPostsRequest(){
  return {
    type: actionTypes.GET_POSTS,
    payload: actionTypes.GET_POSTS
  }
}

/**
 * request links succes action
 *
 * @param {Object[]}  links
 * @returns {Object}  action object
 */
export function fetchPostsSuccess(payload){
  return {
    type: actionTypes.GET_POSTS_SUCCESS,
    payload
  }
}


/**
 * request links error action
 *
 * @param {Object[]}  error
 * @returns {Object}  action object
 */
export function fetchPostsError(payload){
  return {
    type: actionTypes.GET_POSTS_ERROR,
    payload
  }
}

/**
 * fetch weather action
 *
 * @returns {object}  action object
 */
export function fetchPosts(){
  // --- will do actuall fetch here ---
  const url = `${ROOT_URL}/posts`;
  console.log('Posts Action ajax ' + new Date(Date.now()));

  const axiosGet = axios.get(url);

  return (dispatch) => {
    return axiosGet
      .then(
        success => dispatch(fetchPostsSuccess(success)),
        error => dispatch(fetchPostsError(error))
      );
  };
}
