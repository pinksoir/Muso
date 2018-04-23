import { compose, createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import persistState from 'redux-localstorage'

// import base from './base'

// Reducer
import rootReducer from './reducers/rootReducer'

// Set history
export const history = createHistory();


const routerMW = routerMiddleware(history);


const middleware = applyMiddleware(
  promiseMiddleware, 
  thunk, 
  logger, 
  routerMW
);

const enhancer = compose(
    middleware,
    // persistState(),
)

const store = createStore(rootReducer, enhancer);

export default store;