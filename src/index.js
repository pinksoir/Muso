import React from 'react'
import { render } from 'react-dom'
import { Provider } from "react-redux"
import { Route, Router } from 'react-router-dom'

// CSS
import css from './css/style.css'

// Containers
import App from './containers/App'

// Store
import store, { history } from './store'

const router = (
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={App} />
      </Router>
    </Provider>  
)

render(router, document.getElementById('root'));