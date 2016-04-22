import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import {authStateReducer} from 'redux-auth';
import {reducer as formReducer} from 'redux-form';
import reducerWeather from './reducers/reducer_weather';
import reducerPosts from './reducers/reducer_posts';
import reducerPost from './reducers/reducer_post';

export default combineReducers({
  weather: reducerWeather,
  posts: reducerPosts,
  post: reducerPost,
  form: formReducer,
  auth: authStateReducer,
  router
});
