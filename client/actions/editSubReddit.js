import axios from 'axios';
import { loadNewRedditData, loadMoreRedditData } from './redditDataActions';

const availableColors = [
  'color1',
  'color2',
  'color3',
  'color4',
  'color5',
  'color6',
  'color7',
  'color8',
  'color9',
  'color10',
];

const addSubReddit = (string) => {
  // console.log('trigger action');
  const color = availableColors.pop();
  return {
    type: 'ADD_SUBREDDIT',
    string,
    color,
  }
}

export const removeSubReddit = (string, color) => {
  console.log('remove:', string, color);
  availableColors.unshift(color);
  return {
    type: 'REMOVE_SUBREDDIT',
    string,
  }
}

export const querySubReddit = (string, action) => {
  // console.log('enter query');
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
      // console.log('search results', action);
      // console.log(response);

      // if a subreddit with that name was successfully found
      if (response.data.data.children.length > 0) { 
        dispatch(addSubReddit(string));
        if (action === 'refresh') {
          dispatch(loadNewRedditData({array: response.data.data.children.slice(0)}));
        } else {  //action === 'add'
          dispatch(loadMoreRedditData({array: response.data.data.children.slice(0)}));
        }

      } else { // no subreddits with that name

      }
    })
  }
}
