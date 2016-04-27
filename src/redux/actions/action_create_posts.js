import axios from 'axios';
const ROOT_URL = 'https://jsonplaceholder.typicode.com';

export const actionTypes = {
  CREATE_POSTS: 'CREATE_POSTS',
  CREATE_POSTS_SUCCESS: 'CREATE_POSTS_SUCCESS',
  CREATE_POSTS_ERROR: 'CREATE_POSTS_ERROR'
};

/**
 * request posts action
 *
 * @returns {Object}  action object
 */
export function createPostsRequest(){
  return {
    type: actionTypes.CREATE_POSTS,
    payload: actionTypes.CREATE_POSTS
  }
}

/**
 * request posts succes action
 *
 * @param {Object[]}  links
 * @returns {Object}  action object
 */
export function createPostsSuccess(payload){
  return {
    type: actionTypes.CREATE_POSTS_SUCCESS,
    payload
  }
}


/**
 * request posts error action
 *
 * @param {Object[]}  error
 * @returns {Object}  action object
 */
export function createPostsError(payload){
  return {
    type: actionTypes.CREATE_POSTS_ERROR,
    payload
  }
}

/**
 * createPosts action
 *
 * @returns {object}  action object
 */
export function createPosts(props){
  const url = `${ROOT_URL}/posts`;
  console.log('createPosts Action ' + new Date(Date.now()));

  const axiosPost = axios.post(url, props);

  return (dispatch) => {
    return axiosPost
      .then(
        success => dispatch(createPostsSuccess(success)),
        error => dispatch(createPostsError(error))
      );
  };
}
