import axios from 'axios';

// these variables should be put into reducers
var after;
var fetchInProgress = false;
var mode = 'home';

export const loadNewRedditData = ({array}) => {
  mode = 'subreddit';
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
        }, 2000);
      })
  }
}

export const infiniteScroll = (dispatch) => {
  window.onscroll = function(ev) {
    if (!fetchInProgress && (window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      console.log('scrolled to bottom');
      if (mode === 'home') {
        dispatch(fetchMoreHome());
      } else {

      }
    }
  };
}
