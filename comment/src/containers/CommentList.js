import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CommentList from '../components/CommentList';
import { initComments, deleteComment } from '../reducers/comments';

class CommentListContainer extends Component {
  static propTypes = {
    comments: PropTypes.array,
    initComments: PropTypes.func,
    onDeleteComment: PropTypes.func,
  };
  componentDidMount() {
    this._loadComment();
  }
  _loadComment() {
    // load comment from LocalStorage
    let comments = localStorage.getItem('comments');
    comments = comments ? JSON.parse(comments) : [];
    this.props.initComments(comments);
  }

  handleDelteComment(index) {
    const { comments } = this.props;
    const newComments = [
      ...comments.slice(0, index),
      ...comments.slice(index + 1),
    ];
    // store new comment list in LocakStorage
    localStorage.setItem('comment', JSON.stringify(newComments));
    // dispatch an action to delete comment
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index);
    }
  }

  render() {
    return (
      <CommentList
        comments={this.props.comments}
        onDeleteComment={this.handleDelteComment.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initComments: (comments) => {
      dispatch(initComments(comments));
    },
    onDeleteComment: (commentIndex) => {
      dispatch(deleteComment(commentIndex));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentListContainer);
