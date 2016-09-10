import { combineReducers } from 'redux';
import redditData from './redditData';
import subReddits from './subReddits';

const appReducer = combineReducers({
  redditData,
  subReddits,
});

export default appReducer;