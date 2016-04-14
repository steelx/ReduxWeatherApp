import axios from 'axios';

const APY_KEY = '2925805fa0bcb3f3df21bb0451f0358f';
const API_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${APY_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function FetchWeather(city) {
  let url = `${API_URL}&q=${city},in`;
  let promise = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: promise
  };
}
