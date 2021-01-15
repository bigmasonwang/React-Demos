import React, { Component } from 'react';

class CommentInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      content: '',
    };
  }

  handleSubmit() {
    if (this.props.onSubmit) {
      const { username, content } = this.state;
      this.props.onSubmit({ username, content });
    }
    this.setState({ content: '' });
  }

  render() {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">User Name:</span>
          <div className="comment-field-input">
            <input
              value={this.state.username}
              onChange={(e) => {
                this.setState({ username: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">Content:</span>
          <div className="comment-field-input">
            <textarea
              value={this.state.content}
              onChange={(e) => {
                this.setState({ content: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.handleSubmit.bind(this)}>Submit</button>
        </div>
      </div>
    );
  }
}

export default CommentInput;
