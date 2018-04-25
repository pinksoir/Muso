// import { compose, createStore, applyMiddleware } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// Reducer
import rootReducer from './reducers/rootReducer'

// Set history
// export const history = createHistory();
const history = createHistory();

// Persist Config
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// Routing MW
const routeMiddleware = routerMiddleware(history);


const middleware = applyMiddleware(
  promiseMiddleware, 
  thunk, 
  logger, 
  routeMiddleware
);

const enhancer = composeWithDevTools(
    middleware,
);

// const store = createStore(rootReducer, enhancer);

// export default store;

let store = createStore(persistedReducer, enhancer);
let persistor = persistStore(store);

export { persistor, store, history };