import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'


import reducer from './reducers'
import App from './containers/App'
import Board from './containers/Board'
import Timeline from './containers/Timeline'
import './index.css'

const store = createStore(
    reducer,
    applyMiddleware(createLogger())
  )

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Board}/>
        <Route path="timeline" component={Timeline}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)