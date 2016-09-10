import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import appReducer from './reducers/index';
import App from './components/App.jsx';
import { fetchHomeView } from './actions/redditDataActions';

const middleware = [thunk, logger()];
let store = createStore(appReducer, applyMiddleware(...middleware));

store.dispatch(fetchHomeView());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app')
);