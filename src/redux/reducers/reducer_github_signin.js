import {actionTypes} from '../actions/action_github_signin';

export default function ReducerPostsCreate(state = {}, action) {
  console.log(action.type);
  switch (action.type) {
    case actionTypes.SIGNIN_SUCCESS:
      return {...state, authenticated: true, token: action.payload.access_token};
    case actionTypes.SIGNIN_URL:
      return {...state, authenticated: false, url: action.payload};
    case actionTypes.SIGNIN_ERROR:
      return {...state, authenticated: false};
  }

  return state;
}
