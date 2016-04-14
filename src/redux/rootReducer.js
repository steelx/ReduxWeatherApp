import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import reducers from './reducers'

export default combineReducers({
  router
});
