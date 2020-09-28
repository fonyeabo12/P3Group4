import React, { Component } from "react";
import { Container } from "react-bootstrap";

class About extends Component {
  render() {
    return (
      <Container>
        <div className="about">
          <div className="about-heading">About Us</div>
          <p>
            <span className="about-text-styling">Property Search</span> allows
            you to quickly find your next home by providing a friendly one stop
            site for your renting needs.
          </p>
          <p>
            We provide a living database that offers current homes and
            apartments that are available on the market.
          </p>
          <p>
            <span className="about-text-styling">Property Search</span> launched
            in 2020 and is headquartered in Houston.
          </p>
        </div>
      </Container>
    );
  }
}

export default About;
