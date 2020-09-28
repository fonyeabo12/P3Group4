import React, { Component } from "react";
import { Col } from "react-bootstrap";

class NotFound extends Component {
  render() {
    return (
      <Col>
        <h2 className="notfound">404: The Page You Requested is Not Found</h2>
      </Col>
    );
  }
}

export default NotFound;
