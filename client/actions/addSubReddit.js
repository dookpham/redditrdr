import axios from 'axios';
import { loadNewRedditData, loadMoreRedditData } from './redditDataActions';

const addSubReddit = (string) => {
  console.log('trigger action');
  return {
    type: 'ADD_SUBREDDIT',
    string
  }
}

export const querySubReddit = (string, action) => {
  console.log('enter query');
  return dispatch => {

    axios({
      method: 'get',
      // url: 'https://oauth.reddit.com/r/' + string,
      url: `/api/subreddit?string=${string}`
      // headers: {
      //   'Authorization': 'bearer g43Q8Tq4YVPJuuNQiHxeZ2JO7-Y',
      // }
    })
    .then(response => {
      console.log('search results');
      console.log(response);

      // if a subreddit with that name was successfully found
      if (response.data.data.children) { 
        dispatch(addSubReddit(string));
        if (action === 'refresh') {
          // dispatch(loadNewRedditData({array: response.data.data.children.slice(0)}));
        } else {  //action === 'add'
          // dispatch(loadMoreRedditData({array: response.data.data.children.slice(0)}));
        }

      } else { // no subreddits with that name

      }
    })
  }
}
