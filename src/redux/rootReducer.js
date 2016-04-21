import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';
import reducerWeather from './reducers/reducer_weather';
import reducerPosts from './reducers/reducer_posts';

export default combineReducers({
  weather: reducerWeather,
  posts: reducerPosts,
  form: formReducer,
  router
});
