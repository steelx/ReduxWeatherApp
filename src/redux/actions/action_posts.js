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
export function GetPostsRequest(){
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
export function GetPostsSuccess(payload){
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
export function GetPostsError(payload){
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
export function GetPosts(city){
  // --- will do actuall fetch here ---
  let url = `${API_URL}&q=${city},in`;
  console.log('Action ajax ' + new Date(Date.now()));

  const axiosGet = axios(url);

  return (dispatch) => {
    return axiosGet
      .then(
        success => dispatch(GetPostsSuccess(success)),
        error => dispatch(GetPostsError(error))
      );
  };
}
