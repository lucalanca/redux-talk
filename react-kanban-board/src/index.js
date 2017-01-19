import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'

import App from './containers/App'
import Board from './containers/Board'
// import Timeline from './containers/Timeline'
import './index.css'


import { combineReducers } from 'redux'
import columns from './common-kanban-redux/reducers/columns'
import tasks from './common-kanban-redux/reducers/tasks'
const reducer = combineReducers({
	tasks,
  columns
});


const store = createStore(
    reducer,
    applyMiddleware(createLogger())
  )

render(
  <Provider store={store}>
		<Board />
  </Provider>,
  document.getElementById('root')
)