import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      content: '',
    };
  }

  componentDidMount() {
    this.textarea.focus();
    this._loadUsername();
  }

  _loadUsername() {
    const username = localStorage.getItem('username');
    if (username) {
      this.setState({ username: username });
    }
  }

  handleSubmit() {
    if (this.props.onSubmit) {
      this.props.onSubmit({
        username: this.state.username,
        content: this.state.content,
        createdTime: +new Date(),
      });
    }
    this.setState({ content: '' });
  }

  render() {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>User Name:</span>
          <div className='comment-field-input'>
            <input
              value={this.state.username}
              onChange={(e) => {
                this.setState({ username: e.target.value });
              }}
              // save user name
              onBlur={(e) => {
                localStorage.setItem('username', e.target.value);
              }}
            />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>Content:</span>
          <div className='comment-field-input'>
            <textarea
              // get DOM element of textarea
              ref={(textarea) => (this.textarea = textarea)}
              value={this.state.content}
              onChange={(e) => {
                this.setState({ content: e.target.value });
              }}
            />
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit.bind(this)}>Submit</button>
        </div>
      </div>
    );
  }
}

export default CommentInput;
