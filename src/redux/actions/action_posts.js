import axios from 'axios';
const ROOT_URL = 'http://jsonplaceholder.typicode.com';

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
export function getPostsRequest(){
  return {
    type: actionTypes.GET_POSTS,
    payload: actionTypes.GET_POSTS,
  }
}

/**
 * request links succes action
 *
 * @param {Object[]}  links
 * @returns {Object}  action object
 */
export function getPostsSuccess(payload){
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
export function getPostsError(payload){
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
export function getPosts(city){
  // --- will do actuall fetch here ---
  const url = `${ROOT_URL}/posts`;
  console.log('Posts Action ajax ' + new Date(Date.now()));

  const axiosGet = axios(url);

  return (dispatch) => {
    return axiosGet
      .then(
        success => dispatch(getPostsSuccess(success)),
        error => dispatch(getPostsError(error))
      );
  };
}
