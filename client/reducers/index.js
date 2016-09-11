import { combineReducers } from 'redux';
import redditData from './redditData';
import subReddits from './subReddits';
// import scrollManger from './scrollManager';

const appReducer = combineReducers({
  redditData,
  subReddits,
  // scrollManger,
});

export default appReducer;