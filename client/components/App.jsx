import React, { Component } from 'react';
import RedditList from '../containers/RedditList.jsx';
import SubRedditList from '../containers/SubRedditList.jsx';
import Search from '../containers/Search.jsx';

const App = () => {
  return (
  <div className="app">
    <h1>Reddit Rdr</h1>
    <Search />
    <SubRedditList />
    <RedditList />
  </div>
  );
}

export default App;