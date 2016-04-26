import {actionTypes} from '../actions/action_fetch_weather';

export default function ReducerWeather(state = [], action) {
  // console.log('ReducerWeather ', action.payload, new Date(Date.now()));

  switch (action.type) {
    case actionTypes.FETCH_WEATHER:
      console.log(action.type);
      return state;
    case actionTypes.FETCH_WEATHER_SUCCESS:
      //don't manipulate state
      console.log(action.type);
      return [action.payload.data, ...state];//instead we return new copy of state
    case actionTypes.FETCH_WEATHER_ERROR:
      console.log(action.type);
      return action.payload;
  }

  return state;
}
