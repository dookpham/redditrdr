import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const SubRedditTag = (props) => {

  return (
    <div className="subreddit-tag">
      <p>{props.name}</p>
      <a className="close">X</a>
    </div>);
}

const mapStateToProps = (state) => {
  return {
    subReddits: state.subReddits,
  }
}

export default connect(
  mapStateToProps
)(SubRedditTag);