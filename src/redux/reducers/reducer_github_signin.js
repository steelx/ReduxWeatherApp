import {actionTypes} from '../actions/action_github_signin';

export default function ReducerPostsCreate(state = {}, action) {

  switch (action.type) {
    case actionTypes.SIGNIN_SUCCESS:
      console.log(action.type);
      return {...state, authenticated: true};
    case actionTypes.SIGNIN_URL:
      console.log(action.type);
      return {...state, authenticated: false, url: action.payload};
    case actionTypes.SIGNIN_ERROR:
      console.log(action.type);
      return {...state, authenticated: false};
  }

  return state;
}
