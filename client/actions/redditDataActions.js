import axios from 'axios';

const loadNewRedditData = ({array}) => {
  return {
    type: 'ADD_NEW_DATA',
    array
  }
}

export const fetchHomeView = () => {
  return dispatch => {

    axios.get('http://www.reddit.com/.json')
      .then(response => {
        console.log(response.data.data.children);
        dispatch(loadNewRedditData({array: response.data.data.children.slice(0)}));
        // redditData = response.data.children;
        // return response.data.children.slice(0);
      })
  }
}
