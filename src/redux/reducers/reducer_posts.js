import {actionTypes} from '../actions/action_posts';

export default function ReducerPosts(state = [], action) {
  // console.log('ReducerWeather ', action.payload, new Date(Date.now()));

  switch (action.type) {
    case actionTypes.GET_POSTS:
      console.log(action.type);
      return action.payload;
    case actionTypes.GET_POSTS_SUCCESS:
      //don't manipulate state
      console.log(action.type);
      return [action.payload, ...state];//instead we return new copy of state
    case actionTypes.GET_POSTS_ERROR:
      console.log(action.type);
      return action.payload;
  }

  return state;
}
