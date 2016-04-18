import {actionTypes} from '../actions/';

export default function ReducerWeather(state = [], action) {
  // console.log('ReducerWeather ', action.payload, new Date(Date.now()));

  switch (action.type) {
    case actionTypes.FETCH_WEATHER:
      return action.payload;
    case actionTypes.FETCH_WEATHER_SUCCESS:
      //don't manipulate state
      return [action.payload, ...state];//instead we return new copy of state
    case actionTypes.FETCH_WEATHER_ERROR:
      return action.payload;
  }

  return state;
}
