import axios from 'axios';
import { browserHistory } from 'react-router';

const CLIENT_ID = '32b70bf671e04762b26c';
const CLIENT_SECRET = '5851623d94887db7612d4c9bc689310b9d53284b';
const REDIRECT_URI = 'http://localhost:3000/auth/callback';
const ROOT_URL = 'https://github.com/login/oauth/authorize';

export const actionTypes = {
  SIGNIN: 'SIGNIN',
  SIGNIN_SUCCESS: 'SIGNIN_SUCCESS',
  SIGNIN_ERROR: 'SIGNIN_ERROR',
  SIGNIN_URL: 'SIGNIN_URL'
};

function signinRequest(){
  return {
    type: actionTypes.SIGNIN,
    payload: 'Github request sent'
  }
}

function signinUrl(payload){
  return {
    type: actionTypes.SIGNIN_URL,
    payload
  }
}

function signinError(payload){
  return {
    type: actionTypes.SIGNIN_ERROR,
    payload
  }
}

export function githubGeturi(){
  const GITHUB_URL = `${ROOT_URL}?client_id=${CLIENT_ID}&scope=user,public_repo&redirect_uri=${REDIRECT_URI}`;

  return (dispatch) => dispatch(signinUrl(GITHUB_URL));
}
