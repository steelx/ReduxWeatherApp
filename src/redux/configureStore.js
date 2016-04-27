import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { routerMiddleware } from 'react-router-redux';
import {configure} from 'redux-auth';

//https://github.com/login/oauth/authorize?client_id=32b70bf671e04762b26c&redirect_uri=http://localhost:3000/
const __API_URL__ = 'https://github.com/login/oauth/authorize?client_id=32b70bf671e04762b26c';
const Client_ID = '32b70bf671e04762b26c';
const Client_Secret = '5851623d94887db7612d4c9bc689310b9d53284b';

export default function configureStore (initialState = {}, history) {
  // Compose final middleware and use devtools in debug environment
  let middleware = applyMiddleware(thunk, routerMiddleware(history));
  if (__DEBUG__) {
    const devTools = window.devToolsExtension
      ? window.devToolsExtension()
      : require('containers/DevTools').default.instrument()
    middleware = compose(middleware, devTools)
  }

  // Create final store and subscribe router in debug env ie. for devtools
  const store = middleware(createStore)(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer').default;

      store.replaceReducer(nextRootReducer);
    })
  }

  return store;
}
