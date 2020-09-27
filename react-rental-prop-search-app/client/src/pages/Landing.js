import React, { Component } from "react";
import { Container } from "react-bootstrap";
import pslogolg from "../Images/ps-full-logo.png";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <header className="landing-header">
          <img
            src={pslogolg}
            className="PS-logo"
            alt="Property Search Logotype"
          />
        </header>
      </div>
    );
  }
}

export default Landing;
