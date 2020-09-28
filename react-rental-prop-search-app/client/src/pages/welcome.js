import React, { Component } from "react";
import pslogolg from "../Images/ps-full-logo.png";

class Welcome extends Component {
  render() {
    return (
      <div>
        <header className="welcome">
          <h1>Welcome To</h1>
          <img
            className="ps-welcome-logo"
            src={pslogolg}
            alt="Property Search Logotype"
          />
        </header>
      </div>
    );
  }
}

export default Welcome;
