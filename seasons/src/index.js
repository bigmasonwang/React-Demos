import React from "react";
import ReactDOM from "react-dom";
import SeasonDispplay from "./SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMassage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMassage: err.message });
      }
    );
  }

  render() {
    if (this.state.lat && !this.state.errorMassage) {
      return <div>Latitude: {this.state.lat}</div>;
    }
    if (!this.state.lat && this.state.errorMassage) {
      return <div>Err: {this.state.errorMassage}</div>;
    }
    return <div>Loading..</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
