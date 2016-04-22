import {actionTypes} from '../actions/action_fetch_post';

export default function ReducerPosts(state = {}, action) {
  // console.log('ReducerWeather ', action.payload, new Date(Date.now()));

  switch (action.type) {
    case actionTypes.GET_POST_SUCCESS:
      //don't manipulate state
      return Object.assign({}, state, action.payload.data);
    case actionTypes.GET_POST_ERROR:
      console.log(action.type);
      return action.payload;
  }

  return state;
}
