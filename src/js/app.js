import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import Home from './pages/Home';
import reducer from './reducer';

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware)
);

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('app')
);

window.store = store;
