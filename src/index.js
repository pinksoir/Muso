import React from 'react'
import { render } from 'react-dom'
import { Provider } from "react-redux"
import { Route, Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

// CSS
import css from './css/style.css'

// Containers
import App from './containers/App'

// Store
// import store, { history } from './store'
import { store, history, persistor } from './store'

const router = (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

        <Router history={history}>
          <Route path='/' component={App} />
        </Router>
        
      </PersistGate>
    </Provider>  
)

render(router, document.getElementById('root'));