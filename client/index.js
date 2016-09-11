import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import appReducer from './reducers/index';
import App from './components/App.jsx';
import { fetchHomeView, fetchMoreHome } from './actions/redditDataActions';

const middleware = [thunk, logger()];
let store = createStore(appReducer, applyMiddleware(...middleware));

store.dispatch(fetchHomeView());

window.onscroll = function(ev) {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    console.log('scrolled to bottom');
    store.dispatch(fetchMoreHome());
  }
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app')
);