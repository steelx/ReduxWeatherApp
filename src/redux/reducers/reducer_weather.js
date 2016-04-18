import {actionTypes} from '../actions/';

export default function ReducerWeather(state = null, action = null) {
  console.log('ReducerWeather ', action, new Date(Date.now()));

  switch (action.type) {
    case actionTypes.FETCH_WEATHER:
      return action.payload;
    case actionTypes.FETCH_WEATHER_SUCCESS:
      return action.payload;
    case actionTypes.FETCH_WEATHER_ERROR:
      return action.payload;
  }

  return state;
}
