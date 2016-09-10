import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SubRedditTag from '../containers/SubRedditTag.jsx';

const SubRedditList = (props) => {
  var items = props.subReddits.map((val, i) => {
    console.log(i, val);
    return <SubRedditTag key={i} name={val} />;
  });

  return (
    <div className="subreddit-list">
      {items}
    </div>);
}

const mapStateToProps = (state) => {
  return {
    subReddits: state.subReddits,
  }
}

export default connect(
  mapStateToProps
)(SubRedditList);