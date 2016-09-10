import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import RedditView from '../components/RedditView.jsx';

const RedditList = (props) => {
  var items = props.list.map((val, i) => {
    console.log(i, val.data);
    return <RedditView key={i} {...val.data} />;
  });

  return (
    <div>
      {items}
    </div>);
}

const mapStateToProps = (state) => {
  return {
    list: state.redditData,
  }
}

export default connect(
  mapStateToProps
)(RedditList);