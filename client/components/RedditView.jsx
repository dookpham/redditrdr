import React, { Component } from 'react';

class RedditView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.title}
      </div>
    );
  }
}

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


export default RedditView;