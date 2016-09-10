import React, { Component } from 'react';

class RedditList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var items = this.props.redditData.map((val, i) => {
      console.log(i, val);
      return i;
    })   

    return (<div>List</div>);
  }
}

export default RedditList;