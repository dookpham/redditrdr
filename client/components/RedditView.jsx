import React, { Component } from 'react';

class RedditView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var img;
    if (this.props.preview) {
      // img = <img className="previewImage" src={this.props.preview.images[0].source.url} />
      img = <img className="previewImage" src={this.props.icon_img} />
    }
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>({this.props.domain})</p>
        {img}
        <p>by {this.props.author} in /r/{this.props.subreddit}</p>
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