import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static defaultProps = {
    comments: [],
  };

  render() {
    return (
      <div>
        {this.props.comments.map((comment, i) => (
          <Comment comment={comment} key={i} />
        ))}
      </div>
    );
  }
}

export default CommentList;
