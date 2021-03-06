import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from './react-redux';

class Header extends Component {
  static propTypes = {
    themeColor: propTypes.string
  };
  render() {
    return <h1 style={{ color: this.props.themeColor }}>The Header</h1>;
  }
}

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  };
};
Header = connect(mapStateToProps)(Header);
export default Header;
