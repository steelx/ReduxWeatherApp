import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import reducerWeather from './reducers/reducer_weather';
import reducerPosts from './reducers/reducer_posts';

export default combineReducers({
  weather: reducerWeather,
  posts: reducerPosts,
  router
});
