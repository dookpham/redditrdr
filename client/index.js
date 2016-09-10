import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import RedditList from './components/RedditList.jsx';

//get reddit homeview
// const createComponentView = ()

// const createComponent = function(child) {
//   const data = child.data;
//   const url = data.url;
//   const title = data.title;
//   const domain = data.domain;
//   const ups = data.ups;
//   //downs not accurate
//   const img = data.preview.images[0].source; //height, url, width
//   const author = data.author;
//   const subreddit = data.subreddit;


// }
var redditData;

const fetchHomeView = () => {
  axios.get('http://www.reddit.com/.json')
    .then(response => {
      console.log(response.data.children);
      redditData = response.data.children;
      return response.data.children;
    })
}

fetchHomeView()

ReactDOM.render(
  <div>
    <h1>Reddit Rdr</h1>
    <RedditList redditData={redditData}/>
  </div>
  , document.getElementById('app')
);