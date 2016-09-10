import { combineReducers } from 'redux';
import redditData from './redditData';

const appReducer = combineReducers({
  redditData,
});

export default appReducer;