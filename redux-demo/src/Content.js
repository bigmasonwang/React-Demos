import React, { Component } from 'react';
import propTypes from 'prop-types';
import ThemeSwitch from './ThemeSwitch';
import { connect } from './react-redux';

class Content extends Component {
  static contextTypes = {
    themeColor: propTypes.string
  };
  render() {
    return (
      <div>
        <p style={{ color: this.props.themeColor }}>The Content</p>
        <ThemeSwitch />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  };
};
Content = connect(mapStateToProps)(Content);
export default Content;
