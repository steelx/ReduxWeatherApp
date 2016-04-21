import {actionTypes} from '../actions/action_create_posts';

export default function ReducerPostsCreate(state = {}, action) {
  // console.log('ReducerWeather ', action.payload, new Date(Date.now()));

  switch (action.type) {
    case actionTypes.CREATE_POSTS:
      console.log(action.type);
      return action.payload;
    case actionTypes.CREATE_POSTS_SUCCESS:
      //don't manipulate state
      return Object.assign({}, state, action.payload.data);
    case actionTypes.CREATE_POSTS_ERROR:
      console.log(action.type);
      return action.payload;
  }

  return state;
}
