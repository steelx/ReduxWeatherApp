import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import reducerWeather from './reducers/reducer_weather';

export default combineReducers({
  reducerWeather,
  router
});
