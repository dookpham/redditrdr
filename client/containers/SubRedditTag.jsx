import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { filterRedditData } from '../actions/redditDataActions';
import { removeSubReddit } from '../actions/editSubReddit';

class SubRedditTag extends Component {
  constructor(props) {
    super(props);
  }

  onClose(e) {
    console.log('closed:', this.props.name);
    this.props.dispatch(removeSubReddit(this.props.name, this.props.color));
    this.props.dispatch(filterRedditData(this.props.name));
  }

  render () {
    return (
      <div className={`subreddit-tag ${this.props.color}` }>
        <p>{this.props.name}</p>
        <a onClick={this.onClose.bind(this)} className="close">X</a>
      </div>);
  }
}

const mapStateToProps = (state) => {
  return {
    subReddits: state.subReddits,
  }
}

export default connect(
  mapStateToProps
)(SubRedditTag);
