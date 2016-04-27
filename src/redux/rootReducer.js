import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';
import reducerWeather from './reducers/reducer_weather';
import reducerPosts from './reducers/reducer_posts';
import reducerPost from './reducers/reducer_post';
import reducerGithubSignin from './reducers/reducer_github_signin';

export default combineReducers({
  weather: reducerWeather,
  posts: reducerPosts,
  post: reducerPost,
  auth: reducerGithubSignin,
  form: formReducer,
  router
});
