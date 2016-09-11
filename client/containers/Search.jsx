import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { querySubReddit } from '../actions/addSubReddit';

class Search extends Component {
  constructor(props) {
    super(props);

  }

  // onKeyPress(e) {
  //   if (e.key === 'Enter') {
  //     this.onSubmit();
  //   }
  // }

  onSubmit(e) {
    e.preventDefault();
    const searchString = e.target[0].value;
    // console.log('submitted', searchString, this.props.dispatch);
    var action = 'refresh';  //by default replace the homeview with new subreddits
    console.log(this.props.subReddits);
    // if (this.props.subReddits.length > 0) {
    //   action = 'add';
    // }
    this.props.dispatch(querySubReddit(searchString, action));
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <input type="text" name="name" placeholder="SEARCH" className="input-search" />
        <input value="Add" type="submit" />
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    subReddits: state.subReddits,
  }
}

export default connect()(Search);
