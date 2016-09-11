
const scrollManager = (state = {
  mode: 'home',
  after: [];
}, action) => {
  switch (action.type) {

  case 'CHANGE_HOME':
    return { 
      mode: 'home',
      after: action.after
    }
  case 'CHANGE_SUBREDDIT':
    return {
      mode: 'subreddit',
      after: [{
        name: action.name,
        after: action.after,
      }],
    }
  case 'ADD_SUBREDDIT':
    return {
      mode: state.mode,
      after: [ ...state.after, {
        name: action.name,
        after: action.after,
      }]
    }
  case 'LOAD_SUBREDDIT':
    var subreddit = state.after.shift();
    subreddit.after = action.after;
    state.after.push(subreddit);
    return {
      mode: state.mode,
      after: state.after.slice(0);
    }
  default:
    return state;
  }
};

export default scrollManager;