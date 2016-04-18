// import fetch from 'isomorphic-fetch';
import axios from 'axios';
const APY_KEY = '2925805fa0bcb3f3df21bb0451f0358f';
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${APY_KEY}`;

export const actionTypes = {
  FETCH_WEATHER: 'FETCH_WEATHER',
  FETCH_WEATHER_SUCCESS: 'FETCH_WEATHER_SUCCESS',
  FETCH_WEATHER_ERROR: 'FETCH_WEATHER_ERROR'
};

/**
 * request links action
 *
 * @returns {Object}  action object
 */
export function FetchWeatherRequest(){
  return {
    type: actionTypes.FETCH_WEATHER,
    payload: actionTypes.FETCH_WEATHER,
  }
}

/**
 * request links succes action
 *
 * @param {Object[]}  links
 * @returns {Object}  action object
 */
export function FetchWeatherSuccess(payload){
  return {
    type: actionTypes.FETCH_WEATHER_SUCCESS,
    payload
  }
}


/**
 * request links error action
 *
 * @param {Object[]}  error
 * @returns {Object}  action object
 */
export function FetchWeatherError(payload){
  return {
    type: actionTypes.FETCH_WEATHER_ERROR,
    payload
  }
}

/**
 * fetch weather action
 *
 * @returns {object}  action object
 */
export function FetchWeather(city){
  // --- will do actuall fetch here ---
  let url = `${API_URL}&q=${city},in`;
  console.log('Action ajax ' + new Date(Date.now()));

  const axiosGet = axios(url);

  var request = new Request(url, {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    headers: new Headers({
      'Content-Type': 'text/plain'
    })
  });

  // return (dispatch) => {
  //   return fetch(request)
  //     .then(
  //       success => dispatch(FetchWeatherSuccess(success.clone().json())),
  //       error => dispatch(FetchWeatherError(error))
  //     );
  // };

  return (dispatch) => {
    return axiosGet
      .then(
        success => dispatch(FetchWeatherSuccess(success)),
        error => dispatch(FetchWeatherError(error))
      );
  };
}
