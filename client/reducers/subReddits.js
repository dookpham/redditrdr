
const subReddits = (state = [], action) => {
  switch (action.type) {

  case 'ADD_SUBREDDIT':
    return [ ...state, action.string];  //need to query api for actual string
  default:
    return state;
  }
};

export default subReddits;