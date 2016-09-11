import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { querySubReddit } from '../actions/editSubReddit';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    }
  }

  onChange(e) {
    this.setState({inputValue: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    const searchString = e.target[0].value;
    // console.log('submitted', searchString, this.props.dispatch);
    var action = 'refresh';  //by default replace the homeview with new subreddits
    console.log(this.props.subReddits);
    if (this.props.subReddits && this.props.subReddits.length > 0) {
      action = 'add';
    }
    this.setState({inputValue: ''});
    this.props.dispatch(querySubReddit(searchString, action));
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <input type="text" name="name" placeholder="SEARCH" 
          className="input-search" value={this.state.inputValue} onChange={this.onChange.bind(this)}/>
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

export default connect(
  mapStateToProps
)(Search);
