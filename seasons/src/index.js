import React from "react";
import ReactDOM from "react-dom";
import SeasonDispplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMassage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMassage: err.message })
    );
  }

  componentDidUpdate() {
    console.log("My component was just updated, it rerendered");
  }

  renderContent() {
    if (this.state.lat && !this.state.errorMassage) {
      return <SeasonDispplay lat={this.state.lat} />;
    }
    if (!this.state.lat && this.state.errorMassage) {
      return <div>Err: {this.state.errorMassage}</div>;
    }
    return <Spinner message="please allow the location request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
