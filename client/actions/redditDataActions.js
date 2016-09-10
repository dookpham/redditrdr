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
        dispatch(loadNewRedditData({array: response.data.data.children.slice(0)}));
      })
  }
}
