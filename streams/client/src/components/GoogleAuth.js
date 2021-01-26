import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.load({
        clientId:
          "314276110260-jf9lrhre3r9j02ou08cn0biba4vs9ioq.apps.googleusercontent.com",
        scope: "email"
      });
    });
  }
  render() {
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;
