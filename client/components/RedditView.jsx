import React, { Component } from 'react';

class RedditView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var img;
    if (this.props.preview) {
      img = <img className="previewImage" src={this.props.preview.images[0].source.url} />
    }
    return (
      <div>
        <a href={this.props.url} target="_blank"><h3>{this.props.title}</h3></a>
        <p>({this.props.domain}) Score: {this.props.ups} 👍</p>
        {img}
        <p>by {this.props.author} in /r/{this.props.subreddit}</p>
      </div>
    );
  }
}

export default RedditView;