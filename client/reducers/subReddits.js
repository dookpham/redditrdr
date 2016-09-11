
const subReddits = (state = [], action) => {
  switch (action.type) {

  case 'ADD_SUBREDDIT':
    return [ ...state, 
      {
        name: action.string,
        color: action.color,
      }
    ];  //need to query api for actual string
  case 'REMOVE_SUBREDDIT':
    return state.filter(val => {
      return val.name !== action.string;
    });
  default:
    return state;
  }
};

export default subReddits;