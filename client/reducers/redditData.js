const completed = (state, action) => {

  switch (action.type) {

  case 'ADD_COMPLETED':
    return {
      id: action.id,
      name: action.name,
      user: action.user,
      createdAt: action.createdAt,
    };
  default:
    return state;
  }
};


const redditData = (state = [], action) => {
  switch (action.type) {

  case 'ADD_MORE_DATA':
    //need to concat old w/ new, check proper sorting
  case 'ADD_NEW_DATA':
    return action.array;
  default:
    return state;
  }
};

export default redditData;