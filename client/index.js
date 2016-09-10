import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import appReducer from './reducers/index';
import RedditList from './containers/RedditList.jsx';
import { fetchHomeView } from './actions/redditDataActions';

const middleware = [thunk, logger()];
let store = createStore(appReducer, applyMiddleware(...middleware));

store.dispatch(fetchHomeView());

ReactDOM.render(
  <Provider store={store}>
    <div>
      <h1>Reddit Rdr</h1>
      <RedditList />
    </div>
  </Provider>
  , document.getElementById('app')
);