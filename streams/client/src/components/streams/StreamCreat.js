import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreat extends Component {
  renderInput() {
    return <input />;
  }
  render() {
    return (
      <form>
        <Field name='title' component={this.renderInput} />
        <Field name='description' component={this.renderInput} />
      </form>
    );
  }
}

export default reduxForm({
  form: 'streamCreate',
})(StreamCreat);
