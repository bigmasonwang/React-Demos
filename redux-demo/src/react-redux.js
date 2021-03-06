import React, { Component } from 'react';
import propTypes from 'prop-types';

export const connect = (mapStateToProps, mapDispatchToProps) => (
  WrappedComponent
) => {
  class Connect extends Component {
    static contextTypes = {
      store: propTypes.object
    };
    constructor() {
      super();
      this.state = { allProps: {} };
    }
    componentDidMount() {
      const { store } = this.context;
      this._updateProps();
      store.subscribe(() => this._updateProps());
    }
    _updateProps() {
      const { store } = this.context;
      let stateProps = mapStateToProps
        ? mapStateToProps(store.getState(), this.props)
        : {}; // prevent mapStateToProps did not passed in
      let dispatchProps = mapDispatchToProps
        ? mapDispatchToProps(store.dispatch, this.props)
        : {}; // prevent mapStateToProps did not passed in
      this.setState({
        allProps: {
          ...stateProps,
          ...dispatchProps,
          ...this.props
        }
      });
    }
    render() {
      return <WrappedComponent {...this.state.allProps} />;
    }
  }
  return Connect;
};

export class Provider extends Component {
  static propTypes = {
    store: propTypes.object,
    children: propTypes.any
  };
  static childContextTypes = {
    store: propTypes.object
  };
  getChildContext() {
    return {
      store: this.props.store
    };
  }
  render() {
    return <div>{this.props.children}</div>;
  }
}
