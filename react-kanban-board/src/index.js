import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import reducer from './reducers'
import Board from './containers/Board';
import './index.css';

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