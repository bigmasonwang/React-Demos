import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class Postlist extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return <div> Postlist </div>;
  }
}

export default connect(null, { fetchPosts: fetchPosts })(Postlist);
