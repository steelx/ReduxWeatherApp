import axios from 'axios';
const ROOT_URL = 'http://jsonplaceholder.typicode.com';

export const actionTypes = {
  GET_POST: 'GET_POST',
  GET_POST_SUCCESS: 'GET_POST_SUCCESS',
  GET_POST_ERROR: 'GET_POST_ERROR'
};


/**
 * request single post success action
 *
 * @param {Object[]}  links
 * @returns {Object}  action object
 */
export function fetchPostSuccess(payload){
  return {
    type: actionTypes.GET_POST_SUCCESS,
    payload
  }
}


/**
 * request post error action
 *
 * @param {Object[]}  error
 * @returns {Object}  action object
 */
export function fetchPostError(payload){
  return {
    type: actionTypes.GET_POST_ERROR,
    payload
  }
}

/**
 * fetch post action
 *
 * @returns {object}  action object
 */
export function fetchPost(id) {
  // --- will do actual fetch here ---
  const url = `${ROOT_URL}/posts/${id}`;
  console.log('Post Action ajax ' + new Date(Date.now()));

  const axiosGet = axios.get(url);

  return (dispatch) => {
    return axiosGet
      .then(
        success => dispatch(fetchPostSuccess(success)),
        error => dispatch(fetchPostError(error))
      );
  };
}
