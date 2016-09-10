import axios from 'axios';

const addSubReddit = (string) => {
  console.log('trigger action');
  return {
    type: 'ADD_SUBREDDIT',
    string
  }
}

export const querySubReddit = (string) => {
  console.log('enter query');
  return dispatch => {

    axios({
      method: 'get',
      url: 'https://oauth.reddit.com/r/' + string,
      headers: {
        'Authorization': 'bearer g43Q8Tq4YVPJuuNQiHxeZ2JO7-Y',
      }
    })
    .then(response => {
      console.log('search results');
      console.log(response);
      if (response.data.data.children) {
        dispatch(addSubReddit(string));
      }
    })
  }
}
