const redditData = (state = [], action) => {
  switch (action.type) {

  case 'ADD_MORE_DATA':
    //need to concat old w/ new, check proper sorting
    return action.array.concat(state);
  case 'ADD_NEW_DATA':
    return action.array;
  case 'FILTER_REDDITDATA':
    return state.filter(val => {
      return val.data.subreddit.toLowerCase() !== action.string.toLowerCase();
    });
  default:
    return state;
  }
};

export default redditData;