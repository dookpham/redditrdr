import axios from 'axios';

var after;
var fetchInProgress = false;

export const loadNewRedditData = ({array}) => {
  return {
    type: 'ADD_NEW_DATA',
    array
  }
}

export const loadMoreRedditData = ({array}) => {
  return {
    type: 'ADD_MORE_DATA',
    array
  }
}

export const filterRedditData = (string) => {
  return {
    type: 'FILTER_REDDITDATA',
    string
  }
}

export const fetchHomeView = () => {
  return dispatch => {
    fetchInProgress = true;
    axios.get('http://www.reddit.com/.json')
      .then(response => {
        console.log(response);
        after = response.data.data.after;
        dispatch(loadNewRedditData({array: response.data.data.children.slice(0)}));
        fetchInProgress = false;
      })
  }
}

export const fetchMoreHome = () => {
  if (!fetchInProgress) {
    console.log('try to fetch more');
    return dispatch => {
      fetchInProgress = true;
      axios.get(`http://www.reddit.com/.json?after=${after}`)
        .then(response => {
          console.log(response);
          after = response.data.data.after;
          dispatch(loadMoreRedditData({array: response.data.data.children.slice(0)}));
          setTimeout(() => {
            fetchInProgress = false;
          }, 3000);
        })
    }
  }
}
